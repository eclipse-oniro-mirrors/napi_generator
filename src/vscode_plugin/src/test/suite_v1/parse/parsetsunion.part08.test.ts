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

suite('Parse_Union_TS_Suite_Ext08', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Union_TS_Suite_Ext08');
  /**
  * @tc.number dts2cpp_union_0211
  * @tc.name parseUnion_ts_ext_0211
  * @tc.desc dts2cpp union type alias 对齐 parsetsunion test_3：字符串字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0211', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0211.ts',
            `type UnionType0211 = "string" | "number";`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0211');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '"string"');
      assert.strictEqual(typeItem!.types[1], '"number"');
          } catch (err) {
      assert.fail(`dts2cpp_union_0211 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0212
  * @tc.name parseUnion_ts_ext_0212
  * @tc.desc dts2cpp union type alias 对齐 parsetsunion test_4：数字字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0212', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0212.ts',
            `type UnionType0212 = -1 | 0;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0212');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '-1');
      assert.strictEqual(typeItem!.types[1], '0');
          } catch (err) {
      assert.fail(`dts2cpp_union_0212 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0213
  * @tc.name parseUnion_ts_ext_0213
  * @tc.desc dts2cpp union type alias 十六进制字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0213', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0213.ts',
            `type UnionType0213 = 0x1F | 0x2A | 0x3C;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0213');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '0x1F');
      assert.strictEqual(typeItem!.types[1], '0x2A');
      assert.strictEqual(typeItem!.types[2], '0x3C');
          } catch (err) {
      assert.fail(`dts2cpp_union_0213 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0214
  * @tc.name parseUnion_ts_ext_0214
  * @tc.desc dts2cpp union type alias 二进制字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0214', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0214.ts',
            `type UnionType0214 = 0b101 | 0b110 | 0b111;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0214');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '0b101');
      assert.strictEqual(typeItem!.types[1], '0b110');
      assert.strictEqual(typeItem!.types[2], '0b111');
          } catch (err) {
      assert.fail(`dts2cpp_union_0214 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0215
  * @tc.name parseUnion_ts_ext_0215
  * @tc.desc dts2cpp union type alias 八进制字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0215', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0215.ts',
            `type UnionType0215 = 0o17 | 0o27 | 0o37;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0215');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '0o17');
      assert.strictEqual(typeItem!.types[1], '0o27');
      assert.strictEqual(typeItem!.types[2], '0o37');
          } catch (err) {
      assert.fail(`dts2cpp_union_0215 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0216
  * @tc.name parseUnion_ts_ext_0216
  * @tc.desc dts2cpp union type alias 科学计数法字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0216', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0216.ts',
            `type UnionType0216 = 1e3 | 2e-3 | 4.5e2;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0216');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '1e3');
      assert.strictEqual(typeItem!.types[1], '2e-3');
      assert.strictEqual(typeItem!.types[2], '4.5e2');
          } catch (err) {
      assert.fail(`dts2cpp_union_0216 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0217
  * @tc.name parseUnion_ts_ext_0217
  * @tc.desc dts2cpp union type alias 负浮点字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0217', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0217.ts',
            `type UnionType0217 = -1.5 | 0.5 | 3.14;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0217');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '-1.5');
      assert.strictEqual(typeItem!.types[1], '0.5');
      assert.strictEqual(typeItem!.types[2], '3.14');
          } catch (err) {
      assert.fail(`dts2cpp_union_0217 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0218
  * @tc.name parseUnion_ts_ext_0218
  * @tc.desc dts2cpp union type alias bigint 字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0218', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0218.ts',
            `type UnionType0218 = 1n | 2n | 100n;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0218');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '1n');
      assert.strictEqual(typeItem!.types[1], '2n');
      assert.strictEqual(typeItem!.types[2], '100n');
          } catch (err) {
      assert.fail(`dts2cpp_union_0218 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0219
  * @tc.name parseUnion_ts_ext_0219
  * @tc.desc dts2cpp union type alias 十进制/十六进制/二进制混合字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0219', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0219.ts',
            `type UnionType0219 = 0 | 0x10 | 0b10;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0219');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '0');
      assert.strictEqual(typeItem!.types[1], '0x10');
      assert.strictEqual(typeItem!.types[2], '0b10');
          } catch (err) {
      assert.fail(`dts2cpp_union_0219 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0220
  * @tc.name parseUnion_ts_ext_0220
  * @tc.desc dts2cpp union type alias 负整数等差数列联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0220', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0220.ts',
            `type UnionType0220 = -10 | -5 | 0 | 5 | 10;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0220');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 5);
      assert.strictEqual(typeItem!.types[0], '-10');
      assert.strictEqual(typeItem!.types[1], '-5');
      assert.strictEqual(typeItem!.types[2], '0');
      assert.strictEqual(typeItem!.types[3], '5');
      assert.strictEqual(typeItem!.types[4], '10');
          } catch (err) {
      assert.fail(`dts2cpp_union_0220 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0221
  * @tc.name parseUnion_ts_ext_0221
  * @tc.desc dts2cpp union type alias 浮点字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0221', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0221.ts',
            `type UnionType0221 = 0.5 | 1.25 | 2.75;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0221');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '0.5');
      assert.strictEqual(typeItem!.types[1], '1.25');
      assert.strictEqual(typeItem!.types[2], '2.75');
          } catch (err) {
      assert.fail(`dts2cpp_union_0221 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0222
  * @tc.name parseUnion_ts_ext_0222
  * @tc.desc dts2cpp union type alias bigint 与 number 字面量混联。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0222', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0222.ts',
            `type UnionType0222 = 1n | 2 | 3n | 4;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0222');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '1n');
      assert.strictEqual(typeItem!.types[1], '2');
      assert.strictEqual(typeItem!.types[2], '3n');
      assert.strictEqual(typeItem!.types[3], '4');
          } catch (err) {
      assert.fail(`dts2cpp_union_0222 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0223
  * @tc.name parseUnion_ts_ext_0223
  * @tc.desc dts2cpp union type alias 负零字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0223', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0223.ts',
            `type UnionType0223 = -0 | 0;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0223');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '-0');
      assert.strictEqual(typeItem!.types[1], '0');
          } catch (err) {
      assert.fail(`dts2cpp_union_0223 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0224
  * @tc.name parseUnion_ts_ext_0224
  * @tc.desc dts2cpp union type alias 空字符串字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0224', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0224.ts',
            `type UnionType0224 = "" | "x" | "y";`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0224');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '""');
      assert.strictEqual(typeItem!.types[1], '"x"');
      assert.strictEqual(typeItem!.types[2], '"y"');
          } catch (err) {
      assert.fail(`dts2cpp_union_0224 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0225
  * @tc.name parseUnion_ts_ext_0225
  * @tc.desc dts2cpp union type alias 长短字符串字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0225', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0225.ts',
            `type UnionType0225 = "very-long-string-literal-value" | "short";`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0225');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '"very-long-string-literal-value"');
      assert.strictEqual(typeItem!.types[1], '"short"');
          } catch (err) {
      assert.fail(`dts2cpp_union_0225 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0226
  * @tc.name parseUnion_ts_ext_0226
  * @tc.desc dts2cpp union type alias 含转义字符的字符串字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0226', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0226.ts',
            `type UnionType0226 = "line1\\nline2" | "tab\\tend";`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0226');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '"line1\\nline2"');
      assert.strictEqual(typeItem!.types[1], '"tab\\tend"');
          } catch (err) {
      assert.fail(`dts2cpp_union_0226 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0227
  * @tc.name parseUnion_ts_ext_0227
  * @tc.desc dts2cpp union type alias 含特殊字符的字符串字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0227', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0227.ts',
            `type UnionType0227 = "a;b" | "c|d";`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0227');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '"a;b"');
      assert.strictEqual(typeItem!.types[1], '"c|d"');
          } catch (err) {
      assert.fail(`dts2cpp_union_0227 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0228
  * @tc.name parseUnion_ts_ext_0228
  * @tc.desc dts2cpp union type alias 单引号字符串字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0228', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0228.ts',
            `type UnionType0228 = 'a' | 'b' | 'c';`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0228');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '\'a\'');
      assert.strictEqual(typeItem!.types[1], '\'b\'');
      assert.strictEqual(typeItem!.types[2], '\'c\'');
          } catch (err) {
      assert.fail(`dts2cpp_union_0228 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0229
  * @tc.name parseUnion_ts_ext_0229
  * @tc.desc dts2cpp union type alias 字符串/数字/bigint/布尔/可空字面量八元混合联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0229', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0229.ts',
            `type UnionType0229 = "a" | 'b' | 1 | 2n | true | false | null | undefined;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0229');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 8);
      assert.strictEqual(typeItem!.types[0], '"a"');
      assert.strictEqual(typeItem!.types[1], '\'b\'');
      assert.strictEqual(typeItem!.types[2], '1');
      assert.strictEqual(typeItem!.types[3], '2n');
      assert.strictEqual(typeItem!.types[4], 'true');
      assert.strictEqual(typeItem!.types[5], 'false');
      assert.strictEqual(typeItem!.types[6], 'null');
      assert.strictEqual(typeItem!.types[7], 'undefined');
          } catch (err) {
      assert.fail(`dts2cpp_union_0229 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0230
  * @tc.name parseUnion_ts_ext_0230
  * @tc.desc dts2cpp union type alias 双占位符模板字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0230', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0230.ts',
            `type UnionType0230 = \`a\${"x" | "y"}b\` | string;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0230');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '`a${"x" | "y"}b`');
      assert.strictEqual(typeItem!.types[1], 'string');
          } catch (err) {
      assert.fail(`dts2cpp_union_0230 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0231
  * @tc.name parseUnion_ts_ext_0231
  * @tc.desc dts2cpp union type alias 多占位符模板字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0231', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0231.ts',
            `type UnionType0231 = \`pre-\${1 | 2}-mid-\${"a" | "b"}-post\` | null;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0231');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '`pre-${1 | 2}-mid-${"a" | "b"}-post`');
      assert.strictEqual(typeItem!.types[1], 'null');
          } catch (err) {
      assert.fail(`dts2cpp_union_0231 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0232
  * @tc.name parseUnion_ts_ext_0232
  * @tc.desc dts2cpp union type alias CSS 单位模板字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0232', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0232.ts',
            `type UnionType0232 = \`\${number}px\` | \`\${number}%\` | "auto";`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0232');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '`${number}px`');
      assert.strictEqual(typeItem!.types[1], '`${number}%`');
      assert.strictEqual(typeItem!.types[2], '"auto"');
          } catch (err) {
      assert.fail(`dts2cpp_union_0232 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0233
  * @tc.name parseUnion_ts_ext_0233
  * @tc.desc dts2cpp union type alias 模板字面量内嵌工具类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0233', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0233.ts',
            `type UnionType0233 = \`\${Lowercase<string>}\` | \`\${Uppercase<string>}\`;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0233');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '`${Lowercase<string>}`');
      assert.strictEqual(typeItem!.types[1], '`${Uppercase<string>}`');
          } catch (err) {
      assert.fail(`dts2cpp_union_0233 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0234
  * @tc.name parseUnion_ts_ext_0234
  * @tc.desc dts2cpp union type alias 十成员数字字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0234', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0234.ts',
            `type UnionType0234 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0234');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 10);
      assert.strictEqual(typeItem!.types[0], '1');
      assert.strictEqual(typeItem!.types[1], '2');
      assert.strictEqual(typeItem!.types[2], '3');
      assert.strictEqual(typeItem!.types[3], '4');
      assert.strictEqual(typeItem!.types[4], '5');
      assert.strictEqual(typeItem!.types[5], '6');
      assert.strictEqual(typeItem!.types[6], '7');
      assert.strictEqual(typeItem!.types[7], '8');
      assert.strictEqual(typeItem!.types[8], '9');
      assert.strictEqual(typeItem!.types[9], '10');
          } catch (err) {
      assert.fail(`dts2cpp_union_0234 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0235
  * @tc.name parseUnion_ts_ext_0235
  * @tc.desc dts2cpp union type alias 十成员基本类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0235', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0235.ts',
            `type UnionType0235 = string | number | boolean | null | undefined | object | symbol | bigint | any | never;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0235');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 10);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'number');
      assert.strictEqual(typeItem!.types[2], 'boolean');
      assert.strictEqual(typeItem!.types[3], 'null');
      assert.strictEqual(typeItem!.types[4], 'undefined');
      assert.strictEqual(typeItem!.types[5], 'object');
      assert.strictEqual(typeItem!.types[6], 'symbol');
      assert.strictEqual(typeItem!.types[7], 'bigint');
      assert.strictEqual(typeItem!.types[8], 'any');
      assert.strictEqual(typeItem!.types[9], 'never');
          } catch (err) {
      assert.fail(`dts2cpp_union_0235 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0236
  * @tc.name parseUnion_ts_ext_0236
  * @tc.desc dts2cpp union type alias 十二成员 mega 基本类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0236', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0236.ts',
            `type UnionType0236 = string | number | boolean | null | undefined | symbol | bigint | object | any | unknown | never | void;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0236');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 12);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'number');
      assert.strictEqual(typeItem!.types[2], 'boolean');
      assert.strictEqual(typeItem!.types[3], 'null');
      assert.strictEqual(typeItem!.types[4], 'undefined');
      assert.strictEqual(typeItem!.types[5], 'symbol');
      assert.strictEqual(typeItem!.types[6], 'bigint');
      assert.strictEqual(typeItem!.types[7], 'object');
      assert.strictEqual(typeItem!.types[8], 'any');
      assert.strictEqual(typeItem!.types[9], 'unknown');
      assert.strictEqual(typeItem!.types[10], 'never');
      assert.strictEqual(typeItem!.types[11], 'void');
          } catch (err) {
      assert.fail(`dts2cpp_union_0236 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0237
  * @tc.name parseUnion_ts_ext_0237
  * @tc.desc dts2cpp union type alias 多行书写三成员联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0237', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0237.ts',
            `type UnionType0237 = string |
  number |
  boolean;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0237');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'number');
      assert.strictEqual(typeItem!.types[2], 'boolean');
          } catch (err) {
      assert.fail(`dts2cpp_union_0237 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0238
  * @tc.name parseUnion_ts_ext_0238
  * @tc.desc dts2cpp union type alias 多行书写五成员联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0238', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0238.ts',
            `type UnionType0238 =
    string
    | number
    | string[]
    | Set<number>
    | Map<string, boolean>;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0238');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 5);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'number');
      assert.strictEqual(typeItem!.types[2], 'string[]');
      assert.strictEqual(typeItem!.types[3], 'Set<number>');
      assert.strictEqual(typeItem!.types[4], 'Map<string, boolean>');
          } catch (err) {
      assert.fail(`dts2cpp_union_0238 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0239
  * @tc.name parseUnion_ts_ext_0239
  * @tc.desc dts2cpp union type alias 重复成员联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0239', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0239.ts',
            `type UnionType0239 = string | string | number;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0239');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.strictEqual(typeItem!.types[2], 'number');
          } catch (err) {
      assert.fail(`dts2cpp_union_0239 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0240
  * @tc.name parseUnion_ts_ext_0240
  * @tc.desc dts2cpp union type alias 单成员括号包裹联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0240', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0240.ts',
            `type UnionType0240 = (string) | (number);`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0240');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(string)');
      assert.strictEqual(typeItem!.types[1], '(number)');
          } catch (err) {
      assert.fail(`dts2cpp_union_0240 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0241
  * @tc.name parseUnion_ts_ext_0241
  * @tc.desc dts2cpp union type alias 两层括号嵌套联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0241', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0241.ts',
            `type UnionType0241 = (string | (number | boolean)) | null;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0241');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(string | (number | boolean))');
      assert.strictEqual(typeItem!.types[1], 'null');
          } catch (err) {
      assert.fail(`dts2cpp_union_0241 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0242
  * @tc.name parseUnion_ts_ext_0242
  * @tc.desc dts2cpp union type alias 深括号嵌套联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0242', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0242.ts',
            `type UnionType0242 = ((string | number) | (boolean | null)) | ((string[] | number[]) | (Set<string> | Map<string, number>));`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0242');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((string | number) | (boolean | null))');
      assert.strictEqual(typeItem!.types[1], '((string[] | number[]) | (Set<string> | Map<string, number>))');
          } catch (err) {
      assert.fail(`dts2cpp_union_0242 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0243
  * @tc.name parseUnion_ts_ext_0243
  * @tc.desc dts2cpp union type alias 二维数组联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0243', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0243.ts',
            `type UnionType0243 = string[][] | number[][];`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0243');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'string[][]');
      assert.strictEqual(typeItem!.types[1], 'number[][]');
          } catch (err) {
      assert.fail(`dts2cpp_union_0243 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0244
  * @tc.name parseUnion_ts_ext_0244
  * @tc.desc dts2cpp union type alias 嵌套泛型数组联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0244', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0244.ts',
            `type UnionType0244 = Array<Array<string | number>> | Array<Array<boolean>>;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0244');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Array<Array<string | number>>');
      assert.strictEqual(typeItem!.types[1], 'Array<Array<boolean>>');
          } catch (err) {
      assert.fail(`dts2cpp_union_0244 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0245
  * @tc.name parseUnion_ts_ext_0245
  * @tc.desc dts2cpp union type alias 联合元素二维数组联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0245', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0245.ts',
            `type UnionType0245 = (string | number)[][] | boolean[][];`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0245');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(string | number)[][]');
      assert.strictEqual(typeItem!.types[1], 'boolean[][]');
          } catch (err) {
      assert.fail(`dts2cpp_union_0245 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0246
  * @tc.name parseUnion_ts_ext_0246
  * @tc.desc dts2cpp union type alias 命名元素 tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0246', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0246.ts',
            `type UnionType0246 = [a: string, b: number] | [c: boolean];`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0246');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[a: string, b: number]');
      assert.strictEqual(typeItem!.types[1], '[c: boolean]');
          } catch (err) {
      assert.fail(`dts2cpp_union_0246 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0247
  * @tc.name parseUnion_ts_ext_0247
  * @tc.desc dts2cpp union type alias 前置 rest tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0247', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0247.ts',
            `type UnionType0247 = [...string[], number] | [boolean];`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0247');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[...string[], number]');
      assert.strictEqual(typeItem!.types[1], '[boolean]');
          } catch (err) {
      assert.fail(`dts2cpp_union_0247 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0248
  * @tc.name parseUnion_ts_ext_0248
  * @tc.desc dts2cpp union type alias 中置 rest tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0248', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0248.ts',
            `type UnionType0248 = [string, ...boolean[], number] | [boolean];`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0248');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[string, ...boolean[], number]');
      assert.strictEqual(typeItem!.types[1], '[boolean]');
          } catch (err) {
      assert.fail(`dts2cpp_union_0248 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0249
  * @tc.name parseUnion_ts_ext_0249
  * @tc.desc dts2cpp union type alias 可选元素 tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0249', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0249.ts',
            `type UnionType0249 = [string, number?] | [boolean];`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0249');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[string, number?]');
      assert.strictEqual(typeItem!.types[1], '[boolean]');
          } catch (err) {
      assert.fail(`dts2cpp_union_0249 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0250
  * @tc.name parseUnion_ts_ext_0250
  * @tc.desc dts2cpp union type alias readonly tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0250', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0250.ts',
            `type UnionType0250 = readonly [string, number] | readonly [boolean];`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0250');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'readonly [string, number]');
      assert.strictEqual(typeItem!.types[1], 'readonly [boolean]');
          } catch (err) {
      assert.fail(`dts2cpp_union_0250 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0251
  * @tc.name parseUnion_ts_ext_0251
  * @tc.desc dts2cpp union type alias readonly 命名 tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0251', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0251.ts',
            `type UnionType0251 = readonly [x: string, y: number] | [boolean];`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0251');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'readonly [x: string, y: number]');
      assert.strictEqual(typeItem!.types[1], '[boolean]');
          } catch (err) {
      assert.fail(`dts2cpp_union_0251 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0252
  * @tc.name parseUnion_ts_ext_0252
  * @tc.desc dts2cpp union type alias readonly 数组两种写法联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0252', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0252.ts',
            `type UnionType0252 = readonly (string | number)[] | ReadonlyArray<boolean>;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0252');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'readonly (string | number)[]');
      assert.strictEqual(typeItem!.types[1], 'ReadonlyArray<boolean>');
          } catch (err) {
      assert.fail(`dts2cpp_union_0252 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0253
  * @tc.name parseUnion_ts_ext_0253
  * @tc.desc dts2cpp union type alias 三元素 readonly tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0253', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0253.ts',
            `type UnionType0253 = readonly [string, number, boolean] | [string, number];`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0253');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'readonly [string, number, boolean]');
      assert.strictEqual(typeItem!.types[1], '[string, number]');
          } catch (err) {
      assert.fail(`dts2cpp_union_0253 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0254
  * @tc.name parseUnion_ts_ext_0254
  * @tc.desc dts2cpp union type alias 三元素 tuple 双向排列联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0254', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0254.ts',
            `type UnionType0254 = [string, number, boolean] | [number, string, boolean];`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0254');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[string, number, boolean]');
      assert.strictEqual(typeItem!.types[1], '[number, string, boolean]');
          } catch (err) {
      assert.fail(`dts2cpp_union_0254 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0255
  * @tc.name parseUnion_ts_ext_0255
  * @tc.desc dts2cpp union type alias 嵌套 Map 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0255', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0255.ts',
            `type UnionType0255 = Map<string, Map<string, number>> | Map<string, Map<string, boolean>>;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0255');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<string, Map<string, number>>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, Map<string, boolean>>');
          } catch (err) {
      assert.fail(`dts2cpp_union_0255 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0256
  * @tc.name parseUnion_ts_ext_0256
  * @tc.desc dts2cpp union type alias Record 联合字面量 key 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0256', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0256.ts',
            `type UnionType0256 = Record<"a" | "b" | "c", number> | Record<"x" | "y", string>;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0256');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Record<"a" | "b" | "c", number>');
      assert.strictEqual(typeItem!.types[1], 'Record<"x" | "y", string>');
          } catch (err) {
      assert.fail(`dts2cpp_union_0256 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0257
  * @tc.name parseUnion_ts_ext_0257
  * @tc.desc dts2cpp union type alias Record 联合 value 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0257', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0257.ts',
            `type UnionType0257 = Record<string, string[] | number[]> | Map<string, number>;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0257');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Record<string, string[] | number[]>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, number>');
          } catch (err) {
      assert.fail(`dts2cpp_union_0257 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0258
  * @tc.name parseUnion_ts_ext_0258
  * @tc.desc dts2cpp union type alias ReadonlyMap/ReadonlySet 嵌套联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0258', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0258.ts',
            `type UnionType0258 = ReadonlyMap<string, Set<number>> | Map<string, ReadonlySet<number>>;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0258');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'ReadonlyMap<string, Set<number>>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, ReadonlySet<number>>');
          } catch (err) {
      assert.fail(`dts2cpp_union_0258 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0259
  * @tc.name parseUnion_ts_ext_0259
  * @tc.desc dts2cpp union type alias 嵌套 Set 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0259', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0259.ts',
            `type UnionType0259 = Set<Set<string>> | Set<Set<number>>;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0259');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Set<Set<string>>');
      assert.strictEqual(typeItem!.types[1], 'Set<Set<number>>');
          } catch (err) {
      assert.fail(`dts2cpp_union_0259 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0260
  * @tc.name parseUnion_ts_ext_0260
  * @tc.desc dts2cpp union type alias WeakSet 变体联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0260', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0260.ts',
            `type UnionType0260 = WeakSet<object> | WeakSet<Function>;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0260');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'WeakSet<object>');
      assert.strictEqual(typeItem!.types[1], 'WeakSet<Function>');
          } catch (err) {
      assert.fail(`dts2cpp_union_0260 执行异常: ${String(err)}`);
    }
  });
});
