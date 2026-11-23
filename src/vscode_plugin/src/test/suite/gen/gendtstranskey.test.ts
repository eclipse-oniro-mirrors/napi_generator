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

suite('Gendts_transTskey2Ckey_Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');
  //1, 测试一般情况
  test('transTskey2Ckey_test_1', () => {
    let resStr = genDts.transTskey2Ckey('int');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('size_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('double');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('float');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('short');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('long');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('uint8_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('uint16_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('uint32_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('uint64_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('int8_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('int16_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('int32_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('int64_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('unsigned');
    assert.strictEqual(resStr, 'number');

    resStr = genDts.transTskey2Ckey('bool');
    assert.strictEqual(resStr, 'boolean');

    resStr = genDts.transTskey2Ckey('char');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('wchar_t');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('char8_t');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('char16_t');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('char32_t');
    assert.strictEqual(resStr, 'string');
    //std::string::iterator
    resStr = genDts.transTskey2Ckey('std::string::iterator');
    assert.strictEqual(resStr, 'IterableIterator<string>');
    //std::vector
    resStr = genDts.transTskey2Ckey('std::vector<int>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<size_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<double>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<float>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<short>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<uint8_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<uint16_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<uint32_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<uint64_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<int8_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<int16_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<int32_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<int64_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<unsigned>');
    assert.strictEqual(resStr, 'Array<number>');

    resStr = genDts.transTskey2Ckey('std::vector<bool>');
    assert.strictEqual(resStr, 'Array<boolean>');

    resStr = genDts.transTskey2Ckey('std::vector<char>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::vector<wchar_t>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::vector<char8_t>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::vector<char16_t>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::vector<char32_t>');
    assert.strictEqual(resStr, 'Array<string>');
    //std::vector<T>::iterator
    resStr = genDts.transTskey2Ckey('std::vector<int>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<size_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<double>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<float>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<uint8_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<uint16_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<uint32_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<uint64_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<int8_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<int16_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<int32_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<int64_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<unsigned>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');

    resStr = genDts.transTskey2Ckey('std::vector<bool>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<boolean>>');

    resStr = genDts.transTskey2Ckey('std::vector<char>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::vector<wchar_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::vector<char8_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::vector<char16_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::vector<char32_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    //std::array
    resStr = genDts.transTskey2Ckey('std::array<int, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<size_t, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<double, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<float, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<long, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<short, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<uint8_t, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<uint16_t, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<uint32_t, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<uint64_t, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<int8_t, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<int16_t, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<int32_t, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<int64_t, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<unsigned, 10>');
    assert.strictEqual(resStr, 'Array<number>');

    resStr = genDts.transTskey2Ckey('std::array<bool, 10>');
    assert.strictEqual(resStr, 'Array<boolean>');

    resStr = genDts.transTskey2Ckey('std::array<char, 10>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::array<wchar_t, 10>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::array<char8_t, 10>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::array<char16_t, 10>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::array<char32_t, 10>');
    assert.strictEqual(resStr, 'Array<string>');
    //std::array<T,int>::iterator
    resStr = genDts.transTskey2Ckey('std::array<int, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<size_t, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<double, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<float, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<long, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<short, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<uint8_t, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<uint16_t, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<uint32_t, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<uint64_t, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<int8_t, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<int16_t, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<int32_t, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<int64_t, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<unsigned, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');

    resStr = genDts.transTskey2Ckey('std::array<bool, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<boolean>>');

    resStr = genDts.transTskey2Ckey('std::array<char, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::array<wchar_t, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::array<char8_t, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::array<char16_t, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::array<char32_t, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    //std::deque
    resStr = genDts.transTskey2Ckey('std::deque<int>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<size_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<double>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<float>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<short>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<uint8_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<uint16_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<uint32_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<uint64_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<int8_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<int16_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<int32_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<int64_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<unsigned>');
    assert.strictEqual(resStr, 'Array<number>');

    resStr = genDts.transTskey2Ckey('std::deque<bool>');
    assert.strictEqual(resStr, 'Array<boolean>');

    resStr = genDts.transTskey2Ckey('std::deque<char>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::deque<wchar_t>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::deque<char8_t>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::deque<char16_t>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::deque<char32_t>');
    assert.strictEqual(resStr, 'Array<string>');
    //std::deque<T>::iterator
    resStr = genDts.transTskey2Ckey('std::deque<int>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<size_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<double>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<float>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<uint8_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<uint16_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<uint32_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<uint64_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<int8_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<int16_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<int32_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<int64_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<unsigned>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');

    resStr = genDts.transTskey2Ckey('std::deque<bool>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<boolean>>');

    resStr = genDts.transTskey2Ckey('std::deque<char>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::deque<wchar_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::deque<char8_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::deque<char16_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::deque<char32_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    //std::list
    resStr = genDts.transTskey2Ckey('std::list<int>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<size_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<double>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<float>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<short>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<uint8_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<uint16_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<uint32_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<uint64_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<int8_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<int16_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<int32_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<int64_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<unsigned>');
    assert.strictEqual(resStr, 'Array<number>');

    resStr = genDts.transTskey2Ckey('std::list<bool>');
    assert.strictEqual(resStr, 'Array<boolean>');

    resStr = genDts.transTskey2Ckey('std::list<char>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::list<wchar_t>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::list<char8_t>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::list<char16_t>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::list<char32_t>');
    assert.strictEqual(resStr, 'Array<string>');
    //std::list<T>::iterator
    resStr = genDts.transTskey2Ckey('std::list<int>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<size_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<double>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<float>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<uint8_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<uint16_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<uint32_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<uint64_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<int8_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<int16_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<int32_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<int64_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<unsigned>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');

    resStr = genDts.transTskey2Ckey('std::list<bool>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<boolean>>');

    resStr = genDts.transTskey2Ckey('std::list<char>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::list<wchar_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
