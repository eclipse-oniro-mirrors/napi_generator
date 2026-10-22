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
import basetype.common.BasTest;
import basetype.common.RangeError;
import basetype.common.OutOfMemoryError;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayConstructorPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayConstructorPart02Test extends BasTest {
    private static int INT8_MAX = 127;

    /**
     * Verify length expects 5 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_0100
     * @tc.name int8ArrayConstructorPart02Test001
     * @tc.desc Verify length expects 5 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test001() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    assertEqual(5, arr.length());
    }

    /**
     * Verify buffer.byteLength of new Int8Array(len) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_0200
     * @tc.name int8ArrayConstructorPart02Test002
     * @tc.desc Verify buffer.byteLength of new Int8Array(len) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test002() {
    int len = 0;
    Int8Array arr = new Int8Array(len);
    assertEqual(0, arr.buffer().byteLength());
    }

    /**
     * Verify buffer.byteLength of new Int8Array(len) returns len
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_0300
     * @tc.name int8ArrayConstructorPart02Test003
     * @tc.desc Verify buffer.byteLength of new Int8Array(len) returns len
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test003() {
    int len = 7;
    Int8Array arr = new Int8Array(len);
    assertEqual(len, arr.buffer().byteLength());
    }

    /**
     * Verify forEach expects 0, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_0400
     * @tc.name int8ArrayConstructorPart02Test004
     * @tc.desc Verify forEach expects 0, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test004() {
    int len = 0;
    Int8Array arr = new Int8Array(len);
    int[] count = {0};
    arr.forEach((v) -> {
    if (Double.compare(v, 0.0) == 0) {
    count[0] = count[0] + 1;
    }
    count[0] = count[0] + 1;
    });
    assertEqual(0, count[0]);
    }

    /**
     * Verify toString on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_0500
     * @tc.name int8ArrayConstructorPart02Test005
     * @tc.desc Verify toString on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test005() {
    int len = 0;
    Int8Array arr = new Int8Array(len);
    assertEqual("", String.valueOf(arr));
    }

    /**
     * Verify at returns undefined, with at(0), on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_0600
     * @tc.name int8ArrayConstructorPart02Test006
     * @tc.desc Verify at returns undefined, with at(0), on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test006() {
    int len = 0;
    Int8Array arr = new Int8Array(len);
    assertNull(arr.at(0));
    }

    /**
     * Verify $_set expects RangeError throws exception on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_0700
     * @tc.name int8ArrayConstructorPart02Test007
     * @tc.desc Verify $_set expects RangeError throws exception on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test007() {
    int len = 0;
    Int8Array arr = new Int8Array(len);
    try {
    arr.set(0, 10);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify buffer.byteLength of new Int8Array(len) returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_0800
     * @tc.name int8ArrayConstructorPart02Test008
     * @tc.desc Verify buffer.byteLength of new Int8Array(len) returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test008() {
    int len = 1;
    Int8Array arr = new Int8Array(len);
    assertEqual(1, arr.buffer().byteLength());
    }

    /**
     * Verify $_get expects 0, on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_0900
     * @tc.name int8ArrayConstructorPart02Test009
     * @tc.desc Verify $_get expects 0, on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test009() {
    int len = 1;
    Int8Array arr = new Int8Array(len);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify at expects 0 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_1000
     * @tc.name int8ArrayConstructorPart02Test010
     * @tc.desc Verify at expects 0 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test010() {
    int len = 1;
    Int8Array arr = new Int8Array(len);
    assertEqualInt(0, arr.at(0));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_1100
     * @tc.name int8ArrayConstructorPart02Test011
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test011() {
    int len = 1;
    Int8Array arr = new Int8Array(len);
    arr.set(0, INT8_MAX);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify byteOffset of new Int8Array(len) returns 0, on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_1200
     * @tc.name int8ArrayConstructorPart02Test012
     * @tc.desc Verify byteOffset of new Int8Array(len) returns 0, on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test012() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify buffer.byteLength of new Int8Array(len) returns 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_1300
     * @tc.name int8ArrayConstructorPart02Test013
     * @tc.desc Verify buffer.byteLength of new Int8Array(len) returns 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test013() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    assertEqual(5, arr.buffer().byteLength());
    }

    /**
     * Verify BYTES_PER_ELEMENT equals 1 on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_1400
     * @tc.name int8ArrayConstructorPart02Test014
     * @tc.desc Verify BYTES_PER_ELEMENT equals 1 on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test014() {
    assertEqual(1, new Int8Array(1).BYTES_PER_ELEMENT);
    }

    /**
     * Verify length on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_1500
     * @tc.name int8ArrayConstructorPart02Test015
     * @tc.desc Verify length on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test015() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    assertEqual(len, arr.length());
    }

    /**
     * Verify new Int8Array(len) constructor equals 0, 0, 0, 0, 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_1600
     * @tc.name int8ArrayConstructorPart02Test016
     * @tc.desc Verify new Int8Array(len) constructor equals 0, 0, 0, 0, 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test016() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    assertEqual("0,0,0,0,0", String.valueOf(arr));
    }

    /**
     * Verify join('-') of zero-filled new Int8Array(5) returns "0-0-0-0-0"
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_1700
     * @tc.name int8ArrayConstructorPart02Test017
     * @tc.desc Verify join('-') of zero-filled new Int8Array(5) returns "0-0-0-0-0"
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test017() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    assertEqual("0-0-0-0-0", arr.join("-"));
    }

    /**
     * Verify at returns undefined, with at(5), on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_1800
     * @tc.name int8ArrayConstructorPart02Test018
     * @tc.desc Verify at returns undefined, with at(5), on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test018() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    assertNull(arr.at(5));
    }

    /**
     * Verify length expects 256 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_1900
     * @tc.name int8ArrayConstructorPart02Test019
     * @tc.desc Verify length expects 256 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test019() {
    int len = 256;
    Int8Array arr = new Int8Array(len);
    int r1 = arr.length();
    int e1 = 256;
    assertEqual(e1, r1);
    }

    /**
     * Verify byteLength of new Int8Array(len) returns 256
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_2000
     * @tc.name int8ArrayConstructorPart02Test020
     * @tc.desc Verify byteLength of new Int8Array(len) returns 256
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test020() {
    int len = 256;
    Int8Array arr = new Int8Array(len);
    int r1 = arr.byteLength();
    int e1 = 256;
    assertEqual(e1, r1);
    }

    /**
     * Verify buffer.byteLength of new Int8Array(len) returns 256
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_2100
     * @tc.name int8ArrayConstructorPart02Test021
     * @tc.desc Verify buffer.byteLength of new Int8Array(len) returns 256
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test021() {
    int len = 256;
    Int8Array arr = new Int8Array(len);
    int r1 = arr.buffer().byteLength();
    int e1 = 256;
    assertEqual(e1, r1);
    }

    /**
     * Verify $_get expects 0, on new Int8Array(256)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_2200
     * @tc.name int8ArrayConstructorPart02Test022
     * @tc.desc Verify $_get expects 0, on new Int8Array(256)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test022() {
    int len = 256;
    Int8Array arr = new Int8Array(len);
    Integer r1 = arr.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(255);
    int e2 = 0;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify new Int8Array(2147483647) throws OutOfMemoryError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_2300
     * @tc.name int8ArrayConstructorPart02Test023
     * @tc.desc Verify new Int8Array(2147483647) throws OutOfMemoryError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test023() {
    int len = 2147483647;
    try {
    Int8Array arr = new Int8Array(len);
    int r1 = arr.length();
    int e1 = 2147483647;
    assertEqual(e1, r1);
    fail();
    } catch (OutOfMemoryError e) {
    assertEqual("OutOfMemoryError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(-1) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_2400
     * @tc.name int8ArrayConstructorPart02Test024
     * @tc.desc Verify new Int8Array(-1) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test024() {
    int len = -1;
    try {
    Int8Array arr = new Int8Array(len);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(-2147483648) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_2500
     * @tc.name int8ArrayConstructorPart02Test025
     * @tc.desc Verify new Int8Array(-2147483648) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test025() {
    int len = Integer.MIN_VALUE;
    try {
    Int8Array arr = new Int8Array(len);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get expects 0, after $_set(0, 256), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_2600
     * @tc.name int8ArrayConstructorPart02Test026
     * @tc.desc Verify $_get expects 0, after $_set(0, 256), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test026() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    arr.set(0, 256);
    Integer r1 = arr.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get expects 0, after $_set(0, Number.NaN), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_2700
     * @tc.name int8ArrayConstructorPart02Test027
     * @tc.desc Verify $_get expects 0, after $_set(0, Number.NaN), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test027() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    arr.set(0, Double.NaN);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects 1 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_2800
     * @tc.name int8ArrayConstructorPart02Test028
     * @tc.desc Verify $_get expects 1 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test028() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    arr.set(0, 1.9);
    Integer r1 = arr.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get expects -1 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_2900
     * @tc.name int8ArrayConstructorPart02Test029
     * @tc.desc Verify $_get expects -1 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test029() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    arr.set(0, -1.9);
    Integer r1 = arr.get(0);
    int e1 = -1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_3000
     * @tc.name int8ArrayConstructorPart02Test030
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test030() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    arr.set(0, INT8_MAX);
    Integer r1 = arr.get(0);
    int e1 = INT8_MAX;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get expects -128 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_3100
     * @tc.name int8ArrayConstructorPart02Test031
     * @tc.desc Verify $_get expects -128 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test031() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    arr.set(0, -128);
    Integer r1 = arr.get(0);
    int e1 = -128;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify subarray(0, 2) shares buffer, $_set on subarray reflected in original ex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_3700
     * @tc.name int8ArrayConstructorPart02Test037
     * @tc.desc Verify subarray(0, 2) shares buffer, $_set on subarray reflected in original ex
     * pects 99 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test037() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    Int8Array view = arr.subarray(0, 2);
    view.set(0, 99);
    Integer r1 = arr.get(0);
    int e1 = 99;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify subarray(2, 4) shares buffer, $_set on subarray reflected in original ex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_3800
     * @tc.name int8ArrayConstructorPart02Test038
     * @tc.desc Verify subarray(2, 4) shares buffer, $_set on subarray reflected in original ex
     * pects 55 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test038() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    Int8Array view = arr.subarray(2, 4);
    view.set(0, 55);
    Integer r1 = arr.get(2);
    int e1 = 55;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify subarray shares buffer, modification is bidirectional expects 42 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_4000
     * @tc.name int8ArrayConstructorPart02Test040
     * @tc.desc Verify subarray shares buffer, modification is bidirectional expects 42 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test040() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    Int8Array sub1 = arr.subarray(0, 2);
    Int8Array sub2 = arr.subarray(0, 2);
    sub1.set(0, 42);
    Integer r1 = sub2.get(0);
    int e1 = 42;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify slice(0, 2) creates independent copy and $_set on copy does not affect o
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_4100
     * @tc.name int8ArrayConstructorPart02Test041
     * @tc.desc Verify slice(0, 2) creates independent copy and $_set on copy does not affect o
     * riginal on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test041() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    Int8Array copy = arr.slice(0, 2);
    copy.set(0, 99);
    Integer r1 = arr.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get expects 0, after $_set(0, 77), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_4200
     * @tc.name int8ArrayConstructorPart02Test042
     * @tc.desc Verify $_get expects 0, after $_set(0, 77), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test042() {
    int len = 4;
    Int8Array a1 = new Int8Array(len);
    Int8Array a2 = new Int8Array(len);
    a1.set(0, 77);
    Integer r1 = a2.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify subarray(0, 2) shares buffer, modification is bidirectional expects 33 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_4400
     * @tc.name int8ArrayConstructorPart02Test044
     * @tc.desc Verify subarray(0, 2) shares buffer, modification is bidirectional expects 33 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test044() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    Int8Array view = arr.subarray(0, 2);
    arr.set(0, 33);
    Integer r1 = view.get(0);
    int e1 = 33;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify subarray(1, 3) byteOffset on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_4500
     * @tc.name int8ArrayConstructorPart02Test045
     * @tc.desc Verify subarray(1, 3) byteOffset on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test045() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    Int8Array view = arr.subarray(1, 3);
    int r1 = view.byteOffset();
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify buffer.byteLength equals byteLength for new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_4600
     * @tc.name int8ArrayConstructorPart02Test046
     * @tc.desc Verify buffer.byteLength equals byteLength for new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test046() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertEqual(arr.byteLength(), arr.buffer().byteLength());
    }

    /**
     * Verify includes, with includes(0), on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_4800
     * @tc.name int8ArrayConstructorPart02Test048
     * @tc.desc Verify includes, with includes(0), on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test048() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    boolean r1 = arr.includes(0);
    assertTrue(r1);
    }

    /**
     * Verify includes, with includes(1), on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_4900
     * @tc.name int8ArrayConstructorPart02Test049
     * @tc.desc Verify includes, with includes(1), on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test049() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    boolean r1 = arr.includes(1);
    assertFalse(r1);
    }

    /**
     * Verify every on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_5000
     * @tc.name int8ArrayConstructorPart02Test050
     * @tc.desc Verify every on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test050() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    boolean r1 = arr.every((v) -> v == 0);
    assertTrue(r1);
    }

    /**
     * Verify some on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_5100
     * @tc.name int8ArrayConstructorPart02Test051
     * @tc.desc Verify some on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test051() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    boolean r1 = arr.some((v) -> v != 0);
    assertFalse(r1);
    }

    /**
     * Verify find returns undefined on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_5200
     * @tc.name int8ArrayConstructorPart02Test052
     * @tc.desc Verify find returns undefined on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test052() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    assertNull(arr.find((v) -> v != 0));
    }

    /**
     * Verify findIndex expects -1 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_5300
     * @tc.name int8ArrayConstructorPart02Test053
     * @tc.desc Verify findIndex expects -1 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test053() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    int r1 = arr.findIndex((v) -> v != 0);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify forEach expects 0, on new Int8Array(5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_5400
     * @tc.name int8ArrayConstructorPart02Test054
     * @tc.desc Verify forEach expects 0, on new Int8Array(5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test054() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    int[] sum = {0};
    arr.forEach((v) -> {
    sum[0] = sum[0] + v;
    });
    assertEqual(0, sum[0]);
    }

    /**
     * Verify fill expects 7 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_5500
     * @tc.name int8ArrayConstructorPart02Test055
     * @tc.desc Verify fill expects 7 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test055() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    arr.fill(7);
    assertEqualInt(7, arr.get(0));
    }

    /**
     * Verify reverse expects 77 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_5600
     * @tc.name int8ArrayConstructorPart02Test056
     * @tc.desc Verify reverse expects 77 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test056() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    arr.set(0, 1);
    arr.set(1, 2);
    Int8Array ret = arr.reverse();
    ret.set(0, 77);
    assertEqualInt(77, arr.get(0));
    }

    /**
     * Verify sort expects 77 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_5700
     * @tc.name int8ArrayConstructorPart02Test057
     * @tc.desc Verify sort expects 77 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test057() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    Int8Array ret = arr.sort();
    ret.set(0, 77);
    assertEqualInt(77, arr.get(0));
    }

    /**
     * Verify copyWithin expects 9 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_5800
     * @tc.name int8ArrayConstructorPart02Test058
     * @tc.desc Verify copyWithin expects 9 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test058() {
    int len = 5;
    Int8Array arr = new Int8Array(len);
    arr.set(1, 9);
    arr.copyWithin(0, 1, 2);
    assertEqualInt(9, arr.get(0));
    }

    /**
     * Verify $_get expects 0, after $_set(0, Number.POSITIVE_INFINITY), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_5900
     * @tc.name int8ArrayConstructorPart02Test059
     * @tc.desc Verify $_get expects 0, after $_set(0, Number.POSITIVE_INFINITY), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test059() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    arr.set(0, Double.POSITIVE_INFINITY);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects 0, after $_set(0, Number.NEGATIVE_INFINITY), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART02_TEST_6000
     * @tc.name int8ArrayConstructorPart02Test060
     * @tc.desc Verify $_get expects 0, after $_set(0, Number.NEGATIVE_INFINITY), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart02Test060() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    arr.set(0, Double.NEGATIVE_INFINITY);
    assertEqualInt(0, arr.get(0));
    }
}
