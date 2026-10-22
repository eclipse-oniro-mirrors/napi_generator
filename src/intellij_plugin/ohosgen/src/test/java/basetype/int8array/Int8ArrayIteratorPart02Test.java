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

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayIteratorPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIteratorPart02Test extends BasTest {

    /**
     * Verify Symbol.iterator for-of on Int8Array([10, 20, 30]) visits first element 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ITERATOR_PART02_3800
     * @tc.name int8ArrayIteratorPart02Test038
     * @tc.desc Verify Symbol.iterator for-of on Int8Array([10, 20, 30]) visits first element 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIteratorPart02Test038() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Number first = 0;
    for (Integer v : arr.values()) {
    first = v;
    break;
    }
    assertEqual(10, first);
    }

    /**
     * Verify Symbol.iterator for-of on Int8Array([10, 20, 30]) visits last element 30
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ITERATOR_PART02_3900
     * @tc.name int8ArrayIteratorPart02Test039
     * @tc.desc Verify Symbol.iterator for-of on Int8Array([10, 20, 30]) visits last element 30
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIteratorPart02Test039() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Number last = 0;
    for (Integer v : arr.values()) {
    last = v;
    }
    assertEqual(30, last);
    }

    /**
     * Verify Symbol.iterator for-of on Int8Array([1, 2, 3]) accumulates sum 6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ITERATOR_PART02_4000
     * @tc.name int8ArrayIteratorPart02Test040
     * @tc.desc Verify Symbol.iterator for-of on Int8Array([1, 2, 3]) accumulates sum 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIteratorPart02Test040() {
    Int8Array arr = new Int8Array(new int[] {1, 2, 3});
    int sum = 0;
    for (Integer v : arr.values()) {
    sum = sum + v;
    }
    assertEqual(6, sum);
    }

    /**
     * Verify Int8Array.from constructed array iterator first element value assertion correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ITERATOR_PART02_4700
     * @tc.name int8ArrayIteratorPart02Test047
     * @tc.desc Verify Int8Array.from constructed array iterator first element value assertion correct
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
