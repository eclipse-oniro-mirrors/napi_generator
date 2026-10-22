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
import basetype.common.RangeError;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayIndexSetPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIndexSetPart01Test extends BasTest {
    private static final int INT8_MAX = 127;

    /**
     * Verify $_set then $_get expects 10 with byte value, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_0100
     * @tc.name int8ArrayIndexSetPart01Test001
     * @tc.desc Verify $_set then $_get expects 10 with byte value, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test001() {
    Int8Array arr = new Int8Array(4);
    int v = 10;
    arr.set(0, v);
    assertEqualInt(10, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 10 with number value, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_0200
     * @tc.name int8ArrayIndexSetPart01Test002
     * @tc.desc Verify $_set then $_get expects 10 with number value, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test002() {
    Int8Array arr = new Int8Array(4);
    int n = 10;
    arr.set(0, n);
    assertEqualInt(10, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 50
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_0300
     * @tc.name int8ArrayIndexSetPart01Test003
     * @tc.desc Verify $_set then $_get expects 50
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test003() {
    Int8Array arr = new Int8Array(4);
    int v = 50;
    arr.set(0, v);
    assertEqualInt(50, arr.get(0));
    }

    /**
     * Verify $_set(1, v) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_0400
     * @tc.name int8ArrayIndexSetPart01Test004
     * @tc.desc Verify $_set(1, v) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test004() {
    Int8Array arr = new Int8Array(4);
    int v = 50;
    arr.set(1, v);
    assertEqualInt(50, arr.get(1));
    }

    /**
     * Verify $_set(3, v) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_0500
     * @tc.name int8ArrayIndexSetPart01Test005
     * @tc.desc Verify $_set(3, v) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test005() {
    Int8Array arr = new Int8Array(4);
    int v = 50;
    arr.set(3, v);
    assertEqualInt(50, arr.get(3));
    }

    /**
     * Verify $_set(2, 50) on new Int8Array(new int[] {-128, -1, 1, INT8_MAX}) sets element 2 to 50, preserves others
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_0600
     * @tc.name int8ArrayIndexSetPart01Test006
     * @tc.desc Verify $_set(2, 50) on new Int8Array(new int[] {-128, -1, 1, INT8_MAX}) sets element 2 to 50, preserves
     * others
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test006() {
    Int8Array arr = new Int8Array(new int[] {-128, -1, 1, INT8_MAX});
    int v = 50;
    arr.set(2, v);
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-1, arr.get(1));
    assertEqualInt(50, arr.get(2));
    assertEqualInt(INT8_MAX, arr.get(3));
    }

    /**
     * Verify $_set(-1, 50) throws RangeError, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_0700
     * @tc.name int8ArrayIndexSetPart01Test007
     * @tc.desc Verify $_set(-1, 50) throws RangeError, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test007() {
    Int8Array arr = new Int8Array(4);
    try {
    arr.set(-1, 50);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(-4, v) throws RangeError, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_0800
     * @tc.name int8ArrayIndexSetPart01Test008
     * @tc.desc Verify $_set(-4, v) throws RangeError, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test008() {
    Int8Array arr = new Int8Array(4);
    int v = 50;
    try {
    arr.set(-4, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(-2, v) throws RangeError, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_0900
     * @tc.name int8ArrayIndexSetPart01Test009
     * @tc.desc Verify $_set(-2, v) throws RangeError, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test009() {
    Int8Array arr = new Int8Array(4);
    int v = 50;
    try {
    arr.set(-2, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set then $_get expects 60, with $_get(0), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_1000
     * @tc.name int8ArrayIndexSetPart01Test010
     * @tc.desc Verify $_set then $_get expects 60, with $_get(0), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test010() {
    Int8Array arr = new Int8Array(4);
    int n = 60;
    arr.set(0, n);
    assertEqualInt(60, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 60, with $_get(1), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_1100
     * @tc.name int8ArrayIndexSetPart01Test011
     * @tc.desc Verify $_set then $_get expects 60, with $_get(1), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test011() {
    Int8Array arr = new Int8Array(4);
    int n = 60;
    arr.set(1, n);
    assertEqualInt(60, arr.get(1));
    }

    /**
     * Verify $_set then $_get expects 60, with $_get(3), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_1200
     * @tc.name int8ArrayIndexSetPart01Test012
     * @tc.desc Verify $_set then $_get expects 60, with $_get(3), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test012() {
    Int8Array arr = new Int8Array(4);
    int n = 60;
    arr.set(3, n);
    assertEqualInt(60, arr.get(3));
    }

    /**
     * Verify $_set(2, 60) on new Int8Array(new int[] {-128, -1, 1, INT8_MAX}) sets element 2 to 60, preserves others
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_1300
     * @tc.name int8ArrayIndexSetPart01Test013
     * @tc.desc Verify $_set(2, 60) on new Int8Array(new int[] {-128, -1, 1, INT8_MAX}) sets element 2 to 60, preserves
     * others
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test013() {
    Int8Array arr = new Int8Array(new int[] {-128, -1, 1, INT8_MAX});
    int n = 60;
    arr.set(2, n);
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-1, arr.get(1));
    assertEqualInt(60, arr.get(2));
    assertEqualInt(INT8_MAX, arr.get(3));
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-1, 60), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_1400
     * @tc.name int8ArrayIndexSetPart01Test014
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-1, 60), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test014() {
    Int8Array arr = new Int8Array(4);
    int n = 60;
    try {
    arr.set(-1, n);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(-4, n) throws RangeError, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_1500
     * @tc.name int8ArrayIndexSetPart01Test015
     * @tc.desc Verify $_set(-4, n) throws RangeError, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test015() {
    Int8Array arr = new Int8Array(4);
    int n = 60;
    try {
    arr.set(-4, n);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-2, 60), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_1600
     * @tc.name int8ArrayIndexSetPart01Test016
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-2, 60), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test016() {
    Int8Array arr = new Int8Array(4);
    int n = 60;
    try {
    arr.set(-2, n);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set then $_get expects -128 with byte value, after $_set(0, -128), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_1700
     * @tc.name int8ArrayIndexSetPart01Test017
     * @tc.desc Verify $_set then $_get expects -128 with byte value, after $_set(0, -128), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test017() {
    Int8Array arr = new Int8Array(4);
    int v = -128;
    arr.set(0, v);
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 0, with $_get(0), on new Int8Array(new int[] {INT8_MAX, I
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_1800
     * @tc.name int8ArrayIndexSetPart01Test018
     * @tc.desc Verify $_set then $_get expects 0, with $_get(0), on new Int8Array([INT8_MAX, I
     * NT8_MAX, INT8_MAX, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test018() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, INT8_MAX, INT8_MAX, INT8_MAX});
    int v = 0;
    arr.set(0, v);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects INT8_MAX with byte value, after $_set(0, INT8_MAX), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_1900
     * @tc.name int8ArrayIndexSetPart01Test019
     * @tc.desc Verify $_set then $_get expects INT8_MAX with byte value, after $_set(0, INT8_MAX), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test019() {
    Int8Array arr = new Int8Array(4);
    int v = INT8_MAX;
    arr.set(0, v);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_2000
     * @tc.name int8ArrayIndexSetPart01Test020
     * @tc.desc Verify $_set then $_get expects -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test020() {
    Int8Array arr = new Int8Array(4);
    int v = -1;
    arr.set(0, v);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 1, after $_set(0, 1), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_2100
     * @tc.name int8ArrayIndexSetPart01Test021
     * @tc.desc Verify $_set then $_get expects 1, after $_set(0, 1), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test021() {
    Int8Array arr = new Int8Array(4);
    int v = 1;
    arr.set(0, v);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects -128 with number value, after $_set(0, -128), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_2200
     * @tc.name int8ArrayIndexSetPart01Test022
     * @tc.desc Verify $_set then $_get expects -128 with number value, after $_set(0, -128), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test022() {
    Int8Array arr = new Int8Array(4);
    int n = -128;
    arr.set(0, n);
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects -128, with $_get(0), after $_set(0, 128), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_2300
     * @tc.name int8ArrayIndexSetPart01Test023
     * @tc.desc Verify $_set then $_get expects -128, with $_get(0), after $_set(0, 128), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test023() {
    Int8Array arr = new Int8Array(4);
    int n = 128;
    arr.set(0, n);
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 0, with $_get(0), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_2400
     * @tc.name int8ArrayIndexSetPart01Test024
     * @tc.desc Verify $_set then $_get expects 0, with $_get(0), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test024() {
    Int8Array arr = new Int8Array(4);
    int n = 256;
    arr.set(0, n);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 1 after $_set(0, 1.9), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_2500
     * @tc.name int8ArrayIndexSetPart01Test025
     * @tc.desc Verify $_set then $_get expects 1 after $_set(0, 1.9), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test025() {
    Int8Array arr = new Int8Array(4);
    double n = 1.9;
    arr.set(0, n);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-1, 128), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_2600
     * @tc.name int8ArrayIndexSetPart01Test026
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-1, 128), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test026() {
    Int8Array arr = new Int8Array(4);
    int n = 128;
    try {
    arr.set(-1, n);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set then $_get expects 0, with $_get(3), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_2700
     * @tc.name int8ArrayIndexSetPart01Test027
     * @tc.desc Verify $_set then $_get expects 0, with $_get(3), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test027() {
    Int8Array arr = new Int8Array(4);
    int n = 256;
    arr.set(3, n);
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify $_set then $_get expects -128, with $_get(1), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_2800
     * @tc.name int8ArrayIndexSetPart01Test028
     * @tc.desc Verify $_set then $_get expects -128, with $_get(1), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test028() {
    Int8Array arr = new Int8Array(4);
    int n = 128;
    arr.set(1, n);
    assertEqualInt(-128, arr.get(1));
    }

    /**
     * Verify $_set(0, 128) equals $_set(0, byte -128) both truncate to same value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_2900
     * @tc.name int8ArrayIndexSetPart01Test029
     * @tc.desc Verify $_set(0, 128) equals $_set(0, byte -128) both truncate to same value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test029() {
    Int8Array arr1 = new Int8Array(4);
    int n = 128;
    arr1.set(0, n);
    Int8Array arr2 = new Int8Array(4);
    int v = -128;
    arr2.set(0, v);
    assertEqual(arr2.get(0).intValue(), arr1.get(0).intValue());
    }

    /**
     * Verify $_set(0, 256) truncates to same value as $_set(0, byte 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_3000
     * @tc.name int8ArrayIndexSetPart01Test030
     * @tc.desc Verify $_set(0, 256) truncates to same value as $_set(0, byte 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test030() {
    Int8Array arr1 = new Int8Array(4);
    int n = 256;
    arr1.set(0, n);
    Int8Array arr2 = new Int8Array(4);
    int v = 0;
    arr2.set(0, v);
    assertEqual(arr2.get(0).intValue(), arr1.get(0).intValue());
    }

    /**
     * Verify $_set(0, 1.9) truncates to same value as $_set(0, byte 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_3100
     * @tc.name int8ArrayIndexSetPart01Test031
     * @tc.desc Verify $_set(0, 1.9) truncates to same value as $_set(0, byte 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test031() {
    Int8Array arr1 = new Int8Array(4);
    double n = 1.9;
    arr1.set(0, n);
    Int8Array arr2 = new Int8Array(4);
    int v = 1;
    arr2.set(0, v);
    assertEqual(arr2.get(0).intValue(), arr1.get(0).intValue());
    }

    /**
     * Verify at(0) returns -128 after $_set(0, 128) wraps
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_3200
     * @tc.name int8ArrayIndexSetPart01Test032
     * @tc.desc Verify at(0) returns -128 after $_set(0, 128) wraps
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test032() {
    Int8Array arr = new Int8Array(4);
    int n = 128;
    arr.set(0, n);
    assertEqualInt(-128, arr.at(0));
    }

    /**
     * Verify at(0) returns 1 after $_set(0, 1.9) truncates
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_3300
     * @tc.name int8ArrayIndexSetPart01Test033
     * @tc.desc Verify at(0) returns 1 after $_set(0, 1.9) truncates
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test033() {
    Int8Array arr = new Int8Array(4);
    double n = 1.9;
    arr.set(0, n);
    assertEqualInt(1, arr.at(0));
    }

    /**
     * Verify $_set then $_get expects 1 and 2 after $_set(0, 1.9) and $_set(0, 2), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_3400
     * @tc.name int8ArrayIndexSetPart01Test034
     * @tc.desc Verify $_set then $_get expects 1 and 2 after $_set(0, 1.9) and $_set(0, 2), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test034() {
    Int8Array arr1 = new Int8Array(4);
    double n = 1.9;
    arr1.set(0, n);
    Int8Array arr2 = new Int8Array(4);
    int v = 2;
    arr2.set(0, v);
    assertEqualInt(1, arr1.get(0));
    assertEqualInt(2, arr2.get(0));
    }

    /**
     * Verify $_set(2, 128) on new Int8Array(new int[] {-128, -1, 1, INT8_MAX}) wraps to -128, preserves others
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_3500
     * @tc.name int8ArrayIndexSetPart01Test035
     * @tc.desc Verify $_set(2, 128) on new Int8Array(new int[] {-128, -1, 1, INT8_MAX}) wraps to -128, preserves others
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test035() {
    Int8Array arr = new Int8Array(new int[] {-128, -1, 1, INT8_MAX});
    int n = 128;
    arr.set(2, n);
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-1, arr.get(1));
    assertEqualInt(-128, arr.get(2));
    assertEqualInt(INT8_MAX, arr.get(3));
    }

    /**
     * Verify $_set then $_get expects INT8_MAX, after $_set(0, 128), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_3600
     * @tc.name int8ArrayIndexSetPart01Test036
     * @tc.desc Verify $_set then $_get expects INT8_MAX, after $_set(0, 128), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test036() {
    Int8Array arr = new Int8Array(4);
    int n = 128;
    arr.set(0, n);
    int v = INT8_MAX;
    arr.set(0, v);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_set(2, 256) on new Int8Array(new int[] {-128, -1, 1, INT8_MAX}) wraps to 0, preserves others
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_3700
     * @tc.name int8ArrayIndexSetPart01Test037
     * @tc.desc Verify $_set(2, 256) on new Int8Array(new int[] {-128, -1, 1, INT8_MAX}) wraps to 0, preserves others
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test037() {
    Int8Array arr = new Int8Array(new int[] {-128, -1, 1, INT8_MAX});
    int n = 256;
    arr.set(2, n);
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-1, arr.get(1));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(INT8_MAX, arr.get(3));
    }

    /**
     * Verify $_set(0, 128) truncates to -128 and length remains 4 on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_3800
     * @tc.name int8ArrayIndexSetPart01Test038
     * @tc.desc Verify $_set(0, 128) truncates to -128 and length remains 4 on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test038() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 128);
    Integer r1 = arr.get(0);
    int e1 = -128;
    assertEqualInt(e1, r1);
    assertEqual(4, arr.length());
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-2, 1.9), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_3900
     * @tc.name int8ArrayIndexSetPart01Test039
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-2, 1.9), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test039() {
    Int8Array arr = new Int8Array(4);
    double n = 1.9;
    try {
    arr.set(-2, n);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(2, v) returns undefined (void return type)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_4000
     * @tc.name int8ArrayIndexSetPart01Test040
     * @tc.desc Verify $_set(2, v) returns undefined (void return type)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test040() {
    Int8Array arr = new Int8Array(4);
    int v = 50;
    Integer result = arr.set(2, v);
    assertNull(result);
    }

    /**
     * Verify $_set(2, n) returns undefined (void return type) with number argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_4100
     * @tc.name int8ArrayIndexSetPart01Test041
     * @tc.desc Verify $_set(2, n) returns undefined (void return type) with number argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test041() {
    Int8Array arr = new Int8Array(4);
    int n = 60;
    Integer result = arr.set(2, n);
    assertNull(result);
    }

    /**
     * Verify $_set(-5, v) throws RangeError, on new Int8Array(new int[] {-128, -1, 1, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_4200
     * @tc.name int8ArrayIndexSetPart01Test042
     * @tc.desc Verify $_set(-5, v) throws RangeError, on new Int8Array(new int[] {-128, -1, 1, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test042() {
    Int8Array arr = new Int8Array(new int[] {-128, -1, 1, INT8_MAX});
    int v = 50;
    try {
    arr.set(-5, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(-2147483648, v) throws RangeError, on new Int8Array(new int[] {-128, -1, 1, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_4300
     * @tc.name int8ArrayIndexSetPart01Test043
     * @tc.desc Verify $_set(-2147483648, v) throws RangeError, on new Int8Array(new int[] {-128, -1, 1, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test043() {
    Int8Array arr = new Int8Array(new int[] {-128, -1, 1, INT8_MAX});
    int v = 50;
    try {
    arr.set(Integer.MIN_VALUE, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(-5, n) throws RangeError, on new Int8Array(new int[] {-128, -1, 1, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_4400
     * @tc.name int8ArrayIndexSetPart01Test044
     * @tc.desc Verify $_set(-5, n) throws RangeError, on new Int8Array(new int[] {-128, -1, 1, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test044() {
    Int8Array arr = new Int8Array(new int[] {-128, -1, 1, INT8_MAX});
    int n = 128;
    try {
    arr.set(-5, n);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(0, v), on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_4500
     * @tc.name int8ArrayIndexSetPart01Test045
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(0, v), on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test045() {
    Int8Array arr = new Int8Array(0);
    int v = 50;
    try {
    arr.set(0, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(-1, v) throws RangeError, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_4600
     * @tc.name int8ArrayIndexSetPart01Test046
     * @tc.desc Verify $_set(-1, v) throws RangeError, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test046() {
    Int8Array arr = new Int8Array(0);
    int v = 50;
    try {
    arr.set(-1, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(2147483647, n), on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_4700
     * @tc.name int8ArrayIndexSetPart01Test047
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(2147483647, n), on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test047() {
    Int8Array arr = new Int8Array(0);
    int n = 128;
    try {
    arr.set(2147483647, n);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-2, n), on new Int8Array(new int[] {99})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_4800
     * @tc.name int8ArrayIndexSetPart01Test048
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-2, n), on new Int8Array(new int[] {99})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test048() {
    Int8Array arr = new Int8Array(new int[] {99});
    int n = 128;
    try {
    arr.set(-2, n);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(-1, INT8_MAX) on new Int8Array(4) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_4900
     * @tc.name int8ArrayIndexSetPart01Test049
     * @tc.desc Verify $_set(-1, INT8_MAX) on new Int8Array(4) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test049() {
    Int8Array arr = new Int8Array(4);
    try {
    arr.set(-1, INT8_MAX);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(-4, -128) on new Int8Array(4) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_5000
     * @tc.name int8ArrayIndexSetPart01Test050
     * @tc.desc Verify $_set(-4, -128) on new Int8Array(4) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test050() {
    Int8Array arr = new Int8Array(4);
    try {
    arr.set(-4, -128);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set then $_get expects INT8_MAX, after $_set(0, 50), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_5100
     * @tc.name int8ArrayIndexSetPart01Test051
     * @tc.desc Verify $_set then $_get expects INT8_MAX, after $_set(0, 50), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test051() {
    Int8Array arr = new Int8Array(4);
    int a = 50;
    arr.set(0, a);
    int b = INT8_MAX;
    arr.set(0, b);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects -128, with $_get(0), after $_set(0, 50), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_5200
     * @tc.name int8ArrayIndexSetPart01Test052
     * @tc.desc Verify $_set then $_get expects -128, with $_get(0), after $_set(0, 50), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test052() {
    Int8Array arr = new Int8Array(4);
    int v = 50;
    arr.set(0, v);
    int n = 128;
    arr.set(0, n);
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_5300
     * @tc.name int8ArrayIndexSetPart01Test053
     * @tc.desc Verify $_set then $_get expects 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test053() {
    Int8Array arr = new Int8Array(4);
    int n = 128;
    arr.set(0, n);
    int v = 100;
    arr.set(0, v);
    assertEqualInt(100, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects -128, with $_get(0), $_get(1), $_get(2), $_get(3), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_5400
     * @tc.name int8ArrayIndexSetPart01Test054
     * @tc.desc Verify $_set then $_get expects -128, with $_get(0), $_get(1), $_get(2), $_get(3), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test054() {
    Int8Array arr = new Int8Array(4);
    int a = -128;
    int b = -1;
    int c = 1;
    int d = INT8_MAX;
    arr.set(0, a);
    arr.set(1, b);
    arr.set(2, c);
    arr.set(3, d);
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-1, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(INT8_MAX, arr.get(3));
    }

    /**
     * Verify $_set then $_get expects INT8_MAX, after $_set(0, -1), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_5500
     * @tc.name int8ArrayIndexSetPart01Test055
     * @tc.desc Verify $_set then $_get expects INT8_MAX, after $_set(0, -1), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test055() {
    Int8Array arr = new Int8Array(4);
    int a = -1;
    int b = 1;
    int c = INT8_MAX;
    arr.set(0, a);
    arr.set(1, b);
    arr.set(0, c);
    assertEqualInt(INT8_MAX, arr.get(0));
    assertEqualInt(1, arr.get(1));
    }

    /**
     * Verify at(2) returns 50 after $_set(2, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_5600
     * @tc.name int8ArrayIndexSetPart01Test056
     * @tc.desc Verify at(2) returns 50 after $_set(2, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test056() {
    Int8Array arr = new Int8Array(4);
    int v = 50;
    arr.set(2, v);
    assertEqualInt(50, arr.at(2));
    }

    /**
     * Verify at(0) returns 60 after $_set(0, 60)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_5700
     * @tc.name int8ArrayIndexSetPart01Test057
     * @tc.desc Verify at(0) returns 60 after $_set(0, 60)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test057() {
    Int8Array arr = new Int8Array(4);
    int n = 60;
    arr.set(0, n);
    assertEqualInt(60, arr.at(0));
    }

    /**
     * Verify $_set then $_get expects INT8_MAX with extra $_set(1, -1), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_5800
     * @tc.name int8ArrayIndexSetPart01Test058
     * @tc.desc Verify $_set then $_get expects INT8_MAX with extra $_set(1, -1), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test058() {
    Int8Array arr = new Int8Array(4);
    int a = INT8_MAX;
    arr.set(0, a);
    int b = -1;
    arr.set(1, b);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_set(0, 50) writes 50 and length remains 4 on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_5900
     * @tc.name int8ArrayIndexSetPart01Test059
     * @tc.desc Verify $_set(0, 50) writes 50 and length remains 4 on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test059() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 50);
    Integer r1 = arr.get(0);
    int e1 = 50;
    assertEqualInt(e1, r1);
    assertEqual(4, arr.length());
    }

    /**
     * Verify $_set(0, 60) writes 60 and byteLength remains 4 on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_6000
     * @tc.name int8ArrayIndexSetPart01Test060
     * @tc.desc Verify $_set(0, 60) writes 60 and byteLength remains 4 on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test060() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 60);
    Integer r1 = arr.get(0);
    int e1 = 60;
    assertEqualInt(e1, r1);
    assertEqual(4, arr.byteLength());
    }

    /**
     * Verify $_set then $_get expects INT8_MAX, after $_set(0, -128), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_6100
     * @tc.name int8ArrayIndexSetPart01Test061
     * @tc.desc Verify $_set then $_get expects INT8_MAX, after $_set(0, -128), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test061() {
    Int8Array arr = new Int8Array(4);
    int a = -128;
    arr.set(0, a);
    int b = INT8_MAX;
    arr.set(0, b);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-1, -128), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_6200
     * @tc.name int8ArrayIndexSetPart01Test062
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-1, -128), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test062() {
    Int8Array arr = new Int8Array(4);
    int n = -128;
    try {
    arr.set(-1, n);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(4, v) throws RangeError, on new Int8Array(new int[] {-128, -1, 1, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_6300
     * @tc.name int8ArrayIndexSetPart01Test063
     * @tc.desc Verify $_set(4, v) throws RangeError, on new Int8Array(new int[] {-128, -1, 1, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test063() {
    Int8Array arr = new Int8Array(new int[] {-128, -1, 1, INT8_MAX});
    int v = 50;
    try {
    arr.set(4, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-1, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(INT8_MAX, arr.get(3));
    }

    /**
     * Verify $_set(5, v) throws RangeError, on new Int8Array(new int[] {-128, -1, 1, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_6400
     * @tc.name int8ArrayIndexSetPart01Test064
     * @tc.desc Verify $_set(5, v) throws RangeError, on new Int8Array(new int[] {-128, -1, 1, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test064() {
    Int8Array arr = new Int8Array(new int[] {-128, -1, 1, INT8_MAX});
    int v = 50;
    try {
    arr.set(5, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-1, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(INT8_MAX, arr.get(3));
    }

    /**
     * Verify $_set(2147483647, v) throws RangeError, on new Int8Array(new int[] {-128, -1, 1, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_6500
     * @tc.name int8ArrayIndexSetPart01Test065
     * @tc.desc Verify $_set(2147483647, v) throws RangeError, on new Int8Array(new int[] {-128, -1, 1, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test065() {
    Int8Array arr = new Int8Array(new int[] {-128, -1, 1, INT8_MAX});
    int v = 50;
    try {
    arr.set(2147483647, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-1, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(INT8_MAX, arr.get(3));
    }

    /**
     * Verify $_set(4, n) throws RangeError, on new Int8Array(new int[] {-128, -1, 1, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_6600
     * @tc.name int8ArrayIndexSetPart01Test066
     * @tc.desc Verify $_set(4, n) throws RangeError, on new Int8Array(new int[] {-128, -1, 1, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test066() {
    Int8Array arr = new Int8Array(new int[] {-128, -1, 1, INT8_MAX});
    int n = 128;
    try {
    arr.set(4, n);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-1, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(INT8_MAX, arr.get(3));
    }

    /**
     * Verify $_set expects RangeError throws exception, on new Int8Array(new int[] {-128, -1, 1, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_6700
     * @tc.name int8ArrayIndexSetPart01Test067
     * @tc.desc Verify $_set expects RangeError throws exception, on new Int8Array(new int[] {-128, -1, 1, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test067() {
    Int8Array arr = new Int8Array(new int[] {-128, -1, 1, INT8_MAX});
    int n = 128;
    try {
    arr.set(2147483647, n);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-1, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(INT8_MAX, arr.get(3));
    }

    /**
     * Verify $_set expects RangeError throws exception, on new Int8Array(new int[] {99})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_6800
     * @tc.name int8ArrayIndexSetPart01Test068
     * @tc.desc Verify $_set expects RangeError throws exception, on new Int8Array(new int[] {99})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test068() {
    Int8Array arr = new Int8Array(new int[] {99});
    int n = 128;
    try {
    arr.set(1, n);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(99, arr.get(0));
    }

    /**
     * Verify $_set length 4, throws RangeError for out-of-bounds index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_6900
     * @tc.name int8ArrayIndexSetPart01Test069
     * @tc.desc Verify $_set length 4, throws RangeError for out-of-bounds index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test069() {
    Int8Array arr = new Int8Array(4);
    int v = 50;
    try {
    arr.set(4, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(4, arr.length());
    }

    /**
     * Verify $_set byteLength 4, throws RangeError for out-of-bounds index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART01_TEST_7000
     * @tc.name int8ArrayIndexSetPart01Test070
     * @tc.desc Verify $_set byteLength 4, throws RangeError for out-of-bounds index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart01Test070() {
    Int8Array arr = new Int8Array(4);
    int v = 50;
    try {
    arr.set(4, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(4, arr.byteLength());
    }
}
