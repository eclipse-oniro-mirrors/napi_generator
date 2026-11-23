/*
* Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as genDts from '../../../gen/gendts'
import { ClassObj, EnumObj, FuncObj, GenInfo, ParseObj, StructObj, UnionObj } from '../../../gen/datatype';
import * as fs from 'fs';

suite('Gendts_unions_Suite', () => {
  //1, 测试一般情况
  test('getDtsUnions_test_1', () => {
    //1. alias为空
    let unions: UnionObj[] = [
        {
          name: 'UnionObj',
          alias: '',
          members: [
            {
              type: 'int',
              name: 'v1',
              arraySize: -1,
              arraySizeList: []
            },
            {
              type: 'double',
              name: 'v2',
              arraySize: -1,
              arraySizeList: []
            }
          ],
        },
    ];
    let rootInfo: GenInfo = {
      parseObj: {
        enums: [],
        unions: unions,
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    let resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type UnionObj = number | number ;\n\n');

    //2. alias不为空但和name相同
    unions = [
        {
          name: 'UnionObj',
          alias: 'UnionObj',
          members: [
            {
              type: 'int',
              name: 'v1',
              arraySize: -1,
              arraySizeList: []
            },
            {
              type: 'double',
              name: 'v2',
              arraySize: -1,
              arraySizeList: []
            }
          ],
        },
    ];
    rootInfo = {
      parseObj: {
        enums: [],
        unions: unions,
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type UnionObj = number | number ;\n\n');

    //3. alias不为空且和name不同
    unions = [
        {
          name: 'UnionObj',
          alias: 'UnionObject',
          members: [
            {
              type: 'int',
              name: 'v1',
              arraySize: -1,
              arraySizeList: []
            },
            {
              type: 'double',
              name: 'v2',
              arraySize: -1,
              arraySizeList: []
            }
          ],
        },
    ];
    rootInfo = {
      parseObj: {
        enums: [],
        unions: unions,
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type UnionObj = number | number ;\n\nexport type UnionObject = UnionObj;\n\n');
  });

  //2, 测试边界情况 
  test('getDtsUnions_test_2', () => {
    //1.members仅有一个元素
    let unions: UnionObj[] = [
      {
        name: 'OperationType',
        alias: '',
        members: [
          {
            type: 'int',
            name: 'len',
            arraySize: -1,
            arraySizeList: []
          }
        ]
      }
    ]
    let rootInfo: GenInfo = {
      parseObj: {
        enums: [],
        unions: unions,
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    let resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type OperationType = number ;\n\n');
    //2.members有多个元素
    unions = [
      {
        name: 'OperationType',
        alias: '',
        members: [
          {
            type: 'char',
            name: 'ch',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'wchar_t',
            name: 'wch',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'char8_t',
            name: 'ch8',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'char16_t',
            name: 'ch16',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'char32_t',
            name: 'ch32',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::string',
            name: 'str',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::wstring',
            name: 'wstr',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::u16string',
            name: 'su16sname',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::u32string',
            name: 'su32sname',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::basic_string',
            name: 'sbsname',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'int',
            name: 'len',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'size_t',
            name: 'size',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'uint8_t',
            name: 'u8int',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'uint16_t',
            name: 'u16int',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'uint32_t',
            name: 'u32int',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'uint64_t',
            name: 'u64int',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'int8_t',
            name: 'int8',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'int16_t',
            name: 'int16',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'int32_t',
            name: 'int32',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'int64_t',
            name: 'int64',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'short',
            name: 'slen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned',
            name: 'unum',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'long',
            name: 'llen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'long long',
            name: 'llint',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'float',
            name: 'width',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'double',
            name: 'dlen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'long double',
            name: 'ldlen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'char',
            name: 'name',
            arraySize: 20,
            arraySizeList: [20, 10]
          },
          {
            type: 'char',
            name: 'ch3',
            arraySize: 10,
            arraySizeList: [10, 20, 30]
          },
          {
            type: 'int',
            name: 'len3',
            arraySize: 10,
            arraySizeList: [10, 20, 30]
          },
          {
            type: 'short',
            name: 'slen3',
            arraySize: 10,
            arraySizeList: [10, 20, 30]
          },
          {
            type: 'long',
            name: 'llen3',
            arraySize: 10,
            arraySizeList: [10, 20, 30]
          },
          {
            type: 'long long',
            name: 'llint3',
            arraySize: 10,
            arraySizeList: [10, 20, 30]
          },
          {
            type: 'float',
            name: 'width3',
            arraySize: 10,
            arraySizeList: [10, 20, 30]
          },
          {
            type: 'double',
            name: 'dlens',
            arraySize: 10,
            arraySizeList: [10, 20, 30]
          },
          {
            type: 'long double',
            name: 'ldlen3',
            arraySize: 10,
            arraySizeList: [10, 20, 30]
          },
          {
            type: 'signed char',
            name: 'sch',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'signed int',
            name: 'silen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'signed short',
            name: 'slen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'signed long',
            name: 'sllen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'signed long long',
            name: 'sllint',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'signed float',
            name: 'swidth',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'signed double',
