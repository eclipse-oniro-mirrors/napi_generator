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
  * @tc.number h2dtscpp_gen_1761
  * @tc.name h2dtscpp_gen_1761
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char, double>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1761', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1761(std::map<char, double>::iterator v);`),
        unions: parseUnion(`void r7sp1761(std::map<char, double>::iterator v);`),
        structs: parseStruct(`void r7sp1761(std::map<char, double>::iterator v);`),
        classes: parseClass(`void r7sp1761(std::map<char, double>::iterator v);`),
        funcs: parseFunction(`void r7sp1761(std::map<char, double>::iterator v);`),
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
        `h2dtscpp_gen_1761 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1761 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1762
  * @tc.name h2dtscpp_gen_1762
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char, float>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1762', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1762(std::map<char, float>::iterator v);`),
        unions: parseUnion(`void r7sp1762(std::map<char, float>::iterator v);`),
        structs: parseStruct(`void r7sp1762(std::map<char, float>::iterator v);`),
        classes: parseClass(`void r7sp1762(std::map<char, float>::iterator v);`),
        funcs: parseFunction(`void r7sp1762(std::map<char, float>::iterator v);`),
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
        `h2dtscpp_gen_1762 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1762 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1763
  * @tc.name h2dtscpp_gen_1763
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char16_t, int32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1763', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1763(std::map<char16_t, int32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1763(std::map<char16_t, int32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1763(std::map<char16_t, int32_t>::iterator v);`),
        classes: parseClass(`void r7sp1763(std::map<char16_t, int32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1763(std::map<char16_t, int32_t>::iterator v);`),
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
        `h2dtscpp_gen_1763 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1763 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1764
  * @tc.name h2dtscpp_gen_1764
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char32_t, size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1764', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1764(std::map<char32_t, size_t>::iterator v);`),
        unions: parseUnion(`void r7sp1764(std::map<char32_t, size_t>::iterator v);`),
        structs: parseStruct(`void r7sp1764(std::map<char32_t, size_t>::iterator v);`),
        classes: parseClass(`void r7sp1764(std::map<char32_t, size_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1764(std::map<char32_t, size_t>::iterator v);`),
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
        `h2dtscpp_gen_1764 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1764 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1765
  * @tc.name h2dtscpp_gen_1765
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char8_t, uint32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1765', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1765(std::map<char8_t, uint32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1765(std::map<char8_t, uint32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1765(std::map<char8_t, uint32_t>::iterator v);`),
        classes: parseClass(`void r7sp1765(std::map<char8_t, uint32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1765(std::map<char8_t, uint32_t>::iterator v);`),
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
        `h2dtscpp_gen_1765 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1765 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1766
  * @tc.name h2dtscpp_gen_1766
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char32_t, int8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1766', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1766(std::map<char32_t, int8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1766(std::map<char32_t, int8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1766(std::map<char32_t, int8_t>::iterator v);`),
        classes: parseClass(`void r7sp1766(std::map<char32_t, int8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1766(std::map<char32_t, int8_t>::iterator v);`),
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
        `h2dtscpp_gen_1766 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1766 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1767
  * @tc.name h2dtscpp_gen_1767
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<wchar_t, uint16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1767', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1767(std::map<wchar_t, uint16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1767(std::map<wchar_t, uint16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1767(std::map<wchar_t, uint16_t>::iterator v);`),
        classes: parseClass(`void r7sp1767(std::map<wchar_t, uint16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1767(std::map<wchar_t, uint16_t>::iterator v);`),
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
        `h2dtscpp_gen_1767 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1767 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1768
  * @tc.name h2dtscpp_gen_1768
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<int, bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1768', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1768(std::map<int, bool>::iterator v);`),
        unions: parseUnion(`void r7sp1768(std::map<int, bool>::iterator v);`),
        structs: parseStruct(`void r7sp1768(std::map<int, bool>::iterator v);`),
        classes: parseClass(`void r7sp1768(std::map<int, bool>::iterator v);`),
        funcs: parseFunction(`void r7sp1768(std::map<int, bool>::iterator v);`),
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
        `h2dtscpp_gen_1768 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1768 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1769
  * @tc.name h2dtscpp_gen_1769
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<char, bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1769', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1769(std::map<char, bool>::iterator v);`),
        unions: parseUnion(`void r7sp1769(std::map<char, bool>::iterator v);`),
        structs: parseStruct(`void r7sp1769(std::map<char, bool>::iterator v);`),
        classes: parseClass(`void r7sp1769(std::map<char, bool>::iterator v);`),
        funcs: parseFunction(`void r7sp1769(std::map<char, bool>::iterator v);`),
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
        `h2dtscpp_gen_1769 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1769 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1770
  * @tc.name h2dtscpp_gen_1770
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<int, char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1770', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1770(std::map<int, char>::iterator v);`),
        unions: parseUnion(`void r7sp1770(std::map<int, char>::iterator v);`),
        structs: parseStruct(`void r7sp1770(std::map<int, char>::iterator v);`),
        classes: parseClass(`void r7sp1770(std::map<int, char>::iterator v);`),
        funcs: parseFunction(`void r7sp1770(std::map<int, char>::iterator v);`),
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
        `h2dtscpp_gen_1770 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1770 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1771
  * @tc.name h2dtscpp_gen_1771
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<size_t, char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1771', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1771(std::map<size_t, char>::iterator v);`),
        unions: parseUnion(`void r7sp1771(std::map<size_t, char>::iterator v);`),
        structs: parseStruct(`void r7sp1771(std::map<size_t, char>::iterator v);`),
        classes: parseClass(`void r7sp1771(std::map<size_t, char>::iterator v);`),
        funcs: parseFunction(`void r7sp1771(std::map<size_t, char>::iterator v);`),
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
        `h2dtscpp_gen_1771 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1771 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1772
  * @tc.name h2dtscpp_gen_1772
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::map<unsigned, char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1772', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1772(std::map<unsigned, char>::iterator v);`),
        unions: parseUnion(`void r7sp1772(std::map<unsigned, char>::iterator v);`),
        structs: parseStruct(`void r7sp1772(std::map<unsigned, char>::iterator v);`),
        classes: parseClass(`void r7sp1772(std::map<unsigned, char>::iterator v);`),
        funcs: parseFunction(`void r7sp1772(std::map<unsigned, char>::iterator v);`),
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
        `h2dtscpp_gen_1772 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1772 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1773
  * @tc.name h2dtscpp_gen_1773
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<int, int>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1773', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1773(std::unordered_map<int, int> v);`),
        unions: parseUnion(`void r7sp1773(std::unordered_map<int, int> v);`),
        structs: parseStruct(`void r7sp1773(std::unordered_map<int, int> v);`),
        classes: parseClass(`void r7sp1773(std::unordered_map<int, int> v);`),
        funcs: parseFunction(`void r7sp1773(std::unordered_map<int, int> v);`),
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
        `h2dtscpp_gen_1773 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1773 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1774
  * @tc.name h2dtscpp_gen_1774
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<char, int>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1774', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1774(std::unordered_map<char, int> v);`),
        unions: parseUnion(`void r7sp1774(std::unordered_map<char, int> v);`),
        structs: parseStruct(`void r7sp1774(std::unordered_map<char, int> v);`),
        classes: parseClass(`void r7sp1774(std::unordered_map<char, int> v);`),
        funcs: parseFunction(`void r7sp1774(std::unordered_map<char, int> v);`),
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
        `h2dtscpp_gen_1774 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1774 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1775
  * @tc.name h2dtscpp_gen_1775
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<char, size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1775', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1775(std::unordered_map<char, size_t> v);`),
        unions: parseUnion(`void r7sp1775(std::unordered_map<char, size_t> v);`),
        structs: parseStruct(`void r7sp1775(std::unordered_map<char, size_t> v);`),
        classes: parseClass(`void r7sp1775(std::unordered_map<char, size_t> v);`),
        funcs: parseFunction(`void r7sp1775(std::unordered_map<char, size_t> v);`),
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
        `h2dtscpp_gen_1775 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1775 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1776
  * @tc.name h2dtscpp_gen_1776
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<char, unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1776', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1776(std::unordered_map<char, unsigned> v);`),
        unions: parseUnion(`void r7sp1776(std::unordered_map<char, unsigned> v);`),
        structs: parseStruct(`void r7sp1776(std::unordered_map<char, unsigned> v);`),
        classes: parseClass(`void r7sp1776(std::unordered_map<char, unsigned> v);`),
        funcs: parseFunction(`void r7sp1776(std::unordered_map<char, unsigned> v);`),
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
        `h2dtscpp_gen_1776 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1776 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1777
  * @tc.name h2dtscpp_gen_1777
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<char, double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1777', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1777(std::unordered_map<char, double> v);`),
        unions: parseUnion(`void r7sp1777(std::unordered_map<char, double> v);`),
        structs: parseStruct(`void r7sp1777(std::unordered_map<char, double> v);`),
        classes: parseClass(`void r7sp1777(std::unordered_map<char, double> v);`),
        funcs: parseFunction(`void r7sp1777(std::unordered_map<char, double> v);`),
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
        `h2dtscpp_gen_1777 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1777 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1778
  * @tc.name h2dtscpp_gen_1778
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<char, float>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1778', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1778(std::unordered_map<char, float> v);`),
        unions: parseUnion(`void r7sp1778(std::unordered_map<char, float> v);`),
        structs: parseStruct(`void r7sp1778(std::unordered_map<char, float> v);`),
        classes: parseClass(`void r7sp1778(std::unordered_map<char, float> v);`),
        funcs: parseFunction(`void r7sp1778(std::unordered_map<char, float> v);`),
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
        `h2dtscpp_gen_1778 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1778 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1779
  * @tc.name h2dtscpp_gen_1779
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<char16_t, int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1779', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1779(std::unordered_map<char16_t, int32_t> v);`),
        unions: parseUnion(`void r7sp1779(std::unordered_map<char16_t, int32_t> v);`),
        structs: parseStruct(`void r7sp1779(std::unordered_map<char16_t, int32_t> v);`),
        classes: parseClass(`void r7sp1779(std::unordered_map<char16_t, int32_t> v);`),
        funcs: parseFunction(`void r7sp1779(std::unordered_map<char16_t, int32_t> v);`),
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
        `h2dtscpp_gen_1779 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1779 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1780
  * @tc.name h2dtscpp_gen_1780
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<char32_t, size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1780', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1780(std::unordered_map<char32_t, size_t> v);`),
        unions: parseUnion(`void r7sp1780(std::unordered_map<char32_t, size_t> v);`),
        structs: parseStruct(`void r7sp1780(std::unordered_map<char32_t, size_t> v);`),
        classes: parseClass(`void r7sp1780(std::unordered_map<char32_t, size_t> v);`),
        funcs: parseFunction(`void r7sp1780(std::unordered_map<char32_t, size_t> v);`),
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
        `h2dtscpp_gen_1780 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1780 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1781
  * @tc.name h2dtscpp_gen_1781
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<char8_t, uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1781', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1781(std::unordered_map<char8_t, uint32_t> v);`),
        unions: parseUnion(`void r7sp1781(std::unordered_map<char8_t, uint32_t> v);`),
        structs: parseStruct(`void r7sp1781(std::unordered_map<char8_t, uint32_t> v);`),
        classes: parseClass(`void r7sp1781(std::unordered_map<char8_t, uint32_t> v);`),
        funcs: parseFunction(`void r7sp1781(std::unordered_map<char8_t, uint32_t> v);`),
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
        `h2dtscpp_gen_1781 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1781 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1782
  * @tc.name h2dtscpp_gen_1782
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<char32_t, int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1782', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1782(std::unordered_map<char32_t, int8_t> v);`),
        unions: parseUnion(`void r7sp1782(std::unordered_map<char32_t, int8_t> v);`),
        structs: parseStruct(`void r7sp1782(std::unordered_map<char32_t, int8_t> v);`),
        classes: parseClass(`void r7sp1782(std::unordered_map<char32_t, int8_t> v);`),
        funcs: parseFunction(`void r7sp1782(std::unordered_map<char32_t, int8_t> v);`),
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
        `h2dtscpp_gen_1782 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1782 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1783
  * @tc.name h2dtscpp_gen_1783
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<wchar_t, uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1783', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1783(std::unordered_map<wchar_t, uint16_t> v);`),
        unions: parseUnion(`void r7sp1783(std::unordered_map<wchar_t, uint16_t> v);`),
        structs: parseStruct(`void r7sp1783(std::unordered_map<wchar_t, uint16_t> v);`),
        classes: parseClass(`void r7sp1783(std::unordered_map<wchar_t, uint16_t> v);`),
        funcs: parseFunction(`void r7sp1783(std::unordered_map<wchar_t, uint16_t> v);`),
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
        `h2dtscpp_gen_1783 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1783 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1784
  * @tc.name h2dtscpp_gen_1784
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<int, bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1784', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1784(std::unordered_map<int, bool> v);`),
        unions: parseUnion(`void r7sp1784(std::unordered_map<int, bool> v);`),
        structs: parseStruct(`void r7sp1784(std::unordered_map<int, bool> v);`),
        classes: parseClass(`void r7sp1784(std::unordered_map<int, bool> v);`),
        funcs: parseFunction(`void r7sp1784(std::unordered_map<int, bool> v);`),
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
        `h2dtscpp_gen_1784 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1784 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1785
  * @tc.name h2dtscpp_gen_1785
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<char, bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1785', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1785(std::unordered_map<char, bool> v);`),
        unions: parseUnion(`void r7sp1785(std::unordered_map<char, bool> v);`),
        structs: parseStruct(`void r7sp1785(std::unordered_map<char, bool> v);`),
        classes: parseClass(`void r7sp1785(std::unordered_map<char, bool> v);`),
        funcs: parseFunction(`void r7sp1785(std::unordered_map<char, bool> v);`),
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
        `h2dtscpp_gen_1785 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1785 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1786
  * @tc.name h2dtscpp_gen_1786
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<int, char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1786', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1786(std::unordered_map<int, char> v);`),
        unions: parseUnion(`void r7sp1786(std::unordered_map<int, char> v);`),
        structs: parseStruct(`void r7sp1786(std::unordered_map<int, char> v);`),
        classes: parseClass(`void r7sp1786(std::unordered_map<int, char> v);`),
        funcs: parseFunction(`void r7sp1786(std::unordered_map<int, char> v);`),
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
        `h2dtscpp_gen_1786 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1786 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1787
  * @tc.name h2dtscpp_gen_1787
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<size_t, char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1787', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1787(std::unordered_map<size_t, char> v);`),
        unions: parseUnion(`void r7sp1787(std::unordered_map<size_t, char> v);`),
        structs: parseStruct(`void r7sp1787(std::unordered_map<size_t, char> v);`),
        classes: parseClass(`void r7sp1787(std::unordered_map<size_t, char> v);`),
        funcs: parseFunction(`void r7sp1787(std::unordered_map<size_t, char> v);`),
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
        `h2dtscpp_gen_1787 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1787 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1788
  * @tc.name h2dtscpp_gen_1788
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<unsigned, char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1788', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1788(std::unordered_map<unsigned, char> v);`),
        unions: parseUnion(`void r7sp1788(std::unordered_map<unsigned, char> v);`),
        structs: parseStruct(`void r7sp1788(std::unordered_map<unsigned, char> v);`),
        classes: parseClass(`void r7sp1788(std::unordered_map<unsigned, char> v);`),
        funcs: parseFunction(`void r7sp1788(std::unordered_map<unsigned, char> v);`),
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
        `h2dtscpp_gen_1788 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1788 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1789
  * @tc.name h2dtscpp_gen_1789
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<int, int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1789', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1789(std::unordered_map<int, int>::iterator v);`),
        unions: parseUnion(`void r7sp1789(std::unordered_map<int, int>::iterator v);`),
        structs: parseStruct(`void r7sp1789(std::unordered_map<int, int>::iterator v);`),
        classes: parseClass(`void r7sp1789(std::unordered_map<int, int>::iterator v);`),
        funcs: parseFunction(`void r7sp1789(std::unordered_map<int, int>::iterator v);`),
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
        `h2dtscpp_gen_1789 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1789 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1790
  * @tc.name h2dtscpp_gen_1790
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::unordered_map<char, int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1790', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1790(std::unordered_map<char, int>::iterator v);`),
        unions: parseUnion(`void r7sp1790(std::unordered_map<char, int>::iterator v);`),
        structs: parseStruct(`void r7sp1790(std::unordered_map<char, int>::iterator v);`),
        classes: parseClass(`void r7sp1790(std::unordered_map<char, int>::iterator v);`),
        funcs: parseFunction(`void r7sp1790(std::unordered_map<char, int>::iterator v);`),
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
        `h2dtscpp_gen_1790 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1790 执行异常: ${String(err)}`);
    }
  });
});
