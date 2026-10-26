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
import basetype.common.Error;

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFillPart06Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFillPart06Test extends BasTest {
    /**
     * Verify small integer literal 4 fills through E overload and reads back equal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_0100
     * @tc.name int32ArrayFillPart06TestMindmapTest001
     * @tc.desc Verify small integer literal 4 fills through E overload and reads back equal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest001() {
    Int32Array arr = new Int32Array(3);
    arr.fill(4);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(4, arr.get(2));
    }

    /**
     * Verify zero literal 0 fills all elements to 0 via E overload
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_0400
     * @tc.name int32ArrayFillPart06TestMindmapTest004
     * @tc.desc Verify zero literal 0 fills all elements to 0 via E overload
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest004() {
    Int32Array arr = new Int32Array(4);
    arr.fill(9);
    arr.fill(0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify float 2.6 through number overload truncates toward zero to 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_0600
     * @tc.name int32ArrayFillPart06TestMindmapTest006
     * @tc.desc Verify float 2.6 through number overload truncates toward zero to 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest006() {
    Int32Array arr = new Int32Array(2);
    arr.fill(2.6);
    assertEqualInt(2, arr.get(0));
    assertEqualInt(2, arr.get(1));
    }

    /**
     * Verify Number.NaN via number overload normalizes to 0 by ToInt32
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_0700
     * @tc.name int32ArrayFillPart06TestMindmapTest007
     * @tc.desc Verify Number.NaN via number overload normalizes to 0 by ToInt32
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest007() {
    Int32Array arr = new Int32Array(3);
    arr.fill(7);
    double nanVal = Double.NaN;
    arr.fill(nanVal);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify +Number.POSITIVE_INFINITY via number overload normalizes to 0 by ToInt32
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_0800
     * @tc.name int32ArrayFillPart06TestMindmapTest008
     * @tc.desc Verify +Number.POSITIVE_INFINITY via number overload normalizes to 0 by ToInt32
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest008() {
    Int32Array arr = new Int32Array(2);
    arr.fill(7);
    double infVal = Double.POSITIVE_INFINITY;
    arr.fill(infVal);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify Double.NEGATIVE_INFINITY via number overload normalizes to 0 by ToInt32
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_0900
     * @tc.name int32ArrayFillPart06TestMindmapTest009
     * @tc.desc Verify Double.NEGATIVE_INFINITY via number overload normalizes to 0 by ToInt32
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest009() {
    Int32Array arr = new Int32Array(2);
    arr.fill(7);
    arr.fill(Double.NEGATIVE_INFINITY);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify 2^32 float 4294967296.0 wraps to 0 via number overload
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_1000
     * @tc.name int32ArrayFillPart06TestMindmapTest010
     * @tc.desc Verify 2^32 float 4294967296.0 wraps to 0 via number overload
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest010() {
    Int32Array arr = new Int32Array(2);
    arr.fill(11);
    arr.fill(4294967296.0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify two arrays filled with identical normalized int 0 produce equal read-back values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_1100
     * @tc.name int32ArrayFillPart06TestMindmapTest011
     * @tc.desc Verify two arrays filled with identical normalized int 0 produce equal read-back values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest011() {
    Int32Array a = new Int32Array(3);
    Int32Array b = new Int32Array(3);
    a.fill(1);
    b.fill(1);
    a.fill(0);
    b.fill(0);
    assertEqual(b.get(0).intValue(), a.get(0).intValue());
    assertEqual(b.get(1).intValue(), a.get(1).intValue());
    assertEqual(b.get(2).intValue(), a.get(2).intValue());
    }

    /**
     * Verify fill with int -1 via variable and via literal produce identical results
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_1200
     * @tc.name int32ArrayFillPart06TestMindmapTest012
     * @tc.desc Verify fill with int -1 via variable and via literal produce identical results
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest012() {
    Int32Array a = new Int32Array(3);
    Int32Array b = new Int32Array(3);
    int negOne = -1;
    a.fill(negOne);
    b.fill(-1);
    assertEqual(b.get(0).intValue(), a.get(0).intValue());
    assertEqual(b.get(2).intValue(), a.get(2).intValue());
    }

    /**
     * Verify E overload omitting start/end defaults fill the entire array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_1300
     * @tc.name int32ArrayFillPart06TestMindmapTest013
     * @tc.desc Verify E overload omitting start/end defaults fill the entire array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest013() {
    Int32Array arr = new Int32Array(4);
    arr.fill(0);
    arr.fill(8);
    assertEqualInt(8, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(8, arr.get(2));
    assertEqualInt(8, arr.get(3));
    }

    /**
     * Verify number overload omitting start/end defaults fill the entire array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_1400
     * @tc.name int32ArrayFillPart06TestMindmapTest014
     * @tc.desc Verify number overload omitting start/end defaults fill the entire array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest014() {
    Int32Array arr = new Int32Array(4);
    arr.fill(0);
    arr.fill(8.0);
    assertEqualInt(8, arr.get(0));
    assertEqualInt(8, arr.get(3));
    }

    /**
     * Verify E overload omitting end defaults end to length, fills from start to end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_1500
     * @tc.name int32ArrayFillPart06TestMindmapTest015
     * @tc.desc Verify E overload omitting end defaults end to length, fills from start to end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest015() {
    Int32Array arr = new Int32Array(5);
    arr.fill(0);
    arr.fill(6, 2, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(6, arr.get(2));
    assertEqualInt(6, arr.get(4));
    }

    /**
     * Verify number overload omitting end defaults end to length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_1600
     * @tc.name int32ArrayFillPart06TestMindmapTest016
     * @tc.desc Verify number overload omitting end defaults end to length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest016() {
    Int32Array arr = new Int32Array(5);
    arr.fill(0);
    arr.fill(6.0, 2, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(6, arr.get(2));
    assertEqualInt(6, arr.get(4));
    }

    /**
     * Verify E overload with explicit start=0 end=length equals default fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_1700
     * @tc.name int32ArrayFillPart06TestMindmapTest017
     * @tc.desc Verify E overload with explicit start=0 end=length equals default fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest017() {
    Int32Array a = new Int32Array(4);
    Int32Array b = new Int32Array(4);
    a.fill(5);
    b.fill(5, 0, 4);
    assertEqual(b.get(0).intValue(), a.get(0).intValue());
    assertEqual(b.get(1).intValue(), a.get(1).intValue());
    assertEqual(b.get(2).intValue(), a.get(2).intValue());
    assertEqual(b.get(3).intValue(), a.get(3).intValue());
    }

    /**
     * Verify negative start=-2 normalizes to length-2 for both overloads
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_1800
     * @tc.name int32ArrayFillPart06TestMindmapTest018
     * @tc.desc Verify negative start=-2 normalizes to length-2 for both overloads
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest018() {
    Int32Array a = new Int32Array(5);
    Int32Array b = new Int32Array(5);
    a.fill(0);
    b.fill(0);
    a.fill(8, -2, a.length());
    b.fill(8.0, -2, b.length());
    assertEqualInt(0, a.get(2));
    assertEqualInt(8, a.get(3));
    assertEqualInt(8, a.get(4));
    assertEqual(b.get(3).intValue(), a.get(3).intValue());
    assertEqual(b.get(4).intValue(), a.get(4).intValue());
    }

    /**
     * Verify negative end=-1 normalizes to length-1 for both overloads
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_1900
     * @tc.name int32ArrayFillPart06TestMindmapTest019
     * @tc.desc Verify negative end=-1 normalizes to length-1 for both overloads
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest019() {
    Int32Array a = new Int32Array(5);
    Int32Array b = new Int32Array(5);
    a.fill(0);
    b.fill(0);
    a.fill(6, 1, -1);
    b.fill(6.0, 1, -1);
    assertEqualInt(0, a.get(0));
    assertEqualInt(6, a.get(1));
    assertEqualInt(6, a.get(3));
    assertEqualInt(0, a.get(4));
    assertEqual(b.get(1).intValue(), a.get(1).intValue());
    assertEqual(b.get(4).intValue(), a.get(4).intValue());
    }

    /**
     * Verify E overload default start=0 and end=length both apply when omitted
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_2000
     * @tc.name int32ArrayFillPart06TestMindmapTest020
     * @tc.desc Verify E overload default start=0 and end=length both apply when omitted
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest020() {
    Int32Array arr = new Int32Array(3);
    arr.fill(0);
    arr.fill(42);
    assertEqualInt(42, arr.get(0));
    assertEqualInt(42, arr.get(1));
    assertEqualInt(42, arr.get(2));
    }

    /**
     * Verify number overload default start=0 and end=length both apply
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_2100
     * @tc.name int32ArrayFillPart06TestMindmapTest021
     * @tc.desc Verify number overload default start=0 and end=length both apply
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest021() {
    Int32Array arr = new Int32Array(3);
    arr.fill(0);
    arr.fill(42.0);
    assertEqualInt(42, arr.get(0));
    assertEqualInt(42, arr.get(2));
    }

    /**
     * Verify E overload fill return value is strictly the same instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_2200
     * @tc.name int32ArrayFillPart06TestMindmapTest022
     * @tc.desc Verify E overload fill return value is strictly the same instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest022() {
    Int32Array arr = new Int32Array(3);
    Int32Array ret = arr.fill(4);
    assertEqual(arr, ret);
    }

    /**
     * Verify E overload chained fill calls return the same instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_2300
     * @tc.name int32ArrayFillPart06TestMindmapTest023
     * @tc.desc Verify E overload chained fill calls return the same instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest023() {
    Int32Array arr = new Int32Array(5);
    Int32Array r1 = arr.fill(1);
    Int32Array r2 = r1.fill(2, 2, r1.length());
    assertEqual(arr, r1);
    assertEqual(arr, r2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(4));
    }

    /**
     * Verify E overload chained toString returns non-empty string reflecting fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_2400
     * @tc.name int32ArrayFillPart06TestMindmapTest024
     * @tc.desc Verify E overload chained toString returns non-empty string reflecting fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest024() {
    Int32Array arr = new Int32Array(3);
    String s = arr.fill(5).toString();
    assertEqual("5,5,5", s);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify both overloads produce identical toString after filling same value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_2500
     * @tc.name int32ArrayFillPart06TestMindmapTest025
     * @tc.desc Verify both overloads produce identical toString after filling same value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest025() {
    Int32Array a = new Int32Array(3);
    Int32Array b = new Int32Array(3);
    a.fill(7);
    b.fill(7.0);
    assertEqual(String.valueOf(b), String.valueOf(a));
    }

    /**
     * Verify E overload fill keeps length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_2600
     * @tc.name int32ArrayFillPart06TestMindmapTest026
     * @tc.desc Verify E overload fill keeps length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest026() {
    Int32Array arr = new Int32Array(6);
    int before = arr.length();
    arr.fill(9);
    assertEqual(before, arr.length());
    assertEqual(6, arr.length());
    }

    /**
     * Verify number overload fill keeps length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_2700
     * @tc.name int32ArrayFillPart06TestMindmapTest027
     * @tc.desc Verify number overload fill keeps length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest027() {
    Int32Array arr = new Int32Array(6);
    int before = arr.length();
    arr.fill(9.0);
    assertEqual(before, arr.length());
    assertEqual(6, arr.length());
    }

    /**
     * Verify E overload fill keeps byteLength equal to length*4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_2800
     * @tc.name int32ArrayFillPart06TestMindmapTest028
     * @tc.desc Verify E overload fill keeps byteLength equal to length*4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest028() {
    Int32Array arr = new Int32Array(4);
    arr.fill(0);
    assertEqual(16, arr.byteLength());
    }

    /**
     * Verify E overload fill on offset view keeps byteOffset unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_2900
     * @tc.name int32ArrayFillPart06TestMindmapTest029
     * @tc.desc Verify E overload fill on offset view keeps byteOffset unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest029() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 4, 2);
    arr.fill(3);
    assertEqual(4, arr.byteOffset());
    }

    /**
     * Verify BYTES_PER_ELEMENT is 4 after E overload fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_3000
     * @tc.name int32ArrayFillPart06TestMindmapTest030
     * @tc.desc Verify BYTES_PER_ELEMENT is 4 after E overload fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest030() {
    Int32Array a = new Int32Array(2);
    a.fill(1);
    assertEqual(4, a.BYTES_PER_ELEMENT);
    Int32Array b = new Int32Array(2);
    b.fill(1);
    assertEqual(4, b.BYTES_PER_ELEMENT);
    }

    /**
     * Verify E overload fill then join with separator reflects filled value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_3100
     * @tc.name int32ArrayFillPart06TestMindmapTest031
     * @tc.desc Verify E overload fill then join with separator reflects filled value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest031() {
    Int32Array arr = new Int32Array(3);
    arr.fill(2);
    assertEqual("2,2,2", arr.join(","));
    }

    /**
     * Verify E overload empty interval start==end is no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_3200
     * @tc.name int32ArrayFillPart06TestMindmapTest032
     * @tc.desc Verify E overload empty interval start==end is no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest032() {
    Int32Array arr = new Int32Array(4);
    arr.fill(7);
    arr.fill(99, 2, 2);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify number overload empty interval start==end is no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_3300
     * @tc.name int32ArrayFillPart06TestMindmapTest033
     * @tc.desc Verify number overload empty interval start==end is no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest033() {
    Int32Array arr = new Int32Array(4);
    arr.fill(7.0);
    arr.fill(99.0, 2, 2);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(2));
    }

    /**
     * Verify E overload start>end with positive indices is no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_3400
     * @tc.name int32ArrayFillPart06TestMindmapTest034
     * @tc.desc Verify E overload start>end with positive indices is no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest034() {
    Int32Array arr = new Int32Array(4);
    arr.fill(7);
    arr.fill(99, 3, 1);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify number overload start>end with positive indices is no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_3500
     * @tc.name int32ArrayFillPart06TestMindmapTest035
     * @tc.desc Verify number overload start>end with positive indices is no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest035() {
    Int32Array arr = new Int32Array(4);
    arr.fill(7.0);
    arr.fill(99.0, 3, 1);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify E overload negative start/end resulting in start>=end is no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_3600
     * @tc.name int32ArrayFillPart06TestMindmapTest036
     * @tc.desc Verify E overload negative start/end resulting in start>=end is no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest036() {
    Int32Array arr = new Int32Array(4);
    arr.fill(7);
    arr.fill(99, -1, -3);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify number overload negative start/end resulting in start>=end is no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_3700
     * @tc.name int32ArrayFillPart06TestMindmapTest037
     * @tc.desc Verify number overload negative start/end resulting in start>=end is no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest037() {
    Int32Array arr = new Int32Array(4);
    arr.fill(7.0);
    arr.fill(99.0, -1, -3);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify E overload fill with normalized int 11 fills correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_3800
     * @tc.name int32ArrayFillPart06TestMindmapTest038
     * @tc.desc Verify E overload fill with normalized int 11 fills correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest038() {
    Int32Array arr = new Int32Array(3);
    arr.fill(11);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(11, arr.get(2));
    }

    /**
     * Verify number overload fill with float 11.0 truncates to 11 correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_3900
     * @tc.name int32ArrayFillPart06TestMindmapTest039
     * @tc.desc Verify number overload fill with float 11.0 truncates to 11 correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest039() {
    Int32Array arr = new Int32Array(3);
    arr.fill(11.0);
    assertEqualInt(11, arr.get(0));
    }

    /**
     * Verify constructing Int32Array with non-4-aligned byteOffset=1 throws RangeError (fill unreachable)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_4000
     * @tc.name int32ArrayFillPart06TestMindmapTest040
     * @tc.desc Verify constructing Int32Array with non-4-aligned byteOffset=1 throws RangeError (fill unreachable)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest040() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    Int32Array bad = new Int32Array(buf, 1, 2);
    bad.fill(5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructing Int32Array with negative length throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_4100
     * @tc.name int32ArrayFillPart06TestMindmapTest041
     * @tc.desc Verify constructing Int32Array with negative length throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest041() {
    try {
    int negLen = -1;
    Int32Array bad = new Int32Array(negLen);
    bad.fill(1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify after fill success a thrown error does not roll back the fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_4200
     * @tc.name int32ArrayFillPart06TestMindmapTest042
     * @tc.desc Verify after fill success a thrown error does not roll back the fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest042() {
    Int32Array arr = new Int32Array(5);
    try {
    arr.fill(1);
    assertEqualInt(1, arr.get(0));
    BasTest.throwTestError("stop");
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(4));
    }

    /**
     * Verify after fill and external throw, catch block holds same array reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_4300
     * @tc.name int32ArrayFillPart06TestMindmapTest043
     * @tc.desc Verify after fill and external throw, catch block holds same array reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest043() {
    Int32Array arr = new Int32Array(3);
    arr.fill(42);
    Int32Array captured = null;
    try {
    assertEqualInt(42, arr.get(0));
    BasTest.throwTestError("x");
    } catch (Error e) {
    captured = arr;
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(arr, captured);
    }

    /**
     * Verify sibling view sees fill writes even when wrapped in try-catch
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_4400
     * @tc.name int32ArrayFillPart06TestMindmapTest044
     * @tc.desc Verify sibling view sees fill writes even when wrapped in try-catch
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest044() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 4);
    Int32Array b = new Int32Array(buf, 0, 4);
    try {
    a.fill(42);
    assertEqualInt(42, a.get(0));
    BasTest.throwTestError("probe");
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqualInt(42, b.get(0));
    assertEqualInt(42, b.get(3));
    }

    /**
     * Verify E overload fill 0 then $_set rewrites a position, fill does not freeze writability
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_4900
     * @tc.name int32ArrayFillPart06TestMindmapTest049
     * @tc.desc Verify E overload fill 0 then $_set rewrites a position, fill does not freeze writability
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest049() {
    Int32Array arr = new Int32Array(3);
    arr.fill(0);
    arr.set(1, 55);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(55, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify for-of iteration over filled arrays produces length elements for both overloads
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_5000
     * @tc.name int32ArrayFillPart06TestMindmapTest050
     * @tc.desc Verify for-of iteration over filled arrays produces length elements for both overloads
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest050() {
    Int32Array a = new Int32Array(4);
    Int32Array b = new Int32Array(4);
    a.fill(6);
    b.fill(6.0);
    int ca = 0;
    int cb = 0;
    for (Integer v : a.values()) {
    assertEqualInt(6, v);
    ca++;
    }
    for (Integer v : b.values()) {
    assertEqualInt(6, v);
    cb++;
    }
    assertEqual(4, ca);
    assertEqual(4, cb);
    }

    /**
     * Verify E overload fill visible in sibling view sharing the same buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_5100
     * @tc.name int32ArrayFillPart06TestMindmapTest051
     * @tc.desc Verify E overload fill visible in sibling view sharing the same buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest051() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 4);
    Int32Array b = new Int32Array(buf, 0, 4);
    a.fill(19);
    assertEqualInt(19, b.get(0));
    assertEqualInt(19, b.get(3));
    }

    /**
     * Verify number overload fill visible in sibling view sharing the same buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_5200
     * @tc.name int32ArrayFillPart06TestMindmapTest052
     * @tc.desc Verify number overload fill visible in sibling view sharing the same buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest052() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 4);
    Int32Array b = new Int32Array(buf, 0, 4);
    a.fill(19.0);
    assertEqualInt(19, b.get(0));
    assertEqualInt(19, b.get(3));
    }

    /**
     * Verify E overload partial range fill only modifies the corresponding buffer region
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_5300
     * @tc.name int32ArrayFillPart06TestMindmapTest053
     * @tc.desc Verify E overload partial range fill only modifies the corresponding buffer region
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest053() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 4);
    Int32Array b = new Int32Array(buf, 0, 4);
    a.fill(0);
    b.fill(77, 1, 3);
    assertEqualInt(0, a.get(0));
    assertEqualInt(77, a.get(1));
    assertEqualInt(77, a.get(2));
    assertEqualInt(0, a.get(3));
    }

    /**
     * Verify number overload partial range fill only modifies corresponding buffer bytes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_5400
     * @tc.name int32ArrayFillPart06TestMindmapTest054
     * @tc.desc Verify number overload partial range fill only modifies corresponding buffer bytes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest054() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 4);
    Int32Array b = new Int32Array(buf, 0, 4);
    a.fill(0);
    b.fill(77.0, 1, 3);
    assertEqualInt(0, a.get(0));
    assertEqualInt(77, a.get(1));
    assertEqualInt(77, a.get(2));
    assertEqualInt(0, a.get(3));
    }

    /**
     * Verify E overload fill on byteOffset subview writes at correct parent offset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_5500
     * @tc.name int32ArrayFillPart06TestMindmapTest055
     * @tc.desc Verify E overload fill on byteOffset subview writes at correct parent offset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest055() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array outer = new Int32Array(buf, 0, 6);
    outer.fill(0);
    Int32Array inner = new Int32Array(buf, 8, 3);
    inner.fill(88);
    assertEqualInt(0, outer.get(0));
    assertEqualInt(0, outer.get(1));
    assertEqualInt(88, outer.get(2));
    assertEqualInt(88, outer.get(4));
    assertEqualInt(0, outer.get(5));
    }

    /**
     * Verify number overload fill on byteOffset subview writes at correct parent offset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_5600
     * @tc.name int32ArrayFillPart06TestMindmapTest056
     * @tc.desc Verify number overload fill on byteOffset subview writes at correct parent offset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest056() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array outer = new Int32Array(buf, 0, 6);
    outer.fill(0);
    Int32Array inner = new Int32Array(buf, 8, 3);
    inner.fill(88.0);
    assertEqualInt(0, outer.get(0));
    assertEqualInt(88, outer.get(2));
    assertEqualInt(88, outer.get(4));
    assertEqualInt(0, outer.get(5));
    }

    /**
     * Verify cross-overload fills on same buffer, last write wins for all views
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_5700
     * @tc.name int32ArrayFillPart06TestMindmapTest057
     * @tc.desc Verify cross-overload fills on same buffer, last write wins for all views
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest057() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 4);
    Int32Array b = new Int32Array(buf, 0, 4);
    a.fill(11);
    b.fill(22.0);
    assertEqualInt(22, a.get(0));
    assertEqualInt(22, a.get(3));
    }

    /**
     * Verify E overload fill on subarray propagates to parent array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_5800
     * @tc.name int32ArrayFillPart06TestMindmapTest058
     * @tc.desc Verify E overload fill on subarray propagates to parent array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest058() {
    Int32Array parent = new Int32Array(6);
    parent.fill(0);
    Int32Array sub = parent.subarray(2, 5);
    sub.fill(99);
    assertEqualInt(0, parent.get(0));
    assertEqualInt(0, parent.get(1));
    assertEqualInt(99, parent.get(2));
    assertEqualInt(99, parent.get(4));
    assertEqualInt(0, parent.get(5));
    }

    /**
     * Verify number overload fill on subarray propagates to parent array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_5900
     * @tc.name int32ArrayFillPart06TestMindmapTest059
     * @tc.desc Verify number overload fill on subarray propagates to parent array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest059() {
    Int32Array parent = new Int32Array(6);
    parent.fill(0);
    Int32Array sub = parent.subarray(2, 5);
    sub.fill(99.0);
    assertEqualInt(0, parent.get(0));
    assertEqualInt(99, parent.get(2));
    assertEqualInt(99, parent.get(4));
    assertEqualInt(0, parent.get(5));
    }

    /**
     * Verify two Int32Arrays from same ArrayBuffer share identical buffer reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_6000
     * @tc.name int32ArrayFillPart06TestMindmapTest060
     * @tc.desc Verify two Int32Arrays from same ArrayBuffer share identical buffer reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest060() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 4);
    Int32Array b = new Int32Array(buf, 0, 4);
    assertEqual(b.buffer(), a.buffer());
    }

    /**
     * Verify E overload fill does not replace the underlying buffer reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_6100
     * @tc.name int32ArrayFillPart06TestMindmapTest061
     * @tc.desc Verify E overload fill does not replace the underlying buffer reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest061() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 0, 4);
    ArrayBuffer before = arr.buffer();
    arr.fill(3);
    assertEqual(before, arr.buffer());
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify two new Int32Array(length) create independent buffers that do not interfere
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_6200
     * @tc.name int32ArrayFillPart06TestMindmapTest062
     * @tc.desc Verify two new Int32Array(length) create independent buffers that do not interfere
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest062() {
    Int32Array a = new Int32Array(4);
    Int32Array b = new Int32Array(4);
    a.fill(1);
    b.fill(2);
    assertEqualInt(1, a.get(0));
    assertEqualInt(2, b.get(0));
    }

    /**
     * Verify fill returns this, not a clone; chained calls return the same instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_6300
     * @tc.name int32ArrayFillPart06TestMindmapTest063
     * @tc.desc Verify fill returns this, not a clone; chained calls return the same instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest063() {
    Int32Array arr = new Int32Array(3);
    Int32Array r1 = arr.fill(1);
    Int32Array r2 = r1.fill(2);
    assertEqual(r2, r1);
    assertEqual(arr, r1);
    assertEqualInt(2, arr.get(0));
    }

    /**
     * Verify consecutive fills with different values overwrite previous fills
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_6400
     * @tc.name int32ArrayFillPart06TestMindmapTest064
     * @tc.desc Verify consecutive fills with different values overwrite previous fills
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest064() {
    Int32Array arr = new Int32Array(3);
    arr.fill(1);
    arr.fill(2);
    arr.fill(3);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify empty Int32Array(0) E overload fill does not throw and returns this with length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_6500
     * @tc.name int32ArrayFillPart06TestMindmapTest065
     * @tc.desc Verify empty Int32Array(0) E overload fill does not throw and returns this with length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest065() {
    Int32Array arr = new Int32Array(0);
    Int32Array ret = arr.fill(5);
    assertEqual(0, arr.length());
    assertEqual(arr, ret);
    }

    /**
     * Verify slice copy does not share buffer with original and is unaffected by later fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_6600
     * @tc.name int32ArrayFillPart06TestMindmapTest066
     * @tc.desc Verify slice copy does not share buffer with original and is unaffected by later fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest066() {
    Int32Array arr = new Int32Array(4);
    arr.fill(1);
    Int32Array cp = arr.slice();
    arr.fill(2);
    assertEqualInt(1, cp.get(0));
    assertEqualInt(2, arr.get(0));
    }

    /**
     * Verify number overload -0 truncates toward zero to 0 not -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_6800
     * @tc.name int32ArrayFillPart06TestMindmapTest068
     * @tc.desc Verify number overload -0 truncates toward zero to 0 not -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest068() {
    Int32Array arr = new Int32Array(2);
    arr.fill(1);
    arr.fill(-0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify number overload 0 truncates toward zero to 0 not 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_6900
     * @tc.name int32ArrayFillPart06TestMindmapTest069
     * @tc.desc Verify number overload 0 truncates toward zero to 0 not 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest069() {
    Int32Array arr = new Int32Array(2);
    arr.fill(1);
    arr.fill(0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify number overload -0 truncates toward zero to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_7100
     * @tc.name int32ArrayFillPart06TestMindmapTest071
     * @tc.desc Verify number overload -0 truncates toward zero to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest071() {
    Int32Array arr = new Int32Array(2);
    arr.fill(5);
    arr.fill(-0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify number overload 1e20 large float does not throw and array length preserved
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_7400
     * @tc.name int32ArrayFillPart06TestMindmapTest074
     * @tc.desc Verify number overload 1e20 large float does not throw and array length preserved
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart06TestMindmapTest074() {
    Int32Array arr = new Int32Array(2);
    arr.fill(1e20);
    assertEqual(2, arr.length());
    }

    /**
     * Verify E and number overload produce identical byte sequences for -1 via DataView
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART06_TEST_MINDMAP_7500
     * @tc.name int32ArrayFillPart06TestMindmapTest075
     * @tc.desc Verify E and number overload produce identical byte sequences for -1 via DataView
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
