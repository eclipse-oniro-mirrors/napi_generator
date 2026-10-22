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
import basetype.common.Error;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFindLastIndexPart04Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFindLastIndexPart04Test extends BasTest {
    /**
     * Verify length index=length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_0100
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest001
     * @tc.desc Verify length index=length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest001() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int idx = arr.findLastIndex((v, i, a) -> {
        return v > 45;
        });
    assertEqual(5, arr.length());
    assertEqual(4, idx);
    }

    /**
     * Verify buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_0200
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest002
     * @tc.desc Verify buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest002() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    ArrayBuffer bufBefore = arr.buffer();
    int idx = arr.findLastIndex((v, i, a) -> {
        return v == 3;
        });
    assertEqual(bufBefore, arr.buffer());
    assertEqual(2, idx);
    }

    /**
     * Verify byteOffset findLastIndex byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_0300
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest003
     * @tc.desc Verify byteOffset findLastIndex byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest003() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int32Array view = new Int32Array(buf, 8, 3);
    view.set(0, 11);
    view.set(1, 22);
    view.set(2, 33);
    int idx = view.findLastIndex((v, i, a) -> {
        return v > 20;
        });
    assertEqual(8, view.byteOffset());
    assertEqual(2, idx);
    }

    /**
     * Verify byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_0400
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest004
     * @tc.desc Verify byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest004() {
    Int32Array arr = new Int32Array(new int[] {11, 22, 33, 44});
    int idx = arr.findLastIndex((v, i, a) -> {
        return v < 30;
        });
    assertEqual(16, arr.byteLength());
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_0500
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest005
     * @tc.desc Verify findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest005() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int idx = arr.findLastIndex((v, i, a) -> {
        return v == 30;
        });
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_0600
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest006
     * @tc.desc Verify findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest006() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    arr.findLastIndex((v, i, a) -> {
        return v == 30;
        });
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    }

    /**
     * Verify -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_0700
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest007
     * @tc.desc Verify -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest007() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int idx = arr.findLastIndex((v, i, a) -> {
        return v > 999;
        });
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    assertEqual(-1, idx);
    }

    /**
     * Verify predicate findLastIndex index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_0800
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest008
     * @tc.desc Verify predicate findLastIndex index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest008() {
    Int32Array arr = new Int32Array(new int[] {5, 3, 8, 1, 9, 4});
    int i1 = arr.findLastIndex((v, i, a) -> {
        return v > 6;
        });
    int i2 = arr.findLastIndex((v, i, a) -> {
        return v > 6;
        });
    assertEqual(i2, i1);
    assertEqual(4, i1);
    }

    /**
     * Verify findLastIndex $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_0900
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest009
     * @tc.desc Verify findLastIndex $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest009() {
    Int32Array arr = new Int32Array(new int[] {7, 14, 21, 28});
    arr.findLastIndex((v, i, a) -> {
        return v == 14;
        });
    assertEqualInt(7, arr.get(0));
    assertEqualInt(14, arr.get(1));
    assertEqualInt(21, arr.get(2));
    assertEqualInt(28, arr.get(3));
    }

    /**
     * Verify findLastIndex length 0 -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_1000
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest010
     * @tc.desc Verify findLastIndex length 0 -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest010() {
    Int32Array arr = new Int32Array();
    int[] calls = {0};
    int idx = arr.findLastIndex((v, i, a) -> {
        calls[0]++;
        return true;
    });
    assertEqual(0, arr.length());
    assertEqual(0, calls[0]);
    assertEqual(-1, idx);
    }

    /**
     * Verify subarray findLastIndex length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_1100
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest011
     * @tc.desc Verify subarray findLastIndex length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest011() {
    Int32Array parent = new Int32Array(new int[] {10, 20, 30, 40});
    Int32Array child = parent.subarray(1, 4);
    int idx = child.findLastIndex((v, i, a) -> {
        return v > 25;
        });
    assertEqual(4, parent.length());
    assertEqual(3, child.length());
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex number int -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_1200
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest012
     * @tc.desc Verify findLastIndex number int -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest012() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int idx = arr.findLastIndex((v, i, a) -> {
        return v > 99;
        });
    assertEqual(-1, idx);
    }

    /**
     * Verify 1 index=length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_1300
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest013
     * @tc.desc Verify 1 index=length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest013() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int[] calls = {0};
    int idx = arr.findLastIndex((v, i, a) -> {
        calls[0]++;
        return v == 30;
    });
    assertEqual(1, calls[0]);
    assertEqual(2, idx);
    }

    /**
     * Verify length-index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_1400
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest014
     * @tc.desc Verify length-index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest014() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] calls = {0};
    int idx = arr.findLastIndex((v, i, a) -> {
        calls[0]++;
        return v == 3;
    });
    assertEqual(3, calls[0]);
    assertEqual(2, idx);
    }

    /**
     * Verify index=0 length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_1500
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest015
     * @tc.desc Verify index=0 length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest015() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] calls = {0};
    int idx = arr.findLastIndex((v, i, a) -> {
        calls[0]++;
        return v == 1;
    });
    assertEqual(5, calls[0]);
    assertEqual(0, idx);
    }

    /**
     * Verify length -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_1600
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest016
     * @tc.desc Verify length -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest016() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int[] calls = {0};
    int idx = arr.findLastIndex((v, i, a) -> {
        calls[0]++;
        return false;
    });
    assertEqual(4, calls[0]);
    assertEqual(-1, idx);
    }

    /**
     * Verify length-1, length-2, ..., index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_1700
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest017
     * @tc.desc Verify length-1, length-2, ..., index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest017() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    List<Integer> indices = new ArrayList<>();
    int idx = arr.findLastIndex((v, i, a) -> {
        indices.add(i);
        return v == 20;
    });
    assertEqual(3, indices.size());
    assertEqualInt(3, indices.get(0));
    assertEqualInt(2, indices.get(1));
    assertEqualInt(1, indices.get(2));
    assertEqual(1, idx);
    }

    /**
     * Verify value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_1800
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest018
     * @tc.desc Verify value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest018() {
    Int32Array arr = new Int32Array(new int[] {7, 14, 21, 28});
    List<Integer> values = new ArrayList<>();
    int idx = arr.findLastIndex((v, i, a) -> {
        values.add(v);
        return v == 14;
    });
    assertEqualInt(28, values.get(0));
    assertEqualInt(21, values.get(1));
    assertEqualInt(14, values.get(2));
    assertEqual(1, idx);
    }

    /**
     * Verify 1 index=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_1900
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest019
     * @tc.desc Verify 1 index=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest019() {
    Int32Array arr = new Int32Array(new int[] {42});
    int[] calls = {0};
    int idx = arr.findLastIndex((v, i, a) -> {
        calls[0]++;
        return v == 42;
    });
    assertEqual(1, calls[0]);
    assertEqual(0, idx);
    }

    /**
     * Verify findLastIndex 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_2000
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest020
     * @tc.desc Verify findLastIndex 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest020() {
    Int32Array arr = new Int32Array();
    int[] calls = {0};
    int idx = arr.findLastIndex((v, i, a) -> {
        calls[0]++;
        return true;
    });
    assertEqual(0, calls[0]);
    assertEqual(-1, idx);
    }

    /**
     * Verify value sum- sum
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_2100
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest021
     * @tc.desc Verify value sum- sum
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest021() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int[] sum = {0};
    int idx = arr.findLastIndex((v, i, a) -> {
        sum[0] = sum[0] + v;
        return v == 40;
    });
    assertEqual(40, sum[0]);
    assertEqual(3, idx);
    }

    /**
     * Verify value sum- sum
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_2200
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest022
     * @tc.desc Verify value sum- sum
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest022() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int[] sum = {0};
    int idx = arr.findLastIndex((v, i, a) -> {
        sum[0] = sum[0] + v;
        return v == 20;
    });
    assertEqual(90, sum[0]);
    assertEqual(1, idx);
    }

    /**
     * Verify -
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_2300
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest023
     * @tc.desc Verify -
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest023() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] seen = {-1};
    int idx = arr.findLastIndex((v, i, a) -> {
        int prev = seen[0];
        seen[0] = i;
        return prev == 3 && v == 2;
    });
    assertEqual(-1, idx);
    }

    /**
     * Verify index- findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_2400
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest024
     * @tc.desc Verify index- findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest024() {
    Int32Array arr = new Int32Array(new int[] {8, 16, 24, 32});
    int[] hitIndex = {-1};
    int idx = arr.findLastIndex((v, i, a) -> {
        if (v == 16) {
            hitIndex[0] = i;
        return true;
    }
        return false;
        });
    assertEqual(1, hitIndex[0]);
    assertEqual(hitIndex[0], idx);
    }

    /**
     * Verify 100 findLastIndex index=50- length-50
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_2500
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest025
     * @tc.desc Verify 100 findLastIndex index=50- length-50
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest025() {
    Int32Array arr = new Int32Array(100);
    for (int k = 0; k < 100; k++) {
    arr.set(k, k);
    }
    int[] calls = {0};
    int idx = arr.findLastIndex((v, i, a) -> {
        calls[0]++;
        return v == 50;
    });
    assertEqual(50, calls[0]);
    assertEqual(50, idx);
    }

    /**
     * Verify array findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_2600
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest026
     * @tc.desc Verify array findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest026() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] sameRef = {false};
    arr.findLastIndex((v, i, a) -> {
    sameRef[0] = (a == arr);
    return true;
    });
    assertTrue(sameRef[0]);
    }

    /**
     * Verify array.length arr.length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_2700
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest027
     * @tc.desc Verify array.length arr.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest027() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int[] capturedLen = {-1};
    int idx = arr.findLastIndex((v, i, a) -> {
        capturedLen[0] = a.length();
        return v == 30;
    });
    assertEqual(5, capturedLen[0]);
    assertEqual(2, idx);
    }

    /**
     * Verify index=0 i 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_2800
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest028
     * @tc.desc Verify index=0 i 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest028() {
    Int32Array arr = new Int32Array(new int[] {77, 88, 99});
    int[] lastSeenIndex = {-1};
    int idx = arr.findLastIndex((v, i, a) -> {
        lastSeenIndex[0] = i;
        return false;
    });
    assertEqual(0, lastSeenIndex[0]);
    assertEqual(-1, idx);
    }

    /**
     * Verify - findLastIndex index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_3200
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest032
     * @tc.desc Verify - findLastIndex index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest032() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7, 8});
    int[] innerIdx = {-1};
    int idx = arr.findLastIndex((v, i, a) -> { innerIdx[0] = a.findLastIndex((vv, ii, aa) -> {
        return vv < 7;
        });
        return v == 8;
        });
    assertEqual(1, innerIdx[0]);
    assertEqual(3, idx);
    }

    /**
     * Verify findLastIndex -
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_3300
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest033
     * @tc.desc Verify findLastIndex -
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest033() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    List<Integer> innerResults = new ArrayList<>();
    arr.findLastIndex((v, i, a) -> {
    int r = a.findLastIndex((vv, ii, aa) -> {
        return vv == 10;
        });
    innerResults.add(r);
    return false;
    });
    assertEqual(4, innerResults.size());
    assertEqualInt(0, innerResults.get(0));
    assertEqualInt(0, innerResults.get(3));
    }

    /**
     * Verify findLastIndex findLast - index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_3600
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest036
     * @tc.desc Verify findLastIndex findLast - index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest036() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int idx = arr.findLastIndex((v, i, a) -> { int innerVal = a.findLast((vv, ii, aa) -> {
        return vv < 25;
        });
        return v == 50 && innerVal == 20;
        });
    assertEqual(4, idx);
    }

    /**
     * Verify Int32Array findLastIndex- index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_3700
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest037
     * @tc.desc Verify Int32Array findLastIndex- index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest037() {
    Int32Array arr1 = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array arr2 = new Int32Array(new int[] {10, 20, 30});
    int[] crossIdx = {-1};
    int idx = arr1.findLastIndex((v, i, a) -> { crossIdx[0] = arr2.findLastIndex((vv, ii, aa) -> {
        return vv == 20;
        });
        return v == 4;
        });
    assertEqual(1, crossIdx[0]);
    assertEqual(3, idx);
    }

    /**
     * Verify index - index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_3800
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest038
     * @tc.desc Verify index - index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest038() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int idx = arr.findLastIndex((v, i, a) -> {
        if (i == 2) {
            a.set(i + 1, 99);
        a.set(i + 2, 88);
    }
        return v == 2;
        });
    assertEqual(1, idx);
    assertEqualInt(99, arr.get(3));
    assertEqualInt(88, arr.get(4));
    }

    /**
     * Verify index -
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_4000
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest040
     * @tc.desc Verify index -
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest040() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0});
    int idx = arr.findLastIndex((v, i, a) -> {
        if (i == 3) {
            a.set(i - 1, 77);
        return false;
    }
        return v == 77;
        });
    assertEqual(2, idx);
    }

    /**
     * Verify - / index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_4100
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest041
     * @tc.desc Verify - / index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest041() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int[] calls = {0};
    int idx = arr.findLastIndex((v, i, a) -> {
        calls[0]++;
        a.set(0, 111);
        a.set(2, 222);
        return true;
    });
    assertEqual(1, calls[0]);
    assertEqual(3, idx);
    assertEqualInt(111, arr.get(0));
    assertEqualInt(222, arr.get(2));
    }

    /**
     * Verify - index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_4200
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest042
     * @tc.desc Verify - index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest042() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] calls = {0};
    int idx = arr.findLastIndex((v, i, a) -> { calls[0]++; if (i == a.length() - 1) {
        for (int j = 0; j < i; j++) {
            a.set(j, 100);
    }
        return false;
    }
        return v == 100;
        });
    assertEqual(2, calls[0]);
    assertEqual(3, idx);
    }

    /**
     * Verify index - 0 index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_4300
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest043
     * @tc.desc Verify index - 0 index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest043() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] sawZeroIdx = {-1};
    int idx = arr.findLastIndex((v, i, a) -> {
        if (i == 3) {
        for (int j = 0; j < i; j++) {
            a.set(j, 0);
    }
        }
    if (i < 3 && v == 0) {
            sawZeroIdx[0] = i;
            return true;
    }
        return false;
        });
    assertEqual(2, sawZeroIdx[0]);
    assertEqual(2, idx);
    }

    /**
     * Verify $_set(length, val) throws RangeError during findLastIndex callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_4400
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest044
     * @tc.desc Verify $_set(length, val) throws RangeError during findLastIndex callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest044() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] threwRangeError = {false};
    int idx = arr.findLastIndex((v, i, a) -> {
        try {
            a.set(a.length(), 0);
        fail();
        }
    catch (RangeError e) {
            threwRangeError[0] = true;
        assertEqual("RangeError", e.getClass().getSimpleName());
    }
        return v == 1;
        });
    assertEqual(0, idx);
    assertTrue(threwRangeError[0]);
    assertEqual(3, arr.length());
    }

    /**
     * Verify $_set(-1, val) throws RangeError during findLastIndex callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_4500
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest045
     * @tc.desc Verify $_set(-1, val) throws RangeError during findLastIndex callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest045() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] threwRangeError = {false};
    int idx = arr.findLastIndex((v, i, a) -> {
        try {
            a.set(-1, 0);
        fail();
        }
    catch (RangeError e) {
            threwRangeError[0] = true;
        assertEqual("RangeError", e.getClass().getSimpleName());
    }
        return v == 3;
        });
    assertEqual(2, idx);
    assertTrue(threwRangeError[0]);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify array.$_get index -
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_4700
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest047
     * @tc.desc Verify array.$_get index -
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest047() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int[] futureVal = {0};
    int idx = arr.findLastIndex((v, i, a) -> {
        if (i == 3) {
            futureVal[0] = a.get(i - 2);
    }
        return v == 10;
        });
    assertEqual(20, futureVal[0]);
    assertEqual(0, idx);
    }

    /**
     * Verify a fill - fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_4900
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest049
     * @tc.desc Verify a fill - fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest049() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int idx = arr.findLastIndex((v, i, a) -> {
        if (i == 4) {
            a.fill(88, 0, i);
        return false;
    }
        return v == 88;
        });
    assertEqual(3, idx);
    }

    /**
     * Verify a reverse -
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_5000
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest050
     * @tc.desc Verify a reverse -
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest050() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    List<Integer> sawValues = new ArrayList<>();
    int idx = arr.findLastIndex((v, i, a) -> {
        sawValues.add(v);
        if (i == 4) {
            a.reverse();
        return false;
    }
        return false;
        });
    assertEqualInt(5, sawValues.get(0));
    assertEqual(-1, idx);
    }

    /**
     * Verify Int32Array findLastIndex- subarray buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_5100
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest051
     * @tc.desc Verify Int32Array findLastIndex- subarray buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest051() {
    Int32Array parent = new Int32Array(new int[] {10, 20, 30, 40, 50});
    Int32Array child = parent.subarray(1, 4);
    int idx = parent.findLastIndex((v, i, a) -> {
        return v == 30;
        });
    assertEqualInt(20, child.get(0));
    assertEqualInt(30, child.get(1));
    assertEqualInt(40, child.get(2));
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex -
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_5200
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest052
     * @tc.desc Verify findLastIndex -
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest052() {
    Int32Array parent = new Int32Array(new int[] {10, 20, 30, 40, 50});
    Int32Array child = parent.subarray(2, 5);
    int idx = child.findLastIndex((v, i, a) -> {
        return v > 35;
        });
    assertEqual(2, idx);
    assertEqualInt(50, parent.get(4));
    }

    /**
     * Verify byteOffset Int32Array ArrayBuffer- findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_5500
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest055
     * @tc.desc Verify byteOffset Int32Array ArrayBuffer- findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest055() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view1 = new Int32Array(buf, 0, 2);
    Int32Array view2 = new Int32Array(buf, 8, 2);
    view1.set(0, 11);
    view1.set(1, 22);
    view2.set(0, 33);
    view2.set(1, 44);
    int i1 = view1.findLastIndex((v, i, a) -> {
        return v > 15;
        });
    int i2 = view2.findLastIndex((v, i, a) -> {
        return v > 35;
        });
    assertEqual(1, i1);
    assertEqual(1, i2);
    }

    /**
     * Verify slice findLastIndex-
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_5600
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest056
     * @tc.desc Verify slice findLastIndex-
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest056() {
    Int32Array orig = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array cp = orig.slice();
    int idx = cp.findLastIndex((v, i, a) -> {
        a.set(i, 99);
        return v == 3;
    });
    assertEqualInt(3, orig.get(2));
    assertEqualInt(99, cp.get(2));
    assertEqual(2, idx);
    }

    /**
     * Verify fill findLastIndex- fill index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_5800
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest058
     * @tc.desc Verify fill findLastIndex- fill index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest058() {
    Int32Array parent = new Int32Array(8);
    Int32Array child = parent.subarray(2, 6);
    parent.fill(7, 2, 6);
    int idx = child.findLastIndex((v, i, a) -> {
        return v == 7;
        });
    assertEqual(3, idx);
    assertEqualInt(7, child.get(0));
    assertEqualInt(7, child.get(3));
    }

    /**
     * Verify findLastIndex- buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_5900
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest059
     * @tc.desc Verify findLastIndex- buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest059() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    Int32Array child = parent.subarray(1, 5);
    int pi = parent.findLastIndex((v, i, a) -> {
        return v == 4;
        });
    int ci = child.findLastIndex((v, i, a) -> {
        return v == 4;
        });
    assertEqual(3, pi);
    assertEqual(2, ci);
    }

    /**
     * Verify array.$_set Number.NaN ToInt32 0 - 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_6400
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest064
     * @tc.desc Verify array.$_set Number.NaN ToInt32 0 - 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest064() {
    Int32Array arr = new Int32Array(new int[] {5, 5, 5});
    int[] readBack = {-1};
    int idx = arr.findLastIndex((v, i, a) -> {
        if (i == 2) {
            a.set(1, Double.NaN);
        return false;
    }
    if (i == 1) {
            readBack[0] = v;
        return true;
    }
        return false;
        });
    assertEqual(0, readBack[0]);
    assertEqual(1, idx);
    }

    /**
     * Verify array.$_set 3.9 3 - 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_6500
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest065
     * @tc.desc Verify array.$_set 3.9 3 - 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest065() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0});
    int[] readBack = {0};
    int idx = arr.findLastIndex((v, i, a) -> {
        if (i == 2) {
            a.set(1, 3.9);
        return false;
    }
    if (i == 1) {
            readBack[0] = v;
        return true;
    }
        return false;
        });
    assertEqual(3, readBack[0]);
    assertEqual(1, idx);
    }

    /**
     * Verify array.$_set +Number.POSITIVE_INFINITY ToInt32 0 - 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_6700
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest067
     * @tc.desc Verify array.$_set +Number.POSITIVE_INFINITY ToInt32 0 - 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest067() {
    Int32Array arr = new Int32Array(new int[] {7, 7, 7});
    int[] readBack = {-1};
    int idx = arr.findLastIndex((v, i, a) -> {
        if (i == 2) {
            a.set(0, Double.POSITIVE_INFINITY);
        return false;
    }
    if (i == 0) {
            readBack[0] = v;
        return true;
    }
        return false;
        });
    assertEqual(0, readBack[0]);
    assertEqual(0, idx);
    }

    /**
     * Verify -0 ToInt32 0 -findLastIndex 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_7100
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest071
     * @tc.desc Verify -0 ToInt32 0 -findLastIndex 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest071() {
    Int32Array arr = new Int32Array(new int[] {1, 0, 2});
    int idx = arr.findLastIndex((v, i, a) -> {
        return v == 0;
        });
    assertEqual(1, idx);
    }

    /**
     * Verify - findLastIndex index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_7200
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest072
     * @tc.desc Verify - findLastIndex index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart04TestMindmapTest072() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] calls = {0};
    try {
    arr.findLastIndex((v, i, a) -> {
    calls[0]++;
    return BasTest.throwTestError("first call boom");
    });
    fail();
    }
    catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(1, calls[0]);
    }

    /**
     * Verify findLastIndex length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART04_TEST_MINDMAP_8100
     * @tc.name int32ArrayFindLastIndexPart04TestMindmapTest081
     * @tc.desc Verify findLastIndex length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
