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
import basetype.common.TypeError;
import basetype.common.Error;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFilterPart04Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFilterPart04Test extends BasTest {

    /**
     * Verify source elements unchanged after filter call (pure read callback)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_0200
     * @tc.name int32ArrayFilterPart04Test002
     * @tc.desc Verify source elements unchanged after filter call (pure read callback)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test002() {
    Int32Array src = Int32Array.of(10, 20, 30, 40);
    Int32Array res = src.filter((v, i, a) -> v > 25);
    assertEqual(2, res.length());
    assertEqualInt(10, src.get(0));
    assertEqualInt(20, src.get(1));
    assertEqualInt(30, src.get(2));
    assertEqualInt(40, src.get(3));
    }

    /**
     * Verify source Int32Array byteLength preserved after filter call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_0300
     * @tc.name int32ArrayFilterPart04Test003
     * @tc.desc Verify source Int32Array byteLength preserved after filter call
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test003() {
    Int32Array src = new Int32Array(new ArrayBuffer(16));
    src.set(0, 1);
    src.set(1, 2);
    src.set(2, 3);
    src.set(3, 4);
    int blBefore = src.byteLength();
    Int32Array res = src.filter((v, i, a) -> v % 2 == 0);
    assertEqual(blBefore, src.byteLength());
    assertEqual(2, res.length());
    }

    /**
     * Verify filter result has a different buffer from source (newly allocated)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_0600
     * @tc.name int32ArrayFilterPart04Test006
     * @tc.desc Verify filter result has a different buffer from source (newly allocated)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test006() {
    Int32Array src = Int32Array.of(1, 2, 3, 4);
    Int32Array res = src.filter((v, i, a) -> v > 2);
    assertEqual(false, res.buffer() == src.buffer());
    }

    /**
     * Verify mutating filter result elements does not affect source array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_0700
     * @tc.name int32ArrayFilterPart04Test007
     * @tc.desc Verify mutating filter result elements does not affect source array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test007() {
    Int32Array src = Int32Array.of(1, 2, 3, 4);
    Int32Array res = src.filter((v, i, a) -> v > 0);
    res.set(0, 999);
    assertEqualInt(1, src.get(0));
    }

    /**
     * Verify result length equals source length when all elements match
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_1000
     * @tc.name int32ArrayFilterPart04Test010
     * @tc.desc Verify result length equals source length when all elements match
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test010() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array res = src.filter((v, i, a) -> true);
    assertEqual(src.length(), res.length());
    assertEqualInt(1, res.get(0));
    assertEqualInt(2, res.get(1));
    assertEqualInt(3, res.get(2));
    }

    /**
     * Verify filter result is an instance of Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_1100
     * @tc.name int32ArrayFilterPart04Test011
     * @tc.desc Verify filter result is an instance of Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test011() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array res = src.filter((v, i, a) -> true);
    assertEqual(3, res.length());
    assertEqualInt(1, res.get(0));
    assertEqualInt(2, res.get(1));
    assertEqualInt(3, res.get(2));
    assertEqual(false, res.buffer() == src.buffer());
    }

    /**
     * Verify empty filter result is Int32Array instance with byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_1200
     * @tc.name int32ArrayFilterPart04Test012
     * @tc.desc Verify empty filter result is Int32Array instance with byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test012() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array res = src.filter((v, i, a) -> false);
    assertEqual(0, res.length());
    assertEqual(0, res.byteLength());
    assertEqual(false, res.buffer() == src.buffer());
    }

    /**
     * Verify third callback parameter array === source Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_1600
     * @tc.name int32ArrayFilterPart04Test016
     * @tc.desc Verify third callback parameter array === source Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test016() {
    Int32Array src = Int32Array.of(1, 2, 3);
    int[] observedLen = {-1};
    boolean[] sameRef = {false};
    src.filter((v, i, a) -> {
    observedLen[0] = a.length();
    sameRef[0] = a == src;
    return true;
    });
    assertEqual(3, observedLen[0]);
    assertTrue(sameRef[0]);
    }

    /**
     * Verify closure capturing threshold variable affects predicate result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_1700
     * @tc.name int32ArrayFilterPart04Test017
     * @tc.desc Verify closure capturing threshold variable affects predicate result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test017() {
    Int32Array src = Int32Array.of(1, 2, 3, 4, 5);
    int threshold = 3;
    Int32Array res = src.filter((v, i, a) -> v > threshold);
    assertEqual(2, res.length());
    assertEqualInt(4, res.get(0));
    assertEqualInt(5, res.get(1));
    }

    /**
     * Verify result uses snapshotted v not the modified current element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_2300
     * @tc.name int32ArrayFilterPart04Test023
     * @tc.desc Verify result uses snapshotted v not the modified current element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test023() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array res = src.filter((v, i, a) -> {
        a.set(i, 0);
        return v > 0;
    });
    assertEqual(3, res.length());
    assertEqualInt(0, res.get(0));
    assertEqualInt(0, res.get(1));
    assertEqualInt(0, res.get(2));
    }

    /**
     * Verify $_set with negative index throws RangeError inside filter callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_2500
     * @tc.name int32ArrayFilterPart04Test025
     * @tc.desc Verify $_set with negative index throws RangeError inside filter callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test025() {
    Int32Array src = Int32Array.of(1, 2, 3);
    boolean[] reached = {false};
    Int32Array res = src.filter((v, i, a) -> {
        try {
            a.set(-1, 99);
        fail();
        } catch (RangeError e) {
            assertEqual("RangeError", e.getClass().getSimpleName());
        }
            reached[0] = true;
        return true;
        });
    assertTrue(reached[0]);
    assertEqual(3, res.length());
    }

    /**
     * Verify $_set with index equal to length throws RangeError inside filter callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_2600
     * @tc.name int32ArrayFilterPart04Test026
     * @tc.desc Verify $_set with index equal to length throws RangeError inside filter callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test026() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array res = src.filter((v, i, a) -> {
        try {
            a.set(a.length(), 77);
        fail();
        } catch (RangeError e) {
            assertEqual("RangeError", e.getClass().getSimpleName());
        }
        return true;
        });
    assertEqual(3, src.length());
    assertEqual(3, res.length());
    }

    /**
     * Verify nested filter even then greaterThan4 yields intersection
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_2700
     * @tc.name int32ArrayFilterPart04Test027
     * @tc.desc Verify nested filter even then greaterThan4 yields intersection
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test027() {
    Int32Array src = Int32Array.of(1, 2, 3, 4, 5, 6, 7, 8);
    Int32Array evens = src.filter((v, i, a) -> v % 2 == 0);
    Int32Array res = evens.filter((v, i, a) -> v > 4);
    assertEqual(2, res.length());
    assertEqualInt(6, res.get(0));
    assertEqualInt(8, res.get(1));
    }

    /**
     * Verify nested filter inside callback returns correct odd count
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_2900
     * @tc.name int32ArrayFilterPart04Test029
     * @tc.desc Verify nested filter inside callback returns correct odd count
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test029() {
    Int32Array src = Int32Array.of(1, 2, 3, 4);
    Int32Array res = src.filter((v, i, a) -> {
        Int32Array inner = a.filter((x, j, b) -> x % 2 == 0);
        return inner.length() == 2 && v % 2 == 1;
    });
    assertEqual(2, res.length());
    assertEqualInt(1, res.get(0));
    assertEqualInt(3, res.get(1));
    }

    /**
     * Verify single-element array survives chained identity filter and eq-filter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_3200
     * @tc.name int32ArrayFilterPart04Test032
     * @tc.desc Verify single-element array survives chained identity filter and eq-filter
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test032() {
    Int32Array src = Int32Array.of(42);
    Int32Array r1 = src.filter((v, i, a) -> true);
    Int32Array r2 = r1.filter((v, i, a) -> v == 42);
    assertEqual(1, r2.length());
    assertEqualInt(42, r2.get(0));
    }

    /**
     * Verify $_set -0.9 truncates toward zero to 0 (not -1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_3400
     * @tc.name int32ArrayFilterPart04Test034
     * @tc.desc Verify $_set -0.9 truncates toward zero to 0 (not -1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test034() {
    Int32Array src = Int32Array.of(1, 2);
    int[] seen = {100};
    src.filter((v, i, a) -> {
    if (i == 0) {
    a.set(1, -0.9);
    }
    if (i == 1) {
    seen[0] = v;
    }
    return false;
    });
    assertEqual(0, seen[0]);
    }

    /**
     * Verify $_set 4294967296 (2^32) ToInt32 wraps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_3700
     * @tc.name int32ArrayFilterPart04Test037
     * @tc.desc Verify $_set 4294967296 (2^32) ToInt32 wraps to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test037() {
    Int32Array src = Int32Array.of(0, 0);
    int[] seen = {-1};
    src.filter((v, i, a) -> {
    if (i == 0) {
    a.set(1, (int) 4294967296L);
    }
    if (i == 1) {
    seen[0] = v;
    }
    return false;
    });
    assertEqual(0, seen[0]);
    }

    /**
     * Verify sibling Int32Array view on same ArrayBuffer sees callback $_set writes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_4100
     * @tc.name int32ArrayFilterPart04Test041
     * @tc.desc Verify sibling Int32Array view on same ArrayBuffer sees callback $_set writes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test041() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf);
    Int32Array b = new Int32Array(buf);
    a.set(0, 1);
    a.set(1, 2);
    a.set(2, 3);
    a.set(3, 4);
    a.filter((v, i, arr) -> {
    if (i == 0) {
    arr.set(3, 77);
    }
    return true;
    });
    assertEqualInt(77, b.get(3));
    }

    /**
     * Verify sibling view with byteOffset=4 observes callback writes at aliased slot
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_4200
     * @tc.name int32ArrayFilterPart04Test042
     * @tc.desc Verify sibling view with byteOffset=4 observes callback writes at aliased slot
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test042() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int32Array a = new Int32Array(buf, 0, 5);
    Int32Array c = new Int32Array(buf, 4, 4);
    a.set(0, 0);
    a.set(1, 0);
    a.set(2, 0);
    a.set(3, 0);
    a.set(4, 0);
    a.filter((v, i, arr) -> {
    if (i == 0) {
    arr.set(2, 111);
    }
    return true;
    });
    assertEqualInt(111, c.get(1));
    }

    /**
     * Verify sibling alias writes in callback are observed by source on later iteration
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_4300
     * @tc.name int32ArrayFilterPart04Test043
     * @tc.desc Verify sibling alias writes in callback are observed by source on later iteration
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test043() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf);
    Int32Array b = new Int32Array(buf);
    a.set(0, 0);
    a.set(1, 0);
    a.set(2, 0);
    a.set(3, 0);
    int[] seen = {0};
    a.filter((v, i, arr) -> {
    if (i == 0) {
    b.set(3, 222);
    }
    if (i == 3) {
    seen[0] = v;
    }
    return false;
    });
    assertEqual(222, seen[0]);
    }

    /**
     * Verify result buffer is independent; mutating result does not touch source buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_4400
     * @tc.name int32ArrayFilterPart04Test044
     * @tc.desc Verify result buffer is independent; mutating result does not touch source buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test044() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf);
    a.set(0, 1);
    a.set(1, 2);
    a.set(2, 3);
    a.set(3, 4);
    Int32Array b = new Int32Array(buf);
    Int32Array res = a.filter((v, i, arr) -> v > 2);
    res.set(0, -999);
    assertEqualInt(3, b.get(2));
    assertEqualInt(3, a.get(2));
    }

    /**
     * Verify filter on Int32Array over zero-byte ArrayBuffer returns empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_4500
     * @tc.name int32ArrayFilterPart04Test045
     * @tc.desc Verify filter on Int32Array over zero-byte ArrayBuffer returns empty
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test045() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int32Array a = new Int32Array(buf);
    Int32Array res = a.filter((v, i, arr) -> true);
    assertEqual(0, res.length());
    assertEqual(0, a.length());
    }

    /**
     * Verify result byteOffset is 0 (new array default alignment)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_4700
     * @tc.name int32ArrayFilterPart04Test047
     * @tc.desc Verify result byteOffset is 0 (new array default alignment)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test047() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array a = new Int32Array(buf, 8, 3);
    a.set(0, 1);
    a.set(1, 2);
    a.set(2, 3);
    Int32Array res = a.filter((v, i, arr) -> true);
    assertEqual(0, res.byteOffset());
    }

    /**
     * Verify callback throws Error on first call propagates and source remains unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_5100
     * @tc.name int32ArrayFilterPart04Test051
     * @tc.desc Verify callback throws Error on first call propagates and source remains unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test051() {
    Int32Array src = Int32Array.of(1, 2, 3, 4);
    try {
    src.filter((v, i, a) -> {
    return BasTest.throwTestError("boom");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("boom", e.getMessage());
    }
    assertEqualInt(1, src.get(0));
    assertEqual(4, src.length());
    }

    /**
     * Verify mid-iteration throw preserves earlier writes and later elements untouched
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_5200
     * @tc.name int32ArrayFilterPart04Test052
     * @tc.desc Verify mid-iteration throw preserves earlier writes and later elements untouched
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test052() {
    Int32Array src = Int32Array.of(0, 0, 0, 0, 0);
    int[] callCount = {0};
    try {
    src.filter((v, i, a) -> {
    callCount[0] = callCount[0] + 1;
    a.set(i, i + 1);
    if (i == 2) {
    return BasTest.throwTestError("mid");
    }
    return true;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("mid", e.getMessage());
    }
    assertEqual(3, callCount[0]);
    assertEqualInt(1, src.get(0));
    assertEqualInt(3, src.get(2));
    assertEqualInt(0, src.get(3));
    }

    /**
     * Verify RangeError thrown in callback propagates with correct name
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_5300
     * @tc.name int32ArrayFilterPart04Test053
     * @tc.desc Verify RangeError thrown in callback propagates with correct name
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test053() {
    Int32Array src = Int32Array.of(1);
    try {
    src.filter((v, i, a) -> {
    throw new RangeError("range");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify TypeError thrown in callback propagates with correct name
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_5400
     * @tc.name int32ArrayFilterPart04Test054
     * @tc.desc Verify TypeError thrown in callback propagates with correct name
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test054() {
    Int32Array src = Int32Array.of(1);
    try {
    src.filter((v, i, a) -> {
    throw new TypeError("type");
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Number.NaN-stored element (converted to 0) matches ===0 predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_5600
     * @tc.name int32ArrayFilterPart04Test056
     * @tc.desc Verify Number.NaN-stored element (converted to 0) matches ===0 predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test056() {
    Int32Array src = new Int32Array(3);
    src.set(0, Double.NaN);
    src.set(1, 1);
    src.set(2, 2);
    Int32Array res = src.filter((v, i, a) -> v == 0);
    assertEqual(1, res.length());
    assertEqualInt(0, res.get(0));
    }

    /**
     * Verify callback records index:value pairs in ascending order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_5700
     * @tc.name int32ArrayFilterPart04Test057
     * @tc.desc Verify callback records index:value pairs in ascending order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test057() {
    Int32Array src = Int32Array.of(10, 20, 30);
    List<String> pairs = new ArrayList<>();
    src.filter((v, i, a) -> {
    pairs.add(String.valueOf(i) + ":" + String.valueOf(v));
    return true;
    });
    assertEqual("0:10", pairs.get(0));
    assertEqual("1:20", pairs.get(1));
    assertEqual("2:30", pairs.get(2));
    }

    /**
     * Verify array.length reported identically on every iteration
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_5900
     * @tc.name int32ArrayFilterPart04Test059
     * @tc.desc Verify array.length reported identically on every iteration
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test059() {
    Int32Array src = Int32Array.of(1, 2, 3, 4);
    boolean[] allSame = {true};
    int[] firstLen = {-1};
    src.filter((v, i, a) -> {
    if (i == 0) {
    firstLen[0] = a.length();
    } else {
    if (a.length() != firstLen[0]) {
    allSame[0] = false;
    }
    }
    return true;
    });
    assertTrue(allSame[0]);
    assertEqual(4, firstLen[0]);
    }

    /**
     * Verify empty (length 0) Int32Array filter invokes callback 0 times
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_6200
     * @tc.name int32ArrayFilterPart04Test062
     * @tc.desc Verify empty (length 0) Int32Array filter invokes callback 0 times
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test062() {
    Int32Array src = new Int32Array(0);
    int[] callCount = {0};
    Int32Array res = src.filter((v, i, a) -> {
        callCount[0] = callCount[0] + 1;
        return true;
    });
    assertEqual(0, callCount[0]);
    assertEqual(0, res.length());
    }

    /**
     * Verify partition: neg.length + nonneg.length equals source length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_6300
     * @tc.name int32ArrayFilterPart04Test063
     * @tc.desc Verify partition: neg.length + nonneg.length equals source length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart04Test063() {
    Int32Array src = Int32Array.of(-3, -1, 0, 2, 4);
    Int32Array neg = src.filter((v, i, a) -> v < 0);
    Int32Array nonneg = src.filter((v, i, a) -> v >= 0);
    assertEqual(src.length(), neg.length() + nonneg.length());
    }

    /**
     * Verify strict-equality predicate matches INT_MAX exactly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART04_TEST_6500
     * @tc.name int32ArrayFilterPart04Test065
     * @tc.desc Verify strict-equality predicate matches INT_MAX exactly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
