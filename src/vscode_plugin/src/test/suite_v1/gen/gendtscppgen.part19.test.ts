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
import { parseFunction, parseClass, parseStruct, parseEnum, parseUnion } from '../../../parse/parsec';
import { getDtsFunction, getDtsClasses, getDtsStructs, getDtsEnum, getDtsUnions, genDtsFile } from '../../../gen/gendts';
import { transParseObj, transParameters } from '../../../gen/gendtscpp';
import { GenInfo, ParseObj, ClassObj, FuncObj, StructObj, EnumObj, UnionObj } from '../../../gen/datatype';

suite('Gendtscpp_gen_Suite_Ext19', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendtscpp_gen_Suite_Ext19');
  /**
  * @tc.number : h2dtscpp_gen_0448
  * @tc.name : h2dtscpp_gen_0448
  * @tc.desc : h2dtscpp transParseObj：扩充-R5-多声明混合 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0448', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5A { int x; }; class R5B { double y; };`),
        unions: parseUnion(`class R5A { int x; }; class R5B { double y; };`),
        structs: parseStruct(`class R5A { int x; }; class R5B { double y; };`),
        classes: parseClass(`class R5A { int x; }; class R5B { double y; };`),
        funcs: parseFunction(`class R5A { int x; }; class R5B { double y; };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 2);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0448 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0449
  * @tc.name : h2dtscpp_gen_0449
  * @tc.desc : h2dtscpp transParseObj：扩充-R5-多声明混合 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0449', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5C { std::string name; }; class R5D { bool ok; }; class R5E { int code; };`),
        unions: parseUnion(`class R5C { std::string name; }; class R5D { bool ok; }; class R5E { int code; };`),
        structs: parseStruct(`class R5C { std::string name; }; class R5D { bool ok; }; class R5E { int code; };`),
        classes: parseClass(`class R5C { std::string name; }; class R5D { bool ok; }; class R5E { int code; };`),
        funcs: parseFunction(`class R5C { std::string name; }; class R5D { bool ok; }; class R5E { int code; };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 3);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0449 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0450
  * @tc.name : h2dtscpp_gen_0450
  * @tc.desc : h2dtscpp transParseObj：扩充-R5-多声明混合 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0450', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5S1 { int a; } R5S1;
class R5F { R5S1 pos; };`),
        unions: parseUnion(`typedef struct R5S1 { int a; } R5S1;
class R5F { R5S1 pos; };`),
        structs: parseStruct(`typedef struct R5S1 { int a; } R5S1;
class R5F { R5S1 pos; };`),
        classes: parseClass(`typedef struct R5S1 { int a; } R5S1;
class R5F { R5S1 pos; };`),
        funcs: parseFunction(`typedef struct R5S1 { int a; } R5S1;
class R5F { R5S1 pos; };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.structs.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0450 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0451
  * @tc.name : h2dtscpp_gen_0451
  * @tc.desc : h2dtscpp transParseObj：扩充-R5-多声明混合 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0451', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef enum { R5_ON, R5_OFF } R5Sw;
class R5G { R5Sw state; void flip(); };`),
        unions: parseUnion(`typedef enum { R5_ON, R5_OFF } R5Sw;
class R5G { R5Sw state; void flip(); };`),
        structs: parseStruct(`typedef enum { R5_ON, R5_OFF } R5Sw;
class R5G { R5Sw state; void flip(); };`),
        classes: parseClass(`typedef enum { R5_ON, R5_OFF } R5Sw;
class R5G { R5Sw state; void flip(); };`),
        funcs: parseFunction(`typedef enum { R5_ON, R5_OFF } R5Sw;
class R5G { R5Sw state; void flip(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.enums.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0451 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0452
  * @tc.name : h2dtscpp_gen_0452
  * @tc.desc : h2dtscpp transParseObj：扩充-R5-多声明混合 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0452', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef union { int i; float f; } R5U3;
class R5H { R5U3 val; };`),
        unions: parseUnion(`typedef union { int i; float f; } R5U3;
class R5H { R5U3 val; };`),
        structs: parseStruct(`typedef union { int i; float f; } R5U3;
class R5H { R5U3 val; };`),
        classes: parseClass(`typedef union { int i; float f; } R5U3;
class R5H { R5U3 val; };`),
        funcs: parseFunction(`typedef union { int i; float f; } R5U3;
class R5H { R5U3 val; };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.unions.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0452 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0453
  * @tc.name : h2dtscpp_gen_0453
  * @tc.desc : h2dtscpp transParseObj：扩充-R5-多声明混合 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0453', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5I { static int count; int id; };
class R5J { static bool ready; std::string label; };`),
        unions: parseUnion(`class R5I { static int count; int id; };
class R5J { static bool ready; std::string label; };`),
        structs: parseStruct(`class R5I { static int count; int id; };
class R5J { static bool ready; std::string label; };`),
        classes: parseClass(`class R5I { static int count; int id; };
class R5J { static bool ready; std::string label; };`),
        funcs: parseFunction(`class R5I { static int count; int id; };
class R5J { static bool ready; std::string label; };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 2);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0453 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0454
  * @tc.name : h2dtscpp_gen_0454
  * @tc.desc : h2dtscpp transParseObj：扩充-R5-多声明混合 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0454', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int r5fn1(int a);
class R5K { int v; };
int r5fn2(double x);`),
        unions: parseUnion(`int r5fn1(int a);
class R5K { int v; };
int r5fn2(double x);`),
        structs: parseStruct(`int r5fn1(int a);
class R5K { int v; };
int r5fn2(double x);`),
        classes: parseClass(`int r5fn1(int a);
class R5K { int v; };
int r5fn2(double x);`),
        funcs: parseFunction(`int r5fn1(int a);
class R5K { int v; };
int r5fn2(double x);`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 2);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0454 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0455
  * @tc.name : h2dtscpp_gen_0455
  * @tc.desc : h2dtscpp transParseObj：扩充-R5-多声明混合 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0455', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5L { std::vector<int> buf; };
class R5M { std::map<std::string,int> idx; };`),
        unions: parseUnion(`class R5L { std::vector<int> buf; };
class R5M { std::map<std::string,int> idx; };`),
        structs: parseStruct(`class R5L { std::vector<int> buf; };
class R5M { std::map<std::string,int> idx; };`),
        classes: parseClass(`class R5L { std::vector<int> buf; };
class R5M { std::map<std::string,int> idx; };`),
        funcs: parseFunction(`class R5L { std::vector<int> buf; };
class R5M { std::map<std::string,int> idx; };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 2);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0455 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0456
  * @tc.name : h2dtscpp_gen_0456
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `bigint` → C++ `bigint` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0456', () => {
    try {
      const params = [{ type: 'bigint', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'bigint');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0456 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0457
  * @tc.name : h2dtscpp_gen_0457
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `unknown` → C++ `unknown` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0457', () => {
    try {
      const params = [{ type: 'unknown', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'unknown');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0457 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0458
  * @tc.name : h2dtscpp_gen_0458
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `never` → C++ `never` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0458', () => {
    try {
      const params = [{ type: 'never', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'never');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0458 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0459
  * @tc.name : h2dtscpp_gen_0459
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `object` → C++ `std::any` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0459', () => {
    try {
      const params = [{ type: 'object', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::any');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0459 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0460
  * @tc.name : h2dtscpp_gen_0460
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `symbol` → C++ `symbol` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0460', () => {
    try {
      const params = [{ type: 'symbol', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'symbol');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0460 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0461
  * @tc.name : h2dtscpp_gen_0461
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `ReadonlyArray<number>` → C++ `ReadonlyArray<number>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0461', () => {
    try {
      const params = [{ type: 'ReadonlyArray<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'ReadonlyArray<number>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0461 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0462
  * @tc.name : h2dtscpp_gen_0462
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `Record<string, number>` → C++ `Record<string, number>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0462', () => {
    try {
      const params = [{ type: 'Record<string, number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Record<string, number>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0462 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0463
  * @tc.name : h2dtscpp_gen_0463
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `Partial<number>` → C++ `Partial<number>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0463', () => {
    try {
      const params = [{ type: 'Partial<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Partial<number>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0463 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0464
  * @tc.name : h2dtscpp_gen_0464
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `[number, string]` → C++ `[number, string]` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0464', () => {
    try {
      const params = [{ type: '[number, string]', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, '[number, string]');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0464 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0465
  * @tc.name : h2dtscpp_gen_0465
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `number | string | boolean` → C++ `number | string | boolean` 的转换...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0465', () => {
    try {
      const params = [{ type: 'number | string | boolean', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'number | string | boolean');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0465 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0466
  * @tc.name : h2dtscpp_gen_0466
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `Array<Promise<number>>` → C++ `Array<Promise<number>>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0466', () => {
    try {
      const params = [{ type: 'Array<Promise<number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Array<Promise<number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0466 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0467
  * @tc.name : h2dtscpp_gen_0467
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `Map<string, boolean>` → C++ `std::map<std::string, bool>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0467', () => {
    try {
      const params = [{ type: 'Map<string, boolean>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::map<std::string, bool>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0467 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0468
  * @tc.name : h2dtscpp_gen_0468
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `Set<bigint>` → C++ `Set<bigint>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0468', () => {
    try {
      const params = [{ type: 'Set<bigint>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Set<bigint>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0468 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0469
  * @tc.name : h2dtscpp_gen_0469
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `IterableIterator<string>` → C++ `IterableIterator<string>` 的转换结果...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0469', () => {
    try {
      const params = [{ type: 'IterableIterator<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<string>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0469 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0470
  * @tc.name : h2dtscpp_gen_0470
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `Promise<number[]>` → C++ `Promise<number[]>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0470', () => {
    try {
      const params = [{ type: 'Promise<number[]>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Promise<number[]>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0470 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0471
  * @tc.name : h2dtscpp_gen_0471
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `Array<Map<string, number>>` → C++ `Array<Map<string, number>>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0471', () => {
    try {
      const params = [{ type: 'Array<Map<string, number>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Array<Map<string, number>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0471 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0472
  * @tc.name : h2dtscpp_gen_0472
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `null` → C++ `null` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0472', () => {
    try {
      const params = [{ type: 'null', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'null');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0472 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0473
  * @tc.name : h2dtscpp_gen_0473
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `undefined` → C++ `undefined` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0473', () => {
    try {
      const params = [{ type: 'undefined', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'undefined');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0473 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0474
  * @tc.name : h2dtscpp_gen_0474
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `any` → C++ `std::any` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0474', () => {
    try {
      const params = [{ type: 'any', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::any');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0474 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0475
  * @tc.name : h2dtscpp_gen_0475
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `string | null` → C++ `string | null` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0475', () => {
    try {
      const params = [{ type: 'string | null', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'string | null');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0475 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0476
  * @tc.name : h2dtscpp_gen_0476
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `number | undefined` → C++ `number | undefined` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0476', () => {
    try {
      const params = [{ type: 'number | undefined', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'number | undefined');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0476 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0477
  * @tc.name : h2dtscpp_gen_0477
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `Array<string[]>` → C++ `Array<string[]>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0477', () => {
    try {
      const params = [{ type: 'Array<string[]>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Array<string[]>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0477 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0478
  * @tc.name : h2dtscpp_gen_0478
  * @tc.desc : h2dtscpp transParameters：扩充-R5 TS 类型 `Map<number, Set<string>>` → C++ `Map<number, Set<string>>` 的转换结果...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0478', () => {
    try {
      const params = [{ type: 'Map<number, Set<string>>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
            transResult = transParameters(params);
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'Map<number, Set<string>>');
      assert.strictEqual(transResult[0].name, 'v');
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0478 执行异常: ${String(err)}`);
    }
  });
});
