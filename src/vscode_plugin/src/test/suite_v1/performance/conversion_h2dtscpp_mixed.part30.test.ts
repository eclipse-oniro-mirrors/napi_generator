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
  * @tc.number h2dtscpp_gen_1586
  * @tc.name h2dtscpp_gen_1586
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<int64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1586', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1586(std::stack<int64_t> v);`),
        unions: parseUnion(`void r7sp1586(std::stack<int64_t> v);`),
        structs: parseStruct(`void r7sp1586(std::stack<int64_t> v);`),
        classes: parseClass(`void r7sp1586(std::stack<int64_t> v);`),
        funcs: parseFunction(`void r7sp1586(std::stack<int64_t> v);`),
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
        `h2dtscpp_gen_1586 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1586 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1587
  * @tc.name h2dtscpp_gen_1587
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1587', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1587(std::stack<unsigned> v);`),
        unions: parseUnion(`void r7sp1587(std::stack<unsigned> v);`),
        structs: parseStruct(`void r7sp1587(std::stack<unsigned> v);`),
        classes: parseClass(`void r7sp1587(std::stack<unsigned> v);`),
        funcs: parseFunction(`void r7sp1587(std::stack<unsigned> v);`),
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
        `h2dtscpp_gen_1587 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1587 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1588
  * @tc.name h2dtscpp_gen_1588
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1588', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1588(std::stack<bool> v);`),
        unions: parseUnion(`void r7sp1588(std::stack<bool> v);`),
        structs: parseStruct(`void r7sp1588(std::stack<bool> v);`),
        classes: parseClass(`void r7sp1588(std::stack<bool> v);`),
        funcs: parseFunction(`void r7sp1588(std::stack<bool> v);`),
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
        `h2dtscpp_gen_1588 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1588 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1589
  * @tc.name h2dtscpp_gen_1589
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1589', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1589(std::stack<char> v);`),
        unions: parseUnion(`void r7sp1589(std::stack<char> v);`),
        structs: parseStruct(`void r7sp1589(std::stack<char> v);`),
        classes: parseClass(`void r7sp1589(std::stack<char> v);`),
        funcs: parseFunction(`void r7sp1589(std::stack<char> v);`),
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
        `h2dtscpp_gen_1589 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1589 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1590
  * @tc.name h2dtscpp_gen_1590
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<wchar_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1590', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1590(std::stack<wchar_t> v);`),
        unions: parseUnion(`void r7sp1590(std::stack<wchar_t> v);`),
        structs: parseStruct(`void r7sp1590(std::stack<wchar_t> v);`),
        classes: parseClass(`void r7sp1590(std::stack<wchar_t> v);`),
        funcs: parseFunction(`void r7sp1590(std::stack<wchar_t> v);`),
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
        `h2dtscpp_gen_1590 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1590 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1591
  * @tc.name h2dtscpp_gen_1591
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<char8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1591', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1591(std::stack<char8_t> v);`),
        unions: parseUnion(`void r7sp1591(std::stack<char8_t> v);`),
        structs: parseStruct(`void r7sp1591(std::stack<char8_t> v);`),
        classes: parseClass(`void r7sp1591(std::stack<char8_t> v);`),
        funcs: parseFunction(`void r7sp1591(std::stack<char8_t> v);`),
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
        `h2dtscpp_gen_1591 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1591 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1592
  * @tc.name h2dtscpp_gen_1592
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<char16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1592', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1592(std::stack<char16_t> v);`),
        unions: parseUnion(`void r7sp1592(std::stack<char16_t> v);`),
        structs: parseStruct(`void r7sp1592(std::stack<char16_t> v);`),
        classes: parseClass(`void r7sp1592(std::stack<char16_t> v);`),
        funcs: parseFunction(`void r7sp1592(std::stack<char16_t> v);`),
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
        `h2dtscpp_gen_1592 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1592 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1593
  * @tc.name h2dtscpp_gen_1593
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1593', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1593(std::stack<char32_t> v);`),
        unions: parseUnion(`void r7sp1593(std::stack<char32_t> v);`),
        structs: parseStruct(`void r7sp1593(std::stack<char32_t> v);`),
        classes: parseClass(`void r7sp1593(std::stack<char32_t> v);`),
        funcs: parseFunction(`void r7sp1593(std::stack<char32_t> v);`),
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
        `h2dtscpp_gen_1593 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1593 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1594
  * @tc.name h2dtscpp_gen_1594
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1594', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1594(std::stack<int>::iterator v);`),
        unions: parseUnion(`void r7sp1594(std::stack<int>::iterator v);`),
        structs: parseStruct(`void r7sp1594(std::stack<int>::iterator v);`),
        classes: parseClass(`void r7sp1594(std::stack<int>::iterator v);`),
        funcs: parseFunction(`void r7sp1594(std::stack<int>::iterator v);`),
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
        `h2dtscpp_gen_1594 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1594 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1595
  * @tc.name h2dtscpp_gen_1595
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1595', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1595(std::stack<size_t>::iterator v);`),
        unions: parseUnion(`void r7sp1595(std::stack<size_t>::iterator v);`),
        structs: parseStruct(`void r7sp1595(std::stack<size_t>::iterator v);`),
        classes: parseClass(`void r7sp1595(std::stack<size_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1595(std::stack<size_t>::iterator v);`),
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
        `h2dtscpp_gen_1595 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1595 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1596
  * @tc.name h2dtscpp_gen_1596
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<double>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1596', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1596(std::stack<double>::iterator v);`),
        unions: parseUnion(`void r7sp1596(std::stack<double>::iterator v);`),
        structs: parseStruct(`void r7sp1596(std::stack<double>::iterator v);`),
        classes: parseClass(`void r7sp1596(std::stack<double>::iterator v);`),
        funcs: parseFunction(`void r7sp1596(std::stack<double>::iterator v);`),
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
        `h2dtscpp_gen_1596 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1596 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1597
  * @tc.name h2dtscpp_gen_1597
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<float>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1597', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1597(std::stack<float>::iterator v);`),
        unions: parseUnion(`void r7sp1597(std::stack<float>::iterator v);`),
        structs: parseStruct(`void r7sp1597(std::stack<float>::iterator v);`),
        classes: parseClass(`void r7sp1597(std::stack<float>::iterator v);`),
        funcs: parseFunction(`void r7sp1597(std::stack<float>::iterator v);`),
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
        `h2dtscpp_gen_1597 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1597 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1598
  * @tc.name h2dtscpp_gen_1598
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1598', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1598(std::stack<long>::iterator v);`),
        unions: parseUnion(`void r7sp1598(std::stack<long>::iterator v);`),
        structs: parseStruct(`void r7sp1598(std::stack<long>::iterator v);`),
        classes: parseClass(`void r7sp1598(std::stack<long>::iterator v);`),
        funcs: parseFunction(`void r7sp1598(std::stack<long>::iterator v);`),
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
        `h2dtscpp_gen_1598 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1598 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1599
  * @tc.name h2dtscpp_gen_1599
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1599', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1599(std::stack<short>::iterator v);`),
        unions: parseUnion(`void r7sp1599(std::stack<short>::iterator v);`),
        structs: parseStruct(`void r7sp1599(std::stack<short>::iterator v);`),
        classes: parseClass(`void r7sp1599(std::stack<short>::iterator v);`),
        funcs: parseFunction(`void r7sp1599(std::stack<short>::iterator v);`),
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
        `h2dtscpp_gen_1599 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1599 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1600
  * @tc.name h2dtscpp_gen_1600
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<uint8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1600', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1600(std::stack<uint8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1600(std::stack<uint8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1600(std::stack<uint8_t>::iterator v);`),
        classes: parseClass(`void r7sp1600(std::stack<uint8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1600(std::stack<uint8_t>::iterator v);`),
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
        `h2dtscpp_gen_1600 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1600 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1601
  * @tc.name h2dtscpp_gen_1601
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<uint16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1601', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1601(std::stack<uint16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1601(std::stack<uint16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1601(std::stack<uint16_t>::iterator v);`),
        classes: parseClass(`void r7sp1601(std::stack<uint16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1601(std::stack<uint16_t>::iterator v);`),
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
        `h2dtscpp_gen_1601 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1601 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1602
  * @tc.name h2dtscpp_gen_1602
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<uint32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1602', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1602(std::stack<uint32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1602(std::stack<uint32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1602(std::stack<uint32_t>::iterator v);`),
        classes: parseClass(`void r7sp1602(std::stack<uint32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1602(std::stack<uint32_t>::iterator v);`),
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
        `h2dtscpp_gen_1602 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1602 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1603
  * @tc.name h2dtscpp_gen_1603
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<uint64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1603', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1603(std::stack<uint64_t>::iterator v);`),
        unions: parseUnion(`void r7sp1603(std::stack<uint64_t>::iterator v);`),
        structs: parseStruct(`void r7sp1603(std::stack<uint64_t>::iterator v);`),
        classes: parseClass(`void r7sp1603(std::stack<uint64_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1603(std::stack<uint64_t>::iterator v);`),
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
        `h2dtscpp_gen_1603 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1603 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1604
  * @tc.name h2dtscpp_gen_1604
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<int8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1604', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1604(std::stack<int8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1604(std::stack<int8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1604(std::stack<int8_t>::iterator v);`),
        classes: parseClass(`void r7sp1604(std::stack<int8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1604(std::stack<int8_t>::iterator v);`),
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
        `h2dtscpp_gen_1604 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1604 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1605
  * @tc.name h2dtscpp_gen_1605
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<int16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1605', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1605(std::stack<int16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1605(std::stack<int16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1605(std::stack<int16_t>::iterator v);`),
        classes: parseClass(`void r7sp1605(std::stack<int16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1605(std::stack<int16_t>::iterator v);`),
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
        `h2dtscpp_gen_1605 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1605 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1606
  * @tc.name h2dtscpp_gen_1606
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<int32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1606', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1606(std::stack<int32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1606(std::stack<int32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1606(std::stack<int32_t>::iterator v);`),
        classes: parseClass(`void r7sp1606(std::stack<int32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1606(std::stack<int32_t>::iterator v);`),
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
        `h2dtscpp_gen_1606 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1606 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1607
  * @tc.name h2dtscpp_gen_1607
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<int64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1607', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1607(std::stack<int64_t>::iterator v);`),
        unions: parseUnion(`void r7sp1607(std::stack<int64_t>::iterator v);`),
        structs: parseStruct(`void r7sp1607(std::stack<int64_t>::iterator v);`),
        classes: parseClass(`void r7sp1607(std::stack<int64_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1607(std::stack<int64_t>::iterator v);`),
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
        `h2dtscpp_gen_1607 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1607 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1608
  * @tc.name h2dtscpp_gen_1608
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<unsigned>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1608', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1608(std::stack<unsigned>::iterator v);`),
        unions: parseUnion(`void r7sp1608(std::stack<unsigned>::iterator v);`),
        structs: parseStruct(`void r7sp1608(std::stack<unsigned>::iterator v);`),
        classes: parseClass(`void r7sp1608(std::stack<unsigned>::iterator v);`),
        funcs: parseFunction(`void r7sp1608(std::stack<unsigned>::iterator v);`),
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
        `h2dtscpp_gen_1608 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1608 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1609
  * @tc.name h2dtscpp_gen_1609
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1609', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1609(std::stack<bool>::iterator v);`),
        unions: parseUnion(`void r7sp1609(std::stack<bool>::iterator v);`),
        structs: parseStruct(`void r7sp1609(std::stack<bool>::iterator v);`),
        classes: parseClass(`void r7sp1609(std::stack<bool>::iterator v);`),
        funcs: parseFunction(`void r7sp1609(std::stack<bool>::iterator v);`),
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
        `h2dtscpp_gen_1609 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1609 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1610
  * @tc.name h2dtscpp_gen_1610
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1610', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1610(std::stack<char>::iterator v);`),
        unions: parseUnion(`void r7sp1610(std::stack<char>::iterator v);`),
        structs: parseStruct(`void r7sp1610(std::stack<char>::iterator v);`),
        classes: parseClass(`void r7sp1610(std::stack<char>::iterator v);`),
        funcs: parseFunction(`void r7sp1610(std::stack<char>::iterator v);`),
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
        `h2dtscpp_gen_1610 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1610 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1611
  * @tc.name h2dtscpp_gen_1611
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<wchar_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1611', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1611(std::stack<wchar_t>::iterator v);`),
        unions: parseUnion(`void r7sp1611(std::stack<wchar_t>::iterator v);`),
        structs: parseStruct(`void r7sp1611(std::stack<wchar_t>::iterator v);`),
        classes: parseClass(`void r7sp1611(std::stack<wchar_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1611(std::stack<wchar_t>::iterator v);`),
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
        `h2dtscpp_gen_1611 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1611 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1612
  * @tc.name h2dtscpp_gen_1612
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<char8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1612', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1612(std::stack<char8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1612(std::stack<char8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1612(std::stack<char8_t>::iterator v);`),
        classes: parseClass(`void r7sp1612(std::stack<char8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1612(std::stack<char8_t>::iterator v);`),
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
        `h2dtscpp_gen_1612 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1612 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1613
  * @tc.name h2dtscpp_gen_1613
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<char16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1613', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1613(std::stack<char16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1613(std::stack<char16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1613(std::stack<char16_t>::iterator v);`),
        classes: parseClass(`void r7sp1613(std::stack<char16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1613(std::stack<char16_t>::iterator v);`),
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
        `h2dtscpp_gen_1613 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1613 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1614
  * @tc.name h2dtscpp_gen_1614
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::stack<char32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1614', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1614(std::stack<char32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1614(std::stack<char32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1614(std::stack<char32_t>::iterator v);`),
        classes: parseClass(`void r7sp1614(std::stack<char32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1614(std::stack<char32_t>::iterator v);`),
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
        `h2dtscpp_gen_1614 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1614 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1616
  * @tc.name h2dtscpp_gen_1616
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1616', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1616(std::queue<size_t> v);`),
        unions: parseUnion(`void r7sp1616(std::queue<size_t> v);`),
        structs: parseStruct(`void r7sp1616(std::queue<size_t> v);`),
        classes: parseClass(`void r7sp1616(std::queue<size_t> v);`),
        funcs: parseFunction(`void r7sp1616(std::queue<size_t> v);`),
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
        `h2dtscpp_gen_1616 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1616 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1617
  * @tc.name h2dtscpp_gen_1617
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1617', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1617(std::queue<double> v);`),
        unions: parseUnion(`void r7sp1617(std::queue<double> v);`),
        structs: parseStruct(`void r7sp1617(std::queue<double> v);`),
        classes: parseClass(`void r7sp1617(std::queue<double> v);`),
        funcs: parseFunction(`void r7sp1617(std::queue<double> v);`),
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
        `h2dtscpp_gen_1617 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1617 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1618
  * @tc.name h2dtscpp_gen_1618
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<float>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1618', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1618(std::queue<float> v);`),
        unions: parseUnion(`void r7sp1618(std::queue<float> v);`),
        structs: parseStruct(`void r7sp1618(std::queue<float> v);`),
        classes: parseClass(`void r7sp1618(std::queue<float> v);`),
        funcs: parseFunction(`void r7sp1618(std::queue<float> v);`),
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
        `h2dtscpp_gen_1618 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1618 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1619
  * @tc.name h2dtscpp_gen_1619
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1619', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1619(std::queue<long> v);`),
        unions: parseUnion(`void r7sp1619(std::queue<long> v);`),
        structs: parseStruct(`void r7sp1619(std::queue<long> v);`),
        classes: parseClass(`void r7sp1619(std::queue<long> v);`),
        funcs: parseFunction(`void r7sp1619(std::queue<long> v);`),
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
        `h2dtscpp_gen_1619 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1619 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1620
  * @tc.name h2dtscpp_gen_1620
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1620', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1620(std::queue<short> v);`),
        unions: parseUnion(`void r7sp1620(std::queue<short> v);`),
        structs: parseStruct(`void r7sp1620(std::queue<short> v);`),
        classes: parseClass(`void r7sp1620(std::queue<short> v);`),
        funcs: parseFunction(`void r7sp1620(std::queue<short> v);`),
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
        `h2dtscpp_gen_1620 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1620 执行异常: ${String(err)}`);
    }
  });
});
