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
import basetype.common.Error;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayForEachPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayForEachPart01Test extends BasTest {

    private static final int INT8_MAX = 127;

    private static final int INT8_MIN = -128;

    static class Accumulator {
        int total;
        int count;

        Accumulator(int total, int count) {
            this.total = total;
            this.count = count;
        }
    }

    @Test
    void int8ArrayForEachPart01Test002() {
    Int8Array arr = new Int8Array(new int[] {0});
    int[] received = {999};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    received[0] = value;
    });
    assertEqual(0, received[0]);
    }

    @Test
    void int8ArrayForEachPart01Test003() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX});
    int[] received = {999};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    received[0] = value;
    });
    assertEqual(INT8_MAX, received[0]);
    }

    @Test
    void int8ArrayForEachPart01Test004() {
    Int8Array arr = new Int8Array(new int[] {-128});
    int[] received = {999};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    received[0] = value;
    });
    assertEqual(-128, received[0]);
    }

    @Test
    void int8ArrayForEachPart01Test005() {
    Int8Array arr = new Int8Array(new int[] {-1});
    int[] received = {999};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    received[0] = value;
    });
    assertEqual(-1, received[0]);
    }

    @Test
    void int8ArrayForEachPart01Test006() {
    Int8Array arr = new Int8Array(new int[] {128});
    int[] received = {0};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    received[0] = value;
    });
    assertEqual(-128, received[0]);
    }

    @Test
    void int8ArrayForEachPart01Test007() {
    Int8Array arr = new Int8Array(new int[] {-129});
    int[] received = {0};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    received[0] = value;
    });
    assertEqual(INT8_MAX, received[0]);
    }

    @Test
    void int8ArrayForEachPart01Test008() {
    Int8Array arr = new Int8Array(new int[] {255});
    int[] received = {0};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    received[0] = value;
    });
    assertEqual(-1, received[0]);
    }

    @Test
    void int8ArrayForEachPart01Test009() {
    Int8Array arr = new Int8Array(new int[] {256});
    int[] received = {999};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    received[0] = value;
    });
    assertEqual(0, received[0]);
    }

    @Test
    void int8ArrayForEachPart01Test010() {
    Int8Array arr = new Int8Array(new double[] {Double.NaN});
    int[] received = {999};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    received[0] = value;
    });
    assertEqual(0, received[0]);
    }

    @Test
    void int8ArrayForEachPart01Test011() {
    Int8Array arr = new Int8Array(new double[] {1.9});
    int[] received = {0};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    received[0] = value;
    });
    assertEqual(1, received[0]);
    }

    @Test
    void int8ArrayForEachPart01Test012() {
    Int8Array arr = new Int8Array(new double[] {-1.9});
    int[] received = {0};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    received[0] = value;
    });
    assertEqual(-1, received[0]);
    }

    @Test
    void int8ArrayForEachPart01Test013() {
    Int8Array arr = new Int8Array(new double[] {-0.0});
    int[] received = {999};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    received[0] = value;
    });
    assertEqual(0, received[0]);
    }

    @Test
    void int8ArrayForEachPart01Test018() {
    Int8Array arr = new Int8Array(new int[] {100, 110, 120});
    List<Integer> pairs = new ArrayList<>();
    arr.forEach((value, index, unusedArray) -> {
    pairs.add(value - index);
    });
    assertEqualInt(100, pairs.get(0));
    assertEqualInt(109, pairs.get(1));
    assertEqualInt(118, pairs.get(2));
    }

    @Test
    void int8ArrayForEachPart01Test030() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] sum = {0};
    Object result = null;
    arr.forEach((value, unusedIndex, unusedArray) -> {
        sum[0] = sum[0] + value;
    });
    assertEqual(6, sum[0]);
    assertNull(result);
    }

    @Test
    void int8ArrayForEachPart01Test031() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    int[] count = {0};
    Int8Array.Int8ArrayConsumer returningCb = (value, unusedIndex, unusedArray) -> {
        count[0] = count[0] + 1;
    };
    arr.forEach(returningCb);
    assertEqual(4, count[0]);
    }

    @Test
    void int8ArrayForEachPart01Test037() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int[] sum = {0};
    try {
    arr.forEach((value, index, unusedArray) -> {
    if (index == 2) {
    BasTest.throwTestError("middle");
    }
    sum[0] = sum[0] + value;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(30, sum[0]);
    }
    }

    @Test
    void int8ArrayForEachPart01Test039() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    List<Integer> collected = new ArrayList<>();
    try {
    arr.forEach((value, index, unusedArray) -> {
        collected.add(value);
        if (index == 1) {
    BasTest.throwTestError("partial");
    }
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(2, collected.size());
    assertEqualInt(1, collected.get(0));
    assertEqualInt(2, collected.get(1));
    }
    }

    @Test
    void int8ArrayForEachPart01Test040() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    List<Integer> processed = new ArrayList<>();
    try {
    arr.forEach((value, index, unusedArray) -> {
    if (index == 1) {
    BasTest.throwTestError("stop");
    }
    processed.add(value);
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(1, processed.size());
    }
    }

    @Test
    void int8ArrayForEachPart01Test041() {
    Int8Array arr = new Int8Array(new int[] {10, 20});
    String[] result = {""};
    arr.forEach((value, index, array) -> {
    result[0] = result[0] + value + "," + index + "," + array.length() + ";";
    });
    assertEqual("10,0,2;20,1,2;", result[0]);
    }

    @Test
    void int8ArrayForEachPart01Test042() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] sum = {0};
    arr.forEach((value) -> {
    sum[0] = sum[0] + value;
    });
    assertEqual(6, sum[0]);
    }

    @Test
    void int8ArrayForEachPart01Test043() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    int[] count = {0};
    arr.forEach((index) -> {
    count[0] = count[0] + 1;
    });
    assertEqual(4, count[0]);
    }

    @Test
    void int8ArrayForEachPart01Test044() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int multiplier = 10;
    List<Integer> results = new ArrayList<>();
    arr.forEach((value, unusedIndex, unusedArray) -> {
    results.add(value * multiplier);
    });
    assertEqualInt(10, results.get(0));
    assertEqualInt(20, results.get(1));
    assertEqualInt(30, results.get(2));
    }

    @Test
    void int8ArrayForEachPart01Test045() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    List<Integer> collected = new ArrayList<>();
    Int8Array.Int8ArrayConsumer callback = (v, i, a) -> {
        collected.add(v);
    };
    arr.forEach(callback);
    assertEqual(3, collected.size());
    assertEqualInt(1, collected.get(0));
    assertEqualInt(3, collected.get(2));
    }

    @Test
    void int8ArrayForEachPart01Test046() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int threshold = 2;
    int[] aboveThreshold = {0};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    if (value > threshold) {
    aboveThreshold[0] = aboveThreshold[0] + 1;
    }
    });
    assertEqual(1, aboveThreshold[0]);
    }

    @Test
    void int8ArrayForEachPart01Test047() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int[] sum = {0};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    sum[0] = sum[0] + value;
    });
    assertEqual(100, sum[0]);
    }

    @Test
    void int8ArrayForEachPart01Test048() {
    Int8Array arr = new Int8Array(new int[] {5, 6, 7, 8});
    List<Integer> collected = new ArrayList<>();
    arr.forEach((value, unusedIndex, unusedArray) -> {
    collected.add(value);
    });
    assertEqual(4, collected.size());
    assertEqualInt(5, collected.get(0));
    assertEqualInt(8, collected.get(3));
    }

    @Test
    void int8ArrayForEachPart01Test050() {
    Int8Array arr = new Int8Array(new int[] {11, 22, 33});
    int[] first = {0};
    arr.forEach((value, index, unusedArray) -> {
    if (index == 0) {
    first[0] = value;
    }
    });
    assertEqual(11, first[0]);
    }

    @Test
    void int8ArrayForEachPart01Test053() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    List<Integer> values = new ArrayList<>();
    arr.forEach((value, index, array) -> {
        values.add(value);
        if (index == 0) {
    array.set(2, 99);
    }
    });
    assertEqualInt(1, values.get(0));
    assertEqualInt(99, values.get(2));
    }

    @Test
    void int8ArrayForEachPart01Test057() {
    Int8Array arr = new Int8Array(4);
    boolean[] allZero = {true};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    if (value != 0) {
    allZero[0] = false;
    }
    });
    assertTrue(allZero[0]);
    }

    @Test
    void int8ArrayForEachPart01Test058() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, INT8_MAX, INT8_MAX});
    boolean[] allMax = {true};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    if (value != INT8_MAX) {
    allMax[0] = false;
    }
    });
    assertTrue(allMax[0]);
    }

    @Test
    void int8ArrayForEachPart01Test059() {
    Int8Array arr = new Int8Array(new int[] {-50, 50, -1, 1});
    List<Integer> collected = new ArrayList<>();
    arr.forEach((value, unusedIndex, unusedArray) -> {
    collected.add(value);
    });
    assertEqualInt(-50, collected.get(0));
    assertEqualInt(50, collected.get(1));
    assertEqualInt(-1, collected.get(2));
    assertEqualInt(1, collected.get(3));
    }

    @Test
    void int8ArrayForEachPart01Test060() {
    Int8Array arr = new Int8Array(new int[] {-128, 0, INT8_MAX});
    List<Integer> collected = new ArrayList<>();
    arr.forEach((value, unusedIndex, unusedArray) -> {
    collected.add(value);
    });
    assertEqualInt(-128, collected.get(0));
    assertEqualInt(0, collected.get(1));
    assertEqualInt(INT8_MAX, collected.get(2));
    }

    @Test
    void int8ArrayForEachPart01Test061() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    List<Integer> receivedValues = new ArrayList<>();
    arr.forEach((value, index, array) -> {
    receivedValues.add(value);
    array.set(index, 99);
    });
    assertEqualInt(1, receivedValues.get(0));
    assertEqualInt(2, receivedValues.get(1));
    assertEqualInt(3, receivedValues.get(2));
    }

    @Test
    void int8ArrayForEachPart01Test062() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    int[] firstValue = {0};
    arr.forEach((value, index, array) -> {
    if (index == 0) {
    firstValue[0] = value;
    array.set(0, 77);
    }
    });
    assertEqual(1, firstValue[0]);
    assertEqualInt(77, arr.get(0));
    }

    @Test
    void int8ArrayForEachPart01Test063() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] thirdValue = {0};
    arr.forEach((value, index, array) -> {
    if (index == 0) {
    array.set(2, -55);
    }
    if (index == 2) {
    thirdValue[0] = value;
    }
    });
    assertEqual(-55, thirdValue[0]);
    }

    @Test
    void int8ArrayForEachPart01Test068() {
    Int8Array arr = new Int8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, 1);
    }
    int[] sum = {0};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    sum[0] = sum[0] + value;
    });
    assertEqual(100, sum[0]);
    }

    @Test
    void int8ArrayForEachPart01Test070() {
    Int8Array arr = new Int8Array(new double[] {Double.POSITIVE_INFINITY});
    int[] received = {0};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    received[0] = value;
    });
    assertEqual(0, received[0]);
    }

    @Test
    void int8ArrayForEachPart01Test071() {
    Int8Array arr = new Int8Array(new double[] {Double.NEGATIVE_INFINITY});
    int[] received = {0};
    arr.forEach((value, unusedIndex, unusedArray) -> {
    received[0] = value;
    });
    assertEqual(0, received[0]);
    }

    @Test
    void int8ArrayForEachPart01Test072() {
    Int8Array arr = new Int8Array(new int[] {5, 6, 7});
    int[] sum = {0};
    arr.forEach((value, index) -> {
    sum[0] = sum[0] + value + index;
    });
    assertEqual(21, sum[0]);
    }
}
