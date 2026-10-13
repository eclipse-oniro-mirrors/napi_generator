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

suite('Performance_H2DTSCPP_Mixed_Suite', function () {
  /**
  * @tc.number h2dtscpp_gen_1936
  * @tc.name h2dtscpp_gen_1936
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `never` → C++ `never` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1936', () => {
    try {
      const params = [{ type: 'never', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'never');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1936 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1936 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1937
  * @tc.name h2dtscpp_gen_1937
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `object` → C++ `std::any` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1937', () => {
    try {
      const params = [{ type: 'object', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
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
        `h2dtscpp_gen_1937 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1937 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1938
  * @tc.name h2dtscpp_gen_1938
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `symbol` → C++ `symbol` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1938', () => {
    try {
      const params = [{ type: 'symbol', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'symbol');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1938 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1938 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1939
  * @tc.name h2dtscpp_gen_1939
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `ReadonlyArray<number>` → C++ `ReadonlyArray<number>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1939', () => {
    try {
      const params = [{ type: 'ReadonlyArray<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'ReadonlyArray<number>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1939 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1939 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1940
  * @tc.name h2dtscpp_gen_1940
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `Record<string, number>` → C++ `Record<string, number>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1940', () => {
    try {
      const params = [{ type: 'Record<string, number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Record<string, number>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1940 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1940 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1941
  * @tc.name h2dtscpp_gen_1941
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `Partial<number>` → C++ `Partial<number>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1941', () => {
    try {
      const params = [{ type: 'Partial<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Partial<number>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1941 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1941 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1942
  * @tc.name h2dtscpp_gen_1942
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `[number, string]` → C++ `[number, string]` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1942', () => {
    try {
      const params = [{ type: '[number, string]', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, '[number, string]');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1942 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1942 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1943
  * @tc.name h2dtscpp_gen_1943
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `number | string | boolean` → C++ `number | string | boolean` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1943', () => {
    try {
      const params = [{ type: 'number | string | boolean', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'number | string | boolean');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1943 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1943 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1944
  * @tc.name h2dtscpp_gen_1944
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `Array<Promise<number>>` → C++ `Array<Promise<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1944', () => {
    try {
      const params = [{ type: 'Array<Promise<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Array<Promise<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1944 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1944 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1945
  * @tc.name h2dtscpp_gen_1945
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `Map<string, boolean>` → C++ `std::map<std::string, bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1945', () => {
    try {
      const params = [{ type: 'Map<string, boolean>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::map<std::string, bool>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1945 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1945 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1946
  * @tc.name h2dtscpp_gen_1946
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `Set<bigint>` → C++ `Set<bigint>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1946', () => {
    try {
      const params = [{ type: 'Set<bigint>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Set<bigint>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1946 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1946 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1947
  * @tc.name h2dtscpp_gen_1947
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `IterableIterator<string>` → C++ `IterableIterator<string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1947', () => {
    try {
      const params = [{ type: 'IterableIterator<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<string>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1947 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1947 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1948
  * @tc.name h2dtscpp_gen_1948
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `Promise<Array<number>>` → C++ `Promise<Array<number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1948', () => {
    try {
      const params = [{ type: 'Promise<Array<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Promise<Array<number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1948 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1948 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1949
  * @tc.name h2dtscpp_gen_1949
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `Array<Map<string, number>>` → C++ `Array<Map<string, number>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1949', () => {
    try {
      const params = [{ type: 'Array<Map<string, number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Array<Map<string, number>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1949 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1949 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1950
  * @tc.name h2dtscpp_gen_1950
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `null` → C++ `null` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1950', () => {
    try {
      const params = [{ type: 'null', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'null');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1950 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1950 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1951
  * @tc.name h2dtscpp_gen_1951
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `undefined` → C++ `undefined` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1951', () => {
    try {
      const params = [{ type: 'undefined', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'undefined');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1951 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1951 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1952
  * @tc.name h2dtscpp_gen_1952
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `any` → C++ `std::any` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1952', () => {
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
        `h2dtscpp_gen_1952 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1952 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1953
  * @tc.name h2dtscpp_gen_1953
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `string | null` → C++ `string | null` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1953', () => {
    try {
      const params = [{ type: 'string | null', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'string | null');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1953 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1953 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1954
  * @tc.name h2dtscpp_gen_1954
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `number | undefined` → C++ `number | undefined` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1954', () => {
    try {
      const params = [{ type: 'number | undefined', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'number | undefined');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1954 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1954 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1955
  * @tc.name h2dtscpp_gen_1955
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `Array<Array<string>>` → C++ `Array<Array<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1955', () => {
    try {
      const params = [{ type: 'Array<Array<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Array<Array<string>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1955 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1955 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1956
  * @tc.name h2dtscpp_gen_1956
  * @tc.desc h2dtscpp transParameters：扩充-R5 TS 类型 `Map<number, Set<string>>` → C++ `Map<number, Set<string>>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1956', () => {
    try {
      const params = [{ type: 'Map<number, Set<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Map<number, Set<string>>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1956 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1956 执行异常: ${String(err)}`);
    }
  });
});
