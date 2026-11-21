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

suite('Stability_DTS2CPP_COMPAT_COMBO_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0001
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0001
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat305.ts', `function compat305(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0001 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0001 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0001 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_combo_0001 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_combo_0001 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0001 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0002
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0002
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0002', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat305.ts', `function compat305(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0002 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0002 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0002 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_combo_0002 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_combo_0002 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0002 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0003
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0003
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0003', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat305.ts', `function compat305(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0003 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0003 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0003 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_combo_0003 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_combo_0003 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0003 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0004
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0004
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type () => void; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0004', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat305.ts', `function compat305(a: () => void): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0004 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0004 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0004 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_combo_0004 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void()>",
            "dts2cpp_compat_combo_0004_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0004 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0005
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0005
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); void keyword
   *            misspelled to vod (() => vod); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0005', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat305.ts', `function compat305(a: () => vod): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0005 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0005 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0005 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_combo_0005 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<vod()>",
            "dts2cpp_compat_combo_0005_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0005 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0006
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0006
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0006', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat305.ts', `function compat305(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0006 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0006 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0006 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_combo_0006 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_combo_0006 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0006 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0007
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0007
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type () => void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0007', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat305.ts', `class Compat305 { field: () => void; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0007 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0007 convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_combo_0007 must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_combo_0007 must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void()>",
            "dts2cpp_compat_combo_0007_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0007 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0008
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0008
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member () => void; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0008', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat305.ts', `type Compat305 = { x: () => void; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0008 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0008 convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_combo_0008 must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: () => void; }", "dts2cpp_compat_combo_0008_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0008 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0009
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0009
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0009', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat305.ts', `function compat305(a: () => void,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0009 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0009 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0009 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_combo_0009 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void()>",
            "dts2cpp_compat_combo_0009_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0009 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0010
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0010
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0010', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat305.ts', `function compat305(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0010 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0010 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0010 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_combo_0010 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_combo_0010 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0010 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_TCLASS_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_TCLASS_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type tclass_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0011_tclass_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `function compat148(a: tclass_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0011_tclass_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0011_tclass_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0011_tclass_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0011_tclass_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "tclass_s",
          "dts2cpp_compat_combo_0011_tclass_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0011_tclass_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_TCLASS_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_TCLASS_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type tclass_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0012_tclass_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `function compat148(a: tclass_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0012_tclass_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0012_tclass_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0012_tclass_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0012_tclass_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "tclass_b",
          "dts2cpp_compat_combo_0012_tclass_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0012_tclass_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_TCLAS
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_TCLAS
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type tclas; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0013_tclas', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `function compat148(a: tclas): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0013_tclas parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0013_tclas convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0013_tclas must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0013_tclas must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "tclas",
          "dts2cpp_compat_combo_0013_tclas param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0013_tclas execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_BADTYPE148_TCLASS
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_BADTYPE148_TCLASS
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType148_tclass); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0014_badtype148_tclass', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `function compat148(a: BadType148_tclass): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0014_badtype148_tclass parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0014_badtype148_tclass convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0014_badtype148_tclass must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0014_badtype148_tclass must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType148_tclass",
          "dts2cpp_compat_combo_0014_badtype148_tclass param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0014_badtype148_tclass execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_TCLASS_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_TCLASS_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type tclass_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0015_tclass_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `function compat148(a: tclass_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0015_tclass_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0015_tclass_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0015_tclass_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0015_tclass_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "tclass_any",
          "dts2cpp_compat_combo_0015_tclass_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0015_tclass_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_COMPAT148_TCLASS_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_COMPAT148_TCLASS_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type tclass_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0016_compat148_tclass_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `class Compat148 { field: tclass_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0016_compat148_tclass_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0016_compat148_tclass_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0016_compat148_tclass_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0016_compat148_tclass_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "tclass_v",
          "dts2cpp_compat_combo_0016_compat148_tclass_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0016_compat148_tclass_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_COMPAT148_X_TCLASS_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_COMPAT148_X_TCLASS_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member tclass_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0017_compat148_x_tclass_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `type Compat148 = { x: tclass_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0017_compat148_x_tclass_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0017_compat148_x_tclass_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0017_compat148_x_tclass_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: tclass_x; }", "dts2cpp_compat_combo_0017_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0017_compat148_x_tclass_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_TCLASS_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_TCLASS_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type tclass_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0018_tclass_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `function compat148(a: tclass_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0018_tclass_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0018_tclass_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0018_tclass_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0018_tclass_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "tclass_Z",
          "dts2cpp_compat_combo_0018_tclass_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0018_tclass_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_NUMBR_10
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_NUMBR_10
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr[10]); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0019_numbr_10', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat150.ts', `function compat150(a: numbr[10]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0019_numbr_10 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0019_numbr_10 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0019_numbr_10 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0019_numbr_10 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr[10]",
          "dts2cpp_compat_combo_0019_numbr_10 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0019_numbr_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_NUMBER_S_10
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_NUMBER_S_10
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); tag suffix
   *            on array element (number_s[10]); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0020_number_s_10', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat150.ts', `function compat150(a: number_s[10]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0020_number_s_10 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0020_number_s_10 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0020_number_s_10 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0020_number_s_10 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "number_s[10]",
          "dts2cpp_compat_combo_0020_number_s_10 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0020_number_s_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_NUMBER_B_10
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_NUMBER_B_10
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); tag suffix
   *            on array element (number_b[10]); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0021_number_b_10', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat150.ts', `function compat150(a: number_b[10]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0021_number_b_10 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0021_number_b_10 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0021_number_b_10 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0021_number_b_10 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "number_b[10]",
          "dts2cpp_compat_combo_0021_number_b_10 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0021_number_b_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_NUMBER_10
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_NUMBER_10
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat150(a: number[10[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0022_number_10', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat150.ts', `function compat150(a: number[10[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0022_number_10 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0022_number_10 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0022_number_10 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0022_number_10 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "number[10[",
          "dts2cpp_compat_combo_0022_number_10 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0022_number_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_NUMBER_G150_10
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_NUMBER_G150_10
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); uid tag on
   *            array element (number_g150[10]); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0023_number_g150_10', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat150.ts', `function compat150(a: number_g150[10]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0023_number_g150_10 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0023_number_g150_10 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0023_number_g150_10 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0023_number_g150_10 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "number_g150[10]",
          "dts2cpp_compat_combo_0023_number_g150_10 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0023_number_g150_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_NUMBER_ANY_10
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_NUMBER_ANY_10
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); tag suffix
   *            on array element (number_any[10]); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0024_number_any_10', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat150.ts', `function compat150(a: number_any[10]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0024_number_any_10 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0024_number_any_10 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0024_number_any_10 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0024_number_any_10 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "number_any[10]",
          "dts2cpp_compat_combo_0024_number_any_10 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0024_number_any_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_COMPAT150_NUMBER_V_10
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_COMPAT150_NUMBER_V_10
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type number_v[10]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0025_compat150_number_v_10', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat150.ts', `class Compat150 { field: number_v[10]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0025_compat150_number_v_10 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0025_compat150_number_v_10 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0025_compat150_number_v_10 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0025_compat150_number_v_10 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "number_v[10]",
          "dts2cpp_compat_combo_0025_compat150_number_v_10 field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0025_compat150_number_v_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_COMPAT150_X_NUMBER_X_10
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_COMPAT150_X_NUMBER_X_10
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member number_x[10]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0026_compat150_x_number_x_10', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat150.ts', `type Compat150 = { x: number_x[10]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0026_compat150_x_number_x_10 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0026_compat150_x_number_x_10 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0026_compat150_x_number_x_10 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: number_x[10]; }", "dts2cpp_compat_combo_0026_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0026_compat150_x_number_x_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_NUMBER_Z_10
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_NUMBER_Z_10
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type number_Z[10]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0027_number_z_10', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat150.ts', `function compat150(a: number_Z[10]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0027_number_z_10 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0027_number_z_10 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0027_number_z_10 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0027_number_z_10 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "number_Z[10]",
          "dts2cpp_compat_combo_0027_number_z_10 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0027_number_z_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_STRING_N_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_STRING_N_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type string_n[10][20]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0028_string_n_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat151.ts', `function compat151(a: string_n[10][20]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0028_string_n_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0028_string_n_10_20 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0028_string_n_10_20 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0028_string_n_10_20 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string_n[10][20]",
          "dts2cpp_compat_combo_0028_string_n_10_20 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0028_string_n_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_STRNG_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_STRNG_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng[10][20]); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0029_strng_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat151.ts', `function compat151(a: strng[10][20]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0029_strng_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0029_strng_10_20 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0029_strng_10_20 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0029_strng_10_20 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng[10][20]",
          "dts2cpp_compat_combo_0029_strng_10_20 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0029_strng_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_STRING_B_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_STRING_B_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type string_b[10][20]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0030_string_b_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat151.ts', `function compat151(a: string_b[10][20]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0030_string_b_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0030_string_b_10_20 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0030_string_b_10_20 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0030_string_b_10_20 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string_b[10][20]",
          "dts2cpp_compat_combo_0030_string_b_10_20 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0030_string_b_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_STRING_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_STRING_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat151(a: string[10[[20[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0031_string_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat151.ts', `function compat151(a: string[10[[20[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0031_string_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0031_string_10_20 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0031_string_10_20 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0031_string_10_20 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string[10[[20[",
          "dts2cpp_compat_combo_0031_string_10_20 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0031_string_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_STRING_G151_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_STRING_G151_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type string_g151[10][20]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0032_string_g151_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat151.ts', `function compat151(a: string_g151[10][20]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0032_string_g151_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0032_string_g151_10_20 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0032_string_g151_10_20 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0032_string_g151_10_20 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string_g151[10][20]",
          "dts2cpp_compat_combo_0032_string_g151_10_20 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0032_string_g151_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_STRING_ANY_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_STRING_ANY_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type string_any[10][20]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0033_string_any_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat151.ts', `function compat151(a: string_any[10][20]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0033_string_any_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0033_string_any_10_20 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0033_string_any_10_20 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0033_string_any_10_20 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string_any[10][20]",
          "dts2cpp_compat_combo_0033_string_any_10_20 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0033_string_any_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_COMPAT151_STRING_V_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_COMPAT151_STRING_V_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type string_v[10][20]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0034_compat151_string_v_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat151.ts', `class Compat151 { field: string_v[10][20]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0034_compat151_string_v_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0034_compat151_string_v_10_20 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0034_compat151_string_v_10_20 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0034_compat151_string_v_10_20 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string_v[10][20]",
          "dts2cpp_compat_combo_0034_compat151_string_v_10_20 field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0034_compat151_string_v_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_COMPAT151_X_STRING_X_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_COMPAT151_X_STRING_X_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member string_x[10][20]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0035_compat151_x_string_x_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat151.ts', `type Compat151 = { x: string_x[10][20]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0035_compat151_x_string_x_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0035_compat151_x_string_x_10_20 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0035_compat151_x_string_x_10_20 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: string_x[10][20]; }", "dts2cpp_compat_combo_0035_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0035_compat151_x_string_x_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_STRING_Z_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_STRING_Z_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type string_Z[10][20]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0036_string_z_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat151.ts', `function compat151(a: string_Z[10][20]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0036_string_z_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0036_string_z_10_20 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0036_string_z_10_20 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0036_string_z_10_20 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string_Z[10][20]",
          "dts2cpp_compat_combo_0036_string_z_10_20 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0036_string_z_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_TYPE_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_TYPE_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0037_type_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat153.ts', `function compat153(a: Type_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0037_type_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0037_type_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0037_type_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0037_type_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_n",
          "dts2cpp_compat_combo_0037_type_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0037_type_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_TYPE_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_TYPE_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0038_type_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat153.ts', `function compat153(a: Type_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0038_type_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0038_type_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0038_type_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0038_type_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_s",
          "dts2cpp_compat_combo_0038_type_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0038_type_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_TYPE_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_TYPE_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0039_type_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat153.ts', `function compat153(a: Type_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0039_type_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0039_type_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0039_type_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0039_type_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_b",
          "dts2cpp_compat_combo_0039_type_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0039_type_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_TYP
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_TYP
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Typ; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0040_typ', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat153.ts', `function compat153(a: Typ): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0040_typ parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0040_typ convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0040_typ must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0040_typ must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Typ", "dts2cpp_compat_combo_0040_typ param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0040_typ execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_BADTYPE153_TYPE
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_BADTYPE153_TYPE
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType153_Type); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0041_badtype153_type', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat153.ts', `function compat153(a: BadType153_Type): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0041_badtype153_type parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0041_badtype153_type convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0041_badtype153_type must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0041_badtype153_type must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType153_Type",
          "dts2cpp_compat_combo_0041_badtype153_type param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0041_badtype153_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_TYPE_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_TYPE_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0042_type_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat153.ts', `function compat153(a: Type_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0042_type_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0042_type_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0042_type_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0042_type_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_any",
          "dts2cpp_compat_combo_0042_type_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0042_type_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_COMPAT153_TYPE_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_COMPAT153_TYPE_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Type_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0043_compat153_type_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat153.ts', `class Compat153 { field: Type_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0043_compat153_type_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0043_compat153_type_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0043_compat153_type_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0043_compat153_type_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Type_v",
          "dts2cpp_compat_combo_0043_compat153_type_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0043_compat153_type_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_COMPAT153_X_TYPE_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_COMPAT153_X_TYPE_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Type_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0044_compat153_x_type_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat153.ts', `type Compat153 = { x: Type_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0044_compat153_x_type_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0044_compat153_x_type_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0044_compat153_x_type_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Type_x; }", "dts2cpp_compat_combo_0044_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0044_compat153_x_type_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_TYPE_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_TYPE_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0045_type_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat153.ts', `function compat153(a: Type_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0045_type_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0045_type_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0045_type_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0045_type_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_Z",
          "dts2cpp_compat_combo_0045_type_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0045_type_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_TYPE_N_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_TYPE_N_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_n[10][20]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0046_type_n_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat154.ts', `function compat154(a: Type_n[10][20]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0046_type_n_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0046_type_n_10_20 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0046_type_n_10_20 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0046_type_n_10_20 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_n[10][20]",
          "dts2cpp_compat_combo_0046_type_n_10_20 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0046_type_n_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_TYPE_S_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_TYPE_S_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_s[10][20]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0047_type_s_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat154.ts', `function compat154(a: Type_s[10][20]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0047_type_s_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0047_type_s_10_20 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0047_type_s_10_20 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0047_type_s_10_20 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_s[10][20]",
          "dts2cpp_compat_combo_0047_type_s_10_20 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0047_type_s_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_TYPE_B_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_TYPE_B_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_b[10][20]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0048_type_b_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat154.ts', `function compat154(a: Type_b[10][20]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0048_type_b_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0048_type_b_10_20 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0048_type_b_10_20 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0048_type_b_10_20 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_b[10][20]",
          "dts2cpp_compat_combo_0048_type_b_10_20 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0048_type_b_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_TYPE_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_TYPE_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat154(a: Type[10[[20[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0049_type_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat154.ts', `function compat154(a: Type[10[[20[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0049_type_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0049_type_10_20 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0049_type_10_20 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0049_type_10_20 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type[10[[20[",
          "dts2cpp_compat_combo_0049_type_10_20 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0049_type_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_TYPE_G154_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_TYPE_G154_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_g154[10][20]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0050_type_g154_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat154.ts', `function compat154(a: Type_g154[10][20]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0050_type_g154_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0050_type_g154_10_20 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0050_type_g154_10_20 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0050_type_g154_10_20 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_g154[10][20]",
          "dts2cpp_compat_combo_0050_type_g154_10_20 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0050_type_g154_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_TYPE_ANY_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_TYPE_ANY_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_any[10][20]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0051_type_any_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat154.ts', `function compat154(a: Type_any[10][20]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0051_type_any_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0051_type_any_10_20 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0051_type_any_10_20 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0051_type_any_10_20 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_any[10][20]",
          "dts2cpp_compat_combo_0051_type_any_10_20 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0051_type_any_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_COMPAT154_TYPE_V_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_COMPAT154_TYPE_V_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Type_v[10][20]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0052_compat154_type_v_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat154.ts', `class Compat154 { field: Type_v[10][20]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0052_compat154_type_v_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0052_compat154_type_v_10_20 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0052_compat154_type_v_10_20 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0052_compat154_type_v_10_20 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Type_v[10][20]",
          "dts2cpp_compat_combo_0052_compat154_type_v_10_20 field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0052_compat154_type_v_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_COMPAT154_X_TYPE_X_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_COMPAT154_X_TYPE_X_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Type_x[10][20]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0053_compat154_x_type_x_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat154.ts', `type Compat154 = { x: Type_x[10][20]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0053_compat154_x_type_x_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0053_compat154_x_type_x_10_20 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0053_compat154_x_type_x_10_20 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Type_x[10][20]; }", "dts2cpp_compat_combo_0053_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0053_compat154_x_type_x_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_TYPE_Z_10_20
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_TYPE_Z_10_20
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_Z[10][20]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0054_type_z_10_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat154.ts', `function compat154(a: Type_Z[10][20]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0054_type_z_10_20 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0054_type_z_10_20 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0054_type_z_10_20 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0054_type_z_10_20 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_Z[10][20]",
          "dts2cpp_compat_combo_0054_type_z_10_20 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0054_type_z_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_TYPE_N_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_TYPE_N_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_n[10][20][30]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0055_type_n_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat155.ts', `function compat155(a: Type_n[10][20][30]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0055_type_n_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0055_type_n_10_20_30 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0055_type_n_10_20_30 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0055_type_n_10_20_30 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_n[10][20][30]",
          "dts2cpp_compat_combo_0055_type_n_10_20_30 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0055_type_n_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_TYPE_S_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_TYPE_S_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_s[10][20][30]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0056_type_s_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat155.ts', `function compat155(a: Type_s[10][20][30]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0056_type_s_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0056_type_s_10_20_30 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0056_type_s_10_20_30 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0056_type_s_10_20_30 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_s[10][20][30]",
          "dts2cpp_compat_combo_0056_type_s_10_20_30 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0056_type_s_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_TYPE_B_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_TYPE_B_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_b[10][20][30]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0057_type_b_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat155.ts', `function compat155(a: Type_b[10][20][30]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0057_type_b_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0057_type_b_10_20_30 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0057_type_b_10_20_30 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0057_type_b_10_20_30 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_b[10][20][30]",
          "dts2cpp_compat_combo_0057_type_b_10_20_30 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0057_type_b_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_TYPE_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_TYPE_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat155(a: Type[10[[20[[30[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0058_type_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat155.ts', `function compat155(a: Type[10[[20[[30[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0058_type_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0058_type_10_20_30 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0058_type_10_20_30 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0058_type_10_20_30 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type[10[[20[[30[",
          "dts2cpp_compat_combo_0058_type_10_20_30 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0058_type_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_TYPE_G155_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_TYPE_G155_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_g155[10][20][30]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0059_type_g155_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat155.ts', `function compat155(a: Type_g155[10][20][30]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0059_type_g155_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0059_type_g155_10_20_30 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0059_type_g155_10_20_30 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0059_type_g155_10_20_30 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_g155[10][20][30]",
          "dts2cpp_compat_combo_0059_type_g155_10_20_30 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0059_type_g155_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_TYPE_ANY_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_TYPE_ANY_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_any[10][20][30]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0060_type_any_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat155.ts', `function compat155(a: Type_any[10][20][30]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0060_type_any_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0060_type_any_10_20_30 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0060_type_any_10_20_30 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0060_type_any_10_20_30 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_any[10][20][30]",
          "dts2cpp_compat_combo_0060_type_any_10_20_30 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0060_type_any_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_COMPAT155_TYPE_V_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_COMPAT155_TYPE_V_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Type_v[10][20][30]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0061_compat155_type_v_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat155.ts', `class Compat155 { field: Type_v[10][20][30]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0061_compat155_type_v_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0061_compat155_type_v_10_20_30 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0061_compat155_type_v_10_20_30 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0061_compat155_type_v_10_20_30 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Type_v[10][20][30]",
          "dts2cpp_compat_combo_0061_compat155_type_v_10_20_30 field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0061_compat155_type_v_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_COMPAT155_X_TYPE_X_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_COMPAT155_X_TYPE_X_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Type_x[10][20][30]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0062_compat155_x_type_x_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat155.ts', `type Compat155 = { x: Type_x[10][20][30]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0062_compat155_x_type_x_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0062_compat155_x_type_x_10_20_30 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0062_compat155_x_type_x_10_20_30 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Type_x[10][20][30]; }", "dts2cpp_compat_combo_0062_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0062_compat155_x_type_x_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_TYPE_Z_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_TYPE_Z_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Type_Z[10][20][30]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0063_type_z_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat155.ts', `function compat155(a: Type_Z[10][20][30]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0063_type_z_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0063_type_z_10_20_30 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0063_type_z_10_20_30 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0063_type_z_10_20_30 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Type_Z[10][20][30]",
          "dts2cpp_compat_combo_0063_type_z_10_20_30 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0063_type_z_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_HELLO_WORLD_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_HELLO_WORLD_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type "hello world_n"; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0064_hello_world_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat157.ts', `function compat157(a: "hello world_n"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0064_hello_world_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0064_hello_world_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0064_hello_world_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0064_hello_world_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"hello world_n\"",
          "dts2cpp_compat_combo_0064_hello_world_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0064_hello_world_n execution error: ${err}`);
    }
  });
});
