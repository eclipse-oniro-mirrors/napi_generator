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
  * @tc.number h2dtscpp_tpo_0561
  * @tc.name h2dtscpp_tpo_0561
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<int16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0561', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp561(std::set<int16_t>::iterator v);`),
        unions: parseUnion(`void r8sp561(std::set<int16_t>::iterator v);`),
        structs: parseStruct(`void r8sp561(std::set<int16_t>::iterator v);`),
        classes: parseClass(`void r8sp561(std::set<int16_t>::iterator v);`),
        funcs: parseFunction(`void r8sp561(std::set<int16_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0561 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0561 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0562
  * @tc.name h2dtscpp_tpo_0562
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<int32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0562', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp562(std::set<int32_t>::iterator v);`),
        unions: parseUnion(`void r8sp562(std::set<int32_t>::iterator v);`),
        structs: parseStruct(`void r8sp562(std::set<int32_t>::iterator v);`),
        classes: parseClass(`void r8sp562(std::set<int32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp562(std::set<int32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0562 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0562 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0563
  * @tc.name h2dtscpp_tpo_0563
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<int64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0563', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp563(std::set<int64_t>::iterator v);`),
        unions: parseUnion(`void r8sp563(std::set<int64_t>::iterator v);`),
        structs: parseStruct(`void r8sp563(std::set<int64_t>::iterator v);`),
        classes: parseClass(`void r8sp563(std::set<int64_t>::iterator v);`),
        funcs: parseFunction(`void r8sp563(std::set<int64_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0563 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0563 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0564
  * @tc.name h2dtscpp_tpo_0564
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<unsigned>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0564', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp564(std::set<unsigned>::iterator v);`),
        unions: parseUnion(`void r8sp564(std::set<unsigned>::iterator v);`),
        structs: parseStruct(`void r8sp564(std::set<unsigned>::iterator v);`),
        classes: parseClass(`void r8sp564(std::set<unsigned>::iterator v);`),
        funcs: parseFunction(`void r8sp564(std::set<unsigned>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0564 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0564 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0565
  * @tc.name h2dtscpp_tpo_0565
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0565', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp565(std::set<bool>::iterator v);`),
        unions: parseUnion(`void r8sp565(std::set<bool>::iterator v);`),
        structs: parseStruct(`void r8sp565(std::set<bool>::iterator v);`),
        classes: parseClass(`void r8sp565(std::set<bool>::iterator v);`),
        funcs: parseFunction(`void r8sp565(std::set<bool>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0565 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0565 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0566
  * @tc.name h2dtscpp_tpo_0566
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0566', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp566(std::set<char>::iterator v);`),
        unions: parseUnion(`void r8sp566(std::set<char>::iterator v);`),
        structs: parseStruct(`void r8sp566(std::set<char>::iterator v);`),
        classes: parseClass(`void r8sp566(std::set<char>::iterator v);`),
        funcs: parseFunction(`void r8sp566(std::set<char>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0566 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0566 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0567
  * @tc.name h2dtscpp_tpo_0567
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<wchar_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0567', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp567(std::set<wchar_t>::iterator v);`),
        unions: parseUnion(`void r8sp567(std::set<wchar_t>::iterator v);`),
        structs: parseStruct(`void r8sp567(std::set<wchar_t>::iterator v);`),
        classes: parseClass(`void r8sp567(std::set<wchar_t>::iterator v);`),
        funcs: parseFunction(`void r8sp567(std::set<wchar_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0567 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0567 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0568
  * @tc.name h2dtscpp_tpo_0568
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<char8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0568', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp568(std::set<char8_t>::iterator v);`),
        unions: parseUnion(`void r8sp568(std::set<char8_t>::iterator v);`),
        structs: parseStruct(`void r8sp568(std::set<char8_t>::iterator v);`),
        classes: parseClass(`void r8sp568(std::set<char8_t>::iterator v);`),
        funcs: parseFunction(`void r8sp568(std::set<char8_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0568 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0568 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0569
  * @tc.name h2dtscpp_tpo_0569
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<char16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0569', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp569(std::set<char16_t>::iterator v);`),
        unions: parseUnion(`void r8sp569(std::set<char16_t>::iterator v);`),
        structs: parseStruct(`void r8sp569(std::set<char16_t>::iterator v);`),
        classes: parseClass(`void r8sp569(std::set<char16_t>::iterator v);`),
        funcs: parseFunction(`void r8sp569(std::set<char16_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0569 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0569 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0570
  * @tc.name h2dtscpp_tpo_0570
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<char32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0570', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp570(std::set<char32_t>::iterator v);`),
        unions: parseUnion(`void r8sp570(std::set<char32_t>::iterator v);`),
        structs: parseStruct(`void r8sp570(std::set<char32_t>::iterator v);`),
        classes: parseClass(`void r8sp570(std::set<char32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp570(std::set<char32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0570 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0570 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0572
  * @tc.name h2dtscpp_tpo_0572
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0572', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp572(std::unordered_set<size_t> v);`),
        unions: parseUnion(`void r8sp572(std::unordered_set<size_t> v);`),
        structs: parseStruct(`void r8sp572(std::unordered_set<size_t> v);`),
        classes: parseClass(`void r8sp572(std::unordered_set<size_t> v);`),
        funcs: parseFunction(`void r8sp572(std::unordered_set<size_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0572 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0572 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0574
  * @tc.name h2dtscpp_tpo_0574
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<float>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0574', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp574(std::unordered_set<float> v);`),
        unions: parseUnion(`void r8sp574(std::unordered_set<float> v);`),
        structs: parseStruct(`void r8sp574(std::unordered_set<float> v);`),
        classes: parseClass(`void r8sp574(std::unordered_set<float> v);`),
        funcs: parseFunction(`void r8sp574(std::unordered_set<float> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0574 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0574 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0575
  * @tc.name h2dtscpp_tpo_0575
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0575', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp575(std::unordered_set<long> v);`),
        unions: parseUnion(`void r8sp575(std::unordered_set<long> v);`),
        structs: parseStruct(`void r8sp575(std::unordered_set<long> v);`),
        classes: parseClass(`void r8sp575(std::unordered_set<long> v);`),
        funcs: parseFunction(`void r8sp575(std::unordered_set<long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0575 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0575 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0576
  * @tc.name h2dtscpp_tpo_0576
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0576', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp576(std::unordered_set<short> v);`),
        unions: parseUnion(`void r8sp576(std::unordered_set<short> v);`),
        structs: parseStruct(`void r8sp576(std::unordered_set<short> v);`),
        classes: parseClass(`void r8sp576(std::unordered_set<short> v);`),
        funcs: parseFunction(`void r8sp576(std::unordered_set<short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0576 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0576 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0577
  * @tc.name h2dtscpp_tpo_0577
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<uint8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0577', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp577(std::unordered_set<uint8_t> v);`),
        unions: parseUnion(`void r8sp577(std::unordered_set<uint8_t> v);`),
        structs: parseStruct(`void r8sp577(std::unordered_set<uint8_t> v);`),
        classes: parseClass(`void r8sp577(std::unordered_set<uint8_t> v);`),
        funcs: parseFunction(`void r8sp577(std::unordered_set<uint8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0577 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0577 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0578
  * @tc.name h2dtscpp_tpo_0578
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0578', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp578(std::unordered_set<uint16_t> v);`),
        unions: parseUnion(`void r8sp578(std::unordered_set<uint16_t> v);`),
        structs: parseStruct(`void r8sp578(std::unordered_set<uint16_t> v);`),
        classes: parseClass(`void r8sp578(std::unordered_set<uint16_t> v);`),
        funcs: parseFunction(`void r8sp578(std::unordered_set<uint16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0578 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0578 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0579
  * @tc.name h2dtscpp_tpo_0579
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0579', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp579(std::unordered_set<uint32_t> v);`),
        unions: parseUnion(`void r8sp579(std::unordered_set<uint32_t> v);`),
        structs: parseStruct(`void r8sp579(std::unordered_set<uint32_t> v);`),
        classes: parseClass(`void r8sp579(std::unordered_set<uint32_t> v);`),
        funcs: parseFunction(`void r8sp579(std::unordered_set<uint32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0579 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0579 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0580
  * @tc.name h2dtscpp_tpo_0580
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0580', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp580(std::unordered_set<uint64_t> v);`),
        unions: parseUnion(`void r8sp580(std::unordered_set<uint64_t> v);`),
        structs: parseStruct(`void r8sp580(std::unordered_set<uint64_t> v);`),
        classes: parseClass(`void r8sp580(std::unordered_set<uint64_t> v);`),
        funcs: parseFunction(`void r8sp580(std::unordered_set<uint64_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0580 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0580 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0581
  * @tc.name h2dtscpp_tpo_0581
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0581', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp581(std::unordered_set<int8_t> v);`),
        unions: parseUnion(`void r8sp581(std::unordered_set<int8_t> v);`),
        structs: parseStruct(`void r8sp581(std::unordered_set<int8_t> v);`),
        classes: parseClass(`void r8sp581(std::unordered_set<int8_t> v);`),
        funcs: parseFunction(`void r8sp581(std::unordered_set<int8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0581 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0581 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0582
  * @tc.name h2dtscpp_tpo_0582
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0582', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp582(std::unordered_set<int16_t> v);`),
        unions: parseUnion(`void r8sp582(std::unordered_set<int16_t> v);`),
        structs: parseStruct(`void r8sp582(std::unordered_set<int16_t> v);`),
        classes: parseClass(`void r8sp582(std::unordered_set<int16_t> v);`),
        funcs: parseFunction(`void r8sp582(std::unordered_set<int16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0582 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0582 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0583
  * @tc.name h2dtscpp_tpo_0583
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0583', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp583(std::unordered_set<int32_t> v);`),
        unions: parseUnion(`void r8sp583(std::unordered_set<int32_t> v);`),
        structs: parseStruct(`void r8sp583(std::unordered_set<int32_t> v);`),
        classes: parseClass(`void r8sp583(std::unordered_set<int32_t> v);`),
        funcs: parseFunction(`void r8sp583(std::unordered_set<int32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0583 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0583 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0584
  * @tc.name h2dtscpp_tpo_0584
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<int64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0584', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp584(std::unordered_set<int64_t> v);`),
        unions: parseUnion(`void r8sp584(std::unordered_set<int64_t> v);`),
        structs: parseStruct(`void r8sp584(std::unordered_set<int64_t> v);`),
        classes: parseClass(`void r8sp584(std::unordered_set<int64_t> v);`),
        funcs: parseFunction(`void r8sp584(std::unordered_set<int64_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0584 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0584 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0585
  * @tc.name h2dtscpp_tpo_0585
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0585', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp585(std::unordered_set<unsigned> v);`),
        unions: parseUnion(`void r8sp585(std::unordered_set<unsigned> v);`),
        structs: parseStruct(`void r8sp585(std::unordered_set<unsigned> v);`),
        classes: parseClass(`void r8sp585(std::unordered_set<unsigned> v);`),
        funcs: parseFunction(`void r8sp585(std::unordered_set<unsigned> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0585 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0585 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0586
  * @tc.name h2dtscpp_tpo_0586
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0586', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp586(std::unordered_set<bool> v);`),
        unions: parseUnion(`void r8sp586(std::unordered_set<bool> v);`),
        structs: parseStruct(`void r8sp586(std::unordered_set<bool> v);`),
        classes: parseClass(`void r8sp586(std::unordered_set<bool> v);`),
        funcs: parseFunction(`void r8sp586(std::unordered_set<bool> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0586 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0586 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0587
  * @tc.name h2dtscpp_tpo_0587
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0587', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp587(std::unordered_set<char> v);`),
        unions: parseUnion(`void r8sp587(std::unordered_set<char> v);`),
        structs: parseStruct(`void r8sp587(std::unordered_set<char> v);`),
        classes: parseClass(`void r8sp587(std::unordered_set<char> v);`),
        funcs: parseFunction(`void r8sp587(std::unordered_set<char> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0587 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0587 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0588
  * @tc.name h2dtscpp_tpo_0588
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<wchar_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0588', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp588(std::unordered_set<wchar_t> v);`),
        unions: parseUnion(`void r8sp588(std::unordered_set<wchar_t> v);`),
        structs: parseStruct(`void r8sp588(std::unordered_set<wchar_t> v);`),
        classes: parseClass(`void r8sp588(std::unordered_set<wchar_t> v);`),
        funcs: parseFunction(`void r8sp588(std::unordered_set<wchar_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0588 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0588 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0589
  * @tc.name h2dtscpp_tpo_0589
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<char8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0589', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp589(std::unordered_set<char8_t> v);`),
        unions: parseUnion(`void r8sp589(std::unordered_set<char8_t> v);`),
        structs: parseStruct(`void r8sp589(std::unordered_set<char8_t> v);`),
        classes: parseClass(`void r8sp589(std::unordered_set<char8_t> v);`),
        funcs: parseFunction(`void r8sp589(std::unordered_set<char8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0589 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0589 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0590
  * @tc.name h2dtscpp_tpo_0590
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<char16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0590', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp590(std::unordered_set<char16_t> v);`),
        unions: parseUnion(`void r8sp590(std::unordered_set<char16_t> v);`),
        structs: parseStruct(`void r8sp590(std::unordered_set<char16_t> v);`),
        classes: parseClass(`void r8sp590(std::unordered_set<char16_t> v);`),
        funcs: parseFunction(`void r8sp590(std::unordered_set<char16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0590 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0590 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0591
  * @tc.name h2dtscpp_tpo_0591
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0591', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp591(std::unordered_set<char32_t> v);`),
        unions: parseUnion(`void r8sp591(std::unordered_set<char32_t> v);`),
        structs: parseStruct(`void r8sp591(std::unordered_set<char32_t> v);`),
        classes: parseClass(`void r8sp591(std::unordered_set<char32_t> v);`),
        funcs: parseFunction(`void r8sp591(std::unordered_set<char32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0591 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0591 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0592
  * @tc.name h2dtscpp_tpo_0592
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0592', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp592(std::unordered_set<int>::iterator v);`),
        unions: parseUnion(`void r8sp592(std::unordered_set<int>::iterator v);`),
        structs: parseStruct(`void r8sp592(std::unordered_set<int>::iterator v);`),
        classes: parseClass(`void r8sp592(std::unordered_set<int>::iterator v);`),
        funcs: parseFunction(`void r8sp592(std::unordered_set<int>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0592 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0592 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0593
  * @tc.name h2dtscpp_tpo_0593
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0593', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp593(std::unordered_set<size_t>::iterator v);`),
        unions: parseUnion(`void r8sp593(std::unordered_set<size_t>::iterator v);`),
        structs: parseStruct(`void r8sp593(std::unordered_set<size_t>::iterator v);`),
        classes: parseClass(`void r8sp593(std::unordered_set<size_t>::iterator v);`),
        funcs: parseFunction(`void r8sp593(std::unordered_set<size_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0593 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0593 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0594
  * @tc.name h2dtscpp_tpo_0594
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<double>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0594', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp594(std::unordered_set<double>::iterator v);`),
        unions: parseUnion(`void r8sp594(std::unordered_set<double>::iterator v);`),
        structs: parseStruct(`void r8sp594(std::unordered_set<double>::iterator v);`),
        classes: parseClass(`void r8sp594(std::unordered_set<double>::iterator v);`),
        funcs: parseFunction(`void r8sp594(std::unordered_set<double>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0594 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0594 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0595
  * @tc.name h2dtscpp_tpo_0595
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<float>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0595', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp595(std::unordered_set<float>::iterator v);`),
        unions: parseUnion(`void r8sp595(std::unordered_set<float>::iterator v);`),
        structs: parseStruct(`void r8sp595(std::unordered_set<float>::iterator v);`),
        classes: parseClass(`void r8sp595(std::unordered_set<float>::iterator v);`),
        funcs: parseFunction(`void r8sp595(std::unordered_set<float>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0595 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0595 执行异常: ${String(err)}`);
    }
  });
});
