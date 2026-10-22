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
 * Int8ArrayFillPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFillPart01Test extends BasTest {
    private static final int INT8_MAX = 127;

    /**
     * Verify fill(v) with 5 writes 5 to all 3 elements on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_0100
     * @tc.name int8ArrayFillPart01Test001
     * @tc.desc Verify fill(v) with 5 writes 5 to all 3 elements on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test001() {
    Int8Array arr = new Int8Array(3);
    int v = 5;
    Int8Array result = arr.fill(v);
    int r1 = result.length();
    int e1 = 3;
    assertEqual(e1, r1);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify fill(7, 1) keeps index 0 at 0 and fills 1..3 on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_0200
     * @tc.name int8ArrayFillPart01Test002
     * @tc.desc Verify fill(7, 1) keeps index 0 at 0 and fills 1..3 on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test002() {
    Int8Array arr = new Int8Array(4);
    int v = 7;
    arr.fill(v, 1);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(9, 1, 4) fills range [1, 4) keeping edges 0 on new Int8Array(5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_0300
     * @tc.name int8ArrayFillPart01Test003
     * @tc.desc Verify fill(9, 1, 4) fills range [1, 4) keeping edges 0 on new Int8Array(5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test003() {
    Int8Array arr = new Int8Array(5);
    int v = 9;
    arr.fill(v, 1, 4);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(9, arr.get(1));
    assertEqualInt(9, arr.get(3));
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify fill(v) on empty new Int8Array(0) returns the array itself with length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_0400
     * @tc.name int8ArrayFillPart01Test004
     * @tc.desc Verify fill(v) on empty new Int8Array(0) returns the array itself with length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test004() {
    Int8Array arr = new Int8Array(0);
    int v = 5;
    Int8Array result = arr.fill(v);
    assertEqual(arr, result);
    assertEqual(0, arr.length());
    }

    /**
     * Verify fill(v, 0, 0) on empty new Int8Array(0) returns the array itself
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_0500
     * @tc.name int8ArrayFillPart01Test005
     * @tc.desc Verify fill(v, 0, 0) on empty new Int8Array(0) returns the array itself
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test005() {
    Int8Array arr = new Int8Array(0);
    int v = 5;
    Int8Array result = arr.fill(v, 0, 0);
    assertEqual(arr, result);
    }

    /**
     * Verify fill(0) writes 0 to all elements on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_0600
     * @tc.name int8ArrayFillPart01Test006
     * @tc.desc Verify fill(0) writes 0 to all elements on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test006() {
    Int8Array arr = new Int8Array(3);
    int v = 0;
    arr.fill(v);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill(1) sets elements asserting indices 0 and 2, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_0700
     * @tc.name int8ArrayFillPart01Test007
     * @tc.desc Verify fill(1) sets elements asserting indices 0 and 2, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test007() {
    Int8Array arr = new Int8Array(3);
    int v = 1;
    arr.fill(v);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(2));
    }

    /**
     * Verify fill(-1) writes -1 to all elements on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_0800
     * @tc.name int8ArrayFillPart01Test008
     * @tc.desc Verify fill(-1) writes -1 to all elements on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test008() {
    Int8Array arr = new Int8Array(3);
    int v = -1;
    arr.fill(v);
    assertEqualInt(-1, arr.get(0));
    assertEqualInt(-1, arr.get(2));
    }

    /**
     * Verify fill(INT8_MAX) sets elements asserting indices 0 and 2, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_0900
     * @tc.name int8ArrayFillPart01Test009
     * @tc.desc Verify fill(INT8_MAX) sets elements asserting indices 0 and 2, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test009() {
    Int8Array arr = new Int8Array(3);
    int v = INT8_MAX;
    arr.fill(v);
    assertEqualInt(INT8_MAX, arr.get(0));
    assertEqualInt(INT8_MAX, arr.get(2));
    }

    /**
     * Verify fill(v) with v=64 fills all elements of new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_1000
     * @tc.name int8ArrayFillPart01Test010
     * @tc.desc Verify fill(v) with v=64 fills all elements of new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test010() {
    Int8Array arr = new Int8Array(3);
    int v = 64;
    arr.fill(v);
    assertEqualInt(64, arr.get(0));
    assertEqualInt(64, arr.get(2));
    }

    /**
     * Verify fill(v) with v=-64 fills all elements of new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_1100
     * @tc.name int8ArrayFillPart01Test011
     * @tc.desc Verify fill(v) with v=-64 fills all elements of new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test011() {
    Int8Array arr = new Int8Array(3);
    int v = -64;
    arr.fill(v);
    assertEqualInt(-64, arr.get(0));
    assertEqualInt(-64, arr.get(2));
    }

    /**
     * Verify fill(v) with v=7 overwrites preset elements 10, 20, 30, 40, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_1200
     * @tc.name int8ArrayFillPart01Test012
     * @tc.desc Verify fill(v) with v=7 overwrites preset elements 10, 20, 30, 40, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test012() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    int v = 7;
    arr.fill(v);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify repeated fill(5) keeps 5 at all elements on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_1300
     * @tc.name int8ArrayFillPart01Test013
     * @tc.desc Verify repeated fill(5) keeps 5 at all elements on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test013() {
    Int8Array arr = new Int8Array(3);
    int v = 5;
    arr.fill(v);
    arr.fill(v);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify second fill(9) overwrites first fill 5 at all elements on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_1400
     * @tc.name int8ArrayFillPart01Test014
     * @tc.desc Verify second fill(9) overwrites first fill 5 at all elements on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test014() {
    Int8Array arr = new Int8Array(3);
    int fillValA = 5;
    int fillValB = 9;
    arr.fill(fillValA);
    arr.fill(fillValB);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(9, arr.get(2));
    }

    /**
     * Verify fill(v, 0) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_1500
     * @tc.name int8ArrayFillPart01Test015
     * @tc.desc Verify fill(v, 0) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test015() {
    Int8Array arr = new Int8Array(4);
    int v = 3;
    arr.fill(v, 0);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(3, arr.get(3));
    }

    /**
     * Verify fill(3, 1) keeps index 0 at 0 and fills 1..3 on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_1600
     * @tc.name int8ArrayFillPart01Test016
     * @tc.desc Verify fill(3, 1) keeps index 0 at 0 and fills 1..3 on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test016() {
    Int8Array arr = new Int8Array(4);
    int v = 3;
    arr.fill(v, 1);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(3, arr.get(3));
    }

    /**
     * Verify fill(v, 3) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_1700
     * @tc.name int8ArrayFillPart01Test017
     * @tc.desc Verify fill(v, 3) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test017() {
    Int8Array arr = new Int8Array(4);
    int v = 3;
    arr.fill(v, 3);
    assertEqualInt(0, arr.get(2));
    assertEqualInt(3, arr.get(3));
    }

    /**
     * Verify fill(v, 4) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_1800
     * @tc.name int8ArrayFillPart01Test018
     * @tc.desc Verify fill(v, 4) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test018() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.set(3, 4);
    int v = 9;
    arr.fill(v, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify fill(v, 5) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_1900
     * @tc.name int8ArrayFillPart01Test019
     * @tc.desc Verify fill(v, 5) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test019() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 1);
    int v = 9;
    arr.fill(v, 5);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify fill(v, -1) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_2000
     * @tc.name int8ArrayFillPart01Test020
     * @tc.desc Verify fill(v, -1) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test020() {
    Int8Array arr = new Int8Array(4);
    int v = 7;
    arr.fill(v, -1);
    assertEqualInt(0, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(v, -4) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_2100
     * @tc.name int8ArrayFillPart01Test021
     * @tc.desc Verify fill(v, -4) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test021() {
    Int8Array arr = new Int8Array(4);
    int v = 7;
    arr.fill(v, -4);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(v, -3) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_2200
     * @tc.name int8ArrayFillPart01Test022
     * @tc.desc Verify fill(v, -3) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test022() {
    Int8Array arr = new Int8Array(4);
    int v = 7;
    arr.fill(v, -3);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(7, arr.get(1));
    }

    /**
     * Verify fill(v, -5) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_2300
     * @tc.name int8ArrayFillPart01Test023
     * @tc.desc Verify fill(v, -5) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test023() {
    Int8Array arr = new Int8Array(4);
    int v = 7;
    arr.fill(v, -5);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(v, 2147483647) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_2400
     * @tc.name int8ArrayFillPart01Test024
     * @tc.desc Verify fill(v, 2147483647) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test024() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 1);
    int v = 9;
    arr.fill(v, 2147483647);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify fill(v, -2147483648) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_2500
     * @tc.name int8ArrayFillPart01Test025
     * @tc.desc Verify fill(v, -2147483648) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test025() {
    Int8Array arr = new Int8Array(4);
    int v = 9;
    arr.fill(v, Integer.MIN_VALUE);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(9, arr.get(3));
    }

    /**
     * Verify fill(v, 0, 4) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_2600
     * @tc.name int8ArrayFillPart01Test026
     * @tc.desc Verify fill(v, 0, 4) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test026() {
    Int8Array arr = new Int8Array(4);
    int v = 6;
    arr.fill(v, 0, 4);
    assertEqualInt(6, arr.get(0));
    assertEqualInt(6, arr.get(3));
    }

    /**
     * Verify fill(v, 0, 3) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_2700
     * @tc.name int8ArrayFillPart01Test027
     * @tc.desc Verify fill(v, 0, 3) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test027() {
    Int8Array arr = new Int8Array(4);
    int v = 6;
    arr.fill(v, 0, 3);
    assertEqualInt(6, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify fill(v, 0, 1) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_2800
     * @tc.name int8ArrayFillPart01Test028
     * @tc.desc Verify fill(v, 0, 1) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test028() {
    Int8Array arr = new Int8Array(4);
    int v = 6;
    arr.fill(v, 0, 1);
    assertEqualInt(6, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify fill(v, 0, 0) empty range keeps original value 2 at index 0, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_2900
     * @tc.name int8ArrayFillPart01Test029
     * @tc.desc Verify fill(v, 0, 0) empty range keeps original value 2 at index 0, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test029() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 2);
    int v = 6;
    arr.fill(v, 0, 0);
    assertEqualInt(2, arr.get(0));
    }

    /**
     * Verify fill(v, 2, 2) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_3000
     * @tc.name int8ArrayFillPart01Test030
     * @tc.desc Verify fill(v, 2, 2) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test030() {
    Int8Array arr = new Int8Array(4);
    arr.set(2, 5);
    int v = 6;
    arr.fill(v, 2, 2);
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify fill(6, 3, 1) with start>end is no-op keeping $_set(1, 5) on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_3100
     * @tc.name int8ArrayFillPart01Test031
     * @tc.desc Verify fill(6, 3, 1) with start>end is no-op keeping $_set(1, 5) on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test031() {
    Int8Array arr = new Int8Array(4);
    arr.set(1, 5);
    int v = 6;
    arr.fill(v, 3, 1);
    assertEqualInt(5, arr.get(1));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify fill(v, 0, -1) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_3200
     * @tc.name int8ArrayFillPart01Test032
     * @tc.desc Verify fill(v, 0, -1) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test032() {
    Int8Array arr = new Int8Array(4);
    int v = 6;
    arr.fill(v, 0, -1);
    assertEqualInt(6, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify fill(v, 0, -4) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_3300
     * @tc.name int8ArrayFillPart01Test033
     * @tc.desc Verify fill(v, 0, -4) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test033() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 8);
    int v = 6;
    arr.fill(v, 0, -4);
    assertEqualInt(8, arr.get(0));
    }

    /**
     * Verify fill(v, 0, -3) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_3400
     * @tc.name int8ArrayFillPart01Test034
     * @tc.desc Verify fill(v, 0, -3) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test034() {
    Int8Array arr = new Int8Array(4);
    int v = 6;
    arr.fill(v, 0, -3);
    assertEqualInt(6, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify fill(v, 0, -5) clamps end to 0 and keeps original value 8 at index 0, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_3500
     * @tc.name int8ArrayFillPart01Test035
     * @tc.desc Verify fill(v, 0, -5) clamps end to 0 and keeps original value 8 at index 0, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test035() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 8);
    int v = 6;
    arr.fill(v, 0, -5);
    assertEqualInt(8, arr.get(0));
    }

    /**
     * Verify fill(v, 0, 5) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_3600
     * @tc.name int8ArrayFillPart01Test036
     * @tc.desc Verify fill(v, 0, 5) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test036() {
    Int8Array arr = new Int8Array(4);
    int v = 6;
    arr.fill(v, 0, 5);
    assertEqualInt(6, arr.get(0));
    assertEqualInt(6, arr.get(3));
    }

    /**
     * Verify fill(v, 0, 2147483647) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_3700
     * @tc.name int8ArrayFillPart01Test037
     * @tc.desc Verify fill(v, 0, 2147483647) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test037() {
    Int8Array arr = new Int8Array(4);
    int v = 6;
    arr.fill(v, 0, 2147483647);
    assertEqualInt(6, arr.get(0));
    assertEqualInt(6, arr.get(3));
    }

    /**
     * Verify fill(v, 0, -2147483648) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_3800
     * @tc.name int8ArrayFillPart01Test038
     * @tc.desc Verify fill(v, 0, -2147483648) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test038() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 8);
    int v = 6;
    arr.fill(v, 0, Integer.MIN_VALUE);
    assertEqualInt(8, arr.get(0));
    }

    /**
     * Verify fill(v) returns the array itself on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_3900
     * @tc.name int8ArrayFillPart01Test039
     * @tc.desc Verify fill(v) returns the array itself on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test039() {
    Int8Array arr = new Int8Array(3);
    int v = 4;
    Int8Array result = arr.fill(v);
    assertEqual(arr, result);
    Integer r1 = arr.get(0);
    int e1 = 4;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify chained fill(4) then fill(8) leaves 8 at indices 0 and 2, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_4000
     * @tc.name int8ArrayFillPart01Test040
     * @tc.desc Verify chained fill(4) then fill(8) leaves 8 at indices 0 and 2, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test040() {
    Int8Array arr = new Int8Array(3);
    int fillValA = 4;
    int fillValB = 8;
    arr.fill(fillValA).fill(fillValB);
    assertEqualInt(8, arr.get(0));
    assertEqualInt(8, arr.get(2));
    }

    /**
     * Verify fill(v) with v=4 fills all 5 elements, on new Int8Array(5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_4100
     * @tc.name int8ArrayFillPart01Test041
     * @tc.desc Verify fill(v) with v=4 fills all 5 elements, on new Int8Array(5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test041() {
    Int8Array arr = new Int8Array(5);
    int v = 4;
    arr.fill(v);
    Integer r1 = arr.get(0);
    int e1 = 4;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(4);
    int e2 = 4;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify fill(v) with v=4 fills elements of new Int8Array(5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_4200
     * @tc.name int8ArrayFillPart01Test042
     * @tc.desc Verify fill(v) with v=4 fills elements of new Int8Array(5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test042() {
    Int8Array arr = new Int8Array(5);
    int v = 4;
    arr.fill(v);
    Integer r1 = arr.get(0);
    int e1 = 4;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify fill(v).subarray(1, 3) yields 4 at index 0 with length 2 on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_4300
     * @tc.name int8ArrayFillPart01Test043
     * @tc.desc Verify fill(v).subarray(1, 3) yields 4 at index 0 with length 2 on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test043() {
    Int8Array arr = new Int8Array(4);
    int v = 4;
    Int8Array sub = arr.fill(v).subarray(1, 3);
    assertEqualInt(4, sub.get(0));
    assertEqual(2, sub.length());
    }

    /**
     * Verify fill(v) on Int8Array(buf, 2, 4) view writes 4 to view elements on ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_4400
     * @tc.name int8ArrayFillPart01Test044
     * @tc.desc Verify fill(v) on Int8Array(buf, 2, 4) view writes 4 to view elements on ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test044() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 2, 4);
    int v = 4;
    arr.fill(v);
    Integer r1 = arr.get(0);
    int e1 = 4;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(3);
    int e2 = 4;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify fill(v, 3, 1) start > end keeps preset values 1 and 4, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_4500
     * @tc.name int8ArrayFillPart01Test045
     * @tc.desc Verify fill(v, 3, 1) start > end keeps preset values 1 and 4, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test045() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(3, 4);
    int v = 9;
    arr.fill(v, 3, 1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify fill(v, -1, -2) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_4600
     * @tc.name int8ArrayFillPart01Test046
     * @tc.desc Verify fill(v, -1, -2) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test046() {
    Int8Array arr = new Int8Array(4);
    arr.set(3, 8);
    int v = 9;
    arr.fill(v, -1, -2);
    assertEqualInt(8, arr.get(3));
    }

    /**
     * Verify fill(9, 0, -5) with end clamped to 0 is no-op keeping $_set(0, 3) on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_4700
     * @tc.name int8ArrayFillPart01Test047
     * @tc.desc Verify fill(9, 0, -5) with end clamped to 0 is no-op keeping $_set(0, 3) on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test047() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 3);
    int v = 9;
    arr.fill(v, 0, -5);
    assertEqualInt(3, arr.get(0));
    }

    /**
     * Verify fill(v, 10, 20) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_4800
     * @tc.name int8ArrayFillPart01Test048
     * @tc.desc Verify fill(v, 10, 20) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test048() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, 1);
    int v = 9;
    arr.fill(v, 10, 20);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify fill(v, -10, -8) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_4900
     * @tc.name int8ArrayFillPart01Test049
     * @tc.desc Verify fill(v, -10, -8) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test049() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, 1);
    int v = 9;
    arr.fill(v, -10, -8);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify fill(v, -1, 1) replaces elements in specified range with given value on
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_5000
     * @tc.name int8ArrayFillPart01Test050
     * @tc.desc Verify fill(v, -1, 1) replaces elements in specified range with given value onnew Int8Array(0) and
     * length remains 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test050() {
    Int8Array arr = new Int8Array(0);
    int v = 9;
    Int8Array result = arr.fill(v, -1, 1);
    assertEqual(arr, result);
    assertEqual(0, arr.length());
    }

    /**
     * Verify fill(v) with v=42 fills the single element of new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_5100
     * @tc.name int8ArrayFillPart01Test051
     * @tc.desc Verify fill(v) with v=42 fills the single element of new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test051() {
    Int8Array arr = new Int8Array(1);
    int v = 42;
    arr.fill(v);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify fill(v) then $_set(1, 99) keeps 5 at indices 0, 2 and 99 at index 1, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_5200
     * @tc.name int8ArrayFillPart01Test052
     * @tc.desc Verify fill(v) then $_set(1, 99) keeps 5 at indices 0, 2 and 99 at index 1, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test052() {
    Int8Array arr = new Int8Array(3);
    int v = 5;
    arr.fill(v);
    arr.set(1, 99);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(99, arr.get(1));
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify fill(v) with v=-128 fills all 3 elements, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_5300
     * @tc.name int8ArrayFillPart01Test053
     * @tc.desc Verify fill(v) with v=-128 fills all 3 elements, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test053() {
    Int8Array arr = new Int8Array(3);
    int v = -128;
    arr.fill(v);
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-128, arr.get(1));
    assertEqualInt(-128, arr.get(2));
    }

    /**
     * Verify fill(INT8_MAX) sets elements asserting indices 0 1 and 2, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_5400
     * @tc.name int8ArrayFillPart01Test054
     * @tc.desc Verify fill(INT8_MAX) sets elements asserting indices 0 1 and 2, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test054() {
    Int8Array arr = new Int8Array(3);
    int v = INT8_MAX;
    arr.fill(v);
    assertEqualInt(INT8_MAX, arr.get(0));
    assertEqualInt(INT8_MAX, arr.get(1));
    assertEqualInt(INT8_MAX, arr.get(2));
    }

    /**
     * Verify fill(0) overwrites preset 50, 60, 70 to 0 on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_5500
     * @tc.name int8ArrayFillPart01Test055
     * @tc.desc Verify fill(0) overwrites preset 50, 60, 70 to 0 on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test055() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, 50);
    arr.set(1, 60);
    arr.set(2, 70);
    int v = 0;
    arr.fill(v);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill(v) with v=-1 fills all 3 elements and toString returns '-1, -1, -1', on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_5600
     * @tc.name int8ArrayFillPart01Test056
     * @tc.desc Verify fill(v) with v=-1 fills all 3 elements and toString returns '-1, -1, -1', on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test056() {
    Int8Array arr = new Int8Array(3);
    int v = -1;
    arr.fill(v);
    assertEqualInt(-1, arr.get(0));
    assertEqualInt(-1, arr.get(1));
    assertEqualInt(-1, arr.get(2));
    String r1 = String.valueOf(arr);
    String e1 = "-1,-1,-1";
    assertEqual(e1, r1);
    }

    /**
     * Verify fill(1) sets elements asserting indices 0 1 and 2, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_5700
     * @tc.name int8ArrayFillPart01Test057
     * @tc.desc Verify fill(1) sets elements asserting indices 0 1 and 2, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test057() {
    Int8Array arr = new Int8Array(3);
    int v = 1;
    arr.fill(v);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(1));
    assertEqualInt(1, arr.get(2));
    }

    /**
     * Verify fill(7, 1, 4) fills range [1, 4) keeping edges 0 on new Int8Array(5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_5800
     * @tc.name int8ArrayFillPart01Test058
     * @tc.desc Verify fill(7, 1, 4) fills range [1, 4) keeping edges 0 on new Int8Array(5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test058() {
    Int8Array arr = new Int8Array(5);
    int v = 7;
    arr.fill(v, 1, 4);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(3));
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify fill(33) readable via at(0) and at(-1) on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_5900
     * @tc.name int8ArrayFillPart01Test059
     * @tc.desc Verify fill(33) readable via at(0) and at(-1) on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test059() {
    Int8Array arr = new Int8Array(4);
    int v = 33;
    arr.fill(v);
    assertEqualInt(33, arr.at(0));
    assertEqualInt(33, arr.at(-1));
    }

    /**
     * Verify fill(5) makes join(',') return '5, 5, 5' on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_6000
     * @tc.name int8ArrayFillPart01Test060
     * @tc.desc Verify fill(5) makes join(',') return '5, 5, 5' on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test060() {
    Int8Array arr = new Int8Array(3);
    int v = 5;
    arr.fill(v);
    assertEqual("5,5,5", arr.join(","));
    }

    /**
     * Verify fill(7, 1, 4) keeps $_set(0, 11) and $_set(4, 99) outside range on new Int8Array(5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_6100
     * @tc.name int8ArrayFillPart01Test061
     * @tc.desc Verify fill(7, 1, 4) keeps $_set(0, 11) and $_set(4, 99) outside range on new Int8Array(5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test061() {
    Int8Array arr = new Int8Array(5);
    arr.set(0, 11);
    arr.set(4, 99);
    int v = 7;
    arr.fill(v, 1, 4);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(99, arr.get(4));
    }

    /**
     * Verify fill(v, 2, 4) replaces elements in specified range with given value verified via at(0) and at(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_6200
     * @tc.name int8ArrayFillPart01Test062
     * @tc.desc Verify fill(v, 2, 4) replaces elements in specified range with given value verified via at(0) and at(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test062() {
    Int8Array arr = new Int8Array(5);
    arr.set(0, 11);
    int v = 7;
    arr.fill(v, 2, 4);
    assertEqualInt(11, arr.at(0));
    assertEqualInt(0, arr.at(1));
    }

    /**
     * Verify fill(42) makes forEach sum 126 on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_6300
     * @tc.name int8ArrayFillPart01Test063
     * @tc.desc Verify fill(42) makes forEach sum 126 on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test063() {
    Int8Array arr = new Int8Array(3);
    int v = 42;
    arr.fill(v);
    int[] sum = {0};
    arr.forEach((x) -> {
    sum[0] += x;
    });
    assertEqual(126, sum[0]);
    }

    /**
     * Verify fill(5) on new Int8Array(buf) writes 5 visible via new view on ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_6400
     * @tc.name int8ArrayFillPart01Test064
     * @tc.desc Verify fill(5) on new Int8Array(buf) writes 5 visible via new view on ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test064() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf);
    int v = 5;
    arr.fill(v);
    Int8Array view = new Int8Array(buf);
    assertEqualInt(5, view.get(0));
    assertEqualInt(5, view.get(3));
    }

    /**
     * Verify a.fill(7) on Int8Array(buf) visible in sibling view b on ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_6500
     * @tc.name int8ArrayFillPart01Test065
     * @tc.desc Verify a.fill(7) on Int8Array(buf) visible in sibling view b on ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test065() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array a = new Int8Array(buf);
    Int8Array b = new Int8Array(buf);
    int v = 7;
    a.fill(v);
    assertEqualInt(7, b.get(0));
    assertEqualInt(7, b.get(3));
    }

    /**
     * Verify fill(v) on subarray(1, 4) writes to original array at indices 1-3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_6600
     * @tc.name int8ArrayFillPart01Test066
     * @tc.desc Verify fill(v) on subarray(1, 4) writes to original array at indices 1-3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test066() {
    Int8Array arr = new Int8Array(5);
    Int8Array sub = arr.subarray(1, 4);
    int v = 9;
    sub.fill(v);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(9, arr.get(1));
    assertEqualInt(9, arr.get(3));
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify copy.fill(9) leaves original arr $_set(0, 1) unchanged on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_6700
     * @tc.name int8ArrayFillPart01Test067
     * @tc.desc Verify copy.fill(9) leaves original arr $_set(0, 1) unchanged on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test067() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 1);
    Int8Array copy = arr.slice();
    int v = 9;
    copy.fill(v);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(9, copy.get(0));
    }

    /**
     * Verify fill(v) with v=6 writes view range only, other buffer bytes stay 0, on new Int8Array(buf, 2, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_6800
     * @tc.name int8ArrayFillPart01Test068
     * @tc.desc Verify fill(v) with v=6 writes view range only, other buffer bytes stay 0, on new Int8Array(buf, 2, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test068() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 2, 4);
    int v = 6;
    arr.fill(v);
    Int8Array full = new Int8Array(buf);
    assertEqualInt(0, full.get(0));
    assertEqualInt(6, full.get(2));
    assertEqualInt(6, full.get(5));
    assertEqualInt(0, full.get(6));
    }

    /**
     * Verify a1.fill(5) on Int8Array(buf, 0, 3) writes 5 visible in sibling view on ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_6900
     * @tc.name int8ArrayFillPart01Test069
     * @tc.desc Verify a1.fill(5) on Int8Array(buf, 0, 3) writes 5 visible in sibling view on ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test069() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array a1 = new Int8Array(buf, 0, 3);
    Int8Array a2 = new Int8Array(buf, 3, 3);
    int fillValA = 5;
    int fillValB = 10;
    a1.fill(fillValA);
    a2.fill(fillValB);
    assertEqualInt(5, a1.get(0));
    assertEqualInt(10, a2.get(0));
    }

    /**
     * Verify fill(9, 0, 2) then reverse() yields 0 at index 0 and 9 at index 3 on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_7100
     * @tc.name int8ArrayFillPart01Test071
     * @tc.desc Verify fill(9, 0, 2) then reverse() yields 0 at index 0 and 9 at index 3 on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test071() {
    Int8Array arr = new Int8Array(4);
    int v = 9;
    arr.fill(v, 0, 2);
    arr.reverse();
    assertEqualInt(0, arr.get(0));
    assertEqualInt(9, arr.get(3));
    }

    /**
     * Verify fill(7, 0, 2) then copyWithin(3, 0, 2) keeps filled values 7 at indices 3, 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_7200
     * @tc.name int8ArrayFillPart01Test072
     * @tc.desc Verify fill(7, 0, 2) then copyWithin(3, 0, 2) keeps filled values 7 at indices 3, 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test072() {
    Int8Array arr = new Int8Array(5);
    int v = 7;
    arr.fill(v, 0, 2);
    arr.copyWithin(3, 0, 2);
    assertEqualInt(7, arr.get(3));
    assertEqualInt(7, arr.get(4));
    }

    /**
     * Verify fill(1, 0, 2) then fill(2, 2, 4) then fill(3, 4, 6) writes 1 at index 0 on new Int8Array(6)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_7300
     * @tc.name int8ArrayFillPart01Test073
     * @tc.desc Verify fill(1, 0, 2) then fill(2, 2, 4) then fill(3, 4, 6) writes 1 at index 0 on new Int8Array(6)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test073() {
    Int8Array arr = new Int8Array(6);
    int fillValA = 1;
    int fillValB = 2;
    int fillValC = 3;
    arr.fill(fillValA, 0, 2);
    arr.fill(fillValB, 2, 4);
    arr.fill(fillValC, 4, 6);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(3, arr.get(4));
    }

    /**
     * Verify fill(7) makes indexOf(7) return 0 and includes(7) true on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_7400
     * @tc.name int8ArrayFillPart01Test074
     * @tc.desc Verify fill(7) makes indexOf(7) return 0 and includes(7) true on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test074() {
    Int8Array arr = new Int8Array(4);
    int v = 7;
    arr.fill(v);
    assertEqual(0, arr.indexOf(7));
    assertTrue(arr.includes(7));
    }

    /**
     * Verify fill(5) makes find(x === 5) return 5 on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_7500
     * @tc.name int8ArrayFillPart01Test075
     * @tc.desc Verify fill(5) makes find(x === 5) return 5 on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test075() {
    Int8Array arr = new Int8Array(4);
    int v = 5;
    arr.fill(v);
    Integer found = arr.find((x) -> x == 5);
    assertEqualInt(5, found);
    }

    /**
     * Verify fill(3, 0, 2).fill(6, 2, 4) writes 3, 3, 6, 6 on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_7600
     * @tc.name int8ArrayFillPart01Test076
     * @tc.desc Verify fill(3, 0, 2).fill(6, 2, 4) writes 3, 3, 6, 6 on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test076() {
    Int8Array arr = new Int8Array(4);
    int fillValA = 3;
    int fillValB = 6;
    arr.fill(fillValA, 0, 2).fill(fillValB, 2, 4);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(6, arr.get(2));
    assertEqualInt(6, arr.get(3));
    }

    /**
     * Verify fill(5) then set(src, 1) preserves 5 at index 0 and fills 10, 20 at 1, 2 on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART01_TEST_7700
     * @tc.name int8ArrayFillPart01Test077
     * @tc.desc Verify fill(5) then set(src, 1) preserves 5 at index 0 and fills 10, 20 at 1, 2 on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart01Test077() {
    Int8Array arr = new Int8Array(4);
    int v = 5;
    arr.fill(v);
    Int8Array src = new Int8Array(new int[] {10, 20});
    arr.set(src, 1);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(20, arr.get(2));
    assertEqualInt(5, arr.get(3));
    }
}
