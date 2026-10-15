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

suite('Stability_H2DTS_CONVERT_FUNC_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0006_STD_UNIQUE_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0006_STD_UNIQUE_PTR_INT
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::unique_ptr<int *>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0006_std_unique_ptr_int', () => {
    try {
      const r = parsec.parseFunction(`void sample275(std::unique_ptr<int *> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0006_std_unique_ptr_int param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0006_std_unique_ptr_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0006_std_unique_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0007_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0007_NUMBER
   * @tc.desc   Stability convert h2dts/func: function-return convert; type std::unique_ptr<int *>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0007_number', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<int *> sampleRet275();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0007_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0007_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0007_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0008_STD_UNIQUE_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0008_STD_UNIQUE_PTR_INT
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::unique_ptr<int *>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0008_std_unique_ptr_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass275 { public: std::unique_ptr<int *> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0008_std_unique_ptr_int class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0008_std_unique_ptr_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0008_std_unique_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0009_STD_UNIQUE_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0009_STD_UNIQUE_PTR_INT
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type std::unique_ptr<int
   *            *>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0009_std_unique_ptr_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline275(std::unique_ptr<int *> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0009_std_unique_ptr_int pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0009_std_unique_ptr_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0009_std_unique_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0010_STD_SHARED_PTR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0010_STD_SHARED_PTR_STD_STRING
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::shared_ptr<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
