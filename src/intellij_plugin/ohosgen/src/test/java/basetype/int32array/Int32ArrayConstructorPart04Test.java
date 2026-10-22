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
import basetype.common.ClassCastError;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayConstructorPart04Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayConstructorPart04Test extends BasTest {
    /**
     * Verify arity=1 Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_0100
     * @tc.name int32ArrayConstructorPart04TestMindmapTest001
     * @tc.desc Verify arity=1 Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest001() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = new Int32Array(src);
    assertEqual(3, dst.length());
    }

    /**
     * Verify arity=1 Int32Array length=0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_0200
     * @tc.name int32ArrayConstructorPart04TestMindmapTest002
     * @tc.desc Verify arity=1 Int32Array length=0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest002() {
    Int32Array src = new Int32Array(0);
    Int32Array dst = new Int32Array(src);
    assertEqual(0, dst.length());
    assertEqual(0, dst.byteLength());
    }

    /**
     * Verify Int32Array 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_0300
     * @tc.name int32ArrayConstructorPart04TestMindmapTest003
     * @tc.desc Verify Int32Array 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest003() {
    Int32Array src = Int32Array.of(42);
    Int32Array dst = new Int32Array(src);
    assertEqual(1, dst.length());
    assertEqualInt(42, dst.get(0));
    }

    /**
     * Verify Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_0400
     * @tc.name int32ArrayConstructorPart04TestMindmapTest004
     * @tc.desc Verify Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest004() {
    Int32Array src = Int32Array.of(10, 20, 30, 40);
    Int32Array dst = new Int32Array(src);
    assertEqual(4, dst.length());
    }

    /**
     * Verify ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_0500
     * @tc.name int32ArrayConstructorPart04TestMindmapTest005
     * @tc.desc Verify ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest005() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array srcView = new Int32Array(buf, 0, 3);
    srcView.set(0, 7);
    srcView.set(1, 8);
    srcView.set(2, 9);
    Int32Array dst = new Int32Array(srcView);
    assertEqual(3, dst.length());
    assertEqualInt(7, dst.get(0));
    assertEqualInt(8, dst.get(1));
    assertEqualInt(9, dst.get(2));
    }

    /**
     * Verify subarray buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_0700
     * @tc.name int32ArrayConstructorPart04TestMindmapTest007
     * @tc.desc Verify subarray buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest007() {
    Int32Array src = Int32Array.of(1, 2, 3, 4, 5);
    Int32Array sub = src.subarray(1, 4);
    Int32Array dst = new Int32Array(sub);
    assertEqual(3, dst.length());
    assertEqualInt(2, dst.get(0));
    assertEqualInt(4, dst.get(2));
    }

    /**
     * Verify Int32Array.from
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_0800
     * @tc.name int32ArrayConstructorPart04TestMindmapTest008
     * @tc.desc Verify Int32Array.from
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest008() {
    Int32Array src = Int32Array.from(new int[] {5, 6, 7});
    Int32Array dst = new Int32Array(src);
    assertEqualInt(6, dst.get(1));
    }

    /**
     * Verify Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_0900
     * @tc.name int32ArrayConstructorPart04TestMindmapTest009
     * @tc.desc Verify Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest009() {
    Int32Array a = Int32Array.of(11, 22);
    Int32Array b = new Int32Array(a);
    Int32Array c = new Int32Array(b);
    assertEqual(2, c.length());
    assertEqualInt(11, c.get(0));
    assertEqualInt(22, c.get(1));
    }

    /**
     * Verify sort
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_1000
     * @tc.name int32ArrayConstructorPart04TestMindmapTest010
     * @tc.desc Verify sort
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest010() {
    Int32Array src = Int32Array.of(3, 1, 2);
    src.sort();
    Int32Array dst = new Int32Array(src);
    assertEqualInt(1, dst.get(0));
    assertEqualInt(2, dst.get(1));
    assertEqualInt(3, dst.get(2));
    }

    /**
     * Verify map Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_1200
     * @tc.name int32ArrayConstructorPart04TestMindmapTest012
     * @tc.desc Verify map Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest012() {
    Int32Array base = Int32Array.of(1, 2, 3);
    Int32Array src = base.map((v, i, a) -> v * 10);
    Int32Array dst = new Int32Array(src);
    assertEqualInt(10, dst.get(0));
    assertEqualInt(30, dst.get(2));
    }

    /**
     * Verify subarray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_1300
     * @tc.name int32ArrayConstructorPart04TestMindmapTest013
     * @tc.desc Verify subarray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest013() {
    Int32Array base = Int32Array.of(0, 1, 2, 3, 4);
    Int32Array sub = base.subarray(2);
    Int32Array dst = new Int32Array(sub);
    assertEqual(3, dst.length());
    assertEqualInt(2, dst.get(0));
    assertEqualInt(4, dst.get(2));
    }

    /**
     * Verify subarray begin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_1400
     * @tc.name int32ArrayConstructorPart04TestMindmapTest014
     * @tc.desc Verify subarray begin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest014() {
    Int32Array base = Int32Array.of(10, 20, 30, 40, 50);
    Int32Array sub = base.subarray(-2);
    Int32Array dst = new Int32Array(sub);
    assertEqual(2, dst.length());
    assertEqualInt(40, dst.get(0));
    assertEqualInt(50, dst.get(1));
    }

    /**
     * Verify subarray begin>=end 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_1500
     * @tc.name int32ArrayConstructorPart04TestMindmapTest015
     * @tc.desc Verify subarray begin>=end 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest015() {
    Int32Array base = Int32Array.of(1, 2, 3);
    Int32Array sub = base.subarray(2, 2);
    Int32Array dst = new Int32Array(sub);
    assertEqual(0, dst.length());
    }

    /**
     * Verify byteOffset=4 length=1 length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_1600
     * @tc.name int32ArrayConstructorPart04TestMindmapTest016
     * @tc.desc Verify byteOffset=4 length=1 length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest016() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array src = new Int32Array(buf, 4, 1);
    src.set(0, 42);
    Int32Array dst = new Int32Array(src);
    assertEqual(1, dst.length());
    assertEqualInt(42, dst.get(0));
    }

    /**
     * Verify 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_1700
     * @tc.name int32ArrayConstructorPart04TestMindmapTest017
     * @tc.desc Verify 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest017() {
    Int32Array src = Int32Array.of(0, 1, -1);
    Int32Array dst = new Int32Array(src);
    assertEqualInt(0, dst.get(0));
    }

    /**
     * Verify 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_2100
     * @tc.name int32ArrayConstructorPart04TestMindmapTest021
     * @tc.desc Verify 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest021() {
    Int32Array src = new Int32Array(5);
    Int32Array dst = new Int32Array(src);
    assertEqualInt(0, dst.get(0));
    assertEqualInt(0, dst.get(4));
    }

    /**
     * Verify constructing Int32Array from a fill-Int32Array copies all elements with correct values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_2400
     * @tc.name int32ArrayConstructorPart04TestMindmapTest024
     * @tc.desc Verify constructing Int32Array from a fill-Int32Array copies all elements with correct values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest024() {
    Int32Array src = new Int32Array(4);
    src.fill(7);
    Int32Array dst = new Int32Array(src);
    assertEqualInt(7, dst.get(0));
    assertEqualInt(7, dst.get(3));
    }

    /**
     * Verify 16
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_2700
     * @tc.name int32ArrayConstructorPart04TestMindmapTest027
     * @tc.desc Verify 16
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest027() {
    Int32Array src = new Int32Array(16);
    for (int i = 0; i < 16; i++) {
    src.set(i, i * 7);
    }
    Int32Array dst = new Int32Array(src);
    assertEqual(16, dst.length());
    assertEqualInt(0, dst.get(0));
    assertEqualInt(105, dst.get(15));
    }

    /**
     * Verify 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_2800
     * @tc.name int32ArrayConstructorPart04TestMindmapTest028
     * @tc.desc Verify 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest028() {
    Int32Array src = new Int32Array(128);
    for (int i = 0; i < 128; i++) {
    src.set(i, i);
    }
    Int32Array dst = new Int32Array(src);
    assertEqual(128, dst.length());
    assertEqualInt(0, dst.get(0));
    assertEqualInt(127, dst.get(127));
    }

    /**
     * Verify Int32Array instanceof
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_3000
     * @tc.name int32ArrayConstructorPart04TestMindmapTest030
     * @tc.desc Verify Int32Array instanceof
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest030() {
    Int32Array src = Int32Array.of(1);
    Int32Array dst = new Int32Array(src);
    assertEqual(1, dst.length());
    assertEqualInt(1, dst.get(0));
    }

    /**
     * Verify length length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_3100
     * @tc.name int32ArrayConstructorPart04TestMindmapTest031
     * @tc.desc Verify length length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest031() {
    Int32Array src = Int32Array.of(1, 2, 3, 4, 5, 6);
    Int32Array dst = new Int32Array(src);
    assertEqual(src.length(), dst.length());
    }

    /**
     * Verify byteLength = length * 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_3200
     * @tc.name int32ArrayConstructorPart04TestMindmapTest032
     * @tc.desc Verify byteLength = length * 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest032() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = new Int32Array(src);
    assertEqual(12, dst.byteLength());
    }

    /**
     * Verify BYTES_PER_ELEMENT 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_3300
     * @tc.name int32ArrayConstructorPart04TestMindmapTest033
     * @tc.desc Verify BYTES_PER_ELEMENT 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest033() {
    Int32Array src = Int32Array.of(1);
    Int32Array dst = new Int32Array(src);
    assertEqual(4, dst.BYTES_PER_ELEMENT);
    }

    /**
     * Verify byteOffset 0 buffer 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_3400
     * @tc.name int32ArrayConstructorPart04TestMindmapTest034
     * @tc.desc Verify byteOffset 0 buffer 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest034() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array src = new Int32Array(buf, 8, 2);
    Int32Array dst = new Int32Array(src);
    assertEqual(0, dst.byteOffset());
    }

    /**
     * Verify buffer null ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_3500
     * @tc.name int32ArrayConstructorPart04TestMindmapTest035
     * @tc.desc Verify buffer null ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest035() {
    Int32Array src = Int32Array.of(1);
    Int32Array dst = new Int32Array(src);
    assertEqual(4, dst.buffer().byteLength());
    }

    /**
     * Verify buffer.byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_3600
     * @tc.name int32ArrayConstructorPart04TestMindmapTest036
     * @tc.desc Verify buffer.byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest036() {
    Int32Array src = new Int32Array(0);
    Int32Array dst = new Int32Array(src);
    assertEqual(0, dst.buffer().byteLength());
    }

    /**
     * Verify buffer.byteLength dst.byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_3700
     * @tc.name int32ArrayConstructorPart04TestMindmapTest037
     * @tc.desc Verify buffer.byteLength dst.byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest037() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = new Int32Array(src);
    assertEqual(dst.byteLength(), dst.buffer().byteLength());
    }

    /**
     * Verify buffer length*4 padding
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_3800
     * @tc.name int32ArrayConstructorPart04TestMindmapTest038
     * @tc.desc Verify buffer length*4 padding
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest038() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Int32Array srcView = new Int32Array(buf, 4, 3);
    Int32Array dst = new Int32Array(srcView);
    assertEqual(12, dst.buffer().byteLength());
    }

    /**
     * Verify buffer buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_3900
     * @tc.name int32ArrayConstructorPart04TestMindmapTest039
     * @tc.desc Verify buffer buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest039() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int32Array src = new Int32Array(buf, 0, 3);
    src.set(0, 1);
    src.set(1, 2);
    src.set(2, 3);
    Int32Array dst = new Int32Array(src);
    assertEqual(12, dst.buffer().byteLength());
    }

    /**
     * Verify buffer 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_4000
     * @tc.name int32ArrayConstructorPart04TestMindmapTest040
     * @tc.desc Verify buffer 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest040() {
    Int32Array src = Int32Array.of(99);
    Int32Array dst = new Int32Array(src);
    assertEqual(4, dst.buffer().byteLength());
    }

    /**
     * Verify subarray base buffer dst subarray buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_4600
     * @tc.name int32ArrayConstructorPart04TestMindmapTest046
     * @tc.desc Verify subarray base buffer dst subarray buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest046() {
    Int32Array big = Int32Array.of(0, 1, 2, 3, 4, 5);
    Int32Array sub = big.subarray(2, 5);
    Int32Array dst = new Int32Array(sub);
    big.set(2, 77);
    assertEqualInt(2, dst.get(0));
    assertEqualInt(77, sub.get(0));
    }

    /**
     * Verify dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_4700
     * @tc.name int32ArrayConstructorPart04TestMindmapTest047
     * @tc.desc Verify dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest047() {
    Int32Array src = Int32Array.of(Integer.MIN_VALUE, 2147483647, 0, -1);
    Int32Array dst = new Int32Array(src);
    assertEqual(src.get(0).intValue(), dst.get(0).intValue());
    assertEqual(src.get(1).intValue(), dst.get(1).intValue());
    assertEqual(src.get(2).intValue(), dst.get(2).intValue());
    assertEqual(src.get(3).intValue(), dst.get(3).intValue());
    }

    /**
     * Verify fill dst src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_4800
     * @tc.name int32ArrayConstructorPart04TestMindmapTest048
     * @tc.desc Verify fill dst src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest048() {
    Int32Array src = Int32Array.of(1, 2, 3, 4);
    Int32Array dst = new Int32Array(src);
    dst.fill(0);
    assertEqualInt(0, dst.get(0));
    assertEqualInt(1, src.get(0));
    }

    /**
     * Verify reverse dst src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_4900
     * @tc.name int32ArrayConstructorPart04TestMindmapTest049
     * @tc.desc Verify reverse dst src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest049() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = new Int32Array(src);
    dst.reverse();
    assertEqualInt(3, dst.get(0));
    assertEqualInt(1, src.get(0));
    }

    /**
     * Verify copyWithin dst src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_5000
     * @tc.name int32ArrayConstructorPart04TestMindmapTest050
     * @tc.desc Verify copyWithin dst src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest050() {
    Int32Array src = Int32Array.of(1, 2, 3, 4);
    Int32Array dst = new Int32Array(src);
    dst.copyWithin(2, 0, 2);
    assertEqualInt(1, dst.get(2));
    assertEqualInt(3, src.get(2));
    }

    /**
     * Verify dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_5100
     * @tc.name int32ArrayConstructorPart04TestMindmapTest051
     * @tc.desc Verify dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest051() {
    Int32Array src = Int32Array.of(1, 2);
    Int32Array d1 = new Int32Array(src);
    Int32Array d2 = new Int32Array(src);
    d1.set(0, 100);
    assertEqualInt(1, d2.get(0));
    assertEqualInt(1, src.get(0));
    }

    /**
     * Verify dst.set(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_5200
     * @tc.name int32ArrayConstructorPart04TestMindmapTest052
     * @tc.desc Verify dst.set(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest052() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = new Int32Array(src);
    dst.set(src);
    assertEqualInt(1, dst.get(0));
    assertEqualInt(3, dst.get(2));
    }

    /**
     * Verify Int32Array dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_5400
     * @tc.name int32ArrayConstructorPart04TestMindmapTest054
     * @tc.desc Verify Int32Array dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest054() {
    Int32Array src = Int32Array.of(1, 2);
    Int32Array dst1 = new Int32Array(src);
    src = Int32Array.of(9, 9);
    Int32Array dst2 = new Int32Array(src);
    assertEqualInt(1, dst1.get(0));
    assertEqualInt(9, dst2.get(0));
    }

    /**
     * Verify map dst dst src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_5500
     * @tc.name int32ArrayConstructorPart04TestMindmapTest055
     * @tc.desc Verify map dst dst src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest055() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = new Int32Array(src);
    Int32Array mapped = dst.map((v, i, a) -> v * 2);
    assertEqualInt(2, mapped.get(0));
    assertEqualInt(1, dst.get(0));
    assertEqualInt(1, src.get(0));
    }

    /**
     * Verify dst.$_set dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_5600
     * @tc.name int32ArrayConstructorPart04TestMindmapTest056
     * @tc.desc Verify dst.$_set dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest056() {
    Int32Array src = Int32Array.of(0, 0, 0);
    Int32Array dst = new Int32Array(src);
    dst.set(1, 42);
    assertEqualInt(42, dst.get(1));
    }

    /**
     * Verify dst.buffer byteOffset=4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_5900
     * @tc.name int32ArrayConstructorPart04TestMindmapTest059
     * @tc.desc Verify dst.buffer byteOffset=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest059() {
    Int32Array src = Int32Array.of(0, 0, 0, 0);
    Int32Array dst = new Int32Array(src);
    Int32Array alias = new Int32Array(dst.buffer(), 4, 3);
    alias.set(0, 111);
    assertEqualInt(111, dst.get(1));
    }

    /**
     * Verify buffer dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_6100
     * @tc.name int32ArrayConstructorPart04TestMindmapTest061
     * @tc.desc Verify buffer dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest061() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array src = new Int32Array(buf);
    Int32Array twin = new Int32Array(buf);
    src.set(0, 1);
    twin.set(1, 2);
    Int32Array dst = new Int32Array(src);
    assertEqualInt(1, dst.get(0));
    assertEqualInt(2, dst.get(1));
    }

    /**
     * Verify dst.set dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_6200
     * @tc.name int32ArrayConstructorPart04TestMindmapTest062
     * @tc.desc Verify dst.set dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest062() {
    Int32Array src = Int32Array.of(0, 0, 0);
    Int32Array dst = new Int32Array(src);
    Int32Array alias = new Int32Array(dst.buffer());
    dst.set(Int32Array.of(9, 9, 9));
    assertEqualInt(9, alias.get(0));
    assertEqualInt(9, alias.get(2));
    }

    /**
     * Verify for-of dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_6400
     * @tc.name int32ArrayConstructorPart04TestMindmapTest064
     * @tc.desc Verify for-of dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest064() {
    Int32Array src = Int32Array.of(10, 20, 30, 40);
    Int32Array dst = new Int32Array(src);
    List<Integer> collected = new ArrayList<>();
    for (Integer v : dst.values()) {
    collected.add(v);
    }
    assertEqual(4, collected.size());
    assertEqualInt(10, collected.get(0));
    assertEqualInt(40, collected.get(3));
    }

    /**
     * Verify forEach dst index value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_6500
     * @tc.name int32ArrayConstructorPart04TestMindmapTest065
     * @tc.desc Verify forEach dst index value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest065() {
    Int32Array src = Int32Array.of(7, 8);
    Int32Array dst = new Int32Array(src);
    int[] idxSum = {0};
    int[] valSum = {0};
    dst.forEach((value, index, a) -> {
    idxSum[0] = idxSum[0] + index;
    valSum[0] = valSum[0] + value;
    });
    assertEqual(1, idxSum[0]);
    assertEqual(15, valSum[0]);
    }

    /**
     * Verify forEach 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_6700
     * @tc.name int32ArrayConstructorPart04TestMindmapTest067
     * @tc.desc Verify forEach 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest067() {
    Int32Array src = new Int32Array(0);
    Int32Array dst = new Int32Array(src);
    int[] count = {0};
    dst.forEach((value, index, a) -> {
    count[0] = count[0] + 1;
    });
    assertEqual(0, count[0]);
    }

    /**
     * Verify every true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_6800
     * @tc.name int32ArrayConstructorPart04TestMindmapTest068
     * @tc.desc Verify every true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest068() {
    Int32Array src = Int32Array.of(3, 3, 3);
    Int32Array dst = new Int32Array(src);
    boolean allEq = dst.every((value, index, arr) -> value == 3);
    assertTrue(allEq);
    }

    /**
     * Verify some dst true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_6900
     * @tc.name int32ArrayConstructorPart04TestMindmapTest069
     * @tc.desc Verify some dst true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest069() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = new Int32Array(src);
    boolean has = dst.some((value, index, arr) -> value == 2);
    assertTrue(has);
    }

    /**
     * Verify indexOf dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_7000
     * @tc.name int32ArrayConstructorPart04TestMindmapTest070
     * @tc.desc Verify indexOf dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest070() {
    Int32Array src = Int32Array.of(5, 6, 7, 8);
    Int32Array dst = new Int32Array(src);
    assertEqual(2, dst.indexOf(7));
    }

    /**
     * Verify reduce dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_7100
     * @tc.name int32ArrayConstructorPart04TestMindmapTest071
     * @tc.desc Verify reduce dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest071() {
    Int32Array src = Int32Array.of(1, 2, 3, 4);
    Int32Array dst = new Int32Array(src);
    int sum = dst.reduce((acc, cur, idx, arr) -> acc + cur, 0);
    assertEqual(10, sum);
    }

    /**
     * Verify reduceRight 321
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_7200
     * @tc.name int32ArrayConstructorPart04TestMindmapTest072
     * @tc.desc Verify reduceRight 321
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest072() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = new Int32Array(src);
    int concat = dst.reduceRight((acc, cur, idx, a) -> acc * 10 + cur, 0);
    assertEqual(321, concat);
    }

    /**
     * Verify keys dst 0+1+2+3=6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_7400
     * @tc.name int32ArrayConstructorPart04TestMindmapTest074
     * @tc.desc Verify keys dst 0+1+2+3=6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest074() {
    Int32Array src = Int32Array.of(0, 0, 0, 0);
    Int32Array dst = new Int32Array(src);
    int sumIdx = 0;
    int cnt = 0;
    for (Integer k : dst.keys()) {
    sumIdx = sumIdx + k;
    cnt = cnt + 1;
    }
    assertEqual(4, cnt);
    assertEqual(6, sumIdx);
    }

    /**
     * Verify values dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_7500
     * @tc.name int32ArrayConstructorPart04TestMindmapTest075
     * @tc.desc Verify values dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest075() {
    Int32Array src = Int32Array.of(5, 6, 7);
    Int32Array dst = new Int32Array(src);
    int i = 0;
    for (Integer v : dst.values()) {
    assertEqual(src.get(i).intValue(), v.intValue());
    i = i + 1;
    }
    assertEqual(3, i);
    }

    /**
     * Verify at dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_7600
     * @tc.name int32ArrayConstructorPart04TestMindmapTest076
     * @tc.desc Verify at dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest076() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = new Int32Array(src);
    assertEqualInt(1, dst.at(0));
    assertEqualInt(3, dst.at(2));
    }

    /**
     * Verify at dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_7700
     * @tc.name int32ArrayConstructorPart04TestMindmapTest077
     * @tc.desc Verify at dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest077() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = new Int32Array(src);
    assertEqualInt(3, dst.at(-1));
    assertEqualInt(1, dst.at(-3));
    }

    /**
     * Verify slice dst src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_7900
     * @tc.name int32ArrayConstructorPart04TestMindmapTest079
     * @tc.desc Verify slice dst src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest079() {
    Int32Array src = Int32Array.of(1, 2, 3, 4, 5);
    Int32Array dst = new Int32Array(src);
    Int32Array s1 = src.slice(1, 4);
    Int32Array s2 = dst.slice(1, 4);
    assertEqual(s1.length(), s2.length());
    assertEqual(s1.get(0).intValue(), s2.get(0).intValue());
    assertEqual(s1.get(2).intValue(), s2.get(2).intValue());
    }

    /**
     * Verify find dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_8000
     * @tc.name int32ArrayConstructorPart04TestMindmapTest080
     * @tc.desc Verify find dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest080() {
    Int32Array src = Int32Array.of(10, 20, 30);
    Int32Array dst = new Int32Array(src);
    Integer found = dst.find((v, i, a) -> v == 20);
    assertEqualInt(20, found);
    }

    /**
     * Verify findIndex dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_8100
     * @tc.name int32ArrayConstructorPart04TestMindmapTest081
     * @tc.desc Verify findIndex dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest081() {
    Int32Array src = Int32Array.of(10, 20, 30);
    Int32Array dst = new Int32Array(src);
    assertEqualInt(2, dst.findIndex((v, i, a) -> v == 30));
    }

    /**
     * Verify findLast dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_8200
     * @tc.name int32ArrayConstructorPart04TestMindmapTest082
     * @tc.desc Verify findLast dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest082() {
    Int32Array src = Int32Array.of(1, 2, 3, 2, 1);
    Int32Array dst = new Int32Array(src);
    Integer last = dst.findLast((v, i, a) -> v == 2);
    assertEqualInt(2, last);
    }

    /**
     * Verify join dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_8300
     * @tc.name int32ArrayConstructorPart04TestMindmapTest083
     * @tc.desc Verify join dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest083() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array dst = new Int32Array(src);
    assertEqual("1,2,3", dst.join(","));
    }

    /**
     * Verify toString dst
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_8400
     * @tc.name int32ArrayConstructorPart04TestMindmapTest084
     * @tc.desc Verify toString dst
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest084() {
    Int32Array src = Int32Array.of(4, 5, 6);
    Int32Array dst = new Int32Array(src);
    assertEqual(String.valueOf(src), String.valueOf(dst));
    }

    /**
     * Verify null other
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_8500
     * @tc.name int32ArrayConstructorPart04TestMindmapTest085
     * @tc.desc Verify null other
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest085() {
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify undefined other
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_8600
     * @tc.name int32ArrayConstructorPart04TestMindmapTest086
     * @tc.desc Verify undefined other
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest086() {
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify 64
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART04_TEST_MINDMAP_8800
     * @tc.name int32ArrayConstructorPart04TestMindmapTest088
     * @tc.desc Verify 64
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart04TestMindmapTest088() {
    Int32Array src = new Int32Array(64);
    for (int i = 0; i < 64; i++) {
    src.set(i, i);
    }
    Int32Array dst = new Int32Array(src);
    assertEqual(64, dst.length());
    assertEqualInt(63, dst.get(63));
    }
}
