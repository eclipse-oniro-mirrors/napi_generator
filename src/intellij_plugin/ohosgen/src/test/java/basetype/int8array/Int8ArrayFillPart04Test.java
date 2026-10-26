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

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayFillPart04Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFillPart04Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify fill(value) single parameter fills entire array, first and last elements both covered
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_0100
     * @tc.name int8ArrayFillPart04Test001
     * @tc.desc Verify fill(value) single parameter fills entire array, first and last elements both covered
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test001() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 1);
    arr.set(3, 2);
    arr.fill(7);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(value, start) fills from start to end, elements before start unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_0200
     * @tc.name int8ArrayFillPart04Test002
     * @tc.desc Verify fill(value, start) fills from start to end, elements before start unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test002() {
    Int8Array arr = new Int8Array(5);
    arr.set(0, 11);
    arr.set(1, 22);
    arr.fill(9, 2);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(22, arr.get(1));
    assertEqualInt(9, arr.get(2));
    assertEqualInt(9, arr.get(4));
    }

    /**
     * Verify fill(value, start, end) fills [start, end) interval, element at end not filled
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_0300
     * @tc.name int8ArrayFillPart04Test003
     * @tc.desc Verify fill(value, start, end) fills [start, end) interval, element at end not filled
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test003() {
    Int8Array arr = new Int8Array(6);
    arr.fill(3, 1, 4);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(3, arr.get(3));
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify fill(value, 0, 0) empty interval fills nothing, array keeps initial zeros
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_0400
     * @tc.name int8ArrayFillPart04Test004
     * @tc.desc Verify fill(value, 0, 0) empty interval fills nothing, array keeps initial zeros
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test004() {
    Int8Array arr = new Int8Array(3);
    arr.fill(5, 0, 0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill(value, 0, length) end=length equivalent to full fill, same as single param
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_0500
     * @tc.name int8ArrayFillPart04Test005
     * @tc.desc Verify fill(value, 0, length) end=length equivalent to full fill, same as single param
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test005() {
    Int8Array arr = new Int8Array(3);
    arr.fill(8, 0, 3);
    assertEqualInt(8, arr.get(0));
    assertEqualInt(8, arr.get(2));
    }

    /**
     * Verify chained fill(5).fill(9) second overrides first, final all 9
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_0600
     * @tc.name int8ArrayFillPart04Test006
     * @tc.desc Verify chained fill(5).fill(9) second overrides first, final all 9
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test006() {
    Int8Array arr = new Int8Array(3);
    arr.fill(5).fill(9);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(9, arr.get(2));
    }

    /**
     * Verify fill(INT8_MIN) writes INT8_MIN to both elements, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_0700
     * @tc.name int8ArrayFillPart04Test007
     * @tc.desc Verify fill(INT8_MIN) writes INT8_MIN to both elements, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test007() {
    Int8Array arr = new Int8Array(2);
    int v = INT8_MIN;
    arr.fill(v);
    Integer r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(1);
    int e2 = INT8_MIN;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify fill(INT8_MAX) writes INT8_MAX to both elements, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_0800
     * @tc.name int8ArrayFillPart04Test008
     * @tc.desc Verify fill(INT8_MAX) writes INT8_MAX to both elements, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test008() {
    Int8Array arr = new Int8Array(2);
    int v = INT8_MAX;
    arr.fill(v);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify fill(0) clears element 0 after $_set(0, 50), on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_0900
     * @tc.name int8ArrayFillPart04Test009
     * @tc.desc Verify fill(0) clears element 0 after $_set(0, 50), on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test009() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, 50);
    int v = 0;
    arr.fill(v);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill(-1) writes -1 to both elements, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_1000
     * @tc.name int8ArrayFillPart04Test010
     * @tc.desc Verify fill(-1) writes -1 to both elements, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test010() {
    Int8Array arr = new Int8Array(2);
    int v = -1;
    arr.fill(v);
    assertEqualInt(-1, arr.get(0));
    assertEqualInt(-1, arr.get(1));
    }

    /**
     * Verify fill(1, 1, 3) fills indices 1 to 2 only, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_1100
     * @tc.name int8ArrayFillPart04Test011
     * @tc.desc Verify fill(1, 1, 3) fills indices 1 to 2 only, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test011() {
    Int8Array arr = new Int8Array(4);
    int v = 1;
    arr.fill(v, 1, 3);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(1, arr.get(1));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify fill(64) writes 64 to both elements, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_1200
     * @tc.name int8ArrayFillPart04Test012
     * @tc.desc Verify fill(64) writes 64 to both elements, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test012() {
    Int8Array arr = new Int8Array(2);
    int v = 64;
    arr.fill(v);
    assertEqualInt(64, arr.get(0));
    }

    /**
     * Verify fill(128) clamps to -128 at $_get(0) on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_1300
     * @tc.name int8ArrayFillPart04Test013
     * @tc.desc Verify fill(128) clamps to -128 at $_get(0) on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test013() {
    Int8Array arr = new Int8Array(2);
    arr.fill(128);
    Integer r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(1);
    int e2 = INT8_MIN;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify fill(-129) clamps to INT8_MAX at $_get(0) on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_1400
     * @tc.name int8ArrayFillPart04Test014
     * @tc.desc Verify fill(-129) clamps to INT8_MAX at $_get(0) on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test014() {
    Int8Array arr = new Int8Array(2);
    arr.fill(-129);
    assertEqualInt(INT8_MAX, arr.get(0));
    assertEqualInt(INT8_MAX, arr.at(0));
    }

    /**
     * Verify fill(255) clamps to -1 at $_get(0) on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_1500
     * @tc.name int8ArrayFillPart04Test015
     * @tc.desc Verify fill(255) clamps to -1 at $_get(0) on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test015() {
    Int8Array arr = new Int8Array(2);
    arr.fill(255);
    assertEqualInt(-1, arr.get(0));
    assertEqualInt(-1, arr.get(1));
    }

    /**
     * Verify fill(256) truncates to 0 clearing element 0, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_1600
     * @tc.name int8ArrayFillPart04Test016
     * @tc.desc Verify fill(256) truncates to 0 clearing element 0, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test016() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 50);
    arr.fill(256);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify fill(0x80) truncates to -128, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_1700
     * @tc.name int8ArrayFillPart04Test017
     * @tc.desc Verify fill(0x80) truncates to -128, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test017() {
    Int8Array arr = new Int8Array(2);
    arr.fill(0x80);
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify fill(0xFF) truncates to -1, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_1800
     * @tc.name int8ArrayFillPart04Test018
     * @tc.desc Verify fill(0xFF) truncates to -1, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test018() {
    Int8Array arr = new Int8Array(2);
    arr.fill(0xff);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify fill(0x100) truncates to 0, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_1900
     * @tc.name int8ArrayFillPart04Test019
     * @tc.desc Verify fill(0x100) truncates to 0, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test019() {
    Int8Array arr = new Int8Array(2);
    arr.fill(0x100);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill(200) truncates to -56, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_2100
     * @tc.name int8ArrayFillPart04Test021
     * @tc.desc Verify fill(200) truncates to -56, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test021() {
    Int8Array arr = new Int8Array(3);
    arr.fill(200);
    assertEqualInt(-56, arr.get(0));
    assertEqualInt(-56, arr.get(2));
    }

    /**
     * Verify fill(Number.NaN) truncates to 0 clearing element 0, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_2200
     * @tc.name int8ArrayFillPart04Test022
     * @tc.desc Verify fill(Number.NaN) truncates to 0 clearing element 0, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test022() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 99);
    arr.fill(Double.NaN);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify fill(1.9) truncates to 1, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_2300
     * @tc.name int8ArrayFillPart04Test023
     * @tc.desc Verify fill(1.9) truncates to 1, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test023() {
    Int8Array arr = new Int8Array(2);
    arr.fill(1.9);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(1));
    }

    /**
     * Verify fill(-1.9) truncates to -1, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_2400
     * @tc.name int8ArrayFillPart04Test024
     * @tc.desc Verify fill(-1.9) truncates to -1, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test024() {
    Int8Array arr = new Int8Array(2);
    arr.fill(-1.9);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify fill(-0.0) truncates to 0, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_2500
     * @tc.name int8ArrayFillPart04Test025
     * @tc.desc Verify fill(-0.0) truncates to 0, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test025() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 77);
    arr.fill(-0.0);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill(Number.MIN_VALUE) converts to 0 at $_get(0) on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_2600
     * @tc.name int8ArrayFillPart04Test026
     * @tc.desc Verify fill(Number.MIN_VALUE) converts to 0 at $_get(0) on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test026() {
    Int8Array arr = new Int8Array(2);
    arr.fill(Double.MIN_VALUE);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.at(0));
    }

    /**
     * Verify start=0 fills from array head, equivalent to default
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_2700
     * @tc.name int8ArrayFillPart04Test027
     * @tc.desc Verify start=0 fills from array head, equivalent to default
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test027() {
    Int8Array arr = new Int8Array(4);
    arr.fill(6, 0);
    assertEqualInt(6, arr.get(0));
    assertEqualInt(6, arr.get(3));
    }

    /**
     * Verify start=1 normal positive start, skips first element fills rest
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_2800
     * @tc.name int8ArrayFillPart04Test028
     * @tc.desc Verify start=1 normal positive start, skips first element fills rest
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test028() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 33);
    arr.fill(7, 1);
    assertEqualInt(33, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify start=length-1 fills only the last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_2900
     * @tc.name int8ArrayFillPart04Test029
     * @tc.desc Verify start=length-1 fills only the last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test029() {
    Int8Array arr = new Int8Array(4);
    arr.fill(5, 3);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(5, arr.get(3));
    }

    /**
     * Verify fill(9, 3) with start equal to length results in no-op, array elements unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_3000
     * @tc.name int8ArrayFillPart04Test030
     * @tc.desc Verify fill(9, 3) with start equal to length results in no-op, array elements unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test030() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, 42);
    arr.fill(9, 3);
    assertEqualInt(42, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill(9, 4) with start greater than length results in no-op, all elements remain default
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_3100
     * @tc.name int8ArrayFillPart04Test031
     * @tc.desc Verify fill(9, 4) with start greater than length results in no-op, all elements remain default
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test031() {
    Int8Array arr = new Int8Array(3);
    arr.fill(9, 4);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify start=-1 negative index normalizes to length-1, fills only last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_3200
     * @tc.name int8ArrayFillPart04Test032
     * @tc.desc Verify start=-1 negative index normalizes to length-1, fills only last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test032() {
    Int8Array arr = new Int8Array(4);
    arr.fill(5, -1);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(5, arr.get(3));
    }

    /**
     * Verify start=-length negative normalizes to 0, fills from head
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_3300
     * @tc.name int8ArrayFillPart04Test033
     * @tc.desc Verify start=-length negative normalizes to 0, fills from head
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test033() {
    Int8Array arr = new Int8Array(4);
    arr.fill(8, -4);
    assertEqualInt(8, arr.get(0));
    assertEqualInt(8, arr.get(3));
    }

    /**
     * Verify start=-length-1 still negative after +length, normalizes to 0 full fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_3400
     * @tc.name int8ArrayFillPart04Test034
     * @tc.desc Verify start=-length-1 still negative after +length, normalizes to 0 full fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test034() {
    Int8Array arr = new Int8Array(4);
    arr.fill(7, -5);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill(2, -1000) clamps negative start to 0 and fills all, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_3500
     * @tc.name int8ArrayFillPart04Test035
     * @tc.desc Verify fill(2, -1000) clamps negative start to 0 and fills all, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test035() {
    Int8Array arr = new Int8Array(3);
    arr.fill(2, -1000);
    assertEqualInt(2, arr.get(0));
    assertEqualInt(2, arr.get(2));
    }

    /**
     * Verify start=-2 after +length becomes positive, fills from second-to-last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_3600
     * @tc.name int8ArrayFillPart04Test036
     * @tc.desc Verify start=-2 after +length becomes positive, fills from second-to-last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test036() {
    Int8Array arr = new Int8Array(5);
    arr.fill(4, -2);
    assertEqualInt(0, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(4, arr.get(4));
    }

    /**
     * Verify fill(9, 2147483647) with extremely large start value results in no-op, array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_3700
     * @tc.name int8ArrayFillPart04Test037
     * @tc.desc Verify fill(9, 2147483647) with extremely large start value results in no-op, array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test037() {
    Int8Array arr = new Int8Array(3);
    arr.set(1, 15);
    arr.fill(9, 2147483647);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(15, arr.get(1));
    }

    /**
     * Verify fill(6, -2147483648) clamps INT32_MIN start to 0 and fills all, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_3800
     * @tc.name int8ArrayFillPart04Test038
     * @tc.desc Verify fill(6, -2147483648) clamps INT32_MIN start to 0 and fills all, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test038() {
    Int8Array arr = new Int8Array(3);
    arr.fill(6, Integer.MIN_VALUE);
    assertEqualInt(6, arr.get(0));
    assertEqualInt(6, arr.get(2));
    }

    /**
     * Verify fill(3, 0, 4) with end=length fills all elements, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_3900
     * @tc.name int8ArrayFillPart04Test039
     * @tc.desc Verify fill(3, 0, 4) with end=length fills all elements, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test039() {
    Int8Array arr = new Int8Array(4);
    arr.fill(3, 0, 4);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(3, arr.get(3));
    }

    /**
     * Verify fill(7, 0, 3) fills indices 0 to 2, keeps 88 at index 3, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_4000
     * @tc.name int8ArrayFillPart04Test040
     * @tc.desc Verify fill(7, 0, 3) fills indices 0 to 2, keeps 88 at index 3, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test040() {
    Int8Array arr = new Int8Array(4);
    arr.set(3, 88);
    arr.fill(7, 0, 3);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(88, arr.get(3));
    }

    /**
     * Verify end=0 empty interval fills nothing
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_4100
     * @tc.name int8ArrayFillPart04Test041
     * @tc.desc Verify end=0 empty interval fills nothing
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test041() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, 25);
    arr.fill(9, 0, 0);
    assertEqualInt(25, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify end=1 fills only first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_4200
     * @tc.name int8ArrayFillPart04Test042
     * @tc.desc Verify end=1 fills only first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test042() {
    Int8Array arr = new Int8Array(4);
    arr.fill(5, 0, 1);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify fill(4, 0, 4) clamps end to length and fills all, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_4300
     * @tc.name int8ArrayFillPart04Test043
     * @tc.desc Verify fill(4, 0, 4) clamps end to length and fills all, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test043() {
    Int8Array arr = new Int8Array(3);
    arr.fill(4, 0, 4);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(4, arr.get(2));
    }

    /**
     * Verify end=-1 negative index normalizes to length-1, last element not filled
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_4400
     * @tc.name int8ArrayFillPart04Test044
     * @tc.desc Verify end=-1 negative index normalizes to length-1, last element not filled
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test044() {
    Int8Array arr = new Int8Array(4);
    arr.set(3, 99);
    arr.fill(2, 0, -1);
    assertEqualInt(2, arr.get(0));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(99, arr.get(3));
    }

    /**
     * Verify end=-length negative normalizes to 0, empty interval fills nothing
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_4500
     * @tc.name int8ArrayFillPart04Test045
     * @tc.desc Verify end=-length negative normalizes to 0, empty interval fills nothing
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test045() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 17);
    arr.fill(8, 0, -4);
    assertEqualInt(17, arr.get(0));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify fill(8, 0, -5) with end normalizing to 0 results in empty interval no-op, array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_4600
     * @tc.name int8ArrayFillPart04Test046
     * @tc.desc Verify fill(8, 0, -5) with end normalizing to 0 results in empty interval no-op, array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test046() {
    Int8Array arr = new Int8Array(4);
    arr.fill(8, 0, -5);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify fill(7, 3, 1) with start greater than end results in no-op, array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_4700
     * @tc.name int8ArrayFillPart04Test047
     * @tc.desc Verify fill(7, 3, 1) with start greater than end results in no-op, array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test047() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 44);
    arr.fill(7, 3, 1);
    assertEqualInt(44, arr.get(0));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify fill(7, 2, 2) with start equal to end results in no-op, element at index 2 unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_4800
     * @tc.name int8ArrayFillPart04Test048
     * @tc.desc Verify fill(7, 2, 2) with start equal to end results in no-op, element at index 2 unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test048() {
    Int8Array arr = new Int8Array(4);
    arr.set(2, 31);
    arr.fill(7, 2, 2);
    assertEqualInt(31, arr.get(2));
    }

    /**
     * Verify end=2147483647 very large value clamped to length, full fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_4900
     * @tc.name int8ArrayFillPart04Test049
     * @tc.desc Verify end=2147483647 very large value clamped to length, full fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test049() {
    Int8Array arr = new Int8Array(3);
    arr.fill(6, 0, 2147483647);
    assertEqualInt(6, arr.get(0));
    assertEqualInt(6, arr.get(2));
    }

    /**
     * Verify fill(6, 0, -2147483648) with end normalizing to 0 results in empty inter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_5000
     * @tc.name int8ArrayFillPart04Test050
     * @tc.desc Verify fill(6, 0, -2147483648) with end normalizing to 0 results in empty interval no-op, array
     * unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test050() {
    Int8Array arr = new Int8Array(3);
    arr.set(1, 19);
    arr.fill(6, 0, Integer.MIN_VALUE);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(19, arr.get(1));
    }

    /**
     * Verify start=2, end=4 middle range fill, elements outside interval unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_5100
     * @tc.name int8ArrayFillPart04Test051
     * @tc.desc Verify start=2, end=4 middle range fill, elements outside interval unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test051() {
    Int8Array arr = new Int8Array(6);
    arr.fill(5, 2, 4);
    assertEqualInt(0, arr.get(1));
    assertEqualInt(5, arr.get(2));
    assertEqualInt(5, arr.get(3));
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify fill(7, -3, -1) fills indices 2 to 3, on new Int8Array(5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_5200
     * @tc.name int8ArrayFillPart04Test052
     * @tc.desc Verify fill(7, -3, -1) fills indices 2 to 3, on new Int8Array(5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test052() {
    Int8Array arr = new Int8Array(5);
    arr.fill(7, -3, -1);
    assertEqualInt(0, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(3));
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify fill(3, 1, 9) clamps end to length and fills indices 1 to 3, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_5300
     * @tc.name int8ArrayFillPart04Test053
     * @tc.desc Verify fill(3, 1, 9) clamps end to length and fills indices 1 to 3, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test053() {
    Int8Array arr = new Int8Array(4);
    arr.fill(3, 1, 9);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(3, arr.get(3));
    }

    /**
     * Verify fill(2, -100, -1) fills indices 0 to 2, keeps 55 at index 3, on new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_5400
     * @tc.name int8ArrayFillPart04Test054
     * @tc.desc Verify fill(2, -100, -1) fills indices 0 to 2, keeps 55 at index 3, on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test054() {
    Int8Array arr = new Int8Array(4);
    arr.set(3, 55);
    arr.fill(2, -100, -1);
    assertEqualInt(2, arr.get(0));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(55, arr.get(3));
    }

    /**
     * Verify fill(9, 3, 8) with start equal to length results in no-op, all elements unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_5500
     * @tc.name int8ArrayFillPart04Test055
     * @tc.desc Verify fill(9, 3, 8) with start equal to length results in no-op, all elements unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test055() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, 41);
    arr.fill(9, 3, 8);
    assertEqualInt(41, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify start=0, end=-1 negative end normalizes to exclude last, front segment fully filled
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_5600
     * @tc.name int8ArrayFillPart04Test056
     * @tc.desc Verify start=0, end=-1 negative end normalizes to exclude last, front segment fully filled
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test056() {
    Int8Array arr = new Int8Array(5);
    arr.set(4, 77);
    arr.fill(4, 0, -1);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(77, arr.get(4));
    }

    /**
     * Verify fill(6, -2, 5) fills indices 3 to 4, on new Int8Array(5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_5700
     * @tc.name int8ArrayFillPart04Test057
     * @tc.desc Verify fill(6, -2, 5) fills indices 3 to 4, on new Int8Array(5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test057() {
    Int8Array arr = new Int8Array(5);
    arr.fill(6, -2, 5);
    assertEqualInt(0, arr.get(2));
    assertEqualInt(6, arr.get(3));
    assertEqualInt(6, arr.get(4));
    }

    /**
     * Verify start=1, end=2 single element interval fills only index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_5800
     * @tc.name int8ArrayFillPart04Test058
     * @tc.desc Verify start=1, end=2 single element interval fills only index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test058() {
    Int8Array arr = new Int8Array(4);
    arr.fill(9, 1, 2);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(9, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill(v) with v=42 writes 42 to all elements, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_5900
     * @tc.name int8ArrayFillPart04Test059
     * @tc.desc Verify fill(v) with v=42 writes 42 to all elements, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test059() {
    Int8Array arr = new Int8Array(3);
    int v = 42;
    arr.fill(v);
    assertEqualInt(42, arr.get(0));
    assertEqualInt(42, arr.get(2));
    }

    /**
     * Verify fill(42) writes 42 to all elements, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_6000
     * @tc.name int8ArrayFillPart04Test060
     * @tc.desc Verify fill(42) writes 42 to all elements, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test060() {
    Int8Array arr = new Int8Array(3);
    arr.fill(42);
    assertEqualInt(42, arr.get(0));
    assertEqualInt(42, arr.get(2));
    }

    /**
     * Verify fill with const byte variable -128 and literal -128 produce identical $_
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_6100
     * @tc.name int8ArrayFillPart04Test061
     * @tc.desc Verify fill with const byte variable -128 and literal -128 produce identical $_
     * get(0) results on two Int8Array instances
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test061() {
    Int8Array a = new Int8Array(2);
    int v = -128;
    a.fill(v);
    Integer r1 = a.get(0);
    int e1 = -128;
    assertEqualInt(e1, r1);
    Integer r2 = a.get(1);
    int e2 = -128;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify fill with const byte variable 100 and literal 100 produce identical $_ge
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_6200
     * @tc.name int8ArrayFillPart04Test062
     * @tc.desc Verify fill with const byte variable 100 and literal 100 produce identical $_get(1) results on two
     * Int8Array instances
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test062() {
    Int8Array a = new Int8Array(2);
    int v = 100;
    a.fill(v);
    Integer r1 = a.get(0);
    int e1 = 100;
    assertEqualInt(e1, r1);
    Integer r2 = a.get(1);
    int e2 = 100;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify fill returns this reference, return value equals original array reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_6300
     * @tc.name int8ArrayFillPart04Test063
     * @tc.desc Verify fill returns this reference, return value equals original array reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test063() {
    Int8Array arr = new Int8Array(3);
    Int8Array result = arr.fill(5);
    Integer r1 = result.get(0);
    int e1 = 5;
    assertEqualInt(e1, r1);
    Integer r2 = result.get(2);
    int e2 = 5;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify chained fill().fill() return value is still this reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_6400
     * @tc.name int8ArrayFillPart04Test064
     * @tc.desc Verify chained fill().fill() return value is still this reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test064() {
    Int8Array arr = new Int8Array(3);
    Int8Array result = arr.fill(5).fill(9);
    Integer r1 = result.get(0);
    int e1 = 9;
    assertEqualInt(e1, r1);
    Integer r2 = result.get(2);
    int e2 = 9;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify length property unchanged after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_6500
     * @tc.name int8ArrayFillPart04Test065
     * @tc.desc Verify length property unchanged after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test065() {
    Int8Array arr = new Int8Array(5);
    arr.fill(7);
    Integer r1 = arr.get(0);
    int e1 = 7;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(4);
    int e2 = 7;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify byteLength property unchanged after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_6600
     * @tc.name int8ArrayFillPart04Test066
     * @tc.desc Verify byteLength property unchanged after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test066() {
    Int8Array arr = new Int8Array(5);
    arr.fill(7);
    Integer r1 = arr.get(0);
    int e1 = 7;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(4);
    int e2 = 7;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify buffer reference unchanged after fill, still same ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_6700
     * @tc.name int8ArrayFillPart04Test067
     * @tc.desc Verify buffer reference unchanged after fill, still same ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test067() {
    Int8Array arr = new Int8Array(4);
    arr.fill(6);
    Integer r1 = arr.get(0);
    int e1 = 6;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(3);
    int e2 = 6;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify all elements within fill range are overwritten with specified value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_6800
     * @tc.name int8ArrayFillPart04Test068
     * @tc.desc Verify all elements within fill range are overwritten with specified value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test068() {
    Int8Array arr = new Int8Array(5);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.fill(8, 0, 3);
    assertEqualInt(8, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(8, arr.get(2));
    }

    /**
     * Verify elements outside fill range keep original values unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_6900
     * @tc.name int8ArrayFillPart04Test069
     * @tc.desc Verify elements outside fill range keep original values unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test069() {
    Int8Array arr = new Int8Array(5);
    arr.set(0, 11);
    arr.set(4, 22);
    arr.fill(9, 1, 4);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(22, arr.get(4));
    }

    /**
     * Verify fill return value can chain subarray to generate view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_7000
     * @tc.name int8ArrayFillPart04Test070
     * @tc.desc Verify fill return value can chain subarray to generate view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test070() {
    Int8Array arr = new Int8Array(5);
    Int8Array sub = arr.fill(4).subarray(1, 3);
    assertEqual(2, sub.length());
    assertEqualInt(4, sub.get(0));
    }

    /**
     * Verify fill return value can chain reverse for in-place reversal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_7100
     * @tc.name int8ArrayFillPart04Test071
     * @tc.desc Verify fill return value can chain reverse for in-place reversal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test071() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, 1);
    arr.fill(5).reverse();
    assertEqualInt(5, arr.get(0));
    }

    /**
     * Verify fill return value can chain sort for sorting
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_7200
     * @tc.name int8ArrayFillPart04Test072
     * @tc.desc Verify fill return value can chain sort for sorting
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test072() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 9);
    arr.fill(3).sort();
    assertEqualInt(3, arr.get(0));
    }

    /**
     * Verify empty array fill single param silently no-op, no exception
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_7300
     * @tc.name int8ArrayFillPart04Test073
     * @tc.desc Verify empty array fill single param silently no-op, no exception
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test073() {
    Int8Array arr = new Int8Array(0);
    Int8Array result = arr.fill(5);
    int r1 = result.length();
    int e1 = 0;
    assertEqual(e1, r1);
    assertEqual(0, arr.length());
    }

    /**
     * Verify empty array fill with start/end silently no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_7400
     * @tc.name int8ArrayFillPart04Test074
     * @tc.desc Verify empty array fill with start/end silently no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test074() {
    Int8Array arr = new Int8Array(0);
    arr.fill(5, 0, 3);
    assertEqual(0, arr.length());
    }

    /**
     * Verify single element array fill covers whole array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_7500
     * @tc.name int8ArrayFillPart04Test075
     * @tc.desc Verify single element array fill covers whole array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test075() {
    Int8Array arr = new Int8Array(1);
    arr.fill(42);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify single element array fill start=1 equals length silently no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_7600
     * @tc.name int8ArrayFillPart04Test076
     * @tc.desc Verify single element array fill start=1 equals length silently no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test076() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, 33);
    arr.fill(9, 1);
    assertEqualInt(33, arr.get(0));
    }

    /**
     * Verify all-same element array fill overwrites to uniform value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_7700
     * @tc.name int8ArrayFillPart04Test077
     * @tc.desc Verify all-same element array fill overwrites to uniform value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test077() {
    Int8Array arr = Int8Array.of(7, 7, 7, 7);
    arr.fill(3);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(3, arr.get(3));
    }

    /**
     * Verify all-different element array fill partial range preserves differences outside
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_7800
     * @tc.name int8ArrayFillPart04Test078
     * @tc.desc Verify all-different element array fill partial range preserves differences outside
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test078() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    arr.fill(0, 1, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify fill element by element validation of entire array content
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_7900
     * @tc.name int8ArrayFillPart04Test079
     * @tc.desc Verify fill element by element validation of entire array content
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test079() {
    Int8Array arr = new Int8Array(4);
    arr.fill(-3);
    assertEqualInt(-3, arr.get(0));
    assertEqualInt(-3, arr.get(1));
    assertEqualInt(-3, arr.get(2));
    assertEqualInt(-3, arr.get(3));
    }

    /**
     * Verify fill range only contains single element start=length-1, end=length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_8000
     * @tc.name int8ArrayFillPart04Test080
     * @tc.desc Verify fill range only contains single element start=length-1, end=length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test080() {
    Int8Array arr = new Int8Array(4);
    arr.fill(9, 3, 4);
    assertEqualInt(0, arr.get(2));
    assertEqualInt(9, arr.get(3));
    }

    /**
     * Verify fill(128) truncates to -128, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_8100
     * @tc.name int8ArrayFillPart04Test081
     * @tc.desc Verify fill(128) truncates to -128, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test081() {
    Int8Array arr = new Int8Array(3);
    arr.fill(128);
    assertEqualInt(-128, arr.at(0));
    assertEqualInt(-128, arr.at(2));
    }

    /**
     * Verify fill(255) truncates to -1, on new Int8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_8200
     * @tc.name int8ArrayFillPart04Test082
     * @tc.desc Verify fill(255) truncates to -1, on new Int8Array(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test082() {
    Int8Array arr = new Int8Array(3);
    arr.fill(255);
    assertEqualInt(-1, arr.at(0));
    assertEqualInt(-1, arr.at(1));
    assertEqualInt(-1, arr.at(2));
    }

    /**
     * Verify fill(Number.NaN) after $_set(0, 55) truncates to 0, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_8300
     * @tc.name int8ArrayFillPart04Test083
     * @tc.desc Verify fill(Number.NaN) after $_set(0, 55) truncates to 0, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test083() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 55);
    arr.fill(Double.NaN);
    assertEqualInt(0, arr.at(0));
    }

    /**
     * Verify fill(200) truncates to -56, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_8400
     * @tc.name int8ArrayFillPart04Test084
     * @tc.desc Verify fill(200) truncates to -56, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test084() {
    Int8Array arr = new Int8Array(2);
    arr.fill(200);
    assertEqualInt(-56, arr.at(0));
    }

    /**
     * Verify fill(256) after $_set(0, 88) truncates to 0, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_8500
     * @tc.name int8ArrayFillPart04Test085
     * @tc.desc Verify fill(256) after $_set(0, 88) truncates to 0, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test085() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 88);
    arr.fill(256);
    assertEqualInt(0, arr.at(0));
    }

    /**
     * Verify fill modifies self and subarray view reflects modification synchronously (shared buffer)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_8600
     * @tc.name int8ArrayFillPart04Test086
     * @tc.desc Verify fill modifies self and subarray view reflects modification synchronously (shared buffer)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test086() {
    Int8Array arr = new Int8Array(6);
    Int8Array sub = arr.subarray(1, 4);
    arr.fill(5, 1, 4);
    assertEqualInt(5, sub.get(0));
    assertEqualInt(5, sub.get(2));
    }

    /**
     * Verify fill on subarray view reflects back to original array (shared buffer)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_8700
     * @tc.name int8ArrayFillPart04Test087
     * @tc.desc Verify fill on subarray view reflects back to original array (shared buffer)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test087() {
    Int8Array arr = new Int8Array(6);
    Int8Array sub = arr.subarray(2, 5);
    sub.fill(7);
    assertEqualInt(0, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(4));
    assertEqualInt(0, arr.get(5));
    }

    /**
     * Verify byteOffset property unchanged after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_8800
     * @tc.name int8ArrayFillPart04Test088
     * @tc.desc Verify byteOffset property unchanged after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFillPart04Test088() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 2, 4);
    arr.fill(5);
    int r1 = arr.byteOffset();
    int e1 = 2;
    assertEqual(e1, r1);
    Integer r2 = arr.get(0);
    int e2 = 5;
    assertEqualInt(e2, r2);
    Integer r3 = arr.get(3);
    int e3 = 5;
    assertEqualInt(e3, r3);
    }

    /**
     * Verify fill(Number.POSITIVE_INFINITY) via at(0) truncates to 0, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILL_PART04_TEST_9200
     * @tc.name int8ArrayFillPart04Test092
     * @tc.desc Verify fill(Number.POSITIVE_INFINITY) via at(0) truncates to 0, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
