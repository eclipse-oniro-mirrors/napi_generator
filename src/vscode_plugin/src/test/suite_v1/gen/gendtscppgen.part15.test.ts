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

suite('Gendtscpp_gen_Suite_Ext15', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendtscpp_gen_Suite_Ext15');
  /**
  * @tc.number : h2dtscpp_gen_0322
  * @tc.name : h2dtscpp_gen_0322
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0322', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C322 { int value; void reset(); };`),
        unions: parseUnion(`class R4H2C322 { int value; void reset(); };`),
        structs: parseStruct(`class R4H2C322 { int value; void reset(); };`),
        classes: parseClass(`class R4H2C322 { int value; void reset(); };`),
        funcs: parseFunction(`class R4H2C322 { int value; void reset(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0322 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0323
  * @tc.name : h2dtscpp_gen_0323
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0323', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C323 { int value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C323 { int value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C323 { int value; int compute(int x); };`),
        classes: parseClass(`class R4H2C323 { int value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C323 { int value; int compute(int x); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0323 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0324
  * @tc.name : h2dtscpp_gen_0324
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0324', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C324 { int value; void set(int v); };`),
        unions: parseUnion(`class R4H2C324 { int value; void set(int v); };`),
        structs: parseStruct(`class R4H2C324 { int value; void set(int v); };`),
        classes: parseClass(`class R4H2C324 { int value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C324 { int value; void set(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0324 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0325
  * @tc.name : h2dtscpp_gen_0325
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0325', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C325 { int value; double ratio(); };`),
        unions: parseUnion(`class R4H2C325 { int value; double ratio(); };`),
        structs: parseStruct(`class R4H2C325 { int value; double ratio(); };`),
        classes: parseClass(`class R4H2C325 { int value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C325 { int value; double ratio(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0325 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0326
  * @tc.name : h2dtscpp_gen_0326
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0326', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C326 { int value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C326 { int value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C326 { int value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C326 { int value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C326 { int value; int getId(); void setId(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0326 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0327
  * @tc.name : h2dtscpp_gen_0327
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0327', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C327 { int value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C327 { int value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C327 { int value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C327 { int value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C327 { int value; bool active(); void activate(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0327 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0328
  * @tc.name : h2dtscpp_gen_0328
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `double` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0328', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C328 { double value; void reset(); };`),
        unions: parseUnion(`class R4H2C328 { double value; void reset(); };`),
        structs: parseStruct(`class R4H2C328 { double value; void reset(); };`),
        classes: parseClass(`class R4H2C328 { double value; void reset(); };`),
        funcs: parseFunction(`class R4H2C328 { double value; void reset(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0328 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0329
  * @tc.name : h2dtscpp_gen_0329
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `double` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0329', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C329 { double value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C329 { double value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C329 { double value; int compute(int x); };`),
        classes: parseClass(`class R4H2C329 { double value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C329 { double value; int compute(int x); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0329 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0330
  * @tc.name : h2dtscpp_gen_0330
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `double` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0330', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C330 { double value; void set(int v); };`),
        unions: parseUnion(`class R4H2C330 { double value; void set(int v); };`),
        structs: parseStruct(`class R4H2C330 { double value; void set(int v); };`),
        classes: parseClass(`class R4H2C330 { double value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C330 { double value; void set(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0330 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0331
  * @tc.name : h2dtscpp_gen_0331
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `double` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0331', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C331 { double value; double ratio(); };`),
        unions: parseUnion(`class R4H2C331 { double value; double ratio(); };`),
        structs: parseStruct(`class R4H2C331 { double value; double ratio(); };`),
        classes: parseClass(`class R4H2C331 { double value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C331 { double value; double ratio(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0331 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0332
  * @tc.name : h2dtscpp_gen_0332
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `double` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0332', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C332 { double value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C332 { double value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C332 { double value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C332 { double value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C332 { double value; int getId(); void setId(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0332 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0333
  * @tc.name : h2dtscpp_gen_0333
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `double` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0333', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C333 { double value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C333 { double value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C333 { double value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C333 { double value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C333 { double value; bool active(); void activate(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0333 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0334
  * @tc.name : h2dtscpp_gen_0334
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `float` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0334', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C334 { float value; void reset(); };`),
        unions: parseUnion(`class R4H2C334 { float value; void reset(); };`),
        structs: parseStruct(`class R4H2C334 { float value; void reset(); };`),
        classes: parseClass(`class R4H2C334 { float value; void reset(); };`),
        funcs: parseFunction(`class R4H2C334 { float value; void reset(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0334 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0335
  * @tc.name : h2dtscpp_gen_0335
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `float` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0335', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C335 { float value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C335 { float value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C335 { float value; int compute(int x); };`),
        classes: parseClass(`class R4H2C335 { float value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C335 { float value; int compute(int x); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0335 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0336
  * @tc.name : h2dtscpp_gen_0336
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `float` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0336', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C336 { float value; void set(int v); };`),
        unions: parseUnion(`class R4H2C336 { float value; void set(int v); };`),
        structs: parseStruct(`class R4H2C336 { float value; void set(int v); };`),
        classes: parseClass(`class R4H2C336 { float value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C336 { float value; void set(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0336 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0337
  * @tc.name : h2dtscpp_gen_0337
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `float` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0337', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C337 { float value; double ratio(); };`),
        unions: parseUnion(`class R4H2C337 { float value; double ratio(); };`),
        structs: parseStruct(`class R4H2C337 { float value; double ratio(); };`),
        classes: parseClass(`class R4H2C337 { float value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C337 { float value; double ratio(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0337 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0338
  * @tc.name : h2dtscpp_gen_0338
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `float` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0338', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C338 { float value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C338 { float value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C338 { float value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C338 { float value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C338 { float value; int getId(); void setId(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0338 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0339
  * @tc.name : h2dtscpp_gen_0339
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `float` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0339', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C339 { float value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C339 { float value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C339 { float value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C339 { float value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C339 { float value; bool active(); void activate(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0339 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0340
  * @tc.name : h2dtscpp_gen_0340
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `bool` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0340', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C340 { bool value; void reset(); };`),
        unions: parseUnion(`class R4H2C340 { bool value; void reset(); };`),
        structs: parseStruct(`class R4H2C340 { bool value; void reset(); };`),
        classes: parseClass(`class R4H2C340 { bool value; void reset(); };`),
        funcs: parseFunction(`class R4H2C340 { bool value; void reset(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0340 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0341
  * @tc.name : h2dtscpp_gen_0341
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `bool` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0341', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C341 { bool value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C341 { bool value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C341 { bool value; int compute(int x); };`),
        classes: parseClass(`class R4H2C341 { bool value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C341 { bool value; int compute(int x); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0341 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0342
  * @tc.name : h2dtscpp_gen_0342
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `bool` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0342', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C342 { bool value; void set(int v); };`),
        unions: parseUnion(`class R4H2C342 { bool value; void set(int v); };`),
        structs: parseStruct(`class R4H2C342 { bool value; void set(int v); };`),
        classes: parseClass(`class R4H2C342 { bool value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C342 { bool value; void set(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0342 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0343
  * @tc.name : h2dtscpp_gen_0343
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `bool` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0343', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C343 { bool value; double ratio(); };`),
        unions: parseUnion(`class R4H2C343 { bool value; double ratio(); };`),
        structs: parseStruct(`class R4H2C343 { bool value; double ratio(); };`),
        classes: parseClass(`class R4H2C343 { bool value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C343 { bool value; double ratio(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0343 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0344
  * @tc.name : h2dtscpp_gen_0344
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `bool` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0344', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C344 { bool value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C344 { bool value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C344 { bool value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C344 { bool value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C344 { bool value; int getId(); void setId(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0344 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0345
  * @tc.name : h2dtscpp_gen_0345
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `bool` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0345', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C345 { bool value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C345 { bool value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C345 { bool value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C345 { bool value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C345 { bool value; bool active(); void activate(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0345 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0346
  * @tc.name : h2dtscpp_gen_0346
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `long long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0346', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C346 { long long value; void reset(); };`),
        unions: parseUnion(`class R4H2C346 { long long value; void reset(); };`),
        structs: parseStruct(`class R4H2C346 { long long value; void reset(); };`),
        classes: parseClass(`class R4H2C346 { long long value; void reset(); };`),
        funcs: parseFunction(`class R4H2C346 { long long value; void reset(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0346 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0347
  * @tc.name : h2dtscpp_gen_0347
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `long long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0347', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C347 { long long value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C347 { long long value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C347 { long long value; int compute(int x); };`),
        classes: parseClass(`class R4H2C347 { long long value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C347 { long long value; int compute(int x); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0347 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0348
  * @tc.name : h2dtscpp_gen_0348
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `long long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0348', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C348 { long long value; void set(int v); };`),
        unions: parseUnion(`class R4H2C348 { long long value; void set(int v); };`),
        structs: parseStruct(`class R4H2C348 { long long value; void set(int v); };`),
        classes: parseClass(`class R4H2C348 { long long value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C348 { long long value; void set(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0348 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0349
  * @tc.name : h2dtscpp_gen_0349
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `long long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0349', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C349 { long long value; double ratio(); };`),
        unions: parseUnion(`class R4H2C349 { long long value; double ratio(); };`),
        structs: parseStruct(`class R4H2C349 { long long value; double ratio(); };`),
        classes: parseClass(`class R4H2C349 { long long value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C349 { long long value; double ratio(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0349 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0350
  * @tc.name : h2dtscpp_gen_0350
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `long long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0350', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C350 { long long value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C350 { long long value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C350 { long long value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C350 { long long value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C350 { long long value; int getId(); void setId(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0350 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0351
  * @tc.name : h2dtscpp_gen_0351
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `long long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0351', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C351 { long long value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C351 { long long value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C351 { long long value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C351 { long long value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C351 { long long value; bool active(); void activate(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0351 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0352
  * @tc.name : h2dtscpp_gen_0352
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned int` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0352', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C352 { unsigned int value; void reset(); };`),
        unions: parseUnion(`class R4H2C352 { unsigned int value; void reset(); };`),
        structs: parseStruct(`class R4H2C352 { unsigned int value; void reset(); };`),
        classes: parseClass(`class R4H2C352 { unsigned int value; void reset(); };`),
        funcs: parseFunction(`class R4H2C352 { unsigned int value; void reset(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0352 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0353
  * @tc.name : h2dtscpp_gen_0353
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned int` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0353', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C353 { unsigned int value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C353 { unsigned int value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C353 { unsigned int value; int compute(int x); };`),
        classes: parseClass(`class R4H2C353 { unsigned int value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C353 { unsigned int value; int compute(int x); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0353 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0354
  * @tc.name : h2dtscpp_gen_0354
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned int` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0354', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C354 { unsigned int value; void set(int v); };`),
        unions: parseUnion(`class R4H2C354 { unsigned int value; void set(int v); };`),
        structs: parseStruct(`class R4H2C354 { unsigned int value; void set(int v); };`),
        classes: parseClass(`class R4H2C354 { unsigned int value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C354 { unsigned int value; void set(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0354 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0355
  * @tc.name : h2dtscpp_gen_0355
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned int` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0355', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C355 { unsigned int value; double ratio(); };`),
        unions: parseUnion(`class R4H2C355 { unsigned int value; double ratio(); };`),
        structs: parseStruct(`class R4H2C355 { unsigned int value; double ratio(); };`),
        classes: parseClass(`class R4H2C355 { unsigned int value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C355 { unsigned int value; double ratio(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0355 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0356
  * @tc.name : h2dtscpp_gen_0356
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned int` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0356', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C356 { unsigned int value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C356 { unsigned int value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C356 { unsigned int value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C356 { unsigned int value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C356 { unsigned int value; int getId(); void setId(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0356 执行异常: ${String(err)}`);
    }
  });
});
