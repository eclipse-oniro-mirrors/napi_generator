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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayConstructorPart15Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayConstructorPart15Test extends BasTest {
    private static final int INT8_MAX = 127;

    /**
     * Verify byteLength of new Int8Array(0) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_0100
     * @tc.name int8ArrayConstructorPart15Test001
     * @tc.desc Verify byteLength of new Int8Array(0) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test001() {
    Int8Array arr = new Int8Array(0);
    assertEqual(0, arr.length());
    assertEqual(0, arr.byteLength());
    }

    /**
     * Verify new Int8Array(5) creates array of length 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_0200
     * @tc.name int8ArrayConstructorPart15Test002
     * @tc.desc Verify new Int8Array(5) creates array of length 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test002() {
    Int8Array arr = new Int8Array(5);
    assertEqual(5, arr.length());
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects 2, on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_0300
     * @tc.name int8ArrayConstructorPart15Test003
     * @tc.desc Verify $_get expects 2, on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test003() {
    Int8Array src = new Int8Array(2);
    src.set(0, 7);
    Int8Array copy = new Int8Array(src);
    assertEqual(2, copy.length());
    assertEqualInt(7, copy.get(0));
    }

    /**
     * Verify $_get expects 3, with $_get(1), on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_0400
     * @tc.name int8ArrayConstructorPart15Test004
     * @tc.desc Verify $_get expects 3, with $_get(1), on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test004() {
    int[] fa = new int[] {1, 2, 3};
    Int8Array arr = new Int8Array(fa);
    assertEqual(3, arr.length());
    assertEqualInt(2, arr.get(1));
    }

    /**
     * Verify $_get expects 1, on new Int8Array(new double[] {1.9, -1.9})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_0500
     * @tc.name int8ArrayConstructorPart15Test005
     * @tc.desc Verify $_get expects 1, on new Int8Array(new double[] {1.9, -1.9})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test005() {
    double[] fa = new double[] {1.9, -1.9};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(-1, arr.get(1));
    }

    /**
     * Verify $_get expects 3, with $_get(2), on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_0600
     * @tc.name int8ArrayConstructorPart15Test006
     * @tc.desc Verify $_get expects 3, with $_get(2), on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test006() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array arr = new Int8Array(src);
    assertEqual(3, arr.length());
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify $_get expects 2, on new Int8Array(iter)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_0700
     * @tc.name int8ArrayConstructorPart15Test007
     * @tc.desc Verify $_get expects 2, on new Int8Array(iter)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test007() {
    List<Integer> iter = java.util.Arrays.asList(5, 10);
    Int8Array arr = new Int8Array(iter);
    assertEqual(2, arr.length());
    assertEqualInt(5, arr.get(0));
    }

    /**
     * Verify byteOffset of new Int8Array(new ArrayBuffer(4), 0) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_0800
     * @tc.name int8ArrayConstructorPart15Test008
     * @tc.desc Verify byteOffset of new Int8Array(new ArrayBuffer(4), 0) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test008() {
    ArrayBuffer buf = new ArrayBuffer(4);
    int off = 0;
    Int8Array view = new Int8Array(buf, off);
    assertEqual(0, view.byteOffset());
    assertEqual(buf, view.buffer());
    }

    /**
     * Verify byteOffset of new Int8Array(new ArrayBuffer(4), 0.0) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_0900
     * @tc.name int8ArrayConstructorPart15Test009
     * @tc.desc Verify byteOffset of new Int8Array(new ArrayBuffer(4), 0.0) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test009() {
    ArrayBuffer buf = new ArrayBuffer(4);
    double off = 0.0;
    Int8Array view = new Int8Array(buf, off);
    assertEqual(0, view.byteOffset());
    assertEqual(4, view.length());
    }

    /**
     * Verify byteOffset of new Int8Array(buf, 0, 2) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_1000
     * @tc.name int8ArrayConstructorPart15Test010
     * @tc.desc Verify byteOffset of new Int8Array(buf, 0, 2) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test010() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 2);
    assertEqual(0, view.byteOffset());
    assertEqual(2, view.length());
    }

    /**
     * Verify buffer and byteOffset of new Int8Array(buf) returns buf and 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_1200
     * @tc.name int8ArrayConstructorPart15Test012
     * @tc.desc Verify buffer and byteOffset of new Int8Array(buf) returns buf and 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test012() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf);
    assertEqual(buf, view.buffer());
    assertEqual(0, view.byteOffset());
    assertEqual(4, view.length());
    }

    /**
     * Verify length expects 0 on new Int8Array()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_1300
     * @tc.name int8ArrayConstructorPart15Test013
     * @tc.desc Verify length expects 0 on new Int8Array()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test013() {
    Int8Array arr = new Int8Array();
    assertEqual(0, arr.length());
    }

    /**
     * Verify length expects 4 from ArrayBuffer on new Int8Array(buf, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_1400
     * @tc.name int8ArrayConstructorPart15Test014
     * @tc.desc Verify length expects 4 from ArrayBuffer on new Int8Array(buf, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test014() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0);
    assertEqual(4, view.length());
    }

    /**
     * Verify byteOffset of new Int8Array(buf, 0) returns viewB.length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_1700
     * @tc.name int8ArrayConstructorPart15Test017
     * @tc.desc Verify byteOffset of new Int8Array(buf, 0) returns viewB.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test017() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array viewA = new Int8Array(buf, 0);
    Int8Array viewB = new Int8Array(buf, 0, 4);
    assertEqual(viewB.length(), viewA.length());
    assertEqual(viewB.byteOffset(), viewA.byteOffset());
    }

    /**
     * Verify byteOffset of new Int8Array(buf) returns viewB.byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_1800
     * @tc.name int8ArrayConstructorPart15Test018
     * @tc.desc Verify byteOffset of new Int8Array(buf) returns viewB.byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test018() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array viewA = new Int8Array(buf);
    Int8Array viewB = new Int8Array(buf, 0);
    assertEqual(viewB.byteOffset(), viewA.byteOffset());
    assertEqual(viewB.length(), viewA.length());
    }

    /**
     * Verify byteLength and length of new Int8Array() and new Int8Array(0) are 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_1900
     * @tc.name int8ArrayConstructorPart15Test019
     * @tc.desc Verify byteLength and length of new Int8Array() and new Int8Array(0) are 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test019() {
    Int8Array a1 = new Int8Array();
    Int8Array a2 = new Int8Array(0);
    int r1 = a1.byteLength();
    int e1 = 0;
    assertEqual(e1, r1);
    int r2 = a1.length();
    int e2 = 0;
    assertEqual(e2, r2);
    int r3 = a2.byteLength();
    int e3 = 0;
    assertEqual(e3, r3);
    int r4 = a2.length();
    int e4 = 0;
    assertEqual(e4, r4);
    }

    /**
     * Verify equals 1 for Int8Array from ArrayBuffer on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_2000
     * @tc.name int8ArrayConstructorPart15Test020
     * @tc.desc Verify equals 1 for Int8Array from ArrayBuffer on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test020() {
    int e1 = new Int8Array(1).BYTES_PER_ELEMENT;
    assertEqual(1, e1);
    }

    /**
     * Verify new Int8Array(4) creates array of length 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_2100
     * @tc.name int8ArrayConstructorPart15Test021
     * @tc.desc Verify new Int8Array(4) creates array of length 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test021() {
    Int8Array arr = new Int8Array(4);
    assertEqual(4, arr.byteLength());
    }

    /**
     * Verify byteLength of new Int8Array(fa) returns 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_2200
     * @tc.name int8ArrayConstructorPart15Test022
     * @tc.desc Verify byteLength of new Int8Array(fa) returns 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test022() {
    int[] fa = new int[] {1, 2, 3};
    Int8Array arr = new Int8Array(fa);
    assertEqual(3, arr.byteLength());
    }

    /**
     * Verify byteLength of new Int8Array(src) returns 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_2300
     * @tc.name int8ArrayConstructorPart15Test023
     * @tc.desc Verify byteLength of new Int8Array(src) returns 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test023() {
    List<Integer> src = java.util.Arrays.asList(10, 20);
    Int8Array arr = new Int8Array(src);
    assertEqual(2, arr.byteLength());
    }

    /**
     * Verify byteLength of new Int8Array(buf, 0, 3) returns view.length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_2400
     * @tc.name int8ArrayConstructorPart15Test024
     * @tc.desc Verify byteLength of new Int8Array(buf, 0, 3) returns view.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test024() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 0, 3);
    assertEqual(view.length(), view.byteLength());
    }

    /**
     * Verify byteOffset of new Int8Array() returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_2500
     * @tc.name int8ArrayConstructorPart15Test025
     * @tc.desc Verify byteOffset of new Int8Array() returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test025() {
    Int8Array arr = new Int8Array();
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify new Int8Array(buf, 2) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_2600
     * @tc.name int8ArrayConstructorPart15Test026
     * @tc.desc Verify new Int8Array(buf, 2) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test026() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 2);
    assertEqual(2, view.byteOffset());
    }

    /**
     * Verify new Int8Array(buf, 2, 1) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_2700
     * @tc.name int8ArrayConstructorPart15Test027
     * @tc.desc Verify new Int8Array(buf, 2, 1) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test027() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array view = new Int8Array(buf, 2, 1);
    assertEqual(2, view.byteOffset());
    assertEqual(1, view.length());
    }

    /**
     * Verify buffer.byteLength of new Int8Array() returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_2800
     * @tc.name int8ArrayConstructorPart15Test028
     * @tc.desc Verify buffer.byteLength of new Int8Array() returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test028() {
    Int8Array arr = new Int8Array();
    assertEqual(0, arr.buffer().byteLength());
    }

    /**
     * Verify buffer property returns buf on new Int8Array(buf, 0, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_2900
     * @tc.name int8ArrayConstructorPart15Test029
     * @tc.desc Verify buffer property returns buf on new Int8Array(buf, 0, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test029() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 2);
    assertEqual(buf, view.buffer());
    }

    /**
     * Verify buffer property returns buf on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_3000
     * @tc.name int8ArrayConstructorPart15Test030
     * @tc.desc Verify buffer property returns buf on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test030() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf);
    assertEqual(buf, view.buffer());
    }

    /**
     * Verify property returns underlying ArrayBuffer expects src.buffer on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_3100
     * @tc.name int8ArrayConstructorPart15Test031
     * @tc.desc Verify property returns underlying ArrayBuffer expects src.buffer on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test031() {
    Int8Array src = new Int8Array(2);
    Int8Array copy = new Int8Array(src);
    assertNotEqual(src.buffer(), copy.buffer());
    }

    /**
     * Verify property returns underlying ArrayBuffer expects a2.buffer, on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_3200
     * @tc.name int8ArrayConstructorPart15Test032
     * @tc.desc Verify property returns underlying ArrayBuffer expects a2.buffer, on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test032() {
    int[] fa = new int[] {1, 2};
    Int8Array a1 = new Int8Array(fa);
    Int8Array a2 = new Int8Array(fa);
    assertNotEqual(a2.buffer(), a1.buffer());
    }

    /**
     * Verify property returns underlying ArrayBuffer expects a2.buffer, on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_3300
     * @tc.name int8ArrayConstructorPart15Test033
     * @tc.desc Verify property returns underlying ArrayBuffer expects a2.buffer, on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test033() {
    List<Integer> src = java.util.Arrays.asList(1, 2);
    Int8Array a1 = new Int8Array(src);
    Int8Array a2 = new Int8Array(src);
    assertNotEqual(a2.buffer(), a1.buffer());
    }

    /**
     * Verify name of new Int8Array(1) returns 'Int8Array'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_3400
     * @tc.name int8ArrayConstructorPart15Test034
     * @tc.desc Verify name of new Int8Array(1) returns 'Int8Array'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test034() {
    String n1 = new Int8Array(1).getClass().getSimpleName();
    assertEqual("Int8Array", n1);
    }

    /**
     * Verify toString() on new Int8Array() returns empty string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_3500
     * @tc.name int8ArrayConstructorPart15Test035
     * @tc.desc Verify toString() on new Int8Array() returns empty string
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test035() {
    Int8Array arr = new Int8Array();
    assertEqual("", String.valueOf(arr));
    }

    /**
     * Verify new Int8Array(3) creates array of length 3 equals 0, 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_3600
     * @tc.name int8ArrayConstructorPart15Test036
     * @tc.desc Verify new Int8Array(3) creates array of length 3 equals 0, 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test036() {
    Int8Array arr = new Int8Array(3);
    assertEqual("0,0,0", String.valueOf(arr));
    }

    /**
     * Verify toString of new Int8Array(fa) returns '1, 2, 3'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_3700
     * @tc.name int8ArrayConstructorPart15Test037
     * @tc.desc Verify toString of new Int8Array(fa) returns '1, 2, 3'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test037() {
    int[] fa = new int[] {1, 2, 3};
    Int8Array arr = new Int8Array(fa);
    assertEqual("1,2,3", String.valueOf(arr));
    }

    /**
     * Verify toString of new Int8Array(src) returns '-1, 127'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_3800
     * @tc.name int8ArrayConstructorPart15Test038
     * @tc.desc Verify toString of new Int8Array(src) returns '-1, 127'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test038() {
    List<Integer> src = java.util.Arrays.asList(-1, INT8_MAX);
    Int8Array arr = new Int8Array(src);
    assertEqual("-1,127", String.valueOf(arr));
    }

    /**
     * Verify toString of copy from new Int8Array(src) returns '5, 10'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_3900
     * @tc.name int8ArrayConstructorPart15Test039
     * @tc.desc Verify toString of copy from new Int8Array(src) returns '5, 10'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test039() {
    Int8Array src = new Int8Array(2);
    src.set(0, 5);
    src.set(1, 10);
    Int8Array copy = new Int8Array(src);
    String r1 = String.valueOf(copy);
    String e1 = "5,10";
    assertEqual(e1, r1);
    }

    /**
     * Verify toString of new Int8Array(buf) returns '1, 2, 3'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_4000
     * @tc.name int8ArrayConstructorPart15Test040
     * @tc.desc Verify toString of new Int8Array(buf) returns '1, 2, 3'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test040() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Int8Array view = new Int8Array(buf);
    view.set(0, 1);
    view.set(1, 2);
    view.set(2, 3);
    assertEqual("1,2,3", String.valueOf(view));
    }

    /**
     * Verify join(',') on new Int8Array() returns empty string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_4100
     * @tc.name int8ArrayConstructorPart15Test041
     * @tc.desc Verify join(',') on new Int8Array() returns empty string
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test041() {
    Int8Array arr = new Int8Array();
    assertEqual("", arr.join(","));
    }

    /**
     * Verify join expects 7|8|9 from ArrayBuffer on new Int8Array(buf, 0, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_4200
     * @tc.name int8ArrayConstructorPart15Test042
     * @tc.desc Verify join expects 7|8|9 from ArrayBuffer on new Int8Array(buf, 0, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test042() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Int8Array view = new Int8Array(buf, 0, 3);
    view.set(0, 7);
    view.set(1, 8);
    view.set(2, 9);
    assertEqual("7|8|9", view.join("|"));
    }

    /**
     * Verify new Int8Array(buf, 8, 1) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_4300
     * @tc.name int8ArrayConstructorPart15Test043
     * @tc.desc Verify new Int8Array(buf, 8, 1) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test043() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Int8Array(buf, 8, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, 0, 8) throws exception for invalid constructor argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_4400
     * @tc.name int8ArrayConstructorPart15Test044
     * @tc.desc Verify new Int8Array(buf, 0, 8) throws exception for invalid constructor argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test044() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Int8Array(buf, 0, 8);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(-1) creates array of length -1 assertFail not reached
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_4500
     * @tc.name int8ArrayConstructorPart15Test045
     * @tc.desc Verify new Int8Array(-1) creates array of length -1 assertFail not reached
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test045() {
    try {
    new Int8Array(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify new Int8Array(buf, 8, 1) throws RangeError, then new Int8Array(buf, 0, 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_4600
     * @tc.name int8ArrayConstructorPart15Test046
     * @tc.desc Verify new Int8Array(buf, 8, 1) throws RangeError, then new Int8Array(buf, 0, 2
     * ) creates view of length 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test046() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Int8Array(buf, 8, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    Int8Array view = new Int8Array(buf, 0, 2);
    assertEqual(2, view.length());
    }

    /**
     * Verify byteLength of buf remains 4 after new Int8Array(buf, 8, 1) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_4700
     * @tc.name int8ArrayConstructorPart15Test047
     * @tc.desc Verify byteLength of buf remains 4 after new Int8Array(buf, 8, 1) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test047() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Int8Array(buf, 8, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(4, buf.byteLength());
    }

    /**
     * Verify $_get expects RangeError from ArrayBuffer throws exception, on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_4800
     * @tc.name int8ArrayConstructorPart15Test048
     * @tc.desc Verify $_get expects RangeError from ArrayBuffer throws exception, on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test048() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf);
    view.set(0, 42);
    try {
    new Int8Array(buf, 8, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(42, view.get(0));
    }

    /**
     * Verify $_get expects RangeError from ArrayBuffer throws exception, on new Int8Array(buf, 0, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_4900
     * @tc.name int8ArrayConstructorPart15Test049
     * @tc.desc Verify $_get expects RangeError from ArrayBuffer throws exception, on new Int8Array(buf, 0, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test049() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 2);
    view.set(0, 99);
    try {
    new Int8Array(buf, 8, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(99, view.get(0));
    }

    /**
     * Verify new Int8Array expects src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_5000
     * @tc.name int8ArrayConstructorPart15Test050
     * @tc.desc Verify new Int8Array expects src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test050() {
    Int8Array src = new Int8Array(2);
    Int8Array copy = new Int8Array(src);
    assertNotEqual(src, copy);
    }

    /**
     * Verify $_get expects 5 on new Int8Array(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_5100
     * @tc.name int8ArrayConstructorPart15Test051
     * @tc.desc Verify $_get expects 5 on new Int8Array(2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test051() {
    Int8Array src = new Int8Array(2);
    src.set(0, 5);
    Int8Array copy = new Int8Array(src);
    src.set(0, 99);
    assertEqualInt(5, copy.get(0));
    }

    /**
     * Verify $_get expects 1, on new Int8Array(new int[] {1, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_5200
     * @tc.name int8ArrayConstructorPart15Test052
     * @tc.desc Verify $_get expects 1, on new Int8Array(new int[] {1, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test052() {
    int[] fa = new int[] {1, 2};
    Int8Array a1 = new Int8Array(fa);
    Int8Array a2 = new Int8Array(fa);
    a1.set(0, 99);
    assertEqualInt(1, a2.get(0));
    }

    /**
     * Verify $_get expects 1, on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_5300
     * @tc.name int8ArrayConstructorPart15Test053
     * @tc.desc Verify $_get expects 1, on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test053() {
    List<Integer> src = java.util.Arrays.asList(1, 2);
    Int8Array a1 = new Int8Array(src);
    Int8Array a2 = new Int8Array(src);
    a1.set(0, 99);
    assertEqualInt(1, a2.get(0));
    }

    /**
     * Verify new Int8Array(buf, 0, 2) returns a distinct Object, not buf
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_5400
     * @tc.name int8ArrayConstructorPart15Test054
     * @tc.desc Verify new Int8Array(buf, 0, 2) returns a distinct Object, not buf
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test054() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 2);
    assertNotEqual(buf, view);
    }

    /**
     * Verify $_get expects 42 from ArrayBuffer on new Int8Array(buf, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_5500
     * @tc.name int8ArrayConstructorPart15Test055
     * @tc.desc Verify $_get expects 42 from ArrayBuffer on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test055() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array writer = new Int8Array(buf, 0, 4);
    writer.set(0, 42);
    Int8Array reader = new Int8Array(buf, 0, 4);
    assertEqualInt(42, reader.get(0));
    }

    /**
     * Verify $_get expects 77 from ArrayBuffer on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_5600
     * @tc.name int8ArrayConstructorPart15Test056
     * @tc.desc Verify $_get expects 77 from ArrayBuffer on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test056() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array writer = new Int8Array(buf);
    writer.set(1, 77);
    Int8Array reader = new Int8Array(buf, 1, 1);
    assertEqualInt(77, reader.get(0));
    }

    /**
     * Verify $_get expects 33 from ArrayBuffer on new Int8Array(buf, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_5700
     * @tc.name int8ArrayConstructorPart15Test057
     * @tc.desc Verify $_get expects 33 from ArrayBuffer on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test057() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array viewA = new Int8Array(buf, 0, 4);
    Int8Array viewB = new Int8Array(buf, 0, 4);
    viewA.set(2, 33);
    assertEqualInt(33, viewB.get(2));
    }

    /**
     * Verify $_get expects 55 from ArrayBuffer on new Int8Array(buf, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_5800
     * @tc.name int8ArrayConstructorPart15Test058
     * @tc.desc Verify $_get expects 55 from ArrayBuffer on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test058() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array viewA = new Int8Array(buf, 0, 4);
    Int8Array viewB = new Int8Array(buf, 2, 2);
    viewA.set(2, 55);
    assertEqualInt(55, viewB.get(0));
    }

    /**
     * Verify new Int8Array(buf, 2, 2) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_5900
     * @tc.name int8ArrayConstructorPart15Test059
     * @tc.desc Verify new Int8Array(buf, 2, 2) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test059() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 2, 2);
    assertEqual(2, view.length());
    assertEqual(2, view.byteOffset());
    }

    /**
     * Verify $_get expects 11 from ArrayBuffer on new Int8Array(buf, 0, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_6000
     * @tc.name int8ArrayConstructorPart15Test060
     * @tc.desc Verify $_get expects 11 from ArrayBuffer on new Int8Array(buf, 0, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test060() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array offset0View = new Int8Array(buf, 0, 2);
    Int8Array offsetView = new Int8Array(buf, 2, 2);
    offset0View.set(1, 11);
    offsetView.set(0, 22);
    Int8Array full = new Int8Array(buf, 0, 4);
    assertEqualInt(11, full.get(1));
    assertEqualInt(22, full.get(2));
    }

    /**
     * Verify slice(0, 2) creates independent copy and $_set on copy does not affect o
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_6100
     * @tc.name int8ArrayConstructorPart15Test061
     * @tc.desc Verify slice(0, 2) creates independent copy and $_set on copy does not affect original expects 1 from
     * ArrayBuffer on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test061() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    view.set(0, 1);
    view.set(1, 2);
    view.set(2, 3);
    view.set(3, 4);
    Int8Array sliced = view.slice(0, 2);
    sliced.set(0, 99);
    assertEqualInt(1, view.get(0));
    }

    /**
     * Verify subarray(0, 2) shares buffer, $_set on subarray reflected in original ex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_6200
     * @tc.name int8ArrayConstructorPart15Test062
     * @tc.desc Verify subarray(0, 2) shares buffer, $_set on subarray reflected in original expects 88 from
     * ArrayBuffer on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test062() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    Int8Array sub = view.subarray(0, 2);
    sub.set(0, 88);
    assertEqualInt(88, view.get(0));
    }

    /**
     * Verify slice(0, 2) result buffer is NOT buf on new Int8Array(buf, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_6300
     * @tc.name int8ArrayConstructorPart15Test063
     * @tc.desc Verify slice(0, 2) result buffer is NOT buf on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test063() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    Int8Array sliced = view.slice(0, 2);
    assertNotEqual(buf, sliced.buffer());
    }

    /**
     * Verify new Int8Array(view) copy buffer is NOT buf on new Int8Array(buf, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_6400
     * @tc.name int8ArrayConstructorPart15Test064
     * @tc.desc Verify new Int8Array(view) copy buffer is NOT buf on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test064() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    Int8Array copy = new Int8Array(view);
    assertNotEqual(buf, copy.buffer());
    }

    /**
     * Verify subarray shares buffer, modification is bidirectional expects 44 from Ar
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_6500
     * @tc.name int8ArrayConstructorPart15Test065
     * @tc.desc Verify subarray shares buffer, modification is bidirectional expects 44 from ArrayBuffer on new
     * Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test065() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array baseView = new Int8Array(buf, 0, 4);
    Int8Array subViewA = baseView.subarray(0, 4);
    Int8Array subViewB = subViewA.subarray(0, 4);
    subViewB.set(0, 44);
    assertEqualInt(44, baseView.get(0));
    }

    /**
     * Verify subarray(1, 3) shares buffer buf on new Int8Array(buf, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_6600
     * @tc.name int8ArrayConstructorPart15Test066
     * @tc.desc Verify subarray(1, 3) shares buffer buf on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test066() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    Int8Array sub = view.subarray(1, 3);
    assertEqual(buf, sub.buffer());
    }

    /**
     * Verify $_get expects 10 from ArrayBuffer on new Int8Array(buf, 0, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_6700
     * @tc.name int8ArrayConstructorPart15Test067
     * @tc.desc Verify $_get expects 10 from ArrayBuffer on new Int8Array(buf, 0, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test067() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int8Array viewA = new Int8Array(buf, 0, 2);
    Int8Array viewB = new Int8Array(buf, 0, 2);
    viewA.set(0, 10);
    viewB.set(1, 20);
    Int8Array full = new Int8Array(buf, 0, 2);
    assertEqualInt(10, full.get(0));
    assertEqualInt(20, full.get(1));
    }

    /**
     * Verify new Int8Array(buf, 4, 0) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_6800
     * @tc.name int8ArrayConstructorPart15Test068
     * @tc.desc Verify new Int8Array(buf, 4, 0) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test068() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 4, 0);
    assertEqual(0, view.length());
    assertEqual(4, view.byteOffset());
    }

    /**
     * Verify byteOffset of new Int8Array(buf, 0) equals view with (0, 4) parameters
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_6900
     * @tc.name int8ArrayConstructorPart15Test069
     * @tc.desc Verify byteOffset of new Int8Array(buf, 0) equals view with (0, 4) parameters
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test069() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array viewA = new Int8Array(buf, 0);
    Int8Array viewB = new Int8Array(buf, 0, 4);
    assertEqual(viewB.byteOffset(), viewA.byteOffset());
    assertEqual(viewB.length(), viewA.length());
    }

    /**
     * Verify $_get expects -1 on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_7000
     * @tc.name int8ArrayConstructorPart15Test070
     * @tc.desc Verify $_get expects -1 on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test070() {
    double[] fa = new double[] {255};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_get expects 0, on new Int8Array(iter)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_7100
     * @tc.name int8ArrayConstructorPart15Test071
     * @tc.desc Verify $_get expects 0, on new Int8Array(iter)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test071() {
    double[] iter = new double[] {Double.NaN};
    Int8Array arr = new Int8Array(iter);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_7200
     * @tc.name int8ArrayConstructorPart15Test072
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test072() {
    Int8Array src = new Int8Array(1);
    src.set(0, INT8_MAX);
    Int8Array copy = new Int8Array(src);
    assertEqualInt(INT8_MAX, copy.get(0));
    }

    /**
     * Verify new Int8Array(buf, 0, 1) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_7300
     * @tc.name int8ArrayConstructorPart15Test073
     * @tc.desc Verify new Int8Array(buf, 0, 1) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test073() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Int8Array writer = new Int8Array(buf, 0, 1);
    writer.set(0, 200);
    Int8Array reader = new Int8Array(buf, 0, 1);
    assertEqualInt(-56, reader.get(0));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_7400
     * @tc.name int8ArrayConstructorPart15Test074
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test074() {
    List<Integer> src = java.util.Arrays.asList(-129);
    Int8Array arr = new Int8Array(src);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify new Int8Array(buf, 0, 4) constructor equals 60
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_7500
     * @tc.name int8ArrayConstructorPart15Test075
     * @tc.desc Verify new Int8Array(buf, 0, 4) constructor equals 60
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test075() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array fullView = new Int8Array(buf, 0, 4);
    Int8Array offsetView = new Int8Array(buf, 2, 2);
    fullView.set(2, 50);
    assertEqualInt(50, offsetView.get(0));
    offsetView.set(1, 60);
    assertEqualInt(60, fullView.get(3));
    }

    /**
     * Verify $_get expects 1, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_7600
     * @tc.name int8ArrayConstructorPart15Test076
     * @tc.desc Verify $_get expects 1, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test076() {
    int[] fa = new int[] {1, 2, 3};
    Int8Array a1 = new Int8Array(fa);
    Int8Array a2 = new Int8Array(a1);
    a1.set(0, 99);
    assertEqualInt(1, a2.get(0));
    }

    /**
     * Verify subarray(1, 3) shares buffer, $_set on subarray reflected in original ex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_7700
     * @tc.name int8ArrayConstructorPart15Test077
     * @tc.desc Verify subarray(1, 3) shares buffer, $_set on subarray reflected in original expects 99 on new
     * Int8Array(iter)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test077() {
    List<Integer> iter = java.util.Arrays.asList(1, 2, 3, 4);
    Int8Array arr = new Int8Array(iter);
    Int8Array sub = arr.subarray(1, 3);
    sub.set(0, 99);
    assertEqualInt(99, arr.get(1));
    }

    /**
     * Verify length and byteOffset of three views on same ArrayBuffer, on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_7800
     * @tc.name int8ArrayConstructorPart15Test078
     * @tc.desc Verify length and byteOffset of three views on same ArrayBuffer, on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test078() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array fullView = new Int8Array(buf);
    Int8Array leftView = new Int8Array(buf, 0, 2);
    Int8Array rightView = new Int8Array(buf, 2, 2);
    assertEqual(4, fullView.length());
    assertEqual(2, leftView.length());
    assertEqual(2, rightView.length());
    assertEqual(0, leftView.byteOffset());
    assertEqual(2, rightView.byteOffset());
    }

    /**
     * Verify $_get expects 7 from ArrayBuffer on new Int8Array(buf, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_7900
     * @tc.name int8ArrayConstructorPart15Test079
     * @tc.desc Verify $_get expects 7 from ArrayBuffer on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test079() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    view.set(0, 7);
    Int8Array copy = new Int8Array(view);
    view.set(0, 99);
    assertEqualInt(7, copy.get(0));
    }

    /**
     * Verify $_get expects 0 from ArrayBuffer on new Int8Array(buf, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_8000
     * @tc.name int8ArrayConstructorPart15Test080
     * @tc.desc Verify $_get expects 0 from ArrayBuffer on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test080() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    Int8Array copy = new Int8Array(view);
    copy.set(0, 99);
    assertEqualInt(0, view.get(0));
    }

    /**
     * Verify new Int8Array(buf, off1) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_8100
     * @tc.name int8ArrayConstructorPart15Test081
     * @tc.desc Verify new Int8Array(buf, off1) constructor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test081() {
    ArrayBuffer buf = new ArrayBuffer(8);
    int off1 = 2;
    double off2 = 2.0;
    Int8Array viewA = new Int8Array(buf, off1);
    Int8Array viewB = new Int8Array(buf, off2);
    assertEqual(viewB.byteOffset(), viewA.byteOffset());
    assertEqual(viewB.length(), viewA.length());
    }

    /**
     * Verify length expects 0, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_8200
     * @tc.name int8ArrayConstructorPart15Test082
     * @tc.desc Verify length expects 0, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test082() {
    Int8Array src = new Int8Array(0);
    Int8Array copy = new Int8Array(src);
    assertEqual(0, copy.length());
    }

    /**
     * Verify length expects 0, on new Int8Array(fa)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_8300
     * @tc.name int8ArrayConstructorPart15Test083
     * @tc.desc Verify length expects 0, on new Int8Array(fa)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test083() {
    int[] fa = new int[] {};
    Int8Array arr = new Int8Array(fa);
    assertEqual(0, arr.length());
    }

    /**
     * Verify length expects 0, on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_8400
     * @tc.name int8ArrayConstructorPart15Test084
     * @tc.desc Verify length expects 0, on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test084() {
    List<Integer> src = new ArrayList<>();
    Int8Array arr = new Int8Array(src);
    assertEqual(0, arr.length());
    }

    /**
     * Verify length expects 0, on new Int8Array(iter)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_8500
     * @tc.name int8ArrayConstructorPart15Test085
     * @tc.desc Verify length expects 0, on new Int8Array(iter)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test085() {
    List<Integer> iter = new ArrayList<>();
    Int8Array arr = new Int8Array(iter);
    assertEqual(0, arr.length());
    }

    /**
     * Verify $_get expects 0, on new Int8Array(new int[] {Number.POSITIVE_INFINITY})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_8600
     * @tc.name int8ArrayConstructorPart15Test086
     * @tc.desc Verify $_get expects 0, on new Int8Array(new int[] {Number.POSITIVE_INFINITY})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test086() {
    double[] fa = new double[] {Double.POSITIVE_INFINITY};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects 0, on new Int8Array(new int[] {Number.NEGATIVE_INFINITY})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART15_TEST_8700
     * @tc.name int8ArrayConstructorPart15Test087
     * @tc.desc Verify $_get expects 0, on new Int8Array(new int[] {Number.NEGATIVE_INFINITY})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart15Test087() {
    double[] fa = new double[] {Double.NEGATIVE_INFINITY};
    Int8Array arr = new Int8Array(fa);
    assertEqualInt(0, arr.get(0));
    }
}
