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
 * Int8ArrayFromPart04Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFromPart04Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify Int8Array.from(src) Array<number> arity
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_0100
     * @tc.name int8ArrayFromPart04Test001
     * @tc.desc Verify Int8Array.from(src) Array<number> arity
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test001() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int8Array result = Int8Array.from(src);
    assertEqual(3, result.length());
    int r1 = result.byteOffset();
    int e1 = 0;
    assertEqual(e1, r1);
    int r2 = result.buffer().byteLength();
    int e2 = 3;
    assertEqual(e2, r2);
    int r3 = result.BYTES_PER_ELEMENT;
    int e3 = 1;
    assertEqual(e3, r3);
    String r4 = result.join(",");
    String e4 = "1,2,3";
    assertEqual(e4, r4);
    String r5 = String.valueOf(result);
    String e5 = "1,2,3";
    assertEqual(e5, r5);
    boolean r6 = result.includes(100);
    assertFalse(r6);
    int r7 = src.get(0);
    int e7 = 1;
    assertEqual(e7, r7);
    }

    /**
     * Verify Int8Array.from(src) [] length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_0200
     * @tc.name int8ArrayFromPart04Test002
     * @tc.desc Verify Int8Array.from(src) [] length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test002() {
    Int8Array result = Int8Array.from(new int[] {});
    assertEqual(0, result.length());
    int r1 = result.byteLength();
    int e1 = 0;
    assertEqual(e1, r1);
    String r2 = String.valueOf(result);
    String e2 = "";
    assertEqual(e2, r2);
    int r3 = result.buffer().byteLength();
    int e3 = 0;
    assertEqual(e3, r3);
    }

    /**
     * Verify Int8Array.from(src) [0] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_0300
     * @tc.name int8ArrayFromPart04Test003
     * @tc.desc Verify Int8Array.from(src) [0] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test003() {
    Int8Array result = Int8Array.from(new int[] {0});
    Integer r1 = result.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [127] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_0400
     * @tc.name int8ArrayFromPart04Test004
     * @tc.desc Verify Int8Array.from(src) [127] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test004() {
    Int8Array result = Int8Array.from(new int[] {INT8_MAX});
    Integer r1 = result.get(0);
    int e1 = INT8_MAX;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [-128] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_0500
     * @tc.name int8ArrayFromPart04Test005
     * @tc.desc Verify Int8Array.from(src) [-128] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test005() {
    Int8Array result = Int8Array.from(new int[] {INT8_MIN});
    Integer r1 = result.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [1] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_0600
     * @tc.name int8ArrayFromPart04Test006
     * @tc.desc Verify Int8Array.from(src) [1] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test006() {
    Int8Array result = Int8Array.from(new int[] {1});
    Integer r1 = result.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [-1] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_0700
     * @tc.name int8ArrayFromPart04Test007
     * @tc.desc Verify Int8Array.from(src) [-1] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test007() {
    Int8Array result = Int8Array.from(new int[] {-1});
    Integer r1 = result.get(0);
    int e1 = -1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [64] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_0800
     * @tc.name int8ArrayFromPart04Test008
     * @tc.desc Verify Int8Array.from(src) [64] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test008() {
    Int8Array result = Int8Array.from(new int[] {64});
    Integer r1 = result.get(0);
    int e1 = 64;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [128] max+1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_0900
     * @tc.name int8ArrayFromPart04Test009
     * @tc.desc Verify Int8Array.from(src) [128] max+1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test009() {
    Int8Array result = Int8Array.from(new int[] {128});
    assertEqualInt(-128, result.get(0));
    }

    /**
     * Verify Int8Array.from(src) [255] 0xFF
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_1100
     * @tc.name int8ArrayFromPart04Test011
     * @tc.desc Verify Int8Array.from(src) [255] 0xFF
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test011() {
    Int8Array result = Int8Array.from(new int[] {255});
    assertEqualInt(-1, result.get(0));
    }

    /**
     * Verify Int8Array.from(src) [256] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_1200
     * @tc.name int8ArrayFromPart04Test012
     * @tc.desc Verify Int8Array.from(src) [256] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test012() {
    Int8Array result = Int8Array.from(new int[] {256});
    Integer r1 = result.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [257] +1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_1300
     * @tc.name int8ArrayFromPart04Test013
     * @tc.desc Verify Int8Array.from(src) [257] +1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test013() {
    Int8Array result = Int8Array.from(new int[] {257});
    Integer r1 = result.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [-129] min-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_1400
     * @tc.name int8ArrayFromPart04Test014
     * @tc.desc Verify Int8Array.from(src) [-129] min-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test014() {
    Int8Array result = Int8Array.from(new int[] {-129});
    Integer r1 = result.get(0);
    int e1 = INT8_MAX;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [-130] min-2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_1500
     * @tc.name int8ArrayFromPart04Test015
     * @tc.desc Verify Int8Array.from(src) [-130] min-2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test015() {
    Int8Array result = Int8Array.from(new int[] {-130});
    Integer r1 = result.get(0);
    int e1 = 126;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [-255] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_1600
     * @tc.name int8ArrayFromPart04Test016
     * @tc.desc Verify Int8Array.from(src) [-255] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test016() {
    Int8Array result = Int8Array.from(new int[] {-255});
    Integer r1 = result.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [-256] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_1700
     * @tc.name int8ArrayFromPart04Test017
     * @tc.desc Verify Int8Array.from(src) [-256] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test017() {
    Int8Array result = Int8Array.from(new int[] {-256});
    Integer r1 = result.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [-257] +1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_1800
     * @tc.name int8ArrayFromPart04Test018
     * @tc.desc Verify Int8Array.from(src) [-257] +1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test018() {
    Int8Array result = Int8Array.from(new int[] {-257});
    Integer r1 = result.get(0);
    int e1 = -1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [Number.NaN] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_1900
     * @tc.name int8ArrayFromPart04Test019
     * @tc.desc Verify Int8Array.from(src) [Number.NaN] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test019() {
    Int8Array result = Int8Array.from(new double[] {Double.NaN});
    Integer r1 = result.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [1.9] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_2000
     * @tc.name int8ArrayFromPart04Test020
     * @tc.desc Verify Int8Array.from(src) [1.9] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test020() {
    Int8Array result = Int8Array.from(new double[] {1.9});
    assertEqualInt(1, result.get(0));
    }

    /**
     * Verify Int8Array.from(src) [-1.9] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_2100
     * @tc.name int8ArrayFromPart04Test021
     * @tc.desc Verify Int8Array.from(src) [-1.9] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test021() {
    Int8Array result = Int8Array.from(new double[] {-1.9});
    Integer r1 = result.get(0);
    int e1 = -1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [0.5] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_2200
     * @tc.name int8ArrayFromPart04Test022
     * @tc.desc Verify Int8Array.from(src) [0.5] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test022() {
    Int8Array result = Int8Array.from(new double[] {0.5});
    Integer r1 = result.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [-0.5] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_2300
     * @tc.name int8ArrayFromPart04Test023
     * @tc.desc Verify Int8Array.from(src) [-0.5] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test023() {
    Int8Array result = Int8Array.from(new double[] {-0.5});
    assertEqualInt(0, result.get(0));
    }

    /**
     * Verify Int8Array.from(src) [127.999] max
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_2400
     * @tc.name int8ArrayFromPart04Test024
     * @tc.desc Verify Int8Array.from(src) [127.999] max
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test024() {
    Int8Array result = Int8Array.from(new double[] {127.999});
    Integer r1 = result.get(0);
    int e1 = INT8_MAX;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [-128.999] min
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_2500
     * @tc.name int8ArrayFromPart04Test025
     * @tc.desc Verify Int8Array.from(src) [-128.999] min
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test025() {
    Int8Array result = Int8Array.from(new double[] {-128.999});
    Integer r1 = result.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [Number.MAX_SAFE_INTEGER] 2^53-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_2600
     * @tc.name int8ArrayFromPart04Test026
     * @tc.desc Verify Int8Array.from(src) [Number.MAX_SAFE_INTEGER] 2^53-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test026() {
    Int8Array result = Int8Array.from(new double[] {9007199254740991L});
    Integer r1 = result.get(0);
    int e1 = -1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [Number.MIN_SAFE_INTEGER] -(2^53-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_2700
     * @tc.name int8ArrayFromPart04Test027
     * @tc.desc Verify Int8Array.from(src) [Number.MIN_SAFE_INTEGER] -(2^53-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test027() {
    Int8Array result = Int8Array.from(new double[] {-9007199254740991L});
    Integer r1 = result.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [Number.MIN_VALUE] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_2800
     * @tc.name int8ArrayFromPart04Test028
     * @tc.desc Verify Int8Array.from(src) [Number.MIN_VALUE] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test028() {
    Int8Array result = Int8Array.from(new double[] {Double.MIN_VALUE});
    Integer r1 = result.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [1, 2, 3] $_get(1) behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_2900
     * @tc.name int8ArrayFromPart04Test029
     * @tc.desc Verify Int8Array.from(src) [1, 2, 3] $_get(1) behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test029() {
    Int8Array result = Int8Array.from(new int[] {1, 2, 3});
    Integer r1 = result.get(1);
    int e1 = 2;
    assertEqualInt(e1, r1);
    double[] floatSrc = new double[] {1.5, 2.5, 3.5};
    Int8Array floatResult = Int8Array.from(floatSrc);
    Integer r2 = floatResult.get(1);
    int e2 = 2;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify Int8Array.from(src) [127, -128, 0] $_get(0) behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_3000
     * @tc.name int8ArrayFromPart04Test030
     * @tc.desc Verify Int8Array.from(src) [127, -128, 0] $_get(0) behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test030() {
    Int8Array result = Int8Array.from(new int[] {INT8_MAX, INT8_MIN, 0});
    Integer r1 = result.get(0);
    int e1 = INT8_MAX;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [128, -129, 255] $_get(1) behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_3100
     * @tc.name int8ArrayFromPart04Test031
     * @tc.desc Verify Int8Array.from(src) [128, -129, 255] $_get(1) behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test031() {
    Int8Array result = Int8Array.from(new int[] {128, -129, 255});
    Integer r1 = result.get(1);
    int e1 = INT8_MAX;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [-1, -2, -3] $_get(2) behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_3200
     * @tc.name int8ArrayFromPart04Test032
     * @tc.desc Verify Int8Array.from(src) [-1, -2, -3] $_get(2) behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test032() {
    Int8Array result = Int8Array.from(new int[] {-1, -2, -3});
    Integer r1 = result.get(2);
    int e1 = -3;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [5, 5, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_3300
     * @tc.name int8ArrayFromPart04Test033
     * @tc.desc Verify Int8Array.from(src) [5, 5, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test033() {
    Int8Array result = Int8Array.from(new int[] {5, 5, 5});
    Integer r1 = result.get(1);
    int e1 = 5;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) with 100-element Array returns length 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_3400
     * @tc.name int8ArrayFromPart04Test034
     * @tc.desc Verify Int8Array.from(src) with 100-element Array returns length 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test034() {
    List<Integer> src = new ArrayList<>();
    for (int i = 0; i < 100; i++) {
    src.add(i);
    }
    Int8Array result = Int8Array.from(src);
    int r1 = result.length();
    int e1 = 100;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) -128 behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_3500
     * @tc.name int8ArrayFromPart04Test035
     * @tc.desc Verify Int8Array.from(src) -128 behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test035() {
    List<Integer> src = new ArrayList<>();
    int i = 0;
    while (i < 100) {
    src.add(128);
    i = i + 1;
    }
    Int8Array result = Int8Array.from(src);
    int r1 = result.length();
    int e1 = 100;
    assertEqual(e1, r1);
    Integer r2 = result.get(0);
    int e2 = INT8_MIN;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify Int8Array.from(src) with 5-element Array returns length 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_3600
     * @tc.name int8ArrayFromPart04Test036
     * @tc.desc Verify Int8Array.from(src) with 5-element Array returns length 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test036() {
    Int8Array result = Int8Array.from(new int[] {10, 20, 30, 40, 50});
    int r1 = result.length();
    int e1 = 5;
    assertEqual(e1, r1);
    int r2 = result.byteLength();
    int e2 = 5;
    assertEqual(e2, r2);
    }

    /**
     * Verify Int8Array.from(src) at(0) behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_3700
     * @tc.name int8ArrayFromPart04Test037
     * @tc.desc Verify Int8Array.from(src) at(0) behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test037() {
    Int8Array result = Int8Array.from(new int[] {10, 20, 30});
    assertEqualInt(10, result.at(0));
    assertEqualInt(30, result.at(-1));
    assertNull(result.at(3));
    int r3 = result.indexOf(10);
    int e3 = 0;
    assertEqual(e3, r3);
    boolean r4 = result.includes(30);
    assertTrue(r4);
    }

    /**
     * Verify Int8Array.from creates independent copy (modifying src does not affect result)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_3800
     * @tc.name int8ArrayFromPart04Test038
     * @tc.desc Verify Int8Array.from creates independent copy (modifying src does not affect result)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test038() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int8Array result = Int8Array.from(src);
    src.set(0, 100);
    Integer r1 = result.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from creates independent copy (modifying result does not affect src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_3900
     * @tc.name int8ArrayFromPart04Test039
     * @tc.desc Verify Int8Array.from creates independent copy (modifying result does not affect src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test039() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int8Array result = Int8Array.from(src);
    result.set(0, 100);
    int r2 = src.get(0);
    int e2 = 1;
    assertEqual(e2, r2);
    Integer r1 = result.get(0);
    int e1 = 100;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from produces independent buffers across multiple calls
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_4000
     * @tc.name int8ArrayFromPart04Test040
     * @tc.desc Verify Int8Array.from produces independent buffers across multiple calls
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test040() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int8Array fromResultA = Int8Array.from(src);
    Int8Array fromResultB = Int8Array.from(src);
    fromResultA.set(0, 100);
    Integer r1 = fromResultB.get(0);
    int e1 = 1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) wraps 128 to -128 consistently
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_4100
     * @tc.name int8ArrayFromPart04Test041
     * @tc.desc Verify Int8Array.from(src) wraps 128 to -128 consistently
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test041() {
    List<Integer> src = java.util.Arrays.asList(128, -129, 255);
    Int8Array fromResultA = Int8Array.from(src);
    Int8Array fromResultB = Int8Array.from(src);
    Integer r1 = fromResultA.get(0);
    int e1 = -128;
    assertEqualInt(e1, r1);
    Integer r2 = fromResultB.get(0);
    int e2 = -128;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify Int8Array.from(src) [100, 200, -100, -200] overflow wrap behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_4300
     * @tc.name int8ArrayFromPart04Test043
     * @tc.desc Verify Int8Array.from(src) [100, 200, -100, -200] overflow wrap behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test043() {
    Int8Array result = Int8Array.from(new int[] {100, 200, -100, -200});
    Integer r1 = result.get(1);
    int e1 = -56;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [127, 127, 127]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_4400
     * @tc.name int8ArrayFromPart04Test044
     * @tc.desc Verify Int8Array.from(src) [127, 127, 127]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test044() {
    Int8Array result = Int8Array.from(new int[] {INT8_MAX, INT8_MAX, INT8_MAX});
    Integer r1 = result.get(2);
    int e1 = INT8_MAX;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [-128, -128, -128]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_4500
     * @tc.name int8ArrayFromPart04Test045
     * @tc.desc Verify Int8Array.from(src) [-128, -128, -128]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test045() {
    Int8Array result = Int8Array.from(new int[] {INT8_MIN, INT8_MIN, INT8_MIN});
    Integer r1 = result.get(2);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [128, 256, -129, -256] overflow wrap behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_4600
     * @tc.name int8ArrayFromPart04Test046
     * @tc.desc Verify Int8Array.from(src) [128, 256, -129, -256] overflow wrap behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test046() {
    Int8Array result = Int8Array.from(new int[] {128, 256, -129, -256});
    Integer r1 = result.get(2);
    int e1 = INT8_MAX;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [255, 255, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_4700
     * @tc.name int8ArrayFromPart04Test047
     * @tc.desc Verify Int8Array.from(src) [255, 255, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test047() {
    Int8Array result = Int8Array.from(new int[] {255, 255, 255});
    Integer r1 = result.get(1);
    int e1 = -1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [127, 128, -128, -129] overflow wrap behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_4800
     * @tc.name int8ArrayFromPart04Test048
     * @tc.desc Verify Int8Array.from(src) [127, 128, -128, -129] overflow wrap behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test048() {
    Int8Array result = Int8Array.from(new int[] {INT8_MAX, 128, INT8_MIN, -129});
    Integer r1 = result.get(1);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [Number.MAX_VALUE, Number.MAX_SAFE_INTEGER]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_4900
     * @tc.name int8ArrayFromPart04Test049
     * @tc.desc Verify Int8Array.from(src) [Number.MAX_VALUE, Number.MAX_SAFE_INTEGER]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test049() {
    Int8Array result = Int8Array.from(new double[] {Double.MAX_VALUE, 9007199254740991L});
    Integer r1 = result.get(1);
    int e1 = -1;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) subarray buffer sharing (modify subarray affects original)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_5000
     * @tc.name int8ArrayFromPart04Test050
     * @tc.desc Verify Int8Array.from(src) subarray buffer sharing (modify subarray affects original)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test050() {
    Int8Array result = Int8Array.from(new int[] {1, 2, 3, 4, 5});
    Int8Array sub = result.subarray(1, 3);
    sub.set(0, 100);
    Integer r1 = result.get(1);
    int e1 = 100;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) slice behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_5100
     * @tc.name int8ArrayFromPart04Test051
     * @tc.desc Verify Int8Array.from(src) slice behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test051() {
    Int8Array result = Int8Array.from(new int[] {1, 2, 3, 4, 5});
    Int8Array sliced = result.slice(1, 3);
    sliced.set(0, 100);
    Integer r1 = result.get(1);
    int e1 = 2;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) lastIndexOf behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_5200
     * @tc.name int8ArrayFromPart04Test052
     * @tc.desc Verify Int8Array.from(src) lastIndexOf behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test052() {
    Int8Array result = Int8Array.from(new int[] {1, 2, 1, 3, 1});
    int r1 = result.lastIndexOf(1);
    int e1 = 4;
    assertEqual(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) fill behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_5300
     * @tc.name int8ArrayFromPart04Test053
     * @tc.desc Verify Int8Array.from(src) fill behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test053() {
    Int8Array result = Int8Array.from(new int[] {1, 2, 3});
    result.fill(0);
    Integer r1 = result.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [Number.POSITIVE_INFINITY] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_5400
     * @tc.name int8ArrayFromPart04Test054
     * @tc.desc Verify Int8Array.from(src) [Number.POSITIVE_INFINITY] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test054() {
    Int8Array result = Int8Array.from(new double[] {Double.POSITIVE_INFINITY});
    Integer r1 = result.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [Number.NEGATIVE_INFINITY] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_5500
     * @tc.name int8ArrayFromPart04Test055
     * @tc.desc Verify Int8Array.from(src) [Number.NEGATIVE_INFINITY] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test055() {
    Int8Array result = Int8Array.from(new double[] {Double.NEGATIVE_INFINITY});
    Integer r1 = result.get(0);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) [0, Number.NaN, Number.POSITIVE_INFINITY] behavior
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_5700
     * @tc.name int8ArrayFromPart04Test057
     * @tc.desc Verify Int8Array.from(src) [0, Number.NaN, Number.POSITIVE_INFINITY] behavior
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test057() {
    double[] src = new double[] {0.0, Double.NaN, Double.POSITIVE_INFINITY};
    Int8Array result = Int8Array.from(src);
    Integer r1 = result.get(2);
    int e1 = 0;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify Int8Array.from(src) converts NaN and Infinity elements to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_5800
     * @tc.name int8ArrayFromPart04Test058
     * @tc.desc Verify Int8Array.from(src) converts NaN and Infinity elements to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test058() {
    List<Integer> src = new ArrayList<>();
    src.add((int) (Double.NaN));
    for (int i = 1; i < 99; i++) {
    src.add(i);
    }
    src.add(0);
    Int8Array result = Int8Array.from(src);
    assertEqualInt(0, result.get(99));
    }

    /**
     * Verify Int8Array.from(src) [Number.MAX_VALUE, Number.POSITIVE_INFINITY]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART04_5900
     * @tc.name int8ArrayFromPart04Test059
     * @tc.desc Verify Int8Array.from(src) [Number.MAX_VALUE, Number.POSITIVE_INFINITY]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart04Test059() {
    Int8Array result = Int8Array.from(new double[] {Double.MAX_VALUE, Double.POSITIVE_INFINITY});
    assertEqualInt(0, result.get(1));
    }
}
