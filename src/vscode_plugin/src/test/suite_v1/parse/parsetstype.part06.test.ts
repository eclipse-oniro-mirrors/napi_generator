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

suite('Parse_Type_TS_Suite_Ext06', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Type_TS_Suite_Ext06');
  /**
  * @tc.number dts2cpp_type_0285
  * @tc.name parseType_ts_ext_0285
  * @tc.desc dts2cpp type import-自定义文件：导入类型作 type 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0285', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0285.ts',
            `import { Foo } from './mod';
type T = { f: Foo };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'T');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'f');
      assert.strictEqual(item_0!.members[0].type, 'Foo');
      assert.strictEqual(item_0!.functions.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_type_0285 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0286
  * @tc.name parseType_ts_ext_0286
  * @tc.desc dts2cpp type import-自定义文件：导入回调类型成员/参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0286', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0286.ts',
            `import { Handler } from './h';
type Service = {
  handler: Handler;
  run(h: Handler): void;
};`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Service');
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
      assert.fail(`dts2cpp_type_0286 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0287
  * @tc.name parseType_ts_ext_0287
  * @tc.desc dts2cpp type import-自定义文件：导入类型作返回/参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0287', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0287.ts',
            `import { Data } from './d';
type Store = {
  data: Data;
  get(): Data;
  set(v: Data): void;
};`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Store');
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
      assert.fail(`dts2cpp_type_0287 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0288
  * @tc.name parseType_ts_ext_0288
  * @tc.desc dts2cpp type namespace-变量+类型：namespace 内变量 + type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0288', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0288.ts',
            `namespace ns {
  const flag = true;
  type Inner = {
    value: number;
  };
}`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Inner');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'value');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_type_0288 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0289
  * @tc.name parseType_ts_ext_0289
  * @tc.desc dts2cpp type namespace-变量+类型：export namespace 内变量 + type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0289', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0289.ts',
            `export namespace api {
  const version = "2.0";
  type Client = {
    id: string;
    connect(): void;
  };
}`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Client');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'id');
      assert.strictEqual(item_0!.members[0].type, 'string');
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'connect');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_type_0289 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0290
  * @tc.name parseType_ts_ext_0290
  * @tc.desc dts2cpp type import-自定义文件：交叉导入基类型 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0290', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0290.ts',
            `import { Base } from './base';
type Derived = Base & { extra: number; };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Derived');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_type_0290 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0291
  * @tc.name parseType_ts_ext_0291
  * @tc.desc dts2cpp type import + on/off 命名方法签名 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0291', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0291.ts',
            `import { Event } from './evt';
type Listener = {
  onError(cb: (err: Event) => void): void;
  offError(cb: (err: Event) => void): void;
};`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Listener');
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
      assert.fail(`dts2cpp_type_0291 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0292
  * @tc.name parseType_ts_ext_0292
  * @tc.desc dts2cpp type 函数类型-on/off：type Emitter on/off/emit 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0292', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0292.ts',
            `type Emitter = {
  on(event: string, cb: () => void): void;
  off(event: string, cb: () => void): void;
  emit(event: string, data: any): void;
};`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Emitter');
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
      assert.fail(`dts2cpp_type_0292 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0293
  * @tc.name parseType_ts_ext_0293
  * @tc.desc dts2cpp type 函数类型-threadsafe_func：type ThreadSafe 签名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0293', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0293.ts',
            `type ThreadSafe = {
  call(data: any, cb: (err: Error | null, result: any) => void): void;
  abort(): void;
};`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'ThreadSafe');
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
      assert.fail(`dts2cpp_type_0293 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0294
  * @tc.name parseType_ts_ext_0294
  * @tc.desc dts2cpp type namespace-变量+函数+类型：三合一混合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0294', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0294.ts',
            `namespace ns {
  const config = { a: 1 };
  function f(): void {
  }
  type Cls = {
    x: number;
  };
}`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Cls');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_type_0294 执行异常: ${String(err)}`);
    }
  });

});
