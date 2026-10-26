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
 * Int8ArrayConstructorPart09Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayConstructorPart09Test extends BasTest {
    private static final int INT8_MAX = 127;

    /**
     * Verify length expects 4 from ArrayBuffer on new Int8Array(buf, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_0100
     * @tc.name int8ArrayConstructorPart09Test001
     * @tc.desc Verify length expects 4 from ArrayBuffer on new Int8Array(buf, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test001() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0);
    assertEqual(4, view.length());
    }

    /**
     * Verify length expects 2 from ArrayBuffer, on new Int8Array(buf, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_0200
     * @tc.name int8ArrayConstructorPart09Test002
     * @tc.desc Verify length expects 2 from ArrayBuffer, on new Int8Array(buf, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test002() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 2);
    assertEqual(2, view.length());
    }

    /**
     * Verify new Int8Array(buf, 4) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_0300
     * @tc.name int8ArrayConstructorPart09Test003
     * @tc.desc Verify new Int8Array(buf, 4) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test003() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 4);
    assertEqual(0, view.length());
    }

    /**
     * Verify length expects 0 from ArrayBuffer, on new Int8Array(buf, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_0400
     * @tc.name int8ArrayConstructorPart09Test004
     * @tc.desc Verify length expects 0 from ArrayBuffer, on new Int8Array(buf, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test004() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int8Array view = new Int8Array(buf, 0);
    assertEqual(0, view.length());
    }

    /**
     * Verify length expects 1 from ArrayBuffer, on new Int8Array(buf, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_0500
     * @tc.name int8ArrayConstructorPart09Test005
     * @tc.desc Verify length expects 1 from ArrayBuffer, on new Int8Array(buf, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test005() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Int8Array view = new Int8Array(buf, 0);
    assertEqual(1, view.length());
    }

    /**
     * Verify length expects 8 from ArrayBuffer, on new Int8Array(buf, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_0600
     * @tc.name int8ArrayConstructorPart09Test006
     * @tc.desc Verify length expects 8 from ArrayBuffer, on new Int8Array(buf, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test006() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 0);
    assertEqual(8, view.length());
    }

    /**
     * Verify length expects 256 from ArrayBuffer on new Int8Array(buf, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_0700
     * @tc.name int8ArrayConstructorPart09Test007
     * @tc.desc Verify length expects 256 from ArrayBuffer on new Int8Array(buf, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test007() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Int8Array view = new Int8Array(buf, 0);
    assertEqual(256, view.length());
    }

    /**
     * Verify byteOffset of new Int8Array(buf, 0) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_1100
     * @tc.name int8ArrayConstructorPart09Test011
     * @tc.desc Verify byteOffset of new Int8Array(buf, 0) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test011() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0);
    assertEqual(0, view.byteOffset());
    }

    /**
     * Verify byteOffset of new Int8Array(buf, 1) returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_1200
     * @tc.name int8ArrayConstructorPart09Test012
     * @tc.desc Verify byteOffset of new Int8Array(buf, 1) returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test012() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 1);
    assertEqual(1, view.byteOffset());
    }

    /**
     * Verify new Int8Array(buf, 7) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_1300
     * @tc.name int8ArrayConstructorPart09Test013
     * @tc.desc Verify new Int8Array(buf, 7) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test013() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 7);
    assertEqual(1, view.length());
    }

    /**
     * Verify byteOffset of new Int8Array(buf, 8) returns 8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_1400
     * @tc.name int8ArrayConstructorPart09Test014
     * @tc.desc Verify byteOffset of new Int8Array(buf, 8) returns 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test014() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 8);
    assertEqual(8, view.byteOffset());
    }

    /**
     * Verify byteLength of new Int8Array(buf, 0) returns buf.byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_1500
     * @tc.name int8ArrayConstructorPart09Test015
     * @tc.desc Verify byteLength of new Int8Array(buf, 0) returns buf.byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test015() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0);
    int r1 = view.byteLength();
    int e1 = buf.byteLength();
    assertEqual(e1, r1);
    }

    /**
     * Verify length expects 5 from ArrayBuffer on new Int8Array(buf, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_1600
     * @tc.name int8ArrayConstructorPart09Test016
     * @tc.desc Verify length expects 5 from ArrayBuffer on new Int8Array(buf, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test016() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 3);
    assertEqual(5, view.length());
    }

    /**
     * Verify length expects 0 from ArrayBuffer, on new Int8Array(buf, 8)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_1700
     * @tc.name int8ArrayConstructorPart09Test017
     * @tc.desc Verify length expects 0 from ArrayBuffer, on new Int8Array(buf, 8)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test017() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 8);
    assertEqual(0, view.length());
    }

    /**
     * Verify length expects 1 from ArrayBuffer, on new Int8Array(buf, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_1800
     * @tc.name int8ArrayConstructorPart09Test018
     * @tc.desc Verify length expects 1 from ArrayBuffer, on new Int8Array(buf, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test018() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 3);
    assertEqual(1, view.length());
    }

    /**
     * Verify byteLength of new Int8Array(buf, 3) returns 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_1900
     * @tc.name int8ArrayConstructorPart09Test019
     * @tc.desc Verify byteLength of new Int8Array(buf, 3) returns 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test019() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 3);
    assertEqual(5, view.byteLength());
    }

    /**
     * Verify buffer property returns buf on new Int8Array(buf, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_2000
     * @tc.name int8ArrayConstructorPart09Test020
     * @tc.desc Verify buffer property returns buf on new Int8Array(buf, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test020() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0);
    assertEqual(buf, view.buffer());
    }

    /**
     * Verify new Int8Array(buf, 3) view byteLength returns 5 on 8-byte buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_2100
     * @tc.name int8ArrayConstructorPart09Test021
     * @tc.desc Verify new Int8Array(buf, 3) view byteLength returns 5 on 8-byte buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test021() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 3);
    int r1 = view.byteLength();
    int e1 = 5;
    assertEqual(e1, r1);
    }

    /**
     * Verify new Int8Array(buf, 5) throws RangeError for byteOffset out of bounds
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_2800
     * @tc.name int8ArrayConstructorPart09Test028
     * @tc.desc Verify new Int8Array(buf, 5) throws RangeError for byteOffset out of bounds
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test028() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Int8Array(buf, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, 8) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_2900
     * @tc.name int8ArrayConstructorPart09Test029
     * @tc.desc Verify new Int8Array(buf, 8) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test029() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Int8Array(buf, 8);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, -1) throws RangeError for invalid byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_3000
     * @tc.name int8ArrayConstructorPart09Test030
     * @tc.desc Verify new Int8Array(buf, -1) throws RangeError for invalid byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test030() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Int8Array(buf, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, -2147483648) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_3100
     * @tc.name int8ArrayConstructorPart09Test031
     * @tc.desc Verify new Int8Array(buf, -2147483648) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test031() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Int8Array(buf, Integer.MIN_VALUE);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, 0x7FFFFFFF) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_3200
     * @tc.name int8ArrayConstructorPart09Test032
     * @tc.desc Verify new Int8Array(buf, 0x7FFFFFFF) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test032() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Int8Array(buf, 0x7fffffff);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, 1) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_3400
     * @tc.name int8ArrayConstructorPart09Test034
     * @tc.desc Verify new Int8Array(buf, 1) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test034() {
    ArrayBuffer buf = new ArrayBuffer(0);
    try {
    new Int8Array(buf, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, -1) throws RangeError for invalid byteOffset on 1-byte buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_3500
     * @tc.name int8ArrayConstructorPart09Test035
     * @tc.desc Verify new Int8Array(buf, -1) throws RangeError for invalid byteOffset on 1-byte buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test035() {
    ArrayBuffer buf = new ArrayBuffer(1);
    try {
    new Int8Array(buf, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, -1) throws RangeError for invalid byteOffset on 256-byte buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_3600
     * @tc.name int8ArrayConstructorPart09Test036
     * @tc.desc Verify new Int8Array(buf, -1) throws RangeError for invalid byteOffset on 256-byte buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test036() {
    ArrayBuffer buf = new ArrayBuffer(256);
    try {
    new Int8Array(buf, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get expects 66 from ArrayBuffer on new Int8Array(buf, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_3900
     * @tc.name int8ArrayConstructorPart09Test039
     * @tc.desc Verify $_get expects 66 from ArrayBuffer on new Int8Array(buf, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test039() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array viewA = new Int8Array(buf, 0);
    Int8Array viewB = new Int8Array(buf, 0);
    viewA.set(2, 66);
    assertEqualInt(66, viewB.get(2));
    assertEqual(viewB.buffer(), viewA.buffer());
    }

    /**
     * Verify $_get expects 0 from ArrayBuffer, after $_set(0, 11), on new Int8Array(new ArrayBuffer(4), 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_4000
     * @tc.name int8ArrayConstructorPart09Test040
     * @tc.desc Verify $_get expects 0 from ArrayBuffer, after $_set(0, 11), on new Int8Array(new ArrayBuffer(4), 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test040() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array viewA = new Int8Array(buf, 0);
    Int8Array viewB = new Int8Array(buf, 2);
    viewA.set(0, 11);
    assertEqualInt(0, viewB.get(0));
    }

    /**
     * Verify $_get expects 0 from ArrayBuffer, after $_set(1, 22), on new Int8Array(new ArrayBuffer(4), 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_4100
     * @tc.name int8ArrayConstructorPart09Test041
     * @tc.desc Verify $_get expects 0 from ArrayBuffer, after $_set(1, 22), on new Int8Array(new ArrayBuffer(4), 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test041() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array viewA = new Int8Array(buf, 0);
    Int8Array viewB = new Int8Array(buf, 2);
    viewB.set(1, 22);
    assertEqualInt(0, viewA.get(0));
    assertEqualInt(0, viewA.get(1));
    }

    /**
     * Verify length expects 8 and 5 from overlapping views, on new Int8Array(buf, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_4200
     * @tc.name int8ArrayConstructorPart09Test042
     * @tc.desc Verify length expects 8 and 5 from overlapping views, on new Int8Array(buf, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test042() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array viewA = new Int8Array(buf, 0);
    Int8Array viewB = new Int8Array(buf, 3);
    assertEqual(8, viewA.length());
    assertEqual(5, viewB.length());
    }

    /**
     * Verify $_get expects -128 from ArrayBuffer on new Int8Array(buf, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_4900
     * @tc.name int8ArrayConstructorPart09Test049
     * @tc.desc Verify $_get expects -128 from ArrayBuffer on new Int8Array(buf, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test049() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array view = new Int8Array(buf, 0);
    view.set(0, 128);
    assertEqualInt(-128, view.get(0));
    }

    /**
     * Verify $_get expects 0 from ArrayBuffer, after $_set(0, Number.NaN), on new Int
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_5000
     * @tc.name int8ArrayConstructorPart09Test050
     * @tc.desc Verify $_get expects 0 from ArrayBuffer, after $_set(0, Number.NaN), on new Int
     * 8Array(new ArrayBuffer(2), 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test050() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array view = new Int8Array(buf, 0);
    view.set(0, Double.NaN);
    assertEqualInt(0, view.get(0));
    }

    /**
     * Verify $_get expects -1 from ArrayBuffer, after $_set(0, 255), on new Int8Array(new ArrayBuffer(2), 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_5100
     * @tc.name int8ArrayConstructorPart09Test051
     * @tc.desc Verify $_get expects -1 from ArrayBuffer, after $_set(0, 255), on new Int8Array(new ArrayBuffer(2), 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test051() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array view = new Int8Array(buf, 0);
    view.set(0, 255);
    assertEqualInt(-1, view.get(0));
    }

    /**
     * Verify $_get expects INT8_MAX from ArrayBuffer on new Int8Array(buf, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_5200
     * @tc.name int8ArrayConstructorPart09Test052
     * @tc.desc Verify $_get expects INT8_MAX from ArrayBuffer on new Int8Array(buf, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test052() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array view = new Int8Array(buf, 0);
    view.set(0, -129);
    assertEqualInt(INT8_MAX, view.get(0));
    }

    /**
     * Verify $_get expects 0 from ArrayBuffer, after $_set(0, 0x100), on new Int8Array(new ArrayBuffer(2), 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_5300
     * @tc.name int8ArrayConstructorPart09Test053
     * @tc.desc Verify $_get expects 0 from ArrayBuffer, after $_set(0, 0x100), on new Int8Array(new ArrayBuffer(2), 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test053() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array view = new Int8Array(buf, 0);
    view.set(0, 0x100);
    assertEqualInt(0, view.get(0));
    }

    /**
     * Verify $_get expects 0 from ArrayBuffer, after $_set(0, -0.0), on new Int8Array(new ArrayBuffer(2), 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_5400
     * @tc.name int8ArrayConstructorPart09Test054
     * @tc.desc Verify $_get expects 0 from ArrayBuffer, after $_set(0, -0.0), on new Int8Array(new ArrayBuffer(2), 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test054() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array view = new Int8Array(buf, 0);
    view.set(0, -0.0);
    assertEqualInt(0, view.get(0));
    }

    /**
     * Verify $_get expects 1 from ArrayBuffer on new Int8Array(buf, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_5500
     * @tc.name int8ArrayConstructorPart09Test055
     * @tc.desc Verify $_get expects 1 from ArrayBuffer on new Int8Array(buf, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test055() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array view = new Int8Array(buf, 0);
    view.set(0, 1.9);
    assertEqualInt(1, view.get(0));
    }

    /**
     * Verify $_get expects -1 from ArrayBuffer, after $_set(0, -1.9), on new Int8Array(new ArrayBuffer(2), 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_5600
     * @tc.name int8ArrayConstructorPart09Test056
     * @tc.desc Verify $_get expects -1 from ArrayBuffer, after $_set(0, -1.9), on new Int8Array(new ArrayBuffer(2), 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test056() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array view = new Int8Array(buf, 0);
    view.set(0, -1.9);
    assertEqualInt(-1, view.get(0));
    }

    /**
     * Verify $_get expects 77 from ArrayBuffer on new Int8Array(buf, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_5700
     * @tc.name int8ArrayConstructorPart09Test057
     * @tc.desc Verify $_get expects 77 from ArrayBuffer on new Int8Array(buf, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test057() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array viewA = new Int8Array(buf, 0);
    Int8Array viewB = new Int8Array(buf, 2);
    viewA.set(2, 77);
    assertEqualInt(77, viewB.get(0));
    }

    /**
     * Verify $_get expects 88 from ArrayBuffer on new Int8Array(buf, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_5800
     * @tc.name int8ArrayConstructorPart09Test058
     * @tc.desc Verify $_get expects 88 from ArrayBuffer on new Int8Array(buf, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test058() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array viewA = new Int8Array(buf, 0);
    Int8Array viewB = new Int8Array(buf, 2);
    viewB.set(0, 88);
    assertEqualInt(88, viewA.get(2));
    }

    /**
     * Verify $_get expects 55 from ArrayBuffer on new Int8Array(buf, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_5900
     * @tc.name int8ArrayConstructorPart09Test059
     * @tc.desc Verify $_get expects 55 from ArrayBuffer on new Int8Array(buf, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test059() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array viewA = new Int8Array(buf, 0);
    Int8Array viewB = new Int8Array(buf, 0);
    viewA.set(1, 55);
    assertEqualInt(55, viewB.get(1));
    }

    /**
     * Verify overlapping views share buffer: $_set(3, 44) via viewA visible in viewB(
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_6100
     * @tc.name int8ArrayConstructorPart09Test061
     * @tc.desc Verify overlapping views share buffer: $_set(3, 44) via viewA visible in viewB(
     * offset 3), on new Int8Array(buf, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test061() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array viewA = new Int8Array(buf, 0);
    Int8Array viewB = new Int8Array(buf, 3);
    assertEqual(1, viewB.length());
    viewA.set(3, 44);
    assertEqualInt(44, viewB.get(0));
    }

    /**
     * Verify byteLength of new Int8Array(buf, 0) returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_6200
     * @tc.name int8ArrayConstructorPart09Test062
     * @tc.desc Verify byteLength of new Int8Array(buf, 0) returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test062() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Int8Array view = new Int8Array(buf, 0);
    assertEqual(1, view.byteLength());
    }

    /**
     * Verify length expects 0 from ArrayBuffer, on new Int8Array(buf, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_6300
     * @tc.name int8ArrayConstructorPart09Test063
     * @tc.desc Verify length expects 0 from ArrayBuffer, on new Int8Array(buf, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test063() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Int8Array view = new Int8Array(buf, 1);
    assertEqual(0, view.length());
    }

    /**
     * Verify new Int8Array(buf, 2) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_6400
     * @tc.name int8ArrayConstructorPart09Test064
     * @tc.desc Verify new Int8Array(buf, 2) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test064() {
    ArrayBuffer buf = new ArrayBuffer(1);
    try {
    new Int8Array(buf, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length expects 1 from ArrayBuffer, on new Int8Array(buf, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_6500
     * @tc.name int8ArrayConstructorPart09Test065
     * @tc.desc Verify length expects 1 from ArrayBuffer, on new Int8Array(buf, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test065() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array view = new Int8Array(buf, 1);
    assertEqual(1, view.length());
    }

    /**
     * Verify length expects 0 from ArrayBuffer, on new Int8Array(buf, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_6600
     * @tc.name int8ArrayConstructorPart09Test066
     * @tc.desc Verify length expects 0 from ArrayBuffer, on new Int8Array(buf, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test066() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array view = new Int8Array(buf, 2);
    assertEqual(0, view.length());
    }

    /**
     * Verify new Int8Array(buf, 3) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_6700
     * @tc.name int8ArrayConstructorPart09Test067
     * @tc.desc Verify new Int8Array(buf, 3) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test067() {
    ArrayBuffer buf = new ArrayBuffer(2);
    try {
    new Int8Array(buf, 3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length expects 2 from ArrayBuffer, on new Int8Array(buf, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_6800
     * @tc.name int8ArrayConstructorPart09Test068
     * @tc.desc Verify length expects 2 from ArrayBuffer, on new Int8Array(buf, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test068() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Int8Array view = new Int8Array(buf, 1);
    assertEqual(2, view.length());
    }

    /**
     * Verify $_get expects 0 from ArrayBuffer, on new Int8Array(new ArrayBuffer(4), 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_6900
     * @tc.name int8ArrayConstructorPart09Test069
     * @tc.desc Verify $_get expects 0 from ArrayBuffer, on new Int8Array(new ArrayBuffer(4), 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test069() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0);
    assertEqualInt(0, view.get(0));
    assertEqualInt(0, view.get(3));
    }

    /**
     * Verify $_get expects 0 from ArrayBuffer, after $_set(0, Number.POSITIVE_INFINIT
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_8200
     * @tc.name int8ArrayConstructorPart09Test082
     * @tc.desc Verify $_get expects 0 from ArrayBuffer, after $_set(0, Number.POSITIVE_INFINIT
     * Y), on new Int8Array(new ArrayBuffer(2), 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test082() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array view = new Int8Array(buf, 0);
    view.set(0, Double.POSITIVE_INFINITY);
    assertEqualInt(0, view.get(0));
    }

    /**
     * Verify $_get expects 0 from ArrayBuffer, after $_set(0, -Number.POSITIVE_INFINI
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART09_TEST_8300
     * @tc.name int8ArrayConstructorPart09Test083
     * @tc.desc Verify $_get expects 0 from ArrayBuffer, after $_set(0, -Number.POSITIVE_INFINI
     * TY), on new Int8Array(new ArrayBuffer(2), 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart09Test083() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array view = new Int8Array(buf, 0);
    view.set(0, -Double.POSITIVE_INFINITY);
    assertEqualInt(0, view.get(0));
    }
}
