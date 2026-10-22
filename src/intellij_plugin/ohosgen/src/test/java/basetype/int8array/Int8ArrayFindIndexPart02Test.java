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
 * Int8ArrayFindIndexPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFindIndexPart02Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify findIndex with predicate v === 99 returns -1, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_0100
     * @tc.name int8ArrayFindIndexPart02Test001
     * @tc.desc Verify findIndex with predicate v === 99 returns -1, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test001() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 99);
    assertEqual(-1, r);
    }

    /**
     * Verify findIndex returns -1 on empty Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_0200
     * @tc.name int8ArrayFindIndexPart02Test002
     * @tc.desc Verify findIndex returns -1 on empty Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test002() {
    Int8Array arr = new Int8Array(0);
    int r = arr.findIndex((v, unusedIndex, array) -> v == 0);
    assertEqual(-1, r);
    }

    /**
     * Verify findIndex expects 1 for first value 20, on new Int8Array(new int[] {10, 20, 30, 20})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_0300
     * @tc.name int8ArrayFindIndexPart02Test003
     * @tc.desc Verify findIndex expects 1 for first value 20, on new Int8Array(new int[] {10, 20, 30, 20})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test003() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 20});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    }

    /**
     * Verify findIndex result plus one expects 2, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_0400
     * @tc.name int8ArrayFindIndexPart02Test004
     * @tc.desc Verify findIndex result plus one expects 2, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test004() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(2, r + 1);
    }

    /**
     * Verify findIndex expects 0, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_0500
     * @tc.name int8ArrayFindIndexPart02Test005
     * @tc.desc Verify findIndex expects 0, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test005() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 10);
    assertEqual(0, r);
    }

    /**
     * Verify findIndex returns last index 2 when value === 30, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_0600
     * @tc.name int8ArrayFindIndexPart02Test006
     * @tc.desc Verify findIndex returns last index 2 when value === 30, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test006() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 30);
    assertEqual(2, r);
    }

    /**
     * Verify findIndex expects 2, on new Int8Array(new int[] {10, 20, 30, 40, 50})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_0700
     * @tc.name int8ArrayFindIndexPart02Test007
     * @tc.desc Verify findIndex expects 2, on new Int8Array(new int[] {10, 20, 30, 40, 50})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test007() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 30);
    assertEqual(2, r);
    }

    /**
     * Verify findIndex with predicate element < 0 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_0800
     * @tc.name int8ArrayFindIndexPart02Test008
     * @tc.desc Verify findIndex with predicate element < 0 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test008() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v < 0);
    assertEqual(-1, r);
    }

    /**
     * Verify findIndex with predicate element == 9 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_0900
     * @tc.name int8ArrayFindIndexPart02Test009
     * @tc.desc Verify findIndex with predicate element == 9 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test009() {
    Int8Array arr = new Int8Array(new int[] {7});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 9);
    assertEqual(-1, r);
    int r2 = arr.findIndex((v, unusedIndex, array) -> v == 7);
    assertEqual(0, r2);
    }

    /**
     * Verify findIndex expects 0, on new Int8Array(new int[] {5, 5, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_1000
     * @tc.name int8ArrayFindIndexPart02Test010
     * @tc.desc Verify findIndex expects 0, on new Int8Array(new int[] {5, 5, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test010() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 5);
    assertEqual(0, r);
    }

    /**
     * Verify findIndex with predicate element == 1 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_1100
     * @tc.name int8ArrayFindIndexPart02Test011
     * @tc.desc Verify findIndex with predicate element == 1 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test011() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 1, 2, 1});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 1);
    assertEqual(0, r);
    }

    /**
     * Verify findIndex expects 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_1200
     * @tc.name int8ArrayFindIndexPart02Test012
     * @tc.desc Verify findIndex expects 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test012() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 5);
    assertEqual(4, r);
    }

    /**
     * Verify findIndex with always-true callback expects 0, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_1300
     * @tc.name int8ArrayFindIndexPart02Test013
     * @tc.desc Verify findIndex with always-true callback expects 0, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test013() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> {
        if (v < INT8_MIN || v > INT8_MAX) {
        return false;
        }
        return true;
        });
    assertEqual(0, r);
    }

    /**
     * Verify findIndex expects -1, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_1400
     * @tc.name int8ArrayFindIndexPart02Test014
     * @tc.desc Verify findIndex expects -1, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test014() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> {
        if (v < INT8_MIN || v > INT8_MAX) {
        return false;
        }
        return false;
        });
    assertEqual(-1, r);
    }

    /**
     * Verify findIndex with predicate element == target returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_1500
     * @tc.name int8ArrayFindIndexPart02Test015
     * @tc.desc Verify findIndex with predicate element == target returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test015() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int target = 20;
    int r = arr.findIndex((v, unusedIndex, array) -> v == target);
    Integer retrievedValue = arr.get(r);
    assertEqualInt(target, retrievedValue);
    }

    /**
     * Verify findIndex with predicate element == -128 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_1600
     * @tc.name int8ArrayFindIndexPart02Test016
     * @tc.desc Verify findIndex with predicate element == -128 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test016() {
    Int8Array arr = new Int8Array(new int[] {0, INT8_MIN, INT8_MAX});
    int r = arr.findIndex((v, unusedIndex, array) -> v == -128);
    assertEqual(1, r);
    }

    /**
     * Verify findIndex expects 2, on new Int8Array(new int[] {0, -128, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_1700
     * @tc.name int8ArrayFindIndexPart02Test017
     * @tc.desc Verify findIndex expects 2, on new Int8Array(new int[] {0, -128, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test017() {
    Int8Array arr = new Int8Array(new int[] {0, -128, INT8_MAX});
    int r = arr.findIndex((v, unusedIndex, array) -> v == INT8_MAX);
    assertEqual(2, r);
    }

    /**
     * Verify findIndex with predicate v === 0 returns 1, on new Int8Array(new int[] {5, 0, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_1800
     * @tc.name int8ArrayFindIndexPart02Test018
     * @tc.desc Verify findIndex with predicate v === 0 returns 1, on new Int8Array(new int[] {5, 0, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test018() {
    Int8Array arr = new Int8Array(new int[] {5, 0, 5});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 0);
    assertEqual(1, r);
    }

    /**
     * Verify findIndex with predicate element == -56 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_1900
     * @tc.name int8ArrayFindIndexPart02Test019
     * @tc.desc Verify findIndex with predicate element == -56 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test019() {
    Int8Array arr = new Int8Array(new int[] {10, 0, 30});
    arr.set(1, 200);
    int r = arr.findIndex((v, unusedIndex, array) -> v == -56);
    assertEqual(1, r);
    }

    /**
     * Verify findIndex expects 1, with $_set(1, -129), on new Int8Array(new int[] {10, 0, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_2000
     * @tc.name int8ArrayFindIndexPart02Test020
     * @tc.desc Verify findIndex expects 1, with $_set(1, -129), on new Int8Array(new int[] {10, 0, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test020() {
    Int8Array arr = new Int8Array(new int[] {10, 0, 30});
    arr.set(1, -129);
    int r = arr.findIndex((v, unusedIndex, array) -> v == INT8_MAX);
    assertEqual(1, r);
    }

    /**
     * Verify findIndex with predicate element == 40 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_2100
     * @tc.name int8ArrayFindIndexPart02Test021
     * @tc.desc Verify findIndex with predicate element == 40 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test021() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 40);
    assertEqual(-1, r);
    }

    /**
     * Verify findIndex expects 1 when v === 20, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_2200
     * @tc.name int8ArrayFindIndexPart02Test022
     * @tc.desc Verify findIndex expects 1 when v === 20, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test022() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    }

    /**
     * Verify findIndex expects 0, on new Int8Array(new int[] {7, 7, 7, 7})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_2300
     * @tc.name int8ArrayFindIndexPart02Test023
     * @tc.desc Verify findIndex expects 0, on new Int8Array(new int[] {7, 7, 7, 7})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test023() {
    Int8Array arr = new Int8Array(new int[] {7, 7, 7, 7});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 7);
    assertEqual(0, r);
    }

    /**
     * Verify findIndex with predicate element > 2 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_2400
     * @tc.name int8ArrayFindIndexPart02Test024
     * @tc.desc Verify findIndex with predicate element > 2 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test024() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    int r = arr.findIndex((v, unusedIndex, array) -> v > 2);
    assertEqual(2, r);
    }

    /**
     * Verify findIndex expects 3, on new Int8Array(new int[] {10, 20, 30, 40, 50})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_2500
     * @tc.name int8ArrayFindIndexPart02Test025
     * @tc.desc Verify findIndex expects 3, on new Int8Array(new int[] {10, 20, 30, 40, 50})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test025() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    int r = arr.findIndex((v, i, array) -> {
        if (v < INT8_MIN || v > INT8_MAX) {
        return false;
        }
        return i == 3;
        });
    assertEqual(3, r);
    }

    /**
     * Verify findIndex expects 1 and leaves length 3 unchanged, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_2600
     * @tc.name int8ArrayFindIndexPart02Test026
     * @tc.desc Verify findIndex expects 1 and leaves length 3 unchanged, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test026() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    int r1 = arr.length();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify findIndex expects -1 and leaves length 3 unchanged, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_2700
     * @tc.name int8ArrayFindIndexPart02Test027
     * @tc.desc Verify findIndex expects -1 and leaves length 3 unchanged, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test027() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 99);
    assertEqual(-1, r);
    int r1 = arr.length();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify findIndex expects -1 on empty array, length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_2800
     * @tc.name int8ArrayFindIndexPart02Test028
     * @tc.desc Verify findIndex expects -1 on empty array, length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test028() {
    Int8Array arr = new Int8Array(0);
    int r = arr.findIndex((v, unusedIndex, array) -> v == 0);
    assertEqual(-1, r);
    int lengthAfterFind = arr.length();
    assertEqual(0, lengthAfterFind);
    }

    /**
     * Verify findIndex expects 1 and leaves byteLength 3 unchanged, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_2900
     * @tc.name int8ArrayFindIndexPart02Test029
     * @tc.desc Verify findIndex expects 1 and leaves byteLength 3 unchanged, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test029() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    int r1 = arr.byteLength();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify findIndex expects -1 and leaves byteLength 3 unchanged, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_3000
     * @tc.name int8ArrayFindIndexPart02Test030
     * @tc.desc Verify findIndex expects -1 and leaves byteLength 3 unchanged, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test030() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 99);
    assertEqual(-1, r);
    int r1 = arr.byteLength();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify findIndex expects 1 on view and leaves byteOffset 2, on new Int8Array(buf, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_3100
     * @tc.name int8ArrayFindIndexPart02Test031
     * @tc.desc Verify findIndex expects 1 on view and leaves byteOffset 2, on new Int8Array(buf, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test031() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 2, 3);
    arr.set(1, 20);
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    int r1 = arr.byteOffset();
    int e1 = 2;
    assertEqual(e1, r1);
    }

    /**
     * Verify findIndex expects -1 on view and leaves byteOffset 2, on new Int8Array(buf, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_3200
     * @tc.name int8ArrayFindIndexPart02Test032
     * @tc.desc Verify findIndex expects -1 on view and leaves byteOffset 2, on new Int8Array(buf, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test032() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 2, 3);
    int r = arr.findIndex((v, unusedIndex, array) -> v == 99);
    assertEqual(-1, r);
    int r1 = arr.byteOffset();
    int e1 = 2;
    assertEqual(e1, r1);
    }

    /**
     * Verify findIndex expects -1 on empty array, byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_3300
     * @tc.name int8ArrayFindIndexPart02Test033
     * @tc.desc Verify findIndex expects -1 on empty array, byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test033() {
    Int8Array arr = new Int8Array(0);
    int r = arr.findIndex((v, unusedIndex, array) -> v == 0);
    assertEqual(-1, r);
    int byteLengthAfterFind = arr.byteLength();
    assertEqual(0, byteLengthAfterFind);
    }

    /**
     * Verify findIndex expects 1 and element 10 at index 0, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_3400
     * @tc.name int8ArrayFindIndexPart02Test034
     * @tc.desc Verify findIndex expects 1 and element 10 at index 0, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test034() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    Integer elementAtIndex0 = arr.get(0);
    assertEqualInt(10, elementAtIndex0);
    }

    /**
     * Verify findIndex expects 1 and element 30 at index 2, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_3500
     * @tc.name int8ArrayFindIndexPart02Test035
     * @tc.desc Verify findIndex expects 1 and element 30 at index 2, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test035() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    Integer elementAtIndex2 = arr.get(2);
    assertEqualInt(30, elementAtIndex2);
    }

    /**
     * Verify findIndex expects 20, with $_get(r), on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_3600
     * @tc.name int8ArrayFindIndexPart02Test036
     * @tc.desc Verify findIndex expects 20, with $_get(r), on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test036() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    Integer elementAtFoundIndex = arr.get(r);
    assertEqualInt(20, elementAtFoundIndex);
    }

    /**
     * Verify findIndex expects 1 when v > 15 and element 10 at index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_3700
     * @tc.name int8ArrayFindIndexPart02Test037
     * @tc.desc Verify findIndex expects 1 when v > 15 and element 10 at index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test037() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v > 15);
    assertEqual(1, r);
    Integer elementAtIndex0 = arr.get(0);
    assertEqualInt(10, elementAtIndex0);
    }

    /**
     * Verify findIndex expects 0 and elements 20, 30 intact, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_3800
     * @tc.name int8ArrayFindIndexPart02Test038
     * @tc.desc Verify findIndex expects 0 and elements 20, 30 intact, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test038() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 10);
    assertEqual(0, r);
    Integer elementAtIndex1 = arr.get(1);
    assertEqualInt(20, elementAtIndex1);
    Integer elementAtIndex2 = arr.get(2);
    assertEqualInt(30, elementAtIndex2);
    }

    /**
     * Verify findIndex expects 2 and elements 10, 20 intact, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_3900
     * @tc.name int8ArrayFindIndexPart02Test039
     * @tc.desc Verify findIndex expects 2 and elements 10, 20 intact, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test039() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 30);
    assertEqual(2, r);
    Integer elementAtIndex0 = arr.get(0);
    assertEqualInt(10, elementAtIndex0);
    Integer elementAtIndex1 = arr.get(1);
    assertEqualInt(20, elementAtIndex1);
    }

    /**
     * Verify findIndex expects 1 and length 3, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_4000
     * @tc.name int8ArrayFindIndexPart02Test040
     * @tc.desc Verify findIndex expects 1 and length 3, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test040() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    int lengthAfterFind = arr.length();
    assertEqual(3, lengthAfterFind);
    }

    /**
     * Verify findIndex expects 1 and sum of elements equals 60
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_4100
     * @tc.name int8ArrayFindIndexPart02Test041
     * @tc.desc Verify findIndex expects 1 and sum of elements equals 60
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test041() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    Integer sumOfElements = arr.get(0) + arr.get(1) + arr.get(2);
    assertEqualInt(60, sumOfElements);
    }

    /**
     * Verify findIndex expects 0 and element 7 at index 0, on new Int8Array(new int[] {7})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_4200
     * @tc.name int8ArrayFindIndexPart02Test042
     * @tc.desc Verify findIndex expects 0 and element 7 at index 0, on new Int8Array(new int[] {7})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test042() {
    Int8Array arr = new Int8Array(new int[] {7});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 7);
    assertEqual(0, r);
    Integer elementAtIndex0 = arr.get(0);
    assertEqualInt(7, elementAtIndex0);
    }

    /**
     * Verify findIndex expects 1 and toString unchanged 10, 20, 30
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_4300
     * @tc.name int8ArrayFindIndexPart02Test043
     * @tc.desc Verify findIndex expects 1 and toString unchanged 10, 20, 30
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test043() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    String r1 = String.valueOf(arr);
    String e1 = "10,20,30";
    assertEqual(e1, r1);
    }

    /**
     * Verify findIndex expects 1 and join unchanged 10, 20, 30
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_4400
     * @tc.name int8ArrayFindIndexPart02Test044
     * @tc.desc Verify findIndex expects 1 and join unchanged 10, 20, 30
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test044() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    String r1 = arr.join(",");
    String e1 = "10,20,30";
    assertEqual(e1, r1);
    }

    /**
     * Verify findIndex expects 1 and elements -10, -30 at ends, on new Int8Array(new int[] {-10, 20, -30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_4500
     * @tc.name int8ArrayFindIndexPart02Test045
     * @tc.desc Verify findIndex expects 1 and elements -10, -30 at ends, on new Int8Array(new int[] {-10, 20, -30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test045() {
    Int8Array arr = new Int8Array(new int[] {-10, 20, -30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    Integer elementAtIndex0 = arr.get(0);
    assertEqualInt(-10, elementAtIndex0);
    Integer elementAtIndex2 = arr.get(2);
    assertEqualInt(-30, elementAtIndex2);
    }

    /**
     * Verify findIndex expects 1 and extremes -128, INT8_MAX intact, on new Int8Array(new int[] {INT8_MIN, 0, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_4600
     * @tc.name int8ArrayFindIndexPart02Test046
     * @tc.desc Verify findIndex expects 1 and extremes -128, INT8_MAX intact, on new Int8Array
     * (new int[] {INT8_MIN, 0, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test046() {
    Int8Array arr = new Int8Array(new int[] {INT8_MIN, 0, INT8_MAX});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 0);
    assertEqual(1, r);
    Integer elementAtIndex0 = arr.get(0);
    assertEqualInt(-128, elementAtIndex0);
    Integer elementAtIndex2 = arr.get(2);
    assertEqualInt(INT8_MAX, elementAtIndex2);
    }

    /**
     * Verify findIndex returns 1 when value === 20, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_4700
     * @tc.name int8ArrayFindIndexPart02Test047
     * @tc.desc Verify findIndex returns 1 when value === 20, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test047() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    int indexOf20 = arr.indexOf(20);
    assertEqual(1, indexOf20);
    }

    /**
     * Verify findIndex expects 1 and includes(30) remains true, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_4800
     * @tc.name int8ArrayFindIndexPart02Test048
     * @tc.desc Verify findIndex expects 1 and includes(30) remains true, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test048() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    boolean includes30 = arr.includes(30);
    assertTrue(includes30);
    }

    /**
     * Verify findIndex expects 1 and at(-1) 30, at(0) 10, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_4900
     * @tc.name int8ArrayFindIndexPart02Test049
     * @tc.desc Verify findIndex expects 1 and at(-1) 30, at(0) 10, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test049() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    Integer lastElement = arr.at(-1);
    assertEqualInt(30, lastElement);
    Integer firstElement = arr.at(0);
    assertEqualInt(10, firstElement);
    }

    /**
     * Verify second findIndex call expects 2, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_5000
     * @tc.name int8ArrayFindIndexPart02Test050
     * @tc.desc Verify second findIndex call expects 2, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test050() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int rIdx = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, rIdx);
    int r2 = arr.findIndex((v, unusedIndex, array) -> v == 30);
    assertEqual(2, r2);
    }

    /**
     * Verify findIndex expects 1 and buffer reference unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_5100
     * @tc.name int8ArrayFindIndexPart02Test051
     * @tc.desc Verify findIndex expects 1 and buffer reference unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test051() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Int8Array arr = new Int8Array(buf);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    ArrayBuffer r1 = arr.buffer();
    ArrayBuffer e1 = buf;
    assertEqual(e1, r1);
    }

    /**
     * Verify findIndex expects 1 on view, byteOffset 4, on new Int8Array(buf, 4, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_5200
     * @tc.name int8ArrayFindIndexPart02Test052
     * @tc.desc Verify findIndex expects 1 on view, byteOffset 4, on new Int8Array(buf, 4, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test052() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int8Array arr = new Int8Array(buf, 4, 3);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    int byteOffsetAfterFind = arr.byteOffset();
    assertEqual(4, byteOffsetAfterFind);
    }

    /**
     * Verify findIndex expects 1 on view, length 3, from ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_5300
     * @tc.name int8ArrayFindIndexPart02Test053
     * @tc.desc Verify findIndex expects 1 on view, length 3, from ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test053() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int8Array arr = new Int8Array(buf, 4, 3);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    int lengthAfterFind = arr.length();
    assertEqual(3, lengthAfterFind);
    }

    /**
     * Verify findIndex expects 1 on a1, shared buffer element 20 visible via a2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_5400
     * @tc.name int8ArrayFindIndexPart02Test054
     * @tc.desc Verify findIndex expects 1 on a1, shared buffer element 20 visible via a2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test054() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Int8Array a1 = new Int8Array(buf);
    Int8Array a2 = new Int8Array(buf);
    a1.set(0, 10);
    a1.set(1, 20);
    a1.set(2, 30);
    int r = a1.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    Integer sharedElement = a2.get(1);
    assertEqualInt(20, sharedElement);
    }

    /**
     * Verify findIndex on subarray expects 1 and original elements 10, 50 intact
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_5500
     * @tc.name int8ArrayFindIndexPart02Test055
     * @tc.desc Verify findIndex on subarray expects 1 and original elements 10, 50 intact
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test055() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    Int8Array sub = arr.subarray(1, 4);
    int r = sub.findIndex((v, unusedIndex, array) -> v == 30);
    assertEqual(1, r);
    Integer originalElement0 = arr.get(0);
    assertEqualInt(10, originalElement0);
    Integer originalElement4 = arr.get(4);
    assertEqualInt(50, originalElement4);
    Integer subElement0 = sub.get(0);
    assertEqualInt(20, subElement0);
    Integer subElement2 = sub.get(2);
    assertEqualInt(40, subElement2);
    }

    /**
     * Verify findIndex on subarray expects 1 and leaves subarray byteOffset 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_5600
     * @tc.name int8ArrayFindIndexPart02Test056
     * @tc.desc Verify findIndex on subarray expects 1 and leaves subarray byteOffset 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test056() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    Int8Array sub = arr.subarray(1, 4);
    int r = sub.findIndex((v, unusedIndex, array) -> v == 30);
    assertEqual(1, r);
    int r1 = sub.byteOffset();
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify findIndex expects 1 and full view elements 100, -56 intact, on new Int8Array(buf, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_5700
     * @tc.name int8ArrayFindIndexPart02Test057
     * @tc.desc Verify findIndex expects 1 and full view elements 100, -56 intact, on new Int8Array(buf, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test057() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 2, 3);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    Int8Array full = new Int8Array(buf);
    full.set(0, 100);
    full.set(7, 200);
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    Integer fullViewElement0 = full.get(0);
    assertEqualInt(100, fullViewElement0);
    Integer fullViewElement7 = full.get(7);
    assertEqualInt(-56, fullViewElement7);
    }

    /**
     * Verify findIndex on a1 expects 1 and partition a2 length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_5800
     * @tc.name int8ArrayFindIndexPart02Test058
     * @tc.desc Verify findIndex on a1 expects 1 and partition a2 length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test058() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array a1 = new Int8Array(buf, 0, 3);
    Int8Array a2 = new Int8Array(buf, 3, 3);
    a1.set(0, 10);
    a1.set(1, 20);
    a1.set(2, 30);
    a2.set(0, 40);
    a2.set(1, 50);
    a2.set(2, 60);
    int r = a1.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    int partitionLength = a2.length();
    assertEqual(3, partitionLength);
    }

    /**
     * Verify findIndex expects 1 and full view elements 1, 2, 6 intact, on new Int8Array(buf, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_5900
     * @tc.name int8ArrayFindIndexPart02Test059
     * @tc.desc Verify findIndex expects 1 and full view elements 1, 2, 6 intact, on new Int8Array(buf, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test059() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array arr = new Int8Array(buf, 2, 3);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    Int8Array full = new Int8Array(buf);
    full.set(0, 1);
    full.set(1, 2);
    full.set(5, 6);
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    Integer fullViewElement0 = full.get(0);
    assertEqualInt(1, fullViewElement0);
    Integer fullViewElement1 = full.get(1);
    assertEqualInt(2, fullViewElement1);
    Integer fullViewElement5 = full.get(5);
    assertEqualInt(6, fullViewElement5);
    }

    /**
     * Verify findIndex expects 1 and leaves partition view byteOffset 4, on new Int8Array(buf, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_6000
     * @tc.name int8ArrayFindIndexPart02Test060
     * @tc.desc Verify findIndex expects 1 and leaves partition view byteOffset 4, on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test060() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array a1 = new Int8Array(buf, 0, 4);
    Int8Array a2 = new Int8Array(buf, 4, 4);
    a1.set(0, 10);
    a1.set(1, 20);
    int r = a1.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    int partitionByteOffset = a2.byteOffset();
    assertEqual(4, partitionByteOffset);
    }

    /**
     * Verify findIndex expects 1 and leaves partition view byteLength 4, on new Int8Array(buf, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_6100
     * @tc.name int8ArrayFindIndexPart02Test061
     * @tc.desc Verify findIndex expects 1 and leaves partition view byteLength 4, on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test061() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array a1 = new Int8Array(buf, 0, 4);
    Int8Array a2 = new Int8Array(buf, 4, 4);
    a1.set(0, 10);
    a1.set(1, 20);
    int r = a1.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    int partitionByteLength = a2.byteLength();
    assertEqual(4, partitionByteLength);
    }

    /**
     * Verify findIndex expects 1 then slice(1, 3) has length 2, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_6200
     * @tc.name int8ArrayFindIndexPart02Test062
     * @tc.desc Verify findIndex expects 1 then slice(1, 3) has length 2, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test062() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    Int8Array s = arr.slice(1, 3);
    int sliceLength = s.length();
    assertEqual(2, sliceLength);
    }

    /**
     * Verify findIndex expects 1 then subarray(2) has length 2, on new Int8Array(new int[] {10, 20, 30, 40})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_INDEX_PART02_TEST_6300
     * @tc.name int8ArrayFindIndexPart02Test063
     * @tc.desc Verify findIndex expects 1 then subarray(2) has length 2, on new Int8Array(new int[] {10, 20, 30, 40})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindIndexPart02Test063() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int r = arr.findIndex((v, unusedIndex, array) -> v == 20);
    assertEqual(1, r);
    Int8Array sub = arr.subarray(2);
    int subarrayLength = sub.length();
    assertEqual(2, subarrayLength);
    }
}
