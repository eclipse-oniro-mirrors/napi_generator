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

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayConstructorPart05Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayConstructorPart05Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify length expects 2 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_0100
     * @tc.name int8ArrayConstructorPart05Test001
     * @tc.desc Verify length expects 2 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test001() {
    double[] fa = new double[] {10, 20};
    Int8Array arr = new Int8Array(fa);
    assertEqual(2, arr.length());
    }

    /**
     * Verify length expects 1 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_0200
     * @tc.name int8ArrayConstructorPart05Test002
     * @tc.desc Verify length expects 1 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test002() {
    double[] fa = new double[] {7};
    Int8Array arr = new Int8Array(fa);
    assertEqual(1, arr.length());
    }

    /**
     * Verify $_get expects 1, on new Int8Array(new int[] {42})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_0300
     * @tc.name int8ArrayConstructorPart05Test003
     * @tc.desc Verify $_get expects 1, on new Int8Array(new int[] {42})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test003() {
    double[] fa = new double[] {42};
    Int8Array arr = new Int8Array(fa);
    assertEqual(1, arr.length());
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify $_get expects 3 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_0400
     * @tc.name int8ArrayConstructorPart05Test004
     * @tc.desc Verify $_get expects 3 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test004() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    assertEqual(3, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify $_get expects 12 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_0500
     * @tc.name int8ArrayConstructorPart05Test005
     * @tc.desc Verify $_get expects 12 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test005() {
    double[] fa = new double[] {INT8_MAX, -128, 0, 64, -64, 100, -100, 32, -32, 1, -1, 50};
    Int8Array arr = new Int8Array(fa);
    assertEqual(12, arr.length());
    assertEqualInt(INT8_MAX, arr.get(0));
    assertEqualInt(-100, arr.get(6));
    assertEqualInt(50, arr.get(11));
    }

    /**
     * Verify $_get expects 0, on new Int8Array(new int[] {0, 0, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_0600
     * @tc.name int8ArrayConstructorPart05Test006
     * @tc.desc Verify $_get expects 0, on new Int8Array(new int[] {0, 0, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test006() {
    double[] fa = new double[] {0, 0, 0};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX, INT8_MAX, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_0700
     * @tc.name int8ArrayConstructorPart05Test007
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX, INT8_MAX, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test007() {
    double[] fa = new double[] {INT8_MAX, INT8_MAX, INT8_MAX};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(INT8_MAX, arr.get(0));
    assertEqualInt(INT8_MAX, arr.get(1));
    assertEqualInt(INT8_MAX, arr.get(2));
    }

    /**
     * Verify $_get expects -128, on new Int8Array(new int[] {-128, -128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_0800
     * @tc.name int8ArrayConstructorPart05Test008
     * @tc.desc Verify $_get expects -128, on new Int8Array(new int[] {-128, -128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test008() {
    double[] fa = new double[] {-128, -128};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-128, arr.get(1));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX, -128, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_0900
     * @tc.name int8ArrayConstructorPart05Test009
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX, -128, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test009() {
    double[] fa = new double[] {INT8_MAX, -128, 0};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(INT8_MAX, arr.get(0));
    assertEqualInt(-128, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify $_get expects 10, on new Int8Array(new int[] {10, 10, 20, 20})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_1000
     * @tc.name int8ArrayConstructorPart05Test010
     * @tc.desc Verify $_get expects 10, on new Int8Array(new int[] {10, 10, 20, 20})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test010() {
    double[] fa = new double[] {10, 10, 20, 20};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(20, arr.get(2));
    assertEqualInt(20, arr.get(3));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX, 30, 50})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_1100
     * @tc.name int8ArrayConstructorPart05Test011
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX, 30, 50})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test011() {
    double[] fa = new double[] {INT8_MAX, 30, 50};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(INT8_MAX, arr.get(0));
    assertEqualInt(50, arr.get(2));
    }

    /**
     * Verify $_get expects 50 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_1200
     * @tc.name int8ArrayConstructorPart05Test012
     * @tc.desc Verify $_get expects 50 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test012() {
    double[] fa = new double[] {50, 30, -128};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(50, arr.get(0));
    assertEqualInt(-128, arr.get(2));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX, -128, INT8_MAX, -128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_1300
     * @tc.name int8ArrayConstructorPart05Test013
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX, -128, INT8_MAX, -128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test013() {
    double[] fa = new double[] {INT8_MAX, -128, INT8_MAX, -128};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(INT8_MAX, arr.get(0));
    assertEqualInt(-128, arr.get(1));
    assertEqualInt(INT8_MAX, arr.get(2));
    assertEqualInt(-128, arr.get(3));
    }

    /**
     * Verify $_get expects 0, on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_1400
     * @tc.name int8ArrayConstructorPart05Test014
     * @tc.desc Verify $_get expects 0, on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test014() {
    double[] fa = new double[] {0};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects 1, on new Int8Array(new int[] {1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_1500
     * @tc.name int8ArrayConstructorPart05Test015
     * @tc.desc Verify $_get expects 1, on new Int8Array(new int[] {1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test015() {
    double[] fa = new double[] {1};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_1600
     * @tc.name int8ArrayConstructorPart05Test016
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test016() {
    double[] fa = new double[] {INT8_MAX};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new int[] {-1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_1700
     * @tc.name int8ArrayConstructorPart05Test017
     * @tc.desc Verify $_get expects -1, on new Int8Array(new int[] {-1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test017() {
    double[] fa = new double[] {-1};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_get expects -128, on new Int8Array(new int[] {-128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_1800
     * @tc.name int8ArrayConstructorPart05Test018
     * @tc.desc Verify $_get expects -128, on new Int8Array(new int[] {-128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test018() {
    double[] fa = new double[] {-128};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify $_get expects -128, on new Int8Array(new int[] {128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_1900
     * @tc.name int8ArrayConstructorPart05Test019
     * @tc.desc Verify $_get expects -128, on new Int8Array(new int[] {128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test019() {
    double[] fa = new double[] {128};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(-128, arr.get(0));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(new int[] {-129})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_2000
     * @tc.name int8ArrayConstructorPart05Test020
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(new int[] {-129})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test020() {
    double[] fa = new double[] {-129};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new int[] {255})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_2100
     * @tc.name int8ArrayConstructorPart05Test021
     * @tc.desc Verify $_get expects -1, on new Int8Array(new int[] {255})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test021() {
    double[] fa = new double[] {255};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_get expects 0, on new Int8Array(new int[] {256})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_2200
     * @tc.name int8ArrayConstructorPart05Test022
     * @tc.desc Verify $_get expects 0, on new Int8Array(new int[] {256})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test022() {
    double[] fa = new double[] {256};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects 0, on new Int8Array(new int[] {-256})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_2300
     * @tc.name int8ArrayConstructorPart05Test023
     * @tc.desc Verify $_get expects 0, on new Int8Array(new int[] {-256})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test023() {
    double[] fa = new double[] {-256};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new int[] {2147483647})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_2400
     * @tc.name int8ArrayConstructorPart05Test024
     * @tc.desc Verify $_get expects -1, on new Int8Array(new int[] {2147483647})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test024() {
    double[] fa = new double[] {2147483647};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_get expects 0, on new Int8Array(new int[] {-2147483648})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_2500
     * @tc.name int8ArrayConstructorPart05Test025
     * @tc.desc Verify $_get expects 0, on new Int8Array(new int[] {-2147483648})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test025() {
    double[] fa = new double[] {Integer.MIN_VALUE};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX, 128, -128, -129})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_2600
     * @tc.name int8ArrayConstructorPart05Test026
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX, 128, -128, -129})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test026() {
    double[] fa = new double[] {INT8_MAX, 128, -128, -129};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(INT8_MAX, arr.get(0));
    assertEqualInt(-128, arr.get(1));
    assertEqualInt(-128, arr.get(2));
    assertEqualInt(INT8_MAX, arr.get(3));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new int[] {255, 256, 0, 1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_2700
     * @tc.name int8ArrayConstructorPart05Test027
     * @tc.desc Verify $_get expects -1, on new Int8Array(new int[] {255, 256, 0, 1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test027() {
    double[] fa = new double[] {255, 256, 0, 1};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(-1, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(1, arr.get(3));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new int[] {2147483647, -2147483648, 128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_2800
     * @tc.name int8ArrayConstructorPart05Test028
     * @tc.desc Verify $_get expects -1, on new Int8Array(new int[] {2147483647, -2147483648, 128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test028() {
    double[] fa = new double[] {2147483647, Integer.MIN_VALUE, 128};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(-1, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(-128, arr.get(2));
    }

    /**
     * Verify $_get expects -128, on new Int8Array(new int[] {128, 128, 128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_2900
     * @tc.name int8ArrayConstructorPart05Test029
     * @tc.desc Verify $_get expects -128, on new Int8Array(new int[] {128, 128, 128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test029() {
    double[] fa = new double[] {128, 128, 128};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-128, arr.get(1));
    assertEqualInt(-128, arr.get(2));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(new int[] {-129, -129, -129})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_3000
     * @tc.name int8ArrayConstructorPart05Test030
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(new int[] {-129, -129, -129})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test030() {
    double[] fa = new double[] {-129, -129, -129};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(INT8_MAX, arr.get(0));
    assertEqualInt(INT8_MAX, arr.get(1));
    assertEqualInt(INT8_MAX, arr.get(2));
    }

    /**
     * Verify $_get expects 0, on new Int8Array(new int[] {256, 256, 256})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_3100
     * @tc.name int8ArrayConstructorPart05Test031
     * @tc.desc Verify $_get expects 0, on new Int8Array(new int[] {256, 256, 256})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test031() {
    double[] fa = new double[] {256, 256, 256};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify $_get expects -128, on new Int8Array(new int[] {128, -129})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_3200
     * @tc.name int8ArrayConstructorPart05Test032
     * @tc.desc Verify $_get expects -128, on new Int8Array(new int[] {128, -129})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test032() {
    double[] fa = new double[] {128, -129};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(INT8_MAX, arr.get(1));
    }

    /**
     * Verify length expects 3, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_3400
     * @tc.name int8ArrayConstructorPart05Test034
     * @tc.desc Verify length expects 3, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test034() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    assertEqual(3, arr.length());
    }

    /**
     * Verify byteLength of new Int8Array(fa) returns 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_3500
     * @tc.name int8ArrayConstructorPart05Test035
     * @tc.desc Verify byteLength of new Int8Array(fa) returns 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test035() {
    double[] fa = new double[] {10, 20, 30, 40};
    Int8Array arr = new Int8Array(fa);
    assertEqual(4, arr.byteLength());
    }

    /**
     * Verify byteOffset of new Int8Array(fa) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_3600
     * @tc.name int8ArrayConstructorPart05Test036
     * @tc.desc Verify byteOffset of new Int8Array(fa) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test036() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify buffer.byteLength of new Int8Array(fa) returns 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_3700
     * @tc.name int8ArrayConstructorPart05Test037
     * @tc.desc Verify buffer.byteLength of new Int8Array(fa) returns 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test037() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    assertEqual(3, arr.buffer().byteLength());
    }

    /**
     * Verify $_get expects 10, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_3800
     * @tc.name int8ArrayConstructorPart05Test038
     * @tc.desc Verify $_get expects 10, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test038() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(10, arr.get(0));
    }

    /**
     * Verify $_get expects 30 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_3900
     * @tc.name int8ArrayConstructorPart05Test039
     * @tc.desc Verify $_get expects 30 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test039() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(30, arr.get(arr.length() - 1));
    }

    /**
     * Verify at expects 10 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_4000
     * @tc.name int8ArrayConstructorPart05Test040
     * @tc.desc Verify at expects 10 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test040() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(10, arr.at(0));
    }

    /**
     * Verify at expects 30 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_4100
     * @tc.name int8ArrayConstructorPart05Test041
     * @tc.desc Verify at expects 30 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test041() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(30, arr.at(-1));
    }

    /**
     * Verify join returns '10, 20, 30' on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_4200
     * @tc.name int8ArrayConstructorPart05Test042
     * @tc.desc Verify join returns '10, 20, 30' on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test042() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    assertEqual("10,20,30", arr.join(","));
    }

    /**
     * Verify toString returns '10, 20, 30' on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_4300
     * @tc.name int8ArrayConstructorPart05Test043
     * @tc.desc Verify toString returns '10, 20, 30' on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test043() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    assertEqual("10,20,30", String.valueOf(arr));
    }

    /**
     * Verify source FixedArray is not modified by new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_4400
     * @tc.name int8ArrayConstructorPart05Test044
     * @tc.desc Verify source FixedArray is not modified by new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test044() {
    double[] fa = new double[] {10, 20, 30};
    assertEqual(10, fa[0]);
    assertEqual(30, fa[2]);
    }

    /**
     * Verify $_set on Int8Array does not modify source FixedArray, on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_4500
     * @tc.name int8ArrayConstructorPart05Test045
     * @tc.desc Verify $_set on Int8Array does not modify source FixedArray, on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test045() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    arr.set(0, 99);
    assertEqual(10, fa[0]);
    }

    /**
     * Verify $_get expects 10 after source array element modified, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_4600
     * @tc.name int8ArrayConstructorPart05Test046
     * @tc.desc Verify $_get expects 10 after source array element modified, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test046() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    fa[0] = 999;
    assertEqualInt(10, arr.get(0));
    }

    /**
     * Verify length expects 3, on new Int8Array(new int[] {128, -129, 255})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_4700
     * @tc.name int8ArrayConstructorPart05Test047
     * @tc.desc Verify length expects 3, on new Int8Array(new int[] {128, -129, 255})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test047() {
    double[] fa = new double[] {128, -129, 255};
    Int8Array arr = new Int8Array(fa);
    assertEqual(3, arr.length());
    }

    /**
     * Verify $_get of two Int8Array instances from same FixedArray return equal values on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_4800
     * @tc.name int8ArrayConstructorPart05Test048
     * @tc.desc Verify $_get of two Int8Array instances from same FixedArray return equal values on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test048() {
    double[] fa = new double[] {128, 255};
    Int8Array a2 = new Int8Array(fa);
    Integer r1 = a2.get(0);
    int e1 = -128;
    assertEqualInt(e1, r1);
    Integer r2 = a2.get(1);
    int e2 = -1;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify $_get expects -128, on new Int8Array(new int[] {128, 0, -129, 255})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_4900
     * @tc.name int8ArrayConstructorPart05Test049
     * @tc.desc Verify $_get expects -128, on new Int8Array(new int[] {128, 0, -129, 255})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test049() {
    double[] fa = new double[] {128, 0, -129, 255};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(-1, arr.get(3));
    }

    /**
     * Verify $_get expects -2 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_5000
     * @tc.name int8ArrayConstructorPart05Test050
     * @tc.desc Verify $_get expects -2 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test050() {
    double[] fa = new double[] {128, -129, 255, 256};
    Int8Array arr = new Int8Array(fa);
    int sum = 0;
    for (int i = 0; i < arr.length(); i++) {
    sum += arr.get(i);
    }
    assertEqual(-2, sum);
    }

    /**
     * Verify byteLength of new Int8Array(fa) returns 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_5100
     * @tc.name int8ArrayConstructorPart05Test051
     * @tc.desc Verify byteLength of new Int8Array(fa) returns 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test051() {
    double[] fa = new double[] {128, 128};
    Int8Array arr = new Int8Array(fa);
    assertEqual(2, arr.byteLength());
    }

    /**
     * Verify source FixedArray [128] stays unchanged after new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_5200
     * @tc.name int8ArrayConstructorPart05Test052
     * @tc.desc Verify source FixedArray [128] stays unchanged after new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test052() {
    double[] fa = new double[] {128};
    assertEqual(128, fa[0]);
    }

    /**
     * Verify $_get expects -128, on new Int8Array(new int[] {128, 0, -129})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_5300
     * @tc.name int8ArrayConstructorPart05Test053
     * @tc.desc Verify $_get expects -128, on new Int8Array(new int[] {128, 0, -129})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test053() {
    double[] fa = new double[] {128, 0, -129};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(-128, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(INT8_MAX, arr.get(2));
    }

    /**
     * Verify buffer.byteLength of new Int8Array(fa) returns 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_5400
     * @tc.name int8ArrayConstructorPart05Test054
     * @tc.desc Verify buffer.byteLength of new Int8Array(fa) returns 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test054() {
    double[] fa = new double[] {INT8_MAX, -128, 0, 64};
    Int8Array arr = new Int8Array(fa);
    assertEqual(4, arr.buffer().byteLength());
    }

    /**
     * Verify subarray shares buffer, $_set on subarray reflected in original expects 99 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_5500
     * @tc.name int8ArrayConstructorPart05Test055
     * @tc.desc Verify subarray shares buffer, $_set on subarray reflected in original expects 99 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test055() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    Int8Array view = arr.subarray(0);
    view.set(0, 99);
    assertEqualInt(99, arr.get(0));
    int r1 = arr.length();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify subarray shares buffer, modification is bidirectional expects 88 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_5600
     * @tc.name int8ArrayConstructorPart05Test056
     * @tc.desc Verify subarray shares buffer, modification is bidirectional expects 88 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test056() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    Int8Array view = arr.subarray(0);
    arr.set(1, 88);
    assertEqualInt(88, view.get(1));
    }

    /**
     * Verify subarray shares buffer, modification is bidirectional expects 77 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_5700
     * @tc.name int8ArrayConstructorPart05Test057
     * @tc.desc Verify subarray shares buffer, modification is bidirectional expects 77 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test057() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    Int8Array a = arr.subarray(0);
    Int8Array b = arr.subarray(0);
    a.set(0, 77);
    assertEqualInt(77, b.get(0));
    }

    /**
     * Verify subarray expects 1 subarray(1) byteOffset on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_5800
     * @tc.name int8ArrayConstructorPart05Test058
     * @tc.desc Verify subarray expects 1 subarray(1) byteOffset on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test058() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    Int8Array view = arr.subarray(1);
    assertEqual(1, view.byteOffset());
    }

    /**
     * Verify subarray expects 2 subarray(0, 2) on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_5900
     * @tc.name int8ArrayConstructorPart05Test059
     * @tc.desc Verify subarray expects 2 subarray(0, 2) on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test059() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    Int8Array view = arr.subarray(0, 2);
    assertEqual(2, view.length());
    }

    /**
     * Verify slice creates independent copy and $_set on copy does not affect origina
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_6000
     * @tc.name int8ArrayConstructorPart05Test060
     * @tc.desc Verify slice creates independent copy and $_set on copy does not affect original expects 10 on new
     * Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test060() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    Int8Array copy = arr.slice(0);
    copy.set(0, 99);
    assertEqualInt(10, arr.get(0));
    }

    /**
     * Verify subarray shares buffer, $_set on subarray reflected in original expects 55 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_6100
     * @tc.name int8ArrayConstructorPart05Test061
     * @tc.desc Verify subarray shares buffer, $_set on subarray reflected in original expects 55 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test061() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    Int8Array view = arr.subarray(-1);
    view.set(0, 55);
    assertEqualInt(55, arr.get(2));
    }

    /**
     * Verify subarray expects arr.length subarray(0, arr.length) on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_6200
     * @tc.name int8ArrayConstructorPart05Test062
     * @tc.desc Verify subarray expects arr.length subarray(0, arr.length) on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test062() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    Int8Array view = arr.subarray(0, arr.length());
    assertEqual(arr.length(), view.length());
    }

    /**
     * Verify subarray shares buffer, modification is bidirectional expects 33 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_6300
     * @tc.name int8ArrayConstructorPart05Test063
     * @tc.desc Verify subarray shares buffer, modification is bidirectional expects 33 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test063() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    Int8Array sub1 = arr.subarray(0);
    Int8Array sub2 = sub1.subarray(0);
    sub2.set(0, 33);
    assertEqualInt(33, arr.get(0));
    }

    /**
     * Verify $_get expects 10, after $_set(0, 99), on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_6400
     * @tc.name int8ArrayConstructorPart05Test064
     * @tc.desc Verify $_get expects 10, after $_set(0, 99), on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test064() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array a1 = new Int8Array(fa);
    Int8Array a2 = new Int8Array(fa);
    a1.set(0, 99);
    assertEqualInt(10, a2.get(0));
    }

    /**
     * Verify slice expects 2 slice(1, 3) on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_6500
     * @tc.name int8ArrayConstructorPart05Test065
     * @tc.desc Verify slice expects 2 slice(1, 3) on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test065() {
    double[] fa = new double[] {10, 20, 30, 40};
    Int8Array arr = new Int8Array(fa);
    Int8Array copy = arr.slice(1, 3);
    int r1 = copy.length();
    int e1 = 2;
    assertEqual(e1, r1);
    }

    /**
     * Verify byteOffset of new Int8Array(empty) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_6600
     * @tc.name int8ArrayConstructorPart05Test066
     * @tc.desc Verify byteOffset of new Int8Array(empty) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test066() {
    double[] empty = new double[] {};
    Int8Array arr = new Int8Array(empty);
    int r1 = arr.byteOffset();
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify $_get(0) on empty Int8Array throws RangeError on new Int8Array(empty)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_6700
     * @tc.name int8ArrayConstructorPart05Test067
     * @tc.desc Verify $_get(0) on empty Int8Array throws RangeError on new Int8Array(empty)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test067() {
    double[] empty = new double[] {};
    Int8Array arr = new Int8Array(empty);
    try {
    arr.get(0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify at(0) on empty Int8Array returns undefined on new Int8Array(empty)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_6800
     * @tc.name int8ArrayConstructorPart05Test068
     * @tc.desc Verify at(0) on empty Int8Array returns undefined on new Int8Array(empty)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test068() {
    double[] empty = new double[] {};
    Int8Array arr = new Int8Array(empty);
    assertNull(arr.at(0));
    }

    /**
     * Verify join on new Int8Array(empty)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_6900
     * @tc.name int8ArrayConstructorPart05Test069
     * @tc.desc Verify join on new Int8Array(empty)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test069() {
    double[] empty = new double[] {};
    Int8Array arr = new Int8Array(empty);
    String r1 = arr.join();
    String e1 = "";
    assertEqual(e1, r1);
    }

    /**
     * Verify byteLength of new Int8Array(empty) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_7000
     * @tc.name int8ArrayConstructorPart05Test070
     * @tc.desc Verify byteLength of new Int8Array(empty) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test070() {
    double[] empty = new double[] {};
    Int8Array arr = new Int8Array(empty);
    int r1 = arr.length();
    int e1 = 0;
    assertEqual(e1, r1);
    int r2 = arr.byteLength();
    int e2 = 0;
    assertEqual(e2, r2);
    }

    /**
     * Verify forEach expects 0 on new Int8Array(empty)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_7100
     * @tc.name int8ArrayConstructorPart05Test071
     * @tc.desc Verify forEach expects 0 on new Int8Array(empty)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test071() {
    double[] empty = new double[] {};
    Int8Array arr = new Int8Array(empty);
    int[] count = {0};
    arr.forEach((v) -> {
    if (v < INT8_MIN || v > INT8_MAX) {
    return;
    }
    count[0] += 1;
    });
    assertEqual(0, count[0]);
    }

    /**
     * Verify at expects 42 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_7200
     * @tc.name int8ArrayConstructorPart05Test072
     * @tc.desc Verify at expects 42 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test072() {
    double[] fa = new double[] {42};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(42, arr.at(-1));
    }

    /**
     * Verify at(1) out-of-bounds on single-element Int8Array returns undefined on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_7300
     * @tc.name int8ArrayConstructorPart05Test073
     * @tc.desc Verify at(1) out-of-bounds on single-element Int8Array returns undefined on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test073() {
    double[] fa = new double[] {42};
    Int8Array arr = new Int8Array(fa);
    assertNull(arr.at(1));
    }

    /**
     * Verify sum of elements equals 47 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_7400
     * @tc.name int8ArrayConstructorPart05Test074
     * @tc.desc Verify sum of elements equals 47 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test074() {
    double[] fa = new double[] {7, 15, 25};
    Int8Array arr = new Int8Array(fa);
    int sum = 0;
    for (Integer v : arr.values()) {
    sum += v;
    }
    assertEqual(47, sum);
    }

    /**
     * Verify indexOf expects 1 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_7600
     * @tc.name int8ArrayConstructorPart05Test076
     * @tc.desc Verify indexOf expects 1 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test076() {
    double[] fa = new double[] {7, 15, 25};
    Int8Array arr = new Int8Array(fa);
    int r1 = arr.indexOf(15);
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify indexOf expects -1 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_7700
     * @tc.name int8ArrayConstructorPart05Test077
     * @tc.desc Verify indexOf expects -1 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test077() {
    double[] fa = new double[] {7, 15, 25};
    Int8Array arr = new Int8Array(fa);
    int r1 = arr.indexOf(99);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify includes(25) returns true on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_7800
     * @tc.name int8ArrayConstructorPart05Test078
     * @tc.desc Verify includes(25) returns true on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test078() {
    double[] fa = new double[] {7, 15, 25};
    Int8Array arr = new Int8Array(fa);
    boolean r1 = arr.includes(25);
    assertTrue(r1);
    }

    /**
     * Verify includes(99) returns false on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_7900
     * @tc.name int8ArrayConstructorPart05Test079
     * @tc.desc Verify includes(99) returns false on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test079() {
    double[] fa = new double[] {7, 15, 25};
    Int8Array arr = new Int8Array(fa);
    boolean r1 = arr.includes(99);
    assertFalse(r1);
    }

    /**
     * Verify find expects 15 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_8000
     * @tc.name int8ArrayConstructorPart05Test080
     * @tc.desc Verify find expects 15 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test080() {
    double[] fa = new double[] {7, 15, 25};
    Int8Array arr = new Int8Array(fa);
    Integer r = arr.find((v) -> v > 10);
    assertEqualInt(15, r);
    }

    /**
     * Verify byteLength of new Int8Array(fa) returns 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART05_TEST_8100
     * @tc.name int8ArrayConstructorPart05Test081
     * @tc.desc Verify byteLength of new Int8Array(fa) returns 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart05Test081() {
    double[] fa = new double[] {10, 20, 30};
    Int8Array arr = new Int8Array(fa);
    int r1 = arr.byteLength();
    int e1 = 3;
    assertEqual(e1, r1);
    }
}
