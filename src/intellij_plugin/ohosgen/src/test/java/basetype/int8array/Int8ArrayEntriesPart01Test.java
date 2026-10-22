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

import java.util.LinkedHashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayEntriesPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayEntriesPart01Test extends BasTest {
    private static final int INT8_MAX = 127;
    private static final int INT8_MIN = -128;

    /**
     * Verify entries() with 0 arg on 3-element array, first next().done is false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART01_0200
     * @tc.name int8ArrayEntriesPart01Test002
     * @tc.desc Verify entries() with 0 arg on 3-element array, first next().done is false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart01Test002() {
    Int8Array arr = Int8Array.of(7, 8, 9);
    Int8Array.EntriesIterator iter = arr.entries();
    assertFalse(iter.next().done);
    }

    /**
     * Verify new Int8Array() empty array, entries() first next().done is true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART01_0300
     * @tc.name int8ArrayEntriesPart01Test003
     * @tc.desc Verify new Int8Array() empty array, entries() first next().done is true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart01Test003() {
    Int8Array arr = new Int8Array();
    Int8Array.EntriesIterator iter = arr.entries();
    assertTrue(iter.next().done);
    }

    /**
     * Verify Int8Array.of() zero-arg variadic empty array, entries() first next().done is true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART01_0400
     * @tc.name int8ArrayEntriesPart01Test004
     * @tc.desc Verify Int8Array.of() zero-arg variadic empty array, entries() first next().done is true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart01Test004() {
    Int8Array arr = Int8Array.of();
    Int8Array.EntriesIterator iter = arr.entries();
    assertTrue(iter.next().done);
    }

    /**
     * Verify empty ArrayBuffer zero-length view entries() first next().done is true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART01_0500
     * @tc.name int8ArrayEntriesPart01Test005
     * @tc.desc Verify empty ArrayBuffer zero-length view entries() first next().done is true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart01Test005() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int8Array arr = new Int8Array(buf, 0, 0);
    Int8Array.EntriesIterator iter = arr.entries();
    assertTrue(iter.next().done);
    }

    /**
     * Verify from empty Set<int> creates empty array, entries() first next().done is true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART01_0600
     * @tc.name int8ArrayEntriesPart01Test006
     * @tc.desc Verify from empty Set<int> creates empty array, entries() first next().done is true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart01Test006() {
    Set<Integer> src = new LinkedHashSet<>();
    Int8Array arr = Int8Array.from(src);
    Int8Array.EntriesIterator iter = arr.entries();
    assertTrue(iter.next().done);
    }

    /**
     * Verify subarray(2, 2) zero-length view, entries() first next().done is true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART01_0700
     * @tc.name int8ArrayEntriesPart01Test007
     * @tc.desc Verify subarray(2, 2) zero-length view, entries() first next().done is true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart01Test007() {
    Int8Array base = Int8Array.of(10, 20, 30, 40);
    Int8Array view = base.subarray(2, 2);
    Int8Array.EntriesIterator iter = view.entries();
    assertTrue(iter.next().done);
    }

    /**
     * Verify entries() on Int8Array.of(42) yields exactly one entry
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART01_0800
     * @tc.name int8ArrayEntriesPart01Test008
     * @tc.desc Verify entries() on Int8Array.of(42) yields exactly one entry
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart01Test008() {
    Int8Array arr = Int8Array.of(42);
    Int8Array.EntriesIterator iter = arr.entries();
    int count = 0;
    EntryResult r = iter.next();
    while (!r.done) {
    count = count + 1;
    r = iter.next();
    }
    assertEqual(1, count);
    }

    /**
     * Verify entries() subarray(-1) last
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART01_3800
     * @tc.name int8ArrayEntriesPart01Test038
     * @tc.desc Verify entries() subarray(-1) last
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayEntriesPart01Test038() {
    Int8Array base = Int8Array.of(10, 20, 30, 40, 50);
    Int8Array view = base.subarray(-1);
    Int8Array.EntriesIterator iter = view.entries();
    int count = 0;
    EntryResult r = iter.next();
    while (!r.done) {
    count = count + 1;
    r = iter.next();
    }
    assertEqual(1, count);
    }

    /**
     * Verify entries() yields 0 for both POSITIVE_INFINITY and NEGATIVE_INFINITY elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_ENTRIES_PART01_4300
     * @tc.name int8ArrayEntriesPart01Test043
     * @tc.desc Verify entries() yields 0 for both POSITIVE_INFINITY and NEGATIVE_INFINITY elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
