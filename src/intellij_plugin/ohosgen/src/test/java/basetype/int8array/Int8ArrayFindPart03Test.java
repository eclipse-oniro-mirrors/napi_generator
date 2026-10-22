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
 * Int8ArrayFindPart03Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFindPart03Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify find on empty array returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_0100
     * @tc.name int8ArrayFindPart03Test001
     * @tc.desc Verify find on empty array returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test001() {
    Int8Array arr = new Int8Array(0);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return value == 0;
        });
    assertNull(result);
    }

    /**
     * Verify empty array find, original array length remains 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_0600
     * @tc.name int8ArrayFindPart03Test006
     * @tc.desc Verify empty array find, original array length remains 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test006() {
    Int8Array arr = new Int8Array(0);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return value == 0;
        });
    assertNull(result);
    int r1 = arr.length();
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify find expects 5 when value === 5, on Int8Array.of(5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_1000
     * @tc.name int8ArrayFindPart03Test010
     * @tc.desc Verify find expects 5 when value === 5, on Int8Array.of(5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test010() {
    Int8Array arr = Int8Array.of(5);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return value == 5;
        });
    assertEqualInt(5, result);
    }

    /**
     * Verify find with predicate element == 6 on Int8Array.of(5) returns undefined (no match)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_1100
     * @tc.name int8ArrayFindPart03Test011
     * @tc.desc Verify find with predicate element == 6 on Int8Array.of(5) returns undefined (no match)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test011() {
    Int8Array arr = Int8Array.of(5);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return value == 6;
        });
    assertNull(result);
    }

    /**
     * Verify find expects 5, callback invoked once, on Int8Array.of(5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_1200
     * @tc.name int8ArrayFindPart03Test012
     * @tc.desc Verify find expects 5, callback invoked once, on Int8Array.of(5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test012() {
    Int8Array arr = Int8Array.of(5);
    int[] count = {0};
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        count[0] = count[0] + 1;
        return value == 5;
    });
    assertEqual(1, count[0]);
    assertEqualInt(5, result);
    }

    /**
     * Verify find with predicate element == -128 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_1600
     * @tc.name int8ArrayFindPart03Test016
     * @tc.desc Verify find with predicate element == -128 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test016() {
    Int8Array arr = Int8Array.of(-128);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return value == -128;
        });
    assertEqualInt(-128, result);
    }

    /**
     * Verify all-[127] length 3 find value===127 returns first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_1700
     * @tc.name int8ArrayFindPart03Test017
     * @tc.desc Verify all-[127] length 3 find value===127 returns first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test017() {
    Int8Array arr = Int8Array.of(INT8_MAX, INT8_MAX, INT8_MAX);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return value == INT8_MAX;
        });
    assertEqualInt(INT8_MAX, result);
    }

    /**
     * Verify all-[-128] length 3 find value===-128 returns first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_1800
     * @tc.name int8ArrayFindPart03Test018
     * @tc.desc Verify all-[-128] length 3 find value===-128 returns first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test018() {
    Int8Array arr = Int8Array.of(INT8_MIN, INT8_MIN, INT8_MIN);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return value == INT8_MIN;
        });
    assertEqualInt(INT8_MIN, result);
    }

    /**
     * Verify all-[0] length 3 find value===1 no match, returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_1900
     * @tc.name int8ArrayFindPart03Test019
     * @tc.desc Verify all-[0] length 3 find value===1 no match, returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test019() {
    Int8Array arr = Int8Array.of(0, 0, 0);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return value == 1;
        });
    assertNull(result);
    }

    /**
     * Verify all-[0] length 3 find no match, callback executes 3 times
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_2000
     * @tc.name int8ArrayFindPart03Test020
     * @tc.desc Verify all-[0] length 3 find no match, callback executes 3 times
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test020() {
    Int8Array arr = Int8Array.of(0, 0, 0);
    int[] count = {0};
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        count[0] = count[0] + 1;
        return value == 1;
    });
    assertEqual(3, count[0]);
    assertNull(result);
    }

    /**
     * Verify all-[7] length 3 find, match occurs at index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_2200
     * @tc.name int8ArrayFindPart03Test022
     * @tc.desc Verify all-[7] length 3 find, match occurs at index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test022() {
    Int8Array arr = Int8Array.of(7, 7, 7);
    int[] matchedIndex = {-1};
    Integer result = arr.find((value, index, unusedArray) -> {
        if (value == 7) {
            matchedIndex[0] = index;
        return true;
        }
        return false;
        });
    assertEqual(0, matchedIndex[0]);
    assertEqualInt(7, result);
    }

    /**
     * Verify find returns first matching element 7, on Int8Array.of(7, 7, 7)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_2300
     * @tc.name int8ArrayFindPart03Test023
     * @tc.desc Verify find returns first matching element 7, on Int8Array.of(7, 7, 7)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test023() {
    Int8Array arr = Int8Array.of(7, 7, 7);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return value == 7;
        });
    assertEqualInt(7, result);
    }

    /**
     * Verify find with predicate value !== value (always false) returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_3400
     * @tc.name int8ArrayFindPart03Test034
     * @tc.desc Verify find with predicate value !== value (always false) returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test034() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return value != value;
        });
    assertNull(result);
    }

    /**
     * Verify find with predicate element == 'number' returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_3600
     * @tc.name int8ArrayFindPart03Test036
     * @tc.desc Verify find with predicate element == 'number' returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test036() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return true;
        });
    assertEqualInt(1, result);
    }

    /**
     * Verify find with predicate value === Number.POSITIVE_INFINITY (always false for
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_3700
     * @tc.name int8ArrayFindPart03Test037
     * @tc.desc Verify find with predicate value === Number.POSITIVE_INFINITY (always false for
     * Int8Array) returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test037() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return Double.isInfinite(value) && value > 0;
        });
    assertNull(result);
    }

    /**
     * Verify find with predicate value === -Number.POSITIVE_INFINITY (always false fo
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_3800
     * @tc.name int8ArrayFindPart03Test038
     * @tc.desc Verify find with predicate value === -Number.POSITIVE_INFINITY (always false fo
     * r Int8Array) returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test038() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return value == -Double.POSITIVE_INFINITY;
        });
    assertNull(result);
    }

    /**
     * Verify find with predicate value === Number.NaN (always false, NaN !== NaN) returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_3900
     * @tc.name int8ArrayFindPart03Test039
     * @tc.desc Verify find with predicate value === Number.NaN (always false, NaN !== NaN) returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test039() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return Double.isNaN(value);
        });
    assertNull(result);
    }

    /**
     * Verify find with predicate typeof value === undefined (always false for Int8Array) returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_4000
     * @tc.name int8ArrayFindPart03Test040
     * @tc.desc Verify find with predicate typeof value === undefined (always false for Int8Array) returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test040() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return BasTest.typeofValue(value) == "undefined";
        });
    assertNull(result);
    }

    /**
     * Verify find returns undefined when value === 99 not found, on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_4200
     * @tc.name int8ArrayFindPart03Test042
     * @tc.desc Verify find returns undefined when value === 99 not found, on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test042() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return value == 99;
        });
    assertNull(result);
    }

    /**
     * Verify find matching value not equal to undefined, equals matched value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_4300
     * @tc.name int8ArrayFindPart03Test043
     * @tc.desc Verify find matching value not equal to undefined, equals matched value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test043() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return value == 20;
        });
    assertEqualInt(20, result);
    }

    /**
     * Verify find returns undefined, original array $_get remains accessible
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_4400
     * @tc.name int8ArrayFindPart03Test044
     * @tc.desc Verify find returns undefined, original array $_get remains accessible
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test044() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        return value == 99;
        });
    assertNull(result);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify find with predicate element == 2 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_5200
     * @tc.name int8ArrayFindPart03Test052
     * @tc.desc Verify find with predicate element == 2 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test052() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.find((value, index, unusedArray) -> {
        if (index >= 2) {
        return BasTest.throwTestError("should-not-reach");
        }
        return value == 2;
        });
    assertEqualInt(2, result);
    }

    /**
     * Verify find early match on second element, callback stops, counter is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_5800
     * @tc.name int8ArrayFindPart03Test058
     * @tc.desc Verify find early match on second element, callback stops, counter is 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test058() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int[] count = {0};
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        count[0] = count[0] + 1;
        return value == 20;
    });
    assertEqual(2, count[0]);
    assertEqualInt(20, result);
    }

    /**
     * Verify find no match 5 elements, full traversal, counter is 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_5900
     * @tc.name int8ArrayFindPart03Test059
     * @tc.desc Verify find no match 5 elements, full traversal, counter is 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test059() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int[] count = {0};
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        count[0] = count[0] + 1;
        return value == 99;
    });
    assertEqual(5, count[0]);
    assertNull(result);
    }

    /**
     * Verify find with predicate element == 10 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_6000
     * @tc.name int8ArrayFindPart03Test060
     * @tc.desc Verify find with predicate element == 10 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test060() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int[] count = {0};
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        count[0] = count[0] + 1;
        return value == 10;
    });
    assertEqual(1, count[0]);
    assertEqualInt(10, result);
    }

    /**
     * Verify find with predicate element == 50 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_6100
     * @tc.name int8ArrayFindPart03Test061
     * @tc.desc Verify find with predicate element == 50 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test061() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int[] count = {0};
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        count[0] = count[0] + 1;
        return value == 50;
    });
    assertEqual(5, count[0]);
    assertEqualInt(50, result);
    }

    /**
     * Verify find with predicate element == 30 returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_6200
     * @tc.name int8ArrayFindPart03Test062
     * @tc.desc Verify find with predicate element == 30 returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFindPart03Test062() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40, 50);
    int[] count = {0};
    Integer result = arr.find((value, unusedIndex, unusedArray) -> {
        count[0] = count[0] + 1;
        return value == 30;
    });
    assertEqual(3, count[0]);
    assertEqualInt(30, result);
    }

    /**
     * Verify empty array find returns undefined, $_get(0) throws RangeError for out-of-bounds index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FIND_PART03_6300
     * @tc.name int8ArrayFindPart03Test063
     * @tc.desc Verify empty array find returns undefined, $_get(0) throws RangeError for out-of-bounds index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
