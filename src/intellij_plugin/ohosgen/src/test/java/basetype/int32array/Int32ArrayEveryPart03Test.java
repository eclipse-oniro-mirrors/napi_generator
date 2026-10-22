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
import basetype.common.TypeError;
import basetype.common.Error;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayEveryPart03Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayEveryPart03Test extends BasTest {
    /**
     * Verify predicate throwing Error at first element propagates and stops iteration
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_0100
     * @tc.name int32ArrayEveryPart03Test001
     * @tc.desc Verify predicate throwing Error at first element propagates and stops iteration
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test001() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int[] calls = {0};
    try {
    arr.every((e, i, a) -> {
    calls[0]++;
    return BasTest.throwTestError("boom at first");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("boom at first", e.getMessage());
    assertEqual(1, calls[0]);
    }
    }

    /**
     * Verify predicate throwing Error at last element propagates
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_0300
     * @tc.name int32ArrayEveryPart03Test003
     * @tc.desc Verify predicate throwing Error at last element propagates
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test003() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    boolean[] lastVisited = {false};
    try {
    arr.every((e, i, a) -> {
    if (i == a.length() - 1) {
    lastVisited[0] = true;
    return BasTest.throwTestError("last");
    }
    return true;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("last", e.getMessage());
    assertTrue(lastVisited[0]);
    }
    }

    /**
     * Verify predicate throwing RangeError preserves error name
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_0400
     * @tc.name int32ArrayEveryPart03Test004
     * @tc.desc Verify predicate throwing RangeError preserves error name
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test004() {
    Int32Array arr = new Int32Array(new int[] {1});
    try {
    arr.every((e, i, a) -> {
    throw new RangeError("range bad");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("range bad", e.getMessage());
    }
    }

    /**
     * Verify predicate throwing TypeError preserves error name
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_0500
     * @tc.name int32ArrayEveryPart03Test005
     * @tc.desc Verify predicate throwing TypeError preserves error name
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test005() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    arr.every((e, i, a) -> {
    throw new TypeError("type bad");
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate throwing Error propagates non-null
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_0600
     * @tc.name int32ArrayEveryPart03Test006
     * @tc.desc Verify predicate throwing Error propagates non-null
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test006() {
    Int32Array arr = new Int32Array(new int[] {5});
    try {
    arr.every((e, i, a) -> {
    return BasTest.throwTestError("stringErr");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("stringErr", e.getMessage());
    }
    }

    /**
     * Verify original array content unchanged after predicate throws
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_0700
     * @tc.name int32ArrayEveryPart03Test007
     * @tc.desc Verify original array content unchanged after predicate throws
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test007() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    arr.every((e, i, a) -> {
    return BasTest.throwTestError("x");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("x", e.getMessage());
    assertEqual(3, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }
    }

    /**
     * Verify calling every again after a throw works correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_0800
     * @tc.name int32ArrayEveryPart03Test008
     * @tc.desc Verify calling every again after a throw works correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test008() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    try {
    arr.every((e, i, a) -> {
        return BasTest.throwTestError("x");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("x", e.getMessage());
    }
    boolean r = arr.every((e, i, a) -> e > 0);
    assertTrue(r);
    }

    /**
     * Verify nested throw inside predicate propagates outermost error
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_0900
     * @tc.name int32ArrayEveryPart03Test009
     * @tc.desc Verify nested throw inside predicate propagates outermost error
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test009() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    try {
    arr.every((e, i, a) -> {
    try {
    return BasTest.throwTestError("inner");
    } catch (Error inner) {
    assertEqual("Error", inner.getClass().getSimpleName());
    return BasTest.throwTestError("outer");
    }
    });
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("outer", e.getMessage());
    }
    }

    /**
     * Verify predicate returning false on first element returns false without throwing
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_1000
     * @tc.name int32ArrayEveryPart03Test010
     * @tc.desc Verify predicate returning false on first element returns false without throwing
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test010() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean r = arr.every((e, i, a) -> false);
    assertFalse(r);
    }

    /**
     * Verify predicate returning false on first element short-circuits
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_1100
     * @tc.name int32ArrayEveryPart03Test011
     * @tc.desc Verify predicate returning false on first element short-circuits
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test011() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int[] calls = {0};
    boolean r = arr.every((e, i, a) -> {
        calls[0]++;
        return false;
    });
    assertFalse(r);
    assertEqual(1, calls[0]);
    }

    /**
     * Verify predicate returning false on first element short-circuits (2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_1200
     * @tc.name int32ArrayEveryPart03Test012
     * @tc.desc Verify predicate returning false on first element short-circuits (2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test012() {
    Int32Array arr = new Int32Array(new int[] {4, 5, 6});
    int[] calls = {0};
    boolean r = arr.every((e, i, a) -> {
        calls[0]++;
        return false;
    });
    assertFalse(r);
    assertEqual(1, calls[0]);
    }

    /**
     * Verify empty Int32Array every returns true (vacuous truth)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_1300
     * @tc.name int32ArrayEveryPart03Test013
     * @tc.desc Verify empty Int32Array every returns true (vacuous truth)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test013() {
    Int32Array arr = new Int32Array(0);
    int[] calls = {0};
    boolean r = arr.every((e, i, a) -> {
        calls[0]++;
        return false;
    });
    assertTrue(r);
    assertEqual(0, calls[0]);
    }

    /**
     * Verify empty Int32Array from ArrayBuffer(0) every returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_1400
     * @tc.name int32ArrayEveryPart03Test014
     * @tc.desc Verify empty Int32Array from ArrayBuffer(0) every returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test014() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int32Array arr = new Int32Array(buf);
    boolean r = arr.every((e, i, a) -> e > 0);
    assertTrue(r);
    assertEqual(0, arr.length());
    }

    /**
     * Verify subarray zero-length view every returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_1500
     * @tc.name int32ArrayEveryPart03Test015
     * @tc.desc Verify subarray zero-length view every returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test015() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    Int32Array sub = arr.subarray(2, 2);
    boolean r = sub.every((e, i, a) -> false);
    assertTrue(r);
    assertEqual(0, sub.length());
    }

    /**
     * Verify slice zero-length array every returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_1600
     * @tc.name int32ArrayEveryPart03Test016
     * @tc.desc Verify slice zero-length array every returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test016() {
    Int32Array arr = new Int32Array(new int[] {10, 20});
    Int32Array s = arr.slice(0, 0);
    boolean r = s.every((e, i, a) -> e > 999);
    assertTrue(r);
    }

    /**
     * Verify single element predicate returns true yields true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_1700
     * @tc.name int32ArrayEveryPart03Test017
     * @tc.desc Verify single element predicate returns true yields true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test017() {
    Int32Array arr = new Int32Array(new int[] {42});
    boolean r = arr.every((e, i, a) -> e == 42);
    assertTrue(r);
    }

    /**
     * Verify single element predicate returns false yields false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_1800
     * @tc.name int32ArrayEveryPart03Test018
     * @tc.desc Verify single element predicate returns false yields false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test018() {
    Int32Array arr = new Int32Array(new int[] {42});
    boolean r = arr.every((e, i, a) -> e != 42);
    assertFalse(r);
    }

    /**
     * Verify single element predicate index is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_1900
     * @tc.name int32ArrayEveryPart03Test019
     * @tc.desc Verify single element predicate index is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test019() {
    Int32Array arr = new Int32Array(new int[] {99});
    int[] seenIdx = {-1};
    arr.every((e, i, a) -> {
    seenIdx[0] = i;
    return true;
    });
    assertEqual(0, seenIdx[0]);
    }

    /**
     * Verify single element predicate array reference is original
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_2000
     * @tc.name int32ArrayEveryPart03Test020
     * @tc.desc Verify single element predicate array reference is original
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test020() {
    Int32Array arr = new Int32Array(new int[] {7});
    boolean[] same = {false};
    arr.every((e, i, a) -> {
    same[0] = (a == arr);
    return true;
    });
    assertTrue(same[0]);
    }

    /**
     * Verify all zeros predicate e===0 returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_2100
     * @tc.name int32ArrayEveryPart03Test021
     * @tc.desc Verify all zeros predicate e===0 returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test021() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0, 0});
    boolean r = arr.every((e, i, a) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify mixed value short-circuits at differing element and counts calls
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_2400
     * @tc.name int32ArrayEveryPart03Test024
     * @tc.desc Verify mixed value short-circuits at differing element and counts calls
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test024() {
    Int32Array arr = new Int32Array(new int[] {5, 5, 5, 7, 5});
    int[] calls = {0};
    boolean r = arr.every((e, i, a) -> {
        calls[0]++;
        return e == 5;
    });
    assertFalse(r);
    assertEqual(4, calls[0]);
    }

    /**
     * Verify all 1s predicate e>0 visits all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_2600
     * @tc.name int32ArrayEveryPart03Test026
     * @tc.desc Verify all 1s predicate e>0 visits all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test026() {
    Int32Array arr = new Int32Array(new int[] {1, 1, 1, 1});
    int[] sum = {0};
    boolean r = arr.every((e, i, a) -> {
        sum[0] += 1;
        return e > 0;
    });
    assertTrue(r);
    assertEqual(4, sum[0]);
    }

    /**
     * Verify predicate never receives negative index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_2700
     * @tc.name int32ArrayEveryPart03Test027
     * @tc.desc Verify predicate never receives negative index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test027() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    boolean[] gotNeg = {false};
    arr.every((e, i, a) -> {
    if (i < 0) {
        gotNeg[0] = true;
        }
    return true;
    });
    assertFalse(gotNeg[0]);
    }

    /**
     * Verify predicate never receives index equal to length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_2800
     * @tc.name int32ArrayEveryPart03Test028
     * @tc.desc Verify predicate never receives index equal to length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test028() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    boolean[] gotLen = {false};
    arr.every((e, i, a) -> {
    if (i >= a.length()) {
        gotLen[0] = true;
        }
    return true;
    });
    assertFalse(gotLen[0]);
    }

    /**
     * Verify predicate indices are strictly increasing
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_2900
     * @tc.name int32ArrayEveryPart03Test029
     * @tc.desc Verify predicate indices are strictly increasing
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test029() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    int[] expected = {0};
    boolean[] ok = {true};
    arr.every((e, i, a) -> {
    if (i != expected[0]) {
        ok[0] = false;
        }
    expected[0]++;
    return true;
    });
    assertTrue(ok[0]);
    assertEqual(4, expected[0]);
    }

    /**
     * Verify first element failure visits only index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_3000
     * @tc.name int32ArrayEveryPart03Test030
     * @tc.desc Verify first element failure visits only index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test030() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    List<Integer> seen = new ArrayList<>();
    arr.every((e, i, a) -> {
    seen.add(i);
    return false;
    });
    assertEqual(1, seen.size());
    assertEqualInt(0, seen.get(0));
    }

    /**
     * Verify last element failure visits all indices 0..length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_3100
     * @tc.name int32ArrayEveryPart03Test031
     * @tc.desc Verify last element failure visits all indices 0..length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test031() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    List<Integer> seen = new ArrayList<>();
    boolean r = arr.every((e, i, a) -> {
        seen.add(i);
        return i != a.length() - 1;
    });
    assertFalse(r);
    assertEqual(3, seen.size());
    }

    /**
     * Verify predicate third argument length matches outer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_3200
     * @tc.name int32ArrayEveryPart03Test032
     * @tc.desc Verify predicate third argument length matches outer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test032() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    int[] innerLen = {0};
    arr.every((e, i, a) -> {
    innerLen[0] = a.length();
    return true;
    });
    assertEqual(4, innerLen[0]);
    }

    /**
     * Verify predicate receives three arguments element index array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_3300
     * @tc.name int32ArrayEveryPart03Test033
     * @tc.desc Verify predicate receives three arguments element index array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test033() {
    Int32Array arr = new Int32Array(new int[] {7});
    int[] receivedElement = {0};
    int[] receivedIndex = {-1};
    Int32Array[] receivedArray = {null};
    Int32Array.Int32ArrayFinder fn = (e, i, a) -> {
        receivedElement[0] = e;
        receivedIndex[0] = i;
        receivedArray[0] = a;
        return true;
    };
    arr.every(fn);
    assertEqual(7, receivedElement[0]);
    assertEqual(0, receivedIndex[0]);
    assertEqual(arr, receivedArray[0]);
    }

    /**
     * Verify modifying current element in predicate does not affect true result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_3400
     * @tc.name int32ArrayEveryPart03Test034
     * @tc.desc Verify modifying current element in predicate does not affect true result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test034() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    boolean r = arr.every((e, i, a) -> {
        a.set(i, e + 10);
        return e > 0;
    });
    assertTrue(r);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(13, arr.get(2));
    }

    /**
     * Verify every on subarray view uses the view itself as array argument
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_3700
     * @tc.name int32ArrayEveryPart03Test037
     * @tc.desc Verify every on subarray view uses the view itself as array argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test037() {
    Int32Array parent = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array sub = parent.subarray(2, 4);
    boolean[] sameAsSub = {false};
    sub.every((e, i, a) -> {
    sameAsSub[0] = (a == sub);
    return true;
    });
    assertTrue(sameAsSub[0]);
    assertEqual(2, sub.length());
    }

    /**
     * Verify every iterates all elements on non-zero byteOffset view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_3800
     * @tc.name int32ArrayEveryPart03Test038
     * @tc.desc Verify every iterates all elements on non-zero byteOffset view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test038() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array view = new Int32Array(buf, 4, 2);
    view.set(0, 100);
    view.set(1, 200);
    int[] sum = {0};
    boolean r = view.every((e, i, a) -> {
        sum[0] += e;
        return e > 0;
    });
    assertTrue(r);
    assertEqual(300, sum[0]);
    }

    /**
     * Verify two views sharing buffer observe modifications through every
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_3900
     * @tc.name int32ArrayEveryPart03Test039
     * @tc.desc Verify two views sharing buffer observe modifications through every
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test039() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array a1 = new Int32Array(buf, 0, 3);
    Int32Array a2 = new Int32Array(buf, 0, 3);
    a1.set(0, 1);
    a1.set(1, 2);
    a1.set(2, 3);
    a1.every((e, i, a) -> {
    a.set(i, e * 10);
    return true;
    });
    assertEqualInt(10, a2.get(0));
    assertEqualInt(20, a2.get(1));
    assertEqualInt(30, a2.get(2));
    }

    /**
     * Verify Int32Array containing Double.NaN coerced to int matches zero
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_4300
     * @tc.name int32ArrayEveryPart03Test043
     * @tc.desc Verify Int32Array containing Double.NaN coerced to int matches zero
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test043() {
    Int32Array arr = Int32Array.of(Double.NaN);
    boolean r = arr.every((e, i, a) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify reentrant every on the same array counts nested calls
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_4500
     * @tc.name int32ArrayEveryPart03Test045
     * @tc.desc Verify reentrant every on the same array counts nested calls
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test045() {
    Int32Array arr = new Int32Array(new int[] {1, 2});
    int[] nestedCalls = {0};
    boolean r = arr.every((e, i, a) -> {
        nestedCalls[0]++;
        a.every((x, j, ar) -> {
            nestedCalls[0]++;
        return x > 0;
        });
        return e > 0;
    });
    assertTrue(r);
    assertEqual(6, nestedCalls[0]);
    }

    /**
     * Verify every returning false leaves length and byteLength unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_4600
     * @tc.name int32ArrayEveryPart03Test046
     * @tc.desc Verify every returning false leaves length and byteLength unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test046() {
    Int32Array arr = new Int32Array(new int[] {1, -2, 3});
    int beforeLen = arr.length();
    int beforeByteLen = arr.byteLength();
    arr.every((e, i, a) -> e > 0);
    assertEqual(beforeLen, arr.length());
    assertEqual(beforeByteLen, arr.byteLength());
    }

    /**
     * Verify accumulator in predicate reflects actual visits when all true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_4700
     * @tc.name int32ArrayEveryPart03Test047
     * @tc.desc Verify accumulator in predicate reflects actual visits when all true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test047() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    int[] acc = {0};
    boolean r = arr.every((e, i, a) -> {
        acc[0] += e;
        return true;
    });
    assertTrue(r);
    assertEqual(150, acc[0]);
    }

    /**
     * Verify zero elements with true predicate e===0 returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_4800
     * @tc.name int32ArrayEveryPart03Test048
     * @tc.desc Verify zero elements with true predicate e===0 returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test048() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0});
    boolean r = arr.every((e, i, a) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify Int32Array.from iterates all elements with predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_4900
     * @tc.name int32ArrayEveryPart03Test049
     * @tc.desc Verify Int32Array.from iterates all elements with predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test049() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3, 4);
    Int32Array arr = Int32Array.from(src);
    int[] cnt = {0};
    boolean r = arr.every((e, i, a) -> {
        cnt[0]++;
        return e > 0;
    });
    assertTrue(r);
    assertEqual(4, cnt[0]);
    }

    /**
     * Verify Int32Array.of with INT_MAX INT_MIN and zero within bounds
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_5000
     * @tc.name int32ArrayEveryPart03Test050
     * @tc.desc Verify Int32Array.of with INT_MAX INT_MIN and zero within bounds
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test050() {
    Int32Array arr = Int32Array.of(2147483647, Integer.MIN_VALUE, 0);
    boolean minMaxOk = arr.every((e, i, a) -> {
        return e >= Integer.MIN_VALUE && e <= 2147483647;
        });
    assertTrue(minMaxOk);
    }

    /**
     * Verify length 64 array all satisfying predicate called 64 times
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_5200
     * @tc.name int32ArrayEveryPart03Test052
     * @tc.desc Verify length 64 array all satisfying predicate called 64 times
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test052() {
    Int32Array arr = new Int32Array(64);
    int i = 0;
    for (; i < 64; i++) {
    arr.set(i, 1);
    }
    int[] calls = {0};
    boolean r = arr.every((e, idx, a) -> {
        calls[0]++;
        return e == 1;
    });
    assertTrue(r);
    assertEqual(64, calls[0]);
    }

    /**
     * Verify byteOffset and byteLength readable unchanged when predicate throws
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_5300
     * @tc.name int32ArrayEveryPart03Test053
     * @tc.desc Verify byteOffset and byteLength readable unchanged when predicate throws
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test053() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Int32Array arr = new Int32Array(buf, 8, 4);
    int[] bo = {-1};
    int[] bl = {-1};
    try {
    arr.every((e, i, a) -> {
    bo[0] = a.byteOffset();
    bl[0] = a.byteLength();
    return BasTest.throwTestError("stop");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("stop", e.getMessage());
    }
    assertEqual(8, bo[0]);
    assertEqual(16, bl[0]);
    }

    /**
     * Verify calling join inside predicate does not affect every result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_5400
     * @tc.name int32ArrayEveryPart03Test054
     * @tc.desc Verify calling join inside predicate does not affect every result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEveryPart03Test054() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    String[] joined = {""};
    boolean r = arr.every((e, i, a) -> {
        if (i == 0) {
            joined[0] = a.join();
        }
        return e > 0;
        });
    assertTrue(r);
    assertEqual("1,2,3", joined[0]);
    }

    /**
     * Verify length 2 array first element not satisfying returns false without second visit
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_EVERY_PART03_5600
     * @tc.name int32ArrayEveryPart03Test056
     * @tc.desc Verify length 2 array first element not satisfying returns false without second visit
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
