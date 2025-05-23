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

package antlr.typescript;

import java.util.ArrayList;
import java.util.List;

/**
 * <h3>类名：该类用于xxx</h3>
 * description typescript parse tree node
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class TypeScriptTreeNode {
    private String type;
    private String text;
    private List<TypeScriptTreeNode> children;

    public TypeScriptTreeNode() {}

    public TypeScriptTreeNode(String type, String text) {
        this.type = type;
        this.text = text;
        this.children = new ArrayList<>();
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setChildren(List<TypeScriptTreeNode> children) {
        this.children = children;
    }

    public List<TypeScriptTreeNode> getChildren() {
        return children;
    }
}
