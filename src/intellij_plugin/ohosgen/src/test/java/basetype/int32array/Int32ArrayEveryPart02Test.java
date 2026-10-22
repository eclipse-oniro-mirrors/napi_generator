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
import basetype.common.BasTest;

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayEveryPart02Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayEveryPart02Test extends BasTest {
    /**
     * Verify every returns true for an all-positive array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_0100
     * @tc.name int32ArrayEveryPart02Test001
     * @tc.desc Verify every returns true for an all-positive array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test001() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    boolean r = arr.every((e, unusedIndex, array) -> e > 0);
    assertTrue(r);
    }

    /**
     * Verify every returns true for an empty Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_0300
     * @tc.name int32ArrayEveryPart02Test003
     * @tc.desc Verify every returns true for an empty Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test003() {
    Int32Array arr = new Int32Array(0);
    boolean r = arr.every((e, unusedIndex, array) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify every returns the primitive boolean true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_0400
     * @tc.name int32ArrayEveryPart02Test004
     * @tc.desc Verify every returns the primitive boolean true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test004() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean r = arr.every((e, unusedIndex, array) -> e > 0);
    assertTrue(r);
    }

    /**
     * Verify 1 truthy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_0500
     * @tc.name int32ArrayEveryPart02Test005
     * @tc.desc Verify 1 truthy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test005() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    boolean r = arr.every((e, unusedIndex, array) -> e > 0);
    assertTrue(r);
    }

    /**
     * Verify every returns true for an all-positive array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_0700
     * @tc.name int32ArrayEveryPart02Test007
     * @tc.desc Verify every returns true for an all-positive array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test007() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean r = arr.every((e, unusedIndex, array) -> e > 0);
    assertTrue(r);
    }

    /**
     * Verify predicate true true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_0800
     * @tc.name int32ArrayEveryPart02Test008
     * @tc.desc Verify predicate true true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test008() {
    Int32Array arr = new Int32Array(new int[] {42});
    boolean r = arr.every((e, unusedIndex, array) -> e == 42);
    assertTrue(r);
    }

    /**
     * Verify predicate false false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_0900
     * @tc.name int32ArrayEveryPart02Test009
     * @tc.desc Verify predicate false false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test009() {
    Int32Array arr = new Int32Array(new int[] {42});
    boolean r = arr.every((e, unusedIndex, array) -> e != 42);
    assertFalse(r);
    }

    /**
     * Verify predicate true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_1000
     * @tc.name int32ArrayEveryPart02Test010
     * @tc.desc Verify predicate true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test010() {
    Int32Array arr = new Int32Array(new int[] {2, 4, 6, 8});
    boolean r = arr.every((e, unusedIndex, array) -> e % 2 == 0);
    assertTrue(r);
    }

    /**
     * Verify true predicate true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_1200
     * @tc.name int32ArrayEveryPart02Test012
     * @tc.desc Verify true predicate true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test012() {
    Int32Array arr = new Int32Array(new double[] {Integer.MIN_VALUE, 0, 2147483647});
    boolean r = arr.every((e, unusedIndex, array) -> true);
    assertTrue(r);
    }

    /**
     * Verify false predicate false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_1300
     * @tc.name int32ArrayEveryPart02Test013
     * @tc.desc Verify false predicate false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test013() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    boolean r = arr.every((e, unusedIndex, array) -> false);
    assertFalse(r);
    }

    /**
     * Verify predicate e===0 true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_1500
     * @tc.name int32ArrayEveryPart02Test015
     * @tc.desc Verify predicate e===0 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test015() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0, 0});
    boolean r = arr.every((e, unusedIndex, array) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify predicate e!==0 false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_1600
     * @tc.name int32ArrayEveryPart02Test016
     * @tc.desc Verify predicate e!==0 false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test016() {
    Int32Array arr = new Int32Array(new int[] {0, 0});
    boolean r = arr.every((e, unusedIndex, array) -> e != 0);
    assertFalse(r);
    }

    /**
     * Verify INT32_MAX predicate e<=INT32_MAX true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_1700
     * @tc.name int32ArrayEveryPart02Test017
     * @tc.desc Verify INT32_MAX predicate e<=INT32_MAX true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test017() {
    Int32Array arr = new Int32Array(new double[] {2, 2147483647, 4});
    boolean r = arr.every((e, unusedIndex, array) -> e <= 2147483647);
    assertTrue(r);
    }

    /**
     * Verify INT32_MIN predicate e>=INT32_MIN true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_1800
     * @tc.name int32ArrayEveryPart02Test018
     * @tc.desc Verify INT32_MIN predicate e>=INT32_MIN true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test018() {
    Int32Array arr = new Int32Array(new double[] {2, Integer.MIN_VALUE, 4});
    int minValue = -2147483647 - 1;
    boolean r = arr.every((e, unusedIndex, array) -> e >= minValue);
    assertTrue(r);
    }

    /**
     * Verify every predicate true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_1900
     * @tc.name int32ArrayEveryPart02Test019
     * @tc.desc Verify every predicate true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test019() {
    Int32Array arr = new Int32Array(new int[] {3, 6, 9});
    boolean r1 = arr.every((e, unusedIndex, array) -> e % 3 == 0);
    boolean r2 = arr.every((e, unusedIndex, array) -> e % 3 == 0);
    assertEqual(r2, r1);
    assertTrue(r1);
    }

    /**
     * Verify every predicate false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_2000
     * @tc.name int32ArrayEveryPart02Test020
     * @tc.desc Verify every predicate false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test020() {
    Int32Array arr = new Int32Array(new int[] {3, 7, 9});
    boolean r1 = arr.every((e, unusedIndex, array) -> e % 3 == 0);
    boolean r2 = arr.every((e, unusedIndex, array) -> e % 3 == 0);
    assertEqual(r2, r1);
    assertFalse(r1);
    }

    /**
     * Verify 5.7 ToInt32 5 predicate e===5 true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_2300
     * @tc.name int32ArrayEveryPart02Test023
     * @tc.desc Verify 5.7 ToInt32 5 predicate e===5 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test023() {
    Int32Array arr = new Int32Array(new double[] {5.7});
    boolean r = arr.every((e, unusedIndex, array) -> e == 5);
    assertTrue(r);
    }

    /**
     * Verify +Infinity ToInt32 0 predicate e===0 true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_2500
     * @tc.name int32ArrayEveryPart02Test025
     * @tc.desc Verify +Infinity ToInt32 0 predicate e===0 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test025() {
    Int32Array arr = new Int32Array(new double[] {Double.POSITIVE_INFINITY});
    boolean r = arr.every((e, unusedIndex, array) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify Double.NEGATIVE_INFINITY ToInt32 0 predicate e===0 true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_2600
     * @tc.name int32ArrayEveryPart02Test026
     * @tc.desc Verify Double.NEGATIVE_INFINITY ToInt32 0 predicate e===0 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test026() {
    Int32Array arr = new Int32Array(new double[] {Double.NEGATIVE_INFINITY});
    boolean r = arr.every((e, unusedIndex, array) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify i 0..length-1 true true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_2700
     * @tc.name int32ArrayEveryPart02Test027
     * @tc.desc Verify i 0..length-1 true true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test027() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    boolean r = arr.every((e, i, a) -> i >= 0 && i < a.length());
    assertTrue(r);
    }

    /**
     * Verify i>0 false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_2800
     * @tc.name int32ArrayEveryPart02Test028
     * @tc.desc Verify i>0 false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test028() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    boolean r = arr.every((e, i, array) -> i > 0);
    assertFalse(r);
    }

    /**
     * Verify every true if
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_2900
     * @tc.name int32ArrayEveryPart02Test029
     * @tc.desc Verify every true if
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test029() {
    Int32Array arr = new Int32Array(new int[] {3, 6, 9});
    String[] branch = {"none"};
    if (arr.every((e, unusedIndex, array) -> e % 3 == 0)) {
    branch[0] = "allTriple";
    } else {
    branch[0] = "hasOther";
    }
    assertEqual("allTriple", branch[0]);
    }

    /**
     * Verify every false if
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_3000
     * @tc.name int32ArrayEveryPart02Test030
     * @tc.desc Verify every false if
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test030() {
    Int32Array arr = new Int32Array(new int[] {3, 7, 9});
    String[] branch = {"none"};
    if (arr.every((e, unusedIndex, array) -> e % 3 == 0)) {
    branch[0] = "allTriple";
    } else {
    branch[0] = "hasOther";
    }
    assertEqual("hasOther", branch[0]);
    }

    /**
     * Verify every length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_3200
     * @tc.name int32ArrayEveryPart02Test032
     * @tc.desc Verify every length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test032() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7});
    int before = arr.length();
    arr.every((e, unusedIndex, array) -> e > 0);
    assertEqual(before, arr.length());
    assertEqual(3, arr.length());
    }

    /**
     * Verify every length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART02_TEST_3300
     * @tc.name int32ArrayEveryPart02Test033
     * @tc.desc Verify every length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart02Test033() {
    Int32Array arr = new Int32Array(new int[] {5, -6, 7});
    int before = arr.length();
    arr.every((e, unusedIndex, array) -> e > 0);
    assertEqual(before, arr.length());
    assertEqual(3, arr.length());
    }
}
