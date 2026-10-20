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

package basetype.int16array;

import basetype.common.Int16Array;
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;

import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayToSortedTest01 —— Int16Array 方法族 XTS 测试。
 *
 * @since 2026-10-20
 */
public class Int16ArrayToSortedTest01 extends BasTest {
    /**
     * Verify toSorted() on empty array returns an independent empty Int16Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_0100
     * @tc.name testInt16ArrayToSortedTestOne001
     * @tc.desc Verify toSorted() on empty array returns an independent empty Int16Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne001() {
    Int16Array arr = new Int16Array(0);
    Int16Array sorted = arr.toSorted();
    int actualLength = sorted.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    assertNotEqual(arr, sorted);
    assertNotEqual(arr.buffer(), sorted.buffer());
    int actualSourceLength = arr.length();
    int expectedSourceLength = 0;
    assertEqual(expectedSourceLength, actualSourceLength);
    }

    /**
     * Verify toSorted() on single-element array returns same-value copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_0200
     * @tc.name testInt16ArrayToSortedTestOne002
     * @tc.desc Verify toSorted() on single-element array returns same-value copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne002() {
    int val = 42;
    Int16Array arr = Int16Array.of(val);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = 42;
    assertEqualInt(expectedElement0, elementAt0);
    int actualLength = sorted.length();
    int expectedLength = 1;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify toSorted() on ascending array with int16 bounds keeps order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_0300
     * @tc.name testInt16ArrayToSortedTestOne003
     * @tc.desc Verify toSorted() on ascending array with int16 bounds keeps order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne003() {
    Int16Array arr = Int16Array.of(-32768, 0, 32767);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = 0;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted.get((int) 2);
    int expectedElement2 = 32767;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify toSorted() on length-1 value -1 returns same element copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_0400
     * @tc.name testInt16ArrayToSortedTestOne004
     * @tc.desc Verify toSorted() on length-1 value -1 returns same element copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne004() {
    int val = -1;
    Int16Array arr = Int16Array.of(val);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = -1;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify toSorted() on length-1 int16.MIN returns -32768 copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_0500
     * @tc.name testInt16ArrayToSortedTestOne005
     * @tc.desc Verify toSorted() on length-1 int16.MIN returns -32768 copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne005() {
    int val = -32768;
    Int16Array arr = Int16Array.of(val);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify toSorted() on length-1 int16.MAX returns 32767 copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_0600
     * @tc.name testInt16ArrayToSortedTestOne006
     * @tc.desc Verify toSorted() on length-1 int16.MAX returns 32767 copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne006() {
    int val = 32767;
    Int16Array arr = Int16Array.of(val);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = 32767;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify toSorted() on length-2 [MIN, MAX] keeps ascending order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_0700
     * @tc.name testInt16ArrayToSortedTestOne007
     * @tc.desc Verify toSorted() on length-2 [MIN, MAX] keeps ascending order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne007() {
    Int16Array arr = Int16Array.of(-32768, 32767);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = 32767;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify toSorted() on length-2 [MAX, MIN] swaps to ascending
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_0800
     * @tc.name testInt16ArrayToSortedTestOne008
     * @tc.desc Verify toSorted() on length-2 [MAX, MIN] swaps to ascending
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne008() {
    Int16Array arr = Int16Array.of(32767, -32768);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = 32767;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify toSorted() on length-6 negatives-and-zero random returns ascending
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_0900
     * @tc.name testInt16ArrayToSortedTestOne009
     * @tc.desc Verify toSorted() on length-6 negatives-and-zero random returns ascending
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne009() {
    Int16Array arr = Int16Array.of(-5, -3, -1, -4, -2, 0);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = -5;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = -4;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted.get((int) 2);
    int expectedElement2 = -3;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = sorted.get((int) 3);
    int expectedElement3 = -2;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = sorted.get((int) 4);
    int expectedElement4 = -1;
    assertEqualInt(expectedElement4, elementAt4);
    Integer elementAt5 = sorted.get((int) 5);
    int expectedElement5 = 0;
    assertEqualInt(expectedElement5, elementAt5);
    }

    /**
     * Verify toSorted() on length-100 reverse values has ascending endpoints and middle
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_1000
     * @tc.name testInt16ArrayToSortedTestOne010
     * @tc.desc Verify toSorted() on length-100 reverse values has ascending endpoints and middle
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne010() {
    Int16Array arr = new Int16Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set((int) i, 100 - i);
    }
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = 1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt50 = sorted.get((int) 50);
    int expectedElement50 = 51;
    assertEqualInt(expectedElement50, elementAt50);
    Integer elementAt99 = sorted.get((int) 99);
    int expectedElement99 = 100;
    assertEqualInt(expectedElement99, elementAt99);
    }

    /**
     * Verify toSorted() on ascending MIN/MAX/0 mix keeps order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_1100
     * @tc.name testInt16ArrayToSortedTestOne011
     * @tc.desc Verify toSorted() on ascending MIN/MAX/0 mix keeps order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne011() {
    Int16Array arr = Int16Array.of(-32768, -1, 0, 1, 32767);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = -1;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted.get((int) 2);
    int expectedElement2 = 0;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = sorted.get((int) 3);
    int expectedElement3 = 1;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = sorted.get((int) 4);
    int expectedElement4 = 32767;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify toSorted() on ascending all-negative values keeps order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_1200
     * @tc.name testInt16ArrayToSortedTestOne012
     * @tc.desc Verify toSorted() on ascending all-negative values keeps order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne012() {
    Int16Array arr = Int16Array.of(-100, -50, -10, -5, -1);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = -100;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = -50;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted.get((int) 2);
    int expectedElement2 = -10;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = sorted.get((int) 3);
    int expectedElement3 = -5;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = sorted.get((int) 4);
    int expectedElement4 = -1;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify toSorted() with duplicate MIN/MAX keeps duplicates adjacent after ascending sort
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_1300
     * @tc.name testInt16ArrayToSortedTestOne013
     * @tc.desc Verify toSorted() with duplicate MIN/MAX keeps duplicates adjacent after ascending sort
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne013() {
    Int16Array arr = Int16Array.of(32767, 32767, 0, -32768, -32768);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = -32768;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted.get((int) 2);
    int expectedElement2 = 0;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = sorted.get((int) 3);
    int expectedElement3 = 32767;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = sorted.get((int) 4);
    int expectedElement4 = 32767;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify toSorted() on all int16.MIN returns all -32768 copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_1400
     * @tc.name testInt16ArrayToSortedTestOne014
     * @tc.desc Verify toSorted() on all int16.MIN returns all -32768 copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne014() {
    Int16Array arr = Int16Array.of(-32768, -32768, -32768, -32768, -32768);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = -32768;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted.get((int) 2);
    int expectedElement2 = -32768;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = sorted.get((int) 3);
    int expectedElement3 = -32768;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = sorted.get((int) 4);
    int expectedElement4 = -32768;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify toSorted() on ascending adjacent negatives/zero/positives keeps order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_1500
     * @tc.name testInt16ArrayToSortedTestOne015
     * @tc.desc Verify toSorted() on ascending adjacent negatives/zero/positives keeps order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne015() {
    Int16Array arr = Int16Array.of(-3, -2, -1, 0, 1, 2, 3);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = -3;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = -2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted.get((int) 2);
    int expectedElement2 = -1;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = sorted.get((int) 3);
    int expectedElement3 = 0;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = sorted.get((int) 4);
    int expectedElement4 = 1;
    assertEqualInt(expectedElement4, elementAt4);
    Integer elementAt5 = sorted.get((int) 5);
    int expectedElement5 = 2;
    assertEqualInt(expectedElement5, elementAt5);
    Integer elementAt6 = sorted.get((int) 6);
    int expectedElement6 = 3;
    assertEqualInt(expectedElement6, elementAt6);
    }

    /**
     * Verify toSorted() on three distinct negatives returns ascending
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_1600
     * @tc.name testInt16ArrayToSortedTestOne016
     * @tc.desc Verify toSorted() on three distinct negatives returns ascending
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne016() {
    Int16Array arr = Int16Array.of(-1, -32768, -100);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = -100;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted.get((int) 2);
    int expectedElement2 = -1;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify toSorted() corrects single misplaced element position
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_1700
     * @tc.name testInt16ArrayToSortedTestOne017
     * @tc.desc Verify toSorted() corrects single misplaced element position
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne017() {
    Int16Array arr = Int16Array.of(2, 1, 3, 4, 5);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = 1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted.get((int) 2);
    int expectedElement2 = 3;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = sorted.get((int) 3);
    int expectedElement3 = 4;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = sorted.get((int) 4);
    int expectedElement4 = 5;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify toSorted() on two concatenated sorted segments returns global ascending
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_1800
     * @tc.name testInt16ArrayToSortedTestOne018
     * @tc.desc Verify toSorted() on two concatenated sorted segments returns global ascending
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne018() {
    Int16Array arr = Int16Array.of(4, 5, 6, 1, 2, 3);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = 1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted.get((int) 2);
    int expectedElement2 = 3;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = sorted.get((int) 3);
    int expectedElement3 = 4;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = sorted.get((int) 4);
    int expectedElement4 = 5;
    assertEqualInt(expectedElement4, elementAt4);
    Integer elementAt5 = sorted.get((int) 5);
    int expectedElement5 = 6;
    assertEqualInt(expectedElement5, elementAt5);
    }

    /**
     * Verify toSorted() on new Int16Array(array-literal) returns ascending copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_1900
     * @tc.name testInt16ArrayToSortedTestOne019
     * @tc.desc Verify toSorted() on new Int16Array(array-literal) returns ascending copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne019() {
    Int16Array arr = new Int16Array(new int[] {3, 1, 2});
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = 1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted.get((int) 2);
    int expectedElement2 = 3;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify toSorted() on Int16Array.from(number[]) returns ascending copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_2000
     * @tc.name testInt16ArrayToSortedTestOne020
     * @tc.desc Verify toSorted() on Int16Array.from(number[]) returns ascending copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne020() {
    List<Integer> src = java.util.Arrays.asList(3, 1, 2);
    Int16Array arr = Int16Array.from(src);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = 1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted.get((int) 2);
    int expectedElement2 = 3;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify toSorted() on length-constructor plus $_set returns ascending copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_2100
     * @tc.name testInt16ArrayToSortedTestOne021
     * @tc.desc Verify toSorted() on length-constructor plus $_set returns ascending copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne021() {
    Int16Array arr = new Int16Array(3);
    arr.set(0, (int) 3);
    arr.set(1, (int) 1);
    arr.set(2, (int) 2);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = 1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted.get((int) 2);
    int expectedElement2 = 3;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify toSorted() on ArrayBuffer view construction returns ascending copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_2200
     * @tc.name testInt16ArrayToSortedTestOne022
     * @tc.desc Verify toSorted() on ArrayBuffer view construction returns ascending copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne022() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array view = new Int16Array(buf);
    view.set(0, (int) 3);
    view.set(1, (int) 1);
    view.set(2, (int) 2);
    Int16Array sorted = view.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = 1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted.get((int) 2);
    int expectedElement2 = 3;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify no-arg toSorted() overload returns Int16Array type
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_2300
     * @tc.name testInt16ArrayToSortedTestOne023
     * @tc.desc Verify no-arg toSorted() overload returns Int16Array type
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne023() {
    Int16Array arr = Int16Array.of(3, 1, 2);
    Int16Array sorted = arr.toSorted();
    int actualLength = sorted.length();
    int expectedNotValue = arr.length();
    assertEqual(expectedNotValue, actualLength);
    }

    /**
     * Verify calling toSorted() twice is idempotent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_2400
     * @tc.name testInt16ArrayToSortedTestOne024
     * @tc.desc Verify calling toSorted() twice is idempotent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne024() {
    Int16Array arr = Int16Array.of(3, 1, 2);
    Int16Array sorted1 = arr.toSorted();
    Int16Array sorted2 = sorted1.toSorted();
    Integer elementAt0 = sorted2.get((int) 0);
    int expectedElement0 = 1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted2.get((int) 1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted2.get((int) 2);
    int expectedElement2 = 3;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify default toSorted() without compareFn uses numeric ascending
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_2500
     * @tc.name testInt16ArrayToSortedTestOne025
     * @tc.desc Verify default toSorted() without compareFn uses numeric ascending
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne025() {
    Int16Array arr = Int16Array.of(100, -50, 0, 50, -100);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = -100;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = -50;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted.get((int) 2);
    int expectedElement2 = 0;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = sorted.get((int) 3);
    int expectedElement3 = 50;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = sorted.get((int) 4);
    int expectedElement4 = 100;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify toSorted() returns a different object reference than source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_2600
     * @tc.name testInt16ArrayToSortedTestOne026
     * @tc.desc Verify toSorted() returns a different object reference than source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne026() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    Int16Array sorted = arr.toSorted();
    assertNotEqual(arr, sorted);
    }

    /**
     * Verify toSorted() sorts random array containing boundary values ascending
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_2700
     * @tc.name testInt16ArrayToSortedTestOne027
     * @tc.desc Verify toSorted() sorts random array containing boundary values ascending
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne027() {
    Int16Array arr = Int16Array.of(0, 32767, -32768, 100, -100);
    Int16Array sorted = arr.toSorted();
    Integer elementAt0 = sorted.get((int) 0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sorted.get((int) 1);
    int expectedElement1 = -100;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sorted.get((int) 2);
    int expectedElement2 = 0;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = sorted.get((int) 3);
    int expectedElement3 = 100;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = sorted.get((int) 4);
    int expectedElement4 = 32767;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify toSorted() sorts alternating highs and lows ascending
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_2800
     * @tc.name testInt16ArrayToSortedTestOne028
     * @tc.desc Verify toSorted() sorts alternating highs and lows ascending
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne028() {
    Int16Array arr = Int16Array.of(100, -100, 200, -200, 0);
    Int16Array result = arr.toSorted();
    Integer elementAt0 = result.get(0);
    int expectedElement0 = -200;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = result.get(1);
    int expectedElement1 = -100;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = result.get(2);
    int expectedElement2 = 0;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = result.get(3);
    int expectedElement3 = 100;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = result.get(4);
    int expectedElement4 = 200;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify toSorted() moves MAX from front to end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_2900
     * @tc.name testInt16ArrayToSortedTestOne029
     * @tc.desc Verify toSorted() moves MAX from front to end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne029() {
    Int16Array arr = Int16Array.of(32767, 100, 50);
    Int16Array result = arr.toSorted();
    Integer elementAt0 = result.get(0);
    int expectedElement0 = 50;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = result.get(1);
    int expectedElement1 = 100;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = result.get(2);
    int expectedElement2 = 32767;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify toSorted() keeps MIN at front for all-negative array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_3000
     * @tc.name testInt16ArrayToSortedTestOne030
     * @tc.desc Verify toSorted() keeps MIN at front for all-negative array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne030() {
    Int16Array arr = Int16Array.of(-32768, -100, -50);
    Int16Array result = arr.toSorted();
    Integer elementAt0 = result.get(0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = result.get(1);
    int expectedElement1 = -100;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = result.get(2);
    int expectedElement2 = -50;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify toSorted() sorts [0, -1, 1] to [-1, 0, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_3100
     * @tc.name testInt16ArrayToSortedTestOne031
     * @tc.desc Verify toSorted() sorts [0, -1, 1] to [-1, 0, 1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne031() {
    Int16Array arr = Int16Array.of(0, -1, 1);
    Int16Array result = arr.toSorted();
    Integer elementAt0 = result.get(0);
    int expectedElement0 = -1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = result.get(1);
    int expectedElement1 = 0;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = result.get(2);
    int expectedElement2 = 1;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify toSorted() result length equals 5 for 5-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_ONE_3200
     * @tc.name testInt16ArrayToSortedTestOne032
     * @tc.desc Verify toSorted() result length equals 5 for 5-element array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestOne032() {
    Int16Array arr = Int16Array.of(3, 1, 2, 5, 4);
    Int16Array result = arr.toSorted();
    int actualLength = result.length();
    int expectedLength = 5;
    assertEqual(expectedLength, actualLength);
    }
}
