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
 * Int32ArrayEveryPart01Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayEveryPart01Test extends BasTest {
    /**
     * Verify every returns true when all elements satisfy predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_0100
     * @tc.name int32ArrayEveryPart01TestMindmapTest001
     * @tc.desc Verify every returns true when all elements satisfy predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest001() {
    Int32Array arr = new Int32Array(new int[] {2, 4, 6});
    int[] callCount = {0};
    boolean r = arr.every((e, i, a) -> {
        callCount[0]++;
        return e > 0;
    });
    assertTrue(r);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify every returns true when all elements satisfy predicate (values > 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_0300
     * @tc.name int32ArrayEveryPart01TestMindmapTest003
     * @tc.desc Verify every returns true when all elements satisfy predicate (values > 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest003() {
    Int32Array arr = new Int32Array(new int[] {11, 22, 33});
    int[] callCount = {0};
    boolean r = arr.every((e, unusedIndex, array) -> {
        callCount[0]++;
        return e > 5;
    });
    assertTrue(r);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify every returns false when element fails predicate (e > 10)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_0400
     * @tc.name int32ArrayEveryPart01TestMindmapTest004
     * @tc.desc Verify every returns false when element fails predicate (e > 10)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest004() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int[] callCount = {0};
    boolean r = arr.every((e, unusedIndex, array) -> {
        callCount[0]++;
        return e > 10;
    });
    assertFalse(r);
    assertEqual(1, callCount[0]);
    }

    /**
     * Verify every returns true when all elements less than 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_0500
     * @tc.name int32ArrayEveryPart01TestMindmapTest005
     * @tc.desc Verify every returns true when all elements less than 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest005() {
    Int32Array arr = new Int32Array(new int[] {4, 5, 6});
    int[] callCount = {0};
    boolean r = arr.every((e, unusedIndex, array) -> {
        callCount[0]++;
        return e < 10;
    });
    assertTrue(r);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify every returns true when all elements positive
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_0600
     * @tc.name int32ArrayEveryPart01TestMindmapTest006
     * @tc.desc Verify every returns true when all elements positive
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest006() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    int[] callCount = {0};
    boolean r = arr.every((e, unusedIndex, array) -> {
        callCount[0]++;
        return e > 0;
    });
    assertTrue(r);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify predicate receives element value 63 correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_0700
     * @tc.name int32ArrayEveryPart01TestMindmapTest007
     * @tc.desc Verify predicate receives element value 63 correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest007() {
    Int32Array arr = new Int32Array(new int[] {63});
    int[] received = {0};
    boolean r = arr.every((e, i, a) -> {
        received[0] = e;
        return true;
    });
    assertTrue(r);
    assertEqual(63, received[0]);
    }

    /**
     * Verify predicate receives element value 0 correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_0800
     * @tc.name int32ArrayEveryPart01TestMindmapTest008
     * @tc.desc Verify predicate receives element value 0 correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest008() {
    Int32Array arr = new Int32Array(new int[] {0});
    int[] received = {777};
    boolean r = arr.every((e, i, a) -> {
        received[0] = e;
        return true;
    });
    assertTrue(r);
    assertEqual(0, received[0]);
    }

    /**
     * Verify predicate receives element value 1 (minimum positive) correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_0900
     * @tc.name int32ArrayEveryPart01TestMindmapTest009
     * @tc.desc Verify predicate receives element value 1 (minimum positive) correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest009() {
    Int32Array arr = new Int32Array(new int[] {1});
    int[] received = {0};
    boolean r = arr.every((e, i, a) -> {
        received[0] = e;
        return true;
    });
    assertTrue(r);
    assertEqual(1, received[0]);
    }

    /**
     * Verify every element in all-zero array is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_1300
     * @tc.name int32ArrayEveryPart01TestMindmapTest013
     * @tc.desc Verify every element in all-zero array is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest013() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0});
    boolean[] allZero = {true};
    boolean r = arr.every((e, i, a) -> {
        if (e != 0) {
            allZero[0] = false;
        }
        return true;
        });
    assertTrue(r);
    assertTrue(allZero[0]);
    }

    /**
     * Verify every element in uniform array [9, 9, 9, 9, 9] is 9
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_1400
     * @tc.name int32ArrayEveryPart01TestMindmapTest014
     * @tc.desc Verify every element in uniform array [9, 9, 9, 9, 9] is 9
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest014() {
    Int32Array arr = new Int32Array(new int[] {9, 9, 9, 9, 9});
    int[] expected = {9};
    boolean[] mismatch = {false};
    arr.every((e, i, a) -> {
        if (e != expected[0]) {
            mismatch[0] = true;
        }
        return true;
        });
    assertFalse(mismatch[0]);
    }

    /**
     * Verify first element passed to predicate is 17 in multi-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_1500
     * @tc.name int32ArrayEveryPart01TestMindmapTest015
     * @tc.desc Verify first element passed to predicate is 17 in multi-element array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest015() {
    Int32Array arr = new Int32Array(new int[] {17, 18, 19});
    int[] first = {0};
    arr.every((e, i, a) -> {
        first[0] = e;
        return i < 0;
    });
    assertEqual(17, first[0]);
    }

    /**
     * Verify predicate receives hex literal 0xAB as decimal 171
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_2300
     * @tc.name int32ArrayEveryPart01TestMindmapTest023
     * @tc.desc Verify predicate receives hex literal 0xAB as decimal 171
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest023() {
    Int32Array arr = new Int32Array(new int[] {0xAB});
    int[] received = {0};
    arr.every((e, i, a) -> {
        received[0] = e;
        return true;
    });
    assertEqual(171, received[0]);
    }

    /**
     * Verify predicate receives binary literal 0b1100 as decimal 12
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_2500
     * @tc.name int32ArrayEveryPart01TestMindmapTest025
     * @tc.desc Verify predicate receives binary literal 0b1100 as decimal 12
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest025() {
    Int32Array arr = new Int32Array(new int[] {0b1100});
    int[] received = {0};
    arr.every((e, i, a) -> {
        received[0] = e;
        return true;
    });
    assertEqual(12, received[0]);
    }

    /**
     * Verify -0.7 is truncated to 0 by ToInt32 (toward zero) via $_set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_2700
     * @tc.name int32ArrayEveryPart01TestMindmapTest027
     * @tc.desc Verify -0.7 is truncated to 0 by ToInt32 (toward zero) via $_set
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest027() {
    Int32Array arr = new Int32Array(1);
    arr.set(0, -0.7);
    int[] received = {777};
    arr.every((e, i, a) -> {
        received[0] = e;
        return true;
    });
    assertEqual(0, received[0]);
    }

    /**
     * Verify 7.9 is truncated to 7 by ToInt32 (toward zero) via $_set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_2900
     * @tc.name int32ArrayEveryPart01TestMindmapTest029
     * @tc.desc Verify 7.9 is truncated to 7 by ToInt32 (toward zero) via $_set
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest029() {
    Int32Array arr = new Int32Array(1);
    arr.set(0, 7.9);
    int[] received = {-999};
    arr.every((e, i, a) -> {
        received[0] = e;
        return true;
    });
    assertEqual(7, received[0]);
    }

    /**
     * Verify 4294967296 (2^32) wraps to 0 via ToInt32 overflow via $_set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_3400
     * @tc.name int32ArrayEveryPart01TestMindmapTest034
     * @tc.desc Verify 4294967296 (2^32) wraps to 0 via ToInt32 overflow via $_set
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest034() {
    Int32Array arr = new Int32Array(1);
    arr.set(0, 4294967296L);
    int[] received = {555};
    arr.every((e, i, a) -> {
        received[0] = e;
        return true;
    });
    assertEqual(0, received[0]);
    }

    /**
     * Verify 4294967297 (2^32+1) wraps to 1 via ToInt32 overflow via $_set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_3500
     * @tc.name int32ArrayEveryPart01TestMindmapTest035
     * @tc.desc Verify 4294967297 (2^32+1) wraps to 1 via ToInt32 overflow via $_set
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest035() {
    Int32Array arr = new Int32Array(1);
    arr.set(0, 4294967297L);
    int[] received = {0};
    arr.every((e, i, a) -> {
        received[0] = e;
        return true;
    });
    assertEqual(1, received[0]);
    }

    /**
     * Verify predicate receives index 0 for single-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_3600
     * @tc.name int32ArrayEveryPart01TestMindmapTest036
     * @tc.desc Verify predicate receives index 0 for single-element array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest036() {
    Int32Array arr = new Int32Array(new int[] {63});
    int[] receivedIdx = {-1};
    arr.every((e, i, a) -> {
        receivedIdx[0] = i;
        return true;
    });
    assertEqual(0, receivedIdx[0]);
    }

    /**
     * Verify first callback invocation receives index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_3700
     * @tc.name int32ArrayEveryPart01TestMindmapTest037
     * @tc.desc Verify first callback invocation receives index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest037() {
    Int32Array arr = new Int32Array(new int[] {11, 22});
    int[] firstIdx = {-1};
    arr.every((e, i, a) -> {
        if (firstIdx[0] == -1) {
            firstIdx[0] = i;
        }
        return i < 1;
        });
    assertEqual(0, firstIdx[0]);
    }

    /**
     * Verify second callback invocation (callCnt===2) receives index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_3800
     * @tc.name int32ArrayEveryPart01TestMindmapTest038
     * @tc.desc Verify second callback invocation (callCnt===2) receives index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest038() {
    Int32Array arr = new Int32Array(new int[] {11, 22, 33});
    int[] secondIdx = {-1};
    int[] callCnt = {0};
    arr.every((e, i, a) -> {
        callCnt[0]++;
        if (callCnt[0] == 2) {
        secondIdx[0] = i;
        }
    return e != 999;
    });
    assertEqual(1, secondIdx[0]);
    }

    /**
     * Verify last callback receives index length-1 when all elements satisfy predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_3900
     * @tc.name int32ArrayEveryPart01TestMindmapTest039
     * @tc.desc Verify last callback receives index length-1 when all elements satisfy predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest039() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] lastIdx = {-1};
    arr.every((e, i, a) -> {
        lastIdx[0] = i;
        return true;
    });
    assertEqual(arr.length() - 1, lastIdx[0]);
    }

    /**
     * Verify predicate receives indices in strictly increasing order 0, 1, 2, 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_4000
     * @tc.name int32ArrayEveryPart01TestMindmapTest040
     * @tc.desc Verify predicate receives indices in strictly increasing order 0, 1, 2, 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest040() {
    Int32Array arr = new Int32Array(new int[] {11, 22, 33, 44});
    int[] expected = {0};
    boolean[] ordered = {true};
    arr.every((e, i, a) -> {
    if (i != expected[0]) {
        ordered[0] = false;
        }
    expected[0]++;
    return true;
    });
    assertTrue(ordered[0]);
    }

    /**
     * Verify a[i] in predicate matches element parameter e (position consistency)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_4100
     * @tc.name int32ArrayEveryPart01TestMindmapTest041
     * @tc.desc Verify a[i] in predicate matches element parameter e (position consistency)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest041() {
    Int32Array arr = new Int32Array(new int[] {7, 14, 21, 28});
    boolean[] consistent = {true};
    arr.every((e, i, a) -> {
    if (a.get(i) != e) {
        consistent[0] = false;
        }
    return true;
    });
    assertTrue(consistent[0]);
    }

    /**
     * Verify third parameter array is the same Int32Array reference as caller
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_4300
     * @tc.name int32ArrayEveryPart01TestMindmapTest043
     * @tc.desc Verify third parameter array is the same Int32Array reference as caller
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest043() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] sameRef = {false};
    arr.every((e, i, a) -> {
        if (a == arr) {
            sameRef[0] = true;
        }
        return i < 0;
        });
    assertTrue(sameRef[0]);
    }

    /**
     * Verify array.length reported in predicate matches original array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_4400
     * @tc.name int32ArrayEveryPart01TestMindmapTest044
     * @tc.desc Verify array.length reported in predicate matches original array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest044() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    int[] reportedLen = {0};
    arr.every((e, i, a) -> {
        reportedLen[0] = a.length();
        return i < 0;
    });
    assertEqual(arr.length(), reportedLen[0]);
    }

    /**
     * Verify $_get(i) via array parameter matches $_get(i) on original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_4500
     * @tc.name int32ArrayEveryPart01TestMindmapTest045
     * @tc.desc Verify $_get(i) via array parameter matches $_get(i) on original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest045() {
    Int32Array arr = new Int32Array(new int[] {13, 26, 39});
    boolean[] match = {true};
    arr.every((e, i, a) -> {
    if (a.get(i) != arr.get(i)) {
        match[0] = false;
        }
    return true;
    });
    assertTrue(match[0]);
    }

    /**
     * Verify array parameter identity is the original Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_4600
     * @tc.name int32ArrayEveryPart01TestMindmapTest046
     * @tc.desc Verify array parameter identity is the original Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest046() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    boolean[] sameRef = {false};
    arr.every((e, i, a) -> {
        sameRef[0] = a == arr;
        return i < 0;
    });
    assertTrue(sameRef[0]);
    }

    /**
     * Verify $_set via array parameter in predicate is visible to subsequent callbacks
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_4700
     * @tc.name int32ArrayEveryPart01TestMindmapTest047
     * @tc.desc Verify $_set via array parameter in predicate is visible to subsequent callbacks
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest047() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0});
    int[] observed = {-1};
    arr.every((e, i, a) -> {
    if (i == 0) {
        a.set(1, 77);
        return true;
        }
    if (i == 1) {
        observed[0] = e;
        return true;
        }
    return false;
    });
    assertEqual(77, observed[0]);
    }

    /**
     * Verify array.BYTES_PER_ELEMENT reports 4 for Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_4800
     * @tc.name int32ArrayEveryPart01TestMindmapTest048
     * @tc.desc Verify array.BYTES_PER_ELEMENT reports 4 for Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest048() {
    Int32Array arr = new Int32Array(new int[] {1});
    int[] bpe = {0};
    arr.every((e, i, a) -> {
        bpe[0] = a.BYTES_PER_ELEMENT;
        return true;
    });
    assertEqual(4, bpe[0]);
    }

    /**
     * Verify every returns true when all elements are even (arrow function predicate)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_4900
     * @tc.name int32ArrayEveryPart01TestMindmapTest049
     * @tc.desc Verify every returns true when all elements are even (arrow function predicate)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest049() {
    Int32Array arr = new Int32Array(new int[] {2, 4, 6, 8});
    int[] callCount = {0};
    boolean r = arr.every((e, i, a) -> {
        callCount[0]++;
        return e % 2 == 0;
    });
    assertTrue(r);
    assertEqual(4, callCount[0]);
    }

    /**
     * Verify predicate works when only using element parameter (ignoring index and array)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_5000
     * @tc.name int32ArrayEveryPart01TestMindmapTest050
     * @tc.desc Verify predicate works when only using element parameter (ignoring index and array)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest050() {
    Int32Array arr = new Int32Array(new int[] {3, 6, 9});
    int[] callCount = {0};
    boolean r = arr.every((e) -> {
        callCount[0]++;
        return e % 3 == 0;
    });
    assertTrue(r);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify predicate works when using element and index parameters only
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_5100
     * @tc.name int32ArrayEveryPart01TestMindmapTest051
     * @tc.desc Verify predicate works when using element and index parameters only
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest051() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int[] callCount = {0};
    boolean r = arr.every((e, i) -> {
        callCount[0]++;
        return i < 4;
    });
    assertTrue(r);
    assertEqual(4, callCount[0]);
    }

    /**
     * Verify predicate reads external closure variable target for equality check
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_5200
     * @tc.name int32ArrayEveryPart01TestMindmapTest052
     * @tc.desc Verify predicate reads external closure variable target for equality check
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest052() {
    Int32Array arr = new Int32Array(new int[] {25, 25, 25});
    int target = 25;
    int[] callCount = {0};
    boolean r = arr.every((e, i, a) -> {
        callCount[0]++;
        return e == target;
    });
    assertTrue(r);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify predicate checks non-decreasing order via array parameter a[i-1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_5300
     * @tc.name int32ArrayEveryPart01TestMindmapTest053
     * @tc.desc Verify predicate checks non-decreasing order via array parameter a[i-1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest053() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int[] callCount = {0};
    boolean r = arr.every((e, i, a) -> {
        callCount[0]++;
        if (i == 0) {
        return true;
        }
        return a.get(i - 1) <= e;
        });
    assertTrue(r);
    assertEqual(4, callCount[0]);
    }

    /**
     * Verify first element received from Int32Array.of-constructed array is 13
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_5400
     * @tc.name int32ArrayEveryPart01TestMindmapTest054
     * @tc.desc Verify first element received from Int32Array.of-constructed array is 13
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest054() {
    Int32Array arr = Int32Array.of(13, 26, 39);
    int[] first = {0};
    arr.every((e, i, a) -> {
        first[0] = e;
        return i < 0;
    });
    assertEqual(13, first[0]);
    }

    /**
     * Verify first element received from Int32Array.from-constructed array is 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_5500
     * @tc.name int32ArrayEveryPart01TestMindmapTest055
     * @tc.desc Verify first element received from Int32Array.from-constructed array is 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest055() {
    Int32Array arr = Int32Array.from(new int[] {7, 14, 21});
    int[] first = {0};
    arr.every((e, i, a) -> {
        first[0] = e;
        return i < 0;
    });
    assertEqual(7, first[0]);
    }

    /**
     * Verify predicate receives element 0 for zero-initialized ArrayBuffer-backed Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_5600
     * @tc.name int32ArrayEveryPart01TestMindmapTest056
     * @tc.desc Verify predicate receives element 0 for zero-initialized ArrayBuffer-backed Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest056() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 0, 4);
    int[] received = {-1};
    arr.every((e, i, a) -> {
        received[0] = e;
        return i < 0;
    });
    assertEqual(0, received[0]);
    }

    /**
     * Verify length-constructed Int32Array initializes elements to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_5700
     * @tc.name int32ArrayEveryPart01TestMindmapTest057
     * @tc.desc Verify length-constructed Int32Array initializes elements to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest057() {
    Int32Array arr = new Int32Array(3);
    int[] first = {-1};
    arr.every((e, i, a) -> {
        first[0] = e;
        return i < 0;
    });
    assertEqual(0, first[0]);
    }

    /**
     * Verify $_set writes before every are visible to predicate via ArrayBuffer-backed view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART01_TEST_MINDMAP_5800
     * @tc.name int32ArrayEveryPart01TestMindmapTest058
     * @tc.desc Verify $_set writes before every are visible to predicate via ArrayBuffer-backed view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart01TestMindmapTest058() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array view = new Int32Array(buf, 0, 3);
    view.set(0, 4);
    view.set(1, 5);
    view.set(2, 6);
    int[] first = {0};
    view.every((e, i, a) -> {
        first[0] = e;
        return i < 0;
    });
    assertEqual(4, first[0]);
    }
}
