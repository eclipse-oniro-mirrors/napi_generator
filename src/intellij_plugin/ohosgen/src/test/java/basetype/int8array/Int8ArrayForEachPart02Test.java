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

package basetype.int8array;

import basetype.common.Int8Array;
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayForEachPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayForEachPart02Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify forEach invokes callback once and keeps length 1, on new Int8Array(new int[] {7})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_2300
     * @tc.name int8ArrayForEachPart02Test023
     * @tc.desc Verify forEach invokes callback once and keeps length 1, on new Int8Array(new int[] {7})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test023() {
    Int8Array arr = new Int8Array(new int[] {7});
    int[] received = {0};
    arr.forEach((v, unusedIndex, array) -> {
    received[0] = v;
    });
    assertEqual(7, received[0]);
    int r1 = arr.length();
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify forEach passes elements 1, 2, 3 and keeps length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_2400
     * @tc.name int8ArrayForEachPart02Test024
     * @tc.desc Verify forEach passes elements 1, 2, 3 and keeps length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test024() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    List<Integer> values = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    values.add(v);
    });
    int r2 = values.get(0);
    int e2 = 1;
    assertEqual(e2, r2);
    int r3 = values.get(1);
    int e3 = 2;
    assertEqual(e3, r3);
    int r4 = values.get(2);
    int e4 = 3;
    assertEqual(e4, r4);
    int r1 = arr.length();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify forEach passes element 30 and keeps length 3, on Int8Array.from([10, 20, 30])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_2600
     * @tc.name int8ArrayForEachPart02Test026
     * @tc.desc Verify forEach passes element 30 and keeps length 3, on Int8Array.from([10, 20, 30])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test026() {
    Int8Array arr = Int8Array.from(new int[] {10, 20, 30});
    int[] lastValue = {0};
    arr.forEach((v, unusedIndex, array) -> {
    lastValue[0] = v;
    });
    assertEqual(30, lastValue[0]);
    int r1 = arr.length();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify forEach passes elements 7, 8, 9, on Int8Array.of(7, 8, 9)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_2700
     * @tc.name int8ArrayForEachPart02Test027
     * @tc.desc Verify forEach passes elements 7, 8, 9, on Int8Array.of(7, 8, 9)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test027() {
    Int8Array arr = Int8Array.of(7, 8, 9);
    List<Integer> values = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    values.add(v);
    });
    int r1 = values.get(0);
    int e1 = 7;
    assertEqual(e1, r1);
    int r2 = values.get(1);
    int e2 = 8;
    assertEqual(e2, r2);
    int r3 = values.get(2);
    int e3 = 9;
    assertEqual(e3, r3);
    }

    /**
     * Verify forEach passes subarray elements 2, 3 and keeps view properties, on parent.subarray(1, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_2900
     * @tc.name int8ArrayForEachPart02Test029
     * @tc.desc Verify forEach passes subarray elements 2, 3 and keeps view properties, on parent.subarray(1, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test029() {
    Int8Array parent = new Int8Array(new int[] {1, 2, 3, 4, 5});
    Int8Array arr = parent.subarray(1, 3);
    List<Integer> values = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    values.add(v);
    });
    int r5 = values.get(0);
    int e5 = 2;
    assertEqual(e5, r5);
    int r6 = values.get(1);
    int e6 = 3;
    assertEqual(e6, r6);
    int r1 = arr.byteOffset();
    int e1 = 1;
    assertEqual(e1, r1);
    int r2 = arr.length();
    int e2 = 2;
    assertEqual(e2, r2);
    Integer r3 = parent.get(0);
    int e3 = 1;
    assertEqualInt(e3, r3);
    Integer r4 = parent.get(4);
    int e4 = 5;
    assertEqualInt(e4, r4);
    }

    /**
     * Verify forEach passes element 1, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_3200
     * @tc.name int8ArrayForEachPart02Test032
     * @tc.desc Verify forEach passes element 1, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test032() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    List<Integer> values = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    values.add(v);
    });
    int r1 = values.get(0);
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify forEach passes third element 3, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_3300
     * @tc.name int8ArrayForEachPart02Test033
     * @tc.desc Verify forEach passes third element 3, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test033() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    List<Integer> values = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    values.add(v);
    });
    int r1 = values.get(2);
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify forEach passes element -128, on new Int8Array(new int[] {-128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_3400
     * @tc.name int8ArrayForEachPart02Test034
     * @tc.desc Verify forEach passes element -128, on new Int8Array(new int[] {-128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test034() {
    Int8Array arr = new Int8Array(new int[] {-128});
    int[] received = {0};
    arr.forEach((v, unusedIndex, array) -> {
    received[0] = v;
    });
    assertEqual(-128, received[0]);
    }

    /**
     * Verify forEach passes element INT8_MAX, on new Int8Array(new int[] {INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_3500
     * @tc.name int8ArrayForEachPart02Test035
     * @tc.desc Verify forEach passes element INT8_MAX, on new Int8Array(new int[] {INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test035() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX});
    int[] received = {0};
    arr.forEach((v, unusedIndex, array) -> {
    received[0] = v;
    });
    assertEqual(INT8_MAX, received[0]);
    }

    /**
     * Verify forEach passes element 0, on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_3600
     * @tc.name int8ArrayForEachPart02Test036
     * @tc.desc Verify forEach passes element 0, on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test036() {
    Int8Array arr = new Int8Array(new int[] {0});
    int[] received = {999};
    arr.forEach((v, unusedIndex, array) -> {
    received[0] = v;
    });
    assertEqual(0, received[0]);
    }

    /**
     * Verify forEach passes second element -2, on new Int8Array(new int[] {-1, -2, -3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_3700
     * @tc.name int8ArrayForEachPart02Test037
     * @tc.desc Verify forEach passes second element -2, on new Int8Array(new int[] {-1, -2, -3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test037() {
    Int8Array arr = new Int8Array(new int[] {-1, -2, -3});
    List<Integer> values = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    values.add(v);
    });
    int r1 = values.get(1);
    int e1 = -2;
    assertEqual(e1, r1);
    }

    /**
     * Verify forEach passes truncated element -128, on new Int8Array(new int[] {128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_3800
     * @tc.name int8ArrayForEachPart02Test038
     * @tc.desc Verify forEach passes truncated element -128, on new Int8Array(new int[] {128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test038() {
    Int8Array arr = new Int8Array(new int[] {128});
    int[] received = {0};
    arr.forEach((v, unusedIndex, array) -> {
    received[0] = v;
    });
    assertEqual(-128, received[0]);
    }

    /**
     * Verify forEach passes truncated element -1, on new Int8Array(new int[] {255})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_3900
     * @tc.name int8ArrayForEachPart02Test039
     * @tc.desc Verify forEach passes truncated element -1, on new Int8Array(new int[] {255})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test039() {
    Int8Array arr = new Int8Array(new int[] {255});
    int[] received = {0};
    arr.forEach((v, unusedIndex, array) -> {
    received[0] = v;
    });
    assertEqual(-1, received[0]);
    }

    /**
     * Verify forEach passes second element 5, on new Int8Array(new int[] {5, 5, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_4000
     * @tc.name int8ArrayForEachPart02Test040
     * @tc.desc Verify forEach passes second element 5, on new Int8Array(new int[] {5, 5, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test040() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5});
    List<Integer> values = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    values.add(v);
    });
    int r1 = values.get(1);
    int e1 = 5;
    assertEqual(e1, r1);
    }

    /**
     * Verify forEach passes second element INT8_MAX, on new Int8Array(new int[] {-128, INT8_MAX, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_4100
     * @tc.name int8ArrayForEachPart02Test041
     * @tc.desc Verify forEach passes second element INT8_MAX, on new Int8Array(new int[] {-128, INT8_MAX, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test041() {
    Int8Array arr = new Int8Array(new int[] {-128, INT8_MAX, 0});
    List<Integer> values = new ArrayList<>();
    arr.forEach((v, unusedIndex, array) -> {
    values.add(v);
    });
    int r1 = values.get(1);
    int e1 = INT8_MAX;
    assertEqual(e1, r1);
    }

    /**
     * Verify forEach on view1 passes element 10, view2 element 30 intact, on shared ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_4400
     * @tc.name int8ArrayForEachPart02Test044
     * @tc.desc Verify forEach on view1 passes element 10, view2 element 30 intact, on shared ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test044() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view1 = new Int8Array(buf, 0, 2);
    Int8Array view2 = new Int8Array(buf, 2, 2);
    view1.set(0, 10);
    view2.set(0, 30);
    List<Integer> values = new ArrayList<>();
    view1.forEach((v, unusedIndex, array) -> {
    values.add(v);
    });
    int r1 = values.get(0);
    int e1 = 10;
    assertEqual(e1, r1);
    assertEqualInt(30, view2.get(0));
    }

    /**
     * Verify forEach passes all 4 elements 11, 22, 33, 44, on new Int8Array(buf, 0, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_4500
     * @tc.name int8ArrayForEachPart02Test045
     * @tc.desc Verify forEach passes all 4 elements 11, 22, 33, 44, on new Int8Array(buf, 0, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test045() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array view = new Int8Array(buf, 0, 4);
    view.set(0, 11);
    view.set(1, 22);
    view.set(2, 33);
    view.set(3, 44);
    List<Integer> values = new ArrayList<>();
    view.forEach((v, unusedIndex, array) -> {
    values.add(v);
    });
    int r1 = values.get(0);
    int e1 = 11;
    assertEqual(e1, r1);
    int r2 = values.get(1);
    int e2 = 22;
    assertEqual(e2, r2);
    int r3 = values.get(2);
    int e3 = 33;
    assertEqual(e3, r3);
    int r4 = values.get(3);
    int e4 = 44;
    assertEqual(e4, r4);
    }

    /**
     * Verify forEach expects 6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FOR_EACH_PART02_TEST_5000
     * @tc.name int8ArrayForEachPart02Test050
     * @tc.desc Verify forEach expects 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayForEachPart02Test050() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] sum = {0};
    arr.forEach((v, unusedIndex, array) -> {
    sum[0] = sum[0] + v;
    });
    assertEqual(6, sum[0]);
    }
}
