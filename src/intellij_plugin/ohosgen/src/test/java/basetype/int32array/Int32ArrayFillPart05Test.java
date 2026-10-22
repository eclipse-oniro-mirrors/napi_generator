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

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFillPart05Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFillPart05Test extends BasTest {
    /**
     * Verify single-arg fill covers all elements on copy-constructed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_0100
     * @tc.name int32ArrayFillPart05TestMindmapTest001
     * @tc.desc Verify single-arg fill covers all elements on copy-constructed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest001() {
    Int32Array src = Int32Array.of(11, 22, 33, 44);
    Int32Array arr = new Int32Array(src);
    arr.fill(77);
    assertEqualInt(77, arr.get(0));
    assertEqualInt(77, arr.get(1));
    assertEqualInt(77, arr.get(2));
    assertEqualInt(77, arr.get(3));
    }

    /**
     * Verify fill on copy-constructed array does not affect source buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_0200
     * @tc.name int32ArrayFillPart05TestMindmapTest002
     * @tc.desc Verify fill on copy-constructed array does not affect source buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest002() {
    Int32Array src = Int32Array.of(1, 2, 3);
    Int32Array arr = new Int32Array(src);
    arr.fill(99);
    assertEqualInt(1, src.get(0));
    assertEqualInt(2, src.get(1));
    assertEqualInt(3, src.get(2));
    }

    /**
     * Verify fill works on view over ArrayBuffer with non-4-multiple byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_0600
     * @tc.name int32ArrayFillPart05TestMindmapTest006
     * @tc.desc Verify fill works on view over ArrayBuffer with non-4-multiple byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest006() {
    ArrayBuffer buf = new ArrayBuffer(9);
    Int32Array view = new Int32Array(buf, 0, 2);
    view.fill(33);
    assertEqualInt(33, view.get(0));
    assertEqualInt(33, view.get(1));
    }

    /**
     * Verify value=1.0 float literal integer fills as 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_1300
     * @tc.name int32ArrayFillPart05TestMindmapTest013
     * @tc.desc Verify value=1.0 float literal integer fills as 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest013() {
    Int32Array arr = new Int32Array(3);
    arr.fill(1.0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(2));
    }

    /**
     * Verify value=Number.EPSILON truncates to 0 on fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_1400
     * @tc.name int32ArrayFillPart05TestMindmapTest014
     * @tc.desc Verify value=Number.EPSILON truncates to 0 on fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest014() {
    Int32Array arr = new Int32Array(2);
    arr.fill(2.220446049250313E-16);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify value=4294967297.0 wraps to 1 on copy-constructed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_1800
     * @tc.name int32ArrayFillPart05TestMindmapTest018
     * @tc.desc Verify value=4294967297.0 wraps to 1 on copy-constructed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest018() {
    Int32Array orig = new Int32Array(2);
    Int32Array arr = new Int32Array(orig);
    arr.fill(4294967297.0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(1));
    assertEqualInt(0, orig.get(0));
    }

    /**
     * Verify fill(0, 0, length-1) on copy-constructed array excludes last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_2600
     * @tc.name int32ArrayFillPart05TestMindmapTest026
     * @tc.desc Verify fill(0, 0, length-1) on copy-constructed array excludes last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest026() {
    Int32Array src = Int32Array.of(1, 2, 3, 4);
    Int32Array arr = new Int32Array(src);
    arr.fill(0, 0, 3);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify single-arg fill return value is strictly identical to original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_4500
     * @tc.name int32ArrayFillPart05TestMindmapTest045
     * @tc.desc Verify single-arg fill return value is strictly identical to original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest045() {
    Int32Array arr = new Int32Array(3);
    Int32Array ret = arr.fill(42);
    assertEqual(arr, ret);
    }

    /**
     * Verify three-arg fill return value is identical this reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_4600
     * @tc.name int32ArrayFillPart05TestMindmapTest046
     * @tc.desc Verify three-arg fill return value is identical this reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest046() {
    Int32Array arr = new Int32Array(4);
    Int32Array ret = arr.fill(7, 1, 3);
    assertEqual(arr, ret);
    }

    /**
     * Verify fill().fill() chained call overlays two ranges correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_4700
     * @tc.name int32ArrayFillPart05TestMindmapTest047
     * @tc.desc Verify fill().fill() chained call overlays two ranges correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest047() {
    Int32Array arr = new Int32Array(5);
    arr.fill(1).fill(2, 3, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    assertEqualInt(2, arr.get(4));
    }

    /**
     * Verify fill().reverse() chain fills with 9 then reverse keeps all 9 and same this
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_4800
     * @tc.name int32ArrayFillPart05TestMindmapTest048
     * @tc.desc Verify fill().reverse() chain fills with 9 then reverse keeps all 9 and same this
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest048() {
    Int32Array arr = Int32Array.of(5, 5, 5);
    Int32Array ret = arr.fill(9).reverse();
    assertEqual(arr, ret);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(9, arr.get(2));
    }

    /**
     * Verify fill().$_set() chain modifies single element after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_4900
     * @tc.name int32ArrayFillPart05TestMindmapTest049
     * @tc.desc Verify fill().$_set() chain modifies single element after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest049() {
    Int32Array arr = new Int32Array(4);
    arr.fill(11).set(2, 99);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(99, arr.get(2));
    assertEqualInt(11, arr.get(3));
    }

    /**
     * Verify fill returns the same reference as this (assertEqual arr)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_5000
     * @tc.name int32ArrayFillPart05TestMindmapTest050
     * @tc.desc Verify fill returns the same reference as this (assertEqual arr)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest050() {
    Int32Array arr = new Int32Array(2);
    Int32Array ret = arr.fill(0);
    assertEqual(arr, ret);
    }

    /**
     * Verify fill().sort() chain returns same this after fill and sort
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_5100
     * @tc.name int32ArrayFillPart05TestMindmapTest051
     * @tc.desc Verify fill().sort() chain returns same this after fill and sort
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest051() {
    Int32Array arr = Int32Array.of(3, 1, 2);
    Int32Array ret = arr.fill(5).sort();
    assertEqual(arr, ret);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify length unchanged after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_5200
     * @tc.name int32ArrayFillPart05TestMindmapTest052
     * @tc.desc Verify length unchanged after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest052() {
    Int32Array arr = new Int32Array(7);
    arr.fill(0);
    assertEqual(7, arr.length());
    }

    /**
     * Verify byteLength remains 4*length after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_5300
     * @tc.name int32ArrayFillPart05TestMindmapTest053
     * @tc.desc Verify byteLength remains 4*length after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest053() {
    Int32Array arr = new Int32Array(5);
    int before = arr.byteLength();
    arr.fill(1);
    assertEqual(before, arr.byteLength());
    assertEqual(20, before);
    }

    /**
     * Verify byteOffset preserved on non-zero offset view after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_5400
     * @tc.name int32ArrayFillPart05TestMindmapTest054
     * @tc.desc Verify byteOffset preserved on non-zero offset view after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest054() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Int32Array view = new Int32Array(buf, 12, 3);
    int off = view.byteOffset();
    view.fill(5);
    assertEqual(off, view.byteOffset());
    assertEqual(12, off);
    }

    /**
     * Verify BYTES_PER_ELEMENT remains 4 after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_5500
     * @tc.name int32ArrayFillPart05TestMindmapTest055
     * @tc.desc Verify BYTES_PER_ELEMENT remains 4 after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest055() {
    Int32Array arr = new Int32Array(10);
    arr.fill(0);
    assertEqual(4, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify buffer reference remains same ArrayBuffer after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_5600
     * @tc.name int32ArrayFillPart05TestMindmapTest056
     * @tc.desc Verify buffer reference remains same ArrayBuffer after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest056() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf);
    view.fill(1);
    assertEqual(buf, view.buffer());
    }

    /**
     * Verify copy-constructed array has independent buffer from source after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_5700
     * @tc.name int32ArrayFillPart05TestMindmapTest057
     * @tc.desc Verify copy-constructed array has independent buffer from source after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest057() {
    Int32Array src = new Int32Array(4);
    Int32Array arr = new Int32Array(src);
    arr.fill(0);
    src.set(0, 77);
    assertEqualInt(0, arr.get(0));
    assertEqual(src.length(), arr.length());
    }

    /**
     * Verify full fill INT_MAX then full fill 0 overwrites all elements to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_5800
     * @tc.name int32ArrayFillPart05TestMindmapTest058
     * @tc.desc Verify full fill INT_MAX then full fill 0 overwrites all elements to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest058() {
    Int32Array arr = new Int32Array(4);
    arr.fill(2147483647);
    arr.fill(0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify fill [0, 2) then [2, 4) adjacent ranges concatenate two values without overlap
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_6000
     * @tc.name int32ArrayFillPart05TestMindmapTest060
     * @tc.desc Verify fill [0, 2) then [2, 4) adjacent ranges concatenate two values without overlap
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest060() {
    Int32Array arr = new Int32Array(4);
    arr.fill(10, 0, 2);
    arr.fill(20, 2, 4);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(20, arr.get(2));
    assertEqualInt(20, arr.get(3));
    }

    /**
     * Verify fill adjacent ranges then [1, 3) overlay covers seam with new value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_6100
     * @tc.name int32ArrayFillPart05TestMindmapTest061
     * @tc.desc Verify fill adjacent ranges then [1, 3) overlay covers seam with new value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest061() {
    Int32Array arr = new Int32Array(4);
    arr.fill(1, 0, 2);
    arr.fill(2, 2, 4);
    arr.fill(9, 1, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(9, arr.get(1));
    assertEqualInt(9, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify fill same value twice is idempotent second fill does not change elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_6200
     * @tc.name int32ArrayFillPart05TestMindmapTest062
     * @tc.desc Verify fill same value twice is idempotent second fill does not change elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest062() {
    Int32Array arr = new Int32Array(3);
    arr.fill(42);
    arr.fill(42);
    assertEqualInt(42, arr.get(0));
    assertEqualInt(42, arr.get(1));
    assertEqualInt(42, arr.get(2));
    }

    /**
     * Verify for-of iteration after full fill sees fill value for every element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_6400
     * @tc.name int32ArrayFillPart05TestMindmapTest064
     * @tc.desc Verify for-of iteration after full fill sees fill value for every element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest064() {
    Int32Array arr = new Int32Array(4);
    arr.fill(7);
    int count = 0;
    for (Integer v : arr.values()) {
    assertEqualInt(7, v);
    count++;
    }
    assertEqual(4, count);
    }

    /**
     * Verify for-of break early termination after fill does not corrupt filled values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_6500
     * @tc.name int32ArrayFillPart05TestMindmapTest065
     * @tc.desc Verify for-of break early termination after fill does not corrupt filled values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest065() {
    Int32Array arr = new Int32Array(5);
    arr.fill(3);
    int sum = 0;
    for (int i = 0; i < arr.length(); i++) {
    sum = sum + arr.get(i);
    if (sum >= 9) {
    break;
    }
    }
    assertEqualInt(3, arr.get(0));
    assertEqualInt(3, arr.get(4));
    }

    /**
     * Verify join string reflects partial fill with correct separators
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_6600
     * @tc.name int32ArrayFillPart05TestMindmapTest066
     * @tc.desc Verify join string reflects partial fill with correct separators
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest066() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    arr.fill(0, 1, 3);
    String s = arr.join(",");
    assertEqual("1,0,0,4", s);
    }

    /**
     * Verify $_get reads filled values correctly via index accessor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_6800
     * @tc.name int32ArrayFillPart05TestMindmapTest068
     * @tc.desc Verify $_get reads filled values correctly via index accessor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest068() {
    Int32Array arr = new Int32Array(3);
    arr.fill(42);
    assertEqualInt(42, arr.get(0));
    assertEqualInt(42, arr.get(2));
    }

    /**
     * Verify keys iterator length remains correct after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_6900
     * @tc.name int32ArrayFillPart05TestMindmapTest069
     * @tc.desc Verify keys iterator length remains correct after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest069() {
    Int32Array arr = new Int32Array(4);
    arr.fill(0);
    int count = 0;
    for (Integer k : arr.keys()) {
    count++;
    }
    assertEqual(4, count);
    }

    /**
     * Verify fill writes through to same-buffer sibling view only in overlapping bytes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_7000
     * @tc.name int32ArrayFillPart05TestMindmapTest070
     * @tc.desc Verify fill writes through to same-buffer sibling view only in overlapping bytes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest070() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array valFirst = new Int32Array(buf, 0, 2);
    Int32Array valSecond = new Int32Array(buf, 8, 2);
    valFirst.fill(100);
    assertEqualInt(100, valFirst.get(0));
    assertEqualInt(100, valFirst.get(1));
    assertEqualInt(0, valSecond.get(0));
    assertEqualInt(0, valSecond.get(1));
    }

    /**
     * Verify three views on same buffer filling middle view leaves sides untouched
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_7100
     * @tc.name int32ArrayFillPart05TestMindmapTest071
     * @tc.desc Verify three views on same buffer filling middle view leaves sides untouched
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest071() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array a = new Int32Array(buf, 0, 2);
    Int32Array b = new Int32Array(buf, 8, 2);
    Int32Array c = new Int32Array(buf, 16, 2);
    b.fill(55);
    assertEqualInt(0, a.get(0));
    assertEqualInt(55, b.get(0));
    assertEqualInt(55, b.get(1));
    assertEqualInt(0, c.get(0));
    }

    /**
     * Verify fill on subarray of subarray writes through to original base at correct positions
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_7200
     * @tc.name int32ArrayFillPart05TestMindmapTest072
     * @tc.desc Verify fill on subarray of subarray writes through to original base at correct positions
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest072() {
    Int32Array base = new Int32Array(8);
    Int32Array s1 = base.subarray(2, 6);
    Int32Array s2 = s1.subarray(1, 3);
    s2.fill(77);
    assertEqualInt(77, s2.get(0));
    assertEqualInt(77, s2.get(1));
    assertEqualInt(77, s1.get(1));
    assertEqualInt(77, s1.get(2));
    assertEqualInt(77, base.get(3));
    assertEqualInt(77, base.get(4));
    assertEqualInt(0, base.get(2));
    assertEqualInt(0, base.get(5));
    }

    /**
     * Verify subarray(0) full-view fill is equivalent to filling original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_7300
     * @tc.name int32ArrayFillPart05TestMindmapTest073
     * @tc.desc Verify subarray(0) full-view fill is equivalent to filling original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest073() {
    Int32Array base = Int32Array.of(1, 2, 3, 4);
    Int32Array full = base.subarray(0);
    full.fill(0);
    assertEqualInt(0, base.get(0));
    assertEqualInt(0, base.get(3));
    }

    /**
     * Verify fill on negative-begin subarray writes through to parent tail
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_7400
     * @tc.name int32ArrayFillPart05TestMindmapTest074
     * @tc.desc Verify fill on negative-begin subarray writes through to parent tail
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest074() {
    Int32Array base = Int32Array.of(1, 2, 3, 4, 5);
    Int32Array tail = base.subarray((-2));
    tail.fill(88);
    assertEqual(2, tail.length());
    assertEqualInt(1, base.get(0));
    assertEqualInt(3, base.get(2));
    assertEqualInt(88, base.get(3));
    assertEqualInt(88, base.get(4));
    }

    /**
     * Verify fill on zero-length subarray writes no bytes and leaves parent unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_7500
     * @tc.name int32ArrayFillPart05TestMindmapTest075
     * @tc.desc Verify fill on zero-length subarray writes no bytes and leaves parent unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest075() {
    Int32Array base = Int32Array.of(1, 2, 3);
    Int32Array empty = base.subarray(2, 2);
    empty.fill(99);
    assertEqualInt(1, base.get(0));
    assertEqualInt(2, base.get(1));
    assertEqualInt(3, base.get(2));
    assertEqual(0, empty.length());
    }

    /**
     * Verify fill on empty array returns itself with length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_8000
     * @tc.name int32ArrayFillPart05TestMindmapTest080
     * @tc.desc Verify fill on empty array returns itself with length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest080() {
    Int32Array arr = new Int32Array(0);
    Int32Array r1 = arr.fill(1);
    assertEqual(0, r1.length());
    assertEqual(arr, r1);
    }

    /**
     * Verify three-arg fill on empty array still returns empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_8100
     * @tc.name int32ArrayFillPart05TestMindmapTest081
     * @tc.desc Verify three-arg fill on empty array still returns empty
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest081() {
    Int32Array arr = new Int32Array(0);
    Int32Array r2 = arr.fill(1, 0, 10);
    assertEqual(0, r2.length());
    }

    /**
     * Verify fill with negative indices on empty array remains length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_8200
     * @tc.name int32ArrayFillPart05TestMindmapTest082
     * @tc.desc Verify fill with negative indices on empty array remains length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest082() {
    Int32Array arr = new Int32Array(0);
    arr.fill(99, (-1), (-1));
    assertEqual(0, arr.length());
    }

    /**
     * Verify Number.NaN as fill value converts to 0 via ToInt32
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_8300
     * @tc.name int32ArrayFillPart05TestMindmapTest083
     * @tc.desc Verify Number.NaN as fill value converts to 0 via ToInt32
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest083() {
    Int32Array arr = new Int32Array(3);
    arr.fill(Double.NaN);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify Number.NaN as fill value converts to 0 on non-zero offset view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_8400
     * @tc.name int32ArrayFillPart05TestMindmapTest084
     * @tc.desc Verify Number.NaN as fill value converts to 0 on non-zero offset view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest084() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 4, 2);
    view.fill(Double.NaN);
    assertEqualInt(0, view.get(0));
    assertEqualInt(0, view.get(1));
    }

    /**
     * Verify $_set single element then fill range overwrites that element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_8500
     * @tc.name int32ArrayFillPart05TestMindmapTest085
     * @tc.desc Verify $_set single element then fill range overwrites that element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest085() {
    Int32Array arr = new Int32Array(4);
    arr.set(1, 111);
    arr.fill(0, 0, 3);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify set(array, offset) after fill then full fill overwrites all
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_8600
     * @tc.name int32ArrayFillPart05TestMindmapTest086
     * @tc.desc Verify set(array, offset) after fill then full fill overwrites all
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest086() {
    Int32Array arr = new Int32Array(6);
    Int32Array src = Int32Array.of(1, 2);
    arr.fill(9, 0, 4);
    arr.set(src, 2);
    assertEqualInt(9, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    assertEqualInt(0, arr.get(4));
    arr.fill(0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(5));
    }

    /**
     * Verify copyWithin after fill preserves fill value at copied positions
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_8700
     * @tc.name int32ArrayFillPart05TestMindmapTest087
     * @tc.desc Verify copyWithin after fill preserves fill value at copied positions
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest087() {
    Int32Array arr = new Int32Array(5);
    arr.fill(0);
    arr.set(0, 7);
    arr.set(4, 8);
    arr.copyWithin(2, 0, 2);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(0, arr.get(3));
    assertEqualInt(8, arr.get(4));
    }

    /**
     * Verify reduce sum after fill correctly reflects filled values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_8800
     * @tc.name int32ArrayFillPart05TestMindmapTest088
     * @tc.desc Verify reduce sum after fill correctly reflects filled values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest088() {
    Int32Array arr = new Int32Array(4);
    arr.fill(3);
    int sum = arr.reduce((acc, v, unusedIndex, array) -> acc + v, 0);
    assertEqual(12, sum);
    }

    /**
     * Verify every returns true when all elements equal fill value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_8900
     * @tc.name int32ArrayFillPart05TestMindmapTest089
     * @tc.desc Verify every returns true when all elements equal fill value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart05TestMindmapTest089() {
    Int32Array arr = new Int32Array(5);
    arr.fill(42);
    boolean allEq = arr.every((v, unusedIndex, array) -> {
        return v == 42;
        });
    assertTrue(allEq);
    }

    /**
     * Verify some detects both new and old values after partial fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART05_TEST_MINDMAP_9000
     * @tc.name int32ArrayFillPart05TestMindmapTest090
     * @tc.desc Verify some detects both new and old values after partial fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
