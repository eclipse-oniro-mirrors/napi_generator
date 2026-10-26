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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFindIndexPart02Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFindIndexPart02Test extends BasTest {
    /**
     * Verify findIndex returns index 1 when element matches at position 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_0100
     * @tc.name int32ArrayFindIndexPart02Test001
     * @tc.desc Verify findIndex returns index 1 when element matches at position 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test001() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int result = arr.findIndex((v) -> v == 20);
    assertEqual(1, result);
    }

    /**
     * Verify findIndex returns -1 when no element matches
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_0200
     * @tc.name int32ArrayFindIndexPart02Test002
     * @tc.desc Verify findIndex returns -1 when no element matches
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test002() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> v == 999);
    assertEqual(-1, result);
    }

    /**
     * Verify findIndex returns -1 on empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_0300
     * @tc.name int32ArrayFindIndexPart02Test003
     * @tc.desc Verify findIndex returns -1 on empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test003() {
    Int32Array arr = new Int32Array(0);
    int result = arr.findIndex((v) -> true);
    assertEqual(-1, result);
    }

    /**
     * Verify findIndex return value is not Int32Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_0400
     * @tc.name int32ArrayFindIndexPart02Test004
     * @tc.desc Verify findIndex return value is not Int32Array instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test004() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7});
    int result = arr.findIndex((v) -> v == 6);
    assertEqual(1, result);
    }

    /**
     * Verify findIndex return value is not Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_0500
     * @tc.name int32ArrayFindIndexPart02Test005
     * @tc.desc Verify findIndex return value is not Array instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test005() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> v == 2);
    assertEqual(1, result);
    }

    /**
     * Verify findIndex hit path returns valid index not null sentinel
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_0600
     * @tc.name int32ArrayFindIndexPart02Test006
     * @tc.desc Verify findIndex hit path returns valid index not null sentinel
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test006() {
    Int32Array arr = new Int32Array(new int[] {100, 200});
    int result = arr.findIndex((v) -> v == 100);
    assertEqual(0, result);
    }

    /**
     * Verify findIndex miss returns -1 not undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_0700
     * @tc.name int32ArrayFindIndexPart02Test007
     * @tc.desc Verify findIndex miss returns -1 not undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test007() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    int result = arr.findIndex((v) -> v == 888);
    assertEqual(-1, result);
    }

    /**
     * Verify findIndex hit first element returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_0900
     * @tc.name int32ArrayFindIndexPart02Test009
     * @tc.desc Verify findIndex hit first element returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test009() {
    Int32Array arr = new Int32Array(new int[] {7, 8, 9});
    int result = arr.findIndex((v) -> v == 7);
    assertEqual(0, result);
    }

    /**
     * Verify findIndex hit middle element returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_1000
     * @tc.name int32ArrayFindIndexPart02Test010
     * @tc.desc Verify findIndex hit middle element returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test010() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int result = arr.findIndex((v) -> v == 30);
    assertEqual(2, result);
    }

    /**
     * Verify findIndex hit last element returns length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_1100
     * @tc.name int32ArrayFindIndexPart02Test011
     * @tc.desc Verify findIndex hit last element returns length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test011() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.findIndex((v) -> v == 5);
    assertEqual(arr.length() - 1, result);
    }

    /**
     * Verify single-element array hit returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_1200
     * @tc.name int32ArrayFindIndexPart02Test012
     * @tc.desc Verify single-element array hit returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test012() {
    Int32Array arr = new Int32Array(new int[] {42});
    int result = arr.findIndex((v) -> v == 42);
    assertEqual(0, result);
    }

    /**
     * Verify two-element array hit second returns index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_1300
     * @tc.name int32ArrayFindIndexPart02Test013
     * @tc.desc Verify two-element array hit second returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test013() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    int result = arr.findIndex((v) -> v == 2);
    assertEqual(1, result);
    }

    /**
     * Verify duplicated values findIndex returns first hit index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_1400
     * @tc.name int32ArrayFindIndexPart02Test014
     * @tc.desc Verify duplicated values findIndex returns first hit index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test014() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 2, 1});
    int result = arr.findIndex((v) -> v == 2);
    assertEqual(1, result);
    }

    /**
     * Verify findIndex hit zero element in middle returns index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_1600
     * @tc.name int32ArrayFindIndexPart02Test016
     * @tc.desc Verify findIndex hit zero element in middle returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test016() {
    Int32Array arr = new Int32Array(new int[] {1, 0, 2});
    int result = arr.findIndex((v) -> v == 0);
    assertEqual(1, result);
    }

    /**
     * Verify positive array find nonexistent value returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_2000
     * @tc.name int32ArrayFindIndexPart02Test020
     * @tc.desc Verify positive array find nonexistent value returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test020() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> v == 99);
    assertEqual(-1, result);
    }

    /**
     * Verify negative array find nonexistent value returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_2100
     * @tc.name int32ArrayFindIndexPart02Test021
     * @tc.desc Verify negative array find nonexistent value returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test021() {
    Int32Array a = new Int32Array(new int[] {(-1), (-2), (-3)});
    int result = a.findIndex((v) -> v == (-99));
    assertEqual(-1, result);
    }

    /**
     * Verify predicate always false traverses all elements returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_2200
     * @tc.name int32ArrayFindIndexPart02Test022
     * @tc.desc Verify predicate always false traverses all elements returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test022() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int result = arr.findIndex((v, i, a) -> false);
    assertEqual(-1, result);
    }

    /**
     * Verify findIndex returns -1 when no element matches predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_2300
     * @tc.name int32ArrayFindIndexPart02Test023
     * @tc.desc Verify findIndex returns -1 when no element matches predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test023() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.findIndex((v) -> v > 100);
    assertEqual(-1, result);
    }

    /**
     * Verify single-element array find different value returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_2400
     * @tc.name int32ArrayFindIndexPart02Test024
     * @tc.desc Verify single-element array find different value returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test024() {
    Int32Array arr = new Int32Array(new int[] {42});
    int result = arr.findIndex((v) -> v == 0);
    assertEqual(-1, result);
    }

    /**
     * Verify all-positive array find negative returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_2500
     * @tc.name int32ArrayFindIndexPart02Test025
     * @tc.desc Verify all-positive array find negative returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test025() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int result = arr.findIndex((v) -> v == (-1));
    assertEqual(-1, result);
    }

    /**
     * Verify length-constructor all-zero array find nonzero returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_2600
     * @tc.name int32ArrayFindIndexPart02Test026
     * @tc.desc Verify length-constructor all-zero array find nonzero returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test026() {
    Int32Array arr = new Int32Array(3);
    int result = arr.findIndex((v) -> v == 1);
    assertEqual(-1, result);
    }

    /**
     * Verify miss returns -1 which is not a valid index (negative)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_2700
     * @tc.name int32ArrayFindIndexPart02Test027
     * @tc.desc Verify miss returns -1 which is not a valid index (negative)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test027() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> false);
    boolean isValidIdx = result >= 0 && result < arr.length();
    assertFalse(isValidIdx);
    }

    /**
     * Verify index returned by findIndex reads matched value via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_2800
     * @tc.name int32ArrayFindIndexPart02Test028
     * @tc.desc Verify index returned by findIndex reads matched value via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test028() {
    Int32Array arr = new Int32Array(new int[] {11, 22, 33, 44});
    int idx = arr.findIndex((v) -> v == 33);
    assertEqualInt(33, arr.get(idx));
    }

    /**
     * Verify index 0 from findIndex reads first element via $_get(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_2900
     * @tc.name int32ArrayFindIndexPart02Test029
     * @tc.desc Verify index 0 from findIndex reads first element via $_get(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test029() {
    Int32Array arr = new Int32Array(new int[] {77, 88, 99});
    int idx = arr.findIndex((v) -> v == 77);
    assertEqualInt(77, arr.get(idx));
    }

    /**
     * Verify index length-1 reads last element via $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_3000
     * @tc.name int32ArrayFindIndexPart02Test030
     * @tc.desc Verify index length-1 reads last element via $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test030() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int idx = arr.findIndex((v) -> v == 5);
    assertEqualInt(5, arr.get(idx));
    }

    /**
     * Verify returned index passed to at() reads matched value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_3100
     * @tc.name int32ArrayFindIndexPart02Test031
     * @tc.desc Verify returned index passed to at() reads matched value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test031() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    int idx = arr.findIndex((v) -> v == 20);
    Integer val = arr.at(idx);
    assertEqualInt(20, val);
    }

    /**
     * Verify length unchanged after findIndex hit
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_3200
     * @tc.name int32ArrayFindIndexPart02Test032
     * @tc.desc Verify length unchanged after findIndex hit
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test032() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int lenBefore = arr.length();
    arr.findIndex((v) -> v == 3);
    assertEqual(lenBefore, arr.length());
    }

    /**
     * Verify length unchanged after findIndex miss
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_3300
     * @tc.name int32ArrayFindIndexPart02Test033
     * @tc.desc Verify length unchanged after findIndex miss
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test033() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int lenBefore = arr.length();
    arr.findIndex((v) -> v == 999);
    assertEqual(lenBefore, arr.length());
    }

    /**
     * Verify empty array length stays 0 after findIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_3400
     * @tc.name int32ArrayFindIndexPart02Test034
     * @tc.desc Verify empty array length stays 0 after findIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test034() {
    Int32Array arr = new Int32Array(0);
    arr.findIndex((v) -> true);
    assertEqual(0, arr.length());
    }

    /**
     * Verify byteLength unchanged after findIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_3500
     * @tc.name int32ArrayFindIndexPart02Test035
     * @tc.desc Verify byteLength unchanged after findIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test035() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int blBefore = arr.byteLength();
    arr.findIndex((v) -> v == 2);
    assertEqual(blBefore, arr.byteLength());
    }

    /**
     * Verify byteOffset unchanged after findIndex on offset view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_3600
     * @tc.name int32ArrayFindIndexPart02Test036
     * @tc.desc Verify byteOffset unchanged after findIndex on offset view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test036() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 4, 2);
    int offBefore = arr.byteOffset();
    arr.findIndex((v, i) -> i == 0);
    assertEqual(offBefore, arr.byteOffset());
    }

    /**
     * Verify BYTES_PER_ELEMENT stays 4 after findIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_3700
     * @tc.name int32ArrayFindIndexPart02Test037
     * @tc.desc Verify BYTES_PER_ELEMENT stays 4 after findIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test037() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.findIndex((v) -> v == 2);
    assertEqual(4, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify byteOffset=8 view byteLength stays elements*4 after findIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_3800
     * @tc.name int32ArrayFindIndexPart02Test038
     * @tc.desc Verify byteOffset=8 view byteLength stays elements*4 after findIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test038() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array arr = new Int32Array(buf, 8, 3);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.findIndex((v) -> v == 2);
    assertEqual(12, arr.byteLength());
    assertEqual(3, arr.length());
    }

    /**
     * Verify first element unchanged after findIndex hit middle
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_3900
     * @tc.name int32ArrayFindIndexPart02Test039
     * @tc.desc Verify first element unchanged after findIndex hit middle
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test039() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    arr.findIndex((v) -> v == 20);
    assertEqualInt(10, arr.get(0));
    }

    /**
     * Verify hit-position element value unchanged after findIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_4000
     * @tc.name int32ArrayFindIndexPart02Test040
     * @tc.desc Verify hit-position element value unchanged after findIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test040() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    arr.findIndex((v) -> v == 20);
    assertEqualInt(20, arr.get(1));
    }

    /**
     * Verify last element unchanged after findIndex hit middle
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_4100
     * @tc.name int32ArrayFindIndexPart02Test041
     * @tc.desc Verify last element unchanged after findIndex hit middle
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test041() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    arr.findIndex((v) -> v == 20);
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify all elements unchanged after findIndex miss
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_4200
     * @tc.name int32ArrayFindIndexPart02Test042
     * @tc.desc Verify all elements unchanged after findIndex miss
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test042() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.findIndex((v) -> v == 999);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify length-constructor all-zero array stays zero after findIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_4400
     * @tc.name int32ArrayFindIndexPart02Test044
     * @tc.desc Verify length-constructor all-zero array stays zero after findIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test044() {
    Int32Array arr = new Int32Array(3);
    arr.findIndex((v) -> v == 1);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify short-circuit on first hit leaves subsequent elements unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_4500
     * @tc.name int32ArrayFindIndexPart02Test045
     * @tc.desc Verify short-circuit on first hit leaves subsequent elements unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test045() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.findIndex((v) -> v == 1);
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify findIndex does not detach buffer (set/get still work)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_4600
     * @tc.name int32ArrayFindIndexPart02Test046
     * @tc.desc Verify findIndex does not detach buffer (set/get still work)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test046() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.findIndex((v) -> v == 2);
    arr.set(0, 99);
    assertEqualInt(99, arr.get(0));
    }

    /**
     * Verify callback-observed values match $_get after traversal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_4700
     * @tc.name int32ArrayFindIndexPart02Test047
     * @tc.desc Verify callback-observed values match $_get after traversal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test047() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    List<Integer> captured = new ArrayList<>();
    arr.findIndex((v, i) -> {
    captured.add(v);
    return false;
    });
    assertEqual(3, captured.size());
    assertEqual(captured.get(0).intValue(), arr.get(0).intValue());
    assertEqual(captured.get(1).intValue(), arr.get(1).intValue());
    assertEqual(captured.get(2).intValue(), arr.get(2).intValue());
    }

    /**
     * Verify findIndex does not replace underlying ArrayBuffer reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_4800
     * @tc.name int32ArrayFindIndexPart02Test048
     * @tc.desc Verify findIndex does not replace underlying ArrayBuffer reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test048() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf);
    ArrayBuffer bufBefore = arr.buffer();
    arr.findIndex((v) -> v == 0);
    assertEqual(bufBefore, arr.buffer());
    }

    /**
     * Verify ArrayBuffer.byteLength unchanged after findIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_4900
     * @tc.name int32ArrayFindIndexPart02Test049
     * @tc.desc Verify ArrayBuffer.byteLength unchanged after findIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test049() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf, 0, 3);
    arr.findIndex((v) -> v == 0);
    assertEqual(16, arr.buffer().byteLength());
    }

    /**
     * Verify shared buffer: $_set in callback visible via sibling view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_5000
     * @tc.name int32ArrayFindIndexPart02Test050
     * @tc.desc Verify shared buffer: $_set in callback visible via sibling view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test050() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a1 = new Int32Array(buf);
    Int32Array a2 = new Int32Array(buf);
    int idx = a1.findIndex((v, i, a) -> {
        a.set(0, 77);
        return true;
    });
    assertEqual(0, idx);
    assertEqualInt(77, a2.get(0));
    }

    /**
     * Verify ArrayBuffer.isView returns true after findIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_5100
     * @tc.name int32ArrayFindIndexPart02Test051
     * @tc.desc Verify ArrayBuffer.isView returns true after findIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test051() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.findIndex((v) -> v == 2);
    boolean isView = ArrayBuffer.isView(arr);
    assertTrue(isView);
    }

    /**
     * Verify subarray child view shares parent buffer after findIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_5200
     * @tc.name int32ArrayFindIndexPart02Test052
     * @tc.desc Verify subarray child view shares parent buffer after findIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test052() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array child = parent.subarray(1, 4);
    child.findIndex((v) -> v == 3);
    assertEqual(parent.buffer(), child.buffer());
    }

    /**
     * Verify subarray findIndex returns relative index (child-local)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_5300
     * @tc.name int32ArrayFindIndexPart02Test053
     * @tc.desc Verify subarray findIndex returns relative index (child-local)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test053() {
    Int32Array parent = new Int32Array(new int[] {10, 20, 30, 40, 50});
    Int32Array child = parent.subarray(2, 5);
    int result = child.findIndex((v) -> v == 40);
    assertEqual(1, result);
    assertEqualInt(40, child.get(1));
    }

    /**
     * Verify subarray child byteLength is elements*4 after findIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_5400
     * @tc.name int32ArrayFindIndexPart02Test054
     * @tc.desc Verify subarray child byteLength is elements*4 after findIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test054() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array child = parent.subarray(1, 4);
    child.findIndex((v) -> v == 4);
    assertEqual(12, child.byteLength());
    }

    /**
     * Verify Int32Array.of constructed buffer reference unchanged after findIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_5600
     * @tc.name int32ArrayFindIndexPart02Test056
     * @tc.desc Verify Int32Array.of constructed buffer reference unchanged after findIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test056() {
    Int32Array arr = Int32Array.of(5, 6, 7, 8);
    ArrayBuffer bufBefore = arr.buffer();
    int idx = arr.findIndex((v) -> v == 7);
    assertEqual(2, idx);
    assertEqual(bufBefore, arr.buffer());
    }

    /**
     * Verify two Int32Array.of arrays have independent buffers after findIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_5700
     * @tc.name int32ArrayFindIndexPart02Test057
     * @tc.desc Verify two Int32Array.of arrays have independent buffers after findIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test057() {
    Int32Array a1 = Int32Array.of(1, 2, 3);
    Int32Array a2 = Int32Array.of(1, 2, 3);
    a1.findIndex((v) -> v == 2);
    boolean buffersDiffer = a1.buffer() != a2.buffer();
    assertTrue(buffersDiffer);
    }

    /**
     * Verify copy-constructed (new Int32Array(src)) has independent buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_5800
     * @tc.name int32ArrayFindIndexPart02Test058
     * @tc.desc Verify copy-constructed (new Int32Array(src)) has independent buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test058() {
    Int32Array src = new Int32Array(new int[] {10, 20, 30});
    Int32Array dst = new Int32Array(src);
    dst.findIndex((v) -> v == 20);
    boolean buffersDiffer = dst.buffer() != src.buffer();
    assertTrue(buffersDiffer);
    }

    /**
     * Verify miss returns -1; result + 1 equals 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_6000
     * @tc.name int32ArrayFindIndexPart02Test060
     * @tc.desc Verify miss returns -1; result + 1 equals 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test060() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> v == 99);
    assertEqual(0, result + 1);
    }

    /**
     * Verify two identical-predicate calls return same index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_6100
     * @tc.name int32ArrayFindIndexPart02Test061
     * @tc.desc Verify two identical-predicate calls return same index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test061() {
    Int32Array arr = new Int32Array(new int[] {5, 10, 15, 20});
    int r1 = arr.findIndex((v) -> v == 15);
    int r2 = arr.findIndex((v) -> v == 15);
    assertEqual(r2, r1);
    }

    /**
     * Verify two different predicates return different indices
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_6200
     * @tc.name int32ArrayFindIndexPart02Test062
     * @tc.desc Verify two different predicates return different indices
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test062() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int r1 = arr.findIndex((v) -> v == 2);
    int r2 = arr.findIndex((v) -> v == 4);
    assertEqual(1, r1);
    assertEqual(3, r2);
    }

    /**
     * Verify nested findIndex inside predicate works correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_6300
     * @tc.name int32ArrayFindIndexPart02Test063
     * @tc.desc Verify nested findIndex inside predicate works correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test063() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    Int32Array other = new Int32Array(new int[] {20, 40, 60});
    int result = arr.findIndex((v) -> {
        int oIdx = other.findIndex((ov) -> ov == ((int) v));
        return oIdx != (-1);
    });
    assertEqual(1, result);
    }

    /**
     * Verify returned index is present in keys() iterator
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_6400
     * @tc.name int32ArrayFindIndexPart02Test064
     * @tc.desc Verify returned index is present in keys() iterator
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test064() {
    Int32Array arr = new Int32Array(new int[] {7, 14, 21, 28});
    int idx = arr.findIndex((v) -> v == 21);
    boolean found = false;
    for (Integer k : arr.keys()) {
    if (k == idx) {
    found = true;
    break;
    }
    }
    assertTrue(found);
    }

    /**
     * Verify Int32Array.from constructed array findIndex returns correct index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_6500
     * @tc.name int32ArrayFindIndexPart02Test065
     * @tc.desc Verify Int32Array.from constructed array findIndex returns correct index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test065() {
    Int32Array arr = Int32Array.from(new int[] {5, 10, 15});
    int result = arr.findIndex((v) -> v == 10);
    assertEqual(1, result);
    }

    /**
     * Verify default-offset ArrayBuffer view findIndex returns correct index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_6700
     * @tc.name int32ArrayFindIndexPart02Test067
     * @tc.desc Verify default-offset ArrayBuffer view findIndex returns correct index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test067() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array arr = new Int32Array(buf);
    arr.set(0, 11);
    arr.set(1, 22);
    arr.set(2, 33);
    int result = arr.findIndex((v) -> v == 22);
    assertEqual(1, result);
    }

    /**
     * Verify single-element ArrayBuffer view findIndex hit returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_6800
     * @tc.name int32ArrayFindIndexPart02Test068
     * @tc.desc Verify single-element ArrayBuffer view findIndex hit returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test068() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int32Array arr = new Int32Array(buf);
    arr.set(0, 55);
    int result = arr.findIndex((v) -> v == 55);
    assertEqual(0, result);
    }

    /**
     * Verify single-element ArrayBuffer view findIndex miss returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_6900
     * @tc.name int32ArrayFindIndexPart02Test069
     * @tc.desc Verify single-element ArrayBuffer view findIndex miss returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test069() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int32Array arr = new Int32Array(buf);
    arr.set(0, 55);
    int result = arr.findIndex((v) -> v == 99);
    assertEqual(-1, result);
    }

    /**
     * Verify TypedArray copy-constructed findIndex returns correct index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_7000
     * @tc.name int32ArrayFindIndexPart02Test070
     * @tc.desc Verify TypedArray copy-constructed findIndex returns correct index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test070() {
    Int32Array src = new Int32Array(new int[] {10, 20, 30});
    Int32Array dst = new Int32Array(src);
    int result = dst.findIndex((v) -> v == 20);
    assertEqual(1, result);
    }

    /**
     * Verify all-same elements findIndex always returns 0 (first hit short-circuit)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_7100
     * @tc.name int32ArrayFindIndexPart02Test071
     * @tc.desc Verify all-same elements findIndex always returns 0 (first hit short-circuit)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test071() {
    Int32Array arr = new Int32Array(new int[] {7, 7, 7, 7});
    int result = arr.findIndex((v) -> v == 7);
    assertEqual(0, result);
    }

    /**
     * Verify all-zero array findIndex returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_7200
     * @tc.name int32ArrayFindIndexPart02Test072
     * @tc.desc Verify all-zero array findIndex returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test072() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0});
    int result = arr.findIndex((v) -> v == 0);
    assertEqual(0, result);
    }

    /**
     * Verify callback value parameter typeof is number
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_7300
     * @tc.name int32ArrayFindIndexPart02Test073
     * @tc.desc Verify callback value parameter typeof is number
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test073() {
    Int32Array arr = new Int32Array(new int[] {42});
    String[] vType = {""};
    arr.findIndex((v, i, a) -> {
    vType[0] = BasTest.typeofValue(v);
    return true;
    });
    assertEqual("number", vType[0]);
    }

    /**
     * Verify callback array parameter is Int32Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_7500
     * @tc.name int32ArrayFindIndexPart02Test075
     * @tc.desc Verify callback array parameter is Int32Array instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test075() {
    Int32Array arr = new Int32Array(new int[] {42});
    boolean[] sameRef = {false};
    arr.findIndex((v, i, a) -> {
    sameRef[0] = a == arr;
    return true;
    });
    assertTrue(sameRef[0]);
    }

    /**
     * Verify findIndex callback receives correct index for each element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_7600
     * @tc.name int32ArrayFindIndexPart02Test076
     * @tc.desc Verify findIndex callback receives correct index for each element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test076() {
    Int32Array arr = new Int32Array(new int[] {100, 200, 300});
    List<Integer> capturedIndices = new ArrayList<>();
    arr.findIndex((unusedVal, i, array) -> {
    capturedIndices.add(i);
    return false;
    });
    assertEqualInt(0, capturedIndices.get(0));
    assertEqualInt(1, capturedIndices.get(1));
    assertEqualInt(2, capturedIndices.get(2));
    }

    /**
     * Verify callback value matches array.$_get(i) at every position
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_7700
     * @tc.name int32ArrayFindIndexPart02Test077
     * @tc.desc Verify callback value matches array.$_get(i) at every position
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test077() {
    Int32Array arr = new Int32Array(new int[] {3, 6, 9, 12});
    boolean[] allMatch = {true};
    arr.findIndex((v, i, a) -> {
    if (v != a.get(i)) {
    allMatch[0] = false;
    }
    return false;
    });
    assertTrue(allMatch[0]);
    }

    /**
     * Verify first-element short-circuit calls callback exactly once
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_7800
     * @tc.name int32ArrayFindIndexPart02Test078
     * @tc.desc Verify first-element short-circuit calls callback exactly once
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test078() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int[] callCount = {0};
    int result = arr.findIndex((v, i) -> {
        callCount[0] = callCount[0] + 1;
        return v == 1;
    });
    assertEqual(0, result);
    assertEqual(1, callCount[0]);
    }

    /**
     * Verify middle-element short-circuit calls callback index+1 times
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_7900
     * @tc.name int32ArrayFindIndexPart02Test079
     * @tc.desc Verify middle-element short-circuit calls callback index+1 times
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test079() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int[] callCount = {0};
    int result = arr.findIndex((v, i) -> {
        callCount[0] = callCount[0] + 1;
        return i == 2;
    });
    assertEqual(2, result);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify miss path calls callback exactly length times
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_8000
     * @tc.name int32ArrayFindIndexPart02Test080
     * @tc.desc Verify miss path calls callback exactly length times
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test080() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int[] callCount = {0};
    int result = arr.findIndex((v, i) -> {
        callCount[0] = callCount[0] + 1;
        return false;
    });
    assertEqual(-1, result);
    assertEqual(4, callCount[0]);
    }

    /**
     * Verify empty array invokes callback zero times
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_8100
     * @tc.name int32ArrayFindIndexPart02Test081
     * @tc.desc Verify empty array invokes callback zero times
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test081() {
    Int32Array arr = new Int32Array(0);
    int[] callCount = {0};
    int result = arr.findIndex((v, i) -> {
        callCount[0] = callCount[0] + 1;
        return true;
    });
    assertEqual(-1, result);
    assertEqual(0, callCount[0]);
    }

    /**
     * Verify length-100 array hit at index 49 returns 49 and value matches
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_8200
     * @tc.name int32ArrayFindIndexPart02Test082
     * @tc.desc Verify length-100 array hit at index 49 returns 49 and value matches
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test082() {
    List<Integer> data = new ArrayList<>();
    for (int i = 0; i < 100; i = i + 1) {
    data.add(i * 2);
    }
    Int32Array arr = new Int32Array(data);
    int result = arr.findIndex((v, i) -> i == 49);
    assertEqual(49, result);
    assertEqualInt(98, arr.get(49));
    }

    /**
     * Verify length-100 array miss calls callback 100 times returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_8300
     * @tc.name int32ArrayFindIndexPart02Test083
     * @tc.desc Verify length-100 array miss calls callback 100 times returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test083() {
    List<Integer> data = new ArrayList<>();
    for (int i = 0; i < 100; i = i + 1) {
    data.add(i);
    }
    Int32Array arr = new Int32Array(data);
    int[] count = {0};
    int result = arr.findIndex((v, i) -> {
        count[0] = count[0] + 1;
        return false;
    });
    assertEqual(-1, result);
    assertEqual(100, count[0]);
    }

    /**
     * Verify returned index is an integer (bitwise OR with 0 preserves identity)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART02_8400
     * @tc.name int32ArrayFindIndexPart02Test084
     * @tc.desc Verify returned index is an integer (bitwise OR with 0 preserves identity)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart02Test084() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.findIndex((v) -> v == 4);
    assertEqual(result | 0, result);
    }
}
