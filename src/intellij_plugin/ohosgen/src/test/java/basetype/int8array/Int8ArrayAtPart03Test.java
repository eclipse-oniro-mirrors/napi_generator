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

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayAtPart03Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayAtPart03Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify at(length) returns undefined on 3-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_0100
     * @tc.name int8ArrayAtPart03Test001
     * @tc.desc Verify at(length) returns undefined on 3-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test001() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r = arr.at(3);
    assertNull(r);
    }

    /**
     * Verify at(2147483647) int max out-of-bounds returns undefined on 3-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_0200
     * @tc.name int8ArrayAtPart03Test002
     * @tc.desc Verify at(2147483647) int max out-of-bounds returns undefined on 3-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test002() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r = arr.at(2147483647);
    assertNull(r);
    }

    /**
     * Verify at(1000000) large positive out-of-bounds returns undefined on 3-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_0300
     * @tc.name int8ArrayAtPart03Test003
     * @tc.desc Verify at(1000000) large positive out-of-bounds returns undefined on 3-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test003() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r = arr.at(1000000);
    assertNull(r);
    }

    /**
     * Verify at(0) returns undefined on empty Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_0400
     * @tc.name int8ArrayAtPart03Test004
     * @tc.desc Verify at(0) returns undefined on empty Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test004() {
    Int8Array arr = new Int8Array(0);
    Integer r = arr.at(0);
    assertNull(r);
    }

    /**
     * Verify at(100) large out-of-bounds returns undefined on empty Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_0500
     * @tc.name int8ArrayAtPart03Test005
     * @tc.desc Verify at(100) large out-of-bounds returns undefined on empty Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test005() {
    Int8Array arr = new Int8Array(0);
    Integer r = arr.at(100);
    assertNull(r);
    }

    /**
     * Verify at(2147483647) int max out-of-bounds returns undefined on empty Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_0600
     * @tc.name int8ArrayAtPart03Test006
     * @tc.desc Verify at(2147483647) int max out-of-bounds returns undefined on empty Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test006() {
    Int8Array arr = new Int8Array(0);
    Integer r = arr.at(2147483647);
    assertNull(r);
    }

    /**
     * Verify at(-length-1) negative out-of-bounds returns undefined on 3-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_0700
     * @tc.name int8ArrayAtPart03Test007
     * @tc.desc Verify at(-length-1) negative out-of-bounds returns undefined on 3-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test007() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r = arr.at(-4);
    assertNull(r);
    }

    /**
     * Verify at(-1000000) large negative out-of-bounds returns undefined on 3-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_0800
     * @tc.name int8ArrayAtPart03Test008
     * @tc.desc Verify at(-1000000) large negative out-of-bounds returns undefined on 3-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test008() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r = arr.at(-1000000);
    assertNull(r);
    }

    /**
     * Verify at(-2147483648) int min out-of-bounds returns undefined on 3-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_0900
     * @tc.name int8ArrayAtPart03Test009
     * @tc.desc Verify at(-2147483648) int min out-of-bounds returns undefined on 3-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test009() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r = arr.at(Integer.MIN_VALUE);
    assertNull(r);
    }

    /**
     * Verify at(-1) negative first index out-of-bounds returns undefined on empty Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_1000
     * @tc.name int8ArrayAtPart03Test010
     * @tc.desc Verify at(-1) negative first index out-of-bounds returns undefined on empty Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test010() {
    Int8Array arr = new Int8Array(0);
    Integer r = arr.at(-1);
    assertNull(r);
    }

    /**
     * Verify at(-100) large negative out-of-bounds returns undefined on empty Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_1100
     * @tc.name int8ArrayAtPart03Test011
     * @tc.desc Verify at(-100) large negative out-of-bounds returns undefined on empty Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test011() {
    Int8Array arr = new Int8Array(0);
    Integer r = arr.at(-100);
    assertNull(r);
    }

    /**
     * Verify at(-2147483648) int min out-of-bounds returns undefined on empty Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_1200
     * @tc.name int8ArrayAtPart03Test012
     * @tc.desc Verify at(-2147483648) int min out-of-bounds returns undefined on empty Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test012() {
    Int8Array arr = new Int8Array(0);
    Integer r = arr.at(Integer.MIN_VALUE);
    assertNull(r);
    }

    /**
     * Verify at(0) returns first element 10 on 3-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_1300
     * @tc.name int8ArrayAtPart03Test013
     * @tc.desc Verify at(0) returns first element 10 on 3-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test013() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r = arr.at(0);
    assertEqualInt(10, r);
    }

    /**
     * Verify at(length-1) returns last element 30 on 3-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_1400
     * @tc.name int8ArrayAtPart03Test014
     * @tc.desc Verify at(length-1) returns last element 30 on 3-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test014() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r = arr.at(2);
    assertEqualInt(30, r);
    }

    /**
     * Verify at(-1) negative index returns last element 30 on 3-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_1500
     * @tc.name int8ArrayAtPart03Test015
     * @tc.desc Verify at(-1) negative index returns last element 30 on 3-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test015() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r = arr.at(-1);
    assertEqualInt(30, r);
    }

    /**
     * Verify at(-length) negative index returns first element 10 on 3-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_1600
     * @tc.name int8ArrayAtPart03Test016
     * @tc.desc Verify at(-length) negative index returns first element 10 on 3-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test016() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r = arr.at(-3);
    assertEqualInt(10, r);
    }

    /**
     * Verify at(1) returns middle element 20 on 3-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_1700
     * @tc.name int8ArrayAtPart03Test017
     * @tc.desc Verify at(1) returns middle element 20 on 3-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test017() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r = arr.at(1);
    assertEqualInt(20, r);
    }

    /**
     * Verify at(-2) negative index returns middle element 20 on 3-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_1800
     * @tc.name int8ArrayAtPart03Test018
     * @tc.desc Verify at(-2) negative index returns middle element 20 on 3-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test018() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r = arr.at(-2);
    assertEqualInt(20, r);
    }

    /**
     * Verify at(0) returns the only element 10 on single-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_1900
     * @tc.name int8ArrayAtPart03Test019
     * @tc.desc Verify at(0) returns the only element 10 on single-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test019() {
    Int8Array arr = new Int8Array(new int[] {10});
    Integer r = arr.at(0);
    assertEqualInt(10, r);
    }

    /**
     * Verify at(-1) negative index returns the only element 10 on single-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_2000
     * @tc.name int8ArrayAtPart03Test020
     * @tc.desc Verify at(-1) negative index returns the only element 10 on single-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test020() {
    Int8Array arr = new Int8Array(new int[] {10});
    Integer r = arr.at(-1);
    assertEqualInt(10, r);
    }

    /**
     * Verify at(0) returns 0 on all-zero 5-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_2100
     * @tc.name int8ArrayAtPart03Test021
     * @tc.desc Verify at(0) returns 0 on all-zero 5-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test021() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0, 0});
    Integer r = arr.at(0);
    assertEqualInt(0, r);
    }

    /**
     * Verify at(-1) returns 0 on all-zero 5-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_2200
     * @tc.name int8ArrayAtPart03Test022
     * @tc.desc Verify at(-1) returns 0 on all-zero 5-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test022() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0, 0});
    Integer r = arr.at(-1);
    assertEqualInt(0, r);
    }

    /**
     * Verify at(length-1) returns 0 on all-zero 5-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_2300
     * @tc.name int8ArrayAtPart03Test023
     * @tc.desc Verify at(length-1) returns 0 on all-zero 5-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test023() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0, 0});
    Integer r = arr.at(4);
    assertEqualInt(0, r);
    }

    /**
     * Verify at(-length-1) negative out-of-bounds returns undefined not 0 on all-zero Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_2400
     * @tc.name int8ArrayAtPart03Test024
     * @tc.desc Verify at(-length-1) negative out-of-bounds returns undefined not 0 on all-zero Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test024() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0, 0});
    Integer r = arr.at(-6);
    assertNull(r);
    }

    /**
     * Verify at(0) returns 127 on all-127 5-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_2500
     * @tc.name int8ArrayAtPart03Test025
     * @tc.desc Verify at(0) returns 127 on all-127 5-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test025() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, INT8_MAX, INT8_MAX, INT8_MAX, INT8_MAX});
    Integer r = arr.at(0);
    assertEqualInt(INT8_MAX, r);
    }

    /**
     * Verify at(-1) returns 127 on all-127 5-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_2600
     * @tc.name int8ArrayAtPart03Test026
     * @tc.desc Verify at(-1) returns 127 on all-127 5-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test026() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, INT8_MAX, INT8_MAX, INT8_MAX, INT8_MAX});
    Integer r = arr.at(-1);
    assertEqualInt(INT8_MAX, r);
    }

    /**
     * Verify at(0) returns -128 on all-minus128 5-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_2700
     * @tc.name int8ArrayAtPart03Test027
     * @tc.desc Verify at(0) returns -128 on all-minus128 5-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test027() {
    Int8Array arr = new Int8Array(new int[] {INT8_MIN, INT8_MIN, INT8_MIN, INT8_MIN, INT8_MIN});
    Integer r = arr.at(0);
    assertEqualInt(INT8_MIN, r);
    }

    /**
     * Verify at(-1) returns -128 on all-minus128 5-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_2800
     * @tc.name int8ArrayAtPart03Test028
     * @tc.desc Verify at(-1) returns -128 on all-minus128 5-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test028() {
    Int8Array arr = new Int8Array(new int[] {INT8_MIN, INT8_MIN, INT8_MIN, INT8_MIN, INT8_MIN});
    Integer r = arr.at(-1);
    assertEqualInt(INT8_MIN, r);
    }

    /**
     * Verify at(length-1) returns -128 on all-minus128 5-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_2900
     * @tc.name int8ArrayAtPart03Test029
     * @tc.desc Verify at(length-1) returns -128 on all-minus128 5-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test029() {
    Int8Array arr = new Int8Array(new int[] {INT8_MIN, INT8_MIN, INT8_MIN, INT8_MIN, INT8_MIN});
    Integer r = arr.at(4);
    assertEqualInt(INT8_MIN, r);
    }

    /**
     * Verify at(0) returns -1 on all-minus1 5-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_3000
     * @tc.name int8ArrayAtPart03Test030
     * @tc.desc Verify at(0) returns -1 on all-minus1 5-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test030() {
    Int8Array arr = new Int8Array(new int[] {-1, -1, -1, -1, -1});
    Integer r = arr.at(0);
    assertEqualInt(-1, r);
    }

    /**
     * Verify at(-length) negative index returns first element -1 on all-minus1 Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_3100
     * @tc.name int8ArrayAtPart03Test031
     * @tc.desc Verify at(-length) negative index returns first element -1 on all-minus1 Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test031() {
    Int8Array arr = new Int8Array(new int[] {-1, -1, -1, -1, -1});
    Integer r = arr.at(-5);
    assertEqualInt(-1, r);
    }

    /**
     * Verify at(0) reads int8 min value -128 and returns -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_3200
     * @tc.name int8ArrayAtPart03Test032
     * @tc.desc Verify at(0) reads int8 min value -128 and returns -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test032() {
    Int8Array arr = new Int8Array(new int[] {INT8_MIN});
    Integer r = arr.at(0);
    assertEqualInt(INT8_MIN, r);
    }

    /**
     * Verify at(0) reads int8 max value 127 and returns 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_3300
     * @tc.name int8ArrayAtPart03Test033
     * @tc.desc Verify at(0) reads int8 max value 127 and returns 127
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test033() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX});
    Integer r = arr.at(0);
    assertEqualInt(INT8_MAX, r);
    }

    /**
     * Verify $_set Number.NaN truncated to 0 then at(0) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_3400
     * @tc.name int8ArrayAtPart03Test034
     * @tc.desc Verify $_set Number.NaN truncated to 0 then at(0) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test034() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, Double.NaN);
    Integer r = arr.at(0);
    assertEqualInt(0, r);
    }

    /**
     * Verify $_set 200 truncated wraps to -56 then at(0) returns -56
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_3500
     * @tc.name int8ArrayAtPart03Test035
     * @tc.desc Verify $_set 200 truncated wraps to -56 then at(0) returns -56
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test035() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, 200);
    Integer r = arr.at(0);
    assertEqualInt(-56, r);
    }

    /**
     * Verify $_set 0x80 truncated wraps to -128 then at(0) returns -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_3600
     * @tc.name int8ArrayAtPart03Test036
     * @tc.desc Verify $_set 0x80 truncated wraps to -128 then at(0) returns -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test036() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, 0x80);
    Integer r = arr.at(0);
    assertEqualInt(-128, r);
    }

    /**
     * Verify $_set 0xFF truncated wraps to -1 then at(0) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_3700
     * @tc.name int8ArrayAtPart03Test037
     * @tc.desc Verify $_set 0xFF truncated wraps to -1 then at(0) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test037() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, 0xff);
    Integer r = arr.at(0);
    assertEqualInt(-1, r);
    }

    /**
     * Verify at(0) returns 0 while at(10) returns undefined to distinguish valid 0 fr
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_3800
     * @tc.name int8ArrayAtPart03Test038
     * @tc.desc Verify at(0) returns 0 while at(10) returns undefined to distinguish valid 0 from undefined on all-zero
     * Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test038() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    Integer rIn = arr.at(0);
    Integer rOut = arr.at(10);
    assertEqualInt(0, rIn);
    assertNull(rOut);
    }

    /**
     * Verify at() call does not change original array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_3900
     * @tc.name int8ArrayAtPart03Test039
     * @tc.desc Verify at() call does not change original array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test039() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int before = arr.length();
    assertEqualInt(20, arr.at(1));
    int after = arr.length();
    assertEqual(before, after);
    }

    /**
     * Verify at() call does not change original array element values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_4000
     * @tc.name int8ArrayAtPart03Test040
     * @tc.desc Verify at() call does not change original array element values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test040() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    arr.at(1);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify at() call does not change original array byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_4100
     * @tc.name int8ArrayAtPart03Test041
     * @tc.desc Verify at() call does not change original array byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test041() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int before = arr.byteLength();
    assertEqualInt(20, arr.at(1));
    int after = arr.byteLength();
    assertEqual(before, after);
    }

    /**
     * Verify multiple at() calls on same index return consistent results
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_4200
     * @tc.name int8ArrayAtPart03Test042
     * @tc.desc Verify multiple at() calls on same index return consistent results
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test042() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer r1 = arr.at(1);
    Integer r2 = arr.at(1);
    assertEqualInt(20, r1);
    assertEqualInt(20, r2);
    }

    /**
     * Verify subarray view at(0) returns first element of the view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_4300
     * @tc.name int8ArrayAtPart03Test043
     * @tc.desc Verify subarray view at(0) returns first element of the view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test043() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array view = arr.subarray(1, 3);
    Integer r = view.at(0);
    assertEqualInt(20, r);
    }

    /**
     * Verify slice copy at(0) returns first element of the copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_4400
     * @tc.name int8ArrayAtPart03Test044
     * @tc.desc Verify slice copy at(0) returns first element of the copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test044() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array copy = arr.slice(1, 3);
    Integer r = copy.at(0);
    assertEqualInt(20, r);
    }

    /**
     * Verify at(1) accesses element at given index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_4500
     * @tc.name int8ArrayAtPart03Test045
     * @tc.desc Verify at(1) accesses element at given index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test045() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Int8Array view = arr.subarray(0, 3);
    arr.set(1, 99);
    Integer r = view.at(1);
    assertEqualInt(99, r);
    }

    /**
     * Verify at(0) and at(-length) return same value on 5-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_4600
     * @tc.name int8ArrayAtPart03Test046
     * @tc.desc Verify at(0) and at(-length) return same value on 5-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test046() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Integer r1 = arr.at(0);
    Integer r2 = arr.at(-5);
    assertEqualInt(1, r1);
    assertEqualInt(1, r2);
    }

    /**
     * Verify at(-1) and at(length-1) return same value on 4-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_4700
     * @tc.name int8ArrayAtPart03Test047
     * @tc.desc Verify at(-1) and at(length-1) return same value on 4-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test047() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    Integer r1 = arr.at(-1);
    Integer r2 = arr.at(3);
    assertEqualInt(40, r1);
    assertEqualInt(40, r2);
    }

    /**
     * Verify at(view.length) relative out-of-bounds returns undefined on subarray view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART03_4800
     * @tc.name int8ArrayAtPart03Test048
     * @tc.desc Verify at(view.length) relative out-of-bounds returns undefined on subarray view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart03Test048() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array view = arr.subarray(1, 3);
    Integer r = view.at(2);
    assertNull(r);
    }
}
