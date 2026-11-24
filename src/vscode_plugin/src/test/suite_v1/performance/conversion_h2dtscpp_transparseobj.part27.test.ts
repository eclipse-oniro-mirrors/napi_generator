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
  * @tc.number h2dtscpp_tpo_0911
  * @tc.name h2dtscpp_tpo_0911
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::valarray<std::string>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0911', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp911(std::valarray<std::string>::iterator v);`),
        unions: parseUnion(`void r8sp911(std::valarray<std::string>::iterator v);`),
        structs: parseStruct(`void r8sp911(std::valarray<std::string>::iterator v);`),
        classes: parseClass(`void r8sp911(std::valarray<std::string>::iterator v);`),
        funcs: parseFunction(`void r8sp911(std::valarray<std::string>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0911 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0911 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0912
  * @tc.name h2dtscpp_tpo_0912
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::valarray<char *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0912', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp912(std::valarray<char *>::iterator v);`),
        unions: parseUnion(`void r8sp912(std::valarray<char *>::iterator v);`),
        structs: parseStruct(`void r8sp912(std::valarray<char *>::iterator v);`),
        classes: parseClass(`void r8sp912(std::valarray<char *>::iterator v);`),
        funcs: parseFunction(`void r8sp912(std::valarray<char *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0912 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0912 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0913
  * @tc.name h2dtscpp_tpo_0913
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::valarray<long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0913', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp913(std::valarray<long long>::iterator v);`),
        unions: parseUnion(`void r8sp913(std::valarray<long long>::iterator v);`),
        structs: parseStruct(`void r8sp913(std::valarray<long long>::iterator v);`),
        classes: parseClass(`void r8sp913(std::valarray<long long>::iterator v);`),
        funcs: parseFunction(`void r8sp913(std::valarray<long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0913 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0913 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0914
  * @tc.name h2dtscpp_tpo_0914
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::valarray<unsigned short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0914', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp914(std::valarray<unsigned short>::iterator v);`),
        unions: parseUnion(`void r8sp914(std::valarray<unsigned short>::iterator v);`),
        structs: parseStruct(`void r8sp914(std::valarray<unsigned short>::iterator v);`),
        classes: parseClass(`void r8sp914(std::valarray<unsigned short>::iterator v);`),
        funcs: parseFunction(`void r8sp914(std::valarray<unsigned short>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0914 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0914 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0915
  * @tc.name h2dtscpp_tpo_0915
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::valarray<unsigned long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0915', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp915(std::valarray<unsigned long>::iterator v);`),
        unions: parseUnion(`void r8sp915(std::valarray<unsigned long>::iterator v);`),
        structs: parseStruct(`void r8sp915(std::valarray<unsigned long>::iterator v);`),
        classes: parseClass(`void r8sp915(std::valarray<unsigned long>::iterator v);`),
        funcs: parseFunction(`void r8sp915(std::valarray<unsigned long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0915 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0915 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0916
  * @tc.name h2dtscpp_tpo_0916
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::valarray<unsigned long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0916', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp916(std::valarray<unsigned long long>::iterator v);`),
        unions: parseUnion(`void r8sp916(std::valarray<unsigned long long>::iterator v);`),
        structs: parseStruct(`void r8sp916(std::valarray<unsigned long long>::iterator v);`),
        classes: parseClass(`void r8sp916(std::valarray<unsigned long long>::iterator v);`),
        funcs: parseFunction(`void r8sp916(std::valarray<unsigned long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0916 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0916 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0917
  * @tc.name h2dtscpp_tpo_0917
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::valarray<int *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0917', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp917(std::valarray<int *>::iterator v);`),
        unions: parseUnion(`void r8sp917(std::valarray<int *>::iterator v);`),
        structs: parseStruct(`void r8sp917(std::valarray<int *>::iterator v);`),
        classes: parseClass(`void r8sp917(std::valarray<int *>::iterator v);`),
        funcs: parseFunction(`void r8sp917(std::valarray<int *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0917 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0917 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0918
  * @tc.name h2dtscpp_tpo_0918
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::priority_queue<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0918', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp918(std::priority_queue<std::string> v);`),
        unions: parseUnion(`void r8sp918(std::priority_queue<std::string> v);`),
        structs: parseStruct(`void r8sp918(std::priority_queue<std::string> v);`),
        classes: parseClass(`void r8sp918(std::priority_queue<std::string> v);`),
        funcs: parseFunction(`void r8sp918(std::priority_queue<std::string> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0918 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0918 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0919
  * @tc.name h2dtscpp_tpo_0919
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::priority_queue<char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0919', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp919(std::priority_queue<char *> v);`),
        unions: parseUnion(`void r8sp919(std::priority_queue<char *> v);`),
        structs: parseStruct(`void r8sp919(std::priority_queue<char *> v);`),
        classes: parseClass(`void r8sp919(std::priority_queue<char *> v);`),
        funcs: parseFunction(`void r8sp919(std::priority_queue<char *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0919 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0919 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0920
  * @tc.name h2dtscpp_tpo_0920
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::priority_queue<long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0920', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp920(std::priority_queue<long long> v);`),
        unions: parseUnion(`void r8sp920(std::priority_queue<long long> v);`),
        structs: parseStruct(`void r8sp920(std::priority_queue<long long> v);`),
        classes: parseClass(`void r8sp920(std::priority_queue<long long> v);`),
        funcs: parseFunction(`void r8sp920(std::priority_queue<long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0920 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0920 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0921
  * @tc.name h2dtscpp_tpo_0921
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::priority_queue<unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0921', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp921(std::priority_queue<unsigned short> v);`),
        unions: parseUnion(`void r8sp921(std::priority_queue<unsigned short> v);`),
        structs: parseStruct(`void r8sp921(std::priority_queue<unsigned short> v);`),
        classes: parseClass(`void r8sp921(std::priority_queue<unsigned short> v);`),
        funcs: parseFunction(`void r8sp921(std::priority_queue<unsigned short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0921 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0921 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0922
  * @tc.name h2dtscpp_tpo_0922
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::priority_queue<unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0922', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp922(std::priority_queue<unsigned long> v);`),
        unions: parseUnion(`void r8sp922(std::priority_queue<unsigned long> v);`),
        structs: parseStruct(`void r8sp922(std::priority_queue<unsigned long> v);`),
        classes: parseClass(`void r8sp922(std::priority_queue<unsigned long> v);`),
        funcs: parseFunction(`void r8sp922(std::priority_queue<unsigned long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0922 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0922 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0923
  * @tc.name h2dtscpp_tpo_0923
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::priority_queue<unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0923', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp923(std::priority_queue<unsigned long long> v);`),
        unions: parseUnion(`void r8sp923(std::priority_queue<unsigned long long> v);`),
        structs: parseStruct(`void r8sp923(std::priority_queue<unsigned long long> v);`),
        classes: parseClass(`void r8sp923(std::priority_queue<unsigned long long> v);`),
        funcs: parseFunction(`void r8sp923(std::priority_queue<unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0923 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0923 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0924
  * @tc.name h2dtscpp_tpo_0924
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::priority_queue<int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0924', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp924(std::priority_queue<int *> v);`),
        unions: parseUnion(`void r8sp924(std::priority_queue<int *> v);`),
        structs: parseStruct(`void r8sp924(std::priority_queue<int *> v);`),
        classes: parseClass(`void r8sp924(std::priority_queue<int *> v);`),
        funcs: parseFunction(`void r8sp924(std::priority_queue<int *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0924 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0924 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0925
  * @tc.name h2dtscpp_tpo_0925
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::priority_queue<std::string>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0925', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp925(std::priority_queue<std::string>::iterator v);`),
        unions: parseUnion(`void r8sp925(std::priority_queue<std::string>::iterator v);`),
        structs: parseStruct(`void r8sp925(std::priority_queue<std::string>::iterator v);`),
        classes: parseClass(`void r8sp925(std::priority_queue<std::string>::iterator v);`),
        funcs: parseFunction(`void r8sp925(std::priority_queue<std::string>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0925 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0925 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0926
  * @tc.name h2dtscpp_tpo_0926
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::priority_queue<char *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0926', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp926(std::priority_queue<char *>::iterator v);`),
        unions: parseUnion(`void r8sp926(std::priority_queue<char *>::iterator v);`),
        structs: parseStruct(`void r8sp926(std::priority_queue<char *>::iterator v);`),
        classes: parseClass(`void r8sp926(std::priority_queue<char *>::iterator v);`),
        funcs: parseFunction(`void r8sp926(std::priority_queue<char *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0926 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0926 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0927
  * @tc.name h2dtscpp_tpo_0927
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::priority_queue<long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0927', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp927(std::priority_queue<long long>::iterator v);`),
        unions: parseUnion(`void r8sp927(std::priority_queue<long long>::iterator v);`),
        structs: parseStruct(`void r8sp927(std::priority_queue<long long>::iterator v);`),
        classes: parseClass(`void r8sp927(std::priority_queue<long long>::iterator v);`),
        funcs: parseFunction(`void r8sp927(std::priority_queue<long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0927 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0927 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0928
  * @tc.name h2dtscpp_tpo_0928
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::priority_queue<unsigned short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0928', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp928(std::priority_queue<unsigned short>::iterator v);`),
        unions: parseUnion(`void r8sp928(std::priority_queue<unsigned short>::iterator v);`),
        structs: parseStruct(`void r8sp928(std::priority_queue<unsigned short>::iterator v);`),
        classes: parseClass(`void r8sp928(std::priority_queue<unsigned short>::iterator v);`),
        funcs: parseFunction(`void r8sp928(std::priority_queue<unsigned short>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0928 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0928 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0929
  * @tc.name h2dtscpp_tpo_0929
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::priority_queue<unsigned long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0929', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp929(std::priority_queue<unsigned long>::iterator v);`),
        unions: parseUnion(`void r8sp929(std::priority_queue<unsigned long>::iterator v);`),
        structs: parseStruct(`void r8sp929(std::priority_queue<unsigned long>::iterator v);`),
        classes: parseClass(`void r8sp929(std::priority_queue<unsigned long>::iterator v);`),
        funcs: parseFunction(`void r8sp929(std::priority_queue<unsigned long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0929 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0929 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0930
  * @tc.name h2dtscpp_tpo_0930
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::priority_queue<unsigned long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0930', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp930(std::priority_queue<unsigned long long>::iterator v);`),
        unions: parseUnion(`void r8sp930(std::priority_queue<unsigned long long>::iterator v);`),
        structs: parseStruct(`void r8sp930(std::priority_queue<unsigned long long>::iterator v);`),
        classes: parseClass(`void r8sp930(std::priority_queue<unsigned long long>::iterator v);`),
        funcs: parseFunction(`void r8sp930(std::priority_queue<unsigned long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0930 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0930 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0931
  * @tc.name h2dtscpp_tpo_0931
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::priority_queue<int *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0931', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp931(std::priority_queue<int *>::iterator v);`),
        unions: parseUnion(`void r8sp931(std::priority_queue<int *>::iterator v);`),
        structs: parseStruct(`void r8sp931(std::priority_queue<int *>::iterator v);`),
        classes: parseClass(`void r8sp931(std::priority_queue<int *>::iterator v);`),
        funcs: parseFunction(`void r8sp931(std::priority_queue<int *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0931 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0931 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0932
  * @tc.name h2dtscpp_tpo_0932
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<std::string, int>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0932', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp932(std::map<std::string, int> v);`),
        unions: parseUnion(`void r8sp932(std::map<std::string, int> v);`),
        structs: parseStruct(`void r8sp932(std::map<std::string, int> v);`),
        classes: parseClass(`void r8sp932(std::map<std::string, int> v);`),
        funcs: parseFunction(`void r8sp932(std::map<std::string, int> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0932 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0932 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0933
  * @tc.name h2dtscpp_tpo_0933
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<charb *, size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0933', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp933(std::map<charb *, size_t> v);`),
        unions: parseUnion(`void r8sp933(std::map<charb *, size_t> v);`),
        structs: parseStruct(`void r8sp933(std::map<charb *, size_t> v);`),
        classes: parseClass(`void r8sp933(std::map<charb *, size_t> v);`),
        funcs: parseFunction(`void r8sp933(std::map<charb *, size_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0933 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0933 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0934
  * @tc.name h2dtscpp_tpo_0934
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<std::string, long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0934', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp934(std::map<std::string, long long> v);`),
        unions: parseUnion(`void r8sp934(std::map<std::string, long long> v);`),
        structs: parseStruct(`void r8sp934(std::map<std::string, long long> v);`),
        classes: parseClass(`void r8sp934(std::map<std::string, long long> v);`),
        funcs: parseFunction(`void r8sp934(std::map<std::string, long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0934 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0934 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0935
  * @tc.name h2dtscpp_tpo_0935
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<char *, int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0935', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp935(std::map<char *, int *> v);`),
        unions: parseUnion(`void r8sp935(std::map<char *, int *> v);`),
        structs: parseStruct(`void r8sp935(std::map<char *, int *> v);`),
        classes: parseClass(`void r8sp935(std::map<char *, int *> v);`),
        funcs: parseFunction(`void r8sp935(std::map<char *, int *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0935 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0935 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0936
  * @tc.name h2dtscpp_tpo_0936
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<char *, unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0936', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp936(std::map<char *, unsigned long long> v);`),
        unions: parseUnion(`void r8sp936(std::map<char *, unsigned long long> v);`),
        structs: parseStruct(`void r8sp936(std::map<char *, unsigned long long> v);`),
        classes: parseClass(`void r8sp936(std::map<char *, unsigned long long> v);`),
        funcs: parseFunction(`void r8sp936(std::map<char *, unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0936 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0936 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0937
  * @tc.name h2dtscpp_tpo_0937
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<std::string, unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0937', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp937(std::map<std::string, unsigned short> v);`),
        unions: parseUnion(`void r8sp937(std::map<std::string, unsigned short> v);`),
        structs: parseStruct(`void r8sp937(std::map<std::string, unsigned short> v);`),
        classes: parseClass(`void r8sp937(std::map<std::string, unsigned short> v);`),
        funcs: parseFunction(`void r8sp937(std::map<std::string, unsigned short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0937 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0937 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0938
  * @tc.name h2dtscpp_tpo_0938
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<int *, std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0938', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp938(std::map<int *, std::string> v);`),
        unions: parseUnion(`void r8sp938(std::map<int *, std::string> v);`),
        structs: parseStruct(`void r8sp938(std::map<int *, std::string> v);`),
        classes: parseClass(`void r8sp938(std::map<int *, std::string> v);`),
        funcs: parseFunction(`void r8sp938(std::map<int *, std::string> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0938 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0938 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0939
  * @tc.name h2dtscpp_tpo_0939
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<double, char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0939', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp939(std::map<double, char *> v);`),
        unions: parseUnion(`void r8sp939(std::map<double, char *> v);`),
        structs: parseStruct(`void r8sp939(std::map<double, char *> v);`),
        classes: parseClass(`void r8sp939(std::map<double, char *> v);`),
        funcs: parseFunction(`void r8sp939(std::map<double, char *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0939 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0939 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0940
  * @tc.name h2dtscpp_tpo_0940
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<int *, char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0940', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp940(std::map<int *, char> v);`),
        unions: parseUnion(`void r8sp940(std::map<int *, char> v);`),
        structs: parseStruct(`void r8sp940(std::map<int *, char> v);`),
        classes: parseClass(`void r8sp940(std::map<int *, char> v);`),
        funcs: parseFunction(`void r8sp940(std::map<int *, char> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0940 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0940 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0942
  * @tc.name h2dtscpp_tpo_0942
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<charb *, size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0942', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp942(std::map<charb *, size_t>::iterator v);`),
        unions: parseUnion(`void r8sp942(std::map<charb *, size_t>::iterator v);`),
        structs: parseStruct(`void r8sp942(std::map<charb *, size_t>::iterator v);`),
        classes: parseClass(`void r8sp942(std::map<charb *, size_t>::iterator v);`),
        funcs: parseFunction(`void r8sp942(std::map<charb *, size_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0942 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0942 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0943
  * @tc.name h2dtscpp_tpo_0943
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<std::string, long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0943', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp943(std::map<std::string, long long>::iterator v);`),
        unions: parseUnion(`void r8sp943(std::map<std::string, long long>::iterator v);`),
        structs: parseStruct(`void r8sp943(std::map<std::string, long long>::iterator v);`),
        classes: parseClass(`void r8sp943(std::map<std::string, long long>::iterator v);`),
        funcs: parseFunction(`void r8sp943(std::map<std::string, long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0943 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0943 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0944
  * @tc.name h2dtscpp_tpo_0944
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<char *, int *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0944', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp944(std::map<char *, int *>::iterator v);`),
        unions: parseUnion(`void r8sp944(std::map<char *, int *>::iterator v);`),
        structs: parseStruct(`void r8sp944(std::map<char *, int *>::iterator v);`),
        classes: parseClass(`void r8sp944(std::map<char *, int *>::iterator v);`),
        funcs: parseFunction(`void r8sp944(std::map<char *, int *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0944 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0944 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0945
  * @tc.name h2dtscpp_tpo_0945
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<char *, unsigned long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0945', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp945(std::map<char *, unsigned long long>::iterator v);`),
        unions: parseUnion(`void r8sp945(std::map<char *, unsigned long long>::iterator v);`),
        structs: parseStruct(`void r8sp945(std::map<char *, unsigned long long>::iterator v);`),
        classes: parseClass(`void r8sp945(std::map<char *, unsigned long long>::iterator v);`),
        funcs: parseFunction(`void r8sp945(std::map<char *, unsigned long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0945 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0945 执行异常: ${String(err)}`);
    }
  });
});
