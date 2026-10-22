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
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Error;

import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayEveryPart03Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayEveryPart03Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify every on empty array returns true, callback () => true, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_0100
     * @tc.name int8ArrayEveryPart03Test001
     * @tc.desc Verify every on empty array returns true, callback () => true, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test001() {
    Int8Array arr = new Int8Array(0);
    boolean result = arr.every((element) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
        return true;
        });
    assertTrue(result);
    }

    /**
     * Verify every on empty array returns true, callback () => false, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_0200
     * @tc.name int8ArrayEveryPart03Test002
     * @tc.desc Verify every on empty array returns true, callback () => false, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test002() {
    Int8Array arr = new Int8Array(0);
    boolean result = arr.every((element) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
        return false;
        });
    assertTrue(result);
    }

    /**
     * Verify every on empty array returns true, callback throws RangeError, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_0300
     * @tc.name int8ArrayEveryPart03Test003
     * @tc.desc Verify every on empty array returns true, callback throws RangeError, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test003() {
    Int8Array arr = new Int8Array(0);
    boolean result = arr.every((element) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
            throw new RangeError("should not be called");
        });
    assertTrue(result);
    }

    /**
     * Verify every callback not invoked on empty array, counter 0, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_0400
     * @tc.name int8ArrayEveryPart03Test004
     * @tc.desc Verify every callback not invoked on empty array, counter 0, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test004() {
    int[] count = {0};
    Int8Array arr = new Int8Array(0);
    boolean result = arr.every((element) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
            count[0] = count[0] + 1;
        return true;
        });
    assertTrue(result);
    assertEqual(0, count[0]);
    }

    /**
     * Verify every on empty array never invokes callback, side-effect flag stays false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_0500
     * @tc.name int8ArrayEveryPart03Test005
     * @tc.desc Verify every on empty array never invokes callback, side-effect flag stays false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test005() {
    boolean[] flag = {false};
    Int8Array arr = new Int8Array(0);
    boolean result = arr.every((element) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
            flag[0] = true;
        return true;
        });
    assertTrue(result);
    assertFalse(flag[0]);
    }

    /**
     * Verify every on ArrayBuffer view returns true on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_0600
     * @tc.name int8ArrayEveryPart03Test006
     * @tc.desc Verify every on ArrayBuffer view returns true on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test006() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int8Array arr = new Int8Array(buf);
    boolean result = arr.every((element) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
        return true;
        });
    assertTrue(result);
    }

    /**
     * Verify every on empty new Int8Array(0) returns true without invoking $_get(0) callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_0700
     * @tc.name int8ArrayEveryPart03Test007
     * @tc.desc Verify every on empty new Int8Array(0) returns true without invoking $_get(0) callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test007() {
    Int8Array arr = new Int8Array(0);
    boolean result = arr.every((element, unusedIndex, array) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
        return array.get(0) == 0;
        });
    assertTrue(result);
    }

    /**
     * Verify every callback side effect absent on empty array, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_0800
     * @tc.name int8ArrayEveryPart03Test008
     * @tc.desc Verify every callback side effect absent on empty array, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test008() {
    List<Integer> state = java.util.Arrays.asList(0);
    Int8Array arr = new Int8Array(0);
    boolean result = arr.every((element) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
            state.set(0, 99);
        return true;
        });
    assertTrue(result);
    assertEqualInt(0, state.get(0));
    }

    /**
     * Verify every on empty array returns true, callback throws TypeError, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_0900
     * @tc.name int8ArrayEveryPart03Test009
     * @tc.desc Verify every on empty array returns true, callback throws TypeError, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test009() {
    Int8Array arr = new Int8Array(0);
    boolean result = arr.every((element) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
            throw new TypeError("should not be called");
        });
    assertTrue(result);
    }

    /**
     * Verify every on empty array does not invoke callback, lastIndex stays -1, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_1000
     * @tc.name int8ArrayEveryPart03Test010
     * @tc.desc Verify every on empty array does not invoke callback, lastIndex stays -1, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test010() {
    int[] lastIndex = {-1};
    Int8Array arr = new Int8Array(0);
    boolean result = arr.every((element, index) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
            lastIndex[0] = index;
        return true;
        });
    assertTrue(result);
    assertEqual(-1, lastIndex[0]);
    }

    /**
     * Verify every returns true with length 0 on empty array, on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_1100
     * @tc.name int8ArrayEveryPart03Test011
     * @tc.desc Verify every returns true with length 0 on empty array, on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test011() {
    Int8Array arr = new Int8Array(0);
    boolean result = arr.every((element) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
        return true;
        });
    assertTrue(result);
    assertEqual(0, arr.length());
    }

    /**
     * Verify every predicate element > 0 returns true on new Int8Array(new int[] {5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_1200
     * @tc.name int8ArrayEveryPart03Test012
     * @tc.desc Verify every predicate element > 0 returns true on new Int8Array(new int[] {5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test012() {
    Int8Array arr = new Int8Array(new int[] {5});
    boolean result = arr.every((element) -> element > 0);
    assertTrue(result);
    }

    /**
     * Verify every returns false when no element satisfies predicate: with every((ele
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_1300
     * @tc.name int8ArrayEveryPart03Test013
     * @tc.desc Verify every returns false when no element satisfies predicate: with every((ele
     * ment: number): boolean => element > 10) on new Int8Array(new int[] {5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test013() {
    Int8Array arr = new Int8Array(new int[] {5});
    boolean result = arr.every((element) -> element > 10);
    assertFalse(result);
    }

    /**
     * Verify every propagates RangeError thrown in callback on new Int8Array(new int[] {5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_1400
     * @tc.name int8ArrayEveryPart03Test014
     * @tc.desc Verify every propagates RangeError thrown in callback on new Int8Array(new int[] {5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test014() {
    Int8Array arr = new Int8Array(new int[] {5});
    try {
    boolean result = arr.every((element) -> {
    throw new RangeError("single element error");
    });
    assertTrue(result);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every invokes callback once for single element, on new Int8Array(new int[] {5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_1500
     * @tc.name int8ArrayEveryPart03Test015
     * @tc.desc Verify every invokes callback once for single element, on new Int8Array(new int[] {5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test015() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {5});
    boolean result = arr.every((element) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
            count[0] = count[0] + 1;
        return true;
        });
    assertTrue(result);
    assertEqual(1, count[0]);
    }

    /**
     * Verify every predicate element === INT8_MIN returns true on new Int8Array(new int[] {INT8_MIN})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_1600
     * @tc.name int8ArrayEveryPart03Test016
     * @tc.desc Verify every predicate element === INT8_MIN returns true on new Int8Array(new int[] {INT8_MIN})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test016() {
    Int8Array arr = new Int8Array(new int[] {INT8_MIN});
    boolean result = arr.every((element) -> element == INT8_MIN);
    assertTrue(result);
    }

    /**
     * Verify every predicate element === INT8_MAX returns true on new Int8Array(new int[] {INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_1700
     * @tc.name int8ArrayEveryPart03Test017
     * @tc.desc Verify every predicate element === INT8_MAX returns true on new Int8Array(new int[] {INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test017() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX});
    boolean result = arr.every((element) -> element == INT8_MAX);
    assertTrue(result);
    }

    /**
     * Verify every predicate element !== 0 returns false on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_1800
     * @tc.name int8ArrayEveryPart03Test018
     * @tc.desc Verify every predicate element !== 0 returns false on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test018() {
    Int8Array arr = new Int8Array(new int[] {0});
    boolean result = arr.every((element) -> element != 0);
    assertFalse(result);
    }

    /**
     * Verify every propagates TypeError thrown in callback on new Int8Array(new int[] {5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_1900
     * @tc.name int8ArrayEveryPart03Test019
     * @tc.desc Verify every propagates TypeError thrown in callback on new Int8Array(new int[] {5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test019() {
    Int8Array arr = new Int8Array(new int[] {5});
    try {
    boolean result = arr.every((element) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    throw new TypeError("type error on single");
    });
    assertTrue(result);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every propagates RangeError thrown in callback on first element on new Int8Array(new int[] {5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_2000
     * @tc.name int8ArrayEveryPart03Test020
     * @tc.desc Verify every propagates RangeError thrown in callback on first element on new Int8Array(new int[] {5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test020() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {5});
    try {
    boolean result = arr.every((element, index) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    count[0] = count[0] + 1;
    if (index == 0) {
    throw new RangeError("at index 0");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual(1, count[0]);
    }
    }

    /**
     * Verify every predicate element === 0 returns true with 3 calls on new Int8Array(new int[] {0, 0, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_2100
     * @tc.name int8ArrayEveryPart03Test021
     * @tc.desc Verify every predicate element === 0 returns true with 3 calls on new Int8Array(new int[] {0, 0, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test021() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    boolean result = arr.every((element) -> {
        count[0] = count[0] + 1;
        return element == 0;
    });
    assertTrue(result);
    assertEqual(3, count[0]);
    }

    /**
     * Verify every predicate element !== 0 returns false with 1 call on new Int8Array(new int[] {0, 0, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_2200
     * @tc.name int8ArrayEveryPart03Test022
     * @tc.desc Verify every predicate element !== 0 returns false with 1 call on new Int8Array(new int[] {0, 0, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test022() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    boolean result = arr.every((element) -> {
        count[0] = count[0] + 1;
        return element != 0;
    });
    assertFalse(result);
    assertEqual(1, count[0]);
    }

    /**
     * Verify every returns true when all elements satisfy predicate: with every((elem
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_2300
     * @tc.name int8ArrayEveryPart03Test023
     * @tc.desc Verify every returns true when all elements satisfy predicate: with every((elem
     * ent: number): boolean => element > 100) on new Int8Array(new int[] {INT8_MAX, INT8_MAX, I
     * NT8_MAX}), returns 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test023() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {INT8_MAX, INT8_MAX, INT8_MAX});
    boolean result = arr.every((element) -> {
        count[0] = count[0] + 1;
        return element > 100;
    });
    assertTrue(result);
    assertEqual(3, count[0]);
    }

    /**
     * Verify every predicate element > 0 returns false with 1 call on new Int8Array(new int[] {*
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_2400
     * @tc.name int8ArrayEveryPart03Test024
     * @tc.desc Verify every predicate element > 0 returns false with 1 call on new Int8Array([
     * INT8_MIN, INT8_MIN, INT8_MIN})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test024() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {INT8_MIN, INT8_MIN, INT8_MIN});
    boolean result = arr.every((element) -> {
        count[0] = count[0] + 1;
        return element > 0;
    });
    assertFalse(result);
    assertEqual(1, count[0]);
    }

    /**
     * Verify every returns true when all elements satisfy predicate: with every((elem
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_2500
     * @tc.name int8ArrayEveryPart03Test025
     * @tc.desc Verify every returns true when all elements satisfy predicate: with every((elem
     * ent: number): boolean => element === 1) on new Int8Array(new int[] {1, 1, 1, 1, 1}), retu
     * rns 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test025() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {1, 1, 1, 1, 1});
    boolean result = arr.every((element) -> {
        count[0] = count[0] + 1;
        return element == 1;
    });
    assertTrue(result);
    assertEqual(5, count[0]);
    }

    /**
     * Verify every throws RangeError when predicate callback throws on matching eleme
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_2600
     * @tc.name int8ArrayEveryPart03Test026
     * @tc.desc Verify every throws RangeError when predicate callback throws on matching eleme
     * nt: with element === 5 on new Int8Array(new int[] {5, 5, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test026() {
    Int8Array arr = new Int8Array(new int[] {5, 5, 5});
    try {
    boolean result = arr.every((element) -> {
    if (element == 5) {
    throw new RangeError("element is 5");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every with always-true predicate returns true with 100 calls on new Int8Array(100)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_2700
     * @tc.name int8ArrayEveryPart03Test027
     * @tc.desc Verify every with always-true predicate returns true with 100 calls on new Int8Array(100)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test027() {
    int[] count = {0};
    Int8Array arr = new Int8Array(100);
    boolean result = arr.every((element) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
            count[0] = count[0] + 1;
        return true;
        });
    assertTrue(result);
    assertEqual(100, count[0]);
    }

    /**
     * Verify every with always-false predicate returns false with 1 call on new Int8Array(new int[] {0, 0, 0, 0, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_2800
     * @tc.name int8ArrayEveryPart03Test028
     * @tc.desc Verify every with always-false predicate returns false with 1 call on new Int8A
     * rray(new int[] {0, 0, 0, 0, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test028() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0, 0});
    boolean result = arr.every((element) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
            count[0] = count[0] + 1;
        return false;
        });
    assertFalse(result);
    assertEqual(1, count[0]);
    }

    /**
     * Verify every returns true when all elements satisfy predicate: with every((elem
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_2900
     * @tc.name int8ArrayEveryPart03Test029
     * @tc.desc Verify every returns true when all elements satisfy predicate: with every((elem
     * ent: number): boolean => element === 42) on new Int8Array(new int[] {42, 42, 42})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test029() {
    Int8Array arr = new Int8Array(new int[] {42, 42, 42});
    boolean result = arr.every((element) -> element == 42);
    assertTrue(result);
    }

    /**
     * Verify every predicate element < 0 returns true on new Int8Array(new int[] {-1, -1, -1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_3000
     * @tc.name int8ArrayEveryPart03Test030
     * @tc.desc Verify every predicate element < 0 returns true on new Int8Array(new int[] {-1, -1, -1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test030() {
    Int8Array arr = new Int8Array(new int[] {-1, -1, -1});
    boolean result = arr.every((element) -> element < 0);
    assertTrue(result);
    }

    /**
     * Verify every throws RangeError with e.name assertion only, callback throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_3100
     * @tc.name int8ArrayEveryPart03Test031
     * @tc.desc Verify every throws RangeError with e.name assertion only, callback throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test031() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    boolean result = arr.every((element) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    throw new RangeError("range error");
    });
    assertTrue(result);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every throws TypeError with e.name assertion only, callback throws TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_3200
     * @tc.name int8ArrayEveryPart03Test032
     * @tc.desc Verify every throws TypeError with e.name assertion only, callback throws TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test032() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    boolean result = arr.every((element) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    throw new TypeError("type error");
    });
    assertTrue(result);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every throws Error with e.name assertion only, callback throws Error
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_3300
     * @tc.name int8ArrayEveryPart03Test033
     * @tc.desc Verify every throws Error with e.name assertion only, callback throws Error
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test033() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    boolean result = arr.every((element) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    return BasTest.throwTestError("generic error");
    });
    assertTrue(result);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every throws RangeError with e.name and e.message assertions, callback throws custom message
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_3400
     * @tc.name int8ArrayEveryPart03Test034
     * @tc.desc Verify every throws RangeError with e.name and e.message assertions, callback throws custom message
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test034() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    boolean result = arr.every((element) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    throw new RangeError("custom range message");
    });
    assertTrue(result);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("custom range message", e.getMessage());
    }
    }

    /**
     * Verify every throws TypeError with e.name and e.message assertions, callback throws custom message
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_3500
     * @tc.name int8ArrayEveryPart03Test035
     * @tc.desc Verify every throws TypeError with e.name and e.message assertions, callback throws custom message
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test035() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    boolean result = arr.every((element) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    throw new TypeError("custom type message");
    });
    assertTrue(result);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    assertEqual("custom type message", e.getMessage());
    }
    }

    /**
     * Verify every throws Error with e.name and e.message assertions, callback throws custom message
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_3600
     * @tc.name int8ArrayEveryPart03Test036
     * @tc.desc Verify every throws Error with e.name and e.message assertions, callback throws custom message
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test036() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    boolean result = arr.every((element) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    return BasTest.throwTestError("custom error message");
    });
    assertTrue(result);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("custom error message", e.getMessage());
    }
    }

    /**
     * Verify every throws RangeError at index 0, on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_3700
     * @tc.name int8ArrayEveryPart03Test037
     * @tc.desc Verify every throws RangeError at index 0, on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test037() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    try {
    boolean result = arr.every((element, index) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    count[0] = count[0] + 1;
    if (index == 0) {
    throw new RangeError("at first");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual(1, count[0]);
    }
    }

    /**
     * Verify every throws RangeError at index 2, on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_3800
     * @tc.name int8ArrayEveryPart03Test038
     * @tc.desc Verify every throws RangeError at index 2, on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test038() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    try {
    boolean result = arr.every((element, index) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    count[0] = count[0] + 1;
    if (index == 2) {
    throw new RangeError("at middle");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual(3, count[0]);
    }
    }

    /**
     * Verify every throws RangeError at index 4, on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_3900
     * @tc.name int8ArrayEveryPart03Test039
     * @tc.desc Verify every throws RangeError at index 4, on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test039() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    try {
    boolean result = arr.every((element, index) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    count[0] = count[0] + 1;
    if (index == 4) {
    throw new RangeError("at last");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual(5, count[0]);
    }
    }

    /**
     * Verify every propagates TypeError thrown in callback on first element on new Int8Array(new int[] {7})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_4000
     * @tc.name int8ArrayEveryPart03Test040
     * @tc.desc Verify every propagates TypeError thrown in callback on first element on new Int8Array(new int[] {7})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test040() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {7});
    try {
    boolean result = arr.every((element, index) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    count[0] = count[0] + 1;
    if (index == 0) {
    throw new TypeError("single throw");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    assertEqual(1, count[0]);
    }
    }

    /**
     * Verify every propagates RangeError thrown at 100th element on new Int8Array(100)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_4100
     * @tc.name int8ArrayEveryPart03Test041
     * @tc.desc Verify every propagates RangeError thrown at 100th element on new Int8Array(100)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test041() {
    int[] count = {0};
    Int8Array arr = new Int8Array(100);
    try {
    boolean result = arr.every((element, index) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    count[0] = count[0] + 1;
    if (index == 99) {
    throw new RangeError("at last of 100");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual(100, count[0]);
    }
    }

    /**
     * Verify every propagates Error thrown at 4th element on new Int8Array(new int[] {10, 20, 30, 40, 50, 60, 70})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_4200
     * @tc.name int8ArrayEveryPart03Test042
     * @tc.desc Verify every propagates Error thrown at 4th element on new Int8Array(new int[]
     * {10, 20, 30, 40, 50, 60, 70})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test042() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50, 60, 70});
    try {
    boolean result = arr.every((element, index) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    count[0] = count[0] + 1;
    if (index == 3) {
    return BasTest.throwTestError("at middle of 7");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(4, count[0]);
    }
    }

    /**
     * Verify every propagates RangeError thrown in callback on new Int8Array(new int[] {10, -5, 20})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_4300
     * @tc.name int8ArrayEveryPart03Test043
     * @tc.desc Verify every propagates RangeError thrown in callback on new Int8Array(new int[] {10, -5, 20})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test043() {
    Int8Array arr = new Int8Array(new int[] {10, -5, 20});
    try {
    boolean result = arr.every((element) -> {
    if (element < 0) {
    throw new RangeError("negative element");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every propagates TypeError thrown in callback on new Int8Array(new int[] {0, 1, INT8_MIN})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_4400
     * @tc.name int8ArrayEveryPart03Test044
     * @tc.desc Verify every propagates TypeError thrown in callback on new Int8Array(new int[] {0, 1, INT8_MIN})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test044() {
    Int8Array arr = new Int8Array(new int[] {0, 1, INT8_MIN});
    try {
    boolean result = arr.every((element) -> {
    if (element == INT8_MIN) {
    throw new TypeError("min int8 value");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every propagates RangeError thrown in callback on new Int8Array(new int[] {0, 1, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_4500
     * @tc.name int8ArrayEveryPart03Test045
     * @tc.desc Verify every propagates RangeError thrown in callback on new Int8Array(new int[] {0, 1, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test045() {
    Int8Array arr = new Int8Array(new int[] {0, 1, INT8_MAX});
    try {
    boolean result = arr.every((element) -> {
    if (element == INT8_MAX) {
    throw new RangeError("max int8 value");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every propagates Error thrown in callback on new Int8Array(new int[] {1, 2, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_4600
     * @tc.name int8ArrayEveryPart03Test046
     * @tc.desc Verify every propagates Error thrown in callback on new Int8Array(new int[] {1, 2, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test046() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 0});
    try {
    boolean result = arr.every((element) -> {
    if (element == 0) {
    return BasTest.throwTestError("zero element found");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every propagates RangeError thrown at 3rd element on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_4700
     * @tc.name int8ArrayEveryPart03Test047
     * @tc.desc Verify every propagates RangeError thrown at 3rd element on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test047() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    try {
    boolean result = arr.every((element, index) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    count[0] = count[0] + 1;
    if (index == 2) {
    throw new RangeError("at index 2");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual(3, count[0]);
    }
    }

    /**
     * Verify every propagates TypeError thrown in callback on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_4800
     * @tc.name int8ArrayEveryPart03Test048
     * @tc.desc Verify every propagates TypeError thrown in callback on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test048() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    boolean result = arr.every((element, unusedIndex, array) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    if (array.length() > 2) {
    throw new TypeError("array too long");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every propagates Error thrown in callback on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_4900
     * @tc.name int8ArrayEveryPart03Test049
     * @tc.desc Verify every propagates Error thrown in callback on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test049() {
    boolean[] flag = {false};
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    boolean result = arr.every((element, index) -> {
    if (element < INT8_MIN || element > INT8_MAX) {
    return false;
    }
    if (index == 1) {
    flag[0] = true;
    }
    if (flag[0]) {
    return BasTest.throwTestError("flag[0] set at index 1");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every predicate element > 0 returns false with 1 call on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_5000
     * @tc.name int8ArrayEveryPart03Test050
     * @tc.desc Verify every predicate element > 0 returns false with 1 call on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test050() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.every((element) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
            count[0] = count[0] + 1;
        return false;
        });
    assertFalse(result);
    assertEqual(1, count[0]);
    }

    /**
     * Verify every returns false with 1 call when element 0 fails predicate on new Int8Array(new int[] {0, 1, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_5100
     * @tc.name int8ArrayEveryPart03Test051
     * @tc.desc Verify every returns false with 1 call when element 0 fails predicate on new In
     * t8Array(new int[] {0, 1, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test051() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {0, 1, 2});
    boolean result = arr.every((element, index) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
            count[0] = count[0] + 1;
        if (index > 0) {
        throw new RangeError("should not reach");
        }
        return false;
        });
    assertFalse(result);
    assertEqual(1, count[0]);
    }

    /**
     * Verify every returns false with 2 calls when element 0 fails predicate on new Int8Array(new int[] {1, 0, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_5200
     * @tc.name int8ArrayEveryPart03Test052
     * @tc.desc Verify every returns false with 2 calls when element 0 fails predicate on new I
     * nt8Array(new int[] {1, 0, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test052() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {1, 0, 2});
    boolean result = arr.every((element) -> {
        count[0] = count[0] + 1;
        return element != 0;
    });
    assertFalse(result);
    assertEqual(2, count[0]);
    }

    /**
     * Verify every returns false with 3 calls when element 0 fails predicate on new Int8Array(new int[] {1, 2, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_5300
     * @tc.name int8ArrayEveryPart03Test053
     * @tc.desc Verify every returns false with 3 calls when element 0 fails predicate on new I
     * nt8Array(new int[] {1, 2, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test053() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {1, 2, 0});
    boolean result = arr.every((element) -> {
        count[0] = count[0] + 1;
        return element != 0;
    });
    assertFalse(result);
    assertEqual(3, count[0]);
    }

    /**
     * Verify every predicate element > 0 returns true with 3 calls on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_5400
     * @tc.name int8ArrayEveryPart03Test054
     * @tc.desc Verify every predicate element > 0 returns true with 3 calls on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test054() {
    int[] count = {0};
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.every((element) -> {
        count[0] = count[0] + 1;
        return element > 0;
    });
    assertTrue(result);
    assertEqual(3, count[0]);
    }

    /**
     * Verify every returns false with 1 call when $_set(0, -1) element fails predicate on new Int8Array(100)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_5500
     * @tc.name int8ArrayEveryPart03Test055
     * @tc.desc Verify every returns false with 1 call when $_set(0, -1) element fails predicate on new Int8Array(100)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test055() {
    int[] count = {0};
    Int8Array arr = new Int8Array(100);
    arr.set(0, -1);
    boolean result = arr.every((element) -> {
        count[0] = count[0] + 1;
        return element >= 0;
    });
    assertFalse(result);
    assertEqual(1, count[0]);
    }

    /**
     * Verify every early-termination: count1=1 on [0, 1, 2], count2=3 on [1, 2, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_5600
     * @tc.name int8ArrayEveryPart03Test056
     * @tc.desc Verify every early-termination: count1=1 on [0, 1, 2], count2=3 on [1, 2, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test056() {
    Int8Array arr1 = new Int8Array(new int[] {0, 1, 2});
    int[] count1 = {0};
    boolean result = arr1.every((element) -> {
        count1[0] = count1[0] + 1;
        return element != 0;
    });
    assertFalse(result);
    Int8Array arr2 = new Int8Array(new int[] {1, 2, 0});
    int[] count2 = {0};
    boolean result2 = arr2.every((element) -> {
        count2[0] = count2[0] + 1;
        return element != 0;
    });
    assertFalse(result2);
    assertEqual(1, count1[0]);
    assertEqual(3, count2[0]);
    }

    /**
     * Verify every callback last index is 4, on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_5700
     * @tc.name int8ArrayEveryPart03Test057
     * @tc.desc Verify every callback last index is 4, on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test057() {
    int[] maxIndex = {-1};
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.every((element, index) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
            maxIndex[0] = index;
        return true;
        });
    assertTrue(result);
    assertEqual(4, maxIndex[0]);
    }

    /**
     * Verify every callback sums elements to 3 before element 0 stops it on new Int8Array(new int[] {1, 2, 0, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_5800
     * @tc.name int8ArrayEveryPart03Test058
     * @tc.desc Verify every callback sums elements to 3 before element 0 stops it on new Int8A
     * rray(new int[] {1, 2, 0, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test058() {
    int[] log = {0};
    Int8Array arr = new Int8Array(new int[] {1, 2, 0, 4, 5});
    boolean result = arr.every((element, unusedIndex, unusedArray) -> {
        log[0] = log[0] + element;
        return element != 0;
    });
    assertFalse(result);
    assertEqual(3, log[0]);
    }

    /**
     * Verify every returns false with 51 calls when $_set(50, -1) element fails predi
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_5900
     * @tc.name int8ArrayEveryPart03Test059
     * @tc.desc Verify every returns false with 51 calls when $_set(50, -1) element fails predi
     * cate on new Int8Array(100)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test059() {
    int[] count = {0};
    Int8Array arr = new Int8Array(100);
    arr.set(50, -1);
    boolean result = arr.every((element) -> {
        count[0] = count[0] + 1;
        return element >= 0;
    });
    assertFalse(result);
    assertEqual(51, count[0]);
    }

    /**
     * Verify every callback doubling via $_set(index, element * 2) writes 2, 4, 6, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_6000
     * @tc.name int8ArrayEveryPart03Test060
     * @tc.desc Verify every callback doubling via $_set(index, element * 2) writes 2, 4, 6, on
     * new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test060() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.every((element, index, array) -> {
        array.set(index, element * 2);
        return true;
    });
    assertTrue(result);
    assertEqualInt(2, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(6, arr.get(2));
    }

    /**
     * Verify every propagates RangeError after callback sum reaches 30 on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_6100
     * @tc.name int8ArrayEveryPart03Test061
     * @tc.desc Verify every propagates RangeError after callback sum reaches 30 on new Int8Arr
     * ay(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test061() {
    int[] sum = {0};
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    try {
    boolean result = arr.every((element, index, unusedArray) -> {
    sum[0] = sum[0] + element;
    if (index == 1) {
    throw new RangeError("partial sum[0] error");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual(30, sum[0]);
    }
    }

    /**
     * Verify every returns true when all elements satisfy dynamic threshold predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_6200
     * @tc.name int8ArrayEveryPart03Test062
     * @tc.desc Verify every returns true when all elements satisfy dynamic threshold predicate
     * : with every((element: number): boolean => element <= threshold) on new Int8Arr
     * ay([1, 2, 3])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test062() {
    int[] threshold = {0};
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.every((element) -> {
        threshold[0] = threshold[0] + 1;
        return element <= threshold[0];
    });
    assertTrue(result);
    }

    /**
     * Verify every propagates RangeError after callback sum reaches 90 on new Int8Array(new int[] {20, 30, 40})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_6400
     * @tc.name int8ArrayEveryPart03Test064
     * @tc.desc Verify every propagates RangeError after callback sum reaches 90 on new Int8Arr
     * ay(new int[] {20, 30, 40})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test064() {
    int[] sum = {0};
    Int8Array arr = new Int8Array(new int[] {20, 30, 40});
    try {
    boolean result = arr.every((element, unusedIndex, unusedArray) -> {
    sum[0] = sum[0] + element;
    if (sum[0] > 50) {
    throw new RangeError("sum[0] overflow");
    }
    return true;
    });
    assertTrue(result);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual(90, sum[0]);
    }
    }

    /**
     * Verify every callback array param length equals 3 on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_6500
     * @tc.name int8ArrayEveryPart03Test065
     * @tc.desc Verify every callback array param length equals 3 on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test065() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] len = {0};
    boolean result = arr.every((element, unusedIndex, array) -> {
        if (element < INT8_MIN || element > INT8_MAX) {
        return false;
        }
            len[0] = array.length();
        return true;
        });
    assertTrue(result);
    assertEqual(3, len[0]);
    }

    /**
     * Verify every callback counts 3 positive elements on new Int8Array(new int[] {1, -2, 3, -4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_6600
     * @tc.name int8ArrayEveryPart03Test066
     * @tc.desc Verify every callback counts 3 positive elements on new Int8Array(new int[] {1, -2, 3, -4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart03Test066() {
    int[] positives = {0};
    Int8Array arr = new Int8Array(new int[] {1, -2, 3, -4, 5});
    boolean result = arr.every((element) -> {
        if (element > 0) {
            positives[0] = positives[0] + 1;
        }
        return true;
        });
    assertTrue(result);
    assertEqual(3, positives[0]);
    }

    /**
     * Verify every propagates RangeError after callback sum reaches 60 on new Int8Array(new int[] {10, 20, 30, 40})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART03_TEST_7300
     * @tc.name int8ArrayEveryPart03Test073
     * @tc.desc Verify every propagates RangeError after callback sum reaches 60 on new Int8Arr
     * ay(new int[] {10, 20, 30, 40})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
