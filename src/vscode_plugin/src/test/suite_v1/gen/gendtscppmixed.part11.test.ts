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

suite('Gendtscpp_mixed_Suite_Ext11', function () {
  /**
  * @tc.number h2dtscpp_gen_0921
  * @tc.name gendtscpp_mix_ext_0921
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0921', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0921 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0922
  * @tc.name gendtscpp_mix_ext_0922
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0922', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0922 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0923
  * @tc.name gendtscpp_mix_ext_0923
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0923', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0923 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0924
  * @tc.name gendtscpp_mix_ext_0924
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0924', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0924 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0925
  * @tc.name gendtscpp_mix_ext_0925
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0925', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0925 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0926
  * @tc.name gendtscpp_mix_ext_0926
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0926', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0926 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0927
  * @tc.name gendtscpp_mix_ext_0927
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0927', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0927 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0928
  * @tc.name gendtscpp_mix_ext_0928
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0928', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0928 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0929
  * @tc.name gendtscpp_mix_ext_0929
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0929', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0929 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0930
  * @tc.name gendtscpp_mix_ext_0930
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<boolean>>` → C++ `IterableIterator<Set<boolean>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0930', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<boolean>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<boolean>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0930 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0931
  * @tc.name gendtscpp_mix_ext_0931
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<string>>` → C++ `IterableIterator<Set<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0931', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0931 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0932
  * @tc.name gendtscpp_mix_ext_0932
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<string>>` → C++ `IterableIterator<Set<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0932', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0932 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0933
  * @tc.name gendtscpp_mix_ext_0933
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<string>>` → C++ `IterableIterator<Set<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0933', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0933 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0934
  * @tc.name gendtscpp_mix_ext_0934
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<string>>` → C++ `IterableIterator<Set<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0934', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0934 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0935
  * @tc.name gendtscpp_mix_ext_0935
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<string>>` → C++ `IterableIterator<Set<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0935', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0935 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0936
  * @tc.name gendtscpp_mix_ext_0936
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0936', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0936 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0937
  * @tc.name gendtscpp_mix_ext_0937
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0937', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0937 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0938
  * @tc.name gendtscpp_mix_ext_0938
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0938', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0938 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0939
  * @tc.name gendtscpp_mix_ext_0939
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0939', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0939 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0940
  * @tc.name gendtscpp_mix_ext_0940
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0940', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0940 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0941
  * @tc.name gendtscpp_mix_ext_0941
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0941', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0941 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0942
  * @tc.name gendtscpp_mix_ext_0942
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0942', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0942 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0943
  * @tc.name gendtscpp_mix_ext_0943
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0943', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0943 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0944
  * @tc.name gendtscpp_mix_ext_0944
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0944', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0944 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0945
  * @tc.name gendtscpp_mix_ext_0945
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0945', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0945 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0946
  * @tc.name gendtscpp_mix_ext_0946
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0946', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0946 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0947
  * @tc.name gendtscpp_mix_ext_0947
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0947', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0947 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0948
  * @tc.name gendtscpp_mix_ext_0948
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0948', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0948 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0949
  * @tc.name gendtscpp_mix_ext_0949
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0949', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0949 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0950
  * @tc.name gendtscpp_mix_ext_0950
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0950', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0950 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0951
  * @tc.name gendtscpp_mix_ext_0951
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<boolean>` → C++ `std::set<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0951', () => {
    try {
      const params = [{ type: 'Set<boolean>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<bool>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0951 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0952
  * @tc.name gendtscpp_mix_ext_0952
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<string>` → C++ `std::set<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0952', () => {
    try {
      const params = [{ type: 'Set<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0952 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0953
  * @tc.name gendtscpp_mix_ext_0953
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<string>` → C++ `std::set<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0953', () => {
    try {
      const params = [{ type: 'Set<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0953 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0954
  * @tc.name gendtscpp_mix_ext_0954
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<string>` → C++ `std::set<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0954', () => {
    try {
      const params = [{ type: 'Set<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0954 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0955
  * @tc.name gendtscpp_mix_ext_0955
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<string>` → C++ `std::set<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0955', () => {
    try {
      const params = [{ type: 'Set<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0955 执行异常: ${String(err)}`);
    }
  });
});
