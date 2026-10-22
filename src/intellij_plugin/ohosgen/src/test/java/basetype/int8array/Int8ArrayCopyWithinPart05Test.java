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
 * Int8ArrayCopyWithinPart05Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayCopyWithinPart05Test extends BasTest {
    private static int INT8_MAX = 127;

    /**
     * Verify copyWithin(0, 3) copies [44, 55] to head on new Int8Array(new int[] {11, 22, 33, 44, 55})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_0100
     * @tc.name int8ArrayCopyWithinPart05Test001
     * @tc.desc Verify copyWithin(0, 3) copies [44, 55] to head on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test001() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 3);
    assertEqualInt(44, arr.get(0));
    assertEqualInt(55, arr.get(1));
    }

    /**
     * Verify copyWithin(0, 3, 5) copies [44, 55] to head on new Int8Array(new int[] {11, 22, 33, 44, 55})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_0200
     * @tc.name int8ArrayCopyWithinPart05Test002
     * @tc.desc Verify copyWithin(0, 3, 5) copies [44, 55] to head on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test002() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 3, 5);
    assertEqualInt(44, arr.get(0));
    assertEqualInt(55, arr.get(1));
    }

    /**
     * Verify copyWithin target=0 start=0 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_0300
     * @tc.name int8ArrayCopyWithinPart05Test003
     * @tc.desc Verify copyWithin target=0 start=0 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test003() {
    Int8Array arr = new Int8Array(new int[] {77});
    arr.copyWithin(0, 0);
    assertEqualInt(77, arr.get(0));
    }

    /**
     * Verify copyWithin(0, 1, 0) is a no-op since start(1) > end(0), keeps arr[0] 11
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_0400
     * @tc.name int8ArrayCopyWithinPart05Test004
     * @tc.desc Verify copyWithin(0, 1, 0) is a no-op since start(1) > end(0), keeps arr[0] 11
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test004() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 1, 0);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(55, arr.get(4));
    }

    /**
     * Verify copyWithin(0, 3, 1) with start>end is a no-op keeping arr[0] 11 on new I
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_0500
     * @tc.name int8ArrayCopyWithinPart05Test005
     * @tc.desc Verify copyWithin(0, 3, 1) with start>end is a no-op keeping arr[0] 11 on new I
     * nt8Array([11, 22, 33, 44, 55])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test005() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 3, 1);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(33, arr.get(2));
    int r1 = arr.get(4);
    int e1 = 55;
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin(0, 2, 2) with start=end is a no-op keeping arr[0] 11 on new I
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_0600
     * @tc.name int8ArrayCopyWithinPart05Test006
     * @tc.desc Verify copyWithin(0, 2, 2) with start=end is a no-op keeping arr[0] 11 on new I
     * nt8Array([11, 22, 33, 44, 55])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test006() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2, 2);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(44, arr.get(3));
    }

    /**
     * Verify copyWithin(0, 3) on [11, 22, 33, 44, 55] returns the same array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_0700
     * @tc.name int8ArrayCopyWithinPart05Test007
     * @tc.desc Verify copyWithin(0, 3) on [11, 22, 33, 44, 55] returns the same array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test007() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    Int8Array result = arr.copyWithin(0, 3);
    assertEqual(arr, result);
    }

    /**
     * Verify copyWithin target=1 start=0 end=2 copies [10, 20] to result[1, 2] and returns this
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_0800
     * @tc.name int8ArrayCopyWithinPart05Test008
     * @tc.desc Verify copyWithin target=1 start=0 end=2 copies [10, 20] to result[1, 2] and returns this
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test008() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array result = arr.copyWithin(1, 0, 2);
    assertEqual(arr, result);
    int r1 = arr.get(1);
    int e1 = 10;
    assertEqual(e1, r1);
    int r2 = arr.get(2);
    int e2 = 20;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin target=1 start=3 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_0900
     * @tc.name int8ArrayCopyWithinPart05Test009
     * @tc.desc Verify copyWithin target=1 start=3 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test009() {
    Int8Array arr1 = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr1.copyWithin(1, 3);
    int r1 = arr1.get(1);
    int e1 = 44;
    assertEqual(e1, r1);
    int r2 = arr1.get(2);
    int e2 = 55;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin(0, 0, 5) copies whole array onto itself keeping [11, 55] on ne
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_1000
     * @tc.name int8ArrayCopyWithinPart05Test010
     * @tc.desc Verify copyWithin(0, 0, 5) copies whole array onto itself keeping [11, 55] on ne
     * w Int8Array([11, 22, 33, 44, 55])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test010() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 0, 5);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(55, arr.get(4));
    }

    /**
     * Verify copyWithin(0, 2, 4) copies [33, 44] to head on new Int8Array(new int[] {11, 22, 33, 44, 55})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_1100
     * @tc.name int8ArrayCopyWithinPart05Test011
     * @tc.desc Verify copyWithin(0, 2, 4) copies [33, 44] to head on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test011() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2, 4);
    assertEqualInt(33, arr.get(0));
    assertEqualInt(44, arr.get(1));
    }

    /**
     * Verify copyWithin(1, 3, 5) copies [44, 55] to result[1, 2] on new Int8Array(new int[] {11, 22, 33, 44, 55})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_1200
     * @tc.name int8ArrayCopyWithinPart05Test012
     * @tc.desc Verify copyWithin(1, 3, 5) copies [44, 55] to result[1, 2] on new Int8Array(new
     * int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test012() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(1, 3, 5);
    assertEqualInt(44, arr.get(1));
    assertEqualInt(55, arr.get(2));
    }

    /**
     * Verify copyWithin(3, 0, 2) copies [11, 22] to result[3, 4] on new Int8Array(new int[] {11, 22, 33, 44, 55})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_1300
     * @tc.name int8ArrayCopyWithinPart05Test013
     * @tc.desc Verify copyWithin(3, 0, 2) copies [11, 22] to result[3, 4] on new Int8Array(new
     * int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test013() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(3, 0, 2);
    assertEqualInt(11, arr.get(3));
    assertEqualInt(22, arr.get(4));
    }

    /**
     * Verify copyWithin(4, 0, 2) copies 11 to result[4] on new Int8Array(new int[] {11, 22, 33, 44, 55})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_1400
     * @tc.name int8ArrayCopyWithinPart05Test014
     * @tc.desc Verify copyWithin(4, 0, 2) copies 11 to result[4] on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test014() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(4, 0, 2);
    assertEqualInt(11, arr.get(4));
    }

    /**
     * Verify copyWithin(-1, 0, 2) via negative target copies 11 to result[4] on new I
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_1500
     * @tc.name int8ArrayCopyWithinPart05Test015
     * @tc.desc Verify copyWithin(-1, 0, 2) via negative target copies 11 to result[4] on new I
     * nt8Array([11, 22, 33, 44, 55])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test015() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(-1, 0, 2);
    assertEqualInt(11, arr.get(4));
    }

    /**
     * Verify copyWithin(-2, 0, 2) via negative target copies [11, 22] to result[3, 4] o
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_1600
     * @tc.name int8ArrayCopyWithinPart05Test016
     * @tc.desc Verify copyWithin(-2, 0, 2) via negative target copies [11, 22] to result[3, 4] o
     * n new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test016() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(-2, 0, 2);
    assertEqualInt(11, arr.get(3));
    assertEqualInt(22, arr.get(4));
    }

    /**
     * Verify copyWithin(-5, 3, 5) clamps target to 0 copying [44, 55] to head on new I
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_1700
     * @tc.name int8ArrayCopyWithinPart05Test017
     * @tc.desc Verify copyWithin(-5, 3, 5) clamps target to 0 copying [44, 55] to head on new I
     * nt8Array([11, 22, 33, 44, 55])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test017() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(-5, 3, 5);
    assertEqualInt(44, arr.get(0));
    assertEqualInt(55, arr.get(1));
    }

    /**
     * Verify copyWithin(2, 0, 4) copies [11, 22, 33] to result[2, 3, 4] on new Int8Array(new int[] {11, 22, 33, 44, 55})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_1800
     * @tc.name int8ArrayCopyWithinPart05Test018
     * @tc.desc Verify copyWithin(2, 0, 4) copies [11, 22, 33] to result[2, 3, 4] on new Int8Ar
     * ray(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test018() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(2, 0, 4);
    assertEqualInt(11, arr.get(2));
    assertEqualInt(22, arr.get(3));
    assertEqualInt(33, arr.get(4));
    }

    /**
     * Verify copyWithin(2, 2, 4) copies [33, 44] to result[2, 3] on new Int8Array(new int[] {11, 22, 33, 44, 55})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_1900
     * @tc.name int8ArrayCopyWithinPart05Test019
     * @tc.desc Verify copyWithin(2, 2, 4) copies [33, 44] to result[2, 3] on new Int8Array(new
     * int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test019() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(2, 2, 4);
    assertEqualInt(33, arr.get(2));
    assertEqualInt(44, arr.get(3));
    }

    /**
     * Verify copyWithin(5, 0, 2) with target at length is a no-op keeping [11, 22] on
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_2000
     * @tc.name int8ArrayCopyWithinPart05Test020
     * @tc.desc Verify copyWithin(5, 0, 2) with target at length is a no-op keeping [11, 22] on
     * new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test020() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(5, 0, 2);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(22, arr.get(1));
    }

    /**
     * Verify copyWithin(6, 0, 2) clamps target beyond length as no-op keeping arr[0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_2100
     * @tc.name int8ArrayCopyWithinPart05Test021
     * @tc.desc Verify copyWithin(6, 0, 2) clamps target beyond length as no-op keeping arr[0]
     * 11 on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test021() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(6, 0, 2);
    assertEqualInt(11, arr.get(0));
    }

    /**
     * Verify copyWithin(2147483647, 0, 2) clamps huge target to length as no-op keepi
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_2200
     * @tc.name int8ArrayCopyWithinPart05Test022
     * @tc.desc Verify copyWithin(2147483647, 0, 2) clamps huge target to length as no-op keepi
     * ng arr[0] 11 on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test022() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(2147483647, 0, 2);
    assertEqualInt(11, arr.get(0));
    }

    /**
     * Verify copyWithin(-6, 3, 5) clamps negative target to 0 copying [44, 55] to head
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_2300
     * @tc.name int8ArrayCopyWithinPart05Test023
     * @tc.desc Verify copyWithin(-6, 3, 5) clamps negative target to 0 copying [44, 55] to head
     * on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test023() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(-6, 3, 5);
    assertEqualInt(44, arr.get(0));
    assertEqualInt(55, arr.get(1));
    }

    /**
     * Verify copyWithin(-2147483648, 3, 5) clamps INT_MIN target to 0 copying [44, 55]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_2400
     * @tc.name int8ArrayCopyWithinPart05Test024
     * @tc.desc Verify copyWithin(-2147483648, 3, 5) clamps INT_MIN target to 0 copying [44, 55]
     * to head on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test024() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(Integer.MIN_VALUE, 3, 5);
    assertEqualInt(44, arr.get(0));
    assertEqualInt(55, arr.get(1));
    }

    /**
     * Verify copyWithin(15, 0, 2) clamps huge target to length as no-op keeping [11, 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_2500
     * @tc.name int8ArrayCopyWithinPart05Test025
     * @tc.desc Verify copyWithin(15, 0, 2) clamps huge target to length as no-op keeping [11, 5
     * 5] on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test025() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(15, 0, 2);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(55, arr.get(4));
    }

    /**
     * Verify copyWithin(-15, 3, 5) clamps negative target to 0 copying [44, 55] to hea
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_2600
     * @tc.name int8ArrayCopyWithinPart05Test026
     * @tc.desc Verify copyWithin(-15, 3, 5) clamps negative target to 0 copying [44, 55] to hea
     * d on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test026() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(-15, 3, 5);
    assertEqualInt(44, arr.get(0));
    assertEqualInt(55, arr.get(1));
    }

    /**
     * Verify copyWithin(3, 0, 4) copies [11, 22] to result[3, 4] keeping arr[0] 11 on n
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_2700
     * @tc.name int8ArrayCopyWithinPart05Test027
     * @tc.desc Verify copyWithin(3, 0, 4) copies [11, 22] to result[3, 4] keeping arr[0] 11 on n
     * ew Int8Array([11, 22, 33, 44, 55])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test027() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(3, 0, 4);
    assertEqualInt(11, arr.get(3));
    assertEqualInt(22, arr.get(4));
    assertEqualInt(11, arr.get(0));
    }

    /**
     * Verify copyWithin(0, 4, 5) copies 55 to head on new Int8Array(new int[] {11, 22, 33, 44, 55})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_2800
     * @tc.name int8ArrayCopyWithinPart05Test028
     * @tc.desc Verify copyWithin(0, 4, 5) copies 55 to head on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test028() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 4, 5);
    assertEqualInt(55, arr.get(0));
    }

    /**
     * Verify copyWithin target=0 start=-1 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_2900
     * @tc.name int8ArrayCopyWithinPart05Test029
     * @tc.desc Verify copyWithin target=0 start=-1 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test029() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, -1);
    assertEqualInt(55, arr.get(0));
    }

    /**
     * Verify copyWithin target=0 start=-2 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_3000
     * @tc.name int8ArrayCopyWithinPart05Test030
     * @tc.desc Verify copyWithin target=0 start=-2 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test030() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, -2);
    assertEqualInt(44, arr.get(0));
    assertEqualInt(55, arr.get(1));
    }

    /**
     * Verify copyWithin(3, -5, 5) clamps start to 0 copying [11, 22] to result[3, 4] on
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_3100
     * @tc.name int8ArrayCopyWithinPart05Test031
     * @tc.desc Verify copyWithin(3, -5, 5) clamps start to 0 copying [11, 22] to result[3, 4] on
     * new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test031() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(3, -5, 5);
    assertEqualInt(11, arr.get(3));
    assertEqualInt(22, arr.get(4));
    }

    /**
     * Verify copyWithin(0, 5, 5) with start=end=length is a no-op keeping arr[0] 11 o
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_3200
     * @tc.name int8ArrayCopyWithinPart05Test032
     * @tc.desc Verify copyWithin(0, 5, 5) with start=end=length is a no-op keeping arr[0] 11 o
     * n new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test032() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 5, 5);
    assertEqualInt(11, arr.get(0));
    }

    /**
     * Verify copyWithin(0, 6, 7) with out-of-range start is a no-op keeping arr[0] 11
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_3300
     * @tc.name int8ArrayCopyWithinPart05Test033
     * @tc.desc Verify copyWithin(0, 6, 7) with out-of-range start is a no-op keeping arr[0] 11
     * on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test033() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 6, 7);
    assertEqualInt(11, arr.get(0));
    }

    /**
     * Verify copyWithin target=0 start=2147483647 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_3400
     * @tc.name int8ArrayCopyWithinPart05Test034
     * @tc.desc Verify copyWithin target=0 start=2147483647 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test034() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2147483647);
    assertEqualInt(11, arr.get(0));
    }

    /**
     * Verify copyWithin(3, -6, 5) clamps start to 0 copying [11, 22] to result[3, 4] on
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_3500
     * @tc.name int8ArrayCopyWithinPart05Test035
     * @tc.desc Verify copyWithin(3, -6, 5) clamps start to 0 copying [11, 22] to result[3, 4] on
     * new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test035() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(3, -6, 5);
    int r1 = arr.get(3);
    int e1 = 11;
    assertEqual(e1, r1);
    int r2 = arr.get(4);
    int e2 = 22;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin(3, -2147483648, 5) clamps INT_MIN start to 0 copying [11, 22]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_3600
     * @tc.name int8ArrayCopyWithinPart05Test036
     * @tc.desc Verify copyWithin(3, -2147483648, 5) clamps INT_MIN start to 0 copying [11, 22]
     * to result[3, 4] on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test036() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(3, Integer.MIN_VALUE, 5);
    assertEqualInt(11, arr.get(3));
    assertEqualInt(22, arr.get(4));
    }

    /**
     * Verify copyWithin(0, 15) clamps start to length as no-op keeping [11, 55] on new
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_3700
     * @tc.name int8ArrayCopyWithinPart05Test037
     * @tc.desc Verify copyWithin(0, 15) clamps start to length as no-op keeping [11, 55] on new
     * Int8Array([11, 22, 33, 44, 55])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test037() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 15);
    int r1 = arr.get(0);
    int e1 = 11;
    assertEqual(e1, r1);
    int r2 = arr.get(4);
    int e2 = 55;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin target=0 start=2 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_3800
     * @tc.name int8ArrayCopyWithinPart05Test038
     * @tc.desc Verify copyWithin target=0 start=2 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test038() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2);
    int r1 = arr.get(0);
    int e1 = 33;
    assertEqual(e1, r1);
    int r2 = arr.get(2);
    int e2 = 55;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin(0, 2, 0) with start>end is a no-op keeping arr[0] 11 on new I
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_3900
     * @tc.name int8ArrayCopyWithinPart05Test039
     * @tc.desc Verify copyWithin(0, 2, 0) with start>end is a no-op keeping arr[0] 11 on new I
     * nt8Array([11, 22, 33, 44, 55])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test039() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2, 0);
    int r1 = arr.get(0);
    int e1 = 11;
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin(0, 2, 5) copies [33, 44, 55] to head on new Int8Array(new int[] {11, 22, 33, 44, 55})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_4000
     * @tc.name int8ArrayCopyWithinPart05Test040
     * @tc.desc Verify copyWithin(0, 2, 5) copies [33, 44, 55] to head on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test040() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2, 5);
    int r1 = arr.get(0);
    int e1 = 33;
    assertEqual(e1, r1);
    int r2 = arr.get(2);
    int e2 = 55;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin(3, 0, 1) copies 11 to result[3] on new Int8Array(new int[] {11, 22, 33, 44, 55})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_4100
     * @tc.name int8ArrayCopyWithinPart05Test041
     * @tc.desc Verify copyWithin(3, 0, 1) copies 11 to result[3] on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test041() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(3, 0, 1);
    int r1 = arr.get(3);
    int e1 = 11;
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin(0, 3, 4) copies 44 to head on new Int8Array(new int[] {11, 22, 33, 44, 55})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_4200
     * @tc.name int8ArrayCopyWithinPart05Test042
     * @tc.desc Verify copyWithin(0, 3, 4) copies 44 to head on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test042() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 3, 4);
    int r1 = arr.get(0);
    int e1 = 44;
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin(0, 3, -1) clamps end to 4 copying 44 to head on new Int8Array(new int[] {11, 22, 33, 44, 55})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_4300
     * @tc.name int8ArrayCopyWithinPart05Test043
     * @tc.desc Verify copyWithin(0, 3, -1) clamps end to 4 copying 44 to head on new Int8Array
     * (new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test043() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 3, -1);
    assertEqualInt(44, arr.get(0));
    }

    /**
     * Verify copyWithin(0, 2, -2) clamps end to 3 copying 33 to head on new Int8Array(new int[] {11, 22, 33, 44, 55})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_4400
     * @tc.name int8ArrayCopyWithinPart05Test044
     * @tc.desc Verify copyWithin(0, 2, -2) clamps end to 3 copying 33 to head on new Int8Array
     * (new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test044() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2, -2);
    int r1 = arr.get(0);
    int e1 = 33;
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin(0, 2, -5) with end clamped to 0 is a no-op keeping arr[0] 11
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_4500
     * @tc.name int8ArrayCopyWithinPart05Test045
     * @tc.desc Verify copyWithin(0, 2, -5) with end clamped to 0 is a no-op keeping arr[0] 11
     * on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test045() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2, -5);
    int r1 = arr.get(0);
    int e1 = 11;
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin(0, 2, 2) no-op keeps arr[0] 11, on new Int8Array(new int[] {11, 22, 33, 44, 55})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_4600
     * @tc.name int8ArrayCopyWithinPart05Test046
     * @tc.desc Verify copyWithin(0, 2, 2) no-op keeps arr[0] 11, on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test046() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2, 2);
    assertEqualInt(11, arr.get(0));
    }

    /**
     * Verify copyWithin(0, 2, 6) clamps end to length copying [33, 44, 55] to head on n
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_4700
     * @tc.name int8ArrayCopyWithinPart05Test047
     * @tc.desc Verify copyWithin(0, 2, 6) clamps end to length copying [33, 44, 55] to head on n
     * ew Int8Array([11, 22, 33, 44, 55])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test047() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2, 6);
    int r1 = arr.get(0);
    int e1 = 33;
    assertEqual(e1, r1);
    int r2 = arr.get(2);
    int e2 = 55;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin(0, 2, 2147483647) clamps huge end to length copying [33, 44, 55
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_4800
     * @tc.name int8ArrayCopyWithinPart05Test048
     * @tc.desc Verify copyWithin(0, 2, 2147483647) clamps huge end to length copying [33, 44, 55
     * ] to head on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test048() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2, 2147483647);
    assertEqualInt(33, arr.get(0));
    assertEqualInt(55, arr.get(2));
    }

    /**
     * Verify copyWithin(0, 2, -6) with end clamped to 0 is a no-op keeping arr[0] 11
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_4900
     * @tc.name int8ArrayCopyWithinPart05Test049
     * @tc.desc Verify copyWithin(0, 2, -6) with end clamped to 0 is a no-op keeping arr[0] 11
     * on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test049() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2, -6);
    int r1 = arr.get(0);
    int e1 = 11;
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin(0, 2, -2147483648) with INT_MIN end clamped to 0 is a no-op k
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_5000
     * @tc.name int8ArrayCopyWithinPart05Test050
     * @tc.desc Verify copyWithin(0, 2, -2147483648) with INT_MIN end clamped to 0 is a no-op k
     * eeping arr[0] 11 on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test050() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2, Integer.MIN_VALUE);
    assertEqualInt(11, arr.get(0));
    }

    /**
     * Verify copyWithin(0, 2, 15) copies 33 to arr[0], on new Int8Array(new int[] {11, 22, 33, 44, 55})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_5100
     * @tc.name int8ArrayCopyWithinPart05Test051
     * @tc.desc Verify copyWithin(0, 2, 15) copies 33 to arr[0], on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test051() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2, 15);
    int r1 = arr.get(0);
    int e1 = 33;
    assertEqual(e1, r1);
    int r2 = arr.get(2);
    int e2 = 55;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin(15, 0, 2) clamps target to length and is a no-op keeping [11, 22, 33, 44, 55]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_5200
     * @tc.name int8ArrayCopyWithinPart05Test052
     * @tc.desc Verify copyWithin(15, 0, 2) clamps target to length and is a no-op keeping [11, 22, 33, 44, 55]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test052() {
    Int8Array arr1 = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr1.copyWithin(15, 0, 2);
    int r1 = arr1.get(0);
    int e1 = 11;
    assertEqual(e1, r1);
    int r2 = arr1.get(1);
    int e2 = 22;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin(-15, 3, 5) clamps target to 0 copying [44, 55] to head
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_5300
     * @tc.name int8ArrayCopyWithinPart05Test053
     * @tc.desc Verify copyWithin(-15, 3, 5) clamps target to 0 copying [44, 55] to head
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test053() {
    Int8Array arr1 = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr1.copyWithin(-15, 3, 5);
    int r1 = arr1.get(0);
    int e1 = 44;
    assertEqual(e1, r1);
    int r2 = arr1.get(1);
    int e2 = 55;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin(0, 15) clamps start to length and is a no-op keeping [11, 22, 33, 44, 55]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_5400
     * @tc.name int8ArrayCopyWithinPart05Test054
     * @tc.desc Verify copyWithin(0, 15) clamps start to length and is a no-op keeping [11, 22, 33, 44, 55]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test054() {
    Int8Array arr1 = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr1.copyWithin(0, 15);
    int r1 = arr1.get(0);
    int e1 = 11;
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin(3, -15, 5) clamps start to 0 copying [11, 22] to result[3, 4] o
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_5500
     * @tc.name int8ArrayCopyWithinPart05Test055
     * @tc.desc Verify copyWithin(3, -15, 5) clamps start to 0 copying [11, 22] to result[3, 4] o
     * n new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test055() {
    Int8Array arr1 = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr1.copyWithin(3, -15, 5);
    int r1 = arr1.get(3);
    int e1 = 11;
    assertEqual(e1, r1);
    int r2 = arr1.get(4);
    int e2 = 22;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin(0, 2, 15) clamps end to length copying [33, 44, 55] to head
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_5600
     * @tc.name int8ArrayCopyWithinPart05Test056
     * @tc.desc Verify copyWithin(0, 2, 15) clamps end to length copying [33, 44, 55] to head
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test056() {
    Int8Array arr1 = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr1.copyWithin(0, 2, 15);
    int r1 = arr1.get(0);
    int e1 = 33;
    assertEqual(e1, r1);
    int r2 = arr1.get(2);
    int e2 = 55;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin(0, 2, -15) with end clamped to 0 is a no-op keeping [11, 55] o
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_5700
     * @tc.name int8ArrayCopyWithinPart05Test057
     * @tc.desc Verify copyWithin(0, 2, -15) with end clamped to 0 is a no-op keeping [11, 55] o
     * n new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test057() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2, -15);
    int r1 = arr.get(0);
    int e1 = 11;
    assertEqual(e1, r1);
    int r2 = arr.get(4);
    int e2 = 55;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin(-1, 0, 1) copies 11 to result[4] via negative target
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_5800
     * @tc.name int8ArrayCopyWithinPart05Test058
     * @tc.desc Verify copyWithin(-1, 0, 1) copies 11 to result[4] via negative target
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test058() {
    Int8Array arr1 = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr1.copyWithin(-1, 0, 1);
    int r1 = arr1.get(4);
    int e1 = 11;
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin(-5, 3, 5) clamps target to 0 copying [44, 55] to head
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_5900
     * @tc.name int8ArrayCopyWithinPart05Test059
     * @tc.desc Verify copyWithin(-5, 3, 5) clamps target to 0 copying [44, 55] to head
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test059() {
    Int8Array arr1 = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr1.copyWithin(-5, 3, 5);
    int r1 = arr1.get(0);
    int e1 = 44;
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin(-6, 3, 5) clamps target to 0 copying [44, 55] to head
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_6000
     * @tc.name int8ArrayCopyWithinPart05Test060
     * @tc.desc Verify copyWithin(-6, 3, 5) clamps target to 0 copying [44, 55] to head
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test060() {
    Int8Array arr1 = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr1.copyWithin(-6, 3, 5);
    int r1 = arr1.get(0);
    int e1 = 44;
    assertEqual(e1, r1);
    int r2 = arr1.get(1);
    int e2 = 55;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin(2147483647, 0, 2) clamps huge target as no-op keeping [11, 22]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_6100
     * @tc.name int8ArrayCopyWithinPart05Test061
     * @tc.desc Verify copyWithin(2147483647, 0, 2) clamps huge target as no-op keeping [11, 22]
     * on new Int8Array(new int[] {11, 22, 33, 44, 55})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test061() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(2147483647, 0, 2);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(22, arr.get(1));
    }

    /**
     * Verify copyWithin(5, 0, 8) copies [10, 20, 30] to result[5, 6, 7] on new Int8Array(
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_6200
     * @tc.name int8ArrayCopyWithinPart05Test062
     * @tc.desc Verify copyWithin(5, 0, 8) copies [10, 20, 30] to result[5, 6, 7] on new Int8Array(
     * [10, 20, 30, 40, 50, 60, 70, 80])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test062() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50, 60, 70, 80});
    arr.copyWithin(5, 0, 8);
    assertEqualInt(10, arr.get(5));
    assertEqualInt(20, arr.get(6));
    assertEqualInt(30, arr.get(7));
    }

    /**
     * Verify copyWithin(0, 3, 5) copies 40, 50 to head of [10, 20, 30, 40, 50, 60, 70, 80]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_6300
     * @tc.name int8ArrayCopyWithinPart05Test063
     * @tc.desc Verify copyWithin(0, 3, 5) copies 40, 50 to head of [10, 20, 30, 40, 50, 60, 70, 80]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test063() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50, 60, 70, 80});
    arr.copyWithin(0, 3, 5);
    assertEqualInt(40, arr.get(0));
    assertEqualInt(50, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify copyWithin(3, 0, 5) copies [10, 20, 30, 40, 50] to result[3..7] on new Int8A
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_6400
     * @tc.name int8ArrayCopyWithinPart05Test064
     * @tc.desc Verify copyWithin(3, 0, 5) copies [10, 20, 30, 40, 50] to result[3..7] on new Int8A
     * rray([10, 20, 30, 40, 50, 60, 70, 80])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test064() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50, 60, 70, 80});
    arr.copyWithin(3, 0, 5);
    assertEqualInt(10, arr.get(3));
    assertEqualInt(50, arr.get(7));
    }

    /**
     * Verify copyWithin(3, 0, 2) on [-128, INT8_MAX, 0, -1, 1] copies -128, INT8_MAX to result[3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_6500
     * @tc.name int8ArrayCopyWithinPart05Test065
     * @tc.desc Verify copyWithin(3, 0, 2) on [-128, INT8_MAX, 0, -1, 1] copies -128, INT8_MAX to result[3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test065() {
    Int8Array arr = new Int8Array(new int[] {-128, INT8_MAX, 0, -1, 1});
    arr.copyWithin(3, 0, 2);
    assertEqualInt(-128, arr.get(3));
    assertEqualInt(INT8_MAX, arr.get(4));
    }

    /**
     * Verify copyWithin(3, 0, 1) on [INT8_MAX, -1, 0, -128, 1] copies INT8_MAX to result[3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_6600
     * @tc.name int8ArrayCopyWithinPart05Test066
     * @tc.desc Verify copyWithin(3, 0, 1) on [INT8_MAX, -1, 0, -128, 1] copies INT8_MAX to result[3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test066() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, -1, 0, -128, 1});
    arr.copyWithin(3, 0, 1);
    assertEqualInt(INT8_MAX, arr.get(3));
    }

    /**
     * Verify copyWithin(3, 0, 1) on [0, 1, -1, INT8_MAX, -128] copies 0 to result[3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_6700
     * @tc.name int8ArrayCopyWithinPart05Test067
     * @tc.desc Verify copyWithin(3, 0, 1) on [0, 1, -1, INT8_MAX, -128] copies 0 to result[3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test067() {
    Int8Array arr = new Int8Array(new int[] {0, 1, -1, INT8_MAX, -128});
    arr.copyWithin(3, 0, 1);
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify copyWithin(-3, 0, 2) clamps target to 2 copying [11, 22] to result[2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_6800
     * @tc.name int8ArrayCopyWithinPart05Test068
     * @tc.desc Verify copyWithin(-3, 0, 2) clamps target to 2 copying [11, 22] to result[2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test068() {
    Int8Array arr1 = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr1.copyWithin(-3, 0, 2);
    int r1 = arr1.get(2);
    int e1 = 11;
    assertEqual(e1, r1);
    int r2 = arr1.get(3);
    int e2 = 22;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin(0, 2, -1) clamps end to 4 copying [33, 44] to head
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART05_TEST_6900
     * @tc.name int8ArrayCopyWithinPart05Test069
     * @tc.desc Verify copyWithin(0, 2, -1) clamps end to 4 copying [33, 44] to head
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart05Test069() {
    Int8Array arr1 = new Int8Array(new int[] {11, 22, 33, 44, 55});
    arr1.copyWithin(0, 2, -1);
    int r1 = arr1.get(0);
    int e1 = 33;
    assertEqual(e1, r1);
    int r2 = arr1.get(1);
    int e2 = 44;
    assertEqual(e2, r2);
    }
}
