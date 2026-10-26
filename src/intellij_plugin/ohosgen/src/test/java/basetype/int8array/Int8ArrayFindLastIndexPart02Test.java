/*
 * Copyright (c) 2026 Kaihong Digital.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, softwaredistributed under the License is distributed on
 * an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions andlimitations under the License.
 */

package basetype.int8array;

import basetype.common.Int8Array;
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayFindLastIndexPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFindLastIndexPart02Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify findLastIndex expects int, on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_0100
     * @tc.name int8ArrayFindLastIndexPart02Test001
     * @tc.desc Verify findLastIndex expects int, on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test001() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int result = arr.findLastIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex expects int, on Int8Array.of(5, 15, 25)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_0200
     * @tc.name int8ArrayFindLastIndexPart02Test002
     * @tc.desc Verify findLastIndex expects int, on Int8Array.of(5, 15, 25)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test002() {
    Int8Array arr = Int8Array.of(5, 15, 25);
    int result = arr.findLastIndex((v, unusedIndex, array) -> v == 99);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects int, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_0300
     * @tc.name int8ArrayFindLastIndexPart02Test003
     * @tc.desc Verify findLastIndex expects int, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test003() {
    Int8Array arr = new Int8Array(0);
    int result = arr.findLastIndex((v, unusedIndex, array) -> v > 0);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects index 2, checked via idx + 1 equals 3, on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_0400
     * @tc.name int8ArrayFindLastIndexPart02Test004
     * @tc.desc Verify findLastIndex expects index 2, checked via idx + 1 equals 3, on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test004() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 3);
    assertEqual(3, idx + 1);
    }

    /**
     * Verify findLastIndex expects 1, on Int8Array.of(11, 22, 33), returns '1'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_0500
     * @tc.name int8ArrayFindLastIndexPart02Test005
     * @tc.desc Verify findLastIndex expects 1, on Int8Array.of(11, 22, 33), returns '1'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test005() {
    Int8Array arr = Int8Array.of(11, 22, 33);
    int result = arr.findLastIndex((v, unusedIndex, array) -> v == 22);
    String asString = String.valueOf(result);
    assertEqual("1", asString);
    }

    /**
     * Verify findLastIndex with predicate element > 7 returns last matching index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_0600
     * @tc.name int8ArrayFindLastIndexPart02Test006
     * @tc.desc Verify findLastIndex with predicate element > 7 returns last matching index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test006() {
    Int8Array arr = Int8Array.of(7, 8, 9);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v > 7);
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex with predicate element == 42 returns last matching index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_0700
     * @tc.name int8ArrayFindLastIndexPart02Test007
     * @tc.desc Verify findLastIndex with predicate element == 42 returns last matching index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test007() {
    Int8Array arr = Int8Array.of(42);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 42);
    assertEqual(0, idx);
    Int8Array arr2 = Int8Array.of(50);
    int idx2 = arr2.findLastIndex((v, unusedIndex, array) -> v > 50);
    assertEqual(-1, idx2);
    }

    /**
     * Verify findLastIndex expects 1, on Int8Array.of(10, 20), returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_0800
     * @tc.name int8ArrayFindLastIndexPart02Test008
     * @tc.desc Verify findLastIndex expects 1, on Int8Array.of(10, 20), returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test008() {
    Int8Array arr = Int8Array.of(10, 20);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex expects 2, on Int8Array.of(5, 10, 15)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_0900
     * @tc.name int8ArrayFindLastIndexPart02Test009
     * @tc.desc Verify findLastIndex expects 2, on Int8Array.of(5, 10, 15)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test009() {
    Int8Array arr = Int8Array.of(5, 10, 15);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 15);
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex expects 4, on Int8Array.of(1, 2, 3, 4, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_1000
     * @tc.name int8ArrayFindLastIndexPart02Test010
     * @tc.desc Verify findLastIndex expects 4, on Int8Array.of(1, 2, 3, 4, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test010() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v > 0);
    assertEqual(4, idx);
    }

    /**
     * Verify findLastIndex returns 0 when value exceeds 50 on Int8Array.of(100, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_1100
     * @tc.name int8ArrayFindLastIndexPart02Test011
     * @tc.desc Verify findLastIndex returns 0 when value exceeds 50 on Int8Array.of(100, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test011() {
    Int8Array arr = Int8Array.of(100, 2, 3, 4);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v > 50);
    assertEqual(0, idx);
    }

    /**
     * Verify findLastIndex expects 3, on Int8Array.of(1, 2, 3, 100)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_1200
     * @tc.name int8ArrayFindLastIndexPart02Test012
     * @tc.desc Verify findLastIndex expects 3, on Int8Array.of(1, 2, 3, 100)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test012() {
    Int8Array arr = Int8Array.of(1, 2, 3, 100);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v > 50);
    assertEqual(3, idx);
    }

    /**
     * Verify findLastIndex expects 1, on Int8Array.of(1, 99, 2, 3), returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_1300
     * @tc.name int8ArrayFindLastIndexPart02Test013
     * @tc.desc Verify findLastIndex expects 1, on Int8Array.of(1, 99, 2, 3), returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test013() {
    Int8Array arr = Int8Array.of(1, 99, 2, 3);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 99);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex with predicate element == 60 returns last matching index 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_1400
     * @tc.name int8ArrayFindLastIndexPart02Test014
     * @tc.desc Verify findLastIndex with predicate element == 60 returns last matching index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test014() {
    Int8Array arr = Int8Array.of(50, 60, 50, 60, 50);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 60);
    assertEqual(3, idx);
    }

    /**
     * Verify findLastIndex with predicate element != 7 returns last matching index 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_1500
     * @tc.name int8ArrayFindLastIndexPart02Test015
     * @tc.desc Verify findLastIndex with predicate element != 7 returns last matching index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test015() {
    Int8Array arr = Int8Array.of(7, 7, 7, 8, 7);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v != 7);
    assertEqual(3, idx);
    }

    /**
     * Verify findLastIndex expects arr.length - 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_1600
     * @tc.name int8ArrayFindLastIndexPart02Test016
     * @tc.desc Verify findLastIndex expects arr.length - 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test016() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, INT8_MAX);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == INT8_MAX);
    assertEqual(arr.length() - 1, idx);
    }

    /**
     * Verify findLastIndex expects -1, on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_1700
     * @tc.name int8ArrayFindLastIndexPart02Test017
     * @tc.desc Verify findLastIndex expects -1, on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test017() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v > 100);
    assertEqual(-1, idx);
    }

    /**
     * Verify findLastIndex expects -1, on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_1800
     * @tc.name int8ArrayFindLastIndexPart02Test018
     * @tc.desc Verify findLastIndex expects -1, on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test018() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> {
        if (v < INT8_MIN || v > INT8_MAX) {
        return false;
        }
        return false;
        });
    assertEqual(-1, idx);
    }

    /**
     * Verify findLastIndex with predicate element < -128 returns index -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_1900
     * @tc.name int8ArrayFindLastIndexPart02Test019
     * @tc.desc Verify findLastIndex with predicate element < -128 returns index -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test019() {
    Int8Array arr = Int8Array.of(-128, 0, INT8_MAX);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v < -128);
    assertEqual(-1, idx);
    }

    /**
     * Verify findLastIndex with predicate element > INT8_MAX returns index -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_2000
     * @tc.name int8ArrayFindLastIndexPart02Test020
     * @tc.desc Verify findLastIndex with predicate element > INT8_MAX returns index -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test020() {
    Int8Array arr = Int8Array.of(-128, 0, INT8_MAX);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v > INT8_MAX);
    assertEqual(-1, idx);
    }

    /**
     * Verify findLastIndex expects -1, on Int8Array.of(5, 5, 5, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_2100
     * @tc.name int8ArrayFindLastIndexPart02Test021
     * @tc.desc Verify findLastIndex expects -1, on Int8Array.of(5, 5, 5, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test021() {
    Int8Array arr = Int8Array.of(5, 5, 5, 5);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 6);
    assertEqual(-1, idx);
    }

    /**
     * Verify findLastIndex expects -1, on Int8Array.of(-10, -20, -30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_2200
     * @tc.name int8ArrayFindLastIndexPart02Test022
     * @tc.desc Verify findLastIndex expects -1, on Int8Array.of(-10, -20, -30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test022() {
    Int8Array arr = Int8Array.of(-10, -20, -30);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v > 0);
    assertEqual(-1, idx);
    }

    /**
     * Verify findLastIndex with predicate element == 7 returns last matching index 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_2300
     * @tc.name int8ArrayFindLastIndexPart02Test023
     * @tc.desc Verify findLastIndex with predicate element == 7 returns last matching index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test023() {
    Int8Array arr = Int8Array.of(7, 7, 7, 7);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 7);
    assertEqual(3, idx);
    }

    /**
     * Verify findLastIndex expects 4, on Int8Array.of(1, 2, 1, 2, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_2400
     * @tc.name int8ArrayFindLastIndexPart02Test024
     * @tc.desc Verify findLastIndex expects 4, on Int8Array.of(1, 2, 1, 2, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test024() {
    Int8Array arr = Int8Array.of(1, 2, 1, 2, 1);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 1);
    assertEqual(4, idx);
    }

    /**
     * Verify findLastIndex expects 3, on Int8Array.of(10, 20, 30, 20, 10)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_2500
     * @tc.name int8ArrayFindLastIndexPart02Test025
     * @tc.desc Verify findLastIndex expects 3, on Int8Array.of(10, 20, 30, 20, 10)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test025() {
    Int8Array arr = Int8Array.of(10, 20, 30, 20, 10);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(3, idx);
    }

    /**
     * Verify findLastIndex expects 5, on Int8Array.of(5, 6, 5, 6, 5, 6)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_2600
     * @tc.name int8ArrayFindLastIndexPart02Test026
     * @tc.desc Verify findLastIndex expects 5, on Int8Array.of(5, 6, 5, 6, 5, 6)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test026() {
    Int8Array arr = Int8Array.of(5, 6, 5, 6, 5, 6);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 6);
    assertEqual(5, idx);
    }

    /**
     * Verify findLastIndex with predicate element < 3 returns last matching index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_2700
     * @tc.name int8ArrayFindLastIndexPart02Test027
     * @tc.desc Verify findLastIndex with predicate element < 3 returns last matching index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test027() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v < 3);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex and findIndex return consistent indices with difference 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_2800
     * @tc.name int8ArrayFindLastIndexPart02Test028
     * @tc.desc Verify findLastIndex and findIndex return consistent indices with difference 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test028() {
    Int8Array arr = Int8Array.of(8, 1, 8, 1, 8);
    int lastIdx = arr.findLastIndex((v, unusedIndex, array) -> v == 8);
    int firstIdx = arr.findIndex((v, unusedIndex, array) -> v == 8);
    assertEqual(4, lastIdx - firstIdx);
    }

    /**
     * Verify findLastIndex expects 2 and length stays 5, on Int8Array.of(1, 2, 3, 4, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_2900
     * @tc.name int8ArrayFindLastIndexPart02Test029
     * @tc.desc Verify findLastIndex expects 2 and length stays 5, on Int8Array.of(1, 2, 3, 4, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test029() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    int r = arr.findLastIndex((v, unusedIndex, array) -> v == 3);
    assertEqual(2, r);
    int r1 = arr.length();
    int e1 = 5;
    assertEqual(e1, r1);
    }

    /**
     * Verify findLastIndex expects 1 and byteLength stays 3, on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_3000
     * @tc.name int8ArrayFindLastIndexPart02Test030
     * @tc.desc Verify findLastIndex expects 1 and byteLength stays 3, on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test030() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int r = arr.findLastIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    int r1 = arr.byteLength();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify findLastIndex expects 2 and buffer.byteLength stays 4, on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_3100
     * @tc.name int8ArrayFindLastIndexPart02Test031
     * @tc.desc Verify findLastIndex expects 2 and buffer.byteLength stays 4, on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test031() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.set(3, 4);
    int r = arr.findLastIndex((v, unusedIndex, array) -> v == 3);
    assertEqual(2, r);
    int r1 = arr.buffer().byteLength();
    int e1 = 4;
    assertEqual(e1, r1);
    }

    /**
     * Verify findLastIndex expects 3 when v < 0 and length stays 4, on Int8Array.of(100, -100, 50, -50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_3200
     * @tc.name int8ArrayFindLastIndexPart02Test032
     * @tc.desc Verify findLastIndex expects 3 when v < 0 and length stays 4, on Int8Array.of(100, -100, 50, -50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test032() {
    Int8Array arr = Int8Array.of(100, -100, 50, -50);
    int r = arr.findLastIndex((v, unusedIndex, array) -> v < 0);
    assertEqual(3, r);
    int r1 = arr.length();
    int e1 = 4;
    assertEqual(e1, r1);
    }

    /**
     * Verify findLastIndex on subarray(1, 4) expects 1 and view length stays 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_3300
     * @tc.name int8ArrayFindLastIndexPart02Test033
     * @tc.desc Verify findLastIndex on subarray(1, 4) expects 1 and view length stays 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test033() {
    Int8Array base = Int8Array.of(1, 2, 3, 4, 5);
    Int8Array view = base.subarray(1, 4);
    int r = view.findLastIndex((v, unusedIndex, array) -> v == 3);
    assertEqual(1, r);
    int r1 = view.length();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify findLastIndex returns index 1 for element 2 in Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_3400
     * @tc.name int8ArrayFindLastIndexPart02Test034
     * @tc.desc Verify findLastIndex returns index 1 for element 2 in Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test034() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 2);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex expects 1 and toString stays '1, 2, 3', on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_3500
     * @tc.name int8ArrayFindLastIndexPart02Test035
     * @tc.desc Verify findLastIndex expects 1 and toString stays '1, 2, 3', on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test035() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    int r = arr.findLastIndex((v, unusedIndex, array) -> v == 2);
    assertEqual(1, r);
    String r1 = String.valueOf(arr);
    String e1 = "1,2,3";
    assertEqual(e1, r1);
    }

    /**
     * Verify findLastIndex expects 1 and join(',') stays '10, 20, 30', on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_3600
     * @tc.name int8ArrayFindLastIndexPart02Test036
     * @tc.desc Verify findLastIndex expects 1 and join(',') stays '10, 20, 30', on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test036() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int r = arr.findLastIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    String r1 = arr.join(",");
    String e1 = "10,20,30";
    assertEqual(e1, r1);
    }

    /**
     * Verify findLastIndex expects 2 and $_get(0) stays 42, on Int8Array.of(42, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_3700
     * @tc.name int8ArrayFindLastIndexPart02Test037
     * @tc.desc Verify findLastIndex expects 2 and $_get(0) stays 42, on Int8Array.of(42, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test037() {
    Int8Array arr = Int8Array.of(42, 2, 3);
    int r = arr.findLastIndex((v, unusedIndex, array) -> v == 3);
    assertEqual(2, r);
    Integer r1 = arr.get(0);
    int e1 = 42;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify findLastIndex expects 0 and $_get(arr.length - 1) stays 99, on Int8Array.of(1, 2, 99)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_3800
     * @tc.name int8ArrayFindLastIndexPart02Test038
     * @tc.desc Verify findLastIndex expects 0 and $_get(arr.length - 1) stays 99, on Int8Array.of(1, 2, 99)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test038() {
    Int8Array arr = Int8Array.of(1, 2, 99);
    int r = arr.findLastIndex((v, unusedIndex, array) -> v == 1);
    assertEqual(0, r);
    Integer r1 = arr.get(arr.length() - 1);
    int e1 = 99;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify findLastIndex expects 3 and $_get(3) stays 99, on Int8Array.of(1, 99, 2, 99, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_3900
     * @tc.name int8ArrayFindLastIndexPart02Test039
     * @tc.desc Verify findLastIndex expects 3 and $_get(3) stays 99, on Int8Array.of(1, 99, 2, 99, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test039() {
    Int8Array arr = Int8Array.of(1, 99, 2, 99, 3);
    int r = arr.findLastIndex((v, unusedIndex, array) -> v == 99);
    assertEqual(3, r);
    Integer r1 = arr.get(3);
    int e1 = 99;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify indexOf(33) returns 2 after findLastIndex call does not corrupt array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_4000
     * @tc.name int8ArrayFindLastIndexPart02Test040
     * @tc.desc Verify indexOf(33) returns 2 after findLastIndex call does not corrupt array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test040() {
    Int8Array arr = Int8Array.of(11, 22, 33, 44);
    int rIdx = arr.findLastIndex((v, unusedIndex, array) -> v == 22);
    assertEqual(1, rIdx);
    int r1 = arr.indexOf(33);
    int e1 = 2;
    assertEqual(e1, r1);
    }

    /**
     * Verify findLastIndex expects 1 and element sum stays 100, on Int8Array.of(10, 20, 30, 40)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_4100
     * @tc.name int8ArrayFindLastIndexPart02Test041
     * @tc.desc Verify findLastIndex expects 1 and element sum stays 100, on Int8Array.of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test041() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int r = arr.findLastIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    Integer r1 = arr.get(0) + arr.get(1) + arr.get(2) + arr.get(3);
    int e1 = 100;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify lastIndexOf(1) returns 4 after findLastIndex call does not corrupt array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_4200
     * @tc.name int8ArrayFindLastIndexPart02Test042
     * @tc.desc Verify lastIndexOf(1) returns 4 after findLastIndex call does not corrupt array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test042() {
    Int8Array arr = Int8Array.of(1, 2, 1, 2, 1);
    int rIdx = arr.findLastIndex((v, unusedIndex, array) -> v == 2);
    assertEqual(3, rIdx);
    int r1 = arr.lastIndexOf(1);
    int e1 = 4;
    assertEqual(e1, r1);
    }

    /**
     * Verify findLastIndex expects 1 and at(0)/at(-1) elements intact, on Int8Array.of(77, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_4300
     * @tc.name int8ArrayFindLastIndexPart02Test043
     * @tc.desc Verify findLastIndex expects 1 and at(0)/at(-1) elements intact, on Int8Array.of(77, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test043() {
    Int8Array arr = Int8Array.of(77, 2, 3);
    int r = arr.findLastIndex((v, unusedIndex, array) -> v == 2);
    assertEqual(1, r);
    assertEqualInt(77, arr.at(0));
    Int8Array arr2 = Int8Array.of(1, 2, 88);
    int r2 = arr2.findLastIndex((v, unusedIndex, array) -> v == 2);
    assertEqual(1, r2);
    assertEqualInt(88, arr2.at(-1));
    }

    /**
     * Verify findLastIndex expects 99
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_4400
     * @tc.name int8ArrayFindLastIndexPart02Test044
     * @tc.desc Verify findLastIndex expects 99
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test044() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    int rIdx = arr.findLastIndex((v, unusedIndex, a) -> {
        a.set(0, 99);
        return v == 3;
    });
    assertEqual(2, rIdx);
    assertEqualInt(99, arr.get(0));
    }

    /**
     * Verify findLastIndex expects 5, on Int8Array.of(1, 2, 3, 4, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_4500
     * @tc.name int8ArrayFindLastIndexPart02Test045
     * @tc.desc Verify findLastIndex expects 5, on Int8Array.of(1, 2, 3, 4, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test045() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    int[] capturedLen = {0};
    int rIdx = arr.findLastIndex((v, unusedIndex, a) -> {
        capturedLen[0] = a.length();
        return v == 3;
    });
    assertEqual(2, rIdx);
    assertEqual(5, capturedLen[0]);
    }

    /**
     * Verify findLastIndex expects 4 byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_4600
     * @tc.name int8ArrayFindLastIndexPart02Test046
     * @tc.desc Verify findLastIndex expects 4 byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test046() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int[] capturedBL = {0};
    int rIdx = arr.findLastIndex((v, unusedIndex, a) -> {
        capturedBL[0] = a.byteLength();
        return v == 20;
    });
    assertEqual(1, rIdx);
    assertEqual(4, capturedBL[0]);
    }

    /**
     * Verify findLastIndex expects 2 from ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_4700
     * @tc.name int8ArrayFindLastIndexPart02Test047
     * @tc.desc Verify findLastIndex expects 2 from ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test047() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 2, 4);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.set(3, 4);
    int[] capturedBO = {-1};
    int rIdx = arr.findLastIndex((v, unusedIndex, a) -> {
        capturedBO[0] = a.byteOffset();
        return v == 3;
    });
    assertEqual(2, rIdx);
    assertEqual(2, capturedBO[0]);
    }

    /**
     * Verify findLastIndex callback captures buffer.byteLength 3, on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_4800
     * @tc.name int8ArrayFindLastIndexPart02Test048
     * @tc.desc Verify findLastIndex callback captures buffer.byteLength 3, on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test048() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    int[] capturedBufBL = {0};
    int rIdx = arr.findLastIndex((v, unusedIndex, a) -> {
        capturedBufBL[0] = a.buffer().byteLength();
        return v == 2;
    });
    assertEqual(1, rIdx);
    assertEqual(3, capturedBufBL[0]);
    }

    /**
     * Verify findLastIndex expects 1 when v === 2, on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_4900
     * @tc.name int8ArrayFindLastIndexPart02Test049
     * @tc.desc Verify findLastIndex expects 1 when v === 2, on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test049() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    int r = arr.findLastIndex((v, unusedIndex, array) -> v == 2);
    assertEqual(1, r);
    }

    /**
     * Verify findLastIndex expects 4, on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_5000
     * @tc.name int8ArrayFindLastIndexPart02Test050
     * @tc.desc Verify findLastIndex expects 4, on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test050() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    int[] lastLen = {0};
    int rIdx = arr.findLastIndex((v, unusedIndex, a) -> {
        if (v < INT8_MIN || v > INT8_MAX) {
        return false;
        }
            lastLen[0] = a.length();
        return false;
        });
    assertEqual(-1, rIdx);
    assertEqual(4, lastLen[0]);
    }

    /**
     * Verify findLastIndex expects 11
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_5100
     * @tc.name int8ArrayFindLastIndexPart02Test051
     * @tc.desc Verify findLastIndex expects 11
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test051() {
    Int8Array arr = Int8Array.of(11, 22, 33);
    int[] capturedFirst = {0};
    int rIdx = arr.findLastIndex((v, unusedIndex, a) -> {
        capturedFirst[0] = a.get(0);
        return v == 22;
    });
    assertEqual(1, rIdx);
    assertEqual(11, capturedFirst[0]);
    }

    /**
     * Verify subarray view findLastIndex returns relative index from 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_5200
     * @tc.name int8ArrayFindLastIndexPart02Test052
     * @tc.desc Verify subarray view findLastIndex returns relative index from 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test052() {
    Int8Array base = Int8Array.of(1, 2, 3, 4, 5);
    Int8Array view = base.subarray(1, 4);
    int idx = view.findLastIndex((v, unusedIndex, array) -> v == 3);
    assertEqual(1, idx);
    }

    /**
     * Verify subarray view findLastIndex captures byteOffset 2 from Int8Array.of(10,
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_5300
     * @tc.name int8ArrayFindLastIndexPart02Test053
     * @tc.desc Verify subarray view findLastIndex captures byteOffset 2 from Int8Array.of(10,
     * 20, 30, 40, 50).subarray(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test053() {
    Int8Array base = Int8Array.of(10, 20, 30, 40, 50);
    Int8Array view = base.subarray(2);
    int[] capturedBO = {-1};
    int rIdx = view.findLastIndex((v, unusedIndex, a) -> {
        capturedBO[0] = a.byteOffset();
        return v == 40;
    });
    assertEqual(1, rIdx);
    assertEqual(2, capturedBO[0]);
    }

    /**
     * Verify offset ArrayBuffer view findLastIndex returns relative index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_5400
     * @tc.name int8ArrayFindLastIndexPart02Test054
     * @tc.desc Verify offset ArrayBuffer view findLastIndex returns relative index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test054() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array full = new Int8Array(buf);
    full.set(0, 1);
    full.set(1, 2);
    full.set(2, 3);
    full.set(3, 4);
    full.set(4, 5);
    full.set(5, 6);
    Int8Array view = new Int8Array(buf, 2, 3);
    int idx = view.findLastIndex((v, unusedIndex, array) -> v == 5);
    assertEqual(2, idx);
    }

    /**
     * Verify subarray view findLastIndex returns index 0 for element 8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_5500
     * @tc.name int8ArrayFindLastIndexPart02Test055
     * @tc.desc Verify subarray view findLastIndex returns index 0 for element 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test055() {
    Int8Array base = Int8Array.of(7, 8, 9, 10, 11);
    Int8Array view = base.subarray(1, 3);
    int idx = view.findLastIndex((v, unusedIndex, array) -> v == 8);
    assertEqual(0, idx);
    }

    /**
     * Verify findLastIndex callback on subarray(2, 5) receives array length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_5600
     * @tc.name int8ArrayFindLastIndexPart02Test056
     * @tc.desc Verify findLastIndex callback on subarray(2, 5) receives array length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test056() {
    Int8Array base = Int8Array.of(1, 2, 3, 4, 5, 6);
    Int8Array view = base.subarray(2, 5);
    int[] capturedLen = {0};
    int rIdx = view.findLastIndex((v, unusedIndex, a) -> {
        capturedLen[0] = a.length();
        return v == 4;
    });
    assertEqual(1, rIdx);
    assertEqual(3, capturedLen[0]);
    }

    /**
     * Verify findLastIndex callback on subarray(1, 4) receives buffer byteLength 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_5700
     * @tc.name int8ArrayFindLastIndexPart02Test057
     * @tc.desc Verify findLastIndex callback on subarray(1, 4) receives buffer byteLength 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test057() {
    Int8Array base = Int8Array.of(1, 2, 3, 4, 5);
    Int8Array view = base.subarray(1, 4);
    int[] capturedBufBL = {0};
    int rIdx = view.findLastIndex((v, unusedIndex, a) -> {
        capturedBufBL[0] = a.buffer().byteLength();
        return v == 3;
    });
    assertEqual(1, rIdx);
    assertEqual(5, capturedBufBL[0]);
    }

    /**
     * Verify findLastIndex on subarray(2, 5) returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_5800
     * @tc.name int8ArrayFindLastIndexPart02Test058
     * @tc.desc Verify findLastIndex on subarray(2, 5) returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test058() {
    Int8Array base = Int8Array.of(1, 2, 3, 4, 5, 6, 7);
    Int8Array view = base.subarray(2, 5);
    int idx = view.findLastIndex((v, unusedIndex, array) -> v > 0);
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex on subarray(1, 4) returns -1 when no match
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_5900
     * @tc.name int8ArrayFindLastIndexPart02Test059
     * @tc.desc Verify findLastIndex on subarray(1, 4) returns -1 when no match
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test059() {
    Int8Array base = Int8Array.of(1, 2, 3, 4, 5);
    Int8Array view = base.subarray(1, 4);
    int idx = view.findLastIndex((v, unusedIndex, array) -> v > 100);
    assertEqual(-1, idx);
    }

    /**
     * Verify findLastIndex expects 2 for element 30, on Int8Array.of(10, 20, 30, 40)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_6000
     * @tc.name int8ArrayFindLastIndexPart02Test060
     * @tc.desc Verify findLastIndex expects 2 for element 30, on Int8Array.of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test060() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 30);
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex returns -1 when no element matches predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_6100
     * @tc.name int8ArrayFindLastIndexPart02Test061
     * @tc.desc Verify findLastIndex returns -1 when no element matches predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test061() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v > 100);
    assertEqual(-1, idx);
    }

    /**
     * Verify findLastIndex expects 3 for last element 99, on Int8Array.of(1, 2, 3, 99)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_6200
     * @tc.name int8ArrayFindLastIndexPart02Test062
     * @tc.desc Verify findLastIndex expects 3 for last element 99, on Int8Array.of(1, 2, 3, 99)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test062() {
    Int8Array arr = Int8Array.of(1, 2, 3, 99);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 99);
    assertEqual(3, idx);
    }

    /**
     * Verify findLastIndex expects 2 for element 15, on Int8Array.of(5, 10, 15, 20)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_6300
     * @tc.name int8ArrayFindLastIndexPart02Test063
     * @tc.desc Verify findLastIndex expects 2 for element 15, on Int8Array.of(5, 10, 15, 20)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test063() {
    Int8Array arr = Int8Array.of(5, 10, 15, 20);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 15);
    assertEqual(2, idx);
    }

    /**
     * Verify slice(idx) after findLastIndex(v === 3) has length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_6400
     * @tc.name int8ArrayFindLastIndexPart02Test064
     * @tc.desc Verify slice(idx) after findLastIndex(v === 3) has length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test064() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 3);
    Int8Array tail = arr.slice(idx);
    assertEqual(3, tail.length());
    }

    /**
     * Verify findLastIndex returns 0 when value equals INT8_MAX on Int8Array.of(INT8_MAX)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_6500
     * @tc.name int8ArrayFindLastIndexPart02Test065
     * @tc.desc Verify findLastIndex returns 0 when value equals INT8_MAX on Int8Array.of(INT8_MAX)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test065() {
    Int8Array arr = Int8Array.of(INT8_MAX);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == INT8_MAX);
    assertEqual(0, idx);
    }

    /**
     * Verify findLastIndex expects 1, on Int8Array.of(-128, INT8_MAX), returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_6600
     * @tc.name int8ArrayFindLastIndexPart02Test066
     * @tc.desc Verify findLastIndex expects 1, on Int8Array.of(-128, INT8_MAX), returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test066() {
    Int8Array arr = Int8Array.of(-128, INT8_MAX);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == INT8_MAX);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex expects 4, on Int8Array.of(-10, 5, -20, 5, -30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_6700
     * @tc.name int8ArrayFindLastIndexPart02Test067
     * @tc.desc Verify findLastIndex expects 4, on Int8Array.of(-10, 5, -20, 5, -30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test067() {
    Int8Array arr = Int8Array.of(-10, 5, -20, 5, -30);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v < 0);
    assertEqual(4, idx);
    }

    /**
     * Verify findLastIndex expects 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_6800
     * @tc.name int8ArrayFindLastIndexPart02Test068
     * @tc.desc Verify findLastIndex expects 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test068() {
    Int8Array arr = new Int8Array(256);
    for (int i = 0; i < 256; i++) {
    arr.set(i, 1);
    }
    arr.set(255, 99);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 99);
    assertEqual(255, idx);
    }

    /**
     * Verify findLastIndex expects 0, with $_set(i, 1), on new Int8Array(256)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_6900
     * @tc.name int8ArrayFindLastIndexPart02Test069
     * @tc.desc Verify findLastIndex expects 0, with $_set(i, 1), on new Int8Array(256)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test069() {
    Int8Array arr = new Int8Array(256);
    for (int i = 0; i < 256; i++) {
    arr.set(i, 1);
    }
    arr.set(0, 99);
    int idx = arr.findLastIndex((v, unusedIndex, array) -> v == 99);
    assertEqual(0, idx);
    }

    /**
     * Verify findLastIndex expects 4 on last of three 3s, on Int8Array.of(3, 1, 3, 1, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_7000
     * @tc.name int8ArrayFindLastIndexPart02Test070
     * @tc.desc Verify findLastIndex expects 4 on last of three 3s, on Int8Array.of(3, 1, 3, 1, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test070() {
    Int8Array arr = Int8Array.of(3, 1, 3, 1, 3);
    int r1 = arr.findLastIndex((v, unusedIndex, array) -> v == 3);
    assertEqual(4, r1);
    }

    /**
     * Verify findLastIndex then findIndex returns expected not polluted
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_7100
     * @tc.name int8ArrayFindLastIndexPart02Test071
     * @tc.desc Verify findLastIndex then findIndex returns expected not polluted
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test071() {
    Int8Array arr = Int8Array.of(5, 6, 5, 6, 5);
    int last = arr.findLastIndex((v, unusedIndex, array) -> v == 6);
    int first = arr.findIndex((v, unusedIndex, array) -> v == 6);
    assertEqual(3, last);
    assertEqual(1, first);
    }

    /**
     * Verify findLastIndex expects 5 on last of three 2s, on Int8Array.of(1, 2, 1, 2, 1, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_7200
     * @tc.name int8ArrayFindLastIndexPart02Test072
     * @tc.desc Verify findLastIndex expects 5 on last of three 2s, on Int8Array.of(1, 2, 1, 2, 1, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test072() {
    Int8Array arr = Int8Array.of(1, 2, 1, 2, 1, 2);
    int r1 = arr.findLastIndex((v, unusedIndex, array) -> v == 2);
    assertEqual(5, r1);
    }

    /**
     * Verify unique match findLastIndex equals findIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_7300
     * @tc.name int8ArrayFindLastIndexPart02Test073
     * @tc.desc Verify unique match findLastIndex equals findIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test073() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    int last = arr.findLastIndex((v, unusedIndex, array) -> v == 3);
    int first = arr.findIndex((v, unusedIndex, array) -> v == 3);
    assertEqual(first, last);
    }

    /**
     * Verify findLastIndex(v === 6) minus findIndex(v === 6) equals 6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_7400
     * @tc.name int8ArrayFindLastIndexPart02Test074
     * @tc.desc Verify findLastIndex(v === 6) minus findIndex(v === 6) equals 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test074() {
    Int8Array arr = Int8Array.of(6, 1, 6, 1, 6, 1, 6, 1);
    int last = arr.findLastIndex((v, unusedIndex, array) -> v == 6);
    int first = arr.findIndex((v, unusedIndex, array) -> v == 6);
    assertEqual(6, last - first);
    }

    /**
     * Verify none match both findLastIndex and findIndex equal -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_7500
     * @tc.name int8ArrayFindLastIndexPart02Test075
     * @tc.desc Verify none match both findLastIndex and findIndex equal -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test075() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    int last = arr.findLastIndex((v, unusedIndex, array) -> v > 100);
    int first = arr.findIndex((v, unusedIndex, array) -> v > 100);
    assertEqual(first, last);
    }

    /**
     * Verify findLastIndex and findIndex on empty Int8Array both equal -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_7600
     * @tc.name int8ArrayFindLastIndexPart02Test076
     * @tc.desc Verify findLastIndex and findIndex on empty Int8Array both equal -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test076() {
    Int8Array arr = new Int8Array(0);
    int last = arr.findLastIndex((v, unusedIndex, array) -> v > 0);
    int first = arr.findIndex((v, unusedIndex, array) -> v > 0);
    assertEqual(first, last);
    }

    /**
     * Verify findLastIndex expects 2 and byteOffset stays 0, on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_7700
     * @tc.name int8ArrayFindLastIndexPart02Test077
     * @tc.desc Verify findLastIndex expects 2 and byteOffset stays 0, on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test077() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    int r = arr.findLastIndex((v, unusedIndex, array) -> v == 3);
    assertEqual(2, r);
    int r1 = arr.byteOffset();
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify findLastIndex on subarray(2, 5) expects 1 and view byteOffset stays 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_7800
     * @tc.name int8ArrayFindLastIndexPart02Test078
     * @tc.desc Verify findLastIndex on subarray(2, 5) expects 1 and view byteOffset stays 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test078() {
    Int8Array base = Int8Array.of(1, 2, 3, 4, 5, 6);
    Int8Array view = base.subarray(2, 5);
    int r = view.findLastIndex((v, unusedIndex, array) -> v == 4);
    assertEqual(1, r);
    int r1 = view.byteOffset();
    int e1 = 2;
    assertEqual(e1, r1);
    }

    /**
     * Verify findLastIndex expects 20 from ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART02_7900
     * @tc.name int8ArrayFindLastIndexPart02Test079
     * @tc.desc Verify findLastIndex expects 20 from ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart02Test079() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Int8Array arr = new Int8Array(buf);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    int rIdx = arr.findLastIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, rIdx);
    Int8Array view = new Int8Array(buf);
    assertEqualInt(20, view.get(1));
    }
}
