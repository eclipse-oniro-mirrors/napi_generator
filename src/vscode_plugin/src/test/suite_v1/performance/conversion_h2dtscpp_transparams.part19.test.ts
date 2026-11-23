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
import {
  parseFunction, parseClass, parseStruct, parseEnum, parseUnion,
} from '../../../parse/parsec';
import {
  getDtsFunction, getDtsClasses, getDtsStructs, getDtsEnum, getDtsUnions, genDtsFile,
} from '../../../gen/gendts';
import { transParseObj, transParameters } from '../../../gen/gendtscpp';
import {
  GenInfo, ParseObj, ClassObj, FuncObj, StructObj, EnumObj, UnionObj,
} from '../../../gen/datatype';

/** 性能硬性要求（总耗时，非单次平均）：
 * - parse/gen：同一输入执行 PARSE_LOOP 次，总耗时 < PARSE_TOTAL_MS
 * 禁止将循环降到 1～2 次；性能测试必须多次执行。
 */
const PARSE_LOOP = 10;
const PARSE_TOTAL_MS = 6000;

function measureElapsed(task: () => void): number {
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_H2DTSCPP_TransParams_Suite', function () {
  /**
  * @tc.number h2dtscpp_tp_0631
  * @tc.name h2dtscpp_tp_0631
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0631', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0631 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0631 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0632
  * @tc.name h2dtscpp_tp_0632
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<string>>` → C++ `IterableIterator<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0632', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0632 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0632 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0633
  * @tc.name h2dtscpp_tp_0633
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<string>>` → C++ `IterableIterator<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0633', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0633 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0633 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0634
  * @tc.name h2dtscpp_tp_0634
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0634', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0634 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0634 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0635
  * @tc.name h2dtscpp_tp_0635
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0635', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0635 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0635 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0636
  * @tc.name h2dtscpp_tp_0636
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0636', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0636 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0636 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0637
  * @tc.name h2dtscpp_tp_0637
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0637', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0637 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0637 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0638
  * @tc.name h2dtscpp_tp_0638
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0638', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0638 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0638 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0639
  * @tc.name h2dtscpp_tp_0639
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<string>` → C++ `std::vector<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0639', () => {
    try {
      const params = [{ type: 'Array<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0639 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0639 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0640
  * @tc.name h2dtscpp_tp_0640
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<string>` → C++ `std::vector<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0640', () => {
    try {
      const params = [{ type: 'Array<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0640 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0640 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0641
  * @tc.name h2dtscpp_tp_0641
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0641', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0641 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0641 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0642
  * @tc.name h2dtscpp_tp_0642
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0642', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0642 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0642 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0643
  * @tc.name h2dtscpp_tp_0643
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0643', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0643 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0643 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0644
  * @tc.name h2dtscpp_tp_0644
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0644', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0644 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0644 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0645
  * @tc.name h2dtscpp_tp_0645
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0645', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0645 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0645 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0646
  * @tc.name h2dtscpp_tp_0646
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<string>>` → C++ `IterableIterator<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0646', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0646 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0646 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0647
  * @tc.name h2dtscpp_tp_0647
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<string>>` → C++ `IterableIterator<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0647', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0647 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0647 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0648
  * @tc.name h2dtscpp_tp_0648
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0648', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0648 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0648 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0649
  * @tc.name h2dtscpp_tp_0649
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0649', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0649 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0649 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0650
  * @tc.name h2dtscpp_tp_0650
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0650', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0650 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0650 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0651
  * @tc.name h2dtscpp_tp_0651
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0651', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0651 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0651 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0652
  * @tc.name h2dtscpp_tp_0652
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0652', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0652 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0652 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0653
  * @tc.name h2dtscpp_tp_0653
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<string>` → C++ `std::vector<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0653', () => {
    try {
      const params = [{ type: 'Array<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0653 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0653 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0654
  * @tc.name h2dtscpp_tp_0654
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<string>` → C++ `std::vector<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0654', () => {
    try {
      const params = [{ type: 'Array<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0654 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0654 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0655
  * @tc.name h2dtscpp_tp_0655
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0655', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0655 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0655 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0656
  * @tc.name h2dtscpp_tp_0656
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0656', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0656 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0656 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0657
  * @tc.name h2dtscpp_tp_0657
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0657', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0657 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0657 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0658
  * @tc.name h2dtscpp_tp_0658
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0658', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0658 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0658 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0659
  * @tc.name h2dtscpp_tp_0659
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0659', () => {
    try {
      const params = [{ type: 'Array<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0659 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0659 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0660
  * @tc.name h2dtscpp_tp_0660
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<string>>` → C++ `IterableIterator<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0660', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0660 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0660 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0661
  * @tc.name h2dtscpp_tp_0661
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<string>>` → C++ `IterableIterator<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0661', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0661 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0661 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0662
  * @tc.name h2dtscpp_tp_0662
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0662', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0662 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0662 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0663
  * @tc.name h2dtscpp_tp_0663
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0663', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0663 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0663 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0664
  * @tc.name h2dtscpp_tp_0664
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0664', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0664 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0664 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0665
  * @tc.name h2dtscpp_tp_0665
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Array<number>>` → C++ `IterableIterator<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0665', () => {
    try {
      const params = [{ type: 'IterableIterator<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0665 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0665 执行异常: ${String(err)}`);
    }
  });
});
