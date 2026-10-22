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
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Error;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayEveryPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayEveryPart01Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify every returns true when all elements are > 0, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_0100
     * @tc.name int8ArrayEveryPart01Test001
     * @tc.desc Verify every returns true when all elements are > 0, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test001() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.every((e, unusedIndex, array) -> {
        return e > 0;
        });
    assertTrue(result);
    }

    /**
     * Verify every returns false when element -2 is not > 0, on new Int8Array(new int[] {1, -2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_0200
     * @tc.name int8ArrayEveryPart01Test002
     * @tc.desc Verify every returns false when element -2 is not > 0, on new Int8Array(new int[] {1, -2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test002() {
    Int8Array arr = new Int8Array(new int[] {1, -2, 3});
    boolean result = arr.every((e, unusedIndex, array) -> {
        return e > 0;
        });
    assertFalse(result);
    }

    /**
     * Verify every returns true when callback always returns true, on new Int8Array(new int[] {*
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_0300
     * @tc.name int8ArrayEveryPart01Test003
     * @tc.desc Verify every returns true when callback always returns true, on new Int8Array([
     * 10, -10, 0, INT8_MAX, INT8_MIN})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test003() {
    Int8Array arr = new Int8Array(new int[] {10, -10, 0, INT8_MAX, INT8_MIN});
    boolean result = arr.every((e, unusedIndex, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
        return true;
        });
    assertTrue(result);
    }

    /**
     * Verify every returns false when callback always returns false, on new Int8Array(new int[] {10, -10, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_0400
     * @tc.name int8ArrayEveryPart01Test004
     * @tc.desc Verify every returns false when callback always returns false, on new Int8Array(new int[] {10, -10, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test004() {
    Int8Array arr = new Int8Array(new int[] {10, -10, 0});
    boolean result = arr.every((e, unusedIndex, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
        return false;
        });
    assertFalse(result);
    }

    /**
     * Verify predicate true false every false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_0500
     * @tc.name int8ArrayEveryPart01Test005
     * @tc.desc Verify predicate true false every false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test005() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    boolean result = arr.every((e, unusedIndex, array) -> {
        return e < 3;
        });
    assertFalse(result);
    }

    /**
     * Verify every with predicate element < 10 returns false because 100 >= 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_0600
     * @tc.name int8ArrayEveryPart01Test006
     * @tc.desc Verify every with predicate element < 10 returns false because 100 >= 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test006() {
    Int8Array arr = new Int8Array(new int[] {100, 1, 2});
    boolean result = arr.every((e, unusedIndex, array) -> {
        return e < 10;
        });
    assertFalse(result);
    }

    /**
     * Verify every returns true for positive elements including INT8_MAX, on new Int8Array(new int[] {1, 50, INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_0700
     * @tc.name int8ArrayEveryPart01Test007
     * @tc.desc Verify every returns true for positive elements including INT8_MAX, on new Int8
     * Array(new int[] {1, 50, INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test007() {
    Int8Array arr = new Int8Array(new int[] {1, 50, INT8_MAX});
    boolean result = arr.every((e, unusedIndex, array) -> {
        return e > 0;
        });
    assertTrue(result);
    }

    /**
     * Verify every returns false when element 1 is not 0, on new Int8Array(new int[] {0, 0, 1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_0800
     * @tc.name int8ArrayEveryPart01Test008
     * @tc.desc Verify every returns false when element 1 is not 0, on new Int8Array(new int[] {0, 0, 1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test008() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 1});
    boolean result = arr.every((e, unusedIndex, array) -> {
        return e == 0;
        });
    assertFalse(result);
    }

    /**
     * Verify every returns true when all elements are 0, on new Int8Array(new int[] {0, 0, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_0900
     * @tc.name int8ArrayEveryPart01Test009
     * @tc.desc Verify every returns true when all elements are 0, on new Int8Array(new int[] {0, 0, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test009() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0});
    boolean result = arr.every((e, unusedIndex, array) -> {
        return e == 0;
        });
    assertTrue(result);
    }

    /**
     * Verify every with predicate element >= INT8_MIN && element <= INT8_MAX returns
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_1000
     * @tc.name int8ArrayEveryPart01Test010
     * @tc.desc Verify every with predicate element >= INT8_MIN && element <= INT8_MAX returnstrue for all elements in
     * valid Int8 range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test010() {
    Int8Array arr = new Int8Array(new int[] {INT8_MIN, 0, INT8_MAX});
    boolean result = arr.every((e, unusedIndex, array) -> {
        return e >= INT8_MIN && e <= INT8_MAX;
        });
    assertTrue(result);
    }

    /**
     * Verify every callback receives element 0 on new Int8Array(new int[] {0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_1100
     * @tc.name int8ArrayEveryPart01Test011
     * @tc.desc Verify every callback receives element 0 on new Int8Array(new int[] {0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test011() {
    Int8Array arr = new Int8Array(new int[] {0});
    int[] received = {999};
    boolean result = arr.every((e, unusedIndex, array) -> {
        received[0] = e;
        return true;
    });
    assertTrue(result);
    assertEqual(0, received[0]);
    }

    /**
     * Verify every callback receives element INT8_MAX on new Int8Array(new int[] {INT8_MAX})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_1200
     * @tc.name int8ArrayEveryPart01Test012
     * @tc.desc Verify every callback receives element INT8_MAX on new Int8Array(new int[] {INT8_MAX})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test012() {
    Int8Array arr = new Int8Array(new int[] {INT8_MAX});
    int[] received = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        received[0] = e;
        return true;
    });
    assertTrue(result);
    assertEqual(INT8_MAX, received[0]);
    }

    /**
     * Verify every callback receives element -128 on new Int8Array(new int[] {-128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_1300
     * @tc.name int8ArrayEveryPart01Test013
     * @tc.desc Verify every callback receives element -128 on new Int8Array(new int[] {-128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test013() {
    Int8Array arr = new Int8Array(new int[] {INT8_MIN});
    int[] received = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        received[0] = e;
        return true;
    });
    assertTrue(result);
    assertEqual(INT8_MIN, received[0]);
    }

    /**
     * Verify every callback receives truncated -56 for element 200 on new Int8Array(new int[] {200})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_1400
     * @tc.name int8ArrayEveryPart01Test014
     * @tc.desc Verify every callback receives truncated -56 for element 200 on new Int8Array(new int[] {200})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test014() {
    Int8Array arr = new Int8Array(new int[] {200});
    int[] received = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        received[0] = e;
        return true;
    });
    assertTrue(result);
    assertEqual(-56, received[0]);
    }

    /**
     * Verify every callback receives truncated -1 for element 255 on new Int8Array(new int[] {255})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_1500
     * @tc.name int8ArrayEveryPart01Test015
     * @tc.desc Verify every callback receives truncated -1 for element 255 on new Int8Array(new int[] {255})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test015() {
    Int8Array arr = new Int8Array(new int[] {255});
    int[] received = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        received[0] = e;
        return true;
    });
    assertTrue(result);
    assertEqual(-1, received[0]);
    }

    /**
     * Verify every callback receives truncated -128 for element 128 on new Int8Array(new int[] {128})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_1600
     * @tc.name int8ArrayEveryPart01Test016
     * @tc.desc Verify every callback receives truncated -128 for element 128 on new Int8Array(new int[] {128})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test016() {
    Int8Array arr = new Int8Array(new int[] {128});
    int[] received = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        received[0] = e;
        return true;
    });
    assertTrue(result);
    assertEqual(INT8_MIN, received[0]);
    }

    /**
     * Verify every callback receives truncated INT8_MAX for element -129 on new Int8Array(new int[] {-129})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_1700
     * @tc.name int8ArrayEveryPart01Test017
     * @tc.desc Verify every callback receives truncated INT8_MAX for element -129 on new Int8Array(new int[] {-129})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test017() {
    Int8Array arr = new Int8Array(new int[] {-129});
    int[] received = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        received[0] = e;
        return true;
    });
    assertTrue(result);
    assertEqual(INT8_MAX, received[0]);
    }

    /**
     * Verify every callback receives 0 for Number.NaN on Int8Array.of(Number.NaN)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_1800
     * @tc.name int8ArrayEveryPart01Test018
     * @tc.desc Verify every callback receives 0 for Number.NaN on Int8Array.of(Number.NaN)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test018() {
    Int8Array arr = Int8Array.of(Double.NaN);
    int[] received = {999};
    boolean result = arr.every((e, unusedIndex, array) -> {
        received[0] = e;
        return true;
    });
    assertTrue(result);
    assertEqual(0, received[0]);
    }

    /**
     * Verify every callback receives truncated 1 for 1.9 on Int8Array.of(1.9)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_1900
     * @tc.name int8ArrayEveryPart01Test019
     * @tc.desc Verify every callback receives truncated 1 for 1.9 on Int8Array.of(1.9)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test019() {
    Int8Array arr = Int8Array.of(1.9);
    int[] received = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        received[0] = e;
        return true;
    });
    assertTrue(result);
    assertEqual(1, received[0]);
    }

    /**
     * Verify every callback receives truncated -1 for -1.9 on Int8Array.of(-1.9)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_2000
     * @tc.name int8ArrayEveryPart01Test020
     * @tc.desc Verify every callback receives truncated -1 for -1.9 on Int8Array.of(-1.9)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test020() {
    Int8Array arr = Int8Array.of(-1.9);
    int[] received = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        received[0] = e;
        return true;
    });
    assertTrue(result);
    assertEqual(-1, received[0]);
    }

    /**
     * Verify every callback encodes visited elements as 357 on new Int8Array(new int[] {3, 5, 7})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_2100
     * @tc.name int8ArrayEveryPart01Test021
     * @tc.desc Verify every callback encodes visited elements as 357 on new Int8Array(new int[] {3, 5, 7})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test021() {
    Int8Array arr = new Int8Array(new int[] {3, 5, 7});
    int[] encoded = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        encoded[0] = encoded[0] * 10 + e;
        return true;
    });
    assertTrue(result);
    assertEqual(357, encoded[0]);
    }

    /**
     * Verify every stops at first element with callback index 0 on new Int8Array(new int[] {5, 10, 15})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_2200
     * @tc.name int8ArrayEveryPart01Test022
     * @tc.desc Verify every stops at first element with callback index 0 on new Int8Array(new int[] {5, 10, 15})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test022() {
    Int8Array arr = new Int8Array(new int[] {5, 10, 15});
    int[] firstIndex = {-1};
    boolean result = arr.every((e, i, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
            firstIndex[0] = i;
        return false;
        });
    assertFalse(result);
    assertEqual(0, firstIndex[0]);
    }

    /**
     * Verify every callback encodes visited indexes as 12 on new Int8Array(new int[] {4, 5, 6})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_2300
     * @tc.name int8ArrayEveryPart01Test023
     * @tc.desc Verify every callback encodes visited indexes as 12 on new Int8Array(new int[] {4, 5, 6})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test023() {
    Int8Array arr = new Int8Array(new int[] {4, 5, 6});
    int[] indexSum = {0};
    boolean result = arr.every((e, i, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
            indexSum[0] = indexSum[0] * 10 + i;
        return true;
        });
    assertTrue(result);
    assertEqual(12, indexSum[0]);
    }

    /**
     * Verify every callback receives index 0 on new Int8Array(new int[] {42})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_2400
     * @tc.name int8ArrayEveryPart01Test024
     * @tc.desc Verify every callback receives index 0 on new Int8Array(new int[] {42})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test024() {
    Int8Array arr = new Int8Array(new int[] {42});
    int[] idx = {-1};
    boolean result = arr.every((e, i, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
            idx[0] = i;
        return true;
        });
    assertTrue(result);
    assertEqual(0, idx[0]);
    }

    /**
     * Verify every callback receives last index 4 on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_2500
     * @tc.name int8ArrayEveryPart01Test025
     * @tc.desc Verify every callback receives last index 4 on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test025() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    int[] lastIndex = {-1};
    boolean result = arr.every((e, i, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
            lastIndex[0] = i;
        return true;
        });
    assertTrue(result);
    assertEqual(4, lastIndex[0]);
    }

    /**
     * Verify predicate index === 0 true every false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_2600
     * @tc.name int8ArrayEveryPart01Test026
     * @tc.desc Verify predicate index === 0 true every false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test026() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    boolean result = arr.every((e, i, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
        return i == 0;
        });
    assertFalse(result);
    }

    /**
     * Verify predicate index === length - 1 true every false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_2700
     * @tc.name int8ArrayEveryPart01Test027
     * @tc.desc Verify predicate index === length - 1 true every false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test027() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    boolean result = arr.every((e, i, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
        return i == 2;
        });
    assertFalse(result);
    }

    /**
     * Verify every returns false when element at index 1 fails i % 2 === 0, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_2800
     * @tc.name int8ArrayEveryPart01Test028
     * @tc.desc Verify every returns false when element at index 1 fails i % 2 === 0, on new Int8Array(new int[] {1, 2,
     * 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test028() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.every((e, i, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
        return i % 2 == 0;
        });
    assertFalse(result);
    }

    /**
     * Verify every callback receives the same array reference, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_2900
     * @tc.name int8ArrayEveryPart01Test029
     * @tc.desc Verify every callback receives the same array reference, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test029() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean[] sameRef = {false};
    boolean result = arr.every((e, unusedIndex, a) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
            sameRef[0] = a == arr;
        return true;
        });
    assertTrue(result);
    assertTrue(sameRef[0]);
    }

    /**
     * Verify every callback captures a.length 4, on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_3000
     * @tc.name int8ArrayEveryPart01Test030
     * @tc.desc Verify every callback captures a.length 4, on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test030() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    int[] arrLen = {-1};
    boolean result = arr.every((e, unusedIndex, a) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
            arrLen[0] = a.length();
        return true;
        });
    assertTrue(result);
    assertEqual(4, arrLen[0]);
    }

    /**
     * Verify every returns true when a.length equals 3, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_3100
     * @tc.name int8ArrayEveryPart01Test031
     * @tc.desc Verify every returns true when a.length equals 3, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test031() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.every((e, unusedIndex, a) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
        return a.length() == 3;
        });
    assertTrue(result);
    }

    /**
     * Verify every callback sees $_get(i) matching element e, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_3200
     * @tc.name int8ArrayEveryPart01Test032
     * @tc.desc Verify every callback sees $_get(i) matching element e, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test032() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    boolean[] consistent = {true};
    boolean result = arr.every((e, i, a) -> {
        if (a.get(i) != e) {
            consistent[0] = false;
        }
        return true;
        });
    assertTrue(result);
    assertTrue(consistent[0]);
    }

    /**
     * Verify every expects 4 byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_3300
     * @tc.name int8ArrayEveryPart01Test033
     * @tc.desc Verify every expects 4 byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test033() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    int[] bl = {-1};
    boolean result = arr.every((e, unusedIndex, a) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
            bl[0] = a.byteLength();
        return true;
        });
    assertTrue(result);
    assertEqual(4, bl[0]);
    }

    /**
     * Verify every callback array param has byteOffset 2 on new Int8Array(buf, 2, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_3400
     * @tc.name int8ArrayEveryPart01Test034
     * @tc.desc Verify every callback array param has byteOffset 2 on new Int8Array(buf, 2, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test034() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 2, 4);
    int[] offset = {-1};
    boolean result = arr.every((e, unusedIndex, a) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
            offset[0] = a.byteOffset();
        return true;
        });
    assertTrue(result);
    assertEqual(2, offset[0]);
    }

    /**
     * Verify every throws RangeError from first callback invocation, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_3500
     * @tc.name int8ArrayEveryPart01Test035
     * @tc.desc Verify every throws RangeError from first callback invocation, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test035() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    boolean result = arr.every((e, unusedIndex, array) -> {
    if (e < INT8_MIN || e > INT8_MAX) {
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
     * Verify every propagates TypeError thrown in callback on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_3600
     * @tc.name int8ArrayEveryPart01Test036
     * @tc.desc Verify every propagates TypeError thrown in callback on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test036() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    boolean result = arr.every((e, unusedIndex, array) -> {
    if (e < INT8_MIN || e > INT8_MAX) {
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
     * Verify every propagates Error thrown in callback on new Int8Array(new int[] {1, 2})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_3700
     * @tc.name int8ArrayEveryPart01Test037
     * @tc.desc Verify every propagates Error thrown in callback on new Int8Array(new int[] {1, 2})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test037() {
    Int8Array arr = new Int8Array(new int[] {1, 2});
    try {
    boolean result = arr.every((e, unusedIndex, array) -> {
    if (e < INT8_MIN || e > INT8_MAX) {
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
     * Verify every throws RangeError when callback i 1, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_3800
     * @tc.name int8ArrayEveryPart01Test038
     * @tc.desc Verify every throws RangeError when callback i 1, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test038() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    boolean result = arr.every((e, i, array) -> {
    if (e < INT8_MIN || e > INT8_MAX) {
    return false;
    }
    if (i == 1) {
    throw new RangeError("mid error");
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
     * Verify every throws RangeError when callback i 2, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_3900
     * @tc.name int8ArrayEveryPart01Test039
     * @tc.desc Verify every throws RangeError when callback i 2, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test039() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    boolean result = arr.every((e, i, array) -> {
    if (e < INT8_MIN || e > INT8_MAX) {
    return false;
    }
    if (i == 2) {
    throw new RangeError("last error");
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
     * Verify every propagates TypeError thrown in callback on single-element new Int8Array(new int[] {42})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_4000
     * @tc.name int8ArrayEveryPart01Test040
     * @tc.desc Verify every propagates TypeError thrown in callback on single-element new Int8Array(new int[] {42})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test040() {
    Int8Array arr = new Int8Array(new int[] {42});
    try {
    boolean result = arr.every((e, unusedIndex, array) -> {
    if (e < INT8_MIN || e > INT8_MAX) {
    return false;
    }
    throw new TypeError("single error");
    });
    assertTrue(result);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every stops early when predicate returns false before an element that wo
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_4100
     * @tc.name int8ArrayEveryPart01Test041
     * @tc.desc Verify every stops early when predicate returns false before an element that would throw, on new
     * Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test041() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    try {
    boolean result = arr.every((e, i, array) -> {
    if (e < INT8_MIN || e > INT8_MAX) {
    return false;
    }
    if (i == 1) {
    throw new RangeError("should not reach");
    }
    return false;
    });
    assertFalse(result);
    } catch (RangeError e) {
    fail();
    }
    }

    /**
     * Verify every on empty Int8Array(0) returns true without invoking callback, no exception thrown
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_4200
     * @tc.name int8ArrayEveryPart01Test042
     * @tc.desc Verify every on empty Int8Array(0) returns true without invoking callback, no exception thrown
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test042() {
    Int8Array arr = new Int8Array(0);
    boolean[] threw = {false};
    boolean result = false;
    try {
    result = arr.every((e, unusedIndex, array) -> {
    if (e < INT8_MIN || e > INT8_MAX) {
    return false;
    }
    throw new RangeError("should not reach");
    });
    } catch (RangeError e) {
    threw[0] = true;
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertFalse(threw[0]);
    assertTrue(result);
    }

    /**
     * Verify every propagates Error with custom message from callback on new Int8Array(new int[] {1})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_4300
     * @tc.name int8ArrayEveryPart01Test043
     * @tc.desc Verify every propagates Error with custom message from callback on new Int8Array(new int[] {1})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test043() {
    Int8Array arr = new Int8Array(new int[] {1});
    try {
    boolean result = arr.every((e, unusedIndex, array) -> {
    if (e < INT8_MIN || e > INT8_MAX) {
    return false;
    }
    return BasTest.throwTestError("custom message 12345");
    });
    assertTrue(result);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("custom message 12345", e.getMessage());
    }
    }

    /**
     * Verify every stops after first false callback on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_4400
     * @tc.name int8ArrayEveryPart01Test044
     * @tc.desc Verify every stops after first false callback on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test044() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    int[] callCount = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
            callCount[0] = callCount[0] + 1;
        return false;
        });
    assertFalse(result);
    assertEqual(1, callCount[0]);
    }

    /**
     * Verify every invokes callback 3 times until i < 2 is false on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_4500
     * @tc.name int8ArrayEveryPart01Test045
     * @tc.desc Verify every invokes callback 3 times until i < 2 is false on new Int8Array(new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test045() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    int[] callCount = {0};
    boolean result = arr.every((e, i, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
            callCount[0] = callCount[0] + 1;
        return i < 2;
        });
    assertFalse(result);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify every callback returns false at i 3, invoked 4 times, on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_4600
     * @tc.name int8ArrayEveryPart01Test046
     * @tc.desc Verify every callback returns false at i 3, invoked 4 times, on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test046() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    int[] callCount = {0};
    boolean result = arr.every((e, i, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
            callCount[0] = callCount[0] + 1;
        return i < 3;
        });
    assertFalse(result);
    assertEqual(4, callCount[0]);
    }

    /**
     * Verify every callback invoked for all 4 elements, on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_4700
     * @tc.name int8ArrayEveryPart01Test047
     * @tc.desc Verify every callback invoked for all 4 elements, on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test047() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    int[] callCount = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
            callCount[0] = callCount[0] + 1;
        return true;
        });
    assertTrue(result);
    assertEqual(4, callCount[0]);
    }

    /**
     * Verify every on empty array returns true without invoking callback on new Int8Array(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_4800
     * @tc.name int8ArrayEveryPart01Test048
     * @tc.desc Verify every on empty array returns true without invoking callback on new Int8Array(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test048() {
    Int8Array arr = new Int8Array(0);
    int[] callCount = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
            callCount[0] = callCount[0] + 1;
        return true;
        });
    assertEqual(0, callCount[0]);
    assertTrue(result);
    }

    /**
     * Verify every expects 1 when callback always returns false, on new Int8Array(new int[] {42})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_4900
     * @tc.name int8ArrayEveryPart01Test049
     * @tc.desc Verify every expects 1 when callback always returns false, on new Int8Array(new int[] {42})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test049() {
    Int8Array arr = new Int8Array(new int[] {42});
    int[] callCount = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
            callCount[0] = callCount[0] + 1;
        return false;
        });
    assertFalse(result);
    assertEqual(1, callCount[0]);
    }

    /**
     * Verify every expects 1 when callback always returns true, on new Int8Array(new int[] {42})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_5000
     * @tc.name int8ArrayEveryPart01Test050
     * @tc.desc Verify every expects 1 when callback always returns true, on new Int8Array(new int[] {42})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test050() {
    Int8Array arr = new Int8Array(new int[] {42});
    int[] callCount = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
            callCount[0] = callCount[0] + 1;
        return true;
        });
    assertEqual(1, callCount[0]);
    assertTrue(result);
    }

    /**
     * Verify every with predicate element < 2 stops at element 2 and returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_5100
     * @tc.name int8ArrayEveryPart01Test051
     * @tc.desc Verify every with predicate element < 2 stops at element 2 and returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test051() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    int[] lastSeen = {-1};
    boolean result = arr.every((e, unusedIndex, array) -> {
        lastSeen[0] = e;
        return e < 2;
    });
    assertFalse(result);
    assertEqual(2, lastSeen[0]);
    }

    /**
     * Verify every on empty new Int8Array(0) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_5200
     * @tc.name int8ArrayEveryPart01Test052
     * @tc.desc Verify every on empty new Int8Array(0) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test052() {
    Int8Array arr = new Int8Array(0);
    boolean result = arr.every((e, unusedIndex, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
        return false;
        });
    assertTrue(result);
    }

    /**
     * Verify every on empty subarray(1, 1) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_5300
     * @tc.name int8ArrayEveryPart01Test053
     * @tc.desc Verify every on empty subarray(1, 1) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test053() {
    Int8Array base = new Int8Array(new int[] {1, 2, 3});
    Int8Array empty = base.subarray(1, 1);
    boolean result = empty.every((e, unusedIndex, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
        return false;
        });
    assertTrue(result);
    }

    /**
     * Verify every on empty slice(5, 1) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_5400
     * @tc.name int8ArrayEveryPart01Test054
     * @tc.desc Verify every on empty slice(5, 1) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test054() {
    Int8Array base = new Int8Array(new int[] {1, 2, 3});
    Int8Array empty = base.slice(5, 1);
    boolean result = empty.every((e, unusedIndex, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
        return false;
        });
    assertTrue(result);
    }

    /**
     * Verify every on empty ArrayBuffer view returns true on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_5500
     * @tc.name int8ArrayEveryPart01Test055
     * @tc.desc Verify every on empty ArrayBuffer view returns true on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test055() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int8Array arr = new Int8Array(buf);
    boolean result = arr.every((e, unusedIndex, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
        return false;
        });
    assertTrue(result);
    }

    /**
     * Verify every with predicate element > threshold returns false because 5 is not > 8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_5600
     * @tc.name int8ArrayEveryPart01Test056
     * @tc.desc Verify every with predicate element > threshold returns false because 5 is not > 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test056() {
    Int8Array arr = new Int8Array(new int[] {5, 10, 15});
    int threshold = 8;
    boolean result = arr.every((e, unusedIndex, array) -> {
        return e > threshold;
        });
    assertFalse(result);
    }

    /**
     * Verify every invokes callback 3 times for all elements on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_5700
     * @tc.name int8ArrayEveryPart01Test057
     * @tc.desc Verify every invokes callback 3 times for all elements on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test057() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] counter = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        counter[0] = counter[0] + 1;
        return e < 3;
    });
    assertFalse(result);
    assertEqual(3, counter[0]);
    }

    /**
     * Verify every with predicate element == ref[i] returns true for all matching ref elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_5800
     * @tc.name int8ArrayEveryPart01Test058
     * @tc.desc Verify every with predicate element == ref[i] returns true for all matching ref elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test058() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    List<Integer> ref = java.util.Arrays.asList(10, 20, 30);
    boolean result = arr.every((e, i, array) -> {
        return e == ref.get(i);
        });
    assertTrue(result);
    }

    /**
     * Verify every callback sums visited elements to 6 on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_5900
     * @tc.name int8ArrayEveryPart01Test059
     * @tc.desc Verify every callback sums visited elements to 6 on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test059() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int[] sum = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        sum[0] = sum[0] + e;
        return true;
    });
    assertTrue(result);
    assertEqual(6, sum[0]);
    }

    /**
     * Verify every stops at element 3 collecting 2 elements below 3 on new Int8Array(new int[] {1, 2, 3, 4, 5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_6000
     * @tc.name int8ArrayEveryPart01Test060
     * @tc.desc Verify every stops at element 3 collecting 2 elements below 3 on new Int8Array(
     * new int[] {1, 2, 3, 4, 5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test060() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4, 5});
    List<Integer> passed = new ArrayList<>();
    boolean result = arr.every((e, unusedIndex, array) -> {
        if (e < 3) {
            passed.add(e);
        return true;
        }
        return false;
        });
    assertFalse(result);
    assertEqual(2, passed.size());
    }

    /**
     * Verify every returns true when element e equals (i + 1) * 10, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_6100
     * @tc.name int8ArrayEveryPart01Test061
     * @tc.desc Verify every returns true when element e equals (i + 1) * 10, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test061() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    boolean result = arr.every((e, i, array) -> {
        return e == (i + 1) * 10;
        });
    assertTrue(result);
    }

    /**
     * Verify every with predicate element <= a.length returns true for all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_6200
     * @tc.name int8ArrayEveryPart01Test062
     * @tc.desc Verify every with predicate element <= a.length returns true for all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test062() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.every((e, unusedIndex, a) -> {
        return e <= a.length();
        });
    assertTrue(result);
    }

    /**
     * Verify every callback reads a.$_get(i) equals (i+1)*5 on new Int8Array(new int[] {5, 10, 15})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_6300
     * @tc.name int8ArrayEveryPart01Test063
     * @tc.desc Verify every callback reads a.$_get(i) equals (i+1)*5 on new Int8Array(new int[] {5, 10, 15})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test063() {
    Int8Array arr = new Int8Array(new int[] {5, 10, 15});
    boolean result = arr.every((e, i, a) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
        return a.get(i) == (i + 1) * 5;
        });
    assertTrue(result);
    }

    /**
     * Verify every returns true when e === i + 1 and a.length === 3, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_6400
     * @tc.name int8ArrayEveryPart01Test064
     * @tc.desc Verify every returns true when e === i + 1 and a.length === 3, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test064() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.every((e, i, a) -> {
        return e == i + 1 && a.length() == 3;
        });
    assertTrue(result);
    }

    /**
     * Verify every with predicate element >= 100 returns true for all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_6500
     * @tc.name int8ArrayEveryPart01Test065
     * @tc.desc Verify every with predicate element >= 100 returns true for all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test065() {
    Int8Array arr = new Int8Array(new int[] {100, 110, 120});
    boolean result = arr.every((e, unusedIndex, array) -> {
        return e >= 100;
        });
    assertTrue(result);
    }

    /**
     * Verify every returns true when all indices satisfy i < 4, on new Int8Array(new int[] {1, 2, 3, 4})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_6600
     * @tc.name int8ArrayEveryPart01Test066
     * @tc.desc Verify every returns true when all indices satisfy i < 4, on new Int8Array(new int[] {1, 2, 3, 4})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test066() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3, 4});
    boolean result = arr.every((e, i, array) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
        return i < 4;
        });
    assertTrue(result);
    }

    /**
     * Verify every returns true when a.length > 0, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_6700
     * @tc.name int8ArrayEveryPart01Test067
     * @tc.desc Verify every returns true when a.length > 0, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test067() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.every((e, unusedIndex, a) -> {
        if (e < INT8_MIN || e > INT8_MAX) {
        return false;
        }
        return a.length() > 0;
        });
    assertTrue(result);
    }

    /**
     * Verify every(fn) with named callback fn returning e > 0 is true, on new Int8Array(new int[] {1, 2, 3})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_6800
     * @tc.name int8ArrayEveryPart01Test068
     * @tc.desc Verify every(fn) with named callback fn returning e > 0 is true, on new Int8Array(new int[] {1, 2, 3})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test068() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    Int8Array.Int8ArrayFinder fn = (e, i, a) -> {
        return e > 0;
        };
    boolean result = arr.every(fn);
    assertTrue(result);
    }

    /**
     * Verify every with predicate element > 0 via isPositive returns true for all positive elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_6900
     * @tc.name int8ArrayEveryPart01Test069
     * @tc.desc Verify every with predicate element > 0 via isPositive returns true for all positive elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test069() {
    Int8Array.Int8ArrayFinder isPositive = (e, i, a) -> {
        return e > 0;
        };
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    boolean result = arr.every(isPositive);
    assertTrue(result);
    }

    /**
     * Verify every returns true when e > 0 and e < 100 and i >= 0, on new Int8Array(new int[] {10, 20, 30})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_7000
     * @tc.name int8ArrayEveryPart01Test070
     * @tc.desc Verify every returns true when e > 0 and e < 100 and i >= 0, on new Int8Array(new int[] {10, 20, 30})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test070() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    boolean result = arr.every((e, i, array) -> {
        return e > 0 && e < 100 && i >= 0;
        });
    assertTrue(result);
    }

    /**
     * Verify every returns true when all four elements are 0, on new Int8Array(new int[] {0, 0, 0, 0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_7100
     * @tc.name int8ArrayEveryPart01Test071
     * @tc.desc Verify every returns true when all four elements are 0, on new Int8Array(new int[] {0, 0, 0, 0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test071() {
    Int8Array arr = new Int8Array(new int[] {0, 0, 0, 0});
    boolean result = arr.every((e, unusedIndex, array) -> {
        return e == 0;
        });
    assertTrue(result);
    }

    /**
     * Verify every with predicate element < 0 returns true for all negative elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_7200
     * @tc.name int8ArrayEveryPart01Test072
     * @tc.desc Verify every with predicate element < 0 returns true for all negative elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test072() {
    Int8Array arr = new Int8Array(new int[] {-1, -50, INT8_MIN});
    boolean result = arr.every((e, unusedIndex, array) -> {
        return e < 0;
        });
    assertTrue(result);
    }

    /**
     * Verify every invokes callback 100 times and returns true on new Int8Array(100)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_7300
     * @tc.name int8ArrayEveryPart01Test073
     * @tc.desc Verify every invokes callback 100 times and returns true on new Int8Array(100)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test073() {
    Int8Array arr = new Int8Array(100);
    int[] callCount = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        callCount[0] = callCount[0] + 1;
        return e == 0;
    });
    assertTrue(result);
    assertEqual(100, callCount[0]);
    }

    /**
     * Verify every on ArrayBuffer view invokes callback 4 times and returns true on new Int8Array(buf)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_7400
     * @tc.name int8ArrayEveryPart01Test074
     * @tc.desc Verify every on ArrayBuffer view invokes callback 4 times and returns true on new Int8Array(buf)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test074() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int8Array arr = new Int8Array(buf);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    int[] callCount = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        callCount[0] = callCount[0] + 1;
        return e > 0;
    });
    assertEqual(4, callCount[0]);
    assertTrue(result);
    }

    /**
     * Verify every expects 0, on Int8Array.of(Number.POSITIVE_INFINITY), callback receives e = 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_7500
     * @tc.name int8ArrayEveryPart01Test075
     * @tc.desc Verify every expects 0, on Int8Array.of(Number.POSITIVE_INFINITY), callback receives e = 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEveryPart01Test075() {
    Int8Array arr = Int8Array.of(Double.POSITIVE_INFINITY);
    int[] received = {0};
    boolean result = arr.every((e, unusedIndex, array) -> {
        received[0] = e;
        return true;
    });
    assertTrue(result);
    assertEqual(0, received[0]);
    }

    /**
     * Verify every expects 0, on Int8Array.of(-Number.POSITIVE_INFINITY), callback receives e = 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_EVERY_PART01_7600
     * @tc.name int8ArrayEveryPart01Test076
     * @tc.desc Verify every expects 0, on Int8Array.of(-Number.POSITIVE_INFINITY), callback receives e = 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
