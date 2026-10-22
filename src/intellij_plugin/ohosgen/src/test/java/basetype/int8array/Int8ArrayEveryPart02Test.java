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
import basetype.common.Error;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayEveryPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayEveryPart02Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify every returns true when all elements pass predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_0100
     * @tc.name int8ArrayEveryPart02Test001
     * @tc.desc Verify every returns true when all elements pass predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test001() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertTrue(result);
    }

    /**
     * Verify every returns false when all elements fail predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_0200
     * @tc.name int8ArrayEveryPart02Test002
     * @tc.desc Verify every returns false when all elements fail predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test002() {
    Int8Array arr = new Int8Array(new int[] {-1, -2, -3});
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertFalse(result);
    }

    /**
     * Verify every returns false short-circuit on first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_0300
     * @tc.name int8ArrayEveryPart02Test003
     * @tc.desc Verify every returns false short-circuit on first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test003() {
    Int8Array arr = new Int8Array(new int[] {0, 1, 2});
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertFalse(result);
    }

    /**
     * Verify every returns true for empty array (vacuous truth)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_0400
     * @tc.name int8ArrayEveryPart02Test004
     * @tc.desc Verify every returns true for empty array (vacuous truth)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test004() {
    Int8Array arr = new Int8Array(0);
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertTrue(result);
    }

    /**
     * Verify every returns true with single truthy element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_0500
     * @tc.name int8ArrayEveryPart02Test005
     * @tc.desc Verify every returns true with single truthy element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test005() {
    Int8Array arr = new Int8Array(new int[] {5});
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertTrue(result);
    }

    /**
     * Verify every returns false with single falsy element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_0600
     * @tc.name int8ArrayEveryPart02Test006
     * @tc.desc Verify every returns false with single falsy element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test006() {
    Int8Array arr = new Int8Array(new int[] {0});
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertFalse(result);
    }

    /**
     * Verify every returns false when middle element fails
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_0700
     * @tc.name int8ArrayEveryPart02Test007
     * @tc.desc Verify every returns false when middle element fails
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test007() {
    Int8Array arr = new Int8Array(new int[] {1, 0, 2});
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertFalse(result);
    }

    /**
     * Verify every returns true when callback always returns true with mixed elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_0800
     * @tc.name int8ArrayEveryPart02Test008
     * @tc.desc Verify every returns true when callback always returns true with mixed elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test008() {
    Int8Array arr = new Int8Array(new int[] {1, -1, 0, INT8_MAX, -128});
    boolean result = arr.every((e, unusedIndex, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
    }
        return true;
        });
    assertTrue(result);
    }

    /**
     * Verify every returns false when callback always returns false (short-circuit on first)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_0900
     * @tc.name int8ArrayEveryPart02Test009
     * @tc.desc Verify every returns false when callback always returns false (short-circuit on first)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test009() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.every((e, unusedIndex, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
    }
        return false;
        });
    assertFalse(result);
    }

    /**
     * Verify every element>= -128 with minValue -128 returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_1000
     * @tc.name int8ArrayEveryPart02Test010
     * @tc.desc Verify every element>= -128 with minValue -128 returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test010() {
    Int8Array arr = new Int8Array(new int[] {-128, -1, 0, INT8_MAX});
    boolean result = arr.every((e, unusedIndex, array) -> e >= -128);
    assertTrue(result);
    }

    /**
     * Verify every element<=127 with maxValue 127 returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_1100
     * @tc.name int8ArrayEveryPart02Test011
     * @tc.desc Verify every element<=127 with maxValue 127 returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test011() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, INT8_MAX});
    boolean result = arr.every((e, unusedIndex, array) -> e <= INT8_MAX);
    assertTrue(result);
    }

    /**
     * Verify every element>0 with negative value returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_1200
     * @tc.name int8ArrayEveryPart02Test012
     * @tc.desc Verify every element>0 with negative value returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test012() {
    Int8Array arr = new Int8Array(new int[] {1, -1, 2});
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertFalse(result);
    }

    /**
     * Verify every element>0 all positive returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_1300
     * @tc.name int8ArrayEveryPart02Test013
     * @tc.desc Verify every element>0 all positive returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test013() {
    Int8Array arr = new Int8Array(new int[] {1, 2, INT8_MAX});
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertTrue(result);
    }

    /**
     * Verify every element===0 all zero returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_1400
     * @tc.name int8ArrayEveryPart02Test014
     * @tc.desc Verify every element===0 all zero returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test014() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    boolean result = arr.every((e, unusedIndex, array) -> e == 0);
    assertTrue(result);
    }

    /**
     * Verify every element===0 with non-zero returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_1500
     * @tc.name int8ArrayEveryPart02Test015
     * @tc.desc Verify every element===0 with non-zero returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test015() {
    Int8Array arr = new Int8Array(new int[] {0, 1, 0});
    boolean result = arr.every((e, unusedIndex, array) -> e == 0);
    assertFalse(result);
    }

    /**
     * Verify every element!=-128 with -128 returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_1600
     * @tc.name int8ArrayEveryPart02Test016
     * @tc.desc Verify every element!=-128 with -128 returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test016() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, 1});
    boolean result = arr.every((e, unusedIndex, array) -> e != -128);
    assertFalse(result);
    }

    /**
     * Verify every callback receives index in ascending order from 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_1700
     * @tc.name int8ArrayEveryPart02Test017
     * @tc.desc Verify every callback receives index in ascending order from 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test017() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] lastIdx = {-1};
    boolean[] orderOk = {true};
    boolean result = arr.every((e, i, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
    }
    if (i != lastIdx[0] + 1) {
            orderOk[0] = false;
    }
            lastIdx[0] = i;
        return true;
        });
    assertTrue(result);
    assertTrue(orderOk[0]);
    }

    /**
     * Verify every callback receives correct array length 3 via parameter a
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_1800
     * @tc.name int8ArrayEveryPart02Test018
     * @tc.desc Verify every callback receives correct array length 3 via parameter a
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test018() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean[] aLenOk = {true};
    boolean result = arr.every((e, unusedIndex, a) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
    }
    if (a.length() != 3) {
            aLenOk[0] = false;
    }
        return true;
        });
    assertTrue(result);
    assertTrue(aLenOk[0]);
    }

    /**
     * Verify every index===0 only first element satisfies returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_1900
     * @tc.name int8ArrayEveryPart02Test019
     * @tc.desc Verify every index===0 only first element satisfies returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test019() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.every((e, i, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
    }
        return i == 0;
        });
    assertFalse(result);
    }

    /**
     * Verify every callback receives a === arr with length 3, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_2000
     * @tc.name int8ArrayEveryPart02Test020
     * @tc.desc Verify every callback receives a === arr with length 3, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test020() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.every((e, unusedIndex, a) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
    }
        int r1 = a.length();
        int e1 = 3;
        assertEqual(e1, r1);
        assertEqual(arr, a);
        return true;
        });
    assertTrue(result);
    }

    /**
     * Verify every expects 2 from ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_2100
     * @tc.name int8ArrayEveryPart02Test021
     * @tc.desc Verify every expects 2 from ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test021() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 2, 4);
    boolean result = arr.every((e, unusedIndex, a) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
    }
        int r1 = a.byteOffset();
        int e1 = 2;
        assertEqual(e1, r1);
        return true;
        });
    assertTrue(result);
    }

    /**
     * Verify every on empty new Int8Array(0) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_2200
     * @tc.name int8ArrayEveryPart02Test022
     * @tc.desc Verify every on empty new Int8Array(0) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test022() {
    Int8Array arr = new Int8Array(0);
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertTrue(result);
    }

    /**
     * Verify every returns true for single element, on new Int8Array(new int[] {5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_2300
     * @tc.name int8ArrayEveryPart02Test023
     * @tc.desc Verify every returns true for single element, on new Int8Array(new int[] {5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test023() {
    Int8Array arr = new Int8Array(new int[] {5});
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertTrue(result);
    }

    /**
     * Verify every returns true and byteLength equals length, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_2400
     * @tc.name int8ArrayEveryPart02Test024
     * @tc.desc Verify every returns true and byteLength equals length, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test024() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertTrue(result);
    assertEqual(arr.length(), arr.byteLength());
    }

    /**
     * Verify every returns true when all elements > -200, on new Int8Array(new int[] {-128, 0, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_2500
     * @tc.name int8ArrayEveryPart02Test025
     * @tc.desc Verify every returns true when all elements > -200, on new Int8Array(new int[] {-128, 0, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test025() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, INT8_MAX});
    boolean result = arr.every((e, unusedIndex, array) -> e > -200);
    assertTrue(result);
    }

    /**
     * Verify every returns true when all elements < 200, on new Int8Array(new int[] {-128, 0, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_2600
     * @tc.name int8ArrayEveryPart02Test026
     * @tc.desc Verify every returns true when all elements < 200, on new Int8Array(new int[] {-128, 0, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test026() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, INT8_MAX});
    boolean result = arr.every((e, unusedIndex, array) -> e < 200);
    assertTrue(result);
    }

    /**
     * Verify every returns true when all elements >= 0, on new Int8Array(new int[] {0, 1, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_2700
     * @tc.name int8ArrayEveryPart02Test027
     * @tc.desc Verify every returns true when all elements >= 0, on new Int8Array(new int[] {0, 1, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test027() {
    Int8Array arr = new Int8Array(new int[] {0, 1, 2});
    boolean result = arr.every((e, unusedIndex, array) -> e >= 0);
    assertTrue(result);
    }

    /**
     * Verify every returns true on non-zero offset view, on new Int8Array(buf, 2, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_2800
     * @tc.name int8ArrayEveryPart02Test028
     * @tc.desc Verify every returns true on non-zero offset view, on new Int8Array(buf, 2, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test028() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 2, 4);
    boolean result = arr.every((e, unusedIndex, array) -> e >= 0);
    assertTrue(result);
    }

    /**
     * Verify every on subarray view returns true when all elements > 0, on new Int8Ar
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_2900
     * @tc.name int8ArrayEveryPart02Test029
     * @tc.desc Verify every on subarray view returns true when all elements > 0, on new Int8Array([1, 2, 3, 4])
     * subarray(1, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test029() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array view = arr.subarray(1, 3);
    boolean result = view.every((e, unusedIndex, array) -> e > 0);
    assertTrue(result);
    }

    /**
     * Verify every on view1 returns true when all elements > 0, on shared ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_3000
     * @tc.name int8ArrayEveryPart02Test030
     * @tc.desc Verify every on view1 returns true when all elements > 0, on shared ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test030() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view1 = new Int8Array(buf, 0, 2);
    Int8Array view2 = new Int8Array(buf, 2, 2);
    view1.set(0, 1);
    view1.set(1, 2);
    view2.set(0, 3);
    view2.set(1, 4);
    boolean result = view1.every((e, unusedIndex, array) -> e > 0);
    assertTrue(result);
    }

    /**
     * Verify every stops at first failing element, callback count is 1 and result fal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_3100
     * @tc.name int8ArrayEveryPart02Test031
     * @tc.desc Verify every stops at first failing element, callback count is 1 and result false, on new Int8Array(new
     * int[] {0, 1, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test031() {
    Int8Array arr = new Int8Array(new int[] {0, 1, 2});
    int[] count = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        count[0] = count[0] + 1;
        return e > 0;
    });
    assertEqual(1, count[0]);
    assertFalse(result);
    }

    /**
     * Verify every expects 3, on new Int8Array(new int[] {1, 2, 0, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_3200
     * @tc.name int8ArrayEveryPart02Test032
     * @tc.desc Verify every expects 3, on new Int8Array(new int[] {1, 2, 0, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test032() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 0, 4});
    int[] count = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        count[0] = count[0] + 1;
        return e > 0;
    });
    assertEqual(3, count[0]);
    assertFalse(result);
    }

    /**
     * Verify every callback invoked 3 times, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_3300
     * @tc.name int8ArrayEveryPart02Test033
     * @tc.desc Verify every callback invoked 3 times, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test033() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] count = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        count[0] = count[0] + 1;
        return e > 0;
    });
    assertEqual(3, count[0]);
    assertTrue(result);
    }

    /**
     * Verify every expects 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_3400
     * @tc.name int8ArrayEveryPart02Test034
     * @tc.desc Verify every expects 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test034() {
    Int8Array arr = new Int8Array(0);
    int[] count = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        count[0] = count[0] + 1;
        return e > 0;
    });
    assertEqual(0, count[0]);
    assertTrue(result);
    }

    /**
     * Verify every expects 3, on new Int8Array(new int[] {1, 2, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_3500
     * @tc.name int8ArrayEveryPart02Test035
     * @tc.desc Verify every expects 3, on new Int8Array(new int[] {1, 2, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test035() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 0});
    int[] count = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        count[0] = count[0] + 1;
        return e > 0;
    });
    assertEqual(3, count[0]);
    assertFalse(result);
    }

    /**
     * Verify every, on new Int8Array(new int[] {1, 0, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_3600
     * @tc.name int8ArrayEveryPart02Test036
     * @tc.desc Verify every, on new Int8Array(new int[] {1, 0, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test036() {
    Int8Array arr = new Int8Array(new int[] {1, 0, 3, 4});
    boolean[] visited = {false};
    boolean result = arr.every((e, i, array) -> {
        if (i >= 2) {
            visited[0] = true;
    }
        return e > 0;
        });
    assertFalse(result);
    assertFalse(visited[0]);
    }

    /**
     * Verify every returns false when element 0 is not > 0, on new Int8Array(new int[] {1, 0, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_3700
     * @tc.name int8ArrayEveryPart02Test037
     * @tc.desc Verify every returns false when element 0 is not > 0, on new Int8Array(new int[] {1, 0, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test037() {
    Int8Array arr = new Int8Array(new int[] {1, 0, 3, 4});
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertFalse(result);
    }

    /**
     * Verify every returns false when element 0 fails predicate, on new Int8Array(new int[] {1, 0, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_3800
     * @tc.name int8ArrayEveryPart02Test038
     * @tc.desc Verify every returns false when element 0 fails predicate, on new Int8Array(new int[] {1, 0, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test038() {
    Int8Array arr = new Int8Array(new int[] {1, 0, 3, 4});
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertFalse(result);
    }

    /**
     * Verify every returns false when element at index 1 is 0, on new Int8Array(new int[] {1, 0, 99, 99})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_3900
     * @tc.name int8ArrayEveryPart02Test039
     * @tc.desc Verify every returns false when element at index 1 is 0, on new Int8Array(new int[] {1, 0, 99, 99})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test039() {
    Int8Array arr = new Int8Array(new int[] {1, 0, 99, 99});
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertFalse(result);
    }

    /**
     * Verify every throws Error when callback throws, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_4000
     * @tc.name int8ArrayEveryPart02Test040
     * @tc.desc Verify every throws Error when callback throws, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test040() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    boolean result = arr.every((e, unusedIndex, array) -> {
    if (e < INT8_MIN || e > INT8_MAX) {
    return false;
    }
    return BasTest.throwTestError("boom");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every throws Error from callback on view, on new Int8Array(buf, 2, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_4100
     * @tc.name int8ArrayEveryPart02Test041
     * @tc.desc Verify every throws Error from callback on view, on new Int8Array(buf, 2, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test041() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 2, 4);
    try {
    boolean result = arr.every((e, unusedIndex, array) -> {
    if (e < INT8_MIN || e > INT8_MAX) {
    return false;
    }
    return BasTest.throwTestError("boom");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify multiple every calls return consistent results (idempotence)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_4200
     * @tc.name int8ArrayEveryPart02Test042
     * @tc.desc Verify multiple every calls return consistent results (idempotence)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test042() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean r1 = arr.every((e, unusedIndex, array) -> e > 0);
    boolean r2 = arr.every((e, unusedIndex, array) -> e > 0);
    assertTrue(r1);
    assertTrue(r2);
    }

    /**
     * Verify every returns true when single element (200 as byte = -56) matches predicate e === -56
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_4300
     * @tc.name int8ArrayEveryPart02Test043
     * @tc.desc Verify every returns true when single element (200 as byte = -56) matches predicate e === -56
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test043() {
    Int8Array arr = new Int8Array(new int[] {200});
    boolean result = arr.every((e, unusedIndex, array) -> e == -56);
    assertTrue(result);
    }

    /**
     * Verify every on fill(1) filled new Int8Array(100) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_4400
     * @tc.name int8ArrayEveryPart02Test044
     * @tc.desc Verify every on fill(1) filled new Int8Array(100) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test044() {
    Int8Array arr = new Int8Array(100);
    arr.fill(1);
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertTrue(result);
    }

    /**
     * Verify every on fill(1) filled new Int8Array(100) with $_set(99, 0) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_4500
     * @tc.name int8ArrayEveryPart02Test045
     * @tc.desc Verify every on fill(1) filled new Int8Array(100) with $_set(99, 0) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test045() {
    Int8Array arr = new Int8Array(100);
    arr.fill(1);
    arr.set(99, 0);
    boolean result = arr.every((e, unusedIndex, array) -> e > 0);
    assertFalse(result);
    }

    /**
     * Verify every returns true when all elements equal 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_4600
     * @tc.name int8ArrayEveryPart02Test046
     * @tc.desc Verify every returns true when all elements equal 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test046() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    boolean result = arr.every((e, unusedIndex, array) -> e == 7);
    assertTrue(result);
    }

    /**
     * Verify every returns false when no element satisfies e !== 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_4700
     * @tc.name int8ArrayEveryPart02Test047
     * @tc.desc Verify every returns false when no element satisfies e !== 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test047() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    boolean result = arr.every((e, unusedIndex, array) -> e != 7);
    assertFalse(result);
    }

    /**
     * Verify every, on new Int8Array(new int[] {0, 1, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_4800
     * @tc.name int8ArrayEveryPart02Test048
     * @tc.desc Verify every, on new Int8Array(new int[] {0, 1, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test048() {
    Int8Array arr = new Int8Array(new int[] {0, 1, INT8_MAX});
    boolean result = arr.every((e, unusedIndex, array) -> e >= 0);
    assertTrue(result);
    }

    /**
     * Verify every, on new Int8Array(new int[] {0, -1, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_4900
     * @tc.name int8ArrayEveryPart02Test049
     * @tc.desc Verify every, on new Int8Array(new int[] {0, -1, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test049() {
    Int8Array arr = new Int8Array(new int[] {0, -1, INT8_MAX});
    boolean result = arr.every((e, unusedIndex, array) -> e >= 0);
    assertFalse(result);
    }

    /**
     * Verify every, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART02_5000
     * @tc.name int8ArrayEveryPart02Test050
     * @tc.desc Verify every, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart02Test050() {
    Int8Array arr = new Int8Array(0);
    boolean result = arr.every((e, unusedIndex, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
    }
        return false;
        });
    assertTrue(result);
    }
}
