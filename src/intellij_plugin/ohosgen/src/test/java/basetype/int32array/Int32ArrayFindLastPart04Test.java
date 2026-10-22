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
import basetype.common.Error;

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFindLastPart04Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFindLastPart04Test extends BasTest {
    /**
     * Verify predicate findLast length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_0100
     * @tc.name int32ArrayFindLastPart04TestMindmapTest001
     * @tc.desc Verify predicate findLast length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest001() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    arr.findLast((v, i, a) -> {
        return v == 3;
        });
    assertEqual(5, arr.length());
    }

    /**
     * Verify predicate findLast ArrayBuffer byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_0300
     * @tc.name int32ArrayFindLastPart04TestMindmapTest003
     * @tc.desc Verify predicate findLast ArrayBuffer byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest003() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array arr = new Int32Array(buf);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.set(3, 4);
    arr.findLast((v, i, a) -> {
        return v > 0;
        });
    assertEqual(16, arr.buffer().byteLength());
    }

    /**
     * Verify findLast number
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_0400
     * @tc.name int32ArrayFindLastPart04TestMindmapTest004
     * @tc.desc Verify findLast number
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest004() {
    Int32Array arr = Int32Array.of(7, 8, 9);
    Integer[] res = {arr.findLast((v, i, a) -> {
        return v == 9;
        })};
    res[0] = 999;
    assertEqualInt(9, arr.get(2));
    }

    /**
     * Verify predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_1000
     * @tc.name int32ArrayFindLastPart04TestMindmapTest010
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest010() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    int[] cnt = {0};
    Integer r = arr.findLast((v, i, a) -> {
        cnt[0]++;
        return v == 3;
    });
    assertEqualInt(3, r);
    assertEqual(3, cnt[0]);
    }

    /**
     * Verify predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_1100
     * @tc.name int32ArrayFindLastPart04TestMindmapTest011
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest011() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    int[] cnt = {0};
    Integer r = arr.findLast((v, i, a) -> {
        cnt[0]++;
        return v == 4;
    });
    assertEqualInt(4, r);
    assertEqual(1, cnt[0]);
    }

    /**
     * Verify predicate length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_1200
     * @tc.name int32ArrayFindLastPart04TestMindmapTest012
     * @tc.desc Verify predicate length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest012() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    int[] cnt = {0};
    Integer r = arr.findLast((v, i, a) -> {
        cnt[0]++;
        return v == 1;
    });
    assertEqualInt(1, r);
    assertEqual(4, cnt[0]);
    }

    /**
     * Verify predicate boolean " "
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_1400
     * @tc.name int32ArrayFindLastPart04TestMindmapTest014
     * @tc.desc Verify predicate boolean " "
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest014() {
    Int32Array arr = Int32Array.of(5);
    boolean[] called = {false};
    arr.findLast((v, i, a) -> {
        called[0] = true;
        return true;
    });
    assertTrue(called[0]);
    }

    /**
     * Verify predicate array findLast Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_1500
     * @tc.name int32ArrayFindLastPart04TestMindmapTest015
     * @tc.desc Verify predicate array findLast Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest015() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    boolean[] same = {false};
    arr.findLast((v, i, a) -> {
        same[0] = (a == arr);
        return true;
    });
    assertTrue(same[0]);
    }

    /**
     * Verify predicate array length length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_1600
     * @tc.name int32ArrayFindLastPart04TestMindmapTest016
     * @tc.desc Verify predicate array length length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest016() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40, 50);
    int[] alen = {-1};
    arr.findLast((v, i, a) -> {
        alen[0] = a.length();
        return true;
    });
    assertEqual(5, alen[0]);
    }

    /**
     * Verify predicate findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_2100
     * @tc.name int32ArrayFindLastPart04TestMindmapTest021
     * @tc.desc Verify predicate findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest021() {
    Int32Array arr = Int32Array.of(0, 0, 0, 0);
    Integer r = arr.findLast((v, i, a) -> {
        if (i == 3) {
            a.set(1, 55);
        return false;
        }
        return v == 55;
        });
    assertEqualInt(55, r);
    }

    /**
     * Verify findLast predicate findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_2500
     * @tc.name int32ArrayFindLastPart04TestMindmapTest025
     * @tc.desc Verify findLast predicate findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest025() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    int[] innerRes = {-999};
    Integer outerRes = arr.findLast((v, i, a) -> {
        if (i == 4) {
            Integer ir = a.findLast((vv, ii, aa) -> {
        return vv == 2;
        });
        if (ir != null) {
            innerRes[0] = ir;
        } }
        return v == 3;
        });
    assertEqual(2, innerRes[0]);
    assertEqualInt(3, outerRes);
    }

    /**
     * Verify findLast predicate catch
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_2600
     * @tc.name int32ArrayFindLastPart04TestMindmapTest026
     * @tc.desc Verify findLast predicate catch
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest026() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    try {
    arr.findLast((v, i, a) -> {
    a.findLast((vv, ii, aa) -> {
        return BasTest.throwTestError("inner");
        });
    return false;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("inner", e.getMessage());
    }
    }

    /**
     * Verify subarray findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_2700
     * @tc.name int32ArrayFindLastPart04TestMindmapTest027
     * @tc.desc Verify subarray findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest027() {
    Int32Array arr = Int32Array.of(10, 20, 30, 40, 50);
    Int32Array sub = arr.subarray(1, 4);
    Integer r1 = arr.findLast((v, i, a) -> {
        return v == 50;
        });
    Integer r2 = sub.findLast((v, i, a) -> {
        return v == 20;
        });
    assertEqualInt(50, r1);
    assertEqualInt(20, r2);
    }

    /**
     * Verify findLast predicate Int32Array findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_2800
     * @tc.name int32ArrayFindLastPart04TestMindmapTest028
     * @tc.desc Verify findLast predicate Int32Array findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest028() {
    Int32Array a1 = Int32Array.of(1, 2, 3);
    Int32Array a2 = Int32Array.of(100, 200, 300);
    Integer r = a1.findLast((v, i, a) -> {
        if (i == 2) {
            a2.findLast((vv, ii, aa) -> {
        return vv == 200;
        });
        }
        return v == 1;
        });
    assertEqualInt(1, r);
    assertEqualInt(200, a2.get(1));
    }

    /**
     * Verify $_set findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_3000
     * @tc.name int32ArrayFindLastPart04TestMindmapTest030
     * @tc.desc Verify $_set findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest030() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    arr.set(2, 42);
    Integer r = arr.findLast((v, i, a) -> {
        return v == 42;
        });
    assertEqualInt(42, r);
    }

    /**
     * Verify set(array, offset) findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_3100
     * @tc.name int32ArrayFindLastPart04TestMindmapTest031
     * @tc.desc Verify set(array, offset) findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest031() {
    Int32Array arr = new Int32Array(6);
    Int32Array src = Int32Array.of(7, 8, 9);
    arr.set(src, 3);
    Integer r = arr.findLast((v, i, a) -> {
        return v == 8;
        });
    assertEqualInt(8, r);
    }

    /**
     * Verify fill findLast fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_3200
     * @tc.name int32ArrayFindLastPart04TestMindmapTest032
     * @tc.desc Verify fill findLast fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest032() {
    Int32Array arr = new Int32Array(5);
    arr.fill(111);
    Integer r = arr.findLast((v, i, a) -> {
        return v == 111;
        });
    assertEqualInt(111, r);
    }

    /**
     * Verify copyWithin findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_3300
     * @tc.name int32ArrayFindLastPart04TestMindmapTest033
     * @tc.desc Verify copyWithin findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest033() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 0, 0);
    arr.copyWithin(4, 0, 2);
    Integer r = arr.findLast((v, i, a) -> {
        return v == 2;
        });
    assertEqualInt(2, r);
    }

    /**
     * Verify reverse findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_3400
     * @tc.name int32ArrayFindLastPart04TestMindmapTest034
     * @tc.desc Verify reverse findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest034() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    arr.reverse();
    Integer r = arr.findLast((v, i, a) -> {
        return v == 1;
        });
    assertEqualInt(1, r);
    }

    /**
     * Verify sort findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_3500
     * @tc.name int32ArrayFindLastPart04TestMindmapTest035
     * @tc.desc Verify sort findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest035() {
    Int32Array arr = Int32Array.of(3, 1, 4, 2);
    arr.sort();
    Integer r = arr.findLast((v, i, a) -> {
        return true;
        });
    assertEqualInt(4, r);
    }

    /**
     * Verify byteOffset $_set findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_3700
     * @tc.name int32ArrayFindLastPart04TestMindmapTest037
     * @tc.desc Verify byteOffset $_set findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest037() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array parent = new Int32Array(buf);
    Int32Array child = new Int32Array(buf, 8, 3);
    for (int i = 0; i < parent.length(); i++) {
        parent.set(i, 0);
    }
    child.set(0, 111);
    Integer r = parent.findLast((v, i, a) -> {
        return v == 111;
        });
    assertEqualInt(111, r);
    }

    /**
     * Verify predicate buffer $_get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_3800
     * @tc.name int32ArrayFindLastPart04TestMindmapTest038
     * @tc.desc Verify predicate buffer $_get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest038() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array parent = new Int32Array(buf);
    Int32Array child = new Int32Array(buf, 4, 3);
    int[] observed = {-1};
    parent.findLast((v, i, a) -> {
    if (i == 3) {
    parent.set(1, 222);
    observed[0] = child.get(0);
    return true;
    }
    return false;
    });
    assertEqual(222, observed[0]);
    }

    /**
     * Verify predicate length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_5000
     * @tc.name int32ArrayFindLastPart04TestMindmapTest050
     * @tc.desc Verify predicate length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest050() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    try {
    arr.findLast((v, i, a) -> {
        return BasTest.throwTestError("x");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("x", e.getMessage());
    }
    assertEqual(4, arr.length());
    }

    /**
     * Verify predicate predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_5100
     * @tc.name int32ArrayFindLastPart04TestMindmapTest051
     * @tc.desc Verify predicate predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest051() {
    Int32Array arr = Int32Array.of(0, 0, 0, 0);
    try {
    arr.findLast((v, i, a) -> {
    if (i == 3) {
        a.set(0, 77);
        return BasTest.throwTestError("stop");
        }
    return false;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("stop", e.getMessage());
    }
    assertEqualInt(77, arr.get(0));
    }

    /**
     * Verify predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_5200
     * @tc.name int32ArrayFindLastPart04TestMindmapTest052
     * @tc.desc Verify predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest052() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5);
    int[] cnt = {0};
    try {
    arr.findLast((v, i, a) -> {
    cnt[0]++;
    if (i == 2) {
        return BasTest.throwTestError("mid");
        }
    return false;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("mid", e.getMessage());
    }
    assertEqual(3, cnt[0]);
    }

    /**
     * Verify findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_5700
     * @tc.name int32ArrayFindLastPart04TestMindmapTest057
     * @tc.desc Verify findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest057() {
    Int32Array arr = Int32Array.of(5, 3, 7, 3, 8);
    Integer r1 = arr.findLast((v, i, a) -> {
        return v == 3;
        });
    Integer r2 = arr.findLast((v, i, a) -> {
        return v == 3;
        });
    assertEqual(r2.intValue(), r1.intValue());
    assertEqualInt(3, r1);
    }

    /**
     * Verify forEach findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_5800
     * @tc.name int32ArrayFindLastPart04TestMindmapTest058
     * @tc.desc Verify forEach findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest058() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    arr.forEach((v, i, a) -> {
        if (v == 2) {
            a.set(i, 99);
        }
            });
    Integer r = arr.findLast((v, i, a) -> {
        return v == 99;
        });
    assertEqualInt(99, r);
    }

    /**
     * Verify map findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_5900
     * @tc.name int32ArrayFindLastPart04TestMindmapTest059
     * @tc.desc Verify map findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest059() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Int32Array mapped = arr.map((v, i, a) -> {
        return v * 10;
        });
    Integer r = mapped.findLast((v, i, a) -> {
        return v == 20;
        });
    assertEqualInt(20, r);
    assertEqualInt(2, arr.get(1));
    }

    /**
     * Verify filter findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_6000
     * @tc.name int32ArrayFindLastPart04TestMindmapTest060
     * @tc.desc Verify filter findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest060() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4, 5, 6);
    Int32Array evens = arr.filter((v, i, a) -> {
        return v % 2 == 0;
        });
    Integer r = evens.findLast((v, i, a) -> {
        return v > 3;
        });
    assertEqualInt(6, r);
    }

    /**
     * Verify findLast $_get(length-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_6100
     * @tc.name int32ArrayFindLastPart04TestMindmapTest061
     * @tc.desc Verify findLast $_get(length-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest061() {
    Int32Array arr = Int32Array.of(10, 20, 30, 20);
    Integer r = arr.findLast((v, i, a) -> {
        return v == 20;
        });
    assertEqualInt(20, r);
    assertEqualInt(20, arr.get(3));
    }

    /**
     * Verify findLast includes true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_6200
     * @tc.name int32ArrayFindLastPart04TestMindmapTest062
     * @tc.desc Verify findLast includes true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest062() {
    Int32Array arr = Int32Array.of(1, 2, 3, 4);
    arr.findLast((v, i, a) -> {
        return v == 4;
        });
    assertTrue(arr.includes(4));
    assertFalse(arr.includes(99));
    }

    /**
     * Verify some findLast some
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_6300
     * @tc.name int32ArrayFindLastPart04TestMindmapTest063
     * @tc.desc Verify some findLast some
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest063() {
    Int32Array arr = Int32Array.of(0, 0, 0);
    arr.some((v, i, a) -> {
        a.set(i, 7);
        return i == 2;
    });
    Integer r = arr.findLast((v, i, a) -> {
        return v == 7;
        });
    assertEqualInt(7, r);
    }

    /**
     * Verify every findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_6400
     * @tc.name int32ArrayFindLastPart04TestMindmapTest064
     * @tc.desc Verify every findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest064() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    arr.every((v, i, a) -> {
        a.set(i, v + 100);
        return true;
    });
    Integer r = arr.findLast((v, i, a) -> {
        return v == 103;
        });
    assertEqualInt(103, r);
    }

    /**
     * Verify findLast new Int32Array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_6500
     * @tc.name int32ArrayFindLastPart04TestMindmapTest065
     * @tc.desc Verify findLast new Int32Array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest065() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    int[] capLen = {-1};
    arr.findLast((v, i, a) -> {
    new Int32Array(10);
    capLen[0] = a.length();
    return true;
    });
    assertEqual(3, capLen[0]);
    assertEqual(3, arr.length());
    }

    /**
     * Verify predicate INT_MIN true INT_MIN
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_6600
     * @tc.name int32ArrayFindLastPart04TestMindmapTest066
     * @tc.desc Verify predicate INT_MIN true INT_MIN
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest066() {
    Int32Array arr = Int32Array.of(1, 2, 3);
    Integer r = arr.findLast((v, i, a) -> {
        a.set(i, Integer.MIN_VALUE);
        return i == 2;
    });
    assertEqualInt(3, r);
    }

    /**
     * Verify predicate INT_MAX i=1 true INT_MAX
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_6700
     * @tc.name int32ArrayFindLastPart04TestMindmapTest067
     * @tc.desc Verify predicate INT_MAX i=1 true INT_MAX
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest067() {
    Int32Array arr = Int32Array.of(0, 0, 0, 0);
    Integer r = arr.findLast((v, i, a) -> {
        a.set(i, 2147483647);
        return i == 1;
    });
    assertEqualInt(0, r);
    }

    /**
     * Verify predicate byteOffset/byteLength/length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_6900
     * @tc.name int32ArrayFindLastPart04TestMindmapTest069
     * @tc.desc Verify predicate byteOffset/byteLength/length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFindLastPart04TestMindmapTest069() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Int32Array a = new Int32Array(buf, 12, 3);
    try {
    a.findLast((v, i, arr2) -> {
        return BasTest.throwTestError("x");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("x", e.getMessage());
    }
    assertEqual(12, a.byteOffset());
    assertEqual(3, a.length());
    assertEqual(12, a.byteLength());
    }

    /**
     * Verify predicate sort value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FIND_LAST_PART04_TEST_MINDMAP_7100
     * @tc.name int32ArrayFindLastPart04TestMindmapTest071
     * @tc.desc Verify predicate sort value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
