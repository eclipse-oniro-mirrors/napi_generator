# 测试用例与交付需求逐条映射

> 口径说明：
> - 已纳入 `performance` 目录下全部性能测试文件：dts2cpp（`conversion_ts*`、`conversion_dts2cpp_*`）、C Parse（`conversion_c*`）、H2DTS Gen（`conversion_h2dts_gen*` / `conversion_h2dts_container*` / `conversion_h2dts_namespace*` 等）、H2DTSCPP Gen（`conversion_h2dtscpp_gen*` / `conversion_h2dtscpp_transparams*` / `conversion_h2dtscpp_transparseobj*` / `conversion_h2dtscpp_class*` / `conversion_h2dtscpp_mixed*` 等）。
> - 每条 `test(...)` 均给出"主归属（2/3/4）+ 具体功能描述"：**2** = dts2cpp 链路、**3** = h2dts 链路、**4** = h2dtscpp 链路；C Parse 用例标注 `3/4`（h2dts 与 h2dtscpp 共用同一 parse 层）。
> - 功能描述取自各用例 `@tc.desc`。
> - 性能阈值：`PARSE_LOOP = 10`，`PARSE_TOTAL_MS = 6000`（单用例 10 次解析/生成总耗时 ≤ 6s）。
> - 本文档由 `tools/generate_mapping.js` 自动生成，修改用例后请重新运行该脚本。

## 套件总览

| 链路 | 主归属指标 | 文件前缀 | 测试 API | 用例数 |
| --- | --- | --- | --- | ---: |
| dts2cpp 解析 | **2** | `conversion_ts*` | `doParseTs` | 2624 |
| C++ 头文件解析 | **3/4** | `conversion_c*` | `parseFunction` / `parseClass` / `parseStruct` / `parseEnum` / `parseUnion` | 2216 |
| h2dts 代码生成 | **3** | `conversion_h2dts_*` | `getDtsFunction` / `getDtsClasses` / `genDtsFile` 等 | 5843 |
| h2dtscpp 转换生成 | **4** | `conversion_h2dtscpp_*` | `transParseObj` / `transParameters` / `genApi` | 3152 |

## 子类别文件

| 前缀 | 含义 | 用例数 |
| --- | --- | ---: |
| `conversion_tsunion` | union type alias → ParseObj.types | 554 |
| `conversion_tsenum` | enum → ParseObj.enums | 372 |
| `conversion_tsclass` | class → ParseObj.classes | 361 |
| `conversion_tsstruct` | interface → ParseObj.structs | 332 |
| `conversion_tsfunc` | function → ParseObj.funcs | 677 |
| `conversion_tstype` | type 对象字面量 → ParseObj.types | 328 |
| `conversion_cfunc` | C parse 函数 | 1289 |
| `conversion_cclass` | C parse 类 | 270 |
| `conversion_cstruct` | C parse 结构体 | 208 |
| `conversion_cenum` | C parse 枚举 | 264 |
| `conversion_cunion` | C parse 联合体 | 123 |
| `conversion_cnamespace` | C parse 命名空间 | 62 |
| `conversion_h2dts_gen` | 解析一次 → 循环 gen | 5534 |
| `conversion_h2dts_container` | h2dts 容器类型专项（map/set/vector 等） | 280 |
| `conversion_h2dts_namespace` | h2dts namespace 嵌套声明生成 | 29 |
| `conversion_h2dtscpp_gen` | 解析一次 → 循环 trans（gen 分卷） | 520 |
| `conversion_h2dtscpp_transparams` | transParameters 分类型专项 | 805 |
| `conversion_h2dtscpp_transparseobj` | transParseObj 分场景专项 | 612 |
| `conversion_h2dtscpp_class` | class 场景 transParseObj | 0 |
| `conversion_h2dtscpp_mixed` | 混合 DECL 端到端 genApi/trans | 1215 |
| `conversion_dts2cpp_delivery` | dts2cpp 交付物 import 解析 | 0 |

## 性能口径

| 参数 | 值 | 说明 |
| --- | --- | --- |
| `PARSE_LOOP` | 10 | 禁止降到 1～2 次 |
| `PARSE_TOTAL_MS` | 6000 | 10 次总耗时上限（非单次平均） |
| suite 超时 | 600000 | 单文件 10 分钟 |

## 功能测试对照

| perf 套件 | 功能测试参考 |
| --- | --- |
| conversion_tsunion | `parse/parsetsunion.test.ts` |
| conversion_tsenum | `parse/parsetsenum.test.ts` |
| conversion_tsclass | `parse/parsetsclass.test.ts` |
| conversion_tsstruct | `parse/parsetsstruct.test.ts` |
| conversion_tsfunc | `parse/parsetsfunc.test.ts` |
| conversion_tstype | `parse/parsetstype.test.ts` |
| conversion_c* | `parse/parsec*.test.ts` |
| conversion_h2dts_gen | `gen/gendts*.test.ts` |
| conversion_h2dtscpp_gen | `gen/gendtscpp*.test.ts` |

## 提交 9314adee 新增性能文件（相对 8b7dd316）

> 本批共 **92** 个测试文件、**2965** 条用例（已并入下文「文件纳入清单」与「用例逐条映射总表」，此处按前缀汇总覆盖范围）。

| 文件前缀 | 本批文件数 | 本批用例数 | 覆盖说明 |
| --- | ---: | ---: | --- |
| `conversion_cclass` | 1 | 1 | C parseClass 扩充（本批 part17） |
| `conversion_h2dts_container` | 8 | 280 | std 容器类型 h2dts 生成（map/set/vector/list 等） |
| `conversion_h2dts_namespace` | 1 | 29 | namespace 嵌套下 getDtsClasses/getDtsFunction 生成 |
| `conversion_h2dtscpp_gen` | 1 | 17 | h2dtscpp gen 分卷扩充（本批 part22） |
| `conversion_h2dtscpp_mixed` | 37 | 1215 | 混合 C++ 声明 → parse + transParseObj/transParameters/genApi 全链路性能 |
| `conversion_h2dtscpp_transparams` | 23 | 805 | 按 DTS 类型分卷的 transParameters 双向转换性能 |
| `conversion_h2dtscpp_transparseobj` | 20 | 612 | 按对象形态分卷的 transParseObj 转换性能 |
| `conversion_tsfunc` | 1 | 6 | dts2cpp 函数解析扩充（本批 part18） |

<details><summary>本批 92 个文件名</summary>

| 序号 | 测试文件 | 纳入用例数 |
| --- | --- | ---: |
| 1 | `conversion_cclass.part17.test.ts` | 1 |
| 2 | `conversion_h2dts_container.part01.test.ts` | 35 |
| 3 | `conversion_h2dts_container.part02.test.ts` | 35 |
| 4 | `conversion_h2dts_container.part03.test.ts` | 35 |
| 5 | `conversion_h2dts_container.part04.test.ts` | 35 |
| 6 | `conversion_h2dts_container.part05.test.ts` | 35 |
| 7 | `conversion_h2dts_container.part06.test.ts` | 35 |
| 8 | `conversion_h2dts_container.part07.test.ts` | 35 |
| 9 | `conversion_h2dts_container.part08.test.ts` | 35 |
| 10 | `conversion_h2dts_namespace.part01.test.ts` | 29 |
| 11 | `conversion_h2dtscpp_gen.part22.test.ts` | 17 |
| 12 | `conversion_h2dtscpp_mixed.part01.test.ts` | 35 |
| 13 | `conversion_h2dtscpp_mixed.part02.test.ts` | 35 |
| 14 | `conversion_h2dtscpp_mixed.part03.test.ts` | 35 |
| 15 | `conversion_h2dtscpp_mixed.part04.test.ts` | 35 |
| 16 | `conversion_h2dtscpp_mixed.part05.test.ts` | 35 |
| 17 | `conversion_h2dtscpp_mixed.part06.test.ts` | 35 |
| 18 | `conversion_h2dtscpp_mixed.part07.test.ts` | 35 |
| 19 | `conversion_h2dtscpp_mixed.part08.test.ts` | 35 |
| 20 | `conversion_h2dtscpp_mixed.part09.test.ts` | 35 |
| 21 | `conversion_h2dtscpp_mixed.part10.test.ts` | 35 |
| 22 | `conversion_h2dtscpp_mixed.part11.test.ts` | 35 |
| 23 | `conversion_h2dtscpp_mixed.part12.test.ts` | 35 |
| 24 | `conversion_h2dtscpp_mixed.part13.test.ts` | 35 |
| 25 | `conversion_h2dtscpp_mixed.part14.test.ts` | 35 |
| 26 | `conversion_h2dtscpp_mixed.part15.test.ts` | 35 |
| 27 | `conversion_h2dtscpp_mixed.part16.test.ts` | 35 |
| 28 | `conversion_h2dtscpp_mixed.part17.test.ts` | 35 |
| 29 | `conversion_h2dtscpp_mixed.part18.test.ts` | 35 |
| 30 | `conversion_h2dtscpp_mixed.part19.test.ts` | 35 |
| 31 | `conversion_h2dtscpp_mixed.part20.test.ts` | 35 |
| 32 | `conversion_h2dtscpp_mixed.part21.test.ts` | 35 |
| 33 | `conversion_h2dtscpp_mixed.part22.test.ts` | 35 |
| 34 | `conversion_h2dtscpp_mixed.part23.test.ts` | 9 |
| 35 | `conversion_h2dtscpp_mixed.part24.test.ts` | 31 |
| 36 | `conversion_h2dtscpp_mixed.part25.test.ts` | 35 |
| 37 | `conversion_h2dtscpp_mixed.part26.test.ts` | 32 |
| 38 | `conversion_h2dtscpp_mixed.part27.test.ts` | 33 |
| 39 | `conversion_h2dtscpp_mixed.part28.test.ts` | 33 |
| 40 | `conversion_h2dtscpp_mixed.part29.test.ts` | 33 |
| 41 | `conversion_h2dtscpp_mixed.part30.test.ts` | 34 |
| 42 | `conversion_h2dtscpp_mixed.part31.test.ts` | 35 |
| 43 | `conversion_h2dtscpp_mixed.part32.test.ts` | 32 |
| 44 | `conversion_h2dtscpp_mixed.part33.test.ts` | 34 |
| 45 | `conversion_h2dtscpp_mixed.part34.test.ts` | 34 |
| 46 | `conversion_h2dtscpp_mixed.part35.test.ts` | 30 |
| 47 | `conversion_h2dtscpp_mixed.part39.test.ts` | 19 |
| 48 | `conversion_h2dtscpp_mixed.part40.test.ts` | 21 |
| 49 | `conversion_h2dtscpp_transparams.part01.test.ts` | 35 |
| 50 | `conversion_h2dtscpp_transparams.part02.test.ts` | 35 |
| 51 | `conversion_h2dtscpp_transparams.part03.test.ts` | 35 |
| 52 | `conversion_h2dtscpp_transparams.part04.test.ts` | 35 |
| 53 | `conversion_h2dtscpp_transparams.part05.test.ts` | 35 |
| 54 | `conversion_h2dtscpp_transparams.part06.test.ts` | 35 |
| 55 | `conversion_h2dtscpp_transparams.part07.test.ts` | 35 |
| 56 | `conversion_h2dtscpp_transparams.part08.test.ts` | 35 |
| 57 | `conversion_h2dtscpp_transparams.part09.test.ts` | 35 |
| 58 | `conversion_h2dtscpp_transparams.part10.test.ts` | 35 |
| 59 | `conversion_h2dtscpp_transparams.part11.test.ts` | 35 |
| 60 | `conversion_h2dtscpp_transparams.part12.test.ts` | 35 |
| 61 | `conversion_h2dtscpp_transparams.part13.test.ts` | 35 |
| 62 | `conversion_h2dtscpp_transparams.part14.test.ts` | 35 |
| 63 | `conversion_h2dtscpp_transparams.part15.test.ts` | 35 |
| 64 | `conversion_h2dtscpp_transparams.part16.test.ts` | 35 |
| 65 | `conversion_h2dtscpp_transparams.part17.test.ts` | 35 |
| 66 | `conversion_h2dtscpp_transparams.part18.test.ts` | 35 |
| 67 | `conversion_h2dtscpp_transparams.part19.test.ts` | 35 |
| 68 | `conversion_h2dtscpp_transparams.part20.test.ts` | 35 |
| 69 | `conversion_h2dtscpp_transparams.part21.test.ts` | 35 |
| 70 | `conversion_h2dtscpp_transparams.part22.test.ts` | 35 |
| 71 | `conversion_h2dtscpp_transparams.part23.test.ts` | 35 |
| 72 | `conversion_h2dtscpp_transparseobj.part13.test.ts` | 5 |
| 73 | `conversion_h2dtscpp_transparseobj.part14.test.ts` | 35 |
| 74 | `conversion_h2dtscpp_transparseobj.part15.test.ts` | 35 |
| 75 | `conversion_h2dtscpp_transparseobj.part16.test.ts` | 33 |
| 76 | `conversion_h2dtscpp_transparseobj.part17.test.ts` | 33 |
| 77 | `conversion_h2dtscpp_transparseobj.part18.test.ts` | 34 |
| 78 | `conversion_h2dtscpp_transparseobj.part19.test.ts` | 34 |
| 79 | `conversion_h2dtscpp_transparseobj.part20.test.ts` | 35 |
| 80 | `conversion_h2dtscpp_transparseobj.part21.test.ts` | 31 |
| 81 | `conversion_h2dtscpp_transparseobj.part22.test.ts` | 31 |
| 82 | `conversion_h2dtscpp_transparseobj.part23.test.ts` | 29 |
| 83 | `conversion_h2dtscpp_transparseobj.part24.test.ts` | 33 |
| 84 | `conversion_h2dtscpp_transparseobj.part25.test.ts` | 32 |
| 85 | `conversion_h2dtscpp_transparseobj.part26.test.ts` | 34 |
| 86 | `conversion_h2dtscpp_transparseobj.part27.test.ts` | 34 |
| 87 | `conversion_h2dtscpp_transparseobj.part28.test.ts` | 35 |
| 88 | `conversion_h2dtscpp_transparseobj.part29.test.ts` | 34 |
| 89 | `conversion_h2dtscpp_transparseobj.part30.test.ts` | 34 |
| 90 | `conversion_h2dtscpp_transparseobj.part31.test.ts` | 32 |
| 91 | `conversion_h2dtscpp_transparseobj.part32.test.ts` | 9 |
| 92 | `conversion_tsfunc.part18.test.ts` | 6 |

