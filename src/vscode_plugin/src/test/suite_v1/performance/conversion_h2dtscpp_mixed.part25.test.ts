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
  * @tc.number h2dtscpp_gen_1411
  * @tc.name h2dtscpp_gen_1411
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<uint8_t, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1411', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1411(std::array<uint8_t, 10> v);`),
        unions: parseUnion(`void r7sp1411(std::array<uint8_t, 10> v);`),
        structs: parseStruct(`void r7sp1411(std::array<uint8_t, 10> v);`),
        classes: parseClass(`void r7sp1411(std::array<uint8_t, 10> v);`),
        funcs: parseFunction(`void r7sp1411(std::array<uint8_t, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1411 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1411 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1412
  * @tc.name h2dtscpp_gen_1412
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<uint16_t, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1412', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1412(std::array<uint16_t, 10> v);`),
        unions: parseUnion(`void r7sp1412(std::array<uint16_t, 10> v);`),
        structs: parseStruct(`void r7sp1412(std::array<uint16_t, 10> v);`),
        classes: parseClass(`void r7sp1412(std::array<uint16_t, 10> v);`),
        funcs: parseFunction(`void r7sp1412(std::array<uint16_t, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1412 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1412 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1413
  * @tc.name h2dtscpp_gen_1413
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<uint32_t, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1413', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1413(std::array<uint32_t, 10> v);`),
        unions: parseUnion(`void r7sp1413(std::array<uint32_t, 10> v);`),
        structs: parseStruct(`void r7sp1413(std::array<uint32_t, 10> v);`),
        classes: parseClass(`void r7sp1413(std::array<uint32_t, 10> v);`),
        funcs: parseFunction(`void r7sp1413(std::array<uint32_t, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1413 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1413 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1414
  * @tc.name h2dtscpp_gen_1414
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<uint64_t, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1414', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1414(std::array<uint64_t, 10> v);`),
        unions: parseUnion(`void r7sp1414(std::array<uint64_t, 10> v);`),
        structs: parseStruct(`void r7sp1414(std::array<uint64_t, 10> v);`),
        classes: parseClass(`void r7sp1414(std::array<uint64_t, 10> v);`),
        funcs: parseFunction(`void r7sp1414(std::array<uint64_t, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1414 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1414 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1415
  * @tc.name h2dtscpp_gen_1415
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<int8_t, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1415', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1415(std::array<int8_t, 10> v);`),
        unions: parseUnion(`void r7sp1415(std::array<int8_t, 10> v);`),
        structs: parseStruct(`void r7sp1415(std::array<int8_t, 10> v);`),
        classes: parseClass(`void r7sp1415(std::array<int8_t, 10> v);`),
        funcs: parseFunction(`void r7sp1415(std::array<int8_t, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1415 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1415 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1416
  * @tc.name h2dtscpp_gen_1416
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<int16_t, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1416', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1416(std::array<int16_t, 10> v);`),
        unions: parseUnion(`void r7sp1416(std::array<int16_t, 10> v);`),
        structs: parseStruct(`void r7sp1416(std::array<int16_t, 10> v);`),
        classes: parseClass(`void r7sp1416(std::array<int16_t, 10> v);`),
        funcs: parseFunction(`void r7sp1416(std::array<int16_t, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1416 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1416 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1417
  * @tc.name h2dtscpp_gen_1417
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<int32_t, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1417', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1417(std::array<int32_t, 10> v);`),
        unions: parseUnion(`void r7sp1417(std::array<int32_t, 10> v);`),
        structs: parseStruct(`void r7sp1417(std::array<int32_t, 10> v);`),
        classes: parseClass(`void r7sp1417(std::array<int32_t, 10> v);`),
        funcs: parseFunction(`void r7sp1417(std::array<int32_t, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1417 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1417 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1418
  * @tc.name h2dtscpp_gen_1418
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<int64_t, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1418', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1418(std::array<int64_t, 10> v);`),
        unions: parseUnion(`void r7sp1418(std::array<int64_t, 10> v);`),
        structs: parseStruct(`void r7sp1418(std::array<int64_t, 10> v);`),
        classes: parseClass(`void r7sp1418(std::array<int64_t, 10> v);`),
        funcs: parseFunction(`void r7sp1418(std::array<int64_t, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1418 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1418 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1419
  * @tc.name h2dtscpp_gen_1419
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<unsigned, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1419', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1419(std::array<unsigned, 10> v);`),
        unions: parseUnion(`void r7sp1419(std::array<unsigned, 10> v);`),
        structs: parseStruct(`void r7sp1419(std::array<unsigned, 10> v);`),
        classes: parseClass(`void r7sp1419(std::array<unsigned, 10> v);`),
        funcs: parseFunction(`void r7sp1419(std::array<unsigned, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1419 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1419 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1420
  * @tc.name h2dtscpp_gen_1420
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<bool, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1420', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1420(std::array<bool, 10> v);`),
        unions: parseUnion(`void r7sp1420(std::array<bool, 10> v);`),
        structs: parseStruct(`void r7sp1420(std::array<bool, 10> v);`),
        classes: parseClass(`void r7sp1420(std::array<bool, 10> v);`),
        funcs: parseFunction(`void r7sp1420(std::array<bool, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1420 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1420 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1421
  * @tc.name h2dtscpp_gen_1421
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<char, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1421', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1421(std::array<char, 10> v);`),
        unions: parseUnion(`void r7sp1421(std::array<char, 10> v);`),
        structs: parseStruct(`void r7sp1421(std::array<char, 10> v);`),
        classes: parseClass(`void r7sp1421(std::array<char, 10> v);`),
        funcs: parseFunction(`void r7sp1421(std::array<char, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1421 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1421 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1422
  * @tc.name h2dtscpp_gen_1422
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<wchar_t, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1422', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1422(std::array<wchar_t, 10> v);`),
        unions: parseUnion(`void r7sp1422(std::array<wchar_t, 10> v);`),
        structs: parseStruct(`void r7sp1422(std::array<wchar_t, 10> v);`),
        classes: parseClass(`void r7sp1422(std::array<wchar_t, 10> v);`),
        funcs: parseFunction(`void r7sp1422(std::array<wchar_t, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1422 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1422 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1423
  * @tc.name h2dtscpp_gen_1423
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<char8_t, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1423', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1423(std::array<char8_t, 10> v);`),
        unions: parseUnion(`void r7sp1423(std::array<char8_t, 10> v);`),
        structs: parseStruct(`void r7sp1423(std::array<char8_t, 10> v);`),
        classes: parseClass(`void r7sp1423(std::array<char8_t, 10> v);`),
        funcs: parseFunction(`void r7sp1423(std::array<char8_t, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1423 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1423 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1424
  * @tc.name h2dtscpp_gen_1424
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<char16_t, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1424', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1424(std::array<char16_t, 10> v);`),
        unions: parseUnion(`void r7sp1424(std::array<char16_t, 10> v);`),
        structs: parseStruct(`void r7sp1424(std::array<char16_t, 10> v);`),
        classes: parseClass(`void r7sp1424(std::array<char16_t, 10> v);`),
        funcs: parseFunction(`void r7sp1424(std::array<char16_t, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1424 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1424 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1425
  * @tc.name h2dtscpp_gen_1425
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<char32_t, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1425', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1425(std::array<char32_t, 10> v);`),
        unions: parseUnion(`void r7sp1425(std::array<char32_t, 10> v);`),
        structs: parseStruct(`void r7sp1425(std::array<char32_t, 10> v);`),
        classes: parseClass(`void r7sp1425(std::array<char32_t, 10> v);`),
        funcs: parseFunction(`void r7sp1425(std::array<char32_t, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1425 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1425 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1426
  * @tc.name h2dtscpp_gen_1426
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<int, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1426', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1426(std::array<int, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1426(std::array<int, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1426(std::array<int, 10>::iterator v);`),
        classes: parseClass(`void r7sp1426(std::array<int, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1426(std::array<int, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1426 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1426 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1427
  * @tc.name h2dtscpp_gen_1427
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<size_t, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1427', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1427(std::array<size_t, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1427(std::array<size_t, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1427(std::array<size_t, 10>::iterator v);`),
        classes: parseClass(`void r7sp1427(std::array<size_t, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1427(std::array<size_t, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1427 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1427 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1428
  * @tc.name h2dtscpp_gen_1428
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<double, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1428', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1428(std::array<double, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1428(std::array<double, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1428(std::array<double, 10>::iterator v);`),
        classes: parseClass(`void r7sp1428(std::array<double, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1428(std::array<double, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1428 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1428 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1429
  * @tc.name h2dtscpp_gen_1429
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<float, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1429', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1429(std::array<float, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1429(std::array<float, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1429(std::array<float, 10>::iterator v);`),
        classes: parseClass(`void r7sp1429(std::array<float, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1429(std::array<float, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1429 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1429 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1430
  * @tc.name h2dtscpp_gen_1430
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<long, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1430', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1430(std::array<long, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1430(std::array<long, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1430(std::array<long, 10>::iterator v);`),
        classes: parseClass(`void r7sp1430(std::array<long, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1430(std::array<long, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1430 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1430 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1431
  * @tc.name h2dtscpp_gen_1431
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<short, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1431', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1431(std::array<short, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1431(std::array<short, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1431(std::array<short, 10>::iterator v);`),
        classes: parseClass(`void r7sp1431(std::array<short, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1431(std::array<short, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1431 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1431 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1432
  * @tc.name h2dtscpp_gen_1432
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<uint8_t, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1432', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1432(std::array<uint8_t, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1432(std::array<uint8_t, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1432(std::array<uint8_t, 10>::iterator v);`),
        classes: parseClass(`void r7sp1432(std::array<uint8_t, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1432(std::array<uint8_t, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1432 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1432 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1433
  * @tc.name h2dtscpp_gen_1433
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<uint16_t, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1433', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1433(std::array<uint16_t, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1433(std::array<uint16_t, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1433(std::array<uint16_t, 10>::iterator v);`),
        classes: parseClass(`void r7sp1433(std::array<uint16_t, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1433(std::array<uint16_t, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1433 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1433 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1434
  * @tc.name h2dtscpp_gen_1434
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<uint32_t, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1434', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1434(std::array<uint32_t, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1434(std::array<uint32_t, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1434(std::array<uint32_t, 10>::iterator v);`),
        classes: parseClass(`void r7sp1434(std::array<uint32_t, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1434(std::array<uint32_t, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1434 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1434 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1435
  * @tc.name h2dtscpp_gen_1435
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<uint64_t, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1435', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1435(std::array<uint64_t, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1435(std::array<uint64_t, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1435(std::array<uint64_t, 10>::iterator v);`),
        classes: parseClass(`void r7sp1435(std::array<uint64_t, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1435(std::array<uint64_t, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1435 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1435 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1436
  * @tc.name h2dtscpp_gen_1436
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<int8_t, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1436', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1436(std::array<int8_t, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1436(std::array<int8_t, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1436(std::array<int8_t, 10>::iterator v);`),
        classes: parseClass(`void r7sp1436(std::array<int8_t, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1436(std::array<int8_t, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1436 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1436 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1437
  * @tc.name h2dtscpp_gen_1437
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<int16_t, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1437', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1437(std::array<int16_t, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1437(std::array<int16_t, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1437(std::array<int16_t, 10>::iterator v);`),
        classes: parseClass(`void r7sp1437(std::array<int16_t, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1437(std::array<int16_t, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1437 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1437 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1438
  * @tc.name h2dtscpp_gen_1438
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<int32_t, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1438', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1438(std::array<int32_t, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1438(std::array<int32_t, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1438(std::array<int32_t, 10>::iterator v);`),
        classes: parseClass(`void r7sp1438(std::array<int32_t, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1438(std::array<int32_t, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1438 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1438 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1439
  * @tc.name h2dtscpp_gen_1439
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<int64_t, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1439', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1439(std::array<int64_t, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1439(std::array<int64_t, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1439(std::array<int64_t, 10>::iterator v);`),
        classes: parseClass(`void r7sp1439(std::array<int64_t, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1439(std::array<int64_t, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1439 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1439 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1440
  * @tc.name h2dtscpp_gen_1440
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<unsigned, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1440', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1440(std::array<unsigned, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1440(std::array<unsigned, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1440(std::array<unsigned, 10>::iterator v);`),
        classes: parseClass(`void r7sp1440(std::array<unsigned, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1440(std::array<unsigned, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1440 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1440 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1441
  * @tc.name h2dtscpp_gen_1441
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<bool, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1441', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1441(std::array<bool, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1441(std::array<bool, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1441(std::array<bool, 10>::iterator v);`),
        classes: parseClass(`void r7sp1441(std::array<bool, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1441(std::array<bool, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1441 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1441 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1442
  * @tc.name h2dtscpp_gen_1442
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<char, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1442', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1442(std::array<char, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1442(std::array<char, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1442(std::array<char, 10>::iterator v);`),
        classes: parseClass(`void r7sp1442(std::array<char, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1442(std::array<char, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1442 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1442 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1443
  * @tc.name h2dtscpp_gen_1443
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<wchar_t, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1443', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1443(std::array<wchar_t, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1443(std::array<wchar_t, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1443(std::array<wchar_t, 10>::iterator v);`),
        classes: parseClass(`void r7sp1443(std::array<wchar_t, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1443(std::array<wchar_t, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1443 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1443 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1444
  * @tc.name h2dtscpp_gen_1444
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<char8_t, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1444', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1444(std::array<char8_t, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1444(std::array<char8_t, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1444(std::array<char8_t, 10>::iterator v);`),
        classes: parseClass(`void r7sp1444(std::array<char8_t, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1444(std::array<char8_t, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1444 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1444 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1445
  * @tc.name h2dtscpp_gen_1445
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<char16_t, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1445', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1445(std::array<char16_t, 10>::iterator v);`),
        unions: parseUnion(`void r7sp1445(std::array<char16_t, 10>::iterator v);`),
        structs: parseStruct(`void r7sp1445(std::array<char16_t, 10>::iterator v);`),
        classes: parseClass(`void r7sp1445(std::array<char16_t, 10>::iterator v);`),
        funcs: parseFunction(`void r7sp1445(std::array<char16_t, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1445 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1445 执行异常: ${String(err)}`);
    }
  });
});
