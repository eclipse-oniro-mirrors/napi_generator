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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int32ArrayEntriesPart01Test —— Int32Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int32ArrayEntriesPart01Test extends BasTest {
    /**
     * Verify empty Int32Array entries() returns done=true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_0100
     * @tc.name int32ArrayEntriesPart01TestMindmapTest001
     * @tc.desc Verify empty Int32Array entries() returns done=true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest001() {
    Int32Array a = new Int32Array();
    EntryResult r = a.entries().next();
    assertTrue(r.done);
    }

    /**
     * Verify length=3 Int32Array entries() starts at index 0 with value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_0200
     * @tc.name int32ArrayEntriesPart01TestMindmapTest002
     * @tc.desc Verify length=3 Int32Array entries() starts at index 0 with value 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest002() {
    Int32Array a = new Int32Array(3);
    EntryResult r = a.entries().next();
    int[] pair = r.value;
    assertFalse(r.done);
    assertEqual(0, pair[0]);
    assertEqual(0, pair[1]);
    }

    /**
     * Verify array literal entries() starts at index 0 with value 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_0300
     * @tc.name int32ArrayEntriesPart01TestMindmapTest003
     * @tc.desc Verify array literal entries() starts at index 0 with value 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest003() {
    Int32Array a = new Int32Array(new int[] {1, 2, 3});
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(1, r.value[1]);
    }

    /**
     * Verify Int32Array.of entries() starts at index 0 with value 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_0400
     * @tc.name int32ArrayEntriesPart01TestMindmapTest004
     * @tc.desc Verify Int32Array.of entries() starts at index 0 with value 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest004() {
    Int32Array a = Int32Array.of(10, 20, 30);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(10, r.value[1]);
    }

    /**
     * Verify Int32Array.from entries() starts at index 0 with value 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_0500
     * @tc.name int32ArrayEntriesPart01TestMindmapTest005
     * @tc.desc Verify Int32Array.from entries() starts at index 0 with value 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest005() {
    List<Integer> src = java.util.Arrays.asList(4, 5);
    Int32Array a = Int32Array.from(src);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(4, r.value[1]);
    }

    /**
     * Verify Int32Array.of(1).entries() next
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_0600
     * @tc.name int32ArrayEntriesPart01TestMindmapTest006
     * @tc.desc Verify Int32Array.of(1).entries() next
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest006() {
    Int32Array.EntriesIterator iter = Int32Array.of(1).entries();
    EntryResult r = iter.next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(1, r.value[1]);
    }

    /**
     * Verify ArrayBuffer-backed entries() returns the first pair
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_0700
     * @tc.name int32ArrayEntriesPart01TestMindmapTest007
     * @tc.desc Verify ArrayBuffer-backed entries() returns the first pair
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest007() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify subarray entries() returns the first pair
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_0800
     * @tc.name int32ArrayEntriesPart01TestMindmapTest008
     * @tc.desc Verify subarray entries() returns the first pair
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest008() {
    Int32Array a = new Int32Array(new int[] {1, 2, 3});
    Int32Array sub = a.subarray(1);
    EntryResult r = sub.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(2, r.value[1]);
    }

    /**
     * Verify 0 new Int32Array(0) entries() next().done true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_0900
     * @tc.name int32ArrayEntriesPart01TestMindmapTest009
     * @tc.desc Verify 0 new Int32Array(0) entries() next().done true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest009() {
    Int32Array a = new Int32Array(0);
    EntryResult r = a.entries().next();
    assertTrue(r.done);
    }

    /**
     * Verify 1 new Int32Array(1) entries() next
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_1000
     * @tc.name int32ArrayEntriesPart01TestMindmapTest010
     * @tc.desc Verify 1 new Int32Array(1) entries() next
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest010() {
    Int32Array a = new Int32Array(1);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify new Int32Array(new int[] {}) entries() next().done true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_1100
     * @tc.name int32ArrayEntriesPart01TestMindmapTest011
     * @tc.desc Verify new Int32Array(new int[] {}) entries() next().done true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest011() {
    List<Integer> src = new ArrayList<>();
    Int32Array a = new Int32Array(src);
    EntryResult r = a.entries().next();
    assertTrue(r.done);
    }

    /**
     * Verify new Int32Array(new int[] {42}) entries() value 42
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_1200
     * @tc.name int32ArrayEntriesPart01TestMindmapTest012
     * @tc.desc Verify new Int32Array(new int[] {42}) entries() value 42
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest012() {
    Int32Array a = new Int32Array(new int[] {42});
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(42, r.value[1]);
    }

    /**
     * Verify Int32Array.of() length=0 entries() next().done true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_1300
     * @tc.name int32ArrayEntriesPart01TestMindmapTest013
     * @tc.desc Verify Int32Array.of() length=0 entries() next().done true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest013() {
    Int32Array a = Int32Array.of();
    EntryResult r = a.entries().next();
    assertTrue(r.done);
    }

    /**
     * Verify Int32Array.of entries() index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_1400
     * @tc.name int32ArrayEntriesPart01TestMindmapTest014
     * @tc.desc Verify Int32Array.of entries() index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest014() {
    Int32Array a = Int32Array.of(99);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(99, r.value[1]);
    }

    /**
     * Verify Int32Array.from length=0 entries() next().done true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_1500
     * @tc.name int32ArrayEntriesPart01TestMindmapTest015
     * @tc.desc Verify Int32Array.from length=0 entries() next().done true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest015() {
    List<Integer> src = new ArrayList<>();
    Int32Array a = Int32Array.from(src);
    EntryResult r = a.entries().next();
    assertTrue(r.done);
    }

    /**
     * Verify ArrayBuffer new Int32Array(buf, 4, 2) entries()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_1600
     * @tc.name int32ArrayEntriesPart01TestMindmapTest016
     * @tc.desc Verify ArrayBuffer new Int32Array(buf, 4, 2) entries()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest016() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 4, 2);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify subarray(1, 2) entries() index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_1700
     * @tc.name int32ArrayEntriesPart01TestMindmapTest017
     * @tc.desc Verify subarray(1, 2) entries() index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest017() {
    Int32Array a = new Int32Array(new int[] {10, 20, 30});
    Int32Array sub = a.subarray(1, 2);
    EntryResult r = sub.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(20, r.value[1]);
    }

    /**
     * Verify new Int32Array(other) entries()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_1800
     * @tc.name int32ArrayEntriesPart01TestMindmapTest018
     * @tc.desc Verify new Int32Array(other) entries()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest018() {
    Int32Array src = new Int32Array(new int[] {7});
    Int32Array a = new Int32Array(src);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(7, r.value[1]);
    }

    /**
     * Verify number new Int32Array(2) entries()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_1900
     * @tc.name int32ArrayEntriesPart01TestMindmapTest019
     * @tc.desc Verify number new Int32Array(2) entries()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest019() {
    Int32Array a = new Int32Array(2);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify length=0 entries() next done true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_2000
     * @tc.name int32ArrayEntriesPart01TestMindmapTest020
     * @tc.desc Verify length=0 entries() next done true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest020() {
    Int32Array a = new Int32Array();
    Int32Array.EntriesIterator iter = a.entries();
    assertTrue(iter.next().done);
    }

    /**
     * Verify length=1 entries() 1 next done false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_2100
     * @tc.name int32ArrayEntriesPart01TestMindmapTest021
     * @tc.desc Verify length=1 entries() 1 next done false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest021() {
    Int32Array a = new Int32Array(1);
    Int32Array.EntriesIterator iter = a.entries();
    assertFalse(iter.next().done);
    }

    /**
     * Verify length=1 entries() 2 next done true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_2200
     * @tc.name int32ArrayEntriesPart01TestMindmapTest022
     * @tc.desc Verify length=1 entries() 2 next done true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest022() {
    Int32Array a = new Int32Array(1);
    Int32Array.EntriesIterator iter = a.entries();
    iter.next();
    EntryResult r = iter.next();
    assertTrue(r.done);
    assertNull(r.value);
    }

    /**
     * Verify length=2 entries() 2 next
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_2300
     * @tc.name int32ArrayEntriesPart01TestMindmapTest023
     * @tc.desc Verify length=2 entries() 2 next
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest023() {
    Int32Array a = new Int32Array(new int[] {1, 2});
    Int32Array.EntriesIterator iter = a.entries();
    iter.next();
    assertFalse(iter.next().done);
    }

    /**
     * Verify length=2 entries() 3 next
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_2400
     * @tc.name int32ArrayEntriesPart01TestMindmapTest024
     * @tc.desc Verify length=2 entries() 3 next
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest024() {
    Int32Array a = new Int32Array(new int[] {1, 2});
    Int32Array.EntriesIterator iter = a.entries();
    iter.next();
    iter.next();
    EntryResult r = iter.next();
    assertTrue(r.done);
    assertNull(r.value);
    }

    /**
     * Verify length=32 entries() 32 done=false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_2500
     * @tc.name int32ArrayEntriesPart01TestMindmapTest025
     * @tc.desc Verify length=32 entries() 32 done=false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest025() {
    Int32Array a = new Int32Array(32);
    Int32Array.EntriesIterator iter = a.entries();
    for (int i = 0; i < 31; i++) {
    iter.next();
    }
    assertFalse(iter.next().done);
    }

    /**
     * Verify length=32 entries() 33 next done=true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_2600
     * @tc.name int32ArrayEntriesPart01TestMindmapTest026
     * @tc.desc Verify length=32 entries() 33 next done=true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest026() {
    Int32Array a = new Int32Array(32);
    Int32Array.EntriesIterator iter = a.entries();
    for (int i = 0; i < 32; i++) {
    iter.next();
    }
    EntryResult r = iter.next();
    assertTrue(r.done);
    assertNull(r.value);
    }

    /**
     * Verify 0 entries() value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_2700
     * @tc.name int32ArrayEntriesPart01TestMindmapTest027
     * @tc.desc Verify 0 entries() value 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest027() {
    Int32Array a = new Int32Array(new int[] {0});
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify $_set -0 ToInt32 0 entries() 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_2800
     * @tc.name int32ArrayEntriesPart01TestMindmapTest028
     * @tc.desc Verify $_set -0 ToInt32 0 entries() 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest028() {
    Int32Array a = new Int32Array(1);
    a.set(0, -0);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify 1 entries() value 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_2900
     * @tc.name int32ArrayEntriesPart01TestMindmapTest029
     * @tc.desc Verify 1 entries() value 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest029() {
    Int32Array a = new Int32Array(new int[] {1});
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(1, r.value[1]);
    }

    /**
     * Verify number 3.7 ToIndex 3 entries() 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_3300
     * @tc.name int32ArrayEntriesPart01TestMindmapTest033
     * @tc.desc Verify number 3.7 ToIndex 3 entries() 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest033() {
    Int32Array a = new Int32Array(3.7);
    Int32Array.EntriesIterator iter = a.entries();
    iter.next();
    iter.next();
    EntryResult r = iter.next();
    assertFalse(r.done);
    assertEqual(2, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify decimal value 100 entries() returns 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_3400
     * @tc.name int32ArrayEntriesPart01TestMindmapTest034
     * @tc.desc Verify decimal value 100 entries() returns 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest034() {
    Int32Array a = new Int32Array(new int[] {100});
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(100, r.value[1]);
    }

    /**
     * Verify 4294967296 0x100000000 ToInt32 0 entries() 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_3900
     * @tc.name int32ArrayEntriesPart01TestMindmapTest039
     * @tc.desc Verify 4294967296 0x100000000 ToInt32 0 entries() 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest039() {
    Int32Array a = new Int32Array(1);
    a.set(0, (int) 4294967296L);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify 4294967297 0x100000001 ToInt32 1 entries() 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_4000
     * @tc.name int32ArrayEntriesPart01TestMindmapTest040
     * @tc.desc Verify 4294967297 0x100000001 ToInt32 1 entries() 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest040() {
    Int32Array a = new Int32Array(1);
    a.set(0, (int) 4294967297L);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(1, r.value[1]);
    }

    /**
     * Verify 3 ToInt32 3 entries() 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_4100
     * @tc.name int32ArrayEntriesPart01TestMindmapTest041
     * @tc.desc Verify 3 ToInt32 3 entries() 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest041() {
    Int32Array a = new Int32Array(1);
    a.set(0, 3);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(3, r.value[1]);
    }

    /**
     * Verify 3.999 ToInt32 3 entries() 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_4300
     * @tc.name int32ArrayEntriesPart01TestMindmapTest043
     * @tc.desc Verify 3.999 ToInt32 3 entries() 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest043() {
    Int32Array a = new Int32Array(1);
    a.set(0, 3.999);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(3, r.value[1]);
    }

    /**
     * Verify entries() returns 0 for element set to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_4500
     * @tc.name int32ArrayEntriesPart01TestMindmapTest045
     * @tc.desc Verify entries() returns 0 for element set to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest045() {
    Int32Array a = new Int32Array(1);
    a.set(0, 0);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify [10, 20, 30] entries() value 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_4600
     * @tc.name int32ArrayEntriesPart01TestMindmapTest046
     * @tc.desc Verify [10, 20, 30] entries() value 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest046() {
    Int32Array a = new Int32Array(new int[] {10, 20, 30});
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(10, r.value[1]);
    }

    /**
     * Verify [7, 7, 7] entries() value 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_4800
     * @tc.name int32ArrayEntriesPart01TestMindmapTest048
     * @tc.desc Verify [7, 7, 7] entries() value 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest048() {
    Int32Array a = new Int32Array(new int[] {7, 7, 7});
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(7, r.value[1]);
    }

    /**
     * Verify 0 [0, 0, 0] entries() value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_4900
     * @tc.name int32ArrayEntriesPart01TestMindmapTest049
     * @tc.desc Verify 0 [0, 0, 0] entries() value 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest049() {
    Int32Array a = new Int32Array(new int[] {0, 0, 0});
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify ArrayBuffer(byteLength=4) entries() buffer 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_5200
     * @tc.name int32ArrayEntriesPart01TestMindmapTest052
     * @tc.desc Verify ArrayBuffer(byteLength=4) entries() buffer 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest052() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int32Array a = new Int32Array(buf, 0, 1);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify ArrayBuffer(byteOffset=4, length=1) entries()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_5300
     * @tc.name int32ArrayEntriesPart01TestMindmapTest053
     * @tc.desc Verify ArrayBuffer(byteOffset=4, length=1) entries()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest053() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array a = new Int32Array(buf, 4, 1);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify ArrayBuffer(byteOffset=8, length=2) entries() index=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_5400
     * @tc.name int32ArrayEntriesPart01TestMindmapTest054
     * @tc.desc Verify ArrayBuffer(byteOffset=8, length=2) entries() index=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest054() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 8, 2);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify Int32Array ArrayBuffer $_set entries()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_5500
     * @tc.name int32ArrayEntriesPart01TestMindmapTest055
     * @tc.desc Verify Int32Array ArrayBuffer $_set entries()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest055() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array a1 = new Int32Array(buf, 0, 2);
    a1.set(0, 77);
    Int32Array a2 = new Int32Array(buf, 0, 2);
    EntryResult r = a2.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(77, r.value[1]);
    }

    /**
     * Verify ArrayBuffer a1 0 a2(byteOffset=4) entries() 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_5600
     * @tc.name int32ArrayEntriesPart01TestMindmapTest056
     * @tc.desc Verify ArrayBuffer a1 0 a2(byteOffset=4) entries() 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest056() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int32Array a1 = new Int32Array(buf, 0, 1);
    Int32Array a2 = new Int32Array(buf, 4, 1);
    a1.set(0, 99);
    EntryResult r = a2.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify ArrayBuffer byteLength=4096 Int32Array entries()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_5700
     * @tc.name int32ArrayEntriesPart01TestMindmapTest057
     * @tc.desc Verify ArrayBuffer byteLength=4096 Int32Array entries()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest057() {
    ArrayBuffer buf = new ArrayBuffer(4096);
    Int32Array a = new Int32Array(buf);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify ArrayBuffer byteOffset=12 3 int32 length=1 entries()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_5800
     * @tc.name int32ArrayEntriesPart01TestMindmapTest058
     * @tc.desc Verify ArrayBuffer byteOffset=12 3 int32 length=1 entries()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest058() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int32Array a = new Int32Array(buf, 12, 1);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify subarray(1) entries() value 1 20
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_5900
     * @tc.name int32ArrayEntriesPart01TestMindmapTest059
     * @tc.desc Verify subarray(1) entries() value 1 20
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest059() {
    Int32Array a = new Int32Array(new int[] {10, 20, 30});
    Int32Array sub = a.subarray(1);
    EntryResult r = sub.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(20, r.value[1]);
    }

    /**
     * Verify subarray(0, 0) entries() next().done true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_6000
     * @tc.name int32ArrayEntriesPart01TestMindmapTest060
     * @tc.desc Verify subarray(0, 0) entries() next().done true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest060() {
    Int32Array a = new Int32Array(new int[] {1, 2, 3});
    Int32Array sub = a.subarray(0, 0);
    EntryResult r = sub.entries().next();
    assertTrue(r.done);
    }

    /**
     * Verify subarray(2, 3) entries() value 2 30
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_6100
     * @tc.name int32ArrayEntriesPart01TestMindmapTest061
     * @tc.desc Verify subarray(2, 3) entries() value 2 30
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest061() {
    Int32Array a = new Int32Array(new int[] {10, 20, 30});
    Int32Array sub = a.subarray(2, 3);
    EntryResult r = sub.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(30, r.value[1]);
    }

    /**
     * Verify subarray subarray(3, 3) length=0 entries() done true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_6300
     * @tc.name int32ArrayEntriesPart01TestMindmapTest063
     * @tc.desc Verify subarray subarray(3, 3) length=0 entries() done true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest063() {
    Int32Array a = new Int32Array(new int[] {1, 2, 3});
    Int32Array sub = a.subarray(3, 3);
    EntryResult r = sub.entries().next();
    assertTrue(r.done);
    }

    /**
     * Verify subarray subarray(-1) entries() value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_6400
     * @tc.name int32ArrayEntriesPart01TestMindmapTest064
     * @tc.desc Verify subarray subarray(-1) entries() value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest064() {
    Int32Array a = new Int32Array(new int[] {10, 20, 30});
    Int32Array sub = a.subarray(-1);
    EntryResult r = sub.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(30, r.value[1]);
    }

    /**
     * Verify length=1 $_set(0, 5) entries() value 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_6500
     * @tc.name int32ArrayEntriesPart01TestMindmapTest065
     * @tc.desc Verify length=1 $_set(0, 5) entries() value 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest065() {
    Int32Array a = new Int32Array(1);
    a.set(0, 5);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(5, r.value[1]);
    }

    /**
     * Verify $_set entries()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_6600
     * @tc.name int32ArrayEntriesPart01TestMindmapTest066
     * @tc.desc Verify $_set entries()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest066() {
    Int32Array a = new Int32Array(3);
    a.set(0, 11);
    a.set(1, 22);
    a.set(2, 33);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(11, r.value[1]);
    }

    /**
     * Verify $_set(0, 7) entries() 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_6700
     * @tc.name int32ArrayEntriesPart01TestMindmapTest067
     * @tc.desc Verify $_set(0, 7) entries() 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest067() {
    Int32Array a = new Int32Array(1);
    a.set(0, 1);
    a.set(0, 7);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(7, r.value[1]);
    }

    /**
     * Verify length=3 $_set(1, 50) entries() value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_6800
     * @tc.name int32ArrayEntriesPart01TestMindmapTest068
     * @tc.desc Verify length=3 $_set(1, 50) entries() value 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest068() {
    Int32Array a = new Int32Array(3);
    a.set(1, 50);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify new Int32Array(3).fill(8) entries() value 8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_7000
     * @tc.name int32ArrayEntriesPart01TestMindmapTest070
     * @tc.desc Verify new Int32Array(3).fill(8) entries() value 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest070() {
    Int32Array a = new Int32Array(3);
    a.fill(8);
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(8, r.value[1]);
    }

    /**
     * Verify [1, 2, 3].reverse() entries() value 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_7300
     * @tc.name int32ArrayEntriesPart01TestMindmapTest073
     * @tc.desc Verify [1, 2, 3].reverse() entries() value 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest073() {
    Int32Array a = new Int32Array(new int[] {1, 2, 3});
    a.reverse();
    EntryResult r = a.entries().next();
    assertFalse(r.done);
    assertEqual(0, r.value[0]);
    assertEqual(3, r.value[1]);
    }

    /**
     * Verify [1, 2, 3, 4].copyWithin(2, 0) entries() 3 index=2 value 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_7600
     * @tc.name int32ArrayEntriesPart01TestMindmapTest076
     * @tc.desc Verify [1, 2, 3, 4].copyWithin(2, 0) entries() 3 index=2 value 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int32ArrayEntriesPart01TestMindmapTest076() {
    Int32Array a = new Int32Array(new int[] {1, 2, 3, 4});
    a.copyWithin(2, 0);
    Int32Array.EntriesIterator iter = a.entries();
    iter.next();
    iter.next();
    EntryResult r = iter.next();
    assertFalse(r.done);
    assertEqual(2, r.value[0]);
    assertEqual(1, r.value[1]);
    }

    /**
     * Verify -2 entries() value -2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT32ARRAY_ENTRIES_PART01_TEST_MINDMAP_9500
     * @tc.name int32ArrayEntriesPart01TestMindmapTest095
     * @tc.desc Verify -2 entries() value -2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
