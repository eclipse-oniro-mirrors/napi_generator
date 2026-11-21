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

suite('Parse_Struct_TS_Suite_Ext06', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Struct_TS_Suite_Ext06');
  /**
  * @tc.number dts2cpp_struct_0308
  * @tc.name parseStruct_ts_ext_0308
  * @tc.desc dts2cpp struct import-自定义文件：导入类型作 interface 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0308', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0308.ts',
            `import { Foo } from './mod';
interface I {
  a: Foo;
}`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'I');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'a');
      assert.strictEqual(item_0!.members[0].type, 'Foo');
      assert.strictEqual(item_0!.functions.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_struct_0308 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0309
  * @tc.name parseStruct_ts_ext_0309
  * @tc.desc dts2cpp struct import-自定义文件：导入回调类型成员/参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0309', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0309.ts',
            `import { Handler } from './h';
interface Service {
  handler: Handler;
  run(h: Handler): void;
}`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'Service');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'handler');
      assert.strictEqual(item_0!.members[0].type, 'Handler');
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'run');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'Handler');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0309 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0310
  * @tc.name parseStruct_ts_ext_0310
  * @tc.desc dts2cpp struct import-自定义文件：导入类型作返回/参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0310', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0310.ts',
            `import { Data } from './d';
interface Store {
  data: Data;
  get(): Data;
  set(v: Data): void;
}`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'Store');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'data');
      assert.strictEqual(item_0!.members[0].type, 'Data');
      assert.strictEqual(item_0!.functions.length, 2);
      assert.strictEqual(item_0!.functions[0].name, 'get');
      assert.strictEqual(item_0!.functions[0].returns, 'Data');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'set');
      assert.strictEqual(item_0!.functions[1].returns, 'void');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'Data');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0310 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0311
  * @tc.name parseStruct_ts_ext_0311
  * @tc.desc dts2cpp struct namespace-变量+接口：namespace 内变量 + interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0311', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0311.ts',
            `namespace ns {
  const flag = true;
  interface Inner {
    value: number;
    run(): void;
  }
}`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'Inner');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'value');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'run');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_struct_0311 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0312
  * @tc.name parseStruct_ts_ext_0312
  * @tc.desc dts2cpp struct namespace-变量+接口：export namespace 内变量 + interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0312', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0312.ts',
            `export namespace api {
  const version = "2.0";
  interface Client {
    id: string;
    connect(): void;
    disconnect(): void;
  }
}`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'Client');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'id');
      assert.strictEqual(item_0!.members[0].type, 'string');
      assert.strictEqual(item_0!.functions.length, 2);
      assert.strictEqual(item_0!.functions[0].name, 'connect');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'disconnect');
      assert.strictEqual(item_0!.functions[1].returns, 'void');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_struct_0312 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0313
  * @tc.name parseStruct_ts_ext_0313
  * @tc.desc dts2cpp struct import-自定义文件：继承导入基接口 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0313', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0313.ts',
            `import { Base } from './base';
interface Derived extends Base {
  extra: number;
}`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'Derived');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'extra');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_struct_0313 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0314
  * @tc.name parseStruct_ts_ext_0314
  * @tc.desc dts2cpp struct import + on/off 命名方法签名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0314', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0314.ts',
            `import { Event } from './evt';
interface Listener {
  onError(cb: (err: Event) => void): void;
  offError(cb: (err: Event) => void): void;
}`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'Listener');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 2);
      assert.strictEqual(item_0!.functions[0].name, 'onError');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, '(err: Event) => void');
      assert.strictEqual(item_0!.functions[1].name, 'offError');
      assert.strictEqual(item_0!.functions[1].returns, 'void');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, '(err: Event) => void');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0314 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0315
  * @tc.name parseStruct_ts_ext_0315
  * @tc.desc dts2cpp struct 函数类型-on/off：interface Emitter on/off/emit 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0315', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0315.ts',
            `interface Emitter {
  on(event: string, cb: () => void): void;
  off(event: string, cb: () => void): void;
  emit(event: string, data: any): void;
}`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'Emitter');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'on');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, '() => void');
      assert.strictEqual(item_0!.functions[1].name, 'off');
      assert.strictEqual(item_0!.functions[1].returns, 'void');
      assert.strictEqual(item_0!.functions[1].parameters.length, 2);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[1].parameters[1].type, '() => void');
      assert.strictEqual(item_0!.functions[2].name, 'emit');
      assert.strictEqual(item_0!.functions[2].returns, 'void');
      assert.strictEqual(item_0!.functions[2].parameters.length, 2);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].parameters[1].type, 'any');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0315 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0316
  * @tc.name parseStruct_ts_ext_0316
  * @tc.desc dts2cpp struct 函数类型-threadsafe_func：interface ThreadSafe 签名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0316', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0316.ts',
            `interface ThreadSafe {
  call(data: any, cb: (err: Error | null, result: any) => void): void;
  abort(): void;
}`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'ThreadSafe');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 2);
      assert.strictEqual(item_0!.functions[0].name, 'call');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'any');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, '(err: Error | null, result: any) => void');
      assert.strictEqual(item_0!.functions[1].name, 'abort');
      assert.strictEqual(item_0!.functions[1].returns, 'void');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_struct_0316 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0317
  * @tc.name parseStruct_ts_ext_0317
  * @tc.desc dts2cpp struct namespace-变量+函数+接口：三合一混合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0317', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0317.ts',
            `namespace ns {
  const config = { a: 1 };
  function f(): void {
  }
  interface Cls {
    x: number;
  }
}`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'Cls');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_struct_0317 执行异常: ${String(err)}`);
    }
  });

});
