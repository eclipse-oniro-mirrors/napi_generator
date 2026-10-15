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

suite('Stability_H2DTS_CONVERT_ARRAY_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_STD_FORWARD_LIST_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_STD_FORWARD_LIST_UINT8_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<uint8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0008_std_forward_list_uint8_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline111(std::forward_list<uint8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0008_std_forward_list_uint8_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0008_std_forward_list_uint8_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0008_std_forward_list_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_STD_FORWARD_LIST_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_STD_FORWARD_LIST_UINT16_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0009_std_forward_list_uint16_t', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0009_std_forward_list_uint16_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0009_std_forward_list_uint16_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0009_std_forward_list_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_STD_FORWARD_LIST_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_STD_FORWARD_LIST_UINT16_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::forward_list<uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0010_std_forward_list_uint16_t', () => {
    try {
      const r = parsec.parseFunction(`void sample112(std::forward_list<uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0010_std_forward_list_uint16_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0010_std_forward_list_uint16_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0010_std_forward_list_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::forward_list<uint16_t>; strictEqual convert output.
