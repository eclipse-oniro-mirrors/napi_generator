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
  * @tc.number h2dtscpp_gen_1446
  * @tc.name h2dtscpp_gen_1446
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<char32_t, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1446', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1446(std::array<char32_t, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1446(std::array<char32_t, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1446(std::array<char32_t, 10>::iterator v);`),
        classes: parseClass(`void r7sp1446(std::array<char32_t, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1446(std::array<char32_t, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1446 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1446 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1448
  * @tc.name h2dtscpp_gen_1448
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1448', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1448(std::deque<size_t> v);`),
        unions: parseUnion(`void r7sp1448(std::deque<size_t> v);`),
        structs: parseStruct(`void r7sp1448(std::deque<size_t> v);`),
        classes: parseClass(`void r7sp1448(std::deque<size_t> v);`),
        funcs: parseFunction(`void r7sp1448(std::deque<size_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1448 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1448 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1449
  * @tc.name h2dtscpp_gen_1449
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1449', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1449(std::deque<double> v);`),
        unions: parseUnion(`void r7sp1449(std::deque<double> v);`),
        structs: parseStruct(`void r7sp1449(std::deque<double> v);`),
        classes: parseClass(`void r7sp1449(std::deque<double> v);`),
        funcs: parseFunction(`void r7sp1449(std::deque<double> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1449 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1449 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1452
  * @tc.name h2dtscpp_gen_1452
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1452', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1452(std::deque<short> v);`),
        unions: parseUnion(`void r7sp1452(std::deque<short> v);`),
        structs: parseStruct(`void r7sp1452(std::deque<short> v);`),
        classes: parseClass(`void r7sp1452(std::deque<short> v);`),
        funcs: parseFunction(`void r7sp1452(std::deque<short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1452 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1452 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1453
  * @tc.name h2dtscpp_gen_1453
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<uint8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1453', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1453(std::deque<uint8_t> v);`),
        unions: parseUnion(`void r7sp1453(std::deque<uint8_t> v);`),
        structs: parseStruct(`void r7sp1453(std::deque<uint8_t> v);`),
        classes: parseClass(`void r7sp1453(std::deque<uint8_t> v);`),
        funcs: parseFunction(`void r7sp1453(std::deque<uint8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1453 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1453 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1454
  * @tc.name h2dtscpp_gen_1454
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1454', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1454(std::deque<uint16_t> v);`),
        unions: parseUnion(`void r7sp1454(std::deque<uint16_t> v);`),
        structs: parseStruct(`void r7sp1454(std::deque<uint16_t> v);`),
        classes: parseClass(`void r7sp1454(std::deque<uint16_t> v);`),
        funcs: parseFunction(`void r7sp1454(std::deque<uint16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1454 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1454 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1455
  * @tc.name h2dtscpp_gen_1455
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1455', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1455(std::deque<uint32_t> v);`),
        unions: parseUnion(`void r7sp1455(std::deque<uint32_t> v);`),
        structs: parseStruct(`void r7sp1455(std::deque<uint32_t> v);`),
        classes: parseClass(`void r7sp1455(std::deque<uint32_t> v);`),
        funcs: parseFunction(`void r7sp1455(std::deque<uint32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1455 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1455 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1456
  * @tc.name h2dtscpp_gen_1456
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1456', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1456(std::deque<uint64_t> v);`),
        unions: parseUnion(`void r7sp1456(std::deque<uint64_t> v);`),
        structs: parseStruct(`void r7sp1456(std::deque<uint64_t> v);`),
        classes: parseClass(`void r7sp1456(std::deque<uint64_t> v);`),
        funcs: parseFunction(`void r7sp1456(std::deque<uint64_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1456 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1456 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1457
  * @tc.name h2dtscpp_gen_1457
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1457', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1457(std::deque<int8_t> v);`),
        unions: parseUnion(`void r7sp1457(std::deque<int8_t> v);`),
        structs: parseStruct(`void r7sp1457(std::deque<int8_t> v);`),
        classes: parseClass(`void r7sp1457(std::deque<int8_t> v);`),
        funcs: parseFunction(`void r7sp1457(std::deque<int8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1457 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1457 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1458
  * @tc.name h2dtscpp_gen_1458
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1458', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1458(std::deque<int16_t> v);`),
        unions: parseUnion(`void r7sp1458(std::deque<int16_t> v);`),
        structs: parseStruct(`void r7sp1458(std::deque<int16_t> v);`),
        classes: parseClass(`void r7sp1458(std::deque<int16_t> v);`),
        funcs: parseFunction(`void r7sp1458(std::deque<int16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1458 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1458 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1459
  * @tc.name h2dtscpp_gen_1459
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1459', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1459(std::deque<int32_t> v);`),
        unions: parseUnion(`void r7sp1459(std::deque<int32_t> v);`),
        structs: parseStruct(`void r7sp1459(std::deque<int32_t> v);`),
        classes: parseClass(`void r7sp1459(std::deque<int32_t> v);`),
        funcs: parseFunction(`void r7sp1459(std::deque<int32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1459 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1459 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1460
  * @tc.name h2dtscpp_gen_1460
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<int64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1460', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1460(std::deque<int64_t> v);`),
        unions: parseUnion(`void r7sp1460(std::deque<int64_t> v);`),
        structs: parseStruct(`void r7sp1460(std::deque<int64_t> v);`),
        classes: parseClass(`void r7sp1460(std::deque<int64_t> v);`),
        funcs: parseFunction(`void r7sp1460(std::deque<int64_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1460 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1460 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1461
  * @tc.name h2dtscpp_gen_1461
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1461', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1461(std::deque<unsigned> v);`),
        unions: parseUnion(`void r7sp1461(std::deque<unsigned> v);`),
        structs: parseStruct(`void r7sp1461(std::deque<unsigned> v);`),
        classes: parseClass(`void r7sp1461(std::deque<unsigned> v);`),
        funcs: parseFunction(`void r7sp1461(std::deque<unsigned> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1461 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1461 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1462
  * @tc.name h2dtscpp_gen_1462
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1462', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1462(std::deque<bool> v);`),
        unions: parseUnion(`void r7sp1462(std::deque<bool> v);`),
        structs: parseStruct(`void r7sp1462(std::deque<bool> v);`),
        classes: parseClass(`void r7sp1462(std::deque<bool> v);`),
        funcs: parseFunction(`void r7sp1462(std::deque<bool> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1462 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1462 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1463
  * @tc.name h2dtscpp_gen_1463
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1463', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1463(std::deque<char> v);`),
        unions: parseUnion(`void r7sp1463(std::deque<char> v);`),
        structs: parseStruct(`void r7sp1463(std::deque<char> v);`),
        classes: parseClass(`void r7sp1463(std::deque<char> v);`),
        funcs: parseFunction(`void r7sp1463(std::deque<char> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1463 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1463 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1464
  * @tc.name h2dtscpp_gen_1464
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<wchar_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1464', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1464(std::deque<wchar_t> v);`),
        unions: parseUnion(`void r7sp1464(std::deque<wchar_t> v);`),
        structs: parseStruct(`void r7sp1464(std::deque<wchar_t> v);`),
        classes: parseClass(`void r7sp1464(std::deque<wchar_t> v);`),
        funcs: parseFunction(`void r7sp1464(std::deque<wchar_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1464 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1464 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1465
  * @tc.name h2dtscpp_gen_1465
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<char8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1465', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1465(std::deque<char8_t> v);`),
        unions: parseUnion(`void r7sp1465(std::deque<char8_t> v);`),
        structs: parseStruct(`void r7sp1465(std::deque<char8_t> v);`),
        classes: parseClass(`void r7sp1465(std::deque<char8_t> v);`),
        funcs: parseFunction(`void r7sp1465(std::deque<char8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1465 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1465 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1466
  * @tc.name h2dtscpp_gen_1466
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<char16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1466', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1466(std::deque<char16_t> v);`),
        unions: parseUnion(`void r7sp1466(std::deque<char16_t> v);`),
        structs: parseStruct(`void r7sp1466(std::deque<char16_t> v);`),
        classes: parseClass(`void r7sp1466(std::deque<char16_t> v);`),
        funcs: parseFunction(`void r7sp1466(std::deque<char16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1466 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1466 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1467
  * @tc.name h2dtscpp_gen_1467
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1467', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1467(std::deque<char32_t> v);`),
        unions: parseUnion(`void r7sp1467(std::deque<char32_t> v);`),
        structs: parseStruct(`void r7sp1467(std::deque<char32_t> v);`),
        classes: parseClass(`void r7sp1467(std::deque<char32_t> v);`),
        funcs: parseFunction(`void r7sp1467(std::deque<char32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1467 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1467 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1468
  * @tc.name h2dtscpp_gen_1468
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1468', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1468(std::deque<int>::iterator v);`),
        unions: parseUnion(`void r7sp1468(std::deque<int>::iterator v);`),
        structs: parseStruct(`void r7sp1468(std::deque<int>::iterator v);`),
        classes: parseClass(`void r7sp1468(std::deque<int>::iterator v);`),
        funcs: parseFunction(`void r7sp1468(std::deque<int>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1468 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1468 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1469
  * @tc.name h2dtscpp_gen_1469
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1469', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1469(std::deque<size_t>::iterator v);`),
        unions: parseUnion(`void r7sp1469(std::deque<size_t>::iterator v);`),
        structs: parseStruct(`void r7sp1469(std::deque<size_t>::iterator v);`),
        classes: parseClass(`void r7sp1469(std::deque<size_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1469(std::deque<size_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1469 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1469 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1470
  * @tc.name h2dtscpp_gen_1470
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<double>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1470', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1470(std::deque<double>::iterator v);`),
        unions: parseUnion(`void r7sp1470(std::deque<double>::iterator v);`),
        structs: parseStruct(`void r7sp1470(std::deque<double>::iterator v);`),
        classes: parseClass(`void r7sp1470(std::deque<double>::iterator v);`),
        funcs: parseFunction(`void r7sp1470(std::deque<double>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1470 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1470 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1471
  * @tc.name h2dtscpp_gen_1471
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<float>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1471', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1471(std::deque<float>::iterator v);`),
        unions: parseUnion(`void r7sp1471(std::deque<float>::iterator v);`),
        structs: parseStruct(`void r7sp1471(std::deque<float>::iterator v);`),
        classes: parseClass(`void r7sp1471(std::deque<float>::iterator v);`),
        funcs: parseFunction(`void r7sp1471(std::deque<float>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1471 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1471 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1472
  * @tc.name h2dtscpp_gen_1472
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1472', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1472(std::deque<long>::iterator v);`),
        unions: parseUnion(`void r7sp1472(std::deque<long>::iterator v);`),
        structs: parseStruct(`void r7sp1472(std::deque<long>::iterator v);`),
        classes: parseClass(`void r7sp1472(std::deque<long>::iterator v);`),
        funcs: parseFunction(`void r7sp1472(std::deque<long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1472 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1472 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1473
  * @tc.name h2dtscpp_gen_1473
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1473', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1473(std::deque<short>::iterator v);`),
        unions: parseUnion(`void r7sp1473(std::deque<short>::iterator v);`),
        structs: parseStruct(`void r7sp1473(std::deque<short>::iterator v);`),
        classes: parseClass(`void r7sp1473(std::deque<short>::iterator v);`),
        funcs: parseFunction(`void r7sp1473(std::deque<short>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1473 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1473 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1474
  * @tc.name h2dtscpp_gen_1474
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<uint8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1474', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1474(std::deque<uint8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1474(std::deque<uint8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1474(std::deque<uint8_t>::iterator v);`),
        classes: parseClass(`void r7sp1474(std::deque<uint8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1474(std::deque<uint8_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1474 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1474 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1475
  * @tc.name h2dtscpp_gen_1475
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<uint16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1475', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1475(std::deque<uint16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1475(std::deque<uint16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1475(std::deque<uint16_t>::iterator v);`),
        classes: parseClass(`void r7sp1475(std::deque<uint16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1475(std::deque<uint16_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1475 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1475 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1476
  * @tc.name h2dtscpp_gen_1476
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<uint32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1476', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1476(std::deque<uint32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1476(std::deque<uint32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1476(std::deque<uint32_t>::iterator v);`),
        classes: parseClass(`void r7sp1476(std::deque<uint32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1476(std::deque<uint32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1476 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1476 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1477
  * @tc.name h2dtscpp_gen_1477
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<uint64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1477', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1477(std::deque<uint64_t>::iterator v);`),
        unions: parseUnion(`void r7sp1477(std::deque<uint64_t>::iterator v);`),
        structs: parseStruct(`void r7sp1477(std::deque<uint64_t>::iterator v);`),
        classes: parseClass(`void r7sp1477(std::deque<uint64_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1477(std::deque<uint64_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1477 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1477 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1478
  * @tc.name h2dtscpp_gen_1478
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<int8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1478', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1478(std::deque<int8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1478(std::deque<int8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1478(std::deque<int8_t>::iterator v);`),
        classes: parseClass(`void r7sp1478(std::deque<int8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1478(std::deque<int8_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1478 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1478 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1479
  * @tc.name h2dtscpp_gen_1479
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<int16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1479', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1479(std::deque<int16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1479(std::deque<int16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1479(std::deque<int16_t>::iterator v);`),
        classes: parseClass(`void r7sp1479(std::deque<int16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1479(std::deque<int16_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1479 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1479 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1480
  * @tc.name h2dtscpp_gen_1480
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<int32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1480', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1480(std::deque<int32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1480(std::deque<int32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1480(std::deque<int32_t>::iterator v);`),
        classes: parseClass(`void r7sp1480(std::deque<int32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1480(std::deque<int32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1480 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1480 执行异常: ${String(err)}`);
    }
  });
});
