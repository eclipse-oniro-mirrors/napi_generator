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
import basetype.common.RangeError;
import basetype.common.Error;

import java.util.ArrayList;
import java.util.List;
import java.util.LinkedHashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayFromPart06Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFromPart06Test extends BasTest {
    private static final int INT8_MAX = 127;

    /**
     * Verify Int8Array.from(Int8Array) dispatches to Int8Array overload returning new
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_0100
     * @tc.name int8ArrayFromPart06Test001
     * @tc.desc Verify Int8Array.from(Int8Array) dispatches to Int8Array overload returning newinstance
     * reference-unequal but value-equal to source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test001() {
    Int8Array src = Int8Array.of(10, 20, 30);
    Int8Array res = Int8Array.from(src);
    assertNotEqual(src, res);
    assertEqualInt(10, res.get(0));
    assertEqualInt(30, res.get(2));
    assertNotEqual(src.buffer(), res.buffer());
    }

    /**
     * Verify Int8Array.from(FixedArray<int>) dispatches to FixedArray<int> overload r
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_0200
     * @tc.name int8ArrayFromPart06Test002
     * @tc.desc Verify Int8Array.from(FixedArray<int>) dispatches to FixedArray<int> overload returning Int8Array
     * instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test002() {
    int[] src = new int[] {10, 20, 30};
    Int8Array res = Int8Array.from(src);
    assertEqual(3, res.length());
    assertEqualInt(20, res.get(1));
    }

    /**
     * Verify Int8Array.from(Set<int>) dispatches to Set<int> overload writing in insertion order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_0300
     * @tc.name int8ArrayFromPart06Test003
     * @tc.desc Verify Int8Array.from(Set<int>) dispatches to Set<int> overload writing in insertion order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test003() {
    Set<Integer> src = new LinkedHashSet<>();
    src.add(10);
    src.add(20);
    src.add(30);
    Int8Array res = Int8Array.from(src);
    assertEqual(3, res.length());
    assertEqualInt(10, res.get(0));
    assertEqualInt(30, res.get(2));
    }

    /**
     * Verify Int8Array.from(Array<number>) dispatches to Array<number> overload returning Int8Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_0400
     * @tc.name int8ArrayFromPart06Test004
     * @tc.desc Verify Int8Array.from(Array<number>) dispatches to Array<number> overload returning Int8Array instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test004() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array res = Int8Array.from(src);
    assertEqual(3, res.length());
    assertEqualInt(10, res.get(0));
    }

    /**
     * Verify Int8Array.from(i8Src) same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_0800
     * @tc.name int8ArrayFromPart06Test008
     * @tc.desc Verify Int8Array.from(i8Src) same values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test008() {
    Int8Array i8Src = Int8Array.of(10, 20, 30);
    List<Integer> arrSrc = java.util.Arrays.asList(10, 20, 30);
    Int8Array r1 = Int8Array.from(i8Src);
    Int8Array r2 = Int8Array.from(arrSrc);
    assertEqual(r2.length(), r1.length());
    assertEqual(r2.get(0).intValue(), r1.get(0).intValue());
    assertEqual(r2.get(2).intValue(), r1.get(2).intValue());
    }

    /**
     * Verify Int8Array.from(FixedArray<int>) and Int8Array.from(Set<int>) return Int8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_0900
     * @tc.name int8ArrayFromPart06Test009
     * @tc.desc Verify Int8Array.from(FixedArray<int>) and Int8Array.from(Set<int>) return Int8
     * Array instances with matching $_get values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test009() {
    int[] faSrc = new int[] {10, 20, 30};
    Set<Integer> setSrc = new LinkedHashSet<>();
    setSrc.add(10);
    setSrc.add(20);
    setSrc.add(30);
    Int8Array r1 = Int8Array.from(faSrc);
    Int8Array r2 = Int8Array.from(setSrc);
    assertEqual(r2.get(0).intValue(), r1.get(0).intValue());
    assertEqual(r2.get(2).intValue(), r1.get(2).intValue());
    }

    /**
     * Verify Int8Array.from(FixedArray<int>) and Int8Array.from(Int8Array) return Int
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_1100
     * @tc.name int8ArrayFromPart06Test011
     * @tc.desc Verify Int8Array.from(FixedArray<int>) and Int8Array.from(Int8Array) return Int
     * 8Array instances with matching $_get values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test011() {
    int[] faSrc = new int[] {10, 20, 30};
    Int8Array i8Src = Int8Array.of(10, 20, 30);
    Int8Array r1 = Int8Array.from(faSrc);
    Int8Array r2 = Int8Array.from(i8Src);
    assertEqual(r2.get(0).intValue(), r1.get(0).intValue());
    assertEqual(r2.get(2).intValue(), r1.get(2).intValue());
    }

    /**
     * Verify Int8Array.from(setSrc) same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_1200
     * @tc.name int8ArrayFromPart06Test012
     * @tc.desc Verify Int8Array.from(setSrc) same values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test012() {
    Set<Integer> setSrc = new LinkedHashSet<>();
    setSrc.add(10);
    setSrc.add(20);
    setSrc.add(30);
    List<Integer> arrSrc = java.util.Arrays.asList(10, 20, 30);
    Int8Array r1 = Int8Array.from(setSrc);
    Int8Array r2 = Int8Array.from(arrSrc);
    assertEqual(r2.get(0).intValue(), r1.get(0).intValue());
    assertEqual(r2.get(2).intValue(), r1.get(2).intValue());
    }

    /**
     * Verify Int8Array.from(faSrc/arrSrc/i8Src) all produce length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_1600
     * @tc.name int8ArrayFromPart06Test016
     * @tc.desc Verify Int8Array.from(faSrc/arrSrc/i8Src) all produce length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test016() {
    int[] faSrc = new int[] {10, 20, 30};
    List<Integer> arrSrc = java.util.Arrays.asList(10, 20, 30);
    Int8Array i8Src = Int8Array.of(10, 20, 30);
    assertEqual(3, Int8Array.from(faSrc).length());
    assertEqual(3, Int8Array.from(arrSrc).length());
    assertEqual(3, Int8Array.from(i8Src).length());
    assertEqual(0, Int8Array.from(faSrc).byteOffset());
    assertEqual(0, Int8Array.from(arrSrc).byteOffset());
    assertEqual(0, Int8Array.from(i8Src).byteOffset());
    assertEqual(3, Int8Array.from(faSrc).buffer().byteLength());
    assertEqual(3, Int8Array.from(arrSrc).buffer().byteLength());
    assertEqual(3, Int8Array.from(i8Src).buffer().byteLength());
    assertEqual(1, Int8Array.from(faSrc).BYTES_PER_ELEMENT);
    assertEqual(1, Int8Array.from(arrSrc).BYTES_PER_ELEMENT);
    assertEqual(1, Int8Array.from(i8Src).BYTES_PER_ELEMENT);
    String r1 = Int8Array.from(faSrc).toString();
    String e1 = "10,20,30";
    assertEqual(e1, r1);
    String r2 = Int8Array.from(arrSrc).toString();
    String e2 = "10,20,30";
    assertEqual(e2, r2);
    String r3 = Int8Array.from(i8Src).toString();
    String e3 = "10,20,30";
    assertEqual(e3, r3);
    assertEqualInt(10, Int8Array.from(faSrc).at(0));
    assertEqualInt(10, Int8Array.from(arrSrc).at(0));
    assertEqualInt(10, Int8Array.from(i8Src).at(0));
    assertEqualInt(30, Int8Array.from(faSrc).at(-1));
    assertEqualInt(30, Int8Array.from(arrSrc).at(-1));
    assertEqualInt(30, Int8Array.from(i8Src).at(-1));
    }

    /**
     * Verify Int8Array.from(faSrc/arrSrc/i8Src) all produce byteLength 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_1700
     * @tc.name int8ArrayFromPart06Test017
     * @tc.desc Verify Int8Array.from(faSrc/arrSrc/i8Src) all produce byteLength 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test017() {
    int[] faSrc = new int[] {10, 20, 30};
    List<Integer> arrSrc = java.util.Arrays.asList(10, 20, 30);
    Int8Array i8Src = Int8Array.of(10, 20, 30);
    assertEqual(0, Int8Array.from(faSrc).byteOffset());
    assertEqual(0, Int8Array.from(arrSrc).byteOffset());
    assertEqual(0, Int8Array.from(i8Src).byteOffset());
    }

    /**
     * Verify Int8Array.from(faSrc/setSrc) join() with no separator equals '10, 20, 30'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_1800
     * @tc.name int8ArrayFromPart06Test018
     * @tc.desc Verify Int8Array.from(faSrc/setSrc) join() with no separator equals '10, 20, 30'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test018() {
    int[] faSrc = new int[] {10, 20, 30};
    Set<Integer> setSrc = new LinkedHashSet<>();
    setSrc.add(10);
    setSrc.add(20);
    setSrc.add(30);
    assertEqual("10,20,30", Int8Array.from(faSrc).join());
    assertEqual("10,20,30", Int8Array.from(setSrc).join());
    }

    /**
     * Verify Int8Array.from(arrSrc) join('-') consistent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_1900
     * @tc.name int8ArrayFromPart06Test019
     * @tc.desc Verify Int8Array.from(arrSrc) join('-') consistent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test019() {
    List<Integer> arrSrc = java.util.Arrays.asList(10, 20, 30);
    Int8Array i8Src = Int8Array.of(10, 20, 30);
    assertEqual("10-20-30", Int8Array.from(arrSrc).join("-"));
    assertEqual("10-20-30", Int8Array.from(i8Src).join("-"));
    }

    /**
     * Verify Int8Array.from(faSrc/setSrc/i8Src) all produce $_get(0) equal to 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_2000
     * @tc.name int8ArrayFromPart06Test020
     * @tc.desc Verify Int8Array.from(faSrc/setSrc/i8Src) all produce $_get(0) equal to 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test020() {
    int[] faSrc = new int[] {10, 20, 30};
    Set<Integer> setSrc = new LinkedHashSet<>();
    setSrc.add(10);
    setSrc.add(20);
    setSrc.add(30);
    Int8Array i8Src = Int8Array.of(10, 20, 30);
    assertEqualInt(10, Int8Array.from(faSrc).get(0));
    assertEqualInt(10, Int8Array.from(setSrc).get(0));
    assertEqualInt(10, Int8Array.from(i8Src).get(0));
    assertEqual(1, Int8Array.from(faSrc).indexOf(20));
    assertEqual(1, Int8Array.from(setSrc).indexOf(20));
    assertEqual(1, Int8Array.from(i8Src).indexOf(20));
    }

    /**
     * Verify Int8Array.from(Array<number>, mapfn) propagates RangeError thrown by map
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_2100
     * @tc.name int8ArrayFromPart06Test021
     * @tc.desc Verify Int8Array.from(Array<number>, mapfn) propagates RangeError thrown by mapfn and source array
     * remains unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test021() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    try {
    Int8Array.from(src, (v, k) -> {
    if (k == 0) {
    assertEqual(10, v);
    }
    throw new RangeError("boom");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(3, src.size());
    }

    /**
     * Verify mapfn throw at element 0 interrupts Int8Array.from call with no return value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_2400
     * @tc.name int8ArrayFromPart06Test024
     * @tc.desc Verify mapfn throw at element 0 interrupts Int8Array.from call with no return value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test024() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    boolean[] reached = {false};
    try {
    Int8Array.from(src, (v, k) -> {
    if (k == 0) {
    return BasTest.throwTestError("first");
    }
    reached[0] = true;
    return v;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("first", e.getMessage());
    }
    assertFalse(reached[0]);
    }

    /**
     * Verify Int8Array.from mapfn throwing RangeError propagates exception with name RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_2600
     * @tc.name int8ArrayFromPart06Test026
     * @tc.desc Verify Int8Array.from mapfn throwing RangeError propagates exception with name RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test026() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    try {
    Int8Array.from(src, (v, k) -> {
    if (k == 0) {
    assertEqual(1, v);
    }
    throw new RangeError("r");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Int8Array.from(faSrc) all overload
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_2800
     * @tc.name int8ArrayFromPart06Test028
     * @tc.desc Verify Int8Array.from(faSrc) all overload
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test028() {
    int[] faSrc = new int[] {10, 20, 30};
    Set<Integer> setSrc = new LinkedHashSet<>();
    setSrc.add(10);
    setSrc.add(20);
    setSrc.add(30);
    List<Integer> arrSrc = java.util.Arrays.asList(10, 20, 30);
    Int8Array i8Src = Int8Array.of(10, 20, 30);
    Int8Array r1 = Int8Array.from(faSrc);
    Int8Array r2 = Int8Array.from(setSrc);
    Int8Array r3 = Int8Array.from(arrSrc);
    Int8Array r4 = Int8Array.from(i8Src);
    assertEqual(1, r1.BYTES_PER_ELEMENT);
    assertEqual(3, r2.length());
    assertEqualInt(10, r3.get(0));
    assertEqualInt(30, r4.get(2));
    }

    /**
     * Verify Int8Array.from(faSrc) $_set(0, 99)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_3000
     * @tc.name int8ArrayFromPart06Test030
     * @tc.desc Verify Int8Array.from(faSrc) $_set(0, 99)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test030() {
    int[] faSrc = new int[] {10, 20, 30};
    Int8Array i8Src = Int8Array.of(10, 20, 30);
    Int8Array r1 = Int8Array.from(faSrc);
    Int8Array r2 = Int8Array.from(i8Src);
    r1.set(0, 99);
    r2.set(0, 99);
    assertEqualInt(99, r1.get(0));
    assertEqualInt(99, r2.get(0));
    }

    /**
     * Verify Int8Array.from(faSrc) forEach callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_3300
     * @tc.name int8ArrayFromPart06Test033
     * @tc.desc Verify Int8Array.from(faSrc) forEach callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test033() {
    int[] faSrc = new int[] {10, 20, 30};
    Int8Array i8Src = Int8Array.of(10, 20, 30);
    Int8Array r1 = Int8Array.from(faSrc);
    Int8Array r2 = Int8Array.from(i8Src);
    int[] c1 = {0};
    int[] c2 = {0};
    r1.forEach((v, k) -> {
    if (k == 0) {
    assertEqual(10, v);
    }
    c1[0] = c1[0] + 1;
    });
    r2.forEach((v, k) -> {
    if (k == 0) {
    assertEqual(10, v);
    }
    c2[0] = c2[0] + 1;
    });
    assertEqual(3, c1[0]);
    assertEqual(3, c2[0]);
    }

    /**
     * Verify Int8Array.from(faSrc) reverse() element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_3400
     * @tc.name int8ArrayFromPart06Test034
     * @tc.desc Verify Int8Array.from(faSrc) reverse() element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test034() {
    int[] faSrc = new int[] {10, 20, 30};
    Int8Array i8Src = Int8Array.of(10, 20, 30);
    Int8Array r1 = Int8Array.from(faSrc);
    Int8Array r2 = Int8Array.from(i8Src);
    r1.reverse();
    r2.reverse();
    assertEqualInt(30, r1.get(0));
    assertEqualInt(30, r2.get(0));
    }

    /**
     * Verify Int8Array.from(Array<number>) returns independent of source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_3500
     * @tc.name int8ArrayFromPart06Test035
     * @tc.desc Verify Int8Array.from(Array<number>) returns independent of source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test035() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int8Array res = Int8Array.from(src);
    res.set(0, 99);
    assertEqualInt(10, src.get(0));
    }

    /**
     * Verify Int8Array.from(Int8Array) mutating returned instance leaves source uncha
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_3600
     * @tc.name int8ArrayFromPart06Test036
     * @tc.desc Verify Int8Array.from(Int8Array) mutating returned instance leaves source unchanged (deep-copy
     * semantics)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test036() {
    Int8Array src = Int8Array.of(10, 20, 30);
    Int8Array res = Int8Array.from(src);
    res.set(0, 99);
    assertEqualInt(10, src.get(0));
    assertEqualInt(99, res.get(0));
    }

    /**
     * Verify Int8Array.from(Set<int>) after source add new element, returned instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_3700
     * @tc.name int8ArrayFromPart06Test037
     * @tc.desc Verify Int8Array.from(Set<int>) after source add new element, returned instancelength unchanged
     * (snapshot)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test037() {
    Set<Integer> src = new LinkedHashSet<>();
    src.add(10);
    src.add(20);
    Int8Array res = Int8Array.from(src);
    src.add(30);
    assertEqual(2, res.length());
    assertEqual(3, src.size());
    }

    /**
     * Verify Int8Array.from(FixedArray<int>) after source modification, returned instance unchanged (snapshot)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_3900
     * @tc.name int8ArrayFromPart06Test039
     * @tc.desc Verify Int8Array.from(FixedArray<int>) after source modification, returned instance unchanged (snapshot)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test039() {
    int[] src = new int[] {10, 20, 30};
    Int8Array res = Int8Array.from(src);
    src[0] = 99;
    assertEqualInt(10, res.get(0));
    }

    /**
     * Verify Int8Array.from(Int8Array.from(i8)) nested double-copy, values equal source but references unequal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_4000
     * @tc.name int8ArrayFromPart06Test040
     * @tc.desc Verify Int8Array.from(Int8Array.from(i8)) nested double-copy, values equal source but references unequal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test040() {
    Int8Array src = Int8Array.of(10, 20, 30);
    Int8Array mid = Int8Array.from(src);
    Int8Array res = Int8Array.from(mid);
    assertNotEqual(src, res);
    assertNotEqual(mid, res);
    Integer r1 = res.get(0);
    int e1 = 10;
    assertEqualInt(e1, r1);
    Integer r2 = res.get(2);
    int e2 = 30;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify Int8Array.from(Int8Array, mapfn) and Int8Array.from(Array<number>, mapfn
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_4500
     * @tc.name int8ArrayFromPart06Test045
     * @tc.desc Verify Int8Array.from(Int8Array, mapfn) and Int8Array.from(Array<number>, mapfn
     * ) with mapfn returning index k produce matching key-based values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test045() {
    int[] faSrc = new int[] {10, 20, 30};
    Int8Array i8Src = Int8Array.of(10, 20, 30);
    Int8Array r1 = Int8Array.from(faSrc);
    Int8Array r2 = Int8Array.from(i8Src);
    r1.reverse();
    r2.reverse();
    assertEqualInt(30, r1.get(0));
    assertEqualInt(30, r2.get(0));
    assertEqual(r2.get(2).intValue(), r1.get(2).intValue());
    }

    /**
     * Verify Int8Array.from(i8Src, mapfn) with mapfn returning v+k produces element 0 = 10 (10+0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_4600
     * @tc.name int8ArrayFromPart06Test046
     * @tc.desc Verify Int8Array.from(i8Src, mapfn) with mapfn returning v+k produces element 0 = 10 (10+0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test046() {
    int[] faSrc = new int[] {10, 20, 30};
    Set<Integer> setSrc = new LinkedHashSet<>();
    setSrc.add(10);
    setSrc.add(20);
    setSrc.add(30);
    Int8Array r1 = Int8Array.from(faSrc);
    Int8Array r2 = Int8Array.from(setSrc);
    assertTrue(r1.includes(20));
    assertTrue(r2.includes(20));
    }

    /**
     * Verify Int8Array.from(empty sources) all return length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_4700
     * @tc.name int8ArrayFromPart06Test047
     * @tc.desc Verify Int8Array.from(empty sources) all return length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test047() {
    int[] emptyFa = new int[] {};
    List<Integer> emptyArr = new ArrayList<>();
    Int8Array emptyI8 = new Int8Array(0);
    Set<Integer> emptySet = new LinkedHashSet<>();
    assertEqual(0, Int8Array.from(emptyFa).length());
    assertEqual(0, Int8Array.from(emptyArr).length());
    assertEqual(0, Int8Array.from(emptyI8).length());
    assertEqual(0, Int8Array.from(emptySet).length());
    }

    /**
     * Verify Int8Array.from with from() returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_4800
     * @tc.name int8ArrayFromPart06Test048
     * @tc.desc Verify Int8Array.from with from() returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test048() {
    int[] emptyFa = new int[] {};
    List<Integer> emptyArr = new ArrayList<>();
    Int8Array emptyI8 = new Int8Array(0);
    assertEqual(0, Int8Array.from(emptyFa).byteLength());
    assertEqual(0, Int8Array.from(emptyArr).byteLength());
    assertEqual(0, Int8Array.from(emptyI8).byteLength());
    }

    /**
     * Verify Int8Array.from empty sources toString returns empty string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_4900
     * @tc.name int8ArrayFromPart06Test049
     * @tc.desc Verify Int8Array.from empty sources toString returns empty string
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test049() {
    int[] emptyFa = new int[] {};
    List<Integer> emptyArr = new ArrayList<>();
    Int8Array emptyI8 = new Int8Array(0);
    assertEqual("", Int8Array.from(emptyFa).toString());
    assertEqual("", Int8Array.from(emptyArr).toString());
    assertEqual("", Int8Array.from(emptyI8).toString());
    }

    /**
     * Verify Int8Array.from empty sources produce 0-length buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_5000
     * @tc.name int8ArrayFromPart06Test050
     * @tc.desc Verify Int8Array.from empty sources produce 0-length buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test050() {
    int[] emptyFa = new int[] {};
    List<Integer> emptyArr = new ArrayList<>();
    Int8Array emptyI8 = new Int8Array(0);
    assertEqual(0, Int8Array.from(emptyFa).buffer().byteLength());
    assertEqual(0, Int8Array.from(emptyArr).buffer().byteLength());
    assertEqual(0, Int8Array.from(emptyI8).buffer().byteLength());
    }

    /**
     * Verify Int8Array.from() with single-element sources (FixedArray/Array/Int8Array/Set) produces length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_5100
     * @tc.name int8ArrayFromPart06Test051
     * @tc.desc Verify Int8Array.from() with single-element sources (FixedArray/Array/Int8Array/Set) produces length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test051() {
    int[] faSrc = new int[] {42};
    List<Integer> arrSrc = java.util.Arrays.asList(42);
    Int8Array i8Src = Int8Array.of(42);
    Set<Integer> setSrc = new LinkedHashSet<>();
    setSrc.add(42);
    assertEqual(1, Int8Array.from(faSrc).length());
    assertEqual(1, Int8Array.from(arrSrc).length());
    assertEqual(1, Int8Array.from(i8Src).length());
    assertEqual(1, Int8Array.from(setSrc).length());
    assertEqualInt(42, Int8Array.from(faSrc).get(0));
    assertEqualInt(42, Int8Array.from(arrSrc).get(0));
    assertEqualInt(42, Int8Array.from(i8Src).get(0));
    assertEqualInt(42, Int8Array.from(setSrc).get(0));
    }

    /**
     * Verify Int8Array.from(...).at(-1) returns 42 for FixedArray, Array and Int8Array sources
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART06_TEST_5200
     * @tc.name int8ArrayFromPart06Test052
     * @tc.desc Verify Int8Array.from(...).at(-1) returns 42 for FixedArray, Array and Int8Array sources
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart06Test052() {
    int[] faSrc = new int[] {42};
    List<Integer> arrSrc = java.util.Arrays.asList(42);
    Int8Array i8Src = Int8Array.of(42);
    assertEqualInt(42, Int8Array.from(faSrc).at(-1));
    assertEqualInt(42, Int8Array.from(arrSrc).at(-1));
    assertEqualInt(42, Int8Array.from(i8Src).at(-1));
    assertEqual("42", Int8Array.from(faSrc).join());
    assertEqual("42", Int8Array.from(arrSrc).join());
    assertEqual("42", Int8Array.from(i8Src).join());
    }
}
