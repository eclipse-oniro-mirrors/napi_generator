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

package basetype.int32array;

import basetype.common.Int32Array;
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.RangeError;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFillPart04Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFillPart04Test extends BasTest {
    /**
     * Verify single-arg fill fills entire non-zero byteOffset view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_0100
     * @tc.name int32ArrayFillPart04TestMindmapTest001
     * @tc.desc Verify single-arg fill fills entire non-zero byteOffset view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest001() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array view = new Int32Array(buf, 8, 3);
    view.fill(42);
    assertEqual(3, view.length());
    assertEqualInt(42, view.get(0));
    assertEqualInt(42, view.get(1));
    assertEqualInt(42, view.get(2));
    }

    /**
     * Verify single-arg fill overwrites all elements on of-constructed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_0200
     * @tc.name int32ArrayFillPart04TestMindmapTest002
     * @tc.desc Verify single-arg fill overwrites all elements on of-constructed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest002() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40, 50);
    arr.fill(7);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(4));
    }

    /**
     * Verify two-arg fill(start) fills from start to end on from-constructed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_0300
     * @tc.name int32ArrayFillPart04TestMindmapTest003
     * @tc.desc Verify two-arg fill(start) fills from start to end on from-constructed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest003() {
    Int32Array source = Int32Array.of(1, 2, 3, 4, 5, 6);
    Int32Array arr = Int32Array.from(source);
    arr.fill(99, 3, arr.length());
    assertEqualInt(3, arr.get(2));
    assertEqualInt(99, arr.get(3));
    assertEqualInt(99, arr.get(5));
    }

    /**
     * Verify three-arg fill fills [start, end) on non-zero byteOffset view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_0400
     * @tc.name int32ArrayFillPart04TestMindmapTest004
     * @tc.desc Verify three-arg fill fills [start, end) on non-zero byteOffset view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest004() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Int32Array view = new Int32Array(buf, 4, 6);
    view.fill(111, 2, 5);
    assertEqualInt(0, view.get(0));
    assertEqualInt(0, view.get(1));
    assertEqualInt(111, view.get(2));
    assertEqualInt(111, view.get(3));
    assertEqualInt(111, view.get(4));
    assertEqualInt(0, view.get(5));
    }

    /**
     * Verify fill 0 after INT_MAX clears all elements to zero
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_1400
     * @tc.name int32ArrayFillPart04TestMindmapTest014
     * @tc.desc Verify fill 0 after INT_MAX clears all elements to zero
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest014() {
    Int32Array arr = new Int32Array(3);
    arr.fill(2147483647);
    arr.fill(0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill 0 into [length-1, length) sets only last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_1500
     * @tc.name int32ArrayFillPart04TestMindmapTest015
     * @tc.desc Verify fill 0 into [length-1, length) sets only last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest015() {
    Int32Array arr = new Int32Array(new int[] {7, 7, 7, 7});
    arr.fill(0, arr.length() - 1, arr.length());
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify fill 0 from start=-1 normalizes to last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_1600
     * @tc.name int32ArrayFillPart04TestMindmapTest016
     * @tc.desc Verify fill 0 from start=-1 normalizes to last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest016() {
    Int32Array arr = new Int32Array(new int[] {3, 3, 3, 3});
    arr.fill(0, (-1));
    assertEqualInt(3, arr.get(0));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify fill from start=-1 on non-zero byteOffset view sets last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_1700
     * @tc.name int32ArrayFillPart04TestMindmapTest017
     * @tc.desc Verify fill from start=-1 on non-zero byteOffset view sets last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest017() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Int32Array view = new Int32Array(buf, 12, 4);
    view.set(0, 1);
    view.set(1, 2);
    view.set(2, 3);
    view.set(3, 4);
    view.fill(9, (-1));
    assertEqualInt(1, view.get(0));
    assertEqualInt(2, view.get(1));
    assertEqualInt(3, view.get(2));
    assertEqualInt(9, view.get(3));
    }

    /**
     * Verify fill with end=-length normalizes to empty range and is no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_1800
     * @tc.name int32ArrayFillPart04TestMindmapTest018
     * @tc.desc Verify fill with end=-length normalizes to empty range and is no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest018() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array view = new Int32Array(buf, 4, 4);
    view.fill(5);
    view.fill(9, 0, (-4));
    assertEqualInt(5, view.get(0));
    assertEqualInt(5, view.get(1));
    assertEqualInt(5, view.get(2));
    assertEqualInt(5, view.get(3));
    }

    /**
     * Verify fill with start=-length normalizes to 0 with positive end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_1900
     * @tc.name int32ArrayFillPart04TestMindmapTest019
     * @tc.desc Verify fill with start=-length normalizes to 0 with positive end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest019() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(8, (-5), 3);
    assertEqualInt(8, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(8, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify fill with start=-length-1 double-underflow clamps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_2000
     * @tc.name int32ArrayFillPart04TestMindmapTest020
     * @tc.desc Verify fill with start=-length-1 double-underflow clamps to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest020() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(7, (-4), 2);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify fill with start equal to end is empty range no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_2100
     * @tc.name int32ArrayFillPart04TestMindmapTest021
     * @tc.desc Verify fill with start equal to end is empty range no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest021() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(99, 2, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify fill with reversed start>end range is no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_2200
     * @tc.name int32ArrayFillPart04TestMindmapTest022
     * @tc.desc Verify fill with reversed start>end range is no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest022() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(88, 3, 1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify fill with negative start and end=0 normalizes to empty range no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_2300
     * @tc.name int32ArrayFillPart04TestMindmapTest023
     * @tc.desc Verify fill with negative start and end=0 normalizes to empty range no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest023() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(77, (-1), 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify fill with start equal to length is empty range no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_2400
     * @tc.name int32ArrayFillPart04TestMindmapTest024
     * @tc.desc Verify fill with start equal to length is empty range no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest024() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(66, 3, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify fill with negative start and end=0 produces empty range no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_2500
     * @tc.name int32ArrayFillPart04TestMindmapTest025
     * @tc.desc Verify fill with negative start and end=0 produces empty range no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest025() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(55, (-2), 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify chained fill with different ranges and values produces expected result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_2600
     * @tc.name int32ArrayFillPart04TestMindmapTest026
     * @tc.desc Verify chained fill with different ranges and values produces expected result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest026() {
    Int32Array arr = new Int32Array(5);
    arr.fill(1).fill(2, 0, 2).fill(3, 4, arr.length());
    assertEqualInt(2, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(1, arr.get(3));
    assertEqualInt(3, arr.get(4));
    }

    /**
     * Verify fill returns same reference (===) as original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_2700
     * @tc.name int32ArrayFillPart04TestMindmapTest027
     * @tc.desc Verify fill returns same reference (===) as original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest027() {
    Int32Array arr = new Int32Array(3);
    Int32Array ret = arr.fill(7);
    assertEqual(arr, ret);
    }

    /**
     * Verify byteLength remains unchanged after chained fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_2800
     * @tc.name int32ArrayFillPart04TestMindmapTest028
     * @tc.desc Verify byteLength remains unchanged after chained fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest028() {
    Int32Array arr = new Int32Array(4);
    int before = arr.byteLength();
    arr.fill(1).fill(2, 1, 3);
    assertEqual(before, arr.byteLength());
    }

    /**
     * Verify length remains unchanged after chained fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_2900
     * @tc.name int32ArrayFillPart04TestMindmapTest029
     * @tc.desc Verify length remains unchanged after chained fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest029() {
    Int32Array arr = new Int32Array(6);
    arr.fill(0).fill((-1), 2, 4);
    assertEqual(6, arr.length());
    }

    /**
     * Verify fill on non-zero byteOffset view returns same reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_3100
     * @tc.name int32ArrayFillPart04TestMindmapTest031
     * @tc.desc Verify fill on non-zero byteOffset view returns same reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest031() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array view = new Int32Array(buf, 4, 4);
    Int32Array ret = view.fill(5);
    assertEqual(view, ret);
    }

    /**
     * Verify fill does not change buffer reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_3200
     * @tc.name int32ArrayFillPart04TestMindmapTest032
     * @tc.desc Verify fill does not change buffer reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest032() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf);
    ArrayBuffer beforeBuf = view.buffer();
    view.fill(42);
    assertEqual(beforeBuf, view.buffer());
    }

    /**
     * Verify fill preserves byteOffset on non-zero offset view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_3300
     * @tc.name int32ArrayFillPart04TestMindmapTest033
     * @tc.desc Verify fill preserves byteOffset on non-zero offset view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest033() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Int32Array view = new Int32Array(buf, 12, 3);
    int before = view.byteOffset();
    view.fill(9);
    assertEqual(before, view.byteOffset());
    }

    /**
     * Verify fill does not change array length after tail fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_3400
     * @tc.name int32ArrayFillPart04TestMindmapTest034
     * @tc.desc Verify fill does not change array length after tail fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest034() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(0, 2, arr.length());
    assertEqual(3, arr.length());
    }

    /**
     * Verify fill does not change BYTES_PER_ELEMENT constant
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_3500
     * @tc.name int32ArrayFillPart04TestMindmapTest035
     * @tc.desc Verify fill does not change BYTES_PER_ELEMENT constant
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest035() {
    Int32Array arr = new Int32Array(4);
    arr.fill(7);
    assertEqual(4, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify fill on one view is observed on another co-located view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_3600
     * @tc.name int32ArrayFillPart04TestMindmapTest036
     * @tc.desc Verify fill on one view is observed on another co-located view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest036() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 4);
    Int32Array b = new Int32Array(buf, 0, 4);
    a.fill(123);
    assertEqualInt(123, b.get(0));
    assertEqualInt(123, b.get(3));
    }

    /**
     * Verify fill on offset view is observed at correct offsets in start view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_3700
     * @tc.name int32ArrayFillPart04TestMindmapTest037
     * @tc.desc Verify fill on offset view is observed at correct offsets in start view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest037() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array a = new Int32Array(buf, 8, 2);
    Int32Array b = new Int32Array(buf, 0, 6);
    a.fill(77);
    assertEqualInt(0, b.get(0));
    assertEqualInt(0, b.get(1));
    assertEqualInt(77, b.get(2));
    assertEqualInt(77, b.get(3));
    assertEqualInt(0, b.get(4));
    assertEqualInt(0, b.get(5));
    }

    /**
     * Verify partial fill leaves adjacent elements untouched
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_3900
     * @tc.name int32ArrayFillPart04TestMindmapTest039
     * @tc.desc Verify partial fill leaves adjacent elements untouched
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest039() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 4);
    a.fill(1);
    a.fill(9, 1, 3);
    assertEqualInt(1, a.get(0));
    assertEqualInt(9, a.get(1));
    assertEqualInt(9, a.get(2));
    assertEqualInt(1, a.get(3));
    }

    /**
     * Verify partial fill on non-zero offset view is precisely observed in start view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_4000
     * @tc.name int32ArrayFillPart04TestMindmapTest040
     * @tc.desc Verify partial fill on non-zero offset view is precisely observed in start view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest040() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Int32Array a = new Int32Array(buf, 8, 4);
    Int32Array b = new Int32Array(buf, 0, 8);
    a.fill(5, 1, 3);
    assertEqualInt(0, b.get(0));
    assertEqualInt(0, b.get(1));
    assertEqualInt(0, b.get(2));
    assertEqualInt(5, b.get(3));
    assertEqualInt(5, b.get(4));
    assertEqualInt(0, b.get(5));
    assertEqualInt(0, b.get(6));
    assertEqualInt(0, b.get(7));
    }

    /**
     * Verify fill through subarray writes through to parent array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_4100
     * @tc.name int32ArrayFillPart04TestMindmapTest041
     * @tc.desc Verify fill through subarray writes through to parent array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest041() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array sub = arr.subarray(1, 4);
    sub.fill(0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(0, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify negative start on subarray normalizes relative to subarray length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_4200
     * @tc.name int32ArrayFillPart04TestMindmapTest042
     * @tc.desc Verify negative start on subarray normalizes relative to subarray length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest042() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    Int32Array sub = arr.subarray(1, 5);
    sub.fill(99, (-2));
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(99, arr.get(3));
    assertEqualInt(99, arr.get(4));
    assertEqualInt(6, arr.get(5));
    }

    /**
     * Verify fill on zero-length subarray is no-op and does not throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_4300
     * @tc.name int32ArrayFillPart04TestMindmapTest043
     * @tc.desc Verify fill on zero-length subarray is no-op and does not throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest043() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    Int32Array sub = arr.subarray(2, 2);
    sub.fill(5);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqual(0, sub.length());
    }

    /**
     * Verify fill on subarray preserves its byteOffset and length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_4400
     * @tc.name int32ArrayFillPart04TestMindmapTest044
     * @tc.desc Verify fill on subarray preserves its byteOffset and length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest044() {
    Int32Array arr = new Int32Array(8);
    Int32Array sub = arr.subarray(2, 6);
    int offBefore = sub.byteOffset();
    int lenBefore = sub.length();
    sub.fill(3);
    assertEqual(offBefore, sub.byteOffset());
    assertEqual(lenBefore, sub.length());
    }

    /**
     * Verify fill on of-constructed array is visible through fresh buffer view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_4700
     * @tc.name int32ArrayFillPart04TestMindmapTest047
     * @tc.desc Verify fill on of-constructed array is visible through fresh buffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest047() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    arr.fill(100, 1, 3);
    Int32Array view = new Int32Array(arr.buffer(), arr.byteOffset(), arr.length());
    assertEqualInt(1, view.get(0));
    assertEqualInt(100, view.get(1));
    assertEqualInt(100, view.get(2));
    assertEqualInt(4, view.get(3));
    }

    /**
     * Verify value 2^32 wraps to 0 via ToInt32
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_5000
     * @tc.name int32ArrayFillPart04TestMindmapTest050
     * @tc.desc Verify value 2^32 wraps to 0 via ToInt32
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest050() {
    Int32Array arr = new Int32Array(2);
    arr.fill(1);
    arr.fill((int) (4294967296L));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify value 2^32+1 wraps to 1 via ToInt32
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_5100
     * @tc.name int32ArrayFillPart04TestMindmapTest051
     * @tc.desc Verify value 2^32+1 wraps to 1 via ToInt32
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest051() {
    Int32Array arr = new Int32Array(2);
    arr.fill((int) (4294967297L));
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(1));
    }

    /**
     * Verify float value 0 truncates toward zero to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_5200
     * @tc.name int32ArrayFillPart04TestMindmapTest052
     * @tc.desc Verify float value 0 truncates toward zero to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest052() {
    Int32Array arr = new Int32Array(3);
    arr.fill(5);
    arr.fill(0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify Number.NaN value converts to 0 on non-zero offset view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_5300
     * @tc.name int32ArrayFillPart04TestMindmapTest053
     * @tc.desc Verify Number.NaN value converts to 0 on non-zero offset view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest053() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array view = new Int32Array(buf, 4, 1);
    view.fill(7);
    view.fill((Double.NaN));
    assertEqualInt(0, view.get(0));
    }

    /**
     * Verify Number.POSITIVE_INFINITY value converts to 0 in chained fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_5400
     * @tc.name int32ArrayFillPart04TestMindmapTest054
     * @tc.desc Verify Number.POSITIVE_INFINITY value converts to 0 in chained fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest054() {
    Int32Array arr = new Int32Array(3);
    arr.fill(9).fill((Double.POSITIVE_INFINITY));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify consecutive identical fills are idempotent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_5700
     * @tc.name int32ArrayFillPart04TestMindmapTest057
     * @tc.desc Verify consecutive identical fills are idempotent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest057() {
    Int32Array arr = new Int32Array(4);
    arr.fill(42);
    arr.fill(42);
    assertEqualInt(42, arr.get(0));
    assertEqualInt(42, arr.get(1));
    assertEqualInt(42, arr.get(2));
    assertEqualInt(42, arr.get(3));
    }

    /**
     * Verify fill(v) equals fill(v, 0, length) element-wise
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_5800
     * @tc.name int32ArrayFillPart04TestMindmapTest058
     * @tc.desc Verify fill(v) equals fill(v, 0, length) element-wise
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest058() {
    Int32Array a = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array b = new Int32Array(new int[] {1, 2, 3, 4});
    a.fill(7);
    b.fill(7, 0, 4);
    assertEqual(b.get(0).intValue(), a.get(0).intValue());
    assertEqual(b.get(1).intValue(), a.get(1).intValue());
    assertEqual(b.get(2).intValue(), a.get(2).intValue());
    assertEqual(b.get(3).intValue(), a.get(3).intValue());
    }

    /**
     * Verify segmented fills followed by full fill yields uniform value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_5900
     * @tc.name int32ArrayFillPart04TestMindmapTest059
     * @tc.desc Verify segmented fills followed by full fill yields uniform value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest059() {
    Int32Array arr = new Int32Array(5);
    arr.fill(1, 0, 2);
    arr.fill(2, 2, 5);
    arr.fill(9);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(9, arr.get(2));
    assertEqualInt(9, arr.get(4));
    }

    /**
     * Verify fill on properly sized buffer view does not throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_6000
     * @tc.name int32ArrayFillPart04TestMindmapTest060
     * @tc.desc Verify fill on properly sized buffer view does not throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest060() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array view = new Int32Array(buf, 0, 2);
    view.fill(3);
    assertEqualInt(3, view.get(0));
    assertEqualInt(3, view.get(1));
    }

    /**
     * Verify fill(0) on length-2 array sets both elements to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_6100
     * @tc.name int32ArrayFillPart04TestMindmapTest061
     * @tc.desc Verify fill(0) on length-2 array sets both elements to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest061() {
    Int32Array arr = new Int32Array(2);
    arr.fill(0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify constructing Int32Array from empty buffer with byteOffset=4 length=1 throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_6200
     * @tc.name int32ArrayFillPart04TestMindmapTest062
     * @tc.desc Verify constructing Int32Array from empty buffer with byteOffset=4 length=1 throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest062() {
    ArrayBuffer buf = new ArrayBuffer(16);
    new Int32Array(buf);
    try {
    ArrayBuffer emptyBuf = new ArrayBuffer(0);
    Int32Array bad = new Int32Array(emptyBuf, 4, 1);
    bad.fill(1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify fill then $_set and reverse produces expected reversed order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_6300
     * @tc.name int32ArrayFillPart04TestMindmapTest063
     * @tc.desc Verify fill then $_set and reverse produces expected reversed order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest063() {
    Int32Array arr = new Int32Array(3);
    arr.fill(0);
    arr.set(0, 1);
    arr.set(2, 3);
    arr.reverse();
    assertEqualInt(3, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(1, arr.get(2));
    }

    /**
     * Verify for-of iteration after fill sees filled value for every element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_6400
     * @tc.name int32ArrayFillPart04TestMindmapTest064
     * @tc.desc Verify for-of iteration after fill sees filled value for every element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest064() {
    Int32Array arr = new Int32Array(4);
    arr.fill(11);
    int count = 0;
    for (Integer x : arr.values()) {
    assertEqualInt(11, x);
    count++;
    }
    assertEqual(4, count);
    }

    /**
     * Verify forEach after partial fill observes correct values at each index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_6500
     * @tc.name int32ArrayFillPart04TestMindmapTest065
     * @tc.desc Verify forEach after partial fill observes correct values at each index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest065() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(0, 2, 4);
    List<Integer> seen = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    seen.add(v);
    });
    assertEqual(5, seen.size());
    assertEqualInt(1, seen.get(0));
    assertEqualInt(0, seen.get(2));
    assertEqualInt(0, seen.get(3));
    assertEqualInt(5, seen.get(4));
    }

    /**
     * Verify every returns true when all elements equal fill value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_6600
     * @tc.name int32ArrayFillPart04TestMindmapTest066
     * @tc.desc Verify every returns true when all elements equal fill value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest066() {
    Int32Array arr = new Int32Array(5);
    arr.fill(7);
    boolean allSeven = arr.every((v, unusedIndex, array) -> {
        return v == 7;
        });
    assertTrue(allSeven);
    }

    /**
     * Verify some finds value within partially filled range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART04_TEST_MINDMAP_6700
     * @tc.name int32ArrayFillPart04TestMindmapTest067
     * @tc.desc Verify some finds value within partially filled range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart04TestMindmapTest067() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(99, 1, 4);
    boolean hasNinetyNine = arr.some((v, unusedIndex, array) -> {
        return v == 99;
        });
    assertTrue(hasNinetyNine);
    }
}
