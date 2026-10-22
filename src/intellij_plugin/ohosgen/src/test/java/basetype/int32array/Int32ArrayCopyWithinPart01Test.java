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
import basetype.common.BasTest;

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayCopyWithinPart01Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayCopyWithinPart01Test extends BasTest {
    /**
     * Verify target start end length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_0100
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest001
     * @tc.desc Verify target start end length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest001() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(3, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(1, arr.get(3));
    assertEqualInt(2, arr.get(4));
    }

    /**
     * Verify target start end [start, end)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_0200
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest002
     * @tc.desc Verify target start end [start, end)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest002() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(3, 0, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(1, arr.get(3));
    assertEqualInt(2, arr.get(4));
    }

    /**
     * Verify 2 start length-start
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_0300
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest003
     * @tc.desc Verify 2 start length-start
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest003() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, 2);
    assertEqualInt(30, arr.get(0));
    assertEqualInt(40, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify 3 end=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_0400
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest004
     * @tc.desc Verify 3 end=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest004() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 0, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify 2 1 target=0 start=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_0500
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest005
     * @tc.desc Verify 2 1 target=0 start=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest005() {
    Int32Array arr = new Int32Array(new int[] {42});
    arr.copyWithin(0, 0);
    assertEqual(1, arr.length());
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify 3 end length end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_0600
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest006
     * @tc.desc Verify 3 end length end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest006() {
    Int32Array a1 = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array a2 = new Int32Array(new int[] {1, 2, 3, 4, 5});
    a1.copyWithin(2, 0);
    a2.copyWithin(2, 0, 5);
    assertEqual(a1.get(2).intValue(), a2.get(2).intValue());
    assertEqual(a1.get(3).intValue(), a2.get(3).intValue());
    assertEqual(a1.get(4).intValue(), a2.get(4).intValue());
    }

    /**
     * Verify target 1 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_0700
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest007
     * @tc.desc Verify target 1 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest007() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(1, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(5, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify target length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_0800
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest008
     * @tc.desc Verify target length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest008() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(3, 0, 1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(1, arr.get(3));
    }

    /**
     * Verify target length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_0900
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest009
     * @tc.desc Verify target length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest009() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(4, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify target length clamp length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_1000
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest010
     * @tc.desc Verify target length clamp length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest010() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.copyWithin(99, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify target -1 length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_1100
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest011
     * @tc.desc Verify target -1 length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest011() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(-1, 0, 1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(1, arr.get(3));
    }

    /**
     * Verify target -length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_1200
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest012
     * @tc.desc Verify target -length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest012() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(-4, 2);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify target -(length+1) clamp 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_1300
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest013
     * @tc.desc Verify target -(length+1) clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest013() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(-5, 2);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify target INT_MAX clamp length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_1400
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest014
     * @tc.desc Verify target INT_MAX clamp length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest014() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    arr.copyWithin(2147483647, 0);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(9, arr.get(2));
    }

    /**
     * Verify target INT_MIN clamp 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_1500
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest015
     * @tc.desc Verify target INT_MIN clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest015() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.copyWithin(Integer.MIN_VALUE, 1);
    assertEqualInt(2, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify target length/2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_1600
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest016
     * @tc.desc Verify target length/2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest016() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(3, 0, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(1, arr.get(3));
    assertEqualInt(2, arr.get(4));
    assertEqualInt(6, arr.get(5));
    }

    /**
     * Verify target -2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_1700
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest017
     * @tc.desc Verify target -2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest017() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-2, 0, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(1, arr.get(3));
    assertEqualInt(2, arr.get(4));
    }

    /**
     * Verify target int length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_1800
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest018
     * @tc.desc Verify target int length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest018() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    arr.copyWithin(1000000, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    }

    /**
     * Verify target -length clamp 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_1900
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest019
     * @tc.desc Verify target -length clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest019() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(-1000000, 2);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify start 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_2000
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest020
     * @tc.desc Verify start 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest020() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 0);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify start 1 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_2100
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest021
     * @tc.desc Verify start 1 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest021() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, 1);
    assertEqualInt(20, arr.get(0));
    assertEqualInt(30, arr.get(1));
    assertEqualInt(40, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify start length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_2200
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest022
     * @tc.desc Verify start length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest022() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 3);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify start length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_2300
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest023
     * @tc.desc Verify start length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest023() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.copyWithin(0, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify start -1 length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_2400
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest024
     * @tc.desc Verify start -1 length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest024() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, -1);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify start -length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_2500
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest025
     * @tc.desc Verify start -length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest025() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, -4);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify start -(length+1) clamp 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_2600
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest026
     * @tc.desc Verify start -(length+1) clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest026() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, -5);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify start clamp length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_2700
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest027
     * @tc.desc Verify start clamp length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest027() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7});
    arr.copyWithin(0, 1000000);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(6, arr.get(1));
    assertEqualInt(7, arr.get(2));
    }

    /**
     * Verify start INT_MAX clamp length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_2800
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest028
     * @tc.desc Verify start INT_MAX clamp length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest028() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.copyWithin(0, 2147483647);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify start INT_MIN clamp 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_2900
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest029
     * @tc.desc Verify start INT_MIN clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest029() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.copyWithin(1, Integer.MIN_VALUE);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(1));
    assertEqualInt(2, arr.get(2));
    }

    /**
     * Verify start -2 length-2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_3000
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest030
     * @tc.desc Verify start -2 length-2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest030() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, -2);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify start -length clamp 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_3100
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest031
     * @tc.desc Verify start -length clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest031() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, -1000000);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify start 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_3200
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest032
     * @tc.desc Verify start 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest032() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(0, 2);
    assertEqualInt(30, arr.get(0));
    assertEqualInt(40, arr.get(1));
    assertEqualInt(50, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    /**
     * Verify 3 start end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_3300
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest033
     * @tc.desc Verify 3 start end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest033() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 3, 1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify 3 start end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_3400
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest034
     * @tc.desc Verify 3 start end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest034() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 2, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end 1 [start, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_3500
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest035
     * @tc.desc Verify end 1 [start, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest035() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 0, 1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_3600
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest036
     * @tc.desc Verify end length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest036() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 0, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end length [start, length) end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_3700
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest037
     * @tc.desc Verify end length [start, length) end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest037() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 0, 4);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify end -1 length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_3800
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest038
     * @tc.desc Verify end -1 length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest038() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 0, -1);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify end -length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_3900
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest039
     * @tc.desc Verify end -length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest039() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 0, -4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end -(length+1) clamp 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_4000
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest040
     * @tc.desc Verify end -(length+1) clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest040() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 0, -5);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end length clamp length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_4100
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest041
     * @tc.desc Verify end length clamp length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest041() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 0, 99);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify end INT_MAX clamp length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_4200
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest042
     * @tc.desc Verify end INT_MAX clamp length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest042() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 0, 2147483647);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify end INT_MIN clamp 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_4300
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest043
     * @tc.desc Verify end INT_MIN clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest043() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 0, Integer.MIN_VALUE);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end -2 length-2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_4400
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest044
     * @tc.desc Verify end -2 length-2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest044() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(3, 0, -2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(1, arr.get(3));
    assertEqualInt(2, arr.get(4));
    }

    /**
     * Verify end 1000 clamp length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_4500
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest045
     * @tc.desc Verify end 1000 clamp length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest045() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    arr.copyWithin(1, 0, 1000);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(20, arr.get(2));
    }

    /**
     * Verify end -1000 clamp 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_4600
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest046
     * @tc.desc Verify end -1000 clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest046() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    arr.copyWithin(1, 0, -1000);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify end 2 [start, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_4700
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest047
     * @tc.desc Verify end 2 [start, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest047() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(3, 0, 2);
    assertEqualInt(1, arr.get(3));
    assertEqualInt(2, arr.get(4));
    }

    /**
     * Verify end -3 length-3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_4800
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest048
     * @tc.desc Verify end -3 length-3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest048() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(4, 0, -3);
    assertEqualInt(1, arr.get(4));
    assertEqualInt(2, arr.get(5));
    }

    /**
     * Verify target=0 start=0 end=length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_4900
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest049
     * @tc.desc Verify target=0 start=0 end=length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest049() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 0, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify target=0 start=0 end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_5000
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest050
     * @tc.desc Verify target=0 start=0 end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest050() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7, 8});
    arr.copyWithin(0, 0);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(6, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(8, arr.get(3));
    }

    /**
     * Verify target/start/end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_5100
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest051
     * @tc.desc Verify target/start/end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest051() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-3, -4, -1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(3, arr.get(3));
    assertEqualInt(4, arr.get(4));
    }

    /**
     * Verify target start end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_5200
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest052
     * @tc.desc Verify target start end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest052() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end=1 start=0 target=length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_5300
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest053
     * @tc.desc Verify end=1 start=0 target=length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest053() {
    Int32Array arr = new Int32Array(new int[] {9, 8, 7, 6});
    arr.copyWithin(3, 0, 1);
    assertEqualInt(9, arr.get(3));
    assertEqualInt(9, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(7, arr.get(2));
    }

    /**
     * Verify start=length+1 end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_5400
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest054
     * @tc.desc Verify start=length+1 end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest054() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.copyWithin(0, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify target=1 start=length end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_5500
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest055
     * @tc.desc Verify target=1 start=length end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest055() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.copyWithin(1, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify target=1 start=1 end=length-1 +1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_5600
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest056
     * @tc.desc Verify target=1 start=1 end=length-1 +1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest056() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(1, 1, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify (length=0) copyWithin(target=0, start=0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_5700
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest057
     * @tc.desc Verify (length=0) copyWithin(target=0, start=0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest057() {
    Int32Array arr = new Int32Array(0);
    arr.copyWithin(0, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify copyWithin length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_5800
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest058
     * @tc.desc Verify copyWithin length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest058() {
    Int32Array arr = new Int32Array(0);
    arr.copyWithin(-1, -1, -1);
    assertEqual(0, arr.length());
    }

    /**
     * Verify copyWithin INT_MAX/INT_MIN
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_5900
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest059
     * @tc.desc Verify copyWithin INT_MAX/INT_MIN
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest059() {
    Int32Array arr = new Int32Array(0);
    arr.copyWithin(2147483647, Integer.MIN_VALUE);
    assertEqual(0, arr.length());
    }

    /**
     * Verify copyWithin(0, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_6000
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest060
     * @tc.desc Verify copyWithin(0, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest060() {
    Int32Array arr = new Int32Array(new int[] {7});
    arr.copyWithin(0, 0);
    assertEqual(1, arr.length());
    assertEqualInt(7, arr.get(0));
    }

    /**
     * Verify copyWithin(0, 0, 1) [0, 1) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_6100
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest061
     * @tc.desc Verify copyWithin(0, 0, 1) [0, 1) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest061() {
    Int32Array arr = new Int32Array(new int[] {42});
    arr.copyWithin(0, 0, 1);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_6200
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest062
     * @tc.desc Verify copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest062() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0});
    arr.copyWithin(2, 0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_6300
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest063
     * @tc.desc Verify copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest063() {
    Int32Array arr = new Int32Array(new int[] {5, 5, 5, 5});
    arr.copyWithin(1, 0);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(5, arr.get(2));
    assertEqualInt(5, arr.get(3));
    }

    /**
     * Verify copyWithin copies element 0 to target index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_7000
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest070
     * @tc.desc Verify copyWithin copies element 0 to target index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest070() {
    Int32Array arr = new Int32Array(new int[] {0, 1, 2});
    arr.copyWithin(2, 0, 1);
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify copyWithin with target=0, start=2 copies elements from index 2 t
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_7400
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest074
     * @tc.desc Verify copyWithin with target=0, start=2 copies elements from index 2 t
     * o end to the beginning of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest074() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 1, 2});
    arr.copyWithin(0, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify target INT_MIN start 0 end 1 clamp 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_7800
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest078
     * @tc.desc Verify target INT_MIN start 0 end 1 clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest078() {
    Int32Array arr = new Int32Array(new int[] {42, 0, 0});
    arr.copyWithin(Integer.MIN_VALUE, 0, 1);
    assertEqualInt(42, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_7900
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest079
     * @tc.desc Verify length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest079() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(3, 0, 3);
    assertEqualInt(1, arr.get(3));
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_8000
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest080
     * @tc.desc Verify copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest080() {
    Int32Array arr = new Int32Array(new int[] {0xA, 0xB, 0xC, 0xD});
    arr.copyWithin(2, 0, 2);
    assertEqualInt(10, arr.get(2));
    assertEqualInt(11, arr.get(3));
    }

    /**
     * Verify copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_8100
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest081
     * @tc.desc Verify copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest081() {
    Int32Array arr = new Int32Array(new int[] {07, 010, 011});
    arr.copyWithin(0, 2);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(9, arr.get(2));
    }

    /**
     * Verify copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART01_TEST_MINDMAP_8200
     * @tc.name int32ArrayCopyWithinPart01TestMindmapTest082
     * @tc.desc Verify copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart01TestMindmapTest082() {
    Int32Array arr = new Int32Array(new int[] {0b101, 0b110, 0b111});
    arr.copyWithin(0, 1);
    assertEqualInt(6, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(2));
    }
}
