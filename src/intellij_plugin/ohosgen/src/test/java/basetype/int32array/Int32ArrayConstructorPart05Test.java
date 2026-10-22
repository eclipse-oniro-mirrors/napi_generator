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
 * Int32ArrayConstructorPart05Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayConstructorPart05Test extends BasTest {
    /**
     * Verify arity=1 FixedArray<int>
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0010
     * @tc.name int32ArrayConstructorPart05TestMindmapTest001
     * @tc.desc Verify arity=1 FixedArray<int>
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest001() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3});
    assertEqual(3, dst.length());
    }

    /**
     * Verify result properties for empty FixedArray construction
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0020
     * @tc.name int32ArrayConstructorPart05TestMindmapTest002
     * @tc.desc Verify result properties for empty FixedArray construction
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest002() {
    Int32Array dst = new Int32Array(new int[] {});
    assertEqual(0, dst.length());
    assertEqual(0, dst.byteLength());
    assertEqual(0, dst.byteOffset());
    }

    /**
     * Verify arity=1 FixedArray<int> length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0030
     * @tc.name int32ArrayConstructorPart05TestMindmapTest003
     * @tc.desc Verify arity=1 FixedArray<int> length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest003() {
    Int32Array dst = new Int32Array(new int[] {42});
    assertEqual(1, dst.length());
    }

    /**
     * Verify FixedArray buffer.byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0040
     * @tc.name int32ArrayConstructorPart05TestMindmapTest004
     * @tc.desc Verify FixedArray buffer.byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest004() {
    Int32Array dst = new Int32Array(new int[] {});
    assertEqual(0, dst.buffer().byteLength());
    }

    /**
     * Verify FixedArray byteLength 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0050
     * @tc.name int32ArrayConstructorPart05TestMindmapTest005
     * @tc.desc Verify FixedArray byteLength 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest005() {
    Int32Array dst = new Int32Array(new int[] {0});
    assertEqual(4, dst.byteLength());
    }

    /**
     * Verify FixedArray byteLength 8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0060
     * @tc.name int32ArrayConstructorPart05TestMindmapTest006
     * @tc.desc Verify FixedArray byteLength 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest006() {
    Int32Array dst = new Int32Array(new int[] {1, 2});
    assertEqual(8, dst.byteLength());
    }

    /**
     * Verify FixedArray length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0070
     * @tc.name int32ArrayConstructorPart05TestMindmapTest007
     * @tc.desc Verify FixedArray length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest007() {
    Int32Array dst = new Int32Array(new int[] {10, 20, 30, 40});
    assertEqual(4, dst.length());
    }

    /**
     * Verify FixedArray byteLength = 6*4 = 24
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0080
     * @tc.name int32ArrayConstructorPart05TestMindmapTest008
     * @tc.desc Verify FixedArray byteLength = 6*4 = 24
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest008() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    assertEqual(24, dst.byteLength());
    }

    /**
     * Verify FixedArray length 8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0090
     * @tc.name int32ArrayConstructorPart05TestMindmapTest009
     * @tc.desc Verify FixedArray length 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest009() {
    Int32Array dst = new Int32Array(new int[] {10, 20, 30, 40, 50, 60, 70, 80});
    assertEqual(8, dst.length());
    assertEqualInt(80, dst.get(7));
    }

    /**
     * Verify 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0100
     * @tc.name int32ArrayConstructorPart05TestMindmapTest010
     * @tc.desc Verify 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest010() {
    Int32Array dst = new Int32Array(new int[] {0});
    assertEqualInt(0, dst.get(0));
    }

    /**
     * Verify 1 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0110
     * @tc.name int32ArrayConstructorPart05TestMindmapTest011
     * @tc.desc Verify 1 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest011() {
    Int32Array dst = new Int32Array(new int[] {1});
    assertEqualInt(1, dst.get(0));
    }

    /**
     * Verify 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0130
     * @tc.name int32ArrayConstructorPart05TestMindmapTest013
     * @tc.desc Verify 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest013() {
    Int32Array dst = new Int32Array(new int[] {2});
    assertEqualInt(2, dst.get(0));
    }

    /**
     * Verify [100]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0190
     * @tc.name int32ArrayConstructorPart05TestMindmapTest019
     * @tc.desc Verify [100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest019() {
    Int32Array dst = new Int32Array(new int[] {100});
    assertEqualInt(100, dst.get(0));
    }

    /**
     * Verify 0xFF 255 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0230
     * @tc.name int32ArrayConstructorPart05TestMindmapTest023
     * @tc.desc Verify 0xFF 255 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest023() {
    Int32Array dst = new Int32Array(new int[] {0xFF});
    assertEqualInt(255, dst.get(0));
    }

    /**
     * Verify 0o77 63 63
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0240
     * @tc.name int32ArrayConstructorPart05TestMindmapTest024
     * @tc.desc Verify 0o77 63 63
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest024() {
    Int32Array dst = new Int32Array(new int[] {077});
    assertEqualInt(63, dst.get(0));
    }

    /**
     * Verify 0b1010 10 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0250
     * @tc.name int32ArrayConstructorPart05TestMindmapTest025
     * @tc.desc Verify 0b1010 10 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest025() {
    Int32Array dst = new Int32Array(new int[] {0b1010});
    assertEqualInt(10, dst.get(0));
    }

    /**
     * Verify [0, 0, 0, 0] 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0260
     * @tc.name int32ArrayConstructorPart05TestMindmapTest026
     * @tc.desc Verify [0, 0, 0, 0] 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest026() {
    Int32Array dst = new Int32Array(new int[] {0, 0, 0, 0});
    assertEqualInt(0, dst.get(0));
    assertEqualInt(0, dst.get(3));
    }

    /**
     * Verify [7, 7, 7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0270
     * @tc.name int32ArrayConstructorPart05TestMindmapTest027
     * @tc.desc Verify [7, 7, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest027() {
    Int32Array dst = new Int32Array(new int[] {7, 7, 7});
    assertEqualInt(7, dst.get(1));
    assertEqualInt(7, dst.get(2));
    }

    /**
     * Verify [5, 5, 5] 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0290
     * @tc.name int32ArrayConstructorPart05TestMindmapTest029
     * @tc.desc Verify [5, 5, 5] 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest029() {
    Int32Array dst = new Int32Array(new int[] {5, 5, 5});
    assertEqualInt(5, dst.get(0));
    }

    /**
     * Verify [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0350
     * @tc.name int32ArrayConstructorPart05TestMindmapTest035
     * @tc.desc Verify [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest035() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3, 4, 5});
    assertEqualInt(1, dst.get(0));
    assertEqualInt(3, dst.get(2));
    assertEqualInt(5, dst.get(4));
    }

    /**
     * Verify [-2147483648, 0, 2147483647]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0410
     * @tc.name int32ArrayConstructorPart05TestMindmapTest041
     * @tc.desc Verify [-2147483648, 0, 2147483647]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest041() {
    Int32Array dst = new Int32Array(new double[] {Integer.MIN_VALUE, 0, 2147483647});
    assertEqualInt(0, dst.get(1));
    }

    /**
     * Verify Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0430
     * @tc.name int32ArrayConstructorPart05TestMindmapTest043
     * @tc.desc Verify Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest043() {
    Int32Array dst = new Int32Array(new int[] {1, 2});
    boolean isInstance = BasTest.instanceOf(dst, Int32Array.class);
    assertTrue(isInstance);
    }

    /**
     * Verify byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0440
     * @tc.name int32ArrayConstructorPart05TestMindmapTest044
     * @tc.desc Verify byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest044() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3});
    assertEqual(0, dst.byteOffset());
    }

    /**
     * Verify BYTES_PER_ELEMENT 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0450
     * @tc.name int32ArrayConstructorPart05TestMindmapTest045
     * @tc.desc Verify BYTES_PER_ELEMENT 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest045() {
    Int32Array dst = new Int32Array(new int[] {1});
    assertEqual(4, dst.BYTES_PER_ELEMENT);
    }

    /**
     * Verify buffer ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0460
     * @tc.name int32ArrayConstructorPart05TestMindmapTest046
     * @tc.desc Verify buffer ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest046() {
    Int32Array dst = new Int32Array(new int[] {1, 2});
    boolean isBuf = dst.buffer() instanceof ArrayBuffer;
    assertTrue(isBuf);
    }

    /**
     * Verify buffer.byteLength byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0470
     * @tc.name int32ArrayConstructorPart05TestMindmapTest047
     * @tc.desc Verify buffer.byteLength byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest047() {
    Int32Array dst = new Int32Array(new int[] {42});
    assertEqual(dst.byteLength(), dst.buffer().byteLength());
    }

    /**
     * Verify buffer.byteLength byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0480
     * @tc.name int32ArrayConstructorPart05TestMindmapTest048
     * @tc.desc Verify buffer.byteLength byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest048() {
    Int32Array dst = new Int32Array(new int[] {});
    assertEqual(dst.byteLength(), dst.buffer().byteLength());
    }

    /**
     * Verify length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0490
     * @tc.name int32ArrayConstructorPart05TestMindmapTest049
     * @tc.desc Verify length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest049() {
    Int32Array dst = new Int32Array(new int[] {10, 20, 30});
    int len = dst.length();
    assertEqual(3, len);
    }

    /**
     * Verify $_get(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0500
     * @tc.name int32ArrayConstructorPart05TestMindmapTest050
     * @tc.desc Verify $_get(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest050() {
    Int32Array dst = new Int32Array(new int[] {10, 20, 30});
    assertEqualInt(10, dst.get(0));
    }

    /**
     * Verify $_get(length-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0510
     * @tc.name int32ArrayConstructorPart05TestMindmapTest051
     * @tc.desc Verify $_get(length-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest051() {
    Int32Array dst = new Int32Array(new int[] {10, 20, 30});
    assertEqualInt(30, dst.get(2));
    }

    /**
     * Verify $_get(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0520
     * @tc.name int32ArrayConstructorPart05TestMindmapTest052
     * @tc.desc Verify $_get(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest052() {
    Int32Array dst = new Int32Array(new int[] {10, 20, 30});
    assertEqualInt(20, dst.get(1));
    }

    /**
     * Verify $_get(0) throws RangeError on empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0530
     * @tc.name int32ArrayConstructorPart05TestMindmapTest053
     * @tc.desc Verify $_get(0) throws RangeError on empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest053() {
    Int32Array dst = new Int32Array(new int[] {});
    try {
    dst.get(0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify [0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0540
     * @tc.name int32ArrayConstructorPart05TestMindmapTest054
     * @tc.desc Verify [0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest054() {
    Int32Array dst = new Int32Array(new int[] {11, 22, 33});
    assertEqualInt(11, dst.get(0));
    }

    /**
     * Verify [length-1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0550
     * @tc.name int32ArrayConstructorPart05TestMindmapTest055
     * @tc.desc Verify [length-1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest055() {
    Int32Array dst = new Int32Array(new int[] {11, 22, 33});
    assertEqualInt(33, dst.get(2));
    }

    /**
     * Verify two separate Int32Array instances constructed from identical arrays are
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0560
     * @tc.name int32ArrayConstructorPart05TestMindmapTest056
     * @tc.desc Verify two separate Int32Array instances constructed from identical arrays are
     * distinct objects (not same reference)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest056() {
    Int32Array a = new Int32Array(new int[] {1, 2, 3});
    Int32Array b = new Int32Array(new int[] {1, 2, 3});
    boolean sameRef = a == b;
    assertFalse(sameRef);
    }

    /**
     * Verify buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0570
     * @tc.name int32ArrayConstructorPart05TestMindmapTest057
     * @tc.desc Verify buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest057() {
    Int32Array a = new Int32Array(new int[] {1, 2, 3});
    Int32Array b = new Int32Array(new int[] {1, 2, 3});
    boolean sameBuf = a.buffer() == b.buffer();
    assertFalse(sameBuf);
    }

    /**
     * Verify a b
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0580
     * @tc.name int32ArrayConstructorPart05TestMindmapTest058
     * @tc.desc Verify a b
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest058() {
    Int32Array a = new Int32Array(new int[] {1, 2, 3});
    Int32Array b = new Int32Array(new int[] {1, 2, 3});
    a.set(0, 999);
    assertEqualInt(1, b.get(0));
    }

    /**
     * Verify modifying one Int32Array does not affect another independently construct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0600
     * @tc.name int32ArrayConstructorPart05TestMindmapTest060
     * @tc.desc Verify modifying one Int32Array does not affect another independently construct
     * ed Int32Array with same initial values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest060() {
    Int32Array a = new Int32Array(new int[] {10, 20});
    Int32Array b = new Int32Array(new int[] {10, 20});
    a.set(1, 777);
    assertEqualInt(20, b.get(1));
    }

    /**
     * Verify fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0610
     * @tc.name int32ArrayConstructorPart05TestMindmapTest061
     * @tc.desc Verify fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest061() {
    Int32Array a = new Int32Array(new int[] {1, 2});
    Int32Array b = new Int32Array(new int[] {1, 2});
    a.fill(99);
    assertEqualInt(1, b.get(0));
    assertEqualInt(2, b.get(1));
    }

    /**
     * Verify reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0620
     * @tc.name int32ArrayConstructorPart05TestMindmapTest062
     * @tc.desc Verify reverse
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest062() {
    Int32Array a = new Int32Array(new int[] {1, 2, 3});
    Int32Array b = new Int32Array(new int[] {1, 2, 3});
    a.reverse();
    assertEqualInt(1, b.get(0));
    assertEqualInt(3, b.get(2));
    }

    /**
     * Verify buffer Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0630
     * @tc.name int32ArrayConstructorPart05TestMindmapTest063
     * @tc.desc Verify buffer Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest063() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3});
    Int32Array view = new Int32Array(dst.buffer());
    assertEqualInt(1, view.get(0));
    assertEqual(3, view.length());
    }

    /**
     * Verify buffer Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0640
     * @tc.name int32ArrayConstructorPart05TestMindmapTest064
     * @tc.desc Verify buffer Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest064() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3});
    Int32Array view = new Int32Array(dst.buffer());
    view.set(0, 111);
    assertEqualInt(111, dst.get(0));
    }

    /**
     * Verify Int32Array buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0650
     * @tc.name int32ArrayConstructorPart05TestMindmapTest065
     * @tc.desc Verify Int32Array buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest065() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3});
    Int32Array view = new Int32Array(dst.buffer());
    dst.set(2, 222);
    assertEqualInt(222, view.get(2));
    }

    /**
     * Verify subarray(0) buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0660
     * @tc.name int32ArrayConstructorPart05TestMindmapTest066
     * @tc.desc Verify subarray(0) buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest066() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array sub = dst.subarray(0);
    boolean sameBuf = sub.buffer() == dst.buffer();
    assertTrue(sameBuf);
    }

    /**
     * Verify byteOffset=4 Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0680
     * @tc.name int32ArrayConstructorPart05TestMindmapTest068
     * @tc.desc Verify byteOffset=4 Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest068() {
    Int32Array dst = new Int32Array(new int[] {10, 20, 30, 40});
    Int32Array view = new Int32Array(dst.buffer(), 4);
    assertEqualInt(20, view.get(0));
    view.set(0, 222);
    assertEqualInt(222, dst.get(1));
    }

    /**
     * Verify FixedArray buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0730
     * @tc.name int32ArrayConstructorPart05TestMindmapTest073
     * @tc.desc Verify FixedArray buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest073() {
    Int32Array dst = new Int32Array(new int[] {});
    Int32Array view = new Int32Array(dst.buffer());
    assertEqual(0, view.length());
    }

    /**
     * Verify byteOffset byteOffset=8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0750
     * @tc.name int32ArrayConstructorPart05TestMindmapTest075
     * @tc.desc Verify byteOffset byteOffset=8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest075() {
    Int32Array dst = new Int32Array(new int[] {10, 20, 30, 40, 50});
    Int32Array view = new Int32Array(dst.buffer(), 8);
    assertEqual(8, view.byteOffset());
    assertEqualInt(30, view.get(0));
    }

    /**
     * Verify buffer byteOffset=8 length=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0760
     * @tc.name int32ArrayConstructorPart05TestMindmapTest076
     * @tc.desc Verify buffer byteOffset=8 length=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest076() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array view = new Int32Array(dst.buffer(), 8, 2);
    assertEqual(2, view.length());
    assertEqualInt(3, view.get(0));
    assertEqualInt(4, view.get(1));
    }

    /**
     * Verify $_set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0780
     * @tc.name int32ArrayConstructorPart05TestMindmapTest078
     * @tc.desc Verify $_set
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest078() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3});
    dst.set(0, 99);
    assertEqualInt(99, dst.get(0));
    }

    /**
     * Verify fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0790
     * @tc.name int32ArrayConstructorPart05TestMindmapTest079
     * @tc.desc Verify fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest079() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3});
    dst.fill(7);
    assertEqualInt(7, dst.get(0));
    assertEqualInt(7, dst.get(2));
    }

    /**
     * Verify copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0800
     * @tc.name int32ArrayConstructorPart05TestMindmapTest080
     * @tc.desc Verify copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest080() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3, 4});
    dst.copyWithin(2, 0, 2);
    assertEqualInt(1, dst.get(2));
    assertEqualInt(2, dst.get(3));
    }

    /**
     * Verify reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0810
     * @tc.name int32ArrayConstructorPart05TestMindmapTest081
     * @tc.desc Verify reverse
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest081() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3});
    dst.reverse();
    assertEqualInt(3, dst.get(0));
    assertEqualInt(1, dst.get(2));
    }

    /**
     * Verify for-of
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0820
     * @tc.name int32ArrayConstructorPart05TestMindmapTest082
     * @tc.desc Verify for-of
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest082() {
    Int32Array dst = new Int32Array(new int[] {10, 20, 30});
    int sum = 0;
    for (Integer v : dst.values()) {
    sum += v;
    }
    assertEqual(60, sum);
    }

    /**
     * Verify for-of break
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0830
     * @tc.name int32ArrayConstructorPart05TestMindmapTest083
     * @tc.desc Verify for-of break
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest083() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] count = {0};
    for (Integer v : dst.values()) {
    count[0] += 1;
    if (count[0] == 2) {
    break;
    }
    }
    assertEqual(2, count[0]);
    }

    /**
     * Verify for-of 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0840
     * @tc.name int32ArrayConstructorPart05TestMindmapTest084
     * @tc.desc Verify for-of 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest084() {
    Int32Array dst = new Int32Array(new int[] {});
    int[] count = {0};
    for (Integer v : dst.values()) {
    count[0] += 1;
    }
    assertEqual(0, count[0]);
    }

    /**
     * Verify every true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0850
     * @tc.name int32ArrayConstructorPart05TestMindmapTest085
     * @tc.desc Verify every true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest085() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3, 4});
    boolean allPos = dst.every((v, unusedIndex, array) -> v > 0);
    assertTrue(allPos);
    }

    /**
     * Verify join
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0870
     * @tc.name int32ArrayConstructorPart05TestMindmapTest087
     * @tc.desc Verify join
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest087() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3});
    String s = dst.join();
    assertEqual("1,2,3", s);
    }

    /**
     * Verify toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0880
     * @tc.name int32ArrayConstructorPart05TestMindmapTest088
     * @tc.desc Verify toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest088() {
    Int32Array dst = new Int32Array(new int[] {10, 20, 30});
    String s = String.valueOf(dst);
    assertEqual("10,20,30", s);
    }

    /**
     * Verify slice buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0890
     * @tc.name int32ArrayConstructorPart05TestMindmapTest089
     * @tc.desc Verify slice buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest089() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array s = dst.slice(1, 3);
    assertEqual(2, s.length());
    assertEqualInt(2, s.get(0));
    assertEqualInt(3, s.get(1));
    boolean sameBuf = s.buffer() == dst.buffer();
    assertFalse(sameBuf);
    }

    /**
     * Verify map Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0900
     * @tc.name int32ArrayConstructorPart05TestMindmapTest090
     * @tc.desc Verify map Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest090() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3});
    Int32Array m = dst.map((v, unusedIndex, array) -> v * 2);
    assertEqualInt(2, m.get(0));
    assertEqualInt(6, m.get(2));
    }

    /**
     * Verify reduce without initialValue sums all elements (single-argument overload)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_0910
     * @tc.name int32ArrayConstructorPart05TestMindmapTest091
     * @tc.desc Verify reduce without initialValue sums all elements (single-argument overload)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart05TestMindmapTest091() {
    Int32Array dst = new Int32Array(new int[] {1, 2, 3, 4});
    int sum = dst.reduce((acc, v, unusedIndex, array) -> acc + v);
    assertEqual(10, sum);
    }

    /**
     * Verify Uint8Array [-1] 0xFF
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART05_TEST_MINDMAP_1100
     * @tc.name int32ArrayConstructorPart05TestMindmapTest110
     * @tc.desc Verify Uint8Array [-1] 0xFF
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
