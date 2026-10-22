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

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFilterPart02Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFilterPart02Test extends BasTest {

    /**
     * Verify empty-source filter returns Int32Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_0600
     * @tc.name int32ArrayFilterPart02TestMindmapTest006
     * @tc.desc Verify empty-source filter returns Int32Array instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest006() {
    Int32Array arr = new Int32Array(0);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> true);
    assertEqual(0, r.length());
    }

    /**
     * Verify filter on offset-buffer Int32Array returns Int32Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_0700
     * @tc.name int32ArrayFilterPart02TestMindmapTest007
     * @tc.desc Verify filter on offset-buffer Int32Array returns Int32Array instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest007() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 4, 2);
    arr.set(0, 7);
    arr.set(1, 8);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val > 0);
    assertEqual(2, r.length());
    assertEqualInt(7, r.get(0));
    assertEqualInt(8, r.get(1));
    arr.set(0, 999);
    assertEqualInt(7, r.get(0));
    }

    /**
     * Verify filter on Int32Array.of source returns Int32Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_0800
     * @tc.name int32ArrayFilterPart02TestMindmapTest008
     * @tc.desc Verify filter on Int32Array.of source returns Int32Array instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest008() {
    Int32Array arr = Int32Array.of(11, 22, 33);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val > 15);
    assertEqual(2, r.length());
    assertEqualInt(22, r.get(0));
    assertEqualInt(33, r.get(1));
    arr.set(1, 999);
    assertEqualInt(22, r.get(0));
    }

    /**
     * Verify all-match filter length equals source length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_0900
     * @tc.name int32ArrayFilterPart02TestMindmapTest009
     * @tc.desc Verify all-match filter length equals source length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest009() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> true);
    assertEqual(3, r.length());
    assertEqualInt(10, r.get(0));
    assertEqualInt(20, r.get(1));
    assertEqualInt(30, r.get(2));
    }

    /**
     * Verify all-no-match filter length and byteLength are 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_1000
     * @tc.name int32ArrayFilterPart02TestMindmapTest010
     * @tc.desc Verify all-no-match filter length and byteLength are 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest010() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> false);
    assertEqual(0, r.length());
    assertEqual(0, r.byteLength());
    }

    /**
     * Verify filter with predicate always false returns empty Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_1400
     * @tc.name int32ArrayFilterPart02TestMindmapTest014
     * @tc.desc Verify filter with predicate always false returns empty Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest014() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> false);
    assertEqual(0, r.length());
    }

    /**
     * Verify single-element match filter length is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_1500
     * @tc.name int32ArrayFilterPart02TestMindmapTest015
     * @tc.desc Verify single-element match filter length is 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest015() {
    Int32Array arr = Int32Array.of(42);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val == 42);
    assertEqual(1, r.length());
    assertEqualInt(42, r.get(0));
    }

    /**
     * Verify single-element no-match filter length is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_1600
     * @tc.name int32ArrayFilterPart02TestMindmapTest016
     * @tc.desc Verify single-element no-match filter length is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest016() {
    Int32Array arr = Int32Array.of(42);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val != 42);
    assertEqual(0, r.length());
    }

    /**
     * Verify all-match filter byteLength equals length*4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_1700
     * @tc.name int32ArrayFilterPart02TestMindmapTest017
     * @tc.desc Verify all-match filter byteLength equals length*4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest017() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> true);
    assertEqual(16, r.byteLength());
    }

    /**
     * Verify filter result byteOffset is always 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_1900
     * @tc.name int32ArrayFilterPart02TestMindmapTest019
     * @tc.desc Verify filter result byteOffset is always 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest019() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val > 1);
    assertEqual(0, r.byteOffset());
    }

    /**
     * Verify filter on offset-view source returns byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_2000
     * @tc.name int32ArrayFilterPart02TestMindmapTest020
     * @tc.desc Verify filter on offset-view source returns byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest020() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int32Array arr = new Int32Array(buf, 8, 3);
    arr.set(0, 11);
    arr.set(1, 22);
    arr.set(2, 33);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val > 0);
    assertEqual(0, r.byteOffset());
    }

    /**
     * Verify non-empty filter result BYTES_PER_ELEMENT is 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_2100
     * @tc.name int32ArrayFilterPart02TestMindmapTest021
     * @tc.desc Verify non-empty filter result BYTES_PER_ELEMENT is 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest021() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val > 0);
    assertEqual(4, r.BYTES_PER_ELEMENT);
    }

    /**
     * Verify empty filter result BYTES_PER_ELEMENT still 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_2200
     * @tc.name int32ArrayFilterPart02TestMindmapTest022
     * @tc.desc Verify empty filter result BYTES_PER_ELEMENT still 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest022() {
    Int32Array arr = Int32Array.of(1, 2);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> false);
    assertEqual(4, r.BYTES_PER_ELEMENT);
    }

    /**
     * Verify all-match filter elements identical to source in order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_2400
     * @tc.name int32ArrayFilterPart02TestMindmapTest024
     * @tc.desc Verify all-match filter elements identical to source in order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest024() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> true);
    assertEqualInt(10, r.get(0));
    assertEqualInt(20, r.get(1));
    assertEqualInt(30, r.get(2));
    }

    /**
     * Verify even-filter result preserves evens in order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_2500
     * @tc.name int32ArrayFilterPart02TestMindmapTest025
     * @tc.desc Verify even-filter result preserves evens in order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest025() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5, 6);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val % 2 == 0);
    assertEqualInt(2, r.get(0));
    assertEqualInt(4, r.get(1));
    assertEqualInt(6, r.get(2));
    }

    /**
     * Verify even-index filter yields elements in source order skipping odds
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_3300
     * @tc.name int32ArrayFilterPart02TestMindmapTest033
     * @tc.desc Verify even-index filter yields elements in source order skipping odds
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest033() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40, 50);
    Int32Array r = arr.filter((val, index, unusedArray) -> index % 2 == 0);
    assertEqualInt(10, r.get(0));
    assertEqualInt(30, r.get(1));
    assertEqualInt(50, r.get(2));
    }

    /**
     * Verify all-no-match $_get(0) on empty result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_3400
     * @tc.name int32ArrayFilterPart02TestMindmapTest034
     * @tc.desc Verify all-no-match $_get(0) on empty result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest034() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> false);
    Integer first = r.at(0);
    assertNull(first);
    }

    /**
     * Verify length-1 position is last hit element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_3500
     * @tc.name int32ArrayFilterPart02TestMindmapTest035
     * @tc.desc Verify length-1 position is last hit element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest035() {
    Int32Array arr = Int32Array.of(3, 6, 9, 12, 15);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val % 3 == 0);
    assertEqualInt(15, r.get(r.length() - 1));
    }

    /**
     * Verify source array length unchanged after filter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_3800
     * @tc.name int32ArrayFilterPart02TestMindmapTest038
     * @tc.desc Verify source array length unchanged after filter
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest038() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    int before = arr.length();
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val > 2);
    assertEqual(before, arr.length());
    assertEqual(3, r.length());
    }

    /**
     * Verify source element values unchanged after filter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_3900
     * @tc.name int32ArrayFilterPart02TestMindmapTest039
     * @tc.desc Verify source element values unchanged after filter
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest039() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val > 15);
    assertEqual(3, r.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify source byteLength unchanged after filter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_4200
     * @tc.name int32ArrayFilterPart02TestMindmapTest042
     * @tc.desc Verify source byteLength unchanged after filter
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest042() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    int before = arr.byteLength();
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> true);
    assertEqual(before, arr.byteLength());
    assertEqual(3, r.length());
    }

    /**
     * Verify source byteOffset unchanged after filter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_4300
     * @tc.name int32ArrayFilterPart02TestMindmapTest043
     * @tc.desc Verify source byteOffset unchanged after filter
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest043() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array arr = new Int32Array(buf, 8, 3);
    int before = arr.byteOffset();
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> true);
    assertEqual(before, arr.byteOffset());
    assertEqual(3, r.length());
    }

    /**
     * Verify empty array length remains 0 after filter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_4500
     * @tc.name int32ArrayFilterPart02TestMindmapTest045
     * @tc.desc Verify empty array length remains 0 after filter
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest045() {
    Int32Array arr = new Int32Array(0);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> true);
    assertEqual(0, arr.length());
    assertEqual(0, r.length());
    }

    /**
     * Verify filter result buffer is not the same instance as source buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_4700
     * @tc.name int32ArrayFilterPart02TestMindmapTest047
     * @tc.desc Verify filter result buffer is not the same instance as source buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest047() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val > 1);
    boolean sameBuffer = (r.buffer() == arr.buffer());
    assertFalse(sameBuffer);
    }

    /**
     * Verify mutating filter result does not affect source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_4800
     * @tc.name int32ArrayFilterPart02TestMindmapTest048
     * @tc.desc Verify mutating filter result does not affect source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest048() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> true);
    r.set(0, 999);
    assertEqualInt(10, arr.get(0));
    }

    /**
     * Verify mutating second element of result does not affect source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_4900
     * @tc.name int32ArrayFilterPart02TestMindmapTest049
     * @tc.desc Verify mutating second element of result does not affect source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest049() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> true);
    r.set(1, 777);
    assertEqualInt(2, arr.get(1));
    }

    /**
     * Verify mutating source after filter does not affect already-returned result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_5000
     * @tc.name int32ArrayFilterPart02TestMindmapTest050
     * @tc.desc Verify mutating source after filter does not affect already-returned result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest050() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> true);
    arr.set(0, 111);
    assertEqualInt(10, r.get(0));
    }

    /**
     * Verify filter result buffer is an ArrayBuffer instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_5100
     * @tc.name int32ArrayFilterPart02TestMindmapTest051
     * @tc.desc Verify filter result buffer is an ArrayBuffer instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest051() {
    Int32Array arr = Int32Array.of(1, 2);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> true);
    assertEqual(2, r.length());
    assertEqual(r.byteLength(), r.buffer().byteLength());
    }

    /**
     * Verify filter result buffer byteLength equals result byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_5200
     * @tc.name int32ArrayFilterPart02TestMindmapTest052
     * @tc.desc Verify filter result buffer byteLength equals result byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest052() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val > 2);
    assertEqual(r.byteLength(), r.buffer().byteLength());
    }

    /**
     * Verify empty filter result buffer byteLength is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_5300
     * @tc.name int32ArrayFilterPart02TestMindmapTest053
     * @tc.desc Verify empty filter result buffer byteLength is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest053() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> false);
    assertEqual(0, r.buffer().byteLength());
    }

    /**
     * Verify externally-backed ArrayBuffer source yields independent new buffer on filter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_5400
     * @tc.name int32ArrayFilterPart02TestMindmapTest054
     * @tc.desc Verify externally-backed ArrayBuffer source yields independent new buffer on filter
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest054() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val > 1);
    boolean sameBuffer = (r.buffer() == buf);
    assertFalse(sameBuffer);
    }

    /**
     * Verify other Int32Array view on source buffer is unaffected by writes to filter result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_5600
     * @tc.name int32ArrayFilterPart02TestMindmapTest056
     * @tc.desc Verify other Int32Array view on source buffer is unaffected by writes to filter result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest056() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> true);
    Int32Array other = new Int32Array(arr.buffer());
    r.set(0, -99);
    assertEqualInt(1, other.get(0));
    }

    /**
     * Verify all-no-match followed by all-true chain filter length still 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_5900
     * @tc.name int32ArrayFilterPart02TestMindmapTest059
     * @tc.desc Verify all-no-match followed by all-true chain filter length still 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest059() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array r =
        arr.filter((val, unusedIndex, unusedArray) -> false).filter((val, unusedIndex, unusedArray) -> true);
    assertEqual(0, r.length());
    }

    /**
     * Verify filter chained with map transforms values correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_6000
     * @tc.name int32ArrayFilterPart02TestMindmapTest060
     * @tc.desc Verify filter chained with map transforms values correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest060() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array mapped =
        arr.filter((val, unusedIndex, unusedArray) -> val % 2 == 0).map((val, unusedIndex, unusedArray) -> val * 10);
    assertEqualInt(20, mapped.get(0));
    assertEqualInt(40, mapped.get(1));
    }

    /**
     * Verify filter chained with reduce sums correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_6100
     * @tc.name int32ArrayFilterPart02TestMindmapTest061
     * @tc.desc Verify filter chained with reduce sums correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest061() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    int sum =
        arr.filter((val, unusedIndex, unusedArray) -> val > 2).reduce((acc, val, unusedIndex, array) -> acc + val, 0);
    assertEqual(12, sum);
    }

    /**
     * Verify reverse on filter result does not affect source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_6200
     * @tc.name int32ArrayFilterPart02TestMindmapTest062
     * @tc.desc Verify reverse on filter result does not affect source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest062() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val > 1);
    Int32Array rev = r.reverse();
    assertEqualInt(5, rev.get(0));
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify bracket [] access works on filter result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_6300
     * @tc.name int32ArrayFilterPart02TestMindmapTest063
     * @tc.desc Verify bracket [] access works on filter result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest063() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val >= 20);
    assertEqualInt(20, r.get(0));
    assertEqualInt(30, r.get(1));
    }

    /**
     * Verify join on filter result returns correct string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_6400
     * @tc.name int32ArrayFilterPart02TestMindmapTest064
     * @tc.desc Verify join on filter result returns correct string
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest064() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val > 1);
    String s = r.join(",");
    assertEqual("2,3", String.valueOf(s));
    }

    /**
     * Verify indexOf on filter result locates element correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_6500
     * @tc.name int32ArrayFilterPart02TestMindmapTest065
     * @tc.desc Verify indexOf on filter result locates element correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest065() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val >= 20);
    assertEqual(1, r.indexOf(30));
    }

    /**
     * Verify some on filter result returns boolean correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_6600
     * @tc.name int32ArrayFilterPart02TestMindmapTest066
     * @tc.desc Verify some on filter result returns boolean correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest066() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    boolean hasBig = arr.filter((val, unusedIndex, unusedArray) -> val > 0).some((val, unusedIndex, array) -> val > 4);
    assertTrue(hasBig);
    }

    /**
     * Verify three consecutive chained filters produce correct result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_6800
     * @tc.name int32ArrayFilterPart02TestMindmapTest068
     * @tc.desc Verify three consecutive chained filters produce correct result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest068() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    Int32Array t1 = arr.filter((val, unusedIndex, unusedArray) -> val > 2);
    Int32Array t2 = t1.filter((val, unusedIndex, unusedArray) -> val < 9);
    Int32Array r = t2.filter((val, unusedIndex, unusedArray) -> val % 2 == 0);
    assertEqual(3, r.length());
    assertEqualInt(4, r.get(0));
    assertEqualInt(6, r.get(1));
    assertEqualInt(8, r.get(2));
    }

    /**
     * Verify subarray chained on filter result returns correct view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_7000
     * @tc.name int32ArrayFilterPart02TestMindmapTest070
     * @tc.desc Verify subarray chained on filter result returns correct view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest070() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> val > 1);
    Int32Array sub = r.subarray(1, 3);
    assertEqual(2, sub.length());
    assertEqualInt(3, sub.get(0));
    assertEqualInt(4, sub.get(1));
    }

    /**
     * Verify fill on filter result does not affect source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_7200
     * @tc.name int32ArrayFilterPart02TestMindmapTest072
     * @tc.desc Verify fill on filter result does not affect source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest072() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> true);
    r.fill(0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(0, r.get(0));
    }

    /**
     * Verify set on filter result writes only into result not source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART02_TEST_MINDMAP_7300
     * @tc.name int32ArrayFilterPart02TestMindmapTest073
     * @tc.desc Verify set on filter result writes only into result not source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart02TestMindmapTest073() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array r = arr.filter((val, unusedIndex, unusedArray) -> true);
    Int32Array src = Int32Array.of(77, 88);
    r.set(src, 1);
    assertEqualInt(77, r.get(1));
    assertEqualInt(88, r.get(2));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }
}
