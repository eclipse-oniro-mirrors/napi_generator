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

package basetype.int32array;

import basetype.common.Int32Array;
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.RangeError;

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayConstructorPart02Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayConstructorPart02Test extends BasTest {
    /**
     * Verify zero-length Int32Array properties and ArrayBuffer backing
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_0100
     * @tc.name int32ArrayConstructorPart02TestMindmapTest001
     * @tc.desc Verify zero-length Int32Array properties and ArrayBuffer backing
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest001() {
    Int32Array a = new Int32Array(0);
    assertEqual(0, a.length());
    assertEqual(0, a.byteLength());
    assertEqual(0, a.byteOffset());
    assertTrue(a.buffer() instanceof ArrayBuffer);
    }

    /**
     * Verify length=1 length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_0200
     * @tc.name int32ArrayConstructorPart02TestMindmapTest002
     * @tc.desc Verify length=1 length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest002() {
    Int32Array a = new Int32Array(1);
    assertEqual(1, a.length());
    assertEqual(4, a.byteLength());
    assertEqual(4, a.BYTES_PER_ELEMENT);
    assertEqual(4, a.buffer().byteLength());
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify length=4 length 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_0300
     * @tc.name int32ArrayConstructorPart02TestMindmapTest003
     * @tc.desc Verify length=4 length 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest003() {
    Int32Array a = new Int32Array(4);
    assertEqual(4, a.length());
    assertEqual(16, a.byteLength());
    assertEqualInt(0, a.get(0));
    assertEqualInt(0, a.get(1));
    assertEqualInt(0, a.get(2));
    assertEqualInt(0, a.get(3));
    }

    /**
     * Verify length=-1 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_0400
     * @tc.name int32ArrayConstructorPart02TestMindmapTest004
     * @tc.desc Verify length=-1 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest004() {
    try {
    new Int32Array(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length=-8 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_0500
     * @tc.name int32ArrayConstructorPart02TestMindmapTest005
     * @tc.desc Verify length=-8 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest005() {
    try {
    new Int32Array(-8);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length=3 buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_0600
     * @tc.name int32ArrayConstructorPart02TestMindmapTest006
     * @tc.desc Verify length=3 buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest006() {
    Int32Array a = new Int32Array(3);
    Int32Array b = new Int32Array(3);
    a.set(0, 111);
    assertEqualInt(0, b.get(0));
    }

    /**
     * Verify length=2 $_get(2) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_0700
     * @tc.name int32ArrayConstructorPart02TestMindmapTest007
     * @tc.desc Verify length=2 $_get(2) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest007() {
    Int32Array a = new Int32Array(2);
    try {
    a.get(2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length=2 $_set(2, 99) throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_0800
     * @tc.name int32ArrayConstructorPart02TestMindmapTest008
     * @tc.desc Verify length=2 $_set(2, 99) throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest008() {
    Int32Array a = new Int32Array(2);
    try {
    a.set(2, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_1000
     * @tc.name int32ArrayConstructorPart02TestMindmapTest010
     * @tc.desc Verify length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest010() {
    Int32Array a = new Int32Array(1);
    a.set(0, 42);
    assertEqualInt(42, a.get(0));
    }

    /**
     * Verify length=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_1100
     * @tc.name int32ArrayConstructorPart02TestMindmapTest011
     * @tc.desc Verify length=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest011() {
    Int32Array a = new Int32Array(2);
    a.set(0, 10);
    a.set(1, 20);
    assertEqualInt(10, a.get(0));
    assertEqualInt(20, a.get(1));
    }

    /**
     * Verify (buf, 0, 2) length=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_1400
     * @tc.name int32ArrayConstructorPart02TestMindmapTest014
     * @tc.desc Verify (buf, 0, 2) length=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest014() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 2);
    assertEqual(2, a.length());
    }

    /**
     * Verify (buf, 4, 2) byteOffset=4 byteLength=8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_1500
     * @tc.name int32ArrayConstructorPart02TestMindmapTest015
     * @tc.desc Verify (buf, 4, 2) byteOffset=4 byteLength=8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest015() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 4, 2);
    assertEqual(4, a.byteOffset());
    assertEqual(8, a.byteLength());
    }

    /**
     * Verify (buf, 0, 0) length=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_1600
     * @tc.name int32ArrayConstructorPart02TestMindmapTest016
     * @tc.desc Verify (buf, 0, 0) length=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest016() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 0);
    assertEqual(0, a.length());
    }

    /**
     * Verify (buf, 12, 1) buffer length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_1700
     * @tc.name int32ArrayConstructorPart02TestMindmapTest017
     * @tc.desc Verify (buf, 12, 1) buffer length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest017() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 12, 1);
    assertEqual(1, a.length());
    assertEqual(12, a.byteOffset());
    }

    /**
     * Verify (buf, 8, 1) byteLength=4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_1800
     * @tc.name int32ArrayConstructorPart02TestMindmapTest018
     * @tc.desc Verify (buf, 8, 1) byteLength=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest018() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 8, 1);
    assertEqual(4, a.byteLength());
    }

    /**
     * Verify (buf, 0, 4) length=4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_1900
     * @tc.name int32ArrayConstructorPart02TestMindmapTest019
     * @tc.desc Verify (buf, 0, 4) length=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest019() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 4);
    assertEqual(4, a.length());
    assertEqual(16, a.byteLength());
    }

    /**
     * Verify (buf, 0) length= /4=4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_2000
     * @tc.name int32ArrayConstructorPart02TestMindmapTest020
     * @tc.desc Verify (buf, 0) length= /4=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest020() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0);
    assertEqual(4, a.length());
    }

    /**
     * Verify (buf, 4) length= /4=3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_2100
     * @tc.name int32ArrayConstructorPart02TestMindmapTest021
     * @tc.desc Verify (buf, 4) length= /4=3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest021() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 4);
    assertEqual(3, a.length());
    }

    /**
     * Verify (buf, 8) length=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_2200
     * @tc.name int32ArrayConstructorPart02TestMindmapTest022
     * @tc.desc Verify (buf, 8) length=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest022() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 8);
    assertEqual(2, a.length());
    }

    /**
     * Verify (buf, 12) length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_2300
     * @tc.name int32ArrayConstructorPart02TestMindmapTest023
     * @tc.desc Verify (buf, 12) length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest023() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 12);
    assertEqual(1, a.length());
    }

    /**
     * Verify (buf, 16) length=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_2400
     * @tc.name int32ArrayConstructorPart02TestMindmapTest024
     * @tc.desc Verify (buf, 16) length=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest024() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 16);
    assertEqual(0, a.length());
    }

    /**
     * Verify (buf, 0) byteLength=buf.byteLength=16
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_2500
     * @tc.name int32ArrayConstructorPart02TestMindmapTest025
     * @tc.desc Verify (buf, 0) byteLength=buf.byteLength=16
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest025() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0);
    assertEqual(16, a.byteLength());
    }

    /**
     * Verify (buf, 4) byteLength= 12
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_2600
     * @tc.name int32ArrayConstructorPart02TestMindmapTest026
     * @tc.desc Verify (buf, 4) byteLength= 12
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest026() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 4);
    assertEqual(12, a.byteLength());
    }

    /**
     * Verify (buf, undefined, 2) byteOffset 0 length 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_2700
     * @tc.name int32ArrayConstructorPart02TestMindmapTest027
     * @tc.desc Verify (buf, undefined, 2) byteOffset 0 length 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest027() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 2);
    assertEqual(0, a.byteOffset());
    assertEqual(2, a.length());
    }

    /**
     * Verify (buf, 4, undefined) byteOffset=4 length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_2800
     * @tc.name int32ArrayConstructorPart02TestMindmapTest028
     * @tc.desc Verify (buf, 4, undefined) byteOffset=4 length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest028() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 4);
    assertEqual(4, a.byteOffset());
    assertEqual(3, a.length());
    }

    /**
     * Verify (buf, undefined, undefined) undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_2900
     * @tc.name int32ArrayConstructorPart02TestMindmapTest029
     * @tc.desc Verify (buf, undefined, undefined) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest029() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf);
    assertEqual(0, a.byteOffset());
    assertEqual(4, a.length());
    }

    /**
     * Verify (buf, undefined, 0) byteOffset 0 length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_3000
     * @tc.name int32ArrayConstructorPart02TestMindmapTest030
     * @tc.desc Verify (buf, undefined, 0) byteOffset 0 length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest030() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 0);
    assertEqual(0, a.byteOffset());
    assertEqual(0, a.length());
    }

    /**
     * Verify (buf, 8, undefined) byteOffset=8 length= 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_3100
     * @tc.name int32ArrayConstructorPart02TestMindmapTest031
     * @tc.desc Verify (buf, 8, undefined) byteOffset=8 length= 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest031() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 8);
    assertEqual(2, a.length());
    assertEqual(8, a.byteLength());
    }

    /**
     * Verify ArrayBuffer (0, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_3200
     * @tc.name int32ArrayConstructorPart02TestMindmapTest032
     * @tc.desc Verify ArrayBuffer (0, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest032() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int32Array a = new Int32Array(buf, 0, 0);
    assertEqual(0, a.length());
    }

    /**
     * Verify 4 ArrayBuffer (buf, 0) length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_3300
     * @tc.name int32ArrayConstructorPart02TestMindmapTest033
     * @tc.desc Verify 4 ArrayBuffer (buf, 0) length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest033() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int32Array a = new Int32Array(buf, 0);
    assertEqual(1, a.length());
    }

    /**
     * Verify buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_3400
     * @tc.name int32ArrayConstructorPart02TestMindmapTest034
     * @tc.desc Verify buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest034() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 4);
    assertEqual(buf, a.buffer());
    }

    /**
     * Verify length and BYTES_PER_ELEMENT for an explicit buffer view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_3500
     * @tc.name int32ArrayConstructorPart02TestMindmapTest035
     * @tc.desc Verify length and BYTES_PER_ELEMENT for an explicit buffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest035() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 4);
    assertEqual(4, a.BYTES_PER_ELEMENT);
    assertEqual(4, a.length());
    }

    /**
     * Verify byteOffset=1 4 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_3600
     * @tc.name int32ArrayConstructorPart02TestMindmapTest036
     * @tc.desc Verify byteOffset=1 4 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest036() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 1, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=2 4 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_3700
     * @tc.name int32ArrayConstructorPart02TestMindmapTest037
     * @tc.desc Verify byteOffset=2 4 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest037() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 2, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=3 4 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_3800
     * @tc.name int32ArrayConstructorPart02TestMindmapTest038
     * @tc.desc Verify byteOffset=3 4 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest038() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 3, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=-4 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_3900
     * @tc.name int32ArrayConstructorPart02TestMindmapTest039
     * @tc.desc Verify byteOffset=-4 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest039() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, -4, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=-1 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_4000
     * @tc.name int32ArrayConstructorPart02TestMindmapTest040
     * @tc.desc Verify byteOffset=-1 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest040() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=20 buf=16 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_4100
     * @tc.name int32ArrayConstructorPart02TestMindmapTest041
     * @tc.desc Verify byteOffset=20 buf=16 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest041() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 20);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=17 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_4200
     * @tc.name int32ArrayConstructorPart02TestMindmapTest042
     * @tc.desc Verify byteOffset=17 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest042() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 17);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=5 4 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_4300
     * @tc.name int32ArrayConstructorPart02TestMindmapTest043
     * @tc.desc Verify byteOffset=5 4 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest043() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=6 4 length=2 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_4400
     * @tc.name int32ArrayConstructorPart02TestMindmapTest044
     * @tc.desc Verify byteOffset=6 4 length=2 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest044() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 6, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify number byteOffset=2.9 2 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_4500
     * @tc.name int32ArrayConstructorPart02TestMindmapTest045
     * @tc.desc Verify number byteOffset=2.9 2 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest045() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 2.9, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify number byteOffset=4 4 length=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_4600
     * @tc.name int32ArrayConstructorPart02TestMindmapTest046
     * @tc.desc Verify number byteOffset=4 4 length=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest046() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 4, 2);
    assertEqual(4, a.byteOffset());
    assertEqual(2, a.length());
    }

    /**
     * Verify number byteOffset=-0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_4700
     * @tc.name int32ArrayConstructorPart02TestMindmapTest047
     * @tc.desc Verify number byteOffset=-0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest047() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, -0, 2);
    assertEqual(0, a.byteOffset());
    }

    /**
     * Verify number byteOffset=0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_4800
     * @tc.name int32ArrayConstructorPart02TestMindmapTest048
     * @tc.desc Verify number byteOffset=0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest048() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 2);
    assertEqual(0, a.byteOffset());
    assertEqual(2, a.length());
    }

    /**
     * Verify number byteOffset=8.1 8 length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_4900
     * @tc.name int32ArrayConstructorPart02TestMindmapTest049
     * @tc.desc Verify number byteOffset=8.1 8 length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest049() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 8.1, 1);
    assertEqual(8, a.byteOffset());
    assertEqual(1, a.length());
    }

    /**
     * Verify length=-1 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_5000
     * @tc.name int32ArrayConstructorPart02TestMindmapTest050
     * @tc.desc Verify length=-1 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest050() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 0, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length=5 buf=16(20) RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_5100
     * @tc.name int32ArrayConstructorPart02TestMindmapTest051
     * @tc.desc Verify length=5 buf=16(20) RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest051() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 0, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=12 length=2 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_5200
     * @tc.name int32ArrayConstructorPart02TestMindmapTest052
     * @tc.desc Verify byteOffset=12 length=2 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest052() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 12, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=8 length=3 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_5300
     * @tc.name int32ArrayConstructorPart02TestMindmapTest053
     * @tc.desc Verify byteOffset=8 length=3 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest053() {
    ArrayBuffer buf = new ArrayBuffer(16);
    try {
    new Int32Array(buf, 8, 3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify length=0 byteOffset=16
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_5400
     * @tc.name int32ArrayConstructorPart02TestMindmapTest054
     * @tc.desc Verify length=0 byteOffset=16
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest054() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 16, 0);
    assertEqual(0, a.length());
    assertEqual(16, a.byteOffset());
    }

    /**
     * Verify number length=2.9 2 byteLength=8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_5500
     * @tc.name int32ArrayConstructorPart02TestMindmapTest055
     * @tc.desc Verify number length=2.9 2 byteLength=8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest055() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 2.9);
    assertEqual(2, a.length());
    assertEqual(8, a.byteLength());
    }

    /**
     * Verify number length=-0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_5600
     * @tc.name int32ArrayConstructorPart02TestMindmapTest056
     * @tc.desc Verify number length=-0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest056() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, -0);
    assertEqual(0, a.length());
    }

    /**
     * Verify number length=3 3 byteLength=12
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_5700
     * @tc.name int32ArrayConstructorPart02TestMindmapTest057
     * @tc.desc Verify number length=3 3 byteLength=12
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest057() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 3);
    assertEqual(3, a.length());
    assertEqual(12, a.byteLength());
    }

    /**
     * Verify number length=1 1 byteLength=4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_5800
     * @tc.name int32ArrayConstructorPart02TestMindmapTest058
     * @tc.desc Verify number length=1 1 byteLength=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest058() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 4, 1);
    assertEqual(1, a.length());
    assertEqual(4, a.byteLength());
    }

    /**
     * Verify byteOffset=4 length=3 buf=16 12
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_5900
     * @tc.name int32ArrayConstructorPart02TestMindmapTest059
     * @tc.desc Verify byteOffset=4 length=3 buf=16 12
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest059() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 4, 3);
    assertEqual(3, a.length());
    assertEqual(4, a.byteOffset());
    assertEqual(12, a.byteLength());
    }

    /**
     * Verify length:int buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_6000
     * @tc.name int32ArrayConstructorPart02TestMindmapTest060
     * @tc.desc Verify length:int buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest060() {
    Int32Array a = new Int32Array(2);
    Int32Array b = new Int32Array(2);
    a.set(0, 111);
    assertEqualInt(0, b.get(0));
    }

    /**
     * Verify 4 8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_6100
     * @tc.name int32ArrayConstructorPart02TestMindmapTest061
     * @tc.desc Verify 4 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest061() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array b = new Int32Array(buf, 4, 3);
    Int32Array c = new Int32Array(buf, 8, 2);
    b.set(1, 222);
    assertEqualInt(222, c.get(0));
    }

    /**
     * Verify buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_6500
     * @tc.name int32ArrayConstructorPart02TestMindmapTest065
     * @tc.desc Verify buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest065() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 0);
    Int32Array b = new Int32Array(buf, 4, 0);
    assertEqual(b.buffer(), a.buffer());
    assertEqual(0, a.length());
    assertEqual(0, b.length());
    }

    /**
     * Verify undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_6600
     * @tc.name int32ArrayConstructorPart02TestMindmapTest066
     * @tc.desc Verify undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest066() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 0, 4);
    Int32Array b = new Int32Array(buf, 0, 4);
    a.set(2, 123);
    assertEqualInt(123, b.get(2));
    }

    /**
     * Verify Object instanceof Int32Array true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_6800
     * @tc.name int32ArrayConstructorPart02TestMindmapTest068
     * @tc.desc Verify Object instanceof Int32Array true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest068() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array a = new Int32Array(buf, 0, 2);
    assertEqual(2, a.length());
    assertEqual(0, a.byteOffset());
    }

    /**
     * Verify length(int) Object instanceof Int32Array true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_6900
     * @tc.name int32ArrayConstructorPart02TestMindmapTest069
     * @tc.desc Verify length(int) Object instanceof Int32Array true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest069() {
    Int32Array a = new Int32Array(3);
    assertEqual(3, a.length());
    assertEqualInt(0, a.get(0));
    }

    /**
     * Verify buffer null
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART02_TEST_MINDMAP_7000
     * @tc.name int32ArrayConstructorPart02TestMindmapTest070
     * @tc.desc Verify buffer null
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart02TestMindmapTest070() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array a = new Int32Array(buf, 0, 2);
    assertEqual(8, a.buffer().byteLength());
    }
}
