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
import basetype.common.TypeError;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayFromPart03Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFromPart03Test extends BasTest {
    private static int INT8_MAX = 127;

    /**
     * Verify arity 1 Int8Array.from(Int8Array) Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_0100
     * @tc.name int8ArrayFromPart03Test001
     * @tc.desc Verify arity 1 Int8Array.from(Int8Array) Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test001() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    Int8Array result = Int8Array.from(src);
    assertEqual(3, result.length());
    assertEqualInt(1, result.get(0));
    Integer r1 = result.get(2);
    int e1 = 3;
    assertEqualInt(e1, r1);
    int r2 = result.byteLength();
    int e2 = 3;
    assertEqual(e2, r2);
    int r3 = result.byteOffset();
    int e3 = 0;
    assertEqual(e3, r3);
    String r4 = result.join("-");
    String e4 = "1-2-3";
    assertEqual(e4, r4);
    }

    /**
     * Verify Int8Array.from(empty Int8Array) returns empty result with length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_0200
     * @tc.name int8ArrayFromPart03Test002
     * @tc.desc Verify Int8Array.from(empty Int8Array) returns empty result with length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test002() {
    Int8Array src = new Int8Array(0);
    Int8Array result = Int8Array.from(src);
    assertEqual(0, result.length());
    String r1 = String.valueOf(result);
    String e1 = "";
    assertEqual(e1, r1);
    assertNull(result.at(0));
    int r2 = result.indexOf(0);
    int e2 = -1;
    assertEqual(e2, r2);
    boolean r3 = result.includes(0);
    assertFalse(r3);
    boolean r4 = result.every((v) -> v > 0);
    assertTrue(r4);
    boolean r5 = result.some((v) -> v > 0);
    assertFalse(r5);
    assertNull(result.find((v) -> v > 0));
    int r6 = result.findIndex((v) -> v > 0);
    int e6 = -1;
    assertEqual(e6, r6);
    }

    /**
     * Verify Int8Array.from(new Int8Array(new int[] {42})) preserves element 42 with length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_0300
     * @tc.name int8ArrayFromPart03Test003
     * @tc.desc Verify Int8Array.from(new Int8Array(new int[] {42})) preserves element 42 with length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test003() {
    Int8Array src = new Int8Array(new int[] {42});
    Int8Array result = Int8Array.from(src);
    assertEqual(1, result.length());
    assertEqualInt(42, result.get(0));
    String r1 = String.valueOf(result);
    String e1 = "42";
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(new Int8Array(100) filled with indices) preserves length 100 and element 50
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_0400
     * @tc.name int8ArrayFromPart03Test004
     * @tc.desc Verify Int8Array.from(new Int8Array(100) filled with indices) preserves length 100 and element 50
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test004() {
    Int8Array src = new Int8Array(100);
    for (int i = 0; i < 100; i++) {
    src.set(i, i);
    }
    Int8Array result = Int8Array.from(src);
    int r1 = result.length();
    int e1 = 100;
    assertEqual(e1, r1);
    Integer r2 = result.get(50);
    int e2 = 50;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify Int8Array.from([-128]) preserves int8 minimum -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_0500
     * @tc.name int8ArrayFromPart03Test005
     * @tc.desc Verify Int8Array.from([-128]) preserves int8 minimum -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test005() {
    Int8Array src = new Int8Array(new int[] {-128});
    Int8Array result = Int8Array.from(src);
    Integer r1 = result.get(0);
    int e1 = -128;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from([INT8_MAX]) preserves int8 maximum 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_0600
     * @tc.name int8ArrayFromPart03Test006
     * @tc.desc Verify Int8Array.from([INT8_MAX]) preserves int8 maximum 127
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test006() {
    Int8Array src = new Int8Array(new int[] {INT8_MAX});
    Int8Array result = Int8Array.from(src);
    Integer r1 = result.get(0);
    int e1 = INT8_MAX;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(new Int8Array(new int[] {0})) preserves element 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_0700
     * @tc.name int8ArrayFromPart03Test007
     * @tc.desc Verify Int8Array.from(new Int8Array(new int[] {0})) preserves element 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test007() {
    Int8Array src = new Int8Array(new int[] {0});
    Int8Array result = Int8Array.from(src);
    Integer r1 = result.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from([-1]) preserves sentinel value -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_0800
     * @tc.name int8ArrayFromPart03Test008
     * @tc.desc Verify Int8Array.from([-1]) preserves sentinel value -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test008() {
    Int8Array src = new Int8Array(new int[] {-1});
    Int8Array result = Int8Array.from(src);
    Integer r1 = result.get(0);
    int e1 = -1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from([-128, -128, -128]) preserves all elements -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_0900
     * @tc.name int8ArrayFromPart03Test009
     * @tc.desc Verify Int8Array.from([-128, -128, -128]) preserves all elements -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test009() {
    Int8Array src = new Int8Array(new int[] {-128, -128, -128});
    Int8Array result = Int8Array.from(src);
    Integer r1 = result.get(0);
    int e1 = -128;
    assertEqualInt(e1, r1);
    Integer r2 = result.get(1);
    int e2 = -128;
    assertEqualInt(e2, r2);
    Integer r3 = result.get(2);
    int e3 = -128;
    assertEqualInt(e3, r3);
    }

    /**
     * Verify Int8Array.from([INT8_MAX, INT8_MAX, INT8_MAX]) preserves all elements 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_1000
     * @tc.name int8ArrayFromPart03Test010
     * @tc.desc Verify Int8Array.from([INT8_MAX, INT8_MAX, INT8_MAX]) preserves all elements 127
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test010() {
    Int8Array src = new Int8Array(new int[] {INT8_MAX, INT8_MAX, INT8_MAX});
    Int8Array result = Int8Array.from(src);
    Integer r1 = result.get(0);
    int e1 = INT8_MAX;
    assertEqualInt(e1, r1);
    Integer r2 = result.get(2);
    int e2 = INT8_MAX;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify Int8Array.from([0, 0, 0]) preserves all elements 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_1100
     * @tc.name int8ArrayFromPart03Test011
     * @tc.desc Verify Int8Array.from([0, 0, 0]) preserves all elements 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test011() {
    Int8Array src = new Int8Array(new int[] {0, 0, 0});
    Int8Array result = Int8Array.from(src);
    Integer r1 = result.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    Integer r2 = result.get(2);
    int e2 = 0;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify Int8Array.from([-128, 127, 0]) preserves all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_1200
     * @tc.name int8ArrayFromPart03Test012
     * @tc.desc Verify Int8Array.from([-128, 127, 0]) preserves all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test012() {
    Int8Array src = new Int8Array(new int[] {-128, INT8_MAX, 0});
    Int8Array result = Int8Array.from(src);
    Integer r1 = result.get(0);
    int e1 = -128;
    assertEqualInt(e1, r1);
    Integer r2 = result.get(1);
    int e2 = INT8_MAX;
    assertEqualInt(e2, r2);
    assertEqualInt(0, result.get(2));
    }

    /**
     * Verify Int8Array.from([1, -1, 127, -128]) preserves elements with mixed signs
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_1300
     * @tc.name int8ArrayFromPart03Test013
     * @tc.desc Verify Int8Array.from([1, -1, 127, -128]) preserves elements with mixed signs
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test013() {
    Int8Array src = new Int8Array(new int[] {1, -1, INT8_MAX, -128});
    Int8Array result = Int8Array.from(src);
    Integer r1 = result.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    Integer r2 = result.get(3);
    int e2 = -128;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify Int8Array.from(subarray(1, 4) of [10, 20, 30, 40, 50]) copies 3 elements 20, 40
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_1400
     * @tc.name int8ArrayFromPart03Test014
     * @tc.desc Verify Int8Array.from(subarray(1, 4) of [10, 20, 30, 40, 50]) copies 3 elements 20, 40
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test014() {
    Int8Array full = new Int8Array(new int[] {10, 20, 30, 40, 50});
    Int8Array src = full.subarray(1, 4);
    Int8Array result = Int8Array.from(src);
    int r1 = result.length();
    int e1 = 3;
    assertEqual(e1, r1);
    Integer r2 = result.get(0);
    int e2 = 20;
    assertEqualInt(e2, r2);
    Integer r3 = result.get(2);
    int e3 = 40;
    assertEqualInt(e3, r3);
    }

    /**
     * Verify Int8Array.from(offset view new Int8Array(buf, 1, 3)) copies 3 elements 20, 40
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_1500
     * @tc.name int8ArrayFromPart03Test015
     * @tc.desc Verify Int8Array.from(offset view new Int8Array(buf, 1, 3)) copies 3 elements 20, 40
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test015() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Int8Array full = new Int8Array(buf);
    full.set(0, 10);
    full.set(1, 20);
    full.set(2, 30);
    full.set(3, 40);
    full.set(4, 50);
    Int8Array src = new Int8Array(buf, 1, 3);
    Int8Array result = Int8Array.from(src);
    assertEqual(3, result.length());
    assertEqualInt(20, result.get(0));
    assertEqualInt(40, result.get(2));
    }

    /**
     * Verify Int8Array.from(Int8Array.of(7, 14, 21)) copies elements with length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_1600
     * @tc.name int8ArrayFromPart03Test016
     * @tc.desc Verify Int8Array.from(Int8Array.of(7, 14, 21)) copies elements with length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test016() {
    Int8Array src = Int8Array.of(7, 14, 21);
    Int8Array result = Int8Array.from(src);
    assertEqual(3, result.length());
    Integer r1 = result.get(0);
    int e1 = 7;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(Int8Array.from([3, 6, 9])) copies 3 elements preserving value 6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_1700
     * @tc.name int8ArrayFromPart03Test017
     * @tc.desc Verify Int8Array.from(Int8Array.from([3, 6, 9])) copies 3 elements preserving value 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test017() {
    Int8Array src = Int8Array.from(new int[] {3, 6, 9});
    Int8Array result = Int8Array.from(src);
    assertEqual(3, result.length());
    Integer r1 = result.get(1);
    int e1 = 6;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(slice(0, 3) of [100, 110, 120]) copies 3 elements 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_1800
     * @tc.name int8ArrayFromPart03Test018
     * @tc.desc Verify Int8Array.from(slice(0, 3) of [100, 110, 120]) copies 3 elements 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test018() {
    Int8Array full = new Int8Array(new int[] {100, 110, 120});
    Int8Array src = full.slice(0, 3);
    Int8Array result = Int8Array.from(src);
    assertEqual(3, result.length());
    Integer r1 = result.get(0);
    int e1 = 100;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(base.with(1, 99)) preserves replaced element 99
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_1900
     * @tc.name int8ArrayFromPart03Test019
     * @tc.desc Verify Int8Array.from(base.with(1, 99)) preserves replaced element 99
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test019() {
    Int8Array base = new Int8Array(new int[] {1, 2, 3});
    Int8Array src = base.with(1, 99);
    Int8Array result = Int8Array.from(src);
    Integer r1 = result.get(1);
    int e1 = 99;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) copies buffer-backed view values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_2200
     * @tc.name int8ArrayFromPart03Test022
     * @tc.desc Verify Int8Array.from(src) copies buffer-backed view values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test022() {
    Int8Array src = new Int8Array(new ArrayBuffer(3));
    src.set(0, 1);
    src.set(1, 2);
    src.set(2, 3);
    Int8Array result = Int8Array.from(src);
    Int8Array view = new Int8Array(src.buffer());
    view.set(0, 99);
    Integer r1 = result.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) result.$_get(0) equals 55
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_2500
     * @tc.name int8ArrayFromPart03Test025
     * @tc.desc Verify Int8Array.from(src) result.$_get(0) equals 55
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test025() {
    Int8Array src = new Int8Array(new int[] {55, 20, 30});
    Int8Array result = Int8Array.from(src);
    Integer r1 = result.get(0);
    int e1 = 55;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) result.$_get(2) equals 77
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_2600
     * @tc.name int8ArrayFromPart03Test026
     * @tc.desc Verify Int8Array.from(src) result.$_get(2) equals 77
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test026() {
    Int8Array src = new Int8Array(new int[] {10, 20, 77});
    Int8Array result = Int8Array.from(src);
    Integer r1 = result.get(2);
    int e1 = 77;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) result.at(-1) equals 88
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_2700
     * @tc.name int8ArrayFromPart03Test027
     * @tc.desc Verify Int8Array.from(src) result.at(-1) equals 88
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test027() {
    Int8Array src = new Int8Array(new int[] {10, 20, 88});
    Int8Array result = Int8Array.from(src);
    assertEqualInt(88, result.at(-1));
    }

    /**
     * Verify Int8Array.from(src) creates independent copy with all elements equal to source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_2800
     * @tc.name int8ArrayFromPart03Test028
     * @tc.desc Verify Int8Array.from(src) creates independent copy with all elements equal to source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test028() {
    Int8Array src = new Int8Array(new int[] {1, -1, INT8_MAX, -128, 0});
    Int8Array result = Int8Array.from(src);
    Integer r1 = result.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    Integer r2 = result.get(1);
    int e2 = -1;
    assertEqualInt(e2, r2);
    Integer r3 = result.get(2);
    int e3 = INT8_MAX;
    assertEqualInt(e3, r3);
    Integer r4 = result.get(3);
    int e4 = -128;
    assertEqualInt(e4, r4);
    Integer r5 = result.get(4);
    int e5 = 0;
    assertEqualInt(e5, r5);
    }

    /**
     * Verify Int8Array.from(src) creates independent copy -- mutating result does not affect src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_2900
     * @tc.name int8ArrayFromPart03Test029
     * @tc.desc Verify Int8Array.from(src) creates independent copy -- mutating result does not affect src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test029() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    Int8Array result = Int8Array.from(src);
    result.set(0, 99);
    Integer r1 = src.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) creates independent copy -- mutating src does not affect result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_3000
     * @tc.name int8ArrayFromPart03Test030
     * @tc.desc Verify Int8Array.from(src) creates independent copy -- mutating src does not affect result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test030() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    Int8Array result = Int8Array.from(src);
    src.set(0, 99);
    Integer r1 = result.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) deep copy, src.reverse() not reflected in result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_3100
     * @tc.name int8ArrayFromPart03Test031
     * @tc.desc Verify Int8Array.from(src) deep copy, src.reverse() not reflected in result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test031() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    Int8Array result = Int8Array.from(src);
    src.reverse();
    Integer r1 = result.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    Integer r2 = result.get(2);
    int e2 = 3;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify Int8Array.from(src) deep copy, src.sort() not reflected in result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_3200
     * @tc.name int8ArrayFromPart03Test032
     * @tc.desc Verify Int8Array.from(src) deep copy, src.sort() not reflected in result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test032() {
    Int8Array src = new Int8Array(new int[] {3, 1, 2});
    Int8Array result = Int8Array.from(src);
    src.sort();
    Integer r1 = result.get(0);
    int e1 = 3;
    assertEqualInt(e1, r1);
    Integer r2 = result.get(1);
    int e2 = 1;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify Int8Array.from(src) copy is independent -- src.fill(0) does not affect result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_3300
     * @tc.name int8ArrayFromPart03Test033
     * @tc.desc Verify Int8Array.from(src) copy is independent -- src.fill(0) does not affect result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test033() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    Int8Array result = Int8Array.from(src);
    src.fill(0);
    Integer r1 = result.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    Integer r2 = result.get(2);
    int e2 = 3;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify Int8Array.from(src) copy is independent -- src.copyWithin(0, 2, 4) does not affect result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_3400
     * @tc.name int8ArrayFromPart03Test034
     * @tc.desc Verify Int8Array.from(src) copy is independent -- src.copyWithin(0, 2, 4) does not affect result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test034() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array result = Int8Array.from(src);
    src.copyWithin(0, 2, 4);
    assertEqualInt(1, result.get(0));
    Integer r1 = result.get(2);
    int e1 = 3;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(Int8Array.from(arr)) copies values independently of source mutation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_3500
     * @tc.name int8ArrayFromPart03Test035
     * @tc.desc Verify Int8Array.from(Int8Array.from(arr)) copies values independently of source mutation
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test035() {
    Int8Array base = new Int8Array(new int[] {1, 2, 3});
    Int8Array mid = Int8Array.from(base);
    Int8Array result = Int8Array.from(mid);
    mid.set(0, 99);
    assertEqualInt(1, result.get(0));
    }

    /**
     * Verify Int8Array.from(src) join(',') behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_3600
     * @tc.name int8ArrayFromPart03Test036
     * @tc.desc Verify Int8Array.from(src) join(',') behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test036() {
    Int8Array src = new Int8Array(new int[] {1, -1, INT8_MAX});
    Int8Array result = Int8Array.from(src);
    String r1 = result.join(",");
    String e1 = "1,-1,127";
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) $_get(0) on empty array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_3700
     * @tc.name int8ArrayFromPart03Test037
     * @tc.desc Verify Int8Array.from(src) $_get(0) on empty array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test037() {
    Int8Array src = new Int8Array(0);
    Int8Array result = Int8Array.from(src);
    try {
    result.get(0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int8Array.from reduce initialValue TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_3800
     * @tc.name int8ArrayFromPart03Test038
     * @tc.desc Verify Int8Array.from reduce initialValue TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test038() {
    Int8Array src = new Int8Array(0);
    Int8Array result = Int8Array.from(src);
    try {
    result.reduce((acc, cur, index, array) -> acc + cur);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int8Array.from(src) result reduce without initialValue works
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_3900
     * @tc.name int8ArrayFromPart03Test039
     * @tc.desc Verify Int8Array.from(src) result reduce without initialValue works
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test039() {
    Int8Array src = new Int8Array(new int[] {42});
    Int8Array result = Int8Array.from(src);
    int reduced = result.reduce((acc, cur, index, array) -> acc + cur);
    assertEqual(42, reduced);
    }

    /**
     * Verify Int8Array.from([128]) truncates and wraps to -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_4000
     * @tc.name int8ArrayFromPart03Test040
     * @tc.desc Verify Int8Array.from([128]) truncates and wraps to -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test040() {
    Int8Array result = Int8Array.from(new int[] {128});
    Integer r1 = result.get(0);
    int e1 = -128;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from([-129]) truncates and wraps to 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_4100
     * @tc.name int8ArrayFromPart03Test041
     * @tc.desc Verify Int8Array.from([-129]) truncates and wraps to 127
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test041() {
    Int8Array result = Int8Array.from(new int[] {-129});
    Integer r1 = result.get(0);
    int e1 = INT8_MAX;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from([255]) truncates and wraps to -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_4200
     * @tc.name int8ArrayFromPart03Test042
     * @tc.desc Verify Int8Array.from([255]) truncates and wraps to -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test042() {
    Int8Array result = Int8Array.from(new int[] {255});
    Integer r1 = result.get(0);
    int e1 = -1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from([256]) truncates and wraps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_4300
     * @tc.name int8ArrayFromPart03Test043
     * @tc.desc Verify Int8Array.from([256]) truncates and wraps to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test043() {
    Int8Array result = Int8Array.from(new int[] {256});
    Integer r1 = result.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from([Number.NaN]) converts NaN to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_4400
     * @tc.name int8ArrayFromPart03Test044
     * @tc.desc Verify Int8Array.from([Number.NaN]) converts NaN to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test044() {
    Int8Array result = Int8Array.from(new double[] {Double.NaN});
    Integer r1 = result.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from([1.9]) truncates to 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_4500
     * @tc.name int8ArrayFromPart03Test045
     * @tc.desc Verify Int8Array.from([1.9]) truncates to 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test045() {
    Int8Array result = Int8Array.from(new double[] {1.9});
    Integer r1 = result.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from([-1.9]) truncates to -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_4600
     * @tc.name int8ArrayFromPart03Test046
     * @tc.desc Verify Int8Array.from([-1.9]) truncates to -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test046() {
    Int8Array result = Int8Array.from(new double[] {-1.9});
    Integer r1 = result.get(0);
    int e1 = -1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from([128, -129, 255]) wraps to [-128, 127, -1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_4700
     * @tc.name int8ArrayFromPart03Test047
     * @tc.desc Verify Int8Array.from([128, -129, 255]) wraps to [-128, 127, -1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test047() {
    Int8Array result = Int8Array.from(new int[] {128, -129, 255});
    assertEqualInt(-128, result.get(0));
    assertEqualInt(INT8_MAX, result.get(1));
    assertEqualInt(-1, result.get(2));
    }

    /**
     * Verify for...of iteration sums src elements and Int8Array.from(src) length equals 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_4800
     * @tc.name int8ArrayFromPart03Test048
     * @tc.desc Verify for...of iteration sums src elements and Int8Array.from(src) length equals 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test048() {
    Int8Array src = new Int8Array(new int[] {10, 20, 30});
    int sum = 0;
    for (Integer v : src.values()) {
    sum = sum + v;
    }
    Int8Array result = Int8Array.from(src);
    assertEqual(3, result.length());
    assertEqual(60, sum);
    }

    /**
     * Verify Int8Array.from(src) for...of behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_4900
     * @tc.name int8ArrayFromPart03Test049
     * @tc.desc Verify Int8Array.from(src) for...of behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test049() {
    Int8Array src = new Int8Array(new int[] {10, 20, 30});
    Int8Array result = Int8Array.from(src);
    int sum = 0;
    for (Integer v : result.values()) {
    sum = sum + v;
    }
    assertEqual(60, sum);
    }

    /**
     * Verify Int8Array.from(src) keys() behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_5000
     * @tc.name int8ArrayFromPart03Test050
     * @tc.desc Verify Int8Array.from(src) keys() behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test050() {
    Int8Array src = new Int8Array(new int[] {5, 10, 15});
    Int8Array result = Int8Array.from(src);
    List<Integer> indices = new ArrayList<>();
    for (Integer k : result.keys()) {
    indices.add(k);
    }
    assertEqual(3, indices.size());
    assertEqualInt(0, indices.get(0));
    assertEqualInt(2, indices.get(2));
    }

    /**
     * Verify Int8Array.from(src) values() behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_5100
     * @tc.name int8ArrayFromPart03Test051
     * @tc.desc Verify Int8Array.from(src) values() behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test051() {
    Int8Array src = new Int8Array(new int[] {5, 10, 15});
    Int8Array result = Int8Array.from(src);
    List<Integer> vals = new ArrayList<>();
    for (Integer v : result.values()) {
    vals.add(v);
    }
    assertEqualInt(5, vals.get(0));
    assertEqualInt(15, vals.get(2));
    }

    /**
     * Verify chained Int8Array.from copies are independent, mutation of intermediate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_5200
     * @tc.name int8ArrayFromPart03Test052
     * @tc.desc Verify chained Int8Array.from copies are independent, mutation of intermediate
     * copies does not affect final result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test052() {
    Int8Array base = new Int8Array(new int[] {1, 2, 3});
    Int8Array l1 = Int8Array.from(base);
    Int8Array l2 = Int8Array.from(l1);
    Int8Array l3 = Int8Array.from(l2);
    l1.set(0, 99);
    l2.set(1, 88);
    assertEqualInt(1, l3.get(0));
    assertEqualInt(2, l3.get(1));
    assertEqualInt(1, base.get(0));
    }

    /**
     * Verify Int8Array.from(src).toReversed() reverses copy without mutating src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_5300
     * @tc.name int8ArrayFromPart03Test053
     * @tc.desc Verify Int8Array.from(src).toReversed() reverses copy without mutating src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test053() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    Int8Array result = Int8Array.from(src).toReversed();
    assertEqualInt(3, result.get(0));
    assertEqualInt(1, result.get(2));
    assertEqualInt(1, src.get(0));
    }

    /**
     * Verify Int8Array.from(src).toSorted() sorts copy without mutating src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_5400
     * @tc.name int8ArrayFromPart03Test054
     * @tc.desc Verify Int8Array.from(src).toSorted() sorts copy without mutating src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test054() {
    Int8Array src = new Int8Array(new int[] {3, 1, 2});
    Int8Array result = Int8Array.from(src).toSorted();
    assertEqualInt(1, result.get(0));
    assertEqualInt(3, src.get(0));
    }

    /**
     * Verify Int8Array.from(src).with(1, 99) replaces element without mutating src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_5500
     * @tc.name int8ArrayFromPart03Test055
     * @tc.desc Verify Int8Array.from(src).with(1, 99) replaces element without mutating src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test055() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    Int8Array result = Int8Array.from(src).with(1, 99);
    assertEqualInt(99, result.get(1));
    assertEqualInt(2, src.get(1));
    }

    /**
     * Verify subarray of Int8Array.from(src) result shares buffer with result but not with src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_5600
     * @tc.name int8ArrayFromPart03Test056
     * @tc.desc Verify subarray of Int8Array.from(src) result shares buffer with result but not with src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test056() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array result = Int8Array.from(src);
    Int8Array view = result.subarray(1, 3);
    view.set(0, 99);
    assertEqualInt(99, result.get(1));
    assertEqualInt(2, src.get(1));
    }

    /**
     * Verify Int8Array.from(new Int8Array(100) filled with (i*2)%INT8_MAX) preserves all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_5700
     * @tc.name int8ArrayFromPart03Test057
     * @tc.desc Verify Int8Array.from(new Int8Array(100) filled with (i*2)%INT8_MAX) preserves all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test057() {
    Int8Array src = new Int8Array(100);
    for (int i = 0; i < 100; i++) {
    src.set(i, (i * 2) % INT8_MAX);
    }
    Int8Array result = Int8Array.from(src);
    int r1 = result.length();
    int e1 = 100;
    assertEqual(e1, r1);
    Integer r2 = result.get(0);
    int e2 = 0;
    assertEqualInt(e2, r2);
    Integer r3 = result.get(63);
    int e3 = 126;
    assertEqualInt(e3, r3);
    Integer r4 = result.get(99);
    int e4 = 71;
    assertEqualInt(e4, r4);
    }

    /**
     * Verify slice(1, 3) of Int8Array.from(src) is independent copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_5800
     * @tc.name int8ArrayFromPart03Test058
     * @tc.desc Verify slice(1, 3) of Int8Array.from(src) is independent copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test058() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array result = Int8Array.from(src);
    Int8Array sliced = result.slice(1, 3);
    sliced.set(0, 99);
    assertEqualInt(2, result.get(1));
    assertEqualInt(2, src.get(1));
    }

    /**
     * Verify fill(0, 1, 3) on Int8Array.from(src) result does not affect source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_5900
     * @tc.name int8ArrayFromPart03Test059
     * @tc.desc Verify fill(0, 1, 3) on Int8Array.from(src) result does not affect source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test059() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = Int8Array.from(src);
    result.fill(0, 1, 3);
    assertEqualInt(1, result.get(0));
    assertEqualInt(0, result.get(1));
    assertEqualInt(4, result.get(3));
    assertEqualInt(2, src.get(1));
    }

    /**
     * Verify copyWithin(0, 3, 5) on Int8Array.from(src) result copies elements 4, 5 without affecting source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_6000
     * @tc.name int8ArrayFromPart03Test060
     * @tc.desc Verify copyWithin(0, 3, 5) on Int8Array.from(src) result copies elements 4, 5 without affecting source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test060() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = Int8Array.from(src);
    result.copyWithin(0, 3, 5);
    assertEqualInt(4, result.get(0));
    assertEqualInt(5, result.get(1));
    assertEqualInt(1, src.get(0));
    }

    /**
     * Verify Number.POSITIVE_INFINITY converted to 0 via Int8Array.from
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_6100
     * @tc.name int8ArrayFromPart03Test061
     * @tc.desc Verify Number.POSITIVE_INFINITY converted to 0 via Int8Array.from
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test061() {
    Int8Array result = Int8Array.from(new double[] {Double.POSITIVE_INFINITY});
    assertEqualInt(0, result.get(0));
    }

    /**
     * Verify -Number.POSITIVE_INFINITY converted to 0 via Int8Array.from
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_6200
     * @tc.name int8ArrayFromPart03Test062
     * @tc.desc Verify -Number.POSITIVE_INFINITY converted to 0 via Int8Array.from
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart03Test062() {
    Int8Array result = Int8Array.from(new double[] {-Double.POSITIVE_INFINITY});
    assertEqualInt(0, result.get(0));
    }

    /**
     * Verify Int8Array.from(src) large double
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART03_TEST_6300
     * @tc.name int8ArrayFromPart03Test063
     * @tc.desc Verify Int8Array.from(src) large double
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
