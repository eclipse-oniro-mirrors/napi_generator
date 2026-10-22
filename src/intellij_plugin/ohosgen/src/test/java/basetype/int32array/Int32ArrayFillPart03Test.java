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

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayFillPart03Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayFillPart03Test extends BasTest {
    /**
     * Verify one-arg fill with value 0 covers all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_0100
     * @tc.name int32ArrayFillPart03Test001
     * @tc.desc Verify one-arg fill with value 0 covers all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test001() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(4));
    assertEqual(5, arr.length());
    }

    /**
     * Verify two-arg fill with start=0 equals omitted start
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_0200
     * @tc.name int32ArrayFillPart03Test002
     * @tc.desc Verify two-arg fill with start=0 equals omitted start
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test002() {
    Int32Array a1 = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array a2 = new Int32Array(new int[] {1, 2, 3, 4});
    a1.fill(7.0);
    a2.fill(7.0, 0, a2.length());
    assertEqual(a1.get(0).intValue(), a2.get(0).intValue());
    assertEqual(a1.get(3).intValue(), a2.get(3).intValue());
    }

    /**
     * Verify three-arg fill with end=length equals omitted end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_0300
     * @tc.name int32ArrayFillPart03Test003
     * @tc.desc Verify three-arg fill with end=length equals omitted end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test003() {
    Int32Array a1 = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array a2 = new Int32Array(new int[] {1, 2, 3, 4});
    a1.fill(9.0, 1, a1.length());
    a2.fill(9.0, 1, 4);
    assertEqual(a1.get(1).intValue(), a2.get(1).intValue());
    assertEqual(a1.get(3).intValue(), a2.get(3).intValue());
    assertEqualInt(1, a2.get(0));
    }

    /**
     * Verify end values at length or beyond clamp to length for both partial and full ranges
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_0500
     * @tc.name int32ArrayFillPart03Test005
     * @tc.desc Verify end values at length or beyond clamp to length for both partial and full ranges
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test005() {
    Int32Array partialBase = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array partialAtLength = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array partialBeyond = new Int32Array(new int[] {1, 2, 3, 4});
    partialBase.fill(8.0, 1, partialBase.length());
    partialAtLength.fill(8.0, 1, partialAtLength.length());
    partialBeyond.fill(8.0, 1, 999999);
    assertEqual(partialBase.get(1).intValue(), partialAtLength.get(1).intValue());
    assertEqual(partialBase.get(3).intValue(), partialBeyond.get(3).intValue());
    Int32Array fullAtLength = new Int32Array(new int[] {10, 20, 30, 40});
    Int32Array fullBeyond = new Int32Array(new int[] {10, 20, 30, 40});
    fullAtLength.fill(7.0, 0, fullAtLength.length());
    fullBeyond.fill(7.0, 0, 999999);
    assertEqualInt(7, fullAtLength.get(0));
    assertEqualInt(7, fullAtLength.get(3));
    assertEqualInt(7, fullBeyond.get(0));
    assertEqualInt(7, fullBeyond.get(3));
    }

    /**
     * Verify start just beyond negative length clamps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_0600
     * @tc.name int32ArrayFillPart03Test006
     * @tc.desc Verify start just beyond negative length clamps to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test006() {
    Int32Array atLengthPlusOne = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array atLengthPlusTwo = new Int32Array(new int[] {1, 2, 3, 4});
    atLengthPlusOne.fill(9.0, -(atLengthPlusOne.length() + 1), 2);
    atLengthPlusTwo.fill(9.0, -(atLengthPlusTwo.length() + 2), 2);
    assertEqualInt(9, atLengthPlusOne.get(0));
    assertEqualInt(9, atLengthPlusOne.get(1));
    assertEqualInt(9, atLengthPlusTwo.get(0));
    assertEqualInt(9, atLengthPlusTwo.get(1));
    assertEqualInt(3, atLengthPlusTwo.get(2));
    }

    /**
     * Verify end just beyond negative length clamps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_0700
     * @tc.name int32ArrayFillPart03Test007
     * @tc.desc Verify end just beyond negative length clamps to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test007() {
    Int32Array endLengthPlusOne = new Int32Array(new int[] {10, 20, 30});
    Int32Array endLengthPlusTwo = new Int32Array(new int[] {10, 20, 30});
    endLengthPlusOne.fill(7.0, 0, -(endLengthPlusOne.length() + 1));
    endLengthPlusTwo.fill(7.0, 0, -(endLengthPlusTwo.length() + 2));
    assertEqualInt(10, endLengthPlusOne.get(0));
    assertEqualInt(30, endLengthPlusOne.get(2));
    assertEqualInt(10, endLengthPlusTwo.get(0));
    assertEqualInt(30, endLengthPlusTwo.get(2));
    }

    /**
     * Verify start=-(length+1) negative one-bound (Int) clamps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_0800
     * @tc.name int32ArrayFillPart03Test008
     * @tc.desc Verify start=-(length+1) negative one-bound (Int) clamps to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test008() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(0, -6, 3);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    /**
     * Verify end=-(length+1) negative one-bound clamps to 0 empty range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_0900
     * @tc.name int32ArrayFillPart03Test009
     * @tc.desc Verify end=-(length+1) negative one-bound clamps to 0 empty range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test009() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.fill(5, 1, -5);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify start at or beyond length clamps to length and is a no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_1000
     * @tc.name int32ArrayFillPart03Test010
     * @tc.desc Verify start at or beyond length clamps to length and is a no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test010() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    arr.fill(7.0, arr.length(), arr.length());
    arr.fill(8.0, arr.length() + 1, arr.length());
    arr.fill(9.0, arr.length() + 2, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify end=arr.length fills from index 1 to array tail
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_1100
     * @tc.name int32ArrayFillPart03Test011
     * @tc.desc Verify end=arr.length fills from index 1 to array tail
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test011() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.fill(0, 1, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify fill(value, 0, 2) overwrites [0, 2) range with value, positions outside range unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_1200
     * @tc.name int32ArrayFillPart03Test012
     * @tc.desc Verify fill(value, 0, 2) overwrites [0, 2) range with value, positions outside range unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test012() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(9.0, 0, 2);
    assertEqualInt(9, arr.get(0));
    assertEqualInt(9, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end=0 yields empty range no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_1300
     * @tc.name int32ArrayFillPart03Test013
     * @tc.desc Verify end=0 yields empty range no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test013() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    arr.fill(5, 0, 0);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify fill(value, length) with start==length is a no-op, array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_1400
     * @tc.name int32ArrayFillPart03Test014
     * @tc.desc Verify fill(value, length) with start==length is a no-op, array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test014() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(7.0, arr.length(), arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify end=arr.length fills from index 1 to tail
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_1500
     * @tc.name int32ArrayFillPart03Test015
     * @tc.desc Verify end=arr.length fills from index 1 to tail
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test015() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    arr.fill(0, 1, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify both start and end large positive clamp to empty range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_1600
     * @tc.name int32ArrayFillPart03Test016
     * @tc.desc Verify both start and end large positive clamp to empty range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test016() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(7.0, 999999, 999999);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify both start and end large negative clamp to [0, 0] empty range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_1700
     * @tc.name int32ArrayFillPart03Test017
     * @tc.desc Verify both start and end large negative clamp to [0, 0] empty range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test017() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30});
    arr.fill(5, -999999, -999999);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify start large positive end large negative clamp to [length, 0] empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_1800
     * @tc.name int32ArrayFillPart03Test018
     * @tc.desc Verify start large positive end large negative clamp to [length, 0] empty
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test018() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(7.0, 999999, -999999);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify start large negative end large positive fills entire array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_1900
     * @tc.name int32ArrayFillPart03Test019
     * @tc.desc Verify start large negative end large positive fills entire array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test019() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.fill(0, -999999, 999999);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify start=arr.length end=0 yields empty range no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_2000
     * @tc.name int32ArrayFillPart03Test020
     * @tc.desc Verify start=arr.length end=0 yields empty range no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test020() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.fill(5.0, arr.length(), 0);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify equal start and end values produce an empty range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_2100
     * @tc.name int32ArrayFillPart03Test021
     * @tc.desc Verify equal start and end values produce an empty range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test021() {
    Int32Array middle = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array tail = new Int32Array(new int[] {1, 2, 3, 4});
    middle.fill(7.0, 1, 1);
    tail.fill(7.0, tail.length(), tail.length());
    assertEqualInt(1, middle.get(0));
    assertEqualInt(2, middle.get(1));
    assertEqualInt(4, middle.get(3));
    assertEqualInt(1, tail.get(0));
    assertEqualInt(4, tail.get(3));
    }

    /**
     * Verify positive reversed ranges produce an empty range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_2200
     * @tc.name int32ArrayFillPart03Test022
     * @tc.desc Verify positive reversed ranges produce an empty range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test022() {
    Int32Array middle = new Int32Array(new int[] {10, 20, 30, 40});
    Int32Array head = new Int32Array(new int[] {10, 20, 30, 40});
    middle.fill(5, 2, 1);
    head.fill(5, 1, 0);
    assertEqualInt(10, middle.get(0));
    assertEqualInt(40, middle.get(3));
    assertEqualInt(10, head.get(0));
    assertEqualInt(40, head.get(3));
    }

    /**
     * Verify start=-2 end=-3 adjacent negative reversed no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_2300
     * @tc.name int32ArrayFillPart03Test023
     * @tc.desc Verify start=-2 end=-3 adjacent negative reversed no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test023() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40});
    arr.fill(5, -2, -3);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(40, arr.get(3));
    }

    /**
     * Verify start=length-1 end=length-2 tail reversed no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_2400
     * @tc.name int32ArrayFillPart03Test024
     * @tc.desc Verify start=length-1 end=length-2 tail reversed no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test024() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(7.0, 3, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify start=-1 end=0 reversed across zero no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_2500
     * @tc.name int32ArrayFillPart03Test025
     * @tc.desc Verify start=-1 end=0 reversed across zero no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test025() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(7.0, -1, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify empty array one-arg fill no throw length stays 0 returns this
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_2600
     * @tc.name int32ArrayFillPart03Test026
     * @tc.desc Verify empty array one-arg fill no throw length stays 0 returns this
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test026() {
    Int32Array arr = new Int32Array(0);
    Int32Array r = arr.fill(7.0);
    assertEqual(0, arr.length());
    assertEqual(arr, r);
    }

    /**
     * Verify empty array fill with zero-length ranges does not throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_2700
     * @tc.name int32ArrayFillPart03Test027
     * @tc.desc Verify empty array fill with zero-length ranges does not throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test027() {
    Int32Array arr = new Int32Array(0);
    arr.fill(5, 0, 0);
    arr.fill(7.0, arr.length(), 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify empty array fill start=-1 end=-1 no throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_2800
     * @tc.name int32ArrayFillPart03Test028
     * @tc.desc Verify empty array fill start=-1 end=-1 no throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test028() {
    Int32Array arr = new Int32Array(0);
    arr.fill(0, -1, -1);
    assertEqual(0, arr.length());
    }

    /**
     * Verify empty array fill large negative positive clamp no throw
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_2900
     * @tc.name int32ArrayFillPart03Test029
     * @tc.desc Verify empty array fill large negative positive clamp no throw
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test029() {
    Int32Array arr = new Int32Array(0);
    arr.fill(0, -999999, 999999);
    assertEqual(0, arr.length());
    }

    /**
     * Verify single-element array one-arg fill overwrites the element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_3000
     * @tc.name int32ArrayFillPart03Test030
     * @tc.desc Verify single-element array one-arg fill overwrites the element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test030() {
    Int32Array arr = new Int32Array(new int[] {42});
    arr.fill(99.0);
    assertEqualInt(99, arr.get(0));
    assertEqual(1, arr.length());
    }

    /**
     * Verify single-element fill start=0 end=1 overwrites element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_3100
     * @tc.name int32ArrayFillPart03Test031
     * @tc.desc Verify single-element fill start=0 end=1 overwrites element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test031() {
    Int32Array arr = new Int32Array(new int[] {7});
    arr.fill(8.0, 0, 1);
    assertEqualInt(8, arr.get(0));
    }

    /**
     * Verify single-element fill start=1 no-op out of range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_3200
     * @tc.name int32ArrayFillPart03Test032
     * @tc.desc Verify single-element fill start=1 no-op out of range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test032() {
    Int32Array arr = new Int32Array(new int[] {42});
    arr.fill(99.0, 1, arr.length());
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify single-element fill start=0 end=0 empty range no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_3300
     * @tc.name int32ArrayFillPart03Test033
     * @tc.desc Verify single-element fill start=0 end=0 empty range no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test033() {
    Int32Array arr = new Int32Array(new int[] {77});
    arr.fill(5, 0, 0);
    assertEqualInt(77, arr.get(0));
    }

    /**
     * Verify single-element fill start=-1 overwrites element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_3400
     * @tc.name int32ArrayFillPart03Test034
     * @tc.desc Verify single-element fill start=-1 overwrites element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test034() {
    Int32Array arr = new Int32Array(new int[] {42});
    arr.fill(0, -1, arr.length());
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify single-element fill start=-2 clamps to 0 overwrites element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_3500
     * @tc.name int32ArrayFillPart03Test035
     * @tc.desc Verify single-element fill start=-2 clamps to 0 overwrites element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test035() {
    Int32Array arr = new Int32Array(new int[] {99});
    arr.fill(7.0, -2, arr.length());
    assertEqualInt(7, arr.get(0));
    }

    /**
     * Verify single-element fill start=0 end=-1 empty range no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_3600
     * @tc.name int32ArrayFillPart03Test036
     * @tc.desc Verify single-element fill start=0 end=-1 empty range no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test036() {
    Int32Array arr = new Int32Array(new int[] {55});
    arr.fill(9.0, 0, -1);
    assertEqualInt(55, arr.get(0));
    }

    /**
     * Verify all-zero array fill(0) remains all zeros idempotent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_3700
     * @tc.name int32ArrayFillPart03Test037
     * @tc.desc Verify all-zero array fill(0) remains all zeros idempotent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test037() {
    Int32Array arr = new Int32Array(new int[] {0, 0, 0, 0});
    arr.fill(0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify all-one array fill(1) remains all ones
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_3800
     * @tc.name int32ArrayFillPart03Test038
     * @tc.desc Verify all-one array fill(1) remains all ones
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test038() {
    Int32Array arr = new Int32Array(new int[] {1, 1, 1, 1, 1});
    arr.fill(1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(1, arr.get(4));
    }

    /**
     * Verify all-same array fill middle segment changes only middle
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_4200
     * @tc.name int32ArrayFillPart03Test042
     * @tc.desc Verify all-same array fill middle segment changes only middle
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test042() {
    Int32Array arr = new Int32Array(new int[] {7, 7, 7, 7, 7});
    arr.fill(0, 1, 4);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(3));
    assertEqualInt(7, arr.get(4));
    }

    /**
     * Verify value=3.5 truncated via ToInt32 to 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_4800
     * @tc.name int32ArrayFillPart03Test048
     * @tc.desc Verify value=3.5 truncated via ToInt32 to 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test048() {
    Int32Array arr = new Int32Array(2);
    arr.fill(3.5);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(3, arr.get(1));
    }

    /**
     * Verify value=0.1 truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_5000
     * @tc.name int32ArrayFillPart03Test050
     * @tc.desc Verify value=0.1 truncated to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test050() {
    Int32Array arr = new Int32Array(3);
    arr.fill(0.1);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill returns the same reference as this
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_5100
     * @tc.name int32ArrayFillPart03Test051
     * @tc.desc Verify fill returns the same reference as this
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test051() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    Int32Array r = arr.fill(7.0, 0, 2);
    assertEqual(arr, r);
    }

    /**
     * Verify fill returns the same reference as this (assertEqual arr)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_5200
     * @tc.name int32ArrayFillPart03Test052
     * @tc.desc Verify fill returns the same reference as this (assertEqual arr)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test052() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    Int32Array r = arr.fill(0);
    assertEqual(arr, r);
    }

    /**
     * Verify length remains unchanged after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_5300
     * @tc.name int32ArrayFillPart03Test053
     * @tc.desc Verify length remains unchanged after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test053() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(9.0, 1, 4);
    assertEqual(5, arr.length());
    }

    /**
     * Verify buffer byteLength unchanged after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_5400
     * @tc.name int32ArrayFillPart03Test054
     * @tc.desc Verify buffer byteLength unchanged after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test054() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3});
    int before = arr.buffer().byteLength();
    arr.fill(0);
    assertEqual(before, arr.buffer().byteLength());
    }

    /**
     * Verify byteOffset remains 0 after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_5500
     * @tc.name int32ArrayFillPart03Test055
     * @tc.desc Verify byteOffset remains 0 after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test055() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(7.0, 1, 3);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify fill then reverse chain sees filled values reversed
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_5600
     * @tc.name int32ArrayFillPart03Test056
     * @tc.desc Verify fill then reverse chain sees filled values reversed
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test056() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(0, 0, 2).reverse();
    assertEqualInt(4, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify reverse then fill chain fills after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_5700
     * @tc.name int32ArrayFillPart03Test057
     * @tc.desc Verify reverse then fill chain fills after reverse
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test057() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.reverse().fill(9.0, 1, 3);
    assertEqualInt(4, arr.get(0));
    assertEqualInt(9, arr.get(1));
    assertEqualInt(9, arr.get(2));
    assertEqualInt(1, arr.get(3));
    }

    /**
     * Verify fill then sort chain sorts filled identical values stable
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_5800
     * @tc.name int32ArrayFillPart03Test058
     * @tc.desc Verify fill then sort chain sorts filled identical values stable
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test058() {
    Int32Array arr = new Int32Array(new int[] {3, 1, 4, 2});
    arr.fill(5, 0, 2).sort();
    assertEqualInt(2, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(5, arr.get(2));
    assertEqualInt(5, arr.get(3));
    }

    /**
     * Verify fill then copyWithin chain copies filled segment
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_5900
     * @tc.name int32ArrayFillPart03Test059
     * @tc.desc Verify fill then copyWithin chain copies filled segment
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test059() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(7.0, 0, 2).copyWithin(2, 0, 2);
    assertEqualInt(7, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(7, arr.get(3));
    }

    /**
     * Verify copyWithin then fill chain overwrites copied prefix
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_6000
     * @tc.name int32ArrayFillPart03Test060
     * @tc.desc Verify copyWithin then fill chain overwrites copied prefix
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test060() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 0, 2).fill(0, 0, 2);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(1, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    /**
     * Verify two consecutive fill chains second overwrites middle
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_6100
     * @tc.name int32ArrayFillPart03Test061
     * @tc.desc Verify two consecutive fill chains second overwrites middle
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test061() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(0).fill(9.0, 1, 4);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(9, arr.get(1));
    assertEqualInt(9, arr.get(3));
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify fill then fill reversed empty range keeps first result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_6200
     * @tc.name int32ArrayFillPart03Test062
     * @tc.desc Verify fill then fill reversed empty range keeps first result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test062() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(7.0, 1, 3).fill(5, 2, 1);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(7, arr.get(1));
    assertEqualInt(7, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    /**
     * Verify fill modifications visible through same-buffer view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_6300
     * @tc.name int32ArrayFillPart03Test063
     * @tc.desc Verify fill modifications visible through same-buffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test063() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4});
    arr.fill(7.0, 1, 3);
    Int32Array view = new Int32Array(arr.buffer());
    assertEqualInt(1, view.get(0));
    assertEqualInt(7, view.get(1));
    assertEqualInt(7, view.get(2));
    assertEqualInt(4, view.get(3));
    }

    /**
     * Verify fill on subarray view affects parent range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_6400
     * @tc.name int32ArrayFillPart03Test064
     * @tc.desc Verify fill on subarray view affects parent range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test064() {
    Int32Array arr = new Int32Array(new int[] {10, 20, 30, 40, 50});
    Int32Array sub = arr.subarray(1, 4);
    sub.fill(0, 1, 2);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    /**
     * Verify fill entire subarray changes corresponding parent range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_6500
     * @tc.name int32ArrayFillPart03Test065
     * @tc.desc Verify fill entire subarray changes corresponding parent range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test065() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6});
    Int32Array sub = arr.subarray(2, 5);
    sub.fill(99.0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(99, arr.get(2));
    assertEqualInt(99, arr.get(4));
    assertEqualInt(6, arr.get(5));
    }

    /**
     * Verify fill on byteOffset view visible through sibling view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_6600
     * @tc.name int32ArrayFillPart03Test066
     * @tc.desc Verify fill on byteOffset view visible through sibling view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test066() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array valFirst = new Int32Array(buf, 0, 4);
    valFirst.set(0, 1);
    valFirst.set(1, 2);
    valFirst.set(2, 3);
    valFirst.set(3, 4);
    valFirst.fill(0, 1, 3);
    Int32Array valSecond = new Int32Array(buf, 0, 4);
    assertEqualInt(1, valSecond.get(0));
    assertEqualInt(0, valSecond.get(1));
    assertEqualInt(0, valSecond.get(2));
    assertEqualInt(4, valSecond.get(3));
    }

    /**
     * Verify subarray byteOffset and length unchanged after fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_6700
     * @tc.name int32ArrayFillPart03Test067
     * @tc.desc Verify subarray byteOffset and length unchanged after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test067() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5});
    Int32Array sub = arr.subarray(1, 4);
    int off = sub.byteOffset();
    int len = sub.length();
    sub.fill(0);
    assertEqual(off, sub.byteOffset());
    assertEqual(len, sub.length());
    }

    /**
     * Verify fill on offset view updates original buffer via shared memory
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_FILL_PART03_7000
     * @tc.name int32ArrayFillPart03Test070
     * @tc.desc Verify fill on offset view updates original buffer via shared memory
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayFillPart03Test070() {
    Int32Array arr = new Int32Array(new int[] {1, 2, 3, 4, 5, 6, 7, 8});
    Int32Array valFirst = new Int32Array(arr.buffer(), 8, 4);
    valFirst.fill(0);
    assertEqualInt(0, arr.get(2));
    assertEqualInt(0, arr.get(3));
    assertEqualInt(0, arr.get(4));
    assertEqualInt(0, arr.get(5));
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(7, arr.get(6));
    assertEqualInt(8, arr.get(7));
    }
}
