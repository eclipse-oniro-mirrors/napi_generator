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

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFilterPart01Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFilterPart01Test extends BasTest {
    /**
     * Verify arity=1 filter with valid callback executes without error
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_0100
     * @tc.name int32ArrayFilterPart01Test001
     * @tc.desc Verify arity=1 filter with valid callback executes without error
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test001() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array res = arr.filter((val, index, array) -> val > 0);
    assertEqual(3, res.length());
    assertEqualInt(1, res.get(0));
    assertEqualInt(2, res.get(1));
    assertEqualInt(3, res.get(2));
    }

    /**
     * Verify callback returning constant false yields empty array length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_0200
     * @tc.name int32ArrayFilterPart01Test002
     * @tc.desc Verify callback returning constant false yields empty array length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test002() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array res = arr.filter((val, index, array) -> false);
    assertEqual(0, res.length());
    }

    /**
     * Verify callback returning constant true keeps every element in result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_0300
     * @tc.name int32ArrayFilterPart01Test003
     * @tc.desc Verify callback returning constant true keeps every element in result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test003() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    Int32Array res = arr.filter((val, index, array) -> true);
    assertEqual(3, res.length());
    assertEqualInt(10, res.get(0));
    assertEqualInt(20, res.get(1));
    assertEqualInt(30, res.get(2));
    }

    /**
     * Verify first callback parameter val receives the correct number value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_0400
     * @tc.name int32ArrayFilterPart01Test004
     * @tc.desc Verify first callback parameter val receives the correct number value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test004() {
    Int32Array arr = Int32Array.of(42);
    int[] observed = {0};
    arr.filter((val, index, array) -> {
    observed[0] = val;
    return true;
    });
    assertEqual(42, observed[0]);
    }

    /**
     * Verify second callback parameter index starts at 0 for first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_0600
     * @tc.name int32ArrayFilterPart01Test006
     * @tc.desc Verify second callback parameter index starts at 0 for first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test006() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    int[] firstIndex = {-1};
    arr.filter((val, index, array) -> {
    if (firstIndex[0] == -1) {
    firstIndex[0] = index;
    }
    return true;
    });
    assertEqual(0, firstIndex[0]);
    }

    /**
     * Verify second callback parameter index equals length-1 for last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_0700
     * @tc.name int32ArrayFilterPart01Test007
     * @tc.desc Verify second callback parameter index equals length-1 for last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test007() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    int[] lastIndex = {-1};
    arr.filter((val, index, array) -> {
    lastIndex[0] = index;
    return true;
    });
    assertEqual(2, lastIndex[0]);
    }

    /**
     * Verify third callback parameter array refers to the same Int32Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_0900
     * @tc.name int32ArrayFilterPart01Test009
     * @tc.desc Verify third callback parameter array refers to the same Int32Array instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test009() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    boolean[] sameRef = {false};
    arr.filter((val, index, array) -> {
    sameRef[0] = (array == arr);
    return true;
    });
    assertTrue(sameRef[0]);
    }

    /**
     * Verify third callback parameter array.length matches original length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_1000
     * @tc.name int32ArrayFilterPart01Test010
     * @tc.desc Verify third callback parameter array.length matches original length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test010() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    int[] observedLen = {0};
    arr.filter((val, index, array) -> {
    observedLen[0] = array.length();
    return true;
    });
    assertEqual(5, observedLen[0]);
    }

    /**
     * Verify third callback parameter array is an instance of Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_1100
     * @tc.name int32ArrayFilterPart01Test011
     * @tc.desc Verify third callback parameter array is an instance of Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test011() {
    Int32Array arr = Int32Array.of(1);
    boolean[] sameRef = {false};
    arr.filter((val, index, array) -> {
    sameRef[0] = (array == arr);
    return true;
    });
    assertTrue(sameRef[0]);
    }

    /**
     * Verify predicate val == 0 selects zero-valued elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_1500
     * @tc.name int32ArrayFilterPart01Test015
     * @tc.desc Verify predicate val == 0 selects zero-valued elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test015() {
    Int32Array arr = Int32Array.of(-1, 0, 1, 0, -3);
    Int32Array res = arr.filter((val, index, array) -> val == 0);
    assertEqual(2, res.length());
    assertEqualInt(0, res.get(0));
    assertEqualInt(0, res.get(1));
    }

    /**
     * Verify predicate val == 1 selects elements equal to 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_1800
     * @tc.name int32ArrayFilterPart01Test018
     * @tc.desc Verify predicate val == 1 selects elements equal to 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test018() {
    Int32Array arr = Int32Array.of(1, -1, 0, 10, 1);
    Int32Array res = arr.filter((val, index, array) -> val == 1);
    assertEqual(2, res.length());
    assertEqualInt(1, res.get(0));
    assertEqualInt(1, res.get(1));
    }

    /**
     * Verify predicate val % 2 == 0 selects even-valued elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_2000
     * @tc.name int32ArrayFilterPart01Test020
     * @tc.desc Verify predicate val % 2 == 0 selects even-valued elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test020() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5, 6);
    Int32Array res = arr.filter((val, index, array) -> val % 2 == 0);
    assertEqual(3, res.length());
    assertEqualInt(2, res.get(0));
    assertEqualInt(4, res.get(1));
    assertEqualInt(6, res.get(2));
    }

    /**
     * Verify predicate val > 1 selects elements greater than threshold matching spec example
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_2400
     * @tc.name int32ArrayFilterPart01Test024
     * @tc.desc Verify predicate val > 1 selects elements greater than threshold matching spec example
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test024() {
    Int32Array arr = Int32Array.of(3, 1, 2);
    Int32Array res = arr.filter((val, index, array) -> val > 1);
    assertEqual(2, res.length());
    assertEqualInt(3, res.get(0));
    assertEqualInt(2, res.get(1));
    }

    /**
     * Verify predicate val !== val Number.NaN check yields empty result on Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_2600
     * @tc.name int32ArrayFilterPart01Test026
     * @tc.desc Verify predicate val !== val Number.NaN check yields empty result on Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test026() {
    Int32Array arr = Int32Array.of(0, 1, -1, 2147483647);
    Int32Array res = arr.filter((val, index, array) -> val != val);
    assertEqual(0, res.length());
    }

    /**
     * Verify predicate val > val always false yields empty result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_2800
     * @tc.name int32ArrayFilterPart01Test028
     * @tc.desc Verify predicate val > val always false yields empty result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test028() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array res = arr.filter((val, index, array) -> val > val);
    assertEqual(0, res.length());
    }

    /**
     * Verify predicate index == 0 selects only the first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_3000
     * @tc.name int32ArrayFilterPart01Test030
     * @tc.desc Verify predicate index == 0 selects only the first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test030() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40);
    Int32Array res = arr.filter((val, index, array) -> index == 0);
    assertEqual(1, res.length());
    assertEqualInt(10, res.get(0));
    }

    /**
     * Verify predicate index == array.length - 1 selects only the last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_3100
     * @tc.name int32ArrayFilterPart01Test031
     * @tc.desc Verify predicate index == array.length - 1 selects only the last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test031() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40);
    Int32Array res = arr.filter((val, index, array) -> index == array.length() - 1);
    assertEqual(1, res.length());
    assertEqualInt(40, res.get(0));
    }

    /**
     * Verify predicate index % 2 == 0 selects even-positioned elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_3200
     * @tc.name int32ArrayFilterPart01Test032
     * @tc.desc Verify predicate index % 2 == 0 selects even-positioned elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test032() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40, 50);
    Int32Array res = arr.filter((val, index, array) -> index % 2 == 0);
    assertEqual(3, res.length());
    assertEqualInt(10, res.get(0));
    assertEqualInt(30, res.get(1));
    assertEqualInt(50, res.get(2));
    }

    /**
     * Verify predicate index % 2 == 1 selects odd-positioned elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_3300
     * @tc.name int32ArrayFilterPart01Test033
     * @tc.desc Verify predicate index % 2 == 1 selects odd-positioned elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test033() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40, 50);
    Int32Array res = arr.filter((val, index, array) -> index % 2 == 1);
    assertEqual(2, res.length());
    assertEqualInt(20, res.get(0));
    assertEqualInt(40, res.get(1));
    }

    /**
     * Verify predicate index < 2 selects the first two elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_3400
     * @tc.name int32ArrayFilterPart01Test034
     * @tc.desc Verify predicate index < 2 selects the first two elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test034() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40);
    Int32Array res = arr.filter((val, index, array) -> index < 2);
    assertEqual(2, res.length());
    assertEqualInt(10, res.get(0));
    assertEqualInt(20, res.get(1));
    }

    /**
     * Verify predicate index > 0 excludes the first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_3500
     * @tc.name int32ArrayFilterPart01Test035
     * @tc.desc Verify predicate index > 0 excludes the first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test035() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    Int32Array res = arr.filter((val, index, array) -> index > 0);
    assertEqual(2, res.length());
    assertEqualInt(20, res.get(0));
    assertEqualInt(30, res.get(1));
    }

    /**
     * Verify predicate index == 2 selects the specified middle element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_3600
     * @tc.name int32ArrayFilterPart01Test036
     * @tc.desc Verify predicate index == 2 selects the specified middle element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test036() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40, 50);
    Int32Array res = arr.filter((val, index, array) -> index == 2);
    assertEqual(1, res.length());
    assertEqualInt(30, res.get(0));
    }

    /**
     * Verify predicate val > index returns empty on array where val strictly equals index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_3700
     * @tc.name int32ArrayFilterPart01Test037
     * @tc.desc Verify predicate val > index returns empty on array where val strictly equals index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test037() {
    Int32Array arr = Int32Array.of(0, 1, 2, 3, 4);
    Int32Array res = arr.filter((val, index, array) -> val > index);
    assertEqual(0, res.length());
    }

    /**
     * Verify predicate val > index keeps all elements when values grow faster than index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_3800
     * @tc.name int32ArrayFilterPart01Test038
     * @tc.desc Verify predicate val > index keeps all elements when values grow faster than index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test038() {
    Int32Array arr = Int32Array.of(10, 20, 30);
    Int32Array res = arr.filter((val, index, array) -> val > index);
    assertEqual(3, res.length());
    assertEqualInt(10, res.get(0));
    assertEqualInt(20, res.get(1));
    assertEqualInt(30, res.get(2));
    }

    /**
     * Verify negative fraction -0.9 is truncated to 0 by ToInt32 observable in callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_3900
     * @tc.name int32ArrayFilterPart01Test039
     * @tc.desc Verify negative fraction -0.9 is truncated to 0 by ToInt32 observable in callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test039() {
    Int32Array arr = new Int32Array(1);
    arr.set(0, -0.9);
    int[] seen = {999};
    arr.filter((val, index, array) -> {
    seen[0] = val;
    return true;
    });
    assertEqual(0, seen[0]);
    }

    /**
     * Verify 4294967296.0 written via $_set is converted to 0 by ToUint32/ToInt32
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_4400
     * @tc.name int32ArrayFilterPart01Test044
     * @tc.desc Verify 4294967296.0 written via $_set is converted to 0 by ToUint32/ToInt32
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test044() {
    Int32Array arr = new Int32Array(1);
    arr.set(0, 4294967296.0);
    int[] seen = {-1};
    arr.filter((val, index, array) -> {
    seen[0] = val;
    return true;
    });
    assertEqual(0, seen[0]);
    }

    /**
     * Verify 4294967297.0 written via $_set wraps to 1 observable in callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_4500
     * @tc.name int32ArrayFilterPart01Test045
     * @tc.desc Verify 4294967297.0 written via $_set wraps to 1 observable in callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test045() {
    Int32Array arr = new Int32Array(1);
    arr.set(0, 4294967297.0);
    int[] seen = {0};
    arr.filter((val, index, array) -> {
    seen[0] = val;
    return true;
    });
    assertEqual(1, seen[0]);
    }

    /**
     * Verify hex literal 0xFF (=255) is correctly observed as 255 in callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_4800
     * @tc.name int32ArrayFilterPart01Test048
     * @tc.desc Verify hex literal 0xFF (=255) is correctly observed as 255 in callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test048() {
    Int32Array arr = Int32Array.of(0xFF);
    int[] seen = {0};
    arr.filter((val, index, array) -> {
    seen[0] = val;
    return true;
    });
    assertEqual(255, seen[0]);
    }

    /**
     * Verify octal literal 0o77 (=63) is correctly observed as 63 in callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_4900
     * @tc.name int32ArrayFilterPart01Test049
     * @tc.desc Verify octal literal 0o77 (=63) is correctly observed as 63 in callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test049() {
    Int32Array arr = Int32Array.of(077);
    int[] seen = {0};
    arr.filter((val, index, array) -> {
    seen[0] = val;
    return true;
    });
    assertEqual(63, seen[0]);
    }

    /**
     * Verify binary literal 0b1010 (=10) is correctly observed as 10 in callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_5000
     * @tc.name int32ArrayFilterPart01Test050
     * @tc.desc Verify binary literal 0b1010 (=10) is correctly observed as 10 in callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test050() {
    Int32Array arr = Int32Array.of(0b1010);
    int[] seen = {0};
    arr.filter((val, index, array) -> {
    seen[0] = val;
    return true;
    });
    assertEqual(10, seen[0]);
    }

    /**
     * Verify callback uses array.at for cross-checking val parameter consistency
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_5100
     * @tc.name int32ArrayFilterPart01Test051
     * @tc.desc Verify callback uses array.at for cross-checking val parameter consistency
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test051() {
    Int32Array arr = Int32Array.of(5, 6, 7);
    boolean[] allMatch = {true};
    arr.filter((val, index, array) -> {
        Integer viaAt = array.at(index);
        if (viaAt == null || viaAt != val) {
    allMatch[0] = false;
    }
    return true;
    });
    assertTrue(allMatch[0]);
    }

    /**
     * Verify callback reads next element via array.at to detect strictly increasing pairs
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_5200
     * @tc.name int32ArrayFilterPart01Test052
     * @tc.desc Verify callback reads next element via array.at to detect strictly increasing pairs
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test052() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    Int32Array res = arr.filter((val, index, array) -> {
        if (index < array.length() - 1) {
            Integer next = array.at(index + 1);
        return next != null && next > val;
        }
        return false;
        });
    assertEqual(3, res.length());
    assertEqualInt(1, res.get(0));
    assertEqualInt(2, res.get(1));
    assertEqualInt(3, res.get(2));
    }

    /**
     * Verify callback reads first element via array.at as comparison threshold
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_5300
     * @tc.name int32ArrayFilterPart01Test053
     * @tc.desc Verify callback reads first element via array.at as comparison threshold
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test053() {
    Int32Array arr = Int32Array.of(3, 1, 4, 1, 5, 9);
    Int32Array res = arr.filter((val, index, array) -> {
        Integer first = array.at(0);
        return first != null && val > first;
    });
    assertEqual(3, res.length());
    assertEqualInt(4, res.get(0));
    assertEqualInt(5, res.get(1));
    assertEqualInt(9, res.get(2));
    }

    /**
     * Verify callback captures outer const threshold variable to do filtering
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_5400
     * @tc.name int32ArrayFilterPart01Test054
     * @tc.desc Verify callback captures outer const threshold variable to do filtering
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test054() {
    int threshold = 5;
    Int32Array arr = Int32Array.of(2, 6, 3, 8, 5, 9);
    Int32Array res = arr.filter((val, index, array) -> val > threshold);
    assertEqual(3, res.length());
    assertEqualInt(6, res.get(0));
    assertEqualInt(8, res.get(1));
    assertEqualInt(9, res.get(2));
    }

    /**
     * Verify all-equal elements with matching predicate return equal-length result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_6800
     * @tc.name int32ArrayFilterPart01Test068
     * @tc.desc Verify all-equal elements with matching predicate return equal-length result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test068() {
    Int32Array arr = Int32Array.of(7, 7, 7, 7);
    Int32Array res = arr.filter((val, index, array) -> val == 7);
    assertEqual(4, res.length());
    assertEqualInt(7, res.get(0));
    assertEqualInt(7, res.get(3));
    }

    /**
     * Verify all-equal elements with non-matching predicate return empty result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_6900
     * @tc.name int32ArrayFilterPart01Test069
     * @tc.desc Verify all-equal elements with non-matching predicate return empty result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test069() {
    Int32Array arr = Int32Array.of(7, 7, 7);
    Int32Array res = arr.filter((val, index, array) -> val == 0);
    assertEqual(0, res.length());
    }

    /**
     * Verify filter on Int32Array view over ArrayBuffer receives correct val in callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_7100
     * @tc.name int32ArrayFilterPart01Test071
     * @tc.desc Verify filter on Int32Array view over ArrayBuffer receives correct val in callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test071() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array view = new Int32Array(buf);
    view.set(0, 11);
    view.set(1, 22);
    view.set(2, 33);
    Int32Array res = view.filter((val, unusedIndex, unusedArray) -> val > 20);
    assertEqual(2, res.length());
    assertEqualInt(22, res.get(0));
    assertEqualInt(33, res.get(1));
    }

    /**
     * Verify predicate val > index mixes int/number comparison types correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILTER_PART01_TEST_7300
     * @tc.name int32ArrayFilterPart01Test073
     * @tc.desc Verify predicate val > index mixes int/number comparison types correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFilterPart01Test073() {
    Int32Array arr = Int32Array.of(0, 5, 1, 5, 2);
    Int32Array res = arr.filter((val, index, unusedArray) -> val > index);
    assertEqual(2, res.length());
    assertEqualInt(5, res.get(0));
    assertEqualInt(5, res.get(1));
    }
}
