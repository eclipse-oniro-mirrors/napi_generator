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

suite('Stability_H2DTS_CONVERT_ARRAY_Part06', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_STD_PRIORITY_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_STD_PRIORITY_QUEUE_INT
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::priority_queue<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0044_std_priority_queue_int', () => {
    try {
      const r = parsec.parseFunction(`void sample518(std::priority_queue<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0044_std_priority_queue_int param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0044_std_priority_queue_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0044_std_priority_queue_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::priority_queue<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0045_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<int> sampleRet518();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0045_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0045_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0045_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_STD_PRIORITY_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_STD_PRIORITY_QUEUE_INT
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::priority_queue<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0046_std_priority_queue_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass518 { public: std::priority_queue<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0046_std_priority_queue_int class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0046_std_priority_queue_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0046_std_priority_queue_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_STD_PRIORITY_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_STD_PRIORITY_QUEUE_INT
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::priority_queue<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0047_std_priority_queue_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline518(std::priority_queue<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0047_std_priority_queue_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0047_std_priority_queue_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0047_std_priority_queue_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_STD_PRIORITY_QUEUE_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_STD_PRIORITY_QUEUE_SIZE_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
