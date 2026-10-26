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
import basetype.common.BasTest;
import basetype.common.RangeError;

import org.junit.jupiter.api.Test;

/**
 * Int32ArrayConstructorPart08Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayConstructorPart08Test extends BasTest {

    /**
     * Verify Iterable (yield 0, 1, 2),
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART08_TEST_MINDMAP_0900
     * @tc.name int32ArrayConstructorPart08TestMindmapTest009
     * @tc.desc Verify Iterable (yield 0, 1, 2),
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart08TestMindmapTest009() {
    Int32Array dst = new Int32Array(new int[] {0, 1, 2});
    assertEqual(3, dst.length());
    assertEqualInt(0, dst.get(0));
    assertEqualInt(1, dst.get(1));
    assertEqualInt(2, dst.get(2));
    }

    /**
     * Verify Iterable Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART08_TEST_MINDMAP_1000
     * @tc.name int32ArrayConstructorPart08TestMindmapTest010
     * @tc.desc Verify Iterable Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart08TestMindmapTest010() {
    Int32Array dst = new Int32Array(new int[] {42});
    assertEqual(1, dst.length());
    assertEqualInt(42, dst.get(0));
    }

    /**
     * Verify done Iterable Int32Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART08_TEST_MINDMAP_1100
     * @tc.name int32ArrayConstructorPart08TestMindmapTest011
     * @tc.desc Verify done Iterable Int32Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart08TestMindmapTest011() {
    Int32Array dst = new Int32Array(new int[] {});
    assertEqual(0, dst.length());
    }

    /**
     * Verify 0 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART08_TEST_MINDMAP_4200
     * @tc.name int32ArrayConstructorPart08TestMindmapTest042
     * @tc.desc Verify 0 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart08TestMindmapTest042() {
    Int32Array dst = new Int32Array(new int[] {0});
    assertEqual(1, dst.length());
    assertEqualInt(0, dst.get(0));
    }

    /**
     * Verify Number.NaN 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART08_TEST_MINDMAP_4500
     * @tc.name int32ArrayConstructorPart08TestMindmapTest045
     * @tc.desc Verify Number.NaN 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart08TestMindmapTest045() {
    Int32Array dst = new Int32Array(new double[] {Double.NaN});
    assertEqualInt(0, dst.get(0));
    }

    /**
     * Verify +Number.POSITIVE_INFINITY 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART08_TEST_MINDMAP_4600
     * @tc.name int32ArrayConstructorPart08TestMindmapTest046
     * @tc.desc Verify +Number.POSITIVE_INFINITY 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart08TestMindmapTest046() {
    Int32Array dst = new Int32Array(new double[] {Double.POSITIVE_INFINITY});
    assertEqualInt(0, dst.get(0));
    }

    /**
     * Verify Double.NEGATIVE_INFINITY 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART08_TEST_MINDMAP_4700
     * @tc.name int32ArrayConstructorPart08TestMindmapTest047
     * @tc.desc Verify Double.NEGATIVE_INFINITY 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart08TestMindmapTest047() {
    Int32Array dst = new Int32Array(new double[] {Double.NEGATIVE_INFINITY});
    assertEqualInt(0, dst.get(0));
    }

    /**
     * Verify 3 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART08_TEST_MINDMAP_4800
     * @tc.name int32ArrayConstructorPart08TestMindmapTest048
     * @tc.desc Verify 3 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart08TestMindmapTest048() {
    Int32Array dst = new Int32Array(new int[] {3});
    assertEqualInt(3, dst.get(0));
    }

    /**
     * Verify 10, length=10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART08_TEST_MINDMAP_5000
     * @tc.name int32ArrayConstructorPart08TestMindmapTest050
     * @tc.desc Verify 10, length=10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart08TestMindmapTest050() {
    Int32Array dst = new Int32Array(new int[] {0, 1, 2, 3, 4, 5, 6, 7, 8, 9});
    assertEqual(10, dst.length());
    assertEqualInt(0, dst.get(0));
    assertEqualInt(9, dst.get(9));
    }

    /**
     * Verify constructing Int32Array with negative length throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART08_TEST_MINDMAP_6000
     * @tc.name int32ArrayConstructorPart08TestMindmapTest060
     * @tc.desc Verify constructing Int32Array with negative length throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart08TestMindmapTest060() {
    try {
    new Int32Array(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Symbol.iterator ()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART08_TEST_MINDMAP_6800
     * @tc.name int32ArrayConstructorPart08TestMindmapTest068
     * @tc.desc Verify Symbol.iterator ()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayConstructorPart08TestMindmapTest068() {
    Int32Array dst = new Int32Array(new int[] {7, 8, 9});
    assertEqual(3, dst.length());
    assertEqualInt(7, dst.get(0));
    assertEqualInt(8, dst.get(1));
    assertEqualInt(9, dst.get(2));
    }

    /**
     * Verify Set Iterable, new Set(new int[] {1, 2}) (Array)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_CONSTRUCTOR_PART08_TEST_MINDMAP_6900
     * @tc.name int32ArrayConstructorPart08TestMindmapTest069
     * @tc.desc Verify Set Iterable, new Set(new int[] {1, 2}) (Array)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
