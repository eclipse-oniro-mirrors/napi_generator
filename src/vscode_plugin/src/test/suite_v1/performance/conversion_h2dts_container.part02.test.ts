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
  * @tc.number : h2dts_ctr_0036
  * @tc.name : h2dts_ctr_0036
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<int64_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0036', () => {
    try {
      const DECL = `class R8Ctr36 { std::vector<std::vector<int64_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0036 生成结果为空');
      const expectSnippet = 'export class R8Ctr36 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0036 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0036 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0037
  * @tc.name : h2dts_ctr_0037
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<unsigned>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0037', () => {
    try {
      const DECL = `class R8Ctr37 { std::vector<std::vector<unsigned>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0037 生成结果为空');
      const expectSnippet = 'export class R8Ctr37 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0037 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0037 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0038
  * @tc.name : h2dts_ctr_0038
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<bool>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0038', () => {
    try {
      const DECL = `class R8Ctr38 { std::vector<std::vector<bool>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0038 生成结果为空');
      const expectSnippet = 'export class R8Ctr38 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0038 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0038 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0039
  * @tc.name : h2dts_ctr_0039
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<char>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0039', () => {
    try {
      const DECL = `class R8Ctr39 { std::vector<std::vector<char>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0039 生成结果为空');
      const expectSnippet = 'export class R8Ctr39 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0039 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0039 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0039 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0040
  * @tc.name : h2dts_ctr_0040
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<wchar_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0040', () => {
    try {
      const DECL = `class R8Ctr40 { std::vector<std::vector<wchar_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0040 生成结果为空');
      const expectSnippet = 'export class R8Ctr40 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0040 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0040 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0041
  * @tc.name : h2dts_ctr_0041
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0041', () => {
    try {
      const DECL = `class R8Ctr41 { std::deque<int> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0041 生成结果为空');
      const expectSnippet = 'export class R8Ctr41 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0041 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0041 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0042
  * @tc.name : h2dts_ctr_0042
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0042', () => {
    try {
      const DECL = `class R8Ctr42 { std::deque<size_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0042 生成结果为空');
      const expectSnippet = 'export class R8Ctr42 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0042 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0042 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0042 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0043
  * @tc.name : h2dts_ctr_0043
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0043', () => {
    try {
      const DECL = `class R8Ctr43 { std::deque<double> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0043 生成结果为空');
      const expectSnippet = 'export class R8Ctr43 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0043 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0043 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0043 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0044
  * @tc.name : h2dts_ctr_0044
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0044', () => {
    try {
      const DECL = `class R8Ctr44 { std::deque<float> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0044 生成结果为空');
      const expectSnippet = 'export class R8Ctr44 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0044 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0044 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0044 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0045
  * @tc.name : h2dts_ctr_0045
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0045', () => {
    try {
      const DECL = `class R8Ctr45 { std::deque<short> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0045 生成结果为空');
      const expectSnippet = 'export class R8Ctr45 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0045 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0045 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0045 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0046
  * @tc.name : h2dts_ctr_0046
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0046', () => {
    try {
      const DECL = `class R8Ctr46 { std::deque<long> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0046 生成结果为空');
      const expectSnippet = 'export class R8Ctr46 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0046 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0046 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0046 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0047
  * @tc.name : h2dts_ctr_0047
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0047', () => {
    try {
      const DECL = `class R8Ctr47 { std::deque<uint8_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0047 生成结果为空');
      const expectSnippet = 'export class R8Ctr47 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0047 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0047 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0047 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0048
  * @tc.name : h2dts_ctr_0048
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0048', () => {
    try {
      const DECL = `class R8Ctr48 { std::deque<uint16_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0048 生成结果为空');
      const expectSnippet = 'export class R8Ctr48 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0048 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0048 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0048 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0049
  * @tc.name : h2dts_ctr_0049
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0049', () => {
    try {
      const DECL = `class R8Ctr49 { std::deque<uint32_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0049 生成结果为空');
      const expectSnippet = 'export class R8Ctr49 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0049 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0049 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0049 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0050
  * @tc.name : h2dts_ctr_0050
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0050', () => {
    try {
      const DECL = `class R8Ctr50 { std::deque<uint64_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0050 生成结果为空');
      const expectSnippet = 'export class R8Ctr50 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0050 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0050 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0050 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0051
  * @tc.name : h2dts_ctr_0051
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0051', () => {
    try {
      const DECL = `class R8Ctr51 { std::deque<int8_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0051 生成结果为空');
      const expectSnippet = 'export class R8Ctr51 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0051 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0051 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0051 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0052
  * @tc.name : h2dts_ctr_0052
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0052', () => {
    try {
      const DECL = `class R8Ctr52 { std::deque<int16_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0052 生成结果为空');
      const expectSnippet = 'export class R8Ctr52 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0052 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0052 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0052 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0053
  * @tc.name : h2dts_ctr_0053
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0053', () => {
    try {
      const DECL = `class R8Ctr53 { std::deque<int32_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0053 生成结果为空');
      const expectSnippet = 'export class R8Ctr53 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0053 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0053 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0053 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0054
  * @tc.name : h2dts_ctr_0054
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0054', () => {
    try {
      const DECL = `class R8Ctr54 { std::deque<int64_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0054 生成结果为空');
      const expectSnippet = 'export class R8Ctr54 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0054 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0054 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0054 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0055
  * @tc.name : h2dts_ctr_0055
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0055', () => {
    try {
      const DECL = `class R8Ctr55 { std::deque<unsigned> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0055 生成结果为空');
      const expectSnippet = 'export class R8Ctr55 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0055 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0055 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0055 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0056
  * @tc.name : h2dts_ctr_0056
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0056', () => {
    try {
      const DECL = `class R8Ctr56 { std::deque<bool> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0056 生成结果为空');
      const expectSnippet = 'export class R8Ctr56 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0056 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0056 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0056 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0057
  * @tc.name : h2dts_ctr_0057
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0057', () => {
    try {
      const DECL = `class R8Ctr57 { std::deque<char> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0057 生成结果为空');
      const expectSnippet = 'export class R8Ctr57 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0057 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0057 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0057 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0058
  * @tc.name : h2dts_ctr_0058
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0058', () => {
    try {
      const DECL = `class R8Ctr58 { std::deque<wchar_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0058 生成结果为空');
      const expectSnippet = 'export class R8Ctr58 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0058 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0058 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0058 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0059
  * @tc.name : h2dts_ctr_0059
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0059', () => {
    try {
      const DECL = `class R8Ctr59 { std::deque<char8_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0059 生成结果为空');
      const expectSnippet = 'export class R8Ctr59 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0059 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0059 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0059 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0060
  * @tc.name : h2dts_ctr_0060
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0060', () => {
    try {
      const DECL = `class R8Ctr60 { std::deque<char16_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0060 生成结果为空');
      const expectSnippet = 'export class R8Ctr60 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0060 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0060 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0060 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0061
  * @tc.name : h2dts_ctr_0061
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0061', () => {
    try {
      const DECL = `class R8Ctr61 { std::deque<char32_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0061 生成结果为空');
      const expectSnippet = 'export class R8Ctr61 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0061 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0061 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0061 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0062
  * @tc.name : h2dts_ctr_0062
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<std::string::iterator>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0062', () => {
    try {
      const DECL = `class R8Ctr62 { std::deque<std::string::iterator> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0062 生成结果为空');
      const expectSnippet = 'export class R8Ctr62 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0062 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0062 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0062 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0063
  * @tc.name : h2dts_ctr_0063
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<std::vector<int>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0063', () => {
    try {
      const DECL = `class R8Ctr63 { std::deque<std::vector<int>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0063 生成结果为空');
      const expectSnippet = 'export class R8Ctr63 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0063 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0063 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0063 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0064
  * @tc.name : h2dts_ctr_0064
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<std::vector<size_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0064', () => {
    try {
      const DECL = `class R8Ctr64 { std::deque<std::vector<size_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0064 生成结果为空');
      const expectSnippet = 'export class R8Ctr64 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0064 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0064 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0064 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0065
  * @tc.name : h2dts_ctr_0065
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<std::vector<double>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0065', () => {
    try {
      const DECL = `class R8Ctr65 { std::deque<std::vector<double>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0065 生成结果为空');
      const expectSnippet = 'export class R8Ctr65 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0065 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0065 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0065 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0066
  * @tc.name : h2dts_ctr_0066
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<std::vector<float>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0066', () => {
    try {
      const DECL = `class R8Ctr66 { std::deque<std::vector<float>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0066 生成结果为空');
      const expectSnippet = 'export class R8Ctr66 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0066 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0066 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0066 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0067
  * @tc.name : h2dts_ctr_0067
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<std::vector<long>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0067', () => {
    try {
      const DECL = `class R8Ctr67 { std::deque<std::vector<long>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0067 生成结果为空');
      const expectSnippet = 'export class R8Ctr67 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0067 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0067 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0067 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0068
  * @tc.name : h2dts_ctr_0068
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<std::vector<short>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0068', () => {
    try {
      const DECL = `class R8Ctr68 { std::deque<std::vector<short>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0068 生成结果为空');
      const expectSnippet = 'export class R8Ctr68 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0068 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0068 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0068 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0069
  * @tc.name : h2dts_ctr_0069
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<std::vector<uint8_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0069', () => {
    try {
      const DECL = `class R8Ctr69 { std::deque<std::vector<uint8_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0069 生成结果为空');
      const expectSnippet = 'export class R8Ctr69 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0069 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0069 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0069 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0070
  * @tc.name : h2dts_ctr_0070
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::deque<std::vector<uint16_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0070', () => {
    try {
      const DECL = `class R8Ctr70 { std::deque<std::vector<uint16_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0070 生成结果为空');
      const expectSnippet = 'export class R8Ctr70 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0070 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0070 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0070 执行异常: ${String(err)}`);
    }
  });
});
