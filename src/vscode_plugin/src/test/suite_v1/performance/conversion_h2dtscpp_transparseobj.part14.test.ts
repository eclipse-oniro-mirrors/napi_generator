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

suite('Performance_H2DTSCPP_TransParseObj_Suite', function () {
  /**
  * @tc.number h2dtscpp_tpo_0456
  * @tc.name h2dtscpp_tpo_0456
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<char32_t, size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0456', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp456(std::unordered_map<char32_t, size_t>::iterator v);`),
        unions: parseUnion(`void r8sp456(std::unordered_map<char32_t, size_t>::iterator v);`),
        structs: parseStruct(`void r8sp456(std::unordered_map<char32_t, size_t>::iterator v);`),
        classes: parseClass(`void r8sp456(std::unordered_map<char32_t, size_t>::iterator v);`),
        funcs: parseFunction(`void r8sp456(std::unordered_map<char32_t, size_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0456 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0456 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0457
  * @tc.name h2dtscpp_tpo_0457
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<char8_t, uint32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0457', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp457(std::unordered_map<char8_t, uint32_t>::iterator v);`),
        unions: parseUnion(`void r8sp457(std::unordered_map<char8_t, uint32_t>::iterator v);`),
        structs: parseStruct(`void r8sp457(std::unordered_map<char8_t, uint32_t>::iterator v);`),
        classes: parseClass(`void r8sp457(std::unordered_map<char8_t, uint32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp457(std::unordered_map<char8_t, uint32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0457 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0457 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0458
  * @tc.name h2dtscpp_tpo_0458
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<char32_t, int8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0458', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp458(std::unordered_map<char32_t, int8_t>::iterator v);`),
        unions: parseUnion(`void r8sp458(std::unordered_map<char32_t, int8_t>::iterator v);`),
        structs: parseStruct(`void r8sp458(std::unordered_map<char32_t, int8_t>::iterator v);`),
        classes: parseClass(`void r8sp458(std::unordered_map<char32_t, int8_t>::iterator v);`),
        funcs: parseFunction(`void r8sp458(std::unordered_map<char32_t, int8_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0458 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0458 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0459
  * @tc.name h2dtscpp_tpo_0459
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<wchar_t, uint16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0459', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp459(std::unordered_map<wchar_t, uint16_t>::iterator v);`),
        unions: parseUnion(`void r8sp459(std::unordered_map<wchar_t, uint16_t>::iterator v);`),
        structs: parseStruct(`void r8sp459(std::unordered_map<wchar_t, uint16_t>::iterator v);`),
        classes: parseClass(`void r8sp459(std::unordered_map<wchar_t, uint16_t>::iterator v);`),
        funcs: parseFunction(`void r8sp459(std::unordered_map<wchar_t, uint16_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0459 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0459 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0460
  * @tc.name h2dtscpp_tpo_0460
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<int, bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0460', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp460(std::unordered_map<int, bool>::iterator v);`),
        unions: parseUnion(`void r8sp460(std::unordered_map<int, bool>::iterator v);`),
        structs: parseStruct(`void r8sp460(std::unordered_map<int, bool>::iterator v);`),
        classes: parseClass(`void r8sp460(std::unordered_map<int, bool>::iterator v);`),
        funcs: parseFunction(`void r8sp460(std::unordered_map<int, bool>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0460 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0460 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0461
  * @tc.name h2dtscpp_tpo_0461
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<char, bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0461', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp461(std::unordered_map<char, bool>::iterator v);`),
        unions: parseUnion(`void r8sp461(std::unordered_map<char, bool>::iterator v);`),
        structs: parseStruct(`void r8sp461(std::unordered_map<char, bool>::iterator v);`),
        classes: parseClass(`void r8sp461(std::unordered_map<char, bool>::iterator v);`),
        funcs: parseFunction(`void r8sp461(std::unordered_map<char, bool>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0461 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0461 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0462
  * @tc.name h2dtscpp_tpo_0462
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<int, char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0462', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp462(std::unordered_map<int, char>::iterator v);`),
        unions: parseUnion(`void r8sp462(std::unordered_map<int, char>::iterator v);`),
        structs: parseStruct(`void r8sp462(std::unordered_map<int, char>::iterator v);`),
        classes: parseClass(`void r8sp462(std::unordered_map<int, char>::iterator v);`),
        funcs: parseFunction(`void r8sp462(std::unordered_map<int, char>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0462 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0462 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0463
  * @tc.name h2dtscpp_tpo_0463
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<size_t, char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0463', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp463(std::unordered_map<size_t, char>::iterator v);`),
        unions: parseUnion(`void r8sp463(std::unordered_map<size_t, char>::iterator v);`),
        structs: parseStruct(`void r8sp463(std::unordered_map<size_t, char>::iterator v);`),
        classes: parseClass(`void r8sp463(std::unordered_map<size_t, char>::iterator v);`),
        funcs: parseFunction(`void r8sp463(std::unordered_map<size_t, char>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0463 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0463 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0464
  * @tc.name h2dtscpp_tpo_0464
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<unsigned, char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0464', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp464(std::unordered_map<unsigned, char>::iterator v);`),
        unions: parseUnion(`void r8sp464(std::unordered_map<unsigned, char>::iterator v);`),
        structs: parseStruct(`void r8sp464(std::unordered_map<unsigned, char>::iterator v);`),
        classes: parseClass(`void r8sp464(std::unordered_map<unsigned, char>::iterator v);`),
        funcs: parseFunction(`void r8sp464(std::unordered_map<unsigned, char>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0464 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0464 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0465
  * @tc.name h2dtscpp_tpo_0465
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<int, int>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0465', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp465(std::multimap<int, int> v);`),
        unions: parseUnion(`void r8sp465(std::multimap<int, int> v);`),
        structs: parseStruct(`void r8sp465(std::multimap<int, int> v);`),
        classes: parseClass(`void r8sp465(std::multimap<int, int> v);`),
        funcs: parseFunction(`void r8sp465(std::multimap<int, int> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0465 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0465 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0466
  * @tc.name h2dtscpp_tpo_0466
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char, int>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0466', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp466(std::multimap<char, int> v);`),
        unions: parseUnion(`void r8sp466(std::multimap<char, int> v);`),
        structs: parseStruct(`void r8sp466(std::multimap<char, int> v);`),
        classes: parseClass(`void r8sp466(std::multimap<char, int> v);`),
        funcs: parseFunction(`void r8sp466(std::multimap<char, int> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0466 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0466 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0467
  * @tc.name h2dtscpp_tpo_0467
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char, size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0467', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp467(std::multimap<char, size_t> v);`),
        unions: parseUnion(`void r8sp467(std::multimap<char, size_t> v);`),
        structs: parseStruct(`void r8sp467(std::multimap<char, size_t> v);`),
        classes: parseClass(`void r8sp467(std::multimap<char, size_t> v);`),
        funcs: parseFunction(`void r8sp467(std::multimap<char, size_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0467 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0467 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0468
  * @tc.name h2dtscpp_tpo_0468
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char, unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0468', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp468(std::multimap<char, unsigned> v);`),
        unions: parseUnion(`void r8sp468(std::multimap<char, unsigned> v);`),
        structs: parseStruct(`void r8sp468(std::multimap<char, unsigned> v);`),
        classes: parseClass(`void r8sp468(std::multimap<char, unsigned> v);`),
        funcs: parseFunction(`void r8sp468(std::multimap<char, unsigned> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0468 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0468 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0469
  * @tc.name h2dtscpp_tpo_0469
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char, double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0469', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp469(std::multimap<char, double> v);`),
        unions: parseUnion(`void r8sp469(std::multimap<char, double> v);`),
        structs: parseStruct(`void r8sp469(std::multimap<char, double> v);`),
        classes: parseClass(`void r8sp469(std::multimap<char, double> v);`),
        funcs: parseFunction(`void r8sp469(std::multimap<char, double> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0469 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0469 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0470
  * @tc.name h2dtscpp_tpo_0470
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char, float>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0470', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp470(std::multimap<char, float> v);`),
        unions: parseUnion(`void r8sp470(std::multimap<char, float> v);`),
        structs: parseStruct(`void r8sp470(std::multimap<char, float> v);`),
        classes: parseClass(`void r8sp470(std::multimap<char, float> v);`),
        funcs: parseFunction(`void r8sp470(std::multimap<char, float> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0470 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0470 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0471
  * @tc.name h2dtscpp_tpo_0471
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char16_t, int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0471', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp471(std::multimap<char16_t, int32_t> v);`),
        unions: parseUnion(`void r8sp471(std::multimap<char16_t, int32_t> v);`),
        structs: parseStruct(`void r8sp471(std::multimap<char16_t, int32_t> v);`),
        classes: parseClass(`void r8sp471(std::multimap<char16_t, int32_t> v);`),
        funcs: parseFunction(`void r8sp471(std::multimap<char16_t, int32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0471 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0471 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0472
  * @tc.name h2dtscpp_tpo_0472
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char32_t, size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0472', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp472(std::multimap<char32_t, size_t> v);`),
        unions: parseUnion(`void r8sp472(std::multimap<char32_t, size_t> v);`),
        structs: parseStruct(`void r8sp472(std::multimap<char32_t, size_t> v);`),
        classes: parseClass(`void r8sp472(std::multimap<char32_t, size_t> v);`),
        funcs: parseFunction(`void r8sp472(std::multimap<char32_t, size_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0472 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0472 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0473
  * @tc.name h2dtscpp_tpo_0473
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char8_t, uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0473', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp473(std::multimap<char8_t, uint32_t> v);`),
        unions: parseUnion(`void r8sp473(std::multimap<char8_t, uint32_t> v);`),
        structs: parseStruct(`void r8sp473(std::multimap<char8_t, uint32_t> v);`),
        classes: parseClass(`void r8sp473(std::multimap<char8_t, uint32_t> v);`),
        funcs: parseFunction(`void r8sp473(std::multimap<char8_t, uint32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0473 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0473 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0474
  * @tc.name h2dtscpp_tpo_0474
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char32_t, int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0474', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp474(std::multimap<char32_t, int8_t> v);`),
        unions: parseUnion(`void r8sp474(std::multimap<char32_t, int8_t> v);`),
        structs: parseStruct(`void r8sp474(std::multimap<char32_t, int8_t> v);`),
        classes: parseClass(`void r8sp474(std::multimap<char32_t, int8_t> v);`),
        funcs: parseFunction(`void r8sp474(std::multimap<char32_t, int8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0474 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0474 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0475
  * @tc.name h2dtscpp_tpo_0475
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<wchar_t, uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0475', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp475(std::multimap<wchar_t, uint16_t> v);`),
        unions: parseUnion(`void r8sp475(std::multimap<wchar_t, uint16_t> v);`),
        structs: parseStruct(`void r8sp475(std::multimap<wchar_t, uint16_t> v);`),
        classes: parseClass(`void r8sp475(std::multimap<wchar_t, uint16_t> v);`),
        funcs: parseFunction(`void r8sp475(std::multimap<wchar_t, uint16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0475 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0475 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0476
  * @tc.name h2dtscpp_tpo_0476
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<int, bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0476', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp476(std::multimap<int, bool> v);`),
        unions: parseUnion(`void r8sp476(std::multimap<int, bool> v);`),
        structs: parseStruct(`void r8sp476(std::multimap<int, bool> v);`),
        classes: parseClass(`void r8sp476(std::multimap<int, bool> v);`),
        funcs: parseFunction(`void r8sp476(std::multimap<int, bool> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0476 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0476 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0477
  * @tc.name h2dtscpp_tpo_0477
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char, bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0477', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp477(std::multimap<char, bool> v);`),
        unions: parseUnion(`void r8sp477(std::multimap<char, bool> v);`),
        structs: parseStruct(`void r8sp477(std::multimap<char, bool> v);`),
        classes: parseClass(`void r8sp477(std::multimap<char, bool> v);`),
        funcs: parseFunction(`void r8sp477(std::multimap<char, bool> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0477 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0477 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0478
  * @tc.name h2dtscpp_tpo_0478
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<int, char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0478', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp478(std::multimap<int, char> v);`),
        unions: parseUnion(`void r8sp478(std::multimap<int, char> v);`),
        structs: parseStruct(`void r8sp478(std::multimap<int, char> v);`),
        classes: parseClass(`void r8sp478(std::multimap<int, char> v);`),
        funcs: parseFunction(`void r8sp478(std::multimap<int, char> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0478 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0478 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0479
  * @tc.name h2dtscpp_tpo_0479
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<size_t, char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0479', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp479(std::multimap<size_t, char> v);`),
        unions: parseUnion(`void r8sp479(std::multimap<size_t, char> v);`),
        structs: parseStruct(`void r8sp479(std::multimap<size_t, char> v);`),
        classes: parseClass(`void r8sp479(std::multimap<size_t, char> v);`),
        funcs: parseFunction(`void r8sp479(std::multimap<size_t, char> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0479 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0479 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0480
  * @tc.name h2dtscpp_tpo_0480
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<unsigned, char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0480', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp480(std::multimap<unsigned, char> v);`),
        unions: parseUnion(`void r8sp480(std::multimap<unsigned, char> v);`),
        structs: parseStruct(`void r8sp480(std::multimap<unsigned, char> v);`),
        classes: parseClass(`void r8sp480(std::multimap<unsigned, char> v);`),
        funcs: parseFunction(`void r8sp480(std::multimap<unsigned, char> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0480 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0480 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0481
  * @tc.name h2dtscpp_tpo_0481
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<int, int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0481', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp481(std::multimap<int, int>::iterator v);`),
        unions: parseUnion(`void r8sp481(std::multimap<int, int>::iterator v);`),
        structs: parseStruct(`void r8sp481(std::multimap<int, int>::iterator v);`),
        classes: parseClass(`void r8sp481(std::multimap<int, int>::iterator v);`),
        funcs: parseFunction(`void r8sp481(std::multimap<int, int>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0481 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0481 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0482
  * @tc.name h2dtscpp_tpo_0482
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char, int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0482', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp482(std::multimap<char, int>::iterator v);`),
        unions: parseUnion(`void r8sp482(std::multimap<char, int>::iterator v);`),
        structs: parseStruct(`void r8sp482(std::multimap<char, int>::iterator v);`),
        classes: parseClass(`void r8sp482(std::multimap<char, int>::iterator v);`),
        funcs: parseFunction(`void r8sp482(std::multimap<char, int>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0482 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0482 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0483
  * @tc.name h2dtscpp_tpo_0483
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char, size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0483', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp483(std::multimap<char, size_t>::iterator v);`),
        unions: parseUnion(`void r8sp483(std::multimap<char, size_t>::iterator v);`),
        structs: parseStruct(`void r8sp483(std::multimap<char, size_t>::iterator v);`),
        classes: parseClass(`void r8sp483(std::multimap<char, size_t>::iterator v);`),
        funcs: parseFunction(`void r8sp483(std::multimap<char, size_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0483 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0483 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0484
  * @tc.name h2dtscpp_tpo_0484
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char, unsigned>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0484', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp484(std::multimap<char, unsigned>::iterator v);`),
        unions: parseUnion(`void r8sp484(std::multimap<char, unsigned>::iterator v);`),
        structs: parseStruct(`void r8sp484(std::multimap<char, unsigned>::iterator v);`),
        classes: parseClass(`void r8sp484(std::multimap<char, unsigned>::iterator v);`),
        funcs: parseFunction(`void r8sp484(std::multimap<char, unsigned>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0484 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0484 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0485
  * @tc.name h2dtscpp_tpo_0485
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char, double>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0485', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp485(std::multimap<char, double>::iterator v);`),
        unions: parseUnion(`void r8sp485(std::multimap<char, double>::iterator v);`),
        structs: parseStruct(`void r8sp485(std::multimap<char, double>::iterator v);`),
        classes: parseClass(`void r8sp485(std::multimap<char, double>::iterator v);`),
        funcs: parseFunction(`void r8sp485(std::multimap<char, double>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0485 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0485 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0486
  * @tc.name h2dtscpp_tpo_0486
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char, float>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0486', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp486(std::multimap<char, float>::iterator v);`),
        unions: parseUnion(`void r8sp486(std::multimap<char, float>::iterator v);`),
        structs: parseStruct(`void r8sp486(std::multimap<char, float>::iterator v);`),
        classes: parseClass(`void r8sp486(std::multimap<char, float>::iterator v);`),
        funcs: parseFunction(`void r8sp486(std::multimap<char, float>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0486 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0486 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0487
  * @tc.name h2dtscpp_tpo_0487
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char16_t, int32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0487', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp487(std::multimap<char16_t, int32_t>::iterator v);`),
        unions: parseUnion(`void r8sp487(std::multimap<char16_t, int32_t>::iterator v);`),
        structs: parseStruct(`void r8sp487(std::multimap<char16_t, int32_t>::iterator v);`),
        classes: parseClass(`void r8sp487(std::multimap<char16_t, int32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp487(std::multimap<char16_t, int32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0487 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0487 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0488
  * @tc.name h2dtscpp_tpo_0488
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char32_t, size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0488', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp488(std::multimap<char32_t, size_t>::iterator v);`),
        unions: parseUnion(`void r8sp488(std::multimap<char32_t, size_t>::iterator v);`),
        structs: parseStruct(`void r8sp488(std::multimap<char32_t, size_t>::iterator v);`),
        classes: parseClass(`void r8sp488(std::multimap<char32_t, size_t>::iterator v);`),
        funcs: parseFunction(`void r8sp488(std::multimap<char32_t, size_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0488 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0488 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0489
  * @tc.name h2dtscpp_tpo_0489
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char8_t, uint32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0489', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp489(std::multimap<char8_t, uint32_t>::iterator v);`),
        unions: parseUnion(`void r8sp489(std::multimap<char8_t, uint32_t>::iterator v);`),
        structs: parseStruct(`void r8sp489(std::multimap<char8_t, uint32_t>::iterator v);`),
        classes: parseClass(`void r8sp489(std::multimap<char8_t, uint32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp489(std::multimap<char8_t, uint32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0489 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0489 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0490
  * @tc.name h2dtscpp_tpo_0490
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char32_t, int8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0490', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp490(std::multimap<char32_t, int8_t>::iterator v);`),
        unions: parseUnion(`void r8sp490(std::multimap<char32_t, int8_t>::iterator v);`),
        structs: parseStruct(`void r8sp490(std::multimap<char32_t, int8_t>::iterator v);`),
        classes: parseClass(`void r8sp490(std::multimap<char32_t, int8_t>::iterator v);`),
        funcs: parseFunction(`void r8sp490(std::multimap<char32_t, int8_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0490 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0490 执行异常: ${String(err)}`);
    }
  });
});