</details>

## 覆盖统计

- 纳入测试文件数：**482**
- 纳入用例总数：**13835**（dts2cpp 2624 + C Parse 2216 + H2DTS Gen 5843 + H2DTSCPP Gen 3152）
- 统计方式：扫描所有 `*.test.ts` 文件中的 `test(...)` 声明（与 `@tc.number` 逐块一一对应，全量查重 0 重名）。

## 文件纳入清单

| 序号 | 测试文件 | 纳入用例数 | 链路 |
| --- | --- | ---: | --- |
| 1 | `conversion_cclass.part01.test.ts` | 27 | C Parse |
| 2 | `conversion_cclass.part02.test.ts` | 37 | C Parse |
| 3 | `conversion_cclass.part03.test.ts` | 37 | C Parse |
| 4 | `conversion_cclass.part04.test.ts` | 36 | C Parse |
| 5 | `conversion_cclass.part05.test.ts` | 31 | C Parse |
| 6 | `conversion_cclass.part06.test.ts` | 12 | C Parse |
| 7 | `conversion_cclass.part07.test.ts` | 27 | C Parse |
| 8 | `conversion_cclass.part08.test.ts` | 30 | C Parse |
| 9 | `conversion_cclass.part09.test.ts` | 10 | C Parse |
| 10 | `conversion_cclass.part10.test.ts` | 4 | C Parse |
| 11 | `conversion_cclass.part11.test.ts` | 5 | C Parse |
| 12 | `conversion_cclass.part12.test.ts` | 2 | C Parse |
| 13 | `conversion_cclass.part13.test.ts` | 2 | C Parse |
| 14 | `conversion_cclass.part14.test.ts` | 3 | C Parse |
| 15 | `conversion_cclass.part15.test.ts` | 3 | C Parse |
| 16 | `conversion_cclass.part16.test.ts` | 3 | C Parse |
| 17 | `conversion_cclass.part17.test.ts` | 1 | C Parse |
| 18 | `conversion_cenum.part01.test.ts` | 27 | C Parse |
| 19 | `conversion_cenum.part02.test.ts` | 41 | C Parse |
| 20 | `conversion_cenum.part03.test.ts` | 30 | C Parse |
| 21 | `conversion_cenum.part04.test.ts` | 24 | C Parse |
| 22 | `conversion_cenum.part05.test.ts` | 21 | C Parse |
| 23 | `conversion_cenum.part06.test.ts` | 19 | C Parse |
| 24 | `conversion_cenum.part07.test.ts` | 17 | C Parse |
| 25 | `conversion_cenum.part08.test.ts` | 16 | C Parse |
| 26 | `conversion_cenum.part09.test.ts` | 15 | C Parse |
| 27 | `conversion_cenum.part10.test.ts` | 19 | C Parse |
| 28 | `conversion_cenum.part11.test.ts` | 24 | C Parse |
| 29 | `conversion_cenum.part12.test.ts` | 3 | C Parse |
| 30 | `conversion_cenum.part13.test.ts` | 3 | C Parse |
| 31 | `conversion_cenum.part14.test.ts` | 1 | C Parse |
| 32 | `conversion_cenum.part15.test.ts` | 1 | C Parse |
| 33 | `conversion_cenum.part16.test.ts` | 1 | C Parse |
| 34 | `conversion_cenum.part17.test.ts` | 1 | C Parse |
| 35 | `conversion_cenum.part18.test.ts` | 1 | C Parse |
| 36 | `conversion_cfunc.part01.test.ts` | 42 | C Parse |
| 37 | `conversion_cfunc.part02.test.ts` | 42 | C Parse |
| 38 | `conversion_cfunc.part03.test.ts` | 41 | C Parse |
| 39 | `conversion_cfunc.part04.test.ts` | 60 | C Parse |
| 40 | `conversion_cfunc.part05.test.ts` | 57 | C Parse |
| 41 | `conversion_cfunc.part06.test.ts` | 57 | C Parse |
| 42 | `conversion_cfunc.part07.test.ts` | 54 | C Parse |
| 43 | `conversion_cfunc.part08.test.ts` | 53 | C Parse |
| 44 | `conversion_cfunc.part09.test.ts` | 53 | C Parse |
| 45 | `conversion_cfunc.part10.test.ts` | 52 | C Parse |
| 46 | `conversion_cfunc.part11.test.ts` | 48 | C Parse |
| 47 | `conversion_cfunc.part12.test.ts` | 52 | C Parse |
| 48 | `conversion_cfunc.part13.test.ts` | 55 | C Parse |
| 49 | `conversion_cfunc.part14.test.ts` | 45 | C Parse |
| 50 | `conversion_cfunc.part15.test.ts` | 28 | C Parse |
| 51 | `conversion_cfunc.part16.test.ts` | 58 | C Parse |
| 52 | `conversion_cfunc.part17.test.ts` | 58 | C Parse |
| 53 | `conversion_cfunc.part18.test.ts` | 58 | C Parse |
| 54 | `conversion_cfunc.part19.test.ts` | 54 | C Parse |
| 55 | `conversion_cfunc.part20.test.ts` | 53 | C Parse |
| 56 | `conversion_cfunc.part21.test.ts` | 53 | C Parse |
| 57 | `conversion_cfunc.part22.test.ts` | 53 | C Parse |
| 58 | `conversion_cfunc.part23.test.ts` | 26 | C Parse |
| 59 | `conversion_cfunc.part24.test.ts` | 5 | C Parse |
| 60 | `conversion_cfunc.part25.test.ts` | 7 | C Parse |
| 61 | `conversion_cfunc.part26.test.ts` | 4 | C Parse |
| 62 | `conversion_cfunc.part27.test.ts` | 4 | C Parse |
| 63 | `conversion_cfunc.part28.test.ts` | 35 | C Parse |
| 64 | `conversion_cfunc.part29.test.ts` | 35 | C Parse |
| 65 | `conversion_cfunc.part30.test.ts` | 30 | C Parse |
| 66 | `conversion_cfunc.part31.test.ts` | 17 | C Parse |
| 67 | `conversion_cnamespace.part01.test.ts` | 7 | C Parse |
| 68 | `conversion_cnamespace.part02.test.ts` | 32 | C Parse |
| 69 | `conversion_cnamespace.part03.test.ts` | 3 | C Parse |
| 70 | `conversion_cnamespace.part04.test.ts` | 4 | C Parse |
| 71 | `conversion_cnamespace.part05.test.ts` | 2 | C Parse |
| 72 | `conversion_cnamespace.part06.test.ts` | 2 | C Parse |
| 73 | `conversion_cnamespace.part07.test.ts` | 4 | C Parse |
| 74 | `conversion_cnamespace.part08.test.ts` | 8 | C Parse |
| 75 | `conversion_cstruct.part01.test.ts` | 20 | C Parse |
| 76 | `conversion_cstruct.part02.test.ts` | 41 | C Parse |
| 77 | `conversion_cstruct.part03.test.ts` | 41 | C Parse |
| 78 | `conversion_cstruct.part04.test.ts` | 27 | C Parse |
| 79 | `conversion_cstruct.part05.test.ts` | 40 | C Parse |
| 80 | `conversion_cstruct.part06.test.ts` | 6 | C Parse |
| 81 | `conversion_cstruct.part07.test.ts` | 10 | C Parse |
| 82 | `conversion_cstruct.part08.test.ts` | 4 | C Parse |
| 83 | `conversion_cstruct.part09.test.ts` | 5 | C Parse |
| 84 | `conversion_cstruct.part10.test.ts` | 3 | C Parse |
| 85 | `conversion_cstruct.part11.test.ts` | 3 | C Parse |
| 86 | `conversion_cstruct.part12.test.ts` | 2 | C Parse |
| 87 | `conversion_cstruct.part13.test.ts` | 3 | C Parse |
| 88 | `conversion_cstruct.part14.test.ts` | 3 | C Parse |
| 89 | `conversion_cunion.part01.test.ts` | 14 | C Parse |
| 90 | `conversion_cunion.part02.test.ts` | 40 | C Parse |
| 91 | `conversion_cunion.part03.test.ts` | 33 | C Parse |
| 92 | `conversion_cunion.part04.test.ts` | 12 | C Parse |
| 93 | `conversion_cunion.part05.test.ts` | 5 | C Parse |
| 94 | `conversion_cunion.part06.test.ts` | 4 | C Parse |
| 95 | `conversion_cunion.part07.test.ts` | 2 | C Parse |
| 96 | `conversion_cunion.part08.test.ts` | 2 | C Parse |
| 97 | `conversion_cunion.part09.test.ts` | 3 | C Parse |
| 98 | `conversion_cunion.part10.test.ts` | 4 | C Parse |
| 99 | `conversion_cunion.part11.test.ts` | 4 | C Parse |
| 100 | `conversion_h2dts_container.part01.test.ts` | 35 | H2DTS Gen |
| 101 | `conversion_h2dts_container.part02.test.ts` | 35 | H2DTS Gen |
| 102 | `conversion_h2dts_container.part03.test.ts` | 35 | H2DTS Gen |
| 103 | `conversion_h2dts_container.part04.test.ts` | 35 | H2DTS Gen |
| 104 | `conversion_h2dts_container.part05.test.ts` | 35 | H2DTS Gen |
| 105 | `conversion_h2dts_container.part06.test.ts` | 35 | H2DTS Gen |
| 106 | `conversion_h2dts_container.part07.test.ts` | 35 | H2DTS Gen |
| 107 | `conversion_h2dts_container.part08.test.ts` | 35 | H2DTS Gen |
| 108 | `conversion_h2dts_gen.part01.test.ts` | 14 | H2DTS Gen |
| 109 | `conversion_h2dts_gen.part02.test.ts` | 49 | H2DTS Gen |
| 110 | `conversion_h2dts_gen.part03.test.ts` | 39 | H2DTS Gen |
| 111 | `conversion_h2dts_gen.part04.test.ts` | 36 | H2DTS Gen |
| 112 | `conversion_h2dts_gen.part05.test.ts` | 24 | H2DTS Gen |
| 113 | `conversion_h2dts_gen.part06.test.ts` | 23 | H2DTS Gen |
| 114 | `conversion_h2dts_gen.part08.test.ts` | 35 | H2DTS Gen |
| 115 | `conversion_h2dts_gen.part09.test.ts` | 35 | H2DTS Gen |
| 116 | `conversion_h2dts_gen.part10.test.ts` | 35 | H2DTS Gen |
| 117 | `conversion_h2dts_gen.part11.test.ts` | 35 | H2DTS Gen |
| 118 | `conversion_h2dts_gen.part12.test.ts` | 35 | H2DTS Gen |
| 119 | `conversion_h2dts_gen.part13.test.ts` | 35 | H2DTS Gen |
| 120 | `conversion_h2dts_gen.part14.test.ts` | 35 | H2DTS Gen |
| 121 | `conversion_h2dts_gen.part15.test.ts` | 35 | H2DTS Gen |
| 122 | `conversion_h2dts_gen.part16.test.ts` | 35 | H2DTS Gen |
| 123 | `conversion_h2dts_gen.part17.test.ts` | 35 | H2DTS Gen |
| 124 | `conversion_h2dts_gen.part18.test.ts` | 35 | H2DTS Gen |
| 125 | `conversion_h2dts_gen.part19.test.ts` | 35 | H2DTS Gen |
| 126 | `conversion_h2dts_gen.part20.test.ts` | 35 | H2DTS Gen |
| 127 | `conversion_h2dts_gen.part21.test.ts` | 35 | H2DTS Gen |
| 128 | `conversion_h2dts_gen.part22.test.ts` | 35 | H2DTS Gen |
| 129 | `conversion_h2dts_gen.part23.test.ts` | 35 | H2DTS Gen |
| 130 | `conversion_h2dts_gen.part24.test.ts` | 35 | H2DTS Gen |
| 131 | `conversion_h2dts_gen.part25.test.ts` | 35 | H2DTS Gen |
| 132 | `conversion_h2dts_gen.part26.test.ts` | 35 | H2DTS Gen |
| 133 | `conversion_h2dts_gen.part27.test.ts` | 35 | H2DTS Gen |
| 134 | `conversion_h2dts_gen.part28.test.ts` | 35 | H2DTS Gen |
| 135 | `conversion_h2dts_gen.part29.test.ts` | 35 | H2DTS Gen |
| 136 | `conversion_h2dts_gen.part30.test.ts` | 35 | H2DTS Gen |
| 137 | `conversion_h2dts_gen.part31.test.ts` | 35 | H2DTS Gen |
| 138 | `conversion_h2dts_gen.part32.test.ts` | 35 | H2DTS Gen |
| 139 | `conversion_h2dts_gen.part33.test.ts` | 35 | H2DTS Gen |
| 140 | `conversion_h2dts_gen.part34.test.ts` | 35 | H2DTS Gen |
| 141 | `conversion_h2dts_gen.part35.test.ts` | 35 | H2DTS Gen |
| 142 | `conversion_h2dts_gen.part36.test.ts` | 35 | H2DTS Gen |
| 143 | `conversion_h2dts_gen.part37.test.ts` | 35 | H2DTS Gen |
| 144 | `conversion_h2dts_gen.part38.test.ts` | 2 | H2DTS Gen |
| 145 | `conversion_h2dts_gen.part39.test.ts` | 10 | H2DTS Gen |
| 146 | `conversion_h2dts_gen.part40.test.ts` | 15 | H2DTS Gen |
| 147 | `conversion_h2dts_gen.part41.test.ts` | 35 | H2DTS Gen |
| 148 | `conversion_h2dts_gen.part42.test.ts` | 35 | H2DTS Gen |
| 149 | `conversion_h2dts_gen.part43.test.ts` | 35 | H2DTS Gen |
| 150 | `conversion_h2dts_gen.part44.test.ts` | 35 | H2DTS Gen |
| 151 | `conversion_h2dts_gen.part45.test.ts` | 35 | H2DTS Gen |
| 152 | `conversion_h2dts_gen.part46.test.ts` | 35 | H2DTS Gen |
| 153 | `conversion_h2dts_gen.part47.test.ts` | 35 | H2DTS Gen |
| 154 | `conversion_h2dts_gen.part48.test.ts` | 35 | H2DTS Gen |
| 155 | `conversion_h2dts_gen.part49.test.ts` | 35 | H2DTS Gen |
| 156 | `conversion_h2dts_gen.part50.test.ts` | 35 | H2DTS Gen |
| 157 | `conversion_h2dts_gen.part51.test.ts` | 35 | H2DTS Gen |
| 158 | `conversion_h2dts_gen.part52.test.ts` | 35 | H2DTS Gen |
| 159 | `conversion_h2dts_gen.part53.test.ts` | 35 | H2DTS Gen |
| 160 | `conversion_h2dts_gen.part54.test.ts` | 35 | H2DTS Gen |
| 161 | `conversion_h2dts_gen.part55.test.ts` | 35 | H2DTS Gen |
| 162 | `conversion_h2dts_gen.part56.test.ts` | 35 | H2DTS Gen |
| 163 | `conversion_h2dts_gen.part57.test.ts` | 35 | H2DTS Gen |
| 164 | `conversion_h2dts_gen.part58.test.ts` | 35 | H2DTS Gen |
| 165 | `conversion_h2dts_gen.part59.test.ts` | 35 | H2DTS Gen |
| 166 | `conversion_h2dts_gen.part60.test.ts` | 35 | H2DTS Gen |
| 167 | `conversion_h2dts_gen.part61.test.ts` | 35 | H2DTS Gen |
| 168 | `conversion_h2dts_gen.part62.test.ts` | 20 | H2DTS Gen |
| 169 | `conversion_h2dts_gen.part63.test.ts` | 35 | H2DTS Gen |
| 170 | `conversion_h2dts_gen.part64.test.ts` | 35 | H2DTS Gen |
| 171 | `conversion_h2dts_gen.part65.test.ts` | 35 | H2DTS Gen |
| 172 | `conversion_h2dts_gen.part66.test.ts` | 35 | H2DTS Gen |
| 173 | `conversion_h2dts_gen.part67.test.ts` | 35 | H2DTS Gen |
| 174 | `conversion_h2dts_gen.part68.test.ts` | 35 | H2DTS Gen |
| 175 | `conversion_h2dts_gen.part69.test.ts` | 35 | H2DTS Gen |
| 176 | `conversion_h2dts_gen.part70.test.ts` | 35 | H2DTS Gen |
| 177 | `conversion_h2dts_gen.part71.test.ts` | 35 | H2DTS Gen |
| 178 | `conversion_h2dts_gen.part72.test.ts` | 35 | H2DTS Gen |
| 179 | `conversion_h2dts_gen.part73.test.ts` | 35 | H2DTS Gen |
| 180 | `conversion_h2dts_gen.part74.test.ts` | 35 | H2DTS Gen |
| 181 | `conversion_h2dts_gen.part75.test.ts` | 35 | H2DTS Gen |
| 182 | `conversion_h2dts_gen.part76.test.ts` | 35 | H2DTS Gen |
| 183 | `conversion_h2dts_gen.part77.test.ts` | 35 | H2DTS Gen |
| 184 | `conversion_h2dts_gen.part78.test.ts` | 35 | H2DTS Gen |
| 185 | `conversion_h2dts_gen.part79.test.ts` | 35 | H2DTS Gen |
| 186 | `conversion_h2dts_gen.part80.test.ts` | 35 | H2DTS Gen |
| 187 | `conversion_h2dts_gen.part81.test.ts` | 35 | H2DTS Gen |
| 188 | `conversion_h2dts_gen.part82.test.ts` | 35 | H2DTS Gen |
| 189 | `conversion_h2dts_gen.part83.test.ts` | 35 | H2DTS Gen |
| 190 | `conversion_h2dts_gen.part84.test.ts` | 35 | H2DTS Gen |
| 191 | `conversion_h2dts_gen.part85.test.ts` | 35 | H2DTS Gen |
| 192 | `conversion_h2dts_gen.part86.test.ts` | 35 | H2DTS Gen |
| 193 | `conversion_h2dts_gen.part87.test.ts` | 35 | H2DTS Gen |
| 194 | `conversion_h2dts_gen.part88.test.ts` | 35 | H2DTS Gen |
| 195 | `conversion_h2dts_gen.part89.test.ts` | 35 | H2DTS Gen |
| 196 | `conversion_h2dts_gen.part90.test.ts` | 35 | H2DTS Gen |
| 197 | `conversion_h2dts_gen.part91.test.ts` | 35 | H2DTS Gen |
| 198 | `conversion_h2dts_gen.part92.test.ts` | 35 | H2DTS Gen |
| 199 | `conversion_h2dts_gen.part93.test.ts` | 35 | H2DTS Gen |
| 200 | `conversion_h2dts_gen.part94.test.ts` | 35 | H2DTS Gen |
| 201 | `conversion_h2dts_gen.part95.test.ts` | 35 | H2DTS Gen |
| 202 | `conversion_h2dts_gen.part96.test.ts` | 35 | H2DTS Gen |
| 203 | `conversion_h2dts_gen.part97.test.ts` | 35 | H2DTS Gen |
| 204 | `conversion_h2dts_gen.part98.test.ts` | 35 | H2DTS Gen |
| 205 | `conversion_h2dts_gen.part99.test.ts` | 35 | H2DTS Gen |
| 206 | `conversion_h2dts_gen.part100.test.ts` | 35 | H2DTS Gen |
| 207 | `conversion_h2dts_gen.part101.test.ts` | 35 | H2DTS Gen |
| 208 | `conversion_h2dts_gen.part102.test.ts` | 35 | H2DTS Gen |
| 209 | `conversion_h2dts_gen.part103.test.ts` | 35 | H2DTS Gen |
| 210 | `conversion_h2dts_gen.part104.test.ts` | 35 | H2DTS Gen |
| 211 | `conversion_h2dts_gen.part105.test.ts` | 35 | H2DTS Gen |
| 212 | `conversion_h2dts_gen.part106.test.ts` | 35 | H2DTS Gen |
| 213 | `conversion_h2dts_gen.part107.test.ts` | 35 | H2DTS Gen |
| 214 | `conversion_h2dts_gen.part108.test.ts` | 35 | H2DTS Gen |
| 215 | `conversion_h2dts_gen.part109.test.ts` | 35 | H2DTS Gen |
| 216 | `conversion_h2dts_gen.part110.test.ts` | 35 | H2DTS Gen |
| 217 | `conversion_h2dts_gen.part111.test.ts` | 35 | H2DTS Gen |
| 218 | `conversion_h2dts_gen.part112.test.ts` | 4 | H2DTS Gen |
| 219 | `conversion_h2dts_gen.part113.test.ts` | 35 | H2DTS Gen |
| 220 | `conversion_h2dts_gen.part114.test.ts` | 35 | H2DTS Gen |
| 221 | `conversion_h2dts_gen.part115.test.ts` | 35 | H2DTS Gen |
| 222 | `conversion_h2dts_gen.part116.test.ts` | 35 | H2DTS Gen |
| 223 | `conversion_h2dts_gen.part117.test.ts` | 35 | H2DTS Gen |
| 224 | `conversion_h2dts_gen.part118.test.ts` | 35 | H2DTS Gen |
| 225 | `conversion_h2dts_gen.part119.test.ts` | 35 | H2DTS Gen |
| 226 | `conversion_h2dts_gen.part120.test.ts` | 35 | H2DTS Gen |
| 227 | `conversion_h2dts_gen.part121.test.ts` | 35 | H2DTS Gen |
| 228 | `conversion_h2dts_gen.part122.test.ts` | 35 | H2DTS Gen |
| 229 | `conversion_h2dts_gen.part123.test.ts` | 35 | H2DTS Gen |
| 230 | `conversion_h2dts_gen.part124.test.ts` | 35 | H2DTS Gen |
| 231 | `conversion_h2dts_gen.part125.test.ts` | 35 | H2DTS Gen |
| 232 | `conversion_h2dts_gen.part126.test.ts` | 35 | H2DTS Gen |
| 233 | `conversion_h2dts_gen.part127.test.ts` | 35 | H2DTS Gen |
| 234 | `conversion_h2dts_gen.part128.test.ts` | 35 | H2DTS Gen |
| 235 | `conversion_h2dts_gen.part129.test.ts` | 35 | H2DTS Gen |
| 236 | `conversion_h2dts_gen.part130.test.ts` | 35 | H2DTS Gen |
| 237 | `conversion_h2dts_gen.part131.test.ts` | 35 | H2DTS Gen |
| 238 | `conversion_h2dts_gen.part132.test.ts` | 35 | H2DTS Gen |
| 239 | `conversion_h2dts_gen.part133.test.ts` | 35 | H2DTS Gen |
| 240 | `conversion_h2dts_gen.part134.test.ts` | 35 | H2DTS Gen |
| 241 | `conversion_h2dts_gen.part135.test.ts` | 35 | H2DTS Gen |
| 242 | `conversion_h2dts_gen.part136.test.ts` | 35 | H2DTS Gen |
| 243 | `conversion_h2dts_gen.part137.test.ts` | 35 | H2DTS Gen |
| 244 | `conversion_h2dts_gen.part138.test.ts` | 35 | H2DTS Gen |
| 245 | `conversion_h2dts_gen.part139.test.ts` | 35 | H2DTS Gen |
| 246 | `conversion_h2dts_gen.part140.test.ts` | 35 | H2DTS Gen |
| 247 | `conversion_h2dts_gen.part141.test.ts` | 35 | H2DTS Gen |
| 248 | `conversion_h2dts_gen.part142.test.ts` | 35 | H2DTS Gen |
| 249 | `conversion_h2dts_gen.part143.test.ts` | 35 | H2DTS Gen |
| 250 | `conversion_h2dts_gen.part144.test.ts` | 35 | H2DTS Gen |
| 251 | `conversion_h2dts_gen.part145.test.ts` | 35 | H2DTS Gen |
| 252 | `conversion_h2dts_gen.part146.test.ts` | 35 | H2DTS Gen |
| 253 | `conversion_h2dts_gen.part147.test.ts` | 35 | H2DTS Gen |
| 254 | `conversion_h2dts_gen.part148.test.ts` | 35 | H2DTS Gen |
| 255 | `conversion_h2dts_gen.part149.test.ts` | 35 | H2DTS Gen |
| 256 | `conversion_h2dts_gen.part150.test.ts` | 35 | H2DTS Gen |
| 257 | `conversion_h2dts_gen.part151.test.ts` | 35 | H2DTS Gen |
| 258 | `conversion_h2dts_gen.part152.test.ts` | 35 | H2DTS Gen |
| 259 | `conversion_h2dts_gen.part153.test.ts` | 35 | H2DTS Gen |
| 260 | `conversion_h2dts_gen.part154.test.ts` | 35 | H2DTS Gen |
| 261 | `conversion_h2dts_gen.part155.test.ts` | 35 | H2DTS Gen |
| 262 | `conversion_h2dts_gen.part156.test.ts` | 35 | H2DTS Gen |
| 263 | `conversion_h2dts_gen.part157.test.ts` | 35 | H2DTS Gen |
| 264 | `conversion_h2dts_gen.part158.test.ts` | 35 | H2DTS Gen |
| 265 | `conversion_h2dts_gen.part159.test.ts` | 35 | H2DTS Gen |
| 266 | `conversion_h2dts_gen.part160.test.ts` | 35 | H2DTS Gen |
| 267 | `conversion_h2dts_gen.part161.test.ts` | 25 | H2DTS Gen |
| 268 | `conversion_h2dts_gen.part162.test.ts` | 35 | H2DTS Gen |
| 269 | `conversion_h2dts_gen.part163.test.ts` | 35 | H2DTS Gen |
| 270 | `conversion_h2dts_gen.part164.test.ts` | 23 | H2DTS Gen |
| 271 | `conversion_h2dts_namespace.part01.test.ts` | 29 | H2DTS Gen |
| 272 | `conversion_h2dtscpp_gen.part01.test.ts` | 10 | H2DTSCPP Gen |
| 273 | `conversion_h2dtscpp_gen.part02.test.ts` | 21 | H2DTSCPP Gen |
| 274 | `conversion_h2dtscpp_gen.part03.test.ts` | 11 | H2DTSCPP Gen |
| 275 | `conversion_h2dtscpp_gen.part04.test.ts` | 10 | H2DTSCPP Gen |
| 276 | `conversion_h2dtscpp_gen.part05.test.ts` | 35 | H2DTSCPP Gen |
| 277 | `conversion_h2dtscpp_gen.part06.test.ts` | 30 | H2DTSCPP Gen |
| 278 | `conversion_h2dtscpp_gen.part06b.test.ts` | 2 | H2DTSCPP Gen |
| 279 | `conversion_h2dtscpp_gen.part07.test.ts` | 30 | H2DTSCPP Gen |
| 280 | `conversion_h2dtscpp_gen.part07b.test.ts` | 2 | H2DTSCPP Gen |
| 281 | `conversion_h2dtscpp_gen.part08.test.ts` | 30 | H2DTSCPP Gen |
| 282 | `conversion_h2dtscpp_gen.part08b.test.ts` | 2 | H2DTSCPP Gen |
| 283 | `conversion_h2dtscpp_gen.part09.test.ts` | 30 | H2DTSCPP Gen |
| 284 | `conversion_h2dtscpp_gen.part09b.test.ts` | 2 | H2DTSCPP Gen |
| 285 | `conversion_h2dtscpp_gen.part10.test.ts` | 30 | H2DTSCPP Gen |
| 286 | `conversion_h2dtscpp_gen.part10b.test.ts` | 2 | H2DTSCPP Gen |
| 287 | `conversion_h2dtscpp_gen.part11.test.ts` | 19 | H2DTSCPP Gen |
| 288 | `conversion_h2dtscpp_gen.part12.test.ts` | 10 | H2DTSCPP Gen |
| 289 | `conversion_h2dtscpp_gen.part13.test.ts` | 15 | H2DTSCPP Gen |
| 290 | `conversion_h2dtscpp_gen.part14.test.ts` | 15 | H2DTSCPP Gen |
| 291 | `conversion_h2dtscpp_gen.part15.test.ts` | 35 | H2DTSCPP Gen |
| 292 | `conversion_h2dtscpp_gen.part16.test.ts` | 35 | H2DTSCPP Gen |
| 293 | `conversion_h2dtscpp_gen.part17.test.ts` | 35 | H2DTSCPP Gen |
| 294 | `conversion_h2dtscpp_gen.part18.test.ts` | 21 | H2DTSCPP Gen |
| 295 | `conversion_h2dtscpp_gen.part19.test.ts` | 31 | H2DTSCPP Gen |
| 296 | `conversion_h2dtscpp_gen.part20.test.ts` | 23 | H2DTSCPP Gen |
| 297 | `conversion_h2dtscpp_gen.part21.test.ts` | 17 | H2DTSCPP Gen |
| 298 | `conversion_h2dtscpp_gen.part22.test.ts` | 17 | H2DTSCPP Gen |
| 299 | `conversion_h2dtscpp_mixed.part01.test.ts` | 35 | H2DTSCPP Gen |
| 300 | `conversion_h2dtscpp_mixed.part02.test.ts` | 35 | H2DTSCPP Gen |
| 301 | `conversion_h2dtscpp_mixed.part03.test.ts` | 35 | H2DTSCPP Gen |
| 302 | `conversion_h2dtscpp_mixed.part04.test.ts` | 35 | H2DTSCPP Gen |
| 303 | `conversion_h2dtscpp_mixed.part05.test.ts` | 35 | H2DTSCPP Gen |
| 304 | `conversion_h2dtscpp_mixed.part06.test.ts` | 35 | H2DTSCPP Gen |
| 305 | `conversion_h2dtscpp_mixed.part07.test.ts` | 35 | H2DTSCPP Gen |
| 306 | `conversion_h2dtscpp_mixed.part08.test.ts` | 35 | H2DTSCPP Gen |
| 307 | `conversion_h2dtscpp_mixed.part09.test.ts` | 35 | H2DTSCPP Gen |
| 308 | `conversion_h2dtscpp_mixed.part10.test.ts` | 35 | H2DTSCPP Gen |
| 309 | `conversion_h2dtscpp_mixed.part11.test.ts` | 35 | H2DTSCPP Gen |
| 310 | `conversion_h2dtscpp_mixed.part12.test.ts` | 35 | H2DTSCPP Gen |
| 311 | `conversion_h2dtscpp_mixed.part13.test.ts` | 35 | H2DTSCPP Gen |
| 312 | `conversion_h2dtscpp_mixed.part14.test.ts` | 35 | H2DTSCPP Gen |
| 313 | `conversion_h2dtscpp_mixed.part15.test.ts` | 35 | H2DTSCPP Gen |
| 314 | `conversion_h2dtscpp_mixed.part16.test.ts` | 35 | H2DTSCPP Gen |
| 315 | `conversion_h2dtscpp_mixed.part17.test.ts` | 35 | H2DTSCPP Gen |
| 316 | `conversion_h2dtscpp_mixed.part18.test.ts` | 35 | H2DTSCPP Gen |
| 317 | `conversion_h2dtscpp_mixed.part19.test.ts` | 35 | H2DTSCPP Gen |
| 318 | `conversion_h2dtscpp_mixed.part20.test.ts` | 35 | H2DTSCPP Gen |
| 319 | `conversion_h2dtscpp_mixed.part21.test.ts` | 35 | H2DTSCPP Gen |
| 320 | `conversion_h2dtscpp_mixed.part22.test.ts` | 35 | H2DTSCPP Gen |
| 321 | `conversion_h2dtscpp_mixed.part23.test.ts` | 9 | H2DTSCPP Gen |
| 322 | `conversion_h2dtscpp_mixed.part24.test.ts` | 31 | H2DTSCPP Gen |
| 323 | `conversion_h2dtscpp_mixed.part25.test.ts` | 35 | H2DTSCPP Gen |
| 324 | `conversion_h2dtscpp_mixed.part26.test.ts` | 32 | H2DTSCPP Gen |
| 325 | `conversion_h2dtscpp_mixed.part27.test.ts` | 33 | H2DTSCPP Gen |
| 326 | `conversion_h2dtscpp_mixed.part28.test.ts` | 33 | H2DTSCPP Gen |
| 327 | `conversion_h2dtscpp_mixed.part29.test.ts` | 33 | H2DTSCPP Gen |
| 328 | `conversion_h2dtscpp_mixed.part30.test.ts` | 34 | H2DTSCPP Gen |
| 329 | `conversion_h2dtscpp_mixed.part31.test.ts` | 35 | H2DTSCPP Gen |
| 330 | `conversion_h2dtscpp_mixed.part32.test.ts` | 32 | H2DTSCPP Gen |
| 331 | `conversion_h2dtscpp_mixed.part33.test.ts` | 34 | H2DTSCPP Gen |
| 332 | `conversion_h2dtscpp_mixed.part34.test.ts` | 34 | H2DTSCPP Gen |
| 333 | `conversion_h2dtscpp_mixed.part35.test.ts` | 30 | H2DTSCPP Gen |
| 334 | `conversion_h2dtscpp_mixed.part39.test.ts` | 19 | H2DTSCPP Gen |
| 335 | `conversion_h2dtscpp_mixed.part40.test.ts` | 21 | H2DTSCPP Gen |
| 336 | `conversion_h2dtscpp_transparams.part01.test.ts` | 35 | H2DTSCPP Gen |
| 337 | `conversion_h2dtscpp_transparams.part02.test.ts` | 35 | H2DTSCPP Gen |
| 338 | `conversion_h2dtscpp_transparams.part03.test.ts` | 35 | H2DTSCPP Gen |
| 339 | `conversion_h2dtscpp_transparams.part04.test.ts` | 35 | H2DTSCPP Gen |
| 340 | `conversion_h2dtscpp_transparams.part05.test.ts` | 35 | H2DTSCPP Gen |
| 341 | `conversion_h2dtscpp_transparams.part06.test.ts` | 35 | H2DTSCPP Gen |
| 342 | `conversion_h2dtscpp_transparams.part07.test.ts` | 35 | H2DTSCPP Gen |
| 343 | `conversion_h2dtscpp_transparams.part08.test.ts` | 35 | H2DTSCPP Gen |
| 344 | `conversion_h2dtscpp_transparams.part09.test.ts` | 35 | H2DTSCPP Gen |
| 345 | `conversion_h2dtscpp_transparams.part10.test.ts` | 35 | H2DTSCPP Gen |
| 346 | `conversion_h2dtscpp_transparams.part11.test.ts` | 35 | H2DTSCPP Gen |
| 347 | `conversion_h2dtscpp_transparams.part12.test.ts` | 35 | H2DTSCPP Gen |
| 348 | `conversion_h2dtscpp_transparams.part13.test.ts` | 35 | H2DTSCPP Gen |
| 349 | `conversion_h2dtscpp_transparams.part14.test.ts` | 35 | H2DTSCPP Gen |
| 350 | `conversion_h2dtscpp_transparams.part15.test.ts` | 35 | H2DTSCPP Gen |
| 351 | `conversion_h2dtscpp_transparams.part16.test.ts` | 35 | H2DTSCPP Gen |
| 352 | `conversion_h2dtscpp_transparams.part17.test.ts` | 35 | H2DTSCPP Gen |
| 353 | `conversion_h2dtscpp_transparams.part18.test.ts` | 35 | H2DTSCPP Gen |
| 354 | `conversion_h2dtscpp_transparams.part19.test.ts` | 35 | H2DTSCPP Gen |
| 355 | `conversion_h2dtscpp_transparams.part20.test.ts` | 35 | H2DTSCPP Gen |
| 356 | `conversion_h2dtscpp_transparams.part21.test.ts` | 35 | H2DTSCPP Gen |
| 357 | `conversion_h2dtscpp_transparams.part22.test.ts` | 35 | H2DTSCPP Gen |
| 358 | `conversion_h2dtscpp_transparams.part23.test.ts` | 35 | H2DTSCPP Gen |
| 359 | `conversion_h2dtscpp_transparseobj.part13.test.ts` | 5 | H2DTSCPP Gen |
| 360 | `conversion_h2dtscpp_transparseobj.part14.test.ts` | 35 | H2DTSCPP Gen |
| 361 | `conversion_h2dtscpp_transparseobj.part15.test.ts` | 35 | H2DTSCPP Gen |
| 362 | `conversion_h2dtscpp_transparseobj.part16.test.ts` | 33 | H2DTSCPP Gen |
| 363 | `conversion_h2dtscpp_transparseobj.part17.test.ts` | 33 | H2DTSCPP Gen |
| 364 | `conversion_h2dtscpp_transparseobj.part18.test.ts` | 34 | H2DTSCPP Gen |
| 365 | `conversion_h2dtscpp_transparseobj.part19.test.ts` | 34 | H2DTSCPP Gen |
| 366 | `conversion_h2dtscpp_transparseobj.part20.test.ts` | 35 | H2DTSCPP Gen |
| 367 | `conversion_h2dtscpp_transparseobj.part21.test.ts` | 31 | H2DTSCPP Gen |
| 368 | `conversion_h2dtscpp_transparseobj.part22.test.ts` | 31 | H2DTSCPP Gen |
| 369 | `conversion_h2dtscpp_transparseobj.part23.test.ts` | 29 | H2DTSCPP Gen |
| 370 | `conversion_h2dtscpp_transparseobj.part24.test.ts` | 33 | H2DTSCPP Gen |
| 371 | `conversion_h2dtscpp_transparseobj.part25.test.ts` | 32 | H2DTSCPP Gen |
| 372 | `conversion_h2dtscpp_transparseobj.part26.test.ts` | 34 | H2DTSCPP Gen |
| 373 | `conversion_h2dtscpp_transparseobj.part27.test.ts` | 34 | H2DTSCPP Gen |
| 374 | `conversion_h2dtscpp_transparseobj.part28.test.ts` | 35 | H2DTSCPP Gen |
| 375 | `conversion_h2dtscpp_transparseobj.part29.test.ts` | 34 | H2DTSCPP Gen |
| 376 | `conversion_h2dtscpp_transparseobj.part30.test.ts` | 34 | H2DTSCPP Gen |
| 377 | `conversion_h2dtscpp_transparseobj.part31.test.ts` | 32 | H2DTSCPP Gen |
| 378 | `conversion_h2dtscpp_transparseobj.part32.test.ts` | 9 | H2DTSCPP Gen |
| 379 | `conversion_tsclass.part01.test.ts` | 26 | dts2cpp |
| 380 | `conversion_tsclass.part02.test.ts` | 25 | dts2cpp |
| 381 | `conversion_tsclass.part03a.test.ts` | 39 | dts2cpp |
| 382 | `conversion_tsclass.part03b.test.ts` | 39 | dts2cpp |
| 383 | `conversion_tsclass.part03c.test.ts` | 9 | dts2cpp |
| 384 | `conversion_tsclass.part04a.test.ts` | 39 | dts2cpp |
| 385 | `conversion_tsclass.part04b.test.ts` | 39 | dts2cpp |
| 386 | `conversion_tsclass.part04c.test.ts` | 9 | dts2cpp |
| 387 | `conversion_tsclass.part05a.test.ts` | 31 | dts2cpp |
| 388 | `conversion_tsclass.part05b.test.ts` | 31 | dts2cpp |
| 389 | `conversion_tsclass.part05c.test.ts` | 23 | dts2cpp |
| 390 | `conversion_tsclass.part06.test.ts` | 15 | dts2cpp |
| 391 | `conversion_tsclass.part07.test.ts` | 19 | dts2cpp |
| 392 | `conversion_tsclass.part08.test.ts` | 6 | dts2cpp |
| 393 | `conversion_tsclass.part09.test.ts` | 6 | dts2cpp |
| 394 | `conversion_tsclass.part10.test.ts` | 5 | dts2cpp |
| 395 | `conversion_tsenum.part01.test.ts` | 29 | dts2cpp |
| 396 | `conversion_tsenum.part02.test.ts` | 28 | dts2cpp |
| 397 | `conversion_tsenum.part03a.test.ts` | 38 | dts2cpp |
| 398 | `conversion_tsenum.part03b.test.ts` | 29 | dts2cpp |
| 399 | `conversion_tsenum.part03c.test.ts` | 24 | dts2cpp |
| 400 | `conversion_tsenum.part03d.test.ts` | 4 | dts2cpp |
| 401 | `conversion_tsenum.part04a.test.ts` | 21 | dts2cpp |
| 402 | `conversion_tsenum.part04b.test.ts` | 19 | dts2cpp |
| 403 | `conversion_tsenum.part04c.test.ts` | 17 | dts2cpp |
| 404 | `conversion_tsenum.part04d.test.ts` | 16 | dts2cpp |
| 405 | `conversion_tsenum.part04e.test.ts` | 15 | dts2cpp |
| 406 | `conversion_tsenum.part04f.test.ts` | 7 | dts2cpp |
| 407 | `conversion_tsenum.part05a.test.ts` | 14 | dts2cpp |
| 408 | `conversion_tsenum.part05b.test.ts` | 14 | dts2cpp |
| 409 | `conversion_tsenum.part05c.test.ts` | 13 | dts2cpp |
| 410 | `conversion_tsenum.part05d.test.ts` | 31 | dts2cpp |
| 411 | `conversion_tsenum.part05e.test.ts` | 22 | dts2cpp |
| 412 | `conversion_tsenum.part06.test.ts` | 8 | dts2cpp |
| 413 | `conversion_tsenum.part07.test.ts` | 10 | dts2cpp |
| 414 | `conversion_tsenum.part08.test.ts` | 8 | dts2cpp |
| 415 | `conversion_tsenum.part09.test.ts` | 5 | dts2cpp |
| 416 | `conversion_tsfunc.part01.test.ts` | 35 | dts2cpp |
| 417 | `conversion_tsfunc.part02.test.ts` | 27 | dts2cpp |
| 418 | `conversion_tsfunc.part03.test.ts` | 50 | dts2cpp |
| 419 | `conversion_tsfunc.part04.test.ts` | 50 | dts2cpp |
| 420 | `conversion_tsfunc.part05a.test.ts` | 50 | dts2cpp |
| 421 | `conversion_tsfunc.part05b.test.ts` | 40 | dts2cpp |
| 422 | `conversion_tsfunc.part06a.test.ts` | 48 | dts2cpp |
| 423 | `conversion_tsfunc.part06b.test.ts` | 42 | dts2cpp |
| 424 | `conversion_tsfunc.part07a.test.ts` | 52 | dts2cpp |
| 425 | `conversion_tsfunc.part07b.test.ts` | 38 | dts2cpp |
| 426 | `conversion_tsfunc.part08.test.ts` | 39 | dts2cpp |
| 427 | `conversion_tsfunc.part09.test.ts` | 35 | dts2cpp |
| 428 | `conversion_tsfunc.part10.test.ts` | 35 | dts2cpp |
| 429 | `conversion_tsfunc.part11.test.ts` | 35 | dts2cpp |
| 430 | `conversion_tsfunc.part12.test.ts` | 15 | dts2cpp |
| 431 | `conversion_tsfunc.part13.test.ts` | 35 | dts2cpp |
| 432 | `conversion_tsfunc.part14.test.ts` | 1 | dts2cpp |
| 433 | `conversion_tsfunc.part15.test.ts` | 30 | dts2cpp |
| 434 | `conversion_tsfunc.part16.test.ts` | 1 | dts2cpp |
| 435 | `conversion_tsfunc.part17.test.ts` | 13 | dts2cpp |
| 436 | `conversion_tsfunc.part18.test.ts` | 6 | dts2cpp |
| 437 | `conversion_tsstruct.part01.test.ts` | 24 | dts2cpp |
| 438 | `conversion_tsstruct.part02.test.ts` | 24 | dts2cpp |
| 439 | `conversion_tsstruct.part03a.test.ts` | 39 | dts2cpp |
| 440 | `conversion_tsstruct.part03b.test.ts` | 39 | dts2cpp |
| 441 | `conversion_tsstruct.part03c.test.ts` | 9 | dts2cpp |
| 442 | `conversion_tsstruct.part04a.test.ts` | 39 | dts2cpp |
| 443 | `conversion_tsstruct.part04b.test.ts` | 39 | dts2cpp |
| 444 | `conversion_tsstruct.part04c.test.ts` | 9 | dts2cpp |
| 445 | `conversion_tsstruct.part05a.test.ts` | 31 | dts2cpp |
| 446 | `conversion_tsstruct.part05b.test.ts` | 31 | dts2cpp |
| 447 | `conversion_tsstruct.part05c.test.ts` | 23 | dts2cpp |
| 448 | `conversion_tsstruct.part06.test.ts` | 10 | dts2cpp |
| 449 | `conversion_tsstruct.part07.test.ts` | 15 | dts2cpp |
| 450 | `conversion_tstype.part01.test.ts` | 19 | dts2cpp |
| 451 | `conversion_tstype.part02.test.ts` | 19 | dts2cpp |
| 452 | `conversion_tstype.part03a.test.ts` | 39 | dts2cpp |
| 453 | `conversion_tstype.part03b.test.ts` | 39 | dts2cpp |
| 454 | `conversion_tstype.part03c.test.ts` | 4 | dts2cpp |
| 455 | `conversion_tstype.part04a.test.ts` | 39 | dts2cpp |
| 456 | `conversion_tstype.part04b.test.ts` | 38 | dts2cpp |
| 457 | `conversion_tstype.part04c.test.ts` | 5 | dts2cpp |
| 458 | `conversion_tstype.part05a.test.ts` | 28 | dts2cpp |
| 459 | `conversion_tstype.part05b.test.ts` | 44 | dts2cpp |
| 460 | `conversion_tstype.part05c.test.ts` | 9 | dts2cpp |
| 461 | `conversion_tstype.part06.test.ts` | 10 | dts2cpp |
| 462 | `conversion_tstype.part07.test.ts` | 10 | dts2cpp |
| 463 | `conversion_tstype.part08.test.ts` | 10 | dts2cpp |
| 464 | `conversion_tstype.part09.test.ts` | 15 | dts2cpp |
| 465 | `conversion_tsunion.part01.test.ts` | 30 | dts2cpp |
| 466 | `conversion_tsunion.part02.test.ts` | 30 | dts2cpp |
| 467 | `conversion_tsunion.part03.test.ts` | 29 | dts2cpp |
| 468 | `conversion_tsunion.part04.test.ts` | 30 | dts2cpp |
| 469 | `conversion_tsunion.part05.test.ts` | 31 | dts2cpp |
| 470 | `conversion_tsunion.part06.test.ts` | 35 | dts2cpp |
| 471 | `conversion_tsunion.part07.test.ts` | 25 | dts2cpp |
| 472 | `conversion_tsunion.part08.test.ts` | 50 | dts2cpp |
| 473 | `conversion_tsunion.part09.test.ts` | 50 | dts2cpp |
| 474 | `conversion_tsunion.part10.test.ts` | 50 | dts2cpp |
| 475 | `conversion_tsunion.part11a.test.ts` | 51 | dts2cpp |
| 476 | `conversion_tsunion.part11b.test.ts` | 7 | dts2cpp |
| 477 | `conversion_tsunion.part12a.test.ts` | 54 | dts2cpp |
| 478 | `conversion_tsunion.part12b.test.ts` | 4 | dts2cpp |
| 479 | `conversion_tsunion.part13a.test.ts` | 53 | dts2cpp |
| 480 | `conversion_tsunion.part13b.test.ts` | 5 | dts2cpp |
| 481 | `conversion_tsunion.part14.test.ts` | 15 | dts2cpp |
| 482 | `conversion_tsunion.part15.test.ts` | 5 | dts2cpp |

