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
import basetype.common.RangeError;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayConstructorPart06Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayConstructorPart06Test extends BasTest {
    private static int INT8_MAX = 127;
    private static int INT8_MIN = -128;

    /**
     * Verify length expects 3, on new Int8Array(new double[] {1.0, 2.0, 3.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_0100
     * @tc.name int8ArrayConstructorPart06Test001
     * @tc.desc Verify length expects 3, on new Int8Array(new double[] {1.0, 2.0, 3.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test001() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    assertEqual(3, arr.length());
    }

    /**
     * Verify length expects 0 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_0200
     * @tc.name int8ArrayConstructorPart06Test002
     * @tc.desc Verify length expects 0 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test002() {
    double[] src = new double[] {};
    Int8Array arr = new Int8Array(src);
    assertEqual(0, arr.length());
    }

    /**
     * Verify length expects 1 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_0300
     * @tc.name int8ArrayConstructorPart06Test003
     * @tc.desc Verify length expects 1 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test003() {
    double[] src = new double[] {42.0};
    Int8Array arr = new Int8Array(src);
    assertEqual(1, arr.length());
    }

    /**
     * Verify length expects 16 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_0400
     * @tc.name int8ArrayConstructorPart06Test004
     * @tc.desc Verify length expects 16 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test004() {
    double[] src = new double[] {1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0,
        9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0};
    Int8Array arr = new Int8Array(src);
    assertEqual(16, arr.length());
    }

    /**
     * Verify $_get expects 0, with $_get(0), on new Int8Array(new double[] {Number.NaN})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_0500
     * @tc.name int8ArrayConstructorPart06Test005
     * @tc.desc Verify $_get expects 0, with $_get(0), on new Int8Array(new double[] {Number.NaN})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test005() {
    double[] src = new double[] {Double.NaN};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new double[] {9007199254740991.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_0600
     * @tc.name int8ArrayConstructorPart06Test006
     * @tc.desc Verify $_get expects -1, on new Int8Array(new double[] {9007199254740991.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test006() {
    double[] src = new double[] {9007199254740991.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_get expects 0, with $_get(0), on new Int8Array(new int[] {5e-324})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_0700
     * @tc.name int8ArrayConstructorPart06Test007
     * @tc.desc Verify $_get expects 0, with $_get(0), on new Int8Array(new int[] {5e-324})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test007() {
    double[] src = new double[] {5e-324};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects 0, with $_get(0), on new Int8Array(new double[] {2.220446049250313e-16})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_0800
     * @tc.name int8ArrayConstructorPart06Test008
     * @tc.desc Verify $_get expects 0, with $_get(0), on new Int8Array(new double[] {2.220446049250313e-16})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test008() {
    double[] src = new double[] {2.220446049250313e-16};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects 1, on new Int8Array(new double[] {1.9})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_0900
     * @tc.name int8ArrayConstructorPart06Test009
     * @tc.desc Verify $_get expects 1, on new Int8Array(new double[] {1.9})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test009() {
    double[] src = new double[] {1.9};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new double[] {-1.9})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_1000
     * @tc.name int8ArrayConstructorPart06Test010
     * @tc.desc Verify $_get expects -1, on new Int8Array(new double[] {-1.9})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test010() {
    double[] src = new double[] {-1.9};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_get expects 0, with $_get(0), on new Int8Array(new double[] {0.5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_1100
     * @tc.name int8ArrayConstructorPart06Test011
     * @tc.desc Verify $_get expects 0, with $_get(0), on new Int8Array(new double[] {0.5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test011() {
    double[] src = new double[] {0.5};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects 0, with $_get(0), on new Int8Array(new double[] {-0.5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_1200
     * @tc.name int8ArrayConstructorPart06Test012
     * @tc.desc Verify $_get expects 0, with $_get(0), on new Int8Array(new double[] {-0.5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test012() {
    double[] src = new double[] {-0.5};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(new double[] {127.9})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_1300
     * @tc.name int8ArrayConstructorPart06Test013
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(new double[] {127.9})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test013() {
    double[] src = new double[] {127.9};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_get expects -128, with $_get(0), on new Int8Array(new double[] {-128.9})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_1400
     * @tc.name int8ArrayConstructorPart06Test014
     * @tc.desc Verify $_get expects -128, with $_get(0), on new Int8Array(new double[] {-128.9})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test014() {
    double[] src = new double[] {-128.9};
    Int8Array arr = new Int8Array(src);
    Integer r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get expects -128, with $_get(0), on new Int8Array(new double[] {128.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_1500
     * @tc.name int8ArrayConstructorPart06Test015
     * @tc.desc Verify $_get expects -128, with $_get(0), on new Int8Array(new double[] {128.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test015() {
    double[] src = new double[] {128.0};
    Int8Array arr = new Int8Array(src);
    Integer r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(new double[] {-129.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_1600
     * @tc.name int8ArrayConstructorPart06Test016
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(new double[] {-129.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test016() {
    double[] src = new double[] {-129.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new double[] {255.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_1700
     * @tc.name int8ArrayConstructorPart06Test017
     * @tc.desc Verify $_get expects -1, on new Int8Array(new double[] {255.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test017() {
    double[] src = new double[] {255.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_get expects 0, with $_get(0), on new Int8Array(new double[] {256.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_1800
     * @tc.name int8ArrayConstructorPart06Test018
     * @tc.desc Verify $_get expects 0, with $_get(0), on new Int8Array(new double[] {256.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test018() {
    double[] src = new double[] {256.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects INT8_MAX, on new Int8Array(new double[] {127.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_1900
     * @tc.name int8ArrayConstructorPart06Test019
     * @tc.desc Verify $_get expects INT8_MAX, on new Int8Array(new double[] {127.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test019() {
    double[] src = new double[] {127.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(INT8_MAX, arr.get(0));
    }

    /**
     * Verify $_get expects -128, with $_get(0), on new Int8Array(new double[] {-128.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_2000
     * @tc.name int8ArrayConstructorPart06Test020
     * @tc.desc Verify $_get expects -128, with $_get(0), on new Int8Array(new double[] {-128.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test020() {
    double[] src = new double[] {-128.0};
    Int8Array arr = new Int8Array(src);
    Integer r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get expects 0, with $_get(0), on new Int8Array(new double[] {0.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_2100
     * @tc.name int8ArrayConstructorPart06Test021
     * @tc.desc Verify $_get expects 0, with $_get(0), on new Int8Array(new double[] {0.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test021() {
    double[] src = new double[] {0.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects 0, with $_get(0), on new Int8Array(new double[] {-0.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_2200
     * @tc.name int8ArrayConstructorPart06Test022
     * @tc.desc Verify $_get expects 0, with $_get(0), on new Int8Array(new double[] {-0.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test022() {
    double[] src = new double[] {-0.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new double[] {-1.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_2300
     * @tc.name int8ArrayConstructorPart06Test023
     * @tc.desc Verify $_get expects -1, on new Int8Array(new double[] {-1.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test023() {
    double[] src = new double[] {-1.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(-1, arr.get(0));
    }

    /**
     * Verify $_get expects 5 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_2400
     * @tc.name int8ArrayConstructorPart06Test024
     * @tc.desc Verify $_get expects 5 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test024() {
    double[] src = new double[] {5.0, 5.0, 5.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify $_get expects 0, with $_get(0), $_get(2), on new Int8Array(new double[] {0.0, 0.0, 0.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_2500
     * @tc.name int8ArrayConstructorPart06Test025
     * @tc.desc Verify $_get expects 0, with $_get(0), $_get(2), on new Int8Array(new double[] {0.0, 0.0, 0.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test025() {
    double[] src = new double[] {0.0, 0.0, 0.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify $_get expects -128, with $_get(2), on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_2600
     * @tc.name int8ArrayConstructorPart06Test026
     * @tc.desc Verify $_get expects -128, with $_get(2), on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test026() {
    double[] src = new double[] {-1.0, 1.0, -128.0, 127.0};
    Int8Array arr = new Int8Array(src);
    Integer r1 = arr.get(2);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get expects -128, with $_get(0), on new Int8Array(new double[] {-128.0, 127.0, 0.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_2700
     * @tc.name int8ArrayConstructorPart06Test027
     * @tc.desc Verify $_get expects -128, with $_get(0), on new Int8Array(new double[] {-128.0, 127.0, 0.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test027() {
    double[] src = new double[] {-128.0, 127.0, 0.0};
    Int8Array arr = new Int8Array(src);
    Integer r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get expects -128, with $_get(0), $_get(1), on new Int8Array(new double[] {128.0, -129.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_2800
     * @tc.name int8ArrayConstructorPart06Test028
     * @tc.desc Verify $_get expects -128, with $_get(0), $_get(1), on new Int8Array(new double[] {128.0, -129.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test028() {
    double[] src = new double[] {128.0, -129.0};
    Int8Array arr = new Int8Array(src);
    Integer r1 = arr.get(0);
    int e1 = INT8_MIN;
    assertEqualInt(e1, r1);
    assertEqualInt(INT8_MAX, arr.get(1));
    }

    /**
     * Verify $_get expects -1, on new Int8Array(new double[] {255.0, 256.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_2900
     * @tc.name int8ArrayConstructorPart06Test029
     * @tc.desc Verify $_get expects -1, on new Int8Array(new double[] {255.0, 256.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test029() {
    double[] src = new double[] {255.0, 256.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(-1, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify $_get expects 1, on new Int8Array(new double[] {1.9, -1.9, 0.5, -0.5})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_3000
     * @tc.name int8ArrayConstructorPart06Test030
     * @tc.desc Verify $_get expects 1, on new Int8Array(new double[] {1.9, -1.9, 0.5, -0.5})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test030() {
    double[] src = new double[] {1.9, -1.9, 0.5, -0.5};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify $_set on new Int8Array(src) does not modify source FixedArray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_3100
     * @tc.name int8ArrayConstructorPart06Test031
     * @tc.desc Verify $_set on new Int8Array(src) does not modify source FixedArray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test031() {
    double[] src = new double[] {1.0, 2.0};
    Int8Array arr = new Int8Array(src);
    arr.set(0, 99);
    assertEqual(1.0, src[0]);
    }

    /**
     * Verify src immutability: src[0] remains 128.0 after new Int8Array(src) construction
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_3200
     * @tc.name int8ArrayConstructorPart06Test032
     * @tc.desc Verify src immutability: src[0] remains 128.0 after new Int8Array(src) construction
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test032() {
    double[] src = new double[] {128.0};
    Int8Array arr = new Int8Array(src);
    assertEqual(128.0, src[0]);
    int r1 = arr.length();
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify src immutability: src[0] remains 1.9 after new Int8Array(src) construction
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_3300
     * @tc.name int8ArrayConstructorPart06Test033
     * @tc.desc Verify src immutability: src[0] remains 1.9 after new Int8Array(src) construction
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test033() {
    double[] src = new double[] {1.9};
    Int8Array arr = new Int8Array(src);
    assertEqual(1.9, src[0]);
    int r1 = arr.length();
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify length expects 3, on new Int8Array(new double[] {10.0, 20.0, 30.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_3500
     * @tc.name int8ArrayConstructorPart06Test035
     * @tc.desc Verify length expects 3, on new Int8Array(new double[] {10.0, 20.0, 30.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test035() {
    double[] src = new double[] {10.0, 20.0, 30.0};
    Int8Array arr = new Int8Array(src);
    assertEqual(3, arr.length());
    }

    /**
     * Verify byteLength of new Int8Array(src) returns 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_3600
     * @tc.name int8ArrayConstructorPart06Test036
     * @tc.desc Verify byteLength of new Int8Array(src) returns 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test036() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    int r1 = arr.byteLength();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify buffer.byteLength of new Int8Array(src) returns 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_3800
     * @tc.name int8ArrayConstructorPart06Test038
     * @tc.desc Verify buffer.byteLength of new Int8Array(src) returns 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test038() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    int r1 = arr.buffer().byteLength();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify byteOffset of new Int8Array(src) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_3900
     * @tc.name int8ArrayConstructorPart06Test039
     * @tc.desc Verify byteOffset of new Int8Array(src) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test039() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    int r1 = arr.byteOffset();
    int e1 = 0;
    assertEqual(e1, r1);
    }

    /**
     * Verify $_get expects 10 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_4000
     * @tc.name int8ArrayConstructorPart06Test040
     * @tc.desc Verify $_get expects 10 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test040() {
    double[] src = new double[] {10.0, 20.0, 30.0};
    Int8Array arr = new Int8Array(src);
    Integer r1 = arr.get(0);
    int e1 = 10;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify $_get expects 20 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_4100
     * @tc.name int8ArrayConstructorPart06Test041
     * @tc.desc Verify $_get expects 20 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test041() {
    double[] src = new double[] {10.0, 20.0, 30.0};
    Int8Array arr = new Int8Array(src);
    Integer r1 = arr.get(1);
    int e1 = 20;
    assertEqualInt(e1, r1);
    }

    /**
     * Verify at expects 10 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_4200
     * @tc.name int8ArrayConstructorPart06Test042
     * @tc.desc Verify at expects 10 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test042() {
    double[] src = new double[] {10.0, 20.0, 30.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(10, arr.at(0));
    }

    /**
     * Verify at expects 30, with at(-1), on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_4300
     * @tc.name int8ArrayConstructorPart06Test043
     * @tc.desc Verify at expects 30, with at(-1), on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test043() {
    double[] src = new double[] {10.0, 20.0, 30.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(30, arr.at(-1));
    }

    /**
     * Verify at expects 30, with at(arr.length - 1), on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_4400
     * @tc.name int8ArrayConstructorPart06Test044
     * @tc.desc Verify at expects 30, with at(arr.length - 1), on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test044() {
    double[] src = new double[] {10.0, 20.0, 30.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(30, arr.at(arr.length() - 1));
    }

    /**
     * Verify toString expects 3 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_4500
     * @tc.name int8ArrayConstructorPart06Test045
     * @tc.desc Verify toString expects 3 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test045() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    String r1 = String.valueOf(arr);
    String e1 = "1,2,3";
    assertEqual(e1, r1);
    }

    /**
     * Verify join on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_4600
     * @tc.name int8ArrayConstructorPart06Test046
     * @tc.desc Verify join on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test046() {
    double[] src = new double[] {};
    Int8Array arr = new Int8Array(src);
    String r1 = arr.join(",");
    String e1 = "";
    assertEqual(e1, r1);
    }

    /**
     * Verify join expects 3 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_4700
     * @tc.name int8ArrayConstructorPart06Test047
     * @tc.desc Verify join expects 3 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test047() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    String r1 = arr.join(",");
    String e1 = "1,2,3";
    assertEqual(e1, r1);
    }

    /**
     * Verify join('-') of new Int8Array(new double[] {1.0, 2.0, 3.0}) returns "1-2-3"
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_4800
     * @tc.name int8ArrayConstructorPart06Test048
     * @tc.desc Verify join('-') of new Int8Array(new double[] {1.0, 2.0, 3.0}) returns "1-2-3"
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test048() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    String r1 = arr.join("-");
    String e1 = "1-2-3";
    assertEqual(e1, r1);
    }

    /**
     * Verify join expects 123 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_4900
     * @tc.name int8ArrayConstructorPart06Test049
     * @tc.desc Verify join expects 123 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test049() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    String r1 = arr.join("");
    String e1 = "123";
    assertEqual(e1, r1);
    }

    /**
     * Verify keys expects 3 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_5100
     * @tc.name int8ArrayConstructorPart06Test051
     * @tc.desc Verify keys expects 3 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test051() {
    double[] src = new double[] {10.0, 20.0, 30.0};
    Int8Array arr = new Int8Array(src);
    int sum = 0;
    for (Integer k : arr.keys()) {
    sum = sum + k;
    }
    assertEqual(3, sum);
    }

    /**
     * Verify values expects 60 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_5200
     * @tc.name int8ArrayConstructorPart06Test052
     * @tc.desc Verify values expects 60 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test052() {
    double[] src = new double[] {10.0, 20.0, 30.0};
    Int8Array arr = new Int8Array(src);
    int sum = 0;
    for (Integer v : arr.values()) {
    sum = sum + v;
    }
    assertEqual(60, sum);
    }

    /**
     * Verify buffer.byteLength of new Int8Array(src) returns 3 for 3-element src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_5400
     * @tc.name int8ArrayConstructorPart06Test054
     * @tc.desc Verify buffer.byteLength of new Int8Array(src) returns 3 for 3-element src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test054() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    int r1 = arr.buffer().byteLength();
    int e1 = 3;
    assertEqual(e1, r1);
    }

    /**
     * Verify $_get expects 1, on new Int8Array(new double[] {1.0, 2.0})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_5500
     * @tc.name int8ArrayConstructorPart06Test055
     * @tc.desc Verify $_get expects 1, on new Int8Array(new double[] {1.0, 2.0})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test055() {
    double[] src = new double[] {1.0, 2.0};
    Int8Array arr1 = new Int8Array(src);
    Int8Array arr2 = new Int8Array(src);
    arr2.set(0, 99);
    assertEqualInt(1, arr1.get(0));
    }

    /**
     * Verify subarray(0) shares arr.buffer and length on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_5600
     * @tc.name int8ArrayConstructorPart06Test056
     * @tc.desc Verify subarray(0) shares arr.buffer and length on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test056() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    Int8Array view = arr.subarray(0);
    assertEqual(arr.buffer(), view.buffer());
    assertEqual(arr.length(), view.length());
    }

    /**
     * Verify subarray expects 1 subarray(1) byteOffset on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_5700
     * @tc.name int8ArrayConstructorPart06Test057
     * @tc.desc Verify subarray expects 1 subarray(1) byteOffset on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test057() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    Int8Array view = arr.subarray(1);
    assertEqual(1, view.byteOffset());
    }

    /**
     * Verify subarray shares buffer, $_set on subarray reflected in original expects 99 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_5800
     * @tc.name int8ArrayConstructorPart06Test058
     * @tc.desc Verify subarray shares buffer, $_set on subarray reflected in original expects 99 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test058() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    Int8Array view = arr.subarray(0);
    view.set(0, 99);
    assertEqualInt(99, arr.get(0));
    }

    /**
     * Verify subarray shares buffer, modification is bidirectional expects 88, with $
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_5900
     * @tc.name int8ArrayConstructorPart06Test059
     * @tc.desc Verify subarray shares buffer, modification is bidirectional expects 88, with $
     * _get(1), on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test059() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    Int8Array view = arr.subarray(0);
    arr.set(1, 88);
    assertEqualInt(88, view.get(1));
    }

    /**
     * Verify subarray shares buffer, modification is bidirectional expects 88, with $
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_6000
     * @tc.name int8ArrayConstructorPart06Test060
     * @tc.desc Verify subarray shares buffer, modification is bidirectional expects 88, with $
     * _get(2), on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test060() {
    double[] src = new double[] {1.0, 2.0, 3.0, 4.0};
    Int8Array arr = new Int8Array(src);
    Int8Array view1 = arr.subarray(0, 2);
    Int8Array view2 = arr.subarray(2, 4);
    view1.set(0, 99);
    view2.set(0, 88);
    assertEqualInt(88, arr.get(2));
    }

    /**
     * Verify subarray shares buffer, modification is bidirectional expects 99, with $
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_6100
     * @tc.name int8ArrayConstructorPart06Test061
     * @tc.desc Verify subarray shares buffer, modification is bidirectional expects 99, with $
     * _get(0), on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test061() {
    double[] src = new double[] {1.0, 2.0, 3.0, 4.0};
    Int8Array arr = new Int8Array(src);
    Int8Array view1 = arr.subarray(0, 3);
    Int8Array view2 = arr.subarray(1, 4);
    view1.set(1, 99);
    assertEqualInt(99, view2.get(0));
    }

    /**
     * Verify slice(0) result buffer byteLength equals arr.buffer.byteLength on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_6200
     * @tc.name int8ArrayConstructorPart06Test062
     * @tc.desc Verify slice(0) result buffer byteLength equals arr.buffer.byteLength on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test062() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    Int8Array copy = arr.slice(0);
    assertEqual(arr.buffer().byteLength(), copy.buffer().byteLength());
    }

    /**
     * Verify slice creates independent copy and $_set on copy does not affect origina
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_6300
     * @tc.name int8ArrayConstructorPart06Test063
     * @tc.desc Verify slice creates independent copy and $_set on copy does not affect origina
     * l expects 1 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test063() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    Int8Array copy = arr.slice(0);
    copy.set(0, 99);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify slice expects 20 slice(0) on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_6400
     * @tc.name int8ArrayConstructorPart06Test064
     * @tc.desc Verify slice expects 20 slice(0) on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test064() {
    double[] src = new double[] {10.0, 20.0, 30.0};
    Int8Array arr = new Int8Array(src);
    Int8Array copy = arr.slice(0);
    assertEqualInt(20, copy.get(1));
    }

    /**
     * Verify subarray shares buffer, modification is bidirectional expects 99, with $
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_6500
     * @tc.name int8ArrayConstructorPart06Test065
     * @tc.desc Verify subarray shares buffer, modification is bidirectional expects 99, with $
     * _get(2), on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test065() {
    double[] src = new double[] {1.0, 2.0, 3.0, 4.0};
    Int8Array arr = new Int8Array(src);
    Int8Array view1 = arr.subarray(1);
    Int8Array view2 = view1.subarray(1);
    view2.set(0, 99);
    assertEqualInt(99, arr.get(2));
    }

    /**
     * Verify subarray(0, 0) shares arr.buffer on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_6600
     * @tc.name int8ArrayConstructorPart06Test066
     * @tc.desc Verify subarray(0, 0) shares arr.buffer on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test066() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Int8Array arr = new Int8Array(src);
    Int8Array view = arr.subarray(0, 0);
    assertEqual(arr.buffer(), view.buffer());
    }

    /**
     * Verify at(0) returns undefined on empty Int8Array built by new Int8Array(src) from empty FixedArray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_6700
     * @tc.name int8ArrayConstructorPart06Test067
     * @tc.desc Verify at(0) returns undefined on empty Int8Array built by new Int8Array(src) from empty FixedArray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test067() {
    double[] src = new double[] {};
    Int8Array arr = new Int8Array(src);
    assertNull(arr.at(0));
    }

    /**
     * Verify $_get(0) throws RangeError on empty Int8Array created from empty FixedArray on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_6800
     * @tc.name int8ArrayConstructorPart06Test068
     * @tc.desc Verify $_get(0) throws RangeError on empty Int8Array created from empty FixedArray on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test068() {
    double[] src = new double[] {};
    Int8Array arr = new Int8Array(src);
    try {
    arr.get(0);
    fail();
    }
    catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify subarray expects 0 subarray(0) on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_6900
     * @tc.name int8ArrayConstructorPart06Test069
     * @tc.desc Verify subarray expects 0 subarray(0) on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test069() {
    double[] src = new double[] {};
    Int8Array arr = new Int8Array(src);
    Int8Array view = arr.subarray(0);
    assertEqual(0, view.length());
    }

    /**
     * Verify buffer.byteLength of new Int8Array(src) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_7000
     * @tc.name int8ArrayConstructorPart06Test070
     * @tc.desc Verify buffer.byteLength of new Int8Array(src) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test070() {
    double[] src = new double[] {};
    Int8Array arr = new Int8Array(src);
    assertEqual(0, arr.buffer().byteLength());
    }

    /**
     * Verify $_get expects 1, on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_7100
     * @tc.name int8ArrayConstructorPart06Test071
     * @tc.desc Verify $_get expects 1, on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test071() {
    double[] src = new double[] {1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0,
        9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify at expects 16 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_7200
     * @tc.name int8ArrayConstructorPart06Test072
     * @tc.desc Verify at expects 16 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test072() {
    double[] src = new double[] {1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0,
        9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(16, arr.at(-1));
    }

    /**
     * Verify values expects 136 on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_7300
     * @tc.name int8ArrayConstructorPart06Test073
     * @tc.desc Verify values expects 136 on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test073() {
    double[] src = new double[] {1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0,
        9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0};
    Int8Array arr = new Int8Array(src);
    int sum = 0;
    for (Integer v : arr.values()) {
    sum = sum + v;
    }
    assertEqual(136, sum);
    }

    /**
     * Verify src immutability: src[0] remains Number.POSITIVE_INFINITY after new Int8Array(src) construction
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_7400
     * @tc.name int8ArrayConstructorPart06Test074
     * @tc.desc Verify src immutability: src[0] remains Number.POSITIVE_INFINITY after new Int8Array(src) construction
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test074() {
    double[] src = new double[] {Double.POSITIVE_INFINITY};
    Int8Array arr = new Int8Array(src);
    assertEqual(Double.POSITIVE_INFINITY, src[0]);
    int r1 = arr.length();
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify src immutability: src[0] remains NaN after Int8Array construction on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_7500
     * @tc.name int8ArrayConstructorPart06Test075
     * @tc.desc Verify src immutability: src[0] remains NaN after Int8Array construction on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test075() {
    double[] src = new double[] {Double.NaN};
    Int8Array arr = new Int8Array(src);
    assertTrue(BasTest.isNaN(src[0]));
    int r1 = arr.length();
    int e1 = 1;
    assertEqual(e1, r1);
    }

    /**
     * Verify $_get expects 0, with $_get(0), on new Int8Array(new int[] {Number.POSITIVE_INFINITY})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_7600
     * @tc.name int8ArrayConstructorPart06Test076
     * @tc.desc Verify $_get expects 0, with $_get(0), on new Int8Array(new int[] {Number.POSITIVE_INFINITY})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test076() {
    double[] src = new double[] {Double.POSITIVE_INFINITY};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects 0, with $_get(0), on new Int8Array(new int[] {-Number.POSITIVE_INFINITY})
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_7700
     * @tc.name int8ArrayConstructorPart06Test077
     * @tc.desc Verify $_get expects 0, with $_get(0), on new Int8Array(new int[] {-Number.POSITIVE_INFINITY})
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test077() {
    double[] src = new double[] {-Double.POSITIVE_INFINITY};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_get expects 0, with $_get(3), on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_7800
     * @tc.name int8ArrayConstructorPart06Test078
     * @tc.desc Verify $_get expects 0, with $_get(3), on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test078() {
    double[] src = new double[] {128.0, -129.0, Double.NaN, Double.POSITIVE_INFINITY};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify $_get expects 0, with $_get(0), $_get(2), on new Int8Array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_CONSTRUCTOR_PART06_7900
     * @tc.name int8ArrayConstructorPart06Test079
     * @tc.desc Verify $_get expects 0, with $_get(0), $_get(2), on new Int8Array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayConstructorPart06Test079() {
    double[] src = new double[] {Double.NaN, Double.POSITIVE_INFINITY, -Double.POSITIVE_INFINITY};
    Int8Array arr = new Int8Array(src);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }
}
