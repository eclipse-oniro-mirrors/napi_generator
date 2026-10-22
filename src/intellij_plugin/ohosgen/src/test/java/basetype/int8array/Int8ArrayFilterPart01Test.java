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
import basetype.common.RangeError;
import basetype.common.Error;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayFilterPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFilterPart01Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify filter with full three-param arrow function (baseline arity)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_0100
     * @tc.name int8ArrayFilterPart01Test001
     * @tc.desc Verify filter with full three-param arrow function (baseline arity)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test001() {
    Int8Array arr = Int8Array.of(1, -2, 3, -4, 5);
    Int8Array result = arr.filter((val) -> {
        return val > 0;
        });
    assertEqual(3, result.length());
    assertEqualInt(1, result.get(0));
    assertEqualInt(3, result.get(1));
    assertEqualInt(5, result.get(2));
    }

    /**
     * Verify filter with zero-param callback returning constant true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_0200
     * @tc.name int8ArrayFilterPart01Test002
     * @tc.desc Verify filter with zero-param callback returning constant true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test002() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    Int8Array result = arr.filter((index) -> {
        return true;
        });
    assertEqual(3, result.length());
    assertEqualInt(10, result.get(0));
    assertEqualInt(30, result.get(2));
    }

    /**
     * Verify filter with val-only single-param callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_0300
     * @tc.name int8ArrayFilterPart01Test003
     * @tc.desc Verify filter with val-only single-param callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test003() {
    Int8Array arr = Int8Array.of(1, -2, 3, -4);
    Int8Array result = arr.filter((val) -> {
        return val < 0;
        });
    assertEqual(2, result.length());
    assertEqualInt(-2, result.get(0));
    assertEqualInt(-4, result.get(1));
    }

    /**
     * Verify val = -128 (int8 min), filter val === -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_0500
     * @tc.name int8ArrayFilterPart01Test005
     * @tc.desc Verify val = -128 (int8 min), filter val === -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test005() {
    Int8Array arr = Int8Array.of(-128, 0, INT8_MAX);
    Int8Array result = arr.filter((val) -> {
        return val == -128;
        });
    assertEqual(1, result.length());
    assertEqualInt(-128, result.get(0));
    }

    /**
     * Verify val = 127 (int8 max), filter val === 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_0600
     * @tc.name int8ArrayFilterPart01Test006
     * @tc.desc Verify val = 127 (int8 max), filter val === 127
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test006() {
    Int8Array arr = Int8Array.of(-128, 0, INT8_MAX);
    Int8Array result = arr.filter((val) -> {
        return val == INT8_MAX;
        });
    assertEqual(1, result.length());
    assertEqualInt(INT8_MAX, result.get(0));
    }

    /**
     * Verify val = 0 (zero), filter val === 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_0700
     * @tc.name int8ArrayFilterPart01Test007
     * @tc.desc Verify val = 0 (zero), filter val === 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test007() {
    Int8Array arr = Int8Array.of(0, -1, 0, 1);
    Int8Array result = arr.filter((val) -> {
        return val == 0;
        });
    assertEqual(2, result.length());
    assertEqualInt(0, result.get(0));
    assertEqualInt(0, result.get(1));
    }

    /**
     * Verify val = -1 (negative one), filter val === -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_0800
     * @tc.name int8ArrayFilterPart01Test008
     * @tc.desc Verify val = -1 (negative one), filter val === -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test008() {
    Int8Array arr = Int8Array.of(-1, 0, -1, 1);
    Int8Array result = arr.filter((val) -> {
        return val == -1;
        });
    assertEqual(2, result.length());
    assertEqualInt(-1, result.get(0));
    assertEqualInt(-1, result.get(1));
    }

    /**
     * Verify val = 1 (min positive), filter val > 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_0900
     * @tc.name int8ArrayFilterPart01Test009
     * @tc.desc Verify val = 1 (min positive), filter val > 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test009() {
    Int8Array arr = Int8Array.of(1, -1, 1, 0);
    Int8Array result = arr.filter((val) -> {
        return val > 0;
        });
    assertEqual(2, result.length());
    assertEqualInt(1, result.get(0));
    assertEqualInt(1, result.get(1));
    }

    /**
     * Verify val = -128 boundary, filter val < 0 captures negative boundary
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_1000
     * @tc.name int8ArrayFilterPart01Test010
     * @tc.desc Verify val = -128 boundary, filter val < 0 captures negative boundary
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test010() {
    Int8Array arr = Int8Array.of(-128, 0, INT8_MAX);
    Int8Array result = arr.filter((val) -> {
        return val < 0;
        });
    assertEqual(1, result.length());
    assertEqualInt(-128, result.get(0));
    }

    /**
     * Verify val = 127 boundary, filter val > 0 captures positive boundary
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_1100
     * @tc.name int8ArrayFilterPart01Test011
     * @tc.desc Verify val = 127 boundary, filter val > 0 captures positive boundary
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test011() {
    Int8Array arr = Int8Array.of(-1, 0, INT8_MAX);
    Int8Array result = arr.filter((val) -> {
        return val > 0;
        });
    assertEqual(1, result.length());
    assertEqualInt(INT8_MAX, result.get(0));
    }

    /**
     * Verify Int8Array.of(128) truncates to -128, filter val === -128 keeps it
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_1200
     * @tc.name int8ArrayFilterPart01Test012
     * @tc.desc Verify Int8Array.of(128) truncates to -128, filter val === -128 keeps it
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test012() {
    Int8Array arr = Int8Array.of(128);
    Int8Array result = arr.filter((val) -> {
        return val == -128;
        });
    assertEqual(1, result.length());
    assertEqualInt(-128, result.get(0));
    }

    /**
     * Verify Int8Array.of(-129) truncates to INT8_MAX, filter val === INT8_MAX keeps it
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_1300
     * @tc.name int8ArrayFilterPart01Test013
     * @tc.desc Verify Int8Array.of(-129) truncates to INT8_MAX, filter val === INT8_MAX keeps it
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test013() {
    Int8Array arr = Int8Array.of(-129);
    Int8Array result = arr.filter((val) -> {
        return val == INT8_MAX;
        });
    assertEqual(1, result.length());
    assertEqualInt(INT8_MAX, result.get(0));
    }

    /**
     * Verify Int8Array.of(255) truncates to -1, filter val === -1 keeps it
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_1400
     * @tc.name int8ArrayFilterPart01Test014
     * @tc.desc Verify Int8Array.of(255) truncates to -1, filter val === -1 keeps it
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test014() {
    Int8Array arr = Int8Array.of(255);
    Int8Array result = arr.filter((val) -> {
        return val == -1;
        });
    assertEqual(1, result.length());
    assertEqualInt(-1, result.get(0));
    }

    /**
     * Verify Int8Array.of(256) truncates to 0, filter val === 0 keeps it
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_1500
     * @tc.name int8ArrayFilterPart01Test015
     * @tc.desc Verify Int8Array.of(256) truncates to 0, filter val === 0 keeps it
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test015() {
    Int8Array arr = Int8Array.of(256);
    Int8Array result = arr.filter((val) -> {
        return val == 0;
        });
    assertEqual(1, result.length());
    assertEqualInt(0, result.get(0));
    }

    /**
     * Verify Int8Array.of(Number.NaN) stores 0, filter val === 0 keeps it
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_1600
     * @tc.name int8ArrayFilterPart01Test016
     * @tc.desc Verify Int8Array.of(Number.NaN) stores 0, filter val === 0 keeps it
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test016() {
    Int8Array arr = Int8Array.of(Double.NaN);
    Int8Array result = arr.filter((val) -> {
        return val == 0;
        });
    assertEqual(1, result.length());
    assertEqualInt(0, result.get(0));
    }

    /**
     * Verify Int8Array.of(1.9) truncates to 1, filter val === 1 keeps it
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_1700
     * @tc.name int8ArrayFilterPart01Test017
     * @tc.desc Verify Int8Array.of(1.9) truncates to 1, filter val === 1 keeps it
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test017() {
    Int8Array arr = Int8Array.of(1.9);
    Int8Array result = arr.filter((val) -> {
        return val == 1;
        });
    assertEqual(1, result.length());
    assertEqualInt(1, result.get(0));
    }

    /**
     * Verify Int8Array.of(-1.9) truncates to -1, filter val === -1 keeps it
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_1800
     * @tc.name int8ArrayFilterPart01Test018
     * @tc.desc Verify Int8Array.of(-1.9) truncates to -1, filter val === -1 keeps it
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test018() {
    Int8Array arr = Int8Array.of(-1.9);
    Int8Array result = arr.filter((val) -> {
        return val == -1;
        });
    assertEqual(1, result.length());
    assertEqualInt(-1, result.get(0));
    }

    /**
     * Verify Int8Array.of(-0.0) stores 0, filter val === 0 keeps it
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_1900
     * @tc.name int8ArrayFilterPart01Test019
     * @tc.desc Verify Int8Array.of(-0.0) stores 0, filter val === 0 keeps it
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test019() {
    Int8Array arr = Int8Array.of(-0.0);
    Int8Array result = arr.filter((val) -> {
        return val == 0;
        });
    assertEqual(1, result.length());
    assertEqualInt(0, result.get(0));
    }

    /**
     * Verify all-zero array, filter val !== 0 returns empty result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_2000
     * @tc.name int8ArrayFilterPart01Test020
     * @tc.desc Verify all-zero array, filter val !== 0 returns empty result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test020() {
    Int8Array arr = Int8Array.of(0, 0, 0);
    Int8Array result = arr.filter((val) -> {
        return val != 0;
        });
    assertEqual(0, result.length());
    }

    /**
     * Verify filter val > 64 keeps 65, 100, INT8_MAX, on Int8Array.of(65, 0, 100, -1, INT8_MAX)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_3300
     * @tc.name int8ArrayFilterPart01Test033
     * @tc.desc Verify filter val > 64 keeps 65, 100, INT8_MAX, on Int8Array.of(65, 0, 100, -1, INT8_MAX)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test033() {
    Int8Array arr = Int8Array.of(65, 0, 100, -1, INT8_MAX);
    Int8Array result = arr.filter((val) -> {
        return val > 64;
        });
    assertEqual(3, result.length());
    assertEqualInt(65, result.get(0));
    assertEqualInt(100, result.get(1));
    assertEqualInt(INT8_MAX, result.get(2));
    }

    /**
     * Verify filter val < -64 keeps -65, -100, -128, on Int8Array.of(-65, 0, -100, 1, -128)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_3400
     * @tc.name int8ArrayFilterPart01Test034
     * @tc.desc Verify filter val < -64 keeps -65, -100, -128, on Int8Array.of(-65, 0, -100, 1, -128)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test034() {
    Int8Array arr = Int8Array.of(-65, 0, -100, 1, -128);
    Int8Array result = arr.filter((val) -> {
        return val < -64;
        });
    assertEqual(3, result.length());
    assertEqualInt(-65, result.get(0));
    assertEqualInt(-100, result.get(1));
    assertEqualInt(-128, result.get(2));
    }

    /**
     * Verify filter val !== 0 keeps 1 and -1, on Int8Array.of(0, 1, 0, -1, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_3500
     * @tc.name int8ArrayFilterPart01Test035
     * @tc.desc Verify filter val !== 0 keeps 1 and -1, on Int8Array.of(0, 1, 0, -1, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test035() {
    Int8Array arr = Int8Array.of(0, 1, 0, -1, 0);
    Int8Array result = arr.filter((val) -> {
        return val != 0;
        });
    assertEqual(2, result.length());
    assertEqualInt(1, result.get(0));
    assertEqualInt(-1, result.get(1));
    }

    /**
     * Verify filter val >= 0 keeps 0, 1, 2, on Int8Array.of(-1, 0, 1, -2, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_3600
     * @tc.name int8ArrayFilterPart01Test036
     * @tc.desc Verify filter val >= 0 keeps 0, 1, 2, on Int8Array.of(-1, 0, 1, -2, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test036() {
    Int8Array arr = Int8Array.of(-1, 0, 1, -2, 2);
    Int8Array result = arr.filter((val) -> {
        return val >= 0;
        });
    assertEqual(3, result.length());
    assertEqualInt(0, result.get(0));
    assertEqualInt(1, result.get(1));
    assertEqualInt(2, result.get(2));
    }

    /**
     * Verify filter throws RangeError when predicate meets val 0, on Int8Array.of(1, 0, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_3800
     * @tc.name int8ArrayFilterPart01Test038
     * @tc.desc Verify filter throws RangeError when predicate meets val 0, on Int8Array.of(1, 0, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test038() {
    Int8Array arr = Int8Array.of(1, 0, 3);
    try {
    Int8Array result = arr.filter((val) -> {
    if (val == 0) {
    throw new RangeError("zero");
    }
    return true;
    });
    int r1 = result.length();
    int e1 = 3;
    assertEqual(e1, r1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter throws Error when predicate meets val -128, on Int8Array.of(1, -128, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_4200
     * @tc.name int8ArrayFilterPart01Test042
     * @tc.desc Verify filter throws Error when predicate meets val -128, on Int8Array.of(1, -128, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test042() {
    Int8Array arr = Int8Array.of(1, -128, 3);
    try {
    Int8Array result = arr.filter((val) -> {
    if (val == -128) {
    return BasTest.throwTestError("min");
    }
    return true;
    });
    int r1 = result.length();
    int e1 = 3;
    assertEqual(e1, r1);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter throws Error when predicate meets val INT8_MAX, on Int8Array.of(INT8_MAX, 1, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_4300
     * @tc.name int8ArrayFilterPart01Test043
     * @tc.desc Verify filter throws Error when predicate meets val INT8_MAX, on Int8Array.of(INT8_MAX, 1, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test043() {
    Int8Array arr = Int8Array.of(INT8_MAX, 1, 3);
    try {
    Int8Array result = arr.filter((val) -> {
    if (val == INT8_MAX) {
    return BasTest.throwTestError("max");
    }
    return true;
    });
    int r1 = result.length();
    int e1 = 3;
    assertEqual(e1, r1);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter val > INT8_MAX returns empty result, on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_4800
     * @tc.name int8ArrayFilterPart01Test048
     * @tc.desc Verify filter val > INT8_MAX returns empty result, on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test048() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    Int8Array result = arr.filter((val) -> {
        return val > INT8_MAX;
        });
    assertEqual(0, result.length());
    }

    /**
     * Verify filter val < -128 returns empty result, BYTES_PER_ELEMENT still 1, on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_5000
     * @tc.name int8ArrayFilterPart01Test050
     * @tc.desc Verify filter val < -128 returns empty result, BYTES_PER_ELEMENT still 1, on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test050() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    Int8Array result = arr.filter((val) -> {
        return val < -128;
        });
    assertEqual(1, result.BYTES_PER_ELEMENT);
    assertEqual(0, result.length());
    }

    /**
     * Verify filter val > 8 keeps 10 and 15, on Int8Array.of(1, 5, 10, 15)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_5100
     * @tc.name int8ArrayFilterPart01Test051
     * @tc.desc Verify filter val > 8 keeps 10 and 15, on Int8Array.of(1, 5, 10, 15)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test051() {
    Int8Array arr = Int8Array.of(1, 5, 10, 15);
    int threshold = 8;
    Int8Array result = arr.filter((val) -> {
        return val > threshold;
        });
    assertEqual(2, result.length());
    assertEqualInt(10, result.get(0));
    assertEqualInt(15, result.get(1));
    }

    /**
     * Verify filter val > 15 && index < 3 keeps 20 and 30, on Int8Array.of(10, 20, 30, 40)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_5300
     * @tc.name int8ArrayFilterPart01Test053
     * @tc.desc Verify filter val > 15 && index < 3 keeps 20 and 30, on Int8Array.of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test053() {
    Int8Array arr = Int8Array.of(10, 20, 30, 40);
    Int8Array result = arr.filter((val, index) -> {
        return val > 15 && index < 3;
        });
    assertEqual(2, result.length());
    assertEqualInt(20, result.get(0));
    assertEqualInt(30, result.get(1));
    }

    /**
     * Verify filter val > array.$_get(0) keeps 20 and 30, on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_5400
     * @tc.name int8ArrayFilterPart01Test054
     * @tc.desc Verify filter val > array.$_get(0) keeps 20 and 30, on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test054() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    Int8Array result = arr.filter((val, unusedIndex, array) -> {
        return val > array.get(0);
        });
    assertEqual(2, result.length());
    assertEqualInt(20, result.get(0));
    assertEqualInt(30, result.get(1));
    }

    /**
     * Verify filter val > first element && index > 0 keeps 10, 15, 20, on Int8Array.of(5, 10, 15, 20)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_5500
     * @tc.name int8ArrayFilterPart01Test055
     * @tc.desc Verify filter val > first element && index > 0 keeps 10, 15, 20, on Int8Array.of(5, 10, 15, 20)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test055() {
    Int8Array arr = Int8Array.of(5, 10, 15, 20);
    Int8Array result = arr.filter((val, index, array) -> {
        return val > array.get(0) && index > 0 && array.length() == 4;
        });
    assertEqual(3, result.length());
    assertEqualInt(10, result.get(0));
    Integer r1 = result.get(1);
    int e1 = 15;
    assertEqualInt(e1, r1);
    Integer r2 = result.get(2);
    int e2 = 20;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify all -128 array, filter val === -128 keeps all
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_5700
     * @tc.name int8ArrayFilterPart01Test057
     * @tc.desc Verify all -128 array, filter val === -128 keeps all
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test057() {
    Int8Array arr = Int8Array.of(-128, -128, -128);
    Int8Array result = arr.filter((val) -> {
        return val == -128;
        });
    assertEqual(3, result.length());
    assertEqualInt(-128, result.get(0));
    Integer r1 = result.get(1);
    int e1 = -128;
    assertEqualInt(e1, r1);
    assertEqualInt(-128, result.get(2));
    }

    /**
     * Verify all 0 array, filter val === 0 keeps all
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_5800
     * @tc.name int8ArrayFilterPart01Test058
     * @tc.desc Verify all 0 array, filter val === 0 keeps all
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test058() {
    Int8Array arr = Int8Array.of(0, 0, 0);
    Int8Array result = arr.filter((val) -> {
        return val == 0;
        });
    assertEqual(3, result.length());
    }

    /**
     * Verify ascending [-128, -1, 0, 1, 127], filter val >= 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_5900
     * @tc.name int8ArrayFilterPart01Test059
     * @tc.desc Verify ascending [-128, -1, 0, 1, 127], filter val >= 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test059() {
    Int8Array arr = Int8Array.of(-128, -1, 0, 1, INT8_MAX);
    Int8Array result = arr.filter((val) -> {
        return val >= 0;
        });
    assertEqual(3, result.length());
    assertEqualInt(0, result.get(0));
    assertEqualInt(1, result.get(1));
    assertEqualInt(INT8_MAX, result.get(2));
    }

    /**
     * Verify descending [127, 1, 0, -1, -128], filter val < 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_6000
     * @tc.name int8ArrayFilterPart01Test060
     * @tc.desc Verify descending [127, 1, 0, -1, -128], filter val < 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test060() {
    Int8Array arr = Int8Array.of(INT8_MAX, 1, 0, -1, -128);
    Int8Array result = arr.filter((val) -> {
        return val < 0;
        });
    assertEqual(2, result.length());
    assertEqualInt(-1, result.get(0));
    assertEqualInt(-128, result.get(1));
    }

    /**
     * Verify filter result preserves source element order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_6100
     * @tc.name int8ArrayFilterPart01Test061
     * @tc.desc Verify filter result preserves source element order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test061() {
    Int8Array arr = Int8Array.of(3, 1, 4, 1, 5);
    Int8Array result = arr.filter((val) -> {
        return val > 2;
        });
    int r1 = result.length();
    int e1 = 3;
    assertEqual(e1, r1);
    assertEqualInt(3, result.get(0));
    assertEqualInt(4, result.get(1));
    assertEqualInt(5, result.get(2));
    }

    /**
     * Verify filter val > 0 || index === 0 keeps -1 and 3, on Int8Array.of(-1, -2, 3, -4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_6600
     * @tc.name int8ArrayFilterPart01Test066
     * @tc.desc Verify filter val > 0 || index === 0 keeps -1 and 3, on Int8Array.of(-1, -2, 3, -4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test066() {
    Int8Array arr = Int8Array.of(-1, -2, 3, -4);
    Int8Array result = arr.filter((val, index) -> {
        return val > 0 || index == 0;
        });
    assertEqual(2, result.length());
    assertEqualInt(-1, result.get(0));
    assertEqualInt(3, result.get(1));
    }

    /**
     * Verify mixed overflow array [128, -129, 255], filter val < 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_6800
     * @tc.name int8ArrayFilterPart01Test068
     * @tc.desc Verify mixed overflow array [128, -129, 255], filter val < 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test068() {
    Int8Array arr = Int8Array.of(128, -129, 255);
    Int8Array result = arr.filter((val) -> {
        return val < 0;
        });
    assertEqual(2, result.length());
    assertEqualInt(-128, result.get(0));
    assertEqualInt(-1, result.get(1));
    }

    /**
     * Verify filter result is independent copy (modifying result does not affect source)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_6900
     * @tc.name int8ArrayFilterPart01Test069
     * @tc.desc Verify filter result is independent copy (modifying result does not affect source)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test069() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    Int8Array result = arr.filter((val) -> {
        return val > 2;
        });
    result.set(0, -128);
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify single 0 element array, filter val === 0 keeps it
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_7000
     * @tc.name int8ArrayFilterPart01Test070
     * @tc.desc Verify single 0 element array, filter val === 0 keeps it
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test070() {
    Int8Array arr = Int8Array.of(0);
    Int8Array result = arr.filter((val) -> {
        return val == 0;
        });
    assertEqual(1, result.length());
    assertEqualInt(0, result.get(0));
    }

    /**
     * Verify single -128 element array, filter val < 0 keeps it
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_7100
     * @tc.name int8ArrayFilterPart01Test071
     * @tc.desc Verify single -128 element array, filter val < 0 keeps it
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test071() {
    Int8Array arr = Int8Array.of(-128);
    Int8Array result = arr.filter((val) -> {
        return val < 0;
        });
    assertEqual(1, result.length());
    assertEqualInt(-128, result.get(0));
    }

    /**
     * Verify fn uses Math.abs(val) for absolute value filtering
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_7300
     * @tc.name int8ArrayFilterPart01Test073
     * @tc.desc Verify fn uses Math.abs(val) for absolute value filtering
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test073() {
    Int8Array arr = Int8Array.of(1, -2, 3, -4);
    Int8Array result = arr.filter((val) -> {
        return Math.abs(val) > 2;
        });
    assertEqual(2, result.length());
    assertEqualInt(3, result.get(0));
    assertEqualInt(-4, result.get(1));
    }

    /**
     * Verify filter val > first element 50 keeps 60 and 70, on Int8Array.of(50, 60, 40, 70, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_7600
     * @tc.name int8ArrayFilterPart01Test076
     * @tc.desc Verify filter val > first element 50 keeps 60 and 70, on Int8Array.of(50, 60, 40, 70, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test076() {
    Int8Array arr = Int8Array.of(50, 60, 40, 70, 30);
    Integer firstVal = arr.get(0);
    Int8Array result = arr.filter((val) -> {
        return val > firstVal;
        });
    assertEqual(2, result.length());
    assertEqualInt(60, result.get(0));
    assertEqualInt(70, result.get(1));
    }

    /**
     * Verify alternating pos/neg array, filter val > 0 keeps positive sequence
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_7700
     * @tc.name int8ArrayFilterPart01Test077
     * @tc.desc Verify alternating pos/neg array, filter val > 0 keeps positive sequence
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test077() {
    Int8Array arr = Int8Array.of(1, -1, 2, -2, 3, -3);
    Int8Array result = arr.filter((val) -> {
        return val > 0;
        });
    assertEqual(3, result.length());
    assertEqualInt(1, result.get(0));
    assertEqualInt(2, result.get(1));
    assertEqualInt(3, result.get(2));
    }

    /**
     * Verify all positive array, filter val < 0 returns empty result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_7800
     * @tc.name int8ArrayFilterPart01Test078
     * @tc.desc Verify all positive array, filter val < 0 returns empty result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test078() {
    Int8Array arr = Int8Array.of(1, 2, 3, INT8_MAX);
    Int8Array result = arr.filter((val) -> {
        return val < 0;
        });
    assertEqual(0, result.length());
    }

    /**
     * Verify source array with Number.POSITIVE_INFINITY, filter val===127 returns emp
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_7900
     * @tc.name int8ArrayFilterPart01Test079
     * @tc.desc Verify source array with Number.POSITIVE_INFINITY, filter val===127 returns empty because ToInt8 yields
     * 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test079() {
    Int8Array arr = Int8Array.of(Double.POSITIVE_INFINITY);
    Int8Array result = arr.filter((val) -> {
        return val == 127;
        });
    assertEqual(0, result.length());
    }

    /**
     * Verify source array with Number.NEGATIVE_INFINITY, filter val===-128 returns em
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART01_8000
     * @tc.name int8ArrayFilterPart01Test080
     * @tc.desc Verify source array with Number.NEGATIVE_INFINITY, filter val===-128 returns empty because ToInt8
     * yields 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart01Test080() {
    Int8Array arr = Int8Array.of(-Double.POSITIVE_INFINITY);
    Int8Array result = arr.filter((val) -> {
        return val == -128;
        });
    assertEqual(0, result.length());
    }
}
