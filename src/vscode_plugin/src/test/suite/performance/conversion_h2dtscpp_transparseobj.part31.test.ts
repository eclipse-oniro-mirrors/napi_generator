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
  * @tc.number h2dtscpp_tpo_1051
  * @tc.name h2dtscpp_tpo_1051
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1051', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1051(std::unordered_multiset<unsigned long long> v);`),
        unions: parseUnion(`void r8sp1051(std::unordered_multiset<unsigned long long> v);`),
        structs: parseStruct(`void r8sp1051(std::unordered_multiset<unsigned long long> v);`),
        classes: parseClass(`void r8sp1051(std::unordered_multiset<unsigned long long> v);`),
        funcs: parseFunction(`void r8sp1051(std::unordered_multiset<unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1051 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1051 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1052
  * @tc.name h2dtscpp_tpo_1052
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1052', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1052(std::unordered_multiset<int *> v);`),
        unions: parseUnion(`void r8sp1052(std::unordered_multiset<int *> v);`),
        structs: parseStruct(`void r8sp1052(std::unordered_multiset<int *> v);`),
        classes: parseClass(`void r8sp1052(std::unordered_multiset<int *> v);`),
        funcs: parseFunction(`void r8sp1052(std::unordered_multiset<int *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1052 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1052 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1053
  * @tc.name h2dtscpp_tpo_1053
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<std::string>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1053', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1053(std::unordered_multiset<std::string>::iterator v);`),
        unions: parseUnion(`void r8sp1053(std::unordered_multiset<std::string>::iterator v);`),
        structs: parseStruct(`void r8sp1053(std::unordered_multiset<std::string>::iterator v);`),
        classes: parseClass(`void r8sp1053(std::unordered_multiset<std::string>::iterator v);`),
        funcs: parseFunction(`void r8sp1053(std::unordered_multiset<std::string>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1053 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1053 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1054
  * @tc.name h2dtscpp_tpo_1054
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<char *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1054', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1054(std::unordered_multiset<char *>::iterator v);`),
        unions: parseUnion(`void r8sp1054(std::unordered_multiset<char *>::iterator v);`),
        structs: parseStruct(`void r8sp1054(std::unordered_multiset<char *>::iterator v);`),
        classes: parseClass(`void r8sp1054(std::unordered_multiset<char *>::iterator v);`),
        funcs: parseFunction(`void r8sp1054(std::unordered_multiset<char *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1054 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1054 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1055
  * @tc.name h2dtscpp_tpo_1055
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1055', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1055(std::unordered_multiset<long long>::iterator v);`),
        unions: parseUnion(`void r8sp1055(std::unordered_multiset<long long>::iterator v);`),
        structs: parseStruct(`void r8sp1055(std::unordered_multiset<long long>::iterator v);`),
        classes: parseClass(`void r8sp1055(std::unordered_multiset<long long>::iterator v);`),
        funcs: parseFunction(`void r8sp1055(std::unordered_multiset<long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1055 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1055 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1056
  * @tc.name h2dtscpp_tpo_1056
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<unsigned short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1056', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1056(std::unordered_multiset<unsigned short>::iterator v);`),
        unions: parseUnion(`void r8sp1056(std::unordered_multiset<unsigned short>::iterator v);`),
        structs: parseStruct(`void r8sp1056(std::unordered_multiset<unsigned short>::iterator v);`),
        classes: parseClass(`void r8sp1056(std::unordered_multiset<unsigned short>::iterator v);`),
        funcs: parseFunction(`void r8sp1056(std::unordered_multiset<unsigned short>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1056 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1056 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1057
  * @tc.name h2dtscpp_tpo_1057
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<unsigned long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1057', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1057(std::unordered_multiset<unsigned long>::iterator v);`),
        unions: parseUnion(`void r8sp1057(std::unordered_multiset<unsigned long>::iterator v);`),
        structs: parseStruct(`void r8sp1057(std::unordered_multiset<unsigned long>::iterator v);`),
        classes: parseClass(`void r8sp1057(std::unordered_multiset<unsigned long>::iterator v);`),
        funcs: parseFunction(`void r8sp1057(std::unordered_multiset<unsigned long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1057 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1057 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1058
  * @tc.name h2dtscpp_tpo_1058
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<unsigned long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1058', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1058(std::unordered_multiset<unsigned long long>::iterator v);`),
        unions: parseUnion(`void r8sp1058(std::unordered_multiset<unsigned long long>::iterator v);`),
        structs: parseStruct(`void r8sp1058(std::unordered_multiset<unsigned long long>::iterator v);`),
        classes: parseClass(`void r8sp1058(std::unordered_multiset<unsigned long long>::iterator v);`),
        funcs: parseFunction(`void r8sp1058(std::unordered_multiset<unsigned long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1058 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1058 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1059
  * @tc.name h2dtscpp_tpo_1059
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<int *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1059', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1059(std::unordered_multiset<int *>::iterator v);`),
        unions: parseUnion(`void r8sp1059(std::unordered_multiset<int *>::iterator v);`),
        structs: parseStruct(`void r8sp1059(std::unordered_multiset<int *>::iterator v);`),
        classes: parseClass(`void r8sp1059(std::unordered_multiset<int *>::iterator v);`),
        funcs: parseFunction(`void r8sp1059(std::unordered_multiset<int *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1059 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1059 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1060
  * @tc.name h2dtscpp_tpo_1060
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::tuple<int16_t, bool,  int64_t, std::string, int32_t, char *, int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1060', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1060(std::tuple<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`),
        unions: parseUnion(`void r8sp1060(std::tuple<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`),
        structs: parseStruct(`void r8sp1060(std::tuple<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`),
        classes: parseClass(`void r8sp1060(std::tuple<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`),
        funcs: parseFunction(`void r8sp1060(std::tuple<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1060 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1060 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1061
  * @tc.name h2dtscpp_tpo_1061
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::pair<int16_t, bool,  int64_t, std::string, int32_t, char *, int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1061', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1061(std::pair<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`),
        unions: parseUnion(`void r8sp1061(std::pair<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`),
        structs: parseStruct(`void r8sp1061(std::pair<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`),
        classes: parseClass(`void r8sp1061(std::pair<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`),
        funcs: parseFunction(`void r8sp1061(std::pair<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1061 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1061 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1062
  * @tc.name h2dtscpp_tpo_1062
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::complex<long long, int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1062', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1062(std::complex<long long, int *> v);`),
        unions: parseUnion(`void r8sp1062(std::complex<long long, int *> v);`),
        structs: parseStruct(`void r8sp1062(std::complex<long long, int *> v);`),
        classes: parseClass(`void r8sp1062(std::complex<long long, int *> v);`),
        funcs: parseFunction(`void r8sp1062(std::complex<long long, int *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1062 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1062 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1063
  * @tc.name h2dtscpp_tpo_1063
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::complex<unsigned short, unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1063', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1063(std::complex<unsigned short, unsigned long> v);`),
        unions: parseUnion(`void r8sp1063(std::complex<unsigned short, unsigned long> v);`),
        structs: parseStruct(`void r8sp1063(std::complex<unsigned short, unsigned long> v);`),
        classes: parseClass(`void r8sp1063(std::complex<unsigned short, unsigned long> v);`),
        funcs: parseFunction(`void r8sp1063(std::complex<unsigned short, unsigned long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1063 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1063 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1064
  * @tc.name h2dtscpp_tpo_1064
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::complex<int64_t, unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1064', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1064(std::complex<int64_t, unsigned long long> v);`),
        unions: parseUnion(`void r8sp1064(std::complex<int64_t, unsigned long long> v);`),
        structs: parseStruct(`void r8sp1064(std::complex<int64_t, unsigned long long> v);`),
        classes: parseClass(`void r8sp1064(std::complex<int64_t, unsigned long long> v);`),
        funcs: parseFunction(`void r8sp1064(std::complex<int64_t, unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1064 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1064 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1065
  * @tc.name h2dtscpp_tpo_1065
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::chrono::hours` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1065', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1065(std::chrono::hours v);`),
        unions: parseUnion(`void r8sp1065(std::chrono::hours v);`),
        structs: parseStruct(`void r8sp1065(std::chrono::hours v);`),
        classes: parseClass(`void r8sp1065(std::chrono::hours v);`),
        funcs: parseFunction(`void r8sp1065(std::chrono::hours v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1065 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1065 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1066
  * @tc.name h2dtscpp_tpo_1066
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::chrono::minutes` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1066', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1066(std::chrono::minutes v);`),
        unions: parseUnion(`void r8sp1066(std::chrono::minutes v);`),
        structs: parseStruct(`void r8sp1066(std::chrono::minutes v);`),
        classes: parseClass(`void r8sp1066(std::chrono::minutes v);`),
        funcs: parseFunction(`void r8sp1066(std::chrono::minutes v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1066 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1066 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1067
  * @tc.name h2dtscpp_tpo_1067
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::function<std::string(char *)>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1067', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1067(std::function<std::string(char *)> v);`),
        unions: parseUnion(`void r8sp1067(std::function<std::string(char *)> v);`),
        structs: parseStruct(`void r8sp1067(std::function<std::string(char *)> v);`),
        classes: parseClass(`void r8sp1067(std::function<std::string(char *)> v);`),
        funcs: parseFunction(`void r8sp1067(std::function<std::string(char *)> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1067 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1067 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1068
  * @tc.name h2dtscpp_tpo_1068
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::function<unsigned short(long long, unsigned long)>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1068', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1068(std::function<unsigned short(long long, unsigned long)> v);`),
        unions: parseUnion(`void r8sp1068(std::function<unsigned short(long long, unsigned long)> v);`),
        structs: parseStruct(`void r8sp1068(std::function<unsigned short(long long, unsigned long)> v);`),
        classes: parseClass(`void r8sp1068(std::function<unsigned short(long long, unsigned long)> v);`),
        funcs: parseFunction(`void r8sp1068(std::function<unsigned short(long long, unsigned long)> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1068 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1068 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1069
  * @tc.name h2dtscpp_tpo_1069
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::function<void(int *, unsigned long long)>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1069', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1069(std::function<void(int *, unsigned long long)> v);`),
        unions: parseUnion(`void r8sp1069(std::function<void(int *, unsigned long long)> v);`),
        structs: parseStruct(`void r8sp1069(std::function<void(int *, unsigned long long)> v);`),
        classes: parseClass(`void r8sp1069(std::function<void(int *, unsigned long long)> v);`),
        funcs: parseFunction(`void r8sp1069(std::function<void(int *, unsigned long long)> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1069 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1069 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1071
  * @tc.name h2dtscpp_tpo_1071
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1071', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1071(std::unique_ptr<char *> v);`),
        unions: parseUnion(`void r8sp1071(std::unique_ptr<char *> v);`),
        structs: parseStruct(`void r8sp1071(std::unique_ptr<char *> v);`),
        classes: parseClass(`void r8sp1071(std::unique_ptr<char *> v);`),
        funcs: parseFunction(`void r8sp1071(std::unique_ptr<char *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1071 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1071 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1072
  * @tc.name h2dtscpp_tpo_1072
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1072', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1072(std::unique_ptr<long long> v);`),
        unions: parseUnion(`void r8sp1072(std::unique_ptr<long long> v);`),
        structs: parseStruct(`void r8sp1072(std::unique_ptr<long long> v);`),
        classes: parseClass(`void r8sp1072(std::unique_ptr<long long> v);`),
        funcs: parseFunction(`void r8sp1072(std::unique_ptr<long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1072 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1072 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1073
  * @tc.name h2dtscpp_tpo_1073
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1073', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1073(std::unique_ptr<unsigned short> v);`),
        unions: parseUnion(`void r8sp1073(std::unique_ptr<unsigned short> v);`),
        structs: parseStruct(`void r8sp1073(std::unique_ptr<unsigned short> v);`),
        classes: parseClass(`void r8sp1073(std::unique_ptr<unsigned short> v);`),
        funcs: parseFunction(`void r8sp1073(std::unique_ptr<unsigned short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1073 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1073 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1074
  * @tc.name h2dtscpp_tpo_1074
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1074', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1074(std::unique_ptr<unsigned long> v);`),
        unions: parseUnion(`void r8sp1074(std::unique_ptr<unsigned long> v);`),
        structs: parseStruct(`void r8sp1074(std::unique_ptr<unsigned long> v);`),
        classes: parseClass(`void r8sp1074(std::unique_ptr<unsigned long> v);`),
        funcs: parseFunction(`void r8sp1074(std::unique_ptr<unsigned long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1074 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1074 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1075
  * @tc.name h2dtscpp_tpo_1075
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1075', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1075(std::unique_ptr<unsigned long long> v);`),
        unions: parseUnion(`void r8sp1075(std::unique_ptr<unsigned long long> v);`),
        structs: parseStruct(`void r8sp1075(std::unique_ptr<unsigned long long> v);`),
        classes: parseClass(`void r8sp1075(std::unique_ptr<unsigned long long> v);`),
        funcs: parseFunction(`void r8sp1075(std::unique_ptr<unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1075 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1075 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1076
  * @tc.name h2dtscpp_tpo_1076
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1076', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1076(std::unique_ptr<int *> v);`),
        unions: parseUnion(`void r8sp1076(std::unique_ptr<int *> v);`),
        structs: parseStruct(`void r8sp1076(std::unique_ptr<int *> v);`),
        classes: parseClass(`void r8sp1076(std::unique_ptr<int *> v);`),
        funcs: parseFunction(`void r8sp1076(std::unique_ptr<int *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1076 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1076 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1078
  * @tc.name h2dtscpp_tpo_1078
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1078', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1078(std::shared_ptr<char *> v);`),
        unions: parseUnion(`void r8sp1078(std::shared_ptr<char *> v);`),
        structs: parseStruct(`void r8sp1078(std::shared_ptr<char *> v);`),
        classes: parseClass(`void r8sp1078(std::shared_ptr<char *> v);`),
        funcs: parseFunction(`void r8sp1078(std::shared_ptr<char *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1078 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1078 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1079
  * @tc.name h2dtscpp_tpo_1079
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1079', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1079(std::shared_ptr<long long> v);`),
        unions: parseUnion(`void r8sp1079(std::shared_ptr<long long> v);`),
        structs: parseStruct(`void r8sp1079(std::shared_ptr<long long> v);`),
        classes: parseClass(`void r8sp1079(std::shared_ptr<long long> v);`),
        funcs: parseFunction(`void r8sp1079(std::shared_ptr<long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1079 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1079 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1080
  * @tc.name h2dtscpp_tpo_1080
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1080', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1080(std::shared_ptr<unsigned short> v);`),
        unions: parseUnion(`void r8sp1080(std::shared_ptr<unsigned short> v);`),
        structs: parseStruct(`void r8sp1080(std::shared_ptr<unsigned short> v);`),
        classes: parseClass(`void r8sp1080(std::shared_ptr<unsigned short> v);`),
        funcs: parseFunction(`void r8sp1080(std::shared_ptr<unsigned short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1080 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1080 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1081
  * @tc.name h2dtscpp_tpo_1081
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1081', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1081(std::shared_ptr<unsigned long> v);`),
        unions: parseUnion(`void r8sp1081(std::shared_ptr<unsigned long> v);`),
        structs: parseStruct(`void r8sp1081(std::shared_ptr<unsigned long> v);`),
        classes: parseClass(`void r8sp1081(std::shared_ptr<unsigned long> v);`),
        funcs: parseFunction(`void r8sp1081(std::shared_ptr<unsigned long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1081 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1081 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1082
  * @tc.name h2dtscpp_tpo_1082
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1082', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1082(std::shared_ptr<unsigned long long> v);`),
        unions: parseUnion(`void r8sp1082(std::shared_ptr<unsigned long long> v);`),
        structs: parseStruct(`void r8sp1082(std::shared_ptr<unsigned long long> v);`),
        classes: parseClass(`void r8sp1082(std::shared_ptr<unsigned long long> v);`),
        funcs: parseFunction(`void r8sp1082(std::shared_ptr<unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1082 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1082 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1083
  * @tc.name h2dtscpp_tpo_1083
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1083', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1083(std::shared_ptr<int *> v);`),
        unions: parseUnion(`void r8sp1083(std::shared_ptr<int *> v);`),
        structs: parseStruct(`void r8sp1083(std::shared_ptr<int *> v);`),
        classes: parseClass(`void r8sp1083(std::shared_ptr<int *> v);`),
        funcs: parseFunction(`void r8sp1083(std::shared_ptr<int *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1083 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1083 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1085
  * @tc.name h2dtscpp_tpo_1085
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1085', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1085(std::weak_ptr<char *> v);`),
        unions: parseUnion(`void r8sp1085(std::weak_ptr<char *> v);`),
        structs: parseStruct(`void r8sp1085(std::weak_ptr<char *> v);`),
        classes: parseClass(`void r8sp1085(std::weak_ptr<char *> v);`),
        funcs: parseFunction(`void r8sp1085(std::weak_ptr<char *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1085 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1085 执行异常: ${String(err)}`);
    }
  });
});
