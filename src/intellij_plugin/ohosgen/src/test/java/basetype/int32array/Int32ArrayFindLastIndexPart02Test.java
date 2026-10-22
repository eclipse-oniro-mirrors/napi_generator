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
import basetype.common.TypeError;
import basetype.common.Error;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFindLastIndexPart02Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFindLastIndexPart02Test extends BasTest {
    /**
     * Verify findLastIndex returns index 1 when element matches
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_0100
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest001
     * @tc.desc Verify findLastIndex returns index 1 when element matches
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest001() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int result = arr.findLastIndex((v) -> v == 2);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex returns -1 when no element matches
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_0200
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest002
     * @tc.desc Verify findLastIndex returns -1 when no element matches
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest002() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int result = arr.findLastIndex((v) -> v == 99);
    assertEqual(-1, result);
    }

    /**
     * Verify -1 number
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_0300
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest003
     * @tc.desc Verify -1 number
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest003() {
    Int32Array arr = new Int32Array(0);
    int result = arr.findLastIndex((v) -> true);
    assertEqual(-1, result);
    }

    /**
     * Verify 1 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_0400
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest004
     * @tc.desc Verify 1 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest004() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int result = arr.findLastIndex((v) -> v == 20);
    assertEqual(1, result);
    }

    /**
     * Verify undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_0500
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest005
     * @tc.desc Verify undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest005() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7});
    int result = arr.findLastIndex((v) -> v == 7);
    assertEqual(2, result);
    assertFalse(BasTest.isNaN(result));
    }

    /**
     * Verify int 2 ===
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_0600
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest006
     * @tc.desc Verify int 2 ===
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest006() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int result = arr.findLastIndex((v) -> v == 30);
    assertEqual(2, result);
    }

    /**
     * Verify 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_0700
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest007
     * @tc.desc Verify 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest007() {
    Int32Array arr = new Int32Array(new int[] {42});
    int result = arr.findLastIndex((v) -> v == 42);
    assertEqual(0, result);
    }

    /**
     * Verify -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_0800
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest008
     * @tc.desc Verify -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest008() {
    Int32Array arr = new Int32Array(new int[] {42});
    int result = arr.findLastIndex((v) -> v == 99);
    assertEqual(-1, result);
    }

    /**
     * Verify length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_0900
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest009
     * @tc.desc Verify length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest009() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.findLastIndex((v) -> v == 5);
    assertEqual(arr.length() - 1, result);
    }

    /**
     * Verify 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_1000
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest010
     * @tc.desc Verify 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest010() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int result = arr.findLastIndex((v) -> v == 10);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex returns correct index (2) when matching element in middle of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_1100
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest011
     * @tc.desc Verify findLastIndex returns correct index (2) when matching element in middle of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest011() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.findLastIndex((v) -> v == 30);
    assertEqual(2, result);
    }

    /**
     * Verify predicate length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_1200
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest012
     * @tc.desc Verify predicate length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest012() {
    Int32Array arr = new Int32Array(new int[] {7, 7, 7, 7});
    int result = arr.findLastIndex((v) -> true);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex returns last occurrence index when multiple matching elements exist
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_1300
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest013
     * @tc.desc Verify findLastIndex returns last occurrence index when multiple matching elements exist
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest013() {
    Int32Array arr = new Int32Array(new int[] {5, 9, 5, 9, 5});
    int result = arr.findLastIndex((v) -> v == 5);
    assertEqual(4, result);
    }

    /**
     * Verify 9 9
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_1400
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest014
     * @tc.desc Verify 9 9
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest014() {
    Int32Array arr = new Int32Array(new int[] {9, 1, 9, 2, 9});
    int result = arr.findLastIndex((v) -> v == 9);
    assertEqual(4, result);
    }

    /**
     * Verify 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_1500
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest015
     * @tc.desc Verify 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest015() {
    Int32Array arr = new Int32Array(new int[] {3, 1, 4, 1, 5});
    int result = arr.findLastIndex((v) -> v == 3);
    assertEqual(0, result);
    }

    /**
     * Verify index length-2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_1600
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest016
     * @tc.desc Verify index length-2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest016() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50, 60});
    int result = arr.findLastIndex((v, i) -> i == arr.length() - 2);
    assertEqual(4, result);
    }

    /**
     * Verify 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_1700
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest017
     * @tc.desc Verify 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest017() {
    Int32Array arr = new Int32Array(new int[] {0, 1, 0, 2});
    int result = arr.findLastIndex((v) -> v == 0);
    assertEqual(2, result);
    }

    /**
     * Verify length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_2400
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest024
     * @tc.desc Verify length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest024() {
    Int32Array arr = new Int32Array(new int[] {77, 1, 2, 77});
    int result = arr.findLastIndex((v) -> v == 77);
    assertEqual(3, result);
    assertEqual(arr.length() - 1, result);
    }

    /**
     * Verify predicate false -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_2500
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest025
     * @tc.desc Verify predicate false -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest025() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.findLastIndex((v) -> false);
    assertEqual(-1, result);
    }

    /**
     * Verify predicate v===999 -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_2600
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest026
     * @tc.desc Verify predicate v===999 -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest026() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int result = arr.findLastIndex((v) -> v == 999);
    assertEqual(-1, result);
    }

    /**
     * Verify Number.NaN Int32Array Number.NaN ToInt32 0 Number.isNaN false -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_2700
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest027
     * @tc.desc Verify Number.NaN Int32Array Number.NaN ToInt32 0 Number.isNaN false -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest027() {
    Int32Array arr = new Int32Array(new int[] {0, 1, 2});
    int result = arr.findLastIndex((v) -> BasTest.isNaN(v));
    assertEqual(-1, result);
    }

    /**
     * Verify 0 -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_2800
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest028
     * @tc.desc Verify 0 -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest028() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int result = arr.findLastIndex((v) -> v == 0);
    assertEqual(-1, result);
    }

    /**
     * Verify INT_MAX+1 INT_MIN INT_MIN -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_2900
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest029
     * @tc.desc Verify INT_MAX+1 INT_MIN INT_MIN -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest029() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    double target = 2147483648.0;
    int result = arr.findLastIndex((v) -> v == target);
    assertEqual(-1, result);
    }

    /**
     * Verify length=0 predicate -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_3000
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest030
     * @tc.desc Verify length=0 predicate -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest030() {
    Int32Array arr = new Int32Array();
    int result = arr.findLastIndex((v) -> true);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_3100
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest031
     * @tc.desc Verify findLastIndex length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest031() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int before = arr.length();
    arr.findLastIndex((v) -> v == 3);
    assertEqual(before, arr.length());
    }

    /**
     * Verify findLastIndex byteLength 4*length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_3200
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest032
     * @tc.desc Verify findLastIndex byteLength 4*length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest032() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int before = arr.byteLength();
    arr.findLastIndex((v) -> v == 2);
    assertEqual(before, arr.byteLength());
    assertEqual(12, arr.byteLength());
    }

    /**
     * Verify findLastIndex byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_3300
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest033
     * @tc.desc Verify findLastIndex byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest033() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 4, 2);
    int before = arr.byteOffset();
    arr.findLastIndex((v) -> true);
    assertEqual(before, arr.byteOffset());
    assertEqual(4, arr.byteOffset());
    }

    /**
     * Verify findLastIndex BYTES_PER_ELEMENT 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_3400
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest034
     * @tc.desc Verify findLastIndex BYTES_PER_ELEMENT 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest034() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.findLastIndex((v) -> v == 2);
    assertEqual(4, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify findLastIndex length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_3500
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest035
     * @tc.desc Verify findLastIndex length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest035() {
    Int32Array arr = new Int32Array(0);
    arr.findLastIndex((v) -> true);
    assertEqual(0, arr.length());
    }

    /**
     * Verify findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_3600
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest036
     * @tc.desc Verify findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest036() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.findLastIndex((v) -> v == 30);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_3800
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest038
     * @tc.desc Verify findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest038() {
    Int32Array arr = new Int32Array(new int[] {-5, 0, 5});
    arr.findLastIndex((v, i) -> i == 0);
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify findLastIndex with no matching element does not modify the array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_4100
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest041
     * @tc.desc Verify findLastIndex with no matching element does not modify the array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest041() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    arr.findLastIndex((v) -> v == 999);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(9, arr.get(2));
    }

    /**
     * Verify predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_4300
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest043
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest043() {
    Int32Array arr = new Int32Array(new int[] {11, 22, 33});
    arr.findLastIndex((v) -> true);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(22, arr.get(1));
    assertEqualInt(33, arr.get(2));
    }

    /**
     * Verify predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_4400
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest044
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest044() {
    Int32Array arr = new Int32Array(new int[] {44, 55, 66});
    arr.findLastIndex((v) -> false);
    assertEqualInt(44, arr.get(0));
    assertEqualInt(55, arr.get(1));
    assertEqualInt(66, arr.get(2));
    }

    /**
     * Verify findLastIndex buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_4500
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest045
     * @tc.desc Verify findLastIndex buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest045() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf);
    ArrayBuffer before = arr.buffer();
    arr.findLastIndex((v) -> true);
    assertEqual(before, arr.buffer());
    }

    /**
     * Verify findLastIndex ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_4600
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest046
     * @tc.desc Verify findLastIndex ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest046() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 3);
    Int32Array b = new Int32Array(buf, 0, 3);
    a.set(0, 10);
    a.set(1, 20);
    a.set(2, 30);
    a.findLastIndex((v) -> v == 20);
    assertEqualInt(10, b.get(0));
    assertEqualInt(20, b.get(1));
    assertEqualInt(30, b.get(2));
    }

    /**
     * Verify findLastIndex ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_4700
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest047
     * @tc.desc Verify findLastIndex ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest047() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int32Array a = new Int32Array(buf, 0, 3);
    Int32Array c = new Int32Array(buf, 8, 3);
    a.set(0, 1);
    a.set(1, 2);
    a.set(2, 3);
    c.set(0, 4);
    c.set(1, 5);
    c.set(2, 6);
    a.findLastIndex((v) -> v == 2);
    assertEqualInt(4, c.get(0));
    assertEqualInt(5, c.get(1));
    assertEqualInt(6, c.get(2));
    }

    /**
     * Verify findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_4800
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest048
     * @tc.desc Verify findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest048() {
    Int32Array arr = new Int32Array(new int[] {0, 1, 2, 3, 4, 5});
    Int32Array sub = arr.subarray(2, 5);
    sub.findLastIndex((v) -> v == 4);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(1, arr.get(1));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(3, arr.get(3));
    assertEqualInt(4, arr.get(4));
    assertEqualInt(5, arr.get(5));
    }

    /**
     * Verify findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_4900
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest049
     * @tc.desc Verify findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest049() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    Int32Array sub = arr.subarray(1, 4);
    int result = sub.findLastIndex((v) -> v == 30);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_5000
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest050
     * @tc.desc Verify findLastIndex length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest050() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array sub = arr.subarray(1, 4);
    int beforeLen = sub.length();
    sub.findLastIndex((v) -> v == 3);
    assertEqual(beforeLen, sub.length());
    assertEqual(3, sub.length());
    }

    /**
     * Verify findLastIndex byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_5100
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest051
     * @tc.desc Verify findLastIndex byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest051() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array sub = arr.subarray(2, 5);
    int beforeOff = sub.byteOffset();
    sub.findLastIndex((v) -> true);
    assertEqual(beforeOff, sub.byteOffset());
    assertEqual(8, sub.byteOffset());
    }

    /**
     * Verify 0 findLastIndex -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_5200
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest052
     * @tc.desc Verify 0 findLastIndex -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest052() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    Int32Array sub = arr.subarray(2, 2);
    int result = sub.findLastIndex((v) -> true);
    assertEqual(-1, result);
    assertEqual(0, sub.length());
    }

    /**
     * Verify byteOffset findLastIndex byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_5300
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest053
     * @tc.desc Verify byteOffset findLastIndex byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest053() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array arr = new Int32Array(buf, 12, 2);
    arr.set(0, 100);
    arr.set(1, 200);
    arr.findLastIndex((v) -> v == 100);
    assertEqual(12, arr.byteOffset());
    assertEqual(2, arr.length());
    assertEqualInt(100, arr.get(0));
    assertEqualInt(200, arr.get(1));
    }

    /**
     * Verify array === findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_5400
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest054
     * @tc.desc Verify array === findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest054() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    Int32Array[] captured = {null};
    arr.findLastIndex((v, i, a) -> {
    captured[0] = a;
    return v == 2;
    });
    assertEqual(arr, captured[0]);
    }

    /**
     * Verify array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_5500
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest055
     * @tc.desc Verify array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest055() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    Int32Array sub = arr.subarray(1, 3);
    Int32Array[] captured = {null};
    sub.findLastIndex((v, i, a) -> {
    captured[0] = a;
    return v == 20;
    });
    assertEqual(sub, captured[0]);
    assertNotEqual(arr, captured[0]);
    }

    /**
     * Verify array length length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_5600
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest056
     * @tc.desc Verify array length length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest056() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int[] seen = {-1};
    arr.findLastIndex((v, i, a) -> {
    seen[0] = a.length();
    return true;
    });
    assertEqual(4, seen[0]);
    }

    /**
     * Verify index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_5700
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest057
     * @tc.desc Verify index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest057() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    List<Integer> idxs = new ArrayList<>();
    arr.findLastIndex((v, i) -> {
    idxs.add(i);
    return false;
    });
    assertEqual(4, idxs.size());
    assertEqualInt(3, idxs.get(0));
    assertEqualInt(2, idxs.get(1));
    assertEqualInt(1, idxs.get(2));
    assertEqualInt(0, idxs.get(3));
    }

    /**
     * Verify findLastIndex short-circuits after finding first match from the end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_5800
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest058
     * @tc.desc Verify findLastIndex short-circuits after finding first match from the end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest058() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int[] callCount = {0};
    int result = arr.findLastIndex((v, i) -> {
        callCount[0] = callCount[0] + 1;
        return v == 40;
    });
    assertEqual(3, result);
    assertEqual(1, callCount[0]);
    }

    /**
     * Verify length - hitIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_5900
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest059
     * @tc.desc Verify length - hitIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest059() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int[] callCount = {0};
    int result = arr.findLastIndex((v, i) -> {
        callCount[0] = callCount[0] + 1;
        return v == 30;
    });
    assertEqual(2, result);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_6000
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest060
     * @tc.desc Verify 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest060() {
    Int32Array arr = new Int32Array(new int[] {99});
    int[] callCount = {0};
    int result = arr.findLastIndex((v, i) -> {
        callCount[0] = callCount[0] + 1;
        return true;
    });
    assertEqual(0, result);
    assertEqual(1, callCount[0]);
    }

    /**
     * Verify 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_6100
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest061
     * @tc.desc Verify 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest061() {
    Int32Array arr = new Int32Array(0);
    int[] callCount = {0};
    int result = arr.findLastIndex((v, i) -> {
        callCount[0] = callCount[0] + 1;
        return true;
    });
    assertEqual(-1, result);
    assertEqual(0, callCount[0]);
    }

    /**
     * Verify length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_6200
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest062
     * @tc.desc Verify length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest062() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] callCount = {0};
    int result = arr.findLastIndex((v, i) -> {
        callCount[0] = callCount[0] + 1;
        return false;
    });
    assertEqual(-1, result);
    assertEqual(5, callCount[0]);
    }

    /**
     * Verify i=length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_6300
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest063
     * @tc.desc Verify i=length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest063() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int[] firstIdx = {-999};
    arr.findLastIndex((v, i) -> {
    if (firstIdx[0] == -999) {
    firstIdx[0] = i;
    }
    return false;
    });
    assertEqual(2, firstIdx[0]);
    assertEqual(arr.length() - 1, firstIdx[0]);
    }

    /**
     * Verify i
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_6400
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest064
     * @tc.desc Verify i
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest064() {
    Int32Array arr = new Int32Array(new int[] {5, 15, 25, 35, 45});
    int[] lastIdx = {-1};
    int result = arr.findLastIndex((v, i) -> {
        lastIdx[0] = i;
        return v == 15;
    });
    assertEqual(1, result);
    assertEqual(1, lastIdx[0]);
    }

    /**
     * Verify value array[index] a[i]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_6500
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest065
     * @tc.desc Verify value array[index] a[i]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest065() {
    Int32Array arr = new Int32Array(new int[] {100, 200, 300, 400});
    boolean[] mismatch = {false};
    arr.findLastIndex((v, i, a) -> {
    if (a.get(i) != v) {
    mismatch[0] = true;
    }
    return false;
    });
    assertFalse(mismatch[0]);
    }

    /**
     * Verify index [0, length-1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_6600
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest066
     * @tc.desc Verify index [0, length-1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest066() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    boolean[] outOfRange = {false};
    arr.findLastIndex((v, i, a) -> {
    if (i < 0 || i >= a.length()) {
    outOfRange[0] = true;
    }
    return false;
    });
    assertFalse(outOfRange[0]);
    }

    /**
     * Verify 0 i 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_6700
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest067
     * @tc.desc Verify 0 i 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest067() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    boolean[] sawZero = {false};
    arr.findLastIndex((v, i) -> {
    if (i == 0) {
    sawZero[0] = true;
    }
    return false;
    });
    assertTrue(sawZero[0]);
    }

    /**
     * Verify callCount
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_6800
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest068
     * @tc.desc Verify callCount
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest068() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int[] acc = {0};
    int result = arr.findLastIndex((v, i) -> {
        acc[0] = acc[0] + 1;
        return v == 2;
    });
    assertEqual(1, result);
    assertEqual(2, acc[0]);
    }

    /**
     * Verify array findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_7000
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest070
     * @tc.desc Verify array findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest070() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int result = arr.findLastIndex((v, unusedIndex, array) -> {
        return v == 30;
        });
    assertEqual(2, result);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify findLastIndex returns last occurrence when duplicate values exist
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_7100
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest071
     * @tc.desc Verify findLastIndex returns last occurrence when duplicate values exist
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest071() {
    Int32Array arr = new Int32Array(new int[] {2, 1, 2, 3, 2});
    int result = arr.findLastIndex((v) -> v == 2);
    assertEqual(4, result);
    }

    /**
     * Verify findLastIndex predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_7200
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest072
     * @tc.desc Verify findLastIndex predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest072() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 2, 1});
    int r1 = arr.findLastIndex((v) -> v == 2);
    int r2 = arr.findLastIndex((v) -> v == 2);
    assertEqual(r2, r1);
    assertEqual(3, r1);
    }

    /**
     * Verify predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_7300
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest073
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest073() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int r1 = arr.findLastIndex((v) -> v == 30);
    int r2 = arr.findLastIndex((v) -> v == 10);
    assertEqual(2, r1);
    assertEqual(0, r2);
    }

    /**
     * Verify Error null
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_7400
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest074
     * @tc.desc Verify Error null
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest074() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    arr.findLastIndex((v) -> {
    return BasTest.throwTestError("predicate error");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findLastIndex propagates exception thrown in predicate and does not modify array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_7500
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest075
     * @tc.desc Verify findLastIndex propagates exception thrown in predicate and does not modify array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest075() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    arr.findLastIndex((v) -> {
    return BasTest.throwTestError("boom");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify findLastIndex stops iterating when predicate throws mid-traversa
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_7600
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest076
     * @tc.desc Verify findLastIndex stops iterating when predicate throws mid-traversa
     * l and reports invocation count
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest076() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int[] callCount = {0};
    try {
    arr.findLastIndex((v, i) -> {
    callCount[0] = callCount[0] + 1;
    if (i == 2) {
    return BasTest.throwTestError("midway");
    }
    return false;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify RangeError name RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_7700
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest077
     * @tc.desc Verify RangeError name RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest077() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    arr.findLastIndex((v) -> {
    throw new RangeError("range");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify TypeError name TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_7800
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest078
     * @tc.desc Verify TypeError name TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest078() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    arr.findLastIndex((v) -> {
    throw new TypeError("type");
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify v>0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_7900
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest079
     * @tc.desc Verify v>0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest079() {
    Int32Array arr = new Int32Array(new int[] {0, 1, 2, 3});
    int result = arr.findLastIndex((v) -> v > 0);
    assertEqual(3, result);
    }

    /**
     * Verify ArrayBuffer 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_8000
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest080
     * @tc.desc Verify ArrayBuffer 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest080() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf);
    int result = arr.findLastIndex((v) -> v == 0);
    assertEqual(3, result);
    }

    /**
     * Verify ArrayBuffer byteOffset=4, length=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_8100
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest081
     * @tc.desc Verify ArrayBuffer byteOffset=4, length=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest081() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array full = new Int32Array(buf);
    full.set(0, 1);
    full.set(1, 2);
    full.set(2, 3);
    full.set(3, 4);
    Int32Array part = new Int32Array(buf, 4, 2);
    int result = part.findLastIndex((v) -> v == 3);
    assertEqual(1, result);
    assertEqual(2, part.length());
    }

    /**
     * Verify of findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_8200
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest082
     * @tc.desc Verify of findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest082() {
    Int32Array arr = Int32Array.of(7, 8, 9, 10);
    int result = arr.findLastIndex((v) -> v == 9);
    assertEqual(2, result);
    }

    /**
     * Verify from findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_8300
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest083
     * @tc.desc Verify from findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest083() {
    Int32Array arr = Int32Array.from(new int[] {5, 15, 25, 35});
    int result = arr.findLastIndex((v) -> v == 15);
    assertEqual(1, result);
    }

    /**
     * Verify of findLastIndex 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_8400
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest084
     * @tc.desc Verify of findLastIndex 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest084() {
    Int32Array arr = Int32Array.of(42);
    int result = arr.findLastIndex((v) -> v == 42);
    assertEqual(0, result);
    }

    /**
     * Verify of Int32Array findLastIndex -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_8500
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest085
     * @tc.desc Verify of Int32Array findLastIndex -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest085() {
    Int32Array arr = Int32Array.of();
    int result = arr.findLastIndex((v) -> true);
    assertEqual(-1, result);
    assertEqual(0, arr.length());
    }

    /**
     * Verify 32 31 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_8700
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest087
     * @tc.desc Verify 32 31 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest087() {
    List<Integer> data = new ArrayList<>();
    for (int i = 0; i < 32; i++) {
    data.add(i);
    }
    Int32Array arr = new Int32Array(data);
    int[] callCount = {0};
    int result = arr.findLastIndex((v, idx) -> {
        callCount[0] = callCount[0] + 1;
        return v == 31;
    });
    assertEqual(31, result);
    assertEqual(1, callCount[0]);
    assertEqual(32, arr.length());
    }

    /**
     * Verify 16 0 length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART02_TEST_MINDMAP_8800
     * @tc.name int32ArrayFindLastIndexPart02TestMindmapTest088
     * @tc.desc Verify 16 0 length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart02TestMindmapTest088() {
    List<Integer> data = new ArrayList<>();
    for (int i = 0; i < 16; i++) {
    data.add(i + 1);
    }
    Int32Array arr = new Int32Array(data);
    int[] callCount = {0};
    int result = arr.findLastIndex((v) -> {
        callCount[0] = callCount[0] + 1;
        return v == 1;
    });
    assertEqual(0, result);
    assertEqual(16, callCount[0]);
    }
}
