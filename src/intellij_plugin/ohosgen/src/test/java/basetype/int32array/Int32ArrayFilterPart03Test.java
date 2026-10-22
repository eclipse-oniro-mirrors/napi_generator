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

import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFilterPart03Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFilterPart03Test extends BasTest {
    /**
     * Verify filter missing callback throws ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_0100
     * @tc.name int32ArrayFilterPart03Test001
     * @tc.desc Verify filter missing callback throws ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test001() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter null callback throws ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_0200
     * @tc.name int32ArrayFilterPart03Test002
     * @tc.desc Verify filter null callback throws ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test002() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter with 0 as callback throws ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_0300
     * @tc.name int32ArrayFilterPart03Test003
     * @tc.desc Verify filter with 0 as callback throws ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test003() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter with 1 as callback throws ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_0400
     * @tc.name int32ArrayFilterPart03Test004
     * @tc.desc Verify filter with 1 as callback throws ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test004() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter with Number.NaN as callback throws ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_0500
     * @tc.name int32ArrayFilterPart03Test005
     * @tc.desc Verify filter with Number.NaN as callback throws ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test005() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter with Number.POSITIVE_INFINITY as callback throws ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_0600
     * @tc.name int32ArrayFilterPart03Test006
     * @tc.desc Verify filter with Number.POSITIVE_INFINITY as callback throws ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test006() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter with negative Number.POSITIVE_INFINITY as callback throws ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_0700
     * @tc.name int32ArrayFilterPart03Test007
     * @tc.desc Verify filter with negative Number.POSITIVE_INFINITY as callback throws ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test007() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter with empty string callback throws ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_0800
     * @tc.name int32ArrayFilterPart03Test008
     * @tc.desc Verify filter with empty string callback throws ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test008() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter with non-empty string callback throws ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_0900
     * @tc.name int32ArrayFilterPart03Test009
     * @tc.desc Verify filter with non-empty string callback throws ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test009() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter with true as callback throws ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_1000
     * @tc.name int32ArrayFilterPart03Test010
     * @tc.desc Verify filter with true as callback throws ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test010() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter with false as callback throws ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_1100
     * @tc.name int32ArrayFilterPart03Test011
     * @tc.desc Verify filter with false as callback throws ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test011() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter with plain Object callback throws ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_1200
     * @tc.name int32ArrayFilterPart03Test012
     * @tc.desc Verify filter with plain Object callback throws ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test012() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    Object fakeObj = new Object();
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter with Int32Array instance callback throws ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_1300
     * @tc.name int32ArrayFilterPart03Test013
     * @tc.desc Verify filter with Int32Array instance callback throws ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test013() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    Int32Array fake = new Int32Array(0);
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter with ArrayBuffer callback throws ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_1400
     * @tc.name int32ArrayFilterPart03Test014
     * @tc.desc Verify filter with ArrayBuffer callback throws ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test014() {
    Int32Array arr = new Int32Array(new int[] {1});
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter with JS array callback throws ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_1500
     * @tc.name int32ArrayFilterPart03Test015
     * @tc.desc Verify filter with JS array callback throws ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test015() {
    Int32Array arr = new Int32Array(new int[] {1});
    List<Integer> fakeArr = java.util.Arrays.asList(1, 2, 3);
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify callback throw at first element propagates with message
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_1600
     * @tc.name int32ArrayFilterPart03Test016
     * @tc.desc Verify callback throw at first element propagates with message
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test016() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    String[] errMsg = {""};
    try {
    arr.filter((v, i, a) -> {
    return BasTest.throwTestError("first-boom");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    errMsg[0] = e.getMessage();
    }
    assertEqual("first-boom", errMsg[0]);
    }

    /**
     * Verify callback throw Error e.name is Error
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_1700
     * @tc.name int32ArrayFilterPart03Test017
     * @tc.desc Verify callback throw Error e.name is Error
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test017() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    arr.filter((v, i, a) -> {
    return BasTest.throwTestError("x");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify callback throw at middle element visits i+1 elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_1800
     * @tc.name int32ArrayFilterPart03Test018
     * @tc.desc Verify callback throw at middle element visits i+1 elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test018() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int[] visited = {0};
    try {
    arr.filter((v, i, a) -> {
        visited[0] = visited[0] + 1;
        if (i == 2) {
    return BasTest.throwTestError("mid");
    }
    return v > 0;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(3, visited[0]);
    }

    /**
     * Verify callback throw at last element visits all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_1900
     * @tc.name int32ArrayFilterPart03Test019
     * @tc.desc Verify callback throw at last element visits all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test019() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] visited = {0};
    try {
    arr.filter((v, i, a) -> {
    visited[0] = visited[0] + 1;
    if (i == a.length() - 1) {
    return BasTest.throwTestError("last");
    }
    return true;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(5, visited[0]);
    }

    /**
     * Verify callback throw RangeError preserves e.name
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_2000
     * @tc.name int32ArrayFilterPart03Test020
     * @tc.desc Verify callback throw RangeError preserves e.name
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test020() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    arr.filter((v, i, a) -> {
    throw new RangeError("range-err");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify callback throw TypeError preserves e.name
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_2100
     * @tc.name int32ArrayFilterPart03Test021
     * @tc.desc Verify callback throw TypeError preserves e.name
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test021() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    arr.filter((v, i, a) -> {
    throw new TypeError("type-err");
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify callback throws at i=1 short-circuits subsequent elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_2200
     * @tc.name int32ArrayFilterPart03Test022
     * @tc.desc Verify callback throws at i=1 short-circuits subsequent elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test022() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] reached = {0};
    try {
    arr.filter((v, i, a) -> {
    if (i == 1) {
    return BasTest.throwTestError("stop");
    }
    reached[0] = reached[0] + 1;
    return true;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(1, reached[0]);
    }

    /**
     * Verify empty array filter does not invoke callback even with throw body
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_2300
     * @tc.name int32ArrayFilterPart03Test023
     * @tc.desc Verify empty array filter does not invoke callback even with throw body
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test023() {
    Int32Array arr = new Int32Array(0);
    boolean[] called = {false};
    Int32Array r = arr.filter((v, i, a) -> {
        called[0] = true;
        return BasTest.throwTestError("should-not-reach");
    });
    assertFalse(called[0]);
    assertEqual(0, r.length());
    }

    /**
     * Verify single element callback throw propagates Error
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_2400
     * @tc.name int32ArrayFilterPart03Test024
     * @tc.desc Verify single element callback throw propagates Error
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test024() {
    Int32Array arr = new Int32Array(new int[] {7});
    try {
    arr.filter((v, i, a) -> {
    return BasTest.throwTestError("single-elem");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify callback throw result assignment does not occur
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_2500
     * @tc.name int32ArrayFilterPart03Test025
     * @tc.desc Verify callback throw result assignment does not occur
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test025() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array[] captured = {null};
    boolean[] gotResult = {false};
    try {
    Int32Array r = arr.filter((v, i, a) -> {
    if (i == 2) {
    return BasTest.throwTestError("abort");
    }
    return true;
    });
    captured[0] = r;
    gotResult[0] = true;
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("abort", e.getMessage());
    }
    assertFalse(gotResult[0]);
    assertNull(captured[0]);
    }

    /**
     * Verify mutation via third param survives throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_2600
     * @tc.name int32ArrayFilterPart03Test026
     * @tc.desc Verify mutation via third param survives throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test026() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    try {
    arr.filter((v, i, a) -> {
        a.set(i, v + 100);
        if (i == 1) {
    return BasTest.throwTestError("after-write");
    }
    return true;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqualInt(110, arr.get(0));
    assertEqualInt(120, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify callback always false yields length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_2700
     * @tc.name int32ArrayFilterPart03Test027
     * @tc.desc Verify callback always false yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test027() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    Int32Array r = arr.filter((v, i, a) -> {
        return false;
        });
    assertEqual(0, r.length());
    }

    /**
     * Verify even values filtered when predicate branches return true/false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_2800
     * @tc.name int32ArrayFilterPart03Test028
     * @tc.desc Verify even values filtered when predicate branches return true/false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test028() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    Int32Array r = arr.filter((v, i, a) -> {
        if (v % 2 == 0) {
        return true;
        }
        return false;
        });
    assertEqual(3, r.length());
    assertEqualInt(2, r.get(0));
    assertEqualInt(4, r.get(1));
    assertEqualInt(6, r.get(2));
    }

    /**
     * Verify always false and unsatisfied predicate both yield empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_2900
     * @tc.name int32ArrayFilterPart03Test029
     * @tc.desc Verify always false and unsatisfied predicate both yield empty
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test029() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    Int32Array r1 = arr.filter((v, i, a) -> false);
    Int32Array r2 = arr.filter((v, i, a) -> v > 9999);
    assertEqual(r2.length(), r1.length());
    assertEqual(0, r1.length());
    }

    /**
     * Verify zero value filter v!==0 removes zeros
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_3000
     * @tc.name int32ArrayFilterPart03Test030
     * @tc.desc Verify zero value filter v!==0 removes zeros
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test030() {
    Int32Array arr = new Int32Array(new int[] {0, 1, 0, 2, 0});
    Int32Array r = arr.filter((v, i, a) -> v != 0);
    assertEqual(2, r.length());
    assertEqualInt(1, r.get(0));
    assertEqualInt(2, r.get(1));
    }

    /**
     * Verify true plus false result lengths sum to source length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_3100
     * @tc.name int32ArrayFilterPart03Test031
     * @tc.desc Verify true plus false result lengths sum to source length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test031() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array rt = arr.filter((v, i, a) -> true);
    Int32Array rf = arr.filter((v, i, a) -> false);
    assertEqual(arr.length(), rt.length() + rf.length());
    }

    /**
     * Verify empty array filter returns empty and does not call callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_3200
     * @tc.name int32ArrayFilterPart03Test032
     * @tc.desc Verify empty array filter returns empty and does not call callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test032() {
    Int32Array arr = new Int32Array(0);
    int[] count = {0};
    Int32Array r = arr.filter((v, i, a) -> {
        count[0] = count[0] + 1;
        return true;
    });
    assertEqual(0, r.length());
    assertEqual(0, count[0]);
    }

    /**
     * Verify empty array result has independent buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_3300
     * @tc.name int32ArrayFilterPart03Test033
     * @tc.desc Verify empty array result has independent buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test033() {
    Int32Array arr = new Int32Array(0);
    Int32Array r = arr.filter((v, i, a) -> true);
    assertEqual(false, r.buffer() == arr.buffer());
    }

    /**
     * Verify empty array result byteLength and byteOffset equal 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_3400
     * @tc.name int32ArrayFilterPart03Test034
     * @tc.desc Verify empty array result byteLength and byteOffset equal 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test034() {
    Int32Array arr = new Int32Array(0);
    Int32Array r = arr.filter((v, i, a) -> true);
    assertEqual(0, r.byteLength());
    assertEqual(0, r.byteOffset());
    }

    /**
     * Verify ArrayBuffer(0) constructed array filter returns empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_3500
     * @tc.name int32ArrayFilterPart03Test035
     * @tc.desc Verify ArrayBuffer(0) constructed array filter returns empty
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test035() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int32Array arr = new Int32Array(buf);
    Int32Array r = arr.filter((v, i, a) -> true);
    assertEqual(0, r.length());
    }

    /**
     * Verify subarray begin greater than end yields empty filter result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_3600
     * @tc.name int32ArrayFilterPart03Test036
     * @tc.desc Verify subarray begin greater than end yields empty filter result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test036() {
    Int32Array src = new Int32Array(new int[] {1, 2, 3});
    Int32Array empty = src.subarray(5, 10);
    Int32Array r = empty.filter((v, i, a) -> true);
    assertEqual(0, r.length());
    }

    /**
     * Verify subarray begin equals end yields empty filter result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_3700
     * @tc.name int32ArrayFilterPart03Test037
     * @tc.desc Verify subarray begin equals end yields empty filter result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test037() {
    Int32Array src = new Int32Array(new int[] {1, 2, 3});
    Int32Array empty = src.subarray(2, 2);
    Int32Array r = empty.filter((v, i, a) -> true);
    assertEqual(0, r.length());
    }

    /**
     * Verify chained filter on empty result stays empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_3800
     * @tc.name int32ArrayFilterPart03Test038
     * @tc.desc Verify chained filter on empty result stays empty
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test038() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    Int32Array r1 = arr.filter((v, i, a) -> v > 999);
    Int32Array r2 = r1.filter((v, i, a) -> true);
    assertEqual(0, r2.length());
    }

    /**
     * Verify single element true filter returns same value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_3900
     * @tc.name int32ArrayFilterPart03Test039
     * @tc.desc Verify single element true filter returns same value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test039() {
    Int32Array arr = new Int32Array(new int[] {42});
    Int32Array r = arr.filter((v, i, a) -> true);
    assertEqual(1, r.length());
    assertEqualInt(42, r.get(0));
    }

    /**
     * Verify single element false filter returns empty leaving source intact
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_4000
     * @tc.name int32ArrayFilterPart03Test040
     * @tc.desc Verify single element false filter returns empty leaving source intact
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test040() {
    Int32Array arr = new Int32Array(new int[] {42});
    Int32Array r = arr.filter((v, i, a) -> false);
    assertEqual(0, r.length());
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify single zero element filter v===0 retains it
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_4100
     * @tc.name int32ArrayFilterPart03Test041
     * @tc.desc Verify single zero element filter v===0 retains it
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test041() {
    Int32Array arr = new Int32Array(new int[] {0});
    Int32Array r = arr.filter((v, i, a) -> v == 0);
    assertEqual(1, r.length());
    assertEqualInt(0, r.get(0));
    }

    /**
     * Verify single zero element filter v!==0 removes it
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_4200
     * @tc.name int32ArrayFilterPart03Test042
     * @tc.desc Verify single zero element filter v!==0 removes it
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test042() {
    Int32Array arr = new Int32Array(new int[] {0});
    Int32Array r = arr.filter((v, i, a) -> v != 0);
    assertEqual(0, r.length());
    }

    /**
     * Verify single element predicate i===0 retains
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_4600
     * @tc.name int32ArrayFilterPart03Test046
     * @tc.desc Verify single element predicate i===0 retains
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test046() {
    Int32Array arr = new Int32Array(new int[] {1});
    Int32Array r = arr.filter((v, i, a) -> i == 0);
    assertEqual(1, r.length());
    assertEqualInt(1, r.get(0));
    }

    /**
     * Verify single element predicate i!==0 removes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_4700
     * @tc.name int32ArrayFilterPart03Test047
     * @tc.desc Verify single element predicate i!==0 removes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test047() {
    Int32Array arr = new Int32Array(new int[] {1});
    Int32Array r = arr.filter((v, i, a) -> i != 0);
    assertEqual(0, r.length());
    }

    /**
     * Verify callback third arg is same reference as source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_4800
     * @tc.name int32ArrayFilterPart03Test048
     * @tc.desc Verify callback third arg is same reference as source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test048() {
    Int32Array arr = new Int32Array(new int[] {99});
    boolean[] same = {false};
    arr.filter((v, i, a) -> {
    same[0] = (a == arr);
    return true;
    });
    assertTrue(same[0]);
    }

    /**
     * Verify all same positive values retained on equality predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_5000
     * @tc.name int32ArrayFilterPart03Test050
     * @tc.desc Verify all same positive values retained on equality predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test050() {
    Int32Array arr = new Int32Array(new int[] {7, 7, 7, 7, 7});
    Int32Array r = arr.filter((v, i, a) -> v == 7);
    assertEqual(5, r.length());
    assertEqualInt(7, r.get(0));
    assertEqualInt(7, r.get(4));
    }

    /**
     * Verify all same positive values non-matching predicate yields empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_5100
     * @tc.name int32ArrayFilterPart03Test051
     * @tc.desc Verify all same positive values non-matching predicate yields empty
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test051() {
    Int32Array arr = new Int32Array(new int[] {7, 7, 7});
    Int32Array r = arr.filter((v, i, a) -> v != 7);
    assertEqual(0, r.length());
    }

    /**
     * Verify all zeros v!==0 yields empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_5200
     * @tc.name int32ArrayFilterPart03Test052
     * @tc.desc Verify all zeros v!==0 yields empty
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test052() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0});
    Int32Array r = arr.filter((v, i, a) -> v != 0);
    assertEqual(0, r.length());
    }

    /**
     * Verify all zeros true predicate all retained
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_5300
     * @tc.name int32ArrayFilterPart03Test053
     * @tc.desc Verify all zeros true predicate all retained
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test053() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0, 0});
    Int32Array r = arr.filter((v, i, a) -> true);
    assertEqual(5, r.length());
    boolean allZero = true;
    for (int k = 0; k < r.length(); k++) {
    if (r.get(k) != 0) {
    allZero = false;
    }
    }
    assertTrue(allZero);
    }

    /**
     * Verify throw at middle of all-same array visits correct count
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_5500
     * @tc.name int32ArrayFilterPart03Test055
     * @tc.desc Verify throw at middle of all-same array visits correct count
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test055() {
    Int32Array arr = new Int32Array(new int[] {5, 5, 5, 5, 5});
    int[] visited = {0};
    try {
    arr.filter((v, i, a) -> {
        visited[0] = visited[0] + 1;
        if (i == 3) {
    return BasTest.throwTestError("mid-all-same[0]");
    }
    return true;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(4, visited[0]);
    }

    /**
     * Verify even-index predicate halves the all-same array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_5700
     * @tc.name int32ArrayFilterPart03Test057
     * @tc.desc Verify even-index predicate halves the all-same array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test057() {
    Int32Array arr = new Int32Array(new int[] {9, 9, 9, 9, 9, 9});
    Int32Array r = arr.filter((v, i, a) -> i % 2 == 0);
    assertEqual(3, r.length());
    boolean allNine = true;
    for (int k = 0; k < r.length(); k++) {
    if (r.get(k) != 9) {
    allNine = false;
    }
    }
    assertTrue(allNine);
    }

    /**
     * Verify odd-index predicate floor half count
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_5800
     * @tc.name int32ArrayFilterPart03Test058
     * @tc.desc Verify odd-index predicate floor half count
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test058() {
    Int32Array arr = new Int32Array(new int[] {4, 4, 4, 4, 4});
    Int32Array r = arr.filter((v, i, a) -> i % 2 == 1);
    assertEqual(2, r.length());
    assertEqualInt(4, r.get(0));
    assertEqualInt(4, r.get(1));
    }

    /**
     * Verify callback value matches source element via index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_6000
     * @tc.name int32ArrayFilterPart03Test060
     * @tc.desc Verify callback value matches source element via index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test060() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] mismatch = {false};
    arr.filter((v, i, a) -> {
    if (v != arr.get(i)) {
    mismatch[0] = true;
    }
    return true;
    });
    assertFalse(mismatch[0]);
    }

    /**
     * Verify callback third arg same reference as source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_6200
     * @tc.name int32ArrayFilterPart03Test062
     * @tc.desc Verify callback third arg same reference as source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test062() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean[] sameRef = {true};
    arr.filter((v, i, a) -> {
    if (a != arr) {
    sameRef[0] = false;
    }
    return true;
    });
    assertTrue(sameRef[0]);
    }

    /**
     * Verify a.length observed in callback matches source length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_6400
     * @tc.name int32ArrayFilterPart03Test064
     * @tc.desc Verify a.length observed in callback matches source length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test064() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int[] observedLen = {-1};
    arr.filter((v, i, a) -> {
    if (i == 0) {
    observedLen[0] = a.length();
    }
    return false;
    });
    assertEqual(4, observedLen[0]);
    }

    /**
     * Verify even-index result preserves original ordering
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_6500
     * @tc.name int32ArrayFilterPart03Test065
     * @tc.desc Verify even-index result preserves original ordering
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test065() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50, 60});
    Int32Array r = arr.filter((v, i, a) -> i % 2 == 0);
    assertEqual(3, r.length());
    assertEqualInt(10, r.get(0));
    assertEqualInt(30, r.get(1));
    assertEqualInt(50, r.get(2));
    }

    /**
     * Verify source length unchanged after filter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_6700
     * @tc.name int32ArrayFilterPart03Test067
     * @tc.desc Verify source length unchanged after filter
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test067() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.filter((v, i, a) -> v % 2 == 0);
    assertEqual(4, arr.length());
    }

    /**
     * Verify source elements unchanged after filter without mutation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_6800
     * @tc.name int32ArrayFilterPart03Test068
     * @tc.desc Verify source elements unchanged after filter without mutation
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test068() {
    Int32Array arr = new Int32Array(new int[] {3, 6, 9, 12});
    arr.filter((v, i, a) -> v > 5);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(6, arr.get(1));
    assertEqualInt(9, arr.get(2));
    assertEqualInt(12, arr.get(3));
    }

    /**
     * Verify chained filter on result yields correct nested predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_7100
     * @tc.name int32ArrayFilterPart03Test071
     * @tc.desc Verify chained filter on result yields correct nested predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart03Test071() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    Int32Array r1 = arr.filter((v, i, a) -> v > 2);
    Int32Array r2 = r1.filter((v, i, a) -> v % 2 == 0);
    assertEqual(2, r2.length());
    assertEqualInt(4, r2.get(0));
    assertEqualInt(6, r2.get(1));
    }

    /**
     * Verify callback invoked exactly source-length times when none match
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART03_7300
     * @tc.name int32ArrayFilterPart03Test073
     * @tc.desc Verify callback invoked exactly source-length times when none match
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
