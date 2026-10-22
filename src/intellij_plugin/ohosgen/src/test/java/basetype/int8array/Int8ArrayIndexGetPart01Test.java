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

import java.util.List;
import java.util.LinkedHashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayIndexGetPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIndexGetPart01Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify $_get(0) with int literal returns first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_0100
     * @tc.name int8ArrayIndexGetPart01Test001
     * @tc.desc Verify $_get(0) with int literal returns first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test001() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    Integer r = arr.get(0);
    assertEqualInt(10, r);
    }

    /**
     * Verify $_get(2) with int literal returns last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_0200
     * @tc.name int8ArrayIndexGetPart01Test002
     * @tc.desc Verify $_get(2) with int literal returns last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test002() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    Integer r = arr.get(2);
    assertEqualInt(30, r);
    }

    /**
     * Verify $_get(idx) with int variable returns element at that index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_0300
     * @tc.name int8ArrayIndexGetPart01Test003
     * @tc.desc Verify $_get(idx) with int variable returns element at that index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test003() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int idx = 1;
    Integer r = arr.get(idx);
    assertEqualInt(20, r);
    }

    /**
     * Verify $_get(0) on empty array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_0400
     * @tc.name int8ArrayIndexGetPart01Test004
     * @tc.desc Verify $_get(0) on empty array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test004() {
    Int8Array arr = new Int8Array(0);
    try {
    arr.get(0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(0) on single-element array returns the only element 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_0500
     * @tc.name int8ArrayIndexGetPart01Test005
     * @tc.desc Verify $_get(0) on single-element array returns the only element 127
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test005() {
    Int8Array arr = Int8Array.of(INT8_MAX);
    Integer r = arr.get(0);
    assertEqualInt(INT8_MAX, r);
    }

    /**
     * Verify $_get(0) on zero-filled array returns default value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_0600
     * @tc.name int8ArrayIndexGetPart01Test006
     * @tc.desc Verify $_get(0) on zero-filled array returns default value 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test006() {
    Int8Array arr = new Int8Array(3);
    Integer r = arr.get(0);
    assertEqualInt(0, r);
    }

    /**
     * Verify ArrayBuffer view $_get(0) returns first byte after $_set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_0700
     * @tc.name int8ArrayIndexGetPart01Test007
     * @tc.desc Verify ArrayBuffer view $_get(0) returns first byte after $_set
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test007() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    view.set(0, 11);
    Integer r = view.get(0);
    assertEqualInt(11, r);
    }

    /**
     * Verify from(Array<number>) $_get(0) returns first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_0800
     * @tc.name int8ArrayIndexGetPart01Test008
     * @tc.desc Verify from(Array<number>) $_get(0) returns first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test008() {
    List<Integer> src = java.util.Arrays.asList(5, 15, 25);
    Int8Array arr = Int8Array.from(src);
    Integer r = arr.get(0);
    assertEqualInt(5, r);
    }

    /**
     * Verify $_get(2) on length-3 array returns last element 9
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_0900
     * @tc.name int8ArrayIndexGetPart01Test009
     * @tc.desc Verify $_get(2) on length-3 array returns last element 9
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test009() {
    Int8Array arr = Int8Array.of(7, 8, 9);
    Integer r = arr.get(2);
    assertEqualInt(9, r);
    }

    /**
     * Verify $_get(1) on length-2 array returns last element 8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_1000
     * @tc.name int8ArrayIndexGetPart01Test010
     * @tc.desc Verify $_get(1) on length-2 array returns last element 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test010() {
    Int8Array arr = Int8Array.of(7, 8);
    Integer r = arr.get(1);
    assertEqualInt(8, r);
    }

    /**
     * Verify computed index arr.length-1 $_get returns last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_1100
     * @tc.name int8ArrayIndexGetPart01Test011
     * @tc.desc Verify computed index arr.length-1 $_get returns last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test011() {
    Int8Array arr = Int8Array.of(3, 6, 9, 12);
    int idx = arr.length() - 1;
    Integer r = arr.get(idx);
    assertEqualInt(12, r);
    }

    /**
     * Verify $_get(3) on length-4 array returns Int8 max value 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_1200
     * @tc.name int8ArrayIndexGetPart01Test012
     * @tc.desc Verify $_get(3) on length-4 array returns Int8 max value 127
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test012() {
    Int8Array arr = Int8Array.of(100, 110, 120, INT8_MAX);
    Integer r = arr.get(3);
    assertEqualInt(INT8_MAX, r);
    }

    /**
     * Verify $_get(1) on length-3 array returns negative middle element -10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_1300
     * @tc.name int8ArrayIndexGetPart01Test013
     * @tc.desc Verify $_get(1) on length-3 array returns negative middle element -10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test013() {
    Int8Array arr = Int8Array.of(-5, -10, -15);
    Integer r = arr.get(1);
    assertEqualInt(-10, r);
    }

    /**
     * Verify $_get(2) on length-4 array returns third element 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_1400
     * @tc.name int8ArrayIndexGetPart01Test014
     * @tc.desc Verify $_get(2) on length-4 array returns third element 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test014() {
    Int8Array arr = Int8Array.of(1, 2, 4, 8);
    Integer r = arr.get(2);
    assertEqualInt(4, r);
    }

    /**
     * Verify $_get(3) on length-3 array just-over-boundary throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_1500
     * @tc.name int8ArrayIndexGetPart01Test015
     * @tc.desc Verify $_get(3) on length-3 array just-over-boundary throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test015() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    try {
    arr.get(3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(1) on single-element array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_1600
     * @tc.name int8ArrayIndexGetPart01Test016
     * @tc.desc Verify $_get(1) on single-element array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test016() {
    Int8Array arr = Int8Array.of(99);
    try {
    arr.get(1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify computed index arr.length $_get throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_1700
     * @tc.name int8ArrayIndexGetPart01Test017
     * @tc.desc Verify computed index arr.length $_get throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test017() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int idx = arr.length();
    try {
    arr.get(idx);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(2) on length-2 array just-over-boundary throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_1800
     * @tc.name int8ArrayIndexGetPart01Test018
     * @tc.desc Verify $_get(2) on length-2 array just-over-boundary throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test018() {
    Int8Array arr = Int8Array.of(7, 8);
    try {
    arr.get(2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(4) on length-3 array boundary+1 throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_1900
     * @tc.name int8ArrayIndexGetPart01Test019
     * @tc.desc Verify $_get(4) on length-3 array boundary+1 throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test019() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    try {
    arr.get(4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(2) on single-element array boundary+1 throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_2000
     * @tc.name int8ArrayIndexGetPart01Test020
     * @tc.desc Verify $_get(2) on single-element array boundary+1 throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test020() {
    Int8Array arr = Int8Array.of(0);
    try {
    arr.get(2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify computed index arr.length+1 $_get throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_2100
     * @tc.name int8ArrayIndexGetPart01Test021
     * @tc.desc Verify computed index arr.length+1 $_get throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test021() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int idx = arr.length() + 1;
    try {
    arr.get(idx);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-1) on length-3 array throws RangeError not last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_2200
     * @tc.name int8ArrayIndexGetPart01Test022
     * @tc.desc Verify $_get(-1) on length-3 array throws RangeError not last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test022() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify ArrayBuffer view $_get(-1) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_2300
     * @tc.name int8ArrayIndexGetPart01Test023
     * @tc.desc Verify ArrayBuffer view $_get(-1) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test023() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    view.set(0, 50);
    try {
    view.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-1) on empty array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_2400
     * @tc.name int8ArrayIndexGetPart01Test024
     * @tc.desc Verify $_get(-1) on empty array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test024() {
    Int8Array arr = new Int8Array(0);
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-1) on Set-constructed array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_2500
     * @tc.name int8ArrayIndexGetPart01Test025
     * @tc.desc Verify $_get(-1) on Set-constructed array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test025() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    Int8Array arr = Int8Array.from(s);
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-4) equal to -length on length-4 array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_2600
     * @tc.name int8ArrayIndexGetPart01Test026
     * @tc.desc Verify $_get(-4) equal to -length on length-4 array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test026() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    try {
    arr.get(-4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify computed negative index -arr.length $_get throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_2700
     * @tc.name int8ArrayIndexGetPart01Test027
     * @tc.desc Verify computed negative index -arr.length $_get throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test027() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int idx = -arr.length();
    try {
    arr.get(idx);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-4) equal to -length-1 on length-3 array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_2800
     * @tc.name int8ArrayIndexGetPart01Test028
     * @tc.desc Verify $_get(-4) equal to -length-1 on length-3 array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test028() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    try {
    arr.get(-4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify computed negative index -arr.length-1 $_get throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_2900
     * @tc.name int8ArrayIndexGetPart01Test029
     * @tc.desc Verify computed negative index -arr.length-1 $_get throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test029() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int idx = -arr.length() - 1;
    try {
    arr.get(idx);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(2147483647) large positive overflow on length-3 array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_3000
     * @tc.name int8ArrayIndexGetPart01Test030
     * @tc.desc Verify $_get(2147483647) large positive overflow on length-3 array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test030() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    try {
    arr.get(2147483647);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(2147483647) large positive overflow on empty array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_3100
     * @tc.name int8ArrayIndexGetPart01Test031
     * @tc.desc Verify $_get(2147483647) large positive overflow on empty array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test031() {
    Int8Array arr = new Int8Array(0);
    try {
    arr.get(2147483647);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-2147483648) large negative overflow on length-3 array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_3200
     * @tc.name int8ArrayIndexGetPart01Test032
     * @tc.desc Verify $_get(-2147483648) large negative overflow on length-3 array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test032() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    try {
    arr.get(Integer.MIN_VALUE);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get(-2147483648) large negative overflow on empty array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_3300
     * @tc.name int8ArrayIndexGetPart01Test033
     * @tc.desc Verify $_get(-2147483648) large negative overflow on empty array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test033() {
    Int8Array arr = new Int8Array(0);
    try {
    arr.get(Integer.MIN_VALUE);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify int variable holding 0 $_get returns first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_3400
     * @tc.name int8ArrayIndexGetPart01Test034
     * @tc.desc Verify int variable holding 0 $_get returns first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test034() {
    Int8Array arr = Int8Array.of(15, 25, 35);
    int idx = 0;
    Integer r = arr.get(idx);
    assertEqualInt(15, r);
    }

    /**
     * Verify arithmetic index 1+1 $_get returns third element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_3500
     * @tc.name int8ArrayIndexGetPart01Test035
     * @tc.desc Verify arithmetic index 1+1 $_get returns third element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test035() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    Integer r = arr.get(1 + 1);
    assertEqualInt(30, r);
    }

    /**
     * Verify computed index arr.length-2 $_get returns second-to-last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_3600
     * @tc.name int8ArrayIndexGetPart01Test036
     * @tc.desc Verify computed index arr.length-2 $_get returns second-to-last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test036() {
    Int8Array arr = Int8Array.of(100, 110, 120, INT8_MAX);
    int idx = arr.length() - 2;
    Integer r = arr.get(idx);
    assertEqualInt(120, r);
    }

    /**
     * Verify copy constructor new Int8Array(src) $_get(0) returns first element of copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_3700
     * @tc.name int8ArrayIndexGetPart01Test037
     * @tc.desc Verify copy constructor new Int8Array(src) $_get(0) returns first element of copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test037() {
    Int8Array src = Int8Array.of(77, 88);
    Int8Array arr = new Int8Array(src);
    Integer r = arr.get(0);
    assertEqualInt(77, r);
    }

    /**
     * Verify zero-filled new Int8Array(4) $_get(2) returns default 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_3800
     * @tc.name int8ArrayIndexGetPart01Test038
     * @tc.desc Verify zero-filled new Int8Array(4) $_get(2) returns default 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test038() {
    Int8Array arr = new Int8Array(4);
    Integer r = arr.get(2);
    assertEqualInt(0, r);
    }

    /**
     * Verify from(Array<number>) with negative values $_get(1) returns -10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_3900
     * @tc.name int8ArrayIndexGetPart01Test039
     * @tc.desc Verify from(Array<number>) with negative values $_get(1) returns -10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test039() {
    List<Integer> src = java.util.Arrays.asList(10, -10, 10);
    Int8Array arr = Int8Array.from(src);
    Integer r = arr.get(1);
    assertEqualInt(-10, r);
    }

    /**
     * Verify from(Set<int>) $_get(0) returns first inserted element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_4000
     * @tc.name int8ArrayIndexGetPart01Test040
     * @tc.desc Verify from(Set<int>) $_get(0) returns first inserted element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test040() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(33);
    s.add(44);
    Int8Array arr = Int8Array.from(s);
    Integer r = arr.get(0);
    assertEqualInt(33, r);
    }

    /**
     * Verify from(Array<number>) single element $_get(0) returns the only element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_4100
     * @tc.name int8ArrayIndexGetPart01Test041
     * @tc.desc Verify from(Array<number>) single element $_get(0) returns the only element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test041() {
    List<Integer> src = java.util.Arrays.asList(63);
    Int8Array arr = Int8Array.from(src);
    Integer r = arr.get(0);
    assertEqualInt(63, r);
    }

    /**
     * Verify from(Set<int>) empty set $_get(0) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_4200
     * @tc.name int8ArrayIndexGetPart01Test042
     * @tc.desc Verify from(Set<int>) empty set $_get(0) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test042() {
    Set<Integer> s = new LinkedHashSet<>();
    Int8Array arr = Int8Array.from(s);
    try {
    arr.get(0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify copy constructor new Int8Array(src) $_get(1) returns second element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_4300
     * @tc.name int8ArrayIndexGetPart01Test043
     * @tc.desc Verify copy constructor new Int8Array(src) $_get(1) returns second element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test043() {
    Int8Array src = Int8Array.of(77, 88, 99);
    Int8Array arr = new Int8Array(src);
    Integer r = arr.get(1);
    assertEqualInt(88, r);
    }

    /**
     * Verify copy constructor then $_get(arr.length) overflow throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_4400
     * @tc.name int8ArrayIndexGetPart01Test044
     * @tc.desc Verify copy constructor then $_get(arr.length) overflow throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test044() {
    Int8Array src = Int8Array.of(77, 88);
    Int8Array arr = new Int8Array(src);
    int idx = arr.length();
    try {
    arr.get(idx);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify offset-0 view $_get(0) returns buffer first byte
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_4500
     * @tc.name int8ArrayIndexGetPart01Test045
     * @tc.desc Verify offset-0 view $_get(0) returns buffer first byte
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test045() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array full = new Int8Array(buf, 0, 4);
    full.set(0, 11);
    full.set(1, 22);
    full.set(2, 33);
    full.set(3, 44);
    Int8Array view = new Int8Array(buf, 0, 2);
    Integer r = view.get(0);
    assertEqualInt(11, r);
    }

    /**
     * Verify offset-2 view $_get(0) returns buffer third byte offset applied
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_4600
     * @tc.name int8ArrayIndexGetPart01Test046
     * @tc.desc Verify offset-2 view $_get(0) returns buffer third byte offset applied
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test046() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array full = new Int8Array(buf, 0, 4);
    full.set(0, 11);
    full.set(1, 22);
    full.set(2, 33);
    full.set(3, 44);
    Int8Array view = new Int8Array(buf, 2, 2);
    Integer r = view.get(0);
    assertEqualInt(33, r);
    }

    /**
     * Verify offset-2 view $_get(1) returns buffer fourth byte
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_4700
     * @tc.name int8ArrayIndexGetPart01Test047
     * @tc.desc Verify offset-2 view $_get(1) returns buffer fourth byte
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test047() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array full = new Int8Array(buf, 0, 4);
    full.set(0, 11);
    full.set(1, 22);
    full.set(2, 33);
    full.set(3, 44);
    Int8Array view = new Int8Array(buf, 2, 2);
    Integer r = view.get(1);
    assertEqualInt(44, r);
    }

    /**
     * Verify offset-1 view $_get(view.length-1) returns view last byte
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_4800
     * @tc.name int8ArrayIndexGetPart01Test048
     * @tc.desc Verify offset-1 view $_get(view.length-1) returns view last byte
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test048() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array full = new Int8Array(buf, 0, 4);
    full.set(0, 11);
    full.set(1, 22);
    full.set(2, 33);
    full.set(3, 44);
    Int8Array view = new Int8Array(buf, 1, 2);
    int idx = view.length() - 1;
    Integer r = view.get(idx);
    assertEqualInt(33, r);
    }

    /**
     * Verify view $_get(view.length) overflow throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_4900
     * @tc.name int8ArrayIndexGetPart01Test049
     * @tc.desc Verify view $_get(view.length) overflow throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test049() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 2);
    int idx = view.length();
    try {
    view.get(idx);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify offset-0 length-2 view $_get(2) overflow throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_5000
     * @tc.name int8ArrayIndexGetPart01Test050
     * @tc.desc Verify offset-0 length-2 view $_get(2) overflow throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test050() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 2);
    try {
    view.get(2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify offset-1 length-1 view $_get(0) returns buffer second byte
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_5100
     * @tc.name int8ArrayIndexGetPart01Test051
     * @tc.desc Verify offset-1 length-1 view $_get(0) returns buffer second byte
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test051() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array full = new Int8Array(buf, 0, 4);
    full.set(0, 11);
    full.set(1, 22);
    full.set(2, 33);
    full.set(3, 44);
    Int8Array view = new Int8Array(buf, 1, 1);
    Integer r = view.get(0);
    assertEqualInt(22, r);
    }

    /**
     * Verify subarray(1) $_get(0) returns original second element via relative index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_5200
     * @tc.name int8ArrayIndexGetPart01Test052
     * @tc.desc Verify subarray(1) $_get(0) returns original second element via relative index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test052() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    Int8Array sub = arr.subarray(1);
    Integer r = sub.get(0);
    assertEqualInt(20, r);
    }

    /**
     * Verify subarray(1) $_get(2) returns original last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_5300
     * @tc.name int8ArrayIndexGetPart01Test053
     * @tc.desc Verify subarray(1) $_get(2) returns original last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test053() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    Int8Array sub = arr.subarray(1);
    Integer r = sub.get(2);
    assertEqualInt(40, r);
    }

    /**
     * Verify subarray(1) $_get(sub.length) overflow throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_5400
     * @tc.name int8ArrayIndexGetPart01Test054
     * @tc.desc Verify subarray(1) $_get(sub.length) overflow throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test054() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    Int8Array sub = arr.subarray(1);
    int idx = sub.length();
    try {
    sub.get(idx);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify subarray(1) $_get(-1) negative index throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_5500
     * @tc.name int8ArrayIndexGetPart01Test055
     * @tc.desc Verify subarray(1) $_get(-1) negative index throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test055() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    Int8Array sub = arr.subarray(1);
    try {
    sub.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify subarray(2) $_get(0) returns original third element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_5600
     * @tc.name int8ArrayIndexGetPart01Test056
     * @tc.desc Verify subarray(2) $_get(0) returns original third element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test056() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    Int8Array sub = arr.subarray(2);
    Integer r = sub.get(0);
    assertEqualInt(30, r);
    }

    /**
     * Verify subarray(0, 2) $_get(1) returns original second element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_5700
     * @tc.name int8ArrayIndexGetPart01Test057
     * @tc.desc Verify subarray(0, 2) $_get(1) returns original second element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test057() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    Int8Array sub = arr.subarray(0, 2);
    Integer r = sub.get(1);
    assertEqualInt(20, r);
    }

    /**
     * Verify slice(1, 3) $_get(0) returns copy first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_5800
     * @tc.name int8ArrayIndexGetPart01Test058
     * @tc.desc Verify slice(1, 3) $_get(0) returns copy first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test058() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    Int8Array cp = arr.slice(1, 3);
    Integer r = cp.get(0);
    assertEqualInt(20, r);
    }

    /**
     * Verify slice(1, 3) $_get(1) returns copy second element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_5900
     * @tc.name int8ArrayIndexGetPart01Test059
     * @tc.desc Verify slice(1, 3) $_get(1) returns copy second element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test059() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    Int8Array cp = arr.slice(1, 3);
    Integer r = cp.get(1);
    assertEqualInt(30, r);
    }

    /**
     * Verify slice(1, 3) $_get(2) copy length is 2 overflow throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_6000
     * @tc.name int8ArrayIndexGetPart01Test060
     * @tc.desc Verify slice(1, 3) $_get(2) copy length is 2 overflow throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test060() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    Int8Array cp = arr.slice(1, 3);
    try {
    cp.get(2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify same valid index $_get twice returns equal values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_6100
     * @tc.name int8ArrayIndexGetPart01Test061
     * @tc.desc Verify same valid index $_get twice returns equal values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test061() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    Integer r1 = arr.get(1);
    assertEqualInt(20, r1);
    }

    /**
     * Verify overflow index $_get(9) on length-3 array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_6200
     * @tc.name int8ArrayIndexGetPart01Test062
     * @tc.desc Verify overflow index $_get(9) on length-3 array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test062() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    try {
    arr.get(9);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify after $_set(0, 50) then $_get(0) returns 50
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_6300
     * @tc.name int8ArrayIndexGetPart01Test063
     * @tc.desc Verify after $_set(0, 50) then $_get(0) returns 50
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test063() {
    Int8Array arr = new Int8Array(2);
    arr.set(0, 50);
    Integer r = arr.get(0);
    assertEqualInt(50, r);
    }

    /**
     * Verify after $_set(1, -128) then $_get(1) returns Int8 min value -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_6400
     * @tc.name int8ArrayIndexGetPart01Test064
     * @tc.desc Verify after $_set(1, -128) then $_get(1) returns Int8 min value -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test064() {
    Int8Array arr = new Int8Array(2);
    arr.set(1, INT8_MIN);
    Integer r = arr.get(1);
    assertEqualInt(-128, r);
    }

    /**
     * Verify after $_set(0, 100) then $_get(2) still returns original value 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEXGETPART01_6500
     * @tc.name int8ArrayIndexGetPart01Test065
     * @tc.desc Verify after $_set(0, 100) then $_get(2) still returns original value 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexGetPart01Test065() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    arr.set(0, 100);
    Integer r = arr.get(2);
    assertEqualInt(3, r);
    }
}
