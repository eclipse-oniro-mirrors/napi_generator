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
 * Int8ArrayIndexOfPart03Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIndexOfPart03Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify indexOf(30, -1) searches array from the last element and returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_0100
     * @tc.name int8ArrayIndexOfPart03Test001
     * @tc.desc Verify indexOf(30, -1) searches array from the last element and returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test001() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(30, -1);
    assertEqual(2, result);
    }

    /**
     * Verify indexOf(10, -1) on new Int8Array(new int[] {10, 20, 30}) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_0200
     * @tc.name int8ArrayIndexOfPart03Test002
     * @tc.desc Verify indexOf(10, -1) on new Int8Array(new int[] {10, 20, 30}) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test002() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(10, -1);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(20, -2) searches array from index -2 and returns index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_0300
     * @tc.name int8ArrayIndexOfPart03Test003
     * @tc.desc Verify indexOf(20, -2) searches array from index -2 and returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test003() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(20, -2);
    assertEqual(1, result);
    }

    /**
     * Verify indexOf(10, -3) searches array from index -3 and returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_0400
     * @tc.name int8ArrayIndexOfPart03Test004
     * @tc.desc Verify indexOf(10, -3) searches array from index -3 and returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test004() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(10, -3);
    assertEqual(0, result);
    }

    /**
     * Verify indexOf(10, -4) searches array with fromIndex clamped to 0 and returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_0500
     * @tc.name int8ArrayIndexOfPart03Test005
     * @tc.desc Verify indexOf(10, -4) searches array with fromIndex clamped to 0 and returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test005() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(10, -4);
    assertEqual(0, result);
    }

    /**
     * Verify indexOf(20, -1) searches array from the last element and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_0600
     * @tc.name int8ArrayIndexOfPart03Test006
     * @tc.desc Verify indexOf(20, -1) searches array from the last element and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test006() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(20, -1);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(10, 3) searches array from index 3 and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_0700
     * @tc.name int8ArrayIndexOfPart03Test007
     * @tc.desc Verify indexOf(10, 3) searches array from index 3 and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test007() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(10, 3);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(20, 4) searches array with fromIndex >= length and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_0800
     * @tc.name int8ArrayIndexOfPart03Test008
     * @tc.desc Verify indexOf(20, 4) searches array with fromIndex >= length and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test008() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(20, 4);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(30, 100) searches array with fromIndex >= length and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_0900
     * @tc.name int8ArrayIndexOfPart03Test009
     * @tc.desc Verify indexOf(30, 100) searches array with fromIndex >= length and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test009() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(30, 100);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(10, 2147483647) searches array with fromIndex >= length and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_1000
     * @tc.name int8ArrayIndexOfPart03Test010
     * @tc.desc Verify indexOf(10, 2147483647) searches array with fromIndex >= length and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test010() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(10, 2147483647);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(10, -2147483647) searches array with fromIndex clamped to 0 and returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_1100
     * @tc.name int8ArrayIndexOfPart03Test011
     * @tc.desc Verify indexOf(10, -2147483647) searches array with fromIndex clamped to 0 and returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test011() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(10, -2147483647);
    assertEqual(0, result);
    }

    /**
     * Verify indexOf(30, -100) searches array with fromIndex clamped to 0 and returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_1200
     * @tc.name int8ArrayIndexOfPart03Test012
     * @tc.desc Verify indexOf(30, -100) searches array with fromIndex clamped to 0 and returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test012() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(30, -100);
    assertEqual(2, result);
    }

    /**
     * Verify indexOf(10, -1) on new Int8Array(new int[] {10}) returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_1300
     * @tc.name int8ArrayIndexOfPart03Test013
     * @tc.desc Verify indexOf(10, -1) on new Int8Array(new int[] {10}) returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test013() {
    Int8Array arr = new Int8Array(new int[] {10});
    int result = arr.indexOf(10, -1);
    assertEqual(0, result);
    }

    /**
     * Verify indexOf(10, -2) searches single-element array from the start and returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_1400
     * @tc.name int8ArrayIndexOfPart03Test014
     * @tc.desc Verify indexOf(10, -2) searches single-element array from the start and returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test014() {
    Int8Array arr = new Int8Array(new int[] {10});
    int result = arr.indexOf(10, -2);
    assertEqual(0, result);
    }

    /**
     * Verify indexOf(10, 1) on new Int8Array(new int[] {10}) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_1500
     * @tc.name int8ArrayIndexOfPart03Test015
     * @tc.desc Verify indexOf(10, 1) on new Int8Array(new int[] {10}) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test015() {
    Int8Array arr = new Int8Array(new int[] {10});
    int result = arr.indexOf(10, 1);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(10, 2) on new Int8Array(new int[] {10}) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_1600
     * @tc.name int8ArrayIndexOfPart03Test016
     * @tc.desc Verify indexOf(10, 2) on new Int8Array(new int[] {10}) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test016() {
    Int8Array arr = new Int8Array(new int[] {10});
    int result = arr.indexOf(10, 2);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(0, 0) searches empty array and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_1700
     * @tc.name int8ArrayIndexOfPart03Test017
     * @tc.desc Verify indexOf(0, 0) searches empty array and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test017() {
    Int8Array arr = new Int8Array(0);
    int result = arr.indexOf(0, 0);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(0, -1) searches empty array and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_1800
     * @tc.name int8ArrayIndexOfPart03Test018
     * @tc.desc Verify indexOf(0, -1) searches empty array and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test018() {
    Int8Array arr = new Int8Array(0);
    int result = arr.indexOf(0, -1);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(0, 1) searches empty array and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_1900
     * @tc.name int8ArrayIndexOfPart03Test019
     * @tc.desc Verify indexOf(0, 1) searches empty array and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test019() {
    Int8Array arr = new Int8Array(0);
    int result = arr.indexOf(0, 1);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(0, 2147483647) searches empty array and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_2000
     * @tc.name int8ArrayIndexOfPart03Test020
     * @tc.desc Verify indexOf(0, 2147483647) searches empty array and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test020() {
    Int8Array arr = new Int8Array(0);
    int result = arr.indexOf(0, 2147483647);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(0, -2147483647) searches empty array and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_2100
     * @tc.name int8ArrayIndexOfPart03Test021
     * @tc.desc Verify indexOf(0, -2147483647) searches empty array and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test021() {
    Int8Array arr = new Int8Array(0);
    int result = arr.indexOf(0, -2147483647);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(128) returns -1, searchElement out of Int8 range uses strict equality
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_2200
     * @tc.name int8ArrayIndexOfPart03Test022
     * @tc.desc Verify indexOf(128) returns -1, searchElement out of Int8 range uses strict equality
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test022() {
    Int8Array arr = new Int8Array(new int[] {INT8_MIN, 0, INT8_MAX});
    int result = arr.indexOf(128);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(128) on new Int8Array(new int[] {0, INT8_MAX}) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_2300
     * @tc.name int8ArrayIndexOfPart03Test023
     * @tc.desc Verify indexOf(128) on new Int8Array(new int[] {0, INT8_MAX}) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test023() {
    Int8Array arr = new Int8Array(new int[] {0, INT8_MAX});
    int result = arr.indexOf(128);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(255) returns -1, searchElement out of Int8 range uses strict equality
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_2400
     * @tc.name int8ArrayIndexOfPart03Test024
     * @tc.desc Verify indexOf(255) returns -1, searchElement out of Int8 range uses strict equality
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test024() {
    Int8Array arr = new Int8Array(new int[] {10, -1, 20});
    int result = arr.indexOf(255);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(-129) returns -1, searchElement out of Int8 range uses strict equality
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_2500
     * @tc.name int8ArrayIndexOfPart03Test025
     * @tc.desc Verify indexOf(-129) returns -1, searchElement out of Int8 range uses strict equality
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test025() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, 0});
    int result = arr.indexOf(-129);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(256) returns -1, searchElement out of Int8 range uses strict equality
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_2600
     * @tc.name int8ArrayIndexOfPart03Test026
     * @tc.desc Verify indexOf(256) returns -1, searchElement out of Int8 range uses strict equality
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test026() {
    Int8Array arr = new Int8Array(new int[] {10, 0, 20});
    int result = arr.indexOf(256);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(300) returns -1, searchElement out of Int8 range uses strict equality
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_2800
     * @tc.name int8ArrayIndexOfPart03Test028
     * @tc.desc Verify indexOf(300) returns -1, searchElement out of Int8 range uses strict equality
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test028() {
    Int8Array arr = new Int8Array(new int[] {44, 0});
    int result = arr.indexOf(300);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(-300) returns -1, searchElement out of Int8 range uses strict equality
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_2900
     * @tc.name int8ArrayIndexOfPart03Test029
     * @tc.desc Verify indexOf(-300) returns -1, searchElement out of Int8 range uses strict equality
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test029() {
    Int8Array arr = new Int8Array(new int[] {-44, 0});
    int result = arr.indexOf(-300);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(128, 1) returns -1, searchElement out of Int8 range uses strict equality with fromIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_3000
     * @tc.name int8ArrayIndexOfPart03Test030
     * @tc.desc Verify indexOf(128, 1) returns -1, searchElement out of Int8 range uses strict equality with fromIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test030() {
    Int8Array arr = new Int8Array(new int[] {INT8_MIN, 0, INT8_MIN});
    int result = arr.indexOf(128, 1);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(0) on empty new Int8Array(0) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_3100
     * @tc.name int8ArrayIndexOfPart03Test031
     * @tc.desc Verify indexOf(0) on empty new Int8Array(0) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test031() {
    Int8Array arr = new Int8Array(0);
    int result = arr.indexOf(0);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(INT8_MAX) on empty new Int8Array(0) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_3200
     * @tc.name int8ArrayIndexOfPart03Test032
     * @tc.desc Verify indexOf(INT8_MAX) on empty new Int8Array(0) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test032() {
    Int8Array arr = new Int8Array(0);
    int result = arr.indexOf(INT8_MAX);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(-128) on empty new Int8Array(0) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_3300
     * @tc.name int8ArrayIndexOfPart03Test033
     * @tc.desc Verify indexOf(-128) on empty new Int8Array(0) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test033() {
    Int8Array arr = new Int8Array(0);
    int result = arr.indexOf(INT8_MIN);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(5) searches array [5] and returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_3400
     * @tc.name int8ArrayIndexOfPart03Test034
     * @tc.desc Verify indexOf(5) searches array [5] and returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test034() {
    Int8Array arr = new Int8Array(new int[] {5});
    int result = arr.indexOf(5);
    assertEqual(0, result);
    }

    /**
     * Verify indexOf(5, 0) on single-element new Int8Array(new int[] {5}) returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_3500
     * @tc.name int8ArrayIndexOfPart03Test035
     * @tc.desc Verify indexOf(5, 0) on single-element new Int8Array(new int[] {5}) returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test035() {
    Int8Array arr = new Int8Array(new int[] {5});
    int result = arr.indexOf(5, 0);
    assertEqual(0, result);
    }

    /**
     * Verify indexOf(5, -1) on new Int8Array(new int[] {5}) returns index 0 (negative fromIndex clamps to 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_3600
     * @tc.name int8ArrayIndexOfPart03Test036
     * @tc.desc Verify indexOf(5, -1) on new Int8Array(new int[] {5}) returns index 0 (negative fromIndex clamps to 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test036() {
    Int8Array arr = new Int8Array(new int[] {5});
    int result = arr.indexOf(5, -1);
    assertEqual(0, result);
    }

    /**
     * Verify indexOf(3) searches array [5] and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_3700
     * @tc.name int8ArrayIndexOfPart03Test037
     * @tc.desc Verify indexOf(3) searches array [5] and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test037() {
    Int8Array arr = new Int8Array(new int[] {5});
    int result = arr.indexOf(3);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(7) searches array [7, 7, 7] and returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_3800
     * @tc.name int8ArrayIndexOfPart03Test038
     * @tc.desc Verify indexOf(7) searches array [7, 7, 7] and returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test038() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    int result = arr.indexOf(7);
    assertEqual(0, result);
    }

    /**
     * Verify indexOf(7, 1) on new Int8Array(new int[] {7, 7, 7}) returns index 1 (second occurrence)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_3900
     * @tc.name int8ArrayIndexOfPart03Test039
     * @tc.desc Verify indexOf(7, 1) on new Int8Array(new int[] {7, 7, 7}) returns index 1 (second occurrence)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test039() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    int result = arr.indexOf(7, 1);
    assertEqual(1, result);
    }

    /**
     * Verify indexOf(7, 2) on new Int8Array(new int[] {7, 7, 7}) returns index 2 (third occurrence)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_4000
     * @tc.name int8ArrayIndexOfPart03Test040
     * @tc.desc Verify indexOf(7, 2) on new Int8Array(new int[] {7, 7, 7}) returns index 2 (third occurrence)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test040() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    int result = arr.indexOf(7, 2);
    assertEqual(2, result);
    }

    /**
     * Verify indexOf(7, 3) on new Int8Array(new int[] {7, 7, 7}) returns -1 (fromIndex equals length)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_4100
     * @tc.name int8ArrayIndexOfPart03Test041
     * @tc.desc Verify indexOf(7, 3) on new Int8Array(new int[] {7, 7, 7}) returns -1 (fromIndex equals length)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test041() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    int result = arr.indexOf(7, 3);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(7, -1) on new Int8Array(new int[] {7, 7, 7}) returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_4200
     * @tc.name int8ArrayIndexOfPart03Test042
     * @tc.desc Verify indexOf(7, -1) on new Int8Array(new int[] {7, 7, 7}) returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test042() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    int result = arr.indexOf(7, -1);
    assertEqual(2, result);
    }

    /**
     * Verify indexOf(7, -3) on new Int8Array(new int[] {7, 7, 7}) returns index 0 (negative fromIndex equals -length)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_4300
     * @tc.name int8ArrayIndexOfPart03Test043
     * @tc.desc Verify indexOf(7, -3) on new Int8Array(new int[] {7, 7, 7}) returns index 0 (negative fromIndex equals
     * -length)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test043() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    int result = arr.indexOf(7, -3);
    assertEqual(0, result);
    }

    /**
     * Verify indexOf(7, -4) on new Int8Array(new int[] {7, 7, 7}) returns index 0 (negative fromIndex clamps to 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_4400
     * @tc.name int8ArrayIndexOfPart03Test044
     * @tc.desc Verify indexOf(7, -4) on new Int8Array(new int[] {7, 7, 7}) returns index 0 (negative fromIndex clamps
     * to 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test044() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    int result = arr.indexOf(7, -4);
    assertEqual(0, result);
    }

    /**
     * Verify indexOf(8) searches array [7, 7, 7] and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_4500
     * @tc.name int8ArrayIndexOfPart03Test045
     * @tc.desc Verify indexOf(8) searches array [7, 7, 7] and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test045() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    int result = arr.indexOf(8);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(40, 0) searches array [10, 20, 30] and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_4600
     * @tc.name int8ArrayIndexOfPart03Test046
     * @tc.desc Verify indexOf(40, 0) searches array [10, 20, 30] and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test046() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(40, 0);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(5, 1) searches array [5, 15, 25] from index 1 and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_4700
     * @tc.name int8ArrayIndexOfPart03Test047
     * @tc.desc Verify indexOf(5, 1) searches array [5, 15, 25] from index 1 and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test047() {
    Int8Array arr = new Int8Array(new int[] {5, 15, 25});
    int result = arr.indexOf(5, 1);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(5, 3) searches array [5, 15, 25] with fromIndex >= length and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_4800
     * @tc.name int8ArrayIndexOfPart03Test048
     * @tc.desc Verify indexOf(5, 3) searches array [5, 15, 25] with fromIndex >= length and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test048() {
    Int8Array arr = new Int8Array(new int[] {5, 15, 25});
    int result = arr.indexOf(5, 3);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(25, 4) searches array [5, 15, 25] with fromIndex >= length and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_4900
     * @tc.name int8ArrayIndexOfPart03Test049
     * @tc.desc Verify indexOf(25, 4) searches array [5, 15, 25] with fromIndex >= length and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test049() {
    Int8Array arr = new Int8Array(new int[] {5, 15, 25});
    int result = arr.indexOf(25, 4);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(0) returns -1 on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_5000
     * @tc.name int8ArrayIndexOfPart03Test050
     * @tc.desc Verify indexOf(0) returns -1 on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test050() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(0);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(10) searches array [10, 20, 30] and returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_5100
     * @tc.name int8ArrayIndexOfPart03Test051
     * @tc.desc Verify indexOf(10) searches array [10, 20, 30] and returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test051() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(10);
    assertEqual(0, result);
    }

    /**
     * Verify indexOf(30) searches array [10, 20, 30] and returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_5200
     * @tc.name int8ArrayIndexOfPart03Test052
     * @tc.desc Verify indexOf(30) searches array [10, 20, 30] and returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test052() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(30);
    assertEqual(2, result);
    }

    /**
     * Verify indexOf(99) searches array [1, 2, 3] and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_5300
     * @tc.name int8ArrayIndexOfPart03Test053
     * @tc.desc Verify indexOf(99) searches array [1, 2, 3] and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test053() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int result = arr.indexOf(99);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(30, 2) searches array [10, 20, 30] from index 2 and returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_5400
     * @tc.name int8ArrayIndexOfPart03Test054
     * @tc.desc Verify indexOf(30, 2) searches array [10, 20, 30] from index 2 and returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test054() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(30, 2);
    assertEqual(2, result);
    }

    /**
     * Verify indexOf(20, 2) searches array [10, 20, 30] from index 2 and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_5500
     * @tc.name int8ArrayIndexOfPart03Test055
     * @tc.desc Verify indexOf(20, 2) searches array [10, 20, 30] from index 2 and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test055() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(20, 2);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(10, 1) on new Int8Array(new int[] {10, 20, 30}) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_5600
     * @tc.name int8ArrayIndexOfPart03Test056
     * @tc.desc Verify indexOf(10, 1) on new Int8Array(new int[] {10, 20, 30}) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test056() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(10, 1);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(10, 2) on new Int8Array(new int[] {10, 20, 30}) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_5700
     * @tc.name int8ArrayIndexOfPart03Test057
     * @tc.desc Verify indexOf(10, 2) on new Int8Array(new int[] {10, 20, 30}) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test057() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(10, 2);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(40, 3) searches array [10, 20, 30, 40, 50] from index 3 and returns index 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_5800
     * @tc.name int8ArrayIndexOfPart03Test058
     * @tc.desc Verify indexOf(40, 3) searches array [10, 20, 30, 40, 50] from index 3 and returns index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test058() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.indexOf(40, 3);
    assertEqual(3, result);
    }

    /**
     * Verify indexOf(INT8_MAX) on new Int8Array(new int[] {10, INT8_MAX, 20}) returns index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_5900
     * @tc.name int8ArrayIndexOfPart03Test059
     * @tc.desc Verify indexOf(INT8_MAX) on new Int8Array(new int[] {10, INT8_MAX, 20}) returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test059() {
    Int8Array arr = new Int8Array(new int[] {10, INT8_MAX, 20});
    int result = arr.indexOf(INT8_MAX);
    assertEqual(1, result);
    }

    /**
     * Verify indexOf(-128) on new Int8Array(new int[] {-128, 10}) returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_6000
     * @tc.name int8ArrayIndexOfPart03Test060
     * @tc.desc Verify indexOf(-128) on new Int8Array(new int[] {-128, 10}) returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test060() {
    Int8Array arr = new Int8Array(new int[] {INT8_MIN, 10});
    int result = arr.indexOf(INT8_MIN);
    assertEqual(0, result);
    }

    /**
     * Verify indexOf(0) on new Int8Array(new int[] {10, 0, 20}) returns index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_6100
     * @tc.name int8ArrayIndexOfPart03Test061
     * @tc.desc Verify indexOf(0) on new Int8Array(new int[] {10, 0, 20}) returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test061() {
    Int8Array arr = new Int8Array(new int[] {10, 0, 20});
    int result = arr.indexOf(0);
    assertEqual(1, result);
    }

    /**
     * Verify indexOf(256, -1) returns -1, searchElement out of Int8 range uses strict equality with fromIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_6200
     * @tc.name int8ArrayIndexOfPart03Test062
     * @tc.desc Verify indexOf(256, -1) returns -1, searchElement out of Int8 range uses strict equality with fromIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test062() {
    Int8Array arr = new Int8Array(new int[] {0, 10, 0});
    int result = arr.indexOf(256, -1);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(255, 0) returns -1, searchElement out of Int8 range uses strict equality with fromIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_6300
     * @tc.name int8ArrayIndexOfPart03Test063
     * @tc.desc Verify indexOf(255, 0) returns -1, searchElement out of Int8 range uses strict equality with fromIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart03Test063() {
    Int8Array arr = new Int8Array(new int[] {-1, -1, 10});
    int result = arr.indexOf(255, 0);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(Number.NaN, 1) searches array and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART03_TEST_7100
     * @tc.name int8ArrayIndexOfPart03Test071
     * @tc.desc Verify indexOf(Number.NaN, 1) searches array and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
