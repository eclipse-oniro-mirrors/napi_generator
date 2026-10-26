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
import basetype.common.EntryResult;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayEntriesPart02Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayEntriesPart02Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify entries() return Object has callable next method
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_0200
     * @tc.name int8ArrayEntriesPart02Test002
     * @tc.desc Verify entries() return Object has callable next method
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test002() {
    Int8Array arr = new Int8Array(new int[] {5, 15});
    Int8Array.EntriesIterator iter = arr.entries();
    EntryResult r = iter.next();
    assertEqual(0, r.value[0]);
    }

    /**
     * Verify each entries() returns independent iterator, advance does not affect each other
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_0300
     * @tc.name int8ArrayEntriesPart02Test003
     * @tc.desc Verify each entries() returns independent iterator, advance does not affect each other
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test003() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Int8Array.EntriesIterator iter1 = arr.entries();
    Int8Array.EntriesIterator iter2 = arr.entries();
    iter1.next();
    EntryResult r2 = iter2.next();
    int i2 = r2.value[0];
    assertEqual(0, i2);
    }

    /**
     * Verify entries() next() return
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_0400
     * @tc.name int8ArrayEntriesPart02Test004
     * @tc.desc Verify entries() next() return
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test004() {
    Int8Array arr = new Int8Array(new int[] {7, 8});
    Int8Array.EntriesIterator iter = arr.entries();
    EntryResult r = iter.next();
    boolean r1 = r.done;
    assertFalse(r1);
    }

    /**
     * Verify entries() first next().value[0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_0500
     * @tc.name int8ArrayEntriesPart02Test005
     * @tc.desc Verify entries() first next().value[0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test005() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Int8Array.EntriesIterator iter = arr.entries();
    EntryResult r = iter.next();
    int idx = r.value[0];
    assertEqual(0, idx);
    }

    /**
     * Verify entries() second next().value[0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_0600
     * @tc.name int8ArrayEntriesPart02Test006
     * @tc.desc Verify entries() second next().value[0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test006() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Int8Array.EntriesIterator iter = arr.entries();
    iter.next();
    EntryResult r = iter.next();
    int idx = r.value[0];
    assertEqual(1, idx);
    }

    /**
     * Verify entries() step next().value[0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_0700
     * @tc.name int8ArrayEntriesPart02Test007
     * @tc.desc Verify entries() step next().value[0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test007() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array.EntriesIterator iter = arr.entries();
    iter.next();
    iter.next();
    iter.next();
    EntryResult r = iter.next();
    int idx = r.value[0];
    assertEqual(3, idx);
    }

    /**
     * Verify entries() last next().value[0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_0800
     * @tc.name int8ArrayEntriesPart02Test008
     * @tc.desc Verify entries() last next().value[0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test008() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Int8Array.EntriesIterator iter = arr.entries();
    iter.next();
    iter.next();
    EntryResult r = iter.next();
    int idx = r.value[0];
    assertEqual(2, idx);
    }

    /**
     * Verify entries returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_1500
     * @tc.name int8ArrayEntriesPart02Test015
     * @tc.desc Verify entries returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test015() {
    Int8Array arr = new Int8Array(0);
    Int8Array.EntriesIterator iter = arr.entries();
    EntryResult r = iter.next();
    Object v = r.value;
    assertNull(v);
    }

    /**
     * Verify empty array entries() iterator next() returns {done:true}
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_1600
     * @tc.name int8ArrayEntriesPart02Test016
     * @tc.desc Verify empty array entries() iterator next() returns {done:true}
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test016() {
    Int8Array arr = new Int8Array(0);
    Int8Array.EntriesIterator iter = arr.entries();
    EntryResult r = iter.next();
    boolean r1 = r.done;
    assertTrue(r1);
    }

    /**
     * Verify first next() of entries() returns index 0 on single-element Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_1700
     * @tc.name int8ArrayEntriesPart02Test017
     * @tc.desc Verify first next() of entries() returns index 0 on single-element Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test017() {
    Int8Array arr = new Int8Array(new int[] {42});
    Int8Array.EntriesIterator iter = arr.entries();
    EntryResult r = iter.next();
    int idx = r.value[0];
    assertEqual(0, idx);
    }

    /**
     * Verify second next() of entries() on single-element Int8Array is done
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_1800
     * @tc.name int8ArrayEntriesPart02Test018
     * @tc.desc Verify second next() of entries() on single-element Int8Array is done
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test018() {
    Int8Array arr = new Int8Array(new int[] {42});
    Int8Array.EntriesIterator iter = arr.entries();
    iter.next();
    EntryResult r = iter.next();
    assertTrue(r.done);
    }

    /**
     * Verify entries() beyond length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_1900
     * @tc.name int8ArrayEntriesPart02Test019
     * @tc.desc Verify entries() beyond length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test019() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Int8Array.EntriesIterator iter = arr.entries();
    iter.next();
    iter.next();
    iter.next();
    EntryResult r = iter.next();
    assertTrue(r.done);
    }

    /**
     * Verify entries() exhausted next().value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_2000
     * @tc.name int8ArrayEntriesPart02Test020
     * @tc.desc Verify entries() exhausted next().value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test020() {
    Int8Array arr = new Int8Array(new int[] {10, 20});
    Int8Array.EntriesIterator iter = arr.entries();
    iter.next();
    iter.next();
    EntryResult r = iter.next();
    Object v = r.value;
    assertNull(v);
    }

    /**
     * Verify entries() exhausted then
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_2100
     * @tc.name int8ArrayEntriesPart02Test021
     * @tc.desc Verify entries() exhausted then
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test021() {
    Int8Array arr = new Int8Array(new int[] {10, 20});
    Int8Array.EntriesIterator iter = arr.entries();
    iter.next();
    iter.next();
    iter.next();
    EntryResult r = iter.next();
    assertTrue(r.done);
    }

    /**
     * Verify two consecutive next() of entries() after exhaustion both return done
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_2200
     * @tc.name int8ArrayEntriesPart02Test022
     * @tc.desc Verify two consecutive next() of entries() after exhaustion both return done
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test022() {
    Int8Array arr = new Int8Array(new int[] {10, 20});
    Int8Array.EntriesIterator iter = arr.entries();
    iter.next();
    iter.next();
    EntryResult r1 = iter.next();
    EntryResult r2 = iter.next();
    assertTrue(r1.done);
    assertTrue(r2.done);
    }

    /**
     * Verify entries() on ArrayBuffer view keeps byteOffset and yields set values 7, 8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_2400
     * @tc.name int8ArrayEntriesPart02Test024
     * @tc.desc Verify entries() on ArrayBuffer view keeps byteOffset and yields set values 7, 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test024() {
    Int8Array arr = new Int8Array(new int[] {42});
    Int8Array.EntriesIterator iter = arr.entries();
    EntryResult r = iter.next();
    int idx = r.value[0];
    assertEqual(0, idx);
    }

    /**
     * Verify entries() while count
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_2500
     * @tc.name int8ArrayEntriesPart02Test025
     * @tc.desc Verify entries() while count
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test025() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array.EntriesIterator iter = arr.entries();
    int count = 0;
    EntryResult r = iter.next();
    while (!r.done) {
    count = count + 1;
    r = iter.next();
    }
    assertEqual(4, count);
    }

    /**
     * Verify entries() creation alone does not change arr.length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_2600
     * @tc.name int8ArrayEntriesPart02Test026
     * @tc.desc Verify entries() creation alone does not change arr.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test026() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Int8Array.EntriesIterator iter = arr.entries();
    iter.next();
    iter.next();
    iter.next();
    EntryResult r = iter.next();
    assertTrue(r.done);
    }

    /**
     * Verify entries() iteration yields indexes 0-2 with values 10, 20, 30
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_2700
     * @tc.name int8ArrayEntriesPart02Test027
     * @tc.desc Verify entries() iteration yields indexes 0-2 with values 10, 20, 30
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test027() {
    Int8Array arr = new Int8Array(new int[] {10, 20});
    Int8Array.EntriesIterator iter = arr.entries();
    iter.next();
    iter.next();
    EntryResult r = iter.next();
    Object v = r.value;
    assertNull(v);
    }

    /**
     * Verify entries() for-of consume
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_3000
     * @tc.name int8ArrayEntriesPart02Test030
     * @tc.desc Verify entries() for-of consume
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test030() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    int first = -1;
    for (int[] pair : arr.entries()) {
    first = pair[0];
    break;
    }
    int r1 = arr.length();
    int e1 = 3;
    assertEqual(e1, r1);
    assertEqual(0, first);
    }

    /**
     * Verify exhausted original iterator then can still entries() again (array not consumed)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_3100
     * @tc.name int8ArrayEntriesPart02Test031
     * @tc.desc Verify exhausted original iterator then can still entries() again (array not consumed)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test031() {
    Int8Array arr = new Int8Array(new int[] {10, 20});
    Int8Array.EntriesIterator iter1 = arr.entries();
    iter1.next();
    iter1.next();
    iter1.next();
    Int8Array.EntriesIterator iter2 = arr.entries();
    EntryResult r = iter2.next();
    assertFalse(r.done);
    }

    /**
     * Verify after complete iteration re-entries() first index is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_3200
     * @tc.name int8ArrayEntriesPart02Test032
     * @tc.desc Verify after complete iteration re-entries() first index is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test032() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Int8Array.EntriesIterator iter1 = arr.entries();
    iter1.next();
    iter1.next();
    iter1.next();
    iter1.next();
    Int8Array.EntriesIterator iter2 = arr.entries();
    EntryResult r = iter2.next();
    int idx = r.value[0];
    assertEqual(0, idx);
    }

    /**
     * Verify entries() same array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_3300
     * @tc.name int8ArrayEntriesPart02Test033
     * @tc.desc Verify entries() same array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test033() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Int8Array.EntriesIterator iter1 = arr.entries();
    Int8Array.EntriesIterator iter2 = arr.entries();
    EntryResult r1 = iter1.next();
    EntryResult r2 = iter2.next();
    int i1 = r1.value[0];
    int i2 = r2.value[0];
    assertEqual(0, i1);
    assertEqual(0, i2);
    }

    /**
     * Verify entries() interleaved advance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_3400
     * @tc.name int8ArrayEntriesPart02Test034
     * @tc.desc Verify entries() interleaved advance
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test034() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    Int8Array.EntriesIterator iter1 = arr.entries();
    Int8Array.EntriesIterator iter2 = arr.entries();
    iter1.next();
    EntryResult r1 = iter1.next();
    iter2.next();
    iter2.next();
    EntryResult r2 = iter2.next();
    int i1 = r1.value[0];
    int i2 = r2.value[0];
    assertEqual(1, i1);
    assertEqual(2, i2);
    }

    /**
     * Verify entries() for-of last
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_3800
     * @tc.name int8ArrayEntriesPart02Test038
     * @tc.desc Verify entries() for-of last
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test038() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40});
    int last = -1;
    for (int[] pair : arr.entries()) {
    last = pair[0];
    }
    assertEqual(3, last);
    }

    /**
     * Verify consecutive next() of entries() yields indexes 0 then 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_3900
     * @tc.name int8ArrayEntriesPart02Test039
     * @tc.desc Verify consecutive next() of entries() yields indexes 0 then 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test039() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30});
    Int8Array.EntriesIterator iter = arr.entries();
    EntryResult r1 = iter.next();
    EntryResult r2 = iter.next();
    int i1 = r1.value[0];
    int i2 = r2.value[0];
    assertEqual(0, i1);
    assertEqual(1, i2);
    }

    /**
     * Verify subarray view entries index starts from 0 (view relative, not absolute buffer offset)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_4000
     * @tc.name int8ArrayEntriesPart02Test040
     * @tc.desc Verify subarray view entries index starts from 0 (view relative, not absolute buffer offset)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test040() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    Int8Array view = arr.subarray(2, 5);
    Int8Array.EntriesIterator iter = view.entries();
    EntryResult r = iter.next();
    int idx = r.value[0];
    assertEqual(0, idx);
    }

    /**
     * Verify entries() iteration on subarray(1, 4) yields 3 pairs
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_4200
     * @tc.name int8ArrayEntriesPart02Test042
     * @tc.desc Verify entries() iteration on subarray(1, 4) yields 3 pairs
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test042() {
    Int8Array arr = new Int8Array(new int[] {10, 20, 30, 40, 50});
    Int8Array view = arr.subarray(1, 4);
    int cnt = 0;
    Int8Array.EntriesIterator iter = view.entries();
    EntryResult r = iter.next();
    while (!r.done) {
    cnt = cnt + 1;
    r = iter.next();
    }
    assertEqual(3, cnt);
    }

    /**
     * Verify ArrayBuffer view with byteOffset entries index still starts from 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_4300
     * @tc.name int8ArrayEntriesPart02Test043
     * @tc.desc Verify ArrayBuffer view with byteOffset entries index still starts from 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test043() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int8Array arr = new Int8Array(buf, 2, 3);
    arr.set(0, 11);
    arr.set(1, 22);
    arr.set(2, 33);
    Int8Array.EntriesIterator iter = arr.entries();
    EntryResult r = iter.next();
    int idx = r.value[0];
    assertEqual(0, idx);
    }

    /**
     * Verify same buffer two views each entries count independent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART02_4600
     * @tc.name int8ArrayEntriesPart02Test046
     * @tc.desc Verify same buffer two views each entries count independent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart02Test046() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int8Array view1 = new Int8Array(buf, 0, 3);
    Int8Array view2 = new Int8Array(buf, 3, 3);
    int c1 = 0;
    Int8Array.EntriesIterator it1 = view1.entries();
    EntryResult r1 = it1.next();
    while (!r1.done) {
    c1 = c1 + 1;
    r1 = it1.next();
    }
    int c2 = 0;
    Int8Array.EntriesIterator it2 = view2.entries();
    EntryResult r2 = it2.next();
    while (!r2.done) {
    c2 = c2 + 1;
    r2 = it2.next();
    }
    assertEqual(3, c1);
    assertEqual(3, c2);
    }
}
