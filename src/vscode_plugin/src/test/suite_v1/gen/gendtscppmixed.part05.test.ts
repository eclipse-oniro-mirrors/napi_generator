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

suite('Gendtscpp_mixed_Suite_Ext05', function () {
  /**
  * @tc.number h2dtscpp_gen_0711
  * @tc.name gendtscpp_mix_ext_0711
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0711', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0711 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0712
  * @tc.name gendtscpp_mix_ext_0712
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0712', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0712 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0713
  * @tc.name gendtscpp_mix_ext_0713
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0713', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0713 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0714
  * @tc.name gendtscpp_mix_ext_0714
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0714', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0714 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0715
  * @tc.name gendtscpp_mix_ext_0715
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0715', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0715 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0716
  * @tc.name gendtscpp_mix_ext_0716
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0716', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0716 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0717
  * @tc.name gendtscpp_mix_ext_0717
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0717', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0717 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0718
  * @tc.name gendtscpp_mix_ext_0718
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0718', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0718 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0719
  * @tc.name gendtscpp_mix_ext_0719
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0719', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0719 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0720
  * @tc.name gendtscpp_mix_ext_0720
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<boolean>>` → C++ `IterableIterator<Array<boolean>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0720', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<boolean>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<boolean>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0720 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0721
  * @tc.name gendtscpp_mix_ext_0721
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<string>>` → C++ `IterableIterator<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0721', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0721 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0722
  * @tc.name gendtscpp_mix_ext_0722
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<string>>` → C++ `IterableIterator<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0722', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0722 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0723
  * @tc.name gendtscpp_mix_ext_0723
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<string>>` → C++ `IterableIterator<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0723', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0723 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0724
  * @tc.name gendtscpp_mix_ext_0724
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<string>>` → C++ `IterableIterator<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0724', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0724 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0725
  * @tc.name gendtscpp_mix_ext_0725
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<string>>` → C++ `IterableIterator<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0725', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0725 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0726
  * @tc.name gendtscpp_mix_ext_0726
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0726', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0726 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0727
  * @tc.name gendtscpp_mix_ext_0727
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0727', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0727 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0728
  * @tc.name gendtscpp_mix_ext_0728
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0728', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0728 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0729
  * @tc.name gendtscpp_mix_ext_0729
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0729', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0729 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0730
  * @tc.name gendtscpp_mix_ext_0730
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0730', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0730 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0731
  * @tc.name gendtscpp_mix_ext_0731
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0731', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0731 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0732
  * @tc.name gendtscpp_mix_ext_0732
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0732', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0732 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0733
  * @tc.name gendtscpp_mix_ext_0733
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0733', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0733 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0734
  * @tc.name gendtscpp_mix_ext_0734
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0734', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0734 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0735
  * @tc.name gendtscpp_mix_ext_0735
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0735', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0735 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0736
  * @tc.name gendtscpp_mix_ext_0736
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0736', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0736 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0737
  * @tc.name gendtscpp_mix_ext_0737
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0737', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0737 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0738
  * @tc.name gendtscpp_mix_ext_0738
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0738', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0738 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0739
  * @tc.name gendtscpp_mix_ext_0739
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0739', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0739 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0740
  * @tc.name gendtscpp_mix_ext_0740
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0740', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0740 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0741
  * @tc.name gendtscpp_mix_ext_0741
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<boolean>` → C++ `std::vector<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0741', () => {
    try {
      const params = [{ type: 'Array<boolean>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<bool>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0741 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0742
  * @tc.name gendtscpp_mix_ext_0742
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<string>` → C++ `std::vector<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0742', () => {
    try {
      const params = [{ type: 'Array<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0742 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0743
  * @tc.name gendtscpp_mix_ext_0743
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<string>` → C++ `std::vector<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0743', () => {
    try {
      const params = [{ type: 'Array<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0743 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0744
  * @tc.name gendtscpp_mix_ext_0744
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<string>` → C++ `std::vector<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0744', () => {
    try {
      const params = [{ type: 'Array<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0744 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0745
  * @tc.name gendtscpp_mix_ext_0745
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Array<string>` → C++ `std::vector<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0745', () => {
    try {
      const params = [{ type: 'Array<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0745 执行异常: ${String(err)}`);
    }
  });
});
