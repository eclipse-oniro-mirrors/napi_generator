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

suite('Parse_Type_TS_Suite_Ext03c', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Type_TS_Suite_Ext03c');
  /**
  * @tc.number dts2cpp_type_0118
  * @tc.name parseType_ts_ext_0118
  * @tc.desc dts2cpp type 扩充-成员矩阵：(a: number) => void × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0118', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0118.ts',
            `type TpP19M2 = {
        p0?: (a: number) => void;
        p1?: (a: number) => void;
        p2?: (a: number) => void;
        p3?: (a: number) => void;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP19M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: number) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: number) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: number) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: number) => void');
      assert.strictEqual(item_0!.functions.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_type_0118 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0119
  * @tc.name parseType_ts_ext_0119
  * @tc.desc dts2cpp type 扩充-成员矩阵：(a: number) => void × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0119', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0119.ts',
            `type TpP19M3 = {
        p0: (a: (a: number) => void) => void;
        p1: (a: (a: number) => void) => void;
        p2: (a: (a: number) => void) => void;
        p3: (a: (a: number) => void) => void;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP19M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: (a: number) => void) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: (a: number) => void) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: (a: number) => void) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: (a: number) => void) => void');
      assert.strictEqual(item_0!.functions.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_type_0119 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0120
  * @tc.name parseType_ts_ext_0120
  * @tc.desc dts2cpp type 扩充-成员矩阵：Date × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0120', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0120.ts',
            `type TpP20M0 = {
        p0: Date;
        p1: Date;
        p2: Date;
        p3: Date;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP20M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Date');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Date');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Date');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Date');
      assert.strictEqual(item_0!.functions.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_type_0120 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0121
  * @tc.name parseType_ts_ext_0121
  * @tc.desc dts2cpp type 扩充-成员矩阵：Date × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0121', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0121.ts',
            `type TpP20M1 = {
        readonly p0: Date;
        readonly p1: Date;
        readonly p2: Date;
        readonly p3: Date;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP20M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Date');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Date');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Date');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Date');
      assert.strictEqual(item_0!.functions.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_type_0121 执行异常: ${String(err)}`);
    }
  });

});

