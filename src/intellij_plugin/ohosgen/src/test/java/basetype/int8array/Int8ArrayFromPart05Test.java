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
import org.junit.jupiter.api.Test;

/**
 * Int8ArrayFromPart05Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFromPart05Test extends BasTest {
    /**
     * Verify Int8Array.from() with empty array returns empty Int8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART05_TEST_0100
     * @tc.name int8ArrayFromPart05Test001
     * @tc.desc Verify Int8Array.from() with empty array returns empty Int8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void int8ArrayFromPart05Test001() {
    Int8Array r = Int8Array.from(new ArrayList<>());
    assertEqual(0, r.length());
    }

    /**
     * Verify Int8Array.from(new AL001(8, [0, 128, -129, Number.NaN, 1.9, 255, -128, 127]))
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_INT8ARRAY_FROM_PART05_TEST_6200
     * @tc.name int8ArrayFromPart05Test062
     * @tc.desc Verify Int8Array.from(new AL001(8, [0, 128, -129, Number.NaN, 1.9, 255, -128, 127]))
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

}
