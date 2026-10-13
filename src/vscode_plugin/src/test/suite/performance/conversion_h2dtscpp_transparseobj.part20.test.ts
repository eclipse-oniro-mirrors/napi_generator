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
  * @tc.number h2dtscpp_tpo_0666
  * @tc.name h2dtscpp_tpo_0666
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0666', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp666(std::unordered_multiset<int16_t> v);`),
        unions: parseUnion(`void r8sp666(std::unordered_multiset<int16_t> v);`),
        structs: parseStruct(`void r8sp666(std::unordered_multiset<int16_t> v);`),
        classes: parseClass(`void r8sp666(std::unordered_multiset<int16_t> v);`),
        funcs: parseFunction(`void r8sp666(std::unordered_multiset<int16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0666 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0666 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0667
  * @tc.name h2dtscpp_tpo_0667
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0667', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp667(std::unordered_multiset<int32_t> v);`),
        unions: parseUnion(`void r8sp667(std::unordered_multiset<int32_t> v);`),
        structs: parseStruct(`void r8sp667(std::unordered_multiset<int32_t> v);`),
        classes: parseClass(`void r8sp667(std::unordered_multiset<int32_t> v);`),
        funcs: parseFunction(`void r8sp667(std::unordered_multiset<int32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0667 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0667 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0668
  * @tc.name h2dtscpp_tpo_0668
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<int64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0668', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp668(std::unordered_multiset<int64_t> v);`),
        unions: parseUnion(`void r8sp668(std::unordered_multiset<int64_t> v);`),
        structs: parseStruct(`void r8sp668(std::unordered_multiset<int64_t> v);`),
        classes: parseClass(`void r8sp668(std::unordered_multiset<int64_t> v);`),
        funcs: parseFunction(`void r8sp668(std::unordered_multiset<int64_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0668 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0668 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0669
  * @tc.name h2dtscpp_tpo_0669
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0669', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp669(std::unordered_multiset<unsigned> v);`),
        unions: parseUnion(`void r8sp669(std::unordered_multiset<unsigned> v);`),
        structs: parseStruct(`void r8sp669(std::unordered_multiset<unsigned> v);`),
        classes: parseClass(`void r8sp669(std::unordered_multiset<unsigned> v);`),
        funcs: parseFunction(`void r8sp669(std::unordered_multiset<unsigned> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0669 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0669 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0670
  * @tc.name h2dtscpp_tpo_0670
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0670', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp670(std::unordered_multiset<bool> v);`),
        unions: parseUnion(`void r8sp670(std::unordered_multiset<bool> v);`),
        structs: parseStruct(`void r8sp670(std::unordered_multiset<bool> v);`),
        classes: parseClass(`void r8sp670(std::unordered_multiset<bool> v);`),
        funcs: parseFunction(`void r8sp670(std::unordered_multiset<bool> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0670 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0670 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0671
  * @tc.name h2dtscpp_tpo_0671
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0671', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp671(std::unordered_multiset<char> v);`),
        unions: parseUnion(`void r8sp671(std::unordered_multiset<char> v);`),
        structs: parseStruct(`void r8sp671(std::unordered_multiset<char> v);`),
        classes: parseClass(`void r8sp671(std::unordered_multiset<char> v);`),
        funcs: parseFunction(`void r8sp671(std::unordered_multiset<char> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0671 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0671 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0672
  * @tc.name h2dtscpp_tpo_0672
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<wchar_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0672', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp672(std::unordered_multiset<wchar_t> v);`),
        unions: parseUnion(`void r8sp672(std::unordered_multiset<wchar_t> v);`),
        structs: parseStruct(`void r8sp672(std::unordered_multiset<wchar_t> v);`),
        classes: parseClass(`void r8sp672(std::unordered_multiset<wchar_t> v);`),
        funcs: parseFunction(`void r8sp672(std::unordered_multiset<wchar_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0672 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0672 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0673
  * @tc.name h2dtscpp_tpo_0673
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<char8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0673', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp673(std::unordered_multiset<char8_t> v);`),
        unions: parseUnion(`void r8sp673(std::unordered_multiset<char8_t> v);`),
        structs: parseStruct(`void r8sp673(std::unordered_multiset<char8_t> v);`),
        classes: parseClass(`void r8sp673(std::unordered_multiset<char8_t> v);`),
        funcs: parseFunction(`void r8sp673(std::unordered_multiset<char8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0673 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0673 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0674
  * @tc.name h2dtscpp_tpo_0674
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<char16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0674', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp674(std::unordered_multiset<char16_t> v);`),
        unions: parseUnion(`void r8sp674(std::unordered_multiset<char16_t> v);`),
        structs: parseStruct(`void r8sp674(std::unordered_multiset<char16_t> v);`),
        classes: parseClass(`void r8sp674(std::unordered_multiset<char16_t> v);`),
        funcs: parseFunction(`void r8sp674(std::unordered_multiset<char16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0674 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0674 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0675
  * @tc.name h2dtscpp_tpo_0675
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0675', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp675(std::unordered_multiset<char32_t> v);`),
        unions: parseUnion(`void r8sp675(std::unordered_multiset<char32_t> v);`),
        structs: parseStruct(`void r8sp675(std::unordered_multiset<char32_t> v);`),
        classes: parseClass(`void r8sp675(std::unordered_multiset<char32_t> v);`),
        funcs: parseFunction(`void r8sp675(std::unordered_multiset<char32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0675 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0675 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0676
  * @tc.name h2dtscpp_tpo_0676
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0676', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp676(std::unordered_multiset<int>::iterator v);`),
        unions: parseUnion(`void r8sp676(std::unordered_multiset<int>::iterator v);`),
        structs: parseStruct(`void r8sp676(std::unordered_multiset<int>::iterator v);`),
        classes: parseClass(`void r8sp676(std::unordered_multiset<int>::iterator v);`),
        funcs: parseFunction(`void r8sp676(std::unordered_multiset<int>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0676 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0676 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0677
  * @tc.name h2dtscpp_tpo_0677
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0677', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp677(std::unordered_multiset<size_t>::iterator v);`),
        unions: parseUnion(`void r8sp677(std::unordered_multiset<size_t>::iterator v);`),
        structs: parseStruct(`void r8sp677(std::unordered_multiset<size_t>::iterator v);`),
        classes: parseClass(`void r8sp677(std::unordered_multiset<size_t>::iterator v);`),
        funcs: parseFunction(`void r8sp677(std::unordered_multiset<size_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0677 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0677 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0678
  * @tc.name h2dtscpp_tpo_0678
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<double>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0678', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp678(std::unordered_multiset<double>::iterator v);`),
        unions: parseUnion(`void r8sp678(std::unordered_multiset<double>::iterator v);`),
        structs: parseStruct(`void r8sp678(std::unordered_multiset<double>::iterator v);`),
        classes: parseClass(`void r8sp678(std::unordered_multiset<double>::iterator v);`),
        funcs: parseFunction(`void r8sp678(std::unordered_multiset<double>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0678 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0678 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0679
  * @tc.name h2dtscpp_tpo_0679
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<float>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0679', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp679(std::unordered_multiset<float>::iterator v);`),
        unions: parseUnion(`void r8sp679(std::unordered_multiset<float>::iterator v);`),
        structs: parseStruct(`void r8sp679(std::unordered_multiset<float>::iterator v);`),
        classes: parseClass(`void r8sp679(std::unordered_multiset<float>::iterator v);`),
        funcs: parseFunction(`void r8sp679(std::unordered_multiset<float>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0679 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0679 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0680
  * @tc.name h2dtscpp_tpo_0680
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0680', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp680(std::unordered_multiset<long>::iterator v);`),
        unions: parseUnion(`void r8sp680(std::unordered_multiset<long>::iterator v);`),
        structs: parseStruct(`void r8sp680(std::unordered_multiset<long>::iterator v);`),
        classes: parseClass(`void r8sp680(std::unordered_multiset<long>::iterator v);`),
        funcs: parseFunction(`void r8sp680(std::unordered_multiset<long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0680 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0680 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0681
  * @tc.name h2dtscpp_tpo_0681
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0681', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp681(std::unordered_multiset<short>::iterator v);`),
        unions: parseUnion(`void r8sp681(std::unordered_multiset<short>::iterator v);`),
        structs: parseStruct(`void r8sp681(std::unordered_multiset<short>::iterator v);`),
        classes: parseClass(`void r8sp681(std::unordered_multiset<short>::iterator v);`),
        funcs: parseFunction(`void r8sp681(std::unordered_multiset<short>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0681 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0681 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0682
  * @tc.name h2dtscpp_tpo_0682
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<uint8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0682', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp682(std::unordered_multiset<uint8_t>::iterator v);`),
        unions: parseUnion(`void r8sp682(std::unordered_multiset<uint8_t>::iterator v);`),
        structs: parseStruct(`void r8sp682(std::unordered_multiset<uint8_t>::iterator v);`),
        classes: parseClass(`void r8sp682(std::unordered_multiset<uint8_t>::iterator v);`),
        funcs: parseFunction(`void r8sp682(std::unordered_multiset<uint8_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0682 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0682 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0683
  * @tc.name h2dtscpp_tpo_0683
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<uint16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0683', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp683(std::unordered_multiset<uint16_t>::iterator v);`),
        unions: parseUnion(`void r8sp683(std::unordered_multiset<uint16_t>::iterator v);`),
        structs: parseStruct(`void r8sp683(std::unordered_multiset<uint16_t>::iterator v);`),
        classes: parseClass(`void r8sp683(std::unordered_multiset<uint16_t>::iterator v);`),
        funcs: parseFunction(`void r8sp683(std::unordered_multiset<uint16_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0683 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0683 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0684
  * @tc.name h2dtscpp_tpo_0684
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<uint32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0684', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp684(std::unordered_multiset<uint32_t>::iterator v);`),
        unions: parseUnion(`void r8sp684(std::unordered_multiset<uint32_t>::iterator v);`),
        structs: parseStruct(`void r8sp684(std::unordered_multiset<uint32_t>::iterator v);`),
        classes: parseClass(`void r8sp684(std::unordered_multiset<uint32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp684(std::unordered_multiset<uint32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0684 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0684 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0685
  * @tc.name h2dtscpp_tpo_0685
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<uint64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0685', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp685(std::unordered_multiset<uint64_t>::iterator v);`),
        unions: parseUnion(`void r8sp685(std::unordered_multiset<uint64_t>::iterator v);`),
        structs: parseStruct(`void r8sp685(std::unordered_multiset<uint64_t>::iterator v);`),
        classes: parseClass(`void r8sp685(std::unordered_multiset<uint64_t>::iterator v);`),
        funcs: parseFunction(`void r8sp685(std::unordered_multiset<uint64_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0685 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0685 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0686
  * @tc.name h2dtscpp_tpo_0686
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<int8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0686', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp686(std::unordered_multiset<int8_t>::iterator v);`),
        unions: parseUnion(`void r8sp686(std::unordered_multiset<int8_t>::iterator v);`),
        structs: parseStruct(`void r8sp686(std::unordered_multiset<int8_t>::iterator v);`),
        classes: parseClass(`void r8sp686(std::unordered_multiset<int8_t>::iterator v);`),
        funcs: parseFunction(`void r8sp686(std::unordered_multiset<int8_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0686 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0686 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0687
  * @tc.name h2dtscpp_tpo_0687
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<int16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0687', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp687(std::unordered_multiset<int16_t>::iterator v);`),
        unions: parseUnion(`void r8sp687(std::unordered_multiset<int16_t>::iterator v);`),
        structs: parseStruct(`void r8sp687(std::unordered_multiset<int16_t>::iterator v);`),
        classes: parseClass(`void r8sp687(std::unordered_multiset<int16_t>::iterator v);`),
        funcs: parseFunction(`void r8sp687(std::unordered_multiset<int16_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0687 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0687 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0688
  * @tc.name h2dtscpp_tpo_0688
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<int32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0688', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp688(std::unordered_multiset<int32_t>::iterator v);`),
        unions: parseUnion(`void r8sp688(std::unordered_multiset<int32_t>::iterator v);`),
        structs: parseStruct(`void r8sp688(std::unordered_multiset<int32_t>::iterator v);`),
        classes: parseClass(`void r8sp688(std::unordered_multiset<int32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp688(std::unordered_multiset<int32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0688 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0688 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0689
  * @tc.name h2dtscpp_tpo_0689
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<int64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0689', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp689(std::unordered_multiset<int64_t>::iterator v);`),
        unions: parseUnion(`void r8sp689(std::unordered_multiset<int64_t>::iterator v);`),
        structs: parseStruct(`void r8sp689(std::unordered_multiset<int64_t>::iterator v);`),
        classes: parseClass(`void r8sp689(std::unordered_multiset<int64_t>::iterator v);`),
        funcs: parseFunction(`void r8sp689(std::unordered_multiset<int64_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0689 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0689 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0690
  * @tc.name h2dtscpp_tpo_0690
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<unsigned>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0690', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp690(std::unordered_multiset<unsigned>::iterator v);`),
        unions: parseUnion(`void r8sp690(std::unordered_multiset<unsigned>::iterator v);`),
        structs: parseStruct(`void r8sp690(std::unordered_multiset<unsigned>::iterator v);`),
        classes: parseClass(`void r8sp690(std::unordered_multiset<unsigned>::iterator v);`),
        funcs: parseFunction(`void r8sp690(std::unordered_multiset<unsigned>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0690 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0690 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0691
  * @tc.name h2dtscpp_tpo_0691
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0691', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp691(std::unordered_multiset<bool>::iterator v);`),
        unions: parseUnion(`void r8sp691(std::unordered_multiset<bool>::iterator v);`),
        structs: parseStruct(`void r8sp691(std::unordered_multiset<bool>::iterator v);`),
        classes: parseClass(`void r8sp691(std::unordered_multiset<bool>::iterator v);`),
        funcs: parseFunction(`void r8sp691(std::unordered_multiset<bool>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0691 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0691 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0692
  * @tc.name h2dtscpp_tpo_0692
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0692', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp692(std::unordered_multiset<char>::iterator v);`),
        unions: parseUnion(`void r8sp692(std::unordered_multiset<char>::iterator v);`),
        structs: parseStruct(`void r8sp692(std::unordered_multiset<char>::iterator v);`),
        classes: parseClass(`void r8sp692(std::unordered_multiset<char>::iterator v);`),
        funcs: parseFunction(`void r8sp692(std::unordered_multiset<char>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0692 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0692 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0693
  * @tc.name h2dtscpp_tpo_0693
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<wchar_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0693', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp693(std::unordered_multiset<wchar_t>::iterator v);`),
        unions: parseUnion(`void r8sp693(std::unordered_multiset<wchar_t>::iterator v);`),
        structs: parseStruct(`void r8sp693(std::unordered_multiset<wchar_t>::iterator v);`),
        classes: parseClass(`void r8sp693(std::unordered_multiset<wchar_t>::iterator v);`),
        funcs: parseFunction(`void r8sp693(std::unordered_multiset<wchar_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0693 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0693 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0694
  * @tc.name h2dtscpp_tpo_0694
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<char8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0694', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp694(std::unordered_multiset<char8_t>::iterator v);`),
        unions: parseUnion(`void r8sp694(std::unordered_multiset<char8_t>::iterator v);`),
        structs: parseStruct(`void r8sp694(std::unordered_multiset<char8_t>::iterator v);`),
        classes: parseClass(`void r8sp694(std::unordered_multiset<char8_t>::iterator v);`),
        funcs: parseFunction(`void r8sp694(std::unordered_multiset<char8_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0694 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0694 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0695
  * @tc.name h2dtscpp_tpo_0695
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<char16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0695', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp695(std::unordered_multiset<char16_t>::iterator v);`),
        unions: parseUnion(`void r8sp695(std::unordered_multiset<char16_t>::iterator v);`),
        structs: parseStruct(`void r8sp695(std::unordered_multiset<char16_t>::iterator v);`),
        classes: parseClass(`void r8sp695(std::unordered_multiset<char16_t>::iterator v);`),
        funcs: parseFunction(`void r8sp695(std::unordered_multiset<char16_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0695 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0695 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0696
  * @tc.name h2dtscpp_tpo_0696
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<char32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0696', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp696(std::unordered_multiset<char32_t>::iterator v);`),
        unions: parseUnion(`void r8sp696(std::unordered_multiset<char32_t>::iterator v);`),
        structs: parseStruct(`void r8sp696(std::unordered_multiset<char32_t>::iterator v);`),
        classes: parseClass(`void r8sp696(std::unordered_multiset<char32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp696(std::unordered_multiset<char32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0696 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0696 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0697
  * @tc.name h2dtscpp_tpo_0697
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::tuple<int, char, bool, size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0697', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp697(std::tuple<int, char, bool, size_t> v);`),
        unions: parseUnion(`void r8sp697(std::tuple<int, char, bool, size_t> v);`),
        structs: parseStruct(`void r8sp697(std::tuple<int, char, bool, size_t> v);`),
        classes: parseClass(`void r8sp697(std::tuple<int, char, bool, size_t> v);`),
        funcs: parseFunction(`void r8sp697(std::tuple<int, char, bool, size_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0697 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0697 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0698
  * @tc.name h2dtscpp_tpo_0698
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::tuple<double, wchar_t, uint32_t, float, long, short, char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0698', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp698(std::tuple<double, wchar_t, uint32_t, float, long, short, char32_t> v);`),
        unions: parseUnion(`void r8sp698(std::tuple<double, wchar_t, uint32_t, float, long, short, char32_t> v);`),
        structs: parseStruct(`void r8sp698(std::tuple<double, wchar_t, uint32_t, float, long, short, char32_t> v);`),
        classes: parseClass(`void r8sp698(std::tuple<double, wchar_t, uint32_t, float, long, short, char32_t> v);`),
        funcs: parseFunction(`void r8sp698(std::tuple<double, wchar_t, uint32_t, float, long, short, char32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0698 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0698 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0699
  * @tc.name h2dtscpp_tpo_0699
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::tuple<char16_t, uint16_t, char8_t, uint8_t, unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0699', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp699(std::tuple<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);`),
        unions: parseUnion(`void r8sp699(std::tuple<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);`),
        structs: parseStruct(`void r8sp699(std::tuple<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);`),
        classes: parseClass(`void r8sp699(std::tuple<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);`),
        funcs: parseFunction(`void r8sp699(std::tuple<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0699 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0699 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0700
  * @tc.name h2dtscpp_tpo_0700
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::pair<int, char, bool, size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0700', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp700(std::pair<int, char, bool, size_t> v);`),
        unions: parseUnion(`void r8sp700(std::pair<int, char, bool, size_t> v);`),
        structs: parseStruct(`void r8sp700(std::pair<int, char, bool, size_t> v);`),
        classes: parseClass(`void r8sp700(std::pair<int, char, bool, size_t> v);`),
        funcs: parseFunction(`void r8sp700(std::pair<int, char, bool, size_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0700 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0700 执行异常: ${String(err)}`);
    }
  });
});
