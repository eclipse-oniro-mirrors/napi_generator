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

package gen;

import grammar.*;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static utils.FileUtils.readText;

/**
 * <h3>类名：该类用于xxx</h3>
 * description
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
class GenCppHFileTest {
    private String genClassContentTest2 = "\nclass TestClass {\n" +
            "\tstd::string name;\n" +
            "\tint age;\n" +
            "\tlong p1;\n" +
            "\tshort p2;\n" +
            "\tlong long p3;\n" +
            "\tfloat p4;\n" +
            "\tdouble p5;\n" +
            "\tuint8 p6;\n" +
            "\tuint16 p7;\n" +
            "\tuint32 p8;\n" +
            "\tuint64 p9;\n" +
            "\tint8 p10;\n" +
            "\tint16 p11;\n" +
            "\tint32 p12;\n" +
            "\tint64 p13;\n" +
            "\tsize_t p14;\n" +
            "\tstd::string p15;\n" +
            "\tstd::string p16;\n" +
            "\tstd::array<int> p17;\n" +
            "\tstd::stack<int> p18;\n" +
            "\tstd::vector<int> p19;\n" +
            "\tstd::queue<int> p20;\n" +
            "\tint delete(int);\n" +
            "};\n";

    @Test
    void getInterfaceContent() {
    }

    @Test
    void getEnumContent1() {
        EnumObj eo = new EnumObj();
        eo.setName("TestEnum");
        List<String> ml = new CopyOnWriteArrayList<>();
        ml.add("ONE");
        ml.add("TWO");
        eo.setMemberList(ml);
        List<EnumObj> eol = new CopyOnWriteArrayList<>();
        eol.add(eo);
        ParseObj po = new ParseObj();
        po.setEnumList(eol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenCppHFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nenum TestEnum {\n" +
                    "\tONE,\n" +
                    "\tTWO,\n" +
                    "};\n";
            assertEquals(expect, enumContent);
        }
    }

    @Test
    void getEnumContent2() {
        EnumObj eo = new EnumObj();
        eo.setName("Colors");
        List<String> ml = new CopyOnWriteArrayList<>();
        ml.add("Red");
        ml.add("Green");
        ml.add("Blue");
        eo.setMemberList(ml);
        List<String> vl = new CopyOnWriteArrayList<>();
        vl.add("RED");
        vl.add("GREEN");
        vl.add("BLUE");
        eo.setValueList(vl);
        List<EnumObj> eol = new CopyOnWriteArrayList<>();
        eol.add(eo);
        ParseObj po = new ParseObj();
        po.setEnumList(eol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenCppHFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nenum Colors {\n" +
                    "\tRed = RED,\n" +
                    "\tGreen = GREEN,\n" +
                    "\tBlue = BLUE,\n" +
                    "};\n";
            assertEquals(expect, enumContent);
        }
    }

    @Test
    void getEnumContent3() {
        EnumObj eo = new EnumObj();
        eo.setName("Colors");
        List<String> ml = new CopyOnWriteArrayList<>();
        ml.add("Red");
        ml.add("Green");
        ml.add("Blue");
        eo.setMemberList(ml);
        List<String> vl = new CopyOnWriteArrayList<>();
        vl.add("\"RED\"");
        vl.add("\"GREEN\"");
        vl.add("\"BLUE\"");
        eo.setValueList(vl);
        List<EnumObj> eol = new CopyOnWriteArrayList<>();
        eol.add(eo);
        ParseObj po = new ParseObj();
        po.setEnumList(eol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenCppHFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nenum Colors {\n" +
                    "\tRed = RED,\n" +
                    "\tGreen = GREEN,\n" +
                    "\tBlue = BLUE,\n" +
                    "};\n" +
                    "\n" +
                    "char* colors_STR[] = {\n" +
                    "\t[Red] = \"RED\",\n" +
                    "\t[Green] = \"GREEN\",\n" +
                    "\t[Blue] = \"BLUE\"\n" +
                    "};\n";
            assertEquals(expect, enumContent);
        }
    }

    @Test
    void getClassContent1() {
        ClassObj co = new ClassObj();
        co.setName("TestClass");

        co.addParam("name", "string");
        co.addParam("age", "number");

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        ParamObj poItem = new ParamObj();
        poItem.setName("a");
        poItem.setType("number");
        poList.add(poItem);
        ParamObj poItem2 = new ParamObj();
        poItem2.setName("b");
        poItem2.setType("number");
        poList.add(poItem2);

        co.addFunc("add", "number", poList);

        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCppHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nclass TestClass {\n" +
                    "\tstd::string name;\n" +
                    "\tint age;\n" +
                    "\tint add(int a, int b);\n" +
                    "};\n";
            assertEquals(expect, classContent);
        }
    }

    @Test
    void getClassContent2() {
        ClassObj co = new ClassObj();
        co.setName("TestClass");
        List<String> hList = new CopyOnWriteArrayList<>();
        hList.add("IPerson");
        co.setHeritageNameList(hList);

        ParamObj pa = new ParamObj();
        pa.setName("name");
        pa.setType("string");
        pa.setQualifier("public");
        co.addParam(pa);
        ParamObj pa1 = new ParamObj();
        pa1.setName("age");
        pa1.setType("number");
        pa1.setQualifier("private");
        co.addParam(pa1);
        ParamObj pa2 = new ParamObj();
        pa2.setName("no");
        pa2.setType("string");
        pa2.setQualifier("protected");
        co.addParam(pa2);
        ParamObj pa3 = new ParamObj();
        pa3.setName("addr");
        pa3.setType("string");
        pa3.setQualifier("readonly");
        co.addParam(pa3);

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        co.addFunc("constructor", "", poList);

        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCppHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nclass TestClass : public IPerson {\n" +
                    "\tpublic std::string name;\n" +
                    "\tprivate int age;\n" +
                    "\tprotected std::string no;\n" +
                    "\treadonly std::string addr;\n" +
                    "\tconstructor();\n" +
                    "};\n";
            assertEquals(expect, classContent);
        }
    }

    @Test
    void getClassContent3() {
        ClassObj co = new ClassObj();
        co.setName("Employee");
        List<String> hList = new CopyOnWriteArrayList<>();
        hList.add("Person");
        co.setHeritageNameList(hList);

        ParamObj pa = new ParamObj();
        pa.setName("empCode");
        pa.setType("number");
        co.addParam(pa);

        ParamObj pa1 = new ParamObj();
        pa1.setName("currentUser");
        pa1.setType("any");
        co.addParam(pa1);

        ParamObj pa2 = new ParamObj();
        pa2.setName("pi");
        pa2.setType("number");
        pa2.setQualifier("static");
        pa2.setStrValue("3.14");
        co.addParam(pa2);

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        ParamObj p1 = new ParamObj();
        p1.setName("empcode");
        p1.setType("number");
        ParamObj p2 = new ParamObj();
        p2.setName("name");
        p2.setType("string");
        co.addFunc("constructor", "", poList);
        List<ParamObj> poList1 = new CopyOnWriteArrayList<>();
        co.addFunc("displayName", "void", poList1);

        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCppHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nclass Employee : public Person {\n" +
                    "\tint empCode;\n" +
                    "\tauto currentUser;\n" +
                    "\tstatic int pi = 3.14;\n" +
                    "\tconstructor();\n" +
                    "\tvoid displayName();\n" +
                    "};\n";
            assertEquals(expect, classContent);
        }
    }

    @Test
    void getClassContent4() {
        ClassObj co = new ClassObj();
        co.setName("myClass");

        List<ParamObj> poList1 = new CopyOnWriteArrayList<>();
        FuncObj fo = new FuncObj();
        fo.setName("foo");
        fo.setRetValue("Promise<any>");
        fo.setAccessor("public");
        fo.setType("async");
        fo.setParamList(poList1);
        co.addFunc(fo);
        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCppHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nclass myClass {\n" +
                    "\tauto foo();\n" +
                    "};\n";
            assertEquals(expect, classContent);
        }
    }

    @Test
    void getClassContent5() {
        ClassObj co = new ClassObj();
        co.setName("KeyValuePair");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        ParamObj pa = new ParamObj();
        pa.setName("key");
        pa.setType("T");
        pa.setQualifier("private");
        pol.add(pa);
        ParamObj po1 = new ParamObj();
        po1.setName("val");
        po1.setType("U");
        po1.setQualifier("private");
        pol.add(po1);
        co.setParamList(pol);

        List<String> tmpList = new CopyOnWriteArrayList<>();
        tmpList.add("T");
        tmpList.add("U");
        co.setTempList(tmpList);

        List<ParamObj> poList1 = new CopyOnWriteArrayList<>();
        FuncObj fo = new FuncObj();
        fo.setName("setKeyValue");
        fo.setRetValue("void");
        fo.addParam("key", "T");
        fo.addParam("val", "U");
        co.addFunc(fo);
        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCppHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\ntemplate <typename T, typename U> class KeyValuePair {\n" +
                    "\tprivate T key;\n" +
                    "\tprivate U val;\n" +
                    "\tvoid setKeyValue(T key, U val);\n" +
                    "};\n";
            assertEquals(expect, classContent);
        }
    }

    @Test
    void getClassContent6() {
        ClassObj co = new ClassObj();
        co.setName("kvProcessor");
        List<String> tmpList = new CopyOnWriteArrayList<>();
        tmpList.add("T");
        tmpList.add("U");
        co.setTempList(tmpList);
        List<String> htList = new CopyOnWriteArrayList<>();
        htList.add("implements");
        co.setHeritageTypeList(htList);
        List<String> hnList = new CopyOnWriteArrayList<>();
        hnList.add("IKeyValueProcessor");
        co.setHeritageNameList(hnList);
        List<String> htempList = new CopyOnWriteArrayList<>();
        htempList.add("T");
        htempList.add("U");
        co.setHeritageTemplateList(htempList);

        List<ParamObj> poList1 = new CopyOnWriteArrayList<>();
        FuncObj fo = new FuncObj();
        fo.setName("process");
        fo.setRetValue("void");
        fo.addParam("key", "T");
        fo.addParam("val", "U");
        co.addFunc(fo);
        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCppHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\ntemplate <typename T, typename U> class kvProcessor : " +
                    "public IKeyValueProcessor<T, U> {\n" +
                    "\tvoid process(T key, U val);\n" +
                    "};\n";
            assertEquals(expect, classContent);
        }
    }

    @Test
    void getClassContent7() {
        ClassObj co = new ClassObj();
        co.setName("Shape");

        FuncObj fo = new FuncObj();
        fo.setName("process");
        fo.setRetValue("void");
        fo.addParam("key", "");
        fo.addParam("val", "");
        co.addFunc(fo);
        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCppHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nclass Shape {\n" +
                    "\tvoid process(auto key, auto val);\n" +
                    "};\n";
            assertEquals(expect, classContent);
        }
    }

    @Test
    void getFuncContent1() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "number");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, int age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent2() {
        FuncObj fo = new FuncObj();
        fo.setName("ToCapital");
        fo.setRetValue("string");
        fo.addParam("str", "string");
        ParamObj pa = new ParamObj();
        pa.setName("length");
        pa.setType("number");
        pa.setStrValue("0");
        fo.addParam(pa);
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nstd::string ToCapital(std::string str, int length = 0);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent3() {
        FuncObj fo = new FuncObj();
        fo.setName("Nemw");
        fo.setRetValue("string");
        ParamObj pa1 = new ParamObj();
        pa1.setName("str");
        pa1.setType("string");
        pa1.setStrValue("\"joke\"");
        fo.addParam(pa1);
        ParamObj pa2 = new ParamObj();
        pa2.setName("length");
        pa2.setType("number");
        pa2.setStrValue("0");
        fo.addParam(pa2);
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nstd::string Nemw(std::string str = \"joke\", int length = 0);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent4() {
        FuncObj fo = new FuncObj();
        fo.setName("Nemw");
        fo.setRetValue("string");
        ParamObj pa1 = new ParamObj();
        pa1.setName("str");
        fo.addParam(pa1);
        ParamObj pa2 = new ParamObj();
        pa2.setName("length");
        fo.addParam(pa2);
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nstd::string Nemw(auto str, auto length);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent5() {
        FuncObj fo = new FuncObj();
        fo.setName("Nemw");
        fo.setRetValue("");
        ParamObj pa1 = new ParamObj();
        pa1.setName("str");
        fo.addParam(pa1);
        ParamObj pa2 = new ParamObj();
        pa2.setName("length");
        fo.addParam(pa2);
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nNemw(auto str, auto length);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent6() {
        FuncObj fo = new FuncObj();
        fo.setName("getArray");
        fo.setRetValue("T[]");

        List<String> tempList = new CopyOnWriteArrayList<>();
        tempList.add("T");
        fo.setTempList(tempList);
        ParamObj pa1 = new ParamObj();
        pa1.setName("items");
        pa1.setType("T[]");
        fo.addParam(pa1);

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\ntemplate<typename T> T* getArray(T* items);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent7() {
        FuncObj fo = new FuncObj();
        fo.setName("displayType");
        fo.setRetValue("void");

        List<String> tempList = new CopyOnWriteArrayList<>();
        tempList.add("T");
        tempList.add("U");
        fo.setTempList(tempList);
        ParamObj pa1 = new ParamObj();
        pa1.setName("id");
        pa1.setType("T");
        fo.addParam(pa1);
        ParamObj pa2 = new ParamObj();
        pa2.setName("name");
        pa2.setType("U");
        fo.addParam(pa2);

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\ntemplate<typename T, typename U> void displayType(T id, U name);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getStructContent1() {
        StructObj so = new StructObj();
        so.setName("TestStruct");

        so.addMember("name", "string");
        so.addMember("age", "boolean");

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        ParamObj poItem = new ParamObj();
        poItem.setName("a");
        poItem.setType("boolean");
        poList.add(poItem);
        ParamObj poItem2 = new ParamObj();
        poItem2.setName("b");
        poItem2.setType("boolean");
        poList.add(poItem2);

        so.addFunc("add", "number", poList);

        List<StructObj> sol = new CopyOnWriteArrayList<>();
        sol.add(so);
        ParseObj po = new ParseObj();
        po.setStructList(sol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenCppHFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = "\nstruct TestStruct {\n" +
                    "\tstd::string name;\n" +
                    "\tbool age;\n" +
                    "\tint add(bool a, bool b);\n" +
                    "};\n";
            assertEquals(expect, structContent);
        }
    }

    @Test
    void getStructContent2() {
        StructObj so = new StructObj();
        so.setName("TestStruct");
        so.addMember("name", "T");
        so.addMember("age", "U");
        so.addTemplate("T");
        so.addTemplate("U");

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        ParamObj poItem = new ParamObj();
        poItem.setName("a");
        poItem.setType("T");
        poList.add(poItem);
        ParamObj poItem2 = new ParamObj();
        poItem2.setName("b");
        poItem2.setType("U");
        poList.add(poItem2);

        so.addFunc("add", "number", poList);

        List<StructObj> sol = new CopyOnWriteArrayList<>();
        sol.add(so);
        ParseObj po = new ParseObj();
        po.setStructList(sol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenCppHFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = "\ntemplate <typename T, typename U> struct TestStruct {\n" +
                    "\tT name;\n" +
                    "\tU age;\n" +
                    "\tint add(T a, U b);\n" +
                    "};\n";
            assertEquals(expect, structContent);
        }
    }

    @Test
    void getStructContent3() {
        StructObj so = new StructObj();
        so.setName("TestStruct");

        so.addMember("name", "");
        so.addMember("age", "");

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        ParamObj poItem = new ParamObj();
        poItem.setName("a");
        poItem.setType("");
        poList.add(poItem);
        ParamObj poItem2 = new ParamObj();
        poItem2.setName("b");
        poItem2.setType("");
        poList.add(poItem2);

        so.addFunc("add", "", poList);

        List<StructObj> sol = new CopyOnWriteArrayList<>();
        sol.add(so);
        ParseObj po = new ParseObj();
        po.setStructList(sol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenCppHFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = "\nstruct TestStruct {\n" +
                    "\tauto name;\n" +
                    "\tauto age;\n" +
                    "\tadd(auto a, auto b);\n" +
                    "};\n";
            assertEquals(expect, structContent);
        }
    }

    @Test
    void getStructContent4() {
        StructObj so = new StructObj();
        so.setName("TestStruct");

        List<StructObj> sol = new CopyOnWriteArrayList<>();
        sol.add(so);
        ParseObj po = new ParseObj();
        po.setStructList(sol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenCppHFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = "\nstruct TestStruct {\n" +
                    "};\n";
            assertEquals(expect, structContent);
        }
    }

    @Test
    void getTypeContent() {
    }

    @Test
    void getUnionContent1() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "string");
        uo.addMember("age", "number");

        List<UnionObj> uol = new CopyOnWriteArrayList<>();
        uol.add(uo);
        ParseObj po = new ParseObj();
        po.setUnionList(uol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genUnionList(po.getUnionList());

        if (gb instanceof GenCppHFile gdf) {
            String unionContent = gdf.getUnionContent();
            System.out.println("genUnion: " + unionContent);
            String expect = "\nunion TestUnion{\n" +
                    "\tstd::string name;\n" +
                    "\tint age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void getUnionContent2() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");
        uo.addMember("name", "T");
        uo.addMember("age", "U");

        uo.addTemplate("T");
        uo.addTemplate("U");

        List<UnionObj> uol = new CopyOnWriteArrayList<>();
        uol.add(uo);
        ParseObj po = new ParseObj();
        po.setUnionList(uol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genUnionList(po.getUnionList());

        if (gb instanceof GenCppHFile gdf) {
            String unionContent = gdf.getUnionContent();
            System.out.println("genUnion: " + unionContent);
            String expect = "\ntemplate <typename T, typename U> union TestUnion{\n" +
                    "\tT name;\n" +
                    "\tU age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void getVarContent1() {
        ParamObj paObj = new ParamObj();
        paObj.setName("employeeName");
        paObj.setStrValue("\"John\"");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCppHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const auto employeeName = \"John\";\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent2() {
        ParamObj paObj = new ParamObj();
        paObj.setName("employeeName");
        paObj.setType("string");
        paObj.setStrValue("\"John\"");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCppHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const std::string employeeName = \"John\";\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent3() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("number");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCppHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const int num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent4() {
        ParamObj paObj = new ParamObj();
        paObj.setName("playerCodes");

        ParamObj paItem1 = new ParamObj();
        paItem1.setName("player1");
        paItem1.setStrValue("9");
        paObj.addParam(paItem1);
        ParamObj paItem2 = new ParamObj();
        paItem2.setName("player2");
        paItem2.setStrValue("10");
        paObj.addParam(paItem2);

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCppHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const std::map<std::string, number} playerCodes = {\n" +
                    "\t{\"player1\", 9},\n" +
                    "\t{\"player2\", 10}\n" +
                    "};\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent5() {
        ParamObj paObj = new ParamObj();
        paObj.setName("playerCodes.player2");
        paObj.setStrValue("11");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCppHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const auto playerCodes.player2 = 11;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent6() {
        ParamObj paObj = new ParamObj();
        paObj.setName("ROUTES");
        paObj.setType("any[]");

        ParamObj paListItem1 = new ParamObj();
        ParamObj paItem1 = new ParamObj();
        paItem1.setName("path");
        paItem1.setStrValue("'/dashboard'");
        paListItem1.addParam(paItem1);

        ParamObj paItem3 = new ParamObj();
        paItem3.setName("allowAnonymous");
        paItem3.setStrValue("false");
        paListItem1.addParam(paItem3);
        paObj.addParam(paListItem1);

        ParamObj paListItem2 = new ParamObj();
        ParamObj paItem21 = new ParamObj();
        paItem21.setName("path");
        paItem21.setStrValue("'/deals'");
        paListItem2.addParam(paItem21);

        ParamObj paItem23 = new ParamObj();
        paItem23.setName("allowAnonymous");
        paItem23.setStrValue("true");
        paListItem2.addParam(paItem23);
        paObj.addParam(paListItem2);

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCppHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nstruct ROUTESST {\n" +
                    "\tstd::string path;\n" +
                    "\tboolean allowAnonymous;\n" +
                    "};\n" +
                    "\n" +
                    "const std::vector<ROUTESST> ROUTES = {\n" +
                    "\t{'/dashboard', false},\n" +
                    "\t{'/deals', true},\n" +
                    "};\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getConstContent() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genVarList(pol);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent1() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent2() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("long");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const long TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent3() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("short");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const short TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent4() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("long long");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const long long TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent5() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("float");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const float TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent6() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("double");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const double TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent7() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("uint8");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const uint8 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent8() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("uint16");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const uint16 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent9() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("uint32");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const uint32 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent10() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("uint64");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const uint64 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent11() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int8");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int8 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent12() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int16");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int16 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent13() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int32");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int32 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent14() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int64");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int64 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent15() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("size_t");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const size_t TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }
    @Test
    void genContent16() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("string");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const std::string TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent17() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::string");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const std::string TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent18() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::array<int>");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const std::array<int> TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent19() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::stack<int>");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const std::stack<int> TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent20() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::vector<int>");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const std::vector<int> TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genContent21() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::queue<int>");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const std::queue<int> TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genFile() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);

        ParseObj po = new ParseObj();
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genContent(po);
        gb.genFile("./", "testGenFile.d.ts");

        File file = new File("./ag_testGenFile_d_ts.h");
        assertEquals(true, file.exists());
        assertEquals(false, file.isDirectory());

        List<String> fcList = readText("./ag_testGenFile_d_ts.h");

        assertEquals("// Generated from ./\\testGenFile.d.ts by KaiHong ohgen 1.0.0-PLUGIN",
                fcList.get(0));
        assertEquals("extends const int TestParam = 100;",
                fcList.get(1));

        if (gb instanceof GenCppHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genInterfaceList() {
    }

    @Test
    void genEnumList() {
        EnumObj eo = new EnumObj();
        eo.setName("TestEnum");
        List<String> ml = new CopyOnWriteArrayList<>();
        ml.add("ONE");
        ml.add("TWO");
        eo.setMemberList(ml);
        List<String> vl = new CopyOnWriteArrayList<>();
        vl.add("1");
        vl.add("2");
        eo.setValueList(vl);
        List<EnumObj> eol = new CopyOnWriteArrayList<>();
        eol.add(eo);
        ParseObj po = new ParseObj();
        po.setEnumList(eol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenCppHFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nenum TestEnum {\n" +
                    "\tONE = 1,\n" +
                    "\tTWO = 2,\n" +
                    "};\n";
            assertEquals(expect, enumContent);
        }
    }

    @Test
    void genClassList1() {
        ClassObj co = new ClassObj();
        co.setName("TestClass");

        co.addParam("name", "string");
        co.addParam("age", "number");

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        ParamObj poItem = new ParamObj();
        poItem.setName("a");
        poItem.setType("number");
        poList.add(poItem);
        ParamObj poItem2 = new ParamObj();
        poItem2.setName("b");
        poItem2.setType("number");
        poList.add(poItem2);

        co.addFunc("add", "number", poList);

        poList = new CopyOnWriteArrayList<>();
        poItem = new ParamObj();
        poItem.setType("number");
        poList.add(poItem);

        co.addFunc("delete", "number", poList);

        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCppHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nclass TestClass {\n" +
                    "\tstd::string name;\n" +
                    "\tint age;\n" +
                    "\tint add(int a, int b);\n" +
                    "\tint delete(int);\n" +
                    "};\n";
            assertEquals(expect, classContent);
        }
    }

    @Test
    void genClassList2() {
        ClassObj co = new ClassObj();
        co.setName("TestClass");

        co.addParam("name", "string");
        co.addParam("age", "number");
        co.addParam("p1", "long");
        co.addParam("p2", "short");
        co.addParam("p3", "long long");
        co.addParam("p4", "float");
        co.addParam("p5", "double");
        co.addParam("p6", "uint8");
        co.addParam("p7", "uint16");
        co.addParam("p8", "uint32");
        co.addParam("p9", "uint64");
        co.addParam("p10", "int8");
        co.addParam("p11", "int16");
        co.addParam("p12", "int32");
        co.addParam("p13", "int64");
        co.addParam("p14", "size_t");
        co.addParam("p15", "string");
        co.addParam("p16", "std::string");
        co.addParam("p17", "std::array<int>");
        co.addParam("p18", "std::stack<int>");
        co.addParam("p19", "std::vector<int>");
        co.addParam("p20", "std::queue<int>");

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        ParamObj poItem = new ParamObj();
        poItem.setType("number");
        poList.add(poItem);

        co.addFunc("delete", "number", poList);

        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCppHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = genClassContentTest2;
            assertEquals(expect, classContent);
        }
    }

    @Test
    void genFuncList1() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "number");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, int age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList2() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "int");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, int age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList3() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "long");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, long age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList4() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "short");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, short age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList5() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "long long");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, long long age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList6() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "float");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, float age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList7() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "double");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, double age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList8() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "uint8");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, uint8 age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList9() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "uint16");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, uint16 age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList10() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "uint32");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, uint32 age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList11() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "uint64");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, uint64 age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList12() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "int8");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, int8 age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList13() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "int16");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CPPH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCppHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, int16 age);";
            assertEquals(expect, funcContent);
        }
    }
}