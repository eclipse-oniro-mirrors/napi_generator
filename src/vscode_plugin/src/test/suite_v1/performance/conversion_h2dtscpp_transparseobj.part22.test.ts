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
  * @tc.number h2dtscpp_tpo_0736
  * @tc.name h2dtscpp_tpo_0736
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::function<bool(int32_t)>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0736', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp736(std::function<bool(int32_t)> v);`),
        unions: parseUnion(`void r8sp736(std::function<bool(int32_t)> v);`),
        structs: parseStruct(`void r8sp736(std::function<bool(int32_t)> v);`),
        classes: parseClass(`void r8sp736(std::function<bool(int32_t)> v);`),
        funcs: parseFunction(`void r8sp736(std::function<bool(int32_t)> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0736 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0736 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0738
  * @tc.name h2dtscpp_tpo_0738
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0738', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp738(std::unique_ptr<size_t> v);`),
        unions: parseUnion(`void r8sp738(std::unique_ptr<size_t> v);`),
        structs: parseStruct(`void r8sp738(std::unique_ptr<size_t> v);`),
        classes: parseClass(`void r8sp738(std::unique_ptr<size_t> v);`),
        funcs: parseFunction(`void r8sp738(std::unique_ptr<size_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0738 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0738 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0739
  * @tc.name h2dtscpp_tpo_0739
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0739', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp739(std::unique_ptr<double> v);`),
        unions: parseUnion(`void r8sp739(std::unique_ptr<double> v);`),
        structs: parseStruct(`void r8sp739(std::unique_ptr<double> v);`),
        classes: parseClass(`void r8sp739(std::unique_ptr<double> v);`),
        funcs: parseFunction(`void r8sp739(std::unique_ptr<double> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0739 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0739 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0740
  * @tc.name h2dtscpp_tpo_0740
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<float>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0740', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp740(std::unique_ptr<float> v);`),
        unions: parseUnion(`void r8sp740(std::unique_ptr<float> v);`),
        structs: parseStruct(`void r8sp740(std::unique_ptr<float> v);`),
        classes: parseClass(`void r8sp740(std::unique_ptr<float> v);`),
        funcs: parseFunction(`void r8sp740(std::unique_ptr<float> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0740 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0740 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0741
  * @tc.name h2dtscpp_tpo_0741
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0741', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp741(std::unique_ptr<long> v);`),
        unions: parseUnion(`void r8sp741(std::unique_ptr<long> v);`),
        structs: parseStruct(`void r8sp741(std::unique_ptr<long> v);`),
        classes: parseClass(`void r8sp741(std::unique_ptr<long> v);`),
        funcs: parseFunction(`void r8sp741(std::unique_ptr<long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0741 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0741 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0742
  * @tc.name h2dtscpp_tpo_0742
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0742', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp742(std::unique_ptr<short> v);`),
        unions: parseUnion(`void r8sp742(std::unique_ptr<short> v);`),
        structs: parseStruct(`void r8sp742(std::unique_ptr<short> v);`),
        classes: parseClass(`void r8sp742(std::unique_ptr<short> v);`),
        funcs: parseFunction(`void r8sp742(std::unique_ptr<short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0742 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0742 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0743
  * @tc.name h2dtscpp_tpo_0743
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<uint8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0743', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp743(std::unique_ptr<uint8_t> v);`),
        unions: parseUnion(`void r8sp743(std::unique_ptr<uint8_t> v);`),
        structs: parseStruct(`void r8sp743(std::unique_ptr<uint8_t> v);`),
        classes: parseClass(`void r8sp743(std::unique_ptr<uint8_t> v);`),
        funcs: parseFunction(`void r8sp743(std::unique_ptr<uint8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0743 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0743 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0744
  * @tc.name h2dtscpp_tpo_0744
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0744', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp744(std::unique_ptr<uint16_t> v);`),
        unions: parseUnion(`void r8sp744(std::unique_ptr<uint16_t> v);`),
        structs: parseStruct(`void r8sp744(std::unique_ptr<uint16_t> v);`),
        classes: parseClass(`void r8sp744(std::unique_ptr<uint16_t> v);`),
        funcs: parseFunction(`void r8sp744(std::unique_ptr<uint16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0744 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0744 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0745
  * @tc.name h2dtscpp_tpo_0745
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0745', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp745(std::unique_ptr<uint32_t> v);`),
        unions: parseUnion(`void r8sp745(std::unique_ptr<uint32_t> v);`),
        structs: parseStruct(`void r8sp745(std::unique_ptr<uint32_t> v);`),
        classes: parseClass(`void r8sp745(std::unique_ptr<uint32_t> v);`),
        funcs: parseFunction(`void r8sp745(std::unique_ptr<uint32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0745 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0745 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0746
  * @tc.name h2dtscpp_tpo_0746
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0746', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp746(std::unique_ptr<uint64_t> v);`),
        unions: parseUnion(`void r8sp746(std::unique_ptr<uint64_t> v);`),
        structs: parseStruct(`void r8sp746(std::unique_ptr<uint64_t> v);`),
        classes: parseClass(`void r8sp746(std::unique_ptr<uint64_t> v);`),
        funcs: parseFunction(`void r8sp746(std::unique_ptr<uint64_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0746 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0746 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0747
  * @tc.name h2dtscpp_tpo_0747
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0747', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp747(std::unique_ptr<int8_t> v);`),
        unions: parseUnion(`void r8sp747(std::unique_ptr<int8_t> v);`),
        structs: parseStruct(`void r8sp747(std::unique_ptr<int8_t> v);`),
        classes: parseClass(`void r8sp747(std::unique_ptr<int8_t> v);`),
        funcs: parseFunction(`void r8sp747(std::unique_ptr<int8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0747 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0747 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0748
  * @tc.name h2dtscpp_tpo_0748
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0748', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp748(std::unique_ptr<int16_t> v);`),
        unions: parseUnion(`void r8sp748(std::unique_ptr<int16_t> v);`),
        structs: parseStruct(`void r8sp748(std::unique_ptr<int16_t> v);`),
        classes: parseClass(`void r8sp748(std::unique_ptr<int16_t> v);`),
        funcs: parseFunction(`void r8sp748(std::unique_ptr<int16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0748 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0748 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0749
  * @tc.name h2dtscpp_tpo_0749
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0749', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp749(std::unique_ptr<int32_t> v);`),
        unions: parseUnion(`void r8sp749(std::unique_ptr<int32_t> v);`),
        structs: parseStruct(`void r8sp749(std::unique_ptr<int32_t> v);`),
        classes: parseClass(`void r8sp749(std::unique_ptr<int32_t> v);`),
        funcs: parseFunction(`void r8sp749(std::unique_ptr<int32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0749 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0749 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0750
  * @tc.name h2dtscpp_tpo_0750
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<int64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0750', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp750(std::unique_ptr<int64_t> v);`),
        unions: parseUnion(`void r8sp750(std::unique_ptr<int64_t> v);`),
        structs: parseStruct(`void r8sp750(std::unique_ptr<int64_t> v);`),
        classes: parseClass(`void r8sp750(std::unique_ptr<int64_t> v);`),
        funcs: parseFunction(`void r8sp750(std::unique_ptr<int64_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0750 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0750 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0751
  * @tc.name h2dtscpp_tpo_0751
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0751', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp751(std::unique_ptr<unsigned> v);`),
        unions: parseUnion(`void r8sp751(std::unique_ptr<unsigned> v);`),
        structs: parseStruct(`void r8sp751(std::unique_ptr<unsigned> v);`),
        classes: parseClass(`void r8sp751(std::unique_ptr<unsigned> v);`),
        funcs: parseFunction(`void r8sp751(std::unique_ptr<unsigned> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0751 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0751 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0752
  * @tc.name h2dtscpp_tpo_0752
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0752', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp752(std::unique_ptr<bool> v);`),
        unions: parseUnion(`void r8sp752(std::unique_ptr<bool> v);`),
        structs: parseStruct(`void r8sp752(std::unique_ptr<bool> v);`),
        classes: parseClass(`void r8sp752(std::unique_ptr<bool> v);`),
        funcs: parseFunction(`void r8sp752(std::unique_ptr<bool> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0752 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0752 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0754
  * @tc.name h2dtscpp_tpo_0754
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<wchar_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0754', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp754(std::unique_ptr<wchar_t> v);`),
        unions: parseUnion(`void r8sp754(std::unique_ptr<wchar_t> v);`),
        structs: parseStruct(`void r8sp754(std::unique_ptr<wchar_t> v);`),
        classes: parseClass(`void r8sp754(std::unique_ptr<wchar_t> v);`),
        funcs: parseFunction(`void r8sp754(std::unique_ptr<wchar_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0754 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0754 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0755
  * @tc.name h2dtscpp_tpo_0755
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<char8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0755', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp755(std::unique_ptr<char8_t> v);`),
        unions: parseUnion(`void r8sp755(std::unique_ptr<char8_t> v);`),
        structs: parseStruct(`void r8sp755(std::unique_ptr<char8_t> v);`),
        classes: parseClass(`void r8sp755(std::unique_ptr<char8_t> v);`),
        funcs: parseFunction(`void r8sp755(std::unique_ptr<char8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0755 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0755 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0756
  * @tc.name h2dtscpp_tpo_0756
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<char16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0756', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp756(std::unique_ptr<char16_t> v);`),
        unions: parseUnion(`void r8sp756(std::unique_ptr<char16_t> v);`),
        structs: parseStruct(`void r8sp756(std::unique_ptr<char16_t> v);`),
        classes: parseClass(`void r8sp756(std::unique_ptr<char16_t> v);`),
        funcs: parseFunction(`void r8sp756(std::unique_ptr<char16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0756 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0756 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0757
  * @tc.name h2dtscpp_tpo_0757
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unique_ptr<char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0757', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp757(std::unique_ptr<char32_t> v);`),
        unions: parseUnion(`void r8sp757(std::unique_ptr<char32_t> v);`),
        structs: parseStruct(`void r8sp757(std::unique_ptr<char32_t> v);`),
        classes: parseClass(`void r8sp757(std::unique_ptr<char32_t> v);`),
        funcs: parseFunction(`void r8sp757(std::unique_ptr<char32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0757 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0757 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0759
  * @tc.name h2dtscpp_tpo_0759
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0759', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp759(std::shared_ptr<size_t> v);`),
        unions: parseUnion(`void r8sp759(std::shared_ptr<size_t> v);`),
        structs: parseStruct(`void r8sp759(std::shared_ptr<size_t> v);`),
        classes: parseClass(`void r8sp759(std::shared_ptr<size_t> v);`),
        funcs: parseFunction(`void r8sp759(std::shared_ptr<size_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0759 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0759 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0761
  * @tc.name h2dtscpp_tpo_0761
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<float>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0761', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp761(std::shared_ptr<float> v);`),
        unions: parseUnion(`void r8sp761(std::shared_ptr<float> v);`),
        structs: parseStruct(`void r8sp761(std::shared_ptr<float> v);`),
        classes: parseClass(`void r8sp761(std::shared_ptr<float> v);`),
        funcs: parseFunction(`void r8sp761(std::shared_ptr<float> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0761 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0761 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0762
  * @tc.name h2dtscpp_tpo_0762
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0762', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp762(std::shared_ptr<long> v);`),
        unions: parseUnion(`void r8sp762(std::shared_ptr<long> v);`),
        structs: parseStruct(`void r8sp762(std::shared_ptr<long> v);`),
        classes: parseClass(`void r8sp762(std::shared_ptr<long> v);`),
        funcs: parseFunction(`void r8sp762(std::shared_ptr<long> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0762 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0762 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0763
  * @tc.name h2dtscpp_tpo_0763
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0763', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp763(std::shared_ptr<short> v);`),
        unions: parseUnion(`void r8sp763(std::shared_ptr<short> v);`),
        structs: parseStruct(`void r8sp763(std::shared_ptr<short> v);`),
        classes: parseClass(`void r8sp763(std::shared_ptr<short> v);`),
        funcs: parseFunction(`void r8sp763(std::shared_ptr<short> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0763 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0763 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0764
  * @tc.name h2dtscpp_tpo_0764
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<uint8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0764', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp764(std::shared_ptr<uint8_t> v);`),
        unions: parseUnion(`void r8sp764(std::shared_ptr<uint8_t> v);`),
        structs: parseStruct(`void r8sp764(std::shared_ptr<uint8_t> v);`),
        classes: parseClass(`void r8sp764(std::shared_ptr<uint8_t> v);`),
        funcs: parseFunction(`void r8sp764(std::shared_ptr<uint8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0764 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0764 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0765
  * @tc.name h2dtscpp_tpo_0765
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0765', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp765(std::shared_ptr<uint16_t> v);`),
        unions: parseUnion(`void r8sp765(std::shared_ptr<uint16_t> v);`),
        structs: parseStruct(`void r8sp765(std::shared_ptr<uint16_t> v);`),
        classes: parseClass(`void r8sp765(std::shared_ptr<uint16_t> v);`),
        funcs: parseFunction(`void r8sp765(std::shared_ptr<uint16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0765 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0765 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0766
  * @tc.name h2dtscpp_tpo_0766
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0766', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp766(std::shared_ptr<uint32_t> v);`),
        unions: parseUnion(`void r8sp766(std::shared_ptr<uint32_t> v);`),
        structs: parseStruct(`void r8sp766(std::shared_ptr<uint32_t> v);`),
        classes: parseClass(`void r8sp766(std::shared_ptr<uint32_t> v);`),
        funcs: parseFunction(`void r8sp766(std::shared_ptr<uint32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0766 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0766 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0767
  * @tc.name h2dtscpp_tpo_0767
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0767', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp767(std::shared_ptr<uint64_t> v);`),
        unions: parseUnion(`void r8sp767(std::shared_ptr<uint64_t> v);`),
        structs: parseStruct(`void r8sp767(std::shared_ptr<uint64_t> v);`),
        classes: parseClass(`void r8sp767(std::shared_ptr<uint64_t> v);`),
        funcs: parseFunction(`void r8sp767(std::shared_ptr<uint64_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0767 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0767 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0768
  * @tc.name h2dtscpp_tpo_0768
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0768', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp768(std::shared_ptr<int8_t> v);`),
        unions: parseUnion(`void r8sp768(std::shared_ptr<int8_t> v);`),
        structs: parseStruct(`void r8sp768(std::shared_ptr<int8_t> v);`),
        classes: parseClass(`void r8sp768(std::shared_ptr<int8_t> v);`),
        funcs: parseFunction(`void r8sp768(std::shared_ptr<int8_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0768 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0768 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0769
  * @tc.name h2dtscpp_tpo_0769
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0769', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp769(std::shared_ptr<int16_t> v);`),
        unions: parseUnion(`void r8sp769(std::shared_ptr<int16_t> v);`),
        structs: parseStruct(`void r8sp769(std::shared_ptr<int16_t> v);`),
        classes: parseClass(`void r8sp769(std::shared_ptr<int16_t> v);`),
        funcs: parseFunction(`void r8sp769(std::shared_ptr<int16_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0769 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0769 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0770
  * @tc.name h2dtscpp_tpo_0770
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_tpo_0770', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp770(std::shared_ptr<int32_t> v);`),
        unions: parseUnion(`void r8sp770(std::shared_ptr<int32_t> v);`),
        structs: parseStruct(`void r8sp770(std::shared_ptr<int32_t> v);`),
        classes: parseClass(`void r8sp770(std::shared_ptr<int32_t> v);`),
        funcs: parseFunction(`void r8sp770(std::shared_ptr<int32_t> v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_tpo_0770 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_tpo_0770 执行异常: ${String(err)}`);
    }
  });
});
