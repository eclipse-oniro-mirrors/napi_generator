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
import basetype.common.RangeError;
import basetype.common.TypeError;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayFilterTest01 —— Int16Array 方法族 XTS 测试。
 *
 * @since 2026-10-20
 */
public class Int16ArrayFilterTest01 extends BasTest {
    /**
     * Verify filter with one callback returns an independent Int16Array with expected values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_0100
     * @tc.name testInt16ArrayFilterTestOne001
     * @tc.desc Verify filter with one callback returns an independent Int16Array with expected values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne001() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    Int16Array result = arr.filter((val, index, array) -> {
        return val > 0;
        });
    int resultLength = result.length();
    int expectedResultLength = 3;
    assertEqual(expectedResultLength, resultLength);
    Integer resultElement0 = result.get(0);
    int expectedResultElement0 = 1;
    assertEqualInt(expectedResultElement0, resultElement0);
    Integer resultElement1 = result.get(1);
    int expectedResultElement1 = 2;
    assertEqualInt(expectedResultElement1, resultElement1);
    Integer resultElement2 = result.get(2);
    int expectedResultElement2 = 3;
    assertEqualInt(expectedResultElement2, resultElement2);
    assertNotEqual(arr.buffer(), result.buffer());
    }

    /**
     * Verify filter arrow using all three params keeps values above first
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_0200
     * @tc.name testInt16ArrayFilterTestOne002
     * @tc.desc Verify filter arrow using all three params keeps values above first
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne002() {
    Int16Array arr = Int16Array.of(5, 10, 15);
    Int16Array result = arr.filter((val, index, array) -> {
        return val > array.get(0);
        });
    int resultLength = result.length();
    int expectedResultLength = 2;
    assertEqual(expectedResultLength, resultLength);
    }

    /**
     * Verify filter always-true returns all elements including MIN/MAX
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_0300
     * @tc.name testInt16ArrayFilterTestOne003
     * @tc.desc Verify filter always-true returns all elements including MIN/MAX
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne003() {
    Int16Array arr = Int16Array.of(-32768, -1, 0, 1, 32767);
    Int16Array result = arr.filter((val, index, array) -> {
        return true;
        });
    int resultLength = result.length();
    int expectedResultLength = 5;
    assertEqual(expectedResultLength, resultLength);
    Integer resultElement0 = result.get(0);
    int expectedResultElement0 = -32768;
    assertEqualInt(expectedResultElement0, resultElement0);
    Integer resultElement4 = result.get(4);
    int expectedResultElement4 = 32767;
    assertEqualInt(expectedResultElement4, resultElement4);
    }

    /**
     * Verify filter keeps only positive elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_0400
     * @tc.name testInt16ArrayFilterTestOne004
     * @tc.desc Verify filter keeps only positive elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne004() {
    Int16Array arr = Int16Array.of(-3, -1, 0, 2, 5);
    Int16Array result = arr.filter((val, index, array) -> {
        return val > 0;
        });
    int resultLength = result.length();
    int expectedResultLength = 2;
    assertEqual(expectedResultLength, resultLength);
    Integer resultElement0 = result.get(0);
    int expectedResultElement0 = 2;
    assertEqualInt(expectedResultElement0, resultElement0);
    Integer resultElement1 = result.get(1);
    int expectedResultElement1 = 5;
    assertEqualInt(expectedResultElement1, resultElement1);
    }

    /**
     * Verify filter keeps only negative elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_0500
     * @tc.name testInt16ArrayFilterTestOne005
     * @tc.desc Verify filter keeps only negative elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne005() {
    Int16Array arr = Int16Array.of(-5, -1, 0, 1, 5);
    Int16Array result = arr.filter((val, index, array) -> {
        return val < 0;
        });
    int resultLength = result.length();
    int expectedResultLength = 2;
    assertEqual(expectedResultLength, resultLength);
    Integer resultElement0 = result.get(0);
    int expectedResultElement0 = -5;
    assertEqualInt(expectedResultElement0, resultElement0);
    Integer resultElement1 = result.get(1);
    int expectedResultElement1 = -1;
    assertEqualInt(expectedResultElement1, resultElement1);
    }

    /**
     * Verify filter callback val receives int16 MIN -32768 from single-element Int16Array.of source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_0600
     * @tc.name testInt16ArrayFilterTestOne006
     * @tc.desc Verify filter callback val receives int16 MIN -32768 from single-element Int16Array.of source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne006() {
    int inputValue = -32768;
    Int16Array arr = Int16Array.of(inputValue);
    int[] receivedVal = {0};
    arr.filter((val, index, array) -> {
    receivedVal[0] = val;
    return true;
    });
    assertEqual(-32768, receivedVal[0]);
    }

    /**
     * Verify filter callback vals are all negative for negative source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_0800
     * @tc.name testInt16ArrayFilterTestOne008
     * @tc.desc Verify filter callback vals are all negative for negative source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne008() {
    Int16Array arr = Int16Array.of(-100, -50, -1);
    boolean[] allNegative = {true};
    arr.filter((val, index, array) -> {
    if (val >= 0) {
    allNegative[0] = false;
    }
    return true;
    });
    assertTrue(allNegative[0]);
    }

    /**
     * Verify filter callback val is truncated overflow 32768 to -32768
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_0900
     * @tc.name testInt16ArrayFilterTestOne009
     * @tc.desc Verify filter callback val is truncated overflow 32768 to -32768
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne009() {
    Int16Array arr = new Int16Array(1);
    arr.set(0, 32768);
    int[] receivedVal = {0};
    arr.filter((val, index, array) -> {
    receivedVal[0] = val;
    return true;
    });
    assertEqual(-32768, receivedVal[0]);
    }

    /**
     * Verify filter first index 0 and last index length-1 on five elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_1000
     * @tc.name testInt16ArrayFilterTestOne010
     * @tc.desc Verify filter first index 0 and last index length-1 on five elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne010() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    int[] firstIdx = {-1};
    int[] lastIdx = {-1};
    arr.filter((val, index, array) -> {
    if (firstIdx[0] == -1) {
    firstIdx[0] = index;
    }
    lastIdx[0] = index;
    return true;
    });
    assertEqual(0, firstIdx[0]);
    assertEqual(4, lastIdx[0]);
    }

    /**
     * Verify filter callback array.length equals source length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_1200
     * @tc.name testInt16ArrayFilterTestOne012
     * @tc.desc Verify filter callback array.length equals source length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne012() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    boolean[] arrayLenMatches = {true};
    arr.filter((val, index, array) -> {
    if (array.length() != 4) {
    arrayLenMatches[0] = false;
    }
    return true;
    });
    assertTrue(arrayLenMatches[0]);
    }

    /**
     * Verify filter callback array.$_get(0) matches source first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_1300
     * @tc.name testInt16ArrayFilterTestOne013
     * @tc.desc Verify filter callback array.$_get(0) matches source first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne013() {
    Int16Array arr = Int16Array.of(77, 88, 99);
    boolean[] firstElemMatch = {false};
    arr.filter((val, index, array) -> {
    if (array.get(0) == 77 && array.get(0) == arr.get(0)) {
    firstElemMatch[0] = true;
    }
    return true;
    });
    assertTrue(firstElemMatch[0]);
    }

    /**
     * Verify filter callback array BYTES_PER_ELEMENT equals source value 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_1400
     * @tc.name testInt16ArrayFilterTestOne014
     * @tc.desc Verify filter callback array BYTES_PER_ELEMENT equals source value 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne014() {
    int inputValue = 1;
    Int16Array arr = Int16Array.of(inputValue);
    int[] bytesPerElement = {0};
    arr.filter((val, index, array) -> {
    bytesPerElement[0] = array.BYTES_PER_ELEMENT;
    return true;
    });
    int expectedBytesPerElement = 2;
    assertEqual(expectedBytesPerElement, bytesPerElement[0]);
    }

    /**
     * Verify filter callback values on new Int16Array array-like source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_1500
     * @tc.name testInt16ArrayFilterTestOne015
     * @tc.desc Verify filter callback values on new Int16Array array-like source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne015() {
    Int16Array arr = new Int16Array(new int[] {-1, 0, 1});
    List<Integer> vals = new ArrayList<>();
    arr.filter((val, index, array) -> {
    vals.add(val);
    return true;
    });
    int valsElement0 = vals.get(0);
    int expectedValsElement0 = -1;
    assertEqual(expectedValsElement0, valsElement0);
    int valsElement1 = vals.get(1);
    int expectedValsElement1 = 0;
    assertEqual(expectedValsElement1, valsElement1);
    int valsElement2 = vals.get(2);
    int expectedValsElement2 = 1;
    assertEqual(expectedValsElement2, valsElement2);
    }

    /**
     * Verify filter callback values on Int16Array.from constructed source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_1600
     * @tc.name testInt16ArrayFilterTestOne016
     * @tc.desc Verify filter callback values on Int16Array.from constructed source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne016() {
    Int16Array arr = Int16Array.from(new int[] {50, -50, 0});
    List<Integer> vals = new ArrayList<>();
    arr.filter((val, index, array) -> {
    vals.add(val);
    return true;
    });
    int valsElement0 = vals.get(0);
    int expectedValsElement0 = 50;
    assertEqual(expectedValsElement0, valsElement0);
    int valsElement1 = vals.get(1);
    int expectedValsElement1 = -50;
    assertEqual(expectedValsElement1, valsElement1);
    int valsElement2 = vals.get(2);
    int expectedValsElement2 = 0;
    assertEqual(expectedValsElement2, valsElement2);
    }

    /**
     * Verify filter callback values on Int16Array from ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_1700
     * @tc.name testInt16ArrayFilterTestOne017
     * @tc.desc Verify filter callback values on Int16Array from ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne017() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array view = new Int16Array(buf);
    view.set(0, 7);
    view.set(1, 14);
    view.set(2, 21);
    List<Integer> vals = new ArrayList<>();
    view.filter((val, index, array) -> {
    vals.add(val);
    return true;
    });
    int valsElement0 = vals.get(0);
    int expectedValsElement0 = 7;
    assertEqual(expectedValsElement0, valsElement0);
    int valsElement1 = vals.get(1);
    int expectedValsElement1 = 14;
    assertEqual(expectedValsElement1, valsElement1);
    int valsElement2 = vals.get(2);
    int expectedValsElement2 = 21;
    assertEqual(expectedValsElement2, valsElement2);
    }

    /**
     * Verify filter uses updated closure variable after modification
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_1800
     * @tc.name testInt16ArrayFilterTestOne018
     * @tc.desc Verify filter uses updated closure variable after modification
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne018() {
    int[] limit = {0};
    Int16Array arr = Int16Array.of(-5, 0, 5, 10);
    limit[0] = 3;
    Int16Array result = arr.filter((val, index, array) -> {
        return val > limit[0];
        });
    int resultLength = result.length();
    int expectedResultLength = 2;
    assertEqual(expectedResultLength, resultLength);
    Integer resultElement0 = result.get(0);
    int expectedResultElement0 = 5;
    assertEqualInt(expectedResultElement0, resultElement0);
    Integer resultElement1 = result.get(1);
    int expectedResultElement1 = 10;
    assertEqualInt(expectedResultElement1, resultElement1);
    }

    /**
     * Verify filter callback sets external boolean flag
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_2000
     * @tc.name testInt16ArrayFilterTestOne020
     * @tc.desc Verify filter callback sets external boolean flag
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne020() {
    boolean[] wasCalled = {false};
    int inputValue = 7;
    Int16Array arr = Int16Array.of(inputValue);
    arr.filter((val, index, array) -> {
    wasCalled[0] = true;
    return true;
    });
    assertTrue(wasCalled[0]);
    }

    /**
     * Verify filter callback throw propagates to caller
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_2200
     * @tc.name testInt16ArrayFilterTestOne022
     * @tc.desc Verify filter callback throw propagates to caller
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne022() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    try {
    arr.filter((val, index, array) -> {
    throw new TypeError("callback error");
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter callback throw on first element propagates immediately
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_2300
     * @tc.name testInt16ArrayFilterTestOne023
     * @tc.desc Verify filter callback throw on first element propagates immediately
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne023() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int[] callCount = {0};
    try {
    arr.filter((val, index, array) -> {
    callCount[0] = callCount[0] + 1;
    if (index == 0) {
    throw new TypeError("error at first");
    }
    return true;
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    assertEqual(1, callCount[0]);
    }

    /**
     * Verify filter callback throw on middle element propagates
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_2400
     * @tc.name testInt16ArrayFilterTestOne024
     * @tc.desc Verify filter callback throw on middle element propagates
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne024() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    try {
    arr.filter((val, index, array) -> {
    if (index == 2) {
    throw new TypeError("error at middle");
    }
    return true;
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter callback throw on last element propagates
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_2500
     * @tc.name testInt16ArrayFilterTestOne025
     * @tc.desc Verify filter callback throw on last element propagates
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne025() {
    Int16Array arr = Int16Array.of(100, 200);
    try {
    arr.filter((val, index, array) -> {
    if (index == 1) {
    throw new TypeError("error at last");
    }
    return true;
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter throw aborts and does not return partial result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_2600
     * @tc.name testInt16ArrayFilterTestOne026
     * @tc.desc Verify filter throw aborts and does not return partial result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne026() {
    Int16Array arr = Int16Array.of(5, 10, 15);
    Int16Array result = null;
    try {
    result = arr.filter((val, index, array) -> {
    if (index == 1) {
    throw new TypeError("abort");
    }
    return true;
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    assertNull(result);
    }

    /**
     * Verify filter callback array.$_set mutates source for later callbacks
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_2700
     * @tc.name testInt16ArrayFilterTestOne027
     * @tc.desc Verify filter callback array.$_set mutates source for later callbacks
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne027() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    int[] secondValSeen = {0};
    arr.filter((val, index, array) -> {
    if (index == 0) {
    array.set(0, 99);
    }
    if (index == 1) {
    secondValSeen[0] = array.get(0);
    }
    return true;
    });
    assertEqual(99, secondValSeen[0]);
    }

    /**
     * Verify filter callback array.$_set next element visible later
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_2800
     * @tc.name testInt16ArrayFilterTestOne028
     * @tc.desc Verify filter callback array.$_set next element visible later
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne028() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int[] modifiedValSeen = {0};
    arr.filter((val, index, array) -> {
    if (index == 1) {
    array.set(2, 0);
    }
    if (index == 2) {
    modifiedValSeen[0] = val;
    }
    return true;
    });
    assertEqual(0, modifiedValSeen[0]);
    }

    /**
     * Verify filter current val unaffected after array.$_set on same index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_2900
     * @tc.name testInt16ArrayFilterTestOne029
     * @tc.desc Verify filter current val unaffected after array.$_set on same index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne029() {
    Int16Array arr = Int16Array.of(5, 10, 15);
    List<Integer> originalVals = new ArrayList<>();
    arr.filter((val, index, array) -> {
    originalVals.add(val);
    array.set(index, 0);
    return true;
    });
    int originalValsElement0 = originalVals.get(0);
    int expectedOriginalValsElement0 = 5;
    assertEqual(expectedOriginalValsElement0, originalValsElement0);
    int originalValsElement1 = originalVals.get(1);
    int expectedOriginalValsElement1 = 10;
    assertEqual(expectedOriginalValsElement1, originalValsElement1);
    int originalValsElement2 = originalVals.get(2);
    int expectedOriginalValsElement2 = 15;
    assertEqual(expectedOriginalValsElement2, originalValsElement2);
    }

    /**
     * Verify filter on empty Int16Array never invokes callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_3000
     * @tc.name testInt16ArrayFilterTestOne030
     * @tc.desc Verify filter on empty Int16Array never invokes callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne030() {
    Int16Array arr = new Int16Array(0);
    boolean[] called = {false};
    Int16Array result = arr.filter((val, index, array) -> {
        called[0] = true;
        return true;
    });
    assertFalse(called[0]);
    int resultLength = result.length();
    int expectedResultLength = 0;
    assertEqual(expectedResultLength, resultLength);
    }

    /**
     * Verify filter on empty Int16Array returns empty non-null result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_3100
     * @tc.name testInt16ArrayFilterTestOne031
     * @tc.desc Verify filter on empty Int16Array returns empty non-null result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne031() {
    Int16Array arr = new Int16Array(0);
    Int16Array result = arr.filter((val, index, array) -> {
        return true;
        });
    int resultLength = result.length();
    int expectedResultLength = 0;
    assertEqual(expectedResultLength, resultLength);
    }

    /**
     * Verify filter keeps single matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_3200
     * @tc.name testInt16ArrayFilterTestOne032
     * @tc.desc Verify filter keeps single matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne032() {
    int inputValue = 42;
    Int16Array arr = Int16Array.of(inputValue);
    Int16Array result = arr.filter((val, index, array) -> {
        return val == 42;
        });
    int resultLength = result.length();
    int expectedResultLength = 1;
    assertEqual(expectedResultLength, resultLength);
    Integer resultElement0 = result.get(0);
    int expectedResultElement0 = 42;
    assertEqualInt(expectedResultElement0, resultElement0);
    }

    /**
     * Verify filter returns empty for non-matching single element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_3300
     * @tc.name testInt16ArrayFilterTestOne033
     * @tc.desc Verify filter returns empty for non-matching single element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne033() {
    int inputValue = 99;
    Int16Array arr = Int16Array.of(inputValue);
    Int16Array result = arr.filter((val, index, array) -> {
        return val < 0;
        });
    int resultLength = result.length();
    int expectedResultLength = 0;
    assertEqual(expectedResultLength, resultLength);
    }

    /**
     * Verify filter even values on length-500 Int16Array returns 250
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_3500
     * @tc.name testInt16ArrayFilterTestOne035
     * @tc.desc Verify filter even values on length-500 Int16Array returns 250
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne035() {
    int len = 500;
    Int16Array arr = new Int16Array(len);
    for (int i = 0; i < len; i = i + 1) {
    arr.set(i, i);
    }
    Int16Array result = arr.filter((val, index, array) -> {
        return val % 2 == 0;
        });
    int resultLength = result.length();
    int expectedResultLength = 250;
    assertEqual(expectedResultLength, resultLength);
    }

    /**
     * Verify filter keeps -1 elements when predicate is val===-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_3600
     * @tc.name testInt16ArrayFilterTestOne036
     * @tc.desc Verify filter keeps -1 elements when predicate is val===-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne036() {
    Int16Array arr = Int16Array.of(-1, 0, 1, -1);
    Int16Array result = arr.filter((val, index, array) -> {
        return val == -1;
        });
    int resultLength = result.length();
    int expectedResultLength = 2;
    assertEqual(expectedResultLength, resultLength);
    }

    /**
     * Verify filter keeps non-negative values including 0 and MAX
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_3700
     * @tc.name testInt16ArrayFilterTestOne037
     * @tc.desc Verify filter keeps non-negative values including 0 and MAX
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne037() {
    Int16Array arr = Int16Array.of(-32768, -1, 0, 1, 32767);
    Int16Array result = arr.filter((val, index, array) -> {
        return val >= 0;
        });
    int resultLength = result.length();
    int expectedResultLength = 3;
    assertEqual(expectedResultLength, resultLength);
    Integer resultElement0 = result.get(0);
    int expectedResultElement0 = 0;
    assertEqualInt(expectedResultElement0, resultElement0);
    Integer resultElement1 = result.get(1);
    int expectedResultElement1 = 1;
    assertEqualInt(expectedResultElement1, resultElement1);
    Integer resultElement2 = result.get(2);
    int expectedResultElement2 = 32767;
    assertEqualInt(expectedResultElement2, resultElement2);
    }

    /**
     * Verify filter keeps values within closed range [-100, 100]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_3800
     * @tc.name testInt16ArrayFilterTestOne038
     * @tc.desc Verify filter keeps values within closed range [-100, 100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne038() {
    Int16Array arr = Int16Array.of(-200, -100, -1, 0, 1, 100, 200);
    Int16Array result = arr.filter((val, index, array) -> {
        return val >= -100 && val <= 100;
        });
    int resultLength = result.length();
    int expectedResultLength = 5;
    assertEqual(expectedResultLength, resultLength);
    }

    /**
     * Verify filter() result element at index 0 equals 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_3900
     * @tc.name testInt16ArrayFilterTestOne039
     * @tc.desc Verify filter() result element at index 0 equals 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne039() {
    Int16Array arr = new Int16Array(new int[] {5, 10, 15, 20});
    Int16Array result = arr.filter((value, index, array) -> {
        return value >= 10;
        });
    Integer actualFirst = result.get(0);
    int expectedFirst = 10;
    assertEqualInt(expectedFirst, actualFirst);
    }

    /**
     * Verify filter() with constant false callback yields empty result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_4000
     * @tc.name testInt16ArrayFilterTestOne040
     * @tc.desc Verify filter() with constant false callback yields empty result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne040() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    Int16Array result = arr.filter((value, index, array) -> {
        return false;
        });
    int actualLength = result.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify filter(true) result.$_get(lastIdx) equals original.$_get(lastIdx)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_4100
     * @tc.name testInt16ArrayFilterTestOne041
     * @tc.desc Verify filter(true) result.$_get(lastIdx) equals original.$_get(lastIdx)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne041() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int[] lastIdx = {arr.length() - 1};
    Int16Array result = arr.filter((value, index, array) -> {
        return true;
        });
    Integer actualFirst = result.get(lastIdx[0]);
    int expectedFirst = 30;
    assertEqualInt(expectedFirst, actualFirst);
    }

    /**
     * Verify filter(true) result equals original values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_4200
     * @tc.name testInt16ArrayFilterTestOne042
     * @tc.desc Verify filter(true) result equals original values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne042() {
    Int16Array arr = new Int16Array(new int[] {5, 15, 25, 35});
    Int16Array result = arr.filter((value, index, array) -> {
        return true;
        });
    boolean allMatch = true;
    for (int i = 0; i < result.length(); i++) {
    if (result.get(i) != arr.get(i)) {
    allMatch = false;
    break;
    }
    }
    assertTrue(allMatch);
    }

    /**
     * Verify filter() via $_get iteration keeps only positive values from mixed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_4300
     * @tc.name testInt16ArrayFilterTestOne043
     * @tc.desc Verify filter() via $_get iteration keeps only positive values from mixed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne043() {
    Int16Array arr = new Int16Array(new int[] {-5, -1, 0, 3, 8, -2});
    Int16Array result = arr.filter((value, index, array) -> {
        return value > 0;
        });
    boolean allPositive = true;
    for (int i = 0; i < result.length(); i++) {
    if (result.get(i) <= 0) {
    allPositive = false;
    break;
    }
    }
    assertTrue(allPositive);
    }

    /**
     * Verify filter() result $_get values equal expected sequence
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_4400
     * @tc.name testInt16ArrayFilterTestOne044
     * @tc.desc Verify filter() result $_get values equal expected sequence
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne044() {
    Int16Array arr = new Int16Array(new int[] {5, -3, 0, -8, 1, -2});
    Int16Array result = arr.filter((value, index, array) -> {
        return value < 0;
        });
    Integer actualFirst = result.get(0);
    int expectedFirst = -3;
    assertEqualInt(expectedFirst, actualFirst);
    Integer actualSecond = result.get(1);
    int expectedSecond = -8;
    assertEqualInt(expectedSecond, actualSecond);
    Integer actualThird = result.get(2);
    int expectedThird = -2;
    assertEqualInt(expectedThird, actualThird);
    }

    /**
     * Verify filter() result length equals expected
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_4500
     * @tc.name testInt16ArrayFilterTestOne045
     * @tc.desc Verify filter() result length equals expected
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne045() {
    Int16Array arr = new Int16Array(new int[] {0, -1, 0, 5, 0, 3});
    Int16Array result = arr.filter((value, index, array) -> {
        return value == 0;
        });
    int actualFirst = result.length();
    int expectedFirst = 3;
    assertEqual(expectedFirst, actualFirst);
    }

    /**
     * Verify filter() keeps Int16.MAX 32767 values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_4600
     * @tc.name testInt16ArrayFilterTestOne046
     * @tc.desc Verify filter() keeps Int16.MAX 32767 values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne046() {
    Int16Array arr = new Int16Array(new int[] {32767, -100, 32767, 0, 32767});
    Int16Array result = arr.filter((value, index, array) -> {
        return value == 32767;
        });
    boolean allMax = true;
    for (int i = 0; i < result.length(); i++) {
    if (result.get(i) != 32767) {
    allMax = false;
    break;
    }
    }
    assertTrue(allMax);
    }

    /**
     * Verify filter() result supports $_set then $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_4700
     * @tc.name testInt16ArrayFilterTestOne047
     * @tc.desc Verify filter() result supports $_set then $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne047() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Int16Array result = arr.filter((value, index, array) -> {
        return value > 2;
        });
    result.set(0, 99);
    Integer actualFirst = result.get(0);
    int expectedFirst = 99;
    assertEqualInt(expectedFirst, actualFirst);
    }

    /**
     * Verify filter() with false callback gives empty result.length on 5-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_4800
     * @tc.name testInt16ArrayFilterTestOne048
     * @tc.desc Verify filter() with false callback gives empty result.length on 5-element array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne048() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Int16Array result = arr.filter((value, index, array) -> {
        return false;
        });
    int actualFirst = result.length();
    int expectedFirst = 0;
    assertEqual(expectedFirst, actualFirst);
    }

    /**
     * Verify filter() on empty Int16Array with true callback keeps length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_4900
     * @tc.name testInt16ArrayFilterTestOne049
     * @tc.desc Verify filter() on empty Int16Array with true callback keeps length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne049() {
    Int16Array arr = new Int16Array(new int[] {});
    Int16Array result = arr.filter((value, index, array) -> {
        return true;
        });
    String actualString = String.valueOf(result);
    String expectedString = "";
    assertEqual(expectedString, actualString);
    int actualFirst = result.length();
    int expectedFirst = 0;
    assertEqual(expectedFirst, actualFirst);
    }

    /**
     * Verify filter() with false callback yields empty result.byteLength of 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_5000
     * @tc.name testInt16ArrayFilterTestOne050
     * @tc.desc Verify filter() with false callback yields empty result.byteLength of 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne050() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    Int16Array result = arr.filter((value, index, array) -> {
        return false;
        });
    String actualString = String.valueOf(result);
    String expectedString = "";
    assertEqual(expectedString, actualString);
    int actualFirst = result.byteLength();
    int expectedFirst = 0;
    assertEqual(expectedFirst, actualFirst);
    }

    /**
     * Verify filter() on buffer view returns byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_5100
     * @tc.name testInt16ArrayFilterTestOne051
     * @tc.desc Verify filter() on buffer view returns byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne051() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array arr = new Int16Array(buf, 2, 3);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    Int16Array result = arr.filter((value, index, array) -> {
        return value > 5;
        });
    String actualString = String.valueOf(result);
    String expectedString = "10,20,30";
    assertEqual(expectedString, actualString);
    int actualFirst = result.byteOffset();
    int expectedFirst = 0;
    assertEqual(expectedFirst, actualFirst);
    }

    /**
     * Verify filter() result.buffer is independent from original.buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_5200
     * @tc.name testInt16ArrayFilterTestOne052
     * @tc.desc Verify filter() result.buffer is independent from original.buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne052() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    Int16Array result = arr.filter((value, index, array) -> {
        return value > 2;
        });
    String actualString = String.valueOf(result);
    String expectedString = "3,4";
    assertEqual(expectedString, actualString);
    assertNotEqual(arr.buffer(), result.buffer());
    }

    /**
     * Verify filter() result $_set does not alter original $_get value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_5300
     * @tc.name testInt16ArrayFilterTestOne053
     * @tc.desc Verify filter() result $_set does not alter original $_get value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne053() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.filter((value, index, array) -> {
        return true;
        });
    result.set(0, 999);
    String actualString = String.valueOf(result);
    String expectedString = "999,20,30";
    assertEqual(expectedString, actualString);
    Integer actualFirst = arr.get(0);
    int expectedFirst = 10;
    assertEqualInt(expectedFirst, actualFirst);
    }

    /**
     * Verify two filter() results share independent buffers via $_set $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_5400
     * @tc.name testInt16ArrayFilterTestOne054
     * @tc.desc Verify two filter() results share independent buffers via $_set $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne054() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6});
    Int16Array evenResultA = arr.filter((value, index, array) -> {
        return value % 2 == 0;
        });
    Int16Array evenResultB = arr.filter((value, index, array) -> {
        return value % 2 == 0;
        });
    String actualStringA = String.valueOf(evenResultA);
    String expectedStringA = "2,4,6";
    assertEqual(expectedStringA, actualStringA);
    String actualStringB = String.valueOf(evenResultB);
    String expectedStringB = "2,4,6";
    assertEqual(expectedStringB, actualStringB);
    evenResultA.set(0, 999);
    Integer actualFirst = evenResultB.get(0);
    int expectedFirst = 2;
    assertEqualInt(expectedFirst, actualFirst);
    }

    /**
     * Verify filter().filter() intermediate buffer independence
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_5500
     * @tc.name testInt16ArrayFilterTestOne055
     * @tc.desc Verify filter().filter() intermediate buffer independence
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne055() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6});
    Int16Array intermediate = arr.filter((value, index, array) -> {
        return value > 1;
        });
    Int16Array filled = intermediate.filter((value, index, array) -> {
        return value > 3;
        });
    String actualIntermediate = String.valueOf(intermediate);
    String expectedIntermediate = "2,3,4,5,6";
    assertEqual(expectedIntermediate, actualIntermediate);
    String actualFilled = String.valueOf(filled);
    String expectedFilled = "4,5,6";
    assertEqual(expectedFilled, actualFilled);
    intermediate.set(0, 999);
    Integer actualFirst = filled.get(0);
    int expectedFirst = 4;
    assertEqualInt(expectedFirst, actualFirst);
    }

    /**
     * Verify filter() does not change original.length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_5600
     * @tc.name testInt16ArrayFilterTestOne056
     * @tc.desc Verify filter() does not change original.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne056() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    int origLen = arr.length();
    Int16Array result = arr.filter((value, index, array) -> {
        return value > 2;
        });
    String actualString = String.valueOf(result);
    String expectedString = "3,4,5";
    assertEqual(expectedString, actualString);
    int actualFirst = arr.length();
    int expectedFirst = origLen;
    assertEqual(expectedFirst, actualFirst);
    }

    /**
     * Verify filter() does not change original.byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_5700
     * @tc.name testInt16ArrayFilterTestOne057
     * @tc.desc Verify filter() does not change original.byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne057() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    int origByteLen = arr.byteLength();
    Int16Array result = arr.filter((value, index, array) -> {
        return value > 3;
        });
    int actualFirst = arr.byteLength();
    int expectedFirst = origByteLen;
    assertEqual(expectedFirst, actualFirst);
    }

    /**
     * Verify filter() original array unchanged after filter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_5800
     * @tc.name testInt16ArrayFilterTestOne058
     * @tc.desc Verify filter() original array unchanged after filter
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne058() {
    Int16Array arr = new Int16Array(new int[] {7, 14, 21, 28, 35});
    Int16Array snapshot = new Int16Array(new int[] {7, 14, 21, 28, 35});
    Int16Array result = arr.filter((value, index, array) -> {
        return value > 15;
        });
    boolean unchanged = true;
    for (int i = 0; i < arr.length(); i++) {
    if (arr.get(i) != snapshot.get(i)) {
    unchanged = false;
    break;
    }
    }
    assertTrue(unchanged);
    }

    /**
     * Verify chained filter().fill(0) sets element at index 0 to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_5900
     * @tc.name testInt16ArrayFilterTestOne059
     * @tc.desc Verify chained filter().fill(0) sets element at index 0 to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne059() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Int16Array filtered = arr.filter((value, index, array) -> {
        return value > 2;
        });
    Int16Array result = filtered.fill(0);
    Integer actualFirst = result.get(0);
    int expectedFirst = 0;
    assertEqualInt(expectedFirst, actualFirst);
    }

    /**
     * Verify chained filter().sort() result element at index 0 equals 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_6000
     * @tc.name testInt16ArrayFilterTestOne060
     * @tc.desc Verify chained filter().sort() result element at index 0 equals 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne060() {
    Int16Array arr = new Int16Array(new int[] {5, 3, 1, 4, 2});
    Int16Array filtered = arr.filter((value, index, array) -> {
        return value > 1;
        });
    Int16Array result = filtered.sort();
    Integer actualFirst = result.get(0);
    int expectedFirst = 2;
    assertEqualInt(expectedFirst, actualFirst);
    }

    /**
     * Verify chained filter().map(fn) result element at index 0 equals 6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_6100
     * @tc.name testInt16ArrayFilterTestOne061
     * @tc.desc Verify chained filter().map(fn) result element at index 0 equals 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne061() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Int16Array filtered = arr.filter((value, index, array) -> {
        return value > 2;
        });
    Int16Array result = filtered.map((value, index, array) -> {
        return value * 2;
        });
    Integer actualFirst = result.get(0);
    int expectedFirst = 6;
    assertEqualInt(expectedFirst, actualFirst);
    }

    /**
     * Verify chained filter().filter() equals single filter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_6200
     * @tc.name testInt16ArrayFilterTestOne062
     * @tc.desc Verify chained filter().filter() equals single filter
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne062() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6});
    Int16Array chainTmp = arr.filter((value, index, array) -> {
        return value > 2;
        });
    Int16Array chainResult = chainTmp.filter((value, index, array) -> {
        return value < 6;
        });
    Int16Array singleResult = arr.filter((value, index, array) -> {
        return value > 2 && value < 6;
        });
    boolean equivalent = true;
    for (int i = 0; i < chainResult.length(); i++) {
    if (chainResult.get(i) != singleResult.get(i)) {
    equivalent = false;
    break;
    }
    }
    assertTrue(equivalent);
    int actualFirst = chainResult.length();
    int expectedFirst = singleResult.length();
    assertEqual(expectedFirst, actualFirst);
    }

    /**
     * Verify chained filter().fill(0) sets all elements to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_6300
     * @tc.name testInt16ArrayFilterTestOne063
     * @tc.desc Verify chained filter().fill(0) sets all elements to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne063() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6});
    Int16Array filtered = arr.filter((value, index, array) -> {
        return value > 2;
        });
    Int16Array result = filtered.fill(0);
    boolean allZero = true;
    for (int i = 0; i < result.length(); i++) {
    if (result.get(i) != 0) {
    allZero = false;
    break;
    }
    }
    assertTrue(allZero);
    }

    /**
     * Verify chained filter().reverse() reverses element order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_6400
     * @tc.name testInt16ArrayFilterTestOne064
     * @tc.desc Verify chained filter().reverse() reverses element order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne064() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array filtered = arr.filter((value, index, array) -> {
        return true;
        });
    Int16Array result = filtered.reverse();
    Integer actualFirst = result.get(0);
    int expectedFirst = 50;
    assertEqualInt(expectedFirst, actualFirst);
    Integer actualSecond = result.get(4);
    int expectedSecond = 10;
    assertEqualInt(expectedSecond, actualSecond);
    }

    /**
     * Verify chained filter().sort() sorts elements in ascending order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_6500
     * @tc.name testInt16ArrayFilterTestOne065
     * @tc.desc Verify chained filter().sort() sorts elements in ascending order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne065() {
    Int16Array arr = new Int16Array(new int[] {30, 10, 50, 20, 40});
    Int16Array filtered = arr.filter((value, index, array) -> {
        return true;
        });
    Int16Array result = filtered.sort();
    boolean sorted = true;
    for (int i = 1; i < result.length(); i++) {
    if (result.get(i - 1) > result.get(i)) {
    sorted = false;
    break;
    }
    }
    assertTrue(sorted);
    }

    /**
     * Verify filter() callback throws RangeError at index=0 and source array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_6600
     * @tc.name testInt16ArrayFilterTestOne066
     * @tc.desc Verify filter() callback throws RangeError at index=0 and source array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayFilterTestOne066() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    try {
    arr.filter((value, index, array) -> {
    throw new RangeError("range error at start");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    Integer actualFirstElement = arr.get(0);
    int expectedFirstElement = 1;
    assertEqualInt(expectedFirstElement, actualFirstElement);
    Integer actualFourthElement = arr.get(3);
    int expectedFourthElement = 4;
    assertEqualInt(expectedFourthElement, actualFourthElement);
    }

    /**
     * Verify filter() explicit boolean predicate keeps elements above 25
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_FILTER_ONE_7800
     * @tc.name testInt16ArrayFilterTestOne078
     * @tc.desc Verify filter() explicit boolean predicate keeps elements above 25
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
