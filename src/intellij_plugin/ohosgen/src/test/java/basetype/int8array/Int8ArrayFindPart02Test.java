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
 * Int8ArrayFindPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFindPart02Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify find expects number, on Int8Array.of(-128)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_0300
     * @tc.name int8ArrayFindPart02Test003
     * @tc.desc Verify find expects number, on Int8Array.of(-128)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test003() {
    Int8Array arr = Int8Array.of(-128);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == -128;
        });
    assertEqual("number", BasTest.typeofValue(result));
    }

    /**
     * Verify find expects number, on Int8Array.of(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_0400
     * @tc.name int8ArrayFindPart02Test004
     * @tc.desc Verify find expects number, on Int8Array.of(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test004() {
    Int8Array arr = Int8Array.of(0);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 0;
        });
    assertEqual("number", BasTest.typeofValue(result));
    }

    /**
     * Verify find expects number, on Int8Array.of(INT8_MAX)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_0500
     * @tc.name int8ArrayFindPart02Test005
     * @tc.desc Verify find expects number, on Int8Array.of(INT8_MAX)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test005() {
    Int8Array arr = Int8Array.of(INT8_MAX);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == INT8_MAX;
        });
    assertEqual("number", BasTest.typeofValue(result));
    }

    /**
     * Verify find expects 6, on Int8Array.of(3, 6, 9, 12)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_0600
     * @tc.name int8ArrayFindPart02Test006
     * @tc.desc Verify find expects 6, on Int8Array.of(3, 6, 9, 12)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test006() {
    Int8Array arr = Int8Array.of(3, 6, 9, 12);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v > 5;
        });
    assertEqualInt(6, result);
    }

    /**
     * Verify find expects INT8_MAX, on Int8Array.of(INT8_MAX, 0, -1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_0700
     * @tc.name int8ArrayFindPart02Test007
     * @tc.desc Verify find expects INT8_MAX, on Int8Array.of(INT8_MAX, 0, -1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test007() {
    Int8Array arr = Int8Array.of(INT8_MAX, 0, -1);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == INT8_MAX;
        });
    assertEqualInt(INT8_MAX, result);
    }

    /**
     * Verify find expects -128, on Int8Array.of(-128, 0, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_0800
     * @tc.name int8ArrayFindPart02Test008
     * @tc.desc Verify find expects -128, on Int8Array.of(-128, 0, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test008() {
    Int8Array arr = Int8Array.of(-128, 0, 1);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == -128;
        });
    assertEqualInt(-128, result);
    }

    /**
     * Verify find expects 0, on Int8Array.of(0, 1, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_0900
     * @tc.name int8ArrayFindPart02Test009
     * @tc.desc Verify find expects 0, on Int8Array.of(0, 1, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test009() {
    Int8Array arr = Int8Array.of(0, 1, 2);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 0;
        });
    assertEqualInt(0, result);
    }

    /**
     * Verify find expects -1, on Int8Array.of(-1, 0, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_1000
     * @tc.name int8ArrayFindPart02Test010
     * @tc.desc Verify find expects -1, on Int8Array.of(-1, 0, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test010() {
    Int8Array arr = Int8Array.of(-1, 0, 1);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == -1;
        });
    assertEqualInt(-1, result);
    }

    /**
     * Verify find expects 9, on Int8Array.of(1, 2, 3, 9)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_1100
     * @tc.name int8ArrayFindPart02Test011
     * @tc.desc Verify find expects 9, on Int8Array.of(1, 2, 3, 9)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test011() {
    Int8Array arr = Int8Array.of(1, 2, 3, 9);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v > 5;
        });
    assertEqualInt(9, result);
    }

    /**
     * Verify find expects 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_1200
     * @tc.name int8ArrayFindPart02Test012
     * @tc.desc Verify find expects 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test012() {
    Int8Array arr = Int8Array.of(1, 5, 1);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 5;
        });
    assertEqualInt(5, result);
    }

    /**
     * Verify find returns undefined, on Int8Array.of(7, 8, 9)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_1300
     * @tc.name int8ArrayFindPart02Test013
     * @tc.desc Verify find returns undefined, on Int8Array.of(7, 8, 9)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test013() {
    Int8Array arr = Int8Array.of(7, 8, 9);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v < 0;
        });
    assertNull(result);
    }

    /**
     * Verify find returns undefined when no element > 10, on Int8Array.of(7)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_1400
     * @tc.name int8ArrayFindPart02Test014
     * @tc.desc Verify find returns undefined when no element > 10, on Int8Array.of(7)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test014() {
    Int8Array arr = Int8Array.of(7);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v > 10;
        });
    assertNull(result);
    }

    /**
     * Verify find expects 20
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_1600
     * @tc.name int8ArrayFindPart02Test016
     * @tc.desc Verify find expects 20
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test016() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 20;
        });
    assertEqualInt(20, result);
    Integer r1 = arr.get(0);
    int e1 = 10;
    assertEqualInt(e1, r1);
    Integer r2 = arr.get(1);
    int e2 = 20;
    assertEqualInt(e2, r2);
    Integer r3 = arr.get(2);
    int e3 = 30;
    assertEqualInt(e3, r3);
    }

    /**
     * Verify find with predicate element == 4 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_1700
     * @tc.name int8ArrayFindPart02Test017
     * @tc.desc Verify find with predicate element == 4 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test017() {
    Int8Array arr = Int8Array.of(4, 4, 4);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 4;
        });
    assertEqualInt(4, result);
    }

    /**
     * Verify find with Int8Array.of(200) overflow to -56, returns first matching element -56
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_1800
     * @tc.name int8ArrayFindPart02Test018
     * @tc.desc Verify find with Int8Array.of(200) overflow to -56, returns first matching element -56
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test018() {
    Int8Array arr = Int8Array.of(200);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == -56;
        });
    assertEqualInt(-56, result);
    }

    /**
     * Verify find expects -1, on Int8Array.of(255)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_1900
     * @tc.name int8ArrayFindPart02Test019
     * @tc.desc Verify find expects -1, on Int8Array.of(255)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test019() {
    Int8Array arr = Int8Array.of(255);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == -1;
        });
    assertEqualInt(-1, result);
    }

    /**
     * Verify find expects INT8_MAX, on Int8Array.of(-129)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_2000
     * @tc.name int8ArrayFindPart02Test020
     * @tc.desc Verify find expects INT8_MAX, on Int8Array.of(-129)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test020() {
    Int8Array arr = Int8Array.of(-129);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == INT8_MAX;
        });
    assertEqualInt(INT8_MAX, result);
    }

    /**
     * Verify find expects -128, on Int8Array.of(128)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_2100
     * @tc.name int8ArrayFindPart02Test021
     * @tc.desc Verify find expects -128, on Int8Array.of(128)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test021() {
    Int8Array arr = Int8Array.of(128);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == -128;
        });
    assertEqualInt(-128, result);
    }

    /**
     * Verify find expects 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_2300
     * @tc.name int8ArrayFindPart02Test023
     * @tc.desc Verify find expects 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test023() {
    Int8Array arr = Int8Array.of(7, 7, 7, 7);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 7;
        });
    assertEqualInt(7, result);
    }

    /**
     * Verify find returns undefined when no element == 1 in new Int8Array(100)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_2400
     * @tc.name int8ArrayFindPart02Test024
     * @tc.desc Verify find returns undefined when no element == 1 in new Int8Array(100)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test024() {
    Int8Array arr = new Int8Array(100);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 1;
        });
    assertNull(result);
    }

    /**
     * Verify find with predicate element == 11 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_2500
     * @tc.name int8ArrayFindPart02Test025
     * @tc.desc Verify find with predicate element == 11 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test025() {
    Int8Array arr = Int8Array.of(11, 22, 33);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 11;
        });
    assertEqualInt(11, result);
    }

    /**
     * Verify find returns undefined on empty Int8Array with predicate v > 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_2600
     * @tc.name int8ArrayFindPart02Test026
     * @tc.desc Verify find returns undefined on empty Int8Array with predicate v > 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test026() {
    Int8Array arr = new Int8Array(0);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v > 0;
        });
    assertNull(result);
    }

    /**
     * Verify find on empty Int8Array keeps count 0 and returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_2700
     * @tc.name int8ArrayFindPart02Test027
     * @tc.desc Verify find on empty Int8Array keeps count 0 and returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test027() {
    Int8Array arr = new Int8Array(0);
    int[] count = {0};
    Integer result = arr.find((v, unusedIndex, array) -> {
        count[0] = count[0] + 1;
        return v == 0;
    });
    assertEqual(0, count[0]);
    assertNull(result);
    }

    /**
     * Verify find on empty Int8Array does not modify length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_2900
     * @tc.name int8ArrayFindPart02Test029
     * @tc.desc Verify find on empty Int8Array does not modify length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test029() {
    Int8Array arr = new Int8Array(0);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 0;
        });
    assertNull(result);
    int r1 = arr.length();
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify find returns undefined when no element > 1000 in Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_3200
     * @tc.name int8ArrayFindPart02Test032
     * @tc.desc Verify find returns undefined when no element > 1000 in Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test032() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v > 1000;
        });
    assertNull(result);
    }

    /**
     * Verify find returns undefined, on Int8Array.of(99)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_3300
     * @tc.name int8ArrayFindPart02Test033
     * @tc.desc Verify find returns undefined, on Int8Array.of(99)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test033() {
    Int8Array arr = Int8Array.of(99);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v < 0;
        });
    assertNull(result);
    }

    /**
     * Verify find returns undefined when predicate always false, callback invoked 3 times
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_3400
     * @tc.name int8ArrayFindPart02Test034
     * @tc.desc Verify find returns undefined when predicate always false, callback invoked 3 times
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test034() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    int[] count = {0};
    Integer result = arr.find((v, unusedIndex, array) -> {
        count[0] = count[0] + 1;
        return v > 100;
    });
    assertEqual(3, count[0]);
    assertNull(result);
    }

    /**
     * Verify find returns undefined when element == 50 not found, on Int8Array.of(-128, 0, INT8_MAX)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_3500
     * @tc.name int8ArrayFindPart02Test035
     * @tc.desc Verify find returns undefined when element == 50 not found, on Int8Array.of(-128, 0, INT8_MAX)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test035() {
    Int8Array arr = Int8Array.of(-128, 0, INT8_MAX);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 50;
        });
    assertNull(result);
    }

    /**
     * Verify find returns undefined, on Int8Array.of(2, 4, 6, 8)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_3600
     * @tc.name int8ArrayFindPart02Test036
     * @tc.desc Verify find returns undefined, on Int8Array.of(2, 4, 6, 8)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test036() {
    Int8Array arr = Int8Array.of(2, 4, 6, 8);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 5;
        });
    assertNull(result);
    }

    /**
     * Verify find returns undefined when no element > 30, on Int8Array.of(5, 10, 15, 20, 25, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_3700
     * @tc.name int8ArrayFindPart02Test037
     * @tc.desc Verify find returns undefined when no element > 30, on Int8Array.of(5, 10, 15, 20, 25, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test037() {
    Int8Array arr = Int8Array.of(5, 10, 15, 20, 25, 30);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v > 30;
        });
    assertNull(result);
    }

    /**
     * Verify find returns undefined when no element != 0, on Int8Array.of(0, 0, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_3800
     * @tc.name int8ArrayFindPart02Test038
     * @tc.desc Verify find returns undefined when no element != 0, on Int8Array.of(0, 0, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test038() {
    Int8Array arr = Int8Array.of(0, 0, 0);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v != 0;
        });
    assertNull(result);
    }

    /**
     * Verify find expects 2 and length stays 3, on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_3900
     * @tc.name int8ArrayFindPart02Test039
     * @tc.desc Verify find expects 2 and length stays 3, on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test039() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 2;
        });
    assertEqualInt(2, result);
    int r1 = arr.length();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify find returns undefined when v > 100 and length stays 3, on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_4000
     * @tc.name int8ArrayFindPart02Test040
     * @tc.desc Verify find returns undefined when v > 100 and length stays 3, on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test040() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v > 100;
        });
    assertNull(result);
    int r1 = arr.length();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify find expects 3 and byteLength stays 4, on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_4100
     * @tc.name int8ArrayFindPart02Test041
     * @tc.desc Verify find expects 3 and byteLength stays 4, on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test041() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 3;
        });
    assertEqualInt(3, result);
    int r1 = arr.byteLength();
    int e1 = 4;
    assertEqual(e1, r1);
    }

    /**
     * Verify find expects 3 and byteLength equals length 5, on Int8Array.of(1, 2, 3, 4, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_4200
     * @tc.name int8ArrayFindPart02Test042
     * @tc.desc Verify find expects 3 and byteLength equals length 5, on Int8Array.of(1, 2, 3, 4, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test042() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 3;
        });
    assertEqualInt(3, result);
    assertEqual(arr.length(), arr.byteLength());
    }

    /**
     * Verify find leaves view.length 6 from ArrayBuffer, on new Int8Array(buf, 0, 6)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_4400
     * @tc.name int8ArrayFindPart02Test044
     * @tc.desc Verify find leaves view.length 6 from ArrayBuffer, on new Int8Array(buf, 0, 6)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test044() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 0, 6);
    Integer result = view.find((v, unusedIndex, array) -> {
        return v == 0;
        });
    assertEqualInt(0, result);
    assertEqual(6, view.length());
    }

    /**
     * Verify find expects 3 on subarray(1, 4), on Int8Array.of(1, 2, 3, 4, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_4500
     * @tc.name int8ArrayFindPart02Test045
     * @tc.desc Verify find expects 3 on subarray(1, 4), on Int8Array.of(1, 2, 3, 4, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test045() {
    Int8Array base = Int8Array.of(1, 2, 3, 4, 5);
    Int8Array sub = base.subarray(1, 4);
    Integer result = sub.find((v, unusedIndex, array) -> {
        return v == 3;
        });
    assertEqualInt(3, result);
    assertEqual(3, sub.byteLength());
    }

    /**
     * Verify find returns undefined when v > 100, elements 1, 2, 3 intact, on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_4600
     * @tc.name int8ArrayFindPart02Test046
     * @tc.desc Verify find returns undefined when v > 100, elements 1, 2, 3 intact, on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test046() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v > 100;
        });
    assertNull(result);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify find expects 6, with $_get(1), on Int8Array.of(5, 6, 7)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_4700
     * @tc.name int8ArrayFindPart02Test047
     * @tc.desc Verify find expects 6, with $_get(1), on Int8Array.of(5, 6, 7)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test047() {
    Int8Array arr = Int8Array.of(5, 6, 7);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 6;
        });
    assertEqualInt(6, result);
    assertEqualInt(6, arr.get(1));
    }

    /**
     * Verify find expects 2 and $_get(0) stays 9, on Int8Array.of(9, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_4800
     * @tc.name int8ArrayFindPart02Test048
     * @tc.desc Verify find expects 2 and $_get(0) stays 9, on Int8Array.of(9, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test048() {
    Int8Array arr = Int8Array.of(9, 2, 3);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 2;
        });
    assertEqualInt(2, result);
    assertEqualInt(9, arr.get(0));
    }

    /**
     * Verify find expects 2 and $_get(2) stays 8, on Int8Array.of(1, 2, 8)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_4900
     * @tc.name int8ArrayFindPart02Test049
     * @tc.desc Verify find expects 2 and $_get(2) stays 8, on Int8Array.of(1, 2, 8)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test049() {
    Int8Array arr = Int8Array.of(1, 2, 8);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 2;
        });
    assertEqualInt(2, result);
    assertEqualInt(8, arr.get(2));
    }

    /**
     * Verify find expects 2 and buffer.byteLength stays 3, on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_5000
     * @tc.name int8ArrayFindPart02Test050
     * @tc.desc Verify find expects 2 and buffer.byteLength stays 3, on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test050() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 2;
        });
    assertEqualInt(2, result);
    assertEqual(3, arr.buffer().byteLength());
    }

    /**
     * Verify find expects INT8_MAX and elements -1, -2 intact, on Int8Array.of(-1, -2, INT8_MAX)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_5100
     * @tc.name int8ArrayFindPart02Test051
     * @tc.desc Verify find expects INT8_MAX and elements -1, -2 intact, on Int8Array.of(-1, -2, INT8_MAX)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test051() {
    Int8Array arr = Int8Array.of(-1, -2, INT8_MAX);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == INT8_MAX;
        });
    assertEqualInt(INT8_MAX, result);
    assertEqualInt(-1, arr.get(0));
    assertEqualInt(-2, arr.get(1));
    assertEqualInt(INT8_MAX, arr.get(2));
    }

    /**
     * Verify find with predicate element > 8 returns first matching element 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_5300
     * @tc.name int8ArrayFindPart02Test053
     * @tc.desc Verify find with predicate element > 8 returns first matching element 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test053() {
    Int8Array arr = Int8Array.of(5, 10, 15);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v > 8;
        });
    assertEqualInt(10, result);
    }

    /**
     * Verify find expects number, on Int8Array.of(42)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_5500
     * @tc.name int8ArrayFindPart02Test055
     * @tc.desc Verify find expects number, on Int8Array.of(42)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test055() {
    Int8Array arr = Int8Array.of(42);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 42;
        });
    assertEqual("number", BasTest.typeofValue(result));
    assertEqualInt(42, result);
    }

    /**
     * Verify find expects 0 and buffer.byteLength stays 6, on new Int8Array(buf, 0, 6)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_5600
     * @tc.name int8ArrayFindPart02Test056
     * @tc.desc Verify find expects 0 and buffer.byteLength stays 6, on new Int8Array(buf, 0, 6)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test056() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array view = new Int8Array(buf, 0, 6);
    Integer result = view.find((v, unusedIndex, array) -> {
        return v == 0;
        });
    assertEqualInt(0, result);
    assertEqual(6, view.buffer().byteLength());
    }

    /**
     * Verify find expects 0 and byteOffset stays 2, on new Int8Array(buf, 2, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_5700
     * @tc.name int8ArrayFindPart02Test057
     * @tc.desc Verify find expects 0 and byteOffset stays 2, on new Int8Array(buf, 2, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test057() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 2, 4);
    Integer result = view.find((v, unusedIndex, array) -> {
        return v == 0;
        });
    assertEqualInt(0, result);
    assertEqual(2, view.byteOffset());
    }

    /**
     * Verify find on subarray(1, 4) preserves byteOffset, on Int8Array.of(1, 2, 3, 4, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_5800
     * @tc.name int8ArrayFindPart02Test058
     * @tc.desc Verify find on subarray(1, 4) preserves byteOffset, on Int8Array.of(1, 2, 3, 4, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test058() {
    Int8Array base = Int8Array.of(1, 2, 3, 4, 5);
    Int8Array sub = base.subarray(1, 4);
    Integer result = sub.find((v, unusedIndex, array) -> {
        return v == 3;
        });
    assertEqualInt(3, result);
    assertEqual(1, sub.byteOffset());
    Integer r1 = base.get(1);
    int e1 = 2;
    assertEqualInt(e1, r1);
    Integer r2 = base.get(2);
    int e2 = 3;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify find expects 7 and $_get(0) stays 7, on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_5900
     * @tc.name int8ArrayFindPart02Test059
     * @tc.desc Verify find expects 7 and $_get(0) stays 7, on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test059() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf);
    view.set(0, 7);
    Integer result = view.find((v, unusedIndex, array) -> {
        return v == 7;
        });
    assertEqualInt(7, result);
    assertEqualInt(7, view.get(0));
    }

    /**
     * Verify find expects 42 and second view stays 0, on new Int8Array(buf, 0, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_6000
     * @tc.name int8ArrayFindPart02Test060
     * @tc.desc Verify find expects 42 and second view stays 0, on new Int8Array(buf, 0, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test060() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array firstView = new Int8Array(buf, 0, 3);
    Int8Array secondView = new Int8Array(buf, 3, 3);
    firstView.set(0, 42);
    Integer result = firstView.find((v, unusedIndex, array) -> {
        return v == 42;
        });
    assertEqualInt(42, result);
    assertEqualInt(0, secondView.get(0));
    }

    /**
     * Verify find expects 0 and leaves view.byteLength 6 from ArrayBuffer, on new Int8Array(buf, 0, 6)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_6100
     * @tc.name int8ArrayFindPart02Test061
     * @tc.desc Verify find expects 0 and leaves view.byteLength 6 from ArrayBuffer, on new Int8Array(buf, 0, 6)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test061() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 0, 6);
    Integer result = view.find((v, unusedIndex, array) -> {
        return v == 0;
        });
    assertEqualInt(0, result);
    assertEqual(6, view.byteLength());
    }

    /**
     * Verify find with predicate element == 9 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_6200
     * @tc.name int8ArrayFindPart02Test062
     * @tc.desc Verify find with predicate element == 9 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test062() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    view.set(2, 9);
    Integer result = view.find((v, unusedIndex, array) -> {
        return v == 9;
        });
    assertEqualInt(9, result);
    }

    /**
     * Verify find expects 5 from ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_6300
     * @tc.name int8ArrayFindPart02Test063
     * @tc.desc Verify find expects 5 from ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test063() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array view = new Int8Array(buf, 2, 3);
    view.set(0, 5);
    Integer result = view.find((v, unusedIndex, array) -> {
        return v == 5;
        });
    assertEqualInt(5, result);
    }

    /**
     * Verify find on subarray(1, 3) expects 20, on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_6400
     * @tc.name int8ArrayFindPart02Test064
     * @tc.desc Verify find on subarray(1, 3) expects 20, on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test064() {
    Int8Array base = Int8Array.of(10, 20, 30);
    Int8Array sub = base.subarray(1, 3);
    Integer result = sub.find((v, unusedIndex, array) -> {
        return v == 20;
        });
    assertEqualInt(20, result);
    }

    /**
     * Verify $_get(0) on empty Int8Array throws RangeError, find does not throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART02_TEST_7000
     * @tc.name int8ArrayFindPart02Test070
     * @tc.desc Verify $_get(0) on empty Int8Array throws RangeError, find does not throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart02Test070() {
    Int8Array arr = new Int8Array(0);
    Integer found = arr.find((v, unusedIndex, array) -> {
        return v == 0;
        });
    assertNull(found);
    try {
    arr.get(0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
}
