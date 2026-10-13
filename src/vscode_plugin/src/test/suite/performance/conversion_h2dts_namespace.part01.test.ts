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

suite('Performance_H2DTS_Namespace_Suite', function () {
  /**
  * @tc.number : h2dts_gen_5663
  * @tc.name : h2dts_gen_5663
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5663', () => {
    try {
      const DECL = `namespace r7ns01 { class Worker { int id; std::string role; void run(); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5663 生成结果为空');
      const expectSnippet = 'export class Worker {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5663 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5663 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5663 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5664
  * @tc.name : h2dts_gen_5664
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5664', () => {
    try {
      const DECL = `namespace r7ns02 { void boot(); void shutdown(); }`;
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
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5664 生成结果为空');
      const expectSnippet = 'export function shutdown(): void;';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5664 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5664 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5664 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5665
  * @tc.name : h2dts_gen_5665
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5665', () => {
    try {
      const DECL = `namespace r7ns03 { namespace inner { class Box { int v; void touch(); }; } }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5665 生成结果为空');
      const expectSnippet = 'export class Box {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5665 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5665 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5665 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5666
  * @tc.name : h2dts_gen_5666
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5666', () => {
    try {
      const DECL = `namespace r7ns04 { class Api { static int version; int getId(); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5666 生成结果为空');
      const expectSnippet = 'export class Api {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5666 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5666 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5666 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5667
  * @tc.name : h2dts_gen_5667
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5667', () => {
    try {
      const DECL = `namespace r7ns05 { struct Row { int id; std::string label; }; void print(Row r); }`;
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
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5667 生成结果为空');
      const expectSnippet = 'export function print(r: any): string;';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5667 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5667 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5667 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5668
  * @tc.name : h2dts_gen_5668
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5668', () => {
    try {
      const DECL = `namespace r7ns06 { enum Mode { On, Off }; class Switch { Mode m; void flip(); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5668 生成结果为空');
      const expectSnippet = 'export class Switch {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5668 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5668 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5668 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5669
  * @tc.name : h2dts_gen_5669
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5669', () => {
    try {
      const DECL = `namespace r7ns07 { using Key = std::string; class MapHolder { std::map<Key, int> data; }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5669 生成结果为空');
      const expectSnippet = 'export class MapHolder {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5669 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5669 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5669 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5670
  * @tc.name : h2dts_gen_5670
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5670', () => {
    try {
      const DECL = `namespace r7ns08 { class Service { std::vector<int> ids; bool contains(int id); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5670 生成结果为空');
      const expectSnippet = 'export class Service {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5670 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5670 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5670 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5671
  * @tc.name : h2dts_gen_5671
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5671', () => {
    try {
      const DECL = `namespace r7ns10 { class Nested { namespace detail { int secret; } int expose(); }; }`;
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
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5671 生成结果为空');
      const expectSnippet = 'export function expose(): number;';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5671 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5671 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5671 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5672
  * @tc.name : h2dts_gen_5672
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5672', () => {
    try {
      const DECL = `namespace r7ns11 { class Queue { std::queue<int> q; void push(int v); int pop(); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5672 生成结果为空');
      const expectSnippet = 'export class Queue {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5672 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5672 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5672 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5673
  * @tc.name : h2dts_gen_5673
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5673', () => {
    try {
      const DECL = `namespace r7ns12 { class Stack { std::stack<double> s; void push(double v); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5673 生成结果为空');
      const expectSnippet = 'export class Stack {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5673 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5673 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5673 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5674
  * @tc.name : h2dts_gen_5674
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5674', () => {
    try {
      const DECL = `namespace r7ns13 { class ArrayBox { std::array<int, 8> buf; int sum(); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5674 生成结果为空');
      const expectSnippet = 'export class ArrayBox {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5674 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5674 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5674 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5675
  * @tc.name : h2dts_gen_5675
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5675', () => {
    try {
      const DECL = `namespace r7ns14 { class PairHolder { std::pair<int, std::string> p; void reset(); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5675 生成结果为空');
      const expectSnippet = 'export class PairHolder {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5675 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5675 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5675 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5676
  * @tc.name : h2dts_gen_5676
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5676', () => {
    try {
      const DECL = `namespace r7ns15 { class SetHolder { std::set<std::string> keys; bool has(const std::string& k); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5676 生成结果为空');
      const expectSnippet = 'export class SetHolder {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5676 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5676 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5676 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5677
  * @tc.name : h2dts_gen_5677
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5677', () => {
    try {
      const DECL = `namespace r7ns16 { class ListHolder { std::list<float> vals; float avg(); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5677 生成结果为空');
      const expectSnippet = 'export class ListHolder {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5677 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5677 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5677 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5678
  * @tc.name : h2dts_gen_5678
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5678', () => {
    try {
      const DECL = `namespace r7ns17 { class DequeHolder { std::deque<char> chars; size_t size(); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5678 生成结果为空');
      const expectSnippet = 'export class DequeHolder {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5678 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5678 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5678 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5679
  * @tc.name : h2dts_gen_5679
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5679', () => {
    try {
      const DECL = `namespace r7ns18 { class Unordered { std::unordered_map<int, std::string> m; void put(int k, std::string v); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5679 生成结果为空');
      const expectSnippet = 'export class Unordered {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5679 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5679 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5679 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5680
  * @tc.name : h2dts_gen_5680
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5680', () => {
    try {
      const DECL = `namespace r7ns19 { class Forward { std::forward_list<int> fl; void append(int v); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5680 生成结果为空');
      const expectSnippet = 'export class Forward {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5680 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5680 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5680 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5681
  * @tc.name : h2dts_gen_5681
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5681', () => {
    try {
      const DECL = `namespace r7ns20 { class Priority { std::priority_queue<int> pq; void enqueue(int v); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5681 生成结果为空');
      const expectSnippet = 'export class Priority {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5681 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5681 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5681 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5682
  * @tc.name : h2dts_gen_5682
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5682', () => {
    try {
      const DECL = `namespace r7ns21 { namespace net { namespace http { class Client { void get(std::string url); }; } } }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5682 生成结果为空');
      const expectSnippet = 'export class Client {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5682 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5682 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5682 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5683
  * @tc.name : h2dts_gen_5683
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5683', () => {
    try {
      const DECL = `namespace r7ns22 { class Multi { int a; double b; std::string c; bool flag; void reset(); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5683 生成结果为空');
      const expectSnippet = 'export class Multi {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5683 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5683 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5683 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5684
  * @tc.name : h2dts_gen_5684
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5684', () => {
    try {
      const DECL = `namespace r7ns23 { class StaticFns { static void init(); static void done(); int token; }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5684 生成结果为空');
      const expectSnippet = 'export class StaticFns {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5684 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5684 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5684 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5685
  * @tc.name : h2dts_gen_5685
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5685', () => {
    try {
      const DECL = `namespace r7ns24 { class ConstMethods { int value; int read() const; void write(int v); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5685 生成结果为空');
      const expectSnippet = 'export class ConstMethods {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5685 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5685 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5685 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5686
  * @tc.name : h2dts_gen_5686
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5686', () => {
    try {
      const DECL = `namespace r7ns25 { class StringView { std::string_view sv; size_t len(); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5686 生成结果为空');
      const expectSnippet = 'export class StringView {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5686 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5686 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5686 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5687
  * @tc.name : h2dts_gen_5687
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5687', () => {
    try {
      const DECL = `namespace r7ns26 { class Optional { std::optional<int> opt; bool has(); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5687 生成结果为空');
      const expectSnippet = 'export class Optional {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5687 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5687 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5687 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5688
  * @tc.name : h2dts_gen_5688
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5688', () => {
    try {
      const DECL = `namespace r7ns27 { class Variant { std::variant<int, std::string> v; bool isInt(); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5688 生成结果为空');
      const expectSnippet = 'export class Variant {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5688 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5688 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5688 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5689
  * @tc.name : h2dts_gen_5689
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5689', () => {
    try {
      const DECL = `namespace r7ns28 { class Shared { std::shared_ptr<int> ptr; void resetPtr(); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5689 生成结果为空');
      const expectSnippet = 'export class Shared {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5689 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5689 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5689 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5690
  * @tc.name : h2dts_gen_5690
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5690', () => {
    try {
      const DECL = `namespace r7ns29 { class Unique { std::unique_ptr<std::string> ptr; void clear(); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5690 生成结果为空');
      const expectSnippet = 'export class Unique {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5690 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5690 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5690 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5691
  * @tc.name : h2dts_gen_5691
  * @tc.desc : h2dts gen：扩充-R7-namespace 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5691', () => {
    try {
      const DECL = `namespace r7ns30 { class Tuple { std::tuple<int, double, bool> t; int first(); }; }`;
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
      assert.ok(result.length > 0, 'h2dts_gen_5691 生成结果为空');
      const expectSnippet = 'export class Tuple {';
      assert.ok(result.includes(expectSnippet), 'h2dts_gen_5691 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5691 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5691 执行异常: ${String(err)}`);
    }
  });
});
