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

package grammar;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * <h3>类名：该类用于xxx</h3>
 * description grammar structure
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class StructObj extends GBaseObject {
    private String name;
    private String alias;
    private List<ParamObj> memberList;
    private List<FuncObj> funcList;
    private List<String> templateList;

    /**
     * 构造函数
     */
    public StructObj() {
        this.memberList = new CopyOnWriteArrayList<>();
        this.funcList = new CopyOnWriteArrayList<>();
        this.templateList = new CopyOnWriteArrayList<>();
    }

    /**
     * 构造函数
     *
     * @param nv 名称
     * @param av 别名
     * @param ml 成员
     * @param fl 方法
     */
    public StructObj(String nv, String av, List<ParamObj> ml, List<FuncObj> fl) {
        this();
        this.name = nv;
        this.alias = av;
        this.memberList = ml;
        this.funcList = fl;
    }

    /**
     * 设置名称
     *
     * @param name 名称
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取名称
     *
     * @return 名称
     */
    public String getName() {
        return name;
    }

    /**
     * 设置别名
     *
     * @param alias 别名
     */
    public void setAlias(String alias) {
        this.alias = alias;
    }

    /**
     * 获取别名
     *
     * @return 别名
     */
    public String getAlias() {
        return alias;
    }

    /**
     * 获取方法
     *
     * @return 方法
     */
    public List<FuncObj> getFuncList() {
        return funcList;
    }

    /**
     * 设置方法
     *
     * @param funcList 方法
     */
    public void setFuncList(List<FuncObj> funcList) {
        this.funcList = funcList;
    }

    /**
     * 获取成员
     *
     * @return 成员
     */
    public List<ParamObj> getMemberList() {
        return memberList;
    }

    /**
     * 设置成员
     *
     * @param memberList 成员
     */
    public void setMemberList(List<ParamObj> memberList) {
        this.memberList = memberList;
    }

    /**
     * 获取模板类列表
     *
     * @return 模板类列表
     */
    public List<String> getTemplateList() {
        return templateList;
    }

    /**
     * 设置模板类列表
     *
     * @param templateList 模板类列表
     */
    public void setTemplateList(List<String> templateList) {
        this.templateList = templateList;
    }

    /**
     * 增加属性
     *
     * @param po 属性
     */
    public void addMember(ParamObj po) {
        this.memberList.add(po);
    }

    /**
     * 增加属性
     *
     * @param name 属性名
     * @param type 属性类型
     */
    public void addMember(String name, String type) {
        ParamObj po = new ParamObj();
        po.setName(name);
        po.setType(type);
        this.memberList.add(po);
    }

    /**
     * 增加方法
     *
     * @param fo 方法
     */
    public void addFunc(FuncObj fo) {
        this.funcList.add(fo);
    }

    /**
     * 增加方法
     *
     * @param name 方法名
     * @param retValue 返回值
     * @param pol 方法参数
     */
    public void addFunc(String name, String retValue, List<ParamObj> pol) {
        FuncObj fo = new FuncObj();
        fo.setName(name);
        fo.setRetValue(retValue);
        fo.setParamList(pol);
        this.funcList.add(fo);
    }

    /**
     * 增加模板
     *
     * @param name 增加模板名字
     */
    public void addTemplate(String name) {
        this.templateList.add(name);
    }
}
