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
import { transTskey2Ckey } from '../../../gen/gendts';
import * as parsec from '../../../parse/parsec';
import { runCompatSafe } from './stability_helpers';

suite('Stability_H2DTS_CONVERT_ITERATOR', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ITERATOR_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0001_STD_STRING_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0001_STD_STRING_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: baseline type-string convert; type
   *            std::string::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0001_std_string_iterator', () => {
    try {
      const result = transTskey2Ckey('std::string::iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_iterator_0001_std_string_iterator convert output non-empty");
      assert.strictEqual(result, "IterableIterator<string>",
        "h2dts_convert_iterator_0001_std_string_iterator convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0001_std_string_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0002_STD_STRING_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0002_STD_STRING_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: function-param convert; type
   *            std::string::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0002_std_string_iterator', () => {
    try {
      const r = parsec.parseFunction(`void sample307(std::string::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0002_std_string_iterator param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<string>",
        "h2dts_convert_iterator_0002_std_string_iterator param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0002_std_string_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0003_ITERABLEITERATOR_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0003_ITERABLEITERATOR_STRING
   * @tc.desc   Stability convert h2dts/iterator: function-return convert; type
   *            std::string::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0003_iterableiterator_string', () => {
    try {
      const r = parsec.parseFunction(`std::string::iterator sampleRet307();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0003_iterableiterator_string return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<string>",
        "h2dts_convert_iterator_0003_iterableiterator_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0003_iterableiterator_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0004_STD_STRING_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0004_STD_STRING_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: class-field convert; type std::string::iterator;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0004_std_string_iterator', () => {
    try {
      const r = parsec.parseClass(`class SampleClass307 { public: std::string::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0004_std_string_iterator class field convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<string>",
        "h2dts_convert_iterator_0004_std_string_iterator class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0004_std_string_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0005_STD_STRING_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0005_STD_STRING_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: parse-convert-gen pipeline; type
   *            std::string::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0005_std_string_iterator', () => {
    try {
      const r = parsec.parseFunction(`void pipeline307(std::string::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0005_std_string_iterator pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<string>",
        "h2dts_convert_iterator_0005_std_string_iterator pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0005_std_string_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0006_STD_VECTOR_INT_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0006_STD_VECTOR_INT_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: baseline type-string convert; type
   *            std::vector<int>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0006_std_vector_int_iterator', () => {
    try {
      const result = transTskey2Ckey('std::vector<int>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_iterator_0006_std_vector_int_iterator convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0006_std_vector_int_iterator convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0006_std_vector_int_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0007_STD_VECTOR_INT_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0007_STD_VECTOR_INT_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: function-param convert; type
   *            std::vector<int>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0007_std_vector_int_iterator', () => {
    try {
      const r = parsec.parseFunction(`void sample308(std::vector<int>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0007_std_vector_int_iterator param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0007_std_vector_int_iterator param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0007_std_vector_int_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0008_ITERABLEITERATOR_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0008_ITERABLEITERATOR_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/iterator: function-return convert; type
   *            std::vector<int>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0008_iterableiterator_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::vector<int>::iterator sampleRet308();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0008_iterableiterator_array_number return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0008_iterableiterator_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0008_iterableiterator_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0009_STD_VECTOR_INT_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0009_STD_VECTOR_INT_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: class-field convert; type
   *            std::vector<int>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0009_std_vector_int_iterator', () => {
    try {
      const r = parsec.parseClass(`class SampleClass308 { public: std::vector<int>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0009_std_vector_int_iterator class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_iterator_0009_std_vector_int_iterator class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0009_std_vector_int_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0010_STD_VECTOR_INT_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0010_STD_VECTOR_INT_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: parse-convert-gen pipeline; type
   *            std::vector<int>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0010_std_vector_int_iterator', () => {
    try {
      const r = parsec.parseFunction(`void pipeline308(std::vector<int>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0010_std_vector_int_iterator pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0010_std_vector_int_iterator pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0010_std_vector_int_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0001_STD_ARRAY_UINT8_T_10_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0001_STD_ARRAY_UINT8_T_10_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: function-param convert; type std::array<uint8_t,
   *            10>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0001_std_array_uint8_t_10_iterator', () => {
    try {
      const r = parsec.parseFunction(`void sample335(std::array<uint8_t, 10>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0001_std_array_uint8_t_10_iterator param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0001_std_array_uint8_t_10_iterator param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0001_std_array_uint8_t_10_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0002_ITERABLEITERATOR_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0002_ITERABLEITERATOR_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/iterator: function-return convert; type std::array<uint8_t,
   *            10>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0002_iterableiterator_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::array<uint8_t, 10>::iterator sampleRet335();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0002_iterableiterator_array_number return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0002_iterableiterator_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0002_iterableiterator_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0003_STD_ARRAY_UINT8_T_10_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0003_STD_ARRAY_UINT8_T_10_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: class-field convert; type std::array<uint8_t,
   *            10>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0003_std_array_uint8_t_10_iterator', () => {
    try {
      const r = parsec.parseClass(`class SampleClass335 { public: std::array<uint8_t, 10>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0003_std_array_uint8_t_10_iterator class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_iterator_0003_std_array_uint8_t_10_iterator class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0003_std_array_uint8_t_10_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0004_STD_ARRAY_UINT8_T_10_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0004_STD_ARRAY_UINT8_T_10_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: parse-convert-gen pipeline; type
   *            std::array<uint8_t, 10>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0004_std_array_uint8_t_10_iterator', () => {
    try {
      const r = parsec.parseFunction(`void pipeline335(std::array<uint8_t, 10>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0004_std_array_uint8_t_10_iterator pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0004_std_array_uint8_t_10_iterator pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0004_std_array_uint8_t_10_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0005_STD_ARRAY_UINT16_T_10_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0005_STD_ARRAY_UINT16_T_10_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: baseline type-string convert; type
   *            std::array<uint16_t, 10>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0005_std_array_uint16_t_10_iterator', () => {
    try {
      const result = transTskey2Ckey('std::array<uint16_t, 10>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_iterator_0005_std_array_uint16_t_10_iterator convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0005_std_array_uint16_t_10_iterator convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0005_std_array_uint16_t_10_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0006_STD_ARRAY_UINT16_T_10_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0006_STD_ARRAY_UINT16_T_10_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: function-param convert; type std::array<uint16_t,
   *            10>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0006_std_array_uint16_t_10_iterator', () => {
    try {
      const r = parsec.parseFunction(`void sample336(std::array<uint16_t, 10>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0006_std_array_uint16_t_10_iterator param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0006_std_array_uint16_t_10_iterator param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0006_std_array_uint16_t_10_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0007_ITERABLEITERATOR_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0007_ITERABLEITERATOR_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/iterator: function-return convert; type std::array<uint16_t,
   *            10>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0007_iterableiterator_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::array<uint16_t, 10>::iterator sampleRet336();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0007_iterableiterator_array_number return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0007_iterableiterator_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0007_iterableiterator_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0008_STD_ARRAY_UINT16_T_10_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0008_STD_ARRAY_UINT16_T_10_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: class-field convert; type std::array<uint16_t,
   *            10>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0008_std_array_uint16_t_10_iterator', () => {
    try {
      const r = parsec.parseClass(`class SampleClass336 { public: std::array<uint16_t, 10>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0008_std_array_uint16_t_10_iterator class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_iterator_0008_std_array_uint16_t_10_iterator class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0008_std_array_uint16_t_10_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0009_STD_ARRAY_UINT16_T_10_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0009_STD_ARRAY_UINT16_T_10_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: parse-convert-gen pipeline; type
   *            std::array<uint16_t, 10>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0009_std_array_uint16_t_10_iterator', () => {
    try {
      const r = parsec.parseFunction(`void pipeline336(std::array<uint16_t, 10>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0009_std_array_uint16_t_10_iterator pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0009_std_array_uint16_t_10_iterator pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0009_std_array_uint16_t_10_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0010_STD_ARRAY_UINT32_T_10_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0010_STD_ARRAY_UINT32_T_10_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: baseline type-string convert; type
   *            std::array<uint32_t, 10>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0010_std_array_uint32_t_10_iterator', () => {
    try {
      const result = transTskey2Ckey('std::array<uint32_t, 10>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_iterator_0010_std_array_uint32_t_10_iterator convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0010_std_array_uint32_t_10_iterator convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0010_std_array_uint32_t_10_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0001_STD_DEQUE_INT64_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0001_STD_DEQUE_INT64_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: function-param convert; type
   *            std::deque<int64_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0001_std_deque_int64_t_iterator', () => {
    try {
      const r = parsec.parseFunction(`void sample363(std::deque<int64_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0001_std_deque_int64_t_iterator param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0001_std_deque_int64_t_iterator param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0001_std_deque_int64_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0002_ITERABLEITERATOR_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0002_ITERABLEITERATOR_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/iterator: function-return convert; type
   *            std::deque<int64_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0002_iterableiterator_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::deque<int64_t>::iterator sampleRet363();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0002_iterableiterator_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0002_iterableiterator_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0002_iterableiterator_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0003_STD_DEQUE_INT64_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0003_STD_DEQUE_INT64_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: class-field convert; type
   *            std::deque<int64_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0003_std_deque_int64_t_iterator', () => {
    try {
      const r = parsec.parseClass(`class SampleClass363 { public: std::deque<int64_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0003_std_deque_int64_t_iterator class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_iterator_0003_std_deque_int64_t_iterator class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0003_std_deque_int64_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0004_STD_DEQUE_INT64_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0004_STD_DEQUE_INT64_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: parse-convert-gen pipeline; type
   *            std::deque<int64_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0004_std_deque_int64_t_iterator', () => {
    try {
      const r = parsec.parseFunction(`void pipeline363(std::deque<int64_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0004_std_deque_int64_t_iterator pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0004_std_deque_int64_t_iterator pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0004_std_deque_int64_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0005_STD_DEQUE_UNSIGNED_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0005_STD_DEQUE_UNSIGNED_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: baseline type-string convert; type
   *            std::deque<unsigned>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0005_std_deque_unsigned_iterator', () => {
    try {
      const result = transTskey2Ckey('std::deque<unsigned>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_iterator_0005_std_deque_unsigned_iterator convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0005_std_deque_unsigned_iterator convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0005_std_deque_unsigned_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0006_STD_DEQUE_UNSIGNED_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0006_STD_DEQUE_UNSIGNED_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: function-param convert; type
   *            std::deque<unsigned>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0006_std_deque_unsigned_iterator', () => {
    try {
      const r = parsec.parseFunction(`void sample364(std::deque<unsigned>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0006_std_deque_unsigned_iterator param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0006_std_deque_unsigned_iterator param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0006_std_deque_unsigned_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0007_ITERABLEITERATOR_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0007_ITERABLEITERATOR_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/iterator: function-return convert; type
   *            std::deque<unsigned>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0007_iterableiterator_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::deque<unsigned>::iterator sampleRet364();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0007_iterableiterator_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0007_iterableiterator_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0007_iterableiterator_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0008_STD_DEQUE_UNSIGNED_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0008_STD_DEQUE_UNSIGNED_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: class-field convert; type
   *            std::deque<unsigned>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0008_std_deque_unsigned_iterator', () => {
    try {
      const r = parsec.parseClass(`class SampleClass364 { public: std::deque<unsigned>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0008_std_deque_unsigned_iterator class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_iterator_0008_std_deque_unsigned_iterator class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0008_std_deque_unsigned_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0009_STD_DEQUE_UNSIGNED_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0009_STD_DEQUE_UNSIGNED_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: parse-convert-gen pipeline; type
   *            std::deque<unsigned>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0009_std_deque_unsigned_iterator', () => {
    try {
      const r = parsec.parseFunction(`void pipeline364(std::deque<unsigned>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0009_std_deque_unsigned_iterator pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0009_std_deque_unsigned_iterator pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0009_std_deque_unsigned_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0010_STD_DEQUE_BOOL_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0010_STD_DEQUE_BOOL_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: baseline type-string convert; type
   *            std::deque<bool>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0010_std_deque_bool_iterator', () => {
    try {
      const result = transTskey2Ckey('std::deque<bool>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_iterator_0010_std_deque_bool_iterator convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<boolean>>",
        "h2dts_convert_iterator_0010_std_deque_bool_iterator convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0010_std_deque_bool_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0001_STD_LIST_CHAR32_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0001_STD_LIST_CHAR32_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: function-param convert; type
   *            std::list<char32_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0001_std_list_char32_t_iterator', () => {
    try {
      const r = parsec.parseFunction(`void sample391(std::list<char32_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0001_std_list_char32_t_iterator param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0001_std_list_char32_t_iterator param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0001_std_list_char32_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0002_ITERABLEITERATOR_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0002_ITERABLEITERATOR_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/iterator: function-return convert; type
   *            std::list<char32_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0002_iterableiterator_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::list<char32_t>::iterator sampleRet391();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0002_iterableiterator_array_string return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0002_iterableiterator_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0002_iterableiterator_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0003_STD_LIST_CHAR32_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0003_STD_LIST_CHAR32_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: class-field convert; type
   *            std::list<char32_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0003_std_list_char32_t_iterator', () => {
    try {
      const r = parsec.parseClass(`class SampleClass391 { public: std::list<char32_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0003_std_list_char32_t_iterator class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_iterator_0003_std_list_char32_t_iterator class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0003_std_list_char32_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0004_STD_LIST_CHAR32_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0004_STD_LIST_CHAR32_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: parse-convert-gen pipeline; type
   *            std::list<char32_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0004_std_list_char32_t_iterator', () => {
    try {
      const r = parsec.parseFunction(`void pipeline391(std::list<char32_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0004_std_list_char32_t_iterator pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0004_std_list_char32_t_iterator pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0004_std_list_char32_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0005_STD_FORWARD_LIST_INT_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0005_STD_FORWARD_LIST_INT_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: baseline type-string convert; type
   *            std::forward_list<int>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0005_std_forward_list_int_iterator', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<int>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_iterator_0005_std_forward_list_int_iterator convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0005_std_forward_list_int_iterator convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0005_std_forward_list_int_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0006_STD_FORWARD_LIST_INT_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0006_STD_FORWARD_LIST_INT_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: function-param convert; type
   *            std::forward_list<int>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0006_std_forward_list_int_iterator', () => {
    try {
      const r = parsec.parseFunction(`void sample392(std::forward_list<int>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0006_std_forward_list_int_iterator param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0006_std_forward_list_int_iterator param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0006_std_forward_list_int_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0007_ITERABLEITERATOR_ARRAY_NUMBER_V3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0007_ITERABLEITERATOR_ARRAY_NUMBER_V3
   * @tc.desc   Stability convert h2dts/iterator: function-return convert; type
   *            std::forward_list<int>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0007_iterableiterator_array_number_v3', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<int>::iterator sampleRet392();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0007_iterableiterator_array_number_v3 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0007_iterableiterator_array_number_v3 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0007_iterableiterator_array_number_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0008_STD_FORWARD_LIST_INT_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0008_STD_FORWARD_LIST_INT_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: class-field convert; type
   *            std::forward_list<int>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0008_std_forward_list_int_iterator', () => {
    try {
      const r = parsec.parseClass(`class SampleClass392 { public: std::forward_list<int>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0008_std_forward_list_int_iterator class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_iterator_0008_std_forward_list_int_iterator class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0008_std_forward_list_int_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0009_STD_FORWARD_LIST_INT_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0009_STD_FORWARD_LIST_INT_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: parse-convert-gen pipeline; type
   *            std::forward_list<int>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0009_std_forward_list_int_iterator', () => {
    try {
      const r = parsec.parseFunction(`void pipeline392(std::forward_list<int>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0009_std_forward_list_int_iterator pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0009_std_forward_list_int_iterator pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0009_std_forward_list_int_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0010_STD_FORWARD_LIST_SIZE_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0010_STD_FORWARD_LIST_SIZE_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: baseline type-string convert; type
   *            std::forward_list<size_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0010_std_forward_list_size_t_iterator', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<size_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_iterator_0010_std_forward_list_size_t_iterator convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0010_std_forward_list_size_t_iterator convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0010_std_forward_list_size_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0001_STD_STACK_UINT8_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0001_STD_STACK_UINT8_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: function-param convert; type
   *            std::stack<uint8_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0001_std_stack_uint8_t_iterator', () => {
    try {
      const r = parsec.parseFunction(`void sample440(std::stack<uint8_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0001_std_stack_uint8_t_iterator param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0001_std_stack_uint8_t_iterator param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0001_std_stack_uint8_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0002_ITERABLEITERATOR_ARRAY_NUMBER_V3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0002_ITERABLEITERATOR_ARRAY_NUMBER_V3
   * @tc.desc   Stability convert h2dts/iterator: function-return convert; type
   *            std::stack<uint8_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0002_iterableiterator_array_number_v3', () => {
    try {
      const r = parsec.parseFunction(`std::stack<uint8_t>::iterator sampleRet440();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0002_iterableiterator_array_number_v3 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0002_iterableiterator_array_number_v3 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0002_iterableiterator_array_number_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0003_STD_STACK_UINT8_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0003_STD_STACK_UINT8_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: class-field convert; type
   *            std::stack<uint8_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0003_std_stack_uint8_t_iterator', () => {
    try {
      const r = parsec.parseClass(`class SampleClass440 { public: std::stack<uint8_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0003_std_stack_uint8_t_iterator class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_iterator_0003_std_stack_uint8_t_iterator class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0003_std_stack_uint8_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0004_STD_STACK_UINT8_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0004_STD_STACK_UINT8_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: parse-convert-gen pipeline; type
   *            std::stack<uint8_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0004_std_stack_uint8_t_iterator', () => {
    try {
      const r = parsec.parseFunction(`void pipeline440(std::stack<uint8_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0004_std_stack_uint8_t_iterator pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0004_std_stack_uint8_t_iterator pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0004_std_stack_uint8_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0005_STD_STACK_UINT16_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0005_STD_STACK_UINT16_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: baseline type-string convert; type
   *            std::stack<uint16_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0005_std_stack_uint16_t_iterator', () => {
    try {
      const result = transTskey2Ckey('std::stack<uint16_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_iterator_0005_std_stack_uint16_t_iterator convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0005_std_stack_uint16_t_iterator convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0005_std_stack_uint16_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0006_STD_STACK_UINT16_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0006_STD_STACK_UINT16_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: function-param convert; type
   *            std::stack<uint16_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0006_std_stack_uint16_t_iterator', () => {
    try {
      const r = parsec.parseFunction(`void sample441(std::stack<uint16_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0006_std_stack_uint16_t_iterator param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0006_std_stack_uint16_t_iterator param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0006_std_stack_uint16_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0007_ITERABLEITERATOR_ARRAY_NUMBER_V4
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0007_ITERABLEITERATOR_ARRAY_NUMBER_V4
   * @tc.desc   Stability convert h2dts/iterator: function-return convert; type
   *            std::stack<uint16_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0007_iterableiterator_array_number_v4', () => {
    try {
      const r = parsec.parseFunction(`std::stack<uint16_t>::iterator sampleRet441();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0007_iterableiterator_array_number_v4 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0007_iterableiterator_array_number_v4 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0007_iterableiterator_array_number_v4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0008_STD_STACK_UINT16_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0008_STD_STACK_UINT16_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: class-field convert; type
   *            std::stack<uint16_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0008_std_stack_uint16_t_iterator', () => {
    try {
      const r = parsec.parseClass(`class SampleClass441 { public: std::stack<uint16_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0008_std_stack_uint16_t_iterator class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_iterator_0008_std_stack_uint16_t_iterator class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0008_std_stack_uint16_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0009_STD_STACK_UINT16_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0009_STD_STACK_UINT16_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: parse-convert-gen pipeline; type
   *            std::stack<uint16_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0009_std_stack_uint16_t_iterator', () => {
    try {
      const r = parsec.parseFunction(`void pipeline441(std::stack<uint16_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0009_std_stack_uint16_t_iterator pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0009_std_stack_uint16_t_iterator pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0009_std_stack_uint16_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0010_STD_STACK_UINT32_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0010_STD_STACK_UINT32_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: baseline type-string convert; type
   *            std::stack<uint32_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0010_std_stack_uint32_t_iterator', () => {
    try {
      const result = transTskey2Ckey('std::stack<uint32_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_iterator_0010_std_stack_uint32_t_iterator convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0010_std_stack_uint32_t_iterator convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0010_std_stack_uint32_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0001_STD_QUEUE_INT64_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0001_STD_QUEUE_INT64_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: function-param convert; type
   *            std::queue<int64_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0001_std_queue_int64_t_iterator', () => {
    try {
      const r = parsec.parseFunction(`void sample489(std::queue<int64_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0001_std_queue_int64_t_iterator param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0001_std_queue_int64_t_iterator param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0001_std_queue_int64_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0002_ITERABLEITERATOR_ARRAY_NUMBER_V4
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0002_ITERABLEITERATOR_ARRAY_NUMBER_V4
   * @tc.desc   Stability convert h2dts/iterator: function-return convert; type
   *            std::queue<int64_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0002_iterableiterator_array_number_v4', () => {
    try {
      const r = parsec.parseFunction(`std::queue<int64_t>::iterator sampleRet489();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0002_iterableiterator_array_number_v4 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0002_iterableiterator_array_number_v4 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0002_iterableiterator_array_number_v4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0003_STD_QUEUE_INT64_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0003_STD_QUEUE_INT64_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: class-field convert; type
   *            std::queue<int64_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0003_std_queue_int64_t_iterator', () => {
    try {
      const r = parsec.parseClass(`class SampleClass489 { public: std::queue<int64_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0003_std_queue_int64_t_iterator class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_iterator_0003_std_queue_int64_t_iterator class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0003_std_queue_int64_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0004_STD_QUEUE_INT64_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0004_STD_QUEUE_INT64_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: parse-convert-gen pipeline; type
   *            std::queue<int64_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0004_std_queue_int64_t_iterator', () => {
    try {
      const r = parsec.parseFunction(`void pipeline489(std::queue<int64_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0004_std_queue_int64_t_iterator pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0004_std_queue_int64_t_iterator pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0004_std_queue_int64_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0005_STD_QUEUE_UNSIGNED_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0005_STD_QUEUE_UNSIGNED_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: baseline type-string convert; type
   *            std::queue<unsigned>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0005_std_queue_unsigned_iterator', () => {
    try {
      const result = transTskey2Ckey('std::queue<unsigned>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_iterator_0005_std_queue_unsigned_iterator convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0005_std_queue_unsigned_iterator convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0005_std_queue_unsigned_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0006_STD_QUEUE_UNSIGNED_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0006_STD_QUEUE_UNSIGNED_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: function-param convert; type
   *            std::queue<unsigned>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0006_std_queue_unsigned_iterator', () => {
    try {
      const r = parsec.parseFunction(`void sample490(std::queue<unsigned>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0006_std_queue_unsigned_iterator param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0006_std_queue_unsigned_iterator param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0006_std_queue_unsigned_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0007_ITERABLEITERATOR_ARRAY_NUMBER_V5
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0007_ITERABLEITERATOR_ARRAY_NUMBER_V5
   * @tc.desc   Stability convert h2dts/iterator: function-return convert; type
   *            std::queue<unsigned>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0007_iterableiterator_array_number_v5', () => {
    try {
      const r = parsec.parseFunction(`std::queue<unsigned>::iterator sampleRet490();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0007_iterableiterator_array_number_v5 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0007_iterableiterator_array_number_v5 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0007_iterableiterator_array_number_v5 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0008_STD_QUEUE_UNSIGNED_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0008_STD_QUEUE_UNSIGNED_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: class-field convert; type
   *            std::queue<unsigned>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0008_std_queue_unsigned_iterator', () => {
    try {
      const r = parsec.parseClass(`class SampleClass490 { public: std::queue<unsigned>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0008_std_queue_unsigned_iterator class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_iterator_0008_std_queue_unsigned_iterator class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0008_std_queue_unsigned_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0009_STD_QUEUE_UNSIGNED_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0009_STD_QUEUE_UNSIGNED_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: parse-convert-gen pipeline; type
   *            std::queue<unsigned>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0009_std_queue_unsigned_iterator', () => {
    try {
      const r = parsec.parseFunction(`void pipeline490(std::queue<unsigned>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0009_std_queue_unsigned_iterator pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0009_std_queue_unsigned_iterator pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0009_std_queue_unsigned_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0010_STD_QUEUE_BOOL_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0010_STD_QUEUE_BOOL_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: baseline type-string convert; type
   *            std::queue<bool>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0010_std_queue_bool_iterator', () => {
    try {
      const result = transTskey2Ckey('std::queue<bool>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_iterator_0010_std_queue_bool_iterator convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<boolean>>",
        "h2dts_convert_iterator_0010_std_queue_bool_iterator convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0010_std_queue_bool_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0001_STD_VALARRAY_CHAR32_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0001_STD_VALARRAY_CHAR32_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: function-param convert; type
   *            std::valarray<char32_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0001_std_valarray_char32_t_iterator', () => {
    try {
      const r = parsec.parseFunction(`void sample517(std::valarray<char32_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0001_std_valarray_char32_t_iterator param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0001_std_valarray_char32_t_iterator param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0001_std_valarray_char32_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0002_ITERABLEITERATOR_ARRAY_STRING_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0002_ITERABLEITERATOR_ARRAY_STRING_V2
   * @tc.desc   Stability convert h2dts/iterator: function-return convert; type
   *            std::valarray<char32_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0002_iterableiterator_array_string_v2', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<char32_t>::iterator sampleRet517();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0002_iterableiterator_array_string_v2 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0002_iterableiterator_array_string_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0002_iterableiterator_array_string_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0003_STD_VALARRAY_CHAR32_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0003_STD_VALARRAY_CHAR32_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: class-field convert; type
   *            std::valarray<char32_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0003_std_valarray_char32_t_iterator', () => {
    try {
      const r = parsec.parseClass(`class SampleClass517 { public: std::valarray<char32_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0003_std_valarray_char32_t_iterator class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_iterator_0003_std_valarray_char32_t_iterator class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0003_std_valarray_char32_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0004_STD_VALARRAY_CHAR32_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0004_STD_VALARRAY_CHAR32_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: parse-convert-gen pipeline; type
   *            std::valarray<char32_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0004_std_valarray_char32_t_iterator', () => {
    try {
      const r = parsec.parseFunction(`void pipeline517(std::valarray<char32_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0004_std_valarray_char32_t_iterator pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0004_std_valarray_char32_t_iterator pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0004_std_valarray_char32_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0005_STD_PRIORITY_QUEUE_INT_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0005_STD_PRIORITY_QUEUE_INT_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: baseline type-string convert; type
   *            std::priority_queue<int>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0005_std_priority_queue_int_iterator', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<int>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_iterator_0005_std_priority_queue_int_iterator convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0005_std_priority_queue_int_iterator convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0005_std_priority_queue_int_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0006_STD_PRIORITY_QUEUE_INT_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0006_STD_PRIORITY_QUEUE_INT_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: function-param convert; type
   *            std::priority_queue<int>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0006_std_priority_queue_int_iterator', () => {
    try {
      const r = parsec.parseFunction(`void sample539(std::priority_queue<int>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0006_std_priority_queue_int_iterator param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0006_std_priority_queue_int_iterator param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0006_std_priority_queue_int_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0007_ITERABLEITERATOR_ARRAY_NUMBER_V6
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0007_ITERABLEITERATOR_ARRAY_NUMBER_V6
   * @tc.desc   Stability convert h2dts/iterator: function-return convert; type
   *            std::priority_queue<int>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0007_iterableiterator_array_number_v6', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<int>::iterator sampleRet539();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0007_iterableiterator_array_number_v6 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0007_iterableiterator_array_number_v6 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0007_iterableiterator_array_number_v6 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0008_STD_PRIORITY_QUEUE_INT_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0008_STD_PRIORITY_QUEUE_INT_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: class-field convert; type
   *            std::priority_queue<int>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0008_std_priority_queue_int_iterator', () => {
    try {
      const r = parsec.parseClass(`class SampleClass539 { public: std::priority_queue<int>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0008_std_priority_queue_int_iterator class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_iterator_0008_std_priority_queue_int_iterator class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0008_std_priority_queue_int_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0009_STD_PRIORITY_QUEUE_INT_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0009_STD_PRIORITY_QUEUE_INT_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: parse-convert-gen pipeline; type
   *            std::priority_queue<int>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0009_std_priority_queue_int_iterator', () => {
    try {
      const r = parsec.parseFunction(`void pipeline539(std::priority_queue<int>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0009_std_priority_queue_int_iterator pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0009_std_priority_queue_int_iterator pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0009_std_priority_queue_int_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0010_STD_PRIORITY_QUEUE_SIZE_T_230B88
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0010_STD_PRIORITY_QUEUE_SIZE_T_230B88
   * @tc.desc   Stability convert h2dts/iterator: baseline type-string convert; type
   *            std::priority_queue<size_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0010_std_priority_queue_size_t_230b88', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<size_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_iterator_0010_std_priority_queue_size_t_230b88 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0010_std_priority_queue_size_t_230b88 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0010_std_priority_queue_size_t_230b88 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0001_STD_MAP_CHAR16_T_INT32_T_FC5EF5
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0001_STD_MAP_CHAR16_T_INT32_T_FC5EF5
   * @tc.desc   Stability convert h2dts/iterator: function-param convert; type std::map<char16_t,
   *            int32_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0001_std_map_char16_t_int32_t_fc5ef5', () => {
    try {
      const r = parsec.parseFunction(`void sample582(std::map<char16_t, int32_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0001_std_map_char16_t_int32_t_fc5ef5 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Map<string, number>>",
        "h2dts_convert_iterator_0001_std_map_char16_t_int32_t_fc5ef5 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0001_std_map_char16_t_int32_t_fc5ef5 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0002_ITERABLEITERATOR_MAP_STRI_0E4DE9
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0002_ITERABLEITERATOR_MAP_STRI_0E4DE9
   * @tc.desc   Stability convert h2dts/iterator: function-return convert; type std::map<char16_t,
   *            int32_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0002_iterableiterator_map_stri_0e4de9', () => {
    try {
      const r = parsec.parseFunction(`std::map<char16_t, int32_t>::iterator sampleRet582();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0002_iterableiterator_map_stri_0e4de9 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Map<string, number>>",
        "h2dts_convert_iterator_0002_iterableiterator_map_stri_0e4de9 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0002_iterableiterator_map_stri_0e4de9 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0003_STD_MAP_CHAR16_T_INT32_T_FC5EF5
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0003_STD_MAP_CHAR16_T_INT32_T_FC5EF5
   * @tc.desc   Stability convert h2dts/iterator: class-field convert; type std::map<char16_t,
   *            int32_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0003_std_map_char16_t_int32_t_fc5ef5', () => {
    try {
      const r = parsec.parseClass(`class SampleClass582 { public: std::map<char16_t, int32_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0003_std_map_char16_t_int32_t_fc5ef5 class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_iterator_0003_std_map_char16_t_int32_t_fc5ef5 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0003_std_map_char16_t_int32_t_fc5ef5 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0004_STD_MAP_CHAR16_T_INT32_T_FC5EF5
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0004_STD_MAP_CHAR16_T_INT32_T_FC5EF5
   * @tc.desc   Stability convert h2dts/iterator: parse-convert-gen pipeline; type
   *            std::map<char16_t, int32_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0004_std_map_char16_t_int32_t_fc5ef5', () => {
    try {
      const r = parsec.parseFunction(`void pipeline582(std::map<char16_t, int32_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0004_std_map_char16_t_int32_t_fc5ef5 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Map<string, number>>",
        "h2dts_convert_iterator_0004_std_map_char16_t_int32_t_fc5ef5 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0004_std_map_char16_t_int32_t_fc5ef5 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0005_STD_MAP_CHAR32_T_SIZE_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0005_STD_MAP_CHAR32_T_SIZE_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: baseline type-string convert; type
   *            std::map<char32_t, size_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0005_std_map_char32_t_size_t_iterator', () => {
    try {
      const result = transTskey2Ckey('std::map<char32_t, size_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_iterator_0005_std_map_char32_t_size_t_iterator convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Map<string, number>>",
        "h2dts_convert_iterator_0005_std_map_char32_t_size_t_iterator convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0005_std_map_char32_t_size_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0006_STD_MAP_CHAR32_T_SIZE_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0006_STD_MAP_CHAR32_T_SIZE_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: function-param convert; type std::map<char32_t,
   *            size_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0006_std_map_char32_t_size_t_iterator', () => {
    try {
      const r = parsec.parseFunction(`void sample583(std::map<char32_t, size_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0006_std_map_char32_t_size_t_iterator param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Map<string, number>>",
        "h2dts_convert_iterator_0006_std_map_char32_t_size_t_iterator param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0006_std_map_char32_t_size_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0007_ITERABLEITERATOR_MAP_STRI_0E4DE9
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0007_ITERABLEITERATOR_MAP_STRI_0E4DE9
   * @tc.desc   Stability convert h2dts/iterator: function-return convert; type std::map<char32_t,
   *            size_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0007_iterableiterator_map_stri_0e4de9', () => {
    try {
      const r = parsec.parseFunction(`std::map<char32_t, size_t>::iterator sampleRet583();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0007_iterableiterator_map_stri_0e4de9 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Map<string, number>>",
        "h2dts_convert_iterator_0007_iterableiterator_map_stri_0e4de9 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0007_iterableiterator_map_stri_0e4de9 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0008_STD_MAP_CHAR32_T_SIZE_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0008_STD_MAP_CHAR32_T_SIZE_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: class-field convert; type std::map<char32_t,
   *            size_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0008_std_map_char32_t_size_t_iterator', () => {
    try {
      const r = parsec.parseClass(`class SampleClass583 { public: std::map<char32_t, size_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0008_std_map_char32_t_size_t_iterator class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_iterator_0008_std_map_char32_t_size_t_iterator class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0008_std_map_char32_t_size_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0009_STD_MAP_CHAR32_T_SIZE_T_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0009_STD_MAP_CHAR32_T_SIZE_T_ITERATOR
   * @tc.desc   Stability convert h2dts/iterator: parse-convert-gen pipeline; type
   *            std::map<char32_t, size_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0009_std_map_char32_t_size_t_iterator', () => {
    try {
      const r = parsec.parseFunction(`void pipeline583(std::map<char32_t, size_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0009_std_map_char32_t_size_t_iterator pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Map<string, number>>",
        "h2dts_convert_iterator_0009_std_map_char32_t_size_t_iterator pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0009_std_map_char32_t_size_t_iterator execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ITERATOR_0010_STD_MAP_CHAR8_T_UINT32_T_CDA300
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ITERATOR_0010_STD_MAP_CHAR8_T_UINT32_T_CDA300
   * @tc.desc   Stability convert h2dts/iterator: baseline type-string convert; type
   *            std::map<char8_t, uint32_t>::iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_iterator_0010_std_map_char8_t_uint32_t_cda300', () => {
    try {
      const result = transTskey2Ckey('std::map<char8_t, uint32_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_iterator_0010_std_map_char8_t_uint32_t_cda300 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Map<string, number>>",
        "h2dts_convert_iterator_0010_std_map_char8_t_uint32_t_cda300 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0010_std_map_char8_t_uint32_t_cda300 execution error: ${String(err)}`);
    }
  });
});
