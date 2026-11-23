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

suite('Performance_H2DTS_Container_Suite', function () {
  /**
  * @tc.number : h2dts_ctr_0106
  * @tc.name : h2dts_ctr_0106
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::list<std::vector<float>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0106', () => {
    try {
      const DECL = `class R8Ctr106 { std::list<std::vector<float>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0106 生成结果为空');
      const expectSnippet = 'export class R8Ctr106 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0106 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0106 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0106 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0107
  * @tc.name : h2dts_ctr_0107
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::list<std::vector<long>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0107', () => {
    try {
      const DECL = `class R8Ctr107 { std::list<std::vector<long>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0107 生成结果为空');
      const expectSnippet = 'export class R8Ctr107 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0107 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0107 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0107 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0108
  * @tc.name : h2dts_ctr_0108
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::list<std::vector<short>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0108', () => {
    try {
      const DECL = `class R8Ctr108 { std::list<std::vector<short>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0108 生成结果为空');
      const expectSnippet = 'export class R8Ctr108 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0108 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0108 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0108 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0109
  * @tc.name : h2dts_ctr_0109
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::list<std::vector<uint8_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0109', () => {
    try {
      const DECL = `class R8Ctr109 { std::list<std::vector<uint8_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0109 生成结果为空');
      const expectSnippet = 'export class R8Ctr109 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0109 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0109 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0109 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0110
  * @tc.name : h2dts_ctr_0110
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::list<std::vector<uint16_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0110', () => {
    try {
      const DECL = `class R8Ctr110 { std::list<std::vector<uint16_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0110 生成结果为空');
      const expectSnippet = 'export class R8Ctr110 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0110 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0110 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0110 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0111
  * @tc.name : h2dts_ctr_0111
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::list<std::vector<uint32_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0111', () => {
    try {
      const DECL = `class R8Ctr111 { std::list<std::vector<uint32_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0111 生成结果为空');
      const expectSnippet = 'export class R8Ctr111 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0111 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0111 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0111 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0112
  * @tc.name : h2dts_ctr_0112
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::list<std::vector<uint64_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0112', () => {
    try {
      const DECL = `class R8Ctr112 { std::list<std::vector<uint64_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0112 生成结果为空');
      const expectSnippet = 'export class R8Ctr112 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0112 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0112 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0112 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0113
  * @tc.name : h2dts_ctr_0113
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::list<std::vector<int8_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0113', () => {
    try {
      const DECL = `class R8Ctr113 { std::list<std::vector<int8_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0113 生成结果为空');
      const expectSnippet = 'export class R8Ctr113 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0113 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0113 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0113 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0114
  * @tc.name : h2dts_ctr_0114
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::list<std::vector<int16_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0114', () => {
    try {
      const DECL = `class R8Ctr114 { std::list<std::vector<int16_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0114 生成结果为空');
      const expectSnippet = 'export class R8Ctr114 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0114 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0114 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0114 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0115
  * @tc.name : h2dts_ctr_0115
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::list<std::vector<int32_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0115', () => {
    try {
      const DECL = `class R8Ctr115 { std::list<std::vector<int32_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0115 生成结果为空');
      const expectSnippet = 'export class R8Ctr115 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0115 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0115 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0115 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0116
  * @tc.name : h2dts_ctr_0116
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::list<std::vector<int64_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0116', () => {
    try {
      const DECL = `class R8Ctr116 { std::list<std::vector<int64_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0116 生成结果为空');
      const expectSnippet = 'export class R8Ctr116 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0116 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0116 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0116 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0117
  * @tc.name : h2dts_ctr_0117
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::list<std::vector<unsigned>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0117', () => {
    try {
      const DECL = `class R8Ctr117 { std::list<std::vector<unsigned>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0117 生成结果为空');
      const expectSnippet = 'export class R8Ctr117 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0117 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0117 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0117 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0118
  * @tc.name : h2dts_ctr_0118
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::list<std::vector<bool>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0118', () => {
    try {
      const DECL = `class R8Ctr118 { std::list<std::vector<bool>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0118 生成结果为空');
      const expectSnippet = 'export class R8Ctr118 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0118 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0118 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0118 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0119
  * @tc.name : h2dts_ctr_0119
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::list<std::vector<char>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0119', () => {
    try {
      const DECL = `class R8Ctr119 { std::list<std::vector<char>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0119 生成结果为空');
      const expectSnippet = 'export class R8Ctr119 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0119 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0119 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0119 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0120
  * @tc.name : h2dts_ctr_0120
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::list<std::vector<wchar_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0120', () => {
    try {
      const DECL = `class R8Ctr120 { std::list<std::vector<wchar_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0120 生成结果为空');
      const expectSnippet = 'export class R8Ctr120 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0120 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0120 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0120 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0121
  * @tc.name : h2dts_ctr_0121
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0121', () => {
    try {
      const DECL = `class R8Ctr121 { std::set<int> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0121 生成结果为空');
      const expectSnippet = 'export class R8Ctr121 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0121 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0121 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0121 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0122
  * @tc.name : h2dts_ctr_0122
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0122', () => {
    try {
      const DECL = `class R8Ctr122 { std::set<size_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0122 生成结果为空');
      const expectSnippet = 'export class R8Ctr122 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0122 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0122 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0122 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0123
  * @tc.name : h2dts_ctr_0123
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0123', () => {
    try {
      const DECL = `class R8Ctr123 { std::set<double> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0123 生成结果为空');
      const expectSnippet = 'export class R8Ctr123 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0123 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0123 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0123 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0124
  * @tc.name : h2dts_ctr_0124
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0124', () => {
    try {
      const DECL = `class R8Ctr124 { std::set<float> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0124 生成结果为空');
      const expectSnippet = 'export class R8Ctr124 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0124 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0124 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0124 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0125
  * @tc.name : h2dts_ctr_0125
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0125', () => {
    try {
      const DECL = `class R8Ctr125 { std::set<short> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0125 生成结果为空');
      const expectSnippet = 'export class R8Ctr125 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0125 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0125 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0125 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0126
  * @tc.name : h2dts_ctr_0126
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0126', () => {
    try {
      const DECL = `class R8Ctr126 { std::set<long> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0126 生成结果为空');
      const expectSnippet = 'export class R8Ctr126 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0126 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0126 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0126 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0127
  * @tc.name : h2dts_ctr_0127
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0127', () => {
    try {
      const DECL = `class R8Ctr127 { std::set<uint8_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0127 生成结果为空');
      const expectSnippet = 'export class R8Ctr127 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0127 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0127 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0127 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0128
  * @tc.name : h2dts_ctr_0128
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0128', () => {
    try {
      const DECL = `class R8Ctr128 { std::set<uint16_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0128 生成结果为空');
      const expectSnippet = 'export class R8Ctr128 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0128 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0128 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0128 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0129
  * @tc.name : h2dts_ctr_0129
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0129', () => {
    try {
      const DECL = `class R8Ctr129 { std::set<uint32_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0129 生成结果为空');
      const expectSnippet = 'export class R8Ctr129 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0129 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0129 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0129 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0130
  * @tc.name : h2dts_ctr_0130
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0130', () => {
    try {
      const DECL = `class R8Ctr130 { std::set<uint64_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0130 生成结果为空');
      const expectSnippet = 'export class R8Ctr130 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0130 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0130 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0130 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0131
  * @tc.name : h2dts_ctr_0131
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0131', () => {
    try {
      const DECL = `class R8Ctr131 { std::set<int8_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0131 生成结果为空');
      const expectSnippet = 'export class R8Ctr131 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0131 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0131 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0131 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0132
  * @tc.name : h2dts_ctr_0132
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0132', () => {
    try {
      const DECL = `class R8Ctr132 { std::set<int16_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0132 生成结果为空');
      const expectSnippet = 'export class R8Ctr132 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0132 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0132 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0132 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0133
  * @tc.name : h2dts_ctr_0133
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0133', () => {
    try {
      const DECL = `class R8Ctr133 { std::set<int32_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0133 生成结果为空');
      const expectSnippet = 'export class R8Ctr133 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0133 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0133 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0133 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0134
  * @tc.name : h2dts_ctr_0134
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0134', () => {
    try {
      const DECL = `class R8Ctr134 { std::set<int64_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0134 生成结果为空');
      const expectSnippet = 'export class R8Ctr134 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0134 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0134 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0134 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0135
  * @tc.name : h2dts_ctr_0135
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0135', () => {
    try {
      const DECL = `class R8Ctr135 { std::set<unsigned> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0135 生成结果为空');
      const expectSnippet = 'export class R8Ctr135 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0135 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0135 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0135 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0136
  * @tc.name : h2dts_ctr_0136
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0136', () => {
    try {
      const DECL = `class R8Ctr136 { std::set<bool> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0136 生成结果为空');
      const expectSnippet = 'export class R8Ctr136 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0136 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0136 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0136 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0137
  * @tc.name : h2dts_ctr_0137
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0137', () => {
    try {
      const DECL = `class R8Ctr137 { std::set<char> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0137 生成结果为空');
      const expectSnippet = 'export class R8Ctr137 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0137 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0137 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0137 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0138
  * @tc.name : h2dts_ctr_0138
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0138', () => {
    try {
      const DECL = `class R8Ctr138 { std::set<wchar_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0138 生成结果为空');
      const expectSnippet = 'export class R8Ctr138 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0138 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0138 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0138 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0139
  * @tc.name : h2dts_ctr_0139
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0139', () => {
    try {
      const DECL = `class R8Ctr139 { std::set<char8_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0139 生成结果为空');
      const expectSnippet = 'export class R8Ctr139 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0139 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0139 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0139 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0140
  * @tc.name : h2dts_ctr_0140
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0140', () => {
    try {
      const DECL = `class R8Ctr140 { std::set<char16_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_ctr_0140 生成结果为空');
      const expectSnippet = 'export class R8Ctr140 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0140 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0140 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0140 执行异常: ${String(err)}`);
    }
  });
});
