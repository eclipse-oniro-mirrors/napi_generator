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
import basetype.common.ClassCastError;
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Error;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFindIndexPart01Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFindIndexPart01Test extends BasTest {
    /**
     * Verify findIndex predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_0100
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest001
     * @tc.desc Verify findIndex predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest001() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify 1 predicate int
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_0200
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest002
     * @tc.desc Verify 1 predicate int
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest002() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, i, a) -> v == 20);
    assertEqual(1, r);
    }

    /**
     * Verify predicate number
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_0300
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest003
     * @tc.desc Verify predicate number
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest003() {
    Int32Array arr = new Int32Array(new int[] {4, 5, 6});
    int r = arr.findIndex((v, i, a) -> v > 100);
    assertEqual(-1, r);
    }

    /**
     * Verify predicate Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_0400
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest004
     * @tc.desc Verify predicate Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest004() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    int r = arr.findIndex((v, i, a) -> v == 8);
    assertEqual(1, r);
    }

    /**
     * Verify value index/array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_0500
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest005
     * @tc.desc Verify value index/array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest005() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int r = arr.findIndex((v) -> v == 30);
    assertEqual(2, r);
    }

    /**
     * Verify value index array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_0600
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest006
     * @tc.desc Verify value index array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest006() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int r = arr.findIndex((v, i) -> i == 1);
    assertEqual(1, r);
    }

    /**
     * Verify 0 ()=>boolean true 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_0700
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest007
     * @tc.desc Verify 0 ()=>boolean true 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest007() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    int r = arr.findIndex((index) -> true);
    assertEqual(0, r);
    }

    /**
     * Verify value 0 predicate 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_0800
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest008
     * @tc.desc Verify value 0 predicate 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest008() {
    Int32Array arr = new Int32Array(new int[] {0, 1, 2, 3});
    int r = arr.findIndex((v) -> v == 0);
    assertEqual(0, r);
    }

    /**
     * Verify value 0 predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_0900
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest009
     * @tc.desc Verify value 0 predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest009() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 0, 4});
    int r = arr.findIndex((v) -> v == 0);
    assertEqual(2, r);
    }

    /**
     * Verify value 0 predicate length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_1000
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest010
     * @tc.desc Verify value 0 predicate length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest010() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 0});
    int r = arr.findIndex((v) -> v == 0);
    assertEqual(2, r);
    }

    /**
     * Verify value 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_1100
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest011
     * @tc.desc Verify value 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest011() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int r = arr.findIndex((v) -> v == 1);
    assertEqual(0, r);
    }

    /**
     * Verify value 42
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_1300
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest013
     * @tc.desc Verify value 42
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest013() {
    Int32Array arr = new Int32Array(new int[] {10, 42, 99});
    int r = arr.findIndex((v) -> v == 42);
    assertEqual(1, r);
    }

    /**
     * Verify 4294967296 2^32 0 predicate 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_2500
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest025
     * @tc.desc Verify 4294967296 2^32 0 predicate 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest025() {
    Int32Array arr = new Int32Array(new double[] {4294967296L});
    int r = arr.findIndex((v) -> v == 0);
    assertEqual(0, r);
    }

    /**
     * Verify 3.5 ToInt32 3 predicate 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_2700
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest027
     * @tc.desc Verify 3.5 ToInt32 3 predicate 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest027() {
    Int32Array arr = new Int32Array(new double[] {3.5});
    int r = arr.findIndex((v) -> v == 3);
    assertEqual(0, r);
    }

    /**
     * Verify 3.999 3 predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_2900
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest029
     * @tc.desc Verify 3.999 3 predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest029() {
    Int32Array arr = new Int32Array(new double[] {3.999});
    int r = arr.findIndex((v) -> v == 3);
    assertEqual(0, r);
    }

    /**
     * Verify 3.5 predicate 3.5 -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_3000
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest030
     * @tc.desc Verify 3.5 predicate 3.5 -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest030() {
    Int32Array arr = new Int32Array(new double[] {3.5});
    int r = arr.findIndex((v) -> Double.compare(v, 3.5) == 0);
    assertEqual(-1, r);
    }

    /**
     * Verify Number.NaN ToInt32 0 predicate 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_3200
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest032
     * @tc.desc Verify Number.NaN ToInt32 0 predicate 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest032() {
    Int32Array arr = new Int32Array(new double[] {Double.NaN});
    int r = arr.findIndex((v) -> v == 0);
    assertEqual(0, r);
    }

    /**
     * Verify +Number.POSITIVE_INFINITY ToInt32 0 predicate 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_3300
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest033
     * @tc.desc Verify +Number.POSITIVE_INFINITY ToInt32 0 predicate 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest033() {
    Int32Array arr = new Int32Array(new double[] {Double.POSITIVE_INFINITY});
    int r = arr.findIndex((v) -> v == 0);
    assertEqual(0, r);
    }

    /**
     * Verify Double.NEGATIVE_INFINITY ToInt32 0 predicate 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_3400
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest034
     * @tc.desc Verify Double.NEGATIVE_INFINITY ToInt32 0 predicate 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest034() {
    Int32Array arr = new Int32Array(new double[] {Double.NEGATIVE_INFINITY});
    int r = arr.findIndex((v) -> v == 0);
    assertEqual(0, r);
    }

    /**
     * Verify Number.NaN 0 predicate v!==v Number.NaN -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_3500
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest035
     * @tc.desc Verify Number.NaN 0 predicate v!==v Number.NaN -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest035() {
    Int32Array arr = new Int32Array(new double[] {Double.NaN});
    int r = arr.findIndex((v) -> v != v);
    assertEqual(-1, r);
    }

    /**
     * Verify 0 Number.NaN 0 predicate 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_3600
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest036
     * @tc.desc Verify 0 Number.NaN 0 predicate 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest036() {
    Int32Array arr = new Int32Array(new double[] {Double.NaN, 0, 1});
    int r = arr.findIndex((v) -> v == 0);
    assertEqual(0, r);
    }

    /**
     * Verify 0xFF predicate 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_3700
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest037
     * @tc.desc Verify 0xFF predicate 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest037() {
    Int32Array arr = new Int32Array(new int[] {0xFF});
    int[] seen = {0};
    arr.findIndex((v) -> {
        seen[0] = v;
        return false;
    });
    assertEqual(255, seen[0]);
    }

    /**
     * Verify 0o77 predicate 63
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_3800
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest038
     * @tc.desc Verify 0o77 predicate 63
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest038() {
    Int32Array arr = new Int32Array(new int[] {077});
    int[] seen = {0};
    arr.findIndex((v) -> {
        seen[0] = v;
        return false;
    });
    assertEqual(63, seen[0]);
    }

    /**
     * Verify 0b1010 predicate 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_3900
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest039
     * @tc.desc Verify 0b1010 predicate 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest039() {
    Int32Array arr = new Int32Array(new int[] {0b1010});
    int[] seen = {0};
    arr.findIndex((v) -> {
        seen[0] = v;
        return false;
    });
    assertEqual(10, seen[0]);
    }

    /**
     * Verify index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_4000
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest040
     * @tc.desc Verify index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest040() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int[] seenIdx = {-1};
    arr.findIndex((v, i) -> {
        seenIdx[0] = i;
        return true;
    });
    assertEqual(0, seenIdx[0]);
    }

    /**
     * Verify index length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_4100
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest041
     * @tc.desc Verify index length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest041() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int[] lastIdx = {-1};
    arr.findIndex((v, i) -> {
        lastIdx[0] = i;
        return v == 40;
    });
    assertEqual(arr.length() - 1, lastIdx[0]);
    }

    /**
     * Verify index 0 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_4200
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest042
     * @tc.desc Verify index 0 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest042() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    List<Integer> indices = new ArrayList<>();
    arr.findIndex((v, i) -> {
        indices.add(i);
        return false;
    });
    assertEqual(4, indices.size());
    assertEqualInt(0, indices.get(0));
    assertEqualInt(1, indices.get(1));
    assertEqualInt(2, indices.get(2));
    assertEqualInt(3, indices.get(3));
    }

    /**
     * Verify index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_4300
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest043
     * @tc.desc Verify index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest043() {
    Int32Array arr = new Int32Array(new int[] {42});
    int[] seenIdx = {-1};
    arr.findIndex((v, i) -> {
        seenIdx[0] = i;
        return true;
    });
    assertEqual(0, seenIdx[0]);
    }

    /**
     * Verify findIndex on empty Int32Array returns -1 and callback is never invoked
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_4400
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest044
     * @tc.desc Verify findIndex on empty Int32Array returns -1 and callback is never invoked
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest044() {
    Int32Array arr = new Int32Array(0);
    boolean[] called = {false};
    int r = arr.findIndex((v, i) -> {
        called[0] = true;
        return true;
    });
    assertEqual(-1, r);
    assertFalse(called[0]);
    }

    /**
     * Verify index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_4500
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest045
     * @tc.desc Verify index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest045() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] maxSeenIdx = {-1};
    int r = arr.findIndex((v, i) -> {
        maxSeenIdx[0] = i;
        return v == 1;
    });
    assertEqual(0, r);
    assertEqual(0, maxSeenIdx[0]);
    }

    /**
     * Verify index 0 length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_4600
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest046
     * @tc.desc Verify index 0 length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest046() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int[] callCount = {0};
    int r = arr.findIndex((v, i) -> {
        callCount[0] = callCount[0] + 1;
        return false;
    });
    assertEqual(-1, r);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify length-1 true length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_4700
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest047
     * @tc.desc Verify length-1 true length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest047() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] cnt = {0};
    int r = arr.findIndex((v, i) -> {
        cnt[0]++;
        return i == 4;
    });
    assertEqual(4, r);
    assertEqual(5, cnt[0]);
    }

    /**
     * Verify array Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_4800
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest048
     * @tc.desc Verify array Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest048() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int[] bpe = {0};
    arr.findIndex((v, i, a) -> {
        bpe[0] = a.BYTES_PER_ELEMENT;
        return true;
    });
    assertEqual(4, bpe[0]);
    }

    /**
     * Verify array ===
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_4900
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest049
     * @tc.desc Verify array ===
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest049() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] sameRef = {false};
    arr.findIndex((v, i, a) -> {
        sameRef[0] = (a == arr);
        return true;
    });
    assertTrue(sameRef[0]);
    }

    /**
     * Verify array.length length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_5000
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest050
     * @tc.desc Verify array.length length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest050() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int[] capturedLen = {-1};
    arr.findIndex((v, i, a) -> {
        capturedLen[0] = a.length();
        return v == 30;
    });
    assertEqual(4, capturedLen[0]);
    }

    /**
     * Verify array.BYTES_PER_ELEMENT 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_5100
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest051
     * @tc.desc Verify array.BYTES_PER_ELEMENT 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest051() {
    Int32Array arr = new Int32Array(new int[] {1});
    int[] bpe = {0};
    arr.findIndex((v, i, a) -> {
        bpe[0] = a.BYTES_PER_ELEMENT;
        return true;
    });
    assertEqual(4, bpe[0]);
    }

    /**
     * Verify array.$_get(i) value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_5200
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest052
     * @tc.desc Verify array.$_get(i) value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest052() {
    Int32Array arr = new Int32Array(new int[] {7, 14, 21, 28});
    boolean[] allConsistent = {true};
    arr.findIndex((v, i, a) -> {
    if (v != a.get(i)) {
        allConsistent[0] = false;
        }
    return false;
    });
    assertTrue(allConsistent[0]);
    }

    /**
     * Verify array $_set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_5300
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest053
     * @tc.desc Verify array $_set
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest053() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.findIndex((v, i, a) -> {
        a.set(2, 99);
        return true;
    });
    assertEqualInt(99, arr.get(2));
    }

    /**
     * Verify subarray findIndex array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_5400
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest054
     * @tc.desc Verify subarray findIndex array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest054() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array child = parent.subarray(1, 4);
    int[] childLen = {-1};
    boolean[] sameAsParent = {true};
    child.findIndex((v, i, a) -> {
    childLen[0] = a.length();
    sameAsParent[0] = (a == parent);
    return true;
    });
    assertEqual(3, childLen[0]);
    assertFalse(sameAsParent[0]);
    }

    /**
     * Verify of array.buffer buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_5500
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest055
     * @tc.desc Verify of array.buffer buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest055() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    ArrayBuffer bufRef = arr.buffer();
    boolean[] sameBuf = {false};
    arr.findIndex((v, i, a) -> {
        sameBuf[0] = (a.buffer() == bufRef);
        return true;
    });
    assertTrue(sameBuf[0]);
    }

    /**
     * Verify true 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_5600
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest056
     * @tc.desc Verify true 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest056() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7});
    int r = arr.findIndex((v, i, a) -> true);
    assertEqual(0, r);
    }

    /**
     * Verify false -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_5700
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest057
     * @tc.desc Verify false -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest057() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int r = arr.findIndex((v, i, a) -> false);
    assertEqual(-1, r);
    }

    /**
     * Verify 3 true 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_5800
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest058
     * @tc.desc Verify 3 true 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest058() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int[] cnt = {0};
    int r = arr.findIndex((v, i, a) -> {
        cnt[0]++;
        return i == 2;
    });
    assertEqual(2, r);
    assertEqual(3, cnt[0]);
    }

    /**
     * Verify findIndex returns first index where value is divisible by 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_5900
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest059
     * @tc.desc Verify findIndex returns first index where value is divisible by 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest059() {
    Int32Array arr = new Int32Array(new int[] {2, 4, 6, 8, 10});
    int r = arr.findIndex((v, i, a) -> v % 4 == 0);
    assertEqual(1, r);
    }

    /**
     * Verify v>
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_6000
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest060
     * @tc.desc Verify v>
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest060() {
    Int32Array arr = new Int32Array(new int[] {1, 3, 5, 7, 9});
    int r = arr.findIndex((v, i, a) -> v > 6);
    assertEqual(3, r);
    }

    /**
     * Verify v%2===0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_6200
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest062
     * @tc.desc Verify v%2===0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest062() {
    Int32Array arr = new Int32Array(new int[] {1, 3, 5, 6, 7});
    int r = arr.findIndex((v, i, a) -> v % 2 == 0);
    assertEqual(3, r);
    }

    /**
     * Verify predicate i===a.length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_6300
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest063
     * @tc.desc Verify predicate i===a.length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest063() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int r = arr.findIndex((v, i, a) -> i == a.length() - 1);
    assertEqual(3, r);
    }

    /**
     * Verify predicate v!==target target
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_6400
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest064
     * @tc.desc Verify predicate v!==target target
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest064() {
    Int32Array arr = new Int32Array(new int[] {5, 5, 6, 5});
    int r = arr.findIndex((v, i, a) -> v != 5);
    assertEqual(2, r);
    }

    /**
     * Verify predicate === -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_6500
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest065
     * @tc.desc Verify predicate === -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest065() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, i, a) -> v == 999);
    assertEqual(-1, r);
    }

    /**
     * Verify predicate i%2===0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_6600
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest066
     * @tc.desc Verify predicate i%2===0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest066() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int r = arr.findIndex((v, i, a) -> i % 2 == 0);
    assertEqual(0, r);
    }

    /**
     * Verify predicate i%2===1 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_6700
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest067
     * @tc.desc Verify predicate i%2===1 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest067() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0});
    int r = arr.findIndex((v, i, a) -> i % 2 == 1);
    assertEqual(1, r);
    }

    /**
     * Verify predicate i>=length -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_6800
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest068
     * @tc.desc Verify predicate i>=length -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest068() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int r = arr.findIndex((v, i, a) -> i >= a.length());
    assertEqual(-1, r);
    }

    /**
     * Verify predicate i<0 -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_6900
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest069
     * @tc.desc Verify predicate i<0 -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest069() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int r = arr.findIndex((v, i, a) -> i < 0);
    assertEqual(-1, r);
    }

    /**
     * Verify predicate Error findIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_7000
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest070
     * @tc.desc Verify predicate Error findIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest070() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    arr.findIndex((v, i, a) -> {
        return BasTest.throwTestError("predicate error");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate Error
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_7100
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest071
     * @tc.desc Verify predicate Error
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest071() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] visitedFirst = {false};
    try {
    arr.findIndex((v, i, a) -> {
    if (i == 0) {
        visitedFirst[0] = true;
        return false;
        }
    return BasTest.throwTestError("bang");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertTrue(visitedFirst[0]);
    }
    }

    /**
     * Verify predicate length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_7200
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest072
     * @tc.desc Verify predicate length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest072() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int lenBefore = arr.length();
    try {
    arr.findIndex((v, i, a) -> {
        return BasTest.throwTestError("oops");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(lenBefore, arr.length());
    }

    /**
     * Verify predicate RangeError RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_7300
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest073
     * @tc.desc Verify predicate RangeError RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest073() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    arr.findIndex((v, i, a) -> {
        throw new RangeError("out of range");
        });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate TypeError TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_7400
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest074
     * @tc.desc Verify predicate TypeError TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest074() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    arr.findIndex((v, i, a) -> {
        throw new TypeError("type bad");
        });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array.from predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_7500
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest075
     * @tc.desc Verify Int32Array.from predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest075() {
    Int32Array arr = Int32Array.from(new int[] {5, 10, 15});
    int r = arr.findIndex((v, i, a) -> v == 10);
    assertEqual(1, r);
    }

    /**
     * Verify ArrayBuffer predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_7700
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest077
     * @tc.desc Verify ArrayBuffer predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest077() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array view = new Int32Array(buf);
    view.set(0, 11);
    view.set(1, 22);
    view.set(2, 33);
    int r = view.findIndex((v, i, a) -> v == 22);
    assertEqual(1, r);
    }

    /**
     * Verify ArrayBuffer byteOffset=4 predicate 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_7800
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest078
     * @tc.desc Verify ArrayBuffer byteOffset=4 predicate 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest078() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 4, 2);
    view.set(0, 77);
    view.set(1, 88);
    int[] firstIdx = {-1};
    int r = view.findIndex((v, i, a) -> {
        firstIdx[0] = i;
        return v == 88;
    });
    assertEqual(1, firstIdx[0]);
    assertEqual(1, r);
    assertEqual(2, view.length());
    }

    /**
     * Verify Int32Array predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_7900
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest079
     * @tc.desc Verify Int32Array predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest079() {
    Int32Array src = new Int32Array(new int[] {10, 20, 30});
    Int32Array dst = new Int32Array(src);
    int r = dst.findIndex((v, i, a) -> v == 20);
    assertEqual(1, r);
    }

    /**
     * Verify 0 predicate 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_8000
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest080
     * @tc.desc Verify 0 predicate 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest080() {
    Int32Array arr = new Int32Array(3);
    int r = arr.findIndex((v, i, a) -> v == 0);
    assertEqual(0, r);
    }

    /**
     * Verify 0 predicate 0 -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_8100
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest081
     * @tc.desc Verify 0 predicate 0 -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest081() {
    Int32Array arr = new Int32Array(3);
    int r = arr.findIndex((v, i, a) -> v != 0);
    assertEqual(-1, r);
    }

    /**
     * Verify 7 predicate 7 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_8200
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest082
     * @tc.desc Verify 7 predicate 7 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest082() {
    Int32Array arr = new Int32Array(new int[] {7, 7, 7, 7});
    int r = arr.findIndex((v, i, a) -> v == 7);
    assertEqual(0, r);
    }

    /**
     * Verify 0 predicate 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_8300
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest083
     * @tc.desc Verify 0 predicate 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest083() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0});
    int r = arr.findIndex((v, i, a) -> v == 0);
    assertEqual(0, r);
    }

    /**
     * Verify predicate let
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_8600
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest086
     * @tc.desc Verify predicate let
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart01TestMindmapTest086() {
    int target = 25;
    Int32Array arr = new Int32Array(new int[] {10, 20, 25, 30});
    int r = arr.findIndex((v, i, a) -> v == target);
    assertEqual(2, r);
    }

    /**
     * Verify predicate array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART01_TEST_MINDMAP_9500
     * @tc.name int32ArrayFindIndexPart01TestMindmapTest095
     * @tc.desc Verify predicate array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
