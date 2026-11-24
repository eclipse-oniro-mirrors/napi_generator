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
  * @tc.number h2dtscpp_tpo_0451
  * @tc.name h2dtscpp_tpo_0451
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<char, size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0451', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp451(std::unordered_map<char, size_t>::iterator v);`),
        unions: parseUnion(`void r8sp451(std::unordered_map<char, size_t>::iterator v);`),
        structs: parseStruct(`void r8sp451(std::unordered_map<char, size_t>::iterator v);`),
        classes: parseClass(`void r8sp451(std::unordered_map<char, size_t>::iterator v);`),
        funcs: parseFunction(`void r8sp451(std::unordered_map<char, size_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0451 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0451 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0452
  * @tc.name h2dtscpp_tpo_0452
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<char, unsigned>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0452', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp452(std::unordered_map<char, unsigned>::iterator v);`),
        unions: parseUnion(`void r8sp452(std::unordered_map<char, unsigned>::iterator v);`),
        structs: parseStruct(`void r8sp452(std::unordered_map<char, unsigned>::iterator v);`),
        classes: parseClass(`void r8sp452(std::unordered_map<char, unsigned>::iterator v);`),
        funcs: parseFunction(`void r8sp452(std::unordered_map<char, unsigned>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0452 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0452 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0453
  * @tc.name h2dtscpp_tpo_0453
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<char, double>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0453', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp453(std::unordered_map<char, double>::iterator v);`),
        unions: parseUnion(`void r8sp453(std::unordered_map<char, double>::iterator v);`),
        structs: parseStruct(`void r8sp453(std::unordered_map<char, double>::iterator v);`),
        classes: parseClass(`void r8sp453(std::unordered_map<char, double>::iterator v);`),
        funcs: parseFunction(`void r8sp453(std::unordered_map<char, double>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0453 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0453 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0454
  * @tc.name h2dtscpp_tpo_0454
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<char, float>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0454', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp454(std::unordered_map<char, float>::iterator v);`),
        unions: parseUnion(`void r8sp454(std::unordered_map<char, float>::iterator v);`),
        structs: parseStruct(`void r8sp454(std::unordered_map<char, float>::iterator v);`),
        classes: parseClass(`void r8sp454(std::unordered_map<char, float>::iterator v);`),
        funcs: parseFunction(`void r8sp454(std::unordered_map<char, float>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0454 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0454 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0455
  * @tc.name h2dtscpp_tpo_0455
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<char16_t, int32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0455', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp455(std::unordered_map<char16_t, int32_t>::iterator v);`),
        unions: parseUnion(`void r8sp455(std::unordered_map<char16_t, int32_t>::iterator v);`),
        structs: parseStruct(`void r8sp455(std::unordered_map<char16_t, int32_t>::iterator v);`),
        classes: parseClass(`void r8sp455(std::unordered_map<char16_t, int32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp455(std::unordered_map<char16_t, int32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0455 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0455 执行异常: ${String(err)}`);
    }
  });
});
