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
import basetype.common.Error;

import java.util.ArrayList;
import java.util.List;
import java.util.LinkedHashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFromPart07Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFromPart07Test extends BasTest {
    /**
     * Verify FixedArray [] Set<int> length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_0100
     * @tc.name int32ArrayFromPart07TestMindmapTest001
     * @tc.desc Verify FixedArray [] Set<int> length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest001() {
    Int32Array a1 = Int32Array.from(new int[] {});
    Set<Integer> s = new LinkedHashSet<>();
    Int32Array a2 = Int32Array.from(s);
    assertEqual(0, a1.length());
    assertEqual(0, a2.length());
    }

    /**
     * Verify Array<number> Int32Array byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_0200
     * @tc.name int32ArrayFromPart07TestMindmapTest002
     * @tc.desc Verify Array<number> Int32Array byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest002() {
    List<Integer> arr = new ArrayList<>();
    Int32Array a1 = Int32Array.from(arr);
    Int32Array src = new Int32Array(0);
    Int32Array a2 = Int32Array.from(src);
    assertEqual(0, a1.byteLength());
    assertEqual(0, a2.byteLength());
    }

    /**
     * Verify [1, 2] FixedArray new Set(new int[] {1, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_0300
     * @tc.name int32ArrayFromPart07TestMindmapTest003
     * @tc.desc Verify [1, 2] FixedArray new Set(new int[] {1, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest003() {
    Int32Array a1 = Int32Array.from(new int[] {1, 2});
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    Int32Array a2 = Int32Array.from(s);
    assertEqual(a1.get(0).intValue(), a2.get(0).intValue());
    assertEqual(a1.get(1).intValue(), a2.get(1).intValue());
    }

    /**
     * Verify FixedArray<int> [1, 2, 3] Array<number> [1, 2, 3] length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_0400
     * @tc.name int32ArrayFromPart07TestMindmapTest004
     * @tc.desc Verify FixedArray<int> [1, 2, 3] Array<number> [1, 2, 3] length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest004() {
    Int32Array a1 = Int32Array.from(new int[] {1, 2, 3});
    List<Integer> arr = java.util.Arrays.asList(1, 2, 3);
    Int32Array a2 = Int32Array.from(arr);
    assertEqual(a2.length(), a1.length());
    assertEqual(a2.get(2).intValue(), a1.get(2).intValue());
    }

    /**
     * Verify Int32Array from FixedArray byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_0500
     * @tc.name int32ArrayFromPart07TestMindmapTest005
     * @tc.desc Verify Int32Array from FixedArray byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest005() {
    Int32Array src = new Int32Array(new int[] {7, 8, 9});
    Int32Array a1 = Int32Array.from(src);
    Int32Array a2 = Int32Array.from(new int[] {7, 8, 9});
    assertEqual(a2.byteLength(), a1.byteLength());
    }

    /**
     * Verify Set FixedArray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_0600
     * @tc.name int32ArrayFromPart07TestMindmapTest006
     * @tc.desc Verify Set FixedArray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest006() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(100);
    s.add(-200);
    s.add(300);
    Int32Array aSet = Int32Array.from(s);
    Int32Array aFix = Int32Array.from(new int[] {100, -200, 300});
    assertEqual(aFix.get(0).intValue(), aSet.get(0).intValue());
    assertEqual(aFix.get(1).intValue(), aSet.get(1).intValue());
    assertEqual(aFix.get(2).intValue(), aSet.get(2).intValue());
    }

    /**
     * Verify Iterable [4, 5, 6] FixedArray [4, 5, 6]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_0700
     * @tc.name int32ArrayFromPart07TestMindmapTest007
     * @tc.desc Verify Iterable [4, 5, 6] FixedArray [4, 5, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest007() {
    List<Integer> g = java.util.Arrays.asList(4, 5, 6);
    Int32Array a1 = Int32Array.from(g);
    Int32Array a2 = Int32Array.from(new int[] {4, 5, 6});
    assertEqual(a2.length(), a1.length());
    assertEqual(a2.get(1).intValue(), a1.get(1).intValue());
    }

    /**
     * Verify ArrayLike length=3 Array<number> [0, 0, 0] length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_0800
     * @tc.name int32ArrayFromPart07TestMindmapTest008
     * @tc.desc Verify ArrayLike length=3 Array<number> [0, 0, 0] length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest008() {
    List<Integer> al = java.util.Arrays.asList(0, 0, 0);
    Int32Array a1 = Int32Array.from(al);
    List<Integer> arr = java.util.Arrays.asList(0, 0, 0);
    Int32Array a2 = Int32Array.from(arr);
    assertEqual(a2.length(), a1.length());
    }

    /**
     * Verify from(Int32Array) from(FixedArray) constructor Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_0900
     * @tc.name int32ArrayFromPart07TestMindmapTest009
     * @tc.desc Verify from(Int32Array) from(FixedArray) constructor Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest009() {
    Int32Array a1 = Int32Array.from(new Int32Array(new int[] {1}));
    Int32Array a2 = Int32Array.from(new int[] {1});
    assertEqualInt(1, a1.get(0));
    assertEqualInt(1, a2.get(0));
    assertEqual(a2.BYTES_PER_ELEMENT, a1.BYTES_PER_ELEMENT);
    }

    /**
     * Verify [1, 2] FixedArray Array Set length 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_1000
     * @tc.name int32ArrayFromPart07TestMindmapTest010
     * @tc.desc Verify [1, 2] FixedArray Array Set length 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest010() {
    List<Integer> arr = java.util.Arrays.asList(1, 2);
    Int32Array aArr = Int32Array.from(arr);
    Int32Array aFix = Int32Array.from(new int[] {1, 2});
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    Int32Array aSet = Int32Array.from(s);
    assertEqual(2, aArr.length());
    assertEqual(2, aFix.length());
    assertEqual(2, aSet.length());
    }

    /**
     * Verify FixedArray Array Set Int32Array byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_1100
     * @tc.name int32ArrayFromPart07TestMindmapTest011
     * @tc.desc Verify FixedArray Array Set Int32Array byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest011() {
    Int32Array a1 = Int32Array.from(new int[] {});
    Int32Array a2 = Int32Array.from(new ArrayList<>());
    Int32Array a3 = Int32Array.from(new LinkedHashSet<>());
    Int32Array a4 = Int32Array.from(new Int32Array(0));
    assertEqual(0, a1.byteOffset());
    assertEqual(0, a2.byteOffset());
    assertEqual(0, a3.byteOffset());
    assertEqual(0, a4.byteOffset());
    }

    /**
     * Verify FixedArray/Array/Set/Int32Array BYTES_PER_ELEMENT 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_1200
     * @tc.name int32ArrayFromPart07TestMindmapTest012
     * @tc.desc Verify FixedArray/Array/Set/Int32Array BYTES_PER_ELEMENT 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest012() {
    List<Integer> arr = java.util.Arrays.asList(1);
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    assertEqual(4, Int32Array.from(new int[] {1}).BYTES_PER_ELEMENT);
    assertEqual(4, Int32Array.from(arr).BYTES_PER_ELEMENT);
    assertEqual(4, Int32Array.from(s).BYTES_PER_ELEMENT);
    assertEqual(4, Int32Array.from(new Int32Array(new int[] {1})).BYTES_PER_ELEMENT);
    }

    /**
     * Verify byteLength 12 3*4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_1300
     * @tc.name int32ArrayFromPart07TestMindmapTest013
     * @tc.desc Verify byteLength 12 3*4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest013() {
    List<Integer> arr = java.util.Arrays.asList(1, 2, 3);
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    s.add(3);
    assertEqual(12, Int32Array.from(new int[] {1, 2, 3}).byteLength());
    assertEqual(12, Int32Array.from(arr).byteLength());
    assertEqual(12, Int32Array.from(s).byteLength());
    assertEqual(12, Int32Array.from(new Int32Array(new int[] {1, 2, 3})).byteLength());
    }

    /**
     * Verify FixedArray Array<number> buffer null byteLength=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_1500
     * @tc.name int32ArrayFromPart07TestMindmapTest015
     * @tc.desc Verify FixedArray Array<number> buffer null byteLength=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest015() {
    Int32Array a1 = Int32Array.from(new int[] {});
    Int32Array a2 = Int32Array.from(new ArrayList<>());
    assertEqual(0, a1.buffer().byteLength());
    assertEqual(0, a2.buffer().byteLength());
    }

    /**
     * Verify Set buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_1600
     * @tc.name int32ArrayFromPart07TestMindmapTest016
     * @tc.desc Verify Set buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest016() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(10);
    Int32Array a = Int32Array.from(s);
    assertEqual(4, a.buffer().byteLength());
    assertEqual(1, a.length());
    assertEqualInt(10, a.get(0));
    }

    /**
     * Verify [5] toString "5"
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_1700
     * @tc.name int32ArrayFromPart07TestMindmapTest017
     * @tc.desc Verify [5] toString "5"
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest017() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(5);
    List<Integer> arr = java.util.Arrays.asList(5);
    assertEqual("5", Int32Array.from(new int[] {5}).toString());
    assertEqual("5", Int32Array.from(arr).toString());
    assertEqual("5", Int32Array.from(s).toString());
    assertEqual("5", Int32Array.from(new Int32Array(new int[] {5})).toString());
    }

    /**
     * Verify [1, 2] toString "1,2"
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_1800
     * @tc.name int32ArrayFromPart07TestMindmapTest018
     * @tc.desc Verify [1, 2] toString "1,2"
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest018() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    List<Integer> arr = java.util.Arrays.asList(1, 2);
    assertEqual("1,2", Int32Array.from(new int[] {1, 2}).toString());
    assertEqual("1,2", Int32Array.from(arr).toString());
    assertEqual("1,2", Int32Array.from(s).toString());
    }

    /**
     * Verify FixedArray Set toString
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_1900
     * @tc.name int32ArrayFromPart07TestMindmapTest019
     * @tc.desc Verify FixedArray Set toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest019() {
    Set<Integer> s = new LinkedHashSet<>();
    assertEqual("", Int32Array.from(new int[] {}).toString());
    assertEqual("", Int32Array.from(s).toString());
    }

    /**
     * Verify values from FixedArray and Set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_2100
     * @tc.name int32ArrayFromPart07TestMindmapTest021
     * @tc.desc Verify values from FixedArray and Set
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest021() {
    Int32Array a1 = Int32Array.from(new int[] {1});
    assertEqual(1, a1.length());
    assertEqualInt(1, a1.get(0));
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    Int32Array a2 = Int32Array.from(s);
    assertEqual(1, a2.length());
    assertEqualInt(1, a2.get(0));
    }

    /**
     * Verify FixedArray mapfn x=>x*2 [2, 4, 6]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_2200
     * @tc.name int32ArrayFromPart07TestMindmapTest022
     * @tc.desc Verify FixedArray mapfn x=>x*2 [2, 4, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest022() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int32Array a1 = Int32Array.from(src, (v, index) -> v * 2);
    Int32Array a2 = Int32Array.from(new int[] {2, 4, 6});
    assertEqual(a2.get(0).intValue(), a1.get(0).intValue());
    assertEqual(a2.get(1).intValue(), a1.get(1).intValue());
    assertEqual(a2.get(2).intValue(), a1.get(2).intValue());
    }

    /**
     * Verify ArrayLike + mapfn FixedArray+mapfn
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_2300
     * @tc.name int32ArrayFromPart07TestMindmapTest023
     * @tc.desc Verify ArrayLike + mapfn FixedArray+mapfn
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest023() {
    List<Integer> al = java.util.Arrays.asList(10, 20);
    List<Integer> src23 = java.util.Arrays.asList(10, 20);
    Int32Array a1 = Int32Array.from(al, (v, index) -> v + 1);
    Int32Array a2 = Int32Array.from(src23, (v, index) -> v + 1);
    assertEqual(a2.length(), a1.length());
    assertEqual(a2.get(0).intValue(), a1.get(0).intValue());
    assertEqual(a2.get(1).intValue(), a1.get(1).intValue());
    }

    /**
     * Verify mapfn receives index k as second argument (Array)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_2500
     * @tc.name int32ArrayFromPart07TestMindmapTest025
     * @tc.desc Verify mapfn receives index k as second argument (Array)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest025() {
    List<Integer> idx = new ArrayList<>();
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Int32Array a = Int32Array.from(src, (v, k) -> {
        idx.add(k);
        return v;
    });
    assertEqual(3, idx.size());
    assertEqualInt(0, idx.get(0));
    assertEqualInt(1, idx.get(1));
    assertEqualInt(2, idx.get(2));
    }

    /**
     * Verify mapfn receives index k as second argument (Array)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_2600
     * @tc.name int32ArrayFromPart07TestMindmapTest026
     * @tc.desc Verify mapfn receives index k as second argument (Array)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest026() {
    List<Integer> al = java.util.Arrays.asList(7, 8, 9);
    List<Integer> idx = new ArrayList<>();
    Int32Array a = Int32Array.from(al, (v, k) -> {
        idx.add(k);
        return v;
    });
    assertEqual(3, idx.size());
    assertEqualInt(0, idx.get(0));
    assertEqualInt(1, idx.get(1));
    assertEqualInt(2, idx.get(2));
    }

    /**
     * Verify mapfn receives index k as second argument (Iterable)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_2700
     * @tc.name int32ArrayFromPart07TestMindmapTest027
     * @tc.desc Verify mapfn receives index k as second argument (Iterable)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest027() {
    List<Integer> t = java.util.Arrays.asList(100, 200, 300);
    List<Integer> idx = new ArrayList<>();
    Int32Array a = Int32Array.from(t, (v, k) -> {
        idx.add(k);
        return v;
    });
    assertEqual(3, idx.size());
    assertEqualInt(0, idx.get(0));
    assertEqualInt(1, idx.get(1));
    assertEqualInt(2, idx.get(2));
    }

    /**
     * Verify mapfn NaN ToInt32 0 Array Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_2800
     * @tc.name int32ArrayFromPart07TestMindmapTest028
     * @tc.desc Verify mapfn NaN ToInt32 0 Array Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest028() {
    List<Integer> al = java.util.Arrays.asList(99);
    List<Integer> src28 = java.util.Arrays.asList(99);
    Int32Array a1 = Int32Array.from(src28, (v, index) -> (int) (Double.NaN));
    Int32Array a2 = Int32Array.from(al, (v, index) -> (int) (Double.NaN));
    assertEqualInt(0, a1.get(0));
    assertEqualInt(0, a2.get(0));
    }

    /**
     * Verify mapfn 3.7 ToInt32 3 Array Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_3000
     * @tc.name int32ArrayFromPart07TestMindmapTest030
     * @tc.desc Verify mapfn 3.7 ToInt32 3 Array Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest030() {
    List<Integer> arr = java.util.Arrays.asList(1);
    List<Integer> src30 = java.util.Arrays.asList(1);
    Int32Array a1 = Int32Array.from(src30, (v, index) -> (int) (3.7));
    Int32Array a2 = Int32Array.from(arr, (v, index) -> (int) (3.7));
    assertEqualInt(3, a1.get(0));
    assertEqualInt(3, a2.get(0));
    }

    /**
     * Verify mapfn throw from Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_3200
     * @tc.name int32ArrayFromPart07TestMindmapTest032
     * @tc.desc Verify mapfn throw from Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest032() {
    Int32Array[] captured = {null};
    try {
    List<Integer> src = java.util.Arrays.asList(1, 2);
    Int32Array a = Int32Array.from(src, (v, index) -> {
    return BasTest.throwTestError("mapfn boom");
    });
    captured[0] = a;
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertNull(captured[0]);
    }

    /**
     * Verify mapfn 2 from
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_3300
     * @tc.name int32ArrayFromPart07TestMindmapTest033
     * @tc.desc Verify mapfn 2 from
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest033() {
    List<Integer> calls = new ArrayList<>();
    try {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Int32Array.from(src, (v, index) -> {
        calls.add(v);
        if (v == 2) {
    return BasTest.throwTestError("v=2");
    }
    return v;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("v=2", e.getMessage());
    }
    assertEqual(2, calls.size());
    assertEqualInt(2, calls.get(1));
    }

    /**
     * Verify mapfn throw from Array Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_3400
     * @tc.name int32ArrayFromPart07TestMindmapTest034
     * @tc.desc Verify mapfn throw from Array Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest034() {
    List<Integer> al = java.util.Arrays.asList(10, 20, 30);
    List<Integer> calls = new ArrayList<>();
    try {
    Int32Array.from(al, (v, index) -> {
        calls.add(v);
        if (v == 30) {
    return BasTest.throwTestError("last");
    }
    return v;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(3, calls.size());
    assertEqualInt(30, calls.get(2));
    }

    /**
     * Verify Iterable next() from
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_3500
     * @tc.name int32ArrayFromPart07TestMindmapTest035
     * @tc.desc Verify Iterable next() from
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest035() {
    try {
    List<Integer> src035 = java.util.Arrays.asList(1, 2, 3);
    Int32Array.from(src035, (v, index) -> {
    if (v == 2) {
    return BasTest.throwTestError("iter mid");
    }
    return v;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("iter mid", e.getMessage());
    }
    }

    /**
     * Verify Iterable + mapfn mapfn
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_3600
     * @tc.name int32ArrayFromPart07TestMindmapTest036
     * @tc.desc Verify Iterable + mapfn mapfn
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest036() {
    List<Integer> t = java.util.Arrays.asList(1, 2, 3);
    List<Integer> marker = new ArrayList<>();
    try {
    Int32Array.from(t, (v, index) -> {
        marker.add(v);
        if (v == 2) {
    return BasTest.throwTestError("v=2");
    }
    return v;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(2, marker.size());
    assertEqualInt(2, marker.get(1));
    }

    /**
     * Verify Set from length value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_3700
     * @tc.name int32ArrayFromPart07TestMindmapTest037
     * @tc.desc Verify Set from length value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest037() {
    Int32Array a = new Int32Array(0);
    Set<Integer> s = new LinkedHashSet<>();
    s.add(9);
    a = Int32Array.from(s);
    assertEqual(1, a.length());
    assertEqualInt(9, a.get(0));
    }

    /**
     * Verify values from FixedArray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_3800
     * @tc.name int32ArrayFromPart07TestMindmapTest038
     * @tc.desc Verify values from FixedArray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest038() {
    Int32Array good = new Int32Array(0);
    good = Int32Array.from(new int[] {11, 22, 33});
    assertEqual(3, good.length());
    assertEqualInt(11, good.get(0));
    assertEqualInt(33, good.get(2));
    }

    /**
     * Verify mapfn from try
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_3900
     * @tc.name int32ArrayFromPart07TestMindmapTest039
     * @tc.desc Verify mapfn from try
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest039() {
    Int32Array a = new Int32Array(0);
    a = Int32Array.from(new int[] {4, 5});
    List<Integer> src39 = java.util.Arrays.asList(1);
    try {
    Int32Array.from(src39, (v, index) -> {
        return BasTest.throwTestError("x");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqualInt(5, a.get(1));
    }

    /**
     * Verify from
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_4000
     * @tc.name int32ArrayFromPart07TestMindmapTest040
     * @tc.desc Verify from
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest040() {
    Int32Array before = Int32Array.from(new int[] {100});
    assertEqualInt(100, before.get(0));
    List<Integer> src40 = java.util.Arrays.asList(1);
    try {
    Int32Array.from(src40, (v, index) -> {
        return BasTest.throwTestError("mid");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqualInt(100, before.get(0));
    Int32Array after = Int32Array.from(new int[] {200});
    assertEqualInt(200, after.get(0));
    }

    /**
     * Verify from(Array<number>) Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_4300
     * @tc.name int32ArrayFromPart07TestMindmapTest043
     * @tc.desc Verify from(Array<number>) Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest043() {
    List<Integer> arr = java.util.Arrays.asList(10, 20);
    Int32Array dst = Int32Array.from(arr);
    dst.set(0, 777);
    assertEqualInt(10, arr.get(0));
    }

    /**
     * Verify from(Set) Set
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_4500
     * @tc.name int32ArrayFromPart07TestMindmapTest045
     * @tc.desc Verify from(Set) Set
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest045() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(50);
    Int32Array dst = Int32Array.from(s);
    dst.set(0, 111);
    assertTrue(s.contains(50));
    assertFalse(s.contains(111));
    }

    /**
     * Verify from(Int32Array) from
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_4900
     * @tc.name int32ArrayFromPart07TestMindmapTest049
     * @tc.desc Verify from(Int32Array) from
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest049() {
    Int32Array src = new Int32Array(new int[] {1, 2});
    Int32Array a1 = Int32Array.from(src);
    src.set(0, 42);
    Int32Array a2 = Int32Array.from(src);
    assertEqualInt(1, a1.get(0));
    assertEqualInt(42, a2.get(0));
    }

    /**
     * Verify from(Array<number>) number
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_5000
     * @tc.name int32ArrayFromPart07TestMindmapTest050
     * @tc.desc Verify from(Array<number>) number
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest050() {
    List<Integer> arr = java.util.Arrays.asList(100);
    Int32Array dst = Int32Array.from(arr);
    arr.set(0, 200);
    assertEqualInt(100, dst.get(0));
    }

    /**
     * Verify from $_set buffer buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_5100
     * @tc.name int32ArrayFromPart07TestMindmapTest051
     * @tc.desc Verify from $_set buffer buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest051() {
    Int32Array a = Int32Array.from(new int[] {1, 2, 3});
    ArrayBuffer bufBefore = a.buffer();
    a.set(2, 55);
    assertEqual(bufBefore, a.buffer());
    assertEqualInt(55, a.get(2));
    }

    /**
     * Verify 0 -0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_5400
     * @tc.name int32ArrayFromPart07TestMindmapTest054
     * @tc.desc Verify 0 -0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest054() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(-0);
    List<Integer> arr = java.util.Arrays.asList(-0);
    assertEqualInt(0, Int32Array.from(new int[] {0}).get(0));
    assertEqualInt(0, Int32Array.from(new int[] {-0}).get(0));
    assertEqualInt(0, Int32Array.from(s).get(0));
    assertEqualInt(0, Int32Array.from(arr).get(0));
    }

    /**
     * Verify NaN FixedArray/Array/Set 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_5800
     * @tc.name int32ArrayFromPart07TestMindmapTest058
     * @tc.desc Verify NaN FixedArray/Array/Set 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest058() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add((int) (Double.NaN));
    double[] arr = new double[] {Double.NaN};
    assertEqualInt(0, Int32Array.from(new double[] {Double.NaN}).get(0));
    assertEqualInt(0, Int32Array.from(s).get(0));
    assertEqualInt(0, Int32Array.from(arr).get(0));
    }

    /**
     * Verify byteLength=4 length=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_6000
     * @tc.name int32ArrayFromPart07TestMindmapTest060
     * @tc.desc Verify byteLength=4 length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest060() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    List<Integer> arr = java.util.Arrays.asList(1);
    Int32Array a1 = Int32Array.from(new int[] {1});
    Int32Array a2 = Int32Array.from(arr);
    Int32Array a3 = Int32Array.from(s);
    Int32Array a4 = Int32Array.from(new Int32Array(new int[] {1}));
    assertEqual(4, a1.byteLength());
    assertEqual(4, a2.byteLength());
    assertEqual(4, a3.byteLength());
    assertEqual(4, a4.byteLength());
    assertEqual(1, a1.length());
    assertEqual(1, a3.length());
    }

    /**
     * Verify byteLength=0 length=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_6100
     * @tc.name int32ArrayFromPart07TestMindmapTest061
     * @tc.desc Verify byteLength=0 length=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest061() {
    Set<Integer> s = new LinkedHashSet<>();
    List<Integer> arr = new ArrayList<>();
    assertEqual(0, Int32Array.from(new int[] {}).byteLength());
    assertEqual(0, Int32Array.from(arr).byteLength());
    assertEqual(0, Int32Array.from(s).byteLength());
    assertEqual(0, Int32Array.from(new Int32Array(0)).byteLength());
    assertEqual(0, Int32Array.from(new int[] {}).length());
    assertEqual(0, Int32Array.from(s).length());
    }

    /**
     * Verify set no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_6300
     * @tc.name int32ArrayFromPart07TestMindmapTest063
     * @tc.desc Verify set no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest063() {
    Int32Array a1 = Int32Array.from(new int[] {1});
    try {
    a1.set(1, 999);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(1, a1.length());
    List<Integer> arr = java.util.Arrays.asList(1);
    Int32Array a2 = Int32Array.from(arr);
    try {
    a2.set(1, 999);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertNull(a2.at(1));
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    Int32Array a3 = Int32Array.from(s);
    try {
    a3.set(1, 999);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertNull(a3.at(1));
    }

    /**
     * Verify get undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_6400
     * @tc.name int32ArrayFromPart07TestMindmapTest064
     * @tc.desc Verify get undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest064() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    assertNull(Int32Array.from(new int[] {1}).at(99));
    assertNull(Int32Array.from(new ArrayList<>()).at(0));
    assertNull(Int32Array.from(s).at(1));
    }

    /**
     * Verify from(from(FixedArray))
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_6500
     * @tc.name int32ArrayFromPart07TestMindmapTest065
     * @tc.desc Verify from(from(FixedArray))
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest065() {
    Int32Array a = Int32Array.from(Int32Array.from(new int[] {1, 2, 3}));
    assertEqual(3, a.length());
    assertEqualInt(1, a.get(0));
    assertEqualInt(3, a.get(2));
    }

    /**
     * Verify from(Array, mapfn) from
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_6700
     * @tc.name int32ArrayFromPart07TestMindmapTest067
     * @tc.desc Verify from(Array, mapfn) from
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest067() {
    List<Integer> arr = java.util.Arrays.asList(1, 2, 3);
    Int32Array a1 = Int32Array.from(arr, (v, index) -> v + 10);
    Int32Array a2 = Int32Array.from(a1);
    assertEqualInt(11, a2.get(0));
    assertEqualInt(12, a2.get(1));
    assertEqualInt(13, a2.get(2));
    }

    /**
     * Verify from(FixedArray) from
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_6800
     * @tc.name int32ArrayFromPart07TestMindmapTest068
     * @tc.desc Verify from(FixedArray) from
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest068() {
    Int32Array a = Int32Array.from(Int32Array.from(new int[] {}));
    assertEqual(0, a.length());
    assertEqual(0, a.byteLength());
    }

    /**
     * Verify Set<number> 3.7 from 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_6900
     * @tc.name int32ArrayFromPart07TestMindmapTest069
     * @tc.desc Verify Set<number> 3.7 from 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest069() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add((int) (3.7));
    Int32Array a = Int32Array.from(s);
    assertEqualInt(3, a.get(0));
    }

    /**
     * Verify Array length=3 0 2 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_7400
     * @tc.name int32ArrayFromPart07TestMindmapTest074
     * @tc.desc Verify Array length=3 0 2 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest074() {
    List<Integer> al = java.util.Arrays.asList(10, 0, 30);
    Int32Array a = Int32Array.from(al);
    assertEqual(3, a.length());
    assertEqualInt(10, a.get(0));
    assertEqualInt(0, a.get(1));
    assertEqualInt(30, a.get(2));
    }

    /**
     * Verify Array+mapfn passes element value and index to mapfn
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_7500
     * @tc.name int32ArrayFromPart07TestMindmapTest075
     * @tc.desc Verify Array+mapfn passes element value and index to mapfn
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest075() {
    List<Integer> al = java.util.Arrays.asList(77, 0);
    List<Integer> capturedValues = new ArrayList<>();
    List<Integer> capturedIndices = new ArrayList<>();
    Int32Array a = Int32Array.from(al, (v, k) -> {
        capturedValues.add(v);
        capturedIndices.add(k);
        return v;
    });
    assertEqual(2, a.length());
    assertEqualInt(77, capturedValues.get(0));
    assertEqualInt(0, capturedValues.get(1));
    assertEqualInt(0, capturedIndices.get(0));
    assertEqualInt(1, capturedIndices.get(1));
    }

    /**
     * Verify Array length=0 FixedArray []
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FROM_PART07_TEST_MINDMAP_7600
     * @tc.name int32ArrayFromPart07TestMindmapTest076
     * @tc.desc Verify Array length=0 FixedArray []
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFromPart07TestMindmapTest076() {
    List<Integer> al = new ArrayList<>();
    Int32Array a1 = Int32Array.from(al);
    Int32Array a2 = Int32Array.from(new int[] {});
    assertEqual(0, a1.length());
    assertEqual(0, a2.length());
    assertEqual(a2.byteLength(), a1.byteLength());
    }
}
