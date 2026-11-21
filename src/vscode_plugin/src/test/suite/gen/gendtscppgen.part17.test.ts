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

suite('Gendtscpp_gen_Suite_Ext17', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendtscpp_gen_Suite_Ext17');
  /**
  * @tc.number : h2dtscpp_gen_0392
  * @tc.name : h2dtscpp_gen_0392
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0392', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C392 { long value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C392 { long value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C392 { long value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C392 { long value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C392 { long value; int getId(); void setId(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0392 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0393
  * @tc.name : h2dtscpp_gen_0393
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0393', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C393 { long value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C393 { long value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C393 { long value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C393 { long value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C393 { long value; bool active(); void activate(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0393 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0394
  * @tc.name : h2dtscpp_gen_0394
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0394', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C394 { unsigned long value; void reset(); };`),
        unions: parseUnion(`class R4H2C394 { unsigned long value; void reset(); };`),
        structs: parseStruct(`class R4H2C394 { unsigned long value; void reset(); };`),
        classes: parseClass(`class R4H2C394 { unsigned long value; void reset(); };`),
        funcs: parseFunction(`class R4H2C394 { unsigned long value; void reset(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0394 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0395
  * @tc.name : h2dtscpp_gen_0395
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0395', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C395 { unsigned long value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C395 { unsigned long value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C395 { unsigned long value; int compute(int x); };`),
        classes: parseClass(`class R4H2C395 { unsigned long value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C395 { unsigned long value; int compute(int x); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0395 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0396
  * @tc.name : h2dtscpp_gen_0396
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0396', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C396 { unsigned long value; void set(int v); };`),
        unions: parseUnion(`class R4H2C396 { unsigned long value; void set(int v); };`),
        structs: parseStruct(`class R4H2C396 { unsigned long value; void set(int v); };`),
        classes: parseClass(`class R4H2C396 { unsigned long value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C396 { unsigned long value; void set(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0396 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0397
  * @tc.name : h2dtscpp_gen_0397
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0397', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C397 { unsigned long value; double ratio(); };`),
        unions: parseUnion(`class R4H2C397 { unsigned long value; double ratio(); };`),
        structs: parseStruct(`class R4H2C397 { unsigned long value; double ratio(); };`),
        classes: parseClass(`class R4H2C397 { unsigned long value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C397 { unsigned long value; double ratio(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0397 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0398
  * @tc.name : h2dtscpp_gen_0398
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0398', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C398 { unsigned long value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C398 { unsigned long value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C398 { unsigned long value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C398 { unsigned long value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C398 { unsigned long value; int getId(); void setId(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0398 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0399
  * @tc.name : h2dtscpp_gen_0399
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0399', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C399 { unsigned long value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C399 { unsigned long value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C399 { unsigned long value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C399 { unsigned long value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C399 { unsigned long value; bool active(); void activate(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0399 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0400
  * @tc.name : h2dtscpp_gen_0400
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int8_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0400', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C400 { int8_t value; void reset(); };`),
        unions: parseUnion(`class R4H2C400 { int8_t value; void reset(); };`),
        structs: parseStruct(`class R4H2C400 { int8_t value; void reset(); };`),
        classes: parseClass(`class R4H2C400 { int8_t value; void reset(); };`),
        funcs: parseFunction(`class R4H2C400 { int8_t value; void reset(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0400 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0401
  * @tc.name : h2dtscpp_gen_0401
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int8_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0401', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C401 { int8_t value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C401 { int8_t value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C401 { int8_t value; int compute(int x); };`),
        classes: parseClass(`class R4H2C401 { int8_t value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C401 { int8_t value; int compute(int x); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0401 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0402
  * @tc.name : h2dtscpp_gen_0402
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int8_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0402', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C402 { int8_t value; void set(int v); };`),
        unions: parseUnion(`class R4H2C402 { int8_t value; void set(int v); };`),
        structs: parseStruct(`class R4H2C402 { int8_t value; void set(int v); };`),
        classes: parseClass(`class R4H2C402 { int8_t value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C402 { int8_t value; void set(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0402 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0403
  * @tc.name : h2dtscpp_gen_0403
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int8_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0403', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C403 { int8_t value; double ratio(); };`),
        unions: parseUnion(`class R4H2C403 { int8_t value; double ratio(); };`),
        structs: parseStruct(`class R4H2C403 { int8_t value; double ratio(); };`),
        classes: parseClass(`class R4H2C403 { int8_t value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C403 { int8_t value; double ratio(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0403 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0404
  * @tc.name : h2dtscpp_gen_0404
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int8_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0404', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C404 { int8_t value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C404 { int8_t value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C404 { int8_t value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C404 { int8_t value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C404 { int8_t value; int getId(); void setId(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0404 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0405
  * @tc.name : h2dtscpp_gen_0405
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int8_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0405', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C405 { int8_t value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C405 { int8_t value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C405 { int8_t value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C405 { int8_t value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C405 { int8_t value; bool active(); void activate(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0405 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0406
  * @tc.name : h2dtscpp_gen_0406
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint8_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0406', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C406 { uint8_t value; void reset(); };`),
        unions: parseUnion(`class R4H2C406 { uint8_t value; void reset(); };`),
        structs: parseStruct(`class R4H2C406 { uint8_t value; void reset(); };`),
        classes: parseClass(`class R4H2C406 { uint8_t value; void reset(); };`),
        funcs: parseFunction(`class R4H2C406 { uint8_t value; void reset(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0406 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0407
  * @tc.name : h2dtscpp_gen_0407
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint8_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0407', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C407 { uint8_t value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C407 { uint8_t value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C407 { uint8_t value; int compute(int x); };`),
        classes: parseClass(`class R4H2C407 { uint8_t value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C407 { uint8_t value; int compute(int x); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0407 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0408
  * @tc.name : h2dtscpp_gen_0408
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint8_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0408', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C408 { uint8_t value; void set(int v); };`),
        unions: parseUnion(`class R4H2C408 { uint8_t value; void set(int v); };`),
        structs: parseStruct(`class R4H2C408 { uint8_t value; void set(int v); };`),
        classes: parseClass(`class R4H2C408 { uint8_t value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C408 { uint8_t value; void set(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0408 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0409
  * @tc.name : h2dtscpp_gen_0409
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint8_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0409', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C409 { uint8_t value; double ratio(); };`),
        unions: parseUnion(`class R4H2C409 { uint8_t value; double ratio(); };`),
        structs: parseStruct(`class R4H2C409 { uint8_t value; double ratio(); };`),
        classes: parseClass(`class R4H2C409 { uint8_t value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C409 { uint8_t value; double ratio(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0409 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0410
  * @tc.name : h2dtscpp_gen_0410
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint8_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0410', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C410 { uint8_t value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C410 { uint8_t value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C410 { uint8_t value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C410 { uint8_t value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C410 { uint8_t value; int getId(); void setId(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0410 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0411
  * @tc.name : h2dtscpp_gen_0411
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint8_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0411', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C411 { uint8_t value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C411 { uint8_t value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C411 { uint8_t value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C411 { uint8_t value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C411 { uint8_t value; bool active(); void activate(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0411 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0412
  * @tc.name : h2dtscpp_gen_0412
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int16_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0412', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C412 { int16_t value; void reset(); };`),
        unions: parseUnion(`class R4H2C412 { int16_t value; void reset(); };`),
        structs: parseStruct(`class R4H2C412 { int16_t value; void reset(); };`),
        classes: parseClass(`class R4H2C412 { int16_t value; void reset(); };`),
        funcs: parseFunction(`class R4H2C412 { int16_t value; void reset(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0412 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0413
  * @tc.name : h2dtscpp_gen_0413
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int16_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0413', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C413 { int16_t value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C413 { int16_t value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C413 { int16_t value; int compute(int x); };`),
        classes: parseClass(`class R4H2C413 { int16_t value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C413 { int16_t value; int compute(int x); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0413 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0414
  * @tc.name : h2dtscpp_gen_0414
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int16_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0414', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C414 { int16_t value; void set(int v); };`),
        unions: parseUnion(`class R4H2C414 { int16_t value; void set(int v); };`),
        structs: parseStruct(`class R4H2C414 { int16_t value; void set(int v); };`),
        classes: parseClass(`class R4H2C414 { int16_t value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C414 { int16_t value; void set(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0414 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0415
  * @tc.name : h2dtscpp_gen_0415
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int16_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0415', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C415 { int16_t value; double ratio(); };`),
        unions: parseUnion(`class R4H2C415 { int16_t value; double ratio(); };`),
        structs: parseStruct(`class R4H2C415 { int16_t value; double ratio(); };`),
        classes: parseClass(`class R4H2C415 { int16_t value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C415 { int16_t value; double ratio(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0415 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0416
  * @tc.name : h2dtscpp_gen_0416
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int16_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0416', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C416 { int16_t value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C416 { int16_t value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C416 { int16_t value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C416 { int16_t value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C416 { int16_t value; int getId(); void setId(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0416 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0417
  * @tc.name : h2dtscpp_gen_0417
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int16_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0417', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C417 { int16_t value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C417 { int16_t value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C417 { int16_t value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C417 { int16_t value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C417 { int16_t value; bool active(); void activate(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0417 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0418
  * @tc.name : h2dtscpp_gen_0418
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint16_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0418', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C418 { uint16_t value; void reset(); };`),
        unions: parseUnion(`class R4H2C418 { uint16_t value; void reset(); };`),
        structs: parseStruct(`class R4H2C418 { uint16_t value; void reset(); };`),
        classes: parseClass(`class R4H2C418 { uint16_t value; void reset(); };`),
        funcs: parseFunction(`class R4H2C418 { uint16_t value; void reset(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0418 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0419
  * @tc.name : h2dtscpp_gen_0419
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint16_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0419', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C419 { uint16_t value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C419 { uint16_t value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C419 { uint16_t value; int compute(int x); };`),
        classes: parseClass(`class R4H2C419 { uint16_t value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C419 { uint16_t value; int compute(int x); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0419 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0420
  * @tc.name : h2dtscpp_gen_0420
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint16_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0420', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C420 { uint16_t value; void set(int v); };`),
        unions: parseUnion(`class R4H2C420 { uint16_t value; void set(int v); };`),
        structs: parseStruct(`class R4H2C420 { uint16_t value; void set(int v); };`),
        classes: parseClass(`class R4H2C420 { uint16_t value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C420 { uint16_t value; void set(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0420 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0421
  * @tc.name : h2dtscpp_gen_0421
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint16_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0421', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C421 { uint16_t value; double ratio(); };`),
        unions: parseUnion(`class R4H2C421 { uint16_t value; double ratio(); };`),
        structs: parseStruct(`class R4H2C421 { uint16_t value; double ratio(); };`),
        classes: parseClass(`class R4H2C421 { uint16_t value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C421 { uint16_t value; double ratio(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0421 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0422
  * @tc.name : h2dtscpp_gen_0422
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint16_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0422', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C422 { uint16_t value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C422 { uint16_t value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C422 { uint16_t value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C422 { uint16_t value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C422 { uint16_t value; int getId(); void setId(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0422 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0423
  * @tc.name : h2dtscpp_gen_0423
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint16_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0423', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C423 { uint16_t value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C423 { uint16_t value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C423 { uint16_t value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C423 { uint16_t value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C423 { uint16_t value; bool active(); void activate(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0423 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0424
  * @tc.name : h2dtscpp_gen_0424
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int32_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0424', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C424 { int32_t value; void reset(); };`),
        unions: parseUnion(`class R4H2C424 { int32_t value; void reset(); };`),
        structs: parseStruct(`class R4H2C424 { int32_t value; void reset(); };`),
        classes: parseClass(`class R4H2C424 { int32_t value; void reset(); };`),
        funcs: parseFunction(`class R4H2C424 { int32_t value; void reset(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0424 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0425
  * @tc.name : h2dtscpp_gen_0425
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int32_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0425', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C425 { int32_t value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C425 { int32_t value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C425 { int32_t value; int compute(int x); };`),
        classes: parseClass(`class R4H2C425 { int32_t value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C425 { int32_t value; int compute(int x); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0425 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0426
  * @tc.name : h2dtscpp_gen_0426
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int32_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0426', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C426 { int32_t value; void set(int v); };`),
        unions: parseUnion(`class R4H2C426 { int32_t value; void set(int v); };`),
        structs: parseStruct(`class R4H2C426 { int32_t value; void set(int v); };`),
        classes: parseClass(`class R4H2C426 { int32_t value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C426 { int32_t value; void set(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0426 执行异常: ${String(err)}`);
    }
  });
});
