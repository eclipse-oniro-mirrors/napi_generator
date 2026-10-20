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

suite('Parse_Enum_C_Suite_Ext05', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Enum_C_Suite_Ext05');
  /**
  * @tc.number c_enum_0123
  * @tc.name parseEnum_c_ext_0123
  * @tc.desc h2dts parseEnum：扩充-矩阵：25 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0123', () => {
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
    M10 = 0xB,
    M11 = 0xC,
    M12 = 0xD,
    M13 = 0xE,
    M14 = 0xF,
    M15 = 0x10,
    M16 = 0x11,
    M17 = 0x12,
    M18 = 0x13,
    M19 = 0x14,
    M20 = 0x15,
    M21 = 0x16,
    M22 = 0x17,
    M23 = 0x18,
    M24 = 0x19
} En25F3;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En25F3');
      assert.strictEqual(objList[0].alias, 'En25F3');
      assert.strictEqual(objList[0].members.length, 25);
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
      assert.strictEqual(objList[0].members[11], 'M11=0xC');
      assert.strictEqual(objList[0].members[12], 'M12=0xD');
      assert.strictEqual(objList[0].members[13], 'M13=0xE');
      assert.strictEqual(objList[0].members[14], 'M14=0xF');
      assert.strictEqual(objList[0].members[15], 'M15=0x10');
      assert.strictEqual(objList[0].members[16], 'M16=0x11');
      assert.strictEqual(objList[0].members[17], 'M17=0x12');
      assert.strictEqual(objList[0].members[18], 'M18=0x13');
      assert.strictEqual(objList[0].members[19], 'M19=0x14');
      assert.strictEqual(objList[0].members[20], 'M20=0x15');
      assert.strictEqual(objList[0].members[21], 'M21=0x16');
      assert.strictEqual(objList[0].members[22], 'M22=0x17');
      assert.strictEqual(objList[0].members[23], 'M23=0x18');
      assert.strictEqual(objList[0].members[24], 'M24=0x19');
          } catch (err) {
      assert.fail(`c_enum_0123 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0124
  * @tc.name parseEnum_c_ext_0124
  * @tc.desc h2dts parseEnum：扩充-矩阵：26 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0124', () => {
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
    M11,
    M12,
    M13,
    M14,
    M15,
    M16,
    M17,
    M18,
    M19,
    M20,
    M21,
    M22,
    M23,
    M24,
    M25
} En26F0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En26F0');
      assert.strictEqual(objList[0].alias, 'En26F0');
      assert.strictEqual(objList[0].members.length, 26);
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
      assert.strictEqual(objList[0].members[12], 'M12');
      assert.strictEqual(objList[0].members[13], 'M13');
      assert.strictEqual(objList[0].members[14], 'M14');
      assert.strictEqual(objList[0].members[15], 'M15');
      assert.strictEqual(objList[0].members[16], 'M16');
      assert.strictEqual(objList[0].members[17], 'M17');
      assert.strictEqual(objList[0].members[18], 'M18');
      assert.strictEqual(objList[0].members[19], 'M19');
      assert.strictEqual(objList[0].members[20], 'M20');
      assert.strictEqual(objList[0].members[21], 'M21');
      assert.strictEqual(objList[0].members[22], 'M22');
      assert.strictEqual(objList[0].members[23], 'M23');
      assert.strictEqual(objList[0].members[24], 'M24');
      assert.strictEqual(objList[0].members[25], 'M25');
          } catch (err) {
      assert.fail(`c_enum_0124 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0125
  * @tc.name parseEnum_c_ext_0125
  * @tc.desc h2dts parseEnum：扩充-矩阵：26 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0125', () => {
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
    M10 = 10,
    M11 = 11,
    M12 = 12,
    M13 = 13,
    M14 = 14,
    M15 = 15,
    M16 = 16,
    M17 = 17,
    M18 = 18,
    M19 = 19,
    M20 = 20,
    M21 = 21,
    M22 = 22,
    M23 = 23,
    M24 = 24,
    M25 = 25
} En26F1;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En26F1');
      assert.strictEqual(objList[0].alias, 'En26F1');
      assert.strictEqual(objList[0].members.length, 26);
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
      assert.strictEqual(objList[0].members[11], 'M11=11');
      assert.strictEqual(objList[0].members[12], 'M12=12');
      assert.strictEqual(objList[0].members[13], 'M13=13');
      assert.strictEqual(objList[0].members[14], 'M14=14');
      assert.strictEqual(objList[0].members[15], 'M15=15');
      assert.strictEqual(objList[0].members[16], 'M16=16');
      assert.strictEqual(objList[0].members[17], 'M17=17');
      assert.strictEqual(objList[0].members[18], 'M18=18');
      assert.strictEqual(objList[0].members[19], 'M19=19');
      assert.strictEqual(objList[0].members[20], 'M20=20');
      assert.strictEqual(objList[0].members[21], 'M21=21');
      assert.strictEqual(objList[0].members[22], 'M22=22');
      assert.strictEqual(objList[0].members[23], 'M23=23');
      assert.strictEqual(objList[0].members[24], 'M24=24');
      assert.strictEqual(objList[0].members[25], 'M25=25');
          } catch (err) {
      assert.fail(`c_enum_0125 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0126
  * @tc.name parseEnum_c_ext_0126
  * @tc.desc h2dts parseEnum：扩充-矩阵：26 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0126', () => {
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
    M10 = "v10",
    M11 = "v11",
    M12 = "v12",
    M13 = "v13",
    M14 = "v14",
    M15 = "v15",
    M16 = "v16",
    M17 = "v17",
    M18 = "v18",
    M19 = "v19",
    M20 = "v20",
    M21 = "v21",
    M22 = "v22",
    M23 = "v23",
    M24 = "v24",
    M25 = "v25"
} En26F2;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En26F2');
      assert.strictEqual(objList[0].alias, 'En26F2');
      assert.strictEqual(objList[0].members.length, 26);
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
      assert.strictEqual(objList[0].members[11], 'M11="v11"');
      assert.strictEqual(objList[0].members[12], 'M12="v12"');
      assert.strictEqual(objList[0].members[13], 'M13="v13"');
      assert.strictEqual(objList[0].members[14], 'M14="v14"');
      assert.strictEqual(objList[0].members[15], 'M15="v15"');
      assert.strictEqual(objList[0].members[16], 'M16="v16"');
      assert.strictEqual(objList[0].members[17], 'M17="v17"');
      assert.strictEqual(objList[0].members[18], 'M18="v18"');
      assert.strictEqual(objList[0].members[19], 'M19="v19"');
      assert.strictEqual(objList[0].members[20], 'M20="v20"');
      assert.strictEqual(objList[0].members[21], 'M21="v21"');
      assert.strictEqual(objList[0].members[22], 'M22="v22"');
      assert.strictEqual(objList[0].members[23], 'M23="v23"');
      assert.strictEqual(objList[0].members[24], 'M24="v24"');
      assert.strictEqual(objList[0].members[25], 'M25="v25"');
          } catch (err) {
      assert.fail(`c_enum_0126 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0127
  * @tc.name parseEnum_c_ext_0127
  * @tc.desc h2dts parseEnum：扩充-矩阵：26 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0127', () => {
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
    M10 = 0xB,
    M11 = 0xC,
    M12 = 0xD,
    M13 = 0xE,
    M14 = 0xF,
    M15 = 0x10,
    M16 = 0x11,
    M17 = 0x12,
    M18 = 0x13,
    M19 = 0x14,
    M20 = 0x15,
    M21 = 0x16,
    M22 = 0x17,
    M23 = 0x18,
    M24 = 0x19,
    M25 = 0x1A
} En26F3;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En26F3');
      assert.strictEqual(objList[0].alias, 'En26F3');
      assert.strictEqual(objList[0].members.length, 26);
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
      assert.strictEqual(objList[0].members[11], 'M11=0xC');
      assert.strictEqual(objList[0].members[12], 'M12=0xD');
      assert.strictEqual(objList[0].members[13], 'M13=0xE');
      assert.strictEqual(objList[0].members[14], 'M14=0xF');
      assert.strictEqual(objList[0].members[15], 'M15=0x10');
      assert.strictEqual(objList[0].members[16], 'M16=0x11');
      assert.strictEqual(objList[0].members[17], 'M17=0x12');
      assert.strictEqual(objList[0].members[18], 'M18=0x13');
      assert.strictEqual(objList[0].members[19], 'M19=0x14');
      assert.strictEqual(objList[0].members[20], 'M20=0x15');
      assert.strictEqual(objList[0].members[21], 'M21=0x16');
      assert.strictEqual(objList[0].members[22], 'M22=0x17');
      assert.strictEqual(objList[0].members[23], 'M23=0x18');
      assert.strictEqual(objList[0].members[24], 'M24=0x19');
      assert.strictEqual(objList[0].members[25], 'M25=0x1A');
          } catch (err) {
      assert.fail(`c_enum_0127 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0128
  * @tc.name parseEnum_c_ext_0128
  * @tc.desc h2dts parseEnum：扩充-矩阵：27 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0128', () => {
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
    M11,
    M12,
    M13,
    M14,
    M15,
    M16,
    M17,
    M18,
    M19,
    M20,
    M21,
    M22,
    M23,
    M24,
    M25,
    M26
} En27F0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En27F0');
      assert.strictEqual(objList[0].alias, 'En27F0');
      assert.strictEqual(objList[0].members.length, 27);
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
      assert.strictEqual(objList[0].members[12], 'M12');
      assert.strictEqual(objList[0].members[13], 'M13');
      assert.strictEqual(objList[0].members[14], 'M14');
      assert.strictEqual(objList[0].members[15], 'M15');
      assert.strictEqual(objList[0].members[16], 'M16');
      assert.strictEqual(objList[0].members[17], 'M17');
      assert.strictEqual(objList[0].members[18], 'M18');
      assert.strictEqual(objList[0].members[19], 'M19');
      assert.strictEqual(objList[0].members[20], 'M20');
      assert.strictEqual(objList[0].members[21], 'M21');
      assert.strictEqual(objList[0].members[22], 'M22');
      assert.strictEqual(objList[0].members[23], 'M23');
      assert.strictEqual(objList[0].members[24], 'M24');
      assert.strictEqual(objList[0].members[25], 'M25');
      assert.strictEqual(objList[0].members[26], 'M26');
          } catch (err) {
      assert.fail(`c_enum_0128 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0129
  * @tc.name parseEnum_c_ext_0129
  * @tc.desc h2dts parseEnum：扩充-矩阵：27 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0129', () => {
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
    M10 = 10,
    M11 = 11,
    M12 = 12,
    M13 = 13,
    M14 = 14,
    M15 = 15,
    M16 = 16,
    M17 = 17,
    M18 = 18,
    M19 = 19,
    M20 = 20,
    M21 = 21,
    M22 = 22,
    M23 = 23,
    M24 = 24,
    M25 = 25,
    M26 = 26
} En27F1;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En27F1');
      assert.strictEqual(objList[0].alias, 'En27F1');
      assert.strictEqual(objList[0].members.length, 27);
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
      assert.strictEqual(objList[0].members[11], 'M11=11');
      assert.strictEqual(objList[0].members[12], 'M12=12');
      assert.strictEqual(objList[0].members[13], 'M13=13');
      assert.strictEqual(objList[0].members[14], 'M14=14');
      assert.strictEqual(objList[0].members[15], 'M15=15');
      assert.strictEqual(objList[0].members[16], 'M16=16');
      assert.strictEqual(objList[0].members[17], 'M17=17');
      assert.strictEqual(objList[0].members[18], 'M18=18');
      assert.strictEqual(objList[0].members[19], 'M19=19');
      assert.strictEqual(objList[0].members[20], 'M20=20');
      assert.strictEqual(objList[0].members[21], 'M21=21');
      assert.strictEqual(objList[0].members[22], 'M22=22');
      assert.strictEqual(objList[0].members[23], 'M23=23');
      assert.strictEqual(objList[0].members[24], 'M24=24');
      assert.strictEqual(objList[0].members[25], 'M25=25');
      assert.strictEqual(objList[0].members[26], 'M26=26');
          } catch (err) {
      assert.fail(`c_enum_0129 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0130
  * @tc.name parseEnum_c_ext_0130
  * @tc.desc h2dts parseEnum：扩充-矩阵：27 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0130', () => {
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
    M10 = "v10",
    M11 = "v11",
    M12 = "v12",
    M13 = "v13",
    M14 = "v14",
    M15 = "v15",
    M16 = "v16",
    M17 = "v17",
    M18 = "v18",
    M19 = "v19",
    M20 = "v20",
    M21 = "v21",
    M22 = "v22",
    M23 = "v23",
    M24 = "v24",
    M25 = "v25",
    M26 = "v26"
} En27F2;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En27F2');
      assert.strictEqual(objList[0].alias, 'En27F2');
      assert.strictEqual(objList[0].members.length, 27);
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
      assert.strictEqual(objList[0].members[11], 'M11="v11"');
      assert.strictEqual(objList[0].members[12], 'M12="v12"');
      assert.strictEqual(objList[0].members[13], 'M13="v13"');
      assert.strictEqual(objList[0].members[14], 'M14="v14"');
      assert.strictEqual(objList[0].members[15], 'M15="v15"');
      assert.strictEqual(objList[0].members[16], 'M16="v16"');
      assert.strictEqual(objList[0].members[17], 'M17="v17"');
      assert.strictEqual(objList[0].members[18], 'M18="v18"');
      assert.strictEqual(objList[0].members[19], 'M19="v19"');
      assert.strictEqual(objList[0].members[20], 'M20="v20"');
      assert.strictEqual(objList[0].members[21], 'M21="v21"');
      assert.strictEqual(objList[0].members[22], 'M22="v22"');
      assert.strictEqual(objList[0].members[23], 'M23="v23"');
      assert.strictEqual(objList[0].members[24], 'M24="v24"');
      assert.strictEqual(objList[0].members[25], 'M25="v25"');
      assert.strictEqual(objList[0].members[26], 'M26="v26"');
          } catch (err) {
      assert.fail(`c_enum_0130 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0131
  * @tc.name parseEnum_c_ext_0131
  * @tc.desc h2dts parseEnum：扩充-矩阵：27 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0131', () => {
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
    M10 = 0xB,
    M11 = 0xC,
    M12 = 0xD,
    M13 = 0xE,
    M14 = 0xF,
    M15 = 0x10,
    M16 = 0x11,
    M17 = 0x12,
    M18 = 0x13,
    M19 = 0x14,
    M20 = 0x15,
    M21 = 0x16,
    M22 = 0x17,
    M23 = 0x18,
    M24 = 0x19,
    M25 = 0x1A,
    M26 = 0x1B
} En27F3;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En27F3');
      assert.strictEqual(objList[0].alias, 'En27F3');
      assert.strictEqual(objList[0].members.length, 27);
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
      assert.strictEqual(objList[0].members[11], 'M11=0xC');
      assert.strictEqual(objList[0].members[12], 'M12=0xD');
      assert.strictEqual(objList[0].members[13], 'M13=0xE');
      assert.strictEqual(objList[0].members[14], 'M14=0xF');
      assert.strictEqual(objList[0].members[15], 'M15=0x10');
      assert.strictEqual(objList[0].members[16], 'M16=0x11');
      assert.strictEqual(objList[0].members[17], 'M17=0x12');
      assert.strictEqual(objList[0].members[18], 'M18=0x13');
      assert.strictEqual(objList[0].members[19], 'M19=0x14');
      assert.strictEqual(objList[0].members[20], 'M20=0x15');
      assert.strictEqual(objList[0].members[21], 'M21=0x16');
      assert.strictEqual(objList[0].members[22], 'M22=0x17');
      assert.strictEqual(objList[0].members[23], 'M23=0x18');
      assert.strictEqual(objList[0].members[24], 'M24=0x19');
      assert.strictEqual(objList[0].members[25], 'M25=0x1A');
      assert.strictEqual(objList[0].members[26], 'M26=0x1B');
          } catch (err) {
      assert.fail(`c_enum_0131 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0132
  * @tc.name parseEnum_c_ext_0132
  * @tc.desc h2dts parseEnum：扩充-矩阵：28 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0132', () => {
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
    M11,
    M12,
    M13,
    M14,
    M15,
    M16,
    M17,
    M18,
    M19,
    M20,
    M21,
    M22,
    M23,
    M24,
    M25,
    M26,
    M27
} En28F0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En28F0');
      assert.strictEqual(objList[0].alias, 'En28F0');
      assert.strictEqual(objList[0].members.length, 28);
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
      assert.strictEqual(objList[0].members[12], 'M12');
      assert.strictEqual(objList[0].members[13], 'M13');
      assert.strictEqual(objList[0].members[14], 'M14');
      assert.strictEqual(objList[0].members[15], 'M15');
      assert.strictEqual(objList[0].members[16], 'M16');
      assert.strictEqual(objList[0].members[17], 'M17');
      assert.strictEqual(objList[0].members[18], 'M18');
      assert.strictEqual(objList[0].members[19], 'M19');
      assert.strictEqual(objList[0].members[20], 'M20');
      assert.strictEqual(objList[0].members[21], 'M21');
      assert.strictEqual(objList[0].members[22], 'M22');
      assert.strictEqual(objList[0].members[23], 'M23');
      assert.strictEqual(objList[0].members[24], 'M24');
      assert.strictEqual(objList[0].members[25], 'M25');
      assert.strictEqual(objList[0].members[26], 'M26');
      assert.strictEqual(objList[0].members[27], 'M27');
          } catch (err) {
      assert.fail(`c_enum_0132 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0133
  * @tc.name parseEnum_c_ext_0133
  * @tc.desc h2dts parseEnum：扩充-矩阵：28 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0133', () => {
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
    M10 = 10,
    M11 = 11,
    M12 = 12,
    M13 = 13,
    M14 = 14,
    M15 = 15,
    M16 = 16,
    M17 = 17,
    M18 = 18,
    M19 = 19,
    M20 = 20,
    M21 = 21,
    M22 = 22,
    M23 = 23,
    M24 = 24,
    M25 = 25,
    M26 = 26,
    M27 = 27
} En28F1;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En28F1');
      assert.strictEqual(objList[0].alias, 'En28F1');
      assert.strictEqual(objList[0].members.length, 28);
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
      assert.strictEqual(objList[0].members[11], 'M11=11');
      assert.strictEqual(objList[0].members[12], 'M12=12');
      assert.strictEqual(objList[0].members[13], 'M13=13');
      assert.strictEqual(objList[0].members[14], 'M14=14');
      assert.strictEqual(objList[0].members[15], 'M15=15');
      assert.strictEqual(objList[0].members[16], 'M16=16');
      assert.strictEqual(objList[0].members[17], 'M17=17');
      assert.strictEqual(objList[0].members[18], 'M18=18');
      assert.strictEqual(objList[0].members[19], 'M19=19');
      assert.strictEqual(objList[0].members[20], 'M20=20');
      assert.strictEqual(objList[0].members[21], 'M21=21');
      assert.strictEqual(objList[0].members[22], 'M22=22');
      assert.strictEqual(objList[0].members[23], 'M23=23');
      assert.strictEqual(objList[0].members[24], 'M24=24');
      assert.strictEqual(objList[0].members[25], 'M25=25');
      assert.strictEqual(objList[0].members[26], 'M26=26');
      assert.strictEqual(objList[0].members[27], 'M27=27');
          } catch (err) {
      assert.fail(`c_enum_0133 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0134
  * @tc.name parseEnum_c_ext_0134
  * @tc.desc h2dts parseEnum：扩充-矩阵：28 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0134', () => {
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
    M10 = "v10",
    M11 = "v11",
    M12 = "v12",
    M13 = "v13",
    M14 = "v14",
    M15 = "v15",
    M16 = "v16",
    M17 = "v17",
    M18 = "v18",
    M19 = "v19",
    M20 = "v20",
    M21 = "v21",
    M22 = "v22",
    M23 = "v23",
    M24 = "v24",
    M25 = "v25",
    M26 = "v26",
    M27 = "v27"
} En28F2;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En28F2');
      assert.strictEqual(objList[0].alias, 'En28F2');
      assert.strictEqual(objList[0].members.length, 28);
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
      assert.strictEqual(objList[0].members[11], 'M11="v11"');
      assert.strictEqual(objList[0].members[12], 'M12="v12"');
      assert.strictEqual(objList[0].members[13], 'M13="v13"');
      assert.strictEqual(objList[0].members[14], 'M14="v14"');
      assert.strictEqual(objList[0].members[15], 'M15="v15"');
      assert.strictEqual(objList[0].members[16], 'M16="v16"');
      assert.strictEqual(objList[0].members[17], 'M17="v17"');
      assert.strictEqual(objList[0].members[18], 'M18="v18"');
      assert.strictEqual(objList[0].members[19], 'M19="v19"');
      assert.strictEqual(objList[0].members[20], 'M20="v20"');
      assert.strictEqual(objList[0].members[21], 'M21="v21"');
      assert.strictEqual(objList[0].members[22], 'M22="v22"');
      assert.strictEqual(objList[0].members[23], 'M23="v23"');
      assert.strictEqual(objList[0].members[24], 'M24="v24"');
      assert.strictEqual(objList[0].members[25], 'M25="v25"');
      assert.strictEqual(objList[0].members[26], 'M26="v26"');
      assert.strictEqual(objList[0].members[27], 'M27="v27"');
          } catch (err) {
      assert.fail(`c_enum_0134 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0135
  * @tc.name parseEnum_c_ext_0135
  * @tc.desc h2dts parseEnum：扩充-矩阵：28 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0135', () => {
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
    M10 = 0xB,
    M11 = 0xC,
    M12 = 0xD,
    M13 = 0xE,
    M14 = 0xF,
    M15 = 0x10,
    M16 = 0x11,
    M17 = 0x12,
    M18 = 0x13,
    M19 = 0x14,
    M20 = 0x15,
    M21 = 0x16,
    M22 = 0x17,
    M23 = 0x18,
    M24 = 0x19,
    M25 = 0x1A,
    M26 = 0x1B,
    M27 = 0x1C
} En28F3;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En28F3');
      assert.strictEqual(objList[0].alias, 'En28F3');
      assert.strictEqual(objList[0].members.length, 28);
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
      assert.strictEqual(objList[0].members[11], 'M11=0xC');
      assert.strictEqual(objList[0].members[12], 'M12=0xD');
      assert.strictEqual(objList[0].members[13], 'M13=0xE');
      assert.strictEqual(objList[0].members[14], 'M14=0xF');
      assert.strictEqual(objList[0].members[15], 'M15=0x10');
      assert.strictEqual(objList[0].members[16], 'M16=0x11');
      assert.strictEqual(objList[0].members[17], 'M17=0x12');
      assert.strictEqual(objList[0].members[18], 'M18=0x13');
      assert.strictEqual(objList[0].members[19], 'M19=0x14');
      assert.strictEqual(objList[0].members[20], 'M20=0x15');
      assert.strictEqual(objList[0].members[21], 'M21=0x16');
      assert.strictEqual(objList[0].members[22], 'M22=0x17');
      assert.strictEqual(objList[0].members[23], 'M23=0x18');
      assert.strictEqual(objList[0].members[24], 'M24=0x19');
      assert.strictEqual(objList[0].members[25], 'M25=0x1A');
      assert.strictEqual(objList[0].members[26], 'M26=0x1B');
      assert.strictEqual(objList[0].members[27], 'M27=0x1C');
          } catch (err) {
      assert.fail(`c_enum_0135 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0136
  * @tc.name parseEnum_c_ext_0136
  * @tc.desc h2dts parseEnum：扩充-矩阵：29 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0136', () => {
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
    M11,
    M12,
    M13,
    M14,
    M15,
    M16,
    M17,
    M18,
    M19,
    M20,
    M21,
    M22,
    M23,
    M24,
    M25,
    M26,
    M27,
    M28
} En29F0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En29F0');
      assert.strictEqual(objList[0].alias, 'En29F0');
      assert.strictEqual(objList[0].members.length, 29);
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
      assert.strictEqual(objList[0].members[12], 'M12');
      assert.strictEqual(objList[0].members[13], 'M13');
      assert.strictEqual(objList[0].members[14], 'M14');
      assert.strictEqual(objList[0].members[15], 'M15');
      assert.strictEqual(objList[0].members[16], 'M16');
      assert.strictEqual(objList[0].members[17], 'M17');
      assert.strictEqual(objList[0].members[18], 'M18');
      assert.strictEqual(objList[0].members[19], 'M19');
      assert.strictEqual(objList[0].members[20], 'M20');
      assert.strictEqual(objList[0].members[21], 'M21');
      assert.strictEqual(objList[0].members[22], 'M22');
      assert.strictEqual(objList[0].members[23], 'M23');
      assert.strictEqual(objList[0].members[24], 'M24');
      assert.strictEqual(objList[0].members[25], 'M25');
      assert.strictEqual(objList[0].members[26], 'M26');
      assert.strictEqual(objList[0].members[27], 'M27');
      assert.strictEqual(objList[0].members[28], 'M28');
          } catch (err) {
      assert.fail(`c_enum_0136 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0137
  * @tc.name parseEnum_c_ext_0137
  * @tc.desc h2dts parseEnum：扩充-矩阵：29 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0137', () => {
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
    M10 = 10,
    M11 = 11,
    M12 = 12,
    M13 = 13,
    M14 = 14,
    M15 = 15,
    M16 = 16,
    M17 = 17,
    M18 = 18,
    M19 = 19,
    M20 = 20,
    M21 = 21,
    M22 = 22,
    M23 = 23,
    M24 = 24,
    M25 = 25,
    M26 = 26,
    M27 = 27,
    M28 = 28
} En29F1;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En29F1');
      assert.strictEqual(objList[0].alias, 'En29F1');
      assert.strictEqual(objList[0].members.length, 29);
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
      assert.strictEqual(objList[0].members[11], 'M11=11');
      assert.strictEqual(objList[0].members[12], 'M12=12');
      assert.strictEqual(objList[0].members[13], 'M13=13');
      assert.strictEqual(objList[0].members[14], 'M14=14');
      assert.strictEqual(objList[0].members[15], 'M15=15');
      assert.strictEqual(objList[0].members[16], 'M16=16');
      assert.strictEqual(objList[0].members[17], 'M17=17');
      assert.strictEqual(objList[0].members[18], 'M18=18');
      assert.strictEqual(objList[0].members[19], 'M19=19');
      assert.strictEqual(objList[0].members[20], 'M20=20');
      assert.strictEqual(objList[0].members[21], 'M21=21');
      assert.strictEqual(objList[0].members[22], 'M22=22');
      assert.strictEqual(objList[0].members[23], 'M23=23');
      assert.strictEqual(objList[0].members[24], 'M24=24');
      assert.strictEqual(objList[0].members[25], 'M25=25');
      assert.strictEqual(objList[0].members[26], 'M26=26');
      assert.strictEqual(objList[0].members[27], 'M27=27');
      assert.strictEqual(objList[0].members[28], 'M28=28');
          } catch (err) {
      assert.fail(`c_enum_0137 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0138
  * @tc.name parseEnum_c_ext_0138
  * @tc.desc h2dts parseEnum：扩充-矩阵：29 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0138', () => {
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
    M10 = "v10",
    M11 = "v11",
    M12 = "v12",
    M13 = "v13",
    M14 = "v14",
    M15 = "v15",
    M16 = "v16",
    M17 = "v17",
    M18 = "v18",
    M19 = "v19",
    M20 = "v20",
    M21 = "v21",
    M22 = "v22",
    M23 = "v23",
    M24 = "v24",
    M25 = "v25",
    M26 = "v26",
    M27 = "v27",
    M28 = "v28"
} En29F2;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En29F2');
      assert.strictEqual(objList[0].alias, 'En29F2');
      assert.strictEqual(objList[0].members.length, 29);
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
      assert.strictEqual(objList[0].members[11], 'M11="v11"');
      assert.strictEqual(objList[0].members[12], 'M12="v12"');
      assert.strictEqual(objList[0].members[13], 'M13="v13"');
      assert.strictEqual(objList[0].members[14], 'M14="v14"');
      assert.strictEqual(objList[0].members[15], 'M15="v15"');
      assert.strictEqual(objList[0].members[16], 'M16="v16"');
      assert.strictEqual(objList[0].members[17], 'M17="v17"');
      assert.strictEqual(objList[0].members[18], 'M18="v18"');
      assert.strictEqual(objList[0].members[19], 'M19="v19"');
      assert.strictEqual(objList[0].members[20], 'M20="v20"');
      assert.strictEqual(objList[0].members[21], 'M21="v21"');
      assert.strictEqual(objList[0].members[22], 'M22="v22"');
      assert.strictEqual(objList[0].members[23], 'M23="v23"');
      assert.strictEqual(objList[0].members[24], 'M24="v24"');
      assert.strictEqual(objList[0].members[25], 'M25="v25"');
      assert.strictEqual(objList[0].members[26], 'M26="v26"');
      assert.strictEqual(objList[0].members[27], 'M27="v27"');
      assert.strictEqual(objList[0].members[28], 'M28="v28"');
          } catch (err) {
      assert.fail(`c_enum_0138 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0139
  * @tc.name parseEnum_c_ext_0139
  * @tc.desc h2dts parseEnum：扩充-矩阵：29 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0139', () => {
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
    M10 = 0xB,
    M11 = 0xC,
    M12 = 0xD,
    M13 = 0xE,
    M14 = 0xF,
    M15 = 0x10,
    M16 = 0x11,
    M17 = 0x12,
    M18 = 0x13,
    M19 = 0x14,
    M20 = 0x15,
    M21 = 0x16,
    M22 = 0x17,
    M23 = 0x18,
    M24 = 0x19,
    M25 = 0x1A,
    M26 = 0x1B,
    M27 = 0x1C,
    M28 = 0x1D
} En29F3;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En29F3');
      assert.strictEqual(objList[0].alias, 'En29F3');
      assert.strictEqual(objList[0].members.length, 29);
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
      assert.strictEqual(objList[0].members[11], 'M11=0xC');
      assert.strictEqual(objList[0].members[12], 'M12=0xD');
      assert.strictEqual(objList[0].members[13], 'M13=0xE');
      assert.strictEqual(objList[0].members[14], 'M14=0xF');
      assert.strictEqual(objList[0].members[15], 'M15=0x10');
      assert.strictEqual(objList[0].members[16], 'M16=0x11');
      assert.strictEqual(objList[0].members[17], 'M17=0x12');
      assert.strictEqual(objList[0].members[18], 'M18=0x13');
      assert.strictEqual(objList[0].members[19], 'M19=0x14');
      assert.strictEqual(objList[0].members[20], 'M20=0x15');
      assert.strictEqual(objList[0].members[21], 'M21=0x16');
      assert.strictEqual(objList[0].members[22], 'M22=0x17');
      assert.strictEqual(objList[0].members[23], 'M23=0x18');
      assert.strictEqual(objList[0].members[24], 'M24=0x19');
      assert.strictEqual(objList[0].members[25], 'M25=0x1A');
      assert.strictEqual(objList[0].members[26], 'M26=0x1B');
      assert.strictEqual(objList[0].members[27], 'M27=0x1C');
      assert.strictEqual(objList[0].members[28], 'M28=0x1D');
          } catch (err) {
      assert.fail(`c_enum_0139 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0140
  * @tc.name parseEnum_c_ext_0140
  * @tc.desc h2dts parseEnum：扩充-矩阵：30 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0140', () => {
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
    M11,
    M12,
    M13,
    M14,
    M15,
    M16,
    M17,
    M18,
    M19,
    M20,
    M21,
    M22,
    M23,
    M24,
    M25,
    M26,
    M27,
    M28,
    M29
} En30F0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En30F0');
      assert.strictEqual(objList[0].alias, 'En30F0');
      assert.strictEqual(objList[0].members.length, 30);
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
      assert.strictEqual(objList[0].members[12], 'M12');
      assert.strictEqual(objList[0].members[13], 'M13');
      assert.strictEqual(objList[0].members[14], 'M14');
      assert.strictEqual(objList[0].members[15], 'M15');
      assert.strictEqual(objList[0].members[16], 'M16');
      assert.strictEqual(objList[0].members[17], 'M17');
      assert.strictEqual(objList[0].members[18], 'M18');
      assert.strictEqual(objList[0].members[19], 'M19');
      assert.strictEqual(objList[0].members[20], 'M20');
      assert.strictEqual(objList[0].members[21], 'M21');
      assert.strictEqual(objList[0].members[22], 'M22');
      assert.strictEqual(objList[0].members[23], 'M23');
      assert.strictEqual(objList[0].members[24], 'M24');
      assert.strictEqual(objList[0].members[25], 'M25');
      assert.strictEqual(objList[0].members[26], 'M26');
      assert.strictEqual(objList[0].members[27], 'M27');
      assert.strictEqual(objList[0].members[28], 'M28');
      assert.strictEqual(objList[0].members[29], 'M29');
          } catch (err) {
      assert.fail(`c_enum_0140 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0141
  * @tc.name parseEnum_c_ext_0141
  * @tc.desc h2dts parseEnum：扩充-矩阵：30 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0141', () => {
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
    M10 = 10,
    M11 = 11,
    M12 = 12,
    M13 = 13,
    M14 = 14,
    M15 = 15,
    M16 = 16,
    M17 = 17,
    M18 = 18,
    M19 = 19,
    M20 = 20,
    M21 = 21,
    M22 = 22,
    M23 = 23,
    M24 = 24,
    M25 = 25,
    M26 = 26,
    M27 = 27,
    M28 = 28,
    M29 = 29
} En30F1;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En30F1');
      assert.strictEqual(objList[0].alias, 'En30F1');
      assert.strictEqual(objList[0].members.length, 30);
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
      assert.strictEqual(objList[0].members[11], 'M11=11');
      assert.strictEqual(objList[0].members[12], 'M12=12');
      assert.strictEqual(objList[0].members[13], 'M13=13');
      assert.strictEqual(objList[0].members[14], 'M14=14');
      assert.strictEqual(objList[0].members[15], 'M15=15');
      assert.strictEqual(objList[0].members[16], 'M16=16');
      assert.strictEqual(objList[0].members[17], 'M17=17');
      assert.strictEqual(objList[0].members[18], 'M18=18');
      assert.strictEqual(objList[0].members[19], 'M19=19');
      assert.strictEqual(objList[0].members[20], 'M20=20');
      assert.strictEqual(objList[0].members[21], 'M21=21');
      assert.strictEqual(objList[0].members[22], 'M22=22');
      assert.strictEqual(objList[0].members[23], 'M23=23');
      assert.strictEqual(objList[0].members[24], 'M24=24');
      assert.strictEqual(objList[0].members[25], 'M25=25');
      assert.strictEqual(objList[0].members[26], 'M26=26');
      assert.strictEqual(objList[0].members[27], 'M27=27');
      assert.strictEqual(objList[0].members[28], 'M28=28');
      assert.strictEqual(objList[0].members[29], 'M29=29');
          } catch (err) {
      assert.fail(`c_enum_0141 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0142
  * @tc.name parseEnum_c_ext_0142
  * @tc.desc h2dts parseEnum：扩充-矩阵：30 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0142', () => {
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
    M10 = "v10",
    M11 = "v11",
    M12 = "v12",
    M13 = "v13",
    M14 = "v14",
    M15 = "v15",
    M16 = "v16",
    M17 = "v17",
    M18 = "v18",
    M19 = "v19",
    M20 = "v20",
    M21 = "v21",
    M22 = "v22",
    M23 = "v23",
    M24 = "v24",
    M25 = "v25",
    M26 = "v26",
    M27 = "v27",
    M28 = "v28",
    M29 = "v29"
} En30F2;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En30F2');
      assert.strictEqual(objList[0].alias, 'En30F2');
      assert.strictEqual(objList[0].members.length, 30);
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
      assert.strictEqual(objList[0].members[11], 'M11="v11"');
      assert.strictEqual(objList[0].members[12], 'M12="v12"');
      assert.strictEqual(objList[0].members[13], 'M13="v13"');
      assert.strictEqual(objList[0].members[14], 'M14="v14"');
      assert.strictEqual(objList[0].members[15], 'M15="v15"');
      assert.strictEqual(objList[0].members[16], 'M16="v16"');
      assert.strictEqual(objList[0].members[17], 'M17="v17"');
      assert.strictEqual(objList[0].members[18], 'M18="v18"');
      assert.strictEqual(objList[0].members[19], 'M19="v19"');
      assert.strictEqual(objList[0].members[20], 'M20="v20"');
      assert.strictEqual(objList[0].members[21], 'M21="v21"');
      assert.strictEqual(objList[0].members[22], 'M22="v22"');
      assert.strictEqual(objList[0].members[23], 'M23="v23"');
      assert.strictEqual(objList[0].members[24], 'M24="v24"');
      assert.strictEqual(objList[0].members[25], 'M25="v25"');
      assert.strictEqual(objList[0].members[26], 'M26="v26"');
      assert.strictEqual(objList[0].members[27], 'M27="v27"');
      assert.strictEqual(objList[0].members[28], 'M28="v28"');
      assert.strictEqual(objList[0].members[29], 'M29="v29"');
          } catch (err) {
      assert.fail(`c_enum_0142 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0143
  * @tc.name parseEnum_c_ext_0143
  * @tc.desc h2dts parseEnum：扩充-矩阵：30 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseEnum_c_ext_0143', () => {
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
    M10 = 0xB,
    M11 = 0xC,
    M12 = 0xD,
    M13 = 0xE,
    M14 = 0xF,
    M15 = 0x10,
    M16 = 0x11,
    M17 = 0x12,
    M18 = 0x13,
    M19 = 0x14,
    M20 = 0x15,
    M21 = 0x16,
    M22 = 0x17,
    M23 = 0x18,
    M24 = 0x19,
    M25 = 0x1A,
    M26 = 0x1B,
    M27 = 0x1C,
    M28 = 0x1D,
    M29 = 0x1E
} En30F3;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En30F3');
      assert.strictEqual(objList[0].alias, 'En30F3');
      assert.strictEqual(objList[0].members.length, 30);
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
      assert.strictEqual(objList[0].members[11], 'M11=0xC');
      assert.strictEqual(objList[0].members[12], 'M12=0xD');
      assert.strictEqual(objList[0].members[13], 'M13=0xE');
      assert.strictEqual(objList[0].members[14], 'M14=0xF');
      assert.strictEqual(objList[0].members[15], 'M15=0x10');
      assert.strictEqual(objList[0].members[16], 'M16=0x11');
      assert.strictEqual(objList[0].members[17], 'M17=0x12');
      assert.strictEqual(objList[0].members[18], 'M18=0x13');
      assert.strictEqual(objList[0].members[19], 'M19=0x14');
      assert.strictEqual(objList[0].members[20], 'M20=0x15');
      assert.strictEqual(objList[0].members[21], 'M21=0x16');
      assert.strictEqual(objList[0].members[22], 'M22=0x17');
      assert.strictEqual(objList[0].members[23], 'M23=0x18');
      assert.strictEqual(objList[0].members[24], 'M24=0x19');
      assert.strictEqual(objList[0].members[25], 'M25=0x1A');
      assert.strictEqual(objList[0].members[26], 'M26=0x1B');
      assert.strictEqual(objList[0].members[27], 'M27=0x1C');
      assert.strictEqual(objList[0].members[28], 'M28=0x1D');
      assert.strictEqual(objList[0].members[29], 'M29=0x1E');
          } catch (err) {
      assert.fail(`c_enum_0143 执行异常: ${String(err)}`);
    }
  });

});
