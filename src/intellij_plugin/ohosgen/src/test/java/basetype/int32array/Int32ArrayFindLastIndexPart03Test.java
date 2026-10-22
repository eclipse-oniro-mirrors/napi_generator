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
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Error;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFindLastIndexPart03Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFindLastIndexPart03Test extends BasTest {
    /**
     * Verify predicate null throws TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_0100
     * @tc.name int32ArrayFindLastIndexPart03Test001
     * @tc.desc Verify predicate null throws TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test001() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate undefined throws TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_0200
     * @tc.name int32ArrayFindLastIndexPart03Test002
     * @tc.desc Verify predicate undefined throws TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test002() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate number 0 throws TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_0300
     * @tc.name int32ArrayFindLastIndexPart03Test003
     * @tc.desc Verify predicate number 0 throws TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test003() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate number 1 throws TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_0400
     * @tc.name int32ArrayFindLastIndexPart03Test004
     * @tc.desc Verify predicate number 1 throws TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test004() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate Number.NaN throws TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_0500
     * @tc.name int32ArrayFindLastIndexPart03Test005
     * @tc.desc Verify predicate Number.NaN throws TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test005() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate boolean true throws TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_0600
     * @tc.name int32ArrayFindLastIndexPart03Test006
     * @tc.desc Verify predicate boolean true throws TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test006() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate boolean false throws TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_0700
     * @tc.name int32ArrayFindLastIndexPart03Test007
     * @tc.desc Verify predicate boolean false throws TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test007() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate empty string throws TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_0800
     * @tc.name int32ArrayFindLastIndexPart03Test008
     * @tc.desc Verify predicate empty string throws TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test008() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate non-empty string throws TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_0900
     * @tc.name int32ArrayFindLastIndexPart03Test009
     * @tc.desc Verify predicate non-empty string throws TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test009() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate plain Object throws TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_1000
     * @tc.name int32ArrayFindLastIndexPart03Test010
     * @tc.desc Verify predicate plain Object throws TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test010() {
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
     * Verify predicate Array throws TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_1100
     * @tc.name int32ArrayFindLastIndexPart03Test011
     * @tc.desc Verify predicate Array throws TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test011() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    Object dummy = new ArrayList<>();
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate Int32Array itself throws TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_1200
     * @tc.name int32ArrayFindLastIndexPart03Test012
     * @tc.desc Verify predicate Int32Array itself throws TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test012() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate ArrayBuffer throws TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_1300
     * @tc.name int32ArrayFindLastIndexPart03Test013
     * @tc.desc Verify predicate ArrayBuffer throws TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test013() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    Object buf = new ArrayBuffer(8);
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate throws at tail element, visits 1 index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_1400
     * @tc.name int32ArrayFindLastIndexPart03Test014
     * @tc.desc Verify predicate throws at tail element, visits 1 index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test014() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    List<Integer> visited = new ArrayList<>();
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        visited.add(i);
        return BasTest.throwTestError("boomTail");
    };
    try {
    arr.findLastIndex(pred);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("boomTail", e.getMessage());
    assertEqual(1, visited.size());
    assertEqualInt(3, visited.get(0));
    }
    }

    /**
     * Verify predicate throws at middle index, visits right-to-left
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_1500
     * @tc.name int32ArrayFindLastIndexPart03Test015
     * @tc.desc Verify predicate throws at middle index, visits right-to-left
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test015() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    List<Integer> visited = new ArrayList<>();
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        visited.add(i);
        if (i == 2) {
        return BasTest.throwTestError("midBoom");
        }
        return false;
        };
    try {
    arr.findLastIndex(pred);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("midBoom", e.getMessage());
    assertEqual(3, visited.size());
    assertEqualInt(4, visited.get(0));
    assertEqualInt(3, visited.get(1));
    assertEqualInt(2, visited.get(2));
    }
    }

    /**
     * Verify predicate throws at first element, visits all length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_1600
     * @tc.name int32ArrayFindLastIndexPart03Test016
     * @tc.desc Verify predicate throws at first element, visits all length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test016() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    List<Integer> visited = new ArrayList<>();
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        visited.add(i);
        if (i == 0) {
        return BasTest.throwTestError("firstBoom");
        }
        return false;
        };
    try {
    arr.findLastIndex(pred);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("firstBoom", e.getMessage());
    assertEqual(4, visited.size());
    assertEqualInt(0, visited.get(3));
    }
    }

    /**
     * Verify predicate throws RangeError propagates
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_1700
     * @tc.name int32ArrayFindLastIndexPart03Test017
     * @tc.desc Verify predicate throws RangeError propagates
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test017() {
    Int32Array arr = new Int32Array(new int[] {5, 6});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        throw new RangeError("rangeBad");
        };
    try {
    arr.findLastIndex(pred);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("rangeBad", e.getMessage());
    }
    }

    /**
     * Verify predicate throws TypeError propagates
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_1800
     * @tc.name int32ArrayFindLastIndexPart03Test018
     * @tc.desc Verify predicate throws TypeError propagates
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test018() {
    Int32Array arr = new Int32Array(new int[] {5});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        throw new TypeError("typeBad");
        };
    try {
    arr.findLastIndex(pred);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify match short-circuits before later throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_1900
     * @tc.name int32ArrayFindLastIndexPart03Test019
     * @tc.desc Verify match short-circuits before later throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test019() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] callCount = {0};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        callCount[0] = callCount[0] + 1;
        if (i == 1) {
        return BasTest.throwTestError("shouldNotReach");
        }
        return i == 3;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(3, r);
    assertEqual(2, callCount[0]);
    }

    /**
     * Verify predicate throws Error instance propagates
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_2000
     * @tc.name int32ArrayFindLastIndexPart03Test020
     * @tc.desc Verify predicate throws Error instance propagates
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test020() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return BasTest.throwTestError("strErr");
        };
    try {
    arr.findLastIndex(pred);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("strErr", e.getMessage());
    }
    }

    /**
     * Verify predicate returning Object (truthy) hits index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_2700
     * @tc.name int32ArrayFindLastIndexPart03Test027
     * @tc.desc Verify predicate returning Object (truthy) hits index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test027() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    Object sentinel = new Object();
    try {
    arr.findLastIndex((v, i, a) -> {
    basetype.common.ClassCastError.raise();
    return false;
    });
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate returning empty array (truthy) hits index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_2900
     * @tc.name int32ArrayFindLastIndexPart03Test029
     * @tc.desc Verify predicate returning empty array (truthy) hits index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test029() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    Object emptyArr = new ArrayList<>();
    try {
    arr.findLastIndex((v, i, a) -> {
    basetype.common.ClassCastError.raise();
    return false;
    });
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length=0 array returns -1 without calling predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_3000
     * @tc.name int32ArrayFindLastIndexPart03Test030
     * @tc.desc Verify length=0 array returns -1 without calling predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test030() {
    Int32Array arr = new Int32Array(0);
    boolean[] called = {false};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        called[0] = true;
        return true;
    };
    int r = arr.findLastIndex(pred);
    assertEqual(-1, r);
    assertFalse(called[0]);
    }

    /**
     * Verify empty ArrayBuffer(0) Int32Array returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_3100
     * @tc.name int32ArrayFindLastIndexPart03Test031
     * @tc.desc Verify empty ArrayBuffer(0) Int32Array returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test031() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int32Array arr = new Int32Array(buf);
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return true;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(-1, r);
    }

    /**
     * Verify empty subarray (begin=end) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_3200
     * @tc.name int32ArrayFindLastIndexPart03Test032
     * @tc.desc Verify empty subarray (begin=end) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test032() {
    Int32Array orig = new Int32Array(new int[] {1, 2, 3});
    Int32Array sub = orig.subarray(1, 1);
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return true;
        };
    int r = sub.findLastIndex(pred);
    assertEqual(-1, r);
    assertEqual(0, sub.length());
    }

    /**
     * Verify length=0 array length unchanged after findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_3300
     * @tc.name int32ArrayFindLastIndexPart03Test033
     * @tc.desc Verify length=0 array length unchanged after findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test033() {
    Int32Array arr = new Int32Array(0);
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return false;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(-1, r);
    assertEqual(0, arr.length());
    }

    /**
     * Verify length=1 matching element returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_3400
     * @tc.name int32ArrayFindLastIndexPart03Test034
     * @tc.desc Verify length=1 matching element returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test034() {
    Int32Array arr = new Int32Array(new int[] {42});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return v == 42;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(0, r);
    }

    /**
     * Verify length=1 non-matching returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_3500
     * @tc.name int32ArrayFindLastIndexPart03Test035
     * @tc.desc Verify length=1 non-matching returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test035() {
    Int32Array arr = new Int32Array(new int[] {42});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return v == 99;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(-1, r);
    }

    /**
     * Verify length=1 predicate called once with i=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_3600
     * @tc.name int32ArrayFindLastIndexPart03Test036
     * @tc.desc Verify length=1 predicate called once with i=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test036() {
    Int32Array arr = new Int32Array(new int[] {77});
    int[] callCount = {0};
    int[] seenI = {-999};
    int[] seenV = {-1};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        callCount[0] = callCount[0] + 1;
        seenI[0] = i;
        seenV[0] = v;
        return true;
    };
    arr.findLastIndex(pred);
    assertEqual(1, callCount[0]);
    assertEqual(0, seenI[0]);
    assertEqual(77, seenV[0]);
    }

    /**
     * Verify length=1 zero element matches and returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_3700
     * @tc.name int32ArrayFindLastIndexPart03Test037
     * @tc.desc Verify length=1 zero element matches and returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test037() {
    Int32Array arr = new Int32Array(new int[] {0});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return v == 0;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(0, r);
    }

    /**
     * Verify all-zero array returns last index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_3900
     * @tc.name int32ArrayFindLastIndexPart03Test039
     * @tc.desc Verify all-zero array returns last index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test039() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0, 0});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return v == 0;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(4, r);
    }

    /**
     * Verify two same elements returns last index short-circuit 1 call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_4300
     * @tc.name int32ArrayFindLastIndexPart03Test043
     * @tc.desc Verify two same elements returns last index short-circuit 1 call
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test043() {
    Int32Array arr = new Int32Array(new int[] {5, 5});
    int[] cc = {0};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        cc[0] = cc[0] + 1;
        return v == 5;
    };
    int r = arr.findLastIndex(pred);
    assertEqual(1, r);
    assertEqual(1, cc[0]);
    }

    /**
     * Verify always-false predicate returns -1 and calls length times
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_4400
     * @tc.name int32ArrayFindLastIndexPart03Test044
     * @tc.desc Verify always-false predicate returns -1 and calls length times
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test044() {
    Int32Array arr = new Int32Array(new int[] {1, 1, 1, 1});
    int[] cc = {0};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        cc[0] = cc[0] + 1;
        return false;
    };
    int r = arr.findLastIndex(pred);
    assertEqual(-1, r);
    assertEqual(4, cc[0]);
    }

    /**
     * Verify only first element matches returns 0 with length calls
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_4500
     * @tc.name int32ArrayFindLastIndexPart03Test045
     * @tc.desc Verify only first element matches returns 0 with length calls
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test045() {
    Int32Array arr = new Int32Array(new int[] {77, 1, 2, 3, 4});
    int[] cc = {0};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        cc[0] = cc[0] + 1;
        return v == 77;
    };
    int r = arr.findLastIndex(pred);
    assertEqual(0, r);
    assertEqual(5, cc[0]);
    }

    /**
     * Verify no match returns -1 with length calls
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_4600
     * @tc.name int32ArrayFindLastIndexPart03Test046
     * @tc.desc Verify no match returns -1 with length calls
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test046() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] cc = {0};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        cc[0] = cc[0] + 1;
        return v == 999;
    };
    int r = arr.findLastIndex(pred);
    assertEqual(-1, r);
    assertEqual(5, cc[0]);
    }

    /**
     * Verify only last element matches returns length-1 with 1 call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_4700
     * @tc.name int32ArrayFindLastIndexPart03Test047
     * @tc.desc Verify only last element matches returns length-1 with 1 call
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test047() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 88});
    int[] cc = {0};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        cc[0] = cc[0] + 1;
        return v == 88;
    };
    int r = arr.findLastIndex(pred);
    assertEqual(4, r);
    assertEqual(1, cc[0]);
    }

    /**
     * Verify four element reverse visit order 3, 2, 1, 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_4800
     * @tc.name int32ArrayFindLastIndexPart03Test048
     * @tc.desc Verify four element reverse visit order 3, 2, 1, 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test048() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    List<Integer> idxs = new ArrayList<>();
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        idxs.add(i);
        return false;
    };
    arr.findLastIndex(pred);
    assertEqual(4, idxs.size());
    assertEqualInt(3, idxs.get(0));
    assertEqualInt(2, idxs.get(1));
    assertEqualInt(1, idxs.get(2));
    assertEqualInt(0, idxs.get(3));
    }

    /**
     * Verify middle element matches visits last and middle only
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_4900
     * @tc.name int32ArrayFindLastIndexPart03Test049
     * @tc.desc Verify middle element matches visits last and middle only
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test049() {
    Int32Array arr = new Int32Array(new int[] {1, 7, 3});
    List<Integer> idxs = new ArrayList<>();
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        idxs.add(i);
        return v == 7;
    };
    int r = arr.findLastIndex(pred);
    assertEqual(1, r);
    assertEqual(2, idxs.size());
    assertEqualInt(2, idxs.get(0));
    assertEqualInt(1, idxs.get(1));
    }

    /**
     * Verify third callback arg references same Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_5000
     * @tc.name int32ArrayFindLastIndexPart03Test050
     * @tc.desc Verify third callback arg references same Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test050() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] same = {false};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        same[0] = (a == arr);
        return true;
    };
    arr.findLastIndex(pred);
    assertTrue(same[0]);
    }

    /**
     * Verify callback third arg length stays constant during traversal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_5100
     * @tc.name int32ArrayFindLastIndexPart03Test051
     * @tc.desc Verify callback third arg length stays constant during traversal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test051() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    boolean[] ok = {true};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        if (a.length() != 4) {
            ok[0] = false;
        }
        return i == 0;
        };
    arr.findLastIndex(pred);
    assertTrue(ok[0]);
    }

    /**
     * Verify value equals a[i] at each callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_5200
     * @tc.name int32ArrayFindLastIndexPart03Test052
     * @tc.desc Verify value equals a[i] at each callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test052() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    boolean[] ok = {true};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        if (v != a.get(i)) {
            ok[0] = false;
        }
        return false;
        };
    arr.findLastIndex(pred);
    assertTrue(ok[0]);
    }

    /**
     * Verify typeof value is number
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_5400
     * @tc.name int32ArrayFindLastIndexPart03Test054
     * @tc.desc Verify typeof value is number
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test054() {
    Int32Array arr = new Int32Array(new int[] {1});
    String[] t = {""};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        t[0] = BasTest.typeofValue(v);
        return true;
    };
    arr.findLastIndex(pred);
    assertEqual("number", t[0]);
    }

    /**
     * Verify subarray callback third arg is subarray itself
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_5500
     * @tc.name int32ArrayFindLastIndexPart03Test055
     * @tc.desc Verify subarray callback third arg is subarray itself
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test055() {
    Int32Array arr = new Int32Array(new int[] {0, 1, 2, 3, 4});
    Int32Array sub = arr.subarray(2, 5);
    int[] len = {-1};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        len[0] = a.length();
        return true;
    };
    sub.findLastIndex(pred);
    assertEqual(3, len[0]);
    }

    /**
     * Verify mutating matched element during callback still returns that index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_5600
     * @tc.name int32ArrayFindLastIndexPart03Test056
     * @tc.desc Verify mutating matched element during callback still returns that index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test056() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 7});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        a.set(i, 0);
        return v == 7;
    };
    int r = arr.findLastIndex(pred);
    assertEqual(2, r);
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify mutating already-visited right-side elements does not change return
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_5700
     * @tc.name int32ArrayFindLastIndexPart03Test057
     * @tc.desc Verify mutating already-visited right-side elements does not change return
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test057() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        if (i < a.length() - 1) {
            a.set(i + 1, 99);
        }
        return i == 0;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(0, r);
    }

    /**
     * Verify reverse visit order logs i:v pairs
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_5800
     * @tc.name int32ArrayFindLastIndexPart03Test058
     * @tc.desc Verify reverse visit order logs i:v pairs
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test058() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    String[] log = {""};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        log[0] = log[0] + String.valueOf(i) + ":" + String.valueOf(v) + ",";
        return false;
    };
    arr.findLastIndex(pred);
    assertEqual("2:30,1:20,0:10,", log[0]);
    }

    /**
     * Verify mutating unvisited left element to match hits it later
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_5900
     * @tc.name int32ArrayFindLastIndexPart03Test059
     * @tc.desc Verify mutating unvisited left element to match hits it later
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test059() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        if (i > 0) {
            a.set(i - 1, 1);
        }
        return v == 1;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(2, r);
    }

    /**
     * Verify Number.NaN converts to 0 via ToInt32, v!==v returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_6000
     * @tc.name int32ArrayFindLastIndexPart03Test060
     * @tc.desc Verify Number.NaN converts to 0 via ToInt32, v!==v returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test060() {
    Int32Array arr = new Int32Array(new double[] {1, Double.NaN, 3, Double.NaN});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return v != v;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(-1, r);
    }

    /**
     * Verify no Number.NaN with v!==v predicate returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_6100
     * @tc.name int32ArrayFindLastIndexPart03Test061
     * @tc.desc Verify no Number.NaN with v!==v predicate returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test061() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return v != v;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(-1, r);
    }

    /**
     * Verify Number.POSITIVE_INFINITY ToInt32 is 0, predicate matches 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_6300
     * @tc.name int32ArrayFindLastIndexPart03Test063
     * @tc.desc Verify Number.POSITIVE_INFINITY ToInt32 is 0, predicate matches 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test063() {
    Int32Array arr = new Int32Array(new double[] {Double.POSITIVE_INFINITY, 7});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return v == 0;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(0, r);
    }

    /**
     * Verify Double.NEGATIVE_INFINITY ToInt32 is 0, matches single element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_6400
     * @tc.name int32ArrayFindLastIndexPart03Test064
     * @tc.desc Verify Double.NEGATIVE_INFINITY ToInt32 is 0, matches single element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test064() {
    Int32Array arr = new Int32Array(new double[] {Double.NEGATIVE_INFINITY});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return v == 0;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(0, r);
    }

    /**
     * Verify 3.9 ToInt32 truncates to 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_6600
     * @tc.name int32ArrayFindLastIndexPart03Test066
     * @tc.desc Verify 3.9 ToInt32 truncates to 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test066() {
    Int32Array arr = new Int32Array(new double[] {3.9, 5});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return v == 3;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(0, r);
    }

    /**
     * Verify no match returns strictly -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_6800
     * @tc.name int32ArrayFindLastIndexPart03Test068
     * @tc.desc Verify no match returns strictly -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test068() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return false;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(-1, r);
    }

    /**
     * Verify matching first element returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_6900
     * @tc.name int32ArrayFindLastIndexPart03Test069
     * @tc.desc Verify matching first element returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test069() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return v == 5;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(0, r);
    }

    /**
     * Verify matching last element returns length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_7000
     * @tc.name int32ArrayFindLastIndexPart03Test070
     * @tc.desc Verify matching last element returns length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test070() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return v == 40;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(arr.length() - 1, r);
    }

    /**
     * Verify read-only traversal preserves original elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_7100
     * @tc.name int32ArrayFindLastIndexPart03Test071
     * @tc.desc Verify read-only traversal preserves original elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test071() {
    Int32Array arr = new Int32Array(new int[] {3, 1, 4, 1, 5});
    Integer b0 = arr.get(0);
    Integer b1 = arr.get(1);
    Integer b2 = arr.get(2);
    Integer b3 = arr.get(3);
    Integer b4 = arr.get(4);
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return v == 4;
        };
    arr.findLastIndex(pred);
    assertEqual(b0.intValue(), arr.get(0).intValue());
    assertEqual(b1.intValue(), arr.get(1).intValue());
    assertEqual(b2.intValue(), arr.get(2).intValue());
    assertEqual(b3.intValue(), arr.get(3).intValue());
    assertEqual(b4.intValue(), arr.get(4).intValue());
    }

    /**
     * Verify length unchanged after findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_7200
     * @tc.name int32ArrayFindLastIndexPart03Test072
     * @tc.desc Verify length unchanged after findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test072() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int lenBefore = arr.length();
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return v == 2;
        };
    arr.findLastIndex(pred);
    assertEqual(lenBefore, arr.length());
    }

    /**
     * Verify overlapping shared buffer view mutation visible
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_7300
     * @tc.name int32ArrayFindLastIndexPart03Test073
     * @tc.desc Verify overlapping shared buffer view mutation visible
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test073() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a1 = new Int32Array(buf);
    a1.set(0, 1);
    a1.set(1, 2);
    a1.set(2, 3);
    a1.set(3, 4);
    Int32Array a2 = new Int32Array(buf, 4, 3);
    List<Integer> seen = new ArrayList<>();
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        seen.add(v);
        if (i == 1) {
            a2.set(0, 99);
    }
        return false;
        };
    a2.findLastIndex(pred);
    assertEqual(3, seen.size());
    assertEqualInt(4, seen.get(0));
    }

    /**
     * Verify read-only traversal preserves underlying buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_7400
     * @tc.name int32ArrayFindLastIndexPart03Test074
     * @tc.desc Verify read-only traversal preserves underlying buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test074() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array a = new Int32Array(buf);
    a.set(0, 7);
    a.set(1, 8);
    a.set(2, 9);
    Int32Array.Int32ArrayFinder pred = (v, i, arr) -> {
        return v == 8;
        };
    a.findLastIndex(pred);
    assertEqualInt(7, a.get(0));
    assertEqualInt(8, a.get(1));
    assertEqualInt(9, a.get(2));
    }

    /**
     * Verify length=100 match at 50 returns 50 with 50 calls
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_7500
     * @tc.name int32ArrayFindLastIndexPart03Test075
     * @tc.desc Verify length=100 match at 50 returns 50 with 50 calls
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test075() {
    int[] len = {100};
    Int32Array arr = new Int32Array(len[0]);
    for (int k = 0; k < len[0]; k = k + 1) {
        arr.set(k, k);
    }
    int[] calls = {0};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        calls[0] = calls[0] + 1;
        return v == 50;
    };
    int r = arr.findLastIndex(pred);
    assertEqual(50, r);
    assertEqual(50, calls[0]);
    }

    /**
     * Verify length=100 match at 99 returns 99 with 1 call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_7600
     * @tc.name int32ArrayFindLastIndexPart03Test076
     * @tc.desc Verify length=100 match at 99 returns 99 with 1 call
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test076() {
    Int32Array arr = new Int32Array(100);
    int[] calls = {0};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        calls[0] = calls[0] + 1;
        return i == 99;
    };
    int r = arr.findLastIndex(pred);
    assertEqual(99, r);
    assertEqual(1, calls[0]);
    }

    /**
     * Verify length=100 match at 0 returns 0 with 100 calls
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_7700
     * @tc.name int32ArrayFindLastIndexPart03Test077
     * @tc.desc Verify length=100 match at 0 returns 0 with 100 calls
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test077() {
    Int32Array arr = new Int32Array(100);
    int[] calls = {0};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        calls[0] = calls[0] + 1;
        return i == 0;
    };
    int r = arr.findLastIndex(pred);
    assertEqual(0, r);
    assertEqual(100, calls[0]);
    }

    /**
     * Verify findLastIndex works on slice copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_7800
     * @tc.name int32ArrayFindLastIndexPart03Test078
     * @tc.desc Verify findLastIndex works on slice copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test078() {
    Int32Array orig = new Int32Array(new int[] {1, 2, 3});
    Int32Array cp = orig.slice();
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return v == 2;
        };
    int r = cp.findLastIndex(pred);
    assertEqual(1, r);
    }

    /**
     * Verify ArrayBuffer(byteOffset=0, length) view works
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_7900
     * @tc.name int32ArrayFindLastIndexPart03Test079
     * @tc.desc Verify ArrayBuffer(byteOffset=0, length) view works
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastIndexPart03Test079() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 0, 3);
    arr.set(0, 5);
    arr.set(1, 6);
    arr.set(2, 7);
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        return v == 6;
        };
    int r = arr.findLastIndex(pred);
    assertEqual(1, r);
    }

    /**
     * Verify always-false predicate returns -1 with length calls
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_INDEX_PART03_8200
     * @tc.name int32ArrayFindLastIndexPart03Test082
     * @tc.desc Verify always-false predicate returns -1 with length calls
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
