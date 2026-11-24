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
  * @tc.number h2dtscpp_gen_1551
  * @tc.name h2dtscpp_gen_1551
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1551', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1551(std::forward_list<char32_t> v);`),
        unions: parseUnion(`void r7sp1551(std::forward_list<char32_t> v);`),
        structs: parseStruct(`void r7sp1551(std::forward_list<char32_t> v);`),
        classes: parseClass(`void r7sp1551(std::forward_list<char32_t> v);`),
        funcs: parseFunction(`void r7sp1551(std::forward_list<char32_t> v);`),
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
        `h2dtscpp_gen_1551 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1551 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1552
  * @tc.name h2dtscpp_gen_1552
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1552', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1552(std::forward_list<int>::iterator v);`),
        unions: parseUnion(`void r7sp1552(std::forward_list<int>::iterator v);`),
        structs: parseStruct(`void r7sp1552(std::forward_list<int>::iterator v);`),
        classes: parseClass(`void r7sp1552(std::forward_list<int>::iterator v);`),
        funcs: parseFunction(`void r7sp1552(std::forward_list<int>::iterator v);`),
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
        `h2dtscpp_gen_1552 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1552 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1553
  * @tc.name h2dtscpp_gen_1553
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1553', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1553(std::forward_list<size_t>::iterator v);`),
        unions: parseUnion(`void r7sp1553(std::forward_list<size_t>::iterator v);`),
        structs: parseStruct(`void r7sp1553(std::forward_list<size_t>::iterator v);`),
        classes: parseClass(`void r7sp1553(std::forward_list<size_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1553(std::forward_list<size_t>::iterator v);`),
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
        `h2dtscpp_gen_1553 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1553 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1554
  * @tc.name h2dtscpp_gen_1554
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<double>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1554', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1554(std::forward_list<double>::iterator v);`),
        unions: parseUnion(`void r7sp1554(std::forward_list<double>::iterator v);`),
        structs: parseStruct(`void r7sp1554(std::forward_list<double>::iterator v);`),
        classes: parseClass(`void r7sp1554(std::forward_list<double>::iterator v);`),
        funcs: parseFunction(`void r7sp1554(std::forward_list<double>::iterator v);`),
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
        `h2dtscpp_gen_1554 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1554 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1555
  * @tc.name h2dtscpp_gen_1555
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<float>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1555', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1555(std::forward_list<float>::iterator v);`),
        unions: parseUnion(`void r7sp1555(std::forward_list<float>::iterator v);`),
        structs: parseStruct(`void r7sp1555(std::forward_list<float>::iterator v);`),
        classes: parseClass(`void r7sp1555(std::forward_list<float>::iterator v);`),
        funcs: parseFunction(`void r7sp1555(std::forward_list<float>::iterator v);`),
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
        `h2dtscpp_gen_1555 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1555 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1556
  * @tc.name h2dtscpp_gen_1556
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1556', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1556(std::forward_list<long>::iterator v);`),
        unions: parseUnion(`void r7sp1556(std::forward_list<long>::iterator v);`),
        structs: parseStruct(`void r7sp1556(std::forward_list<long>::iterator v);`),
        classes: parseClass(`void r7sp1556(std::forward_list<long>::iterator v);`),
        funcs: parseFunction(`void r7sp1556(std::forward_list<long>::iterator v);`),
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
        `h2dtscpp_gen_1556 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1556 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1557
  * @tc.name h2dtscpp_gen_1557
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1557', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1557(std::forward_list<short>::iterator v);`),
        unions: parseUnion(`void r7sp1557(std::forward_list<short>::iterator v);`),
        structs: parseStruct(`void r7sp1557(std::forward_list<short>::iterator v);`),
        classes: parseClass(`void r7sp1557(std::forward_list<short>::iterator v);`),
        funcs: parseFunction(`void r7sp1557(std::forward_list<short>::iterator v);`),
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
        `h2dtscpp_gen_1557 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1557 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1558
  * @tc.name h2dtscpp_gen_1558
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<uint8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1558', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1558(std::forward_list<uint8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1558(std::forward_list<uint8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1558(std::forward_list<uint8_t>::iterator v);`),
        classes: parseClass(`void r7sp1558(std::forward_list<uint8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1558(std::forward_list<uint8_t>::iterator v);`),
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
        `h2dtscpp_gen_1558 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1558 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1559
  * @tc.name h2dtscpp_gen_1559
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<uint16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1559', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1559(std::forward_list<uint16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1559(std::forward_list<uint16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1559(std::forward_list<uint16_t>::iterator v);`),
        classes: parseClass(`void r7sp1559(std::forward_list<uint16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1559(std::forward_list<uint16_t>::iterator v);`),
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
        `h2dtscpp_gen_1559 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1559 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1560
  * @tc.name h2dtscpp_gen_1560
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<uint32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1560', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1560(std::forward_list<uint32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1560(std::forward_list<uint32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1560(std::forward_list<uint32_t>::iterator v);`),
        classes: parseClass(`void r7sp1560(std::forward_list<uint32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1560(std::forward_list<uint32_t>::iterator v);`),
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
        `h2dtscpp_gen_1560 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1560 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1561
  * @tc.name h2dtscpp_gen_1561
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<uint64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1561', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1561(std::forward_list<uint64_t>::iterator v);`),
        unions: parseUnion(`void r7sp1561(std::forward_list<uint64_t>::iterator v);`),
        structs: parseStruct(`void r7sp1561(std::forward_list<uint64_t>::iterator v);`),
        classes: parseClass(`void r7sp1561(std::forward_list<uint64_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1561(std::forward_list<uint64_t>::iterator v);`),
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
        `h2dtscpp_gen_1561 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1561 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1562
  * @tc.name h2dtscpp_gen_1562
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<int8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1562', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1562(std::forward_list<int8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1562(std::forward_list<int8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1562(std::forward_list<int8_t>::iterator v);`),
        classes: parseClass(`void r7sp1562(std::forward_list<int8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1562(std::forward_list<int8_t>::iterator v);`),
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
        `h2dtscpp_gen_1562 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1562 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1563
  * @tc.name h2dtscpp_gen_1563
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<int16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1563', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1563(std::forward_list<int16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1563(std::forward_list<int16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1563(std::forward_list<int16_t>::iterator v);`),
        classes: parseClass(`void r7sp1563(std::forward_list<int16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1563(std::forward_list<int16_t>::iterator v);`),
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
        `h2dtscpp_gen_1563 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1563 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1564
  * @tc.name h2dtscpp_gen_1564
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<int32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1564', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1564(std::forward_list<int32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1564(std::forward_list<int32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1564(std::forward_list<int32_t>::iterator v);`),
        classes: parseClass(`void r7sp1564(std::forward_list<int32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1564(std::forward_list<int32_t>::iterator v);`),
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
        `h2dtscpp_gen_1564 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1564 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1565
  * @tc.name h2dtscpp_gen_1565
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<int64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1565', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1565(std::forward_list<int64_t>::iterator v);`),
        unions: parseUnion(`void r7sp1565(std::forward_list<int64_t>::iterator v);`),
        structs: parseStruct(`void r7sp1565(std::forward_list<int64_t>::iterator v);`),
        classes: parseClass(`void r7sp1565(std::forward_list<int64_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1565(std::forward_list<int64_t>::iterator v);`),
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
        `h2dtscpp_gen_1565 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1565 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1566
  * @tc.name h2dtscpp_gen_1566
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<unsigned>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1566', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1566(std::forward_list<unsigned>::iterator v);`),
        unions: parseUnion(`void r7sp1566(std::forward_list<unsigned>::iterator v);`),
        structs: parseStruct(`void r7sp1566(std::forward_list<unsigned>::iterator v);`),
        classes: parseClass(`void r7sp1566(std::forward_list<unsigned>::iterator v);`),
        funcs: parseFunction(`void r7sp1566(std::forward_list<unsigned>::iterator v);`),
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
        `h2dtscpp_gen_1566 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1566 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1567
  * @tc.name h2dtscpp_gen_1567
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1567', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1567(std::forward_list<bool>::iterator v);`),
        unions: parseUnion(`void r7sp1567(std::forward_list<bool>::iterator v);`),
        structs: parseStruct(`void r7sp1567(std::forward_list<bool>::iterator v);`),
        classes: parseClass(`void r7sp1567(std::forward_list<bool>::iterator v);`),
        funcs: parseFunction(`void r7sp1567(std::forward_list<bool>::iterator v);`),
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
        `h2dtscpp_gen_1567 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1567 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1568
  * @tc.name h2dtscpp_gen_1568
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1568', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1568(std::forward_list<char>::iterator v);`),
        unions: parseUnion(`void r7sp1568(std::forward_list<char>::iterator v);`),
        structs: parseStruct(`void r7sp1568(std::forward_list<char>::iterator v);`),
        classes: parseClass(`void r7sp1568(std::forward_list<char>::iterator v);`),
        funcs: parseFunction(`void r7sp1568(std::forward_list<char>::iterator v);`),
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
        `h2dtscpp_gen_1568 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1568 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1569
  * @tc.name h2dtscpp_gen_1569
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<wchar_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1569', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1569(std::forward_list<wchar_t>::iterator v);`),
        unions: parseUnion(`void r7sp1569(std::forward_list<wchar_t>::iterator v);`),
        structs: parseStruct(`void r7sp1569(std::forward_list<wchar_t>::iterator v);`),
        classes: parseClass(`void r7sp1569(std::forward_list<wchar_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1569(std::forward_list<wchar_t>::iterator v);`),
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
        `h2dtscpp_gen_1569 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1569 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1570
  * @tc.name h2dtscpp_gen_1570
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<char8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1570', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1570(std::forward_list<char8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1570(std::forward_list<char8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1570(std::forward_list<char8_t>::iterator v);`),
        classes: parseClass(`void r7sp1570(std::forward_list<char8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1570(std::forward_list<char8_t>::iterator v);`),
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
        `h2dtscpp_gen_1570 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1570 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1571
  * @tc.name h2dtscpp_gen_1571
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<char16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1571', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1571(std::forward_list<char16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1571(std::forward_list<char16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1571(std::forward_list<char16_t>::iterator v);`),
        classes: parseClass(`void r7sp1571(std::forward_list<char16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1571(std::forward_list<char16_t>::iterator v);`),
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
        `h2dtscpp_gen_1571 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1571 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1572
  * @tc.name h2dtscpp_gen_1572
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<char32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1572', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1572(std::forward_list<char32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1572(std::forward_list<char32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1572(std::forward_list<char32_t>::iterator v);`),
        classes: parseClass(`void r7sp1572(std::forward_list<char32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1572(std::forward_list<char32_t>::iterator v);`),
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
        `h2dtscpp_gen_1572 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1572 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1574
  * @tc.name h2dtscpp_gen_1574
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1574', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1574(std::stack<size_t> v);`),
        unions: parseUnion(`void r7sp1574(std::stack<size_t> v);`),
        structs: parseStruct(`void r7sp1574(std::stack<size_t> v);`),
        classes: parseClass(`void r7sp1574(std::stack<size_t> v);`),
        funcs: parseFunction(`void r7sp1574(std::stack<size_t> v);`),
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
        `h2dtscpp_gen_1574 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1574 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1576
  * @tc.name h2dtscpp_gen_1576
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<float>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1576', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1576(std::stack<float> v);`),
        unions: parseUnion(`void r7sp1576(std::stack<float> v);`),
        structs: parseStruct(`void r7sp1576(std::stack<float> v);`),
        classes: parseClass(`void r7sp1576(std::stack<float> v);`),
        funcs: parseFunction(`void r7sp1576(std::stack<float> v);`),
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
        `h2dtscpp_gen_1576 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1576 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1577
  * @tc.name h2dtscpp_gen_1577
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1577', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1577(std::stack<long> v);`),
        unions: parseUnion(`void r7sp1577(std::stack<long> v);`),
        structs: parseStruct(`void r7sp1577(std::stack<long> v);`),
        classes: parseClass(`void r7sp1577(std::stack<long> v);`),
        funcs: parseFunction(`void r7sp1577(std::stack<long> v);`),
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
        `h2dtscpp_gen_1577 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1577 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1578
  * @tc.name h2dtscpp_gen_1578
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1578', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1578(std::stack<short> v);`),
        unions: parseUnion(`void r7sp1578(std::stack<short> v);`),
        structs: parseStruct(`void r7sp1578(std::stack<short> v);`),
        classes: parseClass(`void r7sp1578(std::stack<short> v);`),
        funcs: parseFunction(`void r7sp1578(std::stack<short> v);`),
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
        `h2dtscpp_gen_1578 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1578 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1579
  * @tc.name h2dtscpp_gen_1579
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<uint8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1579', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1579(std::stack<uint8_t> v);`),
        unions: parseUnion(`void r7sp1579(std::stack<uint8_t> v);`),
        structs: parseStruct(`void r7sp1579(std::stack<uint8_t> v);`),
        classes: parseClass(`void r7sp1579(std::stack<uint8_t> v);`),
        funcs: parseFunction(`void r7sp1579(std::stack<uint8_t> v);`),
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
        `h2dtscpp_gen_1579 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1579 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1580
  * @tc.name h2dtscpp_gen_1580
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1580', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1580(std::stack<uint16_t> v);`),
        unions: parseUnion(`void r7sp1580(std::stack<uint16_t> v);`),
        structs: parseStruct(`void r7sp1580(std::stack<uint16_t> v);`),
        classes: parseClass(`void r7sp1580(std::stack<uint16_t> v);`),
        funcs: parseFunction(`void r7sp1580(std::stack<uint16_t> v);`),
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
        `h2dtscpp_gen_1580 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1580 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1581
  * @tc.name h2dtscpp_gen_1581
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1581', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1581(std::stack<uint32_t> v);`),
        unions: parseUnion(`void r7sp1581(std::stack<uint32_t> v);`),
        structs: parseStruct(`void r7sp1581(std::stack<uint32_t> v);`),
        classes: parseClass(`void r7sp1581(std::stack<uint32_t> v);`),
        funcs: parseFunction(`void r7sp1581(std::stack<uint32_t> v);`),
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
        `h2dtscpp_gen_1581 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1581 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1582
  * @tc.name h2dtscpp_gen_1582
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1582', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1582(std::stack<uint64_t> v);`),
        unions: parseUnion(`void r7sp1582(std::stack<uint64_t> v);`),
        structs: parseStruct(`void r7sp1582(std::stack<uint64_t> v);`),
        classes: parseClass(`void r7sp1582(std::stack<uint64_t> v);`),
        funcs: parseFunction(`void r7sp1582(std::stack<uint64_t> v);`),
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
        `h2dtscpp_gen_1582 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1582 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1583
  * @tc.name h2dtscpp_gen_1583
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1583', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1583(std::stack<int8_t> v);`),
        unions: parseUnion(`void r7sp1583(std::stack<int8_t> v);`),
        structs: parseStruct(`void r7sp1583(std::stack<int8_t> v);`),
        classes: parseClass(`void r7sp1583(std::stack<int8_t> v);`),
        funcs: parseFunction(`void r7sp1583(std::stack<int8_t> v);`),
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
        `h2dtscpp_gen_1583 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1583 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1584
  * @tc.name h2dtscpp_gen_1584
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1584', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1584(std::stack<int16_t> v);`),
        unions: parseUnion(`void r7sp1584(std::stack<int16_t> v);`),
        structs: parseStruct(`void r7sp1584(std::stack<int16_t> v);`),
        classes: parseClass(`void r7sp1584(std::stack<int16_t> v);`),
        funcs: parseFunction(`void r7sp1584(std::stack<int16_t> v);`),
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
        `h2dtscpp_gen_1584 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1584 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1585
  * @tc.name h2dtscpp_gen_1585
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1585', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1585(std::stack<int32_t> v);`),
        unions: parseUnion(`void r7sp1585(std::stack<int32_t> v);`),
        structs: parseStruct(`void r7sp1585(std::stack<int32_t> v);`),
        classes: parseClass(`void r7sp1585(std::stack<int32_t> v);`),
        funcs: parseFunction(`void r7sp1585(std::stack<int32_t> v);`),
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
        `h2dtscpp_gen_1585 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1585 执行异常: ${String(err)}`);
    }
  });
});
