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
import basetype.common.IteratorResult;
import basetype.common.RangeError;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayConstructorPart07Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayConstructorPart07Test extends BasTest {
    /**
     * Verify Array<int> arity=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0010
     * @tc.name int32ArrayConstructorPart07TestMindmapTest001
     * @tc.desc Verify Array<int> arity=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest001() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int32Array arr = new Int32Array(src);
    assertEqual(3, arr.length());
    }

    /**
     * Verify length and byteLength for empty Array<int> construction
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0020
     * @tc.name int32ArrayConstructorPart07TestMindmapTest002
     * @tc.desc Verify length and byteLength for empty Array<int> construction
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest002() {
    List<Integer> src = new ArrayList<>();
    Int32Array arr = new Int32Array(src);
    assertEqual(0, arr.length());
    assertEqual(0, arr.byteLength());
    }

    /**
     * Verify Array<int> length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0030
     * @tc.name int32ArrayConstructorPart07TestMindmapTest003
     * @tc.desc Verify Array<int> length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest003() {
    List<Integer> src = java.util.Arrays.asList(42);
    Int32Array arr = new Int32Array(src);
    assertEqual(1, arr.length());
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify 0 Array<int> 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0070
     * @tc.name int32ArrayConstructorPart07TestMindmapTest007
     * @tc.desc Verify 0 Array<int> 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest007() {
    List<Integer> src = java.util.Arrays.asList(0, 0, 0, 0);
    Int32Array arr = new Int32Array(src);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify [1] 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0110
     * @tc.name int32ArrayConstructorPart07TestMindmapTest011
     * @tc.desc Verify [1] 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest011() {
    List<Integer> src = java.util.Arrays.asList(1);
    Int32Array arr = new Int32Array(src);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify Array<int> ToInt32 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0210
     * @tc.name int32ArrayConstructorPart07TestMindmapTest021
     * @tc.desc Verify Array<int> ToInt32 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest021() {
    List<Integer> src = java.util.Arrays.asList(100);
    Int32Array arr = new Int32Array(src);
    assertEqualInt(100, arr.get(0));
    }

    /**
     * Verify Array<int> 0 0 -0 +0 int
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0220
     * @tc.name int32ArrayConstructorPart07TestMindmapTest022
     * @tc.desc Verify Array<int> 0 0 -0 +0 int
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest022() {
    List<Integer> src = java.util.Arrays.asList(0);
    Int32Array arr = new Int32Array(src);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0230
     * @tc.name int32ArrayConstructorPart07TestMindmapTest023
     * @tc.desc Verify
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest023() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30, 40, 50);
    Int32Array arr = new Int32Array(src);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    /**
     * Verify
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0240
     * @tc.name int32ArrayConstructorPart07TestMindmapTest024
     * @tc.desc Verify
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest024() {
    List<Integer> src = java.util.Arrays.asList(50, 40, 30, 20, 10);
    Int32Array arr = new Int32Array(src);
    assertEqualInt(50, arr.get(0));
    assertEqualInt(40, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(20, arr.get(3));
    assertEqualInt(10, arr.get(4));
    }

    /**
     * Verify Array<int>
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0250
     * @tc.name int32ArrayConstructorPart07TestMindmapTest025
     * @tc.desc Verify Array<int>
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest025() {
    List<Integer> src = java.util.Arrays.asList(7, 7, 7, 7, 7);
    Int32Array arr = new Int32Array(src);
    for (int i = 0; i < 5; i++) {
    assertEqualInt(7, arr.get(i));
    }
    }

    /**
     * Verify push Array<int> push
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0270
     * @tc.name int32ArrayConstructorPart07TestMindmapTest027
     * @tc.desc Verify push Array<int> push
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest027() {
    List<Integer> src = new ArrayList<>();
    src.add(10);
    src.add(20);
    src.add(30);
    Int32Array arr = new Int32Array(src);
    assertEqual(3, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify instanceof Int32Array true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0300
     * @tc.name int32ArrayConstructorPart07TestMindmapTest030
     * @tc.desc Verify instanceof Int32Array true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest030() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int32Array arr = new Int32Array(src);
    boolean isInst = (arr) instanceof Int32Array;
    assertTrue(isInst);
    }

    /**
     * Verify Array<int> Int32Array length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0320
     * @tc.name int32ArrayConstructorPart07TestMindmapTest032
     * @tc.desc Verify Array<int> Int32Array length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest032() {
    List<Integer> src = java.util.Arrays.asList(0);
    Int32Array arr = new Int32Array(src);
    assertEqual(1, arr.length());
    }

    /**
     * Verify Array<int> Int32Array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0330
     * @tc.name int32ArrayConstructorPart07TestMindmapTest033
     * @tc.desc Verify Array<int> Int32Array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest033() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3, 4, 5, 6);
    Int32Array arr = new Int32Array(src);
    assertEqual(6, arr.length());
    }

    /**
     * Verify BYTES_PER_ELEMENT 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0340
     * @tc.name int32ArrayConstructorPart07TestMindmapTest034
     * @tc.desc Verify BYTES_PER_ELEMENT 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest034() {
    List<Integer> src = java.util.Arrays.asList(0);
    Int32Array arr = new Int32Array(src);
    assertEqual(4, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify Array<int> Int32Array byteLength 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0350
     * @tc.name int32ArrayConstructorPart07TestMindmapTest035
     * @tc.desc Verify Array<int> Int32Array byteLength 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest035() {
    List<Integer> src = java.util.Arrays.asList(1);
    Int32Array arr = new Int32Array(src);
    assertEqual(4, arr.byteLength());
    }

    /**
     * Verify Array<int> Int32Array byteLength length*4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0360
     * @tc.name int32ArrayConstructorPart07TestMindmapTest036
     * @tc.desc Verify Array<int> Int32Array byteLength length*4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest036() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3, 4, 5);
    Int32Array arr = new Int32Array(src);
    assertEqual(20, arr.byteLength());
    }

    /**
     * Verify byteOffset 0 buffer 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0370
     * @tc.name int32ArrayConstructorPart07TestMindmapTest037
     * @tc.desc Verify byteOffset 0 buffer 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest037() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int32Array arr = new Int32Array(src);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify buffer ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0380
     * @tc.name int32ArrayConstructorPart07TestMindmapTest038
     * @tc.desc Verify buffer ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest038() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int32Array arr = new Int32Array(src);
    boolean isBuf = (arr.buffer()) instanceof ArrayBuffer;
    assertTrue(isBuf);
    }

    /**
     * Verify buffer.byteLength arr.byteLength length*4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0390
     * @tc.name int32ArrayConstructorPart07TestMindmapTest039
     * @tc.desc Verify buffer.byteLength arr.byteLength length*4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest039() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3, 4);
    Int32Array arr = new Int32Array(src);
    assertEqual(arr.byteLength(), arr.buffer().byteLength());
    assertEqual(16, arr.buffer().byteLength());
    }

    /**
     * Verify buffer.byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0400
     * @tc.name int32ArrayConstructorPart07TestMindmapTest040
     * @tc.desc Verify buffer.byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest040() {
    List<Integer> src = new ArrayList<>();
    Int32Array arr = new Int32Array(src);
    assertEqual(0, arr.buffer().byteLength());
    }

    /**
     * Verify Array<int> Int32Array buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0410
     * @tc.name int32ArrayConstructorPart07TestMindmapTest041
     * @tc.desc Verify Array<int> Int32Array buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest041() {
    List<Integer> src1 = java.util.Arrays.asList(1, 2, 3);
    List<Integer> src2 = java.util.Arrays.asList(4, 5, 6);
    Int32Array a1 = new Int32Array(src1);
    Int32Array a2 = new Int32Array(src2);
    boolean sameBuf = a1.buffer() == a2.buffer();
    assertFalse(sameBuf);
    }

    /**
     * Verify $_get(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0420
     * @tc.name int32ArrayConstructorPart07TestMindmapTest042
     * @tc.desc Verify $_get(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest042() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int32Array arr = new Int32Array(src);
    assertEqualInt(10, arr.get(0));
    }

    /**
     * Verify $_get(length-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0430
     * @tc.name int32ArrayConstructorPart07TestMindmapTest043
     * @tc.desc Verify $_get(length-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest043() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int32Array arr = new Int32Array(src);
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify []
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0440
     * @tc.name int32ArrayConstructorPart07TestMindmapTest044
     * @tc.desc Verify []
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest044() {
    List<Integer> src = java.util.Arrays.asList(11, 22);
    Int32Array arr = new Int32Array(src);
    assertEqualInt(11, arr.get(0));
    }

    /**
     * Verify []
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0450
     * @tc.name int32ArrayConstructorPart07TestMindmapTest045
     * @tc.desc Verify []
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest045() {
    List<Integer> src = java.util.Arrays.asList(11, 22);
    Int32Array arr = new Int32Array(src);
    assertEqualInt(22, arr.get(1));
    }

    /**
     * Verify at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0460
     * @tc.name int32ArrayConstructorPart07TestMindmapTest046
     * @tc.desc Verify at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest046() {
    List<Integer> src = java.util.Arrays.asList(100, 200);
    Int32Array arr = new Int32Array(src);
    assertEqualInt(100, arr.at(0));
    }

    /**
     * Verify at(-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0470
     * @tc.name int32ArrayConstructorPart07TestMindmapTest047
     * @tc.desc Verify at(-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest047() {
    List<Integer> src = java.util.Arrays.asList(100, 200);
    Int32Array arr = new Int32Array(src);
    assertEqualInt(200, arr.at(-1));
    }

    /**
     * Verify at(length) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0480
     * @tc.name int32ArrayConstructorPart07TestMindmapTest048
     * @tc.desc Verify at(length) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest048() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int32Array arr = new Int32Array(src);
    Integer v = arr.at(3);
    assertNull(v);
    }

    /**
     * Verify $_get(length) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0490
     * @tc.name int32ArrayConstructorPart07TestMindmapTest049
     * @tc.desc Verify $_get(length) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest049() {
    Int32Array arr = new Int32Array(3);
    try {
    arr.get(3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify for-of
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0500
     * @tc.name int32ArrayConstructorPart07TestMindmapTest050
     * @tc.desc Verify for-of
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest050() {
    List<Integer> src = java.util.Arrays.asList(5, 6, 7, 8);
    Int32Array arr = new Int32Array(src);
    for (int idx = 0; idx < arr.length(); idx++) {
    assertEqual(src.get(idx).intValue(), arr.get(idx).intValue());
    }
    assertEqual(4, arr.length());
    }

    /**
     * Verify for-of
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0510
     * @tc.name int32ArrayConstructorPart07TestMindmapTest051
     * @tc.desc Verify for-of
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest051() {
    List<Integer> src = new ArrayList<>();
    Int32Array arr = new Int32Array(src);
    int count = 0;
    for (int idx = 0; idx < arr.length(); idx++) {
    count++;
    }
    assertEqual(0, count);
    }

    /**
     * Verify forEach index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0520
     * @tc.name int32ArrayConstructorPart07TestMindmapTest052
     * @tc.desc Verify forEach index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest052() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int32Array arr = new Int32Array(src);
    List<Integer> seen = new ArrayList<>();
    List<Integer> indices = new ArrayList<>();
    for (int idx = 0; idx < arr.length(); idx++) {
    seen.add(arr.get(idx));
    indices.add(idx);
    }
    assertEqual(3, seen.size());
    assertEqualInt(10, seen.get(0));
    assertEqualInt(30, seen.get(2));
    assertEqualInt(0, indices.get(0));
    assertEqualInt(2, indices.get(2));
    }

    /**
     * Verify forEach array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0530
     * @tc.name int32ArrayConstructorPart07TestMindmapTest053
     * @tc.desc Verify forEach array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest053() {
    List<Integer> src = java.util.Arrays.asList(1);
    Int32Array arr = new Int32Array(src);
    for (int idx = 0; idx < arr.length(); idx++) {
    if (arr.get(idx) != src.get(idx)) {
    fail();
    }
    }
    }

    /**
     * Verify values()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0570
     * @tc.name int32ArrayConstructorPart07TestMindmapTest057
     * @tc.desc Verify values()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest057() {
    List<Integer> src = java.util.Arrays.asList(7, 14, 21);
    Int32Array arr = new Int32Array(src);
    Int32Array.KeyIterator iter = arr.values();
    for (int i = 0; i < 3; i++) {
    IteratorResult cur = iter.next();
    assertFalse(cur.done);
    assertEqual(src.get(i), cur.value);
    }
    assertTrue(iter.next().done);
    }

    /**
     * Verify join() Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0580
     * @tc.name int32ArrayConstructorPart07TestMindmapTest058
     * @tc.desc Verify join() Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest058() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int32Array arr = new Int32Array(src);
    assertEqual("1,2,3", arr.join());
    }

    /**
     * Verify join(separator)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0590
     * @tc.name int32ArrayConstructorPart07TestMindmapTest059
     * @tc.desc Verify join(separator)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest059() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int32Array arr = new Int32Array(src);
    assertEqual("10-20-30", arr.join("-"));
    }

    /**
     * Verify join()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0600
     * @tc.name int32ArrayConstructorPart07TestMindmapTest060
     * @tc.desc Verify join()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest060() {
    List<Integer> src = new ArrayList<>();
    Int32Array arr = new Int32Array(src);
    assertEqual("", arr.join());
    }

    /**
     * Verify join()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0610
     * @tc.name int32ArrayConstructorPart07TestMindmapTest061
     * @tc.desc Verify join()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest061() {
    List<Integer> src = java.util.Arrays.asList(42);
    Int32Array arr = new Int32Array(src);
    assertEqual("42", arr.join());
    }

    /**
     * Verify toString() join
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0620
     * @tc.name int32ArrayConstructorPart07TestMindmapTest062
     * @tc.desc Verify toString() join
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest062() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int32Array arr = new Int32Array(src);
    assertEqual("1,2,3", String.valueOf(arr));
    }

    /**
     * Verify Array<int> Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0630
     * @tc.name int32ArrayConstructorPart07TestMindmapTest063
     * @tc.desc Verify Array<int> Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest063() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int32Array arr = new Int32Array(src);
    src.set(0, 999);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify buffer Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0690
     * @tc.name int32ArrayConstructorPart07TestMindmapTest069
     * @tc.desc Verify buffer Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest069() {
    List<Integer> src = java.util.Arrays.asList(0, 0, 0, 0);
    Int32Array arr = new Int32Array(src);
    Int32Array view = new Int32Array(arr.buffer());
    view.set(1, 123);
    assertEqualInt(123, arr.get(1));
    }

    /**
     * Verify buffer+byteOffset=8 offset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0710
     * @tc.name int32ArrayConstructorPart07TestMindmapTest071
     * @tc.desc Verify buffer+byteOffset=8 offset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest071() {
    List<Integer> src = java.util.Arrays.asList(0, 0, 0, 0);
    Int32Array arr = new Int32Array(src);
    Int32Array view = new Int32Array(arr.buffer(), 8);
    view.set(0, 77);
    assertEqualInt(77, arr.get(2));
    }

    /**
     * Verify buffer+byteOffset+length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0720
     * @tc.name int32ArrayConstructorPart07TestMindmapTest072
     * @tc.desc Verify buffer+byteOffset+length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest072() {
    List<Integer> src = java.util.Arrays.asList(0, 0, 0, 0);
    Int32Array arr = new Int32Array(src);
    Int32Array view = new Int32Array(arr.buffer(), 4, 2);
    view.set(0, 11);
    view.set(1, 22);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(11, arr.get(1));
    assertEqualInt(22, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify buffer Int32Array length=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0730
     * @tc.name int32ArrayConstructorPart07TestMindmapTest073
     * @tc.desc Verify buffer Int32Array length=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest073() {
    List<Integer> src = new ArrayList<>();
    Int32Array arr = new Int32Array(src);
    Int32Array view = new Int32Array(arr.buffer());
    assertEqual(0, view.length());
    }

    /**
     * Verify buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0740
     * @tc.name int32ArrayConstructorPart07TestMindmapTest074
     * @tc.desc Verify buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest074() {
    List<Integer> src = java.util.Arrays.asList(0, 0, 0, 0, 0);
    Int32Array arr = new Int32Array(src);
    Int32Array v1 = new Int32Array(arr.buffer());
    Int32Array v2 = new Int32Array(arr.buffer());
    v1.set(0, 111);
    v2.set(4, 222);
    assertEqualInt(111, arr.get(0));
    assertEqualInt(222, v1.get(4));
    assertEqualInt(111, v2.get(0));
    }

    /**
     * Verify fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0750
     * @tc.name int32ArrayConstructorPart07TestMindmapTest075
     * @tc.desc Verify fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest075() {
    List<Integer> src = java.util.Arrays.asList(0, 0, 0, 0);
    Int32Array arr = new Int32Array(src);
    Int32Array view = new Int32Array(arr.buffer());
    view.fill(9);
    for (int i = 0; i < 4; i++) {
    assertEqualInt(9, arr.get(i));
    }
    }

    /**
     * Verify set(array, offset)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0760
     * @tc.name int32ArrayConstructorPart07TestMindmapTest076
     * @tc.desc Verify set(array, offset)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest076() {
    List<Integer> src = java.util.Arrays.asList(0, 0, 0, 0);
    Int32Array arr = new Int32Array(src);
    Int32Array view = new Int32Array(arr.buffer());
    Int32Array patch = Int32Array.of(5, 6);
    view.set(patch, 1);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(6, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify byteOffset=4 4 byteOffset=4 length /4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0770
     * @tc.name int32ArrayConstructorPart07TestMindmapTest077
     * @tc.desc Verify byteOffset=4 4 byteOffset=4 length /4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest077() {
    List<Integer> src = java.util.Arrays.asList(0, 0, 0);
    Int32Array arr = new Int32Array(src);
    Int32Array view = new Int32Array(arr.buffer(), 4);
    assertEqual(4, view.byteOffset());
    assertEqual(2, view.length());
    }

    /**
     * Verify $_set buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_0830
     * @tc.name int32ArrayConstructorPart07TestMindmapTest083
     * @tc.desc Verify $_set buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart07TestMindmapTest083() {
    List<Integer> src = java.util.Arrays.asList(0, 0);
    Int32Array arr = new Int32Array(src);
    arr.set(0, 33);
    arr.set(1, 44);
    Int32Array view = new Int32Array(arr.buffer());
    assertEqualInt(33, view.get(0));
    assertEqualInt(44, view.get(1));
    }

    /**
     * Verify sort
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART07_TEST_MINDMAP_1060
     * @tc.name int32ArrayConstructorPart07TestMindmapTest106
     * @tc.desc Verify sort
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
