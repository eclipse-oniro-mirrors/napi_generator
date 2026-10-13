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
  * @tc.number h2dtscpp_tp_0771
  * @tc.name h2dtscpp_tp_0771
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0771', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0771 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0771 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0772
  * @tc.name h2dtscpp_tp_0772
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<string>>` → C++ `IterableIterator<Set<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0772', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<string>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0772 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0772 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0773
  * @tc.name h2dtscpp_tp_0773
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<string>>` → C++ `IterableIterator<Set<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0773', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<string>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0773 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0773 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0774
  * @tc.name h2dtscpp_tp_0774
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0774', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0774 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0774 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0775
  * @tc.name h2dtscpp_tp_0775
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0775', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0775 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0775 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0776
  * @tc.name h2dtscpp_tp_0776
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0776', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0776 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0776 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0777
  * @tc.name h2dtscpp_tp_0777
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0777', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0777 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0777 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0778
  * @tc.name h2dtscpp_tp_0778
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<Set<number>>` → C++ `IterableIterator<Set<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0778', () => {
    try {
      const params = [{ type: 'IterableIterator<Set<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<Set<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0778 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0778 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0779
  * @tc.name h2dtscpp_tp_0779
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0779', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0779 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0779 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0780
  * @tc.name h2dtscpp_tp_0780
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Date` → C++ `Date` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0780', () => {
    try {
      const params = [{ type: 'Date', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Date');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0780 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0780 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0781
  * @tc.name h2dtscpp_tp_0781
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0781', () => {
    try {
      const params = [{ type: 'string', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::string');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0781 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0781 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0782
  * @tc.name h2dtscpp_tp_0782
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0782', () => {
    try {
      const params = [{ type: 'string', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::string');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0782 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0782 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0783
  * @tc.name h2dtscpp_tp_0783
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0783', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0783 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0783 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0784
  * @tc.name h2dtscpp_tp_0784
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0784', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0784 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0784 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0785
  * @tc.name h2dtscpp_tp_0785
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0785', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0785 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0785 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0786
  * @tc.name h2dtscpp_tp_0786
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0786', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0786 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0786 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0787
  * @tc.name h2dtscpp_tp_0787
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0787', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0787 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0787 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0788
  * @tc.name h2dtscpp_tp_0788
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0788', () => {
    try {
      const params = [{ type: 'string', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::string');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0788 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0788 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0789
  * @tc.name h2dtscpp_tp_0789
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0789', () => {
    try {
      const params = [{ type: 'string', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::string');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0789 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0789 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0790
  * @tc.name h2dtscpp_tp_0790
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0790', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0790 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0790 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0791
  * @tc.name h2dtscpp_tp_0791
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0791', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0791 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0791 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0792
  * @tc.name h2dtscpp_tp_0792
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0792', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0792 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0792 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0793
  * @tc.name h2dtscpp_tp_0793
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0793', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0793 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0793 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0794
  * @tc.name h2dtscpp_tp_0794
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0794', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0794 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0794 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0795
  * @tc.name h2dtscpp_tp_0795
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0795', () => {
    try {
      const params = [{ type: 'string', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::string');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0795 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0795 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0796
  * @tc.name h2dtscpp_tp_0796
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0796', () => {
    try {
      const params = [{ type: 'string', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::string');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0796 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0796 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0797
  * @tc.name h2dtscpp_tp_0797
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0797', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0797 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0797 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0798
  * @tc.name h2dtscpp_tp_0798
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0798', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0798 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0798 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0799
  * @tc.name h2dtscpp_tp_0799
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0799', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0799 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0799 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0800
  * @tc.name h2dtscpp_tp_0800
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0800', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0800 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0800 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0801
  * @tc.name h2dtscpp_tp_0801
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0801', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0801 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0801 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0802
  * @tc.name h2dtscpp_tp_0802
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0802', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0802 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0802 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0803
  * @tc.name h2dtscpp_tp_0803
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `any` → C++ `std::any` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0803', () => {
    try {
      const params = [{ type: 'any', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::any');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0803 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0803 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0804
  * @tc.name h2dtscpp_tp_0804
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `any` → C++ `std::any` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0804', () => {
    try {
      const params = [{ type: 'any', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::any');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0804 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0804 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0805
  * @tc.name h2dtscpp_tp_0805
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `any` → C++ `std::any` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0805', () => {
    try {
      const params = [{ type: 'any', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::any');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0805 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0805 执行异常: ${String(err)}`);
    }
  });
});