## 用例逐条映射总表

| 序号 | 测试文件 | 用例名 | 测试类别 | 对应交付指标主归属（2/3/4） | 对应功能（具体交付内容） |
| --- | --- | --- | --- | --- | --- |
| 1 | `conversion_cclass.part01.test.ts` | `c_class_0001` | 性能测试 | 3/4 | h2dts parseClass：class-变量：4 基础类型成员 的解析结果与性能。 |
| 2 | `conversion_cclass.part01.test.ts` | `c_class_0002` | 性能测试 | 3/4 | h2dts parseClass：class-变量：char/long/long long/float 成员 的解析结果与性能。 |
| 3 | `conversion_cclass.part01.test.ts` | `c_class_0003` | 性能测试 | 3/4 | h2dts parseClass：class-变量：unsigned int/short/wchar_t/size_t 成员 的解析结果与性能。 |
| 4 | `conversion_cclass.part01.test.ts` | `c_class_0004` | 性能测试 | 3/4 | h2dts parseClass：class-变量：std::wstring/char16_t/char32_t/long double 成员 的解析结果与性能。 |
| 5 | `conversion_cclass.part01.test.ts` | `c_class_0005` | 性能测试 | 3/4 | h2dts parseClass：class-变量：多维数组/定长数组成员 的解析结果与性能。 |
| 6 | `conversion_cclass.part01.test.ts` | `c_class_0006` | 性能测试 | 3/4 | h2dts parseClass：class-变量：std 容器成员 的解析结果与性能。 |
| 7 | `conversion_cclass.part01.test.ts` | `c_class_0007` | 性能测试 | 3/4 | h2dts parseClass：class-变量：指针成员 的解析结果与性能。 |
| 8 | `conversion_cclass.part01.test.ts` | `c_class_0008` | 性能测试 | 3/4 | h2dts parseClass：class-变量：static 成员×3 的解析结果与性能。 |
| 9 | `conversion_cclass.part01.test.ts` | `c_class_0009` | 性能测试 | 3/4 | h2dts parseClass：class-函数：方法返回/入参组合 的解析结果与性能。 |
| 10 | `conversion_cclass.part01.test.ts` | `c_class_0010` | 性能测试 | 3/4 | h2dts parseClass：class-函数：基础类型方法矩阵 的解析结果与性能。 |
| 11 | `conversion_cclass.part01.test.ts` | `c_class_0011` | 性能测试 | 3/4 | h2dts parseClass：class-函数：数组/容器入参方法 的解析结果与性能。 |
| 12 | `conversion_cclass.part01.test.ts` | `c_class_0012` | 性能测试 | 3/4 | h2dts parseClass：namespace：域内 class（变量+函数） 的解析结果与性能。 |
| 13 | `conversion_cclass.part01.test.ts` | `c_class_0013` | 性能测试 | 3/4 | h2dts parseClass：typedef class：类名+别名 的解析结果与性能。 |
| 14 | `conversion_cclass.part01.test.ts` | `c_class_0014` | 性能测试 | 3/4 | h2dts parseClass：多 class：同文件 2 个 的解析结果与性能。 |
| 15 | `conversion_cclass.part01.test.ts` | `c_class_0015` | 性能测试 | 3/4 | h2dts parseClass：class-函数：含空格签名方法 的解析结果与性能。 |
| 16 | `conversion_cclass.part01.test.ts` | `c_class_0016` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-变量：定宽整型 8 种 + float/double 的解析结果与性能。 |
| 17 | `conversion_cclass.part01.test.ts` | `c_class_0017` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-变量：8 种 std 容器成员 的解析结果与性能。 |
| 18 | `conversion_cclass.part01.test.ts` | `c_class_0018` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-函数：容器/指针入参方法 的解析结果与性能。 |
| 19 | `conversion_cclass.part01.test.ts` | `c_class_0019` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-规模：20 变量 + 5 方法 的解析结果与性能。 |
| 20 | `conversion_cclass.part01.test.ts` | `c_class_0020` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-多声明：同文件 5 个 的解析结果与性能。 |
| 21 | `conversion_cclass.part01.test.ts` | `c_class_0021` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-namespace：两层嵌套 的解析结果与性能。 |
| 22 | `conversion_cclass.part01.test.ts` | `c_class_0022` | 性能测试 | 3/4 | h2dts parseClass：扩充-class：static 成员 + 静态工厂 + typedef 的解析结果与性能。 |
| 23 | `conversion_cclass.part01.test.ts` | `c_class_0023` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-变量：5 种指针成员 的解析结果与性能。 |
| 24 | `conversion_cclass.part01.test.ts` | `c_class_0024` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-变量：数组/容器/多维混合 的解析结果与性能。 |
| 25 | `conversion_cclass.part01.test.ts` | `c_class_0025` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-函数：5 个同型方法 的解析结果与性能。 |
| 26 | `conversion_cclass.part01.test.ts` | `c_class_0026` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-函数：引用/指针参数 的解析结果与性能。 |
| 27 | `conversion_cclass.part01.test.ts` | `c_class_0027` | 性能测试 | 3/4 | h2dts parseClass：扩充-class：全 static 成员与方法 的解析结果与性能。 |
| 28 | `conversion_cclass.part02.test.ts` | `c_class_0028` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（int/char/short/long/long/float 等） 的解析结果与性能。 |
| 29 | `conversion_cclass.part02.test.ts` | `c_class_0029` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（double/bool/unsigned/unsigned/unsigned/unsigned 等） 的解析结果与性能。 |
| 30 | `conversion_cclass.part02.test.ts` | `c_class_0030` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（unsigned/signed/signed/signed/wchar_t/char16_t 等） 的解析结果与性能。 |
| 31 | `conversion_cclass.part02.test.ts` | `c_class_0031` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（char32_t/size_t/int8_t/int16_t/int32_t/int64_t 等） 的解析结果与性能。 |
| 32 | `conversion_cclass.part02.test.ts` | `c_class_0032` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（uint8_t/uint16_t/uint32_t/uint64_t/std::string/string 等） 的解析结果与性能。 |
| 33 | `conversion_cclass.part02.test.ts` | `c_class_0033` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::wstring/long/void/std::vector<int>/std::vector<std::string>/std::vector<double> 等） 的解析结果与性能。 |
| 34 | `conversion_cclass.part02.test.ts` | `c_class_0034` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::vector<bool>/std::map<std::string,int>/std::map<int,std::string>/std::set<int>/std::set<std::string>/std::list<int> 等） 的解析结果与性能。 |
| 35 | `conversion_cclass.part02.test.ts` | `c_class_0035` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::list<std::string>/std::deque<int>/std::deque<std::string>/std::pair<int,int>/std::pair<std::string,int>/std::tuple<int,int,int> 等） 的解析结果与性能。 |
| 36 | `conversion_cclass.part02.test.ts` | `c_class_0036` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::tuple<std::string,int,double>/std::queue<int>/std::stack<int>/std::priority_queue<int>/std::multimap<int,int>/std::multiset<int> 等） 的解析结果与性能。 |
| 37 | `conversion_cclass.part02.test.ts` | `c_class_0037` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::unordered_map<std::string,int>/std::unordered_set<int>/std::unordered_multimap<int,int>/std::unordered_multiset<int>/std::array<int,10>/std::array<std::string,5> 等） 的解析结果与性能。 |
| 38 | `conversion_cclass.part02.test.ts` | `c_class_0038` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::forward_list<int>/std::valarray<double>/std::complex<double>/std::function<int(int,int)>/std::function<void(std::string)>/int 等） 的解析结果与性能。 |
| 39 | `conversion_cclass.part02.test.ts` | `c_class_0039` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（char/short/long/long/float/double 等） 的解析结果与性能。 |
| 40 | `conversion_cclass.part02.test.ts` | `c_class_0040` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（bool/unsigned/unsigned/unsigned/unsigned/unsigned 等） 的解析结果与性能。 |
| 41 | `conversion_cclass.part02.test.ts` | `c_class_0041` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（signed/signed/signed/wchar_t/char16_t/char32_t 等） 的解析结果与性能。 |
| 42 | `conversion_cclass.part02.test.ts` | `c_class_0042` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（size_t/int8_t/int16_t/int32_t/int64_t/uint8_t 等） 的解析结果与性能。 |
| 43 | `conversion_cclass.part02.test.ts` | `c_class_0043` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（uint16_t/uint32_t/uint64_t/std::string/string/std::wstring 等） 的解析结果与性能。 |
| 44 | `conversion_cclass.part02.test.ts` | `c_class_0044` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（long/void/std::vector<int>/std::vector<std::string>/std::vector<double>/std::vector<bool> 等） 的解析结果与性能。 |
| 45 | `conversion_cclass.part02.test.ts` | `c_class_0045` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::map<std::string,int>/std::map<int,std::string>/std::set<int>/std::set<std::string>/std::list<int>/std::list<std::string> 等） 的解析结果与性能。 |
| 46 | `conversion_cclass.part02.test.ts` | `c_class_0046` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::deque<int>/std::deque<std::string>/std::pair<int,int>/std::pair<std::string,int>/std::tuple<int,int,int>/std::tuple<std::string,int,double> 等） 的解析结果与性能。 |
| 47 | `conversion_cclass.part02.test.ts` | `c_class_0047` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::queue<int>/std::stack<int>/std::priority_queue<int>/std::multimap<int,int>/std::multiset<int>/std::unordered_map<std::string,int> 等） 的解析结果与性能。 |
| 48 | `conversion_cclass.part02.test.ts` | `c_class_0048` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::unordered_set<int>/std::unordered_multimap<int,int>/std::unordered_multiset<int>/std::array<int,10>/std::array<std::string,5>/std::forward_list<int> 等） 的解析结果与性能。 |
| 49 | `conversion_cclass.part02.test.ts` | `c_class_0049` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::valarray<double>/std::complex<double>/std::function<int(int,int)>/std::function<void(std::string)>/int/char 等） 的解析结果与性能。 |
| 50 | `conversion_cclass.part02.test.ts` | `c_class_0050` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（short/long/long/float/double/bool 等） 的解析结果与性能。 |
| 51 | `conversion_cclass.part02.test.ts` | `c_class_0051` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（unsigned/unsigned/unsigned/unsigned/unsigned/signed 等） 的解析结果与性能。 |
| 52 | `conversion_cclass.part02.test.ts` | `c_class_0052` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（signed/signed/wchar_t/char16_t/char32_t/size_t 等） 的解析结果与性能。 |
| 53 | `conversion_cclass.part02.test.ts` | `c_class_0053` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（int8_t/int16_t/int32_t/int64_t/uint8_t/uint16_t 等） 的解析结果与性能。 |
| 54 | `conversion_cclass.part02.test.ts` | `c_class_0054` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（uint32_t/uint64_t/std::string/string/std::wstring/long 等） 的解析结果与性能。 |
| 55 | `conversion_cclass.part02.test.ts` | `c_class_0055` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（void/std::vector<int>/std::vector<std::string>/std::vector<double>/std::vector<bool>/std::map<std::string,int> 等） 的解析结果与性能。 |
| 56 | `conversion_cclass.part02.test.ts` | `c_class_0056` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::map<int,std::string>/std::set<int>/std::set<std::string>/std::list<int>/std::list<std::string>/std::deque<int> 等） 的解析结果与性能。 |
| 57 | `conversion_cclass.part02.test.ts` | `c_class_0057` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::deque<std::string>/std::pair<int,int>/std::pair<std::string,int>/std::tuple<int,int,int>/std::tuple<std::string,int,double>/std::queue<int> 等） 的解析结果与性能。 |
| 58 | `conversion_cclass.part02.test.ts` | `c_class_0058` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::stack<int>/std::priority_queue<int>/std::multimap<int,int>/std::multiset<int>/std::unordered_map<std::string,int>/std::unordered_set<int> 等） 的解析结果与性能。 |
| 59 | `conversion_cclass.part02.test.ts` | `c_class_0059` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::unordered_multimap<int,int>/std::unordered_multiset<int>/std::array<int,10>/std::array<std::string,5>/std::forward_list<int>/std::valarray<double> 等） 的解析结果与性能。 |
| 60 | `conversion_cclass.part02.test.ts` | `c_class_0060` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::complex<double>/std::function<int(int,int)>/std::function<void(std::string)>/int/char/short 等） 的解析结果与性能。 |
| 61 | `conversion_cclass.part02.test.ts` | `c_class_0061` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（long/long/float/double/bool/unsigned 等） 的解析结果与性能。 |
| 62 | `conversion_cclass.part02.test.ts` | `c_class_0062` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（unsigned/unsigned/unsigned/unsigned/signed/signed 等） 的解析结果与性能。 |
| 63 | `conversion_cclass.part02.test.ts` | `c_class_0063` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（signed/wchar_t/char16_t/char32_t/size_t/int8_t 等） 的解析结果与性能。 |
| 64 | `conversion_cclass.part02.test.ts` | `c_class_0064` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（int16_t/int32_t/int64_t/uint8_t/uint16_t/uint32_t 等） 的解析结果与性能。 |
| 65 | `conversion_cclass.part03.test.ts` | `c_class_0065` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（uint64_t/std::string/string/std::wstring/long/void 等） 的解析结果与性能。 |
| 66 | `conversion_cclass.part03.test.ts` | `c_class_0066` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::vector<int>/std::vector<std::string>/std::vector<double>/std::vector<bool>/std::map<std::string,int>/std::map<int,std::string> 等） 的解析结果与性能。 |
| 67 | `conversion_cclass.part03.test.ts` | `c_class_0067` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::set<int>/std::set<std::string>/std::list<int>/std::list<std::string>/std::deque<int>/std::deque<std::string> 等） 的解析结果与性能。 |
| 68 | `conversion_cclass.part03.test.ts` | `c_class_0068` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::pair<int,int>/std::pair<std::string,int>/std::tuple<int,int,int>/std::tuple<std::string,int,double>/std::queue<int>/std::stack<int> 等） 的解析结果与性能。 |
| 69 | `conversion_cclass.part03.test.ts` | `c_class_0069` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::priority_queue<int>/std::multimap<int,int>/std::multiset<int>/std::unordered_map<std::string,int>/std::unordered_set<int>/std::unordered_multimap<int,int> 等） 的解析结果与性能。 |
| 70 | `conversion_cclass.part03.test.ts` | `c_class_0070` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::unordered_multiset<int>/std::array<int,10>/std::array<std::string,5>/std::forward_list<int>/std::valarray<double>/std::complex<double> 等） 的解析结果与性能。 |
| 71 | `conversion_cclass.part03.test.ts` | `c_class_0071` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::function<int(int,int)>/std::function<void(std::string)>/int/char/short/long 等） 的解析结果与性能。 |
| 72 | `conversion_cclass.part03.test.ts` | `c_class_0072` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（long/float/double/bool/unsigned/unsigned 等） 的解析结果与性能。 |
| 73 | `conversion_cclass.part03.test.ts` | `c_class_0073` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（unsigned/unsigned/unsigned/signed/signed/signed 等） 的解析结果与性能。 |
| 74 | `conversion_cclass.part03.test.ts` | `c_class_0074` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（wchar_t/char16_t/char32_t/size_t/int8_t/int16_t 等） 的解析结果与性能。 |
| 75 | `conversion_cclass.part03.test.ts` | `c_class_0075` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（int32_t/int64_t/uint8_t/uint16_t/uint32_t/uint64_t 等） 的解析结果与性能。 |
| 76 | `conversion_cclass.part03.test.ts` | `c_class_0076` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::string/string/std::wstring/long/void/std::vector<int> 等） 的解析结果与性能。 |
| 77 | `conversion_cclass.part03.test.ts` | `c_class_0077` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::vector<std::string>/std::vector<double>/std::vector<bool>/std::map<std::string,int>/std::map<int,std::string>/std::set<int> 等） 的解析结果与性能。 |
| 78 | `conversion_cclass.part03.test.ts` | `c_class_0078` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::set<std::string>/std::list<int>/std::list<std::string>/std::deque<int>/std::deque<std::string>/std::pair<int,int> 等） 的解析结果与性能。 |
| 79 | `conversion_cclass.part03.test.ts` | `c_class_0079` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::pair<std::string,int>/std::tuple<int,int,int>/std::tuple<std::string,int,double>/std::queue<int>/std::stack<int>/std::priority_queue<int> 等） 的解析结果与性能。 |
| 80 | `conversion_cclass.part03.test.ts` | `c_class_0080` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::multimap<int,int>/std::multiset<int>/std::unordered_map<std::string,int>/std::unordered_set<int>/std::unordered_multimap<int,int>/std::unordered_multiset<int> 等） 的解析结果与性能。 |
| 81 | `conversion_cclass.part03.test.ts` | `c_class_0081` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::array<int,10>/std::array<std::string,5>/std::forward_list<int>/std::valarray<double>/std::complex<double>/std::function<int(int,int)> 等） 的解析结果与性能。 |
| 82 | `conversion_cclass.part03.test.ts` | `c_class_0082` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::function<void(std::string)>/int/char/short/long/long 等） 的解析结果与性能。 |
| 83 | `conversion_cclass.part03.test.ts` | `c_class_0083` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（float/double/bool/unsigned/unsigned/unsigned 等） 的解析结果与性能。 |
| 84 | `conversion_cclass.part03.test.ts` | `c_class_0084` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（unsigned/unsigned/signed/signed/signed/wchar_t 等） 的解析结果与性能。 |
| 85 | `conversion_cclass.part03.test.ts` | `c_class_0085` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（char16_t/char32_t/size_t/int8_t/int16_t/int32_t 等） 的解析结果与性能。 |
| 86 | `conversion_cclass.part03.test.ts` | `c_class_0086` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（int64_t/uint8_t/uint16_t/uint32_t/uint64_t/std::string 等） 的解析结果与性能。 |
| 87 | `conversion_cclass.part03.test.ts` | `c_class_0087` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（string/std::wstring/long/void/std::vector<int>/std::vector<std::string> 等） 的解析结果与性能。 |
| 88 | `conversion_cclass.part03.test.ts` | `c_class_0088` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 89 | `conversion_cclass.part03.test.ts` | `c_class_0089` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 90 | `conversion_cclass.part03.test.ts` | `c_class_0090` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 91 | `conversion_cclass.part03.test.ts` | `c_class_0091` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 92 | `conversion_cclass.part03.test.ts` | `c_class_0092` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 93 | `conversion_cclass.part03.test.ts` | `c_class_0093` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 94 | `conversion_cclass.part03.test.ts` | `c_class_0094` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 95 | `conversion_cclass.part03.test.ts` | `c_class_0095` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 96 | `conversion_cclass.part03.test.ts` | `c_class_0096` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 97 | `conversion_cclass.part03.test.ts` | `c_class_0097` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 98 | `conversion_cclass.part03.test.ts` | `c_class_0098` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 99 | `conversion_cclass.part03.test.ts` | `c_class_0099` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 100 | `conversion_cclass.part03.test.ts` | `c_class_0100` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 101 | `conversion_cclass.part03.test.ts` | `c_class_0101` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 102 | `conversion_cclass.part04.test.ts` | `c_class_0102` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 103 | `conversion_cclass.part04.test.ts` | `c_class_0103` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 104 | `conversion_cclass.part04.test.ts` | `c_class_0104` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 105 | `conversion_cclass.part04.test.ts` | `c_class_0105` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 106 | `conversion_cclass.part04.test.ts` | `c_class_0106` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 107 | `conversion_cclass.part04.test.ts` | `c_class_0107` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 108 | `conversion_cclass.part04.test.ts` | `c_class_0108` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 109 | `conversion_cclass.part04.test.ts` | `c_class_0109` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 110 | `conversion_cclass.part04.test.ts` | `c_class_0110` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 111 | `conversion_cclass.part04.test.ts` | `c_class_0111` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 112 | `conversion_cclass.part04.test.ts` | `c_class_0112` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 113 | `conversion_cclass.part04.test.ts` | `c_class_0113` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 114 | `conversion_cclass.part04.test.ts` | `c_class_0114` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 115 | `conversion_cclass.part04.test.ts` | `c_class_0115` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 116 | `conversion_cclass.part04.test.ts` | `c_class_0116` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 117 | `conversion_cclass.part04.test.ts` | `c_class_0117` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 118 | `conversion_cclass.part04.test.ts` | `c_class_0118` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 119 | `conversion_cclass.part04.test.ts` | `c_class_0119` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 120 | `conversion_cclass.part04.test.ts` | `c_class_0120` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 121 | `conversion_cclass.part04.test.ts` | `c_class_0121` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 122 | `conversion_cclass.part04.test.ts` | `c_class_0122` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 123 | `conversion_cclass.part04.test.ts` | `c_class_0123` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 124 | `conversion_cclass.part04.test.ts` | `c_class_0124` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 125 | `conversion_cclass.part04.test.ts` | `c_class_0125` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 126 | `conversion_cclass.part04.test.ts` | `c_class_0126` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 127 | `conversion_cclass.part04.test.ts` | `c_class_0127` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 128 | `conversion_cclass.part04.test.ts` | `c_class_0128` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 129 | `conversion_cclass.part04.test.ts` | `c_class_0129` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 130 | `conversion_cclass.part04.test.ts` | `c_class_0130` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 131 | `conversion_cclass.part04.test.ts` | `c_class_0131` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 132 | `conversion_cclass.part04.test.ts` | `c_class_0132` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 133 | `conversion_cclass.part04.test.ts` | `c_class_0133` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 134 | `conversion_cclass.part04.test.ts` | `c_class_0134` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 135 | `conversion_cclass.part04.test.ts` | `c_class_0135` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 136 | `conversion_cclass.part04.test.ts` | `c_class_0136` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 137 | `conversion_cclass.part04.test.ts` | `c_class_0137` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 138 | `conversion_cclass.part05.test.ts` | `c_class_0138` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 139 | `conversion_cclass.part05.test.ts` | `c_class_0139` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 140 | `conversion_cclass.part05.test.ts` | `c_class_0140` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 141 | `conversion_cclass.part05.test.ts` | `c_class_0141` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 142 | `conversion_cclass.part05.test.ts` | `c_class_0142` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 143 | `conversion_cclass.part05.test.ts` | `c_class_0143` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 144 | `conversion_cclass.part05.test.ts` | `c_class_0144` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 145 | `conversion_cclass.part05.test.ts` | `c_class_0145` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 146 | `conversion_cclass.part05.test.ts` | `c_class_0146` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 147 | `conversion_cclass.part05.test.ts` | `c_class_0147` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 148 | `conversion_cclass.part05.test.ts` | `c_class_0148` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 149 | `conversion_cclass.part05.test.ts` | `c_class_0149` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 150 | `conversion_cclass.part05.test.ts` | `c_class_0150` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 151 | `conversion_cclass.part05.test.ts` | `c_class_0151` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 152 | `conversion_cclass.part05.test.ts` | `c_class_0152` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 153 | `conversion_cclass.part05.test.ts` | `c_class_0153` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 154 | `conversion_cclass.part05.test.ts` | `c_class_0154` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 155 | `conversion_cclass.part05.test.ts` | `c_class_0155` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 156 | `conversion_cclass.part05.test.ts` | `c_class_0156` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 157 | `conversion_cclass.part05.test.ts` | `c_class_0157` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 158 | `conversion_cclass.part05.test.ts` | `c_class_0158` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 159 | `conversion_cclass.part05.test.ts` | `c_class_0159` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 160 | `conversion_cclass.part05.test.ts` | `c_class_0160` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 161 | `conversion_cclass.part05.test.ts` | `c_class_0161` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 162 | `conversion_cclass.part05.test.ts` | `c_class_0162` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 163 | `conversion_cclass.part05.test.ts` | `c_class_0163` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 164 | `conversion_cclass.part05.test.ts` | `c_class_0164` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 165 | `conversion_cclass.part05.test.ts` | `c_class_0165` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 166 | `conversion_cclass.part05.test.ts` | `c_class_0166` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 167 | `conversion_cclass.part05.test.ts` | `c_class_0167` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 168 | `conversion_cclass.part05.test.ts` | `c_class_0168` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：5 成员 的解析结果与性能。 |
| 169 | `conversion_cclass.part06.test.ts` | `c_class_0169` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：10 成员 的解析结果与性能。 |
| 170 | `conversion_cclass.part06.test.ts` | `c_class_0170` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：15 成员 的解析结果与性能。 |
| 171 | `conversion_cclass.part06.test.ts` | `c_class_0171` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：20 成员 的解析结果与性能。 |
| 172 | `conversion_cclass.part06.test.ts` | `c_class_0172` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：25 成员 的解析结果与性能。 |
| 173 | `conversion_cclass.part06.test.ts` | `c_class_0173` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：30 成员 的解析结果与性能。 |
| 174 | `conversion_cclass.part06.test.ts` | `c_class_0174` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：35 成员 的解析结果与性能。 |
| 175 | `conversion_cclass.part06.test.ts` | `c_class_0175` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：40 成员 的解析结果与性能。 |
| 176 | `conversion_cclass.part06.test.ts` | `c_class_0176` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：45 成员 的解析结果与性能。 |
| 177 | `conversion_cclass.part06.test.ts` | `c_class_0177` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：50 成员 的解析结果与性能。 |
| 178 | `conversion_cclass.part06.test.ts` | `c_class_0178` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：55 成员 的解析结果与性能。 |
| 179 | `conversion_cclass.part06.test.ts` | `c_class_0179` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：60 成员 的解析结果与性能。 |
| 180 | `conversion_cclass.part06.test.ts` | `c_class_0180` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：65 成员 的解析结果与性能。 |
| 181 | `conversion_cclass.part07.test.ts` | `c_class_0181` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：70 成员 的解析结果与性能。 |
| 182 | `conversion_cclass.part07.test.ts` | `c_class_0182` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：75 成员 的解析结果与性能。 |
| 183 | `conversion_cclass.part07.test.ts` | `c_class_0183` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 2 个 的解析结果与性能。 |
| 184 | `conversion_cclass.part07.test.ts` | `c_class_0184` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 3 个 的解析结果与性能。 |
| 185 | `conversion_cclass.part07.test.ts` | `c_class_0185` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 4 个 的解析结果与性能。 |
| 186 | `conversion_cclass.part07.test.ts` | `c_class_0186` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 5 个 的解析结果与性能。 |
| 187 | `conversion_cclass.part07.test.ts` | `c_class_0187` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 6 个 的解析结果与性能。 |
| 188 | `conversion_cclass.part07.test.ts` | `c_class_0188` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 7 个 的解析结果与性能。 |
| 189 | `conversion_cclass.part07.test.ts` | `c_class_0189` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 8 个 的解析结果与性能。 |
| 190 | `conversion_cclass.part07.test.ts` | `c_class_0190` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 10 个 的解析结果与性能。 |
| 191 | `conversion_cclass.part07.test.ts` | `c_class_0191` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 12 个 的解析结果与性能。 |
| 192 | `conversion_cclass.part07.test.ts` | `c_class_0192` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 15 个 的解析结果与性能。 |
| 193 | `conversion_cclass.part07.test.ts` | `c_class_0193` | 性能测试 | 3/4 | h2dts parseClass：扩充-typedef class 别名 的解析结果与性能。 |
| 194 | `conversion_cclass.part07.test.ts` | `c_class_0194` | 性能测试 | 3/4 | h2dts parseClass：扩充-static 成员/方法 的解析结果与性能。 |
| 195 | `conversion_cclass.part07.test.ts` | `c_class_0195` | 性能测试 | 3/4 | h2dts parseClass：扩充-namespace 内 class 的解析结果与性能。 |
| 196 | `conversion_cclass.part07.test.ts` | `c_class_0196` | 性能测试 | 3/4 | h2dts parseClass：扩充-typedef class 别名 的解析结果与性能。 |
| 197 | `conversion_cclass.part07.test.ts` | `c_class_0197` | 性能测试 | 3/4 | h2dts parseClass：扩充-static 成员/方法 的解析结果与性能。 |
| 198 | `conversion_cclass.part07.test.ts` | `c_class_0198` | 性能测试 | 3/4 | h2dts parseClass：扩充-namespace 内 class 的解析结果与性能。 |
| 199 | `conversion_cclass.part07.test.ts` | `c_class_0199` | 性能测试 | 3/4 | h2dts parseClass：扩充-typedef class 别名 的解析结果与性能。 |
| 200 | `conversion_cclass.part07.test.ts` | `c_class_0200` | 性能测试 | 3/4 | h2dts parseClass：扩充-static 成员/方法 的解析结果与性能。 |
| 201 | `conversion_cclass.part07.test.ts` | `c_class_0201` | 性能测试 | 3/4 | h2dts parseClass：扩充-namespace 内 class 的解析结果与性能。 |
| 202 | `conversion_cclass.part07.test.ts` | `c_class_0202` | 性能测试 | 3/4 | h2dts parseClass：扩充-typedef class 别名 的解析结果与性能。 |
| 203 | `conversion_cclass.part07.test.ts` | `c_class_0203` | 性能测试 | 3/4 | h2dts parseClass：扩充-static 成员/方法 的解析结果与性能。 |
| 204 | `conversion_cclass.part07.test.ts` | `c_class_0204` | 性能测试 | 3/4 | h2dts parseClass：扩充-namespace 内 class 的解析结果与性能。 |
| 205 | `conversion_cclass.part07.test.ts` | `c_class_0205` | 性能测试 | 3/4 | h2dts parseClass：扩充-typedef class 别名 的解析结果与性能。 |
| 206 | `conversion_cclass.part07.test.ts` | `c_class_0206` | 性能测试 | 3/4 | h2dts parseClass：扩充-static 成员/方法 的解析结果与性能。 |
| 207 | `conversion_cclass.part07.test.ts` | `c_class_0207` | 性能测试 | 3/4 | h2dts parseClass：扩充-namespace 内 class 的解析结果与性能。 |
| 208 | `conversion_cclass.part08.test.ts` | `c_class_0208` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Alpha0 的解析结果与性能。 |
| 209 | `conversion_cclass.part08.test.ts` | `c_class_0209` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Beta1 的解析结果与性能。 |
| 210 | `conversion_cclass.part08.test.ts` | `c_class_0210` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Gamma2 的解析结果与性能。 |
| 211 | `conversion_cclass.part08.test.ts` | `c_class_0211` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Delta3 的解析结果与性能。 |
| 212 | `conversion_cclass.part08.test.ts` | `c_class_0212` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Epsilon4 的解析结果与性能。 |
| 213 | `conversion_cclass.part08.test.ts` | `c_class_0213` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Zeta5 的解析结果与性能。 |
| 214 | `conversion_cclass.part08.test.ts` | `c_class_0214` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Eta6 的解析结果与性能。 |
| 215 | `conversion_cclass.part08.test.ts` | `c_class_0215` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Theta7 的解析结果与性能。 |
| 216 | `conversion_cclass.part08.test.ts` | `c_class_0216` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Iota8 的解析结果与性能。 |
| 217 | `conversion_cclass.part08.test.ts` | `c_class_0217` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Kappa9 的解析结果与性能。 |
| 218 | `conversion_cclass.part08.test.ts` | `c_class_0218` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Lambda10 的解析结果与性能。 |
| 219 | `conversion_cclass.part08.test.ts` | `c_class_0219` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Mu11 的解析结果与性能。 |
| 220 | `conversion_cclass.part08.test.ts` | `c_class_0220` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Nu12 的解析结果与性能。 |
| 221 | `conversion_cclass.part08.test.ts` | `c_class_0221` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Xi13 的解析结果与性能。 |
| 222 | `conversion_cclass.part08.test.ts` | `c_class_0222` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Omicron14 的解析结果与性能。 |
| 223 | `conversion_cclass.part08.test.ts` | `c_class_0223` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Pi15 的解析结果与性能。 |
