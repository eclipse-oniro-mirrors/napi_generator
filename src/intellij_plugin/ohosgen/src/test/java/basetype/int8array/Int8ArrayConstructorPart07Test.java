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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayConstructorPart07Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayConstructorPart07Test extends BasTest {
    private static final int INT8_MAX = 127;

    /**
     * Verify length expects 0 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_0100
     * @tc.name int8ArrayConstructorPart07Test001
     * @tc.desc Verify length expects 0 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test001() {
    List<Integer> src = new ArrayList<>();
    Int8Array r = new Int8Array(src);
    assertEqual(0, r.length());
    }

    /**
     * Verify length expects 1 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_0200
     * @tc.name int8ArrayConstructorPart07Test002
     * @tc.desc Verify length expects 1 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test002() {
    List<Integer> src = java.util.Arrays.asList(42);
    Int8Array r = new Int8Array(src);
    assertEqual(1, r.length());
    }

    /**
     * Verify length expects 3 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_0300
     * @tc.name int8ArrayConstructorPart07Test003
     * @tc.desc Verify length expects 3 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test003() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertEqual(3, r.length());
    }

    /**
     * Verify new Int8Array(big) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_0400
     * @tc.name int8ArrayConstructorPart07Test004
     * @tc.desc Verify new Int8Array(big) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test004() {
    List<Integer> big = new ArrayList<>();
    int i = 0;
    while (i < 1000) {
    big.add(INT8_MAX);
    i = i + 1;
    }
    int r1 = big.size();
    int e1 = 1000;
    assertEqual(e1, r1);
    Int8Array r = new Int8Array(big);
    assertEqual(1000, r.length());
    assertEqualInt(INT8_MAX, r.get(999));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_0500
     * @tc.name int8ArrayConstructorPart07Test005
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test005() {
    List<Integer> src = java.util.Arrays.asList(INT8_MAX);
    Int8Array r = new Int8Array(src);
    assertEqualInt(INT8_MAX, r.get(0));
    }

    /**
     * Verify $_get expects -128, on new Int8Array(new int[] {128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_0600
     * @tc.name int8ArrayConstructorPart07Test006
     * @tc.desc Verify $_get expects -128, on new Int8Array(new int[] {128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test006() {
    List<Integer> src = java.util.Arrays.asList(128);
    Int8Array r = new Int8Array(src);
    assertEqualInt(-128, r.get(0));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new int[] {255})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_0700
     * @tc.name int8ArrayConstructorPart07Test007
     * @tc.desc Verify $_get expects -1, on new Int8Array(new int[] {255})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test007() {
    List<Integer> src = java.util.Arrays.asList(255);
    Int8Array r = new Int8Array(src);
    assertEqualInt(-1, r.get(0));
    }

    /**
     * Verify $_get expects 0, on new Int8Array(new int[] {256})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_0800
     * @tc.name int8ArrayConstructorPart07Test008
     * @tc.desc Verify $_get expects 0, on new Int8Array(new int[] {256})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test008() {
    List<Integer> src = java.util.Arrays.asList(256);
    Int8Array r = new Int8Array(src);
    assertEqualInt(0, r.get(0));
    }

    /**
     * Verify $_get expects -128, on new Int8Array(new int[] {-128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_0900
     * @tc.name int8ArrayConstructorPart07Test009
     * @tc.desc Verify $_get expects -128, on new Int8Array(new int[] {-128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test009() {
    List<Integer> src = java.util.Arrays.asList(-128);
    Int8Array r = new Int8Array(src);
    assertEqualInt(-128, r.get(0));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(new int[] {-129})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_1000
     * @tc.name int8ArrayConstructorPart07Test010
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(new int[] {-129})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test010() {
    List<Integer> src = java.util.Arrays.asList(-129);
    Int8Array r = new Int8Array(src);
    assertEqualInt(INT8_MAX, r.get(0));
    }

    /**
     * Verify $_get expects 1, on new Int8Array(new int[] {-255})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_1100
     * @tc.name int8ArrayConstructorPart07Test011
     * @tc.desc Verify $_get expects 1, on new Int8Array(new int[] {-255})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test011() {
    List<Integer> src = java.util.Arrays.asList(-255);
    Int8Array r = new Int8Array(src);
    assertEqualInt(1, r.get(0));
    }

    /**
     * Verify $_get expects 0, on new Int8Array(new int[] {-256})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_1200
     * @tc.name int8ArrayConstructorPart07Test012
     * @tc.desc Verify $_get expects 0, on new Int8Array(new int[] {-256})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test012() {
    List<Integer> src = java.util.Arrays.asList(-256);
    Int8Array r = new Int8Array(src);
    assertEqualInt(0, r.get(0));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new int[] {-257})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_1300
     * @tc.name int8ArrayConstructorPart07Test013
     * @tc.desc Verify $_get expects -1, on new Int8Array(new int[] {-257})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test013() {
    List<Integer> src = java.util.Arrays.asList(-257);
    Int8Array r = new Int8Array(src);
    assertEqualInt(-1, r.get(0));
    }

    /**
     * Verify $_get expects 0, on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_1400
     * @tc.name int8ArrayConstructorPart07Test014
     * @tc.desc Verify $_get expects 0, on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test014() {
    List<Integer> src = java.util.Arrays.asList(0);
    Int8Array r = new Int8Array(src);
    assertEqualInt(0, r.get(0));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new int[] {-1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_1500
     * @tc.name int8ArrayConstructorPart07Test015
     * @tc.desc Verify $_get expects -1, on new Int8Array(new int[] {-1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test015() {
    List<Integer> src = java.util.Arrays.asList(-1);
    Int8Array r = new Int8Array(src);
    assertEqualInt(-1, r.get(0));
    }

    /**
     * Verify $_get expects -2 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_1700
     * @tc.name int8ArrayConstructorPart07Test017
     * @tc.desc Verify $_get expects -2 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test017() {
    List<Integer> src = java.util.Arrays.asList(254);
    Int8Array r = new Int8Array(src);
    assertEqualInt(-2, r.get(0));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new int[] {2147483647})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_1900
     * @tc.name int8ArrayConstructorPart07Test019
     * @tc.desc Verify $_get expects -1, on new Int8Array(new int[] {2147483647})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test019() {
    double[] src = new double[] {2147483647};
    Int8Array r = new Int8Array(src);
    assertEqualInt(-1, r.get(0));
    }

    /**
     * Verify $_get expects 0, on new Int8Array(new int[] {-2147483648})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_2000
     * @tc.name int8ArrayConstructorPart07Test020
     * @tc.desc Verify $_get expects 0, on new Int8Array(new int[] {-2147483648})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test020() {
    double[] src = new double[] {Integer.MIN_VALUE};
    Int8Array r = new Int8Array(src);
    assertEqualInt(0, r.get(0));
    }

    /**
     * Verify $_get expects 1, on new Int8Array(new int[] {1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_2100
     * @tc.name int8ArrayConstructorPart07Test021
     * @tc.desc Verify $_get expects 1, on new Int8Array(new int[] {1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test021() {
    List<Integer> src = java.util.Arrays.asList(1);
    Int8Array r = new Int8Array(src);
    assertEqualInt(1, r.get(0));
    }

    /**
     * Verify $_get expects 126 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_2200
     * @tc.name int8ArrayConstructorPart07Test022
     * @tc.desc Verify $_get expects 126 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test022() {
    List<Integer> src = java.util.Arrays.asList(-130);
    Int8Array r = new Int8Array(src);
    assertEqualInt(126, r.get(0));
    }

    /**
     * Verify length expects 3, with $_get(0) expects 0, on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_2300
     * @tc.name int8ArrayConstructorPart07Test023
     * @tc.desc Verify length expects 3, with $_get(0) expects 0, on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test023() {
    List<Integer> src = java.util.Arrays.asList(0, 0, 0);
    Int8Array r = new Int8Array(src);
    assertEqual(3, r.length());
    assertEqualInt(0, r.get(0));
    }

    /**
     * Verify length expects 3, with $_get(0) expects INT8_MAX, on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_2400
     * @tc.name int8ArrayConstructorPart07Test024
     * @tc.desc Verify length expects 3, with $_get(0) expects INT8_MAX, on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test024() {
    List<Integer> src = java.util.Arrays.asList(INT8_MAX, INT8_MAX, INT8_MAX);
    Int8Array r = new Int8Array(src);
    assertEqual(3, r.length());
    assertEqualInt(INT8_MAX, r.get(0));
    }

    /**
     * Verify length expects 3, with $_get(0) expects -128, on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_2500
     * @tc.name int8ArrayConstructorPart07Test025
     * @tc.desc Verify length expects 3, with $_get(0) expects -128, on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test025() {
    List<Integer> src = java.util.Arrays.asList(-128, -128, -128);
    Int8Array r = new Int8Array(src);
    assertEqual(3, r.length());
    assertEqualInt(-128, r.get(0));
    }

    /**
     * Verify length expects 2, with $_get(0) expects -1, on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_2600
     * @tc.name int8ArrayConstructorPart07Test026
     * @tc.desc Verify length expects 2, with $_get(0) expects -1, on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test026() {
    List<Integer> src = java.util.Arrays.asList(-1, -1);
    Int8Array r = new Int8Array(src);
    assertEqual(2, r.length());
    assertEqualInt(-1, r.get(0));
    }

    /**
     * Verify $_get expects 50 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_2700
     * @tc.name int8ArrayConstructorPart07Test027
     * @tc.desc Verify $_get expects 50 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test027() {
    List<Integer> src = java.util.Arrays.asList(50, -50);
    Int8Array r = new Int8Array(src);
    assertEqualInt(50, r.get(0));
    assertEqualInt(-50, r.get(1));
    }

    /**
     * Verify $_get expects -128, on new Int8Array(new int[] {128, -129, 255})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_2800
     * @tc.name int8ArrayConstructorPart07Test028
     * @tc.desc Verify $_get expects -128, on new Int8Array(new int[] {128, -129, 255})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test028() {
    List<Integer> src = java.util.Arrays.asList(128, -129, 255);
    Int8Array r = new Int8Array(src);
    assertEqualInt(-128, r.get(0));
    assertEqualInt(INT8_MAX, r.get(1));
    assertEqualInt(-1, r.get(2));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new int[] {2147483647, -2147483648})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_2900
     * @tc.name int8ArrayConstructorPart07Test029
     * @tc.desc Verify $_get expects -1, on new Int8Array(new int[] {2147483647, -2147483648})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test029() {
    double[] src = new double[] {2147483647, Integer.MIN_VALUE};
    Int8Array r = new Int8Array(src);
    assertEqualInt(-1, r.get(0));
    assertEqualInt(0, r.get(1));
    }

    /**
     * Verify length expects 3, with $_get(0) expects -128 (overflow truncation), on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_3000
     * @tc.name int8ArrayConstructorPart07Test030
     * @tc.desc Verify length expects 3, with $_get(0) expects -128 (overflow truncation), on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test030() {
    List<Integer> src = java.util.Arrays.asList(128, 128, 128);
    Int8Array r = new Int8Array(src);
    assertEqual(3, r.length());
    assertEqualInt(-128, r.get(0));
    assertEqualInt(-128, r.get(2));
    }

    /**
     * Verify $_get expects 0, on new Int8Array(new int[] {0, INT8_MAX, -128, 128, -129})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_3100
     * @tc.name int8ArrayConstructorPart07Test031
     * @tc.desc Verify $_get expects 0, on new Int8Array(new int[] {0, INT8_MAX, -128, 128, -129})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test031() {
    List<Integer> src = java.util.Arrays.asList(0, INT8_MAX, -128, 128, -129);
    Int8Array r = new Int8Array(src);
    assertEqualInt(0, r.get(0));
    assertEqualInt(INT8_MAX, r.get(1));
    assertEqualInt(-128, r.get(2));
    assertEqualInt(-128, r.get(3));
    assertEqualInt(INT8_MAX, r.get(4));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new int[] {2147483647, -2147483648, 128, -129})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_3200
     * @tc.name int8ArrayConstructorPart07Test032
     * @tc.desc Verify $_get expects -1, on new Int8Array(new int[] {2147483647, -2147483648, 128, -129})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test032() {
    double[] src = new double[] {2147483647, Integer.MIN_VALUE, 128, -129};
    Int8Array r = new Int8Array(src);
    assertEqualInt(-1, r.get(0));
    assertEqualInt(0, r.get(1));
    assertEqualInt(-128, r.get(2));
    assertEqualInt(INT8_MAX, r.get(3));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX, 128, 255, 256, -128, -129})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_3300
     * @tc.name int8ArrayConstructorPart07Test033
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX, 128, 255, 256, -128, -129})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test033() {
    List<Integer> src = java.util.Arrays.asList(INT8_MAX, 128, 255, 256, -128, -129);
    Int8Array r = new Int8Array(src);
    assertEqualInt(INT8_MAX, r.get(0));
    assertEqualInt(-128, r.get(1));
    assertEqualInt(-1, r.get(2));
    assertEqualInt(0, r.get(3));
    assertEqualInt(-128, r.get(4));
    assertEqualInt(INT8_MAX, r.get(5));
    }

    /**
     * Verify $_get expects 0, on new Int8Array(new int[] {256, 255, 128, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_3400
     * @tc.name int8ArrayConstructorPart07Test034
     * @tc.desc Verify $_get expects 0, on new Int8Array(new int[] {256, 255, 128, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test034() {
    List<Integer> src = java.util.Arrays.asList(256, 255, 128, INT8_MAX);
    Int8Array r = new Int8Array(src);
    assertEqualInt(0, r.get(0));
    assertEqualInt(-1, r.get(1));
    assertEqualInt(-128, r.get(2));
    assertEqualInt(INT8_MAX, r.get(3));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX, 128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_3500
     * @tc.name int8ArrayConstructorPart07Test035
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX, 128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test035() {
    List<Integer> src = java.util.Arrays.asList(INT8_MAX, 128);
    Int8Array r = new Int8Array(src);
    assertEqualInt(INT8_MAX, r.get(0));
    assertEqualInt(-128, r.get(1));
    }

    /**
     * Verify $_get expects -128, on new Int8Array(new int[] {-128, -129})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_3600
     * @tc.name int8ArrayConstructorPart07Test036
     * @tc.desc Verify $_get expects -128, on new Int8Array(new int[] {-128, -129})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test036() {
    List<Integer> src = java.util.Arrays.asList(-128, -129);
    Int8Array r = new Int8Array(src);
    assertEqualInt(-128, r.get(0));
    assertEqualInt(INT8_MAX, r.get(1));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new int[] {255, 256})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_3700
     * @tc.name int8ArrayConstructorPart07Test037
     * @tc.desc Verify $_get expects -1, on new Int8Array(new int[] {255, 256})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test037() {
    List<Integer> src = java.util.Arrays.asList(255, 256);
    Int8Array r = new Int8Array(src);
    assertEqualInt(-1, r.get(0));
    assertEqualInt(0, r.get(1));
    }

    /**
     * Verify $_get expects -128, on new Int8Array(new int[] {128, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_3800
     * @tc.name int8ArrayConstructorPart07Test038
     * @tc.desc Verify $_get expects -128, on new Int8Array(new int[] {128, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test038() {
    List<Integer> src = java.util.Arrays.asList(128, 0);
    Int8Array r = new Int8Array(src);
    assertEqualInt(-128, r.get(0));
    assertEqualInt(0, r.get(1));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new int[] {-1, 255})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_3900
     * @tc.name int8ArrayConstructorPart07Test039
     * @tc.desc Verify $_get expects -1, on new Int8Array(new int[] {-1, 255})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test039() {
    List<Integer> src = java.util.Arrays.asList(-1, 255);
    Int8Array r = new Int8Array(src);
    assertEqualInt(-1, r.get(0));
    assertEqualInt(-1, r.get(1));
    }

    /**
     * Verify $_get expects 3, with $_get(0), on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_4000
     * @tc.name int8ArrayConstructorPart07Test040
     * @tc.desc Verify $_get expects 3, with $_get(0), on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test040() {
    List<Integer> src = java.util.Arrays.asList(3, 1, 2);
    Int8Array r = new Int8Array(src);
    assertEqualInt(3, r.get(0));
    assertEqualInt(1, r.get(1));
    assertEqualInt(2, r.get(2));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX, 0, -128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_4100
     * @tc.name int8ArrayConstructorPart07Test041
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(new int[] {INT8_MAX, 0, -128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test041() {
    List<Integer> src = java.util.Arrays.asList(INT8_MAX, 0, -128);
    Int8Array r = new Int8Array(src);
    assertEqualInt(INT8_MAX, r.get(0));
    assertEqualInt(0, r.get(1));
    assertEqualInt(-128, r.get(2));
    }

    /**
     * Verify $_get expects 1, on new Int8Array(new int[] {1, -1, 1, -1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_4200
     * @tc.name int8ArrayConstructorPart07Test042
     * @tc.desc Verify $_get expects 1, on new Int8Array(new int[] {1, -1, 1, -1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test042() {
    List<Integer> src = java.util.Arrays.asList(1, -1, 1, -1);
    Int8Array r = new Int8Array(src);
    assertEqualInt(1, r.get(0));
    assertEqualInt(-1, r.get(1));
    assertEqualInt(-1, r.get(3));
    }

    /**
     * Verify byteLength returns 2, with $_get(0) expects 100, on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_4300
     * @tc.name int8ArrayConstructorPart07Test043
     * @tc.desc Verify byteLength returns 2, with $_get(0) expects 100, on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test043() {
    List<Integer> src = java.util.Arrays.asList(100, -100);
    Int8Array r = new Int8Array(src);
    assertEqual(2, r.byteLength());
    assertEqualInt(100, r.get(0));
    assertEqualInt(-100, r.get(1));
    }

    /**
     * Verify $_get expects -56 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_4400
     * @tc.name int8ArrayConstructorPart07Test044
     * @tc.desc Verify $_get expects -56 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test044() {
    List<Integer> src = java.util.Arrays.asList(200, 300);
    Int8Array r = new Int8Array(src);
    assertEqualInt(-56, r.get(0));
    assertEqualInt(44, r.get(1));
    }

    /**
     * Verify length expects src.length on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_4500
     * @tc.name int8ArrayConstructorPart07Test045
     * @tc.desc Verify length expects src.length on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test045() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertEqual(src.size(), r.length());
    }

    /**
     * Verify byteLength of new Int8Array(src) returns 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_4600
     * @tc.name int8ArrayConstructorPart07Test046
     * @tc.desc Verify byteLength of new Int8Array(src) returns 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test046() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertEqual(3, r.byteLength());
    }

    /**
     * Verify byteOffset of new Int8Array(src) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_4700
     * @tc.name int8ArrayConstructorPart07Test047
     * @tc.desc Verify byteOffset of new Int8Array(src) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test047() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertEqual(0, r.byteOffset());
    }

    /**
     * Verify buffer.byteLength of new Int8Array(src) returns src.length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_4800
     * @tc.name int8ArrayConstructorPart07Test048
     * @tc.desc Verify buffer.byteLength of new Int8Array(src) returns src.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test048() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertEqual(src.size(), r.buffer().byteLength());
    }

    /**
     * Verify buffer.byteLength of new Int8Array(src) returns 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_4900
     * @tc.name int8ArrayConstructorPart07Test049
     * @tc.desc Verify buffer.byteLength of new Int8Array(src) returns 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test049() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertEqual(3, r.buffer().byteLength());
    }

    /**
     * Verify equals 1 for Int8Array BYTES_PER_ELEMENT on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_5000
     * @tc.name int8ArrayConstructorPart07Test050
     * @tc.desc Verify equals 1 for Int8Array BYTES_PER_ELEMENT on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test050() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertEqual(1, r.BYTES_PER_ELEMENT);
    }

    /**
     * Verify $_get expects 10, on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_5100
     * @tc.name int8ArrayConstructorPart07Test051
     * @tc.desc Verify $_get expects 10, on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test051() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertEqualInt(10, r.get(0));
    }

    /**
     * Verify $_get expects 20 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_5200
     * @tc.name int8ArrayConstructorPart07Test052
     * @tc.desc Verify $_get expects 20 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test052() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertEqualInt(20, r.get(1));
    }

    /**
     * Verify $_get expects 30 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_5300
     * @tc.name int8ArrayConstructorPart07Test053
     * @tc.desc Verify $_get expects 30 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test053() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertEqualInt(30, r.get(2));
    }

    /**
     * Verify at expects 10 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_5400
     * @tc.name int8ArrayConstructorPart07Test054
     * @tc.desc Verify at expects 10 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test054() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertEqualInt(10, r.at(0));
    }

    /**
     * Verify at expects 30 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_5500
     * @tc.name int8ArrayConstructorPart07Test055
     * @tc.desc Verify at expects 30 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test055() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertEqualInt(30, r.at(-1));
    }

    /**
     * Verify toString of new Int8Array(src) returns '10, 20, 30'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_5600
     * @tc.name int8ArrayConstructorPart07Test056
     * @tc.desc Verify toString of new Int8Array(src) returns '10, 20, 30'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test056() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertEqual("10,20,30", String.valueOf(r));
    }

    /**
     * Verify indexOf expects 1 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_5700
     * @tc.name int8ArrayConstructorPart07Test057
     * @tc.desc Verify indexOf expects 1 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test057() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertEqual(1, r.indexOf(20));
    }

    /**
     * Verify indexOf expects -1 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_5800
     * @tc.name int8ArrayConstructorPart07Test058
     * @tc.desc Verify indexOf expects -1 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test058() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertEqual(-1, r.indexOf(99));
    }

    /**
     * Verify includes(30) of new Int8Array(src) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_5900
     * @tc.name int8ArrayConstructorPart07Test059
     * @tc.desc Verify includes(30) of new Int8Array(src) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test059() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertTrue(r.includes(30));
    }

    /**
     * Verify includes(99) of new Int8Array(src) returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_6000
     * @tc.name int8ArrayConstructorPart07Test060
     * @tc.desc Verify includes(99) of new Int8Array(src) returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test060() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertFalse(r.includes(99));
    }

    /**
     * Verify join expects 10|20|30 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_6100
     * @tc.name int8ArrayConstructorPart07Test061
     * @tc.desc Verify join expects 10|20|30 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test061() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    assertEqual("10|20|30", r.join("|"));
    }

    /**
     * Verify byteLength of new Int8Array(src) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_6200
     * @tc.name int8ArrayConstructorPart07Test062
     * @tc.desc Verify byteLength of new Int8Array(src) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test062() {
    List<Integer> src = new ArrayList<>();
    Int8Array r = new Int8Array(src);
    assertEqual(0, r.byteLength());
    }

    /**
     * Verify toString of new Int8Array(src) returns ''
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_6300
     * @tc.name int8ArrayConstructorPart07Test063
     * @tc.desc Verify toString of new Int8Array(src) returns ''
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test063() {
    List<Integer> src = new ArrayList<>();
    Int8Array r = new Int8Array(src);
    assertEqual("", String.valueOf(r));
    }

    /**
     * Verify buffer.byteLength of new Int8Array(src) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_6400
     * @tc.name int8ArrayConstructorPart07Test064
     * @tc.desc Verify buffer.byteLength of new Int8Array(src) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test064() {
    List<Integer> src = new ArrayList<>();
    Int8Array r = new Int8Array(src);
    assertEqual(0, r.buffer().byteLength());
    }

    /**
     * Verify at(0) of new Int8Array(new int[] {}) returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_6500
     * @tc.name int8ArrayConstructorPart07Test065
     * @tc.desc Verify at(0) of new Int8Array(new int[] {}) returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test065() {
    List<Integer> src = new ArrayList<>();
    Int8Array r = new Int8Array(src);
    assertNull(r.at(0));
    }

    /**
     * Verify join of new Int8Array(src) returns ''
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_6600
     * @tc.name int8ArrayConstructorPart07Test066
     * @tc.desc Verify join of new Int8Array(src) returns ''
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test066() {
    List<Integer> src = new ArrayList<>();
    Int8Array r = new Int8Array(src);
    assertEqual("", r.join(","));
    }

    /**
     * Verify $_get expects 42 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_6700
     * @tc.name int8ArrayConstructorPart07Test067
     * @tc.desc Verify $_get expects 42 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test067() {
    List<Integer> src = java.util.Arrays.asList(42);
    Int8Array r = new Int8Array(src);
    assertEqualInt(42, r.get(0));
    }

    /**
     * Verify at expects 42 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_6800
     * @tc.name int8ArrayConstructorPart07Test068
     * @tc.desc Verify at expects 42 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test068() {
    List<Integer> src = java.util.Arrays.asList(42);
    Int8Array r = new Int8Array(src);
    assertEqualInt(42, r.at(-1));
    }

    /**
     * Verify toString expects 42 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_6900
     * @tc.name int8ArrayConstructorPart07Test069
     * @tc.desc Verify toString expects 42 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test069() {
    List<Integer> src = java.util.Arrays.asList(42);
    Int8Array r = new Int8Array(src);
    assertEqual("42", String.valueOf(r));
    }

    /**
     * Verify Int8Array independence: src[0]=99 does not affect Int8Array element on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_7100
     * @tc.name int8ArrayConstructorPart07Test071
     * @tc.desc Verify Int8Array independence: src[0]=99 does not affect Int8Array element on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test071() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    src.set(0, 99);
    assertEqualInt(10, r.get(0));
    }

    /**
     * Verify Int8Array independence: $_set does not affect source Array on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_7200
     * @tc.name int8ArrayConstructorPart07Test072
     * @tc.desc Verify Int8Array independence: $_set does not affect source Array on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test072() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    r.set(0, 50);
    assertEqualInt(10, src.get(0));
    }

    /**
     * Verify $_set(0, 128) truncation to -128 and source Array independence on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_7300
     * @tc.name int8ArrayConstructorPart07Test073
     * @tc.desc Verify $_set(0, 128) truncation to -128 and source Array independence on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test073() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    r.set(0, 128);
    assertEqualInt(-128, r.get(0));
    assertEqualInt(10, src.get(0));
    }

    /**
     * Verify two Int8Array instances from same source are independent on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_7400
     * @tc.name int8ArrayConstructorPart07Test074
     * @tc.desc Verify two Int8Array instances from same source are independent on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test074() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r1 = new Int8Array(src);
    Int8Array r2 = new Int8Array(src);
    r1.set(0, 99);
    assertEqualInt(10, r2.get(0));
    }

    /**
     * Verify copyWithin does not affect source Array on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_7500
     * @tc.name int8ArrayConstructorPart07Test075
     * @tc.desc Verify copyWithin does not affect source Array on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test075() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    r.copyWithin(0, 1, 2);
    assertEqualInt(10, src.get(0));
    assertEqualInt(20, src.get(1));
    }

    /**
     * Verify subarray shares buffer, modification is bidirectional expects 99 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_7600
     * @tc.name int8ArrayConstructorPart07Test076
     * @tc.desc Verify subarray shares buffer, modification is bidirectional expects 99 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test076() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    Int8Array v = r.subarray(0, 2);
    v.set(0, 99);
    assertEqualInt(99, r.get(0));
    }

    /**
     * Verify subarray shares buffer, modification is bidirectional expects 77 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_7700
     * @tc.name int8ArrayConstructorPart07Test077
     * @tc.desc Verify subarray shares buffer, modification is bidirectional expects 77 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test077() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    Int8Array v = r.subarray(1, 3);
    v.set(0, 77);
    assertEqualInt(77, r.get(1));
    }

    /**
     * Verify Int8Array snapshots source values at creation time, unaffected by later
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_7800
     * @tc.name int8ArrayConstructorPart07Test078
     * @tc.desc Verify Int8Array snapshots source values at creation time, unaffected by latermutation on new
     * Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test078() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r1 = new Int8Array(src);
    src.set(0, 99);
    Int8Array r2 = new Int8Array(src);
    assertEqualInt(10, r1.get(0));
    assertEqualInt(99, r2.get(0));
    }

    /**
     * Verify reverse does not affect source Array on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_7900
     * @tc.name int8ArrayConstructorPart07Test079
     * @tc.desc Verify reverse does not affect source Array on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test079() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    r.reverse();
    assertEqualInt(10, src.get(0));
    assertEqualInt(30, src.get(2));
    }

    /**
     * Verify fill does not affect source Array on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_8000
     * @tc.name int8ArrayConstructorPart07Test080
     * @tc.desc Verify fill does not affect source Array on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test080() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array r = new Int8Array(src);
    r.fill(7);
    assertEqualInt(10, src.get(0));
    assertEqualInt(20, src.get(1));
    }

    /**
     * Verify sort does not affect source Array on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_8200
     * @tc.name int8ArrayConstructorPart07Test082
     * @tc.desc Verify sort does not affect source Array on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test082() {
    List<Integer> src = java.util.Arrays.asList(30, 10, 20);
    Int8Array r = new Int8Array(src);
    r.sort();
    assertEqualInt(30, src.get(0));
    assertEqualInt(10, src.get(1));
    }

    /**
     * Verify length expects 7, with $_get(0)/$_get(3)/$_get(5)/$_get(6) truncation, on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART07_TEST_8300
     * @tc.name int8ArrayConstructorPart07Test083
     * @tc.desc Verify length expects 7, with $_get(0)/$_get(3)/$_get(5)/$_get(6) truncation, on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart07Test083() {
    List<Integer> src = java.util.Arrays.asList(0, INT8_MAX, -128, 128, -129, 255, 256);
    Int8Array r = new Int8Array(src);
    assertEqual(7, r.length());
    assertEqualInt(0, r.get(0));
    assertEqualInt(-128, r.get(3));
    assertEqualInt(-1, r.get(5));
    assertEqualInt(0, r.get(6));
    }
}
