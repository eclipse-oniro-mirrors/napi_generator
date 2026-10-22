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
 * Int8ArrayIndexSetPart04Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIndexSetPart04Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify $_set(1, 200) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_0100
     * @tc.name int8ArrayIndexSetPart04Test001
     * @tc.desc Verify $_set(1, 200) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test001() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(1, 200);
    Integer valueAt1 = arr.get(1);
    int expected1 = -56;
    assertEqualInt(expected1, valueAt1);
    }

    /**
     * Verify $_set(0, 128) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_0200
     * @tc.name int8ArrayIndexSetPart04Test002
     * @tc.desc Verify $_set(0, 128) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test002() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, 128);
    Integer atResult0 = arr.at(0);
    int expected1 = INT8_MIN;
    assertEqualInt(expected1, atResult0);
    }

    /**
     * Verify $_set(0, -129) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_0300
     * @tc.name int8ArrayIndexSetPart04Test003
     * @tc.desc Verify $_set(0, -129) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test003() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, -129);
    String strResult = String.valueOf(arr);
    String expected1 = "127,0,0";
    assertEqual(expected1, strResult);
    }

    /**
     * Verify $_set(0, 255) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_0400
     * @tc.name int8ArrayIndexSetPart04Test004
     * @tc.desc Verify $_set(0, 255) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test004() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array arr = new Int8Array(buf);
    arr.set(0, 255);
    Int8Array reader = new Int8Array(buf);
    Integer valueAt0 = reader.get(0);
    int expected1 = -1;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify $_set(0, 256) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_0500
     * @tc.name int8ArrayIndexSetPart04Test005
     * @tc.desc Verify $_set(0, 256) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test005() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5});
    arr.set(0, 256);
    String joinResult = arr.join("|");
    String expected1 = "0|5|5";
    assertEqual(expected1, joinResult);
    }

    /**
     * Verify $_set(1, 0x81) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_0600
     * @tc.name int8ArrayIndexSetPart04Test006
     * @tc.desc Verify $_set(1, 0x81) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test006() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(1, 0x81);
    int indexOfResult = arr.indexOf(-INT8_MAX);
    int expected1 = 1;
    assertEqual(expected1, indexOfResult);
    }

    /**
     * Verify $_set(0, Number.NaN) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_0700
     * @tc.name int8ArrayIndexSetPart04Test007
     * @tc.desc Verify $_set(0, Number.NaN) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test007() {
    Int8Array arr = new Int8Array(new int[] {50, 60, 70});
    arr.set(0, Double.NaN);
    Integer valueAt0 = arr.get(0);
    int expected1 = 0;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify $_set(2, 1.9) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_0800
     * @tc.name int8ArrayIndexSetPart04Test008
     * @tc.desc Verify $_set(2, 1.9) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test008() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(2, 1.9);
    boolean includesResult = arr.includes(1);
    assertTrue(includesResult);
    }

    /**
     * Verify $_set(0, -1.9) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_0900
     * @tc.name int8ArrayIndexSetPart04Test009
     * @tc.desc Verify $_set(0, -1.9) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test009() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, -1.9);
    Integer found = arr.find((value, index, array) -> value == -1);
    assertEqualInt(-1, found);
    }

    /**
     * Verify $_set(1, -0.0) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_1000
     * @tc.name int8ArrayIndexSetPart04Test010
     * @tc.desc Verify $_set(1, -0.0) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test010() {
    Int8Array arr = new Int8Array(new int[] {50, 60, 70});
    arr.set(1, -0.0);
    int lastIndexOfResult = arr.lastIndexOf(0);
    int expected1 = 1;
    assertEqual(expected1, lastIndexOfResult);
    }

    /**
     * Verify $_set(0, INT8_MAX) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_1100
     * @tc.name int8ArrayIndexSetPart04Test011
     * @tc.desc Verify $_set(0, INT8_MAX) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test011() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, INT8_MAX);
    arr.set(1, INT8_MAX);
    arr.set(2, INT8_MAX);
    int indexOfResult = arr.indexOf(INT8_MAX);
    int expected1 = 0;
    assertEqual(expected1, indexOfResult);
    }

    /**
     * Verify $_set(0, -128) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_1200
     * @tc.name int8ArrayIndexSetPart04Test012
     * @tc.desc Verify $_set(0, -128) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test012() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, INT8_MIN);
    arr.reverse();
    Integer valueAt2 = arr.get(2);
    int expected1 = INT8_MIN;
    assertEqualInt(expected1, valueAt2);
    }

    /**
     * Verify $_set(0, 99) writes 99 and length remains 3 on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_1300
     * @tc.name int8ArrayIndexSetPart04Test013
     * @tc.desc Verify $_set(0, 99) writes 99 and length remains 3 on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test013() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, 99);
    Integer r1 = arr.get(0);
    int e1 = 99;
    assertEqualInt(e1, r1);
    int r2 = arr.length();
    int e2 = 3;
    assertEqual(e2, r2);
    }

    /**
     * Verify $_set(0, 99) writes 99 and byteLength remains 3 on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_1400
     * @tc.name int8ArrayIndexSetPart04Test014
     * @tc.desc Verify $_set(0, 99) writes 99 and byteLength remains 3 on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test014() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, 99);
    Integer r1 = arr.get(0);
    int e1 = 99;
    assertEqualInt(e1, r1);
    int r2 = arr.byteLength();
    int e2 = 3;
    assertEqual(e2, r2);
    }

    /**
     * Verify $_set(0, 99) writes 99 and leaves $_get(2) as 3 on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_1500
     * @tc.name int8ArrayIndexSetPart04Test015
     * @tc.desc Verify $_set(0, 99) writes 99 and leaves $_get(2) as 3 on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test015() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, 99);
    Integer r1 = arr.get(0);
    int e1 = 99;
    assertEqualInt(e1, r1);
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify $_set then $_get expects 1, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_1600
     * @tc.name int8ArrayIndexSetPart04Test016
     * @tc.desc Verify $_set then $_get expects 1, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test016() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(2, 99);
    Integer valueAt0 = arr.get(0);
    int expected1 = 1;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify $_set then $_get expects 50, with $_get(1), on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_1700
     * @tc.name int8ArrayIndexSetPart04Test017
     * @tc.desc Verify $_set then $_get expects 50, with $_get(1), on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test017() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(1, 50);
    Integer valueAt1 = arr.get(1);
    int expected1 = 50;
    assertEqualInt(expected1, valueAt1);
    }

    /**
     * Verify $_set(0, 10) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_1800
     * @tc.name int8ArrayIndexSetPart04Test018
     * @tc.desc Verify $_set(0, 10) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test018() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, 10);
    arr.set(0, 20);
    arr.set(0, 30);
    Integer valueAt0 = arr.get(0);
    int expected1 = 30;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify toString() returns 99, 2, 3 after $_set(0, 99)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_1900
     * @tc.name int8ArrayIndexSetPart04Test019
     * @tc.desc Verify toString() returns 99, 2, 3 after $_set(0, 99)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test019() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, 99);
    String strResult = String.valueOf(arr);
    String expected1 = "99,2,3";
    assertEqual(expected1, strResult);
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(0, 99), on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_2000
     * @tc.name int8ArrayIndexSetPart04Test020
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(0, 99), on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test020() {
    Int8Array arr = new Int8Array(0);
    try {
    arr.set(0, 99);
    fail();
    } catch (RangeError e) {
    String errName = e.getClass().getSimpleName();
    String expected1 = "RangeError";
    assertEqual(expected1, errName);
    }
    }

    /**
     * Verify $_set then $_get expects 50, with $_get(0), on new Int8Array(new int[] {1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_2100
     * @tc.name int8ArrayIndexSetPart04Test021
     * @tc.desc Verify $_set then $_get expects 50, with $_get(0), on new Int8Array(new int[] {1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test021() {
    Int8Array arr = new Int8Array(new int[] {1});
    arr.set(0, 50);
    Integer valueAt0 = arr.get(0);
    int expected1 = 50;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify $_set(1, 50) writes 50 and leaves unmodified elements as 7 on new Int8Array(new int[] {7, 7, 7})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_2200
     * @tc.name int8ArrayIndexSetPart04Test022
     * @tc.desc Verify $_set(1, 50) writes 50 and leaves unmodified elements as 7 on new Int8Array(new int[] {7, 7, 7})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test022() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    arr.set(1, 50);
    Integer r1 = arr.get(1);
    int e1 = 50;
    assertEqualInt(e1, r1);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(2));
    }

    /**
     * Verify $_set(-1, 99) on arr2 throws RangeError while $_set(2, 99) succeeds on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_2300
     * @tc.name int8ArrayIndexSetPart04Test023
     * @tc.desc Verify $_set(-1, 99) on arr2 throws RangeError while $_set(2, 99) succeeds on n
     * ew Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test023() {
    Int8Array arr1 = new Int8Array(new int[] {1, 2, 3});
    Int8Array arr2 = new Int8Array(new int[] {1, 2, 3});
    arr1.set(2, 99);
    Integer r1 = arr1.get(2);
    int e1 = 99;
    assertEqualInt(e1, r1);
    try {
    arr2.set(-1, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(0, 99) writes 99 and byteOffset remains 1 on offset view new Int8A
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_2400
     * @tc.name int8ArrayIndexSetPart04Test024
     * @tc.desc Verify $_set(0, 99) writes 99 and byteOffset remains 1 on offset view new Int8A
     * rray(new ArrayBuffer(4), 1, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test024() {
    Int8Array arr = new Int8Array(new ArrayBuffer(4), 1, 2);
    arr.set(0, 99);
    Integer r1 = arr.get(0);
    int e1 = 99;
    assertEqualInt(e1, r1);
    int r2 = arr.byteOffset();
    int e2 = 1;
    assertEqual(e2, r2);
    }

    /**
     * Verify $_set(0, 99) writes 99 and buffer reference unchanged on new Int8Array(new ArrayBuffer(4))
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_2500
     * @tc.name int8ArrayIndexSetPart04Test025
     * @tc.desc Verify $_set(0, 99) writes 99 and buffer reference unchanged on new Int8Array(new ArrayBuffer(4))
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test025() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf);
    arr.set(0, 99);
    Integer r1 = arr.get(0);
    int e1 = 99;
    assertEqualInt(e1, r1);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify at(-1) returns 50 after $_set(2, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_2600
     * @tc.name int8ArrayIndexSetPart04Test026
     * @tc.desc Verify at(-1) returns 50 after $_set(2, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test026() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(2, 50);
    Integer atResultLast = arr.at(-1);
    int expected1 = 50;
    assertEqualInt(expected1, atResultLast);
    }

    /**
     * Verify $_set then $_get expects -50
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_2700
     * @tc.name int8ArrayIndexSetPart04Test027
     * @tc.desc Verify $_set then $_get expects -50
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test027() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, 50);
    arr.set(0, -50);
    Integer valueAt0 = arr.get(0);
    int expected1 = -50;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify indexOf(50) returns 1 after $_set(1, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_2800
     * @tc.name int8ArrayIndexSetPart04Test028
     * @tc.desc Verify indexOf(50) returns 1 after $_set(1, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test028() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(1, 50);
    int indexOfResult = arr.indexOf(50);
    int expected1 = 1;
    assertEqual(expected1, indexOfResult);
    }

    /**
     * Verify $_set(2, -50) then includes(-50) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_2900
     * @tc.name int8ArrayIndexSetPart04Test029
     * @tc.desc Verify $_set(2, -50) then includes(-50) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test029() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(2, -50);
    boolean includesResult = arr.includes(-50);
    assertTrue(includesResult);
    }

    /**
     * Verify forEach sum equals 54 after $_set(1, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_3000
     * @tc.name int8ArrayIndexSetPart04Test030
     * @tc.desc Verify forEach sum equals 54 after $_set(1, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test030() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(1, 50);
    int[] sum = {0};
    arr.forEach((value, index, array) -> {
    sum[0] = sum[0] + value;
    });
    assertEqual(54, sum[0]);
    }

    /**
     * Verify join('-') returns 50-2-3 after $_set(0, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_3100
     * @tc.name int8ArrayIndexSetPart04Test031
     * @tc.desc Verify join('-') returns 50-2-3 after $_set(0, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test031() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, 50);
    String joinResult = arr.join("-");
    String expected1 = "50-2-3";
    assertEqual(expected1, joinResult);
    }

    /**
     * Verify $_set(index, value * 2) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_3200
     * @tc.name int8ArrayIndexSetPart04Test032
     * @tc.desc Verify $_set(index, value * 2) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test032() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.forEach((value, index, array) -> {
    arr.set(index, value * 2);
    });
    Integer valueAt1 = arr.get(1);
    int expected1 = 4;
    assertEqualInt(expected1, valueAt1);
    }

    /**
     * Verify $_set(index, 99) inside map callback assigns 99 to all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_3300
     * @tc.name int8ArrayIndexSetPart04Test033
     * @tc.desc Verify $_set(index, 99) inside map callback assigns 99 to all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test033() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    Int8Array mapped = arr.map((value, index, array) -> {
        arr.set(index, 99);
        return value;
    });
    int r1 = mapped.length();
    int e1 = 3;
    assertEqual(e1, r1);
    Integer r2 = mapped.get(0);
    int e2 = 1;
    assertEqualInt(e2, r2);
    Integer valueAt0 = arr.get(0);
    int expected1 = 99;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify $_set(2, 99) inside forEach callback assigns 99 at index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_3500
     * @tc.name int8ArrayIndexSetPart04Test035
     * @tc.desc Verify $_set(2, 99) inside forEach callback assigns 99 at index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test035() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.forEach((value, index, array) -> {
    if (index == 0) {
    assertEqual(1, value);
    }
    arr.set(2, 99);
    });
    Integer valueAt2 = arr.get(2);
    int expected1 = 99;
    assertEqualInt(expected1, valueAt2);
    }

    /**
     * Verify forEach callback captures last value 3 after $_set(0, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_3600
     * @tc.name int8ArrayIndexSetPart04Test036
     * @tc.desc Verify forEach callback captures last value 3 after $_set(0, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test036() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] captured = {0};
    arr.set(0, 50);
    arr.forEach((value, index, array) -> {
    captured[0] = value;
    });
    assertEqual(3, captured[0]);
    }

    /**
     * Verify $_set(1, -50) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_3700
     * @tc.name int8ArrayIndexSetPart04Test037
     * @tc.desc Verify $_set(1, -50) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test037() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(1, -50);
    Integer atResult1 = arr.at(1);
    int expected1 = -50;
    assertEqualInt(expected1, atResult1);
    }

    /**
     * Verify $_set then $_get expects 1, on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_3800
     * @tc.name int8ArrayIndexSetPart04Test038
     * @tc.desc Verify $_set then $_get expects 1, on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test038() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.set(2, 99);
    Integer valueAt0 = arr.get(0);
    int expected1 = 1;
    assertEqualInt(expected1, valueAt0);
    Integer valueAt1 = arr.get(1);
    int expected2 = 2;
    assertEqualInt(expected2, valueAt1);
    Integer valueAt3 = arr.get(3);
    int expected3 = 4;
    assertEqualInt(expected3, valueAt3);
    }

    /**
     * Verify $_get(0) on subarray(1, 2) returns 50 after $_set(1, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_3900
     * @tc.name int8ArrayIndexSetPart04Test039
     * @tc.desc Verify $_get(0) on subarray(1, 2) returns 50 after $_set(1, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test039() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(1, 50);
    Int8Array view = arr.subarray(1, 2);
    Integer valueAt0 = view.get(0);
    int expected1 = 50;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify slice(0, 1) copy reads back 50 after $_set(0, 50) on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_4000
     * @tc.name int8ArrayIndexSetPart04Test040
     * @tc.desc Verify slice(0, 1) copy reads back 50 after $_set(0, 50) on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test040() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, 50);
    Int8Array copy = arr.slice(0, 1);
    assertEqualInt(50, copy.get(0));
    }

    /**
     * Verify find(value === 50) returns 50 after $_set(1, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_4100
     * @tc.name int8ArrayIndexSetPart04Test041
     * @tc.desc Verify find(value === 50) returns 50 after $_set(1, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test041() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(1, 50);
    Integer found = arr.find((value, index, array) -> value == 50);
    assertEqualInt(50, found);
    }

    /**
     * Verify findIndex(value === -50) returns 2 after $_set(2, -50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_4200
     * @tc.name int8ArrayIndexSetPart04Test042
     * @tc.desc Verify findIndex(value === -50) returns 2 after $_set(2, -50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test042() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(2, -50);
    int findIndexResult = arr.findIndex((value, index, array) -> value == -50);
    int expected1 = 2;
    assertEqual(expected1, findIndexResult);
    }

    /**
     * Verify $_set then $_get expects 99, with $_get(2), on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_4300
     * @tc.name int8ArrayIndexSetPart04Test043
     * @tc.desc Verify $_set then $_get expects 99, with $_get(2), on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test043() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    for (int i = 0; i < arr.length(); i++) {
    if (i == 0) {
    arr.set(2, 99);
    }
    }
    Integer valueAt2 = arr.get(2);
    int expected1 = 99;
    assertEqualInt(expected1, valueAt2);
    }

    /**
     * Verify $_set(i, 99) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_4400
     * @tc.name int8ArrayIndexSetPart04Test044
     * @tc.desc Verify $_set(i, 99) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test044() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] captured = {0};
    for (int i = 0; i < arr.length(); i++) {
    arr.set(i, 99);
    captured[0]++;
    }
    assertEqual(3, captured[0]);
    Integer r1 = arr.get(0);
    int e1 = 99;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(1);
    int e2 = 99;
    assertEqualInt(e2, r2);
    Integer r3 = arr.get(2);
    int e3 = 99;
    assertEqualInt(e3, r3);
    }

    /**
     * Verify values expects 99, with $_set(0, 99), on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_4500
     * @tc.name int8ArrayIndexSetPart04Test045
     * @tc.desc Verify values expects 99, with $_set(0, 99), on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test045() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, 99);
    for (Integer v : arr.values()) {
    assertEqualInt(99, v);
    break;
    }
    }

    /**
     * Verify $_set(0, 99) and $_get(0) expects 99
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_4600
     * @tc.name int8ArrayIndexSetPart04Test046
     * @tc.desc Verify $_set(0, 99) and $_get(0) expects 99
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test046() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, 99);
    Integer valueAt0 = arr.get(0);
    int expected1 = 99;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify $_get(1) on subarray(0, 3) returns 50 after $_set(1, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_4700
     * @tc.name int8ArrayIndexSetPart04Test047
     * @tc.desc Verify $_get(1) on subarray(0, 3) returns 50 after $_set(1, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test047() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    Int8Array view = arr.subarray(0, 3);
    arr.set(1, 50);
    Integer valueAt1 = view.get(1);
    int expected1 = 50;
    assertEqualInt(expected1, valueAt1);
    }

    /**
     * Verify $_get(0) on both subarray views returns 50 and 99 after $_set(0, 50) and $_set(2, 99)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_4800
     * @tc.name int8ArrayIndexSetPart04Test048
     * @tc.desc Verify $_get(0) on both subarray views returns 50 and 99 after $_set(0, 50) and $_set(2, 99)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test048() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array subLeft = arr.subarray(0, 2);
    Int8Array subRight = arr.subarray(2, 4);
    arr.set(0, 50);
    arr.set(2, 99);
    Integer subLeftValueAt0 = subLeft.get(0);
    int expected1 = 50;
    assertEqualInt(expected1, subLeftValueAt0);
    Integer subRightValueAt0 = subRight.get(0);
    int expected2 = 99;
    assertEqualInt(expected2, subRightValueAt0);
    }

    /**
     * Verify $_set then $_get expects 50 from ArrayBuffer, with $_get(0), on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_4900
     * @tc.name int8ArrayIndexSetPart04Test049
     * @tc.desc Verify $_set then $_get expects 50 from ArrayBuffer, with $_get(0), on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test049() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array a = new Int8Array(buf);
    Int8Array b = new Int8Array(buf);
    a.set(0, 50);
    Integer valueAt0 = b.get(0);
    int expected1 = 50;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify $_set(0, 99) on original does not affect slice(0, 3) copy which keeps 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_5000
     * @tc.name int8ArrayIndexSetPart04Test050
     * @tc.desc Verify $_set(0, 99) on original does not affect slice(0, 3) copy which keeps 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test050() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    Int8Array copy = arr.slice(0, 3);
    arr.set(0, 99);
    assertEqualInt(1, copy.get(0));
    }

    /**
     * Verify $_get(0) on subarray(0, 3) returns 99 after $_set(0, 99)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_5100
     * @tc.name int8ArrayIndexSetPart04Test051
     * @tc.desc Verify $_get(0) on subarray(0, 3) returns 99 after $_set(0, 99)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test051() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    Int8Array view = arr.subarray(0, 3);
    arr.set(0, 99);
    Integer valueAt0 = view.get(0);
    int expected1 = 99;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify $_set then $_get expects 50 from ArrayBuffer, with $_get(2), on new Int8Array(buf, 0, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_5200
     * @tc.name int8ArrayIndexSetPart04Test052
     * @tc.desc Verify $_set then $_get expects 50 from ArrayBuffer, with $_get(2), on new Int8Array(buf, 0, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test052() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array a = new Int8Array(buf, 0, 3);
    Int8Array b = new Int8Array(buf, 3, 3);
    a.set(2, 50);
    b.set(0, 99);
    Integer valueAt2 = a.get(2);
    int expected1 = 50;
    assertEqualInt(expected1, valueAt2);
    Integer valueAt0 = b.get(0);
    int expected2 = 99;
    assertEqualInt(expected2, valueAt0);
    }

    /**
     * Verify $_get(2) on subarray(0, 4) returns 99 after $_set(0, 99) and copyWithin(2, 0, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_5300
     * @tc.name int8ArrayIndexSetPart04Test053
     * @tc.desc Verify $_get(2) on subarray(0, 4) returns 99 after $_set(0, 99) and copyWithin(2, 0, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test053() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array view = arr.subarray(0, 4);
    arr.set(0, 99);
    arr.copyWithin(2, 0, 1);
    Integer valueAt2 = view.get(2);
    int expected1 = 99;
    assertEqualInt(expected1, valueAt2);
    }

    /**
     * Verify $_get(0) on subarray(0, 1) returns 50 after $_set(0, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_5400
     * @tc.name int8ArrayIndexSetPart04Test054
     * @tc.desc Verify $_get(0) on subarray(0, 1) returns 50 after $_set(0, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test054() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, 50);
    Int8Array view = arr.subarray(0, 1);
    Integer valueAt0 = view.get(0);
    int expected1 = 50;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify subarray(1, 2) shares buffer, $_set on subarray reflected in original
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_5500
     * @tc.name int8ArrayIndexSetPart04Test055
     * @tc.desc Verify subarray(1, 2) shares buffer, $_set on subarray reflected in original
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test055() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    Int8Array view = arr.subarray(1, 2);
    view.set(0, 50);
    Integer r1 = arr.get(1);
    int e1 = 50;
    assertEqualInt(e1, r1);
    Integer valueAt0 = arr.get(0);
    int expected1 = 1;
    assertEqualInt(expected1, valueAt0);
    Integer valueAt2 = arr.get(2);
    int expected2 = 3;
    assertEqualInt(expected2, valueAt2);
    }

    /**
     * Verify $_set(-1, 50) throws RangeError for negative index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_5600
     * @tc.name int8ArrayIndexSetPart04Test056
     * @tc.desc Verify $_set(-1, 50) throws RangeError for negative index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test056() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    arr.set(-1, 50);
    fail();
    } catch (RangeError e) {
    String errName = e.getClass().getSimpleName();
    String expected1 = "RangeError";
    assertEqual(expected1, errName);
    }
    }

    /**
     * Verify $_set(0, 200) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_5700
     * @tc.name int8ArrayIndexSetPart04Test057
     * @tc.desc Verify $_set(0, 200) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test057() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array arr = new Int8Array(buf);
    arr.set(0, 200);
    Int8Array reader = new Int8Array(buf);
    Integer valueAt0 = reader.get(0);
    int expected1 = -56;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify $_set then $_get expects 50, with $_get(0), on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_5800
     * @tc.name int8ArrayIndexSetPart04Test058
     * @tc.desc Verify $_set then $_get expects 50, with $_get(0), on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test058() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, 50);
    Int8Array rev = arr.toReversed();
    rev.set(0, 99);
    Integer valueAt0 = arr.get(0);
    int expected1 = 50;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify $_set then $_get expects 99, with $_get(0), on new Int8Array(new int[] {3, 1, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_5900
     * @tc.name int8ArrayIndexSetPart04Test059
     * @tc.desc Verify $_set then $_get expects 99, with $_get(0), on new Int8Array(new int[] {3, 1, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test059() {
    Int8Array arr = new Int8Array(new int[] {3, 1, 2});
    arr.set(0, 99);
    Integer valueAt0 = arr.get(0);
    int expected1 = 99;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify $_set(1, 0) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_6000
     * @tc.name int8ArrayIndexSetPart04Test060
     * @tc.desc Verify $_set(1, 0) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test060() {
    Int8Array arr = new Int8Array(new int[] {50, 60, 70});
    arr.set(1, 0);
    Integer valueAt1 = arr.get(1);
    int expected1 = 0;
    assertEqualInt(expected1, valueAt1);
    }

    /**
     * Verify $_set(0, 1) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_6100
     * @tc.name int8ArrayIndexSetPart04Test061
     * @tc.desc Verify $_set(0, 1) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test061() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    String strResult = String.valueOf(arr);
    String expected1 = "1,2,3";
    assertEqual(expected1, strResult);
    }

    /**
     * Verify $_get expects 2, with $_get(1) unchanged after $_set(0, 50), on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_6200
     * @tc.name int8ArrayIndexSetPart04Test062
     * @tc.desc Verify $_get expects 2, with $_get(1) unchanged after $_set(0, 50), on new Int8
     * Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test062() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, 50);
    Integer valueAt1 = arr.get(1);
    int expected1 = 2;
    assertEqualInt(expected1, valueAt1);
    }

    /**
     * Verify $_get(2) returns 99 after $_set(0, 99) and reverse()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_6300
     * @tc.name int8ArrayIndexSetPart04Test063
     * @tc.desc Verify $_get(2) returns 99 after $_set(0, 99) and reverse()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test063() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, 99);
    arr.reverse();
    Integer valueAt2 = arr.get(2);
    int expected1 = 99;
    assertEqualInt(expected1, valueAt2);
    }

    /**
     * Verify $_get(0) returns 0 after $_set(0, 99) and fill(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_6400
     * @tc.name int8ArrayIndexSetPart04Test064
     * @tc.desc Verify $_get(0) returns 0 after $_set(0, 99) and fill(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test064() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, 99);
    arr.fill(0);
    Integer valueAt0 = arr.get(0);
    int expected1 = 0;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify $_set(-2, 99) throws RangeError for negative index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_6500
     * @tc.name int8ArrayIndexSetPart04Test065
     * @tc.desc Verify $_set(-2, 99) throws RangeError for negative index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test065() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    try {
    arr.set(-2, 99);
    fail();
    } catch (RangeError e) {
    String errName = e.getClass().getSimpleName();
    String expected1 = "RangeError";
    assertEqual(expected1, errName);
    }
    }

    /**
     * Verify $_set(-3, 99) throws RangeError for negative index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_6600
     * @tc.name int8ArrayIndexSetPart04Test066
     * @tc.desc Verify $_set(-3, 99) throws RangeError for negative index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test066() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    arr.set(-3, 99);
    fail();
    } catch (RangeError e) {
    String errName = e.getClass().getSimpleName();
    String expected1 = "RangeError";
    assertEqual(expected1, errName);
    }
    }

    /**
     * Verify $_set(-4, 99) throws RangeError for negative index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_6700
     * @tc.name int8ArrayIndexSetPart04Test067
     * @tc.desc Verify $_set(-4, 99) throws RangeError for negative index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test067() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    arr.set(-4, 99);
    fail();
    } catch (RangeError e) {
    String errName = e.getClass().getSimpleName();
    String expected1 = "RangeError";
    assertEqual(expected1, errName);
    }
    }

    /**
     * Verify lastIndexOf(50) returns 1 after $_set(1, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_6800
     * @tc.name int8ArrayIndexSetPart04Test068
     * @tc.desc Verify lastIndexOf(50) returns 1 after $_set(1, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test068() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 2, 1});
    arr.set(1, 50);
    int lastIndexOfResult = arr.lastIndexOf(50);
    int expected1 = 1;
    assertEqual(expected1, lastIndexOfResult);
    }

    /**
     * Verify $_set no-op, throws RangeError for out-of-bounds index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_6900
     * @tc.name int8ArrayIndexSetPart04Test069
     * @tc.desc Verify $_set no-op, throws RangeError for out-of-bounds index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test069() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    Int8Array view = arr.subarray(0, 3);
    try {
    arr.set(5, 99);
    fail();
    } catch (RangeError e) {
    String errName = e.getClass().getSimpleName();
    String expected1 = "RangeError";
    assertEqual(expected1, errName);
    }
    Integer valueAt0 = view.get(0);
    int expected1 = 1;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify $_set length no-op, throws RangeError for out-of-bounds index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_7000
     * @tc.name int8ArrayIndexSetPart04Test070
     * @tc.desc Verify $_set length no-op, throws RangeError for out-of-bounds index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test070() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    arr.set(3, 99);
    fail();
    } catch (RangeError e) {
    String errName = e.getClass().getSimpleName();
    String expected1 = "RangeError";
    assertEqual(expected1, errName);
    }
    int lenResult = arr.length();
    int expected1 = 3;
    assertEqual(expected1, lenResult);
    }

    /**
     * Verify $_set(1, Number.POSITIVE_INFINITY) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_7100
     * @tc.name int8ArrayIndexSetPart04Test071
     * @tc.desc Verify $_set(1, Number.POSITIVE_INFINITY) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test071() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    Int8Array view = arr.subarray(0, 3);
    arr.set(1, Double.POSITIVE_INFINITY);
    Integer valueAt1 = view.get(1);
    int expected1 = 0;
    assertEqualInt(expected1, valueAt1);
    }

    /**
     * Verify $_set(0, Number.NEGATIVE_INFINITY) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_7200
     * @tc.name int8ArrayIndexSetPart04Test072
     * @tc.desc Verify $_set(0, Number.NEGATIVE_INFINITY) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart04Test072() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, Double.NEGATIVE_INFINITY);
    Int8Array copy = arr.slice(0, 1);
    Integer valueAt0 = copy.get(0);
    int expected1 = 0;
    assertEqualInt(expected1, valueAt0);
    }

    /**
     * Verify $_set(1, Number.MAX_VALUE) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART04_TEST_7300
     * @tc.name int8ArrayIndexSetPart04Test073
     * @tc.desc Verify $_set(1, Number.MAX_VALUE) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
