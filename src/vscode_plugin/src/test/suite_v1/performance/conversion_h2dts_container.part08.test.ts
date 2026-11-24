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
  * @tc.number : h2dts_ctr_0246
  * @tc.name : h2dts_ctr_0246
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0246', () => {
    try {
      const DECL = `class R8Ctr246 { std::unordered_map<std::string,<long> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0246 生成结果为空');
      const expectSnippet = 'export class R8Ctr246 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0246 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0246 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0246 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0247
  * @tc.name : h2dts_ctr_0247
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0247', () => {
    try {
      const DECL = `class R8Ctr247 { std::unordered_map<std::string,<uint8_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0247 生成结果为空');
      const expectSnippet = 'export class R8Ctr247 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0247 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0247 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0247 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0248
  * @tc.name : h2dts_ctr_0248
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0248', () => {
    try {
      const DECL = `class R8Ctr248 { std::unordered_map<std::string,<uint16_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0248 生成结果为空');
      const expectSnippet = 'export class R8Ctr248 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0248 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0248 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0248 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0249
  * @tc.name : h2dts_ctr_0249
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0249', () => {
    try {
      const DECL = `class R8Ctr249 { std::unordered_map<std::string,<uint32_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0249 生成结果为空');
      const expectSnippet = 'export class R8Ctr249 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0249 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0249 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0249 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0250
  * @tc.name : h2dts_ctr_0250
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0250', () => {
    try {
      const DECL = `class R8Ctr250 { std::unordered_map<std::string,<uint64_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0250 生成结果为空');
      const expectSnippet = 'export class R8Ctr250 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0250 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0250 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0250 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0251
  * @tc.name : h2dts_ctr_0251
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0251', () => {
    try {
      const DECL = `class R8Ctr251 { std::unordered_map<std::string,<int8_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0251 生成结果为空');
      const expectSnippet = 'export class R8Ctr251 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0251 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0251 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0251 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0252
  * @tc.name : h2dts_ctr_0252
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0252', () => {
    try {
      const DECL = `class R8Ctr252 { std::unordered_map<std::string,<int16_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0252 生成结果为空');
      const expectSnippet = 'export class R8Ctr252 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0252 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0252 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0252 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0253
  * @tc.name : h2dts_ctr_0253
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0253', () => {
    try {
      const DECL = `class R8Ctr253 { std::unordered_map<std::string,<int32_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0253 生成结果为空');
      const expectSnippet = 'export class R8Ctr253 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0253 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0253 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0253 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0254
  * @tc.name : h2dts_ctr_0254
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0254', () => {
    try {
      const DECL = `class R8Ctr254 { std::unordered_map<std::string,<int64_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0254 生成结果为空');
      const expectSnippet = 'export class R8Ctr254 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0254 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0254 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0254 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0255
  * @tc.name : h2dts_ctr_0255
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0255', () => {
    try {
      const DECL = `class R8Ctr255 { std::unordered_map<std::string,<unsigned> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0255 生成结果为空');
      const expectSnippet = 'export class R8Ctr255 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0255 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0255 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0255 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0256
  * @tc.name : h2dts_ctr_0256
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0256', () => {
    try {
      const DECL = `class R8Ctr256 { std::unordered_map<std::string,<bool> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0256 生成结果为空');
      const expectSnippet = 'export class R8Ctr256 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0256 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0256 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0256 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0257
  * @tc.name : h2dts_ctr_0257
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0257', () => {
    try {
      const DECL = `class R8Ctr257 { std::unordered_map<std::string,<char> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0257 生成结果为空');
      const expectSnippet = 'export class R8Ctr257 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0257 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0257 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0257 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0258
  * @tc.name : h2dts_ctr_0258
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0258', () => {
    try {
      const DECL = `class R8Ctr258 { std::unordered_map<std::string,<wchar_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0258 生成结果为空');
      const expectSnippet = 'export class R8Ctr258 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0258 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0258 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0258 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0259
  * @tc.name : h2dts_ctr_0259
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0259', () => {
    try {
      const DECL = `class R8Ctr259 { std::unordered_map<std::string,<char8_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0259 生成结果为空');
      const expectSnippet = 'export class R8Ctr259 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0259 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0259 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0259 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0260
  * @tc.name : h2dts_ctr_0260
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0260', () => {
    try {
      const DECL = `class R8Ctr260 { std::unordered_map<std::string,<char16_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0260 生成结果为空');
      const expectSnippet = 'export class R8Ctr260 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0260 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0260 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0260 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0261
  * @tc.name : h2dts_ctr_0261
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0261', () => {
    try {
      const DECL = `class R8Ctr261 { std::unordered_map<std::string,<char32_t> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0261 生成结果为空');
      const expectSnippet = 'export class R8Ctr261 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0261 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0261 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0261 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0262
  * @tc.name : h2dts_ctr_0262
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::string::iterator>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0262', () => {
    try {
      const DECL = `class R8Ctr262 { std::unordered_map<std::string,<std::string::iterator> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0262 生成结果为空');
      const expectSnippet = 'export class R8Ctr262 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0262 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0262 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0262 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0263
  * @tc.name : h2dts_ctr_0263
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<int>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0263', () => {
    try {
      const DECL = `class R8Ctr263 { std::unordered_map<std::string,<std::vector<int>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0263 生成结果为空');
      const expectSnippet = 'export class R8Ctr263 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0263 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0263 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0263 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0264
  * @tc.name : h2dts_ctr_0264
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<size_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0264', () => {
    try {
      const DECL = `class R8Ctr264 { std::unordered_map<std::string,<std::vector<size_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0264 生成结果为空');
      const expectSnippet = 'export class R8Ctr264 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0264 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0264 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0264 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0265
  * @tc.name : h2dts_ctr_0265
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<double>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0265', () => {
    try {
      const DECL = `class R8Ctr265 { std::unordered_map<std::string,<std::vector<double>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0265 生成结果为空');
      const expectSnippet = 'export class R8Ctr265 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0265 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0265 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0265 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0266
  * @tc.name : h2dts_ctr_0266
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<float>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0266', () => {
    try {
      const DECL = `class R8Ctr266 { std::unordered_map<std::string,<std::vector<float>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0266 生成结果为空');
      const expectSnippet = 'export class R8Ctr266 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0266 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0266 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0266 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0267
  * @tc.name : h2dts_ctr_0267
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<long>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0267', () => {
    try {
      const DECL = `class R8Ctr267 { std::unordered_map<std::string,<std::vector<long>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0267 生成结果为空');
      const expectSnippet = 'export class R8Ctr267 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0267 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0267 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0267 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0268
  * @tc.name : h2dts_ctr_0268
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<short>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0268', () => {
    try {
      const DECL = `class R8Ctr268 { std::unordered_map<std::string,<std::vector<short>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0268 生成结果为空');
      const expectSnippet = 'export class R8Ctr268 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0268 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0268 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0268 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0269
  * @tc.name : h2dts_ctr_0269
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<uint8_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0269', () => {
    try {
      const DECL = `class R8Ctr269 { std::unordered_map<std::string,<std::vector<uint8_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0269 生成结果为空');
      const expectSnippet = 'export class R8Ctr269 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0269 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0269 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0269 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0270
  * @tc.name : h2dts_ctr_0270
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<uint16_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0270', () => {
    try {
      const DECL = `class R8Ctr270 { std::unordered_map<std::string,<std::vector<uint16_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0270 生成结果为空');
      const expectSnippet = 'export class R8Ctr270 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0270 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0270 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0270 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0271
  * @tc.name : h2dts_ctr_0271
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<uint32_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0271', () => {
    try {
      const DECL = `class R8Ctr271 { std::unordered_map<std::string,<std::vector<uint32_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0271 生成结果为空');
      const expectSnippet = 'export class R8Ctr271 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0271 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0271 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0271 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0272
  * @tc.name : h2dts_ctr_0272
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<uint64_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0272', () => {
    try {
      const DECL = `class R8Ctr272 { std::unordered_map<std::string,<std::vector<uint64_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0272 生成结果为空');
      const expectSnippet = 'export class R8Ctr272 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0272 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0272 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0272 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0273
  * @tc.name : h2dts_ctr_0273
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<int8_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0273', () => {
    try {
      const DECL = `class R8Ctr273 { std::unordered_map<std::string,<std::vector<int8_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0273 生成结果为空');
      const expectSnippet = 'export class R8Ctr273 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0273 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0273 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0273 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0274
  * @tc.name : h2dts_ctr_0274
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<int16_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0274', () => {
    try {
      const DECL = `class R8Ctr274 { std::unordered_map<std::string,<std::vector<int16_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0274 生成结果为空');
      const expectSnippet = 'export class R8Ctr274 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0274 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0274 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0274 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0275
  * @tc.name : h2dts_ctr_0275
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<int32_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0275', () => {
    try {
      const DECL = `class R8Ctr275 { std::unordered_map<std::string,<std::vector<int32_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0275 生成结果为空');
      const expectSnippet = 'export class R8Ctr275 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0275 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0275 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0275 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0276
  * @tc.name : h2dts_ctr_0276
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<int64_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0276', () => {
    try {
      const DECL = `class R8Ctr276 { std::unordered_map<std::string,<std::vector<int64_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0276 生成结果为空');
      const expectSnippet = 'export class R8Ctr276 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0276 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0276 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0276 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0277
  * @tc.name : h2dts_ctr_0277
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<unsigned>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0277', () => {
    try {
      const DECL = `class R8Ctr277 { std::unordered_map<std::string,<std::vector<unsigned>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0277 生成结果为空');
      const expectSnippet = 'export class R8Ctr277 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0277 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0277 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0277 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0278
  * @tc.name : h2dts_ctr_0278
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<bool>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0278', () => {
    try {
      const DECL = `class R8Ctr278 { std::unordered_map<std::string,<std::vector<bool>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0278 生成结果为空');
      const expectSnippet = 'export class R8Ctr278 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0278 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0278 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0278 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0279
  * @tc.name : h2dts_ctr_0279
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<char>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0279', () => {
    try {
      const DECL = `class R8Ctr279 { std::unordered_map<std::string,<std::vector<char>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0279 生成结果为空');
      const expectSnippet = 'export class R8Ctr279 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0279 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0279 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0279 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0280
  * @tc.name : h2dts_ctr_0280
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::unordered_map<std::string,<std::vector<wchar_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_ctr_0280', () => {
    try {
      const DECL = `class R8Ctr280 { std::unordered_map<std::string,<std::vector<wchar_t>> data; int size(); };`;
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
      assert.ok(result.length > 0, 'h2dts_ctr_0280 生成结果为空');
      const expectSnippet = 'export class R8Ctr280 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0280 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_ctr_0280 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_ctr_0280 执行异常: ${String(err)}`);
    }
  });
});
