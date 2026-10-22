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
import basetype.common.EntryResult;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayCopyWithinPart04Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayCopyWithinPart04Test extends BasTest {
    /**
     * Verify 3 copyWithin snapshot [0, 2) pos1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0010
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest001
     * @tc.desc Verify 3 copyWithin snapshot [0, 2) pos1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest001() {
    Int32Array arr = new Int32Array(new int[] {11, 22, 33});
    Integer before0 = arr.get(0);
    Integer before1 = arr.get(1);
    Integer before2 = arr.get(2);
    arr.copyWithin(1, 0, 2);
    assertEqualInt(11, before0);
    assertEqualInt(22, before1);
    assertEqualInt(33, before2);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(11, arr.get(1));
    assertEqualInt(22, arr.get(2));
    }

    /**
     * Verify copyWithin BYTES_PER_ELEMENT 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0020
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest002
     * @tc.desc Verify copyWithin BYTES_PER_ELEMENT 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest002() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 0);
    assertEqual(4, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify copyWithin byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0030
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest003
     * @tc.desc Verify copyWithin byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest003() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.copyWithin(0, 1);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify copyWithin buffer ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0040
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest004
     * @tc.desc Verify copyWithin buffer ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest004() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    ArrayBuffer buf = arr.buffer();
    arr.copyWithin(1, 0);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify copyWithin length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0050
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest005
     * @tc.desc Verify copyWithin length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest005() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(0, 2, 4);
    assertEqual(5, arr.length());
    }

    /**
     * Verify 5 [1, 4) pos0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0060
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest006
     * @tc.desc Verify 5 [1, 4) pos0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest006() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(0, 1, 4);
    assertEqualInt(20, arr.get(0));
    assertEqualInt(30, arr.get(1));
    assertEqualInt(40, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    /**
     * Verify copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0070
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest007
     * @tc.desc Verify copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest007() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(0, 2, 4);
    assertEqualInt(5, arr.get(4));
    assertEqualInt(6, arr.get(5));
    }

    /**
     * Verify copyWithin target>0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0080
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest008
     * @tc.desc Verify copyWithin target>0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest008() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(3, 0, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0090
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest009
     * @tc.desc Verify copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest009() {
    Int32Array arr = new Int32Array(new int[] {7, 7, 7, 7});
    arr.copyWithin(1, 0, 3);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify copyWithin(0, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0100
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest010
     * @tc.desc Verify copyWithin(0, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest010() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin byteLength length*4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0110
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest011
     * @tc.desc Verify copyWithin byteLength length*4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest011() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(1, 0, 2);
    assertEqual(16, arr.byteLength());
    }

    /**
     * Verify copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0120
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest012
     * @tc.desc Verify copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest012() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(2, 0, 2);
    arr.copyWithin(2, 0, 2);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(10, arr.get(2));
    assertEqualInt(20, arr.get(3));
    }

    /**
     * Verify copyWithin copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0130
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest013
     * @tc.desc Verify copyWithin copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest013() {
    Int32Array arr = new Int32Array(new int[] {9, 8, 7, 6});
    arr.copyWithin(3, 0, 1);
    arr.copyWithin(3, 0, 1);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(9, arr.get(3));
    }

    /**
     * Verify copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0140
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest014
     * @tc.desc Verify copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest014() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3, 5);
    arr.copyWithin(3, 0, 2);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0150
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest015
     * @tc.desc Verify copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest015() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, 2);
    arr.copyWithin(2, 0, 2);
    assertEqualInt(30, arr.get(0));
    assertEqualInt(40, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify copyWithin this
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0160
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest016
     * @tc.desc Verify copyWithin this
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest016() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    Int32Array r = arr.copyWithin(4, 0, 2).copyWithin(0, 2, 4).copyWithin(2, 4, 6);
    assertEqual(arr, r);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqual(6, arr.length());
    }

    /**
     * Verify copyWithin this
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0170
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest017
     * @tc.desc Verify copyWithin this
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest017() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array outer = arr.copyWithin(2, 0, 2).copyWithin(0, 2, 4);
    assertEqualInt(1, outer.get(0));
    assertEqualInt(2, outer.get(1));
    assertEqualInt(1, outer.get(2));
    assertEqualInt(2, outer.get(3));
    }

    /**
     * Verify copyWithin target=start
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0180
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest018
     * @tc.desc Verify copyWithin target=start
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest018() {
    Int32Array arr = new Int32Array(new int[] {11, 22, 33, 44});
    arr.copyWithin(1, 1, 3);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(22, arr.get(1));
    assertEqualInt(33, arr.get(2));
    assertEqualInt(44, arr.get(3));
    }

    /**
     * Verify target=0, start=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0190
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest019
     * @tc.desc Verify target=0, start=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest019() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 1);
    assertEqualInt(2, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(4, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify target=1, start=2 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0200
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest020
     * @tc.desc Verify target=1, start=2 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest020() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(1, 2);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(30, arr.get(1));
    assertEqualInt(40, arr.get(2));
    assertEqualInt(50, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    /**
     * Verify target=0, start=2, end=4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0210
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest021
     * @tc.desc Verify target=0, start=2, end=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest021() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2, 4);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify target=0, start=1, end=3 target
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0220
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest022
     * @tc.desc Verify target=0, start=1, end=3 target
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest022() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7, 8});
    arr.copyWithin(0, 1, 3);
    assertEqualInt(6, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(8, arr.get(3));
    }

    /**
     * Verify target=2, start=0 end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0230
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest023
     * @tc.desc Verify target=2, start=0 end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest023() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify target=3, start=0, end=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0240
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest024
     * @tc.desc Verify target=3, start=0, end=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest024() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(3, 0, 2);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(10, arr.get(3));
    assertEqualInt(20, arr.get(4));
    }

    /**
     * Verify target=2, start=0, end=3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0250
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest025
     * @tc.desc Verify target=2, start=0, end=3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest025() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2, 0, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    assertEqualInt(3, arr.get(4));
    }

    /**
     * Verify target=1, start=0, end=3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0260
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest026
     * @tc.desc Verify target=1, start=0, end=3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest026() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(1, 0, 3);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(20, arr.get(2));
    assertEqualInt(30, arr.get(3));
    }

    /**
     * Verify target=length-2, start=0, end=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0270
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest027
     * @tc.desc Verify target=length-2, start=0, end=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest027() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9, 10});
    arr.copyWithin(2, 0, 2);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(8, arr.get(3));
    }

    /**
     * Verify target=-3 start=-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0280
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest028
     * @tc.desc Verify target=-3 start=-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest028() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(-3, -1);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(50, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    /**
     * Verify target=-1 start=-3 end=-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0290
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest029
     * @tc.desc Verify target=-1 start=-3 end=-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest029() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(-1, -3, -1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify target=0 start=-2 end=-1 start/end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0300
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest030
     * @tc.desc Verify target=0 start=-2 end=-1 start/end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest030() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, -2, -1);
    assertEqualInt(30, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify target=1 start=-3 end=-1 start/end target
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0310
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest031
     * @tc.desc Verify target=1 start=-3 end=-1 start/end target
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest031() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(1, -3, -1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(4, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin reverse copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0330
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest033
     * @tc.desc Verify copyWithin reverse copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest033() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 2).reverse();
    assertEqualInt(4, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(4, arr.get(2));
    assertEqualInt(3, arr.get(3));
    }

    /**
     * Verify copyWithin fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0340
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest034
     * @tc.desc Verify copyWithin fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest034() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(2, 0, 2).fill(99, 0, 1);
    assertEqualInt(99, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(10, arr.get(2));
    assertEqualInt(20, arr.get(3));
    }

    /**
     * Verify fill copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0350
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest035
     * @tc.desc Verify fill copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest035() {
    Int32Array arr = new Int32Array(4);
    arr.fill(7).copyWithin(2, 0, 2);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify copyWithin sort length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0360
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest036
     * @tc.desc Verify copyWithin sort length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest036() {
    Int32Array arr = new Int32Array(new int[] {3, 1, 4, 2});
    arr.copyWithin(2, 0, 2).sort();
    assertEqual(4, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(3, arr.get(3));
    }

    /**
     * Verify copyWithin subarray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0370
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest037
     * @tc.desc Verify copyWithin subarray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest037() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    Int32Array sub = arr.copyWithin(2, 0, 2).subarray(2, 4);
    assertEqualInt(10, sub.get(0));
    assertEqualInt(20, sub.get(1));
    }

    /**
     * Verify set copyWithin set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0380
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest038
     * @tc.desc Verify set copyWithin set
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest038() {
    Int32Array arr = new Int32Array(4);
    Int32Array src = new Int32Array(new int[] {5, 6, 7, 8});
    arr.set(src);
    arr.copyWithin(0, 2);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(8, arr.get(1));
    }

    /**
     * Verify copyWithin reverse copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0390
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest039
     * @tc.desc Verify copyWithin reverse copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest039() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(0, 3).reverse().copyWithin(3, 0, 3);
    assertEqual(6, arr.length());
    assertEqualInt(6, arr.get(3));
    }

    /**
     * Verify copyWithin for
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0400
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest040
     * @tc.desc Verify copyWithin for
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest040() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2, 5);
    int[] sum = {0};
    for (int i = 0; i < arr.length(); i++) {
    sum[0] = sum[0] + arr.get(i);
    }
    assertEqual(21, sum[0]);
    }

    /**
     * Verify copyWithin forEach
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0410
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest041
     * @tc.desc Verify copyWithin forEach
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest041() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, 2);
    int[] sum = {0};
    arr.forEach((v) -> {
        sum[0] = sum[0] + v;
    });
    assertEqual(140, sum[0]);
    }

    /**
     * Verify copyWithin reduce
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0420
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest042
     * @tc.desc Verify copyWithin reduce
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest042() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 0);
    int s = arr.reduce((acc, v, unusedIndex, array) -> acc + v, 0);
    assertEqual(6, s);
    }

    /**
     * Verify copyWithin indexOf
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0430
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest043
     * @tc.desc Verify copyWithin indexOf
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest043() {
    Int32Array arr = new Int32Array(new int[] {11, 22, 33, 44});
    arr.copyWithin(2, 0, 2);
    assertEqual(0, arr.indexOf(11));
    assertEqual(1, arr.indexOf(22));
    assertEqual(-1, arr.indexOf(33));
    }

    /**
     * Verify copyWithin includes true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0440
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest044
     * @tc.desc Verify copyWithin includes true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest044() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7, 8});
    arr.copyWithin(0, 2);
    assertTrue(arr.includes(7));
    assertFalse(arr.includes(5));
    assertTrue(arr.includes(8));
    }

    /**
     * Verify copyWithin for-of FixedArray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0450
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest045
     * @tc.desc Verify copyWithin for-of FixedArray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest045() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, 2);
    List<Integer> collected = new ArrayList<>();
    for (Integer v : arr.values()) {
    collected.add(v);
    }
    assertEqual(4, collected.size());
    assertEqualInt(30, collected.get(0));
    assertEqualInt(40, collected.get(3));
    }

    /**
     * Verify copyWithin every
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0460
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest046
     * @tc.desc Verify copyWithin every
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest046() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 0, 2);
    boolean allPositive = arr.every((v) -> v > 0);
    assertTrue(allPositive);
    }

    /**
     * Verify copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0470
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest047
     * @tc.desc Verify copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest047() {
    Int32Array arr = new Int32Array(new int[] {100, 200, 300});
    Integer snap = arr.get(0);
    arr.copyWithin(0, 1, 3);
    assertEqualInt(100, snap);
    assertEqualInt(200, arr.get(0));
    }

    /**
     * Verify copyWithin forEach
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0480
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest048
     * @tc.desc Verify copyWithin forEach
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest048() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2, 0, 3);
    String[] acc = {""};
    arr.forEach((v) -> {
        acc[0] = acc[0] + String.valueOf(v) + ",";
    });
    assertEqual("1,2,1,2,3,", acc[0]);
    }

    /**
     * Verify copyWithin entries
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0490
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest049
     * @tc.desc Verify copyWithin entries
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest049() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(1, 2);
    Int32Array.EntriesIterator iter = arr.entries();
    EntryResult first = iter.next();
    assertFalse(first.done);
    assertEqual(10, first.value[1]);
    EntryResult second = iter.next();
    assertEqual(30, second.value[1]);
    }

    /**
     * Verify copyWithin keys 0..length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0500
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest050
     * @tc.desc Verify copyWithin keys 0..length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest050() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.copyWithin(0, 1);
    int count = 0;
    for (Integer k : arr.keys()) {
    count = count + 1;
    }
    assertEqual(3, count);
    }

    /**
     * Verify copyWithin(0, 0, 0) this
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0510
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest051
     * @tc.desc Verify copyWithin(0, 0, 0) this
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest051() {
    Int32Array arr = new Int32Array(0);
    Int32Array r = arr.copyWithin(0, 0, 0);
    assertEqual(arr, r);
    assertEqual(0, arr.length());
    }

    /**
     * Verify copyWithin(0, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0520
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest052
     * @tc.desc Verify copyWithin(0, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest052() {
    Int32Array arr = new Int32Array(new int[] {42});
    arr.copyWithin(0, 0);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify copyWithin(0, 0, 1) end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0530
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest053
     * @tc.desc Verify copyWithin(0, 0, 1) end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest053() {
    Int32Array arr = new Int32Array(new int[] {77});
    arr.copyWithin(0, 0, 1);
    assertEqualInt(77, arr.get(0));
    assertEqual(1, arr.length());
    }

    /**
     * Verify 8 target=4 start=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0540
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest054
     * @tc.desc Verify 8 target=4 start=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest054() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6, 7, 8});
    arr.copyWithin(4, 0, 4);
    assertEqualInt(1, arr.get(4));
    assertEqualInt(2, arr.get(5));
    assertEqualInt(3, arr.get(6));
    assertEqualInt(4, arr.get(7));
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify 8 target=0 start=4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0550
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest055
     * @tc.desc Verify 8 target=0 start=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest055() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6, 7, 8});
    arr.copyWithin(0, 4, 8);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(6, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(8, arr.get(3));
    assertEqualInt(5, arr.get(4));
    assertEqualInt(8, arr.get(7));
    }

    /**
     * Verify 6 target=2 start=0 end=4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0560
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest056
     * @tc.desc Verify 6 target=2 start=0 end=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest056() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(2, 0, 4);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(10, arr.get(2));
    assertEqualInt(20, arr.get(3));
    assertEqualInt(30, arr.get(4));
    assertEqualInt(40, arr.get(5));
    }

    /**
     * Verify 6 target=1 start=3 end=6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0570
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest057
     * @tc.desc Verify 6 target=1 start=3 end=6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest057() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(1, 3, 6);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(5, arr.get(2));
    assertEqualInt(6, arr.get(3));
    assertEqualInt(5, arr.get(4));
    assertEqualInt(6, arr.get(5));
    }

    /**
     * Verify copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0610
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest061
     * @tc.desc Verify copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest061() {
    Int32Array arr = new Int32Array(new int[] {1, 0, 1, 0, 1, 0});
    arr.copyWithin(2, 0, 4);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(0, arr.get(3));
    assertEqualInt(1, arr.get(4));
    assertEqualInt(0, arr.get(5));
    }

    /**
     * Verify 2^32 ToInt32 0 copyWithin 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_0640
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest064
     * @tc.desc Verify 2^32 ToInt32 0 copyWithin 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart04TestMindmapTest064() {
    Int32Array arr = new Int32Array(3);
    arr.set(0, 0);
    arr.set(1, 7);
    arr.set(2, 8);
    arr.copyWithin(2, 0, 1);
    assertEqualInt(0, arr.get(2));
    assertEqualInt(7, arr.get(1));
    }

    /**
     * Verify copyWithin subarray buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART04_TEST_MINDMAP_1040
     * @tc.name int32ArrayCopyWithinPart04TestMindmapTest104
     * @tc.desc Verify copyWithin subarray buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
