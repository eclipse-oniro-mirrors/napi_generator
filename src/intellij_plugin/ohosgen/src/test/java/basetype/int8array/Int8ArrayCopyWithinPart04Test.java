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
 * Int8ArrayCopyWithinPart04Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayCopyWithinPart04Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify $_set(0, 99) after copyWithin(0, 2, 4) writes through to arr
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_0100
     * @tc.name int8ArrayCopyWithinPart04Test001
     * @tc.desc Verify $_set(0, 99) after copyWithin(0, 2, 4) writes through to arr
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test001() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array ret = arr.copyWithin(0, 2, 4);
    ret.set(0, 99);
    assertEqualInt(99, arr.get(0));
    }

    /**
     * Verify copyWithin(0, 2, 4) copies [3, 4] to head making toString '3, 4, 3, 4' on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_0200
     * @tc.name int8ArrayCopyWithinPart04Test002
     * @tc.desc Verify copyWithin(0, 2, 4) copies [3, 4] to head making toString '3, 4, 3, 4' o
     * n new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test002() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 2, 4);
    assertEqual(4, arr.length());
    int r1 = arr.byteLength();
    int e1 = 4;
    assertEqual(e1, r1);
    String r2 = String.valueOf(arr);
    String e2 = "3,4,3,4";
    assertEqual(e2, r2);
    String r3 = arr.join("-");
    String e3 = "3-4-3-4";
    assertEqual(e3, r3);
    }

    /**
     * Verify copyWithin(0, 2, 4) keeps arr.buffer equal to bufBefore on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_0300
     * @tc.name int8ArrayCopyWithinPart04Test003
     * @tc.desc Verify copyWithin(0, 2, 4) keeps arr.buffer equal to bufBefore on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test003() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    ArrayBuffer bufBefore = arr.buffer();
    arr.copyWithin(0, 2, 4);
    ArrayBuffer r1 = arr.buffer();
    ArrayBuffer e1 = bufBefore;
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin(0, 2, 4) on ArrayBuffer offset view keeps byteOffset 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_0400
     * @tc.name int8ArrayCopyWithinPart04Test004
     * @tc.desc Verify copyWithin(0, 2, 4) on ArrayBuffer offset view keeps byteOffset 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test004() {
    Int8Array arr = new Int8Array(new ArrayBuffer(8), 2, 4);
    arr.copyWithin(0, 2, 4);
    int r1 = arr.byteOffset();
    int e1 = 2;
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin target=3 start=0 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_0500
     * @tc.name int8ArrayCopyWithinPart04Test005
     * @tc.desc Verify copyWithin target=3 start=0 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test005() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(3, 0, 2);
    Integer r1 = arr.get(3);
    int e1 = 1;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(4);
    int e2 = 2;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify copyWithin(0, 3, 5) on [1, 2, 3, 4, 5] copies [4, 5] to head
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_0600
     * @tc.name int8ArrayCopyWithinPart04Test006
     * @tc.desc Verify copyWithin(0, 3, 5) on [1, 2, 3, 4, 5] copies [4, 5] to head
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test006() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3, 5);
    Integer r1 = arr.get(0);
    int e1 = 4;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(1);
    int e2 = 5;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify copyWithin target=1 start=0 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_0700
     * @tc.name int8ArrayCopyWithinPart04Test007
     * @tc.desc Verify copyWithin target=1 start=0 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test007() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(1, 0, 3);
    Integer r1 = arr.get(1);
    int e1 = 1;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(2);
    int e2 = 2;
    assertEqualInt(e2, r2);
    Integer r3 = arr.get(3);
    int e3 = 3;
    assertEqualInt(e3, r3);
    }

    /**
     * Verify copyWithin target=1 start=3 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_0800
     * @tc.name int8ArrayCopyWithinPart04Test008
     * @tc.desc Verify copyWithin target=1 start=3 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test008() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(1, 3, 5);
    Integer r1 = arr.get(1);
    int e1 = 4;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(2);
    int e2 = 5;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify copyWithin(4, 0, 2) expects 1, with $_get(0), on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_0900
     * @tc.name int8ArrayCopyWithinPart04Test009
     * @tc.desc Verify copyWithin(4, 0, 2) expects 1, with $_get(0), on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test009() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(4, 0, 2);
    assertEqualInt(1, arr.get(0));
    Integer r1 = arr.get(3);
    int e1 = 4;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify copyWithin target=0 start=3 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_1000
     * @tc.name int8ArrayCopyWithinPart04Test010
     * @tc.desc Verify copyWithin target=0 start=3 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test010() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 3, 2);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify copyWithin(0, 4, 4) with empty source range is a no-op keeping $_get(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_1100
     * @tc.name int8ArrayCopyWithinPart04Test011
     * @tc.desc Verify copyWithin(0, 4, 4) with empty source range is a no-op keeping $_get(0)
     * 1 on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test011() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 4, 4);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify copyWithin expects 3 buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_1200
     * @tc.name int8ArrayCopyWithinPart04Test012
     * @tc.desc Verify copyWithin expects 3 buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test012() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array watcher = new Int8Array(arr.buffer());
    arr.copyWithin(0, 2, 4);
    assertEqualInt(3, watcher.get(0));
    assertEqualInt(4, watcher.get(1));
    }

    /**
     * Verify copyWithin(0, 3, 5) on [1, 2, 3, 4, 5] turns toString from '1, 2, 3, 4, 5' to '4, 5, 3, 4, 5'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_1300
     * @tc.name int8ArrayCopyWithinPart04Test013
     * @tc.desc Verify copyWithin(0, 3, 5) on [1, 2, 3, 4, 5] turns toString from '1, 2, 3, 4, 5' to '4, 5, 3, 4, 5'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test013() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    String before = String.valueOf(arr);
    arr.copyWithin(0, 3, 5);
    String after = String.valueOf(arr);
    assertEqual("1,2,3,4,5", before);
    assertEqual("4,5,3,4,5", after);
    }

    /**
     * Verify copyWithin(0, 2, 4) on [10, 20, 30, 40] copies [30, 40] to head
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_1400
     * @tc.name int8ArrayCopyWithinPart04Test014
     * @tc.desc Verify copyWithin(0, 2, 4) on [10, 20, 30, 40] copies [30, 40] to head
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test014() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, 2, 4);
    assertEqualInt(30, arr.get(0));
    assertEqualInt(40, arr.get(1));
    assertEqualInt(30, arr.at(0));
    assertEqualInt(40, arr.at(1));
    assertEqual(0, arr.indexOf(30));
    assertTrue(arr.includes(40));
    }

    /**
     * Verify copyWithin expects 4, with $_get(0), on new Int8Array(new int[] {1, 2, 3, 4, 5, 6}), returns 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_1500
     * @tc.name int8ArrayCopyWithinPart04Test015
     * @tc.desc Verify copyWithin expects 4, with $_get(0), on new Int8Array(new int[] {1, 2, 3, 4, 5, 6}), returns 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test015() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(0, 3, 6);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(6, arr.get(2));
    Integer r1 = arr.get(3);
    int e1 = 4;
    assertEqualInt(e1, r1);
    assertEqual(3, arr.lastIndexOf(4));
    }

    /**
     * Verify copyWithin target=2 start=0 end=10 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_1600
     * @tc.name int8ArrayCopyWithinPart04Test016
     * @tc.desc Verify copyWithin target=2 start=0 end=10 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test016() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 0, 10);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify copyWithin expects 14
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_1700
     * @tc.name int8ArrayCopyWithinPart04Test017
     * @tc.desc Verify copyWithin expects 14
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test017() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 2, 4);
    int sum = 0;
    for (int i = 0; i < arr.length(); i++) {
    sum = sum + arr.get(i);
    }
    assertEqual(14, sum);
    }

    /**
     * Verify copyWithin(0, 2, 4) copies [7, 8] to head making indexOf(7) 0 on new Int8Array(new int[] {5, 6, 7, 8})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_1800
     * @tc.name int8ArrayCopyWithinPart04Test018
     * @tc.desc Verify copyWithin(0, 2, 4) copies [7, 8] to head making indexOf(7) 0 on new Int
     * 8Array(new int[] {5, 6, 7, 8})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test018() {
    Int8Array arr = new Int8Array(new int[] {5, 6, 7, 8});
    arr.copyWithin(0, 2, 4);
    assertEqual(0, arr.indexOf(7));
    assertEqual(1, arr.indexOf(8));
    assertEqual(2, arr.indexOf(7, 1));
    }

    /**
     * Verify copyWithin(0, 3, 6) on [1, 2, 3, 4, 5, 6] copies [4, 5, 6] to head
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_1900
     * @tc.name int8ArrayCopyWithinPart04Test019
     * @tc.desc Verify copyWithin(0, 3, 6) on [1, 2, 3, 4, 5, 6] copies [4, 5, 6] to head
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test019() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(0, 3, 6);
    Integer r1 = arr.get(0);
    int e1 = 4;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(1);
    int e2 = 5;
    assertEqualInt(e2, r2);
    Integer r3 = arr.get(2);
    int e3 = 6;
    assertEqualInt(e3, r3);
    }

    /**
     * Verify copyWithin(0, 3, 6) on [1, 2, 3, 4, 5, 6] then slice(0, 3) returns [4, 5, 6]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_2000
     * @tc.name int8ArrayCopyWithinPart04Test020
     * @tc.desc Verify copyWithin(0, 3, 6) on [1, 2, 3, 4, 5, 6] then slice(0, 3) returns [4, 5, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test020() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(0, 3, 6);
    Int8Array sub = arr.slice(0, 3);
    assertEqualInt(4, sub.get(0));
    assertEqualInt(5, sub.get(1));
    assertEqualInt(6, sub.get(2));
    }

    /**
     * Verify copyWithin(0, 2, 4).reverse() on [1, 2, 3, 4] turns head to [4, 3, 4, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_2100
     * @tc.name int8ArrayCopyWithinPart04Test021
     * @tc.desc Verify copyWithin(0, 2, 4).reverse() on [1, 2, 3, 4] turns head to [4, 3, 4, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test021() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 2, 4).reverse();
    assertEqualInt(4, arr.get(0));
    assertEqualInt(3, arr.get(3));
    }

    /**
     * Verify copyWithin(0, 2, 4).fill(0) on [1, 2, 3, 4] fills all elements to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_2200
     * @tc.name int8ArrayCopyWithinPart04Test022
     * @tc.desc Verify copyWithin(0, 2, 4).fill(0) on [1, 2, 3, 4] fills all elements to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test022() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 2, 4).fill(0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify copyWithin(0, 2, 5).sort() on [3, 1, 4, 1, 5] sorts copied head to [1, 1, 4, 5, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_2300
     * @tc.name int8ArrayCopyWithinPart04Test023
     * @tc.desc Verify copyWithin(0, 2, 5).sort() on [3, 1, 4, 1, 5] sorts copied head to [1, 1, 4, 5, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test023() {
    Int8Array arr = new Int8Array(new int[] {3, 1, 4, 1, 5});
    arr.copyWithin(0, 2, 5).sort();
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin(0, 2, 4).subarray(0, 2).fill(9) then $_get(0)=9 and $_get(2)=3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_2400
     * @tc.name int8ArrayCopyWithinPart04Test024
     * @tc.desc Verify copyWithin(0, 2, 4).subarray(0, 2).fill(9) then $_get(0)=9 and $_get(2)=3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test024() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 2, 4).subarray(0, 2).fill(9);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify copyWithin expects 3, with $_get(0), on new Int8Array(new int[] {1, 2, 3, 4, 5, 6})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_2500
     * @tc.name int8ArrayCopyWithinPart04Test025
     * @tc.desc Verify copyWithin expects 3, with $_get(0), on new Int8Array(new int[] {1, 2, 3, 4, 5, 6})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test025() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(0, 2, 4).copyWithin(4, 0, 2);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(3, arr.get(4));
    assertEqualInt(4, arr.get(5));
    }

    /**
     * Verify copyWithin expects 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_2600
     * @tc.name int8ArrayCopyWithinPart04Test026
     * @tc.desc Verify copyWithin expects 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test026() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 2, 4);
    arr.set(new Int8Array(new int[] {7, 8}), 0);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify copyWithin expects 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_2700
     * @tc.name int8ArrayCopyWithinPart04Test027
     * @tc.desc Verify copyWithin expects 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test027() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 1, 2);
    arr.copyWithin(2, 3, 5);
    arr.copyWithin(4, 0, 1);
    assertEqualInt(2, arr.get(4));
    }

    /**
     * Verify copyWithin chained toReversed expects 3, with $_get(0), on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_2800
     * @tc.name int8ArrayCopyWithinPart04Test028
     * @tc.desc Verify copyWithin chained toReversed expects 3, with $_get(0), on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test028() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array rev = arr.copyWithin(0, 2, 4).toReversed();
    assertEqualInt(3, arr.get(0));
    assertEqualInt(4, rev.get(0));
    }

    /**
     * Verify copyWithin(0, 2, 4).toSorted() on [3, 1, 4, 1] yields sorted [1, 1, 4, 4] while arr head stays 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_2900
     * @tc.name int8ArrayCopyWithinPart04Test029
     * @tc.desc Verify copyWithin(0, 2, 4).toSorted() on [3, 1, 4, 1] yields sorted [1, 1, 4, 4] while arr head stays 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test029() {
    Int8Array arr = new Int8Array(new int[] {3, 1, 4, 1});
    Int8Array sorted = arr.copyWithin(0, 2, 4).toSorted();
    assertEqualInt(4, arr.get(0));
    assertEqualInt(1, sorted.get(0));
    }

    /**
     * Verify copyWithin(0, 2, 4).with(0, 99) on [1, 2, 3, 4] yields modified head 99 while arr head stays 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_3000
     * @tc.name int8ArrayCopyWithinPart04Test030
     * @tc.desc Verify copyWithin(0, 2, 4).with(0, 99) on [1, 2, 3, 4] yields modified head 99 while arr head stays 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test030() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array modified = arr.copyWithin(0, 2, 4).with(0, 99);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(99, modified.get(0));
    }

    /**
     * Verify copyWithin target=2 start=0 end=4 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_3100
     * @tc.name int8ArrayCopyWithinPart04Test031
     * @tc.desc Verify copyWithin target=2 start=0 end=4 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test031() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2, 0, 4);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    assertEqualInt(3, arr.get(4));
    }

    /**
     * Verify copyWithin target=1 start=1 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_3200
     * @tc.name int8ArrayCopyWithinPart04Test032
     * @tc.desc Verify copyWithin target=1 start=1 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test032() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(1, 1, 3);
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify copyWithin(0, 2, 5) on [1, 2, 3, 4, 5] copies [3, 4, 5] to head
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_3300
     * @tc.name int8ArrayCopyWithinPart04Test033
     * @tc.desc Verify copyWithin(0, 2, 5) on [1, 2, 3, 4, 5] copies [3, 4, 5] to head
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test033() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2, 5);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify copyWithin(0, 0, 4) on [1, 2, 3, 4] is a no-op keeping [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_3400
     * @tc.name int8ArrayCopyWithinPart04Test034
     * @tc.desc Verify copyWithin(0, 0, 4) on [1, 2, 3, 4] is a no-op keeping [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test034() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 0, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify copyWithin target=2 start=1 end=4 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_3500
     * @tc.name int8ArrayCopyWithinPart04Test035
     * @tc.desc Verify copyWithin target=2 start=1 end=4 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test035() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2, 1, 4);
    assertEqualInt(2, arr.get(2));
    assertEqualInt(3, arr.get(3));
    assertEqualInt(4, arr.get(4));
    }

    /**
     * Verify copyWithin target=2 start=0 end=6 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_3600
     * @tc.name int8ArrayCopyWithinPart04Test036
     * @tc.desc Verify copyWithin target=2 start=0 end=6 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test036() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(2, 0, 6);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(4, arr.get(5));
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify copyWithin target=
     * 2 start=0 end=1 copies INT8_MIN to result[2], on new Int8Array(new int[] {-128, 0, 0, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_3700
     * @tc.name int8ArrayCopyWithinPart04Test037
     * @tc.desc Verify copyWithin target=2 start=0 end=1 copies INT8_MIN to result[2], on new I
     * nt8Array(new int[] {-128, 0, 0, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test037() {
    Int8Array arr = new Int8Array(new int[] {INT8_MIN, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    Integer r1 = arr.get(2);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify copyWithin target=2 start=0 end=1 copies INT8_MAX to result[2], on new I
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_3800
     * @tc.name int8ArrayCopyWithinPart04Test038
     * @tc.desc Verify copyWithin target=2 start=0 end=1 copies INT8_MAX to result[2], on new I
     * nt8Array([INT8_MAX, 0, 0, 0])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test038() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    assertEqualInt(INT8_MAX, arr.get(2));
    }

    /**
     * Verify copyWithin target=2 start=0 end=1 copies 0 to result[2], on new Int8Array(new int[] {0, 9, 9, 9})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_3900
     * @tc.name int8ArrayCopyWithinPart04Test039
     * @tc.desc Verify copyWithin target=2 start=0 end=1 copies 0 to result[2], on new Int8Array(new int[] {0, 9, 9, 9})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test039() {
    Int8Array arr = new Int8Array(new int[] {0, 9, 9, 9});
    arr.copyWithin(2, 0, 1);
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify 0xFF 255 -1 copyWithin -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_4000
     * @tc.name int8ArrayCopyWithinPart04Test040
     * @tc.desc Verify 0xFF 255 -1 copyWithin -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test040() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 0xff);
    arr.copyWithin(2, 0, 1);
    assertEqualInt(-1, arr.get(2));
    }

    /**
     * Verify 0x80 128 -128 copyWithin -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_4100
     * @tc.name int8ArrayCopyWithinPart04Test041
     * @tc.desc Verify 0x80 128 -128 copyWithin -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test041() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 0x80);
    arr.copyWithin(2, 0, 1);
    Integer r1 = arr.get(2);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify 0x100 256 0 copyWithin 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_4300
     * @tc.name int8ArrayCopyWithinPart04Test043
     * @tc.desc Verify 0x100 256 0 copyWithin 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test043() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 0x100);
    arr.copyWithin(2, 0, 1);
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify copyWithin target=2 start=0 end=1 copies truncated -129 as INT8_MAX to r
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_4400
     * @tc.name int8ArrayCopyWithinPart04Test044
     * @tc.desc Verify copyWithin target=2 start=0 end=1 copies truncated -129 as INT8_MAX to r
     * esult[2] on new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test044() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, -129);
    arr.copyWithin(2, 0, 1);
    assertEqualInt(INT8_MAX, arr.get(2));
    }

    /**
     * Verify copyWithin target=2 start=0 end=1 copies Number.NaN as 0 to result[2] on
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_4500
     * @tc.name int8ArrayCopyWithinPart04Test045
     * @tc.desc Verify copyWithin target=2 start=0 end=1 copies Number.NaN as 0 to result[2] on
     * new Int8Array(new double[] {Number.NaN, 9.0, 9.0, 9.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test045() {
    double[] src = new double[] {Double.NaN, 9.0, 9.0, 9.0};
    Int8Array arr = new Int8Array(src);
    arr.copyWithin(2, 0, 1);
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify copyWithin target=2 start=0 end=1 copies truncated 1.9 to 1 at result[2], on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_4600
     * @tc.name int8ArrayCopyWithinPart04Test046
     * @tc.desc Verify copyWithin target=2 start=0 end=1 copies truncated 1.9 to 1 at result[2], on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test046() {
    double[] src = new double[] {1.9, 0.0, 0.0, 0.0};
    Int8Array arr = new Int8Array(src);
    arr.copyWithin(2, 0, 1);
    assertEqualInt(1, arr.get(2));
    }

    /**
     * Verify copyWithin expects -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_4700
     * @tc.name int8ArrayCopyWithinPart04Test047
     * @tc.desc Verify copyWithin expects -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test047() {
    double[] src = new double[] {-1.9, 0.0, 0.0, 0.0};
    Int8Array arr = new Int8Array(src);
    arr.copyWithin(2, 0, 1);
    assertEqualInt(-1, arr.get(2));
    }

    /**
     * Verify copyWithin target=2 start=0 end=1 copies -0.0 truncated to 0 at result[2], on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_4800
     * @tc.name int8ArrayCopyWithinPart04Test048
     * @tc.desc Verify copyWithin target=2 start=0 end=1 copies -0.0 truncated to 0 at result[2], on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test048() {
    double[] src = new double[] {-0.0, 9.0, 9.0, 9.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(0, arr.get(0));
    arr.copyWithin(2, 0, 1);
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify copyWithin(4, 0, 2) on new Int8Array(new int[] {-128, INT8_MAX, 0, -1, 0, 0}) copi
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_4900
     * @tc.name int8ArrayCopyWithinPart04Test049
     * @tc.desc Verify copyWithin(4, 0, 2) on new Int8Array(new int[] {-128, INT8_MAX, 0, -1, 0, 0}) copi
     * es first two elements to tail
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test049() {
    Int8Array arr = new Int8Array(new int[] {-128, INT8_MAX, 0, -1, 0, 0});
    arr.copyWithin(4, 0, 2);
    assertEqualInt(-128, arr.get(4));
    assertEqualInt(INT8_MAX, arr.get(5));
    }

    /**
     * Verify copyWithin target=2 start=0 end=1 copies truncated 200 to -56 at result[2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_5000
     * @tc.name int8ArrayCopyWithinPart04Test050
     * @tc.desc Verify copyWithin target=2 start=0 end=1 copies truncated 200 to -56 at result[2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test050() {
    Int8Array arr = new Int8Array(4);
    arr.set(0, 200);
    arr.copyWithin(2, 0, 1);
    Integer r1 = arr.get(2);
    int e1 = -56;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify copyWithin target=10 start=0 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_5100
     * @tc.name int8ArrayCopyWithinPart04Test051
     * @tc.desc Verify copyWithin target=10 start=0 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test051() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(10, 0, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    }

    /**
     * Verify copyWithin target=0 start=10 end=12 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_5200
     * @tc.name int8ArrayCopyWithinPart04Test052
     * @tc.desc Verify copyWithin target=0 start=10 end=12 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test052() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 10, 12);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify copyWithin target=0 start=2 end=100 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_5300
     * @tc.name int8ArrayCopyWithinPart04Test053
     * @tc.desc Verify copyWithin target=0 start=2 end=100 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test053() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 2, 100);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(4, arr.get(1));
    }

    /**
     * Verify copyWithin target=-1 start=0 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_5400
     * @tc.name int8ArrayCopyWithinPart04Test054
     * @tc.desc Verify copyWithin target=-1 start=0 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test054() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(-1, 0, 2);
    assertEqualInt(1, arr.get(3));
    }

    /**
     * Verify copyWithin target=0 start=-2 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_5500
     * @tc.name int8ArrayCopyWithinPart04Test055
     * @tc.desc Verify copyWithin target=0 start=-2 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test055() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, -2, 5);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    }

    /**
     * Verify copyWithin target=0 start=0 end=-1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_5600
     * @tc.name int8ArrayCopyWithinPart04Test056
     * @tc.desc Verify copyWithin target=0 start=0 end=-1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test056() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0, -1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin target=-3 start=-5 end=-1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_5700
     * @tc.name int8ArrayCopyWithinPart04Test057
     * @tc.desc Verify copyWithin target=-3 start=-5 end=-1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test057() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-3, -5, -1);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(3, arr.get(4));
    }

    /**
     * Verify copyWithin(0, 2, 4) on view Int8Array(buf, 0, 4) writes 9, 10 to head, byte 4 stays 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_5800
     * @tc.name int8ArrayCopyWithinPart04Test058
     * @tc.desc Verify copyWithin(0, 2, 4) on view Int8Array(buf, 0, 4) writes 9, 10 to head, byte 4 stays 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test058() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array arr = new Int8Array(buf, 0, 4);
    arr.set(0, 7);
    arr.set(1, 8);
    arr.set(2, 9);
    arr.set(3, 10);
    arr.copyWithin(0, 2, 4);
    Int8Array direct = new Int8Array(buf);
    assertEqualInt(9, direct.get(0));
    assertEqualInt(10, direct.get(1));
    assertEqualInt(0, direct.get(4));
    }

    /**
     * Verify copyWithin(0, 3, 6) on child view updates parent $_get(0) to 4, $_get(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_5900
     * @tc.name int8ArrayCopyWithinPart04Test059
     * @tc.desc Verify copyWithin(0, 3, 6) on child view updates parent $_get(0) to 4, $_get(2)
     * to 6 on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test059() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array parent = new Int8Array(buf);
    parent.set(0, 1);
    parent.set(1, 2);
    parent.set(2, 3);
    parent.set(3, 4);
    parent.set(4, 5);
    parent.set(5, 6);
    Int8Array child = new Int8Array(buf, 0, 6);
    child.copyWithin(0, 3, 6);
    assertEqualInt(4, parent.get(0));
    assertEqualInt(6, parent.get(2));
    }

    /**
     * Verify subarray(2, 6).copyWithin(0, 2, 4) on [1, 2, 3, 4, 5, 6] propagates to parent arr
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_6000
     * @tc.name int8ArrayCopyWithinPart04Test060
     * @tc.desc Verify subarray(2, 6).copyWithin(0, 2, 4) on [1, 2, 3, 4, 5, 6] propagates to parent arr
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test060() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    Int8Array sub = arr.subarray(2, 6);
    sub.copyWithin(0, 2, 4);
    assertEqualInt(5, arr.get(2));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify copyWithin(0, 2, 4) on parent then subarray(0, 4) view reflects updated elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_6100
     * @tc.name int8ArrayCopyWithinPart04Test061
     * @tc.desc Verify copyWithin(0, 2, 4) on parent then subarray(0, 4) view reflects updated elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test061() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    Int8Array sub = arr.subarray(0, 4);
    arr.copyWithin(0, 2, 4);
    assertEqualInt(3, sub.get(0));
    assertEqualInt(4, sub.get(1));
    }

    /**
     * Verify view2.copyWithin(0, 1, 2) leaves sibling views $_get(0) 50 on view4, 10 on view0, sharing buf
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_6200
     * @tc.name int8ArrayCopyWithinPart04Test062
     * @tc.desc Verify view2.copyWithin(0, 1, 2) leaves sibling views $_get(0) 50 on view4, 10 on view0, sharing buf
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test062() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array view0 = new Int8Array(buf, 0, 2);
    Int8Array view2 = new Int8Array(buf, 2, 2);
    Int8Array view4 = new Int8Array(buf, 4, 2);
    view0.set(0, 10);
    view0.set(1, 20);
    view2.set(0, 30);
    view2.set(1, 40);
    view4.set(0, 50);
    view4.set(1, 60);
    view2.copyWithin(0, 1, 2);
    assertEqualInt(50, view4.get(0));
    assertEqualInt(10, view0.get(0));
    }

    /**
     * Verify copyWithin(0, 2, 4) on offset view Int8Array(buf, 2, 4) writes 3, 4 to head, buf elsewhere stays 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_6300
     * @tc.name int8ArrayCopyWithinPart04Test063
     * @tc.desc Verify copyWithin(0, 2, 4) on offset view Int8Array(buf, 2, 4) writes 3, 4 to h
     * ead, buf elsewhere stays 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test063() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 2, 4);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.set(3, 4);
    arr.copyWithin(0, 2, 4);
    Int8Array full = new Int8Array(buf);
    assertEqualInt(3, full.get(2));
    assertEqualInt(4, full.get(5));
    assertEqualInt(0, full.get(0));
    assertEqualInt(0, full.get(6));
    }

    /**
     * Verify copyWithin(0, 0, 4) on subarray(1, 5) does not modify original array elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_6400
     * @tc.name int8ArrayCopyWithinPart04Test064
     * @tc.desc Verify copyWithin(0, 0, 4) on subarray(1, 5) does not modify original array elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test064() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    Int8Array sub = arr.subarray(1, 5);
    sub.copyWithin(0, 0, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(6, arr.get(5));
    assertEqualInt(2, arr.get(1));
    }

    /**
     * Verify slice snapshot unchanged after copyWithin(0, 2, 4) on [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_6500
     * @tc.name int8ArrayCopyWithinPart04Test065
     * @tc.desc Verify slice snapshot unchanged after copyWithin(0, 2, 4) on [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test065() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array snapshot = arr.slice();
    arr.copyWithin(0, 2, 4);
    assertEqualInt(1, snapshot.get(0));
    assertEqualInt(3, arr.get(0));
    }

    /**
     * Verify copyWithin updates sibling view on shared buffer, expects 4, on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_6600
     * @tc.name int8ArrayCopyWithinPart04Test066
     * @tc.desc Verify copyWithin updates sibling view on shared buffer, expects 4, on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test066() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array a = new Int8Array(buf);
    a.set(0, 1);
    a.set(1, 2);
    a.set(2, 3);
    a.set(3, 4);
    a.set(4, 5);
    a.set(5, 6);
    a.copyWithin(0, 3, 6);
    Int8Array b = new Int8Array(buf, 3, 3);
    assertEqualInt(4, b.get(0));
    assertEqualInt(6, b.get(2));
    }

    /**
     * Verify copyWithin(0, 1, 3) on subarray(2, 5) writes 4 to arr[2], bounds stay 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_6700
     * @tc.name int8ArrayCopyWithinPart04Test067
     * @tc.desc Verify copyWithin(0, 1, 3) on subarray(2, 5) writes 4 to arr[2], bounds stay 1
     * and 6 on new Int8Array(new int[] {1, 2, 3, 4, 5, 6})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test067() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    Int8Array sub = arr.subarray(2, 5);
    sub.copyWithin(0, 1, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(6, arr.get(5));
    assertEqualInt(4, arr.get(2));
    }

    /**
     * Verify copyWithin target=0 start=0 end=1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_6800
     * @tc.name int8ArrayCopyWithinPart04Test068
     * @tc.desc Verify copyWithin target=0 start=0 end=1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test068() {
    Int8Array arr = new Int8Array(new int[] {42});
    arr.copyWithin(0, 0, 1);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify copyWithin target=0 start=2 end=4 copies [3, 4] to head of [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_6900
     * @tc.name int8ArrayCopyWithinPart04Test069
     * @tc.desc Verify copyWithin target=0 start=2 end=4 copies [3, 4] to head of [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test069() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 2, 4);
    Integer r1 = arr.get(0);
    int e1 = 3;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(1);
    int e2 = 4;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify copyWithin target=0 start=2 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_7000
     * @tc.name int8ArrayCopyWithinPart04Test070
     * @tc.desc Verify copyWithin target=0 start=2 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test070() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify copyWithin expects 0, with $_get(2), on new Int8Array(new double[] {Number.POSITIVE_INFINITY, 0.0, 0.0, 0.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_7100
     * @tc.name int8ArrayCopyWithinPart04Test071
     * @tc.desc Verify copyWithin expects 0, with $_get(2), on new Int8Array(new double[] {Numb
     * er.POSITIVE_INFINITY, 0.0, 0.0, 0.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test071() {
    double[] src = new double[] {Double.POSITIVE_INFINITY, 0.0, 0.0, 0.0};
    Int8Array arr = new Int8Array(src);
    arr.copyWithin(2, 0, 1);
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify copyWithin expects 0, with $_get(2), on new Int8Array(new double[] {-Number.POSITIVE_INFINITY, 0.0, 0.0, 0.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART04_TEST_7200
     * @tc.name int8ArrayCopyWithinPart04Test072
     * @tc.desc Verify copyWithin expects 0, with $_get(2), on new Int8Array(new double[] {-Num
     * ber.POSITIVE_INFINITY, 0.0, 0.0, 0.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart04Test072() {
    double[] src = new double[] {-Double.POSITIVE_INFINITY, 0.0, 0.0, 0.0};
    Int8Array arr = new Int8Array(src);
    arr.copyWithin(2, 0, 1);
    assertEqualInt(0, arr.get(2));
    }
}
