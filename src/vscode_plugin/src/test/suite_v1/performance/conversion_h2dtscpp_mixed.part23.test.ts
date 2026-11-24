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
  * @tc.number h2dtscpp_gen_1355
  * @tc.name h2dtscpp_gen_1355
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `unsigned` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1355', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1355(unsigned v);`),
        unions: parseUnion(`void r7sp1355(unsigned v);`),
        structs: parseStruct(`void r7sp1355(unsigned v);`),
        classes: parseClass(`void r7sp1355(unsigned v);`),
        funcs: parseFunction(`void r7sp1355(unsigned v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1355 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1355 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1359
  * @tc.name h2dtscpp_gen_1359
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `char8_t` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1359', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1359(char8_t v);`),
        unions: parseUnion(`void r7sp1359(char8_t v);`),
        structs: parseStruct(`void r7sp1359(char8_t v);`),
        classes: parseClass(`void r7sp1359(char8_t v);`),
        funcs: parseFunction(`void r7sp1359(char8_t v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1359 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1359 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1362
  * @tc.name h2dtscpp_gen_1362
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::string::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1362', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1362(std::string::iterator v);`),
        unions: parseUnion(`void r7sp1362(std::string::iterator v);`),
        structs: parseStruct(`void r7sp1362(std::string::iterator v);`),
        classes: parseClass(`void r7sp1362(std::string::iterator v);`),
        funcs: parseFunction(`void r7sp1362(std::string::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1362 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1362 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1370
  * @tc.name h2dtscpp_gen_1370
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1370', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1370(std::vector<uint16_t> v);`),
        unions: parseUnion(`void r7sp1370(std::vector<uint16_t> v);`),
        structs: parseStruct(`void r7sp1370(std::vector<uint16_t> v);`),
        classes: parseClass(`void r7sp1370(std::vector<uint16_t> v);`),
        funcs: parseFunction(`void r7sp1370(std::vector<uint16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1370 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1370 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1371
  * @tc.name h2dtscpp_gen_1371
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1371', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1371(std::vector<uint32_t> v);`),
        unions: parseUnion(`void r7sp1371(std::vector<uint32_t> v);`),
        structs: parseStruct(`void r7sp1371(std::vector<uint32_t> v);`),
        classes: parseClass(`void r7sp1371(std::vector<uint32_t> v);`),
        funcs: parseFunction(`void r7sp1371(std::vector<uint32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1371 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1371 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1372
  * @tc.name h2dtscpp_gen_1372
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1372', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1372(std::vector<uint64_t> v);`),
        unions: parseUnion(`void r7sp1372(std::vector<uint64_t> v);`),
        structs: parseStruct(`void r7sp1372(std::vector<uint64_t> v);`),
        classes: parseClass(`void r7sp1372(std::vector<uint64_t> v);`),
        funcs: parseFunction(`void r7sp1372(std::vector<uint64_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1372 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1372 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1373
  * @tc.name h2dtscpp_gen_1373
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1373', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1373(std::vector<int8_t> v);`),
        unions: parseUnion(`void r7sp1373(std::vector<int8_t> v);`),
        structs: parseStruct(`void r7sp1373(std::vector<int8_t> v);`),
        classes: parseClass(`void r7sp1373(std::vector<int8_t> v);`),
        funcs: parseFunction(`void r7sp1373(std::vector<int8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1373 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1373 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1374
  * @tc.name h2dtscpp_gen_1374
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1374', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1374(std::vector<int16_t> v);`),
        unions: parseUnion(`void r7sp1374(std::vector<int16_t> v);`),
        structs: parseStruct(`void r7sp1374(std::vector<int16_t> v);`),
        classes: parseClass(`void r7sp1374(std::vector<int16_t> v);`),
        funcs: parseFunction(`void r7sp1374(std::vector<int16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1374 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1374 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1375
  * @tc.name h2dtscpp_gen_1375
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_1375', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1375(std::vector<int32_t> v);`),
        unions: parseUnion(`void r7sp1375(std::vector<int32_t> v);`),
        structs: parseStruct(`void r7sp1375(std::vector<int32_t> v);`),
        classes: parseClass(`void r7sp1375(std::vector<int32_t> v);`),
        funcs: parseFunction(`void r7sp1375(std::vector<int32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_1375 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_1375 执行异常: ${String(err)}`);
    }
  });
});
