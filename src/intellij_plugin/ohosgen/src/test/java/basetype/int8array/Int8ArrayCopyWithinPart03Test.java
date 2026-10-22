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
import basetype.common.BasTest;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayCopyWithinPart03Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayCopyWithinPart03Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify copyWithin(0, 3) copies 4, 5 to head on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_0100
     * @tc.name int8ArrayCopyWithinPart03Test001
     * @tc.desc Verify copyWithin(0, 3) copies 4, 5 to head on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test001() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify copyWithin(0, 2, 4) copies 3, 4 to head on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_0200
     * @tc.name int8ArrayCopyWithinPart03Test002
     * @tc.desc Verify copyWithin(0, 2, 4) copies 3, 4 to head on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test002() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2, 4);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify copyWithin target=-1 start=0 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_0300
     * @tc.name int8ArrayCopyWithinPart03Test003
     * @tc.desc Verify copyWithin target=-1 start=0 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test003() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-1, 0, 3);
    assertEqualInt(1, arr.get(4));
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify copyWithin target=-5 start=3 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_0400
     * @tc.name int8ArrayCopyWithinPart03Test004
     * @tc.desc Verify copyWithin target=-5 start=3 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test004() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-5, 3, 5);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    }

    /**
     * Verify copyWithin target=-6 start=3 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_0500
     * @tc.name int8ArrayCopyWithinPart03Test005
     * @tc.desc Verify copyWithin target=-6 start=3 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test005() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-6, 3, 5);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    }

    /**
     * Verify copyWithin target=5 start=0 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_0600
     * @tc.name int8ArrayCopyWithinPart03Test006
     * @tc.desc Verify copyWithin target=5 start=0 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test006() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(5, 0, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=6 start=0 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_0700
     * @tc.name int8ArrayCopyWithinPart03Test007
     * @tc.desc Verify copyWithin target=6 start=0 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test007() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(6, 0, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=2147483647 start=0 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_0800
     * @tc.name int8ArrayCopyWithinPart03Test008
     * @tc.desc Verify copyWithin target=2147483647 start=0 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test008() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2147483647, 0, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=-2147483648 start=3 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_0900
     * @tc.name int8ArrayCopyWithinPart03Test009
     * @tc.desc Verify copyWithin target=-2147483648 start=3 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test009() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(Integer.MIN_VALUE, 3, 5);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    }

    /**
     * Verify copyWithin target=0 start=-2 end=-1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_1000
     * @tc.name int8ArrayCopyWithinPart03Test010
     * @tc.desc Verify copyWithin target=0 start=-2 end=-1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test010() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, -2, -1);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(2, arr.get(1));
    }

    /**
     * Verify copyWithin target=0 start=-1 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_1100
     * @tc.name int8ArrayCopyWithinPart03Test011
     * @tc.desc Verify copyWithin target=0 start=-1 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test011() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, -1);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(2, arr.get(1));
    }

    /**
     * Verify copyWithin target=2 start=-5 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_1200
     * @tc.name int8ArrayCopyWithinPart03Test012
     * @tc.desc Verify copyWithin target=2 start=-5 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test012() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2, -5);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify copyWithin target=2 start=-6 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_1300
     * @tc.name int8ArrayCopyWithinPart03Test013
     * @tc.desc Verify copyWithin target=2 start=-6 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test013() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2, -6);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify copyWithin target=0 start=5 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_1400
     * @tc.name int8ArrayCopyWithinPart03Test014
     * @tc.desc Verify copyWithin target=0 start=5 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test014() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 5);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=0 start=6 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_1500
     * @tc.name int8ArrayCopyWithinPart03Test015
     * @tc.desc Verify copyWithin target=0 start=6 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test015() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 6);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=0 start=2147483647 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_1600
     * @tc.name int8ArrayCopyWithinPart03Test016
     * @tc.desc Verify copyWithin target=0 start=2147483647 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test016() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2147483647);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=2 start=-2147483648 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_1700
     * @tc.name int8ArrayCopyWithinPart03Test017
     * @tc.desc Verify copyWithin target=2 start=-2147483648 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test017() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2, Integer.MIN_VALUE);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify copyWithin target=2 start=0 end=-1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_1800
     * @tc.name int8ArrayCopyWithinPart03Test018
     * @tc.desc Verify copyWithin target=2 start=0 end=-1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test018() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2, 0, -1);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    assertEqualInt(3, arr.get(4));
    }

    /**
     * Verify copyWithin target=0 start=0 end=-5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_1900
     * @tc.name int8ArrayCopyWithinPart03Test019
     * @tc.desc Verify copyWithin target=0 start=0 end=-5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test019() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0, -5);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=0 start=0 end=-6 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_2000
     * @tc.name int8ArrayCopyWithinPart03Test020
     * @tc.desc Verify copyWithin target=0 start=0 end=-6 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test020() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0, -6);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=0 start=3 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_2100
     * @tc.name int8ArrayCopyWithinPart03Test021
     * @tc.desc Verify copyWithin target=0 start=3 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test021() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3, 5);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify copyWithin target=0 start=3 end=6 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_2200
     * @tc.name int8ArrayCopyWithinPart03Test022
     * @tc.desc Verify copyWithin target=0 start=3 end=6 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test022() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3, 6);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify copyWithin target=0 start=3 end=2147483647 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_2300
     * @tc.name int8ArrayCopyWithinPart03Test023
     * @tc.desc Verify copyWithin target=0 start=3 end=2147483647 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test023() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3, 2147483647);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify copyWithin target=0 start=0 end=-2147483648 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_2400
     * @tc.name int8ArrayCopyWithinPart03Test024
     * @tc.desc Verify copyWithin target=0 start=0 end=-2147483648 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test024() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0, Integer.MIN_VALUE);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=0 start=0 end=0 is a no-op on [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_2500
     * @tc.name int8ArrayCopyWithinPart03Test025
     * @tc.desc Verify copyWithin target=0 start=0 end=0 is a no-op on [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test025() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=0 start=3 end=undefined copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_2600
     * @tc.name int8ArrayCopyWithinPart03Test026
     * @tc.desc Verify copyWithin target=0 start=3 end=undefined copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test026() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify copyWithin target=5 start=0 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_2700
     * @tc.name int8ArrayCopyWithinPart03Test027
     * @tc.desc Verify copyWithin target=5 start=0 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test027() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(5, 0, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=0 start=3 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_2800
     * @tc.name int8ArrayCopyWithinPart03Test028
     * @tc.desc Verify copyWithin target=0 start=3 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test028() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=0 start=5 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_2900
     * @tc.name int8ArrayCopyWithinPart03Test029
     * @tc.desc Verify copyWithin target=0 start=5 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test029() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 5, 5);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=0 start=2 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_3000
     * @tc.name int8ArrayCopyWithinPart03Test030
     * @tc.desc Verify copyWithin target=0 start=2 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test030() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=0 start=-1 end=-2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_3100
     * @tc.name int8ArrayCopyWithinPart03Test031
     * @tc.desc Verify copyWithin target=0 start=-1 end=-2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test031() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, -1, -2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=0 start=0 end=0 on new Int8Array(0) keeps length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_3200
     * @tc.name int8ArrayCopyWithinPart03Test032
     * @tc.desc Verify copyWithin target=0 start=0 end=0 on new Int8Array(0) keeps length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test032() {
    Int8Array arr = new Int8Array(0);
    Int8Array result = arr.copyWithin(0, 0, 0);
    assertEqual(0, result.length());
    }

    /**
     * Verify copyWithin target=-1 start=-1 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_3300
     * @tc.name int8ArrayCopyWithinPart03Test033
     * @tc.desc Verify copyWithin target=-1 start=-1 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test033() {
    Int8Array arr = new Int8Array(0);
    Int8Array result = arr.copyWithin(-1, -1);
    assertEqual(0, result.length());
    }

    /**
     * Verify copyWithin target=5 start=0 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_3400
     * @tc.name int8ArrayCopyWithinPart03Test034
     * @tc.desc Verify copyWithin target=5 start=0 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test034() {
    Int8Array arr = new Int8Array(0);
    Int8Array result = arr.copyWithin(5, 0);
    assertEqual(0, result.length());
    }

    /**
     * Verify copyWithin target=0 start=0 on [7] keeps element 7 and length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_3500
     * @tc.name int8ArrayCopyWithinPart03Test035
     * @tc.desc Verify copyWithin target=0 start=0 on [7] keeps element 7 and length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test035() {
    Int8Array arr = new Int8Array(new int[] {7});
    arr.copyWithin(0, 0);
    assertEqualInt(7, arr.get(0));
    assertEqual(1, arr.length());
    }

    /**
     * Verify copyWithin target=0 start=0 end=1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_3600
     * @tc.name int8ArrayCopyWithinPart03Test036
     * @tc.desc Verify copyWithin target=0 start=0 end=1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test036() {
    Int8Array arr = new Int8Array(new int[] {7});
    arr.copyWithin(0, 0, 1);
    assertEqualInt(7, arr.get(0));
    }

    /**
     * Verify copyWithin target=-1 start=-1 on [7] normalizes to (0, 0) keeping element 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_3700
     * @tc.name int8ArrayCopyWithinPart03Test037
     * @tc.desc Verify copyWithin target=-1 start=-1 on [7] normalizes to (0, 0) keeping element 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test037() {
    Int8Array arr = new Int8Array(new int[] {7});
    arr.copyWithin(-1, -1);
    assertEqualInt(7, arr.get(0));
    }

    /**
     * Verify [7] copyWithin(1, 0) target>=length no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_3800
     * @tc.name int8ArrayCopyWithinPart03Test038
     * @tc.desc Verify [7] copyWithin(1, 0) target>=length no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test038() {
    Int8Array arr = new Int8Array(new int[] {7});
    arr.copyWithin(1, 0);
    assertEqualInt(7, arr.get(0));
    }

    /**
     * Verify copyWithin target=0 start=2 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_3900
     * @tc.name int8ArrayCopyWithinPart03Test039
     * @tc.desc Verify copyWithin target=0 start=2 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test039() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2);
    Integer r1 = arr.get(0);
    int e1 = 3;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(1);
    int e2 = 4;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify copyWithin target=0 start=2 end=4 copies [3, 4] to head of [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_4000
     * @tc.name int8ArrayCopyWithinPart03Test040
     * @tc.desc Verify copyWithin target=0 start=2 end=4 copies [3, 4] to head of [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test040() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2, 4);
    Integer r1 = arr.get(0);
    int e1 = 3;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(1);
    int e2 = 4;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify copyWithin target=0 start=1 end=3 copies [2, 3] to head of [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_4100
     * @tc.name int8ArrayCopyWithinPart03Test041
     * @tc.desc Verify copyWithin target=0 start=1 end=3 copies [2, 3] to head of [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test041() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 1, 3);
    Integer r1 = arr.get(0);
    int e1 = 2;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(1);
    int e2 = 3;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify copyWithin target=0 start=1 end=2 copies INT8_MIN to result[0], on new I
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_4200
     * @tc.name int8ArrayCopyWithinPart03Test042
     * @tc.desc Verify copyWithin target=0 start=1 end=2 copies INT8_MIN to result[0], on new Int8Array([1, INT8_MIN,
     * 3, 4, 5])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test042() {
    Int8Array arr = new Int8Array(new int[] {1, INT8_MIN, 3, 4, 5});
    arr.copyWithin(0, 1, 2);
    Integer r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify copyWithin target=0 start=1 end=2 copies INT8_MAX to result[0], on new I
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_4300
     * @tc.name int8ArrayCopyWithinPart03Test043
     * @tc.desc Verify copyWithin target=0 start=1 end=2 copies INT8_MAX to result[0], on new Int8Array([1, INT8_MAX,
     * 3, 4, 5])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test043() {
    Int8Array arr = new Int8Array(new int[] {1, INT8_MAX, 3, 4, 5});
    arr.copyWithin(0, 1, 2);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify copyWithin target=0 start=1 end=2 copies truncated 128 to INT8_MIN at re
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_4400
     * @tc.name int8ArrayCopyWithinPart03Test044
     * @tc.desc Verify copyWithin target=0 start=1 end=2 copies truncated 128 to INT8_MIN at result[0], on new
     * Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test044() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.set(1, 128);
    arr.copyWithin(0, 1, 2);
    Integer r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify copyWithin target=0 start=2 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_4500
     * @tc.name int8ArrayCopyWithinPart03Test045
     * @tc.desc Verify copyWithin target=0 start=2 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test045() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.set(2, 255);
    arr.copyWithin(0, 2, 3);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify copyWithin target=0 start=1 end=2 copies truncated 200 to -56 at result[0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_4600
     * @tc.name int8ArrayCopyWithinPart03Test046
     * @tc.desc Verify copyWithin target=0 start=1 end=2 copies truncated 200 to -56 at result[0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test046() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.set(1, 200);
    arr.copyWithin(0, 1, 2);
    assertEqualInt(-56, arr.get(0));
    }

    /**
     * Verify copyWithin target=0 start=1 end=2 copies truncated -129 to INT8_MAX at r
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_4700
     * @tc.name int8ArrayCopyWithinPart03Test047
     * @tc.desc Verify copyWithin target=0 start=1 end=2 copies truncated -129 to INT8_MAX at result[0], on new
     * Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test047() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.set(1, -129);
    arr.copyWithin(0, 1, 2);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify copyWithin target=0 start=1 end=2 copies truncated 256 to 0 at result[0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_4900
     * @tc.name int8ArrayCopyWithinPart03Test049
     * @tc.desc Verify copyWithin target=0 start=1 end=2 copies truncated 256 to 0 at result[0]
     * , on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test049() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.set(1, 256);
    arr.copyWithin(0, 1, 2);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify copyWithin target=0 start=1 end=2 copies truncated 300 to 44 at result[0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_5000
     * @tc.name int8ArrayCopyWithinPart03Test050
     * @tc.desc Verify copyWithin target=0 start=1 end=2 copies truncated 300 to 44 at result[0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test050() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.set(1, 300);
    arr.copyWithin(0, 1, 2);
    assertEqualInt(44, arr.get(0));
    }

    /**
     * Verify copyWithin target=1 start=0 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_5100
     * @tc.name int8ArrayCopyWithinPart03Test051
     * @tc.desc Verify copyWithin target=1 start=0 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test051() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.set(0, 200);
    arr.set(1, 255);
    arr.copyWithin(1, 0, 3);
    assertEqualInt(-56, arr.get(1));
    assertEqualInt(-1, arr.get(2));
    assertEqualInt(3, arr.get(3));
    }

    /**
     * Verify copyWithin target=0 start=2 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_5200
     * @tc.name int8ArrayCopyWithinPart03Test052
     * @tc.desc Verify copyWithin target=0 start=2 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test052() {
    Int8Array arr = new Int8Array(5);
    arr.set(0, 200);
    arr.set(1, 255);
    arr.set(2, 128);
    arr.set(3, -129);
    arr.set(4, 300);
    arr.copyWithin(0, 2, 5);
    Integer r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    assertEqualInt(INT8_MAX, arr.get(1));
    assertEqualInt(44, arr.get(2));
    assertEqualInt(INT8_MAX, arr.get(3));
    assertEqualInt(44, arr.get(4));
    }

    /**
     * Verify copyWithin target=10 start=0 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_5300
     * @tc.name int8ArrayCopyWithinPart03Test053
     * @tc.desc Verify copyWithin target=10 start=0 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test053() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(10, 0, 2);
    assertEqual(arr, result);
    }

    /**
     * Verify copyWithin(0, 0) on new Int8Array(0) returns the same array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_5400
     * @tc.name int8ArrayCopyWithinPart03Test054
     * @tc.desc Verify copyWithin(0, 0) on new Int8Array(0) returns the same array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test054() {
    Int8Array arr = new Int8Array(0);
    Int8Array result = arr.copyWithin(0, 0);
    assertEqual(arr, result);
    }

    /**
     * Verify copyWithin target=-2147483648 start=0 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_5500
     * @tc.name int8ArrayCopyWithinPart03Test055
     * @tc.desc Verify copyWithin target=-2147483648 start=0 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test055() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    Int8Array result = arr.copyWithin(Integer.MIN_VALUE, 0, 2);
    assertEqual(arr, result);
    }

    /**
     * Verify copyWithin target=0 start=2 end=4 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_5600
     * @tc.name int8ArrayCopyWithinPart03Test056
     * @tc.desc Verify copyWithin target=0 start=2 end=4 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test056() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 2, 4);
    assertEqual(arr, result);
    assertEqualInt(3, arr.get(0));
    }

    /**
     * Verify copyWithin target=-1 start=-2 end=-1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_5700
     * @tc.name int8ArrayCopyWithinPart03Test057
     * @tc.desc Verify copyWithin target=-1 start=-2 end=-1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test057() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-1, -2, -1);
    assertEqualInt(4, arr.get(4));
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify copyWithin target=-1 start=-3 end=-2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_5800
     * @tc.name int8ArrayCopyWithinPart03Test058
     * @tc.desc Verify copyWithin target=-1 start=-3 end=-2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test058() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-1, -3, -2);
    assertEqualInt(3, arr.get(4));
    }

    /**
     * Verify copyWithin target=-1 start=100 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_5900
     * @tc.name int8ArrayCopyWithinPart03Test059
     * @tc.desc Verify copyWithin target=-1 start=100 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test059() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-1, 100);
    assertEqualInt(5, arr.get(4));
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify copyWithin target=0 start=-2 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_6000
     * @tc.name int8ArrayCopyWithinPart03Test060
     * @tc.desc Verify copyWithin target=0 start=-2 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test060() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, -2);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    }

    /**
     * Verify copyWithin target=100 start=0 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_6100
     * @tc.name int8ArrayCopyWithinPart03Test061
     * @tc.desc Verify copyWithin target=100 start=0 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test061() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(100, 0, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    }

    /**
     * Verify copyWithin target=0 start=0 end=100 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_6200
     * @tc.name int8ArrayCopyWithinPart03Test062
     * @tc.desc Verify copyWithin target=0 start=0 end=100 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test062() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0, 100);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=3 start=0 end=100 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_6300
     * @tc.name int8ArrayCopyWithinPart03Test063
     * @tc.desc Verify copyWithin target=3 start=0 end=100 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test063() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(3, 0, 100);
    assertEqualInt(1, arr.get(3));
    assertEqualInt(2, arr.get(4));
    }

    /**
     * Verify copyWithin target=0 start=4 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_6400
     * @tc.name int8ArrayCopyWithinPart03Test064
     * @tc.desc Verify copyWithin target=0 start=4 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test064() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 4, 5);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(2, arr.get(1));
    }

    /**
     * Verify copyWithin target=4 start=0 end=1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_6500
     * @tc.name int8ArrayCopyWithinPart03Test065
     * @tc.desc Verify copyWithin target=4 start=0 end=1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test065() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(4, 0, 1);
    assertEqualInt(1, arr.get(4));
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify copyWithin target=1 start=0 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_6600
     * @tc.name int8ArrayCopyWithinPart03Test066
     * @tc.desc Verify copyWithin target=1 start=0 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test066() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(1, 0, 5);
    assertEqualInt(1, arr.get(1));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(3, arr.get(3));
    assertEqualInt(4, arr.get(4));
    }

    /**
     * Verify copyWithin target=0 start=0 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_6700
     * @tc.name int8ArrayCopyWithinPart03Test067
     * @tc.desc Verify copyWithin target=0 start=0 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test067() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0, 5);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=0 start=500 end=1000 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_6800
     * @tc.name int8ArrayCopyWithinPart03Test068
     * @tc.desc Verify copyWithin target=0 start=500 end=1000 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test068() {
    Int8Array arr = new Int8Array(1000);
    arr.set(500, 42);
    arr.set(999, 99);
    arr.copyWithin(0, 500, 1000);
    assertEqualInt(42, arr.get(0));
    assertEqualInt(99, arr.get(499));
    }

    /**
     * Verify copyWithin target=999 start=0 on 1000-element array copies 77 to result[999]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_6900
     * @tc.name int8ArrayCopyWithinPart03Test069
     * @tc.desc Verify copyWithin target=999 start=0 on 1000-element array copies 77 to result[999]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test069() {
    Int8Array arr = new Int8Array(1000);
    arr.set(0, 77);
    arr.copyWithin(999, 0);
    assertEqualInt(77, arr.get(999));
    }

    /**
     * Verify copyWithin target=-2 start=0 end=-1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_7000
     * @tc.name int8ArrayCopyWithinPart03Test070
     * @tc.desc Verify copyWithin target=-2 start=0 end=-1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test070() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-2, 0, -1);
    assertEqualInt(1, arr.get(3));
    assertEqualInt(2, arr.get(4));
    }

    /**
     * Verify copyWithin target=3 start=-4 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_7100
     * @tc.name int8ArrayCopyWithinPart03Test071
     * @tc.desc Verify copyWithin target=3 start=-4 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test071() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(3, -4, 3);
    assertEqualInt(2, arr.get(3));
    assertEqualInt(3, arr.get(4));
    }

    /**
     * Verify copyWithin target=2 start=2 end=4 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_7200
     * @tc.name int8ArrayCopyWithinPart03Test072
     * @tc.desc Verify copyWithin target=2 start=2 end=4 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test072() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2, 2, 4);
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=100 start=200 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_7300
     * @tc.name int8ArrayCopyWithinPart03Test073
     * @tc.desc Verify copyWithin target=100 start=200 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test073() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(100, 200);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=-1 start=0 end=2 on [10, 20] copies 10 to result[1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART03_TEST_7400
     * @tc.name int8ArrayCopyWithinPart03Test074
     * @tc.desc Verify copyWithin target=-1 start=0 end=2 on [10, 20] copies 10 to result[1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart03Test074() {
    Int8Array arr = new Int8Array(new int[] {10, 20});
    arr.copyWithin(-1, 0, 2);
    assertEqualInt(10, arr.get(1));
    assertEqualInt(10, arr.get(0));
    }
}
