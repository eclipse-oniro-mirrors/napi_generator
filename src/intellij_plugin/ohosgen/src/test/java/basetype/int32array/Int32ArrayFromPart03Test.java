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

import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFromPart03Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFromPart03Test extends BasTest {
    /**
     * Verify 1 Int32Array Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_0100
     * @tc.name int32ArrayFromPart03TestMindmapTest001
     * @tc.desc Verify 1 Int32Array Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest001() {
    Int32Array src = new Int32Array(3);
    Int32Array dst = Int32Array.from(src);
    assertEqual(3, dst.length());
    assertEqualInt(0, dst.get(0));
    }

    /**
     * Verify result properties when copying an empty Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_0200
     * @tc.name int32ArrayFromPart03TestMindmapTest002
     * @tc.desc Verify result properties when copying an empty Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest002() {
    Int32Array src = new Int32Array(0);
    Int32Array dst = Int32Array.from(src);
    assertEqual(0, dst.length());
    assertEqual(0, dst.byteLength());
    assertEqual(0, dst.byteOffset());
    }

    /**
     * Verify 1 Int32Array length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_0300
     * @tc.name int32ArrayFromPart03TestMindmapTest003
     * @tc.desc Verify 1 Int32Array length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest003() {
    Int32Array src = new Int32Array(1);
    Int32Array dst = Int32Array.from(src);
    assertEqual(1, dst.length());
    }

    /**
     * Verify 3 Int32Array length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_0400
     * @tc.name int32ArrayFromPart03TestMindmapTest004
     * @tc.desc Verify 3 Int32Array length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest004() {
    Int32Array src = new Int32Array(3);
    Int32Array dst = Int32Array.from(src);
    assertEqual(3, dst.length());
    }

    /**
     * Verify 64 length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_0500
     * @tc.name int32ArrayFromPart03TestMindmapTest005
     * @tc.desc Verify 64 length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest005() {
    Int32Array src = new Int32Array(64);
    Int32Array dst = Int32Array.from(src);
    assertEqual(64, dst.length());
    }

    /**
     * Verify begin >= end subarray length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_0600
     * @tc.name int32ArrayFromPart03TestMindmapTest006
     * @tc.desc Verify begin >= end subarray length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest006() {
    Int32Array base = Int32Array.of(1, 2, 3, 4);
    Int32Array src = base.subarray(3, 2);
    Int32Array dst = Int32Array.from(src);
    assertEqual(0, dst.length());
    }

    /**
     * Verify [0] 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_0700
     * @tc.name int32ArrayFromPart03TestMindmapTest007
     * @tc.desc Verify [0] 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest007() {
    Int32Array src = Int32Array.of(0);
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(0, dst.get(0));
    }

    /**
     * Verify [1] 0 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_0800
     * @tc.name int32ArrayFromPart03TestMindmapTest008
     * @tc.desc Verify [1] 0 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest008() {
    Int32Array src = Int32Array.of(1);
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(1, dst.get(0));
    }

    /**
     * Verify [2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_1000
     * @tc.name int32ArrayFromPart03TestMindmapTest010
     * @tc.desc Verify [2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest010() {
    Int32Array src = Int32Array.of(2);
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(2, dst.get(0));
    }

    /**
     * Verify [1, 2] 1, 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_1400
     * @tc.name int32ArrayFromPart03TestMindmapTest014
     * @tc.desc Verify [1, 2] 1, 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest014() {
    Int32Array src = Int32Array.of(1, 2);
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(1, dst.get(0));
    assertEqualInt(2, dst.get(1));
    }

    /**
     * Verify [10, 20, 30, 40]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_1700
     * @tc.name int32ArrayFromPart03TestMindmapTest017
     * @tc.desc Verify [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest017() {
    Int32Array src = Int32Array.of(10, 20, 30, 40);
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(10, dst.get(0));
    assertEqualInt(40, dst.get(3));
    }

    /**
     * Verify [40, 30, 20, 10]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_1800
     * @tc.name int32ArrayFromPart03TestMindmapTest018
     * @tc.desc Verify [40, 30, 20, 10]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest018() {
    Int32Array src = Int32Array.of(40, 30, 20, 10);
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(40, dst.get(0));
    assertEqualInt(10, dst.get(3));
    }

    /**
     * Verify 0 4 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_1900
     * @tc.name int32ArrayFromPart03TestMindmapTest019
     * @tc.desc Verify 0 4 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest019() {
    Int32Array src = new Int32Array(4);
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(0, dst.get(0));
    assertEqualInt(0, dst.get(1));
    assertEqualInt(0, dst.get(2));
    assertEqualInt(0, dst.get(3));
    }

    /**
     * Verify 64 i 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_2300
     * @tc.name int32ArrayFromPart03TestMindmapTest023
     * @tc.desc Verify 64 i 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest023() {
    Int32Array src = new Int32Array(64);
    for (int i = 0; i < 64; i++) {
    src.set(i, i);
    }
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(0, dst.get(0));
    }

    /**
     * Verify 64 i
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_2400
     * @tc.name int32ArrayFromPart03TestMindmapTest024
     * @tc.desc Verify 64 i
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest024() {
    Int32Array src = new Int32Array(64);
    for (int i = 0; i < 64; i++) {
    src.set(i, i);
    }
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(32, dst.get(32));
    }

    /**
     * Verify 64 i 63
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_2500
     * @tc.name int32ArrayFromPart03TestMindmapTest025
     * @tc.desc Verify 64 i 63
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest025() {
    Int32Array src = new Int32Array(64);
    for (int i = 0; i < 64; i++) {
    src.set(i, i);
    }
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(63, dst.get(63));
    }

    /**
     * Verify new Int32Array(length) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_2600
     * @tc.name int32ArrayFromPart03TestMindmapTest026
     * @tc.desc Verify new Int32Array(length) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest026() {
    Int32Array src = new Int32Array(3);
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(0, dst.get(0));
    assertEqualInt(0, dst.get(1));
    assertEqualInt(0, dst.get(2));
    }

    /**
     * Verify Int32Array.of(...)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_2700
     * @tc.name int32ArrayFromPart03TestMindmapTest027
     * @tc.desc Verify Int32Array.of(...)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest027() {
    Int32Array src = Int32Array.of(7, 8, 9);
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(7, dst.get(0));
    assertEqualInt(8, dst.get(1));
    assertEqualInt(9, dst.get(2));
    }

    /**
     * Verify new Int32Array(buffer, 0, length)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_2800
     * @tc.name int32ArrayFromPart03TestMindmapTest028
     * @tc.desc Verify new Int32Array(buffer, 0, length)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest028() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array src = new Int32Array(buf, 0, 3);
    src.set(0, 11);
    src.set(1, 22);
    src.set(2, 33);
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(11, dst.get(0));
    assertEqualInt(33, dst.get(2));
    }

    /**
     * Verify new Int32Array(buffer, 4, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_2900
     * @tc.name int32ArrayFromPart03TestMindmapTest029
     * @tc.desc Verify new Int32Array(buffer, 4, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest029() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array src = new Int32Array(buf, 4, 2);
    src.set(0, 100);
    src.set(1, 200);
    Int32Array dst = Int32Array.from(src);
    assertEqual(2, dst.length());
    assertEqualInt(100, dst.get(0));
    assertEqualInt(200, dst.get(1));
    }

    /**
     * Verify Int32Array.from of subarray preserves length and elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_3000
     * @tc.name int32ArrayFromPart03TestMindmapTest030
     * @tc.desc Verify Int32Array.from of subarray preserves length and elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest030() {
    Int32Array base = Int32Array.of(10, 20, 30, 40);
    Int32Array src = base.subarray(1, 3);
    Int32Array dst = Int32Array.from(src);
    assertEqual(2, dst.length());
    assertEqualInt(20, dst.get(0));
    assertEqualInt(30, dst.get(1));
    }

    /**
     * Verify subarray subarray(length-2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_3100
     * @tc.name int32ArrayFromPart03TestMindmapTest031
     * @tc.desc Verify subarray subarray(length-2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest031() {
    Int32Array base = Int32Array.of(1, 2, 3, 4, 5);
    Int32Array src = base.subarray(3);
    Int32Array dst = Int32Array.from(src);
    assertEqual(2, dst.length());
    assertEqualInt(4, dst.get(0));
    assertEqualInt(5, dst.get(1));
    }

    /**
     * Verify Int32Array.from of slice preserves elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_3200
     * @tc.name int32ArrayFromPart03TestMindmapTest032
     * @tc.desc Verify Int32Array.from of slice preserves elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest032() {
    Int32Array base = Int32Array.of(10, 20, 30, 40);
    Int32Array src = base.slice(1, 3);
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(20, dst.get(0));
    assertEqualInt(30, dst.get(1));
    }

    /**
     * Verify fill(7, 0, 4) 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_3300
     * @tc.name int32ArrayFromPart03TestMindmapTest033
     * @tc.desc Verify fill(7, 0, 4) 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest033() {
    Int32Array src = new Int32Array(4);
    src.fill(7, 0, 4);
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(7, dst.get(0));
    assertEqualInt(7, dst.get(3));
    }

    /**
     * Verify ArrayBuffer(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_3400
     * @tc.name int32ArrayFromPart03TestMindmapTest034
     * @tc.desc Verify ArrayBuffer(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest034() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int32Array src = new Int32Array(buf);
    src.set(0, 42);
    Int32Array dst = Int32Array.from(src);
    assertEqual(1, dst.length());
    assertEqualInt(42, dst.get(0));
    }

    /**
     * Verify ArrayBuffer(24) 6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_3500
     * @tc.name int32ArrayFromPart03TestMindmapTest035
     * @tc.desc Verify ArrayBuffer(24) 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest035() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array src = new Int32Array(buf, 0, 6);
    Int32Array dst = Int32Array.from(src);
    assertEqual(6, dst.length());
    assertEqual(24, dst.byteLength());
    }

    /**
     * Verify Int32Array.from of [1, 2, 3] preserves length and elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_3600
     * @tc.name int32ArrayFromPart03TestMindmapTest036
     * @tc.desc Verify Int32Array.from of [1, 2, 3] preserves length and elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest036() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = Int32Array.from(src);
    assertEqual(3, dst.length());
    assertEqualInt(1, dst.get(0));
    assertEqualInt(3, dst.get(2));
    }

    /**
     * Verify buffer ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_3700
     * @tc.name int32ArrayFromPart03TestMindmapTest037
     * @tc.desc Verify buffer ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest037() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = Int32Array.from(src);
    assertEqual(3, dst.length());
    assertEqual(12, dst.buffer().byteLength());
    }

    /**
     * Verify byteOffset 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_3800
     * @tc.name int32ArrayFromPart03TestMindmapTest038
     * @tc.desc Verify byteOffset 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest038() {
    Int32Array src = Int32Array.of(1, 2, 3, 4);
    Int32Array dst = Int32Array.from(src);
    assertEqual(0, dst.byteOffset());
    }

    /**
     * Verify subarray byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_3900
     * @tc.name int32ArrayFromPart03TestMindmapTest039
     * @tc.desc Verify subarray byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest039() {
    Int32Array base = new Int32Array(new ArrayBuffer(32), 0, 8);
    Int32Array src = base.subarray(2, 5);
    Int32Array dst = Int32Array.from(src);
    assertEqual(0, dst.byteOffset());
    }

    /**
     * Verify byteLength length * 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_4000
     * @tc.name int32ArrayFromPart03TestMindmapTest040
     * @tc.desc Verify byteLength length * 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest040() {
    Int32Array src = Int32Array.of(1, 2, 3, 4);
    Int32Array dst = Int32Array.from(src);
    assertEqual(16, dst.byteLength());
    }

    /**
     * Verify buffer.byteLength byteLength padding
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_4100
     * @tc.name int32ArrayFromPart03TestMindmapTest041
     * @tc.desc Verify buffer.byteLength byteLength padding
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest041() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = Int32Array.from(src);
    assertEqual(dst.byteLength(), dst.buffer().byteLength());
    }

    /**
     * Verify Int32Array.from of empty Int32Array throws RangeError on $_get(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_4200
     * @tc.name int32ArrayFromPart03TestMindmapTest042
     * @tc.desc Verify Int32Array.from of empty Int32Array throws RangeError on $_get(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest042() {
    Int32Array src = new Int32Array(0);
    Int32Array dst = Int32Array.from(src);
    assertEqual(0, dst.length());
    try {
    dst.get(0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteLength 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_4300
     * @tc.name int32ArrayFromPart03TestMindmapTest043
     * @tc.desc Verify byteLength 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest043() {
    Int32Array src = Int32Array.of(42);
    Int32Array dst = Int32Array.from(src);
    assertEqual(4, dst.byteLength());
    }

    /**
     * Verify element values via indexed loop
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_4400
     * @tc.name int32ArrayFromPart03TestMindmapTest044
     * @tc.desc Verify element values via indexed loop
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest044() {
    Int32Array src = Int32Array.of(5, 6, 7);
    Int32Array dst = Int32Array.from(src);
    List<Integer> expected = java.util.Arrays.asList(5, 6, 7);
    for (int i = 0; i < expected.size(); i++) {
    assertEqual(expected.get(i).intValue(), dst.get(i).intValue());
    }
    }

    /**
     * Verify empty iteration count
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_4600
     * @tc.name int32ArrayFromPart03TestMindmapTest046
     * @tc.desc Verify empty iteration count
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest046() {
    Int32Array src = new Int32Array(0);
    Int32Array dst = Int32Array.from(src);
    int count = 0;
    for (int idx = 0; idx < dst.length(); idx++) {
    count++;
    }
    assertEqual(0, count);
    }

    /**
     * Verify buffer buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_4700
     * @tc.name int32ArrayFromPart03TestMindmapTest047
     * @tc.desc Verify buffer buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest047() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = Int32Array.from(src);
    boolean isSameBuffer = src.buffer() == dst.buffer();
    assertFalse(isSameBuffer);
    }

    /**
     * Verify buffer buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_4800
     * @tc.name int32ArrayFromPart03TestMindmapTest048
     * @tc.desc Verify buffer buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest048() {
    Int32Array src = new Int32Array(0);
    Int32Array dst = Int32Array.from(src);
    boolean isSameBuffer = src.buffer() == dst.buffer();
    assertFalse(isSameBuffer);
    }

    /**
     * Verify 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_4900
     * @tc.name int32ArrayFromPart03TestMindmapTest049
     * @tc.desc Verify 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest049() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = Int32Array.from(src);
    src.set(0, 999);
    assertEqualInt(1, dst.get(0));
    }

    /**
     * Verify 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_5000
     * @tc.name int32ArrayFromPart03TestMindmapTest050
     * @tc.desc Verify 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest050() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = Int32Array.from(src);
    dst.set(0, 888);
    assertEqualInt(1, src.get(0));
    }

    /**
     * Verify source modification after from does not affect destination
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_5100
     * @tc.name int32ArrayFromPart03TestMindmapTest051
     * @tc.desc Verify source modification after from does not affect destination
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest051() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = Int32Array.from(src);
    src.set(2, 777);
    assertEqualInt(3, dst.get(2));
    }

    /**
     * Verify fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_5200
     * @tc.name int32ArrayFromPart03TestMindmapTest052
     * @tc.desc Verify fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest052() {
    Int32Array src = Int32Array.of(1, 2, 3, 4);
    Int32Array dst = Int32Array.from(src);
    src.fill(0, 0, 4);
    assertEqualInt(1, dst.get(0));
    assertEqualInt(4, dst.get(3));
    }

    /**
     * Verify reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_5300
     * @tc.name int32ArrayFromPart03TestMindmapTest053
     * @tc.desc Verify reverse
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest053() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = Int32Array.from(src);
    src.reverse();
    assertEqualInt(1, dst.get(0));
    assertEqualInt(3, dst.get(2));
    }

    /**
     * Verify reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_5400
     * @tc.name int32ArrayFromPart03TestMindmapTest054
     * @tc.desc Verify reverse
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest054() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = Int32Array.from(src);
    dst.reverse();
    assertEqualInt(1, src.get(0));
    assertEqualInt(3, src.get(2));
    }

    /**
     * Verify $_set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_5500
     * @tc.name int32ArrayFromPart03TestMindmapTest055
     * @tc.desc Verify $_set
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest055() {
    Int32Array src = Int32Array.of(10, 20, 30);
    Int32Array dst = Int32Array.from(src);
    src.set(0, 111);
    src.set(1, 222);
    src.set(2, 333);
    assertEqualInt(10, dst.get(0));
    assertEqualInt(20, dst.get(1));
    assertEqualInt(30, dst.get(2));
    }

    /**
     * Verify sibling buffer sibling
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_5600
     * @tc.name int32ArrayFromPart03TestMindmapTest056
     * @tc.desc Verify sibling buffer sibling
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest056() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array src = new Int32Array(buf, 0, 3);
    src.set(0, 1);
    src.set(1, 2);
    src.set(2, 3);
    Int32Array sibling = new Int32Array(buf, 0, 3);
    Int32Array dst = Int32Array.from(src);
    sibling.set(1, 999);
    assertEqualInt(2, dst.get(1));
    }

    /**
     * Verify from
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_5700
     * @tc.name int32ArrayFromPart03TestMindmapTest057
     * @tc.desc Verify from
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest057() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst1 = Int32Array.from(src);
    Int32Array dst2 = Int32Array.from(src);
    dst1.set(0, 111);
    assertEqualInt(1, dst2.get(0));
    }

    /**
     * Verify subarray byteOffset buffer buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_5900
     * @tc.name int32ArrayFromPart03TestMindmapTest059
     * @tc.desc Verify subarray byteOffset buffer buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest059() {
    Int32Array base = new Int32Array(new ArrayBuffer(32), 0, 8);
    Int32Array src = base.subarray(2, 5);
    Int32Array dst = Int32Array.from(src);
    boolean isSameBuffer = src.buffer() == dst.buffer();
    assertFalse(isSameBuffer);
    }

    /**
     * Verify subarray byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_6000
     * @tc.name int32ArrayFromPart03TestMindmapTest060
     * @tc.desc Verify subarray byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest060() {
    Int32Array base = new Int32Array(new ArrayBuffer(32), 0, 8);
    base.set(2, 100);
    base.set(3, 200);
    base.set(4, 300);
    Int32Array src = base.subarray(2, 5);
    Int32Array dst = Int32Array.from(src);
    base.set(3, 999);
    assertEqualInt(200, dst.get(1));
    }

    /**
     * Verify new Int32Array(buffer, 4, 2) buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_6100
     * @tc.name int32ArrayFromPart03TestMindmapTest061
     * @tc.desc Verify new Int32Array(buffer, 4, 2) buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest061() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array src = new Int32Array(buf, 4, 2);
    src.set(0, 10);
    src.set(1, 20);
    Int32Array dst = Int32Array.from(src);
    src.set(0, 999);
    assertEqualInt(10, dst.get(0));
    }

    /**
     * Verify Int32Array.from(Int32Array.from(x))
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_6200
     * @tc.name int32ArrayFromPart03TestMindmapTest062
     * @tc.desc Verify Int32Array.from(Int32Array.from(x))
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest062() {
    Int32Array src = Int32Array.of(5, 6, 7, 8);
    Int32Array dst = Int32Array.from(Int32Array.from(src));
    assertEqual(4, dst.length());
    assertEqualInt(5, dst.get(0));
    assertEqualInt(8, dst.get(3));
    }

    /**
     * Verify from buffer buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_6300
     * @tc.name int32ArrayFromPart03TestMindmapTest063
     * @tc.desc Verify from buffer buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest063() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = Int32Array.from(Int32Array.from(src));
    boolean isSameBuffer = src.buffer() == dst.buffer();
    assertFalse(isSameBuffer);
    }

    /**
     * Verify Int32Array.from of single-element Int32Array preserves value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_7000
     * @tc.name int32ArrayFromPart03TestMindmapTest070
     * @tc.desc Verify Int32Array.from of single-element Int32Array preserves value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest070() {
    Int32Array src = Int32Array.of(42);
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(42, dst.get(0));
    }

    /**
     * Verify Int32Array.from of 3-element Int32Array preserves length and last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_7100
     * @tc.name int32ArrayFromPart03TestMindmapTest071
     * @tc.desc Verify Int32Array.from of 3-element Int32Array preserves length and last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest071() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = Int32Array.from(src);
    assertEqual(3, dst.length());
    assertEqualInt(3, dst.get(2));
    }

    /**
     * Verify length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_7200
     * @tc.name int32ArrayFromPart03TestMindmapTest072
     * @tc.desc Verify length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest072() {
    Int32Array src = Int32Array.of(10, 20, 30, 40);
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(40, dst.get(dst.length() - 1));
    }

    /**
     * Verify sort
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_7300
     * @tc.name int32ArrayFromPart03TestMindmapTest073
     * @tc.desc Verify sort
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest073() {
    Int32Array src = Int32Array.of(3, 1, 2);
    src.sort();
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(1, dst.get(0));
    assertEqualInt(2, dst.get(1));
    assertEqualInt(3, dst.get(2));
    }

    /**
     * Verify copyWithin from
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_7400
     * @tc.name int32ArrayFromPart03TestMindmapTest074
     * @tc.desc Verify copyWithin from
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest074() {
    Int32Array src = Int32Array.of(1, 2, 3, 4);
    src.copyWithin(2, 0, 2);
    Int32Array dst = Int32Array.from(src);
    assertEqualInt(1, dst.get(0));
    assertEqualInt(1, dst.get(2));
    assertEqualInt(2, dst.get(3));
    }

    /**
     * Verify Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_7500
     * @tc.name int32ArrayFromPart03TestMindmapTest075
     * @tc.desc Verify Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest075() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = Int32Array.from(src);
    boolean isSameRef = src == dst;
    assertFalse(isSameRef);
    }

    /**
     * Verify Int32Array.from of empty Int32Array returns a new distinct Object
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART03_TEST_MINDMAP_7600
     * @tc.name int32ArrayFromPart03TestMindmapTest076
     * @tc.desc Verify Int32Array.from of empty Int32Array returns a new distinct Object
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart03TestMindmapTest076() {
    Int32Array src = new Int32Array(0);
    Int32Array dst = Int32Array.from(src);
    boolean isSameRef = src == dst;
    assertFalse(isSameRef);
    }
}
