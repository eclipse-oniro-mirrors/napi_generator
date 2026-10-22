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

package basetype.int32array;

import basetype.common.Int32Array;
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.RangeError;

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayConstructorPart03Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayConstructorPart03Test extends BasTest {
    /**
     * Verify number number length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_0100
     * @tc.name int32ArrayConstructorPart03TestMindmapTest001
     * @tc.desc Verify number number length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest001() {
    Int32Array arr = new Int32Array(3);
    assertEqual(3, arr.length());
    }

    /**
     * Verify length 0 Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_0200
     * @tc.name int32ArrayConstructorPart03TestMindmapTest002
     * @tc.desc Verify length 0 Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest002() {
    Int32Array arr = new Int32Array(0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify length -0 +0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_0300
     * @tc.name int32ArrayConstructorPart03TestMindmapTest003
     * @tc.desc Verify length -0 +0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest003() {
    Int32Array arr = new Int32Array(-0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify length 2.9 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_0400
     * @tc.name int32ArrayConstructorPart03TestMindmapTest004
     * @tc.desc Verify length 2.9 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest004() {
    Int32Array arr = new Int32Array(2.9);
    assertEqual(2, arr.length());
    }

    /**
     * Verify length Number.NaN ToIndex(Number.NaN)=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_0500
     * @tc.name int32ArrayConstructorPart03TestMindmapTest005
     * @tc.desc Verify length Number.NaN ToIndex(Number.NaN)=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest005() {
    Int32Array arr = new Int32Array(Double.NaN);
    assertEqual(0, arr.length());
    }

    /**
     * Verify length 7.0 7 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_0600
     * @tc.name int32ArrayConstructorPart03TestMindmapTest006
     * @tc.desc Verify length 7.0 7 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest006() {
    Int32Array arr = new Int32Array(7.0);
    assertEqual(7, arr.length());
    assertEqualInt(0, arr.get(3));
    assertEqualInt(0, arr.get(6));
    }

    /**
     * Verify length +Number.POSITIVE_INFINITY RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_0700
     * @tc.name int32ArrayConstructorPart03TestMindmapTest007
     * @tc.desc Verify length +Number.POSITIVE_INFINITY RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest007() {
    try {
    new Int32Array(Double.POSITIVE_INFINITY);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length Double.NEGATIVE_INFINITY RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_0800
     * @tc.name int32ArrayConstructorPart03TestMindmapTest008
     * @tc.desc Verify length Double.NEGATIVE_INFINITY RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest008() {
    try {
    new Int32Array(Double.NEGATIVE_INFINITY);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length -2.3 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_0900
     * @tc.name int32ArrayConstructorPart03TestMindmapTest009
     * @tc.desc Verify length -2.3 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest009() {
    try {
    new Int32Array(-2.3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify number length=4 byteLength 16
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_1000
     * @tc.name int32ArrayConstructorPart03TestMindmapTest010
     * @tc.desc Verify number length=4 byteLength 16
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest010() {
    Int32Array arr = new Int32Array(4);
    assertEqual(16, arr.byteLength());
    }

    /**
     * Verify number byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_1100
     * @tc.name int32ArrayConstructorPart03TestMindmapTest011
     * @tc.desc Verify number byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest011() {
    Int32Array arr = new Int32Array(6.0);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify number ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_1200
     * @tc.name int32ArrayConstructorPart03TestMindmapTest012
     * @tc.desc Verify number ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest012() {
    Int32Array a = new Int32Array(3);
    Int32Array b = new Int32Array(3);
    a.set(0, 55);
    assertEqualInt(0, b.get(0));
    }

    /**
     * Verify number 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_1300
     * @tc.name int32ArrayConstructorPart03TestMindmapTest013
     * @tc.desc Verify number 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest013() {
    Int32Array arr = new Int32Array(5);
    for (int i = 0; i < arr.length(); i++) {
    assertEqualInt(0, arr.get(i));
    }
    }

    /**
     * Verify number buffer.byteLength length*4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_1400
     * @tc.name int32ArrayConstructorPart03TestMindmapTest014
     * @tc.desc Verify number buffer.byteLength length*4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest014() {
    Int32Array arr = new Int32Array(3);
    assertEqual(12, arr.buffer().byteLength());
    }

    /**
     * Verify number buffer.byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_1600
     * @tc.name int32ArrayConstructorPart03TestMindmapTest016
     * @tc.desc Verify number buffer.byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest016() {
    Int32Array arr = new Int32Array(0);
    assertEqual(0, arr.buffer().byteLength());
    assertEqual(0, arr.byteLength());
    }

    /**
     * Verify length Math.PI(3.14159) 3 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_1700
     * @tc.name int32ArrayConstructorPart03TestMindmapTest017
     * @tc.desc Verify length Math.PI(3.14159) 3 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest017() {
    Int32Array arr = new Int32Array(3.14159);
    assertEqual(3, arr.length());
    }

    /**
     * Verify length 4294967296.0 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_1800
     * @tc.name int32ArrayConstructorPart03TestMindmapTest018
     * @tc.desc Verify length 4294967296.0 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest018() {
    try {
    new Int32Array(4294967296.0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify ArrayBuffer ArrayBuffer /4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_1900
     * @tc.name int32ArrayConstructorPart03TestMindmapTest019
     * @tc.desc Verify ArrayBuffer ArrayBuffer /4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest019() {
    ArrayBuffer ab = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(ab);
    assertEqual(2, arr.length());
    }

    /**
     * Verify ArrayLike<Number> ArrayLike
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_2000
     * @tc.name int32ArrayConstructorPart03TestMindmapTest020
     * @tc.desc Verify ArrayLike<Number> ArrayLike
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest020() {
    Int32Array arr = new Int32Array(new int[] {10, 20});
    assertEqual(2, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    }

    /**
     * Verify 0 ArrayBuffer length=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_2100
     * @tc.name int32ArrayConstructorPart03TestMindmapTest021
     * @tc.desc Verify 0 ArrayBuffer length=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest021() {
    ArrayBuffer ab = new ArrayBuffer(0);
    Int32Array arr = new Int32Array(ab);
    assertEqual(0, arr.length());
    assertEqual(0, arr.byteLength());
    }

    /**
     * Verify 4 ArrayBuffer length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_2200
     * @tc.name int32ArrayConstructorPart03TestMindmapTest022
     * @tc.desc Verify 4 ArrayBuffer length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest022() {
    ArrayBuffer ab = new ArrayBuffer(4);
    Int32Array arr = new Int32Array(ab);
    assertEqual(1, arr.length());
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify 12 ArrayBuffer length=3 byteLength=12
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_2300
     * @tc.name int32ArrayConstructorPart03TestMindmapTest023
     * @tc.desc Verify 12 ArrayBuffer length=3 byteLength=12
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest023() {
    ArrayBuffer ab = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(ab);
    assertEqual(3, arr.length());
    assertEqual(12, arr.byteLength());
    }

    /**
     * Verify 40 ArrayBuffer length=10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_2400
     * @tc.name int32ArrayConstructorPart03TestMindmapTest024
     * @tc.desc Verify 40 ArrayBuffer length=10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest024() {
    ArrayBuffer ab = new ArrayBuffer(40);
    Int32Array arr = new Int32Array(ab);
    assertEqual(10, arr.length());
    }

    /**
     * Verify 5 4 ArrayBuffer RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_2500
     * @tc.name int32ArrayConstructorPart03TestMindmapTest025
     * @tc.desc Verify 5 4 ArrayBuffer RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest025() {
    try {
    ArrayBuffer ab = new ArrayBuffer(5);
    new Int32Array(ab);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify 7 4 ArrayBuffer RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_2600
     * @tc.name int32ArrayConstructorPart03TestMindmapTest026
     * @tc.desc Verify 7 4 ArrayBuffer RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest026() {
    try {
    ArrayBuffer ab = new ArrayBuffer(7);
    new Int32Array(ab);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify 1 ArrayBuffer RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_2700
     * @tc.name int32ArrayConstructorPart03TestMindmapTest027
     * @tc.desc Verify 1 ArrayBuffer RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest027() {
    try {
    ArrayBuffer ab = new ArrayBuffer(1);
    new Int32Array(ab);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify 3 4 ArrayBuffer RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_2800
     * @tc.name int32ArrayConstructorPart03TestMindmapTest028
     * @tc.desc Verify 3 4 ArrayBuffer RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest028() {
    try {
    ArrayBuffer ab = new ArrayBuffer(3);
    new Int32Array(ab);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify ArrayBuffer byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_2900
     * @tc.name int32ArrayConstructorPart03TestMindmapTest029
     * @tc.desc Verify ArrayBuffer byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest029() {
    ArrayBuffer ab = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(ab);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify ArrayBuffer byteLength buffer byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_3000
     * @tc.name int32ArrayConstructorPart03TestMindmapTest030
     * @tc.desc Verify ArrayBuffer byteLength buffer byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest030() {
    ArrayBuffer ab = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(ab);
    assertEqual(ab.byteLength(), arr.byteLength());
    }

    /**
     * Verify 20 5 ArrayBuffer length=5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_3100
     * @tc.name int32ArrayConstructorPart03TestMindmapTest031
     * @tc.desc Verify 20 5 ArrayBuffer length=5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest031() {
    ArrayBuffer ab = new ArrayBuffer(20);
    Int32Array arr = new Int32Array(ab);
    assertEqual(5, arr.length());
    assertEqual(20, arr.byteLength());
    }

    /**
     * Verify buffer ArrayBuffer ===
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_3200
     * @tc.name int32ArrayConstructorPart03TestMindmapTest032
     * @tc.desc Verify buffer ArrayBuffer ===
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest032() {
    ArrayBuffer ab = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(ab);
    assertEqual(ab, arr.buffer());
    }

    /**
     * Verify ArrayBuffer 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_3600
     * @tc.name int32ArrayConstructorPart03TestMindmapTest036
     * @tc.desc Verify ArrayBuffer 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest036() {
    ArrayBuffer ab = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(ab);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_3900
     * @tc.name int32ArrayConstructorPart03TestMindmapTest039
     * @tc.desc Verify ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest039() {
    ArrayBuffer ab = new ArrayBuffer(16);
    Int32Array a = new Int32Array(ab);
    Int32Array b = new Int32Array(ab);
    a.set(0, 11);
    a.set(3, 44);
    assertEqualInt(11, b.get(0));
    assertEqualInt(44, b.get(3));
    }

    /**
     * Verify ArrayBuffer fill fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_4100
     * @tc.name int32ArrayConstructorPart03TestMindmapTest041
     * @tc.desc Verify ArrayBuffer fill fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest041() {
    ArrayBuffer ab = new ArrayBuffer(12);
    Int32Array a = new Int32Array(ab);
    Int32Array b = new Int32Array(ab);
    a.fill(9);
    assertEqualInt(9, b.get(0));
    assertEqualInt(9, b.get(1));
    assertEqualInt(9, b.get(2));
    }

    /**
     * Verify ArrayLike length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_4200
     * @tc.name int32ArrayConstructorPart03TestMindmapTest042
     * @tc.desc Verify ArrayLike length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest042() {
    Int32Array arr = new Int32Array(new int[] {99});
    assertEqual(1, arr.length());
    assertEqualInt(99, arr.get(0));
    }

    /**
     * Verify ArrayLike length=0 Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_4300
     * @tc.name int32ArrayConstructorPart03TestMindmapTest043
     * @tc.desc Verify ArrayLike length=0 Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest043() {
    Int32Array arr = new Int32Array(new int[] {});
    assertEqual(0, arr.length());
    }

    /**
     * Verify ArrayLike 0..length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_4400
     * @tc.name int32ArrayConstructorPart03TestMindmapTest044
     * @tc.desc Verify ArrayLike 0..length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest044() {
    Int32Array arr = new Int32Array(new int[] {0, 10, 20, 30});
    assertEqualInt(0, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(20, arr.get(2));
    assertEqualInt(30, arr.get(3));
    }

    /**
     * Verify ArrayLike get 0..length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_4500
     * @tc.name int32ArrayConstructorPart03TestMindmapTest045
     * @tc.desc Verify ArrayLike get 0..length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest045() {
    Int32Array arr = new Int32Array(new int[] {0, 1, 2});
    assertEqual(3, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(1, arr.get(1));
    assertEqualInt(2, arr.get(2));
    }

    /**
     * Verify ArrayLike length=6 index*2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_4600
     * @tc.name int32ArrayConstructorPart03TestMindmapTest046
     * @tc.desc Verify ArrayLike length=6 index*2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest046() {
    Int32Array arr = new Int32Array(new int[] {0, 2, 4, 6, 8, 10});
    assertEqual(6, arr.length());
    assertEqualInt(10, arr.get(5));
    }

    /**
     * Verify ArrayLike three elements [0, 7, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_5000
     * @tc.name int32ArrayConstructorPart03TestMindmapTest050
     * @tc.desc Verify ArrayLike three elements [0, 7, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest050() {
    Int32Array arr = new Int32Array(new int[] {0, 7, 0});
    assertEqualInt(0, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify ArrayLike length 3 ToLength 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_5100
     * @tc.name int32ArrayConstructorPart03TestMindmapTest051
     * @tc.desc Verify ArrayLike length 3 ToLength 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest051() {
    Int32Array arr = new Int32Array(new int[] {0, 1, 2});
    assertEqual(3, arr.length());
    }

    /**
     * Verify ArrayLike get length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_5200
     * @tc.name int32ArrayConstructorPart03TestMindmapTest052
     * @tc.desc Verify ArrayLike get length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest052() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    assertEqual(5, arr.length());
    }

    /**
     * Verify ArrayLike buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_5300
     * @tc.name int32ArrayConstructorPart03TestMindmapTest053
     * @tc.desc Verify ArrayLike buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest053() {
    Int32Array a = new Int32Array(new int[] {1, 2});
    Int32Array b = new Int32Array(new int[] {1, 2});
    a.set(0, 99);
    assertEqualInt(1, b.get(0));
    }

    /**
     * Verify ArrayLike byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_5400
     * @tc.name int32ArrayConstructorPart03TestMindmapTest054
     * @tc.desc Verify ArrayLike byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest054() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0});
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify ArrayLike byteLength length*4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_5500
     * @tc.name int32ArrayConstructorPart03TestMindmapTest055
     * @tc.desc Verify ArrayLike byteLength length*4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest055() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0});
    assertEqual(16, arr.byteLength());
    }

    /**
     * Verify ArrayBuffer-backed Int32Array $_get(length) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_5900
     * @tc.name int32ArrayConstructorPart03TestMindmapTest059
     * @tc.desc Verify ArrayBuffer-backed Int32Array $_get(length) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart03TestMindmapTest059() {
    ArrayBuffer ab = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(ab);
    try {
    arr.get(2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructing Int32Array from Array<int> with 1000 elements throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART03_TEST_MINDMAP_6000
     * @tc.name int32ArrayConstructorPart03TestMindmapTest060
     * @tc.desc Verify constructing Int32Array from Array<int> with 1000 elements throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
