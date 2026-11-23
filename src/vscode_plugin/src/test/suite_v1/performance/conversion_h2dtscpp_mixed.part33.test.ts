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
  * @tc.number h2dtscpp_gen_1691
  * @tc.name h2dtscpp_gen_1691
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<int64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1691', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1691(std::valarray<int64_t>::iterator v);`),
        unions: parseUnion(`void r7sp1691(std::valarray<int64_t>::iterator v);`),
        structs: parseStruct(`void r7sp1691(std::valarray<int64_t>::iterator v);`),
        classes: parseClass(`void r7sp1691(std::valarray<int64_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1691(std::valarray<int64_t>::iterator v);`),
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
        `h2dtscpp_gen_1691 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1691 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1692
  * @tc.name h2dtscpp_gen_1692
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<unsigned>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1692', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1692(std::valarray<unsigned>::iterator v);`),
        unions: parseUnion(`void r7sp1692(std::valarray<unsigned>::iterator v);`),
        structs: parseStruct(`void r7sp1692(std::valarray<unsigned>::iterator v);`),
        classes: parseClass(`void r7sp1692(std::valarray<unsigned>::iterator v);`),
        funcs: parseFunction(`void r7sp1692(std::valarray<unsigned>::iterator v);`),
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
        `h2dtscpp_gen_1692 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1692 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1693
  * @tc.name h2dtscpp_gen_1693
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1693', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1693(std::valarray<bool>::iterator v);`),
        unions: parseUnion(`void r7sp1693(std::valarray<bool>::iterator v);`),
        structs: parseStruct(`void r7sp1693(std::valarray<bool>::iterator v);`),
        classes: parseClass(`void r7sp1693(std::valarray<bool>::iterator v);`),
        funcs: parseFunction(`void r7sp1693(std::valarray<bool>::iterator v);`),
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
        `h2dtscpp_gen_1693 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1693 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1694
  * @tc.name h2dtscpp_gen_1694
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1694', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1694(std::valarray<char>::iterator v);`),
        unions: parseUnion(`void r7sp1694(std::valarray<char>::iterator v);`),
        structs: parseStruct(`void r7sp1694(std::valarray<char>::iterator v);`),
        classes: parseClass(`void r7sp1694(std::valarray<char>::iterator v);`),
        funcs: parseFunction(`void r7sp1694(std::valarray<char>::iterator v);`),
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
        `h2dtscpp_gen_1694 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1694 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1695
  * @tc.name h2dtscpp_gen_1695
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<wchar_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1695', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1695(std::valarray<wchar_t>::iterator v);`),
        unions: parseUnion(`void r7sp1695(std::valarray<wchar_t>::iterator v);`),
        structs: parseStruct(`void r7sp1695(std::valarray<wchar_t>::iterator v);`),
        classes: parseClass(`void r7sp1695(std::valarray<wchar_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1695(std::valarray<wchar_t>::iterator v);`),
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
        `h2dtscpp_gen_1695 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1695 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1696
  * @tc.name h2dtscpp_gen_1696
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<char8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1696', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1696(std::valarray<char8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1696(std::valarray<char8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1696(std::valarray<char8_t>::iterator v);`),
        classes: parseClass(`void r7sp1696(std::valarray<char8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1696(std::valarray<char8_t>::iterator v);`),
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
        `h2dtscpp_gen_1696 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1696 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1697
  * @tc.name h2dtscpp_gen_1697
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<char16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1697', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1697(std::valarray<char16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1697(std::valarray<char16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1697(std::valarray<char16_t>::iterator v);`),
        classes: parseClass(`void r7sp1697(std::valarray<char16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1697(std::valarray<char16_t>::iterator v);`),
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
        `h2dtscpp_gen_1697 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1697 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1698
  * @tc.name h2dtscpp_gen_1698
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<char32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1698', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1698(std::valarray<char32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1698(std::valarray<char32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1698(std::valarray<char32_t>::iterator v);`),
        classes: parseClass(`void r7sp1698(std::valarray<char32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1698(std::valarray<char32_t>::iterator v);`),
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
        `h2dtscpp_gen_1698 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1698 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1700
  * @tc.name h2dtscpp_gen_1700
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1700', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1700(std::priority_queue<size_t> v);`),
        unions: parseUnion(`void r7sp1700(std::priority_queue<size_t> v);`),
        structs: parseStruct(`void r7sp1700(std::priority_queue<size_t> v);`),
        classes: parseClass(`void r7sp1700(std::priority_queue<size_t> v);`),
        funcs: parseFunction(`void r7sp1700(std::priority_queue<size_t> v);`),
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
        `h2dtscpp_gen_1700 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1700 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1701
  * @tc.name h2dtscpp_gen_1701
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1701', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1701(std::priority_queue<double> v);`),
        unions: parseUnion(`void r7sp1701(std::priority_queue<double> v);`),
        structs: parseStruct(`void r7sp1701(std::priority_queue<double> v);`),
        classes: parseClass(`void r7sp1701(std::priority_queue<double> v);`),
        funcs: parseFunction(`void r7sp1701(std::priority_queue<double> v);`),
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
        `h2dtscpp_gen_1701 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1701 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1702
  * @tc.name h2dtscpp_gen_1702
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<float>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1702', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1702(std::priority_queue<float> v);`),
        unions: parseUnion(`void r7sp1702(std::priority_queue<float> v);`),
        structs: parseStruct(`void r7sp1702(std::priority_queue<float> v);`),
        classes: parseClass(`void r7sp1702(std::priority_queue<float> v);`),
        funcs: parseFunction(`void r7sp1702(std::priority_queue<float> v);`),
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
        `h2dtscpp_gen_1702 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1702 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1703
  * @tc.name h2dtscpp_gen_1703
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1703', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1703(std::priority_queue<long> v);`),
        unions: parseUnion(`void r7sp1703(std::priority_queue<long> v);`),
        structs: parseStruct(`void r7sp1703(std::priority_queue<long> v);`),
        classes: parseClass(`void r7sp1703(std::priority_queue<long> v);`),
        funcs: parseFunction(`void r7sp1703(std::priority_queue<long> v);`),
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
        `h2dtscpp_gen_1703 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1703 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1704
  * @tc.name h2dtscpp_gen_1704
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1704', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1704(std::priority_queue<short> v);`),
        unions: parseUnion(`void r7sp1704(std::priority_queue<short> v);`),
        structs: parseStruct(`void r7sp1704(std::priority_queue<short> v);`),
        classes: parseClass(`void r7sp1704(std::priority_queue<short> v);`),
        funcs: parseFunction(`void r7sp1704(std::priority_queue<short> v);`),
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
        `h2dtscpp_gen_1704 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1704 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1705
  * @tc.name h2dtscpp_gen_1705
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<uint8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1705', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1705(std::priority_queue<uint8_t> v);`),
        unions: parseUnion(`void r7sp1705(std::priority_queue<uint8_t> v);`),
        structs: parseStruct(`void r7sp1705(std::priority_queue<uint8_t> v);`),
        classes: parseClass(`void r7sp1705(std::priority_queue<uint8_t> v);`),
        funcs: parseFunction(`void r7sp1705(std::priority_queue<uint8_t> v);`),
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
        `h2dtscpp_gen_1705 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1705 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1706
  * @tc.name h2dtscpp_gen_1706
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1706', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1706(std::priority_queue<uint16_t> v);`),
        unions: parseUnion(`void r7sp1706(std::priority_queue<uint16_t> v);`),
        structs: parseStruct(`void r7sp1706(std::priority_queue<uint16_t> v);`),
        classes: parseClass(`void r7sp1706(std::priority_queue<uint16_t> v);`),
        funcs: parseFunction(`void r7sp1706(std::priority_queue<uint16_t> v);`),
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
        `h2dtscpp_gen_1706 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1706 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1707
  * @tc.name h2dtscpp_gen_1707
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1707', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1707(std::priority_queue<uint32_t> v);`),
        unions: parseUnion(`void r7sp1707(std::priority_queue<uint32_t> v);`),
        structs: parseStruct(`void r7sp1707(std::priority_queue<uint32_t> v);`),
        classes: parseClass(`void r7sp1707(std::priority_queue<uint32_t> v);`),
        funcs: parseFunction(`void r7sp1707(std::priority_queue<uint32_t> v);`),
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
        `h2dtscpp_gen_1707 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1707 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1708
  * @tc.name h2dtscpp_gen_1708
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1708', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1708(std::priority_queue<uint64_t> v);`),
        unions: parseUnion(`void r7sp1708(std::priority_queue<uint64_t> v);`),
        structs: parseStruct(`void r7sp1708(std::priority_queue<uint64_t> v);`),
        classes: parseClass(`void r7sp1708(std::priority_queue<uint64_t> v);`),
        funcs: parseFunction(`void r7sp1708(std::priority_queue<uint64_t> v);`),
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
        `h2dtscpp_gen_1708 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1708 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1709
  * @tc.name h2dtscpp_gen_1709
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1709', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1709(std::priority_queue<int8_t> v);`),
        unions: parseUnion(`void r7sp1709(std::priority_queue<int8_t> v);`),
        structs: parseStruct(`void r7sp1709(std::priority_queue<int8_t> v);`),
        classes: parseClass(`void r7sp1709(std::priority_queue<int8_t> v);`),
        funcs: parseFunction(`void r7sp1709(std::priority_queue<int8_t> v);`),
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
        `h2dtscpp_gen_1709 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1709 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1710
  * @tc.name h2dtscpp_gen_1710
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1710', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1710(std::priority_queue<int16_t> v);`),
        unions: parseUnion(`void r7sp1710(std::priority_queue<int16_t> v);`),
        structs: parseStruct(`void r7sp1710(std::priority_queue<int16_t> v);`),
        classes: parseClass(`void r7sp1710(std::priority_queue<int16_t> v);`),
        funcs: parseFunction(`void r7sp1710(std::priority_queue<int16_t> v);`),
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
        `h2dtscpp_gen_1710 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1710 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1711
  * @tc.name h2dtscpp_gen_1711
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1711', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1711(std::priority_queue<int32_t> v);`),
        unions: parseUnion(`void r7sp1711(std::priority_queue<int32_t> v);`),
        structs: parseStruct(`void r7sp1711(std::priority_queue<int32_t> v);`),
        classes: parseClass(`void r7sp1711(std::priority_queue<int32_t> v);`),
        funcs: parseFunction(`void r7sp1711(std::priority_queue<int32_t> v);`),
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
        `h2dtscpp_gen_1711 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1711 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1712
  * @tc.name h2dtscpp_gen_1712
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<int64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1712', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1712(std::priority_queue<int64_t> v);`),
        unions: parseUnion(`void r7sp1712(std::priority_queue<int64_t> v);`),
        structs: parseStruct(`void r7sp1712(std::priority_queue<int64_t> v);`),
        classes: parseClass(`void r7sp1712(std::priority_queue<int64_t> v);`),
        funcs: parseFunction(`void r7sp1712(std::priority_queue<int64_t> v);`),
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
        `h2dtscpp_gen_1712 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1712 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1713
  * @tc.name h2dtscpp_gen_1713
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1713', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1713(std::priority_queue<unsigned> v);`),
        unions: parseUnion(`void r7sp1713(std::priority_queue<unsigned> v);`),
        structs: parseStruct(`void r7sp1713(std::priority_queue<unsigned> v);`),
        classes: parseClass(`void r7sp1713(std::priority_queue<unsigned> v);`),
        funcs: parseFunction(`void r7sp1713(std::priority_queue<unsigned> v);`),
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
        `h2dtscpp_gen_1713 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1713 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1714
  * @tc.name h2dtscpp_gen_1714
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1714', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1714(std::priority_queue<bool> v);`),
        unions: parseUnion(`void r7sp1714(std::priority_queue<bool> v);`),
        structs: parseStruct(`void r7sp1714(std::priority_queue<bool> v);`),
        classes: parseClass(`void r7sp1714(std::priority_queue<bool> v);`),
        funcs: parseFunction(`void r7sp1714(std::priority_queue<bool> v);`),
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
        `h2dtscpp_gen_1714 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1714 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1715
  * @tc.name h2dtscpp_gen_1715
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1715', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1715(std::priority_queue<char> v);`),
        unions: parseUnion(`void r7sp1715(std::priority_queue<char> v);`),
        structs: parseStruct(`void r7sp1715(std::priority_queue<char> v);`),
        classes: parseClass(`void r7sp1715(std::priority_queue<char> v);`),
        funcs: parseFunction(`void r7sp1715(std::priority_queue<char> v);`),
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
        `h2dtscpp_gen_1715 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1715 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1716
  * @tc.name h2dtscpp_gen_1716
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<wchar_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1716', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1716(std::priority_queue<wchar_t> v);`),
        unions: parseUnion(`void r7sp1716(std::priority_queue<wchar_t> v);`),
        structs: parseStruct(`void r7sp1716(std::priority_queue<wchar_t> v);`),
        classes: parseClass(`void r7sp1716(std::priority_queue<wchar_t> v);`),
        funcs: parseFunction(`void r7sp1716(std::priority_queue<wchar_t> v);`),
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
        `h2dtscpp_gen_1716 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1716 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1717
  * @tc.name h2dtscpp_gen_1717
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<char8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1717', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1717(std::priority_queue<char8_t> v);`),
        unions: parseUnion(`void r7sp1717(std::priority_queue<char8_t> v);`),
        structs: parseStruct(`void r7sp1717(std::priority_queue<char8_t> v);`),
        classes: parseClass(`void r7sp1717(std::priority_queue<char8_t> v);`),
        funcs: parseFunction(`void r7sp1717(std::priority_queue<char8_t> v);`),
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
        `h2dtscpp_gen_1717 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1717 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1718
  * @tc.name h2dtscpp_gen_1718
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<char16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1718', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1718(std::priority_queue<char16_t> v);`),
        unions: parseUnion(`void r7sp1718(std::priority_queue<char16_t> v);`),
        structs: parseStruct(`void r7sp1718(std::priority_queue<char16_t> v);`),
        classes: parseClass(`void r7sp1718(std::priority_queue<char16_t> v);`),
        funcs: parseFunction(`void r7sp1718(std::priority_queue<char16_t> v);`),
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
        `h2dtscpp_gen_1718 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1718 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1719
  * @tc.name h2dtscpp_gen_1719
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1719', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1719(std::priority_queue<char32_t> v);`),
        unions: parseUnion(`void r7sp1719(std::priority_queue<char32_t> v);`),
        structs: parseStruct(`void r7sp1719(std::priority_queue<char32_t> v);`),
        classes: parseClass(`void r7sp1719(std::priority_queue<char32_t> v);`),
        funcs: parseFunction(`void r7sp1719(std::priority_queue<char32_t> v);`),
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
        `h2dtscpp_gen_1719 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1719 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1720
  * @tc.name h2dtscpp_gen_1720
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1720', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1720(std::priority_queue<int>::iterator v);`),
        unions: parseUnion(`void r7sp1720(std::priority_queue<int>::iterator v);`),
        structs: parseStruct(`void r7sp1720(std::priority_queue<int>::iterator v);`),
        classes: parseClass(`void r7sp1720(std::priority_queue<int>::iterator v);`),
        funcs: parseFunction(`void r7sp1720(std::priority_queue<int>::iterator v);`),
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
        `h2dtscpp_gen_1720 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1720 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1721
  * @tc.name h2dtscpp_gen_1721
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1721', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1721(std::priority_queue<size_t>::iterator v);`),
        unions: parseUnion(`void r7sp1721(std::priority_queue<size_t>::iterator v);`),
        structs: parseStruct(`void r7sp1721(std::priority_queue<size_t>::iterator v);`),
        classes: parseClass(`void r7sp1721(std::priority_queue<size_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1721(std::priority_queue<size_t>::iterator v);`),
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
        `h2dtscpp_gen_1721 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1721 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1722
  * @tc.name h2dtscpp_gen_1722
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<double>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1722', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1722(std::priority_queue<double>::iterator v);`),
        unions: parseUnion(`void r7sp1722(std::priority_queue<double>::iterator v);`),
        structs: parseStruct(`void r7sp1722(std::priority_queue<double>::iterator v);`),
        classes: parseClass(`void r7sp1722(std::priority_queue<double>::iterator v);`),
        funcs: parseFunction(`void r7sp1722(std::priority_queue<double>::iterator v);`),
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
        `h2dtscpp_gen_1722 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1722 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1723
  * @tc.name h2dtscpp_gen_1723
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<float>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1723', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1723(std::priority_queue<float>::iterator v);`),
        unions: parseUnion(`void r7sp1723(std::priority_queue<float>::iterator v);`),
        structs: parseStruct(`void r7sp1723(std::priority_queue<float>::iterator v);`),
        classes: parseClass(`void r7sp1723(std::priority_queue<float>::iterator v);`),
        funcs: parseFunction(`void r7sp1723(std::priority_queue<float>::iterator v);`),
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
        `h2dtscpp_gen_1723 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1723 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1724
  * @tc.name h2dtscpp_gen_1724
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1724', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1724(std::priority_queue<long>::iterator v);`),
        unions: parseUnion(`void r7sp1724(std::priority_queue<long>::iterator v);`),
        structs: parseStruct(`void r7sp1724(std::priority_queue<long>::iterator v);`),
        classes: parseClass(`void r7sp1724(std::priority_queue<long>::iterator v);`),
        funcs: parseFunction(`void r7sp1724(std::priority_queue<long>::iterator v);`),
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
        `h2dtscpp_gen_1724 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1724 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1725
  * @tc.name h2dtscpp_gen_1725
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::priority_queue<short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1725', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1725(std::priority_queue<short>::iterator v);`),
        unions: parseUnion(`void r7sp1725(std::priority_queue<short>::iterator v);`),
        structs: parseStruct(`void r7sp1725(std::priority_queue<short>::iterator v);`),
        classes: parseClass(`void r7sp1725(std::priority_queue<short>::iterator v);`),
        funcs: parseFunction(`void r7sp1725(std::priority_queue<short>::iterator v);`),
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
        `h2dtscpp_gen_1725 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1725 执行异常: ${String(err)}`);
    }
  });
});
