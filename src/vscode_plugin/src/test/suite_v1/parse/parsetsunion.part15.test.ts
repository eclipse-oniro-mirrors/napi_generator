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
import { doParseTs } from '../../../parse/parsets';
import { ParseObj } from '../../../gen/datatype';

suite('Parse_Union_TS_Suite_Ext15', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Union_TS_Suite_Ext15');
  /**
  * @tc.number : dts2cpp_union_0550
  * @tc.name : dts2cpp_union_0550
  * @tc.desc : dts2cpp union 扩充-R5-discriminated union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_ts_ext_0550', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseUnionR5550.ts', `type Result = { ok: true; value: number } | { ok: false; error: string };`);
      assert.ok(parseObj);
      assert.ok(parseObj.types || parseObj.unions);
      assert.ok(parseObj.types!.find(item => item.name === 'Result'));
          } catch (err) {
      assert.fail(`dts2cpp_union_0550 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0551
  * @tc.name : dts2cpp_union_0551
  * @tc.desc : dts2cpp union 扩充-R5-基础联合 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_ts_ext_0551', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseUnionR5551.ts', `type NumOrStr = number | string;`);
      assert.ok(parseObj);
      assert.ok(parseObj.types || parseObj.unions);
      assert.ok(parseObj.types!.find(item => item.name === 'NumOrStr'));
          } catch (err) {
      assert.fail(`dts2cpp_union_0551 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0552
  * @tc.name : dts2cpp_union_0552
  * @tc.desc : dts2cpp union 扩充-R5-泛型 Maybe 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_ts_ext_0552', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseUnionR5552.ts', `type Maybe<T> = T | null | undefined;`);
      assert.ok(parseObj);
      assert.ok(parseObj.types || parseObj.unions);
      assert.ok(parseObj.types!.find(item => item.name === 'Maybe'));
          } catch (err) {
      assert.fail(`dts2cpp_union_0552 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0553
  * @tc.name : dts2cpp_union_0553
  * @tc.desc : dts2cpp union 扩充-R5-tagged union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_ts_ext_0553', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseUnionR5553.ts', `type Shape = { kind: "circle"; r: number } | { kind: "rect"; w: number; h: number };`);
      assert.ok(parseObj);
      assert.ok(parseObj.types || parseObj.unions);
      assert.ok(parseObj.types!.find(item => item.name === 'Shape'));
          } catch (err) {
      assert.fail(`dts2cpp_union_0553 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0554
  * @tc.name : dts2cpp_union_0554
  * @tc.desc : dts2cpp union 扩充-R5-递归 JSON union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_ts_ext_0554', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseUnionR5554.ts', `type JSON = string | number | boolean | null | JSON[] | { [k: string]: JSON };`);
      assert.ok(parseObj);
      assert.ok(parseObj.types || parseObj.unions);
      assert.ok(parseObj.types!.find(item => item.name === 'JSON'));
          } catch (err) {
      assert.fail(`dts2cpp_union_0554 执行异常: ${String(err)}`);
    }
  });
});
