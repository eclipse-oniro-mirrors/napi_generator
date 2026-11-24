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

suite('Gendtscpp_gen_Suite_Ext08b', function () {
  test('gendtscpp_gen_ext_0190', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf190_0(std::multiset<uint32_t> v);
void tf190_1(std::multiset<uint64_t> v);
void tf190_2(std::multiset<int8_t> v);
void tf190_3(std::multiset<int16_t> v);
void tf190_4(std::multiset<int32_t> v);`),
        unions: parseUnion(`void tf190_0(std::multiset<uint32_t> v);
void tf190_1(std::multiset<uint64_t> v);
void tf190_2(std::multiset<int8_t> v);
void tf190_3(std::multiset<int16_t> v);
void tf190_4(std::multiset<int32_t> v);`),
        structs: parseStruct(`void tf190_0(std::multiset<uint32_t> v);
void tf190_1(std::multiset<uint64_t> v);
void tf190_2(std::multiset<int8_t> v);
void tf190_3(std::multiset<int16_t> v);
void tf190_4(std::multiset<int32_t> v);`),
        classes: parseClass(`void tf190_0(std::multiset<uint32_t> v);
void tf190_1(std::multiset<uint64_t> v);
void tf190_2(std::multiset<int8_t> v);
void tf190_3(std::multiset<int16_t> v);
void tf190_4(std::multiset<int32_t> v);`),
        funcs: parseFunction(`void tf190_0(std::multiset<uint32_t> v);
void tf190_1(std::multiset<uint64_t> v);
void tf190_2(std::multiset<int8_t> v);
void tf190_3(std::multiset<int16_t> v);
void tf190_4(std::multiset<int32_t> v);`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0190 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0191
  * @tc.name : h2dtscpp_gen_0191
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multiset<int64_t>, std::multiset<unsigned>, std::multis... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0191', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf191_0(std::multiset<int64_t> v);
void tf191_1(std::multiset<unsigned> v);
void tf191_2(std::multiset<bool> v);
void tf191_3(std::multiset<char> v);
void tf191_4(std::multiset<wchar_t> v);`),
        unions: parseUnion(`void tf191_0(std::multiset<int64_t> v);
void tf191_1(std::multiset<unsigned> v);
void tf191_2(std::multiset<bool> v);
void tf191_3(std::multiset<char> v);
void tf191_4(std::multiset<wchar_t> v);`),
        structs: parseStruct(`void tf191_0(std::multiset<int64_t> v);
void tf191_1(std::multiset<unsigned> v);
void tf191_2(std::multiset<bool> v);
void tf191_3(std::multiset<char> v);
void tf191_4(std::multiset<wchar_t> v);`),
        classes: parseClass(`void tf191_0(std::multiset<int64_t> v);
void tf191_1(std::multiset<unsigned> v);
void tf191_2(std::multiset<bool> v);
void tf191_3(std::multiset<char> v);
void tf191_4(std::multiset<wchar_t> v);`),
        funcs: parseFunction(`void tf191_0(std::multiset<int64_t> v);
void tf191_1(std::multiset<unsigned> v);
void tf191_2(std::multiset<bool> v);
void tf191_3(std::multiset<char> v);
void tf191_4(std::multiset<wchar_t> v);`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0191 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0192
  * @tc.name : h2dtscpp_gen_0192
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multiset<char8_t>, std::multiset<char16_t>, std::multis... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0192', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf192_0(std::multiset<char8_t> v);
void tf192_1(std::multiset<char16_t> v);
void tf192_2(std::multiset<char32_t> v);
void tf192_3(std::multiset<int>::iterator v);
void tf192_4(std::multiset<size_t>::iterator v);`),
        unions: parseUnion(`void tf192_0(std::multiset<char8_t> v);
void tf192_1(std::multiset<char16_t> v);
void tf192_2(std::multiset<char32_t> v);
void tf192_3(std::multiset<int>::iterator v);
void tf192_4(std::multiset<size_t>::iterator v);`),
        structs: parseStruct(`void tf192_0(std::multiset<char8_t> v);
void tf192_1(std::multiset<char16_t> v);
void tf192_2(std::multiset<char32_t> v);
void tf192_3(std::multiset<int>::iterator v);
void tf192_4(std::multiset<size_t>::iterator v);`),
        classes: parseClass(`void tf192_0(std::multiset<char8_t> v);
void tf192_1(std::multiset<char16_t> v);
void tf192_2(std::multiset<char32_t> v);
void tf192_3(std::multiset<int>::iterator v);
void tf192_4(std::multiset<size_t>::iterator v);`),
        funcs: parseFunction(`void tf192_0(std::multiset<char8_t> v);
void tf192_1(std::multiset<char16_t> v);
void tf192_2(std::multiset<char32_t> v);
void tf192_3(std::multiset<int>::iterator v);
void tf192_4(std::multiset<size_t>::iterator v);`),
        types: [],
      };
      let transResult: ParseObj | undefined;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_gen_0192 执行异常: ${String(err)}`);
    }
  });
});
