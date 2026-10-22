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
 * Int32ArrayIncludesPart04Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayIncludesPart04Test extends BasTest {
    /**
     * Verify includes length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_0100
     * @tc.name int32ArrayIncludesPart04TestMindmapTest001
     * @tc.desc Verify includes length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest001() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int beforeLen = arr.length();
    arr.includes(20);
    assertEqual(beforeLen, arr.length());
    }

    /**
     * Verify includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_0200
     * @tc.name int32ArrayIncludesPart04TestMindmapTest002
     * @tc.desc Verify includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest002() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7});
    arr.includes(999);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(6, arr.get(1));
    assertEqualInt(7, arr.get(2));
    }

    /**
     * Verify includes byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_0300
     * @tc.name int32ArrayIncludesPart04TestMindmapTest003
     * @tc.desc Verify includes byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest003() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int before = arr.byteLength();
    arr.includes(3);
    assertEqual(before, arr.byteLength());
    }

    /**
     * Verify includes byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_0400
     * @tc.name int32ArrayIncludesPart04TestMindmapTest004
     * @tc.desc Verify includes byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest004() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 4, 2);
    int before = arr.byteOffset();
    arr.includes(0);
    assertEqual(before, arr.byteOffset());
    }

    /**
     * Verify includes ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_0500
     * @tc.name int32ArrayIncludesPart04TestMindmapTest005
     * @tc.desc Verify includes ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest005() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    ArrayBuffer buf = arr.buffer();
    arr.includes(1);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify includes fromIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_0700
     * @tc.name int32ArrayIncludesPart04TestMindmapTest007
     * @tc.desc Verify includes fromIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest007() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.includes(20, -3);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify $_set includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_0800
     * @tc.name int32ArrayIncludesPart04TestMindmapTest008
     * @tc.desc Verify $_set includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest008() {
    Int32Array arr = new Int32Array(3);
    arr.set(1, 42);
    assertTrue(arr.includes(42));
    }

    /**
     * Verify fill includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_0900
     * @tc.name int32ArrayIncludesPart04TestMindmapTest009
     * @tc.desc Verify fill includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest009() {
    Int32Array arr = new Int32Array(5);
    arr.fill(7);
    assertTrue(arr.includes(7));
    }

    /**
     * Verify fill includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_1000
     * @tc.name int32ArrayIncludesPart04TestMindmapTest010
     * @tc.desc Verify fill includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest010() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(0);
    assertFalse(arr.includes(2));
    }

    /**
     * Verify set(Array) includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_1100
     * @tc.name int32ArrayIncludesPart04TestMindmapTest011
     * @tc.desc Verify set(Array) includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest011() {
    Int32Array arr = new Int32Array(4);
    arr.set(new Int32Array(new int[] {100, 200}));
    assertTrue(arr.includes(100));
    assertTrue(arr.includes(200));
    }

    /**
     * Verify set(TypedArray) includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_1200
     * @tc.name int32ArrayIncludesPart04TestMindmapTest012
     * @tc.desc Verify set(TypedArray) includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest012() {
    Int32Array arr = new Int32Array(4);
    Int32Array src = new Int32Array(new int[] {11, 22, 33});
    arr.set(src, 1);
    assertTrue(arr.includes(22));
    }

    /**
     * Verify reverse includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_1300
     * @tc.name int32ArrayIncludesPart04TestMindmapTest013
     * @tc.desc Verify reverse includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest013() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.reverse();
    assertTrue(arr.includes(1));
    assertTrue(arr.includes(2));
    assertTrue(arr.includes(3));
    }

    /**
     * Verify sort includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_1400
     * @tc.name int32ArrayIncludesPart04TestMindmapTest014
     * @tc.desc Verify sort includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest014() {
    Int32Array arr = new Int32Array(new int[] {3, 1, 2});
    arr.sort();
    assertTrue(arr.includes(1));
    assertTrue(arr.includes(2));
    assertTrue(arr.includes(3));
    }

    /**
     * Verify includes true false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_1800
     * @tc.name int32ArrayIncludesPart04TestMindmapTest018
     * @tc.desc Verify includes true false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest018() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    assertTrue(arr.includes(2));
    arr.set(1, 99);
    assertFalse(arr.includes(2));
    }

    /**
     * Verify includes false true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_1900
     * @tc.name int32ArrayIncludesPart04TestMindmapTest019
     * @tc.desc Verify includes false true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest019() {
    Int32Array arr = new Int32Array(new int[] {1, 0, 3});
    assertFalse(arr.includes(2));
    arr.set(1, 2);
    assertTrue(arr.includes(2));
    }

    /**
     * Verify includes fill false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_2000
     * @tc.name int32ArrayIncludesPart04TestMindmapTest020
     * @tc.desc Verify includes fill false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest020() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7});
    assertTrue(arr.includes(6));
    arr.fill(0);
    assertFalse(arr.includes(6));
    }

    /**
     * Verify includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_2100
     * @tc.name int32ArrayIncludesPart04TestMindmapTest021
     * @tc.desc Verify includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest021() {
    Int32Array arr = new Int32Array(new int[] {10, 20});
    boolean r1 = arr.includes(20);
    arr.set(1, 30);
    boolean r2 = arr.includes(20);
    assertTrue(r1);
    assertFalse(r2);
    }

    /**
     * Verify false searchElement ToNumber 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_2200
     * @tc.name int32ArrayIncludesPart04TestMindmapTest022
     * @tc.desc Verify false searchElement ToNumber 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest022() {
    Int32Array arr = new Int32Array(new int[] {0, 1});
    int v = 0;
    assertTrue(arr.includes(v));
    }

    /**
     * Verify includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_2300
     * @tc.name int32ArrayIncludesPart04TestMindmapTest023
     * @tc.desc Verify includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest023() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean r1 = arr.includes(2);
    boolean r2 = arr.includes(2);
    assertEqual(r2, r1);
    }

    /**
     * Verify includes true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_2400
     * @tc.name int32ArrayIncludesPart04TestMindmapTest024
     * @tc.desc Verify includes true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest024() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    assertTrue(arr.includes(10));
    assertTrue(arr.includes(30));
    }

    /**
     * Verify includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_2500
     * @tc.name int32ArrayIncludesPart04TestMindmapTest025
     * @tc.desc Verify includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest025() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean both = arr.includes(1) && arr.includes(3);
    assertTrue(both);
    }

    /**
     * Verify includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_2600
     * @tc.name int32ArrayIncludesPart04TestMindmapTest026
     * @tc.desc Verify includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest026() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean either = arr.includes(99) || arr.includes(2);
    assertTrue(either);
    }

    /**
     * Verify includes fill this
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_2700
     * @tc.name int32ArrayIncludesPart04TestMindmapTest027
     * @tc.desc Verify includes fill this
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest027() {
    Int32Array arr = new Int32Array(3);
    boolean r = arr.fill(5).includes(5);
    assertTrue(r);
    }

    /**
     * Verify includes reverse this
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_2800
     * @tc.name int32ArrayIncludesPart04TestMindmapTest028
     * @tc.desc Verify includes reverse this
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest028() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean r = arr.reverse().includes(1);
    assertTrue(r);
    }

    /**
     * Verify includes sort this
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_2900
     * @tc.name int32ArrayIncludesPart04TestMindmapTest029
     * @tc.desc Verify includes sort this
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest029() {
    Int32Array arr = new Int32Array(new int[] {3, 1, 2});
    boolean r = arr.sort().includes(2);
    assertTrue(r);
    }

    /**
     * Verify fill-reverse-includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_3000
     * @tc.name int32ArrayIncludesPart04TestMindmapTest030
     * @tc.desc Verify fill-reverse-includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest030() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0});
    boolean r = arr.fill(9).reverse().includes(9);
    assertTrue(r);
    }

    /**
     * Verify searchElement -0 +0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_4200
     * @tc.name int32ArrayIncludesPart04TestMindmapTest042
     * @tc.desc Verify searchElement -0 +0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest042() {
    Int32Array arr = new Int32Array(new int[] {0});
    assertTrue(arr.includes(-0));
    }

    /**
     * Verify 0 true ToInt32 1 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_4600
     * @tc.name int32ArrayIncludesPart04TestMindmapTest046
     * @tc.desc Verify 0 true ToInt32 1 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest046() {
    Int32Array arr = new Int32Array(new int[] {0});
    assertFalse(arr.includes(1));
    }

    /**
     * Verify 1 true ToNumber 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_4700
     * @tc.name int32ArrayIncludesPart04TestMindmapTest047
     * @tc.desc Verify 1 true ToNumber 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest047() {
    Int32Array arr = new Int32Array(new int[] {1});
    assertTrue(arr.includes(1));
    }

    /**
     * Verify subarray includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_4800
     * @tc.name int32ArrayIncludesPart04TestMindmapTest048
     * @tc.desc Verify subarray includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest048() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array child = parent.subarray(1, 3);
    parent.set(1, 77);
    assertTrue(child.includes(77));
    }

    /**
     * Verify subarray includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_4900
     * @tc.name int32ArrayIncludesPart04TestMindmapTest049
     * @tc.desc Verify subarray includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest049() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array child = parent.subarray(1, 3);
    child.set(0, 88);
    assertTrue(parent.includes(88));
    }

    /**
     * Verify subarray includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_5000
     * @tc.name int32ArrayIncludesPart04TestMindmapTest050
     * @tc.desc Verify subarray includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest050() {
    Int32Array parent = new Int32Array(new int[] {10, 20, 30, 40});
    Int32Array child = parent.subarray(1, 3);
    assertFalse(child.includes(10));
    assertFalse(child.includes(40));
    }

    /**
     * Verify subarray includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_5100
     * @tc.name int32ArrayIncludesPart04TestMindmapTest051
     * @tc.desc Verify subarray includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest051() {
    Int32Array parent = new Int32Array(new int[] {10, 20, 30, 40});
    Int32Array child = parent.subarray(1, 3);
    assertTrue(child.includes(20));
    assertTrue(child.includes(30));
    }

    /**
     * Verify ArrayBuffer Int32Array includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_5200
     * @tc.name int32ArrayIncludesPart04TestMindmapTest052
     * @tc.desc Verify ArrayBuffer Int32Array includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest052() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 2);
    Int32Array b = new Int32Array(buf, 8, 2);
    a.set(0, 111);
    assertFalse(b.includes(111));
    b.set(0, 222);
    assertFalse(a.includes(222));
    }

    /**
     * Verify slice includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_5400
     * @tc.name int32ArrayIncludesPart04TestMindmapTest054
     * @tc.desc Verify slice includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest054() {
    Int32Array orig = new Int32Array(new int[] {1, 2, 3});
    Int32Array cp = orig.slice();
    orig.set(0, 999);
    assertFalse(cp.includes(999));
    assertTrue(cp.includes(1));
    }

    /**
     * Verify slice includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_5500
     * @tc.name int32ArrayIncludesPart04TestMindmapTest055
     * @tc.desc Verify slice includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest055() {
    Int32Array orig = new Int32Array(new int[] {1, 2, 3});
    Int32Array cp = orig.slice();
    cp.set(0, 888);
    assertFalse(orig.includes(888));
    assertTrue(orig.includes(1));
    }

    /**
     * Verify fill subarray includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_5600
     * @tc.name int32ArrayIncludesPart04TestMindmapTest056
     * @tc.desc Verify fill subarray includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest056() {
    Int32Array parent = new Int32Array(4);
    Int32Array child = parent.subarray(0, 4);
    parent.fill(42);
    assertTrue(child.includes(42));
    }

    /**
     * Verify subarray fill includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_5700
     * @tc.name int32ArrayIncludesPart04TestMindmapTest057
     * @tc.desc Verify subarray fill includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest057() {
    Int32Array parent = new Int32Array(4);
    Int32Array child = parent.subarray(1, 3);
    child.fill(7);
    assertTrue(parent.includes(7));
    }

    /**
     * Verify shared buffer $_get across views
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_5900
     * @tc.name int32ArrayIncludesPart04TestMindmapTest059
     * @tc.desc Verify shared buffer $_get across views
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest059() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int32Array full = new Int32Array(buf);
    Int32Array offset = new Int32Array(buf, 8, 3);
    full.set(2, 99);
    assertEqualInt(99, offset.get(0));
    }

    /**
     * Verify includes false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_6000
     * @tc.name int32ArrayIncludesPart04TestMindmapTest060
     * @tc.desc Verify includes false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest060() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int32Array full = new Int32Array(buf);
    Int32Array offset = new Int32Array(buf, 8, 3);
    full.set(0, 77);
    assertFalse(offset.includes(77));
    }

    /**
     * Verify includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_6100
     * @tc.name int32ArrayIncludesPart04TestMindmapTest061
     * @tc.desc Verify includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest061() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array a = new Int32Array(buf, 0, 2);
    Int32Array b = new Int32Array(buf, 4, 2);
    Int32Array c = new Int32Array(buf, 0, 3);
    a.set(0, 1);
    b.set(1, 2);
    assertTrue(c.includes(1));
    assertTrue(c.includes(2));
    }

    /**
     * Verify fill reverse includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_6200
     * @tc.name int32ArrayIncludesPart04TestMindmapTest062
     * @tc.desc Verify fill reverse includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest062() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(0, 1, 3).reverse();
    assertTrue(arr.includes(1));
    assertTrue(arr.includes(0));
    }

    /**
     * Verify set sort includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_6300
     * @tc.name int32ArrayIncludesPart04TestMindmapTest063
     * @tc.desc Verify set sort includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest063() {
    Int32Array arr = new Int32Array(3);
    Int32Array src = new Int32Array(new int[] {30, 10, 20});
    arr.set(src);
    arr.sort();
    assertTrue(arr.includes(10));
    assertTrue(arr.includes(20));
    assertTrue(arr.includes(30));
    }

    /**
     * Verify copyWithin includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_6400
     * @tc.name int32ArrayIncludesPart04TestMindmapTest064
     * @tc.desc Verify copyWithin includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest064() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3);
    assertTrue(arr.includes(4));
    assertTrue(arr.includes(5));
    assertFalse(arr.includes(1));
    }

    /**
     * Verify subarray fill includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_6500
     * @tc.name int32ArrayIncludesPart04TestMindmapTest065
     * @tc.desc Verify subarray fill includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest065() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array sub = parent.subarray(1, 4);
    sub.fill(0);
    assertTrue(parent.includes(0));
    assertTrue(parent.includes(1));
    assertTrue(parent.includes(5));
    assertFalse(parent.includes(2));
    }

    /**
     * Verify subarray sort includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_6600
     * @tc.name int32ArrayIncludesPart04TestMindmapTest066
     * @tc.desc Verify subarray sort includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest066() {
    Int32Array parent = new Int32Array(new int[] {0, 3, 1, 2, 0});
    Int32Array sub = parent.subarray(1, 4);
    sub.sort();
    assertTrue(parent.includes(1));
    assertTrue(parent.includes(2));
    assertTrue(parent.includes(3));
    }

    /**
     * Verify subarray reverse includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_6700
     * @tc.name int32ArrayIncludesPart04TestMindmapTest067
     * @tc.desc Verify subarray reverse includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest067() {
    Int32Array parent = new Int32Array(new int[] {0, 1, 2, 3, 0});
    Int32Array sub = parent.subarray(1, 4);
    sub.reverse();
    assertEqualInt(3, parent.get(1));
    assertEqualInt(1, parent.get(3));
    assertTrue(parent.includes(1));
    assertTrue(parent.includes(3));
    }

    /**
     * Verify includes true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_7000
     * @tc.name int32ArrayIncludesPart04TestMindmapTest070
     * @tc.desc Verify includes true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest070() {
    Int32Array arr = new Int32Array(new int[] {5, 5, 5, 5});
    assertTrue(arr.includes(5));
    }

    /**
     * Verify of includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_7200
     * @tc.name int32ArrayIncludesPart04TestMindmapTest072
     * @tc.desc Verify of includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest072() {
    Int32Array arr = Int32Array.of(100, 200, 300);
    assertTrue(arr.includes(200));
    assertFalse(arr.includes(400));
    }

    /**
     * Verify from includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_7300
     * @tc.name int32ArrayIncludesPart04TestMindmapTest073
     * @tc.desc Verify from includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest073() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int32Array arr = Int32Array.from(src);
    assertTrue(arr.includes(20));
    }

    /**
     * Verify from TypedArray includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_7400
     * @tc.name int32ArrayIncludesPart04TestMindmapTest074
     * @tc.desc Verify from TypedArray includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest074() {
    Int32Array src = new Int32Array(new int[] {7, 8, 9});
    Int32Array arr = Int32Array.from(src);
    assertTrue(arr.includes(8));
    }

    /**
     * Verify fill fromIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_7500
     * @tc.name int32ArrayIncludesPart04TestMindmapTest075
     * @tc.desc Verify fill fromIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest075() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0, 0});
    arr.fill(1, 2, 4);
    assertTrue(arr.includes(1, 2));
    assertFalse(arr.includes(1, 4));
    }

    /**
     * Verify reverse fromIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_7600
     * @tc.name int32ArrayIncludesPart04TestMindmapTest076
     * @tc.desc Verify reverse fromIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest076() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.reverse();
    assertTrue(arr.includes(1, -1));
    }

    /**
     * Verify subarray fromIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_7700
     * @tc.name int32ArrayIncludesPart04TestMindmapTest077
     * @tc.desc Verify subarray fromIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest077() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array sub = parent.subarray(1, 5);
    assertEqualInt(4, sub.get(2));
    assertTrue(sub.includes(4, 2));
    }

    /**
     * Verify fromIndex=length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_7800
     * @tc.name int32ArrayIncludesPart04TestMindmapTest078
     * @tc.desc Verify fromIndex=length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest078() {
    Int32Array arr = new Int32Array(4);
    arr.set(3, 77);
    assertEqualInt(77, arr.get(3));
    assertTrue(arr.includes(77, 3));
    assertFalse(arr.includes(77, 4));
    }

    /**
     * Verify sort fromIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_7900
     * @tc.name int32ArrayIncludesPart04TestMindmapTest079
     * @tc.desc Verify sort fromIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest079() {
    Int32Array arr = new Int32Array(new int[] {3, 1, 2});
    arr.sort();
    assertTrue(arr.includes(1, 0));
    assertTrue(arr.includes(3, 2));
    }

    /**
     * Verify fill zero then includes zero true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_8000
     * @tc.name int32ArrayIncludesPart04TestMindmapTest080
     * @tc.desc Verify fill zero then includes zero true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest080() {
    Int32Array arr = new Int32Array(3);
    arr.fill(0);
    assertTrue(arr.includes(0));
    }

    /**
     * Verify -0 $_set 0 includes(0) includes(-0) true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_8100
     * @tc.name int32ArrayIncludesPart04TestMindmapTest081
     * @tc.desc Verify -0 $_set 0 includes(0) includes(-0) true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest081() {
    Int32Array arr = new Int32Array(1);
    arr.set(0, -0);
    assertTrue(arr.includes(0));
    assertTrue(arr.includes(-0));
    }

    /**
     * Verify includes on empty array returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_8400
     * @tc.name int32ArrayIncludesPart04TestMindmapTest084
     * @tc.desc Verify includes on empty array returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest084() {
    Int32Array arr = new Int32Array(0);
    assertFalse(arr.includes(1));
    }

    /**
     * Verify length=1 includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_8500
     * @tc.name int32ArrayIncludesPart04TestMindmapTest085
     * @tc.desc Verify length=1 includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest085() {
    Int32Array arr = new Int32Array(1);
    arr.set(0, 42);
    assertTrue(arr.includes(42));
    assertFalse(arr.includes(42, 1));
    }

    /**
     * Verify includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_8700
     * @tc.name int32ArrayIncludesPart04TestMindmapTest087
     * @tc.desc Verify includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest087() {
    Int32Array empty = new Int32Array(0);
    Int32Array nonempty = new Int32Array(new int[] {1});
    assertFalse(empty.includes(1));
    assertTrue(nonempty.includes(1));
    }

    /**
     * Verify includes fromIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_8800
     * @tc.name int32ArrayIncludesPart04TestMindmapTest088
     * @tc.desc Verify includes fromIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest088() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    assertTrue(arr.includes(10, 0));
    assertTrue(arr.includes(20, 1));
    assertTrue(arr.includes(30, 2));
    }

    /**
     * Verify fromIndex false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_8900
     * @tc.name int32ArrayIncludesPart04TestMindmapTest089
     * @tc.desc Verify fromIndex false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest089() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    assertFalse(arr.includes(10, 1));
    }

    /**
     * Verify fromIndex false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_9000
     * @tc.name int32ArrayIncludesPart04TestMindmapTest090
     * @tc.desc Verify fromIndex false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest090() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.set(0, 99);
    assertFalse(arr.includes(99, 1000000));
    }

    /**
     * Verify fromIndex<-length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_INCLUDES_PART04_TEST_MINDMAP_9100
     * @tc.name int32ArrayIncludesPart04TestMindmapTest091
     * @tc.desc Verify fromIndex<-length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayIncludesPart04TestMindmapTest091() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.set(0, 99);
    assertTrue(arr.includes(99, -1000000));
    }
}
