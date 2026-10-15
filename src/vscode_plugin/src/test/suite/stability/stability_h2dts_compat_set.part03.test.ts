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

suite('Stability_H2DTS_COMPAT_SET_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_SET._Part03');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0062_COMPAT269_STD_MULTISET_INT_269_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0062_COMPAT269_STD_MULTISET_INT_269_M2
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset<int_269> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0062_compat269_std_multiset_int_269_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(std::multiset<int_269> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0062_compat269_std_multiset_int_269_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0062_compat269_std_multiset_int_269_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0062_compat269_std_multiset_int_269_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset<int_269> m2",
          "h2dts_compat_set_0062_compat269_std_multiset_int_269_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0062_compat269_std_multiset_int_269_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0063_COMPAT269_STD_MULTISET_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0063_COMPAT269_STD_MULTISET_INT_M2
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:multiset<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0063_compat269_std_multiset_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(std:multiset<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0063_compat269_std_multiset_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0063_compat269_std_multiset_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0063_compat269_std_multiset_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:multiset<int> m2",
          "h2dts_compat_set_0063_compat269_std_multiset_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0063_compat269_std_multiset_int_m2 execution error: ${err}`);
    }
  });
});
