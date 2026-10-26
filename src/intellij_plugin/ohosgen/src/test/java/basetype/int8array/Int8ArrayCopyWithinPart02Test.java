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

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayCopyWithinPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayCopyWithinPart02Test extends BasTest {
    private static final int INT8_MAX = 127;

    /**
     * Verify copyWithin returns non-undefined (API contract test), with copyWithin(0,
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_0100
     * @tc.name int8ArrayCopyWithinPart02Test001
     * @tc.desc Verify copyWithin returns non-undefined (API contract test), with copyWithin(0,
     * 1, 3), on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test001() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array ret = arr.copyWithin(0, 1, 3);
    Integer r1 = ret.get(0);
    int e1 = 2;
    assertEqualInt(e1, r1);
    Integer r2 = ret.get(1);
    int e2 = 3;
    assertEqualInt(e2, r2);
    Integer r3 = ret.get(3);
    int e3 = 4;
    assertEqualInt(e3, r3);
    Integer r4 = ret.get(4);
    int e4 = 5;
    assertEqualInt(e4, r4);
    int r5 = ret.length();
    int e5 = 5;
    assertEqual(e5, r5);
    int r6 = ret.byteLength();
    int e6 = 5;
    assertEqual(e6, r6);
    }

    /**
     * Verify copyWithin returns non-undefined (API contract test), with copyWithin(0,
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_0200
     * @tc.name int8ArrayCopyWithinPart02Test002
     * @tc.desc Verify copyWithin returns non-undefined (API contract test), with copyWithin(0,
     * 0, 0), on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test002() {
    Int8Array arr = new Int8Array(0);
    Int8Array ret = arr.copyWithin(0, 0, 0);
    int r1 = ret.length();
    int e1 = 0;
    assertEqual(e1, r1);
    int r2 = ret.byteLength();
    int e2 = 0;
    assertEqual(e2, r2);
    assertEqual(arr, ret);
    ArrayBuffer r3 = ret.buffer();
    ArrayBuffer e3 = arr.buffer();
    assertEqual(e3, r3);
    }

    /**
     * Verify copyWithin returns non-undefined (API contract test), with copyWithin(0,
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_0300
     * @tc.name int8ArrayCopyWithinPart02Test003
     * @tc.desc Verify copyWithin returns non-undefined (API contract test), with copyWithin(0,
     * 0, 1), on new Int8Array(new int[] {7})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test003() {
    Int8Array arr = new Int8Array(new int[] {7});
    Int8Array ret = arr.copyWithin(0, 0, 1);
    Integer r1 = ret.get(0);
    int e1 = 7;
    assertEqualInt(e1, r1);
    int r2 = ret.length();
    int e2 = 1;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin returns non-undefined (API contract test), with copyWithin(-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_0400
     * @tc.name int8ArrayCopyWithinPart02Test004
     * @tc.desc Verify copyWithin returns non-undefined (API contract test), with copyWithin(-1
     * , -3, -2), on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test004() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array ret = arr.copyWithin(-1, -3, -2);
    Integer r1 = ret.get(4);
    int e1 = 3;
    assertEqualInt(e1, r1);
    assertEqual(arr, ret);
    }

    /**
     * Verify copyWithin returns non-undefined (API contract test), with copyWithin(-2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_0500
     * @tc.name int8ArrayCopyWithinPart02Test005
     * @tc.desc Verify copyWithin returns non-undefined (API contract test), with copyWithin(-2
     * , -3, -1), on new Int8Array(new int[] {10, 20, 30, 40})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test005() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array ret = arr.copyWithin(-2, -3, -1);
    Integer r1 = ret.get(2);
    int e1 = 20;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify copyWithin expects arr.length, with copyWithin(0, 1, 2), on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_0600
     * @tc.name int8ArrayCopyWithinPart02Test006
     * @tc.desc Verify copyWithin expects arr.length, with copyWithin(0, 1, 2), on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test006() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    Int8Array ret = arr.copyWithin(0, 1, 2);
    assertEqual(arr.length(), ret.length());
    Integer r1 = ret.get(0);
    int e1 = 2;
    assertEqualInt(e1, r1);
    Integer r2 = ret.get(2);
    int e2 = 3;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify copyWithin expects arr.length, with copyWithin(0, 0, 0), on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_0700
     * @tc.name int8ArrayCopyWithinPart02Test007
     * @tc.desc Verify copyWithin expects arr.length, with copyWithin(0, 0, 0), on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test007() {
    Int8Array arr = new Int8Array(0);
    Int8Array ret = arr.copyWithin(0, 0, 0);
    assertEqual(arr.length(), ret.length());
    }

    /**
     * Verify copyWithin(0, 2).copyWithin(1, 3) expects arr.length on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_0800
     * @tc.name int8ArrayCopyWithinPart02Test008
     * @tc.desc Verify copyWithin(0, 2).copyWithin(1, 3) expects arr.length on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test008() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array ret = arr.copyWithin(0, 2).copyWithin(1, 3);
    assertEqual(arr.length(), ret.length());
    }

    /**
     * Verify copyWithin(0, 1, 2) keeps length 6 on 6-byte ArrayBuffer view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_0900
     * @tc.name int8ArrayCopyWithinPart02Test009
     * @tc.desc Verify copyWithin(0, 1, 2) keeps length 6 on 6-byte ArrayBuffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test009() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array view = new Int8Array(buf, 0, 6);
    view.set(0, 5);
    view.set(1, 6);
    view.set(2, 7);
    Int8Array ret = view.copyWithin(0, 1, 2);
    assertEqual(view.length(), ret.length());
    }

    /**
     * Verify copyWithin expects arr.length, with copyWithin(100, 0, 1), on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_1000
     * @tc.name int8ArrayCopyWithinPart02Test010
     * @tc.desc Verify copyWithin expects arr.length, with copyWithin(100, 0, 1), on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test010() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    Int8Array ret = arr.copyWithin(100, 0, 1);
    assertEqual(arr.length(), ret.length());
    assertEqual(arr, ret);
    }

    /**
     * Verify copyWithin target=0 start=3 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_1100
     * @tc.name int8ArrayCopyWithinPart02Test011
     * @tc.desc Verify copyWithin target=0 start=3 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test011() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array ret = arr.copyWithin(0, 3);
    assertEqualInt(4, ret.get(0));
    assertEqualInt(5, ret.get(1));
    }

    /**
     * Verify copyWithin target=3 start=0 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_1200
     * @tc.name int8ArrayCopyWithinPart02Test012
     * @tc.desc Verify copyWithin target=3 start=0 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test012() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    Int8Array ret = arr.copyWithin(3, 0, 2);
    assertEqualInt(1, ret.get(3));
    assertEqualInt(2, ret.get(4));
    }

    /**
     * Verify copyWithin target=0 start=0 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_1300
     * @tc.name int8ArrayCopyWithinPart02Test013
     * @tc.desc Verify copyWithin target=0 start=0 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test013() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array ret = arr.copyWithin(0, 0, 2);
    assertEqualInt(1, ret.get(0));
    assertEqualInt(2, ret.get(1));
    Integer r1 = ret.get(2);
    int e1 = 3;
    assertEqualInt(e1, r1);
    Integer r2 = ret.get(3);
    int e2 = 4;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify copyWithin target=3 start=0 end=1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_1400
     * @tc.name int8ArrayCopyWithinPart02Test014
     * @tc.desc Verify copyWithin target=3 start=0 end=1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test014() {
    Int8Array arr = new Int8Array(new int[] {9, 8, 7, 6});
    Int8Array ret = arr.copyWithin(3, 0, 1);
    assertEqualInt(9, ret.get(3));
    }

    /**
     * Verify copyWithin target=0 start=2 end=100 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_1500
     * @tc.name int8ArrayCopyWithinPart02Test015
     * @tc.desc Verify copyWithin target=0 start=2 end=100 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test015() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array ret = arr.copyWithin(0, 2, 100);
    assertEqualInt(3, ret.get(0));
    assertEqualInt(4, ret.get(1));
    }

    /**
     * Verify copyWithin target=
     * 100 start=0 end=2 is a no-op keeping [1, 2, 3, 4], on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_1600
     * @tc.name int8ArrayCopyWithinPart02Test016
     * @tc.desc Verify copyWithin target=100 start=0 end=2 is a no-op keeping [1, 2, 3, 4], onnew Int8Array(new int[]
     * {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test016() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array ret = arr.copyWithin(100, 0, 2);
    assertEqualInt(1, ret.get(0));
    assertEqualInt(2, ret.get(1));
    int r1 = ret.length();
    int e1 = 4;
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin target=-2 start=0 end=2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_1700
     * @tc.name int8ArrayCopyWithinPart02Test017
     * @tc.desc Verify copyWithin target=-2 start=0 end=2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test017() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array ret = arr.copyWithin(-2, 0, 2);
    assertEqualInt(1, ret.get(3));
    assertEqualInt(2, ret.get(4));
    }

    /**
     * Verify copyWithin target=0 start=-2 copies elements from start to end of array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_1800
     * @tc.name int8ArrayCopyWithinPart02Test018
     * @tc.desc Verify copyWithin target=0 start=-2 copies elements from start to end of array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test018() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array ret = arr.copyWithin(0, -2);
    assertEqualInt(4, ret.get(0));
    assertEqualInt(5, ret.get(1));
    }

    /**
     * Verify copyWithin target=0 start=1 end=-1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_1900
     * @tc.name int8ArrayCopyWithinPart02Test019
     * @tc.desc Verify copyWithin target=0 start=1 end=-1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test019() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array ret = arr.copyWithin(0, 1, -1);
    assertEqualInt(2, ret.get(0));
    assertEqualInt(3, ret.get(1));
    assertEqualInt(4, ret.get(2));
    }

    /**
     * Verify copyWithin target=-3 start=-4 end=-2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_2000
     * @tc.name int8ArrayCopyWithinPart02Test020
     * @tc.desc Verify copyWithin target=-3 start=-4 end=-2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test020() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    Int8Array ret = arr.copyWithin(-3, -4, -2);
    assertEqualInt(20, ret.get(2));
    assertEqualInt(30, ret.get(3));
    }

    /**
     * Verify copyWithin target=-4 start=2 end=4 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_2100
     * @tc.name int8ArrayCopyWithinPart02Test021
     * @tc.desc Verify copyWithin target=-4 start=2 end=4 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test021() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array ret = arr.copyWithin(-4, 2, 4);
    assertEqualInt(3, ret.get(0));
    assertEqualInt(4, ret.get(1));
    }

    /**
     * Verify copyWithin target=2 start=-4 end=-2 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_2200
     * @tc.name int8ArrayCopyWithinPart02Test022
     * @tc.desc Verify copyWithin target=2 start=-4 end=-2 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test022() {
    Int8Array arr = new Int8Array(new int[] {5, 6, 7, 8});
    Int8Array ret = arr.copyWithin(2, -4, -2);
    assertEqualInt(5, ret.get(2));
    assertEqualInt(6, ret.get(3));
    }

    /**
     * Verify copyWithin target=1 start=0 end=4 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_2300
     * @tc.name int8ArrayCopyWithinPart02Test023
     * @tc.desc Verify copyWithin target=1 start=0 end=4 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test023() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array ret = arr.copyWithin(1, 0, 4);
    assertEqualInt(1, ret.get(1));
    assertEqualInt(2, ret.get(2));
    assertEqualInt(3, ret.get(3));
    assertEqualInt(4, ret.get(4));
    }

    /**
     * Verify copyWithin target=0 start=1 end=4 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_2400
     * @tc.name int8ArrayCopyWithinPart02Test024
     * @tc.desc Verify copyWithin target=0 start=1 end=4 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test024() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array ret = arr.copyWithin(0, 1, 4);
    assertEqualInt(2, ret.get(0));
    assertEqualInt(3, ret.get(1));
    assertEqualInt(4, ret.get(2));
    }

    /**
     * Verify copyWithin target=1 start=1 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_2500
     * @tc.name int8ArrayCopyWithinPart02Test025
     * @tc.desc Verify copyWithin target=1 start=1 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test025() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array ret = arr.copyWithin(1, 1, 3);
    assertEqualInt(2, ret.get(1));
    assertEqualInt(3, ret.get(2));
    Integer r1 = ret.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    Integer r2 = ret.get(3);
    int e2 = 4;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify copyWithin target=2 start=0 end=3 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_2600
     * @tc.name int8ArrayCopyWithinPart02Test026
     * @tc.desc Verify copyWithin target=2 start=0 end=3 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test026() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    Int8Array ret = arr.copyWithin(2, 0, 3);
    assertEqualInt(1, ret.get(2));
    assertEqualInt(2, ret.get(3));
    assertEqualInt(3, ret.get(4));
    }

    /**
     * Verify copyWithin target=2 start=1 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_2700
     * @tc.name int8ArrayCopyWithinPart02Test027
     * @tc.desc Verify copyWithin target=2 start=1 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test027() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array ret = arr.copyWithin(2, 1, 5);
    assertEqualInt(2, ret.get(2));
    assertEqualInt(3, ret.get(3));
    assertEqualInt(4, ret.get(4));
    }

    /**
     * Verify copyWithin target=0 start=3 end=5 copies 4, 5 to head on new Int8Array(new int[] {1, 2, 3, 4, 5, 6})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_2800
     * @tc.name int8ArrayCopyWithinPart02Test028
     * @tc.desc Verify copyWithin target=0 start=3 end=5 copies 4, 5 to head on new Int8Array(new int[] {1, 2, 3, 4, 5,
     * 6})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test028() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    Int8Array ret = arr.copyWithin(0, 3, 5);
    Integer r1 = ret.get(0);
    int e1 = 4;
    assertEqualInt(e1, r1);
    Integer r2 = ret.get(1);
    int e2 = 5;
    assertEqualInt(e2, r2);
    assertEqualInt(5, ret.get(4));
    assertEqualInt(6, ret.get(5));
    }

    /**
     * Verify copyWithin target=0 start=100 end=200 is a no-op keeping [1, 2, 3, 4], on n
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_2900
     * @tc.name int8ArrayCopyWithinPart02Test029
     * @tc.desc Verify copyWithin target=0 start=100 end=200 is a no-op keeping [1, 2, 3, 4], on new Int8Array([1, 2,
     * 3, 4])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test029() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array ret = arr.copyWithin(0, 100, 200);
    assertEqualInt(1, ret.get(0));
    assertEqualInt(4, ret.get(3));
    int r1 = ret.length();
    int e1 = 4;
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin does nothing when start >= end, with copyWithin(0, 3, 1), on
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_3000
     * @tc.name int8ArrayCopyWithinPart02Test030
     * @tc.desc Verify copyWithin does nothing when start >= end, with copyWithin(0, 3, 1), onnew Int8Array(new int[]
     * {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test030() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array ret = arr.copyWithin(0, 3, 1);
    assertEqualInt(1, ret.get(0));
    assertEqualInt(3, ret.get(2));
    }

    /**
     * Verify copyWithin(0, 0, 0) keeps length 0 on empty new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_3100
     * @tc.name int8ArrayCopyWithinPart02Test031
     * @tc.desc Verify copyWithin(0, 0, 0) keeps length 0 on empty new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test031() {
    Int8Array arr = new Int8Array(0);
    Int8Array ret = arr.copyWithin(0, 0, 0);
    int r1 = ret.length();
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin target=0 start=1 end=1000 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_3200
     * @tc.name int8ArrayCopyWithinPart02Test032
     * @tc.desc Verify copyWithin target=0 start=1 end=1000 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test032() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array ret = arr.copyWithin(0, 1, 1000);
    int r1 = ret.length();
    int e1 = 4;
    assertEqual(e1, r1);
    Integer r2 = ret.get(0);
    int e2 = 2;
    assertEqualInt(e2, r2);
    Integer r3 = ret.get(1);
    int e3 = 3;
    assertEqualInt(e3, r3);
    Integer r4 = ret.get(3);
    int e4 = 4;
    assertEqualInt(e4, r4);
    }

    /**
     * Verify copyWithin(0, 2).copyWithin(1, 3) expects 5 on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_3300
     * @tc.name int8ArrayCopyWithinPart02Test033
     * @tc.desc Verify copyWithin(0, 2).copyWithin(1, 3) expects 5 on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test033() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array ret = arr.copyWithin(0, 2).copyWithin(1, 3);
    assertEqual(5, ret.length());
    assertEqual(arr, ret);
    ArrayBuffer r1 = ret.buffer();
    ArrayBuffer e1 = arr.buffer();
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin target=-3 start=-5 end=-1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_3400
     * @tc.name int8ArrayCopyWithinPart02Test034
     * @tc.desc Verify copyWithin target=-3 start=-5 end=-1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test034() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    Int8Array ret = arr.copyWithin(-3, -5, -1);
    int r1 = ret.length();
    int e1 = 6;
    assertEqual(e1, r1);
    Integer r2 = ret.get(3);
    int e2 = 2;
    assertEqualInt(e2, r2);
    Integer r3 = ret.get(4);
    int e3 = 3;
    assertEqualInt(e3, r3);
    Integer r4 = ret.get(5);
    int e4 = 4;
    assertEqualInt(e4, r4);
    }

    /**
     * Verify copyWithin target=0 start=2 end=4 on view keeps byteLength 4 and buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_3500
     * @tc.name int8ArrayCopyWithinPart02Test035
     * @tc.desc Verify copyWithin target=0 start=2 end=4 on view keeps byteLength 4 and bufferbuf, on new
     * Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test035() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 0, 4);
    view.set(0, 1);
    view.set(1, 2);
    view.set(2, 3);
    view.set(3, 4);
    Int8Array ret = view.copyWithin(0, 2, 4);
    int r1 = ret.byteLength();
    int e1 = 4;
    assertEqual(e1, r1);
    ArrayBuffer r2 = ret.buffer();
    ArrayBuffer e2 = buf;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin target=0 start=1 end=3 on view keeps byteOffset 2 and buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_3600
     * @tc.name int8ArrayCopyWithinPart02Test036
     * @tc.desc Verify copyWithin target=0 start=1 end=3 on view keeps byteOffset 2 and bufferbuf, on new
     * Int8Array(buf, 2, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test036() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 2, 4);
    view.set(0, 1);
    view.set(1, 2);
    view.set(2, 3);
    view.set(3, 4);
    Int8Array ret = view.copyWithin(0, 1, 3);
    int r1 = ret.byteOffset();
    int e1 = 2;
    assertEqual(e1, r1);
    ArrayBuffer r2 = ret.buffer();
    ArrayBuffer e2 = buf;
    assertEqual(e2, r2);
    }

    /**
     * Verify copyWithin(0, 2).copyWithin(1, 4) expects 6 byteLength on new Int8Array(new int[] {1, 2, 3, 4, 5, 6})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_3700
     * @tc.name int8ArrayCopyWithinPart02Test037
     * @tc.desc Verify copyWithin(0, 2).copyWithin(1, 4) expects 6 byteLength on new Int8Array(
     * new int[] {1, 2, 3, 4, 5, 6})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test037() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    Int8Array ret = arr.copyWithin(0, 2).copyWithin(1, 4);
    int r1 = ret.byteLength();
    int e1 = 6;
    assertEqual(e1, r1);
    Integer r2 = ret.get(0);
    int e2 = 3;
    assertEqualInt(e2, r2);
    Integer r3 = ret.get(1);
    int e3 = 5;
    assertEqualInt(e3, r3);
    Integer r4 = ret.get(5);
    int e4 = 6;
    assertEqualInt(e4, r4);
    }

    /**
     * Verify copyWithin(0, 1, 3) returns this sharing arr.buffer, on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_3800
     * @tc.name int8ArrayCopyWithinPart02Test038
     * @tc.desc Verify copyWithin(0, 1, 3) returns this sharing arr.buffer, on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test038() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array ret = arr.copyWithin(0, 1, 3);
    assertEqual(arr, ret);
    ArrayBuffer r1 = ret.buffer();
    ArrayBuffer e1 = arr.buffer();
    assertEqual(e1, r1);
    }

    /**
     * Verify copyWithin(0, 0, 1) returns this on new Int8Array(new int[] {9})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_3900
     * @tc.name int8ArrayCopyWithinPart02Test039
     * @tc.desc Verify copyWithin(0, 0, 1) returns this on new Int8Array(new int[] {9})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test039() {
    Int8Array arr = new Int8Array(new int[] {9});
    Int8Array ret = arr.copyWithin(0, 0, 1);
    assertEqual(arr, ret);
    }

    /**
     * Verify copyWithin(0, 1, 2) returns this on view, on new Int8Array(buf, 0, 6)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_4000
     * @tc.name int8ArrayCopyWithinPart02Test040
     * @tc.desc Verify copyWithin(0, 1, 2) returns this on view, on new Int8Array(buf, 0, 6)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test040() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array view = new Int8Array(buf, 0, 6);
    view.set(0, 1);
    view.set(1, 2);
    view.set(2, 3);
    Int8Array ret = view.copyWithin(0, 1, 2);
    assertEqual(view, ret);
    }

    /**
     * Verify copyWithin(0, 2).reverse() returns arr on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_4100
     * @tc.name int8ArrayCopyWithinPart02Test041
     * @tc.desc Verify copyWithin(0, 2).reverse() returns arr on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test041() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array ret = arr.copyWithin(0, 2).reverse();
    assertEqual(arr, ret);
    }

    /**
     * Verify copyWithin(0, 2).fill(0, 0, 2) chain returns this, on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_4200
     * @tc.name int8ArrayCopyWithinPart02Test042
     * @tc.desc Verify copyWithin(0, 2).fill(0, 0, 2) chain returns this, on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test042() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array ret = arr.copyWithin(0, 2).fill(0, 0, 2);
    assertEqual(arr, ret);
    }

    /**
     * Verify copyWithin(0, 2).sort() returns arr on new Int8Array(new int[] {3, 1, 4, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_4300
     * @tc.name int8ArrayCopyWithinPart02Test043
     * @tc.desc Verify copyWithin(0, 2).sort() returns arr on new Int8Array(new int[] {3, 1, 4, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test043() {
    Int8Array arr = new Int8Array(new int[] {3, 1, 4, 2});
    Int8Array ret = arr.copyWithin(0, 2).sort();
    assertEqual(arr, ret);
    }

    /**
     * Verify copyWithin(0, 1).copyWithin(2, 4).copyWithin(3, 0) returns arr on new Int8Array(new int[] {1, 2, 3, 4, 5,
     * 6})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_4400
     * @tc.name int8ArrayCopyWithinPart02Test044
     * @tc.desc Verify copyWithin(0, 1).copyWithin(2, 4).copyWithin(3, 0) returns arr on new Int8Array([1, 2, 3, 4, 5,
     * 6])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test044() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    Int8Array ret = arr.copyWithin(0, 1).copyWithin(2, 4).copyWithin(3, 0);
    assertEqual(arr, ret);
    }

    /**
     * Verify chained copyWithin(0, 0, 0) returns this on empty new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_4500
     * @tc.name int8ArrayCopyWithinPart02Test045
     * @tc.desc Verify chained copyWithin(0, 0, 0) returns this on empty new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test045() {
    Int8Array arr = new Int8Array(0);
    Int8Array ret = arr.copyWithin(0, 0, 0).copyWithin(0, 0, 0);
    assertEqual(arr, ret);
    }

    /**
     * Verify copyWithin(0, 2, 4) writes 30, 40 to head readable via new view on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_4600
     * @tc.name int8ArrayCopyWithinPart02Test046
     * @tc.desc Verify copyWithin(0, 2, 4) writes 30, 40 to head readable via new view on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test046() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    arr.copyWithin(0, 2, 4);
    Int8Array reader = new Int8Array(buf);
    assertEqualInt(30, reader.get(0));
    assertEqualInt(40, reader.get(1));
    }

    /**
     * Verify copyWithin(0, 2, 4) does not affect bytes outside view range on new Int8Array(buf, 2, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_4700
     * @tc.name int8ArrayCopyWithinPart02Test047
     * @tc.desc Verify copyWithin(0, 2, 4) does not affect bytes outside view range on new Int8Array(buf, 2, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test047() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 2, 4);
    view.set(0, 1);
    view.set(1, 2);
    view.set(2, 3);
    view.set(3, 4);
    Int8Array outside = new Int8Array(buf, 0, 2);
    outside.set(0, 90);
    outside.set(1, 91);
    view.copyWithin(0, 2, 4);
    assertEqualInt(90, outside.get(0));
    assertEqualInt(91, outside.get(1));
    }

    /**
     * Verify copyWithin(0, 1, 2) copies 6 to view head keeping byteOffset 4, on new Int8Array(buf, 4, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_4800
     * @tc.name int8ArrayCopyWithinPart02Test048
     * @tc.desc Verify copyWithin(0, 1, 2) copies 6 to view head keeping byteOffset 4, on new Int8Array(buf, 4, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test048() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array view = new Int8Array(buf, 4, 2);
    view.set(0, 5);
    view.set(1, 6);
    Int8Array ret = view.copyWithin(0, 1, 2);
    assertEqual(4, ret.byteOffset());
    assertEqualInt(6, ret.get(0));
    }

    /**
     * Verify copyWithin(0, 1, 3) on subarray(2, 5) returns byteOffset 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_4900
     * @tc.name int8ArrayCopyWithinPart02Test049
     * @tc.desc Verify copyWithin(0, 1, 3) on subarray(2, 5) returns byteOffset 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test049() {
    Int8Array base = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    Int8Array sub = base.subarray(2, 5);
    Int8Array ret = sub.copyWithin(0, 1, 3);
    assertEqual(2, ret.byteOffset());
    }

    /**
     * Verify copyWithin target=2 start=0 end=1 copies INT8_MAX to result[2], on new I
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_5000
     * @tc.name int8ArrayCopyWithinPart02Test050
     * @tc.desc Verify copyWithin target=2 start=0 end=1 copies INT8_MAX to result[2], on new Int8Array([INT8_MAX, 1,
     * 2, 3])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test050() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, 1, 2, 3});
    Int8Array ret = arr.copyWithin(2, 0, 1);
    assertEqualInt(INT8_MAX, ret.get(2));
    }

    /**
     * Verify copyWithin target=2 start=0 end=1 truncates -129 to INT8_MAX at result[2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_5100
     * @tc.name int8ArrayCopyWithinPart02Test051
     * @tc.desc Verify copyWithin target=2 start=0 end=1 truncates -129 to INT8_MAX at result[2
     * ], on new Int8Array(new int[] {-129, 1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test051() {
    Int8Array arr = new Int8Array(new int[] {-129, 1, 2, 3});
    Int8Array ret = arr.copyWithin(2, 0, 1);
    assertEqualInt(INT8_MAX, ret.get(2));
    }

    /**
     * Verify copyWithin expects -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_5300
     * @tc.name int8ArrayCopyWithinPart02Test053
     * @tc.desc Verify copyWithin expects -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test053() {
    Int8Array arr = new Int8Array(new int[] {128, 1, 2, 3});
    Int8Array ret = arr.copyWithin(2, 0, 1);
    assertEqualInt(-128, ret.get(2));
    }

    /**
     * Verify copyWithin expects -1, on new Int8Array(new int[] {255, 1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_5400
     * @tc.name int8ArrayCopyWithinPart02Test054
     * @tc.desc Verify copyWithin expects -1, on new Int8Array(new int[] {255, 1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test054() {
    Int8Array arr = new Int8Array(new int[] {255, 1, 2, 3});
    Int8Array ret = arr.copyWithin(2, 0, 1);
    assertEqualInt(-1, ret.get(2));
    }

    /**
     * Verify copyWithin target=2 start=0 end=1 copies Number.NaN as 0 to result[2], o
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_5500
     * @tc.name int8ArrayCopyWithinPart02Test055
     * @tc.desc Verify copyWithin target=2 start=0 end=1 copies Number.NaN as 0 to result[2], on new Int8Array(new
     * double[] {Number.NaN, 1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test055() {
    Int8Array arr = new Int8Array(new double[] {Double.NaN, 1, 2, 3});
    Int8Array ret = arr.copyWithin(2, 0, 1);
    assertEqualInt(0, ret.get(2));
    }

    /**
     * Verify copyWithin target=2 start=0 end=1 truncates 1.9 to 1 at result[2], on ne
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_5600
     * @tc.name int8ArrayCopyWithinPart02Test056
     * @tc.desc Verify copyWithin target=2 start=0 end=1 truncates 1.9 to 1 at result[2], on new Int8Array([1.9, 1, 2,
     * 3])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test056() {
    Int8Array arr = new Int8Array(new double[] {1.9, 1, 2, 3});
    Int8Array ret = arr.copyWithin(2, 0, 1);
    assertEqualInt(1, ret.get(2));
    }

    /**
     * Verify copyWithin expects -1, on new Int8Array(new double[] {-1.9, 1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_5700
     * @tc.name int8ArrayCopyWithinPart02Test057
     * @tc.desc Verify copyWithin expects -1, on new Int8Array(new double[] {-1.9, 1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test057() {
    Int8Array arr = new Int8Array(new double[] {-1.9, 1, 2, 3});
    Int8Array ret = arr.copyWithin(2, 0, 1);
    assertEqualInt(-1, ret.get(2));
    }

    /**
     * Verify copyWithin target=2 start=0 end=1 truncates 0x100 to 0 at result[2], on
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_5800
     * @tc.name int8ArrayCopyWithinPart02Test058
     * @tc.desc Verify copyWithin target=2 start=0 end=1 truncates 0x100 to 0 at result[2], onnew Int8Array(new int[]
     * {0x100, 1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test058() {
    Int8Array arr = new Int8Array(new int[] {0x100, 1, 2, 3});
    Int8Array ret = arr.copyWithin(2, 0, 1);
    assertEqualInt(0, ret.get(2));
    }

    /**
     * Verify copyWithin target=2 start=0 end=100 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_5900
     * @tc.name int8ArrayCopyWithinPart02Test059
     * @tc.desc Verify copyWithin target=2 start=0 end=100 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test059() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array ret = arr.copyWithin(2, 0, 100);
    assertEqualInt(1, ret.get(2));
    assertEqualInt(2, ret.get(3));
    assertEqualInt(3, ret.get(4));
    }

    /**
     * Verify copyWithin target=1 start=0 end=5 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_6000
     * @tc.name int8ArrayCopyWithinPart02Test060
     * @tc.desc Verify copyWithin target=1 start=0 end=5 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test060() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array ret = arr.copyWithin(1, 0, 5);
    assertEqualInt(1, ret.get(1));
    assertEqualInt(4, ret.get(4));
    }

    /**
     * Verify copyWithin target=-2 start=-5 end=-1 copies source elements to target range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_6100
     * @tc.name int8ArrayCopyWithinPart02Test061
     * @tc.desc Verify copyWithin target=-2 start=-5 end=-1 copies source elements to target range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test061() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5, 6});
    Int8Array ret = arr.copyWithin(-2, -5, -1);
    assertEqualInt(2, ret.get(4));
    assertEqualInt(3, ret.get(5));
    }

    /**
     * Verify copyWithin target=0 start=3 end=5 copies 4, 5 to head, on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_6200
     * @tc.name int8ArrayCopyWithinPart02Test062
     * @tc.desc Verify copyWithin target=0 start=3 end=5 copies 4, 5 to head, on new Int8Array(
     * new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test062() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array ret = arr.copyWithin(0, 3, 5);
    assertEqualInt(5, ret.at(-1));
    Integer r1 = ret.get(0);
    int e1 = 4;
    assertEqualInt(e1, r1);
    Integer r2 = ret.get(1);
    int e2 = 5;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify subarray(1, 4) of copyWithin result has length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_6300
     * @tc.name int8ArrayCopyWithinPart02Test063
     * @tc.desc Verify subarray(1, 4) of copyWithin result has length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test063() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array ret = arr.copyWithin(0, 1, 3);
    Int8Array sub = ret.subarray(1, 4);
    assertEqual(3, sub.length());
    }

    /**
     * Verify copyWithin(2, 0, 1) on new Int8Array([Number.POSITIVE_INFINITY, 1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_6400
     * @tc.name int8ArrayCopyWithinPart02Test064
     * @tc.desc Verify copyWithin(2, 0, 1) on new Int8Array([Number.POSITIVE_INFINITY, 1, 2, 3]
     * ) copies Infinity clamped to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test064() {
    Int8Array arr = new Int8Array(new double[] {Double.POSITIVE_INFINITY, 1, 2, 3});
    Int8Array ret = arr.copyWithin(2, 0, 1);
    assertEqualInt(0, ret.get(2));
    }

    /**
     * Verify copyWithin(2, 0, 1) on new Int8Array([Number.NEGATIVE_INFINITY, 1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_COPY_WITHIN_PART02_TEST_6500
     * @tc.name int8ArrayCopyWithinPart02Test065
     * @tc.desc Verify copyWithin(2, 0, 1) on new Int8Array([Number.NEGATIVE_INFINITY, 1, 2, 3]
     * ) copies Infinity clamped to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayCopyWithinPart02Test065() {
    Int8Array arr = new Int8Array(new double[] {Double.NEGATIVE_INFINITY, 1, 2, 3});
    Int8Array ret = arr.copyWithin(2, 0, 1);
    assertEqualInt(0, ret.get(2));
    }
}
