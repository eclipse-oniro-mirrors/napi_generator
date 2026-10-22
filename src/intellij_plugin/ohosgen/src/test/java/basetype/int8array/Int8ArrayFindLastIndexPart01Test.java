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
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;

import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayFindLastIndexPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFindLastIndexPart01Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify findLastIndex expects 2 when callback matches value 30, on Int8Array.of(10, 20, 30, 40, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_0100
     * @tc.name int8ArrayFindLastIndexPart01Test001
     * @tc.desc Verify findLastIndex expects 2 when callback matches value 30, on Int8Array.of(10, 20, 30, 40, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test001() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 30);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex with always-true callback returns last index 2 on Int8Array.of(7, 8, 9)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_0200
     * @tc.name int8ArrayFindLastIndexPart01Test002
     * @tc.desc Verify findLastIndex with always-true callback returns last index 2 on Int8Array.of(7, 8, 9)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test002() {
    Int8Array arr = Int8Array.of(7, 8, 9);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return true;
        });
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex with predicate element == -3 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_0300
     * @tc.name int8ArrayFindLastIndexPart01Test003
     * @tc.desc Verify findLastIndex with predicate element == -3 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test003() {
    Int8Array arr = Int8Array.of(5, -3, 8, -3, 12);
    int result = arr.findLastIndex((value) -> value == -3);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex with predicate element == 4 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_0400
     * @tc.name int8ArrayFindLastIndexPart01Test004
     * @tc.desc Verify findLastIndex with predicate element == 4 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test004() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    int result = arr.findLastIndex((value, index) -> value == 4 && index == 3);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex with predicate element == 33 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_0500
     * @tc.name int8ArrayFindLastIndexPart01Test005
     * @tc.desc Verify findLastIndex with predicate element == 33 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test005() {
    Int8Array arr = Int8Array.of(11, 22, 33, 44);
    int result = arr.findLastIndex((value, index, array) -> value == 33 && index == 2 && array.length() == 4);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex expects 3, with findLastIndex(isEvenValue), on Int8Array.of(11, 22, 33, 44, 55)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_0600
     * @tc.name int8ArrayFindLastIndexPart01Test006
     * @tc.desc Verify findLastIndex expects 3, with findLastIndex(isEvenValue), on Int8Array.of(11, 22, 33, 44, 55)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test006() {
    Int8Array.Int8ArrayFinder isEvenValue = (value, index, array) -> {
        return value % 2 == 0;
        };
    Int8Array arr = Int8Array.of(11, 22, 33, 44, 55);
    int result = arr.findLastIndex(isEvenValue);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex with predicate element == target returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_0700
     * @tc.name int8ArrayFindLastIndexPart01Test007
     * @tc.desc Verify findLastIndex with predicate element == target returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test007() {
    int target = 3;
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == target);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex with predicate element > threshold returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_0800
     * @tc.name int8ArrayFindLastIndexPart01Test008
     * @tc.desc Verify findLastIndex with predicate element > threshold returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test008() {
    int threshold = 25;
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value > threshold);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex callback captures last element > 10 in reverse traversal e
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_0900
     * @tc.name int8ArrayFindLastIndexPart01Test009
     * @tc.desc Verify findLastIndex callback captures last element > 10 in reverse traversal e
     * ven when predicate returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test009() {
    Int8Array arr = Int8Array.of(5, 10, 15);
    int[] captured = {0};
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
        if (value > 10) {
            captured[0] = value;
    }
        return false;
        });
    assertEqual(15, captured[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex with always-false callback invokes 3 times and returns -1 on Int8Array.of(2, 4, 6)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_1000
     * @tc.name int8ArrayFindLastIndexPart01Test010
     * @tc.desc Verify findLastIndex with always-false callback invokes 3 times and returns -1 on Int8Array.of(2, 4, 6)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test010() {
    Int8Array arr = Int8Array.of(2, 4, 6);
    int[] count = {0};
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
            count[0] = count[0] + 1;
        return false;
        });
    assertEqual(3, count[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex with predicate element = Int8Array.of(9, 8, 3, 7) returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_1100
     * @tc.name int8ArrayFindLastIndexPart01Test011
     * @tc.desc Verify findLastIndex with predicate element = Int8Array.of(9, 8, 3, 7) returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test011() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    Int8Array reference = Int8Array.of(9, 8, 3, 7);
    int result = arr.findLastIndex((value, index, array) -> value == reference.get(index));
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex with always-true callback returns last index 2 on Int8Array.of(11, 22, 33)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_1200
     * @tc.name int8ArrayFindLastIndexPart01Test012
     * @tc.desc Verify findLastIndex with always-true callback returns last index 2 on Int8Array.of(11, 22, 33)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test012() {
    Int8Array arr = Int8Array.of(11, 22, 33);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return true;
        });
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex expects -1, on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_1300
     * @tc.name int8ArrayFindLastIndexPart01Test013
     * @tc.desc Verify findLastIndex expects -1, on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test013() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return false;
        });
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects 1, on Int8Array.of(-5, 3, -2, 9, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_1400
     * @tc.name int8ArrayFindLastIndexPart01Test014
     * @tc.desc Verify findLastIndex expects 1, on Int8Array.of(-5, 3, -2, 9, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test014() {
    Int8Array arr = Int8Array.of(-5, 3, -2, 9, 1);
    int result = arr.findLastIndex((value, index, unusedArray) -> value > 0 && index < 3);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex expects 1, on Int8Array.of(11, 42, 13, 14, 15)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_1500
     * @tc.name int8ArrayFindLastIndexPart01Test015
     * @tc.desc Verify findLastIndex expects 1, on Int8Array.of(11, 42, 13, 14, 15)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test015() {
    Int8Array arr = Int8Array.of(11, 42, 13, 14, 15);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 42);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex with predicate element >= 80 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_1600
     * @tc.name int8ArrayFindLastIndexPart01Test016
     * @tc.desc Verify findLastIndex with predicate element >= 80 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test016() {
    Int8Array arr = Int8Array.of(100, 50, 90, 30, 80);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value >= 80);
    assertEqual(4, result);
    }

    /**
     * Verify findLastIndex expects 4 when callback index > 2, on Int8Array.of(10, 20, 30, 40, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_1700
     * @tc.name int8ArrayFindLastIndexPart01Test017
     * @tc.desc Verify findLastIndex expects 4 when callback index > 2, on Int8Array.of(10, 20, 30, 40, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test017() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int result = arr.findLastIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return index > 2;
        });
    assertEqual(4, result);
    }

    /**
     * Verify findLastIndex returns 2 when value equals -128 on Int8Array.of(1, 2, -128)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_1800
     * @tc.name int8ArrayFindLastIndexPart01Test018
     * @tc.desc Verify findLastIndex returns 2 when value equals -128 on Int8Array.of(1, 2, -128)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test018() {
    Int8Array arr = Int8Array.of(1, 2, -128);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == -128);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex expects 0, on Int8Array.of(INT8_MAX, 1, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_1900
     * @tc.name int8ArrayFindLastIndexPart01Test019
     * @tc.desc Verify findLastIndex expects 0, on Int8Array.of(INT8_MAX, 1, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test019() {
    Int8Array arr = Int8Array.of(INT8_MAX, 1, 2);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == INT8_MAX);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex expects 1, on Int8Array.of(1, 0, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_2000
     * @tc.name int8ArrayFindLastIndexPart01Test020
     * @tc.desc Verify findLastIndex expects 1, on Int8Array.of(1, 0, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test020() {
    Int8Array arr = Int8Array.of(1, 0, 2);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 0);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex returns 2 when value equals -1 on Int8Array.of(1, 2, -1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_2100
     * @tc.name int8ArrayFindLastIndexPart01Test021
     * @tc.desc Verify findLastIndex returns 2 when value equals -1 on Int8Array.of(1, 2, -1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test021() {
    Int8Array arr = Int8Array.of(1, 2, -1);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == -1);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex expects 1, on Int8Array.of(2, 1, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_2200
     * @tc.name int8ArrayFindLastIndexPart01Test022
     * @tc.desc Verify findLastIndex expects 1, on Int8Array.of(2, 1, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test022() {
    Int8Array arr = Int8Array.of(2, 1, 3);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 1);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex expects 0, on Int8Array.of(128, 1, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_2300
     * @tc.name int8ArrayFindLastIndexPart01Test023
     * @tc.desc Verify findLastIndex expects 0, on Int8Array.of(128, 1, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test023() {
    Int8Array arr = Int8Array.of(128, 1, 2);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == -128);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex expects 0, on Int8Array.of(255, 1, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_2400
     * @tc.name int8ArrayFindLastIndexPart01Test024
     * @tc.desc Verify findLastIndex expects 0, on Int8Array.of(255, 1, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test024() {
    Int8Array arr = Int8Array.of(255, 1, 2);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == -1);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex expects 0, on Int8Array.of(-129, 1, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_2500
     * @tc.name int8ArrayFindLastIndexPart01Test025
     * @tc.desc Verify findLastIndex expects 0, on Int8Array.of(-129, 1, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test025() {
    Int8Array arr = Int8Array.of(-129, 1, 2);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == INT8_MAX);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex expects 0, on Int8Array.of(256, 1, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_2600
     * @tc.name int8ArrayFindLastIndexPart01Test026
     * @tc.desc Verify findLastIndex expects 0, on Int8Array.of(256, 1, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test026() {
    Int8Array arr = Int8Array.of(256, 1, 2);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 0);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex with predicate element == -INT8_MAX returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_2700
     * @tc.name int8ArrayFindLastIndexPart01Test027
     * @tc.desc Verify findLastIndex with predicate element == -INT8_MAX returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test027() {
    Int8Array arr = Int8Array.of(0x81, 1, 2);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == -INT8_MAX);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex expects 0, on Int8Array.of(Number.NaN, 1, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_2800
     * @tc.name int8ArrayFindLastIndexPart01Test028
     * @tc.desc Verify findLastIndex expects 0, on Int8Array.of(Number.NaN, 1, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test028() {
    Int8Array arr = Int8Array.of(Double.NaN, 1, 2);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 0);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex expects 0, on Int8Array.of(1.9, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_2900
     * @tc.name int8ArrayFindLastIndexPart01Test029
     * @tc.desc Verify findLastIndex expects 0, on Int8Array.of(1.9, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test029() {
    Int8Array arr = Int8Array.of(1.9, 2, 3);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 1);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex expects 0, on Int8Array.of(-1.9, 1, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_3000
     * @tc.name int8ArrayFindLastIndexPart01Test030
     * @tc.desc Verify findLastIndex expects 0, on Int8Array.of(-1.9, 1, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test030() {
    Int8Array arr = Int8Array.of(-1.9, 1, 2);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == -1);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex with predicate element > 100 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_3100
     * @tc.name int8ArrayFindLastIndexPart01Test031
     * @tc.desc Verify findLastIndex with predicate element > 100 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test031() {
    Int8Array arr = Int8Array.of(INT8_MAX, 50, INT8_MAX, -30);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value > 100);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex with predicate element < -100 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_3200
     * @tc.name int8ArrayFindLastIndexPart01Test032
     * @tc.desc Verify findLastIndex with predicate element < -100 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test032() {
    Int8Array arr = Int8Array.of(-128, 50, -128, 30);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value < -100);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex with predicate element < 50 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_3300
     * @tc.name int8ArrayFindLastIndexPart01Test033
     * @tc.desc Verify findLastIndex with predicate element < 50 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test033() {
    Int8Array arr = Int8Array.of(60, 10, 70, 20);
    int result = arr.findLastIndex((value, index, array) -> -50 < value && value < 50);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex with predicate element != 0 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_3400
     * @tc.name int8ArrayFindLastIndexPart01Test034
     * @tc.desc Verify findLastIndex with predicate element != 0 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test034() {
    Int8Array arr = Int8Array.of(0, 5, 0, 8);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value != 0);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex with predicate element == 7 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_3500
     * @tc.name int8ArrayFindLastIndexPart01Test035
     * @tc.desc Verify findLastIndex with predicate element == 7 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test035() {
    Int8Array arr = Int8Array.of(7, 7, 7, 7);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 7);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex returns 3 when value is positive on Int8Array.of(-5, 3, -2, 9)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_3600
     * @tc.name int8ArrayFindLastIndexPart01Test036
     * @tc.desc Verify findLastIndex returns 3 when value is positive on Int8Array.of(-5, 3, -2, 9)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test036() {
    Int8Array arr = Int8Array.of(-5, 3, -2, 9);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value > 0);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex with predicate element < 0 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_3700
     * @tc.name int8ArrayFindLastIndexPart01Test037
     * @tc.desc Verify findLastIndex with predicate element < 0 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test037() {
    Int8Array arr = Int8Array.of(5, -3, 2, -7);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value < 0);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex reverse traversal reaches index 0 and returns -1 when predicate always false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_3800
     * @tc.name int8ArrayFindLastIndexPart01Test038
     * @tc.desc Verify findLastIndex reverse traversal reaches index 0 and returns -1 when predicate always false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test038() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    boolean[] hitZero = {false};
    int result = arr.findLastIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
    if (index == 0) {
            hitZero[0] = true;
    }
        return false;
        });
    assertTrue(hitZero[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects -1, on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_3900
     * @tc.name int8ArrayFindLastIndexPart01Test039
     * @tc.desc Verify findLastIndex expects -1, on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test039() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    boolean[] hitLast = {false};
    int result = arr.findLastIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
    if (index == array.length() - 1) {
            hitLast[0] = true;
    }
        return false;
        });
    assertTrue(hitLast[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects -1, on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_4000
     * @tc.name int8ArrayFindLastIndexPart01Test040
     * @tc.desc Verify findLastIndex expects -1, on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test040() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    boolean[] allNonNeg = {true};
    int result = arr.findLastIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
    if (index < 0) {
            allNonNeg[0] = false;
    }
        return false;
        });
    assertTrue(allNonNeg[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects -1, on Int8Array.of(10, 20, 30, 40)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_4100
     * @tc.name int8ArrayFindLastIndexPart01Test041
     * @tc.desc Verify findLastIndex expects -1, on Int8Array.of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test041() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    boolean[] seen0 = {false};
    boolean[] seen1 = {false};
    boolean[] seen2 = {false};
    boolean[] seen3 = {false};
    int result = arr.findLastIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
    if (index == 0) {
            seen0[0] = true;
    }
    if (index == 1) {
            seen1[0] = true;
    }
    if (index == 2) {
            seen2[0] = true;
    }
    if (index == 3) {
            seen3[0] = true;
    }
        return false;
        });
    assertTrue(seen0[0]);
    assertTrue(seen1[0]);
    assertTrue(seen2[0]);
    assertTrue(seen3[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects 0, on Int8Array.of(10, 20, 30, 40)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_4200
     * @tc.name int8ArrayFindLastIndexPart01Test042
     * @tc.desc Verify findLastIndex expects 0, on Int8Array.of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test042() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int result = arr.findLastIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return index == 0;
        });
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex expects 3 when callback index equals length - 1, on Int8Array.of(10, 20, 30, 40)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_4300
     * @tc.name int8ArrayFindLastIndexPart01Test043
     * @tc.desc Verify findLastIndex expects 3 when callback index equals length - 1, on Int8Array.of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test043() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int result = arr.findLastIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return index == array.length() - 1;
        });
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex expects 2 when callback index === 2, on Int8Array.of(10, 20, 30, 40, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_4400
     * @tc.name int8ArrayFindLastIndexPart01Test044
     * @tc.desc Verify findLastIndex expects 2 when callback index === 2, on Int8Array.of(10, 20, 30, 40, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test044() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int result = arr.findLastIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return index == 2;
        });
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex expects 4, on Int8Array.of(11, 22, 33, 44, 55)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_4500
     * @tc.name int8ArrayFindLastIndexPart01Test045
     * @tc.desc Verify findLastIndex expects 4, on Int8Array.of(11, 22, 33, 44, 55)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test045() {
    Int8Array arr = Int8Array.of(11, 22, 33, 44, 55);
    int result = arr.findLastIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return index % 2 == 0;
        });
    assertEqual(4, result);
    }

    /**
     * Verify findLastIndex expects 4 when callback index >= 3, on Int8Array.of(10, 20, 30, 40, 50)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_4600
     * @tc.name int8ArrayFindLastIndexPart01Test046
     * @tc.desc Verify findLastIndex expects 4 when callback index >= 3, on Int8Array.of(10, 20, 30, 40, 50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test046() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int result = arr.findLastIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return index >= 3;
        });
    assertEqual(4, result);
    }

    /**
     * Verify findLastIndex expects 3 when value > 30, on Int8Array.of(10, 20, 30, 40)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_4700
     * @tc.name int8ArrayFindLastIndexPart01Test047
     * @tc.desc Verify findLastIndex expects 3 when value > 30, on Int8Array.of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test047() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value > 30);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex returns 2 when index equals 2 on Int8Array.of(10, 20, 30, 40)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_4800
     * @tc.name int8ArrayFindLastIndexPart01Test048
     * @tc.desc Verify findLastIndex returns 2 when index equals 2 on Int8Array.of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test048() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int target = 2;
    int result = arr.findLastIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return index == target;
        });
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex expects 3 when callback index + 1 equals length, on Int8Array.of(10, 20, 30, 40)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_4900
     * @tc.name int8ArrayFindLastIndexPart01Test049
     * @tc.desc Verify findLastIndex expects 3 when callback index + 1 equals length, on Int8Array.of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test049() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    int result = arr.findLastIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return index + 1 == array.length();
        });
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex expects 2 when value > 1, on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_5000
     * @tc.name int8ArrayFindLastIndexPart01Test050
     * @tc.desc Verify findLastIndex expects 2 when value > 1, on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test050() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value > 1);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex returns 3 when array length equals 4 on Int8Array.of(5, 10, 15, 20)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_5100
     * @tc.name int8ArrayFindLastIndexPart01Test051
     * @tc.desc Verify findLastIndex returns 3 when array length equals 4 on Int8Array.of(5, 10, 15, 20)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test051() {
    Int8Array arr = Int8Array.of(5, 10, 15, 20);
    int result = arr.findLastIndex((value, unusedIndex, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return array.length() == 4;
        });
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex expects 3 when value > 14, on Int8Array.of(7, 14, 21, 28)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_5200
     * @tc.name int8ArrayFindLastIndexPart01Test052
     * @tc.desc Verify findLastIndex expects 3 when value > 14, on Int8Array.of(7, 14, 21, 28)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test052() {
    Int8Array arr = Int8Array.of(7, 14, 21, 28);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value > 14);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex expects 2 when value === 27, on Int8Array.of(9, 18, 27)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_5300
     * @tc.name int8ArrayFindLastIndexPart01Test053
     * @tc.desc Verify findLastIndex expects 2 when value === 27, on Int8Array.of(9, 18, 27)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test053() {
    Int8Array arr = Int8Array.of(9, 18, 27);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 27);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex with predicate element == array.$_get(0) returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_5400
     * @tc.name int8ArrayFindLastIndexPart01Test054
     * @tc.desc Verify findLastIndex with predicate element == array.$_get(0) returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test054() {
    Int8Array arr = Int8Array.of(42, 10, 20, 30);
    int result = arr.findLastIndex((value, index, array) -> value == array.get(0));
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex with predicate element == array.at(-1) returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_5500
     * @tc.name int8ArrayFindLastIndexPart01Test055
     * @tc.desc Verify findLastIndex with predicate element == array.at(-1) returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test055() {
    Int8Array arr = Int8Array.of(10, 20, 30, 99);
    Integer result = arr.findLastIndex((value, unusedIndex, array) -> value == array.at(-1));
    assertEqualInt(3, result);
    }

    /**
     * Verify findLastIndex expects 2 when array.length equals external 3, on Int8Array.of(3, 6, 9)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_5600
     * @tc.name int8ArrayFindLastIndexPart01Test056
     * @tc.desc Verify findLastIndex expects 2 when array.length equals external 3, on Int8Array.of(3, 6, 9)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test056() {
    Int8Array arr = Int8Array.of(3, 6, 9);
    int external = arr.length();
    int result = arr.findLastIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return array.length() == external;
        });
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex expects 2 when value === 6, on Int8Array.of(2, 4, 6)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_5700
     * @tc.name int8ArrayFindLastIndexPart01Test057
     * @tc.desc Verify findLastIndex expects 2 when value === 6, on Int8Array.of(2, 4, 6)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test057() {
    Int8Array arr = Int8Array.of(2, 4, 6);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 6);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex expects 2 when index === array.byteLength - 1, on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_5800
     * @tc.name int8ArrayFindLastIndexPart01Test058
     * @tc.desc Verify findLastIndex expects 2 when index === array.byteLength - 1, on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test058() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int result = arr.findLastIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return index == array.byteLength() - 1;
        });
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex expects 2, with $_get(i), on Int8Array.of(5, 10, 15)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_5900
     * @tc.name int8ArrayFindLastIndexPart01Test059
     * @tc.desc Verify findLastIndex expects 2, with $_get(i), on Int8Array.of(5, 10, 15)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test059() {
    Int8Array arr = Int8Array.of(5, 10, 15);
    int result = arr.findLastIndex((value, unusedIndex, array) -> {
        int sum = 0;
        for (int i = 0;
        i < array.length();
        i++) {
            sum = sum + array.get(i);
    }
        return value * 2 == sum;
        });
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex returns 2 when array.buffer matches view buffer on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_6000
     * @tc.name int8ArrayFindLastIndexPart01Test060
     * @tc.desc Verify findLastIndex returns 2 when array.buffer matches view buffer on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test060() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Int8Array arr = new Int8Array(buf);
    int result = arr.findLastIndex((value, unusedIndex, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return array.buffer() == buf;
        });
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex with predicate element == 3 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_6100
     * @tc.name int8ArrayFindLastIndexPart01Test061
     * @tc.desc Verify findLastIndex with predicate element == 3 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test061() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 3);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex expects 2 from ArrayBuffer, with $_set(0, 10), on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_6200
     * @tc.name int8ArrayFindLastIndexPart01Test062
     * @tc.desc Verify findLastIndex expects 2 from ArrayBuffer, with $_set(0, 10), on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test062() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 30);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex with predicate element == 15 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_6300
     * @tc.name int8ArrayFindLastIndexPart01Test063
     * @tc.desc Verify findLastIndex with predicate element == 15 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test063() {
    Int8Array arr = Int8Array.of(5, 10, 15, 20);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 15);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex with predicate element == 21 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_6400
     * @tc.name int8ArrayFindLastIndexPart01Test064
     * @tc.desc Verify findLastIndex with predicate element == 21 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test064() {
    List<Integer> src = java.util.Arrays.asList(7, 14, 21, 28);
    Int8Array arr = Int8Array.from(src);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 21);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex on subarray with predicate element == 80 returns index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_6500
     * @tc.name int8ArrayFindLastIndexPart01Test065
     * @tc.desc Verify findLastIndex on subarray with predicate element == 80 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test065() {
    Int8Array base = Int8Array.of(100, 90, 80, 70, 60);
    Int8Array arr = base.subarray(1, 4);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 80);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex on slice with predicate element == 70 returns index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_6600
     * @tc.name int8ArrayFindLastIndexPart01Test066
     * @tc.desc Verify findLastIndex on slice with predicate element == 70 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test066() {
    Int8Array base = Int8Array.of(50, 60, 70, 80);
    Int8Array arr = base.slice(1, 3);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 70);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex on empty Int8Array(0) never invokes callback and returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_6700
     * @tc.name int8ArrayFindLastIndexPart01Test067
     * @tc.desc Verify findLastIndex on empty Int8Array(0) never invokes callback and returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test067() {
    Int8Array arr = new Int8Array(0);
    boolean[] called = {false};
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
            called[0] = true;
        return true;
        });
    assertFalse(called[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex invokes callback once and returns -1 when predicate always
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_6800
     * @tc.name int8ArrayFindLastIndexPart01Test068
     * @tc.desc Verify findLastIndex invokes callback once and returns -1 when predicate always
     * false, on Int8Array.of(77)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test068() {
    Int8Array arr = Int8Array.of(77);
    int[] count = {0};
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
            count[0] = count[0] + 1;
        return false;
        });
    assertEqual(1, count[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex with predicate element == 77 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_6900
     * @tc.name int8ArrayFindLastIndexPart01Test069
     * @tc.desc Verify findLastIndex with predicate element == 77 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test069() {
    Int8Array arr = Int8Array.of(77);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 77);
    assertEqual(0, result);
    int missIndex = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 88);
    assertEqual(-1, missIndex);
    }

    /**
     * Verify findLastIndex invokes callback 100 times and returns -1 when predicate a
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_7000
     * @tc.name int8ArrayFindLastIndexPart01Test070
     * @tc.desc Verify findLastIndex invokes callback 100 times and returns -1 when predicate a
     * lways false, on new Int8Array(100)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test070() {
    Int8Array arr = new Int8Array(100);
    int[] count = {0};
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
            count[0] = count[0] + 1;
        return false;
        });
    assertEqual(100, count[0]);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex expects 99
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_LAST_INDEX_PART01_7100
     * @tc.name int8ArrayFindLastIndexPart01Test071
     * @tc.desc Verify findLastIndex expects 99
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindLastIndexPart01Test071() {
    Int8Array arr = new Int8Array(100);
    arr.set(99, 42);
    int result = arr.findLastIndex((value, unusedIndex, unusedArray) -> value == 42);
    assertEqual(99, result);
    }
}
