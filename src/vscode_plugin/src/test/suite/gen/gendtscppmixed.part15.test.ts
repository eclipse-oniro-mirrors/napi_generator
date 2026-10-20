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

suite('Gendtscpp_mixed_Suite_Ext15', function () {
  /**
  * @tc.number h2dtscpp_gen_1061
  * @tc.name gendtscpp_mix_ext_1061
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `IterableIterator<Set<string>>` → C++ `IterableIterator<Set<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1061', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1061 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1062
  * @tc.name gendtscpp_mix_ext_1062
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1062', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1062 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1063
  * @tc.name gendtscpp_mix_ext_1063
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1063', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1063 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1064
  * @tc.name gendtscpp_mix_ext_1064
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1064', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1064 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1065
  * @tc.name gendtscpp_mix_ext_1065
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1065', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1065 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1066
  * @tc.name gendtscpp_mix_ext_1066
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1066', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1066 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1067
  * @tc.name gendtscpp_mix_ext_1067
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1067', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1067 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1068
  * @tc.name gendtscpp_mix_ext_1068
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1068', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1068 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1069
  * @tc.name gendtscpp_mix_ext_1069
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1069', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1069 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1070
  * @tc.name gendtscpp_mix_ext_1070
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1070', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1070 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1071
  * @tc.name gendtscpp_mix_ext_1071
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1071', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1071 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1072
  * @tc.name gendtscpp_mix_ext_1072
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1072', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1072 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1073
  * @tc.name gendtscpp_mix_ext_1073
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1073', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1073 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1074
  * @tc.name gendtscpp_mix_ext_1074
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1074', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1074 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1075
  * @tc.name gendtscpp_mix_ext_1075
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1075', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1075 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1076
  * @tc.name gendtscpp_mix_ext_1076
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1076', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1076 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1077
  * @tc.name gendtscpp_mix_ext_1077
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1077', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1077 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1078
  * @tc.name gendtscpp_mix_ext_1078
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1078', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1078 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1079
  * @tc.name gendtscpp_mix_ext_1079
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1079', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1079 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1080
  * @tc.name gendtscpp_mix_ext_1080
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1080', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1080 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1081
  * @tc.name gendtscpp_mix_ext_1081
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1081', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1081 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1082
  * @tc.name gendtscpp_mix_ext_1082
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1082', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1082 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1083
  * @tc.name gendtscpp_mix_ext_1083
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1083', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1083 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1084
  * @tc.name gendtscpp_mix_ext_1084
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1084', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1084 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1085
  * @tc.name gendtscpp_mix_ext_1085
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1085', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1085 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1086
  * @tc.name gendtscpp_mix_ext_1086
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1086', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1086 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1087
  * @tc.name gendtscpp_mix_ext_1087
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1087', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1087 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1088
  * @tc.name gendtscpp_mix_ext_1088
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1088', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1089
  * @tc.name gendtscpp_mix_ext_1089
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1089', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1089 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1090
  * @tc.name gendtscpp_mix_ext_1090
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1090', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1090 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1091
  * @tc.name gendtscpp_mix_ext_1091
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1091', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1092
  * @tc.name gendtscpp_mix_ext_1092
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `boolean` → C++ `bool` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1092', () => {
    try {
      const params = [{ type: 'boolean', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'bool');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1093
  * @tc.name gendtscpp_mix_ext_1093
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1093', () => {
    try {
      const params = [{ type: 'string', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::string');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1094
  * @tc.name gendtscpp_mix_ext_1094
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1094', () => {
    try {
      const params = [{ type: 'string', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::string');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1094 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1095
  * @tc.name gendtscpp_mix_ext_1095
  * @tc.desc h2dtscpp transParameters：扩充-R7-交付 `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1095', () => {
    try {
      const params = [{ type: 'string', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::string');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_1095 执行异常: ${String(err)}`);
    }
  });
});
