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
 * Int32ArrayFillPart02Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFillPart02Test extends BasTest {
    /**
     * Verify number value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_0100
     * @tc.name int32ArrayFillPart02TestMindmapTest001
     * @tc.desc Verify number value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest001() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    Int32Array ret = arr.fill(7.0);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqual(3, ret.length());
    }

    /**
     * Verify number value start value start
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_0200
     * @tc.name int32ArrayFillPart02TestMindmapTest002
     * @tc.desc Verify number value start value start
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest002() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.fill(5, 1, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(5, arr.get(2));
    assertEqualInt(5, arr.get(3));
    }

    /**
     * Verify number value start end value [start, end)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_0300
     * @tc.name int32ArrayFillPart02TestMindmapTest003
     * @tc.desc Verify number value start end value [start, end)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest003() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(8.0, 1, 4);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(8, arr.get(2));
    assertEqualInt(8, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    /**
     * Verify number fill this
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_0400
     * @tc.name int32ArrayFillPart02TestMindmapTest004
     * @tc.desc Verify number fill this
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest004() {
    Int32Array arr = new Int32Array(3);
    Int32Array ret = arr.fill(2);
    assertEqual(arr, ret);
    }

    /**
     * Verify number length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_0500
     * @tc.name int32ArrayFillPart02TestMindmapTest005
     * @tc.desc Verify number length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest005() {
    Int32Array arr = new Int32Array(4);
    arr.fill(3);
    assertEqual(4, arr.length());
    }

    /**
     * Verify value Number.NaN(number) ToInt32 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_0600
     * @tc.name int32ArrayFillPart02TestMindmapTest006
     * @tc.desc Verify value Number.NaN(number) ToInt32 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest006() {
    Int32Array arr = new Int32Array(new int[] {7, 7, 7});
    arr.fill(Double.NaN);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify value +Number.POSITIVE_INFINITY(number) ToInt32 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_0700
     * @tc.name int32ArrayFillPart02TestMindmapTest007
     * @tc.desc Verify value +Number.POSITIVE_INFINITY(number) ToInt32 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest007() {
    Int32Array arr = new Int32Array(2);
    arr.fill(Double.POSITIVE_INFINITY);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify value Double.NEGATIVE_INFINITY(number) ToInt32 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_0800
     * @tc.name int32ArrayFillPart02TestMindmapTest008
     * @tc.desc Verify value Double.NEGATIVE_INFINITY(number) ToInt32 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest008() {
    Int32Array arr = new Int32Array(2);
    arr.fill(Double.NEGATIVE_INFINITY);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify value 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_0900
     * @tc.name int32ArrayFillPart02TestMindmapTest009
     * @tc.desc Verify value 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest009() {
    Int32Array arr = new Int32Array(3);
    arr.fill(0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify value -0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_1000
     * @tc.name int32ArrayFillPart02TestMindmapTest010
     * @tc.desc Verify value -0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest010() {
    Int32Array arr = new Int32Array(3);
    arr.fill(-0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify value -0 0 -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_1100
     * @tc.name int32ArrayFillPart02TestMindmapTest011
     * @tc.desc Verify value -0 0 -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest011() {
    Int32Array arr = new Int32Array(2);
    arr.fill(-0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify value 3.7 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_1200
     * @tc.name int32ArrayFillPart02TestMindmapTest012
     * @tc.desc Verify value 3.7 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest012() {
    Int32Array arr = new Int32Array(2);
    arr.fill(3.7);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(3, arr.get(1));
    }

    /**
     * Verify value 0.999999 0 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_1400
     * @tc.name int32ArrayFillPart02TestMindmapTest014
     * @tc.desc Verify value 0.999999 0 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest014() {
    Int32Array arr = new Int32Array(2);
    arr.fill(0.999999);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify value -0.999999 0 -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_1500
     * @tc.name int32ArrayFillPart02TestMindmapTest015
     * @tc.desc Verify value -0.999999 0 -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest015() {
    Int32Array arr = new Int32Array(2);
    arr.fill(-0.999999);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify value 1.999999 1 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_1600
     * @tc.name int32ArrayFillPart02TestMindmapTest016
     * @tc.desc Verify value 1.999999 1 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest016() {
    Int32Array arr = new Int32Array(2);
    arr.fill(1.999999);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(1));
    }

    /**
     * Verify value 2.5e2(250.0) 250
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_2100
     * @tc.name int32ArrayFillPart02TestMindmapTest021
     * @tc.desc Verify value 2.5e2(250.0) 250
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest021() {
    Int32Array arr = new Int32Array(2);
    arr.fill(2.5e2);
    assertEqualInt(250, arr.get(0));
    assertEqualInt(250, arr.get(1));
    }

    /**
     * Verify value 4294967296.0(2^32) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_2900
     * @tc.name int32ArrayFillPart02TestMindmapTest029
     * @tc.desc Verify value 4294967296.0(2^32) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest029() {
    Int32Array arr = new Int32Array(2);
    arr.fill(4294967296.0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify value 4294967297.0(2^32+1) 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_3000
     * @tc.name int32ArrayFillPart02TestMindmapTest030
     * @tc.desc Verify value 4294967297.0(2^32+1) 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest030() {
    Int32Array arr = new Int32Array(2);
    arr.fill(4294967297.0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(1));
    }

    /**
     * Verify value -4294967296.0(-2^32) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_3100
     * @tc.name int32ArrayFillPart02TestMindmapTest031
     * @tc.desc Verify value -4294967296.0(-2^32) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest031() {
    Int32Array arr = new Int32Array(2);
    arr.fill(-4294967296.0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify value -4.294967295e9(-(2^32-1)) 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_3300
     * @tc.name int32ArrayFillPart02TestMindmapTest033
     * @tc.desc Verify value -4.294967295e9(-(2^32-1)) 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest033() {
    Int32Array arr = new Int32Array(2);
    arr.fill(-4.294967295e9);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(1));
    }

    /**
     * Verify value 0.0001 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_3800
     * @tc.name int32ArrayFillPart02TestMindmapTest038
     * @tc.desc Verify value 0.0001 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest038() {
    Int32Array arr = new Int32Array(2);
    arr.fill(0.0001);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify value -0.0001 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_3900
     * @tc.name int32ArrayFillPart02TestMindmapTest039
     * @tc.desc Verify value -0.0001 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest039() {
    Int32Array arr = new Int32Array(2);
    arr.fill(-0.0001);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify start=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_4000
     * @tc.name int32ArrayFillPart02TestMindmapTest040
     * @tc.desc Verify start=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest040() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(7.0, 0, arr.length());
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify start=-1()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_4100
     * @tc.name int32ArrayFillPart02TestMindmapTest041
     * @tc.desc Verify start=-1()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest041() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(8.0, -1, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(8, arr.get(3));
    }

    /**
     * Verify start=-length(-4 4) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_4200
     * @tc.name int32ArrayFillPart02TestMindmapTest042
     * @tc.desc Verify start=-length(-4 4) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest042() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(6.0, -4, arr.length());
    assertEqualInt(6, arr.get(0));
    assertEqualInt(6, arr.get(1));
    assertEqualInt(6, arr.get(2));
    assertEqualInt(6, arr.get(3));
    }

    /**
     * Verify start=-(length+1) -length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_4300
     * @tc.name int32ArrayFillPart02TestMindmapTest043
     * @tc.desc Verify start=-(length+1) -length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest043() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(4, -5, arr.length());
    assertEqualInt(4, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(4, arr.get(2));
    }

    /**
     * Verify start=length() no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_4400
     * @tc.name int32ArrayFillPart02TestMindmapTest044
     * @tc.desc Verify start=length() no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest044() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(9.0, 3, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify start length+100 clamp length no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_4500
     * @tc.name int32ArrayFillPart02TestMindmapTest045
     * @tc.desc Verify start length+100 clamp length no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest045() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(9.0, 103, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify start=length-1()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_4600
     * @tc.name int32ArrayFillPart02TestMindmapTest046
     * @tc.desc Verify start=length-1()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest046() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(5, 3, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(5, arr.get(3));
    }

    /**
     * Verify start=-2()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_4700
     * @tc.name int32ArrayFillPart02TestMindmapTest047
     * @tc.desc Verify start=-2()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest047() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(7.0, -2, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify start=-1000 clamp 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_4800
     * @tc.name int32ArrayFillPart02TestMindmapTest048
     * @tc.desc Verify start=-1000 clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest048() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(4, -1000, arr.length());
    assertEqualInt(4, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(4, arr.get(2));
    }

    /**
     * Verify fill partial range from index 1 to 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_4900
     * @tc.name int32ArrayFillPart02TestMindmapTest049
     * @tc.desc Verify fill partial range from index 1 to 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest049() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(9, 1, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(9, arr.get(1));
    assertEqualInt(9, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end length(99) clamp length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_5000
     * @tc.name int32ArrayFillPart02TestMindmapTest050
     * @tc.desc Verify end length(99) clamp length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest050() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(6.0, 0, 99);
    assertEqualInt(6, arr.get(0));
    assertEqualInt(6, arr.get(1));
    assertEqualInt(6, arr.get(2));
    }

    /**
     * Verify end=0 start>=end no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_5100
     * @tc.name int32ArrayFillPart02TestMindmapTest051
     * @tc.desc Verify end=0 start>=end no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest051() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(9.0, 0, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify end=-1()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_5200
     * @tc.name int32ArrayFillPart02TestMindmapTest052
     * @tc.desc Verify end=-1()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest052() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(5, 0, -1);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(5, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end=-length(0) start=0 no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_5300
     * @tc.name int32ArrayFillPart02TestMindmapTest053
     * @tc.desc Verify end=-length(0) start=0 no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest053() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(8.0, 0, -4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end -length(-10) 0 no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_5400
     * @tc.name int32ArrayFillPart02TestMindmapTest054
     * @tc.desc Verify end -length(-10) 0 no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest054() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(9.0, 0, -10);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify end=-2()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_5500
     * @tc.name int32ArrayFillPart02TestMindmapTest055
     * @tc.desc Verify end=-2()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest055() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(7.0, 0, -2);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end=1()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_5600
     * @tc.name int32ArrayFillPart02TestMindmapTest056
     * @tc.desc Verify end=1()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest056() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(6.0, 0, 1);
    assertEqualInt(6, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end=-1000 clamp 0 no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_5700
     * @tc.name int32ArrayFillPart02TestMindmapTest057
     * @tc.desc Verify end=-1000 clamp 0 no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest057() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(7.0, 0, -1000);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify start end(2) no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_5800
     * @tc.name int32ArrayFillPart02TestMindmapTest058
     * @tc.desc Verify start end(2) no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest058() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(9.0, 2, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify start end(3>1) start>=end no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_5900
     * @tc.name int32ArrayFillPart02TestMindmapTest059
     * @tc.desc Verify start end(3>1) start>=end no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest059() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(9.0, 3, 1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify start=-1 end(3>2) no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_6000
     * @tc.name int32ArrayFillPart02TestMindmapTest060
     * @tc.desc Verify start=-1 end(3>2) no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest060() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(9.0, -1, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify start=-3 end=-1 [1, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_6100
     * @tc.name int32ArrayFillPart02TestMindmapTest061
     * @tc.desc Verify start=-3 end=-1 [1, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest061() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(8.0, -3, -1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(8, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify start=-2 end=-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_6200
     * @tc.name int32ArrayFillPart02TestMindmapTest062
     * @tc.desc Verify start=-2 end=-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest062() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(7.0, -2, -1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify start=-3 end=4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_6300
     * @tc.name int32ArrayFillPart02TestMindmapTest063
     * @tc.desc Verify start=-3 end=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest063() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(0, -3, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(0, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify start=1 end=length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_6400
     * @tc.name int32ArrayFillPart02TestMindmapTest064
     * @tc.desc Verify start=1 end=length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest064() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(6.0, 1, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(6, arr.get(1));
    assertEqualInt(6, arr.get(2));
    assertEqualInt(6, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify start=1 end=length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_6500
     * @tc.name int32ArrayFillPart02TestMindmapTest065
     * @tc.desc Verify start=1 end=length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest065() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(3, 1, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(3, arr.get(3));
    }

    /**
     * Verify number fill Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_6600
     * @tc.name int32ArrayFillPart02TestMindmapTest066
     * @tc.desc Verify number fill Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest066() {
    Int32Array arr = new Int32Array(2);
    Int32Array ret = arr.fill(1);
    assertEqual(arr, ret);
    }

    /**
     * Verify number fill byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_6700
     * @tc.name int32ArrayFillPart02TestMindmapTest067
     * @tc.desc Verify number fill byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest067() {
    Int32Array arr = new Int32Array(4);
    int before = arr.byteLength();
    arr.fill(7.5);
    assertEqual(before, arr.byteLength());
    assertEqual(16, before);
    }

    /**
     * Verify number fill byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_6800
     * @tc.name int32ArrayFillPart02TestMindmapTest068
     * @tc.desc Verify number fill byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest068() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array arr = new Int32Array(buf, 4, 4);
    int offBefore = arr.byteOffset();
    arr.fill(2);
    assertEqual(offBefore, arr.byteOffset());
    assertEqual(4, offBefore);
    }

    /**
     * Verify number fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_6900
     * @tc.name int32ArrayFillPart02TestMindmapTest069
     * @tc.desc Verify number fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest069() {
    Int32Array arr = new Int32Array(4);
    arr.fill(1).fill(2, 2, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(1));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify fill buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_7000
     * @tc.name int32ArrayFillPart02TestMindmapTest070
     * @tc.desc Verify fill buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest070() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 0, 3);
    ArrayBuffer bufBefore = arr.buffer();
    arr.fill(1);
    assertEqual(bufBefore, arr.buffer());
    }

    /**
     * Verify length=0 fill number this length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_7100
     * @tc.name int32ArrayFillPart02TestMindmapTest071
     * @tc.desc Verify length=0 fill number this length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest071() {
    Int32Array arr = new Int32Array(0);
    Int32Array ret = arr.fill(5);
    assertEqual(arr, ret);
    assertEqual(0, arr.length());
    }

    /**
     * Verify fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_7200
     * @tc.name int32ArrayFillPart02TestMindmapTest072
     * @tc.desc Verify fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest072() {
    Int32Array arr = new Int32Array(1);
    arr.fill(42.5);
    assertEqualInt(42, arr.get(0));
    assertEqual(1, arr.length());
    }

    /**
     * Verify start=1 fill no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_7300
     * @tc.name int32ArrayFillPart02TestMindmapTest073
     * @tc.desc Verify start=1 fill no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest073() {
    Int32Array arr = new Int32Array(new int[] {7});
    arr.fill(9.0, 1, arr.length());
    assertEqualInt(7, arr.get(0));
    }

    /**
     * Verify fill start/end no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_7400
     * @tc.name int32ArrayFillPart02TestMindmapTest074
     * @tc.desc Verify fill start/end no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest074() {
    Int32Array arr = new Int32Array(0);
    arr.fill(3, 0, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify fill 2147483648.0 fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_7900
     * @tc.name int32ArrayFillPart02TestMindmapTest079
     * @tc.desc Verify fill 2147483648.0 fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest079() {
    Int32Array arr = new Int32Array(2);
    arr.fill(2147483648.0);
    arr.fill(0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_8000
     * @tc.name int32ArrayFillPart02TestMindmapTest080
     * @tc.desc Verify fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest080() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0, 0});
    arr.fill(3, 1, 4);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(3, arr.get(3));
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify fill Number.NaN 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_8100
     * @tc.name int32ArrayFillPart02TestMindmapTest081
     * @tc.desc Verify fill Number.NaN 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest081() {
    Int32Array arr = new Int32Array(new int[] {5, 5, 5, 5, 5});
    arr.fill(Double.NaN, 1, 4);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(0, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify number fill buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_8200
     * @tc.name int32ArrayFillPart02TestMindmapTest082
     * @tc.desc Verify number fill buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest082() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf);
    Int32Array b = new Int32Array(buf);
    a.fill(7.0);
    assertEqualInt(7, b.get(0));
    assertEqualInt(7, b.get(1));
    assertEqualInt(7, b.get(2));
    assertEqualInt(7, b.get(3));
    }

    /**
     * Verify number fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_8300
     * @tc.name int32ArrayFillPart02TestMindmapTest083
     * @tc.desc Verify number fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart02TestMindmapTest083() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf);
    Int32Array b = new Int32Array(buf);
    a.fill(0);
    a.fill(11.0, 1, 3);
    assertEqualInt(0, b.get(0));
    assertEqualInt(11, b.get(1));
    assertEqualInt(11, b.get(2));
    assertEqualInt(0, b.get(3));
    }

    /**
     * Verify fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART02_TEST_MINDMAP_9800
     * @tc.name int32ArrayFillPart02TestMindmapTest098
     * @tc.desc Verify fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
