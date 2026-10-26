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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayAtPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayAtPart02Test extends BasTest {
    private static final int INT8_MAX = 127;

    /**
     * Verify at(0) legal positive index returns typeof 'number'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_0100
     * @tc.name int8ArrayAtPart02Test001
     * @tc.desc Verify at(0) legal positive index returns typeof 'number'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test001() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqual("number", BasTest.typeofValue(arr.at(0)));
    }

    /**
     * Verify at(0) on single-element array returns typeof 'number'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_0400
     * @tc.name int8ArrayAtPart02Test004
     * @tc.desc Verify at(0) on single-element array returns typeof 'number'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test004() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX});
    assertEqual("number", BasTest.typeofValue(arr.at(0)));
    }

    /**
     * Verify at(0) reads int8 max value 127 precisely
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_0500
     * @tc.name int8ArrayAtPart02Test005
     * @tc.desc Verify at(0) reads int8 max value 127 precisely
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test005() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX});
    assertEqualInt(INT8_MAX, arr.at(0));
    }

    /**
     * Verify at(middle index) reads middle element value precisely
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_0600
     * @tc.name int8ArrayAtPart02Test006
     * @tc.desc Verify at(middle index) reads middle element value precisely
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test006() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    assertEqualInt(30, arr.at(2));
    }

    /**
     * Verify $_set(0, 200) then at(0) reads truncated wraparound value -56
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_0700
     * @tc.name int8ArrayAtPart02Test007
     * @tc.desc Verify $_set(0, 200) then at(0) reads truncated wraparound value -56
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test007() {
    Int8Array arr = new Int8Array(new int[] {0});
    arr.set(0, 200);
    assertEqualInt(-56, arr.at(0));
    }

    /**
     * Verify $_set(0, Float.NaN) then at(0) reads converted value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_0800
     * @tc.name int8ArrayAtPart02Test008
     * @tc.desc Verify $_set(0, Float.NaN) then at(0) reads converted value 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test008() {
    Int8Array arr = new Int8Array(new int[] {0});
    arr.set(0, Float.NaN);
    assertEqualInt(0, arr.at(0));
    }

    /**
     * Verify $_set(0, Float.POSITIVE_INFINITY) then at(0) reads converted value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_0900
     * @tc.name int8ArrayAtPart02Test009
     * @tc.desc Verify $_set(0, Float.POSITIVE_INFINITY) then at(0) reads converted value 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test009() {
    Int8Array arr = new Int8Array(new int[] {0});
    arr.set(0, Float.POSITIVE_INFINITY);
    assertEqualInt(0, arr.at(0));
    }

    /**
     * Verify $_set(0, Float.NEGATIVE_INFINITY) then at(0) reads converted value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_1000
     * @tc.name int8ArrayAtPart02Test010
     * @tc.desc Verify $_set(0, Float.NEGATIVE_INFINITY) then at(0) reads converted value 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test010() {
    Int8Array arr = new Int8Array(new int[] {0});
    arr.set(0, Float.NEGATIVE_INFINITY);
    assertEqualInt(0, arr.at(0));
    }

    /**
     * Verify arr.length remains 3 after at(0) call (at() does not mutate array)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_1100
     * @tc.name int8ArrayAtPart02Test011
     * @tc.desc Verify arr.length remains 3 after at(0) call (at() does not mutate array)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test011() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqualInt(10, arr.at(0));
    assertEqual(3, arr.length());
    int r1 = arr.byteLength();
    int e1 = 3;
    assertEqual(e1, r1);
    Integer r2 = arr.get(0);
    int e2 = 10;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify view byteOffset unchanged after at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_1200
     * @tc.name int8ArrayAtPart02Test012
     * @tc.desc Verify view byteOffset unchanged after at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test012() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 2, 4);
    assertEqualInt(0, view.at(0));
    assertEqual(2, view.byteOffset());
    }

    /**
     * Verify arr.length unchanged after multiple at() calls
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_1300
     * @tc.name int8ArrayAtPart02Test013
     * @tc.desc Verify arr.length unchanged after multiple at() calls
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test013() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqualInt(10, arr.at(0));
    assertEqualInt(20, arr.at(1));
    assertEqualInt(30, arr.at(2));
    assertEqualInt(30, arr.at(-1));
    assertEqual(3, arr.length());
    }

    /**
     * Verify multiple elements content unchanged after multiple at() calls
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_1400
     * @tc.name int8ArrayAtPart02Test014
     * @tc.desc Verify multiple elements content unchanged after multiple at() calls
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test014() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    arr.at(0);
    arr.at(1);
    arr.at(2);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify parent array content at corresponding position unchanged after view at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_1500
     * @tc.name int8ArrayAtPart02Test015
     * @tc.desc Verify parent array content at corresponding position unchanged after view at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test015() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    Int8Array view = arr.subarray(1, 4);
    view.at(0);
    assertEqualInt(20, arr.get(1));
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify at(0) on subarray view returns view start element value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_1600
     * @tc.name int8ArrayAtPart02Test016
     * @tc.desc Verify at(0) on subarray view returns view start element value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test016() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    Int8Array view = arr.subarray(1, 4);
    assertEqualInt(20, view.at(0));
    assertEqual(view.get(0).intValue(), view.at(0).intValue());
    }

    /**
     * Verify at(0) on view with byteOffset returns element at offset position
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_1700
     * @tc.name int8ArrayAtPart02Test017
     * @tc.desc Verify at(0) on view with byteOffset returns element at offset position
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test017() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array full = new Int8Array(buf);
    full.set(0, 11);
    full.set(1, 22);
    full.set(2, 33);
    Int8Array view = new Int8Array(buf, 1, 3);
    assertEqualInt(22, view.at(0));
    }

    /**
     * Verify view at() reflects new value after writing parent array (shared buffer read)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_1800
     * @tc.name int8ArrayAtPart02Test018
     * @tc.desc Verify view at() reflects new value after writing parent array (shared buffer read)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test018() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    Int8Array view = arr.subarray(1, 4);
    arr.set(1, 99);
    assertEqualInt(99, view.at(0));
    }

    /**
     * Verify at() on slice copy does not reflect parent modification (independent buffer)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_1900
     * @tc.name int8ArrayAtPart02Test019
     * @tc.desc Verify at() on slice copy does not reflect parent modification (independent buffer)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test019() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Int8Array copy = arr.slice(0, 3);
    arr.set(0, 99);
    assertEqualInt(10, copy.at(0));
    }

    /**
     * Verify at(0) on view with byteOffset reads element at specified offset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_2000
     * @tc.name int8ArrayAtPart02Test020
     * @tc.desc Verify at(0) on view with byteOffset reads element at specified offset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test020() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array full = new Int8Array(buf);
    full.set(3, 77);
    Int8Array view = new Int8Array(buf, 3, 2);
    assertEqualInt(77, view.at(0));
    }

    /**
     * Verify subarray view at(0) returns number type
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_2100
     * @tc.name int8ArrayAtPart02Test021
     * @tc.desc Verify subarray view at(0) returns number type
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test021() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Int8Array view = arr.subarray(0, 2);
    assertEqual("number", BasTest.typeofValue(view.at(0)));
    }

    /**
     * Verify view byteOffset then at reads element at offset position
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_2200
     * @tc.name int8ArrayAtPart02Test022
     * @tc.desc Verify view byteOffset then at reads element at offset position
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test022() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 4, 2);
    assertEqual(4, view.byteOffset());
    Int8Array full = new Int8Array(buf);
    full.set(4, 55);
    assertEqualInt(55, view.at(0));
    }

    /**
     * Verify at(0) on zero-length view returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_2300
     * @tc.name int8ArrayAtPart02Test023
     * @tc.desc Verify at(0) on zero-length view returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test023() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Int8Array view = arr.subarray(1, 1);
    assertNull(view.at(0));
    }

    /**
     * Verify at() on full-buffer view equals parent at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_2400
     * @tc.name int8ArrayAtPart02Test024
     * @tc.desc Verify at() on full-buffer view equals parent at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test024() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Int8Array view = new Int8Array(arr.buffer());
    assertEqual(arr.at(2).intValue(), view.at(2).intValue());
    }

    /**
     * Verify view and parent return same value at overlapping position via at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_2500
     * @tc.name int8ArrayAtPart02Test025
     * @tc.desc Verify view and parent return same value at overlapping position via at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test025() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    Int8Array view = arr.subarray(2, 5);
    assertEqual(arr.at(2).intValue(), view.at(0).intValue());
    }

    /**
     * Verify multiple views sharing same buffer return consistent value via at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_2600
     * @tc.name int8ArrayAtPart02Test026
     * @tc.desc Verify multiple views sharing same buffer return consistent value via at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test026() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array viewA = new Int8Array(buf);
    Int8Array viewB = new Int8Array(buf);
    viewA.set(0, 33);
    assertEqualInt(33, viewB.at(0));
    }

    /**
     * Verify at(0) equals $_get(0) (at equivalent to subscript read)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_2700
     * @tc.name int8ArrayAtPart02Test027
     * @tc.desc Verify at(0) equals $_get(0) (at equivalent to subscript read)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test027() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqual(arr.get(0).intValue(), arr.at(0).intValue());
    }

    /**
     * Verify two consecutive at() calls return equal value (deterministic read)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_2800
     * @tc.name int8ArrayAtPart02Test028
     * @tc.desc Verify two consecutive at() calls return equal value (deterministic read)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test028() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Integer first = arr.at(1);
    Integer second = arr.at(1);
    assertEqualInt(20, first);
    assertEqualInt(20, second);
    }

    /**
     * Verify at(0) equals at(-length) return same first element (positive negative index consistency)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_2900
     * @tc.name int8ArrayAtPart02Test029
     * @tc.desc Verify at(0) equals at(-length) return same first element (positive negative index consistency)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test029() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqualInt(10, arr.at(0));
    assertEqualInt(10, arr.at(-3));
    }

    /**
     * Verify at(0) returns 0 not undefined when element is 0 (zero value not out-of-bounds)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_3000
     * @tc.name int8ArrayAtPart02Test030
     * @tc.desc Verify at(0) returns 0 not undefined when element is 0 (zero value not out-of-bounds)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test030() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    assertEqualInt(0, arr.at(0));
    }

    /**
     * Verify at(0) on Int8Array.of constructed array returns first argument value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_3100
     * @tc.name int8ArrayAtPart02Test031
     * @tc.desc Verify at(0) on Int8Array.of constructed array returns first argument value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test031() {
    Int8Array arr = Int8Array.of(11, 22, 33);
    assertEqualInt(11, arr.at(0));
    }

    /**
     * Verify at(0) on Int8Array.from array source returns source first element value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_3200
     * @tc.name int8ArrayAtPart02Test032
     * @tc.desc Verify at(0) on Int8Array.from array source returns source first element value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test032() {
    List<Integer> src = java.util.Arrays.asList(5, 10, 15);
    Int8Array arr = Int8Array.from(src);
    assertEqualInt(5, arr.at(0));
    }

    /**
     * Verify at(0) on Int8Array.from empty source returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART02_3300
     * @tc.name int8ArrayAtPart02Test033
     * @tc.desc Verify at(0) on Int8Array.from empty source returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart02Test033() {
    List<Integer> src = new ArrayList<>();
    Int8Array arr = Int8Array.from(src);
    assertNull(arr.at(0));
    }
}
