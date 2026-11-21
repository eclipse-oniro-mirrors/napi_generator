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

suite('Parse_Union_TS_Suite_Ext12b', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Union_TS_Suite_Ext12b');
  /**
  * @tc.number dts2cpp_union_0473
  * @tc.name parseUnion_ts_ext_0473
  * @tc.desc dts2cpp union type alias keyof typeof 内置对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0473', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0473.ts',
            `type UnionType0473 = keyof typeof Date | string;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0473');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'keyof typeof Date');
      assert.strictEqual(typeItem!.types[1], 'string');
          } catch (err) {
      assert.fail(`dts2cpp_union_0473 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0474
  * @tc.name parseUnion_ts_ext_0474
  * @tc.desc dts2cpp union type alias 内置对象方法索引访问联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0474', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0474.ts',
            `type UnionType0474 = Date["getTime"] | null;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0474');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Date["getTime"]');
      assert.strictEqual(typeItem!.types[1], 'null');
          } catch (err) {
      assert.fail(`dts2cpp_union_0474 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0475
  * @tc.name parseUnion_ts_ext_0475
  * @tc.desc dts2cpp union type alias 容错：前导空成员联合（仅 1 个成员）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0475', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0475.ts',
            `type UnionType0475 = | string;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0475');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 1);
      assert.strictEqual(typeItem!.types[0], 'string');
          } catch (err) {
      assert.fail(`dts2cpp_union_0475 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0476
  * @tc.name parseUnion_ts_ext_0476
  * @tc.desc dts2cpp union type alias 容错：尾部空成员联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0476', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0476.ts',
            `type UnionType0476 = string | number |;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0476');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'number');
      assert.strictEqual(typeItem!.types[2], '');
          } catch (err) {
      assert.fail(`dts2cpp_union_0476 执行异常: ${String(err)}`);
    }
  });
});

