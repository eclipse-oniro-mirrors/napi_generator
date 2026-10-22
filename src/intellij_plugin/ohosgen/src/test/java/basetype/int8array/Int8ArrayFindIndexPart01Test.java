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
import basetype.common.TypeError;
import basetype.common.Error;

import java.util.ArrayList;
import java.util.List;
import java.util.LinkedHashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayFindIndexPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFindIndexPart01Test extends BasTest {

    private static final int INT8_MAX = 127;

    private static final int INT8_MIN = -128;

    static class StaticValueMatcher001 {
        StaticValueMatcher001() {
        }
    }

    static class ValueMatcher001 {
        /**
         * target 字段。
         */
        public final int target;

        ValueMatcher001(int target) {
            this.target = target;
    }
    }

    @Test
    void int8ArrayFindIndexPart01Test001() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return true;
        });
    assertEqual(0, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test002() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return false;
        });
    assertEqual(-1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test003() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == 10;
        });
    assertEqual(0, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test004() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == 30;
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test005() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == 20;
        });
    assertEqual(1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test006() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value > 15;
        });
    assertEqual(1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test007() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value > 100;
        });
    assertEqual(-1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test008() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int[] firstValue = {0};
    int rIdx = arr.findIndex((value, unusedIndex, unusedArray) -> {
        firstValue[0] = value;
        return true;
    });
    assertEqual(0, rIdx);
    assertEqual(10, firstValue[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test009() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int[] lastValue = {0};
    int rIdx = arr.findIndex((value, unusedIndex, unusedArray) -> {
        lastValue[0] = value;
        return value == 30;
    });
    assertEqual(2, rIdx);
    assertEqual(30, lastValue[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test010() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    List<Integer> visited = new ArrayList<>();
    int rIdx = arr.findIndex((value, unusedIndex, unusedArray) -> {
        visited.add(value);
        return false;
    });
    assertEqual(-1, rIdx);
    assertEqual(3, visited.size());
    assertEqualInt(10, visited.get(0));
    assertEqualInt(30, visited.get(2));
    }

    @Test
    void int8ArrayFindIndexPart01Test011() {
    Int8Array arr = new Int8Array(3);
    arr.set(1, 200);
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == -56;
        });
    assertEqual(1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test012() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int[] firstIndex = {-1};
    int rIdx = arr.findIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
            firstIndex[0] = index;
        return true;
        });
    assertEqual(0, rIdx);
    assertEqual(0, firstIndex[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test013() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int[] lastIndex = {-1};
    int rIdx = arr.findIndex((value, index, unusedArray) -> {
        lastIndex[0] = index;
        return value == 30;
    });
    assertEqual(2, rIdx);
    assertEqual(2, lastIndex[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test014() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    List<Integer> indices = new ArrayList<>();
    int rIdx = arr.findIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
            indices.add(index);
        return false;
        });
    assertEqual(-1, rIdx);
    assertEqualInt(0, indices.get(0));
    assertEqualInt(1, indices.get(1));
    assertEqualInt(2, indices.get(2));
    }

    @Test
    void int8ArrayFindIndexPart01Test015() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int[] maxIndex = {-1};
    int result = arr.findIndex((value, index, unusedArray) -> {
        maxIndex[0] = index;
        return value == 30;
    });
    assertEqual(2, maxIndex[0]);
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test016() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int[] outOfRange = {0};
    int rIdx = arr.findIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
    if (index < 0 || index >= arr.length()) {
            outOfRange[0] = outOfRange[0] + 1;
    }
        return false;
        });
    assertEqual(-1, rIdx);
    assertEqual(0, outOfRange[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test017() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Int8Array[] capturedArray = {new Int8Array(1)};
    int rIdx = arr.findIndex((value, unusedIndex, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
            capturedArray[0] = array;
        return true;
        });
    assertEqual(0, rIdx);
    int r1 = capturedArray[0].length();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    @Test
    void int8ArrayFindIndexPart01Test018() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int[] capturedLength = {0};
    int rIdx = arr.findIndex((value, unusedIndex, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
            capturedLength[0] = array.length();
        return true;
        });
    assertEqual(0, rIdx);
    assertEqual(3, capturedLength[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test019() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int[] mismatchCount = {0};
    int rIdx = arr.findIndex((value, index, array) -> {
        if (array.get(index) != value) {
            mismatchCount[0] = mismatchCount[0] + 1;
    }
        return false;
        });
    assertEqual(-1, rIdx);
    assertEqual(0, mismatchCount[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test020() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    boolean[] isInstance = {false};
    int rIdx = arr.findIndex((value, unusedIndex, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
            isInstance[0] = array.BYTES_PER_ELEMENT == 1;
        return true;
        });
    assertEqual(0, rIdx);
    assertTrue(isInstance[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test022() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int[] callCount = {0};
    int rIdx = arr.findIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
            callCount[0] = callCount[0] + 1;
        return false;
        });
    assertEqual(-1, rIdx);
    assertEqual(3, callCount[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test023() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int[] callCount = {0};
    int rIdx = arr.findIndex((value, unusedIndex, unusedArray) -> {
        callCount[0] = callCount[0] + 1;
        return value == 10;
    });
    assertEqual(0, rIdx);
    assertEqual(1, callCount[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test024() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int[] callCount = {0};
    int rIdx = arr.findIndex((value, unusedIndex, unusedArray) -> {
        callCount[0] = callCount[0] + 1;
        return value == 30;
    });
    assertEqual(2, rIdx);
    assertEqual(3, callCount[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test025() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    int[] callCount = {0};
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        callCount[0] = callCount[0] + 1;
        return value == 40;
    });
    assertEqual(3, result);
    assertEqual(4, callCount[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test026() {
    Int8Array arr = new Int8Array(0);
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return true;
        });
    assertEqual(-1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test027() {
    Int8Array arr = new Int8Array(0);
    int[] callCount = {0};
    int rIdx = arr.findIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
            callCount[0] = callCount[0] + 1;
        return true;
        });
    assertEqual(-1, rIdx);
    assertEqual(0, callCount[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test028() {
    Int8Array arr = new Int8Array(new int[] {42});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == 42;
        });
    assertEqual(0, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test029() {
    Int8Array arr = new Int8Array(new int[] {42});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == 99;
        });
    assertEqual(-1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test030() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    int rIdx = arr.findIndex((value, unusedIndex, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    return BasTest.throwTestError("callback error");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    @Test
    void int8ArrayFindIndexPart01Test031() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    int rIdx = arr.findIndex((value, index, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    if (index == 1) {
    throw new RangeError("range error");
    }
    return false;
    });
    assertEqual(-1, rIdx);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void int8ArrayFindIndexPart01Test032() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    int rIdx = arr.findIndex((value, unusedIndex, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    throw new TypeError("type error");
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void int8ArrayFindIndexPart01Test034() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int[] callCount = {0};
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        callCount[0] = callCount[0] + 1;
        return value == 10;
    });
    assertEqual(0, result);
    assertEqual(1, callCount[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test035() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int[] callCount = {0};
    try {
    int rIdx = arr.findIndex((value, index, unusedArray) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    callCount[0] = callCount[0] + 1;
    if (index == 1) {
    return BasTest.throwTestError("stop");
    }
    return false;
    });
    assertEqual(-1, rIdx);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(2, callCount[0]);
    }
    }

    @Test
    void int8ArrayFindIndexPart01Test036() {
    int target = 20;
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == target;
        });
    assertEqual(1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test037() {
    int[] counter = {0};
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int rIdx = arr.findIndex((value, unusedIndex, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
            counter[0] = counter[0] + 1;
        return false;
        });
    assertEqual(-1, rIdx);
    assertEqual(3, counter[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test039() {
    Set<Integer> targetSet = new LinkedHashSet<>();
    targetSet.add(30);
    targetSet.add(50);
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return targetSet.contains(value);
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test040() {
    int targetIndex = 2;
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int result = arr.findIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return index == targetIndex;
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test041() {
    int[] sum = {0};
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int rIdx = arr.findIndex((value, unusedIndex, unusedArray) -> {
        sum[0] = sum[0] + value;
        return false;
    });
    assertEqual(-1, rIdx);
    assertEqual(60, sum[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test042() {
    List<Integer> positiveIndices = new ArrayList<>();
    Int8Array arr = new Int8Array(new int[] {-10, 20, -30, 40});
    int rIdx = arr.findIndex((value, index, unusedArray) -> {
        if (value > 0) {
            positiveIndices.add(index);
    }
        return value > 100;
        });
    assertEqual(-1, rIdx);
    assertEqual(2, positiveIndices.size());
    assertEqualInt(1, positiveIndices.get(0));
    assertEqualInt(3, positiveIndices.get(1));
    }

    @Test
    void int8ArrayFindIndexPart01Test043() {
    boolean[] foundPositive = {false};
    Int8Array arr = new Int8Array(new int[] {-10, -20, 5, -30});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        if (value > 0) {
            foundPositive[0] = true;
        return true;
    }
        return false;
        });
    assertEqual(2, result);
    assertTrue(foundPositive[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test044() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    List<Integer> visited = new ArrayList<>();
    int rIdx = arr.findIndex((value, index, array) -> {
        if (index == 0) {
            array.set(2, 99);
    }
            visited.add(value);
        return false;
        });
    assertEqual(-1, rIdx);
    assertEqualInt(99, visited.get(2));
    }

    @Test
    void int8ArrayFindIndexPart01Test045() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int[] firstValue = {0};
    int rIdx = arr.findIndex((value, index, array) -> {
        if (index == 0) {
            firstValue[0] = value;
        array.set(0, 99);
    }
        return false;
        });
    assertEqual(-1, rIdx);
    assertEqual(10, firstValue[0]);
    assertEqualInt(99, arr.get(0));
    }

    @Test
    void int8ArrayFindIndexPart01Test046() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int rIdx = arr.findIndex((value, index, unusedArray) -> {
        arr.set(index, value + 1);
        return false;
    });
    assertEqual(-1, rIdx);
    assertEqualInt(11, arr.get(0));
    assertEqualInt(31, arr.get(2));
    }

    @Test
    void int8ArrayFindIndexPart01Test047() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> value == 20);
    assertEqual(1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test048() {
    Int8Array.Int8ArrayFinder isValueTwenty = (value, index, array) -> {
        return value == 20;
        };
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.findIndex(isValueTwenty);
    assertEqual(1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test051() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, INT8_MAX});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == -128;
        });
    assertEqual(0, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test052() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, INT8_MAX});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == INT8_MAX;
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test053() {
    Int8Array arr = new Int8Array(new int[] {-1, 0, 1});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == 0;
        });
    assertEqual(1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test054() {
    Int8Array arr = new Int8Array(new int[] {0, -1, 1});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == -1;
        });
    assertEqual(1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test055() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, 128);
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == -128;
        });
    assertEqual(0, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test056() {
    Int8Array arr = new Int8Array(3);
    arr.set(2, 255);
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == -1;
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test057() {
    Int8Array arr = new Int8Array(new int[] {42, 42, 42});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == 42;
        });
    assertEqual(0, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test058() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, -128, 0});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == -128;
        });
    assertEqual(1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test059() {
    Int8Array arr = new Int8Array(new int[] {-1, 0, 5, -3});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value > 0;
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test060() {
    Int8Array arr = new Int8Array(new int[] {0, 5, -3, 2});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value < 0;
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test061() {
    Int8Array arr = new Int8Array(new int[] {5, 3, 0, -1});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == 0;
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test062() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 5, 0});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value != 0;
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test063() {
    Int8Array arr = new Int8Array(new int[] {1, 50, 100, INT8_MAX});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value >= 100;
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test064() {
    Int8Array arr = new Int8Array(new int[] {-1, -50, -100, -128});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value <= -100;
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test065() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return index == array.length() - 1;
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test066() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int result = arr.findIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return index % 2 == 0;
        });
    assertEqual(0, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test067() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return index > 0;
        });
    assertEqual(1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test068() {
    Int8Array arr = new Int8Array(3);
    arr.set(0, 0xff);
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == -1;
        });
    assertEqual(0, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test069() {
    Int8Array arr = new Int8Array(new int[] {0, INT8_MAX, -128});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == 0x7f;
        });
    assertEqual(1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test070() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int first = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == 20;
        });
    int second = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == 30;
        });
    assertEqual(1, first);
    assertEqual(2, second);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(30, arr.get(2));
    }

    @Test
    void int8ArrayFindIndexPart01Test071() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int byValue = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == 10;
        });
    int byIndex = arr.findIndex((value, index, unusedArray) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
    }
        return index == 2;
        });
    assertEqual(0, byValue);
    assertEqual(2, byIndex);
    }

    @Test
    void int8ArrayFindIndexPart01Test074() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 20});
    int result = arr.findIndex((value, index, unusedArray) -> {
        return value == 20 && index == 3;
        });
    assertEqual(3, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test075() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.findIndex((value, index, array) -> {
        return index == array.length() - 1 && value == 50;
        });
    assertEqual(4, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test076() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, INT8_MAX});
    int[] outOfRange = {0};
    int rIdx = arr.findIndex((value, unusedIndex, unusedArray) -> {
        if (value < -128 || value > INT8_MAX) {
            outOfRange[0] = outOfRange[0] + 1;
    }
        return false;
        });
    assertEqual(-1, rIdx);
    assertEqual(0, outOfRange[0]);
    }

    @Test
    void int8ArrayFindIndexPart01Test077() {
    Int8Array arr = new Int8Array(new int[] {10, -50, 30});
    int firstNegative = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value < 0;
        });
    assertEqual(1, firstNegative);
    }

    @Test
    void int8ArrayFindIndexPart01Test078() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == 20;
        });
    assertEqual(1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test079() {
    List<Integer> source = java.util.Arrays.asList(10, 20, 30);
    Int8Array arr = Int8Array.from(source);
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == 30;
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test080() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((value, index, unusedArray) -> {
        return index == 0 ? value == 10 : value == 30;
        });
    assertEqual(0, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test081() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value < 20 ? false : value == 30;
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test082() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value == 99 || value == 20;
        });
    assertEqual(1, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test083() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int result = arr.findIndex((value, index, unusedArray) -> {
        return value > 15 && index >= 2;
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test084() {
    Int8Array arr = new Int8Array(new int[] {10, 10, 20});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return !(value == 10);
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test085() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((value, index, unusedArray) -> {
        return !(index < 2) && value == 30;
        });
    assertEqual(2, result);
    }

    @Test
    void int8ArrayFindIndexPart01Test086() {
    int threshold = 25;
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((value, unusedIndex, unusedArray) -> {
        return value > threshold;
        });
    assertEqual(2, result);
    }
}
