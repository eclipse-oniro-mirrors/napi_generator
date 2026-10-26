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

package basetype.int32array;

import basetype.common.Int32Array;
import basetype.common.ArrayBuffer;
import basetype.common.BasTest;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayCopyWithinPart03Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayCopyWithinPart03Test extends BasTest {
    /**
     * Verify target equals length source covers full array no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_0100
     * @tc.name int32ArrayCopyWithinPart03Test001
     * @tc.desc Verify target equals length source covers full array no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test001() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(4, 0, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify target length plus one non-empty source no write no throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_0200
     * @tc.name int32ArrayCopyWithinPart03Test002
     * @tc.desc Verify target length plus one non-empty source no write no throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test002() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    arr.copyWithin(4, 0, 2);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify target far out of positive bounds behaves as no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_0300
     * @tc.name int32ArrayCopyWithinPart03Test003
     * @tc.desc Verify target far out of positive bounds behaves as no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test003() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(105, 0, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify target negative one on two element array maps to last index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_0400
     * @tc.name int32ArrayCopyWithinPart03Test004
     * @tc.desc Verify target negative one on two element array maps to last index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test004() {
    Int32Array arr = new Int32Array(new int[] {7, 8});
    arr.copyWithin(-1, 0);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(1));
    }

    /**
     * Verify target minus length plus one clamps to zero
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_0500
     * @tc.name int32ArrayCopyWithinPart03Test005
     * @tc.desc Verify target minus length plus one clamps to zero
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test005() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    arr.copyWithin(-4, 1);
    assertEqualInt(20, arr.get(0));
    assertEqualInt(30, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify target far negative clamps to zero
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_0600
     * @tc.name int32ArrayCopyWithinPart03Test006
     * @tc.desc Verify target far negative clamps to zero
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test006() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.copyWithin(-5, 1, 3);
    assertEqualInt(2, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify target INT32_MAX clamps to length and writes nothing
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_0700
     * @tc.name int32ArrayCopyWithinPart03Test007
     * @tc.desc Verify target INT32_MAX clamps to length and writes nothing
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test007() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2147483647, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify target INT32_MIN clamps to zero
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_0800
     * @tc.name int32ArrayCopyWithinPart03Test008
     * @tc.desc Verify target INT32_MIN clamps to zero
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test008() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(Integer.MIN_VALUE, 2);
    assertEqualInt(30, arr.get(0));
    assertEqualInt(40, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify start past length with explicit end clamps to empty range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_0900
     * @tc.name int32ArrayCopyWithinPart03Test009
     * @tc.desc Verify start past length with explicit end clamps to empty range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test009() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, 5, 4);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify start far positive and end far positive clamp to length giving empty range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_1000
     * @tc.name int32ArrayCopyWithinPart03Test010
     * @tc.desc Verify start far positive and end far positive clamp to length giving empty range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test010() {
    Int32Array arr = new Int32Array(new int[] {5, 6, 7});
    arr.copyWithin(0, 999999, 999999);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(6, arr.get(1));
    assertEqualInt(7, arr.get(2));
    }

    /**
     * Verify start minus length plus one clamps to zero
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_1100
     * @tc.name int32ArrayCopyWithinPart03Test011
     * @tc.desc Verify start minus length plus one clamps to zero
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test011() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, -5, 2);
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify start far negative clamps to zero
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_1200
     * @tc.name int32ArrayCopyWithinPart03Test012
     * @tc.desc Verify start far negative clamps to zero
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test012() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    arr.copyWithin(1, -103, 2);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(20, arr.get(2));
    }

    /**
     * Verify start INT32_MIN clamps to zero
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_1300
     * @tc.name int32ArrayCopyWithinPart03Test013
     * @tc.desc Verify start INT32_MIN clamps to zero
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test013() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(2, Integer.MIN_VALUE, 2);
    assertEqualInt(10, arr.get(2));
    assertEqualInt(20, arr.get(3));
    }

    /**
     * Verify end zero with start zero gives empty range no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_1400
     * @tc.name int32ArrayCopyWithinPart03Test014
     * @tc.desc Verify end zero with start zero gives empty range no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test014() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.copyWithin(1, 0, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify end negative one on two element array maps to index one
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_1500
     * @tc.name int32ArrayCopyWithinPart03Test015
     * @tc.desc Verify end negative one on two element array maps to index one
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test015() {
    Int32Array arr = new Int32Array(new int[] {5, 6});
    arr.copyWithin(1, 0, -1);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(1));
    }

    /**
     * Verify end minus length plus one clamps to zero giving empty range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_1600
     * @tc.name int32ArrayCopyWithinPart03Test016
     * @tc.desc Verify end minus length plus one clamps to zero giving empty range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test016() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    arr.copyWithin(0, 0, -4);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify end far negative clamps to zero giving empty range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_1700
     * @tc.name int32ArrayCopyWithinPart03Test017
     * @tc.desc Verify end far negative clamps to zero giving empty range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test017() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2, -105);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify end INT32_MAX clamps to length equivalent to omitting end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_1800
     * @tc.name int32ArrayCopyWithinPart03Test018
     * @tc.desc Verify end INT32_MAX clamps to length equivalent to omitting end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test018() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, 2, 2147483647);
    assertEqualInt(30, arr.get(0));
    assertEqualInt(40, arr.get(1));
    }

    /**
     * Verify end INT32_MIN clamps to zero giving empty range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_1900
     * @tc.name int32ArrayCopyWithinPart03Test019
     * @tc.desc Verify end INT32_MIN clamps to zero giving empty range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test019() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 0, Integer.MIN_VALUE);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify negative end greater than negative start clamps to empty range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_2000
     * @tc.name int32ArrayCopyWithinPart03Test020
     * @tc.desc Verify negative end greater than negative start clamps to empty range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test020() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, -2, -3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify all three args equal length gives empty range no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_2100
     * @tc.name int32ArrayCopyWithinPart03Test021
     * @tc.desc Verify all three args equal length gives empty range no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test021() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.copyWithin(3, 3, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify target far positive start far negative end far positive clamp to no write
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_2200
     * @tc.name int32ArrayCopyWithinPart03Test022
     * @tc.desc Verify target far positive start far negative end far positive clamp to no write
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test022() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(9999, -9999, 9999);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify target far negative clamp zero and start far positive clamp length gives empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_2300
     * @tc.name int32ArrayCopyWithinPart03Test023
     * @tc.desc Verify target far negative clamp zero and start far positive clamp length gives empty
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test023() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(-9999, 9999);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify target far negative and end far negative clamp to empty range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_2400
     * @tc.name int32ArrayCopyWithinPart03Test024
     * @tc.desc Verify target far negative and end far negative clamp to empty range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test024() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.copyWithin(-999, 0, -999);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify target at length with normal source range writes nothing
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_2500
     * @tc.name int32ArrayCopyWithinPart03Test025
     * @tc.desc Verify target at length with normal source range writes nothing
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test025() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(5, 0, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify normal target with start past length and normal end gives empty range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_2600
     * @tc.name int32ArrayCopyWithinPart03Test026
     * @tc.desc Verify normal target with start past length and normal end gives empty range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test026() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    arr.copyWithin(0, 3, 2);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify all three args zero gives empty range no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_2700
     * @tc.name int32ArrayCopyWithinPart03Test027
     * @tc.desc Verify all three args zero gives empty range no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test027() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 0, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify target zero with start two copies elements from index two
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_2800
     * @tc.name int32ArrayCopyWithinPart03Test028
     * @tc.desc Verify target zero with start two copies elements from index two
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test028() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, 2);
    assertEqualInt(30, arr.get(0));
    assertEqualInt(40, arr.get(1));
    }

    /**
     * Verify target negative zero behaves as target zero for in-place copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_2900
     * @tc.name int32ArrayCopyWithinPart03Test029
     * @tc.desc Verify target negative zero behaves as target zero for in-place copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test029() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(-0, 2);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(4, arr.get(1));
    }

    /**
     * Verify start zero with target two copies elements from index zero
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_3000
     * @tc.name int32ArrayCopyWithinPart03Test030
     * @tc.desc Verify start zero with target two copies elements from index zero
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test030() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(2, 0);
    assertEqualInt(10, arr.get(2));
    assertEqualInt(20, arr.get(3));
    }

    /**
     * Verify copyWithin with negative target copies from end offset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_3100
     * @tc.name int32ArrayCopyWithinPart03Test031
     * @tc.desc Verify copyWithin with negative target copies from end offset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test031() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(-2, 0, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify copyWithin positive target on empty array does not throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_3200
     * @tc.name int32ArrayCopyWithinPart03Test032
     * @tc.desc Verify copyWithin positive target on empty array does not throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test032() {
    Int32Array arr = new Int32Array(0);
    arr.copyWithin(5, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify copyWithin negative target on empty array does not throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_3300
     * @tc.name int32ArrayCopyWithinPart03Test033
     * @tc.desc Verify copyWithin negative target on empty array does not throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test033() {
    Int32Array arr = new Int32Array(0);
    arr.copyWithin(-1, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify copyWithin all infinity extremes on empty array does not throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_3400
     * @tc.name int32ArrayCopyWithinPart03Test034
     * @tc.desc Verify copyWithin all infinity extremes on empty array does not throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test034() {
    Int32Array arr = new Int32Array(0);
    arr.copyWithin(2147483647, Integer.MIN_VALUE, 2147483647);
    assertEqual(0, arr.length());
    }

    /**
     * Verify single element self copy with end omitted keeps value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_3500
     * @tc.name int32ArrayCopyWithinPart03Test035
     * @tc.desc Verify single element self copy with end omitted keeps value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test035() {
    Int32Array arr = new Int32Array(new int[] {42});
    arr.copyWithin(0, 0);
    assertEqualInt(42, arr.get(0));
    assertEqual(1, arr.length());
    }

    /**
     * Verify single element start past length copies nothing
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_3600
     * @tc.name int32ArrayCopyWithinPart03Test036
     * @tc.desc Verify single element start past length copies nothing
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test036() {
    Int32Array arr = new Int32Array(new int[] {42});
    arr.copyWithin(0, 1);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify single element target zero start negative one end omitted self copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_3700
     * @tc.name int32ArrayCopyWithinPart03Test037
     * @tc.desc Verify single element target zero start negative one end omitted self copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test037() {
    Int32Array arr = new Int32Array(new int[] {77});
    arr.copyWithin(0, -1);
    assertEqualInt(77, arr.get(0));
    }

    /**
     * Verify single element all negative out of bounds clamps to no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_3800
     * @tc.name int32ArrayCopyWithinPart03Test038
     * @tc.desc Verify single element all negative out of bounds clamps to no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test038() {
    Int32Array arr = new Int32Array(new int[] {42});
    arr.copyWithin(-2, -2, -2);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify all same values with out of bounds indices does not change array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_4000
     * @tc.name int32ArrayCopyWithinPart03Test040
     * @tc.desc Verify all same values with out of bounds indices does not change array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test040() {
    Int32Array arr = new Int32Array(new int[] {5, 5, 5});
    arr.copyWithin(100, -100, 100);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(5, arr.get(2));
    }

    /**
     * Verify two same elements copyWithin zero from one keeps both same
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_4100
     * @tc.name int32ArrayCopyWithinPart03Test041
     * @tc.desc Verify two same elements copyWithin zero from one keeps both same
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test041() {
    Int32Array arr = new Int32Array(new int[] {9, 9});
    arr.copyWithin(0, 1);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(9, arr.get(1));
    }

    /**
     * Verify target equals start no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_4200
     * @tc.name int32ArrayCopyWithinPart03Test042
     * @tc.desc Verify target equals start no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test042() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify backward overlap copy source before target memmove semantics
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_4300
     * @tc.name int32ArrayCopyWithinPart03Test043
     * @tc.desc Verify backward overlap copy source before target memmove semantics
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test043() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(2, 0, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    assertEqualInt(3, arr.get(4));
    assertEqualInt(4, arr.get(5));
    }

    /**
     * Verify forward overlap copy target before source memmove semantics
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_4400
     * @tc.name int32ArrayCopyWithinPart03Test044
     * @tc.desc Verify forward overlap copy target before source memmove semantics
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test044() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(0, 2, 6);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(5, arr.get(2));
    assertEqualInt(6, arr.get(3));
    assertEqualInt(5, arr.get(4));
    assertEqualInt(6, arr.get(5));
    }

    /**
     * Verify single element overlap copy target equals start plus one
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_4500
     * @tc.name int32ArrayCopyWithinPart03Test045
     * @tc.desc Verify single element overlap copy target equals start plus one
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test045() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    arr.copyWithin(1, 0, 1);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify three element overlap backward target one start zero end three
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_4600
     * @tc.name int32ArrayCopyWithinPart03Test046
     * @tc.desc Verify three element overlap backward target one start zero end three
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test046() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(1, 0, 3);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(1));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(3, arr.get(3));
    }

    /**
     * Verify fully overlapped copy target one on five element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_4700
     * @tc.name int32ArrayCopyWithinPart03Test047
     * @tc.desc Verify fully overlapped copy target one on five element array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test047() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(1, 0, 4);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(1));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(3, arr.get(3));
    assertEqualInt(4, arr.get(4));
    }

    /**
     * Verify copyWithin on zero length subarray view returns same view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_4800
     * @tc.name int32ArrayCopyWithinPart03Test048
     * @tc.desc Verify copyWithin on zero length subarray view returns same view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test048() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array sub = arr.subarray(2, 2);
    Int32Array r = sub.copyWithin(0, 0);
    assertEqual(0, r.length());
    assertEqual(sub, r);
    }

    /**
     * Verify copyWithin self copy on single element subarray reflects to parent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_4900
     * @tc.name int32ArrayCopyWithinPart03Test049
     * @tc.desc Verify copyWithin self copy on single element subarray reflects to parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test049() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    Int32Array sub = arr.subarray(1, 2);
    sub.copyWithin(0, 0);
    assertEqualInt(20, sub.get(0));
    assertEqualInt(20, arr.get(1));
    }

    /**
     * Verify copyWithin on non-zero byteOffset child view writes back to parent buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_5000
     * @tc.name int32ArrayCopyWithinPart03Test050
     * @tc.desc Verify copyWithin on non-zero byteOffset child view writes back to parent buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test050() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Int32Array parent = new Int32Array(buf);
    for (int i = 0; i < 8; i++) {
    parent.set(i, i + 1);
    }
    Int32Array child = new Int32Array(buf, 8, 4);
    child.copyWithin(2, 0, 2);
    assertEqualInt(3, parent.get(2));
    assertEqualInt(4, parent.get(3));
    assertEqualInt(3, parent.get(4));
    assertEqualInt(4, parent.get(5));
    }

    /**
     * Verify out of bounds target on child view does not modify buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_5100
     * @tc.name int32ArrayCopyWithinPart03Test051
     * @tc.desc Verify out of bounds target on child view does not modify buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test051() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int32Array parent = new Int32Array(buf);
    for (int i = 0; i < 6; i++) {
    parent.set(i, i);
    }
    Int32Array child = new Int32Array(buf, 8, 3);
    child.copyWithin(5, 0);
    assertEqualInt(2, parent.get(2));
    assertEqualInt(3, parent.get(3));
    assertEqualInt(4, parent.get(4));
    }

    /**
     * Verify overlapping views on same ArrayBuffer observe writes from copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_5200
     * @tc.name int32ArrayCopyWithinPart03Test052
     * @tc.desc Verify overlapping views on same ArrayBuffer observe writes from copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test052() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf);
    Int32Array b = new Int32Array(buf, 4, 3);
    a.set(0, 11);
    a.set(1, 22);
    a.set(2, 33);
    a.set(3, 44);
    b.copyWithin(0, 1);
    assertEqualInt(33, a.get(1));
    assertEqualInt(44, a.get(2));
    assertEqualInt(44, a.get(3));
    }

    /**
     * Verify copyWithin on zero length subarray does not affect parent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_5300
     * @tc.name int32ArrayCopyWithinPart03Test053
     * @tc.desc Verify copyWithin on zero length subarray does not affect parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test053() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array sub = arr.subarray(3, 3);
    sub.copyWithin(0, 0, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify extreme INT32 bounds combination does not throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_5400
     * @tc.name int32ArrayCopyWithinPart03Test054
     * @tc.desc Verify extreme INT32 bounds combination does not throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test054() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(Integer.MIN_VALUE, Integer.MIN_VALUE, 2147483647);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify consecutive extreme index calls do not throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_5500
     * @tc.name int32ArrayCopyWithinPart03Test055
     * @tc.desc Verify consecutive extreme index calls do not throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test055() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(999, 0);
    arr.copyWithin(-999, 999);
    arr.copyWithin(0, -999, 999);
    arr.copyWithin(0, 0, -999);
    assertEqual(5, arr.length());
    }

    /**
     * Verify INT32_MAX start and INT32_MIN end combination does not throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_5600
     * @tc.name int32ArrayCopyWithinPart03Test056
     * @tc.desc Verify INT32_MAX start and INT32_MIN end combination does not throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test056() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.copyWithin(0, 2147483647, Integer.MIN_VALUE);
    assertEqual(3, arr.length());
    }

    /**
     * Verify zero element copied over non-zero correctly overwrites to zero
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_6100
     * @tc.name int32ArrayCopyWithinPart03Test061
     * @tc.desc Verify zero element copied over non-zero correctly overwrites to zero
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test061() {
    Int32Array arr = new Int32Array(new int[] {0, 5, 5});
    arr.copyWithin(1, 0, 1);
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify zero element retains zero after copyWithin transit
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_6300
     * @tc.name int32ArrayCopyWithinPart03Test063
     * @tc.desc Verify zero element retains zero after copyWithin transit
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test063() {
    Int32Array arr = new Int32Array(3);
    arr.set(0, 0);
    arr.set(1, 1);
    arr.set(2, 2);
    arr.copyWithin(1, 0, 1);
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify negative zero element stored as zero after copyWithin transit
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_6400
     * @tc.name int32ArrayCopyWithinPart03Test064
     * @tc.desc Verify negative zero element stored as zero after copyWithin transit
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test064() {
    Int32Array arr = new Int32Array(3);
    arr.set(0, -0);
    arr.set(1, 1);
    arr.set(2, 2);
    arr.copyWithin(2, 0, 1);
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify two to the 32nd power ToInt32 zero after copyWithin transit
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_6600
     * @tc.name int32ArrayCopyWithinPart03Test066
     * @tc.desc Verify two to the 32nd power ToInt32 zero after copyWithin transit
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test066() {
    Int32Array arr = new Int32Array(3);
    arr.set(0, 4294967296L);
    arr.set(1, 1);
    arr.set(2, 2);
    arr.copyWithin(1, 0, 1);
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify two to the 32nd plus one ToInt32 one after copyWithin transit
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_6700
     * @tc.name int32ArrayCopyWithinPart03Test067
     * @tc.desc Verify two to the 32nd plus one ToInt32 one after copyWithin transit
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test067() {
    Int32Array arr = new Int32Array(3);
    arr.set(0, 4294967297L);
    arr.set(1, 0);
    arr.set(2, 0);
    arr.copyWithin(2, 0, 1);
    assertEqualInt(1, arr.get(2));
    }

    /**
     * Verify idempotence of same copyWithin called twice equals once
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_6800
     * @tc.name int32ArrayCopyWithinPart03Test068
     * @tc.desc Verify idempotence of same copyWithin called twice equals once
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test068() {
    Int32Array a1 = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array a2 = new Int32Array(new int[] {1, 2, 3, 4});
    a1.copyWithin(2, 0, 2);
    a2.copyWithin(2, 0, 2);
    a2.copyWithin(2, 0, 2);
    assertEqual(a1.get(2).intValue(), a2.get(2).intValue());
    assertEqual(a1.get(3).intValue(), a2.get(3).intValue());
    }

    /**
     * Verify for-of iteration observes copyWithin modified order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_6900
     * @tc.name int32ArrayCopyWithinPart03Test069
     * @tc.desc Verify for-of iteration observes copyWithin modified order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test069() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, 2);
    List<Integer> seen = new ArrayList<>();
    for (Integer v : arr.values()) {
    seen.add(v);
    }
    assertEqual(4, seen.size());
    assertEqualInt(30, seen.get(0));
    assertEqualInt(40, seen.get(1));
    assertEqualInt(30, seen.get(2));
    assertEqualInt(40, seen.get(3));
    }

    /**
     * Verify forEach callback count equals length after no-op copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_7000
     * @tc.name int32ArrayCopyWithinPart03Test070
     * @tc.desc Verify forEach callback count equals length after no-op copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test070() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(100, 0);
    int[] count = {0};
    arr.forEach((unusedVal, unusedIndex, array) -> {
    count[0]++;
    });
    assertEqual(5, count[0]);
    }

    /**
     * Verify indexOf finds copied elements at new positions
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_7100
     * @tc.name int32ArrayCopyWithinPart03Test071
     * @tc.desc Verify indexOf finds copied elements at new positions
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test071() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, 2);
    assertEqual(0, arr.indexOf(30));
    assertEqual(1, arr.indexOf(40));
    }

    /**
     * Verify includes returns true for copied elements at new positions
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_7200
     * @tc.name int32ArrayCopyWithinPart03Test072
     * @tc.desc Verify includes returns true for copied elements at new positions
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test072() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 0, 2);
    boolean found1 = arr.includes(1);
    boolean found2 = arr.includes(2);
    assertTrue(found1);
    assertTrue(found2);
    }

    /**
     * Verify join string reflects new order after copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_7300
     * @tc.name int32ArrayCopyWithinPart03Test073
     * @tc.desc Verify join string reflects new order after copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test073() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 2);
    assertEqual("3,4,3,4", arr.join(","));
    }

    /**
     * Verify copyWithin returns the same array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_COPY_WITHIN_PART03_7400
     * @tc.name int32ArrayCopyWithinPart03Test074
     * @tc.desc Verify copyWithin returns the same array instance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayCopyWithinPart03Test074() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    Int32Array r = arr.copyWithin(1, 0, 2);
    assertEqual(arr, r);
    }
}
