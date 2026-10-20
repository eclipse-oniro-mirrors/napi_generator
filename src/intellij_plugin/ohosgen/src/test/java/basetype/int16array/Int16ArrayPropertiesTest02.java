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

import org.junit.jupiter.api.Test;

/**
 * Int16ArrayPropertiesTest02 —— Int16Array 方法族 XTS 测试。
 *
 * @since 2026-10-20
 */
public class Int16ArrayPropertiesTest02 extends BasTest {
    /**
     * Verify $_get(-length-1) keeps buffer reference unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_0100
     * @tc.name testInt16ArrayPropertiesTestTwo001
     * @tc.desc Verify $_get(-length-1) keeps buffer reference unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo001() {
    Int16Array arr = new Int16Array(3);
    ArrayBuffer bufBefore = arr.buffer();
    try {
    arr.get(-arr.length() - 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    ArrayBuffer actualBuffer = arr.buffer();
    ArrayBuffer expectedBuffer = bufBefore;
    assertEqual(expectedBuffer, actualBuffer);
    }

    /**
     * Verify with(length) RangeError keeps buffer reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_0200
     * @tc.name testInt16ArrayPropertiesTestTwo002
     * @tc.desc Verify with(length) RangeError keeps buffer reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo002() {
    Int16Array arr = new Int16Array(3);
    ArrayBuffer bufBefore = arr.buffer();
    try {
    arr.with(arr.length(), 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    ArrayBuffer actualBuffer = arr.buffer();
    ArrayBuffer expectedBuffer = bufBefore;
    assertEqual(expectedBuffer, actualBuffer);
    }

    /**
     * Verify with(length+1) RangeError leaves byteOffset unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_0300
     * @tc.name testInt16ArrayPropertiesTestTwo003
     * @tc.desc Verify with(length+1) RangeError leaves byteOffset unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo003() {
    Int16Array arr = new Int16Array(3);
    int boBefore = arr.byteOffset();
    try {
    arr.with(arr.length() + 1, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = boBefore;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify with(length+1) RangeError leaves byteLength unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_0400
     * @tc.name testInt16ArrayPropertiesTestTwo004
     * @tc.desc Verify with(length+1) RangeError leaves byteLength unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo004() {
    Int16Array arr = new Int16Array(3);
    int blBefore = arr.byteLength();
    try {
    arr.with(arr.length() + 1, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    int actualByteLength = arr.byteLength();
    int expectedByteLength = blBefore;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify with(-length-1) RangeError leaves name unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_0500
     * @tc.name testInt16ArrayPropertiesTestTwo005
     * @tc.desc Verify with(-length-1) RangeError leaves name unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo005() {
    Int16Array arr = new Int16Array(3);
    String nameBefore = arr.getClass().getSimpleName();
    try {
    arr.with(-arr.length() - 1, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    String actualName = arr.getClass().getSimpleName();
    String expectedName = nameBefore;
    assertEqual(expectedName, actualName);
    }

    /**
     * Verify with(huge index) RangeError leaves length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_0600
     * @tc.name testInt16ArrayPropertiesTestTwo006
     * @tc.desc Verify with(huge index) RangeError leaves length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo006() {
    Int16Array arr = new Int16Array(2);
    int lenBefore = arr.length();
    try {
    arr.with(2147483647, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    int actualLength = arr.length();
    int expectedLength = lenBefore;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify Int16Array(0) byteOffset is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_0700
     * @tc.name testInt16ArrayPropertiesTestTwo007
     * @tc.desc Verify Int16Array(0) byteOffset is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo007() {
    Int16Array arr = new Int16Array(0);
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = 0;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify Int16Array.of() BYTES_PER_ELEMENT is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_0800
     * @tc.name testInt16ArrayPropertiesTestTwo008
     * @tc.desc Verify Int16Array.of() BYTES_PER_ELEMENT is 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo008() {
    Int16Array arr = Int16Array.of();
    int actualBytesPerElement = arr.BYTES_PER_ELEMENT;
    int expectedBytesPerElement = 2;
    assertEqual(expectedBytesPerElement, actualBytesPerElement);
    }

    /**
     * Verify copy-from empty Int16Array length is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_0900
     * @tc.name testInt16ArrayPropertiesTestTwo009
     * @tc.desc Verify copy-from empty Int16Array length is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo009() {
    Int16Array src = new Int16Array();
    Int16Array arr = new Int16Array(src);
    int actualLength = arr.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify Int16Array(1) byteLength is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_1000
     * @tc.name testInt16ArrayPropertiesTestTwo010
     * @tc.desc Verify Int16Array(1) byteLength is 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo010() {
    Int16Array arr = new Int16Array(1);
    int actualByteLength = arr.byteLength();
    int expectedByteLength = 2;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify Int16Array(buf, 0, 1) byteOffset is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_1100
     * @tc.name testInt16ArrayPropertiesTestTwo011
     * @tc.desc Verify Int16Array(buf, 0, 1) byteOffset is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo011() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array arr = new Int16Array(buf, 0, 1);
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = 0;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify all-MIN Int16Array.of BYTES_PER_ELEMENT is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_1200
     * @tc.name testInt16ArrayPropertiesTestTwo012
     * @tc.desc Verify all-MIN Int16Array.of BYTES_PER_ELEMENT is 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo012() {
    Int16Array arr = Int16Array.of(-32768, -32768);
    int actualBytesPerElement = arr.BYTES_PER_ELEMENT;
    int expectedBytesPerElement = 2;
    assertEqual(expectedBytesPerElement, actualBytesPerElement);
    }

    /**
     * Verify all-minus-one Int16Array.of byteOffset is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_1300
     * @tc.name testInt16ArrayPropertiesTestTwo013
     * @tc.desc Verify all-minus-one Int16Array.of byteOffset is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo013() {
    Int16Array arr = Int16Array.of(-1, -1, -1);
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = 0;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify all-same Int16Array.of buffer is non-null
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_1400
     * @tc.name testInt16ArrayPropertiesTestTwo014
     * @tc.desc Verify all-same Int16Array.of buffer is non-null
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo014() {
    Int16Array arr = Int16Array.of(5, 5, 5, 5, 5);
    int bufferValue = arr.buffer().byteLength();
    int expectedBuffer = arr.byteLength();
    assertEqual(expectedBuffer, bufferValue);
    }

    /**
     * Verify subarray(-1) clamps begin and keeps parent length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_1500
     * @tc.name testInt16ArrayPropertiesTestTwo015
     * @tc.desc Verify subarray(-1) clamps begin and keeps parent length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo015() {
    Int16Array parent = new Int16Array(new int[] {1, 2, 3, 4});
    Int16Array child = parent.subarray(-1);
    int actualLength = child.length();
    int expectedLength = 1;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify subarray(length) returns empty view length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_1600
     * @tc.name testInt16ArrayPropertiesTestTwo016
     * @tc.desc Verify subarray(length) returns empty view length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo016() {
    Int16Array parent = new Int16Array(new int[] {1, 2, 3, 4});
    Int16Array child = parent.subarray(parent.length());
    int actualLength = child.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify subarray(length) returns empty view byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_1700
     * @tc.name testInt16ArrayPropertiesTestTwo017
     * @tc.desc Verify subarray(length) returns empty view byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo017() {
    Int16Array parent = new Int16Array(new int[] {1, 2, 3, 4});
    Int16Array child = parent.subarray(parent.length());
    int actualByteLength = child.byteLength();
    int expectedByteLength = 0;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify subarray(0, -1) clamps end and result length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_1800
     * @tc.name testInt16ArrayPropertiesTestTwo018
     * @tc.desc Verify subarray(0, -1) clamps end and result length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo018() {
    Int16Array parent = new Int16Array(new int[] {1, 2, 3, 4});
    Int16Array child = parent.subarray(0, -1);
    int actualLength = child.length();
    int expectedLength = 3;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify subarray(-3, -1) dual-negative clamp length is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_1900
     * @tc.name testInt16ArrayPropertiesTestTwo019
     * @tc.desc Verify subarray(-3, -1) dual-negative clamp length is 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo019() {
    Int16Array parent = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Int16Array child = parent.subarray(-3, -1);
    int actualLength = child.length();
    int expectedLength = 2;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify subarray(length-1, length+1) returns single-element view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_2000
     * @tc.name testInt16ArrayPropertiesTestTwo020
     * @tc.desc Verify subarray(length-1, length+1) returns single-element view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo020() {
    Int16Array parent = new Int16Array(new int[] {1, 2, 3, 4});
    Int16Array child = parent.subarray(parent.length() - 1, parent.length() + 1);
    int actualLength = child.length();
    int expectedLength = 1;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify empty Int16Array byteLength equals length*BYTES_PER_ELEMENT
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_2100
     * @tc.name testInt16ArrayPropertiesTestTwo021
     * @tc.desc Verify empty Int16Array byteLength equals length*BYTES_PER_ELEMENT
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo021() {
    Int16Array arr = new Int16Array();
    int expected = arr.length() * Int16Array.BYTES_PER_ELEMENT;
    int actualByteLength = arr.byteLength();
    int expectedByteLength = expected;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify all-same array byteLength equals length*BYTES_PER_ELEMENT
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_2200
     * @tc.name testInt16ArrayPropertiesTestTwo022
     * @tc.desc Verify all-same array byteLength equals length*BYTES_PER_ELEMENT
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo022() {
    Int16Array arr = Int16Array.of(7, 7, 7, 7, 7);
    int expected = arr.length() * Int16Array.BYTES_PER_ELEMENT;
    int actualByteLength = arr.byteLength();
    int expectedByteLength = expected;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify empty offset view satisfies byteOffset+byteLength<=buffer.byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_2300
     * @tc.name testInt16ArrayPropertiesTestTwo023
     * @tc.desc Verify empty offset view satisfies byteOffset+byteLength<=buffer.byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo023() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array arr = new Int16Array(buf, 2, 0);
    boolean actualByteLength = arr.byteOffset() + arr.byteLength() <= arr.buffer().byteLength();
    assertTrue(actualByteLength);
    }

    /**
     * Verify $_set MIN -32768 leaves length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_2400
     * @tc.name testInt16ArrayPropertiesTestTwo024
     * @tc.desc Verify $_set MIN -32768 leaves length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo024() {
    Int16Array arr = new Int16Array(3);
    int lenBefore = arr.length();
    arr.set(1, -32768);
    int actualLength = arr.length();
    int expectedLength = lenBefore;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify $_set NaN leaves byteOffset unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_2500
     * @tc.name testInt16ArrayPropertiesTestTwo025
     * @tc.desc Verify $_set NaN leaves byteOffset unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo025() {
    Int16Array arr = new Int16Array(3);
    int boBefore = arr.byteOffset();
    arr.set(0, Double.NaN);
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = boBefore;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify Int16Array.from([Double.NaN, NaN]) length is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_2600
     * @tc.name testInt16ArrayPropertiesTestTwo026
     * @tc.desc Verify Int16Array.from([Double.NaN, NaN]) length is 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo026() {
    double[] src = new double[] {Double.NaN, Double.NaN};
    Int16Array arr = Int16Array.from(src);
    int actualLength = arr.length();
    int expectedLength = 2;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify buffer new Int16Array ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_2800
     * @tc.name testInt16ArrayPropertiesTestTwo028
     * @tc.desc Verify buffer new Int16Array ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo028() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array a = new Int16Array(buf);
    Int16Array b = new Int16Array(buf);
    ArrayBuffer actualBuffer = a.buffer();
    ArrayBuffer expectedBuffer = b.buffer();
    assertEqual(expectedBuffer, actualBuffer);
    }

    /**
     * Verify $_set $_get new Int16Array ArrayBuffer; int16 truncation wrap
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_2900
     * @tc.name testInt16ArrayPropertiesTestTwo029
     * @tc.desc Verify $_set $_get new Int16Array ArrayBuffer; int16 truncation wrap
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo029() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array a = new Int16Array(buf);
    Int16Array b = new Int16Array(buf);
    Int16Array c = new Int16Array(buf);
    a.set(0, -32768);
    Integer elementAt0 = b.get(0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt02 = c.get(0);
    int expectedElement02 = -32768;
    assertEqualInt(expectedElement02, elementAt02);
    }

    /**
     * Verify buffer $_get reverse Int16Array.of new Int16Array ArrayBuffer; property unchanged after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_3000
     * @tc.name testInt16ArrayPropertiesTestTwo030
     * @tc.desc Verify buffer $_get reverse Int16Array.of new Int16Array ArrayBuffer; property unchanged after reverse
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo030() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array a = Int16Array.of(10, 20, 30);
    Int16Array b = new Int16Array(a.buffer());
    a.reverse();
    Integer elementAt0 = b.get(0);
    int expectedElement0 = 30;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = b.get(1);
    int expectedElement1 = 20;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = b.get(2);
    int expectedElement2 = 10;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify $_set $_get subarray Int16Array.of; parent set -555 visible in child index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_3100
     * @tc.name testInt16ArrayPropertiesTestTwo031
     * @tc.desc Verify $_set $_get subarray Int16Array.of; parent set -555 visible in child index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo031() {
    Int16Array parent = Int16Array.of(0, 0, 0);
    Int16Array child = parent.subarray(0, 2);
    parent.set(0, -555);
    Integer elementAt0 = child.get(0);
    int expectedElement0 = -555;
    assertEqualInt(expectedElement0, elementAt0);
    }

    /**
     * Verify buffer subarray Int16Array.of; nested two-level subarray shares root buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_3200
     * @tc.name testInt16ArrayPropertiesTestTwo032
     * @tc.desc Verify buffer subarray Int16Array.of; nested two-level subarray shares root buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo032() {
    Int16Array root = Int16Array.of(1, 2, 3, 4, 5, 6);
    Int16Array mid = root.subarray(0, 4);
    Int16Array leaf = mid.subarray(1, 3);
    ArrayBuffer actualBuffer = leaf.buffer();
    ArrayBuffer expectedBuffer = root.buffer();
    assertEqual(expectedBuffer, actualBuffer);
    }

    /**
     * Verify $_get fill subarray Int16Array.of; fill child variable range 1-3 sets 99 in parent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_3300
     * @tc.name testInt16ArrayPropertiesTestTwo033
     * @tc.desc Verify $_get fill subarray Int16Array.of; fill child variable range 1-3 sets 99 in parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo033() {
    Int16Array parent = Int16Array.of(1, 2, 3, 4, 5);
    Int16Array child = parent.subarray(1, 4);
    child.fill(99);
    Integer elementAt0 = parent.get(0);
    int expectedElement0 = 1;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = parent.get(1);
    int expectedElement1 = 99;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = parent.get(2);
    int expectedElement2 = 99;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = parent.get(3);
    int expectedElement3 = 99;
    assertEqualInt(expectedElement3, elementAt3);
    Integer elementAt4 = parent.get(4);
    int expectedElement4 = 5;
    assertEqualInt(expectedElement4, elementAt4);
    }

    /**
     * Verify length $_get fill new Int16Array; fill -32769 wraps to 32767 and length stays 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_3400
     * @tc.name testInt16ArrayPropertiesTestTwo034
     * @tc.desc Verify length $_get fill new Int16Array; fill -32769 wraps to 32767 and length stays 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo034() {
    Int16Array arr = new Int16Array(new int[] {1, 2});
    arr.fill(-32769);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 32767;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 32767;
    assertEqualInt(expectedElement1, elementAt1);
    int actualLength = arr.length();
    int expectedLength = 2;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify $_get set Int16Array.of new Int16Array; source 32768 wraps to -32768 and 32767 kept
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_3500
     * @tc.name testInt16ArrayPropertiesTestTwo035
     * @tc.desc Verify $_get set Int16Array.of new Int16Array; source 32768 wraps to -32768 and 32767 kept
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo035() {
    Int16Array arr = new Int16Array(new int[] {0, 0});
    Int16Array src = Int16Array.of(32768, 32767);
    arr.set(src);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 32767;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify $_get new Int16Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_3600
     * @tc.name testInt16ArrayPropertiesTestTwo036
     * @tc.desc Verify $_get new Int16Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo036() {
    Int16Array arr = new Int16Array(new int[] {32768, -32769});
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 32767;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify $_get Int16Array.of
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_3700
     * @tc.name testInt16ArrayPropertiesTestTwo037
     * @tc.desc Verify $_get Int16Array.of
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo037() {
    Int16Array arr = Int16Array.of(32768, -32769);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 32767;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify $_get Int16Array.from
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_3800
     * @tc.name testInt16ArrayPropertiesTestTwo038
     * @tc.desc Verify $_get Int16Array.from
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo038() {
    double[] source = new double[] {32768, Double.NaN, Double.POSITIVE_INFINITY};
    Int16Array arr = Int16Array.from(source);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = -32768;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 0;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 0;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify length set Int16Array.of
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_3900
     * @tc.name testInt16ArrayPropertiesTestTwo039
     * @tc.desc Verify length set Int16Array.of
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo039() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0);
    Int16Array src = Int16Array.of(1, 2);
    arr.set(src);
    int actualLength = arr.length();
    int expectedLength = 4;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify byteLength copyWithin Int16Array.of; property unchanged after copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_4000
     * @tc.name testInt16ArrayPropertiesTestTwo040
     * @tc.desc Verify byteLength copyWithin Int16Array.of; property unchanged after copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo040() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    int blBefore = arr.byteLength();
    arr.copyWithin(0, 2);
    int actualByteLength = arr.byteLength();
    int expectedByteLength = blBefore;
    assertEqual(expectedByteLength, actualByteLength);
    }

    /**
     * Verify length fill new Int16Array; property unchanged after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_4100
     * @tc.name testInt16ArrayPropertiesTestTwo041
     * @tc.desc Verify length fill new Int16Array; property unchanged after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo041() {
    Int16Array arr = new Int16Array();
    arr.fill(0);
    int actualLength = arr.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify length reverse new Int16Array; property unchanged after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_4200
     * @tc.name testInt16ArrayPropertiesTestTwo042
     * @tc.desc Verify length reverse new Int16Array; property unchanged after reverse
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo042() {
    Int16Array arr = new Int16Array();
    arr.reverse();
    int actualLength = arr.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify length sort new Int16Array; property unchanged after sort
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_4300
     * @tc.name testInt16ArrayPropertiesTestTwo043
     * @tc.desc Verify length sort new Int16Array; property unchanged after sort
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo043() {
    Int16Array arr = new Int16Array();
    arr.sort();
    int actualLength = arr.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify length copyWithin new Int16Array; property unchanged after copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_4400
     * @tc.name testInt16ArrayPropertiesTestTwo044
     * @tc.desc Verify length copyWithin new Int16Array; property unchanged after copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo044() {
    Int16Array arr = new Int16Array();
    arr.copyWithin(0, 0);
    int actualLength = arr.length();
    int expectedLength = 0;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify fill and reverse preserve byteOffset, byteLength, and length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_4500
     * @tc.name testInt16ArrayPropertiesTestTwo045
     * @tc.desc Verify fill and reverse preserve byteOffset, byteLength, and length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo045() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0);
    arr.fill(1).reverse();
    int actualLength = arr.length();
    int expectedLength = 4;
    assertEqual(expectedLength, actualLength);
    int actualByteLength = arr.byteLength();
    int expectedByteLength = 8;
    assertEqual(expectedByteLength, actualByteLength);
    int actualByteOffset = arr.byteOffset();
    int expectedByteOffset = 0;
    assertEqual(expectedByteOffset, actualByteOffset);
    }

    /**
     * Verify fill and sort preserve length and expected element values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_4600
     * @tc.name testInt16ArrayPropertiesTestTwo046
     * @tc.desc Verify fill and sort preserve length and expected element values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo046() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    arr.fill(5).sort();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 5;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 5;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 5;
    assertEqualInt(expectedElement2, elementAt2);
    int actualLength = arr.length();
    int expectedLength = 3;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify set and reverse produce expected values while preserving length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_4700
     * @tc.name testInt16ArrayPropertiesTestTwo047
     * @tc.desc Verify set and reverse produce expected values while preserving length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo047() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    Int16Array src = Int16Array.of(1, 2, 3);
    arr.set(src);
    arr.reverse();
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 3;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 2;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 1;
    assertEqualInt(expectedElement2, elementAt2);
    int actualLength = arr.length();
    int expectedLength = 3;
    assertEqual(expectedLength, actualLength);
    }

    /**
     * Verify forEach Int16Array.of; negative element -5 detected by callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_4800
     * @tc.name testInt16ArrayPropertiesTestTwo048
     * @tc.desc Verify forEach Int16Array.of; negative element -5 detected by callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo048() {
    Int16Array arr = Int16Array.of(1, 2, -5, 3);
    boolean[] hasNegative = {false};
    arr.forEach((value, index, array) -> {
    if (value < 0) {
    hasNegative[0] = true;
    }
    });
    assertTrue(hasNegative[0]);
    }

    /**
     * Verify $_get map Int16Array.of
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_4900
     * @tc.name testInt16ArrayPropertiesTestTwo049
     * @tc.desc Verify $_get map Int16Array.of
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo049() {
    Int16Array arr = Int16Array.of(2, 4, 6);
    int factor = 10;
    Int16Array result = arr.map((val, index, array) -> {
        return val * factor;
        });
    Integer elementAt0 = result.get(0);
    int expectedElement0 = 20;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = result.get(1);
    int expectedElement1 = 40;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = result.get(2);
    int expectedElement2 = 60;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify length $_get filter Int16Array.of
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_5000
     * @tc.name testInt16ArrayPropertiesTestTwo050
     * @tc.desc Verify length $_get filter Int16Array.of
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo050() {
    Int16Array arr = Int16Array.of(5, 15, 8, 20, 3);
    int threshold = 10;
    Int16Array result = arr.filter((val, index, array) -> {
        return val > threshold;
        });
    int actualLength = result.length();
    int expectedLength = 2;
    assertEqual(expectedLength, actualLength);
    Integer elementAt0 = result.get(0);
    int expectedElement0 = 15;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = result.get(1);
    int expectedElement1 = 20;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify $_get set subarray Int16Array.of
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_5100
     * @tc.name testInt16ArrayPropertiesTestTwo051
     * @tc.desc Verify $_get set subarray Int16Array.of
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo051() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0);
    Int16Array src = Int16Array.of(10, 20, 30, 40);
    arr.set(src);
    Int16Array sub = arr.subarray(1, 3);
    Integer elementAt0 = sub.get(0);
    int expectedElement0 = 20;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = sub.get(1);
    int expectedElement1 = 30;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify $_set $_get forEach Int16Array.of
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_5200
     * @tc.name testInt16ArrayPropertiesTestTwo052
     * @tc.desc Verify $_set $_get forEach Int16Array.of
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo052() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    arr.forEach((value, index, array) -> {
    if (index == 0) {
    array.set(2, 999);
    }
    });
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 999;
    assertEqualInt(expectedElement2, elementAt2);
    }

    /**
     * Verify $_set $_get forEach new Int16Array ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_5300
     * @tc.name testInt16ArrayPropertiesTestTwo053
     * @tc.desc Verify $_set $_get forEach new Int16Array ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo053() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array a = new Int16Array(buf);
    Int16Array b = new Int16Array(buf);
    a.set(0, 1);
    a.set(1, 2);
    a.set(2, 3);
    boolean[] modified = {false};
    a.forEach((value, index, array) -> {
    if (index == 0) {
    b.set(1, 999);
    modified[0] = true;
    }
    });
    assertTrue(modified[0]);
    Integer elementAt1 = b.get(1);
    int expectedElement1 = 999;
    assertEqualInt(expectedElement1, elementAt1);
    }

    /**
     * Verify $_get copyWithin Int16Array.of
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_5400
     * @tc.name testInt16ArrayPropertiesTestTwo054
     * @tc.desc Verify $_get copyWithin Int16Array.of
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo054() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    arr.copyWithin(0, 2);
    Integer elementAt0 = arr.get(0);
    int expectedElement0 = 3;
    assertEqualInt(expectedElement0, elementAt0);
    Integer elementAt1 = arr.get(1);
    int expectedElement1 = 4;
    assertEqualInt(expectedElement1, elementAt1);
    Integer elementAt2 = arr.get(2);
    int expectedElement2 = 3;
    assertEqualInt(expectedElement2, elementAt2);
    Integer elementAt3 = arr.get(3);
    int expectedElement3 = 4;
    assertEqualInt(expectedElement3, elementAt3);
    }

    /**
     * Verify name fill reverse sort Int16Array.of; name stays Int16Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_5500
     * @tc.name testInt16ArrayPropertiesTestTwo055
     * @tc.desc Verify name fill reverse sort Int16Array.of; name stays Int16Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo055() {
    Int16Array arr = Int16Array.of(30, 10, 20);
    arr.sort();
    arr.reverse();
    arr.fill(0);
    String actualName = arr.getClass().getSimpleName();
    String expectedName = "Int16Array";
    assertEqual(expectedName, actualName);
    }

    /**
     * Verify name subarray Int16Array.of; name stays Int16Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_5600
     * @tc.name testInt16ArrayPropertiesTestTwo056
     * @tc.desc Verify name subarray Int16Array.of; name stays Int16Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo056() {
    Int16Array root = Int16Array.of(1, 2, 3, 4, 5, 6);
    Int16Array child = root.subarray(1, 5);
    Int16Array grandchild = child.subarray(0, 2);
    String actualName = root.getClass().getSimpleName();
    String expectedName = "Int16Array";
    assertEqual(expectedName, actualName);
    String actualName2 = child.getClass().getSimpleName();
    String expectedName2 = "Int16Array";
    assertEqual(expectedName2, actualName2);
    String actualName3 = grandchild.getClass().getSimpleName();
    String expectedName3 = "Int16Array";
    assertEqual(expectedName3, actualName3);
    }

    /**
     * Verify byteLength length name fill set copyWithin;
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_5700
     * @tc.name testInt16ArrayPropertiesTestTwo057
     * @tc.desc Verify byteLength length name fill set copyWithin;
     * property unchanged after fill;
     * property unchanged after copyWithin;
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testInt16ArrayPropertiesTestTwo057() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0);
    Int16Array src = Int16Array.of(1, 2);
    arr.set(src, 0);
    arr.copyWithin(2, 0, 2);
    arr.fill(99, 4);
    int actualLength = arr.length();
    int expectedLength = 5;
    assertEqual(expectedLength, actualLength);
    int actualByteLength = arr.byteLength();
    int expectedByteLength = 10;
    assertEqual(expectedByteLength, actualByteLength);
    String actualName = arr.getClass().getSimpleName();
    String expectedName = "Int16Array";
    assertEqual(expectedName, actualName);
    }

    /**
     * Verify set rejects an object cast to number value with ClassCastError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT16ARRAY_PROPERTIES_TWO_6800
     * @tc.name testInt16ArrayPropertiesTestTwo068
     * @tc.desc Verify set rejects an object cast to number value with ClassCastError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
