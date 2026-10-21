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

package basetype.int16array;

import basetype.common.Int16Array;
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.RangeError;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayPropertiesTest01 —— Int16Array 方法族 XTS 测试。
 *
 * @since 2026-10-20
 */
public class Int16ArrayPropertiesTest01 extends BasTest {
    /**
     * Verify new Int16Array(buf, intOffset) BYTES_PER_ELEMENT equals 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_0100
     * @tc.name testInt16ArrayPropertiesTestOne001
     * @tc.desc Verify new Int16Array(buf, intOffset) BYTES_PER_ELEMENT equals 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne001() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array arr = new Int16Array(buf, 0);
    int actualBytesPerElement = arr.BYTES_PER_ELEMENT;
    int expectedBytesPerElement = 2;
    assertEqual(expectedBytesPerElement, actualBytesPerElement);
    }

    /**
     * Verify new Int16Array(buf, numberOffset) BYTES_PER_ELEMENT equals 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_0200
     * @tc.name testInt16ArrayPropertiesTestOne002
     * @tc.desc Verify new Int16Array(buf, numberOffset) BYTES_PER_ELEMENT equals 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne002() {
    ArrayBuffer buf = new ArrayBuffer(4);
    double offset = 0.0;
    Int16Array arr = new Int16Array(buf, offset);
    int actualBytesPerElement = arr.BYTES_PER_ELEMENT;
    int expectedBytesPerElement = 2;
    assertEqual(expectedBytesPerElement, actualBytesPerElement);
    }

    /**
     * Verify new Int16Array(buf, intOffset, intLength) BYTES_PER_ELEMENT equals 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_0300
     * @tc.name testInt16ArrayPropertiesTestOne003
     * @tc.desc Verify new Int16Array(buf, intOffset, intLength) BYTES_PER_ELEMENT equals 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne003() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array arr = new Int16Array(buf, 0, 2);
    int actualBytesPerElement = arr.BYTES_PER_ELEMENT;
    int expectedBytesPerElement = 2;
    assertEqual(expectedBytesPerElement, actualBytesPerElement);
    }

    /**
     * Verify Int16Array.BYTES_PER_ELEMENT typed as int equals 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_0400
     * @tc.name testInt16ArrayPropertiesTestOne004
     * @tc.desc Verify Int16Array.BYTES_PER_ELEMENT typed as int equals 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne004() {
    int val = Int16Array.BYTES_PER_ELEMENT;
    int expectedValue = 2;
    assertEqual(expectedValue, val);
    }

    /**
     * Verify Int16Array.from instance BYTES_PER_ELEMENT equals 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_0500
     * @tc.name testInt16ArrayPropertiesTestOne005
     * @tc.desc Verify Int16Array.from instance BYTES_PER_ELEMENT equals 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne005() {
    Int16Array src = Int16Array.of(5, 6);
    Int16Array arr = Int16Array.from(src);
    int actualBytesPerElement = arr.BYTES_PER_ELEMENT;
    int expectedBytesPerElement = 2;
    assertEqual(expectedBytesPerElement, actualBytesPerElement);
    }

    /**
     * Verify new Int16Array() buffer is an empty ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_0600
     * @tc.name testInt16ArrayPropertiesTestOne006
     * @tc.desc Verify new Int16Array() buffer is an empty ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne006() {
    Int16Array arr = new Int16Array();
    int actualByteLength = arr.buffer().byteLength();
    int expectedByteLength = 0;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify new Int16Array(int) allocates exact buffer and view byte lengths
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_0700
     * @tc.name testInt16ArrayPropertiesTestOne007
     * @tc.desc Verify new Int16Array(int) allocates exact buffer and view byte lengths
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne007() {
    Int16Array arr = new Int16Array(3);
    int actualBufferByteLength = arr.buffer().byteLength();
    int expectedBufferByteLength = 6;
    assertEqual(expectedBufferByteLength, actualBufferByteLength);
    int actualByteLength = arr.byteLength();
    int expectedByteLength = 6;
    assertEqual(expectedByteLength, actualByteLength);
    int actualLength = arr.length();
    int expectedLength = 3;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify new Int16Array(number) buffer property is not null
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_0800
     * @tc.name testInt16ArrayPropertiesTestOne008
     * @tc.desc Verify new Int16Array(number) buffer property is not null
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne008() {
    Int16Array arr = new Int16Array(3.0);
    int actualByteLength = arr.buffer().byteLength();
    int expectedByteLength = arr.byteLength();
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify new Int16Array(src) buffer is independent from source buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_0900
     * @tc.name testInt16ArrayPropertiesTestOne009
     * @tc.desc Verify new Int16Array(src) buffer is independent from source buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne009() {
    Int16Array src = Int16Array.of(1, 2);
    Int16Array arr = new Int16Array(src);
    assertNotEqual(src.buffer(), arr.buffer());
    }

    /**
     * Verify new Int16Array(buf, numberOffset) buffer same reference as buf
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_1000
     * @tc.name testInt16ArrayPropertiesTestOne010
     * @tc.desc Verify new Int16Array(buf, numberOffset) buffer same reference as buf
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne010() {
    ArrayBuffer buf = new ArrayBuffer(4);
    double offset = 0.0;
    Int16Array arr = new Int16Array(buf, offset);
    ArrayBuffer actualBuffer = arr.buffer();
    ArrayBuffer expectedBuffer = buf;
    assertEqual(expectedBuffer, actualBuffer);
    }

    /**
     * Verify new Int16Array(zero ArrayBuffer) buffer.byteLength equals 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_1100
     * @tc.name testInt16ArrayPropertiesTestOne011
     * @tc.desc Verify new Int16Array(zero ArrayBuffer) buffer.byteLength equals 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne011() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int16Array arr = new Int16Array(buf);
    int actualByteLength = arr.buffer().byteLength();
    int expectedByteLength = 0;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify new Int16Array() byteOffset equals 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_1200
     * @tc.name testInt16ArrayPropertiesTestOne012
     * @tc.desc Verify new Int16Array() byteOffset equals 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne012() {
    Int16Array arr = new Int16Array();
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = 0;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify new Int16Array(int length) byteOffset equals 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_1300
     * @tc.name testInt16ArrayPropertiesTestOne013
     * @tc.desc Verify new Int16Array(int length) byteOffset equals 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne013() {
    Int16Array arr = new Int16Array(3);
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = 0;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify Int16Array byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_1400
     * @tc.name testInt16ArrayPropertiesTestOne014
     * @tc.desc Verify Int16Array byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne014() {
    Int16Array src = Int16Array.of(1, 2);
    Int16Array arr = new Int16Array(src);
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = 0;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify ArrayBuffer + undefined + undefined byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_1500
     * @tc.name testInt16ArrayPropertiesTestOne015
     * @tc.desc Verify ArrayBuffer + undefined + undefined byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne015() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array arr = new Int16Array(buf);
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = 0;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify int byteOffset = 0 byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_1600
     * @tc.name testInt16ArrayPropertiesTestOne016
     * @tc.desc Verify int byteOffset = 0 byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne016() {
    ArrayBuffer buf = new ArrayBuffer(4);
    int offset = 0;
    Int16Array arr = new Int16Array(buf, offset);
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = 0;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify Int16Array.of byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_1700
     * @tc.name testInt16ArrayPropertiesTestOne017
     * @tc.desc Verify Int16Array.of byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne017() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = 0;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify Int16Array.from byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_1800
     * @tc.name testInt16ArrayPropertiesTestOne018
     * @tc.desc Verify Int16Array.from byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne018() {
    Int16Array src = Int16Array.of(5, 6);
    Int16Array arr = Int16Array.from(src);
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = 0;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify ArrayBuffer + number byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_1900
     * @tc.name testInt16ArrayPropertiesTestOne019
     * @tc.desc Verify ArrayBuffer + number byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne019() {
    ArrayBuffer buf = new ArrayBuffer(8);
    double offset = 4.0;
    Int16Array arr = new Int16Array(buf, offset);
    int actualByteLength = arr.byteLength();
    int expectedByteLength = 4;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify length = 0 byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_2000
     * @tc.name testInt16ArrayPropertiesTestOne020
     * @tc.desc Verify length = 0 byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne020() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array arr = new Int16Array(buf, 0, 0);
    int actualByteLength = arr.byteLength();
    int expectedByteLength = 0;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify length = 1 byteLength 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_2100
     * @tc.name testInt16ArrayPropertiesTestOne021
     * @tc.desc Verify length = 1 byteLength 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne021() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array arr = new Int16Array(buf, 0, 1);
    int actualByteLength = arr.byteLength();
    int expectedByteLength = 2;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify number 3.7 3 byteLength 6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_2200
     * @tc.name testInt16ArrayPropertiesTestOne022
     * @tc.desc Verify number 3.7 3 byteLength 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne022() {
    ArrayBuffer buf = new ArrayBuffer(10);
    double length = 3.7;
    Int16Array arr = new Int16Array(buf, 0, length);
    int actualByteLength = arr.byteLength();
    int expectedByteLength = 6;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify Int16Array.of byteLength = length 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_2300
     * @tc.name testInt16ArrayPropertiesTestOne023
     * @tc.desc Verify Int16Array.of byteLength = length 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne023() {
    Int16Array arr = Int16Array.of(10, 20);
    int actualByteLength = arr.byteLength();
    int expectedByteLength = 4;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify Int16Array length length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_2400
     * @tc.name testInt16ArrayPropertiesTestOne024
     * @tc.desc Verify Int16Array length length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne024() {
    Int16Array src = Int16Array.of(1, 2, 3, 4);
    Int16Array arr = new Int16Array(src);
    int actualLength = arr.length();
    int expectedLength = 4;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify ArrayBuffer + int length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_2500
     * @tc.name testInt16ArrayPropertiesTestOne025
     * @tc.desc Verify ArrayBuffer + int length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne025() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array arr = new Int16Array(buf, 0);
    int actualLength = arr.length();
    int expectedLength = 2;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify ArrayBuffer + number length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_2600
     * @tc.name testInt16ArrayPropertiesTestOne026
     * @tc.desc Verify ArrayBuffer + number length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne026() {
    ArrayBuffer buf = new ArrayBuffer(6);
    double offset = 2.0;
    Int16Array arr = new Int16Array(buf, offset);
    int actualLength = arr.length();
    int expectedLength = 2;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify ArrayBuffer + int + int length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_2700
     * @tc.name testInt16ArrayPropertiesTestOne027
     * @tc.desc Verify ArrayBuffer + int + int length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne027() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array arr = new Int16Array(buf, 2, 2);
    int actualLength = arr.length();
    int expectedLength = 2;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify int length = 0 length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_2800
     * @tc.name testInt16ArrayPropertiesTestOne028
     * @tc.desc Verify int length = 0 length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne028() {
    Int16Array arr = new Int16Array(0);
    int actualLength = arr.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify int length = 32767 int16 length 32767
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_2900
     * @tc.name testInt16ArrayPropertiesTestOne029
     * @tc.desc Verify int length = 32767 int16 length 32767
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne029() {
    Int16Array arr = new Int16Array(32767);
    int actualLength = arr.length();
    int expectedLength = 32767;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify Int16Array.of factory length equals element count
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_3000
     * @tc.name testInt16ArrayPropertiesTestOne030
     * @tc.desc Verify Int16Array.of factory length equals element count
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne030() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    int actualLength = arr.length();
    int expectedLength = 4;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify Int16Array name 'Int16Array'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_3100
     * @tc.name testInt16ArrayPropertiesTestOne031
     * @tc.desc Verify Int16Array name 'Int16Array'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne031() {
    Int16Array src = Int16Array.of(1, 2);
    Int16Array arr = new Int16Array(src);
    String actualName = arr.getClass().getSimpleName();
    String expectedName = "Int16Array";
    assertEqual(expectedName, actualName);
    }

    /**
     * Verify empty arr.byteLength equals length times BYTES_PER_ELEMENT
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_3200
     * @tc.name testInt16ArrayPropertiesTestOne032
     * @tc.desc Verify empty arr.byteLength equals length times BYTES_PER_ELEMENT
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne032() {
    Int16Array arr = new Int16Array(0);
    int expected = arr.length() * Int16Array.BYTES_PER_ELEMENT;
    int actualByteLength = arr.byteLength();
    int expectedByteLength = expected;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify zero-length Int16Array buffer is not null
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_3300
     * @tc.name testInt16ArrayPropertiesTestOne033
     * @tc.desc Verify zero-length Int16Array buffer is not null
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne033() {
    Int16Array arr = new Int16Array(0);
    int actualByteLength = arr.buffer().byteLength();
    int expectedBuffer = arr.byteLength();
    assertEqual(expectedBuffer, actualByteLength);
    }

    /**
     * Verify Int16Array.of buffer is not null
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_3400
     * @tc.name testInt16ArrayPropertiesTestOne034
     * @tc.desc Verify Int16Array.of buffer is not null
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne034() {
    Int16Array arr = Int16Array.of(1, 2);
    int actualByteLength = arr.buffer().byteLength();
    int expectedBuffer = arr.byteLength();
    assertEqual(expectedBuffer, actualByteLength);
    }

    /**
     * Verify Int16Array.from buffer is not null
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_3500
     * @tc.name testInt16ArrayPropertiesTestOne035
     * @tc.desc Verify Int16Array.from buffer is not null
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne035() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int16Array arr = Int16Array.from(src);
    int actualByteLength = arr.buffer().byteLength();
    int expectedBuffer = arr.byteLength();
    assertEqual(expectedBuffer, actualByteLength);
    }

    /**
     * Verify subarray view buffer shares parent buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_3600
     * @tc.name testInt16ArrayPropertiesTestOne036
     * @tc.desc Verify subarray view buffer shares parent buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne036() {
    Int16Array parent = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Int16Array child = parent.subarray(1, 3);
    ArrayBuffer actualBuffer = child.buffer();
    ArrayBuffer expectedBuffer = parent.buffer();
    assertEqual(expectedBuffer, actualBuffer);
    }

    /**
     * Verify shared buffer views see $_set writes via buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_3700
     * @tc.name testInt16ArrayPropertiesTestOne037
     * @tc.desc Verify shared buffer views see $_set writes via buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne037() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array view1 = new Int16Array(buf, 0);
    Int16Array view2 = new Int16Array(buf, 0);
    view1.set(0, 99);
    Integer elementAt0 = view2.get(0);
    int expectedElement0 = 99;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify different byteOffset views on same buffer are independent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_3800
     * @tc.name testInt16ArrayPropertiesTestOne038
     * @tc.desc Verify different byteOffset views on same buffer are independent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne038() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array view1 = new Int16Array(buf, 0, 2);
    Int16Array view2 = new Int16Array(buf, 4, 2);
    view1.set(0, 10);
    view2.set(0, 20);
    Integer elementAt0 = view1.get(0);
    int expectedElement0 = 10;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt02 = view2.get(0);
    int expectedElement02 = 20;
    assertEqualInt(expectedElement02, elementAt02);
    }

    /**
     * Verify fill keeps the same buffer reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_3900
     * @tc.name testInt16ArrayPropertiesTestOne039
     * @tc.desc Verify fill keeps the same buffer reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne039() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    ArrayBuffer bufBefore = arr.buffer();
    arr.fill(0);
    ArrayBuffer actualBuffer = arr.buffer();
    ArrayBuffer expectedBuffer = bufBefore;
    assertEqual(expectedBuffer, actualBuffer);
    }

    /**
     * Verify reverse keeps the same buffer reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_4000
     * @tc.name testInt16ArrayPropertiesTestOne040
     * @tc.desc Verify reverse keeps the same buffer reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne040() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    ArrayBuffer bufBefore = arr.buffer();
    arr.reverse();
    ArrayBuffer actualBuffer = arr.buffer();
    ArrayBuffer expectedBuffer = bufBefore;
    assertEqual(expectedBuffer, actualBuffer);
    }

    /**
     * Verify sort keeps the same buffer reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_4100
     * @tc.name testInt16ArrayPropertiesTestOne041
     * @tc.desc Verify sort keeps the same buffer reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne041() {
    Int16Array arr = new Int16Array(new int[] {3, 1, 2});
    ArrayBuffer bufBefore = arr.buffer();
    arr.sort();
    ArrayBuffer actualBuffer = arr.buffer();
    ArrayBuffer expectedBuffer = bufBefore;
    assertEqual(expectedBuffer, actualBuffer);
    }

    /**
     * Verify independent Int16Array instances have different buffer references
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_4200
     * @tc.name testInt16ArrayPropertiesTestOne042
     * @tc.desc Verify independent Int16Array instances have different buffer references
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne042() {
    Int16Array arr1 = new Int16Array(new int[] {1, 2});
    Int16Array arr2 = new Int16Array(new int[] {1, 2});
    assertNotEqual(arr2.buffer(), arr1.buffer());
    }

    /**
     * Verify independent Int16Array.of instances have different buffer references
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_4300
     * @tc.name testInt16ArrayPropertiesTestOne043
     * @tc.desc Verify independent Int16Array.of instances have different buffer references
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne043() {
    Int16Array arr1 = Int16Array.of(1, 2);
    Int16Array arr2 = Int16Array.of(1, 2);
    assertNotEqual(arr2.buffer(), arr1.buffer());
    }

    /**
     * Verify arr.byteOffset equals 0 for whole-buffer view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_4400
     * @tc.name testInt16ArrayPropertiesTestOne044
     * @tc.desc Verify arr.byteOffset equals 0 for whole-buffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne044() {
    Int16Array arr = new Int16Array(new int[] {1, 2});
    int offset = arr.byteOffset();
    int expectedValue = 0;
    assertEqual(expectedValue, offset);
    }

    /**
     * Verify subarray(0) byteOffset equals 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_4500
     * @tc.name testInt16ArrayPropertiesTestOne045
     * @tc.desc Verify subarray(0) byteOffset equals 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne045() {
    Int16Array parent = new Int16Array(new int[] {1, 2, 3});
    Int16Array child = parent.subarray(0);
    int actualByteOffset = child.byteOffset();
    int expectedByteOffset = 0;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify $_set does not change byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_4600
     * @tc.name testInt16ArrayPropertiesTestOne046
     * @tc.desc Verify $_set does not change byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne046() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int offsetBefore = arr.byteOffset();
    arr.set(0, 99);
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = offsetBefore;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify zero-length Int16Array byteLength is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_4700
     * @tc.name testInt16ArrayPropertiesTestOne047
     * @tc.desc Verify zero-length Int16Array byteLength is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne047() {
    Int16Array arr = new Int16Array(0);
    int actualByteLength = arr.byteLength();
    int expectedByteLength = 0;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify byteLength equals length times BYTES_PER_ELEMENT at offset zero
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_4800
     * @tc.name testInt16ArrayPropertiesTestOne048
     * @tc.desc Verify byteLength equals length times BYTES_PER_ELEMENT at offset zero
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne048() {
    Int16Array arr = new Int16Array(3);
    int actualByteLength = arr.byteLength();
    int expectedByteLength = 6;
    assertEqual(expectedByteLength, actualByteLength);
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = 0;
    assertEqual(expectedByteOffset, actualByteOffset);
    int actualLength = arr.length();
    int expectedLength = 3;
    assertEqual(expectedLength, actualLength);
    int actualBufferByteLength = arr.buffer().byteLength();
    int expectedBufferByteLength = 6;
    assertEqual(expectedBufferByteLength, actualBufferByteLength);
    }

    /**
     * Verify Int16Array.of() empty call has byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_4900
     * @tc.name testInt16ArrayPropertiesTestOne049
     * @tc.desc Verify Int16Array.of() empty call has byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne049() {
    Int16Array arr = Int16Array.of();
    int actualByteLength = arr.byteLength();
    int expectedByteLength = 0;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify Int16Array.from empty source has length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_5000
     * @tc.name testInt16ArrayPropertiesTestOne050
     * @tc.desc Verify Int16Array.from empty source has length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne050() {
    List<Integer> src = new ArrayList<>();
    Int16Array arr = Int16Array.from(src);
    int actualLength = arr.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify subarray(0, 2) length is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_5100
     * @tc.name testInt16ArrayPropertiesTestOne051
     * @tc.desc Verify subarray(0, 2) length is 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne051() {
    Int16Array parent = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Int16Array child = parent.subarray(0, 2);
    int actualLength = child.length();
    int expectedLength = 2;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify fill does not change length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_5200
     * @tc.name testInt16ArrayPropertiesTestOne052
     * @tc.desc Verify fill does not change length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne052() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int lenBefore = arr.length();
    arr.fill(0);
    int actualLength = arr.length();
    int expectedLength = lenBefore;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify reverse does not change length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_5300
     * @tc.name testInt16ArrayPropertiesTestOne053
     * @tc.desc Verify reverse does not change length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne053() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int lenBefore = arr.length();
    arr.reverse();
    int actualLength = arr.length();
    int expectedLength = lenBefore;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify sort does not change length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_5400
     * @tc.name testInt16ArrayPropertiesTestOne054
     * @tc.desc Verify sort does not change length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne054() {
    Int16Array arr = new Int16Array(new int[] {3, 1, 2});
    int lenBefore = arr.length();
    arr.sort();
    int actualLength = arr.length();
    int expectedLength = lenBefore;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify copyWithin does not change length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_5500
     * @tc.name testInt16ArrayPropertiesTestOne055
     * @tc.desc Verify copyWithin does not change length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne055() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    int lenBefore = arr.length();
    arr.copyWithin(0, 2);
    int actualLength = arr.length();
    int expectedLength = lenBefore;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify Int16Array.of() empty call has length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_5600
     * @tc.name testInt16ArrayPropertiesTestOne056
     * @tc.desc Verify Int16Array.of() empty call has length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne056() {
    Int16Array arr = Int16Array.of();
    int actualLength = arr.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify new Int16Array([]) length is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_5700
     * @tc.name testInt16ArrayPropertiesTestOne057
     * @tc.desc Verify new Int16Array([]) length is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne057() {
    Int16Array arr = new Int16Array(new int[] {});
    int actualLength = arr.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify Int16Array instance name equals Int16Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_5800
     * @tc.name testInt16ArrayPropertiesTestOne058
     * @tc.desc Verify Int16Array instance name equals Int16Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne058() {
    Int16Array arr = new Int16Array();
    String nameStr = arr.getClass().getSimpleName();
    String expectedValue = "Int16Array";
    assertEqual(expectedValue, nameStr);
    }

    /**
     * Verify $_get(-1) throws RangeError and length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_7100
     * @tc.name testInt16ArrayPropertiesTestOne071
     * @tc.desc Verify $_get(-1) throws RangeError and length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne071() {
    Int16Array arr = new Int16Array(3);
    int lenBefore = arr.length();
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    int actualLength = arr.length();
    int expectedLength = lenBefore;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify $_get(-1) throws RangeError and byteLength unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_7200
     * @tc.name testInt16ArrayPropertiesTestOne072
     * @tc.desc Verify $_get(-1) throws RangeError and byteLength unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne072() {
    Int16Array arr = new Int16Array(3);
    int blBefore = arr.byteLength();
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    int actualByteLength = arr.byteLength();
    int expectedByteLength = blBefore;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify $_get(length) throws RangeError and length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_7300
     * @tc.name testInt16ArrayPropertiesTestOne073
     * @tc.desc Verify $_get(length) throws RangeError and length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne073() {
    Int16Array arr = new Int16Array(3);
    int lenBefore = arr.length();
    try {
    arr.get(lenBefore);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    int actualLength = arr.length();
    int expectedLength = lenBefore;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify $_get(length) throws RangeError and byteOffset unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_7400
     * @tc.name testInt16ArrayPropertiesTestOne074
     * @tc.desc Verify $_get(length) throws RangeError and byteOffset unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne074() {
    Int16Array arr = new Int16Array(3);
    int boBefore = arr.byteOffset();
    try {
    arr.get(arr.length());
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = boBefore;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify $_get(length+1) throws RangeError and length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_ONE_7500
     * @tc.name testInt16ArrayPropertiesTestOne075
     * @tc.desc Verify $_get(length+1) throws RangeError and length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestOne075() {
    Int16Array arr = new Int16Array(3);
    int lenBefore = arr.length();
    try {
    arr.get(lenBefore + 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    int actualLength = arr.length();
    int expectedLength = lenBefore;
    assertEqual(expectedLength, actualLength);
    }
}
