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

package basetype.int8array;

import basetype.common.Int8Array;
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;

import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayAtPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayAtPart01Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify at(0) on single-element Int8Array([42])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART01_0100
     * @tc.name int8ArrayAtPart01Test001
     * @tc.desc Verify at(0) on single-element Int8Array([42])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart01Test001() {
    Int8Array arr = new Int8Array(new int[] {42});
    assertEqualInt(42, arr.at(0));
    }

    /**
     * Verify at(0) returns -128 on new Int8Array(new int[] {128, -129, 255, 0x81})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART01_0200
     * @tc.name int8ArrayAtPart01Test002
     * @tc.desc Verify at(0) returns -128 on new Int8Array(new int[] {128, -129, 255, 0x81})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart01Test002() {
    Int8Array arr = new Int8Array(new int[] {128, -129, 255, 0x81});
    assertEqualInt(INT8_MIN, arr.at(0));
    }

    /**
     * Verify at(0) returns 0 on zero-filled new Int8Array(100)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART01_0300
     * @tc.name int8ArrayAtPart01Test003
     * @tc.desc Verify at(0) returns 0 on zero-filled new Int8Array(100)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart01Test003() {
    Int8Array arr = new Int8Array(100);
    assertEqualInt(0, arr.at(0));
    }

    /**
     * Verify at(-1) returns 42 on Int8Array([42])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART01_0400
     * @tc.name int8ArrayAtPart01Test004
     * @tc.desc Verify at(-1) returns 42 on Int8Array([42])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart01Test004() {
    Int8Array arr = new Int8Array(new int[] {42});
    assertEqualInt(42, arr.at(-1));
    }

    /**
     * Verify at(-2) returns 100 on Int8Array([100, -100])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART01_0500
     * @tc.name int8ArrayAtPart01Test005
     * @tc.desc Verify at(-2) returns 100 on Int8Array([100, -100])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart01Test005() {
    Int8Array arr = new Int8Array(new int[] {100, -100});
    assertEqualInt(100, arr.at(-2));
    }

    /**
     * Verify at(-1) returns 0 on Int8Array([10, -10, INT8_MAX, INT8_MIN, 0])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART01_0600
     * @tc.name int8ArrayAtPart01Test006
     * @tc.desc Verify at(-1) returns 0 on Int8Array([10, -10, INT8_MAX, INT8_MIN, 0])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart01Test006() {
    Int8Array arr = new Int8Array(new int[] {10, -10, INT8_MAX, INT8_MIN, 0});
    assertEqualInt(0, arr.at(-1));
    }

    /**
     * Verify at(-arr.length) returns first element 10 on Int8Array([10, -10, INT8_MAX, INT8_MIN, 0])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART01_0700
     * @tc.name int8ArrayAtPart01Test007
     * @tc.desc Verify at(-arr.length) returns first element 10 on Int8Array([10, -10, INT8_MAX, INT8_MIN, 0])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart01Test007() {
    Int8Array arr = new Int8Array(new int[] {10, -10, INT8_MAX, INT8_MIN, 0});
    assertEqualInt(10, arr.at(-arr.length()));
    }

    /**
     * Verify at(-1) returns -127 on Int8Array([128, -129, 255, 0x81])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART01_0800
     * @tc.name int8ArrayAtPart01Test008
     * @tc.desc Verify at(-1) returns -127 on Int8Array([128, -129, 255, 0x81])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart01Test008() {
    Int8Array arr = new Int8Array(new int[] {128, -129, 255, 0x81});
    assertEqualInt(-127, arr.at(-1));
    }

    /**
     * Verify at(-1) returns 0 on zero-filled Int8Array of length 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART01_0900
     * @tc.name int8ArrayAtPart01Test009
     * @tc.desc Verify at(-1) returns 0 on zero-filled Int8Array of length 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart01Test009() {
    Int8Array arr = new Int8Array(100);
    assertEqualInt(0, arr.at(-1));
    }

    /**
     * Verify at(0) returns first element 1 on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART01_1000
     * @tc.name int8ArrayAtPart01Test010
     * @tc.desc Verify at(0) returns first element 1 on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart01Test010() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    assertEqualInt(1, arr.at(0));
    }

    /**
     * Verify at(0) returns first element 5 on Int8Array.from([5, 6, 7])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART01_1100
     * @tc.name int8ArrayAtPart01Test011
     * @tc.desc Verify at(0) returns first element 5 on Int8Array.from([5, 6, 7])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart01Test011() {
    List<Integer> src = java.util.Arrays.asList(5, 6, 7);
    Int8Array arr = Int8Array.from(src);
    assertEqualInt(5, arr.at(0));
    }

    /**
     * Verify at(0) returns 9 after $_set(0, 9) on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART01_1200
     * @tc.name int8ArrayAtPart01Test012
     * @tc.desc Verify at(0) returns 9 after $_set(0, 9) on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart01Test012() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf);
    arr.set(0, 9);
    assertEqualInt(9, arr.at(0));
    }

    /**
     * Verify at(0) on subarray(2) returns INT8_MAX(127)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART01_1300
     * @tc.name int8ArrayAtPart01Test013
     * @tc.desc Verify at(0) on subarray(2) returns INT8_MAX(127)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart01Test013() {
    Int8Array base = new Int8Array(new int[] {10, -10, INT8_MAX, INT8_MIN, 0});
    Int8Array view = base.subarray(2);
    assertEqualInt(INT8_MAX, view.at(0));
    }

    /**
     * Verify at(0) returns 7 after fill(7)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_AT_PART01_1400
     * @tc.name int8ArrayAtPart01Test014
     * @tc.desc Verify at(0) returns 7 after fill(7)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayAtPart01Test014() {
    Int8Array arr = new Int8Array(3);
    arr.fill(7);
    assertEqualInt(7, arr.at(0));
    }
}
