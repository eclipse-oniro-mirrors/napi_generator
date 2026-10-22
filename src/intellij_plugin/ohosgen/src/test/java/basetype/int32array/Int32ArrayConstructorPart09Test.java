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
 * Int32ArrayConstructorPart09Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayConstructorPart09Test extends BasTest {
    /**
     * Verify 1 (ArrayBuffer), byteOffset (byteOffset:int), (, :
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_0100
     * @tc.name int32ArrayConstructorPart09TestMindmapTest001
     * @tc.desc Verify 1 (ArrayBuffer), byteOffset (byteOffset:int), (, :
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest001() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqual(2, arr.length());
    }

    /**
     * Verify 2 (buf, 0),
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_0200
     * @tc.name int32ArrayConstructorPart09TestMindmapTest002
     * @tc.desc Verify 2 (buf, 0),
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest002() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqual(0, arr.byteOffset());
    assertEqual(3, arr.length());
    }

    /**
     * Verify 2 2 int 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_0300
     * @tc.name int32ArrayConstructorPart09TestMindmapTest003
     * @tc.desc Verify 2 2 int 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest003() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 4);
    assertEqual(4, arr.byteOffset());
    assertEqual(2, arr.length());
    }

    /**
     * Verify result properties for a zero-length buffer view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_0400
     * @tc.name int32ArrayConstructorPart09TestMindmapTest004
     * @tc.desc Verify result properties for a zero-length buffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest004() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqual(0, arr.length());
    assertEqual(0, arr.byteLength());
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify buf 4 (), byteOffset=0 length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_0500
     * @tc.name int32ArrayConstructorPart09TestMindmapTest005
     * @tc.desc Verify buf 4 (), byteOffset=0 length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest005() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqual(1, arr.length());
    assertEqual(4, arr.byteLength());
    }

    /**
     * Verify buf 8 (), byteOffset=0 length=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_0600
     * @tc.name int32ArrayConstructorPart09TestMindmapTest006
     * @tc.desc Verify buf 8 (), byteOffset=0 length=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest006() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqual(2, arr.length());
    assertEqual(8, arr.byteLength());
    }

    /**
     * Verify buf 12 (), byteOffset=0 length=3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_0700
     * @tc.name int32ArrayConstructorPart09TestMindmapTest007
     * @tc.desc Verify buf 12 (), byteOffset=0 length=3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest007() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqual(3, arr.length());
    }

    /**
     * Verify buf 16 (), byteOffset=0 length=4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_0800
     * @tc.name int32ArrayConstructorPart09TestMindmapTest008
     * @tc.desc Verify buf 16 (), byteOffset=0 length=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest008() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqual(4, arr.length());
    assertEqual(16, arr.byteLength());
    }

    /**
     * Verify buf 5 bytes, byteOffset=0 truncates to 1 element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_0900
     * @tc.name int32ArrayConstructorPart09TestMindmapTest009
     * @tc.desc Verify buf 5 bytes, byteOffset=0 truncates to 1 element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest009() {
    ArrayBuffer buf = new ArrayBuffer(5);
    try {
    new Int32Array(buf, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify buf 7 bytes, byteOffset=0 truncates to 1 element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_1000
     * @tc.name int32ArrayConstructorPart09TestMindmapTest010
     * @tc.desc Verify buf 7 bytes, byteOffset=0 truncates to 1 element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest010() {
    ArrayBuffer buf = new ArrayBuffer(7);
    try {
    new Int32Array(buf, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify buf 9 bytes, byteOffset=0 truncates to 2 elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_1100
     * @tc.name int32ArrayConstructorPart09TestMindmapTest011
     * @tc.desc Verify buf 9 bytes, byteOffset=0 truncates to 2 elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest011() {
    ArrayBuffer buf = new ArrayBuffer(9);
    try {
    new Int32Array(buf, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=0, buffer=4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_1200
     * @tc.name int32ArrayConstructorPart09TestMindmapTest012
     * @tc.desc Verify byteOffset=0, buffer=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest012() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqual(0, arr.byteOffset());
    assertEqual(1, arr.length());
    }

    /**
     * Verify byteOffset=4, buffer=8 2 int32, length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_1300
     * @tc.name int32ArrayConstructorPart09TestMindmapTest013
     * @tc.desc Verify byteOffset=4, buffer=8 2 int32, length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest013() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 4);
    assertEqual(4, arr.byteOffset());
    assertEqual(1, arr.length());
    assertEqual(4, arr.byteLength());
    }

    /**
     * Verify byteOffset=4, buffer=12 length=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_1400
     * @tc.name int32ArrayConstructorPart09TestMindmapTest014
     * @tc.desc Verify byteOffset=4, buffer=12 length=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest014() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 4);
    assertEqual(4, arr.byteOffset());
    assertEqual(2, arr.length());
    assertEqual(8, arr.byteLength());
    }

    /**
     * Verify byteOffset=8, buffer=12 length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_1500
     * @tc.name int32ArrayConstructorPart09TestMindmapTest015
     * @tc.desc Verify byteOffset=8, buffer=12 length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest015() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 8);
    assertEqual(8, arr.byteOffset());
    assertEqual(1, arr.length());
    assertEqual(4, arr.byteLength());
    }

    /**
     * Verify byteOffset=8, buffer=16 length=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_1600
     * @tc.name int32ArrayConstructorPart09TestMindmapTest016
     * @tc.desc Verify byteOffset=8, buffer=16 length=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest016() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 8);
    assertEqual(8, arr.byteOffset());
    assertEqual(2, arr.length());
    }

    /**
     * Verify byteOffset=12, buffer=16 length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_1700
     * @tc.name int32ArrayConstructorPart09TestMindmapTest017
     * @tc.desc Verify byteOffset=12, buffer=16 length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest017() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 12);
    assertEqual(12, arr.byteOffset());
    assertEqual(1, arr.length());
    }

    /**
     * Verify byteOffset buffer (8)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_1800
     * @tc.name int32ArrayConstructorPart09TestMindmapTest018
     * @tc.desc Verify byteOffset buffer (8)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest018() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 8);
    assertEqual(0, arr.length());
    assertEqual(8, arr.byteOffset());
    assertEqual(0, arr.byteLength());
    }

    /**
     * Verify byteOffset buffer (12)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_1900
     * @tc.name int32ArrayConstructorPart09TestMindmapTest019
     * @tc.desc Verify byteOffset buffer (12)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest019() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 12);
    assertEqual(0, arr.length());
    assertEqual(12, arr.byteOffset());
    }

    /**
     * Verify byteOffset=1(), buffer=8 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_2000
     * @tc.name int32ArrayConstructorPart09TestMindmapTest020
     * @tc.desc Verify byteOffset=1(), buffer=8 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest020() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=2(), buffer=8 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_2100
     * @tc.name int32ArrayConstructorPart09TestMindmapTest021
     * @tc.desc Verify byteOffset=2(), buffer=8 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest021() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=3(), buffer=8 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_2200
     * @tc.name int32ArrayConstructorPart09TestMindmapTest022
     * @tc.desc Verify byteOffset=3(), buffer=8 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest022() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, 3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=5(), buffer=12 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_2300
     * @tc.name int32ArrayConstructorPart09TestMindmapTest023
     * @tc.desc Verify byteOffset=5(), buffer=12 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest023() {
    ArrayBuffer buf = new ArrayBuffer(12);
    try {
    new Int32Array(buf, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=6(), buffer=12 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_2400
     * @tc.name int32ArrayConstructorPart09TestMindmapTest024
     * @tc.desc Verify byteOffset=6(), buffer=12 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest024() {
    ArrayBuffer buf = new ArrayBuffer(12);
    try {
    new Int32Array(buf, 6);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=7(), buffer=12 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_2500
     * @tc.name int32ArrayConstructorPart09TestMindmapTest025
     * @tc.desc Verify byteOffset=7(), buffer=12 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest025() {
    ArrayBuffer buf = new ArrayBuffer(12);
    try {
    new Int32Array(buf, 7);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=9(, buffer), buffer=16 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_2600
     * @tc.name int32ArrayConstructorPart09TestMindmapTest026
     * @tc.desc Verify byteOffset=9(, buffer), buffer=16 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest026() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 9);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=1, buffer=4 3, RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_2700
     * @tc.name int32ArrayConstructorPart09TestMindmapTest027
     * @tc.desc Verify byteOffset=1, buffer=4 3, RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest027() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Int32Array(buf, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=-1() RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_2800
     * @tc.name int32ArrayConstructorPart09TestMindmapTest028
     * @tc.desc Verify byteOffset=-1() RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest028() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=-4() RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_2900
     * @tc.name int32ArrayConstructorPart09TestMindmapTest029
     * @tc.desc Verify byteOffset=-4() RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest029() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, -4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=-8(, buffer) RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_3000
     * @tc.name int32ArrayConstructorPart09TestMindmapTest030
     * @tc.desc Verify byteOffset=-8(, buffer) RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest030() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, -8);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=INT_MIN(-2147483648) RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_3100
     * @tc.name int32ArrayConstructorPart09TestMindmapTest031
     * @tc.desc Verify byteOffset=INT_MIN(-2147483648) RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest031() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, Integer.MIN_VALUE);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=9 buffer=8 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_3200
     * @tc.name int32ArrayConstructorPart09TestMindmapTest032
     * @tc.desc Verify byteOffset=9 buffer=8 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest032() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, 9);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=13 buffer=12 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_3300
     * @tc.name int32ArrayConstructorPart09TestMindmapTest033
     * @tc.desc Verify byteOffset=13 buffer=12 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest033() {
    ArrayBuffer buf = new ArrayBuffer(12);
    try {
    new Int32Array(buf, 13);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=INT_MAX(2147483647) RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_3400
     * @tc.name int32ArrayConstructorPart09TestMindmapTest034
     * @tc.desc Verify byteOffset=INT_MAX(2147483647) RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest034() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, 2147483647);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset 4 :buf=12, offset=4 8 length=2()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_3500
     * @tc.name int32ArrayConstructorPart09TestMindmapTest035
     * @tc.desc Verify byteOffset 4 :buf=12, offset=4 8 length=2()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest035() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 4);
    assertEqual(2, arr.length());
    }

    /**
     * Verify byteOffset 4 :buf=8 offset=8 ; buf=9 offset=0(), buf=12, offset=8 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_3600
     * @tc.name int32ArrayConstructorPart09TestMindmapTest036
     * @tc.desc Verify byteOffset 4 :buf=8 offset=8 ; buf=9 offset=0(), buf=12, offset=8 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest036() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 8);
    assertEqual(1, arr.length());
    }

    /**
     * Verify buf 13 bytes, byteOffset=4 truncates to 2 elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_3700
     * @tc.name int32ArrayConstructorPart09TestMindmapTest037
     * @tc.desc Verify buf 13 bytes, byteOffset=4 truncates to 2 elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest037() {
    ArrayBuffer buf = new ArrayBuffer(13);
    try {
    new Int32Array(buf, 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify buf 10 bytes, byteOffset=4 truncates to 1 element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_3800
     * @tc.name int32ArrayConstructorPart09TestMindmapTest038
     * @tc.desc Verify buf 10 bytes, byteOffset=4 truncates to 1 element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest038() {
    ArrayBuffer buf = new ArrayBuffer(10);
    try {
    new Int32Array(buf, 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify buf 11 bytes, byteOffset=8 buffer identity
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_3900
     * @tc.name int32ArrayConstructorPart09TestMindmapTest039
     * @tc.desc Verify buf 11 bytes, byteOffset=8 buffer identity
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest039() {
    ArrayBuffer buf = new ArrayBuffer(11);
    try {
    new Int32Array(buf, 8);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify buf 8 bytes, byteOffset=0 length=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_4000
     * @tc.name int32ArrayConstructorPart09TestMindmapTest040
     * @tc.desc Verify buf 8 bytes, byteOffset=0 length=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest040() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqual(2, arr.length());
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify buffer buf ()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_4100
     * @tc.name int32ArrayConstructorPart09TestMindmapTest041
     * @tc.desc Verify buffer buf ()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest041() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify byteOffset (0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_4200
     * @tc.name int32ArrayConstructorPart09TestMindmapTest042
     * @tc.desc Verify byteOffset (0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest042() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify byteOffset (4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_4300
     * @tc.name int32ArrayConstructorPart09TestMindmapTest043
     * @tc.desc Verify byteOffset (4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest043() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 4);
    assertEqual(4, arr.byteOffset());
    }

    /**
     * Verify byteLength = = buffer.byteLength - byteOffset()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_4400
     * @tc.name int32ArrayConstructorPart09TestMindmapTest044
     * @tc.desc Verify byteLength = = buffer.byteLength - byteOffset()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest044() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 4);
    assertEqual(8, arr.byteLength());
    }

    /**
     * Verify length = byteLength / 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_4500
     * @tc.name int32ArrayConstructorPart09TestMindmapTest045
     * @tc.desc Verify length = byteLength / 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest045() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 4);
    assertEqual(3, arr.length());
    assertEqual(12, arr.byteLength());
    }

    /**
     * Verify 0(ArrayBuffer)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_4600
     * @tc.name int32ArrayConstructorPart09TestMindmapTest046
     * @tc.desc Verify 0(ArrayBuffer)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest046() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify zero-length ArrayBuffer gives length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_4700
     * @tc.name int32ArrayConstructorPart09TestMindmapTest047
     * @tc.desc Verify zero-length ArrayBuffer gives length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest047() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify ArrayBuffer byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_4800
     * @tc.name int32ArrayConstructorPart09TestMindmapTest048
     * @tc.desc Verify ArrayBuffer byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest048() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 4);
    assertEqual(12, buf.byteLength());
    assertEqual(2, arr.length());
    }

    /**
     * Verify offset buffer, length/byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_4900
     * @tc.name int32ArrayConstructorPart09TestMindmapTest049
     * @tc.desc Verify offset buffer, length/byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest049() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a1 = new Int32Array(buf, 0);
    Int32Array a2 = new Int32Array(buf, 8);
    assertEqual(4, a1.length());
    assertEqual(2, a2.length());
    assertEqual(0, a1.byteOffset());
    assertEqual(8, a2.byteOffset());
    }

    /**
     * Verify $_set(0, v), $_get(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_5000
     * @tc.name int32ArrayConstructorPart09TestMindmapTest050
     * @tc.desc Verify $_set(0, v), $_get(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest050() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 0);
    arr.set(0, 42);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify offset=0, offset=0 ()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_5100
     * @tc.name int32ArrayConstructorPart09TestMindmapTest051
     * @tc.desc Verify offset=0, offset=0 ()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest051() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array a1 = new Int32Array(buf, 0);
    a1.set(0, 100);
    Int32Array a2 = new Int32Array(buf, 0);
    assertEqualInt(100, a2.get(0));
    }

    /**
     * Verify offset=0 2, offset=4 $_get(0) ()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_5200
     * @tc.name int32ArrayConstructorPart09TestMindmapTest052
     * @tc.desc Verify offset=0 2, offset=4 $_get(0) ()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest052() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array a1 = new Int32Array(buf, 0);
    a1.set(1, 200);
    Int32Array a2 = new Int32Array(buf, 4);
    assertEqualInt(200, a2.get(0));
    }

    /**
     * Verify buffer offset (offset)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_5400
     * @tc.name int32ArrayConstructorPart09TestMindmapTest054
     * @tc.desc Verify buffer offset (offset)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest054() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array a1 = new Int32Array(buf, 0);
    Int32Array a2 = new Int32Array(buf, 8);
    a1.set(0, 111);
    a2.set(0, 222);
    assertEqualInt(111, a1.get(0));
    assertEqualInt(222, a1.get(2));
    assertEqualInt(222, a2.get(0));
    }

    /**
     * Verify (offset == buffer) $_set(0, v) throws RangeError, buffer unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_5700
     * @tc.name int32ArrayConstructorPart09TestMindmapTest057
     * @tc.desc Verify (offset == buffer) $_set(0, v) throws RangeError, buffer unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest057() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array aFull = new Int32Array(buf, 0);
    aFull.set(0, 77);
    Int32Array aEmpty = new Int32Array(buf, 8);
    try {
    aEmpty.set(0, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(77, aFull.get(0));
    assertEqual(0, aEmpty.length());
    }

    /**
     * Verify buffer offset (0/4/8),
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_5900
     * @tc.name int32ArrayConstructorPart09TestMindmapTest059
     * @tc.desc Verify buffer offset (0/4/8),
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest059() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array a0 = new Int32Array(buf, 0);
    Int32Array a4 = new Int32Array(buf, 4);
    Int32Array a8 = new Int32Array(buf, 8);
    a0.set(0, 10);
    a4.set(0, 20);
    a8.set(0, 30);
    assertEqualInt(10, a0.get(0));
    assertEqualInt(20, a0.get(1));
    assertEqualInt(30, a0.get(2));
    }

    /**
     * Verify fill offset,
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_6000
     * @tc.name int32ArrayConstructorPart09TestMindmapTest060
     * @tc.desc Verify fill offset,
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest060() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array a1 = new Int32Array(buf, 4);
    a1.fill(7);
    Int32Array a0 = new Int32Array(buf, 0);
    assertEqualInt(7, a0.get(1));
    assertEqualInt(7, a0.get(2));
    assertEqualInt(0, a0.get(0));
    }

    /**
     * Verify set offset,
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_6100
     * @tc.name int32ArrayConstructorPart09TestMindmapTest061
     * @tc.desc Verify set offset,
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest061() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array aOff = new Int32Array(buf, 4);
    Int32Array src = Int32Array.of(55, 66);
    aOff.set(src, 0);
    Int32Array aFull = new Int32Array(buf, 0);
    assertEqualInt(55, aFull.get(1));
    assertEqualInt(66, aFull.get(2));
    assertEqualInt(0, aFull.get(0));
    assertEqualInt(0, aFull.get(3));
    }

    /**
     * Verify reverse,
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_6300
     * @tc.name int32ArrayConstructorPart09TestMindmapTest063
     * @tc.desc Verify reverse,
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest063() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array a1 = new Int32Array(buf, 0);
    a1.set(0, 1);
    a1.set(1, 2);
    a1.reverse();
    Int32Array a2 = new Int32Array(buf, 0);
    assertEqualInt(2, a2.get(0));
    assertEqualInt(1, a2.get(1));
    }

    /**
     * Verify ArrayBuffer, 0(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_6400
     * @tc.name int32ArrayConstructorPart09TestMindmapTest064
     * @tc.desc Verify ArrayBuffer, 0(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest064() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify offset=4, 4 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_6500
     * @tc.name int32ArrayConstructorPart09TestMindmapTest065
     * @tc.desc Verify offset=4, 4 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest065() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array a1 = new Int32Array(buf, 4);
    a1.set(0, 7);
    Int32Array a0 = new Int32Array(buf, 0);
    assertEqualInt(0, a0.get(0));
    assertEqualInt(7, a0.get(1));
    }

    /**
     * Verify buf 7 bytes, byteOffset=4 buffer identity
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_6700
     * @tc.name int32ArrayConstructorPart09TestMindmapTest067
     * @tc.desc Verify buf 7 bytes, byteOffset=4 buffer identity
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest067() {
    ArrayBuffer buf = new ArrayBuffer(7);
    try {
    new Int32Array(buf, 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify buffer(4096 = 1024), offset=0, length=1024
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_7000
     * @tc.name int32ArrayConstructorPart09TestMindmapTest070
     * @tc.desc Verify buffer(4096 = 1024), offset=0, length=1024
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest070() {
    ArrayBuffer buf = new ArrayBuffer(4096);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqual(1024, arr.length());
    assertEqual(4096, arr.byteLength());
    }

    /**
     * Verify buffer(4096), offset=4092(4), length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_7100
     * @tc.name int32ArrayConstructorPart09TestMindmapTest071
     * @tc.desc Verify buffer(4096), offset=4092(4), length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest071() {
    ArrayBuffer buf = new ArrayBuffer(4096);
    Int32Array arr = new Int32Array(buf, 4092);
    assertEqual(1, arr.length());
    assertEqual(4092, arr.byteOffset());
    assertEqual(4, arr.byteLength());
    }

    /**
     * Verify buffer(4096), offset=4088, length=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_7200
     * @tc.name int32ArrayConstructorPart09TestMindmapTest072
     * @tc.desc Verify buffer(4096), offset=4088, length=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest072() {
    ArrayBuffer buf = new ArrayBuffer(4096);
    Int32Array arr = new Int32Array(buf, 4088);
    assertEqual(2, arr.length());
    assertEqual(4088, arr.byteOffset());
    }

    /**
     * Verify buffer(4096), offset=4096(buffer)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_7300
     * @tc.name int32ArrayConstructorPart09TestMindmapTest073
     * @tc.desc Verify buffer(4096), offset=4096(buffer)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest073() {
    ArrayBuffer buf = new ArrayBuffer(4096);
    Int32Array arr = new Int32Array(buf, 4096);
    assertEqual(0, arr.length());
    assertEqual(4096, arr.byteOffset());
    }

    /**
     * Verify buffer(4096), offset=4097(1, ) RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_7400
     * @tc.name int32ArrayConstructorPart09TestMindmapTest074
     * @tc.desc Verify buffer(4096), offset=4097(1, ) RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest074() {
    ArrayBuffer buf = new ArrayBuffer(4096);
    try {
    new Int32Array(buf, 4097);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify buffer(4096), offset=4093(, ) RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_7500
     * @tc.name int32ArrayConstructorPart09TestMindmapTest075
     * @tc.desc Verify buffer(4096), offset=4093(, ) RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest075() {
    ArrayBuffer buf = new ArrayBuffer(4096);
    try {
    new Int32Array(buf, 4093);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify buffer(4096), offset=1() RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_7600
     * @tc.name int32ArrayConstructorPart09TestMindmapTest076
     * @tc.desc Verify buffer(4096), offset=1() RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest076() {
    ArrayBuffer buf = new ArrayBuffer(4096);
    try {
    new Int32Array(buf, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify buffer(4096), offset=-4096() RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_7700
     * @tc.name int32ArrayConstructorPart09TestMindmapTest077
     * @tc.desc Verify buffer(4096), offset=-4096() RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest077() {
    ArrayBuffer buf = new ArrayBuffer(4096);
    try {
    new Int32Array(buf, -4096);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify buf+offset, ()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_7800
     * @tc.name int32ArrayConstructorPart09TestMindmapTest078
     * @tc.desc Verify buf+offset, ()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest078() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array a1 = new Int32Array(buf, 0);
    Int32Array a2 = new Int32Array(buf, 0);
    a1.set(0, 123);
    assertEqualInt(123, a2.get(0));
    assertEqual(a2.buffer(), a1.buffer());
    }

    /**
     * Verify buf offset, buffer byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_7900
     * @tc.name int32ArrayConstructorPart09TestMindmapTest079
     * @tc.desc Verify buf offset, buffer byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest079() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array a1 = new Int32Array(buf, 0);
    Int32Array a2 = new Int32Array(buf, 4);
    assertEqual(a2.buffer(), a1.buffer());
    assertEqual(0, a1.byteOffset());
    assertEqual(4, a2.byteOffset());
    }

    /**
     * Verify toString Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_8000
     * @tc.name int32ArrayConstructorPart09TestMindmapTest080
     * @tc.desc Verify toString Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest080() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqual("0,0", String.valueOf(arr));
    }

    /**
     * Verify toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_8100
     * @tc.name int32ArrayConstructorPart09TestMindmapTest081
     * @tc.desc Verify toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest081() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqual("", String.valueOf(arr));
    }

    /**
     * Verify (offset=0, buf=4)toString 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_8200
     * @tc.name int32ArrayConstructorPart09TestMindmapTest082
     * @tc.desc Verify (offset=0, buf=4)toString 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest082() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int32Array arr = new Int32Array(buf, 0);
    assertEqual("0", String.valueOf(arr));
    }

    /**
     * Verify offset=4, buffer=8, join
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_8300
     * @tc.name int32ArrayConstructorPart09TestMindmapTest083
     * @tc.desc Verify offset=4, buffer=8, join
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest083() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array a4 = new Int32Array(buf, 4);
    a4.set(0, 42);
    assertEqual("42", a4.join(","));
    }

    /**
     * Verify offset=0 0 offset=4, offset=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART09_TEST_MINDMAP_8400
     * @tc.name int32ArrayConstructorPart09TestMindmapTest084
     * @tc.desc Verify offset=0 0 offset=4, offset=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart09TestMindmapTest084() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array a0 = new Int32Array(buf, 0);
    Int32Array a4 = new Int32Array(buf, 4);
    a0.set(0, 11);
    a0.set(1, 22);
    a4.set(0, 33);
    assertEqualInt(11, a0.get(0));
    assertEqualInt(33, a0.get(1));
    assertEqualInt(33, a4.get(0));
    }
}
