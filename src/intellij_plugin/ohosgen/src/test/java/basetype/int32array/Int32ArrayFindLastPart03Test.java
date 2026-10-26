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
import basetype.common.BasTest;
import basetype.common.RangeError;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFindLastPart03Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFindLastPart03Test extends BasTest {

    /**
     * Verify [9] predicate 9
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_0800
     * @tc.name int32ArrayFindLastPart03TestMindmapTest008
     * @tc.desc Verify [9] predicate 9
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest008() {
    Int32Array arr = new Int32Array(new int[] {9});
    int res = arr.findLast((v, i, a) -> {
        return v == 9;
        });
    assertEqual(9, res);
    }

    /**
     * Verify [0] predicate 0 0 undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_1000
     * @tc.name int32ArrayFindLastPart03TestMindmapTest010
     * @tc.desc Verify [0] predicate 0 0 undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest010() {
    Int32Array arr = new Int32Array(new int[] {0});
    int res = arr.findLast((v, i, a) -> {
        return v == 0;
        });
    assertEqual(0, res);
    }

    /**
     * Verify predicate index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_1400
     * @tc.name int32ArrayFindLastPart03TestMindmapTest014
     * @tc.desc Verify predicate index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest014() {
    Int32Array arr = new Int32Array(new int[] {8});
    int[] seenIdx = {-99};
    arr.findLast((v, i, a) -> {
        seenIdx[0] = i;
        return true;
    });
    assertEqual(0, seenIdx[0]);
    }

    /**
     * Verify predicate array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_1500
     * @tc.name int32ArrayFindLastPart03TestMindmapTest015
     * @tc.desc Verify predicate array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest015() {
    Int32Array arr = new Int32Array(new int[] {8});
    boolean[] sameRef = {false};
    arr.findLast((v, i, a) -> {
        sameRef[0] = (a == arr);
        return true;
    });
    assertTrue(sameRef[0]);
    }

    /**
     * Verify predicate 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_1600
     * @tc.name int32ArrayFindLastPart03TestMindmapTest016
     * @tc.desc Verify predicate 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest016() {
    Int32Array arr = new Int32Array(new int[] {8});
    int[] cnt = {0};
    arr.findLast((v, i, a) -> {
        cnt[0]++;
        return v == 8;
    });
    assertEqual(1, cnt[0]);
    }

    /**
     * Verify predicate value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_1800
     * @tc.name int32ArrayFindLastPart03TestMindmapTest018
     * @tc.desc Verify predicate value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest018() {
    Int32Array arr = new Int32Array(new int[] {73});
    int[] seenVal = {0};
    arr.findLast((v, i, a) -> {
        seenVal[0] = v;
        return true;
    });
    assertEqual(73, seenVal[0]);
    }

    /**
     * Verify [6, 6, 6] predicate findLast 6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_2100
     * @tc.name int32ArrayFindLastPart03TestMindmapTest021
     * @tc.desc Verify [6, 6, 6] predicate findLast 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest021() {
    Int32Array arr = new Int32Array(new int[] {6, 6, 6});
    int res = arr.findLast((v, i, a) -> {
        return true;
        });
    assertEqual(6, res);
    }

    /**
     * Verify [6, 6, 6] predicate 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_2200
     * @tc.name int32ArrayFindLastPart03TestMindmapTest022
     * @tc.desc Verify [6, 6, 6] predicate 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest022() {
    Int32Array arr = new Int32Array(new int[] {6, 6, 6});
    int[] cnt = {0};
    arr.findLast((v, i, a) -> {
        cnt[0]++;
        return true;
    });
    assertEqual(1, cnt[0]);
    }

    /**
     * Verify [6, 6, 6] predicate length-1=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_2300
     * @tc.name int32ArrayFindLastPart03TestMindmapTest023
     * @tc.desc Verify [6, 6, 6] predicate length-1=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest023() {
    Int32Array arr = new Int32Array(new int[] {6, 6, 6});
    int[] hitIdx = {-1};
    arr.findLast((v, i, a) -> {
        hitIdx[0] = i;
        return true;
    });
    assertEqual(2, hitIdx[0]);
    }

    /**
     * Verify [0, 0, 0] predicate v===0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_2400
     * @tc.name int32ArrayFindLastPart03TestMindmapTest024
     * @tc.desc Verify [0, 0, 0] predicate v===0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest024() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0});
    int res = arr.findLast((v, i, a) -> {
        return v == 0;
        });
    assertEqual(0, res);
    }

    /**
     * Verify [5, 5, 5] predicate i===0 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_3000
     * @tc.name int32ArrayFindLastPart03TestMindmapTest030
     * @tc.desc Verify [5, 5, 5] predicate i===0 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest030() {
    Int32Array arr = new Int32Array(new int[] {5, 5, 5});
    int res = arr.findLast((v, i, a) -> {
        return i == 0;
        });
    assertEqual(5, res);
    }

    /**
     * Verify [5, 5, 5] predicate i===0 predicate 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_3100
     * @tc.name int32ArrayFindLastPart03TestMindmapTest031
     * @tc.desc Verify [5, 5, 5] predicate i===0 predicate 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest031() {
    Int32Array arr = new Int32Array(new int[] {5, 5, 5});
    int[] cnt = {0};
    arr.findLast((v, i, a) -> {
        cnt[0]++;
        return i == 0;
    });
    assertEqual(3, cnt[0]);
    }

    /**
     * Verify predicate array.length () true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_3200
     * @tc.name int32ArrayFindLastPart03TestMindmapTest032
     * @tc.desc Verify predicate array.length () true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest032() {
    Int32Array arr = new Int32Array(new int[] {7, 7, 7, 7});
    int res = arr.findLast((v, i, a) -> {
        return a.length() == 4;
        });
    assertEqual(7, res);
    }

    /**
     * Verify predicate RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_3400
     * @tc.name int32ArrayFindLastPart03TestMindmapTest034
     * @tc.desc Verify predicate RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest034() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    String[] errName = {""};
    try {
    arr.findLast((v, i, a) -> {
        throw new RangeError("oob");
        });
    } catch (RangeError e) {
    errName[0] = e.getClass().getSimpleName();
    }
    assertEqual("RangeError", errName[0]);
    }

    /**
     * Verify predicate true findLast i
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_6200
     * @tc.name int32ArrayFindLastPart03TestMindmapTest062
     * @tc.desc Verify predicate true findLast i
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest062() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    List<Integer> visited = new ArrayList<>();
    arr.findLast((v, i, a) -> {
        visited.add(i);
        return i == 2;
    });
    assertEqual(2, visited.size());
    assertEqualInt(3, visited.get(0));
    assertEqualInt(2, visited.get(1));
    }

    /**
     * Verify predicate /
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_6300
     * @tc.name int32ArrayFindLastPart03TestMindmapTest063
     * @tc.desc Verify predicate /
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest063() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int[] sum = {0};
    int res = arr.findLast((v, i, a) -> {
        sum[0] += v;
        return v == 2;
    });
    assertEqual(2, res);
    assertEqual(5, sum[0]);
    }

    /**
     * Verify findLast /
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_6400
     * @tc.name int32ArrayFindLastPart03TestMindmapTest064
     * @tc.desc Verify findLast /
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart03TestMindmapTest064() {
    Int32Array arr = new Int32Array(new int[] {5, 3, 7, 1});
    arr.findLast((v, i, a) -> {
        return v == 7;
        });
    assertEqualInt(5, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(1, arr.get(3));
    }

    /**
     * Verify ArrayBuffer findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART03_TEST_MINDMAP_8400
     * @tc.name int32ArrayFindLastPart03TestMindmapTest084
     * @tc.desc Verify ArrayBuffer findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
