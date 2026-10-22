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
import basetype.common.BasTest;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayIndexOfPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIndexOfPart01Test extends BasTest {
    private static final int INT8_MAX = 127;

    /**
     * Verify indexOf(40) on Int8Array.of(30, 40, 50) returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_0100
     * @tc.name int8ArrayIndexOfPart01Test001
     * @tc.desc Verify indexOf(40) on Int8Array.of(30, 40, 50) returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test001() {
    Int8Array arr = Int8Array.of(30, 40, 50);
    int v = 40;
    int r1 = arr.indexOf(v);
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(40, 0) on Int8Array.of(30, 40, 50) returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_0200
     * @tc.name int8ArrayIndexOfPart01Test002
     * @tc.desc Verify indexOf(40, 0) on Int8Array.of(30, 40, 50) returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test002() {
    Int8Array arr = Int8Array.of(30, 40, 50);
    int v = 40;
    int r1 = arr.indexOf(v, 0);
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(40, 1) on Int8Array.of(40, 50, 40) returns 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_0300
     * @tc.name int8ArrayIndexOfPart01Test003
     * @tc.desc Verify indexOf(40, 1) on Int8Array.of(40, 50, 40) returns 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test003() {
    Int8Array arr = Int8Array.of(40, 50, 40);
    int v = 40;
    int r1 = arr.indexOf(v, 1);
    int e1 = 2;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(-128) on Int8Array.of(-128, 0, INT8_MAX) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_0400
     * @tc.name int8ArrayIndexOfPart01Test004
     * @tc.desc Verify indexOf(-128) on Int8Array.of(-128, 0, INT8_MAX) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test004() {
    Int8Array arr = Int8Array.of(-128, 0, INT8_MAX);
    int v = -128;
    int r1 = arr.indexOf(v);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(INT8_MAX) on Int8Array.of(-128, 0, INT8_MAX) returns 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_0500
     * @tc.name int8ArrayIndexOfPart01Test005
     * @tc.desc Verify indexOf(INT8_MAX) on Int8Array.of(-128, 0, INT8_MAX) returns 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test005() {
    Int8Array arr = Int8Array.of(-128, 0, INT8_MAX);
    int v = INT8_MAX;
    int r1 = arr.indexOf(v);
    int e1 = 2;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(0) on Int8Array.of(-128, 0, INT8_MAX) returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_0600
     * @tc.name int8ArrayIndexOfPart01Test006
     * @tc.desc Verify indexOf(0) on Int8Array.of(-128, 0, INT8_MAX) returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test006() {
    Int8Array arr = Int8Array.of(-128, 0, INT8_MAX);
    int v = 0;
    int r1 = arr.indexOf(v);
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(-1) on Int8Array.of(-1, 0, 1) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_0700
     * @tc.name int8ArrayIndexOfPart01Test007
     * @tc.desc Verify indexOf(-1) on Int8Array.of(-1, 0, 1) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test007() {
    Int8Array arr = Int8Array.of(-1, 0, 1);
    int v = -1;
    int r1 = arr.indexOf(v);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(50) on Int8Array.of(50, 60, 70) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_0800
     * @tc.name int8ArrayIndexOfPart01Test008
     * @tc.desc Verify indexOf(50) on Int8Array.of(50, 60, 70) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test008() {
    Int8Array arr = Int8Array.of(50, 60, 70);
    int v = 50;
    int r1 = arr.indexOf(v);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(7) on Int8Array.of(7, 8, 9) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_0900
     * @tc.name int8ArrayIndexOfPart01Test009
     * @tc.desc Verify indexOf(7) on Int8Array.of(7, 8, 9) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test009() {
    Int8Array arr = Int8Array.of(7, 8, 9);
    int v = 7;
    int r1 = arr.indexOf(v);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(9) on Int8Array.of(7, 8, 9) returns 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_1000
     * @tc.name int8ArrayIndexOfPart01Test010
     * @tc.desc Verify indexOf(9) on Int8Array.of(7, 8, 9) returns 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test010() {
    Int8Array arr = Int8Array.of(7, 8, 9);
    int v = 9;
    int r1 = arr.indexOf(v);
    int e1 = 2;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(8) on Int8Array.of(7, 8, 9) returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_1100
     * @tc.name int8ArrayIndexOfPart01Test011
     * @tc.desc Verify indexOf(8) on Int8Array.of(7, 8, 9) returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test011() {
    Int8Array arr = Int8Array.of(7, 8, 9);
    int v = 8;
    int r1 = arr.indexOf(v);
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(5) on Int8Array.of(5, 6, 5, 6, 5) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_1200
     * @tc.name int8ArrayIndexOfPart01Test012
     * @tc.desc Verify indexOf(5) on Int8Array.of(5, 6, 5, 6, 5) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test012() {
    Int8Array arr = Int8Array.of(5, 6, 5, 6, 5);
    int v = 5;
    int r1 = arr.indexOf(v);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(3) on Int8Array.of(3, 3, 3, 3) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_1300
     * @tc.name int8ArrayIndexOfPart01Test013
     * @tc.desc Verify indexOf(3) on Int8Array.of(3, 3, 3, 3) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test013() {
    Int8Array arr = Int8Array.of(3, 3, 3, 3);
    int v = 3;
    int r1 = arr.indexOf(v);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(99) on Int8Array.of(10, 20, 30) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_1400
     * @tc.name int8ArrayIndexOfPart01Test014
     * @tc.desc Verify indexOf(99) on Int8Array.of(10, 20, 30) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test014() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int v = 99;
    int r1 = arr.indexOf(v);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(200) on Int8Array.of(10, 20, 30) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_1500
     * @tc.name int8ArrayIndexOfPart01Test015
     * @tc.desc Verify indexOf(200) on Int8Array.of(10, 20, 30) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test015() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int v = 200;
    int r1 = arr.indexOf(v);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(5) on new Int8Array(0) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_1600
     * @tc.name int8ArrayIndexOfPart01Test016
     * @tc.desc Verify indexOf(5) on new Int8Array(0) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test016() {
    Int8Array arr = new Int8Array(0);
    int v = 5;
    int r1 = arr.indexOf(v);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(42) on Int8Array.of(42) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_1700
     * @tc.name int8ArrayIndexOfPart01Test017
     * @tc.desc Verify indexOf(42) on Int8Array.of(42) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test017() {
    Int8Array arr = Int8Array.of(42);
    int v = 42;
    int r1 = arr.indexOf(v);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(43) on Int8Array.of(42) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_1800
     * @tc.name int8ArrayIndexOfPart01Test018
     * @tc.desc Verify indexOf(43) on Int8Array.of(42) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test018() {
    Int8Array arr = Int8Array.of(42);
    int v = 43;
    int r1 = arr.indexOf(v);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(10, 0) on Int8Array.of(10, 20, 10, 20, 10) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_1900
     * @tc.name int8ArrayIndexOfPart01Test019
     * @tc.desc Verify indexOf(10, 0) on Int8Array.of(10, 20, 10, 20, 10) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test019() {
    Int8Array arr = Int8Array.of(10, 20, 10, 20, 10);
    int v = 10;
    int r1 = arr.indexOf(v, 0);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(10, 1) on Int8Array.of(10, 20, 10, 20, 10) returns 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_2000
     * @tc.name int8ArrayIndexOfPart01Test020
     * @tc.desc Verify indexOf(10, 1) on Int8Array.of(10, 20, 10, 20, 10) returns 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test020() {
    Int8Array arr = Int8Array.of(10, 20, 10, 20, 10);
    int v = 10;
    int r1 = arr.indexOf(v, 1);
    int e1 = 2;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(50, 4) on Int8Array.of(10, 20, 30, 40, 50) returns 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_2100
     * @tc.name int8ArrayIndexOfPart01Test021
     * @tc.desc Verify indexOf(50, 4) on Int8Array.of(10, 20, 30, 40, 50) returns 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test021() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int v = 50;
    int r1 = arr.indexOf(v, 4);
    int e1 = 4;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(10, 5) searches array and returns -1 when fromIndex equals array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_2200
     * @tc.name int8ArrayIndexOfPart01Test022
     * @tc.desc Verify indexOf(10, 5) searches array and returns -1 when fromIndex equals array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test022() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int v = 10;
    int r1 = arr.indexOf(v, 5);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(50, 6) searches array and returns -1 when fromIndex exceeds array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_2300
     * @tc.name int8ArrayIndexOfPart01Test023
     * @tc.desc Verify indexOf(50, 6) searches array and returns -1 when fromIndex exceeds array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test023() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int v = 50;
    int r1 = arr.indexOf(v, 6);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(10, 2147483647) searches array and returns -1 when fromIndex is a very large value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_2400
     * @tc.name int8ArrayIndexOfPart01Test024
     * @tc.desc Verify indexOf(10, 2147483647) searches array and returns -1 when fromIndex is a very large value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test024() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int v = 10;
    int r1 = arr.indexOf(v, 2147483647);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(10, 4) on Int8Array.of(10, 20, 30, 40, 50) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_2500
     * @tc.name int8ArrayIndexOfPart01Test025
     * @tc.desc Verify indexOf(10, 4) on Int8Array.of(10, 20, 30, 40, 50) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test025() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int v = 10;
    int r1 = arr.indexOf(v, 4);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(50, -1) on Int8Array.of(10, 20, 30, 40, 50) returns 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_2600
     * @tc.name int8ArrayIndexOfPart01Test026
     * @tc.desc Verify indexOf(50, -1) on Int8Array.of(10, 20, 30, 40, 50) returns 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test026() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int v = 50;
    int r1 = arr.indexOf(v, -1);
    int e1 = 4;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(40, -2) searches array and returns 3 starting from the second-to-last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_2700
     * @tc.name int8ArrayIndexOfPart01Test027
     * @tc.desc Verify indexOf(40, -2) searches array and returns 3 starting from the second-to-last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test027() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int v = 40;
    int r1 = arr.indexOf(v, -2);
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(10, -5) searches array and returns 0 when negative fromIndex clamps to start
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_2800
     * @tc.name int8ArrayIndexOfPart01Test028
     * @tc.desc Verify indexOf(10, -5) searches array and returns 0 when negative fromIndex clamps to start
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test028() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int v = 10;
    int r1 = arr.indexOf(v, -5);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(10, -6) searches array and returns 0 when negative fromIndex exceeds array length bound
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_2900
     * @tc.name int8ArrayIndexOfPart01Test029
     * @tc.desc Verify indexOf(10, -6) searches array and returns 0 when negative fromIndex exceeds array length bound
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test029() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int v = 10;
    int r1 = arr.indexOf(v, -6);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(10, -2147483647 - 1) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_3000
     * @tc.name int8ArrayIndexOfPart01Test030
     * @tc.desc Verify indexOf(10, -2147483647 - 1) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test030() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int v = 10;
    int r1 = arr.indexOf(v, -2147483647 - 1);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(10, -1) on Int8Array.of(10, 20, 30, 20, 10) returns 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_3100
     * @tc.name int8ArrayIndexOfPart01Test031
     * @tc.desc Verify indexOf(10, -1) on Int8Array.of(10, 20, 30, 20, 10) returns 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test031() {
    Int8Array arr = Int8Array.of(10, 20, 30, 20, 10);
    int v = 10;
    int r1 = arr.indexOf(v, -1);
    int e1 = 4;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(99, -1) on Int8Array.of(99, 20, 30, 40, 50) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_3200
     * @tc.name int8ArrayIndexOfPart01Test032
     * @tc.desc Verify indexOf(99, -1) on Int8Array.of(99, 20, 30, 40, 50) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test032() {
    Int8Array arr = Int8Array.of(99, 20, 30, 40, 50);
    int v = 99;
    int r1 = arr.indexOf(v, -1);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(5, 0) on new Int8Array(0) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_3300
     * @tc.name int8ArrayIndexOfPart01Test033
     * @tc.desc Verify indexOf(5, 0) on new Int8Array(0) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test033() {
    Int8Array arr = new Int8Array(0);
    int v = 5;
    int r1 = arr.indexOf(v, 0);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(5, -1) on new Int8Array(0) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_3400
     * @tc.name int8ArrayIndexOfPart01Test034
     * @tc.desc Verify indexOf(5, -1) on new Int8Array(0) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test034() {
    Int8Array arr = new Int8Array(0);
    int v = 5;
    int r1 = arr.indexOf(v, -1);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(42, 1) on Int8Array.of(42) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_3500
     * @tc.name int8ArrayIndexOfPart01Test035
     * @tc.desc Verify indexOf(42, 1) on Int8Array.of(42) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test035() {
    Int8Array arr = Int8Array.of(42);
    int v = 42;
    int r1 = arr.indexOf(v, 1);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(20) on Int8Array.of(10, 20, 30) returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_3600
     * @tc.name int8ArrayIndexOfPart01Test036
     * @tc.desc Verify indexOf(20) on Int8Array.of(10, 20, 30) returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test036() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int v = 20;
    int r1 = arr.indexOf(v);
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(20, 1) on Int8Array.of(20, 10, 20) returns 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_3700
     * @tc.name int8ArrayIndexOfPart01Test037
     * @tc.desc Verify indexOf(20, 1) on Int8Array.of(20, 10, 20) returns 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test037() {
    Int8Array arr = Int8Array.of(20, 10, 20);
    int v = 20;
    int r1 = arr.indexOf(v, 1);
    int e1 = 2;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(20) with number-typed argument on Int8Array.of(10, 20, 30) returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_3800
     * @tc.name int8ArrayIndexOfPart01Test038
     * @tc.desc Verify indexOf(20) with number-typed argument on Int8Array.of(10, 20, 30) returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test038() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int v = 20;
    int r1 = arr.indexOf(v);
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(99) with byte-typed argument on Int8Array.of(10, 20, 30) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_3900
     * @tc.name int8ArrayIndexOfPart01Test039
     * @tc.desc Verify indexOf(99) with byte-typed argument on Int8Array.of(10, 20, 30) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test039() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int v = 99;
    int r1 = arr.indexOf(v);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(20) with byte argument returns index 1 on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_4000
     * @tc.name int8ArrayIndexOfPart01Test040
     * @tc.desc Verify indexOf(20) with byte argument returns index 1 on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test040() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int vb = 20;
    int r1 = arr.indexOf(vb);
    assertEqual(1, r1);
    }

    /**
     * Verify indexOf(-50) on Int8Array.of(-50, 10, 20) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_4100
     * @tc.name int8ArrayIndexOfPart01Test041
     * @tc.desc Verify indexOf(-50) on Int8Array.of(-50, 10, 20) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test041() {
    Int8Array arr = Int8Array.of(-50, 10, 20);
    int v = -50;
    int r1 = arr.indexOf(v);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(0) on Int8Array.of(0, 10, 20) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_4200
     * @tc.name int8ArrayIndexOfPart01Test042
     * @tc.desc Verify indexOf(0) on Int8Array.of(0, 10, 20) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test042() {
    Int8Array arr = Int8Array.of(0, 10, 20);
    int v = 0;
    int r1 = arr.indexOf(v);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(INT8_MAX) on Int8Array.of(INT8_MAX, 10, 20) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_4300
     * @tc.name int8ArrayIndexOfPart01Test043
     * @tc.desc Verify indexOf(INT8_MAX) on Int8Array.of(INT8_MAX, 10, 20) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test043() {
    Int8Array arr = Int8Array.of(INT8_MAX, 10, 20);
    int v = INT8_MAX;
    int r1 = arr.indexOf(v);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(128) on Int8Array.of(-128, 0, 127) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_4400
     * @tc.name int8ArrayIndexOfPart01Test044
     * @tc.desc Verify indexOf(128) on Int8Array.of(-128, 0, 127) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test044() {
    Int8Array arr = Int8Array.of(-128, 0, 127);
    int v = 128;
    int r1 = arr.indexOf(v);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(129) on Int8Array.of(-127, 0, 1) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_4500
     * @tc.name int8ArrayIndexOfPart01Test045
     * @tc.desc Verify indexOf(129) on Int8Array.of(-127, 0, 1) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test045() {
    Int8Array arr = Int8Array.of(-127, 0, 1);
    int v = 129;
    int r1 = arr.indexOf(v);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(0xff) on Int8Array.of(-1, 0, 1) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_4600
     * @tc.name int8ArrayIndexOfPart01Test046
     * @tc.desc Verify indexOf(0xff) on Int8Array.of(-1, 0, 1) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test046() {
    Int8Array arr = Int8Array.of(-1, 0, 1);
    int v = 0xff;
    int r1 = arr.indexOf(v);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(256) on Int8Array.of(0, -1, 1) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_4700
     * @tc.name int8ArrayIndexOfPart01Test047
     * @tc.desc Verify indexOf(256) on Int8Array.of(0, -1, 1) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test047() {
    Int8Array arr = Int8Array.of(0, -1, 1);
    int v = 256;
    int r1 = arr.indexOf(v);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(257) on Int8Array.of(1, -1, 0) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_4800
     * @tc.name int8ArrayIndexOfPart01Test048
     * @tc.desc Verify indexOf(257) on Int8Array.of(1, -1, 0) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test048() {
    Int8Array arr = Int8Array.of(1, -1, 0);
    int v = 257;
    int r1 = arr.indexOf(v);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(-129) on Int8Array.of(127, 0, -128) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_4900
     * @tc.name int8ArrayIndexOfPart01Test049
     * @tc.desc Verify indexOf(-129) on Int8Array.of(127, 0, -128) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test049() {
    Int8Array arr = Int8Array.of(127, 0, -128);
    int v = -129;
    int r1 = arr.indexOf(v);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(200) on Int8Array.of(-56, 10, 20) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_6300
     * @tc.name int8ArrayIndexOfPart01Test063
     * @tc.desc Verify indexOf(200) on Int8Array.of(-56, 10, 20) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test063() {
    Int8Array arr = Int8Array.of(-56, 10, 20);
    int v = 200;
    int r1 = arr.indexOf(v);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(200) on Int8Array.of(10, 20, -56) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_6400
     * @tc.name int8ArrayIndexOfPart01Test064
     * @tc.desc Verify indexOf(200) on Int8Array.of(10, 20, -56) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test064() {
    Int8Array arr = Int8Array.of(10, 20, -56);
    int v = 200;
    int r1 = arr.indexOf(v);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf(383) on Int8Array.of(10, 127, 20) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART01_TEST_6600
     * @tc.name int8ArrayIndexOfPart01Test066
     * @tc.desc Verify indexOf(383) on Int8Array.of(10, 127, 20) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart01Test066() {
    Int8Array arr = Int8Array.of(10, 127, 20);
    int v = 383;
    int r1 = arr.indexOf(v);
    int e1 = -1;
    assertEqual(e1, r1);
    }
}
