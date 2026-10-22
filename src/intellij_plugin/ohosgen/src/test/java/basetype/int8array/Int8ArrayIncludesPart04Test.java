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
 * Int8ArrayIncludesPart04Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIncludesPart04Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify $_set(0, 128) -128 includes(-128) true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_0100
     * @tc.name int8ArrayIncludesPart04Test001
     * @tc.desc Verify $_set(0, 128) -128 includes(-128) true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test001() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    arr.set(0, 128);
    boolean r1 = arr.includes(INT8_MIN);
    assertTrue(r1);
    }

    /**
     * Verify $_set(0, -129) 127 includes(127) true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_0200
     * @tc.name int8ArrayIncludesPart04Test002
     * @tc.desc Verify $_set(0, -129) 127 includes(127) true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test002() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, -129);
    assertTrue(arr.includes(INT8_MAX));
    }

    /**
     * Verify $_set(0, 255) -1 includes(-1) true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_0300
     * @tc.name int8ArrayIncludesPart04Test003
     * @tc.desc Verify $_set(0, 255) -1 includes(-1) true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test003() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, 255);
    assertTrue(arr.includes(-1));
    }

    /**
     * Verify $_set(0, 256) 0 includes(0) true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_0400
     * @tc.name int8ArrayIncludesPart04Test004
     * @tc.desc Verify $_set(0, 256) 0 includes(0) true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test004() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    arr.set(0, 256);
    assertTrue(arr.includes(0));
    }

    /**
     * Verify $_set(0, 300) 44 includes(44) true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_0500
     * @tc.name int8ArrayIncludesPart04Test005
     * @tc.desc Verify $_set(0, 300) 44 includes(44) true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test005() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, 300);
    assertTrue(arr.includes(44));
    }

    /**
     * Verify $_set(0, -200) 56 includes(56) true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_0600
     * @tc.name int8ArrayIncludesPart04Test006
     * @tc.desc Verify $_set(0, -200) 56 includes(56) true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test006() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, -200);
    assertTrue(arr.includes(56));
    }

    /**
     * Verify $_set(0, 0x81) -127 includes(-127) true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_0700
     * @tc.name int8ArrayIncludesPart04Test007
     * @tc.desc Verify $_set(0, 0x81) -127 includes(-127) true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test007() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, 0x81);
    assertTrue(arr.includes(-INT8_MAX));
    }

    /**
     * Verify $_set(0, Number.NaN) 0 includes(0) true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_0800
     * @tc.name int8ArrayIncludesPart04Test008
     * @tc.desc Verify $_set(0, Number.NaN) 0 includes(0) true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test008() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    arr.set(0, Double.NaN);
    assertTrue(arr.includes(0));
    }

    /**
     * Verify $_set(0, 1.9) 1 includes(1) true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_0900
     * @tc.name int8ArrayIncludesPart04Test009
     * @tc.desc Verify $_set(0, 1.9) 1 includes(1) true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test009() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, 1.9);
    assertTrue(arr.includes(1));
    }

    /**
     * Verify $_set(0, -1.9) -1 includes(-1) true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_1000
     * @tc.name int8ArrayIncludesPart04Test010
     * @tc.desc Verify $_set(0, -1.9) -1 includes(-1) true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test010() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, -1.9);
    assertTrue(arr.includes(-1));
    }

    /**
     * Verify $_set(0, -0.5) 0 includes(0) true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_1100
     * @tc.name int8ArrayIncludesPart04Test011
     * @tc.desc Verify $_set(0, -0.5) 0 includes(0) true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test011() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    arr.set(0, -0.5);
    assertTrue(arr.includes(0));
    }

    /**
     * Verify includes(50) returns true after $_set(0, 50) on new Int8Array(new int[] {0, 0, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_1200
     * @tc.name int8ArrayIncludesPart04Test012
     * @tc.desc Verify includes(50) returns true after $_set(0, 50) on new Int8Array(new int[] {0, 0, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test012() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, 50);
    assertTrue(arr.includes(50));
    }

    /**
     * Verify includes(5, 1) returns true and includes(0) returns true after $_set(0, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_1300
     * @tc.name int8ArrayIncludesPart04Test013
     * @tc.desc Verify includes(5, 1) returns true and includes(0) returns true after $_set(0, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test013() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5});
    arr.set(0, 0);
    assertTrue(arr.includes(5, 1));
    assertTrue(arr.includes(0));
    }

    /**
     * Verify $_set overwrite: after $_set(1, 30) then $_set(1, 60), includes(30) retu
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_1400
     * @tc.name int8ArrayIncludesPart04Test014
     * @tc.desc Verify $_set overwrite: after $_set(1, 30) then $_set(1, 60), includes(30) retu
     * rns false, includes(60) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test014() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(1, 30);
    arr.set(1, 60);
    assertFalse(arr.includes(30));
    assertTrue(arr.includes(60));
    }

    /**
     * Verify includes(INT8_MIN) returns true after $_set(0, INT8_MIN)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_1500
     * @tc.name int8ArrayIncludesPart04Test015
     * @tc.desc Verify includes(INT8_MIN) returns true after $_set(0, INT8_MIN)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test015() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, INT8_MIN);
    boolean r1 = arr.includes(INT8_MIN);
    assertTrue(r1);
    }

    /**
     * Verify $_set(0, 42) index 0 includes(42, 1) index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_1600
     * @tc.name int8ArrayIncludesPart04Test016
     * @tc.desc Verify $_set(0, 42) index 0 includes(42, 1) index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test016() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0});
    arr.set(0, 42);
    assertFalse(arr.includes(42, 1));
    }

    /**
     * Verify $_set(2, 42) index 2 includes(42, 2) index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_1700
     * @tc.name int8ArrayIncludesPart04Test017
     * @tc.desc Verify $_set(2, 42) index 2 includes(42, 2) index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test017() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0});
    arr.set(2, 42);
    assertTrue(arr.includes(42, 2));
    }

    /**
     * Verify $_set(3, 42) index 3 includes(42, 1) index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_1800
     * @tc.name int8ArrayIncludesPart04Test018
     * @tc.desc Verify $_set(3, 42) index 3 includes(42, 1) index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test018() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0});
    arr.set(3, 42);
    assertTrue(arr.includes(42, 1));
    }

    /**
     * Verify $_set(3, 42) includes(42, -2) index 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_1900
     * @tc.name int8ArrayIncludesPart04Test019
     * @tc.desc Verify $_set(3, 42) includes(42, -2) index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test019() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0, 0});
    arr.set(3, 42);
    assertTrue(arr.includes(42, -2));
    }

    /**
     * Verify includes searchElement=88, -1 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_2000
     * @tc.name int8ArrayIncludesPart04Test020
     * @tc.desc Verify includes searchElement=88, -1 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test020() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(2, 88);
    assertTrue(arr.includes(88, -1));
    }

    /**
     * Verify $_set(1, 127) index 1 includes(127, 1) index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_2100
     * @tc.name int8ArrayIncludesPart04Test021
     * @tc.desc Verify $_set(1, 127) index 1 includes(127, 1) index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test021() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(1, INT8_MAX);
    assertTrue(arr.includes(INT8_MAX, 1));
    }

    /**
     * Verify $_set(0, 127) index 0 includes(127, 1) index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_2200
     * @tc.name int8ArrayIncludesPart04Test022
     * @tc.desc Verify $_set(0, 127) index 0 includes(127, 1) index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test022() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, INT8_MAX);
    assertFalse(arr.includes(INT8_MAX, 1));
    }

    /**
     * Verify includes(99) on subarray(1, 3) reflects original modification via shared buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_2300
     * @tc.name int8ArrayIncludesPart04Test023
     * @tc.desc Verify includes(99) on subarray(1, 3) reflects original modification via shared buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test023() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array sub = arr.subarray(1, 3);
    arr.set(1, 99);
    assertTrue(sub.includes(99));
    }

    /**
     * Verify includes(77) returns true when subarray write is visible to original
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_2400
     * @tc.name int8ArrayIncludesPart04Test024
     * @tc.desc Verify includes(77) returns true when subarray write is visible to original
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test024() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array sub = arr.subarray(1, 3);
    sub.set(0, 77);
    assertTrue(arr.includes(77));
    }

    /**
     * Verify includes(55) returns true when overlapping subarrays share buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_2500
     * @tc.name int8ArrayIncludesPart04Test025
     * @tc.desc Verify includes(55) returns true when overlapping subarrays share buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test025() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array sub1 = arr.subarray(0, 3);
    Int8Array sub2 = arr.subarray(2, 5);
    sub1.set(2, 55);
    assertTrue(sub2.includes(55));
    }

    /**
     * Verify subarray of subarray $_set includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_2600
     * @tc.name int8ArrayIncludesPart04Test026
     * @tc.desc Verify subarray of subarray $_set includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test026() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array sub1 = arr.subarray(1, 5);
    Int8Array sub2 = sub1.subarray(1, 3);
    arr.set(2, 33);
    assertTrue(sub2.includes(33));
    }

    /**
     * Verify includes(-56) on original reflects $_set(0, 200) on subarray via shared buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_2700
     * @tc.name int8ArrayIncludesPart04Test027
     * @tc.desc Verify includes(-56) on original reflects $_set(0, 200) on subarray via shared buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test027() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0});
    Int8Array sub = arr.subarray(1, 3);
    sub.set(0, 200);
    assertTrue(arr.includes(-56));
    }

    /**
     * Verify ArrayBuffer Int8Array offset $_set includes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_2800
     * @tc.name int8ArrayIncludesPart04Test028
     * @tc.desc Verify ArrayBuffer Int8Array offset $_set includes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test028() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Int8Array view1 = new Int8Array(buf, 0, 3);
    Int8Array view2 = new Int8Array(buf, 2, 3);
    view1.set(2, 66);
    assertTrue(view2.includes(66));
    }

    /**
     * Verify includes(30, 0) returns true and includes(30, 1) returns false on subarray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_2900
     * @tc.name int8ArrayIncludesPart04Test029
     * @tc.desc Verify includes(30, 0) returns true and includes(30, 1) returns false on subarray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test029() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    Int8Array sub = arr.subarray(2, 5);
    assertTrue(sub.includes(30, 0));
    assertFalse(sub.includes(30, 1));
    }

    /**
     * Verify includes(44) returns true on subarray(-3) after $_set(3, 44)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_3000
     * @tc.name int8ArrayIncludesPart04Test030
     * @tc.desc Verify includes(44) returns true on subarray(-3) after $_set(3, 44)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test030() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array sub = arr.subarray(-3);
    arr.set(3, 44);
    assertTrue(sub.includes(44));
    }

    /**
     * Verify includes(99) returns false after $_set on independent slice copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_3100
     * @tc.name int8ArrayIncludesPart04Test031
     * @tc.desc Verify includes(99) returns false after $_set on independent slice copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test031() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    Int8Array copy = arr.slice(0, 3);
    copy.set(0, 99);
    assertFalse(arr.includes(99));
    }

    /**
     * Verify includes(99) returns false on independent array after $_set(0, 99) on another
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_3200
     * @tc.name int8ArrayIncludesPart04Test032
     * @tc.desc Verify includes(99) returns false on independent array after $_set(0, 99) on another
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test032() {
    Int8Array a = new Int8Array(new int[] {1, 2, 3});
    Int8Array b = new Int8Array(new int[] {1, 2, 3});
    a.set(0, 99);
    assertFalse(b.includes(99));
    }

    /**
     * Verify includes(42, 0) on subarray(1, 4) true and includes(42, 3) false after $_set(2, 42)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_3300
     * @tc.name int8ArrayIncludesPart04Test033
     * @tc.desc Verify includes(42, 0) on subarray(1, 4) true and includes(42, 3) false after $_set(2, 42)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test033() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0, 0});
    Int8Array sub = arr.subarray(1, 4);
    arr.set(2, 42);
    assertTrue(sub.includes(42, 0));
    assertFalse(sub.includes(42, 3));
    }

    /**
     * Verify includes searchElement=5 returns false when element does not exist in subarray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_3400
     * @tc.name int8ArrayIncludesPart04Test034
     * @tc.desc Verify includes searchElement=5 returns false when element does not exist in subarray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test034() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array sub = arr.subarray(0, 3);
    assertFalse(sub.includes(5));
    }

    /**
     * Verify includes(128) does not modify array element values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_3500
     * @tc.name int8ArrayIncludesPart04Test035
     * @tc.desc Verify includes(128) does not modify array element values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test035() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.includes(128);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    }

    /**
     * Verify includes(1, 100) does not modify array elements or length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_3600
     * @tc.name int8ArrayIncludesPart04Test036
     * @tc.desc Verify includes(1, 100) does not modify array elements or length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test036() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.includes(1, 100);
    assertEqualInt(1, arr.get(0));
    assertEqual(3, arr.length());
    }

    /**
     * Verify includes(1, -1) does not modify array element values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_3700
     * @tc.name int8ArrayIncludesPart04Test037
     * @tc.desc Verify includes(1, -1) does not modify array element values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test037() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.includes(1, -1);
    assertEqualInt(3, arr.get(2));
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify includes(0) does not modify empty array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_3800
     * @tc.name int8ArrayIncludesPart04Test038
     * @tc.desc Verify includes(0) does not modify empty array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test038() {
    Int8Array arr = new Int8Array(0);
    boolean has0 = arr.includes(0);
    assertFalse(has0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify includes() does not modify array element values after multiple calls
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_3900
     * @tc.name int8ArrayIncludesPart04Test039
     * @tc.desc Verify includes() does not modify array element values after multiple calls
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test039() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    arr.includes(10);
    arr.includes(99);
    arr.includes(200);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify includes(200) does not modify array buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_4000
     * @tc.name int8ArrayIncludesPart04Test040
     * @tc.desc Verify includes(200) does not modify array buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test040() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean r1 = arr.includes(200);
    assertFalse(r1);
    Integer r2 = arr.get(0);
    int e2 = 1;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify includes(255) does not modify array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_4100
     * @tc.name int8ArrayIncludesPart04Test041
     * @tc.desc Verify includes(255) does not modify array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test041() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    boolean has255 = arr.includes(255);
    assertFalse(has255);
    assertEqual(4, arr.length());
    }

    /**
     * Verify includes(0) does not modify array byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_4200
     * @tc.name int8ArrayIncludesPart04Test042
     * @tc.desc Verify includes(0) does not modify array byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test042() {
    Int8Array arr = new Int8Array(new ArrayBuffer(8), 2, 4);
    boolean has0 = arr.includes(0);
    assertTrue(has0);
    int r1 = arr.byteOffset();
    int e1 = 2;
    assertEqual(e1, r1);
    }

    /**
     * Verify includes(10) returns true on new Int8Array(new int[] {5, 10, 15})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_4300
     * @tc.name int8ArrayIncludesPart04Test043
     * @tc.desc Verify includes(10) returns true on new Int8Array(new int[] {5, 10, 15})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test043() {
    Int8Array arr = new Int8Array(new int[] {5, 10, 15});
    boolean r1 = arr.includes(10);
    assertTrue(r1);
    }

    /**
     * Verify includes(1) true and includes(99) false, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_4400
     * @tc.name int8ArrayIncludesPart04Test044
     * @tc.desc Verify includes(1) true and includes(99) false, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test044() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    assertTrue(arr.includes(1));
    assertFalse(arr.includes(99));
    }

    /**
     * Verify arr.includes(arr.includes(x) ? y, z)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_4500
     * @tc.name int8ArrayIncludesPart04Test045
     * @tc.desc Verify arr.includes(arr.includes(x) ? y, z)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test045() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean inner = arr.includes(2);
    int target = inner ? 3 : 99;
    assertTrue(arr.includes(target));
    }

    /**
     * Verify includes(1) checks element presence in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_4600
     * @tc.name int8ArrayIncludesPart04Test046
     * @tc.desc Verify includes(1) checks element presence in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test046() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int counter = 0;
    counter = counter + (arr.includes(1) ? 1 : 0);
    counter = counter + (arr.includes(2) ? 1 : 0);
    counter = counter + (arr.includes(99) ? 1 : 0);
    assertEqual(2, counter);
    }

    /**
     * Verify includes(10) returns true on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_4700
     * @tc.name int8ArrayIncludesPart04Test047
     * @tc.desc Verify includes(10) returns true on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test047() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    boolean r1 = arr.includes(10);
    assertTrue(r1);
    }

    /**
     * Verify includes(7) returns true on Int8Array(4) after fill(7)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_4800
     * @tc.name int8ArrayIncludesPart04Test048
     * @tc.desc Verify includes(7) returns true on Int8Array(4) after fill(7)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test048() {
    Int8Array arr = new Int8Array(4);
    arr.fill(7);
    assertTrue(arr.includes(7));
    }

    /**
     * Verify includes(9, 0) returns true and includes(9, 3) returns false after fill(9, 1, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_4900
     * @tc.name int8ArrayIncludesPart04Test049
     * @tc.desc Verify includes(9, 0) returns true and includes(9, 3) returns false after fill(9, 1, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test049() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0, 0});
    arr.fill(9, 1, 3);
    assertTrue(arr.includes(9, 0));
    assertFalse(arr.includes(9, 3));
    }

    /**
     * Verify includes(6) returns false on Int8Array(3) after fill(5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_5000
     * @tc.name int8ArrayIncludesPart04Test050
     * @tc.desc Verify includes(6) returns false on Int8Array(3) after fill(5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test050() {
    Int8Array arr = new Int8Array(3);
    arr.fill(5);
    assertFalse(arr.includes(6));
    }

    /**
     * Verify includes after reverse finds 1 and 3, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_5100
     * @tc.name int8ArrayIncludesPart04Test051
     * @tc.desc Verify includes after reverse finds 1 and 3, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test051() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    arr.reverse();
    assertTrue(arr.includes(1));
    assertTrue(arr.includes(3));
    }

    /**
     * Verify includes(1) returns true after sort() on new Int8Array(new int[] {3, 1, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_5200
     * @tc.name int8ArrayIncludesPart04Test052
     * @tc.desc Verify includes(1) returns true after sort() on new Int8Array(new int[] {3, 1, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test052() {
    Int8Array arr = new Int8Array(new int[] {3, 1, 2});
    arr.sort();
    assertTrue(arr.includes(1));
    assertTrue(arr.includes(3));
    }

    /**
     * Verify includes(4) and includes(5) return true after copyWithin(0, 3, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_5300
     * @tc.name int8ArrayIncludesPart04Test053
     * @tc.desc Verify includes(4) and includes(5) return true after copyWithin(0, 3, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test053() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3, 5);
    assertTrue(arr.includes(4));
    assertTrue(arr.includes(5));
    }

    /**
     * Verify includes(1) returns true after copyWithin(1, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_5400
     * @tc.name int8ArrayIncludesPart04Test054
     * @tc.desc Verify includes(1) returns true after copyWithin(1, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test054() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(1, 0, 4);
    assertEqualInt(1, arr.get(1));
    assertTrue(arr.includes(1));
    }

    /**
     * Verify includes(8) and includes(7, 1) return true after set(src, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_5500
     * @tc.name int8ArrayIncludesPart04Test055
     * @tc.desc Verify includes(8) and includes(7, 1) return true after set(src, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test055() {
    Int8Array src = new Int8Array(new int[] {7, 8, 9});
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0, 0});
    arr.set(src, 1);
    assertTrue(arr.includes(8));
    assertTrue(arr.includes(7, 1));
    }

    /**
     * Verify includes(11) returns true after $_set(11) on all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_5600
     * @tc.name int8ArrayIncludesPart04Test056
     * @tc.desc Verify includes(11) returns true after $_set(11) on all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test056() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    for (int i = 0; i < arr.length(); i++) {
    arr.set(i, 11);
    }
    boolean r1 = arr.includes(11);
    assertTrue(r1);
    }

    /**
     * Verify includes(v) checks element presence in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_5800
     * @tc.name int8ArrayIncludesPart04Test058
     * @tc.desc Verify includes(v) checks element presence in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test058() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    Int8Array other = new Int8Array(new int[] {2, 4, 6});
    int[] matchCount = {0};
    arr.forEach((v, unusedIndex, array) -> {
    if (other.includes(v)) {
    matchCount[0] = matchCount[0] + 1;
    }
    });
    assertEqual(1, matchCount[0]);
    }

    /**
     * Verify fill(200) clamps to -56, includes(-56) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_5900
     * @tc.name int8ArrayIncludesPart04Test059
     * @tc.desc Verify fill(200) clamps to -56, includes(-56) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test059() {
    Int8Array arr = new Int8Array(3);
    arr.fill(200);
    assertTrue(arr.includes(-56));
    }

    /**
     * Verify includes(-56) returns true after clamped $_set(0, 200) copied via set(src, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_6000
     * @tc.name int8ArrayIncludesPart04Test060
     * @tc.desc Verify includes(-56) returns true after clamped $_set(0, 200) copied via set(src, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test060() {
    Int8Array src = new Int8Array(new int[] {0, 0, 0});
    src.set(0, 200);
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0, 0});
    arr.set(src, 1);
    assertTrue(arr.includes(-56));
    }

    /**
     * Verify $_set(0, 127.9) 127 includes(127) true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_6100
     * @tc.name int8ArrayIncludesPart04Test061
     * @tc.desc Verify $_set(0, 127.9) 127 includes(127) true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test061() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, 127.9);
    assertTrue(arr.includes(INT8_MAX));
    }

    /**
     * Verify $_set(0, -128.9) -128 includes(-128) true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_6200
     * @tc.name int8ArrayIncludesPart04Test062
     * @tc.desc Verify $_set(0, -128.9) -128 includes(-128) true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test062() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, -128.9);
    boolean r1 = arr.includes(INT8_MIN);
    assertTrue(r1);
    }

    /**
     * Verify includes(42, 0) on original true and includes(42, 3) false after $_set(1, 42) on subarray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_6300
     * @tc.name int8ArrayIncludesPart04Test063
     * @tc.desc Verify includes(42, 0) on original true and includes(42, 3) false after $_set(1, 42) on subarray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test063() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0, 0});
    Int8Array sub = arr.subarray(1, 4);
    sub.set(1, 42);
    assertTrue(arr.includes(42, 0));
    assertFalse(arr.includes(42, 3));
    }

    /**
     * Verify includes(33) returns true via nested subarray write
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_6400
     * @tc.name int8ArrayIncludesPart04Test064
     * @tc.desc Verify includes(33) returns true via nested subarray write
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test064() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0, 0});
    Int8Array sub1 = arr.subarray(0, 4);
    Int8Array sub2 = sub1.subarray(1, 3);
    sub2.set(0, 33);
    assertTrue(arr.includes(33));
    }

    /**
     * Verify copyWithin(0, 3, 5) then includes(4) and includes(99) return true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_6500
     * @tc.name int8ArrayIncludesPart04Test065
     * @tc.desc Verify copyWithin(0, 3, 5) then includes(4) and includes(99) return true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test065() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3, 5);
    arr.set(2, 99);
    assertTrue(arr.includes(99));
    assertTrue(arr.includes(4));
    }

    /**
     * Verify $_set(0, 257) 1 includes(1) true +1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_6600
     * @tc.name int8ArrayIncludesPart04Test066
     * @tc.desc Verify $_set(0, 257) 1 includes(1) true +1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test066() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, 257);
    assertTrue(arr.includes(1));
    }

    /**
     * Verify $_set index=length no-op includes, throws RangeError for out-of-bounds index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_6700
     * @tc.name int8ArrayIncludesPart04Test067
     * @tc.desc Verify $_set index=length no-op includes, throws RangeError for out-of-bounds index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test067() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    arr.set(3, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertFalse(arr.includes(99));
    }

    /**
     * Verify $_set(0, Number.POSITIVE_INFINITY) 127 includes(127) false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_6800
     * @tc.name int8ArrayIncludesPart04Test068
     * @tc.desc Verify $_set(0, Number.POSITIVE_INFINITY) 127 includes(127) false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test068() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, Double.POSITIVE_INFINITY);
    assertFalse(arr.includes(127));
    }

    /**
     * Verify $_set(0, Number.NEGATIVE_INFINITY) -128 includes(-128) false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_6900
     * @tc.name int8ArrayIncludesPart04Test069
     * @tc.desc Verify $_set(0, Number.NEGATIVE_INFINITY) -128 includes(-128) false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test069() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, Double.NEGATIVE_INFINITY);
    boolean r1 = arr.includes(INT8_MIN);
    assertFalse(r1);
    }

    /**
     * Verify $_set(0, 200) -56 includes(200) false searchElement
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART04_TEST_7000
     * @tc.name int8ArrayIncludesPart04Test070
     * @tc.desc Verify $_set(0, 200) -56 includes(200) false searchElement
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart04Test070() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    arr.set(0, 200);
    assertFalse(arr.includes(200));
    }
}
