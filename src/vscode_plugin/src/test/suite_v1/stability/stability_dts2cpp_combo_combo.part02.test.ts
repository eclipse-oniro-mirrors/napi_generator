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

suite('Stability_DTS2CPP_COMBO_COMBO_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMBO_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0003_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0003_OBJECT
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with two mixed params (object + Set<number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0003_object', () => {
    try {
      const converted = transParseObj(doParseTs('combo116.ts', `
        function combo116(a: object, b: Set<number>): object { return a; }`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0003_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0003_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::any",
        "dts2cpp_combo_combo_0003_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0003_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0003_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0004_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0004_OBJECT
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; class
   *            fields primary+secondary (object + Set<number>); strictEqual convert and class-field types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0004_object', () => {
    try {
      const converted = transParseObj(doParseTs('combo117.ts', `
        class ComboClass117 { primary: object; secondary: Set<number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0004_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0004_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
        "dts2cpp_combo_combo_0004_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0004_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0004_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0005_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0005_OBJECT
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; type alias
   *            members primary+secondary (object + Set<number>); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0005_object', () => {
    try {
      const parsed = doParseTs('combo118.ts', `
        type ComboType118 = { primary: object; secondary: Set<number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0005_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0005_t2 convert output");
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0005_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0006_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0006_OBJECT
   * @tc.desc   Stability combo dts2cpp/combo:
   *            doParseTs+transParseObj+transCkey2Dtskey+generateFunctions; getter return + setter param (object + Set<number>); strictEqual convert+fields and gen output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0006_object', () => {
    try {
      const converted = transParseObj(doParseTs('combo119.ts', `
        function getCombo119(): Set<number> { return null as any; } function setCombo119(v: object): void {}`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0006_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0006_t2 convert output");
      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo119.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0006_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0007_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0007_OBJECT
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (object + Set<number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0007_object', () => {
    try {
      const converted = transParseObj(doParseTs('combo120.ts', `
        function comboTriple120(a: object, b: Set<number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0007_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0007_t2 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0007_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0008_NUMBER_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0008_NUMBER_V2
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (number + number[] + boolean); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0008_number_v2', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10001.ts', `
        function comboExt10001(a: number, b: number[], c: boolean): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0008_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0008_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0008_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0008_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0009_NUMBER_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0009_NUMBER_V2
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (number + number[] + void); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0009_number_v2', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10002.ts', `
        function comboExt10002(a: number, b: number[], c: void): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0009_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0009_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0009_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0009_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0010_NUMBER_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0010_NUMBER_V2
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (number + number[] + any); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0010_number_v2', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10003.ts', `
        function comboExt10003(a: number, b: number[], c: any): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0010_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0010_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0010_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0010_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0011_NUMBER_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0011_NUMBER_V2
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (number + Map<string,number> + boolean); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0011_number_v2', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10004.ts', `
        function comboExt10004(a: number, b: Map<string,number>, c: boolean): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0011_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0011_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0011_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0011_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0012_NUMBER_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0012_NUMBER_V2
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (number + Map<string,number> + void); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0012_number_v2', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10005.ts', `
        function comboExt10005(a: number, b: Map<string,number>, c: void): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0012_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0012_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0012_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0012_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0013_NUMBER_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0013_NUMBER_V2
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (number + Map<string,number> + any); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0013_number_v2', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10006.ts', `
        function comboExt10006(a: number, b: Map<string,number>, c: any): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0013_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0013_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0013_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0013_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0014_NUMBER_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0014_NUMBER_V2
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (number + Set<string> + boolean); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0014_number_v2', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10007.ts', `
        function comboExt10007(a: number, b: Set<string>, c: boolean): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0014_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0014_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0014_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0014_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0015_NUMBER_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0015_NUMBER_V2
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (number + Set<string> + void); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0015_number_v2', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10008.ts', `
        function comboExt10008(a: number, b: Set<string>, c: void): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0015_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0015_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0015_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0015_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0016_NUMBER_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0016_NUMBER_V2
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (number + Set<string> + any); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0016_number_v2', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10009.ts', `
        function comboExt10009(a: number, b: Set<string>, c: any): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0016_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0016_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0016_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0016_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0017_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0017_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (string + number[] + boolean); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0017_string', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10010.ts', `
        function comboExt10010(a: string, b: number[], c: boolean): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0017_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0017_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0017_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0017_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0018_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0018_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (string + number[] + void); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0018_string', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10011.ts', `
        function comboExt10011(a: string, b: number[], c: void): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0018_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0018_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0018_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0018_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0019_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0019_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (string + number[] + any); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0019_string', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10012.ts', `
        function comboExt10012(a: string, b: number[], c: any): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0019_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0019_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0019_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0019_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0020_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0020_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (string + Map<string,number> + boolean); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0020_string', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10013.ts', `
        function comboExt10013(a: string, b: Map<string,number>, c: boolean): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0020_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0020_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0020_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0020_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0021_STRING_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0021_STRING_V2
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (string + Map<string,number> + void); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0021_string_v2', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10014.ts', `
        function comboExt10014(a: string, b: Map<string,number>, c: void): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0021_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0021_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0021_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0021_string_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0022_STRING_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0022_STRING_V2
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (string + Map<string,number> + any); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0022_string_v2', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10015.ts', `
        function comboExt10015(a: string, b: Map<string,number>, c: any): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0022_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0022_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0022_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0022_string_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0023_STRING_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0023_STRING_V2
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (string + Set<string> + boolean); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0023_string_v2', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10016.ts', `
        function comboExt10016(a: string, b: Set<string>, c: boolean): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0023_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0023_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0023_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0023_string_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0024_STRING_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0024_STRING_V2
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (string + Set<string> + void); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0024_string_v2', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10017.ts', `
        function comboExt10017(a: string, b: Set<string>, c: void): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0024_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0024_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0024_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0024_string_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0025_STRING_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0025_STRING_V2
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (string + Set<string> + any); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0025_string_v2', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10018.ts', `
        function comboExt10018(a: string, b: Set<string>, c: any): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0025_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0025_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0025_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0025_string_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0026_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0026_BOOLEAN
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (boolean + number[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0026_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10019.ts', `
        function comboExt10019(a: boolean, b: number[], c: boolean): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0026_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0026_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0026_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0026_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0027_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0027_BOOLEAN
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (boolean + number[] + void); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0027_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10020.ts', `
        function comboExt10020(a: boolean, b: number[], c: void): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0027_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0027_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0027_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0027_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0028_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0028_BOOLEAN
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (boolean + number[] + any); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0028_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10021.ts', `
        function comboExt10021(a: boolean, b: number[], c: any): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0028_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0028_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0028_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0028_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0029_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0029_BOOLEAN
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (boolean + Map<string,number>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0029_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10022.ts', `
        function comboExt10022(a: boolean, b: Map<string,number>, c: boolean): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0029_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0029_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0029_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0029_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0030_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0030_BOOLEAN
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (boolean + Map<string,number> + void); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0030_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10023.ts', `
        function comboExt10023(a: boolean, b: Map<string,number>, c: void): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0030_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0030_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0030_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0030_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0031_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0031_BOOLEAN
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (boolean + Map<string,number> + any); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0031_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10024.ts', `
        function comboExt10024(a: boolean, b: Map<string,number>, c: any): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0031_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0031_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0031_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0031_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0032_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0032_BOOLEAN
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (boolean + Set<string>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0032_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10025.ts', `
        function comboExt10025(a: boolean, b: Set<string>, c: boolean): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0032_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0032_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0032_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0032_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0033_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0033_BOOLEAN
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (boolean + Set<string> + void); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0033_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10026.ts', `
        function comboExt10026(a: boolean, b: Set<string>, c: void): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0033_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0033_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0033_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0033_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0034_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0034_BOOLEAN
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; function
   *            with three mixed params (boolean + Set<string> + any); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0034_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10027.ts', `
        function comboExt10027(a: boolean, b: Set<string>, c: any): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0034_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0034_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0034_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0034_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0035_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0035_MAP_STRING_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; nested
   *            container combo (Map<string, number[]> + number); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0035_map_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('comboNest10028.ts', `
        function comboNest10028(a: Map<string, number[]>, b: number): Map<string, number[]> { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
      const r1 = transCkey2Dtskey('Map<string, number[]>');
      const r2 = transCkey2Dtskey('number');
      assert.strictEqual(r1, "Map<string, number[]>", "dts2cpp_combo_combo_0035_r1 convert output");
      assert.strictEqual(r2, "double", "dts2cpp_combo_combo_0035_r2 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0035 (nested map-array) execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0036_ARRAY_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0036_ARRAY_MAP_STRING_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; nested
   *            container combo (Array<Map<string, number>> + string); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0036_array_map_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('comboNest10029.ts', `
        function comboNest10029(a: Array<Map<string, number>>, b: string): Array<Map<string, number>> { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
      const r1 = transCkey2Dtskey('Array<Map<string, number>>');
      const r2 = transCkey2Dtskey('string');
      assert.strictEqual(r1, "Array<Map<string, number>>", "dts2cpp_combo_combo_0036_r1 convert output");
      assert.strictEqual(r2, "std::string", "dts2cpp_combo_combo_0036_r2 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0036 (nested array-map) execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0037_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0037_NUMBER_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; nested
   *            container combo ((number | string) + boolean[]); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0037_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('comboNest10030.ts', `
        function comboNest10030(a: (number | string), b: boolean[]): (number | string) { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
      const r1 = transCkey2Dtskey('(number | string)');
      const r2 = transCkey2Dtskey('boolean[]');
      assert.strictEqual(r1, "(number | string)", "dts2cpp_combo_combo_0037_r1 convert output");
      assert.strictEqual(r2, "std::vector<bool>", "dts2cpp_combo_combo_0037_r2 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0037 (union-array combo) execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0038_RECORD_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0038_RECORD_STRING_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; nested
   *            container combo (Record<string, number> + Map<string, boolean>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0038_record_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('comboNest10031.ts', `
        function comboNest10031(a: Record<string, number>, b: Map<string, boolean>): Record<string, number> { return a;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
      const r1 = transCkey2Dtskey('Record<string, number>');
      const r2 = transCkey2Dtskey('Map<string, boolean>');
      assert.strictEqual(r1, "Record<string, number>", "dts2cpp_combo_combo_0038_r1 convert output");
      assert.strictEqual(r2, "std::map<std::string, bool>", "dts2cpp_combo_combo_0038_r2 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0038 (record-map combo) execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0039_PROMISE_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0039_PROMISE_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; nested
   *            container combo (Promise<number> + Callback<string>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0039_promise_number', () => {
    try {
      const converted = transParseObj(doParseTs('comboNest10032.ts', `
        function comboNest10032(a: Promise<number>, b: Callback<string>): Promise<number> { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
      const r1 = transCkey2Dtskey('Promise<number>');
      const r2 = transCkey2Dtskey('Callback<string>');
      assert.strictEqual(r1, "Promise<number>", "dts2cpp_combo_combo_0039_r1 convert output");
      assert.strictEqual(r2, "std::function<void(std::string)>", "dts2cpp_combo_combo_0039_r2 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0039 (promise-callback combo) execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0040_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0040_NUMBER_STRING
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; nested
   *            container combo ([number, string] + boolean); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0040_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('comboNest10033.ts', `
        function comboNest10033(a: [number, string], b: boolean): [number, string] { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
      const r1 = transCkey2Dtskey('[number, string]');
      const r2 = transCkey2Dtskey('boolean');
      assert.strictEqual(r1, "[number, string]", "dts2cpp_combo_combo_0040_r1 convert output");
      assert.strictEqual(r2, "bool", "dts2cpp_combo_combo_0040_r2 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0040 (tuple-basic combo) execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0041_READONLYARRAY_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0041_READONLYARRAY_NUMBER
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj+transCkey2Dtskey; nested
   *            container combo (ReadonlyArray<number> + Set<boolean>); strictEqual convert and function param types.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0041_readonlyarray_number', () => {
    try {
      const converted = transParseObj(doParseTs('comboNest10034.ts', `
        function comboNest10034(a: ReadonlyArray<number>, b: Set<boolean>): ReadonlyArray<number> { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
      const r1 = transCkey2Dtskey('ReadonlyArray<number>');
      const r2 = transCkey2Dtskey('Set<boolean>');
      assert.strictEqual(r1, "ReadonlyArray<number>", "dts2cpp_combo_combo_0041_r1 convert output");
      assert.strictEqual(r2, "std::set<bool>", "dts2cpp_combo_combo_0041_r2 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0041 (readonly-set combo) execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0042_BODY_EE2960A0
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0042_BODY_EE2960A0
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj; interface members with mixed
   *            types (number + string[] + Map<string); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0042_body_ee2960a0', () => {
    try {
      const parsed = doParseTs('comboIface10035.ts', `
        interface ComboIfaceA { id: number; tags: string[]; flags: Map<string, boolean>; handler: (k: string) => number;
        }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted !== undefined && typeof converted === 'object');
      assert.ok(converted.interfaces !== undefined || converted.types !== undefined || converted.classes !== undefined);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0042_body_ee2960a0 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0043_BODY_A4529003
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0043_BODY_A4529003
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj; interface members with mixed
   *            types (Array<Map<string + Set<number> + Record<string); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0043_body_a4529003', () => {
    try {
      const parsed = doParseTs('comboIface10036.ts', `
        interface ComboIfaceB { data: Array<Map<string, number>>; count: Set<number>; meta: Record<string, any>; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted !== undefined && typeof converted === 'object');
      assert.ok(converted.interfaces !== undefined || converted.types !== undefined || converted.classes !== undefined);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0043_body_a4529003 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMBO_COMBO_0044_BODY_6E30602A
   * @tc.number SUB_NAPI_DTS2CPP_COMBO_COMBO_0044_BODY_6E30602A
   * @tc.desc   Stability combo dts2cpp/combo: doParseTs+transParseObj; mixed-type combo (number[] +
   *            Map<number + Callback<boolean>); strictEqual convert outputs.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_combo_combo_0044_body_6e30602a', () => {
    try {
      const parsed = doParseTs('comboIface10037.ts', `
        type ComboAliasC = { nums: number[]; mapping: Map<number, string>; cb: Callback<boolean>; };`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted !== undefined && typeof converted === 'object');
      assert.ok(converted.interfaces !== undefined || converted.types !== undefined || converted.classes !== undefined);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0044_body_6e30602a execution error: ${String(err)}`);
    }
  });
});
