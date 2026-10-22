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
 * Int8ArrayConstructorPart03Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayConstructorPart03Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify length expects 4 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_0100
     * @tc.name int8ArrayConstructorPart03Test001
     * @tc.desc Verify length expects 4 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test001() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertEqual(4, arr.length());
    }

    /**
     * Verify length expects 0, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_0200
     * @tc.name int8ArrayConstructorPart03Test002
     * @tc.desc Verify length expects 0, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test002() {
    int len = 0;
    Int8Array arr = new Int8Array(len);
    assertEqual(0, arr.length());
    }

    /**
     * Verify length expects 1, on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_0300
     * @tc.name int8ArrayConstructorPart03Test003
     * @tc.desc Verify length expects 1, on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test003() {
    int len = 1;
    Int8Array arr = new Int8Array(len);
    assertEqual(1, arr.length());
    }

    /**
     * Verify length expects 100 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_0400
     * @tc.name int8ArrayConstructorPart03Test004
     * @tc.desc Verify length expects 100 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test004() {
    int len = 100;
    Int8Array arr = new Int8Array(len);
    assertEqual(100, arr.length());
    }

    /**
     * Verify length expects 2 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_0500
     * @tc.name int8ArrayConstructorPart03Test005
     * @tc.desc Verify length expects 2 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test005() {
    double len = 2.5;
    Int8Array arr = new Int8Array(len);
    assertEqual(2, arr.length());
    }

    /**
     * Verify length expects 0, on new Int8Array(0.5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_0600
     * @tc.name int8ArrayConstructorPart03Test006
     * @tc.desc Verify length expects 0, on new Int8Array(0.5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test006() {
    double len = 0.5;
    Int8Array arr = new Int8Array(len);
    assertEqual(0, arr.length());
    }

    /**
     * Verify length expects 1, on new Int8Array(1.9)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_0700
     * @tc.name int8ArrayConstructorPart03Test007
     * @tc.desc Verify length expects 1, on new Int8Array(1.9)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test007() {
    double len = 1.9;
    Int8Array arr = new Int8Array(len);
    assertEqual(1, arr.length());
    }

    /**
     * Verify length expects 0, on new Int8Array(Number.NaN)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_0800
     * @tc.name int8ArrayConstructorPart03Test008
     * @tc.desc Verify length expects 0, on new Int8Array(Number.NaN)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test008() {
    double len = Double.NaN;
    Int8Array arr = new Int8Array(len);
    assertEqual(0, arr.length());
    }

    /**
     * Verify new Int8Array(Number.POSITIVE_INFINITY) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_0900
     * @tc.name int8ArrayConstructorPart03Test009
     * @tc.desc Verify new Int8Array(Number.POSITIVE_INFINITY) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test009() {
    double len = Double.POSITIVE_INFINITY;
    try {
    Int8Array arr = new Int8Array(len);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(-Number.POSITIVE_INFINITY) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_1000
     * @tc.name int8ArrayConstructorPart03Test010
     * @tc.desc Verify new Int8Array(-Number.POSITIVE_INFINITY) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test010() {
    double len = -Double.POSITIVE_INFINITY;
    try {
    Int8Array arr = new Int8Array(len);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(1.7976931348623157e308) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_1100
     * @tc.name int8ArrayConstructorPart03Test011
     * @tc.desc Verify new Int8Array(1.7976931348623157e308) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test011() {
    double len = 1.7976931348623157e308;
    try {
    Int8Array arr = new Int8Array(len);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(-1) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_1300
     * @tc.name int8ArrayConstructorPart03Test013
     * @tc.desc Verify new Int8Array(-1) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test013() {
    int len = -1;
    try {
    Int8Array arr = new Int8Array(len);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(9007199254740992) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_1400
     * @tc.name int8ArrayConstructorPart03Test014
     * @tc.desc Verify new Int8Array(9007199254740992) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test014() {
    long len = 9007199254740992L;
    try {
    Int8Array arr = new Int8Array(len);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_1500
     * @tc.name int8ArrayConstructorPart03Test015
     * @tc.desc Verify length on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test015() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertEqual(len, arr.length());
    }

    /**
     * Verify length expects 8 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_1700
     * @tc.name int8ArrayConstructorPart03Test017
     * @tc.desc Verify length expects 8 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test017() {
    int len = 8;
    Int8Array arr = new Int8Array(len);
    assertEqual(8, arr.length());
    }

    /**
     * Verify byteOffset of new Int8Array(len) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_1800
     * @tc.name int8ArrayConstructorPart03Test018
     * @tc.desc Verify byteOffset of new Int8Array(len) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test018() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify buffer.byteLength of new Int8Array(len) returns 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_1900
     * @tc.name int8ArrayConstructorPart03Test019
     * @tc.desc Verify buffer.byteLength of new Int8Array(len) returns 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test019() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertEqual(4, arr.buffer().byteLength());
    }

    /**
     * Verify equals 1 for Int8Array BYTES_PER_ELEMENT on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_2000
     * @tc.name int8ArrayConstructorPart03Test020
     * @tc.desc Verify equals 1 for Int8Array BYTES_PER_ELEMENT on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test020() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify arr.buffer returns the same underlying ArrayBuffer reference on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_2100
     * @tc.name int8ArrayConstructorPart03Test021
     * @tc.desc Verify arr.buffer returns the same underlying ArrayBuffer reference on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test021() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    ArrayBuffer buf1 = arr.buffer();
    ArrayBuffer buf2 = arr.buffer();
    Int8Array other = new Int8Array(4);
    assertEqual(buf2, buf1);
    assertNotEqual(other.buffer(), buf1);
    }

    /**
     * Verify new Int8Array(len) constructor creates independent buffers: arr1.$_set(0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_2200
     * @tc.name int8ArrayConstructorPart03Test022
     * @tc.desc Verify new Int8Array(len) constructor creates independent buffers: arr1.$_set(0
     * , 99) does not affect arr2.$_get(0) expects 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test022() {
    int len = 4;
    Int8Array arr1 = new Int8Array(len);
    Int8Array arr2 = new Int8Array(len);
    assertEqual(4, arr1.buffer().byteLength());
    assertEqual(4, arr2.buffer().byteLength());
    arr1.set(0, 99);
    assertEqualInt(0, arr2.get(0));
    }

    /**
     * Verify $_get expects 0, with $_get(0), $_get(1), $_get(2), $_get(3), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_2300
     * @tc.name int8ArrayConstructorPart03Test023
     * @tc.desc Verify $_get expects 0, with $_get(0), $_get(1), $_get(2), $_get(3), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test023() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify $_get expects 0, with $_get(0), on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_2400
     * @tc.name int8ArrayConstructorPart03Test024
     * @tc.desc Verify $_get expects 0, with $_get(0), on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test024() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects 0, with $_get(3), on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_2500
     * @tc.name int8ArrayConstructorPart03Test025
     * @tc.desc Verify $_get expects 0, with $_get(3), on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test025() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify toString() returns empty string on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_2600
     * @tc.name int8ArrayConstructorPart03Test026
     * @tc.desc Verify toString() returns empty string on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test026() {
    int len = 0;
    Int8Array arr = new Int8Array(len);
    assertEqual("", String.valueOf(arr));
    }

    /**
     * Verify new Int8Array(len) constructor toString equals '0, 0, 0, 0'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_2700
     * @tc.name int8ArrayConstructorPart03Test027
     * @tc.desc Verify new Int8Array(len) constructor toString equals '0, 0, 0, 0'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test027() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertEqual("0,0,0,0", String.valueOf(arr));
    }

    /**
     * Verify $_get expects 42 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_2800
     * @tc.name int8ArrayConstructorPart03Test028
     * @tc.desc Verify $_get expects 42 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test028() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    arr.set(0, 42);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify at expects 0, with at(0), on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_2900
     * @tc.name int8ArrayConstructorPart03Test029
     * @tc.desc Verify at expects 0, with at(0), on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test029() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertEqualInt(0, arr.at(0));
    }

    /**
     * Verify at expects 0, with at(-1), on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_3000
     * @tc.name int8ArrayConstructorPart03Test030
     * @tc.desc Verify at expects 0, with at(-1), on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test030() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertEqualInt(0, arr.at(-1));
    }

    /**
     * Verify at returns undefined, with at(4), on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_3100
     * @tc.name int8ArrayConstructorPart03Test031
     * @tc.desc Verify at returns undefined, with at(4), on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test031() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertNull(arr.at(4));
    }

    /**
     * Verify at returns undefined, with at(-5), on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_3200
     * @tc.name int8ArrayConstructorPart03Test032
     * @tc.desc Verify at returns undefined, with at(-5), on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test032() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertNull(arr.at(-5));
    }

    /**
     * Verify includes, with includes(0), on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_3300
     * @tc.name int8ArrayConstructorPart03Test033
     * @tc.desc Verify includes, with includes(0), on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test033() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertTrue(arr.includes(0));
    }

    /**
     * Verify includes, with includes(1), on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_3400
     * @tc.name int8ArrayConstructorPart03Test034
     * @tc.desc Verify includes, with includes(1), on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test034() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertFalse(arr.includes(1));
    }

    /**
     * Verify indexOf expects 0 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_3500
     * @tc.name int8ArrayConstructorPart03Test035
     * @tc.desc Verify indexOf expects 0 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test035() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertEqual(0, arr.indexOf(0));
    }

    /**
     * Verify indexOf expects -1 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_3600
     * @tc.name int8ArrayConstructorPart03Test036
     * @tc.desc Verify indexOf expects -1 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test036() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertEqual(-1, arr.indexOf(1));
    }

    /**
     * Verify lastIndexOf expects 3 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_3700
     * @tc.name int8ArrayConstructorPart03Test037
     * @tc.desc Verify lastIndexOf expects 3 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test037() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    assertEqual(3, arr.lastIndexOf(0));
    }

    /**
     * Verify fill expects INT8_MAX on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_3800
     * @tc.name int8ArrayConstructorPart03Test038
     * @tc.desc Verify fill expects INT8_MAX on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test038() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    arr.fill(INT8_MAX);
    assertEqualInt(INT8_MAX, arr.get(0));
    assertEqualInt(INT8_MAX, arr.get(3));
    }

    /**
     * Verify fill expects -128 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_3900
     * @tc.name int8ArrayConstructorPart03Test039
     * @tc.desc Verify fill expects -128 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test039() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    arr.fill(128);
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify reverse expects arr on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_4000
     * @tc.name int8ArrayConstructorPart03Test040
     * @tc.desc Verify reverse expects arr on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test040() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    Int8Array result = arr.reverse();
    assertEqual(arr, result);
    }

    /**
     * Verify every() returns true for zero-filled new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_4100
     * @tc.name int8ArrayConstructorPart03Test041
     * @tc.desc Verify every() returns true for zero-filled new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test041() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    boolean result = arr.every((x) -> {
        return x == 0;
        });
    assertTrue(result);
    }

    /**
     * Verify some() returns false for zero-filled new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_4200
     * @tc.name int8ArrayConstructorPart03Test042
     * @tc.desc Verify some() returns false for zero-filled new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test042() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    boolean result = arr.some((x) -> {
        return x != 0;
        });
    assertFalse(result);
    }

    /**
     * Verify find expects 0 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_4300
     * @tc.name int8ArrayConstructorPart03Test043
     * @tc.desc Verify find expects 0 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test043() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    Integer result = arr.find((x) -> {
        return x == 0;
        });
    assertEqualInt(0, result);
    }

    /**
     * Verify findIndex expects 0 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_4400
     * @tc.name int8ArrayConstructorPart03Test044
     * @tc.desc Verify findIndex expects 0 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test044() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    int result = arr.findIndex((x) -> {
        return x == 0;
        });
    assertEqual(0, result);
    }

    /**
     * Verify forEach expects 4 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_4500
     * @tc.name int8ArrayConstructorPart03Test045
     * @tc.desc Verify forEach expects 4 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test045() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    int[] count = {0};
    arr.forEach((x) -> {
    if (x < INT8_MIN || x > INT8_MAX) {
    return;
    }
    count[0] = count[0] + 1;
    });
    assertEqual(4, count[0]);
    }

    /**
     * Verify map expects 1 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_4600
     * @tc.name int8ArrayConstructorPart03Test046
     * @tc.desc Verify map expects 1 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test046() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    Int8Array mapped = arr.map((x) -> {
        return x + 1;
        });
    assertEqualInt(1, mapped.get(0));
    assertEqualInt(1, mapped.get(3));
    }

    /**
     * Verify with(0, INT8_MAX) returns new Int8Array with $_get(0) equals INT8_MAX and original unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_4900
     * @tc.name int8ArrayConstructorPart03Test049
     * @tc.desc Verify with(0, INT8_MAX) returns new Int8Array with $_get(0) equals INT8_MAX and original unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test049() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    Int8Array newArr = arr.with(0, INT8_MAX);
    assertEqualInt(INT8_MAX, newArr.get(0));
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify with(0, 128) on new Int8Array(len) returns $_get(0) equals -128 due to int8 overflow
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_5000
     * @tc.name int8ArrayConstructorPart03Test050
     * @tc.desc Verify with(0, 128) on new Int8Array(len) returns $_get(0) equals -128 due to int8 overflow
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test050() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    Int8Array newArr = arr.with(0, 128);
    assertEqualInt(-128, newArr.get(0));
    }

    /**
     * Verify toReversed() on new Int8Array returns 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_5100
     * @tc.name int8ArrayConstructorPart03Test051
     * @tc.desc Verify toReversed() on new Int8Array returns 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test051() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    arr.set(0, 1);
    arr.set(3, 2);
    Int8Array reversed = arr.toReversed();
    assertEqualInt(2, reversed.get(0));
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify toSorted() on new Int8Array(len) returns sorted copy with $_get(0) equal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_5200
     * @tc.name int8ArrayConstructorPart03Test052
     * @tc.desc Verify toSorted() on new Int8Array(len) returns sorted copy with $_get(0) equals 1 and original
     * unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test052() {
    int len = 3;
    Int8Array arr = new Int8Array(len);
    arr.set(0, 3);
    arr.set(1, 1);
    arr.set(2, 2);
    Int8Array sorted = arr.toSorted();
    assertEqualInt(1, sorted.get(0));
    assertEqualInt(3, arr.get(0));
    }

    /**
     * Verify $_get expects RangeError throws exception, with $_get(4), on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_5300
     * @tc.name int8ArrayConstructorPart03Test053
     * @tc.desc Verify $_get expects RangeError throws exception, with $_get(4), on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test053() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    try {
    arr.get(4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_5400
     * @tc.name int8ArrayConstructorPart03Test054
     * @tc.desc Verify $_set expects RangeError throws exception on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test054() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    try {
    arr.set(-5, INT8_MAX);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get expects RangeError throws exception, with $_get(-5), on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_5500
     * @tc.name int8ArrayConstructorPart03Test055
     * @tc.desc Verify $_get expects RangeError throws exception, with $_get(-5), on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test055() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    try {
    arr.get(-5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify with(4, 0) throws RangeError, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_5600
     * @tc.name int8ArrayConstructorPart03Test056
     * @tc.desc Verify with(4, 0) throws RangeError, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test056() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    try {
    arr.with(4, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify with(-5, 0) throws RangeError, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_5700
     * @tc.name int8ArrayConstructorPart03Test057
     * @tc.desc Verify with(-5, 0) throws RangeError, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test057() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    try {
    arr.with(-5, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get expects -128, on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_5800
     * @tc.name int8ArrayConstructorPart03Test058
     * @tc.desc Verify $_get expects -128, on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test058() {
    int len = 1;
    Int8Array arr = new Int8Array(len);
    arr.set(0, 128);
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify $_get expects 0, with $_get(0), after $_set(0, 256), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_5900
     * @tc.name int8ArrayConstructorPart03Test059
     * @tc.desc Verify $_get expects 0, with $_get(0), after $_set(0, 256), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test059() {
    int len = 1;
    Int8Array arr = new Int8Array(len);
    arr.set(0, 256);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects -1 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_6000
     * @tc.name int8ArrayConstructorPart03Test060
     * @tc.desc Verify $_get expects -1 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test060() {
    int len = 1;
    Int8Array arr = new Int8Array(len);
    arr.set(0, 255);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_6100
     * @tc.name int8ArrayConstructorPart03Test061
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test061() {
    int len = 1;
    Int8Array arr = new Int8Array(len);
    arr.set(0, -129);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_get expects 0, with $_get(0), after $_set(0, -256), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_6200
     * @tc.name int8ArrayConstructorPart03Test062
     * @tc.desc Verify $_get expects 0, with $_get(0), after $_set(0, -256), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test062() {
    int len = 1;
    Int8Array arr = new Int8Array(len);
    arr.set(0, -256);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects 0, with $_get(0), after $_set(0, Number.NaN), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_6300
     * @tc.name int8ArrayConstructorPart03Test063
     * @tc.desc Verify $_get expects 0, with $_get(0), after $_set(0, Number.NaN), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test063() {
    int len = 1;
    Int8Array arr = new Int8Array(len);
    arr.set(0, Double.NaN);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects 1, on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_6400
     * @tc.name int8ArrayConstructorPart03Test064
     * @tc.desc Verify $_get expects 1, on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test064() {
    int len = 1;
    Int8Array arr = new Int8Array(len);
    arr.set(0, 1.9);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify $_get expects INT8_MAX from ArrayBuffer on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_6500
     * @tc.name int8ArrayConstructorPart03Test065
     * @tc.desc Verify $_get expects INT8_MAX from ArrayBuffer on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test065() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    ArrayBuffer buf = arr.buffer();
    Int8Array view = new Int8Array(buf);
    arr.set(0, INT8_MAX);
    assertEqualInt(INT8_MAX, view.get(0));
    }

    /**
     * Verify $_get expects 99 from ArrayBuffer on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_6600
     * @tc.name int8ArrayConstructorPart03Test066
     * @tc.desc Verify $_get expects 99 from ArrayBuffer on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test066() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    ArrayBuffer buf = arr.buffer();
    Int8Array view = new Int8Array(buf);
    view.set(1, 99);
    assertEqualInt(99, arr.get(1));
    }

    /**
     * Verify $_get expects 10 from ArrayBuffer on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_6700
     * @tc.name int8ArrayConstructorPart03Test067
     * @tc.desc Verify $_get expects 10 from ArrayBuffer on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test067() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    ArrayBuffer buf = arr.buffer();
    Int8Array view = new Int8Array(buf);
    arr.set(0, 10);
    view.set(1, 20);
    assertEqualInt(10, view.get(0));
    assertEqualInt(20, arr.get(1));
    }

    /**
     * Verify $_get expects 50 from ArrayBuffer on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_6800
     * @tc.name int8ArrayConstructorPart03Test068
     * @tc.desc Verify $_get expects 50 from ArrayBuffer on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test068() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    ArrayBuffer buf = arr.buffer();
    Int8Array view2 = new Int8Array(buf);
    Int8Array view3 = new Int8Array(buf);
    arr.set(0, 50);
    assertEqualInt(50, view2.get(0));
    assertEqualInt(50, view3.get(0));
    }

    /**
     * Verify subarray(0, 2) shares buffer, $_set on subarray reflected in original ex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_7000
     * @tc.name int8ArrayConstructorPart03Test070
     * @tc.desc Verify subarray(0, 2) shares buffer, $_set on subarray reflected in original expects INT8_MAX on new
     * Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test070() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    Int8Array sub = arr.subarray(0, 2);
    sub.set(0, INT8_MAX);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify subarray(1, 3) shares buffer, modification is bidirectional expects -128 on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_7100
     * @tc.name int8ArrayConstructorPart03Test071
     * @tc.desc Verify subarray(1, 3) shares buffer, modification is bidirectional expects -128 on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test071() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    Int8Array sub = arr.subarray(1, 3);
    arr.set(1, -128);
    assertEqualInt(-128, sub.get(0));
    }

    /**
     * Verify slice(0, 2) creates independent copy and $_set on copy does not affect o
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_7200
     * @tc.name int8ArrayConstructorPart03Test072
     * @tc.desc Verify slice(0, 2) creates independent copy and $_set on copy does not affect original on new
     * Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test072() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    Int8Array copy = arr.slice(0, 2);
    copy.set(0, INT8_MAX);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify subarray(1, 3) byteOffset on new Int8Array(len)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_7300
     * @tc.name int8ArrayConstructorPart03Test073
     * @tc.desc Verify subarray(1, 3) byteOffset on new Int8Array(len)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test073() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    Int8Array sub = arr.subarray(1, 3);
    assertEqual(1, sub.byteOffset());
    }

    /**
     * Verify buffer.byteLength is 4 on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_7400
     * @tc.name int8ArrayConstructorPart03Test074
     * @tc.desc Verify buffer.byteLength is 4 on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test074() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    ArrayBuffer buf = arr.buffer();
    arr.set(0, INT8_MAX);
    assertEqual(4, buf.byteLength());
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(4) OOB index, on n
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_7500
     * @tc.name int8ArrayConstructorPart03Test075
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(4) OOB index, on new Int8Array(len), and
     * verify arr.length and arr.$_get(0) are unaffected after
     * exception
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test075() {
    int len = 4;
    Int8Array arr = new Int8Array(len);
    try {
    arr.set(4, INT8_MAX);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(4, arr.length());
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects 0, with $_get(0), after $_set(0, Number.POSITIVE_INFINITY), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART03_TEST_7700
     * @tc.name int8ArrayConstructorPart03Test077
     * @tc.desc Verify $_get expects 0, with $_get(0), after $_set(0, Number.POSITIVE_INFINITY), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart03Test077() {
    int len = 1;
    Int8Array arr = new Int8Array(len);
    arr.set(0, Double.POSITIVE_INFINITY);
    assertEqualInt(0, arr.get(0));
    }
}
