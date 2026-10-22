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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayIndexGetPart03Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIndexGetPart03Test extends BasTest {
    private static int INT8_MAX = 127;

    /**
     * Verify $_get(1) with empty array, exception assertFail not reached
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_0100
     * @tc.name int8ArrayIndexGetPart03Test001
     * @tc.desc Verify $_get(1) with empty array, exception assertFail not reached
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test001() {
    Int8Array arr = new Int8Array(0);
    try {
    arr.get(1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(0) with single-element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_0200
     * @tc.name int8ArrayIndexGetPart03Test002
     * @tc.desc Verify $_get(0) with single-element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test002() {
    Int8Array arr = new Int8Array(new int[] {10});
    Integer r1 = arr.get(0);
    int e1 = 10;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get(1) with single-element, exception assertFail not reached
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_0300
     * @tc.name int8ArrayIndexGetPart03Test003
     * @tc.desc Verify $_get(1) with single-element, exception assertFail not reached
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test003() {
    Int8Array arr = new Int8Array(new int[] {10});
    try {
    arr.get(1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-2) with single-element, exception assertFail not reached
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_0400
     * @tc.name int8ArrayIndexGetPart03Test004
     * @tc.desc Verify $_get(-2) with single-element, exception assertFail not reached
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test004() {
    Int8Array arr = new Int8Array(new int[] {10});
    try {
    arr.get(-2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(2) with single-element, exception assertFail not reached
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_0500
     * @tc.name int8ArrayIndexGetPart03Test005
     * @tc.desc Verify $_get(2) with single-element, exception assertFail not reached
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test005() {
    Int8Array arr = new Int8Array(new int[] {10});
    try {
    arr.get(2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(2147483647) with single-element, large fromIndex, exception assertFail not reached
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_0600
     * @tc.name int8ArrayIndexGetPart03Test006
     * @tc.desc Verify $_get(2147483647) with single-element, large fromIndex, exception assertFail not reached
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test006() {
    Int8Array arr = new Int8Array(new int[] {10});
    try {
    arr.get(2147483647);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-2147483648) with single-element, exception assertFail not reached
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_0700
     * @tc.name int8ArrayIndexGetPart03Test007
     * @tc.desc Verify $_get(-2147483648) with single-element, exception assertFail not reached
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test007() {
    Int8Array arr = new Int8Array(new int[] {10});
    try {
    arr.get(Integer.MIN_VALUE);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(0) returns 10 on new Int8Array(new int[] {10, 20})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_0800
     * @tc.name int8ArrayIndexGetPart03Test008
     * @tc.desc Verify $_get(0) returns 10 on new Int8Array(new int[] {10, 20})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test008() {
    Int8Array arr = new Int8Array(new int[] {10, 20});
    Integer r1 = arr.get(0);
    int e1 = 10;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get(1) returns 20 on new Int8Array(new int[] {10, 20})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_0900
     * @tc.name int8ArrayIndexGetPart03Test009
     * @tc.desc Verify $_get(1) returns 20 on new Int8Array(new int[] {10, 20})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test009() {
    Int8Array arr = new Int8Array(new int[] {10, 20});
    Integer r1 = arr.get(1);
    int e1 = 20;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get(2) on new Int8Array(new int[] {10, 20}) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_1000
     * @tc.name int8ArrayIndexGetPart03Test010
     * @tc.desc Verify $_get(2) on new Int8Array(new int[] {10, 20}) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test010() {
    Int8Array arr = new Int8Array(new int[] {10, 20});
    try {
    arr.get(2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get expects RangeError throws exception, with $_get(3), on new Int8Array(new int[] {10, 20})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_1100
     * @tc.name int8ArrayIndexGetPart03Test011
     * @tc.desc Verify $_get expects RangeError throws exception, with $_get(3), on new Int8Array(new int[] {10, 20})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test011() {
    Int8Array arr = new Int8Array(new int[] {10, 20});
    try {
    arr.get(3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-3) on new Int8Array(new int[] {10, 20}) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_1200
     * @tc.name int8ArrayIndexGetPart03Test012
     * @tc.desc Verify $_get(-3) on new Int8Array(new int[] {10, 20}) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test012() {
    Int8Array arr = new Int8Array(new int[] {10, 20});
    try {
    arr.get(-3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get expects RangeError throws exception, with $_get(4), on new Int8Array(new int[] {10, 20, 30, 40})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_1300
     * @tc.name int8ArrayIndexGetPart03Test013
     * @tc.desc Verify $_get expects RangeError throws exception, with $_get(4), on new Int8Arr
     * ay(new int[] {10, 20, 30, 40})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test013() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    try {
    arr.get(4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(5) on new Int8Array(new int[] {10, 20, 30, 40}) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_1400
     * @tc.name int8ArrayIndexGetPart03Test014
     * @tc.desc Verify $_get(5) on new Int8Array(new int[] {10, 20, 30, 40}) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test014() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    try {
    arr.get(5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get expects RangeError throws exception, with $_get(-5), on new Int8Array(new int[] {10, 20, 30, 40})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_1500
     * @tc.name int8ArrayIndexGetPart03Test015
     * @tc.desc Verify $_get expects RangeError throws exception, with $_get(-5), on new Int8Ar
     * ray(new int[] {10, 20, 30, 40})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test015() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    try {
    arr.get(-5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(3) returns element at given index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_1600
     * @tc.name int8ArrayIndexGetPart03Test016
     * @tc.desc Verify $_get(3) returns element at given index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test016() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify $_get(0) returns 7 on new Int8Array(new int[] {7, 7, 7})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_1700
     * @tc.name int8ArrayIndexGetPart03Test017
     * @tc.desc Verify $_get(0) returns 7 on new Int8Array(new int[] {7, 7, 7})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test017() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    assertEqualInt(7, arr.get(0));
    }

    /**
     * Verify $_get expects RangeError throws exception, with $_get(3), on new Int8Array(new int[] {7, 7, 7})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_1800
     * @tc.name int8ArrayIndexGetPart03Test018
     * @tc.desc Verify $_get expects RangeError throws exception, with $_get(3), on new Int8Array(new int[] {7, 7, 7})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test018() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    try {
    arr.get(3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-4) on new Int8Array(new int[] {7, 7, 7}) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_1900
     * @tc.name int8ArrayIndexGetPart03Test019
     * @tc.desc Verify $_get(-4) on new Int8Array(new int[] {7, 7, 7}) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test019() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    try {
    arr.get(-4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get expects -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_2000
     * @tc.name int8ArrayIndexGetPart03Test020
     * @tc.desc Verify $_get expects -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test020() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, INT8_MAX});
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify $_get(1) returns 0 on new Int8Array(new int[] {-128, 0, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_2100
     * @tc.name int8ArrayIndexGetPart03Test021
     * @tc.desc Verify $_get(1) returns 0 on new Int8Array(new int[] {-128, 0, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test021() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, INT8_MAX});
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify $_set(1, -200) then $_get(1) reads truncated value 56
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_2200
     * @tc.name int8ArrayIndexGetPart03Test022
     * @tc.desc Verify $_set(1, -200) then $_get(1) reads truncated value 56
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test022() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 10);
    arr.set(1, -200);
    assertEqualInt(56, arr.get(1));
    }

    /**
     * Verify $_set(0, 255) then $_get(0) reads truncated value -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_2300
     * @tc.name int8ArrayIndexGetPart03Test023
     * @tc.desc Verify $_set(0, 255) then $_get(0) reads truncated value -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test023() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, 255);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_get(0x7fffffff) on new Int8Array(new int[] {10, 20, 30}) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_2400
     * @tc.name int8ArrayIndexGetPart03Test024
     * @tc.desc Verify $_get(0x7fffffff) on new Int8Array(new int[] {10, 20, 30}) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test024() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    try {
    arr.get(0x7fffffff);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-2147483648) on Int8Array.from(Array [10, 20, 30]) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_2500
     * @tc.name int8ArrayIndexGetPart03Test025
     * @tc.desc Verify $_get(-2147483648) on Int8Array.from(Array [10, 20, 30]) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test025() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array arr = Int8Array.from(src);
    try {
    arr.get(Integer.MIN_VALUE);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(0) on empty Int8Array view throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_2600
     * @tc.name int8ArrayIndexGetPart03Test026
     * @tc.desc Verify $_get(0) on empty Int8Array view throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test026() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int8Array arr = new Int8Array(buf, 0, 0);
    try {
    arr.get(0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-1) on empty Int8Array view throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_2700
     * @tc.name int8ArrayIndexGetPart03Test027
     * @tc.desc Verify $_get(-1) on empty Int8Array view throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test027() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int8Array arr = new Int8Array(buf, 0, 0);
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get expects RangeError from ArrayBuffer throws exception, with $_get(4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_2800
     * @tc.name int8ArrayIndexGetPart03Test028
     * @tc.desc Verify $_get expects RangeError from ArrayBuffer throws exception, with $_get(4
     *), on new Int8Array(buf, 4, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test028() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 4, 4);
    try {
    arr.get(4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get expects RangeError from ArrayBuffer throws exception, with $_get(-
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_2900
     * @tc.name int8ArrayIndexGetPart03Test029
     * @tc.desc Verify $_get expects RangeError from ArrayBuffer throws exception, with $_get(-
     * 5), on new Int8Array(buf, 4, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test029() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 4, 4);
    try {
    arr.get(-5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(3) on subarray(1, 4) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_3000
     * @tc.name int8ArrayIndexGetPart03Test030
     * @tc.desc Verify $_get(3) on subarray(1, 4) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test030() {
    Int8Array base = new Int8Array(new int[] {10, 20, 30, 40, INT8_MAX});
    Int8Array view = base.subarray(1, 4);
    try {
    view.get(3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(3) on Int8Array.of(10, 20, 30) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_3100
     * @tc.name int8ArrayIndexGetPart03Test031
     * @tc.desc Verify $_get(3) on Int8Array.of(10, 20, 30) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test031() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    try {
    arr.get(3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-4) on Int8Array.from([10, 20, 30]) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_3200
     * @tc.name int8ArrayIndexGetPart03Test032
     * @tc.desc Verify $_get(-4) on Int8Array.from([10, 20, 30]) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test032() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array arr = Int8Array.from(src);
    try {
    arr.get(-4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get expects RangeError throws exception, with $_get(100), on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_3300
     * @tc.name int8ArrayIndexGetPart03Test033
     * @tc.desc Verify $_get expects RangeError throws exception, with $_get(100), on new Int8A
     * rray(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test033() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    arr.get(100);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get expects RangeError throws exception, with $_get(-100), on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_3400
     * @tc.name int8ArrayIndexGetPart03Test034
     * @tc.desc Verify $_get expects RangeError throws exception, with $_get(-100), on new Int8
     * Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test034() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    arr.get(-100);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get out-of-bounds index throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_3500
     * @tc.name int8ArrayIndexGetPart03Test035
     * @tc.desc Verify $_get out-of-bounds index throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test035() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    arr.get(1000);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(0) returns 10 on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_3600
     * @tc.name int8ArrayIndexGetPart03Test036
     * @tc.desc Verify $_get(0) returns 10 on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test036() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.get(0);
    assertEqual(15, r + 5);
    }

    /**
     * Verify $_get(120) on new Int8Array(new int[] {120}) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_3700
     * @tc.name int8ArrayIndexGetPart03Test037
     * @tc.desc Verify $_get(120) on new Int8Array(new int[] {120}) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test037() {
    Int8Array arr = new Int8Array(120);
    try {
    arr.get(120);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-121) on new Int8Array(new int[] {120}) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_3800
     * @tc.name int8ArrayIndexGetPart03Test038
     * @tc.desc Verify $_get(-121) on new Int8Array(new int[] {120}) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test038() {
    Int8Array arr = new Int8Array(120);
    try {
    arr.get(-121);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(1) on zero-filled new Int8Array(3) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_3900
     * @tc.name int8ArrayIndexGetPart03Test039
     * @tc.desc Verify $_get(1) on zero-filled new Int8Array(3) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test039() {
    Int8Array arr = new Int8Array(3);
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify $_get(3) on new Int8Array(3) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_4000
     * @tc.name int8ArrayIndexGetPart03Test040
     * @tc.desc Verify $_get(3) on new Int8Array(3) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test040() {
    Int8Array arr = new Int8Array(3);
    try {
    arr.get(3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get expects -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_4100
     * @tc.name int8ArrayIndexGetPart03Test041
     * @tc.desc Verify $_get expects -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test041() {
    Int8Array arr = new Int8Array(new int[] {-1, -128, -INT8_MAX});
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_get(-1) on new Int8Array(new int[] {10}) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_4200
     * @tc.name int8ArrayIndexGetPart03Test042
     * @tc.desc Verify $_get(-1) on new Int8Array(new int[] {10}) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test042() {
    Int8Array arr = new Int8Array(new int[] {10});
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get expects RangeError throws exception, with $_get(-1), on new Int8Array(new int[] {10, 20})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_4300
     * @tc.name int8ArrayIndexGetPart03Test043
     * @tc.desc Verify $_get expects RangeError throws exception, with $_get(-1), on new Int8Array(new int[] {10, 20})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test043() {
    Int8Array arr = new Int8Array(new int[] {10, 20});
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-2) -length, throws RangeError for out-of-bounds index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_4400
     * @tc.name int8ArrayIndexGetPart03Test044
     * @tc.desc Verify $_get(-2) -length, throws RangeError for out-of-bounds index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test044() {
    Int8Array arr = new Int8Array(new int[] {10, 20});
    try {
    arr.get(-2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-4) -length, throws RangeError for out-of-bounds index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_4500
     * @tc.name int8ArrayIndexGetPart03Test045
     * @tc.desc Verify $_get(-4) -length, throws RangeError for out-of-bounds index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test045() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    try {
    arr.get(-4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get expects RangeError throws exception, with $_get(-1), on new Int8Array(new int[] {7, 7, 7})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_4600
     * @tc.name int8ArrayIndexGetPart03Test046
     * @tc.desc Verify $_get expects RangeError throws exception, with $_get(-1), on new Int8Array(new int[] {7, 7, 7})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test046() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-1) on non-empty array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_4700
     * @tc.name int8ArrayIndexGetPart03Test047
     * @tc.desc Verify $_get(-1) on non-empty array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test047() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, INT8_MAX});
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-1) on 120-element array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_4800
     * @tc.name int8ArrayIndexGetPart03Test048
     * @tc.desc Verify $_get(-1) on 120-element array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test048() {
    List<Integer> src = new ArrayList<>();
    for (int i = 0; i < 120; i++) {
    src.add(i % INT8_MAX);
    }
    Int8Array arr = Int8Array.from(src);
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-1) on new Int8Array(new int[] {10, 20, 30, 40}) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_4900
     * @tc.name int8ArrayIndexGetPart03Test049
     * @tc.desc Verify $_get(-1) on new Int8Array(new int[] {10, 20, 30, 40}) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test049() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-1) on negative-values array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_GET_PART03_TEST_5000
     * @tc.name int8ArrayIndexGetPart03Test050
     * @tc.desc Verify $_get(-1) on negative-values array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart03Test050() {
    Int8Array arr = new Int8Array(new int[] {-1, -128, -INT8_MAX});
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
}
