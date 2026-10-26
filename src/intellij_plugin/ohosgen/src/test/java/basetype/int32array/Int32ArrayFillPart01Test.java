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
 * Int32ArrayFillPart01Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFillPart01Test extends BasTest {
    /**
     * Verify fill whole array with only value argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_0100
     * @tc.name int32ArrayFillPart01TestMindmapTest001
     * @tc.desc Verify fill whole array with only value argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest001() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(9);
    assertEqual(4, arr.length());
    assertEqualInt(9, arr.get(0));
    assertEqualInt(9, arr.get(1));
    assertEqualInt(9, arr.get(2));
    assertEqualInt(9, arr.get(3));
    }

    /**
     * Verify fill from start to end with value and start arguments
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_0200
     * @tc.name int32ArrayFillPart01TestMindmapTest002
     * @tc.desc Verify fill from start to end with value and start arguments
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest002() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(7, 2, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify fill [start, end) interval with three arguments
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_0300
     * @tc.name int32ArrayFillPart01TestMindmapTest003
     * @tc.desc Verify fill [start, end) interval with three arguments
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest003() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(8, 1, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(8, arr.get(2));
    assertEqualInt(8, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify fill with value zero writes zero to all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_0400
     * @tc.name int32ArrayFillPart01TestMindmapTest004
     * @tc.desc Verify fill with value zero writes zero to all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest004() {
    Int32Array arr = new Int32Array(new int[] {9, 9, 9});
    arr.fill(0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill with positive integer 1 writes 1 to all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_0500
     * @tc.name int32ArrayFillPart01TestMindmapTest005
     * @tc.desc Verify fill with positive integer 1 writes 1 to all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest005() {
    Int32Array arr = new Int32Array(3);
    arr.fill(1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(1));
    assertEqualInt(1, arr.get(2));
    }

    /**
     * Verify fill with ordinary positive integer 42 writes correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_0700
     * @tc.name int32ArrayFillPart01TestMindmapTest007
     * @tc.desc Verify fill with ordinary positive integer 42 writes correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest007() {
    Int32Array arr = new Int32Array(2);
    arr.fill(42);
    assertEqualInt(42, arr.get(0));
    assertEqualInt(42, arr.get(1));
    }

    /**
     * Verify fill with hexadecimal integer 0xFF writes 255 correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_1100
     * @tc.name int32ArrayFillPart01TestMindmapTest011
     * @tc.desc Verify fill with hexadecimal integer 0xFF writes 255 correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest011() {
    Int32Array arr = new Int32Array(2);
    arr.fill(0xFF);
    assertEqualInt(255, arr.get(0));
    assertEqualInt(255, arr.get(1));
    }

    /**
     * Verify fill with octal integer 0o77 writes 63 correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_1200
     * @tc.name int32ArrayFillPart01TestMindmapTest012
     * @tc.desc Verify fill with octal integer 0o77 writes 63 correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest012() {
    Int32Array arr = new Int32Array(2);
    arr.fill(077);
    assertEqualInt(63, arr.get(0));
    assertEqualInt(63, arr.get(1));
    }

    /**
     * Verify fill with binary integer 0b1010 writes 10 correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_1300
     * @tc.name int32ArrayFillPart01TestMindmapTest013
     * @tc.desc Verify fill with binary integer 0b1010 writes 10 correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest013() {
    Int32Array arr = new Int32Array(2);
    arr.fill(0b1010);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(10, arr.get(1));
    }

    /**
     * Verify start omitted defaults to 0 filling to end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_1400
     * @tc.name int32ArrayFillPart01TestMindmapTest014
     * @tc.desc Verify start omitted defaults to 0 filling to end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest014() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(5);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(3));
    }

    /**
     * Verify start=0 fills from first element to end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_1500
     * @tc.name int32ArrayFillPart01TestMindmapTest015
     * @tc.desc Verify start=0 fills from first element to end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest015() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(6, 0, arr.length());
    assertEqualInt(6, arr.get(0));
    assertEqualInt(6, arr.get(1));
    assertEqualInt(6, arr.get(2));
    }

    /**
     * Verify start=1 fills from second element to end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_1600
     * @tc.name int32ArrayFillPart01TestMindmapTest016
     * @tc.desc Verify start=1 fills from second element to end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest016() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(9, 1, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(9, arr.get(1));
    assertEqualInt(9, arr.get(2));
    assertEqualInt(9, arr.get(3));
    }

    /**
     * Verify start=length-1 fills only last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_1700
     * @tc.name int32ArrayFillPart01TestMindmapTest017
     * @tc.desc Verify start=length-1 fills only last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest017() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(7, 3, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify start equals length fills no elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_1800
     * @tc.name int32ArrayFillPart01TestMindmapTest018
     * @tc.desc Verify start equals length fills no elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest018() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(9, 3, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify start greater than length clamps to length no fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_1900
     * @tc.name int32ArrayFillPart01TestMindmapTest019
     * @tc.desc Verify start greater than length clamps to length no fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest019() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(9, 100, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify start=-1 converts to last element index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_2000
     * @tc.name int32ArrayFillPart01TestMindmapTest020
     * @tc.desc Verify start=-1 converts to last element index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest020() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(8, -1, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(8, arr.get(3));
    }

    /**
     * Verify start=-2 fills from second to last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_2100
     * @tc.name int32ArrayFillPart01TestMindmapTest021
     * @tc.desc Verify start=-2 fills from second to last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest021() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(9, -2, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(9, arr.get(3));
    assertEqualInt(9, arr.get(4));
    }

    /**
     * Verify start=-length converts to 0 filling from first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_2200
     * @tc.name int32ArrayFillPart01TestMindmapTest022
     * @tc.desc Verify start=-length converts to 0 filling from first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest022() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(6, -4, arr.length());
    assertEqualInt(6, arr.get(0));
    assertEqualInt(6, arr.get(3));
    }

    /**
     * Verify start=-length+1 converts to 1 filling from second element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_2300
     * @tc.name int32ArrayFillPart01TestMindmapTest023
     * @tc.desc Verify start=-length+1 converts to 1 filling from second element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest023() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(5, -3, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(5, arr.get(2));
    assertEqualInt(5, arr.get(3));
    }

    /**
     * Verify start far less than -length clamps to 0 filling whole array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_2400
     * @tc.name int32ArrayFillPart01TestMindmapTest024
     * @tc.desc Verify start far less than -length clamps to 0 filling whole array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest024() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(4, -10, arr.length());
    assertEqualInt(4, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(4, arr.get(2));
    }

    /**
     * Verify start=2 in length 5 array fills from third element to end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_2500
     * @tc.name int32ArrayFillPart01TestMindmapTest025
     * @tc.desc Verify start=2 in length 5 array fills from third element to end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest025() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(7, 2, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(3));
    assertEqualInt(7, arr.get(4));
    }

    /**
     * Verify end omitted defaults to length filling to array end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_2600
     * @tc.name int32ArrayFillPart01TestMindmapTest026
     * @tc.desc Verify end omitted defaults to length filling to array end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest026() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(7, 1, arr.length());
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify end=0 empty interval fills no elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_2700
     * @tc.name int32ArrayFillPart01TestMindmapTest027
     * @tc.desc Verify end=0 empty interval fills no elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest027() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(9, 0, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify end=1 fills only first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_2800
     * @tc.name int32ArrayFillPart01TestMindmapTest028
     * @tc.desc Verify end=1 fills only first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest028() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(8, 0, 1);
    assertEqualInt(8, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify end=length-1 fills up to second to last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_2900
     * @tc.name int32ArrayFillPart01TestMindmapTest029
     * @tc.desc Verify end=length-1 fills up to second to last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest029() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(6, 0, 3);
    assertEqualInt(6, arr.get(0));
    assertEqualInt(6, arr.get(1));
    assertEqualInt(6, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end equals length fills to last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_3000
     * @tc.name int32ArrayFillPart01TestMindmapTest030
     * @tc.desc Verify end equals length fills to last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest030() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(5, 0, 3);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify end greater than length clamps to length filling to end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_3100
     * @tc.name int32ArrayFillPart01TestMindmapTest031
     * @tc.desc Verify end greater than length clamps to length filling to end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest031() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(4, 0, 100);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(4, arr.get(2));
    }

    /**
     * Verify end=-1 converts to length-1 filling before last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_3200
     * @tc.name int32ArrayFillPart01TestMindmapTest032
     * @tc.desc Verify end=-1 converts to length-1 filling before last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest032() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(9, 0, -1);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(9, arr.get(1));
    assertEqualInt(9, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end=-2 converts to length-2 filling before second to last
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_3300
     * @tc.name int32ArrayFillPart01TestMindmapTest033
     * @tc.desc Verify end=-2 converts to length-2 filling before second to last
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest033() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(7, 1, -2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify end=-length converts to 0 empty interval no fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_3400
     * @tc.name int32ArrayFillPart01TestMindmapTest034
     * @tc.desc Verify end=-length converts to 0 empty interval no fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest034() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(9, 0, -4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end far less than -length clamps to 0 empty interval no fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_3500
     * @tc.name int32ArrayFillPart01TestMindmapTest035
     * @tc.desc Verify end far less than -length clamps to 0 empty interval no fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest035() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(9, 0, -100);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify end=2 with start=0 fills only first two elements in length 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_3600
     * @tc.name int32ArrayFillPart01TestMindmapTest036
     * @tc.desc Verify end=2 with start=0 fills only first two elements in length 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest036() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(99, 0, 2);
    assertEqualInt(99, arr.get(0));
    assertEqualInt(99, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    /**
     * Verify end argument omitted is distinct from start omitted behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_3700
     * @tc.name int32ArrayFillPart01TestMindmapTest037
     * @tc.desc Verify end argument omitted is distinct from start omitted behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest037() {
    Int32Array arr1 = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array arr2 = new Int32Array(new int[] {1, 2, 3, 4});
    arr1.fill(7, 1, arr1.length());
    arr2.fill(7, 1, 4);
    assertEqual(arr2.get(1).intValue(), arr1.get(1).intValue());
    assertEqual(arr2.get(2).intValue(), arr1.get(2).intValue());
    assertEqual(arr2.get(3).intValue(), arr1.get(3).intValue());
    }

    /**
     * Verify start=0 end=length fills entire array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_3800
     * @tc.name int32ArrayFillPart01TestMindmapTest038
     * @tc.desc Verify start=0 end=length fills entire array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest038() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(6, 0, 4);
    assertEqualInt(6, arr.get(0));
    assertEqualInt(6, arr.get(1));
    assertEqualInt(6, arr.get(2));
    assertEqualInt(6, arr.get(3));
    }

    /**
     * Verify start=1 end=3 fills only indices 1 and 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_3900
     * @tc.name int32ArrayFillPart01TestMindmapTest039
     * @tc.desc Verify start=1 end=3 fills only indices 1 and 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest039() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(8, 1, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(8, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify start=end=2 empty interval silent no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_4000
     * @tc.name int32ArrayFillPart01TestMindmapTest040
     * @tc.desc Verify start=end=2 empty interval silent no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest040() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(9, 2, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify start greater than end silent no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_4100
     * @tc.name int32ArrayFillPart01TestMindmapTest041
     * @tc.desc Verify start greater than end silent no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest041() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(9, 3, 1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify negative start with positive end converts and fills correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_4200
     * @tc.name int32ArrayFillPart01TestMindmapTest042
     * @tc.desc Verify negative start with positive end converts and fills correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest042() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(7, -3, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify both negative start and end convert and fill correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_4300
     * @tc.name int32ArrayFillPart01TestMindmapTest043
     * @tc.desc Verify both negative start and end convert and fill correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest043() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(8, -4, -1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(8, arr.get(2));
    assertEqualInt(8, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify start negative clamped to 0 with positive small end fills [0, end)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_4400
     * @tc.name int32ArrayFillPart01TestMindmapTest044
     * @tc.desc Verify start negative clamped to 0 with positive small end fills [0, end)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest044() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(5, -100, 2);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify positive start with end negative clamped to 0 causes no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_4500
     * @tc.name int32ArrayFillPart01TestMindmapTest045
     * @tc.desc Verify positive start with end negative clamped to 0 causes no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest045() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(9, 2, -100);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify positive start clamped to length with normal end causes no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_4600
     * @tc.name int32ArrayFillPart01TestMindmapTest046
     * @tc.desc Verify positive start clamped to length with normal end causes no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest046() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(9, 100, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify start=-1 end=-1 empty interval no-op in length 4 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_4700
     * @tc.name int32ArrayFillPart01TestMindmapTest047
     * @tc.desc Verify start=-1 end=-1 empty interval no-op in length 4 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest047() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(9, -1, -1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify start=-1 end=length fills last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_4800
     * @tc.name int32ArrayFillPart01TestMindmapTest048
     * @tc.desc Verify start=-1 end=length fills last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest048() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(6, -1, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(6, arr.get(3));
    }

    /**
     * Verify fill returns calling Object itself this
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_4900
     * @tc.name int32ArrayFillPart01TestMindmapTest049
     * @tc.desc Verify fill returns calling Object itself this
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest049() {
    Int32Array arr = new Int32Array(3);
    Int32Array ret = arr.fill(1);
    assertEqual(arr, ret);
    }

    /**
     * Verify fill supports chaining two calls with different ranges
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_5000
     * @tc.name int32ArrayFillPart01TestMindmapTest050
     * @tc.desc Verify fill supports chaining two calls with different ranges
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest050() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(0).fill(9, 1, 3);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(9, arr.get(1));
    assertEqualInt(9, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify array length remains unchanged after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_5100
     * @tc.name int32ArrayFillPart01TestMindmapTest051
     * @tc.desc Verify array length remains unchanged after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest051() {
    Int32Array arr = new Int32Array(5);
    int before = arr.length();
    arr.fill(7);
    assertEqual(before, arr.length());
    assertEqual(5, arr.length());
    }

    /**
     * Verify byteLength remains unchanged after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_5200
     * @tc.name int32ArrayFillPart01TestMindmapTest052
     * @tc.desc Verify byteLength remains unchanged after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest052() {
    Int32Array arr = new Int32Array(4);
    int before = arr.byteLength();
    arr.fill(1);
    assertEqual(before, arr.byteLength());
    assertEqual(16, arr.byteLength());
    }

    /**
     * Verify BYTES_PER_ELEMENT constant remains 4 after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_5300
     * @tc.name int32ArrayFillPart01TestMindmapTest053
     * @tc.desc Verify BYTES_PER_ELEMENT constant remains 4 after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest053() {
    Int32Array arr = new Int32Array(3);
    arr.fill(42);
    assertEqual(4, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify fill returns this across three chained calls pointing to same Object
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_5400
     * @tc.name int32ArrayFillPart01TestMindmapTest054
     * @tc.desc Verify fill returns this across three chained calls pointing to same Object
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest054() {
    Int32Array arr = new Int32Array(4);
    Int32Array r1 = arr.fill(1);
    Int32Array r2 = r1.fill(2, 1, r1.length());
    Int32Array r3 = r2.fill(3, 2, 3);
    assertEqual(arr, r3);
    assertEqualInt(1, r3.get(0));
    assertEqualInt(2, r3.get(1));
    assertEqualInt(3, r3.get(2));
    assertEqualInt(2, r3.get(3));
    }

    /**
     * Verify buffer reference remains same Object after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_5500
     * @tc.name int32ArrayFillPart01TestMindmapTest055
     * @tc.desc Verify buffer reference remains same Object after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest055() {
    Int32Array arr = new Int32Array(4);
    ArrayBuffer buf = arr.buffer();
    arr.fill(5);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify byteOffset remains unchanged after fill on offset view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_5600
     * @tc.name int32ArrayFillPart01TestMindmapTest056
     * @tc.desc Verify byteOffset remains unchanged after fill on offset view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest056() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array arr = new Int32Array(buf, 8, 3);
    int off = arr.byteOffset();
    arr.fill(9);
    assertEqual(off, arr.byteOffset());
    assertEqual(8, arr.byteOffset());
    }

    /**
     * Verify empty array length=0 fill silent no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_5700
     * @tc.name int32ArrayFillPart01TestMindmapTest057
     * @tc.desc Verify empty array length=0 fill silent no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest057() {
    Int32Array arr = new Int32Array(0);
    arr.fill(9);
    assertEqual(0, arr.length());
    }

    /**
     * Verify empty array fill with start still no-op length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_5800
     * @tc.name int32ArrayFillPart01TestMindmapTest058
     * @tc.desc Verify empty array fill with start still no-op length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest058() {
    Int32Array arr = new Int32Array(0);
    arr.fill(9, 0, arr.length());
    assertEqual(0, arr.length());
    }

    /**
     * Verify empty array fill with start and end still no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_5900
     * @tc.name int32ArrayFillPart01TestMindmapTest059
     * @tc.desc Verify empty array fill with start and end still no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest059() {
    Int32Array arr = new Int32Array(0);
    arr.fill(9, 0, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify empty array fill with out of range start end no-op no throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_6000
     * @tc.name int32ArrayFillPart01TestMindmapTest060
     * @tc.desc Verify empty array fill with out of range start end no-op no throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest060() {
    Int32Array arr = new Int32Array(0);
    arr.fill(9, -100, 100);
    assertEqual(0, arr.length());
    }

    /**
     * Verify empty array fill returns this and length remains 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_6100
     * @tc.name int32ArrayFillPart01TestMindmapTest061
     * @tc.desc Verify empty array fill returns this and length remains 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest061() {
    Int32Array arr = new Int32Array(0);
    Int32Array ret = arr.fill(5);
    assertEqual(arr, ret);
    assertEqual(0, ret.length());
    }

    /**
     * Verify single element array fill fills whole element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_6200
     * @tc.name int32ArrayFillPart01TestMindmapTest062
     * @tc.desc Verify single element array fill fills whole element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest062() {
    Int32Array arr = new Int32Array(1);
    arr.fill(33);
    assertEqual(1, arr.length());
    assertEqualInt(33, arr.get(0));
    }

    /**
     * Verify single element fill(33, 0, 1) equals filling whole array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_6300
     * @tc.name int32ArrayFillPart01TestMindmapTest063
     * @tc.desc Verify single element fill(33, 0, 1) equals filling whole array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest063() {
    Int32Array arr = new Int32Array(new int[] {7});
    arr.fill(33, 0, 1);
    assertEqualInt(33, arr.get(0));
    }

    /**
     * Verify single element fill(v, 1) start out of range no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_6400
     * @tc.name int32ArrayFillPart01TestMindmapTest064
     * @tc.desc Verify single element fill(v, 1) start out of range no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest064() {
    Int32Array arr = new Int32Array(new int[] {7});
    arr.fill(33, 1, arr.length());
    assertEqualInt(7, arr.get(0));
    }

    /**
     * Verify single element fill(v, -1) fills the unique element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_6500
     * @tc.name int32ArrayFillPart01TestMindmapTest065
     * @tc.desc Verify single element fill(v, -1) fills the unique element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest065() {
    Int32Array arr = new Int32Array(new int[] {7});
    arr.fill(44, -1, arr.length());
    assertEqualInt(44, arr.get(0));
    }

    /**
     * Verify single element fill(v, 0, 0) empty interval no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_6600
     * @tc.name int32ArrayFillPart01TestMindmapTest066
     * @tc.desc Verify single element fill(v, 0, 0) empty interval no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest066() {
    Int32Array arr = new Int32Array(new int[] {7});
    arr.fill(55, 0, 0);
    assertEqualInt(7, arr.get(0));
    }

    /**
     * Verify repeated fill same value is idempotent no content change
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_7300
     * @tc.name int32ArrayFillPart01TestMindmapTest073
     * @tc.desc Verify repeated fill same value is idempotent no content change
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest073() {
    Int32Array arr = new Int32Array(new int[] {5, 5, 5});
    arr.fill(5);
    arr.fill(5);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify two chained fills different values latter overrides former range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_7400
     * @tc.name int32ArrayFillPart01TestMindmapTest074
     * @tc.desc Verify two chained fills different values latter overrides former range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest074() {
    Int32Array arr = new Int32Array(4);
    arr.fill(11).fill(22, 2, arr.length());
    assertEqualInt(11, arr.get(0));
    assertEqualInt(11, arr.get(1));
    assertEqualInt(22, arr.get(2));
    assertEqualInt(22, arr.get(3));
    }

    /**
     * Verify shared ArrayBuffer same offset view observes fill writes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_7500
     * @tc.name int32ArrayFillPart01TestMindmapTest075
     * @tc.desc Verify shared ArrayBuffer same offset view observes fill writes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest075() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a1 = new Int32Array(buf, 0, 4);
    Int32Array a2 = new Int32Array(buf, 0, 4);
    a1.fill(42);
    assertEqualInt(42, a2.get(0));
    assertEqualInt(42, a2.get(1));
    assertEqualInt(42, a2.get(2));
    assertEqualInt(42, a2.get(3));
    }

    /**
     * Verify shared ArrayBuffer partial fill seen through second view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_7600
     * @tc.name int32ArrayFillPart01TestMindmapTest076
     * @tc.desc Verify shared ArrayBuffer partial fill seen through second view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest076() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a1 = new Int32Array(buf, 0, 4);
    Int32Array a2 = new Int32Array(buf, 0, 4);
    a1.fill(0);
    a1.fill(77, 1, 3);
    assertEqualInt(0, a2.get(0));
    assertEqualInt(77, a2.get(1));
    assertEqualInt(77, a2.get(2));
    assertEqualInt(0, a2.get(3));
    }

    /**
     * Verify fill does not affect disjoint byte range of other view on same buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_7700
     * @tc.name int32ArrayFillPart01TestMindmapTest077
     * @tc.desc Verify fill does not affect disjoint byte range of other view on same buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest077() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array a1 = new Int32Array(buf, 0, 3);
    Int32Array a2 = new Int32Array(buf, 12, 3);
    a1.fill(0);
    a2.fill(0);
    a1.fill(111, 0, 3);
    assertEqualInt(0, a2.get(0));
    assertEqualInt(0, a2.get(1));
    assertEqualInt(0, a2.get(2));
    assertEqualInt(111, a1.get(0));
    }

    /**
     * Verify fill on offset ArrayBuffer view writes to correct underlying buffer positions
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_7800
     * @tc.name int32ArrayFillPart01TestMindmapTest078
     * @tc.desc Verify fill on offset ArrayBuffer view writes to correct underlying buffer positions
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest078() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array a1 = new Int32Array(buf, 0, 6);
    Int32Array a2 = new Int32Array(buf, 8, 3);
    a1.fill(0);
    a2.fill(99);
    assertEqualInt(0, a1.get(0));
    assertEqualInt(0, a1.get(1));
    assertEqualInt(99, a1.get(2));
    assertEqualInt(99, a1.get(3));
    assertEqualInt(99, a1.get(4));
    assertEqualInt(0, a1.get(5));
    }

    /**
     * Verify fill on subarray subview writes through to original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_7900
     * @tc.name int32ArrayFillPart01TestMindmapTest079
     * @tc.desc Verify fill on subarray subview writes through to original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest079() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0, 0});
    Int32Array sub = arr.subarray(1, 4);
    sub.fill(7);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(3));
    assertEqualInt(0, arr.get(4));
    assertEqualInt(7, sub.get(0));
    }

    /**
     * Verify fill INT_MAX then fill 0 completely overwrites previous value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART01_TEST_MINDMAP_8200
     * @tc.name int32ArrayFillPart01TestMindmapTest082
     * @tc.desc Verify fill INT_MAX then fill 0 completely overwrites previous value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart01TestMindmapTest082() {
    Int32Array arr = new Int32Array(2);
    int v = 2147483647;
    arr.fill(v);
    arr.fill(0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }
}
