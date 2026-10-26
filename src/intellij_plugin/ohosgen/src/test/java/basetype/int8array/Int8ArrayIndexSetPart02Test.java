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
import basetype.common.RangeError;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayIndexSetPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIndexSetPart02Test extends BasTest {
    private static final int INT8_MAX = 127;

    /**
     * Verify $_set with byte 10 leaves length 2, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_0100
     * @tc.name int8ArrayIndexSetPart02Test001
     * @tc.desc Verify $_set with byte 10 leaves length 2, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test001() {
    Int8Array arr = new Int8Array(2);
    int v = 10;
    arr.set(0, v);
    Integer r1 = arr.get(0);
    int e1 = 10;
    assertEqualInt(e1, r1);
    assertEqual(2, arr.length());
    }

    /**
     * Verify $_set with number 10 leaves length 2, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_0200
     * @tc.name int8ArrayIndexSetPart02Test002
     * @tc.desc Verify $_set with number 10 leaves length 2, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test002() {
    Int8Array arr = new Int8Array(2);
    int v = 10;
    arr.set(0, v);
    Integer r1 = arr.get(0);
    int e1 = 10;
    assertEqualInt(e1, r1);
    assertEqual(2, arr.length());
    }

    /**
     * Verify $_set writes 1, 2, 3 and length remains 3 on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_0400
     * @tc.name int8ArrayIndexSetPart02Test004
     * @tc.desc Verify $_set writes 1, 2, 3 and length remains 3 on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test004() {
    Int8Array arr = new Int8Array(3);
    int firstVal = 1;
    int secondVal = 2;
    int thirdVal = 3;
    arr.set(0, firstVal);
    arr.set(1, secondVal);
    arr.set(2, thirdVal);
    Integer r1 = arr.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(1);
    int e2 = 2;
    assertEqualInt(e2, r2);
    Integer r3 = arr.get(2);
    int e3 = 3;
    assertEqualInt(e3, r3);
    assertEqual(3, arr.length());
    }

    /**
     * Verify $_set then $_get expects INT8_MAX with byte value, after $_set(0, INT8_MAX), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_0500
     * @tc.name int8ArrayIndexSetPart02Test005
     * @tc.desc Verify $_set then $_get expects INT8_MAX with byte value, after $_set(0, INT8_MAX), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test005() {
    Int8Array arr = new Int8Array(1);
    int v = INT8_MAX;
    arr.set(0, v);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects INT8_MAX with number value, after $_set(0, INT8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_0600
     * @tc.name int8ArrayIndexSetPart02Test006
     * @tc.desc Verify $_set then $_get expects INT8_MAX with number value, after $_set(0, INT8
     * _MAX), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test006() {
    Int8Array arr = new Int8Array(1);
    int v = INT8_MAX;
    arr.set(0, v);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects INT8_MAX, after $_set(0, -129), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_0700
     * @tc.name int8ArrayIndexSetPart02Test007
     * @tc.desc Verify $_set then $_get expects INT8_MAX, after $_set(0, -129), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test007() {
    Int8Array arr = new Int8Array(1);
    int v = -129;
    arr.set(0, v);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects -1, after $_set(0, -1.9), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_0900
     * @tc.name int8ArrayIndexSetPart02Test009
     * @tc.desc Verify $_set then $_get expects -1, after $_set(0, -1.9), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test009() {
    Int8Array arr = new Int8Array(1);
    double v = -1.9;
    arr.set(0, v);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 0, with $_get(1), on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_1000
     * @tc.name int8ArrayIndexSetPart02Test010
     * @tc.desc Verify $_set then $_get expects 0, with $_get(1), on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test010() {
    Int8Array arr = new Int8Array(2);
    int v = 50;
    arr.set(0, v);
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify $_set then $_get expects 99
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_1100
     * @tc.name int8ArrayIndexSetPart02Test011
     * @tc.desc Verify $_set then $_get expects 99
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test011() {
    Int8Array arr = new Int8Array(new int[] {10, 20});
    int v = 99;
    arr.set(0, v);
    assertEqualInt(99, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_1200
     * @tc.name int8ArrayIndexSetPart02Test012
     * @tc.desc Verify $_set then $_get expects 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test012() {
    Int8Array arr = new Int8Array(1);
    int v = 100;
    arr.set(0, v);
    assertEqualInt(100, arr.get(0));
    }

    /**
     * Verify at(0) returns 64 after $_set(0, 64)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_1300
     * @tc.name int8ArrayIndexSetPart02Test013
     * @tc.desc Verify at(0) returns 64 after $_set(0, 64)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test013() {
    Int8Array arr = new Int8Array(1);
    int v = 64;
    arr.set(0, v);
    assertEqualInt(64, arr.at(0));
    }

    /**
     * Verify at(-1) returns -50 after $_set(2, -50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_1400
     * @tc.name int8ArrayIndexSetPart02Test014
     * @tc.desc Verify at(-1) returns -50 after $_set(2, -50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test014() {
    Int8Array arr = new Int8Array(3);
    int v = -50;
    arr.set(2, v);
    assertEqualInt(-50, arr.at(-1));
    }

    /**
     * Verify $_set then $_get expects 42
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_1500
     * @tc.name int8ArrayIndexSetPart02Test015
     * @tc.desc Verify $_set then $_get expects 42
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test015() {
    Int8Array arr = new Int8Array(1);
    int v = 42;
    arr.set(0, v);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 88
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_1600
     * @tc.name int8ArrayIndexSetPart02Test016
     * @tc.desc Verify $_set then $_get expects 88
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test016() {
    Int8Array arr = new Int8Array(4);
    int v = 88;
    arr.set(3, v);
    assertEqualInt(88, arr.get(3));
    }

    /**
     * Verify $_set(1, 7) writes 7 and length remains 3 on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_1700
     * @tc.name int8ArrayIndexSetPart02Test017
     * @tc.desc Verify $_set(1, 7) writes 7 and length remains 3 on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test017() {
    Int8Array arr = new Int8Array(3);
    int v = 7;
    arr.set(1, v);
    Integer r1 = arr.get(1);
    int e1 = 7;
    assertEqualInt(e1, r1);
    assertEqual(3, arr.length());
    }

    /**
     * Verify $_set(1, 7) writes 7 and byteLength remains 3 on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_1800
     * @tc.name int8ArrayIndexSetPart02Test018
     * @tc.desc Verify $_set(1, 7) writes 7 and byteLength remains 3 on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test018() {
    Int8Array arr = new Int8Array(3);
    int v = 7;
    arr.set(1, v);
    Integer r1 = arr.get(1);
    int e1 = 7;
    assertEqualInt(e1, r1);
    assertEqual(3, arr.byteLength());
    }

    /**
     * Verify $_set(0, 7) writes 7 on new Int8Array(new ArrayBuffer(4))
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_1900
     * @tc.name int8ArrayIndexSetPart02Test019
     * @tc.desc Verify $_set(0, 7) writes 7 on new Int8Array(new ArrayBuffer(4))
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test019() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf);
    int v = 7;
    arr.set(0, v);
    Integer r1 = arr.get(0);
    int e1 = 7;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_set(0, 1) and $_set(1, 2) write values and length remains 2 on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_2000
     * @tc.name int8ArrayIndexSetPart02Test020
     * @tc.desc Verify $_set(0, 1) and $_set(1, 2) write values and length remains 2 on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test020() {
    Int8Array arr = new Int8Array(2);
    int firstVal = 1;
    int secondVal = 2;
    arr.set(0, firstVal);
    arr.set(1, secondVal);
    Integer r1 = arr.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(1);
    int e2 = 2;
    assertEqualInt(e2, r2);
    assertEqual(2, arr.length());
    }

    /**
     * Verify $_set(0, 10) writes 10 on new Int8Array(buf) from ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_2100
     * @tc.name int8ArrayIndexSetPart02Test021
     * @tc.desc Verify $_set(0, 10) writes 10 on new Int8Array(buf) from ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test021() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array arr = new Int8Array(buf);
    int v = 10;
    arr.set(0, v);
    Integer r1 = arr.get(0);
    int e1 = 10;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_set then $_get expects 5, with $_get(0), on new Int8Array(new int[] {5, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_2200
     * @tc.name int8ArrayIndexSetPart02Test022
     * @tc.desc Verify $_set then $_get expects 5, with $_get(0), on new Int8Array(new int[] {5, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test022() {
    Int8Array arr = new Int8Array(new int[] {5, 5});
    int v = 99;
    arr.set(1, v);
    assertEqualInt(5, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 5, with $_get(1), on new Int8Array(new int[] {5, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_2300
     * @tc.name int8ArrayIndexSetPart02Test023
     * @tc.desc Verify $_set then $_get expects 5, with $_get(1), on new Int8Array(new int[] {5, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test023() {
    Int8Array arr = new Int8Array(new int[] {5, 5});
    int v = 99;
    arr.set(0, v);
    assertEqualInt(5, arr.get(1));
    }

    /**
     * Verify $_set then $_get expects 1, after $_set(1, 99), on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_2400
     * @tc.name int8ArrayIndexSetPart02Test024
     * @tc.desc Verify $_set then $_get expects 1, after $_set(1, 99), on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test024() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int v = 99;
    arr.set(1, v);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_2500
     * @tc.name int8ArrayIndexSetPart02Test025
     * @tc.desc Verify $_set then $_get expects 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test025() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int v = 99;
    arr.set(1, v);
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify $_set then $_get expects 1, after $_set(2, 99), on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_2600
     * @tc.name int8ArrayIndexSetPart02Test026
     * @tc.desc Verify $_set then $_get expects 1, after $_set(2, 99), on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test026() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int v = 99;
    arr.set(2, v);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 0, with $_get(0), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_2700
     * @tc.name int8ArrayIndexSetPart02Test027
     * @tc.desc Verify $_set then $_get expects 0, with $_get(0), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test027() {
    Int8Array arr = new Int8Array(4);
    int v = 77;
    arr.set(2, v);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 0, with $_get(3), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_2800
     * @tc.name int8ArrayIndexSetPart02Test028
     * @tc.desc Verify $_set then $_get expects 0, with $_get(3), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test028() {
    Int8Array arr = new Int8Array(4);
    int v = 77;
    arr.set(2, v);
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify indexOf(99) returns 0 after $_set(0, 99)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_2900
     * @tc.name int8ArrayIndexSetPart02Test029
     * @tc.desc Verify indexOf(99) returns 0 after $_set(0, 99)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test029() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int v = 99;
    arr.set(0, v);
    assertEqual(0, arr.indexOf(99));
    }

    /**
     * Verify includes, with $_set(1, v), on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_3000
     * @tc.name int8ArrayIndexSetPart02Test030
     * @tc.desc Verify includes, with $_set(1, v), on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test030() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int v = 99;
    arr.set(1, v);
    assertTrue(arr.includes(99));
    }

    /**
     * Verify toString returns "9,2" after $_set(0, 9) on Int8Array([1, 2])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_3100
     * @tc.name int8ArrayIndexSetPart02Test031
     * @tc.desc Verify toString returns "9,2" after $_set(0, 9) on Int8Array([1, 2])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test031() {
    Int8Array arr = new Int8Array(new int[] {1, 2});
    int v = 9;
    arr.set(0, v);
    assertEqual("9,2", String.valueOf(arr));
    }

    /**
     * Verify lastIndexOf(1) returns 0 after $_set(2, 9)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_3200
     * @tc.name int8ArrayIndexSetPart02Test032
     * @tc.desc Verify lastIndexOf(1) returns 0 after $_set(2, 9)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test032() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 1});
    int v = 9;
    arr.set(2, v);
    assertEqual(0, arr.lastIndexOf(1));
    }

    /**
     * Verify join('-') returns 9-2 after $_set(0, 9)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_3300
     * @tc.name int8ArrayIndexSetPart02Test033
     * @tc.desc Verify join('-') returns 9-2 after $_set(0, 9)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test033() {
    Int8Array arr = new Int8Array(new int[] {1, 2});
    int v = 9;
    arr.set(0, v);
    assertEqual("9-2", arr.join("-"));
    }

    /**
     * Verify $_set then $_get expects 100 from ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_3400
     * @tc.name int8ArrayIndexSetPart02Test034
     * @tc.desc Verify $_set then $_get expects 100 from ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test034() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array arr1 = new Int8Array(buf);
    Int8Array arr2 = new Int8Array(buf);
    int v = 100;
    arr1.set(0, v);
    assertEqualInt(100, arr2.get(0));
    }

    /**
     * Verify $_set(0, 50) writes 50 on offset view new Int8Array(buf, 1, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_3600
     * @tc.name int8ArrayIndexSetPart02Test036
     * @tc.desc Verify $_set(0, 50) writes 50 on offset view new Int8Array(buf, 1, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test036() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf, 1, 2);
    int v = 50;
    arr.set(0, v);
    Integer r1 = arr.get(0);
    int e1 = 50;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_set(0, 50) writes 50 on new Int8Array(buf, 0, 2) from ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_3700
     * @tc.name int8ArrayIndexSetPart02Test037
     * @tc.desc Verify $_set(0, 50) writes 50 on new Int8Array(buf, 0, 2) from ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test037() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf, 0, 2);
    int v = 50;
    arr.set(0, v);
    Integer r1 = arr.get(0);
    int e1 = 50;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify subarray(1, 3) shares buffer, $_set on subarray reflected in original expects 99
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_3800
     * @tc.name int8ArrayIndexSetPart02Test038
     * @tc.desc Verify subarray(1, 3) shares buffer, $_set on subarray reflected in original expects 99
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test038() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array view = arr.subarray(1, 3);
    int v = 99;
    view.set(0, v);
    assertEqualInt(99, arr.get(1));
    }

    /**
     * Verify $_get(0) on subarray(1, 3) returns 88 after $_set(1, 88) on base
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_3900
     * @tc.name int8ArrayIndexSetPart02Test039
     * @tc.desc Verify $_get(0) on subarray(1, 3) returns 88 after $_set(1, 88) on base
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test039() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array view = arr.subarray(1, 3);
    int v = 88;
    arr.set(1, v);
    assertEqualInt(88, view.get(0));
    }

    /**
     * Verify slice(0, 3) creates independent copy and $_set on copy does not affect original expects 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_4000
     * @tc.name int8ArrayIndexSetPart02Test040
     * @tc.desc Verify slice(0, 3) creates independent copy and $_set on copy does not affect original expects 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test040() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    Int8Array copy = arr.slice(0, 3);
    int v = 99;
    arr.set(0, v);
    assertEqualInt(1, copy.get(0));
    }

    /**
     * Verify $_set on offset view does not affect adjacent offset view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_4100
     * @tc.name int8ArrayIndexSetPart02Test041
     * @tc.desc Verify $_set on offset view does not affect adjacent offset view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test041() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array arr1 = new Int8Array(buf, 0, 1);
    Int8Array arr2 = new Int8Array(buf, 1, 1);
    int v = 77;
    arr1.set(0, v);
    assertEqualInt(0, arr2.get(0));
    }

    /**
     * Verify $_set(0, 5) then $_get(0) returns 5 on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_4200
     * @tc.name int8ArrayIndexSetPart02Test042
     * @tc.desc Verify $_set(0, 5) then $_get(0) returns 5 on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test042() {
    Int8Array arr = new Int8Array(3);
    int v = 5;
    arr.set(0, v);
    Integer r1 = arr.get(0);
    int e1 = 5;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_set then $_get expects -128 with byte value, after $_set(0, -128), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_4300
     * @tc.name int8ArrayIndexSetPart02Test043
     * @tc.desc Verify $_set then $_get expects -128 with byte value, after $_set(0, -128), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test043() {
    Int8Array arr = new Int8Array(1);
    int v = -128;
    arr.set(0, v);
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects -128, after $_set(0, 128), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_4400
     * @tc.name int8ArrayIndexSetPart02Test044
     * @tc.desc Verify $_set then $_get expects -128, after $_set(0, 128), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test044() {
    Int8Array arr = new Int8Array(1);
    int v = 128;
    arr.set(0, v);
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects -1, after $_set(0, 255), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_4500
     * @tc.name int8ArrayIndexSetPart02Test045
     * @tc.desc Verify $_set then $_get expects -1, after $_set(0, 255), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test045() {
    Int8Array arr = new Int8Array(1);
    int v = 255;
    arr.set(0, v);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 0, with $_get(0), after $_set(0, Number.NaN), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_4600
     * @tc.name int8ArrayIndexSetPart02Test046
     * @tc.desc Verify $_set then $_get expects 0, with $_get(0), after $_set(0, Number.NaN), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test046() {
    Int8Array arr = new Int8Array(1);
    double v = Double.NaN;
    arr.set(0, v);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 1, on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_4700
     * @tc.name int8ArrayIndexSetPart02Test047
     * @tc.desc Verify $_set then $_get expects 1, on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test047() {
    Int8Array arr = new Int8Array(1);
    double v = 1.9;
    arr.set(0, v);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 0, with $_get(0), after $_set(0, -0.0), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_4800
     * @tc.name int8ArrayIndexSetPart02Test048
     * @tc.desc Verify $_set then $_get expects 0, with $_get(0), after $_set(0, -0.0), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test048() {
    Int8Array arr = new Int8Array(1);
    double v = -0.0;
    arr.set(0, v);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 0, with $_get(0), after $_set(0, 256), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_4900
     * @tc.name int8ArrayIndexSetPart02Test049
     * @tc.desc Verify $_set then $_get expects 0, with $_get(0), after $_set(0, 256), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test049() {
    Int8Array arr = new Int8Array(1);
    int v = 256;
    arr.set(0, v);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects -128 with number value, after $_set(0, -128), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_5000
     * @tc.name int8ArrayIndexSetPart02Test050
     * @tc.desc Verify $_set then $_get expects -128 with number value, after $_set(0, -128), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test050() {
    Int8Array arr = new Int8Array(1);
    int v = -128;
    arr.set(0, v);
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify toString returns "127,0" after $_set(0, INT8_MAX) on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_5100
     * @tc.name int8ArrayIndexSetPart02Test051
     * @tc.desc Verify toString returns "127,0" after $_set(0, INT8_MAX) on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test051() {
    Int8Array arr = new Int8Array(2);
    int v = INT8_MAX;
    arr.set(0, v);
    assertEqual("127,0", String.valueOf(arr));
    }

    /**
     * Verify indexOf expects 0, after $_set(0, 255), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_5200
     * @tc.name int8ArrayIndexSetPart02Test052
     * @tc.desc Verify indexOf expects 0, after $_set(0, 255), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test052() {
    Int8Array arr = new Int8Array(1);
    int v = 255;
    arr.set(0, v);
    assertEqual(0, arr.indexOf(-1));
    }

    /**
     * Verify indexOf expects 0, after $_set(0, Number.NaN), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_5300
     * @tc.name int8ArrayIndexSetPart02Test053
     * @tc.desc Verify indexOf expects 0, after $_set(0, Number.NaN), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test053() {
    Int8Array arr = new Int8Array(1);
    double v = Double.NaN;
    arr.set(0, v);
    assertEqual(0, arr.indexOf(0));
    }

    /**
     * Verify includes, with $_set(0, v), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_5400
     * @tc.name int8ArrayIndexSetPart02Test054
     * @tc.desc Verify includes, with $_set(0, v), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test054() {
    Int8Array arr = new Int8Array(1);
    int v = 128;
    arr.set(0, v);
    assertTrue(arr.includes(-128));
    }

    /**
     * Verify $_set(-1, v) throws RangeError for negative out-of-bounds index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_5500
     * @tc.name int8ArrayIndexSetPart02Test055
     * @tc.desc Verify $_set(-1, v) throws RangeError for negative out-of-bounds index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test055() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int v = 99;
    try {
    arr.set(-1, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-3, v), on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_5600
     * @tc.name int8ArrayIndexSetPart02Test056
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-3, v), on new Int
     * 8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test056() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int v = 77;
    try {
    arr.set(-3, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(-4, v) throws RangeError for index beyond array lower bound
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_5700
     * @tc.name int8ArrayIndexSetPart02Test057
     * @tc.desc Verify $_set(-4, v) throws RangeError for index beyond array lower bound
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test057() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int v = 99;
    try {
    arr.set(-4, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-3, v), on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_5800
     * @tc.name int8ArrayIndexSetPart02Test058
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-3, v), on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test058() {
    Int8Array arr = new Int8Array(2);
    int v = 10;
    try {
    arr.set(-3, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byte $_set(index, value: byte) and $_get returns 64 on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_5900
     * @tc.name int8ArrayIndexSetPart02Test059
     * @tc.desc Verify byte $_set(index, value: byte) and $_get returns 64 on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test059() {
    Int8Array arr = new Int8Array(1);
    int v = 64;
    arr.set(0, v);
    assertEqualInt(64, arr.get(0));
    }

    /**
     * Verify number $_set(index, value: number) and $_get returns 64 on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_6000
     * @tc.name int8ArrayIndexSetPart02Test060
     * @tc.desc Verify number $_set(index, value: number) and $_get returns 64 on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test060() {
    Int8Array arr = new Int8Array(1);
    int v = 64;
    arr.set(0, v);
    assertEqualInt(64, arr.get(0));
    }

    /**
     * Verify $_get expects arr1.$_get(0) equals arr2.$_get(0) after $_set on separate Int8Array(1) arrays
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_6100
     * @tc.name int8ArrayIndexSetPart02Test061
     * @tc.desc Verify $_get expects arr1.$_get(0) equals arr2.$_get(0) after $_set on separate Int8Array(1) arrays
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test061() {
    Int8Array arr1 = new Int8Array(1);
    Int8Array arr2 = new Int8Array(1);
    int ve = 50;
    int vn = 50;
    arr1.set(0, ve);
    arr2.set(0, vn);
    assertEqual(arr2.get(0).intValue(), arr1.get(0).intValue());
    }

    /**
     * Verify $_set then $_get expects 60
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_6200
     * @tc.name int8ArrayIndexSetPart02Test062
     * @tc.desc Verify $_set then $_get expects 60
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test062() {
    Int8Array arr = new Int8Array(1);
    int ve = 50;
    int vn = 60;
    arr.set(0, ve);
    arr.set(0, vn);
    assertEqualInt(60, arr.get(0));
    }

    /**
     * Verify $_set(0, vn) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_6300
     * @tc.name int8ArrayIndexSetPart02Test063
     * @tc.desc Verify $_set(0, vn) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test063() {
    Int8Array arr = new Int8Array(1);
    int vn = 60;
    int ve = 50;
    arr.set(0, vn);
    arr.set(0, ve);
    assertEqualInt(50, arr.get(0));
    }

    /**
     * Verify $_set(index beyond length) throws RangeError and array state unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_6400
     * @tc.name int8ArrayIndexSetPart02Test064
     * @tc.desc Verify $_set(index beyond length) throws RangeError and array state unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test064() {
    Int8Array arr = new Int8Array(2);
    int v = 10;
    try {
    arr.set(10, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(2, arr.length());
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(3, v), on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_6500
     * @tc.name int8ArrayIndexSetPart02Test065
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(3, v), on new Int8
     * Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test065() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int v = 99;
    try {
    arr.set(3, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(3, arr.length());
    }

    /**
     * Verify $_set(2147483647, v) throws RangeError for far out-of-bounds index and o
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_6600
     * @tc.name int8ArrayIndexSetPart02Test066
     * @tc.desc Verify $_set(2147483647, v) throws RangeError for far out-of-bounds index and original array elements
     * remain unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test066() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int v = 99;
    try {
    arr.set(2147483647, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 0, with $_get(0), after $_set(0, Number.POSITIV
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_6700
     * @tc.name int8ArrayIndexSetPart02Test067
     * @tc.desc Verify $_set then $_get expects 0, with $_get(0), after $_set(0, Number.POSITIV
     * E_INFINITY), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test067() {
    Int8Array arr = new Int8Array(1);
    double v = Double.POSITIVE_INFINITY;
    arr.set(0, v);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 0, with $_get(0), after $_set(0, Number.NEGATIV
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_6800
     * @tc.name int8ArrayIndexSetPart02Test068
     * @tc.desc Verify $_set then $_get expects 0, with $_get(0), after $_set(0, Number.NEGATIV
     * E_INFINITY), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart02Test068() {
    Int8Array arr = new Int8Array(1);
    double v = Double.NEGATIVE_INFINITY;
    arr.set(0, v);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 0, with $_get(0), after $_set(0, Number.MAX_VALUE), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART02_TEST_6900
     * @tc.name int8ArrayIndexSetPart02Test069
     * @tc.desc Verify $_set then $_get expects 0, with $_get(0), after $_set(0, Number.MAX_VALUE), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
