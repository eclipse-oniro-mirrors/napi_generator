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

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFindLastPart02Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFindLastPart02Test extends BasTest {
    /**
     * Verify findLast returns 30 when element matches from end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_0100
     * @tc.name int32ArrayFindLastPart02TestMindmapTest001
     * @tc.desc Verify findLast returns 30 when element matches from end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest001() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    int[] r = {arr.findLast((v, i, a) -> v > 15)};
    assertEqual(30, r[0]);
    }

    /**
     * Verify findLast returns 0 when matching element is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_0200
     * @tc.name int32ArrayFindLastPart02TestMindmapTest002
     * @tc.desc Verify findLast returns 0 when matching element is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest002() {
    Int32Array arr = Int32Array.of(1, 0, 2);
    int[] r = {arr.findLast((v, i, a) -> v == 0)};
    assertEqual(0, r[0]);
    }

    /**
     * Verify findLast returns 42 for single-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_0600
     * @tc.name int32ArrayFindLastPart02TestMindmapTest006
     * @tc.desc Verify findLast returns 42 for single-element array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest006() {
    Int32Array arr = Int32Array.of(42);
    int[] r = {arr.findLast((v, i, a) -> v == 42)};
    assertEqual(42, r[0]);
    }

    /**
     * Verify findLast returns 30 on subarray view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_0700
     * @tc.name int32ArrayFindLastPart02TestMindmapTest007
     * @tc.desc Verify findLast returns 30 on subarray view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest007() {
    Int32Array base = Int32Array.of(10, 20, 30, 40);
    Int32Array view = base.subarray(1, 3);
    int[] r = {view.findLast((v, i, a) -> v > 15)};
    assertEqual(30, r[0]);
    }

    /**
     * Verify boolean
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_0900
     * @tc.name int32ArrayFindLastPart02TestMindmapTest009
     * @tc.desc Verify boolean
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest009() {
    Int32Array arr = Int32Array.of(5, 6, 7);
    int[] r = {arr.findLast((v, i, a) -> v == 7)};
    assertEqual(7, r[0]);
    }

    /**
     * Verify Object null/
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_1000
     * @tc.name int32ArrayFindLastPart02TestMindmapTest010
     * @tc.desc Verify Object null/
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest010() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    int[] r = {arr.findLast((v, i, a) -> v == 3)};
    assertEqual(3, r[0]);
    }

    /**
     * Verify findLast returns 99 when matching the last element (99) in [1, 2, 3, 99]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_1100
     * @tc.name int32ArrayFindLastPart02TestMindmapTest011
     * @tc.desc Verify findLast returns 99 when matching the last element (99) in [1, 2, 3, 99]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest011() {
    Int32Array arr = Int32Array.of(1, 2, 3, 99);
    int[] r = {arr.findLast((v, i, a) -> v == 99)};
    assertEqual(99, r[0]);
    }

    /**
     * Verify findLast returns 77 when the only matching element is at index 0 in [77, 1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_1200
     * @tc.name int32ArrayFindLastPart02TestMindmapTest012
     * @tc.desc Verify findLast returns 77 when the only matching element is at index 0 in [77, 1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest012() {
    Int32Array arr = Int32Array.of(77, 1, 2, 3);
    int[] r = {arr.findLast((v, i, a) -> v == 77)};
    assertEqual(77, r[0]);
    }

    /**
     * Verify findLast returns the last matching element (20 at index 3) when
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_1300
     * @tc.name int32ArrayFindLastPart02TestMindmapTest013
     * @tc.desc Verify findLast returns the last matching element (20 at index 3) when
     * predicate v >= 20 in [10, 20, 30, 20, 10]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest013() {
    Int32Array arr = Int32Array.of(10, 20, 30, 20, 10);
    int[] r = {arr.findLast((v, i, a) -> v >= 20)};
    assertEqual(20, r[0]);
    }

    /**
     * Verify findLast returns 5 (last element) when all elements satisfy v >= 0 in [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_1400
     * @tc.name int32ArrayFindLastPart02TestMindmapTest014
     * @tc.desc Verify findLast returns 5 (last element) when all elements satisfy v >= 0 in [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest014() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    int[] r = {arr.findLast((v, i, a) -> v >= 0)};
    assertEqual(5, r[0]);
    }

    /**
     * Verify findLast returns 55 when the matching element is surrounded by zeros in [0, 0, 55, 0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_1500
     * @tc.name int32ArrayFindLastPart02TestMindmapTest015
     * @tc.desc Verify findLast returns 55 when the matching element is surrounded by zeros in [0, 0, 55, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest015() {
    Int32Array arr = Int32Array.of(0, 0, 55, 0, 0);
    int[] r = {arr.findLast((v, i, a) -> v == 55)};
    assertEqual(55, r[0]);
    }

    /**
     * Verify findLast returns 7 from the last occurrence (index 1 not 0) in [7, 7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_1600
     * @tc.name int32ArrayFindLastPart02TestMindmapTest016
     * @tc.desc Verify findLast returns 7 from the last occurrence (index 1 not 0) in [7, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest016() {
    Int32Array arr = Int32Array.of(7, 7);
    int[] lastIdx = {-1};
    int r = arr.findLast((v, i, a) -> {
        if (v == 7) {
            lastIdx[0] = i;
        return true;
        }
        return false;
        });
    assertEqual(7, r);
    assertEqual(1, lastIdx[0]);
    }

    /**
     * Verify 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_2000
     * @tc.name int32ArrayFindLastPart02TestMindmapTest020
     * @tc.desc Verify 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest020() {
    Int32Array arr = Int32Array.of(-1, 0, 1);
    int[] r = {arr.findLast((v, i, a) -> v == 0)};
    assertEqual(0, r[0]);
    }

    /**
     * Verify 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_2200
     * @tc.name int32ArrayFindLastPart02TestMindmapTest022
     * @tc.desc Verify 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest022() {
    Int32Array arr = Int32Array.of(0, 1, 2);
    int[] r = {arr.findLast((v, i, a) -> v == 1)};
    assertEqual(1, r[0]);
    }

    /**
     * Verify 3.7 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_2700
     * @tc.name int32ArrayFindLastPart02TestMindmapTest027
     * @tc.desc Verify 3.7 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest027() {
    Int32Array arr = new Int32Array(2);
    arr.set(0, (int) (3.7));
    arr.set(1, 100);
    int[] r = {arr.findLast((v, i, a) -> v == 3)};
    assertEqual(3, r[0]);
    }

    /**
     * Verify Number.NaN ToInt32 0 === 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_2900
     * @tc.name int32ArrayFindLastPart02TestMindmapTest029
     * @tc.desc Verify Number.NaN ToInt32 0 === 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest029() {
    Int32Array arr = new Int32Array(3);
    arr.set(0, (Double.NaN));
    arr.set(1, 5);
    arr.set(2, 6);
    int[] r = {arr.findLast((v, i, a) -> v == 0)};
    assertEqual(0, r[0]);
    }

    /**
     * Verify predicate v > N
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_3200
     * @tc.name int32ArrayFindLastPart02TestMindmapTest032
     * @tc.desc Verify predicate v > N
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest032() {
    Int32Array arr = Int32Array.of(1, 5, 10, 7, 3);
    int[] r = {arr.findLast((v, i, a) -> v > 6)};
    assertEqual(7, r[0]);
    }

    /**
     * Verify predicate v < N
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_3300
     * @tc.name int32ArrayFindLastPart02TestMindmapTest033
     * @tc.desc Verify predicate v < N
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest033() {
    Int32Array arr = Int32Array.of(10, 2, 8, 4, 9);
    int[] r = {arr.findLast((v, i, a) -> v < 5)};
    assertEqual(4, r[0]);
    }

    /**
     * Verify findLast returns 33 when matching a specific value in [11, 22, 33, 44]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_3400
     * @tc.name int32ArrayFindLastPart02TestMindmapTest034
     * @tc.desc Verify findLast returns 33 when matching a specific value in [11, 22, 33, 44]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest034() {
    Int32Array arr = Int32Array.of(11, 22, 33, 44);
    int[] r = {arr.findLast((v, i, a) -> v == 33)};
    assertEqual(33, r[0]);
    }

    /**
     * Verify findLast returns the last odd number (7) when predicate v % 2 !== 0 in [2, 4, 5, 6, 7, 8]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_3500
     * @tc.name int32ArrayFindLastPart02TestMindmapTest035
     * @tc.desc Verify findLast returns the last odd number (7) when predicate v % 2 !== 0 in [2, 4, 5, 6, 7, 8]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest035() {
    Int32Array arr = Int32Array.of(2, 4, 5, 6, 7, 8);
    int[] r = {arr.findLast((v, i, a) -> v % 2 != 0)};
    assertEqual(7, r[0]);
    }

    /**
     * Verify number truthy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_3600
     * @tc.name int32ArrayFindLastPart02TestMindmapTest036
     * @tc.desc Verify number truthy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest036() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    int[] r = {arr.findLast((v, i, a) -> v == 3)};
    assertEqual(3, r[0]);
    }

    /**
     * Verify findLast returns 9 at index 0 when searching from end in [9, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_3700
     * @tc.name int32ArrayFindLastPart02TestMindmapTest037
     * @tc.desc Verify findLast returns 9 at index 0 when searching from end in [9, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest037() {
    Int32Array arr = Int32Array.of(9, 0);
    int[] r = {arr.findLast((v, i, a) -> v == 9)};
    assertEqual(9, r[0]);
    }

    /**
     * Verify findLast returns 9 when matching the last element at index 1 in [0, 9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_3800
     * @tc.name int32ArrayFindLastPart02TestMindmapTest038
     * @tc.desc Verify findLast returns 9 when matching the last element at index 1 in [0, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest038() {
    Int32Array arr = Int32Array.of(0, 9);
    int[] r = {arr.findLast((v, i, a) -> v == 9)};
    assertEqual(9, r[0]);
    }

    /**
     * Verify findLast returns 5 from the last occurrence (index 4) in [5, 0, 5, 0, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_4100
     * @tc.name int32ArrayFindLastPart02TestMindmapTest041
     * @tc.desc Verify findLast returns 5 from the last occurrence (index 4) in [5, 0, 5, 0, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest041() {
    Int32Array arr = Int32Array.of(5, 0, 5, 0, 5);
    int[] r = {arr.findLast((v, i, a) -> v == 5)};
    assertEqual(5, r[0]);
    }

    /**
     * Verify number
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_4400
     * @tc.name int32ArrayFindLastPart02TestMindmapTest044
     * @tc.desc Verify number
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest044() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    int[] r = {arr.findLast((v, i, a) -> v == 30)};
    r[0] = 999;
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify findLast length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_4500
     * @tc.name int32ArrayFindLastPart02TestMindmapTest045
     * @tc.desc Verify findLast length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest045() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    int before = arr.length();
    arr.findLast((v, i, a) -> v > 2);
    assertEqual(before, arr.length());
    }

    /**
     * Verify findLast byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_4600
     * @tc.name int32ArrayFindLastPart02TestMindmapTest046
     * @tc.desc Verify findLast byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest046() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    int before = arr.byteLength();
    arr.findLast((v, i, a) -> v == 4);
    assertEqual(before, arr.byteLength());
    }

    /**
     * Verify findLast byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_4700
     * @tc.name int32ArrayFindLastPart02TestMindmapTest047
     * @tc.desc Verify findLast byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest047() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 4, 2);
    int before = arr.byteOffset();
    arr.findLast((v, i, a) -> true);
    assertEqual(before, arr.byteOffset());
    }

    /**
     * Verify findLast BYTES_PER_ELEMENT 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_4800
     * @tc.name int32ArrayFindLastPart02TestMindmapTest048
     * @tc.desc Verify findLast BYTES_PER_ELEMENT 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest048() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    arr.findLast((v, i, a) -> v == 3);
    assertEqual(4, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify findLast does not mutate the original array when predicate matches in [10, 20, 30, 40, 50]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_4900
     * @tc.name int32ArrayFindLastPart02TestMindmapTest049
     * @tc.desc Verify findLast does not mutate the original array when predicate matches in [10, 20, 30, 40, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest049() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40, 50);
    arr.findLast((v, i, a) -> v > 25);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    /**
     * Verify findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_5300
     * @tc.name int32ArrayFindLastPart02TestMindmapTest053
     * @tc.desc Verify findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest053() {
    Int32Array arr = Int32Array.of(42);
    arr.findLast((v, i, a) -> v == 42);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_5400
     * @tc.name int32ArrayFindLastPart02TestMindmapTest054
     * @tc.desc Verify array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest054() {
    Int32Array arr = Int32Array.of(5, 6, 7);
    arr.findLast((v, i, a) -> {
    a.get(0);
    return v == 7;
    });
    assertEqualInt(5, arr.get(0));
    assertEqualInt(6, arr.get(1));
    assertEqualInt(7, arr.get(2));
    }

    /**
     * Verify buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_5500
     * @tc.name int32ArrayFindLastPart02TestMindmapTest055
     * @tc.desc Verify buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest055() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    ArrayBuffer bufBefore = arr.buffer();
    arr.findLast((v, i, a) -> v == 3);
    assertEqual(bufBefore, arr.buffer());
    }

    /**
     * Verify subarray findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_5600
     * @tc.name int32ArrayFindLastPart02TestMindmapTest056
     * @tc.desc Verify subarray findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest056() {
    Int32Array base = Int32Array.of(10, 20, 30, 40, 50);
    Int32Array view = base.subarray(1, 4);
    int[] r = {view.findLast((v, i, a) -> true)};
    assertEqual(40, r[0]);
    }

    /**
     * Verify subarray findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_5700
     * @tc.name int32ArrayFindLastPart02TestMindmapTest057
     * @tc.desc Verify subarray findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest057() {
    Int32Array base = Int32Array.of(1, 2, 3, 4, 5);
    Int32Array view = base.subarray(0, 2);
    int[] r = {view.findLast((v, i, a) -> true)};
    assertEqual(2, r[0]);
    }

    /**
     * Verify ArrayBuffer findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_5800
     * @tc.name int32ArrayFindLastPart02TestMindmapTest058
     * @tc.desc Verify ArrayBuffer findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest058() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 4, 2);
    view.set(0, 111);
    view.set(1, 222);
    int[] r = {view.findLast((v, i, a) -> v > 0)};
    assertEqual(222, r[0]);
    }

    /**
     * Verify findLast buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_5900
     * @tc.name int32ArrayFindLastPart02TestMindmapTest059
     * @tc.desc Verify findLast buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest059() {
    Int32Array base = Int32Array.of(1, 2, 3, 4);
    Int32Array view = base.subarray(0, 4);
    base.findLast((v, i, a) -> v == 4);
    assertEqualInt(1, view.get(0));
    assertEqualInt(2, view.get(1));
    assertEqualInt(3, view.get(2));
    assertEqualInt(4, view.get(3));
    }

    /**
     * Verify findLast buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_6000
     * @tc.name int32ArrayFindLastPart02TestMindmapTest060
     * @tc.desc Verify findLast buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest060() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 2);
    Int32Array b = new Int32Array(buf, 8, 2);
    a.set(0, 10);
    a.set(1, 20);
    b.set(0, 30);
    b.set(1, 40);
    a.findLast((v, i, arr) -> true);
    assertEqualInt(30, b.get(0));
    assertEqualInt(40, b.get(1));
    }

    /**
     * Verify slice findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_6100
     * @tc.name int32ArrayFindLastPart02TestMindmapTest061
     * @tc.desc Verify slice findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest061() {
    Int32Array original = Int32Array.of(7, 8, 9);
    Int32Array cp = original.slice();
    cp.findLast((v, i, a) -> true);
    assertEqualInt(7, original.get(0));
    assertEqualInt(8, original.get(1));
    assertEqualInt(9, original.get(2));
    assertEqualInt(7, cp.get(0));
    }

    /**
     * Verify 1 subarray findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_6200
     * @tc.name int32ArrayFindLastPart02TestMindmapTest062
     * @tc.desc Verify 1 subarray findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest062() {
    Int32Array base = Int32Array.of(10, 20, 30);
    Int32Array view = base.subarray(1, 2);
    int[] r = {view.findLast((v, i, a) -> true)};
    assertEqual(20, r[0]);
    }

    /**
     * Verify byteOffset 0 findLast base
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_6300
     * @tc.name int32ArrayFindLastPart02TestMindmapTest063
     * @tc.desc Verify byteOffset 0 findLast base
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest063() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int32Array full = new Int32Array(buf);
    full.set(0, 1);
    full.set(1, 2);
    full.set(2, 3);
    full.set(3, 4);
    full.set(4, 5);
    Int32Array view = new Int32Array(buf, 8, 3);
    int[] r = {view.findLast((v, i, a) -> v == 5)};
    assertEqual(5, r[0]);
    }

    /**
     * Verify findLast buffer.byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_6400
     * @tc.name int32ArrayFindLastPart02TestMindmapTest064
     * @tc.desc Verify findLast buffer.byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest064() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    int before = arr.buffer().byteLength();
    arr.findLast((v, i, a) -> v == 3);
    assertEqual(before, arr.buffer().byteLength());
    }

    /**
     * Verify findLast number
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_6600
     * @tc.name int32ArrayFindLastPart02TestMindmapTest066
     * @tc.desc Verify findLast number
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest066() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    int[] r = {arr.findLast((v, i, a) -> v == 20)};
    int sum = r[0] + 1;
    assertEqual(21, sum);
    }

    /**
     * Verify findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_6700
     * @tc.name int32ArrayFindLastPart02TestMindmapTest067
     * @tc.desc Verify findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest067() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    int r1 = arr.findLast((v, i, a) -> v % 2 == 0);
    int r2 = arr.findLast((v, i, a) -> v % 2 == 0);
    assertEqual(4, r1);
    assertEqual(r2, r1);
    }

    /**
     * Verify findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_6800
     * @tc.name int32ArrayFindLastPart02TestMindmapTest068
     * @tc.desc Verify findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest068() {
    Int32Array arr = Int32Array.of(5, 3, 8, 6, 2);
    int r1 = arr.findLast((v, i, a) -> v > 6);
    int r2 = arr.findLast((v, i, a) -> v < 4);
    assertEqual(8, r1);
    assertEqual(2, r2);
    }

    /**
     * Verify findLast TypedArray findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_6900
     * @tc.name int32ArrayFindLastPart02TestMindmapTest069
     * @tc.desc Verify findLast TypedArray findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest069() {
    Int32Array a = Int32Array.of(1, 2, 3);
    Int32Array b = Int32Array.of(10, 20, 30);
    int r = a.findLast((v, i, arr) -> {
        b.findLast((v2, i2, a2) -> v2 == 30);
        return v == 2;
    });
    assertEqual(2, r);
    assertEqualInt(30, b.get(2));
    }

    /**
     * Verify 0xFF 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_7200
     * @tc.name int32ArrayFindLastPart02TestMindmapTest072
     * @tc.desc Verify 0xFF 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest072() {
    Int32Array arr = Int32Array.of(0x01, 0x02, 0xFF);
    int[] r = {arr.findLast((v, i, a) -> v == 0xFF)};
    assertEqual(255, r[0]);
    }

    /**
     * Verify 0o77 63
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_7300
     * @tc.name int32ArrayFindLastPart02TestMindmapTest073
     * @tc.desc Verify 0o77 63
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest073() {
    Int32Array arr = Int32Array.of(010, 020, 077);
    int[] r = {arr.findLast((v, i, a) -> v == 077)};
    assertEqual(63, r[0]);
    }

    /**
     * Verify 0b1010 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART02_TEST_MINDMAP_7400
     * @tc.name int32ArrayFindLastPart02TestMindmapTest074
     * @tc.desc Verify 0b1010 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart02TestMindmapTest074() {
    Int32Array arr = Int32Array.of(0b1, 0b10, 0b1010);
    int[] r = {arr.findLast((v, i, a) -> v == 0b1010)};
    assertEqual(10, r[0]);
    }
}
