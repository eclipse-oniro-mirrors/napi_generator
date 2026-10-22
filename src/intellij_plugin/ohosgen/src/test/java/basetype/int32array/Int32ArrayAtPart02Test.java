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

package basetype.int32array;

import basetype.common.Int32Array;
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayAtPart02Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayAtPart02Test extends BasTest {
    /**
     * Verify at(0) returns stored value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_0100
     * @tc.name int32ArrayAtPart02TestMindmapTest001
     * @tc.desc Verify at(0) returns stored value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest001() {
    Int32Array a = Int32Array.of(42);
    Integer v = a.at(0);
    assertEqualInt(42, v);
    }

    /**
     * Verify at(99) out-of-bounds undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_0200
     * @tc.name int32ArrayAtPart02TestMindmapTest002
     * @tc.desc Verify at(99) out-of-bounds undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest002() {
    Int32Array a = Int32Array.of(1, 2, 3);
    assertNull(a.at(99));
    }

    /**
     * Verify at + 1 + 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_0300
     * @tc.name int32ArrayAtPart02TestMindmapTest003
     * @tc.desc Verify at + 1 + 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest003() {
    Int32Array a = Int32Array.of(10);
    Integer n = a.at(0);
    int sum = n + 1;
    assertEqual(11, sum);
    }

    /**
     * Verify at 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_0400
     * @tc.name int32ArrayAtPart02TestMindmapTest004
     * @tc.desc Verify at 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest004() {
    Int32Array a = new Int32Array(1);
    Integer n = a.at(0);
    assertEqualInt(0, n);
    }

    /**
     * Verify at(0) returns same value on repeated call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_0700
     * @tc.name int32ArrayAtPart02TestMindmapTest007
     * @tc.desc Verify at(0) returns same value on repeated call
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest007() {
    Int32Array a = Int32Array.of(77);
    Integer n1 = a.at(0);
    Integer n2 = a.at(0);
    assertEqual(n2.intValue(), n1.intValue());
    }

    /**
     * Verify at(0) 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_1000
     * @tc.name int32ArrayAtPart02TestMindmapTest010
     * @tc.desc Verify at(0) 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest010() {
    Int32Array a = Int32Array.of(1);
    assertEqualInt(1, a.at(0));
    }

    /**
     * Verify at(0) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_1200
     * @tc.name int32ArrayAtPart02TestMindmapTest012
     * @tc.desc Verify at(0) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest012() {
    Int32Array a = new Int32Array(1);
    assertEqualInt(0, a.at(0));
    }

    /**
     * Verify fill converts NaN and infinities to zero when read by at
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_1300
     * @tc.name int32ArrayAtPart02TestMindmapTest013
     * @tc.desc Verify fill converts NaN and infinities to zero when read by at
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest013() {
    Int32Array a = new Int32Array(1);
    a.fill(Double.NaN);
    assertEqualInt(0, a.at(0));
    a.fill(Double.POSITIVE_INFINITY);
    assertEqualInt(0, a.at(0));
    a.fill(Double.NEGATIVE_INFINITY);
    assertEqualInt(0, a.at(0));
    }

    /**
     * Verify at(0) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_1600
     * @tc.name int32ArrayAtPart02TestMindmapTest016
     * @tc.desc Verify at(0) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest016() {
    Int32Array a = new Int32Array(1);
    a.set(0, 0);
    assertEqualInt(0, a.at(0));
    }

    /**
     * Verify at byteLength length * 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_1700
     * @tc.name int32ArrayAtPart02TestMindmapTest017
     * @tc.desc Verify at byteLength length * 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest017() {
    Int32Array a = new Int32Array(4);
    a.at(2);
    assertEqual(16, a.byteLength());
    }

    /**
     * Verify byteOffset=4 at byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_1800
     * @tc.name int32ArrayAtPart02TestMindmapTest018
     * @tc.desc Verify byteOffset=4 at byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest018() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 4, 2);
    a.at(0);
    assertEqual(4, a.byteOffset());
    }

    /**
     * Verify at BYTES_PER_ELEMENT 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_1900
     * @tc.name int32ArrayAtPart02TestMindmapTest019
     * @tc.desc Verify at BYTES_PER_ELEMENT 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest019() {
    Int32Array a = Int32Array.of(1, 2);
    a.at(0);
    assertEqual(4, a.BYTES_PER_ELEMENT);
    }

    /**
     * Verify at access does not change length for normal, boundary, and out-of-bounds indices
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_2000
     * @tc.name int32ArrayAtPart02TestMindmapTest020
     * @tc.desc Verify at access does not change length for normal, boundary, and out-of-bounds indices
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest020() {
    Int32Array a = Int32Array.of(10, 20, 30, 40, 50);
    a.at(0);
    a.at(2);
    a.at(-1);
    a.at(5);
    a.at(999);
    a.at(-999);
    assertEqual(5, a.length());
    }

    /**
     * Verify at length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_2100
     * @tc.name int32ArrayAtPart02TestMindmapTest021
     * @tc.desc Verify at length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest021() {
    Int32Array a = new Int32Array(0);
    a.at(0);
    assertEqual(0, a.length());
    }

    /**
     * Verify at ArrayBuffer byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_2200
     * @tc.name int32ArrayAtPart02TestMindmapTest022
     * @tc.desc Verify at ArrayBuffer byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest022() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf);
    a.at(3);
    assertEqual(16, buf.byteLength());
    }

    /**
     * Verify ArrayBuffer at length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_2300
     * @tc.name int32ArrayAtPart02TestMindmapTest023
     * @tc.desc Verify ArrayBuffer at length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest023() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int32Array a = new Int32Array(buf);
    a.at(0);
    assertEqual(0, a.length());
    }

    /**
     * Verify at reads selected elements without changing other Int32Array elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_2400
     * @tc.name int32ArrayAtPart02TestMindmapTest024
     * @tc.desc Verify at reads selected elements without changing other Int32Array elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest024() {
    Int32Array a = Int32Array.of(11, 22, 33);
    assertEqualInt(11, a.at(0));
    assertEqualInt(22, a.at(1));
    assertEqualInt(11, a.get(0));
    assertEqualInt(22, a.get(1));
    assertEqualInt(33, a.get(2));
    }

    /**
     * Verify at(999)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_2600
     * @tc.name int32ArrayAtPart02TestMindmapTest026
     * @tc.desc Verify at(999)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest026() {
    Int32Array a = Int32Array.of(1, 2, 3, 4, 5);
    Integer r = a.at(999);
    assertNull(r);
    assertEqualInt(1, a.get(0));
    assertEqualInt(5, a.get(4));
    }

    /**
     * Verify at
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_2700
     * @tc.name int32ArrayAtPart02TestMindmapTest027
     * @tc.desc Verify at
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest027() {
    Int32Array a = Int32Array.of(50);
    Integer r = a.at(0);
    assertEqualInt(50, r);
    assertEqualInt(50, a.get(0));
    Integer returned = a.at(0);
    returned = returned * 100;
    assertEqualInt(50, a.get(0));
    }

    /**
     * Verify at(-2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_2800
     * @tc.name int32ArrayAtPart02TestMindmapTest028
     * @tc.desc Verify at(-2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest028() {
    Int32Array a = Int32Array.of(10, 20, 30, 40);
    Integer r = a.at(-2);
    assertEqualInt(30, r);
    assertEqualInt(40, a.get(3));
    assertEqualInt(10, a.get(0));
    }

    /**
     * Verify at undefined Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_3000
     * @tc.name int32ArrayAtPart02TestMindmapTest030
     * @tc.desc Verify at undefined Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest030() {
    Int32Array a = Int32Array.of(1);
    Integer v = a.at(5);
    assertNull(v);
    }

    /**
     * Verify at reads both positive endpoint elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_3100
     * @tc.name int32ArrayAtPart02TestMindmapTest031
     * @tc.desc Verify at reads both positive endpoint elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest031() {
    Int32Array a = Int32Array.of(10, 20, 30);
    assertEqualInt(10, a.at(0));
    assertEqualInt(30, a.at(2));
    }

    /**
     * Verify index at
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_3200
     * @tc.name int32ArrayAtPart02TestMindmapTest032
     * @tc.desc Verify index at
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest032() {
    Int32Array a = Int32Array.of(99);
    Integer valFirst = a.at(0);
    Integer valSecond = a.at(0);
    assertEqualInt(99, valFirst);
    assertEqualInt(99, valSecond);
    }

    /**
     * Verify at returns the expected numeric value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_3300
     * @tc.name int32ArrayAtPart02TestMindmapTest033
     * @tc.desc Verify at returns the expected numeric value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest033() {
    Int32Array a = Int32Array.of(1);
    Integer result = a.at(0);
    assertEqualInt(1, result);
    }

    /**
     * Verify positive and negative out-of-bounds access on an empty Int32Array returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_3400
     * @tc.name int32ArrayAtPart02TestMindmapTest034
     * @tc.desc Verify positive and negative out-of-bounds access on an empty Int32Array returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest034() {
    Int32Array a = new Int32Array(0);
    assertNull(a.at(0));
    assertNull(a.at(-1));
    }

    /**
     * Verify at(length) undefined 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_3500
     * @tc.name int32ArrayAtPart02TestMindmapTest035
     * @tc.desc Verify at(length) undefined 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest035() {
    Int32Array a = Int32Array.of(0, 0, 0);
    assertNull(a.at(3));
    }

    /**
     * Verify at === undefined true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_3600
     * @tc.name int32ArrayAtPart02TestMindmapTest036
     * @tc.desc Verify at === undefined true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest036() {
    Int32Array a = Int32Array.of(1, 2);
    Integer v = a.at(100);
    boolean isUndef = v == null;
    assertTrue(isUndef);
    }

    /**
     * Verify at undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_3700
     * @tc.name int32ArrayAtPart02TestMindmapTest037
     * @tc.desc Verify at undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest037() {
    Int32Array a = Int32Array.of(5);
    Integer v = a.at(0);
    boolean isUndef = v == null;
    assertFalse(isUndef);
    }

    /**
     * Verify at(1) undefined at(-2) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_3800
     * @tc.name int32ArrayAtPart02TestMindmapTest038
     * @tc.desc Verify at(1) undefined at(-2) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest038() {
    Int32Array a = Int32Array.of(42);
    assertNull(a.at(1));
    assertNull(a.at(-2));
    }

    /**
     * Verify undefined null at undefined null
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_3900
     * @tc.name int32ArrayAtPart02TestMindmapTest039
     * @tc.desc Verify undefined null at undefined null
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest039() {
    Int32Array a = Int32Array.of(1);
    Integer v = a.at(99);
    assertNull(v);
    }

    /**
     * Verify new Int32Array(3) at(0)/at(1)/at(2) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_4000
     * @tc.name int32ArrayAtPart02TestMindmapTest040
     * @tc.desc Verify new Int32Array(3) at(0)/at(1)/at(2) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest040() {
    Int32Array a = new Int32Array(3);
    assertEqualInt(0, a.at(0));
    assertEqualInt(0, a.at(1));
    assertEqualInt(0, a.at(2));
    }

    /**
     * Verify Int32Array.from([10, 20]) at(-1) 20
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_4200
     * @tc.name int32ArrayAtPart02TestMindmapTest042
     * @tc.desc Verify Int32Array.from([10, 20]) at(-1) 20
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest042() {
    Int32Array a = Int32Array.from(new int[] {10, 20});
    assertEqualInt(20, a.at(-1));
    }

    /**
     * Verify ArrayBuffer at(0)/at(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_4400
     * @tc.name int32ArrayAtPart02TestMindmapTest044
     * @tc.desc Verify ArrayBuffer at(0)/at(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest044() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array a = new Int32Array(buf);
    assertEqualInt(0, a.at(0));
    assertEqualInt(0, a.at(1));
    }

    /**
     * Verify byteOffset=8 at(0)/at(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_4600
     * @tc.name int32ArrayAtPart02TestMindmapTest046
     * @tc.desc Verify byteOffset=8 at(0)/at(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest046() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array parent = new Int32Array(buf);
    parent.set(2, 111);
    parent.set(3, 222);
    Int32Array child = new Int32Array(buf, 8, 2);
    assertEqualInt(111, child.at(0));
    assertEqualInt(222, child.at(1));
    }

    /**
     * Verify fill(9) at 9
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_4700
     * @tc.name int32ArrayAtPart02TestMindmapTest047
     * @tc.desc Verify fill(9) at 9
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest047() {
    Int32Array a = new Int32Array(3);
    a.fill(9);
    assertEqualInt(9, a.at(1));
    }

    /**
     * Verify set([11, 22, 33], 0) at
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_4800
     * @tc.name int32ArrayAtPart02TestMindmapTest048
     * @tc.desc Verify set([11, 22, 33], 0) at
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest048() {
    Int32Array a = new Int32Array(3);
    a.set(new Int32Array(new int[] {11, 22, 33}), 0);
    assertEqualInt(11, a.at(0));
    assertEqualInt(33, a.at(2));
    }

    /**
     * Verify reverse() at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_5000
     * @tc.name int32ArrayAtPart02TestMindmapTest050
     * @tc.desc Verify reverse() at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest050() {
    Int32Array a = Int32Array.of(1, 2, 3);
    a.reverse();
    assertEqualInt(3, a.at(0));
    }

    /**
     * Verify sort() at(0) at(length-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_5100
     * @tc.name int32ArrayAtPart02TestMindmapTest051
     * @tc.desc Verify sort() at(0) at(length-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest051() {
    Int32Array a = Int32Array.of(30, 10, 20);
    a.sort();
    assertEqualInt(10, a.at(0));
    assertEqualInt(30, a.at(2));
    }

    /**
     * Verify copyWithin(2, 0, 2) at(2)/at(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_5200
     * @tc.name int32ArrayAtPart02TestMindmapTest052
     * @tc.desc Verify copyWithin(2, 0, 2) at(2)/at(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest052() {
    Int32Array a = Int32Array.of(10, 20, 30, 40);
    a.copyWithin(2, 0, 2);
    assertEqualInt(10, a.at(2));
    assertEqualInt(20, a.at(3));
    }

    /**
     * Verify fill fill(7, 1, 3) at(0)/at(1)/at(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_5300
     * @tc.name int32ArrayAtPart02TestMindmapTest053
     * @tc.desc Verify fill fill(7, 1, 3) at(0)/at(1)/at(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest053() {
    Int32Array a = new Int32Array(4);
    a.fill(7, 1, 3);
    assertEqualInt(0, a.at(0));
    assertEqualInt(7, a.at(1));
    assertEqualInt(0, a.at(3));
    }

    /**
     * Verify buffer set at
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_5400
     * @tc.name int32ArrayAtPart02TestMindmapTest054
     * @tc.desc Verify buffer set at
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest054() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array parent = new Int32Array(buf);
    Int32Array child = new Int32Array(buf, 0, 4);
    parent.set(0, 111);
    assertEqualInt(111, child.at(0));
    }

    /**
     * Verify byteOffset=8 at(0) at(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_5500
     * @tc.name int32ArrayAtPart02TestMindmapTest055
     * @tc.desc Verify byteOffset=8 at(0) at(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest055() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array parent = new Int32Array(buf);
    Int32Array child = new Int32Array(buf, 8, 2);
    parent.set(2, 222);
    assertEqualInt(222, child.at(0));
    }

    /**
     * Verify subarray(1, 3) at(0) at(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_5600
     * @tc.name int32ArrayAtPart02TestMindmapTest056
     * @tc.desc Verify subarray(1, 3) at(0) at(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest056() {
    Int32Array parent = Int32Array.of(10, 20, 30, 40);
    Int32Array sub = parent.subarray(1, 3);
    assertEqual(parent.at(1).intValue(), sub.at(0).intValue());
    assertEqual(parent.at(2).intValue(), sub.at(1).intValue());
    }

    /**
     * Verify set(array, offset) subarray at
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_5800
     * @tc.name int32ArrayAtPart02TestMindmapTest058
     * @tc.desc Verify set(array, offset) subarray at
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest058() {
    Int32Array parent = new Int32Array(4);
    Int32Array sub = parent.subarray(1, 4);
    parent.set(new Int32Array(new int[] {7, 8}), 1);
    assertEqualInt(7, sub.at(0));
    assertEqualInt(8, sub.at(1));
    }

    /**
     * Verify subarray fill at fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_5900
     * @tc.name int32ArrayAtPart02TestMindmapTest059
     * @tc.desc Verify subarray fill at fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest059() {
    Int32Array parent = new Int32Array(5);
    Int32Array sub = parent.subarray(2, 4);
    sub.fill(123);
    assertEqualInt(123, parent.at(2));
    assertEqualInt(123, parent.at(3));
    }

    /**
     * Verify subarray reverse at
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_6000
     * @tc.name int32ArrayAtPart02TestMindmapTest060
     * @tc.desc Verify subarray reverse at
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest060() {
    Int32Array parent = Int32Array.of(0, 1, 2, 3, 4);
    Int32Array sub = parent.subarray(1, 4);
    sub.reverse();
    assertEqualInt(3, parent.at(1));
    assertEqualInt(1, parent.at(3));
    }

    /**
     * Verify slice at
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_6300
     * @tc.name int32ArrayAtPart02TestMindmapTest063
     * @tc.desc Verify slice at
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest063() {
    Int32Array a = Int32Array.of(10, 20, 30);
    Int32Array s = a.slice();
    assertEqualInt(20, s.at(1));
    }

    /**
     * Verify slice(1, 3) at(0)/at(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_6400
     * @tc.name int32ArrayAtPart02TestMindmapTest064
     * @tc.desc Verify slice(1, 3) at(0)/at(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest064() {
    Int32Array a = Int32Array.of(10, 20, 30, 40);
    Int32Array s = a.slice(1, 3);
    assertEqualInt(20, s.at(0));
    assertEqualInt(30, s.at(1));
    }

    /**
     * Verify slice at
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_6500
     * @tc.name int32ArrayAtPart02TestMindmapTest065
     * @tc.desc Verify slice at
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest065() {
    Int32Array a = Int32Array.of(1, 2, 3);
    Int32Array s = a.slice();
    s.set(0, 999);
    assertEqualInt(1, a.at(0));
    }

    /**
     * Verify map at
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_6600
     * @tc.name int32ArrayAtPart02TestMindmapTest066
     * @tc.desc Verify map at
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest066() {
    Int32Array a = Int32Array.of(1, 2, 3);
    Int32Array m = a.map((v, unusedIndex, arr) -> v * 2);
    assertEqualInt(2, m.at(0));
    assertEqualInt(6, m.at(2));
    }

    /**
     * Verify filter at
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_6700
     * @tc.name int32ArrayAtPart02TestMindmapTest067
     * @tc.desc Verify filter at
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest067() {
    Int32Array a = Int32Array.of(1, 2, 3, 4);
    Int32Array f = a.filter((v, unusedIndex, arr) -> v > 2);
    assertEqualInt(3, f.at(0));
    assertEqualInt(4, f.at(1));
    }

    /**
     * Verify at map
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_6800
     * @tc.name int32ArrayAtPart02TestMindmapTest068
     * @tc.desc Verify at map
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest068() {
    Int32Array a = Int32Array.of(5, 10);
    Integer first = a.at(0);
    Int32Array doubled = a.map((v, unusedIndex, arr) -> v + first);
    assertEqualInt(10, doubled.at(0));
    assertEqualInt(15, doubled.at(1));
    }

    /**
     * Verify for at(i) $_get(i)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_6900
     * @tc.name int32ArrayAtPart02TestMindmapTest069
     * @tc.desc Verify for at(i) $_get(i)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest069() {
    Int32Array a = Int32Array.of(10, 20, 30, 40);
    for (int i = 0; i < a.length(); i++) {
    assertEqual(a.get(i).intValue(), a.at(i).intValue());
    }
    }

    /**
     * Verify for -length..-1 at(-i) $_get(length-i)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_7000
     * @tc.name int32ArrayAtPart02TestMindmapTest070
     * @tc.desc Verify for -length..-1 at(-i) $_get(length-i)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest070() {
    Int32Array a = Int32Array.of(11, 22, 33);
    assertEqual(a.get(0).intValue(), a.at(-3).intValue());
    assertEqual(a.get(1).intValue(), a.at(-2).intValue());
    assertEqual(a.get(2).intValue(), a.at(-1).intValue());
    }

    /**
     * Verify for at
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_7100
     * @tc.name int32ArrayAtPart02TestMindmapTest071
     * @tc.desc Verify for at
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest071() {
    Int32Array a = new Int32Array(0);
    int count = 0;
    for (int i = 0; i < a.length(); i++) {
    a.at(i);
    count++;
    }
    assertEqual(0, count);
    }

    /**
     * Verify for-of at
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_7200
     * @tc.name int32ArrayAtPart02TestMindmapTest072
     * @tc.desc Verify for-of at
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest072() {
    Int32Array a = Int32Array.of(100, 200, 300);
    int idx = 0;
    for (Integer v : a.values()) {
    assertEqual(v.intValue(), a.at((int) (idx)).intValue());
    idx++;
    }
    assertEqual(3, idx);
    }

    /**
     * Verify for at $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART02_TEST_MINDMAP_7300
     * @tc.name int32ArrayAtPart02TestMindmapTest073
     * @tc.desc Verify for at $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart02TestMindmapTest073() {
    Int32Array a = Int32Array.of(-1, Integer.MIN_VALUE, 2147483647, 0);
    for (int i = 0; i < a.length(); i++) {
    assertEqual(a.get(i).intValue(), a.at(i).intValue());
    }
    }
}
