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
import basetype.common.RangeError;

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayAtPart04Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayAtPart04Test extends BasTest {
    /**
     * Verify at() length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_0100
     * @tc.name int32ArrayAtPart04TestMindmapTest001
     * @tc.desc Verify at() length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest001() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int before = arr.length();
    arr.at(2);
    assertEqual(before, arr.length());
    }

    /**
     * Verify at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_0200
     * @tc.name int32ArrayAtPart04TestMindmapTest002
     * @tc.desc Verify at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest002() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    Integer v = arr.at(0);
    assertEqualInt(10, v);
    }

    /**
     * Verify at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_0300
     * @tc.name int32ArrayAtPart04TestMindmapTest003
     * @tc.desc Verify at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest003() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    Integer v = arr.at(-1);
    assertEqualInt(30, v);
    }

    /**
     * Verify at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_0400
     * @tc.name int32ArrayAtPart04TestMindmapTest004
     * @tc.desc Verify at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest004() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    Integer v = arr.at(-2);
    assertEqualInt(30, v);
    }

    /**
     * Verify at() byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_0500
     * @tc.name int32ArrayAtPart04TestMindmapTest005
     * @tc.desc Verify at() byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest005() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int before = arr.byteLength();
    Integer v = arr.at(1);
    assertEqualInt(2, v);
    assertEqual(before, arr.byteLength());
    }

    /**
     * Verify at() byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_0600
     * @tc.name int32ArrayAtPart04TestMindmapTest006
     * @tc.desc Verify at() byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest006() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 4, 2);
    int before = arr.byteOffset();
    Integer v = arr.at(0);
    assertEqualInt(0, v);
    assertEqual(before, arr.byteOffset());
    }

    /**
     * Verify positive and negative extreme out-of-bounds access does not corrupt the array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_0700
     * @tc.name int32ArrayAtPart04TestMindmapTest007
     * @tc.desc Verify positive and negative extreme out-of-bounds access does not corrupt the array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest007() {
    Int32Array arr = new Int32Array(new int[] {11, 22, 33});
    assertNull(arr.at(99));
    assertNull(arr.at(-99));
    assertEqualInt(11, arr.get(0));
    assertEqualInt(22, arr.get(1));
    assertEqualInt(33, arr.get(2));
    }

    /**
     * Verify at() length=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_0800
     * @tc.name int32ArrayAtPart04TestMindmapTest008
     * @tc.desc Verify at() length=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest008() {
    Int32Array arr = new Int32Array(0);
    Integer v = arr.at(0);
    assertNull(v);
    assertEqual(0, arr.length());
    }

    /**
     * Verify $_set at(1) equals at(-3) for length=4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_1100
     * @tc.name int32ArrayAtPart04TestMindmapTest011
     * @tc.desc Verify $_set at(1) equals at(-3) for length=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest011() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0});
    arr.set(1, 555);
    assertEqual(arr.at(-3).intValue(), arr.at(1).intValue());
    }

    /**
     * Verify $_set out-of-range index throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_1200
     * @tc.name int32ArrayAtPart04TestMindmapTest012
     * @tc.desc Verify $_set out-of-range index throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest012() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    arr.set(5, 999);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set negative index throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_1300
     * @tc.name int32ArrayAtPart04TestMindmapTest013
     * @tc.desc Verify $_set negative index throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest013() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    arr.set(-1, 999);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify fill makes both positive and negative endpoint access return the filled value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_1400
     * @tc.name int32ArrayAtPart04TestMindmapTest014
     * @tc.desc Verify fill makes both positive and negative endpoint access return the filled value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest014() {
    Int32Array arr = new Int32Array(5);
    arr.fill(42);
    assertEqualInt(42, arr.at(0));
    assertEqualInt(42, arr.at(-1));
    }

    /**
     * Verify reverse updates both positive and negative endpoint access
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_1500
     * @tc.name int32ArrayAtPart04TestMindmapTest015
     * @tc.desc Verify reverse updates both positive and negative endpoint access
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest015() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.reverse();
    assertEqualInt(4, arr.at(0));
    assertEqualInt(1, arr.at(-1));
    }

    /**
     * Verify sort updates both positive and negative endpoint access
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_1600
     * @tc.name int32ArrayAtPart04TestMindmapTest016
     * @tc.desc Verify sort updates both positive and negative endpoint access
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest016() {
    Int32Array arr = new Int32Array(new int[] {30, 10, 50, 20, 40});
    arr.sort();
    assertEqualInt(10, arr.at(0));
    assertEqualInt(50, arr.at(-1));
    }

    /**
     * Verify copyWithin at(target)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_1700
     * @tc.name int32ArrayAtPart04TestMindmapTest017
     * @tc.desc Verify copyWithin at(target)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest017() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(3, 0, 1);
    assertEqualInt(10, arr.at(3));
    }

    /**
     * Verify set writes both elements at the destination endpoints
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_1800
     * @tc.name int32ArrayAtPart04TestMindmapTest018
     * @tc.desc Verify set writes both elements at the destination endpoints
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest018() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0, 0});
    Int32Array src = new Int32Array(new int[] {7, 8});
    arr.set(src, 2);
    assertEqualInt(7, arr.at(2));
    assertEqualInt(8, arr.at(3));
    }

    /**
     * Verify 4294967296 (0x100000000) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_2500
     * @tc.name int32ArrayAtPart04TestMindmapTest025
     * @tc.desc Verify 4294967296 (0x100000000) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest025() {
    Int32Array arr = new Int32Array(1);
    arr.set(0, 4294967296L);
    assertEqualInt(0, arr.at(0));
    }

    /**
     * Verify -0 at() 0 +0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_2600
     * @tc.name int32ArrayAtPart04TestMindmapTest026
     * @tc.desc Verify -0 at() 0 +0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest026() {
    Int32Array arr = new Int32Array(1);
    arr.set(0, -0);
    assertEqualInt(0, arr.at(0));
    }

    /**
     * Verify at(at(0))
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_2700
     * @tc.name int32ArrayAtPart04TestMindmapTest027
     * @tc.desc Verify at(at(0))
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest027() {
    Int32Array arr = new Int32Array(new int[] {2, 10, 20, 30});
    Integer idx = arr.at(0);
    assertEqualInt(20, arr.at((int) (idx)));
    }

    /**
     * Verify at(0) 0 at(at(0))
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_2800
     * @tc.name int32ArrayAtPart04TestMindmapTest028
     * @tc.desc Verify at(0) 0 at(at(0))
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest028() {
    Int32Array arr = new Int32Array(new int[] {0, 100, 200});
    Integer idx = arr.at(0);
    assertEqualInt(0, arr.at((int) (idx)));
    }

    /**
     * Verify at(0) length-1 at(at(0))
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_2900
     * @tc.name int32ArrayAtPart04TestMindmapTest029
     * @tc.desc Verify at(0) length-1 at(at(0))
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest029() {
    Int32Array arr = new Int32Array(new int[] {3, 11, 22, 33, 44});
    Integer idx = arr.at(0);
    assertEqualInt(33, arr.at((int) (idx)));
    }

    /**
     * Verify at(0) at(at(0)) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_3100
     * @tc.name int32ArrayAtPart04TestMindmapTest031
     * @tc.desc Verify at(0) at(at(0)) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest031() {
    Int32Array arr = new Int32Array(new int[] {99, 10, 20});
    Integer idx = arr.at(0);
    Integer v = arr.at((int) (idx));
    assertNull(v);
    }

    /**
     * Verify at(0) <-length at(at(0)) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_3200
     * @tc.name int32ArrayAtPart04TestMindmapTest032
     * @tc.desc Verify at(0) <-length at(at(0)) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest032() {
    Int32Array arr = new Int32Array(new int[] {-99, 10, 20});
    Integer idx = arr.at(0);
    Integer v = arr.at((int) (idx));
    assertNull(v);
    }

    /**
     * Verify at(-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_3300
     * @tc.name int32ArrayAtPart04TestMindmapTest033
     * @tc.desc Verify at(-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest033() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 0});
    Integer idx = arr.at(-1);
    assertEqualInt(10, arr.at((int) (idx)));
    }

    /**
     * Verify fill(7).at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_3500
     * @tc.name int32ArrayAtPart04TestMindmapTest035
     * @tc.desc Verify fill(7).at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest035() {
    Int32Array arr = new Int32Array(3);
    assertEqualInt(7, arr.fill(7).at(0));
    }

    /**
     * Verify reverse().at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_3600
     * @tc.name int32ArrayAtPart04TestMindmapTest036
     * @tc.desc Verify reverse().at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest036() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    assertEqualInt(3, arr.reverse().at(0));
    }

    /**
     * Verify sort().at(-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_3700
     * @tc.name int32ArrayAtPart04TestMindmapTest037
     * @tc.desc Verify sort().at(-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest037() {
    Int32Array arr = new Int32Array(new int[] {5, 1, 3});
    assertEqualInt(5, arr.sort().at(-1));
    }

    /**
     * Verify reverse().at(0) returns last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_3800
     * @tc.name int32ArrayAtPart04TestMindmapTest038
     * @tc.desc Verify reverse().at(0) returns last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest038() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    assertEqualInt(4, arr.reverse().at(0));
    }

    /**
     * Verify subarray at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_3900
     * @tc.name int32ArrayAtPart04TestMindmapTest039
     * @tc.desc Verify subarray at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest039() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array child = parent.subarray(1, 3);
    parent.set(1, 77);
    assertEqualInt(77, child.at(0));
    }

    /**
     * Verify subarray at(offset)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_4000
     * @tc.name int32ArrayAtPart04TestMindmapTest040
     * @tc.desc Verify subarray at(offset)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest040() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array child = parent.subarray(1, 3);
    child.set(0, 88);
    assertEqualInt(88, parent.at(1));
    }

    /**
     * Verify subarray at(-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_4100
     * @tc.name int32ArrayAtPart04TestMindmapTest041
     * @tc.desc Verify subarray at(-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest041() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array child = parent.subarray(2);
    child.set(child.length() - 1, 99);
    assertEqualInt(99, parent.at(-1));
    }

    /**
     * Verify subarray at(-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_4200
     * @tc.name int32ArrayAtPart04TestMindmapTest042
     * @tc.desc Verify subarray at(-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest042() {
    Int32Array parent = new Int32Array(new int[] {10, 20, 30, 40});
    Int32Array child = parent.subarray(1, 3);
    assertEqualInt(30, child.at(-1));
    }

    /**
     * Verify subarray(0) at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_4300
     * @tc.name int32ArrayAtPart04TestMindmapTest043
     * @tc.desc Verify subarray(0) at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest043() {
    Int32Array parent = new Int32Array(new int[] {5, 6, 7});
    Int32Array child = parent.subarray(0);
    assertEqual(parent.at(0).intValue(), child.at(0).intValue());
    assertEqual(parent.at(-1).intValue(), child.at(-1).intValue());
    }

    /**
     * Verify slice at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_4400
     * @tc.name int32ArrayAtPart04TestMindmapTest044
     * @tc.desc Verify slice at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest044() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3});
    Int32Array child = parent.slice();
    parent.set(0, 999);
    assertEqualInt(1, child.at(0));
    }

    /**
     * Verify slice at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_4500
     * @tc.name int32ArrayAtPart04TestMindmapTest045
     * @tc.desc Verify slice at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest045() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3});
    Int32Array child = parent.slice();
    child.set(0, 888);
    assertEqualInt(1, parent.at(0));
    }

    /**
     * Verify Int32Array ArrayBuffer at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_4600
     * @tc.name int32ArrayAtPart04TestMindmapTest046
     * @tc.desc Verify Int32Array ArrayBuffer at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest046() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array valFirst = new Int32Array(buf, 0, 4);
    Int32Array valSecond = new Int32Array(buf, 0, 4);
    valFirst.set(0, 111);
    assertEqualInt(111, valSecond.at(0));
    }

    /**
     * Verify Int32Array at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_4700
     * @tc.name int32ArrayAtPart04TestMindmapTest047
     * @tc.desc Verify Int32Array at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest047() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Int32Array valFirst = new Int32Array(buf, 0, 4);
    Int32Array valSecond = new Int32Array(buf, 8, 4);
    valFirst.set(3, 222);
    assertEqualInt(222, valSecond.at(1));
    }

    /**
     * Verify subarray fill at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_4800
     * @tc.name int32ArrayAtPart04TestMindmapTest048
     * @tc.desc Verify subarray fill at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest048() {
    Int32Array parent = new Int32Array(new int[] {0, 0, 0, 0, 0});
    Int32Array child = parent.subarray(1, 4);
    child.fill(7);
    assertEqualInt(7, parent.at(1));
    assertEqualInt(7, parent.at(2));
    assertEqualInt(7, parent.at(3));
    }

    /**
     * Verify reverse subarray at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_4900
     * @tc.name int32ArrayAtPart04TestMindmapTest049
     * @tc.desc Verify reverse subarray at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest049() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array child = parent.subarray(1, 3);
    parent.reverse();
    assertEqualInt(3, child.at(0));
    assertEqualInt(2, child.at(-1));
    }

    /**
     * Verify ArrayBuffer at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_5000
     * @tc.name int32ArrayAtPart04TestMindmapTest050
     * @tc.desc Verify ArrayBuffer at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest050() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array base = new Int32Array(buf);
    base.set(0, 10);
    base.set(1, 20);
    base.set(2, 30);
    base.set(3, 40);
    Int32Array offset = new Int32Array(buf, 8, 2);
    assertEqualInt(30, offset.at(0));
    }

    /**
     * Verify at(-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_5100
     * @tc.name int32ArrayAtPart04TestMindmapTest051
     * @tc.desc Verify at(-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest051() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array base = new Int32Array(buf);
    base.set(0, 10);
    base.set(1, 20);
    base.set(2, 30);
    base.set(3, 40);
    Int32Array offset = new Int32Array(buf, 4, 2);
    assertEqualInt(30, offset.at(-1));
    }

    /**
     * Verify for at(i) $_get(i)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_5200
     * @tc.name int32ArrayAtPart04TestMindmapTest052
     * @tc.desc Verify for at(i) $_get(i)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest052() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    for (int i = 0; i < arr.length(); i++) {
    assertEqual(arr.get(i).intValue(), arr.at(i).intValue());
    }
    }

    /**
     * Verify for at(-(i+1)) $_get(len-1-i)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_5300
     * @tc.name int32ArrayAtPart04TestMindmapTest053
     * @tc.desc Verify for at(-(i+1)) $_get(len-1-i)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest053() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    for (int i = 0; i < arr.length(); i++) {
    assertEqual(arr.get(arr.length() - 1 - i).intValue(), arr.at(-(i + 1)).intValue());
    }
    }

    /**
     * Verify forEach at(index) value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_5400
     * @tc.name int32ArrayAtPart04TestMindmapTest054
     * @tc.desc Verify forEach at(index) value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest054() {
    Int32Array arr = new Int32Array(new int[] {5, 15, 25, 35});
    arr.forEach((value, index, a) -> {
    assertEqualInt(value, arr.at((int) (index)));
    });
    }

    /**
     * Verify map at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_5500
     * @tc.name int32ArrayAtPart04TestMindmapTest055
     * @tc.desc Verify map at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest055() {
    Int32Array src = new Int32Array(new int[] {1, 2, 3});
    Int32Array dst = src.map((v, unusedIndex, array) -> v * 10);
    assertEqualInt(10, dst.at(0));
    assertEqualInt(30, dst.at(-1));
    }

    /**
     * Verify at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_5700
     * @tc.name int32ArrayAtPart04TestMindmapTest057
     * @tc.desc Verify at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest057() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0});
    for (int i = 0; i < arr.length() - 1; i++) {
    arr.set(i + 1, i * 100);
    }
    assertEqualInt(200, arr.at(3));
    }

    /**
     * Verify indexOf at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_5800
     * @tc.name int32ArrayAtPart04TestMindmapTest058
     * @tc.desc Verify indexOf at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest058() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int idx = arr.indexOf(30);
    assertEqualInt(30, arr.at((int) (idx)));
    }

    /**
     * Verify lastIndexOf at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_5900
     * @tc.name int32ArrayAtPart04TestMindmapTest059
     * @tc.desc Verify lastIndexOf at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest059() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 20});
    int idx = arr.lastIndexOf(20);
    assertEqual(3, (int) (idx));
    assertEqualInt(20, arr.at((int) (idx)));
    }

    /**
     * Verify indexOf returns -1 for not found, then at(-1) returns last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_6100
     * @tc.name int32ArrayAtPart04TestMindmapTest061
     * @tc.desc Verify indexOf returns -1 for not found, then at(-1) returns last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest061() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(999);
    assertEqual(-1, idx);
    assertEqualInt(30, arr.at((int) (idx)));
    }

    /**
     * Verify includes true at(indexOf(v))
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_6200
     * @tc.name int32ArrayAtPart04TestMindmapTest062
     * @tc.desc Verify includes true at(indexOf(v))
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest062() {
    Int32Array arr = new Int32Array(new int[] {5, 15, 25});
    boolean found = arr.includes(15);
    assertTrue(found);
    assertEqualInt(15, arr.at(arr.indexOf(15)));
    }

    /**
     * Verify forEach at() finds max value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_6300
     * @tc.name int32ArrayAtPart04TestMindmapTest063
     * @tc.desc Verify forEach at() finds max value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest063() {
    Int32Array arr = new Int32Array(new int[] {3, 7, 2, 9, 4});
    int[] maxIdx = {0};
    arr.forEach((v, i, a) -> {
    if (v > arr.at((int) (maxIdx[0]))) {
    maxIdx[0] = i;
    }
    });
    assertEqualInt(9, arr.at((int) (maxIdx[0])));
    }

    /**
     * Verify every at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_6400
     * @tc.name int32ArrayAtPart04TestMindmapTest064
     * @tc.desc Verify every at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest064() {
    Int32Array arr = new Int32Array(new int[] {2, 4, 6});
    boolean allEven = arr.every((v) -> v % 2 == 0);
    assertTrue(allEven);
    assertEqualInt(2, arr.at(0));
    }

    /**
     * Verify some at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_6500
     * @tc.name int32ArrayAtPart04TestMindmapTest065
     * @tc.desc Verify some at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest065() {
    Int32Array arr = new Int32Array(new int[] {1, 3, 5, 6});
    boolean hasEven = arr.some((v) -> v % 2 == 0);
    assertTrue(hasEven);
    assertEqualInt(1, arr.at(0));
    }

    /**
     * Verify toString at()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_6600
     * @tc.name int32ArrayAtPart04TestMindmapTest066
     * @tc.desc Verify toString at()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest066() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    String s = String.valueOf(arr);
    assertEqual("1,2,3", s);
    assertEqualInt(1, arr.at(0));
    assertEqualInt(3, arr.at(-1));
    }

    /**
     * Verify join at(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_6700
     * @tc.name int32ArrayAtPart04TestMindmapTest067
     * @tc.desc Verify join at(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest067() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    String s = arr.join("-");
    assertEqual("10-20-30", s);
    assertEqualInt(20, arr.at(1));
    }

    /**
     * Verify subarray buffer length TypedArray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_6900
     * @tc.name int32ArrayAtPart04TestMindmapTest069
     * @tc.desc Verify subarray buffer length TypedArray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest069() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array child = parent.subarray(1, 3);
    assertEqual(2, child.length());
    parent.set(2, 55);
    assertEqualInt(55, child.at(1));
    }

    /**
     * Verify Int32Array.from(TypedArray) at(i)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_7100
     * @tc.name int32ArrayAtPart04TestMindmapTest071
     * @tc.desc Verify Int32Array.from(TypedArray) at(i)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest071() {
    Int32Array src = new Int32Array(new int[] {7, 8, 9});
    Int32Array dst = Int32Array.from(src);
    src.set(0, 999);
    assertEqualInt(7, dst.at(0));
    }

    /**
     * Verify subarray at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_7300
     * @tc.name int32ArrayAtPart04TestMindmapTest073
     * @tc.desc Verify subarray at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest073() {
    Int32Array parent = new Int32Array(new int[] {0, 10, 20, 30, 40, 50});
    Int32Array mid = parent.subarray(1, 5);
    Int32Array inner = mid.subarray(1, 3);
    assertEqualInt(20, inner.at(0));
    assertEqualInt(30, inner.at(-1));
    }

    /**
     * Verify forEach at() accumulates sum
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_7500
     * @tc.name int32ArrayAtPart04TestMindmapTest075
     * @tc.desc Verify forEach at() accumulates sum
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest075() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int[] idxSum = {0};
    arr.forEach((unusedVal, i, a) -> {
    idxSum[0] = idxSum[0] + (arr.at(i));
    });
    assertEqual(60, idxSum[0]);
    }

    /**
     * Verify at(i) at(i-length)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART04_TEST_MINDMAP_7600
     * @tc.name int32ArrayAtPart04TestMindmapTest076
     * @tc.desc Verify at(i) at(i-length)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayAtPart04TestMindmapTest076() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    for (int i = 0; i < arr.length(); i++) {
    Integer pos = arr.at(i);
    Integer neg = arr.at(i - arr.length());
    assertEqual(neg.intValue(), pos.intValue());
    }
    }
}
