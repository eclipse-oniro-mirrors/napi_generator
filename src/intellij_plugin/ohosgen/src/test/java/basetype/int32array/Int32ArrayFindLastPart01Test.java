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
import basetype.common.BasTest;
import basetype.common.ClassCastError;
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Error;

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFindLastPart01Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFindLastPart01Test extends BasTest {
    /**
     * Verify 1 predicate value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_0100
     * @tc.name int32ArrayFindLastPart01TestMindmapTest001
     * @tc.desc Verify 1 predicate value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest001() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.findLast((v) -> v > 25);
    assertEqual(50, result);
    }

    /**
     * Verify 1 predicate value index index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_0200
     * @tc.name int32ArrayFindLastPart01TestMindmapTest002
     * @tc.desc Verify 1 predicate value index index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest002() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int result = arr.findLast((v, i) -> i == 1);
    assertEqual(20, result);
    }

    /**
     * Verify 1 predicate value/index/array array.length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_0300
     * @tc.name int32ArrayFindLastPart01TestMindmapTest003
     * @tc.desc Verify 1 predicate value/index/array array.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest003() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.findLast((v, i, a) -> i == a.length() - 1);
    assertEqual(50, result);
    }

    /**
     * Verify predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_0500
     * @tc.name int32ArrayFindLastPart01TestMindmapTest005
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest005() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.findLast((v) -> v < 4);
    assertEqual(3, result);
    }

    /**
     * Verify undefined predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_0600
     * @tc.name int32ArrayFindLastPart01TestMindmapTest006
     * @tc.desc Verify undefined predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest006() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    int result = arr.findLast((v) -> v > 7);
    assertEqual(9, result);
    }

    /**
     * Verify predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_0700
     * @tc.name int32ArrayFindLastPart01TestMindmapTest007
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest007() {
    Int32Array arr = new Int32Array(new int[] {42});
    int result = arr.findLast((v) -> v == 42);
    assertEqual(42, result);
    }

    /**
     * Verify value 0 predicate 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_0800
     * @tc.name int32ArrayFindLastPart01TestMindmapTest008
     * @tc.desc Verify value 0 predicate 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest008() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 0, 3});
    int result = arr.findLast((v) -> v == 0);
    assertEqual(0, result);
    }

    /**
     * Verify value -0 0 ToInt32 0 predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_0900
     * @tc.name int32ArrayFindLastPart01TestMindmapTest009
     * @tc.desc Verify value -0 0 ToInt32 0 predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest009() {
    Int32Array arr = new Int32Array(new int[] {0, 1, 2, 0});
    int result = arr.findLast((v) -> v == 0);
    assertEqual(0, result);
    }

    /**
     * Verify value 1 predicate 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_1000
     * @tc.name int32ArrayFindLastPart01TestMindmapTest010
     * @tc.desc Verify value 1 predicate 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest010() {
    Int32Array arr = new Int32Array(new int[] {0, 2, 3, 1});
    int result = arr.findLast((v) -> v == 1);
    assertEqual(1, result);
    }

    /**
     * Verify 42 predicate 42
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_1500
     * @tc.name int32ArrayFindLastPart01TestMindmapTest015
     * @tc.desc Verify 42 predicate 42
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest015() {
    Int32Array arr = new Int32Array(new int[] {-1, 42, 0, 42});
    int result = arr.findLast((v) -> v == 42);
    assertEqual(42, result);
    }

    /**
     * Verify predicate v%2===0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_1800
     * @tc.name int32ArrayFindLastPart01TestMindmapTest018
     * @tc.desc Verify predicate v%2===0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest018() {
    Int32Array arr = new Int32Array(new int[] {1, 4, 3, 6, 5});
    int result = arr.findLast((v) -> v % 2 == 0);
    assertEqual(6, result);
    }

    /**
     * Verify predicate v%2!==0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_1900
     * @tc.name int32ArrayFindLastPart01TestMindmapTest019
     * @tc.desc Verify predicate v%2!==0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest019() {
    Int32Array arr = new Int32Array(new int[] {2, 3, 6, 5, 8});
    int result = arr.findLast((v) -> v % 2 != 0);
    assertEqual(5, result);
    }

    /**
     * Verify value 0xFF 255 predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_2000
     * @tc.name int32ArrayFindLastPart01TestMindmapTest020
     * @tc.desc Verify value 0xFF 255 predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest020() {
    Int32Array arr = new Int32Array(new int[] {1, 0xFF, 2, 0xFF});
    int result = arr.findLast((v) -> v == 0xFF);
    assertEqual(255, result);
    }

    /**
     * Verify value 0o77 63 predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_2100
     * @tc.name int32ArrayFindLastPart01TestMindmapTest021
     * @tc.desc Verify value 0o77 63 predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest021() {
    Int32Array arr = new Int32Array(new int[] {077, 1, 2, 077});
    int result = arr.findLast((v) -> v == 63);
    assertEqual(63, result);
    }

    /**
     * Verify value 0b1010 10 predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_2200
     * @tc.name int32ArrayFindLastPart01TestMindmapTest022
     * @tc.desc Verify value 0b1010 10 predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest022() {
    Int32Array arr = new Int32Array(new int[] {0b1010, 1, 2, 0b1010});
    int result = arr.findLast((v) -> v == 10);
    assertEqual(10, result);
    }

    /**
     * Verify findLast returns matching value (7) when all elements are identical and match predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_2300
     * @tc.name int32ArrayFindLastPart01TestMindmapTest023
     * @tc.desc Verify findLast returns matching value (7) when all elements are identical and match predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest023() {
    Int32Array arr = new Int32Array(new int[] {7, 7, 7, 7});
    int result = arr.findLast((v) -> v == 7);
    assertEqual(7, result);
    }

    /**
     * Verify predicate true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_2400
     * @tc.name int32ArrayFindLastPart01TestMindmapTest024
     * @tc.desc Verify predicate true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest024() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int result = arr.findLast((v) -> true);
    assertEqual(40, result);
    }

    /**
     * Verify findLast returns the last element (8) satisfying v > 4 from the end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_2500
     * @tc.name int32ArrayFindLastPart01TestMindmapTest025
     * @tc.desc Verify findLast returns the last element (8) satisfying v > 4 from the end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest025() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7, 8});
    int result = arr.findLast((v) -> v > 4);
    assertEqual(8, result);
    }

    /**
     * Verify value 3.5 ToInt32 3 predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_2800
     * @tc.name int32ArrayFindLastPart01TestMindmapTest028
     * @tc.desc Verify value 3.5 ToInt32 3 predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest028() {
    Int32Array arr = new Int32Array(new int[] {1, 3, 5});
    int result = arr.findLast((v) -> v == 3);
    assertEqual(3, result);
    }

    /**
     * Verify Number.NaN ToInt32 0 predicate 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_2900
     * @tc.name int32ArrayFindLastPart01TestMindmapTest029
     * @tc.desc Verify Number.NaN ToInt32 0 predicate 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest029() {
    Int32Array arr = new Int32Array(new int[] {1, 0, 2, 0});
    int result = arr.findLast((v) -> v == 0);
    assertEqual(0, result);
    }

    /**
     * Verify index predicate index length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_3000
     * @tc.name int32ArrayFindLastPart01TestMindmapTest030
     * @tc.desc Verify index predicate index length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest030() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int[] lastIdx = {-1};
    int result = arr.findLast((v, i) -> {
        lastIdx[0] = i;
        return v == 40;
    });
    assertEqual(40, result);
    assertEqual(3, lastIdx[0]);
    }

    /**
     * Verify index index length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_3200
     * @tc.name int32ArrayFindLastPart01TestMindmapTest032
     * @tc.desc Verify index index length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest032() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int[] hitIdx = {-1};
    arr.findLast((v, i) -> {
    if (v == 30) {
    hitIdx[0] = i;
    return true;
    }
    return false;
    });
    assertEqual(2, hitIdx[0]);
    }

    /**
     * Verify 0 index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_3300
     * @tc.name int32ArrayFindLastPart01TestMindmapTest033
     * @tc.desc Verify 0 index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest033() {
    Int32Array arr = new Int32Array(new int[] {99, 2, 3, 4});
    int[] hitIdx = {-1};
    arr.findLast((v, i) -> {
    if (v == 99) {
    hitIdx[0] = i;
    return true;
    }
    return false;
    });
    assertEqual(0, hitIdx[0]);
    }

    /**
     * Verify length-1 index length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_3400
     * @tc.name int32ArrayFindLastPart01TestMindmapTest034
     * @tc.desc Verify length-1 index length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest034() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 77});
    int[] hitIdx = {-1};
    arr.findLast((v, i) -> {
    if (v == 77) {
    hitIdx[0] = i;
    return true;
    }
    return false;
    });
    assertEqual(3, hitIdx[0]);
    }

    /**
     * Verify index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_3500
     * @tc.name int32ArrayFindLastPart01TestMindmapTest035
     * @tc.desc Verify index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest035() {
    Int32Array arr = new Int32Array(new int[] {5});
    int[] seenIdx = {-1};
    arr.findLast((v, i) -> {
    seenIdx[0] = i;
    return v == 5;
    });
    assertEqual(0, seenIdx[0]);
    }

    /**
     * Verify findLast predicate receives correct indices
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_3700
     * @tc.name int32ArrayFindLastPart01TestMindmapTest037
     * @tc.desc Verify findLast predicate receives correct indices
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest037() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int[] hitIdx = {-1};
    arr.findLast((v, i) -> {
    hitIdx[0] = i;
    return v == 2;
    });
    assertEqual(2, hitIdx[0] + 1);
    }

    /**
     * Verify findLast short-circuits and reports correct invocation count whe
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_3800
     * @tc.name int32ArrayFindLastPart01TestMindmapTest038
     * @tc.desc Verify findLast short-circuits and reports correct invocation count whe
     * n match is found during reverse traversal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest038() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] count = {0};
    arr.findLast((v, i) -> {
    count[0] = count[0] + 1;
    return v == 4;
    });
    assertEqual(2, count[0]);
    }

    /**
     * Verify index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_3900
     * @tc.name int32ArrayFindLastPart01TestMindmapTest039
     * @tc.desc Verify index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest039() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.findLast((v, i) -> i % 2 != 0);
    assertEqual(40, result);
    }

    /**
     * Verify index i>1 index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_4000
     * @tc.name int32ArrayFindLastPart01TestMindmapTest040
     * @tc.desc Verify index i>1 index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest040() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.findLast((v, i) -> i > 1);
    assertEqual(50, result);
    }

    /**
     * Verify array findLast Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_4100
     * @tc.name int32ArrayFindLastPart01TestMindmapTest041
     * @tc.desc Verify array findLast Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest041() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] sameRef = {false};
    arr.findLast((v, i, a) -> {
    sameRef[0] = a == arr;
    return true;
    });
    assertTrue(sameRef[0]);
    }

    /**
     * Verify array array.length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_4200
     * @tc.name int32ArrayFindLastPart01TestMindmapTest042
     * @tc.desc Verify array array.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest042() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int[] seenLen = {-1};
    arr.findLast((v, i, a) -> {
    seenLen[0] = a.length();
    return true;
    });
    assertEqual(4, seenLen[0]);
    }

    /**
     * Verify array a[0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_4300
     * @tc.name int32ArrayFindLastPart01TestMindmapTest043
     * @tc.desc Verify array a[0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest043() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int[] firstVal = {0};
    arr.findLast((v, i, a) -> {
    firstVal[0] = a.get(0);
    return true;
    });
    assertEqual(10, firstVal[0]);
    }

    /**
     * Verify array a[a.length-1] v
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_4400
     * @tc.name int32ArrayFindLastPart01TestMindmapTest044
     * @tc.desc Verify array a[a.length-1] v
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest044() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 99});
    int[] lastVal = {0};
    int[] firstV = {0};
    boolean[] first = {true};
    arr.findLast((v, i, a) -> {
    if (first[0]) {
    lastVal[0] = a.get(a.length() - 1);
    firstV[0] = v;
    first[0] = false;
    }
    return true;
    });
    assertEqual(firstV[0], lastVal[0]);
    }

    /**
     * Verify array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_4500
     * @tc.name int32ArrayFindLastPart01TestMindmapTest045
     * @tc.desc Verify array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest045() {
    Int32Array arr = new Int32Array(new int[] {1});
    int[] seenLen = {-1};
    arr.findLast((v, i, a) -> {
    seenLen[0] = a.length();
    return true;
    });
    assertEqual(1, seenLen[0]);
    }

    /**
     * Verify array arr arr
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_4600
     * @tc.name int32ArrayFindLastPart01TestMindmapTest046
     * @tc.desc Verify array arr arr
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest046() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    int[] midVal = {0};
    arr.findLast((v, i, a) -> {
    midVal[0] = a.get(1);
    return true;
    });
    assertEqual(8, midVal[0]);
    }

    /**
     * Verify array buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_4700
     * @tc.name int32ArrayFindLastPart01TestMindmapTest047
     * @tc.desc Verify array buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest047() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int result = arr.findLast((v, i, a) -> {
        if (i == 3) {
            a.set(0, 99);
        }
        return v == 99;
        });
    assertEqual(99, result);
    }

    /**
     * Verify array length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_4900
     * @tc.name int32ArrayFindLastPart01TestMindmapTest049
     * @tc.desc Verify array length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest049() {
    Int32Array arr = new Int32Array(new int[] {55});
    int[] len = {0};
    arr.findLast((v, i, a) -> {
    len[0] = a.length();
    return true;
    });
    assertEqual(1, len[0]);
    }

    /**
     * Verify array BYTES_PER_ELEMENT 4 Int32Array 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_5000
     * @tc.name int32ArrayFindLastPart01TestMindmapTest050
     * @tc.desc Verify array BYTES_PER_ELEMENT 4 Int32Array 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest050() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int[] bpe = {0};
    arr.findLast((v, i, a) -> {
    bpe[0] = a.BYTES_PER_ELEMENT;
    return true;
    });
    assertEqual(4, bpe[0]);
    }

    /**
     * Verify predicate true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_5100
     * @tc.name int32ArrayFindLastPart01TestMindmapTest051
     * @tc.desc Verify predicate true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest051() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int result = arr.findLast((v) -> {
        return true;
        });
    assertEqual(3, result);
    }

    /**
     * Verify predicate false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_5200
     * @tc.name int32ArrayFindLastPart01TestMindmapTest052
     * @tc.desc Verify predicate false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest052() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int result = arr.findLast((v) -> {
        return v == 1;
        });
    assertEqual(1, result);
    }

    /**
     * Verify predicate v===value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_5300
     * @tc.name int32ArrayFindLastPart01TestMindmapTest053
     * @tc.desc Verify predicate v===value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest053() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7, 8});
    int target = 7;
    int result = arr.findLast((v) -> v == target);
    assertEqual(7, result);
    }

    /**
     * Verify predicate &&
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_5400
     * @tc.name int32ArrayFindLastPart01TestMindmapTest054
     * @tc.desc Verify predicate &&
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest054() {
    Int32Array arr = new Int32Array(new int[] {-1, 4, -9, 16});
    int result = arr.findLast((v) -> v > 0 && v % 2 == 0);
    assertEqual(16, result);
    }

    /**
     * Verify predicate !
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_5600
     * @tc.name int32ArrayFindLastPart01TestMindmapTest056
     * @tc.desc Verify predicate !
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest056() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 0});
    int result = arr.findLast((v) -> !(v != 0));
    assertEqual(0, result);
    }

    /**
     * Verify predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_5800
     * @tc.name int32ArrayFindLastPart01TestMindmapTest058
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest058() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] sum = {0};
    int result = arr.findLast((v) -> {
        sum[0] = sum[0] + v;
        return sum[0] >= 12;
    });
    assertEqual(3, result);
    }

    /**
     * Verify predicate >=
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_5900
     * @tc.name int32ArrayFindLastPart01TestMindmapTest059
     * @tc.desc Verify predicate >=
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest059() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.findLast((v) -> v >= 4);
    assertEqual(5, result);
    }

    /**
     * Verify predicate <=
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_6000
     * @tc.name int32ArrayFindLastPart01TestMindmapTest060
     * @tc.desc Verify predicate <=
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest060() {
    Int32Array arr = new Int32Array(new int[] {5, 4, 3, 2, 1});
    int result = arr.findLast((v) -> v <= 2);
    assertEqual(1, result);
    }

    /**
     * Verify predicate null
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_6100
     * @tc.name int32ArrayFindLastPart01TestMindmapTest061
     * @tc.desc Verify predicate null
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest061() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_6200
     * @tc.name int32ArrayFindLastPart01TestMindmapTest062
     * @tc.desc Verify predicate undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest062() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_6300
     * @tc.name int32ArrayFindLastPart01TestMindmapTest063
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest063() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_6400
     * @tc.name int32ArrayFindLastPart01TestMindmapTest064
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest064() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate Error
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_6500
     * @tc.name int32ArrayFindLastPart01TestMindmapTest065
     * @tc.desc Verify predicate Error
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest065() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    arr.findLast((v) -> {
    return BasTest.throwTestError("predicate boom");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("predicate boom", e.getMessage());
    }
    }

    /**
     * Verify predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_6600
     * @tc.name int32ArrayFindLastPart01TestMindmapTest066
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest066() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int[] callCount = {0};
    try {
    arr.findLast((v) -> {
    callCount[0] = callCount[0] + 1;
    return BasTest.throwTestError("first[0] element throw");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("first[0] element throw", e.getMessage());
    assertEqual(1, callCount[0]);
    }
    }

    /**
     * Verify predicate RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_6700
     * @tc.name int32ArrayFindLastPart01TestMindmapTest067
     * @tc.desc Verify predicate RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest067() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    arr.findLast((v) -> {
    throw new RangeError("range");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART01_TEST_MINDMAP_6800
     * @tc.name int32ArrayFindLastPart01TestMindmapTest068
     * @tc.desc Verify predicate TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart01TestMindmapTest068() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    arr.findLast((v) -> {
    throw new TypeError("type");
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }
}
