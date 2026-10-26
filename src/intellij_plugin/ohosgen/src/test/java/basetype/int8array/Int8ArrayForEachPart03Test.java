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

package basetype.int8array;

import basetype.common.Int8Array;
import basetype.common.BasTest;
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Error;
import basetype.common.URIError;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayForEachPart03Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayForEachPart03Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify forEach throws RangeError on first element, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_0100
     * @tc.name int8ArrayForEachPart03Test001
     * @tc.desc Verify forEach throws RangeError on first element, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test001() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    throw new RangeError("first-element-throw");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach expects TypeError throws exception, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_0200
     * @tc.name int8ArrayForEachPart03Test002
     * @tc.desc Verify forEach expects TypeError throws exception, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test002() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    throw new TypeError("type-throw");
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach expects Error throws exception, on new Int8Array(new int[] {5, 10, 15})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_0300
     * @tc.name int8ArrayForEachPart03Test003
     * @tc.desc Verify forEach expects Error throws exception, on new Int8Array(new int[] {5, 10, 15})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test003() {
    Int8Array arr = new Int8Array(new int[] {5, 10, 15});
    try {
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    BasTest.throwTestError("generic-throw");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach callback increments counter then throws RangeError, counter equals 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_0500
     * @tc.name int8ArrayForEachPart03Test005
     * @tc.desc Verify forEach callback increments counter then throws RangeError, counter equals 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test005() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] counter = {0};
    try {
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    counter[0]++;
    throw new RangeError("before-increment");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual(1, counter[0]);
    }
    }

    /**
     * Verify forEach callback throws RangeError when i === 2 and counter equals 2 after processing elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_0600
     * @tc.name int8ArrayForEachPart03Test006
     * @tc.desc Verify forEach callback throws RangeError when i === 2 and counter equals 2 after processing elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test006() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    int[] counter = {0};
    try {
    arr.forEach((v, i, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    if (i == 2) {
    throw new RangeError("middle-throw");
    }
    counter[0]++;
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual(2, counter[0]);
    }
    }

    /**
     * Verify forEach callback throws RangeError when i === 4 and counter equals 4 after processing elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_0700
     * @tc.name int8ArrayForEachPart03Test007
     * @tc.desc Verify forEach callback throws RangeError when i === 4 and counter equals 4 after processing elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test007() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    int[] counter = {0};
    try {
    arr.forEach((v, i, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    if (i == 4) {
    throw new RangeError("last-throw");
    }
    counter[0]++;
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual(4, counter[0]);
    }
    }

    /**
     * Verify forEach throws Error with message preserved, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_0800
     * @tc.name int8ArrayForEachPart03Test008
     * @tc.desc Verify forEach throws Error with message preserved, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test008() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    BasTest.throwTestError("preserved-message");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("preserved-message", e.getMessage());
    }
    }

    /**
     * Verify forEach throws Error after pushing 1 element, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_0900
     * @tc.name int8ArrayForEachPart03Test009
     * @tc.desc Verify forEach throws Error after pushing 1 element, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test009() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    List<Integer> external = new ArrayList<>();
    try {
    arr.forEach((v, unusedIndex, array) -> {
    external.add(v);
    BasTest.throwTestError("after-push");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(1, external.size());
    }
    }

    /**
     * Verify forEach callback throws Error after setting a[i] = 99 on first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_1000
     * @tc.name int8ArrayForEachPart03Test010
     * @tc.desc Verify forEach callback throws Error after setting a[i] = 99 on first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test010() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    arr.forEach((v, i, a) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    a.set(i, 99);
    BasTest.throwTestError("after-set");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqualInt(99, arr.get(0));
    }
    }

    /**
     * Verify forEach callback throws RangeError when v === target and throwIdx equals
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_1100
     * @tc.name int8ArrayForEachPart03Test011
     * @tc.desc Verify forEach callback throws RangeError when v === target and throwIdx equals
     * 1 after processing elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test011() {
    Int8Array arr = new Int8Array(new int[] {0, INT8_MIN, INT8_MAX});
    int[] throwIdx = {-1};
    int target = INT8_MIN;
    try {
    arr.forEach((v, i, array) -> {
    if (v == target) {
    throwIdx[0] = i;
    throw new RangeError("min-value-throw");
    }
    });
    fail();
    } catch (RangeError e) {
    assertEqual(1, throwIdx[0]);
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach callback throws TypeError when v === target and throwIdx equals
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_1200
     * @tc.name int8ArrayForEachPart03Test012
     * @tc.desc Verify forEach callback throws TypeError when v === target and throwIdx equals
     * 1 after processing elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test012() {
    Int8Array arr = new Int8Array(new int[] {0, INT8_MAX, INT8_MIN});
    int[] throwIdx = {-1};
    int target = INT8_MAX;
    try {
    arr.forEach((v, i, array) -> {
    if (v == target) {
    throwIdx[0] = i;
    throw new TypeError("max-value-throw");
    }
    });
    fail();
    } catch (TypeError e) {
    assertEqual(1, throwIdx[0]);
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach callback throws Error when i === 3 and counter equals 3 after processing elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_1300
     * @tc.name int8ArrayForEachPart03Test013
     * @tc.desc Verify forEach callback throws Error when i === 3 and counter equals 3 after processing elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test013() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    int[] counter = {0};
    try {
    arr.forEach((v, i, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    if (i == 3) {
    BasTest.throwTestError("index-3-throw");
    }
    counter[0]++;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(3, counter[0]);
    assertEqual("index-3-throw", e.getMessage());
    }
    }

    /**
     * Verify forEach throws RangeError on first element, throwIdx equals 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_1400
     * @tc.name int8ArrayForEachPart03Test014
     * @tc.desc Verify forEach throws RangeError on first element, throwIdx equals 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test014() {
    Int8Array arr = new Int8Array(new int[] {INT8_MIN, INT8_MIN, INT8_MIN});
    int[] throwIdx = {-1};
    try {
    arr.forEach((v, i, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    throwIdx[0] = i;
    throw new RangeError("all-same-first");
    });
    fail();
    } catch (RangeError e) {
    assertEqual(0, throwIdx[0]);
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach expects TypeError throws exception, on new Int8Array(new int[] {42})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_1500
     * @tc.name int8ArrayForEachPart03Test015
     * @tc.desc Verify forEach expects TypeError throws exception, on new Int8Array(new int[] {42})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test015() {
    Int8Array arr = new Int8Array(new int[] {42});
    try {
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    throw new TypeError("single-throw");
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach expects 1 throws exception
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_1600
     * @tc.name int8ArrayForEachPart03Test016
     * @tc.desc Verify forEach expects 1 throws exception
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test016() {
    Int8Array outer = new Int8Array(new int[] {1, 2});
    Int8Array inner = new Int8Array(new int[] {10, 20});
    int[] outerCount = {0};
    try {
    outer.forEach((v, unusedIndex, array) -> {
    outerCount[0]++;
    inner.forEach((iv, ii, ia) -> {
    BasTest.throwTestError("inner-throw");
    });
    });
    fail();
    } catch (Error e) {
    assertEqual(1, outerCount[0]);
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach callback throws Error after reading a[0] = 7 on first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_1700
     * @tc.name int8ArrayForEachPart03Test017
     * @tc.desc Verify forEach callback throws Error after reading a[0] = 7 on first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test017() {
    Int8Array arr = new Int8Array(new int[] {7, 8, 9});
    int[] readValue = {0};
    try {
    arr.forEach((v, unusedIndex, a) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    readValue[0] = a.get(0);
    BasTest.throwTestError("after-read");
    });
    fail();
    } catch (Error e) {
    assertEqual(7, readValue[0]);
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach callback throws URIError and exception type is correctly asserted
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_1800
     * @tc.name int8ArrayForEachPart03Test018
     * @tc.desc Verify forEach callback throws URIError and exception type is correctly asserted
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test018() {
    Int8Array arr = new Int8Array(new int[] {1, 2});
    try {
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    throw new URIError("uri-throw");
    });
    fail();
    } catch (URIError e) {
    assertEqual("URIError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach callback not invoked on empty array, counter 0, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_2300
     * @tc.name int8ArrayForEachPart03Test023
     * @tc.desc Verify forEach callback not invoked on empty array, counter 0, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test023() {
    Int8Array arr = new Int8Array(0);
    int[] counter = {0};
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    counter[0]++;
    });
    assertEqual(0, counter[0]);
    }

    /**
     * Verify forEach on empty array never invokes callback, on new Int8Array(new int[] {})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_2400
     * @tc.name int8ArrayForEachPart03Test024
     * @tc.desc Verify forEach on empty array never invokes callback, on new Int8Array(new int[] {})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test024() {
    Int8Array arr = new Int8Array(new int[] {});
    int[] counter = {0};
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    counter[0]++;
    });
    assertEqual(0, counter[0]);
    }

    /**
     * Verify forEach empty array, callback assertFail never triggers, counter stays 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_2500
     * @tc.name int8ArrayForEachPart03Test025
     * @tc.desc Verify forEach empty array, callback assertFail never triggers, counter stays 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test025() {
    Int8Array arr = new Int8Array(0);
    int[] counter = {0};
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    counter[0]++;
    fail();
    });
    assertEqual(0, counter[0]);
    }

    /**
     * Verify forEach empty array, callback throw never triggers, counter stays 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_2600
     * @tc.name int8ArrayForEachPart03Test026
     * @tc.desc Verify forEach empty array, callback throw never triggers, counter stays 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test026() {
    Int8Array arr = new Int8Array(0);
    int[] counter = {0};
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    counter[0]++;
    BasTest.throwTestError("never-called");
    });
    assertEqual(0, counter[0]);
    }

    /**
     * Verify forEach twice on empty array invokes no callback, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_2700
     * @tc.name int8ArrayForEachPart03Test027
     * @tc.desc Verify forEach twice on empty array invokes no callback, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test027() {
    Int8Array arr = new Int8Array(0);
    int[] counter = {0};
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    counter[0]++;
    });
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    counter[0]++;
    });
    assertEqual(0, counter[0]);
    }

    /**
     * Verify forEach expects 1, on new Int8Array(new int[] {5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_2800
     * @tc.name int8ArrayForEachPart03Test028
     * @tc.desc Verify forEach expects 1, on new Int8Array(new int[] {5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test028() {
    Int8Array arr = new Int8Array(new int[] {5});
    int[] counter = {0};
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    counter[0]++;
    });
    assertEqual(1, counter[0]);
    }

    /**
     * Verify forEach expects 0, on new Int8Array(new int[] {5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_2900
     * @tc.name int8ArrayForEachPart03Test029
     * @tc.desc Verify forEach expects 0, on new Int8Array(new int[] {5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test029() {
    Int8Array arr = new Int8Array(new int[] {5});
    int[] receivedIdx = {-1};
    arr.forEach((v, i, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    receivedIdx[0] = i;
    });
    assertEqual(0, receivedIdx[0]);
    }

    /**
     * Verify forEach callback invokes once for single element [5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_3000
     * @tc.name int8ArrayForEachPart03Test030
     * @tc.desc Verify forEach callback invokes once for single element [5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test030() {
    Int8Array arr = new Int8Array(new int[] {5});
    int[] receivedVal = {0};
    arr.forEach((v, unusedIndex, array) -> {
    receivedVal[0] = v;
    });
    assertEqual(5, receivedVal[0]);
    }

    /**
     * Verify forEach expects -128, on new Int8Array(new int[] {-128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_3100
     * @tc.name int8ArrayForEachPart03Test031
     * @tc.desc Verify forEach expects -128, on new Int8Array(new int[] {-128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test031() {
    Int8Array arr = new Int8Array(new int[] {INT8_MIN});
    int[] receivedVal = {0};
    arr.forEach((v, unusedIndex, array) -> {
    receivedVal[0] = v;
    });
    assertEqual(INT8_MIN, receivedVal[0]);
    }

    /**
     * Verify forEach expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_3200
     * @tc.name int8ArrayForEachPart03Test032
     * @tc.desc Verify forEach expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test032() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX});
    int[] receivedVal = {0};
    arr.forEach((v, unusedIndex, array) -> {
    receivedVal[0] = v;
    });
    assertEqual(INT8_MAX, receivedVal[0]);
    }

    /**
     * Verify forEach expects 0, on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_3300
     * @tc.name int8ArrayForEachPart03Test033
     * @tc.desc Verify forEach expects 0, on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test033() {
    Int8Array arr = new Int8Array(new int[] {0});
    int[] receivedVal = {-1};
    arr.forEach((v, unusedIndex, array) -> {
    receivedVal[0] = v;
    });
    assertEqual(0, receivedVal[0]);
    }

    /**
     * Verify forEach expects -1, on new Int8Array(new int[] {-1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_3400
     * @tc.name int8ArrayForEachPart03Test034
     * @tc.desc Verify forEach expects -1, on new Int8Array(new int[] {-1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test034() {
    Int8Array arr = new Int8Array(new int[] {-1});
    int[] receivedVal = {0};
    arr.forEach((v, unusedIndex, array) -> {
    receivedVal[0] = v;
    });
    assertEqual(-1, receivedVal[0]);
    }

    /**
     * Verify forEach callback invokes for each of 4 elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_3600
     * @tc.name int8ArrayForEachPart03Test036
     * @tc.desc Verify forEach callback invokes for each of 4 elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test036() {
    Int8Array arr = new Int8Array(new int[] {3, 3, 3, 3});
    int[] counter = {0};
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    counter[0]++;
    });
    assertEqual(4, counter[0]);
    }

    /**
     * Verify all elements equal INT8_MIN during forEach, on new Int8Array(new int[] {-128, -128, -128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_3700
     * @tc.name int8ArrayForEachPart03Test037
     * @tc.desc Verify all elements equal INT8_MIN during forEach, on new Int8Array(new int[] {-128, -128, -128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test037() {
    Int8Array arr = new Int8Array(new int[] {INT8_MIN, INT8_MIN, INT8_MIN});
    boolean[] allMatch = {true};
    int[] expected = {INT8_MIN};
    arr.forEach((v, unusedIndex, array) -> {
    if (v != expected[0]) {
    allMatch[0] = false;
    }
    });
    assertTrue(allMatch[0]);
    }

    /**
     * Verify forEach visits all 4 INT8_MAX elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_3800
     * @tc.name int8ArrayForEachPart03Test038
     * @tc.desc Verify forEach visits all 4 INT8_MAX elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test038() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, INT8_MAX, INT8_MAX, INT8_MAX});
    boolean[] allMatch = {true};
    int[] expected = {INT8_MAX};
    arr.forEach((v, unusedIndex, array) -> {
    if (v != expected[0]) {
    allMatch[0] = false;
    }
    });
    assertTrue(allMatch[0]);
    }

    /**
     * Verify all elements equal 0 during forEach, on new Int8Array(new int[] {0, 0, 0, 0, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_3900
     * @tc.name int8ArrayForEachPart03Test039
     * @tc.desc Verify all elements equal 0 during forEach, on new Int8Array(new int[] {0, 0, 0, 0, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test039() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0, 0});
    boolean[] allMatch = {true};
    int[] expected = {0};
    arr.forEach((v, unusedIndex, array) -> {
    if (v != expected[0]) {
    allMatch[0] = false;
    }
    });
    assertTrue(allMatch[0]);
    }

    /**
     * Verify all elements equal -1 during forEach, on new Int8Array(new int[] {-1, -1, -1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_4000
     * @tc.name int8ArrayForEachPart03Test040
     * @tc.desc Verify all elements equal -1 during forEach, on new Int8Array(new int[] {-1, -1, -1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test040() {
    Int8Array arr = new Int8Array(new int[] {-1, -1, -1});
    boolean[] allMatch = {true};
    int[] expected = {-1};
    arr.forEach((v, unusedIndex, array) -> {
    if (v != expected[0]) {
    allMatch[0] = false;
    }
    });
    assertTrue(allMatch[0]);
    }

    /**
     * Verify forEach passes ascending indices 0-3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_4100
     * @tc.name int8ArrayForEachPart03Test041
     * @tc.desc Verify forEach passes ascending indices 0-3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test041() {
    Int8Array arr = new Int8Array(new int[] {3, 3, 3, 3});
    List<Integer> indices = new ArrayList<>();
    arr.forEach((v, i, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    indices.add(i);
    });
    assertEqualInt(0, indices.get(0));
    assertEqualInt(1, indices.get(1));
    assertEqualInt(2, indices.get(2));
    assertEqualInt(3, indices.get(3));
    }

    /**
     * Verify forEach callback throws Error when i === 2 and counter equals 2 after processing elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_4200
     * @tc.name int8ArrayForEachPart03Test042
     * @tc.desc Verify forEach callback throws Error when i === 2 and counter equals 2 after processing elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test042() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5, 5, 5});
    int[] counter = {0};
    try {
    arr.forEach((v, i, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    if (i == 2) {
    BasTest.throwTestError("all-same-idx-2");
    }
    counter[0]++;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(2, counter[0]);
    assertEqual("all-same-idx-2", e.getMessage());
    }
    }

    /**
     * Verify forEach expects 0, on new Int8Array(new int[] {10, 20, 30, 40, 50})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_4400
     * @tc.name int8ArrayForEachPart03Test044
     * @tc.desc Verify forEach expects 0, on new Int8Array(new int[] {10, 20, 30, 40, 50})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test044() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    int[] firstIdx = {-1};
    arr.forEach((v, i, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    if (firstIdx[0] == -1) {
    firstIdx[0] = i;
    }
    });
    assertEqual(0, firstIdx[0]);
    }

    /**
     * Verify 5 forEach index 4 (length-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_4500
     * @tc.name int8ArrayForEachPart03Test045
     * @tc.desc Verify 5 forEach index 4 (length-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test045() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    int[] lastIdx = {-1};
    arr.forEach((v, i, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    lastIdx[0] = i;
    });
    assertEqual(4, lastIdx[0]);
    }

    /**
     * Verify 3 forEach index == length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_4600
     * @tc.name int8ArrayForEachPart03Test046
     * @tc.desc Verify 3 forEach index == length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test046() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean[] sawLength = {false};
    arr.forEach((v, i, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    if (i == arr.length()) {
    sawLength[0] = true;
    }
    });
    assertFalse(sawLength[0]);
    }

    /**
     * Verify 3 forEach index == -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_4700
     * @tc.name int8ArrayForEachPart03Test047
     * @tc.desc Verify 3 forEach index == -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test047() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean[] sawMinusOne = {false};
    arr.forEach((v, i, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    if (i == -1) {
    sawMinusOne[0] = true;
    }
    });
    assertFalse(sawMinusOne[0]);
    }

    /**
     * Verify forEach callback index never negative, sawNegative stays false on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_4800
     * @tc.name int8ArrayForEachPart03Test048
     * @tc.desc Verify forEach callback index never negative, sawNegative stays false on new Int8Array(new int[] {1, 2,
     * 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test048() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    boolean[] sawNegative = {false};
    arr.forEach((v, i, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    if (i < 0) {
    sawNegative[0] = true;
    }
    });
    assertFalse(sawNegative[0]);
    }

    /**
     * Verify forEach passes contiguous indices 0-3, contiguous stays true on new Int8Array(new int[] {10, 20, 30, 40})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_4900
     * @tc.name int8ArrayForEachPart03Test049
     * @tc.desc Verify forEach passes contiguous indices 0-3, contiguous stays true on new Int8
     * Array(new int[] {10, 20, 30, 40})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test049() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int[] expected = {0};
    boolean[] contiguous = {true};
    arr.forEach((v, i, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    if (i != expected[0]) {
    contiguous[0] = false;
    }
    expected[0]++;
    });
    assertTrue(contiguous[0]);
    }

    /**
     * Verify forEach passes strictly increasing indices, increasing stays true on new
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_5000
     * @tc.name int8ArrayForEachPart03Test050
     * @tc.desc Verify forEach passes strictly increasing indices, increasing stays true on new
     * Int8Array([5, 10, 15, 20, 25])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test050() {
    Int8Array arr = new Int8Array(new int[] {5, 10, 15, 20, 25});
    int[] prevIdx = {-1};
    boolean[] increasing = {true};
    arr.forEach((v, i, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    if (i <= prevIdx[0]) {
    increasing[0] = false;
    }
    prevIdx[0] = i;
    });
    assertTrue(increasing[0]);
    }

    /**
     * Verify forEach expects -128, on new Int8Array(new int[] {128, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_5100
     * @tc.name int8ArrayForEachPart03Test051
     * @tc.desc Verify forEach expects -128, on new Int8Array(new int[] {128, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test051() {
    Int8Array arr = new Int8Array(new int[] {128, INT8_MAX});
    List<Integer> vals = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    vals.add(v);
    });
    int r1 = vals.get(0);
    int e1 = INT8_MIN;
    assertEqual(e1, r1);
    assertEqualInt(INT8_MAX, vals.get(1));
    }

    /**
     * Verify forEach expects -1, on new Int8Array(new int[] {255, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_5200
     * @tc.name int8ArrayForEachPart03Test052
     * @tc.desc Verify forEach expects -1, on new Int8Array(new int[] {255, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test052() {
    Int8Array arr = new Int8Array(new int[] {255, 0});
    List<Integer> vals = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    vals.add(v);
    });
    assertEqualInt(-1, vals.get(0));
    assertEqualInt(0, vals.get(1));
    }

    /**
     * Verify forEach expects INT8_MAX, on new Int8Array(new int[] {-129, -128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_5300
     * @tc.name int8ArrayForEachPart03Test053
     * @tc.desc Verify forEach expects INT8_MAX, on new Int8Array(new int[] {-129, -128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test053() {
    Int8Array arr = new Int8Array(new int[] {-129, INT8_MIN});
    List<Integer> vals = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    vals.add(v);
    });
    assertEqualInt(INT8_MAX, vals.get(0));
    int r1 = vals.get(1);
    int e1 = INT8_MIN;
    assertEqual(e1, r1);
    }

    /**
     * Verify forEach expects 0, on new Int8Array(new double[] {Number.NaN, 127.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_5500
     * @tc.name int8ArrayForEachPart03Test055
     * @tc.desc Verify forEach expects 0, on new Int8Array(new double[] {Number.NaN, 127.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test055() {
    Int8Array arr = new Int8Array(new double[] {Double.NaN, 127.0});
    List<Integer> vals = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    vals.add(v);
    });
    assertEqualInt(0, vals.get(0));
    assertEqualInt(INT8_MAX, vals.get(1));
    }

    /**
     * Verify forEach expects 1, on new Int8Array(new double[] {1.9, -1.9})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_5600
     * @tc.name int8ArrayForEachPart03Test056
     * @tc.desc Verify forEach expects 1, on new Int8Array(new double[] {1.9, -1.9})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test056() {
    Int8Array arr = new Int8Array(new double[] {1.9, -1.9});
    List<Integer> vals = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    vals.add(v);
    });
    assertEqualInt(1, vals.get(0));
    assertEqualInt(-1, vals.get(1));
    }

    /**
     * Verify forEach yields truncated values -128, 127, -1, -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_5700
     * @tc.name int8ArrayForEachPart03Test057
     * @tc.desc Verify forEach yields truncated values -128, 127, -1, -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test057() {
    Int8Array arr = new Int8Array(new int[] {128, -129, 255, INT8_MIN});
    List<Integer> vals = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    vals.add(v);
    });
    int r1 = vals.get(0);
    int e1 = INT8_MIN;
    assertEqual(e1, r1);
    assertEqualInt(INT8_MAX, vals.get(1));
    assertEqualInt(-1, vals.get(2));
    int r2 = vals.get(3);
    int e2 = INT8_MIN;
    assertEqual(e2, r2);
    }

    /**
     * Verify forEach expects 0, on new Int8Array(new double[] {-0.0, 0.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_5800
     * @tc.name int8ArrayForEachPart03Test058
     * @tc.desc Verify forEach expects 0, on new Int8Array(new double[] {-0.0, 0.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test058() {
    Int8Array arr = new Int8Array(new double[] {-0.0, 0.0});
    List<Integer> vals = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    vals.add(v);
    });
    assertEqualInt(0, vals.get(0));
    assertEqualInt(0, vals.get(1));
    }

    /**
     * Verify forEach callback invokes for each of 3 elements, sum = 6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_6000
     * @tc.name int8ArrayForEachPart03Test060
     * @tc.desc Verify forEach callback invokes for each of 3 elements, sum = 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test060() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] sum = {0};
    Object ret = null;
    arr.forEach((v, unusedIndex, array) -> {
        sum[0] += v;
    });
    assertNull(ret);
    assertEqual(6, sum[0]);
    }

    /**
     * Verify forEach returns undefined, on new Int8Array(new int[] {1, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_6100
     * @tc.name int8ArrayForEachPart03Test061
     * @tc.desc Verify forEach returns undefined, on new Int8Array(new int[] {1, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test061() {
    Int8Array arr = new Int8Array(new int[] {1, 2});
    arr.forEach((v, unusedIndex, array) -> {
        if (v < INT8_MIN || v > INT8_MAX) {
            return;
            }
                });
    Object r1 = null;
    assertNull(r1);
    arr.forEach((v, unusedIndex, array) -> {
        if (v < INT8_MIN || v > INT8_MAX) {
            return;
            }
                });
    Object r2 = null;
    assertNull(r2);
    }

    /**
     * Verify forEach callback throws RangeError after processing 3 elements and counter equals 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_6200
     * @tc.name int8ArrayForEachPart03Test062
     * @tc.desc Verify forEach callback throws RangeError after processing 3 elements and counter equals 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test062() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] firstCount = {0};
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    firstCount[0]++;
    });
    assertEqual(3, firstCount[0]);
    try {
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    throw new RangeError("second-throws");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach throws Error after counter increments to 1, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_6300
     * @tc.name int8ArrayForEachPart03Test063
     * @tc.desc Verify forEach throws Error after counter increments to 1, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test063() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] counter = {0};
    try {
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    counter[0]++;
    BasTest.throwTestError("after-increment");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(1, counter[0]);
    }
    }

    /**
     * Verify forEach throws Error after type check, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_6400
     * @tc.name int8ArrayForEachPart03Test064
     * @tc.desc Verify forEach throws Error after type check, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test064() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean[] typeMatch = {false};
    try {
    arr.forEach((v, unusedIndex, a) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    typeMatch[0] = a.length() == 3;
    BasTest.throwTestError("after-type-check");
    });
    fail();
    } catch (Error e) {
    assertTrue(typeMatch[0]);
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach expects Error throws exception, on new Int8Array(new int[] {1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_6500
     * @tc.name int8ArrayForEachPart03Test065
     * @tc.desc Verify forEach expects Error throws exception, on new Int8Array(new int[] {1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test065() {
    Int8Array arr = new Int8Array(new int[] {1});
    try {
    arr.forEach((v, unusedIndex, array) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    BasTest.throwTestError("");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("", e.getMessage());
    }
    }

    /**
     * Verify forEach throws RangeError after length check, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_6600
     * @tc.name int8ArrayForEachPart03Test066
     * @tc.desc Verify forEach throws RangeError after length check, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test066() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean[] lengthOk = {false};
    try {
    arr.forEach((v, unusedIndex, a) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    if (a.length() == 3) {
    lengthOk[0] = true;
    }
    throw new RangeError("after-length-check");
    });
    fail();
    } catch (RangeError e) {
    assertTrue(lengthOk[0]);
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach callback throws TypeError when v === target and throwIdx equals
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_6700
     * @tc.name int8ArrayForEachPart03Test067
     * @tc.desc Verify forEach callback throws TypeError when v === target and throwIdx equals
     * 0 after processing elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test067() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    int[] throwIdx = {-1};
    int target = 0;
    try {
    arr.forEach((v, i, array) -> {
    if (v == target) {
    throwIdx[0] = i;
    throw new TypeError("zero-throw");
    }
    });
    fail();
    } catch (TypeError e) {
    assertEqual(0, throwIdx[0]);
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach expects 0 and INT8_MIN, on new Int8Array(new int[] {Number.POSITIVE_INFINITY, INT8_MIN})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART03_TEST_6800
     * @tc.name int8ArrayForEachPart03Test068
     * @tc.desc Verify forEach expects 0 and INT8_MIN, on new Int8Array(new int[] {Number.POSITIVE_INFINITY, INT8_MIN})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart03Test068() {
    Int8Array arr = new Int8Array(new double[] {Double.POSITIVE_INFINITY, INT8_MIN});
    List<Integer> vals = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    vals.add(v);
    });
    assertEqualInt(0, vals.get(0));
    int r1 = vals.get(1);
    int e1 = INT8_MIN;
    assertEqual(e1, r1);
    }
}
