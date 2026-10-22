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

package basetype.int8array;

import basetype.common.Int8Array;
import basetype.common.BasTest;

import org.junit.jupiter.api.Test;

/**
 * Int8ArrayFromPart01Test —— Int8Array 方法族 XTS 测试。
 *
 * @since 2026-10-22
 */
public class Int8ArrayFromPart01Test extends BasTest {

    private static int INT8_MAX = 127;

    private static int INT8_MIN = -128;

    static class CodeItem {
        CodeItem() {
        }
    }

    static class Score {
        Score() {
        }
    }

    @Test
    void int8ArrayFromPart01Test001() {
    int[] source = new int[] {7, 8};
    Int8Array result = Int8Array.from(source);
    assertEqual(2, result.length());
    String r1 = result.join(",");
    String e1 = "7,8";
    assertEqual(e1, r1);
    }

    @Test
    void int8ArrayFromPart01Test002() {
    int[] source = new int[] {};
    Int8Array result = Int8Array.from(source);
    assertEqual(0, result.length());
    }

    @Test
    void int8ArrayFromPart01Test003() {
    int[] source = new int[] {42};
    Int8Array result = Int8Array.from(source);
    assertEqual(1, result.length());
    assertEqualInt(42, result.get(0));
    }

    @Test
    void int8ArrayFromPart01Test004() {
    int[] source = new int[] {64, -64, 32};
    Int8Array result = Int8Array.from(source);
    assertEqualInt(64, result.get(0));
    assertEqualInt(-64, result.get(1));
    assertEqualInt(32, result.get(2));
    }

    @Test
    void int8ArrayFromPart01Test005() {
    int[] source = new int[] {99, 99, 99};
    Int8Array result = Int8Array.from(source);
    assertEqualInt(99, result.get(0));
    int r1 = result.get(1);
    int e1 = 99;
    assertEqual(e1, r1);
    assertEqualInt(99, result.get(2));
    }

    @Test
    void int8ArrayFromPart01Test006() {
    int[] source = new int[] {INT8_MIN};
    Int8Array result = Int8Array.from(source);
    int r1 = result.get(0);
    int e1 = INT8_MIN;
    assertEqual(e1, r1);
    }

    @Test
    void int8ArrayFromPart01Test007() {
    int[] source = new int[] {INT8_MAX};
    Int8Array result = Int8Array.from(source);
    assertEqualInt(INT8_MAX, result.get(0));
    }

    @Test
    void int8ArrayFromPart01Test008() {
    int[] source = new int[] {0};
    Int8Array result = Int8Array.from(source);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void int8ArrayFromPart01Test009() {
    int[] source = new int[] {-1};
    Int8Array result = Int8Array.from(source);
    assertEqualInt(-1, result.get(0));
    }

    @Test
    void int8ArrayFromPart01Test010() {
    int[] source = new int[] {128};
    Int8Array result = Int8Array.from(source);
    int r1 = result.get(0);
    int e1 = INT8_MIN;
    assertEqual(e1, r1);
    }

    @Test
    void int8ArrayFromPart01Test011() {
    int[] source = new int[] {-129};
    Int8Array result = Int8Array.from(source);
    assertEqualInt(INT8_MAX, result.get(0));
    }

    @Test
    void int8ArrayFromPart01Test012() {
    int[] source = new int[] {255};
    Int8Array result = Int8Array.from(source);
    assertEqualInt(-1, result.get(0));
    }

    @Test
    void int8ArrayFromPart01Test013() {
    int[] source = new int[] {256};
    Int8Array result = Int8Array.from(source);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void int8ArrayFromPart01Test015() {
    int[] source = new int[] {383};
    Int8Array result = Int8Array.from(source);
    assertEqualInt(INT8_MAX, result.get(0));
    }

    @Test
    void int8ArrayFromPart01Test016() {
    int[] source = new int[] {-256};
    Int8Array result = Int8Array.from(source);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void int8ArrayFromPart01Test017() {
    int[] source = new int[] {-255};
    Int8Array result = Int8Array.from(source);
    assertEqualInt(1, result.get(0));
    }

    @Test
    void int8ArrayFromPart01Test018() {
    double[] source = new double[] {2147483647};
    Int8Array result = Int8Array.from(source);
    assertEqualInt(-1, result.get(0));
    }

    @Test
    void int8ArrayFromPart01Test019() {
    double[] source = new double[] {Integer.MIN_VALUE};
    Int8Array result = Int8Array.from(source);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void int8ArrayFromPart01Test020() {
    int[] source = new int[] {7};
    Int8Array result = Int8Array.from(source);
    assertEqual(1, result.BYTES_PER_ELEMENT);
    int r1 = result.byteOffset();
    int e1 = 0;
    assertEqual(e1, r1);
    }

    @Test
    void int8ArrayFromPart01Test021() {
    int[] source = new int[] {7, 8, 9};
    Int8Array result = Int8Array.from(source);
    int r1 = result.byteLength();
    int e1 = 3;
    assertEqual(e1, r1);
    int r2 = result.buffer().byteLength();
    int e2 = 3;
    assertEqual(e2, r2);
    }

    @Test
    void int8ArrayFromPart01Test022() {
    int[] source = new int[] {7, 8};
    Int8Array a = Int8Array.from(source);
    Int8Array b = Int8Array.from(source);
    a.set(0, -1);
    assertEqualInt(7, b.get(0));
    }

    @Test
    void int8ArrayFromPart01Test023() {
    int[] source = new int[] {7, 8};
    Int8Array result = Int8Array.from(source);
    result.set(0, -1);
    assertEqual(7, source[0]);
    }

    @Test
    void int8ArrayFromPart01Test024() {
    int[] source = new int[] {7};
    Int8Array result = Int8Array.from(source);
    result.set(0, INT8_MIN);
    int r1 = result.get(0);
    int e1 = INT8_MIN;
    assertEqual(e1, r1);
    }

    @Test
    void int8ArrayFromPart01Test025() {
    int[] source = new int[] {7, 8, 9};
    Int8Array result = Int8Array.from(source);
    Int8Array view = result.subarray(1);
    view.set(0, -1);
    assertEqualInt(-1, result.get(1));
    }

}
