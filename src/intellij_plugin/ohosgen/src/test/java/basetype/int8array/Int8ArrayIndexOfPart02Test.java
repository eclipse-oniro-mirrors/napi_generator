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
import basetype.common.RangeError;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayIndexOfPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIndexOfPart02Test extends BasTest {
    private static final int INT8_MAX = 127;

    /**
     * Verify indexOf(20) returns 1 via result variable, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_0100
     * @tc.name int8ArrayIndexOfPart02Test001
     * @tc.desc Verify indexOf(20) returns 1 via result variable, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test001() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(20);
    assertEqual(1, result);
    }

    /**
     * Verify indexOf(99) returns -1 via result variable, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_0200
     * @tc.name int8ArrayIndexOfPart02Test002
     * @tc.desc Verify indexOf(99) returns -1 via result variable, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test002() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.indexOf(99);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(0) returns -1 via result variable, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_0300
     * @tc.name int8ArrayIndexOfPart02Test003
     * @tc.desc Verify indexOf(0) returns -1 via result variable, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test003() {
    Int8Array arr = new Int8Array(0);
    int result = arr.indexOf(0);
    assertEqual(-1, result);
    }

    /**
     * Verify indexOf(6) on new Int8Array(new int[] {3, 6, 9}) returns index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_0400
     * @tc.name int8ArrayIndexOfPart02Test004
     * @tc.desc Verify indexOf(6) on new Int8Array(new int[] {3, 6, 9}) returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test004() {
    Int8Array arr = new Int8Array(new int[] {3, 6, 9});
    int result = arr.indexOf(6);
    assertEqual(1, result);
    }

    /**
     * Verify indexOf(2) on new Int8Array(new int[] {1, 2, 3}) returns index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_0500
     * @tc.name int8ArrayIndexOfPart02Test005
     * @tc.desc Verify indexOf(2) on new Int8Array(new int[] {1, 2, 3}) returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test005() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int result = arr.indexOf(2);
    assertEqual(3, arr.length());
    assertEqual(1, result);
    }

    /**
     * Verify indexOf(2) on new Int8Array(new int[] {1, 2, 3}) returns index 1 and length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_0600
     * @tc.name int8ArrayIndexOfPart02Test006
     * @tc.desc Verify indexOf(2) on new Int8Array(new int[] {1, 2, 3}) returns index 1 and length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test006() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int r1 = arr.indexOf(2);
    int e1 = 1;
    assertEqual(e1, r1);
    assertEqual(3, arr.length());
    }

    /**
     * Verify indexOf(22) on new Int8Array(new int[] {11, 22, 33}) returns index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_0700
     * @tc.name int8ArrayIndexOfPart02Test007
     * @tc.desc Verify indexOf(22) on new Int8Array(new int[] {11, 22, 33}) returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test007() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33});
    int result = arr.indexOf(22);
    assertEqual(2, result + 1);
    }

    /**
     * Verify indexOf(44) on new Int8Array(new int[] {11, 22, 33}) returns -1 (not found)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_0800
     * @tc.name int8ArrayIndexOfPart02Test008
     * @tc.desc Verify indexOf(44) on new Int8Array(new int[] {11, 22, 33}) returns -1 (not found)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test008() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33});
    int result = arr.indexOf(44);
    assertEqual(0, result + 1);
    }

    /**
     * Verify indexOf(10) on new Int8Array(new int[] {10, 20, 30}) returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_0900
     * @tc.name int8ArrayIndexOfPart02Test009
     * @tc.desc Verify indexOf(10) on new Int8Array(new int[] {10, 20, 30}) returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test009() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqual(0, arr.indexOf(10));
    }

    /**
     * Verify indexOf(20) returns 1 via inline assertion, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_1000
     * @tc.name int8ArrayIndexOfPart02Test010
     * @tc.desc Verify indexOf(20) returns 1 via inline assertion, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test010() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqual(1, arr.indexOf(20));
    }

    /**
     * Verify indexOf(30) on new Int8Array(new int[] {10, 20, 30}) returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_1100
     * @tc.name int8ArrayIndexOfPart02Test011
     * @tc.desc Verify indexOf(30) on new Int8Array(new int[] {10, 20, 30}) returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test011() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqual(2, arr.indexOf(30));
    }

    /**
     * Verify indexOf(5) on new Int8Array(new int[] {5, 5, 5}) returns index 0 (first occurrence)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_1200
     * @tc.name int8ArrayIndexOfPart02Test012
     * @tc.desc Verify indexOf(5) on new Int8Array(new int[] {5, 5, 5}) returns index 0 (first occurrence)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test012() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5});
    assertEqual(0, arr.indexOf(5));
    }

    /**
     * Verify indexOf(10, 0) on new Int8Array(new int[] {10, 20, 30}) returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_1300
     * @tc.name int8ArrayIndexOfPart02Test013
     * @tc.desc Verify indexOf(10, 0) on new Int8Array(new int[] {10, 20, 30}) returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test013() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqual(0, arr.indexOf(10, 0));
    }

    /**
     * Verify indexOf(20, 1) on new Int8Array(new int[] {10, 20, 30}) returns index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_1400
     * @tc.name int8ArrayIndexOfPart02Test014
     * @tc.desc Verify indexOf(20, 1) on new Int8Array(new int[] {10, 20, 30}) returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test014() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqual(1, arr.indexOf(20, 1));
    }

    /**
     * Verify indexOf(10, 1) on new Int8Array(new int[] {10, 20, 30}) returns -1 (element before fromIndex)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_1500
     * @tc.name int8ArrayIndexOfPart02Test015
     * @tc.desc Verify indexOf(10, 1) on new Int8Array(new int[] {10, 20, 30}) returns -1 (element before fromIndex)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test015() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqual(-1, arr.indexOf(10, 1));
    }

    /**
     * Verify indexOf(5, 1) on new Int8Array(new int[] {5, 5, 5}) returns index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_1600
     * @tc.name int8ArrayIndexOfPart02Test016
     * @tc.desc Verify indexOf(5, 1) on new Int8Array(new int[] {5, 5, 5}) returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test016() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5});
    assertEqual(1, arr.indexOf(5, 1));
    }

    /**
     * Verify indexOf(99) returns -1 via inline assertion, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_1700
     * @tc.name int8ArrayIndexOfPart02Test017
     * @tc.desc Verify indexOf(99) returns -1 via inline assertion, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test017() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqual(-1, arr.indexOf(99));
    }

    /**
     * Verify indexOf(0) returns -1 via inline assertion, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_1800
     * @tc.name int8ArrayIndexOfPart02Test018
     * @tc.desc Verify indexOf(0) returns -1 via inline assertion, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test018() {
    Int8Array arr = new Int8Array(0);
    assertEqual(-1, arr.indexOf(0));
    }

    /**
     * Verify indexOf(7) on new Int8Array(new int[] {42}) returns -1 (not found)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_1900
     * @tc.name int8ArrayIndexOfPart02Test019
     * @tc.desc Verify indexOf(7) on new Int8Array(new int[] {42}) returns -1 (not found)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test019() {
    Int8Array arr = new Int8Array(new int[] {42});
    assertEqual(-1, arr.indexOf(7));
    }

    /**
     * Verify indexOf(9) on new Int8Array(new int[] {8, 8, 8}) returns -1 (not found)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_2000
     * @tc.name int8ArrayIndexOfPart02Test020
     * @tc.desc Verify indexOf(9) on new Int8Array(new int[] {8, 8, 8}) returns -1 (not found)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test020() {
    Int8Array arr = new Int8Array(new int[] {8, 8, 8});
    assertEqual(-1, arr.indexOf(9));
    }

    /**
     * Verify indexOf(128) returns -1, searchElement out of Int8 range uses strict equality
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_2100
     * @tc.name int8ArrayIndexOfPart02Test021
     * @tc.desc Verify indexOf(128) returns -1, searchElement out of Int8 range uses strict equality
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test021() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, INT8_MAX});
    assertEqual(-1, arr.indexOf(128));
    }

    /**
     * Verify indexOf(-129) returns -1, searchElement out of Int8 range uses strict equality
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_2200
     * @tc.name int8ArrayIndexOfPart02Test022
     * @tc.desc Verify indexOf(-129) returns -1, searchElement out of Int8 range uses strict equality
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test022() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, INT8_MAX});
    assertEqual(-1, arr.indexOf(-129));
    }

    /**
     * Verify indexOf(255) returns -1, searchElement out of Int8 range uses strict equality
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_2300
     * @tc.name int8ArrayIndexOfPart02Test023
     * @tc.desc Verify indexOf(255) returns -1, searchElement out of Int8 range uses strict equality
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test023() {
    Int8Array arr = new Int8Array(new int[] {-1, 0, 1});
    assertEqual(-1, arr.indexOf(255));
    }

    /**
     * Verify indexOf(256) returns -1, searchElement out of Int8 range uses strict equality
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_2400
     * @tc.name int8ArrayIndexOfPart02Test024
     * @tc.desc Verify indexOf(256) returns -1, searchElement out of Int8 range uses strict equality
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test024() {
    Int8Array arr = new Int8Array(new int[] {-1, 0, 1});
    assertEqual(-1, arr.indexOf(256));
    }

    /**
     * Verify indexOf(30, -1) on new Int8Array(new int[] {10, 20, 30}) returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_2500
     * @tc.name int8ArrayIndexOfPart02Test025
     * @tc.desc Verify indexOf(30, -1) on new Int8Array(new int[] {10, 20, 30}) returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test025() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqual(2, arr.indexOf(30, -1));
    }

    /**
     * Verify indexOf(10, -3) on new Int8Array(new int[] {10, 20, 30}) returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_2600
     * @tc.name int8ArrayIndexOfPart02Test026
     * @tc.desc Verify indexOf(10, -3) on new Int8Array(new int[] {10, 20, 30}) returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test026() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqual(0, arr.indexOf(10, -3));
    }

    /**
     * Verify indexOf(10, -4) on new Int8Array(new int[] {10, 20, 30}) returns index 0 (negative fromIndex clamped to 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_2700
     * @tc.name int8ArrayIndexOfPart02Test027
     * @tc.desc Verify indexOf(10, -4) on new Int8Array(new int[] {10, 20, 30}) returns index 0
     * (negative fromIndex clamped to 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test027() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqual(0, arr.indexOf(10, -4));
    }

    /**
     * Verify indexOf(10, -2) on new Int8Array(new int[] {10, 20, 10}) returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_2800
     * @tc.name int8ArrayIndexOfPart02Test028
     * @tc.desc Verify indexOf(10, -2) on new Int8Array(new int[] {10, 20, 10}) returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test028() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 10});
    assertEqual(2, arr.indexOf(10, -2));
    }

    /**
     * Verify indexOf(10, 3) on new Int8Array(new int[] {10, 20, 30}) returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_2900
     * @tc.name int8ArrayIndexOfPart02Test029
     * @tc.desc Verify indexOf(10, 3) on new Int8Array(new int[] {10, 20, 30}) returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test029() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqual(-1, arr.indexOf(10, 3));
    }

    /**
     * Verify indexOf(10, 4) on new Int8Array(new int[] {10, 20, 30}) returns -1 (fromIndex >= length)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_3000
     * @tc.name int8ArrayIndexOfPart02Test030
     * @tc.desc Verify indexOf(10, 4) on new Int8Array(new int[] {10, 20, 30}) returns -1 (fromIndex >= length)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test030() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqual(-1, arr.indexOf(10, 4));
    }

    /**
     * Verify indexOf(30, 2) on new Int8Array(new int[] {10, 20, 30}) returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_3100
     * @tc.name int8ArrayIndexOfPart02Test031
     * @tc.desc Verify indexOf(30, 2) on new Int8Array(new int[] {10, 20, 30}) returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test031() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    assertEqual(2, arr.indexOf(30, 2));
    }

    /**
     * Verify indexOf(20) on new Int8Array(new int[] {10, 20, 30}) returns index 1 and length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_3200
     * @tc.name int8ArrayIndexOfPart02Test032
     * @tc.desc Verify indexOf(20) on new Int8Array(new int[] {10, 20, 30}) returns index 1 and length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test032() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r1 = arr.indexOf(20);
    int e1 = 1;
    assertEqual(e1, r1);
    int r2 = arr.length();
    int e2 = 3;
    assertEqual(e2, r2);
    }

    /**
     * Verify indexOf(99) on new Int8Array(new int[] {10, 20, 30}) returns -1 and length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_3300
     * @tc.name int8ArrayIndexOfPart02Test033
     * @tc.desc Verify indexOf(99) on new Int8Array(new int[] {10, 20, 30}) returns -1 and length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test033() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r1 = arr.indexOf(99);
    int e1 = -1;
    assertEqual(e1, r1);
    int r2 = arr.length();
    int e2 = 3;
    assertEqual(e2, r2);
    }

    /**
     * Verify indexOf(20) on new Int8Array(new int[] {10, 20, 30}) returns index 1 and byteLength unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_3400
     * @tc.name int8ArrayIndexOfPart02Test034
     * @tc.desc Verify indexOf(20) on new Int8Array(new int[] {10, 20, 30}) returns index 1 and byteLength unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test034() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r1 = arr.indexOf(20);
    int e1 = 1;
    assertEqual(e1, r1);
    int r2 = arr.byteLength();
    int e2 = 3;
    assertEqual(e2, r2);
    }

    /**
     * Verify byteLength unchanged after indexOf with fromIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_3500
     * @tc.name int8ArrayIndexOfPart02Test035
     * @tc.desc Verify byteLength unchanged after indexOf with fromIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test035() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r1 = arr.indexOf(20, 1);
    int e1 = 1;
    assertEqual(e1, r1);
    int r2 = arr.byteLength();
    int e2 = 3;
    assertEqual(e2, r2);
    }

    /**
     * Verify empty array length remains 0 after indexOf
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_3600
     * @tc.name int8ArrayIndexOfPart02Test036
     * @tc.desc Verify empty array length remains 0 after indexOf
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test036() {
    Int8Array arr = new Int8Array(0);
    int r1 = arr.indexOf(0);
    int e1 = -1;
    assertEqual(e1, r1);
    assertEqual(0, arr.length());
    int r2 = arr.byteLength();
    int e2 = 0;
    assertEqual(e2, r2);
    }

    /**
     * Verify single element array length remains 1 after indexOf
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_3700
     * @tc.name int8ArrayIndexOfPart02Test037
     * @tc.desc Verify single element array length remains 1 after indexOf
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test037() {
    Int8Array arr = new Int8Array(new int[] {42});
    int r1 = arr.indexOf(42);
    int e1 = 0;
    assertEqual(e1, r1);
    assertEqual(1, arr.length());
    Integer r2 = arr.get(0);
    int e2 = 42;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify indexOf(128) on new Int8Array(new int[] {-128, 0, INT8_MAX}) returns -1 and buffer byteLength unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_3800
     * @tc.name int8ArrayIndexOfPart02Test038
     * @tc.desc Verify indexOf(128) on new Int8Array(new int[] {-128, 0, INT8_MAX}) returns -1and buffer byteLength
     * unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test038() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, INT8_MAX});
    ArrayBuffer buf = arr.buffer();
    int r1 = arr.indexOf(128);
    int e1 = -1;
    assertEqual(e1, r1);
    int r2 = buf.byteLength();
    int e2 = 3;
    assertEqual(e2, r2);
    }

    /**
     * Verify arr.length equals arr.byteLength after indexOf, int8 1-byte-per-element invariant unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_3900
     * @tc.name int8ArrayIndexOfPart02Test039
     * @tc.desc Verify arr.length equals arr.byteLength after indexOf, int8 1-byte-per-element invariant unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test039() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r1 = arr.indexOf(20);
    int e1 = 1;
    assertEqual(e1, r1);
    assertEqual(arr.byteLength(), arr.length());
    Integer r2 = arr.get(0);
    int e2 = 10;
    assertEqualInt(e2, r2);
    Integer r3 = arr.get(1);
    int e3 = 20;
    assertEqualInt(e3, r3);
    Integer r4 = arr.get(2);
    int e4 = 30;
    assertEqualInt(e4, r4);
    }

    /**
     * Verify array elements unchanged after indexOf(99) on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_4000
     * @tc.name int8ArrayIndexOfPart02Test040
     * @tc.desc Verify array elements unchanged after indexOf(99) on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test040() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r1 = arr.indexOf(99);
    int e1 = -1;
    assertEqual(e1, r1);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify array elements unchanged after indexOf(128) on new Int8Array(new int[] {-128, 0, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_4100
     * @tc.name int8ArrayIndexOfPart02Test041
     * @tc.desc Verify array elements unchanged after indexOf(128) on new Int8Array(new int[] {-128, 0, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test041() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, INT8_MAX});
    int r1 = arr.indexOf(128);
    int e1 = -1;
    assertEqual(e1, r1);
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(INT8_MAX, arr.get(2));
    }

    /**
     * Verify array elements unchanged after indexOf(30, -1) on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_4200
     * @tc.name int8ArrayIndexOfPart02Test042
     * @tc.desc Verify array elements unchanged after indexOf(30, -1) on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test042() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r1 = arr.indexOf(30, -1);
    int e1 = 2;
    assertEqual(e1, r1);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify duplicate element array unchanged after indexOf
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_4300
     * @tc.name int8ArrayIndexOfPart02Test043
     * @tc.desc Verify duplicate element array unchanged after indexOf
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test043() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5});
    int r1 = arr.indexOf(5);
    int e1 = 0;
    assertEqual(e1, r1);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify array elements unchanged after indexOf(10, 3) on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_4400
     * @tc.name int8ArrayIndexOfPart02Test044
     * @tc.desc Verify array elements unchanged after indexOf(10, 3) on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test044() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r1 = arr.indexOf(10, 3);
    int e1 = -1;
    assertEqual(e1, r1);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    }

    /**
     * Verify all same elements array unchanged after indexOf
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_4500
     * @tc.name int8ArrayIndexOfPart02Test045
     * @tc.desc Verify all same elements array unchanged after indexOf
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test045() {
    Int8Array arr = new Int8Array(new int[] {8, 8, 8});
    int r1 = arr.indexOf(9);
    int e1 = -1;
    assertEqual(e1, r1);
    assertEqualInt(8, arr.get(1));
    }

    /**
     * Verify $_set at index from indexOf(20) on new Int8Array(new int[] {10, 20, 30}) writes and reads back correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_4600
     * @tc.name int8ArrayIndexOfPart02Test046
     * @tc.desc Verify $_set at index from indexOf(20) on new Int8Array(new int[] {10, 20, 30})
     * writes and reads back correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test046() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(20);
    arr.set(idx, 99);
    assertEqualInt(99, arr.get(idx));
    }

    /**
     * Verify consecutive indexOf calls find duplicate element occurrences at indices 1 and 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_4700
     * @tc.name int8ArrayIndexOfPart02Test047
     * @tc.desc Verify consecutive indexOf calls find duplicate element occurrences at indices 1 and 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test047() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 20});
    int first = arr.indexOf(20);
    int second = arr.indexOf(20, first + 1);
    assertEqual(1, first);
    assertEqual(3, second);
    }

    /**
     * Verify indexOf(30) result used as $_set index reads back 30 via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_4800
     * @tc.name int8ArrayIndexOfPart02Test048
     * @tc.desc Verify indexOf(30) result used as $_set index reads back 30 via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test048() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(30);
    assertEqualInt(30, arr.get(idx));
    }

    /**
     * Verify indexOf(99) searches array and assertFail not reached
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_4900
     * @tc.name int8ArrayIndexOfPart02Test049
     * @tc.desc Verify indexOf(99) searches array and assertFail not reached
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test049() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(99);
    assertEqual(-1, idx);
    try {
    arr.get(idx);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset unchanged after indexOf, default view byteOffset=0 unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_5000
     * @tc.name int8ArrayIndexOfPart02Test050
     * @tc.desc Verify byteOffset unchanged after indexOf, default view byteOffset=0 unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test050() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r1 = arr.indexOf(20);
    int e1 = 1;
    assertEqual(e1, r1);
    int r2 = arr.byteOffset();
    int e2 = 0;
    assertEqual(e2, r2);
    }

    /**
     * Verify subarray view byteOffset unchanged after indexOf, non-zero offset preserved
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_5100
     * @tc.name int8ArrayIndexOfPart02Test051
     * @tc.desc Verify subarray view byteOffset unchanged after indexOf, non-zero offset preserved
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test051() {
    Int8Array base = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array view = base.subarray(1, 3);
    int r1 = view.indexOf(20);
    int e1 = 0;
    assertEqual(e1, r1);
    int r2 = view.byteOffset();
    int e2 = 1;
    assertEqual(e2, r2);
    }

    /**
     * Verify subarray view indexOf only searches within view range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_5200
     * @tc.name int8ArrayIndexOfPart02Test052
     * @tc.desc Verify subarray view indexOf only searches within view range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test052() {
    Int8Array base = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array view = base.subarray(1, 3);
    assertEqual(0, view.indexOf(20));
    assertEqual(-1, view.indexOf(40));
    }

    /**
     * Verify subarray view shares buffer after indexOf, write to view affects original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_5300
     * @tc.name int8ArrayIndexOfPart02Test053
     * @tc.desc Verify subarray view shares buffer after indexOf, write to view affects original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test053() {
    Int8Array base = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array view = base.subarray(1, 3);
    int r1 = view.indexOf(30);
    int e1 = 1;
    assertEqual(e1, r1);
    view.set(0, 99);
    assertEqualInt(99, base.get(1));
    }

    /**
     * Verify slice copy has independent buffer after indexOf, write to copy does not affect original
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_5400
     * @tc.name int8ArrayIndexOfPart02Test054
     * @tc.desc Verify slice copy has independent buffer after indexOf, write to copy does not affect original
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test054() {
    Int8Array base = new Int8Array(new int[] {10, 20, 30});
    Int8Array copy = base.slice(0, 3);
    int r1 = copy.indexOf(20);
    int e1 = 1;
    assertEqual(e1, r1);
    copy.set(0, 99);
    assertEqualInt(10, base.get(0));
    }

    /**
     * Verify subarray view length unchanged after indexOf
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_5500
     * @tc.name int8ArrayIndexOfPart02Test055
     * @tc.desc Verify subarray view length unchanged after indexOf
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test055() {
    Int8Array base = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array view = base.subarray(1, 3);
    int r1 = view.indexOf(20);
    int e1 = 0;
    assertEqual(e1, r1);
    int r2 = view.length();
    int e2 = 2;
    assertEqual(e2, r2);
    }

    /**
     * Verify subarray view byteLength unchanged after indexOf
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_5600
     * @tc.name int8ArrayIndexOfPart02Test056
     * @tc.desc Verify subarray view byteLength unchanged after indexOf
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test056() {
    Int8Array base = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array view = base.subarray(1, 3);
    int r1 = view.indexOf(30);
    int e1 = 1;
    assertEqual(e1, r1);
    int r2 = view.byteLength();
    int e2 = 2;
    assertEqual(e2, r2);
    }

    /**
     * Verify offset ArrayBuffer view indexOf byteOffset remains 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_INDEX_OF_PART02_TEST_5700
     * @tc.name int8ArrayIndexOfPart02Test057
     * @tc.desc Verify offset ArrayBuffer view indexOf byteOffset remains 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIndexOfPart02Test057() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Int8Array view = new Int8Array(buf, 1, 3);
    view.set(0, 10);
    view.set(1, 20);
    view.set(2, 30);
    int r1 = view.indexOf(20);
    int e1 = 1;
    assertEqual(e1, r1);
    assertEqual(1, view.byteOffset());
    }
}
