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

import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayConstructorPart11Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayConstructorPart11Test extends BasTest {

    static class Gen077 {
        Gen077() {
        }
    }

    /**
     * Verify 0 length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_0100
     * @tc.name int32ArrayConstructorPart11TestMindmapTest001
     * @tc.desc Verify 0 length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest001() {
    Int32Array a = new Int32Array();
    Int32Array b = new Int32Array(0);
    assertEqual(0, a.length());
    assertEqual(0, b.length());
    assertEqual(0, a.byteLength());
    assertEqual(0, b.byteLength());
    assertEqual(0, a.buffer().byteLength());
    assertEqual(0, b.buffer().byteLength());
    }

    /**
     * Verify buffer 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_0200
     * @tc.name int32ArrayConstructorPart11TestMindmapTest002
     * @tc.desc Verify buffer 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest002() {
    Int32Array a = new Int32Array();
    assertEqual(0, a.buffer().byteLength());
    }

    /**
     * Verify 1(int) length:int length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_0300
     * @tc.name int32ArrayConstructorPart11TestMindmapTest003
     * @tc.desc Verify 1(int) length:int length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest003() {
    Int32Array a = new Int32Array(1);
    assertEqual(1, a.length());
    assertEqual(4, a.BYTES_PER_ELEMENT);
    assertEqual(4, a.byteLength());
    assertEqual(0, a.byteOffset());
    }

    /**
     * Verify 2 length:number length=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_0400
     * @tc.name int32ArrayConstructorPart11TestMindmapTest004
     * @tc.desc Verify 2 length:number length=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest004() {
    int off = 2;
    Int32Array a = new Int32Array(off);
    assertEqual(2, a.length());
    assertEqual(8, a.byteLength());
    }

    /**
     * Verify 2.9 length:number ToInteger 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_0500
     * @tc.name int32ArrayConstructorPart11TestMindmapTest005
     * @tc.desc Verify 2.9 length:number ToInteger 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest005() {
    double off = 2.9;
    Int32Array a = new Int32Array(off);
    assertEqual(2, a.length());
    assertEqual(8, a.byteLength());
    }

    /**
     * Verify -0 length:number -0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_0600
     * @tc.name int32ArrayConstructorPart11TestMindmapTest006
     * @tc.desc Verify -0 length:number -0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest006() {
    int off = -0;
    Int32Array a = new Int32Array(off);
    assertEqual(0, a.length());
    }

    /**
     * Verify FixedArray<int> FixedArray<E> Array<int>
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_0700
     * @tc.name int32ArrayConstructorPart11TestMindmapTest007
     * @tc.desc Verify FixedArray<int> FixedArray<E> Array<int>
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest007() {
    int[] fa = new int[] {10, 20, 30};
    Int32Array a = new Int32Array(fa);
    assertEqual(3, a.length());
    assertEqualInt(10, a.get(0));
    assertEqualInt(30, a.get(2));
    }

    /**
     * Verify FixedArray<number> FixedArray<number>
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_0800
     * @tc.name int32ArrayConstructorPart11TestMindmapTest008
     * @tc.desc Verify FixedArray<number> FixedArray<number>
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest008() {
    double[] fn = new double[] {1, 2.7, 3};
    Int32Array a = new Int32Array(fn);
    assertEqual(3, a.length());
    assertEqualInt(1, a.get(0));
    assertEqualInt(2, a.get(1));
    assertEqualInt(3, a.get(2));
    }

    /**
     * Verify ArrayBuffer buf:ArrayLike<Number>|ArrayBuffer ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_1100
     * @tc.name int32ArrayConstructorPart11TestMindmapTest011
     * @tc.desc Verify ArrayBuffer buf:ArrayLike<Number>|ArrayBuffer ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest011() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array a = new Int32Array(buf);
    assertEqual(3, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(12, a.byteLength());
    }

    /**
     * Verify ArrayBuffer+int (buf, byteOffset:int) length /4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_1200
     * @tc.name int32ArrayConstructorPart11TestMindmapTest012
     * @tc.desc Verify ArrayBuffer+int (buf, byteOffset:int) length /4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest012() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 4);
    assertEqual(4, a.byteOffset());
    assertEqual(3, a.length());
    assertEqual(12, a.byteLength());
    }

    /**
     * Verify ArrayBuffer+number (buf, byteOffset:number)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_1300
     * @tc.name int32ArrayConstructorPart11TestMindmapTest013
     * @tc.desc Verify ArrayBuffer+number (buf, byteOffset:number)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest013() {
    ArrayBuffer buf = new ArrayBuffer(16);
    int off = 4;
    Int32Array a = new Int32Array(buf, off);
    assertEqual(4, a.byteOffset());
    assertEqual(3, a.length());
    }

    /**
     * Verify ArrayBuffer+int +int (buf, byteOffset:int, length:int)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_1400
     * @tc.name int32ArrayConstructorPart11TestMindmapTest014
     * @tc.desc Verify ArrayBuffer+int +int (buf, byteOffset:int, length:int)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest014() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int32Array a = new Int32Array(buf, 4, 2);
    assertEqual(4, a.byteOffset());
    assertEqual(2, a.length());
    assertEqual(8, a.byteLength());
    }

    /**
     * Verify ArrayBuffer+undefined+undefined (buf, byteOffset?:number|undefined, length?:number|undefined)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_1500
     * @tc.name int32ArrayConstructorPart11TestMindmapTest015
     * @tc.desc Verify ArrayBuffer+undefined+undefined (buf, byteOffset?:number|undefined, length?:number|undefined)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest015() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array a = new Int32Array(buf);
    assertEqual(0, a.byteOffset());
    assertEqual(3, a.length());
    assertEqual(12, a.byteLength());
    }

    /**
     * Verify ArrayBuffer+int +undefined length /4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_1600
     * @tc.name int32ArrayConstructorPart11TestMindmapTest016
     * @tc.desc Verify ArrayBuffer+int +undefined length /4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest016() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int32Array a = new Int32Array(buf, 8);
    assertEqual(8, a.byteOffset());
    assertEqual(3, a.length());
    assertEqual(12, a.byteLength());
    }

    /**
     * Verify ArrayBuffer+undefined +int byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_1700
     * @tc.name int32ArrayConstructorPart11TestMindmapTest017
     * @tc.desc Verify ArrayBuffer+undefined +int byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest017() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int32Array a = new Int32Array(buf, 0, 3);
    assertEqual(0, a.byteOffset());
    assertEqual(3, a.length());
    assertEqual(12, a.byteLength());
    }

    /**
     * Verify BYTES_PER_ELEMENT 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_1800
     * @tc.name int32ArrayConstructorPart11TestMindmapTest018
     * @tc.desc Verify BYTES_PER_ELEMENT 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest018() {
    Int32Array a = new Int32Array();
    Int32Array b = new Int32Array(3);
    Int32Array c = new Int32Array(new ArrayBuffer(12));
    int[] fa = new int[] {1, 2};
    Int32Array d = new Int32Array(fa);
    assertEqual(4, a.BYTES_PER_ELEMENT);
    assertEqual(4, b.BYTES_PER_ELEMENT);
    assertEqual(4, c.BYTES_PER_ELEMENT);
    assertEqual(4, d.BYTES_PER_ELEMENT);
    }

    /**
     * Verify buf byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_1900
     * @tc.name int32ArrayConstructorPart11TestMindmapTest019
     * @tc.desc Verify buf byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest019() {
    Int32Array a = new Int32Array();
    Int32Array b = new Int32Array(4);
    int[] fa = new int[] {1};
    Int32Array c = new Int32Array(fa);
    List<Integer> ai = java.util.Arrays.asList(1, 2);
    Int32Array d = new Int32Array(ai);
    assertEqual(0, a.byteOffset());
    assertEqual(0, b.byteOffset());
    assertEqual(0, c.byteOffset());
    assertEqual(0, d.byteOffset());
    }

    /**
     * Verify length(0) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_2000
     * @tc.name int32ArrayConstructorPart11TestMindmapTest020
     * @tc.desc Verify length(0) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest020() {
    Int32Array b = new Int32Array(2);
    assertEqualInt(0, b.get(0));
    assertEqualInt(0, b.get(1));
    }

    /**
     * Verify new Int32Array(-2) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_2100
     * @tc.name int32ArrayConstructorPart11TestMindmapTest021
     * @tc.desc Verify new Int32Array(-2) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest021() {
    try {
    new Int32Array(-2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length:number -1 -1 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_2200
     * @tc.name int32ArrayConstructorPart11TestMindmapTest022
     * @tc.desc Verify length:number -1 -1 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest022() {
    try {
    int v = -1;
    new Int32Array(v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify (buf, byteOffset:int) 1 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_2300
     * @tc.name int32ArrayConstructorPart11TestMindmapTest023
     * @tc.desc Verify (buf, byteOffset:int) 1 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest023() {
    try {
    new Int32Array(new ArrayBuffer(8), 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify (buf, byteOffset:int) 2 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_2400
     * @tc.name int32ArrayConstructorPart11TestMindmapTest024
     * @tc.desc Verify (buf, byteOffset:int) 2 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest024() {
    try {
    new Int32Array(new ArrayBuffer(8), 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify (buf, byteOffset:int) 3 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_2500
     * @tc.name int32ArrayConstructorPart11TestMindmapTest025
     * @tc.desc Verify (buf, byteOffset:int) 3 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest025() {
    try {
    new Int32Array(new ArrayBuffer(8), 3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify (buf, byteOffset:int) RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_2600
     * @tc.name int32ArrayConstructorPart11TestMindmapTest026
     * @tc.desc Verify (buf, byteOffset:int) RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest026() {
    try {
    new Int32Array(new ArrayBuffer(8), -4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify (buf, byteOffset:number) 1 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_2700
     * @tc.name int32ArrayConstructorPart11TestMindmapTest027
     * @tc.desc Verify (buf, byteOffset:number) 1 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest027() {
    try {
    int v = 1;
    new Int32Array(new ArrayBuffer(8), v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructing Int32Array from ArrayBuffer with invalid byteOffset throws
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_2800
     * @tc.name int32ArrayConstructorPart11TestMindmapTest028
     * @tc.desc Verify constructing Int32Array from ArrayBuffer with invalid byteOffset throws
     * RangeError and source array is unaffected
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest028() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    try {
    new Int32Array(new ArrayBuffer(4), 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(3, src.size());
    assertEqualInt(10, src.get(0));
    assertEqualInt(30, src.get(2));
    }

    /**
     * Verify instanceof Int32Array true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_2900
     * @tc.name int32ArrayConstructorPart11TestMindmapTest029
     * @tc.desc Verify instanceof Int32Array true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest029() {
    Int32Array a = new Int32Array();
    assertEqual(0, a.length());
    Int32Array b = new Int32Array(1);
    assertEqual(1, b.length());
    assertEqualInt(0, b.get(0));
    int v = 1;
    Int32Array c = new Int32Array(v);
    assertEqual(1, c.length());
    assertEqualInt(0, c.get(0));
    int[] fa = new int[] {1};
    Int32Array d = new Int32Array(fa);
    assertEqual(1, d.length());
    assertEqualInt(1, d.get(0));
    double[] fn = new double[] {1};
    Int32Array e = new Int32Array(fn);
    assertEqual(1, e.length());
    assertEqualInt(1, e.get(0));
    List<Integer> ai = java.util.Arrays.asList(1);
    Int32Array f = new Int32Array(ai);
    assertEqual(1, f.length());
    assertEqualInt(1, f.get(0));
    Int32Array g = new Int32Array(new ArrayBuffer(4));
    assertEqual(1, g.length());
    assertEqualInt(0, g.get(0));
    }

    /**
     * Verify toString "0" 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_3000
     * @tc.name int32ArrayConstructorPart11TestMindmapTest030
     * @tc.desc Verify toString "0" 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest030() {
    Int32Array a = new Int32Array();
    assertEqual("", String.valueOf(a));
    }

    /**
     * Verify toString length=3 "0,0,0"
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_3100
     * @tc.name int32ArrayConstructorPart11TestMindmapTest031
     * @tc.desc Verify toString length=3 "0,0,0"
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest031() {
    Int32Array a = new Int32Array(3);
    assertEqual("0,0,0", String.valueOf(a));
    }

    /**
     * Verify v1[0] v2 offset=4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_4000
     * @tc.name int32ArrayConstructorPart11TestMindmapTest040
     * @tc.desc Verify v1[0] v2 offset=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest040() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array valFirst = new Int32Array(buf, 0, 4);
    Int32Array valSecond = new Int32Array(buf, 4, 3);
    valFirst.set(0, 999);
    assertEqualInt(0, valSecond.get(0));
    }

    /**
     * Verify length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_4200
     * @tc.name int32ArrayConstructorPart11TestMindmapTest042
     * @tc.desc Verify length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest042() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array valFirst = new Int32Array(buf, 0, 2);
    Int32Array valSecond = new Int32Array(buf, 8, 2);
    valFirst.set(0, 11);
    valFirst.set(1, 22);
    valSecond.set(0, 33);
    valSecond.set(1, 44);
    assertEqualInt(11, valFirst.get(0));
    assertEqualInt(22, valFirst.get(1));
    assertEqualInt(33, valSecond.get(0));
    assertEqualInt(44, valSecond.get(1));
    }

    /**
     * Verify byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_4300
     * @tc.name int32ArrayConstructorPart11TestMindmapTest043
     * @tc.desc Verify byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest043() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int32Array v = new Int32Array(buf, 8);
    assertEqual(8, v.byteOffset());
    assertEqual(12, v.byteLength());
    assertEqual(3, v.length());
    }

    /**
     * Verify Int32Array(other) buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_4400
     * @tc.name int32ArrayConstructorPart11TestMindmapTest044
     * @tc.desc Verify Int32Array(other) buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest044() {
    Int32Array src = new Int32Array(2);
    src.set(0, 1);
    src.set(1, 2);
    Int32Array cp = new Int32Array(src);
    cp.set(0, 99);
    assertEqualInt(1, src.get(0));
    }

    /**
     * Verify FixedArray buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_4500
     * @tc.name int32ArrayConstructorPart11TestMindmapTest045
     * @tc.desc Verify FixedArray buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest045() {
    int[] fa = new int[] {5};
    Int32Array a = new Int32Array(fa);
    Int32Array b = new Int32Array(fa);
    a.set(0, 99);
    assertEqualInt(5, b.get(0));
    }

    /**
     * Verify Array<int> buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_4700
     * @tc.name int32ArrayConstructorPart11TestMindmapTest047
     * @tc.desc Verify Array<int> buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest047() {
    List<Integer> ai = java.util.Arrays.asList(7);
    Int32Array a = new Int32Array(ai);
    Int32Array b = new Int32Array(ai);
    a.set(0, 111);
    assertEqualInt(7, b.get(0));
    }

    /**
     * Verify length(0) buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_4900
     * @tc.name int32ArrayConstructorPart11TestMindmapTest049
     * @tc.desc Verify length(0) buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest049() {
    Int32Array a = new Int32Array();
    Int32Array b = new Int32Array(0);
    assertEqual(0, a.length());
    assertEqual(0, b.length());
    assertEqual(0, a.byteLength());
    assertEqual(0, b.byteLength());
    }

    /**
     * Verify ArrayBuffer buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_5000
     * @tc.name int32ArrayConstructorPart11TestMindmapTest050
     * @tc.desc Verify ArrayBuffer buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest050() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array valFirst = new Int32Array(buf, 0, 2);
    Int32Array valSecond = new Int32Array(buf, 8, 2);
    assertEqual(valSecond.buffer(), valFirst.buffer());
    assertEqual(buf, valFirst.buffer());
    assertEqual(buf, valSecond.buffer());
    }

    /**
     * Verify (buf, byteOffset:number) buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_5100
     * @tc.name int32ArrayConstructorPart11TestMindmapTest051
     * @tc.desc Verify (buf, byteOffset:number) buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest051() {
    ArrayBuffer buf = new ArrayBuffer(16);
    int off = 4;
    Int32Array v = new Int32Array(buf, off);
    assertEqual(buf, v.buffer());
    }

    /**
     * Verify buffer buf
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_5200
     * @tc.name int32ArrayConstructorPart11TestMindmapTest052
     * @tc.desc Verify buffer buf
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest052() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int32Array v = new Int32Array(buf, 4, 2);
    assertEqual(buf, v.buffer());
    assertEqual(8, v.byteLength());
    }

    /**
     * Verify length(0) FixedArray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_5300
     * @tc.name int32ArrayConstructorPart11TestMindmapTest053
     * @tc.desc Verify length(0) FixedArray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest053() {
    Int32Array a = new Int32Array(0);
    int[] fe = new int[] {};
    Int32Array b = new Int32Array(fe);
    assertEqual(0, a.length());
    assertEqual(0, b.length());
    assertEqual(0, a.byteLength());
    assertEqual(0, b.byteLength());
    }

    /**
     * Verify FixedArray<number> Number.NaN ToInt32(Number.NaN)=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_5400
     * @tc.name int32ArrayConstructorPart11TestMindmapTest054
     * @tc.desc Verify FixedArray<number> Number.NaN ToInt32(Number.NaN)=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest054() {
    double[] fn = new double[] {Double.NaN};
    Int32Array a = new Int32Array(fn);
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify FixedArray<number> +Number.POSITIVE_INFINITY ToInt32=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_5500
     * @tc.name int32ArrayConstructorPart11TestMindmapTest055
     * @tc.desc Verify FixedArray<number> +Number.POSITIVE_INFINITY ToInt32=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest055() {
    double[] fn = new double[] {Double.POSITIVE_INFINITY};
    Int32Array a = new Int32Array(fn);
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify FixedArray<number> Double.NEGATIVE_INFINITY ToInt32=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_5600
     * @tc.name int32ArrayConstructorPart11TestMindmapTest056
     * @tc.desc Verify FixedArray<number> Double.NEGATIVE_INFINITY ToInt32=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest056() {
    double[] fn = new double[] {Double.NEGATIVE_INFINITY};
    Int32Array a = new Int32Array(fn);
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify FixedArray<number> 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_5700
     * @tc.name int32ArrayConstructorPart11TestMindmapTest057
     * @tc.desc Verify FixedArray<number> 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest057() {
    double[] fn = new double[] {0};
    Int32Array a = new Int32Array(fn);
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify FixedArray<number> -0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_5800
     * @tc.name int32ArrayConstructorPart11TestMindmapTest058
     * @tc.desc Verify FixedArray<number> -0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest058() {
    double[] fn = new double[] {-0};
    Int32Array a = new Int32Array(fn);
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify FixedArray<number> 4294967296(2^32) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_6300
     * @tc.name int32ArrayConstructorPart11TestMindmapTest063
     * @tc.desc Verify FixedArray<number> 4294967296(2^32) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest063() {
    double[] fn = new double[] {4294967296.0};
    Int32Array a = new Int32Array(fn);
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify ArrayLike<Number> {length, 0, 1}
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_6600
     * @tc.name int32ArrayConstructorPart11TestMindmapTest066
     * @tc.desc Verify ArrayLike<Number> {length, 0, 1}
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest066() {
    List<Integer> src = java.util.Arrays.asList(10, 20);
    Int32Array a = new Int32Array(src);
    assertEqual(2, a.length());
    assertEqualInt(10, a.get(0));
    assertEqualInt(20, a.get(1));
    }

    /**
     * Verify (buf, 0, length) (buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_6800
     * @tc.name int32ArrayConstructorPart11TestMindmapTest068
     * @tc.desc Verify (buf, 0, length) (buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest068() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array w = new Int32Array(buf, 0, 4);
    w.set(0, 1);
    w.set(1, 2);
    w.set(2, 3);
    w.set(3, 4);
    Int32Array r = new Int32Array(buf);
    assertEqual(4, r.length());
    assertEqualInt(1, r.get(0));
    assertEqualInt(4, r.get(3));
    }

    /**
     * Verify (buf, byteOffset:number)4 (buf, byteOffset:int)4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_6900
     * @tc.name int32ArrayConstructorPart11TestMindmapTest069
     * @tc.desc Verify (buf, byteOffset:number)4 (buf, byteOffset:int)4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest069() {
    ArrayBuffer buf = new ArrayBuffer(16);
    int wOff = 4;
    Int32Array w = new Int32Array(buf, wOff);
    w.set(0, 77);
    Int32Array r = new Int32Array(buf, 4, 1);
    assertEqualInt(77, r.get(0));
    }

    /**
     * Verify buf byteOffset 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_7200
     * @tc.name int32ArrayConstructorPart11TestMindmapTest072
     * @tc.desc Verify buf byteOffset 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest072() {
    Int32Array a = new Int32Array(new ArrayBuffer(12));
    Int32Array b = new Int32Array(new ArrayBuffer(12), 4);
    Int32Array c = new Int32Array(new ArrayBuffer(20), 8, 2);
    Int32Array d = new Int32Array(new ArrayBuffer(16), 0, 3);
    assertEqual(0, a.byteOffset() % 4);
    assertEqual(0, b.byteOffset() % 4);
    assertEqual(0, c.byteOffset() % 4);
    assertEqual(0, d.byteOffset() % 4);
    }

    /**
     * Verify buf byteLength length*4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART11_TEST_MINDMAP_7300
     * @tc.name int32ArrayConstructorPart11TestMindmapTest073
     * @tc.desc Verify buf byteLength length*4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart11TestMindmapTest073() {
    Int32Array a = new Int32Array(3);
    int[] fa = new int[] {1, 2};
    Int32Array b = new Int32Array(fa);
    assertEqual(12, a.buffer().byteLength());
    assertEqual(8, b.buffer().byteLength());
    }
}
