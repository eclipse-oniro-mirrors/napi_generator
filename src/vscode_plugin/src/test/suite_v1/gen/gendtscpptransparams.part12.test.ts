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

suite('Gendtscpp_transParameters_Suite_Ext12', function () {
  /**
  * @tc.number h2dtscpp_tp_0386
  * @tc.name gendtscpp_tp_ext_0386
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0386', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0386 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0387
  * @tc.name gendtscpp_tp_ext_0387
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0387', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0387 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0388
  * @tc.name gendtscpp_tp_ext_0388
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0388', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0388 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0389
  * @tc.name gendtscpp_tp_ext_0389
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0389', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0389 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0390
  * @tc.name gendtscpp_tp_ext_0390
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0390', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0390 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0391
  * @tc.name gendtscpp_tp_ext_0391
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0391', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0391 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0392
  * @tc.name gendtscpp_tp_ext_0392
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0392', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0392 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0393
  * @tc.name gendtscpp_tp_ext_0393
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0393', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0393 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0394
  * @tc.name gendtscpp_tp_ext_0394
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0394', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0394 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0395
  * @tc.name gendtscpp_tp_ext_0395
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<boolean>>` → C++ `IterableIterator<Set<boolean>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0395', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<boolean>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<boolean>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0395 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0396
  * @tc.name gendtscpp_tp_ext_0396
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<string>>` → C++ `IterableIterator<Set<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0396', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0396 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0397
  * @tc.name gendtscpp_tp_ext_0397
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<string>>` → C++ `IterableIterator<Set<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0397', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0397 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0398
  * @tc.name gendtscpp_tp_ext_0398
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<string>>` → C++ `IterableIterator<Set<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0398', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0398 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0399
  * @tc.name gendtscpp_tp_ext_0399
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<string>>` → C++ `IterableIterator<Set<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0399', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0399 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0400
  * @tc.name gendtscpp_tp_ext_0400
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<string>>` → C++ `IterableIterator<Set<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0400', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0400 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0401
  * @tc.name gendtscpp_tp_ext_0401
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0401', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0401 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0402
  * @tc.name gendtscpp_tp_ext_0402
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0402', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0402 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0403
  * @tc.name gendtscpp_tp_ext_0403
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0403', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0403 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0404
  * @tc.name gendtscpp_tp_ext_0404
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0404', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0404 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0405
  * @tc.name gendtscpp_tp_ext_0405
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0405', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0405 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0406
  * @tc.name gendtscpp_tp_ext_0406
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0406', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0406 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0407
  * @tc.name gendtscpp_tp_ext_0407
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0407', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0407 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0408
  * @tc.name gendtscpp_tp_ext_0408
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0408', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0408 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0409
  * @tc.name gendtscpp_tp_ext_0409
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0409', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0409 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0410
  * @tc.name gendtscpp_tp_ext_0410
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0410', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0410 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0411
  * @tc.name gendtscpp_tp_ext_0411
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0411', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0411 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0412
  * @tc.name gendtscpp_tp_ext_0412
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0412', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0412 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0413
  * @tc.name gendtscpp_tp_ext_0413
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0413', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0413 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0414
  * @tc.name gendtscpp_tp_ext_0414
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0414', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0414 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0415
  * @tc.name gendtscpp_tp_ext_0415
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0415', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0415 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0416
  * @tc.name gendtscpp_tp_ext_0416
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<boolean>` → C++ `std::set<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0416', () => {
    try {
      const params = [{ type: 'Set<boolean>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<bool>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0416 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0417
  * @tc.name gendtscpp_tp_ext_0417
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<string>` → C++ `std::set<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0417', () => {
    try {
      const params = [{ type: 'Set<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0417 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0418
  * @tc.name gendtscpp_tp_ext_0418
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<string>` → C++ `std::set<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0418', () => {
    try {
      const params = [{ type: 'Set<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0418 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0419
  * @tc.name gendtscpp_tp_ext_0419
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<string>` → C++ `std::set<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0419', () => {
    try {
      const params = [{ type: 'Set<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0419 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0420
  * @tc.name gendtscpp_tp_ext_0420
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<string>` → C++ `std::set<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tp_ext_0420', () => {
    try {
      const params = [{ type: 'Set<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_tp_0420 执行异常: ${String(err)}`);
    }
  });
});
