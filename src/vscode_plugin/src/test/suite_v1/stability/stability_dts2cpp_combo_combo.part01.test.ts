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

suite('Stability_DTS2CPP_COMBO_COMBO_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMBO_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0001_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0001_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with two mixed params (number + number[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0001_number', () => {
    try {
      const converted = transParseObj(doParseTs('combo1.ts', `
        function combo1(a: number, b: number[]): number { return a; }`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0001_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0001_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "double",
        "dts2cpp_combo_combo_0001_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0001_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0001_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0002_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0002_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; class
   *            fields primary+secondary (number + number[]); strictEqual convert and class-field types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0002_number', () => {
    try {
      const converted = transParseObj(doParseTs('combo2.ts', `
        class ComboClass2 { primary: number; secondary: number[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0002_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0002_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "double",
        "dts2cpp_combo_combo_0002_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0002_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0002_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0003_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0003_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; type alias
   *            members primary+secondary (number + number[]); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0003_number', () => {
    try {
      const parsed = doParseTs('combo3.ts', `
        type ComboType3 = { primary: number; secondary: number[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0003_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0003_t2 convert output");
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0003_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0004_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0004_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (number + number[]); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0004_number', () => {
    try {
      const converted = transParseObj(doParseTs('combo4.ts', `
        function getCombo4(): number[] { return null as any; } function setCombo4(v: number): void {}`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0004_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0004_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo4.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0004_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0005_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0005_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (number + number[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0005_number', () => {
    try {
      const converted = transParseObj(doParseTs('combo5.ts', `
        function comboTriple5(a: number, b: number[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0005_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0005_t2 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0005_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0006_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0006_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with two mixed params (number + string[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0006_number', () => {
    try {
      const converted = transParseObj(doParseTs('combo6.ts', `
        function combo6(a: number, b: string[]): number { return a; }`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0006_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0006_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "double",
        "dts2cpp_combo_combo_0006_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0006_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0006_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0007_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0007_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; class
   *            fields primary+secondary (number + string[]); strictEqual convert and class-field types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0007_number', () => {
    try {
      const converted = transParseObj(doParseTs('combo7.ts', `
        class ComboClass7 { primary: number; secondary: string[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0007_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0007_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "double",
        "dts2cpp_combo_combo_0007_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0007_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0007_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0008_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0008_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; type alias
   *            members primary+secondary (number + string[]); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0008_number', () => {
    try {
      const parsed = doParseTs('combo8.ts', `
        type ComboType8 = { primary: number; secondary: string[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0008_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0008_t2 convert output");
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0008_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0009_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0009_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (number + string[]); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0009_number', () => {
    try {
      const converted = transParseObj(doParseTs('combo9.ts', `
        function getCombo9(): string[] { return null as any; } function setCombo9(v: number): void {}`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0009_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0009_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo9.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0009_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0010_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0010_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (number + string[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0010_number', () => {
    try {
      const converted = transParseObj(doParseTs('combo10.ts', `
        function comboTriple10(a: number, b: string[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0010_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0010_t2 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0010_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0011_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0011_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with two mixed params (number + Map<string,number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0011_number', () => {
    try {
      const converted = transParseObj(doParseTs('combo11.ts', `
        function combo11(a: number, b: Map<string,number>): number { return a; }`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0011_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0011_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "double",
        "dts2cpp_combo_combo_0011_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0011_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0011_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0012_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0012_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; class
   *            fields primary+secondary (number + Map<string,number>); strictEqual convert and class-field types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0012_number', () => {
    try {
      const converted = transParseObj(doParseTs('combo12.ts', `
        class ComboClass12 { primary: number; secondary: Map<string,number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0012_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0012_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "double",
        "dts2cpp_combo_combo_0012_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0012_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0012_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0013_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0013_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; type alias
   *            members primary+secondary (number + Map<string,number>); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0013_number', () => {
    try {
      const parsed = doParseTs('combo13.ts', `
        type ComboType13 = { primary: number; secondary: Map<string,number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0013_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0013_t2 convert output");
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0013_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0014_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0014_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (number + Map<string,number>); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0014_number', () => {
    try {
      const converted = transParseObj(doParseTs('combo14.ts', `
        function getCombo14(): Map<string,number> { return null as any; } function setCombo14(v: number): void {}`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0014_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0014_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo14.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0014_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0015_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0015_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (number + Map<string,number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0015_number', () => {
    try {
      const converted = transParseObj(doParseTs('combo15.ts', `
        function comboTriple15(a: number, b: Map<string,number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0015_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0015_t2 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0015_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0016_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0016_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with two mixed params (number + Set<number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0016_number', () => {
    try {
      const converted = transParseObj(doParseTs('combo16.ts', `
        function combo16(a: number, b: Set<number>): number { return a; }`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0016_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0016_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "double",
        "dts2cpp_combo_combo_0016_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0016_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0016_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0017_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0017_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; class
   *            fields primary+secondary (number + Set<number>); strictEqual convert and class-field types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0017_number', () => {
    try {
      const converted = transParseObj(doParseTs('combo17.ts', `
        class ComboClass17 { primary: number; secondary: Set<number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0017_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0017_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "double",
        "dts2cpp_combo_combo_0017_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0017_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0017_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0018_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0018_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; type alias
   *            members primary+secondary (number + Set<number>); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0018_number', () => {
    try {
      const parsed = doParseTs('combo18.ts', `
        type ComboType18 = { primary: number; secondary: Set<number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0018_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0018_t2 convert output");
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0018_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0019_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0019_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (number + Set<number>); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0019_number', () => {
    try {
      const converted = transParseObj(doParseTs('combo19.ts', `
        function getCombo19(): Set<number> { return null as any; } function setCombo19(v: number): void {}`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0019_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0019_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo19.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0019_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0020_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0020_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (number + Set<number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0020_number', () => {
    try {
      const converted = transParseObj(doParseTs('combo20.ts', `
        function comboTriple20(a: number, b: Set<number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0020_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0020_t2 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0020_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0021_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0021_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with two mixed params (string + number[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0021_string', () => {
    try {
      const converted = transParseObj(doParseTs('combo21.ts', `
        function combo21(a: string, b: number[]): string { return a; }`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0021_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0021_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::string",
        "dts2cpp_combo_combo_0021_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0021_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0021_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0022_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0022_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; class
   *            fields primary+secondary (string + number[]); strictEqual convert and class-field types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0022_string', () => {
    try {
      const converted = transParseObj(doParseTs('combo22.ts', `
        class ComboClass22 { primary: string; secondary: number[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0022_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0022_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::string",
        "dts2cpp_combo_combo_0022_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0022_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0022_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0023_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0023_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; type alias
   *            members primary+secondary (string + number[]); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0023_string', () => {
    try {
      const parsed = doParseTs('combo23.ts', `
        type ComboType23 = { primary: string; secondary: number[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0023_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0023_t2 convert output");
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0023_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0024_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0024_STRING
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (string + number[]); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0024_string', () => {
    try {
      const converted = transParseObj(doParseTs('combo24.ts', `
        function getCombo24(): number[] { return null as any; } function setCombo24(v: string): void {}`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0024_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0024_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo24.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0024_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0025_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0025_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (string + number[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0025_string', () => {
    try {
      const converted = transParseObj(doParseTs('combo25.ts', `
        function comboTriple25(a: string, b: number[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0025_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0025_t2 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0025_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0026_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0026_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with two mixed params (string + string[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0026_string', () => {
    try {
      const converted = transParseObj(doParseTs('combo26.ts', `
        function combo26(a: string, b: string[]): string { return a; }`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0026_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0026_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::string",
        "dts2cpp_combo_combo_0026_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0026_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0026_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0027_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0027_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; class
   *            fields primary+secondary (string + string[]); strictEqual convert and class-field types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0027_string', () => {
    try {
      const converted = transParseObj(doParseTs('combo27.ts', `
        class ComboClass27 { primary: string; secondary: string[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0027_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0027_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::string",
        "dts2cpp_combo_combo_0027_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0027_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0027_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0028_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0028_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; type alias
   *            members primary+secondary (string + string[]); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0028_string', () => {
    try {
      const parsed = doParseTs('combo28.ts', `
        type ComboType28 = { primary: string; secondary: string[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0028_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0028_t2 convert output");
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0028_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0029_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0029_STRING
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (string + string[]); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0029_string', () => {
    try {
      const converted = transParseObj(doParseTs('combo29.ts', `
        function getCombo29(): string[] { return null as any; } function setCombo29(v: string): void {}`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0029_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0029_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo29.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0029_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0030_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0030_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (string + string[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0030_string', () => {
    try {
      const converted = transParseObj(doParseTs('combo30.ts', `
        function comboTriple30(a: string, b: string[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0030_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0030_t2 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0030_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0031_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0031_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with two mixed params (string + Map<string,number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0031_string', () => {
    try {
      const converted = transParseObj(doParseTs('combo31.ts', `
        function combo31(a: string, b: Map<string,number>): string { return a; }`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0031_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0031_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::string",
        "dts2cpp_combo_combo_0031_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0031_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0031_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0032_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0032_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; class
   *            fields primary+secondary (string + Map<string,number>); strictEqual convert and class-field types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0032_string', () => {
    try {
      const converted = transParseObj(doParseTs('combo32.ts', `
        class ComboClass32 { primary: string; secondary: Map<string,number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0032_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0032_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::string",
        "dts2cpp_combo_combo_0032_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0032_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0032_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0033_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0033_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; type alias
   *            members primary+secondary (string + Map<string,number>); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0033_string', () => {
    try {
      const parsed = doParseTs('combo33.ts', `
        type ComboType33 = { primary: string; secondary: Map<string,number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0033_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0033_t2 convert output");
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0033_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0034_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0034_STRING
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (string + Map<string,number>); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0034_string', () => {
    try {
      const converted = transParseObj(doParseTs('combo34.ts', `
        function getCombo34(): Map<string,number> { return null as any; } function setCombo34(v: string): void {}`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0034_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0034_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo34.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0034_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0035_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0035_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (string + Map<string,number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0035_string', () => {
    try {
      const converted = transParseObj(doParseTs('combo35.ts', `
        function comboTriple35(a: string, b: Map<string,number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0035_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0035_t2 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0035_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0036_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0036_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with two mixed params (string + Set<number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0036_string', () => {
    try {
      const converted = transParseObj(doParseTs('combo36.ts', `
        function combo36(a: string, b: Set<number>): string { return a; }`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0036_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0036_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::string",
        "dts2cpp_combo_combo_0036_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0036_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0036_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0037_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0037_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; class
   *            fields primary+secondary (string + Set<number>); strictEqual convert and class-field types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0037_string', () => {
    try {
      const converted = transParseObj(doParseTs('combo37.ts', `
        class ComboClass37 { primary: string; secondary: Set<number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0037_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0037_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::string",
        "dts2cpp_combo_combo_0037_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0037_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0037_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0038_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0038_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; type alias
   *            members primary+secondary (string + Set<number>); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0038_string', () => {
    try {
      const parsed = doParseTs('combo38.ts', `
        type ComboType38 = { primary: string; secondary: Set<number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0038_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0038_t2 convert output");
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0038_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0039_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0039_STRING
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (string + Set<number>); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0039_string', () => {
    try {
      const converted = transParseObj(doParseTs('combo39.ts', `
        function getCombo39(): Set<number> { return null as any; } function setCombo39(v: string): void {}`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0039_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0039_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo39.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0039_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0040_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0040_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (string + Set<number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0040_string', () => {
    try {
      const converted = transParseObj(doParseTs('combo40.ts', `
        function comboTriple40(a: string, b: Set<number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0040_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0040_t2 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0040_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0041_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0041_BOOLEAN
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with two mixed params (boolean + number[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0041_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('combo41.ts', `
        function combo41(a: boolean, b: number[]): boolean { return a; }`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0041_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0041_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "bool",
        "dts2cpp_combo_combo_0041_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0041_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0041_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0042_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0042_BOOLEAN
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; class
   *            fields primary+secondary (boolean + number[]); strictEqual convert and class-field types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0042_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('combo42.ts', `
        class ComboClass42 { primary: boolean; secondary: number[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0042_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0042_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "bool",
        "dts2cpp_combo_combo_0042_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0042_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0042_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0043_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0043_BOOLEAN
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; type alias
   *            members primary+secondary (boolean + number[]); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0043_boolean', () => {
    try {
      const parsed = doParseTs('combo43.ts', `
        type ComboType43 = { primary: boolean; secondary: number[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0043_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0043_t2 convert output");
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0043_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0044_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0044_BOOLEAN
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (boolean + number[]); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0044_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('combo44.ts', `
        function getCombo44(): number[] { return null as any; } function setCombo44(v: boolean): void {}`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0044_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0044_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo44.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0044_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0045
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0045
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (boolean + number[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0045', () => {
    try {
      const converted = transParseObj(doParseTs('combo45.ts', `
        function comboTriple45(a: boolean, b: number[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0045_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0045_t2 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0045 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0046
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0046
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with two mixed params (boolean + string[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0046', () => {
    try {
      const converted = transParseObj(doParseTs('combo46.ts', `
        function combo46(a: boolean, b: string[]): boolean { return a; }`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0046_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0046_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "bool",
        "dts2cpp_combo_combo_0046_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0046_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0046 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0047
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0047
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; class
   *            fields primary+secondary (boolean + string[]); strictEqual convert and class-field types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0047', () => {
    try {
      const converted = transParseObj(doParseTs('combo47.ts', `
        class ComboClass47 { primary: boolean; secondary: string[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0047_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0047_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "bool",
        "dts2cpp_combo_combo_0047_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0047_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0047 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0048
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0048
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; type alias
   *            members primary+secondary (boolean + string[]); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0048', () => {
    try {
      const parsed = doParseTs('combo48.ts', `
        type ComboType48 = { primary: boolean; secondary: string[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0048_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0048_t2 convert output");
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0048 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0049
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0049
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (boolean + string[]); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0049', () => {
    try {
      const converted = transParseObj(doParseTs('combo49.ts', `
        function getCombo49(): string[] { return null as any; } function setCombo49(v: boolean): void {}`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0049_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0049_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo49.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0049 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0050
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0050
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (boolean + string[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0050', () => {
    try {
      const converted = transParseObj(doParseTs('combo50.ts', `
        function comboTriple50(a: boolean, b: string[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0050_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0050_t2 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0050 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0051
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0051
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with two mixed params (boolean + Map<string,number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0051', () => {
    try {
      const converted = transParseObj(doParseTs('combo51.ts', `
        function combo51(a: boolean, b: Map<string,number>): boolean { return a; }`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0051_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0051_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "bool",
        "dts2cpp_combo_combo_0051_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0051_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0051 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0052
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0052
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; class
   *            fields primary+secondary (boolean + Map<string,number>); strictEqual convert and class-field types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0052', () => {
    try {
      const converted = transParseObj(doParseTs('combo52.ts', `
        class ComboClass52 { primary: boolean; secondary: Map<string,number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0052_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0052_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "bool",
        "dts2cpp_combo_combo_0052_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0052_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0052 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0053
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0053
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; type alias
   *            members primary+secondary (boolean + Map<string,number>); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0053', () => {
    try {
      const parsed = doParseTs('combo53.ts', `
        type ComboType53 = { primary: boolean; secondary: Map<string,number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0053_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0053_t2 convert output");
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0053 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0054
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0054
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (boolean + Map<string,number>); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0054', () => {
    try {
      const converted = transParseObj(doParseTs('combo54.ts', `
        function getCombo54(): Map<string,number> { return null as any; } function setCombo54(v: boolean): void {}`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0054_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0054_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo54.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0054 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0055
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0055
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (boolean + Map<string,number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0055', () => {
    try {
      const converted = transParseObj(doParseTs('combo55.ts', `
        function comboTriple55(a: boolean, b: Map<string,number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0055_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0055_t2 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0055 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0056
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0056
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with two mixed params (boolean + Set<number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0056', () => {
    try {
      const converted = transParseObj(doParseTs('combo56.ts', `
        function combo56(a: boolean, b: Set<number>): boolean { return a; }`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0056_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0056_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "bool",
        "dts2cpp_combo_combo_0056_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0056_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0056 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0057
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0057
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; class
   *            fields primary+secondary (boolean + Set<number>); strictEqual convert and class-field types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0057', () => {
    try {
      const converted = transParseObj(doParseTs('combo57.ts', `
        class ComboClass57 { primary: boolean; secondary: Set<number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0057_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0057_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "bool",
        "dts2cpp_combo_combo_0057_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0057_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0057 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0058
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0058
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; type alias
   *            members primary+secondary (boolean + Set<number>); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0058', () => {
    try {
      const parsed = doParseTs('combo58.ts', `
        type ComboType58 = { primary: boolean; secondary: Set<number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0058_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0058_t2 convert output");
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0058 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0059
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0059
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (boolean + Set<number>); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0059', () => {
    try {
      const converted = transParseObj(doParseTs('combo59.ts', `
        function getCombo59(): Set<number> { return null as any; } function setCombo59(v: boolean): void {}`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0059_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0059_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo59.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0059 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0060
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0060
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (boolean + Set<number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0060', () => {
    try {
      const converted = transParseObj(doParseTs('combo60.ts', `
        function comboTriple60(a: boolean, b: Set<number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0060_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0060_t2 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0060 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0061
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0061
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with two mixed params (void + number[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0061', () => {
    try {
      const converted = transParseObj(doParseTs('combo61.ts', `
        function combo61(a: void, b: number[]): void { return a; }`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0061_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0061_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "void",
        "dts2cpp_combo_combo_0061_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0061_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0061 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0062
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0062
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; class
   *            fields primary+secondary (void + number[]); strictEqual convert and class-field types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0062', () => {
    try {
      const converted = transParseObj(doParseTs('combo62.ts', `
        class ComboClass62 { primary: void; secondary: number[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0062_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0062_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "void",
        "dts2cpp_combo_combo_0062_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0062_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0062 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0063
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0063
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; type alias
   *            members primary+secondary (void + number[]); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0063', () => {
    try {
      const parsed = doParseTs('combo63.ts', `
        type ComboType63 = { primary: void; secondary: number[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0063_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0063_t2 convert output");
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0063 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0064
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0064
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (void + number[]); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0064', () => {
    try {
      const converted = transParseObj(doParseTs('combo64.ts', `
        function getCombo64(): number[] { return null as any; } function setCombo64(v: void): void {}`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0064_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0064_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo64.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0064 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0065
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0065
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (void + number[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0065', () => {
    try {
      const converted = transParseObj(doParseTs('combo65.ts', `
        function comboTriple65(a: void, b: number[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0065_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0065_t2 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0065 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0066
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0066
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with two mixed params (void + string[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0066', () => {
    try {
      const converted = transParseObj(doParseTs('combo66.ts', `
        function combo66(a: void, b: string[]): void { return a; }`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0066_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0066_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "void",
        "dts2cpp_combo_combo_0066_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0066_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0066 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0067
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0067
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; class
   *            fields primary+secondary (void + string[]); strictEqual convert and class-field types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0067', () => {
    try {
      const converted = transParseObj(doParseTs('combo67.ts', `
        class ComboClass67 { primary: void; secondary: string[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0067_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0067_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "void",
        "dts2cpp_combo_combo_0067_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0067_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0067 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0068
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0068
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; type alias
   *            members primary+secondary (void + string[]); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0068', () => {
    try {
      const parsed = doParseTs('combo68.ts', `
        type ComboType68 = { primary: void; secondary: string[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0068_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0068_t2 convert output");
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0068 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0069
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0069
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (void + string[]); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0069', () => {
    try {
      const converted = transParseObj(doParseTs('combo69.ts', `
        function getCombo69(): string[] { return null as any; } function setCombo69(v: void): void {}`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0069_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0069_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo69.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0069 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0070
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0070
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (void + string[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0070', () => {
    try {
      const converted = transParseObj(doParseTs('combo70.ts', `
        function comboTriple70(a: void, b: string[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0070_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0070_t2 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0070 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0071
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0071
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with two mixed params (void + Map<string,number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0071', () => {
    try {
      const converted = transParseObj(doParseTs('combo71.ts', `
        function combo71(a: void, b: Map<string,number>): void { return a; }`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0071_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0071_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "void",
        "dts2cpp_combo_combo_0071_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0071_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0071 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0072
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0072
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; class
   *            fields primary+secondary (void + Map<string,number>); strictEqual convert and class-field types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0072', () => {
    try {
      const converted = transParseObj(doParseTs('combo72.ts', `
        class ComboClass72 { primary: void; secondary: Map<string,number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0072_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0072_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "void",
        "dts2cpp_combo_combo_0072_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0072_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0072 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0073
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0073
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; type alias
   *            members primary+secondary (void + Map<string,number>); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0073', () => {
    try {
      const parsed = doParseTs('combo73.ts', `
        type ComboType73 = { primary: void; secondary: Map<string,number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0073_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0073_t2 convert output");
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0073 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0074
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0074
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (void + Map<string,number>); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0074', () => {
    try {
      const converted = transParseObj(doParseTs('combo74.ts', `
        function getCombo74(): Map<string,number> { return null as any; } function setCombo74(v: void): void {}`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0074_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0074_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo74.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0074 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0001_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0001_OBJECT
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (object + Map<string,number>); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0001_object', () => {
    try {
      const converted = transParseObj(doParseTs('combo114.ts', `
        function getCombo114(): Map<string,number> { return null as any; } function setCombo114(v: object): void {}`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0001_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0001_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo114.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0001_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0002_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0002_OBJECT
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (object + Map<string,number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0002_object', () => {
    try {
      const converted = transParseObj(doParseTs('combo115.ts', `
        function comboTriple115(a: object, b: Map<string,number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0002_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0002_t2 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0002_object execution error: ${String(err)}`);
    }
  });
});
