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
 * Int8ArrayIndexGetPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIndexGetPart02Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify $_get(0) on multi-element array returns first element value 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_0100
     * @tc.name int8ArrayIndexGetPart02Test001
     * @tc.desc Verify $_get(0) on multi-element array returns first element value 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test001() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer v = arr.get(0);
    assertEqualInt(10, v);
    }

    /**
     * Verify $_get(length-1) on multi-element array returns last element value 30
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_0200
     * @tc.name int8ArrayIndexGetPart02Test002
     * @tc.desc Verify $_get(length-1) on multi-element array returns last element value 30
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test002() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer v = arr.get(arr.length() - 1);
    assertEqualInt(30, v);
    }

    /**
     * Verify $_get(0) on single-element array returns value 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_0300
     * @tc.name int8ArrayIndexGetPart02Test003
     * @tc.desc Verify $_get(0) on single-element array returns value 127
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test003() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX});
    Integer v = arr.get(0);
    assertEqualInt(INT8_MAX, v);
    }

    /**
     * Verify $_get(0) after writing truncated wrap value 200 returns -56
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_0400
     * @tc.name int8ArrayIndexGetPart02Test004
     * @tc.desc Verify $_get(0) after writing truncated wrap value 200 returns -56
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test004() {
    Int8Array arr = new Int8Array(new int[] {200});
    Integer v = arr.get(0);
    assertEqualInt(-56, v);
    }

    /**
     * Verify $_get(0) on boundary min value -128 returns -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_0500
     * @tc.name int8ArrayIndexGetPart02Test005
     * @tc.desc Verify $_get(0) on boundary min value -128 returns -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test005() {
    Int8Array arr = new Int8Array(new int[] {INT8_MIN});
    Integer v = arr.get(0);
    assertEqualInt(INT8_MIN, v);
    }

    /**
     * Verify $_get return value can participate in arithmetic operation proving it is number type
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_0600
     * @tc.name int8ArrayIndexGetPart02Test006
     * @tc.desc Verify $_get return value can participate in arithmetic operation proving it is number type
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test006() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer v = arr.get(1);
    assertEqual(25, v + 5);
    }

    /**
     * Verify $_get return values at different positions on same array are correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_0700
     * @tc.name int8ArrayIndexGetPart02Test007
     * @tc.desc Verify $_get return values at different positions on same array are correct
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test007() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer firstElement = arr.get(0);
    Integer valAt2 = arr.get(2);
    assertEqualInt(10, firstElement);
    assertEqualInt(30, valAt2);
    }

    /**
     * Verify $_get(0) returns first element value 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_0800
     * @tc.name int8ArrayIndexGetPart02Test008
     * @tc.desc Verify $_get(0) returns first element value 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test008() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqualInt(10, arr.get(0));
    }

    /**
     * Verify $_get(length-1) returns last element value 30
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_0900
     * @tc.name int8ArrayIndexGetPart02Test009
     * @tc.desc Verify $_get(length-1) returns last element value 30
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test009() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r1 = arr.get(arr.length() - 1);
    int e1 = 30;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get(1) middle index returns middle element value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_1000
     * @tc.name int8ArrayIndexGetPart02Test010
     * @tc.desc Verify $_get(1) middle index returns middle element value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test010() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqualInt(20, arr.get(1));
    }

    /**
     * Verify $_get(length+1) out-of-bounds positive index throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_1100
     * @tc.name int8ArrayIndexGetPart02Test011
     * @tc.desc Verify $_get(length+1) out-of-bounds positive index throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test011() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    arr.get(4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-length-1) out-of-bounds negative index throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_1200
     * @tc.name int8ArrayIndexGetPart02Test012
     * @tc.desc Verify $_get(-length-1) out-of-bounds negative index throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test012() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    arr.get(-4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(2147483647) large positive index throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_1300
     * @tc.name int8ArrayIndexGetPart02Test013
     * @tc.desc Verify $_get(2147483647) large positive index throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test013() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    arr.get(2147483647);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-2147483648) large negative index throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_1400
     * @tc.name int8ArrayIndexGetPart02Test014
     * @tc.desc Verify $_get(-2147483648) large negative index throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test014() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    arr.get(Integer.MIN_VALUE);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(0, 200) truncation wrap then $_get(0) returns -56
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_1500
     * @tc.name int8ArrayIndexGetPart02Test015
     * @tc.desc Verify $_set(0, 200) truncation wrap then $_get(0) returns -56
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test015() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, 200);
    assertEqualInt(-56, arr.get(0));
    }

    /**
     * Verify $_set(0, -128) boundary min value then $_get(0) returns -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_1600
     * @tc.name int8ArrayIndexGetPart02Test016
     * @tc.desc Verify $_set(0, -128) boundary min value then $_get(0) returns -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test016() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, INT8_MIN);
    Integer r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_set(0, 127) boundary max value then $_get(0) returns 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_1700
     * @tc.name int8ArrayIndexGetPart02Test017
     * @tc.desc Verify $_set(0, 127) boundary max value then $_get(0) returns 127
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test017() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, INT8_MAX);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_set(0, 0x80) truncation then $_get(0) returns -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_1800
     * @tc.name int8ArrayIndexGetPart02Test018
     * @tc.desc Verify $_set(0, 0x80) truncation then $_get(0) returns -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test018() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, 0x80);
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify $_set(0, 0xFF) truncation then $_get(0) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_1900
     * @tc.name int8ArrayIndexGetPart02Test019
     * @tc.desc Verify $_set(0, 0xFF) truncation then $_get(0) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test019() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, 0xff);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_set(0, Number.NaN) truncation then $_get(0) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_2000
     * @tc.name int8ArrayIndexGetPart02Test020
     * @tc.desc Verify $_set(0, Number.NaN) truncation then $_get(0) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test020() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, Double.NaN);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set(0, 1.9) truncation then $_get(0) returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_2100
     * @tc.name int8ArrayIndexGetPart02Test021
     * @tc.desc Verify $_set(0, 1.9) truncation then $_get(0) returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test021() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, 1.9);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify $_set(0, -1.9) truncation then $_get(0) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_2200
     * @tc.name int8ArrayIndexGetPart02Test022
     * @tc.desc Verify $_set(0, -1.9) truncation then $_get(0) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test022() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, -1.9);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_get(0) on default element returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_2300
     * @tc.name int8ArrayIndexGetPart02Test023
     * @tc.desc Verify $_get(0) on default element returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test023() {
    Int8Array arr = new Int8Array(1);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify arr.length remains unchanged after $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_2400
     * @tc.name int8ArrayIndexGetPart02Test024
     * @tc.desc Verify arr.length remains unchanged after $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test024() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r1 = arr.get(1);
    int e1 = 20;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify arr.byteLength remains unchanged after $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_2500
     * @tc.name int8ArrayIndexGetPart02Test025
     * @tc.desc Verify arr.byteLength remains unchanged after $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test025() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r1 = arr.get(1);
    int e1 = 20;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify arr.byteOffset remains unchanged after $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_2600
     * @tc.name int8ArrayIndexGetPart02Test026
     * @tc.desc Verify arr.byteOffset remains unchanged after $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test026() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 2, 4);
    Integer r1 = arr.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify underlying buffer.byteLength remains unchanged after $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_2700
     * @tc.name int8ArrayIndexGetPart02Test027
     * @tc.desc Verify underlying buffer.byteLength remains unchanged after $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test027() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf);
    Integer r1 = arr.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify arr.buffer reference remains unchanged after $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_2800
     * @tc.name int8ArrayIndexGetPart02Test028
     * @tc.desc Verify arr.buffer reference remains unchanged after $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test028() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r1 = arr.get(0);
    int e1 = 10;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify first element value unchanged after $_get on first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_2900
     * @tc.name int8ArrayIndexGetPart02Test029
     * @tc.desc Verify first element value unchanged after $_get on first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test029() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqualInt(10, arr.get(0));
    }

    /**
     * Verify last element value unchanged after $_get on last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_3000
     * @tc.name int8ArrayIndexGetPart02Test030
     * @tc.desc Verify last element value unchanged after $_get on last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test030() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify underlying buffer byte content unchanged after $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_3100
     * @tc.name int8ArrayIndexGetPart02Test031
     * @tc.desc Verify underlying buffer byte content unchanged after $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test031() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Int8Array arr = new Int8Array(buf);
    arr.set(0, 50);
    arr.set(1, 60);
    arr.set(2, 70);
    Int8Array view = new Int8Array(buf);
    assertEqualInt(50, view.get(0));
    }

    /**
     * Verify two consecutive $_get calls on same position return consistent values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_3200
     * @tc.name int8ArrayIndexGetPart02Test032
     * @tc.desc Verify two consecutive $_get calls on same position return consistent values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test032() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer first = arr.get(1);
    assertEqualInt(20, first);
    }

    /**
     * Verify middle position value unchanged after $_get on multiple positions
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_3300
     * @tc.name int8ArrayIndexGetPart02Test033
     * @tc.desc Verify middle position value unchanged after $_get on multiple positions
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test033() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqualInt(20, arr.get(1));
    }

    /**
     * Verify subarray view $_get reads shared buffer element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_3400
     * @tc.name int8ArrayIndexGetPart02Test034
     * @tc.desc Verify subarray view $_get reads shared buffer element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test034() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array view = arr.subarray(1, 3);
    assertEqualInt(20, view.get(0));
    }

    /**
     * Verify subarray view byteOffset not modified by $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_3500
     * @tc.name int8ArrayIndexGetPart02Test035
     * @tc.desc Verify subarray view byteOffset not modified by $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test035() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array view = arr.subarray(1, 3);
    Integer r1 = view.get(0);
    int e1 = 20;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify subarray view $_get(0) returns shared element value 20
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_3600
     * @tc.name int8ArrayIndexGetPart02Test036
     * @tc.desc Verify subarray view $_get(0) returns shared element value 20
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test036() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array view = arr.subarray(1, 3);
    Integer r1 = view.get(0);
    int e1 = 20;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(1);
    int e2 = 20;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify ArrayBuffer offset view $_get reads according to view offset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_3700
     * @tc.name int8ArrayIndexGetPart02Test037
     * @tc.desc Verify ArrayBuffer offset view $_get reads according to view offset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test037() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 2, 4);
    arr.set(0, 99);
    assertEqualInt(99, arr.get(0));
    }

    /**
     * Verify multiple views on same buffer each $_get reads independently and correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_3800
     * @tc.name int8ArrayIndexGetPart02Test038
     * @tc.desc Verify multiple views on same buffer each $_get reads independently and correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test038() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array viewAt0 = new Int8Array(buf, 0, 2);
    Int8Array viewAt2 = new Int8Array(buf, 2, 2);
    viewAt0.set(0, 11);
    viewAt2.set(0, 22);
    assertEqualInt(22, viewAt2.get(0));
    }

    /**
     * Verify $_get reads new value after $_set modification
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_3900
     * @tc.name int8ArrayIndexGetPart02Test039
     * @tc.desc Verify $_get reads new value after $_set modification
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test039() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    arr.set(1, 99);
    assertEqualInt(99, arr.get(1));
    }

    /**
     * Verify new view $_get reflects changes after writing to underlying buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_4000
     * @tc.name int8ArrayIndexGetPart02Test040
     * @tc.desc Verify new view $_get reflects changes after writing to underlying buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test040() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Int8Array arr = new Int8Array(buf);
    arr.set(0, 55);
    Int8Array view = new Int8Array(buf);
    assertEqualInt(55, view.get(0));
    }

    /**
     * Verify view out-of-bounds positive index $_get throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_4100
     * @tc.name int8ArrayIndexGetPart02Test041
     * @tc.desc Verify view out-of-bounds positive index $_get throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test041() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array view = arr.subarray(1, 3);
    try {
    view.get(2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify child view $_get reflects shared buffer change after parent array $_set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_4200
     * @tc.name int8ArrayIndexGetPart02Test042
     * @tc.desc Verify child view $_get reflects shared buffer change after parent array $_set
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test042() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array view = arr.subarray(1, 4);
    arr.set(1, 88);
    Integer r1 = view.get(0);
    int e1 = 88;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify view $_get(0) returns first element value 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_4300
     * @tc.name int8ArrayIndexGetPart02Test043
     * @tc.desc Verify view $_get(0) returns first element value 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test043() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array view = arr.subarray(0, 2);
    Integer v = view.get(0);
    assertEqualInt(10, v);
    }

    /**
     * Verify single-element array $_get(0) returns truncated value after $_set(0, 256)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_4400
     * @tc.name int8ArrayIndexGetPart02Test044
     * @tc.desc Verify single-element array $_get(0) returns truncated value after $_set(0, 256)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test044() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, 256);
    Integer r1 = arr.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify single-element array $_get(1) out-of-bounds index throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_4500
     * @tc.name int8ArrayIndexGetPart02Test045
     * @tc.desc Verify single-element array $_get(1) out-of-bounds index throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test045() {
    Int8Array arr = new Int8Array(new int[] {64});
    try {
    arr.get(1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-1) on new Int8Array(new int[] {10, 20, 30}) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_4600
     * @tc.name int8ArrayIndexGetPart02Test046
     * @tc.desc Verify $_get(-1) on new Int8Array(new int[] {10, 20, 30}) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test046() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-3) on new Int8Array(new int[] {10, 20, 30}) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_4700
     * @tc.name int8ArrayIndexGetPart02Test047
     * @tc.desc Verify $_get(-3) on new Int8Array(new int[] {10, 20, 30}) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test047() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    arr.get(-3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-length) negative out-of-bounds index on multi-element array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_4800
     * @tc.name int8ArrayIndexGetPart02Test048
     * @tc.desc Verify $_get(-length) negative out-of-bounds index on multi-element array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test048() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    arr.get(-3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(100) out-of-bounds index on multi-element array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_4900
     * @tc.name int8ArrayIndexGetPart02Test049
     * @tc.desc Verify $_get(100) out-of-bounds index on multi-element array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test049() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    arr.get(100);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify first element unchanged after out-of-bounds $_get, throws RangeError for out-of-bounds index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_5000
     * @tc.name int8ArrayIndexGetPart02Test050
     * @tc.desc Verify first element unchanged after out-of-bounds $_get, throws RangeError for out-of-bounds index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test050() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    arr.get(100);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    Integer r1 = arr.get(0);
    int e1 = 10;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify last element unchanged after negative index $_get, throws RangeError for out-of-bounds index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_5100
     * @tc.name int8ArrayIndexGetPart02Test051
     * @tc.desc Verify last element unchanged after negative index $_get, throws RangeError for out-of-bounds index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test051() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    Integer r1 = arr.get(2);
    int e1 = 30;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify view negative out-of-bounds index $_get throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_5200
     * @tc.name int8ArrayIndexGetPart02Test052
     * @tc.desc Verify view negative out-of-bounds index $_get throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test052() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array view = arr.subarray(1, 4);
    try {
    view.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify single-element array $_get(-1) negative out-of-bounds index throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_5300
     * @tc.name int8ArrayIndexGetPart02Test053
     * @tc.desc Verify single-element array $_get(-1) negative out-of-bounds index throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test053() {
    Int8Array arr = new Int8Array(new int[] {64});
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(0, Number.POSITIVE_INFINITY) truncation then $_get(0) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_5400
     * @tc.name int8ArrayIndexGetPart02Test054
     * @tc.desc Verify $_set(0, Number.POSITIVE_INFINITY) truncation then $_get(0) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test054() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, Double.POSITIVE_INFINITY);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set(0, Number.NEGATIVE_INFINITY) truncation then $_get(0) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART02_TEST_5500
     * @tc.name int8ArrayIndexGetPart02Test055
     * @tc.desc Verify $_set(0, Number.NEGATIVE_INFINITY) truncation then $_get(0) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart02Test055() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, Double.NEGATIVE_INFINITY);
    assertEqualInt(0, arr.get(0));
    }
}
