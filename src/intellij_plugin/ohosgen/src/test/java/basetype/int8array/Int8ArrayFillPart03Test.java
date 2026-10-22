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

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayFillPart03Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFillPart03Test extends BasTest {
    private static int INT8_MAX = 127;

    /**
     * Verify fill(value) number overload fills all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_0100
     * @tc.name int8ArrayFillPart03Test001
     * @tc.desc Verify fill(value) number overload fills all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test001() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    Int8Array ret = arr.fill(7);
    assertEqualInt(7, ret.get(0));
    assertEqualInt(7, ret.get(3));
    assertEqual(arr, ret);
    }

    /**
     * Verify fill(value, start) number overload fills from start to end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_0200
     * @tc.name int8ArrayFillPart03Test002
     * @tc.desc Verify fill(value, start) number overload fills from start to end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test002() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    Int8Array ret = arr.fill(7, 2);
    assertEqualInt(20, ret.get(1));
    assertEqualInt(7, ret.get(2));
    assertEqualInt(7, ret.get(3));
    }

    /**
     * Verify fill(value, start, end) number overload fills specified range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_0300
     * @tc.name int8ArrayFillPart03Test003
     * @tc.desc Verify fill(value, start, end) number overload fills specified range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test003() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    Int8Array ret = arr.fill(7, 1, 3);
    assertEqualInt(10, ret.get(0));
    assertEqualInt(7, ret.get(1));
    assertEqualInt(7, ret.get(2));
    assertEqualInt(40, ret.get(3));
    }

    /**
     * Verify fill(value) number overload overwrites existing non-zero values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_0400
     * @tc.name int8ArrayFillPart03Test004
     * @tc.desc Verify fill(value) number overload overwrites existing non-zero values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test004() {
    Int8Array arr = Int8Array.of(11, 22, 33);
    arr.fill(9);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(9, arr.get(1));
    assertEqualInt(9, arr.get(2));
    }

    /**
     * Verify fill(value, start) number overload with negative start index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_0500
     * @tc.name int8ArrayFillPart03Test005
     * @tc.desc Verify fill(value, start) number overload with negative start index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test005() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, -2);
    assertEqualInt(20, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(value, start, end) number overload with negative end index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_0600
     * @tc.name int8ArrayFillPart03Test006
     * @tc.desc Verify fill(value, start, end) number overload with negative end index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test006() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 0, -1);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(-128) writes INT8_MIN to all elements on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_0700
     * @tc.name int8ArrayFillPart03Test007
     * @tc.desc Verify fill(-128) writes INT8_MIN to all elements on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test007() {
    Int8Array arr = new Int8Array(3);
    arr.fill(-128);
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-128, arr.get(2));
    }

    /**
     * Verify fill(INT8_MAX) writes 127 to all elements on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_0800
     * @tc.name int8ArrayFillPart03Test008
     * @tc.desc Verify fill(INT8_MAX) writes 127 to all elements on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test008() {
    Int8Array arr = new Int8Array(3);
    arr.fill(INT8_MAX);
    assertEqualInt(INT8_MAX, arr.get(0));
    assertEqualInt(INT8_MAX, arr.get(2));
    }

    /**
     * Verify value=0 number overload fills all with zero overwriting non-zero
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_0900
     * @tc.name int8ArrayFillPart03Test009
     * @tc.desc Verify value=0 number overload fills all with zero overwriting non-zero
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test009() {
    Int8Array arr = Int8Array.of(50, 60, 70);
    arr.fill(0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill(-1) writes -1 to all elements on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_1000
     * @tc.name int8ArrayFillPart03Test010
     * @tc.desc Verify fill(-1) writes -1 to all elements on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test010() {
    Int8Array arr = new Int8Array(3);
    arr.fill(-1);
    assertEqualInt(-1, arr.get(0));
    assertEqualInt(-1, arr.get(2));
    }

    /**
     * Verify fill(1) writes 1 to all elements on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_1100
     * @tc.name int8ArrayFillPart03Test011
     * @tc.desc Verify fill(1) writes 1 to all elements on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test011() {
    Int8Array arr = new Int8Array(3);
    arr.fill(1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(2));
    }

    /**
     * Verify fill(100) writes 100 to all elements on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_1200
     * @tc.name int8ArrayFillPart03Test012
     * @tc.desc Verify fill(100) writes 100 to all elements on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test012() {
    Int8Array arr = new Int8Array(3);
    arr.fill(100);
    assertEqualInt(100, arr.get(0));
    assertEqualInt(100, arr.get(2));
    }

    /**
     * Verify fill(128) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_1300
     * @tc.name int8ArrayFillPart03Test013
     * @tc.desc Verify fill(128) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test013() {
    Int8Array arr = new Int8Array(3);
    arr.fill(128);
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-128, arr.get(2));
    }

    /**
     * Verify fill(-129) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_1400
     * @tc.name int8ArrayFillPart03Test014
     * @tc.desc Verify fill(-129) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test014() {
    Int8Array arr = new Int8Array(3);
    arr.fill(-129);
    assertEqualInt(INT8_MAX, arr.get(0));
    assertEqualInt(INT8_MAX, arr.get(2));
    }

    /**
     * Verify fill(255) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_1500
     * @tc.name int8ArrayFillPart03Test015
     * @tc.desc Verify fill(255) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test015() {
    Int8Array arr = new Int8Array(3);
    arr.fill(255);
    assertEqualInt(-1, arr.get(0));
    assertEqualInt(-1, arr.get(2));
    }

    /**
     * Verify fill(256) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_1600
     * @tc.name int8ArrayFillPart03Test016
     * @tc.desc Verify fill(256) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test016() {
    Int8Array arr = Int8Array.of(50, 50, 50);
    arr.fill(256);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill(-256) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_1700
     * @tc.name int8ArrayFillPart03Test017
     * @tc.desc Verify fill(-256) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test017() {
    Int8Array arr = Int8Array.of(50, 50, 50);
    arr.fill(-256);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill(300) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_1900
     * @tc.name int8ArrayFillPart03Test019
     * @tc.desc Verify fill(300) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test019() {
    Int8Array arr = new Int8Array(3);
    arr.fill(300);
    assertEqualInt(44, arr.get(0));
    assertEqualInt(44, arr.get(2));
    }

    /**
     * Verify fill(-300) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_2000
     * @tc.name int8ArrayFillPart03Test020
     * @tc.desc Verify fill(-300) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test020() {
    Int8Array arr = new Int8Array(3);
    arr.fill(-300);
    assertEqualInt(-44, arr.get(0));
    assertEqualInt(-44, arr.get(2));
    }

    /**
     * Verify fill(Number.NaN) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_2100
     * @tc.name int8ArrayFillPart03Test021
     * @tc.desc Verify fill(Number.NaN) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test021() {
    Int8Array arr = Int8Array.of(50, 50, 50);
    arr.fill(Double.NaN);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill(1.9) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_2200
     * @tc.name int8ArrayFillPart03Test022
     * @tc.desc Verify fill(1.9) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test022() {
    Int8Array arr = new Int8Array(3);
    arr.fill(1.9);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(2));
    }

    /**
     * Verify fill(-1.9) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_2300
     * @tc.name int8ArrayFillPart03Test023
     * @tc.desc Verify fill(-1.9) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test023() {
    Int8Array arr = new Int8Array(3);
    arr.fill(-1.9);
    assertEqualInt(-1, arr.get(0));
    assertEqualInt(-1, arr.get(2));
    }

    /**
     * Verify fill(0.5) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_2400
     * @tc.name int8ArrayFillPart03Test024
     * @tc.desc Verify fill(0.5) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test024() {
    Int8Array arr = Int8Array.of(50, 50, 50);
    arr.fill(0.5);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill(127.9) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_2500
     * @tc.name int8ArrayFillPart03Test025
     * @tc.desc Verify fill(127.9) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test025() {
    Int8Array arr = new Int8Array(3);
    arr.fill(127.9);
    assertEqualInt(INT8_MAX, arr.get(0));
    assertEqualInt(INT8_MAX, arr.get(2));
    }

    /**
     * Verify fill(-128.9) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_2600
     * @tc.name int8ArrayFillPart03Test026
     * @tc.desc Verify fill(-128.9) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test026() {
    Int8Array arr = new Int8Array(3);
    arr.fill(-128.9);
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-128, arr.get(2));
    }

    /**
     * Verify fill(v, 0) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_2700
     * @tc.name int8ArrayFillPart03Test027
     * @tc.desc Verify fill(v, 0) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test027() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 0);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(v, 1) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_2800
     * @tc.name int8ArrayFillPart03Test028
     * @tc.desc Verify fill(v, 1) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test028() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 1);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(v, 3) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_2900
     * @tc.name int8ArrayFillPart03Test029
     * @tc.desc Verify fill(v, 3) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test029() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 3);
    assertEqualInt(30, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(v, 4) with start equals length is a no-op and leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_3000
     * @tc.name int8ArrayFillPart03Test030
     * @tc.desc Verify fill(v, 4) with start equals length is a no-op and leaves array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test030() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 4);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(v, 5) with start greater than length is a no-op and leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_3100
     * @tc.name int8ArrayFillPart03Test031
     * @tc.desc Verify fill(v, 5) with start greater than length is a no-op and leaves array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test031() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 5);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(v, 2147483647) with start far beyond length is a no-op and leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_3200
     * @tc.name int8ArrayFillPart03Test032
     * @tc.desc Verify fill(v, 2147483647) with start far beyond length is a no-op and leaves array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test032() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 2147483647);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(v, -1) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_3300
     * @tc.name int8ArrayFillPart03Test033
     * @tc.desc Verify fill(v, -1) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test033() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, -1);
    assertEqualInt(30, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(v, -4) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_3400
     * @tc.name int8ArrayFillPart03Test034
     * @tc.desc Verify fill(v, -4) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test034() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, -4);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(v, -3) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_3500
     * @tc.name int8ArrayFillPart03Test035
     * @tc.desc Verify fill(v, -3) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test035() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, -3);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(v, -5) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_3600
     * @tc.name int8ArrayFillPart03Test036
     * @tc.desc Verify fill(v, -5) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test036() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, -5);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(v, -2147483648) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_3700
     * @tc.name int8ArrayFillPart03Test037
     * @tc.desc Verify fill(v, -2147483648) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test037() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, Integer.MIN_VALUE);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(v, -9) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_3800
     * @tc.name int8ArrayFillPart03Test038
     * @tc.desc Verify fill(v, -9) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test038() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, -9);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(v, 0, 0) with start equals end is a no-op and leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_3900
     * @tc.name int8ArrayFillPart03Test039
     * @tc.desc Verify fill(v, 0, 0) with start equals end is a no-op and leaves array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test039() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 0, 0);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(v, 0, 1) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_4000
     * @tc.name int8ArrayFillPart03Test040
     * @tc.desc Verify fill(v, 0, 1) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test040() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 0, 1);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(20, arr.get(1));
    }

    /**
     * Verify fill(v, 1, 4) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_4100
     * @tc.name int8ArrayFillPart03Test041
     * @tc.desc Verify fill(v, 1, 4) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test041() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 1, 4);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(v, 0, 3) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_4200
     * @tc.name int8ArrayFillPart03Test042
     * @tc.desc Verify fill(v, 0, 3) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test042() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 0, 3);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(v, 2, 5) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_4300
     * @tc.name int8ArrayFillPart03Test043
     * @tc.desc Verify fill(v, 2, 5) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test043() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 2, 5);
    assertEqualInt(20, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(v, 0, 2147483647) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_4400
     * @tc.name int8ArrayFillPart03Test044
     * @tc.desc Verify fill(v, 0, 2147483647) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test044() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 0, 2147483647);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(v, 0, -4) with end normalized to zero makes start equal end, a no-op leaving array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_4500
     * @tc.name int8ArrayFillPart03Test045
     * @tc.desc Verify fill(v, 0, -4) with end normalized to zero makes start equal end, a no-op leaving array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test045() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 0, -4);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(v, 0, -3) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_4600
     * @tc.name int8ArrayFillPart03Test046
     * @tc.desc Verify fill(v, 0, -3) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test046() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 0, -3);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(20, arr.get(1));
    }

    /**
     * Verify fill(v, 0, -5) with end normalized to zero makes start equal end, a no-op leaving array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_4700
     * @tc.name int8ArrayFillPart03Test047
     * @tc.desc Verify fill(v, 0, -5) with end normalized to zero makes start equal end, a no-op leaving array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test047() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 0, -5);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(v, 0, -2147483648) with end normalized to zero makes start equal en
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_4800
     * @tc.name int8ArrayFillPart03Test048
     * @tc.desc Verify fill(v, 0, -2147483648) with end normalized to zero makes start equal en
     * d, a no-op leaving array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test048() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 0, Integer.MIN_VALUE);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(v, 0, -2) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_4900
     * @tc.name int8ArrayFillPart03Test049
     * @tc.desc Verify fill(v, 0, -2) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test049() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 0, -2);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify start=-2 end=-1 both negative normalized fill second-to-last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_5000
     * @tc.name int8ArrayFillPart03Test050
     * @tc.desc Verify start=-2 end=-1 both negative normalized fill second-to-last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test050() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, -2, -1);
    assertEqualInt(20, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(v, -2, 3) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_5100
     * @tc.name int8ArrayFillPart03Test051
     * @tc.desc Verify fill(v, -2, 3) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test051() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, -2, 3);
    assertEqualInt(20, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(v, 1, -1) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_5200
     * @tc.name int8ArrayFillPart03Test052
     * @tc.desc Verify fill(v, 1, -1) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test052() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 1, -1);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(v, 2, 2) with start equals end is a no-op and leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_5300
     * @tc.name int8ArrayFillPart03Test053
     * @tc.desc Verify fill(v, 2, 2) with start equals end is a no-op and leaves array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test053() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 2, 2);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(v, 3, 1) with start greater than end is a no-op and leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_5400
     * @tc.name int8ArrayFillPart03Test054
     * @tc.desc Verify fill(v, 3, 1) with start greater than end is a no-op and leaves array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test054() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 3, 1);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(v, -1, -1) with start equals end after normalization is a no-op and leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_5500
     * @tc.name int8ArrayFillPart03Test055
     * @tc.desc Verify fill(v, -1, -1) with start equals end after normalization is a no-op and leaves array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test055() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, -1, -1);
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(v, 4, 4) with start equals end is a no-op and leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_5600
     * @tc.name int8ArrayFillPart03Test056
     * @tc.desc Verify fill(v, 4, 4) with start equals end is a no-op and leaves array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test056() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 4, 4);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(v, -3, 100) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_5700
     * @tc.name int8ArrayFillPart03Test057
     * @tc.desc Verify fill(v, -3, 100) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test057() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, -3, 100);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(3, 0, 2).fill(6, 2, 4) writes 3, 3, 6, 6 on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_5800
     * @tc.name int8ArrayFillPart03Test058
     * @tc.desc Verify fill(3, 0, 2).fill(6, 2, 4) writes 3, 3, 6, 6 on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test058() {
    Int8Array arr = new Int8Array(4);
    int firstFill = 3;
    int secondFill = 6;
    arr.fill(firstFill, 0, 2).fill(secondFill, 2, 4);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(6, arr.get(2));
    assertEqualInt(6, arr.get(3));
    }

    /**
     * Verify fill(v) with v=7 fills all 5 elements, on Int8Array.of(10, 20, 30, 40, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_5900
     * @tc.name int8ArrayFillPart03Test059
     * @tc.desc Verify fill(v) with v=7 fills all 5 elements, on Int8Array.of(10, 20, 30, 40, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test059() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    arr.fill(7);
    Integer r1 = arr.get(0);
    int e1 = 7;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(4);
    int e2 = 7;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify fill preserves buffer reference unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_6000
     * @tc.name int8ArrayFillPart03Test060
     * @tc.desc Verify fill preserves buffer reference unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test060() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    ArrayBuffer buf = arr.buffer();
    arr.fill(7);
    assertEqual(buf, arr.buffer());
    Integer r1 = arr.get(0);
    int e1 = 7;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(3);
    int e2 = 7;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify fill(1, 0, 2).fill(2, 2, 4).fill(3, 4, 6) writes 1, 2, 3 across ranges on new Int8Array(6)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_6100
     * @tc.name int8ArrayFillPart03Test061
     * @tc.desc Verify fill(1, 0, 2).fill(2, 2, 4).fill(3, 4, 6) writes 1, 2, 3 across ranges on new Int8Array(6)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test061() {
    Int8Array arr = new Int8Array(6);
    int firstFill = 1;
    int secondFill = 2;
    int thirdFill = 3;
    arr.fill(firstFill, 0, 2).fill(secondFill, 2, 4).fill(thirdFill, 4, 6);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(3, arr.get(4));
    assertEqualInt(3, arr.get(5));
    }

    /**
     * Verify fill(7) on empty new Int8Array(0) keeps length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_6200
     * @tc.name int8ArrayFillPart03Test062
     * @tc.desc Verify fill(7) on empty new Int8Array(0) keeps length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test062() {
    Int8Array arr = new Int8Array(0);
    Int8Array ret = arr.fill(7);
    assertEqual(0, ret.length());
    }

    /**
     * Verify fill(v, 0, 5) on zero-length array is a no-op and leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_6300
     * @tc.name int8ArrayFillPart03Test063
     * @tc.desc Verify fill(v, 0, 5) on zero-length array is a no-op and leaves array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test063() {
    Int8Array arr = new Int8Array(0);
    Int8Array ret = arr.fill(7, 0, 5);
    assertEqual(0, ret.length());
    }

    /**
     * Verify fill(v, 10, 20) with start greater than length is a no-op and leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_6400
     * @tc.name int8ArrayFillPart03Test064
     * @tc.desc Verify fill(v, 10, 20) with start greater than length is a no-op and leaves array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test064() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    Int8Array ret = arr.fill(7, 10, 20);
    assertEqualInt(10, ret.get(0));
    assertEqualInt(30, ret.get(2));
    }

    /**
     * Verify fill(v, 100, 200) with start greater than length is a no-op and leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_6500
     * @tc.name int8ArrayFillPart03Test065
     * @tc.desc Verify fill(v, 100, 200) with start greater than length is a no-op and leaves array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test065() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    Int8Array ret = arr.fill(7, 100, 200);
    assertEqual(arr, ret);
    assertEqualInt(10, ret.get(0));
    }

    /**
     * Verify fill(42) writes 42 to single element on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_6600
     * @tc.name int8ArrayFillPart03Test066
     * @tc.desc Verify fill(42) writes 42 to single element on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test066() {
    Int8Array arr = new Int8Array(1);
    arr.fill(42);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify fill mutates original array in-place not a copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_6700
     * @tc.name int8ArrayFillPart03Test067
     * @tc.desc Verify fill mutates original array in-place not a copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test067() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(v, 1, 3) fills range 1-2, keeps boundaries 10, 40 and 50, on Int8Ar
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_6800
     * @tc.name int8ArrayFillPart03Test068
     * @tc.desc Verify fill(v, 1, 3) fills range 1-2, keeps boundaries 10, 40 and 50, on Int8Ar
     * ray.of(10, 20, 30, 40, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test068() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    arr.fill(7, 1, 3);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    /**
     * Verify fill on subarray view reflects changes on original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_6900
     * @tc.name int8ArrayFillPart03Test069
     * @tc.desc Verify fill on subarray view reflects changes on original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test069() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    Int8Array view = arr.subarray(1, 3);
    view.fill(7);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify fill(v, 1, 3) fills index 1, keeps boundaries via at(0) and at(-1), on I
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_7000
     * @tc.name int8ArrayFillPart03Test070
     * @tc.desc Verify fill(v, 1, 3) fills index 1, keeps boundaries via at(0) and at(-1), on I
     * nt8Array.of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test070() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7, 1, 3);
    assertEqualInt(10, arr.at(0));
    assertEqualInt(7, arr.at(1));
    assertEqualInt(40, arr.at(-1));
    }

    /**
     * Verify fill(v) with v=7 fills all 4 elements, on Int8Array.of(10, 20, 30, 40)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_7100
     * @tc.name int8ArrayFillPart03Test071
     * @tc.desc Verify fill(v) with v=7 fills all 4 elements, on Int8Array.of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test071() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    arr.fill(7);
    Integer r1 = arr.get(0);
    int e1 = 7;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(3);
    int e2 = 7;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify fill(128, 1, 3) truncated value with range outside unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_7200
     * @tc.name int8ArrayFillPart03Test072
     * @tc.desc Verify fill(128, 1, 3) truncated value with range outside unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test072() {
    Int8Array arr = new Int8Array(4);
    arr.fill(128, 1, 3);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(-128, arr.get(1));
    assertEqualInt(-128, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify fill(Number.NaN, 0, 2) Number.NaN truncation with range outside unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_7300
     * @tc.name int8ArrayFillPart03Test073
     * @tc.desc Verify fill(Number.NaN, 0, 2) Number.NaN truncation with range outside unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test073() {
    Int8Array arr = Int8Array.of(50, 50, 50, 50);
    arr.fill(Double.NaN, 0, 2);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(50, arr.get(2));
    assertEqualInt(50, arr.get(3));
    }

    /**
     * Verify fill(-300, -2) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_7400
     * @tc.name int8ArrayFillPart03Test074
     * @tc.desc Verify fill(-300, -2) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test074() {
    Int8Array arr = new Int8Array(4);
    arr.fill(-300, -2);
    assertEqualInt(0, arr.get(1));
    assertEqualInt(-44, arr.get(2));
    assertEqualInt(-44, arr.get(3));
    }

    /**
     * Verify fill on new Int8Array(src) copy source array unaffected
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_7500
     * @tc.name int8ArrayFillPart03Test075
     * @tc.desc Verify fill on new Int8Array(src) copy source array unaffected
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test075() {
    Int8Array src = Int8Array.of(10, 20, 30);
    Int8Array arr = new Int8Array(src);
    arr.fill(7);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(10, src.get(0));
    }

    /**
     * Verify fill(7) on Int8Array(buf, 2, 4) view keeps byteOffset 2 on ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_7600
     * @tc.name int8ArrayFillPart03Test076
     * @tc.desc Verify fill(7) on Int8Array(buf, 2, 4) view keeps byteOffset 2 on ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test076() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 2, 4);
    arr.fill(7);
    assertEqual(2, arr.byteOffset());
    }

    /**
     * Verify fill(Number.POSITIVE_INFINITY) truncates to 0 in all elements, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_7700
     * @tc.name int8ArrayFillPart03Test077
     * @tc.desc Verify fill(Number.POSITIVE_INFINITY) truncates to 0 in all elements, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test077() {
    Int8Array arr = new Int8Array(3);
    arr.fill(Double.POSITIVE_INFINITY);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill(-Number.POSITIVE_INFINITY) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART03_TEST_7800
     * @tc.name int8ArrayFillPart03Test078
     * @tc.desc Verify fill(-Number.POSITIVE_INFINITY) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart03Test078() {
    Int8Array arr = new Int8Array(3);
    arr.fill(-Double.POSITIVE_INFINITY);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }
}
