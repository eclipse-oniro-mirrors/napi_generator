/*
 * Copyright (c) 2025 Shenzhen Kaihong Digital.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package parse;

import java.util.Locale;

/**
 * <h3>类名：该类用于xxx</h3>
 * description ${description}
 *
 * @author ${USER}
 * date 2025-02-28
 * @since 2025-02-28
 * @version 1.0
 */
public class ParseFactory {
    /**
     * 获取解析类
     *
     * @param type 解析类型
     * @return 解析类 (类型不存在时候抛出异常）
     * @throws IllegalArgumentException 非法参数异常
     */
    public static ParseBase getParser(String type) {
        String[] sList = type.split("2");
        if (sList.length <= 0) {
            System.out.println("type split error: " + type);
            return null;
        }
        String paseType = sList[0];
        String genType = sList[1];
        return switch (paseType.toUpperCase(Locale.ROOT)) {
            case "H" -> new ParseCpp(genType);
            case "TS" -> new ParseTs(genType);
            default -> {
                System.out.println("Unsupported parser type: " + type);
                throw new IllegalArgumentException("Unsupported parser type: " + type);
            }
        };
    }
}
