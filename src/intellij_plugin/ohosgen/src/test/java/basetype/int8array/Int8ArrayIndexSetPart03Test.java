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
 * Int8ArrayIndexSetPart03Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIndexSetPart03Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify $_set(1, 99) then $_get(1) reads value 99 on new Int8Array(new int[] {3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_0100
     * @tc.name int8ArrayIndexSetPart03Test001
     * @tc.desc Verify $_set(1, 99) then $_get(1) reads value 99 on new Int8Array(new int[] {3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test001() {
    Int8Array arr = new Int8Array(new int[] {3, 4, 5});
    arr.set(1, 99);
    Integer resultValue = arr.get(1);
    int expectedValue = 99;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-2, 99), on new Int8Array(new int[] {10, 20, 30,
     * 40})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_0200
     * @tc.name int8ArrayIndexSetPart03Test002
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-2, 99), on new Int8Array(new int[] {10,
     * 20, 30, 40})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test002() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    try {
    arr.set(-2, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-4, 99), on new In
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_0300
     * @tc.name int8ArrayIndexSetPart03Test003
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-4, 99), on new Int8Array([10, 20, 30, 40,
     * 50])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test003() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(-4, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-1, 99), on new Int8Array(new int[] {7})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_0400
     * @tc.name int8ArrayIndexSetPart03Test004
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-1, 99), on new Int8Array(new int[] {7})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test004() {
    Int8Array arr = new Int8Array(new int[] {7});
    try {
    arr.set(-1, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-5, 99), on new Int8Array(new int[] {10, 20, 30,
     * 40})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_0500
     * @tc.name int8ArrayIndexSetPart03Test005
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-5, 99), on new Int8Array(new int[] {10,
     * 20, 30, 40})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test005() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    try {
    arr.set(-5, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-2, 99), on new Int8Array(new int[] {7})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_0600
     * @tc.name int8ArrayIndexSetPart03Test006
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-2, 99), on new Int8Array(new int[] {7})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test006() {
    Int8Array arr = new Int8Array(new int[] {7});
    try {
    arr.set(-2, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-2147483648, 99),
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_0700
     * @tc.name int8ArrayIndexSetPart03Test007
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-2147483648, 99),
     * on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test007() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    arr.set(Integer.MIN_VALUE, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(0, 99) then $_get(0) reads value 99 on new Int8Array(new int[] {7, 8, 9})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_0800
     * @tc.name int8ArrayIndexSetPart03Test008
     * @tc.desc Verify $_set(0, 99) then $_get(0) reads value 99 on new Int8Array(new int[] {7, 8, 9})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test008() {
    Int8Array arr = new Int8Array(new int[] {7, 8, 9});
    arr.set(0, 99);
    Integer resultValue = arr.get(0);
    int expectedValue = 99;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(4, 99) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_0900
     * @tc.name int8ArrayIndexSetPart03Test009
     * @tc.desc Verify $_set(4, 99) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test009() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    arr.set(4, 99);
    Integer resultValue = arr.get(4);
    int expectedValue = 99;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(1, 99) then $_get(1) reads value 99 on new Int8Array(new int[] {10, 20, 30, 40, 50})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_1000
     * @tc.name int8ArrayIndexSetPart03Test010
     * @tc.desc Verify $_set(1, 99) then $_get(1) reads value 99 on new Int8Array(new int[] {10, 20, 30, 40, 50})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test010() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    arr.set(1, 99);
    Integer resultValue = arr.get(1);
    int expectedValue = 99;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-5, 99), on new In
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_1100
     * @tc.name int8ArrayIndexSetPart03Test011
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-5, 99), on new Int8Array([10, 20, 30, 40,
     * 50])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test011() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(-5, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(0, 254) then $_get(0) reads truncated value -2 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_1200
     * @tc.name int8ArrayIndexSetPart03Test012
     * @tc.desc Verify $_set(0, 254) then $_get(0) reads truncated value -2 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test012() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = 254;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = -2;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, -254) then $_get(0) reads truncated value 2 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_1300
     * @tc.name int8ArrayIndexSetPart03Test013
     * @tc.desc Verify $_set(0, -254) then $_get(0) reads truncated value 2 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test013() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = -254;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = 2;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, v) then $_get(0) reads truncated value 1 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_1400
     * @tc.name int8ArrayIndexSetPart03Test014
     * @tc.desc Verify $_set(0, v) then $_get(0) reads truncated value 1 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test014() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = 257;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = 1;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, -257) then $_get(0) reads truncated value -1 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_1500
     * @tc.name int8ArrayIndexSetPart03Test015
     * @tc.desc Verify $_set(0, -257) then $_get(0) reads truncated value -1 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test015() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = -257;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = -1;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, -256) then $_get(0) reads truncated value 0 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_1600
     * @tc.name int8ArrayIndexSetPart03Test016
     * @tc.desc Verify $_set(0, -256) then $_get(0) reads truncated value 0 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test016() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = -256;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = 0;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, 2.5) then $_get(0) reads truncated value 2 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_1700
     * @tc.name int8ArrayIndexSetPart03Test017
     * @tc.desc Verify $_set(0, 2.5) then $_get(0) reads truncated value 2 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test017() {
    Int8Array arr = new Int8Array(new int[] {0});
    double v = 2.5;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = 2;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, -2.5) then $_get(0) reads truncated value -2 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_1800
     * @tc.name int8ArrayIndexSetPart03Test018
     * @tc.desc Verify $_set(0, -2.5) then $_get(0) reads truncated value -2 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test018() {
    Int8Array arr = new Int8Array(new int[] {0});
    double v = -2.5;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = -2;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, 2147483647) then $_get(0) reads truncated value -1 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_1900
     * @tc.name int8ArrayIndexSetPart03Test019
     * @tc.desc Verify $_set(0, 2147483647) then $_get(0) reads truncated value -1 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test019() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = 2147483647;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = -1;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, -2147483648) then $_get(0) reads truncated value 0 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_2000
     * @tc.name int8ArrayIndexSetPart03Test020
     * @tc.desc Verify $_set(0, -2147483648) then $_get(0) reads truncated value 0 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test020() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = Integer.MIN_VALUE;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = 0;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, v) then $_get(0) reads truncated value 64 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_2100
     * @tc.name int8ArrayIndexSetPart03Test021
     * @tc.desc Verify $_set(0, v) then $_get(0) reads truncated value 64 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test021() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = 1000000;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = 64;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, v) then $_get(0) reads truncated value -64 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_2200
     * @tc.name int8ArrayIndexSetPart03Test022
     * @tc.desc Verify $_set(0, v) then $_get(0) reads truncated value -64 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test022() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = -1000000;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = -64;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, v) then $_get(0) reads truncated value -56 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_2300
     * @tc.name int8ArrayIndexSetPart03Test023
     * @tc.desc Verify $_set(0, v) then $_get(0) reads truncated value -56 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test023() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = 200;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = -56;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, v) then $_get(0) reads truncated value 56 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_2400
     * @tc.name int8ArrayIndexSetPart03Test024
     * @tc.desc Verify $_set(0, v) then $_get(0) reads truncated value 56 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test024() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = -200;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = 56;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, v) then $_get(0) reads truncated value -126 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_2500
     * @tc.name int8ArrayIndexSetPart03Test025
     * @tc.desc Verify $_set(0, v) then $_get(0) reads truncated value -126 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test025() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = 130;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = -126;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, v) then $_get(0) reads truncated value 126 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_2600
     * @tc.name int8ArrayIndexSetPart03Test026
     * @tc.desc Verify $_set(0, v) then $_get(0) reads truncated value 126 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test026() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = -130;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = 126;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, 2.220446049250313e-16) then $_get(0) reads truncated value 0 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_2700
     * @tc.name int8ArrayIndexSetPart03Test027
     * @tc.desc Verify $_set(0, 2.220446049250313e-16) then $_get(0) reads truncated value 0 onnew Int8Array(new int[]
     * {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test027() {
    Int8Array arr = new Int8Array(new int[] {0});
    double v = 2.220446049250313e-16;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = 0;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, v) then $_get(0) reads truncated value INT8_MAX on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_2800
     * @tc.name int8ArrayIndexSetPart03Test028
     * @tc.desc Verify $_set(0, v) then $_get(0) reads truncated value INT8_MAX on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test028() {
    Int8Array arr = new Int8Array(new int[] {0});
    double v = 127.5;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = INT8_MAX;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, v) then $_get(0) reads truncated value -128 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_2900
     * @tc.name int8ArrayIndexSetPart03Test029
     * @tc.desc Verify $_set(0, v) then $_get(0) reads truncated value -128 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test029() {
    Int8Array arr = new Int8Array(new int[] {0});
    double v = -128.5;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = INT8_MIN;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(index, value: byte=32) and $_get returns 32
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_3000
     * @tc.name int8ArrayIndexSetPart03Test030
     * @tc.desc Verify $_set(index, value: byte=32) and $_get returns 32
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test030() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = 32;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = 32;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(index, value: byte=100) and $_get returns 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_3100
     * @tc.name int8ArrayIndexSetPart03Test031
     * @tc.desc Verify $_set(index, value: byte=100) and $_get returns 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test031() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = 100;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = 100;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(index, value: byte=-100) and $_get returns -100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_3200
     * @tc.name int8ArrayIndexSetPart03Test032
     * @tc.desc Verify $_set(index, value: byte=-100) and $_get returns -100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test032() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = -100;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = -100;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(index, value: byte=0) and $_get returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_3300
     * @tc.name int8ArrayIndexSetPart03Test033
     * @tc.desc Verify $_set(index, value: byte=0) and $_get returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test033() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = 0;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = 0;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(index, value: byte=-1) and $_get returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_3400
     * @tc.name int8ArrayIndexSetPart03Test034
     * @tc.desc Verify $_set(index, value: byte=-1) and $_get returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test034() {
    Int8Array arr = new Int8Array(new int[] {0});
    int v = -1;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = -1;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify number $_set(index, value=10.5) truncates to 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_3500
     * @tc.name int8ArrayIndexSetPart03Test035
     * @tc.desc Verify number $_set(index, value=10.5) truncates to 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test035() {
    Int8Array arr = new Int8Array(new int[] {0});
    double v = 10.5;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = 10;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, v) then $_get(0) reads truncated value -10 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_3600
     * @tc.name int8ArrayIndexSetPart03Test036
     * @tc.desc Verify $_set(0, v) then $_get(0) reads truncated value -10 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test036() {
    Int8Array arr = new Int8Array(new int[] {0});
    double v = -10.5;
    arr.set(0, v);
    Integer resultValue = arr.get(0);
    int expectedValue = -10;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(0, ve) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_3700
     * @tc.name int8ArrayIndexSetPart03Test037
     * @tc.desc Verify $_set(0, ve) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test037() {
    Int8Array arr1 = new Int8Array(new int[] {0});
    Int8Array arr2 = new Int8Array(new int[] {0});
    int ve = 32;
    int vn = 32;
    arr1.set(0, ve);
    arr2.set(0, vn);
    Integer resultValue = arr1.get(0);
    Integer expectedValue = arr2.get(0);
    assertEqual(expectedValue.intValue(), resultValue.intValue());
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(0, 99), on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_3800
     * @tc.name int8ArrayIndexSetPart03Test038
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(0, 99), on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test038() {
    Int8Array arr = new Int8Array(0);
    try {
    arr.set(0, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-1, 99), on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_3900
     * @tc.name int8ArrayIndexSetPart03Test039
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-1, 99), on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test039() {
    Int8Array arr = new Int8Array(0);
    try {
    arr.set(-1, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(2147483647, 99), on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_4000
     * @tc.name int8ArrayIndexSetPart03Test040
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(2147483647, 99), on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test040() {
    Int8Array arr = new Int8Array(0);
    try {
    arr.set(2147483647, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(0, 99) then $_get(0) reads value 99 on new Int8Array(new int[] {7})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_4100
     * @tc.name int8ArrayIndexSetPart03Test041
     * @tc.desc Verify $_set(0, 99) then $_get(0) reads value 99 on new Int8Array(new int[] {7})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test041() {
    Int8Array arr = new Int8Array(new int[] {7});
    arr.set(0, 99);
    Integer resultValue = arr.get(0);
    int expectedValue = 99;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(1, 10) then $_get(1) reads truncated value 10 on new Int8Array(new int[] {5, 5, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_4200
     * @tc.name int8ArrayIndexSetPart03Test042
     * @tc.desc Verify $_set(1, 10) then $_get(1) reads truncated value 10 on new Int8Array(new int[] {5, 5, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test042() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5});
    arr.set(1, 10);
    Integer resultValue = arr.get(1);
    int expectedValue = 10;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-2, 10), on new Int8Array(new int[] {5, 5, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_4300
     * @tc.name int8ArrayIndexSetPart03Test043
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-2, 10), on new Int8Array(new int[] {5, 5,
     * 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test043() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5});
    try {
    arr.set(-2, 10);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set(0, -128) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_4400
     * @tc.name int8ArrayIndexSetPart03Test044
     * @tc.desc Verify $_set(0, -128) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test044() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, INT8_MAX, INT8_MAX});
    arr.set(0, INT8_MIN);
    Integer resultValue = arr.get(0);
    int expectedValue = INT8_MIN;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(1, 1) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_4500
     * @tc.name int8ArrayIndexSetPart03Test045
     * @tc.desc Verify $_set(1, 1) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test045() {
    Int8Array arr = new Int8Array(new int[] {-1, -1, -1});
    arr.set(1, 1);
    Integer resultValue = arr.get(1);
    int expectedValue = 1;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(2, 100) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_4600
     * @tc.name int8ArrayIndexSetPart03Test046
     * @tc.desc Verify $_set(2, 100) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test046() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(2, 100);
    Integer resultValue = arr.get(2);
    int expectedValue = 100;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set(1, 10) does not affect $_get(0), still 5 on new Int8Array(new int[] {5, 5, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_4700
     * @tc.name int8ArrayIndexSetPart03Test047
     * @tc.desc Verify $_set(1, 10) does not affect $_get(0), still 5 on new Int8Array(new int[] {5, 5, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test047() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5});
    arr.set(1, 10);
    Integer resultValue = arr.get(0);
    int expectedValue = 5;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_4800
     * @tc.name int8ArrayIndexSetPart03Test048
     * @tc.desc Verify $_set returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test048() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    Integer result = arr.set(0, 99);
    assertNull(result);
    }

    /**
     * Verify forEach sum equals 139 after $_set(1, 99)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_4900
     * @tc.name int8ArrayIndexSetPart03Test049
     * @tc.desc Verify forEach sum equals 139 after $_set(1, 99)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test049() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    arr.set(1, 99);
    int[] sum = {0};
    arr.forEach((v, unusedIndex) -> {
    sum[0] = sum[0] + v;
    });
    assertEqual(139, sum[0]);
    }

    /**
     * Verify forEach callback index 1 for value 99 after $_set(1, 99)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_5000
     * @tc.name int8ArrayIndexSetPart03Test050
     * @tc.desc Verify forEach callback index 1 for value 99 after $_set(1, 99)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test050() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    arr.set(1, 99);
    int[] idx = {-1};
    arr.forEach((v, i) -> {
    if (v == 99) {
    idx[0] = i;
    }
    });
    assertEqual(1, idx[0]);
    }

    /**
     * Verify toString after $_set(0, 99) returns "99,22,33" on new Int8Array(new int[] {11, 22, 33})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_5100
     * @tc.name int8ArrayIndexSetPart03Test051
     * @tc.desc Verify toString after $_set(0, 99) returns "99,22,33" on new Int8Array(new int[] {11, 22, 33})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test051() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33});
    arr.set(0, 99);
    String resultValue = String.valueOf(arr);
    String expectedValue = "99,22,33";
    assertEqual(expectedValue, resultValue);
    }

    /**
     * Verify multiple $_set calls assign correct values to elements at indices 0, 1, 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_5200
     * @tc.name int8ArrayIndexSetPart03Test052
     * @tc.desc Verify multiple $_set calls assign correct values to elements at indices 0, 1, 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test052() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    String resultValue = String.valueOf(arr);
    String expectedValue = "10,20,30";
    assertEqual(expectedValue, resultValue);
    }

    /**
     * Verify $_set(1, 88) assigns value to element at specified index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_5300
     * @tc.name int8ArrayIndexSetPart03Test053
     * @tc.desc Verify $_set(1, 88) assigns value to element at specified index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test053() {
    Int8Array arr = new Int8Array(new int[] {3, 4, 5});
    arr.set(1, 88);
    Integer resultValue = arr.get(1);
    int expectedValue = 88;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify repeated $_set(0, ...) overwrites previous value, final $_get(0) expects 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_5400
     * @tc.name int8ArrayIndexSetPart03Test054
     * @tc.desc Verify repeated $_set(0, ...) overwrites previous value, final $_get(0) expects 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test054() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.set(0, 50);
    arr.set(0, 100);
    Integer resultValue = arr.get(0);
    int expectedValue = 100;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify at expects 99, with $_set(0, 99), on new Int8Array(new int[] {6, 7, 8})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_5500
     * @tc.name int8ArrayIndexSetPart03Test055
     * @tc.desc Verify at expects 99, with $_set(0, 99), on new Int8Array(new int[] {6, 7, 8})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test055() {
    Int8Array arr = new Int8Array(new int[] {6, 7, 8});
    arr.set(0, 99);
    Integer resultValue = arr.at(0);
    int expectedValue = 99;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify at expects 99, with $_set(2, 99), on new Int8Array(new int[] {6, 7, 8})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_5600
     * @tc.name int8ArrayIndexSetPart03Test056
     * @tc.desc Verify at expects 99, with $_set(2, 99), on new Int8Array(new int[] {6, 7, 8})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test056() {
    Int8Array arr = new Int8Array(new int[] {6, 7, 8});
    arr.set(2, 99);
    Integer resultValue = arr.at(-1);
    int expectedValue = 99;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_get(0) on subarray(1, 3) returns 99 after $_set(1, 99) on base
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_5700
     * @tc.name int8ArrayIndexSetPart03Test057
     * @tc.desc Verify $_get(0) on subarray(1, 3) returns 99 after $_set(1, 99) on base
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test057() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44});
    Int8Array view = arr.subarray(1, 3);
    arr.set(1, 99);
    Integer resultValue = view.get(0);
    int expectedValue = 99;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify slice(0, 2) creates independent copy and $_set on copy does not affect original expects 11
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_5800
     * @tc.name int8ArrayIndexSetPart03Test058
     * @tc.desc Verify slice(0, 2) creates independent copy and $_set on copy does not affect original expects 11
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test058() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33});
    Int8Array copy = arr.slice(0, 2);
    arr.set(0, 99);
    Integer resultValue = copy.get(0);
    int expectedValue = 11;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify join('|') returns 11|99|33 after $_set(1, 99)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_5900
     * @tc.name int8ArrayIndexSetPart03Test059
     * @tc.desc Verify join('|') returns 11|99|33 after $_set(1, 99)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test059() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33});
    arr.set(1, 99);
    String resultValue = arr.join("|");
    String expectedValue = "11|99|33";
    assertEqual(expectedValue, resultValue);
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(5, 99), on new Int8Array(new int[] {10, 20, 30, 40})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_6000
     * @tc.name int8ArrayIndexSetPart03Test060
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(5, 99), on new Int
     * 8Array(new int[] {10, 20, 30, 40})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test060() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    try {
    arr.set(5, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    Integer resultValue = arr.get(3);
    int expectedValue = 40;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(5, 99), on new Int
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_6100
     * @tc.name int8ArrayIndexSetPart03Test061
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(5, 99), on new Int
     * 8Array([10, 20, 30, 40, 50])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test061() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(5, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    Integer resultValue = arr.get(4);
    int expectedValue = 50;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(2, 99), on new Int
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_6200
     * @tc.name int8ArrayIndexSetPart03Test062
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(2, 99), on new Int
     * 8Array([7]), then $_get(0) still expects 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test062() {
    Int8Array arr = new Int8Array(new int[] {7});
    try {
    arr.set(2, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    Integer resultValue = arr.get(0);
    int expectedValue = 7;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(1, 99), on new Int
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_6300
     * @tc.name int8ArrayIndexSetPart03Test063
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(1, 99), on new Int
     * 8Array([7]), then $_get(0) still expects 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test063() {
    Int8Array arr = new Int8Array(new int[] {7});
    try {
    arr.set(1, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    Integer resultValue = arr.get(0);
    int expectedValue = 7;
    assertEqualInt(expectedValue, resultValue);
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(3, 99), on new Int8Array(new int[] {5, 5, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_SET_PART03_TEST_6400
     * @tc.name int8ArrayIndexSetPart03Test064
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(3, 99), on new Int
     * 8Array(new int[] {5, 5, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexSetPart03Test064() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5});
    try {
    arr.set(3, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    Integer resultValue = arr.get(2);
    int expectedValue = 5;
    assertEqualInt(expectedValue, resultValue);
    }
}
