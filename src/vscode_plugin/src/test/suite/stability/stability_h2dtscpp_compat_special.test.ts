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

suite('Stability_H2DTSCPP_COMPAT_SPECIAL', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_SPECIAL.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0001
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0001
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `${Key}Changed_n`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0001', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C171', alias: '',
            variableList: [{ type: '`${Key}Changed_n`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0001 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0001 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0001 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`${Key}Changed_n`",
          "h2dtscpp_compat_special_0001 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0001 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0002
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0002
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `${Key}Changed_s`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0002', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C171', alias: '',
            variableList: [{ type: '`${Key}Changed_s`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0002 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0002 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0002 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`${Key}Changed_s`",
          "h2dtscpp_compat_special_0002 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0002 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0003
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0003
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `${Key}Changed_b`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0003', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C171', alias: '',
            variableList: [{ type: '`${Key}Changed_b`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0003 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0003 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0003 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`${Key}Changed_b`",
          "h2dtscpp_compat_special_0003 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0003 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0004
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0004
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `${Key}Changed_br`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0004', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C171', alias: '',
            variableList: [{ type: '`${Key}Changed_br`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0004 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0004 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0004 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`${Key}Changed_br`",
          "h2dtscpp_compat_special_0004 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0004 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0005
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0005
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `${Key}Changed_g171`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0005', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C171', alias: '',
            variableList: [{ type: '`${Key}Changed_g171`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0005 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0005 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0005 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`${Key}Changed_g171`",
          "h2dtscpp_compat_special_0005 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0005 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0006
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0006
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `${Key}Changed_any`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0006', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C171', alias: '',
            variableList: [{ type: '`${Key}Changed_any`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0006 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0006 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0006 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`${Key}Changed_any`",
          "h2dtscpp_compat_special_0006 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0006 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0007
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0007
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `${Key}Changed_v`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0007', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C171', alias: '',
            variableList: [{ type: '`${Key}Changed_v`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0007 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0007 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0007 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`${Key}Changed_v`",
          "h2dtscpp_compat_special_0007 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0007 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0008
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0008
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `${Key}Changed_c`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0008', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C171', alias: '',
            variableList: [{ type: '`${Key}Changed_c`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0008 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0008 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0008 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`${Key}Changed_c`",
          "h2dtscpp_compat_special_0008 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0008 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0009
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0009
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `${Key}Changed_Z`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0009', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C171', alias: '',
            variableList: [{ type: '`${Key}Changed_Z`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0009 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0009 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0009 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`${Key}Changed_Z`",
          "h2dtscpp_compat_special_0009 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0009 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0010
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0010
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `tpl-${string}_n`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0010', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C226', alias: '',
            variableList: [{ type: '`tpl-${string}_n`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0010 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0010 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0010 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`tpl-${string}_n`",
          "h2dtscpp_compat_special_0010 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0010 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0011
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0011
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `tpl-${string}_s`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0011', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C226', alias: '',
            variableList: [{ type: '`tpl-${string}_s`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0011 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0011 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0011 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`tpl-${string}_s`",
          "h2dtscpp_compat_special_0011 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0011 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0012
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0012
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `tpl-${string}_b`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0012', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C226', alias: '',
            variableList: [{ type: '`tpl-${string}_b`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0012 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0012 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0012 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`tpl-${string}_b`",
          "h2dtscpp_compat_special_0012 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0012 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0013
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0013
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `tpl-${string}_br`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0013', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C226', alias: '',
            variableList: [{ type: '`tpl-${string}_br`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0013 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0013 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0013 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`tpl-${string}_br`",
          "h2dtscpp_compat_special_0013 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0013 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0014
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0014
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `tpl-${string}_g226`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0014', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C226', alias: '',
            variableList: [{ type: '`tpl-${string}_g226`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0014 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0014 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0014 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`tpl-${string}_g226`",
          "h2dtscpp_compat_special_0014 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0014 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0015
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0015
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `tpl-${string}_any`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0015', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C226', alias: '',
            variableList: [{ type: '`tpl-${string}_any`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0015 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0015 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0015 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`tpl-${string}_any`",
          "h2dtscpp_compat_special_0015 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0015 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0016
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0016
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `tpl-${string}_v`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0016', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C226', alias: '',
            variableList: [{ type: '`tpl-${string}_v`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0016 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0016 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0016 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`tpl-${string}_v`",
          "h2dtscpp_compat_special_0016 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0016 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0017
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0017
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `tpl-${string}_c`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0017', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C226', alias: '',
            variableList: [{ type: '`tpl-${string}_c`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0017 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0017 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0017 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`tpl-${string}_c`",
          "h2dtscpp_compat_special_0017 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0017 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0018
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_SPECIAL_0018
   * @tc.desc   Stability compat h2dtscpp/special: runCompatSafe(transParseObj literal); malformed
   *            type `tpl-${string}_Z`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_special_0018', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C226', alias: '',
            variableList: [{ type: '`tpl-${string}_Z`', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_special_0018 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_special_0018 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_special_0018 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`tpl-${string}_Z`",
          "h2dtscpp_compat_special_0018 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_special_0018 execution error: ${err}`);
    }
  });
});
