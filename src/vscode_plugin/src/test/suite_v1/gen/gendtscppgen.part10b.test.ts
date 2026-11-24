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

suite('Gendtscpp_gen_Suite_Ext10b', function () {
  test('gendtscpp_gen_ext_0260', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf260_0(std::multimap<char *, unsigned long long>::iterator v);
void tf260_1(std::multimap<std::string, unsigned short>::iterator v);
void tf260_2(std::multimap<int *, std::string>::iterator v);
void tf260_3(std::multimap<double, char *>::iterator v);
void tf260_4(std::multimap<int *, char>::iterator v);`),
        unions: parseUnion(`void tf260_0(std::multimap<char *, unsigned long long>::iterator v);
void tf260_1(std::multimap<std::string, unsigned short>::iterator v);
void tf260_2(std::multimap<int *, std::string>::iterator v);
void tf260_3(std::multimap<double, char *>::iterator v);
void tf260_4(std::multimap<int *, char>::iterator v);`),
        structs: parseStruct(`void tf260_0(std::multimap<char *, unsigned long long>::iterator v);
void tf260_1(std::multimap<std::string, unsigned short>::iterator v);
void tf260_2(std::multimap<int *, std::string>::iterator v);
void tf260_3(std::multimap<double, char *>::iterator v);
void tf260_4(std::multimap<int *, char>::iterator v);`),
        classes: parseClass(`void tf260_0(std::multimap<char *, unsigned long long>::iterator v);
void tf260_1(std::multimap<std::string, unsigned short>::iterator v);
void tf260_2(std::multimap<int *, std::string>::iterator v);
void tf260_3(std::multimap<double, char *>::iterator v);
void tf260_4(std::multimap<int *, char>::iterator v);`),
        funcs: parseFunction(`void tf260_0(std::multimap<char *, unsigned long long>::iterator v);
void tf260_1(std::multimap<std::string, unsigned short>::iterator v);
void tf260_2(std::multimap<int *, std::string>::iterator v);
void tf260_3(std::multimap<double, char *>::iterator v);
void tf260_4(std::multimap<int *, char>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_0260 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0261
  * @tc.name : h2dtscpp_gen_0261
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multimap<std::string, int>, std::unordered_mu... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0261', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf261_0(std::unordered_multimap<std::string, int> v);
void tf261_1(std::unordered_multimap<charb *, size_t> v);
void tf261_2(std::unordered_multimap<std::string, long long> v);
void tf261_3(std::unordered_multimap<char *, int *> v);
void tf261_4(std::unordered_multimap<char *, unsigned long long> v);`),
        unions: parseUnion(`void tf261_0(std::unordered_multimap<std::string, int> v);
void tf261_1(std::unordered_multimap<charb *, size_t> v);
void tf261_2(std::unordered_multimap<std::string, long long> v);
void tf261_3(std::unordered_multimap<char *, int *> v);
void tf261_4(std::unordered_multimap<char *, unsigned long long> v);`),
        structs: parseStruct(`void tf261_0(std::unordered_multimap<std::string, int> v);
void tf261_1(std::unordered_multimap<charb *, size_t> v);
void tf261_2(std::unordered_multimap<std::string, long long> v);
void tf261_3(std::unordered_multimap<char *, int *> v);
void tf261_4(std::unordered_multimap<char *, unsigned long long> v);`),
        classes: parseClass(`void tf261_0(std::unordered_multimap<std::string, int> v);
void tf261_1(std::unordered_multimap<charb *, size_t> v);
void tf261_2(std::unordered_multimap<std::string, long long> v);
void tf261_3(std::unordered_multimap<char *, int *> v);
void tf261_4(std::unordered_multimap<char *, unsigned long long> v);`),
        funcs: parseFunction(`void tf261_0(std::unordered_multimap<std::string, int> v);
void tf261_1(std::unordered_multimap<charb *, size_t> v);
void tf261_2(std::unordered_multimap<std::string, long long> v);
void tf261_3(std::unordered_multimap<char *, int *> v);
void tf261_4(std::unordered_multimap<char *, unsigned long long> v);`),
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
      assert.fail(`h2dtscpp_gen_0261 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0262
  * @tc.name : h2dtscpp_gen_0262
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multimap<std::string, unsigned short>, std::u... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendtscpp_gen_ext_0262', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf262_0(std::unordered_multimap<std::string, unsigned short> v);
void tf262_1(std::unordered_multimap<int *, std::string> v);
void tf262_2(std::unordered_multimap<double, char *> v);
void tf262_3(std::unordered_multimap<int *, char> v);
void tf262_4(std::unordered_multimap<std::string, int>::iterator v);`),
        unions: parseUnion(`void tf262_0(std::unordered_multimap<std::string, unsigned short> v);
void tf262_1(std::unordered_multimap<int *, std::string> v);
void tf262_2(std::unordered_multimap<double, char *> v);
void tf262_3(std::unordered_multimap<int *, char> v);
void tf262_4(std::unordered_multimap<std::string, int>::iterator v);`),
        structs: parseStruct(`void tf262_0(std::unordered_multimap<std::string, unsigned short> v);
void tf262_1(std::unordered_multimap<int *, std::string> v);
void tf262_2(std::unordered_multimap<double, char *> v);
void tf262_3(std::unordered_multimap<int *, char> v);
void tf262_4(std::unordered_multimap<std::string, int>::iterator v);`),
        classes: parseClass(`void tf262_0(std::unordered_multimap<std::string, unsigned short> v);
void tf262_1(std::unordered_multimap<int *, std::string> v);
void tf262_2(std::unordered_multimap<double, char *> v);
void tf262_3(std::unordered_multimap<int *, char> v);
void tf262_4(std::unordered_multimap<std::string, int>::iterator v);`),
        funcs: parseFunction(`void tf262_0(std::unordered_multimap<std::string, unsigned short> v);
void tf262_1(std::unordered_multimap<int *, std::string> v);
void tf262_2(std::unordered_multimap<double, char *> v);
void tf262_3(std::unordered_multimap<int *, char> v);
void tf262_4(std::unordered_multimap<std::string, int>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_0262 执行异常: ${String(err)}`);
    }
  });
});
