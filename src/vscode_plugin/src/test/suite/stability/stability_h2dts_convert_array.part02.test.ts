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
import { transTskey2Ckey } from '../../../gen/gendts';
import * as parsec from '../../../parse/parsec';
import { runCompatSafe } from './stability_helpers';

suite('Stability_H2DTS_CONVERT_ARRAY_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_STD_ARRAY_BOOL_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_STD_ARRAY_BOOL_10
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::array<bool,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0032_std_array_bool_10', () => {
    try {
      const result = transTskey2Ckey('std::array<bool, 10>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0032_std_array_bool_10 convert output non-empty");
      assert.strictEqual(result, "Array<boolean>", "h2dts_convert_array_0032_std_array_bool_10 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0032_std_array_bool_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_STD_ARRAY_BOOL_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_STD_ARRAY_BOOL_10
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::array<bool, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0033_std_array_bool_10', () => {
    try {
      const r = parsec.parseFunction(`void sample57(std::array<bool, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0033_std_array_bool_10 param convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_array_0033_std_array_bool_10 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0033_std_array_bool_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_ARRAY_BOOLEAN
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_ARRAY_BOOLEAN
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::array<bool, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0034_array_boolean', () => {
    try {
      const r = parsec.parseFunction(`std::array<bool, 10> sampleRet57();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0034_array_boolean return convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0034_array_boolean return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0034_array_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_STD_ARRAY_BOOL_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_STD_ARRAY_BOOL_10
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::array<bool, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0035_std_array_bool_10', () => {
    try {
      const r = parsec.parseClass(`class SampleClass57 { public: std::array<bool, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
