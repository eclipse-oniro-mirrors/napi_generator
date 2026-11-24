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
import { transParseObj, generateFunctions } from '../../../gen/gendtscpp';
import { doParseTs } from '../../../parse/parsets';
import { runCompatSafe } from './stability_helpers';

suite('Stability_H2DTSCPP_COMPAT_COMBO_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_TYPE_B_10_20_30
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_TYPE_B_10_20_30
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Type_b[10][20][30]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0057_type_b_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C155', alias: '',
            variableList: [{ type: 'Type_b[10][20][30]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0057_type_b_10_20_30 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0057_type_b_10_20_30 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0057_type_b_10_20_30 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Type_b[10][20][30]",
          "h2dtscpp_compat_combo_0057_type_b_10_20_30 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0057_type_b_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_TYPE_10_20_30
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_TYPE_10_20_30
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Type[10[20[30; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0058_type_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C155', alias: '',
            variableList: [{ type: 'Type[10[20[30', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0058_type_10_20_30 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0058_type_10_20_30 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0058_type_10_20_30 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Type[10[20[30",
          "h2dtscpp_compat_combo_0058_type_10_20_30 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0058_type_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_HELLO_WORLD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_HELLO_WORLD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type hello world"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0011_hello_world', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: 'hello world"', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0011_hello_world convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0011_hello_world must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0011_hello_world must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "hello world\"",
          "h2dtscpp_compat_combo_0011_hello_world field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0011_hello_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_HELLO_WORLD_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_HELLO_WORLD_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type "hello world_std"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0012_hello_world_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '"hello world_std"', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0012_hello_world_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0012_hello_world_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0012_hello_world_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "\"hello world_std\"",
          "h2dtscpp_compat_combo_0012_hello_world_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0012_hello_world_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_HELLO_WORLD_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_HELLO_WORLD_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type "hello world_M"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0013_hello_world_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '"hello world_M"', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0013_hello_world_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0013_hello_world_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0013_hello_world_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "\"hello world_M\"",
          "h2dtscpp_compat_combo_0013_hello_world_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0013_hello_world_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_HELLO_WORLD_XYZ157
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_HELLO_WORLD_XYZ157
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type "hello world_XYZ157"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0014_hello_world_xyz157', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '"hello world_XYZ157"', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0014_hello_world_xyz157 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0014_hello_world_xyz157 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0014_hello_world_xyz157 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "\"hello world_XYZ157\"",
          "h2dtscpp_compat_combo_0014_hello_world_xyz157 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0014_hello_world_xyz157 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_ORNULL_ONEORMANY_TYPEN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_ORNULL_ONEORMANY_TYPEN
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type OrNull<OneOrMany<Typen>>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0015_ornull_oneormany_typen', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C158', alias: '',
            variableList: [{ type: 'OrNull<OneOrMany<Typen>>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0015_ornull_oneormany_typen convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0015_ornull_oneormany_typen must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0015_ornull_oneormany_typen must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "OrNull<OneOrMany<Typen>>",
          "h2dtscpp_compat_combo_0015_ornull_oneormany_typen field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0015_ornull_oneormany_typen execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_ORNULL_ONEORMANY_TYPES
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_ORNULL_ONEORMANY_TYPES
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type OrNull<OneOrMany<Types>>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0016_ornull_oneormany_types', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C158', alias: '',
            variableList: [{ type: 'OrNull<OneOrMany<Types>>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0016_ornull_oneormany_types convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0016_ornull_oneormany_types must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0016_ornull_oneormany_types must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "OrNull<OneOrMany<Types>>",
          "h2dtscpp_compat_combo_0016_ornull_oneormany_types field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0016_ornull_oneormany_types execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_ORNULL_ONEORMANY_TYPEB
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_ORNULL_ONEORMANY_TYPEB
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type OrNull<OneOrMany<Typeb>>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0017_ornull_oneormany_typeb', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C158', alias: '',
            variableList: [{ type: 'OrNull<OneOrMany<Typeb>>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0017_ornull_oneormany_typeb convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0017_ornull_oneormany_typeb must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0017_ornull_oneormany_typeb must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "OrNull<OneOrMany<Typeb>>",
          "h2dtscpp_compat_combo_0017_ornull_oneormany_typeb field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0017_ornull_oneormany_typeb execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_ORNULL_ONEORMANY_TYPER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_ORNULL_ONEORMANY_TYPER
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type OrNull<OneOrMany<Typer>>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0018_ornull_oneormany_typer', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C158', alias: '',
            variableList: [{ type: 'OrNull<OneOrMany<Typer>>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0018_ornull_oneormany_typer convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0018_ornull_oneormany_typer must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0018_ornull_oneormany_typer must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "OrNull<OneOrMany<Typer>>",
          "h2dtscpp_compat_combo_0018_ornull_oneormany_typer field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0018_ornull_oneormany_typer execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_ORNULLONEORMANYTYPE
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_ORNULLONEORMANYTYPE
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type OrNullOneOrManyType>>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0019_ornulloneormanytype', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C158', alias: '',
            variableList: [{ type: 'OrNullOneOrManyType>>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0019_ornulloneormanytype convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0019_ornulloneormanytype must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0019_ornulloneormanytype must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "OrNullOneOrManyType>>",
          "h2dtscpp_compat_combo_0019_ornulloneormanytype field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0019_ornulloneormanytype execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_RNULL_ONEORMANY_TYPE
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_RNULL_ONEORMANY_TYPE
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type rNull<OneOrMany<Type>>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0020_rnull_oneormany_type', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C158', alias: '',
            variableList: [{ type: 'rNull<OneOrMany<Type>>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0020_rnull_oneormany_type convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0020_rnull_oneormany_type must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0020_rnull_oneormany_type must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "rNull<OneOrMany<Type>>",
          "h2dtscpp_compat_combo_0020_rnull_oneormany_type field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0020_rnull_oneormany_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_ORNULL_ONEORMANY_TYPESTD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_ORNULL_ONEORMANY_TYPESTD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type OrNull<OneOrMany<Typestd>>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0021_ornull_oneormany_typestd', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C158', alias: '',
            variableList: [{ type: 'OrNull<OneOrMany<Typestd>>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0021_ornull_oneormany_typestd convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0021_ornull_oneormany_typestd must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0021_ornull_oneormany_typestd must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "OrNull<OneOrMany<Typestd>>",
          "h2dtscpp_compat_combo_0021_ornull_oneormany_typestd field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0021_ornull_oneormany_typestd execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_ORNULL_ONEORMANY_TYPEM
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_ORNULL_ONEORMANY_TYPEM
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type OrNull<OneOrMany<TypeM>>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0022_ornull_oneormany_typem', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C158', alias: '',
            variableList: [{ type: 'OrNull<OneOrMany<TypeM>>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0022_ornull_oneormany_typem convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0022_ornull_oneormany_typem must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0022_ornull_oneormany_typem must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "OrNull<OneOrMany<TypeM>>",
          "h2dtscpp_compat_combo_0022_ornull_oneormany_typem field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0022_ornull_oneormany_typem execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_ORNULL_ONEORMANY_TYPEXYZ158
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_ORNULL_ONEORMANY_TYPEXYZ158
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type OrNull<OneOrMany<TypeXYZ158>>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0023_ornull_oneormany_typexyz158', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C158', alias: '',
            variableList: [{ type: 'OrNull<OneOrMany<TypeXYZ158>>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0023_ornull_oneormany_typexyz158 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0023_ornull_oneormany_typexyz158 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0023_ornull_oneormany_typexyz158 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "OrNull<OneOrMany<TypeXYZ158>>",
          "h2dtscpp_compat_combo_0023_ornull_oneormany_typexyz158 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0023_ornull_oneormany_typexyz158 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_READONLY_STRING_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_READONLY_STRING_NUMBR
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); number
   *            keyword misspelled (readonly [string, numbr]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0024_readonly_string_numbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C161', alias: '',
            variableList: [{ type: 'readonly [string, numbr]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0024_readonly_string_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0024_readonly_string_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0024_readonly_string_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "readonly [string, numbr]",
          "h2dtscpp_compat_combo_0024_readonly_string_numbr field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0024_readonly_string_numbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_READONLY_STRNG_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_READONLY_STRNG_NUMBER
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); string
   *            keyword misspelled (readonly [strng, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0025_readonly_strng_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C161', alias: '',
            variableList: [{ type: 'readonly [strng, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0025_readonly_strng_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0025_readonly_strng_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0025_readonly_strng_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "readonly [strng, number]",
          "h2dtscpp_compat_combo_0025_readonly_strng_number field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0025_readonly_strng_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_READONLY_STRING_NUMBER_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_READONLY_STRING_NUMBER_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (readonly [string, number] | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0026_readonly_string_number_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C161', alias: '',
            variableList: [{ type: 'readonly [string, number] | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0026_readonly_string_number_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0026_readonly_string_number_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0026_readonly_string_number_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "readonly [string, number] | b",
          "h2dtscpp_compat_combo_0026_readonly_string_number_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0026_readonly_string_number_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_READONLY_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_READONLY_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type readonly [string, number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0027_readonly_string_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C161', alias: '',
            variableList: [{ type: 'readonly [string, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0027_readonly_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0027_readonly_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0027_readonly_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "readonly [string, number",
          "h2dtscpp_compat_combo_0027_readonly_string_number field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0027_readonly_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_READONLY_STRING_NUMBER_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_READONLY_STRING_NUMBER_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type readonly [string, number]x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0028_readonly_string_number_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C161', alias: '',
            variableList: [{ type: 'readonly [string, number]x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0028_readonly_string_number_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0028_readonly_string_number_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0028_readonly_string_number_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "readonly [string, number]x",
          "h2dtscpp_compat_combo_0028_readonly_string_number_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0028_readonly_string_number_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_EADONLY_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_EADONLY_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type eadonly [string, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0029_eadonly_string_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C161', alias: '',
            variableList: [{ type: 'eadonly [string, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0029_eadonly_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0029_eadonly_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0029_eadonly_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "eadonly [string, number]",
          "h2dtscpp_compat_combo_0029_eadonly_string_number field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0029_eadonly_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_READONLY_STRING_NUMBER_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_READONLY_STRING_NUMBER_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (readonly [string, number] | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0030_readonly_string_number_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C161', alias: '',
            variableList: [{ type: 'readonly [string, number] | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0030_readonly_string_number_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0030_readonly_string_number_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0030_readonly_string_number_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "readonly [string, number] | std",
          "h2dtscpp_compat_combo_0030_readonly_string_number_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0030_readonly_string_number_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_READONLY_STRING_NUMBER_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_READONLY_STRING_NUMBER_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (readonly [string, number] | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0031_readonly_string_number_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C161', alias: '',
            variableList: [{ type: 'readonly [string, number] | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0031_readonly_string_number_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0031_readonly_string_number_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0031_readonly_string_number_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "readonly [string, number] | M",
          "h2dtscpp_compat_combo_0031_readonly_string_number_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0031_readonly_string_number_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_READONLY_STRING_NUMBER_XYZ161
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_READONLY_STRING_NUMBER_XYZ161
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (readonly [string, number] | XYZ161); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0032_readonly_string_number_xyz161', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C161', alias: '',
            variableList: [{ type: 'readonly [string, number] | XYZ161', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0032_readonly_string_number_xyz161 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0032_readonly_string_number_xyz161 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0032_readonly_string_number_xyz161 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "readonly [string, number] | XYZ161",
          "h2dtscpp_compat_combo_0032_readonly_string_number_xyz161 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0032_readonly_string_number_xyz161 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_KEYOF_ARRAYISH_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_KEYOF_ARRAYISH_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (keyof Arrayish | n); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0033_keyof_arrayish_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C162', alias: '',
            variableList: [{ type: 'keyof Arrayish | n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0033_keyof_arrayish_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0033_keyof_arrayish_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0033_keyof_arrayish_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "keyof Arrayish | n",
          "h2dtscpp_compat_combo_0033_keyof_arrayish_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0033_keyof_arrayish_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_KEYOF_ARRAYISH_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_KEYOF_ARRAYISH_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (keyof Arrayish | s); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0034_keyof_arrayish_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C162', alias: '',
            variableList: [{ type: 'keyof Arrayish | s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0034_keyof_arrayish_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0034_keyof_arrayish_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0034_keyof_arrayish_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "keyof Arrayish | s",
          "h2dtscpp_compat_combo_0034_keyof_arrayish_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0034_keyof_arrayish_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_KEYOF_ARRAYISH_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_KEYOF_ARRAYISH_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (keyof Arrayish | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0035_keyof_arrayish_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C162', alias: '',
            variableList: [{ type: 'keyof Arrayish | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0035_keyof_arrayish_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0035_keyof_arrayish_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0035_keyof_arrayish_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "keyof Arrayish | b",
          "h2dtscpp_compat_combo_0035_keyof_arrayish_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0035_keyof_arrayish_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_KEYOF_ARRAYISH_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_KEYOF_ARRAYISH_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (keyof Arrayish | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0036_keyof_arrayish_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C162', alias: '',
            variableList: [{ type: 'keyof Arrayish | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0036_keyof_arrayish_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0036_keyof_arrayish_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0036_keyof_arrayish_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "keyof Arrayish | r",
          "h2dtscpp_compat_combo_0036_keyof_arrayish_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0036_keyof_arrayish_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_KEYOF_ARRAYISHX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_KEYOF_ARRAYISHX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type keyof Arrayishx; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0037_keyof_arrayishx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C162', alias: '',
            variableList: [{ type: 'keyof Arrayishx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0037_keyof_arrayishx convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0037_keyof_arrayishx must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0037_keyof_arrayishx must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "keyof Arrayishx",
          "h2dtscpp_compat_combo_0037_keyof_arrayishx field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0037_keyof_arrayishx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_EYOF_ARRAYISH
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_EYOF_ARRAYISH
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type eyof Arrayish; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0038_eyof_arrayish', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C162', alias: '',
            variableList: [{ type: 'eyof Arrayish', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0038_eyof_arrayish convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0038_eyof_arrayish must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0038_eyof_arrayish must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "eyof Arrayish",
          "h2dtscpp_compat_combo_0038_eyof_arrayish field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0038_eyof_arrayish execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_KEYOF_ARRAYISH_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_KEYOF_ARRAYISH_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (keyof Arrayish | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0039_keyof_arrayish_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C162', alias: '',
            variableList: [{ type: 'keyof Arrayish | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0039_keyof_arrayish_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0039_keyof_arrayish_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0039_keyof_arrayish_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "keyof Arrayish | std",
          "h2dtscpp_compat_combo_0039_keyof_arrayish_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0039_keyof_arrayish_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_KEYOF_ARRAYISH_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_KEYOF_ARRAYISH_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (keyof Arrayish | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0040_keyof_arrayish_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C162', alias: '',
            variableList: [{ type: 'keyof Arrayish | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0040_keyof_arrayish_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0040_keyof_arrayish_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0040_keyof_arrayish_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "keyof Arrayish | M",
          "h2dtscpp_compat_combo_0040_keyof_arrayish_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0040_keyof_arrayish_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_KEYOF_ARRAYISH_XYZ162
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_KEYOF_ARRAYISH_XYZ162
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (keyof Arrayish | XYZ162); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0041_keyof_arrayish_xyz162', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C162', alias: '',
            variableList: [{ type: 'keyof Arrayish | XYZ162', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0041_keyof_arrayish_xyz162 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0041_keyof_arrayish_xyz162 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0041_keyof_arrayish_xyz162 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "keyof Arrayish | XYZ162",
          "h2dtscpp_compat_combo_0041_keyof_arrayish_xyz162 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0041_keyof_arrayish_xyz162 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_PERSON_N_AGE
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_PERSON_N_AGE
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Person_n["age"]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0042_person_n_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C163', alias: '',
            variableList: [{ type: 'Person_n["age"]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0042_person_n_age convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0042_person_n_age must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0042_person_n_age must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person_n[\"age\"]",
          "h2dtscpp_compat_combo_0042_person_n_age field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0042_person_n_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_PERSON_S_AGE
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_PERSON_S_AGE
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Person_s["age"]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0043_person_s_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C163', alias: '',
            variableList: [{ type: 'Person_s["age"]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0043_person_s_age convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0043_person_s_age must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0043_person_s_age must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person_s[\"age\"]",
          "h2dtscpp_compat_combo_0043_person_s_age field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0043_person_s_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_PERSON_B_AGE
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_PERSON_B_AGE
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Person_b["age"]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0044_person_b_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C163', alias: '',
            variableList: [{ type: 'Person_b["age"]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0044_person_b_age convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0044_person_b_age must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0044_person_b_age must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person_b[\"age\"]",
          "h2dtscpp_compat_combo_0044_person_b_age field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0044_person_b_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_PERSON_AGE
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_PERSON_AGE
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Person["age"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0045_person_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C163', alias: '',
            variableList: [{ type: 'Person["age"', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0045_person_age convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0045_person_age must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0045_person_age must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person[\"age\"",
          "h2dtscpp_compat_combo_0045_person_age field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0045_person_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_PERSON_AGE_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_PERSON_AGE_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Person["age"]x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0046_person_age_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C163', alias: '',
            variableList: [{ type: 'Person["age"]x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0046_person_age_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0046_person_age_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0046_person_age_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person[\"age\"]x",
          "h2dtscpp_compat_combo_0046_person_age_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0046_person_age_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_ERSON_AGE
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_ERSON_AGE
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type erson["age"]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0047_erson_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C163', alias: '',
            variableList: [{ type: 'erson["age"]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0047_erson_age convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0047_erson_age must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0047_erson_age must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "erson[\"age\"]",
          "h2dtscpp_compat_combo_0047_erson_age field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0047_erson_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_PERSON_STD_AGE
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_PERSON_STD_AGE
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Person_std["age"]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0048_person_std_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C163', alias: '',
            variableList: [{ type: 'Person_std["age"]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0048_person_std_age convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0048_person_std_age must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0048_person_std_age must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person_std[\"age\"]",
          "h2dtscpp_compat_combo_0048_person_std_age field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0048_person_std_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0049_PERSON_M_AGE
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0049_PERSON_M_AGE
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Person_M["age"]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0049_person_m_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C163', alias: '',
            variableList: [{ type: 'Person_M["age"]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0049_person_m_age convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0049_person_m_age must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0049_person_m_age must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person_M[\"age\"]",
          "h2dtscpp_compat_combo_0049_person_m_age field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0049_person_m_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0050_PERSON_XYZ163_AGE
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0050_PERSON_XYZ163_AGE
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Person_XYZ163["age"]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0050_person_xyz163_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C163', alias: '',
            variableList: [{ type: 'Person_XYZ163["age"]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0050_person_xyz163_age convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0050_person_xyz163_age must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0050_person_xyz163_age must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person_XYZ163[\"age\"]",
          "h2dtscpp_compat_combo_0050_person_xyz163_age field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0050_person_xyz163_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0051_PERSON_N_KEYOF_PERSON
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0051_PERSON_N_KEYOF_PERSON
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Person_n[keyof Person]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0051_person_n_keyof_person', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C165', alias: '',
            variableList: [{ type: 'Person_n[keyof Person]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0051_person_n_keyof_person convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0051_person_n_keyof_person must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0051_person_n_keyof_person must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person_n[keyof Person]",
          "h2dtscpp_compat_combo_0051_person_n_keyof_person field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0051_person_n_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0052_PERSON_S_KEYOF_PERSON
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0052_PERSON_S_KEYOF_PERSON
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Person_s[keyof Person]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0052_person_s_keyof_person', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C165', alias: '',
            variableList: [{ type: 'Person_s[keyof Person]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0052_person_s_keyof_person convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0052_person_s_keyof_person must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0052_person_s_keyof_person must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person_s[keyof Person]",
          "h2dtscpp_compat_combo_0052_person_s_keyof_person field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0052_person_s_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0053_PERSON_B_KEYOF_PERSON
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0053_PERSON_B_KEYOF_PERSON
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Person_b[keyof Person]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0053_person_b_keyof_person', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C165', alias: '',
            variableList: [{ type: 'Person_b[keyof Person]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0053_person_b_keyof_person convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0053_person_b_keyof_person must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0053_person_b_keyof_person must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person_b[keyof Person]",
          "h2dtscpp_compat_combo_0053_person_b_keyof_person field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0053_person_b_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0054_PERSON_KEYOF_PERSON
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0054_PERSON_KEYOF_PERSON
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Person[keyof Person; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0054_person_keyof_person', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C165', alias: '',
            variableList: [{ type: 'Person[keyof Person', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0054_person_keyof_person convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0054_person_keyof_person must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0054_person_keyof_person must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person[keyof Person",
          "h2dtscpp_compat_combo_0054_person_keyof_person field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0054_person_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0055_PERSON_KEYOF_PERSON_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0055_PERSON_KEYOF_PERSON_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Person[keyof Person]x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0055_person_keyof_person_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C165', alias: '',
            variableList: [{ type: 'Person[keyof Person]x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0055_person_keyof_person_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0055_person_keyof_person_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0055_person_keyof_person_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person[keyof Person]x",
          "h2dtscpp_compat_combo_0055_person_keyof_person_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0055_person_keyof_person_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0056_ERSON_KEYOF_PERSON
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0056_ERSON_KEYOF_PERSON
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type erson[keyof Person]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0056_erson_keyof_person', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C165', alias: '',
            variableList: [{ type: 'erson[keyof Person]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0056_erson_keyof_person convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0056_erson_keyof_person must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0056_erson_keyof_person must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "erson[keyof Person]",
          "h2dtscpp_compat_combo_0056_erson_keyof_person field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0056_erson_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_PERSON_STD_KEYOF_PERSON
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_PERSON_STD_KEYOF_PERSON
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Person_std[keyof Person]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0057_person_std_keyof_person', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C165', alias: '',
            variableList: [{ type: 'Person_std[keyof Person]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0057_person_std_keyof_person convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0057_person_std_keyof_person must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0057_person_std_keyof_person must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person_std[keyof Person]",
          "h2dtscpp_compat_combo_0057_person_std_keyof_person field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0057_person_std_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_PERSON_M_KEYOF_PERSON
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_PERSON_M_KEYOF_PERSON
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Person_M[keyof Person]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0058_person_m_keyof_person', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C165', alias: '',
            variableList: [{ type: 'Person_M[keyof Person]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0058_person_m_keyof_person convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0058_person_m_keyof_person must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0058_person_m_keyof_person must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person_M[keyof Person]",
          "h2dtscpp_compat_combo_0058_person_m_keyof_person field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0058_person_m_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_T_EXTENDS_NUMBR_IDLABEL_N_EF5E0A
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_T_EXTENDS_NUMBR_IDLABEL_N_EF5E0A
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); number
   *            keyword misspelled (T extends numbr ? IdLabel : NameLabel); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0011_t_extends_numbr_idlabel_n_ef5e0a', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: 'T extends numbr ? IdLabel : NameLabel', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0011_t_extends_numbr_idlabel_n_ef5e0a convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0011_t_extends_numbr_idlabel_n_ef5e0a must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0011_t_extends_numbr_idlabel_n_ef5e0a must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "T extends numbr ? IdLabel : NameLabel",
          "h2dtscpp_compat_combo_0011_t_extends_numbr_idlabel_n_ef5e0a field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0011_t_extends_numbr_idlabel_n_ef5e0a execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_T_EXTENDS_NUMBER_IDLABEL_F2B8F3
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_T_EXTENDS_NUMBER_IDLABEL_F2B8F3
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (T extends number ? IdLabel : NameLabel | s); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0012_t_extends_number_idlabel_f2b8f3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: 'T extends number ? IdLabel : NameLabel | s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0012_t_extends_number_idlabel_f2b8f3 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0012_t_extends_number_idlabel_f2b8f3 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0012_t_extends_number_idlabel_f2b8f3 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "T extends number ? IdLabel : NameLabel | s",
          "h2dtscpp_compat_combo_0012_t_extends_number_idlabel_f2b8f3 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0012_t_extends_number_idlabel_f2b8f3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_T_EXTENDS_NUMBER_IDLABEL_D98127
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_T_EXTENDS_NUMBER_IDLABEL_D98127
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (T extends number ? IdLabel : NameLabel | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0013_t_extends_number_idlabel_d98127', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: 'T extends number ? IdLabel : NameLabel | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0013_t_extends_number_idlabel_d98127 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0013_t_extends_number_idlabel_d98127 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0013_t_extends_number_idlabel_d98127 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "T extends number ? IdLabel : NameLabel | b",
          "h2dtscpp_compat_combo_0013_t_extends_number_idlabel_d98127 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0013_t_extends_number_idlabel_d98127 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_T_EXTENDS_NUMBER_IDLABEL_92F90A
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_T_EXTENDS_NUMBER_IDLABEL_92F90A
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (T extends number ? IdLabel : NameLabel | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0014_t_extends_number_idlabel_92f90a', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: 'T extends number ? IdLabel : NameLabel | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0014_t_extends_number_idlabel_92f90a convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0014_t_extends_number_idlabel_92f90a must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0014_t_extends_number_idlabel_92f90a must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "T extends number ? IdLabel : NameLabel | r",
          "h2dtscpp_compat_combo_0014_t_extends_number_idlabel_92f90a field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0014_t_extends_number_idlabel_92f90a execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_T_EXTENDS_NUMBER_IDLABEL_6CF990
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_T_EXTENDS_NUMBER_IDLABEL_6CF990
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal);
   *            conditional/infer typo (T extends number ? IdLabel : NameLabelx); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0015_t_extends_number_idlabel_6cf990', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: 'T extends number ? IdLabel : NameLabelx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0015_t_extends_number_idlabel_6cf990 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0015_t_extends_number_idlabel_6cf990 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0015_t_extends_number_idlabel_6cf990 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "T extends number ? IdLabel : NameLabelx",
          "h2dtscpp_compat_combo_0015_t_extends_number_idlabel_6cf990 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0015_t_extends_number_idlabel_6cf990 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_EXTENDS_NUMBER_IDLABEL_NAMELABEL
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_EXTENDS_NUMBER_IDLABEL_NAMELABEL
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal);
   *            conditional/infer typo (extends number ? IdLabel : NameLabel); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0016_extends_number_idlabel_namelabel', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: ' extends number ? IdLabel : NameLabel', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0016_extends_number_idlabel_namelabel convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0016_extends_number_idlabel_namelabel must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0016_extends_number_idlabel_namelabel must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, " extends number ? IdLabel : NameLabel",
          "h2dtscpp_compat_combo_0016_extends_number_idlabel_namelabel field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0016_extends_number_idlabel_namelabel execution error: ${err}`);
    }
  });
});
