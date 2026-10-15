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

suite('Stability_H2DTS_CONVERT_ARRAY_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_STD_VECTOR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_STD_VECTOR_STD_STRING
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::vector<std::string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0038_std_vector_std_string', () => {
    try {
      const r = parsec.parseClass(`class SampleClass219 { public: std::vector<std::string> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0038_std_vector_std_string class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0038_std_vector_std_string class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0038_std_vector_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_STD_VECTOR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_STD_VECTOR_STD_STRING
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::vector<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0039_std_vector_std_string', () => {
    try {
      const r = parsec.parseFunction(`void pipeline219(std::vector<std::string> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0039_std_vector_std_string pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0039_std_vector_std_string pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0039_std_vector_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_STD_VECTOR_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_STD_VECTOR_LONG_LONG
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::vector<long
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0040_std_vector_long_long', () => {
    try {
      const result = transTskey2Ckey('std::vector<long long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0040_std_vector_long_long convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0040_std_vector_long_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0040_std_vector_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_STD_VECTOR_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_STD_VECTOR_LONG_LONG
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::vector<long long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
