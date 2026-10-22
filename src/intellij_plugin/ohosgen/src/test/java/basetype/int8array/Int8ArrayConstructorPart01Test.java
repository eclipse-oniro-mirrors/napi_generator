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
import basetype.common.IteratorResult;
import basetype.common.RangeError;
import basetype.common.TypeError;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayConstructorPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayConstructorPart01Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify length expects 0 on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_0100
     * @tc.name int8ArrayConstructorPart01Test001
     * @tc.desc Verify length expects 0 on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test001() {
    Int8Array arr = new Int8Array();
    assertEqual(0, arr.length());
    }

    /**
     * Verify two independent new Int8Array() instances are not equal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_0200
     * @tc.name int8ArrayConstructorPart01Test002
     * @tc.desc Verify two independent new Int8Array() instances are not equal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test002() {
    Int8Array a = new Int8Array();
    Int8Array b = new Int8Array();
    assertNotEqual(b, a);
    }

    /**
     * Verify ArrayBuffer.isView returns true on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_0300
     * @tc.name int8ArrayConstructorPart01Test003
     * @tc.desc Verify ArrayBuffer.isView returns true on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test003() {
    Int8Array arr = new Int8Array();
    boolean isView = ArrayBuffer.isView(arr);
    assertTrue(isView);
    }

    /**
     * Verify byteOffset of new Int8Array() returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_0400
     * @tc.name int8ArrayConstructorPart01Test004
     * @tc.desc  Verify byteOffset of new Int8Array() returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test004() {
    Int8Array arr = new Int8Array();
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify byteLength equals length * BYTES_PER_ELEMENT for new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_0500
     * @tc.name int8ArrayConstructorPart01Test005
     * @tc.desc  Verify byteLength equals length * BYTES_PER_ELEMENT for new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test005() {
    Int8Array arr = new Int8Array();
    int byteLenResult = arr.byteLength();
    int computedByteLen = arr.length() * arr.BYTES_PER_ELEMENT;
    assertEqual(computedByteLen, byteLenResult);
    }

    /**
     * Verify buffer.byteLength of new Int8Array() returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_0600
     * @tc.name int8ArrayConstructorPart01Test006
     * @tc.desc  Verify buffer.byteLength of new Int8Array() returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test006() {
    Int8Array arr = new Int8Array();
    assertEqual(0, arr.buffer().byteLength());
    }

    /**
     * Verify new Int8Array(arr.buffer) shares the same underlying ArrayBuffer as arr on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_0700
     * @tc.name int8ArrayConstructorPart01Test007
     * @tc.desc Verify new Int8Array(arr.buffer) shares the same underlying ArrayBuffer as arr on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test007() {
    Int8Array arr = new Int8Array();
    Int8Array view = new Int8Array(arr.buffer());
    ArrayBuffer r1 = view.buffer();
    ArrayBuffer e1 = arr.buffer();
    assertEqual(e1, r1);
    }

    /**
     * Verify two independent new Int8Array() have distinct underlying ArrayBuffers
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_0800
     * @tc.name int8ArrayConstructorPart01Test008
     * @tc.desc Verify two independent new Int8Array() have distinct underlying ArrayBuffers
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test008() {
    Int8Array a = new Int8Array();
    Int8Array b = new Int8Array();
    assertNotEqual(b.buffer(), a.buffer());
    }

    /**
     * Verify buffer.byteLength of new Int8Array() returns arr.byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_0900
     * @tc.name int8ArrayConstructorPart01Test009
     * @tc.desc  Verify buffer.byteLength of new Int8Array() returns arr.byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test009() {
    Int8Array arr = new Int8Array();
    int bufByteLen = arr.buffer().byteLength();
    int arrByteLen = arr.byteLength();
    assertEqual(arrByteLen, bufByteLen);
    }

    /**
     * Verify $_get expects RangeError throws exception, with $_get(0), on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_1000
     * @tc.name int8ArrayConstructorPart01Test010
     * @tc.desc Verify $_get expects RangeError throws exception, with $_get(0), on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test010() {
    Int8Array arr = new Int8Array();
    try {
    arr.get(0);
    fail();
    } catch (RangeError e) {
    String errName = e.getClass().getSimpleName();
    assertEqual("RangeError", errName);
    }
    }

    /**
     * Verify $_get expects RangeError throws exception, with $_get(-1), on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_1100
     * @tc.name int8ArrayConstructorPart01Test011
     * @tc.desc Verify $_get expects RangeError throws exception, with $_get(-1), on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test011() {
    Int8Array arr = new Int8Array();
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    String errName = e.getClass().getSimpleName();
    assertEqual("RangeError", errName);
    }
    }

    /**
     * Verify $_get expects RangeError throws exception, with $_get(2147483647), on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_1200
     * @tc.name int8ArrayConstructorPart01Test012
     * @tc.desc Verify $_get expects RangeError throws exception, with $_get(2147483647), on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test012() {
    Int8Array arr = new Int8Array();
    try {
    arr.get(2147483647);
    fail();
    } catch (RangeError e) {
    String errName = e.getClass().getSimpleName();
    assertEqual("RangeError", errName);
    }
    }

    /**
     * Verify at returns undefined on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_1300
     * @tc.name int8ArrayConstructorPart01Test013
     * @tc.desc Verify at returns undefined on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test013() {
    Int8Array arr = new Int8Array();
    assertNull(arr.at(0));
    }

    /**
     * Verify indexOf expects -1 on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_1400
     * @tc.name int8ArrayConstructorPart01Test014
     * @tc.desc Verify indexOf expects -1 on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test014() {
    Int8Array arr = new Int8Array();
    assertEqual(-1, arr.indexOf(0));
    }

    /**
     * Verify lastIndexOf expects -1 on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_1500
     * @tc.name int8ArrayConstructorPart01Test015
     * @tc.desc Verify lastIndexOf expects -1 on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test015() {
    Int8Array arr = new Int8Array();
    assertEqual(-1, arr.lastIndexOf(0));
    }

    /**
     * Verify includes(0) on new Int8Array() returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_1600
     * @tc.name int8ArrayConstructorPart01Test016
     * @tc.desc Verify includes(0) on new Int8Array() returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test016() {
    Int8Array arr = new Int8Array();
    boolean includesResult = arr.includes(0);
    assertFalse(includesResult);
    }

    /**
     * Verify find returns undefined on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_1700
     * @tc.name int8ArrayConstructorPart01Test017
     * @tc.desc Verify find returns undefined on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test017() {
    Int8Array arr = new Int8Array();
    Integer r = arr.find((v) -> {
        return v == 0;
        });
    assertNull(r);
    }

    /**
     * Verify findIndex expects -1 on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_1800
     * @tc.name int8ArrayConstructorPart01Test018
     * @tc.desc Verify findIndex expects -1 on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test018() {
    Int8Array arr = new Int8Array();
    int r = arr.findIndex((v) -> {
        return v == 0;
        });
    assertEqual(-1, r);
    }

    /**
     * Verify keys() iterator on new Int8Array() is done immediately
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_1900
     * @tc.name int8ArrayConstructorPart01Test019
     * @tc.desc Verify keys() iterator on new Int8Array() is done immediately
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test019() {
    Int8Array arr = new Int8Array();
    Int8Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    boolean isDone = r.done;
    assertTrue(isDone);
    }

    /**
     * Verify forEach expects 0 on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_2000
     * @tc.name int8ArrayConstructorPart01Test020
     * @tc.desc Verify forEach expects 0 on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test020() {
    Int8Array arr = new Int8Array();
    int[] count = {0};
    arr.forEach((v) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    count[0]++;
    });
    assertEqual(0, count[0]);
    }

    /**
     * Verify map callback invocation count is 0, on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_2100
     * @tc.name int8ArrayConstructorPart01Test021
     * @tc.desc Verify map callback invocation count is 0, on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test021() {
    Int8Array arr = new Int8Array();
    int[] count = {0};
    Int8Array r = arr.map((v) -> {
        count[0]++;
        return v;
    });
    assertEqual(0, count[0]);
    int r1 = r.length();
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify map result array length is 0, on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_2200
     * @tc.name int8ArrayConstructorPart01Test022
     * @tc.desc Verify map result array length is 0, on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test022() {
    Int8Array arr = new Int8Array();
    Int8Array r = arr.map((v) -> {
        return v;
        });
    int mapLen = r.length();
    assertEqual(0, mapLen);
    }

    /**
     * Verify map expects arr on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_2300
     * @tc.name int8ArrayConstructorPart01Test023
     * @tc.desc Verify map expects arr on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test023() {
    Int8Array arr = new Int8Array();
    Int8Array r = arr.map((v) -> {
        return v;
        });
    assertNotEqual(arr, r);
    }

    /**
     * Verify filter callback invocation count is 0, on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_2400
     * @tc.name int8ArrayConstructorPart01Test024
     * @tc.desc Verify filter callback invocation count is 0, on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test024() {
    Int8Array arr = new Int8Array();
    int[] count = {0};
    Int8Array r = arr.filter((v) -> {
        if (v < INT8_MIN || v > INT8_MAX) {
        return false;
        }
            count[0]++;
        return true;
        });
    assertEqual(0, count[0]);
    int r1 = r.length();
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify filter result array length is 0, on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_2500
     * @tc.name int8ArrayConstructorPart01Test025
     * @tc.desc Verify filter result array length is 0, on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test025() {
    Int8Array arr = new Int8Array();
    Int8Array r = arr.filter((v) -> {
        if (v < INT8_MIN || v > INT8_MAX) {
        return false;
        }
        return true;
        });
    int filterLen = r.length();
    assertEqual(0, filterLen);
    }

    /**
     * Verify filter expects arr on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_2600
     * @tc.name int8ArrayConstructorPart01Test026
     * @tc.desc Verify filter expects arr on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test026() {
    Int8Array arr = new Int8Array();
    Int8Array r = arr.filter((v) -> {
        if (v < INT8_MIN || v > INT8_MAX) {
        return false;
        }
        return true;
        });
    assertNotEqual(arr, r);
    }

    /**
     * Verify some() on empty new Int8Array() returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_2700
     * @tc.name int8ArrayConstructorPart01Test027
     * @tc.desc Verify some() on empty new Int8Array() returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test027() {
    Int8Array arr = new Int8Array();
    boolean r = arr.some((v) -> {
        if (v < INT8_MIN || v > INT8_MAX) {
        return false;
        }
        return true;
        });
    assertFalse(r);
    }

    /**
     * Verify every() on empty new Int8Array() returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_2800
     * @tc.name int8ArrayConstructorPart01Test028
     * @tc.desc Verify every() on empty new Int8Array() returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test028() {
    Int8Array arr = new Int8Array();
    boolean r = arr.every((v) -> {
        if (v < INT8_MIN || v > INT8_MAX) {
        return false;
        }
        return false;
        });
    assertTrue(r);
    }

    /**
     * Verify reduce with initialValue 42 returns 42 on empty new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_2900
     * @tc.name int8ArrayConstructorPart01Test029
     * @tc.desc Verify reduce with initialValue 42 returns 42 on empty new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test029() {
    Int8Array arr = new Int8Array();
    int r = arr.reduce((acc, cur, index, array) -> {
        return acc + cur;
        }, 42);
    assertEqual(42, r);
    }

    /**
     * Verify toString() on new Int8Array() returns empty string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_3000
     * @tc.name int8ArrayConstructorPart01Test030
     * @tc.desc Verify toString() on new Int8Array() returns empty string
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test030() {
    Int8Array arr = new Int8Array();
    String toStringResult = String.valueOf(arr);
    assertEqual("", toStringResult);
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(0, 1), on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_3100
     * @tc.name int8ArrayConstructorPart01Test031
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(0, 1), on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test031() {
    Int8Array arr = new Int8Array();
    try {
    arr.set(0, 1);
    fail();
    } catch (RangeError e) {
    String errName = e.getClass().getSimpleName();
    assertEqual("RangeError", errName);
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(0, 128), on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_3200
     * @tc.name int8ArrayConstructorPart01Test032
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(0, 128), on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test032() {
    Int8Array arr = new Int8Array();
    try {
    arr.set(0, 128);
    fail();
    } catch (RangeError e) {
    String errName = e.getClass().getSimpleName();
    assertEqual("RangeError", errName);
    }
    }

    /**
     * Verify $_set expects RangeError throws exception, with $_set(-1, 5), on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_3300
     * @tc.name int8ArrayConstructorPart01Test033
     * @tc.desc Verify $_set expects RangeError throws exception, with $_set(-1, 5), on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test033() {
    Int8Array arr = new Int8Array();
    try {
    arr.set(-1, 5);
    fail();
    } catch (RangeError e) {
    String errName = e.getClass().getSimpleName();
    assertEqual("RangeError", errName);
    }
    }

    /**
     * Verify reverse expects arr on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_3400
     * @tc.name int8ArrayConstructorPart01Test034
     * @tc.desc Verify reverse expects arr on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test034() {
    Int8Array arr = new Int8Array();
    Int8Array r = arr.reverse();
    assertEqual(arr, r);
    }

    /**
     * Verify fill expects arr on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_3500
     * @tc.name int8ArrayConstructorPart01Test035
     * @tc.desc Verify fill expects arr on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test035() {
    Int8Array arr = new Int8Array();
    Int8Array r = arr.fill(1);
    assertEqual(arr, r);
    }

    /**
     * Verify copyWithin expects arr on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_3600
     * @tc.name int8ArrayConstructorPart01Test036
     * @tc.desc Verify copyWithin expects arr on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test036() {
    Int8Array arr = new Int8Array();
    Int8Array r = arr.copyWithin(0, 0, 0);
    assertEqual(arr, r);
    }

    /**
     * Verify reverse expects 0 on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_3700
     * @tc.name int8ArrayConstructorPart01Test037
     * @tc.desc Verify reverse expects 0 on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test037() {
    Int8Array arr = new Int8Array();
    arr.reverse();
    int revLen = arr.length();
    assertEqual(0, revLen);
    }

    /**
     * Verify slice expects 0 slice() on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_3800
     * @tc.name int8ArrayConstructorPart01Test038
     * @tc.desc Verify slice expects 0 slice() on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test038() {
    Int8Array arr = new Int8Array();
    Int8Array r = arr.slice();
    int sliceLen = r.length();
    assertEqual(0, sliceLen);
    }

    /**
     * Verify slice expects arr slice() on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_3900
     * @tc.name int8ArrayConstructorPart01Test039
     * @tc.desc Verify slice expects arr slice() on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test039() {
    Int8Array arr = new Int8Array();
    Int8Array r = arr.slice();
    assertNotEqual(arr, r);
    assertNotEqual(arr.buffer(), r.buffer());
    }

    /**
     * Verify subarray() expects 0 length, on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_4000
     * @tc.name int8ArrayConstructorPart01Test040
     * @tc.desc Verify subarray() expects 0 length, on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test040() {
    Int8Array arr = new Int8Array();
    Int8Array r = arr.subarray();
    int subLen = r.length();
    assertEqual(0, subLen);
    }

    /**
     * Verify toReversed() result buffer is NOT arr.buffer, on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_4100
     * @tc.name int8ArrayConstructorPart01Test041
     * @tc.desc Verify toReversed() result buffer is NOT arr.buffer, on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test041() {
    Int8Array arr = new Int8Array();
    Int8Array r = arr.toReversed();
    assertNotEqual(arr.buffer(), r.buffer());
    }

    /**
     * Verify reduce without initialValue throws TypeError on empty new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_4200
     * @tc.name int8ArrayConstructorPart01Test042
     * @tc.desc Verify reduce without initialValue throws TypeError on empty new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test042() {
    Int8Array arr = new Int8Array();
    try {
    arr.reduce((acc, cur, index, array) -> {
    return acc + cur;
    });
    fail();
    } catch (TypeError e) {
    String errName = e.getClass().getSimpleName();
    assertEqual("TypeError", errName);
    }
    }

    /**
     * Verify with(0, 1) throws RangeError on empty new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_4300
     * @tc.name int8ArrayConstructorPart01Test043
     * @tc.desc Verify with(0, 1) throws RangeError on empty new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test043() {
    Int8Array arr = new Int8Array();
    try {
    arr.with(0, 1);
    fail();
    } catch (RangeError e) {
    String errName = e.getClass().getSimpleName();
    assertEqual("RangeError", errName);
    }
    }

    /**
     * Verify subarray() shares arr.buffer, on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_4400
     * @tc.name int8ArrayConstructorPart01Test044
     * @tc.desc Verify subarray() shares arr.buffer, on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test044() {
    Int8Array arr = new Int8Array();
    Int8Array v = arr.subarray();
    ArrayBuffer subBuf = v.buffer();
    assertEqual(arr.buffer(), subBuf);
    }

    /**
     * Verify subarray(0, 0) shares arr.buffer on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_4500
     * @tc.name int8ArrayConstructorPart01Test045
     * @tc.desc Verify subarray(0, 0) shares arr.buffer on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test045() {
    Int8Array arr = new Int8Array();
    Int8Array v = arr.subarray(0, 0);
    ArrayBuffer subBuf2 = v.buffer();
    assertEqual(arr.buffer(), subBuf2);
    }

    /**
     * Verify nested subarray().subarray() shares arr.buffer, on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_4600
     * @tc.name int8ArrayConstructorPart01Test046
     * @tc.desc Verify nested subarray().subarray() shares arr.buffer, on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test046() {
    Int8Array arr = new Int8Array();
    Int8Array v = arr.subarray().subarray();
    ArrayBuffer nestedBuf = v.buffer();
    assertEqual(arr.buffer(), nestedBuf);
    }

    /**
     * Verify nested subarray().subarray() expects 0 length, on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_4700
     * @tc.name int8ArrayConstructorPart01Test047
     * @tc.desc Verify nested subarray().subarray() expects 0 length, on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test047() {
    Int8Array arr = new Int8Array();
    Int8Array v = arr.subarray().subarray();
    int nestedLen = v.length();
    assertEqual(0, nestedLen);
    }

    /**
     * Verify subarray expects 0 subarray() byteLength on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_4800
     * @tc.name int8ArrayConstructorPart01Test048
     * @tc.desc Verify subarray expects 0 subarray() byteLength on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test048() {
    Int8Array arr = new Int8Array();
    Int8Array v = arr.subarray();
    int subByteLen = v.byteLength();
    assertEqual(0, subByteLen);
    }

    /**
     * Verify subarray expects sub2.buffer subarray() buffer on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART01_TEST_4900
     * @tc.name int8ArrayConstructorPart01Test049
     * @tc.desc Verify subarray expects sub2.buffer subarray() buffer on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart01Test049() {
    Int8Array arr = new Int8Array();
    Int8Array sub1 = arr.subarray();
    Int8Array sub2 = arr.subarray();
    ArrayBuffer sub1Buf = sub1.buffer();
    ArrayBuffer sub2Buf = sub2.buffer();
    assertEqual(sub2Buf, sub1Buf);
    }
}
