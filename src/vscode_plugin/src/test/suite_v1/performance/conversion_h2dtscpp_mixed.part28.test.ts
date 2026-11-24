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
  * @tc.number h2dtscpp_gen_1516
  * @tc.name h2dtscpp_gen_1516
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<uint8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1516', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1516(std::list<uint8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1516(std::list<uint8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1516(std::list<uint8_t>::iterator v);`),
        classes: parseClass(`void r7sp1516(std::list<uint8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1516(std::list<uint8_t>::iterator v);`),
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
        `h2dtscpp_gen_1516 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1516 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1517
  * @tc.name h2dtscpp_gen_1517
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<uint16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1517', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1517(std::list<uint16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1517(std::list<uint16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1517(std::list<uint16_t>::iterator v);`),
        classes: parseClass(`void r7sp1517(std::list<uint16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1517(std::list<uint16_t>::iterator v);`),
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
        `h2dtscpp_gen_1517 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1517 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1518
  * @tc.name h2dtscpp_gen_1518
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<uint32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1518', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1518(std::list<uint32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1518(std::list<uint32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1518(std::list<uint32_t>::iterator v);`),
        classes: parseClass(`void r7sp1518(std::list<uint32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1518(std::list<uint32_t>::iterator v);`),
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
        `h2dtscpp_gen_1518 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1518 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1519
  * @tc.name h2dtscpp_gen_1519
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<uint64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1519', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1519(std::list<uint64_t>::iterator v);`),
        unions: parseUnion(`void r7sp1519(std::list<uint64_t>::iterator v);`),
        structs: parseStruct(`void r7sp1519(std::list<uint64_t>::iterator v);`),
        classes: parseClass(`void r7sp1519(std::list<uint64_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1519(std::list<uint64_t>::iterator v);`),
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
        `h2dtscpp_gen_1519 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1519 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1520
  * @tc.name h2dtscpp_gen_1520
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<int8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1520', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1520(std::list<int8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1520(std::list<int8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1520(std::list<int8_t>::iterator v);`),
        classes: parseClass(`void r7sp1520(std::list<int8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1520(std::list<int8_t>::iterator v);`),
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
        `h2dtscpp_gen_1520 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1520 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1521
  * @tc.name h2dtscpp_gen_1521
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<int16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1521', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1521(std::list<int16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1521(std::list<int16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1521(std::list<int16_t>::iterator v);`),
        classes: parseClass(`void r7sp1521(std::list<int16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1521(std::list<int16_t>::iterator v);`),
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
        `h2dtscpp_gen_1521 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1521 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1522
  * @tc.name h2dtscpp_gen_1522
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<int32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1522', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1522(std::list<int32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1522(std::list<int32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1522(std::list<int32_t>::iterator v);`),
        classes: parseClass(`void r7sp1522(std::list<int32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1522(std::list<int32_t>::iterator v);`),
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
        `h2dtscpp_gen_1522 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1522 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1523
  * @tc.name h2dtscpp_gen_1523
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<int64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1523', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1523(std::list<int64_t>::iterator v);`),
        unions: parseUnion(`void r7sp1523(std::list<int64_t>::iterator v);`),
        structs: parseStruct(`void r7sp1523(std::list<int64_t>::iterator v);`),
        classes: parseClass(`void r7sp1523(std::list<int64_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1523(std::list<int64_t>::iterator v);`),
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
        `h2dtscpp_gen_1523 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1523 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1524
  * @tc.name h2dtscpp_gen_1524
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<unsigned>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1524', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1524(std::list<unsigned>::iterator v);`),
        unions: parseUnion(`void r7sp1524(std::list<unsigned>::iterator v);`),
        structs: parseStruct(`void r7sp1524(std::list<unsigned>::iterator v);`),
        classes: parseClass(`void r7sp1524(std::list<unsigned>::iterator v);`),
        funcs: parseFunction(`void r7sp1524(std::list<unsigned>::iterator v);`),
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
        `h2dtscpp_gen_1524 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1524 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1525
  * @tc.name h2dtscpp_gen_1525
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1525', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1525(std::list<bool>::iterator v);`),
        unions: parseUnion(`void r7sp1525(std::list<bool>::iterator v);`),
        structs: parseStruct(`void r7sp1525(std::list<bool>::iterator v);`),
        classes: parseClass(`void r7sp1525(std::list<bool>::iterator v);`),
        funcs: parseFunction(`void r7sp1525(std::list<bool>::iterator v);`),
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
        `h2dtscpp_gen_1525 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1525 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1526
  * @tc.name h2dtscpp_gen_1526
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1526', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1526(std::list<char>::iterator v);`),
        unions: parseUnion(`void r7sp1526(std::list<char>::iterator v);`),
        structs: parseStruct(`void r7sp1526(std::list<char>::iterator v);`),
        classes: parseClass(`void r7sp1526(std::list<char>::iterator v);`),
        funcs: parseFunction(`void r7sp1526(std::list<char>::iterator v);`),
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
        `h2dtscpp_gen_1526 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1526 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1527
  * @tc.name h2dtscpp_gen_1527
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<wchar_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1527', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1527(std::list<wchar_t>::iterator v);`),
        unions: parseUnion(`void r7sp1527(std::list<wchar_t>::iterator v);`),
        structs: parseStruct(`void r7sp1527(std::list<wchar_t>::iterator v);`),
        classes: parseClass(`void r7sp1527(std::list<wchar_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1527(std::list<wchar_t>::iterator v);`),
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
        `h2dtscpp_gen_1527 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1527 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1528
  * @tc.name h2dtscpp_gen_1528
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<char8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1528', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1528(std::list<char8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1528(std::list<char8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1528(std::list<char8_t>::iterator v);`),
        classes: parseClass(`void r7sp1528(std::list<char8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1528(std::list<char8_t>::iterator v);`),
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
        `h2dtscpp_gen_1528 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1528 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1529
  * @tc.name h2dtscpp_gen_1529
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<char16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1529', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1529(std::list<char16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1529(std::list<char16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1529(std::list<char16_t>::iterator v);`),
        classes: parseClass(`void r7sp1529(std::list<char16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1529(std::list<char16_t>::iterator v);`),
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
        `h2dtscpp_gen_1529 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1529 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1530
  * @tc.name h2dtscpp_gen_1530
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<char32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1530', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1530(std::list<char32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1530(std::list<char32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1530(std::list<char32_t>::iterator v);`),
        classes: parseClass(`void r7sp1530(std::list<char32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1530(std::list<char32_t>::iterator v);`),
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
        `h2dtscpp_gen_1530 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1530 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1532
  * @tc.name h2dtscpp_gen_1532
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1532', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1532(std::forward_list<size_t> v);`),
        unions: parseUnion(`void r7sp1532(std::forward_list<size_t> v);`),
        structs: parseStruct(`void r7sp1532(std::forward_list<size_t> v);`),
        classes: parseClass(`void r7sp1532(std::forward_list<size_t> v);`),
        funcs: parseFunction(`void r7sp1532(std::forward_list<size_t> v);`),
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
        `h2dtscpp_gen_1532 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1532 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1534
  * @tc.name h2dtscpp_gen_1534
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<float>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1534', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1534(std::forward_list<float> v);`),
        unions: parseUnion(`void r7sp1534(std::forward_list<float> v);`),
        structs: parseStruct(`void r7sp1534(std::forward_list<float> v);`),
        classes: parseClass(`void r7sp1534(std::forward_list<float> v);`),
        funcs: parseFunction(`void r7sp1534(std::forward_list<float> v);`),
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
        `h2dtscpp_gen_1534 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1534 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1535
  * @tc.name h2dtscpp_gen_1535
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1535', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1535(std::forward_list<long> v);`),
        unions: parseUnion(`void r7sp1535(std::forward_list<long> v);`),
        structs: parseStruct(`void r7sp1535(std::forward_list<long> v);`),
        classes: parseClass(`void r7sp1535(std::forward_list<long> v);`),
        funcs: parseFunction(`void r7sp1535(std::forward_list<long> v);`),
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
        `h2dtscpp_gen_1535 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1535 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1536
  * @tc.name h2dtscpp_gen_1536
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1536', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1536(std::forward_list<short> v);`),
        unions: parseUnion(`void r7sp1536(std::forward_list<short> v);`),
        structs: parseStruct(`void r7sp1536(std::forward_list<short> v);`),
        classes: parseClass(`void r7sp1536(std::forward_list<short> v);`),
        funcs: parseFunction(`void r7sp1536(std::forward_list<short> v);`),
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
        `h2dtscpp_gen_1536 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1536 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1537
  * @tc.name h2dtscpp_gen_1537
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<uint8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1537', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1537(std::forward_list<uint8_t> v);`),
        unions: parseUnion(`void r7sp1537(std::forward_list<uint8_t> v);`),
        structs: parseStruct(`void r7sp1537(std::forward_list<uint8_t> v);`),
        classes: parseClass(`void r7sp1537(std::forward_list<uint8_t> v);`),
        funcs: parseFunction(`void r7sp1537(std::forward_list<uint8_t> v);`),
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
        `h2dtscpp_gen_1537 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1537 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1538
  * @tc.name h2dtscpp_gen_1538
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1538', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1538(std::forward_list<uint16_t> v);`),
        unions: parseUnion(`void r7sp1538(std::forward_list<uint16_t> v);`),
        structs: parseStruct(`void r7sp1538(std::forward_list<uint16_t> v);`),
        classes: parseClass(`void r7sp1538(std::forward_list<uint16_t> v);`),
        funcs: parseFunction(`void r7sp1538(std::forward_list<uint16_t> v);`),
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
        `h2dtscpp_gen_1538 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1538 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1539
  * @tc.name h2dtscpp_gen_1539
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1539', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1539(std::forward_list<uint32_t> v);`),
        unions: parseUnion(`void r7sp1539(std::forward_list<uint32_t> v);`),
        structs: parseStruct(`void r7sp1539(std::forward_list<uint32_t> v);`),
        classes: parseClass(`void r7sp1539(std::forward_list<uint32_t> v);`),
        funcs: parseFunction(`void r7sp1539(std::forward_list<uint32_t> v);`),
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
        `h2dtscpp_gen_1539 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1539 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1540
  * @tc.name h2dtscpp_gen_1540
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1540', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1540(std::forward_list<uint64_t> v);`),
        unions: parseUnion(`void r7sp1540(std::forward_list<uint64_t> v);`),
        structs: parseStruct(`void r7sp1540(std::forward_list<uint64_t> v);`),
        classes: parseClass(`void r7sp1540(std::forward_list<uint64_t> v);`),
        funcs: parseFunction(`void r7sp1540(std::forward_list<uint64_t> v);`),
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
        `h2dtscpp_gen_1540 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1540 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1541
  * @tc.name h2dtscpp_gen_1541
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1541', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1541(std::forward_list<int8_t> v);`),
        unions: parseUnion(`void r7sp1541(std::forward_list<int8_t> v);`),
        structs: parseStruct(`void r7sp1541(std::forward_list<int8_t> v);`),
        classes: parseClass(`void r7sp1541(std::forward_list<int8_t> v);`),
        funcs: parseFunction(`void r7sp1541(std::forward_list<int8_t> v);`),
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
        `h2dtscpp_gen_1541 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1541 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1542
  * @tc.name h2dtscpp_gen_1542
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1542', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1542(std::forward_list<int16_t> v);`),
        unions: parseUnion(`void r7sp1542(std::forward_list<int16_t> v);`),
        structs: parseStruct(`void r7sp1542(std::forward_list<int16_t> v);`),
        classes: parseClass(`void r7sp1542(std::forward_list<int16_t> v);`),
        funcs: parseFunction(`void r7sp1542(std::forward_list<int16_t> v);`),
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
        `h2dtscpp_gen_1542 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1542 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1543
  * @tc.name h2dtscpp_gen_1543
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1543', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1543(std::forward_list<int32_t> v);`),
        unions: parseUnion(`void r7sp1543(std::forward_list<int32_t> v);`),
        structs: parseStruct(`void r7sp1543(std::forward_list<int32_t> v);`),
        classes: parseClass(`void r7sp1543(std::forward_list<int32_t> v);`),
        funcs: parseFunction(`void r7sp1543(std::forward_list<int32_t> v);`),
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
        `h2dtscpp_gen_1543 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1543 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1544
  * @tc.name h2dtscpp_gen_1544
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<int64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1544', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1544(std::forward_list<int64_t> v);`),
        unions: parseUnion(`void r7sp1544(std::forward_list<int64_t> v);`),
        structs: parseStruct(`void r7sp1544(std::forward_list<int64_t> v);`),
        classes: parseClass(`void r7sp1544(std::forward_list<int64_t> v);`),
        funcs: parseFunction(`void r7sp1544(std::forward_list<int64_t> v);`),
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
        `h2dtscpp_gen_1544 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1544 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1545
  * @tc.name h2dtscpp_gen_1545
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1545', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1545(std::forward_list<unsigned> v);`),
        unions: parseUnion(`void r7sp1545(std::forward_list<unsigned> v);`),
        structs: parseStruct(`void r7sp1545(std::forward_list<unsigned> v);`),
        classes: parseClass(`void r7sp1545(std::forward_list<unsigned> v);`),
        funcs: parseFunction(`void r7sp1545(std::forward_list<unsigned> v);`),
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
        `h2dtscpp_gen_1545 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1545 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1546
  * @tc.name h2dtscpp_gen_1546
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1546', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1546(std::forward_list<bool> v);`),
        unions: parseUnion(`void r7sp1546(std::forward_list<bool> v);`),
        structs: parseStruct(`void r7sp1546(std::forward_list<bool> v);`),
        classes: parseClass(`void r7sp1546(std::forward_list<bool> v);`),
        funcs: parseFunction(`void r7sp1546(std::forward_list<bool> v);`),
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
        `h2dtscpp_gen_1546 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1546 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1547
  * @tc.name h2dtscpp_gen_1547
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1547', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1547(std::forward_list<char> v);`),
        unions: parseUnion(`void r7sp1547(std::forward_list<char> v);`),
        structs: parseStruct(`void r7sp1547(std::forward_list<char> v);`),
        classes: parseClass(`void r7sp1547(std::forward_list<char> v);`),
        funcs: parseFunction(`void r7sp1547(std::forward_list<char> v);`),
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
        `h2dtscpp_gen_1547 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1547 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1548
  * @tc.name h2dtscpp_gen_1548
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<wchar_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1548', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1548(std::forward_list<wchar_t> v);`),
        unions: parseUnion(`void r7sp1548(std::forward_list<wchar_t> v);`),
        structs: parseStruct(`void r7sp1548(std::forward_list<wchar_t> v);`),
        classes: parseClass(`void r7sp1548(std::forward_list<wchar_t> v);`),
        funcs: parseFunction(`void r7sp1548(std::forward_list<wchar_t> v);`),
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
        `h2dtscpp_gen_1548 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1548 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1549
  * @tc.name h2dtscpp_gen_1549
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<char8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1549', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1549(std::forward_list<char8_t> v);`),
        unions: parseUnion(`void r7sp1549(std::forward_list<char8_t> v);`),
        structs: parseStruct(`void r7sp1549(std::forward_list<char8_t> v);`),
        classes: parseClass(`void r7sp1549(std::forward_list<char8_t> v);`),
        funcs: parseFunction(`void r7sp1549(std::forward_list<char8_t> v);`),
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
        `h2dtscpp_gen_1549 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1549 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1550
  * @tc.name h2dtscpp_gen_1550
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::forward_list<char16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1550', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1550(std::forward_list<char16_t> v);`),
        unions: parseUnion(`void r7sp1550(std::forward_list<char16_t> v);`),
        structs: parseStruct(`void r7sp1550(std::forward_list<char16_t> v);`),
        classes: parseClass(`void r7sp1550(std::forward_list<char16_t> v);`),
        funcs: parseFunction(`void r7sp1550(std::forward_list<char16_t> v);`),
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
        `h2dtscpp_gen_1550 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1550 执行异常: ${String(err)}`);
    }
  });
});
