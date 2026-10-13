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
  * @tc.number h2dtscpp_tpo_0876
  * @tc.name h2dtscpp_tpo_0876
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::stack<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0876', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp876(std::stack<std::string> v);`),
        unions: parseUnion(`void r8sp876(std::stack<std::string> v);`),
        structs: parseStruct(`void r8sp876(std::stack<std::string> v);`),
        classes: parseClass(`void r8sp876(std::stack<std::string> v);`),
        funcs: parseFunction(`void r8sp876(std::stack<std::string> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0876 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0876 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0877
  * @tc.name h2dtscpp_tpo_0877
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::stack<char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0877', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp877(std::stack<char *> v);`),
        unions: parseUnion(`void r8sp877(std::stack<char *> v);`),
        structs: parseStruct(`void r8sp877(std::stack<char *> v);`),
        classes: parseClass(`void r8sp877(std::stack<char *> v);`),
        funcs: parseFunction(`void r8sp877(std::stack<char *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0877 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0877 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0878
  * @tc.name h2dtscpp_tpo_0878
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::stack<long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0878', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp878(std::stack<long long> v);`),
        unions: parseUnion(`void r8sp878(std::stack<long long> v);`),
        structs: parseStruct(`void r8sp878(std::stack<long long> v);`),
        classes: parseClass(`void r8sp878(std::stack<long long> v);`),
        funcs: parseFunction(`void r8sp878(std::stack<long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0878 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0878 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0879
  * @tc.name h2dtscpp_tpo_0879
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::stack<unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0879', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp879(std::stack<unsigned short> v);`),
        unions: parseUnion(`void r8sp879(std::stack<unsigned short> v);`),
        structs: parseStruct(`void r8sp879(std::stack<unsigned short> v);`),
        classes: parseClass(`void r8sp879(std::stack<unsigned short> v);`),
        funcs: parseFunction(`void r8sp879(std::stack<unsigned short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0879 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0879 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0880
  * @tc.name h2dtscpp_tpo_0880
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::stack<unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0880', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp880(std::stack<unsigned long> v);`),
        unions: parseUnion(`void r8sp880(std::stack<unsigned long> v);`),
        structs: parseStruct(`void r8sp880(std::stack<unsigned long> v);`),
        classes: parseClass(`void r8sp880(std::stack<unsigned long> v);`),
        funcs: parseFunction(`void r8sp880(std::stack<unsigned long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0880 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0880 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0881
  * @tc.name h2dtscpp_tpo_0881
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::stack<unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0881', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp881(std::stack<unsigned long long> v);`),
        unions: parseUnion(`void r8sp881(std::stack<unsigned long long> v);`),
        structs: parseStruct(`void r8sp881(std::stack<unsigned long long> v);`),
        classes: parseClass(`void r8sp881(std::stack<unsigned long long> v);`),
        funcs: parseFunction(`void r8sp881(std::stack<unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0881 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0881 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0882
  * @tc.name h2dtscpp_tpo_0882
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::stack<int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0882', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp882(std::stack<int *> v);`),
        unions: parseUnion(`void r8sp882(std::stack<int *> v);`),
        structs: parseStruct(`void r8sp882(std::stack<int *> v);`),
        classes: parseClass(`void r8sp882(std::stack<int *> v);`),
        funcs: parseFunction(`void r8sp882(std::stack<int *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0882 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0882 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0883
  * @tc.name h2dtscpp_tpo_0883
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::stack<std::string>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0883', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp883(std::stack<std::string>::iterator v);`),
        unions: parseUnion(`void r8sp883(std::stack<std::string>::iterator v);`),
        structs: parseStruct(`void r8sp883(std::stack<std::string>::iterator v);`),
        classes: parseClass(`void r8sp883(std::stack<std::string>::iterator v);`),
        funcs: parseFunction(`void r8sp883(std::stack<std::string>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0883 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0883 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0884
  * @tc.name h2dtscpp_tpo_0884
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::stack<char *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0884', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp884(std::stack<char *>::iterator v);`),
        unions: parseUnion(`void r8sp884(std::stack<char *>::iterator v);`),
        structs: parseStruct(`void r8sp884(std::stack<char *>::iterator v);`),
        classes: parseClass(`void r8sp884(std::stack<char *>::iterator v);`),
        funcs: parseFunction(`void r8sp884(std::stack<char *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0884 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0884 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0885
  * @tc.name h2dtscpp_tpo_0885
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::stack<long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0885', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp885(std::stack<long long>::iterator v);`),
        unions: parseUnion(`void r8sp885(std::stack<long long>::iterator v);`),
        structs: parseStruct(`void r8sp885(std::stack<long long>::iterator v);`),
        classes: parseClass(`void r8sp885(std::stack<long long>::iterator v);`),
        funcs: parseFunction(`void r8sp885(std::stack<long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0885 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0885 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0886
  * @tc.name h2dtscpp_tpo_0886
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::stack<unsigned short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0886', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp886(std::stack<unsigned short>::iterator v);`),
        unions: parseUnion(`void r8sp886(std::stack<unsigned short>::iterator v);`),
        structs: parseStruct(`void r8sp886(std::stack<unsigned short>::iterator v);`),
        classes: parseClass(`void r8sp886(std::stack<unsigned short>::iterator v);`),
        funcs: parseFunction(`void r8sp886(std::stack<unsigned short>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0886 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0886 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0887
  * @tc.name h2dtscpp_tpo_0887
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::stack<unsigned long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0887', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp887(std::stack<unsigned long>::iterator v);`),
        unions: parseUnion(`void r8sp887(std::stack<unsigned long>::iterator v);`),
        structs: parseStruct(`void r8sp887(std::stack<unsigned long>::iterator v);`),
        classes: parseClass(`void r8sp887(std::stack<unsigned long>::iterator v);`),
        funcs: parseFunction(`void r8sp887(std::stack<unsigned long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0887 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0887 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0888
  * @tc.name h2dtscpp_tpo_0888
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::stack<unsigned long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0888', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp888(std::stack<unsigned long long>::iterator v);`),
        unions: parseUnion(`void r8sp888(std::stack<unsigned long long>::iterator v);`),
        structs: parseStruct(`void r8sp888(std::stack<unsigned long long>::iterator v);`),
        classes: parseClass(`void r8sp888(std::stack<unsigned long long>::iterator v);`),
        funcs: parseFunction(`void r8sp888(std::stack<unsigned long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0888 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0888 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0889
  * @tc.name h2dtscpp_tpo_0889
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::stack<int *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0889', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp889(std::stack<int *>::iterator v);`),
        unions: parseUnion(`void r8sp889(std::stack<int *>::iterator v);`),
        structs: parseStruct(`void r8sp889(std::stack<int *>::iterator v);`),
        classes: parseClass(`void r8sp889(std::stack<int *>::iterator v);`),
        funcs: parseFunction(`void r8sp889(std::stack<int *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0889 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0889 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0891
  * @tc.name h2dtscpp_tpo_0891
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::queue<char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0891', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp891(std::queue<char *> v);`),
        unions: parseUnion(`void r8sp891(std::queue<char *> v);`),
        structs: parseStruct(`void r8sp891(std::queue<char *> v);`),
        classes: parseClass(`void r8sp891(std::queue<char *> v);`),
        funcs: parseFunction(`void r8sp891(std::queue<char *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0891 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0891 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0892
  * @tc.name h2dtscpp_tpo_0892
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::queue<long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0892', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp892(std::queue<long long> v);`),
        unions: parseUnion(`void r8sp892(std::queue<long long> v);`),
        structs: parseStruct(`void r8sp892(std::queue<long long> v);`),
        classes: parseClass(`void r8sp892(std::queue<long long> v);`),
        funcs: parseFunction(`void r8sp892(std::queue<long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0892 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0892 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0893
  * @tc.name h2dtscpp_tpo_0893
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::queue<unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0893', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp893(std::queue<unsigned short> v);`),
        unions: parseUnion(`void r8sp893(std::queue<unsigned short> v);`),
        structs: parseStruct(`void r8sp893(std::queue<unsigned short> v);`),
        classes: parseClass(`void r8sp893(std::queue<unsigned short> v);`),
        funcs: parseFunction(`void r8sp893(std::queue<unsigned short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0893 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0893 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0894
  * @tc.name h2dtscpp_tpo_0894
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::queue<unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0894', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp894(std::queue<unsigned long> v);`),
        unions: parseUnion(`void r8sp894(std::queue<unsigned long> v);`),
        structs: parseStruct(`void r8sp894(std::queue<unsigned long> v);`),
        classes: parseClass(`void r8sp894(std::queue<unsigned long> v);`),
        funcs: parseFunction(`void r8sp894(std::queue<unsigned long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0894 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0894 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0895
  * @tc.name h2dtscpp_tpo_0895
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::queue<unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0895', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp895(std::queue<unsigned long long> v);`),
        unions: parseUnion(`void r8sp895(std::queue<unsigned long long> v);`),
        structs: parseStruct(`void r8sp895(std::queue<unsigned long long> v);`),
        classes: parseClass(`void r8sp895(std::queue<unsigned long long> v);`),
        funcs: parseFunction(`void r8sp895(std::queue<unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0895 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0895 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0896
  * @tc.name h2dtscpp_tpo_0896
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::queue<int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0896', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp896(std::queue<int *> v);`),
        unions: parseUnion(`void r8sp896(std::queue<int *> v);`),
        structs: parseStruct(`void r8sp896(std::queue<int *> v);`),
        classes: parseClass(`void r8sp896(std::queue<int *> v);`),
        funcs: parseFunction(`void r8sp896(std::queue<int *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0896 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0896 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0897
  * @tc.name h2dtscpp_tpo_0897
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::queue<std::string>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0897', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp897(std::queue<std::string>::iterator v);`),
        unions: parseUnion(`void r8sp897(std::queue<std::string>::iterator v);`),
        structs: parseStruct(`void r8sp897(std::queue<std::string>::iterator v);`),
        classes: parseClass(`void r8sp897(std::queue<std::string>::iterator v);`),
        funcs: parseFunction(`void r8sp897(std::queue<std::string>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0897 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0897 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0898
  * @tc.name h2dtscpp_tpo_0898
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::queue<char *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0898', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp898(std::queue<char *>::iterator v);`),
        unions: parseUnion(`void r8sp898(std::queue<char *>::iterator v);`),
        structs: parseStruct(`void r8sp898(std::queue<char *>::iterator v);`),
        classes: parseClass(`void r8sp898(std::queue<char *>::iterator v);`),
        funcs: parseFunction(`void r8sp898(std::queue<char *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0898 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0898 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0899
  * @tc.name h2dtscpp_tpo_0899
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::queue<long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0899', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp899(std::queue<long long>::iterator v);`),
        unions: parseUnion(`void r8sp899(std::queue<long long>::iterator v);`),
        structs: parseStruct(`void r8sp899(std::queue<long long>::iterator v);`),
        classes: parseClass(`void r8sp899(std::queue<long long>::iterator v);`),
        funcs: parseFunction(`void r8sp899(std::queue<long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0899 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0899 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0900
  * @tc.name h2dtscpp_tpo_0900
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::queue<unsigned short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0900', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp900(std::queue<unsigned short>::iterator v);`),
        unions: parseUnion(`void r8sp900(std::queue<unsigned short>::iterator v);`),
        structs: parseStruct(`void r8sp900(std::queue<unsigned short>::iterator v);`),
        classes: parseClass(`void r8sp900(std::queue<unsigned short>::iterator v);`),
        funcs: parseFunction(`void r8sp900(std::queue<unsigned short>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0900 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0900 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0901
  * @tc.name h2dtscpp_tpo_0901
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::queue<unsigned long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0901', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp901(std::queue<unsigned long>::iterator v);`),
        unions: parseUnion(`void r8sp901(std::queue<unsigned long>::iterator v);`),
        structs: parseStruct(`void r8sp901(std::queue<unsigned long>::iterator v);`),
        classes: parseClass(`void r8sp901(std::queue<unsigned long>::iterator v);`),
        funcs: parseFunction(`void r8sp901(std::queue<unsigned long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0901 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0901 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0902
  * @tc.name h2dtscpp_tpo_0902
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::queue<unsigned long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0902', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp902(std::queue<unsigned long long>::iterator v);`),
        unions: parseUnion(`void r8sp902(std::queue<unsigned long long>::iterator v);`),
        structs: parseStruct(`void r8sp902(std::queue<unsigned long long>::iterator v);`),
        classes: parseClass(`void r8sp902(std::queue<unsigned long long>::iterator v);`),
        funcs: parseFunction(`void r8sp902(std::queue<unsigned long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0902 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0902 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0903
  * @tc.name h2dtscpp_tpo_0903
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::queue<int *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0903', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp903(std::queue<int *>::iterator v);`),
        unions: parseUnion(`void r8sp903(std::queue<int *>::iterator v);`),
        structs: parseStruct(`void r8sp903(std::queue<int *>::iterator v);`),
        classes: parseClass(`void r8sp903(std::queue<int *>::iterator v);`),
        funcs: parseFunction(`void r8sp903(std::queue<int *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0903 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0903 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0904
  * @tc.name h2dtscpp_tpo_0904
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::valarray<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0904', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp904(std::valarray<std::string> v);`),
        unions: parseUnion(`void r8sp904(std::valarray<std::string> v);`),
        structs: parseStruct(`void r8sp904(std::valarray<std::string> v);`),
        classes: parseClass(`void r8sp904(std::valarray<std::string> v);`),
        funcs: parseFunction(`void r8sp904(std::valarray<std::string> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0904 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0904 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0905
  * @tc.name h2dtscpp_tpo_0905
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::valarray<char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0905', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp905(std::valarray<char *> v);`),
        unions: parseUnion(`void r8sp905(std::valarray<char *> v);`),
        structs: parseStruct(`void r8sp905(std::valarray<char *> v);`),
        classes: parseClass(`void r8sp905(std::valarray<char *> v);`),
        funcs: parseFunction(`void r8sp905(std::valarray<char *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0905 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0905 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0906
  * @tc.name h2dtscpp_tpo_0906
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::valarray<long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0906', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp906(std::valarray<long long> v);`),
        unions: parseUnion(`void r8sp906(std::valarray<long long> v);`),
        structs: parseStruct(`void r8sp906(std::valarray<long long> v);`),
        classes: parseClass(`void r8sp906(std::valarray<long long> v);`),
        funcs: parseFunction(`void r8sp906(std::valarray<long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0906 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0906 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0907
  * @tc.name h2dtscpp_tpo_0907
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::valarray<unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0907', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp907(std::valarray<unsigned short> v);`),
        unions: parseUnion(`void r8sp907(std::valarray<unsigned short> v);`),
        structs: parseStruct(`void r8sp907(std::valarray<unsigned short> v);`),
        classes: parseClass(`void r8sp907(std::valarray<unsigned short> v);`),
        funcs: parseFunction(`void r8sp907(std::valarray<unsigned short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0907 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0907 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0908
  * @tc.name h2dtscpp_tpo_0908
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::valarray<unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0908', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp908(std::valarray<unsigned long> v);`),
        unions: parseUnion(`void r8sp908(std::valarray<unsigned long> v);`),
        structs: parseStruct(`void r8sp908(std::valarray<unsigned long> v);`),
        classes: parseClass(`void r8sp908(std::valarray<unsigned long> v);`),
        funcs: parseFunction(`void r8sp908(std::valarray<unsigned long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0908 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0908 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0909
  * @tc.name h2dtscpp_tpo_0909
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::valarray<unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0909', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp909(std::valarray<unsigned long long> v);`),
        unions: parseUnion(`void r8sp909(std::valarray<unsigned long long> v);`),
        structs: parseStruct(`void r8sp909(std::valarray<unsigned long long> v);`),
        classes: parseClass(`void r8sp909(std::valarray<unsigned long long> v);`),
        funcs: parseFunction(`void r8sp909(std::valarray<unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0909 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0909 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0910
  * @tc.name h2dtscpp_tpo_0910
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::valarray<int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0910', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp910(std::valarray<int *> v);`),
        unions: parseUnion(`void r8sp910(std::valarray<int *> v);`),
        structs: parseStruct(`void r8sp910(std::valarray<int *> v);`),
        classes: parseClass(`void r8sp910(std::valarray<int *> v);`),
        funcs: parseFunction(`void r8sp910(std::valarray<int *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0910 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0910 执行异常: ${String(err)}`);
    }
  });
});
