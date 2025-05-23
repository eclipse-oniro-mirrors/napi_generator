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

package utils;

import java.util.EventObject;

/**
 * <h3>类名：该类用于xxx</h3>
 * description base of event
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class BaseEvent extends EventObject {
    private String eventMsg;

    /**
     * Constructs a prototypical Event.
     *
     * @param source
     *         the object on which the Event initially occurred
     * @throws IllegalArgumentException
     *         if source is null
     */
    public BaseEvent(Object source) {
        super(source);
    }

    /**
     * 设置消息
     *
     * @param msg 消息
     */
    public void setEventMsg(String msg) {
        eventMsg = msg;
    }

    /**
     * 获取消息
     *
     * @return 消息内容
     */
    public String getEventMsg() {
        return eventMsg;
    }
}
