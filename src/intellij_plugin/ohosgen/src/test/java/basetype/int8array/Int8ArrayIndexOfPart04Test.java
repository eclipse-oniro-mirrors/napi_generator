/*
 * Copyright (c) 2026 Kaihong Digital.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package basetype.int8array;

import basetype.common.Int8Array;
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.RangeError;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayIndexOfPart04Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIndexOfPart04Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify indexOf(20) on Int8Array.of(10, 20, 30, 40) returns index 1 and length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_0100
     * @tc.name int8ArrayIndexOfPart04Test001
     * @tc.desc Verify indexOf(20) on Int8Array.of(10, 20, 30, 40) returns index 1 and length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test001() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int r1 = arr.indexOf(20);
    int e1 = 1;
    assertEqual(e1, r1);
    int r2 = arr.length();
    int e2 = 4;
    assertEqual(e2, r2);
    }

    /**
     * Verify indexOf(99) on Int8Array.of(10, 20, 30, 40) returns -1 and byteLength unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_0200
     * @tc.name int8ArrayIndexOfPart04Test002
     * @tc.desc Verify indexOf(99) on Int8Array.of(10, 20, 30, 40) returns -1 and byteLength unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test002() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int r1 = arr.indexOf(99);
    int e1 = -1;
    assertEqual(e1, r1);
    int r2 = arr.byteLength();
    int e2 = 4;
    assertEqual(e2, r2);
    }

    /**
     * Verify indexOf(20) on Int8Array.of(10, 20, 30, 40) returns index 1 and elements unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_0300
     * @tc.name int8ArrayIndexOfPart04Test003
     * @tc.desc Verify indexOf(20) on Int8Array.of(10, 20, 30, 40) returns index 1 and elements unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test003() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int r1 = arr.indexOf(20);
    int e1 = 1;
    assertEqual(e1, r1);
    assertEqualInt(10, arr.get(0));
    Integer r2 = arr.get(3);
    int e2 = 40;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify indexOf(20) on Int8Array.of(10, 20, 30, 40) returns index 1 and buffer reference unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_0400
     * @tc.name int8ArrayIndexOfPart04Test004
     * @tc.desc Verify indexOf(20) on Int8Array.of(10, 20, 30, 40) returns index 1 and buffer reference unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test004() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    ArrayBuffer buf = arr.buffer();
    int r1 = arr.indexOf(20);
    int e1 = 1;
    assertEqual(e1, r1);
    ArrayBuffer r2 = arr.buffer();
    ArrayBuffer e2 = buf;
    assertEqual(e2, r2);
    }

    /**
     * Verify indexOf(0) on offset view new Int8Array(new ArrayBuffer(8), 2, 4) return
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_0500
     * @tc.name int8ArrayIndexOfPart04Test005
     * @tc.desc Verify indexOf(0) on offset view new Int8Array(new ArrayBuffer(8), 2, 4) return
     * s index 0 and byteOffset unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test005() {
    Int8Array arr = new Int8Array(new ArrayBuffer(8), 2, 4);
    int r1 = arr.indexOf(0);
    int e1 = 0;
    assertEqual(e1, r1);
    int r2 = arr.byteOffset();
    int e2 = 2;
    assertEqual(e2, r2);
    }

    /**
     * Verify indexOf(50) returns index 0 after $_set(0, 50) on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_0600
     * @tc.name int8ArrayIndexOfPart04Test006
     * @tc.desc Verify indexOf(50) returns index 0 after $_set(0, 50) on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test006() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    arr.set(0, 50);
    int r1 = arr.indexOf(50);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(-50) returns index 2 after $_set(2, -50) on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_0700
     * @tc.name int8ArrayIndexOfPart04Test007
     * @tc.desc Verify indexOf(-50) returns index 2 after $_set(2, -50) on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test007() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    arr.set(2, -50);
    int r1 = arr.indexOf(-50);
    int e1 = 2;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(5) returns index 1 after $_set(0, 9) on Int8Array.of(5, 5, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_0800
     * @tc.name int8ArrayIndexOfPart04Test008
     * @tc.desc Verify indexOf(5) returns index 1 after $_set(0, 9) on Int8Array.of(5, 5, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test008() {
    Int8Array arr = Int8Array.of(5, 5, 5);
    arr.set(0, 9);
    int r1 = arr.indexOf(5);
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(-56) expects 1 after $_set(1, 200) overflows Int8 range to -56 on Int8Array.of(0, 0, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_0900
     * @tc.name int8ArrayIndexOfPart04Test009
     * @tc.desc Verify indexOf(-56) expects 1 after $_set(1, 200) overflows Int8 range to -56 on Int8Array.of(0, 0, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test009() {
    Int8Array arr = Int8Array.of(0, 0, 0);
    arr.set(1, 200);
    int r1 = arr.indexOf(-56);
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(7) returns 0 after fill(7), indexOf(2) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_1000
     * @tc.name int8ArrayIndexOfPart04Test010
     * @tc.desc Verify indexOf(7) returns 0 after fill(7), indexOf(2) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test010() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    arr.fill(7);
    int r1 = arr.indexOf(7);
    int e1 = 0;
    assertEqual(e1, r1);
    int r2 = arr.indexOf(2);
    int e2 = -1;
    assertEqual(e2, r2);
    }

    /**
     * Verify indexOf(7) returns 1 after fill(7, 1, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_1100
     * @tc.name int8ArrayIndexOfPart04Test011
     * @tc.desc Verify indexOf(7) returns 1 after fill(7, 1, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test011() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    arr.fill(7, 1, 3);
    int r1 = arr.indexOf(7);
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(-56) expects 0 after fill(200) overflows Int8 range to -56 on Int8Array.of(0, 0, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_1200
     * @tc.name int8ArrayIndexOfPart04Test012
     * @tc.desc Verify indexOf(-56) expects 0 after fill(200) overflows Int8 range to -56 on Int8Array.of(0, 0, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test012() {
    Int8Array arr = Int8Array.of(0, 0, 0);
    arr.fill(200);
    int r1 = arr.indexOf(-56);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(1) on reversed Int8Array.of(1, 2, 3, 4) returns index 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_1300
     * @tc.name int8ArrayIndexOfPart04Test013
     * @tc.desc Verify indexOf(1) on reversed Int8Array.of(1, 2, 3, 4) returns index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test013() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    arr.reverse();
    int r1 = arr.indexOf(1);
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(8) on reversed Int8Array.of(5, 6, 7, 8) returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_1400
     * @tc.name int8ArrayIndexOfPart04Test014
     * @tc.desc Verify indexOf(8) on reversed Int8Array.of(5, 6, 7, 8) returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test014() {
    Int8Array arr = Int8Array.of(5, 6, 7, 8);
    arr.reverse();
    int r1 = arr.indexOf(8);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(3) on reversed Int8Array.of(3, 3, 3) returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_1500
     * @tc.name int8ArrayIndexOfPart04Test015
     * @tc.desc Verify indexOf(3) on reversed Int8Array.of(3, 3, 3) returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test015() {
    Int8Array arr = Int8Array.of(3, 3, 3);
    arr.reverse();
    int r1 = arr.indexOf(3);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(10) on sorted Int8Array.of(30, 10, 20) returns index 0 and indexOf(30) returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_1600
     * @tc.name int8ArrayIndexOfPart04Test016
     * @tc.desc Verify indexOf(10) on sorted Int8Array.of(30, 10, 20) returns index 0 and indexOf(30) returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test016() {
    Int8Array arr = Int8Array.of(30, 10, 20);
    arr.sort();
    assertEqual(0, arr.indexOf(10));
    assertEqual(2, arr.indexOf(30));
    }

    /**
     * Verify indexOf(20) on sorted Int8Array.of(20, 10, 20, 10) returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_1700
     * @tc.name int8ArrayIndexOfPart04Test017
     * @tc.desc Verify indexOf(20) on sorted Int8Array.of(20, 10, 20, 10) returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test017() {
    Int8Array arr = Int8Array.of(20, 10, 20, 10);
    arr.sort();
    assertEqual(2, arr.indexOf(20));
    }

    /**
     * Verify indexOf(4) returns index 0 after copyWithin(0, 3) on Int8Array.of(1, 2, 3, 4, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_1800
     * @tc.name int8ArrayIndexOfPart04Test018
     * @tc.desc Verify indexOf(4) returns index 0 after copyWithin(0, 3) on Int8Array.of(1, 2, 3, 4, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test018() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(0, 3);
    assertEqual(0, arr.indexOf(4));
    }

    /**
     * Verify indexOf(9, 1) returns index 1 after copyWithin(1, 0, 1) on Int8Array.of(9, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_1900
     * @tc.name int8ArrayIndexOfPart04Test019
     * @tc.desc Verify indexOf(9, 1) returns index 1 after copyWithin(1, 0, 1) on Int8Array.of(9, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test019() {
    Int8Array arr = Int8Array.of(9, 2, 3, 4);
    arr.copyWithin(1, 0, 1);
    assertEqual(1, arr.indexOf(9, 1));
    }

    /**
     * Verify indexOf(5) returns -1 after copyWithin(0, 2, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_2000
     * @tc.name int8ArrayIndexOfPart04Test020
     * @tc.desc Verify indexOf(5) returns -1 after copyWithin(0, 2, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test020() {
    Int8Array arr = Int8Array.of(5, 6, 7, 8);
    arr.copyWithin(0, 2, 4);
    assertEqual(-1, arr.indexOf(5));
    }

    /**
     * Verify indexOf(8) returns index 1 after set(src, 0) on Int8Array.of(0, 0, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_2100
     * @tc.name int8ArrayIndexOfPart04Test021
     * @tc.desc Verify indexOf(8) returns index 1 after set(src, 0) on Int8Array.of(0, 0, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test021() {
    Int8Array arr = Int8Array.of(0, 0, 0);
    Int8Array src = Int8Array.of(7, 8, 9);
    arr.set(src, 0);
    assertEqual(1, arr.indexOf(8));
    }

    /**
     * Verify indexOf(9) returns index 2 after set(src, 2) on Int8Array.of(1, 1, 1, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_2200
     * @tc.name int8ArrayIndexOfPart04Test022
     * @tc.desc Verify indexOf(9) returns index 2 after set(src, 2) on Int8Array.of(1, 1, 1, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test022() {
    Int8Array arr = Int8Array.of(1, 1, 1, 1);
    Int8Array src = Int8Array.of(9, 9);
    arr.set(src, 2);
    assertEqual(2, arr.indexOf(9));
    }

    /**
     * Verify indexOf(9) returns index 2 after set(src, 1) on Int8Array.of(5, 5, 5, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_2300
     * @tc.name int8ArrayIndexOfPart04Test023
     * @tc.desc Verify indexOf(9) returns index 2 after set(src, 1) on Int8Array.of(5, 5, 5, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test023() {
    Int8Array arr = Int8Array.of(5, 5, 5, 5);
    Int8Array src = Int8Array.of(5, 9);
    arr.set(src, 1);
    assertEqual(2, arr.indexOf(9));
    }

    /**
     * Verify indexOf(5) from first occurrence returns index 2 for second occurrence o
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_2400
     * @tc.name int8ArrayIndexOfPart04Test024
     * @tc.desc Verify indexOf(5) from first occurrence returns index 2 for second occurrence o
     * n Int8Array.of(5, 3, 5, 3, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test024() {
    Int8Array arr = Int8Array.of(5, 3, 5, 3, 5);
    int first = arr.indexOf(5);
    int second = arr.indexOf(5, first + 1);
    assertEqual(2, second);
    }

    /**
     * Verify third consecutive indexOf(5) returns index 4 on Int8Array.of(5, 3, 5, 3, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_2500
     * @tc.name int8ArrayIndexOfPart04Test025
     * @tc.desc Verify third consecutive indexOf(5) returns index 4 on Int8Array.of(5, 3, 5, 3, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test025() {
    Int8Array arr = Int8Array.of(5, 3, 5, 3, 5);
    int first = arr.indexOf(5);
    int second = arr.indexOf(5, first + 1);
    int third = arr.indexOf(5, second + 1);
    assertEqual(4, third);
    }

    /**
     * Verify indexOf(5) returns -1 after exhausting all occurrences on Int8Array.of(5, 3, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_2600
     * @tc.name int8ArrayIndexOfPart04Test026
     * @tc.desc Verify indexOf(5) returns -1 after exhausting all occurrences on Int8Array.of(5, 3, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test026() {
    Int8Array arr = Int8Array.of(5, 3, 5);
    int first = arr.indexOf(5);
    int next = arr.indexOf(5, first + 1);
    int end = arr.indexOf(5, next + 1);
    assertEqual(-1, end);
    }

    /**
     * Verify indexOf(2) from index first-3 returns index 1 on Int8Array.of(2, 2, 2, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_2700
     * @tc.name int8ArrayIndexOfPart04Test027
     * @tc.desc Verify indexOf(2) from index first-3 returns index 1 on Int8Array.of(2, 2, 2, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test027() {
    Int8Array arr = Int8Array.of(2, 2, 2, 2);
    int first = arr.indexOf(2);
    int res = arr.indexOf(2, first - 3);
    assertEqual(1, res);
    }

    /**
     * Verify lastIndexOf(2) minus indexOf(2) equals 2 on Int8Array.of(1, 2, 3, 2, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_2800
     * @tc.name int8ArrayIndexOfPart04Test028
     * @tc.desc Verify lastIndexOf(2) minus indexOf(2) equals 2 on Int8Array.of(1, 2, 3, 2, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test028() {
    Int8Array arr = Int8Array.of(1, 2, 3, 2, 4);
    int first = arr.indexOf(2);
    int last = arr.lastIndexOf(2);
    assertEqual(2, last - first);
    }

    /**
     * Verify indexOf(128) returns -1 after $_set, searchElement out of Int8 range uses strict equality
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_2900
     * @tc.name int8ArrayIndexOfPart04Test029
     * @tc.desc Verify indexOf(128) returns -1 after $_set, searchElement out of Int8 range uses strict equality
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test029() {
    Int8Array arr = Int8Array.of(0, 0, 0);
    arr.set(1, 128);
    assertEqual(-1, arr.indexOf(128));
    }

    /**
     * Verify indexOf(-129) returns -1 after $_set, searchElement out of Int8 range uses strict equality
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_3000
     * @tc.name int8ArrayIndexOfPart04Test030
     * @tc.desc Verify indexOf(-129) returns -1 after $_set, searchElement out of Int8 range uses strict equality
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test030() {
    Int8Array arr = Int8Array.of(0, 0, 0);
    arr.set(0, -129);
    assertEqual(-1, arr.indexOf(-129));
    }

    /**
     * Verify indexOf(255) returns -1 after $_set, searchElement out of Int8 range uses strict equality
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_3100
     * @tc.name int8ArrayIndexOfPart04Test031
     * @tc.desc Verify indexOf(255) returns -1 after $_set, searchElement out of Int8 range uses strict equality
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test031() {
    Int8Array arr = Int8Array.of(0, 0, 0);
    arr.set(2, 255);
    assertEqual(-1, arr.indexOf(255));
    }

    /**
     * Verify indexOf(256) returns -1 after $_set, searchElement out of Int8 range uses strict equality
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_3200
     * @tc.name int8ArrayIndexOfPart04Test032
     * @tc.desc Verify indexOf(256) returns -1 after $_set, searchElement out of Int8 range uses strict equality
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test032() {
    Int8Array arr = Int8Array.of(9, 9, 9);
    arr.set(1, 256);
    assertEqual(-1, arr.indexOf(256));
    }

    /**
     * Verify indexOf(99) on subarray(1, 4) returns 1 after $_set(2, 99) on base
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_3300
     * @tc.name int8ArrayIndexOfPart04Test033
     * @tc.desc Verify indexOf(99) on subarray(1, 4) returns 1 after $_set(2, 99) on base
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test033() {
    Int8Array base = Int8Array.of(1, 2, 3, 4, 5);
    Int8Array view = base.subarray(1, 4);
    base.set(2, 99);
    assertEqual(1, view.indexOf(99));
    }

    /**
     * Verify indexOf(99) on base returns 1 after $_set(0, 99) on subarray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_3400
     * @tc.name int8ArrayIndexOfPart04Test034
     * @tc.desc Verify indexOf(99) on base returns 1 after $_set(0, 99) on subarray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test034() {
    Int8Array base = Int8Array.of(1, 2, 3, 4, 5);
    Int8Array view = base.subarray(1, 4);
    view.set(0, 99);
    assertEqual(1, base.indexOf(99));
    }

    /**
     * Verify indexOf(77) on rightView subarray(2, 5) returns 0 after $_set(2, 77) on leftView
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_3500
     * @tc.name int8ArrayIndexOfPart04Test035
     * @tc.desc Verify indexOf(77) on rightView subarray(2, 5) returns 0 after $_set(2, 77) on leftView
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test035() {
    Int8Array base = Int8Array.of(1, 2, 3, 4, 5);
    Int8Array leftView = base.subarray(0, 3);
    Int8Array rightView = base.subarray(2, 5);
    leftView.set(2, 77);
    assertEqual(0, rightView.indexOf(77));
    }

    /**
     * Verify indexOf(88) on subarray(-2) view returns index 1 after base $_set(4, 88)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_3600
     * @tc.name int8ArrayIndexOfPart04Test036
     * @tc.desc Verify indexOf(88) on subarray(-2) view returns index 1 after base $_set(4, 88)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test036() {
    Int8Array base = Int8Array.of(10, 20, 30, 40, 50);
    Int8Array view = base.subarray(-2);
    base.set(4, 88);
    assertEqual(1, view.indexOf(88));
    }

    /**
     * Verify indexOf(99) on slice(1, 3) copy returns -1 after base modification
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_3700
     * @tc.name int8ArrayIndexOfPart04Test037
     * @tc.desc Verify indexOf(99) on slice(1, 3) copy returns -1 after base modification
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test037() {
    Int8Array base = Int8Array.of(1, 2, 3, 4);
    Int8Array copy = base.slice(1, 3);
    base.set(1, 99);
    assertEqual(-1, copy.indexOf(99));
    }

    /**
     * Verify indexOf(42) finds 42 written through nested subarray at index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_3800
     * @tc.name int8ArrayIndexOfPart04Test038
     * @tc.desc Verify indexOf(42) finds 42 written through nested subarray at index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test038() {
    Int8Array base = Int8Array.of(1, 2, 3, 4, 5, 6);
    Int8Array mid = base.subarray(1, 5);
    Int8Array leaf = mid.subarray(1, 3);
    leaf.set(0, 42);
    assertEqual(2, base.indexOf(42));
    }

    /**
     * Verify indexOf(2) on empty subarray(1, 1) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_3900
     * @tc.name int8ArrayIndexOfPart04Test039
     * @tc.desc Verify indexOf(2) on empty subarray(1, 1) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test039() {
    Int8Array base = Int8Array.of(1, 2, 3);
    Int8Array view = base.subarray(1, 1);
    assertEqual(-1, view.indexOf(2));
    }

    /**
     * Verify indexOf(0) on base returns 1 after fill(0) on subarray(1, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_4000
     * @tc.name int8ArrayIndexOfPart04Test040
     * @tc.desc Verify indexOf(0) on base returns 1 after fill(0) on subarray(1, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test040() {
    Int8Array base = Int8Array.of(1, 2, 3, 4, 5);
    Int8Array view = base.subarray(1, 4);
    view.fill(0);
    assertEqual(1, base.indexOf(0));
    }

    /**
     * Verify indexOf(55) on offset view finds 55 at shared buffer position 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_4100
     * @tc.name int8ArrayIndexOfPart04Test041
     * @tc.desc Verify indexOf(55) on offset view finds 55 at shared buffer position 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test041() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Int8Array a = new Int8Array(buf, 0, 3);
    Int8Array b = new Int8Array(buf, 2, 3);
    a.set(2, 55);
    assertEqual(0, b.indexOf(55));
    }

    /**
     * Verify indexOf expects -1 from ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_4200
     * @tc.name int8ArrayIndexOfPart04Test042
     * @tc.desc Verify indexOf expects -1 from ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test042() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array first = new Int8Array(buf, 0, 3);
    Int8Array second = new Int8Array(buf, 3, 3);
    first.set(2, 77);
    assertEqual(-1, second.indexOf(77));
    }

    /**
     * Verify indexOf(33) on whole view finds 33 written via offset view at index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_4300
     * @tc.name int8ArrayIndexOfPart04Test043
     * @tc.desc Verify indexOf(33) on whole view finds 33 written via offset view at index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test043() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array whole = new Int8Array(buf);
    Int8Array part = new Int8Array(buf, 1, 2);
    part.set(1, 33);
    assertEqual(2, whole.indexOf(33));
    }

    /**
     * Verify indexOf(11) on offset view finds first 11 at index 0 after duplicate writes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_4400
     * @tc.name int8ArrayIndexOfPart04Test044
     * @tc.desc Verify indexOf(11) on offset view finds first 11 at index 0 after duplicate writes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test044() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Int8Array fullView = new Int8Array(buf);
    Int8Array offsetView = new Int8Array(buf, 1, 4);
    fullView.set(0, 11);
    fullView.set(1, 11);
    assertEqual(0, offsetView.indexOf(11));
    }

    /**
     * Verify indexOf(-56) expects 1 after $_set(1, 200) overflows Int8 to -56 on shared ArrayBuffer view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_4500
     * @tc.name int8ArrayIndexOfPart04Test045
     * @tc.desc Verify indexOf(-56) expects 1 after $_set(1, 200) overflows Int8 to -56 on shared ArrayBuffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test045() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Int8Array a = new Int8Array(buf, 0, 3);
    Int8Array b = new Int8Array(buf, 0, 3);
    a.set(1, 200);
    assertEqual(1, b.indexOf(-56));
    }

    /**
     * Verify indexOf(9) returns index 3 after $_set(0, 9) and reverse on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_4600
     * @tc.name int8ArrayIndexOfPart04Test046
     * @tc.desc Verify indexOf(9) returns index 3 after $_set(0, 9) and reverse on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test046() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    arr.set(0, 9);
    arr.reverse();
    assertEqual(3, arr.indexOf(9));
    }

    /**
     * Verify indexOf(10) returns index 0 after sort and $_set(2, 10) on Int8Array.of(30, 10, 20)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_4700
     * @tc.name int8ArrayIndexOfPart04Test047
     * @tc.desc Verify indexOf(10) returns index 0 after sort and $_set(2, 10) on Int8Array.of(30, 10, 20)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test047() {
    Int8Array arr = Int8Array.of(30, 10, 20);
    arr.sort();
    arr.set(2, 10);
    assertEqual(0, arr.indexOf(10));
    }

    /**
     * Verify indexOf(1) returns 0 after set and copyWithin(3, 0, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_4800
     * @tc.name int8ArrayIndexOfPart04Test048
     * @tc.desc Verify indexOf(1) returns 0 after set and copyWithin(3, 0, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test048() {
    Int8Array arr = Int8Array.of(0, 0, 0, 0, 0);
    Int8Array src = Int8Array.of(1, 2, 3);
    arr.set(src, 0);
    arr.copyWithin(3, 0, 2);
    assertEqual(0, arr.indexOf(1));
    }

    /**
     * Verify copyWithin using indexOf(9) result as target index writes element 5 at index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_4900
     * @tc.name int8ArrayIndexOfPart04Test049
     * @tc.desc Verify copyWithin using indexOf(9) result as target index writes element 5 at index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test049() {
    Int8Array arr = Int8Array.of(5, 9, 5, 5);
    int pos = arr.indexOf(9);
    arr.copyWithin(pos, 0, 1);
    assertEqualInt(5, arr.get(1));
    }

    /**
     * Verify indexOf(8) on base returns 1 after $_set(0, 8) and $_set(1, 8) on subarray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_5000
     * @tc.name int8ArrayIndexOfPart04Test050
     * @tc.desc Verify indexOf(8) on base returns 1 after $_set(0, 8) and $_set(1, 8) on subarray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test050() {
    Int8Array base = Int8Array.of(1, 2, 3, 4);
    Int8Array view = base.subarray(1, 3);
    view.set(0, 8);
    view.set(1, 8);
    assertEqual(1, base.indexOf(8));
    }

    /**
     * Verify at() with indexOf(30) result returns element 30 on Int8Array.of(10, 20, 30, 40)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_5100
     * @tc.name int8ArrayIndexOfPart04Test051
     * @tc.desc Verify at() with indexOf(30) result returns element 30 on Int8Array.of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test051() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int pos = arr.indexOf(30);
    assertEqualInt(30, arr.at(pos));
    }

    /**
     * Verify slice() starting from indexOf(20) result has length 3 on Int8Array.of(10, 20, 30, 40)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_5200
     * @tc.name int8ArrayIndexOfPart04Test052
     * @tc.desc Verify slice() starting from indexOf(20) result has length 3 on Int8Array.of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test052() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int pos = arr.indexOf(20);
    Int8Array sub = arr.slice(pos);
    assertEqual(3, sub.length());
    }

    /**
     * Verify indexOf(99) on with(pos, 99) copy equals original indexOf(20) result pos
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_5300
     * @tc.name int8ArrayIndexOfPart04Test053
     * @tc.desc Verify indexOf(99) on with(pos, 99) copy equals original indexOf(20) result pos
     * on Int8Array.of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test053() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int pos = arr.indexOf(20);
    Int8Array modified = arr.with(pos, 99);
    assertEqual(pos, modified.indexOf(99));
    }

    /**
     * Verify fill(0, pos, pos + 1) using indexOf(9) result does not erase later 9 at index 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_5400
     * @tc.name int8ArrayIndexOfPart04Test054
     * @tc.desc Verify fill(0, pos, pos + 1) using indexOf(9) result does not erase later 9 at index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test054() {
    Int8Array arr = Int8Array.of(5, 9, 5, 9, 5);
    int pos = arr.indexOf(9);
    arr.fill(0, pos, pos + 1);
    assertEqual(3, arr.indexOf(9));
    }

    /**
     * Verify indexOf(1) on toReversed copy of Int8Array.of(1, 2, 3, 4) returns index 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_5500
     * @tc.name int8ArrayIndexOfPart04Test055
     * @tc.desc Verify indexOf(1) on toReversed copy of Int8Array.of(1, 2, 3, 4) returns index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test055() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    Int8Array rev = arr.toReversed();
    assertEqual(3, rev.indexOf(1));
    }

    /**
     * Verify indexOf(10) on toSorted copy of Int8Array.of(30, 10, 20) returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_5600
     * @tc.name int8ArrayIndexOfPart04Test056
     * @tc.desc Verify indexOf(10) on toSorted copy of Int8Array.of(30, 10, 20) returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test056() {
    Int8Array arr = Int8Array.of(30, 10, 20);
    Int8Array sorted = arr.toSorted();
    assertEqual(0, sorted.indexOf(10));
    }

    /**
     * Verify indexOf(10) on original array after toSorted() returns index 1 (sort not in-place)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_5700
     * @tc.name int8ArrayIndexOfPart04Test057
     * @tc.desc Verify indexOf(10) on original array after toSorted() returns index 1 (sort not in-place)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test057() {
    Int8Array arr = Int8Array.of(30, 10, 20);
    arr.toSorted();
    assertEqual(1, arr.indexOf(10));
    }

    /**
     * Verify indexOf(9) returns -1 on original array after with(1, 9) (copy not in-place)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_5800
     * @tc.name int8ArrayIndexOfPart04Test058
     * @tc.desc Verify indexOf(9) returns -1 on original array after with(1, 9) (copy not in-place)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test058() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    arr.with(1, 9);
    assertEqual(-1, arr.indexOf(9));
    }

    /**
     * Verify indexOf(2) on base returns 3 after reverse() on subarray(1, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_5900
     * @tc.name int8ArrayIndexOfPart04Test059
     * @tc.desc Verify indexOf(2) on base returns 3 after reverse() on subarray(1, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test059() {
    Int8Array base = Int8Array.of(1, 2, 3, 4, 5);
    Int8Array view = base.subarray(1, 4);
    view.reverse();
    assertEqual(3, base.indexOf(2));
    }

    /**
     * Verify indexOf(1) on base returns 0 after sort() on subarray(0, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_6000
     * @tc.name int8ArrayIndexOfPart04Test060
     * @tc.desc Verify indexOf(1) on base returns 0 after sort() on subarray(0, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test060() {
    Int8Array base = Int8Array.of(5, 3, 1, 4, 2);
    Int8Array view = base.subarray(0, 3);
    view.sort();
    assertEqual(0, base.indexOf(1));
    }

    /**
     * Verify indexOf(0) on subarray(2, 5) returns 0 after fill(0, 1, 4) on base
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_6100
     * @tc.name int8ArrayIndexOfPart04Test061
     * @tc.desc Verify indexOf(0) on subarray(2, 5) returns 0 after fill(0, 1, 4) on base
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test061() {
    Int8Array base = Int8Array.of(1, 2, 3, 4, 5);
    Int8Array view = base.subarray(2, 5);
    base.fill(0, 1, 4);
    assertEqual(0, view.indexOf(0));
    }

    /**
     * Verify $_set(5, 99) throws RangeError and array still returns -1 for indexOf(99)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_6200
     * @tc.name int8ArrayIndexOfPart04Test062
     * @tc.desc Verify $_set(5, 99) throws RangeError and array still returns -1 for indexOf(99)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test062() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    try {
    arr.set(5, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(-1, arr.indexOf(99));
    }

    /**
     * Verify indexOf(INT8_MAX) finds the Int8 boundary max value 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_6800
     * @tc.name int8ArrayIndexOfPart04Test068
     * @tc.desc Verify indexOf(INT8_MAX) finds the Int8 boundary max value 127
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test068() {
    Int8Array arr = Int8Array.of(10, INT8_MAX, 30);
    int r1 = arr.indexOf(INT8_MAX);
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(INT8_MIN) finds the Int8 boundary min value -128 after $_set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART04_TEST_6900
     * @tc.name int8ArrayIndexOfPart04Test069
     * @tc.desc Verify indexOf(INT8_MIN) finds the Int8 boundary min value -128 after $_set
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart04Test069() {
    Int8Array arr = Int8Array.of(0, 0, 0);
    arr.set(2, INT8_MIN);
    int r1 = arr.indexOf(INT8_MIN);
    int e1 = 2;
    assertEqual(e1, r1);
    }
}
