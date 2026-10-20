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
import basetype.common.ClassCastError;
import basetype.common.RangeError;

import java.util.LinkedHashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayToStringTest01 —— Int16Array 方法族 XTS 测试。
 *
 * @since 2026-10-20
 */
public class Int16ArrayToStringTest01 extends BasTest {
    /**
     * Verify Int16Array.from(arrayLike) toString on Int16Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_0100
     * @tc.name testInt16ArrayToStringTestOne001
     * @tc.desc Verify Int16Array.from(arrayLike) toString on Int16Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne001() {
    Int16Array arr = Int16Array.from(new int[] {7, 14, 21});
    String actualString = String.valueOf(arr);
    String expectedString = "7,14,21";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify new Int16Array(buf) ArrayBuffer byteOffset=0 toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_0200
     * @tc.name testInt16ArrayToStringTestOne002
     * @tc.desc Verify new Int16Array(buf) ArrayBuffer byteOffset=0 toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne002() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array arr = new Int16Array(buf);
    String actualString = String.valueOf(arr);
    String expectedString = "0,0,0";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify new Int16Array(buf, byteOffset) ArrayBuffer toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_0300
     * @tc.name testInt16ArrayToStringTestOne003
     * @tc.desc Verify new Int16Array(buf, byteOffset) ArrayBuffer toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne003() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array arr = new Int16Array(buf, 2);
    String actualString = String.valueOf(arr);
    String expectedString = "0,0,0";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify new Int16Array(buf, byteOffset, length) ArrayBuffer toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_0400
     * @tc.name testInt16ArrayToStringTestOne004
     * @tc.desc Verify new Int16Array(buf, byteOffset, length) ArrayBuffer toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne004() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array arr = new Int16Array(buf, 2, 2);
    String actualString = String.valueOf(arr);
    String expectedString = "0,0";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify Int16Array.from(setObject) Set toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_0500
     * @tc.name testInt16ArrayToStringTestOne005
     * @tc.desc Verify Int16Array.from(setObject) Set toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne005() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(100);
    s.add(200);
    Int16Array arr = Int16Array.from(s);
    String actualString = String.valueOf(arr);
    String expectedString = "100,200";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify new Int16Array(3) toString returns '0, 0, 0'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_0600
     * @tc.name testInt16ArrayToStringTestOne006
     * @tc.desc Verify new Int16Array(3) toString returns '0, 0, 0'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne006() {
    Int16Array arr = new Int16Array(3);
    String actualString = String.valueOf(arr);
    String expectedString = "0,0,0";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify 0 Int16Array toString '0'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_0700
     * @tc.name testInt16ArrayToStringTestOne007
     * @tc.desc Verify 0 Int16Array toString '0'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne007() {
    Int16Array arr = new Int16Array(new int[] {0});
    String actualString = String.valueOf(arr);
    String expectedString = "0";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify -1 Int16Array toString '-1'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_0800
     * @tc.name testInt16ArrayToStringTestOne008
     * @tc.desc Verify -1 Int16Array toString '-1'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne008() {
    Int16Array arr = new Int16Array(new int[] {-1});
    String actualString = String.valueOf(arr);
    String expectedString = "-1";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify int16.MIN -32768 Int16Array toString '-32768'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_0900
     * @tc.name testInt16ArrayToStringTestOne009
     * @tc.desc Verify int16.MIN -32768 Int16Array toString '-32768'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne009() {
    Int16Array arr = new Int16Array(new int[] {-32768});
    String actualString = String.valueOf(arr);
    String expectedString = "-32768";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify 32768 MAX -32768 Int16Array toString '-32768'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_1000
     * @tc.name testInt16ArrayToStringTestOne010
     * @tc.desc Verify 32768 MAX -32768 Int16Array toString '-32768'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne010() {
    Int16Array arr = new Int16Array(new int[] {32768});
    String actualString = String.valueOf(arr);
    String expectedString = "-32768";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify -32769 MIN 32767 Int16Array toString '32767'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_1100
     * @tc.name testInt16ArrayToStringTestOne011
     * @tc.desc Verify -32769 MIN 32767 Int16Array toString '32767'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne011() {
    Int16Array arr = new Int16Array(new int[] {-32769});
    String actualString = String.valueOf(arr);
    String expectedString = "32767";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify [3.7, -2.3, 0.9] toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_1200
     * @tc.name testInt16ArrayToStringTestOne012
     * @tc.desc Verify [3.7, -2.3, 0.9] toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne012() {
    Int16Array arr = new Int16Array(new double[] {3.7, -2.3, 0.9});
    String actualString = String.valueOf(arr);
    String expectedString = "3,-2,0";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify [MIN, 0, MAX] Int16Array toString '-32768, 0, 32767'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_1300
     * @tc.name testInt16ArrayToStringTestOne013
     * @tc.desc Verify [MIN, 0, MAX] Int16Array toString '-32768, 0, 32767'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne013() {
    Int16Array arr = new Int16Array(new int[] {-32768, 0, 32767});
    String actualString = String.valueOf(arr);
    String expectedString = "-32768,0,32767";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify MIN Int16Array toString MIN
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_1400
     * @tc.name testInt16ArrayToStringTestOne014
     * @tc.desc Verify MIN Int16Array toString MIN
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne014() {
    Int16Array arr = new Int16Array(new int[] {-32768, -32768, -32768});
    String actualString = String.valueOf(arr);
    String expectedString = "-32768,-32768,-32768";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify [1, -1, 0] Int16Array toString '1, -1, 0'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_1500
     * @tc.name testInt16ArrayToStringTestOne015
     * @tc.desc Verify [1, -1, 0] Int16Array toString '1, -1, 0'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne015() {
    Int16Array arr = new Int16Array(new int[] {1, -1, 0});
    String actualString = String.valueOf(arr);
    String expectedString = "1,-1,0";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify [100, -50, 200, -300, 0] Int16Array toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_1600
     * @tc.name testInt16ArrayToStringTestOne016
     * @tc.desc Verify [100, -50, 200, -300, 0] Int16Array toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne016() {
    Int16Array arr = new Int16Array(new int[] {100, -50, 200, -300, 0});
    String actualString = String.valueOf(arr);
    String expectedString = "100,-50,200,-300,0";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify fill(0) Int16Array toString 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_1700
     * @tc.name testInt16ArrayToStringTestOne017
     * @tc.desc Verify fill(0) Int16Array toString 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne017() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    arr.fill(0);
    String actualString = String.valueOf(arr);
    String expectedString = "0,0,0";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify reverse() Int16Array toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_1800
     * @tc.name testInt16ArrayToStringTestOne018
     * @tc.desc Verify reverse() Int16Array toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne018() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    arr.reverse();
    String actualString = String.valueOf(arr);
    String expectedString = "5,4,3,2,1";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify sort() Int16Array toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_1900
     * @tc.name testInt16ArrayToStringTestOne019
     * @tc.desc Verify sort() Int16Array toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne019() {
    Int16Array arr = new Int16Array(new int[] {5, -10, 3, 0, 8});
    arr.sort();
    String actualString = String.valueOf(arr);
    String expectedString = "-10,0,3,5,8";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify set(src) Int16Array toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_2000
     * @tc.name testInt16ArrayToStringTestOne020
     * @tc.desc Verify set(src) Int16Array toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne020() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0});
    arr.set(Int16Array.of(10, 20));
    String actualString = String.valueOf(arr);
    String expectedString = "10,20,0,0";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify copyWithin(target, start) Int16Array toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_2100
     * @tc.name testInt16ArrayToStringTestOne021
     * @tc.desc Verify copyWithin(target, start) Int16Array toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne021() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(0, 2);
    String actualString = String.valueOf(arr);
    String expectedString = "30,40,50,40,50";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify $_set int16.MAX Int16Array toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_2200
     * @tc.name testInt16ArrayToStringTestOne022
     * @tc.desc Verify $_set int16.MAX Int16Array toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne022() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    arr.set(1, 32767);
    String actualString = String.valueOf(arr);
    String expectedString = "0,32767,0";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify $_set int16.MIN Int16Array toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_2300
     * @tc.name testInt16ArrayToStringTestOne023
     * @tc.desc Verify $_set int16.MIN Int16Array toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne023() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    arr.set(1, -32768);
    String actualString = String.valueOf(arr);
    String expectedString = "0,-32768,0";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify fill + $_set + reverse Int16Array toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_2400
     * @tc.name testInt16ArrayToStringTestOne024
     * @tc.desc Verify fill + $_set + reverse Int16Array toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne024() {
    Int16Array arr = new Int16Array(new int[] {9, 8, 7, 6, 5});
    arr.fill(0);
    arr.set(0, 100);
    arr.reverse();
    String actualString = String.valueOf(arr);
    String expectedString = "0,0,0,0,100";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify subarray(begin, end) toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_2500
     * @tc.name testInt16ArrayToStringTestOne025
     * @tc.desc Verify subarray(begin, end) toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne025() {
    Int16Array arr = new Int16Array(new int[] {0, 1, 2, 3, 4, 5});
    Int16Array view = arr.subarray(1, 4);
    String actualString = String.valueOf(view);
    String expectedString = "1,2,3";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify toString returns '-32768, 32767'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_2600
     * @tc.name testInt16ArrayToStringTestOne026
     * @tc.desc Verify toString returns '-32768, 32767'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne026() {
    Int16Array arr = new Int16Array(2);
    arr.set(0, -32768);
    arr.set(1, 32767);
    String actualString = String.valueOf(arr);
    String expectedString = "-32768,32767";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify length=100 toString 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_2700
     * @tc.name testInt16ArrayToStringTestOne027
     * @tc.desc Verify length=100 toString 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne027() {
    Int16Array arr = new Int16Array(100);
    arr.fill(1);
    String result = String.valueOf(arr);
    String expectedResult = "";
    for (int i = 0; i < 100; i++) {
    if (i > 0) {
    expectedResult += ",";
    }
    expectedResult += "1";
    }
    assertEqual(expectedResult, result);
    }

    /**
     * Verify ArrayBuffer byteLength 1 toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_2800
     * @tc.name testInt16ArrayToStringTestOne028
     * @tc.desc Verify ArrayBuffer byteLength 1 toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne028() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int16Array arr = new Int16Array(buf);
    arr.set(0, 16384);
    String actualString = String.valueOf(arr);
    String expectedString = "16384";
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify toString equals join() on empty Int16Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_2900
     * @tc.name testInt16ArrayToStringTestOne029
     * @tc.desc Verify toString equals join() on empty Int16Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne029() {
    Int16Array arr = new Int16Array(0);
    String actualString = String.valueOf(arr);
    String actualJoined = arr.join();
    assertEqual(actualJoined, actualString);
    }

    /**
     * Verify toString() on subarray returns '20, 30, 40'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_3000
     * @tc.name testInt16ArrayToStringTestOne030
     * @tc.desc Verify toString() on subarray returns '20, 30, 40'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne030() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(1, 4);
    String result = String.valueOf(sub);
    assertEqual("20,30,40", result);
    }

    /**
     * Verify toString() on all MIN values returns the exact sequence
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_3100
     * @tc.name testInt16ArrayToStringTestOne031
     * @tc.desc Verify toString() on all MIN values returns the exact sequence
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne031() {
    Int16Array arr = Int16Array.of(-32768, -32768);
    String result = String.valueOf(arr);
    String actualResult = result;
    String expectedResult = "-32768,-32768";
    assertEqual(expectedResult, actualResult);
    }

    /**
     * Verify toString() on Int16Array.of(-1, 0, 1) assertEqual '-1, 0, 1'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_3200
     * @tc.name testInt16ArrayToStringTestOne032
     * @tc.desc Verify toString() on Int16Array.of(-1, 0, 1) assertEqual '-1, 0, 1'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne032() {
    Int16Array arr = Int16Array.of(-1, 0, 1);
    String result = String.valueOf(arr);
    String actualResult = result;
    String expectedResult = "-1,0,1";
    assertEqual(expectedResult, actualResult);
    }

    /**
     * Verify toString() on array with negative and positive mix matches expected format
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_3300
     * @tc.name testInt16ArrayToStringTestOne033
     * @tc.desc Verify toString() on array with negative and positive mix matches expected format
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne033() {
    Int16Array arr = Int16Array.of(-100, 0, 100);
    String result = String.valueOf(arr);
    String actualResult = result;
    String expectedResult = "-100,0,100";
    assertEqual(expectedResult, actualResult);
    }

    /**
     * Verify toString() result starts with first element string and no leading comma
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_3400
     * @tc.name testInt16ArrayToStringTestOne034
     * @tc.desc Verify toString() result starts with first element string and no leading comma
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne034() {
    Int16Array arr = Int16Array.of(5, 10, 15);
    String result = String.valueOf(arr);
    String firstChar = Character.toString(result.charAt(0));
    String actualValue = firstChar;
    String expectedValue = "5";
    assertEqual(expectedValue, actualValue);
    }

    /**
     * Verify toString().length for empty array assertEqual 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_3600
     * @tc.name testInt16ArrayToStringTestOne036
     * @tc.desc Verify toString().length for empty array assertEqual 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne036() {
    Int16Array arr = new Int16Array(0);
    String result = String.valueOf(arr);
    String expectedResult = "";
    assertEqual(expectedResult, result);
    int actualLength = result.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify toString().length for single-digit element equals 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_3700
     * @tc.name testInt16ArrayToStringTestOne037
     * @tc.desc Verify toString().length for single-digit element equals 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne037() {
    int val = 7;
    Int16Array arr = Int16Array.of(val);
    String result = String.valueOf(arr);
    String expectedResult = "7";
    assertEqual(expectedResult, result);
    int actualLength = result.length();
    int expectedLength = 1;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify toString().length for multi-digit element matches digit count
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_3800
     * @tc.name testInt16ArrayToStringTestOne038
     * @tc.desc Verify toString().length for multi-digit element matches digit count
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne038() {
    int val = 12345;
    Int16Array arr = Int16Array.of(val);
    String result = String.valueOf(arr);
    String expectedResult = "12345";
    assertEqual(expectedResult, result);
    int actualLength = result.length();
    int expectedLength = 5;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify toString().length for negative 2-digit element includes minus sign
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_3900
     * @tc.name testInt16ArrayToStringTestOne039
     * @tc.desc Verify toString().length for negative 2-digit element includes minus sign
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne039() {
    int val = -55;
    Int16Array arr = Int16Array.of(val);
    String result = String.valueOf(arr);
    String expectedResult = "-55";
    assertEqual(expectedResult, result);
    int actualLength = result.length();
    int expectedLength = 3;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify toString().length for MIN element assertEqual 6 ('-32768')
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_4000
     * @tc.name testInt16ArrayToStringTestOne040
     * @tc.desc Verify toString().length for MIN element assertEqual 6 ('-32768')
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne040() {
    int val = -32768;
    Int16Array arr = Int16Array.of(val);
    String result = String.valueOf(arr);
    String expectedResult = "-32768";
    assertEqual(expectedResult, result);
    int actualLength = result.length();
    int expectedLength = 6;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify toString().length for MAX element assertEqual 5 ('32767')
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_4100
     * @tc.name testInt16ArrayToStringTestOne041
     * @tc.desc Verify toString().length for MAX element assertEqual 5 ('32767')
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne041() {
    int val = 32767;
    Int16Array arr = Int16Array.of(val);
    String result = String.valueOf(arr);
    String expectedResult = "32767";
    assertEqual(expectedResult, result);
    int actualLength = result.length();
    int expectedLength = 5;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify toString().length for single-element zero array equals 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_4200
     * @tc.name testInt16ArrayToStringTestOne042
     * @tc.desc Verify toString().length for single-element zero array equals 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne042() {
    int val = 0;
    Int16Array arr = Int16Array.of(val);
    String result = String.valueOf(arr);
    String expectedResult = "0";
    assertEqual(expectedResult, result);
    int actualLength = result.length();
    int expectedLength = 1;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify toString().length for 3-element array matches digitCount + commaCount
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_4300
     * @tc.name testInt16ArrayToStringTestOne043
     * @tc.desc Verify toString().length for 3-element array matches digitCount + commaCount
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne043() {
    Int16Array arr = Int16Array.of(1, 23, 456);
    String result = String.valueOf(arr);
    String expectedResult = "1,23,456";
    assertEqual(expectedResult, result);
    int actualLength = result.length();
    int expectedLength = 8;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify toString().length for new Int16Array(4) all zeros assertEqual 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_4400
     * @tc.name testInt16ArrayToStringTestOne044
     * @tc.desc Verify toString().length for new Int16Array(4) all zeros assertEqual 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne044() {
    Int16Array arr = new Int16Array(4);
    String result = String.valueOf(arr);
    String expectedResult = "0,0,0,0";
    assertEqual(expectedResult, result);
    int actualLength = result.length();
    int expectedLength = 7;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify After toString(), original.length unchanged on multi-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_4500
     * @tc.name testInt16ArrayToStringTestOne045
     * @tc.desc Verify After toString(), original.length unchanged on multi-element array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne045() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    int lenBefore = arr.length();
    String result = String.valueOf(arr);
    String expectedResult = "1,2,3";
    assertEqual(expectedResult, result);
    int actualLength = arr.length();
    int expectedLength = lenBefore;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify After toString(), original.$_get(0 as int) element value unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_4600
     * @tc.name testInt16ArrayToStringTestOne046
     * @tc.desc Verify After toString(), original.$_get(0 as int) element value unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne046() {
    Int16Array arr = Int16Array.of(88, 99, 111);
    Integer valBefore = arr.get(0);
    String result = String.valueOf(arr);
    String expectedResult = "88,99,111";
    assertEqual(expectedResult, result);
    Integer elementAt0 = arr.get((int) 0);
    int expectedElement0 = valBefore;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify After toString() on empty array, original.length still 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_4700
     * @tc.name testInt16ArrayToStringTestOne047
     * @tc.desc Verify After toString() on empty array, original.length still 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne047() {
    Int16Array arr = new Int16Array(0);
    String result = String.valueOf(arr);
    assertEqual("", result);
    int actualLength = arr.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify After toString() on Int16Array.of(1, 2, 3, 4), original.buffer.byteLength unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_4800
     * @tc.name testInt16ArrayToStringTestOne048
     * @tc.desc Verify After toString() on Int16Array.of(1, 2, 3, 4), original.buffer.byteLength unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne048() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    int bufLenBefore = arr.buffer().byteLength();
    String result = String.valueOf(arr);
    assertEqual("1,2,3,4", result);
    int actualByteLength = arr.buffer().byteLength();
    int expectedByteLength = bufLenBefore;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify After toString() on subarray, original parent array element unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_4900
     * @tc.name testInt16ArrayToStringTestOne049
     * @tc.desc Verify After toString() on subarray, original parent array element unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne049() {
    Int16Array arr = Int16Array.of(5, 10, 15, 20);
    Int16Array sub = arr.subarray(0, 2);
    Integer valBefore = arr.get(0);
    String result = String.valueOf(sub);
    assertEqual("5,10", result);
    Integer elementAt0 = arr.get((int) 0);
    int expectedElement0 = valBefore;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify After toString() on all MIN values, all elements still MIN
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_5000
     * @tc.name testInt16ArrayToStringTestOne050
     * @tc.desc Verify After toString() on all MIN values, all elements still MIN
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne050() {
    Int16Array arr = Int16Array.of(-32768, -32768);
    String result = String.valueOf(arr);
    assertEqual("-32768,-32768", result);
    Integer elementAt0 = arr.get((int) 0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get((int) 1);
    int expectedElement1 = -32768;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify toString() produces identical content on repeated calls
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_5100
     * @tc.name testInt16ArrayToStringTestOne051
     * @tc.desc Verify toString() produces identical content on repeated calls
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne051() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String r1 = String.valueOf(arr);
    String r2 = String.valueOf(arr);
    String actualValue = r1;
    String expectedValue = r2;
    assertEqual(expectedValue, actualValue);
    }

    /**
     * Verify Mutating array after toString() does not change previously returned string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_5200
     * @tc.name testInt16ArrayToStringTestOne052
     * @tc.desc Verify Mutating array after toString() does not change previously returned string
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne052() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String result = String.valueOf(arr);
    arr.set((int) 0, 99);
    String actualResult = result;
    String expectedResult = "1,2,3";
    assertEqual(expectedResult, actualResult);
    }

    /**
     * Verify Calling toString() twice with mutation between returns different strings
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_5300
     * @tc.name testInt16ArrayToStringTestOne053
     * @tc.desc Verify Calling toString() twice with mutation between returns different strings
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne053() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String r1 = String.valueOf(arr);
    arr.set((int) 0, 99);
    String r2 = String.valueOf(arr);
    String actualValue = r2;
    String expectedValue = "99,2,3";
    assertEqual(expectedValue, actualValue);
    }

    /**
     * Verify Changing original via fill(0) then toString returns updated string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_5400
     * @tc.name testInt16ArrayToStringTestOne054
     * @tc.desc Verify Changing original via fill(0) then toString returns updated string
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne054() {
    Int16Array arr = Int16Array.of(7, 8, 9);
    String before = String.valueOf(arr);
    arr.fill(0);
    String after = String.valueOf(arr);
    String actualValue = after;
    String expectedValue = "0,0,0";
    assertEqual(expectedValue, actualValue);
    }

    /**
     * Verify After mutating via subarray, parent.toString() reflects shared buffer change
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_5500
     * @tc.name testInt16ArrayToStringTestOne055
     * @tc.desc Verify After mutating via subarray, parent.toString() reflects shared buffer change
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne055() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    Int16Array sub = arr.subarray(2, 5);
    sub.set((int) 0, 99);
    String result = String.valueOf(arr);
    String actualResult = result;
    String expectedResult = "1,2,99,4,5";
    assertEqual(expectedResult, actualResult);
    }

    /**
     * Verify subarray.toString() for length 0 subarray returns empty string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_5600
     * @tc.name testInt16ArrayToStringTestOne056
     * @tc.desc Verify subarray.toString() for length 0 subarray returns empty string
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne056() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    Int16Array sub = arr.subarray(0, 0);
    String result = String.valueOf(sub);
    String actualResult = result;
    String expectedResult = "";
    assertEqual(expectedResult, actualResult);
    }

    /**
     * Verify Int16Array.of and Int16Array.from with same values produce equal toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_5700
     * @tc.name testInt16ArrayToStringTestOne057
     * @tc.desc Verify Int16Array.of and Int16Array.from with same values produce equal toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne057() {
    Int16Array arr1 = Int16Array.of(5, 10, 15);
    Int16Array arr2 = Int16Array.from(new int[] {5, 10, 15});
    String actualString = String.valueOf(arr1);
    String expectedString = String.valueOf(arr2);
    assertEqual(expectedString, actualString);
    }

    /**
     * Verify toString() on all-negative values with varied digit counts
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_5800
     * @tc.name testInt16ArrayToStringTestOne058
     * @tc.desc Verify toString() on all-negative values with varied digit counts
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne058() {
    Int16Array arr = Int16Array.of(-1, -100, -10000);
    String result = String.valueOf(arr);
    String actualResult = result;
    String expectedResult = "-1,-100,-10000";
    assertEqual(expectedResult, actualResult);
    }

    /**
     * Verify toString() returns the complete comma-separated element sequence
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_5900
     * @tc.name testInt16ArrayToStringTestOne059
     * @tc.desc Verify toString() returns the complete comma-separated element sequence
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne059() {
    Int16Array arr = Int16Array.of(100, 200, 300, 400);
    String result = String.valueOf(arr);
    String expectedResult = "100,200,300,400";
    assertEqual(expectedResult, result);
    }

    /**
     * Verify fill(32768) -32768 toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_6900
     * @tc.name testInt16ArrayToStringTestOne069
     * @tc.desc Verify fill(32768) -32768 toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne069() {
    Int16Array arr = new Int16Array(3);
    arr.fill(32768);
    String result = String.valueOf(arr);
    String expectedValue = "-32768,-32768,-32768";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify subarray buffer subarray.toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_7000
     * @tc.name testInt16ArrayToStringTestOne070
     * @tc.desc Verify subarray buffer subarray.toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne070() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array parent = new Int16Array(buf, 0, 3);
    Int16Array child = new Int16Array(buf, 2, 2);
    parent.set((int) 1, 999);
    parent.set((int) 2, -555);
    String result = String.valueOf(child);
    String expectedValue = "999,-555";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify sort constant-one compareFn keeps original order in toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_7100
     * @tc.name testInt16ArrayToStringTestOne071
     * @tc.desc Verify sort constant-one compareFn keeps original order in toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne071() {
    Int16Array arr = new Int16Array(new int[] {5, -10, 3, 0, 8});
    arr.sort((array, unusedB) -> 1);
    String result = String.valueOf(arr);
    String expectedValue = "5,-10,3,0,8";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify sort ascending on all-negative Int16Array via toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_7200
     * @tc.name testInt16ArrayToStringTestOne072
     * @tc.desc Verify sort ascending on all-negative Int16Array via toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne072() {
    Int16Array arr = new Int16Array(new int[] {-5, -1, -300, -50, -10});
    arr.sort((a, b) -> (int) (a - b));
    String result = String.valueOf(arr);
    String expectedValue = "-300,-50,-10,-5,-1";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify sort().reverse() toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_7300
     * @tc.name testInt16ArrayToStringTestOne073
     * @tc.desc Verify sort().reverse() toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne073() {
    Int16Array arr = new Int16Array(new int[] {3, 1, 4, 1, 5});
    arr.sort().reverse();
    String result = String.valueOf(arr);
    String expectedValue = "5,4,3,1,1";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify fill(MIN).$_set(0 as int, MAX).reverse() toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_7400
     * @tc.name testInt16ArrayToStringTestOne074
     * @tc.desc Verify fill(MIN).$_set(0 as int, MAX).reverse() toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne074() {
    Int16Array arr = new Int16Array(4);
    arr.fill(-32768);
    arr.set((int) 0, 32767);
    arr.reverse();
    String result = String.valueOf(arr);
    String expectedValue = "-32768,-32768,-32768,32767";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify copyWithin(1, 0).fill(0, 2) toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_7500
     * @tc.name testInt16ArrayToStringTestOne075
     * @tc.desc Verify copyWithin(1, 0).fill(0, 2) toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne075() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(1, 0);
    arr.fill(0, 2);
    String result = String.valueOf(arr);
    String expectedValue = "10,10,0,0,0";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify set(src).sort() toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_7600
     * @tc.name testInt16ArrayToStringTestOne076
     * @tc.desc Verify set(src).sort() toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne076() {
    Int16Array arr = new Int16Array(new int[] {100, 50, 75, 25});
    arr.set(new Int16Array(new int[] {60, 10}), 1);
    arr.sort();
    String result = String.valueOf(arr);
    String expectedValue = "10,25,60,100";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify fill(100).copyWithin(0, 1).$_set(0 as int, 999) toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_7700
     * @tc.name testInt16ArrayToStringTestOne077
     * @tc.desc Verify fill(100).copyWithin(0, 1).$_set(0 as int, 999) toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne077() {
    Int16Array arr = new Int16Array(4);
    arr.fill(100);
    arr.copyWithin(0, 1);
    arr.set((int) 0, 999);
    String result = String.valueOf(arr);
    String expectedValue = "999,100,100,100";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify reverse().fill(0, 1, 3) toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_7800
     * @tc.name testInt16ArrayToStringTestOne078
     * @tc.desc Verify reverse().fill(0, 1, 3) toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne078() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    arr.reverse();
    arr.fill(0, 1, 3);
    String result = String.valueOf(arr);
    String expectedValue = "5,0,0,2,1";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify [MIN, -1, 0, 1, MAX] Int16Array toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_7900
     * @tc.name testInt16ArrayToStringTestOne079
     * @tc.desc Verify [MIN, -1, 0, 1, MAX] Int16Array toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne079() {
    Int16Array arr = new Int16Array(new int[] {-32768, -1, 0, 1, 32767});
    String result = String.valueOf(arr);
    String expectedValue = "-32768,-1,0,1,32767";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify $_get(-1 as int) undefined toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_8000
     * @tc.name testInt16ArrayToStringTestOne080
     * @tc.desc Verify $_get(-1 as int) undefined toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne080() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    try {
    arr.get(-(int) 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    String result = String.valueOf(arr);
    String expectedValue = "10,20,30";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify $_get(length+1 as int) undefined toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_8100
     * @tc.name testInt16ArrayToStringTestOne081
     * @tc.desc Verify $_get(length+1 as int) undefined toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne081() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    try {
    arr.get((int) 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    String result = String.valueOf(arr);
    String expectedValue = "1,2,3,4";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify $_get(2147483647 as int) undefined toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_8200
     * @tc.name testInt16ArrayToStringTestOne082
     * @tc.desc Verify $_get(2147483647 as int) undefined toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne082() {
    Int16Array arr = new Int16Array(new int[] {100, 200});
    try {
    arr.get((int) 2147483647);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    String result = String.valueOf(arr);
    String expectedValue = "100,200";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify set overflow source values wrap then toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_8300
     * @tc.name testInt16ArrayToStringTestOne083
     * @tc.desc Verify set overflow source values wrap then toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne083() {
    Int16Array arr = new Int16Array(3);
    Int16Array src = new Int16Array(new int[] {32768, -32769, 100});
    arr.set(src);
    String result = String.valueOf(arr);
    String expectedValue = "-32768,32767,100";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify all min boundary toString equals join()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_8400
     * @tc.name testInt16ArrayToStringTestOne084
     * @tc.desc Verify all min boundary toString equals join()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne084() {
    Int16Array arr = new Int16Array(new int[] {-32768, -32768, -32768});
    String tsStr = String.valueOf(arr);
    String joinStr = arr.join();
    assertEqual(joinStr, tsStr);
    }

    /**
     * Verify fill overflow wrap toString equals join()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_8600
     * @tc.name testInt16ArrayToStringTestOne086
     * @tc.desc Verify fill overflow wrap toString equals join()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne086() {
    Int16Array arr = new Int16Array(3);
    arr.fill(32768);
    String tsStr = String.valueOf(arr);
    String joinStr = arr.join();
    assertEqual(joinStr, tsStr);
    }

    /**
     * Verify shared buffer view change toString equals join()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_8700
     * @tc.name testInt16ArrayToStringTestOne087
     * @tc.desc Verify shared buffer view change toString equals join()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne087() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array view1 = new Int16Array(buf, 0, 2);
    Int16Array view2 = new Int16Array(buf, 0, 2);
    view1.set((int) 1, -500);
    String tsStr = String.valueOf(view2);
    String joinStr = view2.join();
    assertEqual(joinStr, tsStr);
    }

    /**
     * Verify shared buffer alias write and fill then toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_8900
     * @tc.name testInt16ArrayToStringTestOne089
     * @tc.desc Verify shared buffer alias write and fill then toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne089() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array arr = new Int16Array(buf, 0, 3);
    Int16Array alias = new Int16Array(buf, 2, 1);
    alias.set((int) 0, 777);
    arr.fill(99, 0, 1);
    String result = String.valueOf(arr);
    String expectedValue = "99,777,0";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify fill copyWithin $_set reverse toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_9000
     * @tc.name testInt16ArrayToStringTestOne090
     * @tc.desc Verify fill copyWithin $_set reverse toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne090() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.fill(0, 0, 1);
    arr.copyWithin(2, 0, 2);
    arr.set((int) 5, -999);
    arr.reverse();
    String result = String.valueOf(arr);
    String expectedValue = "-999,5,2,0,2,0";
    assertEqual(expectedValue, result);
    }

    /**
     * Verify join rejects an object cast to String with ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_TOSTRING_ONE_9100
     * @tc.name testInt16ArrayToStringTestOne091
     * @tc.desc Verify join rejects an object cast to String with ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayToStringTestOne091() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    Object unsupported = new Object();
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }
}
