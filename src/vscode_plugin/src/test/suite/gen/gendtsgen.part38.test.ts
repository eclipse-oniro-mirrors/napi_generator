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
import { parseFunction, parseClass, parseStruct, parseEnum, parseUnion } from '../../../parse/parsec';
import { getDtsFunction, getDtsClasses, getDtsStructs, getDtsEnum, getDtsUnions, genDtsFile } from '../../../gen/gendts';
import { transParseObj, transParameters } from '../../../gen/gendtscpp';
import { GenInfo, ParseObj, ClassObj, FuncObj, StructObj, EnumObj, UnionObj } from '../../../gen/datatype';

suite('Gendts_gen_Suite_Ext38', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext38');
  /**
  * @tc.number : h2dts_gen_1271
  * @tc.name : h2dts_gen_1271
  * @tc.desc : h2dts gen：扩充-basic 类型 `MyType` → `any` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1271', () => {
    try {
      const DECL = `void genType1271(MyType v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1271 生成结果为空');
      const expectSnippet0 = 'export function genType1271(v: any): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1271 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1271 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1272
  * @tc.name : h2dts_gen_1272
  * @tc.desc : h2dts gen：扩充-basic 类型 `defined type` → `any` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1272', () => {
    try {
      const DECL = `void genType1272(defined type v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1272 生成结果为空');
      const expectSnippet0 = 'export function genType1272(v: any): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1272 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1272 执行异常: ${String(err)}`);
    }
  });
});
