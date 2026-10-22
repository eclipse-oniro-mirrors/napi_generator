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
import basetype.common.RangeError;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayConstructorPart10Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayConstructorPart10Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify length expects 8 from ArrayBuffer on new Int8Array(buf, off)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_0100
     * @tc.name int8ArrayConstructorPart10Test001
     * @tc.desc Verify length expects 8 from ArrayBuffer on new Int8Array(buf, off)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test001() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = 0;
    Int8Array view = new Int8Array(buf, off);
    assertEqual(8, view.length());
    }

    /**
     * Verify length expects 5 from ArrayBuffer on new Int8Array(buf, off)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_0200
     * @tc.name int8ArrayConstructorPart10Test002
     * @tc.desc Verify length expects 5 from ArrayBuffer on new Int8Array(buf, off)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test002() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = 3;
    Int8Array view = new Int8Array(buf, off);
    assertEqual(5, view.length());
    }

    /**
     * Verify length expects 0 from ArrayBuffer, on new Int8Array(new ArrayBuffer(0), 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_0300
     * @tc.name int8ArrayConstructorPart10Test003
     * @tc.desc Verify length expects 0 from ArrayBuffer, on new Int8Array(new ArrayBuffer(0), 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test003() {
    ArrayBuffer buf = new ArrayBuffer(0);
    int off = 0;
    Int8Array view = new Int8Array(buf, off);
    assertEqual(0, view.length());
    }

    /**
     * Verify length expects 1 from ArrayBuffer, on new Int8Array(new ArrayBuffer(1), 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_0400
     * @tc.name int8ArrayConstructorPart10Test004
     * @tc.desc Verify length expects 1 from ArrayBuffer, on new Int8Array(new ArrayBuffer(1), 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test004() {
    ArrayBuffer buf = new ArrayBuffer(1);
    int off = 0;
    Int8Array view = new Int8Array(buf, off);
    assertEqual(1, view.length());
    }

    /**
     * Verify length expects 1000 from ArrayBuffer on new Int8Array(buf, off)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_0500
     * @tc.name int8ArrayConstructorPart10Test005
     * @tc.desc Verify length expects 1000 from ArrayBuffer on new Int8Array(buf, off)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test005() {
    ArrayBuffer buf = new ArrayBuffer(1000);
    int off = 0;
    Int8Array view = new Int8Array(buf, off);
    assertEqual(1000, view.length());
    }

    /**
     * Verify length expects 1 from ArrayBuffer, on new Int8Array(new ArrayBuffer(8), 7)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_0600
     * @tc.name int8ArrayConstructorPart10Test006
     * @tc.desc Verify length expects 1 from ArrayBuffer, on new Int8Array(new ArrayBuffer(8), 7)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test006() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = 7;
    Int8Array view = new Int8Array(buf, off);
    assertEqual(1, view.length());
    }

    /**
     * Verify length expects 0 from ArrayBuffer, on new Int8Array(new ArrayBuffer(8), 8)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_0700
     * @tc.name int8ArrayConstructorPart10Test007
     * @tc.desc Verify length expects 0 from ArrayBuffer, on new Int8Array(new ArrayBuffer(8), 8)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test007() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = 8;
    Int8Array view = new Int8Array(buf, off);
    assertEqual(0, view.length());
    }

    /**
     * Verify new Int8Array(new ArrayBuffer(8), 9) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_0800
     * @tc.name int8ArrayConstructorPart10Test008
     * @tc.desc Verify new Int8Array(new ArrayBuffer(8), 9) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test008() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = 9;
    try {
    new Int8Array(buf, off);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(new ArrayBuffer(8), 16) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_0900
     * @tc.name int8ArrayConstructorPart10Test009
     * @tc.desc Verify new Int8Array(new ArrayBuffer(8), 16) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test009() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = 16;
    try {
    new Int8Array(buf, off);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(new ArrayBuffer(8), -1) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_1000
     * @tc.name int8ArrayConstructorPart10Test010
     * @tc.desc Verify new Int8Array(new ArrayBuffer(8), -1) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test010() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = -1;
    try {
    new Int8Array(buf, off);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(new ArrayBuffer(8), -8) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_1100
     * @tc.name int8ArrayConstructorPart10Test011
     * @tc.desc Verify new Int8Array(new ArrayBuffer(8), -8) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test011() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = -8;
    try {
    new Int8Array(buf, off);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(new ArrayBuffer(8), -1.5) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_1200
     * @tc.name int8ArrayConstructorPart10Test012
     * @tc.desc Verify new Int8Array(new ArrayBuffer(8), -1.5) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test012() {
    ArrayBuffer buf = new ArrayBuffer(8);
    double off = -1.5;
    try {
    new Int8Array(buf, off);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset of new Int8Array(new ArrayBuffer(8), -0.0) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_1300
     * @tc.name int8ArrayConstructorPart10Test013
     * @tc.desc Verify byteOffset of new Int8Array(new ArrayBuffer(8), -0.0) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test013() {
    ArrayBuffer buf = new ArrayBuffer(8);
    double off = -0.0;
    Int8Array view = new Int8Array(buf, off);
    assertEqual(0, view.byteOffset());
    }

    /**
     * Verify new Int8Array(buf, 0.5) truncates byteOffset to 0 and constructs view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_1400
     * @tc.name int8ArrayConstructorPart10Test014
     * @tc.desc Verify new Int8Array(buf, 0.5) truncates byteOffset to 0 and constructs view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test014() {
    ArrayBuffer buf = new ArrayBuffer(8);
    double off = 0.5;
    Int8Array view = new Int8Array(buf, off);
    int r1 = view.byteOffset();
    int e1 = 0;
    assertEqual(e1, r1);
    int r2 = view.length();
    int e2 = 8;
    assertEqual(e2, r2);
    }

    /**
     * Verify new Int8Array(buf, NaN) truncates byteOffset to 0 and constructs view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_1500
     * @tc.name int8ArrayConstructorPart10Test015
     * @tc.desc Verify new Int8Array(buf, NaN) truncates byteOffset to 0 and constructs view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test015() {
    ArrayBuffer buf = new ArrayBuffer(8);
    double off = Double.NaN;
    Int8Array view = new Int8Array(buf, off);
    int r1 = view.byteOffset();
    int e1 = 0;
    assertEqual(e1, r1);
    int r2 = view.length();
    int e2 = 8;
    assertEqual(e2, r2);
    }

    /**
     * Verify new Int8Array(new ArrayBuffer(8), Number.POSITIVE_INFINITY) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_1600
     * @tc.name int8ArrayConstructorPart10Test016
     * @tc.desc Verify new Int8Array(new ArrayBuffer(8), Number.POSITIVE_INFINITY) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test016() {
    ArrayBuffer buf = new ArrayBuffer(8);
    double off = Double.POSITIVE_INFINITY;
    try {
    new Int8Array(buf, off);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(new ArrayBuffer(8), Number.NEGATIVE_INFINITY) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_1700
     * @tc.name int8ArrayConstructorPart10Test017
     * @tc.desc Verify new Int8Array(new ArrayBuffer(8), Number.NEGATIVE_INFINITY) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test017() {
    ArrayBuffer buf = new ArrayBuffer(8);
    double off = Double.NEGATIVE_INFINITY;
    try {
    new Int8Array(buf, off);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(new ArrayBuffer(8), 1000000) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_1800
     * @tc.name int8ArrayConstructorPart10Test018
     * @tc.desc Verify new Int8Array(new ArrayBuffer(8), 1000000) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test018() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = 1000000;
    try {
    new Int8Array(buf, off);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length of new Int8Array(buf, off) returns buf.byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_1900
     * @tc.name int8ArrayConstructorPart10Test019
     * @tc.desc Verify length of new Int8Array(buf, off) returns buf.byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test019() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = 0;
    Int8Array view = new Int8Array(buf, off);
    int r1 = view.length();
    int e1 = buf.byteLength();
    assertEqual(e1, r1);
    }

    /**
     * Verify byteLength of new Int8Array(buf, off) returns 6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_2000
     * @tc.name int8ArrayConstructorPart10Test020
     * @tc.desc Verify byteLength of new Int8Array(buf, off) returns 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test020() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = 2;
    Int8Array view = new Int8Array(buf, off);
    int r1 = view.byteLength();
    int e1 = 6;
    assertEqual(e1, r1);
    }

    /**
     * Verify byteOffset of new Int8Array(buf, off) returns 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_2100
     * @tc.name int8ArrayConstructorPart10Test021
     * @tc.desc Verify byteOffset of new Int8Array(buf, off) returns 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test021() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = 5;
    Int8Array view = new Int8Array(buf, off);
    int r1 = view.byteOffset();
    int e1 = 5;
    assertEqual(e1, r1);
    }

    /**
     * Verify buffer property returns buf on new Int8Array(buf, off)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_2200
     * @tc.name int8ArrayConstructorPart10Test022
     * @tc.desc Verify buffer property returns buf on new Int8Array(buf, off)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test022() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = 0;
    Int8Array view = new Int8Array(buf, off);
    ArrayBuffer r1 = view.buffer();
    ArrayBuffer e1 = buf;
    assertEqual(e1, r1);
    }

    /**
     * Verify BYTES_PER_ELEMENT equals 1 for Int8Array view on new Int8Array(buf, off)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_2300
     * @tc.name int8ArrayConstructorPart10Test023
     * @tc.desc Verify BYTES_PER_ELEMENT equals 1 for Int8Array view on new Int8Array(buf, off)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test023() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = 0;
    Int8Array view = new Int8Array(buf, off);
    int r1 = view.BYTES_PER_ELEMENT;
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify length of new Int8Array(buf, off) returns buf.byteLength - off
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_2400
     * @tc.name int8ArrayConstructorPart10Test024
     * @tc.desc Verify length of new Int8Array(buf, off) returns buf.byteLength - off
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test024() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = 7;
    Int8Array view = new Int8Array(buf, off);
    assertEqual(buf.byteLength() - off, view.length());
    }

    /**
     * Verify byteOffset of new Int8Array(new ArrayBuffer(8), 0) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_3000
     * @tc.name int8ArrayConstructorPart10Test030
     * @tc.desc Verify byteOffset of new Int8Array(new ArrayBuffer(8), 0) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test030() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = 0;
    Int8Array view = new Int8Array(buf, off);
    assertEqual(0, view.byteOffset());
    }

    /**
     * Verify byteOffset of new Int8Array(buf, off) returns 8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_3100
     * @tc.name int8ArrayConstructorPart10Test031
     * @tc.desc Verify byteOffset of new Int8Array(buf, off) returns 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test031() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = 8;
    Int8Array view = new Int8Array(buf, off);
    assertEqual(8, view.byteOffset());
    }

    /**
     * Verify byteLength of new Int8Array(buf, off) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_4200
     * @tc.name int8ArrayConstructorPart10Test042
     * @tc.desc Verify byteLength of new Int8Array(buf, off) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test042() {
    ArrayBuffer buf = new ArrayBuffer(0);
    int off = 0;
    Int8Array view = new Int8Array(buf, off);
    assertEqual(0, view.byteLength());
    }

    /**
     * Verify forEach expects 0 from ArrayBuffer, on new Int8Array(new ArrayBuffer(0), 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_4300
     * @tc.name int8ArrayConstructorPart10Test043
     * @tc.desc Verify forEach expects 0 from ArrayBuffer, on new Int8Array(new ArrayBuffer(0), 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test043() {
    ArrayBuffer buf = new ArrayBuffer(0);
    int off = 0;
    Int8Array view = new Int8Array(buf, off);
    int[] count = {0};
    view.forEach((v) -> {
    if (Double.compare(v, 0.0) == 0) {
    count[0] = count[0] + 1;
    }
    count[0] = count[0] + 1;
    });
    assertEqual(0, count[0]);
    }

    /**
     * Verify at(0) returns undefined for zero-length Int8Array view on new Int8Array(buf, off)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_4400
     * @tc.name int8ArrayConstructorPart10Test044
     * @tc.desc Verify at(0) returns undefined for zero-length Int8Array view on new Int8Array(buf, off)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test044() {
    ArrayBuffer buf = new ArrayBuffer(0);
    int off = 0;
    Int8Array view = new Int8Array(buf, off);
    assertNull(view.at(0));
    }

    /**
     * Verify $_set expects RangeError from ArrayBuffer throws exception, with $_set(0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_4500
     * @tc.name int8ArrayConstructorPart10Test045
     * @tc.desc Verify $_set expects RangeError from ArrayBuffer throws exception, with $_set(0
     *, 1), on new Int8Array(new ArrayBuffer(0), 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test045() {
    ArrayBuffer buf = new ArrayBuffer(0);
    int off = 0;
    Int8Array view = new Int8Array(buf, off);
    try {
    view.set(0, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(new ArrayBuffer(0), 1) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_4600
     * @tc.name int8ArrayConstructorPart10Test046
     * @tc.desc Verify new Int8Array(new ArrayBuffer(0), 1) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test046() {
    ArrayBuffer buf = new ArrayBuffer(0);
    int off = 1;
    try {
    new Int8Array(buf, off);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach expects 0 from ArrayBuffer, on new Int8Array(new ArrayBuffer(8), 8)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_4700
     * @tc.name int8ArrayConstructorPart10Test047
     * @tc.desc Verify forEach expects 0 from ArrayBuffer, on new Int8Array(new ArrayBuffer(8), 8)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test047() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off = 8;
    Int8Array view = new Int8Array(buf, off);
    int[] count = {0};
    view.forEach((v) -> {
    if (Double.compare(v, 0.0) == 0) {
    count[0] = count[0] + 1;
    }
    count[0] = count[0] + 1;
    });
    assertEqual(0, count[0]);
    }

    /**
     * Verify new Int8Array(new ArrayBuffer(1000), 1001) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_4800
     * @tc.name int8ArrayConstructorPart10Test048
     * @tc.desc Verify new Int8Array(new ArrayBuffer(1000), 1001) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test048() {
    ArrayBuffer buf = new ArrayBuffer(1000);
    int off = 1001;
    try {
    new Int8Array(buf, off);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach expects 3 from ArrayBuffer on new Int8Array(buf, off)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_5000
     * @tc.name int8ArrayConstructorPart10Test050
     * @tc.desc Verify forEach expects 3 from ArrayBuffer on new Int8Array(buf, off)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test050() {
    ArrayBuffer buf = new ArrayBuffer(4);
    int off = 0;
    Int8Array view = new Int8Array(buf, off);
    int[] lastIdx = {-1};
    int[] cnt = {0};
    view.forEach((v) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    lastIdx[0] = cnt[0];
    cnt[0] = cnt[0] + 1;
    });
    assertEqual(3, lastIdx[0]);
    }

    /**
     * Verify set(src, 2) throws RangeError when source overflows the view on new Int8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_5300
     * @tc.name int8ArrayConstructorPart10Test053
     * @tc.desc Verify set(src, 2) throws RangeError when source overflows the view on new Int8
     * Array(new ArrayBuffer(4), 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart10Test053() {
    ArrayBuffer buf = new ArrayBuffer(4);
    int off = 0;
    Int8Array view = new Int8Array(buf, off);
    Int8Array src = new Int8Array(3);
    src.set(0, 1);
    src.set(1, 2);
    src.set(2, 3);
    try {
    view.set(src, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set expects 0 from ArrayBuffer, with $_set(0, Number.NEGATIVE_INFINITY
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART10_TEST_6300
     * @tc.name int8ArrayConstructorPart10Test063
     * @tc.desc Verify $_set expects 0 from ArrayBuffer, with $_set(0, Number.NEGATIVE_INFINITY
     *), on new Int8Array(buf, off)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
