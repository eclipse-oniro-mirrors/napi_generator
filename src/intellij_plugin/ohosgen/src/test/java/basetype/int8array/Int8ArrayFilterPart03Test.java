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
import basetype.common.BasTest;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayFilterPart03Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFilterPart03Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify filter val > INT8_MAX matches nothing returning length 0 on Int8Array.of(1, 50, INT8_MAX, -128)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_1900
     * @tc.name int8ArrayFilterPart03Test019
     * @tc.desc Verify filter val > INT8_MAX matches nothing returning length 0 on Int8Array.of(1, 50, INT8_MAX, -128)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test019() {
    Int8Array arr = Int8Array.of(1, 50, INT8_MAX, -128);
    Int8Array result = arr.filter((val) -> {
        return val > INT8_MAX;
        });
    int r1 = result.length();
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify filter val < -128 matches nothing returning length 0 on Int8Array.of(1, -50, -128, INT8_MAX)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_2000
     * @tc.name int8ArrayFilterPart03Test020
     * @tc.desc Verify filter val < -128 matches nothing returning length 0 on Int8Array.of(1, -50, -128, INT8_MAX)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test020() {
    Int8Array arr = Int8Array.of(1, -50, -128, INT8_MAX);
    Int8Array result = arr.filter((val) -> {
        return val < -128;
        });
    assertEqual(0, result.length());
    }

    /**
     * Verify filter val !== 42 matches nothing returning length 0 on Int8Array.of(42, 42, 42)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_2100
     * @tc.name int8ArrayFilterPart03Test021
     * @tc.desc Verify filter val !== 42 matches nothing returning length 0 on Int8Array.of(42, 42, 42)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test021() {
    Int8Array arr = Int8Array.of(42, 42, 42);
    Int8Array result = arr.filter((val) -> {
        return val != 42;
        });
    assertEqual(0, result.length());
    }

    /**
     * Verify filter val === -128 keeps -128 at $_get(0) on Int8Array.of(-128)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_2400
     * @tc.name int8ArrayFilterPart03Test024
     * @tc.desc Verify filter val === -128 keeps -128 at $_get(0) on Int8Array.of(-128)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test024() {
    Int8Array arr = Int8Array.of(-128);
    Int8Array result = arr.filter((val) -> {
        return val == -128;
        });
    assertEqualInt(-128, result.get(0));
    }

    /**
     * Verify filter val === INT8_MAX keeps INT8_MAX at $_get(0) on Int8Array.of(INT8_MAX)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_2500
     * @tc.name int8ArrayFilterPart03Test025
     * @tc.desc Verify filter val === INT8_MAX keeps INT8_MAX at $_get(0) on Int8Array.of(INT8_MAX)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test025() {
    Int8Array arr = Int8Array.of(INT8_MAX);
    Int8Array result = arr.filter((val) -> {
        return val == INT8_MAX;
        });
    assertEqualInt(INT8_MAX, result.get(0));
    }

    /**
     * Verify filter val === 0 keeps 0 at $_get(0) on Int8Array.of(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_2600
     * @tc.name int8ArrayFilterPart03Test026
     * @tc.desc Verify filter val === 0 keeps 0 at $_get(0) on Int8Array.of(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test026() {
    Int8Array arr = Int8Array.of(0);
    Int8Array result = arr.filter((val) -> {
        return val == 0;
        });
    assertEqualInt(0, result.get(0));
    }

    /**
     * Verify filter val === 0 keeps all 4 zero elements of new Int8Array(4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_2700
     * @tc.name int8ArrayFilterPart03Test027
     * @tc.desc Verify filter val === 0 keeps all 4 zero elements of new Int8Array(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test027() {
    Int8Array arr = new Int8Array(4);
    Int8Array result = arr.filter((val) -> {
        return val == 0;
        });
    assertEqual(4, result.length());
    }

    /**
     * Verify filter val === INT8_MAX keeps all 4 elements on Int8Array.of(INT8_MAX, I
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_2800
     * @tc.name int8ArrayFilterPart03Test028
     * @tc.desc Verify filter val === INT8_MAX keeps all 4 elements on Int8Array.of(INT8_MAX, I
     * NT8_MAX, INT8_MAX, INT8_MAX)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test028() {
    Int8Array arr = Int8Array.of(INT8_MAX, INT8_MAX, INT8_MAX, INT8_MAX);
    Int8Array result = arr.filter((val) -> {
        return val == INT8_MAX;
        });
    assertEqual(4, result.length());
    }

    /**
     * Verify filter val === -128 keeps all 3 elements on Int8Array.of(-128, -128, -128)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_2900
     * @tc.name int8ArrayFilterPart03Test029
     * @tc.desc Verify filter val === -128 keeps all 3 elements on Int8Array.of(-128, -128, -128)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test029() {
    Int8Array arr = Int8Array.of(-128, -128, -128);
    Int8Array result = arr.filter((val) -> {
        return val == -128;
        });
    assertEqual(3, result.length());
    }

    /**
     * Verify filter val === 1 keeps all 5 elements on Int8Array.of(1, 1, 1, 1, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_3000
     * @tc.name int8ArrayFilterPart03Test030
     * @tc.desc Verify filter val === 1 keeps all 5 elements on Int8Array.of(1, 1, 1, 1, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test030() {
    Int8Array arr = Int8Array.of(1, 1, 1, 1, 1);
    Int8Array result = arr.filter((val) -> {
        return val == 1;
        });
    assertEqual(5, result.length());
    }

    /**
     * Verify all-same collection with condition val greater than that value, all elements filtered out
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_3100
     * @tc.name int8ArrayFilterPart03Test031
     * @tc.desc Verify all-same collection with condition val greater than that value, all elements filtered out
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test031() {
    Int8Array arr = Int8Array.of(7, 7, 7);
    Int8Array result = arr.filter((val) -> {
        return val > 7;
        });
    assertEqual(0, result.length());
    }

    /**
     * Verify filter callback visits val -128, on Int8Array.of(-128, 0, INT8_MAX)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_4100
     * @tc.name int8ArrayFilterPart03Test041
     * @tc.desc Verify filter callback visits val -128, on Int8Array.of(-128, 0, INT8_MAX)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test041() {
    Int8Array arr = Int8Array.of(-128, 0, INT8_MAX);
    boolean[] foundMin = {false};
    Int8Array result = arr.filter((val) -> {
        if (val == -128) {
            foundMin[0] = true;
        }
        return false;
        });
    int r1 = result.length();
    int e1 = 0;
    assertEqual(e1, r1);
    assertTrue(foundMin[0]);
    }

    /**
     * Verify filter callback visits val INT8_MAX, on Int8Array.of(-128, 0, INT8_MAX)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_4200
     * @tc.name int8ArrayFilterPart03Test042
     * @tc.desc Verify filter callback visits val INT8_MAX, on Int8Array.of(-128, 0, INT8_MAX)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test042() {
    Int8Array arr = Int8Array.of(-128, 0, INT8_MAX);
    boolean[] foundMax = {false};
    Int8Array result = arr.filter((val) -> {
        if (val == INT8_MAX) {
            foundMax[0] = true;
        }
        return false;
        });
    int r1 = result.length();
    int e1 = 0;
    assertEqual(e1, r1);
    assertTrue(foundMax[0]);
    }

    /**
     * Verify filter callback visits val 0, on Int8Array.of(-128, 0, INT8_MAX)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_4300
     * @tc.name int8ArrayFilterPart03Test043
     * @tc.desc Verify filter callback visits val 0, on Int8Array.of(-128, 0, INT8_MAX)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test043() {
    Int8Array arr = Int8Array.of(-128, 0, INT8_MAX);
    boolean[] foundZero = {false};
    Int8Array result = arr.filter((val) -> {
        if (val == 0) {
            foundZero[0] = true;
        }
        return false;
        });
    int r1 = result.length();
    int e1 = 0;
    assertEqual(e1, r1);
    assertTrue(foundZero[0]);
    }

    /**
     * Verify filter callback array.$_get(index) equals val for all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_4700
     * @tc.name int8ArrayFilterPart03Test047
     * @tc.desc Verify filter callback array.$_get(index) equals val for all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test047() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    boolean[] consistent = {true};
    Int8Array result = arr.filter((val, index, array) -> {
        if (array.get(index) != val) {
            consistent[0] = false;
        }
        return false;
        });
    int r1 = result.length();
    int e1 = 0;
    assertEqual(e1, r1);
    assertTrue(consistent[0]);
    }

    /**
     * Verify filter callback reads mutated $_set(1, 99) value at index 1 on Int8Array.of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_4800
     * @tc.name int8ArrayFilterPart03Test048
     * @tc.desc Verify filter callback reads mutated $_set(1, 99) value at index 1 on Int8Array.of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test048() {
    Int8Array arr = Int8Array.of(10, 20, 30);
    int[] secondVal = {0};
    Int8Array result = arr.filter((val, index, array) -> {
        if (index == 0) {
            array.set(1, 99);
        }
            if (index == 1) {
            secondVal[0] = val;
        }
        return false;
        });
    int r1 = result.length();
    int e1 = 0;
    assertEqual(e1, r1);
    assertEqual(99, secondVal[0]);
    }

    /**
     * Verify filter val > 0 keeps 2 elements on Int8Array.of(-2, 0, 3, -1, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_4900
     * @tc.name int8ArrayFilterPart03Test049
     * @tc.desc Verify filter val > 0 keeps 2 elements on Int8Array.of(-2, 0, 3, -1, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test049() {
    Int8Array arr = Int8Array.of(-2, 0, 3, -1, 5);
    Int8Array result = arr.filter((val) -> {
        return val > 0;
        });
    assertEqual(2, result.length());
    }

    /**
     * Verify filter val < 0 keeps 2 elements on Int8Array.of(-2, 0, 3, -1, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_5000
     * @tc.name int8ArrayFilterPart03Test050
     * @tc.desc Verify filter val < 0 keeps 2 elements on Int8Array.of(-2, 0, 3, -1, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test050() {
    Int8Array arr = Int8Array.of(-2, 0, 3, -1, 5);
    Int8Array result = arr.filter((val) -> {
        return val < 0;
        });
    assertEqual(2, result.length());
    }

    /**
     * Verify filter val === 0 keeps 2 elements on Int8Array.of(-2, 0, 3, 0, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_5100
     * @tc.name int8ArrayFilterPart03Test051
     * @tc.desc Verify filter val === 0 keeps 2 elements on Int8Array.of(-2, 0, 3, 0, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test051() {
    Int8Array arr = Int8Array.of(-2, 0, 3, 0, 5);
    Int8Array result = arr.filter((val) -> {
        return val == 0;
        });
    assertEqual(2, result.length());
    }

    /**
     * Verify filter val % 2 === 0 keeps 3 elements on Int8Array.of(1, 2, 3, 4, 5, 6)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_5200
     * @tc.name int8ArrayFilterPart03Test052
     * @tc.desc Verify filter val % 2 === 0 keeps 3 elements on Int8Array.of(1, 2, 3, 4, 5, 6)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test052() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4, 5, 6);
    Int8Array result = arr.filter((val) -> {
        return val % 2 == 0;
        });
    assertEqual(3, result.length());
    }

    /**
     * Verify filter val > 1 returns 2 elements, on Int8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_5500
     * @tc.name int8ArrayFilterPart03Test055
     * @tc.desc Verify filter val > 1 returns 2 elements, on Int8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test055() {
    Int8Array arr = Int8Array.of(1, 2, 3);
    Int8Array result = arr.filter((val) -> {
        return val > 1;
        });
    int r1 = result.length();
    int e1 = 2;
    assertEqual(e1, r1);
    Integer r2 = result.get(0);
    int e2 = 2;
    assertEqualInt(e2, r2);
    }

    /**
     * Verify filter val >= 3 keeps 2 elements on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_5600
     * @tc.name int8ArrayFilterPart03Test056
     * @tc.desc Verify filter val >= 3 keeps 2 elements on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test056() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    Int8Array result = arr.filter((val) -> {
        return val >= 3;
        });
    assertEqual(2, result.length());
    }

    /**
     * Verify filter val % 2 === 0 keeps 2 and 4 on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_5700
     * @tc.name int8ArrayFilterPart03Test057
     * @tc.desc Verify filter val % 2 === 0 keeps 2 and 4 on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test057() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    Int8Array result = arr.filter((val) -> {
        return val % 2 == 0;
        });
    assertEqualInt(2, result.get(0));
    assertEqualInt(4, result.get(1));
    }

    /**
     * Verify filter val < 0 keeps -128 at $_get(0) on Int8Array.of(-128, 0, INT8_MAX)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_5800
     * @tc.name int8ArrayFilterPart03Test058
     * @tc.desc Verify filter val < 0 keeps -128 at $_get(0) on Int8Array.of(-128, 0, INT8_MAX)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test058() {
    Int8Array arr = Int8Array.of(-128, 0, INT8_MAX);
    Int8Array result = arr.filter((val) -> {
        return val < 0;
        });
    assertEqualInt(-128, result.get(0));
    }

    /**
     * Verify filter returns result whose byteLength matches 3 elements, on Int8Array.of(1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_5900
     * @tc.name int8ArrayFilterPart03Test059
     * @tc.desc Verify filter returns result whose byteLength matches 3 elements, on Int8Array.of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test059() {
    Int8Array arr = Int8Array.of(1, 2, 3, 4);
    Int8Array result = arr.filter((val) -> {
        return val > 1;
        });
    int r1 = result.byteLength();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify filter val > 0 && val % 2 === 0 keeps 2 elements on Int8Array.of(-2, -1, 0, 1, 2, 3, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FILTER_PART03_6200
     * @tc.name int8ArrayFilterPart03Test062
     * @tc.desc Verify filter val > 0 && val % 2 === 0 keeps 2 elements on Int8Array.of(-2, -1, 0, 1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFilterPart03Test062() {
    Int8Array arr = Int8Array.of(-2, -1, 0, 1, 2, 3, 4);
    Int8Array result = arr.filter((val) -> {
        return val > 0 && val % 2 == 0;
        });
    assertEqual(2, result.length());
    }
}
