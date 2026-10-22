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
 * Int8ArrayCopyWithinPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayCopyWithinPart01Test extends BasTest {
    /**
     * Verify copyWithin target=0 start=3 on [1, 2, 3, 4, 5] moves elements so result[0]=4 result[1]=5 result[2]=3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_0100
     * @tc.name int8ArrayCopyWithinPart01Test001
     * @tc.desc Verify copyWithin target=0 start=3 on [1, 2, 3, 4, 5] moves elements so result[
     * 0]=4 result[1]=5 result[2]=3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test001() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 3);
    assertEqualInt(4, result.get(0));
    assertEqualInt(5, result.get(1));
    assertEqualInt(3, result.get(2));
    int r1 = result.byteLength();
    int e1 = 5;
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin target=0 start=3 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_0200
     * @tc.name int8ArrayCopyWithinPart01Test002
     * @tc.desc Verify copyWithin target=0 start=3 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test002() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 3, 5);
    assertEqualInt(4, result.get(0));
    assertEqualInt(5, result.get(1));
    }

    /**
     * Verify copyWithin target=0 start=0 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_0300
     * @tc.name int8ArrayCopyWithinPart01Test003
     * @tc.desc Verify copyWithin target=0 start=0 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test003() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 0);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=1 start=3 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_0400
     * @tc.name int8ArrayCopyWithinPart01Test004
     * @tc.desc Verify copyWithin target=1 start=3 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test004() {
    Int8Array arr1 = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array arr2 = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr1.copyWithin(1, 3);
    arr2.copyWithin(1, 3, 5);
    assertEqual(arr2.get(1).intValue(), arr1.get(1).intValue());
    assertEqual(arr2.get(2).intValue(), arr1.get(2).intValue());
    }

    /**
     * Verify copyWithin target=-1 start=-2 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_0500
     * @tc.name int8ArrayCopyWithinPart01Test005
     * @tc.desc Verify copyWithin target=-1 start=-2 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test005() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(-1, -2);
    assertEqualInt(4, result.get(4));
    }

    /**
     * Verify copyWithin target=-2 start=-3 end=-1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_0600
     * @tc.name int8ArrayCopyWithinPart01Test006
     * @tc.desc Verify copyWithin target=-2 start=-3 end=-1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test006() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(-2, -3, -1);
    assertEqualInt(3, result.get(3));
    assertEqualInt(4, result.get(4));
    }

    /**
     * Verify copyWithin target=0 start=2 end=4 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_0700
     * @tc.name int8ArrayCopyWithinPart01Test007
     * @tc.desc Verify copyWithin target=0 start=2 end=4 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test007() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 2, 4);
    assertEqualInt(3, result.get(0));
    assertEqualInt(4, result.get(1));
    }

    /**
     * Verify copyWithin target=1 start=3 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_0800
     * @tc.name int8ArrayCopyWithinPart01Test008
     * @tc.desc Verify copyWithin target=1 start=3 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test008() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(1, 3, 5);
    assertEqualInt(4, result.get(1));
    assertEqualInt(5, result.get(2));
    }

    /**
     * Verify copyWithin target=4 start=0 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_0900
     * @tc.name int8ArrayCopyWithinPart01Test009
     * @tc.desc Verify copyWithin target=4 start=0 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test009() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(4, 0, 3);
    assertEqualInt(1, result.get(4));
    assertEqualInt(4, result.get(3));
    }

    /**
     * Verify copyWithin target=5 start=0 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_1000
     * @tc.name int8ArrayCopyWithinPart01Test010
     * @tc.desc Verify copyWithin target=5 start=0 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test010() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(5, 0, 3);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=6 start=0 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_1100
     * @tc.name int8ArrayCopyWithinPart01Test011
     * @tc.desc Verify copyWithin target=6 start=0 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test011() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(6, 0, 3);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=-1 start=0 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_1200
     * @tc.name int8ArrayCopyWithinPart01Test012
     * @tc.desc Verify copyWithin target=-1 start=0 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test012() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(-1, 0, 2);
    assertEqualInt(1, result.get(4));
    }

    /**
     * Verify copyWithin target=-5 start=2 end=4 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_1300
     * @tc.name int8ArrayCopyWithinPart01Test013
     * @tc.desc Verify copyWithin target=-5 start=2 end=4 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test013() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(-5, 2, 4);
    assertEqualInt(3, result.get(0));
    assertEqualInt(4, result.get(1));
    }

    /**
     * Verify copyWithin target=-6 start=2 end=4 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_1400
     * @tc.name int8ArrayCopyWithinPart01Test014
     * @tc.desc Verify copyWithin target=-6 start=2 end=4 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test014() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(-6, 2, 4);
    assertEqualInt(3, result.get(0));
    assertEqualInt(4, result.get(1));
    }

    /**
     * Verify copyWithin target=0x7FFFFFFF start=0 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_1500
     * @tc.name int8ArrayCopyWithinPart01Test015
     * @tc.desc Verify copyWithin target=0x7FFFFFFF start=0 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test015() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0x7fffffff, 0, 3);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=-0x7FFFFFFF start=2 end=4 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_1600
     * @tc.name int8ArrayCopyWithinPart01Test016
     * @tc.desc Verify copyWithin target=-0x7FFFFFFF start=2 end=4 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test016() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(-0x7fffffff, 2, 4);
    assertEqualInt(3, result.get(0));
    assertEqualInt(4, result.get(1));
    }

    /**
     * Verify copyWithin target=0 start=0 end=1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_1700
     * @tc.name int8ArrayCopyWithinPart01Test017
     * @tc.desc Verify copyWithin target=0 start=0 end=1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test017() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 0, 1);
    assertEqualInt(1, result.get(0));
    assertEqualInt(2, result.get(1));
    }

    /**
     * Verify copyWithin target=2 start=0 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_1800
     * @tc.name int8ArrayCopyWithinPart01Test018
     * @tc.desc Verify copyWithin target=2 start=0 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test018() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(2, 0, 2);
    assertEqualInt(1, result.get(2));
    assertEqualInt(2, result.get(3));
    }

    /**
     * Verify copyWithin target=2 start=0 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_1900
     * @tc.name int8ArrayCopyWithinPart01Test019
     * @tc.desc Verify copyWithin target=2 start=0 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test019() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(2, 0, 3);
    assertEqualInt(1, result.get(2));
    assertEqualInt(2, result.get(3));
    assertEqualInt(3, result.get(4));
    }

    /**
     * Verify copyWithin target=0 start=1 end=3 on [1, 2, 3, 4, 5] moves elements so result[0]=2 result[1]=3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_2000
     * @tc.name int8ArrayCopyWithinPart01Test020
     * @tc.desc Verify copyWithin target=0 start=1 end=3 on [1, 2, 3, 4, 5] moves elements so result[0]=2 result[1]=3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test020() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 1, 3);
    assertEqualInt(2, result.get(0));
    assertEqualInt(3, result.get(1));
    }

    /**
     * Verify copyWithin target=0 start=4 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_2100
     * @tc.name int8ArrayCopyWithinPart01Test021
     * @tc.desc Verify copyWithin target=0 start=4 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test021() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 4, 5);
    assertEqualInt(5, result.get(0));
    }

    /**
     * Verify copyWithin target=0 start=5 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_2200
     * @tc.name int8ArrayCopyWithinPart01Test022
     * @tc.desc Verify copyWithin target=0 start=5 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test022() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 5, 5);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=0 start=6 end=8 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_2300
     * @tc.name int8ArrayCopyWithinPart01Test023
     * @tc.desc Verify copyWithin target=0 start=6 end=8 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test023() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 6, 8);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=0 start=-1 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_2400
     * @tc.name int8ArrayCopyWithinPart01Test024
     * @tc.desc Verify copyWithin target=0 start=-1 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test024() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, -1);
    assertEqualInt(5, result.get(0));
    }

    /**
     * Verify copyWithin target=3 start=-5 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_2500
     * @tc.name int8ArrayCopyWithinPart01Test025
     * @tc.desc Verify copyWithin target=3 start=-5 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test025() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(3, -5, 2);
    assertEqualInt(1, result.get(3));
    assertEqualInt(2, result.get(4));
    }

    /**
     * Verify copyWithin target=3 start=-6 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_2600
     * @tc.name int8ArrayCopyWithinPart01Test026
     * @tc.desc Verify copyWithin target=3 start=-6 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test026() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(3, -6, 2);
    assertEqualInt(1, result.get(3));
    assertEqualInt(2, result.get(4));
    }

    /**
     * Verify copyWithin target=0 start=0x7FFFFFFF end=0x7FFFFFFF copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_2700
     * @tc.name int8ArrayCopyWithinPart01Test027
     * @tc.desc Verify copyWithin target=0 start=0x7FFFFFFF end=0x7FFFFFFF copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test027() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 0x7fffffff, 0x7fffffff);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=3 start=-0x7FFFFFFF end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_2800
     * @tc.name int8ArrayCopyWithinPart01Test028
     * @tc.desc Verify copyWithin target=3 start=-0x7FFFFFFF end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test028() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(3, -0x7fffffff, 2);
    assertEqualInt(1, result.get(3));
    assertEqualInt(2, result.get(4));
    }

    /**
     * Verify copyWithin target=0 start=0 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_2900
     * @tc.name int8ArrayCopyWithinPart01Test029
     * @tc.desc Verify copyWithin target=0 start=0 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test029() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 0, 5);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=0 start=2 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_3000
     * @tc.name int8ArrayCopyWithinPart01Test030
     * @tc.desc Verify copyWithin target=0 start=2 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test030() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 2, 3);
    assertEqualInt(3, result.get(0));
    assertEqualInt(2, result.get(1));
    }

    /**
     * Verify copyWithin target=1 start=2 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_3100
     * @tc.name int8ArrayCopyWithinPart01Test031
     * @tc.desc Verify copyWithin target=1 start=2 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test031() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(1, 2);
    assertEqualInt(3, result.get(1));
    assertEqualInt(5, result.get(3));
    }

    /**
     * Verify copyWithin target=0 start=0 end=0 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_3200
     * @tc.name int8ArrayCopyWithinPart01Test032
     * @tc.desc Verify copyWithin target=0 start=0 end=0 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test032() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 0, 0);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=3 start=0 end=1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_3300
     * @tc.name int8ArrayCopyWithinPart01Test033
     * @tc.desc Verify copyWithin target=3 start=0 end=1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test033() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(3, 0, 1);
    assertEqualInt(1, result.get(3));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=0 start=2 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_3400
     * @tc.name int8ArrayCopyWithinPart01Test034
     * @tc.desc Verify copyWithin target=0 start=2 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test034() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 2, 5);
    assertEqualInt(3, result.get(0));
    assertEqualInt(4, result.get(1));
    assertEqualInt(5, result.get(2));
    }

    /**
     * Verify copyWithin target=0 start=2 end=6 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_3500
     * @tc.name int8ArrayCopyWithinPart01Test035
     * @tc.desc Verify copyWithin target=0 start=2 end=6 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test035() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 2, 6);
    assertEqualInt(3, result.get(0));
    assertEqualInt(4, result.get(1));
    assertEqualInt(5, result.get(2));
    }

    /**
     * Verify copyWithin target=0 start=2 end=-1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_3600
     * @tc.name int8ArrayCopyWithinPart01Test036
     * @tc.desc Verify copyWithin target=0 start=2 end=-1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test036() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 2, -1);
    assertEqualInt(3, result.get(0));
    assertEqualInt(4, result.get(1));
    assertEqualInt(3, result.get(2));
    }

    /**
     * Verify copyWithin target=0 start=0 end=-5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_3700
     * @tc.name int8ArrayCopyWithinPart01Test037
     * @tc.desc Verify copyWithin target=0 start=0 end=-5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test037() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 0, -5);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=0 start=0 end=-6 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_3800
     * @tc.name int8ArrayCopyWithinPart01Test038
     * @tc.desc Verify copyWithin target=0 start=0 end=-6 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test038() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 0, -6);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=0 start=2 end=0x7FFFFFFF copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_3900
     * @tc.name int8ArrayCopyWithinPart01Test039
     * @tc.desc Verify copyWithin target=0 start=2 end=0x7FFFFFFF copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test039() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 2, 0x7fffffff);
    assertEqualInt(3, result.get(0));
    assertEqualInt(4, result.get(1));
    assertEqualInt(5, result.get(2));
    }

    /**
     * Verify copyWithin target=0 start=0 end=-0x7FFFFFFF copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_4000
     * @tc.name int8ArrayCopyWithinPart01Test040
     * @tc.desc Verify copyWithin target=0 start=0 end=-0x7FFFFFFF copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test040() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 0, -0x7fffffff);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=0 start=3 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_4100
     * @tc.name int8ArrayCopyWithinPart01Test041
     * @tc.desc Verify copyWithin target=0 start=3 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test041() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 3, 2);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=0 start=2 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_4200
     * @tc.name int8ArrayCopyWithinPart01Test042
     * @tc.desc Verify copyWithin target=0 start=2 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test042() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 2, 2);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=0 start=1 end=3 on [1, 2, 3, 4, 5] moves elements so resul
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_4300
     * @tc.name int8ArrayCopyWithinPart01Test043
     * @tc.desc Verify copyWithin target=0 start=1 end=3 on [1, 2, 3, 4, 5] moves elements so resul
     * t[0]=2 result[1]=3 result[2]=3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test043() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 1, 3);
    assertEqualInt(2, result.get(0));
    assertEqualInt(3, result.get(1));
    assertEqualInt(3, result.get(2));
    }

    /**
     * Verify copyWithin target=3 start=0 end=4 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_4400
     * @tc.name int8ArrayCopyWithinPart01Test044
     * @tc.desc Verify copyWithin target=3 start=0 end=4 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test044() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(3, 0, 4);
    assertEqualInt(1, result.get(3));
    assertEqualInt(2, result.get(4));
    }

    /**
     * Verify copyWithin return shares buffer with original - mutation via result.$_se
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_4500
     * @tc.name int8ArrayCopyWithinPart01Test045
     * @tc.desc Verify copyWithin return shares buffer with original - mutation via result.$_se
     * t(0, 99) propagates to arr.$_get(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test045() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 3);
    result.set(0, 99);
    Integer r1 = arr.get(0);
    int e1 = 99;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify length unchanged after copyWithin does not change array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_4600
     * @tc.name int8ArrayCopyWithinPart01Test046
     * @tc.desc Verify length unchanged after copyWithin does not change array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test046() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3);
    int r1 = arr.length();
    int e1 = 5;
    assertEqual(e1, r1);
    }

    /**
     * Verify chained copyWithin returns this for continued call verify accumulated effect
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_4700
     * @tc.name int8ArrayCopyWithinPart01Test047
     * @tc.desc Verify chained copyWithin returns this for continued call verify accumulated effect
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test047() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 3).copyWithin(0, 2);
    assertEqualInt(3, result.get(0));
    assertEqualInt(4, result.get(1));
    assertEqualInt(5, result.get(2));
    }

    /**
     * Verify copyWithin target=1 start=0 end=4 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_4800
     * @tc.name int8ArrayCopyWithinPart01Test048
     * @tc.desc Verify copyWithin target=1 start=0 end=4 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test048() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(1, 0, 4);
    assertEqualInt(1, result.get(1));
    assertEqualInt(2, result.get(2));
    assertEqualInt(3, result.get(3));
    assertEqualInt(4, result.get(4));
    }

    /**
     * Verify copyWithin target=0 start=1 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_4900
     * @tc.name int8ArrayCopyWithinPart01Test049
     * @tc.desc Verify copyWithin target=0 start=1 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test049() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 1, 5);
    assertEqualInt(2, result.get(0));
    assertEqualInt(3, result.get(1));
    assertEqualInt(4, result.get(2));
    assertEqualInt(5, result.get(3));
    }

    /**
     * Verify copyWithin target=2 start=2 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_5000
     * @tc.name int8ArrayCopyWithinPart01Test050
     * @tc.desc Verify copyWithin target=2 start=2 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test050() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(2, 2, 5);
    assertEqualInt(3, result.get(2));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify empty array copyWithin length=0 no operation returns this
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_5100
     * @tc.name int8ArrayCopyWithinPart01Test051
     * @tc.desc Verify empty array copyWithin length=0 no operation returns this
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test051() {
    Int8Array arr = new Int8Array(0);
    Int8Array result = arr.copyWithin(0, 0);
    assertEqual(0, result.length());
    }

    /**
     * Verify single element array copyWithin length=1 self-copy no change
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_5200
     * @tc.name int8ArrayCopyWithinPart01Test052
     * @tc.desc Verify single element array copyWithin length=1 self-copy no change
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test052() {
    Int8Array arr = new Int8Array(new int[] {1});
    Int8Array result = arr.copyWithin(0, 0);
    assertEqualInt(1, result.get(0));
    }

    /**
     * Verify copyWithin target=0 start=4 end=1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_5300
     * @tc.name int8ArrayCopyWithinPart01Test053
     * @tc.desc Verify copyWithin target=0 start=4 end=1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test053() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0, 4, 1);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=-0x7FFFFFFF start=-0x7FFFFFFF end=-0x7FFFFFFF copies s
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_5400
     * @tc.name int8ArrayCopyWithinPart01Test054
     * @tc.desc Verify copyWithin target=-0x7FFFFFFF start=-0x7FFFFFFF end=-0x7FFFFFFF copies s
     * ource elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test054() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(-0x7fffffff, -0x7fffffff, -0x7fffffff);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify copyWithin target=0x7FFFFFFF start=0x7FFFFFFF end=0x7FFFFFFF copies sour
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_5500
     * @tc.name int8ArrayCopyWithinPart01Test055
     * @tc.desc Verify copyWithin target=0x7FFFFFFF start=0x7FFFFFFF end=0x7FFFFFFF copies sour
     * ce elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test055() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(0x7fffffff, 0x7fffffff, 0x7fffffff);
    assertEqualInt(1, result.get(0));
    assertEqualInt(5, result.get(4));
    }

    /**
     * Verify array with -128 int8 min after copyWithin target keeps -128 not corrupted
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_5600
     * @tc.name int8ArrayCopyWithinPart01Test056
     * @tc.desc Verify array with -128 int8 min after copyWithin target keeps -128 not corrupted
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test056() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, -128);
    arr.set(1, 0);
    arr.set(2, 0);
    Int8Array result = arr.copyWithin(2, 0, 1);
    assertEqualInt(-128, result.get(2));
    arr.set(0, 256);
    Int8Array resultAfterTruncate = arr.copyWithin(2, 0, 1);
    Integer r1 = resultAfterTruncate.get(2);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify array with 128 $_set truncates to -128 after copyWithin target keeps -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_5700
     * @tc.name int8ArrayCopyWithinPart01Test057
     * @tc.desc Verify array with 128 $_set truncates to -128 after copyWithin target keeps -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test057() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, 128);
    arr.set(1, 0);
    arr.set(2, 0);
    Int8Array result = arr.copyWithin(2, 0, 1);
    assertEqualInt(-128, result.get(2));
    }

    /**
     * Verify array with 1.9 constructor truncates to 1 after copyWithin target keeps 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_5800
     * @tc.name int8ArrayCopyWithinPart01Test058
     * @tc.desc Verify array with 1.9 constructor truncates to 1 after copyWithin target keeps 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test058() {
    double[] src = new double[] {1.9, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    Int8Array result = arr.copyWithin(2, 0, 1);
    assertEqualInt(1, result.get(2));
    }

    /**
     * Verify array with 0 int8 zero after copyWithin target keeps 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_5900
     * @tc.name int8ArrayCopyWithinPart01Test059
     * @tc.desc Verify array with 0 int8 zero after copyWithin target keeps 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test059() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, 0);
    arr.set(1, -128);
    arr.set(2, -128);
    Int8Array result = arr.copyWithin(2, 0, 1);
    assertEqualInt(0, result.get(2));
    }

    /**
     * Verify multi boundary values -128 128 256 0 -128 copyWithin subset boundaries not corrupted
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_6000
     * @tc.name int8ArrayCopyWithinPart01Test060
     * @tc.desc Verify multi boundary values -128 128 256 0 -128 copyWithin subset boundaries not corrupted
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test060() {
    Int8Array arr = new Int8Array(5);
    arr.set(0, -128);
    arr.set(1, 128);
    arr.set(2, 256);
    arr.set(3, 0);
    arr.set(4, -128);
    Int8Array result = arr.copyWithin(3, 0, 2);
    assertEqualInt(-128, result.get(3));
    assertEqualInt(-128, result.get(4));
    }

    /**
     * Verify copyWithin target=1 start=0 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_6100
     * @tc.name int8ArrayCopyWithinPart01Test061
     * @tc.desc Verify copyWithin target=1 start=0 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test061() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, -128);
    arr.set(1, 0);
    arr.set(2, 0);
    arr.set(3, 0);
    Int8Array result = arr.copyWithin(1, 0, 3);
    assertEqualInt(-128, result.get(1));
    assertEqualInt(0, result.get(3));
    }

    /**
     * Verify copyWithin target=2 start=0 end=1 on [0, 0, -128] keeps truncated 0 at result[2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_6200
     * @tc.name int8ArrayCopyWithinPart01Test062
     * @tc.desc Verify copyWithin target=2 start=0 end=1 on [0, 0, -128] keeps truncated 0 at result[2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test062() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, 256);
    arr.set(1, 0);
    arr.set(2, -128);
    Int8Array result = arr.copyWithin(2, 0, 1);
    assertEqualInt(0, result.get(2));
    }

    /**
     * Verify copyWithin target=0 start=0 end=4 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_6300
     * @tc.name int8ArrayCopyWithinPart01Test063
     * @tc.desc Verify copyWithin target=0 start=0 end=4 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test063() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, -128);
    arr.set(1, 128);
    arr.set(2, 256);
    arr.set(3, 0);
    Int8Array result = arr.copyWithin(0, 0, 4);
    assertEqualInt(-128, result.get(0));
    assertEqualInt(-128, result.get(1));
    assertEqualInt(0, result.get(3));
    }

    /**
     * Verify copyWithin target=1 start=0 end=1 on [-128, 0, 0] copies -128 to result[1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_6400
     * @tc.name int8ArrayCopyWithinPart01Test064
     * @tc.desc Verify copyWithin target=1 start=0 end=1 on [-128, 0, 0] copies -128 to result[1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test064() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, -128);
    arr.set(1, 0);
    arr.set(2, 0);
    Int8Array result = arr.copyWithin(1, 0, 1);
    assertEqualInt(-128, result.get(1));
    }

    /**
     * Verify two consecutive copyWithin with boundary values cumulative truncation not corrupted
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_6500
     * @tc.name int8ArrayCopyWithinPart01Test065
     * @tc.desc Verify two consecutive copyWithin with boundary values cumulative truncation not corrupted
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test065() {
    Int8Array arr = new Int8Array(5);
    arr.set(0, -128);
    arr.set(1, 128);
    arr.set(2, 256);
    arr.set(3, 0);
    arr.set(4, -128);
    arr.copyWithin(0, 2, 4);
    arr.copyWithin(3, 0, 2);
    assertEqualInt(0, arr.get(3));
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify copyWithin target=
     * 1 start=0 end=1 on new Int8Array(new double[] {1.9, -128, 0}) truncates 1.9 to 1 at result[1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_6600
     * @tc.name int8ArrayCopyWithinPart01Test066
     * @tc.desc Verify copyWithin target=1 start=0 end=1 on new Int8Array(new double[] {1.9, -128, 0}) trunc
     * ates 1.9 to 1 at result[1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test066() {
    double[] src = new double[] {1.9, -128, 0};
    Int8Array arr = new Int8Array(src);
    Int8Array result = arr.copyWithin(1, 0, 1);
    assertEqualInt(1, result.get(1));
    }

    /**
     * Verify copyWithin target=1 start=-2 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_6700
     * @tc.name int8ArrayCopyWithinPart01Test067
     * @tc.desc Verify copyWithin target=1 start=-2 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test067() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(1, -2, 5);
    assertEqualInt(4, result.get(1));
    assertEqualInt(5, result.get(2));
    }

    /**
     * Verify copyWithin target=3 start=0 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_6800
     * @tc.name int8ArrayCopyWithinPart01Test068
     * @tc.desc Verify copyWithin target=3 start=0 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test068() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(3, 0, 5);
    assertEqualInt(1, result.get(3));
    assertEqualInt(2, result.get(4));
    }

    /**
     * Verify copyWithin target=2 start=0 end=1 on [1, 2, 3, 4, 5] copies element 1 to result[2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_6900
     * @tc.name int8ArrayCopyWithinPart01Test069
     * @tc.desc Verify copyWithin target=2 start=0 end=1 on [1, 2, 3, 4, 5] copies element 1 to result[2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test069() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(2, 0, 1);
    assertEqualInt(1, result.get(2));
    assertEqualInt(4, result.get(3));
    }

    /**
     * Verify copyWithin target=2 start=0 end=4 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART01_TEST_7000
     * @tc.name int8ArrayCopyWithinPart01Test070
     * @tc.desc Verify copyWithin target=2 start=0 end=4 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart01Test070() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array result = arr.copyWithin(2, 0, 4);
    assertEqualInt(1, result.get(2));
    assertEqualInt(2, result.get(3));
    assertEqualInt(3, result.get(4));
    }
}
