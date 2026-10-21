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
import basetype.common.EntryResult;
import basetype.common.IteratorResult;
import basetype.common.RangeError;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayReverseTest02 —— Int16Array 方法族 XTS 测试。
 *
 * @since 2026-10-20
 */
public class Int16ArrayReverseTest02 extends BasTest {
    /**
     * Verify reverse() mixed truncated and normal values swap correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_0100
     * @tc.name testInt16ArrayReverseTestTwo001
     * @tc.desc Verify reverse() mixed truncated and normal values swap correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo001() {
    Int16Array arr = new Int16Array(new int[] {32768, 5, -32769, 8});
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 8;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 32767;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 5;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = -32768;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse() swaps 0x8000 and 0x7FFF pair
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_0200
     * @tc.name testInt16ArrayReverseTestTwo002
     * @tc.desc Verify reverse() swaps 0x8000 and 0x7FFF pair
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo002() {
    Int16Array arr = new Int16Array(new int[] {0x8000, 0x7fff});
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 32767;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = -32768;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify reverse().$_get(0) on empty array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_0300
     * @tc.name testInt16ArrayReverseTestTwo003
     * @tc.desc Verify reverse().$_get(0) on empty array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo003() {
    Int16Array arr = new Int16Array();
    try {
    arr.reverse().get(0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reverse().$_get(0) returns last original element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_0400
     * @tc.name testInt16ArrayReverseTestTwo004
     * @tc.desc Verify reverse().$_get(0) returns last original element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo004() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Integer actualValue = arr.reverse().get(0);
    int expectedValue = 30;
    assertEqualInt(expectedValue, actualValue);
    }

    /**
     * Verify fill(999).reverse() keeps filled values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_0500
     * @tc.name testInt16ArrayReverseTestTwo005
     * @tc.desc Verify fill(999).reverse() keeps filled values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo005() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.fill(999).reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 999;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 999;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse().sort() results in ascending order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_0600
     * @tc.name testInt16ArrayReverseTestTwo006
     * @tc.desc Verify reverse().sort() results in ascending order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo006() {
    Int16Array arr = Int16Array.of(30, 10, 50, 20);
    arr.reverse().sort();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 10;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 50;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse().copyWithin(0, 2) overwrites head from tail
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_0700
     * @tc.name testInt16ArrayReverseTestTwo007
     * @tc.desc Verify reverse().copyWithin(0, 2) overwrites head from tail
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo007() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    arr.reverse().copyWithin(0, 2);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 2;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 1;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify subarray(1, 3).reverse() only reverses sub-view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_0800
     * @tc.name testInt16ArrayReverseTestTwo008
     * @tc.desc Verify subarray(1, 3).reverse() only reverses sub-view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo008() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    arr.subarray(1, 3).reverse();
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 30;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 20;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 10;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify reverse().reverse().reverse() equals single reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_0900
     * @tc.name testInt16ArrayReverseTestTwo009
     * @tc.desc Verify reverse().reverse().reverse() equals single reverse
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo009() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.reverse().reverse().reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 5;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt4 = arr.get(4);
    int expectedElement4 = 1;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify Int16Array.from(arr.reverse()) copies reversed order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_1000
     * @tc.name testInt16ArrayReverseTestTwo010
     * @tc.desc Verify Int16Array.from(arr.reverse()) copies reversed order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo010() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    Int16Array copy = Int16Array.from(arr.reverse());
    Integer elementAt0 = copy.get(0);
    int expectedElement0 = 3;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt2 = copy.get(2);
    int expectedElement2 = 1;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse().$_set(0, 888) mutates original head
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_1100
     * @tc.name testInt16ArrayReverseTestTwo011
     * @tc.desc Verify reverse().$_set(0, 888) mutates original head
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo011() {
    Int16Array arr = Int16Array.of(5, 10, 15);
    arr.reverse().set(0, 888);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 888;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify fill(-1).reverse().fill(0, 0, 1) chained mutations
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_1200
     * @tc.name testInt16ArrayReverseTestTwo012
     * @tc.desc Verify fill(-1).reverse().fill(0, 0, 1) chained mutations
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo012() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.fill(-1).reverse().fill(0, 0, 1);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 0;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = -1;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() preserves length 1 after reversing single element [-1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_1300
     * @tc.name testInt16ArrayReverseTestTwo013
     * @tc.desc Verify reverse() preserves length 1 after reversing single element [-1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo013() {
    int val = -1;
    Int16Array arr = Int16Array.of(val);
    arr.reverse();
    int actualLength = arr.length();
    int expectedLength = 1;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify reverse() on empty Int16Array(0) keeps length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_1400
     * @tc.name testInt16ArrayReverseTestTwo014
     * @tc.desc Verify reverse() on empty Int16Array(0) keeps length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo014() {
    Int16Array arr = new Int16Array(0);
    arr.reverse();
    int actualLength = arr.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify reverse().$_get(0) on empty array throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_1500
     * @tc.name testInt16ArrayReverseTestTwo015
     * @tc.desc Verify reverse().$_get(0) on empty array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo015() {
    Int16Array arr = new Int16Array(0);
    arr.reverse();
    try {
    arr.get(0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reverse() keeps length 6 unchanged for Int16Array.of(1, 2, 3, 4, 5, 6)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_1600
     * @tc.name testInt16ArrayReverseTestTwo016
     * @tc.desc Verify reverse() keeps length 6 unchanged for Int16Array.of(1, 2, 3, 4, 5, 6)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo016() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5, 6);
    int lenBefore = arr.length();
    arr.reverse();
    int actualLength = arr.length();
    int expectedLength = lenBefore;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify reverse byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_1700
     * @tc.name testInt16ArrayReverseTestTwo017
     * @tc.desc Verify reverse byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo017() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int byteLenBefore = arr.byteLength();
    arr.reverse();
    int actualByteLength = arr.byteLength();
    int expectedByteLength = byteLenBefore;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify reverse BYTES_PER_ELEMENT 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_1800
     * @tc.name testInt16ArrayReverseTestTwo018
     * @tc.desc Verify reverse BYTES_PER_ELEMENT 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo018() {
    Int16Array arr = Int16Array.of(5, 15, 25);
    arr.reverse();
    int actualBytesPerElement = arr.BYTES_PER_ELEMENT;
    int expectedBytesPerElement = 2;
    assertEqual(expectedBytesPerElement, actualBytesPerElement);
    }

    /**
     * Verify reverse this === result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_1900
     * @tc.name testInt16ArrayReverseTestTwo019
     * @tc.desc Verify reverse this === result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo019() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    Int16Array result = arr.reverse();
    Int16Array actualResult = result;
    Int16Array expectedResult = arr;
    assertEqual(expectedResult, actualResult);
    }

    /**
     * Verify reverse() turns [-5, -4, -3, -2, -1] into [-1, -2, -3, -4, -5] via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_2000
     * @tc.name testInt16ArrayReverseTestTwo020
     * @tc.desc Verify reverse() turns [-5, -4, -3, -2, -1] into [-1, -2, -3, -4, -5] via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo020() {
    Int16Array arr = Int16Array.of(-5, -4, -3, -2, -1);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = -2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = -3;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = -4;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = arr.get(4);
    int expectedElement4 = -5;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify four reverse() calls restore [-10, 0, 10] from [-10, 0, 10] via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_2100
     * @tc.name testInt16ArrayReverseTestTwo021
     * @tc.desc Verify four reverse() calls restore [-10, 0, 10] from [-10, 0, 10] via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo021() {
    Int16Array arr = Int16Array.of(-10, 0, 10);
    arr.reverse().reverse().reverse().reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -10;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 0;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 10;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() $_get/$_get/iteration (assertEqual)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_2200
     * @tc.name testInt16ArrayReverseTestTwo022
     * @tc.desc Verify reverse() $_get/$_get/iteration (assertEqual)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo022() {
    Int16Array arr = Int16Array.of(100, 200, 300, 400, 500, 600);
    for (int i = 0; i < 5; i++) {
    arr.reverse();
    }
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 600;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt5 = arr.get(5);
    int expectedElement5 = 100;
    assertEqualInt(expectedElement5, elementAt5);
    }

    /**
     * Verify reverse() moves $_set(0, 99) value of [1, 2, 3, 4] to last index via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_2300
     * @tc.name testInt16ArrayReverseTestTwo023
     * @tc.desc Verify reverse() moves $_set(0, 99) value of [1, 2, 3, 4] to last index via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo023() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    arr.set(0, 99);
    arr.reverse();
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 99;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse().join(',') on [1, 2, 3] returns '3, 2, 1'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_2400
     * @tc.name testInt16ArrayReverseTestTwo024
     * @tc.desc Verify reverse().join(',') on [1, 2, 3] returns '3, 2, 1'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo024() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String s = arr.reverse().join(",");
    assertEqual("3,2,1", s);
    }

    /**
     * Verify reverse().fill(0) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_2500
     * @tc.name testInt16ArrayReverseTestTwo025
     * @tc.desc Verify reverse().fill(0) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo025() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    arr.reverse().fill(0);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 0;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 0;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 0;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 0;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse().slice() copies reversed [4, 3, 2, 1] from [1, 2, 3, 4] via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_2600
     * @tc.name testInt16ArrayReverseTestTwo026
     * @tc.desc Verify reverse().slice() copies reversed [4, 3, 2, 1] from [1, 2, 3, 4] via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo026() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    Int16Array sliced = arr.reverse().slice();
    Integer elementAt0 = sliced.get(0);
    int expectedElement0 = 4;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt3 = sliced.get(3);
    int expectedElement3 = 1;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt02 = arr.get(0);
    int expectedElement02 = 4;
    assertEqualInt(expectedElement02, elementAt02);
    }

    /**
     * Verify reverse().toString()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_2700
     * @tc.name testInt16ArrayReverseTestTwo027
     * @tc.desc Verify reverse().toString()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo027() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String s = arr.reverse().toString();
    assertEqual("30,20,10", s);
    }

    /**
     * Verify reverse().includes(x)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_2800
     * @tc.name testInt16ArrayReverseTestTwo028
     * @tc.desc Verify reverse().includes(x)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo028() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    boolean found = arr.reverse().includes(1);
    assertTrue(found);
    }

    /**
     * Verify reverse().indexOf(x)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_2900
     * @tc.name testInt16ArrayReverseTestTwo029
     * @tc.desc Verify reverse().indexOf(x)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo029() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    int idx = arr.reverse().indexOf(10);
    assertEqual(3, idx);
    }

    /**
     * Verify reverse().every(predicate)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_3000
     * @tc.name testInt16ArrayReverseTestTwo030
     * @tc.desc Verify reverse().every(predicate)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo030() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    boolean allPositive = arr.reverse().every((v) -> v > 0);
    assertTrue(allPositive);
    }

    /**
     * Verify sort() then reverse() on [5, 2, 8, 1, 9] yields [9, 8, 5, 2, 1] via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_3100
     * @tc.name testInt16ArrayReverseTestTwo031
     * @tc.desc Verify sort() then reverse() on [5, 2, 8, 1, 9] yields [9, 8, 5, 2, 1] via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo031() {
    Int16Array arr = Int16Array.of(5, 2, 8, 1, 9);
    arr.sort();
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 9;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 8;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 5;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 2;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = arr.get(4);
    int expectedElement4 = 1;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify fill(0, 0, 2) then reverse() yields [5, 4, 3, 0, 0] via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_3200
     * @tc.name testInt16ArrayReverseTestTwo032
     * @tc.desc Verify fill(0, 0, 2) then reverse() yields [5, 4, 3, 0, 0] via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo032() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(0, 0, 2);
    arr.reverse();
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 0;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = arr.get(4);
    int expectedElement4 = 0;
    assertEqualInt(expectedElement4, elementAt4);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 5;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 4;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 3;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify copyWithin(2, 0, 2) then reverse() on [10, 20, 30, 40, 50] yields [50, 20, 10, 20, 10] via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_3300
     * @tc.name testInt16ArrayReverseTestTwo033
     * @tc.desc Verify copyWithin(2, 0, 2) then reverse() on [10, 20, 30, 40, 50] yields [50, 20, 10, 20, 10] via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo033() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    arr.copyWithin(2, 0, 2);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 50;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 20;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 10;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 20;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = arr.get(4);
    int expectedElement4 = 10;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify reverse() after set([99, 88], 1) on [1, 2, 3, 4] yields [4, 88, 99, 1] via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_3400
     * @tc.name testInt16ArrayReverseTestTwo034
     * @tc.desc Verify reverse() after set([99, 88], 1) on [1, 2, 3, 4] yields [4, 88, 99, 1] via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo034() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    Int16Array src = Int16Array.of(99, 88);
    arr.set(src, 1);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 4;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 88;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 99;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 1;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse() yields [3, 2, 1, -32768] with int16.MIN
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_3500
     * @tc.name testInt16ArrayReverseTestTwo035
     * @tc.desc Verify reverse() yields [3, 2, 1, -32768] with int16.MIN
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo035() {
    Int16Array arr = Int16Array.of(-32768, 1, 2, 3);
    arr.reverse();
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = -32768;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 3;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 1;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() yields [-3, -2, -1, 32767] with int16.MAX
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_3600
     * @tc.name testInt16ArrayReverseTestTwo036
     * @tc.desc Verify reverse() yields [-3, -2, -1, 32767] with int16.MAX
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo036() {
    Int16Array arr = Int16Array.of(32767, -1, -2, -3);
    arr.reverse();
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 32767;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -3;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = -2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = -1;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() yields [200, -32768, 100] for [100, -32768, 200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_3700
     * @tc.name testInt16ArrayReverseTestTwo037
     * @tc.desc Verify reverse() yields [200, -32768, 100] for [100, -32768, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo037() {
    Int16Array arr = Int16Array.of(100, -32768, 200);
    arr.reverse();
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = -32768;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 200;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 100;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() yields [-200, 32767, -100] for [-100, 32767, -200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_3800
     * @tc.name testInt16ArrayReverseTestTwo038
     * @tc.desc Verify reverse() yields [-200, 32767, -100] for [-100, 32767, -200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo038() {
    Int16Array arr = Int16Array.of(-100, 32767, -200);
    arr.reverse();
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 32767;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -200;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = -100;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() yields [32767, 0, 0, -32768]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_3900
     * @tc.name testInt16ArrayReverseTestTwo039
     * @tc.desc Verify reverse() yields [32767, 0, 0, -32768]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo039() {
    Int16Array arr = Int16Array.of(-32768, 0, 0, 32767);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 32767;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = -32768;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 0;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 0;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify $_set(-32769) then reverse() yields [4, 3, 2, 32767]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_4000
     * @tc.name testInt16ArrayReverseTestTwo040
     * @tc.desc Verify $_set(-32769) then reverse() yields [4, 3, 2, 32767]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo040() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    arr.set(0, -32769);
    arr.reverse();
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 32767;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 4;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 3;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 2;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify $_set(32768) then reverse() yields [-32768, 3, 2, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_4100
     * @tc.name testInt16ArrayReverseTestTwo041
     * @tc.desc Verify $_set(32768) then reverse() yields [-32768, 3, 2, 1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo041() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    arr.set(3, 32768);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 3;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 2;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 1;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify -3.7 -3 reverse -3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_4200
     * @tc.name testInt16ArrayReverseTestTwo042
     * @tc.desc Verify -3.7 -3 reverse -3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo042() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    arr.set(0, -3.7);
    arr.reverse();
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = -3;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify Int16Array reverse $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_4300
     * @tc.name testInt16ArrayReverseTestTwo043
     * @tc.desc Verify Int16Array reverse $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo043() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int16Array parent = new Int16Array(buf);
    parent.set(0, 10);
    parent.set(1, 20);
    parent.set(2, 30);
    parent.set(3, 40);
    parent.set(4, 50);
    parent.set(5, 60);
    Int16Array child = parent.subarray(1, 4);
    parent.reverse();
    Integer elementAt0 = child.get(0);
    int expectedElement0 = 50;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = child.get(1);
    int expectedElement1 = 40;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = child.get(2);
    int expectedElement2 = 30;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify child.reverse() then parent.reverse() on [10, 20, 30, 40] yields [40, 20, 30, 10] via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_4400
     * @tc.name testInt16ArrayReverseTestTwo044
     * @tc.desc Verify child.reverse() then parent.reverse() on [10, 20, 30, 40] yields [40, 20, 30, 10] via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo044() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array parent = new Int16Array(buf);
    parent.set(0, 10);
    parent.set(1, 20);
    parent.set(2, 30);
    parent.set(3, 40);
    Int16Array child = parent.subarray(1, 3);
    child.reverse();
    parent.reverse();
    Integer elementAt0 = parent.get(0);
    int expectedElement0 = 40;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = parent.get(1);
    int expectedElement1 = 20;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = parent.get(2);
    int expectedElement2 = 30;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = parent.get(3);
    int expectedElement3 = 10;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify parent reverse() keeps subarray(1, 3) length unchanged via assertEqual
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_4500
     * @tc.name testInt16ArrayReverseTestTwo045
     * @tc.desc Verify parent reverse() keeps subarray(1, 3) length unchanged via assertEqual
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo045() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array parent = new Int16Array(buf);
    parent.set(0, 1);
    parent.set(1, 2);
    parent.set(2, 3);
    parent.set(3, 4);
    parent.set(4, 5);
    Int16Array child = parent.subarray(1, 3);
    int childLenBefore = child.length();
    parent.reverse();
    int actualLength = child.length();
    int expectedLength = childLenBefore;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify ArrayBuffer 2 reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_4600
     * @tc.name testInt16ArrayReverseTestTwo046
     * @tc.desc Verify ArrayBuffer 2 reverse
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo046() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array view = new Int16Array(buf, 2, 3);
    view.set(0, 1);
    view.set(1, 2);
    view.set(2, 3);
    view.reverse();
    Integer elementAt0 = view.get(0);
    int expectedElement0 = 3;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = view.get(1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = view.get(2);
    int expectedElement2 = 1;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() on [10, 20, 30] visible through new Int16Array(buf) view via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_4700
     * @tc.name testInt16ArrayReverseTestTwo047
     * @tc.desc Verify reverse() on [10, 20, 30] visible through new Int16Array(buf) view via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo047() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array parent = new Int16Array(buf);
    parent.set(0, 10);
    parent.set(1, 20);
    parent.set(2, 30);
    parent.reverse();
    Int16Array fullView = new Int16Array(buf);
    Integer elementAt0 = fullView.get(0);
    int expectedElement0 = 30;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = fullView.get(1);
    int expectedElement1 = 20;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = fullView.get(2);
    int expectedElement2 = 10;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify begin === end reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_4800
     * @tc.name testInt16ArrayReverseTestTwo048
     * @tc.desc Verify begin === end reverse
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo048() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array parent = new Int16Array(buf);
    parent.set(0, 1);
    parent.set(1, 2);
    parent.set(2, 3);
    Int16Array child = parent.subarray(1, 1);
    child.reverse();
    Integer elementAt0 = parent.get(0);
    int expectedElement0 = 1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = parent.get(1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = parent.get(2);
    int expectedElement2 = 3;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify $_set(0, 777) on reverse() returned alias updates array index 0 via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_4900
     * @tc.name testInt16ArrayReverseTestTwo049
     * @tc.desc Verify $_set(0, 777) on reverse() returned alias updates array index 0 via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo049() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    Int16Array returned = arr.reverse();
    assertEqual(arr, returned);
    returned.set(0, 777);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 777;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 1;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() $_get/iteration (assertEqual)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_5000
     * @tc.name testInt16ArrayReverseTestTwo050
     * @tc.desc Verify reverse() $_get/iteration (assertEqual)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo050() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    arr.reverse();
    List<Integer> result = new ArrayList<>();
    for (int i = 0; i < arr.length(); i++) {
    result.add(arr.get(i));
    }
    int actualIndexed = result.get(0);
    int expectedIndexed = 4;
    assertEqual(expectedIndexed, actualIndexed);
    int resultAt1 = result.get(1);
    int expectedResultAt1 = 3;
    assertEqual(expectedResultAt1, resultAt1);
    int resultAt2 = result.get(2);
    int expectedResultAt2 = 2;
    assertEqual(expectedResultAt2, resultAt2);
    int resultAt3 = result.get(3);
    int expectedResultAt3 = 1;
    assertEqual(expectedResultAt3, resultAt3);
    }

    /**
     * Verify reverse() forEach (assertEqual)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_5100
     * @tc.name testInt16ArrayReverseTestTwo051
     * @tc.desc Verify reverse() forEach (assertEqual)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo051() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.reverse();
    List<Integer> collected = new ArrayList<>();
    arr.forEach((v) -> {
    collected.add(v);
    });
    int actualIndexed = collected.get(0);
    int expectedIndexed = 30;
    assertEqual(expectedIndexed, actualIndexed);
    int collectedAt1 = collected.get(1);
    int expectedCollectedAt1 = 20;
    assertEqual(expectedCollectedAt1, collectedAt1);
    int collectedAt2 = collected.get(2);
    int expectedCollectedAt2 = 10;
    assertEqual(expectedCollectedAt2, collectedAt2);
    }

    /**
     * Verify reverse() entries/next (assertEqual)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_5200
     * @tc.name testInt16ArrayReverseTestTwo052
     * @tc.desc Verify reverse() entries/next (assertEqual)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo052() {
    Int16Array arr = Int16Array.of(100, 200, 300);
    arr.reverse();
    Int16Array.EntriesIterator iter = arr.entries();
    EntryResult first = iter.next();
    int actualValue = first.value[0];
    int expectedValue = 0;
    assertEqual(expectedValue, actualValue);
    int actualValue2 = first.value[1];
    int expectedValue2 = 300;
    assertEqual(expectedValue2, actualValue2);
    }

    /**
     * Verify reverse() values/next (assertEqual)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_5300
     * @tc.name testInt16ArrayReverseTestTwo053
     * @tc.desc Verify reverse() values/next (assertEqual)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo053() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.reverse();
    Int16Array.KeyIterator iter = arr.values();
    IteratorResult first = iter.next();
    int actualValue = first.value;
    int expectedValue = 3;
    assertEqual(expectedValue, actualValue);
    }

    /**
     * Verify reverse keys 0 length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_5400
     * @tc.name testInt16ArrayReverseTestTwo054
     * @tc.desc Verify reverse keys 0 length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo054() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.reverse();
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult first = iter.next();
    int actualValue = first.value;
    int expectedValue = 0;
    assertEqual(expectedValue, actualValue);
    }

    /**
     * Verify reverse() preserves palindrome [5, 5, 3, 5, 5] unchanged via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_5500
     * @tc.name testInt16ArrayReverseTestTwo055
     * @tc.desc Verify reverse() preserves palindrome [5, 5, 3, 5, 5] unchanged via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo055() {
    Int16Array arr = Int16Array.of(5, 5, 3, 5, 5);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 5;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 5;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 3;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 5;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = arr.get(4);
    int expectedElement4 = 5;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify reverse() keeps all-zero [0, 0, 0, 0] elements unchanged via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_5600
     * @tc.name testInt16ArrayReverseTestTwo056
     * @tc.desc Verify reverse() keeps all-zero [0, 0, 0, 0] elements unchanged via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo056() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 0;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 0;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 0;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 0;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse() on [1, -1, 2, -2] yields [-2, 2, -1, 1] via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_5700
     * @tc.name testInt16ArrayReverseTestTwo057
     * @tc.desc Verify reverse() on [1, -1, 2, -2] yields [-2, 2, -1, 1] via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo057() {
    Int16Array arr = Int16Array.of(1, -1, 2, -2);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -2;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = -1;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 1;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse() on identical pair [7, 7] leaves values unchanged via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_5800
     * @tc.name testInt16ArrayReverseTestTwo058
     * @tc.desc Verify reverse() on identical pair [7, 7] leaves values unchanged via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo058() {
    Int16Array arr = Int16Array.of(7, 7);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 7;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 7;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify reverse buffer byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_5900
     * @tc.name testInt16ArrayReverseTestTwo059
     * @tc.desc Verify reverse buffer byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo059() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array arr = new Int16Array(buf, 2, 4);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.set(3, 4);
    int offsetBefore = arr.byteOffset();
    arr.reverse();
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = offsetBefore;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify reverse() on Int16Array.from([10, 20, 30, 40, 50]) yields [50, ..., 10] via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_TWO_6000
     * @tc.name testInt16ArrayReverseTestTwo060
     * @tc.desc Verify reverse() on Int16Array.from([10, 20, 30, 40, 50]) yields [50, ..., 10] via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestTwo060() {
    List<Integer> source = java.util.Arrays.asList(10, 20, 30, 40, 50);
    Int16Array arr = Int16Array.from(source);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 50;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt4 = arr.get(4);
    int expectedElement4 = 10;
    assertEqualInt(expectedElement4, elementAt4);
    }
}
