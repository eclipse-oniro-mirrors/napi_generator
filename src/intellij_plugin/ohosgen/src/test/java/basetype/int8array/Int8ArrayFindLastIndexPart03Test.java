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

package basetype.int8array;

import basetype.common.Int8Array;
import basetype.common.BasTest;
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Error;
import basetype.common.SyntaxError;
import basetype.common.URIError;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayFindLastIndexPart03Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFindLastIndexPart03Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify findLastIndex throws RangeError propagates name
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_0100
     * @tc.name int8ArrayFindLastIndexPart03Test001
     * @tc.desc Verify findLastIndex throws RangeError propagates name
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test001() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    try {
    int rIdx = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    throw new RangeError("range trigger");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findLastIndex throws TypeError propagates name
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_0200
     * @tc.name int8ArrayFindLastIndexPart03Test002
     * @tc.desc Verify findLastIndex throws TypeError propagates name
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test002() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    try {
    int rIdx = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    throw new TypeError("type trigger");
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findLastIndex throws SyntaxError propagates name
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_0300
     * @tc.name int8ArrayFindLastIndexPart03Test003
     * @tc.desc Verify findLastIndex throws SyntaxError propagates name
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test003() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    try {
    int rIdx = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    throw new SyntaxError("syntax trigger");
    });
    fail();
    } catch (SyntaxError e) {
    assertEqual("SyntaxError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findLastIndex throws Error propagates name
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_0400
     * @tc.name int8ArrayFindLastIndexPart03Test004
     * @tc.desc Verify findLastIndex throws Error propagates name
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test004() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    try {
    int rIdx = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    return BasTest.throwTestError("plain trigger");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findLastIndex throws RangeError propagates message
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_0500
     * @tc.name int8ArrayFindLastIndexPart03Test005
     * @tc.desc Verify findLastIndex throws RangeError propagates message
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test005() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    try {
    int rIdx = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    throw new RangeError("range message body");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("range message body", e.getMessage());
    }
    }

    /**
     * Verify findLastIndex throws URIError propagates name
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_0700
     * @tc.name int8ArrayFindLastIndexPart03Test007
     * @tc.desc Verify findLastIndex throws URIError propagates name
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test007() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    try {
    int rIdx = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    throw new URIError("uri trigger");
    });
    fail();
    } catch (URIError e) {
    assertEqual("URIError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findLastIndex throws Error on first access, count 1, on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_0800
     * @tc.name int8ArrayFindLastIndexPart03Test008
     * @tc.desc Verify findLastIndex throws Error on first access, count 1, on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test008() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    int[] count = {0};
    try {
    int rIdx = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    count[0] = count[0] + 1;
    return BasTest.throwTestError("first access");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("first access", e.getMessage());
    }
    assertEqual(1, count[0]);
    }

    /**
     * Verify findLastIndex throws Error on second access, count 2, on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_0900
     * @tc.name int8ArrayFindLastIndexPart03Test009
     * @tc.desc Verify findLastIndex throws Error on second access, count 2, on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test009() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    int[] count = {0};
    try {
    int rIdx = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    count[0] = count[0] + 1;
    if (count[0] == 2) {
    return BasTest.throwTestError("second access");
    }
    return false;
    });
    assertEqual(-1, rIdx);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("second access", e.getMessage());
    }
    assertEqual(2, count[0]);
    }

    /**
     * Verify findLastIndex throws Error at index 0 after full traversal, count 4, on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_1000
     * @tc.name int8ArrayFindLastIndexPart03Test010
     * @tc.desc Verify findLastIndex throws Error at index 0 after full traversal, count 4, on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test010() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    int[] count = {0};
    try {
    int rIdx = arr.findLastIndex((value, index, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    count[0] = count[0] + 1;
    if (index == 0) {
    return BasTest.throwTestError("last access");
    }
    return false;
    });
    assertEqual(-1, rIdx);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("last access", e.getMessage());
    }
    assertEqual(4, count[0]);
    }

    /**
     * Verify findLastIndex traverses from last index 4 first, on Int8Array.of(1, 2, 3, 4, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_1100
     * @tc.name int8ArrayFindLastIndexPart03Test011
     * @tc.desc Verify findLastIndex traverses from last index 4 first, on Int8Array.of(1, 2, 3, 4, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test011() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    int[] firstIndex = {-1};
    try {
    int rIdx = arr.findLastIndex((value, index, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    if (firstIndex[0] == -1) {
    firstIndex[0] = index;
    }
    if (index == 2) {
    return BasTest.throwTestError("idx two");
    }
    return false;
    });
    assertEqual(-1, rIdx);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("idx two", e.getMessage());
    }
    assertEqual(4, firstIndex[0]);
    }

    /**
     * Verify findLastIndex throws Error on second access, count 2, on Int8Array.of(1, 2, 3, 4, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_1200
     * @tc.name int8ArrayFindLastIndexPart03Test012
     * @tc.desc Verify findLastIndex throws Error on second access, count 2, on Int8Array.of(1, 2, 3, 4, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test012() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    int[] count = {0};
    try {
    int rIdx = arr.findLastIndex((value, index, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    count[0] = count[0] + 1;
    if (index == 3) {
    return BasTest.throwTestError("partial stop");
    }
    return false;
    });
    assertEqual(-1, rIdx);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("partial stop", e.getMessage());
    }
    assertEqual(2, count[0]);
    }

    /**
     * Verify findLastIndex expects Error throws exception, with $_get(2), on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_1300
     * @tc.name int8ArrayFindLastIndexPart03Test013
     * @tc.desc Verify findLastIndex expects Error throws exception, with $_get(2), on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test013() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    try {
    int rIdx = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    return BasTest.throwTestError("content check");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("content check", e.getMessage());
    }
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify findLastIndex propagates Error from predicate and length stays 3, on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_1400
     * @tc.name int8ArrayFindLastIndexPart03Test014
     * @tc.desc Verify findLastIndex propagates Error from predicate and length stays 3, on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test014() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    try {
    int rIdx = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    return BasTest.throwTestError("length check");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("length check", e.getMessage());
    }
    int r1 = arr.length();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify findLastIndex propagates Error from predicate, no result returned, on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_1500
     * @tc.name int8ArrayFindLastIndexPart03Test015
     * @tc.desc Verify findLastIndex propagates Error from predicate, no result returned, on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test015() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    try {
    int rIdx = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
    return BasTest.throwTestError("no return value");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("no return value", e.getMessage());
    }
    }

    /**
     * Verify findLastIndex callback throwing Error propagates and captures value 20 o
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_1600
     * @tc.name int8ArrayFindLastIndexPart03Test016
     * @tc.desc Verify findLastIndex callback throwing Error propagates and captures value 20 o
     * n Int8Array.of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test016() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int[] capturedValue = {0};
    try {
    int rIdx = arr.findLastIndex((value, index, unusedArray) -> {
    if (index == 1) {
    capturedValue[0] = value;
    return BasTest.throwTestError("value capture");
    }
    return false;
    });
    assertEqual(-1, rIdx);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("value capture", e.getMessage());
    }
    assertEqual(20, capturedValue[0]);
    }

    /**
     * Verify findLastIndex propagates Error thrown at index 2 after capturing value 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_1700
     * @tc.name int8ArrayFindLastIndexPart03Test017
     * @tc.desc Verify findLastIndex propagates Error thrown at index 2 after capturing value 3
     *, on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test017() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    int[] capturedValue = {0};
    try {
    int rIdx = arr.findLastIndex((value, index, unusedArray) -> {
    if (index == 2) {
    capturedValue[0] = value;
    return BasTest.throwTestError("ref capture");
    }
    return false;
    });
    assertEqual(-1, rIdx);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("ref capture", e.getMessage());
    }
    assertEqual(3, capturedValue[0]);
    }

    /**
     * Verify re-call findLastIndex after throw works normally no side effects
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_1800
     * @tc.name int8ArrayFindLastIndexPart03Test018
     * @tc.desc Verify re-call findLastIndex after throw works normally no side effects
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test018() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    try {
    int rIdx = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    return BasTest.throwTestError("first call");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("first call", e.getMessage());
    }
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 2);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex expects -1 when callback matches value 99, on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_1900
     * @tc.name int8ArrayFindLastIndexPart03Test019
     * @tc.desc Verify findLastIndex expects -1 when callback matches value 99, on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test019() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 99);
    assertEqual(-1, result);
    }

    /**
     * Verify empty array findLastIndex returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_2000
     * @tc.name int8ArrayFindLastIndexPart03Test020
     * @tc.desc Verify empty array findLastIndex returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test020() {
    Int8Array arr = new Int8Array(0);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 0);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects -1, on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_2100
     * @tc.name int8ArrayFindLastIndexPart03Test021
     * @tc.desc Verify findLastIndex expects -1, on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test021() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return false;
        });
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects -1, on Int8Array.of(42)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_2200
     * @tc.name int8ArrayFindLastIndexPart03Test022
     * @tc.desc Verify findLastIndex expects -1, on Int8Array.of(42)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test022() {
    Int8Array arr = Int8Array.of(42);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 99);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex with predicate element == 8 returns -1 (not found)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_2300
     * @tc.name int8ArrayFindLastIndexPart03Test023
     * @tc.desc Verify findLastIndex with predicate element == 8 returns -1 (not found)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test023() {
    Int8Array arr = Int8Array.of(7, 7, 7, 7);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 8);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex with predicate element != 0 returns -1 on all-zero array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_2400
     * @tc.name int8ArrayFindLastIndexPart03Test024
     * @tc.desc Verify findLastIndex with predicate element != 0 returns -1 on all-zero array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test024() {
    Int8Array arr = new Int8Array(5);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value != 0);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects -1, on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_2500
     * @tc.name int8ArrayFindLastIndexPart03Test025
     * @tc.desc Verify findLastIndex expects -1, on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test025() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value < 0);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects -1, on Int8Array.of(-10, -20, -30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_2600
     * @tc.name int8ArrayFindLastIndexPart03Test026
     * @tc.desc Verify findLastIndex expects -1, on Int8Array.of(-10, -20, -30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test026() {
    Int8Array arr = Int8Array.of(-10, -20, -30);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value > 0);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex with predicate element == 200 returns -1 (out-of-range, not found)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_2700
     * @tc.name int8ArrayFindLastIndexPart03Test027
     * @tc.desc Verify findLastIndex with predicate element == 200 returns -1 (out-of-range, not found)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test027() {
    Int8Array arr = Int8Array.of(-128, 0, INT8_MAX);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 200);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex with predicate element > 50 returns -1 on all-zero array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_2800
     * @tc.name int8ArrayFindLastIndexPart03Test028
     * @tc.desc Verify findLastIndex with predicate element > 50 returns -1 on all-zero array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test028() {
    Int8Array arr = new Int8Array(100);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value > 50);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex with predicate element == 51 returns -1 (not found)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_2900
     * @tc.name int8ArrayFindLastIndexPart03Test029
     * @tc.desc Verify findLastIndex with predicate element == 51 returns -1 (not found)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test029() {
    Int8Array arr = Int8Array.of(50, 50, 50);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 51);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex returns -1 on empty new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_3000
     * @tc.name int8ArrayFindLastIndexPart03Test030
     * @tc.desc Verify findLastIndex returns -1 on empty new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test030() {
    Int8Array arr = new Int8Array(0);
    int[] count = {0};
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
            count[0] = count[0] + 1;
        return true;
        });
    assertEqual(0, count[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects 0, on Int8Array.of(42)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_3100
     * @tc.name int8ArrayFindLastIndexPart03Test031
     * @tc.desc Verify findLastIndex expects 0, on Int8Array.of(42)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test031() {
    Int8Array arr = Int8Array.of(42);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 42);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex expects 0 and invokes callback once, on Int8Array.of(42)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_3200
     * @tc.name int8ArrayFindLastIndexPart03Test032
     * @tc.desc Verify findLastIndex expects 0 and invokes callback once, on Int8Array.of(42)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test032() {
    Int8Array arr = Int8Array.of(42);
    int[] count = {0};
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
        count[0] = count[0] + 1;
        return value == 42;
    });
    assertEqual(1, count[0]);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex expects 3, on Int8Array.of(7, 7, 7, 7)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_3300
     * @tc.name int8ArrayFindLastIndexPart03Test033
     * @tc.desc Verify findLastIndex expects 3, on Int8Array.of(7, 7, 7, 7)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test033() {
    Int8Array arr = Int8Array.of(7, 7, 7, 7);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 7);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex expects 3 and invokes callback once, on Int8Array.of(7, 7, 7, 7)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_3400
     * @tc.name int8ArrayFindLastIndexPart03Test034
     * @tc.desc Verify findLastIndex expects 3 and invokes callback once, on Int8Array.of(7, 7, 7, 7)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test034() {
    Int8Array arr = Int8Array.of(7, 7, 7, 7);
    int[] callCount = {0};
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
        callCount[0] = callCount[0] + 1;
        return value == 7;
    });
    assertEqual(1, callCount[0]);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex expects 1, on Int8Array.of(5, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_3500
     * @tc.name int8ArrayFindLastIndexPart03Test035
     * @tc.desc Verify findLastIndex expects 1, on Int8Array.of(5, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test035() {
    Int8Array arr = Int8Array.of(5, 5);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 5);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex with predicate element == 6 returns -1 (not found)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_3600
     * @tc.name int8ArrayFindLastIndexPart03Test036
     * @tc.desc Verify findLastIndex with predicate element == 6 returns -1 (not found)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test036() {
    Int8Array arr = Int8Array.of(5, 5);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 6);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects 0, on Int8Array.of(INT8_MAX)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_3700
     * @tc.name int8ArrayFindLastIndexPart03Test037
     * @tc.desc Verify findLastIndex expects 0, on Int8Array.of(INT8_MAX)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test037() {
    Int8Array arr = Int8Array.of(INT8_MAX);
    int result = arr.findLastIndex((value, index, array) -> value == INT8_MAX);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex expects 0, on Int8Array.of(-128)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_3800
     * @tc.name int8ArrayFindLastIndexPart03Test038
     * @tc.desc Verify findLastIndex expects 0, on Int8Array.of(-128)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test038() {
    Int8Array arr = Int8Array.of(-128);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == -128);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex expects 0, on Int8Array.of(99, 1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_3900
     * @tc.name int8ArrayFindLastIndexPart03Test039
     * @tc.desc Verify findLastIndex expects 0, on Int8Array.of(99, 1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test039() {
    Int8Array arr = Int8Array.of(99, 1, 2, 3);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 99);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex expects 3, on Int8Array.of(1, 2, 3, 99)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_4000
     * @tc.name int8ArrayFindLastIndexPart03Test040
     * @tc.desc Verify findLastIndex expects 3, on Int8Array.of(1, 2, 3, 99)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test040() {
    Int8Array arr = Int8Array.of(1, 2, 3, 99);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 99);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex expects 4, on Int8Array.of(99, 1, 99, 2, 99)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_4100
     * @tc.name int8ArrayFindLastIndexPart03Test041
     * @tc.desc Verify findLastIndex expects 4, on Int8Array.of(99, 1, 99, 2, 99)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test041() {
    Int8Array arr = Int8Array.of(99, 1, 99, 2, 99);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 99);
    assertEqual(4, result);
    }

    /**
     * Verify findLastIndex expects 3, on Int8Array.of(99, 1, 2, 99)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_4200
     * @tc.name int8ArrayFindLastIndexPart03Test042
     * @tc.desc Verify findLastIndex expects 3, on Int8Array.of(99, 1, 2, 99)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test042() {
    Int8Array arr = Int8Array.of(99, 1, 2, 99);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 99);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex expects 2, on Int8Array.of(1, 99, 99, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_4300
     * @tc.name int8ArrayFindLastIndexPart03Test043
     * @tc.desc Verify findLastIndex expects 2, on Int8Array.of(1, 99, 99, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test043() {
    Int8Array arr = Int8Array.of(1, 99, 99, 2);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 99);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex expects 1, on Int8Array.of(1, 99, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_4400
     * @tc.name int8ArrayFindLastIndexPart03Test044
     * @tc.desc Verify findLastIndex expects 1, on Int8Array.of(1, 99, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test044() {
    Int8Array arr = Int8Array.of(1, 99, 2);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 99);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex expects 2, on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_4500
     * @tc.name int8ArrayFindLastIndexPart03Test045
     * @tc.desc Verify findLastIndex expects 2, on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test045() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    List<Integer> indices = new ArrayList<>();
    int result = arr.findLastIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
            indices.add(index);
        return false;
        });
    assertEqualInt(2, indices.get(0));
    assertEqualInt(1, indices.get(1));
    assertEqualInt(0, indices.get(2));
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex callback captures value 30 at index 2 during reverse traversal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_4600
     * @tc.name int8ArrayFindLastIndexPart03Test046
     * @tc.desc Verify findLastIndex callback captures value 30 at index 2 during reverse traversal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test046() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int[] firstValue = {0};
    int result = arr.findLastIndex((value, index, unusedArray) -> {
        if (index == 2) {
            firstValue[0] = value;
        }
        return false;
        });
    assertEqual(30, firstValue[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex callback captures first visited value 1 and returns -1 whe
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_4700
     * @tc.name int8ArrayFindLastIndexPart03Test047
     * @tc.desc Verify findLastIndex callback captures first visited value 1 and returns -1 whe
     * n predicate always false, on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test047() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    int[] capturedFirst = {0};
    int result = arr.findLastIndex((value, index, unusedArray) -> {
        if (index == 0) {
            capturedFirst[0] = value;
        }
        return false;
        });
    assertEqual(1, capturedFirst[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex callback captures array.length 5, on Int8Array.of(1, 2, 3, 4, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_4800
     * @tc.name int8ArrayFindLastIndexPart03Test048
     * @tc.desc Verify findLastIndex callback captures array.length 5, on Int8Array.of(1, 2, 3, 4, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test048() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    int[] arrLength = {0};
    int result = arr.findLastIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
            if (index == 4) {
            arrLength[0] = array.length();
        }
        return false;
        });
    assertEqual(5, arrLength[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex callback invoked 5 times, on Int8Array.of(1, 2, 3, 4, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_4900
     * @tc.name int8ArrayFindLastIndexPart03Test049
     * @tc.desc Verify findLastIndex callback invoked 5 times, on Int8Array.of(1, 2, 3, 4, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test049() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    int[] count = {0};
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
            count[0] = count[0] + 1;
        return false;
        });
    assertEqual(5, count[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects 60
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_5000
     * @tc.name int8ArrayFindLastIndexPart03Test050
     * @tc.desc Verify findLastIndex expects 60
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test050() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int[] sum = {0};
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
        sum[0] = sum[0] + value;
        return false;
    });
    assertEqual(60, sum[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex with predicate element > threshold returns last matching i
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_5100
     * @tc.name int8ArrayFindLastIndexPart03Test051
     * @tc.desc Verify findLastIndex with predicate element > threshold returns last matching i
     * ndex 4, on Int8Array.of(1, 2, 3, 4, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test051() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    int threshold = 3;
    int result = arr.findLastIndex((value, index, array) -> value > threshold);
    assertEqual(4, result);
    }

    /**
     * Verify findLastIndex with predicate element == 100 returns last matching index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_5200
     * @tc.name int8ArrayFindLastIndexPart03Test052
     * @tc.desc Verify findLastIndex with predicate element == 100 returns last matching index
     * 0 after $_set(0, 100), on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test052() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    int result = arr.findLastIndex((value, index, array) -> {
        if (index == 1) {
            array.set(0, 100);
        }
        return value == 100;
        });
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex expects 3, on Int8Array.of(10, 20, 30, 40)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_5400
     * @tc.name int8ArrayFindLastIndexPart03Test054
     * @tc.desc Verify findLastIndex expects 3, on Int8Array.of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test054() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int[] firstIdx = {-1};
    int[] lastIdx = {-1};
    int result = arr.findLastIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
            if (firstIdx[0] == -1) {
            firstIdx[0] = index;
        }
            lastIdx[0] = index;
        return false;
        });
    assertEqual(3, firstIdx[0]);
    assertEqual(0, lastIdx[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex with predicate element == 2 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_5500
     * @tc.name int8ArrayFindLastIndexPart03Test055
     * @tc.desc Verify findLastIndex with predicate element == 2 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test055() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 2);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex expects 4, on Int8Array.of(1, 2, 3, 4, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_5600
     * @tc.name int8ArrayFindLastIndexPart03Test056
     * @tc.desc Verify findLastIndex expects 4, on Int8Array.of(1, 2, 3, 4, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test056() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 5);
    assertEqual(4, result);
    }

    /**
     * Verify findLastIndex callback captures value 3 at index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_5700
     * @tc.name int8ArrayFindLastIndexPart03Test057
     * @tc.desc Verify findLastIndex callback captures value 3 at index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test057() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    int[] capturedValue = {0};
    int rIdx = arr.findLastIndex((value, index, unusedArray) -> {
        if (index == 2) {
            capturedValue[0] = value;
        }
        return false;
        });
    assertEqual(-1, rIdx);
    assertEqual(3, capturedValue[0]);
    }

    /**
     * Verify findLastIndex expects SyntaxError throws exception
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_5800
     * @tc.name int8ArrayFindLastIndexPart03Test058
     * @tc.desc Verify findLastIndex expects SyntaxError throws exception
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test058() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    try {
    int rIdx = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    throw new SyntaxError("syntax message body");
    });
    fail();
    } catch (SyntaxError e) {
    assertEqual("SyntaxError", e.getClass().getSimpleName());
    assertEqual("syntax message body", e.getMessage());
    }
    }

    /**
     * Verify findLastIndex throws Error with direct call and e.message assertion
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_6100
     * @tc.name int8ArrayFindLastIndexPart03Test061
     * @tc.desc Verify findLastIndex throws Error with direct call and e.message assertion
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test061() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    try {
    int rIdx = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    return BasTest.throwTestError("error message body");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("error message body", e.getMessage());
    }
    }

    /**
     * Verify findLastIndex expects 2, on Int8Array.of(INT8_MAX, 1, INT8_MAX, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_6200
     * @tc.name int8ArrayFindLastIndexPart03Test062
     * @tc.desc Verify findLastIndex expects 2, on Int8Array.of(INT8_MAX, 1, INT8_MAX, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test062() {
    Int8Array arr = Int8Array.of(INT8_MAX, 1, INT8_MAX, 2);
    int result = arr.findLastIndex((value, index, array) -> value == INT8_MAX);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex expects 2, on Int8Array.of(-128, 1, -128, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_6300
     * @tc.name int8ArrayFindLastIndexPart03Test063
     * @tc.desc Verify findLastIndex expects 2, on Int8Array.of(-128, 1, -128, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test063() {
    Int8Array arr = Int8Array.of(-128, 1, -128, 2);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == -128);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex with predicate element == 0 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_6400
     * @tc.name int8ArrayFindLastIndexPart03Test064
     * @tc.desc Verify findLastIndex with predicate element == 0 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test064() {
    Int8Array arr = new Int8Array(4);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 0);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex expects -1, on Int8Array.of(-1, -2, -3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_6500
     * @tc.name int8ArrayFindLastIndexPart03Test065
     * @tc.desc Verify findLastIndex expects -1, on Int8Array.of(-1, -2, -3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test065() {
    Int8Array arr = Int8Array.of(-1, -2, -3);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value > 0);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects -1 when callback value < 0, on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_6600
     * @tc.name int8ArrayFindLastIndexPart03Test066
     * @tc.desc Verify findLastIndex expects -1 when callback value < 0, on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test066() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value < 0);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects 3 with always-true callback, on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_6700
     * @tc.name int8ArrayFindLastIndexPart03Test067
     * @tc.desc Verify findLastIndex expects 3 with always-true callback, on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test067() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return true;
        });
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex expects 0, on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_6800
     * @tc.name int8ArrayFindLastIndexPart03Test068
     * @tc.desc Verify findLastIndex expects 0, on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test068() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    int result = arr.findLastIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return index == 0;
        });
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex expects 3 when callback index === 3, on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_6900
     * @tc.name int8ArrayFindLastIndexPart03Test069
     * @tc.desc Verify findLastIndex expects 3 when callback index === 3, on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test069() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    int result = arr.findLastIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return index == 3;
        });
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex throws Error at index 2, on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_7000
     * @tc.name int8ArrayFindLastIndexPart03Test070
     * @tc.desc Verify findLastIndex throws Error at index 2, on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test070() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    try {
    int rIdx = arr.findLastIndex((value, index, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    if (index == 2) {
    return BasTest.throwTestError("idx trigger");
    }
    return false;
    });
    assertEqual(-1, rIdx);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("idx trigger", e.getMessage());
    }
    }

    /**
     * Verify findLastIndex expects 0, on Int8Array.of(7)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_7100
     * @tc.name int8ArrayFindLastIndexPart03Test071
     * @tc.desc Verify findLastIndex expects 0, on Int8Array.of(7)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test071() {
    Int8Array arr = Int8Array.of(7);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 7);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex expects -1, on Int8Array.of(1, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FINDLASTINDEX_PART03_7200
     * @tc.name int8ArrayFindLastIndexPart03Test072
     * @tc.desc Verify findLastIndex expects -1, on Int8Array.of(1, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart03Test072() {
    Int8Array arr = Int8Array.of(1, 2);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 99);
    assertEqual(-1, result);
    }
}
