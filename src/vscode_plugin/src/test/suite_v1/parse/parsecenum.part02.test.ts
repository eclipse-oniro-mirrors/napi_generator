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

suite('Parse_Enum_C_Suite_Ext02', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Enum_C_Suite_Ext02');
  /**
  * @tc.number c_enum_0028
  * @tc.name parseEnum_c_ext_0028
  * @tc.desc h2dts parseEnum：扩充-矩阵：2 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0028', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0,
    M1
} En02F0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En02F0');
      assert.strictEqual(objList[0].alias, 'En02F0');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0], 'M0');
      assert.strictEqual(objList[0].members[1], 'M1');
          } catch (err) {
      assert.fail(`c_enum_0028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0029
  * @tc.name parseEnum_c_ext_0029
  * @tc.desc h2dts parseEnum：扩充-矩阵：2 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0029', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0,
    M1 = 1
} En02F1;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En02F1');
      assert.strictEqual(objList[0].alias, 'En02F1');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0], 'M0=0');
      assert.strictEqual(objList[0].members[1], 'M1=1');
          } catch (err) {
      assert.fail(`c_enum_0029 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0030
  * @tc.name parseEnum_c_ext_0030
  * @tc.desc h2dts parseEnum：扩充-矩阵：2 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0030', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = "v0",
    M1 = "v1"
} En02F2;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En02F2');
      assert.strictEqual(objList[0].alias, 'En02F2');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0], 'M0="v0"');
      assert.strictEqual(objList[0].members[1], 'M1="v1"');
          } catch (err) {
      assert.fail(`c_enum_0030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0031
  * @tc.name parseEnum_c_ext_0031
  * @tc.desc h2dts parseEnum：扩充-矩阵：2 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0031', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0x1,
    M1 = 0x2
} En02F3;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En02F3');
      assert.strictEqual(objList[0].alias, 'En02F3');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0], 'M0=0x1');
      assert.strictEqual(objList[0].members[1], 'M1=0x2');
          } catch (err) {
      assert.fail(`c_enum_0031 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0032
  * @tc.name parseEnum_c_ext_0032
  * @tc.desc h2dts parseEnum：扩充-矩阵：3 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0032', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0,
    M1,
    M2
} En03F0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En03F0');
      assert.strictEqual(objList[0].alias, 'En03F0');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'M0');
      assert.strictEqual(objList[0].members[1], 'M1');
      assert.strictEqual(objList[0].members[2], 'M2');
          } catch (err) {
      assert.fail(`c_enum_0032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0033
  * @tc.name parseEnum_c_ext_0033
  * @tc.desc h2dts parseEnum：扩充-矩阵：3 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0033', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0,
    M1 = 1,
    M2 = 2
} En03F1;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En03F1');
      assert.strictEqual(objList[0].alias, 'En03F1');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'M0=0');
      assert.strictEqual(objList[0].members[1], 'M1=1');
      assert.strictEqual(objList[0].members[2], 'M2=2');
          } catch (err) {
      assert.fail(`c_enum_0033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0034
  * @tc.name parseEnum_c_ext_0034
  * @tc.desc h2dts parseEnum：扩充-矩阵：3 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0034', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = "v0",
    M1 = "v1",
    M2 = "v2"
} En03F2;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En03F2');
      assert.strictEqual(objList[0].alias, 'En03F2');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'M0="v0"');
      assert.strictEqual(objList[0].members[1], 'M1="v1"');
      assert.strictEqual(objList[0].members[2], 'M2="v2"');
          } catch (err) {
      assert.fail(`c_enum_0034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0035
  * @tc.name parseEnum_c_ext_0035
  * @tc.desc h2dts parseEnum：扩充-矩阵：3 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0035', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0x1,
    M1 = 0x2,
    M2 = 0x3
} En03F3;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En03F3');
      assert.strictEqual(objList[0].alias, 'En03F3');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'M0=0x1');
      assert.strictEqual(objList[0].members[1], 'M1=0x2');
      assert.strictEqual(objList[0].members[2], 'M2=0x3');
          } catch (err) {
      assert.fail(`c_enum_0035 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0036
  * @tc.name parseEnum_c_ext_0036
  * @tc.desc h2dts parseEnum：扩充-矩阵：4 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0036', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0,
    M1,
    M2,
    M3
} En04F0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En04F0');
      assert.strictEqual(objList[0].alias, 'En04F0');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'M0');
      assert.strictEqual(objList[0].members[1], 'M1');
      assert.strictEqual(objList[0].members[2], 'M2');
      assert.strictEqual(objList[0].members[3], 'M3');
          } catch (err) {
      assert.fail(`c_enum_0036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0037
  * @tc.name parseEnum_c_ext_0037
  * @tc.desc h2dts parseEnum：扩充-矩阵：4 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0037', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0,
    M1 = 1,
    M2 = 2,
    M3 = 3
} En04F1;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En04F1');
      assert.strictEqual(objList[0].alias, 'En04F1');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'M0=0');
      assert.strictEqual(objList[0].members[1], 'M1=1');
      assert.strictEqual(objList[0].members[2], 'M2=2');
      assert.strictEqual(objList[0].members[3], 'M3=3');
          } catch (err) {
      assert.fail(`c_enum_0037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0038
  * @tc.name parseEnum_c_ext_0038
  * @tc.desc h2dts parseEnum：扩充-矩阵：4 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0038', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = "v0",
    M1 = "v1",
    M2 = "v2",
    M3 = "v3"
} En04F2;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En04F2');
      assert.strictEqual(objList[0].alias, 'En04F2');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'M0="v0"');
      assert.strictEqual(objList[0].members[1], 'M1="v1"');
      assert.strictEqual(objList[0].members[2], 'M2="v2"');
      assert.strictEqual(objList[0].members[3], 'M3="v3"');
          } catch (err) {
      assert.fail(`c_enum_0038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0039
  * @tc.name parseEnum_c_ext_0039
  * @tc.desc h2dts parseEnum：扩充-矩阵：4 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0039', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0x1,
    M1 = 0x2,
    M2 = 0x3,
    M3 = 0x4
} En04F3;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En04F3');
      assert.strictEqual(objList[0].alias, 'En04F3');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'M0=0x1');
      assert.strictEqual(objList[0].members[1], 'M1=0x2');
      assert.strictEqual(objList[0].members[2], 'M2=0x3');
      assert.strictEqual(objList[0].members[3], 'M3=0x4');
          } catch (err) {
      assert.fail(`c_enum_0039 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0040
  * @tc.name parseEnum_c_ext_0040
  * @tc.desc h2dts parseEnum：扩充-矩阵：5 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0040', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0,
    M1,
    M2,
    M3,
    M4
} En05F0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En05F0');
      assert.strictEqual(objList[0].alias, 'En05F0');
      assert.strictEqual(objList[0].members.length, 5);
      assert.strictEqual(objList[0].members[0], 'M0');
      assert.strictEqual(objList[0].members[1], 'M1');
      assert.strictEqual(objList[0].members[2], 'M2');
      assert.strictEqual(objList[0].members[3], 'M3');
      assert.strictEqual(objList[0].members[4], 'M4');
          } catch (err) {
      assert.fail(`c_enum_0040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0041
  * @tc.name parseEnum_c_ext_0041
  * @tc.desc h2dts parseEnum：扩充-矩阵：5 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0041', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0,
    M1 = 1,
    M2 = 2,
    M3 = 3,
    M4 = 4
} En05F1;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En05F1');
      assert.strictEqual(objList[0].alias, 'En05F1');
      assert.strictEqual(objList[0].members.length, 5);
      assert.strictEqual(objList[0].members[0], 'M0=0');
      assert.strictEqual(objList[0].members[1], 'M1=1');
      assert.strictEqual(objList[0].members[2], 'M2=2');
      assert.strictEqual(objList[0].members[3], 'M3=3');
      assert.strictEqual(objList[0].members[4], 'M4=4');
          } catch (err) {
      assert.fail(`c_enum_0041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0042
  * @tc.name parseEnum_c_ext_0042
  * @tc.desc h2dts parseEnum：扩充-矩阵：5 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0042', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = "v0",
    M1 = "v1",
    M2 = "v2",
    M3 = "v3",
    M4 = "v4"
} En05F2;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En05F2');
      assert.strictEqual(objList[0].alias, 'En05F2');
      assert.strictEqual(objList[0].members.length, 5);
      assert.strictEqual(objList[0].members[0], 'M0="v0"');
      assert.strictEqual(objList[0].members[1], 'M1="v1"');
      assert.strictEqual(objList[0].members[2], 'M2="v2"');
      assert.strictEqual(objList[0].members[3], 'M3="v3"');
      assert.strictEqual(objList[0].members[4], 'M4="v4"');
          } catch (err) {
      assert.fail(`c_enum_0042 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0043
  * @tc.name parseEnum_c_ext_0043
  * @tc.desc h2dts parseEnum：扩充-矩阵：5 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0043', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0x1,
    M1 = 0x2,
    M2 = 0x3,
    M3 = 0x4,
    M4 = 0x5
} En05F3;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En05F3');
      assert.strictEqual(objList[0].alias, 'En05F3');
      assert.strictEqual(objList[0].members.length, 5);
      assert.strictEqual(objList[0].members[0], 'M0=0x1');
      assert.strictEqual(objList[0].members[1], 'M1=0x2');
      assert.strictEqual(objList[0].members[2], 'M2=0x3');
      assert.strictEqual(objList[0].members[3], 'M3=0x4');
      assert.strictEqual(objList[0].members[4], 'M4=0x5');
          } catch (err) {
      assert.fail(`c_enum_0043 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0044
  * @tc.name parseEnum_c_ext_0044
  * @tc.desc h2dts parseEnum：扩充-矩阵：6 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0044', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0,
    M1,
    M2,
    M3,
    M4,
    M5
} En06F0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En06F0');
      assert.strictEqual(objList[0].alias, 'En06F0');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0], 'M0');
      assert.strictEqual(objList[0].members[1], 'M1');
      assert.strictEqual(objList[0].members[2], 'M2');
      assert.strictEqual(objList[0].members[3], 'M3');
      assert.strictEqual(objList[0].members[4], 'M4');
      assert.strictEqual(objList[0].members[5], 'M5');
          } catch (err) {
      assert.fail(`c_enum_0044 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0045
  * @tc.name parseEnum_c_ext_0045
  * @tc.desc h2dts parseEnum：扩充-矩阵：6 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0045', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0,
    M1 = 1,
    M2 = 2,
    M3 = 3,
    M4 = 4,
    M5 = 5
} En06F1;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En06F1');
      assert.strictEqual(objList[0].alias, 'En06F1');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0], 'M0=0');
      assert.strictEqual(objList[0].members[1], 'M1=1');
      assert.strictEqual(objList[0].members[2], 'M2=2');
      assert.strictEqual(objList[0].members[3], 'M3=3');
      assert.strictEqual(objList[0].members[4], 'M4=4');
      assert.strictEqual(objList[0].members[5], 'M5=5');
          } catch (err) {
      assert.fail(`c_enum_0045 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0046
  * @tc.name parseEnum_c_ext_0046
  * @tc.desc h2dts parseEnum：扩充-矩阵：6 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0046', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = "v0",
    M1 = "v1",
    M2 = "v2",
    M3 = "v3",
    M4 = "v4",
    M5 = "v5"
} En06F2;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En06F2');
      assert.strictEqual(objList[0].alias, 'En06F2');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0], 'M0="v0"');
      assert.strictEqual(objList[0].members[1], 'M1="v1"');
      assert.strictEqual(objList[0].members[2], 'M2="v2"');
      assert.strictEqual(objList[0].members[3], 'M3="v3"');
      assert.strictEqual(objList[0].members[4], 'M4="v4"');
      assert.strictEqual(objList[0].members[5], 'M5="v5"');
          } catch (err) {
      assert.fail(`c_enum_0046 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0047
  * @tc.name parseEnum_c_ext_0047
  * @tc.desc h2dts parseEnum：扩充-矩阵：6 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0047', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0x1,
    M1 = 0x2,
    M2 = 0x3,
    M3 = 0x4,
    M4 = 0x5,
    M5 = 0x6
} En06F3;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En06F3');
      assert.strictEqual(objList[0].alias, 'En06F3');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0], 'M0=0x1');
      assert.strictEqual(objList[0].members[1], 'M1=0x2');
      assert.strictEqual(objList[0].members[2], 'M2=0x3');
      assert.strictEqual(objList[0].members[3], 'M3=0x4');
      assert.strictEqual(objList[0].members[4], 'M4=0x5');
      assert.strictEqual(objList[0].members[5], 'M5=0x6');
          } catch (err) {
      assert.fail(`c_enum_0047 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0048
  * @tc.name parseEnum_c_ext_0048
  * @tc.desc h2dts parseEnum：扩充-矩阵：7 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0048', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0,
    M1,
    M2,
    M3,
    M4,
    M5,
    M6
} En07F0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En07F0');
      assert.strictEqual(objList[0].alias, 'En07F0');
      assert.strictEqual(objList[0].members.length, 7);
      assert.strictEqual(objList[0].members[0], 'M0');
      assert.strictEqual(objList[0].members[1], 'M1');
      assert.strictEqual(objList[0].members[2], 'M2');
      assert.strictEqual(objList[0].members[3], 'M3');
      assert.strictEqual(objList[0].members[4], 'M4');
      assert.strictEqual(objList[0].members[5], 'M5');
      assert.strictEqual(objList[0].members[6], 'M6');
          } catch (err) {
      assert.fail(`c_enum_0048 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0049
  * @tc.name parseEnum_c_ext_0049
  * @tc.desc h2dts parseEnum：扩充-矩阵：7 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0049', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0,
    M1 = 1,
    M2 = 2,
    M3 = 3,
    M4 = 4,
    M5 = 5,
    M6 = 6
} En07F1;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En07F1');
      assert.strictEqual(objList[0].alias, 'En07F1');
      assert.strictEqual(objList[0].members.length, 7);
      assert.strictEqual(objList[0].members[0], 'M0=0');
      assert.strictEqual(objList[0].members[1], 'M1=1');
      assert.strictEqual(objList[0].members[2], 'M2=2');
      assert.strictEqual(objList[0].members[3], 'M3=3');
      assert.strictEqual(objList[0].members[4], 'M4=4');
      assert.strictEqual(objList[0].members[5], 'M5=5');
      assert.strictEqual(objList[0].members[6], 'M6=6');
          } catch (err) {
      assert.fail(`c_enum_0049 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0050
  * @tc.name parseEnum_c_ext_0050
  * @tc.desc h2dts parseEnum：扩充-矩阵：7 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0050', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = "v0",
    M1 = "v1",
    M2 = "v2",
    M3 = "v3",
    M4 = "v4",
    M5 = "v5",
    M6 = "v6"
} En07F2;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En07F2');
      assert.strictEqual(objList[0].alias, 'En07F2');
      assert.strictEqual(objList[0].members.length, 7);
      assert.strictEqual(objList[0].members[0], 'M0="v0"');
      assert.strictEqual(objList[0].members[1], 'M1="v1"');
      assert.strictEqual(objList[0].members[2], 'M2="v2"');
      assert.strictEqual(objList[0].members[3], 'M3="v3"');
      assert.strictEqual(objList[0].members[4], 'M4="v4"');
      assert.strictEqual(objList[0].members[5], 'M5="v5"');
      assert.strictEqual(objList[0].members[6], 'M6="v6"');
          } catch (err) {
      assert.fail(`c_enum_0050 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0051
  * @tc.name parseEnum_c_ext_0051
  * @tc.desc h2dts parseEnum：扩充-矩阵：7 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0051', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0x1,
    M1 = 0x2,
    M2 = 0x3,
    M3 = 0x4,
    M4 = 0x5,
    M5 = 0x6,
    M6 = 0x7
} En07F3;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En07F3');
      assert.strictEqual(objList[0].alias, 'En07F3');
      assert.strictEqual(objList[0].members.length, 7);
      assert.strictEqual(objList[0].members[0], 'M0=0x1');
      assert.strictEqual(objList[0].members[1], 'M1=0x2');
      assert.strictEqual(objList[0].members[2], 'M2=0x3');
      assert.strictEqual(objList[0].members[3], 'M3=0x4');
      assert.strictEqual(objList[0].members[4], 'M4=0x5');
      assert.strictEqual(objList[0].members[5], 'M5=0x6');
      assert.strictEqual(objList[0].members[6], 'M6=0x7');
          } catch (err) {
      assert.fail(`c_enum_0051 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0052
  * @tc.name parseEnum_c_ext_0052
  * @tc.desc h2dts parseEnum：扩充-矩阵：8 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0052', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0,
    M1,
    M2,
    M3,
    M4,
    M5,
    M6,
    M7
} En08F0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En08F0');
      assert.strictEqual(objList[0].alias, 'En08F0');
      assert.strictEqual(objList[0].members.length, 8);
      assert.strictEqual(objList[0].members[0], 'M0');
      assert.strictEqual(objList[0].members[1], 'M1');
      assert.strictEqual(objList[0].members[2], 'M2');
      assert.strictEqual(objList[0].members[3], 'M3');
      assert.strictEqual(objList[0].members[4], 'M4');
      assert.strictEqual(objList[0].members[5], 'M5');
      assert.strictEqual(objList[0].members[6], 'M6');
      assert.strictEqual(objList[0].members[7], 'M7');
          } catch (err) {
      assert.fail(`c_enum_0052 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0053
  * @tc.name parseEnum_c_ext_0053
  * @tc.desc h2dts parseEnum：扩充-矩阵：8 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0053', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0,
    M1 = 1,
    M2 = 2,
    M3 = 3,
    M4 = 4,
    M5 = 5,
    M6 = 6,
    M7 = 7
} En08F1;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En08F1');
      assert.strictEqual(objList[0].alias, 'En08F1');
      assert.strictEqual(objList[0].members.length, 8);
      assert.strictEqual(objList[0].members[0], 'M0=0');
      assert.strictEqual(objList[0].members[1], 'M1=1');
      assert.strictEqual(objList[0].members[2], 'M2=2');
      assert.strictEqual(objList[0].members[3], 'M3=3');
      assert.strictEqual(objList[0].members[4], 'M4=4');
      assert.strictEqual(objList[0].members[5], 'M5=5');
      assert.strictEqual(objList[0].members[6], 'M6=6');
      assert.strictEqual(objList[0].members[7], 'M7=7');
          } catch (err) {
      assert.fail(`c_enum_0053 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0054
  * @tc.name parseEnum_c_ext_0054
  * @tc.desc h2dts parseEnum：扩充-矩阵：8 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0054', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = "v0",
    M1 = "v1",
    M2 = "v2",
    M3 = "v3",
    M4 = "v4",
    M5 = "v5",
    M6 = "v6",
    M7 = "v7"
} En08F2;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En08F2');
      assert.strictEqual(objList[0].alias, 'En08F2');
      assert.strictEqual(objList[0].members.length, 8);
      assert.strictEqual(objList[0].members[0], 'M0="v0"');
      assert.strictEqual(objList[0].members[1], 'M1="v1"');
      assert.strictEqual(objList[0].members[2], 'M2="v2"');
      assert.strictEqual(objList[0].members[3], 'M3="v3"');
      assert.strictEqual(objList[0].members[4], 'M4="v4"');
      assert.strictEqual(objList[0].members[5], 'M5="v5"');
      assert.strictEqual(objList[0].members[6], 'M6="v6"');
      assert.strictEqual(objList[0].members[7], 'M7="v7"');
          } catch (err) {
      assert.fail(`c_enum_0054 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0055
  * @tc.name parseEnum_c_ext_0055
  * @tc.desc h2dts parseEnum：扩充-矩阵：8 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0055', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0x1,
    M1 = 0x2,
    M2 = 0x3,
    M3 = 0x4,
    M4 = 0x5,
    M5 = 0x6,
    M6 = 0x7,
    M7 = 0x8
} En08F3;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En08F3');
      assert.strictEqual(objList[0].alias, 'En08F3');
      assert.strictEqual(objList[0].members.length, 8);
      assert.strictEqual(objList[0].members[0], 'M0=0x1');
      assert.strictEqual(objList[0].members[1], 'M1=0x2');
      assert.strictEqual(objList[0].members[2], 'M2=0x3');
      assert.strictEqual(objList[0].members[3], 'M3=0x4');
      assert.strictEqual(objList[0].members[4], 'M4=0x5');
      assert.strictEqual(objList[0].members[5], 'M5=0x6');
      assert.strictEqual(objList[0].members[6], 'M6=0x7');
      assert.strictEqual(objList[0].members[7], 'M7=0x8');
          } catch (err) {
      assert.fail(`c_enum_0055 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0056
  * @tc.name parseEnum_c_ext_0056
  * @tc.desc h2dts parseEnum：扩充-矩阵：9 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0056', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0,
    M1,
    M2,
    M3,
    M4,
    M5,
    M6,
    M7,
    M8
} En09F0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En09F0');
      assert.strictEqual(objList[0].alias, 'En09F0');
      assert.strictEqual(objList[0].members.length, 9);
      assert.strictEqual(objList[0].members[0], 'M0');
      assert.strictEqual(objList[0].members[1], 'M1');
      assert.strictEqual(objList[0].members[2], 'M2');
      assert.strictEqual(objList[0].members[3], 'M3');
      assert.strictEqual(objList[0].members[4], 'M4');
      assert.strictEqual(objList[0].members[5], 'M5');
      assert.strictEqual(objList[0].members[6], 'M6');
      assert.strictEqual(objList[0].members[7], 'M7');
      assert.strictEqual(objList[0].members[8], 'M8');
          } catch (err) {
      assert.fail(`c_enum_0056 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0057
  * @tc.name parseEnum_c_ext_0057
  * @tc.desc h2dts parseEnum：扩充-矩阵：9 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0057', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0,
    M1 = 1,
    M2 = 2,
    M3 = 3,
    M4 = 4,
    M5 = 5,
    M6 = 6,
    M7 = 7,
    M8 = 8
} En09F1;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En09F1');
      assert.strictEqual(objList[0].alias, 'En09F1');
      assert.strictEqual(objList[0].members.length, 9);
      assert.strictEqual(objList[0].members[0], 'M0=0');
      assert.strictEqual(objList[0].members[1], 'M1=1');
      assert.strictEqual(objList[0].members[2], 'M2=2');
      assert.strictEqual(objList[0].members[3], 'M3=3');
      assert.strictEqual(objList[0].members[4], 'M4=4');
      assert.strictEqual(objList[0].members[5], 'M5=5');
      assert.strictEqual(objList[0].members[6], 'M6=6');
      assert.strictEqual(objList[0].members[7], 'M7=7');
      assert.strictEqual(objList[0].members[8], 'M8=8');
          } catch (err) {
      assert.fail(`c_enum_0057 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0058
  * @tc.name parseEnum_c_ext_0058
  * @tc.desc h2dts parseEnum：扩充-矩阵：9 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0058', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = "v0",
    M1 = "v1",
    M2 = "v2",
    M3 = "v3",
    M4 = "v4",
    M5 = "v5",
    M6 = "v6",
    M7 = "v7",
    M8 = "x8"
} En09F2;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En09F2');
      assert.strictEqual(objList[0].alias, 'En09F2');
      assert.strictEqual(objList[0].members.length, 9);
      assert.strictEqual(objList[0].members[0], 'M0="v0"');
      assert.strictEqual(objList[0].members[1], 'M1="v1"');
      assert.strictEqual(objList[0].members[2], 'M2="v2"');
      assert.strictEqual(objList[0].members[3], 'M3="v3"');
      assert.strictEqual(objList[0].members[4], 'M4="v4"');
      assert.strictEqual(objList[0].members[5], 'M5="v5"');
      assert.strictEqual(objList[0].members[6], 'M6="v6"');
      assert.strictEqual(objList[0].members[7], 'M7="v7"');
      assert.strictEqual(objList[0].members[8], 'M8="x8"');
          } catch (err) {
      assert.fail(`c_enum_0058 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0059
  * @tc.name parseEnum_c_ext_0059
  * @tc.desc h2dts parseEnum：扩充-矩阵：9 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0059', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0x1,
    M1 = 0x2,
    M2 = 0x3,
    M3 = 0x4,
    M4 = 0x5,
    M5 = 0x6,
    M6 = 0x7,
    M7 = 0x8,
    M8 = 0x9
} En09F3;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En09F3');
      assert.strictEqual(objList[0].alias, 'En09F3');
      assert.strictEqual(objList[0].members.length, 9);
      assert.strictEqual(objList[0].members[0], 'M0=0x1');
      assert.strictEqual(objList[0].members[1], 'M1=0x2');
      assert.strictEqual(objList[0].members[2], 'M2=0x3');
      assert.strictEqual(objList[0].members[3], 'M3=0x4');
      assert.strictEqual(objList[0].members[4], 'M4=0x5');
      assert.strictEqual(objList[0].members[5], 'M5=0x6');
      assert.strictEqual(objList[0].members[6], 'M6=0x7');
      assert.strictEqual(objList[0].members[7], 'M7=0x8');
      assert.strictEqual(objList[0].members[8], 'M8=0x9');
          } catch (err) {
      assert.fail(`c_enum_0059 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0060
  * @tc.name parseEnum_c_ext_0060
  * @tc.desc h2dts parseEnum：扩充-矩阵：10 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0060', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0,
    M1,
    M2,
    M3,
    M4,
    M5,
    M6,
    M7,
    M8,
    M9
} En10F0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En10F0');
      assert.strictEqual(objList[0].alias, 'En10F0');
      assert.strictEqual(objList[0].members.length, 10);
      assert.strictEqual(objList[0].members[0], 'M0');
      assert.strictEqual(objList[0].members[1], 'M1');
      assert.strictEqual(objList[0].members[2], 'M2');
      assert.strictEqual(objList[0].members[3], 'M3');
      assert.strictEqual(objList[0].members[4], 'M4');
      assert.strictEqual(objList[0].members[5], 'M5');
      assert.strictEqual(objList[0].members[6], 'M6');
      assert.strictEqual(objList[0].members[7], 'M7');
      assert.strictEqual(objList[0].members[8], 'M8');
      assert.strictEqual(objList[0].members[9], 'M9');
          } catch (err) {
      assert.fail(`c_enum_0060 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0061
  * @tc.name parseEnum_c_ext_0061
  * @tc.desc h2dts parseEnum：扩充-矩阵：10 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0061', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0,
    M1 = 1,
    M2 = 2,
    M3 = 3,
    M4 = 4,
    M5 = 5,
    M6 = 6,
    M7 = 7,
    M8 = 8,
    M9 = 9
} En10F1;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En10F1');
      assert.strictEqual(objList[0].alias, 'En10F1');
      assert.strictEqual(objList[0].members.length, 10);
      assert.strictEqual(objList[0].members[0], 'M0=0');
      assert.strictEqual(objList[0].members[1], 'M1=1');
      assert.strictEqual(objList[0].members[2], 'M2=2');
      assert.strictEqual(objList[0].members[3], 'M3=3');
      assert.strictEqual(objList[0].members[4], 'M4=4');
      assert.strictEqual(objList[0].members[5], 'M5=5');
      assert.strictEqual(objList[0].members[6], 'M6=6');
      assert.strictEqual(objList[0].members[7], 'M7=7');
      assert.strictEqual(objList[0].members[8], 'M8=8');
      assert.strictEqual(objList[0].members[9], 'M9=9');
          } catch (err) {
      assert.fail(`c_enum_0061 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0062
  * @tc.name parseEnum_c_ext_0062
  * @tc.desc h2dts parseEnum：扩充-矩阵：10 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0062', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = "v0",
    M1 = "v1",
    M2 = "v2",
    M3 = "v3",
    M4 = "v4",
    M5 = "v5",
    M6 = "v6",
    M7 = "v7",
    M8 = "x8",
    M9 = "v9"
} En10F2;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En10F2');
      assert.strictEqual(objList[0].alias, 'En10F2');
      assert.strictEqual(objList[0].members.length, 10);
      assert.strictEqual(objList[0].members[0], 'M0="v0"');
      assert.strictEqual(objList[0].members[1], 'M1="v1"');
      assert.strictEqual(objList[0].members[2], 'M2="v2"');
      assert.strictEqual(objList[0].members[3], 'M3="v3"');
      assert.strictEqual(objList[0].members[4], 'M4="v4"');
      assert.strictEqual(objList[0].members[5], 'M5="v5"');
      assert.strictEqual(objList[0].members[6], 'M6="v6"');
      assert.strictEqual(objList[0].members[7], 'M7="v7"');
      assert.strictEqual(objList[0].members[8], 'M8="x8"');
      assert.strictEqual(objList[0].members[9], 'M9="v9"');
          } catch (err) {
      assert.fail(`c_enum_0062 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0063
  * @tc.name parseEnum_c_ext_0063
  * @tc.desc h2dts parseEnum：扩充-矩阵：10 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0063', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0x1,
    M1 = 0x2,
    M2 = 0x3,
    M3 = 0x4,
    M4 = 0x5,
    M5 = 0x6,
    M6 = 0x7,
    M7 = 0x8,
    M8 = 0x9,
    M9 = 0xA
} En10F3;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En10F3');
      assert.strictEqual(objList[0].alias, 'En10F3');
      assert.strictEqual(objList[0].members.length, 10);
      assert.strictEqual(objList[0].members[0], 'M0=0x1');
      assert.strictEqual(objList[0].members[1], 'M1=0x2');
      assert.strictEqual(objList[0].members[2], 'M2=0x3');
      assert.strictEqual(objList[0].members[3], 'M3=0x4');
      assert.strictEqual(objList[0].members[4], 'M4=0x5');
      assert.strictEqual(objList[0].members[5], 'M5=0x6');
      assert.strictEqual(objList[0].members[6], 'M6=0x7');
      assert.strictEqual(objList[0].members[7], 'M7=0x8');
      assert.strictEqual(objList[0].members[8], 'M8=0x9');
      assert.strictEqual(objList[0].members[9], 'M9=0xA');
          } catch (err) {
      assert.fail(`c_enum_0063 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0064
  * @tc.name parseEnum_c_ext_0064
  * @tc.desc h2dts parseEnum：扩充-矩阵：11 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0064', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0,
    M1,
    M2,
    M3,
    M4,
    M5,
    M6,
    M7,
    M8,
    M9,
    M10
} En11F0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En11F0');
      assert.strictEqual(objList[0].alias, 'En11F0');
      assert.strictEqual(objList[0].members.length, 11);
      assert.strictEqual(objList[0].members[0], 'M0');
      assert.strictEqual(objList[0].members[1], 'M1');
      assert.strictEqual(objList[0].members[2], 'M2');
      assert.strictEqual(objList[0].members[3], 'M3');
      assert.strictEqual(objList[0].members[4], 'M4');
      assert.strictEqual(objList[0].members[5], 'M5');
      assert.strictEqual(objList[0].members[6], 'M6');
      assert.strictEqual(objList[0].members[7], 'M7');
      assert.strictEqual(objList[0].members[8], 'M8');
      assert.strictEqual(objList[0].members[9], 'M9');
      assert.strictEqual(objList[0].members[10], 'M10');
          } catch (err) {
      assert.fail(`c_enum_0064 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0065
  * @tc.name parseEnum_c_ext_0065
  * @tc.desc h2dts parseEnum：扩充-矩阵：11 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0065', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0,
    M1 = 1,
    M2 = 2,
    M3 = 3,
    M4 = 4,
    M5 = 5,
    M6 = 6,
    M7 = 7,
    M8 = 8,
    M9 = 9,
    M10 = 10
} En11F1;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En11F1');
      assert.strictEqual(objList[0].alias, 'En11F1');
      assert.strictEqual(objList[0].members.length, 11);
      assert.strictEqual(objList[0].members[0], 'M0=0');
      assert.strictEqual(objList[0].members[1], 'M1=1');
      assert.strictEqual(objList[0].members[2], 'M2=2');
      assert.strictEqual(objList[0].members[3], 'M3=3');
      assert.strictEqual(objList[0].members[4], 'M4=4');
      assert.strictEqual(objList[0].members[5], 'M5=5');
      assert.strictEqual(objList[0].members[6], 'M6=6');
      assert.strictEqual(objList[0].members[7], 'M7=7');
      assert.strictEqual(objList[0].members[8], 'M8=8');
      assert.strictEqual(objList[0].members[9], 'M9=9');
      assert.strictEqual(objList[0].members[10], 'M10=10');
          } catch (err) {
      assert.fail(`c_enum_0065 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0066
  * @tc.name parseEnum_c_ext_0066
  * @tc.desc h2dts parseEnum：扩充-矩阵：11 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0066', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = "v0",
    M1 = "v1",
    M2 = "v2",
    M3 = "v3",
    M4 = "v4",
    M5 = "v5",
    M6 = "v6",
    M7 = "v7",
    M8 = "x8",
    M9 = "v9",
    M10 = "v10"
} En11F2;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En11F2');
      assert.strictEqual(objList[0].alias, 'En11F2');
      assert.strictEqual(objList[0].members.length, 11);
      assert.strictEqual(objList[0].members[0], 'M0="v0"');
      assert.strictEqual(objList[0].members[1], 'M1="v1"');
      assert.strictEqual(objList[0].members[2], 'M2="v2"');
      assert.strictEqual(objList[0].members[3], 'M3="v3"');
      assert.strictEqual(objList[0].members[4], 'M4="v4"');
      assert.strictEqual(objList[0].members[5], 'M5="v5"');
      assert.strictEqual(objList[0].members[6], 'M6="v6"');
      assert.strictEqual(objList[0].members[7], 'M7="v7"');
      assert.strictEqual(objList[0].members[8], 'M8="x8"');
      assert.strictEqual(objList[0].members[9], 'M9="v9"');
      assert.strictEqual(objList[0].members[10], 'M10="v10"');
          } catch (err) {
      assert.fail(`c_enum_0066 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0067
  * @tc.name parseEnum_c_ext_0067
  * @tc.desc h2dts parseEnum：扩充-矩阵：11 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0067', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0 = 0x1,
    M1 = 0x2,
    M2 = 0x3,
    M3 = 0x4,
    M4 = 0x5,
    M5 = 0x6,
    M6 = 0x7,
    M7 = 0x8,
    M8 = 0x9,
    M9 = 0xA,
    M10 = 0xB
} En11F3;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En11F3');
      assert.strictEqual(objList[0].alias, 'En11F3');
      assert.strictEqual(objList[0].members.length, 11);
      assert.strictEqual(objList[0].members[0], 'M0=0x1');
      assert.strictEqual(objList[0].members[1], 'M1=0x2');
      assert.strictEqual(objList[0].members[2], 'M2=0x3');
      assert.strictEqual(objList[0].members[3], 'M3=0x4');
      assert.strictEqual(objList[0].members[4], 'M4=0x5');
      assert.strictEqual(objList[0].members[5], 'M5=0x6');
      assert.strictEqual(objList[0].members[6], 'M6=0x7');
      assert.strictEqual(objList[0].members[7], 'M7=0x8');
      assert.strictEqual(objList[0].members[8], 'M8=0x9');
      assert.strictEqual(objList[0].members[9], 'M9=0xA');
      assert.strictEqual(objList[0].members[10], 'M10=0xB');
          } catch (err) {
      assert.fail(`c_enum_0067 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0068
  * @tc.name parseEnum_c_ext_0068
  * @tc.desc h2dts parseEnum：扩充-矩阵：12 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0068', () => {
    try {
      let objList: any;
            objList = parsec.parseEnum(`typedef enum {
    M0,
    M1,
    M2,
    M3,
    M4,
    M5,
    M6,
    M7,
    M8,
    M9,
    M10,
    M11
} En12F0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En12F0');
      assert.strictEqual(objList[0].alias, 'En12F0');
      assert.strictEqual(objList[0].members.length, 12);
      assert.strictEqual(objList[0].members[0], 'M0');
      assert.strictEqual(objList[0].members[1], 'M1');
      assert.strictEqual(objList[0].members[2], 'M2');
      assert.strictEqual(objList[0].members[3], 'M3');
      assert.strictEqual(objList[0].members[4], 'M4');
      assert.strictEqual(objList[0].members[5], 'M5');
      assert.strictEqual(objList[0].members[6], 'M6');
      assert.strictEqual(objList[0].members[7], 'M7');
      assert.strictEqual(objList[0].members[8], 'M8');
      assert.strictEqual(objList[0].members[9], 'M9');
      assert.strictEqual(objList[0].members[10], 'M10');
      assert.strictEqual(objList[0].members[11], 'M11');
          } catch (err) {
      assert.fail(`c_enum_0068 执行异常: ${String(err)}`);
    }
  });

});
