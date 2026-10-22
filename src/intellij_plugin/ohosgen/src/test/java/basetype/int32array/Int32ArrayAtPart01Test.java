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

package basetype.int32array;

import basetype.common.Int32Array;
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;

import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayAtPart01Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayAtPart01Test extends BasTest {
    /**
     * Verify 1 at(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_0100
     * @tc.name int32ArrayAtPart01TestMindmapTest001
     * @tc.desc Verify 1 at(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest001() {
    Int32Array v = Int32Array.of(10, 20, 30);
    Integer r = v.at(1);
    assertEqualInt(20, r);
    }

    /**
     * Verify 1 at(-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_0200
     * @tc.name int32ArrayAtPart01TestMindmapTest002
     * @tc.desc Verify 1 at(-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest002() {
    Int32Array v = Int32Array.of(10, 20, 30);
    Integer r = v.at(-1);
    assertEqualInt(30, r);
    }

    /**
     * Verify int at
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_0300
     * @tc.name int32ArrayAtPart01TestMindmapTest003
     * @tc.desc Verify int at
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest003() {
    Int32Array v = Int32Array.of(11, 22, 33);
    int idx = 2;
    Integer r = v.at((int) (idx));
    assertEqualInt(33, r);
    }

    /**
     * Verify const int at
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_0400
     * @tc.name int32ArrayAtPart01TestMindmapTest004
     * @tc.desc Verify const int at
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest004() {
    Int32Array v = Int32Array.of(100, 200);
    int k = 0;
    Integer r = v.at(k);
    assertEqualInt(100, r);
    }

    /**
     * Verify 1+1=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_0500
     * @tc.name int32ArrayAtPart01TestMindmapTest005
     * @tc.desc Verify 1+1=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest005() {
    Int32Array v = Int32Array.of(10, 20, 30);
    Integer r = v.at(1 + 1);
    assertEqualInt(30, r);
    }

    /**
     * Verify undefined for representative indices on an empty Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_0600
     * @tc.name int32ArrayAtPart01TestMindmapTest006
     * @tc.desc Verify undefined for representative indices on an empty Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest006() {
    Int32Array v = new Int32Array(0);
    assertNull(v.at(0));
    assertNull(v.at(-1));
    assertNull(v.at(1));
    assertNull(v.at(-2));
    }

    /**
     * Verify at(2147483647) INT_MAX undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_0700
     * @tc.name int32ArrayAtPart01TestMindmapTest007
     * @tc.desc Verify at(2147483647) INT_MAX undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest007() {
    Int32Array v = new Int32Array(0);
    Integer r = v.at(2147483647);
    assertNull(r);
    }

    /**
     * Verify at(-2147483648) INT_MIN undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_0800
     * @tc.name int32ArrayAtPart01TestMindmapTest008
     * @tc.desc Verify at(-2147483648) INT_MIN undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest008() {
    Int32Array v = new Int32Array(0);
    Integer r = v.at(Integer.MIN_VALUE);
    assertNull(r);
    }

    /**
     * Verify positive out-of-bounds indices on a one-element Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_0900
     * @tc.name int32ArrayAtPart01TestMindmapTest009
     * @tc.desc Verify positive out-of-bounds indices on a one-element Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest009() {
    Int32Array v = Int32Array.of(77);
    assertNull(v.at(1));
    assertNull(v.at(2));
    }

    /**
     * Verify at(2147483647) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_1000
     * @tc.name int32ArrayAtPart01TestMindmapTest010
     * @tc.desc Verify at(2147483647) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest010() {
    Int32Array v = Int32Array.of(77);
    Integer r = v.at(2147483647);
    assertNull(r);
    }

    /**
     * Verify at(-1) -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_1100
     * @tc.name int32ArrayAtPart01TestMindmapTest011
     * @tc.desc Verify at(-1) -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest011() {
    Int32Array v = Int32Array.of(77);
    Integer r = v.at(-1);
    assertEqualInt(77, r);
    }

    /**
     * Verify negative out-of-bounds indices on a one-element Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_1200
     * @tc.name int32ArrayAtPart01TestMindmapTest012
     * @tc.desc Verify negative out-of-bounds indices on a one-element Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest012() {
    Int32Array v = Int32Array.of(77);
    assertNull(v.at(-2));
    assertNull(v.at(-3));
    }

    /**
     * Verify at(-2147483648) INT_MIN undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_1300
     * @tc.name int32ArrayAtPart01TestMindmapTest013
     * @tc.desc Verify at(-2147483648) INT_MIN undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest013() {
    Int32Array v = Int32Array.of(77);
    Integer r = v.at(Integer.MIN_VALUE);
    assertNull(r);
    }

    /**
     * Verify at(1) length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_1400
     * @tc.name int32ArrayAtPart01TestMindmapTest014
     * @tc.desc Verify at(1) length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest014() {
    Int32Array v = Int32Array.of(10, 20);
    Integer r = v.at(1);
    assertEqualInt(20, r);
    }

    /**
     * Verify positive out-of-bounds indices on a two-element Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_1500
     * @tc.name int32ArrayAtPart01TestMindmapTest015
     * @tc.desc Verify positive out-of-bounds indices on a two-element Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest015() {
    Int32Array v = Int32Array.of(10, 20);
    assertNull(v.at(2));
    assertNull(v.at(3));
    }

    /**
     * Verify at(-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_1600
     * @tc.name int32ArrayAtPart01TestMindmapTest016
     * @tc.desc Verify at(-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest016() {
    Int32Array v = Int32Array.of(10, 20);
    Integer r = v.at(-1);
    assertEqualInt(20, r);
    }

    /**
     * Verify at(-2) -length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_1700
     * @tc.name int32ArrayAtPart01TestMindmapTest017
     * @tc.desc Verify at(-2) -length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest017() {
    Int32Array v = Int32Array.of(10, 20);
    Integer r = v.at(-2);
    assertEqualInt(10, r);
    }

    /**
     * Verify negative out-of-bounds indices on a two-element Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_1800
     * @tc.name int32ArrayAtPart01TestMindmapTest018
     * @tc.desc Verify negative out-of-bounds indices on a two-element Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest018() {
    Int32Array v = Int32Array.of(10, 20);
    assertNull(v.at(-3));
    assertNull(v.at(-4));
    }

    /**
     * Verify at(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_1900
     * @tc.name int32ArrayAtPart01TestMindmapTest019
     * @tc.desc Verify at(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest019() {
    Int32Array v = Int32Array.of(10, 20, 30, 40, 50);
    Integer r = v.at(1);
    assertEqualInt(20, r);
    }

    /**
     * Verify at(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_2000
     * @tc.name int32ArrayAtPart01TestMindmapTest020
     * @tc.desc Verify at(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest020() {
    Int32Array v = Int32Array.of(10, 20, 30, 40, 50);
    Integer r = v.at(2);
    assertEqualInt(30, r);
    }

    /**
     * Verify at(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_2100
     * @tc.name int32ArrayAtPart01TestMindmapTest021
     * @tc.desc Verify at(3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest021() {
    Int32Array v = Int32Array.of(10, 20, 30, 40, 50);
    Integer r = v.at(3);
    assertEqualInt(40, r);
    }

    /**
     * Verify at(4) length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_2200
     * @tc.name int32ArrayAtPart01TestMindmapTest022
     * @tc.desc Verify at(4) length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest022() {
    Int32Array v = Int32Array.of(10, 20, 30, 40, 50);
    Integer r = v.at(4);
    assertEqualInt(50, r);
    }

    /**
     * Verify positive out-of-bounds indices on a five-element Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_2300
     * @tc.name int32ArrayAtPart01TestMindmapTest023
     * @tc.desc Verify positive out-of-bounds indices on a five-element Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest023() {
    Int32Array v = Int32Array.of(10, 20, 30, 40, 50);
    assertNull(v.at(5));
    assertNull(v.at(6));
    }

    /**
     * Verify at(-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_2400
     * @tc.name int32ArrayAtPart01TestMindmapTest024
     * @tc.desc Verify at(-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest024() {
    Int32Array v = Int32Array.of(10, 20, 30, 40, 50);
    Integer r = v.at(-1);
    assertEqualInt(50, r);
    }

    /**
     * Verify at(-2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_2500
     * @tc.name int32ArrayAtPart01TestMindmapTest025
     * @tc.desc Verify at(-2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest025() {
    Int32Array v = Int32Array.of(10, 20, 30, 40, 50);
    Integer r = v.at(-2);
    assertEqualInt(40, r);
    }

    /**
     * Verify at(-3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_2600
     * @tc.name int32ArrayAtPart01TestMindmapTest026
     * @tc.desc Verify at(-3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest026() {
    Int32Array v = Int32Array.of(10, 20, 30, 40, 50);
    Integer r = v.at(-3);
    assertEqualInt(30, r);
    }

    /**
     * Verify at(-4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_2700
     * @tc.name int32ArrayAtPart01TestMindmapTest027
     * @tc.desc Verify at(-4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest027() {
    Int32Array v = Int32Array.of(10, 20, 30, 40, 50);
    Integer r = v.at(-4);
    assertEqualInt(20, r);
    }

    /**
     * Verify at(-5) -length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_2800
     * @tc.name int32ArrayAtPart01TestMindmapTest028
     * @tc.desc Verify at(-5) -length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest028() {
    Int32Array v = Int32Array.of(10, 20, 30, 40, 50);
    Integer r = v.at(-5);
    assertEqualInt(10, r);
    }

    /**
     * Verify negative out-of-bounds indices on a five-element Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_2900
     * @tc.name int32ArrayAtPart01TestMindmapTest029
     * @tc.desc Verify negative out-of-bounds indices on a five-element Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest029() {
    Int32Array v = Int32Array.of(10, 20, 30, 40, 50);
    assertNull(v.at(-6));
    assertNull(v.at(-7));
    }

    /**
     * Verify index=2147483647 INT_MAX undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_3000
     * @tc.name int32ArrayAtPart01TestMindmapTest030
     * @tc.desc Verify index=2147483647 INT_MAX undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest030() {
    Int32Array v = Int32Array.of(10, 20, 30);
    Integer r = v.at(2147483647);
    assertNull(r);
    }

    /**
     * Verify index=-2147483648 INT_MIN undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_3100
     * @tc.name int32ArrayAtPart01TestMindmapTest031
     * @tc.desc Verify index=-2147483648 INT_MIN undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest031() {
    Int32Array v = Int32Array.of(10, 20, 30);
    Integer r = v.at(Integer.MIN_VALUE);
    assertNull(r);
    }

    /**
     * Verify index=2147483646 INT_MAX-1 undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_3200
     * @tc.name int32ArrayAtPart01TestMindmapTest032
     * @tc.desc Verify index=2147483646 INT_MAX-1 undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest032() {
    Int32Array v = Int32Array.of(10, 20, 30);
    Integer r = v.at(2147483646);
    assertNull(r);
    }

    /**
     * Verify index=-2147483647 INT_MIN+1 undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_3300
     * @tc.name int32ArrayAtPart01TestMindmapTest033
     * @tc.desc Verify index=-2147483647 INT_MIN+1 undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest033() {
    Int32Array v = Int32Array.of(10, 20, 30);
    Integer r = v.at(-2147483647);
    assertNull(r);
    }

    /**
     * Verify 0 at(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_3900
     * @tc.name int32ArrayAtPart01TestMindmapTest039
     * @tc.desc Verify 0 at(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest039() {
    Int32Array v = Int32Array.of(5, 0, -5);
    Integer r = v.at(1);
    assertEqualInt(0, r);
    }

    /**
     * Verify 1 at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_4000
     * @tc.name int32ArrayAtPart01TestMindmapTest040
     * @tc.desc Verify 1 at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest040() {
    Int32Array v = Int32Array.of(1, 2);
    Integer r = v.at(0);
    assertEqualInt(1, r);
    }

    /**
     * Verify 0 at(0) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_4300
     * @tc.name int32ArrayAtPart01TestMindmapTest043
     * @tc.desc Verify 0 at(0) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest043() {
    Int32Array v = Int32Array.of(0);
    Integer r = v.at(0);
    assertEqualInt(0, r);
    }

    /**
     * Verify at(v.length-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_4400
     * @tc.name int32ArrayAtPart01TestMindmapTest044
     * @tc.desc Verify at(v.length-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest044() {
    Int32Array v = Int32Array.of(9, 8, 7);
    Integer r = v.at(v.length() - 1);
    assertEqualInt(7, r);
    }

    /**
     * Verify at(-v.length)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_4500
     * @tc.name int32ArrayAtPart01TestMindmapTest045
     * @tc.desc Verify at(-v.length)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest045() {
    Int32Array v = Int32Array.of(9, 8, 7);
    Integer r = v.at(-v.length());
    assertEqualInt(9, r);
    }

    /**
     * Verify at(v.length) length undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_4600
     * @tc.name int32ArrayAtPart01TestMindmapTest046
     * @tc.desc Verify at(v.length) length undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest046() {
    Int32Array v = Int32Array.of(9, 8, 7);
    Integer r = v.at(v.length());
    assertNull(r);
    }

    /**
     * Verify at(-v.length-1) -(length+1) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_4700
     * @tc.name int32ArrayAtPart01TestMindmapTest047
     * @tc.desc Verify at(-v.length-1) -(length+1) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest047() {
    Int32Array v = Int32Array.of(9, 8, 7);
    Integer r = v.at(-v.length() - 1);
    assertNull(r);
    }

    /**
     * Verify 0x0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_4800
     * @tc.name int32ArrayAtPart01TestMindmapTest048
     * @tc.desc Verify 0x0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest048() {
    Int32Array v = Int32Array.of(111, 222, 333);
    Integer r = v.at((int) (0x0));
    assertEqualInt(111, r);
    }

    /**
     * Verify 0o1 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_5000
     * @tc.name int32ArrayAtPart01TestMindmapTest050
     * @tc.desc Verify 0o1 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest050() {
    Int32Array v = Int32Array.of(10, 20);
    Integer r = v.at((int) (01));
    assertEqualInt(20, r);
    }

    /**
     * Verify 0b10 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_5100
     * @tc.name int32ArrayAtPart01TestMindmapTest051
     * @tc.desc Verify 0b10 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest051() {
    Int32Array v = Int32Array.of(1, 2, 4);
    Integer r = v.at((int) (0b10));
    assertEqualInt(4, r);
    }

    /**
     * Verify -0x1 -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_5200
     * @tc.name int32ArrayAtPart01TestMindmapTest052
     * @tc.desc Verify -0x1 -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest052() {
    Int32Array v = Int32Array.of(8, 9, 10);
    Integer r = v.at(-0x1);
    assertEqualInt(10, r);
    }

    /**
     * Verify -0x2 -2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_5300
     * @tc.name int32ArrayAtPart01TestMindmapTest053
     * @tc.desc Verify -0x2 -2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest053() {
    Int32Array v = Int32Array.of(8, 9, 10);
    Integer r = v.at(-0x2);
    assertEqualInt(9, r);
    }

    /**
     * Verify new Int32Array(buf, 0, 3) at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_5400
     * @tc.name int32ArrayAtPart01TestMindmapTest054
     * @tc.desc Verify new Int32Array(buf, 0, 3) at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest054() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array v = new Int32Array(buf, 0, 3);
    v.set(0, 100);
    v.set(1, 200);
    v.set(2, 300);
    Integer r = v.at(0);
    assertEqualInt(100, r);
    }

    /**
     * Verify new Int32Array(buf, 4, 2) byteOffset at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_5500
     * @tc.name int32ArrayAtPart01TestMindmapTest055
     * @tc.desc Verify new Int32Array(buf, 4, 2) byteOffset at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest055() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array v = new Int32Array(buf, 4, 2);
    v.set(0, 111);
    v.set(1, 222);
    Integer r = v.at(0);
    assertEqualInt(111, r);
    }

    /**
     * Verify new Int32Array(buf, 4, 2) byteOffset at(-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_5600
     * @tc.name int32ArrayAtPart01TestMindmapTest056
     * @tc.desc Verify new Int32Array(buf, 4, 2) byteOffset at(-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest056() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array v = new Int32Array(buf, 4, 2);
    v.set(0, 111);
    v.set(1, 222);
    Integer r = v.at(-1);
    assertEqualInt(222, r);
    }

    /**
     * Verify positive and negative out-of-bounds indices on an ArrayBuffer view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_5700
     * @tc.name int32ArrayAtPart01TestMindmapTest057
     * @tc.desc Verify positive and negative out-of-bounds indices on an ArrayBuffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest057() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array v = new Int32Array(buf, 4, 2);
    assertNull(v.at(2));
    assertNull(v.at(-3));
    }

    /**
     * Verify Int32Array.from([1, 2, 3, 4, 5]) at(0) 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_5800
     * @tc.name int32ArrayAtPart01TestMindmapTest058
     * @tc.desc Verify Int32Array.from([1, 2, 3, 4, 5]) at(0) 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest058() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3, 4, 5);
    Int32Array v = Int32Array.from(src);
    Integer r = v.at(0);
    assertEqualInt(1, r);
    }

    /**
     * Verify Int32Array.from([1, 2, 3, 4, 5]) at(-1) 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_5900
     * @tc.name int32ArrayAtPart01TestMindmapTest059
     * @tc.desc Verify Int32Array.from([1, 2, 3, 4, 5]) at(-1) 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest059() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3, 4, 5);
    Int32Array v = Int32Array.from(src);
    Integer r = v.at(-1);
    assertEqualInt(5, r);
    }

    /**
     * Verify new Int32Array(4) at(3) 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_6000
     * @tc.name int32ArrayAtPart01TestMindmapTest060
     * @tc.desc Verify new Int32Array(4) at(3) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest060() {
    Int32Array v = new Int32Array(4);
    Integer r = v.at(3);
    assertEqualInt(0, r);
    }

    /**
     * Verify representative endpoints on a four-element Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_6200
     * @tc.name int32ArrayAtPart01TestMindmapTest062
     * @tc.desc Verify representative endpoints on a four-element Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest062() {
    Int32Array v = Int32Array.of(5, 5, 5, 5);
    assertEqualInt(5, v.at(0));
    assertEqualInt(5, v.at(3));
    }

    /**
     * Verify at(0) equals at(-length)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_6500
     * @tc.name int32ArrayAtPart01TestMindmapTest065
     * @tc.desc Verify at(0) equals at(-length)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest065() {
    Int32Array v = Int32Array.of(10, 20, 30, 40);
    Integer r0 = v.at(0);
    Integer negativeIndexResult = v.at(-v.length());
    assertEqual(negativeIndexResult.intValue(), r0.intValue());
    }

    /**
     * Verify at(length-1) at(-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_6600
     * @tc.name int32ArrayAtPart01TestMindmapTest066
     * @tc.desc Verify at(length-1) at(-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest066() {
    Int32Array v = Int32Array.of(10, 20, 30, 40);
    Integer rLast = v.at(v.length() - 1);
    Integer rNeg1 = v.at(-1);
    assertEqual(rNeg1.intValue(), rLast.intValue());
    }

    /**
     * Verify i>0?1:0 i=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_6700
     * @tc.name int32ArrayAtPart01TestMindmapTest067
     * @tc.desc Verify i>0?1:0 i=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest067() {
    Int32Array v = Int32Array.of(100, 200);
    int i = 1;
    Integer r = v.at(i > 0 ? 1 : 0);
    assertEqualInt(200, r);
    }

    /**
     * Verify i>0?1:0 i=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_6800
     * @tc.name int32ArrayAtPart01TestMindmapTest068
     * @tc.desc Verify i>0?1:0 i=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest068() {
    Int32Array v = Int32Array.of(100, 200);
    int i = 0;
    Integer r = v.at(i > 0 ? 1 : 0);
    assertEqualInt(100, r);
    }

    /**
     * Verify length=8 at(7) length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_6900
     * @tc.name int32ArrayAtPart01TestMindmapTest069
     * @tc.desc Verify length=8 at(7) length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest069() {
    Int32Array v = Int32Array.of(10, 20, 30, 40, 50, 60, 70, 80);
    Integer r = v.at(7);
    assertEqualInt(80, r);
    }

    /**
     * Verify length=8 at(8) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_7000
     * @tc.name int32ArrayAtPart01TestMindmapTest070
     * @tc.desc Verify length=8 at(8) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest070() {
    Int32Array v = Int32Array.of(10, 20, 30, 40, 50, 60, 70, 80);
    Integer r = v.at(8);
    assertNull(r);
    }

    /**
     * Verify length=8 at(-8) -length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_7100
     * @tc.name int32ArrayAtPart01TestMindmapTest071
     * @tc.desc Verify length=8 at(-8) -length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest071() {
    Int32Array v = Int32Array.of(10, 20, 30, 40, 50, 60, 70, 80);
    Integer r = v.at(-8);
    assertEqualInt(10, r);
    }

    /**
     * Verify length=8 at(-9) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_7200
     * @tc.name int32ArrayAtPart01TestMindmapTest072
     * @tc.desc Verify length=8 at(-9) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest072() {
    Int32Array v = Int32Array.of(10, 20, 30, 40, 50, 60, 70, 80);
    Integer r = v.at(-9);
    assertNull(r);
    }

    /**
     * Verify subarray(1, 4) at(0) 20
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_7300
     * @tc.name int32ArrayAtPart01TestMindmapTest073
     * @tc.desc Verify subarray(1, 4) at(0) 20
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest073() {
    Int32Array parent = Int32Array.of(10, 20, 30, 40, 50);
    Int32Array sub = parent.subarray(1, 4);
    Integer r = sub.at(0);
    assertEqualInt(20, r);
    }

    /**
     * Verify subarray(1, 4) at(-1) 40
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_7400
     * @tc.name int32ArrayAtPart01TestMindmapTest074
     * @tc.desc Verify subarray(1, 4) at(-1) 40
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest074() {
    Int32Array parent = Int32Array.of(10, 20, 30, 40, 50);
    Int32Array sub = parent.subarray(1, 4);
    Integer r = sub.at(-1);
    assertEqualInt(40, r);
    }

    /**
     * Verify positive and negative out-of-bounds indices on a subarray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_AT_PART01_TEST_MINDMAP_7500
     * @tc.name int32ArrayAtPart01TestMindmapTest075
     * @tc.desc Verify positive and negative out-of-bounds indices on a subarray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void int32ArrayAtPart01TestMindmapTest075() {
    Int32Array parent = Int32Array.of(10, 20, 30, 40, 50);
    Int32Array sub = parent.subarray(1, 4);
    assertNull(sub.at(3));
    assertNull(sub.at(-4));
    }
}
