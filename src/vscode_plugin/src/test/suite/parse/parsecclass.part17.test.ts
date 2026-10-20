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

suite('Parse_Class_C_Suite_Ext17', function () {
  /**
  * @tc.number : c_class_0270
  * @tc.name : c_class_0270
  * @tc.desc : h2dts parseClass：扩充-R2-运算符重载 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseClass_c_ext_0270', () => {
    try {
      const SOURCE = `class OperatorCls { public: OperatorCls operator+(const OperatorCls& o); int val; };`;
      let objList: ClassObj[] | undefined;
            objList = parsec.parseClass(SOURCE);
      assert.ok(objList);
      assert.strictEqual(objList!.length, 1);
      assert.strictEqual(objList![0].name, 'OperatorCls');
      assert.strictEqual(objList![0].variableList.length, 2);
      assert.strictEqual(objList![0].functionList.length, 0);
          } catch (err) {
      assert.fail(`c_class_0270 执行异常: ${String(err)}`);
    }
  });
});
