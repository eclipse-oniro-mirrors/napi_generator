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
 * Int32ArrayEveryPart04Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayEveryPart04Test extends BasTest {

    static class Counter {
        Counter() {
        }
    }

    /**
     * Verify every keeps length unchanged after call on positive array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_0100
     * @tc.name int32ArrayEveryPart04Test001
     * @tc.desc Verify every keeps length unchanged after call on positive array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test001() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int before = arr.length();
    boolean r = arr.every((e, unusedIndex, array) -> e > 0);
    assertTrue(r);
    assertEqual(before, arr.length());
    assertEqual(4, before);
    }

    /**
     * Verify every keeps byteLength and byteOffset when returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_0200
     * @tc.name int32ArrayEveryPart04Test002
     * @tc.desc Verify every keeps byteLength and byteOffset when returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test002() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Int32Array arr = new Int32Array(buf, 8, 4);
    int beforeBO = arr.byteOffset();
    int beforeBL = arr.byteLength();
    boolean r = arr.every((e, unusedIndex, array) -> e == 0);
    assertTrue(r);
    assertEqual(beforeBO, arr.byteOffset());
    assertEqual(beforeBL, arr.byteLength());
    }

    /**
     * Verify after calling every on empty array the underlying buffer is still usable by other view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_0400
     * @tc.name int32ArrayEveryPart04Test004
     * @tc.desc Verify after calling every on empty array the underlying buffer is still usable by other view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test004() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array empty = new Int32Array(buf, 0, 0);
    boolean r = empty.every((e, unusedIndex, array) -> false);
    assertTrue(r);
    Int32Array other = new Int32Array(buf, 0, 4);
    other.set(0, 77);
    assertEqualInt(77, other.get(0));
    }

    /**
     * Verify every can be called multiple times returning consistent true result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_0500
     * @tc.name int32ArrayEveryPart04Test005
     * @tc.desc Verify every can be called multiple times returning consistent true result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test005() {
    Int32Array arr = new Int32Array(new int[] {2, 4, 6, 8});
    int[] callCount1 = {0};
    boolean r1 = arr.every((e, unusedIndex, array) -> {
        callCount1[0]++;
        return e % 2 == 0;
    });
    int[] callCount2 = {0};
    boolean r2 = arr.every((e, unusedIndex, array) -> {
        callCount2[0]++;
        return e % 2 == 0;
    });
    assertTrue(r1);
    assertTrue(r2);
    assertEqual(4, callCount1[0]);
    assertEqual(4, callCount2[0]);
    }

    /**
     * Verify buffer content unchanged when predicate throws and is caught
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_0700
     * @tc.name int32ArrayEveryPart04Test007
     * @tc.desc Verify buffer content unchanged when predicate throws and is caught
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test007() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 0, 3);
    arr.set(0, 11);
    arr.set(1, 22);
    arr.set(2, 33);
    try {
    arr.every((e, unusedIndex, array) -> {
        return BasTest.throwTestError("x");
        });
    fail();
    }
    catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("x", e.getMessage());
    }
    assertEqualInt(11, arr.get(0));
    assertEqualInt(22, arr.get(1));
    assertEqualInt(33, arr.get(2));
    }

    /**
     * Verify every on large (64-element) array returning true keeps first and last elements readable
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_0800
     * @tc.name int32ArrayEveryPart04Test008
     * @tc.desc Verify every on large (64-element) array returning true keeps first and last elements readable
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test008() {
    Int32Array arr = new Int32Array(64);
    for (int k = 0; k < 64; k++) {
    arr.set(k, k);
    }
    boolean r = arr.every((e, unusedIndex, array) -> e >= 0);
    assertTrue(r);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(63, arr.get(63));
    }

    /**
     * Verify predicate reading outer const constant returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_0900
     * @tc.name int32ArrayEveryPart04Test009
     * @tc.desc Verify predicate reading outer const constant returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test009() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7});
    int limit = 10;
    int[] callCount = {0};
    boolean r = arr.every((e, unusedIndex, array) -> {
        callCount[0]++;
        return e < limit;
    });
    assertTrue(r);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify predicate call count equals length when all true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_1000
     * @tc.name int32ArrayEveryPart04Test010
     * @tc.desc Verify predicate call count equals length when all true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test010() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int[] cnt = {0};
    boolean r = arr.every((e, unusedIndex, array) -> {
        cnt[0]++;
        return true;
    });
    assertTrue(r);
    assertEqual(4, cnt[0]);
    }

    /**
     * Verify predicate collecting visited elements into external array sees all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_1200
     * @tc.name int32ArrayEveryPart04Test012
     * @tc.desc Verify predicate collecting visited elements into external array sees all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test012() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    List<Integer> seen = new ArrayList<>();
    boolean r = arr.every((e, unusedIndex, array) -> {
        seen.add(e);
        return true;
    });
    assertTrue(r);
    assertEqual(3, seen.size());
    assertEqualInt(7, seen.get(0));
    assertEqualInt(9, seen.get(2));
    }

    /**
     * Verify outer boolean flag set in first callback is visible to later callbacks
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_1400
     * @tc.name int32ArrayEveryPart04Test014
     * @tc.desc Verify outer boolean flag set in first callback is visible to later callbacks
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test014() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    boolean[] flag = {false};
    boolean[] sawFlagTrue = {false};
    int[] callCount = {0};
    boolean r = arr.every((e, i, array) -> {
        callCount[0]++;
        if (i == 0) {
            flag[0] = true;
    }
    if (i > 0 && flag[0]) {
            sawFlagTrue[0] = true;
    }
        return true;
        });
    assertTrue(r);
    assertTrue(sawFlagTrue[0]);
    assertEqual(4, callCount[0]);
    }

    /**
     * Verify summing elements via external accumulator when all true equals array sum
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_1500
     * @tc.name int32ArrayEveryPart04Test015
     * @tc.desc Verify summing elements via external accumulator when all true equals array sum
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test015() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int[] sum = {0};
    boolean r = arr.every((e, unusedIndex, array) -> {
        sum[0] += e;
        return true;
    });
    assertTrue(r);
    assertEqual(10, sum[0]);
    }

    /**
     * Verify a.$_get(i) in predicate matches the passed element parameter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_1700
     * @tc.name int32ArrayEveryPart04Test017
     * @tc.desc Verify a.$_get(i) in predicate matches the passed element parameter
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test017() {
    Int32Array arr = new Int32Array(new int[] {11, 22, 33});
    boolean[] allMatch = {true};
    boolean r = arr.every((e, i, a) -> {
        if (a.get(i) != e) {
            allMatch[0] = false;
    }
        return true;
        });
    assertTrue(r);
    assertTrue(allMatch[0]);
    }

    /**
     * Verify a[i] subscript access in predicate matches the passed element parameter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_1800
     * @tc.name int32ArrayEveryPart04Test018
     * @tc.desc Verify a[i] subscript access in predicate matches the passed element parameter
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test018() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7});
    boolean[] ok = {true};
    boolean r = arr.every((e, i, a) -> {
        if (a.get(i) != e) {
            ok[0] = false;
    }
        return true;
        });
    assertTrue(r);
    assertTrue(ok[0]);
    }

    /**
     * Verify look-ahead read via a.$_get(i+1) at i=0 sees the next element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_1900
     * @tc.name int32ArrayEveryPart04Test019
     * @tc.desc Verify look-ahead read via a.$_get(i+1) at i=0 sees the next element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test019() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int[] nextAtFirst = {-1};
    int[] callCount = {0};
    boolean r = arr.every((e, i, a) -> {
        callCount[0]++;
        if (i == 0) {
            nextAtFirst[0] = a.get(i + 1);
    }
        return e > 0;
        });
    assertTrue(r);
    assertEqual(2, nextAtFirst[0]);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify look-behind via a.$_get(i-1) for strictly increasing predicate returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_2000
     * @tc.name int32ArrayEveryPart04Test020
     * @tc.desc Verify look-behind via a.$_get(i-1) for strictly increasing predicate returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test020() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int[] callCount = {0};
    boolean r = arr.every((e, i, a) -> { callCount[0]++; if (i == 0) {
        return true;
    }
        return e > a.get(i - 1);
        });
    assertTrue(r);
    assertEqual(4, callCount[0]);
    }

    /**
     * Verify $_set at current i is observed as changed previous on next callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_2100
     * @tc.name int32ArrayEveryPart04Test021
     * @tc.desc Verify $_set at current i is observed as changed previous on next callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test021() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    boolean[] sawChangedPrev = {false};
    int[] callCount = {0};
    boolean r = arr.every((e, i, a) -> {
        callCount[0]++;
        if (i > 0 && a.get(i - 1) == 100) {
            sawChangedPrev[0] = true;
    }
            a.set(i, 100);
        return true;
    });
    assertTrue(r);
    assertTrue(sawChangedPrev[0]);
    assertEqual(4, callCount[0]);
    }

    /**
     * Verify modifying upcoming elements at i=0 makes later predicates pass and return true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_2300
     * @tc.name int32ArrayEveryPart04Test023
     * @tc.desc Verify modifying upcoming elements at i=0 makes later predicates pass and return true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test023() {
    Int32Array arr = new Int32Array(new int[] {1, -2, -3});
    int[] callCount = {0};
    boolean r = arr.every((e, i, a) -> {
        callCount[0]++;
        if (i == 0) {
            a.set(1, 20);
        a.set(2, 30);
    }
        return e > 0 || a.get(i) > 0;
        });
    assertTrue(r);
    assertEqual(3, callCount[0]);
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify $_set with negative index throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_2700
     * @tc.name int32ArrayEveryPart04Test027
     * @tc.desc Verify $_set with negative index throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test027() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    arr.every((e, i, a) -> {
    a.set(-1, 77);
    return true;
    });
    fail();
    }
    catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify writes via shared-buffer subview inside predicate are visible through array reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_2800
     * @tc.name int32ArrayEveryPart04Test028
     * @tc.desc Verify writes via shared-buffer subview inside predicate are visible through array reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test028() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 0, 4);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.set(3, 4);
    boolean[] sawFive = {false};
    boolean r = arr.every((e, i, a) -> {
        if (i == 0) {
            Int32Array sub = new Int32Array(buf, 4, 1);
        sub.set(0, 5);
    }
    if (i == 1 && a.get(1) == 5) {
            sawFive[0] = true;
    }
        return true;
        });
    assertTrue(r);
    assertTrue(sawFive[0]);
    }

    /**
     * Verify writing 2^32 via $_set wraps to 0 after ToInt32
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_3200
     * @tc.name int32ArrayEveryPart04Test032
     * @tc.desc Verify writing 2^32 via $_set wraps to 0 after ToInt32
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test032() {
    Int32Array arr = new Int32Array(1);
    arr.set(0, 7);
    long wrapVal = 4294967296L;
    arr.every((e, i, a) -> {
    a.set(i, wrapVal);
    return true;
    });
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify writing -0 via $_set truncates toward zero to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_3300
     * @tc.name int32ArrayEveryPart04Test033
     * @tc.desc Verify writing -0 via $_set truncates toward zero to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test033() {
    Int32Array arr = new Int32Array(1);
    arr.set(0, 5);
    arr.every((e, i, a) -> {
    a.set(i, -0);
    return true;
    });
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify writing 2^32+1 via $_set wraps to 1 after ToInt32
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_3500
     * @tc.name int32ArrayEveryPart04Test035
     * @tc.desc Verify writing 2^32+1 via $_set wraps to 1 after ToInt32
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test035() {
    Int32Array arr = new Int32Array(1);
    long wrapVal = 4294967297L;
    arr.every((e, i, a) -> {
    a.set(i, wrapVal);
    return true;
    });
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify writing 0 via $_set reads back as 0 (-0 equals 0 after ToInt32)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_3600
     * @tc.name int32ArrayEveryPart04Test036
     * @tc.desc Verify writing 0 via $_set reads back as 0 (-0 equals 0 after ToInt32)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test036() {
    Int32Array arr = new Int32Array(1);
    arr.set(0, 5);
    int[] readBack = {1};
    arr.every((e, i, a) -> {
    a.set(i, 0);
    readBack[0] = a.get(i);
    return true;
    });
    assertEqual(0, readBack[0]);
    }

    /**
     * Verify parent writes during every are observed through subarray child view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_3700
     * @tc.name int32ArrayEveryPart04Test037
     * @tc.desc Verify parent writes during every are observed through subarray child view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test037() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array child = parent.subarray(1, 3);
    boolean[] sawChildChange = {false};
    boolean r = parent.every((e, i, a) -> {
        if (i == 1) {
            a.set(i, 99);
    }
    if (i == 2 && child.get(0) == 99) {
            sawChildChange[0] = true;
    }
        return true;
        });
    assertTrue(r);
    assertTrue(sawChildChange[0]);
    assertEqualInt(99, child.get(0));
    }

    /**
     * Verify child subarray writes during every are observed on parent view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_3800
     * @tc.name int32ArrayEveryPart04Test038
     * @tc.desc Verify child subarray writes during every are observed on parent view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test038() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array child = parent.subarray(1, 3);
    child.every((e, i, a) -> {
    a.set(i, 77);
    return true;
    });
    assertEqualInt(77, parent.get(1));
    assertEqualInt(77, parent.get(2));
    }

    /**
     * Verify writes to sibling Int32Array view on same ArrayBuffer are visible to a view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_3900
     * @tc.name int32ArrayEveryPart04Test039
     * @tc.desc Verify writes to sibling Int32Array view on same ArrayBuffer are visible to a view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test039() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array a = new Int32Array(buf, 0, 3);
    Int32Array b = new Int32Array(buf, 0, 3);
    a.set(0, 1);
    a.set(1, 2);
    a.set(2, 3);
    boolean r = a.every((e, unusedIndex, ar) -> {
        return true;
        });
    assertTrue(r);
    b.set(1, 55);
    assertEqualInt(55, a.get(1));
    }

    /**
     * Verify writes via offset views do not leak into slots of other offset views
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_4000
     * @tc.name int32ArrayEveryPart04Test040
     * @tc.desc Verify writes via offset views do not leak into slots of other offset views
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test040() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array lowView = new Int32Array(buf, 0, 2);
    Int32Array highView = new Int32Array(buf, 8, 2);
    lowView.set(0, 0);
    lowView.set(1, 0);
    highView.set(0, 0);
    highView.set(1, 0);
    lowView.every((e, i, a) -> {
    a.set(i, i + 10);
    return true;
    });
    highView.every((e, i, a) -> {
    a.set(i, i + 20);
    return true;
    });
    assertEqualInt(10, lowView.get(0));
    assertEqualInt(11, lowView.get(1));
    assertEqualInt(20, highView.get(0));
    assertEqualInt(21, highView.get(1));
    }

    /**
     * Verify subarray created after parent every returning true has correct length and elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_4100
     * @tc.name int32ArrayEveryPart04Test041
     * @tc.desc Verify subarray created after parent every returning true has correct length and elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test041() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4, 5});
    parent.every((e, unusedIndex, array) -> e > 0);
    Int32Array sub = parent.subarray(1, 4);
    assertEqual(3, sub.length());
    assertEqualInt(2, sub.get(0));
    assertEqualInt(4, sub.get(2));
    }

    /**
     * Verify only positions visited by short-circuited child every are modified on parent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_4200
     * @tc.name int32ArrayEveryPart04Test042
     * @tc.desc Verify only positions visited by short-circuited child every are modified on parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test042() {
    Int32Array parent = new Int32Array(new int[] {0, 0, 0, 0, 0});
    Int32Array child = parent.subarray(1, 4);
    child.every((e, i, a) -> {
    a.set(i, 1);
    return i < 1;
    });
    assertEqualInt(0, parent.get(0));
    assertEqualInt(1, parent.get(1));
    assertEqualInt(1, parent.get(2));
    assertEqualInt(0, parent.get(3));
    assertEqualInt(0, parent.get(4));
    }

    /**
     * Verify writes on one Int32Array view do not affect slots of interleaved other view on large buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_4300
     * @tc.name int32ArrayEveryPart04Test043
     * @tc.desc Verify writes on one Int32Array view do not affect slots of interleaved other view on large buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test043() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Int32Array headView = new Int32Array(buf, 0, 2);
    Int32Array tailView = new Int32Array(buf, 16, 2);
    headView.set(0, 11);
    headView.set(1, 22);
    tailView.set(0, 88);
    tailView.set(1, 99);
    headView.every((e, i, a) -> {
    a.set(i, e + 1);
    return true;
    });
    assertEqualInt(88, tailView.get(0));
    assertEqualInt(99, tailView.get(1));
    assertEqualInt(12, headView.get(0));
    assertEqualInt(23, headView.get(1));
    }

    /**
     * Verify writes via view at byteOffset=4 do not affect first 4-byte slot
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_4400
     * @tc.name int32ArrayEveryPart04Test044
     * @tc.desc Verify writes via view at byteOffset=4 do not affect first 4-byte slot
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test044() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array first = new Int32Array(buf, 0, 1);
    Int32Array rest = new Int32Array(buf, 4, 3);
    first.set(0, 100);
    rest.set(0, 1);
    rest.set(1, 2);
    rest.set(2, 3);
    rest.every((e, i, a) -> {
    a.set(i, e * 2);
    return true;
    });
    assertEqualInt(100, first.get(0));
    assertEqualInt(2, rest.get(0));
    assertEqualInt(6, rest.get(2));
    }

    /**
     * Verify single-element tail view at buffer end traverses normally with correct call count
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_4500
     * @tc.name int32ArrayEveryPart04Test045
     * @tc.desc Verify single-element tail view at buffer end traverses normally with correct call count
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test045() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array tail = new Int32Array(buf, 12, 1);
    tail.set(0, 42);
    int[] calls = {0};
    boolean r = tail.every((e, unusedIndex, array) -> {
        calls[0]++;
        return e == 42;
    });
    assertTrue(r);
    assertEqual(1, calls[0]);
    }

    /**
     * Verify nested every on independent array returns outer true with correct call counts
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_4600
     * @tc.name int32ArrayEveryPart04Test046
     * @tc.desc Verify nested every on independent array returns outer true with correct call counts
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test046() {
    Int32Array outer = new Int32Array(new int[] {1, 2, 3});
    Int32Array inner = new Int32Array(new int[] {10, 20});
    int[] outerCalls = {0};
    int[] innerCalls = {0};
    boolean r = outer.every((e, unusedIndex, array) -> {
        outerCalls[0]++;
        return inner.every((x, j, unusedB) -> {
            innerCalls[0]++;
        return x > 0;
        });
    });
    assertTrue(r);
    assertEqual(3, outerCalls[0]);
    assertEqual(6, innerCalls[0]);
    }

    /**
     * Verify recursive every on same array re-enters safely with independent inner traversal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_4700
     * @tc.name int32ArrayEveryPart04Test047
     * @tc.desc Verify recursive every on same array re-enters safely with independent inner traversal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test047() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int[] depth = {0};
    int[] maxDepth = {0};
    boolean r = arr.every((e, unusedIndex, a) -> {
        depth[0]++;
        if (depth[0] > maxDepth[0]) {
            maxDepth[0] = depth[0];
    }
    if (depth[0] < 2) {
                a.every((x, j, unusedB) -> {
        return x > 0;
        });
    }
            depth[0]--;
        return e > 0;
        });
    assertTrue(r);
    assertEqual(1, maxDepth[0]);
    }

    /**
     * Verify three-level nested every returning true produces correct total invocation count
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_4900
     * @tc.name int32ArrayEveryPart04Test049
     * @tc.desc Verify three-level nested every returning true produces correct total invocation count
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test049() {
    Int32Array outer = new Int32Array(new int[] {1});
    Int32Array middle = new Int32Array(new int[] {2, 3});
    Int32Array inner = new Int32Array(new int[] {4});
    int[] total = {0};
    boolean r = outer.every((e, unusedIndex, array) -> {
        total[0]++;
        return middle.every((m, j, unusedB) -> {
            total[0]++;
        return inner.every((n, k, c) -> {
            total[0]++;
        return true;
        });
        });
    });
    assertTrue(r);
    assertEqual(5, total[0]);
    }

    /**
     * Verify writes to independent inner array inside nested every do not affect outer elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_5100
     * @tc.name int32ArrayEveryPart04Test051
     * @tc.desc Verify writes to independent inner array inside nested every do not affect outer elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test051() {
    Int32Array outer = new Int32Array(new int[] {10, 20});
    Int32Array inner = new Int32Array(new int[] {0});
    int outerBefore = outer.get(0);
    outer.every((e, unusedIndex, array) -> {
    inner.every((x, j, b) -> {
    b.set(j, x + 100);
    return true;
    });
    return true;
    });
    assertEqualInt(outerBefore, outer.get(0));
    assertEqualInt(200, inner.get(0));
    }

    /**
     * Verify every over subarray view sums the correct element range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_5200
     * @tc.name int32ArrayEveryPart04Test052
     * @tc.desc Verify every over subarray view sums the correct element range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test052() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    Int32Array sub = arr.subarray(1, 4);
    int[] sum = {0};
    boolean r = sub.every((e, unusedIndex, array) -> {
        sum[0] += e;
        return e > 0;
    });
    assertTrue(r);
    assertEqual(90, sum[0]);
    assertEqual(3, sub.length());
    }

    /**
     * Verify every after Int32Array.from returns true for all-positive source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_5300
     * @tc.name int32ArrayEveryPart04Test053
     * @tc.desc Verify every after Int32Array.from returns true for all-positive source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test053() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3, 4, 5);
    Int32Array arr = Int32Array.from(src);
    int[] callCount = {0};
    boolean r = arr.every((e, unusedIndex, array) -> {
        callCount[0]++;
        return e > 0;
    });
    assertTrue(r);
    assertEqual(5, arr.length());
    assertEqual(5, callCount[0]);
    }

    /**
     * Verify every after Int32Array.of with boundary values returns true for int32 range check
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_5400
     * @tc.name int32ArrayEveryPart04Test054
     * @tc.desc Verify every after Int32Array.of with boundary values returns true for int32 range check
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test054() {
    Int32Array arr = Int32Array.of(Integer.MIN_VALUE, 0, 2147483647);
    int[] callCount = {0};
    boolean r = arr.every((e, unusedIndex, array) -> {
        callCount[0]++;
        return e >= Integer.MIN_VALUE && e <= 2147483647;
    });
    assertTrue(r);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify writes on slice copy during every do not affect original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_5500
     * @tc.name int32ArrayEveryPart04Test055
     * @tc.desc Verify writes on slice copy during every do not affect original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test055() {
    Int32Array orig = new Int32Array(new int[] {1, 2, 3});
    Int32Array cp = orig.slice(0);
    cp.every((e, i, a) -> {
    a.set(i, e + 100);
    return true;
    });
    assertEqualInt(1, orig.get(0));
    assertEqualInt(101, cp.get(0));
    }

    /**
     * Verify every traverses elements in index order after reverse (3, 2, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_5600
     * @tc.name int32ArrayEveryPart04Test056
     * @tc.desc Verify every traverses elements in index order after reverse (3, 2, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test056() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.reverse();
    List<Integer> seen = new ArrayList<>();
    boolean r = arr.every((e, unusedIndex, array) -> {
        seen.add(e);
        return true;
    });
    assertTrue(r);
    assertEqualInt(3, seen.get(0));
    assertEqualInt(2, seen.get(1));
    assertEqualInt(1, seen.get(2));
    }

    /**
     * Verify every after fill(7) returns true for equality with fill value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_5700
     * @tc.name int32ArrayEveryPart04Test057
     * @tc.desc Verify every after fill(7) returns true for equality with fill value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test057() {
    Int32Array arr = new Int32Array(4);
    arr.fill(7);
    int[] callCount = {0};
    boolean r = arr.every((e, unusedIndex, array) -> {
        callCount[0]++;
        return e == 7;
    });
    assertTrue(r);
    assertEqual(4, callCount[0]);
    }

    /**
     * Verify every after sort returns true for non-decreasing check
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_5800
     * @tc.name int32ArrayEveryPart04Test058
     * @tc.desc Verify every after sort returns true for non-decreasing check
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test058() {
    Int32Array arr = new Int32Array(new int[] {3, 1, 4, 1, 5});
    arr.sort();
    int[] callCount = {0};
    boolean r = arr.every((e, i, a) -> { callCount[0]++; if (i == 0) {
        return true;
    }
        return e >= a.get(i - 1);
        });
    assertTrue(r);
    assertEqual(5, callCount[0]);
    }

    /**
     * Verify every on map(doubled) result returns true for even check
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_6000
     * @tc.name int32ArrayEveryPart04Test060
     * @tc.desc Verify every on map(doubled) result returns true for even check
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test060() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    Int32Array doubled = arr.map((e, unusedIndex, array) -> e * 2);
    int[] callCount = {0};
    boolean r = doubled.every((e, unusedIndex, unusedB) -> {
        callCount[0]++;
        return e % 2 == 0;
    });
    assertTrue(r);
    assertEqual(3, callCount[0]);
    assertEqualInt(2, doubled.get(0));
    assertEqualInt(6, doubled.get(2));
    }

    /**
     * Verify predicate returning false after evaluating falsy number 0 short-circuits at first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_6100
     * @tc.name int32ArrayEveryPart04Test061
     * @tc.desc Verify predicate returning false after evaluating falsy number 0 short-circuits at first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test061() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int[] calls = {0};
    int falsyVal = 0;
    boolean r = arr.every((e, unusedIndex, array) -> {
        calls[0]++;
        return falsyVal != 0;
    });
    assertFalse(r);
    assertEqual(1, calls[0]);
    }

    /**
     * Verify predicate returning false when dependent value is empty string short-circuits
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_6200
     * @tc.name int32ArrayEveryPart04Test062
     * @tc.desc Verify predicate returning false when dependent value is empty string short-circuits
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test062() {
    Int32Array arr = new Int32Array(new int[] {1});
    String falsyStr = "";
    int[] callCount = {0};
    boolean r = arr.every((e, unusedIndex, array) -> {
        callCount[0]++;
        return falsyStr.length() > 0;
    });
    assertFalse(r);
    assertEqual(1, callCount[0]);
    }

    /**
     * Verify predicate returning true when dependent value is non-empty string visits all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_6300
     * @tc.name int32ArrayEveryPart04Test063
     * @tc.desc Verify predicate returning true when dependent value is non-empty string visits all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test063() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int[] calls = {0};
    String truthyStr = "x";
    boolean r = arr.every((e, unusedIndex, array) -> {
        calls[0]++;
        return truthyStr.length() > 0;
    });
    assertTrue(r);
    assertEqual(3, calls[0]);
    }

    /**
     * Verify predicate returning true when dependent value is non-zero number 1 visits all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_6400
     * @tc.name int32ArrayEveryPart04Test064
     * @tc.desc Verify predicate returning true when dependent value is non-zero number 1 visits all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test064() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    int[] calls = {0};
    int truthyVal = 1;
    boolean r = arr.every((e, unusedIndex, array) -> {
        calls[0]++;
        return truthyVal != 0;
    });
    assertTrue(r);
    assertEqual(2, calls[0]);
    }

    /**
     * Verify predicate returning true when dependent value is non-zero -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_6500
     * @tc.name int32ArrayEveryPart04Test065
     * @tc.desc Verify predicate returning true when dependent value is non-zero -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test065() {
    Int32Array arr = new Int32Array(new int[] {5});
    int truthyNeg = -1;
    int[] callCount = {0};
    boolean r = arr.every((e, unusedIndex, array) -> {
        callCount[0]++;
        return truthyNeg != 0;
    });
    assertTrue(r);
    assertEqual(1, callCount[0]);
    }

    /**
     * Verify predicate returning false when dependent value is Number.NaN short-circuits
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART04_6600
     * @tc.name int32ArrayEveryPart04Test066
     * @tc.desc Verify predicate returning false when dependent value is Number.NaN short-circuits
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart04Test066() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    double falsyNaN = Double.NaN;
    int[] callCount = {0};
    boolean r = arr.every((e, unusedIndex, array) -> {
        callCount[0]++;
        return !BasTest.isNaN(falsyNaN) ? true : false;
    });
    assertFalse(r);
    assertEqual(1, callCount[0]);
    }
}
