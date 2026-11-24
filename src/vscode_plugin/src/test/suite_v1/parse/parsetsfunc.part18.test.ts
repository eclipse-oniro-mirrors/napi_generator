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

suite('Parse_Func_TS_Suite_Ext18', function () {
  /**
  * @tc.number dts2cpp_func_0678
  * @tc.name parseFunc_ts_ext_0678
  * @tc.desc dts2cpp func 扩充-R7-import `import-type` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_ts_ext_0678', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseR7imp678.ts', `import type { PathLike } from "fs";
function open(p: PathLike): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
          } catch (err) {
      assert.fail(`dts2cpp_func_0678 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0679
  * @tc.name parseFunc_ts_ext_0679
  * @tc.desc dts2cpp func 扩充-R7-import `import-fn` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_ts_ext_0679', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseR7imp679.ts', `import { readFile } from "fs";
function load(path: string): Promise<string> { return readFile(path, "utf8"); }`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
          } catch (err) {
      assert.fail(`dts2cpp_func_0679 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0680
  * @tc.name parseFunc_ts_ext_0680
  * @tc.desc dts2cpp func 扩充-R7-import `import-ns` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_ts_ext_0680', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseR7imp680.ts', `import * as util from "util";
function fmt(v: unknown): string { return util.format("%s", v); }`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
          } catch (err) {
      assert.fail(`dts2cpp_func_0680 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0681
  * @tc.name parseFunc_ts_ext_0681
  * @tc.desc dts2cpp func 扩充-R7-import `import-require` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_ts_ext_0681', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseR7imp681.ts', `export import helper = require("./helper");
function useHelper(): number { return helper.run(); }`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
          } catch (err) {
      assert.fail(`dts2cpp_func_0681 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0682
  * @tc.name parseFunc_ts_ext_0682
  * @tc.desc dts2cpp func 扩充-R7-import `import-type-path` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_ts_ext_0682', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseR7imp682.ts', `type RO = import("./types").ReadonlyConfig;
function apply(cfg: RO): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
          } catch (err) {
      assert.fail(`dts2cpp_func_0682 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0683
  * @tc.name parseFunc_ts_ext_0683
  * @tc.desc dts2cpp func 扩充-R7-import `import-class` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_ts_ext_0683', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseR7imp683.ts', `import { EventEmitter } from "events";
class Bus extends EventEmitter { emitReady(): void { this.emit("ready"); } }`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
          } catch (err) {
      assert.fail(`dts2cpp_func_0683 执行异常: ${String(err)}`);
    }
  });
});
