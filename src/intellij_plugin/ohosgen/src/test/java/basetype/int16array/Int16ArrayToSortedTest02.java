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

import org.junit.jupiter.api.Test;

/**
 * Int16ArrayToSortedTest02 —— Int16Array 方法族 XTS 测试。
 *
 * @since 2026-10-20
 */
public class Int16ArrayToSortedTest02 extends BasTest {
    /**
     * Verify toSorted() result byteLength is 2 for single element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_0100
     * @tc.name testInt16ArrayToSortedTestTwo001
     * @tc.desc Verify toSorted() result byteLength is 2 for single element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo001() {
    int val = 42;
    Int16Array arr = Int16Array.of(val);
    Int16Array result = arr.toSorted();
    int actualByteLength = result.byteLength();
    int expectedByteLength = 2;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify toSorted() result contains three sorted Int16 elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_0200
     * @tc.name testInt16ArrayToSortedTestTwo002
     * @tc.desc Verify toSorted() result contains three sorted Int16 elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo002() {
    Int16Array arr = Int16Array.of(3, 1, 2);
    Int16Array result = arr.toSorted();
    int actualLength = result.length();
    int expectedLength = 3;
    assertEqual(expectedLength, actualLength);
    Integer actualFirstElement = result.get(0);
    int expectedFirstElement = 1;
    assertEqualInt(expectedFirstElement, actualFirstElement);
    Integer actualLastElement = result.get(2);
    int expectedLastElement = 3;
    assertEqualInt(expectedLastElement, actualLastElement);
    }

    /**
     * Verify original length unchanged after toSorted()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_0300
     * @tc.name testInt16ArrayToSortedTestTwo003
     * @tc.desc Verify original length unchanged after toSorted()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo003() {
    Int16Array arr = Int16Array.of(3, 1, 2);
    Int16Array result = arr.toSorted();
    String actualString = String.valueOf(result);
    String expectedString = "1,2,3";
    assertEqual(expectedString, actualString);
    int actualLength = arr.length();
    int expectedLength = 3;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify original boundary values unchanged after toSorted()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_0400
     * @tc.name testInt16ArrayToSortedTestTwo004
     * @tc.desc Verify original boundary values unchanged after toSorted()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo004() {
    Int16Array arr = Int16Array.of(-32768, 0, 32767);
    Int16Array result = arr.toSorted();
    String actualString = String.valueOf(result);
    String expectedString = "-32768,0,32767";
    assertEqual(expectedString, actualString);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 0;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 32767;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify empty original remains empty after toSorted()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_0500
     * @tc.name testInt16ArrayToSortedTestTwo005
     * @tc.desc Verify empty original remains empty after toSorted()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo005() {
    Int16Array arr = new Int16Array();
    Int16Array result = arr.toSorted();
    String actualString = String.valueOf(result);
    String expectedString = "";
    assertEqual(expectedString, actualString);
    assertNotEqual(arr.buffer(), result.buffer());
    int actualLength = arr.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify single-element original unchanged after toSorted()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_0600
     * @tc.name testInt16ArrayToSortedTestTwo006
     * @tc.desc Verify single-element original unchanged after toSorted()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo006() {
    int val = 42;
    Int16Array arr = Int16Array.of(val);
    Int16Array result = arr.toSorted();
    String actualString = String.valueOf(result);
    String expectedString = "42";
    assertEqual(expectedString, actualString);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 42;
    assertEqualInt(expectedElement0, elementAt0);
    int actualLength = arr.length();
    int expectedLength = 1;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify fill on toSorted() result leaves original elements unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_0700
     * @tc.name testInt16ArrayToSortedTestTwo007
     * @tc.desc Verify fill on toSorted() result leaves original elements unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo007() {
    Int16Array arr = Int16Array.of(3, 1, 2);
    Int16Array result = arr.toSorted();
    result.fill(0);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 3;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 1;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 2;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify two toSorted() calls return independent objects
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_0800
     * @tc.name testInt16ArrayToSortedTestTwo008
     * @tc.desc Verify two toSorted() calls return independent objects
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo008() {
    Int16Array arr = Int16Array.of(3, 1, 2);
    Int16Array sortedResultFirst = arr.toSorted();
    Int16Array sortedResultSecond = arr.toSorted();
    assertNotEqual(sortedResultSecond, sortedResultFirst);
    }

    /**
     * Verify toSorted() result supports $_set write
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_0900
     * @tc.name testInt16ArrayToSortedTestTwo009
     * @tc.desc Verify toSorted() result supports $_set write
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo009() {
    Int16Array arr = Int16Array.of(3, 1, 2);
    Int16Array result = arr.toSorted();
    result.set(0, 99);
    Integer elementAt0 = result.get(0);
    int expectedElement0 = 99;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify toSorted() result join returns sorted string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_1000
     * @tc.name testInt16ArrayToSortedTestTwo010
     * @tc.desc Verify toSorted() result join returns sorted string
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo010() {
    Int16Array arr = Int16Array.of(3, 1, 2);
    Int16Array result = arr.toSorted();
    String actualJoined = result.join(",");
    String expectedJoined = "1,2,3";
    assertEqual(expectedJoined, actualJoined);
    }

    /**
     * Verify large-array toSorted() length remains 20
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_1100
     * @tc.name testInt16ArrayToSortedTestTwo011
     * @tc.desc Verify large-array toSorted() length remains 20
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo011() {
    Int16Array arr = Int16Array.of(
        100, 50, 75, 25, 0, -50, -25, 10, 60, 90, -100, 40, 80, 20, 70, 30, -10, -75, -40, -90
    );
    Int16Array result = arr.toSorted();
    int actualLength = result.length();
    int expectedLength = 20;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify toSorted() deep copy has byteOffset 0 from ArrayBuffer view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_1200
     * @tc.name testInt16ArrayToSortedTestTwo012
     * @tc.desc Verify toSorted() deep copy has byteOffset 0 from ArrayBuffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo012() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array arr = new Int16Array(buf, 0, 3);
    arr.set(0, 3);
    arr.set(1, 1);
    arr.set(2, 2);
    Int16Array result = arr.toSorted();
    int actualByteOffset = result.byteOffset();
    int expectedByteOffset = 0;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify empty array toSorted() is idempotent when called twice
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_1300
     * @tc.name testInt16ArrayToSortedTestTwo013
     * @tc.desc Verify empty array toSorted() is idempotent when called twice
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo013() {
    Int16Array arr = new Int16Array(0);
    Int16Array sortedOnce = arr.toSorted();
    Int16Array sortedTwice = sortedOnce.toSorted();
    int actualLength = sortedTwice.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify empty array toSorted() result is not the original reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_1400
     * @tc.name testInt16ArrayToSortedTestTwo014
     * @tc.desc Verify empty array toSorted() result is not the original reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo014() {
    Int16Array arr = new Int16Array(0);
    Int16Array result = arr.toSorted();
    assertNotEqual(arr, result);
    }

    /**
     * Verify empty array toSorted() returns empty Int16Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_1500
     * @tc.name testInt16ArrayToSortedTestTwo015
     * @tc.desc Verify empty array toSorted() returns empty Int16Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo015() {
    Int16Array arr = new Int16Array(0);
    Int16Array result = arr.toSorted();
    int actualLength = result.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify single element 0 toSorted() returns a copy containing 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_1600
     * @tc.name testInt16ArrayToSortedTestTwo016
     * @tc.desc Verify single element 0 toSorted() returns a copy containing 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo016() {
    int val = 0;
    Int16Array arr = Int16Array.of(val);
    Int16Array result = arr.toSorted();
    Integer elementAt0 = result.get(0);
    int expectedElement0 = 0;
    assertEqualInt(expectedElement0, elementAt0);
    int actualLength = result.length();
    int expectedLength = 1;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify single element toSorted() result is not the original reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_1700
     * @tc.name testInt16ArrayToSortedTestTwo017
     * @tc.desc Verify single element toSorted() result is not the original reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo017() {
    int val = 42;
    Int16Array arr = Int16Array.of(val);
    Int16Array result = arr.toSorted();
    assertNotEqual(arr, result);
    }

    /**
     * Verify single element toSorted() result can be modified independently
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_1800
     * @tc.name testInt16ArrayToSortedTestTwo018
     * @tc.desc Verify single element toSorted() result can be modified independently
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo018() {
    int val = 5;
    Int16Array arr = Int16Array.of(val);
    Int16Array result = arr.toSorted();
    result.set(0, 10);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 5;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify all-zero array toSorted() keeps values unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_1900
     * @tc.name testInt16ArrayToSortedTestTwo019
     * @tc.desc Verify all-zero array toSorted() keeps values unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo019() {
    Int16Array arr = new Int16Array(5);
    Int16Array result = arr.toSorted();
    Integer elementAt0 = result.get(0);
    int expectedElement0 = 0;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt4 = result.get(4);
    int expectedElement4 = 0;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify all-equal array toSorted() leaves original array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_2000
     * @tc.name testInt16ArrayToSortedTestTwo020
     * @tc.desc Verify all-equal array toSorted() leaves original array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo020() {
    Int16Array arr = Int16Array.of(9, 9, 9);
    Int16Array result = arr.toSorted();
    String actualResultString = String.valueOf(result);
    String expectedResultString = "9,9,9";
    assertEqual(expectedResultString, actualResultString);
    String actualOriginalString = String.valueOf(arr);
    String expectedOriginalString = "9,9,9";
    assertEqual(expectedOriginalString, actualOriginalString);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 9;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 9;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 9;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify alternating MIN/MAX values place all MIN before MAX after toSorted()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_2100
     * @tc.name testInt16ArrayToSortedTestTwo021
     * @tc.desc Verify alternating MIN/MAX values place all MIN before MAX after toSorted()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo021() {
    Int16Array arr = Int16Array.of(32767, -32768, 32767, -32768);
    Int16Array result = arr.toSorted();
    Integer elementAt0 = result.get(0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = result.get(1);
    int expectedElement1 = -32768;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = result.get(2);
    int expectedElement2 = 32767;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = result.get(3);
    int expectedElement3 = 32767;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify modifying toSorted() result does not change original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_2200
     * @tc.name testInt16ArrayToSortedTestTwo022
     * @tc.desc Verify modifying toSorted() result does not change original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo022() {
    Int16Array arr = Int16Array.of(3, 1, 2);
    Int16Array result = arr.toSorted();
    result.set(0, 99);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 3;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 1;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 2;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify fill on toSorted() result does not affect original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_2300
     * @tc.name testInt16ArrayToSortedTestTwo023
     * @tc.desc Verify fill on toSorted() result does not affect original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo023() {
    Int16Array arr = Int16Array.of(5, 1, 3);
    Int16Array result = arr.toSorted();
    result.fill(0);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 5;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 1;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 3;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse on toSorted() result does not affect original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_2400
     * @tc.name testInt16ArrayToSortedTestTwo024
     * @tc.desc Verify reverse on toSorted() result does not affect original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo024() {
    Int16Array arr = Int16Array.of(1, 3, 2);
    Int16Array result = arr.toSorted();
    result.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 3;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 2;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify set on toSorted() result does not affect original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_2500
     * @tc.name testInt16ArrayToSortedTestTwo025
     * @tc.desc Verify set on toSorted() result does not affect original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo025() {
    Int16Array arr = Int16Array.of(4, 1, 3);
    Int16Array result = arr.toSorted();
    Int16Array other = Int16Array.of(99, 99, 99);
    result.set(other, 0);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 4;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 1;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 3;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify sort on toSorted() result does not affect original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_2600
     * @tc.name testInt16ArrayToSortedTestTwo026
     * @tc.desc Verify sort on toSorted() result does not affect original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo026() {
    Int16Array arr = Int16Array.of(1, 3, 2);
    Int16Array result = arr.toSorted();
    result.sort();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 3;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 2;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify original mutations after toSorted() do not affect returned result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_2700
     * @tc.name testInt16ArrayToSortedTestTwo027
     * @tc.desc Verify original mutations after toSorted() do not affect returned result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo027() {
    Int16Array arr = Int16Array.of(10, 5, 8);
    Int16Array result = arr.toSorted();
    arr.fill(0);
    arr.reverse();
    arr.sort();
    Integer elementAt0 = result.get(0);
    int expectedElement0 = 5;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = result.get(1);
    int expectedElement1 = 8;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = result.get(2);
    int expectedElement2 = 10;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify ascending array toSorted() twice yields same order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_2800
     * @tc.name testInt16ArrayToSortedTestTwo028
     * @tc.desc Verify ascending array toSorted() twice yields same order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo028() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    Int16Array sortedOnce = arr.toSorted();
    Int16Array sortedTwice = sortedOnce.toSorted();
    Integer elementAt0 = sortedTwice.get(0);
    int expectedElement0 = 1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sortedTwice.get(1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = sortedTwice.get(2);
    int expectedElement2 = 3;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = sortedTwice.get(3);
    int expectedElement3 = 4;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = sortedTwice.get(4);
    int expectedElement4 = 5;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify unordered array chained toSorted() is idempotent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_2900
     * @tc.name testInt16ArrayToSortedTestTwo029
     * @tc.desc Verify unordered array chained toSorted() is idempotent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo029() {
    Int16Array arr = Int16Array.of(7, 2, 9, 1, 5);
    Int16Array sortedOnce = arr.toSorted();
    Int16Array sortedTwice = sortedOnce.toSorted();
    Integer elementAt0 = sortedOnce.get(0);
    Integer expectedElement0 = sortedTwice.get(0);
    assertEqual(expectedElement0.intValue(), elementAt0.intValue());
    Integer elementAt4 = sortedOnce.get(4);
    Integer expectedElement4 = sortedTwice.get(4);
    assertEqual(expectedElement4.intValue(), elementAt4.intValue());
    }

    /**
     * Verify single element toSorted() three times remains the element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_3000
     * @tc.name testInt16ArrayToSortedTestTwo030
     * @tc.desc Verify single element toSorted() three times remains the element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo030() {
    int val = 42;
    Int16Array arr = Int16Array.of(val);
    Int16Array sortedOnce = arr.toSorted();
    Int16Array sortedTwice = sortedOnce.toSorted();
    Int16Array sortedThrice = sortedTwice.toSorted();
    Integer elementAt0 = sortedThrice.get(0);
    int expectedElement0 = 42;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify toSorted() result length equals original length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_3100
     * @tc.name testInt16ArrayToSortedTestTwo031
     * @tc.desc Verify toSorted() result length equals original length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo031() {
    Int16Array arr = Int16Array.of(9, 7, 8, 6);
    Int16Array result = arr.toSorted();
    int actualLength = result.length();
    int expectedLength = arr.length();
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify larger-magnitude negatives sort before smaller ones with toSorted()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_3200
     * @tc.name testInt16ArrayToSortedTestTwo032
     * @tc.desc Verify larger-magnitude negatives sort before smaller ones with toSorted()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo032() {
    Int16Array arr = Int16Array.of(-1, -100, -10);
    Int16Array result = arr.toSorted();
    Integer elementAt0 = result.get(0);
    int expectedElement0 = -100;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = result.get(1);
    int expectedElement1 = -10;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = result.get(2);
    int expectedElement2 = -1;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify toSorted() uses numeric order not lexicographic order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_3300
     * @tc.name testInt16ArrayToSortedTestTwo033
     * @tc.desc Verify toSorted() uses numeric order not lexicographic order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo033() {
    Int16Array arr = Int16Array.of(100, 20, 3);
    Int16Array result = arr.toSorted();
    Integer elementAt0 = result.get(0);
    int expectedElement0 = 3;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = result.get(1);
    int expectedElement1 = 20;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = result.get(2);
    int expectedElement2 = 100;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify toSorted() returns the complete sequence with duplicate values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_3400
     * @tc.name testInt16ArrayToSortedTestTwo034
     * @tc.desc Verify toSorted() returns the complete sequence with duplicate values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo034() {
    Int16Array arr = Int16Array.of(5, 3, 5, 1, 5);
    Int16Array result = arr.toSorted();
    String actualString = String.valueOf(result);
    String expectedString = "1,3,5,5,5";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify symmetric opposite numbers sort correctly with toSorted()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_3500
     * @tc.name testInt16ArrayToSortedTestTwo035
     * @tc.desc Verify symmetric opposite numbers sort correctly with toSorted()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo035() {
    Int16Array arr = Int16Array.of(5, -5, 3, -3, 1, -1);
    Int16Array result = arr.toSorted();
    Integer elementAt0 = result.get(0);
    int expectedElement0 = -5;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = result.get(1);
    int expectedElement1 = -3;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = result.get(2);
    int expectedElement2 = -1;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = result.get(3);
    int expectedElement3 = 1;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = result.get(4);
    int expectedElement4 = 3;
    assertEqualInt(expectedElement4, elementAt4);
    Integer elementAt5 = result.get(5);
    int expectedElement5 = 5;
    assertEqualInt(expectedElement5, elementAt5);
    }

    /**
     * Verify length-1000 reverse array remains unchanged after toSorted()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_3600
     * @tc.name testInt16ArrayToSortedTestTwo036
     * @tc.desc Verify length-1000 reverse array remains unchanged after toSorted()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo036() {
    Int16Array arr = new Int16Array(1000);
    for (int i = 0; i < 1000; i++) {
    arr.set(i, 1000 - i);
    }
    Int16Array result = arr.toSorted();
    for (int i = 0; i < result.length(); i++) {
    Integer actualResultValue = result.get(i);
    int expectedResultValue = i + 1;
    assertEqualInt(expectedResultValue, actualResultValue);
    }
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 1000;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt999 = arr.get(999);
    int expectedElement999 = 1;
    assertEqualInt(expectedElement999, elementAt999);
    }

    /**
     * Verify original length is unchanged after toSorted()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_3700
     * @tc.name testInt16ArrayToSortedTestTwo037
     * @tc.desc Verify original length is unchanged after toSorted()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo037() {
    Int16Array arr = Int16Array.of(30, 10, 20);
    int lenBefore = arr.length();
    Int16Array result = arr.toSorted();
    String actualString = String.valueOf(result);
    String expectedString = "10,20,30";
    assertEqual(expectedString, actualString);
    int actualLength = arr.length();
    int expectedLength = lenBefore;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify toSorted() result supports $_set to modify elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_3800
     * @tc.name testInt16ArrayToSortedTestTwo038
     * @tc.desc Verify toSorted() result supports $_set to modify elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo038() {
    Int16Array arr = Int16Array.of(3, 1, 2);
    Int16Array result = arr.toSorted();
    result.set(1, 88);
    Integer elementAt1 = result.get(1);
    int expectedElement1 = 88;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify toSorted() result can reconstruct via Int16Array.from
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSORTED_TWO_3900
     * @tc.name testInt16ArrayToSortedTestTwo039
     * @tc.desc Verify toSorted() result can reconstruct via Int16Array.from
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToSortedTestTwo039() {
    Int16Array arr = Int16Array.of(3, 1, 2);
    Int16Array result = arr.toSorted();
    Int16Array copy = Int16Array.from(result);
    Integer elementAt0 = copy.get(0);
    int expectedElement0 = 1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = copy.get(1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = copy.get(2);
    int expectedElement2 = 3;
    assertEqualInt(expectedElement2, elementAt2);
    }
}
