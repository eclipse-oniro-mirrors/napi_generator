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

package basetype.int8array;

import basetype.common.Int8Array;
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.RangeError;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayConstructorPart13Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayConstructorPart13Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify length expects 4 from ArrayBuffer on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_0100
     * @tc.name int8ArrayConstructorPart13Test001
     * @tc.desc Verify length expects 4 from ArrayBuffer on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test001() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf);
    assertEqual(4, arr.length());
    }

    /**
     * Verify length expects 0 from ArrayBuffer on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_0300
     * @tc.name int8ArrayConstructorPart13Test003
     * @tc.desc Verify length expects 0 from ArrayBuffer on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test003() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int8Array arr = new Int8Array(buf);
    assertEqual(0, arr.length());
    }

    /**
     * Verify length expects 1 from ArrayBuffer on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_0400
     * @tc.name int8ArrayConstructorPart13Test004
     * @tc.desc Verify length expects 1 from ArrayBuffer on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test004() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Int8Array arr = new Int8Array(buf);
    assertEqual(1, arr.length());
    }

    /**
     * Verify $_get expects 0 from ArrayBuffer, with $_get(3), on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_0500
     * @tc.name int8ArrayConstructorPart13Test005
     * @tc.desc Verify $_get expects 0 from ArrayBuffer, with $_get(3), on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test005() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf);
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify length expects 256 from ArrayBuffer on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_1100
     * @tc.name int8ArrayConstructorPart13Test011
     * @tc.desc Verify length expects 256 from ArrayBuffer on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test011() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Int8Array arr = new Int8Array(buf);
    assertEqual(256, arr.length());
    }

    /**
     * Verify buffer property returns buf on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_1500
     * @tc.name int8ArrayConstructorPart13Test015
     * @tc.desc Verify buffer property returns buf on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test015() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify $_get expects 42 from ArrayBuffer, with $_get(1), on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_1800
     * @tc.name int8ArrayConstructorPart13Test018
     * @tc.desc Verify $_get expects 42 from ArrayBuffer, with $_get(1), on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test018() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array view1 = new Int8Array(buf);
    Int8Array view2 = new Int8Array(buf);
    view1.set(1, 42);
    assertEqualInt(42, view2.get(1));
    }

    /**
     * Verify $_get expects 7 from ArrayBuffer on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_2100
     * @tc.name int8ArrayConstructorPart13Test021
     * @tc.desc Verify $_get expects 7 from ArrayBuffer on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test021() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Int8Array viewA = new Int8Array(buf);
    Int8Array viewC = new Int8Array(buf);
    viewA.set(0, 7);
    assertEqualInt(7, viewC.get(0));
    }

    /**
     * Verify byteOffset of new Int8Array(buf) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_2200
     * @tc.name int8ArrayConstructorPart13Test022
     * @tc.desc Verify byteOffset of new Int8Array(buf) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test022() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify byteLength of new Int8Array(buf) returns 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_2300
     * @tc.name int8ArrayConstructorPart13Test023
     * @tc.desc Verify byteLength of new Int8Array(buf) returns 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test023() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Int8Array arr = new Int8Array(buf);
    assertEqual(5, arr.byteLength());
    }

    /**
     * Verify length expects 6 from ArrayBuffer on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_2400
     * @tc.name int8ArrayConstructorPart13Test024
     * @tc.desc Verify length expects 6 from ArrayBuffer on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test024() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array arr = new Int8Array(buf);
    assertEqual(6, arr.length());
    }

    /**
     * Verify $_get expects 42 from ArrayBuffer, with $_get(0), on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_2500
     * @tc.name int8ArrayConstructorPart13Test025
     * @tc.desc Verify $_get expects 42 from ArrayBuffer, with $_get(0), on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test025() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Int8Array arr = new Int8Array(buf);
    arr.set(0, 42);
    Int8Array arr2 = new Int8Array(buf);
    assertEqualInt(42, arr2.get(0));
    }

    /**
     * Verify Int8Array instances on separate ArrayBuffers are independent: arr1.$_set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_2800
     * @tc.name int8ArrayConstructorPart13Test028
     * @tc.desc Verify Int8Array instances on separate ArrayBuffers are independent: arr1.$_set
     * (0, 77) does not affect arr2.$_get(0) on new Int8Array(buf1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test028() {
    ArrayBuffer buf1 = new ArrayBuffer(2);
    ArrayBuffer buf2 = new ArrayBuffer(2);
    Int8Array arr1 = new Int8Array(buf1);
    Int8Array arr2 = new Int8Array(buf2);
    arr1.set(0, 77);
    assertEqualInt(0, arr2.get(0));
    }

    /**
     * Verify length returns 4 on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_5900
     * @tc.name int8ArrayConstructorPart13Test059
     * @tc.desc Verify length returns 4 on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test059() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf);
    int r1 = arr.length();
    int e1 = 4;
    assertEqual(e1, r1);
    }

    /**
     * Verify BYTES_PER_ELEMENT equals 1 for new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_6100
     * @tc.name int8ArrayConstructorPart13Test061
     * @tc.desc Verify BYTES_PER_ELEMENT equals 1 for new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test061() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array arr = new Int8Array(buf);
    int r1 = arr.BYTES_PER_ELEMENT;
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify buffer.byteLength of new Int8Array(buf) returns 6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_6300
     * @tc.name int8ArrayConstructorPart13Test063
     * @tc.desc Verify buffer.byteLength of new Int8Array(buf) returns 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test063() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array arr = new Int8Array(buf);
    int r1 = arr.buffer().byteLength();
    int e1 = 6;
    assertEqual(e1, r1);
    }

    /**
     * Verify $_get throws RangeError when index is out of bounds: $_get(2) on length-
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_7100
     * @tc.name int8ArrayConstructorPart13Test071
     * @tc.desc Verify $_get throws RangeError when index is out of bounds: $_get(2) on length-
     * 2 Int8Array on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test071() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array arr = new Int8Array(buf);
    try {
    arr.get(2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteLength of new Int8Array(buf) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_7400
     * @tc.name int8ArrayConstructorPart13Test074
     * @tc.desc Verify byteLength of new Int8Array(buf) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart13Test074() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int8Array arr = new Int8Array(buf);
    assertEqual(0, arr.byteLength());
    }

    /**
     * Verify $_get expects 0, with $_get(0), on new Int8Array(new Int8SrcArrayLike(new int[] {-
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART13_TEST_7700
     * @tc.name int8ArrayConstructorPart13Test077
     * @tc.desc Verify $_get expects 0, with $_get(0), on new Int8Array(new Int8SrcArrayLike([-
     * Number.POSITIVE_INFINITY}))
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
