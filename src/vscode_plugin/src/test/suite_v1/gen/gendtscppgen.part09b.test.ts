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

suite('Gendtscpp_gen_Suite_Ext09b', function () {
  test('gendtscpp_gen_ext_0225', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf225_0(unsigned long long v);
void tf225_1(std::vector<long long> v);
void tf225_2(std::vector<unsigned short> v);
void tf225_3(std::vector<unsigned long> v);
void tf225_4(std::vector<unsigned long long> v);`),
        unions: parseUnion(`void tf225_0(unsigned long long v);
void tf225_1(std::vector<long long> v);
void tf225_2(std::vector<unsigned short> v);
void tf225_3(std::vector<unsigned long> v);
void tf225_4(std::vector<unsigned long long> v);`),
        structs: parseStruct(`void tf225_0(unsigned long long v);
void tf225_1(std::vector<long long> v);
void tf225_2(std::vector<unsigned short> v);
void tf225_3(std::vector<unsigned long> v);
void tf225_4(std::vector<unsigned long long> v);`),
        classes: parseClass(`void tf225_0(unsigned long long v);
void tf225_1(std::vector<long long> v);
void tf225_2(std::vector<unsigned short> v);
void tf225_3(std::vector<unsigned long> v);
void tf225_4(std::vector<unsigned long long> v);`),
        funcs: parseFunction(`void tf225_0(unsigned long long v);
void tf225_1(std::vector<long long> v);
void tf225_2(std::vector<unsigned short> v);
void tf225_3(std::vector<unsigned long> v);
void tf225_4(std::vector<unsigned long long> v);`),
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
      assert.fail(`h2dtscpp_gen_0225 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0226
  * @tc.name : h2dtscpp_gen_0226
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 int *, std::vector<int *>, std::vector<std::string>::iterato... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0226', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf226_0(int * v);
void tf226_1(std::vector<int *> v);
void tf226_2(std::vector<std::string>::iterator v);
void tf226_3(std::vector<char *>::iterator v);
void tf226_4(std::vector<long long>::iterator v);`),
        unions: parseUnion(`void tf226_0(int * v);
void tf226_1(std::vector<int *> v);
void tf226_2(std::vector<std::string>::iterator v);
void tf226_3(std::vector<char *>::iterator v);
void tf226_4(std::vector<long long>::iterator v);`),
        structs: parseStruct(`void tf226_0(int * v);
void tf226_1(std::vector<int *> v);
void tf226_2(std::vector<std::string>::iterator v);
void tf226_3(std::vector<char *>::iterator v);
void tf226_4(std::vector<long long>::iterator v);`),
        classes: parseClass(`void tf226_0(int * v);
void tf226_1(std::vector<int *> v);
void tf226_2(std::vector<std::string>::iterator v);
void tf226_3(std::vector<char *>::iterator v);
void tf226_4(std::vector<long long>::iterator v);`),
        funcs: parseFunction(`void tf226_0(int * v);
void tf226_1(std::vector<int *> v);
void tf226_2(std::vector<std::string>::iterator v);
void tf226_3(std::vector<char *>::iterator v);
void tf226_4(std::vector<long long>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_0226 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0227
  * @tc.name : h2dtscpp_gen_0227
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::vector<unsigned short>::iterator, std::vector<unsigned ... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0227', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf227_0(std::vector<unsigned short>::iterator v);
void tf227_1(std::vector<unsigned long>::iterator v);
void tf227_2(std::vector<unsigned long long>::iterator v);
void tf227_3(std::vector<int *>::iterator v);
void tf227_4(std::array<std::string, 10> v);`),
        unions: parseUnion(`void tf227_0(std::vector<unsigned short>::iterator v);
void tf227_1(std::vector<unsigned long>::iterator v);
void tf227_2(std::vector<unsigned long long>::iterator v);
void tf227_3(std::vector<int *>::iterator v);
void tf227_4(std::array<std::string, 10> v);`),
        structs: parseStruct(`void tf227_0(std::vector<unsigned short>::iterator v);
void tf227_1(std::vector<unsigned long>::iterator v);
void tf227_2(std::vector<unsigned long long>::iterator v);
void tf227_3(std::vector<int *>::iterator v);
void tf227_4(std::array<std::string, 10> v);`),
        classes: parseClass(`void tf227_0(std::vector<unsigned short>::iterator v);
void tf227_1(std::vector<unsigned long>::iterator v);
void tf227_2(std::vector<unsigned long long>::iterator v);
void tf227_3(std::vector<int *>::iterator v);
void tf227_4(std::array<std::string, 10> v);`),
        funcs: parseFunction(`void tf227_0(std::vector<unsigned short>::iterator v);
void tf227_1(std::vector<unsigned long>::iterator v);
void tf227_2(std::vector<unsigned long long>::iterator v);
void tf227_3(std::vector<int *>::iterator v);
void tf227_4(std::array<std::string, 10> v);`),
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
      assert.fail(`h2dtscpp_gen_0227 执行异常: ${String(err)}`);
    }
  });
});
