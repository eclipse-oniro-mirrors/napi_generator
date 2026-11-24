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
  * @tc.number h2dtscpp_tpo_0491
  * @tc.name h2dtscpp_tpo_0491
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<wchar_t, uint16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0491', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp491(std::multimap<wchar_t, uint16_t>::iterator v);`),
        unions: parseUnion(`void r8sp491(std::multimap<wchar_t, uint16_t>::iterator v);`),
        structs: parseStruct(`void r8sp491(std::multimap<wchar_t, uint16_t>::iterator v);`),
        classes: parseClass(`void r8sp491(std::multimap<wchar_t, uint16_t>::iterator v);`),
        funcs: parseFunction(`void r8sp491(std::multimap<wchar_t, uint16_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0491 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0491 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0492
  * @tc.name h2dtscpp_tpo_0492
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<int, bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0492', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp492(std::multimap<int, bool>::iterator v);`),
        unions: parseUnion(`void r8sp492(std::multimap<int, bool>::iterator v);`),
        structs: parseStruct(`void r8sp492(std::multimap<int, bool>::iterator v);`),
        classes: parseClass(`void r8sp492(std::multimap<int, bool>::iterator v);`),
        funcs: parseFunction(`void r8sp492(std::multimap<int, bool>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0492 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0492 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0493
  * @tc.name h2dtscpp_tpo_0493
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char, bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0493', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp493(std::multimap<char, bool>::iterator v);`),
        unions: parseUnion(`void r8sp493(std::multimap<char, bool>::iterator v);`),
        structs: parseStruct(`void r8sp493(std::multimap<char, bool>::iterator v);`),
        classes: parseClass(`void r8sp493(std::multimap<char, bool>::iterator v);`),
        funcs: parseFunction(`void r8sp493(std::multimap<char, bool>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0493 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0493 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0494
  * @tc.name h2dtscpp_tpo_0494
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<int, char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0494', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp494(std::multimap<int, char>::iterator v);`),
        unions: parseUnion(`void r8sp494(std::multimap<int, char>::iterator v);`),
        structs: parseStruct(`void r8sp494(std::multimap<int, char>::iterator v);`),
        classes: parseClass(`void r8sp494(std::multimap<int, char>::iterator v);`),
        funcs: parseFunction(`void r8sp494(std::multimap<int, char>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0494 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0494 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0495
  * @tc.name h2dtscpp_tpo_0495
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<size_t, char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0495', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp495(std::multimap<size_t, char>::iterator v);`),
        unions: parseUnion(`void r8sp495(std::multimap<size_t, char>::iterator v);`),
        structs: parseStruct(`void r8sp495(std::multimap<size_t, char>::iterator v);`),
        classes: parseClass(`void r8sp495(std::multimap<size_t, char>::iterator v);`),
        funcs: parseFunction(`void r8sp495(std::multimap<size_t, char>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0495 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0495 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0496
  * @tc.name h2dtscpp_tpo_0496
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<unsigned, char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0496', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp496(std::multimap<unsigned, char>::iterator v);`),
        unions: parseUnion(`void r8sp496(std::multimap<unsigned, char>::iterator v);`),
        structs: parseStruct(`void r8sp496(std::multimap<unsigned, char>::iterator v);`),
        classes: parseClass(`void r8sp496(std::multimap<unsigned, char>::iterator v);`),
        funcs: parseFunction(`void r8sp496(std::multimap<unsigned, char>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0496 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0496 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0497
  * @tc.name h2dtscpp_tpo_0497
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<int, int>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0497', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp497(std::unordered_multimap<int, int> v);`),
        unions: parseUnion(`void r8sp497(std::unordered_multimap<int, int> v);`),
        structs: parseStruct(`void r8sp497(std::unordered_multimap<int, int> v);`),
        classes: parseClass(`void r8sp497(std::unordered_multimap<int, int> v);`),
        funcs: parseFunction(`void r8sp497(std::unordered_multimap<int, int> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0497 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0497 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0498
  * @tc.name h2dtscpp_tpo_0498
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char, int>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0498', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp498(std::unordered_multimap<char, int> v);`),
        unions: parseUnion(`void r8sp498(std::unordered_multimap<char, int> v);`),
        structs: parseStruct(`void r8sp498(std::unordered_multimap<char, int> v);`),
        classes: parseClass(`void r8sp498(std::unordered_multimap<char, int> v);`),
        funcs: parseFunction(`void r8sp498(std::unordered_multimap<char, int> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0498 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0498 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0499
  * @tc.name h2dtscpp_tpo_0499
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char, size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0499', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp499(std::unordered_multimap<char, size_t> v);`),
        unions: parseUnion(`void r8sp499(std::unordered_multimap<char, size_t> v);`),
        structs: parseStruct(`void r8sp499(std::unordered_multimap<char, size_t> v);`),
        classes: parseClass(`void r8sp499(std::unordered_multimap<char, size_t> v);`),
        funcs: parseFunction(`void r8sp499(std::unordered_multimap<char, size_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0499 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0499 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0500
  * @tc.name h2dtscpp_tpo_0500
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char, unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0500', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp500(std::unordered_multimap<char, unsigned> v);`),
        unions: parseUnion(`void r8sp500(std::unordered_multimap<char, unsigned> v);`),
        structs: parseStruct(`void r8sp500(std::unordered_multimap<char, unsigned> v);`),
        classes: parseClass(`void r8sp500(std::unordered_multimap<char, unsigned> v);`),
        funcs: parseFunction(`void r8sp500(std::unordered_multimap<char, unsigned> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0500 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0500 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0501
  * @tc.name h2dtscpp_tpo_0501
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char, double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0501', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp501(std::unordered_multimap<char, double> v);`),
        unions: parseUnion(`void r8sp501(std::unordered_multimap<char, double> v);`),
        structs: parseStruct(`void r8sp501(std::unordered_multimap<char, double> v);`),
        classes: parseClass(`void r8sp501(std::unordered_multimap<char, double> v);`),
        funcs: parseFunction(`void r8sp501(std::unordered_multimap<char, double> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0501 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0501 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0502
  * @tc.name h2dtscpp_tpo_0502
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char, float>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0502', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp502(std::unordered_multimap<char, float> v);`),
        unions: parseUnion(`void r8sp502(std::unordered_multimap<char, float> v);`),
        structs: parseStruct(`void r8sp502(std::unordered_multimap<char, float> v);`),
        classes: parseClass(`void r8sp502(std::unordered_multimap<char, float> v);`),
        funcs: parseFunction(`void r8sp502(std::unordered_multimap<char, float> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0502 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0502 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0503
  * @tc.name h2dtscpp_tpo_0503
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char16_t, int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0503', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp503(std::unordered_multimap<char16_t, int32_t> v);`),
        unions: parseUnion(`void r8sp503(std::unordered_multimap<char16_t, int32_t> v);`),
        structs: parseStruct(`void r8sp503(std::unordered_multimap<char16_t, int32_t> v);`),
        classes: parseClass(`void r8sp503(std::unordered_multimap<char16_t, int32_t> v);`),
        funcs: parseFunction(`void r8sp503(std::unordered_multimap<char16_t, int32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0503 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0503 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0504
  * @tc.name h2dtscpp_tpo_0504
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char32_t, size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0504', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp504(std::unordered_multimap<char32_t, size_t> v);`),
        unions: parseUnion(`void r8sp504(std::unordered_multimap<char32_t, size_t> v);`),
        structs: parseStruct(`void r8sp504(std::unordered_multimap<char32_t, size_t> v);`),
        classes: parseClass(`void r8sp504(std::unordered_multimap<char32_t, size_t> v);`),
        funcs: parseFunction(`void r8sp504(std::unordered_multimap<char32_t, size_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0504 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0504 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0505
  * @tc.name h2dtscpp_tpo_0505
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char8_t, uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0505', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp505(std::unordered_multimap<char8_t, uint32_t> v);`),
        unions: parseUnion(`void r8sp505(std::unordered_multimap<char8_t, uint32_t> v);`),
        structs: parseStruct(`void r8sp505(std::unordered_multimap<char8_t, uint32_t> v);`),
        classes: parseClass(`void r8sp505(std::unordered_multimap<char8_t, uint32_t> v);`),
        funcs: parseFunction(`void r8sp505(std::unordered_multimap<char8_t, uint32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0505 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0505 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0506
  * @tc.name h2dtscpp_tpo_0506
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char32_t, int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0506', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp506(std::unordered_multimap<char32_t, int8_t> v);`),
        unions: parseUnion(`void r8sp506(std::unordered_multimap<char32_t, int8_t> v);`),
        structs: parseStruct(`void r8sp506(std::unordered_multimap<char32_t, int8_t> v);`),
        classes: parseClass(`void r8sp506(std::unordered_multimap<char32_t, int8_t> v);`),
        funcs: parseFunction(`void r8sp506(std::unordered_multimap<char32_t, int8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0506 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0506 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0507
  * @tc.name h2dtscpp_tpo_0507
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<wchar_t, uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0507', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp507(std::unordered_multimap<wchar_t, uint16_t> v);`),
        unions: parseUnion(`void r8sp507(std::unordered_multimap<wchar_t, uint16_t> v);`),
        structs: parseStruct(`void r8sp507(std::unordered_multimap<wchar_t, uint16_t> v);`),
        classes: parseClass(`void r8sp507(std::unordered_multimap<wchar_t, uint16_t> v);`),
        funcs: parseFunction(`void r8sp507(std::unordered_multimap<wchar_t, uint16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0507 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0507 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0508
  * @tc.name h2dtscpp_tpo_0508
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<int, bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0508', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp508(std::unordered_multimap<int, bool> v);`),
        unions: parseUnion(`void r8sp508(std::unordered_multimap<int, bool> v);`),
        structs: parseStruct(`void r8sp508(std::unordered_multimap<int, bool> v);`),
        classes: parseClass(`void r8sp508(std::unordered_multimap<int, bool> v);`),
        funcs: parseFunction(`void r8sp508(std::unordered_multimap<int, bool> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0508 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0508 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0509
  * @tc.name h2dtscpp_tpo_0509
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char, bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0509', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp509(std::unordered_multimap<char, bool> v);`),
        unions: parseUnion(`void r8sp509(std::unordered_multimap<char, bool> v);`),
        structs: parseStruct(`void r8sp509(std::unordered_multimap<char, bool> v);`),
        classes: parseClass(`void r8sp509(std::unordered_multimap<char, bool> v);`),
        funcs: parseFunction(`void r8sp509(std::unordered_multimap<char, bool> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0509 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0509 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0510
  * @tc.name h2dtscpp_tpo_0510
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<int, char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0510', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp510(std::unordered_multimap<int, char> v);`),
        unions: parseUnion(`void r8sp510(std::unordered_multimap<int, char> v);`),
        structs: parseStruct(`void r8sp510(std::unordered_multimap<int, char> v);`),
        classes: parseClass(`void r8sp510(std::unordered_multimap<int, char> v);`),
        funcs: parseFunction(`void r8sp510(std::unordered_multimap<int, char> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0510 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0510 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0511
  * @tc.name h2dtscpp_tpo_0511
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<size_t, char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0511', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp511(std::unordered_multimap<size_t, char> v);`),
        unions: parseUnion(`void r8sp511(std::unordered_multimap<size_t, char> v);`),
        structs: parseStruct(`void r8sp511(std::unordered_multimap<size_t, char> v);`),
        classes: parseClass(`void r8sp511(std::unordered_multimap<size_t, char> v);`),
        funcs: parseFunction(`void r8sp511(std::unordered_multimap<size_t, char> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0511 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0511 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0512
  * @tc.name h2dtscpp_tpo_0512
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<unsigned, char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0512', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp512(std::unordered_multimap<unsigned, char> v);`),
        unions: parseUnion(`void r8sp512(std::unordered_multimap<unsigned, char> v);`),
        structs: parseStruct(`void r8sp512(std::unordered_multimap<unsigned, char> v);`),
        classes: parseClass(`void r8sp512(std::unordered_multimap<unsigned, char> v);`),
        funcs: parseFunction(`void r8sp512(std::unordered_multimap<unsigned, char> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0512 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0512 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0513
  * @tc.name h2dtscpp_tpo_0513
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<int, int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0513', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp513(std::unordered_multimap<int, int>::iterator v);`),
        unions: parseUnion(`void r8sp513(std::unordered_multimap<int, int>::iterator v);`),
        structs: parseStruct(`void r8sp513(std::unordered_multimap<int, int>::iterator v);`),
        classes: parseClass(`void r8sp513(std::unordered_multimap<int, int>::iterator v);`),
        funcs: parseFunction(`void r8sp513(std::unordered_multimap<int, int>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0513 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0513 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0514
  * @tc.name h2dtscpp_tpo_0514
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char, int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0514', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp514(std::unordered_multimap<char, int>::iterator v);`),
        unions: parseUnion(`void r8sp514(std::unordered_multimap<char, int>::iterator v);`),
        structs: parseStruct(`void r8sp514(std::unordered_multimap<char, int>::iterator v);`),
        classes: parseClass(`void r8sp514(std::unordered_multimap<char, int>::iterator v);`),
        funcs: parseFunction(`void r8sp514(std::unordered_multimap<char, int>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0514 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0514 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0515
  * @tc.name h2dtscpp_tpo_0515
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char, size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0515', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp515(std::unordered_multimap<char, size_t>::iterator v);`),
        unions: parseUnion(`void r8sp515(std::unordered_multimap<char, size_t>::iterator v);`),
        structs: parseStruct(`void r8sp515(std::unordered_multimap<char, size_t>::iterator v);`),
        classes: parseClass(`void r8sp515(std::unordered_multimap<char, size_t>::iterator v);`),
        funcs: parseFunction(`void r8sp515(std::unordered_multimap<char, size_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0515 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0515 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0516
  * @tc.name h2dtscpp_tpo_0516
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char, unsigned>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0516', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp516(std::unordered_multimap<char, unsigned>::iterator v);`),
        unions: parseUnion(`void r8sp516(std::unordered_multimap<char, unsigned>::iterator v);`),
        structs: parseStruct(`void r8sp516(std::unordered_multimap<char, unsigned>::iterator v);`),
        classes: parseClass(`void r8sp516(std::unordered_multimap<char, unsigned>::iterator v);`),
        funcs: parseFunction(`void r8sp516(std::unordered_multimap<char, unsigned>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0516 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0516 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0517
  * @tc.name h2dtscpp_tpo_0517
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char, double>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0517', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp517(std::unordered_multimap<char, double>::iterator v);`),
        unions: parseUnion(`void r8sp517(std::unordered_multimap<char, double>::iterator v);`),
        structs: parseStruct(`void r8sp517(std::unordered_multimap<char, double>::iterator v);`),
        classes: parseClass(`void r8sp517(std::unordered_multimap<char, double>::iterator v);`),
        funcs: parseFunction(`void r8sp517(std::unordered_multimap<char, double>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0517 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0517 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0518
  * @tc.name h2dtscpp_tpo_0518
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char, float>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0518', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp518(std::unordered_multimap<char, float>::iterator v);`),
        unions: parseUnion(`void r8sp518(std::unordered_multimap<char, float>::iterator v);`),
        structs: parseStruct(`void r8sp518(std::unordered_multimap<char, float>::iterator v);`),
        classes: parseClass(`void r8sp518(std::unordered_multimap<char, float>::iterator v);`),
        funcs: parseFunction(`void r8sp518(std::unordered_multimap<char, float>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0518 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0518 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0519
  * @tc.name h2dtscpp_tpo_0519
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char16_t, int32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0519', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp519(std::unordered_multimap<char16_t, int32_t>::iterator v);`),
        unions: parseUnion(`void r8sp519(std::unordered_multimap<char16_t, int32_t>::iterator v);`),
        structs: parseStruct(`void r8sp519(std::unordered_multimap<char16_t, int32_t>::iterator v);`),
        classes: parseClass(`void r8sp519(std::unordered_multimap<char16_t, int32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp519(std::unordered_multimap<char16_t, int32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0519 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0519 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0520
  * @tc.name h2dtscpp_tpo_0520
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char32_t, size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0520', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp520(std::unordered_multimap<char32_t, size_t>::iterator v);`),
        unions: parseUnion(`void r8sp520(std::unordered_multimap<char32_t, size_t>::iterator v);`),
        structs: parseStruct(`void r8sp520(std::unordered_multimap<char32_t, size_t>::iterator v);`),
        classes: parseClass(`void r8sp520(std::unordered_multimap<char32_t, size_t>::iterator v);`),
        funcs: parseFunction(`void r8sp520(std::unordered_multimap<char32_t, size_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0520 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0520 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0521
  * @tc.name h2dtscpp_tpo_0521
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char8_t, uint32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0521', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp521(std::unordered_multimap<char8_t, uint32_t>::iterator v);`),
        unions: parseUnion(`void r8sp521(std::unordered_multimap<char8_t, uint32_t>::iterator v);`),
        structs: parseStruct(`void r8sp521(std::unordered_multimap<char8_t, uint32_t>::iterator v);`),
        classes: parseClass(`void r8sp521(std::unordered_multimap<char8_t, uint32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp521(std::unordered_multimap<char8_t, uint32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0521 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0521 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0522
  * @tc.name h2dtscpp_tpo_0522
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char32_t, int8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0522', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp522(std::unordered_multimap<char32_t, int8_t>::iterator v);`),
        unions: parseUnion(`void r8sp522(std::unordered_multimap<char32_t, int8_t>::iterator v);`),
        structs: parseStruct(`void r8sp522(std::unordered_multimap<char32_t, int8_t>::iterator v);`),
        classes: parseClass(`void r8sp522(std::unordered_multimap<char32_t, int8_t>::iterator v);`),
        funcs: parseFunction(`void r8sp522(std::unordered_multimap<char32_t, int8_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0522 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0522 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0523
  * @tc.name h2dtscpp_tpo_0523
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<wchar_t, uint16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0523', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp523(std::unordered_multimap<wchar_t, uint16_t>::iterator v);`),
        unions: parseUnion(`void r8sp523(std::unordered_multimap<wchar_t, uint16_t>::iterator v);`),
        structs: parseStruct(`void r8sp523(std::unordered_multimap<wchar_t, uint16_t>::iterator v);`),
        classes: parseClass(`void r8sp523(std::unordered_multimap<wchar_t, uint16_t>::iterator v);`),
        funcs: parseFunction(`void r8sp523(std::unordered_multimap<wchar_t, uint16_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0523 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0523 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0524
  * @tc.name h2dtscpp_tpo_0524
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<int, bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0524', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp524(std::unordered_multimap<int, bool>::iterator v);`),
        unions: parseUnion(`void r8sp524(std::unordered_multimap<int, bool>::iterator v);`),
        structs: parseStruct(`void r8sp524(std::unordered_multimap<int, bool>::iterator v);`),
        classes: parseClass(`void r8sp524(std::unordered_multimap<int, bool>::iterator v);`),
        funcs: parseFunction(`void r8sp524(std::unordered_multimap<int, bool>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0524 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0524 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0525
  * @tc.name h2dtscpp_tpo_0525
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char, bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0525', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp525(std::unordered_multimap<char, bool>::iterator v);`),
        unions: parseUnion(`void r8sp525(std::unordered_multimap<char, bool>::iterator v);`),
        structs: parseStruct(`void r8sp525(std::unordered_multimap<char, bool>::iterator v);`),
        classes: parseClass(`void r8sp525(std::unordered_multimap<char, bool>::iterator v);`),
        funcs: parseFunction(`void r8sp525(std::unordered_multimap<char, bool>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0525 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0525 执行异常: ${String(err)}`);
    }
  });
});
