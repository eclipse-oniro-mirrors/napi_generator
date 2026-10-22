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

import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayIncludesPart02Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayIncludesPart02Test extends BasTest {
    /**
     * Verify includes returns expected boolean
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_0100
     * @tc.name int32ArrayIncludesPart02TestMindmapTest001
     * @tc.desc Verify includes returns expected boolean
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest001() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    boolean r = arr.includes(10);
    assertTrue(r);
    }

    /**
     * Verify includes with fromIndex returns expected boolean
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_0300
     * @tc.name int32ArrayIncludesPart02TestMindmapTest003
     * @tc.desc Verify includes with fromIndex returns expected boolean
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest003() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    boolean r = arr.includes(30, 2);
    assertTrue(r);
    }

    /**
     * Verify includes with fromIndex returns expected boolean
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_0400
     * @tc.name int32ArrayIncludesPart02TestMindmapTest004
     * @tc.desc Verify includes with fromIndex returns expected boolean
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest004() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    boolean r = arr.includes(30, -2);
    assertTrue(r);
    }

    /**
     * Verify includes returns expected boolean
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_0500
     * @tc.name int32ArrayIncludesPart02TestMindmapTest005
     * @tc.desc Verify includes returns expected boolean
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest005() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    boolean r = arr.includes(99);
    assertFalse(r);
    }

    /**
     * Verify fromIndex at or beyond length produces false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_0700
     * @tc.name int32ArrayIncludesPart02TestMindmapTest007
     * @tc.desc Verify fromIndex at or beyond length produces false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest007() {
    Int32Array atLength = new Int32Array(new int[] {1, 2, 3});
    Int32Array beyondLength = new Int32Array(new int[] {1, 2, 3});
    assertFalse(atLength.includes(3, atLength.length()));
    assertFalse(beyondLength.includes(1, beyondLength.length() + 1));
    assertFalse(beyondLength.includes(1, 100));
    }

    /**
     * Verify includes fromIndex past last element returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_0800
     * @tc.name int32ArrayIncludesPart02TestMindmapTest008
     * @tc.desc Verify includes fromIndex past last element returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest008() {
    Int32Array arr = new Int32Array(new int[] {10, 20});
    boolean r = arr.includes(10, 1);
    assertFalse(r);
    }

    /**
     * Verify includes fromIndex=0 true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_1300
     * @tc.name int32ArrayIncludesPart02TestMindmapTest013
     * @tc.desc Verify includes fromIndex=0 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest013() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    assertEqual(true, arr.includes(10, 0));
    }

    /**
     * Verify includes fromIndex length-1 true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_1400
     * @tc.name int32ArrayIncludesPart02TestMindmapTest014
     * @tc.desc Verify includes fromIndex length-1 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest014() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    assertEqual(true, arr.includes(30, arr.length() - 1));
    }

    /**
     * Verify includes fromIndex -length 0 true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_1500
     * @tc.name int32ArrayIncludesPart02TestMindmapTest015
     * @tc.desc Verify includes fromIndex -length 0 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest015() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    assertEqual(true, arr.includes(10, -100));
    }

    /**
     * Verify includes -0 0 true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_1600
     * @tc.name int32ArrayIncludesPart02TestMindmapTest016
     * @tc.desc Verify includes -0 0 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest016() {
    Int32Array arr = new Int32Array(new int[] {0, 1, 2});
    assertEqual(true, arr.includes(-0));
    }

    /**
     * Verify includes fromIndex length false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_1800
     * @tc.name int32ArrayIncludesPart02TestMindmapTest018
     * @tc.desc Verify includes fromIndex length false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest018() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    assertEqual(false, arr.includes(3, arr.length()));
    }

    /**
     * Verify includes does not change typed-array metadata
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_2100
     * @tc.name int32ArrayIncludesPart02TestMindmapTest021
     * @tc.desc Verify includes does not change typed-array metadata
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest021() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int beforeLength = arr.length();
    int beforeByteLength = arr.byteLength();
    arr.includes(20);
    assertEqual(beforeLength, arr.length());
    assertEqual(beforeByteLength, arr.byteLength());
    assertEqual(0, arr.byteOffset());
    assertEqual(4, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify includes preserves metadata of an ArrayBuffer view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_2200
     * @tc.name int32ArrayIncludesPart02TestMindmapTest022
     * @tc.desc Verify includes preserves metadata of an ArrayBuffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest022() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 4, 2);
    int beforeOffset = arr.byteOffset();
    int beforeLength = arr.length();
    int beforeByteLength = arr.byteLength();
    arr.includes(0);
    assertEqual(beforeOffset, arr.byteOffset());
    assertEqual(beforeLength, arr.length());
    assertEqual(beforeByteLength, arr.byteLength());
    }

    /**
     * Verify includes does not mutate the underlying elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_2300
     * @tc.name int32ArrayIncludesPart02TestMindmapTest023
     * @tc.desc Verify includes does not mutate the underlying elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest023() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    assertTrue(arr.includes(10));
    assertFalse(arr.includes(99));
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify includes with fromIndex does not mutate the array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_2400
     * @tc.name int32ArrayIncludesPart02TestMindmapTest024
     * @tc.desc Verify includes with fromIndex does not mutate the array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest024() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    assertTrue(arr.includes(30, 2));
    assertFalse(arr.includes(30, 3));
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify includes INT32_MAX
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_2500
     * @tc.name int32ArrayIncludesPart02TestMindmapTest025
     * @tc.desc Verify includes INT32_MAX
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest025() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0});
    arr.includes(2147483647);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify includes ArrayBuffer Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_2700
     * @tc.name int32ArrayIncludesPart02TestMindmapTest027
     * @tc.desc Verify includes ArrayBuffer Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest027() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a1 = new Int32Array(buf, 0, 2);
    Int32Array a2 = new Int32Array(buf, 8, 2);
    a1.set(0, 1);
    a1.set(1, 2);
    a2.set(0, 3);
    a2.set(1, 4);
    a1.includes(2);
    assertEqualInt(3, a2.get(0));
    assertEqualInt(4, a2.get(1));
    }

    /**
     * Verify includes offset buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_2900
     * @tc.name int32ArrayIncludesPart02TestMindmapTest029
     * @tc.desc Verify includes offset buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest029() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array prefix = new Int32Array(buf, 0, 1);
    Int32Array view = new Int32Array(buf, 4, 3);
    prefix.set(0, 99);
    view.set(0, 10);
    view.set(1, 20);
    view.set(2, 30);
    view.includes(20);
    assertEqualInt(99, prefix.get(0));
    }

    /**
     * Verify includes preserves the underlying ArrayBuffer and its size
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_3000
     * @tc.name int32ArrayIncludesPart02TestMindmapTest030
     * @tc.desc Verify includes preserves the underlying ArrayBuffer and its size
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest030() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf);
    ArrayBuffer beforeBuffer = arr.buffer();
    arr.includes(0);
    assertEqual(beforeBuffer, arr.buffer());
    assertEqual(12, buf.byteLength());
    }

    /**
     * Verify includes subarray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_3100
     * @tc.name int32ArrayIncludesPart02TestMindmapTest031
     * @tc.desc Verify includes subarray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest031() {
    Int32Array parent = new Int32Array(new int[] {10, 20, 30, 40, 50});
    Int32Array child = parent.subarray(1, 4);
    child.includes(30);
    assertEqualInt(10, parent.get(0));
    assertEqualInt(20, parent.get(1));
    assertEqualInt(30, parent.get(2));
    assertEqualInt(40, parent.get(3));
    assertEqualInt(50, parent.get(4));
    }

    /**
     * Verify includes slice
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_3200
     * @tc.name int32ArrayIncludesPart02TestMindmapTest032
     * @tc.desc Verify includes slice
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest032() {
    Int32Array orig = new Int32Array(new int[] {10, 20, 30});
    Int32Array cp = orig.slice();
    cp.includes(20);
    assertEqualInt(10, orig.get(0));
    assertEqualInt(20, orig.get(1));
    assertEqualInt(30, orig.get(2));
    }

    /**
     * Verify includes on Int32Array constructed from ArrayBuffer finds element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_3400
     * @tc.name int32ArrayIncludesPart02TestMindmapTest034
     * @tc.desc Verify includes on Int32Array constructed from ArrayBuffer finds element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest034() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 0, 3);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    boolean r = arr.includes(2);
    assertEqual(true, r);
    }

    /**
     * Verify includes on subarray finds element within subarray range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_3500
     * @tc.name int32ArrayIncludesPart02TestMindmapTest035
     * @tc.desc Verify includes on subarray finds element within subarray range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest035() {
    Int32Array base = new Int32Array(new int[] {10, 20, 30, 40});
    Int32Array arr = base.subarray(1, 3);
    boolean r = arr.includes(20);
    assertEqual(true, r);
    }

    /**
     * Verify repeated includes calls return the same result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_3600
     * @tc.name int32ArrayIncludesPart02TestMindmapTest036
     * @tc.desc Verify repeated includes calls return the same result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest036() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7});
    boolean first = arr.includes(6);
    boolean second = arr.includes(6);
    assertTrue(first);
    assertEqual(first, second);
    }

    /**
     * Verify includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_3700
     * @tc.name int32ArrayIncludesPart02TestMindmapTest037
     * @tc.desc Verify includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest037() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    assertEqual(true, arr.includes(20));
    assertEqual(false, arr.includes(99));
    assertEqual(true, arr.includes(20));
    assertEqual(false, arr.includes(99));
    }

    /**
     * Verify includes fromIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_3800
     * @tc.name int32ArrayIncludesPart02TestMindmapTest038
     * @tc.desc Verify includes fromIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest038() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    assertEqual(true, arr.includes(30));
    assertEqual(false, arr.includes(30, 3));
    }

    /**
     * Verify includes 50+ true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_3900
     * @tc.name int32ArrayIncludesPart02TestMindmapTest039
     * @tc.desc Verify includes 50+ true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest039() {
    Int32Array data = new Int32Array(60);
    for (int i = 0; i < 60; i++) {
    data.set(i, i);
    }
    boolean r = data.includes(55);
    assertEqual(true, r);
    assertEqual(60, data.length());
    }

    /**
     * Verify includes true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_4000
     * @tc.name int32ArrayIncludesPart02TestMindmapTest040
     * @tc.desc Verify includes true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest040() {
    Int32Array arr = new Int32Array(new int[] {7, 7, 7, 7});
    boolean r = arr.includes(7);
    assertTrue(r);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify includes toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_4200
     * @tc.name int32ArrayIncludesPart02TestMindmapTest042
     * @tc.desc Verify includes toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest042() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    String before = String.valueOf(arr);
    arr.includes(2);
    assertEqual(before, String.valueOf(arr));
    }

    /**
     * Verify includes from boolean
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART02_TEST_MINDMAP_4500
     * @tc.name int32ArrayIncludesPart02TestMindmapTest045
     * @tc.desc Verify includes from boolean
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart02TestMindmapTest045() {
    List<Integer> source = java.util.Arrays.asList(5, 10, 15);
    Int32Array arr = Int32Array.from(source);
    boolean r = arr.includes(10);
    assertEqual(true, r);
    assertEqual(3, arr.length());
    assertEqualInt(5, arr.get(0));
    assertEqualInt(15, arr.get(2));
    }
}
