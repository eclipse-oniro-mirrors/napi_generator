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
            name: 'sdlen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned char',
            name: 'uch',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned int',
            name: 'ulen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned short',
            name: 'uslen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned long',
            name: 'ullen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned long long',
            name: 'ullint',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned float',
            name: 'uwidth',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned double',
            name: 'udlen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned long double',
            name: 'uld',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'bool',
            name: 'bflag',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::map<char, float>',
            name: 'Map',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::vector<int>',
            name: 'svlist',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::deque<int>',
            name: 'sdlist',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::list<int>',
            name: 'slst',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::forward_list<int>',
            name: 'sflist',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::array<int>',
            name: 'salist',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::stack<int>',
            name: 'sqstack',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::queue<int>',
            name: 'sqlist',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::priority_queue<int>',
            name: 'spqlist',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::pair<double, int>',
            name: 'sppair',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::map<doiuble, int>',
            name: 'smap',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::multimap<double, int>',
            name: 'smmap',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::set<double, int>',
            name: 'sset',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::multiset<double, int>',
            name: 'smset',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::unordered_map<double, int>',
            name: 'sumap',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::unordered_multimap<double, int>',
            name: 'summap',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::unordered_set<double, int>',
            name: 'suset',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::unordered_multiset<double, int>',
            name: 'sumset',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::vector<int>::iterator',
            name: 'svlistIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::deque<int>::iterator',
            name: 'sdlistIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::list<int>::iterator',
            name: 'slistIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::forward_list<int>::iterator',
            name: 'sflistIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::array<int>::iterator',
            name: 'salistIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::stack<int>::iterator',
            name: 'sqstackIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::queue<int>::iterator',
            name: 'sqqueIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::priority_queue<int>::iterator',
            name: 'spqlistIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::pair<double, int>::iterator',
            name: 'sppairIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::map<double, int>::iterator',
            name: 'smapIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::multimap<double, int>::iterator',
            name: 'smmapIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::set<double, int>::iterator',
            name: 'ssetIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::multiset<double, int>::iterator',
            name: 'smsetIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::unordered_map<double, int>::iterator',
            name: 'sumapIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::unordered_multimap<double, int>::iterator',
            name: 'summapIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::unordered_set<double, int>::iterator',
            name: 'susetIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::unordered_multiset<double, int>::iterator',
            name: 'sumsetIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::function<int(int, int)>',
            name: 'func',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::tuple<int, float, double>',
            name: 'myTuple',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::complex<double>',
            name: 'myComplex',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::valarray<int>',
            name: 'myValarray',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::time_t',
            name: 'myTimet',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::clock_t',
            name: 'myClock',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::tm',
            name: 'myTm',
            arraySize: -1,
            arraySizeList: []
          }
        ]
      }
    ]
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
    assert.strictEqual(resStr, 'export type OperationType = string | string | string | string | string | string | ' +
      'string | string | string | string | number | number | number | number | number | number | number | number | ' +
      'number | number | number | number | number | number | number | number | number | string | string | number | ' +
      'number | number | number | number | number | number | string | number | number | number | number | number | ' +
      'number | string | number | number | number | number | number | number | number | boolean | ' +
      'Map<string, number> | Array<number> | Array<number> | Array<number> | Array<number> | Array<number> | ' +
      'Array<number> | Array<number> | Array<number> | [number, number] | Map<any, number> | Map<number, number> | ' +
      'Set<number> | Set<number> | Map<number, number> | Map<number, number> | Set<number> | Set<number> | ' +
      'IterableIterator<Array<number>> | IterableIterator<Array<number>> | IterableIterator<Array<number>> | ' +
      'IterableIterator<Array<number>> | IterableIterator<Array<number>> | IterableIterator<Array<number>> | ' +
      'IterableIterator<Array<number>> | IterableIterator<Array<number>> | IterableIterator<[number, number]> | ' +
      'IterableIterator<Map<number, number>> | IterableIterator<Map<number, number>> | ' +
      'IterableIterator<Set<number>> | IterableIterator<Set<number>> | IterableIterator<Map<number, number>> | ' +
      'IterableIterator<Map<number, number>> | IterableIterator<Set<number>> | IterableIterator<Set<number>> | ' +
      '(param0: number, param1: number)=>number | [number, number, number] | {real: number, imag: number} | ' +
      'Array<number> | Date | Date | Date ;\n\n');
    //3.unions有两个成员
    unions = [
      {
        name: 'OType',
        alias: '',
        members: [
          {
            type: 'int',
            name: 'len',
            arraySize: -1,
            arraySizeList: []
          }
        ]
      },
      {
        name: 'TOTSize1',
        alias: '',
        members:[
          {
            type: 'int',
            name: 'len',
            arraySize: -1,
            arraySizeList: []
          }
        ]
      }
    ]
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
    assert.strictEqual(resStr, 'export type OType = number ;\n\nexport type TOTSize1 = number ;\n\n');
    //4.unions有多个成员
    unions = [
      {
        name: 'TEST_1',
        alias: '',
        members: [
          {
            type: 'int',
            name: 'len',
            arraySize: -1,
            arraySizeList: []
          },
        ]
      },
      {
        name: 'TEST_2',
        alias: '',
        members:[
            {
                type: 'char',
                name: 'ch',
                arraySize: 10,
                arraySizeList: [10]
            }
        ]
      },
      {
        name: 'TEST_3',
        alias: '',
        members:[
            {
                type: 'short',
                name: 'slen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_4',
        alias: '',
        members:[
            {
                type: 'long',
                name: 'llen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_5',
        alias: '',
        members:[
            {
                type: 'long long',
                name: 'llint',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_6',
        alias: '',
        members:[
            {
                type: 'float',
                name: 'width',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_7',
        alias: '',
        members:[
            {
                type: 'double',
                name: 'dlen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_8',
        alias: '',
        members:[
            {
                type: 'long double',
                name: 'ldlen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_9',
        alias: '',
        members:[
            {
                type: 'wchar_t',
                name: 'wch',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_10',
        alias: '',
        members:[
            {
                type: 'char',
                name: 'name',
                arraySize: 20,
                arraySizeList: [20, 10]
            }
        ]
      },
      {
        name: 'TEST_11',
        alias: '',
        members:[
            {
                type: 'char',
                name: 'ch3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_12',
        alias: '',
        members:[
            {
                type: 'int',
                name: 'len3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_13',
        alias: '',
        members:[
            {
                type: 'short',
                name: 'slen3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_14',
        alias: '',
        members:[
            {
                type: 'long',
                name: 'llen3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_15',
        alias: '',
        members:[
            {
                type: 'long long',
                name: 'llint3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_16',
        alias: '',
        members:[
            {
                type: 'float',
                name: 'width3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_17',
        alias: '',
        members:[
            {
                type: 'double',
                name: 'dlen3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_18',
        alias: '',
        members:[
            {
                type: 'long double',
                name: 'ldlen3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_19',
        alias: '',
        members:[
            {
                type: 'wchar_t',
                name: 'wch3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_20',
        alias: '',
        members:[
            {
                type: 'signed char',
                name: 'sch',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_21',
        alias: '',
        members:[
            {
                type: 'signed int',
                name: 'silen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_22',
        alias: '',
        members:[
            {
                type: 'signed short',
                name: 'slen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_23',
        alias: '',
        members:[
            {
                type: 'signed long',
                name: 'sllen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_24',
        alias: '',
        members:[
            {
                type: 'signed long long',
                name: 'sllint',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_25',
        alias: '',
        members:[
            {
                type: 'signed float',
                name: 'swidth',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_26',
        alias: '',
        members:[
            {
                type: 'signed double',
                name: 'sdlen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_27',
        alias: '',
        members:[
            {
                type: 'char*',
                name: 'c',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_28',
        alias: '',
        members:[
            {
                type: 'unsigned char',
                name: 'uch',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_29',
        alias: '',
        members:[
            {
                type: 'unsigned int',
                name: 'ulen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_30',
        alias: '',
        members:[
            {
                type: 'unsigned short',
                name: 'uslen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_31',
        alias: '',
        members:[
            {
                type: 'unsigned long',
                name: 'ullen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_32',
        alias: '',
        members:[
            {
                type: 'unsigned long long',
                name: 'ullint',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_33',
        alias: '',
        members:[
            {
                type: 'unsigned float',
                name: 'uwidth',
                arraySize: -1,
                arraySizeList: []
            }
        ]
