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
import basetype.common.SyntaxError;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayFindIndexPart03Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFindIndexPart03Test extends BasTest {

    private static final int INT8_MAX = 127;

    private static final int INT8_MIN = -128;

    private static boolean helper001(int v) {
    if (v == 2) {
    return BasTest.throwTestError("helper-boom");
    }
    return false;
    }

    @Test
    void int8ArrayFindIndexPart03Test001() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == 3;
        });
    assertEqual(2, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test002() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == 9;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test003() {
    Int8Array arr = new Int8Array(0);
    int r = arr.findIndex((value, unusedIndex, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return false;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test004() {
    Int8Array arr = new Int8Array(0);
    int r = arr.findIndex((value, unusedIndex, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
            return BasTest.throwTestError("boom");
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test005() {
    Int8Array arr = new Int8Array(0);
    int[] counter = {0};
    int r = arr.findIndex((value, unusedIndex, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
            counter[0] = counter[0] + 1;
        return true;
        });
    assertEqual(-1, r);
    assertEqual(0, counter[0]);
    }

    @Test
    void int8ArrayFindIndexPart03Test006() {
    Int8Array arr = new Int8Array(0);
    boolean flag = true;
    int r = arr.findIndex((value, unusedIndex, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return flag;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test007() {
    Int8Array arr = new Int8Array(new int[] {5});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == 5;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test008() {
    Int8Array arr = new Int8Array(new int[] {5});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == 6;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test009() {
    Int8Array arr = new Int8Array(new int[] {5});
    int r = arr.findIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return index == 0;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test010() {
    Int8Array arr = new Int8Array(new int[] {5});
    int r = arr.findIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return index == 1;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test011() {
    Int8Array arr = new Int8Array(new int[] {-128});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == -128;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test012() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == INT8_MAX;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test013() {
    Int8Array arr = new Int8Array(new int[] {3, 3, 3});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == 3;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test014() {
    Int8Array arr = new Int8Array(new int[] {3, 3, 3});
    int[] counter = {0};
    int r = arr.findIndex((value, unusedIndex, array) -> {
        counter[0] = counter[0] + 1;
        return value == 3;
    });
    assertEqual(0, r);
    assertEqual(1, counter[0]);
    }

    @Test
    void int8ArrayFindIndexPart03Test015() {
    Int8Array arr = new Int8Array(new int[] {-1, -1, -1});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == -1;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test016() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == 0;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test017() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, INT8_MAX, INT8_MAX});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == INT8_MAX;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test018() {
    Int8Array arr = new Int8Array(new int[] {-128, -128, -128});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == -128;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test019() {
    Int8Array arr = new Int8Array(new int[] {3, 3, 3});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value != 3;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test020() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] counter = {0};
    int r = arr.findIndex((value, unusedIndex, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
            counter[0] = counter[0] + 1;
        return false;
        });
    assertEqual(-1, r);
    assertEqual(3, counter[0]);
    }

    @Test
    void int8ArrayFindIndexPart03Test021() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] counter = {0};
    int r = arr.findIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
            counter[0] = counter[0] + 1;
        return index == 0;
        });
    assertEqual(0, r);
    assertEqual(1, counter[0]);
    }

    @Test
    void int8ArrayFindIndexPart03Test022() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] counter = {0};
    int r = arr.findIndex((value, unusedIndex, array) -> {
        counter[0] = counter[0] + 1;
        return value == 2;
    });
    assertEqual(1, r);
    assertEqual(2, counter[0]);
    Int8Array arr2 = new Int8Array(new int[] {1, 2, 3});
    int[] counter2 = {0};
    int r2 = arr2.findIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
            counter2[0] = counter2[0] + 1;
        return index == 2;
        });
    assertEqual(2, r2);
    assertEqual(3, counter2[0]);
    }

    @Test
    void int8ArrayFindIndexPart03Test023() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    Int8Array log = new Int8Array(3);
    int r = arr.findIndex((value, index, array) -> {
        log.set(index, value);
        return value == 3;
    });
    assertEqual(2, r);
    Integer r1 = log.get(2);
    int e1 = 3;
    assertEqualInt(e1, r1);
    }

    @Test
    void int8ArrayFindIndexPart03Test024() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int[] counter = {0};
    int r = arr.findIndex((value, unusedIndex, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
            counter[0] = counter[0] + 1;
        return counter[0] == 2;
        });
    assertEqual(1, r);
    assertEqual(2, counter[0]);
    }

    @Test
    void int8ArrayFindIndexPart03Test025() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] threshold = {0};
    int first = arr.findIndex((value, unusedIndex, array) -> {
        return value == 1;
        });
    threshold[0] = first + 2;
    int second = arr.findIndex((value, unusedIndex, array) -> {
        return value == threshold[0];
        });
    assertEqual(1, second);
    }

    @Test
    void int8ArrayFindIndexPart03Test026() {
    Int8Array arr = new Int8Array(new int[] {7, 8, 9});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return true;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test027() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int r = arr.findIndex((value, unusedIndex, a) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return a.length() == 3;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test028() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value > 0;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test029() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int r = arr.findIndex((value, unusedIndex, a) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return a.length() == 100;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test030() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int r = arr.findIndex((value, unusedIndex, a) -> {
        return a.get(a.length() - 1) == value;
        });
    assertEqual(2, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test031() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int r = arr.findIndex((value, unusedIndex, a) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return a.byteLength() == 3;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test032() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int r = arr.findIndex((value, unusedIndex, a) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return a.byteOffset() == 0;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test033() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int r = arr.findIndex((value, index, a) -> {
        int inner = a.findIndex((innerVal, i2, a2) -> {
        return innerVal == value;
        });
        return inner == index;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test034() {
    Int8Array arr = new Int8Array(new int[] {5, 6, 7});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == 5;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test035() {
    Int8Array arr = new Int8Array(new int[] {5, 6, 7});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == 100;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test036() {
    Int8Array arr = new Int8Array(new int[] {5, 6, 7});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == 6;
        });
    assertEqual(1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test037() {
    Int8Array arr = new Int8Array(new int[] {5, 6, 7});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == 7;
        });
    assertEqual(2, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test038() {
    Int8Array arr = new Int8Array(new int[] {5, 6, 7});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == 6;
        });
    Integer r1 = arr.get(r);
    int e1 = 6;
    assertEqualInt(e1, r1);
    }

    @Test
    void int8ArrayFindIndexPart03Test039() {
    Int8Array arr = new Int8Array(new int[] {5, 6, 7});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == 6;
        });
    int next = r + 1;
    assertEqual(2, next);
    }

    @Test
    void int8ArrayFindIndexPart03Test040() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int r = arr.findIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return index == 0;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test041() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int r = arr.findIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return index == 3;
        });
    assertEqual(3, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test042() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int r = arr.findIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return index == 4;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test043() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int r = arr.findIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return index == 5;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test044() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int r = arr.findIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return index == -1;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test045() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int r = arr.findIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return index == -4;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test046() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int r = arr.findIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return index == -5;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test047() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int r = arr.findIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return index == 0x7fffffff;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test048() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int r = arr.findIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return index == Integer.MIN_VALUE;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test049() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int r = arr.findIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return index >= 0;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test050() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int r = arr.findIndex((value, index, a) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
        return index < a.length();
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test051() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value != value;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test052() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, 1, 2});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return Double.isInfinite(value) && value > 0;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test053() {
    Int8Array arr = new Int8Array(new int[] {-128, 1, 2});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == -Double.POSITIVE_INFINITY;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test054() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return Double.compare(value, 1.5) == 0;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test055() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return Double.compare(value, Double.POSITIVE_INFINITY) != 0 && value != -Double.POSITIVE_INFINITY;
        });
    assertEqual(0, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test056() {
    Int8Array arr = new Int8Array(new int[] {1, 0, 2});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == 0;
        });
    assertEqual(1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test057() {
    Int8Array arr = new Int8Array(new int[] {255, 1, 2});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == 255;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test058() {
    Int8Array arr = new Int8Array(new int[] {128, 1, 2});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == 128;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test059() {
    Int8Array arr = new Int8Array(new int[] {-129, 1, 2});
    int r = arr.findIndex((value, unusedIndex, array) -> {
        return value == -129;
        });
    assertEqual(-1, r);
    }

    @Test
    void int8ArrayFindIndexPart03Test060() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    arr.findIndex((value, unusedIndex, array) -> {
    if (value == 2) {
    return BasTest.throwTestError("boom");
    }
    return false;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    @Test
    void int8ArrayFindIndexPart03Test061() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    arr.findIndex((value, unusedIndex, array) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    throw new RangeError("range");
    });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void int8ArrayFindIndexPart03Test062() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    arr.findIndex((value, unusedIndex, array) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    throw new SyntaxError("syntax");
    });
    fail();
    } catch (SyntaxError e) {
    assertEqual("SyntaxError", e.getClass().getSimpleName());
    }
    }

    @Test
    void int8ArrayFindIndexPart03Test063() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    arr.findIndex((value, unusedIndex, array) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    return BasTest.throwTestError("findindex-boom");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("findindex-boom", e.getMessage());
    }
    }

    @Test
    void int8ArrayFindIndexPart03Test064() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] counter = {0};
    try {
    arr.findIndex((value, unusedIndex, array) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    counter[0] = counter[0] + 1;
    return BasTest.throwTestError("first");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(1, counter[0]);
    }
    }

    @Test
    void int8ArrayFindIndexPart03Test065() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] counter = {0};
    try {
    arr.findIndex((value, unusedIndex, array) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    counter[0] = counter[0] + 1;
    if (counter[0] == 2) {
    return BasTest.throwTestError("second");
    }
    return false;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(2, counter[0]);
    }
    }

    @Test
    void int8ArrayFindIndexPart03Test066() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] counter = {0};
    try {
    arr.findIndex((value, unusedIndex, array) -> {
    if (value < INT8_MIN || value > INT8_MAX) {
    return false;
    }
    counter[0] = counter[0] + 1;
    if (counter[0] == 3) {
    return BasTest.throwTestError("last");
    }
    return false;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(3, counter[0]);
    }
    }

    @Test
    void int8ArrayFindIndexPart03Test067() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] counter = {0};
    int r = arr.findIndex((value, index, array) -> {
        if (value < INT8_MIN || value > INT8_MAX) {
        return false;
        }
            counter[0] = counter[0] + 1;
        if (index == 1) {
        return BasTest.throwTestError("never");
        }
        return index == 0;
        });
    assertEqual(0, r);
    assertEqual(1, counter[0]);
    }

    @Test
    void int8ArrayFindIndexPart03Test068() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int[] counter = {0};
    try {
    arr.findIndex((value, unusedIndex, array) -> {
        counter[0] = counter[0] + 1;
        if (value == 20) {
    return BasTest.throwTestError("twenty");
    }
    return false;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(2, counter[0]);
    }
    }

    @Test
    void int8ArrayFindIndexPart03Test069() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int result = 999;
    try {
    result = arr.findIndex((value, unusedIndex, array) -> {
    if (value == 2) {
    return BasTest.throwTestError("x");
    }
    return false;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(999, result);
    }

    @Test
    void int8ArrayFindIndexPart03Test070() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    Int8Array log = new Int8Array(3);
    try {
    arr.findIndex((value, index, array) -> {
        log.set(index, value);
        if (value == 2) {
    return BasTest.throwTestError("mid");
    }
    return false;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqualInt(1, log.get(0));
    assertEqualInt(2, log.get(1));
    }
    }

    @Test
    void int8ArrayFindIndexPart03Test071() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    arr.findIndex((value, unusedIndex, array) -> {
    return helper001(value);
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("helper-boom", e.getMessage());
    }
    }
}
