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
 * Int8ArrayIncludesPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIncludesPart01Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify includes(2) on Int8Array.of(1, 2, 3) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_0100
     * @tc.name int8ArrayIncludesPart01Test001
     * @tc.desc Verify includes(2) on Int8Array.of(1, 2, 3) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test001() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    boolean res1 = arr.includes(2);
    assertTrue(res1);
    }

    /**
     * Verify includes(9) returns false on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_0200
     * @tc.name int8ArrayIncludesPart01Test002
     * @tc.desc Verify includes(9) returns false on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test002() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    boolean res1 = arr.includes(9);
    assertFalse(res1);
    }

    /**
     * Verify includes(20, 1) returns true on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_0300
     * @tc.name int8ArrayIncludesPart01Test003
     * @tc.desc Verify includes(20, 1) returns true on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test003() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    boolean res1 = arr.includes(20, 1);
    assertTrue(res1);
    }

    /**
     * Verify includes(INT8_MIN) on Int8Array.of(INT8_MIN, 0, INT8_MAX) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_0400
     * @tc.name int8ArrayIncludesPart01Test004
     * @tc.desc Verify includes(INT8_MIN) on Int8Array.of(INT8_MIN, 0, INT8_MAX) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test004() {
    int target = INT8_MIN;
    Int8Array arr = Int8Array.of(INT8_MIN, 0, INT8_MAX);
    boolean res1 = arr.includes(target);
    assertTrue(res1);
    }

    /**
     * Verify includes(INT8_MAX) on Int8Array.of(0, INT8_MAX, -1) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_0500
     * @tc.name int8ArrayIncludesPart01Test005
     * @tc.desc Verify includes(INT8_MAX) on Int8Array.of(0, INT8_MAX, -1) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test005() {
    int target = INT8_MAX;
    Int8Array arr = Int8Array.of(0, INT8_MAX, -1);
    boolean res1 = arr.includes(target);
    assertTrue(res1);
    }

    /**
     * Verify includes(0) on Int8Array.of(-1, 0, 1) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_0600
     * @tc.name int8ArrayIncludesPart01Test006
     * @tc.desc Verify includes(0) on Int8Array.of(-1, 0, 1) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test006() {
    int target = 0;
    Int8Array arr = Int8Array.of(-1, 0, 1);
    boolean res1 = arr.includes(target);
    assertTrue(res1);
    }

    /**
     * Verify includes(-1) on Int8Array.of(-1, INT8_MAX, 0) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_0700
     * @tc.name int8ArrayIncludesPart01Test007
     * @tc.desc Verify includes(-1) on Int8Array.of(-1, INT8_MAX, 0) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test007() {
    int target = -1;
    Int8Array arr = Int8Array.of(-1, INT8_MAX, 0);
    boolean res1 = arr.includes(target);
    assertTrue(res1);
    }

    /**
     * Verify includes(50) on Int8Array.of(50, -50, 0) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_0800
     * @tc.name int8ArrayIncludesPart01Test008
     * @tc.desc Verify includes(50) on Int8Array.of(50, -50, 0) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test008() {
    int target = 50;
    Int8Array arr = Int8Array.of(50, -50, 0);
    boolean res1 = arr.includes(target);
    assertTrue(res1);
    }

    /**
     * Verify includes(-50) on Int8Array.of(50, -50, 0) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_0900
     * @tc.name int8ArrayIncludesPart01Test009
     * @tc.desc Verify includes(-50) on Int8Array.of(50, -50, 0) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test009() {
    int target = -50;
    Int8Array arr = Int8Array.of(50, -50, 0);
    boolean res1 = arr.includes(target);
    assertTrue(res1);
    }

    /**
     * Verify includes(INT8_MIN) on Int8Array.of(0, INT8_MAX, -1) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_1000
     * @tc.name int8ArrayIncludesPart01Test010
     * @tc.desc Verify includes(INT8_MIN) on Int8Array.of(0, INT8_MAX, -1) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test010() {
    int target = INT8_MIN;
    Int8Array arr = Int8Array.of(0, INT8_MAX, -1);
    boolean res1 = arr.includes(target);
    assertFalse(res1);
    }

    /**
     * Verify includes(INT8_MAX) on Int8Array.of(0, INT8_MIN, -1) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_1100
     * @tc.name int8ArrayIncludesPart01Test011
     * @tc.desc Verify includes(INT8_MAX) on Int8Array.of(0, INT8_MIN, -1) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test011() {
    int target = INT8_MAX;
    Int8Array arr = Int8Array.of(0, INT8_MIN, -1);
    boolean res1 = arr.includes(target);
    assertFalse(res1);
    }

    /**
     * Verify includes(0) on Int8Array.of(-1, -2, -3) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_1200
     * @tc.name int8ArrayIncludesPart01Test012
     * @tc.desc Verify includes(0) on Int8Array.of(-1, -2, -3) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test012() {
    int target = 0;
    Int8Array arr = Int8Array.of(-1, -2, -3);
    boolean res1 = arr.includes(target);
    assertFalse(res1);
    }

    /**
     * Verify includes(50) on Int8Array.of(1, 2, 3) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_1300
     * @tc.name int8ArrayIncludesPart01Test013
     * @tc.desc Verify includes(50) on Int8Array.of(1, 2, 3) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test013() {
    int target = 50;
    Int8Array arr = Int8Array.of(1, 2, 3);
    boolean res1 = arr.includes(target);
    assertFalse(res1);
    }

    /**
     * Verify includes(-50) on Int8Array.of(1, 2, 3) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_1400
     * @tc.name int8ArrayIncludesPart01Test014
     * @tc.desc Verify includes(-50) on Int8Array.of(1, 2, 3) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test014() {
    int target = -50;
    Int8Array arr = Int8Array.of(1, 2, 3);
    boolean res1 = arr.includes(target);
    assertFalse(res1);
    }

    /**
     * Verify includes(128) on Int8Array.of(INT8_MIN, 0, INT8_MAX) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_1500
     * @tc.name int8ArrayIncludesPart01Test015
     * @tc.desc Verify includes(128) on Int8Array.of(INT8_MIN, 0, INT8_MAX) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test015() {
    Int8Array arr = Int8Array.of(INT8_MIN, 0, INT8_MAX);
    boolean res1 = arr.includes(128);
    assertFalse(res1);
    }

    /**
     * Verify includes(-129) on Int8Array.of(0, INT8_MAX, -1) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_1600
     * @tc.name int8ArrayIncludesPart01Test016
     * @tc.desc Verify includes(-129) on Int8Array.of(0, INT8_MAX, -1) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test016() {
    Int8Array arr = Int8Array.of(0, INT8_MAX, -1);
    boolean res1 = arr.includes(-129);
    assertFalse(res1);
    }

    /**
     * Verify includes(255) on Int8Array.of(-1, 0, 1) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_1700
     * @tc.name int8ArrayIncludesPart01Test017
     * @tc.desc Verify includes(255) on Int8Array.of(-1, 0, 1) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test017() {
    Int8Array arr = Int8Array.of(-1, 0, 1);
    boolean res1 = arr.includes(255);
    assertFalse(res1);
    }

    /**
     * Verify includes(256) on Int8Array.of(0, 1, 2) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_1800
     * @tc.name int8ArrayIncludesPart01Test018
     * @tc.desc Verify includes(256) on Int8Array.of(0, 1, 2) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test018() {
    Int8Array arr = Int8Array.of(0, 1, 2);
    boolean res1 = arr.includes(256);
    assertFalse(res1);
    }

    /**
     * Verify includes(200) on Int8Array.of(-56, 0, 1) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_2400
     * @tc.name int8ArrayIncludesPart01Test024
     * @tc.desc Verify includes(200) on Int8Array.of(-56, 0, 1) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test024() {
    Int8Array arr = Int8Array.of(-56, 0, 1);
    boolean res1 = arr.includes(200);
    assertFalse(res1);
    }

    /**
     * Verify includes(300) on Int8Array.of(44, 0, 1) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_2600
     * @tc.name int8ArrayIncludesPart01Test026
     * @tc.desc Verify includes(300) on Int8Array.of(44, 0, 1) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test026() {
    Int8Array arr = Int8Array.of(44, 0, 1);
    boolean res1 = arr.includes(300);
    assertFalse(res1);
    }

    /**
     * Verify includes(128) on Int8Array.of(0, 1, 2) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_2700
     * @tc.name int8ArrayIncludesPart01Test027
     * @tc.desc Verify includes(128) on Int8Array.of(0, 1, 2) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test027() {
    Int8Array arr = Int8Array.of(0, 1, 2);
    boolean res1 = arr.includes(128);
    assertFalse(res1);
    }

    /**
     * Verify includes(200) on Int8Array.of(0, 1, 2) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_3000
     * @tc.name int8ArrayIncludesPart01Test030
     * @tc.desc Verify includes(200) on Int8Array.of(0, 1, 2) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test030() {
    Int8Array arr = Int8Array.of(0, 1, 2);
    boolean res1 = arr.includes(200);
    assertFalse(res1);
    }

    /**
     * Verify includes(1, 0) on Int8Array.of(1, 2, 3) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_3100
     * @tc.name int8ArrayIncludesPart01Test031
     * @tc.desc Verify includes(1, 0) on Int8Array.of(1, 2, 3) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test031() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    boolean res1 = arr.includes(1, 0);
    assertTrue(res1);
    }

    /**
     * Verify includes(15, 1) returns true on Int8Array.of(5, 15, 25)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_3200
     * @tc.name int8ArrayIncludesPart01Test032
     * @tc.desc Verify includes(15, 1) returns true on Int8Array.of(5, 15, 25)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test032() {
    Int8Array arr = Int8Array.of(5, 15, 25);
    boolean res1 = arr.includes(15, 1);
    assertTrue(res1);
    }

    /**
     * Verify includes(3, 2) returns true on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_3300
     * @tc.name int8ArrayIncludesPart01Test033
     * @tc.desc Verify includes(3, 2) returns true on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test033() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    boolean res1 = arr.includes(3, 2);
    assertTrue(res1);
    }

    /**
     * Verify includes(1, 3) returns false on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_3400
     * @tc.name int8ArrayIncludesPart01Test034
     * @tc.desc Verify includes(1, 3) returns false on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test034() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    boolean res1 = arr.includes(1, 3);
    assertFalse(res1);
    }

    /**
     * Verify includes(1, 4) returns false on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_3500
     * @tc.name int8ArrayIncludesPart01Test035
     * @tc.desc Verify includes(1, 4) returns false on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test035() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    boolean res1 = arr.includes(1, 4);
    assertFalse(res1);
    }

    /**
     * Verify includes(3, -1) on Int8Array.of(1, 2, 3) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_3600
     * @tc.name int8ArrayIncludesPart01Test036
     * @tc.desc Verify includes(3, -1) on Int8Array.of(1, 2, 3) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test036() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    boolean res1 = arr.includes(3, -1);
    assertTrue(res1);
    }

    /**
     * Verify includes(1, -3) returns true on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_3700
     * @tc.name int8ArrayIncludesPart01Test037
     * @tc.desc Verify includes(1, -3) returns true on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test037() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    boolean res1 = arr.includes(1, -3);
    assertTrue(res1);
    }

    /**
     * Verify includes(1, -4) returns true on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_3800
     * @tc.name int8ArrayIncludesPart01Test038
     * @tc.desc Verify includes(1, -4) returns true on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test038() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    boolean res1 = arr.includes(1, -4);
    assertTrue(res1);
    }

    /**
     * Verify includes(1, 2147483647) with large fromIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_3900
     * @tc.name int8ArrayIncludesPart01Test039
     * @tc.desc Verify includes(1, 2147483647) with large fromIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test039() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    boolean res1 = arr.includes(1, 2147483647);
    assertFalse(res1);
    }

    /**
     * Verify includes(1, -2147483648) returns true on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_4000
     * @tc.name int8ArrayIncludesPart01Test040
     * @tc.desc Verify includes(1, -2147483648) returns true on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test040() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    boolean res1 = arr.includes(1, Integer.MIN_VALUE);
    assertTrue(res1);
    }

    /**
     * Verify includes(5) returns true and includes(5, 0) returns true on Int8Array.of(5, 6, 7)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_4100
     * @tc.name int8ArrayIncludesPart01Test041
     * @tc.desc Verify includes(5) returns true and includes(5, 0) returns true on Int8Array.of(5, 6, 7)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test041() {
    Int8Array arr = Int8Array.of(5, 6, 7);
    boolean r1 = arr.includes(5);
    boolean r2 = arr.includes(5, 0);
    assertTrue(r1);
    assertTrue(r2);
    }

    /**
     * Verify includes(2, 1) returns true on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_4200
     * @tc.name int8ArrayIncludesPart01Test042
     * @tc.desc Verify includes(2, 1) returns true on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test042() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    boolean res1 = arr.includes(2, 1);
    assertTrue(res1);
    }

    /**
     * Verify includes(7, 1) returns false on Int8Array.of(7, 8, 9)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_4300
     * @tc.name int8ArrayIncludesPart01Test043
     * @tc.desc Verify includes(7, 1) returns false on Int8Array.of(7, 8, 9)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test043() {
    Int8Array arr = Int8Array.of(7, 8, 9);
    boolean res1 = arr.includes(7, 1);
    assertFalse(res1);
    }

    /**
     * Verify includes(1, -100) returns true on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_4400
     * @tc.name int8ArrayIncludesPart01Test044
     * @tc.desc Verify includes(1, -100) returns true on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test044() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    boolean res1 = arr.includes(1, -100);
    assertTrue(res1);
    }

    /**
     * Verify includes(1) on an empty Int8Array.of() returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_4500
     * @tc.name int8ArrayIncludesPart01Test045
     * @tc.desc Verify includes(1) on an empty Int8Array.of() returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test045() {
    Int8Array arr = Int8Array.of();
    boolean res1 = arr.includes(1);
    assertFalse(res1);
    }

    /**
     * Verify includes(1, 0) on an empty Int8Array.of() returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_4600
     * @tc.name int8ArrayIncludesPart01Test046
     * @tc.desc Verify includes(1, 0) on an empty Int8Array.of() returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test046() {
    Int8Array arr = Int8Array.of();
    boolean res1 = arr.includes(1, 0);
    assertFalse(res1);
    }

    /**
     * Verify includes(42) returns true on Int8Array.of(42)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_4700
     * @tc.name int8ArrayIncludesPart01Test047
     * @tc.desc Verify includes(42) returns true on Int8Array.of(42)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test047() {
    Int8Array arr = Int8Array.of(42);
    boolean res1 = arr.includes(42);
    assertTrue(res1);
    }

    /**
     * Verify includes(43) returns false on Int8Array.of(42)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_4800
     * @tc.name int8ArrayIncludesPart01Test048
     * @tc.desc Verify includes(43) returns false on Int8Array.of(42)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test048() {
    Int8Array arr = Int8Array.of(42);
    boolean res1 = arr.includes(43);
    assertFalse(res1);
    }

    /**
     * Verify includes(42, 1) returns false on Int8Array.of(42)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_4900
     * @tc.name int8ArrayIncludesPart01Test049
     * @tc.desc Verify includes(42, 1) returns false on Int8Array.of(42)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test049() {
    Int8Array arr = Int8Array.of(42);
    boolean res1 = arr.includes(42, 1);
    assertFalse(res1);
    }

    /**
     * Verify includes(42, -1) returns true on Int8Array.of(42)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_5000
     * @tc.name int8ArrayIncludesPart01Test050
     * @tc.desc Verify includes(42, -1) returns true on Int8Array.of(42)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test050() {
    Int8Array arr = Int8Array.of(42);
    boolean res1 = arr.includes(42, -1);
    assertTrue(res1);
    }

    /**
     * Verify includes(10, 2) returns false on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_5100
     * @tc.name int8ArrayIncludesPart01Test051
     * @tc.desc Verify includes(10, 2) returns false on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test051() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    boolean res1 = arr.includes(10, 2);
    assertFalse(res1);
    }

    /**
     * Verify includes(30, 1) returns true on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_5200
     * @tc.name int8ArrayIncludesPart01Test052
     * @tc.desc Verify includes(30, 1) returns true on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test052() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    boolean res1 = arr.includes(30, 1);
    assertTrue(res1);
    }

    /**
     * Verify includes(5) on Int8Array.of(5, 10, 15) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_5300
     * @tc.name int8ArrayIncludesPart01Test053
     * @tc.desc Verify includes(5) on Int8Array.of(5, 10, 15) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test053() {
    int target = 5;
    Int8Array arr = Int8Array.of(5, 10, 15);
    boolean res1 = arr.includes(target);
    assertTrue(res1);
    }

    /**
     * Verify includes(261) on Int8Array.of(5, 10, 15) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_5400
     * @tc.name int8ArrayIncludesPart01Test054
     * @tc.desc Verify includes(261) on Int8Array.of(5, 10, 15) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test054() {
    Int8Array arr = Int8Array.of(5, 10, 15);
    boolean res1 = arr.includes(261);
    assertFalse(res1);
    }

    /**
     * Verify includes(126) on Int8Array.of(126, 0, -1) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_5500
     * @tc.name int8ArrayIncludesPart01Test055
     * @tc.desc Verify includes(126) on Int8Array.of(126, 0, -1) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test055() {
    int target = 126;
    Int8Array arr = Int8Array.of(126, 0, -1);
    boolean res1 = arr.includes(target);
    assertTrue(res1);
    }

    /**
     * Verify includes(1000) on Int8Array.of(-24, 0, 1) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_5600
     * @tc.name int8ArrayIncludesPart01Test056
     * @tc.desc Verify includes(1000) on Int8Array.of(-24, 0, 1) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test056() {
    Int8Array arr = Int8Array.of(-24, 0, 1);
    boolean res1 = arr.includes(1000);
    assertFalse(res1);
    }

    /**
     * Verify includes(0) returns true on Int8Array.of(0, 0, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_5700
     * @tc.name int8ArrayIncludesPart01Test057
     * @tc.desc Verify includes(0) returns true on Int8Array.of(0, 0, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test057() {
    Int8Array arr = Int8Array.of(0, 0, 0);
    boolean res1 = arr.includes(0);
    assertTrue(res1);
    }

    /**
     * Verify includes(1) on Int8Array.of(0, 0, 0) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_5800
     * @tc.name int8ArrayIncludesPart01Test058
     * @tc.desc Verify includes(1) on Int8Array.of(0, 0, 0) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test058() {
    Int8Array arr = Int8Array.of(0, 0, 0);
    boolean res1 = arr.includes(1);
    assertFalse(res1);
    }

    /**
     * Verify includes(5, 2) returns true on Int8Array.of(5, 5, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_5900
     * @tc.name int8ArrayIncludesPart01Test059
     * @tc.desc Verify includes(5, 2) returns true on Int8Array.of(5, 5, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test059() {
    Int8Array arr = Int8Array.of(5, 5, 5);
    boolean res1 = arr.includes(5, 2);
    assertTrue(res1);
    }

    /**
     * Verify includes(6) returns false on Int8Array.of(5, 5, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_6000
     * @tc.name int8ArrayIncludesPart01Test060
     * @tc.desc Verify includes(6) returns false on Int8Array.of(5, 5, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test060() {
    Int8Array arr = Int8Array.of(5, 5, 5);
    boolean res1 = arr.includes(6);
    assertFalse(res1);
    }

    /**
     * Verify includes(30, 3) returns false on Int8Array.of(10, 20, 30, 40, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_6100
     * @tc.name int8ArrayIncludesPart01Test061
     * @tc.desc Verify includes(30, 3) returns false on Int8Array.of(10, 20, 30, 40, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test061() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    boolean res1 = arr.includes(30, 3);
    assertFalse(res1);
    }

    /**
     * Verify includes(50, 1) returns false on Int8Array.of(50, 40, 30, 20, 10)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_6200
     * @tc.name int8ArrayIncludesPart01Test062
     * @tc.desc Verify includes(50, 1) returns false on Int8Array.of(50, 40, 30, 20, 10)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test062() {
    Int8Array arr = Int8Array.of(50, 40, 30, 20, 10);
    boolean res1 = arr.includes(50, 1);
    assertFalse(res1);
    }

    /**
     * Verify includes(7, 2) returns true on Int8Array.of(7, 8, 7, 9)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_6300
     * @tc.name int8ArrayIncludesPart01Test063
     * @tc.desc Verify includes(7, 2) returns true on Int8Array.of(7, 8, 7, 9)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test063() {
    Int8Array arr = Int8Array.of(7, 8, 7, 9);
    boolean res1 = arr.includes(7, 2);
    assertTrue(res1);
    }

    /**
     * Verify includes(3, -2) returns true on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_6400
     * @tc.name int8ArrayIncludesPart01Test064
     * @tc.desc Verify includes(3, -2) returns true on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test064() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    boolean res1 = arr.includes(3, -2);
    assertTrue(res1);
    }

    /**
     * Verify includes(3, -1) on Int8Array.of(1, 2, 3, 4) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_6500
     * @tc.name int8ArrayIncludesPart01Test065
     * @tc.desc Verify includes(3, -1) on Int8Array.of(1, 2, 3, 4) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test065() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    boolean res1 = arr.includes(3, -1);
    assertFalse(res1);
    }

    /**
     * Verify includes(INT8_MIN) returns true but includes(128) returns false for Int8Array.of(-128, 0, 127)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_6700
     * @tc.name int8ArrayIncludesPart01Test067
     * @tc.desc Verify includes(INT8_MIN) returns true but includes(128) returns false for Int8Array.of(-128, 0, 127)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart01Test067() {
    int t1 = INT8_MIN;
    Int8Array arr = Int8Array.of(INT8_MIN, 0, 127);
    boolean r1 = arr.includes(t1);
    boolean r2 = arr.includes(128);
    assertTrue(r1);
    assertFalse(r2);
    }

    /**
     * Verify includes(1) returns true but includes(1.9) returns false for Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART01_TEST_6800
     * @tc.name int8ArrayIncludesPart01Test068
     * @tc.desc Verify includes(1) returns true but includes(1.9) returns false for Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
