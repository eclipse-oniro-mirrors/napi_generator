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
import basetype.common.TypeError;
import basetype.common.Error;

import java.util.ArrayList;
import java.util.List;
import java.util.LinkedHashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayFromPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFromPart02Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify Int8Array.from(s) arity=1 Set<int>
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_0100
     * @tc.name int8ArrayFromPart02Test001
     * @tc.desc Verify Int8Array.from(s) arity=1 Set<int>
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test001() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(42);
    Int8Array arr = Int8Array.from(s);
    assertEqual(1, arr.length());
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify Int8Array.from(empty Set) returns length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_0200
     * @tc.name int8ArrayFromPart02Test002
     * @tc.desc Verify Int8Array.from(empty Set) returns length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test002() {
    Set<Integer> s = new LinkedHashSet<>();
    Int8Array arr = Int8Array.from(s);
    assertEqual(0, arr.length());
    }

    /**
     * Verify Int8Array.from(s) Set {0}
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_0300
     * @tc.name int8ArrayFromPart02Test003
     * @tc.desc Verify Int8Array.from(s) Set {0}
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test003() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(0);
    Int8Array arr = Int8Array.from(s);
    assertEqual(1, arr.length());
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify Int8Array.from(s) Set {127}
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_0400
     * @tc.name int8ArrayFromPart02Test004
     * @tc.desc Verify Int8Array.from(s) Set {127}
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test004() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(INT8_MAX);
    Int8Array arr = Int8Array.from(s);
    assertEqual(1, arr.length());
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify Int8Array.from(s) Set {-128}
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_0500
     * @tc.name int8ArrayFromPart02Test005
     * @tc.desc Verify Int8Array.from(s) Set {-128}
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test005() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(INT8_MIN);
    Int8Array arr = Int8Array.from(s);
    assertEqual(1, arr.length());
    int r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(s) Set {1, -1, 2, -2}
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_0600
     * @tc.name int8ArrayFromPart02Test006
     * @tc.desc Verify Int8Array.from(s) Set {1, -1, 2, -2}
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test006() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(-1);
    s.add(2);
    s.add(-2);
    Int8Array arr = Int8Array.from(s);
    assertEqual(4, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(-1, arr.get(1));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(-2, arr.get(3));
    }

    /**
     * Verify Int8Array.from(s) Set {5, 5, 5}
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_0700
     * @tc.name int8ArrayFromPart02Test007
     * @tc.desc Verify Int8Array.from(s) Set {5, 5, 5}
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test007() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(5);
    s.add(5);
    s.add(5);
    Int8Array arr = Int8Array.from(s);
    assertEqual(1, arr.length());
    assertEqualInt(5, arr.get(0));
    }

    /**
     * Verify Int8Array.from(s) Set {128} overflow to INT8_MIN
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_0800
     * @tc.name int8ArrayFromPart02Test008
     * @tc.desc Verify Int8Array.from(s) Set {128} overflow to INT8_MIN
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test008() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(128);
    Int8Array arr = Int8Array.from(s);
    assertEqual(1, arr.length());
    int r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(s) Set -129
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_0900
     * @tc.name int8ArrayFromPart02Test009
     * @tc.desc Verify Int8Array.from(s) Set -129
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test009() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(-129);
    Int8Array arr = Int8Array.from(s);
    assertEqual(1, arr.length());
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify Int8Array.from(Set with 255) clamps to -1, length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_1000
     * @tc.name int8ArrayFromPart02Test010
     * @tc.desc Verify Int8Array.from(Set with 255) clamps to -1, length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test010() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(255);
    Int8Array arr = Int8Array.from(s);
    assertEqual(1, arr.length());
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify Int8Array.from(Set with 256) clamps to 0, length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_1100
     * @tc.name int8ArrayFromPart02Test011
     * @tc.desc Verify Int8Array.from(Set with 256) clamps to 0, length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test011() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(256);
    Int8Array arr = Int8Array.from(s);
    assertEqual(1, arr.length());
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify Int8Array.from(Set with 2147483647) clamps to -1, length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_1200
     * @tc.name int8ArrayFromPart02Test012
     * @tc.desc Verify Int8Array.from(Set with 2147483647) clamps to -1, length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test012() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add((int) (2147483647));
    Int8Array arr = Int8Array.from(s);
    assertEqual(1, arr.length());
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify Int8Array.from(s) Set -2147483648
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_1300
     * @tc.name int8ArrayFromPart02Test013
     * @tc.desc Verify Int8Array.from(s) Set -2147483648
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test013() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(Integer.MIN_VALUE);
    Int8Array arr = Int8Array.from(s);
    assertEqual(1, arr.length());
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify Int8Array.from(s) Set {3, 1, 2}
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_1400
     * @tc.name int8ArrayFromPart02Test014
     * @tc.desc Verify Int8Array.from(s) Set {3, 1, 2}
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test014() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(3);
    s.add(1);
    s.add(2);
    Int8Array arr = Int8Array.from(s);
    assertEqual(3, arr.length());
    assertEqualInt(3, arr.get(0));
    assertEqualInt(1, arr.get(1));
    assertEqualInt(2, arr.get(2));
    }

    /**
     * Verify Int8Array.from(s) Set {1, 2, 1, 3, 2}
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_1500
     * @tc.name int8ArrayFromPart02Test015
     * @tc.desc Verify Int8Array.from(s) Set {1, 2, 1, 3, 2}
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test015() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    s.add(1);
    s.add(3);
    s.add(2);
    Int8Array arr = Int8Array.from(s);
    assertEqual(3, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify Int8Array.from(s) Set {-128, 0, 127}
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_1600
     * @tc.name int8ArrayFromPart02Test016
     * @tc.desc Verify Int8Array.from(s) Set {-128, 0, 127}
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test016() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(INT8_MIN);
    s.add(0);
    s.add(INT8_MAX);
    Int8Array arr = Int8Array.from(s);
    assertEqual(3, arr.length());
    int r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqual(e1, r1);
    assertEqualInt(0, arr.get(1));
    assertEqualInt(INT8_MAX, arr.get(2));
    }

    /**
     * Verify Int8Array.from(Set of 100) returns length 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_1700
     * @tc.name int8ArrayFromPart02Test017
     * @tc.desc Verify Int8Array.from(Set of 100) returns length 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test017() {
    Set<Integer> s = new LinkedHashSet<>();
    for (int i = 0; i < 100; i = i + 1) {
    s.add(i);
    }
    Int8Array arr = Int8Array.from(s);
    assertEqual(100, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(99, arr.get(99));
    }

    /**
     * Verify Int8Array.from(s) length equals Set.size
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_1800
     * @tc.name int8ArrayFromPart02Test018
     * @tc.desc Verify Int8Array.from(s) length equals Set.size
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test018() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    Int8Array arr = Int8Array.from(s);
    int r1 = arr.length();
    int e1 = 2;
    assertEqual(e1, r1);
    int r2 = arr.byteOffset();
    int e2 = 0;
    assertEqual(e2, r2);
    }

    /**
     * Verify Int8Array.from(s) length Set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_1900
     * @tc.name int8ArrayFromPart02Test019
     * @tc.desc Verify Int8Array.from(s) length Set
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test019() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(10);
    s.add(20);
    s.add(30);
    Int8Array arr = Int8Array.from(s);
    assertEqual(3, arr.length());
    assertEqualInt(30, arr.at(-1));
    }

    /**
     * Verify Int8Array.from results are independent copies - modifying arr1 does not affect arr2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_2000
     * @tc.name int8ArrayFromPart02Test020
     * @tc.desc Verify Int8Array.from results are independent copies - modifying arr1 does not affect arr2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test020() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    Int8Array arr1 = Int8Array.from(s);
    Int8Array arr2 = Int8Array.from(s);
    arr1.set(0, 99);
    assertEqualInt(1, arr2.get(0));
    }

    /**
     * Verify Int8Array.from(s) byteLength behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_2100
     * @tc.name int8ArrayFromPart02Test021
     * @tc.desc Verify Int8Array.from(s) byteLength behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test021() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    s.add(3);
    s.add(4);
    Int8Array arr = Int8Array.from(s);
    int r1 = arr.byteLength();
    int e1 = 4;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(s) BYTES_PER_ELEMENT behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_2200
     * @tc.name int8ArrayFromPart02Test022
     * @tc.desc Verify Int8Array.from(s) BYTES_PER_ELEMENT behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test022() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    Int8Array arr = Int8Array.from(s);
    int r1 = arr.BYTES_PER_ELEMENT;
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(s) toString() behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_2300
     * @tc.name int8ArrayFromPart02Test023
     * @tc.desc Verify Int8Array.from(s) toString() behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test023() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    s.add(3);
    Int8Array arr = Int8Array.from(s);
    String r1 = String.valueOf(arr);
    String e1 = "1,2,3";
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(s) {128, -129, 255} [-128, 127, -1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_2400
     * @tc.name int8ArrayFromPart02Test024
     * @tc.desc Verify Int8Array.from(s) {128, -129, 255} [-128, 127, -1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test024() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(128);
    s.add(-129);
    s.add(255);
    Int8Array arr = Int8Array.from(s);
    int r1 = arr.length();
    int e1 = 3;
    assertEqual(e1, r1);
    int r2 = arr.get(0);
    int e2 = INT8_MIN;
    assertEqual(e2, r2);
    int r3 = arr.get(1);
    int e3 = INT8_MAX;
    assertEqual(e3, r3);
    int r4 = arr.get(2);
    int e4 = -1;
    assertEqual(e4, r4);
    }

    /**
     * Verify Int8Array.from(src) arity=1 Iterable<number>
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_2500
     * @tc.name int8ArrayFromPart02Test025
     * @tc.desc Verify Int8Array.from(src) arity=1 Iterable<number>
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test025() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array arr = Int8Array.from(src);
    int r1 = arr.length();
    int e1 = 3;
    assertEqual(e1, r1);
    int r2 = arr.get(0);
    int e2 = 10;
    assertEqual(e2, r2);
    }

    /**
     * Verify Int8Array.from arity=2 Iterable<number>
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_2600
     * @tc.name int8ArrayFromPart02Test026
     * @tc.desc Verify Int8Array.from arity=2 Iterable<number>
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test026() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        return v;
        });
    assertEqual(3, arr.length());
    int r1 = arr.get(0);
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) Array<number> Iterable<number>
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_2800
     * @tc.name int8ArrayFromPart02Test028
     * @tc.desc Verify Int8Array.from(src) Array<number> Iterable<number>
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test028() {
    List<Integer> src = java.util.Arrays.asList(7, 8, 9);
    Int8Array arr = Int8Array.from(src);
    assertEqual(3, arr.length());
    int r1 = arr.get(0);
    int e1 = 7;
    assertEqual(e1, r1);
    int r2 = arr.get(1);
    int e2 = 8;
    assertEqual(e2, r2);
    int r3 = arr.get(2);
    int e3 = 9;
    assertEqual(e3, r3);
    }

    /**
     * Verify Int8Array.from(empty Array source) returns length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_2900
     * @tc.name int8ArrayFromPart02Test029
     * @tc.desc Verify Int8Array.from(empty Array source) returns length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test029() {
    List<Integer> src = new ArrayList<>();
    Int8Array arr = Int8Array.from(src);
    int r1 = arr.length();
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) Iterable [42]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_3000
     * @tc.name int8ArrayFromPart02Test030
     * @tc.desc Verify Int8Array.from(src) Iterable [42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test030() {
    List<Integer> src = java.util.Arrays.asList(42);
    Int8Array arr = Int8Array.from(src);
    int r1 = arr.length();
    int e1 = 1;
    assertEqual(e1, r1);
    int r2 = arr.get(0);
    int e2 = 42;
    assertEqual(e2, r2);
    }

    /**
     * Verify Int8Array.from(Array source [1, -1, 2, -2]) returns length 4 with elements preserved
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_3100
     * @tc.name int8ArrayFromPart02Test031
     * @tc.desc Verify Int8Array.from(Array source [1, -1, 2, -2]) returns length 4 with elements preserved
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test031() {
    List<Integer> src = java.util.Arrays.asList(1, -1, 2, -2);
    Int8Array arr = Int8Array.from(src);
    int r1 = arr.length();
    int e1 = 4;
    assertEqual(e1, r1);
    int r2 = arr.get(0);
    int e2 = 1;
    assertEqual(e2, r2);
    int r3 = arr.get(1);
    int e3 = -1;
    assertEqual(e3, r3);
    int r4 = arr.get(2);
    int e4 = 2;
    assertEqual(e4, r4);
    int r5 = arr.get(3);
    int e5 = -2;
    assertEqual(e5, r5);
    }

    /**
     * Verify Int8Array.from(Array source [INT8_MIN]) preserves -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_3200
     * @tc.name int8ArrayFromPart02Test032
     * @tc.desc Verify Int8Array.from(Array source [INT8_MIN]) preserves -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test032() {
    List<Integer> src = java.util.Arrays.asList(INT8_MIN);
    Int8Array arr = Int8Array.from(src);
    int r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from expects INT8_MAX
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_3300
     * @tc.name int8ArrayFromPart02Test033
     * @tc.desc Verify Int8Array.from expects INT8_MAX
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test033() {
    List<Integer> src = java.util.Arrays.asList(INT8_MAX);
    Int8Array arr = Int8Array.from(src);
    int r1 = arr.get(0);
    int e1 = INT8_MAX;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from clamps source 128 to -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_3400
     * @tc.name int8ArrayFromPart02Test034
     * @tc.desc Verify Int8Array.from clamps source 128 to -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test034() {
    List<Integer> src = java.util.Arrays.asList(128);
    Int8Array arr = Int8Array.from(src);
    int r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) Iterable -129
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_3500
     * @tc.name int8ArrayFromPart02Test035
     * @tc.desc Verify Int8Array.from(src) Iterable -129
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test035() {
    List<Integer> src = java.util.Arrays.asList(-129);
    Int8Array arr = Int8Array.from(src);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify Int8Array.from(src) Iterable -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_3600
     * @tc.name int8ArrayFromPart02Test036
     * @tc.desc Verify Int8Array.from(src) Iterable -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test036() {
    List<Integer> src = java.util.Arrays.asList(255);
    Int8Array arr = Int8Array.from(src);
    int r1 = arr.get(0);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from clamps source 256 to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_3700
     * @tc.name int8ArrayFromPart02Test037
     * @tc.desc Verify Int8Array.from clamps source 256 to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test037() {
    List<Integer> src = java.util.Arrays.asList(256);
    Int8Array arr = Int8Array.from(src);
    int r1 = arr.get(0);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) Iterable Number.NaN
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_3800
     * @tc.name int8ArrayFromPart02Test038
     * @tc.desc Verify Int8Array.from(src) Iterable Number.NaN
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test038() {
    double[] src = new double[] {Double.NaN};
    Int8Array arr = Int8Array.from(src);
    int r1 = arr.get(0);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) Iterable 1.9
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_3900
     * @tc.name int8ArrayFromPart02Test039
     * @tc.desc Verify Int8Array.from(src) Iterable 1.9
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test039() {
    double[] src = new double[] {1.9};
    Int8Array arr = Int8Array.from(src);
    int r1 = arr.get(0);
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) Iterable -1.9
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_4000
     * @tc.name int8ArrayFromPart02Test040
     * @tc.desc Verify Int8Array.from(src) Iterable -1.9
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test040() {
    double[] src = new double[] {-1.9};
    Int8Array arr = Int8Array.from(src);
    int r1 = arr.get(0);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) Iterable 0.0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_4100
     * @tc.name int8ArrayFromPart02Test041
     * @tc.desc Verify Int8Array.from(src) Iterable 0.0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test041() {
    double[] src = new double[] {0.0};
    Int8Array arr = Int8Array.from(src);
    int r1 = arr.get(0);
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(Array of 100) returns length 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_4300
     * @tc.name int8ArrayFromPart02Test043
     * @tc.desc Verify Int8Array.from(Array of 100) returns length 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test043() {
    List<Integer> srcArr = new ArrayList<>();
    for (int i = 0; i < 100; i = i + 1) {
    srcArr.add(i);
    }
    List<Integer> src = srcArr;
    Int8Array arr = Int8Array.from(src);
    assertEqual(100, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(99, arr.get(99));
    }

    /**
     * Verify Int8Array.from with constant mapfn returning 5 yields length 3 all elements 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_4400
     * @tc.name int8ArrayFromPart02Test044
     * @tc.desc Verify Int8Array.from with constant mapfn returning 5 yields length 3 all elements 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test044() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        if (k == 0) {
            assertEqual(1, v);
        }
        return 5;
        });
    assertEqual(3, arr.length());
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify Int8Array.from mapfn v*2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_4500
     * @tc.name int8ArrayFromPart02Test045
     * @tc.desc Verify Int8Array.from mapfn v*2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test045() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        return v * 2;
        });
    assertEqualInt(20, arr.get(0));
    assertEqualInt(40, arr.get(1));
    assertEqualInt(60, arr.get(2));
    }

    /**
     * Verify Int8Array.from mapfn v-k
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_4600
     * @tc.name int8ArrayFromPart02Test046
     * @tc.desc Verify Int8Array.from mapfn v-k
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test046() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        return v - k;
        });
    assertEqualInt(10, arr.get(0));
    assertEqualInt(19, arr.get(1));
    assertEqualInt(28, arr.get(2));
    }

    /**
     * Verify Int8Array.from with mapFn returning INT8_MAX expects INT8_MAX
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_4700
     * @tc.name int8ArrayFromPart02Test047
     * @tc.desc Verify Int8Array.from with mapFn returning INT8_MAX expects INT8_MAX
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test047() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        if (k == 0) {
            assertEqual(1, v);
        }
        return INT8_MAX;
        });
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify Int8Array.from expects -128 when INT8_MIN
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_4800
     * @tc.name int8ArrayFromPart02Test048
     * @tc.desc Verify Int8Array.from expects -128 when INT8_MIN
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test048() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        if (k == 0) {
            assertEqual(1, v);
        }
        return INT8_MIN;
        });
    int r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from expects -128 when 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_4900
     * @tc.name int8ArrayFromPart02Test049
     * @tc.desc Verify Int8Array.from expects -128 when 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test049() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        if (k == 0) {
            assertEqual(1, v);
        }
        return 128;
        });
    int r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from mapfn -129
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_5000
     * @tc.name int8ArrayFromPart02Test050
     * @tc.desc Verify Int8Array.from mapfn -129
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test050() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        if (k == 0) {
            assertEqual(1, v);
        }
        return -129;
        });
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify Int8Array.from mapfn -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_5100
     * @tc.name int8ArrayFromPart02Test051
     * @tc.desc Verify Int8Array.from mapfn -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test051() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        if (k == 0) {
            assertEqual(1, v);
        }
        return 255;
        });
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify Int8Array.from with mapFn returning 0 expects 0 for all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_5500
     * @tc.name int8ArrayFromPart02Test055
     * @tc.desc Verify Int8Array.from with mapFn returning 0 expects 0 for all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test055() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        if (k == 0) {
            assertEqual(1, v);
        }
        return 0;
        });
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify Int8Array.from mapfn returns index k: expects [0, 1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_5600
     * @tc.name int8ArrayFromPart02Test056
     * @tc.desc Verify Int8Array.from mapfn returns index k: expects [0, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test056() {
    List<Integer> src = java.util.Arrays.asList(5, 5, 5);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        assertEqual(5, v);
        return k;
    });
    assertEqualInt(0, arr.get(0));
    assertEqualInt(1, arr.get(1));
    assertEqualInt(2, arr.get(2));
    }

    /**
     * Verify Int8Array.from mapfn v+k
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_5700
     * @tc.name int8ArrayFromPart02Test057
     * @tc.desc Verify Int8Array.from mapfn v+k
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test057() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3, 4);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        return v + k;
        });
    assertEqualInt(1, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(5, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify Int8Array.from expects 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_5800
     * @tc.name int8ArrayFromPart02Test058
     * @tc.desc Verify Int8Array.from expects 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test058() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    int factor = 10;
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        return v * factor;
        });
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify Int8Array.from expects 6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_5900
     * @tc.name int8ArrayFromPart02Test059
     * @tc.desc Verify Int8Array.from expects 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test059() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    int[] sum = {0};
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        sum[0] = sum[0] + v;
        return v;
    });
    assertEqual(6, sum[0]);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify Int8Array.from expects 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_6100
     * @tc.name int8ArrayFromPart02Test061
     * @tc.desc Verify Int8Array.from expects 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test061() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3, 4);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        if (k % 2 == 0) {
        return v;
        }
        return 0;
        });
    assertEqualInt(1, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify Int8Array.from(src) length equals source array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_6200
     * @tc.name int8ArrayFromPart02Test062
     * @tc.desc Verify Int8Array.from(src) length equals source array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test062() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int8Array arr = Int8Array.from(src);
    int r1 = arr.length();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from mapfn length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_6300
     * @tc.name int8ArrayFromPart02Test063
     * @tc.desc Verify Int8Array.from mapfn length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test063() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30, 40);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        return v;
        });
    assertEqual(4, arr.length());
    }

    /**
     * Verify Int8Array.from mapfn byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_6500
     * @tc.name int8ArrayFromPart02Test065
     * @tc.desc Verify Int8Array.from mapfn byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test065() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        return v;
        });
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify Int8Array.from mapfn byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_6600
     * @tc.name int8ArrayFromPart02Test066
     * @tc.desc Verify Int8Array.from mapfn byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test066() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3, 4, 5);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        return v;
        });
    assertEqual(5, arr.byteLength());
    }

    /**
     * Verify Int8Array.from mapfn BYTES_PER_ELEMENT
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_6700
     * @tc.name int8ArrayFromPart02Test067
     * @tc.desc Verify Int8Array.from mapfn BYTES_PER_ELEMENT
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test067() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        return v;
        });
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify Int8Array.from propagates mapfn-thrown Error
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_6800
     * @tc.name int8ArrayFromPart02Test068
     * @tc.desc Verify Int8Array.from propagates mapfn-thrown Error
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test068() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    try {
    Int8Array.from(src, (v, k) -> {
    if (k == 0) {
    assertEqual(1, v);
    }
    return BasTest.throwTestError("generic error");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("generic error", e.getMessage());
    }
    }

    /**
     * Verify Int8Array.from propagates mapfn-thrown RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_6900
     * @tc.name int8ArrayFromPart02Test069
     * @tc.desc Verify Int8Array.from propagates mapfn-thrown RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test069() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    try {
    Int8Array.from(src, (v, k) -> {
    assertEqual(1, v + k);
    throw new RangeError("range error");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("range error", e.getMessage());
    }
    }

    /**
     * Verify Int8Array.from propagates mapfn-thrown TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_7000
     * @tc.name int8ArrayFromPart02Test070
     * @tc.desc Verify Int8Array.from propagates mapfn-thrown TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test070() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    try {
    Int8Array.from(src, (v, k) -> {
    assertEqual(1, v + k);
    throw new TypeError("type error");
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    assertEqual("type error", e.getMessage());
    }
    }

    /**
     * Verify Int8Array.from mapfn throwing RangeError at second element propagates exception
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_7100
     * @tc.name int8ArrayFromPart02Test071
     * @tc.desc Verify Int8Array.from mapfn throwing RangeError at second element propagates exception
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test071() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    try {
    Int8Array.from(src, (v, k) -> {
    if (k == 1) {
    throw new RangeError("second error");
    }
    return v;
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("second error", e.getMessage());
    }
    }

    /**
     * Verify Int8Array.from Iterable mapfn
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_7200
     * @tc.name int8ArrayFromPart02Test072
     * @tc.desc Verify Int8Array.from Iterable mapfn
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test072() {
    List<Integer> src = new ArrayList<>();
    boolean[] called = {false};
    Int8Array arr = Int8Array.from(src, (v, k) -> {
        called[0] = true;
        return v;
    });
    assertEqual(0, arr.length());
    assertFalse(called[0]);
    }

    /**
     * Verify Int8Array.from(src) Iterable Number.POSITIVE_INFINITY
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_7300
     * @tc.name int8ArrayFromPart02Test073
     * @tc.desc Verify Int8Array.from(src) Iterable Number.POSITIVE_INFINITY
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test073() {
    double[] src = new double[] {Double.POSITIVE_INFINITY};
    Int8Array arr = Int8Array.from(src);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify Int8Array.from(src) Iterable Number.NEGATIVE_INFINITY
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_7400
     * @tc.name int8ArrayFromPart02Test074
     * @tc.desc Verify Int8Array.from(src) Iterable Number.NEGATIVE_INFINITY
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart02Test074() {
    double[] src = new double[] {Double.NEGATIVE_INFINITY};
    Int8Array arr = Int8Array.from(src);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify Int8Array.from mapfn Number.POSITIVE_INFINITY
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART02_TEST_7600
     * @tc.name int8ArrayFromPart02Test076
     * @tc.desc Verify Int8Array.from mapfn Number.POSITIVE_INFINITY
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
