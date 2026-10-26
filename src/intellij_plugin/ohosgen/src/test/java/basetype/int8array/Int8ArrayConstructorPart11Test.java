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
 * Int8ArrayConstructorPart11Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayConstructorPart11Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify length expects 4 from ArrayBuffer, on new Int8Array(new ArrayBuffer(4), 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_0100
     * @tc.name int8ArrayConstructorPart11Test001
     * @tc.desc Verify length expects 4 from ArrayBuffer, on new Int8Array(new ArrayBuffer(4), 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test001() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    assertEqual(4, view.length());
    }

    /**
     * Verify byteLength of new Int8Array(buf, 0, 0) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_0200
     * @tc.name int8ArrayConstructorPart11Test002
     * @tc.desc Verify byteLength of new Int8Array(buf, 0, 0) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test002() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int8Array view = new Int8Array(buf, 0, 0);
    assertEqual(0, view.length());
    assertEqual(0, view.byteLength());
    }

    /**
     * Verify length expects 8 from ArrayBuffer on new Int8Array(buf, 0, 8)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_0300
     * @tc.name int8ArrayConstructorPart11Test003
     * @tc.desc Verify length expects 8 from ArrayBuffer on new Int8Array(buf, 0, 8)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test003() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 0, 8);
    assertEqual(8, view.length());
    }

    /**
     * Verify byteOffset and length of new Int8Array(buf, 4, 4) both return 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_0400
     * @tc.name int8ArrayConstructorPart11Test004
     * @tc.desc Verify byteOffset and length of new Int8Array(buf, 4, 4) both return 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test004() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 4, 4);
    assertEqual(4, view.length());
    assertEqual(4, view.byteOffset());
    }

    /**
     * Verify byteOffset of new Int8Array(buf, 4, 0) returns 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_0500
     * @tc.name int8ArrayConstructorPart11Test005
     * @tc.desc Verify byteOffset of new Int8Array(buf, 4, 0) returns 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test005() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 4, 0);
    assertEqual(0, view.length());
    assertEqual(4, view.byteOffset());
    }

    /**
     * Verify byteOffset of new Int8Array(buf, 0, 0) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_0600
     * @tc.name int8ArrayConstructorPart11Test006
     * @tc.desc Verify byteOffset of new Int8Array(buf, 0, 0) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test006() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 0);
    assertEqual(0, view.length());
    assertEqual(0, view.byteOffset());
    }

    /**
     * Verify $_get expects 1 from ArrayBuffer on new Int8Array(buf, 0, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_0700
     * @tc.name int8ArrayConstructorPart11Test007
     * @tc.desc Verify $_get expects 1 from ArrayBuffer on new Int8Array(buf, 0, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test007() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Int8Array view = new Int8Array(buf, 0, 1);
    assertEqual(1, view.length());
    assertEqualInt(0, view.get(0));
    }

    /**
     * Verify byteLength of new Int8Array(buf, 0, 4) returns 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_0800
     * @tc.name int8ArrayConstructorPart11Test008
     * @tc.desc Verify byteLength of new Int8Array(buf, 0, 4) returns 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test008() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    assertEqual(4, view.length());
    assertEqual(4, view.byteLength());
    }

    /**
     * Verify new Int8Array(buf, 0, 1024) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_0900
     * @tc.name int8ArrayConstructorPart11Test009
     * @tc.desc Verify new Int8Array(buf, 0, 1024) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test009() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Int8Array view = new Int8Array(buf, 0, 1024);
    assertEqual(1024, view.length());
    }

    /**
     * Verify new Int8Array(buf, 0, 7) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_1000
     * @tc.name int8ArrayConstructorPart11Test010
     * @tc.desc Verify new Int8Array(buf, 0, 7) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test010() {
    ArrayBuffer buf = new ArrayBuffer(7);
    Int8Array view = new Int8Array(buf, 0, 7);
    assertEqual(7, view.length());
    }

    /**
     * Verify $_get expects 42 from ArrayBuffer, on new Int8Array(buf, 0, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_1100
     * @tc.name int8ArrayConstructorPart11Test011
     * @tc.desc Verify $_get expects 42 from ArrayBuffer, on new Int8Array(buf, 0, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test011() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Int8Array writer = new Int8Array(buf, 0, 3);
    writer.set(0, 42);
    writer.set(1, -7);
    writer.set(2, 100);
    Int8Array view = new Int8Array(buf, 0, 3);
    assertEqualInt(42, view.get(0));
    assertEqualInt(-7, view.get(1));
    assertEqualInt(100, view.get(2));
    }

    /**
     * Verify byteOffset of new Int8Array(buf, 0, 4) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_1300
     * @tc.name int8ArrayConstructorPart11Test013
     * @tc.desc Verify byteOffset of new Int8Array(buf, 0, 4) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test013() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    assertEqual(0, view.byteOffset());
    }

    /**
     * Verify new Int8Array(buf, 1, 3) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_1400
     * @tc.name int8ArrayConstructorPart11Test014
     * @tc.desc Verify new Int8Array(buf, 1, 3) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test014() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 1, 3);
    assertEqual(1, view.byteOffset());
    assertEqual(3, view.length());
    }

    /**
     * Verify byteOffset of new Int8Array(buf, 4, 4) returns 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_1500
     * @tc.name int8ArrayConstructorPart11Test015
     * @tc.desc Verify byteOffset of new Int8Array(buf, 4, 4) returns 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test015() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 4, 4);
    assertEqual(4, view.byteOffset());
    }

    /**
     * Verify new Int8Array(buf, 3, 1) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_1600
     * @tc.name int8ArrayConstructorPart11Test016
     * @tc.desc Verify new Int8Array(buf, 3, 1) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test016() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 3, 1);
    assertEqual(3, view.byteOffset());
    assertEqual(1, view.length());
    }

    /**
     * Verify zero-length view new Int8Array(buf, 4, 0) keeps byteOffset 4 and length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_1700
     * @tc.name int8ArrayConstructorPart11Test017
     * @tc.desc Verify zero-length view new Int8Array(buf, 4, 0) keeps byteOffset 4 and length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test017() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 4, 0);
    assertEqual(4, view.byteOffset());
    assertEqual(0, view.length());
    }

    /**
     * Verify new Int8Array(buf, offset, 4) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_1800
     * @tc.name int8ArrayConstructorPart11Test018
     * @tc.desc Verify new Int8Array(buf, offset, 4) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test018() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int offset = 2;
    Int8Array view = new Int8Array(buf, offset, 4);
    assertEqual(2, view.byteOffset());
    }

    /**
     * Verify length expects 0 from ArrayBuffer on new Int8Array(buf, 0, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_1900
     * @tc.name int8ArrayConstructorPart11Test019
     * @tc.desc Verify length expects 0 from ArrayBuffer on new Int8Array(buf, 0, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test019() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 0);
    assertEqual(0, view.length());
    }

    /**
     * Verify length expects 1 from ArrayBuffer on new Int8Array(buf, 0, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_2000
     * @tc.name int8ArrayConstructorPart11Test020
     * @tc.desc Verify length expects 1 from ArrayBuffer on new Int8Array(buf, 0, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test020() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 1);
    assertEqual(1, view.length());
    }

    /**
     * Verify length expects 4 from ArrayBuffer, on new Int8Array(new ArrayBuffer(8), 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_2100
     * @tc.name int8ArrayConstructorPart11Test021
     * @tc.desc Verify length expects 4 from ArrayBuffer, on new Int8Array(new ArrayBuffer(8), 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test021() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 0, 4);
    assertEqual(4, view.length());
    }

    /**
     * Verify new Int8Array(buf, 0, len) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_2200
     * @tc.name int8ArrayConstructorPart11Test022
     * @tc.desc Verify new Int8Array(buf, 0, len) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test022() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int len = 5;
    Int8Array view = new Int8Array(buf, 0, len);
    assertEqual(5, view.length());
    }

    /**
     * Verify byteLength of new Int8Array(buf, 0, 3) returns 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_2300
     * @tc.name int8ArrayConstructorPart11Test023
     * @tc.desc Verify byteLength of new Int8Array(buf, 0, 3) returns 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test023() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 3);
    assertEqual(3, view.length());
    assertEqual(3, view.byteLength());
    }

    /**
     * Verify new Int8Array(buf, 5, 0) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_2400
     * @tc.name int8ArrayConstructorPart11Test024
     * @tc.desc Verify new Int8Array(buf, 5, 0) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test024() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Int8Array view = new Int8Array(buf, 5, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, -1, 0) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_2500
     * @tc.name int8ArrayConstructorPart11Test025
     * @tc.desc Verify new Int8Array(buf, -1, 0) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test025() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Int8Array view = new Int8Array(buf, -1, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, 2147483647, 0) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_2600
     * @tc.name int8ArrayConstructorPart11Test026
     * @tc.desc Verify new Int8Array(buf, 2147483647, 0) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test026() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Int8Array view = new Int8Array(buf, 2147483647, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, -2147483648, 0) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_2700
     * @tc.name int8ArrayConstructorPart11Test027
     * @tc.desc Verify new Int8Array(buf, -2147483648, 0) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test027() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Int8Array view = new Int8Array(buf, Integer.MIN_VALUE, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, 0, 5) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_2800
     * @tc.name int8ArrayConstructorPart11Test028
     * @tc.desc Verify new Int8Array(buf, 0, 5) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test028() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Int8Array view = new Int8Array(buf, 0, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, 0, -1) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_2900
     * @tc.name int8ArrayConstructorPart11Test029
     * @tc.desc Verify new Int8Array(buf, 0, -1) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test029() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Int8Array view = new Int8Array(buf, 0, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, 0, -2147483648) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_3000
     * @tc.name int8ArrayConstructorPart11Test030
     * @tc.desc Verify new Int8Array(buf, 0, -2147483648) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test030() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Int8Array view = new Int8Array(buf, 0, Integer.MIN_VALUE);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, 0, 2147483647) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_3100
     * @tc.name int8ArrayConstructorPart11Test031
     * @tc.desc Verify new Int8Array(buf, 0, 2147483647) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test031() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Int8Array view = new Int8Array(buf, 0, 2147483647);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, 0, 1000000) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_3200
     * @tc.name int8ArrayConstructorPart11Test032
     * @tc.desc Verify new Int8Array(buf, 0, 1000000) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test032() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Int8Array view = new Int8Array(buf, 0, 1000000);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, 4, 1) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_3300
     * @tc.name int8ArrayConstructorPart11Test033
     * @tc.desc Verify new Int8Array(buf, 4, 1) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test033() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Int8Array view = new Int8Array(buf, 4, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, 1, 4) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_3400
     * @tc.name int8ArrayConstructorPart11Test034
     * @tc.desc Verify new Int8Array(buf, 1, 4) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test034() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Int8Array view = new Int8Array(buf, 1, 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, 5, 4) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_3500
     * @tc.name int8ArrayConstructorPart11Test035
     * @tc.desc Verify new Int8Array(buf, 5, 4) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test035() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    Int8Array view = new Int8Array(buf, 5, 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, 3, 3) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_3600
     * @tc.name int8ArrayConstructorPart11Test036
     * @tc.desc Verify new Int8Array(buf, 3, 3) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test036() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Int8Array view = new Int8Array(buf, 3, 3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset of new Int8Array(buf, 2, 4) returns 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_3700
     * @tc.name int8ArrayConstructorPart11Test037
     * @tc.desc Verify byteOffset of new Int8Array(buf, 2, 4) returns 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test037() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 2, 4);
    assertEqual(2, view.byteOffset());
    assertEqual(4, view.length());
    }

    /**
     * Verify byteOffset + byteLength of new Int8Array(buf, 2, 4) returns 6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_4000
     * @tc.name int8ArrayConstructorPart11Test040
     * @tc.desc Verify byteOffset + byteLength of new Int8Array(buf, 2, 4) returns 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test040() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 2, 4);
    assertEqual(6, view.byteOffset() + view.byteLength());
    }

    /**
     * Verify new Int8Array(buf, 3, 5) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_4100
     * @tc.name int8ArrayConstructorPart11Test041
     * @tc.desc Verify new Int8Array(buf, 3, 5) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test041() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 3, 5);
    assertEqual(3, view.byteOffset());
    }

    /**
     * Verify buffer property returns buf on new Int8Array(buf, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_4200
     * @tc.name int8ArrayConstructorPart11Test042
     * @tc.desc Verify buffer property returns buf on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test042() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    assertEqual(buf, view.buffer());
    }

    /**
     * Verify $_get expects 0 from ArrayBuffer, on new Int8Array(buf, 0, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_4300
     * @tc.name int8ArrayConstructorPart11Test043
     * @tc.desc Verify $_get expects 0 from ArrayBuffer, on new Int8Array(buf, 0, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test043() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Int8Array view = new Int8Array(buf, 0, 3);
    assertEqualInt(0, view.get(0));
    assertEqualInt(0, view.get(1));
    assertEqualInt(0, view.get(2));
    }

    /**
     * Verify BYTES_PER_ELEMENT equals 1 for new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_4900
     * @tc.name int8ArrayConstructorPart11Test049
     * @tc.desc Verify BYTES_PER_ELEMENT equals 1 for new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test049() {
    assertEqual(1, new Int8Array(1).BYTES_PER_ELEMENT);
    }

    /**
     * Verify $_get expects 77 from ArrayBuffer on new Int8Array(buf, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_5200
     * @tc.name int8ArrayConstructorPart11Test052
     * @tc.desc Verify $_get expects 77 from ArrayBuffer on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test052() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array viewA = new Int8Array(buf, 0, 4);
    Int8Array viewB = new Int8Array(buf, 0, 4);
    viewA.set(1, 77);
    assertEqualInt(77, viewB.get(1));
    }

    /**
     * Verify $_get expects 88 from ArrayBuffer on new Int8Array(buf, 0, 8)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_5300
     * @tc.name int8ArrayConstructorPart11Test053
     * @tc.desc Verify $_get expects 88 from ArrayBuffer on new Int8Array(buf, 0, 8)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test053() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array viewA = new Int8Array(buf, 0, 8);
    Int8Array viewB = new Int8Array(buf, 4, 4);
    viewA.set(5, 88);
    assertEqualInt(88, viewB.get(1));
    }

    /**
     * Verify $_get expects 55 from ArrayBuffer on new Int8Array(buf, 0, 8)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_5500
     * @tc.name int8ArrayConstructorPart11Test055
     * @tc.desc Verify $_get expects 55 from ArrayBuffer on new Int8Array(buf, 0, 8)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test055() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array viewBig = new Int8Array(buf, 0, 8);
    Int8Array viewSmall = new Int8Array(buf, 4, 4);
    viewBig.set(6, 55);
    assertEqualInt(55, viewSmall.get(2));
    }

    /**
     * Verify subarray(1, 3) shares buffer, $_set on subarray reflected in original ex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_5600
     * @tc.name int8ArrayConstructorPart11Test056
     * @tc.desc Verify subarray(1, 3) shares buffer, $_set on subarray reflected in original expects 44 from
     * ArrayBuffer on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test056() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    Int8Array sub = view.subarray(1, 3);
    sub.set(0, 44);
    assertEqualInt(44, view.get(1));
    }

    /**
     * Verify $_set(0, 99) then $_get(0) returns 99 on new Int8Array(buf, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_5800
     * @tc.name int8ArrayConstructorPart11Test058
     * @tc.desc Verify $_set(0, 99) then $_get(0) returns 99 on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test058() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    view.set(0, 99);
    Integer r1 = view.get(0);
    int e1 = 99;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get expects 10 from ArrayBuffer on new Int8Array(buf, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_5900
     * @tc.name int8ArrayConstructorPart11Test059
     * @tc.desc Verify $_get expects 10 from ArrayBuffer on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test059() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array viewA = new Int8Array(buf, 0, 4);
    Int8Array viewB = new Int8Array(buf, 0, 4);
    viewA.set(0, 10);
    viewB.set(1, 20);
    assertEqualInt(10, viewA.get(0));
    assertEqualInt(20, viewA.get(1));
    assertEqualInt(10, viewB.get(0));
    assertEqualInt(20, viewB.get(1));
    }

    /**
     * Verify overlapping views viewA/viewB share buffer: $_set via viewA visible in v
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_6200
     * @tc.name int8ArrayConstructorPart11Test062
     * @tc.desc Verify overlapping views viewA/viewB share buffer: $_set via viewA visible in viewB on new
     * Int8Array(buf, 0, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart11Test062() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array viewA = new Int8Array(buf, 0, 2);
    Int8Array viewB = new Int8Array(buf, 0, 2);
    viewA.set(0, 5);
    assertEqualInt(5, viewB.get(0));
    viewB.set(1, 8);
    assertEqualInt(8, viewA.get(1));
    }

    /**
     * Verify $_set(10, 99) on new Int8Array(buf, 0, 2) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART11_TEST_6900
     * @tc.name int8ArrayConstructorPart11Test069
     * @tc.desc Verify $_set(10, 99) on new Int8Array(buf, 0, 2) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
