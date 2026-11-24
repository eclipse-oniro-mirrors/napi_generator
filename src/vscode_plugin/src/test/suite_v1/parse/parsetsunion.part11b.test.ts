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

suite('Parse_Union_TS_Suite_Ext11b', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Union_TS_Suite_Ext11b');
  /**
  * @tc.number dts2cpp_union_0412
  * @tc.name parseUnion_ts_ext_0412
  * @tc.desc dts2cpp union type alias 四成员季度字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0412', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0412.ts',
            `type UnionType0412 = "Q1" | "Q2" | "Q3" | "Q4";`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0412');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '"Q1"');
      assert.strictEqual(typeItem!.types[1], '"Q2"');
      assert.strictEqual(typeItem!.types[2], '"Q3"');
      assert.strictEqual(typeItem!.types[3], '"Q4"');
          } catch (err) {
      assert.fail(`dts2cpp_union_0412 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0413
  * @tc.name parseUnion_ts_ext_0413
  * @tc.desc dts2cpp union type alias 五成员尺寸档位字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0413', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0413.ts',
            `type UnionType0413 = "xs" | "sm" | "md" | "lg" | "xl";`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0413');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 5);
      assert.strictEqual(typeItem!.types[0], '"xs"');
      assert.strictEqual(typeItem!.types[1], '"sm"');
      assert.strictEqual(typeItem!.types[2], '"md"');
      assert.strictEqual(typeItem!.types[3], '"lg"');
      assert.strictEqual(typeItem!.types[4], '"xl"');
          } catch (err) {
      assert.fail(`dts2cpp_union_0413 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0414
  * @tc.name parseUnion_ts_ext_0414
  * @tc.desc dts2cpp union type alias 三成员 Promise 状态字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0414', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0414.ts',
            `type UnionType0414 = "pending" | "fulfilled" | "rejected";`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0414');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '"pending"');
      assert.strictEqual(typeItem!.types[1], '"fulfilled"');
      assert.strictEqual(typeItem!.types[2], '"rejected"');
          } catch (err) {
      assert.fail(`dts2cpp_union_0414 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0415
  * @tc.name parseUnion_ts_ext_0415
  * @tc.desc dts2cpp union type alias 排序方向字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0415', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0415.ts',
            `type UnionType0415 = "asc" | "desc";`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0415');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '"asc"');
      assert.strictEqual(typeItem!.types[1], '"desc"');
          } catch (err) {
      assert.fail(`dts2cpp_union_0415 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0416
  * @tc.name parseUnion_ts_ext_0416
  * @tc.desc dts2cpp union type alias 主题模式字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0416', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0416.ts',
            `type UnionType0416 = "dark" | "light" | "auto";`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0416');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '"dark"');
      assert.strictEqual(typeItem!.types[1], '"light"');
      assert.strictEqual(typeItem!.types[2], '"auto"');
          } catch (err) {
      assert.fail(`dts2cpp_union_0416 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0417
  * @tc.name parseUnion_ts_ext_0417
  * @tc.desc dts2cpp union type alias 三成员优先级字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0417', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0417.ts',
            `type UnionType0417 = "high" | "medium" | "low";`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0417');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '"high"');
      assert.strictEqual(typeItem!.types[1], '"medium"');
      assert.strictEqual(typeItem!.types[2], '"low"');
          } catch (err) {
      assert.fail(`dts2cpp_union_0417 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0418
  * @tc.name parseUnion_ts_ext_0418
  * @tc.desc dts2cpp union type alias 四成员数据格式字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0418', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0418.ts',
            `type UnionType0418 = "json" | "xml" | "yaml" | "csv";`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0418');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '"json"');
      assert.strictEqual(typeItem!.types[1], '"xml"');
      assert.strictEqual(typeItem!.types[2], '"yaml"');
      assert.strictEqual(typeItem!.types[3], '"csv"');
          } catch (err) {
      assert.fail(`dts2cpp_union_0418 执行异常: ${String(err)}`);
    }
  });
});

