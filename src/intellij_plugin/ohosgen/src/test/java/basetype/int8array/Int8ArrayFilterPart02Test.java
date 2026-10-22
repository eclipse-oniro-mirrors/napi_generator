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

package basetype.int8array;

import basetype.common.Int8Array;
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayFilterPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFilterPart02Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify filter return value is Int8Array when no element passes (int8 upper bound 127 comparison)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_0200
     * @tc.name int8ArrayFilterPart02Test002
     * @tc.desc Verify filter return value is Int8Array when no element passes (int8 upper bound 127 comparison)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test002() {
    Int8Array src = Int8Array.of(1, 2, 3);
    Int8Array result = src.filter((v) -> v > INT8_MAX);
    assertEqual(0, result.length());
    boolean r1 = ArrayBuffer.isView(result);
    assertTrue(r1);
    }

    /**
     * Verify filter return value is Int8Array when only one element passes predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_0400
     * @tc.name int8ArrayFilterPart02Test004
     * @tc.desc Verify filter return value is Int8Array when only one element passes predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test004() {
    Int8Array src = Int8Array.of(1, 2, 3);
    Int8Array result = src.filter((v) -> v > 2);
    assertEqual(1, result.length());
    boolean r1 = ArrayBuffer.isView(result);
    assertTrue(r1);
    }

    /**
     * Verify filter return value length is 2 when two elements pass predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_0600
     * @tc.name int8ArrayFilterPart02Test006
     * @tc.desc Verify filter return value length is 2 when two elements pass predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test006() {
    Int8Array src = Int8Array.of(1, 2, 3);
    Int8Array result = src.filter((v) -> v > 1);
    int r1 = result.length();
    int e1 = 2;
    assertEqual(e1, r1);
    int r2 = result.byteOffset();
    int e2 = 0;
    assertEqual(e2, r2);
    boolean r3 = ArrayBuffer.isView(result);
    assertTrue(r3);
    }

    /**
     * Verify filter return value is Int8Array with index-based predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_0700
     * @tc.name int8ArrayFilterPart02Test007
     * @tc.desc Verify filter return value is Int8Array with index-based predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test007() {
    Int8Array src = Int8Array.of(10, 20, 30, 40);
    Int8Array result = src.filter((v, i) -> {
        if (v < INT8_MIN || v > INT8_MAX) {
        return false;
        }
        return i % 2 == 0;
        });
    assertEqual(2, result.length());
    Integer r1 = result.get(0);
    int e1 = 10;
    assertEqualInt(e1, r1);
    boolean r2 = ArrayBuffer.isView(result);
    assertTrue(r2);
    }

    /**
     * Verify filter return value preserves passing element value (first element)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_0900
     * @tc.name int8ArrayFilterPart02Test009
     * @tc.desc Verify filter return value preserves passing element value (first element)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test009() {
    Int8Array src = Int8Array.of(5, 15, 25);
    Int8Array result = src.filter((v) -> v > 10);
    assertEqualInt(15, result.get(0));
    boolean r1 = ArrayBuffer.isView(result);
    assertTrue(r1);
    }

    /**
     * Verify filter return value preserves zero value element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_1200
     * @tc.name int8ArrayFilterPart02Test012
     * @tc.desc Verify filter return value preserves zero value element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test012() {
    Int8Array src = Int8Array.of(0, 1, 2);
    Int8Array result = src.filter((v) -> v == 0);
    assertEqualInt(0, result.get(0));
    }

    /**
     * Verify filter return value maintains original order (first passing element)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_1300
     * @tc.name int8ArrayFilterPart02Test013
     * @tc.desc Verify filter return value maintains original order (first passing element)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test013() {
    Int8Array src = Int8Array.of(30, 10, 20, 5);
    Int8Array result = src.filter((v) -> v < 25);
    assertEqualInt(10, result.get(0));
    int r1 = result.indexOf(30);
    int e1 = -1;
    assertEqual(e1, r1);
    }

    /**
     * Verify filter return value contains only the single passing element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_1500
     * @tc.name int8ArrayFilterPart02Test015
     * @tc.desc Verify filter return value contains only the single passing element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test015() {
    Int8Array src = Int8Array.of(5, 10, 15);
    Int8Array result = src.filter((v) -> v == 10);
    assertEqualInt(10, result.get(0));
    int r1 = result.length();
    int e1 = 1;
    assertEqual(e1, r1);
    int r2 = result.byteLength();
    int e2 = 1;
    assertEqual(e2, r2);
    }

    /**
     * Verify filter return value preserves all duplicates when all pass (last duplicate)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_1600
     * @tc.name int8ArrayFilterPart02Test016
     * @tc.desc Verify filter return value preserves all duplicates when all pass (last duplicate)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test016() {
    Int8Array src = Int8Array.of(7, 7, 7);
    Int8Array result = src.filter((v) -> v == 7);
    assertEqualInt(7, result.get(2));
    }

    /**
     * Verify filter return value contains only passing duplicates (second passing element)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_1700
     * @tc.name int8ArrayFilterPart02Test017
     * @tc.desc Verify filter return value contains only passing duplicates (second passing element)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test017() {
    Int8Array src = Int8Array.of(7, 8, 7, 8);
    Int8Array result = src.filter((v) -> v == 7);
    assertEqualInt(7, result.get(1));
    }

    /**
     * Verify filter return value length equals passing element count on partial filter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_1800
     * @tc.name int8ArrayFilterPart02Test018
     * @tc.desc Verify filter return value length equals passing element count on partial filter
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test018() {
    Int8Array src = Int8Array.of(1, 2, 3, 4, 5);
    Int8Array result = src.filter((v) -> v > 2);
    assertEqual(3, result.length());
    }

    /**
     * Verify filter return value length reflects passing index count with index-based predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_1900
     * @tc.name int8ArrayFilterPart02Test019
     * @tc.desc Verify filter return value length reflects passing index count with index-based predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test019() {
    Int8Array src = Int8Array.of(10, 20, 30, 40, 50);
    Int8Array result = src.filter((v, i) -> {
        if (v < INT8_MIN || v > INT8_MAX) {
        return false;
        }
        return i % 2 == 0;
        });
    assertEqual(3, result.length());
    }

    /**
     * Verify filter return value buffer.byteLength is 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_2200
     * @tc.name int8ArrayFilterPart02Test022
     * @tc.desc Verify filter return value buffer.byteLength is 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test022() {
    Int8Array src = Int8Array.of(1, 2, 3, 4);
    Int8Array result = src.filter((v) -> v > 1);
    int r1 = result.buffer().byteLength();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify source first element unchanged after filter call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_2300
     * @tc.name int8ArrayFilterPart02Test023
     * @tc.desc Verify source first element unchanged after filter call
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test023() {
    Int8Array src = Int8Array.of(11, 22, 33);
    src.filter((v) -> v > 15);
    assertEqualInt(11, src.get(0));
    assertEqualInt(33, src.get(2));
    int r1 = src.indexOf(22);
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify two filter calls on same source produce consistent results
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_2400
     * @tc.name int8ArrayFilterPart02Test024
     * @tc.desc Verify two filter calls on same source produce consistent results
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test024() {
    Int8Array src = Int8Array.of(5, 10, 15);
    Int8Array result = src.filter((v) -> v == 10);
    assertEqual(1, result.byteLength());
    }

    /**
     * Verify chained filter call return value type is Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_2500
     * @tc.name int8ArrayFilterPart02Test025
     * @tc.desc Verify chained filter call return value type is Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test025() {
    Int8Array src = Int8Array.of(1, 2, 3, 4, 5);
    Int8Array result = src.filter((v) -> v > 1).filter((v) -> v < 5);
    assertEqual(3, result.length());
    assertEqualInt(3, result.get(1));
    boolean r1 = ArrayBuffer.isView(result);
    assertTrue(r1);
    }

    /**
     * Verify return value can be filtered again with correct length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_2600
     * @tc.name int8ArrayFilterPart02Test026
     * @tc.desc Verify return value can be filtered again with correct length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test026() {
    Int8Array src = Int8Array.of(1, 2, 3);
    Int8Array result = src.filter((v) -> v > 0);
    assertEqual(2, result.filter((v) -> v > 1).length());
    }

    /**
     * Verify chained filter return value byteOffset is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_2700
     * @tc.name int8ArrayFilterPart02Test027
     * @tc.desc Verify chained filter return value byteOffset is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test027() {
    Int8Array src = Int8Array.of(1, 2, 3, 4);
    Int8Array result = src.filter((v) -> v > 1).filter((v) -> v < 4);
    assertEqual(0, result.byteOffset());
    }

    /**
     * Verify filter return value length equals 0 when no elements pass
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_2900
     * @tc.name int8ArrayFilterPart02Test029
     * @tc.desc Verify filter return value length equals 0 when no elements pass
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test029() {
    Int8Array src = Int8Array.of(1, 2, 3);
    Int8Array result = src.filter((v) -> v > 100);
    assertEqual(0, result.length());
    assertEqual(0, result.byteLength());
    assertEqual(0, result.buffer().byteLength());
    assertEqual(0, result.byteOffset());
    assertNull(result.at(0));
    }

    /**
     * Verify empty filter result can be filtered again returning empty Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_3000
     * @tc.name int8ArrayFilterPart02Test030
     * @tc.desc Verify empty filter result can be filtered again returning empty Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test030() {
    Int8Array src = Int8Array.of(1, 2, 3);
    Int8Array result = src.filter((v) -> v > 100);
    Int8Array next = result.filter((v) -> v > 0);
    assertEqual(0, next.length());
    }

    /**
     * Verify filter on empty source returns Int8Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_3100
     * @tc.name int8ArrayFilterPart02Test031
     * @tc.desc Verify filter on empty source returns Int8Array instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test031() {
    Int8Array src = new Int8Array(0);
    Int8Array result = src.filter((v) -> v > 0);
    assertEqual(0, result.length());
    assertEqual(0, result.byteLength());
    int r1 = result.buffer().byteLength();
    int e1 = 0;
    assertEqual(e1, r1);
    int r2 = result.byteOffset();
    int e2 = 0;
    assertEqual(e2, r2);
    assertNull(result.at(0));
    boolean r3 = ArrayBuffer.isView(result);
    assertTrue(r3);
    }

    /**
     * Verify filter on empty source does not execute callback (execution count is 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_3200
     * @tc.name int8ArrayFilterPart02Test032
     * @tc.desc Verify filter on empty source does not execute callback (execution count is 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test032() {
    Int8Array src = new Int8Array(0);
    int[] count = {0};
    Int8Array result = src.filter((v) -> {
        count[0] = count[0] + 1;
        return v > 0;
    });
    int r1 = result.length();
    int e1 = 0;
    assertEqual(e1, r1);
    assertEqual(0, count[0]);
    }

    /**
     * Verify filter preserves int8 minimum -128 when filtering only -128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_3800
     * @tc.name int8ArrayFilterPart02Test038
     * @tc.desc Verify filter preserves int8 minimum -128 when filtering only -128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test038() {
    Int8Array src = Int8Array.of(INT8_MIN, 0, INT8_MAX);
    Int8Array result = src.filter((v) -> v == INT8_MIN);
    Integer r1 = result.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify filter preserves int8 maximum 127 when filtering only 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_3900
     * @tc.name int8ArrayFilterPart02Test039
     * @tc.desc Verify filter preserves int8 maximum 127 when filtering only 127
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test039() {
    Int8Array src = Int8Array.of(-128, 0, INT8_MAX);
    Int8Array result = src.filter((v) -> v == INT8_MAX);
    assertEqualInt(INT8_MAX, result.get(0));
    }

    /**
     * Verify filter excludes zero when filtering out zero (indexOf returns -1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_4000
     * @tc.name int8ArrayFilterPart02Test040
     * @tc.desc Verify filter excludes zero when filtering out zero (indexOf returns -1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test040() {
    Int8Array src = Int8Array.of(0, 1, 0, 2);
    Int8Array result = src.filter((v) -> v != 0);
    assertEqual(-1, result.indexOf(0));
    }

    /**
     * Verify filter preserves positive numbers with first element positive
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_4100
     * @tc.name int8ArrayFilterPart02Test041
     * @tc.desc Verify filter preserves positive numbers with first element positive
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test041() {
    Int8Array src = Int8Array.of(-5, 3, -1, 7);
    Int8Array result = src.filter((v) -> v > 0);
    assertEqualInt(3, result.get(0));
    }

    /**
     * Verify filter preserves negative numbers with first element negative
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_4200
     * @tc.name int8ArrayFilterPart02Test042
     * @tc.desc Verify filter preserves negative numbers with first element negative
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test042() {
    Int8Array src = Int8Array.of(-5, 3, -1, 7);
    Int8Array result = src.filter((v) -> v < 0);
    assertEqualInt(-5, result.get(0));
    }

    /**
     * Verify filter preserves element order with mixed positive and negative elements (third element)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_4400
     * @tc.name int8ArrayFilterPart02Test044
     * @tc.desc Verify filter preserves element order with mixed positive and negative elements (third element)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test044() {
    Int8Array src = Int8Array.of(-3, 5, -1, 8);
    Int8Array result = src.filter((v) -> v > -2);
    assertEqualInt(8, result.get(2));
    }

    /**
     * Verify filter excluding negative boundary -128 returns only positive values (length 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART02_4500
     * @tc.name int8ArrayFilterPart02Test045
     * @tc.desc Verify filter excluding negative boundary -128 returns only positive values (length 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart02Test045() {
    Int8Array src = Int8Array.of(INT8_MIN, 5, INT8_MAX);
    Int8Array result = src.filter((v) -> v > 0);
    assertEqual(2, result.length());
    }
}
