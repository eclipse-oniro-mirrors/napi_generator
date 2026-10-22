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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayIteratorPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayIteratorPart01Test extends BasTest {

    /**
     * Verify for-of iterator over new Int8Array(new int[] {5}) yields count 1 first value 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ITERATOR_PART01_3000
     * @tc.name int8ArrayIteratorPart01Test030
     * @tc.desc Verify for-of iterator over new Int8Array(new int[] {5}) yields count 1 first value 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIteratorPart01Test030() {
    Int8Array arr = new Int8Array(new int[] {5});
    int count = 0;
    Number first = 0;
    for (Integer v : arr.values()) {
    first = v;
    count = count + 1;
    }
    assertEqual(1, count);
    assertEqual(5, first);
    }

    /**
     * Verify for-of iterator collects 3 elements 10, 20, 30
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ITERATOR_PART01_3100
     * @tc.name int8ArrayIteratorPart01Test031
     * @tc.desc Verify for-of iterator collects 3 elements 10, 20, 30
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIteratorPart01Test031() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    List<Integer> collected = new ArrayList<>();
    for (Integer v : arr.values()) {
    collected.add(v);
    }
    assertEqual(3, collected.size());
    assertEqualInt(10, collected.get(0));
    assertEqualInt(20, collected.get(1));
    assertEqualInt(30, collected.get(2));
    }

    /**
     * Verify Symbol.iterator for-of iterator collects elements and asserts value 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ITERATOR_PART01_3200
     * @tc.name int8ArrayIteratorPart01Test032
     * @tc.desc Verify Symbol.iterator for-of iterator collects elements and asserts value 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIteratorPart01Test032() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    List<Integer> expected = java.util.Arrays.asList(10, 20, 30);
    int i = 0;
    for (Integer v : arr.values()) {
    assertEqual(expected.get(i).intValue(), v.intValue());
    i = i + 1;
    }
    assertEqual(3, i);
    }

    /**
     * Verify for-of iterator with break after 1 element collects 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ITERATOR_PART01_3400
     * @tc.name int8ArrayIteratorPart01Test034
     * @tc.desc Verify for-of iterator with break after 1 element collects 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIteratorPart01Test034() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    List<Integer> collected = new ArrayList<>();
    for (Integer v : arr.values()) {
    if (collected.size() == 1) {
    break;
    }
    collected.add(v);
    }
    assertEqual(1, collected.size());
    assertEqualInt(10, collected.get(0));
    }

    /**
     * Verify for-of iterator with continue on 20 collects 2 elements 10, 30
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ITERATOR_PART01_3500
     * @tc.name int8ArrayIteratorPart01Test035
     * @tc.desc Verify for-of iterator with continue on 20 collects 2 elements 10, 30
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIteratorPart01Test035() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});

    List<Integer> collected = new ArrayList<>();

    for (Integer v : arr.values()) {
    if (v == 20) {
    continue;
    }
    collected.add(v);
    }

    assertEqual(2, collected.size());

    assertEqualInt(10, collected.get(0));

    assertEqualInt(30, collected.get(1));
    }

    /**
     * Verify for-of iterator over new Int8Array(new int[] {0, 1}) yields count 2 first value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ITERATOR_PART01_3600
     * @tc.name int8ArrayIteratorPart01Test036
     * @tc.desc Verify for-of iterator over new Int8Array(new int[] {0, 1}) yields count 2 first value 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIteratorPart01Test036() {
    Int8Array arr = new Int8Array(new int[] {0, 1});
    int count = 0;
    Number first = 0;
    for (Integer v : arr.values()) {
    if (count == 0) {
    first = v;
    }
    count = count + 1;
    }
    assertEqual(2, count);
    assertEqual(0, first);
    }

    /**
     * Verify for-of iterator over [255, 256] yields wrapped -1 and 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ITERATOR_PART01_3800
     * @tc.name int8ArrayIteratorPart01Test038
     * @tc.desc Verify for-of iterator over [255, 256] yields wrapped -1 and 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIteratorPart01Test038() {
    Int8Array arr = new Int8Array(new int[] {255, 256});
    List<Integer> collected = new ArrayList<>();
    for (Integer v : arr.values()) {
    collected.add(v);
    }
    assertEqualInt(-1, collected.get(0));
    assertEqualInt(0, collected.get(1));
    }

    /**
     * Verify for-of iterator over [1.9, -1.9] yields truncated 1 and -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ITERATOR_PART01_3900
     * @tc.name int8ArrayIteratorPart01Test039
     * @tc.desc Verify for-of iterator over [1.9, -1.9] yields truncated 1 and -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayIteratorPart01Test039() {
    Int8Array arr = new Int8Array(new double[] {1.9, -1.9});
    List<Integer> collected = new ArrayList<>();
    for (Integer v : arr.values()) {
    collected.add(v);
    }
    assertEqualInt(1, collected.get(0));
    assertEqualInt(-1, collected.get(1));
    }

    /**
     * Verify empty array via Int8Array.of() (static construction), iteratorSymbol() f
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ITERATOR_PART01_4700
     * @tc.name int8ArrayIteratorPart01Test047
     * @tc.desc Verify empty array via Int8Array.of() (static construction), iteratorSymbol() first next() returns done
     * true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
