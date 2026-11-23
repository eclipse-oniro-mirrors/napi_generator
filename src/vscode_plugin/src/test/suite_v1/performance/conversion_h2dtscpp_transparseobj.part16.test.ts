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
  * @tc.number h2dtscpp_tpo_0526
  * @tc.name h2dtscpp_tpo_0526
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<int, char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0526', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp526(std::unordered_multimap<int, char>::iterator v);`),
        unions: parseUnion(`void r8sp526(std::unordered_multimap<int, char>::iterator v);`),
        structs: parseStruct(`void r8sp526(std::unordered_multimap<int, char>::iterator v);`),
        classes: parseClass(`void r8sp526(std::unordered_multimap<int, char>::iterator v);`),
        funcs: parseFunction(`void r8sp526(std::unordered_multimap<int, char>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0526 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0526 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0527
  * @tc.name h2dtscpp_tpo_0527
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<size_t, char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0527', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp527(std::unordered_multimap<size_t, char>::iterator v);`),
        unions: parseUnion(`void r8sp527(std::unordered_multimap<size_t, char>::iterator v);`),
        structs: parseStruct(`void r8sp527(std::unordered_multimap<size_t, char>::iterator v);`),
        classes: parseClass(`void r8sp527(std::unordered_multimap<size_t, char>::iterator v);`),
        funcs: parseFunction(`void r8sp527(std::unordered_multimap<size_t, char>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0527 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0527 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0528
  * @tc.name h2dtscpp_tpo_0528
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<unsigned, char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0528', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp528(std::unordered_multimap<unsigned, char>::iterator v);`),
        unions: parseUnion(`void r8sp528(std::unordered_multimap<unsigned, char>::iterator v);`),
        structs: parseStruct(`void r8sp528(std::unordered_multimap<unsigned, char>::iterator v);`),
        classes: parseClass(`void r8sp528(std::unordered_multimap<unsigned, char>::iterator v);`),
        funcs: parseFunction(`void r8sp528(std::unordered_multimap<unsigned, char>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0528 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0528 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0530
  * @tc.name h2dtscpp_tpo_0530
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0530', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp530(std::set<size_t> v);`),
        unions: parseUnion(`void r8sp530(std::set<size_t> v);`),
        structs: parseStruct(`void r8sp530(std::set<size_t> v);`),
        classes: parseClass(`void r8sp530(std::set<size_t> v);`),
        funcs: parseFunction(`void r8sp530(std::set<size_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0530 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0530 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0532
  * @tc.name h2dtscpp_tpo_0532
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<float>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0532', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp532(std::set<float> v);`),
        unions: parseUnion(`void r8sp532(std::set<float> v);`),
        structs: parseStruct(`void r8sp532(std::set<float> v);`),
        classes: parseClass(`void r8sp532(std::set<float> v);`),
        funcs: parseFunction(`void r8sp532(std::set<float> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0532 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0532 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0533
  * @tc.name h2dtscpp_tpo_0533
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0533', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp533(std::set<long> v);`),
        unions: parseUnion(`void r8sp533(std::set<long> v);`),
        structs: parseStruct(`void r8sp533(std::set<long> v);`),
        classes: parseClass(`void r8sp533(std::set<long> v);`),
        funcs: parseFunction(`void r8sp533(std::set<long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0533 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0533 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0534
  * @tc.name h2dtscpp_tpo_0534
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0534', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp534(std::set<short> v);`),
        unions: parseUnion(`void r8sp534(std::set<short> v);`),
        structs: parseStruct(`void r8sp534(std::set<short> v);`),
        classes: parseClass(`void r8sp534(std::set<short> v);`),
        funcs: parseFunction(`void r8sp534(std::set<short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0534 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0534 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0535
  * @tc.name h2dtscpp_tpo_0535
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<uint8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0535', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp535(std::set<uint8_t> v);`),
        unions: parseUnion(`void r8sp535(std::set<uint8_t> v);`),
        structs: parseStruct(`void r8sp535(std::set<uint8_t> v);`),
        classes: parseClass(`void r8sp535(std::set<uint8_t> v);`),
        funcs: parseFunction(`void r8sp535(std::set<uint8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0535 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0535 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0536
  * @tc.name h2dtscpp_tpo_0536
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0536', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp536(std::set<uint16_t> v);`),
        unions: parseUnion(`void r8sp536(std::set<uint16_t> v);`),
        structs: parseStruct(`void r8sp536(std::set<uint16_t> v);`),
        classes: parseClass(`void r8sp536(std::set<uint16_t> v);`),
        funcs: parseFunction(`void r8sp536(std::set<uint16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0536 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0536 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0537
  * @tc.name h2dtscpp_tpo_0537
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0537', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp537(std::set<uint32_t> v);`),
        unions: parseUnion(`void r8sp537(std::set<uint32_t> v);`),
        structs: parseStruct(`void r8sp537(std::set<uint32_t> v);`),
        classes: parseClass(`void r8sp537(std::set<uint32_t> v);`),
        funcs: parseFunction(`void r8sp537(std::set<uint32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0537 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0537 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0538
  * @tc.name h2dtscpp_tpo_0538
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0538', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp538(std::set<uint64_t> v);`),
        unions: parseUnion(`void r8sp538(std::set<uint64_t> v);`),
        structs: parseStruct(`void r8sp538(std::set<uint64_t> v);`),
        classes: parseClass(`void r8sp538(std::set<uint64_t> v);`),
        funcs: parseFunction(`void r8sp538(std::set<uint64_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0538 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0538 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0539
  * @tc.name h2dtscpp_tpo_0539
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0539', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp539(std::set<int8_t> v);`),
        unions: parseUnion(`void r8sp539(std::set<int8_t> v);`),
        structs: parseStruct(`void r8sp539(std::set<int8_t> v);`),
        classes: parseClass(`void r8sp539(std::set<int8_t> v);`),
        funcs: parseFunction(`void r8sp539(std::set<int8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0539 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0539 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0540
  * @tc.name h2dtscpp_tpo_0540
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0540', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp540(std::set<int16_t> v);`),
        unions: parseUnion(`void r8sp540(std::set<int16_t> v);`),
        structs: parseStruct(`void r8sp540(std::set<int16_t> v);`),
        classes: parseClass(`void r8sp540(std::set<int16_t> v);`),
        funcs: parseFunction(`void r8sp540(std::set<int16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0540 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0540 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0541
  * @tc.name h2dtscpp_tpo_0541
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0541', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp541(std::set<int32_t> v);`),
        unions: parseUnion(`void r8sp541(std::set<int32_t> v);`),
        structs: parseStruct(`void r8sp541(std::set<int32_t> v);`),
        classes: parseClass(`void r8sp541(std::set<int32_t> v);`),
        funcs: parseFunction(`void r8sp541(std::set<int32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0541 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0541 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0542
  * @tc.name h2dtscpp_tpo_0542
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<int64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0542', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp542(std::set<int64_t> v);`),
        unions: parseUnion(`void r8sp542(std::set<int64_t> v);`),
        structs: parseStruct(`void r8sp542(std::set<int64_t> v);`),
        classes: parseClass(`void r8sp542(std::set<int64_t> v);`),
        funcs: parseFunction(`void r8sp542(std::set<int64_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0542 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0542 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0543
  * @tc.name h2dtscpp_tpo_0543
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0543', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp543(std::set<unsigned> v);`),
        unions: parseUnion(`void r8sp543(std::set<unsigned> v);`),
        structs: parseStruct(`void r8sp543(std::set<unsigned> v);`),
        classes: parseClass(`void r8sp543(std::set<unsigned> v);`),
        funcs: parseFunction(`void r8sp543(std::set<unsigned> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0543 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0543 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0544
  * @tc.name h2dtscpp_tpo_0544
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0544', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp544(std::set<bool> v);`),
        unions: parseUnion(`void r8sp544(std::set<bool> v);`),
        structs: parseStruct(`void r8sp544(std::set<bool> v);`),
        classes: parseClass(`void r8sp544(std::set<bool> v);`),
        funcs: parseFunction(`void r8sp544(std::set<bool> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0544 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0544 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0545
  * @tc.name h2dtscpp_tpo_0545
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0545', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp545(std::set<char> v);`),
        unions: parseUnion(`void r8sp545(std::set<char> v);`),
        structs: parseStruct(`void r8sp545(std::set<char> v);`),
        classes: parseClass(`void r8sp545(std::set<char> v);`),
        funcs: parseFunction(`void r8sp545(std::set<char> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0545 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0545 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0546
  * @tc.name h2dtscpp_tpo_0546
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<wchar_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0546', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp546(std::set<wchar_t> v);`),
        unions: parseUnion(`void r8sp546(std::set<wchar_t> v);`),
        structs: parseStruct(`void r8sp546(std::set<wchar_t> v);`),
        classes: parseClass(`void r8sp546(std::set<wchar_t> v);`),
        funcs: parseFunction(`void r8sp546(std::set<wchar_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0546 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0546 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0547
  * @tc.name h2dtscpp_tpo_0547
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<char8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0547', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp547(std::set<char8_t> v);`),
        unions: parseUnion(`void r8sp547(std::set<char8_t> v);`),
        structs: parseStruct(`void r8sp547(std::set<char8_t> v);`),
        classes: parseClass(`void r8sp547(std::set<char8_t> v);`),
        funcs: parseFunction(`void r8sp547(std::set<char8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0547 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0547 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0548
  * @tc.name h2dtscpp_tpo_0548
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<char16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0548', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp548(std::set<char16_t> v);`),
        unions: parseUnion(`void r8sp548(std::set<char16_t> v);`),
        structs: parseStruct(`void r8sp548(std::set<char16_t> v);`),
        classes: parseClass(`void r8sp548(std::set<char16_t> v);`),
        funcs: parseFunction(`void r8sp548(std::set<char16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0548 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0548 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0549
  * @tc.name h2dtscpp_tpo_0549
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0549', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp549(std::set<char32_t> v);`),
        unions: parseUnion(`void r8sp549(std::set<char32_t> v);`),
        structs: parseStruct(`void r8sp549(std::set<char32_t> v);`),
        classes: parseClass(`void r8sp549(std::set<char32_t> v);`),
        funcs: parseFunction(`void r8sp549(std::set<char32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0549 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0549 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0550
  * @tc.name h2dtscpp_tpo_0550
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0550', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp550(std::set<int>::iterator v);`),
        unions: parseUnion(`void r8sp550(std::set<int>::iterator v);`),
        structs: parseStruct(`void r8sp550(std::set<int>::iterator v);`),
        classes: parseClass(`void r8sp550(std::set<int>::iterator v);`),
        funcs: parseFunction(`void r8sp550(std::set<int>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0550 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0550 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0551
  * @tc.name h2dtscpp_tpo_0551
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0551', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp551(std::set<size_t>::iterator v);`),
        unions: parseUnion(`void r8sp551(std::set<size_t>::iterator v);`),
        structs: parseStruct(`void r8sp551(std::set<size_t>::iterator v);`),
        classes: parseClass(`void r8sp551(std::set<size_t>::iterator v);`),
        funcs: parseFunction(`void r8sp551(std::set<size_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0551 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0551 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0552
  * @tc.name h2dtscpp_tpo_0552
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<double>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0552', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp552(std::set<double>::iterator v);`),
        unions: parseUnion(`void r8sp552(std::set<double>::iterator v);`),
        structs: parseStruct(`void r8sp552(std::set<double>::iterator v);`),
        classes: parseClass(`void r8sp552(std::set<double>::iterator v);`),
        funcs: parseFunction(`void r8sp552(std::set<double>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0552 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0552 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0553
  * @tc.name h2dtscpp_tpo_0553
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<float>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0553', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp553(std::set<float>::iterator v);`),
        unions: parseUnion(`void r8sp553(std::set<float>::iterator v);`),
        structs: parseStruct(`void r8sp553(std::set<float>::iterator v);`),
        classes: parseClass(`void r8sp553(std::set<float>::iterator v);`),
        funcs: parseFunction(`void r8sp553(std::set<float>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0553 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0553 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0554
  * @tc.name h2dtscpp_tpo_0554
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0554', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp554(std::set<long>::iterator v);`),
        unions: parseUnion(`void r8sp554(std::set<long>::iterator v);`),
        structs: parseStruct(`void r8sp554(std::set<long>::iterator v);`),
        classes: parseClass(`void r8sp554(std::set<long>::iterator v);`),
        funcs: parseFunction(`void r8sp554(std::set<long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0554 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0554 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0555
  * @tc.name h2dtscpp_tpo_0555
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0555', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp555(std::set<short>::iterator v);`),
        unions: parseUnion(`void r8sp555(std::set<short>::iterator v);`),
        structs: parseStruct(`void r8sp555(std::set<short>::iterator v);`),
        classes: parseClass(`void r8sp555(std::set<short>::iterator v);`),
        funcs: parseFunction(`void r8sp555(std::set<short>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0555 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0555 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0556
  * @tc.name h2dtscpp_tpo_0556
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<uint8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0556', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp556(std::set<uint8_t>::iterator v);`),
        unions: parseUnion(`void r8sp556(std::set<uint8_t>::iterator v);`),
        structs: parseStruct(`void r8sp556(std::set<uint8_t>::iterator v);`),
        classes: parseClass(`void r8sp556(std::set<uint8_t>::iterator v);`),
        funcs: parseFunction(`void r8sp556(std::set<uint8_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0556 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0556 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0557
  * @tc.name h2dtscpp_tpo_0557
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<uint16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0557', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp557(std::set<uint16_t>::iterator v);`),
        unions: parseUnion(`void r8sp557(std::set<uint16_t>::iterator v);`),
        structs: parseStruct(`void r8sp557(std::set<uint16_t>::iterator v);`),
        classes: parseClass(`void r8sp557(std::set<uint16_t>::iterator v);`),
        funcs: parseFunction(`void r8sp557(std::set<uint16_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0557 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0557 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0558
  * @tc.name h2dtscpp_tpo_0558
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<uint32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0558', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp558(std::set<uint32_t>::iterator v);`),
        unions: parseUnion(`void r8sp558(std::set<uint32_t>::iterator v);`),
        structs: parseStruct(`void r8sp558(std::set<uint32_t>::iterator v);`),
        classes: parseClass(`void r8sp558(std::set<uint32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp558(std::set<uint32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0558 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0558 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0559
  * @tc.name h2dtscpp_tpo_0559
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<uint64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0559', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp559(std::set<uint64_t>::iterator v);`),
        unions: parseUnion(`void r8sp559(std::set<uint64_t>::iterator v);`),
        structs: parseStruct(`void r8sp559(std::set<uint64_t>::iterator v);`),
        classes: parseClass(`void r8sp559(std::set<uint64_t>::iterator v);`),
        funcs: parseFunction(`void r8sp559(std::set<uint64_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0559 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0559 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0560
  * @tc.name h2dtscpp_tpo_0560
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<int8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0560', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp560(std::set<int8_t>::iterator v);`),
        unions: parseUnion(`void r8sp560(std::set<int8_t>::iterator v);`),
        structs: parseStruct(`void r8sp560(std::set<int8_t>::iterator v);`),
        classes: parseClass(`void r8sp560(std::set<int8_t>::iterator v);`),
        funcs: parseFunction(`void r8sp560(std::set<int8_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0560 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0560 执行异常: ${String(err)}`);
    }
  });
});
