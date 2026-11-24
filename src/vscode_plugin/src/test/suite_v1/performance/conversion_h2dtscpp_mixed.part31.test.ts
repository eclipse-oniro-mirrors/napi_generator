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
  * @tc.number h2dtscpp_gen_1621
  * @tc.name h2dtscpp_gen_1621
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<uint8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1621', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1621(std::queue<uint8_t> v);`),
        unions: parseUnion(`void r7sp1621(std::queue<uint8_t> v);`),
        structs: parseStruct(`void r7sp1621(std::queue<uint8_t> v);`),
        classes: parseClass(`void r7sp1621(std::queue<uint8_t> v);`),
        funcs: parseFunction(`void r7sp1621(std::queue<uint8_t> v);`),
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
        `h2dtscpp_gen_1621 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1621 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1622
  * @tc.name h2dtscpp_gen_1622
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1622', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1622(std::queue<uint16_t> v);`),
        unions: parseUnion(`void r7sp1622(std::queue<uint16_t> v);`),
        structs: parseStruct(`void r7sp1622(std::queue<uint16_t> v);`),
        classes: parseClass(`void r7sp1622(std::queue<uint16_t> v);`),
        funcs: parseFunction(`void r7sp1622(std::queue<uint16_t> v);`),
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
        `h2dtscpp_gen_1622 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1622 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1623
  * @tc.name h2dtscpp_gen_1623
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1623', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1623(std::queue<uint32_t> v);`),
        unions: parseUnion(`void r7sp1623(std::queue<uint32_t> v);`),
        structs: parseStruct(`void r7sp1623(std::queue<uint32_t> v);`),
        classes: parseClass(`void r7sp1623(std::queue<uint32_t> v);`),
        funcs: parseFunction(`void r7sp1623(std::queue<uint32_t> v);`),
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
        `h2dtscpp_gen_1623 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1623 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1624
  * @tc.name h2dtscpp_gen_1624
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1624', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1624(std::queue<uint64_t> v);`),
        unions: parseUnion(`void r7sp1624(std::queue<uint64_t> v);`),
        structs: parseStruct(`void r7sp1624(std::queue<uint64_t> v);`),
        classes: parseClass(`void r7sp1624(std::queue<uint64_t> v);`),
        funcs: parseFunction(`void r7sp1624(std::queue<uint64_t> v);`),
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
        `h2dtscpp_gen_1624 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1624 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1625
  * @tc.name h2dtscpp_gen_1625
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1625', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1625(std::queue<int8_t> v);`),
        unions: parseUnion(`void r7sp1625(std::queue<int8_t> v);`),
        structs: parseStruct(`void r7sp1625(std::queue<int8_t> v);`),
        classes: parseClass(`void r7sp1625(std::queue<int8_t> v);`),
        funcs: parseFunction(`void r7sp1625(std::queue<int8_t> v);`),
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
        `h2dtscpp_gen_1625 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1625 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1626
  * @tc.name h2dtscpp_gen_1626
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1626', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1626(std::queue<int16_t> v);`),
        unions: parseUnion(`void r7sp1626(std::queue<int16_t> v);`),
        structs: parseStruct(`void r7sp1626(std::queue<int16_t> v);`),
        classes: parseClass(`void r7sp1626(std::queue<int16_t> v);`),
        funcs: parseFunction(`void r7sp1626(std::queue<int16_t> v);`),
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
        `h2dtscpp_gen_1626 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1626 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1627
  * @tc.name h2dtscpp_gen_1627
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1627', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1627(std::queue<int32_t> v);`),
        unions: parseUnion(`void r7sp1627(std::queue<int32_t> v);`),
        structs: parseStruct(`void r7sp1627(std::queue<int32_t> v);`),
        classes: parseClass(`void r7sp1627(std::queue<int32_t> v);`),
        funcs: parseFunction(`void r7sp1627(std::queue<int32_t> v);`),
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
        `h2dtscpp_gen_1627 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1627 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1628
  * @tc.name h2dtscpp_gen_1628
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<int64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1628', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1628(std::queue<int64_t> v);`),
        unions: parseUnion(`void r7sp1628(std::queue<int64_t> v);`),
        structs: parseStruct(`void r7sp1628(std::queue<int64_t> v);`),
        classes: parseClass(`void r7sp1628(std::queue<int64_t> v);`),
        funcs: parseFunction(`void r7sp1628(std::queue<int64_t> v);`),
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
        `h2dtscpp_gen_1628 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1628 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1629
  * @tc.name h2dtscpp_gen_1629
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1629', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1629(std::queue<unsigned> v);`),
        unions: parseUnion(`void r7sp1629(std::queue<unsigned> v);`),
        structs: parseStruct(`void r7sp1629(std::queue<unsigned> v);`),
        classes: parseClass(`void r7sp1629(std::queue<unsigned> v);`),
        funcs: parseFunction(`void r7sp1629(std::queue<unsigned> v);`),
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
        `h2dtscpp_gen_1629 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1629 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1630
  * @tc.name h2dtscpp_gen_1630
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1630', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1630(std::queue<bool> v);`),
        unions: parseUnion(`void r7sp1630(std::queue<bool> v);`),
        structs: parseStruct(`void r7sp1630(std::queue<bool> v);`),
        classes: parseClass(`void r7sp1630(std::queue<bool> v);`),
        funcs: parseFunction(`void r7sp1630(std::queue<bool> v);`),
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
        `h2dtscpp_gen_1630 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1630 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1631
  * @tc.name h2dtscpp_gen_1631
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1631', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1631(std::queue<char> v);`),
        unions: parseUnion(`void r7sp1631(std::queue<char> v);`),
        structs: parseStruct(`void r7sp1631(std::queue<char> v);`),
        classes: parseClass(`void r7sp1631(std::queue<char> v);`),
        funcs: parseFunction(`void r7sp1631(std::queue<char> v);`),
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
        `h2dtscpp_gen_1631 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1631 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1632
  * @tc.name h2dtscpp_gen_1632
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<wchar_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1632', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1632(std::queue<wchar_t> v);`),
        unions: parseUnion(`void r7sp1632(std::queue<wchar_t> v);`),
        structs: parseStruct(`void r7sp1632(std::queue<wchar_t> v);`),
        classes: parseClass(`void r7sp1632(std::queue<wchar_t> v);`),
        funcs: parseFunction(`void r7sp1632(std::queue<wchar_t> v);`),
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
        `h2dtscpp_gen_1632 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1632 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1633
  * @tc.name h2dtscpp_gen_1633
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<char8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1633', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1633(std::queue<char8_t> v);`),
        unions: parseUnion(`void r7sp1633(std::queue<char8_t> v);`),
        structs: parseStruct(`void r7sp1633(std::queue<char8_t> v);`),
        classes: parseClass(`void r7sp1633(std::queue<char8_t> v);`),
        funcs: parseFunction(`void r7sp1633(std::queue<char8_t> v);`),
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
        `h2dtscpp_gen_1633 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1633 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1634
  * @tc.name h2dtscpp_gen_1634
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<char16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1634', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1634(std::queue<char16_t> v);`),
        unions: parseUnion(`void r7sp1634(std::queue<char16_t> v);`),
        structs: parseStruct(`void r7sp1634(std::queue<char16_t> v);`),
        classes: parseClass(`void r7sp1634(std::queue<char16_t> v);`),
        funcs: parseFunction(`void r7sp1634(std::queue<char16_t> v);`),
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
        `h2dtscpp_gen_1634 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1634 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1635
  * @tc.name h2dtscpp_gen_1635
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1635', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1635(std::queue<char32_t> v);`),
        unions: parseUnion(`void r7sp1635(std::queue<char32_t> v);`),
        structs: parseStruct(`void r7sp1635(std::queue<char32_t> v);`),
        classes: parseClass(`void r7sp1635(std::queue<char32_t> v);`),
        funcs: parseFunction(`void r7sp1635(std::queue<char32_t> v);`),
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
        `h2dtscpp_gen_1635 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1635 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1636
  * @tc.name h2dtscpp_gen_1636
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1636', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1636(std::queue<int>::iterator v);`),
        unions: parseUnion(`void r7sp1636(std::queue<int>::iterator v);`),
        structs: parseStruct(`void r7sp1636(std::queue<int>::iterator v);`),
        classes: parseClass(`void r7sp1636(std::queue<int>::iterator v);`),
        funcs: parseFunction(`void r7sp1636(std::queue<int>::iterator v);`),
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
        `h2dtscpp_gen_1636 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1636 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1637
  * @tc.name h2dtscpp_gen_1637
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1637', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1637(std::queue<size_t>::iterator v);`),
        unions: parseUnion(`void r7sp1637(std::queue<size_t>::iterator v);`),
        structs: parseStruct(`void r7sp1637(std::queue<size_t>::iterator v);`),
        classes: parseClass(`void r7sp1637(std::queue<size_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1637(std::queue<size_t>::iterator v);`),
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
        `h2dtscpp_gen_1637 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1637 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1638
  * @tc.name h2dtscpp_gen_1638
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<double>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1638', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1638(std::queue<double>::iterator v);`),
        unions: parseUnion(`void r7sp1638(std::queue<double>::iterator v);`),
        structs: parseStruct(`void r7sp1638(std::queue<double>::iterator v);`),
        classes: parseClass(`void r7sp1638(std::queue<double>::iterator v);`),
        funcs: parseFunction(`void r7sp1638(std::queue<double>::iterator v);`),
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
        `h2dtscpp_gen_1638 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1638 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1639
  * @tc.name h2dtscpp_gen_1639
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<float>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1639', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1639(std::queue<float>::iterator v);`),
        unions: parseUnion(`void r7sp1639(std::queue<float>::iterator v);`),
        structs: parseStruct(`void r7sp1639(std::queue<float>::iterator v);`),
        classes: parseClass(`void r7sp1639(std::queue<float>::iterator v);`),
        funcs: parseFunction(`void r7sp1639(std::queue<float>::iterator v);`),
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
        `h2dtscpp_gen_1639 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1639 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1640
  * @tc.name h2dtscpp_gen_1640
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1640', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1640(std::queue<long>::iterator v);`),
        unions: parseUnion(`void r7sp1640(std::queue<long>::iterator v);`),
        structs: parseStruct(`void r7sp1640(std::queue<long>::iterator v);`),
        classes: parseClass(`void r7sp1640(std::queue<long>::iterator v);`),
        funcs: parseFunction(`void r7sp1640(std::queue<long>::iterator v);`),
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
        `h2dtscpp_gen_1640 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1640 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1641
  * @tc.name h2dtscpp_gen_1641
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1641', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1641(std::queue<short>::iterator v);`),
        unions: parseUnion(`void r7sp1641(std::queue<short>::iterator v);`),
        structs: parseStruct(`void r7sp1641(std::queue<short>::iterator v);`),
        classes: parseClass(`void r7sp1641(std::queue<short>::iterator v);`),
        funcs: parseFunction(`void r7sp1641(std::queue<short>::iterator v);`),
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
        `h2dtscpp_gen_1641 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1641 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1642
  * @tc.name h2dtscpp_gen_1642
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<uint8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1642', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1642(std::queue<uint8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1642(std::queue<uint8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1642(std::queue<uint8_t>::iterator v);`),
        classes: parseClass(`void r7sp1642(std::queue<uint8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1642(std::queue<uint8_t>::iterator v);`),
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
        `h2dtscpp_gen_1642 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1642 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1643
  * @tc.name h2dtscpp_gen_1643
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<uint16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1643', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1643(std::queue<uint16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1643(std::queue<uint16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1643(std::queue<uint16_t>::iterator v);`),
        classes: parseClass(`void r7sp1643(std::queue<uint16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1643(std::queue<uint16_t>::iterator v);`),
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
        `h2dtscpp_gen_1643 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1643 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1644
  * @tc.name h2dtscpp_gen_1644
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<uint32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1644', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1644(std::queue<uint32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1644(std::queue<uint32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1644(std::queue<uint32_t>::iterator v);`),
        classes: parseClass(`void r7sp1644(std::queue<uint32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1644(std::queue<uint32_t>::iterator v);`),
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
        `h2dtscpp_gen_1644 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1644 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1645
  * @tc.name h2dtscpp_gen_1645
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<uint64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1645', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1645(std::queue<uint64_t>::iterator v);`),
        unions: parseUnion(`void r7sp1645(std::queue<uint64_t>::iterator v);`),
        structs: parseStruct(`void r7sp1645(std::queue<uint64_t>::iterator v);`),
        classes: parseClass(`void r7sp1645(std::queue<uint64_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1645(std::queue<uint64_t>::iterator v);`),
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
        `h2dtscpp_gen_1645 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1645 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1646
  * @tc.name h2dtscpp_gen_1646
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<int8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1646', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1646(std::queue<int8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1646(std::queue<int8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1646(std::queue<int8_t>::iterator v);`),
        classes: parseClass(`void r7sp1646(std::queue<int8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1646(std::queue<int8_t>::iterator v);`),
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
        `h2dtscpp_gen_1646 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1646 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1647
  * @tc.name h2dtscpp_gen_1647
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<int16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1647', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1647(std::queue<int16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1647(std::queue<int16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1647(std::queue<int16_t>::iterator v);`),
        classes: parseClass(`void r7sp1647(std::queue<int16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1647(std::queue<int16_t>::iterator v);`),
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
        `h2dtscpp_gen_1647 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1647 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1648
  * @tc.name h2dtscpp_gen_1648
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<int32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1648', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1648(std::queue<int32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1648(std::queue<int32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1648(std::queue<int32_t>::iterator v);`),
        classes: parseClass(`void r7sp1648(std::queue<int32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1648(std::queue<int32_t>::iterator v);`),
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
        `h2dtscpp_gen_1648 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1648 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1649
  * @tc.name h2dtscpp_gen_1649
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<int64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1649', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1649(std::queue<int64_t>::iterator v);`),
        unions: parseUnion(`void r7sp1649(std::queue<int64_t>::iterator v);`),
        structs: parseStruct(`void r7sp1649(std::queue<int64_t>::iterator v);`),
        classes: parseClass(`void r7sp1649(std::queue<int64_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1649(std::queue<int64_t>::iterator v);`),
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
        `h2dtscpp_gen_1649 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1649 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1650
  * @tc.name h2dtscpp_gen_1650
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<unsigned>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1650', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1650(std::queue<unsigned>::iterator v);`),
        unions: parseUnion(`void r7sp1650(std::queue<unsigned>::iterator v);`),
        structs: parseStruct(`void r7sp1650(std::queue<unsigned>::iterator v);`),
        classes: parseClass(`void r7sp1650(std::queue<unsigned>::iterator v);`),
        funcs: parseFunction(`void r7sp1650(std::queue<unsigned>::iterator v);`),
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
        `h2dtscpp_gen_1650 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1650 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1651
  * @tc.name h2dtscpp_gen_1651
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1651', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1651(std::queue<bool>::iterator v);`),
        unions: parseUnion(`void r7sp1651(std::queue<bool>::iterator v);`),
        structs: parseStruct(`void r7sp1651(std::queue<bool>::iterator v);`),
        classes: parseClass(`void r7sp1651(std::queue<bool>::iterator v);`),
        funcs: parseFunction(`void r7sp1651(std::queue<bool>::iterator v);`),
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
        `h2dtscpp_gen_1651 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1651 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1652
  * @tc.name h2dtscpp_gen_1652
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1652', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1652(std::queue<char>::iterator v);`),
        unions: parseUnion(`void r7sp1652(std::queue<char>::iterator v);`),
        structs: parseStruct(`void r7sp1652(std::queue<char>::iterator v);`),
        classes: parseClass(`void r7sp1652(std::queue<char>::iterator v);`),
        funcs: parseFunction(`void r7sp1652(std::queue<char>::iterator v);`),
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
        `h2dtscpp_gen_1652 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1652 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1653
  * @tc.name h2dtscpp_gen_1653
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<wchar_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1653', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1653(std::queue<wchar_t>::iterator v);`),
        unions: parseUnion(`void r7sp1653(std::queue<wchar_t>::iterator v);`),
        structs: parseStruct(`void r7sp1653(std::queue<wchar_t>::iterator v);`),
        classes: parseClass(`void r7sp1653(std::queue<wchar_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1653(std::queue<wchar_t>::iterator v);`),
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
        `h2dtscpp_gen_1653 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1653 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1654
  * @tc.name h2dtscpp_gen_1654
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<char8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1654', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1654(std::queue<char8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1654(std::queue<char8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1654(std::queue<char8_t>::iterator v);`),
        classes: parseClass(`void r7sp1654(std::queue<char8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1654(std::queue<char8_t>::iterator v);`),
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
        `h2dtscpp_gen_1654 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1654 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1655
  * @tc.name h2dtscpp_gen_1655
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<char16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1655', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1655(std::queue<char16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1655(std::queue<char16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1655(std::queue<char16_t>::iterator v);`),
        classes: parseClass(`void r7sp1655(std::queue<char16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1655(std::queue<char16_t>::iterator v);`),
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
        `h2dtscpp_gen_1655 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1655 执行异常: ${String(err)}`);
    }
  });
});
