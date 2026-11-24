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
import * as parsec from '../../../parse/parsec';

suite('Parse_C_Func_Suite_Ext31', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Func_Suite_Ext31');
  /**
  * @tc.number : c_func_1273
  * @tc.name : c_func_1273
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `void r5ref` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1273', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`void r5ref(int& x);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5ref');
          } catch (err) {
      assert.fail(`c_func_1273 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1274
  * @tc.name : c_func_1274
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `void r5cref` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1274', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`void r5cref(const int& x);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5cref');
          } catch (err) {
      assert.fail(`c_func_1274 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1275
  * @tc.name : c_func_1275
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `void r5ptr` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1275', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`void r5ptr(int* p);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5ptr');
          } catch (err) {
      assert.fail(`c_func_1275 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1276
  * @tc.name : c_func_1276
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `void r5cptr` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1276', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`void r5cptr(const char* s);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5cptr');
          } catch (err) {
      assert.fail(`c_func_1276 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1277
  * @tc.name : c_func_1277
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `void r5dbl` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1277', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`void r5dbl(int** pp);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5dbl');
          } catch (err) {
      assert.fail(`c_func_1277 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1278
  * @tc.name : c_func_1278
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `template<typename T> void r5tpl` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1278', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`template<typename T> void r5tpl(T v);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5tpl');
          } catch (err) {
      assert.fail(`c_func_1278 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1279
  * @tc.name : c_func_1279
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `template<class U> void r5tpl2` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1279', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`template<class U> void r5tpl2(U val);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5tpl2');
          } catch (err) {
      assert.fail(`c_func_1279 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1280
  * @tc.name : c_func_1280
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `void r5arr2d` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1280', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`void r5arr2d(int m[4][8]);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5arr2d');
          } catch (err) {
      assert.fail(`c_func_1280 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1281
  * @tc.name : c_func_1281
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `void r5arr3d` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1281', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`void r5arr3d(float cube[2][3][4]);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5arr3d');
          } catch (err) {
      assert.fail(`c_func_1281 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1282
  * @tc.name : c_func_1282
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `void r5mix` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1282', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`void r5mix(int& a, const std::string& b, double* c);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5mix');
          } catch (err) {
      assert.fail(`c_func_1282 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1283
  * @tc.name : c_func_1283
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `void r5vec` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1283', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`void r5vec(std::vector<int>& out);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5vec');
          } catch (err) {
      assert.fail(`c_func_1283 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1284
  * @tc.name : c_func_1284
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `bool r5map` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1284', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`bool r5map(const std::map<std::string,int>& table);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5map');
          } catch (err) {
      assert.fail(`c_func_1284 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1285
  * @tc.name : c_func_1285
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `void r5set` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1285', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`void r5set(const std::set<double>& vals);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5set');
          } catch (err) {
      assert.fail(`c_func_1285 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1286
  * @tc.name : c_func_1286
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `int r5pair` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1286', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`int r5pair(std::pair<int,std::string> p);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5pair');
          } catch (err) {
      assert.fail(`c_func_1286 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1287
  * @tc.name : c_func_1287
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `void r5opt` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1287', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`void r5opt(std::optional<int> v);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5opt');
          } catch (err) {
      assert.fail(`c_func_1287 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1288
  * @tc.name : c_func_1288
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `void r5shared` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1288', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`void r5shared(std::shared_ptr<int> p);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5shared');
          } catch (err) {
      assert.fail(`c_func_1288 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1289
  * @tc.name : c_func_1289
  * @tc.desc : h2dts parseFunction：扩充-R5-高级签名 `void r5tuple` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1289', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`void r5tuple(std::tuple<int,double,std::string> t);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r5tuple');
          } catch (err) {
      assert.fail(`c_func_1289 执行异常: ${String(err)}`);
    }
  });
});
