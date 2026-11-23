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

suite('Gendtscpp_mixed_Suite_Ext10', function () {
  /**
  * @tc.number h2dtscpp_gen_0886
  * @tc.name gendtscpp_mix_ext_0886
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0886', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0886 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0887
  * @tc.name gendtscpp_mix_ext_0887
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0887', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0887 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0888
  * @tc.name gendtscpp_mix_ext_0888
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<boolean>>` → C++ `IterableIterator<Array<boolean>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0888', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<boolean>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<boolean>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0888 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0889
  * @tc.name gendtscpp_mix_ext_0889
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<string>>` → C++ `IterableIterator<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0889', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0889 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0890
  * @tc.name gendtscpp_mix_ext_0890
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<string>>` → C++ `IterableIterator<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0890', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0890 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0891
  * @tc.name gendtscpp_mix_ext_0891
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<string>>` → C++ `IterableIterator<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0891', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0891 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0892
  * @tc.name gendtscpp_mix_ext_0892
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<string>>` → C++ `IterableIterator<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0892', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0892 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0893
  * @tc.name gendtscpp_mix_ext_0893
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Array<string>>` → C++ `IterableIterator<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0893', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0893 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0894
  * @tc.name gendtscpp_mix_ext_0894
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0894', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0894 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0895
  * @tc.name gendtscpp_mix_ext_0895
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0895', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0895 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0896
  * @tc.name gendtscpp_mix_ext_0896
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0896', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0896 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0897
  * @tc.name gendtscpp_mix_ext_0897
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0897', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0897 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0898
  * @tc.name gendtscpp_mix_ext_0898
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0898', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0898 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0899
  * @tc.name gendtscpp_mix_ext_0899
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0899', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0899 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0900
  * @tc.name gendtscpp_mix_ext_0900
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0900', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0900 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0901
  * @tc.name gendtscpp_mix_ext_0901
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0901', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0901 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0902
  * @tc.name gendtscpp_mix_ext_0902
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0902', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0902 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0903
  * @tc.name gendtscpp_mix_ext_0903
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0903', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0903 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0904
  * @tc.name gendtscpp_mix_ext_0904
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0904', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0904 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0905
  * @tc.name gendtscpp_mix_ext_0905
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0905', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0905 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0906
  * @tc.name gendtscpp_mix_ext_0906
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0906', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0906 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0907
  * @tc.name gendtscpp_mix_ext_0907
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0907', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0907 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0908
  * @tc.name gendtscpp_mix_ext_0908
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0908', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0908 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0909
  * @tc.name gendtscpp_mix_ext_0909
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<boolean>` → C++ `std::set<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0909', () => {
    try {
      const params = [{ type: 'Set<boolean>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<bool>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0909 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0910
  * @tc.name gendtscpp_mix_ext_0910
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<string>` → C++ `std::set<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0910', () => {
    try {
      const params = [{ type: 'Set<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0910 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0911
  * @tc.name gendtscpp_mix_ext_0911
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<string>` → C++ `std::set<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0911', () => {
    try {
      const params = [{ type: 'Set<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0911 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0912
  * @tc.name gendtscpp_mix_ext_0912
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<string>` → C++ `std::set<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0912', () => {
    try {
      const params = [{ type: 'Set<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0912 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0913
  * @tc.name gendtscpp_mix_ext_0913
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<string>` → C++ `std::set<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0913', () => {
    try {
      const params = [{ type: 'Set<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0913 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0914
  * @tc.name gendtscpp_mix_ext_0914
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Set<string>` → C++ `std::set<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0914', () => {
    try {
      const params = [{ type: 'Set<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0914 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0915
  * @tc.name gendtscpp_mix_ext_0915
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0915', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0915 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0916
  * @tc.name gendtscpp_mix_ext_0916
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0916', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0916 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0917
  * @tc.name gendtscpp_mix_ext_0917
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0917', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0917 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0918
  * @tc.name gendtscpp_mix_ext_0918
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0918', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0918 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0919
  * @tc.name gendtscpp_mix_ext_0919
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0919', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0919 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0920
  * @tc.name gendtscpp_mix_ext_0920
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_0920', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0920 执行异常: ${String(err)}`);
    }
  });
});
