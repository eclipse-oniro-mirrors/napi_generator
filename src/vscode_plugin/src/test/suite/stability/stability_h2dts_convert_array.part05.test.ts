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

suite('Stability_H2DTS_CONVERT_ARRAY_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_STD_STACK_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_STD_STACK_UINT8_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::stack<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0013_std_stack_uint8_t', () => {
    try {
      const r = parsec.parseFunction(`void sample419(std::stack<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0013_std_stack_uint8_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0013_std_stack_uint8_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0013_std_stack_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::stack<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0014_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::stack<uint8_t> sampleRet419();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0014_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0014_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0014_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_STD_STACK_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_STD_STACK_UINT8_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::stack<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0015_std_stack_uint8_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass419 { public: std::stack<uint8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0015_std_stack_uint8_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0015_std_stack_uint8_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0015_std_stack_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_STD_STACK_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_STD_STACK_UINT8_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::stack<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
