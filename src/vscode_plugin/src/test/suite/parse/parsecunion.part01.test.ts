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

suite('Parse_C_Union_Suite_Ext01', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Union_Suite_Ext01');
  /**
  * @tc.number c_union_0001
  * @tc.name parseUnion_c_ext_0001
  * @tc.desc h2dts parseUnion：union：int/float/char[4] 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_c_ext_0001', () => {
    try {
      let objList: any;
            objList = parsec.parseUnion(`typedef union {
    int i;
    float f;
    char c[4];
} ValueUnion;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ValueUnion');
      assert.strictEqual(objList[0].alias, 'ValueUnion');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0].name, 'i');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'f');
      assert.strictEqual(objList[0].members[1].type, 'float');
      assert.strictEqual(objList[0].members[2].name, 'c');
      assert.strictEqual(objList[0].members[2].type, 'char');
          } catch (err) {
      assert.fail(`c_union_0001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0002
  * @tc.name parseUnion_c_ext_0002
  * @tc.desc h2dts parseUnion：union：int/double/string* 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_c_ext_0002', () => {
    try {
      let objList: any;
            objList = parsec.parseUnion(`union Data {
    int i;
    double d;
    std::string* s;
};`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Data');
      assert.strictEqual(objList[0].alias, undefined);
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0].name, 'i');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 's');
      assert.strictEqual(objList[0].members[2].type, 'string*');
          } catch (err) {
      assert.fail(`c_union_0002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0003
  * @tc.name parseUnion_c_ext_0003
  * @tc.desc h2dts parseUnion：union：整型族成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_c_ext_0003', () => {
    try {
      let objList: any;
            objList = parsec.parseUnion(`typedef union {
    long l;
    long long ll;
    short s;
} NumberUnion;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NumberUnion');
      assert.strictEqual(objList[0].alias, 'NumberUnion');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0].name, 'l');
      assert.strictEqual(objList[0].members[0].type, 'long');
      assert.strictEqual(objList[0].members[1].name, 'll');
      assert.strictEqual(objList[0].members[1].type, 'long long');
      assert.strictEqual(objList[0].members[2].name, 's');
      assert.strictEqual(objList[0].members[2].type, 'short');
          } catch (err) {
      assert.fail(`c_union_0003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0004
  * @tc.name parseUnion_c_ext_0004
  * @tc.desc h2dts parseUnion：namespace：域内 union 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_c_ext_0004', () => {
    try {
      let objList: any;
            objList = parsec.parseUnion(`namespace ns {
typedef union { int a; long b; } InnerUnion;
}`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'InnerUnion');
      assert.strictEqual(objList[0].alias, 'InnerUnion');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b');
      assert.strictEqual(objList[0].members[1].type, 'long');
          } catch (err) {
      assert.fail(`c_union_0004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0005
  * @tc.name parseUnion_c_ext_0005
  * @tc.desc h2dts parseUnion：union：bool/int/double/char[8] 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_c_ext_0005', () => {
    try {
      let objList: any;
            objList = parsec.parseUnion(`typedef union {
    bool flag;
    int code;
    double value;
    char tag[8];
} MixUnion;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'MixUnion');
      assert.strictEqual(objList[0].alias, 'MixUnion');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'flag');
      assert.strictEqual(objList[0].members[0].type, 'bool');
      assert.strictEqual(objList[0].members[1].name, 'code');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'value');
      assert.strictEqual(objList[0].members[2].type, 'double');
      assert.strictEqual(objList[0].members[3].name, 'tag');
      assert.strictEqual(objList[0].members[3].type, 'char');
          } catch (err) {
      assert.fail(`c_union_0005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0006
  * @tc.name parseUnion_c_ext_0006
  * @tc.desc h2dts parseUnion：多 union：同文件 2 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_c_ext_0006', () => {
    try {
      let objList: any;
            objList = parsec.parseUnion(`union U1 { int a; };
union U2 { double b; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 2);
      assert.strictEqual(objList[0].name, 'U1');
      assert.strictEqual(objList[0].alias, undefined);
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[1].name, 'U2');
      assert.strictEqual(objList[1].alias, undefined);
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'b');
      assert.strictEqual(objList[1].members[0].type, 'double');
          } catch (err) {
      assert.fail(`c_union_0006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0007
  * @tc.name parseUnion_c_ext_0007
  * @tc.desc h2dts parseUnion：扩充-union：整型族 5 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_c_ext_0007', () => {
    try {
      let objList: any;
            objList = parsec.parseUnion(`typedef union {
    int i;
    long l;
    long long ll;
    short s;
    char c;
} IntUnion;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'IntUnion');
      assert.strictEqual(objList[0].alias, 'IntUnion');
      assert.strictEqual(objList[0].members.length, 5);
      assert.strictEqual(objList[0].members[0].name, 'i');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'l');
      assert.strictEqual(objList[0].members[1].type, 'long');
      assert.strictEqual(objList[0].members[2].name, 'll');
      assert.strictEqual(objList[0].members[2].type, 'long long');
      assert.strictEqual(objList[0].members[3].name, 's');
      assert.strictEqual(objList[0].members[3].type, 'short');
      assert.strictEqual(objList[0].members[4].name, 'c');
      assert.strictEqual(objList[0].members[4].type, 'char');
          } catch (err) {
      assert.fail(`c_union_0007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0008
  * @tc.name parseUnion_c_ext_0008
  * @tc.desc h2dts parseUnion：扩充-union：浮点族 3 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_c_ext_0008', () => {
    try {
      let objList: any;
            objList = parsec.parseUnion(`typedef union {
    float f;
    double d;
    long double ld;
} FloatUnion;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'FloatUnion');
      assert.strictEqual(objList[0].alias, 'FloatUnion');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0].name, 'f');
      assert.strictEqual(objList[0].members[0].type, 'float');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'ld');
      assert.strictEqual(objList[0].members[2].type, 'long double');
          } catch (err) {
      assert.fail(`c_union_0008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0009
  * @tc.name parseUnion_c_ext_0009
  * @tc.desc h2dts parseUnion：扩充-union：数组成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_c_ext_0009', () => {
    try {
      let objList: any;
            objList = parsec.parseUnion(`typedef union {
    int arr[4];
    double darr[2];
    char carr[8];
} ArrayUnion;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ArrayUnion');
      assert.strictEqual(objList[0].alias, 'ArrayUnion');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0].name, 'arr');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'darr');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'carr');
      assert.strictEqual(objList[0].members[2].type, 'char');
          } catch (err) {
      assert.fail(`c_union_0009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0010
  * @tc.name parseUnion_c_ext_0010
  * @tc.desc h2dts parseUnion：扩充-union：指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_c_ext_0010', () => {
    try {
      let objList: any;
            objList = parsec.parseUnion(`typedef union {
    int i;
    std::string* s;
    std::vector<int>* v;
    std::map<std::string, int>* m;
} PtrUnion;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'PtrUnion');
      assert.strictEqual(objList[0].alias, 'PtrUnion');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'i');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's');
      assert.strictEqual(objList[0].members[1].type, 'string*');
      assert.strictEqual(objList[0].members[2].name, '');
      assert.strictEqual(objList[0].members[2].type, 'std::vector<int>* v');
      assert.strictEqual(objList[0].members[3].name, '');
      assert.strictEqual(objList[0].members[3].type, 'std::map<std::string, int>* m');
          } catch (err) {
      assert.fail(`c_union_0010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0011
  * @tc.name parseUnion_c_ext_0011
  * @tc.desc h2dts parseUnion：扩充-union-多声明：同文件 3 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_c_ext_0011', () => {
    try {
      let objList: any;
            objList = parsec.parseUnion(`union U1 { int a; };
union U2 { double b; };
union U3 { char c; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 3);
      assert.strictEqual(objList[0].name, 'U1');
      assert.strictEqual(objList[0].alias, undefined);
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[1].name, 'U2');
      assert.strictEqual(objList[1].alias, undefined);
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'b');
      assert.strictEqual(objList[1].members[0].type, 'double');
      assert.strictEqual(objList[2].name, 'U3');
      assert.strictEqual(objList[2].alias, undefined);
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'c');
      assert.strictEqual(objList[2].members[0].type, 'char');
          } catch (err) {
      assert.fail(`c_union_0011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0012
  * @tc.name parseUnion_c_ext_0012
  * @tc.desc h2dts parseUnion：扩充-union：10 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_c_ext_0012', () => {
    try {
      let objList: any;
            objList = parsec.parseUnion(`typedef union {
    int a;
    int b;
    int c;
    int d;
    int e;
    int f;
    int g;
    int h;
    int i;
    int j;
} TenUnion;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'TenUnion');
      assert.strictEqual(objList[0].alias, 'TenUnion');
      assert.strictEqual(objList[0].members.length, 10);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'c');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'd');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'e');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'g');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.strictEqual(objList[0].members[7].name, 'h');
      assert.strictEqual(objList[0].members[7].type, 'int');
      assert.strictEqual(objList[0].members[8].name, 'i');
      assert.strictEqual(objList[0].members[8].type, 'int');
      assert.strictEqual(objList[0].members[9].name, 'j');
      assert.strictEqual(objList[0].members[9].type, 'int');
          } catch (err) {
      assert.fail(`c_union_0012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0013
  * @tc.name parseUnion_c_ext_0013
  * @tc.desc h2dts parseUnion：扩充-union-namespace：两层嵌套 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_c_ext_0013', () => {
    try {
      let objList: any;
            objList = parsec.parseUnion(`namespace deep {
namespace inner {
typedef union { int x; double y; } NestedUnion;
}
}`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NestedUnion');
      assert.strictEqual(objList[0].alias, 'NestedUnion');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'x');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'y');
      assert.strictEqual(objList[0].members[1].type, 'double');
          } catch (err) {
      assert.fail(`c_union_0013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0014
  * @tc.name parseUnion_c_ext_0014
  * @tc.desc h2dts parseUnion：扩充-union：混合成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_c_ext_0014', () => {
    try {
      let objList: any;
            objList = parsec.parseUnion(`typedef union {
    unsigned int ui;
    size_t sz;
    bool flag;
    char tag[2];
} MixedUnion2;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'MixedUnion2');
      assert.strictEqual(objList[0].alias, 'MixedUnion2');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'ui');
      assert.strictEqual(objList[0].members[0].type, 'unsigned int');
      assert.strictEqual(objList[0].members[1].name, 'sz');
      assert.strictEqual(objList[0].members[1].type, 'size_t');
      assert.strictEqual(objList[0].members[2].name, 'flag');
      assert.strictEqual(objList[0].members[2].type, 'bool');
      assert.strictEqual(objList[0].members[3].name, 'tag');
      assert.strictEqual(objList[0].members[3].type, 'char');
          } catch (err) {
      assert.fail(`c_union_0014 执行异常: ${String(err)}`);
    }
  });

});
