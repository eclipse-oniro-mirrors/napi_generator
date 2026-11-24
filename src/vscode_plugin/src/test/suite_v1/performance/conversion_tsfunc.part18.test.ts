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
import { doParseTs } from '../../../parse/parsets';
import { ParseObj } from '../../../gen/datatype';

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

suite('Performance_DTS2CPP_Func_Suite', function () {
  /**
  * @tc.number dts2cpp_func_0678
  * @tc.name dts2cpp_func_0678
  * @tc.desc dts2cpp func 扩充-R7-import `import-type` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0678', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR7imp678.ts', `import type { PathLike } from "fs";
function open(p: PathLike): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0678 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0678 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0679
  * @tc.name dts2cpp_func_0679
  * @tc.desc dts2cpp func 扩充-R7-import `import-fn` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0679', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR7imp679.ts', `import { readFile } from "fs";
function load(path: string): Promise<string> { return readFile(path, "utf8"); }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0679 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0679 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0680
  * @tc.name dts2cpp_func_0680
  * @tc.desc dts2cpp func 扩充-R7-import `import-ns` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0680', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR7imp680.ts', `import * as util from "util";
function fmt(v: unknown): string { return util.format("%s", v); }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0680 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0680 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0681
  * @tc.name dts2cpp_func_0681
  * @tc.desc dts2cpp func 扩充-R7-import `import-require` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0681', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR7imp681.ts', `export import helper = require("./helper");
function useHelper(): number { return helper.run(); }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0681 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0681 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0682
  * @tc.name dts2cpp_func_0682
  * @tc.desc dts2cpp func 扩充-R7-import `import-type-path` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0682', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR7imp682.ts', `type RO = import("./types").ReadonlyConfig;
function apply(cfg: RO): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0682 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0682 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0683
  * @tc.name dts2cpp_func_0683
  * @tc.desc dts2cpp func 扩充-R7-import `import-class` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0683', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR7imp683.ts', `import { EventEmitter } from "events";
class Bus extends EventEmitter { emitReady(): void { this.emit("ready"); } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0683 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0683 执行异常: ${String(err)}`);
    }
  });
});
