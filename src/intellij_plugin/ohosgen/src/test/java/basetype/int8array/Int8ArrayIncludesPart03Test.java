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
import basetype.common.BasTest;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayIncludesPart03Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIncludesPart03Test extends BasTest {
    private static int INT8_MAX = 127;

    /**
     * Verify includes searchElement=3 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_0100
     * @tc.name int8ArrayIncludesPart03Test001
     * @tc.desc Verify includes searchElement=3 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test001() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(3);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=3, 1 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_0200
     * @tc.name int8ArrayIncludesPart03Test002
     * @tc.desc Verify includes searchElement=3, 1 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test002() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(3, 1);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=1, -1 returns false when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_0400
     * @tc.name int8ArrayIncludesPart03Test004
     * @tc.desc Verify includes searchElement=1, -1 returns false when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test004() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(1, -1);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=4, -2 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_0500
     * @tc.name int8ArrayIncludesPart03Test005
     * @tc.desc Verify includes searchElement=4, -2 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test005() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(4, -2);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=3, -2 returns false when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_0600
     * @tc.name int8ArrayIncludesPart03Test006
     * @tc.desc Verify includes searchElement=3, -2 returns false when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test006() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(3, -2);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=1, -5 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_0700
     * @tc.name int8ArrayIncludesPart03Test007
     * @tc.desc Verify includes searchElement=1, -5 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test007() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(1, -5);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=1, -6 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_0800
     * @tc.name int8ArrayIncludesPart03Test008
     * @tc.desc Verify includes searchElement=1, -6 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test008() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(1, -6);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=3, -2147483648 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_0900
     * @tc.name int8ArrayIncludesPart03Test009
     * @tc.desc Verify includes searchElement=3, -2147483648 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test009() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(3, Integer.MIN_VALUE);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=1, 0 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_1000
     * @tc.name int8ArrayIncludesPart03Test010
     * @tc.desc Verify includes searchElement=1, 0 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test010() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(1, 0);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=1, 2 returns false when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_1100
     * @tc.name int8ArrayIncludesPart03Test011
     * @tc.desc Verify includes searchElement=1, 2 returns false when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test011() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(1, 2);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=3, 2 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_1200
     * @tc.name int8ArrayIncludesPart03Test012
     * @tc.desc Verify includes searchElement=3, 2 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test012() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(3, 2);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=5, 4 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_1300
     * @tc.name int8ArrayIncludesPart03Test013
     * @tc.desc Verify includes searchElement=5, 4 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test013() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(5, 4);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=4, 4 returns false when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_1400
     * @tc.name int8ArrayIncludesPart03Test014
     * @tc.desc Verify includes searchElement=4, 4 returns false when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test014() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(4, 4);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=5, 5 returns false when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_1500
     * @tc.name int8ArrayIncludesPart03Test015
     * @tc.desc Verify includes searchElement=5, 5 returns false when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test015() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(5, 5);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=3, 6 returns false when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_1600
     * @tc.name int8ArrayIncludesPart03Test016
     * @tc.desc Verify includes searchElement=3, 6 returns false when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test016() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(3, 6);
    assertFalse(result);
    }

    /**
     * Verify includes(3, 2147483647) with large fromIndex returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_1700
     * @tc.name int8ArrayIncludesPart03Test017
     * @tc.desc Verify includes(3, 2147483647) with large fromIndex returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test017() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(3, 2147483647);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=1, undefined returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_1800
     * @tc.name int8ArrayIncludesPart03Test018
     * @tc.desc Verify includes searchElement=1, undefined returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test018() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.includes(1, 0);
    assertTrue(result);
    }

    /**
     * Verify includes(INT8_MAX) returns true on new Int8Array(new int[] {INT8_MAX, 1, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_1900
     * @tc.name int8ArrayIncludesPart03Test019
     * @tc.desc Verify includes(INT8_MAX) returns true on new Int8Array(new int[] {INT8_MAX, 1, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test019() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, 1, 2});
    boolean result = arr.includes(INT8_MAX);
    assertTrue(result);
    }

    /**
     * Verify includes(0) returns true on new Int8Array(new int[] {0, 1, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_2000
     * @tc.name int8ArrayIncludesPart03Test020
     * @tc.desc Verify includes(0) returns true on new Int8Array(new int[] {0, 1, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test020() {
    Int8Array arr = new Int8Array(new int[] {0, 1, 2});
    boolean result = arr.includes(0);
    assertTrue(result);
    }

    /**
     * Verify includes(10) returns false on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_2100
     * @tc.name int8ArrayIncludesPart03Test021
     * @tc.desc Verify includes(10) returns false on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test021() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.includes(10);
    assertFalse(result);
    }

    /**
     * Verify includes(9) checks element presence in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_2200
     * @tc.name int8ArrayIncludesPart03Test022
     * @tc.desc Verify includes(9) checks element presence in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test022() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.includes(9);
    assertFalse(result);
    }

    /**
     * Verify includes(3, 1) does not mutate array: length remains 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_2300
     * @tc.name int8ArrayIncludesPart03Test023
     * @tc.desc Verify includes(3, 1) does not mutate array: length remains 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test023() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean r1 = arr.includes(3, 1);
    assertTrue(r1);
    int r2 = arr.length();
    int e2 = 5;
    assertEqual(e2, r2);
    }

    /**
     * Verify includes(3, 1) does not mutate array: element at index 2 remains 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_2400
     * @tc.name int8ArrayIncludesPart03Test024
     * @tc.desc Verify includes(3, 1) does not mutate array: element at index 2 remains 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test024() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean r1 = arr.includes(3, 1);
    assertTrue(r1);
    Integer r2 = arr.get(2);
    int e2 = 3;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify includes(1) with empty array returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_2500
     * @tc.name int8ArrayIncludesPart03Test025
     * @tc.desc Verify includes(1) with empty array returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test025() {
    Int8Array arr = new Int8Array(0);
    boolean result = arr.includes(1);
    assertFalse(result);
    }

    /**
     * Verify includes(1, -1) with empty array returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_2600
     * @tc.name int8ArrayIncludesPart03Test026
     * @tc.desc Verify includes(1, -1) with empty array returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test026() {
    Int8Array arr = new Int8Array(0);
    boolean result = arr.includes(1, -1);
    assertFalse(result);
    }

    /**
     * Verify includes(1, 5) with empty array returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_2700
     * @tc.name int8ArrayIncludesPart03Test027
     * @tc.desc Verify includes(1, 5) with empty array returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test027() {
    Int8Array arr = new Int8Array(0);
    boolean result = arr.includes(1, 5);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=7 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_2900
     * @tc.name int8ArrayIncludesPart03Test029
     * @tc.desc Verify includes searchElement=7 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test029() {
    Int8Array arr = Int8Array.of(7);
    boolean result = arr.includes(7);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=7, 0 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_3000
     * @tc.name int8ArrayIncludesPart03Test030
     * @tc.desc Verify includes searchElement=7, 0 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test030() {
    Int8Array arr = Int8Array.of(7);
    boolean result = arr.includes(7, 0);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=7, -1 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_3100
     * @tc.name int8ArrayIncludesPart03Test031
     * @tc.desc Verify includes searchElement=7, -1 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test031() {
    Int8Array arr = Int8Array.of(7);
    boolean result = arr.includes(7, -1);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=7, 1 returns false when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_3200
     * @tc.name int8ArrayIncludesPart03Test032
     * @tc.desc Verify includes searchElement=7, 1 returns false when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test032() {
    Int8Array arr = Int8Array.of(7);
    boolean result = arr.includes(7, 1);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=7, -2 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_3300
     * @tc.name int8ArrayIncludesPart03Test033
     * @tc.desc Verify includes searchElement=7, -2 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test033() {
    Int8Array arr = Int8Array.of(7);
    boolean result = arr.includes(7, -2);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=8 returns false when element does not exist in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_3400
     * @tc.name int8ArrayIncludesPart03Test034
     * @tc.desc Verify includes searchElement=8 returns false when element does not exist in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test034() {
    Int8Array arr = Int8Array.of(7);
    boolean result = arr.includes(8);
    assertFalse(result);
    }

    /**
     * Verify includes(7, 2147483647) with large fromIndex returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_3500
     * @tc.name int8ArrayIncludesPart03Test035
     * @tc.desc Verify includes(7, 2147483647) with large fromIndex returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test035() {
    Int8Array arr = Int8Array.of(7);
    boolean result = arr.includes(7, 2147483647);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=5 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_3600
     * @tc.name int8ArrayIncludesPart03Test036
     * @tc.desc Verify includes searchElement=5 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test036() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5, 5});
    boolean result = arr.includes(5);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=5, 2 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_3700
     * @tc.name int8ArrayIncludesPart03Test037
     * @tc.desc Verify includes searchElement=5, 2 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test037() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5, 5});
    boolean result = arr.includes(5, 2);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=5, 4 returns false when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_3800
     * @tc.name int8ArrayIncludesPart03Test038
     * @tc.desc Verify includes searchElement=5, 4 returns false when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test038() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5, 5});
    boolean result = arr.includes(5, 4);
    assertFalse(result);
    }

    /**
     * Verify includes(5, -1) with negative fromIndex returns true on new Int8Array(new int[] {5, 5, 5, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_3900
     * @tc.name int8ArrayIncludesPart03Test039
     * @tc.desc Verify includes(5, -1) with negative fromIndex returns true on new Int8Array(new int[] {5, 5, 5, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test039() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5, 5});
    boolean result = arr.includes(5, -1);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=6 returns false when element does not exist in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_4000
     * @tc.name int8ArrayIncludesPart03Test040
     * @tc.desc Verify includes searchElement=6 returns false when element does not exist in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test040() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5, 5});
    boolean result = arr.includes(6);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=5, -4 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_4100
     * @tc.name int8ArrayIncludesPart03Test041
     * @tc.desc Verify includes searchElement=5, -4 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test041() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5, 5});
    boolean result = arr.includes(5, -4);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=5, -5 returns true when element exists in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_4200
     * @tc.name int8ArrayIncludesPart03Test042
     * @tc.desc Verify includes searchElement=5, -5 returns true when element exists in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test042() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5, 5});
    boolean result = arr.includes(5, -5);
    assertTrue(result);
    }

    /**
     * Verify includes searchElement=200, 2 returns false when element does not exist in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_4300
     * @tc.name int8ArrayIncludesPart03Test043
     * @tc.desc Verify includes searchElement=200, 2 returns false when element does not exist in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test043() {
    Int8Array arr = new Int8Array(new int[] {10, -56, 30, 40});
    boolean result = arr.includes(200, 2);
    assertFalse(result);
    }

    /**
     * Verify includes(0, 2147483647) with large fromIndex returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_4600
     * @tc.name int8ArrayIncludesPart03Test046
     * @tc.desc Verify includes(0, 2147483647) with large fromIndex returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test046() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    boolean result = arr.includes(0, 2147483647);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=200 returns false when element does not exist in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_4900
     * @tc.name int8ArrayIncludesPart03Test049
     * @tc.desc Verify includes searchElement=200 returns false when element does not exist in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test049() {
    Int8Array arr = new Int8Array(new int[] {10, 20, -56, 40});
    boolean result = arr.includes(200);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=128 returns false when element does not exist in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_5000
     * @tc.name int8ArrayIncludesPart03Test050
     * @tc.desc Verify includes searchElement=128 returns false when element does not exist in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test050() {
    Int8Array arr = new Int8Array(new int[] {-128, 1, 2});
    boolean result = arr.includes(128);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=-129 returns false when element does not exist in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_5100
     * @tc.name int8ArrayIncludesPart03Test051
     * @tc.desc Verify includes searchElement=-129 returns false when element does not exist in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test051() {
    Int8Array arr = new Int8Array(new int[] {127, 1, 2});
    boolean result = arr.includes(-129);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=255 returns false when element does not exist in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_5200
     * @tc.name int8ArrayIncludesPart03Test052
     * @tc.desc Verify includes searchElement=255 returns false when element does not exist in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test052() {
    Int8Array arr = new Int8Array(new int[] {-1, 1, 2});
    boolean result = arr.includes(255);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=256 returns false when element does not exist in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_5300
     * @tc.name int8ArrayIncludesPart03Test053
     * @tc.desc Verify includes searchElement=256 returns false when element does not exist in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test053() {
    Int8Array arr = new Int8Array(new int[] {0, 1, 2});
    boolean result = arr.includes(256);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=0x81 returns false when element does not exist in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_5800
     * @tc.name int8ArrayIncludesPart03Test058
     * @tc.desc Verify includes searchElement=0x81 returns false when element does not exist in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test058() {
    Int8Array arr = new Int8Array(new int[] {-127, 1, 2});
    boolean result = arr.includes(0x81);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=200, -1 returns false when element does not exist in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_5900
     * @tc.name int8ArrayIncludesPart03Test059
     * @tc.desc Verify includes searchElement=200, -1 returns false when element does not exist in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test059() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, -56});
    boolean result = arr.includes(200, -1);
    assertFalse(result);
    }

    /**
     * Verify includes searchElement=-129, 4 returns false when element does not exist in array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INCLUDES_PART03_TEST_6200
     * @tc.name int8ArrayIncludesPart03Test062
     * @tc.desc Verify includes searchElement=-129, 4 returns false when element does not exist in array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIncludesPart03Test062() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 127});
    boolean result = arr.includes(-129, 4);
    assertFalse(result);
    }
}
