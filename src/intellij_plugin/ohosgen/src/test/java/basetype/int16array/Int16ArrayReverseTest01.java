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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayReverseTest01 —— Int16Array 方法族 XTS 测试。
 *
 * @since 2026-10-20
 */
public class Int16ArrayReverseTest01 extends BasTest {
    /**
     * Verify reverse() returns the same empty Int16Array with length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_0100
     * @tc.name testInt16ArrayReverseTestOne001
     * @tc.desc Verify reverse() returns the same empty Int16Array with length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne001() {
    Int16Array arr = new Int16Array(new int[] {});
    Int16Array result = arr.reverse();
    int actualLength = result.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    assertEqual(arr, result);
    }

    /**
     * Verify reverse() on new Int16Array([42]) yields [0]=42
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_0200
     * @tc.name testInt16ArrayReverseTestOne002
     * @tc.desc Verify reverse() on new Int16Array([42]) yields [0]=42
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne002() {
    Int16Array arr = new Int16Array(new int[] {42});
    Int16Array result = arr.reverse();
    Integer elementAt0 = result.get(0);
    int expectedElement0 = 42;
    assertEqualInt(expectedElement0, elementAt0);
    int actualLength = result.length();
    int expectedLength = 1;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify reverse() on Int16Array.of(32767) yields [0]=32767
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_0300
     * @tc.name testInt16ArrayReverseTestOne003
     * @tc.desc Verify reverse() on Int16Array.of(32767) yields [0]=32767
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne003() {
    int val = 32767;
    Int16Array arr = Int16Array.of(val);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 32767;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify reverse() on Int16Array.of(100, -200) yields [0]=-200 [1]=100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_0400
     * @tc.name testInt16ArrayReverseTestOne004
     * @tc.desc Verify reverse() on Int16Array.of(100, -200) yields [0]=-200 [1]=100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne004() {
    Int16Array arr = Int16Array.of(100, -200);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -200;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 100;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify reverse() on Int16Array.from(source) yields [0]=99
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_0500
     * @tc.name testInt16ArrayReverseTestOne005
     * @tc.desc Verify reverse() on Int16Array.from(source) yields [0]=99
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne005() {
    List<Integer> source = new ArrayList<>();
    for (int i = 0; i < 100; i++) {
    source.add(i);
    }
    Int16Array arr = Int16Array.from(source);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 99;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify reverse() on Int16Array.of(-32768) yields [0]=-32768
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_0600
     * @tc.name testInt16ArrayReverseTestOne006
     * @tc.desc Verify reverse() on Int16Array.of(-32768) yields [0]=-32768
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne006() {
    int val = -32768;
    Int16Array arr = Int16Array.of(val);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify reverse() on Int16Array.of(-1) yields [0]=-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_0700
     * @tc.name testInt16ArrayReverseTestOne007
     * @tc.desc Verify reverse() on Int16Array.of(-1) yields [0]=-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne007() {
    int val = -1;
    Int16Array arr = Int16Array.of(val);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -1;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify reverse() on Int16Array.of(32767, -32768) yields [0]=-32768 [1]=32767
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_0800
     * @tc.name testInt16ArrayReverseTestOne008
     * @tc.desc Verify reverse() on Int16Array.of(32767, -32768) yields [0]=-32768 [1]=32767
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne008() {
    Int16Array arr = Int16Array.of(32767, -32768);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 32767;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify reverse() on Int16Array.of(0, -1) yields [0]=-1 [1]=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_0900
     * @tc.name testInt16ArrayReverseTestOne009
     * @tc.desc Verify reverse() on Int16Array.of(0, -1) yields [0]=-1 [1]=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne009() {
    Int16Array arr = Int16Array.of(0, -1);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 0;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify reverse() on Int16Array.of(32767, 32767) yields [0]=32767 [1]=32767
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_1000
     * @tc.name testInt16ArrayReverseTestOne010
     * @tc.desc Verify reverse() on Int16Array.of(32767, 32767) yields [0]=32767 [1]=32767
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne010() {
    Int16Array arr = Int16Array.of(32767, 32767);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 32767;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 32767;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify reverse() on Int16Array.of(-32768, 0, 32767) yields [1]=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_1100
     * @tc.name testInt16ArrayReverseTestOne011
     * @tc.desc Verify reverse() on Int16Array.of(-32768, 0, 32767) yields [1]=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne011() {
    Int16Array arr = Int16Array.of(-32768, 0, 32767);
    arr.reverse();
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 0;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify reverse() on Int16Array.of(1, -32768, 3) yields [1]=-32768
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_1200
     * @tc.name testInt16ArrayReverseTestOne012
     * @tc.desc Verify reverse() on Int16Array.of(1, -32768, 3) yields [1]=-32768
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne012() {
    Int16Array arr = Int16Array.of(1, -32768, 3);
    arr.reverse();
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = -32768;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify reverse() on Int16Array.of(-32768, -1, 0, 32767) yields [0]=32767 [1]=0 [2]=-1 [3]=-32768
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_1300
     * @tc.name testInt16ArrayReverseTestOne013
     * @tc.desc Verify reverse() on Int16Array.of(-32768, -1, 0, 32767) yields [0]=32767 [1]=0 [2]=-1 [3]=-32768
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne013() {
    Int16Array arr = Int16Array.of(-32768, -1, 0, 32767);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 32767;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 0;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = -1;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = -32768;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse() on Int16Array.of(-32768, -32768, 32767, 32767) yields [0]=3276
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_1400
     * @tc.name testInt16ArrayReverseTestOne014
     * @tc.desc Verify reverse() on Int16Array.of(-32768, -32768, 32767, 32767) yields [0]=3276
     * 7 [1]=32767 [2]=-32768 [3]=-32768
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne014() {
    Int16Array arr = Int16Array.of(-32768, -32768, 32767, 32767);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 32767;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 32767;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = -32768;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = -32768;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse() on Int16Array.of(-32768, -2, 0, 2, 32767) yields [0]=32767 [1]=2 [2]=0 [3]=-2...
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_1500
     * @tc.name testInt16ArrayReverseTestOne015
     * @tc.desc Verify reverse() on Int16Array.of(-32768, -2, 0, 2, 32767) yields [0]=32767 [1]=2 [2]=0 [3]=-2...
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne015() {
    Int16Array arr = Int16Array.of(-32768, -2, 0, 2, 32767);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 32767;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 0;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = -2;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = arr.get(4);
    int expectedElement4 = -32768;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify reverse() on Int16Array.of(-1, -1, -1, -1, -1) yields [0]=-1 [2]=-1 [4]=-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_1600
     * @tc.name testInt16ArrayReverseTestOne016
     * @tc.desc Verify reverse() on Int16Array.of(-1, -1, -1, -1, -1) yields [0]=-1 [2]=-1 [4]=-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne016() {
    Int16Array arr = Int16Array.of(-1, -1, -1, -1, -1);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = -1;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt4 = arr.get(4);
    int expectedElement4 = -1;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify reverse() on Int16Array.of(-32768, 0, 0, 0, 0, 0, 32767) yields [6]=-32768
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_1700
     * @tc.name testInt16ArrayReverseTestOne017
     * @tc.desc Verify reverse() on Int16Array.of(-32768, 0, 0, 0, 0, 0, 32767) yields [6]=-32768
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne017() {
    Int16Array arr = Int16Array.of(-32768, 0, 0, 0, 0, 0, 32767);
    arr.reverse();
    Integer elementAt6 = arr.get(6);
    int expectedElement6 = -32768;
    assertEqualInt(expectedElement6, elementAt6);
    }

    /**
     * Verify reverse() on Int16Array.of(-32768, 0, 0, 0, 0, 0, 32767) yields [0]=32767
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_1800
     * @tc.name testInt16ArrayReverseTestOne018
     * @tc.desc Verify reverse() on Int16Array.of(-32768, 0, 0, 0, 0, 0, 32767) yields [0]=32767
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne018() {
    Int16Array arr = Int16Array.of(-32768, 0, 0, 0, 0, 0, 32767);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 32767;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify reverse() on Int16Array.of(-32768, 0, 0, 0, 0, 0, 0, 32767) yields [0]=32767 [7]=-32768
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_1900
     * @tc.name testInt16ArrayReverseTestOne019
     * @tc.desc Verify reverse() on Int16Array.of(-32768, 0, 0, 0, 0, 0, 0, 32767) yields [0]=32767 [7]=-32768
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne019() {
    Int16Array arr = Int16Array.of(-32768, 0, 0, 0, 0, 0, 0, 32767);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 32767;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt7 = arr.get(7);
    int expectedElement7 = -32768;
    assertEqualInt(expectedElement7, elementAt7);
    }

    /**
     * Verify reverse() on Int16Array.of(32767, 32767, 32767) yields [0]=32767 [1]=32767 [2]=32767
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_2000
     * @tc.name testInt16ArrayReverseTestOne020
     * @tc.desc Verify reverse() on Int16Array.of(32767, 32767, 32767) yields [0]=32767 [1]=32767 [2]=32767
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne020() {
    Int16Array arr = Int16Array.of(32767, 32767, 32767);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 32767;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 32767;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 32767;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() on Int16Array.of(-32768, -32768, -32768) yields [0]=-32768 [1]=-32768 [2]=-32768
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_2100
     * @tc.name testInt16ArrayReverseTestOne021
     * @tc.desc Verify reverse() on Int16Array.of(-32768, -32768, -32768) yields [0]=-32768 [1]=-32768 [2]=-32768
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne021() {
    Int16Array arr = Int16Array.of(-32768, -32768, -32768);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = -32768;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = -32768;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() on Int16Array.of(32766, 32767, -32768, -32767) yields [0]=-327
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_2200
     * @tc.name testInt16ArrayReverseTestOne022
     * @tc.desc Verify reverse() on Int16Array.of(32766, 32767, -32768, -32767) yields [0]=-327
     * 67 [1]=-32768 [2]=32767 [3]=32766
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne022() {
    Int16Array arr = Int16Array.of(32766, 32767, -32768, -32767);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -32767;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = -32768;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 32767;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 32766;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse() on Int16Array.from([1, 2, 3]) yields [0]=3 [2]=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_2300
     * @tc.name testInt16ArrayReverseTestOne023
     * @tc.desc Verify reverse() on Int16Array.from([1, 2, 3]) yields [0]=3 [2]=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne023() {
    Int16Array arr = Int16Array.from(new int[] {1, 2, 3});
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 3;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 1;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() yields [0]=10 [3]=40
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_2400
     * @tc.name testInt16ArrayReverseTestOne024
     * @tc.desc Verify reverse() yields [0]=10 [3]=40
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne024() {
    Int16Array orig = Int16Array.of(10, 20, 30, 40);
    orig.reverse();
    Int16Array copy = new Int16Array(orig);
    copy.reverse();
    Integer elementAt0 = copy.get(0);
    int expectedElement0 = 10;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt3 = copy.get(3);
    int expectedElement3 = 40;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse() on Int16Array.of(-100, -200, -300) yields [0]=-300 [2]=-100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_2500
     * @tc.name testInt16ArrayReverseTestOne025
     * @tc.desc Verify reverse() on Int16Array.of(-100, -200, -300) yields [0]=-300 [2]=-100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne025() {
    Int16Array arr = Int16Array.of(-100, -200, -300);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -300;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = -100;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() on new Int16Array([32768, 1, 2]) yields [2]=-32768
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_2600
     * @tc.name testInt16ArrayReverseTestOne026
     * @tc.desc Verify reverse() on new Int16Array([32768, 1, 2]) yields [2]=-32768
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne026() {
    Int16Array arr = new Int16Array(new int[] {32768, 1, 2});
    arr.reverse();
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = -32768;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() on new Int16Array([-32769, 1, 2]) yields [2]=32767
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_2700
     * @tc.name testInt16ArrayReverseTestOne027
     * @tc.desc Verify reverse() on new Int16Array([-32769, 1, 2]) yields [2]=32767
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne027() {
    Int16Array arr = new Int16Array(new int[] {-32769, 1, 2});
    arr.reverse();
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 32767;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() on new Int16Array(3) yields [2]=-3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_2800
     * @tc.name testInt16ArrayReverseTestOne028
     * @tc.desc Verify reverse() on new Int16Array(3) yields [2]=-3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne028() {
    Int16Array arr = new Int16Array(3);
    arr.set(0, -3.7);
    arr.set(1, 90);
    arr.set(2, 100);
    arr.reverse();
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = -3;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() on Int16Array.of(-32768, 1, 2, 32767) yields [0]=-32768 [3]=32767
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_2900
     * @tc.name testInt16ArrayReverseTestOne029
     * @tc.desc Verify reverse() on Int16Array.of(-32768, 1, 2, 32767) yields [0]=-32768 [3]=32767
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne029() {
    Int16Array arr = Int16Array.of(-32768, 1, 2, 32767);
    arr.reverse();
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 32767;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse() on Int16Array.of(32767, 32767, 32767, 32767) yields [0]=32767 [2]=32767 [3]=32767
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_3000
     * @tc.name testInt16ArrayReverseTestOne030
     * @tc.desc Verify reverse() on Int16Array.of(32767, 32767, 32767, 32767) yields [0]=32767 [2]=32767 [3]=32767
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne030() {
    Int16Array arr = Int16Array.of(32767, 32767, 32767, 32767);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 32767;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 32767;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 32767;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse() on new Int16Array([32768, 42]) yields [0]=42 [1]=-32768
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_3100
     * @tc.name testInt16ArrayReverseTestOne031
     * @tc.desc Verify reverse() on new Int16Array([32768, 42]) yields [0]=42 [1]=-32768
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne031() {
    Int16Array arr = new Int16Array(new int[] {32768, 42});
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 42;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = -32768;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify reverse() on new Int16Array([-32769, 17]) yields [0]=17 [1]=32767
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_3200
     * @tc.name testInt16ArrayReverseTestOne032
     * @tc.desc Verify reverse() on new Int16Array([-32769, 17]) yields [0]=17 [1]=32767
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne032() {
    Int16Array arr = new Int16Array(new int[] {-32769, 17});
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 17;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 32767;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify reverse() on ArrayBuffer-backed Int16Array view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_3300
     * @tc.name testInt16ArrayReverseTestOne033
     * @tc.desc Verify reverse() on ArrayBuffer-backed Int16Array view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne033() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array arr = new Int16Array(buf, 0, 2);
    arr.reverse();
    ArrayBuffer actualValue1 = arr.buffer();
    ArrayBuffer expectedValue1 = buf;
    assertEqual(expectedValue1, actualValue1);
    }

    /**
     * Verify reverse() preserves length on Int16Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_3400
     * @tc.name testInt16ArrayReverseTestOne034
     * @tc.desc Verify reverse() preserves length on Int16Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne034() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    int lenBefore = arr.length();
    arr.reverse();
    int actualLength = arr.length();
    int expectedLength = lenBefore;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify reverse() returns non-null Int16Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_3500
     * @tc.name testInt16ArrayReverseTestOne035
     * @tc.desc Verify reverse() returns non-null Int16Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne035() {
    Int16Array arr = new Int16Array(new int[] {32767, -32768});
    Int16Array result = arr.reverse();
    int actualLength = result.length();
    int expectedLength = arr.length();
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify reverse() element values [0]=4, [1]=3, [2]=2, [3]=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_3600
     * @tc.name testInt16ArrayReverseTestOne036
     * @tc.desc Verify reverse() element values [0]=4, [1]=3, [2]=2, [3]=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne036() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    Int16Array result = arr.reverse();
    Integer elementAt0 = result.get(0);
    int expectedElement0 = 4;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = result.get(1);
    int expectedElement1 = 3;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = result.get(2);
    int expectedElement2 = 2;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = result.get(3);
    int expectedElement3 = 1;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse() swaps int16.MAX and int16.MIN
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_3700
     * @tc.name testInt16ArrayReverseTestOne037
     * @tc.desc Verify reverse() swaps int16.MAX and int16.MIN
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne037() {
    Int16Array arr = new Int16Array(new int[] {32767, 0, -32768});
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 32767;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() length equals byteLength divided by BYTES_PER_ELEMENT
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_3800
     * @tc.name testInt16ArrayReverseTestOne038
     * @tc.desc Verify reverse() length equals byteLength divided by BYTES_PER_ELEMENT
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne038() {
    Int16Array arr = new Int16Array(new int[] {7, 8, 9});
    arr.reverse();
    int actualLength = arr.length();
    int expectedLength = arr.byteLength() / Int16Array.BYTES_PER_ELEMENT;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify reverse() on new Int16Array(100) keeps length unchanged equal to 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_3900
     * @tc.name testInt16ArrayReverseTestOne039
     * @tc.desc Verify reverse() on new Int16Array(100) keeps length unchanged equal to 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne039() {
    Int16Array arr = new Int16Array(100);
    arr.set(0, 1);
    arr.set(99, 2);
    int lenBefore = arr.length();
    arr.reverse();
    int actualLength = arr.length();
    int expectedLength = lenBefore;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify reverse byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_4000
     * @tc.name testInt16ArrayReverseTestOne040
     * @tc.desc Verify reverse byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne040() {
    Int16Array arr = new Int16Array(new int[] {});
    arr.reverse();
    int actualByteLength = arr.byteLength();
    int expectedByteLength = 0;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify reverse().$_get(0) on new Int16Array([10, 20, 30]) returns reversed element 30
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_4100
     * @tc.name testInt16ArrayReverseTestOne041
     * @tc.desc Verify reverse().$_get(0) on new Int16Array([10, 20, 30]) returns reversed element 30
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne041() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Integer val = arr.reverse().get(0);
    assertEqualInt(30, val);
    }

    /**
     * Verify reverse().join(',') returns reversed string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_4200
     * @tc.name testInt16ArrayReverseTestOne042
     * @tc.desc Verify reverse().join(',') returns reversed string
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne042() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    String s = arr.reverse().join(",");
    assertEqual("3,2,1", s);
    }

    /**
     * Verify reverse().fill(0) fills reversed array with zeros
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_4300
     * @tc.name testInt16ArrayReverseTestOne043
     * @tc.desc Verify reverse().fill(0) fills reversed array with zeros
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne043() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    arr.reverse().fill(0);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 0;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 0;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse().sort() sorts reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_4400
     * @tc.name testInt16ArrayReverseTestOne044
     * @tc.desc Verify reverse().sort() sorts reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne044() {
    Int16Array arr = new Int16Array(new int[] {3, 1, 4, 2});
    arr.reverse().sort();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 4;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse().copyWithin operates on reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_4500
     * @tc.name testInt16ArrayReverseTestOne045
     * @tc.desc Verify reverse().copyWithin operates on reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne045() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    arr.reverse().copyWithin(0, 1);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 3;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify reverse().slice() copies reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_4600
     * @tc.name testInt16ArrayReverseTestOne046
     * @tc.desc Verify reverse().slice() copies reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne046() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    Int16Array sliced = arr.reverse().slice();
    Integer elementAt0 = sliced.get(0);
    int expectedElement0 = 3;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt2 = sliced.get(2);
    int expectedElement2 = 1;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse().subarray() views reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_4700
     * @tc.name testInt16ArrayReverseTestOne047
     * @tc.desc Verify reverse().subarray() views reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne047() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array view = arr.reverse().subarray();
    Integer elementAt0 = view.get(0);
    int expectedElement0 = 30;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt2 = view.get(2);
    int expectedElement2 = 10;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse().reverse() restores original order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_4800
     * @tc.name testInt16ArrayReverseTestOne048
     * @tc.desc Verify reverse().reverse() restores original order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne048() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    arr.reverse().reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 4;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse().includes() searches reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_4900
     * @tc.name testInt16ArrayReverseTestOne049
     * @tc.desc Verify reverse().includes() searches reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne049() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    boolean found = arr.reverse().includes(1);
    assertTrue(found);
    }

    /**
     * Verify reverse().lastIndexOf() finds index in reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_5000
     * @tc.name testInt16ArrayReverseTestOne050
     * @tc.desc Verify reverse().lastIndexOf() finds index in reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne050() {
    Int16Array arr = new Int16Array(new int[] {5, 5, 10});
    int idx = arr.reverse().lastIndexOf(5);
    assertEqual(2, idx);
    }

    /**
     * Verify reverse().every() runs on reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_5100
     * @tc.name testInt16ArrayReverseTestOne051
     * @tc.desc Verify reverse().every() runs on reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne051() {
    Int16Array arr = new Int16Array(new int[] {3, 6, 9});
    boolean allPositive = arr.reverse().every((v) -> {
        return v > 0;
        });
    assertTrue(allPositive);
    }

    /**
     * Verify reverse().some() runs on reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_5200
     * @tc.name testInt16ArrayReverseTestOne052
     * @tc.desc Verify reverse().some() runs on reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne052() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    boolean hasEven = arr.reverse().some((v) -> {
        return v % 2 == 0;
        });
    assertTrue(hasEven);
    }

    /**
     * Verify reverse().find() finds value in reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_5300
     * @tc.name testInt16ArrayReverseTestOne053
     * @tc.desc Verify reverse().find() finds value in reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne053() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    Integer found = arr.reverse().find((v) -> {
        return v == 3;
        });
    assertEqualInt(3, found);
    }

    /**
     * Verify reverse().findIndex() finds index in reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_5400
     * @tc.name testInt16ArrayReverseTestOne054
     * @tc.desc Verify reverse().findIndex() finds index in reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne054() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    int idx = arr.reverse().findIndex((v) -> {
        return v == 100;
        });
    assertEqual(2, idx);
    }

    /**
     * Verify reverse().reduce() reduces reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_5500
     * @tc.name testInt16ArrayReverseTestOne055
     * @tc.desc Verify reverse().reduce() reduces reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne055() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int sum = arr.reverse().reduce((acc, v, index, array) -> {
        return acc + v;
        }, 0);
    assertEqual(6, sum);
    }

    /**
     * Verify reverse().reduceRight() reduces reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_5600
     * @tc.name testInt16ArrayReverseTestOne056
     * @tc.desc Verify reverse().reduceRight() reduces reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne056() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int sum = arr.reverse().reduceRight((acc, v, index, array) -> {
        return acc + v;
        }, 0);
    assertEqual(6, sum);
    }

    /**
     * Verify reverse().forEach() iterates reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_5700
     * @tc.name testInt16ArrayReverseTestOne057
     * @tc.desc Verify reverse().forEach() iterates reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne057() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int[] count = {0};
    arr.reverse().forEach((unusedVal, unusedIndex, a) -> {
    count[0] = count[0] + 1;
    });
    assertEqual(3, count[0]);
    }

    /**
     * Verify reverse().map() maps reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_5800
     * @tc.name testInt16ArrayReverseTestOne058
     * @tc.desc Verify reverse().map() maps reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne058() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    Int16Array mapped = arr.reverse().map((v) -> {
        return v * 10;
        });
    Integer elementAt0 = mapped.get(0);
    int expectedElement0 = 30;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify reverse().filter() filters reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_5900
     * @tc.name testInt16ArrayReverseTestOne059
     * @tc.desc Verify reverse().filter() filters reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne059() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    Int16Array filtered = arr.reverse().filter((v) -> {
        return v > 2;
        });
    Integer elementAt0 = filtered.get(0);
    int expectedElement0 = 4;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify reverse().toString() stringifies reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_6000
     * @tc.name testInt16ArrayReverseTestOne060
     * @tc.desc Verify reverse().toString() stringifies reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne060() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    String s = arr.reverse().toString();
    assertEqual("3,2,1", s);
    }

    /**
     * Verify reverse() shared buffer mutation via result is visible
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_6100
     * @tc.name testInt16ArrayReverseTestOne061
     * @tc.desc Verify reverse() shared buffer mutation via result is visible
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne061() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    Int16Array result = arr.reverse();
    result.set(0, 99);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 99;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify reverse() keeps NaN truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_6200
     * @tc.name testInt16ArrayReverseTestOne062
     * @tc.desc Verify reverse() keeps NaN truncated to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne062() {
    Int16Array arr = new Int16Array(new double[] {Double.NaN, 2, 3});
    arr.reverse();
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 0;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify reverse() on empty Int16Array returns same object identity
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_6300
     * @tc.name testInt16ArrayReverseTestOne063
     * @tc.desc Verify reverse() on empty Int16Array returns same object identity
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne063() {
    Int16Array arr = new Int16Array();
    Int16Array ret = arr.reverse();
    assertEqual(arr, ret);
    }

    /**
     * Verify reverse() on ArrayBuffer view returns same object identity
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_6400
     * @tc.name testInt16ArrayReverseTestOne064
     * @tc.desc Verify reverse() on ArrayBuffer view returns same object identity
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne064() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array arr = new Int16Array(buf, 0, 3);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    Int16Array ret = arr.reverse();
    assertEqual(arr, ret);
    Integer actualElement0 = ret.get(0);
    int expectedElement0 = 3;
    assertEqualInt(expectedElement0, actualElement0);
    Integer actualElement1 = ret.get(1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, actualElement1);
    Integer actualElement2 = ret.get(2);
    int expectedElement2 = 1;
    assertEqualInt(expectedElement2, actualElement2);
    }

    /**
     * Verify reverse() return ref mutation is visible via original ref
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_6500
     * @tc.name testInt16ArrayReverseTestOne065
     * @tc.desc Verify reverse() return ref mutation is visible via original ref
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne065() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array ret = arr.reverse();
    ret.set(0, 999);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 999;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify reverse() mid and final refs are same object after two reverses
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_6600
     * @tc.name testInt16ArrayReverseTestOne066
     * @tc.desc Verify reverse() mid and final refs are same object after two reverses
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne066() {
    Int16Array arr = Int16Array.of(7, 14, 21);
    Int16Array mid = arr.reverse();
    Int16Array fin = arr.reverse();
    assertEqual(fin, mid);
    }

    /**
     * Verify reverse() then fill via return ref updates original elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_6700
     * @tc.name testInt16ArrayReverseTestOne067
     * @tc.desc Verify reverse() then fill via return ref updates original elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne067() {
    Int16Array arr = Int16Array.of(100, 200, 300, 400);
    Int16Array ret = arr.reverse();
    ret.fill(0);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 0;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 0;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify reverse() all-overflow array stays all -32768
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_REVERSE_ONE_6800
     * @tc.name testInt16ArrayReverseTestOne068
     * @tc.desc Verify reverse() all-overflow array stays all -32768
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayReverseTestOne068() {
    Int16Array arr = new Int16Array(new int[] {32768, 32768, 32768, 32768});
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = -32768;
    assertEqualInt(expectedElement3, elementAt3);
    }
}
