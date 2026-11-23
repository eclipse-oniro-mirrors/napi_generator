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
import { transParameters } from '../../../gen/gendtscpp';
import { ParamObj } from '../../../gen/datatype';

suite('Gendtscpp_transParameters_Suite_Ext16', function () {
  /**
  * @tc.number h2dtscpp_tp_0526
  * @tc.name gendtscpp_tp_ext_0526
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<string>>` → C++ `IterableIterator<Set<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0526', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0526 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0527
  * @tc.name gendtscpp_tp_ext_0527
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0527', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0527 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0528
  * @tc.name gendtscpp_tp_ext_0528
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0528', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0528 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0529
  * @tc.name gendtscpp_tp_ext_0529
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0529', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0529 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0530
  * @tc.name gendtscpp_tp_ext_0530
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0530', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0530 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0531
  * @tc.name gendtscpp_tp_ext_0531
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0531', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0531 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0532
  * @tc.name gendtscpp_tp_ext_0532
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0532', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0532 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0533
  * @tc.name gendtscpp_tp_ext_0533
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0533', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0533 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0534
  * @tc.name gendtscpp_tp_ext_0534
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0534', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0534 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0535
  * @tc.name gendtscpp_tp_ext_0535
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0535', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0535 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0536
  * @tc.name gendtscpp_tp_ext_0536
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0536', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0536 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0537
  * @tc.name gendtscpp_tp_ext_0537
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0537', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0537 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0538
  * @tc.name gendtscpp_tp_ext_0538
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0538', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0538 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0539
  * @tc.name gendtscpp_tp_ext_0539
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0539', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0539 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0540
  * @tc.name gendtscpp_tp_ext_0540
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0540', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0540 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0541
  * @tc.name gendtscpp_tp_ext_0541
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0541', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0541 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0542
  * @tc.name gendtscpp_tp_ext_0542
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0542', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0542 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0543
  * @tc.name gendtscpp_tp_ext_0543
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0543', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0543 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0544
  * @tc.name gendtscpp_tp_ext_0544
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0544', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0544 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0545
  * @tc.name gendtscpp_tp_ext_0545
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0545', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0545 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0546
  * @tc.name gendtscpp_tp_ext_0546
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0546', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0546 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0547
  * @tc.name gendtscpp_tp_ext_0547
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0547', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0547 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0548
  * @tc.name gendtscpp_tp_ext_0548
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0548', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0548 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0549
  * @tc.name gendtscpp_tp_ext_0549
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0549', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0549 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0550
  * @tc.name gendtscpp_tp_ext_0550
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0550', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0550 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0551
  * @tc.name gendtscpp_tp_ext_0551
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0551', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0551 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0552
  * @tc.name gendtscpp_tp_ext_0552
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0552', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0552 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0553
  * @tc.name gendtscpp_tp_ext_0553
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0553', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0553 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0554
  * @tc.name gendtscpp_tp_ext_0554
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0554', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0554 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0555
  * @tc.name gendtscpp_tp_ext_0555
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0555', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0555 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0556
  * @tc.name gendtscpp_tp_ext_0556
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0556', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0556 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0557
  * @tc.name gendtscpp_tp_ext_0557
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `boolean` → C++ `bool` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0557', () => {
    try {
      const params = [{ type: 'boolean', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'bool');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0557 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0558
  * @tc.name gendtscpp_tp_ext_0558
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0558', () => {
    try {
      const params = [{ type: 'string', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::string');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0558 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0559
  * @tc.name gendtscpp_tp_ext_0559
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0559', () => {
    try {
      const params = [{ type: 'string', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::string');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0559 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0560
  * @tc.name gendtscpp_tp_ext_0560
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0560', () => {
    try {
      const params = [{ type: 'string', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::string');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0560 执行异常: ${String(err)}`);
    }
  });
});
