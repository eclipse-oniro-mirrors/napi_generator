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

suite('Stability_DTS2CPP_COMPAT_COMBO_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_UPPERCASE_GREETINGBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_UPPERCASE_GREETINGBR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uppercase<Greetingbr>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0016_uppercase_greetingbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat173.ts', `function compat173(a: Uppercase<Greetingbr>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0016_uppercase_greetingbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0016_uppercase_greetingbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0016_uppercase_greetingbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0016_uppercase_greetingbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uppercase<Greetingbr>",
          "dts2cpp_compat_combo_0016_uppercase_greetingbr param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0016_uppercase_greetingbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_BADTYPE173_UPPERCASE_GREETING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_BADTYPE173_UPPERCASE_GREETING
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType173_Uppercase_Greeting_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0017_badtype173_uppercase_greeting', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat173.ts', `function compat173(a: BadType173_Uppercase_Greeting_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0017_badtype173_uppercase_greeting parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0017_badtype173_uppercase_greeting convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0017_badtype173_uppercase_greeting must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0017_badtype173_uppercase_greeting must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType173_Uppercase_Greeting_",
          "dts2cpp_compat_combo_0017_badtype173_uppercase_greeting param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0017_badtype173_uppercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_UPPERCASE_GREETINGANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_UPPERCASE_GREETINGANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uppercase<Greetingany>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0018_uppercase_greetingany', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat173.ts', `function compat173(a: Uppercase<Greetingany>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0018_uppercase_greetingany parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0018_uppercase_greetingany convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0018_uppercase_greetingany must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0018_uppercase_greetingany must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uppercase<Greetingany>",
          "dts2cpp_compat_combo_0018_uppercase_greetingany param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0018_uppercase_greetingany execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_COMPAT173_UPPERCASE_GREETINGV
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_COMPAT173_UPPERCASE_GREETINGV
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Uppercase<Greetingv>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0019_compat173_uppercase_greetingv', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat173.ts', `class Compat173 { field: Uppercase<Greetingv>; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0019_compat173_uppercase_greetingv parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0019_compat173_uppercase_greetingv convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0019_compat173_uppercase_greetingv must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0019_compat173_uppercase_greetingv must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uppercase<Greetingv>",
          "dts2cpp_compat_combo_0019_compat173_uppercase_greetingv field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0019_compat173_uppercase_greetingv execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_COMPAT173_X_UPPERCASE_GREETINGX
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_COMPAT173_X_UPPERCASE_GREETINGX
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Uppercase<Greetingx>; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0020_compat173_x_uppercase_greetingx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat173.ts', `type Compat173 = { x: Uppercase<Greetingx>; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0020_compat173_x_uppercase_greetingx parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0020_compat173_x_uppercase_greetingx convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0020_compat173_x_uppercase_greetingx must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Uppercase<Greetingx>; }", "dts2cpp_compat_combo_0020_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0020_compat173_x_uppercase_greetingx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_UPPERCASE_GREETINGZ
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_UPPERCASE_GREETINGZ
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uppercase<GreetingZ>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0021_uppercase_greetingz', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat173.ts', `function compat173(a: Uppercase<GreetingZ>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0021_uppercase_greetingz parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0021_uppercase_greetingz convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0021_uppercase_greetingz must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0021_uppercase_greetingz must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uppercase<GreetingZ>",
          "dts2cpp_compat_combo_0021_uppercase_greetingz param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0021_uppercase_greetingz execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_LOWERCASE_GREETINGN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_LOWERCASE_GREETINGN
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Lowercase<Greetingn>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0022_lowercase_greetingn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat174.ts', `function compat174(a: Lowercase<Greetingn>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0022_lowercase_greetingn parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0022_lowercase_greetingn convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0022_lowercase_greetingn must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0022_lowercase_greetingn must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Lowercase<Greetingn>",
          "dts2cpp_compat_combo_0022_lowercase_greetingn param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0022_lowercase_greetingn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_LOWERCASE_GREETINGS
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_LOWERCASE_GREETINGS
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Lowercase<Greetings>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0023_lowercase_greetings', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat174.ts', `function compat174(a: Lowercase<Greetings>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0023_lowercase_greetings parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0023_lowercase_greetings convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0023_lowercase_greetings must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0023_lowercase_greetings must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Lowercase<Greetings>",
          "dts2cpp_compat_combo_0023_lowercase_greetings param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0023_lowercase_greetings execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_LOWERCASE_GREETINGB
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_LOWERCASE_GREETINGB
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Lowercase<Greetingb>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0024_lowercase_greetingb', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat174.ts', `function compat174(a: Lowercase<Greetingb>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0024_lowercase_greetingb parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0024_lowercase_greetingb convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0024_lowercase_greetingb must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0024_lowercase_greetingb must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Lowercase<Greetingb>",
          "dts2cpp_compat_combo_0024_lowercase_greetingb param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0024_lowercase_greetingb execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_LOWERCASE_GREETINGBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_LOWERCASE_GREETINGBR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Lowercase<Greetingbr>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0025_lowercase_greetingbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat174.ts', `function compat174(a: Lowercase<Greetingbr>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0025_lowercase_greetingbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0025_lowercase_greetingbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0025_lowercase_greetingbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0025_lowercase_greetingbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Lowercase<Greetingbr>",
          "dts2cpp_compat_combo_0025_lowercase_greetingbr param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0025_lowercase_greetingbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_BADTYPE174_LOWERCASE_GREETING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_BADTYPE174_LOWERCASE_GREETING
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType174_Lowercase_Greeting_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0026_badtype174_lowercase_greeting', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat174.ts', `function compat174(a: BadType174_Lowercase_Greeting_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0026_badtype174_lowercase_greeting parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0026_badtype174_lowercase_greeting convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0026_badtype174_lowercase_greeting must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0026_badtype174_lowercase_greeting must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType174_Lowercase_Greeting_",
          "dts2cpp_compat_combo_0026_badtype174_lowercase_greeting param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0026_badtype174_lowercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_LOWERCASE_GREETINGANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_LOWERCASE_GREETINGANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Lowercase<Greetingany>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0027_lowercase_greetingany', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat174.ts', `function compat174(a: Lowercase<Greetingany>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0027_lowercase_greetingany parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0027_lowercase_greetingany convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0027_lowercase_greetingany must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0027_lowercase_greetingany must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Lowercase<Greetingany>",
          "dts2cpp_compat_combo_0027_lowercase_greetingany param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0027_lowercase_greetingany execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_COMPAT174_LOWERCASE_GREETINGV
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_COMPAT174_LOWERCASE_GREETINGV
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Lowercase<Greetingv>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0028_compat174_lowercase_greetingv', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat174.ts', `class Compat174 { field: Lowercase<Greetingv>; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0028_compat174_lowercase_greetingv parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0028_compat174_lowercase_greetingv convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0028_compat174_lowercase_greetingv must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0028_compat174_lowercase_greetingv must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Lowercase<Greetingv>",
          "dts2cpp_compat_combo_0028_compat174_lowercase_greetingv field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0028_compat174_lowercase_greetingv execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_COMPAT174_X_LOWERCASE_GREETINGX
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_COMPAT174_X_LOWERCASE_GREETINGX
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Lowercase<Greetingx>; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0029_compat174_x_lowercase_greetingx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat174.ts', `type Compat174 = { x: Lowercase<Greetingx>; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0029_compat174_x_lowercase_greetingx parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0029_compat174_x_lowercase_greetingx convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0029_compat174_x_lowercase_greetingx must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Lowercase<Greetingx>; }", "dts2cpp_compat_combo_0029_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0029_compat174_x_lowercase_greetingx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_LOWERCASE_GREETINGZ
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_LOWERCASE_GREETINGZ
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Lowercase<GreetingZ>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0030_lowercase_greetingz', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat174.ts', `function compat174(a: Lowercase<GreetingZ>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0030_lowercase_greetingz parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0030_lowercase_greetingz convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0030_lowercase_greetingz must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0030_lowercase_greetingz must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Lowercase<GreetingZ>",
          "dts2cpp_compat_combo_0030_lowercase_greetingz param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0030_lowercase_greetingz execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_CAPITALIZE_GREETINGN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_CAPITALIZE_GREETINGN
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Capitalize<Greetingn>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0031_capitalize_greetingn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat175.ts', `function compat175(a: Capitalize<Greetingn>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0031_capitalize_greetingn parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0031_capitalize_greetingn convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0031_capitalize_greetingn must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0031_capitalize_greetingn must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Capitalize<Greetingn>",
          "dts2cpp_compat_combo_0031_capitalize_greetingn param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0031_capitalize_greetingn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_CAPITALIZE_GREETINGS
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_CAPITALIZE_GREETINGS
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Capitalize<Greetings>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0032_capitalize_greetings', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat175.ts', `function compat175(a: Capitalize<Greetings>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0032_capitalize_greetings parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0032_capitalize_greetings convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0032_capitalize_greetings must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0032_capitalize_greetings must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Capitalize<Greetings>",
          "dts2cpp_compat_combo_0032_capitalize_greetings param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0032_capitalize_greetings execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_CAPITALIZE_GREETINGB
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_CAPITALIZE_GREETINGB
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Capitalize<Greetingb>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0033_capitalize_greetingb', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat175.ts', `function compat175(a: Capitalize<Greetingb>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0033_capitalize_greetingb parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0033_capitalize_greetingb convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0033_capitalize_greetingb must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0033_capitalize_greetingb must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Capitalize<Greetingb>",
          "dts2cpp_compat_combo_0033_capitalize_greetingb param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0033_capitalize_greetingb execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_CAPITALIZE_GREETINGBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_CAPITALIZE_GREETINGBR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Capitalize<Greetingbr>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0034_capitalize_greetingbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat175.ts', `function compat175(a: Capitalize<Greetingbr>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0034_capitalize_greetingbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0034_capitalize_greetingbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0034_capitalize_greetingbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0034_capitalize_greetingbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Capitalize<Greetingbr>",
          "dts2cpp_compat_combo_0034_capitalize_greetingbr param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0034_capitalize_greetingbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_BADTYPE175_CAPITALIZE_GREETING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_BADTYPE175_CAPITALIZE_GREETING
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType175_Capitalize_Greeting_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0035_badtype175_capitalize_greeting', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat175.ts', `function compat175(a: BadType175_Capitalize_Greeting_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0035_badtype175_capitalize_greeting parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0035_badtype175_capitalize_greeting convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0035_badtype175_capitalize_greeting must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0035_badtype175_capitalize_greeting must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType175_Capitalize_Greeting_",
          "dts2cpp_compat_combo_0035_badtype175_capitalize_greeting param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0035_badtype175_capitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_CAPITALIZE_GREETINGANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_CAPITALIZE_GREETINGANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Capitalize<Greetingany>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0036_capitalize_greetingany', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat175.ts', `function compat175(a: Capitalize<Greetingany>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0036_capitalize_greetingany parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0036_capitalize_greetingany convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0036_capitalize_greetingany must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0036_capitalize_greetingany must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Capitalize<Greetingany>",
          "dts2cpp_compat_combo_0036_capitalize_greetingany param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0036_capitalize_greetingany execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_COMPAT175_CAPITALIZE_GREETINGV
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_COMPAT175_CAPITALIZE_GREETINGV
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Capitalize<Greetingv>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0037_compat175_capitalize_greetingv', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat175.ts', `class Compat175 { field: Capitalize<Greetingv>; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0037_compat175_capitalize_greetingv parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0037_compat175_capitalize_greetingv convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0037_compat175_capitalize_greetingv must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0037_compat175_capitalize_greetingv must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Capitalize<Greetingv>",
          "dts2cpp_compat_combo_0037_compat175_capitalize_greetingv field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0037_compat175_capitalize_greetingv execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_COMPAT175_X_CAPITALIZE_GREETINGX
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_COMPAT175_X_CAPITALIZE_GREETINGX
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Capitalize<Greetingx>; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0038_compat175_x_capitalize_greetingx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat175.ts', `type Compat175 = { x: Capitalize<Greetingx>; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0038_compat175_x_capitalize_greetingx parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0038_compat175_x_capitalize_greetingx convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0038_compat175_x_capitalize_greetingx must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Capitalize<Greetingx>; }",
          "dts2cpp_compat_combo_0038_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0038_compat175_x_capitalize_greetingx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_CAPITALIZE_GREETINGZ
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_CAPITALIZE_GREETINGZ
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Capitalize<GreetingZ>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0039_capitalize_greetingz', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat175.ts', `function compat175(a: Capitalize<GreetingZ>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0039_capitalize_greetingz parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0039_capitalize_greetingz convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0039_capitalize_greetingz must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0039_capitalize_greetingz must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Capitalize<GreetingZ>",
          "dts2cpp_compat_combo_0039_capitalize_greetingz param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0039_capitalize_greetingz execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_UNCAPITALIZE_GREETINGN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_UNCAPITALIZE_GREETINGN
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uncapitalize<Greetingn>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0040_uncapitalize_greetingn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat176.ts', `function compat176(a: Uncapitalize<Greetingn>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0040_uncapitalize_greetingn parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0040_uncapitalize_greetingn convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0040_uncapitalize_greetingn must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0040_uncapitalize_greetingn must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uncapitalize<Greetingn>",
          "dts2cpp_compat_combo_0040_uncapitalize_greetingn param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0040_uncapitalize_greetingn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_UNCAPITALIZE_GREETINGS
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_UNCAPITALIZE_GREETINGS
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uncapitalize<Greetings>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0041_uncapitalize_greetings', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat176.ts', `function compat176(a: Uncapitalize<Greetings>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0041_uncapitalize_greetings parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0041_uncapitalize_greetings convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0041_uncapitalize_greetings must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0041_uncapitalize_greetings must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uncapitalize<Greetings>",
          "dts2cpp_compat_combo_0041_uncapitalize_greetings param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0041_uncapitalize_greetings execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_UNCAPITALIZE_GREETINGB
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_UNCAPITALIZE_GREETINGB
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uncapitalize<Greetingb>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0042_uncapitalize_greetingb', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat176.ts', `function compat176(a: Uncapitalize<Greetingb>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0042_uncapitalize_greetingb parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0042_uncapitalize_greetingb convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0042_uncapitalize_greetingb must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0042_uncapitalize_greetingb must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uncapitalize<Greetingb>",
          "dts2cpp_compat_combo_0042_uncapitalize_greetingb param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0042_uncapitalize_greetingb execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_UNCAPITALIZE_GREETINGBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_UNCAPITALIZE_GREETINGBR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uncapitalize<Greetingbr>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0043_uncapitalize_greetingbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat176.ts', `function compat176(a: Uncapitalize<Greetingbr>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0043_uncapitalize_greetingbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0043_uncapitalize_greetingbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0043_uncapitalize_greetingbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0043_uncapitalize_greetingbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uncapitalize<Greetingbr>",
          "dts2cpp_compat_combo_0043_uncapitalize_greetingbr param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0043_uncapitalize_greetingbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_BADTYPE176_UNCAPITALIZE_GREETING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_BADTYPE176_UNCAPITALIZE_GREETING
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType176_Uncapitalize_Greeting_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0044_badtype176_uncapitalize_greeting', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat176.ts', `function compat176(a: BadType176_Uncapitalize_Greeting_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0044_badtype176_uncapitalize_greeting parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0044_badtype176_uncapitalize_greeting convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0044_badtype176_uncapitalize_greeting must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0044_badtype176_uncapitalize_greeting must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType176_Uncapitalize_Greeting_",
          "dts2cpp_compat_combo_0044_badtype176_uncapitalize_greeting param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0044_badtype176_uncapitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_UNCAPITALIZE_GREETINGANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_UNCAPITALIZE_GREETINGANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uncapitalize<Greetingany>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0045_uncapitalize_greetingany', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat176.ts', `function compat176(a: Uncapitalize<Greetingany>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0045_uncapitalize_greetingany parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0045_uncapitalize_greetingany convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0045_uncapitalize_greetingany must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0045_uncapitalize_greetingany must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uncapitalize<Greetingany>",
          "dts2cpp_compat_combo_0045_uncapitalize_greetingany param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0045_uncapitalize_greetingany execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_COMPAT176_UNCAPITALIZE_GREETINGV
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_COMPAT176_UNCAPITALIZE_GREETINGV
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Uncapitalize<Greetingv>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0046_compat176_uncapitalize_greetingv', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat176.ts', `class Compat176 { field: Uncapitalize<Greetingv>; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0046_compat176_uncapitalize_greetingv parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0046_compat176_uncapitalize_greetingv convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0046_compat176_uncapitalize_greetingv must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0046_compat176_uncapitalize_greetingv must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uncapitalize<Greetingv>",
          "dts2cpp_compat_combo_0046_compat176_uncapitalize_greetingv field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0046_compat176_uncapitalize_greetingv execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_COMPAT176_X_UNCAPITALIZE_GREETINGX
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_COMPAT176_X_UNCAPITALIZE_GREETINGX
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Uncapitalize<Greetingx>; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0047_compat176_x_uncapitalize_greetingx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat176.ts', `type Compat176 = { x: Uncapitalize<Greetingx>; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0047_compat176_x_uncapitalize_greetingx parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0047_compat176_x_uncapitalize_greetingx convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0047_compat176_x_uncapitalize_greetingx must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Uncapitalize<Greetingx>; }",
          "dts2cpp_compat_combo_0047_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0047_compat176_x_uncapitalize_greetingx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_UNCAPITALIZE_GREETINGZ
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_UNCAPITALIZE_GREETINGZ
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uncapitalize<GreetingZ>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0048_uncapitalize_greetingz', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat176.ts', `function compat176(a: Uncapitalize<GreetingZ>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0048_uncapitalize_greetingz parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0048_uncapitalize_greetingz convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0048_uncapitalize_greetingz must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0048_uncapitalize_greetingz must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uncapitalize<GreetingZ>",
          "dts2cpp_compat_combo_0048_uncapitalize_greetingz param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0048_uncapitalize_greetingz execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_DATE_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_DATE_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Date_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0049_date_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat189.ts', `function compat189(a: Date_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0049_date_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0049_date_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0049_date_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0049_date_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Date_n",
          "dts2cpp_compat_combo_0049_date_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0049_date_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_DATE_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_DATE_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Date_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0050_date_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat189.ts', `function compat189(a: Date_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0050_date_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0050_date_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0050_date_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0050_date_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Date_s",
          "dts2cpp_compat_combo_0050_date_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0050_date_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_DATE_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_DATE_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Date_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0051_date_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat189.ts', `function compat189(a: Date_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0051_date_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0051_date_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0051_date_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0051_date_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Date_b",
          "dts2cpp_compat_combo_0051_date_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0051_date_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_DAT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_DAT
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Dat; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0052_dat', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat189.ts', `function compat189(a: Dat): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0052_dat parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0052_dat convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0052_dat must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0052_dat must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Dat", "dts2cpp_compat_combo_0052_dat param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0052_dat execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_BADTYPE189_DATE
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_BADTYPE189_DATE
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType189_Date); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0053_badtype189_date', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat189.ts', `function compat189(a: BadType189_Date): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0053_badtype189_date parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0053_badtype189_date convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0053_badtype189_date must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0053_badtype189_date must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType189_Date",
          "dts2cpp_compat_combo_0053_badtype189_date param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0053_badtype189_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_DATE_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_DATE_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Date_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0054_date_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat189.ts', `function compat189(a: Date_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0054_date_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0054_date_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0054_date_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0054_date_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Date_any",
          "dts2cpp_compat_combo_0054_date_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0054_date_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_COMPAT189_DATE_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_COMPAT189_DATE_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Date_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0055_compat189_date_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat189.ts', `class Compat189 { field: Date_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0055_compat189_date_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0055_compat189_date_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0055_compat189_date_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0055_compat189_date_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Date_v",
          "dts2cpp_compat_combo_0055_compat189_date_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0055_compat189_date_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_COMPAT189_X_DATE_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_COMPAT189_X_DATE_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Date_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0056_compat189_x_date_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat189.ts', `type Compat189 = { x: Date_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0056_compat189_x_date_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0056_compat189_x_date_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0056_compat189_x_date_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Date_x; }", "dts2cpp_compat_combo_0056_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0056_compat189_x_date_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_DATE_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_DATE_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Date_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0057_date_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat189.ts', `function compat189(a: Date_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0057_date_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0057_date_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0057_date_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0057_date_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Date_Z",
          "dts2cpp_compat_combo_0057_date_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0057_date_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_REGEXP_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_REGEXP_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type RegExp_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0058_regexp_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat190.ts', `function compat190(a: RegExp_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0058_regexp_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0058_regexp_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0058_regexp_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0058_regexp_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "RegExp_n",
          "dts2cpp_compat_combo_0058_regexp_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0058_regexp_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_REGEXP_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_REGEXP_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type RegExp_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0059_regexp_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat190.ts', `function compat190(a: RegExp_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0059_regexp_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0059_regexp_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0059_regexp_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0059_regexp_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "RegExp_s",
          "dts2cpp_compat_combo_0059_regexp_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0059_regexp_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_REGEXP_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_REGEXP_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type RegExp_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0060_regexp_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat190.ts', `function compat190(a: RegExp_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0060_regexp_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0060_regexp_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0060_regexp_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0060_regexp_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "RegExp_b",
          "dts2cpp_compat_combo_0060_regexp_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0060_regexp_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_REGEX
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_REGEX
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type RegEx; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0061_regex', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat190.ts', `function compat190(a: RegEx): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0061_regex parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0061_regex convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0061_regex must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0061_regex must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "RegEx",
          "dts2cpp_compat_combo_0061_regex param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0061_regex execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_BADTYPE190_REGEXP
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_BADTYPE190_REGEXP
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType190_RegExp); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0062_badtype190_regexp', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat190.ts', `function compat190(a: BadType190_RegExp): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0062_badtype190_regexp parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0062_badtype190_regexp convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0062_badtype190_regexp must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0062_badtype190_regexp must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType190_RegExp",
          "dts2cpp_compat_combo_0062_badtype190_regexp param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0062_badtype190_regexp execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_REGEXP_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_REGEXP_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type RegExp_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0063_regexp_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat190.ts', `function compat190(a: RegExp_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0063_regexp_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0063_regexp_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0063_regexp_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0063_regexp_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "RegExp_any",
          "dts2cpp_compat_combo_0063_regexp_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0063_regexp_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_COMPAT190_REGEXP_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_COMPAT190_REGEXP_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type RegExp_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0064_compat190_regexp_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat190.ts', `class Compat190 { field: RegExp_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0064_compat190_regexp_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0064_compat190_regexp_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0064_compat190_regexp_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0064_compat190_regexp_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "RegExp_v",
          "dts2cpp_compat_combo_0064_compat190_regexp_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0064_compat190_regexp_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_COMPAT190_X_REGEXP_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_COMPAT190_X_REGEXP_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member RegExp_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0065_compat190_x_regexp_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat190.ts', `type Compat190 = { x: RegExp_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0065_compat190_x_regexp_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0065_compat190_x_regexp_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0065_compat190_x_regexp_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: RegExp_x; }", "dts2cpp_compat_combo_0065_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0065_compat190_x_regexp_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0066_REGEXP_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0066_REGEXP_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type RegExp_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0066_regexp_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat190.ts', `function compat190(a: RegExp_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0066_regexp_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0066_regexp_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0066_regexp_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0066_regexp_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "RegExp_Z",
          "dts2cpp_compat_combo_0066_regexp_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0066_regexp_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_UINT8ARRAY_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_UINT8ARRAY_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uint8Array_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0011_uint8array_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat192.ts', `function compat192(a: Uint8Array_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0011_uint8array_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0011_uint8array_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0011_uint8array_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0011_uint8array_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint8Array_s",
          "dts2cpp_compat_combo_0011_uint8array_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0011_uint8array_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_UINT8ARRAY_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_UINT8ARRAY_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uint8Array_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0012_uint8array_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat192.ts', `function compat192(a: Uint8Array_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0012_uint8array_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0012_uint8array_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0012_uint8array_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0012_uint8array_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint8Array_b",
          "dts2cpp_compat_combo_0012_uint8array_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0012_uint8array_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_UINT8ARRA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_UINT8ARRA
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uint8Arra; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0013_uint8arra', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat192.ts', `function compat192(a: Uint8Arra): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0013_uint8arra parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0013_uint8arra convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0013_uint8arra must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0013_uint8arra must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint8Arra",
          "dts2cpp_compat_combo_0013_uint8arra param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0013_uint8arra execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_BADTYPE192_UINT8ARRAY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_BADTYPE192_UINT8ARRAY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType192_Uint8Array); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0014_badtype192_uint8array', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat192.ts', `function compat192(a: BadType192_Uint8Array): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0014_badtype192_uint8array parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0014_badtype192_uint8array convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0014_badtype192_uint8array must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0014_badtype192_uint8array must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType192_Uint8Array",
          "dts2cpp_compat_combo_0014_badtype192_uint8array param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0014_badtype192_uint8array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_UINT8ARRAY_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_UINT8ARRAY_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uint8Array_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0015_uint8array_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat192.ts', `function compat192(a: Uint8Array_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0015_uint8array_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0015_uint8array_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0015_uint8array_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0015_uint8array_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint8Array_any",
          "dts2cpp_compat_combo_0015_uint8array_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0015_uint8array_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_COMPAT192_UINT8ARRAY_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_COMPAT192_UINT8ARRAY_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Uint8Array_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0016_compat192_uint8array_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat192.ts', `class Compat192 { field: Uint8Array_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0016_compat192_uint8array_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0016_compat192_uint8array_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0016_compat192_uint8array_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0016_compat192_uint8array_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint8Array_v",
          "dts2cpp_compat_combo_0016_compat192_uint8array_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0016_compat192_uint8array_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_COMPAT192_X_UINT8ARRAY_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_COMPAT192_X_UINT8ARRAY_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Uint8Array_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0017_compat192_x_uint8array_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat192.ts', `type Compat192 = { x: Uint8Array_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0017_compat192_x_uint8array_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0017_compat192_x_uint8array_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0017_compat192_x_uint8array_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Uint8Array_x; }", "dts2cpp_compat_combo_0017_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0017_compat192_x_uint8array_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_UINT8ARRAY_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_UINT8ARRAY_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uint8Array_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0018_uint8array_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat192.ts', `function compat192(a: Uint8Array_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0018_uint8array_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0018_uint8array_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0018_uint8array_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0018_uint8array_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint8Array_Z",
          "dts2cpp_compat_combo_0018_uint8array_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0018_uint8array_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_ARRAYBUFFER_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_ARRAYBUFFER_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type ArrayBuffer_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0019_arraybuffer_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat193.ts', `function compat193(a: ArrayBuffer_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0019_arraybuffer_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0019_arraybuffer_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0019_arraybuffer_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0019_arraybuffer_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "ArrayBuffer_n",
          "dts2cpp_compat_combo_0019_arraybuffer_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0019_arraybuffer_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_ARRAYBUFFER_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_ARRAYBUFFER_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type ArrayBuffer_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0020_arraybuffer_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat193.ts', `function compat193(a: ArrayBuffer_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0020_arraybuffer_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0020_arraybuffer_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0020_arraybuffer_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0020_arraybuffer_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "ArrayBuffer_s",
          "dts2cpp_compat_combo_0020_arraybuffer_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0020_arraybuffer_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_ARRAYBUFFER_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_ARRAYBUFFER_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type ArrayBuffer_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0021_arraybuffer_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat193.ts', `function compat193(a: ArrayBuffer_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0021_arraybuffer_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0021_arraybuffer_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0021_arraybuffer_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0021_arraybuffer_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "ArrayBuffer_b",
          "dts2cpp_compat_combo_0021_arraybuffer_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0021_arraybuffer_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_ARRAYBUFFE
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_ARRAYBUFFE
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type ArrayBuffe; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0022_arraybuffe', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat193.ts', `function compat193(a: ArrayBuffe): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0022_arraybuffe parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0022_arraybuffe convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0022_arraybuffe must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0022_arraybuffe must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "ArrayBuffe",
          "dts2cpp_compat_combo_0022_arraybuffe param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0022_arraybuffe execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_BADTYPE193_ARRAYBUFFER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_BADTYPE193_ARRAYBUFFER
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType193_ArrayBuffer); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0023_badtype193_arraybuffer', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat193.ts', `function compat193(a: BadType193_ArrayBuffer): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0023_badtype193_arraybuffer parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0023_badtype193_arraybuffer convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0023_badtype193_arraybuffer must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0023_badtype193_arraybuffer must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType193_ArrayBuffer",
          "dts2cpp_compat_combo_0023_badtype193_arraybuffer param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0023_badtype193_arraybuffer execution error: ${err}`);
    }
  });
});
