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
import basetype.common.EntryResult;
import basetype.common.Error;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayEntriesPart02Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayEntriesPart02Test extends BasTest {
    /**
     * Verify entries() first next() returns index 0 and first element value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_0100
     * @tc.name int32ArrayEntriesPart02TestMindmapTest001
     * @tc.desc Verify entries() first next() returns index 0 and first element value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest001() {
    Int32Array a = Int32Array.of(1, 2, 3);
    Int32Array.EntriesIterator iter = a.entries();
    EntryResult r = iter.next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(1, r.value[1]);
    }

    /**
     * Verify entries() on single-element Int32Array returns value 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_0200
     * @tc.name int32ArrayEntriesPart02TestMindmapTest002
     * @tc.desc Verify entries() on single-element Int32Array returns value 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest002() {
    Int32Array a = new Int32Array(new int[] {5});
    Int32Array.EntriesIterator iter = a.entries();
    EntryResult r = iter.next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(5, r.value[1]);
    }

    /**
     * Verify entries() next() returns the first index-value pair
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_0300
     * @tc.name int32ArrayEntriesPart02TestMindmapTest003
     * @tc.desc Verify entries() next() returns the first index-value pair
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest003() {
    Int32Array a = Int32Array.of(10);
    Int32Array.EntriesIterator iter = a.entries();
    EntryResult r = iter.next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(10, r.value[1]);
    }

    /**
     * Verify next() return has done boolean property
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_0400
     * @tc.name int32ArrayEntriesPart02TestMindmapTest004
     * @tc.desc Verify next() return has done boolean property
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest004() {
    Int32Array a = Int32Array.of(1, 2);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(1, r.value[1]);
    }

    /**
     * Verify next() value equals source element 42 when not exhausted
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_0500
     * @tc.name int32ArrayEntriesPart02TestMindmapTest005
     * @tc.desc Verify next() value equals source element 42 when not exhausted
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest005() {
    Int32Array a = Int32Array.of(42);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(42, r.value[1]);
    }

    /**
     * Verify next() done strictly false when not exhausted
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_0700
     * @tc.name int32ArrayEntriesPart02TestMindmapTest007
     * @tc.desc Verify next() done strictly false when not exhausted
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest007() {
    EntryResult r = Int32Array.of(99).entries().next();
    assertFalse(r.done);
    }

    /**
     * Verify first next() value index is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_0800
     * @tc.name int32ArrayEntriesPart02TestMindmapTest008
     * @tc.desc Verify first next() value index is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest008() {
    EntryResult r = Int32Array.of(5, 6).entries().next();
    int idx = r.value[0];
    assertEqual(0, idx);
    }

    /**
     * Verify first next() value equals first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_0900
     * @tc.name int32ArrayEntriesPart02TestMindmapTest009
     * @tc.desc Verify first next() value equals first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest009() {
    EntryResult r = Int32Array.of(5, 6).entries().next();
    int v = r.value[1];
    assertEqual(5, v);
    }

    /**
     * Verify pair index equals 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_1000
     * @tc.name int32ArrayEntriesPart02TestMindmapTest010
     * @tc.desc Verify pair index equals 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest010() {
    EntryResult r = Int32Array.of(1).entries().next();
    assertEqual(0, r.value[0]);
    assertEqual(1, r.value[1]);
    }

    /**
     * Verify pair value equals 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_1100
     * @tc.name int32ArrayEntriesPart02TestMindmapTest011
     * @tc.desc Verify pair value equals 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest011() {
    EntryResult r = Int32Array.of(1).entries().next();
    assertEqual(1, r.value[1]);
    }

    /**
     * Verify entries on multi-element Int32Array yields correct index-value pairs
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_1200
     * @tc.name int32ArrayEntriesPart02TestMindmapTest012
     * @tc.desc Verify entries on multi-element Int32Array yields correct index-value pairs
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest012() {
    Int32Array.EntriesIterator it = Int32Array.of(10, 20, 30).entries();
    EntryResult r1 = it.next();
    EntryResult r2 = it.next();
    EntryResult r3 = it.next();
    assertEqual(0, r1.value[0]);
    assertEqual(10, r1.value[1]);
    assertEqual(1, r2.value[0]);
    assertEqual(20, r2.value[1]);
    assertEqual(2, r3.value[0]);
    assertEqual(30, r3.value[1]);
    }

    /**
     * Verify 1st next() index is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_1400
     * @tc.name int32ArrayEntriesPart02TestMindmapTest014
     * @tc.desc Verify 1st next() index is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest014() {
    Int32Array.EntriesIterator iter = Int32Array.of(100, 200, 300).entries();
    assertEqual(0, iter.next().value[0]);
    }

    /**
     * Verify 2nd next() index is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_1500
     * @tc.name int32ArrayEntriesPart02TestMindmapTest015
     * @tc.desc Verify 2nd next() index is 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest015() {
    Int32Array.EntriesIterator iter = Int32Array.of(100, 200, 300).entries();
    iter.next();
    assertEqual(1, iter.next().value[0]);
    }

    /**
     * Verify 3rd next() index is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_1600
     * @tc.name int32ArrayEntriesPart02TestMindmapTest016
     * @tc.desc Verify 3rd next() index is 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest016() {
    Int32Array.EntriesIterator iter = Int32Array.of(100, 200, 300).entries();
    iter.next();
    iter.next();
    assertEqual(2, iter.next().value[0]);
    }

    /**
     * Verify index sequence 0, 1, 2, 3 via for-of
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_1700
     * @tc.name int32ArrayEntriesPart02TestMindmapTest017
     * @tc.desc Verify index sequence 0, 1, 2, 3 via for-of
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest017() {
    Int32Array a = Int32Array.of(10, 20, 30, 40);
    int expected = 0;
    for (int[] pair : a.entries()) {
    assertEqual(expected, pair[0]);
    expected = expected + 1;
    }
    assertEqual(4, expected);
    }

    /**
     * Verify single element entries index is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_1800
     * @tc.name int32ArrayEntriesPart02TestMindmapTest018
     * @tc.desc Verify single element entries index is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest018() {
    Int32Array.EntriesIterator iter = Int32Array.of(77).entries();
    assertEqual(0, iter.next().value[0]);
    }

    /**
     * Verify single element next after consume done true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_1900
     * @tc.name int32ArrayEntriesPart02TestMindmapTest019
     * @tc.desc Verify single element next after consume done true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest019() {
    Int32Array.EntriesIterator iter = Int32Array.of(77).entries();
    iter.next();
    assertTrue(iter.next().done);
    }

    /**
     * Verify element 0 pair value is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_2100
     * @tc.name int32ArrayEntriesPart02TestMindmapTest021
     * @tc.desc Verify element 0 pair value is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest021() {
    Int32Array a = Int32Array.of(0);
    EntryResult r = a.entries().next();
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify float 2.9 from() truncated ToInt32=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_2600
     * @tc.name int32ArrayEntriesPart02TestMindmapTest026
     * @tc.desc Verify float 2.9 from() truncated ToInt32=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest026() {
    double[] src = new double[] {2.9};
    Int32Array a = Int32Array.from(src);
    EntryResult r = a.entries().next();
    assertEqual(2, r.value[1]);
    }

    /**
     * Verify float -0 from() truncated ToInt32=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_2700
     * @tc.name int32ArrayEntriesPart02TestMindmapTest027
     * @tc.desc Verify float -0 from() truncated ToInt32=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest027() {
    List<Integer> src = java.util.Arrays.asList(-0);
    Int32Array a = Int32Array.from(src);
    EntryResult r = a.entries().next();
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify hex literal 0xFF value 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_2800
     * @tc.name int32ArrayEntriesPart02TestMindmapTest028
     * @tc.desc Verify hex literal 0xFF value 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest028() {
    Int32Array a = Int32Array.of(0xFF);
    EntryResult r = a.entries().next();
    assertEqual(255, r.value[1]);
    }

    /**
     * Verify length=1 for-of iterates 1 time
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_2900
     * @tc.name int32ArrayEntriesPart02TestMindmapTest029
     * @tc.desc Verify length=1 for-of iterates 1 time
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest029() {
    Int32Array a = Int32Array.of(9);
    int count = 0;
    for (int[] pair : a.entries()) {
    count = count + 1;
    }
    assertEqual(1, count);
    }

    /**
     * Verify length=4 for-of iterates 4 times
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_3000
     * @tc.name int32ArrayEntriesPart02TestMindmapTest030
     * @tc.desc Verify length=4 for-of iterates 4 times
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest030() {
    Int32Array a = Int32Array.of(1, 2, 3, 4);
    int count = 0;
    for (int[] pair : a.entries()) {
    count = count + 1;
    }
    assertEqual(4, count);
    }

    /**
     * Verify next after exhaustion returns done=true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_3100
     * @tc.name int32ArrayEntriesPart02TestMindmapTest031
     * @tc.desc Verify next after exhaustion returns done=true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest031() {
    Int32Array.EntriesIterator iter = Int32Array.of(1, 2).entries();
    iter.next();
    iter.next();
    assertTrue(iter.next().done);
    }

    /**
     * Verify multiple next after exhaustion idempotent done=true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_3200
     * @tc.name int32ArrayEntriesPart02TestMindmapTest032
     * @tc.desc Verify multiple next after exhaustion idempotent done=true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest032() {
    Int32Array.EntriesIterator iter = Int32Array.of(1).entries();
    iter.next();
    iter.next();
    EntryResult r = iter.next();
    assertTrue(r.done);
    }

    /**
     * Verify exhausted next().value is undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_3300
     * @tc.name int32ArrayEntriesPart02TestMindmapTest033
     * @tc.desc Verify exhausted next().value is undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest033() {
    Int32Array.EntriesIterator iter = Int32Array.of(1).entries();
    iter.next();
    EntryResult r = iter.next();
    assertNull(r.value);
    }

    /**
     * Verify independent iterators separate cursors
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_3400
     * @tc.name int32ArrayEntriesPart02TestMindmapTest034
     * @tc.desc Verify independent iterators separate cursors
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest034() {
    Int32Array a = Int32Array.of(5, 6);
    Int32Array.EntriesIterator it1 = a.entries();
    it1.next();
    it1.next();
    it1.next();
    Int32Array.EntriesIterator it2 = a.entries();
    assertFalse(it2.next().done);
    }

    /**
     * Verify two independent iterators advance separately
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_3500
     * @tc.name int32ArrayEntriesPart02TestMindmapTest035
     * @tc.desc Verify two independent iterators advance separately
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest035() {
    Int32Array a = Int32Array.of(10, 20, 30);
    Int32Array.EntriesIterator itA = a.entries();
    Int32Array.EntriesIterator itB = a.entries();
    itA.next();
    assertEqual(0, itB.next().value[0]);
    assertEqual(1, itA.next().value[0]);
    }

    /**
     * Verify entries() call does not change length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_3600
     * @tc.name int32ArrayEntriesPart02TestMindmapTest036
     * @tc.desc Verify entries() call does not change length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest036() {
    Int32Array a = Int32Array.of(1, 2, 3);
    a.entries();
    assertEqual(3, a.length());
    }

    /**
     * Verify entries() call does not change elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_3700
     * @tc.name int32ArrayEntriesPart02TestMindmapTest037
     * @tc.desc Verify entries() call does not change elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest037() {
    Int32Array a = Int32Array.of(1, 2, 3);
    a.entries();
    assertEqualInt(1, a.get(0));
    assertEqualInt(2, a.get(1));
    assertEqualInt(3, a.get(2));
    }

    /**
     * Verify for-of traversal leaves length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_3800
     * @tc.name int32ArrayEntriesPart02TestMindmapTest038
     * @tc.desc Verify for-of traversal leaves length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest038() {
    Int32Array a = Int32Array.of(10, 20);
    for (int[] pair : a.entries()) {
        continue;
    }
    assertEqual(2, a.length());
    }

    /**
     * Verify for-of traversal elements unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_3900
     * @tc.name int32ArrayEntriesPart02TestMindmapTest039
     * @tc.desc Verify for-of traversal elements unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest039() {
    Int32Array a = Int32Array.of(10, 20);
    for (int[] pair : a.entries()) {
        continue;
    }
    assertEqualInt(10, a.get(0));
    assertEqualInt(20, a.get(1));
    }

    /**
     * Verify entries() does not change byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_4200
     * @tc.name int32ArrayEntriesPart02TestMindmapTest042
     * @tc.desc Verify entries() does not change byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest042() {
    Int32Array a = Int32Array.of(1, 2);
    int before = a.byteLength();
    a.entries();
    assertEqual(before, a.byteLength());
    }

    /**
     * Verify entries() does not change byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_4300
     * @tc.name int32ArrayEntriesPart02TestMindmapTest043
     * @tc.desc Verify entries() does not change byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest043() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 4, 2);
    int before = a.byteOffset();
    a.entries();
    assertEqual(before, a.byteOffset());
    }

    /**
     * Verify partial for-of break length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_4400
     * @tc.name int32ArrayEntriesPart02TestMindmapTest044
     * @tc.desc Verify partial for-of break length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest044() {
    Int32Array a = Int32Array.of(1, 2, 3, 4, 5);
    int seen = 0;
    for (int[] pair : a.entries()) {
    seen = seen + 1;
    if (seen == 1) {
    break;
    }
    }
    assertEqual(5, a.length());
    }

    /**
     * Verify entries() does not change buffer reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_4500
     * @tc.name int32ArrayEntriesPart02TestMindmapTest045
     * @tc.desc Verify entries() does not change buffer reference
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest045() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int32Array a = new Int32Array(buf);
    ArrayBuffer before = a.buffer();
    a.entries();
    assertEqual(before, a.buffer());
    }

    /**
     * Verify subview byteOffset=8 entries index starts from 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_5000
     * @tc.name int32ArrayEntriesPart02TestMindmapTest050
     * @tc.desc Verify subview byteOffset=8 entries index starts from 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest050() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 8, 2);
    a.set(0, 10);
    a.set(1, 20);
    Int32Array.EntriesIterator iter = a.entries();
    assertEqual(0, iter.next().value[0]);
    assertEqual(1, iter.next().value[0]);
    }

    /**
     * Verify length=0 byteOffset=4 view entries first next done=true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_5300
     * @tc.name int32ArrayEntriesPart02TestMindmapTest053
     * @tc.desc Verify length=0 byteOffset=4 view entries first next done=true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest053() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 4, 0);
    assertTrue(a.entries().next().done);
    }

    /**
     * Verify subarray entries index starts from 0 relative
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_5500
     * @tc.name int32ArrayEntriesPart02TestMindmapTest055
     * @tc.desc Verify subarray entries index starts from 0 relative
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest055() {
    Int32Array a = Int32Array.of(10, 20, 30);
    Int32Array sub = a.subarray(1, 3);
    Int32Array.EntriesIterator iter = sub.entries();
    assertEqual(0, iter.next().value[0]);
    assertEqual(1, iter.next().value[0]);
    }

    /**
     * Verify subarray(0, 0) empty view entries first next done=true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_5700
     * @tc.name int32ArrayEntriesPart02TestMindmapTest057
     * @tc.desc Verify subarray(0, 0) empty view entries first next done=true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest057() {
    Int32Array a = Int32Array.of(1, 2, 3);
    Int32Array sub = a.subarray(0, 0);
    assertTrue(sub.entries().next().done);
    }

    /**
     * Verify for-of break at first consumes 1 pair
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_5800
     * @tc.name int32ArrayEntriesPart02TestMindmapTest058
     * @tc.desc Verify for-of break at first consumes 1 pair
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest058() {
    Int32Array a = Int32Array.of(1, 2, 3);
    int seen = 0;
    for (int[] pair : a.entries()) {
    seen = seen + 1;
    break;
    }
    assertEqual(1, seen);
    }

    /**
     * Verify for-of break at index=1 consumes 2 pairs
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_5900
     * @tc.name int32ArrayEntriesPart02TestMindmapTest059
     * @tc.desc Verify for-of break at index=1 consumes 2 pairs
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest059() {
    Int32Array a = Int32Array.of(10, 20, 30, 40);
    int seen = 0;
    for (int[] pair : a.entries()) {
    seen = seen + 1;
    if (pair[0] == 1) {
    break;
    }
    }
    assertEqual(2, seen);
    }

    /**
     * Verify throw in for-of caught array length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_6200
     * @tc.name int32ArrayEntriesPart02TestMindmapTest062
     * @tc.desc Verify throw in for-of caught array length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest062() {
    Int32Array a = Int32Array.of(1, 2, 3);
    int reached = 0;
    String caughtMsg = "";
    try {
    for (int[] pair : a.entries()) {
    reached = reached + 1;
    BasTest.throwTestError("stop");
    }
    } catch (Error e) {
    caughtMsg = e.getMessage();
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual("stop", caughtMsg);
    assertEqual(1, reached);
    assertEqual(3, a.length());
    }

    /**
     * Verify manual next() cursor resumes from the remaining pair
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_6300
     * @tc.name int32ArrayEntriesPart02TestMindmapTest063
     * @tc.desc Verify manual next() cursor resumes from the remaining pair
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest063() {
    Int32Array a = Int32Array.of(10, 20, 30, 40);
    Int32Array.EntriesIterator iter = a.entries();
    int count1 = 0;
    EntryResult r = iter.next();
    while (!r.done) {
    count1 = count1 + 1;
    if (count1 == 2) {
    break;
    }
    r = iter.next();
    }
    int count2 = 0;
    r = iter.next();
    while (!r.done) {
    count2 = count2 + 1;
    r = iter.next();
    }
    assertEqual(2, count1);
    assertEqual(2, count2);
    }

    /**
     * Verify entries() iterator directly for-of self-return
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_6400
     * @tc.name int32ArrayEntriesPart02TestMindmapTest064
     * @tc.desc Verify entries() iterator directly for-of self-return
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest064() {
    Int32Array.EntriesIterator iter = Int32Array.of(1, 2, 3).entries();
    int count = 0;
    for (int[] pair : iter) {
    count = count + 1;
    }
    assertEqual(3, count);
    }

    /**
     * Verify chained of().entries().next() single expression
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_6600
     * @tc.name int32ArrayEntriesPart02TestMindmapTest066
     * @tc.desc Verify chained of().entries().next() single expression
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest066() {
    EntryResult r = Int32Array.of(42).entries().next();
    assertFalse(r.done);
    assertEqual(42, r.value[1]);
    }

    /**
     * Verify chained new Int32Array(0).entries().next() done=true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_6700
     * @tc.name int32ArrayEntriesPart02TestMindmapTest067
     * @tc.desc Verify chained new Int32Array(0).entries().next() done=true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest067() {
    EntryResult r = new Int32Array(0).entries().next();
    assertTrue(r.done);
    }

    /**
     * Verify entries value cast to number equals source element 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_6900
     * @tc.name int32ArrayEntriesPart02TestMindmapTest069
     * @tc.desc Verify entries value cast to number equals source element 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest069() {
    EntryResult r = Int32Array.of(5).entries().next();
    int v = r.value[1];
    assertEqual(5, v);
    }

    /**
     * Verify element 1 Number wrapper unbox equals 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_7100
     * @tc.name int32ArrayEntriesPart02TestMindmapTest071
     * @tc.desc Verify element 1 Number wrapper unbox equals 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest071() {
    EntryResult r = Int32Array.of(1).entries().next();
    boolean eq = r.value[1] == 1;
    assertTrue(eq);
    }

    /**
     * Verify from empty array entries first next done=true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART02_TEST_MINDMAP_7800
     * @tc.name int32ArrayEntriesPart02TestMindmapTest078
     * @tc.desc Verify from empty array entries first next done=true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart02TestMindmapTest078() {
    List<Integer> empty = new ArrayList<>();
    Int32Array a = Int32Array.from(empty);
    assertTrue(a.entries().next().done);
    }
}
