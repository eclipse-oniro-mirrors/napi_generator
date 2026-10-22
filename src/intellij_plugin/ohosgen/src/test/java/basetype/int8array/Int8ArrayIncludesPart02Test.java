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

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayIncludesPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIncludesPart02Test extends BasTest {
    private static int INT8_MAX = 127;

    /**
     * Verify arr.includes returns true when element exists
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_0100
     * @tc.name int8ArrayIncludesPart02Test001
     * @tc.desc Verify arr.includes returns true when element exists
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test001() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.includes(2);
    assertTrue(result);
    }

    /**
     * Verify arr.includes returns false when element not found
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_0200
     * @tc.name int8ArrayIncludesPart02Test002
     * @tc.desc Verify arr.includes returns false when element not found
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test002() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.includes(99);
    assertFalse(result);
    }

    /**
     * Verify arr.includes returns false on empty Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_0300
     * @tc.name int8ArrayIncludesPart02Test003
     * @tc.desc Verify arr.includes returns false on empty Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test003() {
    Int8Array arr = new Int8Array(0);
    boolean result = arr.includes(0);
    assertFalse(result);
    }

    /**
     * Verify arr.includes returns false when element value exceeds Int8 range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_0400
     * @tc.name int8ArrayIncludesPart02Test004
     * @tc.desc Verify arr.includes returns false when element value exceeds Int8 range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test004() {
    Int8Array arr = new Int8Array(new int[] {-56, 1, 2});
    boolean result = arr.includes(200);
    assertFalse(result);
    }

    /**
     * Verify arr.includes returns true with negative fromIndex -1 for last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_0500
     * @tc.name int8ArrayIncludesPart02Test005
     * @tc.desc Verify arr.includes returns true with negative fromIndex -1 for last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test005() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(5, -1);
    assertTrue(result);
    }

    /**
     * Verify arr.includes returns false when fromIndex exceeds MAX_INT
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_0600
     * @tc.name int8ArrayIncludesPart02Test006
     * @tc.desc Verify arr.includes returns false when fromIndex exceeds MAX_INT
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test006() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.includes(1, 2147483647);
    assertFalse(result);
    }

    /**
     * Verify includes(42) with single-element returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_0800
     * @tc.name int8ArrayIncludesPart02Test008
     * @tc.desc Verify includes(42) with single-element returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test008() {
    Int8Array arr = new Int8Array(new int[] {42});
    assertTrue(arr.includes(42));
    }

    /**
     * Verify includes searchElement=10 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_0900
     * @tc.name int8ArrayIncludesPart02Test009
     * @tc.desc Verify includes searchElement=10 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test009() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertTrue(arr.includes(10));
    }

    /**
     * Verify includes searchElement=30 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_1000
     * @tc.name int8ArrayIncludesPart02Test010
     * @tc.desc Verify includes searchElement=30 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test010() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertTrue(arr.includes(30));
    }

    /**
     * Verify includes searchElement=20 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_1100
     * @tc.name int8ArrayIncludesPart02Test011
     * @tc.desc Verify includes searchElement=20 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test011() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertTrue(arr.includes(20));
    }

    /**
     * Verify includes searchElement=7 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_1200
     * @tc.name int8ArrayIncludesPart02Test012
     * @tc.desc Verify includes searchElement=7 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test012() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7});
    assertTrue(arr.includes(7));
    }

    /**
     * Verify includes(-128) returns true on new Int8Array(new int[] {-128, 0, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_1300
     * @tc.name int8ArrayIncludesPart02Test013
     * @tc.desc Verify includes(-128) returns true on new Int8Array(new int[] {-128, 0, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test013() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, INT8_MAX});
    assertTrue(arr.includes(-128));
    }

    /**
     * Verify includes(INT8_MAX) returns true on new Int8Array(new int[] {-128, 0, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_1400
     * @tc.name int8ArrayIncludesPart02Test014
     * @tc.desc Verify includes(INT8_MAX) returns true on new Int8Array(new int[] {-128, 0, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test014() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, INT8_MAX});
    assertTrue(arr.includes(INT8_MAX));
    }

    /**
     * Verify includes(0) returns true on new Int8Array(new int[] {0, 1, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_1500
     * @tc.name int8ArrayIncludesPart02Test015
     * @tc.desc Verify includes(0) returns true on new Int8Array(new int[] {0, 1, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test015() {
    Int8Array arr = new Int8Array(new int[] {0, 1, 2});
    assertTrue(arr.includes(0));
    }

    /**
     * Verify includes searchElement=5, -1 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_1600
     * @tc.name int8ArrayIncludesPart02Test016
     * @tc.desc Verify includes searchElement=5, -1 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test016() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    assertTrue(arr.includes(5, -1));
    }

    /**
     * Verify includes searchElement=10, 0 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_1700
     * @tc.name int8ArrayIncludesPart02Test017
     * @tc.desc Verify includes searchElement=10, 0 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test017() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertTrue(arr.includes(10, 0));
    }

    /**
     * Verify includes(0) with empty array returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_1800
     * @tc.name int8ArrayIncludesPart02Test018
     * @tc.desc Verify includes(0) with empty array returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test018() {
    Int8Array arr = new Int8Array(0);
    assertFalse(arr.includes(0));
    }

    /**
     * Verify includes(99) with single-element returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_1900
     * @tc.name int8ArrayIncludesPart02Test019
     * @tc.desc Verify includes(99) with single-element returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test019() {
    Int8Array arr = new Int8Array(new int[] {42});
    assertFalse(arr.includes(99));
    }

    /**
     * Verify includes searchElement=INT8_MAX returns false when element NOT found in array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_2000
     * @tc.name int8ArrayIncludesPart02Test020
     * @tc.desc Verify includes searchElement=INT8_MAX returns false when element NOT found in array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test020() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    assertFalse(arr.includes(INT8_MAX));
    }

    /**
     * Verify includes(200) returns false on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_2100
     * @tc.name int8ArrayIncludesPart02Test021
     * @tc.desc Verify includes(200) returns false on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test021() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    assertFalse(arr.includes(200));
    }

    /**
     * Verify includes searchElement=1, 5 returns false when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_2200
     * @tc.name int8ArrayIncludesPart02Test022
     * @tc.desc Verify includes searchElement=1, 5 returns false when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test022() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    assertFalse(arr.includes(1, 5));
    }

    /**
     * Verify includes searchElement=1, 3 returns false when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_2300
     * @tc.name int8ArrayIncludesPart02Test023
     * @tc.desc Verify includes searchElement=1, 3 returns false when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test023() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    assertFalse(arr.includes(1, 3));
    }

    /**
     * Verify includes searchElement=1, 1 returns false when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_2400
     * @tc.name int8ArrayIncludesPart02Test024
     * @tc.desc Verify includes searchElement=1, 1 returns false when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test024() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    assertFalse(arr.includes(1, 1));
    }

    /**
     * Verify includes searchElement=1, -2 returns false when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_2500
     * @tc.name int8ArrayIncludesPart02Test025
     * @tc.desc Verify includes searchElement=1, -2 returns false when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test025() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    assertFalse(arr.includes(1, -2));
    }

    /**
     * Verify includes(99) returns false on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_2700
     * @tc.name int8ArrayIncludesPart02Test027
     * @tc.desc Verify includes(99) returns false on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test027() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean r1 = arr.includes(99);
    assertFalse(r1);
    }

    /**
     * Verify includes(0x81) returns false on new Int8Array(new int[] {-INT8_MAX, 0, 1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_2800
     * @tc.name int8ArrayIncludesPart02Test028
     * @tc.desc Verify includes(0x81) returns false on new Int8Array(new int[] {-INT8_MAX, 0, 1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test028() {
    Int8Array arr = new Int8Array(new int[] {-INT8_MAX, 0, 1});
    boolean r1 = arr.includes(0x81);
    assertFalse(r1);
    }

    /**
     * Verify includes(-128) returns false on empty Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_2900
     * @tc.name int8ArrayIncludesPart02Test029
     * @tc.desc Verify includes(-128) returns false on empty Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test029() {
    Int8Array arr = new Int8Array(0);
    boolean r1 = arr.includes(-128);
    assertFalse(r1);
    }

    /**
     * Verify includes(0x100) returns false on new Int8Array(new int[] {0, 1, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_3000
     * @tc.name int8ArrayIncludesPart02Test030
     * @tc.desc Verify includes(0x100) returns false on new Int8Array(new int[] {0, 1, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test030() {
    Int8Array arr = new Int8Array(new int[] {0, 1, 2});
    boolean r1 = arr.includes(0x100);
    assertFalse(r1);
    }

    /**
     * Verify includes(-129) returns false on new Int8Array(new int[] {INT8_MAX, 0, 1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_3100
     * @tc.name int8ArrayIncludesPart02Test031
     * @tc.desc Verify includes(-129) returns false on new Int8Array(new int[] {INT8_MAX, 0, 1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test031() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, 0, 1});
    boolean r1 = arr.includes(-129);
    assertFalse(r1);
    }

    /**
     * Verify includes(2) does not change array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_3400
     * @tc.name int8ArrayIncludesPart02Test034
     * @tc.desc Verify includes(2) does not change array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test034() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean r1 = arr.includes(2);
    assertTrue(r1);
    int r2 = arr.length();
    int e2 = 3;
    assertEqual(e2, r2);
    }

    /**
     * Verify includes(42) does not change length of single-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_3500
     * @tc.name int8ArrayIncludesPart02Test035
     * @tc.desc Verify includes(42) does not change length of single-element array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test035() {
    Int8Array arr = new Int8Array(new int[] {42});
    boolean r1 = arr.includes(42);
    assertTrue(r1);
    int r2 = arr.length();
    int e2 = 1;
    assertEqual(e2, r2);
    }

    /**
     * Verify includes(0) does not change length of empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_3600
     * @tc.name int8ArrayIncludesPart02Test036
     * @tc.desc Verify includes(0) does not change length of empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test036() {
    Int8Array arr = new Int8Array(0);
    boolean r1 = arr.includes(0);
    assertFalse(r1);
    int r2 = arr.length();
    int e2 = 0;
    assertEqual(e2, r2);
    }

    /**
     * Verify includes(20) returns true and does not change elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_3700
     * @tc.name int8ArrayIncludesPart02Test037
     * @tc.desc Verify includes(20) returns true and does not change elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test037() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    boolean r1 = arr.includes(20);
    assertTrue(r1);
    assertEqualInt(10, arr.get(0));
    int r2 = arr.get(2);
    int e2 = 30;
    assertEqual(e2, r2);
    int r3 = arr.get(1);
    int e3 = 20;
    assertEqual(e3, r3);
    }

    /**
     * Verify includes(200) returns false on new Int8Array(new int[] {-56, 1, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_3800
     * @tc.name int8ArrayIncludesPart02Test038
     * @tc.desc Verify includes(200) returns false on new Int8Array(new int[] {-56, 1, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test038() {
    Int8Array arr = new Int8Array(new int[] {-56, 1, 2});
    boolean r1 = arr.includes(200);
    assertFalse(r1);
    }

    /**
     * Verify includes(5, -1) returns true on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_3900
     * @tc.name int8ArrayIncludesPart02Test039
     * @tc.desc Verify includes(5, -1) returns true on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test039() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean r1 = arr.includes(5, -1);
    assertTrue(r1);
    }

    /**
     * Verify includes(2) does not change byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_4000
     * @tc.name int8ArrayIncludesPart02Test040
     * @tc.desc Verify includes(2) does not change byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test040() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean r1 = arr.includes(2);
    assertTrue(r1);
    int r2 = arr.byteOffset();
    int e2 = 0;
    assertEqual(e2, r2);
    }

    /**
     * Verify includes(2) does not change buffer byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_4100
     * @tc.name int8ArrayIncludesPart02Test041
     * @tc.desc Verify includes(2) does not change buffer byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test041() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean r1 = arr.includes(2);
    assertTrue(r1);
    int r2 = arr.buffer().byteLength();
    int e2 = 3;
    assertEqual(e2, r2);
    }

    /**
     * Verify includes(1) with empty array returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_4200
     * @tc.name int8ArrayIncludesPart02Test042
     * @tc.desc Verify includes(1) with empty array returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test042() {
    Int8Array arr = new Int8Array(0);
    boolean r1 = arr.includes(1);
    assertFalse(r1);
    }

    /**
     * Verify includes(7) with single-element returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_4300
     * @tc.name int8ArrayIncludesPart02Test043
     * @tc.desc Verify includes(7) with single-element returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test043() {
    Int8Array arr = new Int8Array(new int[] {7});
    boolean r1 = arr.includes(7);
    assertTrue(r1);
    }

    /**
     * Verify includes(-128) with single-element returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_4400
     * @tc.name int8ArrayIncludesPart02Test044
     * @tc.desc Verify includes(-128) with single-element returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test044() {
    Int8Array arr = new Int8Array(new int[] {0});
    boolean r1 = arr.includes(-128);
    assertFalse(r1);
    }

    /**
     * Verify includes(-128) returns true on Int8Array(100)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_4500
     * @tc.name int8ArrayIncludesPart02Test045
     * @tc.desc Verify includes(-128) returns true on Int8Array(100)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test045() {
    Int8Array arr = new Int8Array(100);
    arr.set(50, -128);
    boolean r1 = arr.includes(-128);
    assertTrue(r1);
    }

    /**
     * Verify includes searchElement=99 returns false when element NOT found in Int8Array(100)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_4600
     * @tc.name int8ArrayIncludesPart02Test046
     * @tc.desc Verify includes searchElement=99 returns false when element NOT found in Int8Array(100)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test046() {
    Int8Array arr = new Int8Array(100);
    boolean r1 = arr.includes(99);
    assertFalse(r1);
    }

    /**
     * Verify includes(0) returns true on new Int8Array(5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_4700
     * @tc.name int8ArrayIncludesPart02Test047
     * @tc.desc Verify includes(0) returns true on new Int8Array(5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test047() {
    Int8Array arr = new Int8Array(5);
    boolean r1 = arr.includes(0);
    assertTrue(r1);
    }

    /**
     * Verify includes(-128) returns true on new Int8Array(new int[] {-128, -128, -128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_4800
     * @tc.name int8ArrayIncludesPart02Test048
     * @tc.desc Verify includes(-128) returns true on new Int8Array(new int[] {-128, -128, -128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test048() {
    Int8Array arr = new Int8Array(new int[] {-128, -128, -128});
    boolean r1 = arr.includes(-128);
    assertTrue(r1);
    }

    /**
     * Verify includes(INT8_MAX) on new Int8Array(new int[] {INT8_MAX, INT8_MAX, INT8_MAX}) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_4900
     * @tc.name int8ArrayIncludesPart02Test049
     * @tc.desc Verify includes(INT8_MAX) on new Int8Array(new int[] {INT8_MAX, INT8_MAX, INT8_MAX}) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test049() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, INT8_MAX, INT8_MAX});
    boolean r1 = arr.includes(INT8_MAX);
    assertTrue(r1);
    }

    /**
     * Verify includes searchElement=-0 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_5000
     * @tc.name int8ArrayIncludesPart02Test050
     * @tc.desc Verify includes searchElement=-0 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test050() {
    Int8Array arr = new Int8Array(new int[] {0, 1, 2});
    boolean r1 = arr.includes(-0);
    assertTrue(r1);
    }

    /**
     * Verify includes searchElement=5, 2 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_5100
     * @tc.name int8ArrayIncludesPart02Test051
     * @tc.desc Verify includes searchElement=5, 2 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test051() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5, 5});
    boolean r1 = arr.includes(5, 2);
    assertTrue(r1);
    }

    /**
     * Verify includes searchElement=5, 4 returns false when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_5200
     * @tc.name int8ArrayIncludesPart02Test052
     * @tc.desc Verify includes searchElement=5, 4 returns false when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test052() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5, 5});
    boolean r1 = arr.includes(5, 4);
    assertFalse(r1);
    }

    /**
     * Verify includes searchElement=3, 2 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_5300
     * @tc.name int8ArrayIncludesPart02Test053
     * @tc.desc Verify includes searchElement=3, 2 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test053() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean r1 = arr.includes(3, 2);
    assertTrue(r1);
    }

    /**
     * Verify includes searchElement=1, -3 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_5400
     * @tc.name int8ArrayIncludesPart02Test054
     * @tc.desc Verify includes searchElement=1, -3 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test054() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean r1 = arr.includes(1, -3);
    assertTrue(r1);
    }

    /**
     * Verify includes searchElement=1, -4 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_5500
     * @tc.name int8ArrayIncludesPart02Test055
     * @tc.desc Verify includes searchElement=1, -4 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test055() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean r1 = arr.includes(1, -4);
    assertTrue(r1);
    }

    /**
     * Verify includes(2) on subarray(1, 4) returns true and includes(1) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_5600
     * @tc.name int8ArrayIncludesPart02Test056
     * @tc.desc Verify includes(2) on subarray(1, 4) returns true and includes(1) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test056() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array view = arr.subarray(1, 4);
    boolean r1 = view.includes(2);
    assertTrue(r1);
    boolean r2 = view.includes(1);
    assertFalse(r2);
    }

    /**
     * Verify includes(2) on subarray(1, 4) does not modify original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_5700
     * @tc.name int8ArrayIncludesPart02Test057
     * @tc.desc Verify includes(2) on subarray(1, 4) does not modify original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test057() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array view = arr.subarray(1, 4);
    boolean r1 = view.includes(2);
    assertTrue(r1);
    int r2 = arr.get(0);
    int e2 = 1;
    assertEqual(e2, r2);
    }

    /**
     * Verify includes(2) on subarray(1, 4) does not change view byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_5800
     * @tc.name int8ArrayIncludesPart02Test058
     * @tc.desc Verify includes(2) on subarray(1, 4) does not change view byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test058() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array view = arr.subarray(1, 4);
    boolean has2 = view.includes(2);
    assertTrue(has2);
    int r1 = view.byteOffset();
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify includes(2) on subarray(1, 4) does not change view length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_5900
     * @tc.name int8ArrayIncludesPart02Test059
     * @tc.desc Verify includes(2) on subarray(1, 4) does not change view length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test059() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array view = arr.subarray(1, 4);
    boolean has2 = view.includes(2);
    assertTrue(has2);
    int r1 = view.length();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify includes(42) returns true on new Int8Array(buf, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_6000
     * @tc.name int8ArrayIncludesPart02Test060
     * @tc.desc Verify includes(42) returns true on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test060() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf, 0, 4);
    arr.set(0, 42);
    boolean r1 = arr.includes(42);
    assertTrue(r1);
    }

    /**
     * Verify includes(42) returns true on new Int8Array(buf, 4, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_6100
     * @tc.name int8ArrayIncludesPart02Test061
     * @tc.desc Verify includes(42) returns true on new Int8Array(buf, 4, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test061() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 4, 4);
    arr.set(0, 42);
    boolean r1 = arr.includes(42);
    assertTrue(r1);
    }

    /**
     * Verify includes(42) does not change byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_6200
     * @tc.name int8ArrayIncludesPart02Test062
     * @tc.desc Verify includes(42) does not change byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test062() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 4, 4);
    arr.set(0, 42);
    boolean r1 = arr.includes(42);
    assertTrue(r1);
    int r2 = arr.byteOffset();
    int e2 = 4;
    assertEqual(e2, r2);
    }

    /**
     * Verify includes(200) out-of-range value absent from new Int8Array(new int[] {-56, 1, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_6300
     * @tc.name int8ArrayIncludesPart02Test063
     * @tc.desc Verify includes(200) out-of-range value absent from new Int8Array(new int[] {-56, 1, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test063() {
    Int8Array arr = new Int8Array(new int[] {-56, 1, 2});
    boolean r1 = arr.includes(200);
    assertFalse(r1);
    }

    /**
     * Verify includes searchElement=128 returns false when element NOT found (out of byte range) in [-128, 0, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_6400
     * @tc.name int8ArrayIncludesPart02Test064
     * @tc.desc Verify includes searchElement=128 returns false when element NOT found (out of
     * byte range) in [-128, 0, 1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test064() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, 1});
    boolean r1 = arr.includes(128);
    assertFalse(r1);
    }

    /**
     * Verify includes searchElement=255 returns false when element NOT found (out of byte range) in [-1, 0, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_6500
     * @tc.name int8ArrayIncludesPart02Test065
     * @tc.desc Verify includes searchElement=255 returns false when element NOT found (out of byte range) in [-1, 0, 1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test065() {
    Int8Array arr = new Int8Array(new int[] {-1, 0, 1});
    boolean r1 = arr.includes(255);
    assertFalse(r1);
    }

    /**
     * Verify includes(0x81) returns false on new Int8Array(new int[] {-127, 0, 1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_6900
     * @tc.name int8ArrayIncludesPart02Test069
     * @tc.desc Verify includes(0x81) returns false on new Int8Array(new int[] {-127, 0, 1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test069() {
    Int8Array arr = new Int8Array(new int[] {-127, 0, 1});
    boolean r1 = arr.includes(0x81);
    assertFalse(r1);
    }

    /**
     * Verify includes(-129) returns false on new Int8Array(new int[] {127, 0, 1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART02_TEST_7000
     * @tc.name int8ArrayIncludesPart02Test070
     * @tc.desc Verify includes(-129) returns false on new Int8Array(new int[] {127, 0, 1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart02Test070() {
    Int8Array arr = new Int8Array(new int[] {127, 0, 1});
    boolean r1 = arr.includes(-129);
    assertFalse(r1);
    }
}
