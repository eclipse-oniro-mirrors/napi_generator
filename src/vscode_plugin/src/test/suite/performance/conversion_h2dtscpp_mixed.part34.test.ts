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
  * @tc.number h2dtscpp_gen_1726
  * @tc.name h2dtscpp_gen_1726
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<uint8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1726', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1726(std::priority_queue<uint8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1726(std::priority_queue<uint8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1726(std::priority_queue<uint8_t>::iterator v);`),
        classes: parseClass(`void r7sp1726(std::priority_queue<uint8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1726(std::priority_queue<uint8_t>::iterator v);`),
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
        `h2dtscpp_gen_1726 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1726 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1727
  * @tc.name h2dtscpp_gen_1727
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<uint16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1727', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1727(std::priority_queue<uint16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1727(std::priority_queue<uint16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1727(std::priority_queue<uint16_t>::iterator v);`),
        classes: parseClass(`void r7sp1727(std::priority_queue<uint16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1727(std::priority_queue<uint16_t>::iterator v);`),
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
        `h2dtscpp_gen_1727 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1727 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1728
  * @tc.name h2dtscpp_gen_1728
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<uint32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1728', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1728(std::priority_queue<uint32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1728(std::priority_queue<uint32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1728(std::priority_queue<uint32_t>::iterator v);`),
        classes: parseClass(`void r7sp1728(std::priority_queue<uint32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1728(std::priority_queue<uint32_t>::iterator v);`),
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
        `h2dtscpp_gen_1728 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1728 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1729
  * @tc.name h2dtscpp_gen_1729
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<uint64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1729', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1729(std::priority_queue<uint64_t>::iterator v);`),
        unions: parseUnion(`void r7sp1729(std::priority_queue<uint64_t>::iterator v);`),
        structs: parseStruct(`void r7sp1729(std::priority_queue<uint64_t>::iterator v);`),
        classes: parseClass(`void r7sp1729(std::priority_queue<uint64_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1729(std::priority_queue<uint64_t>::iterator v);`),
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
        `h2dtscpp_gen_1729 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1729 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1730
  * @tc.name h2dtscpp_gen_1730
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<int8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1730', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1730(std::priority_queue<int8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1730(std::priority_queue<int8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1730(std::priority_queue<int8_t>::iterator v);`),
        classes: parseClass(`void r7sp1730(std::priority_queue<int8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1730(std::priority_queue<int8_t>::iterator v);`),
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
        `h2dtscpp_gen_1730 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1730 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1731
  * @tc.name h2dtscpp_gen_1731
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<int16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1731', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1731(std::priority_queue<int16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1731(std::priority_queue<int16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1731(std::priority_queue<int16_t>::iterator v);`),
        classes: parseClass(`void r7sp1731(std::priority_queue<int16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1731(std::priority_queue<int16_t>::iterator v);`),
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
        `h2dtscpp_gen_1731 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1731 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1732
  * @tc.name h2dtscpp_gen_1732
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<int32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1732', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1732(std::priority_queue<int32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1732(std::priority_queue<int32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1732(std::priority_queue<int32_t>::iterator v);`),
        classes: parseClass(`void r7sp1732(std::priority_queue<int32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1732(std::priority_queue<int32_t>::iterator v);`),
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
        `h2dtscpp_gen_1732 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1732 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1733
  * @tc.name h2dtscpp_gen_1733
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<int64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1733', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1733(std::priority_queue<int64_t>::iterator v);`),
        unions: parseUnion(`void r7sp1733(std::priority_queue<int64_t>::iterator v);`),
        structs: parseStruct(`void r7sp1733(std::priority_queue<int64_t>::iterator v);`),
        classes: parseClass(`void r7sp1733(std::priority_queue<int64_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1733(std::priority_queue<int64_t>::iterator v);`),
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
        `h2dtscpp_gen_1733 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1733 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1734
  * @tc.name h2dtscpp_gen_1734
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<unsigned>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1734', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1734(std::priority_queue<unsigned>::iterator v);`),
        unions: parseUnion(`void r7sp1734(std::priority_queue<unsigned>::iterator v);`),
        structs: parseStruct(`void r7sp1734(std::priority_queue<unsigned>::iterator v);`),
        classes: parseClass(`void r7sp1734(std::priority_queue<unsigned>::iterator v);`),
        funcs: parseFunction(`void r7sp1734(std::priority_queue<unsigned>::iterator v);`),
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
        `h2dtscpp_gen_1734 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1734 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1735
  * @tc.name h2dtscpp_gen_1735
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1735', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1735(std::priority_queue<bool>::iterator v);`),
        unions: parseUnion(`void r7sp1735(std::priority_queue<bool>::iterator v);`),
        structs: parseStruct(`void r7sp1735(std::priority_queue<bool>::iterator v);`),
        classes: parseClass(`void r7sp1735(std::priority_queue<bool>::iterator v);`),
        funcs: parseFunction(`void r7sp1735(std::priority_queue<bool>::iterator v);`),
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
        `h2dtscpp_gen_1735 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1735 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1736
  * @tc.name h2dtscpp_gen_1736
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1736', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1736(std::priority_queue<char>::iterator v);`),
        unions: parseUnion(`void r7sp1736(std::priority_queue<char>::iterator v);`),
        structs: parseStruct(`void r7sp1736(std::priority_queue<char>::iterator v);`),
        classes: parseClass(`void r7sp1736(std::priority_queue<char>::iterator v);`),
        funcs: parseFunction(`void r7sp1736(std::priority_queue<char>::iterator v);`),
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
        `h2dtscpp_gen_1736 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1736 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1737
  * @tc.name h2dtscpp_gen_1737
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<wchar_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1737', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1737(std::priority_queue<wchar_t>::iterator v);`),
        unions: parseUnion(`void r7sp1737(std::priority_queue<wchar_t>::iterator v);`),
        structs: parseStruct(`void r7sp1737(std::priority_queue<wchar_t>::iterator v);`),
        classes: parseClass(`void r7sp1737(std::priority_queue<wchar_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1737(std::priority_queue<wchar_t>::iterator v);`),
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
        `h2dtscpp_gen_1737 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1737 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1738
  * @tc.name h2dtscpp_gen_1738
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<char8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1738', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1738(std::priority_queue<char8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1738(std::priority_queue<char8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1738(std::priority_queue<char8_t>::iterator v);`),
        classes: parseClass(`void r7sp1738(std::priority_queue<char8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1738(std::priority_queue<char8_t>::iterator v);`),
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
        `h2dtscpp_gen_1738 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1738 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1739
  * @tc.name h2dtscpp_gen_1739
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<char16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1739', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1739(std::priority_queue<char16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1739(std::priority_queue<char16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1739(std::priority_queue<char16_t>::iterator v);`),
        classes: parseClass(`void r7sp1739(std::priority_queue<char16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1739(std::priority_queue<char16_t>::iterator v);`),
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
        `h2dtscpp_gen_1739 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1739 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1740
  * @tc.name h2dtscpp_gen_1740
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<char32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1740', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1740(std::priority_queue<char32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1740(std::priority_queue<char32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1740(std::priority_queue<char32_t>::iterator v);`),
        classes: parseClass(`void r7sp1740(std::priority_queue<char32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1740(std::priority_queue<char32_t>::iterator v);`),
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
        `h2dtscpp_gen_1740 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1740 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1742
  * @tc.name h2dtscpp_gen_1742
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char, int>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1742', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1742(std::map<char, int> v);`),
        unions: parseUnion(`void r7sp1742(std::map<char, int> v);`),
        structs: parseStruct(`void r7sp1742(std::map<char, int> v);`),
        classes: parseClass(`void r7sp1742(std::map<char, int> v);`),
        funcs: parseFunction(`void r7sp1742(std::map<char, int> v);`),
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
        `h2dtscpp_gen_1742 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1742 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1743
  * @tc.name h2dtscpp_gen_1743
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char, size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1743', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1743(std::map<char, size_t> v);`),
        unions: parseUnion(`void r7sp1743(std::map<char, size_t> v);`),
        structs: parseStruct(`void r7sp1743(std::map<char, size_t> v);`),
        classes: parseClass(`void r7sp1743(std::map<char, size_t> v);`),
        funcs: parseFunction(`void r7sp1743(std::map<char, size_t> v);`),
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
        `h2dtscpp_gen_1743 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1743 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1744
  * @tc.name h2dtscpp_gen_1744
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char, unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1744', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1744(std::map<char, unsigned> v);`),
        unions: parseUnion(`void r7sp1744(std::map<char, unsigned> v);`),
        structs: parseStruct(`void r7sp1744(std::map<char, unsigned> v);`),
        classes: parseClass(`void r7sp1744(std::map<char, unsigned> v);`),
        funcs: parseFunction(`void r7sp1744(std::map<char, unsigned> v);`),
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
        `h2dtscpp_gen_1744 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1744 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1745
  * @tc.name h2dtscpp_gen_1745
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char, double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1745', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1745(std::map<char, double> v);`),
        unions: parseUnion(`void r7sp1745(std::map<char, double> v);`),
        structs: parseStruct(`void r7sp1745(std::map<char, double> v);`),
        classes: parseClass(`void r7sp1745(std::map<char, double> v);`),
        funcs: parseFunction(`void r7sp1745(std::map<char, double> v);`),
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
        `h2dtscpp_gen_1745 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1745 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1746
  * @tc.name h2dtscpp_gen_1746
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char, float>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1746', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1746(std::map<char, float> v);`),
        unions: parseUnion(`void r7sp1746(std::map<char, float> v);`),
        structs: parseStruct(`void r7sp1746(std::map<char, float> v);`),
        classes: parseClass(`void r7sp1746(std::map<char, float> v);`),
        funcs: parseFunction(`void r7sp1746(std::map<char, float> v);`),
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
        `h2dtscpp_gen_1746 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1746 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1747
  * @tc.name h2dtscpp_gen_1747
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char16_t, int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1747', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1747(std::map<char16_t, int32_t> v);`),
        unions: parseUnion(`void r7sp1747(std::map<char16_t, int32_t> v);`),
        structs: parseStruct(`void r7sp1747(std::map<char16_t, int32_t> v);`),
        classes: parseClass(`void r7sp1747(std::map<char16_t, int32_t> v);`),
        funcs: parseFunction(`void r7sp1747(std::map<char16_t, int32_t> v);`),
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
        `h2dtscpp_gen_1747 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1747 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1748
  * @tc.name h2dtscpp_gen_1748
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char32_t, size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1748', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1748(std::map<char32_t, size_t> v);`),
        unions: parseUnion(`void r7sp1748(std::map<char32_t, size_t> v);`),
        structs: parseStruct(`void r7sp1748(std::map<char32_t, size_t> v);`),
        classes: parseClass(`void r7sp1748(std::map<char32_t, size_t> v);`),
        funcs: parseFunction(`void r7sp1748(std::map<char32_t, size_t> v);`),
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
        `h2dtscpp_gen_1748 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1748 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1749
  * @tc.name h2dtscpp_gen_1749
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char8_t, uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1749', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1749(std::map<char8_t, uint32_t> v);`),
        unions: parseUnion(`void r7sp1749(std::map<char8_t, uint32_t> v);`),
        structs: parseStruct(`void r7sp1749(std::map<char8_t, uint32_t> v);`),
        classes: parseClass(`void r7sp1749(std::map<char8_t, uint32_t> v);`),
        funcs: parseFunction(`void r7sp1749(std::map<char8_t, uint32_t> v);`),
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
        `h2dtscpp_gen_1749 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1749 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1750
  * @tc.name h2dtscpp_gen_1750
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char32_t, int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1750', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1750(std::map<char32_t, int8_t> v);`),
        unions: parseUnion(`void r7sp1750(std::map<char32_t, int8_t> v);`),
        structs: parseStruct(`void r7sp1750(std::map<char32_t, int8_t> v);`),
        classes: parseClass(`void r7sp1750(std::map<char32_t, int8_t> v);`),
        funcs: parseFunction(`void r7sp1750(std::map<char32_t, int8_t> v);`),
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
        `h2dtscpp_gen_1750 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1750 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1751
  * @tc.name h2dtscpp_gen_1751
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<wchar_t, uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1751', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1751(std::map<wchar_t, uint16_t> v);`),
        unions: parseUnion(`void r7sp1751(std::map<wchar_t, uint16_t> v);`),
        structs: parseStruct(`void r7sp1751(std::map<wchar_t, uint16_t> v);`),
        classes: parseClass(`void r7sp1751(std::map<wchar_t, uint16_t> v);`),
        funcs: parseFunction(`void r7sp1751(std::map<wchar_t, uint16_t> v);`),
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
        `h2dtscpp_gen_1751 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1751 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1752
  * @tc.name h2dtscpp_gen_1752
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<int, bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1752', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1752(std::map<int, bool> v);`),
        unions: parseUnion(`void r7sp1752(std::map<int, bool> v);`),
        structs: parseStruct(`void r7sp1752(std::map<int, bool> v);`),
        classes: parseClass(`void r7sp1752(std::map<int, bool> v);`),
        funcs: parseFunction(`void r7sp1752(std::map<int, bool> v);`),
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
        `h2dtscpp_gen_1752 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1752 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1753
  * @tc.name h2dtscpp_gen_1753
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char, bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1753', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1753(std::map<char, bool> v);`),
        unions: parseUnion(`void r7sp1753(std::map<char, bool> v);`),
        structs: parseStruct(`void r7sp1753(std::map<char, bool> v);`),
        classes: parseClass(`void r7sp1753(std::map<char, bool> v);`),
        funcs: parseFunction(`void r7sp1753(std::map<char, bool> v);`),
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
        `h2dtscpp_gen_1753 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1753 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1754
  * @tc.name h2dtscpp_gen_1754
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<int, char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1754', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1754(std::map<int, char> v);`),
        unions: parseUnion(`void r7sp1754(std::map<int, char> v);`),
        structs: parseStruct(`void r7sp1754(std::map<int, char> v);`),
        classes: parseClass(`void r7sp1754(std::map<int, char> v);`),
        funcs: parseFunction(`void r7sp1754(std::map<int, char> v);`),
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
        `h2dtscpp_gen_1754 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1754 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1755
  * @tc.name h2dtscpp_gen_1755
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<size_t, char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1755', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1755(std::map<size_t, char> v);`),
        unions: parseUnion(`void r7sp1755(std::map<size_t, char> v);`),
        structs: parseStruct(`void r7sp1755(std::map<size_t, char> v);`),
        classes: parseClass(`void r7sp1755(std::map<size_t, char> v);`),
        funcs: parseFunction(`void r7sp1755(std::map<size_t, char> v);`),
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
        `h2dtscpp_gen_1755 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1755 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1756
  * @tc.name h2dtscpp_gen_1756
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<unsigned, char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1756', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1756(std::map<unsigned, char> v);`),
        unions: parseUnion(`void r7sp1756(std::map<unsigned, char> v);`),
        structs: parseStruct(`void r7sp1756(std::map<unsigned, char> v);`),
        classes: parseClass(`void r7sp1756(std::map<unsigned, char> v);`),
        funcs: parseFunction(`void r7sp1756(std::map<unsigned, char> v);`),
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
        `h2dtscpp_gen_1756 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1756 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1757
  * @tc.name h2dtscpp_gen_1757
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<int, int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1757', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1757(std::map<int, int>::iterator v);`),
        unions: parseUnion(`void r7sp1757(std::map<int, int>::iterator v);`),
        structs: parseStruct(`void r7sp1757(std::map<int, int>::iterator v);`),
        classes: parseClass(`void r7sp1757(std::map<int, int>::iterator v);`),
        funcs: parseFunction(`void r7sp1757(std::map<int, int>::iterator v);`),
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
        `h2dtscpp_gen_1757 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1757 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1758
  * @tc.name h2dtscpp_gen_1758
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char, int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1758', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1758(std::map<char, int>::iterator v);`),
        unions: parseUnion(`void r7sp1758(std::map<char, int>::iterator v);`),
        structs: parseStruct(`void r7sp1758(std::map<char, int>::iterator v);`),
        classes: parseClass(`void r7sp1758(std::map<char, int>::iterator v);`),
        funcs: parseFunction(`void r7sp1758(std::map<char, int>::iterator v);`),
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
        `h2dtscpp_gen_1758 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1758 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1759
  * @tc.name h2dtscpp_gen_1759
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char, size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1759', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1759(std::map<char, size_t>::iterator v);`),
        unions: parseUnion(`void r7sp1759(std::map<char, size_t>::iterator v);`),
        structs: parseStruct(`void r7sp1759(std::map<char, size_t>::iterator v);`),
        classes: parseClass(`void r7sp1759(std::map<char, size_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1759(std::map<char, size_t>::iterator v);`),
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
        `h2dtscpp_gen_1759 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1759 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1760
  * @tc.name h2dtscpp_gen_1760
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char, unsigned>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1760', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1760(std::map<char, unsigned>::iterator v);`),
        unions: parseUnion(`void r7sp1760(std::map<char, unsigned>::iterator v);`),
        structs: parseStruct(`void r7sp1760(std::map<char, unsigned>::iterator v);`),
        classes: parseClass(`void r7sp1760(std::map<char, unsigned>::iterator v);`),
        funcs: parseFunction(`void r7sp1760(std::map<char, unsigned>::iterator v);`),
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
        `h2dtscpp_gen_1760 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1760 执行异常: ${String(err)}`);
    }
  });
});
