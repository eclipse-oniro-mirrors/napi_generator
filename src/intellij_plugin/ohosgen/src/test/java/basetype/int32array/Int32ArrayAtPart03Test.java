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

package basetype.int32array;

import basetype.common.Int32Array;
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.RangeError;

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayAtPart03Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayAtPart03Test extends BasTest {
    /**
     * Verify at(2) length undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_0100
     * @tc.name int32ArrayAtPart03TestMindmapTest001
     * @tc.desc Verify at(2) length undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest001() {
    Int32Array arr = Int32Array.of(11, 22);
    assertNull(arr.at(2));
    }

    /**
     * Verify at(-3) -(length+1) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_0200
     * @tc.name int32ArrayAtPart03TestMindmapTest002
     * @tc.desc Verify at(-3) -(length+1) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest002() {
    Int32Array arr = Int32Array.of(11, 22);
    assertNull(arr.at(-3));
    }

    /**
     * Verify at(3) 1 undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_0300
     * @tc.name int32ArrayAtPart03TestMindmapTest003
     * @tc.desc Verify at(3) 1 undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest003() {
    Int32Array arr = Int32Array.of(-5, -6);
    assertNull(arr.at(3));
    }

    /**
     * Verify at(-4) 2 undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_0400
     * @tc.name int32ArrayAtPart03TestMindmapTest004
     * @tc.desc Verify at(-4) 2 undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest004() {
    Int32Array arr = Int32Array.of(-5, -6);
    assertNull(arr.at(-4));
    }

    /**
     * Verify positive and negative out-of-bounds indices on a six-element buffer view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_0500
     * @tc.name int32ArrayAtPart03TestMindmapTest005
     * @tc.desc Verify positive and negative out-of-bounds indices on a six-element buffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest005() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array arr = new Int32Array(buf);
    assertNull(arr.at(6));
    assertNull(arr.at(-7));
    }

    /**
     * Verify at(5) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_0600
     * @tc.name int32ArrayAtPart03TestMindmapTest006
     * @tc.desc Verify at(5) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest006() {
    Int32Array arr = new Int32Array(6);
    Integer r = arr.at(5);
    assertEqualInt(0, r);
    }

    /**
     * Verify at(-6) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_0700
     * @tc.name int32ArrayAtPart03TestMindmapTest007
     * @tc.desc Verify at(-6) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest007() {
    Int32Array arr = new Int32Array(6);
    Integer r = arr.at(-6);
    assertEqualInt(0, r);
    }

    /**
     * Verify representative out-of-bounds indices on an empty Int32Array.of result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_0800
     * @tc.name int32ArrayAtPart03TestMindmapTest008
     * @tc.desc Verify representative out-of-bounds indices on an empty Int32Array.of result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest008() {
    Int32Array arr = Int32Array.of();
    assertNull(arr.at(0));
    assertNull(arr.at(-1));
    assertNull(arr.at(2147483647));
    assertNull(arr.at(Integer.MIN_VALUE));
    }

    /**
     * Verify from Int32Array at(4) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_1100
     * @tc.name int32ArrayAtPart03TestMindmapTest011
     * @tc.desc Verify from Int32Array at(4) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest011() {
    Int32Array src = Int32Array.of(1, 2, 3, 4);
    Int32Array dst = Int32Array.from(src);
    assertNull(dst.at(4));
    }

    /**
     * Verify positive and negative out-of-bounds indices on a two-element subarray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_1300
     * @tc.name int32ArrayAtPart03TestMindmapTest013
     * @tc.desc Verify positive and negative out-of-bounds indices on a two-element subarray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest013() {
    Int32Array parent = Int32Array.of(10, 20, 30, 40, 50);
    Int32Array child = parent.subarray(1, 3);
    assertNull(child.at(2));
    assertNull(child.at(-3));
    }

    /**
     * Verify subarray at(0) 20
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_1400
     * @tc.name int32ArrayAtPart03TestMindmapTest014
     * @tc.desc Verify subarray at(0) 20
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest014() {
    Int32Array parent = Int32Array.of(10, 20, 30, 40, 50);
    Int32Array child = parent.subarray(1, 3);
    Integer r = child.at(0);
    assertEqualInt(20, r);
    }

    /**
     * Verify representative out-of-bounds indices on an empty subarray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_1500
     * @tc.name int32ArrayAtPart03TestMindmapTest015
     * @tc.desc Verify representative out-of-bounds indices on an empty subarray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest015() {
    Int32Array parent = Int32Array.of(1, 2, 3);
    Int32Array child = parent.subarray(0, 0);
    assertNull(child.at(0));
    assertNull(child.at(-1));
    }

    /**
     * Verify subarray at(1) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_1600
     * @tc.name int32ArrayAtPart03TestMindmapTest016
     * @tc.desc Verify subarray at(1) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest016() {
    Int32Array parent = Int32Array.of(10, 20, 30, 40);
    Int32Array child = parent.subarray(3);
    assertNull(child.at(1));
    }

    /**
     * Verify subarray at(0) 40
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_1700
     * @tc.name int32ArrayAtPart03TestMindmapTest017
     * @tc.desc Verify subarray at(0) 40
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest017() {
    Int32Array parent = Int32Array.of(10, 20, 30, 40);
    Int32Array child = parent.subarray(3);
    Integer r = child.at(0);
    assertEqualInt(40, r);
    }

    /**
     * Verify subarray subarray subarray at(2) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_1800
     * @tc.name int32ArrayAtPart03TestMindmapTest018
     * @tc.desc Verify subarray subarray subarray at(2) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest018() {
    Int32Array base = Int32Array.of(1, 2, 3, 4, 5, 6);
    Int32Array mid = base.subarray(1, 5);
    Int32Array leaf = mid.subarray(1, 3);
    assertNull(leaf.at(2));
    }

    /**
     * Verify positive and negative out-of-bounds indices on a one-element buffer view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_1900
     * @tc.name int32ArrayAtPart03TestMindmapTest019
     * @tc.desc Verify positive and negative out-of-bounds indices on a one-element buffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest019() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 4, 1);
    assertNull(arr.at(1));
    assertNull(arr.at(-2));
    }

    /**
     * Verify byteOffset=8 2 at(0) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_2000
     * @tc.name int32ArrayAtPart03TestMindmapTest020
     * @tc.desc Verify byteOffset=8 2 at(0) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest020() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 8, 2);
    Integer r = arr.at(0);
    assertEqualInt(0, r);
    }

    /**
     * Verify byteOffset=8 2 at(2) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_2100
     * @tc.name int32ArrayAtPart03TestMindmapTest021
     * @tc.desc Verify byteOffset=8 2 at(2) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest021() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 8, 2);
    assertNull(arr.at(2));
    }

    /**
     * Verify byteOffset=12 1 at(-1) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_2200
     * @tc.name int32ArrayAtPart03TestMindmapTest022
     * @tc.desc Verify byteOffset=12 1 at(-1) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest022() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 12, 1);
    Integer r = arr.at(-1);
    assertEqualInt(0, r);
    }

    /**
     * Verify byteOffset 4 length 0 at(0) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_2300
     * @tc.name int32ArrayAtPart03TestMindmapTest023
     * @tc.desc Verify byteOffset 4 length 0 at(0) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest023() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 4, 0);
    assertNull(arr.at(0));
    }

    /**
     * Verify shared buffer view at(2) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_2400
     * @tc.name int32ArrayAtPart03TestMindmapTest024
     * @tc.desc Verify shared buffer view at(2) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest024() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array longVal = new Int32Array(buf, 0, 4);
    Int32Array sh = new Int32Array(buf, 0, 2);
    longVal.set(2, 333);
    assertNull(sh.at(2));
    }

    /**
     * Verify at(viewLen) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_2500
     * @tc.name int32ArrayAtPart03TestMindmapTest025
     * @tc.desc Verify at(viewLen) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest025() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array full = new Int32Array(buf);
    full.set(0, 1);
    full.set(1, 2);
    full.set(2, 3);
    full.set(3, 4);
    Int32Array partial = new Int32Array(buf, 0, 2);
    assertNull(partial.at(2));
    }

    /**
     * Verify shared buffer child at(0) 111, at(3) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_2700
     * @tc.name int32ArrayAtPart03TestMindmapTest027
     * @tc.desc Verify shared buffer child at(0) 111, at(3) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest027() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array p = new Int32Array(buf, 0, 6);
    Int32Array c = new Int32Array(buf, 8, 3);
    p.set(2, 111);
    p.set(3, 222);
    p.set(4, 333);
    assertEqualInt(111, c.at(0));
    assertNull(c.at(3));
    }

    /**
     * Verify fill at(5) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_2800
     * @tc.name int32ArrayAtPart03TestMindmapTest028
     * @tc.desc Verify fill at(5) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest028() {
    Int32Array arr = new Int32Array(5);
    arr.fill(9, 1, 4);
    assertNull(arr.at(5));
    }

    /**
     * Verify fill at(0) 0, at(5) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_2900
     * @tc.name int32ArrayAtPart03TestMindmapTest029
     * @tc.desc Verify fill at(0) 0, at(5) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest029() {
    Int32Array arr = new Int32Array(5);
    arr.fill(9, 1, 4);
    assertEqualInt(0, arr.at(0));
    assertNull(arr.at(5));
    }

    /**
     * Verify set at(5) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_3000
     * @tc.name int32ArrayAtPart03TestMindmapTest030
     * @tc.desc Verify set at(5) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest030() {
    Int32Array arr = new Int32Array(5);
    Int32Array src = Int32Array.of(1, 2);
    arr.set(src, 0);
    assertNull(arr.at(5));
    }

    /**
     * Verify set at(length) out-of-bounds undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_3100
     * @tc.name int32ArrayAtPart03TestMindmapTest031
     * @tc.desc Verify set at(length) out-of-bounds undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest031() {
    Int32Array arr = new Int32Array(6);
    Int32Array src = Int32Array.of(10, 20, 30);
    arr.set(src, 2);
    assertNull(arr.at(6));
    }

    /**
     * Verify copyWithin at(4) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_3200
     * @tc.name int32ArrayAtPart03TestMindmapTest032
     * @tc.desc Verify copyWithin at(4) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest032() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    arr.copyWithin(2, 0, 2);
    assertNull(arr.at(4));
    }

    /**
     * Verify sort at(4) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_3300
     * @tc.name int32ArrayAtPart03TestMindmapTest033
     * @tc.desc Verify sort at(4) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest033() {
    Int32Array arr = Int32Array.of(3, 1, 4, 2);
    arr.sort();
    assertNull(arr.at(4));
    }

    /**
     * Verify sort at(0) returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_3400
     * @tc.name int32ArrayAtPart03TestMindmapTest034
     * @tc.desc Verify sort at(0) returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest034() {
    Int32Array arr = Int32Array.of(3, 1, 4, 2);
    arr.sort();
    Integer r = arr.at(0);
    assertEqualInt(1, r);
    }

    /**
     * Verify reverse at(0) 40, at(4) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_3500
     * @tc.name int32ArrayAtPart03TestMindmapTest035
     * @tc.desc Verify reverse at(0) 40, at(4) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest035() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40);
    arr.reverse();
    assertEqualInt(40, arr.at(0));
    assertNull(arr.at(4));
    }

    /**
     * Verify $_set at(length) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_3600
     * @tc.name int32ArrayAtPart03TestMindmapTest036
     * @tc.desc Verify $_set at(length) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest036() {
    Int32Array arr = new Int32Array(3);
    try {
    arr.set(3, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set at(-1) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_3700
     * @tc.name int32ArrayAtPart03TestMindmapTest037
     * @tc.desc Verify $_set at(-1) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest037() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    try {
    arr.set(-1, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify all -1 at(3) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_4200
     * @tc.name int32ArrayAtPart03TestMindmapTest042
     * @tc.desc Verify all -1 at(3) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest042() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf);
    arr.set(0, -1);
    arr.set(1, -1);
    arr.set(2, -1);
    assertNull(arr.at(3));
    }

    /**
     * Verify 0/-0/1/-1 at(4) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_4300
     * @tc.name int32ArrayAtPart03TestMindmapTest043
     * @tc.desc Verify 0/-0/1/-1 at(4) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest043() {
    Int32Array arr = Int32Array.of(0, -0, 1, -1);
    assertNull(arr.at(4));
    }

    /**
     * Verify INT_MAX and INT_MIN indices return undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_4500
     * @tc.name int32ArrayAtPart03TestMindmapTest045
     * @tc.desc Verify INT_MAX and INT_MIN indices return undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest045() {
    Int32Array arr = Int32Array.of(42);
    assertNull(arr.at(2147483647));
    assertNull(arr.at(Integer.MIN_VALUE));
    }

    /**
     * Verify INT_MAX and INT_MIN indices return undefined on a large array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_4600
     * @tc.name int32ArrayAtPart03TestMindmapTest046
     * @tc.desc Verify INT_MAX and INT_MIN indices return undefined on a large array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest046() {
    Int32Array arr = new Int32Array(100);
    assertNull(arr.at(2147483647));
    assertNull(arr.at(Integer.MIN_VALUE));
    }

    /**
     * Verify at(INT_MAX) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_4700
     * @tc.name int32ArrayAtPart03TestMindmapTest047
     * @tc.desc Verify at(INT_MAX) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest047() {
    Int32Array arr = new Int32Array(0);
    assertNull(arr.at(2147483647));
    }

    /**
     * Verify at(INT_MIN) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_4800
     * @tc.name int32ArrayAtPart03TestMindmapTest048
     * @tc.desc Verify at(INT_MIN) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest048() {
    Int32Array arr = new Int32Array(0);
    assertNull(arr.at(Integer.MIN_VALUE));
    }

    /**
     * Verify positive and negative length-boundary indices return undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_4900
     * @tc.name int32ArrayAtPart03TestMindmapTest049
     * @tc.desc Verify positive and negative length-boundary indices return undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest049() {
    Int32Array arr = new Int32Array(4);
    assertNull(arr.at(4));
    assertNull(arr.at(-5));
    }

    /**
     * Verify at(OOB) does not change length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_5000
     * @tc.name int32ArrayAtPart03TestMindmapTest050
     * @tc.desc Verify at(OOB) does not change length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest050() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    arr.at(999);
    arr.at(-999);
    arr.at(2147483647);
    arr.at(Integer.MIN_VALUE);
    assertEqual(3, arr.length());
    }

    /**
     * Verify at byteOffset and length unchanged after OOB access
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_5100
     * @tc.name int32ArrayAtPart03TestMindmapTest051
     * @tc.desc Verify at byteOffset and length unchanged after OOB access
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest051() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array arr = new Int32Array(buf, 4, 3);
    arr.at(100);
    arr.at(-100);
    assertEqual(4, arr.byteOffset());
    assertEqual(3, arr.length());
    }

    /**
     * Verify at(999)/at(-999) does not corrupt $_get values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_5200
     * @tc.name int32ArrayAtPart03TestMindmapTest052
     * @tc.desc Verify at(999)/at(-999) does not corrupt $_get values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest052() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    arr.at(999);
    arr.at(-999);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify at(5) returns undefined on length 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_5300
     * @tc.name int32ArrayAtPart03TestMindmapTest053
     * @tc.desc Verify at(5) returns undefined on length 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest053() {
    Int32Array arr = Int32Array.of(1, 2);
    arr.at(5);
    assertNull(arr.at(5));
    }

    /**
     * Verify at(2) vs at(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_5400
     * @tc.name int32ArrayAtPart03TestMindmapTest054
     * @tc.desc Verify at(2) vs at(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest054() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    Integer last = arr.at(2);
    assertEqualInt(30, last);
    assertNull(arr.at(3));
    }

    /**
     * Verify at(-3) vs at(-4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_5500
     * @tc.name int32ArrayAtPart03TestMindmapTest055
     * @tc.desc Verify at(-3) vs at(-4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest055() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    Integer first = arr.at(-3);
    assertEqualInt(10, first);
    assertNull(arr.at(-4));
    }

    /**
     * Verify at(0) vs at(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_5600
     * @tc.name int32ArrayAtPart03TestMindmapTest056
     * @tc.desc Verify at(0) vs at(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest056() {
    Int32Array arr = Int32Array.of(9);
    Integer r0 = arr.at(0);
    assertEqualInt(9, r0);
    assertNull(arr.at(1));
    }

    /**
     * Verify at(-1) vs at(-2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_5700
     * @tc.name int32ArrayAtPart03TestMindmapTest057
     * @tc.desc Verify at(-1) vs at(-2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest057() {
    Int32Array arr = Int32Array.of(9);
    Integer r1 = arr.at(-1);
    assertEqualInt(9, r1);
    assertNull(arr.at(-2));
    }

    /**
     * Verify at(0) and $_get(0) both return 55
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_5800
     * @tc.name int32ArrayAtPart03TestMindmapTest058
     * @tc.desc Verify at(0) and $_get(0) both return 55
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest058() {
    Int32Array arr = Int32Array.of(55);
    Integer boxed = arr.at(0);
    Integer raw = arr.get(0);
    assertEqualInt(55, raw);
    assertEqualInt(55, boxed);
    }

    /**
     * Verify at(0) matches $_get(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_5900
     * @tc.name int32ArrayAtPart03TestMindmapTest059
     * @tc.desc Verify at(0) matches $_get(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest059() {
    Int32Array arr = Int32Array.of(-100);
    Integer raw = arr.get(0);
    Integer boxed = arr.at(0);
    assertEqual(raw.intValue(), boxed.intValue());
    }

    /**
     * Verify at(0) returns 0, at(length) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_6200
     * @tc.name int32ArrayAtPart03TestMindmapTest062
     * @tc.desc Verify at(0) returns 0, at(length) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest062() {
    Int32Array arr = new Int32Array(1);
    Integer r = arr.at(0);
    assertEqualInt(0, r);
    assertNull(arr.at(1));
    }

    /**
     * Verify for-of at(length) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_6400
     * @tc.name int32ArrayAtPart03TestMindmapTest064
     * @tc.desc Verify for-of at(length) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest064() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    int sum = 0;
    for (Integer v : arr.values()) {
    sum += v;
    }
    assertEqual(6, sum);
    assertNull(arr.at(3));
    }

    /**
     * Verify forEach count 4, at(4) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_6500
     * @tc.name int32ArrayAtPart03TestMindmapTest065
     * @tc.desc Verify forEach count 4, at(4) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest065() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40);
    int[] n = {0};
    arr.forEach((unusedVal, unusedIndex, array) -> {
        n[0]++;
    });
    assertEqual(4, n[0]);
    assertNull(arr.at(4));
    }

    /**
     * Verify for-of break at(length) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_6600
     * @tc.name int32ArrayAtPart03TestMindmapTest066
     * @tc.desc Verify for-of break at(length) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest066() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    for (Integer v : arr.values()) {
    if (v == 3) {
        break;
        }
    }
    assertNull(arr.at(5));
    }

    /**
     * Verify at(0) 10, at(2) 30 after multiple OOB calls
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_6700
     * @tc.name int32ArrayAtPart03TestMindmapTest067
     * @tc.desc Verify at(0) 10, at(2) 30 after multiple OOB calls
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest067() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    arr.at(99);
    Integer a = arr.at(0);
    arr.at(-99);
    Integer b = arr.at(2);
    arr.at(2147483647);
    assertEqualInt(10, a);
    assertEqualInt(30, b);
    }

    /**
     * Verify positive and negative out-of-bounds indices on a 100-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_7000
     * @tc.name int32ArrayAtPart03TestMindmapTest070
     * @tc.desc Verify positive and negative out-of-bounds indices on a 100-element array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest070() {
    Int32Array arr = new Int32Array(100);
    assertNull(arr.at(-101));
    assertNull(arr.at(100));
    }

    /**
     * Verify 100 at(50) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_7100
     * @tc.name int32ArrayAtPart03TestMindmapTest071
     * @tc.desc Verify 100 at(50) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest071() {
    Int32Array arr = new Int32Array(100);
    assertEqualInt(0, arr.at(50));
    }

    /**
     * Verify 100 at(-50) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_7200
     * @tc.name int32ArrayAtPart03TestMindmapTest072
     * @tc.desc Verify 100 at(-50) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest072() {
    Int32Array arr = new Int32Array(100);
    assertEqualInt(0, arr.at(-50));
    }

    /**
     * Verify slice() at(length) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_7300
     * @tc.name int32ArrayAtPart03TestMindmapTest073
     * @tc.desc Verify slice() at(length) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest073() {
    Int32Array orig = Int32Array.of(1, 2, 3);
    Int32Array cp = orig.slice();
    assertNull(cp.at(3));
    }

    /**
     * Verify slice(1, 2) at(1) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_7400
     * @tc.name int32ArrayAtPart03TestMindmapTest074
     * @tc.desc Verify slice(1, 2) at(1) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest074() {
    Int32Array orig = Int32Array.of(1, 2, 3);
    Int32Array cp = orig.slice(1, 2);
    assertEqual(1, cp.length());
    assertNull(cp.at(1));
    }

    /**
     * Verify slice(0, 0) at(0) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_7500
     * @tc.name int32ArrayAtPart03TestMindmapTest075
     * @tc.desc Verify slice(0, 0) at(0) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest075() {
    Int32Array orig = Int32Array.of(1, 2, 3);
    Int32Array cp = orig.slice(0, 0);
    assertNull(cp.at(0));
    }

    /**
     * Verify includes at(length) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_7600
     * @tc.name int32ArrayAtPart03TestMindmapTest076
     * @tc.desc Verify includes at(length) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest076() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    boolean found = arr.includes(2);
    assertTrue(found);
    assertNull(arr.at(3));
    }

    /**
     * Verify indexOf -1 at(length) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART03_TEST_MINDMAP_7700
     * @tc.name int32ArrayAtPart03TestMindmapTest077
     * @tc.desc Verify indexOf -1 at(length) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart03TestMindmapTest077() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    int idx = arr.indexOf(99);
    assertEqual(-1, idx);
    assertNull(arr.at(3));
    }
}
