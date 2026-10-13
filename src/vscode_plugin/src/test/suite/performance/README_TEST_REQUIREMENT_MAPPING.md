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
| 224 | `conversion_cclass.part08.test.ts` | `c_class_0224` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Rho16 的解析结果与性能。 |
| 225 | `conversion_cclass.part08.test.ts` | `c_class_0225` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Sigma17 的解析结果与性能。 |
| 226 | `conversion_cclass.part08.test.ts` | `c_class_0226` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Tau18 的解析结果与性能。 |
| 227 | `conversion_cclass.part08.test.ts` | `c_class_0227` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Upsilon19 的解析结果与性能。 |
| 228 | `conversion_cclass.part08.test.ts` | `c_class_0228` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：空类 的解析结果与性能。 |
| 229 | `conversion_cclass.part08.test.ts` | `c_class_0229` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：单行类 的解析结果与性能。 |
| 230 | `conversion_cclass.part08.test.ts` | `c_class_0230` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：注释类 的解析结果与性能。 |
| 231 | `conversion_cclass.part08.test.ts` | `c_class_0231` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：索引成员 的解析结果与性能。 |
| 232 | `conversion_cclass.part08.test.ts` | `c_class_0232` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：私有公有 的解析结果与性能。 |
| 233 | `conversion_cclass.part08.test.ts` | `c_class_0233` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：嵌套方法参数 的解析结果与性能。 |
| 234 | `conversion_cclass.part08.test.ts` | `c_class_0234` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：三方法 的解析结果与性能。 |
| 235 | `conversion_cclass.part08.test.ts` | `c_class_0235` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：混合成员 的解析结果与性能。 |
| 236 | `conversion_cclass.part08.test.ts` | `c_class_0236` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：多数组 的解析结果与性能。 |
| 237 | `conversion_cclass.part08.test.ts` | `c_class_0237` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：引用成员方法 的解析结果与性能。 |
| 238 | `conversion_cclass.part09.test.ts` | `c_class_0238` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 239 | `conversion_cclass.part09.test.ts` | `c_class_0239` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 240 | `conversion_cclass.part09.test.ts` | `c_class_0240` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 241 | `conversion_cclass.part09.test.ts` | `c_class_0241` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 242 | `conversion_cclass.part09.test.ts` | `c_class_0242` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 243 | `conversion_cclass.part09.test.ts` | `c_class_0243` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 244 | `conversion_cclass.part09.test.ts` | `c_class_0244` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 245 | `conversion_cclass.part09.test.ts` | `c_class_0245` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 246 | `conversion_cclass.part09.test.ts` | `c_class_0246` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 247 | `conversion_cclass.part09.test.ts` | `c_class_0247` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 248 | `conversion_cclass.part10.test.ts` | `c_class_0248` | 性能测试 | 3/4 | : h2dts parseClass：扩充-virtual 纯虚函数 的解析结果与性能。 |
| 249 | `conversion_cclass.part10.test.ts` | `c_class_0249` | 性能测试 | 3/4 | : h2dts parseClass：扩充-explicit 构造函数 的解析结果与性能。 |
| 250 | `conversion_cclass.part10.test.ts` | `c_class_0250` | 性能测试 | 3/4 | : h2dts parseClass：扩充-vector iterator 成员 的解析结果与性能。 |
| 251 | `conversion_cclass.part10.test.ts` | `c_class_0251` | 性能测试 | 3/4 | : h2dts parseClass：扩充-static 工厂方法 的解析结果与性能。 |
| 252 | `conversion_cclass.part11.test.ts` | `c_class_0252` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R2-friend 声明 的解析结果与性能。 |
| 253 | `conversion_cclass.part11.test.ts` | `c_class_0253` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R2-const 方法 的解析结果与性能。 |
| 254 | `conversion_cclass.part11.test.ts` | `c_class_0254` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R2-三容器成员 的解析结果与性能。 |
| 255 | `conversion_cclass.part11.test.ts` | `c_class_0255` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R2-多继承 的解析结果与性能。 |
| 256 | `conversion_cclass.part11.test.ts` | `c_class_0256` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R2-运算符重载 的解析结果与性能。 |
| 257 | `conversion_cclass.part12.test.ts` | `c_class_0257` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R3-抽象类 的解析结果与性能。 |
| 258 | `conversion_cclass.part12.test.ts` | `c_class_0258` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R3-嵌套类 的解析结果与性能。 |
| 259 | `conversion_cclass.part13.test.ts` | `c_class_0259` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R3-抽象类 的解析结果与性能。 |
| 260 | `conversion_cclass.part13.test.ts` | `c_class_0260` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R3-嵌套类 的解析结果与性能。 |
| 261 | `conversion_cclass.part14.test.ts` | `c_class_0261` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R4-Service 类 的解析结果与性能。 |
| 262 | `conversion_cclass.part14.test.ts` | `c_class_0262` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R4-Buffer 类 的解析结果与性能。 |
| 263 | `conversion_cclass.part14.test.ts` | `c_class_0263` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R4-Pair 类 的解析结果与性能。 |
| 264 | `conversion_cclass.part15.test.ts` | `c_class_0264` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R5-链表节点 class 的解析结果与性能。 |
| 265 | `conversion_cclass.part15.test.ts` | `c_class_0265` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R5-配置 class 的解析结果与性能。 |
| 266 | `conversion_cclass.part15.test.ts` | `c_class_0266` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R5-计时器 class 的解析结果与性能。 |
| 267 | `conversion_cclass.part16.test.ts` | `c_class_0267` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R5-链表节点 class 的解析结果与性能。 |
| 268 | `conversion_cclass.part16.test.ts` | `c_class_0268` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R5-配置 class 的解析结果与性能。 |
| 269 | `conversion_cclass.part16.test.ts` | `c_class_0269` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R5-计时器 class 的解析结果与性能。 |
| 270 | `conversion_cclass.part17.test.ts` | `c_class_0270` | 性能测试 | 3/4 | : h2dts parseClass：扩充-R2-运算符重载 的解析结果与性能。 |
| 271 | `conversion_cenum.part01.test.ts` | `c_enum_0001` | 性能测试 | 3/4 | h2dts parseEnum：enum：typedef 基本 的解析结果与性能。 |
| 272 | `conversion_cenum.part01.test.ts` | `c_enum_0002` | 性能测试 | 3/4 | h2dts parseEnum：enum：具名基本 的解析结果与性能。 |
| 273 | `conversion_cenum.part01.test.ts` | `c_enum_0003` | 性能测试 | 3/4 | h2dts parseEnum：enum：带值 + 别名 的解析结果与性能。 |
| 274 | `conversion_cenum.part01.test.ts` | `c_enum_0004` | 性能测试 | 3/4 | h2dts parseEnum：enum：多值 HTTP 状态 的解析结果与性能。 |
| 275 | `conversion_cenum.part01.test.ts` | `c_enum_0005` | 性能测试 | 3/4 | h2dts parseEnum：enum：10 成员 的解析结果与性能。 |
| 276 | `conversion_cenum.part01.test.ts` | `c_enum_0006` | 性能测试 | 3/4 | h2dts parseEnum：enum：20 成员（规模） 的解析结果与性能。 |
| 277 | `conversion_cenum.part01.test.ts` | `c_enum_0007` | 性能测试 | 3/4 | h2dts parseEnum：enum：方向枚举 的解析结果与性能。 |
| 278 | `conversion_cenum.part01.test.ts` | `c_enum_0008` | 性能测试 | 3/4 | h2dts parseEnum：namespace：域内 enum 的解析结果与性能。 |
| 279 | `conversion_cenum.part01.test.ts` | `c_enum_0009` | 性能测试 | 3/4 | h2dts parseEnum：多 enum：同文件 2 个 的解析结果与性能。 |
| 280 | `conversion_cenum.part01.test.ts` | `c_enum_0010` | 性能测试 | 3/4 | h2dts parseEnum：enum：性别枚举 的解析结果与性能。 |
| 281 | `conversion_cenum.part01.test.ts` | `c_enum_0011` | 性能测试 | 3/4 | h2dts parseEnum：enum：状态枚举 的解析结果与性能。 |
| 282 | `conversion_cenum.part01.test.ts` | `c_enum_0012` | 性能测试 | 3/4 | h2dts parseEnum：enum：位运算值 的解析结果与性能。 |
| 283 | `conversion_cenum.part01.test.ts` | `c_enum_0013` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：30 成员 的解析结果与性能。 |
| 284 | `conversion_cenum.part01.test.ts` | `c_enum_0014` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：50 成员（规模） 的解析结果与性能。 |
| 285 | `conversion_cenum.part01.test.ts` | `c_enum_0015` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：十六进制值 的解析结果与性能。 |
| 286 | `conversion_cenum.part01.test.ts` | `c_enum_0016` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：负数值 的解析结果与性能。 |
| 287 | `conversion_cenum.part01.test.ts` | `c_enum_0017` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：字符值 的解析结果与性能。 |
| 288 | `conversion_cenum.part01.test.ts` | `c_enum_0018` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum-多声明：同文件 4 个 的解析结果与性能。 |
| 289 | `conversion_cenum.part01.test.ts` | `c_enum_0019` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：3 个带别名带值 的解析结果与性能。 |
| 290 | `conversion_cenum.part01.test.ts` | `c_enum_0020` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：注释 + 尾逗号 的解析结果与性能。 |
| 291 | `conversion_cenum.part01.test.ts` | `c_enum_0021` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：数字/字符串混合值 的解析结果与性能。 |
| 292 | `conversion_cenum.part01.test.ts` | `c_enum_0022` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum-namespace：域内 2 个 enum 的解析结果与性能。 |
| 293 | `conversion_cenum.part01.test.ts` | `c_enum_0023` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：5 位运算值 的解析结果与性能。 |
| 294 | `conversion_cenum.part01.test.ts` | `c_enum_0024` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：布尔语义值 的解析结果与性能。 |
| 295 | `conversion_cenum.part01.test.ts` | `c_enum_0025` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：星期枚举 + 别名 的解析结果与性能。 |
| 296 | `conversion_cenum.part01.test.ts` | `c_enum_0026` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：方位枚举 的解析结果与性能。 |
| 297 | `conversion_cenum.part01.test.ts` | `c_enum_0027` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：具名无 typedef 的解析结果与性能。 |
| 298 | `conversion_cenum.part02.test.ts` | `c_enum_0028` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：2 成员（无赋值） 的解析结果与性能。 |
| 299 | `conversion_cenum.part02.test.ts` | `c_enum_0029` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：2 成员（数字赋值） 的解析结果与性能。 |
| 300 | `conversion_cenum.part02.test.ts` | `c_enum_0030` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：2 成员（字符串赋值） 的解析结果与性能。 |
| 301 | `conversion_cenum.part02.test.ts` | `c_enum_0031` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：2 成员（十六进制赋值） 的解析结果与性能。 |
| 302 | `conversion_cenum.part02.test.ts` | `c_enum_0032` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：3 成员（无赋值） 的解析结果与性能。 |
| 303 | `conversion_cenum.part02.test.ts` | `c_enum_0033` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：3 成员（数字赋值） 的解析结果与性能。 |
| 304 | `conversion_cenum.part02.test.ts` | `c_enum_0034` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：3 成员（字符串赋值） 的解析结果与性能。 |
| 305 | `conversion_cenum.part02.test.ts` | `c_enum_0035` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：3 成员（十六进制赋值） 的解析结果与性能。 |
| 306 | `conversion_cenum.part02.test.ts` | `c_enum_0036` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：4 成员（无赋值） 的解析结果与性能。 |
| 307 | `conversion_cenum.part02.test.ts` | `c_enum_0037` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：4 成员（数字赋值） 的解析结果与性能。 |
| 308 | `conversion_cenum.part02.test.ts` | `c_enum_0038` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：4 成员（字符串赋值） 的解析结果与性能。 |
| 309 | `conversion_cenum.part02.test.ts` | `c_enum_0039` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：4 成员（十六进制赋值） 的解析结果与性能。 |
| 310 | `conversion_cenum.part02.test.ts` | `c_enum_0040` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：5 成员（无赋值） 的解析结果与性能。 |
| 311 | `conversion_cenum.part02.test.ts` | `c_enum_0041` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：5 成员（数字赋值） 的解析结果与性能。 |
| 312 | `conversion_cenum.part02.test.ts` | `c_enum_0042` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：5 成员（字符串赋值） 的解析结果与性能。 |
| 313 | `conversion_cenum.part02.test.ts` | `c_enum_0043` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：5 成员（十六进制赋值） 的解析结果与性能。 |
| 314 | `conversion_cenum.part02.test.ts` | `c_enum_0044` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：6 成员（无赋值） 的解析结果与性能。 |
| 315 | `conversion_cenum.part02.test.ts` | `c_enum_0045` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：6 成员（数字赋值） 的解析结果与性能。 |
| 316 | `conversion_cenum.part02.test.ts` | `c_enum_0046` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：6 成员（字符串赋值） 的解析结果与性能。 |
| 317 | `conversion_cenum.part02.test.ts` | `c_enum_0047` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：6 成员（十六进制赋值） 的解析结果与性能。 |
| 318 | `conversion_cenum.part02.test.ts` | `c_enum_0048` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：7 成员（无赋值） 的解析结果与性能。 |
| 319 | `conversion_cenum.part02.test.ts` | `c_enum_0049` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：7 成员（数字赋值） 的解析结果与性能。 |
| 320 | `conversion_cenum.part02.test.ts` | `c_enum_0050` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：7 成员（字符串赋值） 的解析结果与性能。 |
| 321 | `conversion_cenum.part02.test.ts` | `c_enum_0051` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：7 成员（十六进制赋值） 的解析结果与性能。 |
| 322 | `conversion_cenum.part02.test.ts` | `c_enum_0052` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：8 成员（无赋值） 的解析结果与性能。 |
| 323 | `conversion_cenum.part02.test.ts` | `c_enum_0053` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：8 成员（数字赋值） 的解析结果与性能。 |
| 324 | `conversion_cenum.part02.test.ts` | `c_enum_0054` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：8 成员（字符串赋值） 的解析结果与性能。 |
| 325 | `conversion_cenum.part02.test.ts` | `c_enum_0055` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：8 成员（十六进制赋值） 的解析结果与性能。 |
| 326 | `conversion_cenum.part02.test.ts` | `c_enum_0056` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：9 成员（无赋值） 的解析结果与性能。 |
| 327 | `conversion_cenum.part02.test.ts` | `c_enum_0057` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：9 成员（数字赋值） 的解析结果与性能。 |
| 328 | `conversion_cenum.part02.test.ts` | `c_enum_0058` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：9 成员（字符串赋值） 的解析结果与性能。 |
| 329 | `conversion_cenum.part02.test.ts` | `c_enum_0059` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：9 成员（十六进制赋值） 的解析结果与性能。 |
| 330 | `conversion_cenum.part02.test.ts` | `c_enum_0060` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：10 成员（无赋值） 的解析结果与性能。 |
| 331 | `conversion_cenum.part02.test.ts` | `c_enum_0061` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：10 成员（数字赋值） 的解析结果与性能。 |
| 332 | `conversion_cenum.part02.test.ts` | `c_enum_0062` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：10 成员（字符串赋值） 的解析结果与性能。 |
| 333 | `conversion_cenum.part02.test.ts` | `c_enum_0063` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：10 成员（十六进制赋值） 的解析结果与性能。 |
| 334 | `conversion_cenum.part02.test.ts` | `c_enum_0064` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：11 成员（无赋值） 的解析结果与性能。 |
| 335 | `conversion_cenum.part02.test.ts` | `c_enum_0065` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：11 成员（数字赋值） 的解析结果与性能。 |
| 336 | `conversion_cenum.part02.test.ts` | `c_enum_0066` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：11 成员（字符串赋值） 的解析结果与性能。 |
| 337 | `conversion_cenum.part02.test.ts` | `c_enum_0067` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：11 成员（十六进制赋值） 的解析结果与性能。 |
| 338 | `conversion_cenum.part02.test.ts` | `c_enum_0068` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：12 成员（无赋值） 的解析结果与性能。 |
| 339 | `conversion_cenum.part03.test.ts` | `c_enum_0069` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：12 成员（数字赋值） 的解析结果与性能。 |
| 340 | `conversion_cenum.part03.test.ts` | `c_enum_0070` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：12 成员（字符串赋值） 的解析结果与性能。 |
| 341 | `conversion_cenum.part03.test.ts` | `c_enum_0071` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：12 成员（十六进制赋值） 的解析结果与性能。 |
| 342 | `conversion_cenum.part03.test.ts` | `c_enum_0072` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：13 成员（无赋值） 的解析结果与性能。 |
| 343 | `conversion_cenum.part03.test.ts` | `c_enum_0073` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：13 成员（数字赋值） 的解析结果与性能。 |
| 344 | `conversion_cenum.part03.test.ts` | `c_enum_0074` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：13 成员（字符串赋值） 的解析结果与性能。 |
| 345 | `conversion_cenum.part03.test.ts` | `c_enum_0075` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：13 成员（十六进制赋值） 的解析结果与性能。 |
| 346 | `conversion_cenum.part03.test.ts` | `c_enum_0076` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：14 成员（无赋值） 的解析结果与性能。 |
| 347 | `conversion_cenum.part03.test.ts` | `c_enum_0077` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：14 成员（数字赋值） 的解析结果与性能。 |
| 348 | `conversion_cenum.part03.test.ts` | `c_enum_0078` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：14 成员（字符串赋值） 的解析结果与性能。 |
| 349 | `conversion_cenum.part03.test.ts` | `c_enum_0079` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：14 成员（十六进制赋值） 的解析结果与性能。 |
| 350 | `conversion_cenum.part03.test.ts` | `c_enum_0080` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：15 成员（无赋值） 的解析结果与性能。 |
| 351 | `conversion_cenum.part03.test.ts` | `c_enum_0081` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：15 成员（数字赋值） 的解析结果与性能。 |
| 352 | `conversion_cenum.part03.test.ts` | `c_enum_0082` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：15 成员（字符串赋值） 的解析结果与性能。 |
| 353 | `conversion_cenum.part03.test.ts` | `c_enum_0083` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：15 成员（十六进制赋值） 的解析结果与性能。 |
| 354 | `conversion_cenum.part03.test.ts` | `c_enum_0084` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：16 成员（无赋值） 的解析结果与性能。 |
| 355 | `conversion_cenum.part03.test.ts` | `c_enum_0085` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：16 成员（数字赋值） 的解析结果与性能。 |
| 356 | `conversion_cenum.part03.test.ts` | `c_enum_0086` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：16 成员（字符串赋值） 的解析结果与性能。 |
| 357 | `conversion_cenum.part03.test.ts` | `c_enum_0087` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：16 成员（十六进制赋值） 的解析结果与性能。 |
| 358 | `conversion_cenum.part03.test.ts` | `c_enum_0088` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：17 成员（无赋值） 的解析结果与性能。 |
| 359 | `conversion_cenum.part03.test.ts` | `c_enum_0089` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：17 成员（数字赋值） 的解析结果与性能。 |
| 360 | `conversion_cenum.part03.test.ts` | `c_enum_0090` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：17 成员（字符串赋值） 的解析结果与性能。 |
| 361 | `conversion_cenum.part03.test.ts` | `c_enum_0091` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：17 成员（十六进制赋值） 的解析结果与性能。 |
| 362 | `conversion_cenum.part03.test.ts` | `c_enum_0092` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：18 成员（无赋值） 的解析结果与性能。 |
| 363 | `conversion_cenum.part03.test.ts` | `c_enum_0093` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：18 成员（数字赋值） 的解析结果与性能。 |
| 364 | `conversion_cenum.part03.test.ts` | `c_enum_0094` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：18 成员（字符串赋值） 的解析结果与性能。 |
| 365 | `conversion_cenum.part03.test.ts` | `c_enum_0095` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：18 成员（十六进制赋值） 的解析结果与性能。 |
| 366 | `conversion_cenum.part03.test.ts` | `c_enum_0096` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：19 成员（无赋值） 的解析结果与性能。 |
| 367 | `conversion_cenum.part03.test.ts` | `c_enum_0097` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：19 成员（数字赋值） 的解析结果与性能。 |
| 368 | `conversion_cenum.part03.test.ts` | `c_enum_0098` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：19 成员（字符串赋值） 的解析结果与性能。 |
| 369 | `conversion_cenum.part04.test.ts` | `c_enum_0099` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：19 成员（十六进制赋值） 的解析结果与性能。 |
| 370 | `conversion_cenum.part04.test.ts` | `c_enum_0100` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：20 成员（无赋值） 的解析结果与性能。 |
| 371 | `conversion_cenum.part04.test.ts` | `c_enum_0101` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：20 成员（数字赋值） 的解析结果与性能。 |
| 372 | `conversion_cenum.part04.test.ts` | `c_enum_0102` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：20 成员（字符串赋值） 的解析结果与性能。 |
| 373 | `conversion_cenum.part04.test.ts` | `c_enum_0103` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：20 成员（十六进制赋值） 的解析结果与性能。 |
| 374 | `conversion_cenum.part04.test.ts` | `c_enum_0104` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：21 成员（无赋值） 的解析结果与性能。 |
| 375 | `conversion_cenum.part04.test.ts` | `c_enum_0105` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：21 成员（数字赋值） 的解析结果与性能。 |
| 376 | `conversion_cenum.part04.test.ts` | `c_enum_0106` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：21 成员（字符串赋值） 的解析结果与性能。 |
| 377 | `conversion_cenum.part04.test.ts` | `c_enum_0107` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：21 成员（十六进制赋值） 的解析结果与性能。 |
| 378 | `conversion_cenum.part04.test.ts` | `c_enum_0108` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：22 成员（无赋值） 的解析结果与性能。 |
| 379 | `conversion_cenum.part04.test.ts` | `c_enum_0109` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：22 成员（数字赋值） 的解析结果与性能。 |
| 380 | `conversion_cenum.part04.test.ts` | `c_enum_0110` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：22 成员（字符串赋值） 的解析结果与性能。 |
| 381 | `conversion_cenum.part04.test.ts` | `c_enum_0111` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：22 成员（十六进制赋值） 的解析结果与性能。 |
| 382 | `conversion_cenum.part04.test.ts` | `c_enum_0112` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：23 成员（无赋值） 的解析结果与性能。 |
| 383 | `conversion_cenum.part04.test.ts` | `c_enum_0113` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：23 成员（数字赋值） 的解析结果与性能。 |
| 384 | `conversion_cenum.part04.test.ts` | `c_enum_0114` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：23 成员（字符串赋值） 的解析结果与性能。 |
| 385 | `conversion_cenum.part04.test.ts` | `c_enum_0115` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：23 成员（十六进制赋值） 的解析结果与性能。 |
| 386 | `conversion_cenum.part04.test.ts` | `c_enum_0116` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：24 成员（无赋值） 的解析结果与性能。 |
| 387 | `conversion_cenum.part04.test.ts` | `c_enum_0117` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：24 成员（数字赋值） 的解析结果与性能。 |
| 388 | `conversion_cenum.part04.test.ts` | `c_enum_0118` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：24 成员（字符串赋值） 的解析结果与性能。 |
| 389 | `conversion_cenum.part04.test.ts` | `c_enum_0119` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：24 成员（十六进制赋值） 的解析结果与性能。 |
| 390 | `conversion_cenum.part04.test.ts` | `c_enum_0120` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：25 成员（无赋值） 的解析结果与性能。 |
| 391 | `conversion_cenum.part04.test.ts` | `c_enum_0121` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：25 成员（数字赋值） 的解析结果与性能。 |
| 392 | `conversion_cenum.part04.test.ts` | `c_enum_0122` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：25 成员（字符串赋值） 的解析结果与性能。 |
| 393 | `conversion_cenum.part05.test.ts` | `c_enum_0123` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：25 成员（十六进制赋值） 的解析结果与性能。 |
| 394 | `conversion_cenum.part05.test.ts` | `c_enum_0124` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：26 成员（无赋值） 的解析结果与性能。 |
| 395 | `conversion_cenum.part05.test.ts` | `c_enum_0125` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：26 成员（数字赋值） 的解析结果与性能。 |
| 396 | `conversion_cenum.part05.test.ts` | `c_enum_0126` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：26 成员（字符串赋值） 的解析结果与性能。 |
| 397 | `conversion_cenum.part05.test.ts` | `c_enum_0127` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：26 成员（十六进制赋值） 的解析结果与性能。 |
| 398 | `conversion_cenum.part05.test.ts` | `c_enum_0128` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：27 成员（无赋值） 的解析结果与性能。 |
| 399 | `conversion_cenum.part05.test.ts` | `c_enum_0129` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：27 成员（数字赋值） 的解析结果与性能。 |
| 400 | `conversion_cenum.part05.test.ts` | `c_enum_0130` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：27 成员（字符串赋值） 的解析结果与性能。 |
| 401 | `conversion_cenum.part05.test.ts` | `c_enum_0131` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：27 成员（十六进制赋值） 的解析结果与性能。 |
| 402 | `conversion_cenum.part05.test.ts` | `c_enum_0132` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：28 成员（无赋值） 的解析结果与性能。 |
| 403 | `conversion_cenum.part05.test.ts` | `c_enum_0133` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：28 成员（数字赋值） 的解析结果与性能。 |
| 404 | `conversion_cenum.part05.test.ts` | `c_enum_0134` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：28 成员（字符串赋值） 的解析结果与性能。 |
| 405 | `conversion_cenum.part05.test.ts` | `c_enum_0135` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：28 成员（十六进制赋值） 的解析结果与性能。 |
| 406 | `conversion_cenum.part05.test.ts` | `c_enum_0136` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：29 成员（无赋值） 的解析结果与性能。 |
| 407 | `conversion_cenum.part05.test.ts` | `c_enum_0137` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：29 成员（数字赋值） 的解析结果与性能。 |
| 408 | `conversion_cenum.part05.test.ts` | `c_enum_0138` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：29 成员（字符串赋值） 的解析结果与性能。 |
| 409 | `conversion_cenum.part05.test.ts` | `c_enum_0139` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：29 成员（十六进制赋值） 的解析结果与性能。 |
| 410 | `conversion_cenum.part05.test.ts` | `c_enum_0140` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：30 成员（无赋值） 的解析结果与性能。 |
| 411 | `conversion_cenum.part05.test.ts` | `c_enum_0141` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：30 成员（数字赋值） 的解析结果与性能。 |
| 412 | `conversion_cenum.part05.test.ts` | `c_enum_0142` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：30 成员（字符串赋值） 的解析结果与性能。 |
| 413 | `conversion_cenum.part05.test.ts` | `c_enum_0143` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：30 成员（十六进制赋值） 的解析结果与性能。 |
| 414 | `conversion_cenum.part06.test.ts` | `c_enum_0144` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：31 成员（无赋值） 的解析结果与性能。 |
| 415 | `conversion_cenum.part06.test.ts` | `c_enum_0145` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：31 成员（数字赋值） 的解析结果与性能。 |
| 416 | `conversion_cenum.part06.test.ts` | `c_enum_0146` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：31 成员（字符串赋值） 的解析结果与性能。 |
| 417 | `conversion_cenum.part06.test.ts` | `c_enum_0147` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：31 成员（十六进制赋值） 的解析结果与性能。 |
| 418 | `conversion_cenum.part06.test.ts` | `c_enum_0148` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：32 成员（无赋值） 的解析结果与性能。 |
| 419 | `conversion_cenum.part06.test.ts` | `c_enum_0149` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：32 成员（数字赋值） 的解析结果与性能。 |
| 420 | `conversion_cenum.part06.test.ts` | `c_enum_0150` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：32 成员（字符串赋值） 的解析结果与性能。 |
| 421 | `conversion_cenum.part06.test.ts` | `c_enum_0151` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：32 成员（十六进制赋值） 的解析结果与性能。 |
| 422 | `conversion_cenum.part06.test.ts` | `c_enum_0152` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：33 成员（无赋值） 的解析结果与性能。 |
| 423 | `conversion_cenum.part06.test.ts` | `c_enum_0153` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：33 成员（数字赋值） 的解析结果与性能。 |
| 424 | `conversion_cenum.part06.test.ts` | `c_enum_0154` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：33 成员（字符串赋值） 的解析结果与性能。 |
| 425 | `conversion_cenum.part06.test.ts` | `c_enum_0155` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：33 成员（十六进制赋值） 的解析结果与性能。 |
| 426 | `conversion_cenum.part06.test.ts` | `c_enum_0156` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：34 成员（无赋值） 的解析结果与性能。 |
| 427 | `conversion_cenum.part06.test.ts` | `c_enum_0157` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：34 成员（数字赋值） 的解析结果与性能。 |
| 428 | `conversion_cenum.part06.test.ts` | `c_enum_0158` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：34 成员（字符串赋值） 的解析结果与性能。 |
| 429 | `conversion_cenum.part06.test.ts` | `c_enum_0159` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：34 成员（十六进制赋值） 的解析结果与性能。 |
| 430 | `conversion_cenum.part06.test.ts` | `c_enum_0160` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：35 成员（无赋值） 的解析结果与性能。 |
| 431 | `conversion_cenum.part06.test.ts` | `c_enum_0161` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：35 成员（数字赋值） 的解析结果与性能。 |
| 432 | `conversion_cenum.part06.test.ts` | `c_enum_0162` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：35 成员（字符串赋值） 的解析结果与性能。 |
| 433 | `conversion_cenum.part07.test.ts` | `c_enum_0163` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：35 成员（十六进制赋值） 的解析结果与性能。 |
| 434 | `conversion_cenum.part07.test.ts` | `c_enum_0164` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：36 成员（无赋值） 的解析结果与性能。 |
| 435 | `conversion_cenum.part07.test.ts` | `c_enum_0165` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：36 成员（数字赋值） 的解析结果与性能。 |
| 436 | `conversion_cenum.part07.test.ts` | `c_enum_0166` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：36 成员（字符串赋值） 的解析结果与性能。 |
| 437 | `conversion_cenum.part07.test.ts` | `c_enum_0167` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：36 成员（十六进制赋值） 的解析结果与性能。 |
| 438 | `conversion_cenum.part07.test.ts` | `c_enum_0168` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：37 成员（无赋值） 的解析结果与性能。 |
| 439 | `conversion_cenum.part07.test.ts` | `c_enum_0169` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：37 成员（数字赋值） 的解析结果与性能。 |
| 440 | `conversion_cenum.part07.test.ts` | `c_enum_0170` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：37 成员（字符串赋值） 的解析结果与性能。 |
| 441 | `conversion_cenum.part07.test.ts` | `c_enum_0171` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：37 成员（十六进制赋值） 的解析结果与性能。 |
| 442 | `conversion_cenum.part07.test.ts` | `c_enum_0172` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：38 成员（无赋值） 的解析结果与性能。 |
| 443 | `conversion_cenum.part07.test.ts` | `c_enum_0173` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：38 成员（数字赋值） 的解析结果与性能。 |
| 444 | `conversion_cenum.part07.test.ts` | `c_enum_0174` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：38 成员（字符串赋值） 的解析结果与性能。 |
| 445 | `conversion_cenum.part07.test.ts` | `c_enum_0175` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：38 成员（十六进制赋值） 的解析结果与性能。 |
| 446 | `conversion_cenum.part07.test.ts` | `c_enum_0176` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：39 成员（无赋值） 的解析结果与性能。 |
| 447 | `conversion_cenum.part07.test.ts` | `c_enum_0177` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：39 成员（数字赋值） 的解析结果与性能。 |
| 448 | `conversion_cenum.part07.test.ts` | `c_enum_0178` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：39 成员（字符串赋值） 的解析结果与性能。 |
| 449 | `conversion_cenum.part07.test.ts` | `c_enum_0179` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：39 成员（十六进制赋值） 的解析结果与性能。 |
| 450 | `conversion_cenum.part08.test.ts` | `c_enum_0180` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：40 成员（无赋值） 的解析结果与性能。 |
| 451 | `conversion_cenum.part08.test.ts` | `c_enum_0181` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：40 成员（数字赋值） 的解析结果与性能。 |
| 452 | `conversion_cenum.part08.test.ts` | `c_enum_0182` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：40 成员（字符串赋值） 的解析结果与性能。 |
| 453 | `conversion_cenum.part08.test.ts` | `c_enum_0183` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：40 成员（十六进制赋值） 的解析结果与性能。 |
| 454 | `conversion_cenum.part08.test.ts` | `c_enum_0184` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：41 成员（无赋值） 的解析结果与性能。 |
| 455 | `conversion_cenum.part08.test.ts` | `c_enum_0185` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：41 成员（数字赋值） 的解析结果与性能。 |
| 456 | `conversion_cenum.part08.test.ts` | `c_enum_0186` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：41 成员（字符串赋值） 的解析结果与性能。 |
| 457 | `conversion_cenum.part08.test.ts` | `c_enum_0187` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：41 成员（十六进制赋值） 的解析结果与性能。 |
| 458 | `conversion_cenum.part08.test.ts` | `c_enum_0188` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：42 成员（无赋值） 的解析结果与性能。 |
| 459 | `conversion_cenum.part08.test.ts` | `c_enum_0189` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：42 成员（数字赋值） 的解析结果与性能。 |
| 460 | `conversion_cenum.part08.test.ts` | `c_enum_0190` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：42 成员（字符串赋值） 的解析结果与性能。 |
| 461 | `conversion_cenum.part08.test.ts` | `c_enum_0191` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：42 成员（十六进制赋值） 的解析结果与性能。 |
| 462 | `conversion_cenum.part08.test.ts` | `c_enum_0192` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：43 成员（无赋值） 的解析结果与性能。 |
| 463 | `conversion_cenum.part08.test.ts` | `c_enum_0193` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：43 成员（数字赋值） 的解析结果与性能。 |
| 464 | `conversion_cenum.part08.test.ts` | `c_enum_0194` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：43 成员（字符串赋值） 的解析结果与性能。 |
| 465 | `conversion_cenum.part08.test.ts` | `c_enum_0195` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：43 成员（十六进制赋值） 的解析结果与性能。 |
| 466 | `conversion_cenum.part09.test.ts` | `c_enum_0196` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：44 成员（无赋值） 的解析结果与性能。 |
| 467 | `conversion_cenum.part09.test.ts` | `c_enum_0197` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：44 成员（数字赋值） 的解析结果与性能。 |
| 468 | `conversion_cenum.part09.test.ts` | `c_enum_0198` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：44 成员（字符串赋值） 的解析结果与性能。 |
| 469 | `conversion_cenum.part09.test.ts` | `c_enum_0199` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：44 成员（十六进制赋值） 的解析结果与性能。 |
| 470 | `conversion_cenum.part09.test.ts` | `c_enum_0200` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：45 成员（无赋值） 的解析结果与性能。 |
| 471 | `conversion_cenum.part09.test.ts` | `c_enum_0201` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：45 成员（数字赋值） 的解析结果与性能。 |
| 472 | `conversion_cenum.part09.test.ts` | `c_enum_0202` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：45 成员（字符串赋值） 的解析结果与性能。 |
| 473 | `conversion_cenum.part09.test.ts` | `c_enum_0203` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：45 成员（十六进制赋值） 的解析结果与性能。 |
| 474 | `conversion_cenum.part09.test.ts` | `c_enum_0204` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：46 成员（无赋值） 的解析结果与性能。 |
| 475 | `conversion_cenum.part09.test.ts` | `c_enum_0205` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：46 成员（数字赋值） 的解析结果与性能。 |
| 476 | `conversion_cenum.part09.test.ts` | `c_enum_0206` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：46 成员（字符串赋值） 的解析结果与性能。 |
| 477 | `conversion_cenum.part09.test.ts` | `c_enum_0207` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：46 成员（十六进制赋值） 的解析结果与性能。 |
| 478 | `conversion_cenum.part09.test.ts` | `c_enum_0208` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：47 成员（无赋值） 的解析结果与性能。 |
| 479 | `conversion_cenum.part09.test.ts` | `c_enum_0209` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：47 成员（数字赋值） 的解析结果与性能。 |
| 480 | `conversion_cenum.part09.test.ts` | `c_enum_0210` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：47 成员（字符串赋值） 的解析结果与性能。 |
| 481 | `conversion_cenum.part10.test.ts` | `c_enum_0211` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：47 成员（十六进制赋值） 的解析结果与性能。 |
| 482 | `conversion_cenum.part10.test.ts` | `c_enum_0212` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：48 成员（无赋值） 的解析结果与性能。 |
| 483 | `conversion_cenum.part10.test.ts` | `c_enum_0213` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：48 成员（数字赋值） 的解析结果与性能。 |
| 484 | `conversion_cenum.part10.test.ts` | `c_enum_0214` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：48 成员（字符串赋值） 的解析结果与性能。 |
| 485 | `conversion_cenum.part10.test.ts` | `c_enum_0215` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：48 成员（十六进制赋值） 的解析结果与性能。 |
| 486 | `conversion_cenum.part10.test.ts` | `c_enum_0216` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：49 成员（无赋值） 的解析结果与性能。 |
| 487 | `conversion_cenum.part10.test.ts` | `c_enum_0217` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：49 成员（数字赋值） 的解析结果与性能。 |
| 488 | `conversion_cenum.part10.test.ts` | `c_enum_0218` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：49 成员（字符串赋值） 的解析结果与性能。 |
| 489 | `conversion_cenum.part10.test.ts` | `c_enum_0219` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：49 成员（十六进制赋值） 的解析结果与性能。 |
| 490 | `conversion_cenum.part10.test.ts` | `c_enum_0220` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：50 成员（无赋值） 的解析结果与性能。 |
| 491 | `conversion_cenum.part10.test.ts` | `c_enum_0221` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：50 成员（数字赋值） 的解析结果与性能。 |
| 492 | `conversion_cenum.part10.test.ts` | `c_enum_0222` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：50 成员（字符串赋值） 的解析结果与性能。 |
| 493 | `conversion_cenum.part10.test.ts` | `c_enum_0223` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：50 成员（十六进制赋值） 的解析结果与性能。 |
| 494 | `conversion_cenum.part10.test.ts` | `c_enum_0224` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：ColorT 的解析结果与性能。 |
| 495 | `conversion_cenum.part10.test.ts` | `c_enum_0225` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：StatusT 的解析结果与性能。 |
| 496 | `conversion_cenum.part10.test.ts` | `c_enum_0226` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：ModeT 的解析结果与性能。 |
| 497 | `conversion_cenum.part10.test.ts` | `c_enum_0227` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：LevelT 的解析结果与性能。 |
| 498 | `conversion_cenum.part10.test.ts` | `c_enum_0228` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：TypeT 的解析结果与性能。 |
| 499 | `conversion_cenum.part10.test.ts` | `c_enum_0229` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：KindT 的解析结果与性能。 |
| 500 | `conversion_cenum.part11.test.ts` | `c_enum_0230` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：StateT 的解析结果与性能。 |
| 501 | `conversion_cenum.part11.test.ts` | `c_enum_0231` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：FlagT 的解析结果与性能。 |
| 502 | `conversion_cenum.part11.test.ts` | `c_enum_0232` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：CodeT 的解析结果与性能。 |
| 503 | `conversion_cenum.part11.test.ts` | `c_enum_0233` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：ResultT 的解析结果与性能。 |
| 504 | `conversion_cenum.part11.test.ts` | `c_enum_0234` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：GradeT 的解析结果与性能。 |
| 505 | `conversion_cenum.part11.test.ts` | `c_enum_0235` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：SizeT 的解析结果与性能。 |
| 506 | `conversion_cenum.part11.test.ts` | `c_enum_0236` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：OrderT 的解析结果与性能。 |
| 507 | `conversion_cenum.part11.test.ts` | `c_enum_0237` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：PhaseT 的解析结果与性能。 |
| 508 | `conversion_cenum.part11.test.ts` | `c_enum_0238` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：RankT 的解析结果与性能。 |
| 509 | `conversion_cenum.part11.test.ts` | `c_enum_0239` | 性能测试 | 3/4 | h2dts parseEnum：扩充-多 enum：同文件 2 个 的解析结果与性能。 |
| 510 | `conversion_cenum.part11.test.ts` | `c_enum_0240` | 性能测试 | 3/4 | h2dts parseEnum：扩充-多 enum：同文件 3 个 的解析结果与性能。 |
| 511 | `conversion_cenum.part11.test.ts` | `c_enum_0241` | 性能测试 | 3/4 | h2dts parseEnum：扩充-多 enum：同文件 4 个 的解析结果与性能。 |
| 512 | `conversion_cenum.part11.test.ts` | `c_enum_0242` | 性能测试 | 3/4 | h2dts parseEnum：扩充-多 enum：同文件 5 个 的解析结果与性能。 |
| 513 | `conversion_cenum.part11.test.ts` | `c_enum_0243` | 性能测试 | 3/4 | h2dts parseEnum：扩充-多 enum：同文件 8 个 的解析结果与性能。 |
| 514 | `conversion_cenum.part11.test.ts` | `c_enum_0244` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：位运算 的解析结果与性能。 |
| 515 | `conversion_cenum.part11.test.ts` | `c_enum_0245` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：负数 的解析结果与性能。 |
| 516 | `conversion_cenum.part11.test.ts` | `c_enum_0246` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：字符 的解析结果与性能。 |
| 517 | `conversion_cenum.part11.test.ts` | `c_enum_0247` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：混合 的解析结果与性能。 |
| 518 | `conversion_cenum.part11.test.ts` | `c_enum_0248` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：注释 的解析结果与性能。 |
| 519 | `conversion_cenum.part11.test.ts` | `c_enum_0249` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：尾逗号 的解析结果与性能。 |
| 520 | `conversion_cenum.part11.test.ts` | `c_enum_0250` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：无分号 的解析结果与性能。 |
| 521 | `conversion_cenum.part11.test.ts` | `c_enum_0251` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：重复值 的解析结果与性能。 |
| 522 | `conversion_cenum.part11.test.ts` | `c_enum_0252` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：大数值 的解析结果与性能。 |
| 523 | `conversion_cenum.part11.test.ts` | `c_enum_0253` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：浮点值 的解析结果与性能。 |
| 524 | `conversion_cenum.part12.test.ts` | `c_enum_0254` | 性能测试 | 3/4 | : h2dts parseEnum：扩充-typedef enum 三值 的解析结果与性能。 |
| 525 | `conversion_cenum.part12.test.ts` | `c_enum_0255` | 性能测试 | 3/4 | : h2dts parseEnum：扩充-位标志 enum 的解析结果与性能。 |
| 526 | `conversion_cenum.part12.test.ts` | `c_enum_0256` | 性能测试 | 3/4 | : h2dts parseEnum：扩充-namespace 内 enum 的解析结果与性能。 |
| 527 | `conversion_cenum.part13.test.ts` | `c_enum_0257` | 性能测试 | 3/4 | : h2dts parseEnum：扩充-R2-状态机 enum 的解析结果与性能。 |
| 528 | `conversion_cenum.part13.test.ts` | `c_enum_0258` | 性能测试 | 3/4 | : h2dts parseEnum：扩充-R2-RGB hex enum 的解析结果与性能。 |
| 529 | `conversion_cenum.part13.test.ts` | `c_enum_0259` | 性能测试 | 3/4 | : h2dts parseEnum：扩充-R2-namespace enum 的解析结果与性能。 |
| 530 | `conversion_cenum.part14.test.ts` | `c_enum_0260` | 性能测试 | 3/4 | : h2dts parseEnum：扩充-R3-季节 enum 的解析结果与性能。 |
| 531 | `conversion_cenum.part15.test.ts` | `c_enum_0261` | 性能测试 | 3/4 | : h2dts parseEnum：扩充-R3-季节 enum 的解析结果与性能。 |
| 532 | `conversion_cenum.part16.test.ts` | `c_enum_0262` | 性能测试 | 3/4 | : h2dts parseEnum：扩充-R4-Token enum 的解析结果与性能。 |
| 533 | `conversion_cenum.part17.test.ts` | `c_enum_0263` | 性能测试 | 3/4 | : h2dts parseEnum：扩充-R5-运算符 enum 的解析结果与性能。 |
| 534 | `conversion_cenum.part18.test.ts` | `c_enum_0264` | 性能测试 | 3/4 | : h2dts parseEnum：扩充-R5-运算符 enum 的解析结果与性能。 |
| 535 | `conversion_cfunc.part01.test.ts` | `c_func_0001` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：int 入参×2 返回 int 的解析结果与性能。 |
| 536 | `conversion_cfunc.part01.test.ts` | `c_func_0002` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：std::string 返回 的解析结果与性能。 |
| 537 | `conversion_cfunc.part01.test.ts` | `c_func_0003` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：string 入参×2 返回 string 的解析结果与性能。 |
| 538 | `conversion_cfunc.part01.test.ts` | `c_func_0004` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：char 返回 的解析结果与性能。 |
| 539 | `conversion_cfunc.part01.test.ts` | `c_func_0005` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：long 入参/返回 的解析结果与性能。 |
| 540 | `conversion_cfunc.part01.test.ts` | `c_func_0006` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：long long 入参×2/返回 的解析结果与性能。 |
| 541 | `conversion_cfunc.part01.test.ts` | `c_func_0007` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：float 入参/返回 的解析结果与性能。 |
| 542 | `conversion_cfunc.part01.test.ts` | `c_func_0008` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：double 入参/返回 的解析结果与性能。 |
| 543 | `conversion_cfunc.part01.test.ts` | `c_func_0009` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：bool 入参/返回 的解析结果与性能。 |
| 544 | `conversion_cfunc.part01.test.ts` | `c_func_0010` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：unsigned int 入参/返回 的解析结果与性能。 |
| 545 | `conversion_cfunc.part01.test.ts` | `c_func_0011` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：short 入参/返回 的解析结果与性能。 |
| 546 | `conversion_cfunc.part01.test.ts` | `c_func_0012` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：wchar_t 入参/返回 的解析结果与性能。 |
| 547 | `conversion_cfunc.part01.test.ts` | `c_func_0013` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：signed char 入参/返回 的解析结果与性能。 |
| 548 | `conversion_cfunc.part01.test.ts` | `c_func_0014` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：unsigned long long 入参/返回 的解析结果与性能。 |
| 549 | `conversion_cfunc.part01.test.ts` | `c_func_0015` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：long double 入参/返回 的解析结果与性能。 |
| 550 | `conversion_cfunc.part01.test.ts` | `c_func_0016` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：void 无参返回 的解析结果与性能。 |
| 551 | `conversion_cfunc.part01.test.ts` | `c_func_0017` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：std::wstring 返回 的解析结果与性能。 |
| 552 | `conversion_cfunc.part01.test.ts` | `c_func_0018` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：char16_t 返回 的解析结果与性能。 |
| 553 | `conversion_cfunc.part01.test.ts` | `c_func_0019` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：char32_t 返回 的解析结果与性能。 |
| 554 | `conversion_cfunc.part01.test.ts` | `c_func_0020` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：size_t 返回 的解析结果与性能。 |
| 555 | `conversion_cfunc.part01.test.ts` | `c_func_0021` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：int[10] 定长数组入参 的解析结果与性能。 |
| 556 | `conversion_cfunc.part01.test.ts` | `c_func_0022` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::string[20] 入参 的解析结果与性能。 |
| 557 | `conversion_cfunc.part01.test.ts` | `c_func_0023` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：char |
| 558 | `conversion_cfunc.part01.test.ts` | `c_func_0024` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：int |
| 559 | `conversion_cfunc.part01.test.ts` | `c_func_0025` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：double |
| 560 | `conversion_cfunc.part01.test.ts` | `c_func_0026` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::vector<int> 入参 的解析结果与性能。 |
| 561 | `conversion_cfunc.part01.test.ts` | `c_func_0027` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::vector<std::string> 入参 的解析结果与性能。 |
| 562 | `conversion_cfunc.part01.test.ts` | `c_func_0028` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::map 入参 的解析结果与性能。 |
| 563 | `conversion_cfunc.part01.test.ts` | `c_func_0029` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::set<int> 入参 的解析结果与性能。 |
| 564 | `conversion_cfunc.part01.test.ts` | `c_func_0030` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::list<double> 入参 的解析结果与性能。 |
| 565 | `conversion_cfunc.part01.test.ts` | `c_func_0031` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::deque<bool> 入参 的解析结果与性能。 |
| 566 | `conversion_cfunc.part01.test.ts` | `c_func_0032` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::pair 入参 的解析结果与性能。 |
| 567 | `conversion_cfunc.part01.test.ts` | `c_func_0033` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::tuple 三元素入参 的解析结果与性能。 |
| 568 | `conversion_cfunc.part01.test.ts` | `c_func_0034` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：int[10][20] 二维数组入参 的解析结果与性能。 |
| 569 | `conversion_cfunc.part01.test.ts` | `c_func_0035` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：double[5][10][15] 三维数组入参 的解析结果与性能。 |
| 570 | `conversion_cfunc.part01.test.ts` | `c_func_0036` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：float[16] 入参 的解析结果与性能。 |
| 571 | `conversion_cfunc.part01.test.ts` | `c_func_0037` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：bool[8] 入参 的解析结果与性能。 |
| 572 | `conversion_cfunc.part01.test.ts` | `c_func_0038` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：long[64] 入参 的解析结果与性能。 |
| 573 | `conversion_cfunc.part01.test.ts` | `c_func_0039` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：iterator 迭代器入参 的解析结果与性能。 |
| 574 | `conversion_cfunc.part01.test.ts` | `c_func_0040` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::function 入参 的解析结果与性能。 |
| 575 | `conversion_cfunc.part01.test.ts` | `c_func_0041` | 性能测试 | 3/4 | h2dts parseFunction：static 函数：static int 返回 的解析结果与性能。 |
| 576 | `conversion_cfunc.part01.test.ts` | `c_func_0042` | 性能测试 | 3/4 | h2dts parseFunction：static 函数：static 返回 std::string 的解析结果与性能。 |
| 577 | `conversion_cfunc.part02.test.ts` | `c_func_0043` | 性能测试 | 3/4 | h2dts parseFunction：static 函数：static void 的解析结果与性能。 |
| 578 | `conversion_cfunc.part02.test.ts` | `c_func_0044` | 性能测试 | 3/4 | h2dts parseFunction：static 函数：static 带参 的解析结果与性能。 |
| 579 | `conversion_cfunc.part02.test.ts` | `c_func_0045` | 性能测试 | 3/4 | h2dts parseFunction：static 函数：static bool 返回 的解析结果与性能。 |
| 580 | `conversion_cfunc.part02.test.ts` | `c_func_0046` | 性能测试 | 3/4 | h2dts parseFunction：const 修饰：const int 返回（const 剥离） 的解析结果与性能。 |
| 581 | `conversion_cfunc.part02.test.ts` | `c_func_0047` | 性能测试 | 3/4 | h2dts parseFunction：const 修饰：static const 组合 的解析结果与性能。 |
| 582 | `conversion_cfunc.part02.test.ts` | `c_func_0048` | 性能测试 | 3/4 | h2dts parseFunction：const 修饰：const 参数（剥离） 的解析结果与性能。 |
| 583 | `conversion_cfunc.part02.test.ts` | `c_func_0049` | 性能测试 | 3/4 | h2dts parseFunction：const 修饰：const char |
| 584 | `conversion_cfunc.part02.test.ts` | `c_func_0050` | 性能测试 | 3/4 | h2dts parseFunction：多函数：同文件 3 条函数声明 的解析结果与性能。 |
| 585 | `conversion_cfunc.part02.test.ts` | `c_func_0051` | 性能测试 | 3/4 | h2dts parseFunction：多参数：5 参 double 的解析结果与性能。 |
| 586 | `conversion_cfunc.part02.test.ts` | `c_func_0052` | 性能测试 | 3/4 | h2dts parseFunction：多参数：5 参混合类型 的解析结果与性能。 |
| 587 | `conversion_cfunc.part02.test.ts` | `c_func_0053` | 性能测试 | 3/4 | h2dts parseFunction：namespace：域内函数×2 的解析结果与性能。 |
| 588 | `conversion_cfunc.part02.test.ts` | `c_func_0054` | 性能测试 | 3/4 | h2dts parseFunction：namespace：嵌套域内函数 的解析结果与性能。 |
| 589 | `conversion_cfunc.part02.test.ts` | `c_func_0055` | 性能测试 | 3/4 | h2dts parseFunction：namespace：域内 static 函数 的解析结果与性能。 |
| 590 | `conversion_cfunc.part02.test.ts` | `c_func_0056` | 性能测试 | 3/4 | h2dts parseFunction：typedef 函数指针：int ( |
| 591 | `conversion_cfunc.part02.test.ts` | `c_func_0057` | 性能测试 | 3/4 | h2dts parseFunction：typedef 函数指针：void ( |
| 592 | `conversion_cfunc.part02.test.ts` | `c_func_0058` | 性能测试 | 3/4 | h2dts parseFunction：typedef 函数指针：double ( |
| 593 | `conversion_cfunc.part02.test.ts` | `c_func_0059` | 性能测试 | 3/4 | h2dts parseFunction：typedef 函数指针：bool ( |
| 594 | `conversion_cfunc.part02.test.ts` | `c_func_0060` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::queue<int> 入参 的解析结果与性能。 |
| 595 | `conversion_cfunc.part02.test.ts` | `c_func_0061` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::stack 入参 的解析结果与性能。 |
| 596 | `conversion_cfunc.part02.test.ts` | `c_func_0062` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::priority_queue 入参 的解析结果与性能。 |
| 597 | `conversion_cfunc.part02.test.ts` | `c_func_0063` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::multimap 入参 的解析结果与性能。 |
| 598 | `conversion_cfunc.part02.test.ts` | `c_func_0064` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::multiset 入参 的解析结果与性能。 |
| 599 | `conversion_cfunc.part02.test.ts` | `c_func_0065` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::unordered_map 入参 的解析结果与性能。 |
| 600 | `conversion_cfunc.part02.test.ts` | `c_func_0066` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::forward_list 入参 的解析结果与性能。 |
| 601 | `conversion_cfunc.part02.test.ts` | `c_func_0067` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::valarray 入参 的解析结果与性能。 |
| 602 | `conversion_cfunc.part02.test.ts` | `c_func_0068` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::complex 入参 的解析结果与性能。 |
| 603 | `conversion_cfunc.part02.test.ts` | `c_func_0069` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：wchar_t |
| 604 | `conversion_cfunc.part02.test.ts` | `c_func_0070` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：float[8][8] 二维入参 的解析结果与性能。 |
| 605 | `conversion_cfunc.part02.test.ts` | `c_func_0071` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：int8_t 的解析结果与性能。 |
| 606 | `conversion_cfunc.part02.test.ts` | `c_func_0072` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：int16_t 的解析结果与性能。 |
| 607 | `conversion_cfunc.part02.test.ts` | `c_func_0073` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：int32_t 的解析结果与性能。 |
| 608 | `conversion_cfunc.part02.test.ts` | `c_func_0074` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：int64_t 的解析结果与性能。 |
| 609 | `conversion_cfunc.part02.test.ts` | `c_func_0075` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：uint8_t 的解析结果与性能。 |
| 610 | `conversion_cfunc.part02.test.ts` | `c_func_0076` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：uint16_t 的解析结果与性能。 |
| 611 | `conversion_cfunc.part02.test.ts` | `c_func_0077` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：uint32_t 的解析结果与性能。 |
| 612 | `conversion_cfunc.part02.test.ts` | `c_func_0078` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：uint64_t 的解析结果与性能。 |
| 613 | `conversion_cfunc.part02.test.ts` | `c_func_0079` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：unsigned short 的解析结果与性能。 |
| 614 | `conversion_cfunc.part02.test.ts` | `c_func_0080` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：unsigned char 的解析结果与性能。 |
| 615 | `conversion_cfunc.part02.test.ts` | `c_func_0081` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：signed short 的解析结果与性能。 |
| 616 | `conversion_cfunc.part02.test.ts` | `c_func_0082` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：signed long 的解析结果与性能。 |
| 617 | `conversion_cfunc.part02.test.ts` | `c_func_0083` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：unsigned long 的解析结果与性能。 |
| 618 | `conversion_cfunc.part02.test.ts` | `c_func_0084` | 性能测试 | 3/4 | h2dts parseFunction：扩充-引用：int& 左值引用 的解析结果与性能。 |
| 619 | `conversion_cfunc.part03.test.ts` | `c_func_0085` | 性能测试 | 3/4 | h2dts parseFunction：扩充-引用：std::string& 的解析结果与性能。 |
| 620 | `conversion_cfunc.part03.test.ts` | `c_func_0086` | 性能测试 | 3/4 | h2dts parseFunction：扩充-引用：const int& 的解析结果与性能。 |
| 621 | `conversion_cfunc.part03.test.ts` | `c_func_0087` | 性能测试 | 3/4 | h2dts parseFunction：扩充-引用：double& 的解析结果与性能。 |
| 622 | `conversion_cfunc.part03.test.ts` | `c_func_0088` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：std::array<int,10> 的解析结果与性能。 |
| 623 | `conversion_cfunc.part03.test.ts` | `c_func_0089` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：std::array<string,5> 的解析结果与性能。 |
| 624 | `conversion_cfunc.part03.test.ts` | `c_func_0090` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：std::unordered_set 的解析结果与性能。 |
| 625 | `conversion_cfunc.part03.test.ts` | `c_func_0091` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：std::unordered_multimap 的解析结果与性能。 |
| 626 | `conversion_cfunc.part03.test.ts` | `c_func_0092` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：std::unordered_multiset 的解析结果与性能。 |
| 627 | `conversion_cfunc.part03.test.ts` | `c_func_0093` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回：char |
| 628 | `conversion_cfunc.part03.test.ts` | `c_func_0094` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回：int |
| 629 | `conversion_cfunc.part03.test.ts` | `c_func_0095` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回：std::string |
| 630 | `conversion_cfunc.part03.test.ts` | `c_func_0096` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：char[256] 的解析结果与性能。 |
| 631 | `conversion_cfunc.part03.test.ts` | `c_func_0097` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：unsigned char[16] 的解析结果与性能。 |
| 632 | `conversion_cfunc.part03.test.ts` | `c_func_0098` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：int64_t[8] 的解析结果与性能。 |
| 633 | `conversion_cfunc.part03.test.ts` | `c_func_0099` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：std::string[10][5] 的解析结果与性能。 |
| 634 | `conversion_cfunc.part03.test.ts` | `c_func_0100` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：6 参混合 的解析结果与性能。 |
| 635 | `conversion_cfunc.part03.test.ts` | `c_func_0101` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：8 参 int 的解析结果与性能。 |
| 636 | `conversion_cfunc.part03.test.ts` | `c_func_0102` | 性能测试 | 3/4 | h2dts parseFunction：扩充-重载：同名函数 3 组重载 的解析结果与性能。 |
| 637 | `conversion_cfunc.part03.test.ts` | `c_func_0103` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：4 容器参数 的解析结果与性能。 |
| 638 | `conversion_cfunc.part03.test.ts` | `c_func_0104` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：4 容器参数 B 的解析结果与性能。 |
| 639 | `conversion_cfunc.part03.test.ts` | `c_func_0105` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器：std::function<void(string)> 的解析结果与性能。 |
| 640 | `conversion_cfunc.part03.test.ts` | `c_func_0106` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回 int 的解析结果与性能。 |
| 641 | `conversion_cfunc.part03.test.ts` | `c_func_0107` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回 bool 的解析结果与性能。 |
| 642 | `conversion_cfunc.part03.test.ts` | `c_func_0108` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：带参 double 的解析结果与性能。 |
| 643 | `conversion_cfunc.part03.test.ts` | `c_func_0109` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回容器 的解析结果与性能。 |
| 644 | `conversion_cfunc.part03.test.ts` | `c_func_0110` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const：返回 const char |
| 645 | `conversion_cfunc.part03.test.ts` | `c_func_0111` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const：const char |
| 646 | `conversion_cfunc.part03.test.ts` | `c_func_0112` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const：const std::string& 参数 的解析结果与性能。 |
| 647 | `conversion_cfunc.part03.test.ts` | `c_func_0113` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多函数：同文件 5 个 的解析结果与性能。 |
| 648 | `conversion_cfunc.part03.test.ts` | `c_func_0114` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多函数：同文件 8 个 的解析结果与性能。 |
| 649 | `conversion_cfunc.part03.test.ts` | `c_func_0115` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多函数：同文件 10 个 的解析结果与性能。 |
| 650 | `conversion_cfunc.part03.test.ts` | `c_func_0116` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef：返回 std::string 函数指针 的解析结果与性能。 |
| 651 | `conversion_cfunc.part03.test.ts` | `c_func_0117` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef：double 二元函数指针 的解析结果与性能。 |
| 652 | `conversion_cfunc.part03.test.ts` | `c_func_0118` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef：notify 函数指针 的解析结果与性能。 |
| 653 | `conversion_cfunc.part03.test.ts` | `c_func_0119` | 性能测试 | 3/4 | h2dts parseFunction：扩充-namespace：域内 4 函数 的解析结果与性能。 |
| 654 | `conversion_cfunc.part03.test.ts` | `c_func_0120` | 性能测试 | 3/4 | h2dts parseFunction：扩充-namespace：三层嵌套函数 的解析结果与性能。 |
| 655 | `conversion_cfunc.part03.test.ts` | `c_func_0121` | 性能测试 | 3/4 | h2dts parseFunction：扩充-默认参数：int = 1024 的解析结果与性能。 |
| 656 | `conversion_cfunc.part03.test.ts` | `c_func_0122` | 性能测试 | 3/4 | h2dts parseFunction：扩充-默认参数：string 默认值 的解析结果与性能。 |
| 657 | `conversion_cfunc.part03.test.ts` | `c_func_0123` | 性能测试 | 3/4 | h2dts parseFunction：扩充-默认参数：双默认值 的解析结果与性能。 |
| 658 | `conversion_cfunc.part03.test.ts` | `c_func_0124` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：6 参全类型混合 的解析结果与性能。 |
| 659 | `conversion_cfunc.part03.test.ts` | `c_func_0125` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：容器+引用+基础混合 的解析结果与性能。 |
| 660 | `conversion_cfunc.part04.test.ts` | `c_func_0126` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 int 的解析结果与性能。 |
| 661 | `conversion_cfunc.part04.test.ts` | `c_func_0127` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 char 的解析结果与性能。 |
| 662 | `conversion_cfunc.part04.test.ts` | `c_func_0128` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 short 的解析结果与性能。 |
| 663 | `conversion_cfunc.part04.test.ts` | `c_func_0129` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 long 的解析结果与性能。 |
| 664 | `conversion_cfunc.part04.test.ts` | `c_func_0130` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 long long 的解析结果与性能。 |
| 665 | `conversion_cfunc.part04.test.ts` | `c_func_0131` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 float 的解析结果与性能。 |
| 666 | `conversion_cfunc.part04.test.ts` | `c_func_0132` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 double 的解析结果与性能。 |
| 667 | `conversion_cfunc.part04.test.ts` | `c_func_0133` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 bool 的解析结果与性能。 |
| 668 | `conversion_cfunc.part04.test.ts` | `c_func_0134` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 unsigned int 的解析结果与性能。 |
| 669 | `conversion_cfunc.part04.test.ts` | `c_func_0135` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 unsigned char 的解析结果与性能。 |
| 670 | `conversion_cfunc.part04.test.ts` | `c_func_0136` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 unsigned short 的解析结果与性能。 |
| 671 | `conversion_cfunc.part04.test.ts` | `c_func_0137` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 unsigned long 的解析结果与性能。 |
| 672 | `conversion_cfunc.part04.test.ts` | `c_func_0138` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 unsigned long long 的解析结果与性能。 |
| 673 | `conversion_cfunc.part04.test.ts` | `c_func_0139` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 signed char 的解析结果与性能。 |
| 674 | `conversion_cfunc.part04.test.ts` | `c_func_0140` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 signed short 的解析结果与性能。 |
| 675 | `conversion_cfunc.part04.test.ts` | `c_func_0141` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 signed long 的解析结果与性能。 |
| 676 | `conversion_cfunc.part04.test.ts` | `c_func_0142` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 wchar_t 的解析结果与性能。 |
| 677 | `conversion_cfunc.part04.test.ts` | `c_func_0143` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 char16_t 的解析结果与性能。 |
| 678 | `conversion_cfunc.part04.test.ts` | `c_func_0144` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 char32_t 的解析结果与性能。 |
| 679 | `conversion_cfunc.part04.test.ts` | `c_func_0145` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 size_t 的解析结果与性能。 |
| 680 | `conversion_cfunc.part04.test.ts` | `c_func_0146` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 int8_t 的解析结果与性能。 |
| 681 | `conversion_cfunc.part04.test.ts` | `c_func_0147` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 int16_t 的解析结果与性能。 |
| 682 | `conversion_cfunc.part04.test.ts` | `c_func_0148` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 int32_t 的解析结果与性能。 |
| 683 | `conversion_cfunc.part04.test.ts` | `c_func_0149` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 int64_t 的解析结果与性能。 |
| 684 | `conversion_cfunc.part04.test.ts` | `c_func_0150` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 uint8_t 的解析结果与性能。 |
| 685 | `conversion_cfunc.part04.test.ts` | `c_func_0151` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 uint16_t 的解析结果与性能。 |
| 686 | `conversion_cfunc.part04.test.ts` | `c_func_0152` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 uint32_t 的解析结果与性能。 |
| 687 | `conversion_cfunc.part04.test.ts` | `c_func_0153` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 uint64_t 的解析结果与性能。 |
| 688 | `conversion_cfunc.part04.test.ts` | `c_func_0154` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::string 的解析结果与性能。 |
| 689 | `conversion_cfunc.part04.test.ts` | `c_func_0155` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 string 的解析结果与性能。 |
| 690 | `conversion_cfunc.part04.test.ts` | `c_func_0156` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::wstring 的解析结果与性能。 |
| 691 | `conversion_cfunc.part04.test.ts` | `c_func_0157` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 long double 的解析结果与性能。 |
| 692 | `conversion_cfunc.part04.test.ts` | `c_func_0158` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 void 的解析结果与性能。 |
| 693 | `conversion_cfunc.part04.test.ts` | `c_func_0159` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::vector<int> 的解析结果与性能。 |
| 694 | `conversion_cfunc.part04.test.ts` | `c_func_0160` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::vector<std::string> 的解析结果与性能。 |
| 695 | `conversion_cfunc.part04.test.ts` | `c_func_0161` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::vector<double> 的解析结果与性能。 |
| 696 | `conversion_cfunc.part04.test.ts` | `c_func_0162` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::vector<bool> 的解析结果与性能。 |
| 697 | `conversion_cfunc.part04.test.ts` | `c_func_0163` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::map<std::string,int> 的解析结果与性能。 |
| 698 | `conversion_cfunc.part04.test.ts` | `c_func_0164` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::map<int,std::string> 的解析结果与性能。 |
| 699 | `conversion_cfunc.part04.test.ts` | `c_func_0165` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::set<int> 的解析结果与性能。 |
| 700 | `conversion_cfunc.part04.test.ts` | `c_func_0166` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::set<std::string> 的解析结果与性能。 |
| 701 | `conversion_cfunc.part04.test.ts` | `c_func_0167` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::list<int> 的解析结果与性能。 |
| 702 | `conversion_cfunc.part04.test.ts` | `c_func_0168` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::list<std::string> 的解析结果与性能。 |
| 703 | `conversion_cfunc.part04.test.ts` | `c_func_0169` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::deque<int> 的解析结果与性能。 |
| 704 | `conversion_cfunc.part04.test.ts` | `c_func_0170` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::deque<std::string> 的解析结果与性能。 |
| 705 | `conversion_cfunc.part04.test.ts` | `c_func_0171` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::pair<int,int> 的解析结果与性能。 |
| 706 | `conversion_cfunc.part04.test.ts` | `c_func_0172` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::pair<std::string,int> 的解析结果与性能。 |
| 707 | `conversion_cfunc.part04.test.ts` | `c_func_0173` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::tuple<int,int,int> 的解析结果与性能。 |
| 708 | `conversion_cfunc.part04.test.ts` | `c_func_0174` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::tuple<std::string,int,double> 的解析结果与性能。 |
| 709 | `conversion_cfunc.part04.test.ts` | `c_func_0175` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::queue<int> 的解析结果与性能。 |
| 710 | `conversion_cfunc.part04.test.ts` | `c_func_0176` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::stack<int> 的解析结果与性能。 |
| 711 | `conversion_cfunc.part04.test.ts` | `c_func_0177` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::priority_queue<int> 的解析结果与性能。 |
| 712 | `conversion_cfunc.part04.test.ts` | `c_func_0178` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::multimap<int,int> 的解析结果与性能。 |
| 713 | `conversion_cfunc.part04.test.ts` | `c_func_0179` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::multiset<int> 的解析结果与性能。 |
| 714 | `conversion_cfunc.part04.test.ts` | `c_func_0180` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::unordered_map<std::string,int> 的解析结果与性能。 |
| 715 | `conversion_cfunc.part04.test.ts` | `c_func_0181` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::unordered_set<int> 的解析结果与性能。 |
| 716 | `conversion_cfunc.part04.test.ts` | `c_func_0182` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::unordered_multimap<int,int> 的解析结果与性能。 |
| 717 | `conversion_cfunc.part04.test.ts` | `c_func_0183` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::unordered_multiset<int> 的解析结果与性能。 |
| 718 | `conversion_cfunc.part04.test.ts` | `c_func_0184` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::array<int,10> 的解析结果与性能。 |
| 719 | `conversion_cfunc.part04.test.ts` | `c_func_0185` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::array<std::string,5> 的解析结果与性能。 |
| 720 | `conversion_cfunc.part05.test.ts` | `c_func_0186` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::forward_list<int> 的解析结果与性能。 |
| 721 | `conversion_cfunc.part05.test.ts` | `c_func_0187` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::valarray<double> 的解析结果与性能。 |
| 722 | `conversion_cfunc.part05.test.ts` | `c_func_0188` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::complex<double> 的解析结果与性能。 |
| 723 | `conversion_cfunc.part05.test.ts` | `c_func_0189` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::function<int(int,int)> 的解析结果与性能。 |
| 724 | `conversion_cfunc.part05.test.ts` | `c_func_0190` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::function<void(std::string)> 的解析结果与性能。 |
| 725 | `conversion_cfunc.part05.test.ts` | `c_func_0191` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：int 的解析结果与性能。 |
| 726 | `conversion_cfunc.part05.test.ts` | `c_func_0192` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：char 的解析结果与性能。 |
| 727 | `conversion_cfunc.part05.test.ts` | `c_func_0193` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：short 的解析结果与性能。 |
| 728 | `conversion_cfunc.part05.test.ts` | `c_func_0194` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：long 的解析结果与性能。 |
| 729 | `conversion_cfunc.part05.test.ts` | `c_func_0195` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：long long 的解析结果与性能。 |
| 730 | `conversion_cfunc.part05.test.ts` | `c_func_0196` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：float 的解析结果与性能。 |
| 731 | `conversion_cfunc.part05.test.ts` | `c_func_0197` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：double 的解析结果与性能。 |
| 732 | `conversion_cfunc.part05.test.ts` | `c_func_0198` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：bool 的解析结果与性能。 |
| 733 | `conversion_cfunc.part05.test.ts` | `c_func_0199` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：unsigned int 的解析结果与性能。 |
| 734 | `conversion_cfunc.part05.test.ts` | `c_func_0200` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：unsigned char 的解析结果与性能。 |
| 735 | `conversion_cfunc.part05.test.ts` | `c_func_0201` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：unsigned short 的解析结果与性能。 |
| 736 | `conversion_cfunc.part05.test.ts` | `c_func_0202` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：unsigned long 的解析结果与性能。 |
| 737 | `conversion_cfunc.part05.test.ts` | `c_func_0203` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：unsigned long long 的解析结果与性能。 |
| 738 | `conversion_cfunc.part05.test.ts` | `c_func_0204` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：signed char 的解析结果与性能。 |
| 739 | `conversion_cfunc.part05.test.ts` | `c_func_0205` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：signed short 的解析结果与性能。 |
| 740 | `conversion_cfunc.part05.test.ts` | `c_func_0206` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：signed long 的解析结果与性能。 |
| 741 | `conversion_cfunc.part05.test.ts` | `c_func_0207` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：wchar_t 的解析结果与性能。 |
| 742 | `conversion_cfunc.part05.test.ts` | `c_func_0208` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：char16_t 的解析结果与性能。 |
| 743 | `conversion_cfunc.part05.test.ts` | `c_func_0209` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：char32_t 的解析结果与性能。 |
| 744 | `conversion_cfunc.part05.test.ts` | `c_func_0210` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：size_t 的解析结果与性能。 |
| 745 | `conversion_cfunc.part05.test.ts` | `c_func_0211` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：int8_t 的解析结果与性能。 |
| 746 | `conversion_cfunc.part05.test.ts` | `c_func_0212` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：int16_t 的解析结果与性能。 |
| 747 | `conversion_cfunc.part05.test.ts` | `c_func_0213` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：int32_t 的解析结果与性能。 |
| 748 | `conversion_cfunc.part05.test.ts` | `c_func_0214` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：int64_t 的解析结果与性能。 |
| 749 | `conversion_cfunc.part05.test.ts` | `c_func_0215` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：uint8_t 的解析结果与性能。 |
| 750 | `conversion_cfunc.part05.test.ts` | `c_func_0216` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：uint16_t 的解析结果与性能。 |
| 751 | `conversion_cfunc.part05.test.ts` | `c_func_0217` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：uint32_t 的解析结果与性能。 |
| 752 | `conversion_cfunc.part05.test.ts` | `c_func_0218` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：uint64_t 的解析结果与性能。 |
| 753 | `conversion_cfunc.part05.test.ts` | `c_func_0219` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::string 的解析结果与性能。 |
| 754 | `conversion_cfunc.part05.test.ts` | `c_func_0220` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：string 的解析结果与性能。 |
| 755 | `conversion_cfunc.part05.test.ts` | `c_func_0221` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::wstring 的解析结果与性能。 |
| 756 | `conversion_cfunc.part05.test.ts` | `c_func_0222` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：long double 的解析结果与性能。 |
| 757 | `conversion_cfunc.part05.test.ts` | `c_func_0223` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::vector<int> 的解析结果与性能。 |
| 758 | `conversion_cfunc.part05.test.ts` | `c_func_0224` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::vector<std::string> 的解析结果与性能。 |
| 759 | `conversion_cfunc.part05.test.ts` | `c_func_0225` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::vector<double> 的解析结果与性能。 |
| 760 | `conversion_cfunc.part05.test.ts` | `c_func_0226` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::vector<bool> 的解析结果与性能。 |
| 761 | `conversion_cfunc.part05.test.ts` | `c_func_0227` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::map<std::string,int> 的解析结果与性能。 |
| 762 | `conversion_cfunc.part05.test.ts` | `c_func_0228` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::map<int,std::string> 的解析结果与性能。 |
| 763 | `conversion_cfunc.part05.test.ts` | `c_func_0229` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::set<int> 的解析结果与性能。 |
| 764 | `conversion_cfunc.part05.test.ts` | `c_func_0230` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::set<std::string> 的解析结果与性能。 |
| 765 | `conversion_cfunc.part05.test.ts` | `c_func_0231` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::list<int> 的解析结果与性能。 |
| 766 | `conversion_cfunc.part05.test.ts` | `c_func_0232` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::list<std::string> 的解析结果与性能。 |
| 767 | `conversion_cfunc.part05.test.ts` | `c_func_0233` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::deque<int> 的解析结果与性能。 |
| 768 | `conversion_cfunc.part05.test.ts` | `c_func_0234` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::deque<std::string> 的解析结果与性能。 |
| 769 | `conversion_cfunc.part05.test.ts` | `c_func_0235` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::pair<int,int> 的解析结果与性能。 |
| 770 | `conversion_cfunc.part05.test.ts` | `c_func_0236` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::pair<std::string,int> 的解析结果与性能。 |
| 771 | `conversion_cfunc.part05.test.ts` | `c_func_0237` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::tuple<int,int,int> 的解析结果与性能。 |
| 772 | `conversion_cfunc.part05.test.ts` | `c_func_0238` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::tuple<std::string,int,double> 的解析结果与性能。 |
| 773 | `conversion_cfunc.part05.test.ts` | `c_func_0239` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::queue<int> 的解析结果与性能。 |
| 774 | `conversion_cfunc.part05.test.ts` | `c_func_0240` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::stack<int> 的解析结果与性能。 |
| 775 | `conversion_cfunc.part05.test.ts` | `c_func_0241` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::priority_queue<int> 的解析结果与性能。 |
| 776 | `conversion_cfunc.part05.test.ts` | `c_func_0242` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::multimap<int,int> 的解析结果与性能。 |
| 777 | `conversion_cfunc.part06.test.ts` | `c_func_0243` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::multiset<int> 的解析结果与性能。 |
| 778 | `conversion_cfunc.part06.test.ts` | `c_func_0244` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::unordered_map<std::string,int> 的解析结果与性能。 |
| 779 | `conversion_cfunc.part06.test.ts` | `c_func_0245` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::unordered_set<int> 的解析结果与性能。 |
| 780 | `conversion_cfunc.part06.test.ts` | `c_func_0246` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::unordered_multimap<int,int> 的解析结果与性能。 |
| 781 | `conversion_cfunc.part06.test.ts` | `c_func_0247` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::unordered_multiset<int> 的解析结果与性能。 |
| 782 | `conversion_cfunc.part06.test.ts` | `c_func_0248` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::array<int,10> 的解析结果与性能。 |
| 783 | `conversion_cfunc.part06.test.ts` | `c_func_0249` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::array<std::string,5> 的解析结果与性能。 |
| 784 | `conversion_cfunc.part06.test.ts` | `c_func_0250` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::forward_list<int> 的解析结果与性能。 |
| 785 | `conversion_cfunc.part06.test.ts` | `c_func_0251` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：int 的解析结果与性能。 |
| 786 | `conversion_cfunc.part06.test.ts` | `c_func_0252` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：char 的解析结果与性能。 |
| 787 | `conversion_cfunc.part06.test.ts` | `c_func_0253` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：short 的解析结果与性能。 |
| 788 | `conversion_cfunc.part06.test.ts` | `c_func_0254` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：long 的解析结果与性能。 |
| 789 | `conversion_cfunc.part06.test.ts` | `c_func_0255` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：long long 的解析结果与性能。 |
| 790 | `conversion_cfunc.part06.test.ts` | `c_func_0256` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：float 的解析结果与性能。 |
| 791 | `conversion_cfunc.part06.test.ts` | `c_func_0257` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：double 的解析结果与性能。 |
| 792 | `conversion_cfunc.part06.test.ts` | `c_func_0258` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：bool 的解析结果与性能。 |
| 793 | `conversion_cfunc.part06.test.ts` | `c_func_0259` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：unsigned int 的解析结果与性能。 |
| 794 | `conversion_cfunc.part06.test.ts` | `c_func_0260` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：unsigned char 的解析结果与性能。 |
| 795 | `conversion_cfunc.part06.test.ts` | `c_func_0261` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：unsigned short 的解析结果与性能。 |
| 796 | `conversion_cfunc.part06.test.ts` | `c_func_0262` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：unsigned long 的解析结果与性能。 |
| 797 | `conversion_cfunc.part06.test.ts` | `c_func_0263` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：unsigned long long 的解析结果与性能。 |
| 798 | `conversion_cfunc.part06.test.ts` | `c_func_0264` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：signed char 的解析结果与性能。 |
| 799 | `conversion_cfunc.part06.test.ts` | `c_func_0265` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：signed short 的解析结果与性能。 |
| 800 | `conversion_cfunc.part06.test.ts` | `c_func_0266` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：signed long 的解析结果与性能。 |
| 801 | `conversion_cfunc.part06.test.ts` | `c_func_0267` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：wchar_t 的解析结果与性能。 |
| 802 | `conversion_cfunc.part06.test.ts` | `c_func_0268` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：char16_t 的解析结果与性能。 |
| 803 | `conversion_cfunc.part06.test.ts` | `c_func_0269` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：char32_t 的解析结果与性能。 |
| 804 | `conversion_cfunc.part06.test.ts` | `c_func_0270` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：size_t 的解析结果与性能。 |
| 805 | `conversion_cfunc.part06.test.ts` | `c_func_0271` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：int8_t 的解析结果与性能。 |
| 806 | `conversion_cfunc.part06.test.ts` | `c_func_0272` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：int16_t 的解析结果与性能。 |
| 807 | `conversion_cfunc.part06.test.ts` | `c_func_0273` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：int32_t 的解析结果与性能。 |
| 808 | `conversion_cfunc.part06.test.ts` | `c_func_0274` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：int64_t 的解析结果与性能。 |
| 809 | `conversion_cfunc.part06.test.ts` | `c_func_0275` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：uint8_t 的解析结果与性能。 |
| 810 | `conversion_cfunc.part06.test.ts` | `c_func_0276` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：uint16_t 的解析结果与性能。 |
| 811 | `conversion_cfunc.part06.test.ts` | `c_func_0277` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：uint32_t 的解析结果与性能。 |
| 812 | `conversion_cfunc.part06.test.ts` | `c_func_0278` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：uint64_t 的解析结果与性能。 |
| 813 | `conversion_cfunc.part06.test.ts` | `c_func_0279` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::string 的解析结果与性能。 |
| 814 | `conversion_cfunc.part06.test.ts` | `c_func_0280` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：string 的解析结果与性能。 |
| 815 | `conversion_cfunc.part06.test.ts` | `c_func_0281` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::wstring 的解析结果与性能。 |
| 816 | `conversion_cfunc.part06.test.ts` | `c_func_0282` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：long double 的解析结果与性能。 |
| 817 | `conversion_cfunc.part06.test.ts` | `c_func_0283` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::vector<int> 的解析结果与性能。 |
| 818 | `conversion_cfunc.part06.test.ts` | `c_func_0284` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::vector<std::string> 的解析结果与性能。 |
| 819 | `conversion_cfunc.part06.test.ts` | `c_func_0285` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::vector<double> 的解析结果与性能。 |
| 820 | `conversion_cfunc.part06.test.ts` | `c_func_0286` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::vector<bool> 的解析结果与性能。 |
| 821 | `conversion_cfunc.part06.test.ts` | `c_func_0287` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::map<std::string,int> 的解析结果与性能。 |
| 822 | `conversion_cfunc.part06.test.ts` | `c_func_0288` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::map<int,std::string> 的解析结果与性能。 |
| 823 | `conversion_cfunc.part06.test.ts` | `c_func_0289` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::set<int> 的解析结果与性能。 |
| 824 | `conversion_cfunc.part06.test.ts` | `c_func_0290` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::set<std::string> 的解析结果与性能。 |
| 825 | `conversion_cfunc.part06.test.ts` | `c_func_0291` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::list<int> 的解析结果与性能。 |
| 826 | `conversion_cfunc.part06.test.ts` | `c_func_0292` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::list<std::string> 的解析结果与性能。 |
| 827 | `conversion_cfunc.part06.test.ts` | `c_func_0293` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::deque<int> 的解析结果与性能。 |
| 828 | `conversion_cfunc.part06.test.ts` | `c_func_0294` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::deque<std::string> 的解析结果与性能。 |
| 829 | `conversion_cfunc.part06.test.ts` | `c_func_0295` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::pair<int,int> 的解析结果与性能。 |
| 830 | `conversion_cfunc.part06.test.ts` | `c_func_0296` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::pair<std::string,int> 的解析结果与性能。 |
| 831 | `conversion_cfunc.part06.test.ts` | `c_func_0297` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::tuple<int,int,int> 的解析结果与性能。 |
| 832 | `conversion_cfunc.part06.test.ts` | `c_func_0298` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::tuple<std::string,int,double> 的解析结果与性能。 |
| 833 | `conversion_cfunc.part06.test.ts` | `c_func_0299` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::queue<int> 的解析结果与性能。 |
| 834 | `conversion_cfunc.part07.test.ts` | `c_func_0300` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::stack<int> 的解析结果与性能。 |
| 835 | `conversion_cfunc.part07.test.ts` | `c_func_0301` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::priority_queue<int> 的解析结果与性能。 |
| 836 | `conversion_cfunc.part07.test.ts` | `c_func_0302` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::multimap<int,int> 的解析结果与性能。 |
| 837 | `conversion_cfunc.part07.test.ts` | `c_func_0303` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::multiset<int> 的解析结果与性能。 |
| 838 | `conversion_cfunc.part07.test.ts` | `c_func_0304` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::unordered_map<std::string,int> 的解析结果与性能。 |
| 839 | `conversion_cfunc.part07.test.ts` | `c_func_0305` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::unordered_set<int> 的解析结果与性能。 |
| 840 | `conversion_cfunc.part07.test.ts` | `c_func_0306` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::unordered_multimap<int,int> 的解析结果与性能。 |
| 841 | `conversion_cfunc.part07.test.ts` | `c_func_0307` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::unordered_multiset<int> 的解析结果与性能。 |
| 842 | `conversion_cfunc.part07.test.ts` | `c_func_0308` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::array<int,10> 的解析结果与性能。 |
| 843 | `conversion_cfunc.part07.test.ts` | `c_func_0309` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::array<std::string,5> 的解析结果与性能。 |
| 844 | `conversion_cfunc.part07.test.ts` | `c_func_0310` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::forward_list<int> 的解析结果与性能。 |
| 845 | `conversion_cfunc.part07.test.ts` | `c_func_0311` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int, char) 的解析结果与性能。 |
| 846 | `conversion_cfunc.part07.test.ts` | `c_func_0312` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int, short) 的解析结果与性能。 |
| 847 | `conversion_cfunc.part07.test.ts` | `c_func_0313` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int, long) 的解析结果与性能。 |
| 848 | `conversion_cfunc.part07.test.ts` | `c_func_0314` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int, long long) 的解析结果与性能。 |
| 849 | `conversion_cfunc.part07.test.ts` | `c_func_0315` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int, float) 的解析结果与性能。 |
| 850 | `conversion_cfunc.part07.test.ts` | `c_func_0316` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int, double) 的解析结果与性能。 |
| 851 | `conversion_cfunc.part07.test.ts` | `c_func_0317` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char, short) 的解析结果与性能。 |
| 852 | `conversion_cfunc.part07.test.ts` | `c_func_0318` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char, long) 的解析结果与性能。 |
| 853 | `conversion_cfunc.part07.test.ts` | `c_func_0319` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char, long long) 的解析结果与性能。 |
| 854 | `conversion_cfunc.part07.test.ts` | `c_func_0320` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char, float) 的解析结果与性能。 |
| 855 | `conversion_cfunc.part07.test.ts` | `c_func_0321` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char, double) 的解析结果与性能。 |
| 856 | `conversion_cfunc.part07.test.ts` | `c_func_0322` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char, bool) 的解析结果与性能。 |
| 857 | `conversion_cfunc.part07.test.ts` | `c_func_0323` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(short, long) 的解析结果与性能。 |
| 858 | `conversion_cfunc.part07.test.ts` | `c_func_0324` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(short, long long) 的解析结果与性能。 |
| 859 | `conversion_cfunc.part07.test.ts` | `c_func_0325` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(short, float) 的解析结果与性能。 |
| 860 | `conversion_cfunc.part07.test.ts` | `c_func_0326` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(short, double) 的解析结果与性能。 |
| 861 | `conversion_cfunc.part07.test.ts` | `c_func_0327` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(short, bool) 的解析结果与性能。 |
| 862 | `conversion_cfunc.part07.test.ts` | `c_func_0328` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(short, unsigned int) 的解析结果与性能。 |
| 863 | `conversion_cfunc.part07.test.ts` | `c_func_0329` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long, long long) 的解析结果与性能。 |
| 864 | `conversion_cfunc.part07.test.ts` | `c_func_0330` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long, float) 的解析结果与性能。 |
| 865 | `conversion_cfunc.part07.test.ts` | `c_func_0331` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long, double) 的解析结果与性能。 |
| 866 | `conversion_cfunc.part07.test.ts` | `c_func_0332` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long, bool) 的解析结果与性能。 |
| 867 | `conversion_cfunc.part07.test.ts` | `c_func_0333` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long, unsigned int) 的解析结果与性能。 |
| 868 | `conversion_cfunc.part07.test.ts` | `c_func_0334` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long, unsigned char) 的解析结果与性能。 |
| 869 | `conversion_cfunc.part07.test.ts` | `c_func_0335` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long long, float) 的解析结果与性能。 |
| 870 | `conversion_cfunc.part07.test.ts` | `c_func_0336` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long long, double) 的解析结果与性能。 |
| 871 | `conversion_cfunc.part07.test.ts` | `c_func_0337` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long long, bool) 的解析结果与性能。 |
| 872 | `conversion_cfunc.part07.test.ts` | `c_func_0338` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long long, unsigned int) 的解析结果与性能。 |
| 873 | `conversion_cfunc.part07.test.ts` | `c_func_0339` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long long, unsigned char) 的解析结果与性能。 |
| 874 | `conversion_cfunc.part07.test.ts` | `c_func_0340` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long long, unsigned short) 的解析结果与性能。 |
| 875 | `conversion_cfunc.part07.test.ts` | `c_func_0341` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(float, double) 的解析结果与性能。 |
| 876 | `conversion_cfunc.part07.test.ts` | `c_func_0342` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(float, bool) 的解析结果与性能。 |
| 877 | `conversion_cfunc.part07.test.ts` | `c_func_0343` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(float, unsigned int) 的解析结果与性能。 |
| 878 | `conversion_cfunc.part07.test.ts` | `c_func_0344` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(float, unsigned char) 的解析结果与性能。 |
| 879 | `conversion_cfunc.part07.test.ts` | `c_func_0345` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(float, unsigned short) 的解析结果与性能。 |
| 880 | `conversion_cfunc.part07.test.ts` | `c_func_0346` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(float, unsigned long) 的解析结果与性能。 |
| 881 | `conversion_cfunc.part07.test.ts` | `c_func_0347` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(double, bool) 的解析结果与性能。 |
| 882 | `conversion_cfunc.part07.test.ts` | `c_func_0348` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(double, unsigned int) 的解析结果与性能。 |
| 883 | `conversion_cfunc.part07.test.ts` | `c_func_0349` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(double, unsigned char) 的解析结果与性能。 |
| 884 | `conversion_cfunc.part07.test.ts` | `c_func_0350` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(double, unsigned short) 的解析结果与性能。 |
| 885 | `conversion_cfunc.part07.test.ts` | `c_func_0351` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(double, unsigned long) 的解析结果与性能。 |
| 886 | `conversion_cfunc.part07.test.ts` | `c_func_0352` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(double, unsigned long long) 的解析结果与性能。 |
| 887 | `conversion_cfunc.part07.test.ts` | `c_func_0353` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(bool, unsigned int) 的解析结果与性能。 |
| 888 | `conversion_cfunc.part08.test.ts` | `c_func_0354` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(bool, unsigned char) 的解析结果与性能。 |
| 889 | `conversion_cfunc.part08.test.ts` | `c_func_0355` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(bool, unsigned short) 的解析结果与性能。 |
| 890 | `conversion_cfunc.part08.test.ts` | `c_func_0356` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(bool, unsigned long) 的解析结果与性能。 |
| 891 | `conversion_cfunc.part08.test.ts` | `c_func_0357` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(bool, unsigned long long) 的解析结果与性能。 |
| 892 | `conversion_cfunc.part08.test.ts` | `c_func_0358` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(bool, signed char) 的解析结果与性能。 |
| 893 | `conversion_cfunc.part08.test.ts` | `c_func_0359` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned int, unsigned char) 的解析结果与性能。 |
| 894 | `conversion_cfunc.part08.test.ts` | `c_func_0360` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned int, unsigned short) 的解析结果与性能。 |
| 895 | `conversion_cfunc.part08.test.ts` | `c_func_0361` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned int, unsigned long) 的解析结果与性能。 |
| 896 | `conversion_cfunc.part08.test.ts` | `c_func_0362` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned int, unsigned long long) 的解析结果与性能。 |
| 897 | `conversion_cfunc.part08.test.ts` | `c_func_0363` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned int, signed char) 的解析结果与性能。 |
| 898 | `conversion_cfunc.part08.test.ts` | `c_func_0364` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned int, signed short) 的解析结果与性能。 |
| 899 | `conversion_cfunc.part08.test.ts` | `c_func_0365` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned char, unsigned short) 的解析结果与性能。 |
| 900 | `conversion_cfunc.part08.test.ts` | `c_func_0366` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned char, unsigned long) 的解析结果与性能。 |
| 901 | `conversion_cfunc.part08.test.ts` | `c_func_0367` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned char, unsigned long long) 的解析结果与性能。 |
| 902 | `conversion_cfunc.part08.test.ts` | `c_func_0368` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned char, signed char) 的解析结果与性能。 |
| 903 | `conversion_cfunc.part08.test.ts` | `c_func_0369` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned char, signed short) 的解析结果与性能。 |
| 904 | `conversion_cfunc.part08.test.ts` | `c_func_0370` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned char, signed long) 的解析结果与性能。 |
| 905 | `conversion_cfunc.part08.test.ts` | `c_func_0371` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned short, unsigned long) 的解析结果与性能。 |
| 906 | `conversion_cfunc.part08.test.ts` | `c_func_0372` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned short, unsigned long long) 的解析结果与性能。 |
| 907 | `conversion_cfunc.part08.test.ts` | `c_func_0373` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned short, signed char) 的解析结果与性能。 |
| 908 | `conversion_cfunc.part08.test.ts` | `c_func_0374` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned short, signed short) 的解析结果与性能。 |
| 909 | `conversion_cfunc.part08.test.ts` | `c_func_0375` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned short, signed long) 的解析结果与性能。 |
| 910 | `conversion_cfunc.part08.test.ts` | `c_func_0376` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned short, wchar_t) 的解析结果与性能。 |
| 911 | `conversion_cfunc.part08.test.ts` | `c_func_0377` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long, unsigned long long) 的解析结果与性能。 |
| 912 | `conversion_cfunc.part08.test.ts` | `c_func_0378` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long, signed char) 的解析结果与性能。 |
| 913 | `conversion_cfunc.part08.test.ts` | `c_func_0379` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long, signed short) 的解析结果与性能。 |
| 914 | `conversion_cfunc.part08.test.ts` | `c_func_0380` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long, signed long) 的解析结果与性能。 |
| 915 | `conversion_cfunc.part08.test.ts` | `c_func_0381` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long, wchar_t) 的解析结果与性能。 |
| 916 | `conversion_cfunc.part08.test.ts` | `c_func_0382` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long, char16_t) 的解析结果与性能。 |
| 917 | `conversion_cfunc.part08.test.ts` | `c_func_0383` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long long, signed char) 的解析结果与性能。 |
| 918 | `conversion_cfunc.part08.test.ts` | `c_func_0384` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long long, signed short) 的解析结果与性能。 |
| 919 | `conversion_cfunc.part08.test.ts` | `c_func_0385` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long long, signed long) 的解析结果与性能。 |
| 920 | `conversion_cfunc.part08.test.ts` | `c_func_0386` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long long, wchar_t) 的解析结果与性能。 |
| 921 | `conversion_cfunc.part08.test.ts` | `c_func_0387` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long long, char16_t) 的解析结果与性能。 |
| 922 | `conversion_cfunc.part08.test.ts` | `c_func_0388` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long long, char32_t) 的解析结果与性能。 |
| 923 | `conversion_cfunc.part08.test.ts` | `c_func_0389` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed char, signed short) 的解析结果与性能。 |
| 924 | `conversion_cfunc.part08.test.ts` | `c_func_0390` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed char, signed long) 的解析结果与性能。 |
| 925 | `conversion_cfunc.part08.test.ts` | `c_func_0391` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed char, wchar_t) 的解析结果与性能。 |
| 926 | `conversion_cfunc.part08.test.ts` | `c_func_0392` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed char, char16_t) 的解析结果与性能。 |
| 927 | `conversion_cfunc.part08.test.ts` | `c_func_0393` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed char, char32_t) 的解析结果与性能。 |
| 928 | `conversion_cfunc.part08.test.ts` | `c_func_0394` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed char, size_t) 的解析结果与性能。 |
| 929 | `conversion_cfunc.part08.test.ts` | `c_func_0395` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed short, signed long) 的解析结果与性能。 |
| 930 | `conversion_cfunc.part08.test.ts` | `c_func_0396` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed short, wchar_t) 的解析结果与性能。 |
| 931 | `conversion_cfunc.part08.test.ts` | `c_func_0397` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed short, char16_t) 的解析结果与性能。 |
| 932 | `conversion_cfunc.part08.test.ts` | `c_func_0398` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed short, char32_t) 的解析结果与性能。 |
| 933 | `conversion_cfunc.part08.test.ts` | `c_func_0399` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed short, size_t) 的解析结果与性能。 |
| 934 | `conversion_cfunc.part08.test.ts` | `c_func_0400` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed short, int8_t) 的解析结果与性能。 |
| 935 | `conversion_cfunc.part08.test.ts` | `c_func_0401` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed long, wchar_t) 的解析结果与性能。 |
| 936 | `conversion_cfunc.part08.test.ts` | `c_func_0402` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed long, char16_t) 的解析结果与性能。 |
| 937 | `conversion_cfunc.part08.test.ts` | `c_func_0403` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed long, char32_t) 的解析结果与性能。 |
| 938 | `conversion_cfunc.part08.test.ts` | `c_func_0404` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed long, size_t) 的解析结果与性能。 |
| 939 | `conversion_cfunc.part08.test.ts` | `c_func_0405` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed long, int8_t) 的解析结果与性能。 |
| 940 | `conversion_cfunc.part08.test.ts` | `c_func_0406` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed long, int16_t) 的解析结果与性能。 |
| 941 | `conversion_cfunc.part09.test.ts` | `c_func_0407` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(wchar_t, char16_t) 的解析结果与性能。 |
| 942 | `conversion_cfunc.part09.test.ts` | `c_func_0408` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(wchar_t, char32_t) 的解析结果与性能。 |
| 943 | `conversion_cfunc.part09.test.ts` | `c_func_0409` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(wchar_t, size_t) 的解析结果与性能。 |
| 944 | `conversion_cfunc.part09.test.ts` | `c_func_0410` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(wchar_t, int8_t) 的解析结果与性能。 |
| 945 | `conversion_cfunc.part09.test.ts` | `c_func_0411` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(wchar_t, int16_t) 的解析结果与性能。 |
| 946 | `conversion_cfunc.part09.test.ts` | `c_func_0412` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(wchar_t, int32_t) 的解析结果与性能。 |
| 947 | `conversion_cfunc.part09.test.ts` | `c_func_0413` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char16_t, char32_t) 的解析结果与性能。 |
| 948 | `conversion_cfunc.part09.test.ts` | `c_func_0414` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char16_t, size_t) 的解析结果与性能。 |
| 949 | `conversion_cfunc.part09.test.ts` | `c_func_0415` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char16_t, int8_t) 的解析结果与性能。 |
| 950 | `conversion_cfunc.part09.test.ts` | `c_func_0416` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char16_t, int16_t) 的解析结果与性能。 |
| 951 | `conversion_cfunc.part09.test.ts` | `c_func_0417` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char16_t, int32_t) 的解析结果与性能。 |
| 952 | `conversion_cfunc.part09.test.ts` | `c_func_0418` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char16_t, int64_t) 的解析结果与性能。 |
| 953 | `conversion_cfunc.part09.test.ts` | `c_func_0419` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char32_t, size_t) 的解析结果与性能。 |
| 954 | `conversion_cfunc.part09.test.ts` | `c_func_0420` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char32_t, int8_t) 的解析结果与性能。 |
| 955 | `conversion_cfunc.part09.test.ts` | `c_func_0421` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char32_t, int16_t) 的解析结果与性能。 |
| 956 | `conversion_cfunc.part09.test.ts` | `c_func_0422` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char32_t, int32_t) 的解析结果与性能。 |
| 957 | `conversion_cfunc.part09.test.ts` | `c_func_0423` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char32_t, int64_t) 的解析结果与性能。 |
| 958 | `conversion_cfunc.part09.test.ts` | `c_func_0424` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char32_t, uint8_t) 的解析结果与性能。 |
| 959 | `conversion_cfunc.part09.test.ts` | `c_func_0425` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(size_t, int8_t) 的解析结果与性能。 |
| 960 | `conversion_cfunc.part09.test.ts` | `c_func_0426` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(size_t, int16_t) 的解析结果与性能。 |
| 961 | `conversion_cfunc.part09.test.ts` | `c_func_0427` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(size_t, int32_t) 的解析结果与性能。 |
| 962 | `conversion_cfunc.part09.test.ts` | `c_func_0428` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(size_t, int64_t) 的解析结果与性能。 |
| 963 | `conversion_cfunc.part09.test.ts` | `c_func_0429` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(size_t, uint8_t) 的解析结果与性能。 |
| 964 | `conversion_cfunc.part09.test.ts` | `c_func_0430` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(size_t, uint16_t) 的解析结果与性能。 |
| 965 | `conversion_cfunc.part09.test.ts` | `c_func_0431` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int8_t, int16_t) 的解析结果与性能。 |
| 966 | `conversion_cfunc.part09.test.ts` | `c_func_0432` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int8_t, int32_t) 的解析结果与性能。 |
| 967 | `conversion_cfunc.part09.test.ts` | `c_func_0433` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int8_t, int64_t) 的解析结果与性能。 |
| 968 | `conversion_cfunc.part09.test.ts` | `c_func_0434` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int8_t, uint8_t) 的解析结果与性能。 |
| 969 | `conversion_cfunc.part09.test.ts` | `c_func_0435` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int8_t, uint16_t) 的解析结果与性能。 |
| 970 | `conversion_cfunc.part09.test.ts` | `c_func_0436` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int8_t, uint32_t) 的解析结果与性能。 |
| 971 | `conversion_cfunc.part09.test.ts` | `c_func_0437` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int16_t, int32_t) 的解析结果与性能。 |
| 972 | `conversion_cfunc.part09.test.ts` | `c_func_0438` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int16_t, int64_t) 的解析结果与性能。 |
| 973 | `conversion_cfunc.part09.test.ts` | `c_func_0439` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int16_t, uint8_t) 的解析结果与性能。 |
| 974 | `conversion_cfunc.part09.test.ts` | `c_func_0440` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int16_t, uint16_t) 的解析结果与性能。 |
| 975 | `conversion_cfunc.part09.test.ts` | `c_func_0441` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int16_t, uint32_t) 的解析结果与性能。 |
| 976 | `conversion_cfunc.part09.test.ts` | `c_func_0442` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int16_t, uint64_t) 的解析结果与性能。 |
| 977 | `conversion_cfunc.part09.test.ts` | `c_func_0443` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int32_t, int64_t) 的解析结果与性能。 |
| 978 | `conversion_cfunc.part09.test.ts` | `c_func_0444` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int32_t, uint8_t) 的解析结果与性能。 |
| 979 | `conversion_cfunc.part09.test.ts` | `c_func_0445` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int32_t, uint16_t) 的解析结果与性能。 |
| 980 | `conversion_cfunc.part09.test.ts` | `c_func_0446` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int32_t, uint32_t) 的解析结果与性能。 |
| 981 | `conversion_cfunc.part09.test.ts` | `c_func_0447` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int32_t, uint64_t) 的解析结果与性能。 |
| 982 | `conversion_cfunc.part09.test.ts` | `c_func_0448` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int32_t, std::string) 的解析结果与性能。 |
| 983 | `conversion_cfunc.part09.test.ts` | `c_func_0449` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int64_t, uint8_t) 的解析结果与性能。 |
| 984 | `conversion_cfunc.part09.test.ts` | `c_func_0450` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int64_t, uint16_t) 的解析结果与性能。 |
| 985 | `conversion_cfunc.part09.test.ts` | `c_func_0451` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int64_t, uint32_t) 的解析结果与性能。 |
| 986 | `conversion_cfunc.part09.test.ts` | `c_func_0452` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int64_t, uint64_t) 的解析结果与性能。 |
| 987 | `conversion_cfunc.part09.test.ts` | `c_func_0453` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int64_t, std::string) 的解析结果与性能。 |
| 988 | `conversion_cfunc.part09.test.ts` | `c_func_0454` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int64_t, string) 的解析结果与性能。 |
| 989 | `conversion_cfunc.part09.test.ts` | `c_func_0455` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint8_t, uint16_t) 的解析结果与性能。 |
| 990 | `conversion_cfunc.part09.test.ts` | `c_func_0456` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint8_t, uint32_t) 的解析结果与性能。 |
| 991 | `conversion_cfunc.part09.test.ts` | `c_func_0457` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint8_t, uint64_t) 的解析结果与性能。 |
| 992 | `conversion_cfunc.part09.test.ts` | `c_func_0458` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint8_t, std::string) 的解析结果与性能。 |
| 993 | `conversion_cfunc.part09.test.ts` | `c_func_0459` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint8_t, string) 的解析结果与性能。 |
| 994 | `conversion_cfunc.part10.test.ts` | `c_func_0460` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint8_t, int) 的解析结果与性能。 |
| 995 | `conversion_cfunc.part10.test.ts` | `c_func_0461` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint16_t, uint32_t) 的解析结果与性能。 |
| 996 | `conversion_cfunc.part10.test.ts` | `c_func_0462` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint16_t, uint64_t) 的解析结果与性能。 |
| 997 | `conversion_cfunc.part10.test.ts` | `c_func_0463` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint16_t, std::string) 的解析结果与性能。 |
| 998 | `conversion_cfunc.part10.test.ts` | `c_func_0464` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint16_t, string) 的解析结果与性能。 |
| 999 | `conversion_cfunc.part10.test.ts` | `c_func_0465` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint16_t, int) 的解析结果与性能。 |
| 1000 | `conversion_cfunc.part10.test.ts` | `c_func_0466` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint16_t, char) 的解析结果与性能。 |
| 1001 | `conversion_cfunc.part10.test.ts` | `c_func_0467` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint32_t, uint64_t) 的解析结果与性能。 |
| 1002 | `conversion_cfunc.part10.test.ts` | `c_func_0468` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint32_t, std::string) 的解析结果与性能。 |
| 1003 | `conversion_cfunc.part10.test.ts` | `c_func_0469` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint32_t, string) 的解析结果与性能。 |
| 1004 | `conversion_cfunc.part10.test.ts` | `c_func_0470` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint32_t, int) 的解析结果与性能。 |
| 1005 | `conversion_cfunc.part10.test.ts` | `c_func_0471` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint32_t, char) 的解析结果与性能。 |
| 1006 | `conversion_cfunc.part10.test.ts` | `c_func_0472` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint32_t, short) 的解析结果与性能。 |
| 1007 | `conversion_cfunc.part10.test.ts` | `c_func_0473` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint64_t, std::string) 的解析结果与性能。 |
| 1008 | `conversion_cfunc.part10.test.ts` | `c_func_0474` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint64_t, string) 的解析结果与性能。 |
| 1009 | `conversion_cfunc.part10.test.ts` | `c_func_0475` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint64_t, int) 的解析结果与性能。 |
| 1010 | `conversion_cfunc.part10.test.ts` | `c_func_0476` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint64_t, char) 的解析结果与性能。 |
| 1011 | `conversion_cfunc.part10.test.ts` | `c_func_0477` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint64_t, short) 的解析结果与性能。 |
| 1012 | `conversion_cfunc.part10.test.ts` | `c_func_0478` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint64_t, long) 的解析结果与性能。 |
| 1013 | `conversion_cfunc.part10.test.ts` | `c_func_0479` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(std::string, string) 的解析结果与性能。 |
| 1014 | `conversion_cfunc.part10.test.ts` | `c_func_0480` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(std::string, int) 的解析结果与性能。 |
| 1015 | `conversion_cfunc.part10.test.ts` | `c_func_0481` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(std::string, char) 的解析结果与性能。 |
| 1016 | `conversion_cfunc.part10.test.ts` | `c_func_0482` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(std::string, short) 的解析结果与性能。 |
| 1017 | `conversion_cfunc.part10.test.ts` | `c_func_0483` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(std::string, long) 的解析结果与性能。 |
| 1018 | `conversion_cfunc.part10.test.ts` | `c_func_0484` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(std::string, long long) 的解析结果与性能。 |
| 1019 | `conversion_cfunc.part10.test.ts` | `c_func_0485` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(string, int) 的解析结果与性能。 |
| 1020 | `conversion_cfunc.part10.test.ts` | `c_func_0486` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(string, char) 的解析结果与性能。 |
| 1021 | `conversion_cfunc.part10.test.ts` | `c_func_0487` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(string, short) 的解析结果与性能。 |
| 1022 | `conversion_cfunc.part10.test.ts` | `c_func_0488` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(string, long) 的解析结果与性能。 |
| 1023 | `conversion_cfunc.part10.test.ts` | `c_func_0489` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(string, long long) 的解析结果与性能。 |
| 1024 | `conversion_cfunc.part10.test.ts` | `c_func_0490` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(string, float) 的解析结果与性能。 |
| 1025 | `conversion_cfunc.part10.test.ts` | `c_func_0491` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(int, char, short) 的解析结果与性能。 |
| 1026 | `conversion_cfunc.part10.test.ts` | `c_func_0492` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(int, long, long long) 的解析结果与性能。 |
| 1027 | `conversion_cfunc.part10.test.ts` | `c_func_0493` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(char, short, long) 的解析结果与性能。 |
| 1028 | `conversion_cfunc.part10.test.ts` | `c_func_0494` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(char, long long, float) 的解析结果与性能。 |
| 1029 | `conversion_cfunc.part10.test.ts` | `c_func_0495` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(short, long, long long) 的解析结果与性能。 |
| 1030 | `conversion_cfunc.part10.test.ts` | `c_func_0496` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(short, float, double) 的解析结果与性能。 |
| 1031 | `conversion_cfunc.part10.test.ts` | `c_func_0497` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(long, long long, float) 的解析结果与性能。 |
| 1032 | `conversion_cfunc.part10.test.ts` | `c_func_0498` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(long, double, bool) 的解析结果与性能。 |
| 1033 | `conversion_cfunc.part10.test.ts` | `c_func_0499` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(long long, float, double) 的解析结果与性能。 |
| 1034 | `conversion_cfunc.part10.test.ts` | `c_func_0500` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(long long, bool, unsigned int) 的解析结果与性能。 |
| 1035 | `conversion_cfunc.part10.test.ts` | `c_func_0501` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(float, double, bool) 的解析结果与性能。 |
| 1036 | `conversion_cfunc.part10.test.ts` | `c_func_0502` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(float, unsigned int, unsigned char) 的解析结果与性能。 |
| 1037 | `conversion_cfunc.part10.test.ts` | `c_func_0503` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(double, bool, unsigned int) 的解析结果与性能。 |
| 1038 | `conversion_cfunc.part10.test.ts` | `c_func_0504` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(double, unsigned char, unsigned short) 的解析结果与性能。 |
| 1039 | `conversion_cfunc.part10.test.ts` | `c_func_0505` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(bool, unsigned int, unsigned char) 的解析结果与性能。 |
| 1040 | `conversion_cfunc.part10.test.ts` | `c_func_0506` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(bool, unsigned short, unsigned long) 的解析结果与性能。 |
| 1041 | `conversion_cfunc.part10.test.ts` | `c_func_0507` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned int, unsigned char, unsigned short) 的解析结果与性能。 |
| 1042 | `conversion_cfunc.part10.test.ts` | `c_func_0508` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned int, unsigned long, unsigned long long) 的解析结果与性能。 |
| 1043 | `conversion_cfunc.part10.test.ts` | `c_func_0509` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned char, unsigned short, unsigned long) 的解析结果与性能。 |
| 1044 | `conversion_cfunc.part10.test.ts` | `c_func_0510` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned char, unsigned long long, signed char) 的解析结果与性能。 |
| 1045 | `conversion_cfunc.part10.test.ts` | `c_func_0511` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned short, unsigned long, unsigned long long) 的解析结果与性能。 |
| 1046 | `conversion_cfunc.part11.test.ts` | `c_func_0512` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned short, signed char, signed short) 的解析结果与性能。 |
| 1047 | `conversion_cfunc.part11.test.ts` | `c_func_0513` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned long, unsigned long long, signed char) 的解析结果与性能。 |
| 1048 | `conversion_cfunc.part11.test.ts` | `c_func_0514` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned long, signed short, signed long) 的解析结果与性能。 |
| 1049 | `conversion_cfunc.part11.test.ts` | `c_func_0515` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned long long, signed char, signed short) 的解析结果与性能。 |
| 1050 | `conversion_cfunc.part11.test.ts` | `c_func_0516` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned long long, signed long, wchar_t) 的解析结果与性能。 |
| 1051 | `conversion_cfunc.part11.test.ts` | `c_func_0517` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(signed char, signed short, signed long) 的解析结果与性能。 |
| 1052 | `conversion_cfunc.part11.test.ts` | `c_func_0518` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(signed char, wchar_t, char16_t) 的解析结果与性能。 |
| 1053 | `conversion_cfunc.part11.test.ts` | `c_func_0519` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(signed short, signed long, wchar_t) 的解析结果与性能。 |
| 1054 | `conversion_cfunc.part11.test.ts` | `c_func_0520` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(signed short, char16_t, char32_t) 的解析结果与性能。 |
| 1055 | `conversion_cfunc.part11.test.ts` | `c_func_0521` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(signed long, wchar_t, char16_t) 的解析结果与性能。 |
| 1056 | `conversion_cfunc.part11.test.ts` | `c_func_0522` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(signed long, char32_t, size_t) 的解析结果与性能。 |
| 1057 | `conversion_cfunc.part11.test.ts` | `c_func_0523` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(wchar_t, char16_t, char32_t) 的解析结果与性能。 |
| 1058 | `conversion_cfunc.part11.test.ts` | `c_func_0524` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(wchar_t, size_t, int) 的解析结果与性能。 |
| 1059 | `conversion_cfunc.part11.test.ts` | `c_func_0525` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(char16_t, char32_t, size_t) 的解析结果与性能。 |
| 1060 | `conversion_cfunc.part11.test.ts` | `c_func_0526` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(char16_t, int, char) 的解析结果与性能。 |
| 1061 | `conversion_cfunc.part11.test.ts` | `c_func_0527` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(char32_t, size_t, int) 的解析结果与性能。 |
| 1062 | `conversion_cfunc.part11.test.ts` | `c_func_0528` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(char32_t, char, short) 的解析结果与性能。 |
| 1063 | `conversion_cfunc.part11.test.ts` | `c_func_0529` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(size_t, int, char) 的解析结果与性能。 |
| 1064 | `conversion_cfunc.part11.test.ts` | `c_func_0530` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(size_t, short, long) 的解析结果与性能。 |
| 1065 | `conversion_cfunc.part11.test.ts` | `c_func_0531` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(int, short, long long, double) 的解析结果与性能。 |
| 1066 | `conversion_cfunc.part11.test.ts` | `c_func_0532` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(char, long, float, bool) 的解析结果与性能。 |
| 1067 | `conversion_cfunc.part11.test.ts` | `c_func_0533` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(short, long long, double, unsigned int) 的解析结果与性能。 |
| 1068 | `conversion_cfunc.part11.test.ts` | `c_func_0534` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(long, float, bool, unsigned char) 的解析结果与性能。 |
| 1069 | `conversion_cfunc.part11.test.ts` | `c_func_0535` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(long long, double, unsigned int, unsigned short) 的解析结果与性能。 |
| 1070 | `conversion_cfunc.part11.test.ts` | `c_func_0536` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(float, bool, unsigned char, unsigned long) 的解析结果与性能。 |
| 1071 | `conversion_cfunc.part11.test.ts` | `c_func_0537` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(double, unsigned int, unsigned short, unsigned long long) 的解析结果与性能。 |
| 1072 | `conversion_cfunc.part11.test.ts` | `c_func_0538` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(bool, unsigned char, unsigned long, signed char) 的解析结果与性能。 |
| 1073 | `conversion_cfunc.part11.test.ts` | `c_func_0539` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(unsigned int, unsigned short, unsigned long long, signed short) 的解析结果与性能。 |
| 1074 | `conversion_cfunc.part11.test.ts` | `c_func_0540` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(unsigned char, unsigned long, signed char, signed long) 的解析结果与性能。 |
| 1075 | `conversion_cfunc.part11.test.ts` | `c_func_0541` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(unsigned short, unsigned long long, signed short, wchar_t) 的解析结果与性能。 |
| 1076 | `conversion_cfunc.part11.test.ts` | `c_func_0542` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(unsigned long, signed char, signed long, char16_t) 的解析结果与性能。 |
| 1077 | `conversion_cfunc.part11.test.ts` | `c_func_0543` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(unsigned long long, signed short, wchar_t, char32_t) 的解析结果与性能。 |
| 1078 | `conversion_cfunc.part11.test.ts` | `c_func_0544` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(signed char, signed long, char16_t, size_t) 的解析结果与性能。 |
| 1079 | `conversion_cfunc.part11.test.ts` | `c_func_0545` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(signed short, wchar_t, char32_t, int) 的解析结果与性能。 |
| 1080 | `conversion_cfunc.part11.test.ts` | `c_func_0546` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(signed long, char16_t, size_t, char) 的解析结果与性能。 |
| 1081 | `conversion_cfunc.part11.test.ts` | `c_func_0547` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(wchar_t, char32_t, int, short) 的解析结果与性能。 |
| 1082 | `conversion_cfunc.part11.test.ts` | `c_func_0548` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(char16_t, size_t, char, long) 的解析结果与性能。 |
| 1083 | `conversion_cfunc.part11.test.ts` | `c_func_0549` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(char32_t, int, short, long long) 的解析结果与性能。 |
| 1084 | `conversion_cfunc.part11.test.ts` | `c_func_0550` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(size_t, char, long, float) 的解析结果与性能。 |
| 1085 | `conversion_cfunc.part11.test.ts` | `c_func_0551` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：int + long + double + unsigned char + unsigned long long 的解析结果与性能。 |
| 1086 | `conversion_cfunc.part11.test.ts` | `c_func_0552` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：char + long long + bool + unsigned short + signed char 的解析结果与性能。 |
| 1087 | `conversion_cfunc.part11.test.ts` | `c_func_0553` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：short + float + unsigned int + unsigned long + signed short 的解析结果与性能。 |
| 1088 | `conversion_cfunc.part11.test.ts` | `c_func_0554` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：long + double + unsigned char + unsigned long long + signed long 的解析结果与性能。 |
| 1089 | `conversion_cfunc.part11.test.ts` | `c_func_0555` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：long long + bool + unsigned short + signed char + wchar_t 的解析结果与性能。 |
| 1090 | `conversion_cfunc.part11.test.ts` | `c_func_0556` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：float + unsigned int + unsigned long + signed short + char16_t 的解析结果与性能。 |
| 1091 | `conversion_cfunc.part11.test.ts` | `c_func_0557` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：double + unsigned char + unsigned long long + signed long + char32_t 的解析结果与性能。 |
| 1092 | `conversion_cfunc.part11.test.ts` | `c_func_0558` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：bool + unsigned short + signed char + wchar_t + size_t 的解析结果与性能。 |
| 1093 | `conversion_cfunc.part11.test.ts` | `c_func_0559` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：unsigned int + unsigned long + signed short + char16_t + int 的解析结果与性能。 |
| 1094 | `conversion_cfunc.part12.test.ts` | `c_func_0560` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：unsigned char + unsigned long long + signed long + char32_t + char 的解析结果与性能。 |
| 1095 | `conversion_cfunc.part12.test.ts` | `c_func_0561` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：unsigned short + signed char + wchar_t + size_t + short 的解析结果与性能。 |
| 1096 | `conversion_cfunc.part12.test.ts` | `c_func_0562` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：unsigned long + signed short + char16_t + int + long 的解析结果与性能。 |
| 1097 | `conversion_cfunc.part12.test.ts` | `c_func_0563` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：unsigned long long + signed long + char32_t + char + long long 的解析结果与性能。 |
| 1098 | `conversion_cfunc.part12.test.ts` | `c_func_0564` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：signed char + wchar_t + size_t + short + float 的解析结果与性能。 |
| 1099 | `conversion_cfunc.part12.test.ts` | `c_func_0565` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：signed short + char16_t + int + long + double 的解析结果与性能。 |
| 1100 | `conversion_cfunc.part12.test.ts` | `c_func_0566` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：signed long + char32_t + char + long long + bool 的解析结果与性能。 |
| 1101 | `conversion_cfunc.part12.test.ts` | `c_func_0567` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：wchar_t + size_t + short + float + unsigned int 的解析结果与性能。 |
| 1102 | `conversion_cfunc.part12.test.ts` | `c_func_0568` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：char16_t + int + long + double + unsigned char 的解析结果与性能。 |
| 1103 | `conversion_cfunc.part12.test.ts` | `c_func_0569` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：char32_t + char + long long + bool + unsigned short 的解析结果与性能。 |
| 1104 | `conversion_cfunc.part12.test.ts` | `c_func_0570` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：size_t + short + float + unsigned int + unsigned long 的解析结果与性能。 |
| 1105 | `conversion_cfunc.part12.test.ts` | `c_func_0571` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：int[4] 的解析结果与性能。 |
| 1106 | `conversion_cfunc.part12.test.ts` | `c_func_0572` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：char[8] 的解析结果与性能。 |
| 1107 | `conversion_cfunc.part12.test.ts` | `c_func_0573` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：short[10] 的解析结果与性能。 |
| 1108 | `conversion_cfunc.part12.test.ts` | `c_func_0574` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：long[16] 的解析结果与性能。 |
| 1109 | `conversion_cfunc.part12.test.ts` | `c_func_0575` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：long long[20] 的解析结果与性能。 |
| 1110 | `conversion_cfunc.part12.test.ts` | `c_func_0576` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：float[32] 的解析结果与性能。 |
| 1111 | `conversion_cfunc.part12.test.ts` | `c_func_0577` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：double[64] 的解析结果与性能。 |
| 1112 | `conversion_cfunc.part12.test.ts` | `c_func_0578` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：bool[100] 的解析结果与性能。 |
| 1113 | `conversion_cfunc.part12.test.ts` | `c_func_0579` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：unsigned int[128] 的解析结果与性能。 |
| 1114 | `conversion_cfunc.part12.test.ts` | `c_func_0580` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：unsigned char[256] 的解析结果与性能。 |
| 1115 | `conversion_cfunc.part12.test.ts` | `c_func_0581` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：unsigned short[4] 的解析结果与性能。 |
| 1116 | `conversion_cfunc.part12.test.ts` | `c_func_0582` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：unsigned long[8] 的解析结果与性能。 |
| 1117 | `conversion_cfunc.part12.test.ts` | `c_func_0583` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：unsigned long long[10] 的解析结果与性能。 |
| 1118 | `conversion_cfunc.part12.test.ts` | `c_func_0584` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：signed char[16] 的解析结果与性能。 |
| 1119 | `conversion_cfunc.part12.test.ts` | `c_func_0585` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：signed short[20] 的解析结果与性能。 |
| 1120 | `conversion_cfunc.part12.test.ts` | `c_func_0586` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：signed long[32] 的解析结果与性能。 |
| 1121 | `conversion_cfunc.part12.test.ts` | `c_func_0587` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：wchar_t[64] 的解析结果与性能。 |
| 1122 | `conversion_cfunc.part12.test.ts` | `c_func_0588` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：char16_t[100] 的解析结果与性能。 |
| 1123 | `conversion_cfunc.part12.test.ts` | `c_func_0589` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：char32_t[128] 的解析结果与性能。 |
