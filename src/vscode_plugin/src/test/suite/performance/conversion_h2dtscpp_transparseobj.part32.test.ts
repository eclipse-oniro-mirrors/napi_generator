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
  * @tc.number h2dtscpp_tpo_1086
  * @tc.name h2dtscpp_tpo_1086
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1086', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1086(std::weak_ptr<long long> v);`),
        unions: parseUnion(`void r8sp1086(std::weak_ptr<long long> v);`),
        structs: parseStruct(`void r8sp1086(std::weak_ptr<long long> v);`),
        classes: parseClass(`void r8sp1086(std::weak_ptr<long long> v);`),
        funcs: parseFunction(`void r8sp1086(std::weak_ptr<long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1086 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1086 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1087
  * @tc.name h2dtscpp_tpo_1087
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1087', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1087(std::weak_ptr<unsigned short> v);`),
        unions: parseUnion(`void r8sp1087(std::weak_ptr<unsigned short> v);`),
        structs: parseStruct(`void r8sp1087(std::weak_ptr<unsigned short> v);`),
        classes: parseClass(`void r8sp1087(std::weak_ptr<unsigned short> v);`),
        funcs: parseFunction(`void r8sp1087(std::weak_ptr<unsigned short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1087 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1087 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1088
  * @tc.name h2dtscpp_tpo_1088
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1088', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1088(std::weak_ptr<unsigned long> v);`),
        unions: parseUnion(`void r8sp1088(std::weak_ptr<unsigned long> v);`),
        structs: parseStruct(`void r8sp1088(std::weak_ptr<unsigned long> v);`),
        classes: parseClass(`void r8sp1088(std::weak_ptr<unsigned long> v);`),
        funcs: parseFunction(`void r8sp1088(std::weak_ptr<unsigned long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1088 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1089
  * @tc.name h2dtscpp_tpo_1089
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1089', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1089(std::weak_ptr<unsigned long long> v);`),
        unions: parseUnion(`void r8sp1089(std::weak_ptr<unsigned long long> v);`),
        structs: parseStruct(`void r8sp1089(std::weak_ptr<unsigned long long> v);`),
        classes: parseClass(`void r8sp1089(std::weak_ptr<unsigned long long> v);`),
        funcs: parseFunction(`void r8sp1089(std::weak_ptr<unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1089 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1089 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1090
  * @tc.name h2dtscpp_tpo_1090
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1090', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1090(std::weak_ptr<int *> v);`),
        unions: parseUnion(`void r8sp1090(std::weak_ptr<int *> v);`),
        structs: parseStruct(`void r8sp1090(std::weak_ptr<int *> v);`),
        classes: parseClass(`void r8sp1090(std::weak_ptr<int *> v);`),
        funcs: parseFunction(`void r8sp1090(std::weak_ptr<int *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1090 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1090 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1091
  * @tc.name h2dtscpp_tpo_1091
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `int$#` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1091', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1091(int\$# v);`),
        unions: parseUnion(`void r8sp1091(int\$# v);`),
        structs: parseStruct(`void r8sp1091(int\$# v);`),
        classes: parseClass(`void r8sp1091(int\$# v);`),
        funcs: parseFunction(`void r8sp1091(int\$# v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1091 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1092
  * @tc.name h2dtscpp_tpo_1092
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `MyType` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1092', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1092(MyType v);`),
        unions: parseUnion(`void r8sp1092(MyType v);`),
        structs: parseStruct(`void r8sp1092(MyType v);`),
        classes: parseClass(`void r8sp1092(MyType v);`),
        funcs: parseFunction(`void r8sp1092(MyType v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1092 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1093
  * @tc.name h2dtscpp_tpo_1093
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `defined type` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1093', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1093(defined type v);`),
        unions: parseUnion(`void r8sp1093(defined type v);`),
        structs: parseStruct(`void r8sp1093(defined type v);`),
        classes: parseClass(`void r8sp1093(defined type v);`),
        funcs: parseFunction(`void r8sp1093(defined type v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1093 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1094
  * @tc.name h2dtscpp_tpo_1094
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_1094', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1094(std::weak_ptr< v);`),
        unions: parseUnion(`void r8sp1094(std::weak_ptr< v);`),
        structs: parseStruct(`void r8sp1094(std::weak_ptr< v);`),
        classes: parseClass(`void r8sp1094(std::weak_ptr< v);`),
        funcs: parseFunction(`void r8sp1094(std::weak_ptr< v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_1094 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_1094 执行异常: ${String(err)}`);
    }
  });
});
