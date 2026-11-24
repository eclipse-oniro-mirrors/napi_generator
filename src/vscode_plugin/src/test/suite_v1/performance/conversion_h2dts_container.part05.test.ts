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
  * @tc.number : h2dts_ctr_0141
  * @tc.name : h2dts_ctr_0141
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0141', () => {
    try {
      const DECL = `class R8Ctr141 { std::set<char32_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0141 生成结果为空');
      const expectSnippet = 'export class R8Ctr141 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0141 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0141 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0141 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0142
  * @tc.name : h2dts_ctr_0142
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::string::iterator>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0142', () => {
    try {
      const DECL = `class R8Ctr142 { std::set<std::string::iterator> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0142 生成结果为空');
      const expectSnippet = 'export class R8Ctr142 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0142 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0142 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0142 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0143
  * @tc.name : h2dts_ctr_0143
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<int>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0143', () => {
    try {
      const DECL = `class R8Ctr143 { std::set<std::vector<int>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0143 生成结果为空');
      const expectSnippet = 'export class R8Ctr143 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0143 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0143 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0143 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0144
  * @tc.name : h2dts_ctr_0144
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<size_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0144', () => {
    try {
      const DECL = `class R8Ctr144 { std::set<std::vector<size_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0144 生成结果为空');
      const expectSnippet = 'export class R8Ctr144 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0144 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0144 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0144 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0145
  * @tc.name : h2dts_ctr_0145
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<double>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0145', () => {
    try {
      const DECL = `class R8Ctr145 { std::set<std::vector<double>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0145 生成结果为空');
      const expectSnippet = 'export class R8Ctr145 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0145 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0145 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0145 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0146
  * @tc.name : h2dts_ctr_0146
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<float>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0146', () => {
    try {
      const DECL = `class R8Ctr146 { std::set<std::vector<float>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0146 生成结果为空');
      const expectSnippet = 'export class R8Ctr146 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0146 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0146 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0146 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0147
  * @tc.name : h2dts_ctr_0147
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<long>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0147', () => {
    try {
      const DECL = `class R8Ctr147 { std::set<std::vector<long>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0147 生成结果为空');
      const expectSnippet = 'export class R8Ctr147 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0147 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0147 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0147 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0148
  * @tc.name : h2dts_ctr_0148
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<short>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0148', () => {
    try {
      const DECL = `class R8Ctr148 { std::set<std::vector<short>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0148 生成结果为空');
      const expectSnippet = 'export class R8Ctr148 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0148 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0148 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0148 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0149
  * @tc.name : h2dts_ctr_0149
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<uint8_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0149', () => {
    try {
      const DECL = `class R8Ctr149 { std::set<std::vector<uint8_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0149 生成结果为空');
      const expectSnippet = 'export class R8Ctr149 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0149 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0149 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0149 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0150
  * @tc.name : h2dts_ctr_0150
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<uint16_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0150', () => {
    try {
      const DECL = `class R8Ctr150 { std::set<std::vector<uint16_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0150 生成结果为空');
      const expectSnippet = 'export class R8Ctr150 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0150 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0150 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0150 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0151
  * @tc.name : h2dts_ctr_0151
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<uint32_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0151', () => {
    try {
      const DECL = `class R8Ctr151 { std::set<std::vector<uint32_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0151 生成结果为空');
      const expectSnippet = 'export class R8Ctr151 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0151 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0151 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0151 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0152
  * @tc.name : h2dts_ctr_0152
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<uint64_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0152', () => {
    try {
      const DECL = `class R8Ctr152 { std::set<std::vector<uint64_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0152 生成结果为空');
      const expectSnippet = 'export class R8Ctr152 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0152 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0152 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0152 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0153
  * @tc.name : h2dts_ctr_0153
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<int8_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0153', () => {
    try {
      const DECL = `class R8Ctr153 { std::set<std::vector<int8_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0153 生成结果为空');
      const expectSnippet = 'export class R8Ctr153 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0153 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0153 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0153 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0154
  * @tc.name : h2dts_ctr_0154
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<int16_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0154', () => {
    try {
      const DECL = `class R8Ctr154 { std::set<std::vector<int16_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0154 生成结果为空');
      const expectSnippet = 'export class R8Ctr154 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0154 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0154 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0154 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0155
  * @tc.name : h2dts_ctr_0155
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<int32_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0155', () => {
    try {
      const DECL = `class R8Ctr155 { std::set<std::vector<int32_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0155 生成结果为空');
      const expectSnippet = 'export class R8Ctr155 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0155 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0155 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0155 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0156
  * @tc.name : h2dts_ctr_0156
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<int64_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0156', () => {
    try {
      const DECL = `class R8Ctr156 { std::set<std::vector<int64_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0156 生成结果为空');
      const expectSnippet = 'export class R8Ctr156 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0156 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0156 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0156 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0157
  * @tc.name : h2dts_ctr_0157
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<unsigned>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0157', () => {
    try {
      const DECL = `class R8Ctr157 { std::set<std::vector<unsigned>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0157 生成结果为空');
      const expectSnippet = 'export class R8Ctr157 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0157 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0157 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0157 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0158
  * @tc.name : h2dts_ctr_0158
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<bool>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0158', () => {
    try {
      const DECL = `class R8Ctr158 { std::set<std::vector<bool>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0158 生成结果为空');
      const expectSnippet = 'export class R8Ctr158 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0158 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0158 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0158 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0159
  * @tc.name : h2dts_ctr_0159
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<char>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0159', () => {
    try {
      const DECL = `class R8Ctr159 { std::set<std::vector<char>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0159 生成结果为空');
      const expectSnippet = 'export class R8Ctr159 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0159 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0159 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0159 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0160
  * @tc.name : h2dts_ctr_0160
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::set<std::vector<wchar_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0160', () => {
    try {
      const DECL = `class R8Ctr160 { std::set<std::vector<wchar_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0160 生成结果为空');
      const expectSnippet = 'export class R8Ctr160 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0160 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0160 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0160 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0161
  * @tc.name : h2dts_ctr_0161
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_set<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0161', () => {
    try {
      const DECL = `class R8Ctr161 { std::unordered_set<int> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0161 生成结果为空');
      const expectSnippet = 'export class R8Ctr161 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0161 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0161 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0161 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0162
  * @tc.name : h2dts_ctr_0162
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_set<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0162', () => {
    try {
      const DECL = `class R8Ctr162 { std::unordered_set<size_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0162 生成结果为空');
      const expectSnippet = 'export class R8Ctr162 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0162 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0162 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0162 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0163
  * @tc.name : h2dts_ctr_0163
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_set<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0163', () => {
    try {
      const DECL = `class R8Ctr163 { std::unordered_set<double> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0163 生成结果为空');
      const expectSnippet = 'export class R8Ctr163 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0163 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0163 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0163 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0164
  * @tc.name : h2dts_ctr_0164
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_set<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0164', () => {
    try {
      const DECL = `class R8Ctr164 { std::unordered_set<float> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0164 生成结果为空');
      const expectSnippet = 'export class R8Ctr164 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0164 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0164 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0164 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0165
  * @tc.name : h2dts_ctr_0165
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_set<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0165', () => {
    try {
      const DECL = `class R8Ctr165 { std::unordered_set<short> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0165 生成结果为空');
      const expectSnippet = 'export class R8Ctr165 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0165 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0165 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0165 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0166
  * @tc.name : h2dts_ctr_0166
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_set<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0166', () => {
    try {
      const DECL = `class R8Ctr166 { std::unordered_set<long> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0166 生成结果为空');
      const expectSnippet = 'export class R8Ctr166 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0166 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0166 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0166 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0167
  * @tc.name : h2dts_ctr_0167
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_set<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0167', () => {
    try {
      const DECL = `class R8Ctr167 { std::unordered_set<uint8_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0167 生成结果为空');
      const expectSnippet = 'export class R8Ctr167 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0167 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0167 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0167 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0168
  * @tc.name : h2dts_ctr_0168
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_set<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0168', () => {
    try {
      const DECL = `class R8Ctr168 { std::unordered_set<uint16_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0168 生成结果为空');
      const expectSnippet = 'export class R8Ctr168 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0168 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0168 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0168 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0169
  * @tc.name : h2dts_ctr_0169
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_set<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0169', () => {
    try {
      const DECL = `class R8Ctr169 { std::unordered_set<uint32_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0169 生成结果为空');
      const expectSnippet = 'export class R8Ctr169 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0169 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0169 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0169 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0170
  * @tc.name : h2dts_ctr_0170
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_set<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0170', () => {
    try {
      const DECL = `class R8Ctr170 { std::unordered_set<uint64_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0170 生成结果为空');
      const expectSnippet = 'export class R8Ctr170 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0170 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0170 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0170 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0171
  * @tc.name : h2dts_ctr_0171
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_set<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0171', () => {
    try {
      const DECL = `class R8Ctr171 { std::unordered_set<int8_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0171 生成结果为空');
      const expectSnippet = 'export class R8Ctr171 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0171 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0171 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0171 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0172
  * @tc.name : h2dts_ctr_0172
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_set<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0172', () => {
    try {
      const DECL = `class R8Ctr172 { std::unordered_set<int16_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0172 生成结果为空');
      const expectSnippet = 'export class R8Ctr172 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0172 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0172 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0172 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0173
  * @tc.name : h2dts_ctr_0173
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_set<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0173', () => {
    try {
      const DECL = `class R8Ctr173 { std::unordered_set<int32_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0173 生成结果为空');
      const expectSnippet = 'export class R8Ctr173 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0173 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0173 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0173 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0174
  * @tc.name : h2dts_ctr_0174
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_set<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0174', () => {
    try {
      const DECL = `class R8Ctr174 { std::unordered_set<int64_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0174 生成结果为空');
      const expectSnippet = 'export class R8Ctr174 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0174 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0174 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0174 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0175
  * @tc.name : h2dts_ctr_0175
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_set<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0175', () => {
    try {
      const DECL = `class R8Ctr175 { std::unordered_set<unsigned> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0175 生成结果为空');
      const expectSnippet = 'export class R8Ctr175 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0175 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0175 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0175 执行异常: ${String(err)}`);
    }
  });
});
