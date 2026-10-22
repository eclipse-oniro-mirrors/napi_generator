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
 * Int32ArrayCopyWithinPart05Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayCopyWithinPart05Test extends BasTest {
    /**
     * Verify 2 start=0 target 3 end=length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_0100
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest001
     * @tc.desc Verify 2 start=0 target 3 end=length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest001() {
    Int32Array a1 = new Int32Array(new int[] {11, 22, 33, 44, 55});
    Int32Array a2 = new Int32Array(new int[] {11, 22, 33, 44, 55});
    a1.copyWithin(3, 0);
    a2.copyWithin(3, 0, 5);
    assertEqual(a2.get(3).intValue(), a1.get(3).intValue());
    assertEqual(a2.get(4).intValue(), a1.get(4).intValue());
    }

    /**
     * Verify 2 start=2 end [2, length) target
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_0200
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest002
     * @tc.desc Verify 2 start=2 end [2, length) target
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest002() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9, 10, 11});
    arr.copyWithin(0, 2);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(11, arr.get(2));
    assertEqualInt(10, arr.get(3));
    assertEqualInt(11, arr.get(4));
    }

    /**
     * Verify 3 end=start+1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_0300
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest003
     * @tc.desc Verify 3 end=start+1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest003() {
    Int32Array arr = new Int32Array(new int[] {9, 8, 7, 6});
    arr.copyWithin(2, 0, 1);
    assertEqualInt(9, arr.get(2));
    assertEqualInt(9, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(6, arr.get(3));
    }

    /**
     * Verify start=2, end=2 empty range no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_0400
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest004
     * @tc.desc Verify start=2, end=2 empty range no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest004() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7, 8});
    arr.copyWithin(0, 2, 2);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(6, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(8, arr.get(3));
    }

    /**
     * Verify 3 end=0 start clamp
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_0500
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest005
     * @tc.desc Verify 3 end=0 start clamp
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest005() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(3, 1, 0);
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    assertEqualInt(6, arr.get(5));
    }

    /**
     * Verify 2 length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_0700
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest007
     * @tc.desc Verify 2 length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest007() {
    Int32Array arr = new Int32Array(0);
    Int32Array r = arr.copyWithin(0, 0);
    assertEqual(arr, r);
    assertEqual(0, r.length());
    }

    /**
     * Verify target=2 0/1/length-1 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_0900
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest009
     * @tc.desc Verify target=2 0/1/length-1 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest009() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50, 60, 70});
    arr.copyWithin(2, 5);
    assertEqualInt(60, arr.get(2));
    assertEqualInt(70, arr.get(3));
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(50, arr.get(4));
    }

    /**
     * Verify target=length-2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_1000
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest010
     * @tc.desc Verify target=length-2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest010() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(4, 0, 2);
    assertEqualInt(1, arr.get(4));
    assertEqualInt(2, arr.get(5));
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify target=2 2 length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_1100
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest011
     * @tc.desc Verify target=2 2 length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest011() {
    Int32Array arr = new Int32Array(new int[] {8, 9});
    arr.copyWithin(2, 0);
    assertEqualInt(8, arr.get(0));
    assertEqualInt(9, arr.get(1));
    }

    /**
     * Verify target=length+2 no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_1200
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest012
     * @tc.desc Verify target=length+2 no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest012() {
    Int32Array arr = new Int32Array(new int[] {3, 4, 5});
    arr.copyWithin(5, 0);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify target=-3 -3 > -length length-3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_1300
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest013
     * @tc.desc Verify target=-3 -3 > -length length-3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest013() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(-3, 0, 2);
    assertEqualInt(10, arr.get(3));
    assertEqualInt(20, arr.get(4));
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(60, arr.get(5));
    }

    /**
     * Verify target=-5 6 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_1400
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest014
     * @tc.desc Verify target=-5 6 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest014() {
    Int32Array arr = new Int32Array(new int[] {11, 22, 33, 44, 55, 66});
    arr.copyWithin(1, 3, 5);
    assertEqualInt(44, arr.get(1));
    assertEqualInt(55, arr.get(2));
    assertEqualInt(11, arr.get(0));
    assertEqualInt(44, arr.get(3));
    }

    /**
     * Verify target=-(length+2) clamp 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_1500
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest015
     * @tc.desc Verify target=-(length+2) clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest015() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    arr.copyWithin(-5, 1);
    assertEqualInt(8, arr.get(0));
    assertEqualInt(9, arr.get(1));
    assertEqualInt(9, arr.get(2));
    }

    /**
     * Verify target 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_1600
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest016
     * @tc.desc Verify target 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest016() {
    Int32Array arr = new Int32Array(new int[] {21, 22, 23, 24});
    arr.copyWithin(0, 2);
    assertEqualInt(23, arr.get(0));
    assertEqualInt(24, arr.get(1));
    assertEqualInt(23, arr.get(2));
    assertEqualInt(24, arr.get(3));
    }

    /**
     * Verify target 0 0 -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_1700
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest017
     * @tc.desc Verify target 0 0 -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest017() {
    Int32Array arr = new Int32Array(new int[] {51, 52, 53});
    arr.copyWithin(0, 1);
    assertEqualInt(52, arr.get(0));
    assertEqualInt(53, arr.get(1));
    assertEqualInt(53, arr.get(2));
    }

    /**
     * Verify start=2 6 [2, 6)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_1800
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest018
     * @tc.desc Verify start=2 6 [2, 6)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest018() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(0, 2);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(5, arr.get(2));
    assertEqualInt(6, arr.get(3));
    }

    /**
     * Verify start=length+1 clamp length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_2000
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest020
     * @tc.desc Verify start=length+1 clamp length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest020() {
    Int32Array arr = new Int32Array(new int[] {6, 7, 8, 9});
    arr.copyWithin(1, 5);
    assertEqualInt(7, arr.get(1));
    assertEqualInt(8, arr.get(2));
    assertEqualInt(9, arr.get(3));
    }

    /**
     * Verify start=-3 7 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_2100
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest021
     * @tc.desc Verify start=-3 7 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest021() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50, 60, 70});
    arr.copyWithin(0, -3);
    assertEqualInt(50, arr.get(0));
    assertEqualInt(60, arr.get(1));
    assertEqualInt(70, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify start=-length+1 start=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_2200
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest022
     * @tc.desc Verify start=-length+1 start=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest022() {
    Int32Array arr = new Int32Array(new int[] {9, 8, 7, 6, 5});
    arr.copyWithin(2, -4);
    assertEqualInt(8, arr.get(2));
    assertEqualInt(7, arr.get(3));
    assertEqualInt(6, arr.get(4));
    }

    /**
     * Verify start=-(length+2) clamp 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_2300
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest023
     * @tc.desc Verify start=-(length+2) clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest023() {
    Int32Array arr = new Int32Array(new int[] {4, 5, 6, 7});
    arr.copyWithin(2, -6);
    assertEqualInt(4, arr.get(2));
    assertEqualInt(5, arr.get(3));
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    }

    /**
     * Verify start 2 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_2400
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest024
     * @tc.desc Verify start 2 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest024() {
    Int32Array arr = new Int32Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2);
    assertEqualInt(33, arr.get(0));
    assertEqualInt(44, arr.get(1));
    assertEqualInt(55, arr.get(2));
    }

    /**
     * Verify start -2 -2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_2500
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest025
     * @tc.desc Verify start -2 -2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest025() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(0, -2);
    assertEqualInt(40, arr.get(0));
    assertEqualInt(50, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    /**
     * Verify end=2 5 [start, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_2700
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest027
     * @tc.desc Verify end=2 5 [start, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest027() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(3, 0, 2);
    assertEqualInt(1, arr.get(3));
    assertEqualInt(2, arr.get(4));
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify end=length-2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_2800
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest028
     * @tc.desc Verify end=length-2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest028() {
    Int32Array arr = new Int32Array(new int[] {9, 8, 7, 6, 5, 4});
    arr.copyWithin(3, 0, 4);
    assertEqualInt(9, arr.get(3));
    assertEqualInt(8, arr.get(4));
    assertEqualInt(7, arr.get(5));
    assertEqualInt(9, arr.get(0));
    assertEqualInt(7, arr.get(2));
    }

    /**
     * Verify end=length+3 clamp length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_2900
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest029
     * @tc.desc Verify end=length+3 clamp length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest029() {
    Int32Array arr = new Int32Array(new int[] {2, 4, 6, 8});
    arr.copyWithin(1, 0, 7);
    assertEqualInt(2, arr.get(1));
    assertEqualInt(4, arr.get(2));
    assertEqualInt(6, arr.get(3));
    assertEqualInt(2, arr.get(0));
    }

    /**
     * Verify end=-3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_3000
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest030
     * @tc.desc Verify end=-3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest030() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(4, 0, -3);
    assertEqualInt(10, arr.get(4));
    assertEqualInt(20, arr.get(5));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify end=-length+1 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_3100
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest031
     * @tc.desc Verify end=-length+1 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest031() {
    Int32Array arr = new Int32Array(new int[] {77, 88, 99, 110});
    arr.copyWithin(2, 0, -3);
    assertEqualInt(77, arr.get(2));
    assertEqualInt(110, arr.get(3));
    assertEqualInt(77, arr.get(0));
    assertEqualInt(88, arr.get(1));
    }

    /**
     * Verify end=-(length+2) clamp 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_3200
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest032
     * @tc.desc Verify end=-(length+2) clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest032() {
    Int32Array arr = new Int32Array(new int[] {3, 6, 9, 12});
    arr.copyWithin(1, 0, -6);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(6, arr.get(1));
    assertEqualInt(9, arr.get(2));
    assertEqualInt(12, arr.get(3));
    }

    /**
     * Verify end 4 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_3300
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest033
     * @tc.desc Verify end 4 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest033() {
    Int32Array arr = new Int32Array(new int[] {1, 3, 5, 7, 9, 11});
    arr.copyWithin(0, 0, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(5, arr.get(2));
    assertEqualInt(7, arr.get(3));
    assertEqualInt(9, arr.get(4));
    }

    /**
     * Verify end -1 -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_3400
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest034
     * @tc.desc Verify end -1 -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest034() {
    Int32Array arr = new Int32Array(new int[] {12, 13, 14, 15, 16});
    arr.copyWithin(0, 1, -1);
    assertEqualInt(13, arr.get(0));
    assertEqualInt(14, arr.get(1));
    assertEqualInt(15, arr.get(2));
    assertEqualInt(15, arr.get(3));
    assertEqualInt(16, arr.get(4));
    }

    /**
     * Verify end=0 (NEGATIVE_INFINITY clamp 0) no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_3600
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest036
     * @tc.desc Verify end=0 (NEGATIVE_INFINITY clamp 0) no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest036() {
    Int32Array arr = new Int32Array(new int[] {21, 22, 23, 24});
    arr.copyWithin(1, 0, 0);
    assertEqualInt(22, arr.get(1));
    assertEqualInt(23, arr.get(2));
    assertEqualInt(24, arr.get(3));
    }

    /**
     * Verify target 0x2 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_3700
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest037
     * @tc.desc Verify target 0x2 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest037() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(0x2, 0, 2);
    assertEqualInt(10, arr.get(2));
    assertEqualInt(20, arr.get(3));
    }

    /**
     * Verify start 0o3 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_3800
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest038
     * @tc.desc Verify start 0o3 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest038() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 03);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify end 0b101 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_3900
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest039
     * @tc.desc Verify end 0b101 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest039() {
    Int32Array arr = new Int32Array(new int[] {9, 8, 7, 6, 5, 4});
    arr.copyWithin(0, 0, 0b101);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(6, arr.get(3));
    assertEqualInt(5, arr.get(4));
    assertEqualInt(4, arr.get(5));
    }

    /**
     * Verify 1 1 target
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_4100
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest041
     * @tc.desc Verify 1 1 target
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest041() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7, 8});
    arr.copyWithin(1, 0, 1);
    assertEqualInt(5, arr.get(1));
    assertEqualInt(5, arr.get(0));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(8, arr.get(3));
    }

    /**
     * Verify target>start
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_4200
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest042
     * @tc.desc Verify target>start
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest042() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2, 0, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    assertEqualInt(3, arr.get(4));
    }

    /**
     * Verify target<start
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_4300
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest043
     * @tc.desc Verify target<start
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest043() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 1, 5);
    assertEqualInt(2, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(4, arr.get(2));
    assertEqualInt(5, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify target=start
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_4400
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest044
     * @tc.desc Verify target=start
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest044() {
    Int32Array arr = new Int32Array(new int[] {9, 7, 5, 3, 1});
    arr.copyWithin(2, 2);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(5, arr.get(2));
    assertEqualInt(3, arr.get(3));
    assertEqualInt(1, arr.get(4));
    }

    /**
     * Verify target=0, start=1 start target
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_4500
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest045
     * @tc.desc Verify target=0, start=1 start target
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest045() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, 1, 4);
    assertEqualInt(20, arr.get(0));
    assertEqualInt(30, arr.get(1));
    assertEqualInt(40, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify - memmove
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_4600
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest046
     * @tc.desc Verify - memmove
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest046() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6, 7});
    arr.copyWithin(0, 2, 6);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(5, arr.get(2));
    assertEqualInt(6, arr.get(3));
    assertEqualInt(5, arr.get(4));
    assertEqualInt(6, arr.get(5));
    assertEqualInt(7, arr.get(6));
    }

    /**
     * Verify target=-2, start=0, end=4 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_4700
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest047
     * @tc.desc Verify target=-2, start=0, end=4 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest047() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(-2, 0, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify target=0, start=0, end=length 8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_4800
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest048
     * @tc.desc Verify target=0, start=0, end=length 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest048() {
    Int32Array arr = new Int32Array(new int[] {8, 7, 6, 5, 4, 3, 2, 1});
    arr.copyWithin(0, 0, 8);
    assertEqualInt(8, arr.get(0));
    assertEqualInt(1, arr.get(7));
    assertEqual(8, arr.length());
    }

    /**
     * Verify target >=length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_4900
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest049
     * @tc.desc Verify target >=length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest049() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(4, 0, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify clamp start 0 start<-length end [0, end)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_5000
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest050
     * @tc.desc Verify clamp start 0 start<-length end [0, end)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest050() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(2, -99, 4);
    assertEqualInt(10, arr.get(2));
    assertEqualInt(20, arr.get(3));
    assertEqualInt(30, arr.get(4));
    }

    /**
     * Verify clamp end length end>length target
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_5100
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest051
     * @tc.desc Verify clamp end length end>length target
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest051() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(2, 0, 99);
    assertEqualInt(10, arr.get(2));
    assertEqualInt(20, arr.get(3));
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    }

    /**
     * Verify clamp start>end start end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_5200
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest052
     * @tc.desc Verify clamp start>end start end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest052() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 5, -5);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_5300
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest053
     * @tc.desc Verify 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest053() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 7, 8});
    arr.copyWithin(3, 0, 2);
    assertEqualInt(0, arr.get(3));
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify copyWithin with duplicate values replacing last element with first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_6000
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest060
     * @tc.desc Verify copyWithin with duplicate values replacing last element with first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest060() {
    Int32Array arr = new Int32Array(new int[] {5, 5, 5, 9});
    arr.copyWithin(3, 0, 1);
    assertEqualInt(5, arr.get(3));
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify target
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_6100
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest061
     * @tc.desc Verify target
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest061() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(4, 0, 4);
    assertEqualInt(1, arr.get(4));
    assertEqualInt(2, arr.get(5));
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify copyWithin copying first two elements to target index 4 leaving earlier elements untouched
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_6200
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest062
     * @tc.desc Verify copyWithin copying first two elements to target index 4 leaving earlier elements untouched
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest062() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(4, 0, 2);
    assertEqualInt(1, arr.get(4));
    assertEqualInt(2, arr.get(5));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify target <
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_6300
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest063
     * @tc.desc Verify target <
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest063() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(-3, 0, 5);
    assertEqualInt(10, arr.get(2));
    assertEqualInt(20, arr.get(3));
    assertEqualInt(30, arr.get(4));
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    }

    /**
     * Verify target=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_6400
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest064
     * @tc.desc Verify target=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest064() {
    Int32Array arr = new Int32Array(new int[] {9, 9, 1, 2, 3, 4});
    arr.copyWithin(0, 2, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    assertEqualInt(3, arr.get(4));
    assertEqualInt(4, arr.get(5));
    }

    /**
     * Verify this fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_6500
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest065
     * @tc.desc Verify this fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest065() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array r = arr.copyWithin(2, 0, 2).fill(0, 0, 1);
    assertEqual(arr, r);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify this reverse mutating
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_6600
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest066
     * @tc.desc Verify this reverse mutating
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest066() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(3, 0, 3).reverse();
    assertEqualInt(3, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(3, arr.get(3));
    assertEqualInt(2, arr.get(4));
    assertEqualInt(1, arr.get(5));
    }

    /**
     * Verify copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_6700
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest067
     * @tc.desc Verify copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest067() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(0, 3).copyWithin(3, 0, 2);
    assertEqualInt(40, arr.get(0));
    assertEqualInt(50, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    /**
     * Verify copyWithin buffer byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_6800
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest068
     * @tc.desc Verify copyWithin buffer byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest068() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(1, 0);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify copyWithin length 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_6900
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest069
     * @tc.desc Verify copyWithin length 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest069() {
    Int32Array arr = new Int32Array(new int[] {7, 6, 5, 4, 3, 2, 1});
    arr.copyWithin(2, 0);
    assertEqual(7, arr.length());
    assertEqual(28, arr.byteLength());
    }

    /**
     * Verify subarray copyWithin buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_7000
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest070
     * @tc.desc Verify subarray copyWithin buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest070() {
    Int32Array base = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    Int32Array sub = base.subarray(1, 5);
    sub.copyWithin(1, 0, 2);
    assertEqualInt(2, base.get(1));
    assertEqualInt(2, base.get(2));
    assertEqualInt(3, base.get(3));
    assertEqualInt(5, base.get(4));
    assertEqualInt(6, base.get(5));
    }

    /**
     * Verify start/end/target target start end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_7100
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest071
     * @tc.desc Verify start/end/target target start end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest071() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.copyWithin(99999999, -99999999, 99999999);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify copyWithin with extreme out-of-bounds indices on single-element array leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_7200
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest072
     * @tc.desc Verify copyWithin with extreme out-of-bounds indices on single-element array leaves array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest072() {
    Int32Array arr = new Int32Array(new int[] {42});
    arr.copyWithin(-99, 99, -99);
    assertEqualInt(42, arr.get(0));
    assertEqual(1, arr.length());
    }

    /**
     * Verify length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_7300
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest073
     * @tc.desc Verify length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest073() {
    Int32Array arr = new Int32Array(0);
    arr.copyWithin(100, -100, 200);
    assertEqual(0, arr.length());
    }

    /**
     * Verify target=0, start=0, end=0 (NaN -> 0) no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_7400
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest074
     * @tc.desc Verify target=0, start=0, end=0 (NaN -> 0) no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest074() {
    Int32Array arr = new Int32Array(new int[] {11, 22, 33});
    arr.copyWithin(0, 0, 0);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(22, arr.get(1));
    assertEqualInt(33, arr.get(2));
    }

    /**
     * Verify target=0, start=arr.length, end=0 (POSITIVE_INFINITY/NEGATIVE_INFINITY clamp) no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_7500
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest075
     * @tc.desc Verify target=0, start=arr.length, end=0 (POSITIVE_INFINITY/NEGATIVE_INFINITY clamp) no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest075() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7, 8});
    arr.copyWithin(0, arr.length(), 0);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(8, arr.get(3));
    }

    /**
     * Verify target=arr.length (2147483648 clamp length) no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_7600
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest076
     * @tc.desc Verify target=arr.length (2147483648 clamp length) no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest076() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(arr.length(), 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end=arr.length (2147483649 clamp length)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_7700
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest077
     * @tc.desc Verify end=arr.length (2147483649 clamp length)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest077() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    arr.copyWithin(1, 0, arr.length());
    assertEqualInt(10, arr.get(1));
    assertEqualInt(20, arr.get(2));
    }

    /**
     * Verify target=0, start=1 (-2147483649 clamp 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_7800
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest078
     * @tc.desc Verify target=0, start=1 (-2147483649 clamp 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest078() {
    Int32Array arr = new Int32Array(new int[] {4, 5, 6});
    arr.copyWithin(0, 1);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(6, arr.get(1));
    assertEqualInt(6, arr.get(2));
    }

    /**
     * Verify start=arr.length (4294967295 clamp length) no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_7900
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest079
     * @tc.desc Verify start=arr.length (4294967295 clamp length) no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest079() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    arr.copyWithin(0, arr.length());
    assertEqualInt(7, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(9, arr.get(2));
    }

    /**
     * Verify end=arr.length (4294967296 clamp length)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_8000
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest080
     * @tc.desc Verify end=arr.length (4294967296 clamp length)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest080() {
    Int32Array arr = new Int32Array(new int[] {1, 3, 5});
    arr.copyWithin(1, 0, arr.length());
    assertEqualInt(1, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify target -0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_8100
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest081
     * @tc.desc Verify target -0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest081() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, 2, 4);
    assertEqualInt(30, arr.get(0));
    assertEqualInt(40, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify start=0 (-0 -> 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_8200
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest082
     * @tc.desc Verify start=0 (-0 -> 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest082() {
    Int32Array arr = new Int32Array(new int[] {22, 33, 44});
    arr.copyWithin(2, 0, 1);
    assertEqualInt(22, arr.get(2));
    assertEqualInt(22, arr.get(0));
    assertEqualInt(33, arr.get(1));
    }

    /**
     * Verify 0 target 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_8300
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest083
     * @tc.desc Verify 0 target 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart05TestMindmapTest083() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART05_TEST_MINDMAP_9300
     * @tc.name int32ArrayCopyWithinPart05TestMindmapTest093
     * @tc.desc Verify copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
