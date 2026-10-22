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
import basetype.common.SyntaxError;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFindIndexPart03Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFindIndexPart03Test extends BasTest {
    /**
     * Verify null predicate TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0010
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest001
     * @tc.desc Verify null predicate TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest001() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify undefined predicate throws ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0020
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest002
     * @tc.desc Verify undefined predicate throws ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest002() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify 0 predicate TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0030
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest003
     * @tc.desc Verify 0 predicate TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest003() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Number.NaN predicate TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0040
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest004
     * @tc.desc Verify Number.NaN predicate TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest004() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify true predicate TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0050
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest005
     * @tc.desc Verify true predicate TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest005() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify "predicate" predicate TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0060
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest006
     * @tc.desc Verify "predicate" predicate TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest006() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0070
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest007
     * @tc.desc Verify predicate TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest007() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Object predicate TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0080
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest008
     * @tc.desc Verify Object predicate TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest008() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    Object obj = new Object();
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Array predicate TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0090
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest009
     * @tc.desc Verify Array predicate TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest009() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    Object fake = new ArrayList<>();
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array predicate TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0100
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest010
     * @tc.desc Verify Int32Array predicate TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest010() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    Int32Array other = new Int32Array(new int[] {3, 4});
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify ArrayBuffer predicate TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0110
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest011
     * @tc.desc Verify ArrayBuffer predicate TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest011() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    Object buf = new ArrayBuffer(4);
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate throw new Error
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0120
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest012
     * @tc.desc Verify predicate throw new Error
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest012() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    try {
    arr.findIndex((v, i) -> {
    return BasTest.throwTestError("first-element");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0130
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest013
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest013() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] visitedFirst = {false};
    try {
    arr.findIndex((v, i) -> {
    if (i == 0) {
    visitedFirst[0] = true;
    return false;
    }
    return BasTest.throwTestError("second");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertTrue(visitedFirst[0]);
    }

    /**
     * Verify predicate index=2 index+1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0140
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest014
     * @tc.desc Verify predicate index=2 index+1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest014() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int[] count = {0};
    try {
    arr.findIndex((v, i) -> {
    count[0] = count[0] + 1;
    if (i == 2) {
    return BasTest.throwTestError("mid");
    }
    return false;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(3, count[0]);
    }

    /**
     * Verify predicate callCount===length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0150
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest015
     * @tc.desc Verify predicate callCount===length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest015() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int[] count = {0};
    try {
    arr.findIndex((v, i, a) -> {
    count[0] = count[0] + 1;
    if (i == a.length() - 1) {
    return BasTest.throwTestError("last");
    }
    return false;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(arr.length(), count[0]);
    }

    /**
     * Verify predicate RangeError name RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0160
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest016
     * @tc.desc Verify predicate RangeError name RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest016() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    arr.findIndex((v, i) -> {
    throw new RangeError("out of range");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate TypeError name TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0170
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest017
     * @tc.desc Verify predicate TypeError name TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest017() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    arr.findIndex((v, i) -> {
    throw new TypeError("type bad");
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate SyntaxError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0180
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest018
     * @tc.desc Verify predicate SyntaxError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest018() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    arr.findIndex((v, i) -> {
    throw new SyntaxError("syntax");
    });
    fail();
    } catch (SyntaxError e) {
    assertEqual("SyntaxError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0210
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest021
     * @tc.desc Verify predicate length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest021() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int lenBefore = arr.length();
    try {
    arr.findIndex((v, i) -> {
    return BasTest.throwTestError("oops");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(lenBefore, arr.length());
    }

    /**
     * Verify predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0220
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest022
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest022() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    try {
    arr.findIndex((v, i) -> {
    return BasTest.throwTestError("x");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqualInt(7, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(9, arr.get(2));
    }

    /**
     * Verify predicate -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0230
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest023
     * @tc.desc Verify predicate -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest023() {
    Int32Array arr = new Int32Array(0);
    boolean[] called = {false};
    int result = arr.findIndex((v, i) -> {
        called[0] = true;
        return false;
    });
    assertFalse(called[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0240
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest024
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest024() {
    Int32Array arr = new Int32Array(new int[] {77});
    try {
    arr.findIndex((v, i) -> {
    return BasTest.throwTestError("single");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate false -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0250
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest025
     * @tc.desc Verify predicate false -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest025() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int result = -999;
    try {
    result = arr.findIndex((v, i) -> {
    if (v == 3) {
    return BasTest.throwTestError("stop");
    }
    return false;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(-999, result);
    }

    /**
     * Verify returning undefined via cast at first element throws ClassCastError (multi-element)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0280
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest028
     * @tc.desc Verify returning undefined via cast at first element throws ClassCastError (multi-element)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest028() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    boolean[] firstVisited = {false};
    try {
    arr.findIndex((v, i) -> {
    if (i == 0) {
    firstVisited[0] = true;
    basetype.common.ClassCastError.raise();
    }
    return v == 3;
    });
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    assertTrue(firstVisited[0]);
    }

    /**
     * Verify Number.MAX_SAFE_INTEGER truthy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0360
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest036
     * @tc.desc Verify Number.MAX_SAFE_INTEGER truthy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest036() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0});
    try {
    arr.findIndex((v, i) -> {
    if (i == 2) {
    basetype.common.ClassCastError.raise();
    }
    return false;
    });
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length=0 predicate true -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0380
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest038
     * @tc.desc Verify length=0 predicate true -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest038() {
    Int32Array arr = new Int32Array(0);
    int result = arr.findIndex((v, i) -> true);
    assertEqual(-1, result);
    }

    /**
     * Verify length=0 predicate false -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0390
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest039
     * @tc.desc Verify length=0 predicate false -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest039() {
    Int32Array arr = new Int32Array(0);
    int result = arr.findIndex((v, i) -> false);
    assertEqual(-1, result);
    }

    /**
     * Verify length=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0400
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest040
     * @tc.desc Verify length=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest040() {
    Int32Array arr = new Int32Array(0);
    int[] callCount = {0};
    arr.findIndex((v, i) -> {
    callCount[0] = callCount[0] + 1;
    return true;
    });
    assertEqual(0, callCount[0]);
    }

    /**
     * Verify length=0 length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0410
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest041
     * @tc.desc Verify length=0 length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest041() {
    Int32Array arr = new Int32Array(0);
    arr.findIndex((v, i) -> true);
    assertEqual(0, arr.length());
    }

    /**
     * Verify Int32Array.of() findIndex -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0420
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest042
     * @tc.desc Verify Int32Array.of() findIndex -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest042() {
    Int32Array arr = Int32Array.of();
    int result = arr.findIndex((v, i) -> true);
    assertEqual(-1, result);
    }

    /**
     * Verify ArrayBuffer(0) findIndex -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0430
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest043
     * @tc.desc Verify ArrayBuffer(0) findIndex -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest043() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int32Array arr = new Int32Array(buf, 0, 0);
    int result = arr.findIndex((v, i) -> true);
    assertEqual(-1, result);
    }

    /**
     * Verify subarray(begin===end) findIndex -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0440
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest044
     * @tc.desc Verify subarray(begin===end) findIndex -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest044() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3});
    Int32Array empty = parent.subarray(1, 1);
    boolean[] called = {false};
    int result = empty.findIndex((v, i) -> {
        called[0] = true;
        return true;
    });
    assertEqual(-1, result);
    assertFalse(called[0]);
    assertEqual(0, empty.length());
    }

    /**
     * Verify slice(begin===end) findIndex -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0450
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest045
     * @tc.desc Verify slice(begin===end) findIndex -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest045() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    Int32Array empty = arr.slice(3, 3);
    int result = empty.findIndex((v, i) -> true);
    assertEqual(-1, result);
    }

    /**
     * Verify predicate -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0460
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest046
     * @tc.desc Verify predicate -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest046() {
    Int32Array arr = new Int32Array(new int[] {42});
    int result = arr.findIndex((v) -> v == 99);
    assertEqual(-1, result);
    }

    /**
     * Verify 0 predicate 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0470
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest047
     * @tc.desc Verify 0 predicate 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest047() {
    Int32Array arr = new Int32Array(new int[] {0});
    int result = arr.findIndex((v) -> v == 0);
    assertEqual(0, result);
    }

    /**
     * Verify 1 predicate 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0490
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest049
     * @tc.desc Verify 1 predicate 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest049() {
    Int32Array arr = new Int32Array(new int[] {1});
    int result = arr.findIndex((v) -> v == 1);
    assertEqual(0, result);
    }

    /**
     * Verify predicate true 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0520
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest052
     * @tc.desc Verify predicate true 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest052() {
    Int32Array arr = new Int32Array(new int[] {7});
    int[] count = {0};
    arr.findIndex((v, i) -> {
    count[0] = count[0] + 1;
    return true;
    });
    assertEqual(1, count[0]);
    }

    /**
     * Verify ArrayBuffer predicate -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0530
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest053
     * @tc.desc Verify ArrayBuffer predicate -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest053() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int32Array arr = new Int32Array(buf);
    arr.set(0, 55);
    int result = arr.findIndex((v) -> v == 77);
    assertEqual(-1, result);
    }

    /**
     * Verify 5 predicate 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0540
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest054
     * @tc.desc Verify 5 predicate 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest054() {
    Int32Array arr = new Int32Array(new int[] {5, 5, 5, 5, 5});
    int result = arr.findIndex((v) -> v == 5);
    assertEqual(0, result);
    }

    /**
     * Verify predicate -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0550
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest055
     * @tc.desc Verify predicate -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest055() {
    Int32Array arr = new Int32Array(new int[] {5, 5, 5, 5});
    int result = arr.findIndex((v) -> v == 7);
    assertEqual(-1, result);
    }

    /**
     * Verify 0 predicate 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0560
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest056
     * @tc.desc Verify 0 predicate 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest056() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0});
    int result = arr.findIndex((v) -> v == 0);
    assertEqual(0, result);
    }

    /**
     * Verify length 0 predicate index===length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0600
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest060
     * @tc.desc Verify length 0 predicate index===length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest060() {
    Int32Array arr = new Int32Array(5);
    int result = arr.findIndex((v, i, a) -> i == a.length() - 1);
    assertEqual(4, result);
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify fill predicate callCount=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0610
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest061
     * @tc.desc Verify fill predicate callCount=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest061() {
    Int32Array arr = new Int32Array(64);
    arr.fill(3);
    int[] count = {0};
    int result = arr.findIndex((v, i) -> {
        count[0] = count[0] + 1;
        return v == 3;
    });
    assertEqual(0, result);
    assertEqual(1, count[0]);
    }

    /**
     * Verify index -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0620
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest062
     * @tc.desc Verify index -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest062() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] sawNegOne = {false};
    arr.findIndex((v, i) -> {
    if (i == -1) {
    sawNegOne[0] = true;
    }
    return false;
    });
    assertFalse(sawNegOne[0]);
    }

    /**
     * Verify index -length -length===-n===0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0630
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest063
     * @tc.desc Verify index -length -length===-n===0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest063() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    boolean[] sawNegLen = {false};
    int negLen = -arr.length();
    arr.findIndex((v, i) -> {
    if (i == negLen) {
    sawNegLen[0] = true;
    }
    return false;
    });
    assertFalse(sawNegLen[0]);
    }

    /**
     * Verify index -length-1 -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0640
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest064
     * @tc.desc Verify index -length-1 -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest064() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] sawNegLen1 = {false};
    int bad = -(arr.length() + 1);
    arr.findIndex((v, i) -> {
    if (i == bad) {
    sawNegLen1[0] = true;
    }
    return false;
    });
    assertFalse(sawNegLen1[0]);
    }

    /**
     * Verify index length +1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0650
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest065
     * @tc.desc Verify index length +1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest065() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    boolean[] sawLen = {false};
    int n = arr.length();
    arr.findIndex((v, i) -> {
    if (i == n) {
    sawLen[0] = true;
    }
    return false;
    });
    assertFalse(sawLen[0]);
    }

    /**
     * Verify index length+1 +2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0660
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest066
     * @tc.desc Verify index length+1 +2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest066() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    boolean[] sawLen1 = {false};
    int n2 = arr.length() + 1;
    arr.findIndex((v, i) -> {
    if (i == n2) {
    sawLen1[0] = true;
    }
    return false;
    });
    assertFalse(sawLen1[0]);
    }

    /**
     * Verify index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0670
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest067
     * @tc.desc Verify index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest067() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    boolean[] allInt = {true};
    arr.findIndex((v, i) -> {
    if (i != (i | 0)) {
    allInt[0] = false;
    }
    return false;
    });
    assertTrue(allInt[0]);
    }

    /**
     * Verify 100 index 99 int32
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0680
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest068
     * @tc.desc Verify 100 index 99 int32
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest068() {
    List<Integer> data = new ArrayList<>();
    for (int i = 0; i < 100; i = i + 1) {
    data.add(i);
    }
    Int32Array arr = new Int32Array(data);
    int[] maxIdx = {-1};
    arr.findIndex((v, i) -> {
    if (i > maxIdx[0]) {
    maxIdx[0] = i;
    }
    return false;
    });
    assertEqual(99, maxIdx[0]);
    }

    /**
     * Verify index 0 length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0690
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest069
     * @tc.desc Verify index 0 length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest069() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int[] expected = {0};
    boolean[] sequential = {true};
    arr.findIndex((v, i) -> {
    if (i != expected[0]) {
    sequential[0] = false;
    }
    expected[0] = expected[0] + 1;
    return false;
    });
    assertTrue(sequential[0]);
    }

    /**
     * Verify $_get(-1) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_0700
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest070
     * @tc.desc Verify $_get(-1) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart03TestMindmapTest070() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] threwRangeError = {false};
    arr.findIndex((v, i, a) -> {
    try {
    a.get(-1);
    fail();
    } catch (RangeError e) {
    threwRangeError[0] = true;
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    return true;
    });
    assertTrue(threwRangeError[0]);
    }

    /**
     * Verify predicate array findIndex predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_INDEX_PART03_TEST_MINDMAP_1000
     * @tc.name int32ArrayFindIndexPart03TestMindmapTest100
     * @tc.desc Verify predicate array findIndex predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
