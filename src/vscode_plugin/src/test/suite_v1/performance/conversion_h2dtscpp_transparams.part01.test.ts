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
  * @tc.number h2dtscpp_tp_0001
  * @tc.name h2dtscpp_tp_0001
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0001', () => {
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
        `h2dtscpp_tp_0001 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0002
  * @tc.name h2dtscpp_tp_0002
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0002', () => {
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
        `h2dtscpp_tp_0002 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0003
  * @tc.name h2dtscpp_tp_0003
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0003', () => {
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
        `h2dtscpp_tp_0003 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0004
  * @tc.name h2dtscpp_tp_0004
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0004', () => {
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
        `h2dtscpp_tp_0004 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0005
  * @tc.name h2dtscpp_tp_0005
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0005', () => {
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
        `h2dtscpp_tp_0005 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0006
  * @tc.name h2dtscpp_tp_0006
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0006', () => {
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
        `h2dtscpp_tp_0006 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0007
  * @tc.name h2dtscpp_tp_0007
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0007', () => {
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
        `h2dtscpp_tp_0007 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0008
  * @tc.name h2dtscpp_tp_0008
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0008', () => {
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
        `h2dtscpp_tp_0008 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0009
  * @tc.name h2dtscpp_tp_0009
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0009', () => {
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
        `h2dtscpp_tp_0009 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0010
  * @tc.name h2dtscpp_tp_0010
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0010', () => {
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
        `h2dtscpp_tp_0010 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0011
  * @tc.name h2dtscpp_tp_0011
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0011', () => {
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
        `h2dtscpp_tp_0011 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0012
  * @tc.name h2dtscpp_tp_0012
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0012', () => {
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
        `h2dtscpp_tp_0012 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0013
  * @tc.name h2dtscpp_tp_0013
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0013', () => {
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
        `h2dtscpp_tp_0013 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0014
  * @tc.name h2dtscpp_tp_0014
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0014', () => {
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
        `h2dtscpp_tp_0014 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0014 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0015
  * @tc.name h2dtscpp_tp_0015
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `number` → C++ `double` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0015', () => {
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
        `h2dtscpp_tp_0015 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0016
  * @tc.name h2dtscpp_tp_0016
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `boolean` → C++ `bool` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0016', () => {
    try {
      const params = [{ type: 'boolean', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'bool');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tp_0016 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0017
  * @tc.name h2dtscpp_tp_0017
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0017', () => {
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
        `h2dtscpp_tp_0017 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0018
  * @tc.name h2dtscpp_tp_0018
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0018', () => {
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
        `h2dtscpp_tp_0018 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0019
  * @tc.name h2dtscpp_tp_0019
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0019', () => {
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
        `h2dtscpp_tp_0019 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0020
  * @tc.name h2dtscpp_tp_0020
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0020', () => {
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
        `h2dtscpp_tp_0020 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0020 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0021
  * @tc.name h2dtscpp_tp_0021
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0021', () => {
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
        `h2dtscpp_tp_0021 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0021 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0022
  * @tc.name h2dtscpp_tp_0022
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `IterableIterator<string>` → C++ `IterableIterator<string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0022', () => {
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
        `h2dtscpp_tp_0022 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0022 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0023
  * @tc.name h2dtscpp_tp_0023
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0023', () => {
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
        `h2dtscpp_tp_0023 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0023 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0024
  * @tc.name h2dtscpp_tp_0024
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0024', () => {
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
        `h2dtscpp_tp_0024 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0024 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0025
  * @tc.name h2dtscpp_tp_0025
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0025', () => {
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
        `h2dtscpp_tp_0025 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0026
  * @tc.name h2dtscpp_tp_0026
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0026', () => {
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
        `h2dtscpp_tp_0026 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0026 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0027
  * @tc.name h2dtscpp_tp_0027
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0027', () => {
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
        `h2dtscpp_tp_0027 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0027 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0028
  * @tc.name h2dtscpp_tp_0028
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0028', () => {
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
        `h2dtscpp_tp_0028 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0029
  * @tc.name h2dtscpp_tp_0029
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0029', () => {
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
        `h2dtscpp_tp_0029 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0029 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0030
  * @tc.name h2dtscpp_tp_0030
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0030', () => {
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
        `h2dtscpp_tp_0030 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0031
  * @tc.name h2dtscpp_tp_0031
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0031', () => {
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
        `h2dtscpp_tp_0031 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0031 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0032
  * @tc.name h2dtscpp_tp_0032
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0032', () => {
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
        `h2dtscpp_tp_0032 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0033
  * @tc.name h2dtscpp_tp_0033
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0033', () => {
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
        `h2dtscpp_tp_0033 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0034
  * @tc.name h2dtscpp_tp_0034
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0034', () => {
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
        `h2dtscpp_tp_0034 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tp_0035
  * @tc.name h2dtscpp_tp_0035
  * @tc.desc h2dtscpp transParameters：扩充-R8-transTskey `Array<number>` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tp_0035', () => {
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
        `h2dtscpp_tp_0035 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tp_0035 执行异常: ${String(err)}`);
    }
  });
});
