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

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayConstructorPart06Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayConstructorPart06Test extends BasTest {
    /**
     * Verify FixedArray\<number\> length=0 length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_0100
     * @tc.name int32ArrayConstructorPart06TestMindmapTest001
     * @tc.desc Verify FixedArray\<number\> length=0 length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest001() {
    double[] src = new double[] {};
    Int32Array a = new Int32Array(src);
    assertEqual(0, a.length());
    }

    /**
     * Verify FixedArray\<number\> length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_0200
     * @tc.name int32ArrayConstructorPart06TestMindmapTest002
     * @tc.desc Verify FixedArray\<number\> length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest002() {
    double[] src = new double[] {42.0};
    Int32Array a = new Int32Array(src);
    assertEqual(1, a.length());
    }

    /**
     * Verify 5 FixedArray\<number\> length 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_0300
     * @tc.name int32ArrayConstructorPart06TestMindmapTest003
     * @tc.desc Verify 5 FixedArray\<number\> length 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest003() {
    double[] src = new double[] {1, 2, 3, 4, 5};
    Int32Array a = new Int32Array(src);
    assertEqual(5, a.length());
    }

    /**
     * Verify 16 FixedArray\<number\> length 16
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_0400
     * @tc.name int32ArrayConstructorPart06TestMindmapTest004
     * @tc.desc Verify 16 FixedArray\<number\> length 16
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest004() {
    double[] src = new double[] {0, 1, 2, 3, 4, 5, 6.0, 7.0, 8.0, 9.0, 10, 11.0, 12.0, 13.0, 14.0, 15.0};
    Int32Array a = new Int32Array(src);
    assertEqual(16, a.length());
    }

    /**
     * Verify 0 $_get(0) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_0500
     * @tc.name int32ArrayConstructorPart06TestMindmapTest005
     * @tc.desc Verify 0 $_get(0) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest005() {
    Int32Array a = new Int32Array(new int[] {0});
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify 1 $_get(0) 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_0600
     * @tc.name int32ArrayConstructorPart06TestMindmapTest006
     * @tc.desc Verify 1 $_get(0) 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest006() {
    Int32Array a = new Int32Array(new int[] {1});
    assertEqualInt(1, a.get(0));
    }

    /**
     * Verify 2 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_0800
     * @tc.name int32ArrayConstructorPart06TestMindmapTest008
     * @tc.desc Verify 2 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest008() {
    Int32Array a = new Int32Array(new int[] {2});
    assertEqualInt(2, a.get(0));
    }

    /**
     * Verify 100.0 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_1000
     * @tc.name int32ArrayConstructorPart06TestMindmapTest010
     * @tc.desc Verify 100.0 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest010() {
    Int32Array a = new Int32Array(new double[] {100.0});
    assertEqualInt(100, a.get(0));
    }

    /**
     * Verify -0 ToInt32 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_1400
     * @tc.name int32ArrayConstructorPart06TestMindmapTest014
     * @tc.desc Verify -0 ToInt32 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest014() {
    Int32Array a = new Int32Array(new int[] {-0});
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_1500
     * @tc.name int32ArrayConstructorPart06TestMindmapTest015
     * @tc.desc Verify [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest015() {
    Int32Array a = new Int32Array(new int[] {1, 2, 3, 4, 5});
    assertEqualInt(1, a.get(0));
    assertEqualInt(2, a.get(1));
    assertEqualInt(3, a.get(2));
    assertEqualInt(4, a.get(3));
    assertEqualInt(5, a.get(4));
    }

    /**
     * Verify 0.999999 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_1700
     * @tc.name int32ArrayConstructorPart06TestMindmapTest017
     * @tc.desc Verify 0.999999 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest017() {
    Int32Array a = new Int32Array(new double[] {0.999999});
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify -0.999999 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_1800
     * @tc.name int32ArrayConstructorPart06TestMindmapTest018
     * @tc.desc Verify -0.999999 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest018() {
    Int32Array a = new Int32Array(new double[] {-0.999999});
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify 3.7 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_1900
     * @tc.name int32ArrayConstructorPart06TestMindmapTest019
     * @tc.desc Verify 3.7 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest019() {
    Int32Array a = new Int32Array(new double[] {3.7});
    assertEqualInt(3, a.get(0));
    }

    /**
     * Verify 100.0001 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_2100
     * @tc.name int32ArrayConstructorPart06TestMindmapTest021
     * @tc.desc Verify 100.0001 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest021() {
    Int32Array a = new Int32Array(new double[] {100.0001});
    assertEqualInt(100, a.get(0));
    }

    /**
     * Verify 4294967296.0 2^32 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_2900
     * @tc.name int32ArrayConstructorPart06TestMindmapTest029
     * @tc.desc Verify 4294967296.0 2^32 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest029() {
    Int32Array a = new Int32Array(new double[] {4294967296.0});
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify 4294967297.0 2^32+1 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_3000
     * @tc.name int32ArrayConstructorPart06TestMindmapTest030
     * @tc.desc Verify 4294967297.0 2^32+1 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest030() {
    Int32Array a = new Int32Array(new double[] {4294967297.0});
    assertEqualInt(1, a.get(0));
    }

    /**
     * Verify Number.NaN ToInt32 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_3500
     * @tc.name int32ArrayConstructorPart06TestMindmapTest035
     * @tc.desc Verify Number.NaN ToInt32 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest035() {
    Int32Array a = new Int32Array(new double[] {Double.NaN});
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify Number.POSITIVE_INFINITY ToInt32 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_3600
     * @tc.name int32ArrayConstructorPart06TestMindmapTest036
     * @tc.desc Verify Number.POSITIVE_INFINITY ToInt32 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest036() {
    Int32Array a = new Int32Array(new double[] {Double.POSITIVE_INFINITY});
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify Double.NEGATIVE_INFINITY ToInt32 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_3700
     * @tc.name int32ArrayConstructorPart06TestMindmapTest037
     * @tc.desc Verify Double.NEGATIVE_INFINITY ToInt32 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest037() {
    Int32Array a = new Int32Array(new double[] {Double.NEGATIVE_INFINITY});
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify -9007199254740991 ToInt32 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_3900
     * @tc.name int32ArrayConstructorPart06TestMindmapTest039
     * @tc.desc Verify -9007199254740991 ToInt32 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest039() {
    Int32Array a = new Int32Array(new double[] {-9007199254740991L});
    assertEqualInt(1, a.get(0));
    }

    /**
     * Verify [Number.NaN, Number.POSITIVE_INFINITY, Double.NEGATIVE_INFINITY, 5.7] ToInt32
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_4000
     * @tc.name int32ArrayConstructorPart06TestMindmapTest040
     * @tc.desc Verify [Number.NaN, Number.POSITIVE_INFINITY, Double.NEGATIVE_INFINITY, 5.7] ToInt32
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest040() {
    Int32Array a = new Int32Array(new double[] {Double.NaN, Double.POSITIVE_INFINITY, Double.NEGATIVE_INFINITY, 5.7});
    assertEqualInt(0, a.get(0));
    assertEqualInt(0, a.get(1));
    assertEqualInt(0, a.get(2));
    assertEqualInt(5, a.get(3));
    }

    /**
     * Verify 1.5e2 =150.0 150
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_4100
     * @tc.name int32ArrayConstructorPart06TestMindmapTest041
     * @tc.desc Verify 1.5e2 =150.0 150
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest041() {
    Int32Array a = new Int32Array(new double[] {1.5e2});
    assertEqualInt(150, a.get(0));
    }

    /**
     * Verify 1e-6 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_4400
     * @tc.name int32ArrayConstructorPart06TestMindmapTest044
     * @tc.desc Verify 1e-6 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest044() {
    Int32Array a = new Int32Array(new double[] {1e-6});
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify 4.294967296e9 =2^32 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_4500
     * @tc.name int32ArrayConstructorPart06TestMindmapTest045
     * @tc.desc Verify 4.294967296e9 =2^32 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest045() {
    Int32Array a = new Int32Array(new double[] {4.294967296e9});
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify [9.0, 9.0, 9.0] 9
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_4600
     * @tc.name int32ArrayConstructorPart06TestMindmapTest046
     * @tc.desc Verify [9.0, 9.0, 9.0] 9
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest046() {
    Int32Array a = new Int32Array(new double[] {9.0, 9.0, 9.0});
    assertEqualInt(9, a.get(0));
    assertEqualInt(9, a.get(1));
    assertEqualInt(9, a.get(2));
    }

    /**
     * Verify 0 [0, 0, 0, 0] 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_4700
     * @tc.name int32ArrayConstructorPart06TestMindmapTest047
     * @tc.desc Verify 0 [0, 0, 0, 0] 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest047() {
    Int32Array a = new Int32Array(new int[] {0, 0, 0, 0});
    assertEqualInt(0, a.get(0));
    assertEqualInt(0, a.get(1));
    assertEqualInt(0, a.get(2));
    assertEqualInt(0, a.get(3));
    }

    /**
     * Verify instanceof Int32Array true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_5200
     * @tc.name int32ArrayConstructorPart06TestMindmapTest052
     * @tc.desc Verify instanceof Int32Array true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest052() {
    Int32Array a = new Int32Array(new int[] {1, 2});
    boolean isTa = (a) instanceof Int32Array;
    assertTrue(isTa);
    }

    /**
     * Verify BYTES_PER_ELEMENT 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_5300
     * @tc.name int32ArrayConstructorPart06TestMindmapTest053
     * @tc.desc Verify BYTES_PER_ELEMENT 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest053() {
    Int32Array a = new Int32Array(new int[] {1, 2, 3});
    assertEqual(4, a.BYTES_PER_ELEMENT);
    }

    /**
     * Verify 3 byteLength length*4=12
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_5400
     * @tc.name int32ArrayConstructorPart06TestMindmapTest054
     * @tc.desc Verify 3 byteLength length*4=12
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest054() {
    Int32Array a = new Int32Array(new int[] {1, 2, 3});
    assertEqual(12, a.byteLength());
    }

    /**
     * Verify length and byteLength for empty FixedArray construction
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_5500
     * @tc.name int32ArrayConstructorPart06TestMindmapTest055
     * @tc.desc Verify length and byteLength for empty FixedArray construction
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest055() {
    Int32Array a = new Int32Array(new int[] {});
    assertEqual(0, a.byteLength());
    assertEqual(0, a.length());
    }

    /**
     * Verify byteLength 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_5600
     * @tc.name int32ArrayConstructorPart06TestMindmapTest056
     * @tc.desc Verify byteLength 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest056() {
    Int32Array a = new Int32Array(new double[] {42.0});
    assertEqual(4, a.byteLength());
    }

    /**
     * Verify byteOffset 0 buffer 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_5700
     * @tc.name int32ArrayConstructorPart06TestMindmapTest057
     * @tc.desc Verify byteOffset 0 buffer 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest057() {
    Int32Array a = new Int32Array(new int[] {1, 2});
    assertEqual(0, a.byteOffset());
    }

    /**
     * Verify buffer ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_5800
     * @tc.name int32ArrayConstructorPart06TestMindmapTest058
     * @tc.desc Verify buffer ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest058() {
    Int32Array a = new Int32Array(new int[] {1});
    boolean isAb = (a.buffer()) instanceof ArrayBuffer;
    assertTrue(isAb);
    }

    /**
     * Verify buffer.byteLength a.byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_5900
     * @tc.name int32ArrayConstructorPart06TestMindmapTest059
     * @tc.desc Verify buffer.byteLength a.byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest059() {
    Int32Array a = new Int32Array(new int[] {1, 2, 3});
    assertEqual(a.byteLength(), a.buffer().byteLength());
    }

    /**
     * Verify buffer.byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_6000
     * @tc.name int32ArrayConstructorPart06TestMindmapTest060
     * @tc.desc Verify buffer.byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest060() {
    Int32Array a = new Int32Array(new int[] {});
    assertEqual(0, a.buffer().byteLength());
    }

    /**
     * Verify name "Int32Array"
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_6100
     * @tc.name int32ArrayConstructorPart06TestMindmapTest061
     * @tc.desc Verify name "Int32Array"
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest061() {
    Int32Array a = new Int32Array(new int[] {1});
    assertEqual("Int32Array", a.getClass().getSimpleName());
    }

    /**
     * Verify FixedArray\<number\>
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_6200
     * @tc.name int32ArrayConstructorPart06TestMindmapTest062
     * @tc.desc Verify FixedArray\<number\>
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest062() {
    Int32Array a = new Int32Array(new int[] {1, 2});
    assertEqual(2, a.length());
    }

    /**
     * Verify Number.NaN/Number.POSITIVE_INFINITY/ FixedArray ToInt32
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_6300
     * @tc.name int32ArrayConstructorPart06TestMindmapTest063
     * @tc.desc Verify Number.NaN/Number.POSITIVE_INFINITY/ FixedArray ToInt32
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest063() {
    Int32Array a = new Int32Array(new double[] {Double.NaN, Double.POSITIVE_INFINITY, 2147483648.0});
    assertEqual(3, a.length());
    }

    /**
     * Verify ToInt32 1.999999 1 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_6800
     * @tc.name int32ArrayConstructorPart06TestMindmapTest068
     * @tc.desc Verify ToInt32 1.999999 1 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest068() {
    Int32Array a = new Int32Array(new double[] {1.999999});
    assertEqualInt(1, a.get(0));
    }

    /**
     * Verify -0.0001 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_6900
     * @tc.name int32ArrayConstructorPart06TestMindmapTest069
     * @tc.desc Verify -0.0001 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest069() {
    Int32Array a = new Int32Array(new double[] {-0.0001});
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify FixedArray Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_7100
     * @tc.name int32ArrayConstructorPart06TestMindmapTest071
     * @tc.desc Verify FixedArray Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest071() {
    double[] src = new double[] {1, 2, 3};
    Int32Array a = new Int32Array(src);
    src[0] = 999.0;
    assertEqualInt(1, a.get(0));
    }

    /**
     * Verify Int32Array $_set FixedArray number
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_7200
     * @tc.name int32ArrayConstructorPart06TestMindmapTest072
     * @tc.desc Verify Int32Array $_set FixedArray number
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest072() {
    double[] src = new double[] {1, 2, 3};
    Int32Array a = new Int32Array(src);
    a.set(0, 777);
    assertEqual(1, src[0]);
    }

    /**
     * Verify FixedArray Int32Array buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_7300
     * @tc.name int32ArrayConstructorPart06TestMindmapTest073
     * @tc.desc Verify FixedArray Int32Array buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest073() {
    double[] src = new double[] {1, 2};
    Int32Array a = new Int32Array(src);
    Int32Array b = new Int32Array(src);
    boolean sameBuf = a.buffer() == b.buffer();
    assertFalse(sameBuf);
    }

    /**
     * Verify Int32Array Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_7400
     * @tc.name int32ArrayConstructorPart06TestMindmapTest074
     * @tc.desc Verify Int32Array Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest074() {
    double[] src = new double[] {10, 20.0};
    Int32Array a = new Int32Array(src);
    Int32Array b = new Int32Array(src);
    a.set(0, 999);
    assertEqualInt(10, b.get(0));
    }

    /**
     * Verify FixedArray 1 int
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_7700
     * @tc.name int32ArrayConstructorPart06TestMindmapTest077
     * @tc.desc Verify FixedArray 1 int
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest077() {
    double[] src = new double[] {1, 2.7};
    Int32Array a = new Int32Array(src);
    assertEqualInt(1, a.get(0));
    assertEqual(1, src[0]);
    }

    /**
     * Verify FixedArray buffer null byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART06_TEST_MINDMAP_7800
     * @tc.name int32ArrayConstructorPart06TestMindmapTest078
     * @tc.desc Verify FixedArray buffer null byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart06TestMindmapTest078() {
    double[] src = new double[] {};
    Int32Array a = new Int32Array(src);
    assertEqual(0, a.buffer().byteLength());
    }
}
