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

suite('Gendtscpp_gen_Suite_Ext13', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendtscpp_gen_Suite_Ext13');
  /**
  * @tc.number : h2dtscpp_gen_0292
  * @tc.name : h2dtscpp_gen_0292
  * @tc.desc : h2dtscpp transParameters：扩充-R3 TS 类型 `Promise<number>` → C++ `Promise<number>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0292', () => {
    try {
      const params = [{ type: 'Promise<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Promise<number>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0292 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0293
  * @tc.name : h2dtscpp_gen_0293
  * @tc.desc : h2dtscpp transParameters：扩充-R3 TS 类型 `Promise<string>` → C++ `Promise<string>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0293', () => {
    try {
      const params = [{ type: 'Promise<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Promise<string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0293 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0294
  * @tc.name : h2dtscpp_gen_0294
  * @tc.desc : h2dtscpp transParameters：扩充-R3 TS 类型 `Promise<void>` → C++ `Promise<void>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0294', () => {
    try {
      const params = [{ type: 'Promise<void>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Promise<void>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0294 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0295
  * @tc.name : h2dtscpp_gen_0295
  * @tc.desc : h2dtscpp transParameters：扩充-R3 TS 类型 `Record<string, number>` → C++ `Record<string, number>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0295', () => {
    try {
      const params = [{ type: 'Record<string, number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Record<string, number>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0295 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0296
  * @tc.name : h2dtscpp_gen_0296
  * @tc.desc : h2dtscpp transParameters：扩充-R3 TS 类型 `Record<number, string>` → C++ `Record<number, string>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0296', () => {
    try {
      const params = [{ type: 'Record<number, string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Record<number, string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0296 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0297
  * @tc.name : h2dtscpp_gen_0297
  * @tc.desc : h2dtscpp transParameters：扩充-R3 TS 类型 `[number, string]` → C++ `[number, string]` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0297', () => {
    try {
      const params = [{ type: '[number, string]', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, '[number, string]');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0297 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0298
  * @tc.name : h2dtscpp_gen_0298
  * @tc.desc : h2dtscpp transParameters：扩充-R3 TS 类型 `[string, boolean, number]` → C++ `[string, boolean, number]` 的转换...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0298', () => {
    try {
      const params = [{ type: '[string, boolean, number]', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, '[string, boolean, number]');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0298 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0299
  * @tc.name : h2dtscpp_gen_0299
  * @tc.desc : h2dtscpp transParameters：扩充-R3 TS 类型 `number | string` → C++ `number | string` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0299', () => {
    try {
      const params = [{ type: 'number | string', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'number | string');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0299 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0300
  * @tc.name : h2dtscpp_gen_0300
  * @tc.desc : h2dtscpp transParameters：扩充-R3 TS 类型 `boolean | null` → C++ `boolean | null` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0300', () => {
    try {
      const params = [{ type: 'boolean | null', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'boolean | null');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0300 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0301
  * @tc.name : h2dtscpp_gen_0301
  * @tc.desc : h2dtscpp transParameters：扩充-R3 TS 类型 `string | undefined` → C++ `string | undefined` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0301', () => {
    try {
      const params = [{ type: 'string | undefined', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'string | undefined');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0301 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0302
  * @tc.name : h2dtscpp_gen_0302
  * @tc.desc : h2dtscpp transParameters：扩充-R3 TS 类型 `Array<number[]>` → C++ `Array<number[]>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0302', () => {
    try {
      const params = [{ type: 'Array<number[]>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Array<number[]>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0302 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0303
  * @tc.name : h2dtscpp_gen_0303
  * @tc.desc : h2dtscpp transParameters：扩充-R3 TS 类型 `Map<string, number[]>` → C++ `Map<string, number[]>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0303', () => {
    try {
      const params = [{ type: 'Map<string, number[]>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Map<string, number[]>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0303 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0304
  * @tc.name : h2dtscpp_gen_0304
  * @tc.desc : h2dtscpp transParameters：扩充-R3 TS 类型 `IterableIterator<Map<string, number>>` → C++ `IterableIterator<M...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0304', () => {
    try {
      const params = [{ type: 'IterableIterator<Map<string, number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Map<string, number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0304 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0305
  * @tc.name : h2dtscpp_gen_0305
  * @tc.desc : h2dtscpp transParameters：扩充-R3 TS 类型 `(a: number, b: string) => boolean` → C++ `std::function<bool(dou...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0305', () => {
    try {
      const params = [{ type: '(a: number, b: string) => boolean', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::function<bool(double, std::string)>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0305 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0306
  * @tc.name : h2dtscpp_gen_0306
  * @tc.desc : h2dtscpp transParameters：扩充-R3 TS 类型 `() => void` → C++ `std::function<void()>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0306', () => {
    try {
      const params = [{ type: '() => void', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::function<void()>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0306 执行异常: ${String(err)}`);
    }
  });
});
