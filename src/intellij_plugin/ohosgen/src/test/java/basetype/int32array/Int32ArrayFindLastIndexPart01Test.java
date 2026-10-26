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
import basetype.common.ClassCastError;

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFindLastIndexPart01Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFindLastIndexPart01Test extends BasTest {
    /**
     * Verify findLastIndex predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_0100
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest001
     * @tc.desc Verify findLastIndex predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest001() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify 1 predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_0200
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest002
     * @tc.desc Verify 1 predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest002() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int r = arr.findLastIndex((v, i, a) -> v == 20);
    assertEqual(1, r);
    }

    /**
     * Verify predicate number
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_0300
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest003
     * @tc.desc Verify predicate number
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest003() {
    Int32Array arr = new Int32Array(new int[] {4, 5, 6});
    int r = arr.findLastIndex((v, i, a) -> v > 100);
    assertEqual(-1, r);
    }

    /**
     * Verify predicate Int32Array this
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_0400
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest004
     * @tc.desc Verify predicate Int32Array this
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest004() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    new Int32Array(new int[] {-1});
    int r = arr.findLastIndex((v, i, a) -> v == 8);
    assertEqual(1, r);
    }

    /**
     * Verify predicate null
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_0500
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest005
     * @tc.desc Verify predicate null
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest005() {
    Int32Array arr = new Int32Array(new int[] {13, 24, 35});
    int r = arr.findLastIndex((v) -> v == 24);
    assertEqual(1, r);
    }

    /**
     * Verify value index/array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_0600
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest006
     * @tc.desc Verify value index/array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest006() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int r = arr.findLastIndex((v) -> v == 30);
    assertEqual(2, r);
    }

    /**
     * Verify value index array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_0700
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest007
     * @tc.desc Verify value index array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest007() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int r = arr.findLastIndex((v, i) -> i == 1);
    assertEqual(1, r);
    }

    /**
     * Verify 0 ():boolean true length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_0800
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest008
     * @tc.desc Verify 0 ():boolean true length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest008() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    int r = arr.findLastIndex((index) -> true);
    assertEqual(2, r);
    }

    /**
     * Verify 0 ():boolean false -1 length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_0900
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest009
     * @tc.desc Verify 0 ():boolean false -1 length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest009() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    int[] count = {0};
    arr.findLastIndex((index) -> {
        count[0]++;
        return false;
    });
    assertEqual(3, count[0]);
    }

    /**
     * Verify predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_1000
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest010
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest010() {
    Int32Array arr = new Int32Array(new int[] {5, 15, 25, 35});
    Int32Array.Int32ArrayFinder1 pred = (v) -> v == 15;
    int r = arr.findLastIndex(pred);
    assertEqual(1, r);
    }

    /**
     * Verify number predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_1200
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest012
     * @tc.desc Verify number predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest012() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify string predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_1300
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest013
     * @tc.desc Verify string predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest013() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify null predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_1400
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest014
     * @tc.desc Verify null predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest014() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify undefined predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_1500
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest015
     * @tc.desc Verify undefined predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest015() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify boolean true predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_1600
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest016
     * @tc.desc Verify boolean true predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest016() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
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
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_1700
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest017
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest017() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    Object obj = new Object();
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify value 0 predicate 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_1800
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest018
     * @tc.desc Verify value 0 predicate 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest018() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 0});
    int r = arr.findLastIndex((v) -> v == 0);
    assertEqual(3, r);
    }

    /**
     * Verify value 0 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_1900
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest019
     * @tc.desc Verify value 0 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest019() {
    Int32Array arr = new Int32Array(new int[] {0, 1, 0, 1, 0});
    int r = arr.findLastIndex((v) -> v == 0);
    assertEqual(4, r);
    }

    /**
     * Verify value 0 predicate 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_2000
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest020
     * @tc.desc Verify value 0 predicate 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest020() {
    Int32Array arr = new Int32Array(new int[] {0, 1, 2});
    int r = arr.findLastIndex((v) -> v == 0);
    assertEqual(0, r);
    }

    /**
     * Verify value 1 predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_2100
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest021
     * @tc.desc Verify value 1 predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest021() {
    Int32Array arr = new Int32Array(new int[] {0, 2, 1});
    int r = arr.findLastIndex((v) -> v == 1);
    assertEqual(2, r);
    }

    /**
     * Verify value 1 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_2200
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest022
     * @tc.desc Verify value 1 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest022() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int r = arr.findLastIndex((v) -> v == 1);
    assertEqual(0, r);
    }

    /**
     * Verify value 42 predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_2500
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest025
     * @tc.desc Verify value 42 predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest025() {
    Int32Array arr = new Int32Array(new int[] {10, 42, 99, 7});
    int r = arr.findLastIndex((v) -> v == 42);
    assertEqual(1, r);
    }

    /**
     * Verify value 42 predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_2600
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest026
     * @tc.desc Verify value 42 predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest026() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 42, 99});
    int r = arr.findLastIndex((v) -> v == 42);
    assertEqual(2, r);
    }

    /**
     * Verify +0 v===0 v===-0 SameValueZero
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_2800
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest028
     * @tc.desc Verify +0 v===0 v===-0 SameValueZero
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest028() {
    Int32Array arr = new Int32Array(new int[] {0});
    boolean[] eqZero = {false};
    boolean[] eqNegZero = {false};
    arr.findLastIndex((v) -> {
    eqZero[0] = v == 0;
    eqNegZero[0] = v == -0;
    return true;
    });
    assertTrue(eqZero[0]);
    assertTrue(eqNegZero[0]);
    }

    /**
     * Verify value number typeof "number"
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_2900
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest029
     * @tc.desc Verify value number typeof "number"
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest029() {
    Int32Array arr = new Int32Array(new int[] {7});
    String[] ty = {""};
    arr.findLastIndex((v) -> {
    ty[0] = BasTest.typeofValue(v);
    return true;
    });
    assertEqual("number", ty[0]);
    }

    /**
     * Verify 4294967296 2^32 0x100000000 ToInt32 0 predicate 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_3800
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest038
     * @tc.desc Verify 4294967296 2^32 0x100000000 ToInt32 0 predicate 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest038() {
    Int32Array arr = new Int32Array(new double[] {4294967296L});
    int r = arr.findLastIndex((v) -> v == 0);
    assertEqual(0, r);
    }

    /**
     * Verify 0b1010 =10 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_4100
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest041
     * @tc.desc Verify 0b1010 =10 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest041() {
    Int32Array arr = new Int32Array(new int[] {0b1010});
    int r = arr.findLastIndex((v) -> v == 10);
    assertEqual(0, r);
    }

    /**
     * Verify Int32Array 0 predicate Number.isNaN false Number.NaN
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_4300
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest043
     * @tc.desc Verify Int32Array 0 predicate Number.isNaN false Number.NaN
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest043() {
    Int32Array arr = new Int32Array(new int[] {0});
    int r = arr.findLastIndex((v) -> BasTest.isNaN(v));
    assertEqual(-1, r);
    }

    /**
     * Verify Number.isNaN false -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_4400
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest044
     * @tc.desc Verify Number.isNaN false -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest044() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int r = arr.findLastIndex((v) -> BasTest.isNaN(v));
    assertEqual(-1, r);
    }

    /**
     * Verify 7 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_4600
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest046
     * @tc.desc Verify 7 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest046() {
    Int32Array arr = new Int32Array(new int[] {7, 7, 7});
    boolean[] allSeven = {true};
    arr.findLastIndex((v) -> {
    if (v != 7) {
        allSeven[0] = false;
        }
    return false;
    });
    assertTrue(allSeven[0]);
    }

    /**
     * Verify index=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_4900
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest049
     * @tc.desc Verify index=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest049() {
    Int32Array arr = new Int32Array(new int[] {42});
    int[] seen = {-1};
    arr.findLastIndex((v, i) -> {
    seen[0] = i;
    return false;
    });
    assertEqual(0, seen[0]);
    }

    /**
     * Verify index=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_5000
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest050
     * @tc.desc Verify index=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest050() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
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
     * Verify index=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_5100
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest051
     * @tc.desc Verify index=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest051() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    boolean[] sawOne = {false};
    arr.findLastIndex((v, i) -> {
    if (i == 1) {
        sawOne[0] = true;
        }
    return false;
    });
    assertTrue(sawOne[0]);
    }

    /**
     * Verify index=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_5200
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest052
     * @tc.desc Verify index=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest052() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    boolean[] sawTwo = {false};
    arr.findLastIndex((v, i) -> {
    if (i == 2) {
        sawTwo[0] = true;
        }
    return false;
    });
    assertTrue(sawTwo[0]);
    }

    /**
     * Verify index length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_5300
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest053
     * @tc.desc Verify index length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest053() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] firstIdx = {-99};
    boolean[] called = {false};
    arr.findLastIndex((v, i) -> {
    if ((!called[0])) {
    firstIdx[0] = i;
    called[0] = true;
    }
    return false;
    });
    assertEqual(4, firstIdx[0]);
    }

    /**
     * Verify 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_5400
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest054
     * @tc.desc Verify 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest054() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int[] count = {0};
    int r = arr.findLastIndex((v, i) -> {
        count[0]++;
        return v == 3;
    });
    assertEqual(2, r);
    assertEqual(1, count[0]);
    }

    /**
     * Verify 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_5500
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest055
     * @tc.desc Verify 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest055() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] count = {0};
    arr.findLastIndex((v, i) -> {
    count[0]++;
    return v == 4;
    });
    assertEqual(2, count[0]);
    }

    /**
     * Verify length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_5600
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest056
     * @tc.desc Verify length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest056() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int[] count = {0};
    int r = arr.findLastIndex((v, i) -> {
        count[0]++;
        return v == 10;
    });
    assertEqual(0, r);
    assertEqual(3, count[0]);
    }

    /**
     * Verify index value i=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_5700
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest057
     * @tc.desc Verify index value i=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest057() {
    Int32Array arr = new Int32Array(new int[] {100, 200, 300});
    boolean[] paired = {true};
    arr.findLastIndex((v, i) -> {
    if (i == 0 && v != 100) {
        paired[0] = false;
        }
    return false;
    });
    assertTrue(paired[0]);
    }

    /**
     * Verify index -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_5900
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest059
     * @tc.desc Verify index -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest059() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] allNonNeg = {true};
    arr.findLastIndex((v, i) -> {
    if (i < 0) {
        allNonNeg[0] = false;
        }
    return false;
    });
    assertTrue(allNonNeg[0]);
    }

    /**
     * Verify index length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_6000
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest060
     * @tc.desc Verify index length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest060() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] allInRange = {true};
    arr.findLastIndex((v, i) -> {
    if (i >= arr.length()) {
        allInRange[0] = false;
        }
    return false;
    });
    assertTrue(allInRange[0]);
    }

    /**
     * Verify i
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_6100
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest061
     * @tc.desc Verify i
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest061() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int[] lastI = {-1};
    arr.findLastIndex((v, i) -> {
    lastI[0] = i;
    i = 999;
    return false;
    });
    assertEqual(0, lastI[0]);
    }

    /**
     * Verify array findLastIndex Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_6200
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest062
     * @tc.desc Verify array findLastIndex Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest062() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] sameRef = {false};
    arr.findLastIndex((v, i, a) -> {
    sameRef[0] = (a == arr);
    return true;
    });
    assertTrue(sameRef[0]);
    }

    /**
     * Verify array Int32Array instanceof
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_6300
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest063
     * @tc.desc Verify array Int32Array instanceof
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest063() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    boolean[] sameRef = {false};
    arr.findLastIndex((v, i, a) -> {
    sameRef[0] = (a == arr);
    return true;
    });
    assertTrue(sameRef[0]);
    }

    /**
     * Verify array.length length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_6400
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest064
     * @tc.desc Verify array.length length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest064() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int[] len = {0};
    arr.findLastIndex((v, i, a) -> {
    len[0] = a.length();
    return true;
    });
    assertEqual(4, len[0]);
    }

    /**
     * Verify array $_get value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_6500
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest065
     * @tc.desc Verify array $_get value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest065() {
    Int32Array arr = new Int32Array(new int[] {5, 15, 25});
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
     * Verify array buffer buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_6600
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest066
     * @tc.desc Verify array buffer buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest066() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] sameBuf = {false};
    arr.findLastIndex((v, i, a) -> {
    sameBuf[0] = (a.buffer() == arr.buffer());
    return true;
    });
    assertTrue(sameBuf[0]);
    }

    /**
     * Verify array.BYTES_PER_ELEMENT 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_6700
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest067
     * @tc.desc Verify array.BYTES_PER_ELEMENT 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest067() {
    Int32Array arr = new Int32Array(new int[] {1});
    int[] bpe = {0};
    arr.findLastIndex((v, i, a) -> {
    bpe[0] = a.BYTES_PER_ELEMENT;
    return true;
    });
    assertEqual(4, bpe[0]);
    }

    /**
     * Verify array.byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_6800
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest068
     * @tc.desc Verify array.byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest068() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int[] bo = {-1};
    arr.findLastIndex((v, i, a) -> {
    bo[0] = a.byteOffset();
    return true;
    });
    assertEqual(0, bo[0]);
    }

    /**
     * Verify array.byteLength length*4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_6900
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest069
     * @tc.desc Verify array.byteLength length*4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest069() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int[] bl = {0};
    arr.findLastIndex((v, i, a) -> {
    bl[0] = a.byteLength();
    return true;
    });
    assertEqual(16, bl[0]);
    }

    /**
     * Verify byteOffset=4 findLastIndex array.byteOffset 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_7000
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest070
     * @tc.desc Verify byteOffset=4 findLastIndex array.byteOffset 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest070() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 4, 2);
    int[] bo = {-1};
    arr.findLastIndex((v, i, a) -> {
    bo[0] = a.byteOffset();
    return true;
    });
    assertEqual(4, bo[0]);
    }

    /**
     * Verify array.length 1 value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_7100
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest071
     * @tc.desc Verify array.length 1 value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest071() {
    Int32Array arr = new Int32Array(new int[] {42});
    int[] capturedLen = {0};
    int[] capturedVal = {0};
    int r = arr.findLastIndex((v, i, a) -> {
        capturedLen[0] = a.length();
        capturedVal[0] = v;
        return true;
    });
    assertEqual(0, r);
    assertEqual(1, capturedLen[0]);
    assertEqual(42, capturedVal[0]);
    }

    /**
     * Verify array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_7200
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest072
     * @tc.desc Verify array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest072() {
    Int32Array arr = new Int32Array(0);
    boolean[] called = {false};
    int r = arr.findLastIndex((v, i, a) -> {
        called[0] = true;
        return true;
    });
    assertFalse(called[0]);
    assertEqual(-1, r);
    }

    /**
     * Verify array $_set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_7300
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest073
     * @tc.desc Verify array $_set
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest073() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int[] observed = {0};
    arr.findLastIndex((v, i, a) -> {
    if (i == a.length() - 1) {
    a.set(0, 99);
    }
    if (i == 0) {
    observed[0] = v;
    }
    return false;
    });
    assertEqual(99, observed[0]);
    }

    /**
     * Verify predicate true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_7400
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest074
     * @tc.desc Verify predicate true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest074() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int r = arr.findLastIndex((v, i, a) -> {
        return true;
        });
    assertEqual(2, r);
    }

    /**
     * Verify predicate false -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_7500
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest075
     * @tc.desc Verify predicate false -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest075() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int r = arr.findLastIndex((v) -> false);
    assertEqual(-1, r);
    }

    /**
     * Verify predicate (v>5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_7600
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest076
     * @tc.desc Verify predicate (v>5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest076() {
    Int32Array arr = new Int32Array(new int[] {3, 6, 8, 2, 9});
    int r = arr.findLastIndex((v) -> v > 5);
    assertEqual(4, r);
    }

    /**
     * Verify predicate (v%2===0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_7800
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest078
     * @tc.desc Verify predicate (v%2===0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest078() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int r = arr.findLastIndex((v) -> v % 2 == 0);
    assertEqual(3, r);
    }

    /**
     * Verify predicate (v & 1)===1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_7900
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest079
     * @tc.desc Verify predicate (v & 1)===1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest079() {
    Int32Array arr = new Int32Array(new int[] {0, 1, 2, 3, 4, 5, 6, 7});
    int r = arr.findLastIndex((v) -> (v & 1) == 1);
    assertEqual(7, r);
    }

    /**
     * Verify predicate (v>=10 && v<=20)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_8000
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest080
     * @tc.desc Verify predicate (v>=10 && v<=20)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest080() {
    Int32Array arr = new Int32Array(new int[] {5, 15, 12, 25, 18});
    int r = arr.findLastIndex((v) -> v >= 10 && v <= 20);
    assertEqual(4, r);
    }

    /**
     * Verify predicate flag=true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_8100
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest081
     * @tc.desc Verify predicate flag=true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest081() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean flag = true;
    int r = arr.findLastIndex((v) -> flag);
    assertEqual(2, r);
    }

    /**
     * Verify [1, 2, 3, 4, 5] 5 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_8200
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest082
     * @tc.desc Verify [1, 2, 3, 4, 5] 5 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest082() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int r = arr.findLastIndex((v) -> v == 5);
    assertEqual(4, r);
    }

    /**
     * Verify [5, 4, 3, 2, 1] 1 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_8300
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest083
     * @tc.desc Verify [5, 4, 3, 2, 1] 1 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest083() {
    Int32Array arr = new Int32Array(new int[] {5, 4, 3, 2, 1});
    int r = arr.findLastIndex((v) -> v == 1);
    assertEqual(4, r);
    }

    /**
     * Verify [5, 5] 5 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_8400
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest084
     * @tc.desc Verify [5, 5] 5 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart01TestMindmapTest084() {
    Int32Array arr = new Int32Array(new int[] {5, 5});
    int r = arr.findLastIndex((v) -> v == 5);
    assertEqual(1, r);
    }

    /**
     * Verify predicate v*v>100 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART01_TEST_MINDMAP_8600
     * @tc.name int32ArrayFindLastIndexPart01TestMindmapTest086
     * @tc.desc Verify predicate v*v>100 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
