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

package basetype.int32array;

import basetype.common.Int32Array;
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.RangeError;
import basetype.common.TypeError;

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayConstructorPart01Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayConstructorPart01Test extends BasTest {
    /**
     * Verify arity=0 null
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_0100
     * @tc.name int32ArrayConstructorPart01TestMindmapTest001
     * @tc.desc Verify arity=0 null
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest001() {
    Int32Array arr = new Int32Array();
    assertEqual(0, arr.length());
    }

    /**
     * Verify new Int32Array(5) length is 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_0200
     * @tc.name int32ArrayConstructorPart01TestMindmapTest002
     * @tc.desc Verify new Int32Array(5) length is 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest002() {
    Int32Array arr = new Int32Array(5);
    assertEqual(5, arr.length());
    }

    /**
     * Verify buffer ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_0300
     * @tc.name int32ArrayConstructorPart01TestMindmapTest003
     * @tc.desc Verify buffer ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest003() {
    Int32Array arr = new Int32Array();
    assertEqual(0, arr.buffer().byteLength());
    assertEqual(0, arr.byteOffset());
    assertEqual(0, arr.length());
    }

    /**
     * Verify for-of 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_0400
     * @tc.name int32ArrayConstructorPart01TestMindmapTest004
     * @tc.desc Verify for-of 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest004() {
    Int32Array arr = new Int32Array();
    int[] count = {0};
    for (Integer v : arr.values()) {
    count[0]++;
    }
    assertEqual(0, count[0]);
    }

    /**
     * Verify at(0) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_0500
     * @tc.name int32ArrayConstructorPart01TestMindmapTest005
     * @tc.desc Verify at(0) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest005() {
    Int32Array arr = new Int32Array();
    Integer v = arr.at(0);
    assertNull(v);
    }

    /**
     * Verify $_get(0) throws RangeError on empty Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_0600
     * @tc.name int32ArrayConstructorPart01TestMindmapTest006
     * @tc.desc Verify $_get(0) throws RangeError on empty Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest006() {
    Int32Array arr = new Int32Array();
    try {
    arr.get(0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify join
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_0700
     * @tc.name int32ArrayConstructorPart01TestMindmapTest007
     * @tc.desc Verify join
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest007() {
    Int32Array arr = new Int32Array();
    assertEqual("", arr.join(","));
    }

    /**
     * Verify toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_0800
     * @tc.name int32ArrayConstructorPart01TestMindmapTest008
     * @tc.desc Verify toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest008() {
    Int32Array arr = new Int32Array();
    assertEqual("", String.valueOf(arr));
    }

    /**
     * Verify some false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_0900
     * @tc.name int32ArrayConstructorPart01TestMindmapTest009
     * @tc.desc Verify some false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest009() {
    Int32Array arr = new Int32Array();
    boolean r = arr.some((v, unusedIndex, array) -> {
        return true;
        });
    assertFalse(r);
    }

    /**
     * Verify every true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_1000
     * @tc.name int32ArrayConstructorPart01TestMindmapTest010
     * @tc.desc Verify every true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest010() {
    Int32Array arr = new Int32Array();
    boolean r = arr.every((v, unusedIndex, array) -> {
        return false;
        });
    assertTrue(r);
    }

    /**
     * Verify indexOf -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_1100
     * @tc.name int32ArrayConstructorPart01TestMindmapTest011
     * @tc.desc Verify indexOf -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest011() {
    Int32Array arr = new Int32Array();
    assertEqual(-1, arr.indexOf(0));
    }

    /**
     * Verify reduce initialValue TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_1200
     * @tc.name int32ArrayConstructorPart01TestMindmapTest012
     * @tc.desc Verify reduce initialValue TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest012() {
    Int32Array arr = new Int32Array();
    try {
    arr.reduce((acc, v, unusedIndex, array) -> {
        return acc + v;
        });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reduce with initialValue returns initialValue on empty Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_1300
     * @tc.name int32ArrayConstructorPart01TestMindmapTest013
     * @tc.desc Verify reduce with initialValue returns initialValue on empty Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest013() {
    Int32Array arr = new Int32Array();
    int result = arr.reduce((acc, v, unusedIndex, array) -> {
        return acc + v;
        }, 99);
    assertEqual(99, result);
    }

    /**
     * Verify forEach
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_1400
     * @tc.name int32ArrayConstructorPart01TestMindmapTest014
     * @tc.desc Verify forEach
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest014() {
    Int32Array arr = new Int32Array();
    int[] count = {0};
    arr.forEach((unusedVal, unusedIndex, array) -> {
        count[0]++;
    });
    assertEqual(0, count[0]);
    }

    /**
     * Verify map Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_1500
     * @tc.name int32ArrayConstructorPart01TestMindmapTest015
     * @tc.desc Verify map Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest015() {
    Int32Array arr = new Int32Array();
    Int32Array r = arr.map((v, unusedIndex, array) -> {
        return v + 1;
        });
    assertEqual(0, r.length());
    }

    /**
     * Verify filter Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_1600
     * @tc.name int32ArrayConstructorPart01TestMindmapTest016
     * @tc.desc Verify filter Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest016() {
    Int32Array arr = new Int32Array();
    Int32Array r = arr.filter((unusedVal, unusedIndex, array) -> {
        return true;
        });
    assertEqual(0, r.length());
    }

    /**
     * Verify $_set(0, 1) throws RangeError on empty Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_1700
     * @tc.name int32ArrayConstructorPart01TestMindmapTest017
     * @tc.desc Verify $_set(0, 1) throws RangeError on empty Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest017() {
    Int32Array arr = new Int32Array();
    try {
    arr.set(0, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify fill no-op length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_1800
     * @tc.name int32ArrayConstructorPart01TestMindmapTest018
     * @tc.desc Verify fill no-op length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest018() {
    Int32Array arr = new Int32Array();
    arr.fill(99);
    assertEqual(0, arr.length());
    }

    /**
     * Verify slice() returns empty Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_1900
     * @tc.name int32ArrayConstructorPart01TestMindmapTest019
     * @tc.desc Verify slice() returns empty Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest019() {
    Int32Array arr = new Int32Array();
    Int32Array s = arr.slice();
    assertEqual(0, s.length());
    assertEqual(0, s.byteLength());
    }

    /**
     * Verify subarray() buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_2000
     * @tc.name int32ArrayConstructorPart01TestMindmapTest020
     * @tc.desc Verify subarray() buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest020() {
    Int32Array arr = new Int32Array();
    Int32Array s = arr.subarray();
    assertEqual(0, s.length());
    assertEqual(arr.buffer(), s.buffer());
    }

    /**
     * Verify includes false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_2100
     * @tc.name int32ArrayConstructorPart01TestMindmapTest021
     * @tc.desc Verify includes false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest021() {
    Int32Array arr = new Int32Array();
    assertFalse(arr.includes(0));
    }

    /**
     * Verify (buf, 0, 0) null
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_2200
     * @tc.name int32ArrayConstructorPart01TestMindmapTest022
     * @tc.desc Verify (buf, 0, 0) null
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest022() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int32Array arr = new Int32Array(buf, 0, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_2300
     * @tc.name int32ArrayConstructorPart01TestMindmapTest023
     * @tc.desc Verify Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest023() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 0, 2);
    assertEqual(2, arr.length());
    }

    /**
     * Verify buf 4 ArrayBuffer length=1 length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_2400
     * @tc.name int32ArrayConstructorPart01TestMindmapTest024
     * @tc.desc Verify buf 4 ArrayBuffer length=1 length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest024() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int32Array arr = new Int32Array(buf, 0, 1);
    assertEqual(1, arr.length());
    }

    /**
     * Verify buf 12 ArrayBuffer length=3 length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_2500
     * @tc.name int32ArrayConstructorPart01TestMindmapTest025
     * @tc.desc Verify buf 12 ArrayBuffer length=3 length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest025() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 0, 3);
    assertEqual(3, arr.length());
    }

    /**
     * Verify 4 (5) length=0 byteOffset=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_2600
     * @tc.name int32ArrayConstructorPart01TestMindmapTest026
     * @tc.desc Verify 4 (5) length=0 byteOffset=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest026() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Int32Array arr = new Int32Array(buf, 0, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify 4 (7) byteOffset=4 length=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_2700
     * @tc.name int32ArrayConstructorPart01TestMindmapTest027
     * @tc.desc Verify 4 (7) byteOffset=4 length=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest027() {
    ArrayBuffer buf = new ArrayBuffer(7);
    Int32Array arr = new Int32Array(buf, 4, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify byteOffset=0 length=1 byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_2800
     * @tc.name int32ArrayConstructorPart01TestMindmapTest028
     * @tc.desc Verify byteOffset=0 length=1 byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest028() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int32Array arr = new Int32Array(buf, 0, 1);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify byteOffset and BYTES_PER_ELEMENT for an offset buffer view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_2900
     * @tc.name int32ArrayConstructorPart01TestMindmapTest029
     * @tc.desc Verify byteOffset and BYTES_PER_ELEMENT for an offset buffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest029() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 4, 1);
    assertEqual(4, arr.byteOffset());
    assertEqual(4, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify byteOffset=8 length=1 buf=12 9
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_3000
     * @tc.name int32ArrayConstructorPart01TestMindmapTest030
     * @tc.desc Verify byteOffset=8 length=1 buf=12 9
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest030() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 8, 1);
    assertEqual(8, arr.byteOffset());
    }

    /**
     * Verify byteOffset=4 length=2 buf=12 5 2 8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_3100
     * @tc.name int32ArrayConstructorPart01TestMindmapTest031
     * @tc.desc Verify byteOffset=4 length=2 buf=12 5 2 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest031() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 4, 2);
    assertEqual(4, arr.byteOffset());
    assertEqual(2, arr.length());
    }

    /**
     * Verify byteOffset=1 4 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_3200
     * @tc.name int32ArrayConstructorPart01TestMindmapTest032
     * @tc.desc Verify byteOffset=1 4 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest032() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, 1, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=2 4 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_3300
     * @tc.name int32ArrayConstructorPart01TestMindmapTest033
     * @tc.desc Verify byteOffset=2 4 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest033() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, 2, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=3 4 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_3400
     * @tc.name int32ArrayConstructorPart01TestMindmapTest034
     * @tc.desc Verify byteOffset=3 4 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest034() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, 3, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=5 4 4 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_3500
     * @tc.name int32ArrayConstructorPart01TestMindmapTest035
     * @tc.desc Verify byteOffset=5 4 4 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest035() {
    ArrayBuffer buf = new ArrayBuffer(12);
    try {
    new Int32Array(buf, 5, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=-4 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_3600
     * @tc.name int32ArrayConstructorPart01TestMindmapTest036
     * @tc.desc Verify byteOffset=-4 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest036() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, -4, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=-1 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_3700
     * @tc.name int32ArrayConstructorPart01TestMindmapTest037
     * @tc.desc Verify byteOffset=-1 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest037() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, -1, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset buf.byteLength length=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_3800
     * @tc.name int32ArrayConstructorPart01TestMindmapTest038
     * @tc.desc Verify byteOffset buf.byteLength length=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest038() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 8, 0);
    assertEqual(0, arr.length());
    assertEqual(8, arr.byteOffset());
    }

    /**
     * Verify byteOffset=4 buf 4 length=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_3900
     * @tc.name int32ArrayConstructorPart01TestMindmapTest039
     * @tc.desc Verify byteOffset=4 buf 4 length=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest039() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int32Array arr = new Int32Array(buf, 4, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify byteOffset buf.byteLength buf=8 offset=12 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_4000
     * @tc.name int32ArrayConstructorPart01TestMindmapTest040
     * @tc.desc Verify byteOffset buf.byteLength buf=8 offset=12 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest040() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, 12, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=4 buf=4 length=1 offset+4=8>4 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_4100
     * @tc.name int32ArrayConstructorPart01TestMindmapTest041
     * @tc.desc Verify byteOffset=4 buf=4 length=1 offset+4=8>4 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest041() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Int32Array(buf, 4, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length=0 byteOffset=0 buf 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_4200
     * @tc.name int32ArrayConstructorPart01TestMindmapTest042
     * @tc.desc Verify length=0 byteOffset=0 buf 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest042() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 0, 0);
    assertEqual(0, arr.length());
    assertEqual(0, arr.byteLength());
    }

    /**
     * Verify length=1 byteLength=4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_4300
     * @tc.name int32ArrayConstructorPart01TestMindmapTest043
     * @tc.desc Verify length=1 byteLength=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest043() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int32Array arr = new Int32Array(buf, 0, 1);
    assertEqual(1, arr.length());
    assertEqual(4, arr.byteLength());
    }

    /**
     * Verify length=2 byteLength=8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_4400
     * @tc.name int32ArrayConstructorPart01TestMindmapTest044
     * @tc.desc Verify length=2 byteLength=8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest044() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 0, 2);
    assertEqual(2, arr.length());
    assertEqual(8, arr.byteLength());
    }

    /**
     * Verify length buffer buf=12 offset=4 length=2 8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_4500
     * @tc.name int32ArrayConstructorPart01TestMindmapTest045
     * @tc.desc Verify length buffer buf=12 offset=4 length=2 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest045() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 4, 2);
    assertEqual(2, arr.length());
    assertEqual(8, arr.byteLength());
    }

    /**
     * Verify length=1 buf=8 offset=4 length=1 4 =1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_4600
     * @tc.name int32ArrayConstructorPart01TestMindmapTest046
     * @tc.desc Verify length=1 buf=8 offset=4 length=1 4 =1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest046() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 4, 1);
    assertEqual(1, arr.length());
    assertEqual(4, arr.byteLength());
    }

    /**
     * Verify length=-1 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_4700
     * @tc.name int32ArrayConstructorPart01TestMindmapTest047
     * @tc.desc Verify length=-1 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest047() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, 0, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length=-4 4 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_4800
     * @tc.name int32ArrayConstructorPart01TestMindmapTest048
     * @tc.desc Verify length=-4 4 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest048() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 0, -4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify buf=4 byteOffset=0 length=2 8 4 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_4900
     * @tc.name int32ArrayConstructorPart01TestMindmapTest049
     * @tc.desc Verify buf=4 byteOffset=0 length=2 8 4 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest049() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Int32Array(buf, 0, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify buf=8 byteOffset=4 length=2 offset+8=12>8 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_5000
     * @tc.name int32ArrayConstructorPart01TestMindmapTest050
     * @tc.desc Verify buf=8 byteOffset=4 length=2 offset+8=12>8 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest050() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Int32Array(buf, 4, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify buf=12 byteOffset=8 length=2 offset+8=16>12 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_5100
     * @tc.name int32ArrayConstructorPart01TestMindmapTest051
     * @tc.desc Verify buf=12 byteOffset=8 length=2 offset+8=16>12 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest051() {
    ArrayBuffer buf = new ArrayBuffer(12);
    try {
    new Int32Array(buf, 8, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=0 length=0 buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_5200
     * @tc.name int32ArrayConstructorPart01TestMindmapTest052
     * @tc.desc Verify byteOffset=0 length=0 buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest052() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int32Array arr = new Int32Array(buf, 0, 0);
    assertEqual(0, arr.length());
    assertEqual(0, arr.byteOffset());
    assertEqual(0, arr.byteLength());
    }

    /**
     * Verify byteOffset=8 length=1 12 buffer offset=8 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_5300
     * @tc.name int32ArrayConstructorPart01TestMindmapTest053
     * @tc.desc Verify byteOffset=8 length=1 12 buffer offset=8 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest053() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 8, 1);
    assertEqual(1, arr.length());
    assertEqual(8, arr.byteOffset());
    assertEqual(4, arr.byteLength());
    }

    /**
     * Verify byteOffset=4 buf=7 3 length=1 4 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_5400
     * @tc.name int32ArrayConstructorPart01TestMindmapTest054
     * @tc.desc Verify byteOffset=4 buf=7 3 length=1 4 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest054() {
    ArrayBuffer buf = new ArrayBuffer(7);
    try {
    new Int32Array(buf, 4, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=0 buf=5 4 length=2 8 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_5500
     * @tc.name int32ArrayConstructorPart01TestMindmapTest055
     * @tc.desc Verify byteOffset=0 buf=5 4 length=2 8 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest055() {
    ArrayBuffer buf = new ArrayBuffer(5);
    try {
    new Int32Array(buf, 0, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=4 length=0 buf=5 buf 4 offset=4 buf
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_5600
     * @tc.name int32ArrayConstructorPart01TestMindmapTest056
     * @tc.desc Verify byteOffset=4 length=0 buf=5 buf 4 offset=4 buf
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest056() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Int32Array arr = new Int32Array(buf, 4, 0);
    assertEqual(0, arr.length());
    assertEqual(4, arr.byteOffset());
    }

    /**
     * Verify buffer buf
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_5700
     * @tc.name int32ArrayConstructorPart01TestMindmapTest057
     * @tc.desc Verify buffer buf
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest057() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 0, 2);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify byteOffset buffer buf
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_5800
     * @tc.name int32ArrayConstructorPart01TestMindmapTest058
     * @tc.desc Verify byteOffset buffer buf
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest058() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 4, 2);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify byteLength length*4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_5900
     * @tc.name int32ArrayConstructorPart01TestMindmapTest059
     * @tc.desc Verify byteLength length*4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest059() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array arr = new Int32Array(buf, 4, 3);
    assertEqual(12, arr.byteLength());
    assertEqual(arr.length() * 4, arr.byteLength());
    }

    /**
     * Verify buffer.byteLength buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_6000
     * @tc.name int32ArrayConstructorPart01TestMindmapTest060
     * @tc.desc Verify buffer.byteLength buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest060() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf, 4, 1);
    assertEqual(12, arr.buffer().byteLength());
    }

    /**
     * Verify 0 buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_6100
     * @tc.name int32ArrayConstructorPart01TestMindmapTest061
     * @tc.desc Verify 0 buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest061() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 0, 2);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify $_set(0, 1) buffer offset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_6200
     * @tc.name int32ArrayConstructorPart01TestMindmapTest062
     * @tc.desc Verify $_set(0, 1) buffer offset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest062() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array a = new Int32Array(buf, 0, 2);
    Int32Array b = new Int32Array(buf, 0, 2);
    a.set(0, 1);
    assertEqualInt(1, b.get(0));
    }

    /**
     * Verify offset=4 offset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_6300
     * @tc.name int32ArrayConstructorPart01TestMindmapTest063
     * @tc.desc Verify offset=4 offset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest063() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array a = new Int32Array(buf, 4, 2);
    Int32Array b = new Int32Array(buf, 4, 2);
    a.set(0, 77);
    assertEqualInt(77, b.get(0));
    }

    /**
     * Verify buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_6600
     * @tc.name int32ArrayConstructorPart01TestMindmapTest066
     * @tc.desc Verify buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest066() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array a = new Int32Array(buf, 0, 1);
    Int32Array b = new Int32Array(buf, 4, 1);
    Int32Array c = new Int32Array(buf, 8, 1);
    a.set(0, 11);
    b.set(0, 22);
    c.set(0, 33);
    assertEqualInt(11, a.get(0));
    assertEqualInt(22, b.get(0));
    assertEqualInt(33, c.get(0));
    }

    /**
     * Verify buffer buffer length=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_6700
     * @tc.name int32ArrayConstructorPart01TestMindmapTest067
     * @tc.desc Verify buffer buffer length=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest067() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array full = new Int32Array(buf, 0, 2);
    Int32Array empty = new Int32Array(buf, 8, 0);
    full.set(0, 9);
    assertEqual(buf, empty.buffer());
    assertEqual(0, empty.length());
    assertEqualInt(9, full.get(0));
    }

    /**
     * Verify fill(7) buffer 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_7000
     * @tc.name int32ArrayConstructorPart01TestMindmapTest070
     * @tc.desc Verify fill(7) buffer 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest070() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array a = new Int32Array(buf, 0, 2);
    Int32Array b = new Int32Array(buf, 0, 2);
    a.fill(7);
    assertEqualInt(7, b.get(0));
    assertEqualInt(7, b.get(1));
    }

    /**
     * Verify set(Int32Array) buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_7100
     * @tc.name int32ArrayConstructorPart01TestMindmapTest071
     * @tc.desc Verify set(Int32Array) buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest071() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array src = Int32Array.of(42, 43);
    Int32Array dst = new Int32Array(buf, 0, 2);
    Int32Array mirror = new Int32Array(buf, 0, 2);
    dst.set(src);
    assertEqualInt(42, mirror.get(0));
    assertEqualInt(43, mirror.get(1));
    }

    /**
     * Verify reverse buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_7200
     * @tc.name int32ArrayConstructorPart01TestMindmapTest072
     * @tc.desc Verify reverse buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest072() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array a = new Int32Array(buf, 0, 2);
    a.set(0, 1);
    a.set(1, 2);
    Int32Array b = new Int32Array(buf, 0, 2);
    b.reverse();
    assertEqualInt(2, a.get(0));
    assertEqualInt(1, a.get(1));
    }

    /**
     * Verify ArrayBuffer buf buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_7300
     * @tc.name int32ArrayConstructorPart01TestMindmapTest073
     * @tc.desc Verify ArrayBuffer buf buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest073() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array arr = new Int32Array(buf, 0, 2);
    ArrayBuffer origBuf = buf;
    buf = new ArrayBuffer(16);
    assertEqual(origBuf, arr.buffer());
    assertEqual(8, arr.buffer().byteLength());
    }

    /**
     * Verify (offset=4)fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_7400
     * @tc.name int32ArrayConstructorPart01TestMindmapTest074
     * @tc.desc Verify (offset=4)fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest074() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array parent = new Int32Array(buf, 0, 2);
    Int32Array child = new Int32Array(buf, 4, 1);
    parent.set(0, 100);
    child.fill(200);
    assertEqualInt(100, parent.get(0));
    assertEqualInt(200, parent.get(1));
    }

    /**
     * Verify buffer(1024) offset=0 length=256 length=256
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_7500
     * @tc.name int32ArrayConstructorPart01TestMindmapTest075
     * @tc.desc Verify buffer(1024) offset=0 length=256 length=256
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest075() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Int32Array arr = new Int32Array(buf, 0, 256);
    assertEqual(256, arr.length());
    assertEqual(1024, arr.byteLength());
    }

    /**
     * Verify buffer(1024)offset=1020 length=1 int32
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART01_TEST_MINDMAP_7600
     * @tc.name int32ArrayConstructorPart01TestMindmapTest076
     * @tc.desc Verify buffer(1024)offset=1020 length=1 int32
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart01TestMindmapTest076() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Int32Array arr = new Int32Array(buf, 1020, 1);
    assertEqual(1, arr.length());
    assertEqual(1020, arr.byteOffset());
    }
}
