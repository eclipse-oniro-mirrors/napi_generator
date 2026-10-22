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
 * Int8ArrayConstructorPart04Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayConstructorPart04Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify length expects 3 on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_0100
     * @tc.name int8ArrayConstructorPart04Test001
     * @tc.desc Verify length expects 3 on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test001() {
    Int8Array src = new Int8Array(new int[] {10, 20, 30});
    Int8Array copied = new Int8Array(src);
    assertEqual(3, copied.length());
    }

    /**
     * Verify length expects 0 on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_0200
     * @tc.name int8ArrayConstructorPart04Test002
     * @tc.desc Verify length expects 0 on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test002() {
    Int8Array src = new Int8Array(0);
    Int8Array copied = new Int8Array(src);
    assertEqual(0, copied.length());
    }

    /**
     * Verify new Int8Array from ArrayLike [64] creates array with same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_0300
     * @tc.name int8ArrayConstructorPart04Test003
     * @tc.desc Verify new Int8Array from ArrayLike [64] creates array with same values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test003() {
    Int8Array src = new Int8Array(new int[] {64});
    Int8Array copied = new Int8Array(src);
    assertEqual(1, copied.length());
    Integer r1 = copied.get(0);
    int e1 = 64;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify new Int8Array from ArrayLike [7] creates array with same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_0400
     * @tc.name int8ArrayConstructorPart04Test004
     * @tc.desc Verify new Int8Array from ArrayLike [7] creates array with same values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test004() {
    Int8Array src = new Int8Array(new int[] {7});
    Int8Array copied = new Int8Array(src);
    assertEqual(1, copied.byteLength());
    Integer r1 = copied.get(0);
    int e1 = 7;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify length expects src.length, on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_0500
     * @tc.name int8ArrayConstructorPart04Test005
     * @tc.desc Verify length expects src.length, on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test005() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array copied = new Int8Array(src);
    int r1 = copied.length();
    int e1 = 5;
    assertEqual(e1, r1);
    }

    /**
     * Verify new Int8Array(src) preserves length when src has 1000 elements set via $_set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_0600
     * @tc.name int8ArrayConstructorPart04Test006
     * @tc.desc Verify new Int8Array(src) preserves length when src has 1000 elements set via $_set
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test006() {
    Int8Array src = new Int8Array(1000);
    src.set(0, 42);
    src.set(999, -42);
    Int8Array copied = new Int8Array(src);
    assertEqual(1000, copied.length());
    }

    /**
     * Verify new Int8Array from ArrayLike [-128] creates array with same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_0700
     * @tc.name int8ArrayConstructorPart04Test007
     * @tc.desc Verify new Int8Array from ArrayLike [-128] creates array with same values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test007() {
    Int8Array src = new Int8Array(new int[] {INT8_MIN});
    Int8Array copied = new Int8Array(src);
    Integer r1 = copied.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify new Int8Array from ArrayLike [INT8_MAX] creates array with same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_0800
     * @tc.name int8ArrayConstructorPart04Test008
     * @tc.desc Verify new Int8Array from ArrayLike [INT8_MAX] creates array with same values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test008() {
    Int8Array src = new Int8Array(new int[] {INT8_MAX});
    Int8Array copied = new Int8Array(src);
    assertEqualInt(INT8_MAX, copied.get(0));
    }

    /**
     * Verify new Int8Array from ArrayLike [0] creates array with same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_0900
     * @tc.name int8ArrayConstructorPart04Test009
     * @tc.desc Verify new Int8Array from ArrayLike [0] creates array with same values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test009() {
    Int8Array src = new Int8Array(new int[] {0});
    Int8Array copied = new Int8Array(src);
    assertEqualInt(0, copied.get(0));
    }

    /**
     * Verify new Int8Array from ArrayLike [-1] creates array with same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_1000
     * @tc.name int8ArrayConstructorPart04Test010
     * @tc.desc Verify new Int8Array from ArrayLike [-1] creates array with same values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test010() {
    Int8Array src = new Int8Array(new int[] {-1});
    Int8Array copied = new Int8Array(src);
    assertEqualInt(-1, copied.get(0));
    }

    /**
     * Verify $_get expects -128, after $_set(0, 128), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_1100
     * @tc.name int8ArrayConstructorPart04Test011
     * @tc.desc Verify $_get expects -128, after $_set(0, 128), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test011() {
    Int8Array src = new Int8Array(1);
    src.set(0, 128);
    Int8Array copied = new Int8Array(src);
    assertEqualInt(-128, copied.get(0));
    }

    /**
     * Verify $_get expects INT8_MAX, after $_set(0, -129), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_1200
     * @tc.name int8ArrayConstructorPart04Test012
     * @tc.desc Verify $_get expects INT8_MAX, after $_set(0, -129), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test012() {
    Int8Array src = new Int8Array(1);
    src.set(0, -129);
    Int8Array copied = new Int8Array(src);
    assertEqualInt(INT8_MAX, copied.get(0));
    }

    /**
     * Verify $_get expects -1, after $_set(0, 255), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_1300
     * @tc.name int8ArrayConstructorPart04Test013
     * @tc.desc Verify $_get expects -1, after $_set(0, 255), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test013() {
    Int8Array src = new Int8Array(1);
    src.set(0, 255);
    Int8Array copied = new Int8Array(src);
    assertEqualInt(-1, copied.get(0));
    }

    /**
     * Verify $_get expects 0, after $_set(0, 256), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_1400
     * @tc.name int8ArrayConstructorPart04Test014
     * @tc.desc Verify $_get expects 0, after $_set(0, 256), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test014() {
    Int8Array src = new Int8Array(1);
    src.set(0, 256);
    Int8Array copied = new Int8Array(src);
    assertEqualInt(0, copied.get(0));
    }

    /**
     * Verify $_get expects 0, after $_set(0, Number.NaN), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_1500
     * @tc.name int8ArrayConstructorPart04Test015
     * @tc.desc Verify $_get expects 0, after $_set(0, Number.NaN), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test015() {
    Int8Array src = new Int8Array(1);
    src.set(0, Double.NaN);
    Int8Array copied = new Int8Array(src);
    assertEqualInt(0, copied.get(0));
    }

    /**
     * Verify $_get expects 1, after $_set(0, 1.9), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_1600
     * @tc.name int8ArrayConstructorPart04Test016
     * @tc.desc Verify $_get expects 1, after $_set(0, 1.9), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test016() {
    Int8Array src = new Int8Array(1);
    src.set(0, 1.9);
    Int8Array copied = new Int8Array(src);
    assertEqualInt(1, copied.get(0));
    }

    /**
     * Verify $_get expects -1, after $_set(0, -1.9), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_1700
     * @tc.name int8ArrayConstructorPart04Test017
     * @tc.desc Verify $_get expects -1, after $_set(0, -1.9), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test017() {
    Int8Array src = new Int8Array(1);
    src.set(0, -1.9);
    Int8Array copied = new Int8Array(src);
    assertEqualInt(-1, copied.get(0));
    }

    /**
     * Verify $_get expects 0, after $_set(0, -0.0), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_1800
     * @tc.name int8ArrayConstructorPart04Test018
     * @tc.desc Verify $_get expects 0, after $_set(0, -0.0), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test018() {
    Int8Array src = new Int8Array(1);
    src.set(0, -0.0);
    Int8Array copied = new Int8Array(src);
    assertEqualInt(0, copied.get(0));
    }

    /**
     * Verify new Int8Array(new int[] {0, 0, 0, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_1900
     * @tc.name int8ArrayConstructorPart04Test019
     * @tc.desc Verify new Int8Array(new int[] {0, 0, 0, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test019() {
    Int8Array src = new Int8Array(new int[] {0, 0, 0, 0});
    Int8Array copied = new Int8Array(src);
    assertEqualInt(0, copied.get(2));
    }

    /**
     * Verify new Int8Array from ArrayLike [INT8_MAX, INT8_MAX, INT8_MAX] creates array with same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_2000
     * @tc.name int8ArrayConstructorPart04Test020
     * @tc.desc Verify new Int8Array from ArrayLike [INT8_MAX, INT8_MAX, INT8_MAX] creates array with same values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test020() {
    Int8Array src = new Int8Array(new int[] {INT8_MAX, INT8_MAX, INT8_MAX});
    Int8Array copied = new Int8Array(src);
    assertEqualInt(INT8_MAX, copied.get(1));
    }

    /**
     * Verify new Int8Array from ArrayLike [-128, -128, -128] creates array with same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_2100
     * @tc.name int8ArrayConstructorPart04Test021
     * @tc.desc Verify new Int8Array from ArrayLike [-128, -128, -128] creates array with same values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test021() {
    Int8Array src = new Int8Array(new int[] {INT8_MIN, INT8_MIN, INT8_MIN});
    Int8Array copied = new Int8Array(src);
    Integer r1 = copied.get(2);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify new Int8Array(new int[] {1, -1, 2, -2, 3, -3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_2200
     * @tc.name int8ArrayConstructorPart04Test022
     * @tc.desc Verify new Int8Array(new int[] {1, -1, 2, -2, 3, -3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test022() {
    Int8Array src = new Int8Array(new int[] {1, -1, 2, -2, 3, -3});
    Int8Array copied = new Int8Array(src);
    assertEqualInt(-2, copied.get(3));
    }

    /**
     * Verify subarray expects 3 subarray(1, 4) on new Int8Array(new int[] {10, 20, 30, 40, 50})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_2300
     * @tc.name int8ArrayConstructorPart04Test023
     * @tc.desc Verify subarray expects 3 subarray(1, 4) on new Int8Array(new int[] {10, 20, 30, 40, 50})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test023() {
    Int8Array base = new Int8Array(new int[] {10, 20, 30, 40, 50});
    Int8Array src = base.subarray(1, 4);
    Int8Array copied = new Int8Array(src);
    assertEqual(3, copied.length());
    }

    /**
     * Verify subarray expects 0 subarray(0, 0) on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_2400
     * @tc.name int8ArrayConstructorPart04Test024
     * @tc.desc Verify subarray expects 0 subarray(0, 0) on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test024() {
    Int8Array base = new Int8Array(new int[] {10, 20, 30});
    Int8Array src = base.subarray(0, 0);
    Int8Array copied = new Int8Array(src);
    assertEqual(0, copied.length());
    }

    /**
     * Verify subarray expects 20 subarray(1) on new Int8Array(new int[] {10, 20, 30, 40})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_2500
     * @tc.name int8ArrayConstructorPart04Test025
     * @tc.desc Verify subarray expects 20 subarray(1) on new Int8Array(new int[] {10, 20, 30, 40})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test025() {
    Int8Array base = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array src = base.subarray(1);
    Int8Array copied = new Int8Array(src);
    assertEqualInt(20, copied.get(0));
    }

    /**
     * Verify new Int8Array(buf, 4, 2) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_2600
     * @tc.name int8ArrayConstructorPart04Test026
     * @tc.desc Verify new Int8Array(buf, 4, 2) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test026() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 4, 2);
    Int8Array copied = new Int8Array(view);
    assertEqual(0, copied.byteOffset());
    }

    /**
     * Verify new Int8Array(buf, 2, 3) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_2700
     * @tc.name int8ArrayConstructorPart04Test027
     * @tc.desc Verify new Int8Array(buf, 2, 3) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test027() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array view = new Int8Array(buf, 2, 3);
    view.set(0, 11);
    view.set(1, 22);
    view.set(2, 33);
    Int8Array copied = new Int8Array(view);
    assertEqualInt(22, copied.get(1));
    }

    /**
     * Verify new Int8Array(new int[] {5, 6, 7, 8})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_2800
     * @tc.name int8ArrayConstructorPart04Test028
     * @tc.desc Verify new Int8Array(new int[] {5, 6, 7, 8})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test028() {
    Int8Array base = new Int8Array(new int[] {5, 6, 7, 8});
    Int8Array src = base.slice(1, 3);
    Int8Array copied = new Int8Array(src);
    assertEqualInt(6, copied.get(0));
    }

    /**
     * Verify new Int8Array from ArrayLike [100, -100] creates array with same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_2900
     * @tc.name int8ArrayConstructorPart04Test029
     * @tc.desc Verify new Int8Array from ArrayLike [100, -100] creates array with same values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test029() {
    Int8Array original = new Int8Array(new int[] {100, -100});
    Int8Array mid = new Int8Array(original);
    Int8Array copied = new Int8Array(mid);
    assertEqualInt(-100, copied.get(1));
    }

    /**
     * Verify reverse expects 3 on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_3000
     * @tc.name int8ArrayConstructorPart04Test030
     * @tc.desc Verify reverse expects 3 on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test030() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    src.reverse();
    Int8Array copied = new Int8Array(src);
    assertEqualInt(3, copied.get(0));
    }

    /**
     * Verify new Int8Array from ArrayLike [3, 1, 2] creates array with same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_3100
     * @tc.name int8ArrayConstructorPart04Test031
     * @tc.desc Verify new Int8Array from ArrayLike [3, 1, 2] creates array with same values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test031() {
    Int8Array src = new Int8Array(new int[] {3, 1, 2});
    src.sort();
    Int8Array copied = new Int8Array(src);
    assertEqualInt(1, copied.get(0));
    }

    /**
     * Verify new Int8Array(src) copies fill value 55 from zero-filled src of length 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_3200
     * @tc.name int8ArrayConstructorPart04Test032
     * @tc.desc Verify new Int8Array(src) copies fill value 55 from zero-filled src of length 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test032() {
    Int8Array src = new Int8Array(4);
    src.fill(55);
    Int8Array copied = new Int8Array(src);
    assertEqualInt(55, copied.get(3));
    }

    /**
     * Verify new Int8Array(src) after src.copyWithin(0, 3, 5) preserves modified content, $_get(0) expects 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_3300
     * @tc.name int8ArrayConstructorPart04Test033
     * @tc.desc Verify new Int8Array(src) after src.copyWithin(0, 3, 5) preserves modified content, $_get(0) expects 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test033() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3, 4, 5});
    src.copyWithin(0, 3, 5);
    Int8Array copied = new Int8Array(src);
    assertEqualInt(4, copied.get(0));
    }

    /**
     * Verify length expects src.length, on new Int8Array(new int[] {1, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_3400
     * @tc.name int8ArrayConstructorPart04Test034
     * @tc.desc Verify length expects src.length, on new Int8Array(new int[] {1, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test034() {
    Int8Array src = new Int8Array(new int[] {1, 2});
    Int8Array copied = new Int8Array(src);
    int r1 = copied.length();
    int e1 = 2;
    assertEqual(e1, r1);
    }

    /**
     * Verify length expects src.length, on new Int8Array(new int[] {9, 8, 7, 6})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_3500
     * @tc.name int8ArrayConstructorPart04Test035
     * @tc.desc Verify length expects src.length, on new Int8Array(new int[] {9, 8, 7, 6})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test035() {
    Int8Array src = new Int8Array(new int[] {9, 8, 7, 6});
    Int8Array copied = new Int8Array(src);
    int r1 = copied.length();
    int e1 = 4;
    assertEqual(e1, r1);
    }

    /**
     * Verify byteLength of copied Int8Array equals src.byteLength, on new Int8Array(new int[] {9, 8, 7, 6})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_3600
     * @tc.name int8ArrayConstructorPart04Test036
     * @tc.desc Verify byteLength of copied Int8Array equals src.byteLength, on new Int8Array(new int[] {9, 8, 7, 6})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test036() {
    Int8Array src = new Int8Array(new int[] {9, 8, 7, 6});
    Int8Array copied = new Int8Array(src);
    int r1 = copied.byteLength();
    int e1 = 4;
    assertEqual(e1, r1);
    }

    /**
     * Verify byteOffset of new Int8Array(new int[] {1, 2, 3}) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_3700
     * @tc.name int8ArrayConstructorPart04Test037
     * @tc.desc Verify byteOffset of new Int8Array(new int[] {1, 2, 3}) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test037() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    Int8Array copied = new Int8Array(src);
    assertEqual(0, copied.byteOffset());
    }

    /**
     * Verify copied Int8Array buffer is independent (not same reference) from src.buf
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_3800
     * @tc.name int8ArrayConstructorPart04Test038
     * @tc.desc Verify copied Int8Array buffer is independent (not same reference) from src.buffer, on new
     * Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test038() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    Int8Array copied = new Int8Array(src);
    assertNotEqual(src.buffer(), copied.buffer());
    }

    /**
     * Verify buffer.byteLength of new Int8Array(new int[] {1, 2}) returns src.length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_3900
     * @tc.name int8ArrayConstructorPart04Test039
     * @tc.desc Verify buffer.byteLength of new Int8Array(new int[] {1, 2}) returns src.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test039() {
    Int8Array src = new Int8Array(new int[] {1, 2});
    Int8Array copied = new Int8Array(src);
    assertEqual(src.length(), copied.buffer().byteLength());
    }

    /**
     * Verify $_get expects src.$_get(4) on new Int8Array(new int[] {10, 20, 30, 40, 50})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_4000
     * @tc.name int8ArrayConstructorPart04Test040
     * @tc.desc Verify $_get expects src.$_get(4) on new Int8Array(new int[] {10, 20, 30, 40, 50})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test040() {
    Int8Array src = new Int8Array(new int[] {10, 20, 30, 40, 50});
    Int8Array copied = new Int8Array(src);
    Integer r1 = copied.get(4);
    int e1 = 50;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify toString expects src.toString() on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_4100
     * @tc.name int8ArrayConstructorPart04Test041
     * @tc.desc Verify toString expects src.toString() on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test041() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    Int8Array copied = new Int8Array(src);
    String r1 = String.valueOf(copied);
    String e1 = "1,2,3";
    assertEqual(e1, r1);
    }

    /**
     * Verify new Int8Array from ArrayLike [10, 20, 30] creates array with same values equals
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_4200
     * @tc.name int8ArrayConstructorPart04Test042
     * @tc.desc Verify new Int8Array from ArrayLike [10, 20, 30] creates array with same values equals
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test042() {
    Int8Array src = new Int8Array(new int[] {10, 20, 30});
    Int8Array copied = new Int8Array(src);
    String r1 = copied.join(",");
    String e1 = "10,20,30";
    assertEqual(e1, r1);
    }

    /**
     * Verify join expects src.join() on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_4300
     * @tc.name int8ArrayConstructorPart04Test043
     * @tc.desc Verify join expects src.join() on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test043() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    Int8Array copied = new Int8Array(src);
    String r1 = copied.join("");
    String e1 = "123";
    assertEqual(e1, r1);
    }

    /**
     * Verify new Int8Array from ArrayLike [42, 20, 30] creates array with same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_4400
     * @tc.name int8ArrayConstructorPart04Test044
     * @tc.desc Verify new Int8Array from ArrayLike [42, 20, 30] creates array with same values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test044() {
    Int8Array src = new Int8Array(new int[] {42, 20, 30});
    Int8Array copied = new Int8Array(src);
    assertEqual(0, copied.indexOf(42));
    }

    /**
     * Verify new Int8Array from ArrayLike [10, 20, 99] creates array with same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_4500
     * @tc.name int8ArrayConstructorPart04Test045
     * @tc.desc Verify new Int8Array from ArrayLike [10, 20, 99] creates array with same values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test045() {
    Int8Array src = new Int8Array(new int[] {10, 20, 99});
    Int8Array copied = new Int8Array(src);
    assertEqual(2, copied.lastIndexOf(99));
    }

    /**
     * Verify new Int8Array from ArrayLike [42, 20, 30] creates array with same values returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_4600
     * @tc.name int8ArrayConstructorPart04Test046
     * @tc.desc Verify new Int8Array from ArrayLike [42, 20, 30] creates array with same values returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test046() {
    Int8Array src = new Int8Array(new int[] {42, 20, 30});
    Int8Array copied = new Int8Array(src);
    boolean actualIncludes = copied.includes(42);
    assertTrue(actualIncludes);
    }

    /**
     * Verify at expects src.at(0) on new Int8Array(new int[] {7, 8, 9})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_4700
     * @tc.name int8ArrayConstructorPart04Test047
     * @tc.desc Verify at expects src.at(0) on new Int8Array(new int[] {7, 8, 9})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test047() {
    Int8Array src = new Int8Array(new int[] {7, 8, 9});
    Int8Array copied = new Int8Array(src);
    Integer r1 = copied.at(0);
    int e1 = 7;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify at expects src.at(-1) on new Int8Array(new int[] {7, 8, 9})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_4800
     * @tc.name int8ArrayConstructorPart04Test048
     * @tc.desc Verify at expects src.at(-1) on new Int8Array(new int[] {7, 8, 9})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test048() {
    Int8Array src = new Int8Array(new int[] {7, 8, 9});
    Int8Array copied = new Int8Array(src);
    Integer r1 = copied.at(-1);
    int e1 = 9;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify equals 1 for Int8Array BYTES_PER_ELEMENT on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_4900
     * @tc.name int8ArrayConstructorPart04Test049
     * @tc.desc Verify equals 1 for Int8Array BYTES_PER_ELEMENT on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test049() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    Int8Array copied = new Int8Array(src);
    assertEqual(1, copied.BYTES_PER_ELEMENT);
    }

    /**
     * Verify copied Int8Array buffer is independent (not same reference) from src.buf
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_5000
     * @tc.name int8ArrayConstructorPart04Test050
     * @tc.desc Verify copied Int8Array buffer is independent (not same reference) from src.buffer, on new
     * Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test050() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array copied = new Int8Array(src);
    assertNotEqual(src.buffer(), copied.buffer());
    }

    /**
     * Verify $_get expects 10, after $_set(0, 99), on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_5100
     * @tc.name int8ArrayConstructorPart04Test051
     * @tc.desc Verify $_get expects 10, after $_set(0, 99), on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test051() {
    Int8Array src = new Int8Array(new int[] {10, 20, 30});
    Int8Array copied = new Int8Array(src);
    copied.set(0, 99);
    assertEqualInt(10, src.get(0));
    }

    /**
     * Verify $_get expects 10, after $_set(0, 88), on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_5200
     * @tc.name int8ArrayConstructorPart04Test052
     * @tc.desc Verify $_get expects 10, after $_set(0, 88), on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test052() {
    Int8Array src = new Int8Array(new int[] {10, 20, 30});
    Int8Array copied = new Int8Array(src);
    src.set(0, 88);
    assertEqualInt(10, copied.get(0));
    }

    /**
     * Verify fill expects 22 on new Int8Array(new int[] {11, 22, 33})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_5300
     * @tc.name int8ArrayConstructorPart04Test053
     * @tc.desc Verify fill expects 22 on new Int8Array(new int[] {11, 22, 33})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test053() {
    Int8Array src = new Int8Array(new int[] {11, 22, 33});
    Int8Array copied = new Int8Array(src);
    src.fill(0);
    assertEqualInt(22, copied.get(1));
    }

    /**
     * Verify fill expects 33 on new Int8Array(new int[] {11, 22, 33})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_5400
     * @tc.name int8ArrayConstructorPart04Test054
     * @tc.desc Verify fill expects 33 on new Int8Array(new int[] {11, 22, 33})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test054() {
    Int8Array src = new Int8Array(new int[] {11, 22, 33});
    Int8Array copied = new Int8Array(src);
    copied.fill(INT8_MAX);
    assertEqualInt(33, src.get(2));
    }

    /**
     * Verify reverse expects 1, on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_5500
     * @tc.name int8ArrayConstructorPart04Test055
     * @tc.desc Verify reverse expects 1, on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test055() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array copied = new Int8Array(src);
    src.reverse();
    assertEqualInt(1, copied.get(0));
    }

    /**
     * Verify new Int8Array(new int[] {5, 3, 1, 4, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_5600
     * @tc.name int8ArrayConstructorPart04Test056
     * @tc.desc Verify new Int8Array(new int[] {5, 3, 1, 4, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test056() {
    Int8Array src = new Int8Array(new int[] {5, 3, 1, 4, 2});
    Int8Array copied = new Int8Array(src);
    src.sort();
    Integer r1 = copied.get(0);
    int e1 = 5;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify copyWithin expects 1 on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_5700
     * @tc.name int8ArrayConstructorPart04Test057
     * @tc.desc Verify copyWithin expects 1 on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test057() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array copied = new Int8Array(src);
    copied.copyWithin(0, 3, 5);
    Integer r1 = src.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get expects 1, after $_set(0, 77), on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_5800
     * @tc.name int8ArrayConstructorPart04Test058
     * @tc.desc Verify $_get expects 1, after $_set(0, 77), on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test058() {
    Int8Array a = new Int8Array(new int[] {1, 2, 3});
    Int8Array b = new Int8Array(a);
    Int8Array c = new Int8Array(b);
    c.set(0, 77);
    Integer r1 = a.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get expects 1, after $_set(0, 88), on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_5900
     * @tc.name int8ArrayConstructorPart04Test059
     * @tc.desc Verify $_get expects 1, after $_set(0, 88), on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test059() {
    Int8Array a = new Int8Array(new int[] {1, 2, 3});
    Int8Array b = new Int8Array(a);
    Int8Array c = new Int8Array(b);
    a.set(0, 88);
    Integer r1 = c.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get expects 1, after $_set(0, 66), on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_6000
     * @tc.name int8ArrayConstructorPart04Test060
     * @tc.desc Verify $_get expects 1, after $_set(0, 66), on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test060() {
    Int8Array a = new Int8Array(new int[] {1, 2, 3});
    Int8Array b = new Int8Array(a);
    Int8Array c = new Int8Array(b);
    b.set(0, 66);
    Integer r1 = a.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    assertEqualInt(1, c.get(0));
    }

    /**
     * Verify copied array is isolated: modifying copied does not affect base, on new
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_6100
     * @tc.name int8ArrayConstructorPart04Test061
     * @tc.desc Verify copied array is isolated: modifying copied does not affect base, on new
     * Int8Array([10, 20, 30, 40])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test061() {
    Int8Array base = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array src = base.subarray(1, 3);
    Int8Array copied = new Int8Array(src);
    copied.set(0, 99);
    assertEqualInt(20, base.get(1));
    }

    /**
     * Verify copied array is isolated: modifying base does not affect copied, on new
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_6200
     * @tc.name int8ArrayConstructorPart04Test062
     * @tc.desc Verify copied array is isolated: modifying base does not affect copied, on new
     * Int8Array([10, 20, 30, 40])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test062() {
    Int8Array base = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array src = base.subarray(1, 3);
    Int8Array copied = new Int8Array(src);
    base.set(1, 55);
    assertEqualInt(20, copied.get(0));
    }

    /**
     * Verify new Int8Array(src) from ArrayBuffer offset view resets byteOffset to 0, $_set value preserved
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_6300
     * @tc.name int8ArrayConstructorPart04Test063
     * @tc.desc Verify new Int8Array(src) from ArrayBuffer offset view resets byteOffset to 0, $_set value preserved
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test063() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array src = new Int8Array(buf, 4, 3);
    src.set(0, 33);
    Int8Array copied = new Int8Array(src);
    assertEqual(0, copied.byteOffset());
    Integer r1 = copied.get(0);
    int e1 = 33;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify modifying copied does not affect src, on new Int8Array(buf, 4, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_6400
     * @tc.name int8ArrayConstructorPart04Test064
     * @tc.desc Verify modifying copied does not affect src, on new Int8Array(buf, 4, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test064() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array src = new Int8Array(buf, 4, 3);
    src.set(0, 33);
    Int8Array copied = new Int8Array(src);
    copied.set(0, 99);
    assertEqualInt(33, src.get(0));
    }

    /**
     * Verify modifying src after copy does not affect copied, on new Int8Array(buf, 4, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_6401
     * @tc.name int8ArrayConstructorPart04Test064b
     * @tc.desc Verify modifying src after copy does not affect copied, on new Int8Array(buf, 4, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test064b() {
    ArrayBuffer buf2 = new ArrayBuffer(8);
    Int8Array src2 = new Int8Array(buf2, 4, 3);
    src2.set(0, 33);
    Int8Array copied2 = new Int8Array(src2);
    src2.set(0, 77);
    Integer r1 = copied2.get(0);
    int e1 = 33;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify copied subarray is isolated: modifying subCopied does not affect subSrc,
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_6500
     * @tc.name int8ArrayConstructorPart04Test065
     * @tc.desc Verify copied subarray is isolated: modifying subCopied does not affect subSrc,
     * on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test065() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3, 4});
    Int8Array copied = new Int8Array(src);
    Int8Array subSrc = src.subarray(0, 2);
    Int8Array subCopied = copied.subarray(0, 2);
    subCopied.set(0, 99);
    assertEqualInt(1, subSrc.get(0));
    }

    /**
     * Verify byteLength of copied Int8Array equals src.byteLength, on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_6600
     * @tc.name int8ArrayConstructorPart04Test066
     * @tc.desc Verify byteLength of copied Int8Array equals src.byteLength, on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test066() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array copied = new Int8Array(src);
    int r1 = copied.buffer().byteLength();
    int e1 = 5;
    assertEqual(e1, r1);
    }

    /**
     * Verify fill expects 30 on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_6700
     * @tc.name int8ArrayConstructorPart04Test067
     * @tc.desc Verify fill expects 30 on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test067() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    Int8Array copied = new Int8Array(src);
    src.fill(10);
    copied.fill(20);
    assertEqual(30, src.get(0) + copied.get(0));
    }

    /**
     * Verify buffer.byteLength of new Int8Array(0) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_6800
     * @tc.name int8ArrayConstructorPart04Test068
     * @tc.desc Verify buffer.byteLength of new Int8Array(0) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test068() {
    Int8Array src = new Int8Array(0);
    Int8Array copied = new Int8Array(src);
    assertEqual(0, copied.buffer().byteLength());
    }

    /**
     * Verify byteOffset of new Int8Array(0) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_6900
     * @tc.name int8ArrayConstructorPart04Test069
     * @tc.desc Verify byteOffset of new Int8Array(0) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test069() {
    Int8Array src = new Int8Array(0);
    Int8Array copied = new Int8Array(src);
    assertEqual(0, copied.byteOffset());
    }

    /**
     * Verify toString on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_7000
     * @tc.name int8ArrayConstructorPart04Test070
     * @tc.desc Verify toString on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test070() {
    Int8Array src = new Int8Array(0);
    Int8Array copied = new Int8Array(src);
    String actualToString = String.valueOf(copied);
    String expected1 = "";
    assertEqual(expected1, actualToString);
    }

    /**
     * Verify new Int8Array from ArrayLike [42] creates array with same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_7100
     * @tc.name int8ArrayConstructorPart04Test071
     * @tc.desc Verify new Int8Array from ArrayLike [42] creates array with same values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test071() {
    Int8Array src = new Int8Array(new int[] {42});
    Int8Array copied = new Int8Array(src);
    assertEqual(1, copied.length());
    }

    /**
     * Verify $_get expects -55 on new Int8Array(1000)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_7200
     * @tc.name int8ArrayConstructorPart04Test072
     * @tc.desc Verify $_get expects -55 on new Int8Array(1000)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test072() {
    Int8Array src = new Int8Array(1000);
    src.set(999, -55);
    Int8Array copied = new Int8Array(src);
    assertEqualInt(-55, copied.get(999));
    }

    /**
     * Verify $_get expects 55 on new Int8Array(1000)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_7300
     * @tc.name int8ArrayConstructorPart04Test073
     * @tc.desc Verify $_get expects 55 on new Int8Array(1000)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test073() {
    Int8Array src = new Int8Array(1000);
    src.set(0, 55);
    Int8Array copied = new Int8Array(src);
    assertEqualInt(55, copied.get(0));
    }

    /**
     * Verify forEach expects 0 on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_7400
     * @tc.name int8ArrayConstructorPart04Test074
     * @tc.desc Verify forEach expects 0 on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test074() {
    Int8Array src = new Int8Array(0);
    Int8Array copied = new Int8Array(src);
    int[] count = {0};
    copied.forEach((v) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    count[0] = count[0] + 1;
    });
    assertEqual(0, count[0]);
    }

    /**
     * Verify at returns undefined on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_7500
     * @tc.name int8ArrayConstructorPart04Test075
     * @tc.desc Verify at returns undefined on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test075() {
    Int8Array src = new Int8Array(0);
    Int8Array copied = new Int8Array(src);
    assertNull(copied.at(0));
    }

    /**
     * Verify new Int8Array(new int[] {-128, INT8_MAX, -128, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_7600
     * @tc.name int8ArrayConstructorPart04Test076
     * @tc.desc Verify new Int8Array(new int[] {-128, INT8_MAX, -128, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test076() {
    Int8Array src = new Int8Array(new int[] {INT8_MIN, INT8_MAX, INT8_MIN, INT8_MAX});
    Int8Array copied = new Int8Array(src);
    Integer r1 = copied.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    assertEqualInt(INT8_MAX, copied.get(1));
    }

    /**
     * Verify subarray expects base.length subarray(0) on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_7700
     * @tc.name int8ArrayConstructorPart04Test077
     * @tc.desc Verify subarray expects base.length subarray(0) on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test077() {
    Int8Array base = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array src = base.subarray(0);
    Int8Array copied = new Int8Array(src);
    assertEqual(base.length(), copied.length());
    }

    /**
     * Verify new Int8Array(src.toReversed()) preserves reversed order, $_get(0) expects 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_7800
     * @tc.name int8ArrayConstructorPart04Test078
     * @tc.desc Verify new Int8Array(src.toReversed()) preserves reversed order, $_get(0) expects 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test078() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    Int8Array reversed = src.toReversed();
    Int8Array copied = new Int8Array(reversed);
    assertEqualInt(3, copied.get(0));
    }

    /**
     * Verify with() on new Int8Array returns 99
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_7900
     * @tc.name int8ArrayConstructorPart04Test079
     * @tc.desc Verify with() on new Int8Array returns 99
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test079() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    Int8Array modified = src.with(1, 99);
    Int8Array copied = new Int8Array(modified);
    assertEqualInt(99, copied.get(1));
    }

    /**
     * Verify $_get expects 1, after $_set(0, 50), on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_8000
     * @tc.name int8ArrayConstructorPart04Test080
     * @tc.desc Verify $_get expects 1, after $_set(0, 50), on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test080() {
    Int8Array src = new Int8Array(new int[] {1, 2, 3});
    Int8Array first = new Int8Array(src);
    Int8Array second = new Int8Array(first);
    second.set(0, 50);
    assertEqualInt(1, first.get(0));
    }

    /**
     * Verify $_get expects 0, after $_set(0, Number.POSITIVE_INFINITY), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_8100
     * @tc.name int8ArrayConstructorPart04Test081
     * @tc.desc Verify $_get expects 0, after $_set(0, Number.POSITIVE_INFINITY), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test081() {
    Int8Array src = new Int8Array(1);
    src.set(0, Double.POSITIVE_INFINITY);
    Int8Array copied = new Int8Array(src);
    assertEqualInt(0, copied.get(0));
    }

    /**
     * Verify $_get expects 0, after $_set(0, Number.NEGATIVE_INFINITY), on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART04_TEST_8200
     * @tc.name int8ArrayConstructorPart04Test082
     * @tc.desc Verify $_get expects 0, after $_set(0, Number.NEGATIVE_INFINITY), on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart04Test082() {
    Int8Array src = new Int8Array(1);
    src.set(0, Double.NEGATIVE_INFINITY);
    Int8Array copied = new Int8Array(src);
    assertEqualInt(0, copied.get(0));
    }
}
