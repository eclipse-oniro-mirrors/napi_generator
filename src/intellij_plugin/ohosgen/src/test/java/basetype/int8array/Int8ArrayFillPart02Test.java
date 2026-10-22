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
 * Int8ArrayFillPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFillPart02Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify fill(9) fills all elements and returns the same array, on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_0100
     * @tc.name int8ArrayFillPart02Test001
     * @tc.desc Verify fill(9) fills all elements and returns the same array, on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test001() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9);
    assertEqualInt(9, r.get(0));
    assertEqualInt(9, r.get(3));
    assertEqual(arr, r);
    }

    /**
     * Verify fill(9, 1) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_0200
     * @tc.name int8ArrayFillPart02Test002
     * @tc.desc Verify fill(9, 1) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test002() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 1);
    assertEqualInt(1, r.get(0));
    assertEqualInt(9, r.get(1));
    assertEqualInt(9, r.get(3));
    }

    /**
     * Verify fill(value, start, end) [start, end)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_0300
     * @tc.name int8ArrayFillPart02Test003
     * @tc.desc Verify fill(value, start, end) [start, end)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test003() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 1, 3);
    assertEqualInt(1, r.get(0));
    assertEqualInt(9, r.get(1));
    assertEqualInt(9, r.get(2));
    assertEqualInt(4, r.get(3));
    }

    /**
     * Verify fill(Number.NaN) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_0700
     * @tc.name int8ArrayFillPart02Test007
     * @tc.desc Verify fill(Number.NaN) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test007() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(Double.NaN);
    assertEqualInt(0, r.get(0));
    assertEqualInt(0, r.get(3));
    }

    /**
     * Verify fill(127.5) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_0800
     * @tc.name int8ArrayFillPart02Test008
     * @tc.desc Verify fill(127.5) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test008() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(127.5);
    assertEqualInt(INT8_MAX, r.get(0));
    assertEqualInt(INT8_MAX, r.get(3));
    }

    /**
     * Verify fill(-128.5) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_0900
     * @tc.name int8ArrayFillPart02Test009
     * @tc.desc Verify fill(-128.5) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test009() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(-128.5);
    Integer r1 = r.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    Integer r2 = r.get(3);
    int e2 = INT8_MIN;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify fill(1e-100) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_1000
     * @tc.name int8ArrayFillPart02Test010
     * @tc.desc Verify fill(1e-100) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test010() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(1e-100);
    assertEqualInt(0, r.get(0));
    assertEqualInt(0, r.get(3));
    }

    /**
     * Verify fill(1.9) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_1100
     * @tc.name int8ArrayFillPart02Test011
     * @tc.desc Verify fill(1.9) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test011() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(1.9);
    assertEqualInt(1, r.get(0));
    assertEqualInt(1, r.get(3));
    }

    /**
     * Verify fill(-1.9) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_1200
     * @tc.name int8ArrayFillPart02Test012
     * @tc.desc Verify fill(-1.9) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test012() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(-1.9);
    assertEqualInt(-1, r.get(0));
    assertEqualInt(-1, r.get(3));
    }

    /**
     * Verify fill(0.5) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_1300
     * @tc.name int8ArrayFillPart02Test013
     * @tc.desc Verify fill(0.5) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test013() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(0.5);
    assertEqualInt(0, r.get(0));
    assertEqualInt(0, r.get(3));
    }

    /**
     * Verify fill(-0.5) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_1400
     * @tc.name int8ArrayFillPart02Test014
     * @tc.desc Verify fill(-0.5) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test014() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(-0.5);
    assertEqualInt(0, r.get(0));
    assertEqualInt(0, r.get(3));
    }

    /**
     * Verify fill(-0.0) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_1500
     * @tc.name int8ArrayFillPart02Test015
     * @tc.desc Verify fill(-0.0) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test015() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(-0.0);
    assertEqualInt(0, r.get(0));
    assertEqualInt(0, r.get(3));
    }

    /**
     * Verify fill(0) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_1600
     * @tc.name int8ArrayFillPart02Test016
     * @tc.desc Verify fill(0) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test016() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(0);
    assertEqualInt(0, r.get(0));
    assertEqualInt(0, r.get(3));
    }

    /**
     * Verify fill(128) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_1700
     * @tc.name int8ArrayFillPart02Test017
     * @tc.desc Verify fill(128) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test017() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(128);
    assertEqualInt(-128, r.get(0));
    assertEqualInt(-128, r.get(3));
    }

    /**
     * Verify fill(-129) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_1800
     * @tc.name int8ArrayFillPart02Test018
     * @tc.desc Verify fill(-129) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test018() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(-129);
    assertEqualInt(INT8_MAX, r.get(0));
    assertEqualInt(INT8_MAX, r.get(3));
    }

    /**
     * Verify fill(255) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_1900
     * @tc.name int8ArrayFillPart02Test019
     * @tc.desc Verify fill(255) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test019() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(255);
    assertEqualInt(-1, r.get(0));
    assertEqualInt(-1, r.get(3));
    }

    /**
     * Verify fill(256) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_2000
     * @tc.name int8ArrayFillPart02Test020
     * @tc.desc Verify fill(256) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test020() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(256);
    assertEqualInt(0, r.get(0));
    assertEqualInt(0, r.get(3));
    }

    /**
     * Verify fill(200) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_2100
     * @tc.name int8ArrayFillPart02Test021
     * @tc.desc Verify fill(200) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test021() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(200);
    assertEqualInt(-56, r.get(0));
    assertEqualInt(-56, r.get(3));
    }

    /**
     * Verify fill(INT8_MAX) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_2300
     * @tc.name int8ArrayFillPart02Test023
     * @tc.desc Verify fill(INT8_MAX) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test023() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(INT8_MAX);
    assertEqualInt(INT8_MAX, r.get(0));
    assertEqualInt(INT8_MAX, r.get(3));
    }

    /**
     * Verify fill(-128) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_2400
     * @tc.name int8ArrayFillPart02Test024
     * @tc.desc Verify fill(-128) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test024() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(INT8_MIN);
    Integer r1 = r.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    Integer r2 = r.get(3);
    int e2 = INT8_MIN;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify fill(50) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_2500
     * @tc.name int8ArrayFillPart02Test025
     * @tc.desc Verify fill(50) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test025() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(50);
    assertEqualInt(50, r.get(0));
    assertEqualInt(50, r.get(3));
    }

    /**
     * Verify fill(9007199254740991) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_2600
     * @tc.name int8ArrayFillPart02Test026
     * @tc.desc Verify fill(9007199254740991) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test026() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9007199254740991L);
    assertEqualInt(-1, r.get(0));
    assertEqualInt(-1, r.get(3));
    }

    /**
     * Verify fill(-9007199254740991) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_2700
     * @tc.name int8ArrayFillPart02Test027
     * @tc.desc Verify fill(-9007199254740991) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test027() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(-9007199254740991L);
    assertEqualInt(1, r.get(0));
    assertEqualInt(1, r.get(3));
    }

    /**
     * Verify fill(9, 0) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_2800
     * @tc.name int8ArrayFillPart02Test028
     * @tc.desc Verify fill(9, 0) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test028() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 0);
    assertEqualInt(9, r.get(0));
    assertEqualInt(9, r.get(3));
    }

    /**
     * Verify fill(9, 3) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_2900
     * @tc.name int8ArrayFillPart02Test029
     * @tc.desc Verify fill(9, 3) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test029() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 3);
    assertEqualInt(3, r.get(2));
    assertEqualInt(9, r.get(3));
    }

    /**
     * Verify fill(9, 4) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_3000
     * @tc.name int8ArrayFillPart02Test030
     * @tc.desc Verify fill(9, 4) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test030() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 4);
    assertEqualInt(1, r.get(0));
    assertEqualInt(4, r.get(3));
    }

    /**
     * Verify fill(9, -1) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_3100
     * @tc.name int8ArrayFillPart02Test031
     * @tc.desc Verify fill(9, -1) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test031() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, -1);
    assertEqualInt(3, r.get(2));
    assertEqualInt(9, r.get(3));
    }

    /**
     * Verify fill(9, -4) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_3200
     * @tc.name int8ArrayFillPart02Test032
     * @tc.desc Verify fill(9, -4) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test032() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, -4);
    assertEqualInt(9, r.get(0));
    assertEqualInt(9, r.get(3));
    }

    /**
     * Verify fill(9, -5) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_3300
     * @tc.name int8ArrayFillPart02Test033
     * @tc.desc Verify fill(9, -5) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test033() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, -5);
    assertEqualInt(9, r.get(0));
    assertEqualInt(9, r.get(3));
    }

    /**
     * Verify fill(9, 2147483647) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_3400
     * @tc.name int8ArrayFillPart02Test034
     * @tc.desc Verify fill(9, 2147483647) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test034() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 2147483647);
    assertEqualInt(1, r.get(0));
    assertEqualInt(4, r.get(3));
    }

    /**
     * Verify fill(9, -2147483647) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_3500
     * @tc.name int8ArrayFillPart02Test035
     * @tc.desc Verify fill(9, -2147483647) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test035() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, -2147483647);
    assertEqualInt(9, r.get(0));
    assertEqualInt(9, r.get(3));
    }

    /**
     * Verify fill(9, 0, 4) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_3700
     * @tc.name int8ArrayFillPart02Test037
     * @tc.desc Verify fill(9, 0, 4) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test037() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 0, 4);
    assertEqualInt(9, r.get(0));
    assertEqualInt(9, r.get(3));
    }

    /**
     * Verify fill(9, 0, 0) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_3800
     * @tc.name int8ArrayFillPart02Test038
     * @tc.desc Verify fill(9, 0, 0) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test038() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 0, 0);
    assertEqualInt(1, r.get(0));
    assertEqualInt(4, r.get(3));
    }

    /**
     * Verify fill(9, 0, 1) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_3900
     * @tc.name int8ArrayFillPart02Test039
     * @tc.desc Verify fill(9, 0, 1) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test039() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 0, 1);
    assertEqualInt(9, r.get(0));
    assertEqualInt(2, r.get(1));
    }

    /**
     * Verify fill(9, 0, 3) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_4000
     * @tc.name int8ArrayFillPart02Test040
     * @tc.desc Verify fill(9, 0, 3) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test040() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 0, 3);
    assertEqualInt(9, r.get(2));
    assertEqualInt(4, r.get(3));
    }

    /**
     * Verify fill(9, 0, -1) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_4100
     * @tc.name int8ArrayFillPart02Test041
     * @tc.desc Verify fill(9, 0, -1) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test041() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 0, -1);
    assertEqualInt(9, r.get(2));
    assertEqualInt(4, r.get(3));
    }

    /**
     * Verify fill(9, 0, -4) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_4200
     * @tc.name int8ArrayFillPart02Test042
     * @tc.desc Verify fill(9, 0, -4) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test042() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 0, -4);
    assertEqualInt(1, r.get(0));
    assertEqualInt(4, r.get(3));
    }

    /**
     * Verify fill(9, 0, -5) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_4300
     * @tc.name int8ArrayFillPart02Test043
     * @tc.desc Verify fill(9, 0, -5) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test043() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 0, -5);
    assertEqualInt(1, r.get(0));
    assertEqualInt(4, r.get(3));
    }

    /**
     * Verify fill(9, 0, 5) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_4400
     * @tc.name int8ArrayFillPart02Test044
     * @tc.desc Verify fill(9, 0, 5) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test044() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 0, 5);
    assertEqualInt(9, r.get(0));
    assertEqualInt(9, r.get(3));
    }

    /**
     * Verify fill(9, 0, 2147483647) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_4500
     * @tc.name int8ArrayFillPart02Test045
     * @tc.desc Verify fill(9, 0, 2147483647) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test045() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 0, 2147483647);
    assertEqualInt(9, r.get(0));
    assertEqualInt(9, r.get(3));
    }

    /**
     * Verify fill(9, 3, 1) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_4600
     * @tc.name int8ArrayFillPart02Test046
     * @tc.desc Verify fill(9, 3, 1) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test046() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 3, 1);
    assertEqualInt(1, r.get(0));
    assertEqualInt(4, r.get(3));
    }

    /**
     * Verify fill(9) writes within view range and keeps outside bytes 0, on new Int8A
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_4800
     * @tc.name int8ArrayFillPart02Test048
     * @tc.desc Verify fill(9) writes within view range and keeps outside bytes 0, on new Int8A
     * rray(new ArrayBuffer(8), 2, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test048() {
    Int8Array arr = new Int8Array(new ArrayBuffer(8), 2, 4);
    Int8Array r = arr.fill(9);
    int r1 = r.byteOffset();
    int e1 = 2;
    assertEqual(e1, r1);
    Integer r2 = r.get(0);
    int e2 = 9;
    assertEqualInt(e2, r2);
    Integer r3 = r.get(3);
    int e3 = 9;
    assertEqualInt(e3, r3);
    Int8Array full = new Int8Array(arr.buffer());
    Integer r4 = full.get(0);
    int e4 = 0;
    assertEqualInt(e4, r4);
    Integer r5 = full.get(6);
    int e5 = 0;
    assertEqualInt(e5, r5);
    }

    /**
     * Verify chained fill(1).fill(2) leaves 2 in all elements, on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_4900
     * @tc.name int8ArrayFillPart02Test049
     * @tc.desc Verify chained fill(1).fill(2) leaves 2 in all elements, on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test049() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.fill(1).fill(2);
    Integer r1 = arr.get(0);
    int e1 = 2;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(3);
    int e2 = 2;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify fill(9) on subarray(1, 3) returns the subarray itself
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_5000
     * @tc.name int8ArrayFillPart02Test050
     * @tc.desc Verify fill(9) on subarray(1, 3) returns the subarray itself
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test050() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array sub = arr.subarray(1, 3);
    Int8Array r = sub.fill(9);
    assertEqual(sub, r);
    }

    /**
     * Verify fill(9) on empty new Int8Array(0) returns the same empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_5100
     * @tc.name int8ArrayFillPart02Test051
     * @tc.desc Verify fill(9) on empty new Int8Array(0) returns the same empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test051() {
    Int8Array arr = new Int8Array(0);
    Int8Array r = arr.fill(9);
    assertEqual(arr, r);
    }

    /**
     * Verify fill(9) overwrites single element 7 with 9 on new Int8Array(new int[] {7})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_5200
     * @tc.name int8ArrayFillPart02Test052
     * @tc.desc Verify fill(9) overwrites single element 7 with 9 on new Int8Array(new int[] {7})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test052() {
    Int8Array arr = new Int8Array(new int[] {7});
    Int8Array r = arr.fill(9);
    Integer r1 = r.get(0);
    int e1 = 9;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify fill(9, 2, 2) with start===end has no effect (empty range)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_5300
     * @tc.name int8ArrayFillPart02Test053
     * @tc.desc Verify fill(9, 2, 2) with start===end has no effect (empty range)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test053() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 2, 2);
    assertEqualInt(3, r.get(2));
    }

    /**
     * Verify fill(9, -2147483647, 2147483647) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_5400
     * @tc.name int8ArrayFillPart02Test054
     * @tc.desc Verify fill(9, -2147483647, 2147483647) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test054() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, -2147483647, 2147483647);
    assertEqualInt(9, r.get(0));
    assertEqualInt(9, r.get(3));
    }

    /**
     * Verify fill(9, 2147483647, 2147483647) with start and end exceeding length, clamped to empty range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_5500
     * @tc.name int8ArrayFillPart02Test055
     * @tc.desc Verify fill(9, 2147483647, 2147483647) with start and end exceeding length, clamped to empty range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test055() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 2147483647, 2147483647);
    assertEqualInt(1, r.get(0));
    }

    /**
     * Verify fill(9, -2147483647, -2147483647) with negative start and end, both clamped to 0, empty range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_5600
     * @tc.name int8ArrayFillPart02Test056
     * @tc.desc Verify fill(9, -2147483647, -2147483647) with negative start and end, both clamped to 0, empty range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test056() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, -2147483647, -2147483647);
    assertEqualInt(1, r.get(0));
    }

    /**
     * Verify fill(Number.NaN, 1, 3) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_5700
     * @tc.name int8ArrayFillPart02Test057
     * @tc.desc Verify fill(Number.NaN, 1, 3) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test057() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(Double.NaN, 1, 3);
    assertEqualInt(1, r.get(0));
    assertEqualInt(0, r.get(1));
    assertEqualInt(0, r.get(2));
    assertEqualInt(4, r.get(3));
    }

    /**
     * Verify fill(200, 2) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_5800
     * @tc.name int8ArrayFillPart02Test058
     * @tc.desc Verify fill(200, 2) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test058() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(200, 2);
    assertEqualInt(2, r.get(1));
    assertEqualInt(-56, r.get(2));
    assertEqualInt(-56, r.get(3));
    }

    /**
     * Verify fill(1.9, 0, 2) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_5900
     * @tc.name int8ArrayFillPart02Test059
     * @tc.desc Verify fill(1.9, 0, 2) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test059() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(1.9, 0, 2);
    assertEqualInt(1, r.get(0));
    assertEqualInt(1, r.get(1));
    assertEqualInt(3, r.get(2));
    }

    /**
     * Verify fill(-1.9, 1, -1) end -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_6000
     * @tc.name int8ArrayFillPart02Test060
     * @tc.desc Verify fill(-1.9, 1, -1) end -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test060() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(-1.9, 1, -1);
    assertEqualInt(1, r.get(0));
    assertEqualInt(-1, r.get(1));
    assertEqualInt(-1, r.get(2));
    assertEqualInt(4, r.get(3));
    }

    /**
     * Verify fill(9) on subarray(1, 3) propagates 9 to original array at indices 1, 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_6100
     * @tc.name int8ArrayFillPart02Test061
     * @tc.desc Verify fill(9) on subarray(1, 3) propagates 9 to original array at indices 1, 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test061() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array sub = arr.subarray(1, 3);
    sub.fill(9);
    assertEqualInt(9, arr.get(1));
    assertEqualInt(9, arr.get(2));
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify fill(9) on slice(1, 3) copy does not affect original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_6200
     * @tc.name int8ArrayFillPart02Test062
     * @tc.desc Verify fill(9) on slice(1, 3) copy does not affect original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test062() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array copy = arr.slice(1, 3);
    copy.fill(9);
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify fill(9) on subarray(0, 2) propagates 9 to original array at indices 0, 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_6300
     * @tc.name int8ArrayFillPart02Test063
     * @tc.desc Verify fill(9) on subarray(0, 2) propagates 9 to original array at indices 0, 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test063() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array sub = arr.subarray(0, 2);
    sub.fill(9);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(9, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify fill(9, 0, 2) then reverse() -- filled elements stay at tail after reversal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_6400
     * @tc.name int8ArrayFillPart02Test064
     * @tc.desc Verify fill(9, 0, 2) then reverse() -- filled elements stay at tail after reversal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test064() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.fill(9, 0, 2);
    arr.reverse();
    assertEqualInt(4, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(9, arr.get(2));
    assertEqualInt(9, arr.get(3));
    }

    /**
     * Verify fill(3) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_6500
     * @tc.name int8ArrayFillPart02Test065
     * @tc.desc Verify fill(3) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test065() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.set(0, 7);
    arr.set(1, 7);
    arr.fill(3);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(3, arr.get(1));
    }

    /**
     * Verify view.fill(9) on Int8Array(buf, 2, 3) writes 9 in view keeping outside bytes 0 on ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_6600
     * @tc.name int8ArrayFillPart02Test066
     * @tc.desc Verify view.fill(9) on Int8Array(buf, 2, 3) writes 9 in view keeping outside bytes 0 on ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test066() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array view = new Int8Array(buf, 2, 3);
    view.fill(9);
    assertEqualInt(9, view.get(0));
    assertEqualInt(9, view.get(2));
    Int8Array full = new Int8Array(buf);
    assertEqualInt(0, full.get(0));
    assertEqualInt(0, full.get(5));
    }

    /**
     * Verify fill(9, 1, -1) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_6700
     * @tc.name int8ArrayFillPart02Test067
     * @tc.desc Verify fill(9, 1, -1) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test067() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, 1, -1);
    assertEqualInt(1, r.get(0));
    assertEqualInt(9, r.get(1));
    assertEqualInt(9, r.get(2));
    assertEqualInt(4, r.get(3));
    }

    /**
     * Verify fill(9, -3, 2) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_6800
     * @tc.name int8ArrayFillPart02Test068
     * @tc.desc Verify fill(9, -3, 2) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test068() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(9, -3, 2);
    assertEqualInt(1, r.get(0));
    assertEqualInt(9, r.get(1));
    assertEqualInt(3, r.get(2));
    assertEqualInt(4, r.get(3));
    }

    /**
     * Verify fill(Number.POSITIVE_INFINITY) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_6900
     * @tc.name int8ArrayFillPart02Test069
     * @tc.desc Verify fill(Number.POSITIVE_INFINITY) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test069() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(Double.POSITIVE_INFINITY);
    assertEqualInt(0, r.get(0));
    assertEqualInt(0, r.get(3));
    }

    /**
     * Verify fill(Number.NEGATIVE_INFINITY) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_7000
     * @tc.name int8ArrayFillPart02Test070
     * @tc.desc Verify fill(Number.NEGATIVE_INFINITY) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test070() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(Double.NEGATIVE_INFINITY);
    assertEqualInt(0, r.get(0));
    assertEqualInt(0, r.get(3));
    }

    /**
     * Verify fill(Number.POSITIVE_INFINITY, 0, 1) replaces elements in specified range with given value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART02_TEST_7100
     * @tc.name int8ArrayFillPart02Test071
     * @tc.desc Verify fill(Number.POSITIVE_INFINITY, 0, 1) replaces elements in specified range with given value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart02Test071() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array r = arr.fill(Double.POSITIVE_INFINITY, 0, 1);
    assertEqualInt(0, r.get(0));
    assertEqualInt(2, r.get(1));
    }
}
