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
import basetype.common.RangeError;

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayConstructorPart10Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayConstructorPart10Test extends BasTest {
    /**
     * Verify Int32Array(buf, 0) with 16-byte ArrayBuffer yields length 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_0100
     * @tc.name int32ArrayConstructorPart10TestMindmapTest001
     * @tc.desc Verify Int32Array(buf, 0) with 16-byte ArrayBuffer yields length 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest001() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 0);
    assertEqual(4, view.length());
    }

    /**
     * Verify Int32Array(buf, 0) with 8-byte ArrayBuffer yields byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_0200
     * @tc.name int32ArrayConstructorPart10TestMindmapTest002
     * @tc.desc Verify Int32Array(buf, 0) with 8-byte ArrayBuffer yields byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest002() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array view = new Int32Array(buf, 0);
    assertEqual(0, view.byteOffset());
    }

    /**
     * Verify Int32Array(buf, 0) with 8-byte ArrayBuffer yields byteLength 8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_0300
     * @tc.name int32ArrayConstructorPart10TestMindmapTest003
     * @tc.desc Verify Int32Array(buf, 0) with 8-byte ArrayBuffer yields byteLength 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest003() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array view = new Int32Array(buf, 0);
    assertEqual(8, view.byteLength());
    }

    /**
     * Verify Int32Array(buf, 0) with 10-byte ArrayBuffer truncates length to 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_0400
     * @tc.name int32ArrayConstructorPart10TestMindmapTest004
     * @tc.desc Verify Int32Array(buf, 0) with 10-byte ArrayBuffer truncates length to 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest004() {
    ArrayBuffer buf = new ArrayBuffer(10);
    try {
    new Int32Array(buf, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 0) with 4-byte ArrayBuffer yields length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_0500
     * @tc.name int32ArrayConstructorPart10TestMindmapTest005
     * @tc.desc Verify Int32Array(buf, 0) with 4-byte ArrayBuffer yields length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest005() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int32Array view = new Int32Array(buf, 0);
    assertEqual(1, view.length());
    }

    /**
     * Verify Int32Array(buf, 0) with zero-length ArrayBuffer yields length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_0600
     * @tc.name int32ArrayConstructorPart10TestMindmapTest006
     * @tc.desc Verify Int32Array(buf, 0) with zero-length ArrayBuffer yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest006() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int32Array view = new Int32Array(buf, 0);
    assertEqual(0, view.length());
    }

    /**
     * Verify Int32Array(buf, 0) with 4096-byte ArrayBuffer yields length 1024
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_0700
     * @tc.name int32ArrayConstructorPart10TestMindmapTest007
     * @tc.desc Verify Int32Array(buf, 0) with 4096-byte ArrayBuffer yields length 1024
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest007() {
    ArrayBuffer buf = new ArrayBuffer(4096);
    Int32Array view = new Int32Array(buf, 0);
    assertEqual(1024, view.length());
    }

    /**
     * Verify two Int32Array views on same buffer share data via $_set/$_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_0800
     * @tc.name int32ArrayConstructorPart10TestMindmapTest008
     * @tc.desc Verify two Int32Array views on same buffer share data via $_set/$_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest008() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array valFirst = new Int32Array(buf, 0);
    valFirst.set(0, 100);
    Int32Array valSecond = new Int32Array(buf, 0);
    assertEqualInt(100, valSecond.get(0));
    }

    /**
     * Verify Int32Array(buf, 0) with 8-byte ArrayBuffer yields length 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_1000
     * @tc.name int32ArrayConstructorPart10TestMindmapTest010
     * @tc.desc Verify Int32Array(buf, 0) with 8-byte ArrayBuffer yields length 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest010() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array view = new Int32Array(buf, 0);
    assertEqual(2, view.length());
    }

    /**
     * Verify Int32Array(buf, 0) with 16-byte ArrayBuffer yields byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_1100
     * @tc.name int32ArrayConstructorPart10TestMindmapTest011
     * @tc.desc Verify Int32Array(buf, 0) with 16-byte ArrayBuffer yields byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest011() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 0);
    assertEqual(0, view.byteOffset());
    }

    /**
     * Verify Int32Array(buf, -0) treats negative zero as byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_1200
     * @tc.name int32ArrayConstructorPart10TestMindmapTest012
     * @tc.desc Verify Int32Array(buf, -0) treats negative zero as byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest012() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array view = new Int32Array(buf, -0);
    assertEqual(0, view.byteOffset());
    }

    /**
     * Verify Int32Array(buf, 4) with 16-byte buffer yields byteOffset 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_1300
     * @tc.name int32ArrayConstructorPart10TestMindmapTest013
     * @tc.desc Verify Int32Array(buf, 4) with 16-byte buffer yields byteOffset 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest013() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 4);
    assertEqual(4, view.byteOffset());
    }

    /**
     * Verify Int32Array(buf, 8.0) with 20-byte buffer yields length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_1400
     * @tc.name int32ArrayConstructorPart10TestMindmapTest014
     * @tc.desc Verify Int32Array(buf, 8.0) with 20-byte buffer yields length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest014() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int32Array view = new Int32Array(buf, 8.0);
    assertEqual(3, view.length());
    }

    /**
     * Verify Int32Array(buf, 12.0) with 16-byte buffer yields length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_1500
     * @tc.name int32ArrayConstructorPart10TestMindmapTest015
     * @tc.desc Verify Int32Array(buf, 12.0) with 16-byte buffer yields length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest015() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 12.0);
    assertEqual(1, view.length());
    }

    /**
     * Verify Int32Array(buf, 16.0) with 16-byte buffer yields length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_1600
     * @tc.name int32ArrayConstructorPart10TestMindmapTest016
     * @tc.desc Verify Int32Array(buf, 16.0) with 16-byte buffer yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest016() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 16.0);
    assertEqual(0, view.length());
    }

    /**
     * Verify Int32Array(buf, 2.9) non-4-aligned byteOffset throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_1700
     * @tc.name int32ArrayConstructorPart10TestMindmapTest017
     * @tc.desc Verify Int32Array(buf, 2.9) non-4-aligned byteOffset throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest017() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 2.9);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 3) non-4-aligned byteOffset throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_1800
     * @tc.name int32ArrayConstructorPart10TestMindmapTest018
     * @tc.desc Verify Int32Array(buf, 3) non-4-aligned byteOffset throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest018() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 1) non-4-aligned byteOffset throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_1900
     * @tc.name int32ArrayConstructorPart10TestMindmapTest019
     * @tc.desc Verify Int32Array(buf, 1) non-4-aligned byteOffset throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest019() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, -4) negative byteOffset throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_2000
     * @tc.name int32ArrayConstructorPart10TestMindmapTest020
     * @tc.desc Verify Int32Array(buf, -4) negative byteOffset throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest020() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, -4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, -1) negative byteOffset throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_2100
     * @tc.name int32ArrayConstructorPart10TestMindmapTest021
     * @tc.desc Verify Int32Array(buf, -1) negative byteOffset throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest021() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 2) non-4-aligned byteOffset throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_2200
     * @tc.name int32ArrayConstructorPart10TestMindmapTest022
     * @tc.desc Verify Int32Array(buf, 2) non-4-aligned byteOffset throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest022() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 5) non-4-aligned byteOffset throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_2300
     * @tc.name int32ArrayConstructorPart10TestMindmapTest023
     * @tc.desc Verify Int32Array(buf, 5) non-4-aligned byteOffset throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest023() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, Double.NaN) byteOffset NaN treated as 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_2400
     * @tc.name int32ArrayConstructorPart10TestMindmapTest024
     * @tc.desc Verify Int32Array(buf, Double.NaN) byteOffset NaN treated as 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest024() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array view = new Int32Array(buf, Double.NaN);
    assertEqual(0, view.byteOffset());
    }

    /**
     * Verify Int32Array(buf, Double.POSITIVE_INFINITY) byteOffset throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_2500
     * @tc.name int32ArrayConstructorPart10TestMindmapTest025
     * @tc.desc Verify Int32Array(buf, Double.POSITIVE_INFINITY) byteOffset throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest025() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, Double.POSITIVE_INFINITY);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, Double.NEGATIVE_INFINITY) byteOffset throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_2600
     * @tc.name int32ArrayConstructorPart10TestMindmapTest026
     * @tc.desc Verify Int32Array(buf, Double.NEGATIVE_INFINITY) byteOffset throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest026() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, Double.NEGATIVE_INFINITY);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 17.0) byteOffset exceeds buffer throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_2700
     * @tc.name int32ArrayConstructorPart10TestMindmapTest027
     * @tc.desc Verify Int32Array(buf, 17.0) byteOffset exceeds buffer throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest027() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 17.0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 16.1) float byteOffset truncated to 16 yields length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_2800
     * @tc.name int32ArrayConstructorPart10TestMindmapTest028
     * @tc.desc Verify Int32Array(buf, 16.1) float byteOffset truncated to 16 yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest028() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 16.1);
    assertEqual(0, view.length());
    }

    /**
     * Verify Int32Array(buf, 16.9) float byteOffset truncated to 16 yields byteOffset 16
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_2900
     * @tc.name int32ArrayConstructorPart10TestMindmapTest029
     * @tc.desc Verify Int32Array(buf, 16.9) float byteOffset truncated to 16 yields byteOffset 16
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest029() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 16.9);
    assertEqual(16, view.byteOffset());
    }

    /**
     * Verify Int32Array(buf, 9007199254740991.0) MAX_SAFE_INTEGER byteOffset throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_3000
     * @tc.name int32ArrayConstructorPart10TestMindmapTest030
     * @tc.desc Verify Int32Array(buf, 9007199254740991.0) MAX_SAFE_INTEGER byteOffset throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest030() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 9007199254740991.0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 3.999999) float truncates to 3 throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_3100
     * @tc.name int32ArrayConstructorPart10TestMindmapTest031
     * @tc.desc Verify Int32Array(buf, 3.999999) float truncates to 3 throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest031() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 3.999999);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 4.000001) float truncates to 4 yields byteOffset 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_3200
     * @tc.name int32ArrayConstructorPart10TestMindmapTest032
     * @tc.desc Verify Int32Array(buf, 4.000001) float truncates to 4 yields byteOffset 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest032() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 4.000001);
    assertEqual(4, view.byteOffset());
    }

    /**
     * Verify Int32Array(buf, 4) with 16-byte buffer yields byteLength 12
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_3300
     * @tc.name int32ArrayConstructorPart10TestMindmapTest033
     * @tc.desc Verify Int32Array(buf, 4) with 16-byte buffer yields byteLength 12
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest033() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 4);
    assertEqual(12, view.byteLength());
    }

    /**
     * Verify Int32Array(buf, 12.0) yields length 1 and byteLength 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_3400
     * @tc.name int32ArrayConstructorPart10TestMindmapTest034
     * @tc.desc Verify Int32Array(buf, 12.0) yields length 1 and byteLength 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest034() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 12.0);
    assertEqual(1, view.length());
    assertEqual(4, view.byteLength());
    }

    /**
     * Verify Int32Array(buf, 0) with 9-byte buffer truncates length to 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_3500
     * @tc.name int32ArrayConstructorPart10TestMindmapTest035
     * @tc.desc Verify Int32Array(buf, 0) with 9-byte buffer truncates length to 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest035() {
    ArrayBuffer buf = new ArrayBuffer(9);
    try {
    new Int32Array(buf, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 4) with 11-byte buffer yields length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_3600
     * @tc.name int32ArrayConstructorPart10TestMindmapTest036
     * @tc.desc Verify Int32Array(buf, 4) with 11-byte buffer yields length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest036() {
    ArrayBuffer buf = new ArrayBuffer(11);
    try {
    new Int32Array(buf, 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 4) with 7-byte buffer insufficient remainder yields length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_3700
     * @tc.name int32ArrayConstructorPart10TestMindmapTest037
     * @tc.desc Verify Int32Array(buf, 4) with 7-byte buffer insufficient remainder yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest037() {
    ArrayBuffer buf = new ArrayBuffer(7);
    try {
    new Int32Array(buf, 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 4) with 8-byte buffer yields length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_3800
     * @tc.name int32ArrayConstructorPart10TestMindmapTest038
     * @tc.desc Verify Int32Array(buf, 4) with 8-byte buffer yields length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest038() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array view = new Int32Array(buf, 4);
    assertEqual(1, view.length());
    }

    /**
     * Verify Int32Array(buf, 4) with 5-byte buffer one remaining byte yields length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_3900
     * @tc.name int32ArrayConstructorPart10TestMindmapTest039
     * @tc.desc Verify Int32Array(buf, 4) with 5-byte buffer one remaining byte yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest039() {
    ArrayBuffer buf = new ArrayBuffer(5);
    try {
    new Int32Array(buf, 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array view cast to Object instanceof Int32Array returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_4000
     * @tc.name int32ArrayConstructorPart10TestMindmapTest040
     * @tc.desc Verify Int32Array view cast to Object instanceof Int32Array returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest040() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array view = new Int32Array(buf, 0);
    boolean isInstance = (view) instanceof Int32Array;
    assertTrue(isInstance);
    }

    /**
     * Verify Int32Array(buf, 0) buffer property returns the original ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_4100
     * @tc.name int32ArrayConstructorPart10TestMindmapTest041
     * @tc.desc Verify Int32Array(buf, 0) buffer property returns the original ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest041() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array view = new Int32Array(buf, 0);
    assertEqual(buf, view.buffer());
    }

    /**
     * Verify Int32Array(buf, 0) BYTES_PER_ELEMENT equals 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_4200
     * @tc.name int32ArrayConstructorPart10TestMindmapTest042
     * @tc.desc Verify Int32Array(buf, 0) BYTES_PER_ELEMENT equals 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest042() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array view = new Int32Array(buf, 0);
    assertEqual(4, view.BYTES_PER_ELEMENT);
    }

    /**
     * Verify Int32Array(buf, 0) with 12-byte buffer zero-initializes all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_4300
     * @tc.name int32ArrayConstructorPart10TestMindmapTest043
     * @tc.desc Verify Int32Array(buf, 0) with 12-byte buffer zero-initializes all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest043() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array view = new Int32Array(buf, 0);
    assertEqualInt(0, view.get(0));
    assertEqualInt(0, view.get(1));
    assertEqualInt(0, view.get(2));
    }

    /**
     * Verify view instanceof Int32Array returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_4400
     * @tc.name int32ArrayConstructorPart10TestMindmapTest044
     * @tc.desc Verify view instanceof Int32Array returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest044() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array view = new Int32Array(buf, 0);
    Object checkObj = view;
    assertTrue(BasTest.instanceOf(checkObj, Int32Array.class));
    }

    /**
     * Verify Int32Array(buf, -8.0) negative float byteOffset throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_4500
     * @tc.name int32ArrayConstructorPart10TestMindmapTest045
     * @tc.desc Verify Int32Array(buf, -8.0) negative float byteOffset throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest045() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, -8.0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 20.0) byteOffset exceeds 16-byte buffer throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_4600
     * @tc.name int32ArrayConstructorPart10TestMindmapTest046
     * @tc.desc Verify Int32Array(buf, 20.0) byteOffset exceeds 16-byte buffer throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest046() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 20.0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 1) non-4-aligned byteOffset on 4-byte buffer throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_4700
     * @tc.name int32ArrayConstructorPart10TestMindmapTest047
     * @tc.desc Verify Int32Array(buf, 1) non-4-aligned byteOffset on 4-byte buffer throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest047() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Int32Array(buf, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 4) byteOffset equals 4-byte buffer byteLength yields length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_4800
     * @tc.name int32ArrayConstructorPart10TestMindmapTest048
     * @tc.desc Verify Int32Array(buf, 4) byteOffset equals 4-byte buffer byteLength yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest048() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int32Array view = new Int32Array(buf, 4);
    assertEqual(0, view.length());
    }

    /**
     * Verify Int32Array(buf, 5) byteOffset exceeds 4-byte buffer throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_4900
     * @tc.name int32ArrayConstructorPart10TestMindmapTest049
     * @tc.desc Verify Int32Array(buf, 5) byteOffset exceeds 4-byte buffer throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest049() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Int32Array(buf, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 4) byteOffset on zero-length buffer throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_5000
     * @tc.name int32ArrayConstructorPart10TestMindmapTest050
     * @tc.desc Verify Int32Array(buf, 4) byteOffset on zero-length buffer throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest050() {
    ArrayBuffer buf = new ArrayBuffer(0);
    try {
    new Int32Array(buf, 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int32Array(buf, 1) byteOffset on zero-length buffer throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_5100
     * @tc.name int32ArrayConstructorPart10TestMindmapTest051
     * @tc.desc Verify Int32Array(buf, 1) byteOffset on zero-length buffer throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest051() {
    ArrayBuffer buf = new ArrayBuffer(0);
    try {
    new Int32Array(buf, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify views at byteOffset 0 and 8.0 share writes across non-adjacent offsets
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_5500
     * @tc.name int32ArrayConstructorPart10TestMindmapTest055
     * @tc.desc Verify views at byteOffset 0 and 8.0 share writes across non-adjacent offsets
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest055() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array valFirst = new Int32Array(buf, 0);
    Int32Array valSecond = new Int32Array(buf, 8.0);
    valFirst.set(3, 111);
    assertEqualInt(111, valSecond.get(1));
    }

    /**
     * Verify Int32Array(buf, 8.0) buffer property returns the original ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_5600
     * @tc.name int32ArrayConstructorPart10TestMindmapTest056
     * @tc.desc Verify Int32Array(buf, 8.0) buffer property returns the original ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest056() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 8.0);
    assertEqual(buf, view.buffer());
    }

    /**
     * Verify $_set on empty tail view at offset 8 throws RangeError without corrupting full view data
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_5900
     * @tc.name int32ArrayConstructorPart10TestMindmapTest059
     * @tc.desc Verify $_set on empty tail view at offset 8 throws RangeError without corrupting full view data
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest059() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array full = new Int32Array(buf);
    full.set(0, 42);
    full.set(1, 43);
    Int32Array tail = new Int32Array(buf, 8.0);
    try {
    tail.set(0, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(42, full.get(0));
    assertEqualInt(43, full.get(1));
    }

    /**
     * Verify four views at offsets 0, 4, 8, 12 each report correct byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_6200
     * @tc.name int32ArrayConstructorPart10TestMindmapTest062
     * @tc.desc Verify four views at offsets 0, 4, 8, 12 each report correct byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest062() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array valFirst = new Int32Array(buf, 0);
    Int32Array valSecond = new Int32Array(buf, 4);
    Int32Array vEight = new Int32Array(buf, 8.0);
    Int32Array valThird = new Int32Array(buf, 12.0);
    assertEqual(0, valFirst.byteOffset());
    assertEqual(4, valSecond.byteOffset());
    assertEqual(8, vEight.byteOffset());
    assertEqual(12, valThird.byteOffset());
    }

    /**
     * Verify four views write distinct values and full view reads all correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_6300
     * @tc.name int32ArrayConstructorPart10TestMindmapTest063
     * @tc.desc Verify four views write distinct values and full view reads all correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest063() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array valFirst = new Int32Array(buf, 0);
    Int32Array valSecond = new Int32Array(buf, 4);
    Int32Array vEight = new Int32Array(buf, 8.0);
    Int32Array valThird = new Int32Array(buf, 12.0);
    valFirst.set(0, 10);
    valSecond.set(0, 20);
    vEight.set(0, 30);
    valThird.set(0, 40);
    Int32Array full = new Int32Array(buf);
    assertEqualInt(10, full.get(0));
    assertEqualInt(20, full.get(1));
    assertEqualInt(30, full.get(2));
    assertEqualInt(40, full.get(3));
    }

    /**
     * Verify empty view at offset 8.0 buffer property returns the original ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_6500
     * @tc.name int32ArrayConstructorPart10TestMindmapTest065
     * @tc.desc Verify empty view at offset 8.0 buffer property returns the original ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest065() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array empty = new Int32Array(buf, 8.0);
    assertEqual(buf, empty.buffer());
    }

    /**
     * Verify empty view at offset 8.0 byteLength is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_6600
     * @tc.name int32ArrayConstructorPart10TestMindmapTest066
     * @tc.desc Verify empty view at offset 8.0 byteLength is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest066() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array empty = new Int32Array(buf, 8.0);
    assertEqual(0, empty.byteLength());
    }

    /**
     * Verify two views with NaN byteOffset and zero offset share data on same buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_6700
     * @tc.name int32ArrayConstructorPart10TestMindmapTest067
     * @tc.desc Verify two views with NaN byteOffset and zero offset share data on same buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest067() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array valFirst = new Int32Array(buf, Double.NaN);
    Int32Array valSecond = new Int32Array(buf, 0);
    valFirst.set(0, 77);
    assertEqualInt(77, valSecond.get(0));
    }

    /**
     * Verify Int32Array(buf, 4) reports byteOffset 4 length 3 byteLength 12
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_6800
     * @tc.name int32ArrayConstructorPart10TestMindmapTest068
     * @tc.desc Verify Int32Array(buf, 4) reports byteOffset 4 length 3 byteLength 12
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest068() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 4);
    assertEqual(4, view.byteOffset());
    assertEqual(3, view.length());
    assertEqual(12, view.byteLength());
    }

    /**
     * Verify Int32Array(buf, 0) with 12-byte buffer reports length 3 byteLength 12
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_6900
     * @tc.name int32ArrayConstructorPart10TestMindmapTest069
     * @tc.desc Verify Int32Array(buf, 0) with 12-byte buffer reports length 3 byteLength 12
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest069() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array view = new Int32Array(buf, 0);
    assertEqual(3, view.length());
    assertEqual(12, view.byteLength());
    }

    /**
     * Verify full view writes 1-4 and offset=4 view reads elements 2-4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_7000
     * @tc.name int32ArrayConstructorPart10TestMindmapTest070
     * @tc.desc Verify full view writes 1-4 and offset=4 view reads elements 2-4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest070() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array w = new Int32Array(buf);
    w.set(0, 1);
    w.set(1, 2);
    w.set(2, 3);
    w.set(3, 4);
    Int32Array view = new Int32Array(buf, 4);
    assertEqualInt(2, view.get(0));
    assertEqualInt(3, view.get(1));
    assertEqualInt(4, view.get(2));
    }

    /**
     * Verify Int32Array(buf, 8.5) float byteOffset truncated to 8 yields length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_7100
     * @tc.name int32ArrayConstructorPart10TestMindmapTest071
     * @tc.desc Verify Int32Array(buf, 8.5) float byteOffset truncated to 8 yields length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest071() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int32Array view = new Int32Array(buf, 8.5);
    assertEqual(8, view.byteOffset());
    assertEqual(3, view.length());
    }

    /**
     * Verify Int32Array(buf, 0) with 8-byte buffer yields byteOffset 0 length 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_7200
     * @tc.name int32ArrayConstructorPart10TestMindmapTest072
     * @tc.desc Verify Int32Array(buf, 0) with 8-byte buffer yields byteOffset 0 length 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest072() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array view = new Int32Array(buf, 0);
    assertEqual(0, view.byteOffset());
    assertEqual(2, view.length());
    }

    /**
     * Verify two views at same offset 4 share byteOffset length and mutations
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART10_TEST_MINDMAP_7300
     * @tc.name int32ArrayConstructorPart10TestMindmapTest073
     * @tc.desc Verify two views at same offset 4 share byteOffset length and mutations
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart10TestMindmapTest073() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array vNum = new Int32Array(buf, 4);
    Int32Array vInt = new Int32Array(buf, 4);
    assertEqual(vInt.byteOffset(), vNum.byteOffset());
    assertEqual(vInt.length(), vNum.length());
    vNum.set(0, 123);
    assertEqualInt(123, vInt.get(0));
    }
}
