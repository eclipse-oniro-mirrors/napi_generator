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

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayFindPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFindPart01Test extends BasTest {

    private static final int INT8_MAX = 127;

    private static final int INT8_MIN = -128;

    static class RangeChecker001 {
        RangeChecker001() {
        }
    }

    @Test
    void int8ArrayFindPart01Test001() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 2;
        });
    assertEqualInt(2, result);
    }

    @Test
    void int8ArrayFindPart01Test002() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 99;
        });
    assertNull(result);
    }

    @Test
    void int8ArrayFindPart01Test004() {
    Int8Array arr = Int8Array.of(42);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 42;
        });
    assertEqualInt(42, result);
    }

    @Test
    void int8ArrayFindPart01Test005() {
    Int8Array arr = Int8Array.of(42);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 0;
        });
    assertNull(result);
    }

    @Test
    void int8ArrayFindPart01Test008() {
    Int8Array arr = Int8Array.of(7, 10, 15);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v < 10;
        });
    assertEqualInt(7, result);
    }

    @Test
    void int8ArrayFindPart01Test009() {
    Int8Array arr = Int8Array.of(10, 20, 3);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v < 10;
        });
    assertEqualInt(3, result);
    }

    @Test
    void int8ArrayFindPart01Test010() {
    Int8Array arr = Int8Array.of(10, 5, 20);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v < 10;
        });
    assertEqualInt(5, result);
    }

    @Test
    void int8ArrayFindPart01Test011() {
    Int8Array arr = Int8Array.of(3, 7, 2, 9);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v < 5;
        });
    assertEqualInt(3, result);
    }

    @Test
    void int8ArrayFindPart01Test012() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v > 0;
        });
    assertEqualInt(1, result);
    }

    @Test
    void int8ArrayFindPart01Test013() {
    Int8Array arr = Int8Array.of(0, -128, INT8_MAX);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == -128;
        });
    assertEqualInt(-128, result);
    }

    @Test
    void int8ArrayFindPart01Test014() {
    Int8Array arr = Int8Array.of(0, INT8_MAX, -1);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == INT8_MAX;
        });
    assertEqualInt(INT8_MAX, result);
    }

    @Test
    void int8ArrayFindPart01Test015() {
    Int8Array arr = Int8Array.of(-1, 0, 1);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 0;
        });
    assertEqualInt(0, result);
    }

    @Test
    void int8ArrayFindPart01Test016() {
    Int8Array arr = Int8Array.of(1, -1, 0);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == -1;
        });
    assertEqualInt(-1, result);
    }

    @Test
    void int8ArrayFindPart01Test017() {
    Int8Array arr = Int8Array.of(-5, -3, 4, -1);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v > 0;
        });
    assertEqualInt(4, result);
    }

    @Test
    void int8ArrayFindPart01Test018() {
    Int8Array arr = Int8Array.of(5, 3, -2, 1);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v < 0;
        });
    assertEqualInt(-2, result);
    }

    @Test
    void int8ArrayFindPart01Test019() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, 128);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == -128;
        });
    assertEqualInt(-128, result);
    }

    @Test
    void int8ArrayFindPart01Test020() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, 255);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == -1;
        });
    assertEqualInt(-1, result);
    }

    @Test
    void int8ArrayFindPart01Test021() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, -129);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == INT8_MAX;
        });
    assertEqualInt(INT8_MAX, result);
    }

    @Test
    void int8ArrayFindPart01Test022() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, Double.NaN);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 0;
        });
    assertEqualInt(0, result);
    }

    @Test
    void int8ArrayFindPart01Test023() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, Double.POSITIVE_INFINITY);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 0;
        });
    assertEqualInt(0, result);
    }

    @Test
    void int8ArrayFindPart01Test024() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, Double.NEGATIVE_INFINITY);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 0;
        });
    assertEqualInt(0, result);
    }

    @Test
    void int8ArrayFindPart01Test034() {
    Int8Array arr = Int8Array.of(5, 10, 15);
    Integer result = arr.find((v, i, a) -> {
        return a.get(i) == v;
        });
    assertEqualInt(5, result);
    }

    @Test
    void int8ArrayFindPart01Test043() {
    Int8Array arr = Int8Array.of(1, 5, 10, 15);
    int target = 10;
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == target;
        });
    assertEqualInt(10, result);
    }

    @Test
    void int8ArrayFindPart01Test045() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    int threshold = 3;
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v > threshold;
        });
    assertEqualInt(4, result);
    }

    @Test
    void int8ArrayFindPart01Test046() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    int[] step = {0};
    Integer result = arr.find((v, unusedIndex, array) -> {
        step[0] = step[0] + 1;
        return v == step[0];
    });
    assertEqualInt(1, result);
    }

    @Test
    void int8ArrayFindPart01Test047() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    Integer result = arr.find((v, i, a) -> {
        if (i == 0) {
            a.set(2, 99);
    }
        return v == 99;
        });
    assertEqualInt(99, result);
    }

    @Test
    void int8ArrayFindPart01Test049() {
    Int8Array arr = Int8Array.of(-2, 0, 3, -5);
    Integer result = arr.find((v, i, array) -> {
        return v > 0 && i > 0;
        });
    assertEqualInt(3, result);
    }

    @Test
    void int8ArrayFindPart01Test050() {
    Int8Array.Int8ArrayFinder isNegative = (v, unusedIndex, array) -> {
        return v < 0;
        };
    Int8Array arr = Int8Array.of(5, 3, -1, 2);
    Integer result = arr.find(isNegative);
    assertEqualInt(-1, result);
    }

    @Test
    void int8ArrayFindPart01Test057() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int[] callCount = {0};
    Integer result = arr.find((v, unusedIndex, array) -> {
        callCount[0] = callCount[0] + 1;
        return v == 10;
    });
    assertEqualInt(10, result);
    assertEqual(1, callCount[0]);
    }

    @Test
    void int8ArrayFindPart01Test058() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int[] callCount = {0};
    Integer result = arr.find((v, unusedIndex, array) -> {
        callCount[0] = callCount[0] + 1;
        return v == 20;
    });
    assertEqualInt(20, result);
    assertEqual(2, callCount[0]);
    }

    @Test
    void int8ArrayFindPart01Test059() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int[] callCount = {0};
    Integer result = arr.find((v, unusedIndex, array) -> {
        callCount[0] = callCount[0] + 1;
        return v == 30;
    });
    assertEqualInt(30, result);
    assertEqual(3, callCount[0]);
    }

    @Test
    void int8ArrayFindPart01Test060() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int[] callCount = {0};
    Integer result = arr.find((v, unusedIndex, array) -> {
        callCount[0] = callCount[0] + 1;
        return v == 99;
    });
    assertNull(result);
    assertEqual(3, callCount[0]);
    }

    @Test
    void int8ArrayFindPart01Test061() {
    Int8Array arr = Int8Array.of(11, 22, 33);
    int[] captured = {0};
    Integer found = arr.find((v, unusedIndex, array) -> {
        captured[0] = v;
        return false;
    });
    assertNull(found);
    assertEqual(33, captured[0]);
    }

    @Test
    void int8ArrayFindPart01Test064() {
    Int8Array arr = Int8Array.of(11, 22, 33);
    int[] firstVal = {0};
    Integer found = arr.find((v, unusedIndex, array) -> {
        firstVal[0] = v;
        return true;
    });
    assertEqualInt(11, found);
    assertEqual(11, firstVal[0]);
    }

    @Test
    void int8ArrayFindPart01Test065() {
    Int8Array arr = Int8Array.of(5, 10, 15);
    int[] mismatchCount = {0};
    Integer found = arr.find((v, i, a) -> {
        if (a.get(i) != v) {
            mismatchCount[0] = mismatchCount[0] + 1;
    }
        return false;
        });
    assertNull(found);
    assertEqual(0, mismatchCount[0]);
    }

    @Test
    void int8ArrayFindPart01Test066() {
    Int8Array arr = Int8Array.of(0, 0, 0);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 0;
        });
    assertEqualInt(0, result);
    }

    @Test
    void int8ArrayFindPart01Test067() {
    Int8Array arr = Int8Array.of(5, 5, 5);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 5;
        });
    assertEqualInt(5, result);
    }

    @Test
    void int8ArrayFindPart01Test068() {
    Int8Array validValues = Int8Array.of(3, 7);
    Int8Array arr = Int8Array.of(1, 5, 7, 2);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return validValues.indexOf(v) != -1;
        });
    assertEqualInt(7, result);
    }

    @Test
    void int8ArrayFindPart01Test070() {
    Int8Array arr = Int8Array.of(5, -3, 10, -7);
    Integer result = arr.find((v, i, array) -> {
        return v < 0 && i >= 1;
        });
    assertEqualInt(-3, result);
    }

    @Test
    void int8ArrayFindPart01Test071() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    Int8Array.Int8ArrayFinder p = (v, unusedIndex, array) -> {
        return v > 2;
        };
    Integer r1 = arr.find(p);
    assertEqualInt(3, r1);
    }

    @Test
    void int8ArrayFindPart01Test072() {
    Int8Array arr = Int8Array.of(2, 2, 1, 2);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v != 2;
        });
    assertEqualInt(1, result);
    }

    @Test
    void int8ArrayFindPart01Test073() {
    Int8Array arr = Int8Array.of(-1, -128, INT8_MAX);
    Integer result = arr.find((v, i, array) -> {
        return v == -128 && i == 1;
        });
    assertEqualInt(-128, result);
    }

    @Test
    void int8ArrayFindPart01Test074() {
    Int8Array arr = Int8Array.of(3, 7, 2, 5);
    Integer result = arr.find((v, unusedIndex, a) -> {
        boolean isMax = true;
        for (int j = 0;
        j < a.length();
        j++) {
        if (a.get(j) > v) {
            isMax = false;
    }
        }
        return isMax;
        });
    assertEqualInt(7, result);
    }

    @Test
    void int8ArrayFindPart01Test075() {
    Int8Array arr = Int8Array.of(2, 4, 5, 6);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v % 2 != 0;
        });
    assertEqualInt(5, result);
    }

    @Test
    void int8ArrayFindPart01Test076() {
    Int8Array arr = Int8Array.of(-1, -2, -3);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 0;
        });
    assertNull(result);
    }

    @Test
    void int8ArrayFindPart01Test077() {
    Int8Array arr = Int8Array.of(-5, 0, 10, -3);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v >= 0 && v <= INT8_MAX;
        });
    assertEqualInt(0, result);
    }

    @Test
    void int8ArrayFindPart01Test078() {
    Int8Array arr = Int8Array.of(0, 1, 2);
    Integer result = arr.find((v, i, array) -> {
        return i == 0 && v == 0;
        });
    assertEqualInt(0, result);
    }

    @Test
    void int8ArrayFindPart01Test079() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, Double.POSITIVE_INFINITY);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == 127;
        });
    assertNull(result);
    }

    @Test
    void int8ArrayFindPart01Test080() {
    Int8Array arr = new Int8Array(1);
    arr.set(0, Double.NEGATIVE_INFINITY);
    Integer result = arr.find((v, unusedIndex, array) -> {
        return v == -128;
        });
    assertNull(result);
    }
}
