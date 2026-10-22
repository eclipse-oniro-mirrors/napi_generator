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

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayIndexSetPart05Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIndexSetPart05Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify $_set then $_get expects 42, with $_get(1), on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_0100
     * @tc.name int8ArrayIndexSetPart05Test001
     * @tc.desc Verify $_set then $_get expects 42, with $_get(1), on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test001() {
    Int8Array arr = new Int8Array(3);
    int v = 42;
    arr.set(1, v);
    assertEqualInt(42, arr.get(1));
    }

    /**
     * Verify $_set(1, 42) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_0200
     * @tc.name int8ArrayIndexSetPart05Test002
     * @tc.desc Verify $_set(1, 42) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test002() {
    Int8Array arr = new Int8Array(3);
    arr.set(1, 42);
    assertEqualInt(42, arr.get(1));
    }

    /**
     * Verify $_set then $_get expects 11, on new Int8Array(new int[] {0, 0, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_0300
     * @tc.name int8ArrayIndexSetPart05Test003
     * @tc.desc Verify $_set then $_get expects 11, on new Int8Array(new int[] {0, 0, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test003() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    int v = 11;
    arr.set(0, v);
    assertEqualInt(11, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 22
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_0400
     * @tc.name int8ArrayIndexSetPart05Test004
     * @tc.desc Verify $_set then $_get expects 22
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test004() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    int v = 22;
    arr.set(1, v);
    assertEqualInt(22, arr.get(1));
    }

    /**
     * Verify $_set(2, v) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_0500
     * @tc.name int8ArrayIndexSetPart05Test005
     * @tc.desc Verify $_set(2, v) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test005() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    int v = 33;
    arr.set(2, v);
    assertEqualInt(33, arr.get(2));
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-1, v), on new Int8Array(new int[] {0, 0, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_0600
     * @tc.name int8ArrayIndexSetPart05Test006
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-1, v), on new Int
     * 8Array(new int[] {0, 0, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test006() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    int v = 44;
    try {
    arr.set(-1, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(-2, 66) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_0700
     * @tc.name int8ArrayIndexSetPart05Test007
     * @tc.desc Verify $_set(-2, 66) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test007() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    try {
    arr.set(-2, 66);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(-3, 77) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_0800
     * @tc.name int8ArrayIndexSetPart05Test008
     * @tc.desc Verify $_set(-3, 77) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test008() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    int v = 77;
    try {
    arr.set(-3, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(-4, 50) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_0900
     * @tc.name int8ArrayIndexSetPart05Test009
     * @tc.desc Verify $_set(-4, 50) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test009() {
    Int8Array arr = new Int8Array(new int[] {3, 6, 9});
    try {
    arr.set(-4, 50);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-2147483648, 99),
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_1000
     * @tc.name int8ArrayIndexSetPart05Test010
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-2147483648, 99),
     * on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test010() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    arr.set(Integer.MIN_VALUE, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(0, 42) on new Int8Array(0) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_1100
     * @tc.name int8ArrayIndexSetPart05Test011
     * @tc.desc Verify $_set(0, 42) on new Int8Array(0) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test011() {
    Int8Array arr = new Int8Array(0);
    try {
    arr.set(0, 42);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-1, v), on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_1200
     * @tc.name int8ArrayIndexSetPart05Test012
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-1, v), on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test012() {
    Int8Array arr = new Int8Array(0);
    int v = 42;
    try {
    arr.set(-1, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set then $_get expects 88
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_1300
     * @tc.name int8ArrayIndexSetPart05Test013
     * @tc.desc Verify $_set then $_get expects 88
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test013() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = 88;
    arr.set(0, v);
    assertEqualInt(88, arr.get(0));
    }

    /**
     * Verify $_set(-1, 88) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_1400
     * @tc.name int8ArrayIndexSetPart05Test014
     * @tc.desc Verify $_set(-1, 88) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test014() {
    Int8Array arr = new Int8Array(new int[] {0});
    try {
    arr.set(-1, 88);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set then $_get expects -128, after $_set(0, INT8_MIN), on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_1500
     * @tc.name int8ArrayIndexSetPart05Test015
     * @tc.desc Verify $_set then $_get expects -128, after $_set(0, INT8_MIN), on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test015() {
    Int8Array arr = new Int8Array(2);
    int v = INT8_MIN;
    arr.set(0, v);
    Integer r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_set then $_get expects INT8_MAX, after $_set(0, INT8_MAX), on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_1600
     * @tc.name int8ArrayIndexSetPart05Test016
     * @tc.desc Verify $_set then $_get expects INT8_MAX, after $_set(0, INT8_MAX), on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test016() {
    Int8Array arr = new Int8Array(2);
    int v = INT8_MAX;
    arr.set(0, v);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 0, on new Int8Array(new int[] {9, 9})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_1700
     * @tc.name int8ArrayIndexSetPart05Test017
     * @tc.desc Verify $_set then $_get expects 0, on new Int8Array(new int[] {9, 9})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test017() {
    Int8Array arr = new Int8Array(new int[] {9, 9});
    int v = 0;
    arr.set(0, v);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_1800
     * @tc.name int8ArrayIndexSetPart05Test018
     * @tc.desc Verify $_set then $_get expects -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test018() {
    Int8Array arr = new Int8Array(new int[] {9, 9});
    int v = -1;
    arr.set(0, v);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_1900
     * @tc.name int8ArrayIndexSetPart05Test019
     * @tc.desc Verify $_set then $_get expects 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test019() {
    Int8Array arr = new Int8Array(new int[] {9, 9});
    int v = 1;
    arr.set(1, v);
    assertEqualInt(1, arr.get(1));
    }

    /**
     * Verify $_set(0, INT8_MAX) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_2000
     * @tc.name int8ArrayIndexSetPart05Test020
     * @tc.desc Verify $_set(0, INT8_MAX) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test020() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, INT8_MAX);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_set(0, -128) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_2100
     * @tc.name int8ArrayIndexSetPart05Test021
     * @tc.desc Verify $_set(0, -128) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test021() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, -128);
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify $_set(1, 50) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_2200
     * @tc.name int8ArrayIndexSetPart05Test022
     * @tc.desc Verify $_set(1, 50) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test022() {
    Int8Array arr = new Int8Array(2);
    arr.set(1, 50);
    assertEqualInt(50, arr.get(1));
    }

    /**
     * Verify $_set(0, 128) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_2300
     * @tc.name int8ArrayIndexSetPart05Test023
     * @tc.desc Verify $_set(0, 128) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test023() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 128);
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify $_set(0, -129) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_2400
     * @tc.name int8ArrayIndexSetPart05Test024
     * @tc.desc Verify $_set(0, -129) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test024() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, -129);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_set(0, 255) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_2500
     * @tc.name int8ArrayIndexSetPart05Test025
     * @tc.desc Verify $_set(0, 255) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test025() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 255);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_set(0, 256) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_2600
     * @tc.name int8ArrayIndexSetPart05Test026
     * @tc.desc Verify $_set(0, 256) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test026() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 256);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects -56
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_2800
     * @tc.name int8ArrayIndexSetPart05Test028
     * @tc.desc Verify $_set then $_get expects -56
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test028() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 200);
    assertEqualInt(-56, arr.get(0));
    }

    /**
     * Verify $_set(0, 257) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_2900
     * @tc.name int8ArrayIndexSetPart05Test029
     * @tc.desc Verify $_set(0, 257) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test029() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 257);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify $_set(0, Number.NaN) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_3000
     * @tc.name int8ArrayIndexSetPart05Test030
     * @tc.desc Verify $_set(0, Number.NaN) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test030() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, Double.NaN);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set(0, 1.9) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_3100
     * @tc.name int8ArrayIndexSetPart05Test031
     * @tc.desc Verify $_set(0, 1.9) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test031() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 1.9);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify $_set(0, -1.9) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_3200
     * @tc.name int8ArrayIndexSetPart05Test032
     * @tc.desc Verify $_set(0, -1.9) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test032() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, -1.9);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_set(0, -0.0) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_3300
     * @tc.name int8ArrayIndexSetPart05Test033
     * @tc.desc Verify $_set(0, -0.0) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test033() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, -0.0);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set(0, 0.5) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_3400
     * @tc.name int8ArrayIndexSetPart05Test034
     * @tc.desc Verify $_set(0, 0.5) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test034() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 0.5);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set(0, -0.5) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_3500
     * @tc.name int8ArrayIndexSetPart05Test035
     * @tc.desc Verify $_set(0, -0.5) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test035() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, -0.5);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set(0, 127.5) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_3600
     * @tc.name int8ArrayIndexSetPart05Test036
     * @tc.desc Verify $_set(0, 127.5) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test036() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 127.5);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_set(0, -128.5) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_3700
     * @tc.name int8ArrayIndexSetPart05Test037
     * @tc.desc Verify $_set(0, -128.5) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test037() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, -128.5);
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify $_set(0, 50) writes 50 on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_3800
     * @tc.name int8ArrayIndexSetPart05Test038
     * @tc.desc Verify $_set(0, 50) writes 50 on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test038() {
    Int8Array a = new Int8Array(2);
    Int8Array b = new Int8Array(2);
    a.set(0, 50);
    b.set(0, 50);
    Integer r1 = a.get(0);
    int e1 = 50;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_set(0, -100) writes -100 on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_3900
     * @tc.name int8ArrayIndexSetPart05Test039
     * @tc.desc Verify $_set(0, -100) writes -100 on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test039() {
    Int8Array a = new Int8Array(2);
    Int8Array b = new Int8Array(2);
    a.set(0, -100);
    b.set(0, -100);
    Integer r1 = a.get(0);
    int e1 = -100;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_set then $_get expects 30
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_4000
     * @tc.name int8ArrayIndexSetPart05Test040
     * @tc.desc Verify $_set then $_get expects 30
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test040() {
    Int8Array arr = new Int8Array(2);
    int v = 30;
    arr.set(0, v);
    arr.set(1, 70);
    assertEqualInt(30, arr.get(0));
    assertEqualInt(70, arr.get(1));
    }

    /**
     * Verify $_set then $_get expects 0, on new Int8Array(new int[] {0, 0, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_4100
     * @tc.name int8ArrayIndexSetPart05Test041
     * @tc.desc Verify $_set then $_get expects 0, on new Int8Array(new int[] {0, 0, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test041() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    int v = 73;
    arr.set(1, v);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(73, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify $_set(1, 200) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_4200
     * @tc.name int8ArrayIndexSetPart05Test042
     * @tc.desc Verify $_set(1, 200) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test042() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(1, 200);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(-56, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify $_set(0, 42) writes 42 and length remains 3 on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_4300
     * @tc.name int8ArrayIndexSetPart05Test043
     * @tc.desc Verify $_set(0, 42) writes 42 and length remains 3 on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test043() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, 42);
    Integer r1 = arr.get(0);
    int e1 = 42;
    assertEqualInt(e1, r1);
    int r2 = arr.length();
    int e2 = 3;
    assertEqual(e2, r2);
    }

    /**
     * Verify $_set(0, 200) truncates to -56 and length remains 3 on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_4400
     * @tc.name int8ArrayIndexSetPart05Test044
     * @tc.desc Verify $_set(0, 200) truncates to -56 and length remains 3 on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test044() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, 200);
    Integer r1 = arr.get(0);
    int e1 = -56;
    assertEqualInt(e1, r1);
    int r2 = arr.length();
    int e2 = 3;
    assertEqual(e2, r2);
    }

    /**
     * Verify $_set then $_get expects 20
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_4500
     * @tc.name int8ArrayIndexSetPart05Test045
     * @tc.desc Verify $_set then $_get expects 20
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test045() {
    Int8Array arr = new Int8Array(2);
    int v = 10;
    arr.set(0, v);
    arr.set(0, 20);
    assertEqualInt(20, arr.get(0));
    }

    /**
     * Verify $_set(0, 20) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_4600
     * @tc.name int8ArrayIndexSetPart05Test046
     * @tc.desc Verify $_set(0, 20) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test046() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 20);
    int v = 10;
    arr.set(0, v);
    assertEqualInt(10, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 11, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_4700
     * @tc.name int8ArrayIndexSetPart05Test047
     * @tc.desc Verify $_set then $_get expects 11, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test047() {
    Int8Array arr = new Int8Array(3);
    int v = 11;
    arr.set(0, v);
    arr.set(2, 33);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(33, arr.get(2));
    }

    /**
     * Verify $_set(0, 41) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_4800
     * @tc.name int8ArrayIndexSetPart05Test048
     * @tc.desc Verify $_set(0, 41) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test048() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 41);
    assertEqualInt(41, arr.get(0));
    arr.set(0, 52);
    assertEqualInt(52, arr.get(0));
    }

    /**
     * Verify $_set(0, 99) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_4900
     * @tc.name int8ArrayIndexSetPart05Test049
     * @tc.desc Verify $_set(0, 99) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test049() {
    Int8Array arr = new Int8Array(new int[] {15, 25});
    arr.set(0, 99);
    assertEqualInt(99, arr.get(0));
    assertEqualInt(25, arr.get(1));
    }

    /**
     * Verify $_set(0, 0) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_5000
     * @tc.name int8ArrayIndexSetPart05Test050
     * @tc.desc Verify $_set(0, 0) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test050() {
    Int8Array arr = new Int8Array(new int[] {80, 90});
    arr.set(0, 0);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects 42, with $_get(0), on new Int8Array(new int[] {42, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_5100
     * @tc.name int8ArrayIndexSetPart05Test051
     * @tc.desc Verify $_set then $_get expects 42, with $_get(0), on new Int8Array(new int[] {42, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test051() {
    Int8Array arr = new Int8Array(new int[] {42, 0});
    int v = 42;
    arr.set(0, v);
    arr.set(0, v);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects INT8_MAX, after $_set(0, -128), on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_5200
     * @tc.name int8ArrayIndexSetPart05Test052
     * @tc.desc Verify $_set then $_get expects INT8_MAX, after $_set(0, -128), on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test052() {
    Int8Array arr = new Int8Array(2);
    int min = -128;
    int max = INT8_MAX;
    arr.set(0, min);
    arr.set(0, max);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_set then $_get expects -128, after $_set(0, -128), on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_5300
     * @tc.name int8ArrayIndexSetPart05Test053
     * @tc.desc Verify $_set then $_get expects -128, after $_set(0, -128), on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test053() {
    Int8Array arr = new Int8Array(2);
    int min = -128;
    int max = INT8_MAX;
    arr.set(0, min);
    arr.set(1, max);
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(INT8_MAX, arr.get(1));
    }

    /**
     * Verify $_set(-2, 99) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_5400
     * @tc.name int8ArrayIndexSetPart05Test054
     * @tc.desc Verify $_set(-2, 99) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test054() {
    Int8Array arr = new Int8Array(new int[] {7});
    try {
    arr.set(-2, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-2147483648, 99), on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_5500
     * @tc.name int8ArrayIndexSetPart05Test055
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-2147483648, 99), on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test055() {
    Int8Array arr = new Int8Array(2);
    try {
    arr.set(Integer.MIN_VALUE, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(-10, Number.NaN) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_5600
     * @tc.name int8ArrayIndexSetPart05Test056
     * @tc.desc Verify $_set(-10, Number.NaN) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test056() {
    Int8Array arr = new Int8Array(new int[] {5, 10});
    try {
    arr.set(-10, Double.NaN);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(-1, -128) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_5700
     * @tc.name int8ArrayIndexSetPart05Test057
     * @tc.desc Verify $_set(-1, -128) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test057() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    int v = -128;
    try {
    arr.set(-1, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(1, Number.NaN) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_5800
     * @tc.name int8ArrayIndexSetPart05Test058
     * @tc.desc Verify $_set(1, Number.NaN) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test058() {
    Int8Array arr = new Int8Array(new int[] {9, 9, 9});
    arr.set(1, Double.NaN);
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify $_set(2, 200) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_5900
     * @tc.name int8ArrayIndexSetPart05Test059
     * @tc.desc Verify $_set(2, 200) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test059() {
    Int8Array arr = new Int8Array(new int[] {9, 9, 9});
    arr.set(2, 200);
    assertEqualInt(-56, arr.get(2));
    }

    /**
     * Verify $_set(3, 100) on new Int8Array(new int[] {7, 8, 9}) throws RangeError and elements unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_6000
     * @tc.name int8ArrayIndexSetPart05Test060
     * @tc.desc Verify $_set(3, 100) on new Int8Array(new int[] {7, 8, 9}) throws RangeError and elements unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test060() {
    Int8Array arr = new Int8Array(new int[] {7, 8, 9});
    try {
    arr.set(3, 100);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(7, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(9, arr.get(2));
    }

    /**
     * Verify $_set expects RangeError throws exception, on new Int8Array(new int[] {7, 8, 9})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_6100
     * @tc.name int8ArrayIndexSetPart05Test061
     * @tc.desc Verify $_set expects RangeError throws exception, on new Int8Array(new int[] {7, 8, 9})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test061() {
    Int8Array arr = new Int8Array(new int[] {7, 8, 9});
    int v = 55;
    try {
    arr.set(4, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(7, arr.get(0));
    assertEqualInt(9, arr.get(2));
    }

    /**
     * Verify $_set(2147483647, v) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_6200
     * @tc.name int8ArrayIndexSetPart05Test062
     * @tc.desc Verify $_set(2147483647, v) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test062() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int v = 99;
    try {
    arr.set(2147483647, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(1, arr.get(0));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify $_set expects RangeError throws exception, on new Int8Array(new int[] {5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_6300
     * @tc.name int8ArrayIndexSetPart05Test063
     * @tc.desc Verify $_set expects RangeError throws exception, on new Int8Array(new int[] {5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test063() {
    Int8Array arr = new Int8Array(new int[] {5});
    int v = 88;
    try {
    arr.set(1, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(5, arr.get(0));
    }

    /**
     * Verify $_set(10, 200) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_6400
     * @tc.name int8ArrayIndexSetPart05Test064
     * @tc.desc Verify $_set(10, 200) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test064() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    arr.set(10, 200);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify $_set expects RangeError throws exception, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_6500
     * @tc.name int8ArrayIndexSetPart05Test065
     * @tc.desc Verify $_set expects RangeError throws exception, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test065() {
    Int8Array arr = new Int8Array(4);
    int v = 55;
    try {
    arr.set(4, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify $_set(100, 42) throws RangeError for out-of-bounds index and byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_6600
     * @tc.name int8ArrayIndexSetPart05Test066
     * @tc.desc Verify $_set(100, 42) throws RangeError for out-of-bounds index and byteLength
     * remains 3 on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test066() {
    Int8Array arr = new Int8Array(3);
    try {
    arr.set(100, 42);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    int r1 = arr.byteLength();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify $_set(0, Number.POSITIVE_INFINITY) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_6700
     * @tc.name int8ArrayIndexSetPart05Test067
     * @tc.desc Verify $_set(0, Number.POSITIVE_INFINITY) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test067() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, Double.POSITIVE_INFINITY);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set(0, -Number.POSITIVE_INFINITY) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_6800
     * @tc.name int8ArrayIndexSetPart05Test068
     * @tc.desc Verify $_set(0, -Number.POSITIVE_INFINITY) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart05Test068() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, -Double.POSITIVE_INFINITY);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set(0, 3.4028235e38) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART05_TEST_6900
     * @tc.name int8ArrayIndexSetPart05Test069
     * @tc.desc Verify $_set(0, 3.4028235e38) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
