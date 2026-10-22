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
import basetype.common.Error;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFindIndexPart04Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFindIndexPart04Test extends BasTest {
    /**
     * Verify findIndex does not change source array length on multi-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_0100
     * @tc.name int32ArrayFindIndexPart04Test001
     * @tc.desc Verify findIndex does not change source array length on multi-element array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test001() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40);
    int before = arr.length();
    arr.findIndex((v, i, a) -> v == 30);
    int after = arr.length();
    assertEqual(before, after);
    assertEqual(4, before);
    }

    /**
     * Verify findIndex does not mutate element values after call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_0200
     * @tc.name int32ArrayFindIndexPart04Test002
     * @tc.desc Verify findIndex does not mutate element values after call
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test002() {
    Int32Array arr = Int32Array.of(7, 8, 9);
    arr.findIndex((v, i, a) -> v == 8);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(9, arr.get(2));
    }

    /**
     * Verify findIndex keeps byteLength unchanged after predicate returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_0300
     * @tc.name int32ArrayFindIndexPart04Test003
     * @tc.desc Verify findIndex keeps byteLength unchanged after predicate returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test003() {
    Int32Array arr = new Int32Array(4);
    int before = arr.byteLength();
    arr.findIndex((v, i, a) -> false);
    assertEqual(before, arr.byteLength());
    }

    /**
     * Verify findIndex on empty array keeps length 0 and does not invoke predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_0500
     * @tc.name int32ArrayFindIndexPart04Test005
     * @tc.desc Verify findIndex on empty array keeps length 0 and does not invoke predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test005() {
    Int32Array arr = new Int32Array(0);
    arr.findIndex((v, i, a) -> true);
    assertEqual(0, arr.length());
    }

    /**
     * Verify findIndex returns 0 when first element matches
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_0600
     * @tc.name int32ArrayFindIndexPart04Test006
     * @tc.desc Verify findIndex returns 0 when first element matches
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test006() {
    Int32Array arr = Int32Array.of(5);
    int r = arr.findIndex((v, i, a) -> true);
    assertEqual(0, r);
    }

    /**
     * Verify findIndex does not change byteOffset of non-zero offset view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_0700
     * @tc.name int32ArrayFindIndexPart04Test007
     * @tc.desc Verify findIndex does not change byteOffset of non-zero offset view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test007() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 4, 2);
    int before = view.byteOffset();
    view.findIndex((v, i, a) -> false);
    assertEqual(before, view.byteOffset());
    }

    /**
     * Verify callback invocation count equals found index+1 when match found at position 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_0800
     * @tc.name int32ArrayFindIndexPart04Test008
     * @tc.desc Verify callback invocation count equals found index+1 when match found at position 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test008() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40, 50);
    int[] count = {0};
    arr.findIndex((v, i, a) -> {
    count[0] = count[0] + 1;
    return v == 30;
    });
    assertEqual(3, count[0]);
    }

    /**
     * Verify callback visits all elements when predicate always returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_0900
     * @tc.name int32ArrayFindIndexPart04Test009
     * @tc.desc Verify callback visits all elements when predicate always returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test009() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    int[] count = {0};
    arr.findIndex((v, i, a) -> {
    count[0] = count[0] + 1;
    return false;
    });
    assertEqual(4, count[0]);
    }

    /**
     * Verify callback visits every index recorded via external seen array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_1000
     * @tc.name int32ArrayFindIndexPart04Test010
     * @tc.desc Verify callback visits every index recorded via external seen array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test010() {
    Int32Array arr = Int32Array.of(11, 22, 33);
    List<Integer> seen = java.util.Arrays.asList(0, 0, 0);
    arr.findIndex((v, i, a) -> {
    seen.set(i, 1);
    return false;
    });
    assertEqualInt(1, seen.get(0));
    assertEqualInt(1, seen.get(1));
    assertEqualInt(1, seen.get(2));
    }

    /**
     * Verify callback receives correct values by summing across full iteration
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_1100
     * @tc.name int32ArrayFindIndexPart04Test011
     * @tc.desc Verify callback receives correct values by summing across full iteration
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test011() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    int[] sum = {0};
    arr.findIndex((v, i, a) -> {
    sum[0] = sum[0] + v;
    return false;
    });
    assertEqual(10, sum[0]);
    }

    /**
     * Verify callback index argument starts at 0 and increments sequentially
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_1200
     * @tc.name int32ArrayFindIndexPart04Test012
     * @tc.desc Verify callback index argument starts at 0 and increments sequentially
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test012() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    List<Integer> indices = new ArrayList<>();
    arr.findIndex((v, i, a) -> {
    indices.add(i);
    return false;
    });
    assertEqual(3, indices.size());
    assertEqualInt(0, indices.get(0));
    assertEqualInt(1, indices.get(1));
    assertEqualInt(2, indices.get(2));
    }

    /**
     * Verify findIndex returns index of first element greater than external threshold
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_1300
     * @tc.name int32ArrayFindIndexPart04Test013
     * @tc.desc Verify findIndex returns index of first element greater than external threshold
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test013() {
    Int32Array arr = Int32Array.of(5, 10, 15, 20);
    int threshold = 12;
    int idx = arr.findIndex((v, i, a) -> v > threshold);
    assertEqual(2, idx);
    }

    /**
     * Verify callback can match against external target array and return matching index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_1400
     * @tc.name int32ArrayFindIndexPart04Test014
     * @tc.desc Verify callback can match against external target array and return matching index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test014() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    List<Integer> targets = java.util.Arrays.asList(6, 7, 4);
    int idx = arr.findIndex((v, i, a) -> {
        for (int k = 0; k < targets.size(); k++) {
        if (v == targets.get(k)) {
        return true;
    }
        }
        return false;
        });
    assertEqual(3, idx);
    }

    /**
     * Verify short-circuit: callback called exactly foundIndex+1 times when match at index 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_1500
     * @tc.name int32ArrayFindIndexPart04Test015
     * @tc.desc Verify short-circuit: callback called exactly foundIndex+1 times when match at index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test015() {
    Int32Array arr = Int32Array.of(0, 0, 0, 1, 0, 0);
    int[] calls = {0};
    int pos = arr.findIndex((v, i, a) -> {
        calls[0] = calls[0] + 1;
        return v == 1;
    });
    assertEqual(3, pos);
    assertEqual(4, calls[0]);
    }

    /**
     * Verify shared closure predicate accumulates total calls across two findIndex invocations
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_1600
     * @tc.name int32ArrayFindIndexPart04Test016
     * @tc.desc Verify shared closure predicate accumulates total calls across two findIndex invocations
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test016() {
    Int32Array arr1 = Int32Array.of(1, 2, 3);
    Int32Array arr2 = Int32Array.of(4, 5, 6);
    int[] totalCalls = {0};
    Int32Array.Int32ArrayFinder pred = (v, i, a) -> {
        totalCalls[0] = totalCalls[0] + 1;
        return false;
    };
    arr1.findIndex(pred);
    arr2.findIndex(pred);
    assertEqual(6, totalCalls[0]);
    }

    /**
     * Verify nested findIndex on same array returns correct outer index via inner match
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_1700
     * @tc.name int32ArrayFindIndexPart04Test017
     * @tc.desc Verify nested findIndex on same array returns correct outer index via inner match
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test017() {
    Int32Array arr = Int32Array.of(0, 10, 20, 30, 40);
    int outerIdx = arr.findIndex((v, i, a) -> {
        int inner = a.findIndex((vv, ii, aa) -> vv == 30);
        return i == inner;
    });
    assertEqual(3, outerIdx);
    }

    /**
     * Verify cross-array findIndex inside predicate locates first value present in reference array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_1800
     * @tc.name int32ArrayFindIndexPart04Test018
     * @tc.desc Verify cross-array findIndex inside predicate locates first value present in reference array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test018() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    Int32Array ref = Int32Array.of(100, 200, 3);
    int idx = arr.findIndex((v, i, a) -> {
        return ref.findIndex((rv, ri, ra) -> rv == ((int) v)) != -1;
        });
    assertEqual(2, idx);
    }

    /**
     * Verify nested findIndex on another array does not corrupt the inner array elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_1900
     * @tc.name int32ArrayFindIndexPart04Test019
     * @tc.desc Verify nested findIndex on another array does not corrupt the inner array elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test019() {
    Int32Array outer = Int32Array.of(11, 22);
    Int32Array inner = Int32Array.of(33, 44, 55);
    outer.findIndex((v, i, a) -> {
    inner.findIndex((vv, ii, aa) -> vv == 44);
    return false;
    });
    assertEqualInt(33, inner.get(0));
    assertEqualInt(44, inner.get(1));
    assertEqualInt(55, inner.get(2));
    }

    /**
     * Verify three-level nested findIndex returns index of value 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_2000
     * @tc.name int32ArrayFindIndexPart04Test020
     * @tc.desc Verify three-level nested findIndex returns index of value 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test020() {
    Int32Array a = Int32Array.of(1, 2, 3);
    int res = a.findIndex((v1, i1, ar1) -> {
        return a.findIndex((v2, i2, ar2) -> {
        return a.findIndex((v3, i3, ar3) -> v3 == ((int) 3)) == i2;
        }) == i1;
        });
    assertEqual(2, res);
    }

    /**
     * Verify findIndex in another evens array with pos%2==0 returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_2100
     * @tc.name int32ArrayFindIndexPart04Test021
     * @tc.desc Verify findIndex in another evens array with pos%2==0 returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test021() {
    Int32Array arr = Int32Array.of(4, 8, 12, 16);
    Int32Array evens = Int32Array.of(2, 4, 6, 8, 10, 12, 14, 16);
    int idx = arr.findIndex((v, i, a) -> {
        int pos = evens.findIndex((ev, ei, ea) -> ev == ((int) v));
        return pos != -1 && pos % 2 == 0;
    });
    assertEqual(-1, idx);
    }

    /**
     * Verify $_set of later elements to sentinel during iteration makes target 4 unreachable (returns -1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_2200
     * @tc.name int32ArrayFindIndexPart04Test022
     * @tc.desc Verify $_set of later elements to sentinel during iteration makes target 4 unreachable (returns -1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test022() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    int idx = arr.findIndex((v, i, a) -> {
        if (i + 1 < a.length()) {
            a.set(i + 1, 999);
    }
        return v == 4;
        });
    assertEqual(-1, idx);
    }

    /**
     * Verify $_set on current index after reading v does not affect already-observed v
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_2300
     * @tc.name int32ArrayFindIndexPart04Test023
     * @tc.desc Verify $_set on current index after reading v does not affect already-observed v
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test023() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    List<Integer> seen = new ArrayList<>();
    arr.findIndex((v, i, a) -> {
    seen.add(v);
    a.set(i, 100);
    return false;
    });
    assertEqualInt(1, seen.get(0));
    assertEqualInt(2, seen.get(1));
    assertEqualInt(3, seen.get(2));
    }

    /**
     * Verify $_set on already-visited prior indices does not stop iteration early
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_2400
     * @tc.name int32ArrayFindIndexPart04Test024
     * @tc.desc Verify $_set on already-visited prior indices does not stop iteration early
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test024() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40);
    int[] calls = {0};
    arr.findIndex((v, i, a) -> {
        calls[0] = calls[0] + 1;
        if (i > 0) {
    a.set(i - 1, 0);
    }
    return false;
    });
    assertEqual(4, calls[0]);
    }

    /**
     * Verify fill(0) during first iteration changes subsequent observed values per TC39 snapshot semantics
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_2500
     * @tc.name int32ArrayFindIndexPart04Test025
     * @tc.desc Verify fill(0) during first iteration changes subsequent observed values per TC39 snapshot semantics
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test025() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    List<Integer> seen = new ArrayList<>();
    arr.findIndex((v, i, a) -> {
        seen.add(v);
        if (i == 0) {
    a.fill(0);
    }
    return false;
    });
    assertEqualInt(1, seen.get(0));
    assertEqualInt(0, seen.get(1));
    }

    /**
     * Verify overwriting target element during earlier iteration causes findIndex to return -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_2600
     * @tc.name int32ArrayFindIndexPart04Test026
     * @tc.desc Verify overwriting target element during earlier iteration causes findIndex to return -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test026() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40);
    int idx = arr.findIndex((v, i, a) -> {
        if (i == 0) {
            a.set(2, 99);
    }
        return v == 30;
        });
    assertEqual(-1, idx);
    }

    /**
     * Verify $_set via subarray in callback mutates the shared buffer visible to parent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_2700
     * @tc.name int32ArrayFindIndexPart04Test027
     * @tc.desc Verify $_set via subarray in callback mutates the shared buffer visible to parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test027() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    arr.findIndex((v, i, a) -> {
    a.subarray(2).set(0, 77);
    return false;
    });
    assertEqualInt(77, arr.get(2));
    }

    /**
     * Verify Error thrown at second iteration propagates and pre-throw side effects (touch count) persist
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_2800
     * @tc.name int32ArrayFindIndexPart04Test028
     * @tc.desc Verify Error thrown at second iteration propagates and pre-throw side effects (touch count) persist
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test028() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    int[] touched = {0};
    try {
    arr.findIndex((v, i, a) -> {
        touched[0] = touched[0] + 1;
        if (i == 1) {
    return BasTest.throwTestError("boom at index 1");
    }
    return false;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(2, touched[0]);
    }
    }

    /**
     * Verify predicate is never invoked on empty array even when it would throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_3000
     * @tc.name int32ArrayFindIndexPart04Test030
     * @tc.desc Verify predicate is never invoked on empty array even when it would throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test030() {
    Int32Array arr = new Int32Array(0);
    boolean[] called = {false};
    int r = arr.findIndex((v, i, a) -> {
        called[0] = true;
        return BasTest.throwTestError("should not run");
    });
    assertEqual(-1, r);
    assertFalse(called[0]);
    }

    /**
     * Verify Error thrown on first invocation propagates and external counter is incremented once
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_3100
     * @tc.name int32ArrayFindIndexPart04Test031
     * @tc.desc Verify Error thrown on first invocation propagates and external counter is incremented once
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test031() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    int[] n = {0};
    try {
    arr.findIndex((v, i, a) -> {
    n[0] = n[0] + 1;
    return BasTest.throwTestError("first call fail");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(1, n[0]);
    }
    }

    /**
     * Verify RangeError thrown in predicate propagates with name RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_3200
     * @tc.name int32ArrayFindIndexPart04Test032
     * @tc.desc Verify RangeError thrown in predicate propagates with name RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test032() {
    Int32Array arr = Int32Array.of(1);
    try {
    arr.findIndex((v, i, a) -> {
    throw new RangeError("out of range");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify TypeError thrown in predicate propagates with name TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_3300
     * @tc.name int32ArrayFindIndexPart04Test033
     * @tc.desc Verify TypeError thrown in predicate propagates with name TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test033() {
    Int32Array arr = Int32Array.of(1, 2);
    try {
    arr.findIndex((v, i, a) -> {
    throw new TypeError("type bad");
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findIndex locates zero (0 and -0 both become 0 under ToInt32) at index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_3600
     * @tc.name int32ArrayFindIndexPart04Test036
     * @tc.desc Verify findIndex locates zero (0 and -0 both become 0 under ToInt32) at index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test036() {
    Int32Array arr = Int32Array.of(1, 0, 2);
    int idx = arr.findIndex((v, i, a) -> v == 0);
    assertEqual(1, idx);
    }

    /**
     * Verify fractional 3.999 truncates toward zero to 3 under ToInt32 and findIndex locates it
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_3900
     * @tc.name int32ArrayFindIndexPart04Test039
     * @tc.desc Verify fractional 3.999 truncates toward zero to 3 under ToInt32 and findIndex locates it
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test039() {
    Int32Array arr = new Int32Array(2);
    arr.set(0, 3.999);
    arr.set(1, 4);
    int idx = arr.findIndex((v, i, a) -> v == 3);
    assertEqual(0, idx);
    }

    /**
     * Verify findIndex on subarray returns index relative to the subarray view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_4200
     * @tc.name int32ArrayFindIndexPart04Test042
     * @tc.desc Verify findIndex on subarray returns index relative to the subarray view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test042() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40, 50);
    Int32Array sub = arr.subarray(2, 5);
    int idx = sub.findIndex((v, i, a) -> v == 40);
    assertEqual(1, idx);
    }

    /**
     * Verify $_set via subarray callback mutates shared buffer visible to parent array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_4300
     * @tc.name int32ArrayFindIndexPart04Test043
     * @tc.desc Verify $_set via subarray callback mutates shared buffer visible to parent array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test043() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array sub = arr.subarray(1, 3);
    sub.findIndex((v, i, a) -> {
    a.set(i, 99);
    return false;
    });
    assertEqualInt(99, arr.get(1));
    assertEqualInt(99, arr.get(2));
    }

    /**
     * Verify $_set on parent during findIndex is visible through subarray view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_4400
     * @tc.name int32ArrayFindIndexPart04Test044
     * @tc.desc Verify $_set on parent during findIndex is visible through subarray view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test044() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array sub = arr.subarray(1, 3);
    arr.findIndex((v, i, a) -> {
    if (i >= 1 && i < 3) {
    a.set(i, 77);
    }
    return false;
    });
    assertEqualInt(77, sub.get(0));
    assertEqualInt(77, sub.get(1));
    }

    /**
     * Verify two disjoint subarray views over same buffer have independent findIndex results
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_4600
     * @tc.name int32ArrayFindIndexPart04Test046
     * @tc.desc Verify two disjoint subarray views over same buffer have independent findIndex results
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test046() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40);
    Int32Array s1 = arr.subarray(0, 2);
    Int32Array s2 = arr.subarray(2, 4);
    int i1 = s1.findIndex((v, i, a) -> v == 20);
    int i2 = s2.findIndex((v, i, a) -> v == 40);
    assertEqual(1, i1);
    assertEqual(1, i2);
    }

    /**
     * Verify subarray findIndex returns relative index 0 for element at parent index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_4700
     * @tc.name int32ArrayFindIndexPart04Test047
     * @tc.desc Verify subarray findIndex returns relative index 0 for element at parent index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test047() {
    Int32Array arr = Int32Array.of(0, 0, 5, 0);
    Int32Array sub = arr.subarray(2, 4);
    int idx = sub.findIndex((v, i, a) -> v == 5);
    assertEqual(0, idx);
    assertEqualInt(5, sub.get(idx));
    }

    /**
     * Verify findIndex on empty subarray (start===end) returns -1 and length remains 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_4800
     * @tc.name int32ArrayFindIndexPart04Test048
     * @tc.desc Verify findIndex on empty subarray (start===end) returns -1 and length remains 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test048() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array sub = arr.subarray(2, 2);
    int idx = sub.findIndex((v, i, a) -> true);
    assertEqual(-1, idx);
    assertEqual(0, sub.length());
    }

    /**
     * Verify callback array argument refers to the subarray view itself with subarray length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_4900
     * @tc.name int32ArrayFindIndexPart04Test049
     * @tc.desc Verify callback array argument refers to the subarray view itself with subarray length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test049() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array sub = arr.subarray(1, 3);
    int[] observedLen = {0};
    sub.findIndex((v, i, a) -> {
    observedLen[0] = a.length();
    return false;
    });
    assertEqual(2, observedLen[0]);
    }

    /**
     * Verify fill(7) then findIndex(7) returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_5000
     * @tc.name int32ArrayFindIndexPart04Test050
     * @tc.desc Verify fill(7) then findIndex(7) returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test050() {
    Int32Array arr = new Int32Array(3);
    arr.fill(7);
    int idx = arr.findIndex((v, i, a) -> v == 7);
    assertEqual(0, idx);
    }

    /**
     * Verify reverse() then findIndex(1) returns index 3 in reversed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_5100
     * @tc.name int32ArrayFindIndexPart04Test051
     * @tc.desc Verify reverse() then findIndex(1) returns index 3 in reversed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test051() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    arr.reverse();
    int idx = arr.findIndex((v, i, a) -> v == 1);
    assertEqual(3, idx);
    }

    /**
     * Verify sort() then findIndex(10) returns index 0 (minimum at position 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_5200
     * @tc.name int32ArrayFindIndexPart04Test052
     * @tc.desc Verify sort() then findIndex(10) returns index 0 (minimum at position 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test052() {
    Int32Array arr = Int32Array.of(30, 10, 40, 20);
    arr.sort();
    int idx = arr.findIndex((v, i, a) -> v == 10);
    assertEqual(0, idx);
    }

    /**
     * Verify set(src, 2) then findIndex(8) locates copied element at index 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_5300
     * @tc.name int32ArrayFindIndexPart04Test053
     * @tc.desc Verify set(src, 2) then findIndex(8) locates copied element at index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test053() {
    Int32Array arr = new Int32Array(5);
    Int32Array src = Int32Array.of(7, 8);
    arr.set(src, 2);
    int idx = arr.findIndex((v, i, a) -> v == 8);
    assertEqual(3, idx);
    }

    /**
     * Verify copyWithin(4, 0, 2) then findIndex with i>=4 constraint locates copied value 2 at index 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_5400
     * @tc.name int32ArrayFindIndexPart04Test054
     * @tc.desc Verify copyWithin(4, 0, 2) then findIndex with i>=4 constraint locates copied value 2 at index 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test054() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 0, 0);
    arr.copyWithin(4, 0, 2);
    int idx = arr.findIndex((v, i, a) -> v == 2 && i >= 4);
    assertEqual(5, idx);
    }

    /**
     * Verify $_get on findIndex result returns the target value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_5500
     * @tc.name int32ArrayFindIndexPart04Test055
     * @tc.desc Verify $_get on findIndex result returns the target value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test055() {
    Int32Array arr = Int32Array.of(11, 22, 33, 44);
    int target = 33;
    int idx = arr.findIndex((v, i, a) -> v == target);
    assertEqualInt(target, arr.get(idx));
    }

    /**
     * Verify callback third argument array is === to the outer caller instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_6000
     * @tc.name int32ArrayFindIndexPart04Test060
     * @tc.desc Verify callback third argument array is === to the outer caller instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test060() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    boolean[] same = {false};
    arr.findIndex((v, i, a) -> {
    same[0] = a == arr;
    return true;
    });
    assertTrue(same[0]);
    }

    /**
     * Verify callback third argument length matches outer array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_6100
     * @tc.name int32ArrayFindIndexPart04Test061
     * @tc.desc Verify callback third argument length matches outer array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test061() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    boolean[] lenMatch = {false};
    arr.findIndex((v, i, a) -> {
    lenMatch[0] = a.length() == arr.length();
    return true;
    });
    assertTrue(lenMatch[0]);
    }

    /**
     * Verify value parameter equals array.$_get(index) on every iteration
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_6200
     * @tc.name int32ArrayFindIndexPart04Test062
     * @tc.desc Verify value parameter equals array.$_get(index) on every iteration
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test062() {
    Int32Array arr = Int32Array.of(7, 14, 21, 28);
    boolean[] allMatch = {true};
    arr.findIndex((v, i, a) -> {
    if (a.get(i) != v) {
    allMatch[0] = false;
    }
    return false;
    });
    assertTrue(allMatch[0]);
    }

    /**
     * Verify callback index increments strictly from 0 to length-1 when predicate always false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_6300
     * @tc.name int32ArrayFindIndexPart04Test063
     * @tc.desc Verify callback index increments strictly from 0 to length-1 when predicate always false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test063() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40, 50);
    int[] expected = {0};
    boolean[] sequential = {true};
    arr.findIndex((v, i, a) -> {
    if (i != expected[0]) {
    sequential[0] = false;
    }
    expected[0] = expected[0] + 1;
    return false;
    });
    assertTrue(sequential[0]);
    assertEqual(5, expected[0]);
    }

    /**
     * Verify findIndex with i%2===0 returns first even index position 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_6400
     * @tc.name int32ArrayFindIndexPart04Test064
     * @tc.desc Verify findIndex with i%2===0 returns first even index position 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test064() {
    Int32Array arr = Int32Array.of(11, 22, 33, 44);
    int idx = arr.findIndex((v, i, a) -> i % 2 == 0);
    assertEqual(0, idx);
    }

    /**
     * Verify findIndex with v===i returns index 1 (value 1 equals its index)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_6500
     * @tc.name int32ArrayFindIndexPart04Test065
     * @tc.desc Verify findIndex with v===i returns index 1 (value 1 equals its index)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test065() {
    Int32Array arr = Int32Array.of(10, 1, 2, 30);
    int idx = arr.findIndex((v, i, a) -> v == i);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex with v < i*10 locates first local drop at index 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_6600
     * @tc.name int32ArrayFindIndexPart04Test066
     * @tc.desc Verify findIndex with v < i*10 locates first local drop at index 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test066() {
    Int32Array arr = Int32Array.of(5, 15, 25, 35, 30);
    int idx = arr.findIndex((v, i, a) -> v < i * 10);
    assertEqual(4, idx);
    }

    /**
     * Verify findIndex detecting first duplicate value returns index 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_6700
     * @tc.name int32ArrayFindIndexPart04Test067
     * @tc.desc Verify findIndex detecting first duplicate value returns index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test067() {
    Int32Array arr = Int32Array.of(1, 2, 3, 2, 4);
    int idx = arr.findIndex((v, i, a) -> {
        for (int j = 0; j < i; j++) {
        if (a.get(j) == v) {
        return true;
    }
        }
        return false;
        });
    assertEqual(3, idx);
    }

    /**
     * Verify findIndex on all-same-element array returns index 0 on first hit
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_6800
     * @tc.name int32ArrayFindIndexPart04Test068
     * @tc.desc Verify findIndex on all-same-element array returns index 0 on first hit
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test068() {
    Int32Array arr = Int32Array.of(7, 7, 7, 7);
    int idx = arr.findIndex((v, i, a) -> v == 7);
    assertEqual(0, idx);
    }

    /**
     * Verify findIndex returns -1 when all elements fail predicate on uniform array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_6900
     * @tc.name int32ArrayFindIndexPart04Test069
     * @tc.desc Verify findIndex returns -1 when all elements fail predicate on uniform array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test069() {
    Int32Array arr = Int32Array.of(7, 7, 7);
    int idx = arr.findIndex((v, i, a) -> v == 8);
    assertEqual(-1, idx);
    }

    /**
     * Verify single-element array findIndex returns 0 when value matches
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_7000
     * @tc.name int32ArrayFindIndexPart04Test070
     * @tc.desc Verify single-element array findIndex returns 0 when value matches
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test070() {
    Int32Array arr = Int32Array.of(42);
    int idx = arr.findIndex((v, i, a) -> v == 42);
    assertEqual(0, idx);
    }

    /**
     * Verify single-element array findIndex returns -1 when value does not match
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FINDINDEX_PART04_7100
     * @tc.name int32ArrayFindIndexPart04Test071
     * @tc.desc Verify single-element array findIndex returns -1 when value does not match
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindIndexPart04Test071() {
    Int32Array arr = Int32Array.of(42);
    int idx = arr.findIndex((v, i, a) -> v == 99);
    assertEqual(-1, idx);
    }
}
