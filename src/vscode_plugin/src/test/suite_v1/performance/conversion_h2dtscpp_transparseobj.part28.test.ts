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
  * @tc.number h2dtscpp_tpo_0946
  * @tc.name h2dtscpp_tpo_0946
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<std::string, unsigned short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0946', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp946(std::map<std::string, unsigned short>::iterator v);`),
        unions: parseUnion(`void r8sp946(std::map<std::string, unsigned short>::iterator v);`),
        structs: parseStruct(`void r8sp946(std::map<std::string, unsigned short>::iterator v);`),
        classes: parseClass(`void r8sp946(std::map<std::string, unsigned short>::iterator v);`),
        funcs: parseFunction(`void r8sp946(std::map<std::string, unsigned short>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0946 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0946 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0947
  * @tc.name h2dtscpp_tpo_0947
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<int *, std::string>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0947', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp947(std::map<int *, std::string>::iterator v);`),
        unions: parseUnion(`void r8sp947(std::map<int *, std::string>::iterator v);`),
        structs: parseStruct(`void r8sp947(std::map<int *, std::string>::iterator v);`),
        classes: parseClass(`void r8sp947(std::map<int *, std::string>::iterator v);`),
        funcs: parseFunction(`void r8sp947(std::map<int *, std::string>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0947 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0947 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0948
  * @tc.name h2dtscpp_tpo_0948
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<double, char *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0948', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp948(std::map<double, char *>::iterator v);`),
        unions: parseUnion(`void r8sp948(std::map<double, char *>::iterator v);`),
        structs: parseStruct(`void r8sp948(std::map<double, char *>::iterator v);`),
        classes: parseClass(`void r8sp948(std::map<double, char *>::iterator v);`),
        funcs: parseFunction(`void r8sp948(std::map<double, char *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0948 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0948 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0949
  * @tc.name h2dtscpp_tpo_0949
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::map<int *, char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0949', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp949(std::map<int *, char>::iterator v);`),
        unions: parseUnion(`void r8sp949(std::map<int *, char>::iterator v);`),
        structs: parseStruct(`void r8sp949(std::map<int *, char>::iterator v);`),
        classes: parseClass(`void r8sp949(std::map<int *, char>::iterator v);`),
        funcs: parseFunction(`void r8sp949(std::map<int *, char>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0949 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0949 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0950
  * @tc.name h2dtscpp_tpo_0950
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<std::string, int>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0950', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp950(std::unordered_map<std::string, int> v);`),
        unions: parseUnion(`void r8sp950(std::unordered_map<std::string, int> v);`),
        structs: parseStruct(`void r8sp950(std::unordered_map<std::string, int> v);`),
        classes: parseClass(`void r8sp950(std::unordered_map<std::string, int> v);`),
        funcs: parseFunction(`void r8sp950(std::unordered_map<std::string, int> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0950 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0950 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0951
  * @tc.name h2dtscpp_tpo_0951
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<charb *, size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0951', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp951(std::unordered_map<charb *, size_t> v);`),
        unions: parseUnion(`void r8sp951(std::unordered_map<charb *, size_t> v);`),
        structs: parseStruct(`void r8sp951(std::unordered_map<charb *, size_t> v);`),
        classes: parseClass(`void r8sp951(std::unordered_map<charb *, size_t> v);`),
        funcs: parseFunction(`void r8sp951(std::unordered_map<charb *, size_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0951 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0951 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0952
  * @tc.name h2dtscpp_tpo_0952
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<std::string, long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0952', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp952(std::unordered_map<std::string, long long> v);`),
        unions: parseUnion(`void r8sp952(std::unordered_map<std::string, long long> v);`),
        structs: parseStruct(`void r8sp952(std::unordered_map<std::string, long long> v);`),
        classes: parseClass(`void r8sp952(std::unordered_map<std::string, long long> v);`),
        funcs: parseFunction(`void r8sp952(std::unordered_map<std::string, long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0952 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0952 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0953
  * @tc.name h2dtscpp_tpo_0953
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<char *, int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0953', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp953(std::unordered_map<char *, int *> v);`),
        unions: parseUnion(`void r8sp953(std::unordered_map<char *, int *> v);`),
        structs: parseStruct(`void r8sp953(std::unordered_map<char *, int *> v);`),
        classes: parseClass(`void r8sp953(std::unordered_map<char *, int *> v);`),
        funcs: parseFunction(`void r8sp953(std::unordered_map<char *, int *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0953 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0953 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0954
  * @tc.name h2dtscpp_tpo_0954
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<char *, unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0954', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp954(std::unordered_map<char *, unsigned long long> v);`),
        unions: parseUnion(`void r8sp954(std::unordered_map<char *, unsigned long long> v);`),
        structs: parseStruct(`void r8sp954(std::unordered_map<char *, unsigned long long> v);`),
        classes: parseClass(`void r8sp954(std::unordered_map<char *, unsigned long long> v);`),
        funcs: parseFunction(`void r8sp954(std::unordered_map<char *, unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0954 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0954 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0955
  * @tc.name h2dtscpp_tpo_0955
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<std::string, unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0955', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp955(std::unordered_map<std::string, unsigned short> v);`),
        unions: parseUnion(`void r8sp955(std::unordered_map<std::string, unsigned short> v);`),
        structs: parseStruct(`void r8sp955(std::unordered_map<std::string, unsigned short> v);`),
        classes: parseClass(`void r8sp955(std::unordered_map<std::string, unsigned short> v);`),
        funcs: parseFunction(`void r8sp955(std::unordered_map<std::string, unsigned short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0955 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0955 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0956
  * @tc.name h2dtscpp_tpo_0956
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<int *, std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0956', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp956(std::unordered_map<int *, std::string> v);`),
        unions: parseUnion(`void r8sp956(std::unordered_map<int *, std::string> v);`),
        structs: parseStruct(`void r8sp956(std::unordered_map<int *, std::string> v);`),
        classes: parseClass(`void r8sp956(std::unordered_map<int *, std::string> v);`),
        funcs: parseFunction(`void r8sp956(std::unordered_map<int *, std::string> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0956 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0956 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0957
  * @tc.name h2dtscpp_tpo_0957
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<double, char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0957', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp957(std::unordered_map<double, char *> v);`),
        unions: parseUnion(`void r8sp957(std::unordered_map<double, char *> v);`),
        structs: parseStruct(`void r8sp957(std::unordered_map<double, char *> v);`),
        classes: parseClass(`void r8sp957(std::unordered_map<double, char *> v);`),
        funcs: parseFunction(`void r8sp957(std::unordered_map<double, char *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0957 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0957 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0958
  * @tc.name h2dtscpp_tpo_0958
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<int *, char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0958', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp958(std::unordered_map<int *, char> v);`),
        unions: parseUnion(`void r8sp958(std::unordered_map<int *, char> v);`),
        structs: parseStruct(`void r8sp958(std::unordered_map<int *, char> v);`),
        classes: parseClass(`void r8sp958(std::unordered_map<int *, char> v);`),
        funcs: parseFunction(`void r8sp958(std::unordered_map<int *, char> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0958 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0958 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0959
  * @tc.name h2dtscpp_tpo_0959
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<std::string, int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0959', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp959(std::unordered_map<std::string, int>::iterator v);`),
        unions: parseUnion(`void r8sp959(std::unordered_map<std::string, int>::iterator v);`),
        structs: parseStruct(`void r8sp959(std::unordered_map<std::string, int>::iterator v);`),
        classes: parseClass(`void r8sp959(std::unordered_map<std::string, int>::iterator v);`),
        funcs: parseFunction(`void r8sp959(std::unordered_map<std::string, int>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0959 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0959 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0960
  * @tc.name h2dtscpp_tpo_0960
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<charb *, size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0960', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp960(std::unordered_map<charb *, size_t>::iterator v);`),
        unions: parseUnion(`void r8sp960(std::unordered_map<charb *, size_t>::iterator v);`),
        structs: parseStruct(`void r8sp960(std::unordered_map<charb *, size_t>::iterator v);`),
        classes: parseClass(`void r8sp960(std::unordered_map<charb *, size_t>::iterator v);`),
        funcs: parseFunction(`void r8sp960(std::unordered_map<charb *, size_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0960 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0960 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0961
  * @tc.name h2dtscpp_tpo_0961
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<std::string, long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0961', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp961(std::unordered_map<std::string, long long>::iterator v);`),
        unions: parseUnion(`void r8sp961(std::unordered_map<std::string, long long>::iterator v);`),
        structs: parseStruct(`void r8sp961(std::unordered_map<std::string, long long>::iterator v);`),
        classes: parseClass(`void r8sp961(std::unordered_map<std::string, long long>::iterator v);`),
        funcs: parseFunction(`void r8sp961(std::unordered_map<std::string, long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0961 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0961 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0962
  * @tc.name h2dtscpp_tpo_0962
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<char *, int *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0962', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp962(std::unordered_map<char *, int *>::iterator v);`),
        unions: parseUnion(`void r8sp962(std::unordered_map<char *, int *>::iterator v);`),
        structs: parseStruct(`void r8sp962(std::unordered_map<char *, int *>::iterator v);`),
        classes: parseClass(`void r8sp962(std::unordered_map<char *, int *>::iterator v);`),
        funcs: parseFunction(`void r8sp962(std::unordered_map<char *, int *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0962 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0962 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0963
  * @tc.name h2dtscpp_tpo_0963
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<char *, unsigned long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0963', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp963(std::unordered_map<char *, unsigned long long>::iterator v);`),
        unions: parseUnion(`void r8sp963(std::unordered_map<char *, unsigned long long>::iterator v);`),
        structs: parseStruct(`void r8sp963(std::unordered_map<char *, unsigned long long>::iterator v);`),
        classes: parseClass(`void r8sp963(std::unordered_map<char *, unsigned long long>::iterator v);`),
        funcs: parseFunction(`void r8sp963(std::unordered_map<char *, unsigned long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0963 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0963 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0964
  * @tc.name h2dtscpp_tpo_0964
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<std::string, unsigned short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0964', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp964(std::unordered_map<std::string, unsigned short>::iterator v);`),
        unions: parseUnion(`void r8sp964(std::unordered_map<std::string, unsigned short>::iterator v);`),
        structs: parseStruct(`void r8sp964(std::unordered_map<std::string, unsigned short>::iterator v);`),
        classes: parseClass(`void r8sp964(std::unordered_map<std::string, unsigned short>::iterator v);`),
        funcs: parseFunction(`void r8sp964(std::unordered_map<std::string, unsigned short>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0964 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0964 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0965
  * @tc.name h2dtscpp_tpo_0965
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<int *, std::string>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0965', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp965(std::unordered_map<int *, std::string>::iterator v);`),
        unions: parseUnion(`void r8sp965(std::unordered_map<int *, std::string>::iterator v);`),
        structs: parseStruct(`void r8sp965(std::unordered_map<int *, std::string>::iterator v);`),
        classes: parseClass(`void r8sp965(std::unordered_map<int *, std::string>::iterator v);`),
        funcs: parseFunction(`void r8sp965(std::unordered_map<int *, std::string>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0965 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0965 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0966
  * @tc.name h2dtscpp_tpo_0966
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<double, char *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0966', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp966(std::unordered_map<double, char *>::iterator v);`),
        unions: parseUnion(`void r8sp966(std::unordered_map<double, char *>::iterator v);`),
        structs: parseStruct(`void r8sp966(std::unordered_map<double, char *>::iterator v);`),
        classes: parseClass(`void r8sp966(std::unordered_map<double, char *>::iterator v);`),
        funcs: parseFunction(`void r8sp966(std::unordered_map<double, char *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0966 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0966 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0967
  * @tc.name h2dtscpp_tpo_0967
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_map<int *, char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0967', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp967(std::unordered_map<int *, char>::iterator v);`),
        unions: parseUnion(`void r8sp967(std::unordered_map<int *, char>::iterator v);`),
        structs: parseStruct(`void r8sp967(std::unordered_map<int *, char>::iterator v);`),
        classes: parseClass(`void r8sp967(std::unordered_map<int *, char>::iterator v);`),
        funcs: parseFunction(`void r8sp967(std::unordered_map<int *, char>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0967 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0967 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0968
  * @tc.name h2dtscpp_tpo_0968
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<std::string, int>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0968', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp968(std::multimap<std::string, int> v);`),
        unions: parseUnion(`void r8sp968(std::multimap<std::string, int> v);`),
        structs: parseStruct(`void r8sp968(std::multimap<std::string, int> v);`),
        classes: parseClass(`void r8sp968(std::multimap<std::string, int> v);`),
        funcs: parseFunction(`void r8sp968(std::multimap<std::string, int> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0968 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0968 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0969
  * @tc.name h2dtscpp_tpo_0969
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<charb *, size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0969', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp969(std::multimap<charb *, size_t> v);`),
        unions: parseUnion(`void r8sp969(std::multimap<charb *, size_t> v);`),
        structs: parseStruct(`void r8sp969(std::multimap<charb *, size_t> v);`),
        classes: parseClass(`void r8sp969(std::multimap<charb *, size_t> v);`),
        funcs: parseFunction(`void r8sp969(std::multimap<charb *, size_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0969 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0969 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0970
  * @tc.name h2dtscpp_tpo_0970
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<std::string, long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0970', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp970(std::multimap<std::string, long long> v);`),
        unions: parseUnion(`void r8sp970(std::multimap<std::string, long long> v);`),
        structs: parseStruct(`void r8sp970(std::multimap<std::string, long long> v);`),
        classes: parseClass(`void r8sp970(std::multimap<std::string, long long> v);`),
        funcs: parseFunction(`void r8sp970(std::multimap<std::string, long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0970 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0970 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0971
  * @tc.name h2dtscpp_tpo_0971
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char *, int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0971', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp971(std::multimap<char *, int *> v);`),
        unions: parseUnion(`void r8sp971(std::multimap<char *, int *> v);`),
        structs: parseStruct(`void r8sp971(std::multimap<char *, int *> v);`),
        classes: parseClass(`void r8sp971(std::multimap<char *, int *> v);`),
        funcs: parseFunction(`void r8sp971(std::multimap<char *, int *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0971 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0971 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0972
  * @tc.name h2dtscpp_tpo_0972
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char *, unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0972', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp972(std::multimap<char *, unsigned long long> v);`),
        unions: parseUnion(`void r8sp972(std::multimap<char *, unsigned long long> v);`),
        structs: parseStruct(`void r8sp972(std::multimap<char *, unsigned long long> v);`),
        classes: parseClass(`void r8sp972(std::multimap<char *, unsigned long long> v);`),
        funcs: parseFunction(`void r8sp972(std::multimap<char *, unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0972 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0972 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0973
  * @tc.name h2dtscpp_tpo_0973
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<std::string, unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0973', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp973(std::multimap<std::string, unsigned short> v);`),
        unions: parseUnion(`void r8sp973(std::multimap<std::string, unsigned short> v);`),
        structs: parseStruct(`void r8sp973(std::multimap<std::string, unsigned short> v);`),
        classes: parseClass(`void r8sp973(std::multimap<std::string, unsigned short> v);`),
        funcs: parseFunction(`void r8sp973(std::multimap<std::string, unsigned short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0973 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0973 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0974
  * @tc.name h2dtscpp_tpo_0974
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<int *, std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0974', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp974(std::multimap<int *, std::string> v);`),
        unions: parseUnion(`void r8sp974(std::multimap<int *, std::string> v);`),
        structs: parseStruct(`void r8sp974(std::multimap<int *, std::string> v);`),
        classes: parseClass(`void r8sp974(std::multimap<int *, std::string> v);`),
        funcs: parseFunction(`void r8sp974(std::multimap<int *, std::string> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0974 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0974 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0975
  * @tc.name h2dtscpp_tpo_0975
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<double, char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0975', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp975(std::multimap<double, char *> v);`),
        unions: parseUnion(`void r8sp975(std::multimap<double, char *> v);`),
        structs: parseStruct(`void r8sp975(std::multimap<double, char *> v);`),
        classes: parseClass(`void r8sp975(std::multimap<double, char *> v);`),
        funcs: parseFunction(`void r8sp975(std::multimap<double, char *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0975 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0975 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0976
  * @tc.name h2dtscpp_tpo_0976
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<int *, char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0976', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp976(std::multimap<int *, char> v);`),
        unions: parseUnion(`void r8sp976(std::multimap<int *, char> v);`),
        structs: parseStruct(`void r8sp976(std::multimap<int *, char> v);`),
        classes: parseClass(`void r8sp976(std::multimap<int *, char> v);`),
        funcs: parseFunction(`void r8sp976(std::multimap<int *, char> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0976 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0976 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0977
  * @tc.name h2dtscpp_tpo_0977
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<std::string, int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0977', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp977(std::multimap<std::string, int>::iterator v);`),
        unions: parseUnion(`void r8sp977(std::multimap<std::string, int>::iterator v);`),
        structs: parseStruct(`void r8sp977(std::multimap<std::string, int>::iterator v);`),
        classes: parseClass(`void r8sp977(std::multimap<std::string, int>::iterator v);`),
        funcs: parseFunction(`void r8sp977(std::multimap<std::string, int>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0977 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0977 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0978
  * @tc.name h2dtscpp_tpo_0978
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<charb *, size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0978', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp978(std::multimap<charb *, size_t>::iterator v);`),
        unions: parseUnion(`void r8sp978(std::multimap<charb *, size_t>::iterator v);`),
        structs: parseStruct(`void r8sp978(std::multimap<charb *, size_t>::iterator v);`),
        classes: parseClass(`void r8sp978(std::multimap<charb *, size_t>::iterator v);`),
        funcs: parseFunction(`void r8sp978(std::multimap<charb *, size_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0978 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0978 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0979
  * @tc.name h2dtscpp_tpo_0979
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<std::string, long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0979', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp979(std::multimap<std::string, long long>::iterator v);`),
        unions: parseUnion(`void r8sp979(std::multimap<std::string, long long>::iterator v);`),
        structs: parseStruct(`void r8sp979(std::multimap<std::string, long long>::iterator v);`),
        classes: parseClass(`void r8sp979(std::multimap<std::string, long long>::iterator v);`),
        funcs: parseFunction(`void r8sp979(std::multimap<std::string, long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0979 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0979 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0980
  * @tc.name h2dtscpp_tpo_0980
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char *, int *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0980', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp980(std::multimap<char *, int *>::iterator v);`),
        unions: parseUnion(`void r8sp980(std::multimap<char *, int *>::iterator v);`),
        structs: parseStruct(`void r8sp980(std::multimap<char *, int *>::iterator v);`),
        classes: parseClass(`void r8sp980(std::multimap<char *, int *>::iterator v);`),
        funcs: parseFunction(`void r8sp980(std::multimap<char *, int *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0980 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0980 执行异常: ${String(err)}`);
    }
  });
});
