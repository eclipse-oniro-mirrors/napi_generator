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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayCopyWithinPart02Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayCopyWithinPart02Test extends BasTest {
    /**
     * Verify copyWithin return value is Int32Array instance with 2 args
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0010
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest001
     * @tc.desc Verify copyWithin return value is Int32Array instance with 2 args
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest001() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Object r = arr.copyWithin(0, 1);
    assertTrue(BasTest.instanceOf(r, Int32Array.class));
    }

    /**
     * Verify copyWithin return value is Int32Array instance with 3 args
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0020
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest002
     * @tc.desc Verify copyWithin return value is Int32Array instance with 3 args
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest002() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40);
    Object r = arr.copyWithin(2, 0, 2);
    assertTrue(BasTest.instanceOf(r, Int32Array.class));
    }

    /**
     * Verify copyWithin self-copy (0, 0) returns same array reference (no-op)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0030
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest003
     * @tc.desc Verify copyWithin self-copy (0, 0) returns same array reference (no-op)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest003() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array r = arr.copyWithin(0, 0);
    assertEqual(arr, r);
    }

    /**
     * Verify empty Int32Array copyWithin still returns Int32Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0050
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest005
     * @tc.desc Verify empty Int32Array copyWithin still returns Int32Array instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest005() {
    Int32Array arr = new Int32Array(0);
    Object r = arr.copyWithin(0, 0);
    assertTrue(BasTest.instanceOf(r, Int32Array.class));
    }

    /**
     * Verify negative index copyWithin still returns Int32Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0060
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest006
     * @tc.desc Verify negative index copyWithin still returns Int32Array instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest006() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    Object r = arr.copyWithin(-2, 0);
    assertTrue(BasTest.instanceOf(r, Int32Array.class));
    }

    /**
     * Verify single element array copyWithin returns Int32Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0070
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest007
     * @tc.desc Verify single element array copyWithin returns Int32Array instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest007() {
    Int32Array arr = Int32Array.of(42);
    Object r = arr.copyWithin(0, 0);
    assertTrue(BasTest.instanceOf(r, Int32Array.class));
    }

    /**
     * Verify copyWithin on non-zero byteOffset view returns Int32Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0080
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest008
     * @tc.desc Verify copyWithin on non-zero byteOffset view returns Int32Array instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest008() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Int32Array view = new Int32Array(buf, 8, 4);
    view.set(0, 11);
    view.set(1, 22);
    view.set(2, 33);
    view.set(3, 44);
    Object r = view.copyWithin(2, 0);
    assertTrue(BasTest.instanceOf(r, Int32Array.class));
    }

    /**
     * Verify ArrayBuffer.isView returns true for copyWithin returned Object
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0090
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest009
     * @tc.desc Verify ArrayBuffer.isView returns true for copyWithin returned Object
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest009() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array r = arr.copyWithin(0, 1);
    assertTrue(ArrayBuffer.isView(r));
    }

    /**
     * Verify copyWithin returned Object BYTES_PER_ELEMENT is still 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0100
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest010
     * @tc.desc Verify copyWithin returned Object BYTES_PER_ELEMENT is still 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest010() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array r = arr.copyWithin(0, 1);
    assertEqual(4, r.BYTES_PER_ELEMENT);
    }

    /**
     * Verify 2-arg copyWithin returns same reference as original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0110
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest011
     * @tc.desc Verify 2-arg copyWithin returns same reference as original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest011() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array r = arr.copyWithin(0, 1);
    assertEqual(arr, r);
    }

    /**
     * Verify 3-arg copyWithin returns same reference as original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0120
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest012
     * @tc.desc Verify 3-arg copyWithin returns same reference as original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest012() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    Int32Array r = arr.copyWithin(2, 0, 3);
    assertEqual(arr, r);
    }

    /**
     * Verify omitting end copies to end and returns same reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0130
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest013
     * @tc.desc Verify omitting end copies to end and returns same reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest013() {
    Int32Array arr = Int32Array.of(5, 6, 7, 8);
    Int32Array r = arr.copyWithin(1, 2);
    assertEqual(arr, r);
    }

    /**
     * Verify empty array copyWithin returns same empty array reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0140
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest014
     * @tc.desc Verify empty array copyWithin returns same empty array reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest014() {
    Int32Array arr = new Int32Array(0);
    Int32Array r = arr.copyWithin(0, 0);
    assertEqual(arr, r);
    }

    /**
     * Verify negative target call returns same reference as original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0150
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest015
     * @tc.desc Verify negative target call returns same reference as original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest015() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5, 6);
    Int32Array r = arr.copyWithin(-3, 0);
    assertEqual(arr, r);
    }

    /**
     * Verify no-op when start greater than or equal to end returns same array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0160
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest016
     * @tc.desc Verify no-op when start greater than or equal to end returns same array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest016() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array r = arr.copyWithin(0, 3, 2);
    assertEqual(arr, r);
    }

    /**
     * Verify out-of-bounds target clamp still returns same array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0170
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest017
     * @tc.desc Verify out-of-bounds target clamp still returns same array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest017() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array r = arr.copyWithin(99, 0);
    assertEqual(arr, r);
    }

    /**
     * Verify subarray copyWithin returns same subarray reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0180
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest018
     * @tc.desc Verify subarray copyWithin returns same subarray reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest018() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    Int32Array sub = arr.subarray(1, 4);
    Int32Array r = sub.copyWithin(1, 0, 3);
    assertEqual(sub, r);
    }

    /**
     * Verify forward copy does not change length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0190
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest019
     * @tc.desc Verify forward copy does not change length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest019() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40, 50);
    int before = arr.length();
    arr.copyWithin(0, 2);
    assertEqual(before, arr.length());
    assertEqual(5, arr.length());
    }

    /**
     * Verify backward overlapping copy does not change length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0200
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest020
     * @tc.desc Verify backward overlapping copy does not change length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest020() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(0, 1);
    assertEqual(5, arr.length());
    }

    /**
     * Verify target out of bounds clamp leaves length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0210
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest021
     * @tc.desc Verify target out of bounds clamp leaves length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest021() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    arr.copyWithin(-100, 0, 2);
    assertEqual(4, arr.length());
    }

    /**
     * Verify copyWithin does not change byteLength with default offset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0220
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest022
     * @tc.desc Verify copyWithin does not change byteLength with default offset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest022() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5, 6);
    int beforeBl = arr.byteLength();
    arr.copyWithin(1, 3);
    assertEqual(beforeBl, arr.byteLength());
    assertEqual(24, arr.byteLength());
    }

    /**
     * Verify copyWithin does not change byteOffset with default offset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0230
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest023
     * @tc.desc Verify copyWithin does not change byteOffset with default offset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest023() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array arr = new Int32Array(buf, 0, 6);
    int beforeOff = arr.byteOffset();
    arr.copyWithin(2, 0, 3);
    assertEqual(beforeOff, arr.byteOffset());
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify copyWithin on non-zero byteOffset view leaves byteOffset unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0240
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest024
     * @tc.desc Verify copyWithin on non-zero byteOffset view leaves byteOffset unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest024() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Int32Array arr = new Int32Array(buf, 8, 4);
    int beforeOff = arr.byteOffset();
    arr.copyWithin(0, 1);
    assertEqual(beforeOff, arr.byteOffset());
    assertEqual(8, arr.byteOffset());
    }

    /**
     * Verify byteOffset 4 view after copyWithin still has byteOffset 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0250
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest025
     * @tc.desc Verify byteOffset 4 view after copyWithin still has byteOffset 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest025() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array view = new Int32Array(buf, 4, 4);
    view.set(0, 1);
    view.set(1, 2);
    view.set(2, 3);
    view.set(3, 4);
    view.copyWithin(2, 0, 2);
    assertEqual(4, view.byteOffset());
    assertEqual(16, view.byteLength());
    assertEqual(4, view.length());
    }

    /**
     * Verify zero-length subarray copyWithin leaves byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0260
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest026
     * @tc.desc Verify zero-length subarray copyWithin leaves byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest026() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array sub = arr.subarray(3, 3);
    sub.copyWithin(0, 0);
    assertEqual(0, sub.length());
    assertEqual(0, sub.byteLength());
    }

    /**
     * Verify single element array after copyWithin has length 1 byteLength 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0270
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest027
     * @tc.desc Verify single element array after copyWithin has length 1 byteLength 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest027() {
    Int32Array arr = Int32Array.of(42);
    arr.copyWithin(0, 0);
    assertEqual(1, arr.length());
    assertEqual(4, arr.byteLength());
    }

    /**
     * Verify empty array after copyWithin has length 0 byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0280
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest028
     * @tc.desc Verify empty array after copyWithin has length 0 byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest028() {
    Int32Array arr = new Int32Array(0);
    arr.copyWithin(0, 0);
    assertEqual(0, arr.length());
    assertEqual(0, arr.byteLength());
    }

    /**
     * Verify returned value length equals original array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0290
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest029
     * @tc.desc Verify returned value length equals original array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest029() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    Int32Array r = arr.copyWithin(0, 2);
    assertEqual(arr.length(), r.length());
    }

    /**
     * Verify returned value byteLength equals original array byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0300
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest030
     * @tc.desc Verify returned value byteLength equals original array byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest030() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array r = arr.copyWithin(1, 0);
    assertEqual(arr.byteLength(), r.byteLength());
    }

    /**
     * Verify returned value byteOffset equals original view byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0310
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest031
     * @tc.desc Verify returned value byteOffset equals original view byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest031() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Int32Array view = new Int32Array(buf, 12, 3);
    Int32Array r = view.copyWithin(1, 0);
    assertEqual(view.byteOffset(), r.byteOffset());
    }

    /**
     * Verify buffer property is still same ArrayBuffer instance after copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0320
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest032
     * @tc.desc Verify buffer property is still same ArrayBuffer instance after copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest032() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    ArrayBuffer buf = arr.buffer();
    arr.copyWithin(0, 2);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify buffer.byteLength unchanged after copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0330
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest033
     * @tc.desc Verify buffer.byteLength unchanged after copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest033() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    int bufSize = arr.buffer().byteLength();
    arr.copyWithin(0, 2);
    assertEqual(bufSize, arr.buffer().byteLength());
    assertEqual(16, arr.buffer().byteLength());
    }

    /**
     * Verify copyWithin chainable with reverse producing combined semantics
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0340
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest034
     * @tc.desc Verify copyWithin chainable with reverse producing combined semantics
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest034() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    arr.copyWithin(0, 2).reverse();
    assertEqualInt(4, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(4, arr.get(2));
    assertEqualInt(3, arr.get(3));
    }

    /**
     * Verify copyWithin chainable with fill covering specified region
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0350
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest035
     * @tc.desc Verify copyWithin chainable with fill covering specified region
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest035() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(2, 0, 2).fill(0, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify copyWithin chainable with sort acting on same array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0360
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest036
     * @tc.desc Verify copyWithin chainable with sort acting on same array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest036() {
    Int32Array arr = Int32Array.of(3, 1, 4, 2);
    arr.copyWithin(0, 2).sort();
    assertEqualInt(2, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(4, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify two consecutive copyWithin chain calls produce correct sequence
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0370
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest037
     * @tc.desc Verify two consecutive copyWithin chain calls produce correct sequence
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest037() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40);
    arr.copyWithin(2, 0, 2).copyWithin(0, 2, 4);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(10, arr.get(2));
    assertEqualInt(20, arr.get(3));
    }

    /**
     * Verify copyWithin chainable with set for single element write
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0380
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest038
     * @tc.desc Verify copyWithin chainable with set for single element write
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest038() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    Int32Array src = Int32Array.of(99);
    arr.copyWithin(0, 2, 3).set(src, 4);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(99, arr.get(4));
    }

    /**
     * Verify copyWithin chain tail subarray returns view sharing original buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0390
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest039
     * @tc.desc Verify copyWithin chain tail subarray returns view sharing original buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest039() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array sub = arr.copyWithin(0, 2).subarray(0, 2);
    assertEqualInt(3, sub.get(0));
    assertEqualInt(4, sub.get(1));
    assertEqual(arr.buffer(), sub.buffer());
    }

    /**
     * Verify copyWithin chainable with forEach observing modified values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0400
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest040
     * @tc.desc Verify copyWithin chainable with forEach observing modified values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest040() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    List<Integer> seen = new ArrayList<>();
    arr.copyWithin(1, 0, 2).forEach((v) -> {
        seen.add(v);
    });
    assertEqual(5, seen.size());
    assertEqualInt(1, seen.get(0));
    assertEqualInt(1, seen.get(1));
    assertEqualInt(2, seen.get(2));
    }

    /**
     * Verify chained $_set modifies values reflecting back to original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0410
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest041
     * @tc.desc Verify chained $_set modifies values reflecting back to original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest041() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array r = arr.copyWithin(0, 2);
    r.set(0, 77);
    assertEqualInt(77, arr.get(0));
    }

    /**
     * Verify copyWithin chain join string reflects copied content
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0420
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest042
     * @tc.desc Verify copyWithin chain join string reflects copied content
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest042() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    String s = arr.copyWithin(0, 2).join(",");
    assertEqual("3,4,3,4", s);
    }

    /**
     * Verify copyWithin modifications visible to other Int32Array views on same buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0440
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest044
     * @tc.desc Verify copyWithin modifications visible to other Int32Array views on same buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest044() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf);
    Int32Array b = new Int32Array(buf);
    a.set(0, 11);
    a.set(1, 22);
    a.set(2, 33);
    a.set(3, 44);
    a.copyWithin(2, 0, 2);
    assertEqualInt(11, b.get(2));
    assertEqualInt(22, b.get(3));
    }

    /**
     * Verify copyWithin does not create new buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0450
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest045
     * @tc.desc Verify copyWithin does not create new buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest045() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array r = arr.copyWithin(1, 0);
    assertEqual(arr.buffer(), r.buffer());
    }

    /**
     * Verify subarray derived view copyWithin changes reflect in original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0470
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest047
     * @tc.desc Verify subarray derived view copyWithin changes reflect in original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest047() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40, 50, 60);
    Int32Array sub = arr.subarray(1, 5);
    sub.copyWithin(0, 2);
    assertEqualInt(40, arr.get(1));
    assertEqualInt(50, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    /**
     * Verify zero-length subarray copyWithin does not throw or affect data
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0490
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest049
     * @tc.desc Verify zero-length subarray copyWithin does not throw or affect data
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest049() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array sub = arr.subarray(4, 4);
    sub.copyWithin(0, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify two overlapping subarray views sync updated after parent copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0500
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest050
     * @tc.desc Verify two overlapping subarray views sync updated after parent copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest050() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5, 6);
    arr.subarray(0, 4);
    Int32Array s2 = arr.subarray(2, 6);
    arr.copyWithin(2, 0, 2);
    assertEqualInt(1, s2.get(0));
    assertEqualInt(2, s2.get(1));
    }

    /**
     * Verify offset child view reads copied data after parent copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0510
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest051
     * @tc.desc Verify offset child view reads copied data after parent copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest051() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int32Array parent = new Int32Array(buf);
    Int32Array child = new Int32Array(buf, 8, 3);
    for (int i = 0; i < 5; i++) {
    parent.set(i, (i + 1) * 10);
    }
    parent.copyWithin(2, 0, 2);
    assertEqualInt(10, child.get(0));
    }

    /**
     * Verify copyWithin(2, 0) copies first two elements to positions 2 and 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0520
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest052
     * @tc.desc Verify copyWithin(2, 0) copies first two elements to positions 2 and 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest052() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    arr.copyWithin(2, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify copyWithin(0, length-1) copies last element to start
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0530
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest053
     * @tc.desc Verify copyWithin(0, length-1) copies last element to start
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest053() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40, 50);
    arr.copyWithin(0, 4);
    assertEqualInt(50, arr.get(0));
    assertEqualInt(20, arr.get(1));
    }

    /**
     * Verify single element array copyWithin(0, 0, 1) preserves value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0540
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest054
     * @tc.desc Verify single element array copyWithin(0, 0, 1) preserves value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest054() {
    Int32Array arr = Int32Array.of(42);
    arr.copyWithin(0, 0, 1);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify copyWithin(length-1, 0, 1) copies first element to end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0550
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest055
     * @tc.desc Verify copyWithin(length-1, 0, 1) copies first element to end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest055() {
    Int32Array arr = Int32Array.of(7, 8, 9, 10);
    arr.copyWithin(3, 0, 1);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify end equals start empty interval no-op leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0560
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest056
     * @tc.desc Verify end equals start empty interval no-op leaves array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest056() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(0, 2, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify end less than start reverse interval no-op leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0570
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest057
     * @tc.desc Verify end less than start reverse interval no-op leaves array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest057() {
    Int32Array arr = Int32Array.of(11, 22, 33);
    arr.copyWithin(0, 2, 0);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(33, arr.get(2));
    }

    /**
     * Verify backward overlap copyWithin uses memmove semantics
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0580
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest058
     * @tc.desc Verify backward overlap copyWithin uses memmove semantics
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest058() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(1, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(1));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(3, arr.get(3));
    assertEqualInt(4, arr.get(4));
    }

    /**
     * Verify forward overlap copyWithin uses memmove semantics
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0590
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest059
     * @tc.desc Verify forward overlap copyWithin uses memmove semantics
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest059() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(0, 1);
    assertEqualInt(2, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(4, arr.get(2));
    assertEqualInt(5, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify all-same elements array copyWithin leaves all elements equal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0600
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest060
     * @tc.desc Verify all-same elements array copyWithin leaves all elements equal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest060() {
    Int32Array arr = Int32Array.of(7, 7, 7, 7);
    arr.copyWithin(1, 0);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify copyWithin(0, 0) self-copy preserves original content
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0610
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest061
     * @tc.desc Verify copyWithin(0, 0) self-copy preserves original content
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest061() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(0, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify zero value propagates correctly via copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0650
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest065
     * @tc.desc Verify zero value propagates correctly via copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest065() {
    Int32Array arr = Int32Array.of(0, 1, 2, 3);
    arr.copyWithin(1, 0, 1);
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify fractional 3 ToInt32 truncates to 3 after copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0670
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest067
     * @tc.desc Verify fractional 3 ToInt32 truncates to 3 after copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest067() {
    Int32Array arr = new Int32Array(3);
    arr.set(0, 3);
    arr.set(1, 0);
    arr.set(2, 0);
    arr.copyWithin(2, 0, 1);
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify 4294967296 ToInt32 wraps to 0 after copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0700
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest070
     * @tc.desc Verify 4294967296 ToInt32 wraps to 0 after copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest070() {
    Int32Array arr = new Int32Array(3);
    arr.set(0, 4294967296L);
    arr.set(1, 1);
    arr.set(2, 1);
    arr.copyWithin(1, 0, 1);
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify from(0) ToInt32 is 0 preserved after copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0720
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest072
     * @tc.desc Verify from(0) ToInt32 is 0 preserved after copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest072() {
    Int32Array src = new Int32Array(2);
    src.set(0, 0);
    src.set(1, 7);
    src.copyWithin(1, 0);
    assertEqualInt(0, src.get(1));
    }

    /**
     * Verify from(-0) ToInt32 is 0 preserved after copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0730
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest073
     * @tc.desc Verify from(-0) ToInt32 is 0 preserved after copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest073() {
    Int32Array src = new Int32Array(2);
    src.set(0, -0);
    src.set(1, 5);
    src.copyWithin(1, 0);
    assertEqualInt(0, src.get(1));
    }

    /**
     * Verify from(NaN) ToInt32 is 0 preserved in batch via copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0760
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest076
     * @tc.desc Verify from(NaN) ToInt32 is 0 preserved in batch via copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest076() {
    Int32Array src = Int32Array.from(new double[] {Double.NaN, Double.NaN, Double.NaN, Double.NaN});
    src.copyWithin(2, 0, 2);
    assertEqualInt(0, src.get(2));
    assertEqualInt(0, src.get(3));
    }

    /**
     * Verify -0 and +0 both treated as 0 after copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0770
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest077
     * @tc.desc Verify -0 and +0 both treated as 0 after copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest077() {
    Int32Array arr = Int32Array.of(0, -0);
    arr.copyWithin(0, 1);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify target beyond length fully out-of-bounds copyWithin leaves elements unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0780
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest078
     * @tc.desc Verify target beyond length fully out-of-bounds copyWithin leaves elements unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest078() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    arr.copyWithin(10, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify start beyond length empty source range leaves elements unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0790
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest079
     * @tc.desc Verify start beyond length empty source range leaves elements unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest079() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    arr.copyWithin(0, 10);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end equals 0 explicit empty range copyWithin leaves elements unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0800
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest080
     * @tc.desc Verify end equals 0 explicit empty range copyWithin leaves elements unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest080() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    arr.copyWithin(0, 0, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify start equals end after clamp empty range copyWithin leaves elements unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0810
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest081
     * @tc.desc Verify start equals end after clamp empty range copyWithin leaves elements unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest081() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    arr.copyWithin(0, 5, 10);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify length 2 array copyWithin(0, 1, 2) copies one element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0820
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest082
     * @tc.desc Verify length 2 array copyWithin(0, 1, 2) copies one element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest082() {
    Int32Array arr = Int32Array.of(8, 9);
    arr.copyWithin(0, 1, 2);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(9, arr.get(1));
    }

    /**
     * Verify target=-1 normalizes to length-1 copying to end and returns this
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0830
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest083
     * @tc.desc Verify target=-1 normalizes to length-1 copying to end and returns this
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest083() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array r = arr.copyWithin(-1, 0, 1);
    assertEqual(arr, r);
    assertEqualInt(1, arr.get(3));
    assertEqual(4, arr.length());
    }

    /**
     * Verify start=-2 copies from second-to-last element onward
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_0840
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest084
     * @tc.desc Verify start=-2 copies from second-to-last element onward
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart02TestMindmapTest084() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(0, -2);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    }

    /**
     * Verify length 512 array copyWithin preserves length and byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART02_TEST_MINDMAP_1000
     * @tc.name int32ArrayCopyWithinPart02TestMindmapTest100
     * @tc.desc Verify length 512 array copyWithin preserves length and byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
