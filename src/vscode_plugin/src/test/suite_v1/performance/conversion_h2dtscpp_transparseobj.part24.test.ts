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
  * @tc.number h2dtscpp_tpo_0807
  * @tc.name h2dtscpp_tpo_0807
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::vector<long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0807', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp807(std::vector<long long> v);`),
        unions: parseUnion(`void r8sp807(std::vector<long long> v);`),
        structs: parseStruct(`void r8sp807(std::vector<long long> v);`),
        classes: parseClass(`void r8sp807(std::vector<long long> v);`),
        funcs: parseFunction(`void r8sp807(std::vector<long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0807 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0807 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0808
  * @tc.name h2dtscpp_tpo_0808
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::vector<unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0808', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp808(std::vector<unsigned short> v);`),
        unions: parseUnion(`void r8sp808(std::vector<unsigned short> v);`),
        structs: parseStruct(`void r8sp808(std::vector<unsigned short> v);`),
        classes: parseClass(`void r8sp808(std::vector<unsigned short> v);`),
        funcs: parseFunction(`void r8sp808(std::vector<unsigned short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0808 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0808 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0809
  * @tc.name h2dtscpp_tpo_0809
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::vector<unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0809', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp809(std::vector<unsigned long> v);`),
        unions: parseUnion(`void r8sp809(std::vector<unsigned long> v);`),
        structs: parseStruct(`void r8sp809(std::vector<unsigned long> v);`),
        classes: parseClass(`void r8sp809(std::vector<unsigned long> v);`),
        funcs: parseFunction(`void r8sp809(std::vector<unsigned long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0809 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0809 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0810
  * @tc.name h2dtscpp_tpo_0810
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::vector<unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0810', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp810(std::vector<unsigned long long> v);`),
        unions: parseUnion(`void r8sp810(std::vector<unsigned long long> v);`),
        structs: parseStruct(`void r8sp810(std::vector<unsigned long long> v);`),
        classes: parseClass(`void r8sp810(std::vector<unsigned long long> v);`),
        funcs: parseFunction(`void r8sp810(std::vector<unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0810 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0810 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0811
  * @tc.name h2dtscpp_tpo_0811
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `int *` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0811', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp811(int * v);`),
        unions: parseUnion(`void r8sp811(int * v);`),
        structs: parseStruct(`void r8sp811(int * v);`),
        classes: parseClass(`void r8sp811(int * v);`),
        funcs: parseFunction(`void r8sp811(int * v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0811 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0811 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0812
  * @tc.name h2dtscpp_tpo_0812
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::vector<int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0812', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp812(std::vector<int *> v);`),
        unions: parseUnion(`void r8sp812(std::vector<int *> v);`),
        structs: parseStruct(`void r8sp812(std::vector<int *> v);`),
        classes: parseClass(`void r8sp812(std::vector<int *> v);`),
        funcs: parseFunction(`void r8sp812(std::vector<int *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0812 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0812 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0813
  * @tc.name h2dtscpp_tpo_0813
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::vector<std::string>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0813', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp813(std::vector<std::string>::iterator v);`),
        unions: parseUnion(`void r8sp813(std::vector<std::string>::iterator v);`),
        structs: parseStruct(`void r8sp813(std::vector<std::string>::iterator v);`),
        classes: parseClass(`void r8sp813(std::vector<std::string>::iterator v);`),
        funcs: parseFunction(`void r8sp813(std::vector<std::string>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0813 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0813 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0814
  * @tc.name h2dtscpp_tpo_0814
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::vector<char *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0814', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp814(std::vector<char *>::iterator v);`),
        unions: parseUnion(`void r8sp814(std::vector<char *>::iterator v);`),
        structs: parseStruct(`void r8sp814(std::vector<char *>::iterator v);`),
        classes: parseClass(`void r8sp814(std::vector<char *>::iterator v);`),
        funcs: parseFunction(`void r8sp814(std::vector<char *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0814 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0814 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0815
  * @tc.name h2dtscpp_tpo_0815
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::vector<long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0815', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp815(std::vector<long long>::iterator v);`),
        unions: parseUnion(`void r8sp815(std::vector<long long>::iterator v);`),
        structs: parseStruct(`void r8sp815(std::vector<long long>::iterator v);`),
        classes: parseClass(`void r8sp815(std::vector<long long>::iterator v);`),
        funcs: parseFunction(`void r8sp815(std::vector<long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0815 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0815 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0816
  * @tc.name h2dtscpp_tpo_0816
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::vector<unsigned short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0816', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp816(std::vector<unsigned short>::iterator v);`),
        unions: parseUnion(`void r8sp816(std::vector<unsigned short>::iterator v);`),
        structs: parseStruct(`void r8sp816(std::vector<unsigned short>::iterator v);`),
        classes: parseClass(`void r8sp816(std::vector<unsigned short>::iterator v);`),
        funcs: parseFunction(`void r8sp816(std::vector<unsigned short>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0816 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0816 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0817
  * @tc.name h2dtscpp_tpo_0817
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::vector<unsigned long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0817', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp817(std::vector<unsigned long>::iterator v);`),
        unions: parseUnion(`void r8sp817(std::vector<unsigned long>::iterator v);`),
        structs: parseStruct(`void r8sp817(std::vector<unsigned long>::iterator v);`),
        classes: parseClass(`void r8sp817(std::vector<unsigned long>::iterator v);`),
        funcs: parseFunction(`void r8sp817(std::vector<unsigned long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0817 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0817 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0818
  * @tc.name h2dtscpp_tpo_0818
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::vector<unsigned long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0818', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp818(std::vector<unsigned long long>::iterator v);`),
        unions: parseUnion(`void r8sp818(std::vector<unsigned long long>::iterator v);`),
        structs: parseStruct(`void r8sp818(std::vector<unsigned long long>::iterator v);`),
        classes: parseClass(`void r8sp818(std::vector<unsigned long long>::iterator v);`),
        funcs: parseFunction(`void r8sp818(std::vector<unsigned long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0818 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0818 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0819
  * @tc.name h2dtscpp_tpo_0819
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::vector<int *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0819', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp819(std::vector<int *>::iterator v);`),
        unions: parseUnion(`void r8sp819(std::vector<int *>::iterator v);`),
        structs: parseStruct(`void r8sp819(std::vector<int *>::iterator v);`),
        classes: parseClass(`void r8sp819(std::vector<int *>::iterator v);`),
        funcs: parseFunction(`void r8sp819(std::vector<int *>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0819 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0819 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0820
  * @tc.name h2dtscpp_tpo_0820
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::array<std::string, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0820', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp820(std::array<std::string, 10> v);`),
        unions: parseUnion(`void r8sp820(std::array<std::string, 10> v);`),
        structs: parseStruct(`void r8sp820(std::array<std::string, 10> v);`),
        classes: parseClass(`void r8sp820(std::array<std::string, 10> v);`),
        funcs: parseFunction(`void r8sp820(std::array<std::string, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0820 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0820 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0821
  * @tc.name h2dtscpp_tpo_0821
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::array<char *, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0821', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp821(std::array<char *, 10> v);`),
        unions: parseUnion(`void r8sp821(std::array<char *, 10> v);`),
        structs: parseStruct(`void r8sp821(std::array<char *, 10> v);`),
        classes: parseClass(`void r8sp821(std::array<char *, 10> v);`),
        funcs: parseFunction(`void r8sp821(std::array<char *, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0821 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0821 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0822
  * @tc.name h2dtscpp_tpo_0822
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::array<long long, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0822', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp822(std::array<long long, 10> v);`),
        unions: parseUnion(`void r8sp822(std::array<long long, 10> v);`),
        structs: parseStruct(`void r8sp822(std::array<long long, 10> v);`),
        classes: parseClass(`void r8sp822(std::array<long long, 10> v);`),
        funcs: parseFunction(`void r8sp822(std::array<long long, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0822 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0822 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0823
  * @tc.name h2dtscpp_tpo_0823
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::array<unsigned short, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0823', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp823(std::array<unsigned short, 10> v);`),
        unions: parseUnion(`void r8sp823(std::array<unsigned short, 10> v);`),
        structs: parseStruct(`void r8sp823(std::array<unsigned short, 10> v);`),
        classes: parseClass(`void r8sp823(std::array<unsigned short, 10> v);`),
        funcs: parseFunction(`void r8sp823(std::array<unsigned short, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0823 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0823 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0824
  * @tc.name h2dtscpp_tpo_0824
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::array<unsigned long, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0824', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp824(std::array<unsigned long, 10> v);`),
        unions: parseUnion(`void r8sp824(std::array<unsigned long, 10> v);`),
        structs: parseStruct(`void r8sp824(std::array<unsigned long, 10> v);`),
        classes: parseClass(`void r8sp824(std::array<unsigned long, 10> v);`),
        funcs: parseFunction(`void r8sp824(std::array<unsigned long, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0824 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0824 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0825
  * @tc.name h2dtscpp_tpo_0825
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::array<unsigned long long, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0825', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp825(std::array<unsigned long long, 10> v);`),
        unions: parseUnion(`void r8sp825(std::array<unsigned long long, 10> v);`),
        structs: parseStruct(`void r8sp825(std::array<unsigned long long, 10> v);`),
        classes: parseClass(`void r8sp825(std::array<unsigned long long, 10> v);`),
        funcs: parseFunction(`void r8sp825(std::array<unsigned long long, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0825 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0825 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0826
  * @tc.name h2dtscpp_tpo_0826
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::array<int *, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0826', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp826(std::array<int *, 10> v);`),
        unions: parseUnion(`void r8sp826(std::array<int *, 10> v);`),
        structs: parseStruct(`void r8sp826(std::array<int *, 10> v);`),
        classes: parseClass(`void r8sp826(std::array<int *, 10> v);`),
        funcs: parseFunction(`void r8sp826(std::array<int *, 10> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0826 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0826 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0827
  * @tc.name h2dtscpp_tpo_0827
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::array<std::string, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0827', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp827(std::array<std::string, 10>::iterator v);`),
        unions: parseUnion(`void r8sp827(std::array<std::string, 10>::iterator v);`),
        structs: parseStruct(`void r8sp827(std::array<std::string, 10>::iterator v);`),
        classes: parseClass(`void r8sp827(std::array<std::string, 10>::iterator v);`),
        funcs: parseFunction(`void r8sp827(std::array<std::string, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0827 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0827 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0828
  * @tc.name h2dtscpp_tpo_0828
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::array<char *, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0828', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp828(std::array<char *, 10>::iterator v);`),
        unions: parseUnion(`void r8sp828(std::array<char *, 10>::iterator v);`),
        structs: parseStruct(`void r8sp828(std::array<char *, 10>::iterator v);`),
        classes: parseClass(`void r8sp828(std::array<char *, 10>::iterator v);`),
        funcs: parseFunction(`void r8sp828(std::array<char *, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0828 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0828 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0829
  * @tc.name h2dtscpp_tpo_0829
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::array<long long, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0829', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp829(std::array<long long, 10>::iterator v);`),
        unions: parseUnion(`void r8sp829(std::array<long long, 10>::iterator v);`),
        structs: parseStruct(`void r8sp829(std::array<long long, 10>::iterator v);`),
        classes: parseClass(`void r8sp829(std::array<long long, 10>::iterator v);`),
        funcs: parseFunction(`void r8sp829(std::array<long long, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0829 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0829 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0830
  * @tc.name h2dtscpp_tpo_0830
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::array<unsigned short, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0830', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp830(std::array<unsigned short, 10>::iterator v);`),
        unions: parseUnion(`void r8sp830(std::array<unsigned short, 10>::iterator v);`),
        structs: parseStruct(`void r8sp830(std::array<unsigned short, 10>::iterator v);`),
        classes: parseClass(`void r8sp830(std::array<unsigned short, 10>::iterator v);`),
        funcs: parseFunction(`void r8sp830(std::array<unsigned short, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0830 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0830 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0831
  * @tc.name h2dtscpp_tpo_0831
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::array<unsigned long, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0831', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp831(std::array<unsigned long, 10>::iterator v);`),
        unions: parseUnion(`void r8sp831(std::array<unsigned long, 10>::iterator v);`),
        structs: parseStruct(`void r8sp831(std::array<unsigned long, 10>::iterator v);`),
        classes: parseClass(`void r8sp831(std::array<unsigned long, 10>::iterator v);`),
        funcs: parseFunction(`void r8sp831(std::array<unsigned long, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0831 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0831 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0832
  * @tc.name h2dtscpp_tpo_0832
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::array<unsigned long long, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0832', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp832(std::array<unsigned long long, 10>::iterator v);`),
        unions: parseUnion(`void r8sp832(std::array<unsigned long long, 10>::iterator v);`),
        structs: parseStruct(`void r8sp832(std::array<unsigned long long, 10>::iterator v);`),
        classes: parseClass(`void r8sp832(std::array<unsigned long long, 10>::iterator v);`),
        funcs: parseFunction(`void r8sp832(std::array<unsigned long long, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0832 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0832 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0833
  * @tc.name h2dtscpp_tpo_0833
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::array<int *, 10>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0833', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp833(std::array<int *, 10>::iterator v);`),
        unions: parseUnion(`void r8sp833(std::array<int *, 10>::iterator v);`),
        structs: parseStruct(`void r8sp833(std::array<int *, 10>::iterator v);`),
        classes: parseClass(`void r8sp833(std::array<int *, 10>::iterator v);`),
        funcs: parseFunction(`void r8sp833(std::array<int *, 10>::iterator v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0833 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0833 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0835
  * @tc.name h2dtscpp_tpo_0835
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::deque<char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0835', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp835(std::deque<char *> v);`),
        unions: parseUnion(`void r8sp835(std::deque<char *> v);`),
        structs: parseStruct(`void r8sp835(std::deque<char *> v);`),
        classes: parseClass(`void r8sp835(std::deque<char *> v);`),
        funcs: parseFunction(`void r8sp835(std::deque<char *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0835 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0835 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0836
  * @tc.name h2dtscpp_tpo_0836
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::deque<long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0836', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp836(std::deque<long long> v);`),
        unions: parseUnion(`void r8sp836(std::deque<long long> v);`),
        structs: parseStruct(`void r8sp836(std::deque<long long> v);`),
        classes: parseClass(`void r8sp836(std::deque<long long> v);`),
        funcs: parseFunction(`void r8sp836(std::deque<long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0836 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0836 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0837
  * @tc.name h2dtscpp_tpo_0837
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::deque<unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0837', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp837(std::deque<unsigned short> v);`),
        unions: parseUnion(`void r8sp837(std::deque<unsigned short> v);`),
        structs: parseStruct(`void r8sp837(std::deque<unsigned short> v);`),
        classes: parseClass(`void r8sp837(std::deque<unsigned short> v);`),
        funcs: parseFunction(`void r8sp837(std::deque<unsigned short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0837 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0837 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0838
  * @tc.name h2dtscpp_tpo_0838
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::deque<unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0838', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp838(std::deque<unsigned long> v);`),
        unions: parseUnion(`void r8sp838(std::deque<unsigned long> v);`),
        structs: parseStruct(`void r8sp838(std::deque<unsigned long> v);`),
        classes: parseClass(`void r8sp838(std::deque<unsigned long> v);`),
        funcs: parseFunction(`void r8sp838(std::deque<unsigned long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0838 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0838 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0839
  * @tc.name h2dtscpp_tpo_0839
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::deque<unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0839', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp839(std::deque<unsigned long long> v);`),
        unions: parseUnion(`void r8sp839(std::deque<unsigned long long> v);`),
        structs: parseStruct(`void r8sp839(std::deque<unsigned long long> v);`),
        classes: parseClass(`void r8sp839(std::deque<unsigned long long> v);`),
        funcs: parseFunction(`void r8sp839(std::deque<unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0839 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0839 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0840
  * @tc.name h2dtscpp_tpo_0840
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::deque<int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0840', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp840(std::deque<int *> v);`),
        unions: parseUnion(`void r8sp840(std::deque<int *> v);`),
        structs: parseStruct(`void r8sp840(std::deque<int *> v);`),
        classes: parseClass(`void r8sp840(std::deque<int *> v);`),
        funcs: parseFunction(`void r8sp840(std::deque<int *> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0840 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0840 执行异常: ${String(err)}`);
    }
  });
});
